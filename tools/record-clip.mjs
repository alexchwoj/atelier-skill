#!/usr/bin/env node
// Records a page doing something, as an mp4, for the motion examples on the site and the promo video.
// Drives headless Chrome over the DevTools protocol, films the real screencast and encodes it with ffmpeg,
// keeping each frame's real duration. A visible cursor travels to every control before it is pressed.
//
//   node tools/record-clip.mjs <page.html|url> <out.mp4> --steps '<json>' [--size 1280x800] [--poster out.png]
//
// steps: [["wait", ms], ["click", "css"], ["hover", "css"], ["type", "css", "text"], ["key", "Enter"],
//         ["drag", "css", dx, dy], ["scroll", y], ["eval", "js"]]

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawn, spawnSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';
import { findChrome } from '../atelier/scripts/chrome.mjs';

const args = process.argv.slice(2);
const opt = (n) => { const i = args.indexOf(`--${n}`); return i >= 0 ? args[i + 1] : undefined; };
const [target, out] = args.filter((a, i) => !a.startsWith('--') && !(args[i - 1] || '').startsWith('--'));
if (!target || !out) { console.log("usage: node tools/record-clip.mjs <page> <out.mp4> --steps '<json>' [--size 1280x800] [--poster out.png]"); process.exit(0); }
const steps = JSON.parse(opt('steps') || '[["wait", 3000]]');
const [W, H] = (opt('size') || '1280x800').split('x').map(Number);
const url = /^https?:|^file:/.test(target) ? target : pathToFileURL(path.resolve(target)).href;

const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'atelier-rec-'));
const port = 9300 + Math.floor(Math.random() * 500);
const chrome = spawn(findChrome(), ['--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`, '--no-first-run',
  '--hide-scrollbars', '--mute-audio', '--allow-file-access-from-files', `--window-size=${W},${H}`, 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let wsUrl;
for (let i = 0; i < 80 && !wsUrl; i++) { await sleep(150); try { wsUrl = (await (await fetch(`http://127.0.0.1:${port}/json/list`)).json()).find((t) => t.type === 'page')?.webSocketDebuggerUrl; } catch { /* starting */ } }
const ws = new WebSocket(wsUrl);
await new Promise((r) => (ws.onopen = r));
let id = 0;
const pending = new Map(), listeners = [];
ws.onmessage = (e) => { const m = JSON.parse(e.data); if (m.id) { const p = pending.get(m.id); pending.delete(m.id); p && (m.error ? p.j(new Error(m.error.message)) : p.r(m.result)); } else listeners.forEach((f) => f(m)); };
const send = (method, params = {}) => new Promise((r, j) => { const n = ++id; pending.set(n, { r, j }); ws.send(JSON.stringify({ id: n, method, params })); });
const ev = async (expression) => (await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true })).result?.value;

const frames = [];
let blankUntil = 0;
listeners.push((m) => {
  if (m.method !== 'Page.screencastFrame') return;
  // skip the about:blank frames before the filmed load starts painting
  if (!frames.length && m.params.data.length < 4000 && Date.now() > blankUntil) { send('Page.screencastFrameAck', { sessionId: m.params.sessionId }).catch(() => {}); return; }
  frames.push({ t: Date.now(), data: m.params.data });
  send('Page.screencastFrameAck', { sessionId: m.params.sessionId }).catch(() => {});
});

// The cursor lives in the page so it is filmed with it; pointer-events: none keeps it out of the way.
const CURSOR = `(() => { if (document.getElementById('__cur')) return;
  const c = document.createElement('div'); c.id = '__cur';
  c.innerHTML = '<svg width="26" height="30" viewBox="0 0 26 30"><path d="M2 2 L2 24 L8 18.5 L12.2 27.5 L16 25.8 L11.8 17 L20 17 Z" fill="#141414" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/></svg>';
  Object.assign(c.style, { position: 'fixed', left: '0', top: '0', zIndex: 2147483647, pointerEvents: 'none', transform: 'translate(${W * 0.62}px, ${H * 0.78}px)', transition: 'none', filter: 'drop-shadow(0 2px 3px rgba(0,0,0,.25))' });
  document.documentElement.appendChild(c); window.__curXY = [${W * 0.62}, ${H * 0.78}]; })()`;

async function moveCursor(x, y, ms = 520) {
  await ev(`(async () => { const c = document.getElementById('__cur'); if (!c) return; const [x0, y0] = window.__curXY; const t0 = performance.now();
    const e = (u) => 1 - Math.pow(1 - u, 3);
    await new Promise((done) => { const f = (now) => { const u = Math.min(1, (now - t0) / ${ms}); const k = e(u);
      const arc = Math.sin(Math.PI * u) * 0.08 * Math.hypot(${x} - x0, ${y} - y0);
      c.style.transform = 'translate(' + (x0 + (${x} - x0) * k - arc * 0.3) + 'px,' + (y0 + (${y} - y0) * k - arc) + 'px)';
      if (u < 1) requestAnimationFrame(f); else done(); }; requestAnimationFrame(f); });
    window.__curXY = [${x}, ${y}]; })()`);
}
async function center(sel) {
  return ev(`(() => { const el = document.querySelector(${JSON.stringify(sel)}); if (!el) return null; el.scrollIntoView({ block: 'nearest', behavior: 'instant' });
    const r = el.getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]; })()`);
}
const mouse = (type, x, y, extra = {}) => send('Input.dispatchMouseEvent', { type, x, y, button: 'left', clickCount: 1, ...extra });

try {
  await send('Page.enable'); await send('Runtime.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: W, height: H, deviceScaleFactor: 1, mobile: false });
  await send('Page.navigate', { url });
  await sleep(300);
  await ev('document.fonts ? document.fonts.ready.then(() => true) : true');
  await ev(`Promise.race([Promise.all([...document.images].map((i) => i.complete ? 0 : new Promise((r) => { i.onload = i.onerror = r; }))), new Promise((r) => setTimeout(r, 8000))]).then(() => true)`);
  // --reload: the first load only warms the cache; film a clean second load from its first frame
  // (session storage cleared, so a play-once intro plays again).
  if (opt('reload')) {
    await ev('(() => { try { sessionStorage.clear(); localStorage.clear(); } catch {} return true; })()');
    await send('Page.navigate', { url: 'about:blank' }); await sleep(150);
    await send('Page.startScreencast', { format: 'jpeg', quality: 88, maxWidth: W, maxHeight: H, everyNthFrame: 1 });
    await send('Page.navigate', { url });
    await ev(CURSOR);
  } else {
    await ev(CURSOR);
    await send('Page.startScreencast', { format: 'jpeg', quality: 88, maxWidth: W, maxHeight: H, everyNthFrame: 1 });
  }
  for (const [kind, a, b, c] of steps) {
    if (kind === 'wait') await sleep(a);
    else if (kind === 'scroll') await ev(`window.scrollTo({ top: ${a}, behavior: 'smooth' }), true`);
    else if (kind === 'eval') await ev(a);
    else if (kind === 'key') { await send('Input.dispatchKeyEvent', { type: 'keyDown', key: a, code: a, windowsVirtualKeyCode: a === 'Enter' ? 13 : a === 'Escape' ? 27 : 0 }); await send('Input.dispatchKeyEvent', { type: 'keyUp', key: a, code: a }); }
    else {
      const p = await center(a);
      if (!p) { console.log(`not found: ${a}`); continue; }
      await moveCursor(p[0], p[1]);
      if (kind === 'hover') { await mouse('mouseMoved', p[0], p[1]); continue; }
      if (kind === 'click') { await mouse('mouseMoved', p[0], p[1]); await mouse('mousePressed', p[0], p[1]); await sleep(110); await mouse('mouseReleased', p[0], p[1]); }
      if (kind === 'type') {
        await mouse('mousePressed', p[0], p[1]); await mouse('mouseReleased', p[0], p[1]);
        for (const ch of b) { await send('Input.insertText', { text: ch }); await sleep(45); }
      }
      if (kind === 'drag') {
        await mouse('mouseMoved', p[0], p[1]); await mouse('mousePressed', p[0], p[1]);
        const n = 28;
        for (let i = 1; i <= n; i++) {
          const u = i / n, k = u < 0.5 ? 2 * u * u : 1 - Math.pow(-2 * u + 2, 2) / 2;
          const x = p[0] + b * k, y = p[1] + c * k;
          await mouse('mouseMoved', x, y, { buttons: 1 });
          await ev(`(() => { const c = document.getElementById('__cur'); c.style.transform = 'translate(${x}px, ${y}px)'; window.__curXY = [${x}, ${y}]; })()`);
          await sleep(22);
        }
        await sleep(120);
        await mouse('mouseReleased', p[0] + b, p[1] + c);
      }
    }
  }
  await sleep(200);
  await send('Page.stopScreencast');
  if (opt('poster')) { const { data } = await send('Page.captureScreenshot', { format: 'png' }); fs.writeFileSync(opt('poster'), Buffer.from(data, 'base64')); }
} finally {
  ws.close(); chrome.kill();
}

// Drop leading blank frames (about:blank, an empty first paint): they encode to tiny JPEGs.
while (frames.length > 2 && frames[0].data.length < 0.25 * Math.max(...frames.slice(0, 40).map((f) => f.data.length))) frames.shift();

// Encode with each frame held for its real duration.
const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'atelier-frames-'));
const list = [];
frames.forEach((f, i) => {
  const file = path.join(dir, `f${String(i).padStart(5, '0')}.jpg`);
  fs.writeFileSync(file, Buffer.from(f.data, 'base64'));
  const next = frames[i + 1] ? frames[i + 1].t : f.t + 200;
  list.push(`file '${file.replace(/\\/g, '/')}'`, `duration ${Math.max(0.001, (next - f.t) / 1000).toFixed(3)}`);
});
list.push(list[list.length - 2]);
fs.writeFileSync(path.join(dir, 'list.txt'), list.join('\n'));
const r = spawnSync('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y', '-f', 'concat', '-safe', '0', '-i', path.join(dir, 'list.txt'),
  '-vf', `fps=30,scale=${W}:${H}:flags=lanczos,format=yuv420p`, '-c:v', 'libx264', '-preset', 'slow', '-crf', '24', '-movflags', '+faststart', '-an', path.resolve(out)], { stdio: 'inherit' });
fs.rmSync(dir, { recursive: true, force: true });
setTimeout(() => { try { fs.rmSync(profile, { recursive: true, force: true }); } catch { /* held */ } }, 500);
if (r.status) process.exit(r.status);
console.log(`${out}: ${frames.length} frames, ${((frames.at(-1).t - frames[0].t) / 1000).toFixed(1)}s, ${(fs.statSync(out).size / 1024).toFixed(0)} kB`);
