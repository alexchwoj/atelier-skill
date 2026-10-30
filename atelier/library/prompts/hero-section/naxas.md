# NAXAS — Orbital Intelligence Hero

> Build the **NAXAS** hero — orbital intelligence for organizations watching the planet in real time. Everything below is the full spec: layout, type ramp, color tokens, the interactive cobe globe, the edge-fade mask, animation timings. Reproduce exactly — do not substitute fonts, round colors, shorten copy, or skip animation timings. Where a value is given, it is the value.

---

## LAYER 0 — META

```yaml
asset_id:        naxas-hero-globe-01
category:        hero
aesthetic:       light-orbital-minimal
industry:        space / earth-observation
tone:            premium · minimal · cinematic
license:         standard
version:         1.0
last_updated:    2026-06-03
```

---

## LAYER 1 — OPENING DECLARATION

Build a **full-screen hero section** for **NAXAS** — *orbital intelligence that gives organizations a real-time, three-dimensional view of the entire planet, captured continuously from space.*

Use the following **pinned** tech stack (do not substitute):

- **React 18 + TypeScript + Vite**
- **Tailwind CSS 3** (default config + the extensions below)
- **framer-motion** (v12+) — drives the shiny-headline sweep **and** the globe's spring-based drag physics
- **cobe** (^0.6.5) — WebGL globe renderer; `import createGlobe from "cobe"`
- **lucide-react** — icons (restricted to the NAXAS icon set in Layer 10)

The aesthetic is **a clean, light-mode orbital hero**: a pure-white page with a softly glowing, auto-rotating, drag-interactive 3D globe sitting low-center behind the content, an animated shiny-gradient headline, and a single black pill CTA. **White (`#FFFFFF`) is the global background. Default text color is black (`#000000`) at varying opacities. Do not use purple, indigo, neon green, or any dark page background anywhere.**

---

## LAYER 2 — FONTS

Single family: **Inter** (300/400/500/600/700). Load via Google Fonts in `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

Tailwind config extension:

```js
// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

Global CSS:

```css
html, body, #root { height: 100%; }
body {
  margin: 0;
  background-color: #ffffff;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
:root { color-scheme: light; }
```

> **Builder note:** if a requested weight is unavailable, clamp to the nearest available Inter weight rather than synthesizing.

---

## LAYER 3 — COLOR SYSTEM

This is a single, light theme. Ship as literal values (no theming layer required).

| Token | Value | Used for |
|---|---|---|
| Page background | `#FFFFFF` | `body`, `<section>` background |
| Primary text | `#000000` | headings, logo, hover states |
| Body text | `black/70` (`rgba(0,0,0,0.7)`) | intro paragraphs |
| Muted text | `black/60` (`rgba(0,0,0,0.6)`) | nav links, eyebrow |
| Hairline border | `gray-300` (desktop nav pill, hamburger), `gray-200` (mobile menu) | |
| CTA fill | `#000000` (black), hover `gray-900` | primary button |
| CTA text | `#FFFFFF` | button label + icon |
| Headline base blue | `#2563EB` | shiny headline base tone |
| Headline shine blue | `#64CEFB` | the travelling highlight |
| Globe marker | `[0.145, 0.388, 0.922]` → `#2563EB` | city dots |
| Globe base | `[0.95, 0.95, 0.97]` | landmass tone |
| Globe glow | `[0.82, 0.82, 0.86]` | atmosphere halo |

---

## LAYER 4 — CUSTOM CSS UTILITIES (the "design DNA")

This hero uses **no global utility classes** — its signature effects live in two dedicated components (Layer 6). The only repeated raw-CSS primitive is the **edge-fade radial mask** that melts the globe into the white page. Paste verbatim:

```css
/* Globe edge-fade — sits over the canvas, must be pointer-events:none */
.globe-edge-fade {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(
    circle at center,
    transparent 0%,
    rgba(255, 255, 255, 0.6) 55%,
    #ffffff 75%
  );
}
```

And the **vertical legibility wash** behind the foreground content (keeps nav + headline crisp over the glowing globe):

```
bg-gradient-to-b from-white/70 via-transparent to-white/90
```

---

## LAYER 5 — BACKGROUND ASSET

The hero background is the **interactive 3D globe** (Layer 6 · `Globe`), low-center, drifting and draggable. No video, no static image — the globe is the asset.

Positioning is owned by the parent:

```html
<!-- absolute, full-bleed, centered, nudged down 8% of viewport height -->
<div className="absolute inset-0 flex items-center justify-center translate-y-[8%]">
  <Globe />
</div>
```

---

## LAYER 6 — SHARED COMPONENTS (implement verbatim)

### `ShinyText` — animated gradient headline

A `<span>` whose **fill** is a continuously sweeping `linear-gradient`, masked to the glyph shapes via `background-clip: text` + transparent fill. framer-motion drives `background-position` left→right on an infinite linear loop so a highlight band travels across the characters.

```tsx
// src/components/ShinyText.tsx
import { motion } from 'framer-motion'
import type { CSSProperties, ReactNode } from 'react'

interface ShinyTextProps {
  children: ReactNode
  baseColor?: string   // resting tone of the text
  shineColor?: string  // travelling highlight color
  speed?: number       // seconds per full sweep
  spread?: number      // gradient angle in degrees
  className?: string
  style?: CSSProperties
}

export default function ShinyText({
  children,
  baseColor = '#2563EB',
  shineColor = '#64CEFB',
  speed = 3,
  spread = 100,
  className = '',
  style,
}: ShinyTextProps) {
  // base -> shine -> base = a single travelling band of light.
  const gradient = `linear-gradient(${spread}deg, ${baseColor} 0%, ${baseColor} 35%, ${shineColor} 50%, ${baseColor} 65%, ${baseColor} 100%)`

  return (
    <motion.span
      className={className}
      style={{
        display: 'inline-block',
        backgroundImage: gradient,
        backgroundSize: '250% 100%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent',
        ...style,
      }}
      initial={{ backgroundPosition: '150% 0%' }}
      animate={{ backgroundPosition: '-50% 0%' }}
      transition={{
        duration: speed,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
      }}
    >
      {children}
    </motion.span>
  )
}
```

**Usage in the headline:** `baseColor="#2563EB"`, `shineColor="#64CEFB"`, `speed={3}`, `spread={100}`.

### `Globe` — interactive 3D world (cobe + framer-motion spring drag)

A retina `<canvas>` rendering the cobe globe. It **auto-rotates** by incrementing `phi` each frame; horizontal **drag** feeds a `useMotionValue` smoothed through a `useSpring`, giving springy momentum that persists on release. Auto-rotation pauses while dragging. Cursor toggles `grab`/`grabbing`. Canvas fades in (opacity 0→1 over 1000ms, 100ms after mount). Full cleanup on unmount.

```tsx
// src/components/Globe.tsx
import { useEffect, useRef } from 'react'
import createGlobe from 'cobe'
import { useMotionValue, useSpring } from 'framer-motion'

const MARKERS: { location: [number, number]; size: number }[] = [
  { location: [14.5995, 120.9842], size: 0.03 }, // Manila
  { location: [19.076, 72.8777], size: 0.05 },   // Mumbai
  { location: [23.8103, 90.4125], size: 0.03 },  // Dhaka
  { location: [30.0444, 31.2357], size: 0.04 },  // Cairo
  { location: [39.9042, 116.4074], size: 0.06 }, // Beijing
  { location: [-23.5505, -46.6333], size: 0.05 },// São Paulo
  { location: [19.4326, -99.1332], size: 0.04 }, // Mexico City
  { location: [40.7128, -74.006], size: 0.07 },  // New York
  { location: [34.6937, 135.5022], size: 0.04 }, // Osaka
  { location: [41.0082, 28.9784], size: 0.04 },  // Istanbul
  { location: [51.5074, -0.1278], size: 0.06 },  // London
  { location: [48.8566, 2.3522], size: 0.05 },   // Paris
]

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const phiRef = useRef(0)                         // auto-rotation accumulator
  const pointerInteracting = useRef<number | null>(null) // last pointer X, null when idle

  const dragOffset = useMotionValue(0)
  const springOffset = useSpring(dragOffset, {
    mass: 1,
    stiffness: 280,
    damping: 40,
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let width = 0
    const onResize = () => { width = canvas.offsetWidth }
    window.addEventListener('resize', onResize)
    onResize()

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      // Light configuration: a soft globe that reads on a white background.
      // mapBrightness must stay low (~1.8) and baseColor below pure white,
      // otherwise the globe washes out to near-invisible on white.
      dark: 0,
      diffuse: 0.8,
      mapSamples: 16000,
      mapBrightness: 1.8,
      mapBaseBrightness: 0.01,
      baseColor: [0.95, 0.95, 0.97],
      markerColor: [0.145, 0.388, 0.922], // #2563EB
      glowColor: [0.82, 0.82, 0.86],
      markers: MARKERS,
      onRender: (state) => {
        if (pointerInteracting.current === null) {
          phiRef.current += 0.005 // auto-rotate only when not dragging
        }
        state.phi = phiRef.current + springOffset.get()
        state.width = width * 2
        state.height = width * 2
      },
    })

    const fadeTimeout = setTimeout(() => { canvas.style.opacity = '1' }, 100)

    return () => {
      globe.destroy()
      window.removeEventListener('resize', onResize)
      clearTimeout(fadeTimeout)
    }
  }, [springOffset])

  const beginDrag = (clientX: number) => {
    pointerInteracting.current = clientX
    if (canvasRef.current) canvasRef.current.style.cursor = 'grabbing'
  }
  const endDrag = () => {
    pointerInteracting.current = null
    if (canvasRef.current) canvasRef.current.style.cursor = 'grab'
  }

  return (
    <div
      className="relative aspect-square w-[min(820px,96vw)] md:w-[980px] lg:w-[1150px]"
      style={{ contain: 'layout paint size' }}
    >
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        style={{
          aspectRatio: '1',
          cursor: 'grab',
          contain: 'layout paint size',
          opacity: 0,
          transition: 'opacity 1000ms ease',
        }}
        onPointerDown={(e) => beginDrag(e.clientX)}
        onPointerUp={endDrag}
        onPointerOut={endDrag}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current
            pointerInteracting.current = e.clientX
            dragOffset.set(dragOffset.get() + delta / 200) // mouse divisor 200
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current
            pointerInteracting.current = e.touches[0].clientX
            dragOffset.set(dragOffset.get() + delta / 100) // touch divisor 100
          }
        }}
      />
      {/* edge-fade mask — see Layer 4 */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at center, transparent 0%, rgba(255,255,255,0.6) 55%, #ffffff 75%)',
        }}
      />
    </div>
  )
}
```

**Globe responsive sizing (wrapper width):** `min(820px, 96vw)` mobile · `980px` at `md:` · `1150px` at `lg:`. Aspect ratio always 1. Retina: canvas buffer = `offsetWidth * 2`, re-synced on resize.

---

## LAYER 7 — SECTIONS

### SECTION 1 — HERO (the entire page)

**Block 1 · Container**
- Wrapper: `<section className="relative h-screen w-full overflow-hidden bg-white text-black">`
- The hero is exactly one viewport tall (`h-screen`), nothing scrolls.

**Block 2 · Background & stacking**
- Globe layer (z-0 implicit): `<div className="absolute inset-0 flex items-center justify-center translate-y-[8%]"><Globe /></div>`
- Legibility wash: `<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/90" />`
- Foreground content: `<div className="pointer-events-none relative z-10 flex h-full flex-col">`
  - **Critical interaction detail:** the foreground wrapper is `pointer-events-none` so drags over empty space (and even over the headline) reach the globe canvas underneath. Interactive pieces re-enable events: the `<header>` gets `pointer-events-auto`, and the CTA `<a>` gets `pointer-events-auto`.

**Block 3 · Layout primitive**
- Foreground is a vertical flex column: nav (top) → intro row → centered hero block (`flex-1`, centered) → bottom spacer.

**Block 4 · Elements** (in DOM order)

1. **Logo** — `<a href="#" className="flex items-center gap-2.5">`
   - Mark: `<span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-black"><span className="h-2.5 w-2.5 rounded-full bg-black" /></span>` (a 2px black-ringed circle with a small filled black dot inside)
   - Wordmark: `<span className="text-base font-semibold tracking-tight text-black">NAXAS</span>`

2. **Desktop nav pill** — `<div className="hidden items-center rounded-full border border-gray-300 bg-white/40 px-2 py-1.5 backdrop-blur-sm lg:flex">`
   - Links (each): `className="rounded-full px-4 py-1.5 text-sm text-black/60 transition-colors duration-200 hover:text-black"`
   - Items in order: **Home · About Us · Missions · Technology · Coverage · Blog**
   - Final item **Contact us** adds an icon: `className="ml-1 flex items-center gap-1 rounded-full px-4 py-1.5 text-sm text-black/60 transition-colors duration-200 hover:text-black"` + `<ArrowUpRight className="h-3.5 w-3.5" />`

3. **Mobile hamburger** (`lg:hidden`) — `<button className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-black/60 transition-colors hover:text-black lg:hidden">` toggling `<Menu className="h-5 w-5" />` / `<X className="h-5 w-5" />`. Opens a dropdown: `<div className="mt-3 flex flex-col rounded-2xl border border-gray-200 bg-white/80 p-3 backdrop-blur-md lg:hidden">` with link rows `className="rounded-xl px-4 py-2.5 text-sm text-black/70 transition-colors hover:bg-black/5 hover:text-black"` (the 6 nav items + **Contact us**).

4. **Intro row** — `<div className="mx-auto w-full max-w-7xl px-6 pt-10 sm:px-8 md:pt-14">` → `<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">`
   - Left `<p className="max-w-md text-sm text-black/70 md:text-base">`: *"We build orbital intelligence that gives organizations a real-time, three-dimensional view of the entire planet — captured continuously from space."*
   - Right `<p className="text-sm font-medium text-black/70 md:text-base lg:text-right">`: *"8,000+ Satellites Mapped in Real Time !"*

5. **Centered hero block** — `<div className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-6 text-center sm:px-8">`
   - **Eyebrow** `<p className="mb-5 text-xs uppercase tracking-tight text-black/60 md:text-sm">`: *"Next Launch Window Opening Soon"*
   - **Headline** `<h1 className="font-medium leading-[0.85] tracking-tighter">`
     - Line 1: `<span className="block text-5xl text-black sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">See the</span>`
     - Line 2: `<span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">` wrapping `<ShinyText baseColor="#2563EB" shineColor="#64CEFB" speed={3} spread={100}>Whole World in 3D.</ShinyText></span>`

6. **CTA button (Primary)** — `<a href="#" className="group pointer-events-auto mt-10 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white shadow-lg shadow-black/20 transition-colors duration-300 hover:bg-gray-900 md:px-8 md:py-4 md:text-base">`
   - Text: **"Request Satellite Access"**
   - Icon: `<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />` (arrow slides right on group hover)

7. **Bottom spacer** — `<div className="h-10 md:h-16" />`

**Block 5 · Animation** — see Layer 8. The headline's shine sweep and the globe drift/drag are the only motion; both run continuously (no scroll triggers).

**Block 6 · Responsive notes**
- Headline scales `text-5xl → text-9xl` across `sm/md/lg/xl`; line-height locked at `0.85`, `tracking-tighter`.
- Globe width steps `min(820px,96vw) → 980px (md) → 1150px (lg)`.
- Nav pill hidden below `lg`; hamburger shown below `lg`.
- Intro grid is 1 column on mobile, 2 columns at `lg` (right cell right-aligned).
- Body/eyebrow text steps `text-sm/text-xs → text-base/text-sm` at `md`.

**Block 7 · Copy (verbatim, in order)**
```
NAXAS
Home
About Us
Missions
Technology
Coverage
Blog
Contact us
We build orbital intelligence that gives organizations a real-time, three-dimensional view of the entire planet — captured continuously from space.
8,000+ Satellites Mapped in Real Time !
Next Launch Window Opening Soon
See the
Whole World in 3D.
Request Satellite Access
```

---

## LAYER 8 — ANIMATION STANDARDS

```js
// Shiny headline (ShinyText)
duration: 3s, ease: 'linear', repeat: Infinity, repeatType: 'loop'
backgroundSize: '250% 100%'  // wide enough to slide fully off both ends
position: 150% 0%  ->  -50% 0%

// Globe auto-rotation
phi += 0.005 per frame (paused while dragging)

// Globe drag spring (framer-motion useSpring)
{ mass: 1, stiffness: 280, damping: 40 }
mouse delta divisor: 200 · touch delta divisor: 100
state.phi = phiRef.current + springOffset.get()

// Globe canvas fade-in
opacity 0 -> 1, transition 1000ms ease, started 100ms after mount

// CTA arrow
group-hover:translate-x-1, transition-transform duration-300

// All color/text hovers
transition-colors duration-200 (nav) / duration-300 (CTA)
```

---

## LAYER 9 — RESPONSIVE STANDARDS

- **Mobile-first.** Base classes target mobile; scale up with `sm: md: lg: xl:`.
- **Breakpoints:** `sm 640 · md 768 · lg 1024 · xl 1280`.
- **Hero typography:** Tailwind steps `text-5xl → text-6xl(sm) → text-7xl(md) → text-8xl(lg) → text-9xl(xl)`, `leading-[0.85]`, `tracking-tighter`.
- **Container:** `max-w-7xl mx-auto`, padding `px-6 sm:px-8`.
- **Section height:** `h-screen`, `overflow-hidden`.
- **Mobile menu:** required (>3 links) — toggle button below `lg`, dropdown with blurred white panel and the full link list.

---

## LAYER 10 — ICON SET (NAXAS signature)

Use **only** these three `lucide-react` icons. Reject any icon name outside this list.

```
- ArrowUpRight   → "Contact us" affordance / external-link feel (NOT for the primary CTA)
- ArrowRight     → the primary CTA arrow ("Request Satellite Access")
- Menu / X       → mobile hamburger open / close
```

Sizes used: `ArrowUpRight` `h-3.5 w-3.5`, `ArrowRight` `h-4 w-4`, `Menu`/`X` `h-5 w-5`.

---

## LAYER 11 — REPRODUCE EXACTLY

Reproduce exactly. Do not:
- Substitute the font — it is **Inter**, not "similar to Inter".
- Round colors — `#2563EB`, `#64CEFB`, `#FFFFFF`, `#000000`, and the globe arrays `[0.95,0.95,0.97]` / `[0.145,0.388,0.922]` / `[0.82,0.82,0.86]` are exact.
- Shorten or reword copy — every string in Layer 7 Block 7 is verbatim, including the space before `!` in *"…Real Time !"* and the em-dash in the intro paragraph.
- Change the globe physics — `phi += 0.005`, spring `{mass:1, stiffness:280, damping:40}`, divisors 200 (mouse) / 100 (touch), fade-in 1000ms after 100ms.
- Use icons outside Layer 10.

If a constraint conflicts with a framework limit (e.g. an unavailable font weight), clamp to the nearest valid value and note the substitution as a code comment — do not silently change.

---

## FILE TREE (target output)

```
NAXAS/
├─ index.html                      # Inter <link>, #root, title
├─ package.json                    # react, react-dom, cobe, framer-motion, lucide-react
├─ tailwind.config.js              # Inter in fontFamily.sans
├─ postcss.config.js
├─ tsconfig.json / tsconfig.node.json
├─ vite.config.ts                  # @vitejs/plugin-react
├─ public/satellite.svg            # favicon: blue-ringed dot
└─ src/
   ├─ main.tsx                     # React root
   ├─ index.css                    # @tailwind layers + body/:root rules (Layer 2)
   ├─ App.tsx                      # renders <Hero />
   └─ components/
      ├─ Hero.tsx                  # Layer 7
      ├─ Globe.tsx                 # Layer 6
      └─ ShinyText.tsx             # Layer 6
```

**Install & run:**
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc && vite build
```

---
