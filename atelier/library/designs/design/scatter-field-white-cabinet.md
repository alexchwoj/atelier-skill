---
version: "1"
name: "Scatter-field white cabinet"
description: "Near-white gallery canvas with a free-floating cluster of small object cards, hairline-thin type, and a single square-cornered edge-to-edge navbar."
colors:
  background: "#FFFFFF"
  surface: "#EDEDED"
  text-primary: "#000000"
  text-secondary: "#FFFFFF"
  accent: "#000000"
typography:
  display-lg:
    fontFamily: "LayGrotesk"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
  headline-md:
    fontFamily: "LayGrotesk"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
  body-md:
    fontFamily: "LayGrotesk"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
  label-md:
    fontFamily: "LayGrotesk"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
  accent-serif:
    fontFamily: "Teodor"
    fontStyle: "italic"
spacing:
  base: "4px"
  gap: "6px"
  section-padding: "14px"
rounded:
  control: "4px"
  card: "4px"
  pill: "9999px"
components:
  button-nav-tab:
    background: "#EDEDED"
    text-color: "#000000"
    radius: "4px"
    height: "27px"
  button-nav-tab-inactive:
    background: "transparent"
    text-color: "#000000"
    radius: "4px"
    height: "27px"
  avatar-dot:
    background: "#000000"
    radius: "9999px"
    height: "6px"
  card-object-tile:
    background: "#EDEDED"
    radius: "0px"
    padding: "0px"
  card-object-tile-dark:
    background: "#000000"
    radius: "0px"
    padding: "0px"
---
# Scatter-field white cabinet
Source: https://www.gionatannese.com/

## Overview
This is a minimalist, content-first curation system: a near-blank white canvas (the page reads as ~96–99.9% white/off-white in actual pixel coverage) on which small, uniformly-sized object cards are scattered in a loose, non-gridded constellation. The aesthetic sits closest to Swiss/International rigor stripped of its ruled lines — no borders, no shadows, no gradients — married to an editorial gallery-wall logic where whitespace itself is the primary compositional material. A single hairline sans (LayGrotesk) carries every UI label at one uniform size, so hierarchy is built entirely through spatial placement and tonal contrast (light card vs. black card vs. white void) rather than through type scale.

## Composition
The first screen opens on an almost-empty white field: a compact navbar sits pinned to the top-left/top-right corners, and below it a cluster of roughly 18–20 small square-to-portrait tiles is arranged in a hand-placed, asymmetric scatter occupying the upper-middle third of the viewport — never a strict row or column grid. Density is low and deliberate: large negative-space margins isolate the cluster from all four viewport edges, and the lower two-thirds of the screen is left empty. The one deliberate compositional choice is this scatter-not-grid arrangement — tiles sit at irregular x/y offsets and slightly varied sizes rather than snapping to a column system, rejecting the safer alternative of a uniform card grid or masonry wall. This trades scannability for a curated, artifact-cabinet feel where each tile reads as an individually placed object rather than a repeating unit.

## Colors
Background is #FFFFFF, confirmed dominant at ~96%+ of rendered pixels — this is a true white-canvas system, not an off-white or gray-surface one. A muted #EDEDED functions as the surface/card role for light-toned tiles (paper texture, linework, pale objects), appearing at roughly 0.1–3% of pixel area — used sparingly as a tile backing, never as a section background. #000000 is the ink/text/accent role and doubles as a card fill for a handful of dark tiles (photography or product shots with black grounds), giving the only strong tonal contrast in the composition. #FFFFFF reappears as an on-color for text sitting on those black tiles. There is no hue anywhere in the interface chrome — any color visible belongs strictly to the photographic/illustrative content inside the tiles, never to backgrounds, buttons, or type. This leaves the vast majority of the canvas deliberately uncolored.

## Typography
Every measured text token — display, headline, body, label — resolves to the same face and size: LayGrotesk at 16px/400, line-height 1.5. This is a flat hierarchy system: the design does not lean on a type scale for emphasis, so weight of meaning is carried by position, size of tile, and tonal card fill instead. A secondary family, Teodor, is present as an italic serif — reserved as an accent voice distinct from the grotesque workhorse, likely marking a single interruption word or credit line rather than any running text. Ink is #000000 on white grounds; on dark tiles, text flips to #FFFFFF.

## Layout
There is no visible column grid — this is a free-canvas scatter layout, closer to a mosaic/portfolio arrangement than any auto-fit or bento system. Tiles vary in size (roughly 60px to 130px per side) and sit at organic offsets against each other, some overlapping vertically by a few pixels, implying absolute or transform-based positioning rather than flow layout. The base spacing unit is small and tight — 4px, 6px, 14px — consistent with fine-grained micro-adjustments between tile edges rather than a generous section rhythm. The navbar is the only edge-anchored, full-width element; everything else floats independently of any container max-width, centered as a loose cluster in the upper-middle of the viewport with wide empty margins on all sides.

## Components
- **Navbar**: top of page, edge-to-edge square bar, 27px tall, spanning the full 1920px viewport width (0px inset left/right), all four corners sharp at 0px radius, background transparent (page white shows through), position sticky. Contains 3 items: a wordmark/logo at far left, a small pill-shaped tab control (radius 4px, #EDEDED fill) immediately beside it holding a short numbered tab set, and a single dark dot/avatar marker at the far right edge.
- **Object tile — light**: appears throughout the central scatter cluster, ×~12 instances arranged non-uniformly. Surface is flat #EDEDED, 0px radius, no border, no shadow — a pure flat-color mount. Inside: a single centered image/illustration (line art, product photography, or a material/texture close-up) filling most of the tile with a small even margin of surface color showing at the edges; no caption, no label, no CTA — purely visual, artifact-card anatomy.
- **Object tile — dark**: ×~5 instances interspersed among the light tiles. Surface is flat #000000, 0px radius, no border. Inside: a single high-contrast photographic or product image (jewelry, apparel, device) centered and near-full-bleed within the black mount, with white or light subject matter creating the tonal pop against the black ground; occasionally a small white linework icon substitutes for a photograph.
- **Tab control (secondary nav)**: inline in the navbar beside the wordmark, pill/rounded rectangle (radius 4px, not full pill), #EDEDED fill, holding a small set of numbered short labels in flat #000000 text; the active tab is visually merged into the pill fill while inactive tabs sit as plain text beside it with no fill.
- **Status dot**: far right of navbar, small solid circle, #000000 fill, full pill radius (9999px) — a minimal presence/notification indicator with no label.

## Graphics & Effects
No gradients, no scrims, and no full-frame color washes exist anywhere in this system — the canvas stays flat white throughout. A `blur(40px)` backdrop-filter is present in the evidence, most plausibly applied to the navbar's tab-pill control or the status dot on scroll/hover, producing a soft frosted-glass separation from content passing beneath the sticky bar rather than any hero-scale glass panel. A canvas element exists as a live surface somewhere in the composition (likely underlying the scatter interaction or a cursor-following element); for a static rebuild, substitute a plain white or very-pale-gray fill in its place — do not introduce a gradient or animated texture where none is confirmed. Elevation is expressed only through flat tonal contrast (light tile vs. dark tile vs. white void), never through drop shadow — this is a shadowless, borderless flat-surface system.

## Motion
Two transition curves govern the system: a slower `all 0.45s cubic-bezier(0.65, 0, 0.35, 1)` for structural changes (tile repositioning, tab switching, layout shifts) with a pronounced ease-in-out-with-overshoot character, and a faster `opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)` standard ease-out for simple fades (hover reveals, dot state changes). Together they suggest a deliberate, unhurried interaction pace — tiles likely drift or resettle with the slower curve while incidental state changes (hover highlights, focus) resolve quickly via the fade curve. No looping or ambient animation is implied; motion here is state-triggered, not decorative.

## Guardrails
- Never fill the background with gray, black, or any gradient — the field must render as true, dominant #FFFFFF.
- Do not snap the object tiles into a column grid, masonry wall, or bento layout — preserve their loose, hand-placed scatter with irregular offsets and sizes.
- Do not add borders, drop shadows, or rounded corners above 4px to any tile — surfaces stay flat and square-edged.
- Do not introduce a second type size or weight for emphasis — hierarchy comes from placement and tonal card fill, not type scale.
- Keep color confined to the photographic/illustrative content inside tiles; never tint chrome, navbar, or background with hue.
- Preserve the navbar as a sharp-cornered, edge-to-edge, transparent, sticky bar — do not convert it into a centered pill or inset rounded bar.
