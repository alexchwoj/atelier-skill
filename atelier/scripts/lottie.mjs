#!/usr/bin/env node
// Check, preview and package a Lottie animation. No npm packages.
//
//   node lottie.mjs check mark.json                 structure + what a schema cannot catch
//   node lottie.mjs sheet mark.json [--frames 8]    contact sheet of frames, rendered by lottie-web in headless Chrome
//   node lottie.mjs pack mark.json [--out mark.lottie] [--id mark]   a dotLottie (zip + manifest)
//
// check: FAIL = players will break or misrender; WARN = will play, but is fragile or heavy.

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import zlib from 'node:zlib';
import { spawn } from 'node:child_process';
import { pathToFileURL } from 'node:url';
import { findChrome } from './chrome.mjs';

const [cmd, file, ...rest] = process.argv.slice(2);
const opt = (n) => { const i = rest.indexOf(`--${n}`); return i >= 0 ? rest[i + 1] : undefined; };
if (!cmd || !file || !['check', 'sheet', 'pack'].includes(cmd)) {
  console.log('usage: node lottie.mjs check|sheet|pack <animation.json> [--frames 8] [--out file] [--id name]');
  process.exit(0);
}
if (!fs.existsSync(file)) { console.log('file not found: ' + file); process.exit(2); }
const raw = fs.readFileSync(file, 'utf8');
let L;
try { L = JSON.parse(raw); } catch (e) { console.log(`FAIL not JSON: ${e.message}`); process.exit(1); }

// ---------- check ----------
function check(L) {
  const out = [];
  const add = (level, where, msg) => out.push({ level, where, msg });
  const isNum = (n) => typeof n === 'number' && Number.isFinite(n);
  for (const k of ['v', 'fr', 'ip', 'op', 'w', 'h', 'layers']) if (L[k] === undefined) add('FAIL', 'root', `missing "${k}"`);
  if (isNum(L.fr) && L.fr <= 0) add('FAIL', 'root', 'fr must be above 0');
  if (isNum(L.ip) && isNum(L.op) && L.op <= L.ip) add('FAIL', 'root', `op (${L.op}) must be after ip (${L.ip})`);
  if (isNum(L.fr) && L.fr > 60) add('WARN', 'root', `${L.fr} fps: 60 is plenty for UI, 30 for ambient loops`);
  if (!Array.isArray(L.layers)) return out;

  const assets = new Map((L.assets || []).map((a) => [a.id, a]));
  const ARITY = { p: [2, 3], a: [2, 3], s: [2, 3], r: [1], o: [1], c: [3, 4], w: [1], sk: [1], sa: [1] };

  function prop(p, where, key, ip, op) {
    if (!p || typeof p !== 'object') return;
    if (p.s === true && (p.x || p.y)) { prop(p.x, where, 'x', ip, op); prop(p.y, where, 'y', ip, op); return; }
    if (p.x !== undefined && typeof p.x === 'string') add('WARN', where, `${key}: uses an expression; many players ignore them`);
    if (p.a === 1) {
      if (!Array.isArray(p.k) || p.k.length < 2) { add('FAIL', where, `${key}: animated ("a": 1) but fewer than 2 keyframes`); return; }
      let prev = -Infinity, arity = null, verts = null;
      p.k.forEach((kf, i) => {
        if (!isNum(kf.t)) { add('FAIL', where, `${key}: keyframe ${i} has no numeric "t"`); return; }
        if (kf.t <= prev) add('FAIL', where, `${key}: keyframe times must increase (${prev} then ${kf.t})`);
        prev = kf.t;
        if (isNum(ip) && isNum(op) && (kf.t < ip - 0.001 || kf.t > op + 0.001)) add('WARN', where, `${key}: keyframe at ${kf.t} is outside the layer's frames ${ip} to ${op}`);
        const last = i === p.k.length - 1;
        if (!last && kf.s === undefined) add('FAIL', where, `${key}: keyframe ${i} has no "s" value`);
        if (!last && !kf.h && (!kf.i || !kf.o)) add('FAIL', where, `${key}: keyframe ${i} needs "i" and "o" easing handles (or "h": 1)`);
        for (const h of ['i', 'o']) if (kf[h] && (!Array.isArray(kf[h].x) && !isNum(kf[h].x))) add('FAIL', where, `${key}: keyframe ${i} "${h}.x" must be a number or an array`);
        if (Array.isArray(kf.s)) {
          if (kf.s.length && typeof kf.s[0] === 'object' && kf.s[0] !== null && kf.s[0].v) {
            const n = kf.s[0].v.length;
            if (verts !== null && n !== verts) add('FAIL', where, `${key}: path morph changes vertex count (${verts} → ${n}); every keyframe needs the same count`);
            verts = n;
          } else if (typeof kf.s[0] === 'number') {
            if (arity !== null && kf.s.length !== arity) add('FAIL', where, `${key}: keyframe ${i} has ${kf.s.length} values, the others ${arity}`);
            arity = kf.s.length;
            if (ARITY[key] && !ARITY[key].includes(kf.s.length)) add('WARN', where, `${key}: ${kf.s.length} values (expected ${ARITY[key].join(' or ')})`);
            if (key === 'c' && kf.s.some((v) => v > 1)) add('FAIL', where, 'colour values above 1: Lottie colours are 0 to 1, not 0 to 255');
          }
        }
      });
    } else if (p.a === 0 || p.k !== undefined) {
      if (key === 'c' && Array.isArray(p.k) && p.k.some((v) => v > 1)) add('FAIL', where, 'colour values above 1: Lottie colours are 0 to 1, not 0 to 255');
      if (key === 'c' && Array.isArray(p.k) && !ARITY.c.includes(p.k.length)) add('FAIL', where, `colour has ${p.k.length} values (expected 3 or 4)`);
      if (p.k && typeof p.k === 'object' && !Array.isArray(p.k) && p.k.v) path(p.k, where);
    }
  }
  function path(v, where) {
    if (!Array.isArray(v.v) || !Array.isArray(v.i) || !Array.isArray(v.o)) { add('FAIL', where, 'path needs "v", "i" and "o" arrays'); return; }
    if (v.v.length !== v.i.length || v.v.length !== v.o.length) add('FAIL', where, `path has ${v.v.length} vertices but ${v.i.length} in and ${v.o.length} out tangents`);
  }
  function transform(ks, where, ip, op) { for (const k of ['a', 'p', 's', 'r', 'o', 'sk', 'sa']) if (ks[k] !== undefined) prop(ks[k], where, k, ip, op); }
  function shapes(list, where, ip, op) {
    if (!Array.isArray(list)) return;
    list.forEach((s, i) => {
      const w = `${where} › ${s.nm || s.ty + i}`;
      if (!s.ty) { add('FAIL', w, 'shape without "ty"'); return; }
      if (s.ty === 'gr') {
        if (!Array.isArray(s.it)) add('FAIL', w, 'group without "it"');
        else {
          if (s.it[s.it.length - 1]?.ty !== 'tr') add('WARN', w, 'group should end with its transform ("tr")');
          const firstStyle = s.it.findIndex((x) => ['fl', 'st', 'gf', 'gs'].includes(x.ty));
          const geoAfter = s.it.findIndex((x, j) => j > firstStyle && ['el', 'rc', 'sr', 'sh'].includes(x.ty));
          if (firstStyle >= 0 && geoAfter >= 0) add('WARN', w, 'geometry after a fill or stroke is not painted by it: geometry first, then modifiers, then styles, then "tr"');
          shapes(s.it, w, ip, op);
        }
        return;
      }
      if (s.ty === 'tr') transform(s, w, ip, op);
      for (const k of ['p', 's', 'r', 'c', 'o', 'w', 'e']) if (s[k] && typeof s[k] === 'object' && !Array.isArray(s[k])) prop(s[k], w, k === 'e' ? 'trim end' : k, ip, op);
      if (s.ty === 'sh' && s.ks) prop(s.ks, w, 'path', ip, op);
    });
  }
  function layers(list, where) {
    const inds = new Set();
    list.forEach((l, i) => {
      const w = `${where}layer ${l.nm || i}`;
      if (l.ty === undefined) add('FAIL', w, 'layer without "ty"');
      if (![0, 1, 2, 3, 4, 5].includes(l.ty)) add('WARN', w, `layer type ${l.ty} is not supported by every player`);
      if (l.ip === undefined || l.op === undefined) add('FAIL', w, 'layer without "ip"/"op"');
      if (l.ind !== undefined) { if (inds.has(l.ind)) add('FAIL', w, `duplicate "ind" ${l.ind}`); inds.add(l.ind); }
      if (l.ty !== 3 && l.ty !== undefined && !l.ks) add('FAIL', w, 'visible layer without a transform "ks"');
      if (l.ks) transform(l.ks, w, l.ip, l.op);
      if (l.ty === 4 && !Array.isArray(l.shapes)) add('FAIL', w, 'shape layer without "shapes"');
      if (l.ty === 4) shapes(l.shapes, w, l.ip, l.op);
      if (l.ty === 0 && !assets.has(l.refId)) add('FAIL', w, `precomp refers to missing asset "${l.refId}"`);
      if (l.tt) add('WARN', w, 'track matte: expensive in canvas players; prefer a trim path or a simpler mask');
      if (l.ef?.length) add('WARN', w, 'layer effects (blur, glow…) are partly or not supported by web players');
    });
    list.forEach((l) => { if (l.parent !== undefined && !inds.has(l.parent)) add('FAIL', `${where}layer ${l.nm || ''}`, `parent ${l.parent} does not exist`); });
  }
  layers(L.layers, '');
  for (const a of L.assets || []) if (Array.isArray(a.layers)) layers(a.layers, `asset ${a.id} › `);
  for (const a of L.assets || []) if (a.p && /^data:image/.test(a.p) && a.p.length > 200000) add('WARN', `asset ${a.id}`, `embedded image of ${Math.round(a.p.length / 1024)} kB`);
  return out;
}

const summary = () => `${L.nm || path.basename(file)}: ${L.w}×${L.h}, ${L.fr} fps, ${((L.op - L.ip) / L.fr).toFixed(2)}s, ${L.layers?.length || 0} layers, ${(Buffer.byteLength(raw) / 1024).toFixed(1)} kB JSON (≈${(zlib.deflateRawSync(raw).length / 1024).toFixed(1)} kB as .lottie)`;

if (cmd === 'check') {
  const f = check(L);
  console.log(summary());
  for (const x of f) console.log(`${x.level.padEnd(4)} ${x.where}: ${x.msg}`);
  const fails = f.filter((x) => x.level === 'FAIL').length;
  console.log(`\n${fails} FAIL · ${f.length - fails} WARN. Then render it: node lottie.mjs sheet ${file}`);
  process.exit(fails ? 1 : 0);
}

// ---------- pack ----------
function crc32(buf) {
  let c, crc = 0xffffffff;
  for (let n = 0; n < buf.length; n++) { c = (crc ^ buf[n]) & 0xff; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; crc = (crc >>> 8) ^ c; }
  return (crc ^ 0xffffffff) >>> 0;
}
function zip(entries) {
  const locals = [], centrals = [];
  let offset = 0;
  for (const { name, data } of entries) {
    const nameBuf = Buffer.from(name), comp = zlib.deflateRawSync(data), crc = crc32(data);
    const local = Buffer.alloc(30);
    local.writeUInt32LE(0x04034b50, 0); local.writeUInt16LE(20, 4); local.writeUInt16LE(0, 6); local.writeUInt16LE(8, 8);
    local.writeUInt32LE(0, 10); local.writeUInt32LE(crc, 14); local.writeUInt32LE(comp.length, 18); local.writeUInt32LE(data.length, 22);
    local.writeUInt16LE(nameBuf.length, 26); local.writeUInt16LE(0, 28);
    locals.push(local, nameBuf, comp);
    const central = Buffer.alloc(46);
    central.writeUInt32LE(0x02014b50, 0); central.writeUInt16LE(20, 4); central.writeUInt16LE(20, 6); central.writeUInt16LE(0, 8); central.writeUInt16LE(8, 10);
    central.writeUInt32LE(0, 12); central.writeUInt32LE(crc, 16); central.writeUInt32LE(comp.length, 20); central.writeUInt32LE(data.length, 24);
    central.writeUInt16LE(nameBuf.length, 28); central.writeUInt32LE(offset, 42);
    centrals.push(central, nameBuf);
    offset += 30 + nameBuf.length + comp.length;
  }
  const cd = Buffer.concat(centrals), end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0); end.writeUInt16LE(entries.length, 8); end.writeUInt16LE(entries.length, 10);
  end.writeUInt32LE(cd.length, 12); end.writeUInt32LE(offset, 16);
  return Buffer.concat([...locals, cd, end]);
}
if (cmd === 'pack') {
  const fails = check(L).filter((x) => x.level === 'FAIL');
  if (fails.length) { console.log(`${fails.length} FAIL in check: fix them first (node lottie.mjs check ${file})`); process.exit(1); }
  const id = (opt('id') || path.basename(file, path.extname(file))).replace(/[^\w-]/g, '-');
  const out = opt('out') || path.join(path.dirname(file), `${id}.lottie`);
  const manifest = { version: '2', generator: 'atelier lottie.mjs', animations: [{ id }] };
  fs.writeFileSync(out, zip([
    { name: 'manifest.json', data: Buffer.from(JSON.stringify(manifest)) },
    { name: `a/${id}.json`, data: Buffer.from(JSON.stringify(L)) },
  ]));
  console.log(`${out}: ${(fs.statSync(out).size / 1024).toFixed(1)} kB (from ${(Buffer.byteLength(raw) / 1024).toFixed(1)} kB JSON)`);
  process.exit(0);
}

// ---------- sheet ----------
if (typeof WebSocket === 'undefined') { console.log('sheet needs Node 22 or later (built-in WebSocket).'); process.exit(2); }
const chromePath = findChrome();
if (!chromePath) { console.log('No Chrome, Chromium or Edge found. Set CHROME_PATH.'); process.exit(2); }
const N = Math.max(2, Math.min(24, Number(opt('frames')) || 8));
const outPng = opt('out') || path.join(path.dirname(file), `${path.basename(file, path.extname(file))}-sheet.png`);
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'atelier-lottie-'));
const total = L.op - L.ip;
const frameList = Array.from({ length: N }, (_, i) => Math.min(L.op - 1, L.ip + Math.round((total * i) / (N - 1))));
const cell = 220;
fs.writeFileSync(path.join(tmp, 'sheet.html'), `<!doctype html><meta charset="utf-8">
<style>body{margin:0;background:#e9e7e2;font:12px/1.3 ui-monospace,monospace;color:#333}.g{display:grid;grid-template-columns:repeat(4,${cell}px);gap:8px;padding:8px}
.c{background:#fff;height:${cell}px}.c svg{display:block}figure{margin:0}figcaption{padding:2px 0}</style>
<div class="g">${frameList.map((f) => `<figure><div class="c" data-f="${f}"></div><figcaption>frame ${f} · ${((f - L.ip) / L.fr).toFixed(2)}s</figcaption></figure>`).join('')}</div>
<script src="https://cdn.jsdelivr.net/npm/lottie-web@5.12.2/build/player/lottie_light.min.js"></script>
<script>
  const data = ${JSON.stringify(L)};
  window.__done = (async () => {
    if (!window.lottie) return 'lottie-web did not load (offline?)';
    for (const c of document.querySelectorAll('.c')) {
      const a = lottie.loadAnimation({ container: c, renderer: 'svg', loop: false, autoplay: false, animationData: JSON.parse(JSON.stringify(data)) });
      await new Promise((r) => a.addEventListener('DOMLoaded', r));
      a.goToAndStop(Number(c.dataset.f), true);
    }
    return 'ok';
  })();
</script>`);
const port = 9300 + Math.floor(Math.random() * 500);
const chrome = spawn(chromePath, ['--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=${tmp}`, '--no-first-run', '--hide-scrollbars', '--allow-file-access-from-files', 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const errors = [];
try {
  let wsUrl;
  for (let i = 0; i < 60 && !wsUrl; i++) { await sleep(150); try { wsUrl = (await (await fetch(`http://127.0.0.1:${port}/json/list`)).json()).find((t) => t.type === 'page')?.webSocketDebuggerUrl; } catch { /* starting */ } }
  const ws = new WebSocket(wsUrl);
  await new Promise((r) => (ws.onopen = r));
  let id = 0;
  const pending = new Map();
  ws.onmessage = (e) => { const m = JSON.parse(e.data); if (m.id) { pending.get(m.id)?.(m); pending.delete(m.id); } else if (m.method === 'Runtime.exceptionThrown') errors.push(m.params.exceptionDetails.exception?.description?.split('\n')[0]); };
  const send = (method, params = {}) => new Promise((r) => { const n = ++id; pending.set(n, (m) => r(m.result || {})); ws.send(JSON.stringify({ id: n, method, params })); });
  await send('Runtime.enable'); await send('Page.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: 4 * (cell + 8) + 8, height: 600, deviceScaleFactor: 1, mobile: false });
  await send('Page.navigate', { url: pathToFileURL(path.join(tmp, 'sheet.html')).href });
  await sleep(1500);
  const status = (await send('Runtime.evaluate', { expression: 'window.__done', awaitPromise: true, returnByValue: true })).result?.value;
  if (status !== 'ok') { console.log(`could not render: ${status || errors.join(' | ') || 'unknown error'}`); process.exit(2); }
  const h = (await send('Runtime.evaluate', { expression: "document.querySelector('.g').getBoundingClientRect().bottom + 8", returnByValue: true })).result.value;
  const { data } = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true, clip: { x: 0, y: 0, width: 4 * (cell + 8) + 8, height: Math.ceil(h), scale: 1 } });
  fs.writeFileSync(outPng, Buffer.from(data, 'base64'));
  console.log(summary());
  console.log(`${outPng}: ${N} frames${errors.length ? `\nconsole errors: ${errors.join(' | ')}` : ''}\nOpen it: the first and last frames are compositions, the motion reads from frame to frame.`);
  ws.close();
} finally {
  chrome.kill();
  setTimeout(() => { try { fs.rmSync(tmp, { recursive: true, force: true }); } catch { /* still held */ } }, 500);
}
