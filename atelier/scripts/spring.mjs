#!/usr/bin/env node
// Turn a spring into CSS: a linear() curve plus the duration it must run at, and the same spring
// in the other notations (Motion stiffness/damping, Apple damping ratio/response).
//
//   node spring.mjs 0 0.3                 bounce 0, perceived duration 0.3s
//   node spring.mjs 0.15 0.4 --name spring-soft
//   node spring.mjs --stiffness 400 --damping 30 [--mass 1]
//   node spring.mjs 0.2 0.5 --frames 60   also print values per frame (for Lottie or a seek(t) timeline)
//
// The duration printed is the settle time, longer than the perceived duration: a CSS spring
// played at any other duration is a different (wrong) curve, so ship them as a pair.

const args = process.argv.slice(2);
const opt = (name) => { const i = args.indexOf(`--${name}`); return i >= 0 ? args[i + 1] : undefined; };
const positional = args.filter((a, i) => !a.startsWith('--') && !(args[i - 1] || '').startsWith('--'));
if (args.includes('--help') || (!positional.length && !opt('stiffness'))) {
  console.log('usage: node spring.mjs <bounce 0..0.9> <perceived duration s> [--name spring] [--tolerance 0.002] [--frames fps]\n' +
    '       node spring.mjs --stiffness <k> --damping <c> [--mass 1]');
  process.exit(0);
}

const mass = Number(opt('mass') || 1);
let k, c;
if (opt('stiffness')) {
  k = Number(opt('stiffness'));
  c = Number(opt('damping') || 10);
} else {
  const bounce = Math.min(0.9, Math.max(0, Number(positional[0] || 0)));
  const response = Number(positional[1] || 0.4);
  k = (2 * Math.PI / response) ** 2 * mass;
  c = 2 * (1 - bounce) * Math.sqrt(k * mass);
}
const w0 = Math.sqrt(k / mass);
const zeta = c / (2 * Math.sqrt(k * mass));

// Closed-form position from 0 to 1, starting at rest.
function x(t) {
  if (zeta < 1) {
    const wd = w0 * Math.sqrt(1 - zeta * zeta);
    return 1 - Math.exp(-zeta * w0 * t) * (Math.cos(wd * t) + (zeta * w0 / wd) * Math.sin(wd * t));
  }
  if (zeta === 1) return 1 - Math.exp(-w0 * t) * (1 + w0 * t);
  const s = Math.sqrt(zeta * zeta - 1);
  const r1 = -w0 * (zeta - s), r2 = -w0 * (zeta + s);
  return 1 + (r2 * Math.exp(r1 * t) - r1 * Math.exp(r2 * t)) / (r1 - r2);
}

// Settle: the last moment the curve is further than 0.1% from rest.
const dt = 0.0005;
let settle = 0, peak = 0;
for (let t = 0; t < 10; t += dt) {
  const v = x(t);
  peak = Math.max(peak, v);
  if (Math.abs(1 - v) > 0.001) settle = t;
}
settle = Math.max(settle + dt, 0.05);

// Sample, then keep only the stops the eye needs (Ramer-Douglas-Peucker).
const pts = [];
for (let i = 0; i <= 1000; i++) { const p = i / 1000; pts.push([p, x(p * settle)]); }
const tol = Number(opt('tolerance') || 0.002);
function simplify(p) {
  if (p.length < 3) return p;
  const [a, b] = [p[0], p[p.length - 1]];
  let far = 0, at = 0;
  for (let i = 1; i < p.length - 1; i++) {
    const line = a[1] + (b[1] - a[1]) * (p[i][0] - a[0]) / (b[0] - a[0]);
    const d = Math.abs(p[i][1] - line);
    if (d > far) { far = d; at = i; }
  }
  return far > tol ? [...simplify(p.slice(0, at + 1)).slice(0, -1), ...simplify(p.slice(at))] : [a, b];
}
const stops = simplify(pts);
const round = (n, d = 4) => +n.toFixed(d);
const curve = stops.map(([p, v], i) => (i === 0 ? '0' : i === stops.length - 1 ? '1' : `${round(v)} ${round(p * 100, 2)}%`)).join(', ');
const name = opt('name') || 'spring';
const ms = Math.round(settle * 1000);
const response = 2 * Math.PI / w0;

console.log(`--${name}: linear(${curve});`);
console.log(`--dur-${name}: ${ms}ms;`);
console.log('');
console.log(`stops ${stops.length} · overshoot ${round(Math.max(0, peak - 1) * 100, 1)}% · settles in ${ms}ms`);
console.log(`Motion:  { type: "spring", stiffness: ${round(k, 1)}, damping: ${round(c, 2)}, mass: ${mass} }  ≈ { bounce: ${round(Math.max(0, 1 - zeta), 2)}, duration: ${round(response, 2)} }`);
console.log(`Apple:   damping ratio ${round(zeta, 2)}, response ${round(response, 2)}s`);
console.log(`GSAP / WAAPI: use the linear() string as the easing, with the duration above.`);
if (stops.length > 60) console.log('note: more than 60 stops; raise --tolerance to 0.004');

const fps = Number(opt('frames') || 0);
if (fps) {
  const n = Math.ceil(settle * fps);
  const frames = Array.from({ length: n + 1 }, (_, f) => round(x(f / fps), 4));
  frames[n] = 1;
  console.log(`\nper frame at ${fps}fps (${n + 1} values, 0 → 1):\n${JSON.stringify(frames)}`);
}
