#!/usr/bin/env node
// Runtime motion check: proves the animations on a page really run, and judges how they run.
// No npm packages: talks to Chrome over the DevTools protocol (Node 22+ for WebSocket).
//
//   node motion.mjs index.html
//   node motion.mjs http://localhost:5173/ --mobile --strip 10
//   node motion.mjs intro.html --frames 60          a page exposing window.__timeline: every frame as PNG
//
// Reports: an inventory of every CSS / Web Animation (and GSAP tween) that ran; a filmstrip of the
// entrance (or of window.__timeline at even steps); animations that could not run on the compositor;
// long animation frames and frame stalls; sameness (one duration and curve everywhere, one entrance
// preset, stagger chains, reveals on every block); loops that are not loaders; overshoot on UI;
// and everything that still moves under prefers-reduced-motion. FAIL = broken or inaccessible,
// WARN = a tell (motion/lint.md). Set CHROME_PATH when Chrome or Edge is not in a usual place.

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { pathToFileURL } from 'node:url';
import { findChrome } from './chrome.mjs';

const USAGE = 'usage: node motion.mjs <file.html | url> [--out dir] [--mobile] [--strip 8] [--window ms] [--frames fps] [--no-scroll] [--json]\n' +
  'Filmstrip and frames go to --out, or to .atelier/motion next to the file (a URL: under the current folder).';
const args = process.argv.slice(2);
const opts = { strip: 8 };
let target;
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '--help' || a === '-h') { console.log(USAGE); process.exit(0); }
  if (['--mobile', '--json', '--no-scroll'].includes(a)) opts[a.slice(2)] = true;
  else if (['--out', '--strip', '--window', '--frames'].includes(a)) opts[a.slice(2)] = args[++i];
  else if (a.startsWith('-')) { console.log(`unknown option ${a}\n${USAGE}`); process.exit(2); }
  else target = a;
}
if (!target) { console.log(USAGE); process.exit(0); }
if (typeof WebSocket === 'undefined') { console.log('motion.mjs needs Node 22 or later (built-in WebSocket). Check the motion by hand and say so.'); process.exit(2); }
const chromePath = findChrome();
if (!chromePath) { console.log('No Chrome, Chromium or Edge found. Set CHROME_PATH, or check the motion by hand and say so.'); process.exit(2); }

const [filePart, ...rest] = target.split(/(?=[?#])/);
const isUrl = /^https?:|^file:/.test(target);
if (!isUrl && !fs.existsSync(filePart)) { console.log('file not found: ' + filePart); process.exit(2); }
const url = isUrl ? target : pathToFileURL(path.resolve(filePart)).href + rest.join('');
const outDir = path.resolve(opts.out || (isUrl ? '.atelier/motion' : path.join(path.dirname(path.resolve(filePart)), '.atelier', 'motion')));
fs.mkdirSync(outDir, { recursive: true });
const VIEW = opts.mobile ? { width: 390, height: 844, mobile: true } : { width: 1280, height: 800, mobile: false };
const STRIP = Math.max(2, Math.min(24, Number(opts.strip) || 8));

const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'atelier-motion-'));
const port = 9300 + Math.floor(Math.random() * 500);
const chrome = spawn(chromePath, ['--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`, '--no-first-run',
  '--no-default-browser-check', '--hide-scrollbars', '--mute-audio', '--disable-extensions', '--allow-file-access-from-files', 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function devtoolsUrl() {
  for (let i = 0; i < 60; i++) {
    try { const page = (await (await fetch(`http://127.0.0.1:${port}/json/list`)).json()).find((t) => t.type === 'page'); if (page) return page.webSocketDebuggerUrl; } catch { /* starting */ }
    await sleep(150);
  }
  throw new Error('Chrome did not open its DevTools port');
}
function client(wsUrl) {
  const ws = new WebSocket(wsUrl);
  let id = 0;
  const pending = new Map(), listeners = [];
  ws.onmessage = (ev) => {
    const msg = JSON.parse(typeof ev.data === 'string' ? ev.data : ev.data.toString());
    if (msg.id && pending.has(msg.id)) { const p = pending.get(msg.id); pending.delete(msg.id); msg.error ? p.reject(new Error(msg.error.message)) : p.resolve(msg.result); }
    else if (msg.method) listeners.forEach((l) => l(msg));
  };
  return {
    ready: new Promise((r, j) => { ws.onopen = r; ws.onerror = j; }),
    send: (method, params = {}) => new Promise((resolve, reject) => { const n = ++id; pending.set(n, { resolve, reject }); ws.send(JSON.stringify({ id: n, method, params })); }),
    on: (fn) => listeners.push(fn),
    close: () => ws.close(),
  };
}

// Installed before any page script: records every animation the moment it appears, long animation
// frames, and the gaps between frames.
const PROBE = `(() => {
  const mo = window.__mo = { t0: performance.now(), anims: [], loaf: [], deltas: [], scrollAt: null };
  const seen = new WeakSet();
  const sel = (el) => { if (!el || !el.tagName) return '?'; let s = el.tagName.toLowerCase(); if (el.id) s += '#' + el.id; else if (typeof el.className === 'string' && el.className.trim()) s += '.' + el.className.trim().split(/\\s+/).slice(0, 2).join('.'); return s; };
  const loaderRe = /spin|load|skeleton|(^|[-_ ])sk([-_ ]|$)|progress|shimmer|busy|pulse-dot|live|recording|caret/i;
  const isLoader = (el) => !!el && (!!el.closest?.('[aria-busy="true"],[role=progressbar],[role=status] svg,[role=status] i,.spinner') ||
    [el, el.parentElement].some((x) => x && loaderRe.test((typeof x.className === 'string' ? x.className : '') + ' ' + (x.id || ''))));
  const num = (v) => { const n = parseFloat(v); return Number.isFinite(n) ? n : null; };
  const dyOf = (k) => { try { if (k.translate && k.translate !== 'none') { const p = String(k.translate).split(/\\s+/); return num(p[1] || 0); } if (k.transform && k.transform !== 'none') return new DOMMatrixReadOnly(k.transform).m42; } catch {} return 0; };
  const scaleOf = (k) => { try { if (k.scale && k.scale !== 'none') return num(String(k.scale).split(/\\s+/)[0]); if (k.transform && k.transform !== 'none') return new DOMMatrixReadOnly(k.transform).a; } catch {} return 1; };
  function record(a) {
    const e = a.effect; if (!e) return;
    let tm, kf = [];
    try { tm = e.getTiming(); kf = e.getKeyframes ? e.getKeyframes() : []; } catch { return; }
    const el = e.target;
    const skip = new Set(['offset', 'computedOffset', 'easing', 'composite']);
    const props = [...new Set(kf.flatMap((k) => Object.keys(k).filter((p) => !skip.has(p))))];
    const kfEasing = kf.map((k) => k.easing).find((x) => x && x !== 'linear');
    const first = kf[0] || {}, last = kf[kf.length - 1] || {};
    const tl = a.timeline ? a.timeline.constructor.name : 'none';
    mo.anims.push({
      kind: a.constructor.name, name: a.animationName || a.transitionProperty || a.id || '',
      sel: sel(el) + (e.pseudoElement || ''), tag: el?.tagName?.toLowerCase() || '', parent: el?.parentElement ? sel(el.parentElement) + '@' + [...(el.parentElement.parentElement?.children || [])].indexOf(el.parentElement) : '',
      text: !!el?.matches?.('h1,h2,h3,h4,p,li,blockquote'), overlay: !!el?.closest?.('dialog,[popover],[role=dialog],[role=alertdialog],[role=status],[role=alert],[role=menu],[role=tooltip]'),
      interactive: !!el?.closest?.('a,button,input,select,textarea,[role=button],[role=tab],[role=switch]'),
      loader: isLoader(el), props, duration: typeof tm.duration === 'number' ? Math.round(tm.duration) : String(tm.duration),
      delay: Math.round(tm.delay || 0), iterations: tm.iterations === Infinity ? 'inf' : tm.iterations,
      easing: tm.easing && tm.easing !== 'linear' ? tm.easing : (kfEasing || 'linear'), timeline: tl,
      fromOpacity: num(first.opacity), toOpacity: num(last.opacity), dy: Math.round(dyOf(first) - dyOf(last)), fromScale: scaleOf(first),
      start: Math.round(performance.now() - mo.t0), afterScroll: mo.scrollAt !== null,
    });
  }
  try { new PerformanceObserver((l) => { for (const x of l.getEntries()) mo.loaf.push({ at: Math.round(x.startTime), dur: Math.round(x.duration), blocking: Math.round(x.blockingDuration || 0),
    scripts: (x.scripts || []).map((s) => (s.invoker || '') + (s.sourceFunctionName ? ' ' + s.sourceFunctionName : '') + (s.sourceURL ? ' ' + s.sourceURL.split('/').pop() : '')).slice(0, 2) }); })
    .observe({ type: 'long-animation-frame', buffered: true }); } catch {}
  let last = 0;
  const tick = (t) => { if (last) mo.deltas.push([Math.round(t), +(t - last).toFixed(1)]); last = t;
    try { for (const a of document.getAnimations()) if (!seen.has(a)) { seen.add(a); record(a); } } catch {}
    requestAnimationFrame(tick); };
  requestAnimationFrame(tick);
})();`;

const COMPOSITE_REASONS = { 4: 'invalid', 8: 'timing not supported', 16: 'non-replace composite', 32: 'target cannot composite', 64: 'incompatible animations', 128: 'css offset',
  512: 'not a CSS property', 1024: 'transform not supported on target', 2048: 'transform depends on box size', 4096: 'filter moves pixels (blur/drop-shadow)',
  8192: 'property not composited', 32768: 'mixed keyframe types', 65536: 'timeline source invalid', 262144: '!important', 524288: 'SVG independent transform' };

const consoleErrors = [];
const frames = [];
let filmstrip = null, framesDir = null, timelineInfo = null;
const pass = {};

try {
  const cdp = client(await devtoolsUrl());
  await cdp.ready;
  const evaluate = async (expression) => (await cdp.send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true })).result.value;
  cdp.on((m) => {
    if (m.method === 'Runtime.exceptionThrown') consoleErrors.push(m.params.exceptionDetails.exception?.description?.split('\n')[0] || m.params.exceptionDetails.text);
    if (m.method === 'Runtime.consoleAPICalled' && m.params.type === 'error') consoleErrors.push(m.params.args.map((a) => a.value ?? a.description ?? '').join(' ').slice(0, 200));
    if (m.method === 'Log.entryAdded' && m.params.entry.level === 'error' && !/favicon\.ico$/.test(m.params.entry.url || '')) consoleErrors.push(m.params.entry.text.slice(0, 200));
    if (m.method === 'Page.screencastFrame') { frames.push({ t: m.params.metadata.timestamp * 1000, data: m.params.data }); cdp.send('Page.screencastFrameAck', { sessionId: m.params.sessionId }).catch(() => {}); }
  });
  await cdp.send('Page.enable'); await cdp.send('Runtime.enable'); await cdp.send('Log.enable');
  await cdp.send('Page.addScriptToEvaluateOnNewDocument', { source: PROBE });
  await cdp.send('Emulation.setDeviceMetricsOverride', { width: VIEW.width, height: VIEW.height, deviceScaleFactor: 1, mobile: VIEW.mobile });
  const loaded = () => new Promise((resolve) => { const t = setTimeout(resolve, 15000); cdp.on((m) => { if (m.method === 'Page.loadEventFired') { clearTimeout(t); resolve(); } }); });
  const scrollThrough = () => evaluate(`(async () => { window.__mo.scrollAt = performance.now(); const H = () => document.documentElement.scrollHeight - innerHeight;
    for (let y = 0; y <= H(); y += innerHeight * 0.7) { scrollTo({ top: y, behavior: 'instant' }); await new Promise(r => setTimeout(r, 450)); }
    scrollTo({ top: H(), behavior: 'instant' }); await new Promise(r => setTimeout(r, 700)); scrollTo({ top: 0, behavior: 'instant' }); await new Promise(r => setTimeout(r, 400)); return true; })()`);

  // ---- pass 1: normal motion, traced and filmed ----
  const trace = [];
  let traceDone;
  cdp.on((m) => { if (m.method === 'Tracing.dataCollected') trace.push(...m.params.value); if (m.method === 'Tracing.tracingComplete') traceDone?.(); });
  await cdp.send('Tracing.start', { transferMode: 'ReportEvents', traceConfig: { includedCategories: ['devtools.timeline', 'disabled-by-default-devtools.timeline', 'blink.animations'] } });
  await cdp.send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'no-preference' }] });
  await cdp.send('Page.startScreencast', { format: 'jpeg', quality: 70, maxWidth: 640, maxHeight: 640, everyNthFrame: 1 });
  const navAt = Date.now();
  const wait = loaded();
  await cdp.send('Page.navigate', { url });
  await wait;
  const windowMs = Number(opts.window) || 0;
  await sleep(windowMs || 1600);
  // Let the entrance finish (up to 4s), unless a window was given.
  if (!windowMs) {
    const settleBy = await evaluate(`Math.max(0, ...window.__mo.anims.filter(a => a.iterations !== 'inf' && a.timeline === 'DocumentTimeline' && typeof a.duration === 'number').map(a => a.start + a.delay + a.duration))`);
    if (settleBy > 1600) await sleep(Math.min(settleBy, 4000) - 1500);
  }
  await cdp.send('Page.stopScreencast');
  const entranceMs = Date.now() - navAt;
  timelineInfo = await evaluate(`window.__timeline && typeof window.__timeline.seek === 'function' ? { duration: Number(window.__timeline.duration) || 0 } : null`);
  if (!opts['no-scroll']) await scrollThrough();
  pass.normal = await evaluate(`(() => { const mo = window.__mo;
    let gsap = []; try { if (window.gsap) gsap = window.gsap.globalTimeline.getChildren(true, true, false).map(t => ({ kind: 'gsap', duration: Math.round(t.duration() * 1000), delay: Math.round((t.delay ? t.delay() : 0) * 1000), easing: String(t.vars.ease || 'power1.out'), iterations: t.repeat() === -1 ? 'inf' : t.repeat() + 1, sel: (t.targets ? t.targets().length : 0) + ' targets', props: Object.keys(t.vars).filter(k => !['ease','duration','delay','stagger','repeat','yoyo','onComplete','scrollTrigger','overwrite'].includes(k)) })); } catch {}
    const blocks = document.querySelectorAll('h1,h2,h3,h4,p,li,img,figure,blockquote,article,section').length;
    return { anims: mo.anims, gsap, loaf: mo.loaf, deltas: mo.deltas, blocks, sections: document.querySelectorAll('section').length }; })()`);
  await new Promise((r) => { traceDone = r; cdp.send('Tracing.end'); setTimeout(r, 8000); });
  const names = new Map();
  for (const e of trace) if (e.name === 'Animation' && e.ph === 'b') names.set(e.id2?.local || e.id, e.args?.data?.displayName || e.args?.data?.name || e.args?.data?.nodeName || '');
  pass.nonComposited = [];
  for (const e of trace) {
    const mask = e.name === 'Animation' ? e.args?.data?.compositeFailed : undefined;
    if (!mask) continue;
    const reasons = Object.entries(COMPOSITE_REASONS).filter(([b]) => mask & Number(b)).map(([, n]) => n);
    if (!reasons.length) continue;
    const props = e.args.data.unsupportedProperties || [];
    pass.nonComposited.push({ name: names.get(e.id2?.local || e.id) || '(animation)', reasons, props });
  }

  // ---- filmstrip ----
  const pick = (times) => times.map((t) => { let best = null; for (const f of frames) if (f.t - navAt <= t) best = f; return best || frames[0]; });
  const shots = [];
  if (timelineInfo && timelineInfo.duration > 0) {
    await evaluate('scrollTo(0, 0), true');
    const D = timelineInfo.duration;
    for (let i = 0; i < STRIP; i++) {
      const t = (D * i) / (STRIP - 1);
      await evaluate(`(async () => { window.__timeline.seek(${t}); await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r))); return true; })()`);
      const { data } = await cdp.send('Page.captureScreenshot', { format: 'jpeg', quality: 80 });
      shots.push({ label: `${t.toFixed(2)}s`, data });
    }
    const fps = Number(opts.frames) || 0;
    if (fps) {
      framesDir = path.join(outDir, 'frames');
      fs.rmSync(framesDir, { recursive: true, force: true }); fs.mkdirSync(framesDir, { recursive: true });
      const n = Math.round(D * fps);
      for (let f = 0; f <= n; f++) {
        await evaluate(`(async () => { window.__timeline.seek(${f / fps}); await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r))); return true; })()`);
        const { data } = await cdp.send('Page.captureScreenshot', { format: 'png' });
        fs.writeFileSync(path.join(framesDir, `frame-${String(f).padStart(4, '0')}.png`), Buffer.from(data, 'base64'));
      }
    }
  } else if (frames.length) {
    const span = Math.max(600, entranceMs - 200);
    const times = Array.from({ length: STRIP }, (_, i) => Math.round((span * i) / (STRIP - 1)));
    pick(times).forEach((f, i) => shots.push({ label: `${times[i]}ms`, data: f.data }));
  }
  if (shots.length) {
    const sheet = path.join(outDir, 'filmstrip.html');
    const cols = 4, w = 320;
    fs.writeFileSync(sheet, `<!doctype html><meta charset="utf-8"><style>body{margin:0;background:#111;color:#ddd;font:12px/1.4 ui-monospace,monospace}
      .g{display:grid;grid-template-columns:repeat(${cols},${w}px);gap:8px;padding:8px}figure{margin:0}img{width:${w}px;display:block;background:#fff}figcaption{padding:2px 0}</style>
      <div class="g">${shots.map((s) => `<figure><img src="data:image/jpeg;base64,${s.data}"><figcaption>${s.label}</figcaption></figure>`).join('')}</div>`);
    await cdp.send('Emulation.setDeviceMetricsOverride', { width: cols * (w + 8) + 8, height: 400, deviceScaleFactor: 1, mobile: false });
    const w2 = loaded();
    await cdp.send('Page.navigate', { url: pathToFileURL(sheet).href });
    await w2; await sleep(300);
    const h = Math.ceil((await cdp.send('Runtime.evaluate', { expression: "document.querySelector('.g').getBoundingClientRect().bottom + 8", returnByValue: true })).result.value);
    const { data } = await cdp.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true, clip: { x: 0, y: 0, width: cols * (w + 8) + 8, height: h, scale: 1 } });
    filmstrip = path.join(outDir, 'filmstrip.png');
    fs.writeFileSync(filmstrip, Buffer.from(data, 'base64'));
    fs.rmSync(sheet, { force: true });
    await cdp.send('Emulation.setDeviceMetricsOverride', { width: VIEW.width, height: VIEW.height, deviceScaleFactor: 1, mobile: VIEW.mobile });
  }

  // ---- pass 2: reduced motion: what still moves? ----
  await cdp.send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] });
  const w3 = loaded();
  await cdp.send('Page.navigate', { url });
  await w3;
  await sleep(1500);
  if (!opts['no-scroll']) await scrollThrough();
  await sleep(300);
  pass.reduced = await evaluate(`(async () => {
    const mo = window.__mo, sleep = (ms) => new Promise(r => setTimeout(r, ms));
    const sel = (el) => { let s = el.tagName.toLowerCase(); if (el.id) s += '#' + el.id; else if (typeof el.className === 'string' && el.className.trim()) s += '.' + el.className.trim().split(/\\s+/).slice(0, 2).join('.'); return s; };
    const moves = (a) => a.props.some(p => /transform|translate|scale|rotate|^offset/.test(p));
    const running = document.getAnimations().filter(a => a.playState === 'running');
    const loops = mo.anims.filter(a => a.iterations === 'inf' && !a.loader && a.props.some(p => p !== 'opacity' && !/color/i.test(p)));
    const stillLooping = loops.filter(l => running.some(a => (a.effect?.target && (sel(a.effect.target) + (a.effect.pseudoElement || '')) === l.sel)));
    // scroll timelines that still scrub
    const scrubbing = [];
    const sd = running.filter(a => a.timeline && !(a.timeline instanceof DocumentTimeline));
    if (sd.length) {
      const H = document.documentElement.scrollHeight - innerHeight;
      scrollTo({ top: H * 0.25, behavior: 'instant' }); await sleep(120); const p1 = sd.map(a => a.effect.getComputedTiming().progress);
      scrollTo({ top: H * 0.75, behavior: 'instant' }); await sleep(120); const p2 = sd.map(a => a.effect.getComputedTiming().progress);
      sd.forEach((a, i) => { const kf = a.effect.getKeyframes(); const props = Object.keys(Object.assign({}, ...kf)).filter(p => !['offset','computedOffset','easing','composite'].includes(p));
        if (p1[i] !== p2[i] && props.some(p => /transform|translate|scale|rotate|clip-path|filter/.test(p))) scrubbing.push(sel(a.effect.target) + ' (' + props.join(', ') + ')'); });
      scrollTo({ top: 0, behavior: 'instant' }); await sleep(120);
    }
    // anything whose transform keeps changing while the page is idle (catches JS-driven loops too)
    const els = [...document.querySelectorAll('body *')].filter(el => { const r = el.getBoundingClientRect(); return r.width > 4 && r.height > 4 && r.bottom > 0 && r.top < innerHeight; }).slice(0, 1500);
    const read = () => els.map(el => getComputedStyle(el).transform + '|' + getComputedStyle(el).translate + '|' + getComputedStyle(el).rotate);
    const a1 = read(); await sleep(450); const a2 = read();
    const loaderRe = /spin|load|skeleton|progress|busy|caret/i;
    const drifting = els.filter((el, i) => a1[i] !== a2[i] && !loaderRe.test((typeof el.className === 'string' ? el.className : '') + ' ' + el.id) && !el.closest('[aria-busy="true"],[role=progressbar]')).map(sel).slice(0, 6);
    const videos = [...document.querySelectorAll('video')].filter(v => !v.paused).map(sel);
    const bigMoves = mo.anims.filter(a => a.iterations !== 'inf' && Math.abs(a.dy) > 8 && typeof a.duration === 'number' && a.duration > 50).map(a => a.sel + ' ' + a.dy + 'px').slice(0, 6);
    return { stillLooping: [...new Set(stillLooping.map(l => l.sel))].slice(0, 6), scrubbing: scrubbing.slice(0, 6), drifting, videos, bigMoves };
  })()`);
  cdp.close();
} catch (err) {
  console.log(`motion check failed: ${err.message}`);
  chrome.kill();
  process.exit(2);
} finally {
  chrome.kill();
  setTimeout(() => { try { fs.rmSync(profile, { recursive: true, force: true }); } catch { /* Chrome may still hold files */ } }, 500);
}

// ---------- analysis ----------
const findings = [];
const add = (level, rule, msg) => { if (!findings.some((f) => f.rule === rule && f.msg === msg)) findings.push({ level, rule, msg }); };
const N = pass.normal;
const anims = N.anims;
// A CSS transition on opacity and transform is two animations: give the opacity one its partner's travel.
for (const a of anims) {
  if (a.dy || a.fromOpacity === null) continue;
  const partner = anims.find((b) => b !== a && b.sel === a.sel && b.dy && Math.abs(b.start - a.start) < 60);
  if (partner) a.dy = partner.dy;
}
const finite = anims.filter((a) => a.iterations !== 'inf' && a.timeline === 'DocumentTimeline' && typeof a.duration === 'number' && a.duration > 0 && !a.loader);
const pct = (x) => Math.round(x * 100) + '%';

if (!anims.length && !N.gsap.length) {
  add('INFO', 'no-motion', frames.length > 3 && !timelineInfo
    ? `no CSS or Web Animations ran, but the screen changed ${frames.length} times during load: motion is JS-driven (rAF, canvas, a library); judge it on the filmstrip`
    : 'no animations ran at load or while scrolling (hover and click motion is not triggered by this check)');
}

// sameness
if (finite.length >= 8) {
  const pairs = {};
  for (const a of finite) { const k = `${a.duration}ms ${a.easing}`; pairs[k] = (pairs[k] || 0) + 1; }
  const [topKey, topN] = Object.entries(pairs).sort((a, b) => b[1] - a[1])[0];
  if (topN / finite.length >= 0.7) add('WARN', 'uniform-timing', `${pct(topN / finite.length)} of ${finite.length} animations share "${topKey}": time by role and distance (motion/principles.md § 4)`);
}
const entrances = finite.filter((a) => a.fromOpacity !== null && a.fromOpacity < 0.1 && !a.overlay);
const slides = entrances.filter((a) => Math.abs(a.dy) >= 4);
if (slides.length >= 6) {
  const keys = {};
  for (const a of slides) { const k = `${Math.round(a.dy / 4) * 4}px/${a.duration}ms`; keys[k] = (keys[k] || 0) + 1; }
  const [k, n] = Object.entries(keys).sort((a, b) => b[1] - a[1])[0];
  if (n / entrances.length >= 0.6) add('WARN', 'fade-up-preset', `${n} of ${entrances.length} entrances are the same fade + ${k} rise: vary distance by role, reveal fewer things`);
}
const revealed = entrances.filter((a) => a.afterScroll);
const moments = new Set(revealed.map((a) => a.parent + '#' + Math.round(a.start / 400)));
const revealedText = revealed.filter((a) => a.text);
if (moments.size > 4) add('WARN', 'reveal-everywhere', `${moments.size} separate reveal moments while scrolling (${revealed.length} elements): two to four carry a story, more is the fade-up-everywhere tell`);
if (revealedText.length >= 3) add('WARN', 'reveal-text', `${revealedText.length} headings or paragraphs reveal on scroll (${[...new Set(revealedText.map((a) => a.sel))].slice(0, 4).join(', ')}): text stays put`);
const groups = {};
for (const a of finite) { const k = a.parent + '|' + a.name; (groups[k] ||= []).push(a); }
for (const [k, g] of Object.entries(groups)) {
  if (g.length < 4) continue;
  const delays = g.map((a) => a.delay).sort((x, y) => x - y);
  const step = (delays[delays.length - 1] - delays[0]) / (delays.length - 1);
  const end = Math.max(...g.map((a) => a.delay + a.duration));
  if (step >= 80) add('WARN', 'delay-chain', `${g.length} siblings in ${k.split('|')[0].split('@')[0]} staggered ${Math.round(step)}ms apart: cap the step at min(40ms, 500ms ÷ n)`);
  else if (end > 1200) add('WARN', 'stagger-long', `a group of ${g.length} in ${k.split('|')[0].split('@')[0]} takes ${end}ms to land: keep groups under 500ms in UI, 1.2s on marketing pages`);
}
const slowUi = finite.filter((a) => a.interactive && a.duration > 400 && !a.afterScroll);
if (slowUi.length) add('WARN', 'slow-ui', `interactive elements animating over 400ms: ${[...new Set(slowUi.map((a) => `${a.sel} ${a.duration}ms`))].slice(0, 4).join(', ')}`);
if (!timelineInfo) {
  const slowIn = entrances.filter((a) => a.duration > 1000);
  if (slowIn.length) add('WARN', 'slow-entrance', `entrances over 1s: ${[...new Set(slowIn.map((a) => `${a.sel} ${a.duration}ms`))].slice(0, 4).join(', ')}`);
}
// overshoot on UI
const overshoots = (e) => { const m = /cubic-bezier\(([^)]+)\)/.exec(e); if (m) { const [, y1, , y2] = m[1].split(',').map(Number); return y1 < -0.1 || y2 > 1.1; } const l = /linear\(([^)]+)\)/.exec(e); return !!l && l[1].split(',').some((s) => parseFloat(s) > 1.05); };
const bouncy = finite.filter((a) => (a.overlay || a.interactive) && overshoots(a.easing));
if (bouncy.length) add('WARN', 'overshoot-ui', `overshooting curves on controls or system messages: ${[...new Set(bouncy.map((a) => a.sel))].slice(0, 4).join(', ')} (budget: motion/principles.md § 5)`);
const shortBouncy = finite.filter((a) => a.duration < 150 && overshoots(a.easing));
if (shortBouncy.length) add('WARN', 'short-bounce', `overshoot in under 150ms reads as a glitch: ${shortBouncy.map((a) => a.sel).slice(0, 3).join(', ')}`);
// loops
const loops = anims.filter((a) => a.iterations === 'inf' && !a.loader);
const fastFlash = loops.filter((a) => typeof a.duration === 'number' && a.duration < 333 && a.props.some((p) => /opacity|color|background|filter/.test(p)));
if (fastFlash.length) add('FAIL', 'flash-loop', `loop faster than 3 per second changing light: ${fastFlash.map((a) => a.sel).slice(0, 3).join(', ')} (WCAG 2.3.1)`);
const decoLoops = loops.filter((a) => !fastFlash.includes(a));
if (decoLoops.length) add('WARN', 'infinite-loop', `${decoLoops.length} endless loop(s) that are not loaders: ${[...new Set(decoLoops.map((a) => `${a.sel} (${a.name || a.props.join('/')})`))].slice(0, 5).join(', ')}; a loop needs a reason, an off-screen stop and a pause control past 5s`);
for (const g of N.gsap.filter((t) => t.iterations === 'inf')) add('WARN', 'infinite-loop', `endless GSAP tween on ${g.sel} (${g.props.join(', ')})`);
// performance
const nc = pass.nonComposited || [];
if (nc.length) {
  const byName = {};
  for (const x of nc) byName[`${x.name}: ${x.reasons.join(', ')}${x.props.length ? ' [' + x.props.join(', ') + ']' : ''}`] = 1;
  add('WARN', 'not-composited', `animations running on the main thread: ${Object.keys(byName).slice(0, 5).join(' · ')}`);
}
const stalls = N.deltas.filter(([t, d]) => t > 1000 && d > 50);
const loafs = N.loaf.filter((l) => l.at > 500);
if (stalls.length >= 3 || loafs.length >= 3) {
  const worst = loafs.sort((a, b) => b.dur - a.dur)[0];
  add('WARN', 'jank', `${stalls.length} frame stalls over 50ms and ${loafs.length} long animation frames${worst ? `; worst ${worst.dur}ms${worst.scripts.length ? ' in ' + worst.scripts.join(', ') : ''}` : ''} (motion/performance.md § 5)`);
}
// reduced motion
const R = pass.reduced || {};
if (R.stillLooping?.length) add('FAIL', 'reduced-loop', `loops still running under reduced motion: ${R.stillLooping.join(', ')}`);
if (R.scrubbing?.length) add('FAIL', 'reduced-scroll', `scroll-driven motion still scrubbing under reduced motion: ${R.scrubbing.join(', ')} (add animation-timeline: auto to the backstop, or author it inside no-preference)`);
if (R.drifting?.length) add('FAIL', 'reduced-moving', `elements still moving under reduced motion: ${R.drifting.join(', ')}`);
if (R.videos?.length) add('FAIL', 'reduced-video', `video playing under reduced motion: ${R.videos.join(', ')}`);
if (R.bigMoves?.length) add('WARN', 'reduced-slide', `entrances still sliding more than 8px under reduced motion: ${R.bigMoves.join(', ')} (soften to a fade)`);
const errs = [...new Set(consoleErrors)].slice(0, 5);
if (errs.length) add('WARN', 'console', `console errors: ${errs.join(' | ')}`);

// ---------- report ----------
const durations = [...new Set(finite.map((a) => a.duration))].sort((a, b) => a - b);
const summary = {
  url, viewport: `${VIEW.width}x${VIEW.height}`, animations: anims.length, gsapTweens: N.gsap.length, finite: finite.length, loops: loops.length,
  entrances: entrances.length, revealedOnScroll: revealed.length, distinctDurations: durations, framesPainted: frames.length,
  timeline: timelineInfo, filmstrip, framesDir,
};
if (opts.json) {
  console.log(JSON.stringify({ summary, findings, inventory: anims, gsap: N.gsap, nonComposited: pass.nonComposited, reduced: pass.reduced }, null, 1));
} else {
  console.log(`${anims.length} animations ran (${finite.length} finite, ${loops.length} loops${N.gsap.length ? `, ${N.gsap.length} GSAP tweens` : ''}) · ${entrances.length} entrances, ${revealed.length} on scroll · durations ${durations.join('/') || 'none'}ms · ${frames.length} frames painted during load`);
  const rows = {};
  for (const a of anims) {
    const k = `${a.sel.slice(0, 34).padEnd(34)} ${String(a.kind).replace('CSS', '').slice(0, 10).padEnd(10)} ${(a.props.join(',') || '-').slice(0, 26).padEnd(26)} ${String(a.duration).padStart(5)}ms ${a.iterations === 'inf' ? 'loop ' : '     '}${String(a.easing).slice(0, 34)}`;
    rows[k] = (rows[k] || 0) + 1;
  }
  const lines = Object.entries(rows);
  for (const [k, n] of lines.slice(0, 18)) console.log(`  ${k}${n > 1 ? `  ×${n}` : ''}`);
  if (lines.length > 18) console.log(`  … ${lines.length - 18} more (--json for all)`);
  if (timelineInfo) console.log(`window.__timeline: ${timelineInfo.duration}s, filmstrip from seek()${framesDir ? `, frames in ${path.relative(process.cwd(), framesDir)}` : ''}`);
  if (filmstrip) console.log(`filmstrip: ${path.relative(process.cwd(), filmstrip)}  (open it: one element leads in each frame, no half-states, no overlapping labels)`);
  console.log('');
  for (const f of findings) console.log(`${f.level.padEnd(4)} ${f.rule.padEnd(18)} ${f.msg}`);
  console.log(`\n${findings.filter((f) => f.level === 'FAIL').length} FAIL · ${findings.filter((f) => f.level === 'WARN').length} WARN. Hover and click motion is not exercised: try it by hand.`);
}
process.exit(findings.some((f) => f.level === 'FAIL') ? 1 : 0);
