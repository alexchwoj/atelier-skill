# Adam.dev

> A single prompt that recreates the Adam.dev website **exactly**: every font, color, class, animation, copy string, asset path and SVG icon. Anything inside `{{ DOUBLE_BRACES }}` is intentionally a customization slot — everything outside the braces is **invariant** and must be reproduced verbatim.
>

---

## LAYER 0 — META

```yaml
asset_id: adam-dev-vibe-coding-01
category: single-page-marketing-site
aesthetic: liquid-glass + minimal + green/white + film-noise
industry: developer-education / indie-edtech
tone: premium, optimistic, technical
preview_assets:
 - /logo.png
 - https://cdn.5sdesign.art/projects/Adamdev/adam.jpg
 - https://cdn.5sdesign.art/projects/Adamdev/code-01.jpg... https://cdn.5sdesign.art/projects/Adamdev/code-08.jpg
 - /fonts/ppneuebit-bold.otf
 - /fonts/ppmondwest-regular.otf
license: proprietary — Adam.dev internal
version: 1.0
last_updated: 2026-06-01
```

---

## LAYER 1 — OPENING DECLARATION

Build a **single-page marketing site** for **Adam.dev** — an async video-course brand teaching **vibe coding** (shipping software with AI agents like Cursor and Claude Code as a pair-programmer).

Use the following **pinned** tech stack (do not substitute):

- **React 18 + JSX (no TypeScript) + Vite 5**
- **Tailwind CSS 3** with the config in Layer 3
- **No Framer Motion, no GSAP, no animation libraries** — animations are pure CSS transitions triggered by a custom `useInView` IntersectionObserver hook
- **No icon libraries** — all icons are inline SVG paths from the Adam.dev Icon Kit v1 (Layer 10)
- Fonts: **PP Neue Bit Bold** + **PP Mondwest** self-hosted from `/public/fonts/`, **Inter** via Google Fonts

The aesthetic is **minimal white + emerald-green accents, with a soft liquid-glass card system, subtle radial green auroras drifting in the background, a fine SVG film-grain overlay across the whole page, and pixel-bitmap display type on every headline**. The global background is `#ffffff`. Default text color is `#0a0a0a`. **Do not use orange, purple, blue, pink, neon or any color outside the emerald palette anywhere.**

---

## LAYER 2 — FONTS

Self-host PP Neue Bit Bold and PP Mondwest from `/public/fonts/` (license: paid). Load Inter from Google Fonts.

`index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
```

`src/index.css` (top of file, before `@tailwind`):

```css
@font-face {
  font-family: 'PP Mondwest';
  src: url('/fonts/ppmondwest-regular.otf') format('opentype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'PP Neue Bit';
  src: url('/fonts/ppneuebit-bold.otf') format('opentype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

Tailwind config extension:

```js
fontFamily: {
  sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
  mondwest: ['"PP Mondwest"', '"Times New Roman"', 'serif'],
  bit: ['"PP Neue Bit"', '"IBM Plex Mono"', 'monospace'],
  mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
},
```

**Usage rules (invariant):**

- All section `<h1>` and `<h2>` titles → `font-bit uppercase` (PP Neue Bit Bold, ALL CAPS).
- All numeric/price/stat displays → `font-bit` (e.g. `$199`, `36+`, `1,200+`, course price pills).
- Body text, paragraphs, lists, buttons, navigation → Inter (`font-sans`, the default).
- Monospace inside the Hero terminal mockup → `font-mono`.
- PP Mondwest is loaded but not currently used on any page — keep the face declaration for future editorial sections.

If PP Neue Bit Bold is unavailable, fall back to `"IBM Plex Mono"` weight 700 (already declared) and document the substitution as a code comment. Never substitute Inter with anything other than the system stack already declared.

---

## LAYER 3 — COLOR SYSTEM

Single light theme. No dark mode. Colors are extended into Tailwind under the `brand` namespace so utilities like `bg-brand-500`, `text-brand-600`, `ring-brand-200/60` work everywhere.

`tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#10b981',
          50:  '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
        },
      },
      fontFamily: { /* see Layer 2 */ },
      borderRadius: {
        DEFAULT: '14px',
        lg: '20px',
        xl: '28px',
      },
      boxShadow: {
        glow:  '0 0 60px rgba(16,185,129,0.30)',
        glass: 'inset 0 1px 0 rgba(255,255,255,0.6), 0 8px 32px -8px rgba(16,185,129,0.18)',
      },
    },
  },
  plugins: [],
}
```

`src/index.css` — base layer:

```css
@layer base {
  html { scroll-behavior: smooth; scroll-padding-top: 5rem; }
  html, body { background: #ffffff; color: #0a0a0a; }
  body {
    font-feature-settings: 'ss01', 'cv11';
    background:
      radial-gradient(1200px 700px at 92% -10%, rgba(16,185,129,0.10), transparent 60%),
      radial-gradient(900px 600px at -10% 30%, rgba(110,231,183,0.10), transparent 60%),
      radial-gradient(700px 500px at 50% 110%, rgba(52,211,153,0.08), transparent 60%),
      #ffffff;
  }
  ::selection { background: rgba(16,185,129,0.25); color: #0a0a0a; }
}
```

These three radial gradients are **permanent** on `body` — they tint the page with very soft green halos at top-right, mid-left, and bottom-center.

---

## LAYER 4 — CUSTOM CSS UTILITIES (the Adam.dev "design DNA")

**Invariant block.** Paste verbatim — do not paraphrase, do not "improve".

All utilities live in `src/index.css` under `@layer components` or root scope.

### 4a. Liquid-glass cards (signature treatment)

```css
@layer components {
  .glass {
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.72) 0%,
      rgba(255, 255, 255, 0.40) 100%
    );
    backdrop-filter: blur(20px) saturate(1.6);
    -webkit-backdrop-filter: blur(20px) saturate(1.6);
    border: 1px solid rgba(255, 255, 255, 0.7);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.85),
      inset 0 -1px 0 rgba(16, 185, 129, 0.06),
      0 12px 32px -12px rgba(16, 185, 129, 0.18);
  }
  .glass-dark {
    background: linear-gradient(
      135deg,
      rgba(6, 78, 59, 0.85) 0%,
      rgba(4, 47, 36, 0.92) 100%
    );
    backdrop-filter: blur(20px) saturate(1.4);
    -webkit-backdrop-filter: blur(20px) saturate(1.4);
    border: 1px solid rgba(167, 243, 208, 0.25);
    color: #ecfdf5;
    box-shadow:
      inset 0 1px 0 rgba(167, 243, 208, 0.18),
      0 12px 32px -12px rgba(0, 0, 0, 0.4);
  }
  .glass-pill {
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(12px) saturate(1.4);
    -webkit-backdrop-filter: blur(12px) saturate(1.4);
    border: 1px solid rgba(255, 255, 255, 0.75);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.85),
      0 4px 16px -8px rgba(16, 185, 129, 0.15);
  }
}
```

**Where to use each:**

- `.glass` — large content panels (Schedule left card, FAQ accordion list, Register payment panel, Register bundle card, Hero terminal mockup outer frame, Courses bundle CTA, course cards, About avatar frame, Footer cards).
- `.glass-dark` — declared for future use; currently not applied on any production element.
- `.glass-pill` — small chips: Hero live-status pill, About floating "10+ years" badge, About social link pills, course tag pill, payment row container, Schedule stat pills, Footer social icon circles.

### 4b. Noise overlays (film grain)

```css
.noise-fixed {
  position: fixed;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  opacity: 0.025;            /* tuned for subtlety */
  mix-blend-mode: multiply;
  background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
}
.noise-card {
  position: relative;
  isolation: isolate;
}
.noise-card::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  opacity: 0.18;
  mix-blend-mode: overlay;
  border-radius: inherit;
  background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
}
```

- `.noise-fixed` is rendered ONCE in `App.jsx` as `<div className="noise-fixed" aria-hidden />` so the grain layer sits above the page background but below all content.
- `.noise-card` is added to glass cards that need extra texture (Hero terminal, Schedule left card, Courses cards via `.glass`, Register panel + bundle, FAQ list, About avatar frame).

### 4c. Aurora blobs (green radial halos that drift)

```css
.aurora {
  position: absolute;
  border-radius: 9999px;
  filter: blur(80px);
  pointer-events: none;
  z-index: 0;
}
.aurora-1 { width: 520px; height: 520px; background: radial-gradient(circle, rgba(16,185,129,0.35), transparent 70%); }
.aurora-2 { width: 420px; height: 420px; background: radial-gradient(circle, rgba(110,231,183,0.40), transparent 70%); }
.aurora-3 { width: 320px; height: 320px; background: radial-gradient(circle, rgba(52,211,153,0.30), transparent 70%); }

@keyframes aurora-drift {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%      { transform: translate(30px, -20px) scale(1.05); }
  66%      { transform: translate(-20px, 30px) scale(0.95); }
}
.aurora-drift { animation: aurora-drift 18s ease-in-out infinite; }
```

**Placement (invariant):**

| Section   | Blobs                                                           |
|-----------|-----------------------------------------------------------------|
| Hero      | aurora-1 at `-top-32 -right-20`; aurora-2 at `bottom-0 -left-20` (delay `-6s`) |
| Schedule  | aurora-3 at `right-10 top-10` (delay `-3s`)                     |
| About     | aurora-2 at `-left-10 top-1/3` (delay `-9s`)                    |
| Courses   | aurora-3 at `right-1/4 top-1/4` (delay `-12s`)                  |
| Register  | aurora-1 at `-top-20 right-1/3` (delay `-4s`)                   |
| Footer    | aurora-3 at `-bottom-20 left-1/2 -translate-x-1/2`              |

Each blob wrapper is `<div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">` with `.aurora .aurora-X .aurora-drift` positioning utilities applied to the blob itself.

### 4d. Reveal-on-scroll utilities (invariant)

```css
.reveal       { opacity: 0; transform: translateY(28px); transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1); }
.reveal.in    { opacity: 1; transform: translateY(0) translateX(0) scale(1); }
.reveal-left  { opacity: 0; transform: translateX(-32px); transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1); }
.reveal-right { opacity: 0; transform: translateX(32px);  transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1); }
.reveal-scale { opacity: 0; transform: scale(0.94);       transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1); }
.reveal-left.in, .reveal-right.in, .reveal-scale.in { opacity: 1; transform: translateX(0) translateY(0) scale(1); }

.reveal.delay-1, .reveal-left.delay-1, .reveal-right.delay-1, .reveal-scale.delay-1 { transition-delay: 0.08s; }
.reveal.delay-2, .reveal-left.delay-2, .reveal-right.delay-2, .reveal-scale.delay-2 { transition-delay: 0.16s; }
.reveal.delay-3, .reveal-left.delay-3, .reveal-right.delay-3, .reveal-scale.delay-3 { transition-delay: 0.24s; }
.reveal.delay-4, .reveal-left.delay-4, .reveal-right.delay-4, .reveal-scale.delay-4 { transition-delay: 0.32s; }
.reveal.delay-5, .reveal-left.delay-5, .reveal-right.delay-5, .reveal-scale.delay-5 { transition-delay: 0.40s; }
.reveal.delay-6, .reveal-left.delay-6, .reveal-right.delay-6, .reveal-scale.delay-6 { transition-delay: 0.48s; }
.reveal.delay-7, .reveal-left.delay-7, .reveal-right.delay-7, .reveal-scale.delay-7 { transition-delay: 0.56s; }
.reveal.delay-8, .reveal-left.delay-8, .reveal-right.delay-8, .reveal-scale.delay-8 { transition-delay: 0.64s; }
```

### 4e. Scroll progress bar

```css
.scroll-progress {
  position: fixed;
  inset: 0 auto auto 0;
  height: 2px;
  background: linear-gradient(90deg, #34d399, #10b981);
  transform-origin: left;
  z-index: 60;
  pointer-events: none;
  transition: transform 0.05s linear;
}
```

### 4f. Micro-animations

```css
@keyframes blink-cursor { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
.blink-cursor { animation: blink-cursor 1s steps(2) infinite; }

@keyframes float-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
.float-slow { animation: float-slow 6s ease-in-out infinite; }
```

### 4g. Accessibility — `prefers-reduced-motion`

```css
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .reveal, .reveal-left, .reveal-right, .reveal-scale {
    opacity: 1 !important; transform: none !important; transition: none !important;
  }
  .float-slow, .blink-cursor, .aurora-drift { animation: none !important; }
  .scroll-progress { display: none; }
}
```

---

## LAYER 5 — BACKGROUND ASSET

Adam.dev **does not use a CloudFront-hosted background video**. The visual depth comes entirely from the layered design system:

1. The three radial gradients painted on `body` (Layer 3).
2. The `.noise-fixed` SVG grain layer (Layer 4b), mounted once in `App.jsx`.
3. Per-section `.aurora` blobs that drift on an 18s loop (Layer 4c).

No external video URL is required. If a future variant adds a background video, host it under `/public/video/` and reference it relatively (e.g. `src="/video/aurora-loop.mp4"`) — never an external CDN URL.

---

## LAYER 6 — SHARED COMPONENTS

Adam.dev avoids Framer Motion / GSAP. All entry animation is driven by **one** custom hook + the CSS utilities in Layer 4d.

### `useInView` — IntersectionObserver one-shot

File: `src/hooks/useInView.js`

```js
import { useEffect, useRef, useState } from 'react'

export function useInView(threshold = 0.15, rootMargin = '0px 0px -10% 0px') {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true)
          obs.unobserve(el)
        }
      },
      { threshold, rootMargin },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold, rootMargin])

  return [ref, inView]
}
```

Usage pattern in every section:

```jsx
const [sectionRef, inView] = useInView(0.1)
const cls = inView ? 'in' : ''
// ...
<h2 className={`reveal ${cls} font-bit ...`}>…</h2>
<p  className={`reveal delay-1 ${cls} ...`}>…</p>
```

### `ScrollProgress` — top progress bar

File: `src/components/ScrollProgress.jsx`

```jsx
import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf = 0
    const update = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      const next = max > 0 ? doc.scrollTop / max : 0
      setProgress(next)
      raf = 0
    }
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      aria-hidden
      className="scroll-progress"
      style={{ width: '100%', transform: `scaleX(${progress})` }}
    />
  )
}
```

### `App.jsx` (page shell)

```jsx
import Nav from './sections/Nav.jsx'
import Hero from './sections/Hero.jsx'
import Schedule from './sections/Schedule.jsx'
import Curriculum from './sections/Curriculum.jsx'
import About from './sections/About.jsx'
import Courses from './sections/Courses.jsx'
import Register from './sections/Register.jsx'
import Faq from './sections/Faq.jsx'
import Footer from './sections/Footer.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white text-neutral-900">
      <ScrollProgress />
      <div className="noise-fixed" aria-hidden />
      <Nav />
      <main>
        <Hero />
        <Schedule />
        <Curriculum />
        <About />
        <Courses />
        <Register />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}
```

---

## LAYER 7 — SECTIONS (verbatim)

Repeat the seven-block contract for every section. Copy strings, class names and IDs are reproduced exactly — do not paraphrase.

### SECTION 1 — Nav (`<Nav />`)

**Container.** `<nav>` fixed to top, full width, `z-50`. State `scrolled` flips on `window.scrollY > 12`.

When not scrolled: `border-b border-transparent bg-white/30 backdrop-blur-md`
When scrolled: `border-b border-white/40 bg-white/55 shadow-[0_4px_24px_-12px_rgba(16,185,129,0.18)] backdrop-blur-xl`
Inner row: `mx-auto flex max-w-7xl items-center justify-between px-6 transition-[padding] duration-300`
Padding flips: not-scrolled `py-5` → scrolled `py-3`

**Logo (left):**
- Wrapper: `<a href="/" className="flex items-center gap-2 text-base font-semibold tracking-tight text-neutral-900">`
- `<img src="/logo.png" alt="Adam.dev" className="size-8 object-contain" draggable={false} />`
- `<span>Adam<span className="text-brand-500">.dev</span></span>`

**Nav links (`sm:` and up):** `<div className="hidden items-center gap-8 text-sm text-neutral-600 sm:flex">`. Each link uses `transition-colors duration-200 hover:text-brand-600`. Exact entries in order:
1. `Schedule` → `#schedule`
2. `Curriculum` → `#curriculum`
3. `About` → `#about`
4. `Courses` → `#courses`
5. `Enroll` (CTA pill) → `#register`, classes: `inline-flex h-9 items-center justify-center rounded-full bg-neutral-900 px-4 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-md`

**Mobile CTA (`sm:hidden`):** `Enroll` → `#register`, classes: `sm:hidden inline-flex h-9 items-center justify-center rounded-full bg-neutral-900 px-4 text-sm font-medium text-white`.

---

### SECTION 2 — Hero (`<Hero />`)

**Container.** `<section ref={sectionRef} className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 md:pt-40 md:pb-28">`
useInView threshold `0.05`.

**Background.** Aurora wrapper `<div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">` containing:
- `<div className="aurora aurora-1 aurora-drift -top-32 -right-20" />`
- `<div className="aurora aurora-2 aurora-drift bottom-0 -left-20" style={{ animationDelay: '-6s' }} />`

**Layout.** `<div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-16 lg:gap-20">`

**Left column — copy.** Wrapper: `<div className="relative z-10 self-center">`. Children in order, each receiving `reveal delay-N ${cls}`:

1. **Status pill (`delay-0`).** Classes: `glass-pill inline-flex items-center gap-2 rounded-full px-3 py-1 font-sans text-xs font-medium text-neutral-700`. Inside, a relative `flex size-1.5` with a pinging `bg-brand-400 opacity-75` and a solid `bg-brand-500`. Text: `Async · Self-paced · Lifetime access`.

2. **Headline (`delay-1`).** `<h1 className="reveal delay-1 in mt-7 font-bit text-6xl uppercase leading-[0.9] tracking-tight text-neutral-900 md:text-8xl lg:text-9xl">`
   ```html
   Vibe<br/>
   <span className="bg-gradient-to-br from-brand-500 to-brand-700 bg-clip-text text-transparent">Coding</span>
   <span className="blink-cursor ml-2 inline-block text-brand-500">_</span>
   ```

3. **Lead (`delay-2`).** `<p className="reveal delay-2 mt-7 max-w-md text-base leading-relaxed text-neutral-600 md:text-lg">`
   > Ship real software with AI as your pair-programmer. Master **Cursor, Claude Code,** and the agent-first workflows top builders use every day. No fluff — only what actually compiles.

4. **Outcome list (`delay-3`).** `<ul className="reveal delay-3 mt-6 flex max-w-md flex-col gap-2.5 text-sm text-neutral-700">`. Six items, each `<li className="flex items-start gap-2.5">` with a `<span className="mt-0.5 grid size-[18px] shrink-0 place-items-center rounded-full bg-brand-100 text-brand-600"><CheckIcon className="size-3" /></span>`:
   - `Set up your AI dev environment from scratch`
   - `Prompt patterns that produce working code`
   - `Build full-stack apps without writing every line`
   - `Refactor legacy code with AI agents`
   - `Ship side-projects in days, not months`
   - `Lifetime access to all videos & updates`

5. **CTA row (`delay-4`).** `<div className="reveal delay-4 mt-9 flex flex-wrap items-center gap-3">`
   - Primary CTA `<a href="#register">` — `group inline-flex h-12 items-center gap-2 rounded-full bg-neutral-900 pl-6 pr-5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-lg`. Label `Start Learning` + circular arrow `<span className="grid size-7 place-items-center rounded-full bg-white/15 transition-transform duration-200 group-hover:translate-x-0.5"><ArrowRightIcon className="size-3.5" /></span>`.
   - Secondary text link `<a href="#curriculum">` — `inline-flex h-12 items-center rounded-full px-5 text-sm font-medium text-neutral-700 transition-colors duration-200 hover:text-brand-600`. Label `View curriculum`.
   - Price block `<div className="flex flex-col border-l border-neutral-200/70 pl-4 leading-tight"><span className="font-bit text-2xl text-brand-600">$199 USD</span><span className="mt-0.5 text-xs text-neutral-500">full bundle access</span></div>`.

**Right column — `<TerminalCard />`.** Wrapper: `<div className={reveal-scale delay-2 ${cls} relative}>`. Inside:
- Two decorative glow blobs absolutely positioned (`-right-6 -top-6 size-16 rounded-full bg-brand-300/40 blur-2xl` and `-bottom-8 -left-6 size-20 rounded-full bg-brand-400/30 blur-2xl`).
- Outer card `<div className="glass noise-card relative overflow-hidden rounded-3xl p-4 md:p-5">`.
- Window chrome row `mb-3 flex items-center gap-2 px-1`: three dots (`bg-red-400/70`, `bg-amber-400/70`, `bg-brand-400/70`, each `size-2.5 rounded-full`) + `<span className="ml-3 font-mono text-[11px] text-neutral-500">adam@vibe ~ /demo-app</span>`.
- Inner "terminal" `<div className="rounded-2xl bg-neutral-950 p-5 font-mono text-[13px] leading-relaxed text-neutral-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">` containing five `<Line>` rows:
  1. prompt `$` → `claude` (text-brand-300) + `"build me a landing page"` (text-neutral-400)
  2. prompt `✓` → `scaffolding` + `app/page.tsx`
  3. prompt `✓` → `installing` + `tailwindcss, framer-motion`
  4. prompt `✓` → `writing` + `components/Hero.tsx`
  5. prompt `✓` → `running` + `npm run dev`
- Success banner `<div className="mt-3 rounded-md border border-brand-400/40 bg-brand-500/10 px-3 py-2 text-brand-200"><span className="text-brand-300">▲</span> Local: <span className="text-white">http://localhost:3000</span></div>`
- Blinking prompt: `<div className="mt-3 flex items-center gap-2"><span className="text-brand-400">$</span><span className="blink-cursor inline-block size-2 -translate-y-0.5 bg-brand-300" /></div>`
- Caption row beneath terminal `<div className="mt-4 flex items-center justify-between px-1 text-[11px] text-neutral-600">`:
  - Left: `<span className="font-mono">vibe-coding.session.001</span>`
  - Right: `<span className="inline-flex items-center gap-1.5"><span className="size-1.5 rounded-full bg-brand-500" />live recording</span>`

`Line` helper component:

```jsx
function Line({ prompt, text }) {
  return (
    <div className="flex gap-2">
      <span className={prompt === '$' ? 'text-brand-400' : 'text-brand-300'}>{prompt}</span>
      <span className="flex-1">{text}</span>
    </div>
  )
}
```

---

### SECTION 3 — Schedule (`<Schedule />`)

`<section ref={sectionRef} id="schedule" className="relative mx-auto max-w-7xl scroll-mt-24 px-6 py-20 md:py-28">` — `useInView(0.15)`.

Aurora: `aurora-3` at `right-10 top-10`, `animationDelay: '-3s'`.

**Grid.** `<div className="grid grid-cols-1 gap-8 md:grid-cols-[1.8fr_1fr] md:gap-10">`

**Left card (`reveal-left`).**
```html
<div className="reveal-left {cls} glass noise-card relative flex flex-col items-center justify-center overflow-hidden rounded-3xl p-8 text-center ring-1 ring-brand-200/60 md:p-10">
  <div className="text-xs font-medium uppercase tracking-wider text-brand-600">Now enrolling · Cohort 03</div>
  <h2 className="mt-3 font-bit text-4xl uppercase leading-tight tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
    Learn to ship with
    <span className="bg-gradient-to-br from-brand-500 to-brand-700 bg-clip-text text-transparent">AI</span>
    — fast.
  </h2>
  <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600">
    A 3-week guided path through modern AI coding tools. Watch lessons on your own schedule, join the community, and graduate with two production-ready projects on your GitHub.
  </p>
  <div className="mt-7 grid w-full gap-3 sm:grid-cols-3">
    <div className="glass-pill rounded-2xl px-4 py-3 text-center">
      <div className="font-bit text-2xl text-brand-600">36+</div>
      <div className="text-xs uppercase tracking-wider text-neutral-500">Lessons</div>
    </div>
    <div className="glass-pill rounded-2xl px-4 py-3 text-center">
      <div className="font-bit text-2xl text-brand-600">2 live</div>
      <div className="text-xs uppercase tracking-wider text-neutral-500">Projects</div>
    </div>
    <div className="glass-pill rounded-2xl px-4 py-3 text-center">
      <div className="font-bit text-2xl text-brand-600">1,200+</div>
      <div className="text-xs uppercase tracking-wider text-neutral-500">Community</div>
    </div>
  </div>
</div>
```

**Right card (`reveal-right delay-2`).** `<aside className="reveal-right delay-2 {cls} glass flex flex-col rounded-3xl p-7 md:p-8">`
- Eyebrow `<div className="text-xs font-medium uppercase tracking-wider text-brand-600">Schedule</div>`
- Note `<p className="mt-1 text-xs text-neutral-500">(updated weekly)</p>`
- Rows wrapper `<div className="mt-6 flex flex-col divide-y divide-white/60">` with three rows. Each row layout: `<div className="flex items-start gap-4 py-4 first:pt-0 last:pb-0"><span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600 ring-1 ring-brand-100"><Icon /></span><div className="min-w-0 flex-1"><div className="text-xs uppercase tracking-wider text-neutral-500">{key}</div><div>{val}</div></div></div>`.

| Icon                | Key            | Value                  | Value classes                                       |
|---------------------|----------------|------------------------|-----------------------------------------------------|
| `CalendarDaysIcon`  | `Cohort starts`| `July 8 · 2024`        | `mt-1 text-base font-medium text-neutral-900`       |
| `ClockIcon`         | `Format`       | `3 weeks · async videos`| `mt-1 text-base font-medium text-neutral-900`      |
| `CreditCardIcon`    | `Tuition`      | `$199 USD`             | `mt-1 font-bit text-3xl text-brand-600` (highlight) |

- CTA `<a href="#register" className="group mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-neutral-900 px-5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-600">Enroll now<ArrowRightIcon className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" /></a>`

---

### SECTION 4 — Curriculum (`<Curriculum />`)

`<section ref={sectionRef} id="curriculum" className="relative mx-auto max-w-7xl scroll-mt-24 px-6 py-24 md:py-32">` — `useInView(0.1)`.

**Header.** `<div className="mb-16 max-w-2xl md:mb-24">`
```html
<h2 className="reveal {cls} font-bit text-5xl uppercase leading-[1.05] tracking-tight text-neutral-900 md:text-6xl lg:text-7xl">
  A <span className="bg-gradient-to-br from-brand-500 to-brand-700 bg-clip-text text-transparent">3-week</span> path. Hands-on the whole way.
</h2>
<p className="reveal delay-1 {cls} mt-6 max-w-md text-base text-neutral-600 md:text-lg">
  From first prompt to deployed app — minimal theory, maximum reps. Every lesson ends with code that runs.
</p>
```

**Weeks grid.** `<div className="grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-white/60">`. Each `<article>` gets `reveal delay-{i+2} {cls} relative flex flex-col gap-6 py-10 md:py-2` plus row-aware border classes (`border-b border-white/60 md:border-b-0`, `md:pl-10 lg:pl-14`, `md:pr-10 lg:pr-14`).

Inside each week:
```html
<header>
  <div className="font-bit text-sm text-brand-600">Week {w.n}</div>
  <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-[28px]">{w.title}</h3>
</header>
<ul className="flex flex-col gap-3 text-sm text-neutral-700">
  {/* per item: <li className="flex items-start gap-2.5"><span className="mt-0.5 grid size-[18px] shrink-0 place-items-center rounded-full bg-brand-100 text-brand-600"><CheckIcon className="size-3" /></span><span>{item}</span></li> */}
</ul>
```

| Week | Title                          | Items (exact)                                                                                                                |
|------|--------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| 01   | Foundations of Vibe Coding     | Mental model: AI as a junior pair · Setting up Cursor + Claude Code · Prompt anatomy: context, intent, constraints · Your first end-to-end AI session |
| 02   | Agent-First Workflows          | Multi-file refactors with Claude · Spec-driven development · Codebase indexing & retrieval · Test-first prompting           |
| 03   | Ship Real Software             | Building a SaaS in one weekend · Debugging with AI agents · Production-grade error handling · Deploy & iterate live          |

---

### SECTION 5 — About (`<About />`)

`<section ref={sectionRef} id="about" className="relative mx-auto max-w-7xl scroll-mt-24 px-6 py-24 md:py-32">` — `useInView(0.12)`.

Aurora: `aurora-2 aurora-drift -left-10 top-1/3`, `animationDelay: '-9s'`.

**Grid.** `items-center gap-10 md:grid-cols-[0.75fr_1.25fr] md:gap-12 lg:gap-16`.

**Left — avatar:**
```html
<div className="reveal delay-1 {cls} glass noise-card relative overflow-hidden rounded-[2rem] p-3">
  <div className="relative overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-brand-100 to-brand-50">
    <img src="https://cdn.5sdesign.art/projects/Adamdev/adam.jpg" alt="Adam" draggable={false}
         className="aspect-[4/5] h-full w-full object-cover transition-transform duration-[1.4s] ease-out hover:scale-105" />
    <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
  </div>
</div>
```

**Floating badge** (under avatar, centered):
```html
<div className="reveal delay-3 {cls} glass-pill absolute -bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-neutral-700">
  <span className="size-1.5 rounded-full bg-brand-500" />
  10+ years shipping software
</div>
```

**Right — content:**
```html
<h2 className="reveal {cls} font-bit text-5xl uppercase leading-[1.05] tracking-tight text-neutral-900 md:text-6xl lg:text-7xl">Hey, I'm Adam.</h2>
<div className="reveal delay-1 {cls} mt-3 text-base font-medium text-brand-600 md:text-lg">
  Full-stack engineer · Indie hacker · Vibe-coder
</div>

<div className="mt-8 flex flex-col gap-4 text-base leading-relaxed text-neutral-700 md:text-[17px]">
  <p className="reveal delay-3 {cls}">
    I've been writing software for over a decade — at startups, agencies, and most recently as a solo founder. About two years ago AI changed the way I build. I went from typing every line to <strong className="font-semibold text-neutral-900">orchestrating agents</strong> that write, test, and refactor with me.
  </p>
  <p className="reveal delay-4 {cls}">
    Adam.dev is where I share what's actually working — not hype reels, just the workflows, prompts, and patterns I use every day to ship faster than ever. If you can write a sentence, <strong className="font-semibold text-neutral-900">you can build software now.</strong>
  </p>
</div>
```

**Social pills (`delay-5`).** `<div className="reveal delay-5 {cls} mt-9 flex flex-wrap gap-2.5">`. Each entry:
```html
<a href={s.href} target="_blank" rel="noopener noreferrer"
   className="glass-pill group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-neutral-700 transition-all duration-200 hover:-translate-y-0.5 hover:text-brand-700">
  <s.Icon className="size-3.5" /> {s.label}
</a>
```

| Label    | Href                                | Inline brand-icon component name |
|----------|-------------------------------------|----------------------------------|
| Twitter  | `https://twitter.com/adam_dev`      | `TwitterIcon`                    |
| GitHub   | `https://github.com/adam-dev`       | `GitHubIcon`                     |
| YouTube  | `https://youtube.com/@adam-dev`     | `YoutubeIcon`                    |
| LinkedIn | `https://linkedin.com/in/adam-dev`  | `LinkedinIcon`                   |

(Brand-mark SVG paths live inline inside `About.jsx` and `Footer.jsx` — see Layer 10.)

---

### SECTION 6 — Courses (`<Courses />`)

`<section id="courses" className="relative mx-auto max-w-7xl scroll-mt-24 px-6 py-24 md:py-32">`

Two `useInView` triggers: `headerRef (0.1)`, `gridRef (0.05)`.

Aurora: `aurora-3 aurora-drift right-1/4 top-1/4`, `animationDelay: '-12s'`.

**Header row.** `<div ref={headerRef} className="mb-10 grid items-end gap-6 md:mb-14 md:grid-cols-[1fr_auto]">`

- H2 (`reveal`): `font-bit text-5xl uppercase leading-tight tracking-tight text-neutral-900 md:text-6xl lg:text-7xl`
  > Eight focused **video courses** (the second phrase wrapped in the same `bg-gradient-to-br from-brand-500 to-brand-700 bg-clip-text text-transparent` gradient).
- P (`reveal delay-1`): `mt-4 max-w-xl text-base text-neutral-600 md:text-lg`
  > Start with one. Bundle them all. Watch on your own time — forever.
- Bundle CTA card (`reveal-right delay-2`): `glass flex items-center gap-5 rounded-2xl p-5 md:p-6`
  - Left text block: `text-xs font-medium uppercase tracking-wider text-neutral-900` → `All-access bundle`; `mt-1 text-sm text-neutral-400 line-through` → `$412`; `font-bit text-2xl text-brand-600` → `$199 USD`.
  - CTA `<a href="#register" className="group inline-flex h-11 shrink-0 items-center justify-center gap-1.5 rounded-full bg-neutral-900 px-5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-600">Get bundle<ArrowRightIcon className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" /></a>`

**Course grid.** `<div ref={gridRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">`. Each card wrapped in `<div className={"reveal-scale delay-" + Math.min((i % 4) + 1, 4) + " " + gcls + " flex"}>` so columns stagger 1-2-3-4-1-2-3-4.

**`<CourseCard>` markup:**

```jsx
<article className="glass noise-card group flex w-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_-12px_rgba(16,185,129,0.30)]">
  <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-50">
    <img src={course.img} alt={course.title} loading="lazy" draggable={false}
         className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
    <div className="absolute left-4 top-4 inline-flex items-center gap-2">
      <span className="glass-pill rounded-full px-2.5 py-0.5 font-bit text-xs text-brand-700">{course.tag}</span>
    </div>
  </div>
  <div className="flex flex-1 flex-col p-5">
    <div className="mb-3 flex items-center justify-between gap-2">
      <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500">Course {course.n} / 8</span>
      <span className="rounded-full bg-brand-50 px-3 py-1 font-bit text-lg text-brand-600 ring-1 ring-brand-100">{course.price}</span>
    </div>
    <h3 className="mb-2 text-base font-semibold leading-snug text-neutral-900">{course.title}</h3>
    <p className="mb-4 text-sm leading-relaxed text-neutral-600">{course.desc}</p>
    <div className="flex-1" />
    <div className="mt-2 grid grid-cols-2 gap-2">
      <a href="#about" className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full border border-neutral-200/70 bg-white/50 px-3 text-xs font-medium text-neutral-700 transition-colors duration-200 hover:border-brand-300 hover:text-brand-700">Preview</a>
      <a href="#register" className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full bg-neutral-900 px-3 text-xs font-semibold text-white transition-colors duration-200 hover:bg-brand-600">Enroll</a>
    </div>
  </div>
</article>
```

**Course catalog (exact strings + image paths):**

| n | img                  | tag           | price | title                               | desc                                                                                                                                            |
|---|----------------------|---------------|-------|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| 1 | `https://cdn.5sdesign.art/projects/Adamdev/code-01.jpg` | Beginner     | $29   | Vibe Coding Foundations             | The mental model behind AI-assisted dev. From "ask the chat" to "drive the agent" — when, why, and how.                                         |
| 2 | `https://cdn.5sdesign.art/projects/Adamdev/code-02.jpg` | Intermediate | $49   | Cursor Mastery                      | Get fluent in Cursor — composer, agent mode, .cursorrules, multi-file edits and codebase chat.                                                  |
| 3 | `https://cdn.5sdesign.art/projects/Adamdev/code-03.jpg` | Intermediate | $59   | Claude Code Deep Dive               | Use Claude Code as a terminal agent — file ops, planning, subagents, hooks, MCP servers and slash commands.                                     |
| 4 | `https://cdn.5sdesign.art/projects/Adamdev/code-04.jpg` | Beginner     | $39   | Prompt Patterns for Devs            | 20 reusable prompt templates — scaffolding, refactor, debug, review, doc — that consistently produce working code.                              |
| 5 | `https://cdn.5sdesign.art/projects/Adamdev/code-05.jpg` | Project      | $79   | Build a Full-Stack SaaS in 7 Days   | Watch over my shoulder as I ship a paid SaaS — Next.js, Postgres, Stripe, auth — using only AI-driven workflows.                                |
| 6 | `https://cdn.5sdesign.art/projects/Adamdev/code-06.jpg` | Advanced     | $49   | Agent-First Refactoring             | Tame legacy codebases with multi-step agents. Plan → patch → verify → repeat. Real before/after walkthroughs.                                   |
| 7 | `https://cdn.5sdesign.art/projects/Adamdev/code-07.jpg` | Intermediate | $39   | AI Code Review & Quality            | Catch bugs before they ship. Build a personal review agent that respects your style guide and team conventions.                                 |
| 8 | `https://cdn.5sdesign.art/projects/Adamdev/code-08.jpg` | Leadership   | $69   | Vibe Coding for Teams               | Roll out AI workflows across your engineering org — guardrails, shared prompt libraries, onboarding, ROI metrics.                               |

(There is **no** USP strip, **no** lesson-list toggle, and **no** ListBlock helper — earlier drafts had them; the production version does not.)

---

### SECTION 7 — Register (`<Register />`)

`<section ref={sectionRef} id="register" className="relative mx-auto max-w-7xl scroll-mt-24 px-6 py-24 md:py-32">` — `useInView(0.12)`.

Aurora: `aurora-1 aurora-drift -top-20 right-1/3`, `animationDelay: '-4s'`.

**Section header.** `<div className="mb-16 max-w-2xl md:mb-20">`
```html
<h2 className="reveal {cls} font-bit text-5xl uppercase leading-[1.05] tracking-tight text-neutral-900 md:text-6xl lg:text-7xl">
  Just <span className="bg-gradient-to-br from-brand-500 to-brand-700 bg-clip-text text-transparent">3 steps</span> to get started
</h2>
<p className="reveal delay-1 {cls} mt-6 max-w-md text-base text-neutral-600 md:text-lg">
  Enroll in under two minutes — start learning the same day.
</p>
```

**Grid.** `grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-20`.

**Left column — Steps.** `<ol className="relative flex flex-col gap-3">` + a connecting line `<span aria-hidden className="pointer-events-none absolute left-9 top-14 bottom-14 w-px bg-gradient-to-b from-brand-300 via-brand-200 to-transparent" />`. Each `<li>` is:

```html
<li className="reveal delay-{i+1} {cls} group relative flex gap-5 rounded-2xl border border-transparent p-4 transition-all duration-200 hover:border-white/60 hover:bg-white/40 hover:backdrop-blur-md">
  <span className="relative z-10 grid size-10 shrink-0 place-items-center rounded-full bg-neutral-900 font-bit text-base text-white ring-4 ring-white transition-colors duration-200 group-hover:bg-brand-600">{n}</span>
  <div className="flex-1 pt-1">
    <div className="text-base font-semibold text-neutral-900">{title}</div>
    <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{desc}</p>
  </div>
</li>
```

| n | title                            | desc (verbatim)                                                                                                                                                |
|---|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1 | Pick a course (or the bundle)    | Browse the catalog above and choose what fits your level today.                                                                                                |
| 2 | Checkout securely                | Pay with card or PayPal. Use the code `VIBE10` (rendered as inline `<code>` chip) for 10% off your first course.                                               |
| 3 | Get instant access               | You will be invited to the private community and unlock all videos right away.                                                                                 |

Inline `<code>` chip classes: `rounded bg-white/60 px-1.5 py-0.5 font-mono text-[13px] text-neutral-900 ring-1 ring-white/70`.

**Refund note (`reveal delay-4`).**
```html
<div className="glass mt-10 flex gap-3 rounded-2xl p-5">
  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700"><InformationCircleIcon className="size-5" /></span>
  <div className="flex-1">
    <div className="text-sm font-semibold text-brand-700">30-day money-back guarantee</div>
    <p className="mt-1 text-sm leading-relaxed text-neutral-700">
      If you don't ship a project within 30 days, email <strong className="font-semibold text-neutral-900">hello@adam.dev</strong> for a full refund. No questions, no friction.
    </p>
  </div>
</div>
```

**Right column — Payment panel (`reveal-right delay-2`).**

```html
<aside className="reveal-right delay-2 {cls} glass noise-card flex flex-col justify-center rounded-3xl p-6 font-sans md:p-8">
  <div className="mx-auto w-full max-w-md">
    <div className="mb-6 flex flex-col items-center gap-3 text-center">
      <span className="grid size-10 place-items-center rounded-full bg-brand-50 text-brand-700 ring-1 ring-brand-100"><CreditCardIcon className="size-5" /></span>
      <div>
        <h3 className="text-lg font-semibold text-neutral-900">Payment options</h3>
        <p className="mt-1 text-xs text-neutral-500">Pick whatever's easiest for you</p>
      </div>
    </div>
    <div className="flex flex-col gap-3">{/* 3× PaymentRow */}</div>
  </div>
</aside>
```

**`<PaymentRow>` wrapper classes (invariant):** `glass-pill group flex items-center gap-4 rounded-2xl p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-14px_rgba(16,185,129,0.35)]`.

Each row contains an icon square (`grid size-11 shrink-0 place-items-center overflow-hidden rounded-lg bg-white/60 ring-1 ring-white/70`), a label/value/note block, and optionally a "Copy" button or rotated arrow.

| Icon (component) | name              | account                | note                              | Action          |
|------------------|-------------------|------------------------|-----------------------------------|-----------------|
| `CardMark`       | Credit / Debit card | Visa · Mastercard · Amex | Powered by Stripe · 256-bit TLS  | none            |
| `PayPalLogo`     | PayPal            | paypal.me/adam-dev     | For international students       | external link → `https://paypal.me/adam-dev`, opens new tab; trailing `ArrowRightIcon -rotate-45` |
| `CryptoMark`     | USDC / ETH        | adam.eth               | On Base + Ethereum mainnet       | "Copy" button (Clipboard API, shows "Copied" with `CheckIcon` for 1.8s) |

"Copy" button classes: `inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/60 bg-white/60 px-3 py-1.5 text-xs font-medium text-neutral-700 transition-all duration-200 hover:cursor-pointer hover:border-neutral-900 hover:bg-neutral-900 hover:text-white`.

**Bundle card (`reveal delay-3`, id `bundle-card`).** Full-width below the two-column grid.

```html
<div id="bundle-card" className="reveal delay-3 {cls} glass noise-card relative mt-12 overflow-hidden rounded-3xl p-6 md:mt-16 md:p-10">
  <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-brand-300/40 blur-3xl" />
  <div aria-hidden className="pointer-events-none absolute -bottom-20 left-1/3 size-40 rounded-full bg-brand-200/60 blur-3xl" />
  <div className="relative grid items-center gap-8 md:grid-cols-[1.1fr_1fr_auto] md:gap-10 lg:gap-14">
    {/* LEFT */}
    <div>
      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-brand-600">
        <SparklesIcon className="size-4" /> All-access bundle · 8 courses
      </div>
      <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-3xl">Everything Adam teaches, one price.</h3>
      <div className="mt-5 flex items-baseline gap-3">
        <div className="font-bit text-5xl text-brand-600 md:text-6xl">$199</div>
        <div className="text-sm font-medium text-neutral-500">USD</div>
      </div>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <span className="text-sm text-neutral-400 line-through">$412 USD</span>
        <span className="inline-flex items-center gap-1 rounded-full bg-brand-600 px-2.5 py-0.5 text-xs font-semibold text-white">Save 52%</span>
      </div>
    </div>
    {/* MIDDLE */}
    <ul className="flex flex-col gap-3 text-sm text-neutral-700 md:border-l md:border-white/60 md:pl-10 lg:pl-14">
      <li>Lifetime access to all 8 courses</li>
      <li>Private community + Q&A</li>
      <li>All future course updates</li>
      <li>Save over $200 vs buying separately</li>
    </ul>
    {/* RIGHT — CTA */}
    <a href="#bundle-card" className="group inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:cursor-pointer hover:bg-brand-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 md:px-7">
      Get the bundle <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </a>
  </div>
</div>
```

Each perk `<li>` actually renders as `<li className="flex items-center gap-2.5"><span className="grid size-5 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700"><CheckIcon className="size-3" /></span>{text}</li>`.

---

### SECTION 8 — FAQ (`<Faq />`)

`<section ref={sectionRef} id="faq" className="relative mx-auto max-w-7xl scroll-mt-24 px-6 py-24 md:py-32">` — `useInView(0.1)`. State `openIdx` starts at `0`.

**Grid.** `grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16 lg:gap-24`.

**Left — sticky header.** `<div className="md:sticky md:top-24 md:self-start">`
```html
<h2 className="reveal {cls} font-bit text-5xl uppercase leading-[1.05] tracking-tight text-neutral-900 md:text-6xl lg:text-7xl">
  Frequently <span className="bg-gradient-to-br from-brand-500 to-brand-700 bg-clip-text text-transparent">asked</span>
</h2>
<p className="reveal delay-2 {cls} mt-6 max-w-md text-base text-neutral-600 md:text-lg">
  Have a question that isn't covered here? Drop a line — Adam reads every email.
</p>
<a href="mailto:hello@adam.dev" className="reveal delay-3 {cls} mt-8 inline-flex items-center gap-2 rounded-full border border-neutral-900 bg-white/60 px-5 py-2.5 text-sm font-semibold text-neutral-900 backdrop-blur transition-all duration-200 hover:cursor-pointer hover:bg-neutral-900 hover:text-white">hello@adam.dev</a>
```

**Right — accordion.** `<ul className="glass noise-card flex flex-col divide-y divide-white/60 rounded-3xl px-6 md:px-8">`. Each `<li>` carries `reveal delay-{min(i+1,6)} ${cls}`.

Item row:
```html
<button onClick={() => setOpenIdx(open ? -1 : i)} aria-expanded={open}
  className="group flex w-full items-center justify-between gap-6 py-5 text-left transition-colors duration-200 hover:cursor-pointer md:py-6">
  <span className="text-base font-semibold text-neutral-900 transition-colors duration-200 group-hover:text-brand-700 md:text-lg">{q}</span>
  <span className={`grid size-8 shrink-0 place-items-center rounded-full border transition-all duration-200 ${open ? 'border-brand-600 bg-brand-600 text-white rotate-45' : 'border-neutral-300 bg-white/60 text-neutral-700 group-hover:border-brand-500 group-hover:text-brand-600'}`}>
    <PlusIcon className="size-4" />
  </span>
</button>
<div className={`grid overflow-hidden transition-all duration-300 ease-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
  <div className="min-h-0">
    <p className="pb-6 pr-12 text-sm leading-relaxed text-neutral-600 md:text-base">{a}</p>
  </div>
</div>
```

The grid-rows trick animates height without measuring — `grid-rows-[0fr]` → `grid-rows-[1fr]` produces a smooth open with one transition rule and no JS.

**FAQ entries (verbatim, in order):**

1. **Do I need prior coding experience?**
   > Basic familiarity helps, but is not required. Course 1 (Foundations) assumes zero knowledge of AI workflows and teaches you the mental model from the ground up.
2. **Is there a deadline to finish the courses?**
   > Nope. Lifetime access means you can watch and re-watch at your own pace. New lessons and updates are pushed automatically to everyone who has enrolled.
3. **Which AI tools do you teach?**
   > Primarily **Cursor** and **Claude Code**, with guest appearances from Aider, Continue, and a handful of MCP servers. The principles transfer cleanly to whatever your stack uses next.
4. **What if I get stuck?**
   > Every enrolled student gets access to the private community. Adam personally answers questions there — **typical reply under 24h**.
5. **Can my team enroll together?**
   > Yes — see Course 8 (Vibe Coding for Teams) for the team playbook, or email **teams@adam.dev** for bulk licenses with a 30%+ discount.
6. **Do you offer refunds?**
   > Yes. A **30-day money-back guarantee** applies to every course. Email hello@adam.dev — no questions asked.
7. **Which language should I learn first?**
   > For vibe coding it matters less than you think. We use **TypeScript** and **Python** for projects, but the workflows apply to any language an LLM can read — which is basically all of them.

(Bold spans inside answers use `<strong className="font-semibold text-neutral-900">…</strong>`.)

---

### SECTION 9 — Footer (`<Footer />`)

`<footer ref={ref} id="contact" className="relative mt-20 overflow-hidden border-t border-white/40">` — `useInView(0.1)`.

**Background sheen + aurora:**
```html
<div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/40 via-white/60 to-white" />
<div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
  <div className="aurora aurora-3 aurora-drift -bottom-20 left-1/2 -translate-x-1/2" />
</div>
```

**Container.** `<div className="mx-auto max-w-7xl px-6 py-16 md:py-20">`

**Main grid.** `grid gap-12 md:grid-cols-[1.5fr_1fr_1fr] md:gap-16`.

**Brand column (`reveal`).**
```html
<div className="flex items-center gap-2 text-lg font-semibold tracking-tight text-neutral-900">
  <img src="/logo.png" alt="Adam.dev" className="size-9 object-contain" draggable={false} />
  <span>Adam<span className="text-brand-600">.dev</span></span>
</div>
<p className="mt-3 max-w-sm text-sm leading-relaxed text-neutral-600">
  Async video courses on vibe coding. Built for developers who want to ship faster with AI as their pair-programmer.
</p>
<div className="mt-6 flex flex-wrap gap-2">{/* 4× social pill */}</div>
```

Social pill `<a>` classes: `glass-pill group inline-flex size-10 items-center justify-center rounded-full text-neutral-700 transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-900 hover:text-white`. Hrefs/labels reuse the same four entries as About.

**Explore column (`reveal delay-1`).** Eyebrow `text-xs font-medium uppercase tracking-wider text-neutral-500` → `Explore`. List `<ul className="mt-5 flex flex-col gap-3">`:

- `Schedule` → `#schedule`
- `Curriculum` → `#curriculum`
- `About Adam` → `#about`
- `Courses` → `#courses`
- `Enroll` → `#register`
- `FAQ` → `#faq`

Each link: `text-sm text-neutral-700 transition-colors duration-200 hover:cursor-pointer hover:text-brand-600`.

**Contact column (`reveal delay-2`).** Eyebrow `Get in touch`. Two contact rows, each:
```html
<a href={…} className="group flex items-center gap-3 text-sm text-neutral-700 transition-colors duration-200 hover:cursor-pointer hover:text-brand-600">
  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/70 text-neutral-700 ring-1 ring-white/70 transition-colors duration-200 group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-500">
    <EnvelopeIcon className="size-4" />   {/* or FacebookIcon for the second row in v1; current build uses EnvelopeIcon for both */}
  </span>
  <span>{address}</span>
</a>
```

| href                       | label                |
|----------------------------|----------------------|
| `mailto:hello@adam.dev`    | `hello@adam.dev`     |
| `mailto:teams@adam.dev`    | `teams@adam.dev`     |

**Bottom row (`reveal delay-3`).**
```html
<div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-white/60 pt-8 text-xs text-neutral-500 md:flex-row md:items-center">
  <div>© {new Date().getFullYear()} Adam.dev. All rights reserved.</div>
  <div className="flex items-center gap-2">
    <span className="size-1.5 rounded-full bg-brand-500" />
    Built with vibes, in Berlin.
  </div>
</div>
```

---

## LAYER 8 — ANIMATION STANDARDS (project-wide)

```js
// Standard easing — used by every CSS transition in Layer 4d
const ease = 'cubic-bezier(0.16, 1, 0.3, 1)';   // ease-out for entries

// Standard durations
const reveal     = 900;   // ms — `.reveal`, `.reveal-left`, `.reveal-right`, `.reveal-scale`
const microHover = 200;   // ms — buttons, links, glass-pill, glass card hover

// Standard stagger (.delay-N)
//   delay-1 = 0.08s ... delay-8 = 0.64s    (linear, 80ms apart)

// Decorative loops
const blinkCursor  = '1s steps(2) infinite';      // headline cursor + terminal caret
const auroraDrift  = '18s ease-in-out infinite';  // every .aurora-* blob
const floatSlow    = '6s ease-in-out infinite';   // reserved utility

// IntersectionObserver thresholds
//   Hero        0.05
//   Schedule    0.15
//   Curriculum  0.10
//   About       0.12
//   Courses     headerRef 0.10, gridRef 0.05
//   Register    0.12
//   Faq         0.10
//   Footer      0.10

// IntersectionObserver root margin (all sections)
//   '0px 0px -10% 0px'   // trigger when 90% of the section has entered
```

**Per-section entry timeline (default):**

| Section    | Element                            | Reveal class              | Delay |
|------------|------------------------------------|---------------------------|-------|
| Hero       | live-status pill                   | `reveal`                  | 0     |
| Hero       | h1 headline                        | `reveal delay-1`          | 0.08s |
| Hero       | lead paragraph                     | `reveal delay-2`          | 0.16s |
| Hero       | check-list                         | `reveal delay-3`          | 0.24s |
| Hero       | CTA row                            | `reveal delay-4`          | 0.32s |
| Hero       | terminal card                      | `reveal-scale delay-2`    | 0.16s |
| Schedule   | left card                          | `reveal-left`             | 0     |
| Schedule   | info card (right)                  | `reveal-right delay-2`    | 0.16s |
| Curriculum | h2                                 | `reveal`                  | 0     |
| Curriculum | subtitle                           | `reveal delay-1`          | 0.08s |
| Curriculum | week 01/02/03                      | `reveal delay-2/3/4`      | 0.16/0.24/0.32 |
| About      | h2 + role                          | `reveal` + `reveal delay-1` | 0/0.08 |
| About      | avatar + badge                     | `reveal delay-1` / `delay-3` | 0.08/0.24 |
| About      | bio paragraphs                     | `reveal delay-3` / `delay-4` | 0.24/0.32 |
| About      | socials                            | `reveal delay-5`          | 0.40 |
| Courses    | h2 + subtitle + bundle CTA         | `reveal` / `delay-1` / `reveal-right delay-2` | — |
| Courses    | course cards                       | `reveal-scale delay-(i%4+1)` | per-column stagger |
| Register   | h2 + subtitle                      | `reveal` / `delay-1`      | — |
| Register   | three steps                        | `reveal delay-1/2/3`      | — |
| Register   | refund note                        | `reveal delay-4`          | 0.32 |
| Register   | payment panel                      | `reveal-right delay-2`    | 0.16 |
| Register   | bundle card                        | `reveal delay-3`          | 0.24 |
| FAQ        | h2 + subtitle + email CTA          | `reveal` / `delay-2` / `delay-3` | — |
| FAQ        | accordion items                    | `reveal delay-(min(i+1,6))` | up to 0.48 |
| Footer     | brand / explore / contact / bottom | `reveal` / `delay-1` / `delay-2` / `delay-3` | linear |

---

## LAYER 9 — RESPONSIVE STANDARDS

- **Mobile-first**, scale up with `sm: md: lg: xl:`.
- **Container padding.** `px-6` everywhere; sections use `mx-auto max-w-7xl`.
- **Section vertical rhythm.** `py-20 md:py-28` (Schedule), `py-24 md:py-32` (Curriculum, About, Courses, Register, FAQ); Hero `pt-32 pb-20 md:pt-40 md:pb-28`; Footer `py-16 md:py-20`.
- **Headline scale.** Hero h1: `text-6xl md:text-8xl lg:text-9xl`. Section h2: `text-5xl md:text-6xl lg:text-7xl`. All `font-bit uppercase leading-[1.05] tracking-tight`.
- **Two-column grids collapse** to single-column on mobile (default `grid-cols-1` then `md:grid-cols-*`).
- **No horizontal overflow.** Outer page wrapper sets `overflow-x-hidden`.
- **No mobile menu sheet** — only the brand + a black `Enroll` pill appear below the `sm` breakpoint.
- **`prefers-reduced-motion`** is honored across reveals, blink-cursor, aurora-drift, float-slow, and scroll progress bar.

---

## LAYER 10 — ICON KIT (Adam.dev Icon Set v1)

Adam.dev ships its own 24-icon set (no external icon library). Every icon is an inline `<svg>` exported from `src/Icons.jsx`. Shared props:

```js
const sharedProps = {
  viewBox: '0 0 24 24',
  fill: 'currentColor',
  xmlns: 'http://www.w3.org/2000/svg',
  'aria-hidden': true,
}
```

Sizing: `className="size-{N}"`. Recolor: `text-{color}` inherits via `fill="currentColor"`.

| Export name             | Used in                                     | What it means / when to use                                |
|-------------------------|---------------------------------------------|------------------------------------------------------------|
| `CheckIcon`             | Hero list, Curriculum list, Register perks  | List confirmations only (not status indicators).           |
| `ArrowRightIcon`        | CTAs across Hero, Schedule, Courses, Register, Footer | Primary CTA arrow; for external/rotated, apply `-rotate-45`. |
| `PlayIcon`              | (reserved)                                  | Video play affordance. Not on production page yet.         |
| `CalendarDaysIcon`      | Schedule "Cohort starts" row                | Calendar/date affordance.                                  |
| `ClockIcon`             | Schedule "Format" row                       | Duration / schedule affordance.                            |
| `CreditCardIcon`        | Schedule tuition row, Register payment header | Payment affordance.                                       |
| `ChevronDownIcon`       | (reserved)                                  | Drill-in / pagination. Not on production page yet.         |
| `VideoCameraIcon`       | (reserved)                                  | Video lessons affordance.                                  |
| `LockOpenIcon`          | (reserved)                                  | "Unlocked / lifetime" affordance.                          |
| `EnvelopeIcon`          | Footer contact rows                         | Email link affordance.                                     |
| `PlusIcon`              | FAQ accordion toggle                        | "Expand"; rotates 45° → ×  when active.                    |
| `InformationCircleIcon` | Register refund note                        | Informational notice.                                      |
| `ClipboardIcon`         | Register "Copy" button                      | Copy-to-clipboard affordance.                              |
| `SparklesIcon`          | Register bundle eyebrow                     | "Bundle / featured" marker.                                |
| `ChatBubbleIcon`        | (reserved)                                  | Community / support affordance.                            |

**Brand-mark icons** (inline SVG paths, declared at the bottom of `About.jsx` and `Footer.jsx`, **not** in `Icons.jsx`):

- `TwitterIcon` — X-style swept-X path.
- `GitHubIcon` — Octocat silhouette path.
- `YoutubeIcon` — Rounded-rect with triangular play head.
- `LinkedinIcon` — Standard "in" mark.
- `FacebookIcon` — (declared in earlier draft; unused in current build).

**Payment marks** declared inside `Register.jsx`:
- `CardMark` — emerald rectangle + magnetic stripe + chip rect.
- `PayPalLogo` — official two-tone glyph (cyan `#009cde` + navy `#012169`).
- `CryptoMark` — emerald circle + folded ETH diamond in `#ecfdf5`.

**Icon rules (invariant):**
- Do not import from external icon libraries.
- Do not synthesize new icons unless added to `Icons.jsx` with the same `sharedProps` contract.
- Brand marks (Twitter/GitHub/etc.) must stay inline in their owning section file, since they don't follow the 24×24 / currentColor contract uniformly.
- Use `ArrowRightIcon` (never `ChevronDownIcon` or `ChevronRightIcon`) on CTA buttons.

---

## LAYER 11 — REPRODUCE-EXACTLY CLAUSE

Reproduce exactly. Do not:

- Substitute fonts (PP Neue Bit Bold is not "Press Start 2P"; Inter is not "system-ui").
- Round color values (`#10b981` is not "approximately emerald-500"; `#ecfdf5` is not "off-white").
- Shorten or paraphrase copy. Every headline, list item, button label, FAQ question/answer, footer line and payment row in Layer 7 is a literal string.
- Skip animation delays (`reveal delay-3` is `transition-delay: 0.24s`, not "a little later").
- Add icons outside the Adam.dev Icon Kit v1 (Layer 10).
- Add an animation library. There is no Framer Motion, GSAP, anime.js, AutoAnimate, motion-one or Lottie in this project. All motion is in Layer 4d/4f.
- Add a CloudFront/CDN video URL where none exists — the background is gradients + aurora blobs + SVG noise (Layer 5).
- Use orange, purple, blue or pink anywhere. The only accent color family is `brand` (emerald-50 → emerald-700).
- Repurpose `text-orange-*`, `bg-orange-*`, etc. from earlier drafts — they were removed.

If a constraint conflicts with framework limitations (e.g. browser without `backdrop-filter` support), **degrade gracefully** (drop the blur, keep the opacity) and document the substitution in a code comment. Never silently swap a value.

---

# CUSTOMIZATION CHEAT SHEET

When adapting this template for a sibling brand, edit only these slots:

| Slot                             | Where                       | What to swap                                              |
|----------------------------------|-----------------------------|-----------------------------------------------------------|
| `BRAND_NAME`                     | Layer 1, Nav, Footer, About | "Adam" → your founder name                                |
| `ONE_LINE_DESCRIPTION`           | Layer 1                     | The one-sentence what-is-it                               |
| `--brand` palette                | Layer 3                     | Swap the 50→700 ramp; keep emerald-style HSL spacing       |
| Body radial gradients            | Layer 3                     | Re-tint the three radial halos                            |
| Logo file                        | `/public/logo.png`          | 1:1 PNG, ~40×40 visual, transparent BG                    |
| Avatar file                      | `/public/profile/{{name}}.jpg` | 4:5 portrait, JPG, ~800px tall                          |
| Course banners                   | `/public/courses/code-NN.jpg` | 16:10 JPG, ~1280×800                                     |
| All copy in Layer 7              | per section                 | Verbatim swap, keep punctuation                           |
| `useInView` thresholds (Layer 8) | per section                 | Only widen if a section is very tall                      |

**Everything else (Layers 4, 6, 8, 9, 10, 11) is INVARIANT.** Keep it as-is. That is what makes the output recognizably Adam.dev quality.

---

# WORKED EXAMPLE — 60-SECOND CUSTOMIZATION

User wants a sibling site for **"Mira.dev"** — a designer-founder teaching the same vibe-coding curriculum but for visual designers. They open this template and edit:

- `BRAND_NAME` → `Mira.dev`
- `ONE_LINE_DESCRIPTION` → `Visual designers learning to ship product with AI`
- `--brand` ramp → swap emerald (`#10b981`) for a calibrated rose (`#f43f5e`) — also update the radial body gradients and the scroll-progress gradient.
- Logo → `/public/logo.png` (new mark)
- Avatar → `/public/profile/mira.jpg`
- Course banners → `/public/courses/code-NN.jpg` (replace eight images, same dimensions)
- Layer 7 copy → designer-flavored variants (e.g. "Cursor → Figma round-trips")
- Layer 10 icon kit → keep as-is, no new icons required

Everything else (the glass system, noise utilities, aurora blobs, reveal CSS, animation timing, headline scale, font choices) stays.
