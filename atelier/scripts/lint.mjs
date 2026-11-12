#!/usr/bin/env node
// Static slop check for HTML, CSS, JSX/TSX, Vue, Svelte and Astro files.
// node lint.mjs <file|folder>... [--prompt <source prompt.md>]... [--json] [--quiet]
// FAIL = Baseline (fix it). WARN = a tell (fix it, or keep it on purpose and say why).
// --prompt: a tell that the source prompt itself asks for is the spec, not a tell. It is reported
// as KEPT and does not count.

import fs from 'node:fs';
import path from 'node:path';

const EXT = new Set(['.html', '.htm', '.css', '.scss', '.jsx', '.tsx', '.js', '.ts', '.vue', '.svelte', '.astro']);
const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', 'build', '.next', 'out', '.astro', '.svelte-kit', 'coverage', '.vercel']);

const args = process.argv.slice(2);
const json = args.includes('--json');
const quiet = args.includes('--quiet');
const promptFiles = args.flatMap((a, i) => (args[i - 1] === '--prompt' ? [a] : []));
const kind = args.flatMap((a, i) => (args[i - 1] === '--kind' ? [a] : []))[0];
const targets = args.filter((a, i) => !a.startsWith('--') && args[i - 1] !== '--prompt' && args[i - 1] !== '--kind');
if (!targets.length) {
  console.log('usage: node lint.mjs <file|folder>... [--prompt <source prompt.md>]... [--kind game] [--json] [--quiet]');
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
const promptText = promptFiles.map((p) => (fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : (console.error(`prompt not found: ${p}`), ''))).join('\n');
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
  ['focus-fade', 'FAIL', /:focus(-visible)?\s*\{[^}]*\btransition\s*:(?!\s*none\b)/g, 'focus ring that transitions in: focus must appear instantly', 'code'],
  ['overflow-hidden-root', 'WARN', /(html|body)\s*(,\s*(html|body)\s*)?\{[^}]*overflow-x\s*:\s*hidden/g, 'overflow-x: hidden on html/body breaks sticky: use overflow-x: clip', 'code'],
  ['100vw', 'WARN', /(?<!sizes=["'][^"']*)(?<!(min|max|clamp)\([^;{}]*)\b100vw\b|\bw-screen\b/g, '100vw/w-screen widths cause horizontal scroll: use 100% / w-full', 'code'],
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
  ['vh-hero', 'WARN', /\bh-screen\b(?![^"'`]*\b(h|min-h)-\[100[sd]vh\])|\bmin-h-screen\b(?![^"'`]*\bmin-h-\[100[sd]vh\])|(?<![sd])\b100vh\b(?![^};]*;[^}]*\b100[sd]vh\b)/g, 'vh/h-screen height: use svh/dvh (min-h-[100svh]) so mobile bars do not cut it', 'code'],

  // Tells: motion (references/motion/)
  ['scale-zero', 'WARN', /(?<![\w-])scale\(\s*0(\.0+)?\s*\)|\bscale-0\b|(?<![\w-])scale:\s*0\s*[,}]/g, 'entrance from scale(0): start at scale(0.95-0.97) with opacity 0', 'code'],
  ['heavy-blur', 'WARN', /(@keyframes[^{]*\{[^@]*?|transition[^;{}]*filter[^;{}]*;[^}]*?)blur\(\s*(2[1-9]|[3-9]\d|\d{3,})px\)/g, 'animated blur above 20px: costly (worst in Safari); 2-5px is enough to glue a crossfade', 'code'],
  ['will-change-wide', 'WARN', /(\*|html|body|:root)\s*\{[^}]*will-change\s*:/g, 'will-change on everything: put it only on the element that animates, only while it animates', 'code'],
  ['hover-only', 'FAIL', /\bopacity-0\b(?=[^"'`]*\bgroup-hover:opacity-100\b)(?![^"'`]*\b(group-)?focus(-within|-visible)?:opacity-100\b)[^"'`]*/g, 'content shown only on hover: touch and keyboard never see it (add group-focus-within:opacity-100, or keep it visible)', 'code'],
  ['flash-loop', 'FAIL', /animation\s*:[^;{}]*\b(glitch|flicker|flash|strobe)[\w-]*[^;{}]*\b(0?\.(0\d|[12]\d|3[0-2])s|([1-9]\d|[12]\d\d|3[0-2]\d)ms)\b[^;{}]*\binfinite\b|animation\s*:[^;{}]*\b(0?\.(0\d|[12]\d|3[0-2])s|([1-9]\d|[12]\d\d|3[0-2]\d)ms)\b[^;{}]*\b(glitch|flicker|flash|strobe)[\w-]*[^;{}]*\binfinite\b/g, 'flashing loop faster than 3 per second (WCAG 2.3.1)', 'code'],
  ['overshoot-ease', 'WARN', /cubic-bezier\(\s*[\d.]+\s*,\s*-(0?\.[1-9]|[1-9])[\d.]*\s*,[^)]*\)|cubic-bezier\(\s*[\d.]+\s*,\s*-?[\d.]+\s*,\s*[\d.]+\s*,\s*(1\.[1-9]|[2-9])[\d.]*\s*\)|\bbounce\s*:\s*0?\.[3-9]|\bease\s*:\s*["'](back|elastic|bounce)[\w.]*["']|\banimate-bounce\b/g, 'overshooting or bouncing curve: keep overshoot to gestures, success and celebration (motion/principles.md § 5)', 'code'],
  ['float-loop', 'WARN', /animation\s*:[^;{}]*\b(float|floating|bob|bobbing|levitate|drift|hover-?y)[\w-]*\b[^;{}]*\binfinite\b|animation\s*:[^;{}]*\binfinite\b[^;{}]*\b(float|floating|bob|bobbing|levitate|drift)[\w-]*|\banimate-(float|bob|drift)\b|animate=\{\{\s*y\s*:\s*\[\s*0\s*,\s*-?\d+\s*,\s*0\s*\]/g, 'floating or bobbing loop: still, depth from composition', 'code'],
  ['animated-bg', 'WARN', /animation\s*:[^;{}]*\b(blob|aurora|gradient|bg-pan|background-pan|move-bg|mesh)[\w-]*\b[^;{}]*\binfinite\b|animation\s*:[^;{}]*\binfinite\b[^;{}]*\b(blob|aurora|gradient|bg-pan|background-pan|move-bg|mesh)[\w-]*|\banimate-(blob|aurora|gradient)\b/g, 'animated blob / aurora / gradient background: a still surface, or one slow loop that stops off-screen', 'code'],
  ['shimmer-fx', 'WARN', /\b(ShinyText|AnimatedGradientText|ShimmerButton|BorderBeam|ShineBorder|Meteors|SparklesCore|BackgroundBeams|MovingBorder|AnimatedBeam|AuroraBackground|LampContainer|WavyBackground)\b|@property\s+--(angle|border-angle|rotation|gradient-angle)\b|(background-clip\s*:\s*text|\bbg-clip-text\b)[^}]{0,200}\banimation\b/g, 'shimmer, beam or rotating-border effect: a hairline and a lightness step', 'code'],
  ['bounce-arrow', 'WARN', /\banimate-bounce\b[^>]*>\s*<(svg|i\b|Chevron|Arrow)|<(ChevronDown|ArrowDown)\b[^>]*\banimate-bounce\b/g, 'bouncing scroll arrow: delete it, let the next section show above the fold', 'code'],
  ['typewriter', 'WARN', /\b(Typewriter|TypeAnimation|useTypewriter|ReactTyped)\b|new\s+Typed\(|@keyframes\s+(typing|typewriter|blink-caret)\b/g, 'typewriter text: the headline is complete at first paint', 'code'],
  ['replay-on-scroll', 'WARN', /\bonce\s*:\s*false\b|data-aos-once\s*=\s*["']false|\bmirror\s*:\s*true\b/g, 'reveal that replays every time it is scrolled past: once, or not at all', 'code'],
  ['tilt', 'WARN', /\b(react-parallax-tilt|vanilla-tilt|VanillaTilt|ParallaxTilt|useTilt)\b|rotate[XY]\(\s*\$\{[^}]*(mouse|client[XY]|pointer)/g, '3D tilt following the pointer: none unless 3D is the product', 'code'],
  ['hover-img-zoom', 'WARN', /\bgroup-hover:scale-(10[5-9]|1[1-5]\d)\b|:hover\s+img[^{]*\{[^}]*scale\(/g, 'image zooming inside a card on hover: the caption or link changes instead', 'code'],
  ['scroll-hijack', 'WARN', /\b(Lenis|LocomotiveScroll|locomotive-scroll|ScrollSmoother)\b|addEventListener\(\s*['"]wheel['"][\s\S]{0,300}?preventDefault\(\)/g, 'smooth-scroll library or wheel hijack: native scroll unless the concept needs it (motion/scroll.md § 6)', 'code'],
  ['fake-latency', 'WARN', /setTimeout\(\s*\(\)\s*=>\s*set(Is)?Loading\(\s*false\s*\)\s*,\s*\d{3,4}\s*\)|new\s+Promise\(\s*\(?\s*(r|res|resolve)\s*\)?\s*=>\s*setTimeout\(\s*(r|res|resolve)\s*,\s*\d{3,4}\s*\)\s*\)/g, 'fake loading delay: render at once; a spinner only for real waits', 'code'],
  ['text-parallax', 'WARN', /<motion\.(h[1-6]|p)\b[^>]*style=\{\{[^}]*\by\s*[:,}]/g, 'parallax on text: text stays put', 'code'],

  // Tells: copy
  ['buzzword', 'WARN', /\b(seamless(ly)?|robust|empower(s|ing)?|supercharge[ds]?|elevate[sd]?|effortless(ly)?|unlock(s|ing)?|unleash(es|ing)?|revolutioni[sz]e[sd]?|next[- ]gen(eration)?|world[- ]class|best[- ]in[- ]class|cutting[- ]edge|game[- ]changer|industry[- ]leading|future[- ]proof|harness the power|take .{1,20} to the next level)\b/gi, 'buzzword', 'text'],
  ['cliche', 'WARN', /\b(built for the modern|in today['’]s (fast[- ]paced|digital)|whether you['’]re|say goodbye to|it['’]s not just|reimagine[ds]?|your journey|all-in-one platform)\b/gi, 'generated-voice phrase', 'text'],
  ['placeholder-name', 'WARN', /\b(jane doe|john doe|john smith|acme( corp| inc)?|lorem ipsum|dolor sit amet)\b/gi, 'placeholder name or lorem ipsum', 'text'],
  ['em-dash', 'WARN', /\s[—–]\s|\w—\w/g, 'em/en dash in copy: use a comma, colon, full stop or parentheses', 'text'],
  ['arrow-glued', 'WARN', /\w\s?(→|->|›|»)\s*$/gm, 'arrow glued to link text: let the verb be the label', 'text'],
  ['middle-dots', 'WARN', /\S\s·\s\S[^·\n]*\s·\s\S/g, 'middle-dot meta string: use line breaks or columns', 'text'],
  ['invented-stats', 'WARN', /\b\d[\d,.]*\s?(k|m|\+)\+?\s+(users|customers|teams|companies|downloads|developers|businesses|creators)\b|\b99\.9+%|\btrusted by\b|\b[45]\.\d\s?\/\s?5\b|★★★★/gi, 'metric/rating/"trusted by": only if the user gave it, otherwise mark as placeholder', 'text'],
  ['fake-metadata', 'WARN', /\d{1,3}(\.\d+)?\s?°\s?(\d{1,2}\s?[′']\s?)?[NS]\b|\bN[º°]\.?\s?\d+|№\s?\d+|§\s?\d+|\b0\d\s?\/\s?0?\d\b|\b(pass|step|deck|card|plate|lot|batch|serial|vol\.?|issue|chapter|frame|unit)\s+0?\d+\s*(of|\/)\s*\d+|\b(card|plate|lot|batch|serial|ref|unit)\.?\s*#?\d{3,}\b|\best\.?\s+(19|20)\d\d\b|\b[a-z]{2,3}-\d{4,}\b|\b(plate|pass|deck|card|lot|batch|frame|fig\.?|no\.?|index|entry|file|case|item|vol\.?)\s+0\d+\b/gi, 'decorative metadata (coordinates, Nº, §, 01 / 04, serials, "Est.") reads as generated: delete it, or keep a number only when the reader needs it', 'text'],
  ['fake-metadata-js', 'WARN', /padStart\(\s*[23]\s*,\s*['"`]0['"`]\s*\)/g, 'zero-padded counter built in script (Plate 01, 02 / 09): decorative numbering reads as generated', 'code'],
  ['stock-cta', 'WARN', /^(learn more|get started|book a demo|click here|read more|discover more)$/gi, 'stock action label: use the verb of the real action', 'text'],
];

let anyMotion = false, anyReduced = false, anyInteractive = false, anyFocusVisible = false;
let anyMotionLib = false, anyMotionLibReduced = false, anyGsap = false, anyGsapReduced = false;

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

  // Motion tells that only show up as a count (references/motion/lint.md).
  const counted = (id, re, min, msg) => {
    const hits = [...src.matchAll(re)];
    if (hits.length >= min) add('WARN', id, rel, lineOf(src, hits[0].index), `${msg} (${hits.length}×)`);
  };
  counted('reveal-everywhere', /\bwhileInView\s*=|\bdata-aos\s*=|<(FadeIn|FadeInUp|FadeUp|Reveal|ScrollReveal|AnimateOnScroll|AnimatedSection)\b|\bdata-reveal\b|class(Name)?=["'][^"']*\b(reveal|fade-up|fade-in-up|animate-on-scroll)\b/g, 6,
    'scroll reveal on many elements: two to four reveals carry a story, headings and copy stay put');
  counted('fade-up-preset', /initial\s*=\s*\{\{\s*opacity\s*:\s*0\s*,\s*y\s*:\s*\d+\s*\}\}|\bopacity-0\b[^"'`]*\btranslate-y-(2|3|4|5|6|8|10|12)\b|@keyframes\s+fade-?(in-?)?up\b/g, 3,
    'the same fade-and-rise preset on many elements: vary distance by role, reveal fewer things');
  counted('delay-chain', /delay\s*:\s*(i|index|idx|\w+Index)\s*\*\s*0?\.(0[89]|[1-9])\d*\b|animationDelay\s*:\s*`\$\{\s*\w+\s*\*\s*(0?\.[1-9]|[89]\d|[1-9]\d\d)|staggerChildren\s*:\s*0?\.(0[89]|[1-9])|transition-delay\s*:\s*calc\(\s*var\(--\w+\)\s*\*\s*([89]\d|[1-9]\d\d)ms\)|stagger\s*:\s*0?\.(0[89]|[1-9])\d*\b/g, 1,
    'delay chain of 80ms or more per item: step min(40ms, 500ms ÷ n), groups under 500ms');
  counted('delay-chain', /\b(animation-)?delay-(100|150|200|300|400|500|700|1000)\b/g, 3, 'delay classes stepping 100ms, 200ms, 300ms…: step min(40ms, 500ms ÷ n)');
  counted('hover-scale', /\bhover:scale-(10[1-9]|11\d|\[1\.\d+\])\b|:hover[^{]*\{[^}]*scale\(\s*1\.(0[2-9]|[1-9])/g, 3, 'hover scale on many elements: one signal on the container; scale is for press');
  counted('count-up', /\b(CountUp|useCountUp|NumberTicker|AnimatedNumber|AnimatedCounter|animateValue|countUp)\b|\bdata-count(-to|-target)?\s*=/g, 2, 'count-up on several figures: set the number; roll only a value that really changes');
  counted('text-parallax', /\b(data-speed|data-rellax-speed|data-scroll-speed|data-lag)\s*=|useTransform\(\s*scrollYProgress/g, 3, 'parallax on many layers: at most one image layer, never text');
  counted('split-text', /new\s+SplitText\(|SplitText\.create\(|\.split\(\s*['"`]{2}\s*\)\s*\.map\(/g, 2, 'several split-text animations: one headline per page at most');

  // Loops: pulse, ping and glow on things that are not loaders; spins on things that are not spinners.
  for (const m of src.matchAll(/class(Name)?=["'{][^"'}]*\banimate-(pulse|ping)\b[^"'}]*/g)) {
    if (!/skeleton|\bbg-(gray|slate|zinc|neutral|stone|muted)-|aria-busy|loading/i.test(m[0])) add('WARN', 'infinite-loop', rel, lineOf(src, m.index), `endless ${m[2]} on something that is not a loader: static emphasis, or a live state that stops`);
  }
  for (const m of src.matchAll(/animation\s*:[^;{}]*\binfinite\b[^;{}]*;?/g)) {
    if (/\b(pulse|glow|ping|breath\w*|shine|wiggle|heartbeat|beat|jiggle|wobble|throb)\b/i.test(m[0])) add('WARN', 'infinite-loop', rel, lineOf(src, m.index), `endless attention loop: "${m[0].slice(0, 60)}"`);
  }
  for (const m of src.matchAll(/<[^>]*\banimate-spin\b[^>]*>/g)) {
    if (!/spin|load|progress|busy|Loader|refresh|sync/i.test(m[0].replace(/animate-spin/g, ''))) add('WARN', 'decorative-spin', rel, lineOf(src, m.index), 'spinning decoration: spin is for loading only');
  }
  if (/@keyframes\s+(marquee|ticker|scroll-x|infinite-scroll|loop-scroll)\b|\banimate-(marquee|infinite-scroll)\b/.test(src) && !/animation-play-state\s*:\s*paused|\[animation-play-state:paused\]|pauseOnHover|playState|\.pause\(\)/.test(src)) {
    add('WARN', 'marquee-no-pause', rel, lineOf(src, src.search(/@keyframes\s+(marquee|ticker|scroll-x|infinite-scroll|loop-scroll)\b|\banimate-(marquee|infinite-scroll)\b/)), 'marquee that never pauses: pause on hover and focus, a pause control past 5s (WCAG 2.2.2)');
  }

  // Timing monoculture: one duration, or only the stock curves, on everything.
  const durs = [];
  for (const m of src.matchAll(/(?:transition|animation)(?:-duration)?\s*:\s*([^;{}]*)/g)) {
    const t = /(\d*\.?\d+)(ms|s)\b/.exec(m[1]);
    if (t) durs.push(Math.round(parseFloat(t[1]) * (t[2] === 's' ? 1000 : 1)));
  }
  for (const m of src.matchAll(/\bduration-(\d{2,4})\b/g)) durs.push(Number(m[1]));
  for (const m of src.matchAll(/\bduration\s*:\s*(\d*\.?\d+)\s*[,}]/g)) { const v = parseFloat(m[1]); durs.push(Math.round(v < 10 ? v * 1000 : v)); }
  if (durs.length >= 8) {
    const hist = {};
    for (const d of durs) hist[d] = (hist[d] || 0) + 1;
    const [top, n] = Object.entries(hist).sort((a, b) => b[1] - a[1])[0];
    if (n / durs.length >= 0.8) add('WARN', 'uniform-duration', rel, 0, `${n} of ${durs.length} durations are ${top}ms: time by role and distance (motion/principles.md § 4)`);
  }
  const decls = [...src.matchAll(/(?:transition|animation)(?:-timing-function)?\s*:\s*[^;{}]*/g)].map((m) => m[0]);
  const custom = decls.filter((d) => /cubic-bezier\((?!\s*0?\.4\s*,\s*0\s*,\s*0?\.2\s*,\s*1\s*\))|linear\(|var\(--/.test(d)).length;
  const stock = decls.filter((d) => /\bease(-in-out|-in|-out)?\b|cubic-bezier\(\s*0?\.4\s*,\s*0\s*,\s*0?\.2\s*,\s*1\s*\)/.test(d)).length;
  if (stock >= 6 && !custom) add('WARN', 'default-curve', rel, 0, `${stock} transitions on stock curves (ease, 0.4/0/0.2/1) and none chosen: use the house curves or the brand's own`);

  if (/from\s+['"](framer-motion|motion\/react|motion)['"]|require\(['"]framer-motion['"]\)/.test(src)) anyMotionLib = true;
  if (/\bgsap\.(to|from|fromTo|timeline)\(/.test(src)) anyGsap = true;
  if (/useReducedMotion|reducedMotion\s*=|MotionConfig|matchMedia\([^)]*prefers-reduced-motion/.test(src)) anyMotionLibReduced = true;
  if (/gsap\.matchMedia|matchMedia\([^)]*prefers-reduced-motion/.test(src)) anyGsapReduced = true;

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
  if (anyMotionLib && !anyMotionLibReduced) add('FAIL', 'motion-lib-no-reduced', where, 0, 'Motion / Framer Motion used without MotionConfig reducedMotion="user" or useReducedMotion: CSS media queries do not reach it');
  if (anyGsap && !anyGsapReduced) add('FAIL', 'motion-lib-no-reduced', where, 0, 'GSAP used without gsap.matchMedia() or a prefers-reduced-motion check: CSS media queries do not reach it');
}

// A WARN the source prompt asks for is kept: the rule matches the prompt too, or (fonts) the prompt names the face.
if (promptText) {
  const rules = new Map(RULES.map(([id, , re]) => [id, re]));
  // Copy is always rewritten, and these Baseline warnings never change the look, so the prompt cannot keep them.
  const PROSE_RULES = new Set(['buzzword', 'cliche', 'placeholder-name', 'em-dash', 'arrow-glued', 'middle-dots', 'invented-stats', 'stock-cta', 'fake-success',
    'vh-hero', 'img-size', 'video-inline', '100vw', 'overflow-hidden-root', 'fake-metadata', 'fake-metadata-js']);
  const lowerPrompt = promptText.toLowerCase();
  // Prompts often describe a choice in words rather than code ("a 12px mono eyebrow, uppercase, 1.5px tracking").
  const PROSE_HINTS = {
    'eyebrow-class': /\b(eyebrow|kicker|overline|pre-?title|section label)\b/i,
    'tracked-caps': /^(?=[\s\S]*\b(uppercase|all[- ]caps|small caps)\b)(?=[\s\S]*\b(track(ed|ing)?|letter-?spacing)\b)/i,
    'gradient-text': /gradient (text|headline|word|fill)|text gradient|bg-clip-text|background-clip/i,
    glow: /\bglow/i,
    'blur-orb': /\b(orb|blob)s?\b|blurred (circle|shape)/i,
    'pure-surface': /#fff(fff)?\b|#000(000)?\b|pure (white|black)/i,
    'purple-blue-gradient': /(purple|violet|indigo|pink)[^.\n]{0,40}(blue|cyan)[^.\n]{0,20}gradient|gradient[^.\n]{0,40}(purple|violet|indigo)/i,
    'stock-palette': /\b(indigo|violet)\b/i,
    'scale-zero': /scale\(?\s*0\b/i,
    'heavy-blur': /blur\(?\s*\d{2,}px/i,
    // motion: a prompt that names the effect asks for it
    'overshoot-ease': /\b(bounc\w*|spring\w*|elastic|overshoot\w*|back(Out|InOut)?)\b/i,
    'infinite-loop': /\b(puls\w*|glow\w*|ping|breath\w*|heartbeat)\b/i,
    'float-loop': /\b(float\w*|bob\w*|levitat\w*|drift\w*)\b/i,
    'animated-bg': /\b(aurora|blob|animated (gradient|background)|gradient (animation|shift|pan|loop)|mesh)\b/i,
    'shimmer-fx': /\b(shimmer\w*|shine|shiny|beam|sparkle\w*|meteor\w*|rotating border|conic)\b/i,
    'bounce-arrow': /\bbounc\w*/i,
    'typewriter': /\b(typewriter|typing|typed)\b/i,
    'count-up': /\b(count(s|ing)?[- ]up|counter|ticker|odometer)\b/i,
    'hover-scale': /hover[^.\n]{0,40}scal|scal[^.\n]{0,30}hover/i,
    'hover-img-zoom': /\bzoom\w*/i,
    'tilt': /\btilt\w*/i,
    'scroll-hijack': /\b(lenis|locomotive|smooth[- ]scroll\w*|scrollsmoother)\b/i,
    'text-parallax': /\bparallax\b/i,
    'reveal-everywhere': /\b(reveal\w*|fade[- ]?in\w*|whileInView|on scroll|scroll[- ]trigger\w*|aos)\b/i,
    'fade-up-preset': /\b(fade[- ]?(in[- ]?)?up|translate-?y|y:\s*\d+)/i,
    'delay-chain': /\b(stagger\w*|delay\w*|cascade\w*)\b/i,
    'decorative-spin': /\b(spin\w*|rotat\w*)\b/i,
    'marquee-no-pause': /\b(marquee|ticker|infinite (scroll|loop)|logo (wall|strip|rail))\b/i,
    'split-text': /\b(split ?text|per[- ](letter|word|char)|letter by letter|word by word)\b/i,
    'replay-on-scroll': /\b(replay|every time|mirror|once:\s*false)\b/i,
    'uniform-duration': /$^/,
    'default-curve': /cubic-bezier\(\s*0?\.4\s*,\s*0\s*,\s*0?\.2\s*,\s*1\s*\)|\bease(-in-out)?\b/i,
  };
  for (const f of findings) {
    if (f.level !== 'WARN' || PROSE_RULES.has(f.rule)) continue;
    let asked = false;
    if (f.rule === 'display-font') {
      const face = (f.msg.match(/(Inter|Roboto|Poppins|Open[ +]Sans|Montserrat|Lato|Arial|Helvetica)/) || [])[1];
      asked = !!face && lowerPrompt.includes(face.replace('+', ' ').toLowerCase());
    } else if (f.rule === 'purple-blue-gradient') {
      asked = purpleBlueGradients(promptText + ';').length > 0;
    } else if (rules.has(f.rule)) {
      const re = rules.get(f.rule);
      re.lastIndex = 0;
      asked = re.test(promptText) || (PROSE_HINTS[f.rule] || /$^/).test(promptText);
      re.lastIndex = 0;
    } else if (PROSE_HINTS[f.rule]) {
      asked = PROSE_HINTS[f.rule].test(promptText);
    }
    if (asked) f.level = 'KEPT';
  }
}

// --kind game: tracked caps, condensed or mono labels and a fixed 16:9 stage are the native language of HUDs.
if (kind === 'game') {
  // Pulses, pops and spins are game feedback (game/feedback.md), not decoration.
  const GAME_NATIVE = new Set(['tracked-caps', 'eyebrow-class', 'display-font', '100vw', 'vh-hero', 'pure-surface',
    'infinite-loop', 'overshoot-ease', 'float-loop', 'decorative-spin', 'count-up', 'hover-scale', 'bounce-arrow']);
  for (let i = findings.length - 1; i >= 0; i--) if (findings[i].level === 'WARN' && GAME_NATIVE.has(findings[i].rule)) findings.splice(i, 1);
}

const fails = findings.filter((f) => f.level === 'FAIL');
const kept = findings.filter((f) => f.level === 'KEPT');
const warns = findings.filter((f) => f.level === 'WARN');

if (json) {
  console.log(JSON.stringify({ files: files.length, fail: fails.length, warn: warns.length, kept: kept.length, findings }, null, 1));
} else {
  const order = { FAIL: 0, WARN: 1, KEPT: 2 };
  findings.sort((a, b) => order[a.level] - order[b.level] || a.file.localeCompare(b.file) || a.line - b.line);
  for (const f of findings) {
    if (quiet && f.level !== 'FAIL') continue;
    console.log(`${f.level.padEnd(4)} ${f.rule.padEnd(20)} ${f.file}${f.line ? ':' + f.line : ''}  ${f.msg}`);
  }
  console.log(`\n${files.length} file(s) · ${fails.length} FAIL · ${warns.length} WARN${promptText ? ` · ${kept.length} KEPT (asked for by the prompt)` : ''}`);
  if (!files.length) console.log('No lintable files found.');
}
process.exit(fails.length ? 1 : 0);
