#!/usr/bin/env node
// Render a page in headless Chrome, screenshot it and measure what the eye checks first.
// No npm packages: talks to Chrome over the DevTools protocol (Node 22+ for WebSocket).
//
//   node shot.mjs index.html
//   node shot.mjs http://localhost:5173/ --out .atelier/shots
//   node shot.mjs index.html --sizes desktop,mobile --full
//
// Sizes: desktop 1440x900 · fold 1280x800 · mobile 390x844 · wide 1920x1080 (default: all four)
// Checks: horizontal overflow, headline and action in the first screen, words on the first screen,
// broken images, text under 12px, small tap targets on mobile, content hidden under reduced motion,
// console errors. Set CHROME_PATH when Chrome or Edge is not in a usual place.

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { pathToFileURL } from 'node:url';

const args = process.argv.slice(2);
const opts = { out: '.atelier/shots', sizes: 'desktop,fold,mobile,wide' };
let target;
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '--full' || a === '--json') opts[a.slice(2)] = true;
  else if (a.startsWith('--')) opts[a.slice(2)] = args[++i];
  else target = a;
}
if (!target) {
  console.log('usage: node shot.mjs <file.html | url> [--out dir] [--sizes desktop,fold,mobile,wide] [--full] [--json]');
  process.exit(0);
}
if (typeof WebSocket === 'undefined') {
  console.log('shot.mjs needs Node 22 or later (built-in WebSocket). Run the visual check by hand and say so in the handoff.');
  process.exit(2);
}

const SIZES = {
  desktop: { w: 1440, h: 900, mobile: false },
  fold: { w: 1280, h: 800, mobile: false },
  mobile: { w: 390, h: 844, mobile: true },
  wide: { w: 1920, h: 1080, mobile: false },
};

function findChrome() {
  if (process.env.CHROME_PATH && fs.existsSync(process.env.CHROME_PATH)) return process.env.CHROME_PATH;
  const c = {
    win32: [
      'C:/Program Files/Google/Chrome/Application/chrome.exe', 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
      `${process.env.LOCALAPPDATA}/Google/Chrome/Application/chrome.exe`, 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
      'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
    ],
    darwin: ['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', '/Applications/Chromium.app/Contents/MacOS/Chromium',
      '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge'],
    linux: ['/usr/bin/google-chrome', '/usr/bin/google-chrome-stable', '/usr/bin/chromium', '/usr/bin/chromium-browser', '/snap/bin/chromium', '/usr/bin/microsoft-edge'],
  }[process.platform] || [];
  return c.find((p) => p && fs.existsSync(p));
}

const chromePath = findChrome();
if (!chromePath) {
  console.log('No Chrome, Chromium or Edge found. Set CHROME_PATH, or do the visual check by hand and say so in the handoff.');
  process.exit(2);
}

const url = /^https?:|^file:/.test(target) ? target : pathToFileURL(path.resolve(target)).href;
const outDir = path.resolve(opts.out);
fs.mkdirSync(outDir, { recursive: true });
const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'atelier-chrome-'));
const port = 9300 + Math.floor(Math.random() * 500);

const chrome = spawn(chromePath, [
  '--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`, '--no-first-run', '--no-default-browser-check',
  '--hide-scrollbars', '--mute-audio', '--disable-extensions', '--allow-file-access-from-files', 'about:blank',
], { stdio: 'ignore' });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function devtoolsUrl() {
  for (let i = 0; i < 60; i++) {
    try {
      const list = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
      const page = list.find((t) => t.type === 'page');
      if (page) return page.webSocketDebuggerUrl;
    } catch { /* Chrome still starting */ }
    await sleep(150);
  }
  throw new Error('Chrome did not open its DevTools port');
}

function client(wsUrl) {
  const ws = new WebSocket(wsUrl);
  let id = 0;
  const pending = new Map();
  const listeners = [];
  ws.onmessage = (ev) => {
    const msg = JSON.parse(typeof ev.data === 'string' ? ev.data : ev.data.toString());
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result);
    } else if (msg.method) listeners.forEach((l) => l(msg));
  };
  const ready = new Promise((r, j) => { ws.onopen = r; ws.onerror = j; });
  return {
    ready,
    send: (method, params = {}) => new Promise((resolve, reject) => { const n = ++id; pending.set(n, { resolve, reject }); ws.send(JSON.stringify({ id: n, method, params })); }),
    on: (fn) => listeners.push(fn),
    close: () => ws.close(),
  };
}

// Runs inside the page; returns what the checks need.
const MEASURE = `(() => {
  const vw = innerWidth, vh = innerHeight;
  const vis = (el) => { const s = getComputedStyle(el); const r = el.getBoundingClientRect(); return s.visibility !== 'hidden' && s.display !== 'none' && r.width > 0 && r.height > 0; };
  const sel = (el) => el.tagName.toLowerCase() + (el.id ? '#' + el.id : '') + (typeof el.className === 'string' && el.className.trim() ? '.' + el.className.trim().split(/\\s+/).slice(0, 2).join('.') : '');
  const docW = document.documentElement.scrollWidth;
  const wide = [];
  if (docW > vw + 1) for (const el of document.body.querySelectorAll('*')) {
    const r = el.getBoundingClientRect();
    if (r.right > vw + 1 && r.width > 0 && getComputedStyle(el).position !== 'fixed') { wide.push(sel(el) + ' (' + Math.round(r.right) + 'px)'); if (wide.length > 5) break; }
  }
  const h1 = document.querySelector('h1');
  const h1r = h1 && h1.getBoundingClientRect();
  const actions = [...document.querySelectorAll('a, button, input[type=submit]')].filter((el) => vis(el) && el.getBoundingClientRect().bottom <= vh && el.getBoundingClientRect().top >= 0);
  const filled = actions.filter((el) => { const b = getComputedStyle(el).backgroundColor; return b && !/rgba\\(0, 0, 0, 0\\)|transparent/.test(b); });
  let words = 0;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const n = walker.currentNode, p = n.parentElement;
    if (!p || !n.textContent.trim() || !vis(p) || ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(p.tagName)) continue;
    const r = p.getBoundingClientRect();
    if (r.top < vh && r.bottom > 0) words += n.textContent.trim().split(/\\s+/).length;
  }
  const broken = [...document.images].filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.currentSrc || i.src).slice(0, 5);
  const tiny = [...document.querySelectorAll('body *')].filter((el) => el.childNodes.length && [...el.childNodes].some((c) => c.nodeType === 3 && c.textContent.trim()) && vis(el) && parseFloat(getComputedStyle(el).fontSize) < 12).map(sel).slice(0, 5);
  // Inline links inside running text are exempt; controls and chrome links are not.
  const smallTaps = vw < 600 ? [...document.querySelectorAll('a, button, input, select, textarea')].filter((el) => {
    if (!vis(el)) return false;
    const r = el.getBoundingClientRect();
    if (r.width <= 2 || r.height <= 2) return false; // visually hidden input behind a label
    if (el.tagName === 'A') return (el.closest('nav, header') || !el.closest('p, li, footer')) && (r.height < 32 || r.width < 32);
    return r.height < 40 || r.width < 40;
  }).map(sel).slice(0, 5) : [];
  const hidden = [...document.querySelectorAll('h1, h2, h3, p, li, img, a, button')].filter((el) => { const s = getComputedStyle(el); return s.display !== 'none' && (parseFloat(s.opacity) < 0.05 || s.visibility === 'hidden'); }).map(sel).slice(0, 5);
  return { vw, vh, docW, docH: document.documentElement.scrollHeight, overflow: docW > vw + 1, wide,
    h1: h1 ? { text: h1.textContent.trim().slice(0, 80), bottom: Math.round(h1r.bottom), inView: h1r.bottom <= vh && h1r.top >= 0 } : null,
    actionInView: actions.length > 0, filledActionInView: filled.length > 0, words, broken, tiny, smallTaps, hidden,
    title: document.title, lang: document.documentElement.lang };
})()`;

// Runs inside the page: jumps every finite CSS animation, transition and Web Animation to its
// end (and GSAP tweens when present), repeating while new ones start, so screenshots show the
// final state instead of a frame mid-entrance. Infinite loops are left running.
const SETTLE = `(async () => {
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  for (let round = 0; round < 6; round++) {
    const anims = document.getAnimations ? document.getAnimations() : [];
    let finished = 0;
    for (const a of anims) {
      try {
        const t = a.effect && a.effect.getComputedTiming();
        if (t && t.iterations !== Infinity && a.playState !== 'finished') { a.finish(); finished++; }
      } catch { /* not finishable */ }
    }
    try { if (window.gsap) window.gsap.globalTimeline.getChildren(true, true, false).forEach((t) => { if (t.repeat && t.repeat() === -1) return; t.progress(1); }); } catch { /* ignore */ }
    await wait(120);
    if (!finished) break;
  }
  return true;
})()`;

const results = {};
const consoleErrors = [];

try {
  const cdp = client(await devtoolsUrl());
  await cdp.ready;
  cdp.on((m) => {
    if (m.method === 'Runtime.exceptionThrown') consoleErrors.push(m.params.exceptionDetails.exception?.description?.split('\n')[0] || m.params.exceptionDetails.text);
    if (m.method === 'Runtime.consoleAPICalled' && m.params.type === 'error') consoleErrors.push(m.params.args.map((a) => a.value ?? a.description ?? '').join(' ').slice(0, 200));
    if (m.method === 'Log.entryAdded' && m.params.entry.level === 'error') consoleErrors.push(m.params.entry.text.slice(0, 200));
  });
  await cdp.send('Page.enable');
  await cdp.send('Runtime.enable');
  await cdp.send('Log.enable');

  const loaded = () => new Promise((resolve) => {
    const t = setTimeout(resolve, 15000);
    cdp.on((m) => { if (m.method === 'Page.loadEventFired') { clearTimeout(t); resolve(); } });
  });
  const evaluate = async (expr) => (await cdp.send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true })).result.value;
  const capture = async (file, full) => {
    const params = { format: 'png' };
    if (full) {
      const m = await cdp.send('Page.getLayoutMetrics');
      const h = Math.min(Math.ceil(m.cssContentSize?.height || m.contentSize.height), 16000);
      params.captureBeyondViewport = true;
      params.clip = { x: 0, y: 0, width: (m.cssLayoutViewport || m.layoutViewport).clientWidth, height: h, scale: 1 };
    }
    // Beyond the viewport Chrome paints fixed elements at odd offsets; pin them where they sit
    // at the top of the page for the shot, then put them back.
    if (full) await evaluate(`(() => { window.__pinned = [...document.querySelectorAll('body *')].filter((el) => getComputedStyle(el).position === 'fixed').map((el) => { const r = el.getBoundingClientRect(); const prev = el.getAttribute('style'); el.style.setProperty('position', 'absolute', 'important'); el.style.setProperty('top', (r.top + scrollY) + 'px', 'important'); el.style.setProperty('bottom', 'auto', 'important'); return [el, prev]; }); return true; })()`);
    const { data } = await cdp.send('Page.captureScreenshot', params);
    if (full) await evaluate(`(() => { for (const [el, prev] of window.__pinned || []) prev === null ? el.removeAttribute('style') : el.setAttribute('style', prev); return true; })()`);
    fs.writeFileSync(file, Buffer.from(data, 'base64'));
    return file;
  };

  for (const name of opts.sizes.split(',').map((s) => s.trim()).filter(Boolean)) {
    const size = SIZES[name];
    if (!size) { console.log(`unknown size "${name}"`); continue; }
    await cdp.send('Emulation.setDeviceMetricsOverride', { width: size.w, height: size.h, deviceScaleFactor: 1, mobile: size.mobile });
    await cdp.send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'no-preference' }] });
    const wait = loaded();
    await cdp.send('Page.navigate', { url });
    await wait;
    await evaluate('document.fonts ? document.fonts.ready.then(() => true) : true');
    await sleep(900);
    await evaluate(SETTLE);
    const m = await evaluate(MEASURE);
    const files = [await capture(path.join(outDir, `${name}.png`), false)];
    if (opts.full && (name === 'desktop' || name === 'mobile')) {
      // Scroll through so lazy images and scroll reveals fire, finish what they started,
      // then shoot the whole page in its final state.
      await evaluate(`(async () => { for (let y = 0; y < document.documentElement.scrollHeight; y += innerHeight * 0.6) { scrollTo({ top: y, behavior: 'instant' }); await new Promise(r => setTimeout(r, 250)); } scrollTo({ top: document.documentElement.scrollHeight, behavior: 'instant' }); await new Promise(r => setTimeout(r, 300)); return true; })()`);
      await evaluate(SETTLE);
      await evaluate(`(async () => { scrollTo({ top: 0, behavior: 'instant' }); await new Promise(r => setTimeout(r, 300)); return true; })()`);
      await evaluate(SETTLE);
      files.push(await capture(path.join(outDir, `${name}-full.png`), true));
    }
    results[name] = { ...m, files };
  }

  // Reduced motion: everything must be visible at rest.
  await cdp.send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
  await cdp.send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] });
  const wait = loaded();
  await cdp.send('Page.navigate', { url });
  await wait;
  await sleep(600);
  results.reducedMotion = { hidden: (await evaluate(MEASURE)).hidden };
  cdp.close();
} catch (err) {
  console.log(`render failed: ${err.message}`);
  chrome.kill();
  process.exit(2);
} finally {
  chrome.kill();
  setTimeout(() => { try { fs.rmSync(profile, { recursive: true, force: true }); } catch { /* Chrome may still hold files */ } }, 500);
}

// ---------- report ----------

const findings = [];
const add = (level, msg) => findings.push({ level, msg });
for (const [name, r] of Object.entries(results)) {
  if (name === 'reducedMotion') continue;
  if (r.overflow) add('FAIL', `${name}: horizontal scroll, page is ${r.docW}px wide in a ${r.vw}px viewport. Widest: ${r.wide.join(', ')}`);
  if (name === 'fold' || name === 'desktop') {
    if (!r.h1) add('WARN', `${name}: no <h1> on the page`);
    else if (!r.h1.inView) add('FAIL', `${name}: the headline ends at ${r.h1.bottom}px, below the ${r.vh}px fold`);
    if (!r.actionInView) add('WARN', `${name}: no link or button visible in the first screen`);
    else if (!r.filledActionInView) add('WARN', `${name}: no filled primary action in the first screen`);
    if (r.words > 90) add('WARN', `${name}: about ${r.words} words on the first screen (aim for 80 or fewer)`);
  }
  if (r.broken.length) add('FAIL', `${name}: broken images: ${r.broken.join(', ')}`);
  if (r.tiny.length) add('WARN', `${name}: text under 12px: ${r.tiny.join(', ')}`);
  if (r.smallTaps.length) add('WARN', `${name}: tap targets under 40px: ${r.smallTaps.join(', ')}`);
}
const first = Object.values(results).find((r) => r.title !== undefined);
if (first && !first.title) add('WARN', 'document has no <title>');
if (first && !first.lang) add('WARN', '<html> has no lang');
if (results.reducedMotion?.hidden.length) add('FAIL', `content invisible with reduced motion: ${results.reducedMotion.hidden.join(', ')}`);
const errs = [...new Set(consoleErrors)].slice(0, 5);
if (errs.length) add('WARN', `console errors: ${errs.join(' | ')}`);

if (opts.json) {
  console.log(JSON.stringify({ url, results, findings }, null, 1));
} else {
  for (const [name, r] of Object.entries(results)) {
    if (name === 'reducedMotion') continue;
    console.log(`${name.padEnd(8)} ${r.vw}x${r.vh}  page ${r.docW}x${r.docH}  words in first screen ${r.words}  ${r.files.map((f) => path.relative(process.cwd(), f)).join(', ')}`);
  }
  console.log('');
  for (const f of findings) console.log(`${f.level.padEnd(4)} ${f.msg}`);
  console.log(`\n${findings.filter((f) => f.level === 'FAIL').length} FAIL · ${findings.filter((f) => f.level === 'WARN').length} WARN. Now open the screenshots and look: the numbers do not judge taste.`);
}
process.exit(findings.some((f) => f.level === 'FAIL') ? 1 : 0);
