#!/usr/bin/env node
// Regenerates the derived files in atelier/library/. Run after adding or editing
// prompts or designs: `node tools/build-library.mjs`.
//
//   atelier/library/prompts/*/*.md + index.json  -> prompts/INDEX.md, catalog.json
//   atelier/library/designs/*/*.md + index.json  -> designs/INDEX.md, catalog.json
//   data/photos.json      free photo library     -> photos.json
//   data/font-index.json  Google Fonts metrics   -> fonts.json
// The prompt and design files are the sources and are never rewritten.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SKILL = path.join(ROOT, 'atelier');
const LIB = path.join(SKILL, 'library');
const SRC_PROMPTS = path.join(LIB, 'prompts');
const SRC_DESIGNS = path.join(LIB, 'designs');
const SRC_DATA = path.join(ROOT, 'data');

const posix = (p) => p.split(path.sep).join('/');
const read = (p) => fs.readFileSync(p, 'utf8').replace(/\r\n/g, '\n');

function walk(dir, ext) {
  const out = [];
  for (const name of fs.readdirSync(dir)) {
    if (name.startsWith('_') || name.startsWith('.')) continue;
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) out.push(...walk(p, ext));
    else if (name.endsWith(ext)) out.push(p);
  }
  return out.sort();
}

function copy(src, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

const titleCase = (s) => s.replace(/[-_]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

function titlesFrom(indexFile, prefix) {
  return new Map([...indexFrom(indexFile, prefix)].map(([k, e]) => [k, e.title]));
}

// The whole index entry per file: title, plus description and tags when the source gave them.
function indexFrom(indexFile, prefix) {
  if (!fs.existsSync(indexFile)) return new Map();
  return new Map(JSON.parse(read(indexFile)).map((e) => [posix(e.file).replace(prefix, ''), e]));
}

function summaryOf(text) {
  const clean = text
    .replace(/^---\n[\s\S]*?\n---/, ' ')
    .replace(/^\s*(-{3,}|\*{3,})\s*$/gm, ' ')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/^#+\s.*$/gm, ' ')
    .replace(/^(create exactly one file|do not create).*$/gim, ' ')
    .replace(/^prompt:\s*/i, '')
    .replace(/[*_`>#]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  const first = clean.match(/^(.{40,320}?[.!?])(\s|$)/);
  const s = first ? first[1] : clean.slice(0, 260);
  return s.length > 280 ? s.slice(0, 277) + '…' : s;
}

// ---------- prompts ----------

// Tag rules: [tag, regex tested against the prompt's text]
const STACK = [
  ['react', /\breact\b/i],
  ['nextjs', /\bnext\.?js\b|app router/i],
  ['vite', /\bvite\b/i],
  ['typescript', /\btypescript\b|\.tsx\b/i],
  ['tailwind', /\btailwind/i],
  ['html-only', /single[,\s-]+(self-contained\s+)?(file|index\.html)|exactly one file|no frameworks?|vanilla (js|javascript)/i],
  ['framer-motion', /framer[- ]motion|\bmotion\/react\b|from ['"]motion['"]/i],
  ['gsap', /\bgsap\b|scrolltrigger/i],
  ['three', /three\.js|\bthree\b.*fiber|@react-three|\br3f\b|webgl/i],
  ['lenis', /\blenis\b/i],
  ['shadcn', /shadcn/i],
  ['lucide', /lucide/i],
];

const FEATURES = [
  ['video-bg', /background video|\.mp4|<video|video background|hls|\.m3u8/i],
  ['glass', /glass(morphism)?|backdrop-filter|backdrop-blur/i],
  ['3d', /\b3d\b|three\.js|spline|webgl/i],
  ['shader', /shader|glsl|fragment/i],
  ['scroll-anim', /scroll[- ]?(trigger|driven|linked|reveal|animation)|on scroll|useScroll|parallax/i],
  ['marquee', /marquee|infinite (scroll|loop)|ticker/i],
  ['canvas', /<canvas|canvas api|particles?/i],
  ['grain', /\bgrain|noise texture|film grain/i],
  ['gradient', /gradient/i],
  ['cursor', /custom cursor|cursor follower/i],
  ['typewriter', /typewriter|typing (effect|animation)/i],
  ['bento', /bento/i],
  ['pricing', /pricing|price tier|plans?\b.*\/mo/i],
  ['testimonials', /testimonial/i],
  ['faq', /\bfaq\b|accordion/i],
  ['form', /<form|email input|input field|newsletter|sign[- ]?up form/i],
  ['dashboard-mock', /dashboard (mock|preview|ui)|app mockup/i],
];

const KIND_BY_CATEGORY = {
  hero: 'hero', 'hero-section': 'hero', 'ai-hero': 'hero', 'crypto-hero': 'hero',
  navbar: 'navbar', footer: 'footer', '404': '404', 'login-page': 'auth', 'sign-in': 'auth',
  authentication: 'auth', 'contact-us': 'contact', onboarding: 'onboarding', waitlist: 'waitlist',
  'landing-page': 'landing', website: 'landing', dashboard: 'dashboard', apps: 'page',
  pricing: 'section', testimonial: 'section', faq: 'section', cta: 'section',
  button: 'component', card: 'component', form: 'component', modal: 'component', table: 'component',
  carousel: 'component', chat: 'component', background: 'background', animation: 'animation',
  'mobile-app': 'mobile', presentation: 'print', print: 'print', skill: 'workflow', layout: 'layout',
  style: 'style', portfolio: 'landing', ecommerce: 'landing', misc: 'page', blog: 'section',
};

function promptKind(cat, text) {
  if (KIND_BY_CATEGORY[cat]) return KIND_BY_CATEGORY[cat];
  const head = text.slice(0, 600).toLowerCase();
  if (/\bfooter\b/.test(head) && !/hero/.test(head)) return 'footer';
  if (/landing page|full (website|site|page)|multi-section|sections?:/.test(head)) return 'landing';
  if (/\bhero\b/.test(head)) return 'hero';
  return 'page';
}

// Light or dark from the page's own background when the prompt declares one; otherwise from the
// colour words and hex values, skipping lines that only set text colour (a navy ink is not a dark page).
function promptTheme(text) {
  const t = text.toLowerCase();
  const page = [
    ...t.matchAll(/(?:^|[\s{,])(?:body|html|:root|main)\s*\{[^}]*?background(?:-color)?\s*:\s*(#[0-9a-f]{6}|#[0-9a-f]{3})\b/g),
    ...t.matchAll(/^[\s>*-]*\**\s*(?:page |site |base |main |overall |hero )?(?:background|canvas|bg)(?: colou?r)?\**\s*[:=-][^\n#]{0,60}(#[0-9a-f]{6}|#[0-9a-f]{3})\b/gm),
    ...t.matchAll(/--(?:bg|background|paper|canvas|page)(?:-[\w-]*)?\s*:\s*(#[0-9a-f]{6}|#[0-9a-f]{3})\b/g),
  ].map((m) => luminance(m[1])).filter((l) => l !== null);
  if (page.length) {
    const darkVotes = page.filter((l) => l < 0.35).length;
    if (darkVotes === page.length) return 'dark';
    if (darkVotes === 0) return 'light';
    return page[0] < 0.35 ? (darkVotes * 2 >= page.length ? 'dark' : 'mixed') : (darkVotes * 2 <= page.length ? 'light' : 'mixed');
  }
  const surface = t.split('\n')
    .filter((l) => !/\b(text|font|heading|headline|ink|foreground)\b|(^|[^-])colou?r\s*[:=`]/.test(l) || /background|\bbg-|surface|canvas/.test(l)).join('\n');
  const dark = (surface.match(/\bdark\b|bg-black|bg-\[#0|bg-neutral-9|bg-zinc-9|#0{3,6}\b|#0[0-9a-f]{5}\b|#1[0-9a-f]{5}\b|black background|near-black|pure black/g) || []).length;
  const light = (surface.match(/\blight (theme|mode|background)|bg-white|#fff(fff)?\b|white background|cream|off-white|#f[0-9a-f]{5}\b|#e[0-9a-f]{5}\b/g) || []).length;
  if (dark > light * 1.5 + 1) return 'dark';
  if (light > dark * 1.5 + 1) return 'light';
  return 'mixed';
}

// How concrete a prompt is: distinct exact values (colours, sizes, timings, easings, media URLs)
// on a 0 to 1 scale. Vague prompts ("a modern, clean hero") score low and rank lower in find.mjs.
const MEDIA_URL = /https?:\/\/[^\s"'`)<>]+?\.(?:mp4|webm|mov|m3u8|png|jpe?g|webp|avif|glb|gltf)\b/gi;
// How much a prompt leans on decorative numbering (section indices, counters, coordinates, serials),
// per KB. Prompts high on it produce the "model imitating a technical document" look; find.mjs ranks them lower.
const DECO = /\b(index|indices|numeric spine|numbered|counter|coordinates|serial|plate \d|no\. ?\d|nº|§|0\d ?\/ ?0?\d)\b/gi;
function decoration(text) {
  return Math.round(((text.match(DECO) || []).length / (text.length / 1000)) * 100) / 100;
}

function specificity(text) {
  const distinct = (re) => new Set([...text.matchAll(re)].map((m) => m[0].toLowerCase())).size;
  const n = distinct(/#[0-9a-f]{6}\b|#[0-9a-f]{3}\b/gi) + distinct(/\b\d+(?:\.\d+)?(?:px|rem|em|vw|vh|svh)\b/g) +
    distinct(/\b\d+(?:\.\d+)?m?s\b/g) * 2 + distinct(/cubic-bezier\([^)]+\)/g) * 3 + distinct(MEDIA_URL) * 3;
  return Math.min(1, Math.round((n / 45) * 100) / 100);
}

function fontsIn(text) {
  const out = new Set();
  for (const m of text.matchAll(/family=([^&"'\s)`]+)/g)) {
    for (const fam of m[1].split('&family=')) out.add(decodeURIComponent(fam.split(':')[0]).replace(/\+/g, ' '));
  }
  for (const m of text.matchAll(/f\[\]=([a-z0-9-]+)/gi)) out.add(titleCase(m[1]));
  // Fonts named in prose or CSS ("font-family: 'Geist'", "Instrument Serif for headings"), kept
  // only when the name is a real Google Fonts family.
  fontCategory('');
  for (const m of text.matchAll(/["'`]([A-Z][A-Za-z0-9 ]{2,30})["'`]|\b([A-Z][a-z]+(?: [A-Z][a-z]+){0,2})\b/g)) {
    const name = (m[1] || m[2]).trim();
    if (name.length < 4 || !FONT_CATS.has(name) || COMMON_WORDS.has(name)) continue;
    // An unquoted word counts only next to font vocabulary on the same line.
    if (!m[1]) {
      const line = text.slice(text.lastIndexOf('\n', m.index) + 1, text.indexOf('\n', m.index) + 1 || undefined);
      if (!/font|typeface|type|serif|sans|display|heading|body|headline|weight|italic/i.test(line)) continue;
    }
    out.add(name);
  }
  return [...out].filter(Boolean).slice(0, 4);
}

// Look and feel words, counted in the prompt; a mood is kept when it scores 2 or more.
// Look and feel words, counted in the prompt's prose (code, URLs and class names removed).
// [regex, minimum hits]
const MOODS = {
  editorial: [/\beditorial|magazine|newspaper|broadsheet|\bjournal\b|masthead|print(ed)? (feel|look|style)|drop cap|pull quote/gi, 2],
  luxury: [/\bluxur|premium|elegant|refined|couture|high-end|sophisticat|jewel|perfume/gi, 2],
  playful: [/\bplayful|\bfun\b|bouncy|whimsical|cartoon|sticker|\bkids?\b|cheerful|quirky|\btoy|candy/gi, 2],
  minimal: [/\bminimal|whitespace|restrained|understated|sparse|quiet/gi, 2],
  brutalist: [/brutal|\braw\b|harsh|blocky|anti-design|swiss/gi, 1],
  organic: [/\borganic|earthy|botanical|\bnature\b|handmade|hand-drawn|crafted|\bclay|linen|paper texture/gi, 2],
  futuristic: [/futuris|sci-?fi|\bneon|cyber|holograph|galaxy|\bhud\b|glitch|space-?age/gi, 2],
  cinematic: [/cinematic|\bfilm(ic)?\b|dramatic|moody|atmospher|immersive|letterbox/gi, 2],
  retro: [/\bretro|vintage|\b(70|80|90)s\b|y2k|pixel|nostalg|crt|vhs/gi, 2],
  techy: [/\btechnical|developer|terminal|\bcli\b|\bapi\b|dashboard|devtools|code (block|editor)/gi, 2],
  bold: [/massive|oversized|huge (type|text|headline|letters)|giant (type|text|headline|letters)|poster|loud|full-bleed type/gi, 2],
  corporate: [/\btrust(ed|worthy)?\b|enterprise|compliance|professional|secure|\bb2b\b/gi, 2],
};

// Prompts that open with a YAML meta block (aesthetic, industry, tone) describe themselves.
function promptMeta(text) {
  const pick = (k) => {
    const m = text.slice(0, 3000).match(new RegExp(`^${k}:\\s*(.+)$`, 'mi'));
    return m ? m[1].replace(/["']/g, '').trim() : '';
  };
  return { aesthetic: pick('aesthetic'), industry: pick('industry'), tone: pick('tone') };
}

function promptMoods(text) {
  const prose = text
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/https?:\/\/\S+/g, ' ')
    .replace(/\b(font|text|bg|from|to|via)-[\w[\]#/.-]+/g, ' ');
  return Object.entries(MOODS).filter(([, [re, min]]) => (prose.match(re) || []).length >= min).map(([m]) => m);
}

// Google Fonts families whose names are also ordinary words in a prompt.
const COMMON_WORDS = new Set(['Display', 'Glass', 'Black', 'White', 'Hero', 'Grid', 'Pixel', 'Basic', 'Play', 'Prompt', 'Space', 'Vibes',
  'Moon', 'Orbit', 'Nova', 'Story', 'Average', 'Metal', 'Inspiration', 'Engagement', 'Charm', 'Imbue', 'Share', 'Shadows', 'Satisfy',
  'Explora', 'Oxygen', 'Geo', 'Kite', 'Mate', 'Coda', 'Lustria', 'Rationale', 'Gruppo', 'Swanky', 'Voces', 'Trykker', 'Sumana', 'Tauri']);

// Which loaded font is the display face and which the body face.
let FONT_CATS = null;
function fontCategory(name) {
  if (!FONT_CATS) {
    FONT_CATS = new Map();
    const src = path.join(SRC_DATA, 'font-index.json');
    if (fs.existsSync(src)) {
      const raw = JSON.parse(read(src));
      for (const [fam, , c] of raw.entries) if (!FONT_CATS.has(fam)) FONT_CATS.set(fam, raw.categories[c]);
    }
  }
  return FONT_CATS.get(name) || 'unknown';
}

function fontRoles(text, fonts) {
  if (!fonts.length) return null;
  const lines = text.split('\n').filter((l) => !/https?:\/\//.test(l));
  const score = (f) => {
    let display = 0, body = 0;
    for (const l of lines) {
      if (!l.includes(f)) continue;
      if (/display|heading|headline|title|hero|logo|wordmark|h1|h2|giant|big type/i.test(l)) display++;
      if (/\bbody\b|\btext\b|\bui\b|paragraph|\bnav\b|\bcopy\b|labels?|global|everything else|base/i.test(l)) body++;
    }
    return { f, display, body, cat: fontCategory(f) };
  };
  const s = fonts.map(score);
  if (s.length === 1) return { display: s[0].f, body: s[0].f, cats: [s[0].cat] };
  const byDisplay = [...s].sort((a, b) => (b.display - b.body) - (a.display - a.body)
    || (['serif', 'display'].includes(b.cat) ? 1 : 0) - (['serif', 'display'].includes(a.cat) ? 1 : 0));
  const display = byDisplay[0];
  const body = s.filter((x) => x !== display).sort((a, b) => (b.body - b.display) - (a.body - a.display)
    || (a.cat === 'sans' ? -1 : 0) - (b.cat === 'sans' ? -1 : 0))[0];
  return { display: display.f, body: body.f, cats: [display.cat, body.cat] };
}

// ---------- parts: prompts split into reusable sections ----------

const PART_TYPES = [
  ['meta', /acceptance|do not|don't|dependenc|file (structure|map)|output|setup|tech stack|stack|deliver|install|summary|notes?$|checklist|what it is|overview|goal|requirements|key technical|implementation|opening declaration|reproduce|^meta$/i],
  ['css', /utilit|design dna|custom css|keyframes/i],
  ['components', /shared components|components? library|^components?$/i],
  ['nav', /\bnav|header|menu|top bar/i],
  ['hero', /\bhero|headline|first (screen|viewport)|above the fold|section 1\b|main content|centerpiece|scene/i],
  ['pricing', /pricing|plans?\b|tiers?/i],
  ['testimonials', /testimonial|review|quote/i],
  ['faq', /\bfaq|questions|accordion/i],
  ['footer', /footer/i],
  ['cta', /\bcta\b|call to action|sign ?up|waitlist|newsletter|subscribe|contact|form/i],
  ['stats', /stats|numbers|metrics|counter/i],
  ['features', /feature|benefit|services|how it works|steps|process|capabilit/i],
  ['gallery', /gallery|portfolio|work|showcase|projects|bento|cards?\b|grid|product/i],
  ['logos', /logo(s| row| wall| strip)|partners|clients|trusted|marquee|ticker/i],
  ['background', /background|video|media|shader|canvas|webgl|three|3d|particles|overlay|glass/i],
  ['type', /\bfonts?\b|typography|\btype\b/i],
  ['color', /colou?r|palette|tokens|css variables|global css|theme|index\.css|tailwind config/i],
  ['motion', /motion|animat|entrance|transition|scroll|reveal|interaction|hover|cursor/i],
  ['responsive', /responsive|mobile|phones?|tablet|breakpoint|scaling|frame/i],
];

const HEADING = /^(#{1,4}\s+.+|\*\*[^*\n]{2,60}\*\*:?\s*$|[A-Z0-9][A-Z0-9 &/()'’,.\-–—]{3,60}:?\s*$|={2,}\s*.+?\s*={2,}\s*$|\d+\.\s+\*\*[^*\n]{2,60}\*\*:?.*$)/;

function partsOf(text) {
  const lines = text.split('\n');
  const parts = [];
  let cur = null, inCode = false;
  lines.forEach((line, i) => {
    if (/^```/.test(line.trim())) inCode = !inCode;
    if (!inCode && /^(-{3,}|\*{3,}|_{3,})$/.test(line.trim())) {
      if (cur) parts.push(cur);
      cur = null;
    } else if (!inCode && HEADING.test(line.trim())) {
      if (cur) parts.push(cur);
      const heading = line.trim().replace(/^#+\s*|\*\*|={2,}|:\s*$/g, '').replace(/^\d+\.\s*/, '').replace(/^layer\s+\d+\s*[—–-]\s*/i, '').trim();
      cur = { heading, start: i, end: i };
    } else if (cur) cur.end = i;
  });
  if (cur) parts.push(cur);
  return parts
    .map((p) => {
      const body = lines.slice(p.start, p.end + 1).join('\n').trim();
      const type = (PART_TYPES.find(([, re]) => re.test(p.heading)) || ['other'])[0];
      return { heading: p.heading.slice(0, 80), type, from: p.start + 1, to: p.end + 1, chars: body.length };
    })
    .filter((p) => p.chars >= 160 && p.type !== 'meta' && p.type !== 'other');
}

function buildPrompts() {
  const index = indexFrom(path.join(SRC_PROMPTS, 'index.json'), /^(atelier\/library\/)?prompts\//);
  const entries = [];
  for (const file of walk(SRC_PROMPTS, '.md')) {
    const rel = posix(path.relative(SRC_PROMPTS, file));
    if (!rel.includes('/')) continue; // INDEX.md and loose files
    const cat = rel.split('/')[0];
    const text = read(file);
    const info = index.get(rel) || {};
    const fonts = fontsIn(text);
    const meta = promptMeta(text);
    // Moods from the prose, plus any mood word the meta block or the source's tags name outright.
    const moods = new Set(promptMoods(text));
    const metaText = `${meta.aesthetic} ${meta.tone} ${(info.tags || []).join(' ')} ${info.description || ''}`.toLowerCase();
    for (const m of Object.keys(MOODS)) if (metaText.includes(m)) moods.add(m);
    if (/cinemat/.test(metaText)) moods.add('cinematic');
    if (/luxe|premium/.test(metaText)) moods.add('luxury');
    if (/warm|soft|calm/.test(metaText)) moods.add('organic');
    const design = path.join(SRC_DESIGNS, rel);
    entries.push({
      type: 'prompt',
      id: rel.replace(/\.md$/, ''),
      title: info.title || titleCase(path.basename(rel, '.md')),
      category: cat,
      kind: promptKind(cat, text),
      ...(info.tags && info.tags.length ? { tags: info.tags } : {}),
      theme: promptTheme(text),
      moods: [...moods],
      ...(meta.aesthetic || meta.tone || meta.industry ? { meta } : {}),
      ...(fs.existsSync(design) ? { design: `library/designs/${rel}` } : {}),
      stack: STACK.filter(([, re]) => re.test(text)).map(([t]) => t),
      features: FEATURES.filter(([, re]) => re.test(text)).map(([t]) => t),
      fonts,
      fontRoles: fontRoles(text, fonts),
      parts: partsOf(text),
      spec: specificity(text),
      deco: decoration(text),
      ...(text.search(MEDIA_URL) >= 0 ? { media: true } : {}),
      kb: Math.round(text.length / 1024),
      summary: info.description ? (info.description.length > 280 ? info.description.slice(0, 277) + '…' : info.description) : summaryOf(text),
      path: `library/prompts/${rel}`,
    });
  }
  return entries;
}

// ---------- designs ----------

function frontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  return m ? m[1] : '';
}

function yamlScalar(fm, key) {
  const m = fm.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
  return m ? m[1].trim().replace(/^["']|["']$/g, '') : '';
}

function yamlColor(fm, key) {
  const m = fm.match(new RegExp(`^\\s+${key}(-[a-z]+)?:\\s*["']?(#[0-9a-fA-F]{3,8})`, 'm'));
  return m ? m[2].toLowerCase() : '';
}

function luminance(hex) {
  if (!hex) return null;
  let h = hex.slice(1);
  if (h.length === 3) h = [...h].map((c) => c + c).join('');
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function designFonts(fm) {
  const fams = [...fm.matchAll(/fontFamily:\s*["']*([^,"'\n]+)/g)].map((m) => m[1].trim());
  return [...new Set(fams)].filter(Boolean).slice(0, 3);
}

function buildDesigns() {
  const titles = titlesFrom(path.join(SRC_DESIGNS, 'index.json'), /^(atelier\/library\/)?(designs|design-md)\//);
  const entries = [];
  for (const file of walk(SRC_DESIGNS, '.md')) {
    const rel = posix(path.relative(SRC_DESIGNS, file));
    if (!rel.includes('/')) continue; // LICENSE and loose files
    const cat = rel.split('/')[0];
    const text = read(file);
    const fm = frontmatter(text);
    const canvas = yamlColor(fm, 'canvas') || yamlColor(fm, 'background') || yamlColor(fm, 'bg') || yamlColor(fm, 'page') || yamlColor(fm, 'void') || yamlColor(fm, 'surface');
    const lum = luminance(canvas);
    let desc = yamlScalar(fm, 'description') || summaryOf(text.replace(/^# .*$/m, ''));
    if (desc.length > 300) desc = desc.slice(0, 297) + '…';
    entries.push({
      type: 'design',
      id: rel.replace(/\.md$/, ''),
      title: titles.get(rel) || titleCase(path.basename(rel, '.md')),
      category: cat,
      theme: lum !== null ? (lum < 0.35 ? 'dark' : 'light')
        : /\bdark\b|black canvas|near-black/i.test(desc) ? 'dark'
        : /white|light|cream|off-white/i.test(desc) ? 'light' : 'unknown',
      primary: yamlColor(fm, 'primary') || yamlColor(fm, 'accent') || yamlColor(fm, 'brand'),
      canvas,
      fonts: designFonts(fm),
      kb: Math.round(text.length / 1024),
      summary: desc,
      path: `library/designs/${rel}`,
    });
  }
  return entries;
}

// ---------- styles: visual movements (glassmorphism, brutalism…) with per-build-type guides ----------

function buildStyles() {
  const dir = path.join(LIB, 'styles');
  if (!fs.existsSync(dir)) return [];
  const index = indexFrom(path.join(dir, 'index.json'), /^(atelier\/library\/)?styles\//);
  const entries = [];
  for (const file of walk(dir, '.md')) {
    const rel = posix(path.relative(dir, file));
    if (!rel.includes('/')) continue;
    const text = read(file);
    const info = index.get(rel) || {};
    const style = rel.split('/')[0];
    const first = text.replace(/^#.*$/gm, '').split(/\n\s*\n/).map((p) => p.trim()).find((p) => p.length > 80 && !/^[-*|<]/.test(p)) || '';
    entries.push({
      type: 'style',
      id: rel.replace(/\.md$/, ''),
      title: info.title || titleCase(style),
      category: style,
      kind: info.buildType || (rel.endsWith('index.md') ? 'overview' : path.basename(rel, '.md')),
      kb: Math.round(text.length / 1024),
      summary: summaryOf(first.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')),
      path: `library/styles/${rel}`,
    });
  }
  return entries;
}

function stylesIndexMd(entries) {
  const byStyle = {};
  for (const e of entries) (byStyle[e.category] ||= []).push(e);
  let md = `# Style library\n\n${Object.keys(byStyle).length} visual styles, each with an overview (history, the recipe, tokens, fallbacks, pitfalls) and guides per build type. Generated; do not edit by hand.\n`;
  for (const s of Object.keys(byStyle).sort()) {
    md += `\n## ${titleCase(s)}\n\n`;
    for (const e of byStyle[s].sort((a, b) => (a.kind === 'overview' ? -1 : 1) - (b.kind === 'overview' ? -1 : 1))) {
      md += `- [${e.kind}](${e.path.replace('library/styles/', '')}): ${e.summary}\n`;
    }
  }
  return md;
}

// ---------- photos ----------

function buildPhotos() {
  const src = path.join(SRC_DATA, 'photos.json');
  if (!fs.existsSync(src)) return 0;
  const raw = JSON.parse(read(src));
  const list = Array.isArray(raw) ? raw : raw.photos;
  const photos = list.map((p) => ({
    url: p.file, page: p.page, w: p.w, h: p.h, color: p.color, license: p.license, author: p.author,
    subject: p.subject, tags: p.tags, cat: p.cat, tone: p.tone, temp: p.temp, people: p.people,
    ...(p.focus ? { focus: p.focus } : {}),
  }));
  fs.writeFileSync(path.join(LIB, 'photos.json'), JSON.stringify(photos));
  return photos.length;
}

// ---------- fonts ----------

// Keeps the traits the font finder needs from the raw metric index: one row per
// family/weight/style, features as integers (base-36 triplets in the source).
const FONT_TRAITS = ['advance', 'xRatio', 'descRatio', 'stemW', 'contrast', 'serif', 'roundFrac', 'densX', 'gap', 'runDensity'];

function buildFonts() {
  const src = path.join(SRC_DATA, 'font-index.json');
  if (!fs.existsSync(src)) return 0;
  const raw = JSON.parse(read(src));
  const pick = FONT_TRAITS.map((t) => raw.features.indexOf(t));
  const rows = [];
  for (const [family, weight, catIdx, italic, fp48] of raw.entries) {
    if (!fp48) continue;
    const vals = pick.map((i) => {
      const chunk = fp48.slice(i * 3, i * 3 + 3);
      return chunk === '___' || chunk.length < 3 ? null : parseInt(chunk, 36);
    });
    rows.push([family, weight, raw.categories[catIdx], italic ? 1 : 0, ...vals]);
  }
  fs.writeFileSync(path.join(LIB, 'fonts.json'), JSON.stringify({ traits: FONT_TRAITS, rows }));
  return rows.length;
}

// ---------- indexes ----------

const cell = (s) => String(s ?? '').replace(/\|/g, '\\|');

function promptsIndexMd(entries) {
  const byKind = {};
  for (const e of entries) (byKind[e.kind] ||= []).push(e);
  const order = ['hero', 'landing', 'page', 'navbar', 'footer', 'auth', 'contact', 'onboarding', 'waitlist', '404'];
  const kinds = Object.keys(byKind).sort((a, b) => (order.indexOf(a) + 99) % 99 - (order.indexOf(b) + 99) % 99);
  let md = `# Prompt library\n\n${entries.length} build specs. Generated; do not edit by hand. Search with \`node scripts/find.mjs "<words>" --type prompt\` instead of reading this whole file, then open only the file you pick.\n`;
  for (const k of kinds) {
    md += `\n## ${k} (${byKind[k].length})\n\n| Prompt | Category | Theme | Stack | Features | Summary |\n| --- | --- | --- | --- | --- | --- |\n`;
    for (const e of byKind[k]) {
      md += `| [${cell(e.title)}](${e.path.replace('library/prompts/', '')}) | ${e.category} | ${e.theme} | ${e.stack.join(', ')} | ${e.features.join(', ')} | ${cell(e.summary)} |\n`;
    }
  }
  return md;
}

function designsIndexMd(entries) {
  const byCat = {};
  for (const e of entries) (byCat[e.category] ||= []).push(e);
  let md = `# Design library\n\n${entries.length} design systems modelled on real brands. Generated; do not edit by hand. Each file is 15 to 40 KB: open one, never several. They are inspiration (\`references/routes/library-design.md\`).\n`;
  for (const c of Object.keys(byCat).sort()) {
    md += `\n## ${c}\n\n| Design | Theme | Primary | Canvas | Fonts | Summary |\n| --- | --- | --- | --- | --- | --- |\n`;
    for (const e of byCat[c]) {
      md += `| [${cell(e.title)}](${e.path.replace('library/designs/', '')}) | ${e.theme} | ${e.primary} | ${e.canvas} | ${cell(e.fonts.join(', '))} | ${cell(e.summary)} |\n`;
    }
  }
  return md;
}

// ---------- main ----------

const prompts = buildPrompts();
const designs = buildDesigns();
const styles = buildStyles();
const photos = buildPhotos();
const fonts = buildFonts();
// Font pairings proven in the prompts, with the moods and themes they were used for.
const pairMap = new Map();
for (const p of prompts) {
  if (!p.fontRoles) continue;
  const { display, body, cats } = p.fontRoles;
  const key = `${display} + ${body}`;
  const e = pairMap.get(key) || { display, body, displayCategory: cats[0], bodyCategory: cats[1] || cats[0], uses: 0, moods: {}, themes: {}, examples: [] };
  e.uses++;
  for (const m of p.moods) e.moods[m] = (e.moods[m] || 0) + 1;
  e.themes[p.theme] = (e.themes[p.theme] || 0) + 1;
  if (e.examples.length < 6) e.examples.push(p.path);
  pairMap.set(key, e);
}
const pairings = [...pairMap.values()].sort((a, b) => b.uses - a.uses);
fs.writeFileSync(path.join(LIB, 'pairings.json'), JSON.stringify(pairings, null, 1));

// Licence texts travel with the data they cover (see atelier/THIRD_PARTY_NOTICES.md).
if (fs.existsSync(path.join(SRC_DATA, 'LICENSE-font-metrics.txt'))) copy(path.join(SRC_DATA, 'LICENSE-font-metrics.txt'), path.join(LIB, 'LICENSE-font-metrics.txt'));
fs.writeFileSync(path.join(LIB, 'catalog.json'), JSON.stringify([...prompts, ...designs, ...styles], null, 1));
fs.writeFileSync(path.join(LIB, 'prompts', 'INDEX.md'), promptsIndexMd(prompts));
fs.writeFileSync(path.join(LIB, 'designs', 'INDEX.md'), designsIndexMd(designs));
if (styles.length) fs.writeFileSync(path.join(LIB, 'styles', 'INDEX.md'), stylesIndexMd(styles));
console.log(`library: ${prompts.length} prompts, ${designs.length} designs, ${styles.length} style guides, ${photos} photos, ${fonts} font styles -> ${posix(path.relative(ROOT, LIB))}`);
