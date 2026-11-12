#!/usr/bin/env node
// Read a game capture before designing a HUD over it: how bright and how busy each zone is,
// what text treatment each zone needs, and the colours that already live in the frame.
//
//   node frame.mjs capture.jpg
//   node frame.mjs capture.png --grid 4 --json
//
// Zones: a 3 x 3 grid by default (top-left … bottom-right). For each: mean lightness (0 to 100),
// busyness (how much the lightness varies), and a treatment for HUD text placed there:
//   bare      white text with a soft shadow reads on its own
//   shadow+   white text needs a heavier shadow or a soft dark gradient behind it
//   plate     put the text on a dark translucent plate (bright or busy ground)
// Palette: the frame's dominant colours, to take the HUD's neutrals and accent from.
// Needs a local Chrome or Edge (it decodes the image in a headless page).

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';
import { findChrome } from './chrome.mjs';

const args = process.argv.slice(2);
const opts = { grid: 3 };
let file;
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '--json') opts.json = true;
  else if (a === '--grid') opts.grid = Math.max(2, Math.min(6, Number(args[++i]) || 3));
  else if (a === '--help' || a === '-h') file = null;
  else file = a;
}
if (!file || !fs.existsSync(file)) {
  console.log('usage: node frame.mjs <capture.jpg|png|webp> [--grid 3] [--json]');
  process.exit(file === undefined || file === null ? 0 : 1);
}
const chrome = findChrome();
if (!chrome) { console.log('No Chrome or Edge found (set CHROME_PATH). Read the frame by eye and say so.'); process.exit(2); }

const ext = path.extname(file).slice(1).toLowerCase().replace('jpg', 'jpeg');
const dataUrl = `data:image/${ext};base64,${fs.readFileSync(file).toString('base64')}`;
const G = opts.grid;

// The page decodes the image on a canvas (a data URL keeps the canvas readable) and writes JSON into the DOM.
const page = `<!doctype html><meta charset="utf-8"><body><pre id="out">pending</pre><script>
const img = new Image();
img.onload = () => {
  const W = 480, H = Math.round(480 * img.height / img.width);
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const x = c.getContext('2d'); x.drawImage(img, 0, 0, W, H);
  const d = x.getImageData(0, 0, W, H).data;
  const lum = (r, g, b) => { const f = (v) => { v /= 255; return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
    const Y = 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); return Y > 0.008856 ? 116 * Math.cbrt(Y) - 16 : 903.3 * Y; };
  const G = ${G}, zones = [];
  for (let gy = 0; gy < G; gy++) for (let gx = 0; gx < G; gx++) {
    let n = 0, s = 0, s2 = 0, edge = 0;
    const x0 = Math.floor(gx * W / G), x1 = Math.floor((gx + 1) * W / G), y0 = Math.floor(gy * H / G), y1 = Math.floor((gy + 1) * H / G);
    for (let y = y0; y < y1; y += 2) for (let xx = x0; xx < x1; xx += 2) {
      const i = (y * W + xx) * 4, L = lum(d[i], d[i + 1], d[i + 2]);
      n++; s += L; s2 += L * L;
      if (xx + 2 < x1) { const j = i + 8; edge += Math.abs(L - lum(d[j], d[j + 1], d[j + 2])); }
    }
    const mean = s / n, sd = Math.sqrt(Math.max(0, s2 / n - mean * mean)), busy = edge / n;
    zones.push({ gx, gy, light: Math.round(mean), spread: Math.round(sd), busy: Math.round(busy * 10) / 10 });
  }
  // Dominant colours: 4-bit buckets, merged, most common first.
  const buckets = new Map();
  for (let i = 0; i < d.length; i += 16) { const k = (d[i] >> 4) + ',' + (d[i + 1] >> 4) + ',' + (d[i + 2] >> 4); const b = buckets.get(k) || [0, 0, 0, 0]; b[0] += d[i]; b[1] += d[i + 1]; b[2] += d[i + 2]; b[3]++; buckets.set(k, b); }
  const hex = (r, g, b) => '#' + [r, g, b].map((v) => Math.round(v).toString(16).padStart(2, '0')).join('');
  const sorted = [...buckets.values()].sort((a, b) => b[3] - a[3]).map((b) => [b[0] / b[3], b[1] / b[3], b[2] / b[3], b[3]]);
  const palette = [];
  for (const c of sorted) { if (palette.every((p) => Math.hypot(p[0] - c[0], p[1] - c[1], p[2] - c[2]) > 48)) palette.push(c); if (palette.length >= 8) break; }
  const total = d.length / 16;
  document.getElementById('out').textContent = JSON.stringify({ w: img.width, h: img.height, zones,
    palette: palette.map((p) => ({ hex: hex(p[0], p[1], p[2]), share: Math.round(p[3] / total * 100) })) });
};
img.onerror = () => { document.getElementById('out').textContent = 'error'; };
img.src = ${JSON.stringify(dataUrl)};
</script>`;

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'atelier-frame-'));
const html = path.join(tmp, 'frame.html');
fs.writeFileSync(html, page);
const res = spawnSync(chrome, ['--headless=new', '--disable-gpu', `--user-data-dir=${path.join(tmp, 'profile')}`, '--virtual-time-budget=10000', '--dump-dom', pathToFileURL(html).href],
  { encoding: 'utf8', timeout: 60000, maxBuffer: 64 * 1024 * 1024 });
fs.rmSync(tmp, { recursive: true, force: true });
const m = (res.stdout || '').match(/<pre id="out">([\s\S]*?)<\/pre>/);
if (!m || !m[1].startsWith('{')) { console.log('Could not decode the image in Chrome. Read the frame by eye and say so.'); process.exit(1); }
const data = JSON.parse(m[1].replace(/&quot;/g, '"').replace(/&amp;/g, '&'));

const ROWS = G === 3 ? ['top', 'middle', 'bottom'] : [...Array(G)].map((_, i) => `row ${i + 1}`);
const COLS = G === 3 ? ['left', 'centre', 'right'] : [...Array(G)].map((_, i) => `col ${i + 1}`);
for (const z of data.zones) {
  z.zone = `${ROWS[z.gy]} ${COLS[z.gx]}`.replace('middle centre', 'centre');
  // Bright or busy grounds swallow white text; calm dark grounds carry it bare.
  z.treatment = z.light > 62 || z.busy > 9 ? 'plate' : z.light > 45 || z.busy > 5.5 || z.spread > 22 ? 'shadow+' : 'bare';
}

if (opts.json) { console.log(JSON.stringify(data, null, 1)); process.exit(0); }
console.log(`${path.basename(file)}  ${data.w}x${data.h}\n`);
console.log('zone              light  busy  treatment for white HUD text');
for (const z of data.zones) console.log(`${z.zone.padEnd(17)} ${String(z.light).padStart(5)}  ${String(z.busy).padStart(4)}  ${z.treatment}`);
console.log(`\npalette (share of frame): ${data.palette.map((p) => `${p.hex} ${p.share}%`).join('  ')}`);
console.log('\nThis reads light, not content: a calm corner may already hold the game\'s own HUD (thin marks, a silhouette, small bars). Look at the corners yourself before placing anything there.');
console.log('\nPlace persistent readouts in "bare" or "shadow+" zones where the game allows; give anything in a "plate" zone a dark translucent plate.');
console.log('Take the HUD neutrals from the palette and the accent from a colour that already means something in the frame (a livery, a kerb, a light).');
