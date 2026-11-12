#!/usr/bin/env node
// Builds the before/after examples on the project site (docs/index.html).
//
//   node tools/build-site.mjs            screenshots missing pictures, then writes the example cards
//   node tools/build-site.mjs --shots    retakes every screenshot
//
// Each example is docs/examples/<slug>/ with without.html (the model on its own) and with.html
// (the same request with Atelier), listed in docs/examples/examples.json in page order.

import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DOCS = path.join(ROOT, 'docs');
const EX = path.join(DOCS, 'examples');
const SHOT = path.join(ROOT, 'atelier', 'scripts', 'shot.mjs');
const retake = process.argv.includes('--shots');

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const examples = JSON.parse(fs.readFileSync(path.join(EX, 'examples.json'), 'utf8'));

for (const e of examples) {
  for (const side of e.solo || e.video ? ['with'] : ['without', 'with']) {
    const html = path.join(EX, e.slug, `${side}.html`);
    const png = path.join(EX, e.slug, `${side}.png`);
    if (!fs.existsSync(html)) throw new Error(`missing ${path.relative(ROOT, html)}`);
    if (fs.existsSync(png) && !retake) continue;
    const tmp = path.join(EX, e.slug, '.shot');
    const size = e.size || 'fold';
    // shotQuery (for example ?state=check&bare) captures a mock in a chosen state.
    const target = e.shotQuery ? pathToFileURL(html).href + e.shotQuery : html;
    spawnSync(process.execPath, [SHOT, target, '--out', tmp, '--sizes', size], { stdio: 'ignore' });
    fs.copyFileSync(path.join(tmp, `${size}.png`), png);
    fs.rmSync(tmp, { recursive: true, force: true });
    console.log(`shot ${e.slug}/${side}.png`);
  }
}

const KNOB = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 6-6 6 6 6M15 6l6 6-6 6"/></svg>';
let group = null;
const heading = (e) => {
  if (!e.group || e.group === group) return '';
  group = e.group;
  return `\n    <h3 class="group" id="${esc(group.toLowerCase().replace(/[^a-z]+/g, '-'))}">${esc(group)}</h3>`;
};
// Screenshot size by capture: fold is 1280x800 (16:10), wide is 1920x1080 (16:9); the frame takes the same ratio so nothing is cropped.
const dims = (e) => (e.size === 'wide' ? [1920, 1080] : [1280, 800]);
// solo: show only the Atelier result (no without/with slider), for example game mocks.
const frame = (e, i) => {
  const [w, h] = dims(e);
  const lazy = i ? ' loading="lazy"' : '';
  // video: a recorded clip (with.mp4, poster with.png) played only while on screen and never under reduced motion.
  if (e.video) return `      <div class="shot vid" style="aspect-ratio:${w}/${h}">
        <video src="examples/${e.slug}/with.mp4" poster="examples/${e.slug}/with.png" width="${w}" height="${h}" muted loop playsinline preload="none" aria-label="${esc(e.title)} built with Atelier, recorded in a browser"></video>
        <button class="vid-toggle" type="button" aria-pressed="false">Pause</button>
      </div>`;
  if (e.solo) return `      <div class="shot" style="aspect-ratio:${w}/${h}">
        <img src="examples/${e.slug}/with.png" alt="${esc(e.title)} built with Atelier" width="${w}" height="${h}"${lazy}>
      </div>`;
  return `      <div class="ba" style="aspect-ratio:${w}/${h}">
        <img class="after" src="examples/${e.slug}/with.png" alt="${esc(e.title)} built with Atelier" width="${w}" height="${h}"${lazy}>
        <img class="before" src="examples/${e.slug}/without.png" alt="${esc(e.title)} built without Atelier" width="${w}" height="${h}"${lazy}>
        <span class="tag l">${esc((e.labels || [])[0] || 'Without')}</span><span class="tag r">${esc((e.labels || [])[1] || 'With Atelier')}</span>
        <span class="bar"></span><span class="knob">${KNOB}</span>
        <input type="range" min="0" max="100" value="50" aria-label="Compare ${esc(e.title)} without and with Atelier">
      </div>`;
};
const links = (e) => (e.solo || e.video
  ? `<a href="examples/${e.slug}/with.html">Open it</a>`
  : `<a href="examples/${e.slug}/without.html">Open ${esc(((e.labels || [])[0] || 'without').toLowerCase())}</a><a href="examples/${e.slug}/with.html">Open ${esc(((e.labels || [])[1] || 'with Atelier').replace(/^With/, 'with').replace(/^After/, 'after'))}</a>`);
const cards = examples.map((e, i) => `${heading(e)}
    <article class="ex" aria-labelledby="ex-${e.slug}">
      <div class="ex-head">
        <h4 id="ex-${e.slug}">${esc(e.title)}<small>${esc(e.kind)}</small></h4>
        <blockquote>“${esc(e.request)}”</blockquote>
      </div>
${frame(e, i)}
      <div class="ex-foot">
        <span>${esc(e.note || '')}</span>
        <span class="links">${links(e)}</span>
      </div>
    </article>`).join('\n');

const groups = [...new Set(examples.map((e) => e.group).filter(Boolean))];
const jump = groups.length > 1
  ? `\n    <nav class="jump" aria-label="Example types">${groups.map((g) => `<a href="#${esc(g.toLowerCase().replace(/[^a-z]+/g, '-'))}">${esc(g)}</a>`).join('')}</nav>`
  : '';

const index = path.join(DOCS, 'index.html');
const page = fs.readFileSync(index, 'utf8');
const start = '<!-- EXAMPLES -->';
const end = '<!-- /EXAMPLES -->';
const a = page.indexOf(start);
if (a < 0) throw new Error('docs/index.html has no <!-- EXAMPLES --> marker');
const b = page.indexOf(end);
const out = page.slice(0, a) + start + jump + cards + '\n' + end + page.slice(b < 0 ? a + start.length : b + end.length);
fs.writeFileSync(index, out);
console.log(`docs/index.html: ${examples.length} examples`);
