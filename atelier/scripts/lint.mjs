#!/usr/bin/env node
// Static slop check for HTML, CSS, JSX/TSX, Vue, Svelte and Astro files.
// node lint.mjs <file|folder>... [--json] [--quiet]
// FAIL = Baseline (fix it). WARN = a tell (fix it, or keep it on purpose and say why).

import fs from 'node:fs';
import path from 'node:path';

const EXT = new Set(['.html', '.htm', '.css', '.scss', '.jsx', '.tsx', '.js', '.ts', '.vue', '.svelte', '.astro']);
const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', 'build', '.next', 'out', '.astro', '.svelte-kit', 'coverage', '.vercel']);

const args = process.argv.slice(2);
const json = args.includes('--json');
const quiet = args.includes('--quiet');
const targets = args.filter((a) => !a.startsWith('--'));
if (!targets.length) {
  console.log('usage: node lint.mjs <file|folder>... [--json] [--quiet]');
  process.exit(0);
}

function collect(p, out = []) {
  if (!fs.existsSync(p)) { console.error(`not found: ${p}`); return out; }
  const st = fs.statSync(p);
  if (st.isDirectory()) {
    for (const n of fs.readdirSync(p)) if (!SKIP_DIRS.has(n) && !n.startsWith('.')) collect(path.join(p, n), out);
  } else if (EXT.has(path.extname(p).toLowerCase()) && !/\.(min|config|test|spec)\.|\.d\.ts$/.test(p)) out.push(p);
  return out;
}

const files = targets.flatMap((t) => collect(t));
const findings = [];
const add = (level, rule, file, line, msg) => findings.push({ level, rule, file, line, msg });

const lineOf = (src, idx) => src.slice(0, idx).split('\n').length;

// Blank out comments but keep newlines, so line numbers still match the file.
const blank = (m) => m.replace(/[^\n]/g, ' ');
const stripComments = (src) => src.replace(/\/\*[\s\S]*?\*\//g, blank).replace(/<!--[\s\S]*?-->/g, blank).replace(/\{\/\*[\s\S]*?\*\/\}/g, blank);

function hue(hex) {
  let h = hex.slice(1);
  if (h.length === 3) h = [...h].map((c) => c + c).join('');
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
  const max = Math.max(r, g, b), min = Math.min(r, g, b), d = max - min;
  if (d < 0.12) return null; // too grey to have a hue
  const x = max === r ? ((g - b) / d) % 6 : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
  return (x * 60 + 360) % 360;
}

// A gradient whose stops span purple/pink and blue/cyan.
function purpleBlueGradients(src) {
  const out = [];
  for (const m of src.matchAll(/(linear|radial|conic)-gradient\(([^;{}]*?)\)\s*[;,}"']/g)) {
    const hues = [...m[2].matchAll(/#[0-9a-fA-F]{3}(?:[0-9a-fA-F]{3})?\b/g)].map((h) => hue(h[0])).filter((h) => h !== null);
    const purple = hues.some((h) => h >= 255 && h <= 330);
    const blue = hues.some((h) => h >= 180 && h < 245);
    if (purple && blue) out.push(m);
  }
  return out;
}

// Text a visitor reads: text nodes in markup and JSX, ignoring code inside braces.
function visibleText(src, ext) {
  if (ext === '.css' || ext === '.scss') return [];
  const out = [];
  const body = src.replace(/<script[\s\S]*?<\/script>/gi, (m) => (ext === '.html' || ext === '.htm' ? ' '.repeat(m.length) : m))
    .replace(/<style[\s\S]*?<\/style>/gi, (m) => ' '.repeat(m.length));
  for (const m of body.matchAll(/>([^<>{}]*[^\s<>{}][^<>{}]*)</g)) {
    const t = m[1].trim();
    if (t && !/^[\s\w.-]+=/.test(t) && !/[;=]\s*$/.test(t)) out.push({ text: t, idx: m.index + 1 });
  }
  return out;
}

// Every rule: [id, level, regex, message, scope] where scope is 'code' (whole source) or 'text' (visible text).
const RULES = [
  // Baseline
  ['transition-all', 'FAIL', /transition\s*:\s*all\b|transition-property\s*:\s*all\b|\btransition-all\b/g, 'transition on all properties: list them (transform, opacity, colours)', 'code'],
  ['animate-layout', 'FAIL', /transition(-property)?\s*:[^;{}]*\b(width|height|top|left|margin|padding)\b[^;{}]*;/g, 'transitioning a layout property: animate transform/opacity instead', 'code'],
  ['keyframes-layout', 'FAIL', /@keyframes\s+[\w-]+\s*\{(?:[^{}]*\{[^{}]*\})*?[^{}]*\{[^{}]*\b(width|height|top|left)\s*:[^{}]*\}/g, 'keyframes animating width/height/top/left: use transform (scaleX, translate)', 'code'],
  ['focus-fade', 'FAIL', /:focus(-visible)?\s*\{[^}]*\btransition\s*:/g, 'focus ring that transitions in: focus must appear instantly', 'code'],
  ['overflow-hidden-root', 'WARN', /(html|body)\s*(,\s*(html|body)\s*)?\{[^}]*overflow-x\s*:\s*hidden/g, 'overflow-x: hidden on html/body breaks sticky: use overflow-x: clip', 'code'],
  ['100vw', 'WARN', /(?<!sizes=["'][^"']*)\b100vw\b|\bw-screen\b/g, '100vw/w-screen widths cause horizontal scroll: use 100% / w-full', 'code'],
  ['video-autoplay', 'FAIL', /<video\b(?=[^>]*\bautoplay)(?![^>]*\bmuted)[^>]*>/gi, 'autoplay video without muted', 'code'],
  ['video-inline', 'WARN', /<video\b(?=[^>]*\bautoplay)(?![^>]*\bplaysinline|[^>]*playsInline)[^>]*>/gi, 'autoplay video without playsinline (iOS goes fullscreen)', 'code'],
  ['img-alt', 'FAIL', /<img\b(?![^>]*\balt\s*=)[^>]*>/gi, 'image without alt (use alt="" when decorative)', 'code'],
  ['img-size', 'WARN', /<img\b(?![^>]*\bwidth\s*=)(?![^>]*\bfill\b)[^>]*>/gi, 'image without width/height: layout shift', 'code'],
  ['focus-removed', 'FAIL', /outline\s*:\s*(none|0)\b(?![^}]*outline-(color|offset|style|width)?\s*:)(?![^}]*box-shadow)/g, 'outline removed with nothing in its place', 'code'],
  ['emoji-icon', 'FAIL', /\p{Emoji_Presentation}|\p{Extended_Pictographic}️/gu, 'emoji in visible text: use an icon set or SVG', 'text'],
  ['fake-success', 'WARN', /\b(thanks|thank you)[^.<]{0,40}(on the list|subscrib|signing up|for joining)|you['’]re (in|on the list)|successfully (subscribed|sent|submitted)/gi, 'success message: make sure a real request is behind it', 'code'],

  // Tells: colour
  ['purple-blue-gradient', 'WARN', /\bfrom-(purple|violet|indigo|fuchsia|pink)-\d{2,3}\b[^"'`]*\b(via|to)-(blue|indigo|cyan|purple|violet|sky|pink)-\d{2,3}\b|\bfrom-(blue|cyan|sky)-\d{2,3}\b[^"'`]*\bto-(purple|violet|fuchsia|pink)-\d{2,3}\b/g, 'purple/blue/pink gradient: the most generated look', 'code'],
  ['stock-palette', 'WARN', /\b(bg|text|border|from|to|via|ring)-(indigo|violet)-(400|500|600|700)\b/g, 'Tailwind stock indigo/violet as brand colour: mix a colour for the page', 'code'],
  ['gradient-text', 'WARN', /background-clip\s*:\s*text|\bbg-clip-text\b/g, 'gradient text: solid ink reads as designed', 'code'],
  ['glow', 'WARN', /box-shadow\s*:\s*0\s+0\s+\d{2,}px\s+(rgba?\(|#|oklch\()(?!0,\s*0,\s*0)|\bshadow-(purple|violet|indigo|blue|cyan|pink)-\d+/g, 'coloured glow shadow', 'code'],
  ['blur-orb', 'WARN', /\bblur-(3xl|\[\d{3}px\])\b[^"'`]*\brounded-full\b|\brounded-full\b[^"'`]*\bblur-(3xl|\[\d{3}px\])\b/g, 'blurred orb background', 'code'],

  // Tells: type
  ['pure-surface', 'WARN', /--[\w-]*(paper|bg|background|canvas|surface|ink|text|fg)[\w-]*\s*:\s*(#fff(fff)?|#000(000)?|white|black)\s*;/gi, 'pure white/black token: tint it toward the page hue', 'code'],
  ['display-font', 'WARN', /(font-family|--font[\w-]*)\s*:\s*["']?(Inter|Roboto|Poppins|Open Sans|Montserrat|Lato|Arial|Helvetica)\b|family=(Inter|Roboto|Poppins|Open\+Sans|Montserrat|Lato)[:&"']/g, 'default font (Inter/Roboto/Poppins…): pick a face from fonts.md, or keep it if the prompt/project specifies it', 'code'],
  ['eyebrow-class', 'WARN', /class(Name)?=["'][^"']*\b(eyebrow|kicker|overline|pre-?title|section-label)\b/g, 'eyebrow above a heading: open the section another way (craft.md § 6)', 'code'],
  ['tracked-caps', 'WARN', /\buppercase\b[^"'`]{0,80}\btracking-(wide|wider|widest|\[0?\.\d+em\])|\btracking-(wide|wider|widest|\[0?\.\d+em\])[^"'`]{0,80}\buppercase\b|text-transform\s*:\s*uppercase[^}]*letter-spacing\s*:\s*0?\.(0[4-9]|[1-9])|letter-spacing\s*:\s*0?\.(0[4-9]|[1-9])\d*em[^}]*text-transform\s*:\s*uppercase/g, 'tracked uppercase label (eyebrow / caps tag): body face, sentence case, untracked', 'code'],

  // Tells: layout
  ['vh-hero', 'WARN', /\bh-screen\b|\bmin-h-screen\b|(?<![sd])\b100vh\b/g, 'vh/h-screen height: use svh/dvh (min-h-[100svh]) so mobile bars do not cut it', 'code'],

  // Tells: motion (references/motion/)
  ['scale-zero', 'WARN', /scale\(\s*0(\.0+)?\s*\)|\bscale-0\b|scale:\s*0\s*[,}]/g, 'entrance from scale(0): start at scale(0.95-0.97) with opacity 0', 'code'],
  ['heavy-blur', 'WARN', /(@keyframes[^{]*\{[^@]*?|transition[^;{}]*filter[^;{}]*;[^}]*?)blur\(\s*(2[1-9]|[3-9]\d|\d{3,})px\)/g, 'animated blur above 20px: costly (worst in Safari); 2-5px is enough to glue a crossfade', 'code'],
  ['will-change-wide', 'WARN', /(\*|html|body|:root)\s*\{[^}]*will-change\s*:/g, 'will-change on everything: put it only on the element that animates, only while it animates', 'code'],

  // Tells: copy
  ['buzzword', 'WARN', /\b(seamless(ly)?|robust|empower(s|ing)?|supercharge[ds]?|elevate[sd]?|effortless(ly)?|unlock(s|ing)?|unleash(es|ing)?|revolutioni[sz]e[sd]?|next[- ]gen(eration)?|world[- ]class|best[- ]in[- ]class|cutting[- ]edge|game[- ]changer|industry[- ]leading|future[- ]proof|harness the power|take .{1,20} to the next level)\b/gi, 'buzzword', 'text'],
  ['cliche', 'WARN', /\b(built for the modern|in today['’]s (fast[- ]paced|digital)|whether you['’]re|say goodbye to|it['’]s not just|reimagine[ds]?|your journey|all-in-one platform)\b/gi, 'generated-voice phrase', 'text'],
  ['placeholder-name', 'WARN', /\b(jane doe|john doe|john smith|acme( corp| inc)?|lorem ipsum|dolor sit amet)\b/gi, 'placeholder name or lorem ipsum', 'text'],
  ['em-dash', 'WARN', /\s[—–]\s|\w—\w/g, 'em/en dash in copy: use a comma, colon, full stop or parentheses', 'text'],
  ['arrow-glued', 'WARN', /\w\s?(→|->|›|»)\s*$/gm, 'arrow glued to link text: let the verb be the label', 'text'],
  ['middle-dots', 'WARN', /\S\s·\s\S[^·\n]*\s·\s\S/g, 'middle-dot meta string: use line breaks or columns', 'text'],
  ['invented-stats', 'WARN', /\b\d[\d,.]*\s?(k|m|\+)\+?\s+(users|customers|teams|companies|downloads|developers|businesses|creators)\b|\b99\.9+%|\btrusted by\b|\b[45]\.\d\s?\/\s?5\b|★★★★/gi, 'metric/rating/"trusted by": only if the user gave it, otherwise mark as placeholder', 'text'],
  ['stock-cta', 'WARN', /^(learn more|get started|book a demo|click here|read more|discover more)$/gi, 'stock action label: use the verb of the real action', 'text'],
];

let anyMotion = false, anyReduced = false, anyInteractive = false, anyFocusVisible = false;

for (const file of files) {
  const src = stripComments(fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n'));
  const ext = path.extname(file).toLowerCase();
  const rel = path.relative(process.cwd(), file) || file;
  const texts = visibleText(src, ext);

  for (const m of purpleBlueGradients(src)) {
    add('WARN', 'purple-blue-gradient', rel, lineOf(src, m.index), `purple/blue gradient: the most generated look: "${m[0].slice(0, 70)}"`);
  }
  const stickies = [...src.matchAll(/position\s*:\s*sticky\s*;\s*top\s*:\s*0\b|\bsticky\b[^"'`]*\btop-0\b/g)];
  if (stickies.length > 1) add('WARN', 'double-sticky', rel, lineOf(src, stickies[1].index), 'two sticky elements at top 0: the second slides under the first');

  for (const [id, level, re, msg, scope] of RULES) {
    const seen = new Set();
    if (scope === 'code') {
      for (const m of src.matchAll(re)) {
        const ln = lineOf(src, m.index);
        if (seen.has(ln)) continue;
        seen.add(ln);
        add(level, id, rel, ln, `${msg}: "${m[0].slice(0, 70).replace(/\s+/g, ' ')}"`);
      }
    } else {
      for (const { text, idx } of texts) {
        for (const m of text.matchAll(re)) {
          const ln = lineOf(src, idx);
          if (seen.has(ln)) continue;
          seen.add(ln);
          add(level, id, rel, ln, `${msg}: "${text.slice(0, 70)}"`);
        }
      }
    }
  }

  if (/@keyframes|animation\s*:|\banimate-|transition\s*:|\btransition\b|framer-motion|motion\/react|gsap|<video[^>]*autoplay/i.test(src)) anyMotion = true;
  if (/prefers-reduced-motion|motion-reduce:|motion-safe:|useReducedMotion|reducedMotion/i.test(src)) anyReduced = true;
  if (/<(button|a|input|select|textarea)\b/i.test(src)) anyInteractive = true;
  if (/:focus-visible|focus-visible:|:focus\b|focus:/i.test(src)) anyFocusVisible = true;

  if (ext === '.html' || ext === '.htm') {
    if (/<html\b/i.test(src) && !/<html\b[^>]*\blang=/i.test(src)) add('WARN', 'html-lang', rel, 1, '<html> without lang');
    if (/<html\b/i.test(src) && !/<title>[^<]+<\/title>/i.test(src)) add('WARN', 'title', rel, 1, 'document without a <title>');
    if (/<html\b/i.test(src) && !/name=["']viewport["']/i.test(src)) add('FAIL', 'viewport', rel, 1, 'no viewport meta: the page will not be responsive');
    const h1 = (src.match(/<h1\b/gi) || []).length;
    if (/<html\b/i.test(src) && h1 !== 1) add('WARN', 'h1-count', rel, 1, `${h1} <h1> elements: use exactly one`);
  }
  const lazyFirst = src.match(/<img\b[^>]*>/i);
  if (lazyFirst && /loading=["']lazy["']/i.test(lazyFirst[0]) && /hero/i.test(src.slice(Math.max(0, lazyFirst.index - 600), lazyFirst.index))) {
    add('WARN', 'lazy-hero', rel, lineOf(src, lazyFirst.index), 'hero image is lazy-loaded: use fetchpriority="high"');
  }
}

if (files.length) {
  const where = files.length === 1 ? (path.relative(process.cwd(), files[0]) || files[0]) : '(all files)';
  if (anyMotion && !anyReduced) add('FAIL', 'reduced-motion', where, 0, 'animation/transition/video found but no prefers-reduced-motion (or motion-reduce:) fallback anywhere');
  if (anyInteractive && !anyFocusVisible) add('FAIL', 'focus-visible', where, 0, 'interactive elements but no :focus-visible / focus-visible: styles anywhere');
}

const fails = findings.filter((f) => f.level === 'FAIL');
const warns = findings.filter((f) => f.level === 'WARN');

if (json) {
  console.log(JSON.stringify({ files: files.length, fail: fails.length, warn: warns.length, findings }, null, 1));
} else {
  const order = { FAIL: 0, WARN: 1 };
  findings.sort((a, b) => order[a.level] - order[b.level] || a.file.localeCompare(b.file) || a.line - b.line);
  for (const f of findings) {
    if (quiet && f.level === 'WARN') continue;
    console.log(`${f.level.padEnd(4)} ${f.rule.padEnd(20)} ${f.file}${f.line ? ':' + f.line : ''}  ${f.msg}`);
  }
  console.log(`\n${files.length} file(s) · ${fails.length} FAIL · ${warns.length} WARN`);
  if (!files.length) console.log('No lintable files found.');
}
process.exit(fails.length ? 1 : 0);
