# MFC — Mech Fighting Championship Hero · Fivefold Prompt

```yaml
asset_id: mfc-robot-boxing-hero-01
category: hero
aesthetic: light-editorial · clean · video-backed
industry: gaming / esports
tone: bold · confident · futuristic
preview_video: https://cdn.5sdesign.art/projects/mfc.mp4
license: pro
version: 1.0
last_updated: 2026-06-20
notes: Single-screen hero (no scroll) over a fullscreen looping video. Soft off-white
  stage, two floating light-grey navbar pills, and a vertically-centered, left-aligned
  hero block in bright white type with one blue accent. The whole page is one file —
  src/App.tsx — no other sections, no routing, no backend.
```

---

## LAYER 1 — OPENING DECLARATION

Build a **single-screen hero page** (one viewport, no scroll) for **MFC — Mech Fighting Championship**, a futuristic robot-boxing game where players build, train, and fight next-generation combat robots in the ring.

Use the following **pinned** tech stack (do not substitute):

- **React 18 + Vite 5** — **TypeScript** (`.tsx`).
- **Tailwind CSS 3** with the **default** config (no custom theme). Arbitrary-value utilities are used freely: `bg-[#f0f0ee]`, `text-[14px]`, `[text-shadow:...]`. Not Tailwind v4, not a CSS-only `@theme` block.
- **`lucide-react`** is the only icon dependency installed — but the hero renders **literal `→` glyphs**, not icon components. Keep it that way; do not import an icon.

The aesthetic is a **clean, light editorial hero over a fullscreen looping background video**: a soft off-white stage (`#f0f0ee`), two floating light-grey pills in the navbar (`#EDEDED`), and a **vertically-centered, left-aligned** hero block — bright white headline, a glowing blue badge link, and one solid blue call-to-action button. Every foreground element sits above the video with soft drop-shadows so the type stays legible on any frame.

The **entire page lives in a single file: `src/App.tsx`**. Build only this one hero — no other sections, no routing, no backend, no analytics.

**Do not:** add a second accent color, a dark hero, gradients on the text, card borders/elevation, entrance/scroll animations, a font loader, or any animation/UI/3D library. Blue is the only chromatic accent; everything else is off-white, grey, and white.

---

## LAYER 2 — FONTS

**Load no custom or web font.** Use Tailwind's **default `sans-serif` system stack** as-is (`system-ui`, `-apple-system`, `Segoe UI`, `Roboto`, …). No Google Fonts `@import`, no `<link>` in `index.html`, no `fontFamily` extension in the Tailwind config. All type is sized with utility classes and the exact pixel/rem values in Layer 7.

`index.html` `<head>`: `<meta charset="UTF-8" />`, `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />`, `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`, `<title>MFC — Mech Fighting Championship</title>`, and the meta description:

```html
<meta
  name="description"
  content="Build, train, and dominate the ring with next-gen fighting robots. MFC is the future of robot boxing."
/>
```

---

## LAYER 3 — DESIGN TOKENS (`tailwind.config.js`)

The build ships the **default** Tailwind 3 config — no theme extension. Colors come straight from Tailwind's palette (`blue-500/400/300/200`, `gray-700/900`, `white`) plus three exact hex values applied inline / via arbitrary utilities.

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**Exact color values (the only non-palette colors):**

| Token | Value | Where |
|---|---|---|
| Page background | `#f0f0ee` | root wrapper (`bg-[#f0f0ee]`) |
| Pill background | `#EDEDED` | both navbar pills (inline `backgroundColor`) |
| Logo fill | `rgb(84, 84, 84)` | fist SVG |
| Nav link text | `text-gray-700` → hover `text-gray-900` | navbar links |
| Headline | `text-white` | `<h1>` |
| Subtext | `text-white/85` | paragraph |
| Badge | `text-blue-300` → hover `text-blue-200` | badge link |
| CTA fill | `bg-blue-500` → hover `bg-blue-400` | CTA button |
| CTA text | `text-white` | CTA button |
| CTA glow | `shadow-lg shadow-blue-500/40` | CTA button |

Do not introduce any other color.

---

## LAYER 4 — CUSTOM CSS UTILITIES (`src/index.css`)

There is no design-DNA utility layer here — the hero is pure Tailwind. `src/index.css` carries only the Tailwind directives and a full-height reset. Paste **verbatim**:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html,
body,
#root {
  margin: 0;
  padding: 0;
  height: 100%;
}
```

The two text drop-shadows used for legibility over the video are applied as Tailwind arbitrary utilities directly on the elements (Layer 7), not as CSS classes here.

---

## LAYER 5 — BACKGROUND VIDEO

A fullscreen, autoplaying, muted, looping, inline background video is the **only** background — no overlay tint. Legibility comes entirely from the per-element text drop-shadows (Layer 8).

The video is hosted on the Fivefold R2 CDN. Reference it directly — do not invent a URL, do not use a local path:

```tsx
<video
  className="absolute inset-0 w-full h-full object-cover"
  autoPlay
  muted
  loop
  playsInline
  src="https://cdn.5sdesign.art/projects/mfc/background.mp4"
/>
```

The video sits at the back of the stacking order (it is the first child of the root wrapper); the foreground wrapper is lifted with `relative z-10`.

---

## LAYER 6 — STRUCTURE & LAYERING

`src/App.tsx` is the whole page: a `Logo` helper component, a `NAV_LINKS` array, and the default-exported `App`.

- **Root wrapper:** `relative min-h-screen overflow-hidden bg-[#f0f0ee]`
- **Background video:** `absolute inset-0 w-full h-full object-cover` (back of the stack)
- **Foreground wrapper:** `relative z-10 flex flex-col min-h-screen` — holds the navbar at the top and the hero block, which takes the remaining height (`flex-1`) and is vertically centered.

```tsx
const NAV_LINKS = ['Story', 'Fighters', 'Arena', 'Support']

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f0f0ee]">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src="https://cdn.5sdesign.art/projects/mfc/background.mp4"
      />

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navbar + Hero — see Layer 7 */}
      </div>
    </div>
  )
}
```

---

## LAYER 7 — SECTION-BY-SECTION SPEC

### LOGO — inline fist SVG (`Logo` component, verbatim)

A front-facing fist (punch) mark built from rounded rectangles — four arched knuckles, the fist body, and a thumb across the front. Render it exactly:

```tsx
function Logo() {
  // Front-facing fist (punch) — fits the MFC robot-boxing brand
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="rgb(84, 84, 84)">
      {/* four knuckles, gently arched */}
      <rect x="4.5" y="5" width="3.2" height="7" rx="1.6" />
      <rect x="8.2" y="4" width="3.2" height="8" rx="1.6" />
      <rect x="11.9" y="4.3" width="3.2" height="7.7" rx="1.6" />
      <rect x="15.6" y="5.2" width="3.2" height="6.8" rx="1.6" />
      {/* fist body */}
      <rect x="4" y="10" width="16" height="10" rx="3.5" />
      {/* thumb across the front */}
      <rect x="2.6" y="13" width="6" height="3.4" rx="1.7" />
    </svg>
  )
}
```

### SECTION 1 — Navbar (centered, two separate pills)

A centered row holding a circular logo pill and a rounded links pill, both `#EDEDED`, floating over the video. Not sticky.

- `<nav>`: `flex items-center justify-center pt-4 sm:pt-6 px-4 sm:px-8 gap-2 sm:gap-3`
- **Left — circular logo pill:** `flex items-center justify-center rounded-full w-10 h-10 sm:w-11 sm:h-11 shrink-0`, inline `style={{ backgroundColor: '#EDEDED' }}`, containing `<Logo />`.
- **Right — links pill:** `flex items-center gap-4 sm:gap-10 rounded-xl px-4 sm:px-8 py-2.5 sm:py-3`, inline `style={{ backgroundColor: '#EDEDED' }}`.
- **Links** (verbatim, in order): `Story`, `Fighters`, `Arena`, `Support` — mapped from `NAV_LINKS`.
- **Each link anchor:** `href="#"`, classes `text-[12px] sm:text-[14px] font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200`.

### SECTION 2 — Hero block (vertically centered, left-aligned)

Fills the height below the navbar and centers its content vertically; the copy column is left-aligned and capped at `max-w-2xl`.

- **Outer wrapper:** `flex-1 flex items-center px-6 sm:px-12 md:px-20 lg:px-28`
- **Inner column:** `max-w-2xl`

Four stacked elements, in this exact order:

1. **Badge link** — `href="#"`, classes `inline-flex items-center gap-2 text-[14px] sm:text-[15px] font-semibold text-blue-300 hover:text-blue-200 transition-colors mb-5 group [text-shadow:0_1px_10px_rgba(0,0,0,0.55)]`.
   - Text: `Now streaming the 2099 World Final`
   - Trailing arrow span: `<span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">→</span>`

2. **Headline `<h1>`** — classes `text-4xl sm:text-5xl lg:text-6xl leading-[1.08] font-semibold text-white tracking-tight mb-5 [text-shadow:0_2px_24px_rgba(0,0,0,0.6)]`.
   - Text: `Build, train, and dominate the ring with next-gen fighting robots.`

3. **Subtext `<p>`** — classes `text-lg sm:text-xl text-white/85 font-normal mb-8 [text-shadow:0_1px_12px_rgba(0,0,0,0.55)]`.
   - Text: `Step into the arena now.`

4. **CTA anchor** — `href="#"`, classes `inline-flex items-center gap-2 text-[15px] sm:text-base font-semibold text-white bg-blue-500 rounded-full px-7 py-3.5 hover:bg-blue-400 transition-all duration-200 group shadow-lg shadow-blue-500/40`.
   - Text: `Play the free beta`
   - Trailing arrow span: `<span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>`

---

## LAYER 8 — ANIMATION STANDARDS

The page renders static and always visible. There is **no** entrance animation, scroll-reveal, parallax, or counter. Motion is limited to hover micro-interactions:

- Both arrow spans translate right by `0.5` on group hover (`group-hover:translate-x-0.5`, `duration-200`).
- CTA fill animates `blue-500 → blue-400` on hover (`transition-all duration-200`), carrying a soft blue glow (`shadow-lg shadow-blue-500/40`).
- Nav links shift `text-gray-700 → text-gray-900` on hover (`transition-colors duration-200`).
- Badge shifts `text-blue-300 → text-blue-200` on hover.
- All foreground text carries a soft drop-shadow (the `[text-shadow:…]` arbitrary utilities) for legibility over the video.

---

## LAYER 9 — RESPONSIVE STANDARDS

- The page is exactly **one viewport tall** — `min-h-screen` column; the hero block takes the remaining height via `flex-1` and stays vertically centered (`items-center`) at every breakpoint.
- Headline scales `text-4xl → sm:text-5xl → lg:text-6xl`. Subtext scales `text-lg → sm:text-xl`.
- Hero container side padding scales `px-6 sm:px-12 md:px-20 lg:px-28`; copy column caps at `max-w-2xl`.
- Navbar scales: pad `pt-4 sm:pt-6 px-4 sm:px-8`, gap `gap-2 sm:gap-3`; links pill `gap-4 sm:gap-10 px-4 sm:px-8 py-2.5 sm:py-3`; logo pill `w-10 h-10 sm:w-11 sm:h-11`; link text `text-[12px] sm:text-[14px]`.
- The background video fills the stage at all sizes via `object-cover`.

---

## LAYER 10 — ICON SET

No icon components are used. `lucide-react` is installed as the only icon dependency, but the hero renders **literal `→` glyphs** in plain `<span>`s (badge and CTA). Do not import or render any lucide icon.

---

## LAYER 11 — REPRODUCE-EXACTLY CLAUSE

Reproduce exactly. Do not:
- Add any section, nav item, or element not listed above — this is one hero in one file.
- Load a font; use Tailwind's default system sans stack as-is.
- Round or change any color (`#f0f0ee`, `#EDEDED`, `rgb(84, 84, 84)`, and `blue-500/400/300/200` are literal).
- Shorten or reword any copy string — the headline is `Build, train, and dominate the ring with next-gen fighting robots.`, verbatim.
- Replace the literal `→` arrows with icon components.
- Swap the background video for a local path or a placeholder — it is `https://cdn.5sdesign.art/projects/mfc/background.mp4`.
- Add a second accent color, a text gradient, an overlay tint, card borders, or any entrance/scroll animation beyond the hover micro-interactions in Layer 8.
- Drop `StrictMode` — `main.tsx` mounts `<App />` inside `<StrictMode>` (the hero has no animation loop, so the dev double-invoke is harmless).

If a constraint conflicts with a framework limit, clamp to the nearest valid value and leave a comment — do not silently change.

---

## FILE TREE (exact output expected)

```
MFC/
├── index.html              # system fonts only; title "MFC — Mech Fighting Championship"
├── tailwind.config.js      # default config, theme.extend = {}
├── postcss.config.js       # tailwindcss + autoprefixer
├── vite.config.ts          # @vitejs/plugin-react
├── tsconfig.json           # Vite React-TS defaults (strict)
├── tsconfig.node.json
├── public/
│   └── favicon.svg         # #EDEDED rounded square + the fist mark in rgb(84,84,84)
└── src/
    ├── main.tsx            # createRoot → <StrictMode><App /></StrictMode>
    ├── index.css           # Layer 4 verbatim (Tailwind directives + height reset)
    ├── vite-env.d.ts       # /// <reference types="vite/client" />
    └── App.tsx             # Logo + NAV_LINKS + App — the entire hero (Layer 12)
```

`src/main.tsx`:

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

`public/favicon.svg`:

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <rect width="24" height="24" rx="5" fill="#EDEDED" />
  <g fill="rgb(84, 84, 84)">
    <rect x="4.5" y="5" width="3.2" height="7" rx="1.6" />
    <rect x="8.2" y="4" width="3.2" height="8" rx="1.6" />
    <rect x="11.9" y="4.3" width="3.2" height="7.7" rx="1.6" />
    <rect x="15.6" y="5.2" width="3.2" height="6.8" rx="1.6" />
    <rect x="4" y="10" width="16" height="10" rx="3.5" />
    <rect x="2.6" y="13" width="6" height="3.4" rx="1.7" />
  </g>
</svg>
```

---

## LAYER 12 — COMPLETE REFERENCE `src/App.tsx` (reproduce byte-for-byte)

```tsx
function Logo() {
  // Front-facing fist (punch) — fits the MFC robot-boxing brand
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="rgb(84, 84, 84)">
      {/* four knuckles, gently arched */}
      <rect x="4.5" y="5" width="3.2" height="7" rx="1.6" />
      <rect x="8.2" y="4" width="3.2" height="8" rx="1.6" />
      <rect x="11.9" y="4.3" width="3.2" height="7.7" rx="1.6" />
      <rect x="15.6" y="5.2" width="3.2" height="6.8" rx="1.6" />
      {/* fist body */}
      <rect x="4" y="10" width="16" height="10" rx="3.5" />
      {/* thumb across the front */}
      <rect x="2.6" y="13" width="6" height="3.4" rx="1.7" />
    </svg>
  )
}

const NAV_LINKS = ['Story', 'Fighters', 'Arena', 'Support']

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f0f0ee]">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src="https://cdn.5sdesign.art/projects/mfc/background.mp4"
      />

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navbar */}
        <nav className="flex items-center justify-center pt-4 sm:pt-6 px-4 sm:px-8 gap-2 sm:gap-3">
          <div
            className="flex items-center justify-center rounded-full w-10 h-10 sm:w-11 sm:h-11 shrink-0"
            style={{ backgroundColor: '#EDEDED' }}
          >
            <Logo />
          </div>
          <div
            className="flex items-center gap-4 sm:gap-10 rounded-xl px-4 sm:px-8 py-2.5 sm:py-3"
            style={{ backgroundColor: '#EDEDED' }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[12px] sm:text-[14px] font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>
        </nav>

        {/* Hero content */}
        <div className="flex-1 flex items-center px-6 sm:px-12 md:px-20 lg:px-28">
          <div className="max-w-2xl">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[14px] sm:text-[15px] font-semibold text-blue-300 hover:text-blue-200 transition-colors mb-5 group [text-shadow:0_1px_10px_rgba(0,0,0,0.55)]"
            >
              Now streaming the 2099 World Final
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </a>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.08] font-semibold text-white tracking-tight mb-5 [text-shadow:0_2px_24px_rgba(0,0,0,0.6)]">
              Build, train, and dominate the ring with next-gen fighting robots.
            </h1>

            <p className="text-lg sm:text-xl text-white/85 font-normal mb-8 [text-shadow:0_1px_12px_rgba(0,0,0,0.55)]">
              Step into the arena now.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-[15px] sm:text-base font-semibold text-white bg-blue-500 rounded-full px-7 py-3.5 hover:bg-blue-400 transition-all duration-200 group shadow-lg shadow-blue-500/40"
            >
              Play the free beta
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
```

---

## DELIVERY CHECKLIST

- [ ] `npm create vite@latest . --template react-ts` (React 18 + TypeScript + Vite 5).
- [ ] `npm i lucide-react` and `npm i -D tailwindcss@3 postcss autoprefixer`; `npx tailwindcss init -p`.
- [ ] `tailwind.config.js` left at default (`theme.extend = {}`), `content` globs `index.html` + `src/**/*.{js,ts,jsx,tsx}`.
- [ ] `index.css` pasted verbatim from Layer 4 (Tailwind directives + full-height reset).
- [ ] `index.html` loads **no** web font; title `MFC — Mech Fighting Championship`, favicon `/favicon.svg`.
- [ ] `favicon.svg` created in `public/` exactly as the file tree (the fist mark on an `#EDEDED` rounded square).
- [ ] `main.tsx` mounts `<App />` inside `<StrictMode>`.
- [ ] `App.tsx` is the whole page: `Logo` + `NAV_LINKS` + `App`, reproduced byte-for-byte from Layer 12.
- [ ] Background video references `https://cdn.5sdesign.art/projects/mfc/background.mp4` (autoplay, muted, loop, playsInline, object-cover).
- [ ] Navbar: two `#EDEDED` pills (circular logo + rounded links `Story / Fighters / Arena / Support`).
- [ ] Hero: blue badge → white `<h1>` → `text-white/85` subtext → `bg-blue-500` CTA, all left-aligned and vertically centered.
- [ ] Blue is the only accent; literal `→` glyphs (no icon imports); one screen, no scroll, no entrance animation.
```
