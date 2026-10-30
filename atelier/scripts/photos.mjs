#!/usr/bin/env node
// Search the free photo library (Wikimedia Commons, CC0 / public domain / CC BY / CC BY-SA).
//
//   node photos.mjs "sourdough bread on a wooden board" --n 3
//   node photos.mjs "mountain lake at dawn" --orient landscape --tone dark
//   node photos.mjs "hands shaping clay" --people hands --temp warm
//
// Filters: --orient portrait|landscape|square  --tone light|mid|dark  --temp warm|neutral|cool
//          --people none|figure|face|hands  --cat <category>  --n 4  --json
// Prints a ready <img> with srcset and the credit line the licence requires.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SKILL = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const photos = JSON.parse(fs.readFileSync(path.join(SKILL, 'library', 'photos.json'), 'utf8'));

const args = process.argv.slice(2);
const opts = { n: 4 };
const words = [];
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '--json') opts.json = true;
  else if (a.startsWith('--')) opts[a.slice(2)] = args[++i];
  else words.push(a);
}

if (!words.length && !opts.cat) {
  const cats = [...new Set(photos.map((p) => p.cat))].sort().join(', ');
  console.log(`usage: node photos.mjs "<what the picture shows>" [--orient portrait|landscape|square] [--tone light|mid|dark]
                     [--temp warm|neutral|cool] [--people none|figure|face|hands] [--cat <category>] [--n 4] [--json]
${photos.length} photos. categories: ${cats}`);
  process.exit(0);
}

const STOP = new Set(['a', 'an', 'the', 'of', 'on', 'in', 'at', 'with', 'and', 'for', 'to', 'from', 'by']);
const terms = words.join(' ').toLowerCase().split(/[\s,]+/).filter((t) => t.length > 1 && !STOP.has(t));
const stem = (t) => t.replace(/(ies|es|s)$/, '');

const orientOf = (p) => (p.w / p.h > 1.15 ? 'landscape' : p.h / p.w > 1.15 ? 'portrait' : 'square');

function score(p) {
  const subject = p.subject.toLowerCase();
  const tags = p.tags.map((t) => t.toLowerCase());
  let s = 0;
  for (const t of terms) {
    const st = stem(t);
    if (tags.some((g) => g === t || stem(g) === st)) s += 3;
    else if (tags.some((g) => g.includes(st))) s += 1.5;
    if (subject.includes(st)) s += 2;
    if (p.cat === t || p.cat === st) s += 2;
  }
  return s;
}

let list = photos.filter((p) =>
  (!opts.orient || orientOf(p) === opts.orient) &&
  (!opts.tone || p.tone === opts.tone) &&
  (!opts.temp || p.temp === opts.temp) &&
  (!opts.people || p.people === opts.people) &&
  (!opts.cat || p.cat === opts.cat));

list = list.map((p) => ({ p, s: terms.length ? score(p) : 1 })).filter((x) => x.s > 0)
  .sort((a, b) => b.s - a.s || b.p.w * b.p.h - a.p.w * a.p.h)
  .slice(0, Number(opts.n));

// Wikimedia serves resized copies under /thumb/<hash>/<file>/<width>px-<file>.
function thumb(url, width) {
  const m = url.match(/^(https:\/\/upload\.wikimedia\.org\/wikipedia\/commons)\/([0-9a-f]\/[0-9a-f]{2})\/(.+)$/);
  if (!m) return url;
  const file = m[3];
  const name = /\.(tiff?)$/i.test(file) ? `lossy-page1-${width}px-${file}.jpg` : `${width}px-${file}${/\.svg$/i.test(file) ? '.png' : ''}`;
  return `${m[1]}/thumb/${m[2]}/${file}/${name}`;
}

function snippet(p) {
  const widths = [640, 960, 1280, 1920, 2560].filter((w) => w < p.w);
  const srcset = widths.map((w) => `${thumb(p.url, w)} ${w}w`).join(', ');
  const src = widths.length ? thumb(p.url, widths[Math.min(2, widths.length - 1)]) : p.url;
  const alt = p.subject.charAt(0).toUpperCase() + p.subject.slice(1);
  return `<img src="${src}"${srcset ? `\n     srcset="${srcset}"\n     sizes="(min-width: 60rem) 50vw, 100vw"` : ''}\n     width="${p.w}" height="${p.h}" alt="${alt.replace(/"/g, '&quot;')}" loading="lazy" decoding="async">`;
}

const credit = (p) => `<a href="${p.page}">${p.subject}</a>, ${p.author}, ${p.license}`;

if (opts.json) {
  console.log(JSON.stringify(list.map(({ p, s }) => ({ score: s, orient: orientOf(p), img: snippet(p), credit: credit(p), ...p })), null, 1));
  process.exit(0);
}
if (!list.length) {
  console.log('No match. Describe the picture differently (the place, the material, the action), drop a filter, or try --cat.');
  process.exit(0);
}
for (const { p } of list) {
  console.log(`${p.subject}\n  ${orientOf(p)} ${p.w}x${p.h} · ${p.tone} · ${p.temp} · people: ${p.people} · ${p.license} · ${p.author}\n  page: ${p.page}\n\n${snippet(p)}\n\n  credit: ${credit(p)}\n`);
}
console.log('Hero image: drop loading="lazy" and add fetchpriority="high". Credit every photo used (a "Photographs:" line in the footer).');
