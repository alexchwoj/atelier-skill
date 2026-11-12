#!/usr/bin/env node
// Search the prompt and design libraries.
// node find.mjs "<words>" [--type prompt|design] [--kind hero] [--theme dark] [--stack react] [--limit 8] [--json]

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SKILL = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const catalog = JSON.parse(fs.readFileSync(path.join(SKILL, 'library', 'catalog.json'), 'utf8'));

const args = process.argv.slice(2);
const opts = { limit: 8 };
const words = [];
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '--json') opts.json = true;
  else if (a.startsWith('--')) opts[a.slice(2)] = args[++i];
  else words.push(a);
}

if (opts.help !== undefined || (!words.length && !opts.type && !opts.kind && !opts.theme && !opts.stack && !opts.mood)) {
  console.log(`usage: node find.mjs "<words>" [--type prompt|design|style] [--kind hero|landing|section|component|navbar|footer|auth|dashboard|mobile|background|animation|layout|style|workflow|page]
                    [--theme dark|light] [--mood editorial|luxury|playful|minimal|brutalist|organic|futuristic|cinematic|retro|techy|bold|corporate]
                    [--stack react|tailwind|html-only|three|gsap|framer-motion] [--limit 8] [--json]

prompts: ${catalog.filter((e) => e.type === 'prompt').length}, designs: ${catalog.filter((e) => e.type === 'design').length}, style guides: ${catalog.filter((e) => e.type === 'style').length}`);
  process.exit(0);
}

// Light synonym expansion so vibe words find their tags.
const SYNONYMS = {
  video: ['video-bg'], glassmorphism: ['glass'], frosted: ['glass'], webgl: ['three', '3d', 'shader'],
  threejs: ['three'], animation: ['scroll-anim', 'framer-motion', 'gsap'], animated: ['scroll-anim', 'framer-motion'],
  scroll: ['scroll-anim'], landing: ['landing'], site: ['landing'], website: ['landing'], login: ['auth'], signin: ['auth'],
  signup: ['auth', 'form'], dashboard: ['dashboard-mock', 'analytics', 'saas'], ai: ['ai', 'llm'], crypto: ['fintech', 'crypto'],
  bank: ['fintech', 'finance'], payments: ['fintech', 'stripe'], shop: ['ecommerce', 'e-commerce', 'retail'], store: ['ecommerce', 'retail'],
  dev: ['developer', 'devops'], developer: ['developer', 'devops', 'ide'], minimal: ['minimal', 'clean'], flowers: ['organic', 'botanical', 'nature'], food: ['organic', 'restaurant', 'coffee'], fashion: ['luxury', 'editorial'], warm: ['organic', 'editorial'], car: ['automotive', 'automative'],
  cars: ['automotive', 'automative'], luxury: ['luxury', 'premium'], editorial: ['editorial', 'magazine'],
};

const norm = (s) => String(s).toLowerCase();
const terms = words.join(' ').toLowerCase().split(/[\s,]+/).filter((t) => t.length > 1);

function score(e) {
  const fields = [
    [e.title, 5], [e.category, 4], [e.kind || '', 4], [(e.moods || []).join(' '), 4], [(e.tags || []).join(' '), 3], [(e.features || []).join(' '), 3],
    [(e.stack || []).join(' '), 2], [e.theme, 2], [(e.fonts || []).join(' '), 1], [e.summary, 1.5],
  ].map(([v, w]) => [norm(v), w]);
  let s = 0;
  for (const t of terms) {
    let best = 0;
    for (const variant of [t, ...(SYNONYMS[t] || [])]) {
      for (const [v, w] of fields) if (v.includes(variant)) best = Math.max(best, w * (variant === t ? 1 : 0.7));
    }
    s += best;
  }
  return s;
}

// The kind of thing the words ask for, when no --kind is given: "landing" should not rank a contact
// form or a receipt email above real landings just because they share mood words.
const IMPLIED = [
  [/\b(landing|homepage|home page|website|site|one-?pager)\b/, ['landing', 'hero', 'page']],
  [/\bhero\b|first screen|above the fold/, ['hero', 'landing']],
  [/\b(pricing|faq|testimonials?|cta|features?|blog)\b/, ['section', 'landing']],
  [/\b(button|card|modal|table|input|form|carousel|chat)\b/, ['component', 'section']],
  [/\b(login|sign[- ]?in|sign[- ]?up|auth)\b/, ['auth']],
  [/\bdashboard\b|admin panel/, ['dashboard']],
  [/\bfooter\b/, ['footer']],
  [/\b(navbar|nav|navigation|menu)\b/, ['navbar']],
];
const query = terms.join(' ');
const wantKinds = opts.kind ? null : [...new Set(IMPLIED.filter(([re]) => re.test(query)).flatMap(([, k]) => k))];
const OFF_TOPIC = /\b(e-?mail|receipt|newsletter|slide|deck|presentation|print|invoice)\b/;

function quality(e) {
  if (e.type !== 'prompt') return 0;
  let q = (e.spec || 0);
  if ((e.deco || 0) > 0.4) q -= Math.min(4, e.deco * 3); // leans on decorative numbering
  if (wantKinds && wantKinds.length) q += wantKinds.includes(e.kind) ? 3 : -4;
  if (e.media && (!wantKinds || wantKinds.some((k) => k === 'hero' || k === 'landing'))) q += 1;
  if (!OFF_TOPIC.test(query) && OFF_TOPIC.test(`${e.title} ${e.category}`.toLowerCase())) q -= 5;
  return q;
}

let rows = catalog.filter((e) =>
  (!opts.type || e.type === opts.type) &&
  (!opts.kind || e.kind === opts.kind) &&
  (!opts.theme || e.theme === opts.theme || e.theme === 'mixed') &&
  (!opts.mood || (e.moods || []).includes(opts.mood)) &&
  (!opts.stack || (e.stack || []).includes(opts.stack)));

rows = rows.map((e) => ({ e, s: terms.length ? score(e) : 1 })).filter((r) => r.s > 0).map((r) => ({ e: r.e, s: r.s + quality(r.e) }));
rows.sort((a, b) => b.s - a.s || a.e.kb - b.e.kb);
rows = rows.slice(0, Number(opts.limit) || 8);

if (opts.json) {
  console.log(JSON.stringify(rows.map((r) => ({ score: r.s, ...r.e })), null, 1));
  process.exit(0);
}
if (!rows.length) {
  console.log('No matches. Try fewer or broader words, drop a filter, or grep library/*/INDEX.md.');
  process.exit(0);
}
for (const { e, s } of rows) {
  const meta = e.type === 'prompt'
    ? [e.kind, e.theme, (e.moods || []).join(' '), e.stack.join('+'), e.features.join(', ')].filter(Boolean).join(' | ')
    : e.type === 'style'
      ? [e.category, e.kind].join(' | ')
      : [e.category, e.theme, e.primary && `primary ${e.primary}`, e.canvas && `canvas ${e.canvas}`, (e.fonts || []).join(', ')].filter(Boolean).join(' | ');
  const design = e.design ? `\n  design system of this build: ${e.design}` : '';
  console.log(`${e.type.toUpperCase()}  ${e.title}  (${s.toFixed(1)})\n  ${e.path}  [${e.kb} KB]${design}\n  ${meta}\n  ${e.summary}\n`);
}
