---
version: "1"
name: "Design System Inspired by Senson"
description: "Senson is an editorial travel-operator marketing site: full-bleed looping video, uppercase Instrument Serif display type set against Inter Tight, near-black #212121 on white, and ONE red (#d91f1f) rationed to CTAs and active states. Nine sections, no animation library (CSS transitions only), no icon library (inline SVG), and a hard rule that nothing hides behind a scroll trigger — every section renders fully on first paint. React 19 + Tailwind 4 (@theme), signature interactions: a measured coverflow rail, a grid-rows mega menu, and a radial approach dial."
colors:
  dark: "#212121 — body text, dark section backgrounds, primary buttons"
  white: "#ffffff — global page background"
  accent: "#d91f1f — THE red: CTA buttons, active tab, New badge, the mark on white. The only saturated color on the page"
  accent-deep: "#8a2020 — CTA hover + the serif paragraph in Approach"
  grey-50: "#fafafa — journeys section bg"
  grey-100: "#f5f5f5 — card fills, newsletter panel"
  grey-250: "#e5e5e5 — inactive count badges"
  grey-300: "#c1c1c1 — inactive tabs, eyebrows, placeholders"
  grey-700: "#424242 — secondary body copy"
typography:
  sans: { fontFamily: "'Inter Tight' via Google Fonts, @theme --font-sans", weights: "300-600 + ital 400", role: "body, navigation, UI, all small text" }
  editorial: { fontFamily: "'Instrument Serif' via Google Fonts, @theme --font-editorial", weights: "400 ONLY (never faux-bold)", role: "display headings, wordmark, pull quotes, stats, journey titles; upright for headings, italic for country labels + quotes" }
spacing:
  container: ".container-x — max-width 1600px, padding 1.25rem → 2.5rem (768) → 3.5rem (1280)"
  section: "py-16 md:py-24 lg:py-32"
  display: "always clamp() — hero clamp(3rem,11vw,9.5rem), never a fixed size"
rounded: "buttons rounded-md; pills rounded-full; large media rounded-3xl; cards rounded-sm/3xl"
motion:
  library: "NONE. All motion is CSS transitions + a little React state. No Framer Motion, GSAP, Lenis, or scroll library."
  rule: "HARD RULE — nothing hidden behind a scroll trigger. No opacity:0 + IntersectionObserver reveals. Every section renders fully on first paint; motion is limited to hover, focus, and explicit interaction."
  ease: "cubic-bezier(0.22,1,0.36,1) on every non-trivial transition"
  durations: "colour 150ms · coverflow/megaMenu/headerHide 500ms · crossfade/cardZoom 700ms · underline 350ms"
components:
  header: "fixed overlay, two states — light (transparent, white, glass pill) over hero, solid white/90 after 24px scroll; hides on scroll-down past 240px, returns on scroll-up, never while mega open"
  megamenu: "grid-template-rows 0fr→1fr collapse (hidden xl:grid, NEVER xl:block), dismissed by a document-level mouseover contract + Escape + outside pointerdown + blur + scroll>8px"
  coverflow: "Journeys rail — one focused card centered, siblings fanning out; sizes derived from a ResizeObserver (no breakpoints); opens on index 2; tabs + counts computed from journey data so no tab is ever empty"
  dial: "Approach — a radial ring with 5 points at -90+i*72°; hovering a stage swaps both the paragraph and the crossfading photo; twelve-o'clock is a CTA, not a stage"
  icons: "8 hand-written inline SVG (0 0 16 16, stroke 1.3, round caps): ArrowRight/Left/UpRight, ChevronDown, Search, Globe, Menu, Close. No icon library."
---

# Design System Inspired by Senson

## Overview

Senson is an editorial travel-operator site built on restraint. The visual world is **near-black `#212121` on white**, typeset in **uppercase Instrument Serif** display against **Inter Tight** for everything small, and lit by exactly **one red (`#d91f1f`)** used only for calls to action, the active tab, the "New" badge, and the brand mark on white. Full-bleed looping video anchors the hero and the inspiration section; everything else is generous white space, a disciplined grey scale, and photography cropped to exact sizes so the layout never depends on a source aspect ratio.

The system has two firm rules. First, **headings are always weight 400** — Instrument Serif ships a single weight and the site never fakes bold; hierarchy comes from scale and the red, not from weight. Second, and unusually, **nothing hides behind a scroll trigger**: there are no `opacity:0` + IntersectionObserver reveals, no parallax, no smooth-scroll library. Every one of the nine sections renders fully on first paint, and motion is limited to hover, focus, and explicit interaction. That constraint is deliberate — it keeps the site fast, accessible, and legible with JavaScript motion disabled.

There is **no animation library and no icon library**. All motion is CSS transitions on a single easing curve (`cubic-bezier(0.22,1,0.36,1)`); all icons are eight hand-written inline SVGs. The interaction personality lives in three custom pieces: a **coverflow journeys rail** whose sizes are measured from the container (no breakpoints), a **mega menu** that animates `grid-template-rows` and is dismissed by a document-level pointer contract, and a **radial approach dial** that swaps copy and a crossfading photo as you hover each stage.

**Key Characteristics:**
- **Near-black on white + one red** — `#d91f1f` is the only saturated color; no second accent, no gradients, no gradient text.
- **Uppercase Instrument Serif, weight 400 only** — display, wordmark, quotes, stats, journey titles; italic for country labels and pull quotes. Inter Tight for all else.
- **No-scroll-reveal rule** — every section visible on first paint; motion is hover/focus/interaction only.
- **No libraries** — CSS-transition motion, inline-SVG icons, only `react` + `react-dom` as runtime deps.
- **Measured coverflow** — the journeys rail derives every size from a ResizeObserver, opens on the third card, and computes tabs/counts from data so no tab is ever empty.
- **Robust mega menu** — `grid-template-rows` collapse (`hidden xl:grid`, never `xl:block`) with a document-level dismissal contract.
- **All-local media** — full-bleed video with poster frames, images cover-cropped to exact sizes; no external asset URLs.

## Colors

- **Ink on white**: {colors.dark} text on {colors.white}. The grey scale ({colors.grey-50} → {colors.grey-700}) carries section fills, card fills, inactive states, and secondary copy.
- **The one red** ({colors.accent}): CTAs, active tab, "New" chip, the mark on white. **Hover** deepens to {colors.accent-deep} (also the color of the Approach serif paragraph). No other saturated color exists.

## Typography

- **Sans** ({typography.sans}) — Inter Tight for body, nav, UI, all small text.
- **Editorial** ({typography.editorial}) — Instrument Serif, **weight 400 only**, never synthesized bold. Upright for headings; italic for country labels and pull quotes.
- Headings are `font-weight: 400`, `letter-spacing: -0.02em`. This site has no bold headings.

## Layout

- **Container** ({spacing.container}). **Section rhythm** ({spacing.section}). **Display type** ({spacing.display}).
- **Desktop nav breakpoint is `xl` (1280px)**, not `lg` — the center pill plus the agent-hub block need the width; below it, the mobile overlay takes over.
- Nine sections: Header (fixed) · Hero · Approach · Journeys · Inspiration · Tailor-made · Responsible travel · Guestbook · Newsletter + Agencies · Footer.

## Elevation & Depth

Flat and editorial. Depth comes from full-bleed video under flat/`radial` scrims, large soft card shadows on the coverflow cards (`0 18px 50px -20px`), and the layered white overlay cards on media. No gradient text, no text drop-shadows, no second accent.

## Components

### Header
{components.header}.

### Mega menu
{components.megamenu}. Three failure modes to avoid: the stuck menu (`xl:block` beating `grid`), the menu that won't dismiss (relying on `onMouseLeave` alone), and — in Journeys — the empty rail (building tabs from the region list instead of the data).

### Coverflow (Journeys)
{components.coverflow}.

### Approach dial
{components.dial}.

### Icons
{components.icons}.

## Motion

Library: {motion.library} Rule: {motion.rule} Ease: {motion.ease}. Durations: {motion.durations}. Interactive motion in full: card image scales to 1.04 on hover; arrow icons translate +4px inside a hovered link; the mega-menu active-region rule grows `w-0`→`w-5`; the dial's active dot scales 1.5; buttons swap background color only.

## Do's and Don'ts

### Do
- Keep the one red rationed to CTAs and active states; everything else is ink-on-white + grey.
- Keep every heading at Instrument Serif weight 400; hierarchy from scale, not weight.
- Keep every section visible on first paint — no scroll reveals, no parallax.
- Derive coverflow sizes and journey tabs/counts from measured container + data.

### Don't
- Don't add a second accent, a gradient headline, or a text drop-shadow.
- Don't faux-bold Instrument Serif or swap it for a lookalike.
- Don't add an animation library, icon library, or smooth-scroll library.
- Don't write `xl:block` on the mega-menu panel (it beats `grid` and jams the panel open).
- Don't reach for an external image/video URL; every asset is local.

## Responsive

- Mobile-first; scale with `sm: md: lg: xl:`. Desktop nav appears at `xl` (1280px); below, the pill + agent-hub hide and a full-screen mobile overlay takes over.
- The coverflow rail needs no breakpoints — it measures its container. Tab bar, mobile country lists, and the rail each own their overflow, so the page never scrolls horizontally (320px → 2560px).

## Iteration Guide

To re-skin for another operator: swap the two hero/inspiration clips + the image set (keep the exact cover-crop sizes via `scripts/prepare-media.sh`), rewrite `src/data/site.js` (regions, journeys, stages, stats, guestbook, footer — the single source of truth), and retune the one red if the brand demands. Leave the type pairing (Instrument Serif 400 + Inter Tight), the no-scroll-reveal rule, the coverflow/mega-menu/dial logic, and the eight-icon set untouched — they are the system.

## Known Gaps

- All nav/footer links are in-page anchors or placeholders; no routing or backend.
- The newsletter form is client-only (swaps to a thank-you state); no submission endpoint.
- Media downloads from the asset CDN; the cover-crop sizes are fixed, so replacement images must match (or be re-run through `prepare-media.sh`).
- Journey/region catalogue counts in the mega menu are editorial figures, larger than the number of live cards by design.
