---
version: "1"
name: "Navy Ledger Editorial"
description: "A near-monochrome navy field punctuated by a single centered, cream-matted photographic tile; square institutional navbar, sharp corners throughout, and slow cubic-bezier reveal motion."
colors:
  background: "#1F2B5E"
  surface: "#E3E5EB"
  text-primary: "#FFFFFF"
  text-secondary: "#626C95"
  accent: "#1F2B5E"
  border: "#1F2B5E"
typography:
  display-lg:
    fontFamily: "Google Sans"
    fontSize: "33px"
    fontWeight: 500
    lineHeight: "1.3"
    letterSpacing: "-0.3px"
  body-md:
    fontFamily: "Monument Extended"
    fontSize: "18px"
    fontWeight: 500
    lineHeight: "1.35"
  accent-serif:
    fontFamily: "Roslindale Display"
    fontWeight: 400
    style: "serif display accent, used sparingly for editorial interruption"
  label-mono:
    fontFamily: "Monument Extended"
    fontSize: "18px"
    fontWeight: 500
    lineHeight: "1.35"
    style: "geometric all-caps label face"
spacing:
  base: "8px"
  gap: "50px"
  section-padding: "86px"
  micro-gap: "10px"
rounded:
  control: "0px"
  card: "0px"
  pill: "0px"
components:
  button-primary:
    background: "#1F2B5E"
    text-color: "#FFFFFF"
    radius: "0px"
    height: "59px"
    padding: "0px"
  card-media:
    background: "transparent"
    radius: "0px"
    padding: "0px"
    anatomy: "media-top-bleed"
  card-body:
    background: "transparent"
    radius: "0px"
    padding: "0px"
    anatomy: "body-text"
---
# Navy Ledger Editorial
Source: https://realevate.agency/

## Overview
This is a restrained, almost archival editorial system: a saturated navy field (`#1F2B5E`) dominates over 94% of rendered pixels, broken only by isolated white-matted photographic tiles and square-cornered institutional UI. There is no glassmorphism, no gradient wash, no rounded softness — every measured radius is 0px, from the navbar to the cards. The aesthetic reads as Swiss/International rigor crossed with a travel-editorial sensibility: one image, centrally placed, framed like a matted photograph in a gallery, floating in an ocean of flat navy. Typography is a clean geometric sans (Google Sans) for structure, with a serif display accent (Roslindale Display) held in reserve for rare editorial interruptions, and a heavier geometric label face (Monument Extended) for emphasis text.

## Composition
The dominant compositional choice is radical negative space: a single square-ish image tile sits dead-center in the viewport, roughly 313px wide against a canvas over 1500px wide — the image occupies well under 10% of the frame, with all four sides given equal navy breathing room. A small pair of quotation-mark glyphs sits below the tile, modestly sized, anchoring the image as an editorial quote/testimonial rather than a hero banner. This rejects the conventional full-bleed hero image or edge-to-edge gradient background in favor of a gallery-wall treatment: the content is a precious, isolated artifact rather than a saturating visual. Elsewhere in the system (per measured grids), content organizes into a 12-column grid with generous ~50px gutters for multi-item rows, and simpler 1-column stacked grids (rows split 100/100, or an asymmetric 20/2 split) for narrower content blocks — indicating a page rhythm that alternates between wide multi-column bands and tight vertical stacks.

## Colors
Navy (`#1F2B5E`, author token `--brand-navy`) is both the background and the primary UI fill — it appears as the page canvas, the navbar button fill, and even as a full-bleed flat "gradient" (`linear-gradient(rgb(31, 43, 94), rgb(31, 43, 94))`) used as a solid-color trick on at least one element. White (`#FFFFFF`) is the primary ink and the navbar's card-matting color, reserved for text and the photograph's frame. A muted slate-blue (`#626C95`, token `--muted`) serves as secondary/tertiary text where hierarchy needs softening. Two additional category tokens exist in the palette (`--category-by-the-sea-color: #222A4C`, `--category-evergreen-color: #36614D`) suggesting a thin system of muted categorical accents used elsewhere in the site, but they are not dominant. No bright accent hue is rationed in — this is a deliberately near-monochrome navy-and-white system; saturation is entirely borrowed from photographic content, not from UI chrome.

## Typography
Google Sans carries both display and body duty: a display-lg token at 33px/500 with tight -0.3px tracking and 1.3 line-height for headline-weight moments, stepping down to a body mode of 17.28px/500 for running text — both in white against navy, with `#1F2B5E`/`#1D2A5C` reserved as an ink color when text sits on light surfaces (e.g., inside the navbar's `#E3E5EB` field). Monument Extended (18px/500, 1.35 line-height) is a heavier geometric face pulled in for emphasis or label-style text — likely eyebrows or callouts. Roslindale Display, a serif, is the system's signature accent face: used sparingly, never for body copy, positioned as an editorial flourish against the otherwise all-sans structure.

## Layout
Content max-width is constrained to 672px for reading columns, keeping text measures short and deliberate against the wide navy canvas. The navbar spans full-bleed edge-to-edge (100% viewport width, 0px insets, 0px corner radii on all four corners — a true square bar, not an inset or capsule). Grids observed include a 12-column arrangement with ~49.9px gutters for 3-item rows, and simple single-column stacks for 2-item blocks, one split evenly (100/100) and one split asymmetrically (20/2) — indicating the system uses column-width ratio, not card padding, to create visual hierarchy between stacked elements. Spacing intervals of 8, 10, 19, 38, 50, and 86px suggest a loose base-8-ish rhythm with editorial adjustments rather than a strict single-unit grid. Card density is very low: single hero-style image tiles rather than dense multi-up grids dominate the sampled composition.

## Components
- **Navbar**: edge-to-edge square bar, full 100% viewport width, 0px left/right inset, all four corner radii 0px, sticky on scroll, background `#E3E5EB` (light neutral, breaking from the navy field), containing 5 nav items. A single prominent button sits within it: fill `#1F2B5E`, text `#FFFFFF`, 0px radius (hard rectangle), 59px height, 0px padding — a flat navy slab-button, sharp-cornered, not a pill.
- **Hero primary CTA**: not present as a solid filled button in this view — the first-screen focus is the centered photographic tile itself, not a CTA button; no button competes with it for attention on this screen.
- **Media card family** (×4 measured pattern, navbar-adjacent content grid): transparent background, 0px radius, 0px padding, anatomy is media-top-bleed — the image runs full-width to the card's top edge with no matting or inset, unlike the hero's tile.
- **Body-text card family** (×4, paired with the media cards): transparent, 0px radius, 0px padding, anatomy is pure body-text — no heading chip, no icon, no border; text sits directly on the navy field.
- **Hero image tile**: a single centered photographic tile (~313px square footprint) held in a thick off-white/cream mat (~15-20px visible border), evoking a printed photograph pinned to the navy wall. A small pair of quotation-mark glyphs in white sits below it, modestly scaled (well under the image width), signaling a quote/testimonial treatment.
- **Footer**: transparent background, 0 links — minimal to nonexistent footer chrome, consistent with the system's stripped, content-forward restraint.

## Graphics & Effects
Two verbatim gradients are measured, both small-footprint utility fills rather than page backgrounds: `linear-gradient(rgb(31, 43, 94), rgb(31, 43, 94))` — a flat solid-navy gradient covering roughly 0.8% of the page, likely a card or panel fill rendered as a gradient string; and `linear-gradient(90deg, rgb(31, 43, 94) 50%, rgba(0, 0, 0, 0) 50%)`, also ~0.8% of the page — a hard-edge navy-to-transparent split used as a directional mask or divider, not a wash. Neither should be scaled up to cover the hero or page background, which remains flat `#1F2B5E`. The hero's only imagery is the single centered photographic tile with a cream mat border — no scrim is needed since the image sits fully inset within navy, not behind text. No noise, grain, or pattern texture is indicated in the evidence; the navy field reads as flat and clean.

## Motion
Motion is slow and cinematic rather than snappy: transitions run at 0.68s–0.8s using pronounced custom cubic-beziers (`cubic-bezier(0.18, 0.13, 0, 0.99)`, `cubic-bezier(0.16, 1, 0.3, 1)`, `cubic-bezier(0.7, 0.6, 0, 1)`), applied to `filter`, `transform`, and `background-position`/`color` properties — consistent with slow image reveals, parallax-like filter fades, or scroll-driven color shifts rather than quick UI feedback. Named keyframes `cursor-play-label-exit-up` and `cursor-play-label-enter-from-bottom` indicate a custom cursor label that slides vertically on hover/exit, likely paired with a "play" affordance over the media tile. GSAP with ScrollTrigger drives scroll-linked or scroll-triggered reveals, reinforcing the gallery-reveal pacing of the composition.

## Guardrails
- Never fill more than a small, centered fraction of the viewport with the photographic tile — the navy field must remain the dominant visual mass.
- Never round any corner — navbar, buttons, and cards are all strictly 0px; introducing pill or rounded shapes breaks the system's institutional character.
- Never apply the measured flat-navy or split gradients as a full-page or full-hero background; they are small utility fills only.
- Never substitute a bright or saturated accent hue for navy — the palette stays navy/white/muted-slate with color only arriving via photography.
- Never speed up transitions below ~0.6s or swap in linear/ease-out easing — the slow custom cubic-bezier curves are core to the reveal feel.
- Never let the navbar float, inset, or gain rounded corners — it is a full-width, sharp-cornered, sticky bar with a light `#E3E5EB` fill distinct from the navy page.
