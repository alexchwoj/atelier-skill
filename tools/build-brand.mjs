#!/usr/bin/env node
// Builds the Atelier logo files in brand/ from code, so the mark can be tweaked and rebuilt.
//
//   node tools/build-brand.mjs
//
// The wordmark outline (brand/wordmark.svg) comes from the skill's own exporter:
//   node atelier/scripts/wordmark.mjs --text "atelier" --font "Inter Tight" --weight 600 --tracking -35 --color "#ffffff" --out brand/wordmark.svg

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'brand');

const RED_TOP = '#FF7A5C';
const RED_BOTTOM = '#C8102E';
const RED_INK = '#D3122B';
const INK = '#141414';

// iOS-style continuous-corner tile: a superellipse, not a rounded rectangle.
function squircle(size = 1024, n = 5, steps = 240) {
  const r = size / 2;
  const pts = [];
  for (let i = 0; i < steps; i++) {
    const t = (i / steps) * Math.PI * 2;
    const c = Math.cos(t), s = Math.sin(t);
    pts.push([r + r * Math.sign(c) * Math.abs(c) ** (2 / n), r + r * Math.sign(s) * Math.abs(s) ** (2 / n)]);
  }
  return 'M' + pts.map((p) => p.map((v) => v.toFixed(1)).join(' ')).join('L') + 'Z';
}

// The mark: a fountain-pen nib on a lit red tile, iOS style (tile gradient, top glow,
// a glyph with its own gradient and a soft drop shadow).
function iconBody(id) {
  const sq = squircle();
  return `<defs>
    <linearGradient id="${id}-bg" x1="0.2" y1="0" x2="0.8" y2="1">
      <stop offset="0" stop-color="${RED_TOP}"/>
      <stop offset="1" stop-color="${RED_BOTTOM}"/>
    </linearGradient>
    <radialGradient id="${id}-glow" cx="0.5" cy="0" r="0.9">
      <stop offset="0" stop-color="#fff" stop-opacity=".28"/>
      <stop offset=".6" stop-color="#fff" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="${id}-nib" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#FFFFFF"/>
      <stop offset="1" stop-color="#F1E9E6"/>
    </linearGradient>
    <filter id="${id}-shadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="22" stdDeviation="26" flood-color="#6E0012" flood-opacity=".38"/>
    </filter>
  </defs>
  <path d="${sq}" fill="url(#${id}-bg)"/>
  <path d="${sq}" fill="url(#${id}-glow)"/>
  <g filter="url(#${id}-shadow)">
    <path d="M512 872 L318 548 Q300 516 318 486 L470 214 Q512 150 554 214 L706 486 Q724 516 706 548 Z" fill="url(#${id}-nib)"/>
  </g>
  <path d="M512 476 L512 872" stroke="${RED_INK}" stroke-width="22" stroke-linecap="round"/>
  <circle cx="512" cy="460" r="52" fill="${RED_INK}"/>`;
}

const svg = (viewBox, label, body) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" role="img" aria-label="${label}">\n  <title>${label}</title>\n  ${body}\n</svg>\n`;

// Wordmark path and its viewBox, recoloured per lockup.
const wm = fs.readFileSync(path.join(OUT, 'wordmark.svg'), 'utf8');
const wmViewBox = wm.match(/viewBox="([^"]+)"/)[1].split(/\s+/).map(Number);
const wmPath = wm.match(/ d="([^"]+)"/)[1];

// Lockup: icon 120 tall, wordmark 76 tall, 26 apart, centred on each other.
function lockup(color) {
  const ICON = 120, WM_H = 76, GAP = 26;
  const scale = WM_H / wmViewBox[3];
  const wmW = wmViewBox[2] * scale;
  const width = ICON + GAP + wmW;
  const body = `<g transform="scale(${ICON / 1024})">\n  ${iconBody('l')}\n  </g>
  <svg x="${ICON + GAP}" y="${(ICON - WM_H) / 2}" width="${wmW.toFixed(2)}" height="${WM_H}" viewBox="${wmViewBox.join(' ')}">
    <path fill="${color}" d="${wmPath}"/>
  </svg>`;
  return svg(`0 0 ${width.toFixed(2)} ${ICON}`, 'Atelier', body);
}

fs.writeFileSync(path.join(OUT, 'atelier-icon.svg'), svg('0 0 1024 1024', 'Atelier', iconBody('i')));
fs.writeFileSync(path.join(OUT, 'atelier-logo.svg'), lockup('#FFFFFF'));
fs.writeFileSync(path.join(OUT, 'atelier-logo-dark.svg'), lockup(INK));
console.log('brand: atelier-icon.svg, atelier-logo.svg (white text), atelier-logo-dark.svg (ink text)');
