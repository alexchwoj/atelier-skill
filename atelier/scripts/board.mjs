#!/usr/bin/env node
// Lay several pages side by side on one board, so directions and variations are compared by eye.
// Each page is shown live in a frame at desktop or phone size, scaled to fit, with its label and a
// link to open it alone. The board is a plain HTML file next to the pages; open it or shoot it.
//
//   node board.mjs directions/a.html directions/b.html directions/c.html --out directions/index.html
//   node board.mjs variations/*.html --out variations/index.html --title "Pricing variations"
//   node board.mjs a.html b.html --labels "Topo guide, Route tape" --size phone
//
// Sizes: desktop 1440x900 (default) · fold 1280x800 · phone 390x844. Labels default to each
// page's <title>, then its file name.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const args = process.argv.slice(2);
const opts = { size: 'desktop', title: 'Directions' };
const files = [];
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a.startsWith('--')) opts[a.slice(2)] = args[++i];
  else files.push(a);
}
if (!files.length) {
  console.log('usage: node board.mjs <page.html>... [--out board.html] [--labels "A, B, C"] [--title t] [--size desktop|fold|phone]');
  process.exit(0);
}

const SIZES = { desktop: [1440, 900], fold: [1280, 800], phone: [390, 844] };
const [w, h] = SIZES[opts.size] || SIZES.desktop;
const out = path.resolve(opts.out || path.join(path.dirname(files[0]), 'board.html'));
const labels = (opts.labels || '').split(',').map((s) => s.trim()).filter(Boolean);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

const items = files.map((f, i) => {
  const abs = path.resolve(f);
  if (!fs.existsSync(abs)) { console.error(`not found: ${f}`); process.exit(1); }
  const title = (fs.readFileSync(abs, 'utf8').match(/<title>([^<]*)<\/title>/i) || [])[1];
  const rel = path.relative(path.dirname(out), abs).split(path.sep).join('/');
  return { src: rel, label: labels[i] || title || path.basename(f, '.html'), letter: String.fromCharCode(65 + i) };
});

const cols = opts.size === 'phone' ? Math.min(items.length, 4) : Math.min(items.length, 3);
const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(opts.title)}</title>
<style>
  :root { color-scheme: dark; --gap: 24px; }
  * { box-sizing: border-box; }
  html, body { margin: 0; overflow-x: clip; background: #0e0e0e; color: #e8e8e8; font: 14px/1.4 ui-sans-serif, system-ui, sans-serif; }
  header { padding: 24px 32px 0; display: flex; justify-content: space-between; align-items: baseline; gap: 16px; flex-wrap: wrap; }
  h1 { font-size: 18px; font-weight: 600; margin: 0; }
  header p { margin: 0; color: #8a8a8a; }
  main { display: grid; grid-template-columns: repeat(${cols}, minmax(0, 1fr)); gap: var(--gap); padding: 24px 32px 40px; }
  @media (max-width: 900px) { main { grid-template-columns: minmax(0, 1fr); padding: 16px; } }
  figure { margin: 0; }
  .frame { position: relative; aspect-ratio: ${w} / ${h}; overflow: hidden; border-radius: 10px; border: 1px solid #2a2a2a; background: #fff; }
  iframe { position: absolute; top: 0; left: 0; width: ${w}px; height: ${h}px; border: 0; transform-origin: 0 0; }
  figcaption { display: flex; justify-content: space-between; gap: 12px; padding: 10px 2px 0; }
  .letter { font-weight: 700; margin-right: 8px; }
  a { color: #8ab4ff; }
  a:focus-visible { outline: 2px solid #8ab4ff; outline-offset: 2px; }
</style>
</head>
<body>
<header><h1>${esc(opts.title)}</h1><p>${items.length} options at ${w}×${h}</p></header>
<main>
${items.map((it) => `  <figure>
    <div class="frame"><iframe src="${esc(it.src)}?tweaks=off" title="${esc(it.label)}" loading="eager" tabindex="-1"></iframe></div>
    <figcaption><span><span class="letter">${it.letter}</span>${esc(it.label)}</span><a href="${esc(it.src)}" target="_blank" rel="noopener">Open</a></figcaption>
  </figure>`).join('\n')}
</main>
<script>
  const fit = (f) => { f.querySelector('iframe').style.transform = 'scale(' + f.clientWidth / ${w} + ')'; };
  const ro = new ResizeObserver((entries) => entries.forEach((e) => fit(e.target)));
  document.querySelectorAll('.frame').forEach((f) => { fit(f); ro.observe(f); });
</script>
</body>
</html>
`;
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, html);
console.log(`board: ${path.relative(process.cwd(), out)} (${items.length} pages at ${opts.size})`);
console.log(`look:  node ${path.join(path.dirname(fileURLToPath(import.meta.url)), 'shot.mjs')} ${path.relative(process.cwd(), out)} --sizes wide`);
