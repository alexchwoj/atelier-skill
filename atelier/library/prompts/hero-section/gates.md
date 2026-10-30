# Gates — Data-Gateway Landing Hero · Fivefold Prompt

> Paste everything below the line into Claude Code, Cursor, v0, Lovable, Bolt, or Windsurf. Reproduces the Gates hero 1:1.

## LAYER 0 — META

```yaml
asset_id:        data-gateway-hero-01
category:        hero
aesthetic:       editorial
industry:        saas
tone:            cinematic
preview_video:   https://cdn.5sdesign.art/projects/gates.mp4
license:         free
version:         1.0
last_updated:    2026-07-21
```

---

## LAYER 1 — OPENING DECLARATION

Build a **single-screen hero landing page** for **Gates** — a unified data-gateway platform that brings every source together into one clean, accessible layer for modern teams.

Use this **pinned** tech stack (do not substitute):

- **React 19 + Vite 6** (JavaScript, `.jsx` — not TypeScript)
- **Tailwind CSS 4** via the `@tailwindcss/vite` plugin (CSS-first config with `@theme`, no `tailwind.config.js`)
- **GSAP 3** for the on-load intro timeline (imported from `gsap`)
- No icon library and no UI kit — the hero is pure type, two buttons, and one trust badge with inline-SVG avatars

The aesthetic is **warm, dreamlike and cinematic**: a full-bleed looping video of a surreal cloud gateway carries all the color, while a soft warm-greige haze veils the left column so clean white typography reads on top. One frosted trust pill anchors the bottom. Editorial-minimal, nothing decorative.

`#a9a29a` (warm greige) is the global page background sitting behind the video. All hero text is **white** except the primary button label. **Do not use purple, indigo, blue, teal, or neon accents anywhere** — the palette is strictly warm greige + white, and every trace of color comes from the video itself.

---

## LAYER 2 — FONTS

Load via Google Fonts in `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600&family=Inter:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

Register the families as Tailwind 4 theme tokens in `src/index.css` (there is **no** `tailwind.config.js`):

```css
@import "tailwindcss";

@theme {
  --font-display: "Inter Tight", "Inter", ui-sans-serif, system-ui, -apple-system,
    "Segoe UI", Roboto, sans-serif;
  --font-sans: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI",
    Roboto, sans-serif;
}
```

- **Headline** — `font-display` (Inter Tight) at weight **500** (`font-medium`).
- **Everything else** (nav, body, buttons, badge) — Inter, weights 400 / 500 / 600.

---

## LAYER 3 — COLOR SYSTEM

Single warm theme. Define the tokens inside the same `@theme` block (Tailwind 4 turns `--color-*` into `bg-*` / `text-*` / `border-*` utilities automatically), then set the base styles below in `src/index.css`:

```css
@theme {
  /* warm greige palette sampled from the reference */
  --color-haze: #b9b2a9;
  --color-ink: #2c2925;
  --color-ink-strong: #201d19;
  --color-muted: #6a6159;
  --color-line: rgba(120, 110, 98, 0.28);
}

:root { color-scheme: light; }

*, *::before, *::after { box-sizing: border-box; }
html, body, #root { height: 100%; }

body {
  margin: 0;
  font-family: var(--font-sans);
  color: var(--color-ink);
  background: #a9a29a;                 /* page base behind the video */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

::selection {
  background: rgba(255, 255, 255, 0.4);
  color: var(--color-ink-strong);
}
```

Default text color in the hero is **white (`#ffffff`)**. The only dark text on the page is the primary button label (`var(--color-ink-strong)` on a white button). `--color-ink` / `--color-muted` are reserved tokens.

---

## LAYER 4 — CUSTOM CSS UTILITIES (design DNA)

Paste verbatim into `src/index.css` below the base styles. These scrims are the entire signature of this asset — the two washes that make white type readable over the video, plus the reduced-motion guard.

```css
/* Warm haze that lightens the left column for text legibility.
   Desktop: horizontal fade left→transparent. Mobile: vertical scrim. */
.hero-scrim {
  background: linear-gradient(
    90deg,
    rgba(184, 177, 168, 0.97) 0%,
    rgba(186, 179, 170, 0.94) 22%,
    rgba(189, 182, 173, 0.82) 36%,
    rgba(193, 186, 177, 0.5) 46%,
    rgba(197, 190, 181, 0.18) 56%,
    rgba(200, 193, 184, 0) 66%
  );
}
@media (max-width: 767px) {
  .hero-scrim {
    background: linear-gradient(
      180deg,
      rgba(184, 177, 168, 0.5) 0%,
      rgba(185, 178, 169, 0.72) 42%,
      rgba(187, 180, 171, 0.9) 72%,
      rgba(188, 181, 172, 0.96) 100%
    );
  }
}

/* subtle top wash so nav stays legible over the brighter sky */
.hero-topwash {
  background: linear-gradient(
    180deg,
    rgba(170, 163, 153, 0.32) 0%,
    rgba(170, 163, 153, 0) 24%
  );
}

/* entrance reveal target — content is visible by default; GSAP handles motion */
.reveal { will-change: transform, opacity; }

@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1 !important; transform: none !important; }
}
```

---

## LAYER 5 — BACKGROUND ASSET

**Looping hero video** — the only source of color on the page. Download the two files from the asset CDN and serve them locally (do not hotlink):

```
https://cdn.5sdesign.art/projects/gates/gates.mp4          → public/media/gates.mp4          (~5s, 1916×1080, H.264, silent)
https://cdn.5sdesign.art/projects/gates/gates-poster.jpg   → public/media/gates-poster.jpg   (t=0 frame, poster)
```

```jsx
<video
  className="absolute inset-0 h-full w-full object-cover object-center"
  src="/media/gates.mp4"
  poster="/media/gates-poster.jpg"
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
/>
```

**Scene the video shows** (~5s seamless loop, warm golden-hour grade): a monumental archway framed by towering peach-lit clouds, a long staircase rising out of a still mirror-like sea, a single lone figure standing at the top facing the gateway, soft amber light glowing through the arch against a calm blue sky, faint ripples circling the base of the stairs. It reads as a serene "doorway to everything" — the visual metaphor for the product. The scrims in Layer 4 sit above the video; the content sits above the scrims (`z-20`).

---

## LAYER 6 — SHARED COMPONENTS

The page is split into four files: `src/App.jsx` (composes Nav + Hero), `src/components/Nav.jsx`, `src/components/Hero.jsx`, `src/components/Avatars.jsx`.

```jsx
// src/App.jsx
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'

export default function App() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
    </main>
  )
}
```

### `Avatars.jsx` — three overlapping gradient chips (define once)

```jsx
import { useId } from 'react'

const FACES = [
  { from: '#f2c19a', to: '#d98a57' }, // warm sunset
  { from: '#a8c0dc', to: '#6580aa' }, // sky blue
  { from: '#dcc7a8', to: '#b18f64' }, // warm tan
]

function Avatar({ from, to, z }) {
  const id = useId()
  return (
    <svg
      viewBox="0 0 40 40"
      className="h-9 w-9 shrink-0 rounded-full ring-2 ring-white/90 first:ml-0 -ml-2.5"
      style={{ position: 'relative', zIndex: z }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="20" fill={`url(#${id})`} />
      <circle cx="20" cy="15.5" r="6.4" fill="rgba(255,255,255,0.9)" />
      <path
        d="M7.5 34.5c1.4-6.6 6.2-9.8 12.5-9.8s11.1 3.2 12.5 9.8"
        fill="rgba(255,255,255,0.9)"
      />
    </svg>
  )
}

export default function Avatars() {
  return (
    <div className="flex items-center">
      {FACES.map((f, i) => (
        <Avatar key={i} from={f.from} to={f.to} z={FACES.length - i} />
      ))}
    </div>
  )
}
```

The three chips overlap by `-ml-2.5`; z-index descends so the left-most sits on top.

---

## LAYER 7 — SECTIONS

### Navbar (`Nav.jsx`)

- Header: `pointer-events-none absolute inset-x-0 top-0 z-30`
- Inner nav carries the `reveal` class (GSAP target): `reveal pointer-events-auto mx-auto flex items-center gap-8 px-[clamp(1.5rem,3.6vw,3.75rem)] py-6 sm:py-7 md:gap-10`
- **Wordmark** (`href="#top"`): text **"Gates"** in a `<span className="font-display">`, wrapped in `text-[1.3rem] font-semibold tracking-[-0.01em] text-white [text-shadow:0_1px_18px_rgba(0,0,0,0.18)]`
- **Primary links** (`ml-2 hidden items-center gap-7 text-[0.95rem] text-white/85 md:flex lg:gap-9`): four `<li>`, each link `text-white/80 transition-colors duration-200 hover:text-white [text-shadow:0_1px_14px_rgba(0,0,0,0.16)]` — in this exact order: **"Product"**, **"Prices"**, **"Use Cases"**, **"Integrations"**
- **Log In** (`ml-auto`): text **"Log In"**, `text-[0.95rem] font-medium text-white transition-opacity duration-200 hover:opacity-80 [text-shadow:0_1px_16px_rgba(0,0,0,0.2)]`
- There is **no** hamburger menu — below `md` only the wordmark and Log In show.

### Hero (`Hero.jsx` — the whole page)

**Container**
- Section: `id="top"`, `ref={root}`, `relative min-h-[100svh] w-full overflow-hidden bg-haze`
- Content wrapper: `relative z-20 flex min-h-[100svh] flex-col px-[clamp(1.5rem,3.6vw,3.75rem)] pb-[clamp(2rem,5vh,3.5rem)] pt-[clamp(8.5rem,17vh,12rem)]`

**Background**
- Layer 5 video (base) → `.hero-scrim pointer-events-none absolute inset-0` → `.hero-topwash pointer-events-none absolute inset-0` → content `z-20`

**Layout primitive**
- The content is a full-height flex column. The headline sits high (pushed below the nav by the `pt` clamp); the lower cluster (body + CTAs + badge) is shoved to the bottom with `mt-auto`, creating the wide vertical gap that defines the composition.

**Headline** (`<h1 data-r="headline">`) — `font-display text-white [text-shadow:0_2px_40px_rgba(60,50,40,0.18)]`. Two masked lines; each is `<span className="block overflow-hidden">` wrapping `<span className="line block text-[clamp(2.5rem,6vw,4.95rem)] font-medium leading-[1.04] tracking-[-0.022em]">`:
- Line 1: **"A Unified Gateway"**
- Line 2: **"to All Your Data"**

**Lower cluster** — `mt-auto max-w-[42rem] pt-16`.

**Body paragraph** (`data-r="body"`) — `max-w-[34rem] text-[clamp(1.02rem,1.28vw,1.2rem)] leading-[1.62] text-white [text-shadow:0_1px_22px_rgba(55,45,35,0.32)]`. Bold spans are `<strong className="font-semibold text-white">`. Exact text (bold marked):
> **Say goodbye to data silos.** Our gateway brings all your data together—clean, accessible, and instantly usable. Designed for modern teams that want **visibility, control, and reliable infrastructure** without the heavy lifting.

**CTA row** (`data-r="cta"`) — `mt-9 flex items-center gap-4`.
- **Primary — "Connect Your Data":** `group inline-flex items-center justify-center rounded-lg bg-white px-6 py-3.5 text-[0.98rem] font-medium text-[color:var(--color-ink-strong)] shadow-[0_1px_2px_rgba(30,25,20,0.14),0_10px_30px_-12px_rgba(30,25,20,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_2px_4px_rgba(30,25,20,0.16),0_18px_40px_-14px_rgba(30,25,20,0.45)] active:translate-y-0`
- **Secondary — "Book a Demo":** `inline-flex items-center justify-center px-2 py-3.5 text-[0.98rem] font-medium text-white [text-shadow:0_1px_18px_rgba(55,45,35,0.32)] transition-opacity duration-200 hover:opacity-70` (no background — plain white text)

**Trust badge** (`data-r="trust"`) — `mt-10 inline-flex max-w-[36rem] items-center gap-4 rounded-2xl border border-[color:var(--color-line)] bg-white/20 px-4 py-3 backdrop-blur-[2px]`. Contains `<Avatars />` then a `<p className="text-[0.82rem] leading-[1.42] text-white [text-shadow:0_1px_16px_rgba(55,45,35,0.34)]">`, bold span `font-semibold text-white`. Exact text (bold marked):
> **Trusted by 2,000+ startups and data teams** who build faster, scale smarter, and stay in control of their data.

**Copy (verbatim, in order)**
```
Gates
Product   Prices   Use Cases   Integrations   Log In
A Unified Gateway
to All Your Data
Say goodbye to data silos. Our gateway brings all your data together—clean, accessible, and instantly usable. Designed for modern teams that want visibility, control, and reliable infrastructure without the heavy lifting.
Connect Your Data
Book a Demo
Trusted by 2,000+ startups and data teams who build faster, scale smarter, and stay in control of their data.
```

---

## LAYER 8 — ANIMATION STANDARDS (GSAP)

One **on-load** GSAP timeline inside a `useEffect` in `Hero.jsx`, scoped with `gsap.context` to the section ref and reverted on unmount. Everything is present in the DOM and visible by default; GSAP animates it in from hidden on mount. Guard the whole thing behind `prefers-reduced-motion` (early `return` so content stays in its final state).

```jsx
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

// inside Hero(), root = useRef(null)
useEffect(() => {
  const media = window.matchMedia('(prefers-reduced-motion: reduce)')
  if (media.matches) return

  gsap.ticker.lagSmoothing(0) // keep the intro deterministic if the tab is throttled

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.1 } })
    tl.from('nav.reveal', { y: -18, opacity: 0, duration: 0.9 }, 0.05)
      .from('[data-r="headline"] .line', { yPercent: 118, opacity: 0, stagger: 0.12, duration: 1.15 }, 0.15)
      .from('[data-r="body"]', { y: 22, opacity: 0 }, 0.55)
      .from('[data-r="cta"]', { y: 20, opacity: 0 }, 0.7)
      .from('[data-r="trust"]', { y: 20, opacity: 0 }, 0.82)
  }, root)

  return () => ctx.revert()
}, [])
```

The two headline lines each live inside an `overflow-hidden` mask, so `yPercent: 118` slides each line **up out of nothing**; they stagger 0.12s apart. Default ease is `power3.out` everywhere. It plays once on mount, then rests. The `data-r` attributes and the `.line` / `nav.reveal` classes are the animation hooks — keep them.

---

## LAYER 9 — RESPONSIVE STANDARDS

- Mobile-first; scale up with `md:` / `lg:`.
- Hero headline: `clamp(2.5rem, 6vw, 4.95rem)` — always `clamp()`, never fixed sizes.
- Horizontal padding: `clamp(1.5rem, 3.6vw, 3.75rem)` — used identically on the nav and the content so the wordmark and headline share a left edge.
- Content column is `min-h-[100svh]` with `mt-auto` on the lower cluster to hold the spread layout at every height.
- Mobile (`<768px`): the `.hero-scrim` switches to the vertical gradient; primary nav links hide (`hidden md:flex`); headline clamps down to `2.5rem`.
- Vite dev server: port **6210**, `host: true`, `open: false`.

---

## LAYER 10 — ICON SET

This asset uses **zero icon libraries**. The only inline SVGs are the three avatar chips in `Avatars.jsx` (gradient rect + white head circle + shoulder path). Do not import lucide-react or add any other glyphs — there are no icons in the nav, buttons, or badge.

---

## LAYER 11 — REPRODUCE-EXACTLY CLAUSE

Reproduce exactly. Do not:

- Substitute the stack — it is **React 19 + Vite 6 (JavaScript) + Tailwind 4 (`@theme`) + GSAP 3**. Not TypeScript, not Tailwind 3 with a config file, not Framer Motion.
- Substitute fonts — "similar to Inter Tight" is not Inter Tight.
- Round color values — `#a9a29a`, `#b9b2a9`, and every rgba stop in the scrims are exact; keep them.
- Shorten or reword copy — the strings above are verbatim, punctuation included (note the em-dash in "together—clean").
- Recolor text — the body, "Book a Demo", and the trust-badge text are **white**; only the "Connect Your Data" label is dark.
- Drop the two scrims or the top wash — without them white type is unreadable on the bright side of the video.
- Change the animation — it is a single GSAP `power3.out` timeline with the exact delays (nav 0.05 · headline 0.15 · body 0.55 · cta 0.7 · trust 0.82), stagger 0.12, and `yPercent: 118` masked headline lines. A motion/react or CSS-only approach is wrong.
- Swap the video for a placeholder — download `gates.mp4` + `gates-poster.jpg` from the asset CDN and serve them from `public/media/`.

If a constraint conflicts with a framework limit (e.g. a font weight is unavailable), clamp to the nearest valid value and leave a code comment noting the substitution — never change silently.

---

*Gates · Fivefold asset · v1.0 · 2026-07-21 · single-screen hero, port 6210 in dev (`npm run dev`). All copy, branding, and assets are original to Gates.*
