# Nikki — Cinematic Hero Landing · Fivefold Prompt (v1)

> Paste everything below LAYER 0 into your AI website builder (Claude Code, Cursor, v0, Lovable, Bolt, Windsurf). Reproduce exactly — see Layer 11.

---

## LAYER 0 — META

```yaml
asset_id: nikki-cinematic-hero-01
category: hero-section
aesthetic: dark-cinematic
industry: creative-studio
tone: bold
preview_video: https://cdn.5sdesign.art/projects/nikki.mp4
license: free
version: 1.0
last_updated: 2026-07-17
```

---

## LAYER 1 — OPENING DECLARATION

Build a **single-page hero landing** for **Nikki** — a creative digital studio.

Use the following **pinned** tech stack (do not substitute):

- **React 19 + Vite 6** — plain JavaScript with `.jsx` files. No TypeScript.
- **Tailwind CSS v4** via `@tailwindcss/vite` — CSS-first config with `@theme` in `src/index.css`. There is no `tailwind.config.js`.
- **GSAP 3 + @gsap/react** (`useGSAP`) — the entry timeline is the only scripted animation.
- **No icon library.** All icons are custom inline SVG components defined in `App.jsx` — the exact paths are in Layer 10. Do not import lucide-react or any other icon package.

The aesthetic is **dark cinematic: pure-black canvas, a looping background video with a green neon glow, ultra-wide letter-spaced display headline, thin outlined pill buttons with white circular arrow chips**. `#000000` is the global background. Default text color is `#FFFFFF`. **Do not use purple, indigo, blue, or any accent color anywhere — the only color comes from the background video itself.**

This is a **hero-only page**: one full-viewport section, no scrolling content below it. The whole page is a single component in `src/App.jsx`.

Page `<title>`: `Nikki — Where Innovation Knows No Bounds`
Meta description: `Nikki — a creative digital studio. Where innovation knows no bounds.`

---

## LAYER 2 — FONTS

The entire site uses **one font family: Urbanist** — every element, no exceptions.

Load via Google Fonts in `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
```

Register it as the sans family in `src/index.css` (Tailwind v4, CSS-first):

```css
@import "tailwindcss";

@theme {
  --font-sans: "Urbanist", ui-sans-serif, system-ui, sans-serif;
}

html,
body {
  height: 100%;
  background: #000;
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

---

## LAYER 3 — COLOR SYSTEM

Single dark theme. There are **no CSS color variables** — every color is a Tailwind utility applied in place:

- Canvas: `bg-black` (`#000000`), base text `text-white`.
- White-alpha ladder (use these exact steps, never round them):
  - `text-white/90` — nav links at rest
  - `text-white/95` — Connect link at rest
  - `text-white/85` — social icons
  - `border-white/60` — pill button outlines (hover → `border-white`)
  - `bg-white/40` — the vertical divider hairline
- Arrow chips: `bg-white` with `text-black` icon.
- Text selection (global CSS): `background: rgba(84, 240, 156, 0.35); color: #fff;` — the one green echo of the video glow.

No brand accent color exists in CSS. The green glow and red light streak come exclusively from the background video.

---

## LAYER 4 — CUSTOM CSS UTILITIES

Paste verbatim into `src/index.css` (after the Layer 2 block) — do not paraphrase or "improve":

```css
::selection {
  background: rgba(84, 240, 156, 0.35);
  color: #fff;
}

/* Scroll-mouse dot */
@keyframes mouse-dot {
  0%   { transform: translateY(0);    opacity: 1; }
  70%  { transform: translateY(10px); opacity: 0.15; }
  100% { transform: translateY(0);    opacity: 1; }
}

.mouse-dot {
  animation: mouse-dot 1.8s cubic-bezier(0.45, 0, 0.55, 1) infinite;
}

@media (prefers-reduced-motion: reduce) {
  .mouse-dot { animation: none; }
}
```

---

## LAYER 5 — BACKGROUND ASSET

**Looping background video.** Download it from the Fivefold CDN and save it into the project at `public/video/nikki.mp4` — serve it locally, do not hotlink:

```
https://cdn.5sdesign.art/projects/nikki/nikki.mp4
```

(H.264, 1916×1080, 24fps, 5.04s loop, silent, ~5.2 MB.)

```jsx
<video
  className="absolute inset-0 h-full w-full object-cover"
  src="/video/nikki.mp4"
  autoPlay
  muted
  loop
  playsInline
/>
```

**Legibility overlays** — stacked above the video, below content, all `pointer-events-none absolute`:

1. Left text-side scrim: `inset-0 bg-gradient-to-r from-black/85 via-black/25 to-transparent`
2. Bottom fade: `inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent`
3. Top fade: `inset-x-0 top-0 h-28 bg-gradient-to-b from-black/70 to-transparent`

z-stacking: video sits at the stack base — overlays above it — header/main/bottom bar all `z-10`.

**Fallback (only if the video cannot be downloaded in your environment):** keep the layout identical and render the canvas as
`background: radial-gradient(ellipse 55% 70% at 72% 45%, rgba(46, 204, 113, 0.25), transparent 60%), #000;`
Do not swap in any other stock video or external URL.

---

## LAYER 6 — SHARED COMPONENTS

### Entry timeline (the only animation system)

One `useGSAP` timeline scoped to the root div, `defaults: { ease: 'power3.out' }`. Elements are tagged with data attributes and animated with `.from()` tweens chained on **relative offsets**:

```js
const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
tl.from('[data-nav]',     { y: -24, autoAlpha: 0, duration: 0.9 })
  .from('[data-letter]',  { y: 60,  autoAlpha: 0, duration: 1.1, stagger: 0.07 }, '-=0.45')
  .from('[data-tagline]', { y: 24,  autoAlpha: 0, duration: 0.8 }, '-=0.6')
  .from('[data-cta]',     { y: 20,  autoAlpha: 0, duration: 0.8 }, '-=0.5')
  .from('[data-bottom]',  { autoAlpha: 0, duration: 0.9 }, '-=0.4')
```

Register the hook once: `gsap.registerPlugin(useGSAP)`.

**Never hide content behind scroll-triggered reveals.** Everything animates in on load (autoAlpha, plays once) and remains permanently visible. No ScrollTrigger anywhere.

---

## LAYER 7 — SECTIONS

### SECTION 1 — HERO (the entire page)

**Block 1 · Container**
- Wrapper: `<div className="relative min-h-svh overflow-hidden bg-black text-white">` (note `min-h-svh`, not `min-h-screen`).
- Horizontal padding rhythm used by every row: `px-6 sm:px-10 lg:px-14`

**Block 2 · Background**
- Video + 3 gradient overlays from Layer 5.

**Block 3 · Layout primitive**
- Header (`data-nav`): `relative z-10 flex items-center justify-between px-6 pt-6 sm:px-10 lg:px-14`
- Hero body: `<main className="relative z-10 flex min-h-[calc(100svh-88px)] flex-col justify-center px-6 pb-24 sm:px-10 lg:px-14">` — content vertically centered, left-aligned
- Bottom bar (`data-bottom`): `absolute inset-x-0 bottom-0 z-10 flex items-end justify-between px-6 pb-7 sm:px-10 lg:px-14`

**Block 4 · Elements** (in order)

> **Logo (header left)**
> - `<a href="#" aria-label="Nikki home" className="text-white">` containing the LogoMark SVG (Layer 10) at `h-10 w-10 sm:h-11 sm:w-11`.

> **Nav links (header center)**
> - `<nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex">`
> - Each link: `text-[13px] font-semibold tracking-[0.08em] text-white/90 transition-colors duration-300 hover:text-white`
> - Text: **Home · About · Services · Contact**
> - Mobile (`<768px`): links are simply hidden — no hamburger menu (hero-only page, intentional).

> **"Start A Project" button (header right)**
> - Classes: `group flex items-center gap-3 rounded-full border border-white/60 py-2 pl-5 pr-2 transition-colors duration-300 hover:border-white`
> - Label: `text-[13px] font-semibold tracking-[0.04em]` — text: **"Start A Project"**
> - Arrow chip: `flex h-7 w-7 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:translate-x-0.5` containing the ArrowRight SVG at `h-3.5 w-3.5`.

> **Headline "NIKKI"**
> - `<h1>` with `flex select-none items-baseline font-medium leading-none`, `aria-label="Nikki"`
> - Inline style: `fontSize: 'clamp(4rem, 13.5vw, 11.5rem)'`
> - Render as five separate `<span data-letter className="inline-block">` letters — **N, I, K, K, I** — each span (except the last) with inline `marginRight: '0.42em'`. This produces the ultra-wide spaced look; do NOT use letter-spacing on the h1.

> **Tagline**
> - `<p data-tagline>` with `mt-2 text-[15px] font-bold tracking-[0.06em] text-white sm:text-lg`
> - Text: **"Where Innovation Knows No Bounds"**

> **CTA row** (`data-cta`, `mt-8 flex items-center gap-6`)
> 1. **Discover button**: `group flex items-center gap-4 rounded-full border border-white/60 py-2.5 pl-6 pr-2.5 transition-colors duration-300 hover:border-white` · label `text-[14px] font-semibold tracking-[0.04em]` — text **"Discover"** · arrow chip `flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:translate-x-0.5` with ArrowRight at `h-3.5 w-3.5`
> 2. **Divider**: `<span className="h-8 w-px bg-white/40" />`
> 3. **Connect link**: `group flex items-center gap-3 text-white/95 transition-colors duration-300 hover:text-white` — LogoMark SVG at `h-8 w-8` + label `text-[14px] font-bold tracking-[0.04em]` — text **"Connect"**

> **Bottom bar**
> - Socials (left): `flex items-center gap-6 text-white/85`; three `<a>` (aria-labels: "Facebook", "Instagram", "X") each `transition-colors duration-300 hover:text-white`, icons at `h-4 w-4`
> - Mouse indicator (center): `absolute left-1/2 -translate-x-1/2 text-white/90`, MouseIcon at `h-10 w-6` (dot carries the `.mouse-dot` class)
> - Right spacer: `<div className="w-16" />` to keep socials left / mouse truly centered.

**Block 5 · Animation**
The Layer 6 timeline covers every element — header row, five headline letters (stagger 0.07), tagline, CTA row, bottom bar. Sequencing comes from the relative offsets in the timeline, not per-element delays.

**Block 6 · Responsive notes**
- Mobile (`<640px`): padding `px-6`; headline scales via clamp; nav links hidden; everything else keeps the same structure.
- Tablet (`md:`): center nav appears.
- Desktop (`lg:`): padding `px-14`.
- The page never scrolls horizontally; the hero fills exactly one viewport.

**Block 7 · Copy** (verbatim, in order of appearance)

```
Home
About
Services
Contact
Start A Project
NIKKI
Where Innovation Knows No Bounds
Discover
Connect
```

---

## LAYER 8 — ANIMATION STANDARDS

```js
// Ease: power3.out on every tween (timeline default).
// All animation is load-time only, driven by the single GSAP timeline in Layer 6.
// .from() + autoAlpha — elements are never left stuck hidden.
// No ScrollTrigger, no whileInView, no scroll-linked reveals.
// The only looping animation is the CSS .mouse-dot keyframe (respects prefers-reduced-motion).
```

---

## LAYER 9 — RESPONSIVE STANDARDS

- **Mobile-first.** Base classes target mobile; scale with `sm: md: lg:`.
- Headline: `clamp(4rem, 13.5vw, 11.5rem)` — always clamp, never fixed.
- Container padding: `px-6 sm:px-10 lg:px-14`.
- Full-viewport heights use `svh` units (`min-h-svh`, `min-h-[calc(100svh-88px)]`) — never `vh`.
- Background video: `object-cover`, full viewport, all breakpoints.

---

## LAYER 10 — ICON SET (inline SVGs — use these exact paths)

All icons are React components in `App.jsx`, inherit color via `currentColor`, and take a `className` prop with the default sizes shown. Do not substitute from any icon library.

**LogoMark** (emblem — circle + folded triangle, default `h-9 w-9`):

```jsx
<svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
  <circle cx="24" cy="24" r="22.5" stroke="currentColor" strokeWidth="1.6" />
  <path d="M24 11 L36.5 33.5 H11.5 Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  <path d="M24 19 L30 30 H18 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  <path d="M24 11 L24 19" stroke="currentColor" strokeWidth="1.5" />
  <path d="M36.5 33.5 L30 30" stroke="currentColor" strokeWidth="1.5" />
  <path d="M11.5 33.5 L18 30" stroke="currentColor" strokeWidth="1.5" />
</svg>
```

**ArrowRight** (default `h-3.5 w-3.5`):

```jsx
<svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
  <path d="M2 8h11M9.5 4.5 13 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
</svg>
```

**Facebook** (default `h-4 w-4`):

```jsx
<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  <path d="M13.5 21v-7.5h2.52l.48-3h-3V8.6c0-.87.24-1.6 1.63-1.6H16.6V4.14A22 22 0 0 0 14.37 4c-2.4 0-4.04 1.47-4.04 4.16v2.34H7.8v3h2.53V21h3.17Z" />
</svg>
```

**Instagram** (default `h-4 w-4`):

```jsx
<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
  <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" stroke="currentColor" strokeWidth="1.6" />
  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
  <circle cx="17" cy="7" r="1.1" fill="currentColor" />
</svg>
```

**X** (default `h-4 w-4`):

```jsx
<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  <path d="M17.9 3H21l-6.78 7.74L22.2 21h-6.25l-4.9-6.4L5.45 21H2.34l7.25-8.28L2 3h6.4l4.43 5.85L17.9 3Zm-1.1 16.2h1.73L7.55 4.7H5.7L16.8 19.2Z" />
</svg>
```

**Mouse** (scroll indicator — dot carries the `.mouse-dot` class, default `h-10 w-6`):

```jsx
<svg viewBox="0 0 26 42" fill="none" aria-hidden="true">
  <rect x="1.5" y="1.5" width="23" height="39" rx="11.5" stroke="currentColor" strokeWidth="2" />
  <circle className="mouse-dot" cx="13" cy="13" r="3" fill="currentColor" />
</svg>
```

---

## LAYER 11 — REPRODUCE-EXACTLY CLAUSE

Reproduce exactly. Do not:

- Substitute fonts ("similar to Urbanist" is not Urbanist).
- Round color or opacity values (`white/60` is not `white/50`).
- Shorten or rephrase copy ("Where Innovation Knows No Bounds" — exact casing, no period).
- Merge the headline into one string with letter-spacing — it is five spans with `0.42em` right margins.
- Swap the GSAP timeline for CSS animations, framer-motion, or motion/react — the entry sequence is one `useGSAP` timeline with relative offsets.
- Change durations, offsets, the 0.07 stagger, or the `power3.out` ease.
- Use `vh` where the build uses `svh`.
- Add TypeScript — the project is plain JSX by design.
- Use icons outside Layer 10.
- Replace the CDN video with a different asset or hotlink it (download to `public/video/nikki.mp4`; use the CSS fallback in Layer 5 only if the download is impossible).
- Add extra sections, scroll content, or a mobile hamburger menu.

If a constraint conflicts with a framework limitation, clamp to the nearest valid value and note the substitution in a code comment — do not silently change.

---

*Nikki hero · a Fivefold asset · v1.0*
