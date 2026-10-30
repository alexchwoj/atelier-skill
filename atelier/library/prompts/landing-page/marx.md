# MarX — Interoperable Layer-1 Landing · Fivefold Prompt

```yaml
asset_id: marx-cosmos-l1-landing-01
category: landing-page
aesthetic: dark-cinematic · mars-frontier · glassmorphism
industry: web3 / layer-1-blockchain
tone: sovereign · technical · confident
preview_video: https://cdn.5sdesign.art/projects/marx.mp4
license: pro
version: 1.0
last_updated: 2026-06-20
notes: Multi-section dark landing. A single fixed, scroll-scrubbed background video
 plays through its whole timeline as the page scrolls (deep space → planet → surface).
 Orbitron display + Sora body, glassmorphism cards, ember/plasma/cosmic/signal palette.
 No animation library — pure CSS keyframes + IntersectionObserver reveals + a
 scroll-driven <video>. Content is a content-brief object consumed by section components.
```

---

## LAYER 1 — OPENING DECLARATION

Build a **multi-section landing page** for **MarX** — a sovereign, interoperable **Layer-1 blockchain built on the Cosmos SDK and secured by CometBFT**, with the line *"Your sovereignty is always connected."*

Use the following **pinned** tech stack (do not substitute):

- **React 18.3.1 + Vite 6** — plain **JSX, no TypeScript**.
- **Tailwind CSS 3.4** with a custom `tailwind.config.js` theme (tokens in Layer 3). Not Tailwind v4, not a CSS-only `@theme` block — a real config file plus `postcss.config.js` (`tailwindcss` + `autoprefixer`).
- **`lucide-react`** for icons — restricted to the registry in Layer 10.
- **No animation library.** The design system is **plain CSS** (Layer 4), reveals use **IntersectionObserver** (Layer 6 `Reveal`), and the background is a **scroll-scrubbed `<video>`** driven by `requestAnimationFrame` (Layer 5). Do **not** add Framer Motion, `motion/react`, or GSAP.

The aesthetic is **dark, cinematic, Mars-frontier**: glassmorphism cards floating over a **fixed, full-screen background video that scrubs forward as the page scrolls** (deep space → planet → surface). `#07060A` is the global background. Default text color is warm **bone white** `#F6EFE6` (never pure white for body copy — body uses `text-white/70`, captions `text-white/55`). Accents are Mars **ember/plasma**, with **cosmic violet** and **signal cyan** used sparingly.

**Do not:** add a light mode, put gradients on the page background, use purple-dominant / indigo / neon-green themes, flatten the video to a dull dark plate, use emoji, or use AI-default accents like `bg-blue-500`. Render `<App />` **inside** `React.StrictMode` (this build is StrictMode-safe — the rAF loop and observers are cleaned up properly).

---

## LAYER 2 — FONTS

Two families, loaded from Google Fonts in `index.html` `<head>` (preconnect first):

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Sora:wght@300;400;500;600;700&display=swap"
/>
```

The rest of the `<head>`: `<meta charset="UTF-8" />`, `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />`, `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`, the title and description:

```html
<title>MarX — The Interoperable Layer-1 for the Cosmos Frontier</title>
<meta
  name="description"
  content="MarX — a sovereign, interoperable Layer-1 blockchain built on the Cosmos SDK. Instant finality, IBC interoperability, and near-zero fees for the next frontier of appchains."
/>
```

Role mapping:

| Role | Family | How it's applied |
|---|---|---|
| Display — wordmark, all headings, stat numbers, step indices, the `$MARX` symbol, roadmap phase labels | **Orbitron** (400–900) | `font-orbitron` class (also a literal `.font-orbitron` rule in CSS) |
| Body / UI — everything else | **Sora** (300–700) | base `body` rule + Tailwind `font-sora` |

Base rule lives in `index.css`: `body { font-family: 'Sora', sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }`. Apply Orbitron only via the `font-orbitron` class on the elements listed above. Orbitron is a heavy geometric display face — do not set body copy in it.

---

## LAYER 3 — DESIGN TOKENS (`tailwind.config.js`)

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
      },
      colors: {
        // MarX accent palette — finalized from the design brief
        ember: '#FF3B2E',  // primary Mars accent — dot glows, gradient anchor, CTA accents
        plasma: '#FF9A4D', // warm secondary — eyebrows, icon chips, scrollbar
        cosmic: '#8B5CF6', // cosmic violet — ambient hover glow only
        signal: '#38E1D6', // signal cyan — sparingly, distribution bar
        bone: '#F6EFE6',   // warm bone white — text base
      },
      keyframes: {
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 8s linear infinite',
      },
    },
  },
  plugins: [],
}
```

`postcss.config.js`:

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

The exact hex set, do not round: **bg `#07060A`** · **text `#F6EFE6`** · ember `#FF3B2E` · plasma `#FF9A4D` · cosmic `#8B5CF6` · signal `#38E1D6`.

---

## LAYER 4 — CUSTOM CSS (`src/index.css`)

Paste **verbatim** — these rules are the design DNA (glass system, the fixed video, the luminance-aware scrim, the ink gradient, the CSS-only reveal). `@tailwind base/components/utilities` at the top.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Sora', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #07060a;
  color: #f6efe6;
  overflow-x: hidden;
}

/* Brand / display font */
.font-orbitron {
  font-family: 'Orbitron', sans-serif;
}

/* ---- Fixed, scroll-scrubbed video background ---- */
.bg-video {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: 0;
  pointer-events: none;
  will-change: transform;
}

/* A soft, evolving scrim that keeps text legible over the moving video
   WITHOUT flattening it to a dull dark plate. Radial + vertical blend only. */
.bg-scrim {
  position: fixed;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background:
    radial-gradient(120% 80% at 50% 0%, rgba(7, 6, 10, 0) 30%, rgba(7, 6, 10, 0.35) 100%),
    linear-gradient(180deg, rgba(7, 6, 10, 0.25) 0%, rgba(7, 6, 10, 0.05) 22%, rgba(7, 6, 10, 0.45) 78%, rgba(7, 6, 10, 0.8) 100%);
}

/* ---- Glassmorphism system ---- */
.glass {
  background: rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.glass-strong {
  background: rgba(0, 0, 0, 0.34);
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

/* Gradient ink for accent words */
.ink-gradient {
  background: linear-gradient(100deg, #ff9a4d 0%, #ff3b2e 45%, #8b5cf6 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Thin custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #07060a;
}
::-webkit-scrollbar-thumb {
  background: rgba(255, 154, 77, 0.35);
  border-radius: 999px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 154, 77, 0.55);
}

/* Subtle entrance — CSS-only so content is NEVER stuck hidden if JS fails.
   Animation runs to completion on load; final state is fully visible. */
@media (prefers-reduced-motion: no-preference) {
  .rise {
    animation: rise-in 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
  }
}
@keyframes rise-in {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* selection */
::selection {
  background: rgba(255, 59, 46, 0.35);
  color: #fff;
}
```

Two reveal mechanisms coexist on purpose: `.rise` (CSS keyframe, used in the Hero so above-the-fold content animates on load and can never be stuck hidden), and the JS `Reveal` wrapper (IntersectionObserver, used below the fold). Both end fully visible.

---

## LAYER 5 — BACKGROUND ASSET: scroll-scrubbed video (`src/components/VideoBackground.jsx`)

The signature element. **One fixed full-viewport `<video>`** sits behind every section; **page scroll drives the video timeline** — the top of the page maps to `t=0`, the bottom maps to the final frame, so scrolling the whole page plays the whole clip once (deep space → planet → surface). A `.bg-scrim` (Layer 4) sits above the video for legibility.

**Asset:**

```js
const VIDEO_SRC = "https://cdn.5sdesign.art/projects/marx/background.mp4";
// App.jsx renders: <VideoBackground src={VIDEO_SRC} />
```

**Encoding/hosting note (about the file, not the markup):** re-encode the source **all-intra** (every frame a keyframe) so seeking to any time is instant and the scrub stays smooth. Host that file at the CDN URL above. The scrub algorithm below issues at most one seek at a time and eases the target with inertia.

**Behavior (reproduce exactly):**
- `prefers-reduced-motion: reduce` → no scrub; the video just `loop`s muted as a calm ambient autoplay.
- `progress()` = scrollY / (scrollHeight − innerHeight), clamped 0..1.
- `target` = `progress() * max(0, duration - 0.04)` (leave one frame so we land on the last real frame, not the end-of-stream edge).
- Each rAF frame: `current += (target - current) * 0.16` (inertial easing); snap to target when within `0.0015`.
- Commit one seek at a time: only set `video.currentTime = current` when not already seeking and `|current - lastSeek| > 0.012`; the next seek waits for the `seeked` event. A 220 ms safety timer releases the gate if a seek never resolves.
- The page owns the timeline: on ready (`loadedmetadata`/`loadeddata`/`canplay`) capture `duration`, then `video.pause()`. Nudge the decoder with a muted `play().then(pause)`.
- No-JS / load-failure fallback: the `<video>` keeps `autoPlay loop muted playsInline preload="auto"`, so it still plays as ambient background.

**Component (verbatim):**

```jsx
import { useEffect, useRef } from 'react'

/**
 * Fixed, full-viewport video behind every section.
 *
 * The page scroll drives the video timeline: the very top of the page maps to
 * t=0 and the very bottom maps to the final frame, so scrolling through the
 * whole page plays through the entire clip.
 *
 * Smoothness: the source is re-encoded all-intra (every frame is a keyframe),
 * so seeking to any time is instant. On top of that we:
 *   1. ease the target with inertia (no scroll-step jitter), and
 *   2. issue at most ONE seek at a time — the next seek waits for the previous
 *      `seeked` event, so seeks never queue up and stutter.
 *
 * Fallbacks: prefers-reduced-motion → calm ambient autoplay loop (no scrub);
 * no-JS → the element keeps autoPlay/loop/muted so it still plays as ambient bg.
 */
export default function VideoBackground({ src }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const prefersReduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      video.loop = true
      video.muted = true
      const p = video.play()
      if (p && typeof p.catch === 'function') p.catch(() => {})
      return () => {}
    }

    let raf = 0
    let ready = false
    let duration = 0
    let target = 0 // desired currentTime (s), from scroll
    let current = 0 // smoothed currentTime (s)
    let lastSeek = -1 // last value we actually committed
    let seeking = false // a seek is in flight
    let seekStart = 0 // when the in-flight seek began (ms)

    const now = () => (typeof performance !== 'undefined' ? performance.now() : 0)

    const progress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      if (max <= 0) return 0
      const y = window.scrollY || window.pageYOffset || 0
      return Math.min(1, Math.max(0, y / max))
    }

    const onScroll = () => {
      if (!ready) return
      // Full scroll span → full clip duration (leave one frame so we land on
      // the last real frame rather than the end-of-stream edge).
      target = progress() * Math.max(0, duration - 0.04)
    }

    const loop = () => {
      if (ready) {
        // Inertial easing toward the scroll target — smooths scroll jitter.
        current += (target - current) * 0.16
        if (Math.abs(target - current) < 0.0015) current = target

        // Safety: if a seek somehow never resolves, release the gate.
        if (seeking && now() - seekStart > 220) seeking = false

        // Commit one seek at a time; wait for `seeked` before the next.
        if (!seeking && Number.isFinite(current) && Math.abs(current - lastSeek) > 0.012) {
          seeking = true
          seekStart = now()
          lastSeek = current
          try {
            video.currentTime = current
          } catch (_) {
            seeking = false
          }
        }
      }
      raf = requestAnimationFrame(loop)
    }

    const onSeeked = () => {
      seeking = false
    }

    const onReady = () => {
      if (Number.isFinite(video.duration) && video.duration > 0) {
        duration = video.duration
        ready = true
        video.pause() // we own the timeline
        onScroll()
      }
    }

    video.addEventListener('loadedmetadata', onReady)
    video.addEventListener('loadeddata', onReady)
    video.addEventListener('canplay', onReady)
    video.addEventListener('seeked', onSeeked)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    // Nudge the decoder to load frames, then hand the timeline to scroll.
    video.muted = true
    const kick = video.play()
    if (kick && typeof kick.then === 'function') kick.then(() => video.pause()).catch(() => {})
    onReady()
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      video.removeEventListener('loadedmetadata', onReady)
      video.removeEventListener('loadeddata', onReady)
      video.removeEventListener('canplay', onReady)
      video.removeEventListener('seeked', onSeeked)
    }
  }, [src])

  return (
    <>
      <video
        ref={videoRef}
        className="bg-video object-[80%_center] md:object-[right_center] lg:object-center"
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      <div className="bg-scrim" />
    </>
  )
}
```

**Logo asset** — no external image. The brand mark is an **inline SVG Mars globe** generated in `src/components/Logo.jsx` (Layer 7). The favicon (`public/favicon.svg`) is the same Mars-globe language.

---

## LAYER 6 — SHARED COMPONENTS

### `Reveal` (`src/components/Reveal.jsx`) — enter-on-scroll, fail-safe

The below-the-fold reveal. Content is **never** permanently hidden: if `IntersectionObserver` is unsupported it shows immediately, and a **1200 ms failsafe** reveals it no matter what. Verbatim:

```jsx
import { useEffect, useRef, useState } from 'react'

/**
 * Gentle enter-on-scroll wrapper.
 *
 * Safety first: content is NEVER permanently hidden.
 *  - If IntersectionObserver is unsupported → renders visible immediately.
 *  - A hard failsafe timer reveals the element after 1200ms no matter what,
 *    so nothing can ever get "stuck" off-screen if the observer misfires.
 */
export default function Reveal({ children, as: Tag = 'div', delay = 0, className = '', ...rest }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return
    }

    const failsafe = setTimeout(() => setShown(true), 1200)

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true)
            io.disconnect()
            clearTimeout(failsafe)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)

    return () => {
      io.disconnect()
      clearTimeout(failsafe)
    }
  }, [])

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : 'translateY(26px)',
        transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
```

### `Icon` (`src/components/Icon.jsx`) — explicit lucide registry

Only the icons actually used are imported by name (tree-shake friendly; `import *` would pull the whole set). Unknown names fall back to `Sparkles`. Default `strokeWidth={1.6}`. Verbatim:

```jsx
// Explicit icon registry → only the icons we actually use are bundled
// (named imports tree-shake; `import * as` would pull the entire icon set).
import {
  Orbit,
  Waypoints,
  SlidersHorizontal,
  Zap,
  Network,
  ShieldCheck,
  Boxes,
  Coins,
  Lock,
  Radio,
  CircleCheckBig,
  GitCompareArrows,
  Vote,
  LineChart,
  Landmark,
  Layers,
  Globe,
  Wallet,
  Server,
  Blocks,
  Cpu,
  Repeat,
  GitBranch,
  Code,
  Gauge,
  Rocket,
  BookOpen,
  Users,
  Sparkles,
} from 'lucide-react'

const REGISTRY = {
  Orbit,
  Waypoints,
  SlidersHorizontal,
  Zap,
  Network,
  ShieldCheck,
  Boxes,
  Coins,
  Lock,
  Radio,
  CircleCheckBig,
  GitCompareArrows,
  Vote,
  LineChart,
  Landmark,
  Layers,
  Globe,
  Wallet,
  Server,
  Blocks,
  Cpu,
  Repeat,
  GitBranch,
  Code,
  Gauge,
  Rocket,
  BookOpen,
  Users,
}

// Render a registered lucide-react icon by name, with a safe fallback.
export default function Icon({ name, className = 'w-5 h-5', strokeWidth = 1.6 }) {
  const Cmp = REGISTRY[name] || Sparkles
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" />
}
```

### `Logo` (`src/components/Logo.jsx`) — the Mars-globe brand mark

A self-contained SVG: a warm radial sphere, polar ice cap, surface maria, a specular highlight, and a limb shadow for 3D depth. Uses `useId()` so multiple instances get unique gradient IDs. Verbatim:

```jsx
import { useId } from 'react'

// MarX brand mark — a Mars globe: warm radial sphere, polar ice cap,
// surface maria, a specular highlight and a limb shadow for 3D depth.
export default function Logo({ className = 'w-5 h-5 sm:w-7 sm:h-7' }) {
  const uid = useId().replace(/:/g, '')
  const body = `marsBody-${uid}`
  const limb = `marsLimb-${uid}`
  const spec = `marsSpec-${uid}`
  const clip = `marsClip-${uid}`

  return (
    <svg viewBox="0 0 256 256" className={className} aria-hidden="true">
      <defs>
        <radialGradient id={body} cx="40%" cy="34%" r="75%">
          <stop offset="0%" stopColor="#FFCD96" />
          <stop offset="22%" stopColor="#FF9A4D" />
          <stop offset="52%" stopColor="#F04A21" />
          <stop offset="80%" stopColor="#B0240F" />
          <stop offset="100%" stopColor="#5B1407" />
        </radialGradient>
        <radialGradient id={limb} cx="62%" cy="66%" r="70%">
          <stop offset="52%" stopColor="#2c0803" stopOpacity="0" />
          <stop offset="100%" stopColor="#2c0803" stopOpacity="0.6" />
        </radialGradient>
        <radialGradient id={spec} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFE9D2" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#FFE9D2" stopOpacity="0" />
        </radialGradient>
        <clipPath id={clip}>
          <circle cx="128" cy="128" r="118" />
        </clipPath>
      </defs>

      {/* planet body */}
      <circle cx="128" cy="128" r="118" fill={`url(#${body})`} />

      <g clipPath={`url(#${clip})`}>
        {/* surface maria / craters */}
        <ellipse cx="92" cy="152" rx="46" ry="29" fill="#8E2611" opacity="0.38" />
        <ellipse cx="172" cy="106" rx="33" ry="21" fill="#7E2410" opacity="0.32" />
        <ellipse cx="150" cy="178" rx="22" ry="13" fill="#7E2410" opacity="0.3" />
        <circle cx="98" cy="98" r="10" fill="#5E1809" opacity="0.3" />
        {/* polar ice cap */}
        <ellipse cx="124" cy="24" rx="34" ry="15" fill="#F6EFE6" opacity="0.5" />
        {/* limb shadow → sphere depth */}
        <circle cx="128" cy="128" r="118" fill={`url(#${limb})`} />
        {/* specular highlight */}
        <ellipse cx="92" cy="84" rx="42" ry="32" fill={`url(#${spec})`} />
      </g>
    </svg>
  )
}
```

`Logo` is rendered with a `gradient` prop at call sites (`<Logo gradient .../>`); the component ignores it and always renders the gradient globe — keep the prop at the call sites verbatim. Favicon (`public/favicon.svg`) reuses the same Mars-globe artwork.

### Content brief (`src/data/brief.js`)

All copy lives in one exported `brief` object (brand, palette notes, nav, hero, stats, sections, tokenomics, roadmap, footer, motion notes). Section components consume it. The full verbatim copy is in Layer 7 / Layer 9 — assemble `brief` from those strings exactly.

---

## LAYER 7 — SECTION-BY-SECTION SPEC

`src/main.jsx` mounts inside StrictMode:

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

`src/App.jsx` — fixed video behind a `z-10` content stack; a fixed header holds the nav; sections render in order. The CTA section is split out of the generic `sections` list by `layoutHint === 'cta-band'`:

```jsx
import VideoBackground from './components/VideoBackground.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import StatsBand from './components/StatsBand.jsx'
import Section from './components/Section.jsx'
import Tokenomics from './components/Tokenomics.jsx'
import Roadmap from './components/Roadmap.jsx'
import CTABand from './components/CTABand.jsx'
import Footer from './components/Footer.jsx'
import brief from './data/brief.js'

export default function App() {
  const contentSections = brief.sections.filter((s) => s.layoutHint !== 'cta-band')
  const ctaSection = brief.sections.find((s) => s.layoutHint === 'cta-band')

  return (
    <>
      <VideoBackground src="/marx-video.mp4" />

      <div className="relative z-10">
        <header className="fixed top-0 inset-x-0 z-40 px-4 sm:px-10 lg:px-12 py-4 sm:py-6">
          <Nav links={brief.nav.links} cta={brief.nav.cta} />
        </header>

        <main>
          <Hero hero={brief.hero} />
          <StatsBand stats={brief.stats} />
          {contentSections.map((s) => (
            <Section key={s.id} section={s} />
          ))}
          <Tokenomics tokenomics={brief.tokenomics} />
          <Roadmap roadmap={brief.roadmap} />
          <CTABand section={ctaSection} cta={brief.nav.cta} />
        </main>

        <Footer footer={brief.footer} brand={brief.brand} />
      </div>
    </>
  )
}
```

> In the real source the `VideoBackground src` is the local `/marx-video.mp4`; for the Fivefold asset, point it at the CDN URL from Layer 5 (`https://cdn.5sdesign.art/projects/marx/background.mp4`).

**Render order:** Nav (fixed) → Hero → StatsBand → Thesis (`two-column`) → Protocol (`feature-grid`) → Ecosystem (`ecosystem-grid`) → Tokenomics → Roadmap → CTABand (`community`) → Footer.

### SECTION 1 — Nav (`src/components/Nav.jsx`)

Inside the fixed `<header>`. `useState` controls a mobile/tablet menu. Slug helper: `(s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')`.

- Wrapper: `<nav className="relative z-30 flex items-center justify-between gap-3">`.
- **Brand pill** (`<a href="#top">`): `glass rounded-2xl px-4 py-2.5 sm:px-5 sm:py-3 flex items-center gap-2.5 hover:border-white/20 transition-colors` → `<Logo gradient className="w-5 h-5 sm:w-7 sm:h-7" />` + `<span className="font-orbitron text-white text-base sm:text-xl tracking-wide">MarX</span>`.
- **Center links** (`hidden lg:flex glass rounded-full px-2 py-2 items-center gap-1`): map `links` → `<a href={`#${slug(l)}`} className="px-4 py-2 text-sm text-white/75 hover:text-white rounded-full hover:bg-white/10 transition-colors">`. Links: **`Protocol`, `Ecosystem`, `Token`, `Roadmap`, `Community`**.
- **Right actions** (`flex items-center gap-2`):
  - Desktop CTA button (`hidden sm:block bg-white text-gray-900 font-medium text-sm px-6 py-3 rounded-full hover:bg-white/90 active:scale-[0.98] transition`) → text **`Launch App`**.
  - Mobile toggle (`lg:hidden glass rounded-xl p-2.5 text-white hover:border-white/20 transition-colors`, `aria-label="Toggle menu"`) → `X` when open, else `Menu`.
- **Mobile menu** (when `open`): `lg:hidden absolute top-[4.25rem] left-0 right-0 glass-strong rounded-2xl p-5 flex flex-col gap-1` — the links again (`text-white/90 ... py-2.5 px-2 rounded-lg hover:bg-white/5`), plus a full-width `Launch App` button. Clicking a link closes the menu.

### SECTION 2 — Hero (`src/components/Hero.jsx`)

`useState('')` for the email; `submit` `preventDefault`s, ignores empty, and `alert`s `` `Thanks — you're on the MarX list: ${email}` `` then clears.

- Wrapper: `<section id="top" className="relative min-h-screen flex flex-col px-4 sm:px-10 lg:px-12 pt-28 sm:pt-32 pb-8 sm:pb-14 lg:pb-16">`, with a leading `<div className="flex-1" />` to push content to the bottom of the viewport.
- Content row: `flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-10`. Left column `sm:flex-1 max-w-[760px]`. Every text block carries the `rise` class (CSS keyframe entrance).
  - **Eyebrow** (`rise inline-flex items-center gap-2 glass rounded-full pl-2 pr-4 py-1.5 mb-5 max-w-full`): a glowing ember dot `<span className="inline-block shrink-0 w-2 h-2 rounded-full bg-ember shadow-[0_0_12px_3px_rgba(255,59,46,0.7)]" />` + `<span className="min-w-0 text-white/85 text-xs sm:text-sm tracking-wide">` → **`Cosmos SDK · IBC-connected`**.
  - **`<h1>`** `rise font-orbitron text-white text-[2.1rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[1.04] tracking-tight max-w-[760px]` → **`Your sovereignty is always connected.`**
  - **`<p>`** `rise mt-5 text-white/70 text-sm sm:text-base md:text-lg max-w-[560px] leading-relaxed` → **`MarX is an application-specific Layer-1 built on the Cosmos SDK and secured by CometBFT's Byzantine Fault Tolerant consensus. It runs its own validator set with instant, single-block finality, yet speaks natively to 100+ sovereign chains over IBC.`**
  - **Email capture** `<form className="rise relative mt-7 max-w-[480px] glass-strong rounded-full">`: an `email` input (`sr-only` label, `placeholder` = **`Enter your email for protocol updates`**, classes `w-full bg-transparent text-white placeholder-white/45 outline-none px-5 sm:px-6 py-3.5 sm:py-4 text-sm pr-[8.5rem] sm:pr-44`) and an absolute submit button (`absolute right-1.5 top-1/2 -translate-y-1/2 inline-flex items-center gap-1.5 bg-white text-gray-900 text-xs sm:text-sm font-medium px-3.5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-white/90 active:scale-[0.98] transition`) → text **`Join the list`** + `<ArrowRight className="w-3.5 h-3.5" />`.
  - **Feature pills — mobile** (`flex sm:hidden flex-wrap gap-2 mt-5`): each `glass text-white text-xs px-3 py-1.5 rounded-full`.
- **Right column — feature pills (desktop)** (`hidden sm:flex flex-col items-end gap-2 self-end`): each `rise glass text-white text-xs sm:text-sm px-4 py-2 rounded-full` with staggered `style={{ animationDelay: `${0.1 * i}s` }}`.
  - Pills (both columns): **`Instant single-block finality`** · **`Native IBC to 100+ chains`** · **`Sovereign, builder-first L1`**.
- **Scroll cue** (`hidden sm:flex justify-center mt-10 text-white/40`): `<ChevronDown className="w-5 h-5 animate-floaty" />`.

### SECTION 3 — StatsBand (`src/components/StatsBand.jsx`)

A glass band that overlaps up into the hero (`-mt-6 sm:-mt-10`), wrapped in `Reveal`.

- Wrapper: `<section className="relative px-4 sm:px-10 lg:px-12 -mt-6 sm:-mt-10">`.
- `<Reveal className="max-w-7xl mx-auto glass-strong rounded-3xl">` → grid `grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/10`.
- Each cell `p-6 sm:p-8 text-center`: value `font-orbitron ink-gradient text-3xl sm:text-4xl lg:text-5xl leading-none`, label `text-white/55 text-xs sm:text-sm mt-2.5 tracking-wide`.

| Value | Label |
|---|---|
| `~2s` | `Configured block time` |
| `Single-block` | `Deterministic finality` |
| `Thousands/s` | `Sustained throughput (TPS)` |
| `100+` | `IBC-connected chains` |

### SECTION 4 — Generic `Section` (`src/components/Section.jsx`)

A polymorphic section renderer. A `Header` (kicker + heading + subheading), then a body picked from `LAYOUTS[section.layoutHint]` (default `FeatureGrid`). Wrapper: `<section id={slug(section.id)} className="relative px-4 sm:px-10 lg:px-12 py-20 sm:py-28 scroll-mt-24"><div className="max-w-7xl mx-auto">…</div></section>`.

**`Header`** (wrapped in `Reveal`, `max-w-3xl`, left-aligned): a row with `<span className="h-px w-8 bg-gradient-to-r from-ember to-transparent" />` + kicker `<span className="text-xs sm:text-sm uppercase tracking-[0.22em] text-plasma/90">`, then `<h2 className="font-orbitron text-white text-[2rem] sm:text-[2.75rem] lg:text-[3.25rem] leading-[1.08] tracking-tight mt-4">`, then `<p className="text-white/65 text-sm sm:text-base md:text-lg leading-relaxed mt-4">`.

**`IconChip`** (shared): `inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-plasma` wrapping `<Icon name={...} className="w-5 h-5" />`.

**Body layouts** (each card is a `Reveal` with `delay={(i % cols) * 90}` and `glass rounded-2xl`):
- **`FeatureGrid`** — `grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-12`; card `p-6 sm:p-7 hover:border-white/25 transition-colors group` → IconChip, `<h3 className="text-white text-lg font-medium mt-5">`, `<p className="text-white/60 text-sm leading-relaxed mt-2.5">`.
- **`EcosystemGrid`** — `grid sm:grid-cols-2 gap-4 sm:gap-5 mt-12`; card `p-6 sm:p-7 flex items-start gap-4 hover:border-white/25 transition-colors group relative overflow-hidden`, with an ambient hover glow `<div className="pointer-events-none absolute -top-12 -right-12 w-40 h-40 rounded-full bg-cosmic/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />`; title row pairs `<h3>` with `<ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" />`.
- **`TwoColumn`** — `grid lg:grid-cols-2 gap-4 sm:gap-5 mt-12`; card `p-6 sm:p-7 flex items-start gap-5 hover:border-white/25 transition-colors` → IconChip + (`<h3 className="text-white text-lg font-medium">` + `<p className="text-white/60 text-sm leading-relaxed mt-2">`).
- Also defined but unused by any section (keep them in the `LAYOUTS` map so `layoutHint` stays swappable): **`Steps`** (`grid …lg:grid-cols-4`, padded index `String(i+1).padStart(2,'0')` in `font-orbitron …ink-gradient` beside an IconChip) and **`SplitStats`** (a `glass rounded-3xl p-2 sm:p-3` shell over a 3-col grid with internal dividers).

```js
const LAYOUTS = {
  'feature-grid': FeatureGrid,
  'ecosystem-grid': EcosystemGrid,
  steps: Steps,
  'two-column': TwoColumn,
  'split-stats': SplitStats,
}
```

#### Section 4a — Thesis (`id: thesis`, `layoutHint: two-column`)

- Kicker: **`The internet of blockchains`**
- Heading: **`Sovereign by design, interoperable by default.`**
- Subheading: **`Builders have faced a false choice: deploy a contract on a congested shared chain and surrender control of your economics, or spin up an isolated chain and lose reach behind custodial bridges. MarX refuses the tradeoff — its own Layer-1 with full control of token, fees, governance, and upgrades, natively connected to the wider Cosmos through trust-minimized IBC.`**
- Items:
  1. **`An appchain, not a tenant`** — `MarX is a true application-specific Layer-1 assembled from audited Cosmos SDK modules — not a smart contract competing for blockspace on someone else's chain. It is not an L2, not a rollup, and does not settle to or inherit security from any other ecosystem.` — icon `Orbit`
  2. **`Connected, never isolated`** — `Through IBC, MarX moves tokens and arbitrary messages to 100+ sovereign chains. Each side runs an on-chain light client that verifies a Merkle proof against the counterparty's block header before acting — so there is no custodial bridge in the path.` — icon `Waypoints`
  3. **`Full-stack control`** — `Own native token, own gas and fee model, own on-chain governance, own validator set and upgrade path. Performance and economics are tuned for your application, never hostage to unrelated traffic.` — icon `SlidersHorizontal`

#### Section 4b — Protocol (`id: protocol`, `layoutHint: feature-grid`)

- Kicker: **`Core protocol`**
- Heading: **`Battle-tested modules. Deterministic consensus.`**
- Subheading: **`MarX is composed from the same open-source stack behind hundreds of production chains, then tuned for instant finality and low, predictable fees. Every claim below is grounded in how CometBFT and the Cosmos SDK actually work.`**
- Items (6):
  1. **`Instant, single-block finality`** — `CometBFT commits a block once validators holding more than two-thirds of voting power precommit to it. Once committed, it is final and cannot be reorganized — no confirmations to wait on — as long as fewer than one-third of validators are faulty. Deterministic finality, honestly qualified.` — icon `Zap`
  2. **`Trust-minimized IBC`** — `Cross-chain transfers run over IBC, not a custodial bridge. Each chain verifies a Merkle proof against the counterparty block header via an on-chain light client; relayers transport packets but can neither forge nor alter them.` — icon `Network`
  3. **`Sovereign appchain architecture`** — `MarX runs its own validator set under Delegated Proof-of-Stake and controls its full stack. It is not secured by the Cosmos Hub or ATOM — it bootstraps and maintains its own validator security in exchange for complete control of performance and economics.` — icon `ShieldCheck`
  4. **`Composable SDK modules`** — `Assembled from pre-built, well-audited modules — staking, governance, bank, IBC, slashing, authz, CosmWasm — or extended with custom logic. Build a chain shaped to your application instead of forcing your logic into a generic environment.` — icon `Boxes`
  5. **`Low, configurable fees`** — `MarX charges low, configurable fees — not zero — with block times tuned per chain. DeFi and high-frequency RWA markets get headroom to operate without the gas spikes of congested shared chains.` — icon `Coins`
  6. **`Validator & staking security`** — `Token holders delegate stake to validators and keep ownership while sharing rewards. Misbehavior is slashed and downtime is jailed; double-signing is tombstoned. Security scales with bonded stake under a capped, ranked active set.` — icon `Lock`

#### Section 4c — Ecosystem (`id: ecosystem`, `layoutHint: ecosystem-grid`)

- Kicker: **`The ecosystem`**
- Heading: **`A home for markets that move.`**
- Subheading: **`Instant finality, thousands of TPS, and trust-minimized settlement make MarX a credible base layer for latency- and cost-sensitive applications — all natively interoperable across the interchain.`**
- Items (6):
  1. **`DeFi protocols`** — `Orderbooks, AMMs, perps, and lending that need deterministic finality and low fees. No reorg risk on fills, no gas spikes from unrelated apps.` — icon `LineChart`
  2. **`Real-world-asset markets`** — `RWA issuers get predictable economics and trust-minimized cross-chain settlement, backed by single-block finality for clean, auditable books.` — icon `Landmark`
  3. **`Sovereign appchains`** — `Teams launch their own application-specific chains with full control of token and governance, then plug into MarX and the interchain over IBC.` — icon `Layers`
  4. **`Interchain apps`** — `Applications that span chains, routing tokens and messages across 100+ IBC-connected zones, with a path to Ethereum via IBC Eureka.` — icon `Globe`
  5. **`Wallets & tooling`** — `Explorers, indexers, relayers, and wallets that speak the Cosmos stack natively — familiar, mature interfaces from day one.` — icon `Wallet`
  6. **`Validators & infra`** — `Professional operators secure the chain under DPoS, earning rewards for honest signing and uptime while delegators share in network security.` — icon `Server`

### SECTION 5 — Tokenomics (`src/components/Tokenomics.jsx`)

Own section, `id="token"`, same Header pattern (kicker **`Token`**). `BAR_COLORS = ['#FF4D2E', '#FF8A3D', '#8B5CF6', '#38E1D6', '#F4ECE3', '#c084fc']`.

- Heading: **`The $MARX token powers the network`** (rendered as `The {token} token powers the network`).
- Subheading: **`A fixed supply of 1,000,000,000 $MARX secures the chain, pays for execution, and gives holders a direct voice in how the protocol evolves.`** (rendered from `supply`).
- Two-column body (`grid lg:grid-cols-2 gap-5 mt-12 items-start`):
  - **Distribution card** (`Reveal glass rounded-3xl p-6 sm:p-8`): title **`Token distribution`** + `<span className="font-orbitron ink-gradient text-2xl">$MARX</span>`; a stacked allocation bar (`flex h-3 w-full overflow-hidden rounded-full bg-white/5`, each segment `width: percent%`, `background: BAR_COLORS[i]`, `title="{label} — {percent}%"`); then a legend list, each row a colored dot + label + `{percent}%` (`tabular-nums`).
  - **Utility card** (`Reveal delay={90} glass rounded-3xl p-6 sm:p-8`): title **`Where $MARX is used`**; a list where each item has a `Check` chip (`bg-ember/15 border border-ember/30 text-ember`) + text; then a 2-col mini-grid: **`Total supply`** = `1,000,000,000 $MARX`, **`Symbol`** = `$MARX`.

**Distribution** (label / percent):
| Allocation | % |
|---|---|
| `Ecosystem & community incentives` | 30 |
| `Staking rewards & validator security` | 22 |
| `Core contributors & team (vested)` | 18 |
| `Treasury & community pool` | 15 |
| `Investors & strategic partners (vested)` | 10 |
| `Public launch & liquidity` | 5 |

**Utility** (verbatim, in order):
- `Gas — $MARX pays low, configurable transaction fees across the chain.`
- `Staking & security — delegate or self-bond to validators under DPoS to secure consensus and earn rewards.`
- `Governance — stake-weighted voting (Yes / No / Abstain / NoWithVeto) to set parameters and authorize upgrades.`
- `Interchain incentives — reward operators that relay IBC packets and keep cross-chain channels live.`
- `Community pool — governance-directed treasury funding for ecosystem grants and public goods.`
- `Slashing collateral — bonded $MARX is at risk for downtime and double-signing, aligning validators with safety.`

### SECTION 6 — Roadmap (`src/components/Roadmap.jsx`)

Own section, `id="roadmap"`, Header (kicker **`Roadmap`**, heading **`The road to an interchain frontier`**, subheading **`From testnet to a fully sovereign, IBC-connected mainnet — shipped in the open.`**).

- Grid `grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-12`. Each phase is a `Reveal` `glass rounded-2xl p-6 sm:p-7`: a plasma row with `<Circle className="w-3 h-3 fill-current" />` + `timeframe` (`text-xs uppercase tracking-[0.18em] text-white/55`); then `phase` (`text-white/40 font-orbitron text-sm`), `title` (`<h3 className="text-white text-lg font-medium mt-1">`), then a list where each item is `<Dot className="w-4 h-4 text-ember shrink-0 mt-0.5" />` + text.

| Phase | Timeframe | Title | Items |
|---|---|---|---|
| `Phase 01` | `2025` | `Foundation & testnet` | `Assemble the chain from audited Cosmos SDK modules on CometBFT` · `Launch incentivized public testnet with open validator onboarding` · `Open IBC channels to initial Cosmos partner chains` · `Publish core protocol docs, SDKs, and quickstarts` |
| `Phase 02` | `2026` | `Mainnet & sovereignty` | `Mainnet launch with the genesis validator set under DPoS` · `Activate on-chain governance and the community pool` · `$MARX staking, delegation, and slashing live` · `CosmWasm smart contracts enabled for builders` |
| `Phase 03` | `2026` | `Interchain expansion` | `Expand native IBC connectivity toward 100+ sovereign chains` · `Onboard launch-partner DeFi and RWA market protocols` · `Pursue an Ethereum path via IBC Eureka` · `Grow validator decentralization and relayer coverage` |
| `Phase 04` | `2027` | `Maturity & decentralization` | `Hand parameter and upgrade authority fully to on-chain governance` · `Ecosystem grants program from the community pool` · `Performance tuning toward higher sustained throughput` · `Deepen interchain tooling, wallets, and explorer support` |

### SECTION 7 — CTABand (`src/components/CTABand.jsx`)

The `community` section (`layoutHint: cta-band`), split out in `App.jsx`. `id="community"`. `useState('')` email; `submit` alerts `` `Welcome to the frontier — we'll be in touch: ${email}` `` then clears.

- Wrapper: `<section id="community" className="relative px-4 sm:px-10 lg:px-12 py-20 sm:py-28 scroll-mt-24">`.
- Card: `<Reveal className="max-w-5xl mx-auto glass-strong rounded-[2rem] p-8 sm:p-14 text-center relative overflow-hidden">` with an ambient ember glow `<div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] rounded-full bg-ember/20 blur-[100px]" />`.
- Content: `<Logo gradient className="w-10 h-10 mx-auto animate-floaty" />`, then kicker **`Join the frontier`** (`text-plasma/90`), heading **`Claim your zone on the interchain.`** (`font-orbitron …text-[2.2rem] sm:text-[3.25rem] lg:text-[3.75rem]`), subheading **`MarX is governed by the people who build and stake on it. Bring your appchain, your DeFi protocol, or your RWA market to a sovereign Layer-1 that is connected by default.`**
- Email form (`glass rounded-full`, placeholder **`Your email address`**) with submit button text **`Launch App`** (from `cta`) + `<ArrowRight className="w-3.5 h-3.5" />`.
- Quick links grid (`mt-10 grid sm:grid-cols-3 gap-3 sm:gap-4 text-left`), each an `<a href="#top" className="glass rounded-2xl p-5 hover:border-white/25 transition-colors group">` with an icon chip + `<ArrowUpRight />`, title, desc:
  1. **`Launch App`** — `Stake $MARX, delegate to validators, and interact with apps live on MarX.` — icon `Rocket`
  2. **`Read the docs`** — `Architecture, module reference, and quickstarts to take you from devnet to mainnet.` — icon `BookOpen`
  3. **`Join the community`** — `Builders, validators, and delegators coordinating governance and shipping in the open.` — icon `Users`

### SECTION 8 — Footer (`src/components/Footer.jsx`)

- Wrapper: `<footer className="relative px-4 sm:px-10 lg:px-12 pt-16 pb-10">` → inner `glass rounded-3xl p-8 sm:p-12`.
- Top grid `grid gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]`:
  - **Brand cell**: `<Logo gradient className="w-7 h-7" />` + wordmark **`MarX`** (`font-orbitron text-white text-xl`); descriptor **`MarX is a sovereign, interoperable Layer-1 built on the Cosmos SDK and secured by CometBFT — where builders launch appchains, DeFi, and real-world-asset markets with instant finality, low fees, and native IBC connectivity to 100+ chains.`**; then social chips (`text-xs …rounded-full border border-white/10 bg-white/5`): **`X / Twitter`, `Discord`, `Telegram`, `GitHub`, `Medium`**.
  - **3 link columns** (title `text-white/90 text-sm font-medium`, links `text-white/55 hover:text-white text-sm`):
    - **`Protocol`** — `How it works` · `Consensus & finality` · `IBC interoperability` · `Validators & staking` · `Governance`
    - **`Build`** — `Documentation` · `Quickstart` · `Cosmos SDK modules` · `CosmWasm` · `GitHub`
    - **`Ecosystem`** — `DeFi` · `RWA markets` · `Appchains` · `Interchain apps` · `Wallets & tooling`
    - **`Community`** — `Governance forum` · `Blog` · `Brand kit` · `Careers` · `Contact`

  > Note: the footer renders **all four** of these columns (`footer.columns`); the `lg:grid-cols-[1.4fr_repeat(3,1fr)]` template only sizes the first row of cells — the brand cell plus the four columns wrap responsively.
- Bottom bar (`mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3`):
  - Legal (`text-white/45 text-xs`): **`© 2026 MarX. Built on the open-source Cosmos SDK and CometBFT (formerly Tendermint). $MARX is a utility token for gas, staking, and governance — not an investment; nothing here is financial advice. MarX is a sovereign Layer-1 and is not secured by the Cosmos Hub or ATOM.`**
  - Right (`text-white/45 text-xs`): **`© MarX. Built on the Cosmos SDK · Secured by CometBFT.`**

---

## LAYER 8 — ANIMATION STANDARDS

No animation library. Three motion sources, all `cubic-bezier(0.22, 1, 0.36, 1)`:

1. **`.rise`** (CSS `@keyframes rise-in`, 0.9 s, `both`) — above-the-fold Hero blocks animate on load. Desktop feature pills stagger via `animationDelay: 0.1 * i`. Gated behind `prefers-reduced-motion: no-preference`; final state is fully visible.
2. **`Reveal`** (IntersectionObserver, 0.8 s opacity + translateY) — every below-the-fold card/header. `threshold: 0.12`, `rootMargin: '0px 0px -8% 0px'`, per-card `delay = (i % cols) * 90` ms (80 ms in SplitStats). A **1200 ms failsafe** guarantees reveal even if the observer misfires; unsupported observer renders visible immediately.
3. **Tailwind keyframes** `floaty` (6 s up-down, on the hero scroll-cue chevron, the CTA logo, etc.) and `shimmer` (defined; available for gradient sweeps).
4. **Hover micro-states** (pure CSS `transition`): card borders brighten to `white/25`; `ArrowUpRight` shifts `white/30 → white`; ecosystem cards bloom a `bg-cosmic/10 blur-2xl` glow; buttons `active:scale-[0.98]`.

The **scroll-scrubbed video** (Layer 5) is the centerpiece motion. No parallax, no typewriter, no animated number counters.

---

## LAYER 9 — RESPONSIVE STANDARDS

- Global side padding `px-4 sm:px-10 lg:px-12`; content sections cap at `max-w-7xl mx-auto`; section rhythm `py-20 sm:py-28` with `scroll-mt-24` for anchor offset.
- Hero `<h1>` scales `text-[2.1rem] → sm:[3.5rem] → md:[4.5rem] → lg:[5.5rem]`; section `<h2>` `text-[2rem] → sm:[2.75rem] → lg:[3.25rem]`.
- Nav center links are `hidden lg:flex`; below `lg`, a glass toggle opens the absolute mobile menu. The desktop `Launch App` button is `hidden sm:block`.
- Hero feature pills: vertical right column on `sm+`, wrapped chips under the form on mobile (`flex sm:hidden`).
- Grids collapse: stats `grid-cols-2 lg:grid-cols-4`; feature `sm:grid-cols-2 lg:grid-cols-3`; ecosystem/tokenomics `lg:grid-cols-2`; roadmap `sm:grid-cols-2 lg:grid-cols-4`.
- The background video uses `object-[80%_center] md:object-[right_center] lg:object-center` so the planet stays framed across widths.

---

## LAYER 10 — ICON SET

Icons come only from the explicit `Icon.jsx` registry (Layer 6) — lucide-react, `strokeWidth={1.6}`, unknown name → `Sparkles` fallback. Icons used by name:

- **Section/registry icons** (via `<Icon name=... />`): `Orbit`, `Waypoints`, `SlidersHorizontal`, `Zap`, `Network`, `ShieldCheck`, `Boxes`, `Coins`, `Lock`, `LineChart`, `Landmark`, `Layers`, `Globe`, `Wallet`, `Server`, `Rocket`, `BookOpen`, `Users`. (The registry also pre-imports `Radio`, `CircleCheckBig`, `GitCompareArrows`, `Vote`, `Blocks`, `Cpu`, `Repeat`, `GitBranch`, `Code`, `Gauge` for swappable content — keep them.)
- **Direct imports in components:** `Menu`, `X` (Nav) · `ArrowRight`, `ChevronDown` (Hero) · `ArrowUpRight` (ecosystem cards, CTA quick links) · `Check` (Tokenomics utility) · `Circle`, `Dot` (Roadmap).

Do not introduce icons outside this list.

---

## LAYER 11 — REPRODUCE-EXACTLY CLAUSE

Reproduce exactly. Do not:
- Substitute fonts — display is **Orbitron** (wordmark, headings, numerals), body is **Sora**. Not "a geometric sans like Orbitron".
- Round colors — bg is `#07060A`, text `#F6EFE6`, accents exactly `#FF3B2E` / `#FF9A4D` / `#8B5CF6` / `#38E1D6`. The distribution bar uses its own list `['#FF4D2E','#FF8A3D','#8B5CF6','#38E1D6','#F4ECE3','#c084fc']`.
- Replace the background mechanic — it is one **fixed**, **scroll-scrubbed** `<video>` that plays its whole timeline across the page scroll, with the inertial-ease + single-seek algorithm and the luminance-aware `.bg-scrim`. Not a looping autoplay hero, not parallax.
- Swap the scroll-scrub `<video src>` for a local path or a `{{ placeholder }}` — it is the CDN URL `https://cdn.5sdesign.art/projects/marx/background.mp4`. Keep the all-intra-encode and single-seek notes; they describe how to host/encode that file.
- Add an animation library — motion is CSS `.rise`, the IntersectionObserver `Reveal`, and Tailwind `floaty`/`shimmer` only.
- Add a light mode, page-background gradient, or pure-white body text (body is `white/70`, captions `white/55`).
- Reword copy — every heading, subheading, item title/desc, stat, utility line, roadmap bullet, and the two footer legal/credit lines are verbatim above.
- Drop the fail-safes — the `.rise` keyframe ends visible, and `Reveal` has the 1200 ms failsafe + unsupported-observer immediate show.
- Replace the inline Mars-globe `Logo` SVG with a raster/stock image, or remove the `useId()` unique-gradient IDs.

The terms **Cosmos SDK, CometBFT, IBC, IBC Eureka, Ethereum, DPoS, CosmWasm, ATOM, Cosmos Hub, `$MARX`** are MarX's own product domain (it is a Cosmos-ecosystem Layer-1) — keep them verbatim. If a constraint conflicts with a framework limit, clamp to the nearest valid value and leave a comment — do not silently change.

---

## FILE TREE (exact output expected)

```
MarX/
├── index.html              # Orbitron + Sora Google Fonts, favicon.svg, title + description
├── tailwind.config.js      # tokens from Layer 3 (orbitron/sora, ember/plasma/cosmic/signal/bone, floaty/shimmer)
├── postcss.config.js       # tailwindcss + autoprefixer
├── vite.config.js          # @vitejs/plugin-react (server port 5180, host true)
├── public/
│   └── favicon.svg         # Mars-globe mark
└── src/
    ├── main.jsx            # render <App/> inside <React.StrictMode>
    ├── index.css           # Layer 4 verbatim
    ├── App.jsx             # fixed VideoBackground + z-10 stack of sections (Layer 7)
    ├── data/
    │   └── brief.js        # the content brief object — all copy from Layers 7 & 9
    └── components/
        ├── VideoBackground.jsx  # Layer 5 verbatim — scroll-scrubbed fixed video
        ├── Nav.jsx              # fixed glass nav + mobile menu
        ├── Hero.jsx             # eyebrow, h1, subtitle, email capture, feature pills, scroll cue
        ├── StatsBand.jsx        # overlapping glass stats band
        ├── Section.jsx          # polymorphic section (Header + layout body)
        ├── Tokenomics.jsx       # distribution bar + utility list
        ├── Roadmap.jsx          # 4 phase cards
        ├── CTABand.jsx          # community CTA + quick links
        ├── Footer.jsx           # brand + 4 link columns + legal
        ├── Reveal.jsx           # Layer 6 verbatim — IntersectionObserver + failsafe
        ├── Icon.jsx             # Layer 6 verbatim — explicit lucide registry
        └── Logo.jsx             # Layer 6 verbatim — Mars-globe SVG
```

`vite.config.js`:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: { port: 5180, host: true },
})
```

---

## DELIVERY CHECKLIST

- [ ] `npm create vite@latest . --template react` (React 18 + Vite), then `npm i lucide-react` and `npm i -D tailwindcss@3 postcss autoprefixer`. No motion library.
- [ ] `tailwind.config.js` carries the full token block (orbitron/sora, ember/plasma/cosmic/signal/bone, floaty/shimmer keyframes + animations).
- [ ] `postcss.config.js` = `tailwindcss` + `autoprefixer`; `index.css` pasted verbatim from Layer 4.
- [ ] `index.html` loads Orbitron + Sora, title `MarX — The Interoperable Layer-1 for the Cosmos Frontier`, the meta description, `favicon.svg`.
- [ ] `main.jsx` renders `<App/>` **inside** `<React.StrictMode>`.
- [ ] `VideoBackground.jsx` pasted verbatim; `src` = `https://cdn.5sdesign.art/projects/marx/background.mp4`; scroll-scrub (inertial `*0.16`, one-frame trim `-0.04`, single-seek `>0.012`, 220 ms gate) + reduced-motion ambient fallback.
- [ ] `Reveal.jsx`, `Icon.jsx`, `Logo.jsx` pasted verbatim (IntersectionObserver + 1200 ms failsafe; explicit icon registry; `useId()` Mars-globe SVG).
- [ ] `brief.js` holds all copy verbatim (Layers 7 & 9); `App.jsx` filters the `cta-band` section out for `CTABand`.
- [ ] Render order: Nav → Hero → StatsBand → Thesis(two-column) → Protocol(feature-grid) → Ecosystem(ecosystem-grid) → Tokenomics → Roadmap → CTABand(community) → Footer.
- [ ] Palette exact: bg `#07060A`, text `#F6EFE6`, ember `#FF3B2E`, plasma `#FF9A4D`, cosmic `#8B5CF6`, signal `#38E1D6`.
- [ ] Glass (`rgba(0,0,0,0.22)` blur 14) + glass-strong (`rgba(0,0,0,0.34)` blur 22) + `.bg-scrim` radial+linear + `.ink-gradient` `100deg #ff9a4d → #ff3b2e → #8b5cf6`.
- [ ] No light mode, no page-bg gradient, no pure-white body text, no emoji, no `bg-blue-500`.
- [ ] Cosmos SDK / CometBFT / IBC / IBC Eureka / Ethereum / DPoS / CosmWasm / ATOM / `$MARX` kept verbatim (MarX's own product domain).
```

