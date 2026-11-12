#!/usr/bin/env node
// Renders a page that exposes window.__timeline = { duration, seek(t) } to an mp4, frame by frame,
// and muxes an audio track. seek(t) may return a promise (for example while videos inside it seek).
//
//   node tools/render-video.mjs docs/video/atelier-motion.html docs/video/atelier-motion.mp4 --audio song.mp3
//   node tools/render-video.mjs page.html --sheet "0,1.4,2.4" --out sheet.png      contact sheet at chosen times
//
// Options: --fps 60, --size 1920x1080, --from 0, --to <duration>, --crf 18

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawn, spawnSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';
import { findChrome } from '../atelier/scripts/chrome.mjs';

const args = process.argv.slice(2);
const opt = (n, d) => { const i = args.indexOf(`--${n}`); return i >= 0 ? args[i + 1] : d; };
const [page, outArg] = args.filter((a, i) => !a.startsWith('--') && !(args[i - 1] || '').startsWith('--'));
if (!page) { console.log('usage: node tools/render-video.mjs <page.html> <out.mp4> [--audio file] [--fps 60] [--size 1920x1080] [--from s] [--to s] | --sheet "t1,t2,…" --out sheet.png'); process.exit(0); }
const [W, H] = opt('size', '1920x1080').split('x').map(Number);
const fps = Number(opt('fps', 60));
const sheet = opt('sheet');

const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'atelier-render-'));
const port = 9300 + Math.floor(Math.random() * 500);
const chrome = spawn(findChrome(), ['--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`, '--no-first-run', '--hide-scrollbars',
  '--mute-audio', '--allow-file-access-from-files', '--autoplay-policy=no-user-gesture-required', `--window-size=${W},${H}`, 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let wsUrl;
for (let i = 0; i < 80 && !wsUrl; i++) { await sleep(150); try { wsUrl = (await (await fetch(`http://127.0.0.1:${port}/json/list`)).json()).find((t) => t.type === 'page')?.webSocketDebuggerUrl; } catch { /* starting */ } }
const ws = new WebSocket(wsUrl);
await new Promise((r) => (ws.onopen = r));
let id = 0;
const pending = new Map();
const errors = [];
ws.onmessage = (e) => { const m = JSON.parse(e.data); if (m.id) { const p = pending.get(m.id); pending.delete(m.id); p && (m.error ? p.j(new Error(m.error.message)) : p.r(m.result)); } else if (m.method === 'Runtime.exceptionThrown') errors.push(m.params.exceptionDetails.exception?.description?.split('\n')[0]); };
const send = (method, params = {}) => new Promise((r, j) => { const n = ++id; pending.set(n, { r, j }); ws.send(JSON.stringify({ id: n, method, params })); });
const ev = async (expression) => (await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true })).result?.value;

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'atelier-vframes-'));
try {
  await send('Page.enable'); await send('Runtime.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: W, height: H, deviceScaleFactor: 1, mobile: false });
  await send('Page.navigate', { url: pathToFileURL(path.resolve(page)).href + '?render' });
  await sleep(800);
  await ev('document.fonts.ready.then(() => true)');
  await ev(`Promise.all([...document.images].map((i) => i.complete ? 0 : new Promise((r) => { i.onload = i.onerror = r; }))).then(() => true)`);
  await ev(`Promise.all([...document.querySelectorAll('video')].map((v) => v.readyState >= 1 ? 0 : new Promise((r) => { v.onloadedmetadata = v.onerror = r; v.load(); }))).then(() => true)`);
  const missing = await ev(`[...document.images].filter((i) => !i.naturalWidth).map((i) => i.getAttribute('src'))`);
  if (missing?.length) console.log('images that did not load:', [...new Set(missing)].join(', '));
  const duration = await ev('window.__timeline ? window.__timeline.duration : 0');
  if (!duration) throw new Error('the page has no window.__timeline');
  const shoot = async (t, file, format = 'jpeg') => {
    await ev(`Promise.resolve(window.__timeline.seek(${t})).then(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))))`);
    const { data } = await send('Page.captureScreenshot', { format, quality: format === 'jpeg' ? 94 : undefined });
    fs.writeFileSync(file, Buffer.from(data, 'base64'));
  };

  if (sheet) {
    const times = sheet.split(',').map(Number);
    for (const [i, t] of times.entries()) await shoot(t, path.join(tmp, `s${String(i).padStart(3, '0')}.jpg`));
    const out = path.resolve(opt('out', 'sheet.png'));
    const cols = Math.min(4, times.length);
    const r = spawnSync('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y', '-framerate', '1', '-i', path.join(tmp, 's%03d.jpg'),
      '-vf', `scale=480:-1,drawtext=text='%{frame_num}':start_number=0:x=8:y=8:fontsize=18:fontcolor=white:box=1:boxcolor=black@0.6,tile=${cols}x${Math.ceil(times.length / cols)}:padding=6:color=0x222222`, '-frames:v', '1', out], { stdio: 'inherit' });
    if (r.status) throw new Error('ffmpeg failed');
    console.log(`${out}: frames at ${times.join(', ')}s (numbered left to right)`);
  } else {
    const from = Number(opt('from', 0)), to = Number(opt('to', duration));
    const n = Math.round((to - from) * fps);
    const t0 = Date.now();
    for (let f = 0; f < n; f++) {
      await shoot(from + f / fps, path.join(tmp, `f${String(f).padStart(5, '0')}.jpg`));
      if (f % (fps * 2) === 0) process.stdout.write(`\r${f}/${n} frames, ${((Date.now() - t0) / 1000).toFixed(0)}s`);
    }
    process.stdout.write(`\r${n}/${n} frames, ${((Date.now() - t0) / 1000).toFixed(0)}s\n`);
    const out = path.resolve(outArg || 'out.mp4');
    const audio = opt('audio');
    const ff = ['-hide_banner', '-loglevel', 'error', '-y', '-framerate', String(fps), '-i', path.join(tmp, 'f%05d.jpg')];
    if (audio) ff.push('-ss', String(from), '-i', path.resolve(audio));
    ff.push('-c:v', 'libx264', '-preset', 'slow', '-crf', opt('crf', '18'), '-pix_fmt', 'yuv420p', '-movflags', '+faststart');
    if (audio) ff.push('-c:a', 'aac', '-b:a', '192k', '-shortest');
    ff.push(out);
    const r = spawnSync('ffmpeg', ff, { stdio: 'inherit' });
    if (r.status) throw new Error('ffmpeg failed');
    console.log(`${out}: ${(n / fps).toFixed(2)}s at ${fps}fps, ${(fs.statSync(out).size / 1048576).toFixed(1)} MB`);
  }
  if (errors.length) console.log('page errors:', [...new Set(errors)].join(' | '));
} finally {
  ws.close(); chrome.kill();
  fs.rmSync(tmp, { recursive: true, force: true });
  setTimeout(() => { try { fs.rmSync(profile, { recursive: true, force: true }); } catch { /* held */ } }, 500);
}
