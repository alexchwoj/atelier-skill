#!/usr/bin/env node
// Find Google Fonts by measured shape, or by likeness to a face you know.
//
//   node fonts.mjs --category serif --contrast high --xheight short
//   node fonts.mjs --category sans --width narrow --weight heavy
//   node fonts.mjs --like "Bodoni Moda" --limit 10
//   node fonts.mjs --info "Gloock"
//   node fonts.mjs --pairings [--mood editorial] [--theme dark] [--display serif]   pairings proven in the prompt library
//
// Traits are percentiles across the catalogue (regular weight, roman style):
//   --width narrow|normal|wide     --xheight short|normal|tall    --weight light|regular|heavy
//   --contrast low|medium|high     --descenders short|long
// Results rank faces proven in the library and well-built families (many weights) first.
// The plainest system-style defaults are hidden unless --all (see references/studio/type.md).

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SKILL = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { traits, rows } = JSON.parse(fs.readFileSync(path.join(SKILL, 'library', 'fonts.json'), 'utf8'));
const pairingsFile = path.join(SKILL, 'library', 'pairings.json');
const PAIRINGS = fs.existsSync(pairingsFile) ? JSON.parse(fs.readFileSync(pairingsFile, 'utf8')) : [];

// Hidden from trait searches: faces so common they read as no decision at all.
const OVERUSED = new Set(['Roboto', 'Open Sans', 'Lato', 'Arial', 'Helvetica', 'Montserrat', 'Raleway', 'Nunito', 'Source Sans 3', 'Source Sans Pro', 'Poppins']);

// Faces with a track record: used in the prompt library or chosen often by good studios.
const CURATED = ['Instrument Serif', 'Instrument Sans', 'Fraunces', 'Newsreader', 'Playfair Display', 'Cormorant Garamond', 'EB Garamond',
  'Gloock', 'Libre Bodoni', 'Bodoni Moda', 'DM Serif Display', 'Young Serif', 'Literata', 'Source Serif 4', 'Spectral', 'Crimson Pro',
  'Inter', 'Inter Tight', 'Geist', 'Manrope', 'Hanken Grotesk', 'Figtree', 'Onest', 'Schibsted Grotesk', 'Bricolage Grotesque',
  'Space Grotesk', 'Archivo', 'Archivo Black', 'Anton', 'Oswald', 'Big Shoulders Display', 'Syne', 'Unbounded', 'Sora', 'Outfit',
  'Plus Jakarta Sans', 'DM Sans', 'Work Sans', 'Public Sans', 'IBM Plex Sans', 'IBM Plex Mono', 'JetBrains Mono', 'Geist Mono',
  'Space Mono', 'DM Mono', 'Fragment Mono', 'Bebas Neue', 'Urbanist', 'Lexend', 'Epilogue', 'Albert Sans', 'Red Hat Display'];
const PROVEN = new Map();
for (const f of CURATED) PROVEN.set(f, 1);
for (const p of PAIRINGS) for (const f of [p.display, p.body]) PROVEN.set(f, (PROVEN.get(f) || 0) + p.uses);

const STYLES = new Map();
for (const r of rows) STYLES.set(r[0], (STYLES.get(r[0]) || 0) + 1);

const args = process.argv.slice(2);
const opts = { limit: 12 };
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '--all' || a === '--json' || a === '--pairings') opts[a.slice(2)] = true;
  else if (a.startsWith('--')) opts[a.slice(2)] = args[++i];
}

if (opts.pairings) {
  let list = PAIRINGS.filter((p) => p.display !== p.body || opts.all);
  if (opts.mood) list = list.filter((p) => p.moods[opts.mood]);
  if (opts.theme) list = list.filter((p) => p.themes[opts.theme] || p.themes.mixed);
  if (opts.display) list = list.filter((p) => p.displayCategory === opts.display);
  list = list.slice(0, Number(opts.limit));
  if (opts.json) { console.log(JSON.stringify(list, null, 1)); process.exit(0); }
  if (!list.length) { console.log('No pairing matches; drop a filter.'); process.exit(0); }
  for (const p of list) {
    const moods = Object.entries(p.moods).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([m]) => m).join(', ');
    console.log(`${`${p.display} + ${p.body}`.padEnd(44)} used ${String(p.uses).padStart(2)}x  ${p.displayCategory}/${p.bodyCategory}${moods ? `  ${moods}` : ''}\n    e.g. ${p.examples.slice(0, 2).join(', ')}`);
  }
  console.log('\nOpen an example to see how the pairing is sized, weighted and spaced, and reuse that treatment.');
  process.exit(0);
}

if (!Object.keys(opts).some((k) => !['limit', 'all', 'json'].includes(k))) {
  console.log(`usage:
  node fonts.mjs --pairings [--mood editorial] [--theme dark] [--display serif]   proven pairings from the library
  node fonts.mjs --category serif|sans|display|handwriting|mono [--width narrow|normal|wide] [--xheight short|normal|tall]
                 [--weight light|regular|heavy] [--contrast low|medium|high] [--descenders short|long] [--limit 12] [--all]
  node fonts.mjs --like "<family>"     nearest faces by measured shape
  node fonts.mjs --info "<family>"     the traits of one face
${new Set(rows.map((r) => r[0])).size} families indexed, ${PAIRINGS.length} pairings from the prompt library.`);
  process.exit(0);
}

const T = Object.fromEntries(traits.map((t, i) => [t, i + 4]));

// One representative row per family: regular roman when it exists.
const byFamily = new Map();
for (const r of rows) {
  const cur = byFamily.get(r[0]);
  const score = (x) => Math.abs(x[1] - 400) + (x[3] ? 1000 : 0);
  if (!cur || score(r) < score(cur)) byFamily.set(r[0], r);
}
// Families built for other scripts rarely make good Latin display faces; hide them unless --all.
const OTHER_SCRIPT = /\b(Noto|Mincho|Gothic|JP|KR|TC|SC|HK|Arabic|Quran|Kufi|Naskh|Nastaliq|Devanagari|Bengali|Tamil|Telugu|Kannada|Gujarati|Gurmukhi|Malayalam|Sinhala|Hebrew|Thai|Lao|Khmer|Myanmar|Ethiopic|Georgian|Armenian|Sree|Mukta|Hind|Baloo|Tiro|Kohinoor|Amiri|Cairo|Tajawal|Mada|Harmattan|Lateef|Scheherazade|Rakkas|Mirza|Lalezar|Zen|Yuji|Kosugi|Sawarabi|Shippori|Kaisei|Klee|Hina|Dela Gothic|Stick|RocknRoll|Yomogi|Kiwi Maru|Murecho|Hahmlet|Gowun|Nanum|Gaegu|Jua|Sunflower|Do Hyeon|Black Han|Song Myung|Gugi|Dokdo|Stylish|Ma Shan|ZCOOL|Liu Jian|Long Cang|Zhi Mang)\b/;
const fams = [...byFamily.values()].filter((r) => opts.all || !OTHER_SCRIPT.test(r[0]));

// Percentile of every trait across the catalogue.
const sorted = traits.map((t) => fams.map((r) => r[T[t]]).filter((v) => v != null).sort((a, b) => a - b));
const pct = (t, v) => {
  if (v == null) return null;
  const arr = sorted[traits.indexOf(t)];
  let lo = 0, hi = arr.length;
  while (lo < hi) { const mid = (lo + hi) >> 1; if (arr[mid] < v) lo = mid + 1; else hi = mid; }
  return Math.round((100 * lo) / arr.length);
};
const P = (r, t) => pct(t, r[T[t]]);

const BANDS = {
  width: ['advance', { narrow: [0, 25], normal: [25, 75], wide: [75, 101] }],
  xheight: ['xRatio', { short: [0, 30], normal: [30, 70], tall: [70, 101] }],
  weight: ['stemW', { light: [0, 25], regular: [25, 70], heavy: [70, 101] }],
  contrast: ['contrast', { low: [0, 30], medium: [30, 70], high: [70, 101] }],
  descenders: ['descRatio', { short: [0, 35], long: [65, 101] }],
};

const describe = (r) => {
  const w = P(r, 'advance'), x = P(r, 'xRatio'), s = P(r, 'stemW'), c = P(r, 'contrast');
  const word = (v, lo, mid, hi) => (v == null ? '?' : v < 25 ? lo : v > 75 ? hi : mid);
  return `${word(w, 'narrow', 'normal width', 'wide')}, ${word(x, 'short x-height', 'mid x-height', 'tall x-height')}, ${word(s, 'light', 'regular', 'heavy')}, ${word(c, 'low contrast', 'medium contrast', 'high contrast')}`;
};

const cssUrl = (name) => `https://fonts.googleapis.com/css2?family=${name.replace(/ /g, '+')}:wght@400;700&display=swap`;

function print(list, extra) {
  if (opts.json) { console.log(JSON.stringify(list.map(({ r, d }) => ({ family: r[0], category: r[2], distance: d, traits: Object.fromEntries(traits.map((t) => [t, P(r, t)])) })), null, 1)); return; }
  if (!list.length) { console.log('No faces match. Loosen a trait, or add --all to include overused faces.'); return; }
  for (const { r, d } of list) {
    const tag = PROVEN.has(r[0]) ? '  ★ proven' : '';
    console.log(`${r[0].padEnd(28)} ${r[2].padEnd(11)} ${describe(r)}  ${STYLES.get(r[0])} styles${tag}${d != null ? `  (distance ${d.toFixed(2)})` : ''}`);
  }
  console.log(`\nLoad: <link href="${cssUrl(list[0].r[0])}" rel="stylesheet">  (adjust the weights)${extra || ''}`);
}

function find(name) {
  const key = name.toLowerCase();
  return byFamily.get(name) || fams.find((r) => r[0].toLowerCase() === key) || fams.find((r) => r[0].toLowerCase().includes(key));
}

if (opts.info) {
  const r = find(opts.info);
  if (!r) { console.log(`"${opts.info}" is not in the index.`); process.exit(1); }
  console.log(`${r[0]} · ${r[2]} · ${describe(r)}${OVERUSED.has(r[0]) ? ' · overused default' : ''}`);
  for (const t of traits) console.log(`  ${t.padEnd(11)} ${P(r, t) ?? '?'}`);
  process.exit(0);
}

if (opts.like) {
  const ref = find(opts.like);
  if (!ref) { console.log(`"${opts.like}" is not in the index. Try --info with part of the name.`); process.exit(1); }
  const keys = ['advance', 'xRatio', 'descRatio', 'stemW', 'contrast', 'serif', 'densX', 'gap', 'runDensity'];
  const weights = { advance: 1.4, xRatio: 1.2, stemW: 1.2, contrast: 1.4, serif: 0.6, descRatio: 0.8, densX: 0.6, gap: 0.5, runDensity: 0.5 };
  const dist = (r) => {
    let sum = 0, n = 0;
    for (const k of keys) {
      const a = P(ref, k), b = P(r, k);
      if (a == null || b == null) continue;
      sum += weights[k] * ((a - b) / 100) ** 2; n += weights[k];
    }
    return n ? Math.sqrt(sum / n) : 9;
  };
  const list = fams
    .filter((r) => r[0] !== ref[0] && (opts.all || !OVERUSED.has(r[0])) && (!opts.category || r[2] === opts.category))
    .map((r) => ({ r, d: dist(r) + (r[2] === ref[2] ? 0 : 0.08) - (PROVEN.has(r[0]) ? 0.03 : 0) - Math.min(STYLES.get(r[0]), 12) * 0.002 }))
    .sort((a, b) => a.d - b.d)
    .slice(0, Number(opts.limit));
  console.log(`Like ${ref[0]} (${ref[2]}, ${describe(ref)}):\n`);
  print(list);
  process.exit(0);
}

let list = fams.filter((r) => (opts.all || !OVERUSED.has(r[0])) && (!opts.category || r[2] === opts.category));
for (const [opt, [trait, bands]] of Object.entries(BANDS)) {
  if (!opts[opt]) continue;
  const band = bands[opts[opt]];
  if (!band) { console.log(`--${opt} takes ${Object.keys(bands).join('|')}`); process.exit(1); }
  list = list.filter((r) => { const v = P(r, trait); return v != null && v >= band[0] && v < band[1]; });
}
// Well-made first: proven in the library, then families with a full range of weights
// (one-style novelty faces sink), then by name.
list = list
  .map((r) => ({ r, s: (PROVEN.has(r[0]) ? 10 + Math.min(PROVEN.get(r[0]), 20) : 0) + Math.min(STYLES.get(r[0]), 18) }))
  .sort((a, b) => b.s - a.s || a.r[0].localeCompare(b.r[0]))
  .slice(0, Number(opts.limit))
  .map(({ r }) => ({ r, d: null }));
print(list, '\nSet the real headline in two or three of these before choosing.');
