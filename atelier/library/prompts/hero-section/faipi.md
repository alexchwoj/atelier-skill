# FaiPi — Decision-Intelligence Hero · Fivefold Prompt

```yaml
asset_id: faipi-cosmic-hero-01
category: hero
aesthetic: dark-cinematic · cosmic · monochrome-foreground
industry: saas / decision-intelligence
tone: cinematic · confident · premium
preview_video: https://cdn.5sdesign.art/projects/faipi/hero.mp4
license: free
version: 1.0
last_updated: 2026-06-23
notes: Single full-screen hero (no scroll). Full-bleed looping background video,
 elegant Instrument Serif headline, content anchored to the bottom of the viewport,
 and an infinite logo marquee. Pure-black canvas, strictly monochrome foreground
 over the video. React 18 + Vite + Tailwind v4 (@theme block, no config file).
```

> Paste this whole document into any AI website builder (Claude Code, Cursor, v0, Lovable, Bolt, Windsurf) to reproduce the FaiPi hero **exactly**. Everything below is the spec; the **Source Files** section at the end is the authoritative truth — when in doubt, match it character-for-character.

---

## 1 · WHAT TO BUILD

Build a **single full-screen hero section** for **FaiPi** — a **decision-intelligence platform that turns scattered data, uncertainty, and instinct into clear, confident decisions.**

Use the following **pinned** stack (do not substitute):

- **React 18 + Vite** — plain **JSX**, no TypeScript.
- **Tailwind CSS v4** through the `@tailwindcss/vite` plugin — configured with `@import "tailwindcss";` and an `@theme { }` block inside `src/index.css`. **There is no `tailwind.config.js`** — fonts are exposed as theme tokens, not in a JS config.
- **Plain CSS `@keyframes`** for all motion — **no animation library** (no Framer Motion, no `motion`).
- **Inline SVG** for every icon — **no icon library** (no lucide, no heroicons).

The aesthetic is **dark, cinematic, cosmic.** A full-bleed looping background video carries all the color and atmosphere; an elegant serif headline and the rest of the content sit anchored to the **bottom** of the viewport, with an infinite logo marquee underneath. The global background is pure black `#000`. The foreground UI is strictly **monochrome** — white text and white pill buttons floating over the video.

**Do not:** add a colored accent to the foreground UI, introduce a second typeface beyond the two below, swap the inline SVGs for an icon library, add scroll-reveal or entrance animations, or replace the background video with a placeholder. The only foreground colors are white and a near-black (`neutral-900`) used for text on the white pills.

---

## 2 · FONTS

Load two families from Google Fonts in `index.html` `<head>` (preconnect first):

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
```

| Role | Family | Token / class |
|---|---|---|
| All UI / body / nav / buttons / marquee | **Inter** (400 / 500 / 600) | `--font-sans` → `font-sans` |
| Hero headline only (roman + italic available) | **Instrument Serif** | `--font-serif` → `font-serif` |

Both families are exposed through the Tailwind v4 `@theme` block (see Source Files). `body` uses `var(--font-sans)`, antialiased. The headline is the **only** element set in Instrument Serif (`font-serif font-normal`); everything else is Inter.

---

## 3 · COLOR SYSTEM (monochrome over video)

Every foreground value is white, a white opacity, or `neutral-900`. All saturation comes from the video itself.

| Token | Value | Usage |
|---|---|---|
| background | `#000000` | page background, behind the video |
| foreground | `#ffffff` | primary text, brand wordmark |
| muted-strong | `rgba(255,255,255,0.70)` | aside paragraph, nav links |
| muted-marquee | `rgba(255,255,255,0.75)` | marquee logo text |
| muted-soft | `rgba(255,255,255,0.60)` | "Trusted by teams at" label |
| border | `rgba(255,255,255,0.20)` | "Watch Demo" ghost hairline |
| cta-surface | `#ffffff` | primary pill buttons |
| cta-text | `neutral-900` (`#171717`) | text on the white pills |
| ghost-surface | `rgba(0,0,0,0.30)` + `backdrop-blur-sm` | "Watch Demo" button |

No colored accent appears anywhere in the foreground UI.

---

## 4 · INVARIANT CSS (paste verbatim into `src/index.css`)

This is the design DNA — paste it as-is. It declares the two font tokens, the page reset, and the marquee animation (scrolls left, loops forever, pauses on hover). A self-contained **cosmic monolith** block is also included: a pure-CSS animated focal "portal" (nebula + drifting stars + shimmer + glow + reflection) kept available for an optional foreground accent. The rendered hero uses the video background, so the monolith is mounted only if you choose to layer it in.

```css
@import "tailwindcss";

@theme {
  --font-sans: "Inter", system-ui, -apple-system, sans-serif;
  --font-serif: "Instrument Serif", Georgia, serif;
}

html, body, #root { height: 100%; }
body {
  margin: 0;
  background: #000;
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
}

/* ============================================================
   Cosmic Monolith — animated focal "portal"
   ============================================================ */
@keyframes nebula-drift {
  0%   { transform: translate(-12%, -8%) rotate(0deg) scale(1.1); }
  50%  { transform: translate(10%, 6%) rotate(180deg) scale(1.25); }
  100% { transform: translate(-12%, -8%) rotate(360deg) scale(1.1); }
}
@keyframes star-drift {
  from { background-position: 0 0, 0 0, 0 0, 0 0; }
  to   { background-position: 0 -300px, 0 -220px, 0 -160px, 0 -90px; }
}
@keyframes twinkle {
  0%, 100% { opacity: 0.55; }
  50%      { opacity: 1; }
}
@keyframes shimmer-sweep {
  0%   { transform: translateY(140%); opacity: 0; }
  18%  { opacity: 0.55; }
  82%  { opacity: 0.55; }
  100% { transform: translateY(-140%); opacity: 0; }
}
@keyframes float-soft {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-10px); }
}
@keyframes glow-pulse {
  0%, 100% { opacity: 0.45; transform: translate(-50%, -8%) scale(1); }
  50%      { opacity: 0.8;  transform: translate(-50%, -8%) scale(1.07); }
}

.monolith-wrap {
  position: absolute;
  left: 50%;
  top: 47%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: none;
}

.monolith {
  position: relative;
  z-index: 2;
  width: clamp(150px, 15vw, 232px);
  height: clamp(330px, 47vh, 548px);
  border-radius: 5px;
  overflow: hidden;
  animation: float-soft 7s ease-in-out infinite;
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.45),
    0 40px 120px rgba(150, 110, 220, 0.28);
}

.monolith-glow {
  position: absolute;
  z-index: 0;
  left: 50%;
  top: 0;
  width: clamp(300px, 32vw, 480px);
  height: clamp(440px, 60vh, 720px);
  transform: translate(-50%, -8%);
  background: radial-gradient(closest-side,
    rgba(255, 178, 138, 0.40),
    rgba(186, 124, 222, 0.20) 46%,
    transparent 72%);
  filter: blur(24px);
  animation: glow-pulse 6s ease-in-out infinite;
}

.monolith-nebula {
  position: absolute;
  inset: -45%;
  background:
    radial-gradient(circle at 30% 22%, rgba(120, 165, 255, 0.95), transparent 42%),
    radial-gradient(circle at 72% 58%, rgba(255, 128, 182, 0.85), transparent 44%),
    radial-gradient(circle at 48% 88%, rgba(255, 202, 132, 0.9), transparent 46%),
    linear-gradient(180deg, #160f3a 0%, #3a1a52 44%, #b65a8a 78%, #ffd8a0 100%);
  animation: nebula-drift 26s linear infinite;
}

.monolith-stars {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(1.6px 1.6px at 20% 30%, #fff, transparent),
    radial-gradient(1.2px 1.2px at 60% 50%, #fff, transparent),
    radial-gradient(1.6px 1.6px at 82% 18%, #fff, transparent),
    radial-gradient(1.2px 1.2px at 35% 72%, #fff, transparent),
    radial-gradient(1px 1px   at 75% 82%, #fff, transparent),
    radial-gradient(1.6px 1.6px at 50% 40%, #fff, transparent),
    radial-gradient(1px 1px   at 12% 86%, #fff, transparent),
    radial-gradient(1.2px 1.2px at 90% 62%, #fff, transparent);
  background-repeat: repeat;
  background-size: 200px 300px, 240px 320px, 180px 260px, 220px 300px;
  mix-blend-mode: screen;
  opacity: 0.9;
  animation: star-drift 20s linear infinite, twinkle 3.4s ease-in-out infinite;
}

.monolith-shimmer {
  position: absolute;
  left: 0;
  right: 0;
  height: 42%;
  background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.55), transparent);
  mix-blend-mode: screen;
  animation: shimmer-sweep 6.5s ease-in-out infinite;
}

.monolith-figure {
  position: absolute;
  bottom: 5%;
  left: 50%;
  width: 13px;
  height: 40px;
  transform: translateX(-50%);
  background: #08040f;
  border-radius: 6px 6px 2px 2px;
}
.monolith-figure::before {
  content: "";
  position: absolute;
  top: -9px;
  left: 50%;
  width: 9px;
  height: 9px;
  transform: translateX(-50%);
  border-radius: 50%;
  background: #08040f;
}

.monolith-reflection {
  z-index: 1;
  margin-top: 2px;
  transform: scaleY(-1);
  opacity: 0.32;
  filter: blur(1px);
  -webkit-mask-image: linear-gradient(180deg, #000 0%, transparent 55%);
  mask-image: linear-gradient(180deg, #000 0%, transparent 55%);
}
.monolith-reflection .monolith {
  animation: none;
  box-shadow: none;
}

@media (prefers-reduced-motion: reduce) {
  .monolith,
  .monolith-glow,
  .monolith-nebula,
  .monolith-stars,
  .monolith-shimmer { animation: none !important; }
}

/* ============================================================
   Logo marquee — scrolls left, loops forever
   ============================================================ */
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
.marquee-track {
  animation: marquee 28s linear infinite;
  will-change: transform;
}
.marquee-mask:hover .marquee-track {
  animation-play-state: paused;
}
.marquee-mask {
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track { animation: none; }
}
```

---

## 5 · BACKGROUND ASSET

A **looping background video** is the full-bleed backdrop of the hero. Reference it directly from the Fivefold CDN — keep `autoPlay loop muted playsInline preload="auto"` and `object-cover` so it always fills the frame.

```jsx
<video
  className="absolute inset-0 z-0 h-full w-full object-cover"
  src="https://cdn.5sdesign.art/projects/faipi/hero.mp4"
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
/>
```

A readability **vignette** darkens the top and bottom so the white type stays legible over any frame. It stacks above the video, below the content:

```jsx
<div className="absolute inset-0 z-[2] pointer-events-none
  bg-[linear-gradient(180deg,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0)_26%),linear-gradient(0deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0)_42%)]" />
```

**z-order:** video `z-0` → vignette `z-[2]` → all content `z-10`.

---

## 6 · MOTION

Motion is **CSS-only** — there is no JavaScript animation runtime. The single page-level animation is the **logo marquee** (defined in §4). Everything else is hover/active state via Tailwind `transition`:

- Nav links: `text-white/70` → `hover:text-white`.
- White pill buttons: `hover:opacity-90`, `active:translate-y-px`.
- Ghost "Watch Demo" button: `bg-black/30` → `hover:bg-black/45`, `active:translate-y-px`.
- Marquee: `28s linear infinite`, `translateX(0 → -50%)`, **pauses on hover** of the masked container.

No scroll reveals, no entrance animations, no parallax, no counters.

---

## 7 · SECTION LAYOUT — HERO (single section, fills the viewport)

`src/App.jsx` renders one component — the hero — and nothing else:

```jsx
import Hero from './components/Hero.jsx'

export default function App() {
  return <Hero />
}
```

**Container:** `<section>` with `relative min-h-screen w-full overflow-hidden bg-black flex flex-col px-6 sm:px-10 lg:px-16 pt-6 lg:pt-7 pb-7 lg:pb-10`.

Three stacked layers inside, in this DOM order:

**A · Background** — the `<video>` (§5) followed by the vignette div (§5).

**B · Nav** (`relative z-10 flex items-center justify-between gap-6`):
- **Left — brand:** an inline 8-point star SVG (`18×18`, `fill="#fff"`) + the wordmark **FaiPi** (`font-semibold text-[18px] tracking-tight`).
- **Center — links** (`hidden md:flex items-center gap-7 lg:gap-9 text-sm text-white/70`): **Platform · Solutions · Resources · Pricing**, each `hover:text-white`.
- **Right — actions:** a text link **Sign in** + a white pill button **Start Free** (`rounded-full bg-white text-neutral-900 font-medium px-5 py-2.5`).

**C · Hero body** (`relative z-10 flex-1 flex flex-col justify-end` — pushes everything to the bottom):
1. **"Watch Demo"** ghost pill, `self-start mb-6`, with a small play-triangle SVG. Classes: `inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm text-white text-sm font-medium px-4 py-2.5`.
2. **Headline + aside row** (`flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-16 lg:gap-24`):
   - **Headline** `<h1>`: `font-serif font-normal text-white leading-[1.0] tracking-tight text-[clamp(40px,6vw,86px)] max-w-[12ch]` →
     **"Steer Every Decision by a Brighter Star."**
   - **Aside** (`md:max-w-[360px] shrink-0`): a `text-white/70 text-[15px] leading-relaxed mb-6` paragraph →
     **"FaiPi transforms scattered data, uncertainty, and instinct into decisions you can trust — long before the moment slips away."**
     followed by a white pill **Start Free** button with an inline right-arrow SVG.
3. **Logo marquee** (`flex items-center gap-6 lg:gap-10 mt-10 lg:mt-16`):
   - Static label **"Trusted by teams at"** (`shrink-0 text-[13px] text-white/60`).
   - A `.marquee-mask` container wrapping a `.marquee-track` row of logos, repeated **4×** so a `translateX(-50%)` shift loops seamlessly. Logos (fictional brands, verbatim, in order): **Northwind, Cadence, Quanta** (with a filled triangle SVG), **Lumen, Orbit, Vela, Strate**.

---

## 8 · RESPONSIVE

- **Headline** is always fluid: `clamp(40px, 6vw, 86px)`. Never a fixed display size.
- **Nav links** are hidden below `md` (`hidden md:flex`); the brand and right-hand actions stay on one row.
- **Hero row** stacks to a column below `md`, then becomes a baseline-aligned row (`md:items-end md:justify-between`) at `md` and up.
- **Padding** scales: horizontal `px-6 sm:px-10 lg:px-16`; top `pt-6 lg:pt-7`; bottom `pb-7 lg:pb-10`.
- **Marquee gaps** scale: container `gap-6 lg:gap-10`; per-logo `mr-10 lg:mr-16`; logo size `text-[20px] lg:text-[23px]`.

---

## 9 · REPRODUCE EXACTLY

Reproduce exactly. Do **not**:
- Substitute the fonts ("similar to Inter" is not Inter; the headline must be **Instrument Serif**, the rest **Inter**).
- Round or recolor values — `#000`, `#fff`, `white/70`, `white/75`, `white/60`, `border-white/20`, and `neutral-900` are exact.
- Reword any copy — the brand name, the headline **"Steer Every Decision by a Brighter Star."**, the aside paragraph, the nav links (Platform / Solutions / Resources / Pricing), the button labels (Sign in / Start Free / Watch Demo), the marquee label, and the seven logo names are all verbatim.
- Add libraries — no Framer Motion, no lucide, no shadcn. Icons are inline SVG; motion is plain CSS `@keyframes`.
- Use a `tailwind.config.js` — the fonts live in the `@theme` block of `index.css` (Tailwind v4).
- Swap the background video for a placeholder — it is served from `https://cdn.5sdesign.art/projects/faipi/hero.mp4`.
- Add a colored accent to the foreground UI — it stays monochrome over the video.

If a constraint conflicts with a framework limit (for example a font weight is unavailable), clamp to the nearest valid value and leave a code comment — do not silently change anything.

---

# SOURCE FILES (authoritative — reproduce 1:1)

### `package.json`
```json
{
  "name": "faipi",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.1.4",
    "@vitejs/plugin-react": "^4.3.4",
    "tailwindcss": "^4.1.4",
    "vite": "^6.3.5"
  }
}
```

### `vite.config.js`
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
  <title>FaiPi — Decision Intelligence</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>
```

### `src/main.jsx`
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### `src/index.css`
```css
@import "tailwindcss";

@theme {
  --font-sans: "Inter", system-ui, -apple-system, sans-serif;
  --font-serif: "Instrument Serif", Georgia, serif;
}

html, body, #root { height: 100%; }
body {
  margin: 0;
  background: #000;
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
}

/* ============================================================
   Cosmic Monolith — animated focal "portal"
   ============================================================ */
@keyframes nebula-drift {
  0%   { transform: translate(-12%, -8%) rotate(0deg) scale(1.1); }
  50%  { transform: translate(10%, 6%) rotate(180deg) scale(1.25); }
  100% { transform: translate(-12%, -8%) rotate(360deg) scale(1.1); }
}
@keyframes star-drift {
  from { background-position: 0 0, 0 0, 0 0, 0 0; }
  to   { background-position: 0 -300px, 0 -220px, 0 -160px, 0 -90px; }
}
@keyframes twinkle {
  0%, 100% { opacity: 0.55; }
  50%      { opacity: 1; }
}
@keyframes shimmer-sweep {
  0%   { transform: translateY(140%); opacity: 0; }
  18%  { opacity: 0.55; }
  82%  { opacity: 0.55; }
  100% { transform: translateY(-140%); opacity: 0; }
}
@keyframes float-soft {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-10px); }
}
@keyframes glow-pulse {
  0%, 100% { opacity: 0.45; transform: translate(-50%, -8%) scale(1); }
  50%      { opacity: 0.8;  transform: translate(-50%, -8%) scale(1.07); }
}

.monolith-wrap {
  position: absolute;
  left: 50%;
  top: 47%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: none;
}

.monolith {
  position: relative;
  z-index: 2;
  width: clamp(150px, 15vw, 232px);
  height: clamp(330px, 47vh, 548px);
  border-radius: 5px;
  overflow: hidden;
  animation: float-soft 7s ease-in-out infinite;
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.45),
    0 40px 120px rgba(150, 110, 220, 0.28);
}

.monolith-glow {
  position: absolute;
  z-index: 0;
  left: 50%;
  top: 0;
  width: clamp(300px, 32vw, 480px);
  height: clamp(440px, 60vh, 720px);
  transform: translate(-50%, -8%);
  background: radial-gradient(closest-side,
    rgba(255, 178, 138, 0.40),
    rgba(186, 124, 222, 0.20) 46%,
    transparent 72%);
  filter: blur(24px);
  animation: glow-pulse 6s ease-in-out infinite;
}

.monolith-nebula {
  position: absolute;
  inset: -45%;
  background:
    radial-gradient(circle at 30% 22%, rgba(120, 165, 255, 0.95), transparent 42%),
    radial-gradient(circle at 72% 58%, rgba(255, 128, 182, 0.85), transparent 44%),
    radial-gradient(circle at 48% 88%, rgba(255, 202, 132, 0.9), transparent 46%),
    linear-gradient(180deg, #160f3a 0%, #3a1a52 44%, #b65a8a 78%, #ffd8a0 100%);
  animation: nebula-drift 26s linear infinite;
}

.monolith-stars {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(1.6px 1.6px at 20% 30%, #fff, transparent),
    radial-gradient(1.2px 1.2px at 60% 50%, #fff, transparent),
    radial-gradient(1.6px 1.6px at 82% 18%, #fff, transparent),
    radial-gradient(1.2px 1.2px at 35% 72%, #fff, transparent),
    radial-gradient(1px 1px   at 75% 82%, #fff, transparent),
    radial-gradient(1.6px 1.6px at 50% 40%, #fff, transparent),
    radial-gradient(1px 1px   at 12% 86%, #fff, transparent),
    radial-gradient(1.2px 1.2px at 90% 62%, #fff, transparent);
  background-repeat: repeat;
  background-size: 200px 300px, 240px 320px, 180px 260px, 220px 300px;
  mix-blend-mode: screen;
  opacity: 0.9;
  animation: star-drift 20s linear infinite, twinkle 3.4s ease-in-out infinite;
}

.monolith-shimmer {
  position: absolute;
  left: 0;
  right: 0;
  height: 42%;
  background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.55), transparent);
  mix-blend-mode: screen;
  animation: shimmer-sweep 6.5s ease-in-out infinite;
}

.monolith-figure {
  position: absolute;
  bottom: 5%;
  left: 50%;
  width: 13px;
  height: 40px;
  transform: translateX(-50%);
  background: #08040f;
  border-radius: 6px 6px 2px 2px;
}
.monolith-figure::before {
  content: "";
  position: absolute;
  top: -9px;
  left: 50%;
  width: 9px;
  height: 9px;
  transform: translateX(-50%);
  border-radius: 50%;
  background: #08040f;
}

.monolith-reflection {
  z-index: 1;
  margin-top: 2px;
  transform: scaleY(-1);
  opacity: 0.32;
  filter: blur(1px);
  -webkit-mask-image: linear-gradient(180deg, #000 0%, transparent 55%);
  mask-image: linear-gradient(180deg, #000 0%, transparent 55%);
}
.monolith-reflection .monolith {
  animation: none;
  box-shadow: none;
}

@media (prefers-reduced-motion: reduce) {
  .monolith,
  .monolith-glow,
  .monolith-nebula,
  .monolith-stars,
  .monolith-shimmer { animation: none !important; }
}

/* ============================================================
   Logo marquee — scrolls left, loops forever
   ============================================================ */
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
.marquee-track {
  animation: marquee 28s linear infinite;
  will-change: transform;
}
.marquee-mask:hover .marquee-track {
  animation-play-state: paused;
}
.marquee-mask {
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track { animation: none; }
}
```

### `src/App.jsx`
```jsx
import Hero from './components/Hero.jsx'

export default function App() {
  return <Hero />
}
```

### `src/components/Hero.jsx`
```jsx
const navLinks = ['Platform', 'Solutions', 'Resources', 'Pricing']

const brands = [
  { name: 'Northwind', weight: 'font-semibold' },
  { name: 'Cadence', weight: 'font-medium' },
  { name: 'Quanta', weight: 'font-semibold', icon: true },
  { name: 'Lumen', weight: 'font-medium' },
  { name: 'Orbit', weight: 'font-medium' },
  { name: 'Vela', weight: 'font-semibold' },
  { name: 'Strate', weight: 'font-semibold' },
]

// 4x = two identical halves (each 2x) -> translateX(-50%) joins seamlessly
const loopBrands = [...brands, ...brands, ...brands, ...brands]

function Logo({ b }) {
  return (
    <span className={`mr-10 lg:mr-16 flex shrink-0 items-center gap-1.5 text-[20px] lg:text-[23px] tracking-tight ${b.weight}`}>
      {b.icon && (
        <svg width="16" height="14" viewBox="0 0 24 22" fill="#fff"><path d="M12 0 L24 22 H0 Z" /></svg>
      )}
      {b.name}
    </span>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col px-6 sm:px-10 lg:px-16 pt-6 lg:pt-7 pb-7 lg:pb-10">
      {/* ===== Background video ===== */}
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src="https://cdn.5sdesign.art/projects/faipi/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      {/* vignette keeps the type legible over the video */}
      <div className="absolute inset-0 z-[2] pointer-events-none
        bg-[linear-gradient(180deg,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0)_26%),linear-gradient(0deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0)_42%)]" />

      {/* ===== Nav ===== */}
      <nav className="relative z-10 flex items-center justify-between gap-6">
        <a href="#" className="flex items-center gap-2 text-white font-semibold text-[18px] tracking-tight">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" fill="#fff" />
          </svg>
          FaiPi
        </a>

        <div className="hidden md:flex items-center gap-7 lg:gap-9 text-sm text-white/70">
          {navLinks.map((l) => (
            <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
          ))}
        </div>

        <div className="flex items-center gap-5 text-sm">
          <a href="#" className="text-white hover:text-white/80 transition-colors">Sign in</a>
          <button className="rounded-full bg-white text-neutral-900 font-medium px-5 py-2.5 hover:opacity-90 active:translate-y-px transition">
            Start Free
          </button>
        </div>
      </nav>

      {/* ===== Hero body ===== */}
      <div className="relative z-10 flex-1 flex flex-col justify-end">
        <button className="self-start mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm text-white text-sm font-medium px-4 py-2.5 hover:bg-black/45 active:translate-y-px transition">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7z" /></svg>
          Watch Demo
        </button>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-16 lg:gap-24">
          <h1 className="font-serif font-normal text-white leading-[1.0] tracking-tight
            text-[clamp(40px,6vw,86px)] max-w-[12ch]">
            Steer Every Decision by a Brighter Star.
          </h1>

          <div className="md:max-w-[360px] shrink-0">
            <p className="text-[15px] leading-relaxed text-white/70 mb-6">
              FaiPi transforms scattered data, uncertainty, and instinct into
              decisions you can trust — long before the moment slips away.
            </p>
            <button className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 font-medium px-6 py-2.5 hover:opacity-90 active:translate-y-px transition">
              Start Free
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* ===== Logo marquee (scrolls left, loops forever) ===== */}
        <div className="flex items-center gap-6 lg:gap-10 mt-10 lg:mt-16">
          <span className="shrink-0 text-[13px] text-white/60">Trusted by teams at</span>
          <div className="marquee-mask relative flex-1 overflow-hidden">
            <div className="marquee-track flex w-max items-center text-white/75">
              {loopBrands.map((b, i) => (
                <Logo key={i} b={b} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

### `src/components/Monolith.jsx` (optional companion — pure-CSS cosmic portal)

> Not mounted by the rendered hero (the video background carries the atmosphere). Keep it in the project so the cosmic-portal accent stays available; drop `<Monolith />` inside the hero with a positioned wrapper if you ever want it layered over the video. It consumes the `.monolith-*` rules from `index.css`.

```jsx
function Pillar({ reflection = false }) {
  return (
    <div className="monolith">
      <div className="monolith-nebula" />
      <div className="monolith-stars" />
      <div className="monolith-shimmer" />
      {!reflection && <div className="monolith-figure" />}
    </div>
  )
}

export default function Monolith() {
  return (
    <div className="monolith-wrap" aria-hidden="true">
      <div className="monolith-glow" />
      <Pillar />
      <div className="monolith-reflection">
        <Pillar reflection />
      </div>
    </div>
  )
}
```

---

## FILE TREE (exact output expected)

```
FaiPi/
├── index.html              # Inter + Instrument Serif, title "FaiPi — Decision Intelligence"
├── package.json            # React 18 + Vite 6 + @tailwindcss/vite (Tailwind v4)
├── vite.config.js          # react() + tailwindcss() plugins
├── public/
│   └── hero.mp4            # local copy of the looping bg video (served from CDN in the prompt)
└── src/
    ├── main.jsx           # createRoot → <App /> in <React.StrictMode>
    ├── index.css          # @theme tokens + monolith + marquee CSS (§4 verbatim)
    ├── App.jsx            # renders <Hero />
    └── components/
        ├── Hero.jsx       # video bg + vignette + nav + bottom-anchored content + marquee
        └── Monolith.jsx   # optional pure-CSS cosmic portal (not mounted)
```

---

## RUN

```bash
npm install
npm run dev      # → http://localhost:5173
```

The looping background video is served from `https://cdn.5sdesign.art/projects/faipi/hero.mp4`.

---

## DELIVERY CHECKLIST

- [ ] `npm create vite@latest . --template react` (React 18 + Vite 6), then `npm i -D @tailwindcss/vite tailwindcss`.
- [ ] `vite.config.js` registers `react()` and `tailwindcss()` — **no `tailwind.config.js`.**
- [ ] `index.css` pasted verbatim from §4 (the `@theme` tokens, the page reset, the cosmic-monolith block, the marquee block, both `prefers-reduced-motion` guards).
- [ ] `index.html` loads Inter (400/500/600) + Instrument Serif (roman + italic), title `FaiPi — Decision Intelligence`.
- [ ] Hero: full-bleed `object-cover` video from `cdn.5sdesign.art/projects/faipi/hero.mp4` (`autoPlay loop muted playsInline preload="auto"`) → vignette `z-[2]` → content `z-10`.
- [ ] Nav: 8-point star + `FaiPi` wordmark / Platform · Solutions · Resources · Pricing / Sign in + Start Free.
- [ ] Hero body anchored to the bottom (`flex-1 justify-end`): Watch Demo ghost pill → Instrument Serif headline (`clamp(40px,6vw,86px)`) + aside paragraph & Start Free → marquee.
- [ ] Marquee: label "Trusted by teams at" + `.marquee-mask`/`.marquee-track` of the seven fictional brands repeated 4×, `28s linear`, pause on hover.
- [ ] Foreground stays monochrome (white + `neutral-900`); all color comes from the video.
- [ ] One screen, no scroll; icons inline SVG; motion CSS-only.
```
