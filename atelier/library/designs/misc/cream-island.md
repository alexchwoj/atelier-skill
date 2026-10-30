---
version: "1"
name: "Cream Island"
description: "A cream-and-charcoal light system built around one saturated violet media surface, with a rationed coral highlight, oversized display type, and a rounded-square icon grid of feature marks."
colors:
  background: "#FFF0DF"
  surface: "#FFF0DF"
  text-primary: "#292524"
  text-secondary: "#FFF0DF"
  accent: "#EFABFB"
  accent-warm: "#FF6900"
  media-surface-deep: "#301860"
  media-surface-mid: "#4830A8"
typography:
  display-lg:
    fontFamily: "system-ui"
    fontSize: "96px"
    fontWeight: 700
    lineHeight: "1"
    letterSpacing: "-2.4px"
  headline-md:
    fontFamily: "system-ui"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: "1.2"
    letterSpacing: "-0.4px"
  body-md:
    fontFamily: "system-ui"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
  accent-display:
    fontFamily: "SF Soft Time"
    fontSize: "30px"
    fontWeight: 700
    note: "digital-clock face used inside the media surface, not for running text"
spacing:
  base: "8px"
  gap: "56px"
  gap-tight: "12px"
  section-padding: "56px"
  card-padding: "20px"
rounded:
  control: "8px"
  card: "16px"
  pill: "9999px"
  navbar: "8px"
components:
  button-primary:
    background: "#1C1917"
    text-color: "#FFF0DF"
    radius: "12px"
    height: "48px"
    border: "none"
  button-secondary-purchase:
    background: "#FFF0DF"
    text-color: "#292524"
    radius: "12px"
    height: "48px"
    border: "1px solid rgba(41,37,36,0.08)"
    badge-fill: "#1C1917"
    badge-text: "#FFF0DF"
  button-nav-cta:
    background: "#FFF0DF"
    text-color: "#292524"
    radius: "9999px"
    height: "40px"
    border: "1px solid rgba(41,37,36,0.06)"
  card-feature-icon:
    background: "transparent"
    radius: "0px"
    padding: "0px"
    text-color: "#292524"
  media-device-frame:
    background: "linear-gradient(oklab(0.266 0.0637018 0.0467235 / 0.1) 25%, oklab(0 0 0 / 0) 100%)"
    radius: "16px"
    shadow: "oklab(0.266 0.0637018 0.0467235 / 0.25) 0px 20px 25px -5px, oklab(0.266 0.0637018 0.0467235 / 0.25) 0px 8px 10px -6px"
    backdrop-filter: "blur(40px) saturate(1.15)"
---
# Cream Island
Source: https://tryalcove.com/

## Overview
This is a light-mode-default marketing system built on a warm cream field rather than paper white, paired with an oversized, tight-tracked system-sans display face. Its signature move is a single vivid violet-to-magenta gradient surface — a simulated device screen — dropped into an otherwise flat, ink-on-cream composition. The aesthetic reads as consumer-software minimalism (Apple-adjacent) crossed with a soft neobrutalist flatness: black pill buttons, square icon marks, zero card chrome. Color is almost entirely rationed to that one media surface and a single coral-pink text-highlight block; everything else is charcoal ink on cream.

## Composition
The first screen is strictly centered and symmetrical: a transparent edge-to-edge navbar, a two-line display headline with one word wrapped in a flat coral highlight block, a pair of stacked buttons, then a large rounded-corner device screenshot that dominates the fold and bleeds past the viewport edge below. Scrolling continues the device screenshot downward before releasing into an open cream field holding a centered 4×2 icon-label grid, a single dark CTA repeated as a second conversion point, then a row of small social icons, and finally a giant, low-contrast wordmark bleeding off the bottom as a closing signature. The deliberate choice is restraint: one saturated moment (the device screen) against acres of flat cream, rejecting the alternative of a full gradient-mesh hero — color is a reward for scrolling into the product, not an ambient wash.

## Colors
Cream (`#FFF0DF`/`#FFF0D8`) is the background and dominates roughly 85% of rendered pixels — it is the page, not a card fill. Charcoal ink (`#292524`, with pure `#000000` for icon strokes) carries all text and line-art. The violet/purple family (`#301860`, `#301878`, `#4830A8`, `#483090`) is confined to the device-mockup illustration — together under 10% of the frame — and must never be read as a page-level gradient background. A soft coral/lilac (`#F5D0FE`) appears as a flat rectangular text-highlight block behind two headline words and in a faint radial glow behind the mockup edge. An orange ramp (`#FF6900`, `#FF8904`, `#9F2D00`, `#441306`, `#FFEDD4`, `#FFF7ED`) exists as declared tokens for small accent chips/badges (e.g. a coral shield glyph beside the purchase price) — rationed to iconography, never a fill of any large area. Buttons and the wordmark stay pure charcoal-on-cream or cream-on-charcoal; no blue, no green, no additional hue is introduced.

## Typography
A single system-ui sans carries the entire page at extreme scale contrast: display headline at 96px/700, tight to -2.4px letter-spacing, line-height 1, set in two centered lines. A secondary weight sits at 30px/700 with -0.4px tracking for feature-grid labels and in-device numerals (time display), rendered in a rounded digital-clock face ("SF Soft Time") only inside the media surface — this is the one accent family, reserved for that simulated-OS chrome. Body/caption text (nav links, helper copy, price, track metadata) drops to small sizes at regular weight, in the same charcoal or, on the dark media surface, translucent cream/lavender. No serif appears anywhere; hierarchy is built entirely through size jump and weight, not family change.

## Layout
Content is capped at a 1024px measure for text and buttons, while the media surface and icon grid stretch wider within generous cream margins. The feature section uses a 4-column grid (gap 56px×12px) holding 8 icon-and-label items in two even rows of four — a strict uniform card grid, not bento: rows run [4][4], each cell equal width, no spanning items. Spacing follows an 8px-rooted rhythm with 56px as the dominant section/row gap and small 12px/6-8px steps for tight icon-to-label pairs. Corner radii are consistently soft: 16px on the large device frame, 12px on buttons, 8px on smaller controls, 9999px on the nav CTA pill — never sharp, never a heavy round like 24px+. The system is desktop-composed and centered; no visible column asymmetry.

## Components
- **Navbar**: edge-to-edge, transparent, square-cornered (0px all corners) full-viewport-width bar, 116px tall, sticky. 5 items: wordmark + version-badge chip at far left, two text links (utility pages) center-right, one filled CTA pill at far right. Logo is a small rounded-square glyph beside the wordmark and a tiny pill badge showing a version tag.
- **Hero primary button**: an observed near-black solid fill (~`#1C1917`), white/cream label, ~12px corner radius (slightly-rounded), full-height ~48px — this is the single most emphasized control on the first screen, paired with a small monochrome brand glyph inline with its label.
- **Hero secondary button**: a cream/near-white solid fill beside the primary, same ~12px radius, thin hairline border, carrying a small coral-tinted icon chip and a black pill sub-badge showing a numeral price — a purchase-tier control, not equal in visual weight to the primary.
- **Nav CTA pill**: cream fill, full pill radius (9999px), hairline border, small brand glyph + label — a lighter-weight repetition of the hero action, sized for the navbar row only.
- **Secondary repeat CTA**: identical dark solid button reappears centered below the icon grid, ~radius 12px, same fill/label pattern as hero primary — the page's second and final conversion point.
- **Device/media surface**: one large rounded-rectangle (16px radius) card spanning near full content width and bleeding past the viewport bottom edge on first scroll. Fill is the violet illustrative gradient (not a CSS gradient token but an image/canvas-like scene); shadow `oklab(0.266 0.0637018 0.0467235/0.25) 0px 20px 25px -5px, 0px 8px 10px -6px`; a glass status pill floats top-center on it with `blur(40px) saturate(1.15)` backdrop-filter. Inside, top to bottom: a small glass lock-icon pill, a date line, an oversized time numeral, a status/temperature row, then a glass media-player card at the base showing artwork thumbnail, two lines of track text, a progress rail, and a row of transport icon controls.
- **Feature icon-grid cards**: appear once, in the mid-page band, ×8 arranged 4-across in two rows (4/4). Each "card" is transparent with 0px radius and 0px padding — no chrome, no border — anatomy is icon glyph (outline style, black stroke) stacked above a two-line bold label, center-aligned. Uniform grid, not bento; all cells equal weight.
- **Social icon row**: 3 small square glyph buttons (rounded-square swatches on cream), centered, beneath the repeat CTA — minimal chrome, icon-only.
- **Footer**: transparent background, 3 text links, minimal-height row beneath the social icons, preceding the giant low-opacity wordmark mark that closes the page.
- **Micro-annotation label**: a small hand-drawn-style cursor glyph plus a short italic-toned caption sits above the feature grid, calling out the interactive nature of the media surface above it.

## Graphics & Effects
The only large-area color event on the page is the device-mockup illustration itself — a multi-tone violet/purple organic-blob scene occupying the hero media surface (roughly 6–8% of total scrolled page area, concentrated at the fold). A subtle warm-black gradient wash, `linear-gradient(oklab(0.266 0.0637018 0.0467235 / 0.1) 25%, oklab(0 0 0 / 0) 100%)`, glazes the top edge of that same media card only — not the page background. A small radial bloom, `radial-gradient(circle, rgb(245, 208, 254), rgba(0, 0, 0, 0))`, sits behind/around the mockup at under 1% of page area, softening its edge into the cream. Glass components (the lock pill, the media-player card) use `blur(40px) saturate(1.15)` backdrop-filter over the violet scene, giving true frosted-glassmorphism confined to that surface. Elevation on the device frame is expressed with a soft double-drop shadow (`0px 20px 25px -5px` + `0px 8px 10px -6px` at 25% ink-tinted opacity) — the only shadow in the system; flat elements elsewhere cast none. A giant, barely-visible wordmark at the page foot uses near-zero contrast against cream as a texture/watermark rather than a legible headline.

## Motion
Interactive color/shape changes (hover, focus, state swaps on buttons and glass surfaces) run on a shared 0.3s `cubic-bezier(0.4, 0, 0.2, 1)` transition covering color, background, border, shadow, transform, and backdrop-filter together — a single unified easing curve reused system-wide, with a faster 0.3s `cubic-bezier(0, 0, 0.2, 1)` ease-out variant for entrance-style state changes and a slightly slower 0.35s version for larger surface changes. Named keyframes drive a looping marquee (two-part `marquee-first`/`marquee-second`, implying a scrolling rail elsewhere in the experience), a `spin` loader, a `pulse` for waiting/live states, and a `header-rise` that lifts the navbar into view — consistent with the sticky header behavior. Motion is functional and restrained: fast, GPU-cheap property changes, no bouncy overshoot, reinforcing the flat/precise character of the rest of the system.

## Guardrails
- Never let the violet gradient escape the device-mockup card to become a page or hero background — cream stays dominant everywhere else.
- Never paint the coral/orange ramp as a large fill; it is a highlight block behind two words and small icon/badge accents only.
- Keep the navbar edge-to-edge and square-cornered; do not inset it or round its corners into a floating capsule.
- Do not add card chrome (borders/shadows/radius) to the feature icon grid — it must stay flat and transparent.
- Reserve the digital-clock accent face for in-device numerals only; body and headline type stay on the single system-sans family.
- Keep exactly one dark solid button as the primary action per view; secondary/purchase buttons stay cream-filled with a hairline border, never matching the primary's fill.
