# ESAI — Cinematic Studio Hero · Fivefold Prompt

## LAYER 0 — META

```yaml
asset_id: esai-cinematic-hero-01
category: hero
aesthetic: dark cinematic surrealism · ultra-light grotesque type · champagne-gold accent
industry: creative studio / visual production
tone: quiet · surreal · gallery-grade
preview_video: https://cdn.5sdesign.art/projects/esai.mp4
license: free
version: 1.0
last_updated: 2026-07-10
notes: One fullscreen hero — looping surreal background film under a deep
 slate-blue grade, two-line ultra-light Inter headline in pale fog gray with
 only the word "reality." in champagne gold, hairline divider, three-line
 caption, ring CTA with arrow, and an animated gold scroll beam bottom-left.
 GSAP entrance timeline on power3.out; gold lives on the accent word, the
 nav's active dot, the CTA ring, and the scroll beam — nowhere else.
```

---

## LAYER 1 — OPENING DECLARATION

Build a **single-screen hero section** for **ESAI** — a creative studio that explores the boundary between imagination and reality, turning the impossible into visuals.

Use the following **pinned** tech stack (do not substitute):

- **React 19 + Vite 6** (JavaScript, `.jsx` — no TypeScript)
- **Tailwind CSS 4** via the `@tailwindcss/vite` plugin (no `tailwind.config.js`; tokens live in `@theme`)
- **GSAP 3 + @gsap/react** (`useGSAP` hook) for all animation
- **No icon library.** Every icon is an inline SVG defined verbatim in this prompt.

The aesthetic is **dark cinematic surrealism**: a full-screen looping background video, ultra-light grotesque typography in pale fog gray, and a single warm champagne-gold accent. `#232a33` is the global background. Default text color is `#d3d8dd`. **Do not use purple, indigo, neon colors, glassmorphism cards, or drop shadows anywhere.**

Everything lives in one component: `src/App.jsx`. Page `<title>`: `ESAI — Imagining beyond reality.` Meta description: `ESAI explores the boundary between imagination and reality, turning the impossible into visuals.` Dev server port **5985** (`strictPort: true`).

`package.json` dependencies: `react ^19`, `react-dom ^19`, `gsap ^3.12`, `@gsap/react ^2.1`; dev: `vite ^6`, `@vitejs/plugin-react ^4.5`, `tailwindcss ^4.1`, `@tailwindcss/vite ^4.1`. Files: `index.html`, `src/main.jsx` (StrictMode + createRoot), `src/index.css` (Layer 3), `src/App.jsx` (everything else). No router, no extra components, no state.

---

## LAYER 2 — FONTS

Load Inter (variable, optical sizing) in `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,200;14..32,300;14..32,400;14..32,500&display=swap" rel="stylesheet" />
```

Weights used: **300 (headline)**, 400 (body), 500 (wordmark). If a weight is unavailable, clamp to the nearest available weight — do not synthesize.

---

## LAYER 3 — COLOR SYSTEM

Define in `src/index.css` — paste verbatim:

```css
@import "tailwindcss";

@theme {
  --font-sans: "Inter", "Helvetica Neue", Arial, sans-serif;
  --color-ink: #232a33;   /* global background — deep slate blue */
  --color-fog: #d3d8dd;   /* headline + primary text */
  --color-mist: #a9b6bf;  /* muted body text */
  --color-gold: #d3ab7e;  /* champagne-gold accent */
  --color-gold-deep: #b08c5f; /* CTA ring border */
}

:root {
  color-scheme: dark;
}

html,
body {
  height: 100%;
  background: #232a33;
}

body {
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  overflow-x: hidden;
}

::selection {
  background: rgba(211, 171, 126, 0.35);
  color: #fff;
}
```

---

## LAYER 4 — CUSTOM CSS UTILITIES

None. The entire page is styled with Tailwind utilities plus the `@theme` tokens above — there are no custom classes, keyframes, or component CSS files. All hover states are Tailwind `group-hover:` transitions.

---

## LAYER 5 — BACKGROUND ASSET

The hero background is a looping film. Download it and serve it locally — do not hotlink:

- `https://cdn.5sdesign.art/projects/esai/esai.mp4` → save to `public/esai.mp4`

```jsx
<video
  className="absolute inset-0 h-full w-full object-cover"
  src="/esai.mp4"
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
/>
```

Directly after the video, add two legibility washes (keep the scene visible, darken text zones only):

```jsx
<div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#1c232b]/60 via-[#1c232b]/10 to-transparent" />
<div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#161c23]/55 to-transparent" />
```

Stacking: video and washes sit at the base; all content is `relative z-10`.

---

## LAYER 6 — SHARED COMPONENTS

Two inline SVG marks, defined once as tiny components — paste the paths verbatim:

### `LogoMark`

```jsx
<svg width="38" height="38" viewBox="0 0 40 40" fill="none" aria-hidden="true">
  <circle cx="20" cy="20" r="18.4" stroke="#fff" strokeWidth="1.7" />
  <path
    d="M12.8 22.8c5.6 1.3 11.4-1.6 11.4-5.4 0-2.4-2.5-3.4-4.8-2.4-3.4 1.4-5.6 5.1-4.9 8.7.6 3.4 4 4.9 7.4 3.8 1.5-.5 2.8-1.3 3.9-2.4"
    stroke="#fff" strokeWidth="1.7" strokeLinecap="round" />
</svg>
```

### `ArrowRight`

```jsx
<svg width="22" height="14" viewBox="0 0 22 14" fill="none" aria-hidden="true">
  <path d="M1 7h19M14.5 1.5 20 7l-5.5 5.5"
    stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
</svg>
```

---

## LAYER 7 — SECTIONS

### SECTION 1 — HERO (the only section)

**Block 1 · Container**
- Root: `<div ref={rootRef} className="relative min-h-screen overflow-hidden bg-ink text-fog">`

**Block 2 · Background**
- The video + two washes from Layer 5.

**Block 3 · Elements**

> **Navigation (`<header>`)**
> - Classes: `relative z-10 flex items-center justify-between px-6 pt-7 sm:px-10 lg:px-12`
> - **Logo** (left): `<a href="#" data-nav className="flex items-center gap-4">` containing `LogoMark` then `<span className="text-[15px] font-medium tracking-[0.5em] text-white">ESAI</span>`
> - **Nav links** (desktop only): wrapper `hidden items-center gap-10 lg:flex`; links in order **Works · Services · Stories · About · Contact**, each `<a href="#" data-nav>` with classes `group relative text-[11.5px] font-normal uppercase tracking-[0.22em] text-fog/90 transition-colors duration-300 hover:text-white`
> - Active indicator: a 3×3px gold dot centered under each link — `absolute -bottom-2.5 left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-gold transition-opacity duration-300`. On **Works** (index 0): `opacity-100`; on all others: `opacity-0 group-hover:opacity-60`.
> - **Hamburger** (far right): `<button type="button" data-nav aria-label="Menu" className="group ml-10 flex h-6 w-7 flex-col items-end justify-center gap-[7px]">` with two hairlines — top `h-px w-7 bg-fog`, bottom `h-px w-5 bg-fog group-hover:w-7`, both `transition-all duration-300 group-hover:bg-white`

> **Hero content (`<main>`)**
> - Classes: `relative z-10 flex min-h-[calc(100vh-96px)] flex-col justify-between px-6 pb-10 sm:px-10 lg:px-12`
> - Text block wrapper: `max-w-3xl pt-[13vh]`

> **Headline (`<h1>`)**
> - Classes: `text-[13vw] font-light leading-[1.09] tracking-[-0.015em] text-fog sm:text-[9vw] lg:text-[6.4vw]`
> - Two lines, each wrapped in a mask for the reveal:
> ```jsx
> <span className="block overflow-hidden">
>   <span data-line className="block">Imagining</span>
> </span>
> <span className="block overflow-hidden">
>   <span data-line className="block">beyond <span className="text-gold">reality.</span></span>
> </span>
> ```
> - Only the word **"reality."** (including the period) is gold. Everything else stays fog gray.

> **Divider rule**
> - `<div data-rule className="mt-12 h-px w-11 bg-fog/50" />`

> **Paragraph**
> - Classes: `mt-10 max-w-[300px] text-[13.5px] leading-[1.85] text-mist`, attribute `data-copy`
> - Exactly three lines, hard-broken with `<br />`:
> ```
> ESAI explores the boundary
> between imagination and reality,
> turning the impossible into visuals.
> ```

> **CTA (one `<a href="#">`, `data-cta`)**
> - Wrapper: `group mt-14 inline-flex items-center gap-6`
> - Ring: `flex h-[52px] w-[52px] items-center justify-center rounded-full border border-gold-deep/80 text-gold transition-all duration-500 group-hover:border-gold group-hover:bg-gold/10`
> - Inside the ring: `<span className="transition-transform duration-500 group-hover:translate-x-1">` wrapping `ArrowRight`
> - Label: `<span className="text-[11.5px] uppercase tracking-[0.3em] text-fog/90 transition-colors duration-300 group-hover:text-white">View Our Work</span>`

> **Scroll indicator (bottom-left, `data-scroll`)**
> - Wrapper: `flex flex-col items-start gap-4 pb-2`
> - Label: `<span className="pl-px text-[10px] uppercase tracking-[0.4em] text-mist/90">Scroll</span>`
> - Track: `relative ml-2 block h-16 w-px overflow-hidden bg-white/15`
> - Beam inside track: `absolute -top-full left-0 h-full w-full bg-gradient-to-b from-transparent via-gold to-gold`, attribute `data-scroll-beam`

**Block 4 · Copy** (all text, verbatim, in order of appearance)
```
ESAI
Works
Services
Stories
About
Contact
Imagining
beyond reality.
ESAI explores the boundary
between imagination and reality,
turning the impossible into visuals.
View Our Work
Scroll
```

---

## LAYER 8 — ANIMATION (GSAP — exact timeline)

Register once, animate inside `useGSAP` scoped to the root ref:

```jsx
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

useGSAP(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  tl.from('[data-nav]',  { y: -18, autoAlpha: 0, duration: 0.9, stagger: 0.06 })
    .from('[data-line]', { yPercent: 110, autoAlpha: 0, duration: 1.2, stagger: 0.12 }, 0.25)
    .from('[data-rule]', { scaleX: 0, duration: 0.9, transformOrigin: 'left center' }, 0.9)
    .from('[data-copy]', { y: 24, autoAlpha: 0, duration: 1 }, 1.05)
    .from('[data-cta]',  { y: 24, autoAlpha: 0, duration: 1 }, 1.2)
    .from('[data-scroll]', { autoAlpha: 0, duration: 1 }, 1.5)

  gsap.to('[data-scroll-beam]', {
    yPercent: 220,
    duration: 1.8,
    ease: 'power1.inOut',
    repeat: -1,
    repeatDelay: 0.4,
  })
}, { scope: rootRef })
```

Do not change any position label, duration, stagger, or ease. All hover states are pure CSS (already specified in Layer 7) — no JS hover animation.

---

## LAYER 9 — RESPONSIVE STANDARDS

- Mobile-first. Base classes target mobile; scale with `sm:` and `lg:`.
- Headline: `text-[13vw]` → `sm:text-[9vw]` → `lg:text-[6.4vw]` (viewport-fluid, never fixed px).
- Horizontal padding rhythm everywhere: `px-6 sm:px-10 lg:px-12`.
- Nav links render only at `lg:` and up; logo + hamburger remain visible on all breakpoints.
- The hero always fills one viewport: header + `min-h-[calc(100vh-96px)]` main, scroll indicator pinned to the bottom by `justify-between`.

`vite.config.js`:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { port: 5985, strictPort: true },
})
```

---

## LAYER 10 — ICON SET

**No icon library.** The page's only vector art is the two inline SVGs from Layer 6: the ESAI orbit-stroke logo mark and the CTA arrow. Reject any request to install lucide-react, Phosphor, or similar.

---

## LAYER 11 — REPRODUCE-EXACTLY CLAUSE

Reproduce exactly. Do not:

- Substitute fonts ("similar to Inter" is not Inter).
- Round color values ("close to #d3ab7e" is not #d3ab7e).
- Shorten or paraphrase copy ("similar headline" is not the headline).
- Skip animation timings ("smooth entrance" is not `stagger: 0.12` at position `0.25` with `power3.out`).
- Redraw the SVGs — use the exact paths given in Layer 6.
- Swap the film for a stock placeholder — download the CDN file above to `public/esai.mp4` and serve it locally.
- Add sections, shadows, glass cards, or colors not specified here.

If a constraint conflicts with a framework limitation, clamp to the nearest valid value and note the substitution as a code comment — do not silently change.

---

*ESAI · esai-cinematic-hero-01 · Fivefold prompt library · 2026-07-10*
