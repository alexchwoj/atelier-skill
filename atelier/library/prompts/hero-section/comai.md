# Comai Studio — AI Comic Panel Startup Hero · Fivefold Prompt

## LAYER 0 — META

```yaml
asset_id: comai-hero-3d-carousel-01
category: hero
aesthetic: dark-cinematic · warm-ink · 3d-carousel
industry: ai / comic-generation
tone: cinematic · warm · minimal
preview_video: https://cdn.5sdesign.art/projects/comai.mp4
license: free
version: 1.0
last_updated: 2026-07-03
notes: Single-hero landing. Warm near-black room, amber corner haze, fine film
 grain, and an endless 3D coverflow conveyor of 7 comic panels fanning across
 the full viewport like a curved gallery wall. Two components only — Nav + Hero.
```

---

## LAYER 1 — OPENING DECLARATION

Build a **single-page hero landing** for **Comai Studio** — an **AI comic-panel generation startup**. The page has exactly two components: a floating glass pill navbar and a full-viewport hero with an endless 3D panel carousel. There are no other sections. All copy is in English.

Use the following **pinned** tech stack (do not substitute):

- **React 19 + Vite 6** (JavaScript, `.jsx`)
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin (no `tailwind.config.js`, tokens live in `@theme`)
- **GSAP 3 + @gsap/react** (`useGSAP` hook) — all JS animation
- **Lenis** for smooth scrolling (`lenis` package)
- **@phosphor-icons/react** — the only icon library
- **@fontsource-variable/outfit** — self-hosted font, no Google Fonts `<link>`

The aesthetic is **dark cinematic: a warm near-black room with faint amber haze in the corners, fine monochrome film grain on the backdrop, and a slow endless 3D carousel of comic panels that fans across the full viewport width like a curved gallery wall**. `#171114` is the global background. Default text color is `#ede3d8`. **Do not use purple, indigo, or neon green anywhere. Never use pure `#000000` or pure `#ffffff` as background.**

Dev server port: **5777**.

---

## LAYER 2 — FONTS

One family for everything. Import in `index.css`:

```css
@import '@fontsource-variable/outfit';
```

Tailwind v4 theme tokens:

```css
@theme {
  --font-display: 'Outfit Variable', 'Outfit', system-ui, sans-serif;
  --font-body: 'Outfit Variable', 'Outfit', system-ui, sans-serif;
}
```

`body { font-family: var(--font-body); -webkit-font-smoothing: antialiased; }`

Weights used: 400 (body/tagline), 500 (nav links, buttons), 600 (wordmark, Contact pill).

---

## LAYER 3 — COLOR SYSTEM

Single dark theme, defined in the Tailwind v4 `@theme` block:

```css
@theme {
  --color-ink: #171114;      /* page background, warm near-black */
  --color-ink-soft: #1f171a; /* reserved surface tint */
  --color-cream: #ede3d8;    /* primary text + primary CTA background */
  --color-clay: #a3948b;     /* muted text (tagline) */
  --color-ember: #e2612c;    /* selection highlight only */
  --color-moss: #3e9b4f;     /* reserved */
}
```

```css
::selection { background: rgb(226 97 44 / 0.35); color: var(--color-cream); }
html { background: var(--color-ink); }
body { background: var(--color-ink); color: var(--color-cream); overflow-x: hidden; }
```

---

## LAYER 4 — CUSTOM CSS UTILITIES (paste verbatim into `index.css`)

### 4a. Corner haze (warm ambient light on the hero)

```css
.hero-haze {
  background:
    radial-gradient(38% 42% at 4% 8%, rgb(190 106 58 / 0.14), transparent 70%),
    radial-gradient(38% 42% at 96% 8%, rgb(190 106 58 / 0.14), transparent 70%),
    radial-gradient(60% 55% at 50% 118%, rgb(94 46 36 / 0.22), transparent 70%);
}
```

### 4b. Film grain (monochrome, backdrop only — no blend mode)

```css
.grain {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 180px 180px;
  opacity: 0.09;
}
```

### 4c. Carousel compositor hints

```css
.h-card {
  will-change: transform, opacity;
  backface-visibility: hidden;
}
.h-card-float,
.h-card-shade {
  will-change: transform, opacity;
}
```

### 4d. Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
}
```

---

## LAYER 5 — MEDIA ASSETS

**Background is fully static** — the `#171114` page color + `.hero-haze` gradients + one `.grain` layer:

```jsx
<div aria-hidden className="grain pointer-events-none absolute inset-0" />
```

The grain div is the first child **inside** the hero `<section>` (which carries `hero-haze relative`), below all content (`.hero-copy` sits at `z-10`). No video, no shaders, no images in the background.

**The 7 carousel panels** are portrait artwork images (ratio 4:5) served from the Fivefold CDN — reference these URLs directly. Do not swap them for stock images or placeholder services:

```js
const PANELS = [
  'https://cdn.5sdesign.art/projects/comai/c2.jpg',
  'https://cdn.5sdesign.art/projects/comai/c4.jpg',
  'https://cdn.5sdesign.art/projects/comai/c6.jpg',
  'https://cdn.5sdesign.art/projects/comai/c1.jpg',
  'https://cdn.5sdesign.art/projects/comai/c3.jpg',
  'https://cdn.5sdesign.art/projects/comai/c5.jpg',
  'https://cdn.5sdesign.art/projects/comai/c7.jpg',
]
```

Keep this exact array order — it is a deliberate visual shuffle so similar artworks never sit next to each other on the arc. If a panel fails to load, the card keeps its rounded corners, ring, and shadow over the `ink-soft` surface — never a broken-image glyph.

---

## LAYER 6 — SHARED SETUP

### GSAP registration (`src/lib/gsap.js`)

```js
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger, useGSAP)
export { gsap, ScrollTrigger, useGSAP }
```

### Lenis smooth scroll (in `App.jsx`, skip entirely under `prefers-reduced-motion`)

```js
useEffect(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const lenis = new Lenis({ autoRaf: false, lerp: 0.12 })
  window.lenis = lenis
  lenis.on('scroll', ScrollTrigger.update)
  const raf = (time) => lenis.raf(time * 1000)
  gsap.ticker.add(raf)
  gsap.ticker.lagSmoothing(0)
  return () => { gsap.ticker.remove(raf); lenis.destroy(); window.lenis = undefined }
}, [])
```

### Anchor helper (`src/lib/scroll.js`)

```js
export function goTo(e, href) {
  e.preventDefault()
  const target = document.querySelector(href)
  if (!target) return
  if (window.lenis) window.lenis.scrollTo(target, { offset: -44 })
  else target.scrollIntoView({ behavior: 'smooth' })
}
```

### HARD RULE — GSAP vs CSS transitions

Never put a CSS `transition` that includes `transform` on an element GSAP animates (it corrupts `gsap.from()` snapshots under React StrictMode). Wherever an element needs both an entrance tween and a CSS hover transform, split them across nested wrappers.

---

## LAYER 7 — SECTIONS

### SECTION 1 — NAVBAR (floating glass pill)

**Block 1 · Container**
- `<header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">`

**Block 2 · Shell**
- `<nav className="nav-shell flex items-center gap-1 rounded-full border border-white/10 bg-ink/55 p-1.5 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.8)] backdrop-blur-xl">`

**Block 3 · Elements (in order)**
1. **Brand link** (`#top`): `nav-item flex items-center gap-2 rounded-full py-2 pl-3.5 pr-4 text-cream transition-colors duration-300 hover:bg-white/[0.06]` — contains `<Cube size={17} weight="duotone" className="text-cream/85" />` + `<span className="text-[13.5px] font-semibold tracking-tight">Comai Studio</span>`
2. **Divider**: `nav-item mx-1 hidden h-4 w-px bg-white/12 md:block`
3. **Links wrapper** `hidden items-center md:flex` with 4 links — Home `#top`, Product `#product`, How `#how`, About `#about` — each: `nav-item rounded-full px-4 py-2 text-[13px] font-medium text-cream/60 transition-colors duration-300 hover:bg-white/[0.06] hover:text-cream`
4. **Contact CTA** (`#contact`): `nav-item ml-1.5 rounded-full bg-cream px-4.5 py-2 text-[13px] font-semibold text-ink transition-colors duration-300 hover:bg-white`

All links call `goTo(e, href)` onClick. Labels are sentence case (Home, Product, How, About, Contact) — no uppercase tracking.

**Block 5 · Animation** (inside `useGSAP`, gated by `gsap.matchMedia()` `(prefers-reduced-motion: no-preference)`)
- Shell: `gsap.from('.nav-shell', { y: -28, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.1 })`
- Items: `gsap.from('.nav-item', { y: -14, opacity: 0, duration: 0.6, stagger: 0.05, ease: 'power3.out', delay: 0.35 })`

**Block 6 · Responsive**
- `<md`: middle links + divider hidden; brand + Contact pill remain.

---

### SECTION 2 — HERO (full viewport, endless 3D carousel)

**Block 1 · Container**
- `<section className="hero-haze relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 pb-12 pt-20">` (never `h-screen`)

**Block 2 · Background**
- `.grain` absolute layer (Layer 5), content wrapper `.hero-copy relative z-10 flex w-full flex-col items-center`.

**Block 3 · Elements (top to bottom)**

1. **Logo lockup** `.hero-logo flex flex-col items-center gap-4`:
   - `<Cube size={24} weight="duotone" className="text-cream/85" />`
   - `<span className="text-2xl font-medium tracking-tight text-cream">Comai Studio</span>`

2. **Carousel ring** — `ref={ring}`, `className="relative mt-10 h-[clamp(270px,46vh,440px)] w-screen"`, `style={{ perspective: '1600px' }}`. Contains 7 cards, one per `PANELS` entry (Layer 5), rendered in that exact array order.

   **Card structure (4 independent transform layers — do not merge):**
   ```jsx
   <div className="h-card absolute left-1/2 top-1/2" style={{ width: 'clamp(124px, 16vw, 265px)' }}>
     <div className="h-card-pop">          {/* entrance tween */}
       <div className="h-card-float">      {/* idle sine bob */}
         <div className="h-card-inner relative aspect-[4/5] overflow-hidden rounded-[20px] shadow-[0_36px_70px_-20px_rgba(0,0,0,0.75)] ring-1 ring-white/10 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:scale-[1.03]">
           <img src={src} alt="" className="h-full w-full object-cover" draggable="false" />
           <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent via-30% to-black/25" />
           <div aria-hidden className="h-card-shade pointer-events-none absolute inset-0 bg-ink opacity-0" />
         </div>
       </div>
     </div>
   </div>
   ```

3. **Tagline** `.hero-tagline mt-10 max-w-xl text-center text-base leading-relaxed text-clay md:text-lg`:
   > Bring your story to life with AI-powered comic panels. Flawless character consistency, perfect proportions, and true perspective in every frame.

4. **CTA row** `mt-8 flex items-center gap-3` — each button wrapped in a plain `<div className="hero-cta">` (GSAP animates the wrapper, hover CSS lives on the `<a>`):
   - Primary: `block rounded-full bg-cream px-6 py-3 text-sm font-medium text-ink transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]` → text **"Get Started Now"**, href `#contact`
   - Secondary: `block rounded-full border border-white/15 px-6 py-3 text-sm text-cream/80 transition-colors duration-300 hover:bg-white/[0.06] hover:text-cream active:scale-[0.98]` → text **"Case studies"**, href `#work`

**Block 5 · Animation — the endless 3D conveyor (reproduce this math exactly)**

Everything runs in one `useGSAP({ scope })`. Base setup (all motion modes):

```js
const cards = gsap.utils.toArray('.h-card', scope.current)
const shades = cards.map((el) => el.querySelector('.h-card-shade'))
const N = cards.length                      // 7
const wrap01 = gsap.utils.wrap(0, 1)
const clamp01 = gsap.utils.clamp(0, 1)
const state = { t: 0.5 - Math.floor(N / 2) / N }   // symmetric start

gsap.set(cards, { xPercent: -50, yPercent: -50, force3D: true })

const render = () => {
  if (!ring.current) return
  const w = ring.current.offsetWidth
  cards.forEach((el, i) => {
    const p = wrap01(state.t + i / N)   // position on track [0..1)
    const d = p - 0.5                   // signed distance from center
    const a = Math.abs(d) / 0.5         // normalized 0(center)..1(edge)
    const fading = a > 0.94
    gsap.set(el, {
      x: d * w * 1.2,                   // track spans 120% viewport → cards slide off-screen before wrapping
      y: -24 + a * a * 60,              // parabolic arch, center raised
      scale: 0.78 + a * 0.3,            // center small, edges large
      rotationZ: d * 24,
      rotationY: -d * 44,               // edges turn inward (coverflow)
      opacity: fading ? clamp01((1 - a) / 0.06) : 1,
      zIndex: fading ? 0 : 1 + Math.round(a * 20),  // fading card slides UNDER neighbors
      force3D: true,
    })
    gsap.set(shades[i], { opacity: a * 0.34 })      // depth shading via overlay opacity — NEVER filter:brightness
  })
}
render()
window.addEventListener('resize', render)           // cleanup in useGSAP return
```

Motion (inside `gsap.matchMedia()` `(prefers-reduced-motion: no-preference)`):

```js
// 1. Endless conveyor — one lap every 36s, linear
const spin = gsap.to(state, { t: '+=1', duration: 36, ease: 'none', repeat: -1, onUpdate: render })

// 2. Idle float — each panel breathes on its own sine wave
cards.forEach((el, i) => {
  gsap.to(el.querySelector('.h-card-float'), {
    y: 8, duration: 2.4 + (i % 3) * 0.5, ease: 'sine.inOut',
    yoyo: true, repeat: -1, delay: 1.6 + i * 0.18,
  })
})

// 3. Hover: the loop eases down while inspecting, resumes on leave (contextSafe handlers on the ring)
enter: gsap.to(spin, { timeScale: 0.1, duration: 0.7, overwrite: true })
leave: gsap.to(spin, { timeScale: 1,   duration: 0.7, overwrite: true })

// 4. Entrance timeline (defaults ease 'power3.out')
tl.from('.h-card-pop', { y: 150, scale: 0.55, opacity: 0, duration: 1.15, ease: 'back.out(1.25)', stagger: { each: 0.07, from: 'center' } }, 0.3)
  .from('.hero-logo > *', { y: 26, opacity: 0, stagger: 0.09, duration: 0.9 }, 0.55)
  .from('.hero-tagline', { y: 30, opacity: 0, duration: 0.9 }, 0.85)
  .from('.hero-cta', { y: 22, opacity: 0, stagger: 0.09, duration: 0.8 }, 1)
```

Under reduced motion: no spin, no float, no entrance — `render()` still runs once, showing the symmetric static arc.

**Block 6 · Responsive**
- Card width is fluid (`clamp(124px, 16vw, 265px)`), ring height `clamp(270px,46vh,440px)` — the arc scales down naturally on mobile; the end-fade (`a > 0.94`) hides the wrap seam on narrow viewports where the 120% overshoot isn't enough.

**Block 7 · Copy (verbatim, in order)**
```
Comai Studio
Home
Product
How
About
Contact
Comai Studio
Bring your story to life with AI-powered comic panels. Flawless character consistency, perfect proportions, and true perspective in every frame.
Get Started Now
Case studies
```

---

## LAYER 8 — ANIMATION STANDARDS

- Default ease: `power3.out`. Card pop: `back.out(1.25)`. Conveyor/scrub: `ease: 'none'`. Idle float: `sine.inOut`.
- Every GSAP block is wrapped in `gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', ...)`.
- Animate only `transform` and `opacity`. Depth shading = overlay opacity. **`filter: brightness()` per frame is forbidden** (repaint jank).
- Continuous values never touch React state — the conveyor mutates a plain object and calls `gsap.set` per frame.
- Event handlers created after mount use `contextSafe` and are removed in cleanup.

## LAYER 9 — RESPONSIVE STANDARDS

- Mobile-first Tailwind. Hero uses `min-h-[100dvh]`, never `h-screen`.
- Fluid sizes via `clamp()` for the carousel; text sizes step up with `md:`.
- Nav collapses to brand + Contact below `md`.

## LAYER 10 — ICON SET

Only **@phosphor-icons/react** and only this icon:

```
- Cube (weight="duotone")  → brand mark in navbar (17px) and hero logo (24px)
```

Reject any other icon. Never hand-draw SVG icon paths.

## LAYER 11 — REPRODUCE-EXACTLY CLAUSE

Reproduce exactly. Do not:
- Substitute fonts (Outfit Variable via @fontsource, nothing "similar").
- Round color values (`#171114` is not `#111`; `#ede3d8` is not `#eee`).
- Shorten copy (the tagline is one exact sentence pair).
- Alter the carousel math (span 1.2, arch −24+a²·60, scale 0.78+a·0.3, rotZ 24d, rotY −44d, shade a·0.34, fade a>0.94, lap 36s).
- Merge the 4 card layers (`h-card` / `h-card-pop` / `h-card-float` / `h-card-inner`) — each owns one transform system.
- Put `transition-transform` on any element GSAP tweens.
- Swap Phosphor for another icon library.
- Reorder or replace the `PANELS` CDN URLs (Layer 5).

If a constraint conflicts with a platform limitation, clamp to the nearest valid value and note the substitution in a code comment — do not silently change.

---

*comai-prompt.md · Fivefold · v1.0 · 2026-07-03*
