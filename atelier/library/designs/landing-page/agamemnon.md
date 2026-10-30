---
version: "1"
name: "Design System Inspired by Agamemnon"
description: "Agamemnon is a single-page cinematic scroll-story: a full-bleed film of a lone armored king that scrubs frame-by-frame as you scroll, with five acts of an epic fading in and out over it. Dark and classical — warm near-black #0b0908, ornate cream Cinzel Decorative (thin, weight 400) with gold #c9a24b accents, Cormorant italic accent words, film grain and warm veils. The scroll-scrub engine is plain React (no GSAP): all-intra video buffered as a Blob, currentTime lerped to scroll progress, fixed act overlays with [a,b] fade windows."
colors:
  ink: "#0b0908 — warm near-black page base behind the film"
  cream: "#ece2c8 — all text"
  gold: "#c9a24b — eyebrows, tagline, stat numbers, progress rail"
  line: "rgba(201,162,75,0.32) — reserved hairline token"
  none: "no purple/indigo/blue/teal/neon; all other color is the video"
typography:
  display: { fontFamily: "'Cinzel Decorative' via Google Fonts, @theme --font-display", weights: "400 (thin) only — 400/700/900 ship but the design uses 400", role: "wordmark, hero title, act headings — inscriptional caps, tracking-epic 0.24em on labels" }
  body: { fontFamily: "'Cormorant' via Google Fonts, @theme --font-body", weights: "400-500 + italic", role: "body copy + the italic accent word of every act heading" }
spacing:
  edge: "px clamp(1.5rem,4vw,4rem) nav · act insets left-6 md:left-16 lg:left-24 (mirror for right-aligned acts)"
  scroller: "a 720vh tall empty div is the scroll driver; video + acts are position:fixed"
rounded: "none of note — this is a full-bleed cinematic canvas, not a card UI"
motion:
  library: "plain React — useEffect + useRef + a scroll listener + requestAnimationFrame. NO GSAP, NO motion/react."
  scrub: "all-intra video buffered as a Blob object-URL; target = p*(duration-0.05); current += (target-current)*0.14; set video.currentTime — the lerp makes scrubbing feel weighted"
  acts: "each act has an [a,b] progress window; opacity = clamp(min((p-a)/FADE,(b-p)/FADE)) with FADE 0.04, plus translateY((0.5-r)*34px) drift; visibility+pointerEvents toggle when invisible"
  rail: "fixed gold bar right, scaleY(progress)"
  grain: ".grain::after — fractalNoise SVG, opacity 0.06, steps(10) 8s; disabled under prefers-reduced-motion"
components:
  film: "fixed ~10s all-intra 1920×1082 clip of a lone armored king; never autoplayed, scroll-driven; first frame painted at currentTime 0.001 on loadedmetadata"
  veils: ".veil (radial) + .veil-top + .veil-bottom — warm near-black scrims that keep cream type legible over the painterly footage"
  nav: "spread nav — two links left, centered Cinzel-Decorative wordmark, two right (The King · The War · Agamemnon · The House · EN)"
  act: "fixed inset-0 overlay: gold eyebrow (Roman-numeral act) + two-line heading (caps + Cormorant-italic word) + body; left/right/center per act for rhythm"
---

# Design System Inspired by Agamemnon

## Overview

Agamemnon treats the browser like a screening room. A single painterly film of a lone armored king fills the frame and never plays on its own — instead it **scrubs frame-by-frame as you scroll**, while five acts of the epic fade in and out over it, each timed to the footage it narrates. The world is warm near-black (`#0b0908`), veiled by three scrims so that ornate cream type reads on top; gold (`#c9a24b`) is rationed to eyebrows, the tagline, the stat numbers, and the progress rail. Every other color on screen is the film itself.

Type is the personality: **Cinzel Decorative**, used **thin at weight 400**, gives the wordmark, hero title, and act headings a Roman-inscriptional, ornamental feel; **Cormorant** italic supplies the accent word of each heading and all body copy, a soft contrast against the caps. Film grain, warm veils, and a hairline gold progress rail complete the cinematic frame.

The scroll-scrub engine is deliberately **plain React** — no GSAP, no motion library. An all-intra video is fetched as a Blob and buffered in memory so every seek is instant; a scroll listener writes normalized progress into a ref; a `requestAnimationFrame` loop lerps `video.currentTime` toward the target and drives each act's `[a,b]` fade+drift window. Native scroll does all the work; nothing is scroll-jacked.

**Key Characteristics:**
- **Scroll = the timeline** — the film scrubs frame-by-frame with a weighted 0.14 lerp; no autoplay.
- **Warm near-black + cream + gold** — one palette, gold rationed; all other color is the footage.
- **Cinzel Decorative, thin (400)** — ornate inscriptional caps, never bold; Cormorant italic accents.
- **Three veils** — radial + top + bottom scrims keep cream type legible over painterly frames.
- **Five acts over one film** — fixed overlays with `[a,b]` windows, opacity + 34px drift, left/right/center rhythm.
- **Plain-React engine** — Blob-buffered all-intra video + scroll listener + rAF lerp; no animation library.
- **Cinematic chrome** — spread nav, gold progress rail (scaleY), film grain, `#debug=` freeze for capture.

## Colors

- **Base**: {colors.ink} behind the film.
- **Text**: {colors.cream} everywhere. **Gold** ({colors.gold}) for eyebrows, tagline, stat numbers, progress rail. Hairline {colors.line}.
- **No accent** ({colors.none}) — all chroma is the video.

## Typography

- **Display** ({typography.display}) — Cinzel Decorative at weight 400 (thin); bolding it breaks the elegance.
- **Body** ({typography.body}) — Cormorant, roman + italic; the italic word per heading is the whole typographic move.

## Layout

- **Edge** ({spacing.edge}). **Scroll driver** ({spacing.scroller}).
- **Stack**: video (z-0) → veils (z-1) → acts (z-20) → nav + rail (z-40) → grain (z-50).
- Acts alternate left / right / center to keep the eye moving across the frame.

## Elevation & Depth

Atmospheric only — veils, film grain, and text-shadow on headings. No shadow cards, no glass, no borders beyond the reserved hairline token.

## Components

### Film
{components.film}.

### Veils
{components.veils}.

### Nav + rail
{components.nav}. The gold rail scales `scaleY(progress)`.

### Act overlay
{components.act}.

## Motion

Library: {motion.library}. Scrub: {motion.scrub}. Acts: {motion.acts}. Rail: {motion.rail}. Grain: {motion.grain}. Reduced motion disables the grain animation; the film still scrubs on scroll.

## Do's and Don'ts

### Do
- Keep the all-intra video + Blob buffer + lerped `currentTime` — it is what makes scrubbing smooth.
- Keep Cinzel Decorative at weight 400 with one Cormorant-italic accent word per heading.
- Keep the three veils — cream type is unreadable over raw painterly frames without them.
- Keep the `[a,b]` fade windows + 34px drift + gold progress rail.

### Don't
- Don't autoplay the video or drive it with anything but scroll.
- Don't bold the display type or swap Cinzel Decorative for a lookalike.
- Don't add an accent color, icons, glass, or a UI kit.
- Don't reach for GSAP/motion — the engine is plain React by design.
- Don't scroll-jack or smooth-scroll hijack; native scroll drives the rAF loop.

## Responsive

- Mobile-first; `clamp()` on all headings; nav links + progress rail hide below `md` (only the centered wordmark shows).
- Right-aligned acts mirror with `text-right` + `items-end` + `ml-auto` on the body.
- Video stays `object-cover` full-bleed at every ratio.

## Iteration Guide

To retell another epic: swap the all-intra clip (keep a dark, single-subject cinematic film), retune the veil rgba to the new footage, rewrite the five acts (eyebrow + two-line heading with one italic word + body) and their `[a,b]` windows to match the beats of the new clip. Leave the scroll-scrub engine, the veils, the Cinzel-Decorative-400 + Cormorant pairing, the gold-rationing rule, and the grain untouched — they are the system.

## Known Gaps

- All nav links are non-functional (single-page scroll story).
- The film downloads from the asset CDN; the veil stops are tuned to the shipped clip.
- No reduced-motion branch on the scrub itself (only the CSS grain is guarded) — the video simply follows scroll.
