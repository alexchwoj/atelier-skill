# Lockain — Blockchain Data Security

> Reproduce the Lockain hero site **pixel-for-pixel**. Everything inside `{{ DOUBLE_BRACES }}` is a customization slot; everything else is invariant — change it only if you know why. Reproduce exactly: do not substitute fonts, round colors, shorten copy, or skip animation delays. If a constraint conflicts with a framework limit, clamp to the nearest valid value and leave a code comment — never silently change.

---

## LAYER 0 — META

```yaml
asset_id: lockain-hero-cinematic-01
category: hero
aesthetic: dark-cinematic / interactive-webgl
industry: web3 / data-security
tone: premium / cinematic
license: pro
version: 1.0
last_updated: 2026-06-01
```

---

## LAYER 1 — OPENING DECLARATION

Build a **single full-screen hero section** for **Lockain** — a **blockchain-based data-security company that encrypts, shards, and anchors enterprise data to an immutable ledger**.

Use the following **pinned** tech stack (do not substitute):

- **React 18 + Vite 6** (JavaScript / JSX — not TypeScript)
- **Tailwind CSS 3** (default config + the extensions in Layer 2/3)
- **ogl** (lightweight WebGL renderer — drives the animated background only)
- A **bespoke inline-SVG icon set** (defined in Layer 10 — no external icon library)
- Motion is done with **pure CSS keyframes + a tiny IntersectionObserver hook** — no animation library

The aesthetic is **dark, cinematic and premium**: a near-black canvas, a live interactive WebGL "gradient blinds" background that tracks the cursor, layered cinematic overlays, a shiny emerald→cyan gradient headline, and quiet glass UI. `#05060a` is the global background. Default text color is `rgba(255,255,255,0.8)`. **Do not use purple, indigo, magenta, or neon-green anywhere** — the only accent family is emerald/teal (`#3ddc97` / `#36e0d4`).

The page contains exactly two rendered pieces: a fixed **Navbar** and one **Hero** section. No other sections.

---

## LAYER 2 — FONTS

Load via Google Fonts in `index.html` `<head>` (with preconnect):

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
  rel="stylesheet"
/>
```

**Roles:**
- `Space Grotesk` (400/500/600/700) — **display / headings / logo / numbers**
- `Inter` (400/500/600/700) — **body / UI text** (also the default `sans`)
- `JetBrains Mono` (400/500) — **mono accents** (kept for future code/ledger UI)

Tailwind config extension:

```js
fontFamily: {
  sans:    ['Inter', 'system-ui', 'sans-serif'],
  display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
  mono:    ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
}
```

Base CSS:

```css
html { -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; scroll-behavior: smooth; }
body { @apply bg-ink-950 text-white/80 font-sans antialiased; overflow-x: hidden; }
```

---

## LAYER 3 — COLOR SYSTEM

Single shipped theme — define as Tailwind theme tokens (hex). Add to `tailwind.config.js → theme.extend.colors`:

```js
colors: {
  ink: {
    950: '#05060a',  // global background
    900: '#080a12',  // alt sections
    800: '#0d1018',  // raised surface
    700: '#141823',  // hairline surface
  },
  glow: {
    DEFAULT: '#3ddc97',  // primary emerald accent
    cyan:    '#36e0d4',  // secondary teal accent
    dim:     '#1b6b54',  // deep accent (gradient stop)
  },
},
```

Usage map: background `ink-950`, raised cards `white/[0.02]`, hairlines `white/[0.07]`, primary CTA `glow`, text-on-CTA `ink-950`, muted text `white/50–65`.

---

## LAYER 4 — CUSTOM CSS UTILITIES (the "design DNA")

**Invariant block.** Paste verbatim into `src/index.css` after `@tailwind base/components/utilities`.

### 4a. Layout + gradient text

```css
@layer components {
  .container-x { @apply mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12; }

  .text-gradient {
    @apply bg-clip-text text-transparent;
    background-image: linear-gradient(120deg, #ffffff 0%, #d6fff0 45%, #3ddc97 100%);
  }
}
```

### 4b. Glow border (signature card edge)

```css
.glow-border { position: relative; }
.glow-border::before {
  content: '';
  position: absolute; inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(140deg, rgba(61,220,151,0.55), rgba(54,224,212,0.08) 40%, transparent 70%);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
          mask-composite: exclude;
  pointer-events: none;
}
```

### 4c. Buttons

```css
.btn-primary {
  @apply relative inline-flex items-center justify-center gap-2 rounded-full bg-glow px-7 py-3.5 text-sm font-semibold text-ink-950 transition-all duration-300;
  box-shadow: 0 0 0 0 rgba(61,220,151,0.5);
}
.btn-primary:hover { box-shadow: 0 12px 40px -8px rgba(61,220,151,0.65); transform: translateY(-1px); }

.btn-ghost {
  @apply inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-7 py-3.5 text-sm font-semibold text-white/90 backdrop-blur transition-all duration-300 hover:border-white/30 hover:bg-white/[0.06];
}
```

### 4d. Grid texture + cinematic noise

```css
.bg-grid {
  background-image:
    linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px);
  background-size: 56px 56px;
}
.noise {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E");
}
```

### 4e. Scroll reveal

```css
.reveal { opacity: 0; transform: translateY(30px);
  transition: opacity .9s cubic-bezier(.16,1,.3,1), transform .9s cubic-bezier(.16,1,.3,1); }
.reveal.is-visible { opacity: 1; transform: translateY(0); }
```

### 4f. Selection + color-scheme

```css
:root { color-scheme: dark; }
::selection { background: rgba(61,220,151,0.25); color: #fff; }
```

---

## LAYER 5 — BACKGROUND ASSET (the centerpiece)

The hero background is **`GradientBlinds`** — a self-contained interactive WebGL component (our own shader, rendered through `ogl`). It paints vertical "blind" stripes over an animated multi-stop gradient, with a **spotlight that eases toward the cursor**. It must sit at `z-0` behind everything; all overlays above it must be `pointer-events-none` so the cursor reaches the canvas.

Install: `npm i ogl`. Create `src/components/GradientBlinds.css`:

```css
.gradient-blinds-container { position: relative; width: 100%; height: 100%; overflow: hidden; }
```

Create `src/components/GradientBlinds.jsx` — paste **verbatim** (this is design DNA):

```jsx
import { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Triangle } from 'ogl';
import './GradientBlinds.css';

const MAX_COLORS = 8;
const hexToRGB = hex => {
  const c = hex.replace('#', '').padEnd(6, '0');
  return [parseInt(c.slice(0,2),16)/255, parseInt(c.slice(2,4),16)/255, parseInt(c.slice(4,6),16)/255];
};
const prepStops = stops => {
  const base = (stops && stops.length ? stops : ['#FF9FFC', '#5227FF']).slice(0, MAX_COLORS);
  if (base.length === 1) base.push(base[0]);
  while (base.length < MAX_COLORS) base.push(base[base.length - 1]);
  const arr = [];
  for (let i = 0; i < MAX_COLORS; i++) arr.push(hexToRGB(base[i]));
  const count = Math.max(2, Math.min(MAX_COLORS, stops?.length ?? 2));
  return { arr, count };
};

const GradientBlinds = ({
  className, dpr, paused = false, gradientColors, angle = 0, noise = 0.3,
  blindCount = 16, blindMinWidth = 60, mouseDampening = 0.15, mirrorGradient = false,
  spotlightRadius = 0.5, spotlightSoftness = 1, spotlightOpacity = 1, distortAmount = 0,
  shineDirection = 'left', mixBlendMode = 'lighten'
}) => {
  const containerRef = useRef(null);
  const rafRef = useRef(null);
  const programRef = useRef(null);
  const meshRef = useRef(null);
  const geometryRef = useRef(null);
  const rendererRef = useRef(null);
  const mouseTargetRef = useRef([0, 0]);
  const lastTimeRef = useRef(0);
  const firstResizeRef = useRef(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const renderer = new Renderer({
      dpr: dpr ?? (typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1),
      alpha: true, antialias: true,
    });
    rendererRef.current = renderer;
    const gl = renderer.gl;
    const canvas = gl.canvas;
    canvas.style.width = '100%'; canvas.style.height = '100%'; canvas.style.display = 'block';
    container.appendChild(canvas);

    const vertex = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position, 0.0, 1.0); }
`;

    const fragment = `
#ifdef GL_ES
precision mediump float;
#endif
uniform vec3 iResolution; uniform vec2 iMouse; uniform float iTime;
uniform float uAngle; uniform float uNoise; uniform float uBlindCount;
uniform float uSpotlightRadius; uniform float uSpotlightSoftness; uniform float uSpotlightOpacity;
uniform float uMirror; uniform float uDistort; uniform float uShineFlip;
uniform vec3 uColor0; uniform vec3 uColor1; uniform vec3 uColor2; uniform vec3 uColor3;
uniform vec3 uColor4; uniform vec3 uColor5; uniform vec3 uColor6; uniform vec3 uColor7;
uniform int uColorCount;
varying vec2 vUv;
float rand(vec2 co){ return fract(sin(dot(co, vec2(12.9898,78.233))) * 43758.5453); }
vec2 rotate2D(vec2 p, float a){ float c = cos(a); float s = sin(a); return mat2(c,-s,s,c) * p; }
vec3 getGradientColor(float t){
  float tt = clamp(t, 0.0, 1.0); int count = uColorCount; if (count < 2) count = 2;
  float scaled = tt * float(count - 1); float seg = floor(scaled); float f = fract(scaled);
  if (seg < 1.0) return mix(uColor0, uColor1, f);
  if (seg < 2.0 && count > 2) return mix(uColor1, uColor2, f);
  if (seg < 3.0 && count > 3) return mix(uColor2, uColor3, f);
  if (seg < 4.0 && count > 4) return mix(uColor3, uColor4, f);
  if (seg < 5.0 && count > 5) return mix(uColor4, uColor5, f);
  if (seg < 6.0 && count > 6) return mix(uColor5, uColor6, f);
  if (seg < 7.0 && count > 7) return mix(uColor6, uColor7, f);
  if (count > 7) return uColor7; if (count > 6) return uColor6; if (count > 5) return uColor5;
  if (count > 4) return uColor4; if (count > 3) return uColor3; if (count > 2) return uColor2;
  return uColor1;
}
void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 uv0 = fragCoord.xy / iResolution.xy;
  float aspect = iResolution.x / iResolution.y;
  vec2 p = uv0 * 2.0 - 1.0; p.x *= aspect;
  vec2 pr = rotate2D(p, uAngle); pr.x /= aspect;
  vec2 uv = pr * 0.5 + 0.5;
  vec2 uvMod = uv;
  if (uDistort > 0.0) { float a = uvMod.y*6.0; float b = uvMod.x*6.0; float w = 0.01*uDistort;
    uvMod.x += sin(a)*w; uvMod.y += cos(b)*w; }
  float t = uvMod.x;
  if (uMirror > 0.5) { t = 1.0 - abs(1.0 - 2.0 * fract(t)); }
  vec3 base = getGradientColor(t);
  vec2 offset = vec2(iMouse.x/iResolution.x, iMouse.y/iResolution.y);
  float d = length(uv0 - offset); float r = max(uSpotlightRadius, 1e-4); float dn = d / r;
  float spot = (1.0 - 2.0 * pow(dn, uSpotlightSoftness)) * uSpotlightOpacity;
  vec3 cir = vec3(spot);
  float stripe = fract(uvMod.x * max(uBlindCount, 1.0));
  if (uShineFlip > 0.5) stripe = 1.0 - stripe;
  vec3 ran = vec3(stripe);
  vec3 col = cir + base - ran;
  col += (rand(gl_FragCoord.xy + iTime) - 0.5) * uNoise;
  fragColor = vec4(col, 1.0);
}
void main() { vec4 color; mainImage(color, vUv * iResolution.xy); gl_FragColor = color; }
`;

    const { arr: colorArr, count: colorCount } = prepStops(gradientColors);
    const uniforms = {
      iResolution: { value: [gl.drawingBufferWidth, gl.drawingBufferHeight, 1] },
      iMouse: { value: [0, 0] }, iTime: { value: 0 },
      uAngle: { value: (angle * Math.PI) / 180 }, uNoise: { value: noise },
      uBlindCount: { value: Math.max(1, blindCount) },
      uSpotlightRadius: { value: spotlightRadius }, uSpotlightSoftness: { value: spotlightSoftness },
      uSpotlightOpacity: { value: spotlightOpacity }, uMirror: { value: mirrorGradient ? 1 : 0 },
      uDistort: { value: distortAmount }, uShineFlip: { value: shineDirection === 'right' ? 1 : 0 },
      uColor0: { value: colorArr[0] }, uColor1: { value: colorArr[1] }, uColor2: { value: colorArr[2] },
      uColor3: { value: colorArr[3] }, uColor4: { value: colorArr[4] }, uColor5: { value: colorArr[5] },
      uColor6: { value: colorArr[6] }, uColor7: { value: colorArr[7] }, uColorCount: { value: colorCount },
    };

    const program = new Program(gl, { vertex, fragment, uniforms });
    programRef.current = program;
    const geometry = new Triangle(gl); geometryRef.current = geometry;
    const mesh = new Mesh(gl, { geometry, program }); meshRef.current = mesh;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      renderer.setSize(rect.width, rect.height);
      uniforms.iResolution.value = [gl.drawingBufferWidth, gl.drawingBufferHeight, 1];
      if (blindMinWidth && blindMinWidth > 0) {
        const maxByMinWidth = Math.max(1, Math.floor(rect.width / blindMinWidth));
        const effective = blindCount ? Math.min(blindCount, maxByMinWidth) : maxByMinWidth;
        uniforms.uBlindCount.value = Math.max(1, effective);
      } else { uniforms.uBlindCount.value = Math.max(1, blindCount); }
      if (firstResizeRef.current) {
        firstResizeRef.current = false;
        const cx = gl.drawingBufferWidth / 2, cy = gl.drawingBufferHeight / 2;
        uniforms.iMouse.value = [cx, cy]; mouseTargetRef.current = [cx, cy];
      }
    };
    resize();
    const ro = new ResizeObserver(resize); ro.observe(container);

    const onPointerMove = e => {
      const rect = canvas.getBoundingClientRect(); const scale = renderer.dpr || 1;
      const x = (e.clientX - rect.left) * scale;
      const y = (rect.height - (e.clientY - rect.top)) * scale;
      mouseTargetRef.current = [x, y];
      if (mouseDampening <= 0) uniforms.iMouse.value = [x, y];
    };
    canvas.addEventListener('pointermove', onPointerMove);

    const loop = t => {
      rafRef.current = requestAnimationFrame(loop);
      uniforms.iTime.value = t * 0.001;
      if (mouseDampening > 0) {
        if (!lastTimeRef.current) lastTimeRef.current = t;
        const dt = (t - lastTimeRef.current) / 1000; lastTimeRef.current = t;
        const tau = Math.max(1e-4, mouseDampening);
        let factor = 1 - Math.exp(-dt / tau); if (factor > 1) factor = 1;
        const target = mouseTargetRef.current; const cur = uniforms.iMouse.value;
        cur[0] += (target[0] - cur[0]) * factor; cur[1] += (target[1] - cur[1]) * factor;
      } else { lastTimeRef.current = t; }
      if (!paused && programRef.current && meshRef.current) {
        try { renderer.render({ scene: meshRef.current }); } catch (e) { console.error(e); }
      }
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener('pointermove', onPointerMove);
      ro.disconnect();
      if (canvas.parentElement === container) container.removeChild(canvas);
      const callIfFn = (o, k) => { if (o && typeof o[k] === 'function') o[k].call(o); };
      callIfFn(programRef.current, 'remove'); callIfFn(geometryRef.current, 'remove');
      callIfFn(meshRef.current, 'remove'); callIfFn(rendererRef.current, 'destroy');
      programRef.current = geometryRef.current = meshRef.current = rendererRef.current = null;
    };
  }, [dpr, paused, gradientColors, angle, noise, blindCount, blindMinWidth, mouseDampening,
      mirrorGradient, spotlightRadius, spotlightSoftness, spotlightOpacity, distortAmount, shineDirection]);

  return (
    <div ref={containerRef} className={`gradient-blinds-container ${className}`}
      style={{ ...(mixBlendMode && { mixBlendMode }) }} />
  );
};

export default GradientBlinds;
```

**Props used in the hero (do not change):**

```jsx
<GradientBlinds
  className="h-full w-full"
  gradientColors={['#36e0d4', '#3ddc97', '#1b6b54', '#0d1018']}
  angle={20}
  noise={0.25}
  blindCount={16}
  blindMinWidth={55}
  spotlightRadius={0.55}
  spotlightSoftness={1}
  spotlightOpacity={0.9}
  mouseDampening={0.25}
  distortAmount={0}
  shineDirection="left"
  mixBlendMode="lighten"
/>
```

| Prop | Value | Effect |
|---|---|---|
| gradientColors | teal→emerald→deep→ink | brand-only palette, no purple |
| angle | 20 | slight diagonal sweep |
| noise | 0.25 | faint cinematic grain |
| blindCount / blindMinWidth | 16 / 55 | ~16 stripes, min 55px each |
| spotlightRadius / Opacity | 0.55 / 0.9 | soft cursor halo |
| mouseDampening | 0.25 | spotlight eases ~0.25s toward cursor |
| mixBlendMode | lighten | canvas blends over the dark section |

---

## LAYER 6 — SHARED LOGIC

### `useReveal` hook — `src/hooks/useReveal.js`

```js
import { useEffect } from 'react';
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach(el => el.classList.add('is-visible')); return; }
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}
```

> Entry motion for above-the-fold hero content uses **CSS animations** (`animate-fade-up`, `animate-fade-in` with per-element `animationDelay`), not the observer. The observer is for any below-the-fold `.reveal` blocks you add later.

---

## LAYER 7 — SECTIONS

### COMPONENT A — Navbar (`src/components/Navbar.jsx`)

**Block 1 · Container** — `<header>` fixed, `inset-x-0 top-0 z-50`, transitions all 500ms. When `window.scrollY > 24`: add `border-b border-white/[0.06] bg-ink-950/70 backdrop-blur-xl`; otherwise `border-b border-transparent`. Inner `<nav className="container-x flex h-20 items-center justify-between py-4">`.

**Block 4 · Elements**
1. **Logo** (left): `<a>` group, gap-2.5. Mark = inline-SVG `LogoMark` (Layer 10) `h-8 w-8`, on hover rotates `+8deg` over 500ms. Wordmark: `font-display text-lg font-semibold tracking-tight text-white` reading **`Lock`** + `<span className="text-glow">ain</span>`.
2. **Center links** (hidden below `md`): `Platform`, `Solutions`, `How it works`, `Security`. Each `rounded-full px-4 py-2 text-sm text-white/60 hover:text-white`. (All `href="#"` in the hero-only build.) Use `key={l.label}`.
3. **Right cluster** (hidden below `md`): text link **`Sign in`** (`text-sm font-medium text-white/70 hover:text-white`) + primary CTA **`Get started`** using `.btn-primary !px-5 !py-2.5` with trailing `ArrowIcon h-4 w-4`.
4. **Hamburger** (only `md:hidden`): `h-10 w-10 rounded-full border border-white/10`, three bars that morph to an X when open (top bar `translate-y-2 rotate-45`, middle `opacity-0`, bottom `-translate-y-2 -rotate-45`).
5. **Mobile sheet** (`open` state): below header, `border-t border-white/[0.06] bg-ink-950/95 backdrop-blur-xl px-6 py-6`. Stacked links (`rounded-xl px-4 py-3 text-base text-white/70 hover:bg-white/5`) + full-width `Get started`. Clicking any link sets `open=false`.

**Block 8 · State** — `useState(scrolled)` from a passive `scroll` listener; `useState(open)` for the mobile sheet.

---

### COMPONENT B — Hero (`src/components/Hero.jsx`)

**Block 1 · Container** — `<section className="relative flex min-h-screen w-full items-center overflow-hidden">`.

**Block 2 · Background stack (exact z-order)**
- `z-0`: `<div className="absolute inset-0 z-0">` wrapping `<GradientBlinds … />` (props from Layer 5).
- `z-10` overlays, **all `pointer-events-none`** so the cursor reaches the canvas:
  1. `bg-ink-950/45`
  2. `bg-gradient-to-b from-ink-950/80 via-ink-950/35 to-ink-950`
  3. `bg-gradient-to-r from-ink-950/85 via-transparent to-ink-950/40`
  4. `bg-grid opacity-40`
  5. radial accent — inline `style={{ background: 'radial-gradient(120% 80% at 20% 30%, rgba(61,220,151,0.10), transparent 55%)' }}`
- `z-20`: content wrapper `container-x pointer-events-none relative z-20 pt-28 pb-20`. (Wrapper is click-through; the CTA row opts back in with `pointer-events-auto` so buttons stay clickable while the spotlight tracks everywhere else.)

**Block 4 · Elements** (inside `<div className="max-w-3xl">`)
1. **Headline** `<h1>` — `font-display text-5xl font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl`, class `animate-fade-up`, `style={{ animationDelay: '0.1s' }}`. Content (exact):
   - line 1: `Your data,`
   - `<br />`
   - line 2 wrapped in `<span className="text-gradient">`: `locked by blockchain.`
2. **Sub-paragraph** `<p>` — `mt-7 max-w-xl text-lg leading-relaxed text-white/65 animate-fade-up`, `animationDelay: '0.2s'`. Text (exact, em-dash):
   `Lockain encrypts, shards, and anchors your enterprise data to an immutable ledger — every access is verified, every change is traceable, and nothing can be silently altered.`
3. **CTA row** `<div className="pointer-events-auto mt-9 flex flex-wrap items-center gap-4 animate-fade-up">`, `animationDelay: '0.3s'`:
   - Primary `<a href="#cta" className="btn-primary">` → text **`Request a demo`** + `ArrowIcon h-4 w-4`.
   - Ghost `<a href="#platform" className="btn-ghost">` → `ShieldIcon h-4 w-4 text-glow` + text **`Explore the platform`**.
4. **Stats strip** `<div className="mt-14 grid max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] backdrop-blur animate-fade-up">`, `animationDelay: '0.4s'`. Three cells, each `bg-ink-950/30 px-5 py-5 sm:px-6` with value `font-display text-2xl font-semibold text-white sm:text-3xl` and label `mt-1 text-xs text-white/50 sm:text-sm`:
   - `4.2B+` — `Records encrypted`
   - `99.99%` — `Uptime SLA`
   - `38ms` — `Verification latency`
5. **Scroll cue** (`absolute bottom-8 left-1/2 z-20 -translate-x-1/2`, `hidden lg:flex`, `pointer-events-none`): `SparkIcon h-4 w-4 animate-float text-glow/70` above a `h-10 w-px bg-gradient-to-b from-white/40 to-transparent` line.

**Block 5 · Animation** — entry timeline via CSS `animation-delay`: h1 `0.1s` → p `0.2s` → CTA `0.3s` → stats `0.4s`. The badge pill that previously sat above the headline is **removed** — h1 is the first element.

**Block 6 · Responsive** — headline scales `text-5xl → sm:text-6xl → lg:text-7xl`; stats stay 3-col; scroll cue desktop-only.

---

## LAYER 8 — ANIMATION STANDARDS

Add to `tailwind.config.js → theme.extend`:

```js
keyframes: {
  'fade-up':  { '0%': { opacity:'0', transform:'translateY(24px)' }, '100%': { opacity:'1', transform:'translateY(0)' } },
  'fade-in':  { '0%': { opacity:'0' }, '100%': { opacity:'1' } },
  float:      { '0%,100%': { transform:'translateY(0)' }, '50%': { transform:'translateY(-10px)' } },
  shimmer:    { '0%': { backgroundPosition:'-200% 0' }, '100%': { backgroundPosition:'200% 0' } },
  'pulse-ring': { '0%': { transform:'scale(0.9)', opacity:'0.7' }, '100%': { transform:'scale(1.6)', opacity:'0' } },
},
animation: {
  'fade-up':   'fade-up 0.9s cubic-bezier(0.16,1,0.3,1) both',
  'fade-in':   'fade-in 1.2s ease both',
  float:       'float 6s ease-in-out infinite',
  shimmer:     'shimmer 6s linear infinite',
  'pulse-ring':'pulse-ring 2.6s cubic-bezier(0.16,1,0.3,1) infinite',
},
```

Standard ease everywhere: `cubic-bezier(0.16, 1, 0.3, 1)`. Hero entry delays: `0.1 / 0.2 / 0.3 / 0.4s`. Reveal transition: `0.9s` same ease.

---

## LAYER 9 — RESPONSIVE STANDARDS

- Mobile-first; scale up with `sm: md: lg:`.
- Container padding: `px-6 sm:px-8 lg:px-12` (via `.container-x`, `max-w-7xl`).
- Hero headline: `text-5xl sm:text-6xl lg:text-7xl`, `leading-[1.04]`.
- Navbar height `h-20`; center links + right cluster hidden below `md`, replaced by hamburger + slide-down sheet.
- Mobile menu required (4 links): toggled bars→X, `bg-ink-950/95 backdrop-blur-xl`, stacked links, closes on selection.

---

## LAYER 10 — ICON SET (bespoke inline SVG — no external library)

Define every icon as an inline-SVG React component in `src/components/Icons.jsx`. Shared stroke base: `fill:none, stroke:currentColor, strokeWidth:1.6, strokeLinecap:'round', strokeLinejoin:'round'`, `viewBox="0 0 24 24"`. Only these are used in the hero build:

```
- ShieldIcon  → ghost CTA + (future) security marks. Path: shield body + inner check.
- ArrowIcon   → primary CTAs / "get started". Path: horizontal line + chevron head (M5 12h14 M13 6l6 6-6 6).
- SparkIcon   → scroll cue / "magic" accent. 8-ray spark.
- LogoMark    → brand mark (24/32 viewBox). Padlock shackle + rounded body + center dot, stroked with an
                emerald→cyan linearGradient id="lg" (#3ddc97 → #36e0d4); center dot solid #3ddc97.
```

`LogoMark` (exact):

```jsx
export const LogoMark = (p) => (
  <svg viewBox="0 0 32 32" {...p}>
    <defs>
      <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#3ddc97" /><stop offset="1" stopColor="#36e0d4" />
      </linearGradient>
    </defs>
    <path d="M11 14v-2.5a5 5 0 0 1 10 0V14" fill="none" stroke="url(#lg)" strokeWidth="2" strokeLinecap="round" />
    <rect x="8.5" y="14" width="15" height="11" rx="3" fill="none" stroke="url(#lg)" strokeWidth="2" />
    <circle cx="16" cy="19.5" r="1.9" fill="#3ddc97" />
  </svg>
);
```

Do/don't: use `ArrowIcon` (not a chevron) for all CTAs; never import lucide/phosphor/etc. — the icon kit is self-contained.

> The repo also ships `ChainIcon, LockIcon, PulseIcon, NodesIcon, KeyIcon, FingerIcon, GlobeIcon` in the same file for optional future sections; the rendered hero uses only the four above.

---

## LAYER 11 — FILE TREE + ENTRY + REPRODUCE-EXACTLY CLAUSE

**Project files:**

```text
index.html                 # fonts preconnect + meta, lang="en", title "Lockain — Blockchain Data Security"
public/favicon.svg         # padlock mark on #05060a
tailwind.config.js         # colors (ink/glow), fonts, keyframes/animation above; content: index.html + src/**/*.{js,jsx}
postcss.config.js          # tailwindcss + autoprefixer
vite.config.js             # @vitejs/plugin-react
src/main.jsx               # React 18 createRoot → <App/>, imports ./index.css
src/index.css              # @tailwind base/components/utilities + Layer 4 utilities
src/App.jsx                # renders <Navbar/> then <Hero/> inside <div className="relative min-h-screen bg-ink-950">
src/hooks/useReveal.js
src/components/Icons.jsx
src/components/Navbar.jsx
src/components/Hero.jsx
src/components/GradientBlinds.jsx
src/components/GradientBlinds.css
```

**`src/App.jsx` (exact):**

```jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-950">
      <Navbar />
      <Hero />
    </div>
  )
}
```

**Reproduce exactly. Do not:**
- Substitute fonts — it is Space Grotesk (display) + Inter (body) + JetBrains Mono (mono), nothing "similar".
- Round colors — `#05060a`, `#3ddc97`, `#36e0d4`, `#1b6b54`, `#0d1018` exactly.
- Shorten or rephrase copy — every headline, paragraph, label, and CTA string is verbatim above.
- Drop the `pointer-events-none` rule on overlays — it is what makes the background interactive.
- Skip animation delays (`0.1/0.2/0.3/0.4s`) or change the ease `cubic-bezier(0.16,1,0.3,1)`.
- Swap `GradientBlinds` props (palette/angle/blindCount/dampening) — they define the look.
- Import any external icon library — use the bespoke inline-SVG kit only.

If a constraint conflicts with a framework limit (e.g. an unavailable font weight), clamp to the nearest valid value and note it in a comment — never silently change.
