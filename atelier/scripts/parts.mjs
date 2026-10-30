#!/usr/bin/env node
// Find and print reusable sections of the library prompts: a nav, a hero, a pricing block,
// a video background recipe, a motion spec, a footer… taken from proven builds.
//
//   node parts.mjs hero "dark cinematic glass"            list matching hero sections
//   node parts.mjs nav --mood editorial --limit 5
//   node parts.mjs background "video" --theme dark --print 2    print the top 2 in full
//   node parts.mjs --show "saas/agent-grove#3"            print one part by id
//   node parts.mjs --types                                part types and counts
//
// Types: hero nav footer cta pricing testimonials faq stats features gallery logos
//        background type color motion responsive

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SKILL = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const catalog = JSON.parse(fs.readFileSync(path.join(SKILL, 'library', 'catalog.json'), 'utf8')).filter((e) => e.type === 'prompt');

const args = process.argv.slice(2);
const opts = { limit: 8 };
const words = [];
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '--types' || a === '--json') opts[a.slice(2)] = true;
  else if (a.startsWith('--')) opts[a.slice(2)] = args[++i];
  else words.push(a);
}

const all = catalog.flatMap((e) => e.parts.map((p, i) => ({ ...p, id: `${e.id}#${i + 1}`, prompt: e })));

function text(part) {
  const lines = fs.readFileSync(path.join(SKILL, part.prompt.path), 'utf8').replace(/\r\n/g, '\n').split('\n');
  return lines.slice(part.from - 1, part.to).join('\n').trim();
}

// The prompt's global context a part depends on: its fonts and colour lines.
function context(e) {
  const roles = e.fontRoles ? `fonts: ${e.fontRoles.display}${e.fontRoles.body !== e.fontRoles.display ? ` (display) + ${e.fontRoles.body} (body)` : ''}` : '';
  return [`from: ${e.title} (${e.path})`, `theme: ${e.theme}`, e.moods.length ? `moods: ${e.moods.join(', ')}` : '', roles].filter(Boolean).join(' · ');
}

if (opts.types) {
  const c = {};
  for (const p of all) c[p.type] = (c[p.type] || 0) + 1;
  console.log(Object.entries(c).sort((a, b) => b[1] - a[1]).map(([t, n]) => `${t.padEnd(13)} ${n}`).join('\n'));
  console.log(`\n${all.length} parts from ${catalog.filter((e) => e.parts.length).length} prompts.`);
  process.exit(0);
}

if (opts.show) {
  const p = all.find((x) => x.id === opts.show);
  if (!p) { console.log(`No part "${opts.show}". Ids look like "saas/agent-grove#3".`); process.exit(1); }
  console.log(`${context(p.prompt)}\n\n${text(p)}`);
  process.exit(0);
}

const TYPES = new Set(all.map((p) => p.type));
let type = null;
if (words.length && TYPES.has(words[0])) type = words.shift();
if (!type && !words.length && !opts.mood && !opts.theme) {
  console.log(`usage: node parts.mjs <type> ["words"] [--mood m] [--theme dark|light] [--stack s] [--limit 8] [--print n] [--json]
       node parts.mjs --show "<prompt-id>#<n>"     node parts.mjs --types
types: ${[...TYPES].sort().join(', ')}
moods: editorial, luxury, playful, minimal, brutalist, organic, futuristic, cinematic, retro, techy, bold, corporate`);
  process.exit(0);
}

const terms = words.join(' ').toLowerCase().split(/[\s,]+/).filter((t) => t.length > 1);

function score(p) {
  const e = p.prompt;
  const hay = [
    [p.heading.toLowerCase(), 3], [e.title.toLowerCase(), 2], [e.category, 3], [e.moods.join(' '), 3],
    [e.features.join(' '), 2], [e.theme, 2], [e.summary.toLowerCase(), 1], [(e.fonts || []).join(' ').toLowerCase(), 1],
  ];
  let s = 0;
  for (const t of terms) {
    let best = 0;
    for (const [v, w] of hay) if (v.includes(t)) best = Math.max(best, w);
    s += best;
  }
  // Prefer substantial, self-contained parts.
  return s + Math.min(p.chars, 2500) / 2500;
}

let list = all.filter((p) =>
  (!type || p.type === type) &&
  (!opts.mood || p.prompt.moods.includes(opts.mood)) &&
  (!opts.theme || p.prompt.theme === opts.theme || p.prompt.theme === 'mixed') &&
  (!opts.stack || p.prompt.stack.includes(opts.stack)));
list = list.map((p) => ({ p, s: score(p) })).filter((x) => !terms.length || x.s > 1).sort((a, b) => b.s - a.s);

const n = Number(opts.print) || 0;
const shown = list.slice(0, Math.max(Number(opts.limit), n));

if (opts.json) {
  console.log(JSON.stringify(shown.map(({ p, s }) => ({ id: p.id, type: p.type, heading: p.heading, score: +s.toFixed(2), chars: p.chars, prompt: p.prompt.path, theme: p.prompt.theme, moods: p.prompt.moods })), null, 1));
  process.exit(0);
}
if (!shown.length) {
  console.log('No parts match. Drop a word or a filter, or try another type (--types).');
  process.exit(0);
}
if (n) {
  for (const { p } of shown.slice(0, n)) console.log(`──── ${p.id} · ${p.type} · ${p.heading}\n${context(p.prompt)}\n\n${text(p)}\n`);
  console.log('Adapt it: keep the structure, measurements and effect; replace content, brand and colours with this project\'s tokens.');
} else {
  for (const { p } of shown) {
    console.log(`${p.id.padEnd(42)} ${p.type.padEnd(11)} ${p.heading.slice(0, 48).padEnd(48)} ${p.prompt.theme.padEnd(5)} ${p.prompt.moods.slice(0, 3).join(',')}`);
  }
  console.log(`\nPrint one: node parts.mjs --show "<id>"   or the top ones: add --print 2`);
}
