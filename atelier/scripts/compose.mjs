#!/usr/bin/env node
// Deal a page structure so consecutive builds do not converge on the same skeleton.
// It picks a page shape, hero, nav, footer and, for every section, a composition and a way
// to open it, never repeating neighbours, rationing the overused moves, steering away from
// the structures dealt recently, and pointing at library parts that can build each one.
//
//   node compose.mjs --sections "hero, how it works, product, pricing, team, faq, cta"
//   node compose.mjs --sections "hero, features, pricing, faq, cta" --mood minimal --theme dark
//   node compose.mjs --sections "..." --seed 42          reproducible deal
//   node compose.mjs --sections "..." --reroll           a different deal, same rules
//
// History lives in ~/.atelier/history.json (last 12 deals); --no-history ignores it.
// The deal is a starting point: take it, or swap one pick and say why. Never swap back to a default.

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SKILL = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const opts = {};
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (['--reroll', '--no-history', '--json'].includes(a)) opts[a.slice(2)] = true;
  else if (a.startsWith('--')) opts[a.slice(2)] = args[++i];
}
if (!opts.sections) {
  console.log(`usage: node compose.mjs --sections "hero, how it works, pricing, faq, cta" [--mood m] [--theme dark|light] [--seed n] [--reroll] [--no-history] [--json]`);
  process.exit(0);
}

// ---------- vocabulary ----------

const PAGE_SHAPES = [
  ['Long document', 'reads like a memo or field report: one narrow column, inline heads, figures set into the text'],
  ['Marquee hero', 'one statement or visual owns the first screen, then the page turns into a dense list or index'],
  ['Workbench', 'the product at work is the content: a guided tour of screens or code with short captions'],
  ['Manifesto', 'polemical type at poster scale; the argument comes before the offer'],
  ['Photographic', 'one huge image per screen, text as annotation in the margins'],
  ['Catalogue', 'a uniform grid of variations of one thing, the offer at the end'],
  ['Index-first', 'the page is a list: every section is a row you can open'],
  ['Narrative timeline', 'the page follows time: minute by minute, day by day, step by step down the scroll'],
  ['Split studio', 'the screen stays divided: a fixed pane on one side, the story scrolling on the other'],
  ['Feature stack', 'a sticky heading pane while captures change beside it, paced like film'],
  ['Specimen', 'the type or the material is the design; sections are specimens of it'],
  ['Map or diagram', 'one large spatial drawing organises the page; sections are places on it'],
  ['Conversational', 'questions and answers carry the whole page, like an honest interview'],
  ['Object', 'the page is one object seen at life scale (a ticket, a manual, a box, a receipt, a dashboard) and scrolls through its parts'],
  ['Bento', 'modular tiles of different sizes; rhythm from size, one tile clearly the lead'],
  ['Horizontal chapters', 'the middle of the page moves sideways in chapters, framed by a vertical intro and close'],
];

const HEROES = [
  ['Type poster', 'no picture: the headline set huge across the full width, the action small and precise beneath'],
  ['Full-bleed media', 'photo, video or canvas edge to edge; the text sits on its calmest corner'],
  ['Interactive canvas', 'the first screen is something to touch: a live simulation, a draggable object, a running counter'],
  ['Product at life scale', 'the product (screen, object, code) large and off-centre, cropped by the edge, with a short head'],
  ['Split screen', 'two halves with different jobs (claim and proof, before and after, text and live demo)'],
  ['Ledger', 'the hero is a list or table of real facts, the head small above it'],
  ['Grounded', 'a tall field or image above, the headline resting at the bottom edge'],
  ['Column', 'one narrow centred column, the head larger than usual, lots of air'],
  ['Action-first', 'the working action is the visual: the form, the picker, the install command, the calculator'],
];

const NAVS = [
  ['Four corners', 'logo, links and action pinned to the four corners of the first screen'],
  ['Floating pill', 'a small pill floating at the top centre, opening into the menu'],
  ['Edge rail', 'a thin vertical rail on the left with the logo and section dots'],
  ['Bottom dock', 'a dock at the bottom of the viewport with the main links and the action'],
  ['Masthead', 'a large centred wordmark over a rule, links beneath'],
  ['Menu only', 'the logo and one menu button; the links live in a full-screen overlay'],
  ['Edge-aligned', 'wordmark left, one action right, nothing in between'],
  ['Ticker bar', 'a thin top bar with live status or the next date, the nav beneath it'],
];

const FOOTERS = [
  ['Statement', 'one closing sentence set large, links small beneath it'],
  ['Colophon', 'credits, address and links written as one paragraph'],
  ['Index', 'a dense sitemap in columns with real destinations'],
  ['Letter close', 'a sign-off, a name and a date, like the end of a letter'],
  ['Single line', 'one line under a hairline: logo, two links, legal'],
  ['Contact card', 'the footer is a card: how to reach a person, hours, place'],
  ['Continuation', 'the last section simply ends; the links sit in its margin'],
  ['Giant wordmark', 'the name set edge to edge (overused: rarely)'],
];

const OPENINGS = [
  ['Head left, line right', 'the usual split head block (overused: once per page at most)'],
  ['No head', 'the content names itself; air above it'],
  ['Head inside the content', 'the title sits inside the table, image or card it introduces'],
  ['Centred statement', 'one sentence centred at section size, nothing else'],
  ['Big index numeral', 'a real number at graphic scale beside a short head'],
  ['Sticky side label', 'a small label that stays in the margin while the section scrolls'],
  ['Lead-in sentence', 'the first sentence of the body set heavier, no separate head'],
  ['Caption below', 'the content first, a caption under it does the naming'],
  ['Overlap', 'the head overlaps the edge of an image or a band'],
  ['Running header', 'a thin rule with the section name at the top edge, like a book'],
  ['Huge head, nothing else', 'the head at display size fills the width, the body starts on the next screen'],
];

// Compositions that suit each kind of section. Names follow references/foundations/layout.md § 5.
const COMPOSITIONS = {
  steps: ['Pinned', 'Narrative timeline', 'Rail', 'Steps', 'Showcase', 'Horizontal chapter', 'Diagram'],
  product: ['Showcase', 'Pinned', 'Switcher', 'Interactive demo', 'Workbench tour', 'Split', 'Diagram'],
  features: ['Bento', 'Switcher', 'Rows', 'Pinned', 'Index', 'Showcase', 'Asymmetric collage'],
  pricing: ['Table', 'Offer', 'Switcher', 'Rows', 'Calculator', 'Uneven grid'],
  proof: ['Figures', 'Statement', 'Table', 'Ledger', 'Chart'],
  team: ['Statement', 'Letter', 'Index', 'Caption and portrait', 'Rows'],
  faq: ['Rows', 'Conversational', 'Two-column index', 'Accordion', 'Search-first'],
  cta: ['Band', 'Form', 'Statement', 'Type poster', 'Action-first'],
  gallery: ['Rail', 'Asymmetric collage', 'Grid', 'Photographic', 'Catalogue'],
  specs: ['Table', 'Diagram', 'Rows', 'Exploded object', 'Specimen'],
  story: ['Long document', 'Statement', 'Narrative timeline', 'Split', 'Photographic'],
  schedule: ['Schedule', 'Index', 'Table', 'Rail'],
  other: ['Split', 'Showcase', 'Rows', 'Statement', 'Bento', 'Rail', 'Grid', 'Switcher'],
};

const KIND_OF = [
  [/how|step|process|work(s|flow)|journey|timeline/i, 'steps'],
  [/pric|plan|tier|cost|billing|\bpay\b|per (ms|millisecond|second|hour)|usage/i, 'pricing'],
  [/faq|question/i, 'faq'],
  [/proof|stat|number|metric|result|pilot|benchmark|cold start|latency|speed|performance/i, 'proof'],
  [/\bcta\b|call to action|get started|start building|sign ?up|request|contact|book|subscribe|form|final/i, 'cta'],
  [/team|founder|about|who|people|behind/i, 'team'],
  [/spec|hardware|sensor|device|gpu|region|tech/i, 'specs'],
  [/gallery|work|portfolio|showcase|lookbook|photos/i, 'gallery'],
  [/feature|benefit|why|capabil|built for/i, 'features'],
  [/product|demo|code|app|screen|alert|map|dashboard|scale/i, 'product'],
  [/story|mission|manifesto|letter|origin/i, 'story'],
  [/schedule|calendar|dates|events|lineup|menu/i, 'schedule'],
];

// ---------- random ----------

let seed = opts.seed != null ? Number(opts.seed) : Math.floor(Math.random() * 1e9);
if (opts.reroll && opts.seed != null) seed += 7919;
const rnd = () => { seed = (seed * 1664525 + 1013904223) % 4294967296; return seed / 4294967296; };
const startSeed = seed;

// History: recent picks get down-weighted.
const HIST_FILE = path.join(os.homedir(), '.atelier', 'history.json');
let history = [];
if (!opts['no-history']) { try { history = JSON.parse(fs.readFileSync(HIST_FILE, 'utf8')); } catch { history = []; } }
const recent = (key) => history.slice(-6).map((h) => h[key]).flat();

function pick(list, { avoid = [], weight = () => 1 } = {}) {
  const items = list.map((x) => {
    const name = Array.isArray(x) ? x[0] : x;
    let w = weight(name);
    if (avoid.includes(name)) w *= 0.15;
    return { x, w };
  });
  const total = items.reduce((s, i) => s + i.w, 0);
  let r = rnd() * total;
  for (const i of items) { r -= i.w; if (r <= 0) return i.x; }
  return items[items.length - 1].x;
}

// ---------- library parts ----------

const catalog = JSON.parse(fs.readFileSync(path.join(SKILL, 'library', 'catalog.json'), 'utf8')).filter((e) => e.type === 'prompt');
const allParts = catalog.flatMap((e) => e.parts.map((p, i) => ({ ...p, id: `${e.id}#${i + 1}`, e })));
const PART_FOR = { steps: ['hero', 'gallery', 'motion'], product: ['gallery', 'background', 'hero'], features: ['gallery', 'features'], pricing: ['pricing', 'gallery', 'cta'],
  proof: ['stats', 'gallery'], team: ['testimonials', 'gallery'], faq: ['faq', 'gallery'], cta: ['cta', 'footer'], gallery: ['gallery', 'logos'], specs: ['gallery', 'stats'],
  story: ['hero', 'gallery'], schedule: ['gallery'], other: ['gallery', 'hero'] };

// Whole library prompts built for a section of this kind (a pricing page, a FAQ, a footer…).
const SECTION_CATS = { pricing: ['pricing'], faq: ['faq'], cta: ['cta', 'form'], team: ['testimonial'], proof: ['testimonial', 'layout'],
  features: ['layout', 'card'], product: ['dashboard', 'layout', 'animation'], gallery: ['carousel', 'portfolio', 'layout'], steps: ['layout', 'animation'],
  specs: ['table', 'layout'], story: ['layout'], schedule: ['table'], other: ['layout'] };
function promptsFor(kind, n = 2) {
  let pool = catalog.filter((e) => (SECTION_CATS[kind] || []).includes(e.category));
  if (opts.mood) { const m = pool.filter((e) => e.moods.includes(opts.mood)); if (m.length >= 3) pool = m; }
  if (opts.theme) { const t = pool.filter((e) => e.theme === opts.theme || e.theme === 'mixed'); if (t.length >= 3) pool = t; }
  const out = [];
  for (let i = 0; i < n && pool.length; i++) out.push(pool.splice(Math.floor(rnd() * pool.length), 1)[0].path);
  return out;
}

function partsFor(kind, n = 2) {
  const types = PART_FOR[kind] || ['gallery'];
  let pool = allParts.filter((p) => types.includes(p.type));
  // Parts cut from prompts built for this kind of section come first.
  const same = allParts.filter((p) => (SECTION_CATS[kind] || []).includes(p.e.category) && p.type !== 'responsive' && p.type !== 'type');
  if (same.length >= 4) pool = same;
  if (opts.mood) { const m = pool.filter((p) => p.e.moods.includes(opts.mood)); if (m.length >= 4) pool = m; }
  if (opts.theme) { const t = pool.filter((p) => p.e.theme === opts.theme || p.e.theme === 'mixed'); if (t.length >= 4) pool = t; }
  pool = pool.filter((p) => p.chars > 400);
  const out = [];
  for (let i = 0; i < n && pool.length; i++) out.push(pool.splice(Math.floor(rnd() * pool.length), 1)[0].id);
  return out;
}

// ---------- deal ----------

const sections = opts.sections.split(',').map((s) => s.trim()).filter(Boolean);
const deal = {
  seed: startSeed,
  page: pick(PAGE_SHAPES, { avoid: recent('page') }),
  hero: pick(HEROES, { avoid: recent('hero') }),
  nav: pick(NAVS, { avoid: recent('nav') }),
  footer: pick(FOOTERS, { avoid: recent('footer'), weight: (n) => (n === 'Giant wordmark' ? 0.1 : 1) }),
  sections: [],
};

let prevComp = null, prevOpen = null, splitHeads = 0;
const usedComps = new Set();
for (const name of sections) {
  if (/^hero$/i.test(name) || /^nav/i.test(name) || /^footer$/i.test(name)) continue;
  const kind = (KIND_OF.find(([re]) => re.test(name)) || [null, 'other'])[1];
  const comp = pick(COMPOSITIONS[kind], { weight: (c) => (c === prevComp ? 0 : usedComps.has(c) ? 0.25 : 1), avoid: recent('comps') });
  usedComps.add(comp);
  const opening = pick(OPENINGS, {
    weight: (o) => (o === prevOpen ? 0 : o === 'Head left, line right' ? (splitHeads ? 0 : 0.35) : 1),
    avoid: recent('openings'),
  });
  if (opening[0] === 'Head left, line right') splitHeads++;
  deal.sections.push({ name, kind, composition: comp, opening, parts: partsFor(kind), prompts: promptsFor(kind) });
  prevComp = comp; prevOpen = opening[0];
}

if (!opts['no-history']) {
  history.push({ at: new Date().toISOString(), page: deal.page[0], hero: deal.hero[0], nav: deal.nav[0], footer: deal.footer[0],
    comps: deal.sections.map((s) => s.composition), openings: deal.sections.map((s) => s.opening[0]) });
  try { fs.mkdirSync(path.dirname(HIST_FILE), { recursive: true }); fs.writeFileSync(HIST_FILE, JSON.stringify(history.slice(-12), null, 1)); } catch { /* read-only home: skip */ }
}

if (opts.json) { console.log(JSON.stringify(deal, null, 1)); process.exit(0); }

console.log(`STRUCTURE DEAL (seed ${deal.seed})\n`);
console.log(`Page shape   ${deal.page[0]}: ${deal.page[1]}`);
console.log(`Hero         ${deal.hero[0]}: ${deal.hero[1]}`);
console.log(`Nav          ${deal.nav[0]}: ${deal.nav[1]}`);
console.log(`Footer       ${deal.footer[0]}: ${deal.footer[1]}\n`);
for (const s of deal.sections) {
  console.log(`${s.name}  [${s.kind}]`);
  console.log(`  composition  ${s.composition}`);
  console.log(`  opening      ${s.opening[0]}: ${s.opening[1]}`);
  if (s.parts.length) console.log(`  parts        ${s.parts.join('   ')}`);
  if (s.prompts.length) console.log(`  whole        ${s.prompts.join('   ')}`);
}
console.log(`\nRead the page shape as the concept's form, not a template: let the concept's world decide how each pick looks.
Swap at most two picks, each for a reason the content gives; never swap back to "head left, line right" or a giant-wordmark footer.
Inspect a part: node scripts/parts.mjs --show "<id>". Another deal: --reroll.`);
