#!/usr/bin/env node
// Build a page palette in OKLCH from one hue, with contrast checked and fixed.
//
//   node palette.mjs --hue 35                          accent at hue 35, light page, accent dosage
//   node palette.mjs --from "#cc785c" --mode both      derive from a brand colour, light + dark
//   node palette.mjs --hue 160 --dosage field          one colour owns large regions
//   node palette.mjs --hue 20 --dosage ensemble        three or four named colour roles
//   node palette.mjs --hue 95 --dosage flood           the surface is the colour
//   node palette.mjs --hue 35 --out tokens.css --html palette.html
//   node palette.mjs --check "#1b1b1b" "#f4efe6"      contrast of one pair
//
// Options: --chroma 0.16  --neutral-hue <h> (default: the accent hue)  --neutral-chroma 0.010
//          --second <h> --third <h> (ensemble hues; default +150 / +215)  --json

import fs from 'node:fs';

// ---------- colour math (OKLab, OKLCH, sRGB) ----------

const toLinear = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
const toGamma = (c) => (c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055);

function oklchToLinear([L, C, H]) {
  const h = (H * Math.PI) / 180;
  const a = C * Math.cos(h), b = C * Math.sin(h);
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;
  return [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ];
}

function linearToOklch([r, g, b]) {
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  const L = 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s;
  const a = 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s;
  const B = 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s;
  return [L, Math.hypot(a, B), ((Math.atan2(B, a) * 180) / Math.PI + 360) % 360];
}

const inGamut = (rgb) => rgb.every((c) => c >= -0.0005 && c <= 1.0005);

// Reduce chroma until the colour fits sRGB, keeping lightness and hue.
function fit([L, C, H]) {
  if (inGamut(oklchToLinear([L, C, H]))) return [L, C, H];
  let lo = 0, hi = C;
  for (let i = 0; i < 24; i++) {
    const mid = (lo + hi) / 2;
    if (inGamut(oklchToLinear([L, mid, H]))) lo = mid; else hi = mid;
  }
  return [L, lo, H];
}

function hex(lch) {
  return '#' + oklchToLinear(fit(lch)).map((c) => Math.round(Math.min(1, Math.max(0, toGamma(Math.max(0, c)))) * 255).toString(16).padStart(2, '0')).join('');
}

function fromHex(h) {
  let s = h.replace('#', '');
  if (s.length === 3) s = [...s].map((c) => c + c).join('');
  return linearToOklch([0, 2, 4].map((i) => toLinear(parseInt(s.slice(i, i + 2), 16) / 255)));
}

function luminance(lch) {
  const [r, g, b] = oklchToLinear(fit(lch)).map((c) => Math.min(1, Math.max(0, c)));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(a, b) {
  const [x, y] = [luminance(a), luminance(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
}

// Walk lightness away from `bg` until the pair reaches `min`.
function ensure(fg, bg, min) {
  let c = [...fg];
  const dir = luminance(bg) > 0.18 ? -1 : 1;
  for (let i = 0; i < 200 && contrast(c, bg) < min; i++) c = [Math.min(0.995, Math.max(0.01, c[0] + dir * 0.005)), c[1], c[2]];
  return c;
}

const css = ([L, C, H]) => `oklch(${(L * 100).toFixed(1)}% ${C.toFixed(3)} ${H.toFixed(1)})`;
const round = (lch) => fit(lch).map((v, i) => (i === 0 ? +v.toFixed(4) : i === 1 ? +v.toFixed(4) : +v.toFixed(1)));

// ---------- args ----------

const args = process.argv.slice(2);
const opts = {};
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '--json') opts.json = true;
  else if (a === '--check') { opts.check = [args[++i], args[++i]]; }
  else if (a.startsWith('--')) opts[a.slice(2)] = args[++i];
}

if (opts.check) {
  const [f, b] = opts.check.map(fromHex);
  const r = contrast(f, b);
  console.log(`${opts.check[0]} on ${opts.check[1]}: ${r.toFixed(2)}:1  body ${r >= 4.5 ? 'pass' : 'FAIL'} (4.5)  large/UI ${r >= 3 ? 'pass' : 'FAIL'} (3.0)  AAA ${r >= 7 ? 'pass' : 'no'} (7.0)`);
  process.exit(0);
}

if (opts.hue == null && !opts.from) {
  console.log('usage: node palette.mjs --hue <0-360> | --from "#hex"  [--mode light|dark|both] [--dosage accent|field|ensemble|flood]\n       [--chroma 0.16] [--neutral-hue h] [--neutral-chroma 0.01] [--second h] [--third h] [--out tokens.css] [--html preview.html] [--json]\n       node palette.mjs --check "#fg" "#bg"');
  process.exit(0);
}

let hue = Number(opts.hue), chroma = opts.chroma != null ? Number(opts.chroma) : 0.16;
if (opts.from) {
  const [, c, h] = fromHex(opts.from);
  hue = h; if (opts.chroma == null) chroma = Math.max(0.06, Math.min(0.24, c));
}
const dosage = opts.dosage || 'accent';
const modes = opts.mode === 'both' ? ['light', 'dark'] : [opts.mode || 'light'];
const nHue = opts['neutral-hue'] != null ? Number(opts['neutral-hue']) : hue;
const nC = opts['neutral-chroma'] != null ? Number(opts['neutral-chroma']) : 0.01;
const hue2 = opts.second != null ? Number(opts.second) : (hue + 150) % 360;
const hue3 = opts.third != null ? Number(opts.third) : (hue + 215) % 360;

// ---------- build ----------

function build(mode) {
  const light = mode === 'light';
  const t = {};
  const flood = dosage === 'flood';

  // Neutrals tinted toward the anchor hue; flood paints the paper itself.
  if (flood) {
    const fc = Math.min(chroma, 0.14);
    t.paper = light ? [0.86, fc, hue] : [0.3, fc * 0.8, hue];
    t['paper-2'] = light ? [0.82, fc, hue] : [0.34, fc * 0.8, hue];
    t['paper-3'] = light ? [0.78, fc, hue] : [0.38, fc * 0.8, hue];
    t.rule = light ? [0.7, fc * 0.8, hue] : [0.46, fc * 0.6, hue];
    t.ink = light ? [0.18, 0.04, hue] : [0.96, 0.02, hue];
    t['ink-2'] = light ? [0.3, 0.05, hue] : [0.86, 0.03, hue];
    t.muted = light ? [0.4, 0.05, hue] : [0.78, 0.04, hue];
  } else {
    t.paper = light ? [0.975, nC, nHue] : [0.165, nC * 1.1, nHue];
    t['paper-2'] = light ? [0.953, nC * 1.1, nHue] : [0.2, nC * 1.2, nHue];
    t['paper-3'] = light ? [0.925, nC * 1.3, nHue] : [0.235, nC * 1.3, nHue];
    t.rule = light ? [0.885, nC * 1.2, nHue] : [0.31, nC * 1.2, nHue];
    t.muted = light ? [0.54, nC * 1.4, nHue] : [0.7, nC * 1.2, nHue];
    t['ink-2'] = light ? [0.4, nC * 1.4, nHue] : [0.82, nC, nHue];
    t.ink = light ? [0.205, nC * 1.5, nHue] : [0.955, nC * 0.8, nHue];
  }
  t.ink = ensure(t.ink, t.paper, 12);
  // Secondary text has to hold on the tinted wells too, not only on the paper.
  t['ink-2'] = ensure(t['ink-2'], t['paper-3'], 7);
  t.muted = ensure(t.muted, t['paper-2'], 4.6);
  t.rule = ensure(t.rule, t.paper, 1.25);

  // Accent: a signal at full chroma; on a flood page it contrasts with the colour field.
  const aHue = flood ? (hue + 180) % 360 : hue;
  t.accent = fit([light ? 0.58 : 0.72, chroma, aHue]);
  t.accent = ensure(t.accent, t.paper, 3.2);
  t['accent-hover'] = fit([t.accent[0] + (light ? -0.06 : 0.06), chroma, aHue]);
  const onLight = [0.99, 0.008, aHue], onDark = [0.17, 0.02, aHue];
  t['accent-ink'] = contrast(onLight, t.accent) >= contrast(onDark, t.accent) ? onLight : onDark;
  t['accent-ink'] = ensure(t['accent-ink'], t.accent, 4.6);
  t.focus = ensure(fit([t.accent[0], Math.min(0.22, chroma + 0.04), aHue]), t.paper, 3.2);

  if (dosage === 'field' || dosage === 'ensemble') {
    t.field = fit([light ? 0.62 : 0.5, Math.min(0.2, chroma + 0.02), hue]);
    t['field-ink'] = contrast([0.99, 0.01, hue], t.field) >= contrast([0.16, 0.03, hue], t.field) ? [0.99, 0.01, hue] : [0.16, 0.03, hue];
    t['field-ink'] = ensure(t['field-ink'], t.field, 4.6);
  }
  if (dosage === 'ensemble') {
    t['accent-2'] = ensure(fit([light ? 0.55 : 0.74, Math.min(0.18, chroma), hue2]), t.paper, 3.2);
    t['accent-3'] = ensure(fit([light ? 0.66 : 0.8, Math.min(0.16, chroma), hue3]), t.paper, 1.6);
  }

  // Status colours tuned to the page's lightness, never pure red and green alone.
  const sL = light ? 0.52 : 0.74, sC = 0.14;
  t.success = ensure(fit([sL, sC, 150]), t.paper, 3.2);
  t.warning = ensure(fit([light ? 0.6 : 0.8, sC, 75]), t.paper, 3.2);
  t.error = ensure(fit([sL, 0.17, 27]), t.paper, 3.2);
  t.info = ensure(fit([sL, sC, 245]), t.paper, 3.2);

  for (const k of Object.keys(t)) t[k] = round(t[k]);
  return t;
}

const PAIRS = [
  ['ink', 'paper', 4.5], ['ink-2', 'paper', 4.5], ['muted', 'paper', 4.5], ['ink', 'paper-3', 4.5], ['muted', 'paper-2', 4.5],
  ['accent', 'paper', 3], ['accent-ink', 'accent', 4.5], ['focus', 'paper', 3], ['field-ink', 'field', 4.5],
  ['accent-2', 'paper', 3], ['error', 'paper', 3],
];

const results = modes.map((m) => ({ mode: m, tokens: build(m) }));

function report(t) {
  return PAIRS.filter(([a, b]) => t[a] && t[b]).map(([a, b, min]) => {
    const r = contrast(t[a], t[b]);
    return { pair: `${a} on ${b}`, ratio: +r.toFixed(2), min, pass: r >= min };
  });
}

function cssBlock(t, selector) {
  const lines = Object.entries(t).map(([k, v]) => `  --color-${k}: ${css(v)}; /* ${hex(v)} */`);
  return `${selector} {\n${lines.join('\n')}\n}`;
}

const header = `/* palette: hue ${hue.toFixed(1)}, chroma ${chroma}, dosage ${dosage}${opts.from ? `, from ${opts.from}` : ''} */`;
let out;
if (results.length === 1) out = `${header}\n${cssBlock(results[0].tokens, ':root')}\n`;
else {
  out = `${header}\n${cssBlock(results[0].tokens, ':root')}\n\n@media (prefers-color-scheme: dark) {\n${cssBlock(results[1].tokens, '  :root:not([data-theme="light"])').replace(/\n/g, '\n  ')}\n}\n\n${cssBlock(results[1].tokens, ':root[data-theme="dark"]')}\n`;
}

if (opts.json) {
  console.log(JSON.stringify(results.map((r) => ({ mode: r.mode, tokens: Object.fromEntries(Object.entries(r.tokens).map(([k, v]) => [k, { oklch: css(v), hex: hex(v) }])), contrast: report(r.tokens) })), null, 1));
} else {
  console.log(out);
  for (const r of results) {
    console.log(`contrast (${r.mode}):`);
    for (const c of report(r.tokens)) console.log(`  ${c.pass ? 'ok  ' : 'FAIL'} ${c.pair.padEnd(22)} ${c.ratio.toFixed(2)}:1 (min ${c.min})`);
  }
  if (dosage === 'accent') console.log('\naccent dosage: keep the accent under ~5% of any screen (primary action, focus, current state).');
  if (dosage === 'field') console.log('\nfield dosage: --color-field owns 30 to 60% of the page in large regions; the accent stays a signal.');
  if (dosage === 'ensemble') console.log('\nensemble dosage: give each of accent, accent-2, accent-3 and field a named job and a footprint.');
  if (dosage === 'flood') console.log('\nflood dosage: the paper is the colour; the accent is its complement, used sparingly.');
}

if (opts.out) { fs.writeFileSync(opts.out, out); console.log(`\nwrote ${opts.out}`); }

if (opts.html) {
  const t = results[0].tokens;
  const sw = (list) => list.map(([k, v]) => `<figure style="margin:0"><div style="height:72px;border-radius:10px;background:${css(v)};outline:1px solid ${css(t.rule)}"></div><figcaption style="font:13px/1.4 system-ui;margin-top:6px;color:${css(t['ink-2'])}">${k}<br>${hex(v)}</figcaption></figure>`).join('');
  const page = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Palette</title></head>
<body style="margin:0;background:${css(t.paper)};color:${css(t.ink)};font:16px/1.6 system-ui">
<main style="max-width:1100px;margin:0 auto;padding:48px 24px">
<h1 style="font-size:48px;line-height:1.05;margin:0 0 8px;letter-spacing:-0.02em">The palette at work</h1>
<p style="color:${css(t['ink-2'])};max-width:60ch;margin:0 0 32px">Body copy in ink-2 on paper. <a href="#" style="color:${css(t.accent)}">A link in the accent</a>, and muted text <span style="color:${css(t.muted)}">for captions and meta</span>.</p>
<p style="display:flex;gap:12px;flex-wrap:wrap;margin:0 0 40px"><button style="font:500 16px system-ui;padding:14px 22px;border-radius:999px;border:0;background:${css(t.accent)};color:${css(t['accent-ink'])}">Primary action</button><button style="font:500 16px system-ui;padding:14px 22px;border-radius:999px;background:transparent;color:${css(t.ink)};border:1px solid ${css(t.rule)}">Secondary</button></p>
${t.field ? `<section style="background:${css(t.field)};color:${css(t['field-ink'])};padding:40px;border-radius:16px;margin-bottom:40px"><h2 style="margin:0 0 8px;font-size:32px">A field section</h2><p style="margin:0">Text on the colour field.</p></section>` : ''}
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:16px">${sw(Object.entries(t))}</div>
</main></body></html>`;
  fs.writeFileSync(opts.html, page);
  console.log(`wrote ${opts.html}`);
}
