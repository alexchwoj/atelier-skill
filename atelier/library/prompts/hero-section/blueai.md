# BlueAI — Hero Recreation Prompt v1

> Build the **BlueAI** hero exactly. Everything inside `{{ DOUBLE_BRACES }}` is a customization slot; everything outside is invariant.
---

## LAYER 0 — META

```yaml
asset_id: blueai-hero-fluid-dark-01
category: hero
aesthetic: dark cinematic, interactive fluid background, shiny gradient headline
industry: ai
tone: premium / engineered / minimal
preview_video: (none — interactive WebGL background, no looping video)
license: standard
version: 1.0
last_updated: 2026-06-01
```

---

## LAYER 1 — OPENING DECLARATION

Build a **single-screen hero section** for **BlueAI** — an **AI development company shipping production-ready AI solutions with advanced models and a developer-first platform**.

Use the following **pinned** tech stack (do not substitute):

- **React 18 + TypeScript + Vite**
- **Tailwind CSS 3** (default config + extensions in Layer 3)
- **motion/react** (Framer Motion v12+, import from `motion/react`)
- **lucide-react** for icons (restricted to the kit in Layer 10)
- **three** (peer of the in-house `FluidBackground` component — Layer 5)

The aesthetic is **a dark cinematic hero on pure black, with an interactive WebGL fluid background reacting to the cursor, a shiny white→pale-blue gradient headline, and an Instrument Serif pre-headline above an Instrument Sans display headline**. `#000000` is the global background. Default text color is `#ffffff`. **Do not use purple, magenta, indigo-bright, neon green, or warm-tone accents anywhere.** The only accent hues allowed are the brand-blue family (`#2738ff` → `#3054ff` → `#5b8bff` → `#b4c0ff`) and neutral white/black.

---

## LAYER 2 — FONTS

Load via Google Fonts in `src/index.css` (the project entry stylesheet):

```css
@import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Instrument+Serif:ital@0;1&display=swap');
```

**Pairing used:** `Instrument Sans` (display + body) + `Instrument Serif` (italic-capable, used roman for the pre-headline).

Tailwind config extension (`tailwind.config.js`):

```js
fontFamily: {
  sans:  ['"Instrument Sans"', 'system-ui', 'sans-serif'],
  serif: ['"Instrument Serif"', 'Georgia', 'serif'],
}
```

Body default:

```css
body {
  margin: 0;
  background-color: #000000;
  font-family: 'Instrument Sans', system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

**Note for builders:** Instrument Sans tops at weight 700 — if a class asks for `font-extrabold` (800), clamp down to `font-bold` (700) rather than synthesizing. Instrument Serif ships only the italic axis; the pre-headline uses it roman (the default 400) — do not italicize.

---

## LAYER 3 — COLOR SYSTEM

Single dark theme; ship as hex literals (no HSL theming needed for one screen).

| Token | Value | Used for |
|---|---|---|
| `--bg`               | `#000000` | Section background |
| `--fg`               | `#ffffff` | Primary text |
| `--fg-muted`         | `#ffffff` @ 70% | Subheadline |
| `--fg-faint`         | `#ffffff` @ 80% | Nav link rest state |
| `--accent`           | `#3054ff` | Primary CTA arrow circle |
| `--accent-hover`     | `#2040e0` | Primary CTA arrow hover |
| `--headline-stop`    | `#b4c0ff` | Bottom stop of headline gradient |
| `--cta-text`         | `#0a0400` | Text inside white pill CTA |
| `--decor-blue`       | `bg-blue-900/20` | Top-left decorative gradient |
| `--decor-indigo`     | `bg-indigo-900/20` | Bottom-right decorative gradient |

**Tailwind extends:** none required — every value is expressed as an arbitrary class (`bg-[#000000]`, `text-[#0a0400]`, etc.) or a default Tailwind utility (`text-white/70`, `bg-blue-900/20`, `blur-[120px]`).

---

## LAYER 4 — CUSTOM CSS UTILITIES (the "design DNA")

**This is the invariant block.** Paste verbatim — do not paraphrase, do not "improve".

### 4a. Gradient text (the headline shine)

Applied inline via Tailwind on the `<motion.h1>`:

```
bg-gradient-to-b from-white via-white to-[#b4c0ff]
bg-clip-text text-transparent
```

(no `@keyframes shiny` — the gradient is static, the "energy" comes from the fluid background behind it.)

### 4b. Readability overlay (radial vignette)

A single absolutely-positioned `<div>` over the fluid background, `pointer-events-none`, `z-[1]`:

```
bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.42),rgba(0,0,0,0.18)_55%,rgba(0,0,0,0.58))]
```

### 4c. Decorative blue/indigo blooms

Two pointer-events-none absolutely-positioned circles using `mix-blend-screen`:

```html
<div className="pointer-events-none absolute top-[-20%] left-[20%] z-[1] h-[600px] w-[600px] rounded-full bg-blue-900/20 blur-[120px] mix-blend-screen" />
<div className="pointer-events-none absolute bottom-[-10%] right-[20%] z-[1] h-[500px] w-[500px] rounded-full bg-indigo-900/20 blur-[120px] mix-blend-screen" />
```

### 4d. Primary CTA glow

On hover, the white pill grows a soft white halo:

```
hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105
```

### 4e. Pointer-events strategy (critical — copy verbatim)

The hero uses a tri-layer pointer-events choreography so the fluid background reads mouse motion across the whole hero area while CTA buttons remain clickable:

- Background layer (`FluidBackground` wrapper): default pointer events. The component itself listens to `window` mousemove and checks `getBoundingClientRect()`, so pointer-events on this wrapper are not load-bearing.
- Overlay + decorative blooms: `pointer-events-none`.
- Content wrapper (`max-w-5xl` text block): `pointer-events-none` — so mouse over the centered text doesn't visually "block" anything.
- CTA button row: `pointer-events-auto` — re-enables clicks for the two buttons.

---

## LAYER 5 — BACKGROUND ASSET

**This hero does NOT use a looping background video.** There is no CloudFront / Mux / HLS source. The background is an in-house **`FluidBackground`** component — a WebGL fluid-simulation canvas (Navier–Stokes with BFECC advection, viscosity-free by default, Poisson pressure solve, palette-mapped velocity color, transparent background) implemented in plain JS + three.js.

Place it at `src/components/FluidBackground.jsx` and `src/components/FluidBackground.css`. **Full source in Appendix A — paste verbatim.**

**Usage in the hero (Layer 7 Section 2):**

```jsx
const FLUID_COLORS = ["#2a3fff", "#4863ff", "#6f86d6", "#9fb0dd"];

<div className="absolute inset-0 z-0">
  <FluidBackground
    colors={FLUID_COLORS}
    mouseForce={42}
    cursorSize={170}
    isViscous={false}
    viscous={30}
    iterationsViscous={32}
    iterationsPoisson={32}
    resolution={0.5}
    isBounce={false}
    autoDemo={true}
    autoSpeed={0.8}
    autoIntensity={3.2}
    takeoverDuration={0.25}
    autoResumeDelay={3000}
    autoRampDuration={0.6}
  />
</div>
```

**Prop reference (full):**

| Prop | Type | Default in this hero | Description |
|---|---|---|---|
| `colors` | `string[]` | `['#2a3fff','#4863ff','#6f86d6','#9fb0dd']` | Velocity→color palette stops. Index 0 maps to low velocity, last to high. Brighter last stop = more luminous peaks. |
| `mouseForce` | `number` | `42` | Multiplier applied to mouse-delta velocity injection. |
| `cursorSize` | `number` | `170` | Radius (px at base resolution) of the force brush. |
| `isViscous` | `boolean` | `false` | Toggle iterative viscosity solve. Off here for crisper streaks. |
| `viscous` | `number` | `30` | Coefficient when viscosity is on. |
| `iterationsViscous` | `number` | `32` | Gauss-Seidel iterations for viscosity. |
| `iterationsPoisson` | `number` | `32` | Pressure Poisson iterations (incompressibility). |
| `resolution` | `number` | `0.5` | Sim texture scale vs canvas. Lower = faster, softer. |
| `dt` | `number` | `0.014` (default) | Fixed sim timestep. Not overridden in this hero. |
| `BFECC` | `boolean` | `true` (default) | Error-compensated advection. |
| `isBounce` | `boolean` | `false` | Show bounce boundaries. Off here — flow leaves edges. |
| `autoDemo` | `boolean` | `true` | Idle auto-driver pilots the pointer when no user input. |
| `autoSpeed` | `number` | `0.8` | Auto pointer speed in normalized units/sec. |
| `autoIntensity` | `number` | `3.2` | Velocity multiplier during auto mode. |
| `takeoverDuration` | `number` | `0.25` | Seconds to lerp from auto to user pointer on first move. |
| `autoResumeDelay` | `number` | `3000` | ms of inactivity before auto mode resumes. |
| `autoRampDuration` | `number` | `0.6` | Seconds to ramp auto speed from 0 → full after activation. |
| `className` | `string` | `''` | Optional extra class on the root container. |
| `style` | `CSSProperties` | `{}` | Inline styles on the root container. |

**Why these specific values:** the hero is tuned for "big, but not blinding". `cursorSize: 170` + `mouseForce: 42` gives a generous brush; `autoSpeed: 0.8` + `autoIntensity: 3.2` keeps idle motion visible without strobing; the palette ends at `#9fb0dd` (muted light blue, not near-white) so peak velocity does not over-saturate against the radial vignette in Layer 4b.

---

## LAYER 6 — SHARED COMPONENTS

The hero uses **motion/react** directly — no shared wrappers needed. Animation primitives are inlined per-element with the timings from Layer 8.

If you later extract them, the patterns are:

```js
// Fade-up
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}

// Scale-in (used on the display headline)
initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ delay: 0.2, duration: 0.6 }}

// Fade-to-muted (used on the subheadline so it lands at opacity 0.7, not 1.0)
initial={{ opacity: 0 }}
animate={{ opacity: 0.7 }}
transition={{ delay: 0.4, duration: 0.6 }}
```

No `FadeIn`, `BlurText`, `Magnet`, or `FadingVideo` are used in this hero. Do not introduce them.

---

## LAYER 7 — SECTIONS

> The hero is the entire viewport at this stage. Two sections only: Navbar (fixed) + Hero.

### SECTION 1 — Navbar (fixed, transparent)

**Block 1 · Container**
- Wrapper: `<nav className="fixed top-0 left-0 z-50 w-full bg-transparent px-6 py-4">`
- Inner: `<div className="flex items-center justify-between">`

**Block 2 · Background**
- Asset: none — fully transparent.
- No overlay.
- z-index: `z-50` so it floats above the hero content (`z-10`) and the fluid background (`z-0`).

**Block 3 · Layout primitive**
- Single flex row, `items-center justify-between`.

**Block 4 · Elements**

**1. Brand mark (left)**
- Position: left of flex row.
- Classes: `flex items-center gap-2 text-white`.
- Content: Sunburst SVG (24×24, white stroke) + wordmark `BlueAI`.
- Wordmark classes: `font-sans text-lg font-semibold tracking-tight`.
- Sunburst SVG (paste verbatim — this is the in-house mark):

```jsx
<svg
  width="24" height="24" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" strokeWidth="1.8"
  strokeLinecap="round" strokeLinejoin="round"
  className="text-white" aria-hidden="true">
  <circle cx="12" cy="12" r="4" />
  <path d="M12 2v3" />
  <path d="M12 19v3" />
  <path d="M2 12h3" />
  <path d="M19 12h3" />
  <path d="m4.6 4.6 2.1 2.1" />
  <path d="m17.3 17.3 2.1 2.1" />
  <path d="m19.4 4.6-2.1 2.1" />
  <path d="m6.7 17.3-2.1 2.1" />
</svg>
```

**2. Center nav links** (hidden on mobile, visible md and up)
- Wrapper classes: `hidden items-center gap-8 md:flex`
- Each link: `flex items-center gap-1 font-sans text-sm font-medium text-white/80 transition-colors hover:text-white`
- Links in this exact order: `Products`, `Customer Stories`, `Resources`, `Pricing`
- The first link (`Products`) gets a trailing `<ChevronDown className="h-4 w-4" />` to signal a dropdown affordance. The other three have no icon.

**3. Right cluster**
- Wrapper classes: `flex items-center gap-4`
- Link `Book A Demo`: `hidden font-sans text-sm font-medium text-white/80 transition-colors hover:text-white sm:block`
- Button `Get Started`: `rounded-full bg-white px-5 py-2.5 font-sans text-sm font-semibold text-black transition-transform hover:scale-105`

**Block 5 · Animation**
- None. The navbar renders without entry animation.

**Block 6 · Responsive notes**
- `<md`: center links hidden, brand + right cluster visible.
- `<sm`: `Book A Demo` hidden; only `Get Started` shows on the right.

**Block 7 · Copy** (verbatim, in order of appearance)

```
BlueAI
Products
Customer Stories
Resources
Pricing
Book A Demo
Get Started
```

---

### SECTION 2 — Hero

**Block 1 · Container**
- Wrapper: `<section className="relative w-full min-h-screen overflow-hidden bg-[#000000] text-white">`
- No outer padding (content has its own `px-6`).
- No `max-width` on the section itself; the inner content cap is `max-w-5xl`.

**Block 2 · Background (z-stack, bottom → top)**
- `z-0`: `<FluidBackground />` inside `<div className="absolute inset-0 z-0">` (see Layer 5).
- `z-[1]`: radial vignette overlay (see Layer 4b) — `pointer-events-none absolute inset-0`.
- `z-[1]`: top-left blue bloom and bottom-right indigo bloom (see Layer 4c).
- `z-10`: content container.

**Block 3 · Layout primitive**
- Content container: `relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center pointer-events-none`
- Inner stack: `mt-20 flex flex-col items-center space-y-12` — pushes everything 80px down from top and adds 48px vertical rhythm between the four blocks.

**Block 4 · Elements**

**1. Pre-headline** — `<motion.p>` (serif)
- Classes: `font-serif text-3xl leading-[1.1] text-white sm:text-5xl lg:text-[48px]`
- Animation: `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}`
- Text: `Intelligence at the speed of thought`

**2. Display headline** — `<motion.h1>` (sans, gradient-clipped)
- Classes: `bg-gradient-to-b from-white via-white to-[#b4c0ff] bg-clip-text font-sans text-6xl font-semibold leading-[0.9] tracking-tighter text-transparent sm:text-8xl lg:text-[136px]`
- Animation: `initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.6 }}`
- Text: `Build Smarter`

**3. Subheadline** — `<motion.p>` (sans, muted)
- Classes: `max-w-xl font-sans text-lg leading-[1.65] text-white opacity-70 sm:text-[20px]`
- Animation: `initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} transition={{ delay: 0.4, duration: 0.6 }}` (note: target opacity is **0.7**, not 1)
- Text: `Ship production-ready AI solutions in record time with our advanced models and developer-first platform.`

**4. CTA row** — `<motion.div>` (re-enables pointer events)
- Wrapper classes: `pointer-events-auto flex flex-col items-center gap-6 sm:flex-row`
- Animation: `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}`

  **4a. Primary CTA — "Start Building Free"**
  - Container: `<a href="#" className="group flex items-center rounded-full bg-white py-2 pl-6 pr-2 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">`
  - Label: `<span className="font-sans text-lg font-medium text-[#0a0400]">Start Building Free</span>`
  - Arrow puck: `<span className="ml-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#3054ff] transition-colors group-hover:bg-[#2040e0]"><ArrowRight className="h-5 w-5 text-white" /></span>`

  **4b. Secondary CTA — "See Examples"**
  - Container: `<a href="#" className="group flex items-center gap-2 rounded-lg px-4 py-2 font-sans text-white/70 backdrop-blur-sm transition-colors hover:bg-white/5 hover:text-white">`
  - Label text: `See Examples`
  - Trailing icon: `<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />`

**Block 5 · Animation timeline** (from `mount`)
- `t=0.00s`  → pre-headline starts fading + sliding up (duration 0.6)
- `t=0.20s`  → headline starts scaling in from 0.9 (duration 0.6)
- `t=0.40s`  → subheadline starts fading toward opacity 0.7 (duration 0.6)
- `t=0.60s`  → CTA row starts fading + sliding up (duration 0.5)
- Total entrance window: ~1.10s

**Block 6 · Responsive notes**
- `text-3xl sm:text-5xl lg:text-[48px]` for pre-headline (30 → 48 → 48 px).
- `text-6xl sm:text-8xl lg:text-[136px]` for headline (60 → 96 → 136 px).
- `text-lg sm:text-[20px]` for subheadline (18 → 20 px), wrapped at `max-w-xl` (576px).
- CTA row stacks vertically on mobile (`flex-col`), horizontal from `sm:` up (`sm:flex-row`).
- Inner top offset `mt-20` is constant — the section centers vertically within `min-h-screen` so this offset reads as a slight downward bias.

**Block 7 · Copy** (verbatim, in order)

```
Intelligence at the speed of thought
Build Smarter
Ship production-ready AI solutions in record time with our advanced models and developer-first platform.
Start Building Free
See Examples
```

---

## LAYER 8 — ANIMATION STANDARDS

```js
// Standard easing — motion/react default (none specified) is used here for simplicity.
// If you must spell it out, motion's default `easeOut` produces a near-identical curve.

// Standard durations
const fadePre   = 0.6;
const scaleHead = 0.6;
const fadeSub   = 0.6;
const fadeCTAs  = 0.5;

// Standard delays
const dPre  = 0.0;
const dHead = 0.2;
const dSub  = 0.4;
const dCTAs = 0.6;

// Subheadline non-1 target
const subOpacityTarget = 0.7;
```

**Per-section entry timeline (default for this hero — see Section 2 Block 5).**

No `whileInView`, no scroll-triggered animation, no stagger. Everything plays on mount, once, in a fixed 1.1s window.

---

## LAYER 9 — RESPONSIVE STANDARDS

- **Mobile-first.** Base classes target mobile (≤640px); use `sm:` (≥640px), `md:` (≥768px), `lg:` (≥1024px) to scale up.
- **Hero typography:** Tailwind breakpoint stairs, not `clamp()`. Exact ladder:
  - Pre-headline: 30 → 48 → 48 px
  - Headline: 60 → 96 → 136 px
  - Subheadline: 18 → 20 → 20 px
- **Container padding:** `px-6` on the content block (no `sm:`/`lg:` change for this hero).
- **Section vertical rhythm:** `min-h-screen` for the hero; inner stack uses `space-y-12` (48px) + `mt-20` (80px).
- **Navbar padding:** `px-6 py-4` constant across breakpoints.
- **Mobile menu:** not implemented at this stage. The center nav links hide below `md` and reappear at `md` — no hamburger.

---

## LAYER 10 — ICON SET

Only the following lucide-react icons are used:

```
- ArrowRight    → CTA forward affordance (used in both primary and secondary CTA)
- ChevronDown   → dropdown affordance on the "Products" nav link
```

Plus one in-house SVG mark, used only for the brand logo (paste verbatim in Layer 7 Section 1):

```
- Sunburst      → BlueAI brand mark — a center circle with eight equal radial spokes (cardinal + diagonal)
```

**Do/don't rules:**
- Do NOT use `ChevronRight` on the CTAs — use `ArrowRight`.
- Do NOT swap the sunburst for a lucide `Sun` or `Sparkles` — the proprietary mark uses an open spokes pattern (no filled rays), 1.8 stroke, rounded line caps.
- Do NOT introduce additional icons (no `Sparkles`, `Star`, `Zap`, etc.) at this hero stage.

---

## LAYER 11 — REPRODUCE-EXACTLY CLAUSE

Reproduce exactly. Do not:

- Substitute fonts ("similar to Instrument Sans" is not Instrument Sans; "Inter" is not Instrument Sans).
- Round color values (`#0a0400` is not `#000000`; `#3054ff` is not `#3b82f6`).
- Shorten or paraphrase copy ("Build faster" is not "Build Smarter"; "AI products" is not "AI solutions").
- Skip the subheadline's non-1 opacity target — it must animate to 0.7, not 1.
- Use icons outside Layer 10.
- Replace the `FluidBackground` with a video, a static gradient, or a lucide `Sparkles` field — the hero requires the interactive WebGL component (Appendix A).
- Add `whileInView`, scroll-triggered animation, or staggered word reveals — entrance plays on mount only.
- Inline-style anything Tailwind can express; conversely, do not Tailwind anything that requires arbitrary values (`bg-[#000000]`, `lg:text-[136px]`, `blur-[120px]`, `bg-[radial-gradient(...)]`).

If a constraint conflicts with framework limitations (e.g. font weight not available), clamp to the nearest valid value and note the substitution as a code comment — do not silently change.

---

# CUSTOMIZATION CHEAT SHEET

| Slot | Where | What to swap |
|---|---|---|
| `BRAND_NAME` | Layer 1 + Navbar wordmark | `BlueAI` → your brand |
| `ONE_LINE_DESCRIPTION` | Layer 1 | The one-sentence what-is-it |
| `PRE_HEADLINE` | Section 2 Element 1 | "Intelligence at the speed of thought" |
| `HEADLINE` | Section 2 Element 2 | "Build Smarter" |
| `SUBHEADLINE` | Section 2 Element 3 | "Ship production-ready AI solutions ..." |
| `FLUID_COLORS` | Layer 5 + Hero | `['#2a3fff','#4863ff','#6f86d6','#9fb0dd']` |
| `--accent` / `--accent-hover` | Layer 3 + primary CTA | `#3054ff` / `#2040e0` |
| `--headline-stop` | Layer 3 + headline gradient | `#b4c0ff` |
| Nav links | Section 1 Element 2 | `Products` / `Customer Stories` / `Resources` / `Pricing` |
| CTA copy | Section 2 Element 4 | `Start Building Free` / `See Examples` |

**Everything else (Layers 4, 6, 8, 9, 11) is INVARIANT.**

---

# APPENDIX A — `FluidBackground` component (full source, paste verbatim)

In-house WebGL fluid-simulation background. JavaScript + a 1-line CSS file. Peer dependency: `three`.

## A.1 — `src/components/FluidBackground.css`

```css
.fluid-background-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  touch-action: none;
}
```

## A.2 — `src/components/FluidBackground.jsx`

```jsx
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './FluidBackground.css';

export default function FluidBackground({
  mouseForce = 20,
  cursorSize = 100,
  isViscous = false,
  viscous = 30,
  iterationsViscous = 32,
  iterationsPoisson = 32,
  dt = 0.014,
  BFECC = true,
  resolution = 0.5,
  isBounce = false,
  colors = ['#5227FF', '#FF9FFC', '#B497CF'],
  style = {},
  className = '',
  autoDemo = true,
  autoSpeed = 0.5,
  autoIntensity = 2.2,
  takeoverDuration = 0.25,
  autoResumeDelay = 1000,
  autoRampDuration = 0.6
}) {
  const mountRef = useRef(null);
  const webglRef = useRef(null);
  const resizeObserverRef = useRef(null);
  const rafRef = useRef(null);
  const intersectionObserverRef = useRef(null);
  const isVisibleRef = useRef(true);
  const resizeRafRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    function makePaletteTexture(stops) {
      let arr;
      if (Array.isArray(stops) && stops.length > 0) {
        if (stops.length === 1) arr = [stops[0], stops[0]];
        else arr = stops;
      } else {
        arr = ['#ffffff', '#ffffff'];
      }
      const w = arr.length;
      const data = new Uint8Array(w * 4);
      for (let i = 0; i < w; i++) {
        const c = new THREE.Color(arr[i]);
        data[i * 4 + 0] = Math.round(c.r * 255);
        data[i * 4 + 1] = Math.round(c.g * 255);
        data[i * 4 + 2] = Math.round(c.b * 255);
        data[i * 4 + 3] = 255;
      }
      const tex = new THREE.DataTexture(data, w, 1, THREE.RGBAFormat);
      tex.magFilter = THREE.LinearFilter;
      tex.minFilter = THREE.LinearFilter;
      tex.wrapS = THREE.ClampToEdgeWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      tex.generateMipmaps = false;
      tex.needsUpdate = true;
      return tex;
    }

    const paletteTex = makePaletteTexture(colors);
    const bgVec4 = new THREE.Vector4(0, 0, 0, 0); // always transparent

    class CommonClass {
      constructor() {
        this.width = 0; this.height = 0; this.aspect = 1;
        this.pixelRatio = 1; this.isMobile = false; this.breakpoint = 768;
        this.fboWidth = null; this.fboHeight = null;
        this.time = 0; this.delta = 0;
        this.container = null; this.renderer = null; this.clock = null;
      }
      init(container) {
        this.container = container;
        this.pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
        this.resize();
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.autoClear = false;
        this.renderer.setClearColor(new THREE.Color(0x000000), 0);
        this.renderer.setPixelRatio(this.pixelRatio);
        this.renderer.setSize(this.width, this.height);
        this.renderer.domElement.style.width = '100%';
        this.renderer.domElement.style.height = '100%';
        this.renderer.domElement.style.display = 'block';
        this.clock = new THREE.Clock();
        this.clock.start();
      }
      resize() {
        if (!this.container) return;
        const rect = this.container.getBoundingClientRect();
        this.width = Math.max(1, Math.floor(rect.width));
        this.height = Math.max(1, Math.floor(rect.height));
        this.aspect = this.width / this.height;
        if (this.renderer) this.renderer.setSize(this.width, this.height, false);
      }
      update() {
        this.delta = this.clock.getDelta();
        this.time += this.delta;
      }
    }
    const Common = new CommonClass();

    class MouseClass {
      constructor() {
        this.mouseMoved = false;
        this.coords = new THREE.Vector2();
        this.coords_old = new THREE.Vector2();
        this.diff = new THREE.Vector2();
        this.timer = null;
        this.container = null; this.docTarget = null; this.listenerTarget = null;
        this.isHoverInside = false; this.hasUserControl = false; this.isAutoActive = false;
        this.autoIntensity = 2.0;
        this.takeoverActive = false; this.takeoverStartTime = 0; this.takeoverDuration = 0.25;
        this.takeoverFrom = new THREE.Vector2(); this.takeoverTo = new THREE.Vector2();
        this.onInteract = null;
        this._onMouseMove = this.onDocumentMouseMove.bind(this);
        this._onTouchStart = this.onDocumentTouchStart.bind(this);
        this._onTouchMove = this.onDocumentTouchMove.bind(this);
        this._onTouchEnd = this.onTouchEnd.bind(this);
        this._onDocumentLeave = this.onDocumentLeave.bind(this);
      }
      init(container) {
        this.container = container;
        this.docTarget = container.ownerDocument || null;
        const defaultView = (this.docTarget && this.docTarget.defaultView) || (typeof window !== 'undefined' ? window : null);
        if (!defaultView) return;
        this.listenerTarget = defaultView;
        this.listenerTarget.addEventListener('mousemove', this._onMouseMove);
        this.listenerTarget.addEventListener('touchstart', this._onTouchStart, { passive: true });
        this.listenerTarget.addEventListener('touchmove', this._onTouchMove, { passive: true });
        this.listenerTarget.addEventListener('touchend', this._onTouchEnd);
        if (this.docTarget) this.docTarget.addEventListener('mouseleave', this._onDocumentLeave);
      }
      dispose() {
        if (this.listenerTarget) {
          this.listenerTarget.removeEventListener('mousemove', this._onMouseMove);
          this.listenerTarget.removeEventListener('touchstart', this._onTouchStart);
          this.listenerTarget.removeEventListener('touchmove', this._onTouchMove);
          this.listenerTarget.removeEventListener('touchend', this._onTouchEnd);
        }
        if (this.docTarget) this.docTarget.removeEventListener('mouseleave', this._onDocumentLeave);
        this.listenerTarget = null; this.docTarget = null; this.container = null;
      }
      isPointInside(clientX, clientY) {
        if (!this.container) return false;
        const rect = this.container.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return false;
        return clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
      }
      updateHoverState(clientX, clientY) {
        this.isHoverInside = this.isPointInside(clientX, clientY);
        return this.isHoverInside;
      }
      setCoords(x, y) {
        if (!this.container) return;
        if (this.timer) window.clearTimeout(this.timer);
        const rect = this.container.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;
        const nx = (x - rect.left) / rect.width;
        const ny = (y - rect.top) / rect.height;
        this.coords.set(nx * 2 - 1, -(ny * 2 - 1));
        this.mouseMoved = true;
        this.timer = window.setTimeout(() => { this.mouseMoved = false; }, 100);
      }
      setNormalized(nx, ny) { this.coords.set(nx, ny); this.mouseMoved = true; }
      onDocumentMouseMove(event) {
        if (!this.updateHoverState(event.clientX, event.clientY)) return;
        if (this.onInteract) this.onInteract();
        if (this.isAutoActive && !this.hasUserControl && !this.takeoverActive) {
          if (!this.container) return;
          const rect = this.container.getBoundingClientRect();
          if (rect.width === 0 || rect.height === 0) return;
          const nx = (event.clientX - rect.left) / rect.width;
          const ny = (event.clientY - rect.top) / rect.height;
          this.takeoverFrom.copy(this.coords);
          this.takeoverTo.set(nx * 2 - 1, -(ny * 2 - 1));
          this.takeoverStartTime = performance.now();
          this.takeoverActive = true; this.hasUserControl = true; this.isAutoActive = false;
          return;
        }
        this.setCoords(event.clientX, event.clientY);
        this.hasUserControl = true;
      }
      onDocumentTouchStart(event) {
        if (event.touches.length !== 1) return;
        const t = event.touches[0];
        if (!this.updateHoverState(t.clientX, t.clientY)) return;
        if (this.onInteract) this.onInteract();
        this.setCoords(t.clientX, t.clientY);
        this.hasUserControl = true;
      }
      onDocumentTouchMove(event) {
        if (event.touches.length !== 1) return;
        const t = event.touches[0];
        if (!this.updateHoverState(t.clientX, t.clientY)) return;
        if (this.onInteract) this.onInteract();
        this.setCoords(t.clientX, t.clientY);
      }
      onTouchEnd() { this.isHoverInside = false; }
      onDocumentLeave() { this.isHoverInside = false; }
      update() {
        if (this.takeoverActive) {
          const t = (performance.now() - this.takeoverStartTime) / (this.takeoverDuration * 1000);
          if (t >= 1) {
            this.takeoverActive = false;
            this.coords.copy(this.takeoverTo);
            this.coords_old.copy(this.coords);
            this.diff.set(0, 0);
          } else {
            const k = t * t * (3 - 2 * t);
            this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo, k);
          }
        }
        this.diff.subVectors(this.coords, this.coords_old);
        this.coords_old.copy(this.coords);
        if (this.coords_old.x === 0 && this.coords_old.y === 0) this.diff.set(0, 0);
        if (this.isAutoActive && !this.takeoverActive) this.diff.multiplyScalar(this.autoIntensity);
      }
    }
    const Mouse = new MouseClass();

    class AutoDriver {
      constructor(mouse, manager, opts) {
        this.mouse = mouse; this.manager = manager;
        this.enabled = opts.enabled; this.speed = opts.speed;
        this.resumeDelay = opts.resumeDelay || 3000;
        this.rampDurationMs = (opts.rampDuration || 0) * 1000;
        this.active = false;
        this.current = new THREE.Vector2(0, 0);
        this.target = new THREE.Vector2();
        this.lastTime = performance.now(); this.activationTime = 0;
        this.margin = 0.2;
        this._tmpDir = new THREE.Vector2();
        this.pickNewTarget();
      }
      pickNewTarget() {
        const r = Math.random;
        this.target.set((r() * 2 - 1) * (1 - this.margin), (r() * 2 - 1) * (1 - this.margin));
      }
      forceStop() { this.active = false; this.mouse.isAutoActive = false; }
      update() {
        if (!this.enabled) return;
        const now = performance.now();
        const idle = now - this.manager.lastUserInteraction;
        if (idle < this.resumeDelay) { if (this.active) this.forceStop(); return; }
        if (this.mouse.isHoverInside) { if (this.active) this.forceStop(); return; }
        if (!this.active) {
          this.active = true;
          this.current.copy(this.mouse.coords);
          this.lastTime = now; this.activationTime = now;
        }
        if (!this.active) return;
        this.mouse.isAutoActive = true;
        let dtSec = (now - this.lastTime) / 1000;
        this.lastTime = now;
        if (dtSec > 0.2) dtSec = 0.016;
        const dir = this._tmpDir.subVectors(this.target, this.current);
        const dist = dir.length();
        if (dist < 0.01) { this.pickNewTarget(); return; }
        dir.normalize();
        let ramp = 1;
        if (this.rampDurationMs > 0) {
          const t = Math.min(1, (now - this.activationTime) / this.rampDurationMs);
          ramp = t * t * (3 - 2 * t);
        }
        const step = this.speed * dtSec * ramp;
        const move = Math.min(step, dist);
        this.current.addScaledVector(dir, move);
        this.mouse.setNormalized(this.current.x, this.current.y);
      }
    }

    // ---- GLSL ----
    const face_vert = `
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`;
    const line_vert = `
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`;
    const mouse_vert = `
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`;
    const advection_frag = `
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy;
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`;
    const color_frag = `
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`;
    const divergence_frag = `
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`;
    const externalForce_frag = `
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`;
    const poisson_frag = `
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`;
    const pressure_frag = `
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`;
    const viscous_frag = `
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;

    class ShaderPass {
      constructor(props) {
        this.props = props || {};
        this.uniforms = this.props.material?.uniforms;
        this.scene = null; this.camera = null; this.material = null;
        this.geometry = null; this.plane = null;
      }
      init() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.Camera();
        if (this.uniforms) {
          this.material = new THREE.RawShaderMaterial(this.props.material);
          this.geometry = new THREE.PlaneGeometry(2.0, 2.0);
          this.plane = new THREE.Mesh(this.geometry, this.material);
          this.scene.add(this.plane);
        }
      }
      update() {
        Common.renderer.setRenderTarget(this.props.output || null);
        Common.renderer.render(this.scene, this.camera);
        Common.renderer.setRenderTarget(null);
      }
    }

    class Advection extends ShaderPass {
      constructor(simProps) {
        super({
          material: {
            vertexShader: face_vert, fragmentShader: advection_frag,
            uniforms: {
              boundarySpace: { value: simProps.cellScale },
              px: { value: simProps.cellScale },
              fboSize: { value: simProps.fboSize },
              velocity: { value: simProps.src.texture },
              dt: { value: simProps.dt },
              isBFECC: { value: true }
            }
          },
          output: simProps.dst
        });
        this.uniforms = this.props.material.uniforms;
        this.init();
      }
      init() { super.init(); this.createBoundary(); }
      createBoundary() {
        const boundaryG = new THREE.BufferGeometry();
        const vertices_boundary = new Float32Array([
          -1,-1,0, -1,1,0, -1,1,0, 1,1,0, 1,1,0, 1,-1,0, 1,-1,0, -1,-1,0
        ]);
        boundaryG.setAttribute('position', new THREE.BufferAttribute(vertices_boundary, 3));
        const boundaryM = new THREE.RawShaderMaterial({
          vertexShader: line_vert, fragmentShader: advection_frag, uniforms: this.uniforms
        });
        this.line = new THREE.LineSegments(boundaryG, boundaryM);
        this.scene.add(this.line);
      }
      update({ dt, isBounce, BFECC }) {
        this.uniforms.dt.value = dt;
        this.line.visible = isBounce;
        this.uniforms.isBFECC.value = BFECC;
        super.update();
      }
    }

    class ExternalForce extends ShaderPass {
      constructor(simProps) { super({ output: simProps.dst }); this.init(simProps); }
      init(simProps) {
        super.init();
        const mouseG = new THREE.PlaneGeometry(1, 1);
        const mouseM = new THREE.RawShaderMaterial({
          vertexShader: mouse_vert, fragmentShader: externalForce_frag,
          blending: THREE.AdditiveBlending, depthWrite: false,
          uniforms: {
            px: { value: simProps.cellScale },
            force:  { value: new THREE.Vector2(0.0, 0.0) },
            center: { value: new THREE.Vector2(0.0, 0.0) },
            scale:  { value: new THREE.Vector2(simProps.cursor_size, simProps.cursor_size) }
          }
        });
        this.mouse = new THREE.Mesh(mouseG, mouseM);
        this.scene.add(this.mouse);
      }
      update(props) {
        const forceX = (Mouse.diff.x / 2) * props.mouse_force;
        const forceY = (Mouse.diff.y / 2) * props.mouse_force;
        const cursorSizeX = props.cursor_size * props.cellScale.x;
        const cursorSizeY = props.cursor_size * props.cellScale.y;
        const centerX = Math.min(Math.max(Mouse.coords.x, -1 + cursorSizeX + props.cellScale.x * 2), 1 - cursorSizeX - props.cellScale.x * 2);
        const centerY = Math.min(Math.max(Mouse.coords.y, -1 + cursorSizeY + props.cellScale.y * 2), 1 - cursorSizeY - props.cellScale.y * 2);
        const uniforms = this.mouse.material.uniforms;
        uniforms.force.value.set(forceX, forceY);
        uniforms.center.value.set(centerX, centerY);
        uniforms.scale.value.set(props.cursor_size, props.cursor_size);
        super.update();
      }
    }

    class Viscous extends ShaderPass {
      constructor(simProps) {
        super({
          material: {
            vertexShader: face_vert, fragmentShader: viscous_frag,
            uniforms: {
              boundarySpace: { value: simProps.boundarySpace },
              velocity: { value: simProps.src.texture },
              velocity_new: { value: simProps.dst_.texture },
              v: { value: simProps.viscous },
              px: { value: simProps.cellScale },
              dt: { value: simProps.dt }
            }
          },
          output: simProps.dst, output0: simProps.dst_, output1: simProps.dst
        });
        this.init();
      }
      update({ viscous, iterations, dt }) {
        let fbo_in, fbo_out;
        this.uniforms.v.value = viscous;
        for (let i = 0; i < iterations; i++) {
          if (i % 2 === 0) { fbo_in = this.props.output0; fbo_out = this.props.output1; }
          else             { fbo_in = this.props.output1; fbo_out = this.props.output0; }
          this.uniforms.velocity_new.value = fbo_in.texture;
          this.props.output = fbo_out;
          this.uniforms.dt.value = dt;
          super.update();
        }
        return fbo_out;
      }
    }

    class Divergence extends ShaderPass {
      constructor(simProps) {
        super({
          material: {
            vertexShader: face_vert, fragmentShader: divergence_frag,
            uniforms: {
              boundarySpace: { value: simProps.boundarySpace },
              velocity: { value: simProps.src.texture },
              px: { value: simProps.cellScale },
              dt: { value: simProps.dt }
            }
          },
          output: simProps.dst
        });
        this.init();
      }
      update({ vel }) { this.uniforms.velocity.value = vel.texture; super.update(); }
    }

    class Poisson extends ShaderPass {
      constructor(simProps) {
        super({
          material: {
            vertexShader: face_vert, fragmentShader: poisson_frag,
            uniforms: {
              boundarySpace: { value: simProps.boundarySpace },
              pressure: { value: simProps.dst_.texture },
              divergence: { value: simProps.src.texture },
              px: { value: simProps.cellScale }
            }
          },
          output: simProps.dst, output0: simProps.dst_, output1: simProps.dst
        });
        this.init();
      }
      update({ iterations }) {
        let p_in, p_out;
        for (let i = 0; i < iterations; i++) {
          if (i % 2 === 0) { p_in = this.props.output0; p_out = this.props.output1; }
          else             { p_in = this.props.output1; p_out = this.props.output0; }
          this.uniforms.pressure.value = p_in.texture;
          this.props.output = p_out;
          super.update();
        }
        return p_out;
      }
    }

    class Pressure extends ShaderPass {
      constructor(simProps) {
        super({
          material: {
            vertexShader: face_vert, fragmentShader: pressure_frag,
            uniforms: {
              boundarySpace: { value: simProps.boundarySpace },
              pressure: { value: simProps.src_p.texture },
              velocity: { value: simProps.src_v.texture },
              px: { value: simProps.cellScale },
              dt: { value: simProps.dt }
            }
          },
          output: simProps.dst
        });
        this.init();
      }
      update({ vel, pressure }) {
        this.uniforms.velocity.value = vel.texture;
        this.uniforms.pressure.value = pressure.texture;
        super.update();
      }
    }

    class Simulation {
      constructor(options) {
        this.options = {
          iterations_poisson: 32, iterations_viscous: 32, mouse_force: 20,
          resolution: 0.5, cursor_size: 100, viscous: 30, isBounce: false,
          dt: 0.014, isViscous: false, BFECC: true, ...options
        };
        this.fbos = {
          vel_0: null, vel_1: null, vel_viscous0: null, vel_viscous1: null,
          div: null, pressure_0: null, pressure_1: null
        };
        this.fboSize = new THREE.Vector2();
        this.cellScale = new THREE.Vector2();
        this.boundarySpace = new THREE.Vector2();
        this.init();
      }
      init() { this.calcSize(); this.createAllFBO(); this.createShaderPass(); }
      getFloatType() {
        const isIOS = /(iPad|iPhone|iPod)/i.test(navigator.userAgent);
        return isIOS ? THREE.HalfFloatType : THREE.FloatType;
      }
      createAllFBO() {
        const type = this.getFloatType();
        const opts = {
          type, depthBuffer: false, stencilBuffer: false,
          minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter,
          wrapS: THREE.ClampToEdgeWrapping, wrapT: THREE.ClampToEdgeWrapping
        };
        for (let key in this.fbos) {
          this.fbos[key] = new THREE.WebGLRenderTarget(this.fboSize.x, this.fboSize.y, opts);
        }
      }
      createShaderPass() {
        this.advection = new Advection({ cellScale: this.cellScale, fboSize: this.fboSize, dt: this.options.dt, src: this.fbos.vel_0, dst: this.fbos.vel_1 });
        this.externalForce = new ExternalForce({ cellScale: this.cellScale, cursor_size: this.options.cursor_size, dst: this.fbos.vel_1 });
        this.viscous = new Viscous({ cellScale: this.cellScale, boundarySpace: this.boundarySpace, viscous: this.options.viscous, src: this.fbos.vel_1, dst: this.fbos.vel_viscous1, dst_: this.fbos.vel_viscous0, dt: this.options.dt });
        this.divergence = new Divergence({ cellScale: this.cellScale, boundarySpace: this.boundarySpace, src: this.fbos.vel_viscous0, dst: this.fbos.div, dt: this.options.dt });
        this.poisson = new Poisson({ cellScale: this.cellScale, boundarySpace: this.boundarySpace, src: this.fbos.div, dst: this.fbos.pressure_1, dst_: this.fbos.pressure_0 });
        this.pressure = new Pressure({ cellScale: this.cellScale, boundarySpace: this.boundarySpace, src_p: this.fbos.pressure_0, src_v: this.fbos.vel_viscous0, dst: this.fbos.vel_0, dt: this.options.dt });
      }
      calcSize() {
        const width = Math.max(1, Math.round(this.options.resolution * Common.width));
        const height = Math.max(1, Math.round(this.options.resolution * Common.height));
        const px_x = 1.0 / width; const px_y = 1.0 / height;
        this.cellScale.set(px_x, px_y);
        this.fboSize.set(width, height);
      }
      resize() {
        this.calcSize();
        for (let key in this.fbos) this.fbos[key].setSize(this.fboSize.x, this.fboSize.y);
      }
      update() {
        if (this.options.isBounce) this.boundarySpace.set(0, 0);
        else this.boundarySpace.copy(this.cellScale);
        this.advection.update({ dt: this.options.dt, isBounce: this.options.isBounce, BFECC: this.options.BFECC });
        this.externalForce.update({ cursor_size: this.options.cursor_size, mouse_force: this.options.mouse_force, cellScale: this.cellScale });
        let vel = this.fbos.vel_1;
        if (this.options.isViscous) {
          vel = this.viscous.update({ viscous: this.options.viscous, iterations: this.options.iterations_viscous, dt: this.options.dt });
        }
        this.divergence.update({ vel });
        const pressure = this.poisson.update({ iterations: this.options.iterations_poisson });
        this.pressure.update({ vel, pressure });
      }
    }

    class Output {
      constructor() { this.init(); }
      init() {
        this.simulation = new Simulation();
        this.scene = new THREE.Scene();
        this.camera = new THREE.Camera();
        this.output = new THREE.Mesh(
          new THREE.PlaneGeometry(2, 2),
          new THREE.RawShaderMaterial({
            vertexShader: face_vert, fragmentShader: color_frag,
            transparent: true, depthWrite: false,
            uniforms: {
              velocity: { value: this.simulation.fbos.vel_0.texture },
              boundarySpace: { value: new THREE.Vector2() },
              palette: { value: paletteTex },
              bgColor: { value: bgVec4 }
            }
          })
        );
        this.scene.add(this.output);
      }
      addScene(mesh) { this.scene.add(mesh); }
      resize() { this.simulation.resize(); }
      render() { Common.renderer.setRenderTarget(null); Common.renderer.render(this.scene, this.camera); }
      update() { this.simulation.update(); this.render(); }
    }

    class WebGLManager {
      constructor(props) {
        this.props = props;
        Common.init(props.$wrapper);
        Mouse.init(props.$wrapper);
        Mouse.autoIntensity = props.autoIntensity;
        Mouse.takeoverDuration = props.takeoverDuration;
        this.lastUserInteraction = performance.now();
        Mouse.onInteract = () => {
          this.lastUserInteraction = performance.now();
          if (this.autoDriver) this.autoDriver.forceStop();
        };
        this.autoDriver = new AutoDriver(Mouse, this, {
          enabled: props.autoDemo,
          speed: props.autoSpeed,
          resumeDelay: props.autoResumeDelay,
          rampDuration: props.autoRampDuration
        });
        this.init();
        this._loop = this.loop.bind(this);
        this._resize = this.resize.bind(this);
        window.addEventListener('resize', this._resize);
        this._onVisibility = () => {
          const hidden = document.hidden;
          if (hidden) this.pause();
          else if (isVisibleRef.current) this.start();
        };
        document.addEventListener('visibilitychange', this._onVisibility);
        this.running = false;
      }
      init() { this.props.$wrapper.prepend(Common.renderer.domElement); this.output = new Output(); }
      resize() { Common.resize(); this.output.resize(); }
      render() {
        if (this.autoDriver) this.autoDriver.update();
        Mouse.update(); Common.update(); this.output.update();
      }
      loop() {
        if (!this.running) return;
        this.render();
        rafRef.current = requestAnimationFrame(this._loop);
      }
      start() { if (this.running) return; this.running = true; this._loop(); }
      pause() {
        this.running = false;
        if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null; }
      }
      dispose() {
        try {
          window.removeEventListener('resize', this._resize);
          document.removeEventListener('visibilitychange', this._onVisibility);
          Mouse.dispose();
          if (Common.renderer) {
            const canvas = Common.renderer.domElement;
            if (canvas && canvas.parentNode) canvas.parentNode.removeChild(canvas);
            Common.renderer.dispose();
            Common.renderer.forceContextLoss();
          }
        } catch (e) { void 0; }
      }
    }

    const container = mountRef.current;
    container.style.position = container.style.position || 'relative';
    container.style.overflow = container.style.overflow || 'hidden';

    const webgl = new WebGLManager({
      $wrapper: container,
      autoDemo, autoSpeed, autoIntensity, takeoverDuration, autoResumeDelay, autoRampDuration
    });
    webglRef.current = webgl;

    const applyOptionsFromProps = () => {
      if (!webglRef.current) return;
      const sim = webglRef.current.output?.simulation;
      if (!sim) return;
      const prevRes = sim.options.resolution;
      Object.assign(sim.options, {
        mouse_force: mouseForce, cursor_size: cursorSize,
        isViscous, viscous, iterations_viscous: iterationsViscous,
        iterations_poisson: iterationsPoisson, dt, BFECC, resolution, isBounce
      });
      if (resolution !== prevRes) sim.resize();
    };
    applyOptionsFromProps();

    webgl.start();

    const io = new IntersectionObserver(entries => {
      const entry = entries[0];
      const isVisible = entry.isIntersecting && entry.intersectionRatio > 0;
      isVisibleRef.current = isVisible;
      if (!webglRef.current) return;
      if (isVisible && !document.hidden) webglRef.current.start();
      else webglRef.current.pause();
    }, { threshold: [0, 0.01, 0.1] });
    io.observe(container);
    intersectionObserverRef.current = io;

    const ro = new ResizeObserver(() => {
      if (!webglRef.current) return;
      if (resizeRafRef.current) cancelAnimationFrame(resizeRafRef.current);
      resizeRafRef.current = requestAnimationFrame(() => {
        if (!webglRef.current) return;
        webglRef.current.resize();
      });
    });
    ro.observe(container);
    resizeObserverRef.current = ro;

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (resizeObserverRef.current) { try { resizeObserverRef.current.disconnect(); } catch (e) { void 0; } }
      if (intersectionObserverRef.current) { try { intersectionObserverRef.current.disconnect(); } catch (e) { void 0; } }
      if (webglRef.current) webglRef.current.dispose();
      webglRef.current = null;
    };
  }, [
    BFECC, cursorSize, dt, isBounce, isViscous,
    iterationsPoisson, iterationsViscous, mouseForce, resolution, viscous,
    colors, autoDemo, autoSpeed, autoIntensity,
    takeoverDuration, autoResumeDelay, autoRampDuration
  ]);

  useEffect(() => {
    const webgl = webglRef.current;
    if (!webgl) return;
    const sim = webgl.output?.simulation;
    if (!sim) return;
    const prevRes = sim.options.resolution;
    Object.assign(sim.options, {
      mouse_force: mouseForce, cursor_size: cursorSize,
      isViscous, viscous, iterations_viscous: iterationsViscous,
      iterations_poisson: iterationsPoisson, dt, BFECC, resolution, isBounce
    });
    if (webgl.autoDriver) {
      webgl.autoDriver.enabled = autoDemo;
      webgl.autoDriver.speed = autoSpeed;
      webgl.autoDriver.resumeDelay = autoResumeDelay;
      webgl.autoDriver.rampDurationMs = autoRampDuration * 1000;
      if (webgl.autoDriver.mouse) {
        webgl.autoDriver.mouse.autoIntensity = autoIntensity;
        webgl.autoDriver.mouse.takeoverDuration = takeoverDuration;
      }
    }
    if (resolution !== prevRes) sim.resize();
  }, [
    mouseForce, cursorSize, isViscous, viscous, iterationsViscous, iterationsPoisson,
    dt, BFECC, resolution, isBounce,
    autoDemo, autoSpeed, autoIntensity, takeoverDuration, autoResumeDelay, autoRampDuration
  ]);

  return <div ref={mountRef} className={`fluid-background-container ${className || ''}`} style={style} />;
}
```

---

# APPENDIX B — Project scaffolding (paste verbatim)

## B.1 — `package.json`

```json
{
  "name": "blueai",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^0.487.0",
    "motion": "^12.23.24",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "three": "^0.184.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.6.3",
    "vite": "^5.4.11"
  }
}
```

## B.2 — `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowJs": true,
    "checkJs": false,
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
```

> `allowJs: true` is **required** so `FluidBackground.jsx` (plain JS) can be imported from `Hero.tsx` (TS) under strict mode. `checkJs: false` keeps the .jsx file out of type checking — strict rules like `noUnusedParameters` would otherwise reject the WebGL plumbing.

## B.3 — `vite.config.ts`

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
```

## B.4 — `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Instrument Sans"', "system-ui", "sans-serif"],
        serif: ['"Instrument Serif"', "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
```

## B.5 — `postcss.config.js`

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

## B.6 — `index.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>BlueAI — Build Smarter</title>
    <meta
      name="description"
      content="BlueAI is an AI development company shipping production-ready AI solutions with advanced models and a developer-first platform."
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## B.7 — `public/favicon.svg`

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3054ff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <rect width="24" height="24" rx="5" fill="#000000" stroke="none"/>
  <circle cx="12" cy="12" r="4"/>
  <path d="M12 2v3"/>
  <path d="M12 19v3"/>
  <path d="M2 12h3"/>
  <path d="M19 12h3"/>
  <path d="m4.6 4.6 2.1 2.1"/>
  <path d="m17.3 17.3 2.1 2.1"/>
  <path d="m19.4 4.6-2.1 2.1"/>
  <path d="m6.7 17.3-2.1 2.1"/>
</svg>
```

## B.8 — `src/main.tsx`

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

## B.9 — `src/index.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Instrument+Serif:ital@0;1&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background-color: #000000;
  font-family: 'Instrument Sans', system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

## B.10 — `src/App.tsx`

```tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
    </>
  );
}
```

## B.11 — `src/components/Navbar.tsx`

```tsx
import { ChevronDown } from "lucide-react";

function Sunburst() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v3" />
      <path d="M12 19v3" />
      <path d="M2 12h3" />
      <path d="M19 12h3" />
      <path d="m4.6 4.6 2.1 2.1" />
      <path d="m17.3 17.3 2.1 2.1" />
      <path d="m19.4 4.6-2.1 2.1" />
      <path d="m6.7 17.3-2.1 2.1" />
    </svg>
  );
}

const links = ["Products", "Customer Stories", "Resources", "Pricing"];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-transparent px-6 py-4">
      <div className="flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white">
          <Sunburst />
          <span className="font-sans text-lg font-semibold tracking-tight">
            BlueAI
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((label) => (
            <a
              key={label}
              href="#"
              className="flex items-center gap-1 font-sans text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {label}
              {label === "Products" && <ChevronDown className="h-4 w-4" />}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden font-sans text-sm font-medium text-white/80 transition-colors hover:text-white sm:block"
          >
            Book A Demo
          </a>
          <a
            href="#"
            className="rounded-full bg-white px-5 py-2.5 font-sans text-sm font-semibold text-black transition-transform hover:scale-105"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
```

## B.12 — `src/components/Hero.tsx`

```tsx
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import FluidBackground from "./FluidBackground";

const FLUID_COLORS = ["#2a3fff", "#4863ff", "#6f86d6", "#9fb0dd"];

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#000000] text-white">
      {/* Interactive fluid background */}
      <div className="absolute inset-0 z-0">
        <FluidBackground
          colors={FLUID_COLORS}
          mouseForce={42}
          cursorSize={170}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.8}
          autoIntensity={3.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Readability overlay */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.42),rgba(0,0,0,0.18)_55%,rgba(0,0,0,0.58))]" />

      {/* Decorative gradients */}
      <div className="pointer-events-none absolute top-[-20%] left-[20%] z-[1] h-[600px] w-[600px] rounded-full bg-blue-900/20 blur-[120px] mix-blend-screen" />
      <div className="pointer-events-none absolute bottom-[-10%] right-[20%] z-[1] h-[500px] w-[500px] rounded-full bg-indigo-900/20 blur-[120px] mix-blend-screen" />

      {/* Content */}
      <div className="pointer-events-none relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        <div className="mt-20 flex flex-col items-center space-y-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl leading-[1.1] text-white sm:text-5xl lg:text-[48px]"
          >
            Intelligence at the speed of thought
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-gradient-to-b from-white via-white to-[#b4c0ff] bg-clip-text font-sans text-6xl font-semibold leading-[0.9] tracking-tighter text-transparent sm:text-8xl lg:text-[136px]"
          >
            Build Smarter
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-xl font-sans text-lg leading-[1.65] text-white opacity-70 sm:text-[20px]"
          >
            Ship production-ready AI solutions in record time with our advanced
            models and developer-first platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="pointer-events-auto flex flex-col items-center gap-6 sm:flex-row"
          >
            <a
              href="#"
              className="group flex items-center rounded-full bg-white py-2 pl-6 pr-2 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              <span className="font-sans text-lg font-medium text-[#0a0400]">
                Start Building Free
              </span>
              <span className="ml-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#3054ff] transition-colors group-hover:bg-[#2040e0]">
                <ArrowRight className="h-5 w-5 text-white" />
              </span>
            </a>

            <a
              href="#"
              className="group flex items-center gap-2 rounded-lg px-4 py-2 font-sans text-white/70 backdrop-blur-sm transition-colors hover:bg-white/5 hover:text-white"
            >
              See Examples
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

---

# WORKED EXAMPLE — 30-SECOND CUSTOMIZATION

To rebrand this hero for a different AI company, edit only:

- `BRAND_NAME` → `BlueAI` → your brand (Layer 1 + Navbar wordmark + `<title>` + meta description)
- `PRE_HEADLINE` → `Intelligence at the speed of thought`
- `HEADLINE` → `Build Smarter`
- `SUBHEADLINE` → `Ship production-ready AI solutions ...`
- `FLUID_COLORS` → palette of 3–4 hex stops, dim → bright
- `--accent` → primary CTA arrow color (the only chromatic accent in the page)
- `--headline-stop` → bottom stop of the headline gradient

Everything else (Layers 4, 6, 8, 9, 11, Appendix A, B) stays.
