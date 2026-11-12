#!/usr/bin/env node
// How much of a library prompt survived into the build.
// Pulls the concrete values out of the prompt (colours, fonts, durations, easings, measurements,
// Tailwind classes, media URLs) and checks which of them appear in the built files.
//
//   node fidelity.mjs <prompt.md> <built file or folder>... [--json]
//
// Media URLs are listed apart: replacing an off-subject asset is expected, so they do not count
// toward the score, but each one should be either kept or replaced on purpose.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SKILL = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const EXT = new Set(['.html', '.htm', '.css', '.scss', '.jsx', '.tsx', '.js', '.ts', '.vue', '.svelte', '.astro']);
const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', 'build', '.next', 'out', '.atelier']);

const args = process.argv.slice(2);
const json = args.includes('--json');
const [promptFile, ...targets] = args.filter((a) => !a.startsWith('--'));
if (!promptFile || !targets.length) {
  console.log('usage: node fidelity.mjs <prompt.md> <built file or folder>... [--json]');
  process.exit(0);
}

function collect(p, out = []) {
  if (!fs.existsSync(p)) { console.error(`not found: ${p}`); return out; }
  if (fs.statSync(p).isDirectory()) {
    for (const n of fs.readdirSync(p)) if (!SKIP_DIRS.has(n)) collect(path.join(p, n), out);
  } else if (EXT.has(path.extname(p).toLowerCase())) out.push(p);
  return out;
}

const promptPath = fs.existsSync(promptFile) ? promptFile : path.join(SKILL, promptFile);
const prompt = fs.readFileSync(promptPath, 'utf8');
const build = collect(targets[0]).concat(...targets.slice(1).map((t) => collect(t))).map((f) => fs.readFileSync(f, 'utf8')).join('\n');
const buildLower = build.toLowerCase();
// Leading zeros dropped on both sides, so ".2em" and "0.2em" count as the same value.
const dropZero = (s) => s.replace(/(^|[^\d.])0\.(\d)/g, '$1.$2');
const buildFlat = dropZero(buildLower.replace(/\s+/g, ''));

const uniq = (a) => [...new Set(a)];
const hex6 = (h) => {
  let x = h.slice(1).toLowerCase();
  if (x.length === 3) x = [...x].map((c) => c + c).join('');
  return '#' + x;
};
const hexIn = (h) => {
  const six = hex6(h);
  const short = six[1] === six[2] && six[3] === six[4] && six[5] === six[6] ? `#${six[1]}${six[3]}${six[5]}` : null;
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(six.slice(i, i + 2), 16));
  return buildLower.includes(six) || (short && new RegExp(`${short}(?![0-9a-f])`).test(buildLower)) ||
    buildFlat.includes(`${r},${g},${b}`) || buildFlat.includes(`${r}${g}${b}`) ||
    (six === '#ffffff' && /\bwhite\b|bg-white|text-white/.test(buildLower)) || (six === '#000000' && /\bblack\b|bg-black|text-black/.test(buildLower));
};

const toMs = (v) => (v.endsWith('ms') ? parseFloat(v) : Math.round(parseFloat(v) * 1000));
const msIn = (ms) => {
  const forms = [`${ms}ms`, `${ms / 1000}s`, `${String(ms / 1000).replace(/^0\./, '.')}s`, `duration-${ms}`, `${ms}`];
  return forms.some((f) => buildFlat.includes(f));
};

// Fonts: the catalog entry when the prompt is in the library, plus Google Fonts URLs and "font-family" lines.
const catalog = JSON.parse(fs.readFileSync(path.join(SKILL, 'library', 'catalog.json'), 'utf8'));
const rel = path.relative(SKILL, path.resolve(promptPath)).split(path.sep).join('/');
const entry = catalog.find((e) => e.path === rel);
const fonts = uniq([
  ...((entry && entry.fonts) || []),
  ...[...prompt.matchAll(/family=([^&"'\s)`:]+)/g)].map((m) => decodeURIComponent(m[1]).replace(/\+/g, ' ')),
  ...[...prompt.matchAll(/font-family\s*:\s*["']?([A-Z][\w ]+?)["',;]/g)].map((m) => m[1].trim()),
]).filter((f) => !/^(sans-serif|serif|monospace|system-ui|inherit)$/i.test(f));

const colours = uniq([...prompt.matchAll(/#[0-9a-fA-F]{6}\b|#[0-9a-fA-F]{3}\b(?![0-9a-fA-F])/g)].map((m) => hex6(m[0])));
const durations = uniq([...prompt.matchAll(/(?<![\w.#-])(\d+(?:\.\d+)?)(ms|s)\b/g)].map((m) => toMs(m[1] + m[2])).filter((ms) => ms >= 50 && ms <= 20000));
const easings = uniq([...prompt.matchAll(/cubic-bezier\(([^)]+)\)/g)].map((m) => m[1].replace(/\s+/g, '').replace(/(^|,)0\./g, '$1.')));
const measures = uniq([...prompt.matchAll(/(?<![\w.#-])(-?\d+(?:\.\d+)?)(px|rem|em|vw|svh|vh|%)(?![\w])/g)]
  .map((m) => m[1] + m[2]).filter((v) => !/^-?[01](px|%)$/.test(v) && !/^100%$/.test(v)));
const TW = /^-?(text|bg|px|py|pt|pb|pl|pr|p|mx|my|mt|mb|ml|mr|m|max-w|min-h|min-w|max-h|w|h|rounded|tracking|leading|font|backdrop-blur|blur|shadow|gap|grid-cols|z|opacity|from|via|to|border|inset|top|bottom|left|right|space-[xy]|ring|scale|translate-[xy]|duration|delay|ease|object|aspect)(-[\w./[\]#%:()-]+)?$/;
const tailwind = uniq([...prompt.matchAll(/(?:^|[\s`'",(])((?:[a-z]{2,4}:)*-?[a-z][\w-]*(?:-\[[^\]\s]+\]|-[\w./]+)?)(?=[\s`'",.;)]|$)/gm)]
  .map((m) => m[1].replace(/[.,:;]+$/, '')).filter((c) => TW.test(c.replace(/^(?:[a-z]{2,4}:)+/, '')) && /-/.test(c) && !/^(text|font)-(based|family|size|weight|color|style)$/.test(c)));
const usesTailwind = /tailwind/i.test(build);
const media = uniq([...prompt.matchAll(/https?:\/\/[^\s"'`)<>]+?\.(mp4|webm|mov|m3u8|png|jpe?g|webp|avif|gif|glb|gltf|svg)(\?[^\s"'`)<>]*)?(?=[\s"'`)<>]|$)/gi)].map((m) => m[0]));

const checks = [
  ['fonts', fonts, (f) => buildLower.includes(f.toLowerCase()) || buildLower.includes(f.toLowerCase().replace(/ /g, '+'))],
  ['colours', colours, hexIn],
  ['durations', durations, msIn],
  ['easings', easings, (e) => buildFlat.replace(/(^|[,(])0\./g, '$1.').includes(e)],
  ['measures', measures, (v) => { const x = dropZero(v.toLowerCase()); return buildFlat.includes(x) || buildFlat.includes(`[${x.replace(/^-/, '')}]`); }],
  ...(usesTailwind ? [['tailwind', tailwind, (c) => new RegExp(`(^|[\\s"'\`:])${c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?=[\\s"'\`]|$)`, 'm').test(build)]] : []),
];

let found = 0, total = 0;
const report = {};
for (const [name, values, test] of checks) {
  const missing = values.filter((v) => !test(v));
  report[name] = { total: values.length, kept: values.length - missing.length, missing };
  found += values.length - missing.length;
  total += values.length;
}
const mediaReport = media.map((u) => ({ url: u, kept: build.includes(u) || build.includes(u.split('?')[0]) }));
const score = total ? Math.round((found / total) * 100) : 100;

if (json) {
  console.log(JSON.stringify({ prompt: rel, score, found, total, ...report, media: mediaReport, tailwindChecked: usesTailwind }, null, 1));
  process.exit(0);
}
console.log(`Fidelity to ${rel}: ${score}% (${found}/${total} concrete values)\n`);
for (const [name, r] of Object.entries(report)) {
  if (!r.total) continue;
  console.log(`${name.padEnd(10)} ${r.kept}/${r.total}${r.missing.length ? `   missing: ${r.missing.slice(0, 12).join(', ')}${r.missing.length > 12 ? ` (+${r.missing.length - 12})` : ''}` : ''}`);
}
if (!usesTailwind && tailwind.length) console.log(`tailwind   not checked (the build does not use Tailwind; ${tailwind.length} classes should map to the same values)`);
if (mediaReport.length) {
  console.log('\nmedia (not scored: keep it, or replace it with a real asset of the same mood and say so)');
  for (const m of mediaReport) console.log(`  ${m.kept ? 'kept    ' : 'replaced'} ${m.url.length > 110 ? m.url.slice(0, 107) + '…' : m.url}`);
}
console.log(`\n${score >= 85 ? 'Faithful.' : 'Below 85%: each missing value is either restored, or a change you can name a reason for (the user asked, the Baseline needed it, the stack changed).'}`);
