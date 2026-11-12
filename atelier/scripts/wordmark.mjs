#!/usr/bin/env node
// Set a wordmark in a Google Font (or a local font file) and export it as outlined SVG paths,
// so the logo renders the same everywhere with no font loaded.
//
//   node wordmark.mjs --text "Kiln & Co" --font "Gloock" --out logo.svg
//   node wordmark.mjs --text "orbit" --font "Clash Display" --file ./ClashDisplay-Semibold.otf --tracking -30
//   node wordmark.mjs --text "NORTE" --font "Anton" --tracking 40 --color "#1b1b1b" --out wordmark.svg
//
// Options: --weight 400  --italic  --size 200 (units per em of the output)  --tracking 0 (1/1000 em)
//          --pad 0.08 (em)  --color currentColor  --file <ttf|otf|woff>  --out <file.svg>
//          --glyphs: one <path> per letter (data-char, data-i) and each letter's box printed, so a
//          letter can be swapped for the mark or coloured on its own
// Needs the opentype.js package: npm i --no-save opentype.js (in the project) or npm i -g opentype.js.

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';

const args = process.argv.slice(2);
const opts = { weight: '400', size: '200', tracking: '0', pad: '0.08', color: 'currentColor' };
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '--italic') opts.italic = true;
  else if (a === '--glyphs') opts.glyphs = true;
  else if (a.startsWith('--')) opts[a.slice(2)] = args[++i];
}
if (!opts.text || (!opts.font && !opts.file)) {
  console.log('usage: node wordmark.mjs --text "<name>" --font "<Google family>" [--weight 400] [--italic] [--tracking 0] [--file font.ttf] [--color currentColor] [--out logo.svg]');
  process.exit(0);
}

async function loadOpentype() {
  const here = path.dirname(fileURLToPath(import.meta.url));
  const roots = [process.cwd(), here, process.env.FC_MODULES].filter(Boolean);
  try { roots.push(execSync('npm root -g', { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim()); } catch { /* npm not on PATH */ }
  for (const root of roots) {
    try {
      const req = createRequire(path.join(root, 'noop.js'));
      const resolved = req.resolve('opentype.js');
      const mod = await import(pathToFileURL(resolved).href);
      return mod.default || mod;
    } catch { /* try the next root */ }
  }
  console.log('opentype.js is not installed. Run `npm i --no-save opentype.js` in the project (or `npm i -g opentype.js`), then retry.\nWithout it, set the wordmark as live text in the display face and say the SVG export is pending.');
  process.exit(2);
}

async function fontBuffer() {
  if (opts.file) return fs.readFileSync(opts.file);
  const fam = opts.font.trim().replace(/ /g, '+');
  const axis = opts.italic ? `ital,wght@1,${opts.weight}` : `wght@${opts.weight}`;
  // A plain user agent makes Google Fonts serve TrueType, which opentype.js reads.
  const cssUrl = `https://fonts.googleapis.com/css2?family=${fam}:${axis}`;
  let css = await (await fetch(cssUrl, { headers: { 'User-Agent': 'curl/8' } })).text();
  if (!/src:\s*url\(/.test(css)) css = await (await fetch(`https://fonts.googleapis.com/css2?family=${fam}`, { headers: { 'User-Agent': 'curl/8' } })).text();
  const m = css.match(/src:\s*url\(([^)]+)\)/);
  if (!m) {
    console.log(`Google Fonts has no "${opts.font}" at weight ${opts.weight}. Check the name, or pass --file with a font you are licensed to use.`);
    process.exit(1);
  }
  return Buffer.from(await (await fetch(m[1])).arrayBuffer());
}

const opentype = await loadOpentype();
const buf = await fontBuffer();
const font = opentype.parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength));

const size = Number(opts.size);
const scale = size / font.unitsPerEm;
const tracking = (Number(opts.tracking) / 1000) * size;
// Some fonts use substitution tables opentype.js cannot apply; fall back to one glyph per character.
let glyphs;
try { glyphs = font.stringToGlyphs(opts.text); } catch { glyphs = [...opts.text].map((ch) => font.charToGlyph(ch)); }

// Serialise outlines ourselves: toPathData differs across opentype.js versions and can
// leave contours open, which fills the counters of letters like o and e.
const n = (v) => +v.toFixed(2);
function pathData(p) {
  let d = '';
  for (const c of p.commands) {
    if (c.type === 'M' || c.type === 'L') d += `${c.type}${n(c.x)} ${n(c.y)}`;
    else if (c.type === 'Q') d += `Q${n(c.x1)} ${n(c.y1)} ${n(c.x)} ${n(c.y)}`;
    else if (c.type === 'C') d += `C${n(c.x1)} ${n(c.y1)} ${n(c.x2)} ${n(c.y2)} ${n(c.x)} ${n(c.y)}`;
    else if (c.type === 'Z') d += 'Z';
  }
  // Close any contour the font left open before the next one starts.
  return d.replace(/([^Z])M/g, '$1ZM').replace(/([^Z])$/, '$1Z');
}

let x = 0;
const parts = [];
const letters = [];
const chars = [...opts.text];
glyphs.forEach((g, i) => {
  const p = g.getPath(x, 0, size);
  const d = p.commands.length ? pathData(p) : '';
  if (d) parts.push(d);
  if (d) { const b = p.getBoundingBox(); letters.push({ i, char: glyphs.length === chars.length ? chars[i] : '', d, box: [b.x1, b.y1, b.x2 - b.x1, b.y2 - b.y1].map((v) => +v.toFixed(2)) }); }
  const kern = i < glyphs.length - 1 ? font.getKerningValue(g, glyphs[i + 1]) * scale : 0;
  x += g.advanceWidth * scale + kern + (i < glyphs.length - 1 ? tracking : 0);
});

// Bounding box from the outlines, then a margin in em.
const full = new opentype.Path();
glyphs.reduce((cx, g, i) => {
  full.extend(g.getPath(cx, 0, size));
  const kern = i < glyphs.length - 1 ? font.getKerningValue(g, glyphs[i + 1]) * scale : 0;
  return cx + g.advanceWidth * scale + kern + (i < glyphs.length - 1 ? tracking : 0);
}, 0);
const bb = full.getBoundingBox();
const pad = Number(opts.pad) * size;
const vb = [bb.x1 - pad, bb.y1 - pad, bb.x2 - bb.x1 + 2 * pad, bb.y2 - bb.y1 + 2 * pad].map((v) => +v.toFixed(2));

const title = opts.text.replace(/[<&>"]/g, (c) => ({ '<': '&lt;', '&': '&amp;', '>': '&gt;', '"': '&quot;' }[c]));
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb.join(' ')}" role="img" aria-label="${title}">
  <title>${title}</title>
${body()}
</svg>
`;

function body() {
  if (!opts.glyphs) return `  <path fill="${opts.color}" d="${parts.join(' ')}"/>`;
  const rows = letters.map((l) => `    <path data-i="${l.i}" data-char="${l.char.replace(/"/g, '&quot;')}" d="${l.d}"/>`);
  return `  <g fill="${opts.color}">\n${rows.join('\n')}\n  </g>`;
}

if (opts.glyphs) for (const l of letters) console.error(`letter ${l.i} "${l.char}"  box x ${l.box[0]} y ${l.box[1]} w ${l.box[2]} h ${l.box[3]}`);
if (opts.out) {
  fs.writeFileSync(opts.out, svg);
  console.log(`wrote ${opts.out}  (${font.names.fullName?.en || opts.font}, viewBox ${vb.join(' ')}, aspect ${(vb[2] / vb[3]).toFixed(2)}:1)`);
} else process.stdout.write(svg);
