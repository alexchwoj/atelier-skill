---
version: "1"
name: "Terminal Ledger"
description: "A monospace, plain-text-editor aesthetic on a near-white ground: zero-radius rules, hairline borders, an orange accent rationed to a single announcement bar and two CTA rectangles, with diagram boxes standing in for illustration."
colors:
  background: "#FAFAFA"
  surface: "#FFFFFF"
  text-primary: "#414141"
  text-secondary: "#737373"
  text-tertiary: "#C1C1C1"
  border: "#414141"
  ink-black: "#111111"
  accent-orange: "#F35815"
  accent-amber: "#F2B600"
  link-blue: "#0B6EC5"
  focus-ring: "#1E9DE7"
typography:
  display-lg:
    fontFamily: "ui-monospace"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: "1.5"
  headline-md:
    fontFamily: "ui-monospace"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: "1.5"
  body-md:
    fontFamily: "ui-monospace"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
  label-md:
    fontFamily: "ui-monospace"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: "1.5"
  accent-sans:
    fontFamily: "ui-sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
spacing:
  base: "8px"
  gap: "24px"
  section-padding: "48px"
  small-gap: "12px"
  micro-gap: "16px"
  large-gap: "32px"
rounded:
  control: "9999px"
  card: "9999px"
  pill: "9999px"
components:
  button-announcement-cta:
    background: "#F2B600"
    text-color: "#111111"
    radius: "0px"
    height: "32px"
    padding: "0px 8px"
  button-primary-hero:
    background: "#F35815"
    text-color: "#FFFFFF"
    radius: "0px"
    height: "32px"
    padding: "0px 8px"
  button-primary-midpage:
    background: "#111111"
    text-color: "#FAFAFA"
    radius: "0px"
    height: "56px"
    padding: "16px 0px"
  button-nav-ghost:
    background: "transparent"
    text-color: "#414141"
    radius: "0px"
    height: "24px"
    padding: "0px"
    hover-text-color: "#000000"
  card-logo-tile:
    background: "#FFFFFF"
    radius: "0px"
    padding: "0px"
    border: "1px solid #414141"
  card-quote:
    background: "transparent"
    radius: "0px"
    padding: "0px 0px 0px 16px"
    border-left: "1px solid #414141"
  card-diagram-box:
    background: "transparent"
    radius: "0px"
    border: "2px dashed #414141"
    padding: "24px"
  card-feature-gradient:
    background: "repeating-linear-gradient(0deg, rgb(65, 65, 65), rgb(65, 65, 65) 12px, rgba(0, 0, 0, 0) 12px, rgba(0, 0, 0, 0) 16px), repeating-linear-gradient(90deg, rgb(65, 65, 65), rgb(65, 65, 65) 12px, rgba(0, 0, 0, 0) 12px, rgba(0, 0, 0, 0) 16px), repeating-linear-gradient(rgb(65, 65, 65), rgb(65, 65, 65) 12px, rgba(0, 0, 0, 0) 12px, rgba(0, 0, 0, 0) 16px), repeating-linear-gradient(270deg, rgb(65, 65, 65), rgb(65, 65, 65) 12px, rgba(0, 0, 0, 0) 12px, rgba(0, 0, 0, 0) 16px)"
    radius: "0px"
    padding: "24px"
    border: "hatched frame, no solid border"
---
# Terminal Ledger
Source: https://planetscale.com/

## Overview
This is a plain-text, developer-console aesthetic built almost entirely in a single monospace face at one size (`ui-monospace`, 16px), rendered on a near-white ground (`#FAFAFA`, ~84% of pixels) with charcoal ink (`#414141`) and near-black headings (`#111111`). It reads like Swiss/International rationalism filtered through a terminal emulator: zero border-radius everywhere, hairline `1px solid #414141` rules doing the work shadows and cards would do elsewhere, and a dotted-rule ASCII-style divider between sections. Color is a strict utility, not a mood: orange (`#F35815`) and amber (`#F2B600`) appear only on the two conversion buttons, and blue (`#0B6EC5`) marks inline text links. Nothing is glassy, gradient-washed, or elevated — the system's confidence comes from restraint and monospace precision, not surface effects.

## Composition
The first screen opens with a full-bleed black announcement strip carrying an amber pill-less CTA rectangle, then a static light navbar, then a left-rule-marked headline followed by dense paragraph copy with inline links — no hero illustration, no imagery above the fold. Immediately below, a 5-column logo grid of partner marks begins and runs for many rows, establishing the page's real rhythm: alternating bands of (a) dense monospace prose with inline links, (b) hairline-bordered proof/diagram blocks, (c) short client blockquotes set with a left rule, and (d) tabbed content switchers. Toward the middle the page shows an architecture diagram built from bordered rectangles and dashed connector lines (Primary/Replica boxes), then a dashboarded chart card, then more prose-and-checklist bands under underlined section labels (Uptime, Cost, Features). The page closes in a four/five-column footer built the same hairline-and-dash-rule way as the body. The deliberate choice is to treat every "card" as a bordered text container rather than a padded, shadowed surface — rejecting the elevated-card convention in favor of a flat document grid; this keeps density high and visually ties the marketing page to the product's technical, engineering-tool identity.

## Colors
`#FAFAFA` is the page/background role, confirmed by the pixel field's ~84% share; `#FFFFFF` (~9%) sits under logo tiles and card interiors as a marginally brighter surface. Text ink is `#414141` for body copy and `#111111`/`#000000` for headings and emphasis — the near-black is reserved for headline weight and the mid-page solid CTA. `#F35815` (orange, ~0.6% of page) and `#F2B600` (amber, ~0.5%) are the only saturated hues on the page: orange fills the hero-adjacent CTA button and appears in inline link/label accents; amber fills the top announcement-bar CTA exclusively. `#0B6EC5` is the sole link-text color, used at body size inline. `#C1C1C1` is muted/tertiary text (citation bylines, secondary labels), and `#414141` doubles as the universal 1px border color for logo tiles, dividers, and diagram boxes. There is no accent gradient, no tinted surface, no dark-mode band mid-page — color is entirely rationed to two CTA rectangles and inline links, leaving the rest of the page pure grayscale-on-off-white.

## Typography
The entire visible type system is one family at one size: `ui-monospace` at 16px, differentiated only by weight (700 for display/headline/label roles, 400 for body) and by color (near-black for headings, `#414141` for body, `#C1C1C1`/`#737373` for secondary). Line-height is a constant 1.5 throughout, giving the page a fixed, ledger-like vertical rhythm rather than a scaled type hierarchy — hierarchy here is carried by weight, underline, and a left color rule (`#F35815`) beside the H1, not by size jumps. `ui-sans-serif` appears as a secondary family for select inline UI chrome (the accent-sans token), a quiet contrast against the otherwise monospace voice; treat it as a rare accent, not a body face.

## Layout
Content sits in a fixed container (max-width 1280px). The base spacing scale runs 8/12/16/24/32/48px, visible in card padding (24px), list indents (16px left padding), and section gaps (48px). The dominant grid is the 5-column logo/partner grid (5 columns × 10 rows observed, each item ~20% width, gap "normal") — a strict uniform card grid, not bento or masonry: every tile is equal width and height, bordered in hairline `#414141`, with no spans or size variation anywhere in that block. A second, narrower 5-column grid (5 items, rows at 20% each) reappears for a related tile set. Elsewhere, layout drops to single-column stacked text: a 3-column quote/text grid (33/33/33 per row) and repeated full-width text rows (100% × 5, 99% × 3) show that most "sections" are simple vertical stacks of paragraph blocks under a rule-underlined label, not multi-column card layouts. The footer runs 5 columns of link lists inside a dashed-border frame. Responsiveness is not gradient-driven; it is document-flow — columns are expected to collapse to single-column stacks below the grid's fixed-width tiles.

## Components
- **Navbar**: fixed at top of content (not the announcement bar), 32px tall, background `#FAFAFA`, static (non-sticky in evidence), 15 total interactive items including a wordmark, dropdown-carrying "Platform" and "Resources" labels, plain text items (Documentation, Pricing, Migrate), a "Log in" and "Get started" ghost link pair, and one filled CTA. Ghost nav items: transparent fill, `#414141` text, 0px radius, 24px height, 0px padding, hover → `#000000`. The navbar CTA is a solid rectangle: `#F35815` fill, white text, 0px radius, 32px height.
- **Announcement bar**: full-bleed black strip above the navbar, containing body text plus one filled CTA rectangle — amber `#F2B600` fill, `#111111` text, 0px radius, 32px height, 0–8px padding. This amber button is a utility/announcement CTA, not the hero primary.
- **Hero primary CTA**: the orange navbar-style rectangle doubling as the page's highest-contrast action button in the first screen — `#F35815` fill, white text, 0px square corners, 32px height, 8px horizontal padding — sharp/square corner feel throughout, no pill anywhere except the token reserved for future pill use.
- **Mid-page primary CTA**: a larger, taller solid block appearing further down the page — `#111111` fill, `#FAFAFA` text, 0px radius, 56px height, 16px vertical padding — heavier and taller than the hero CTA, used to punctuate a content band rather than the top of the page.
- **Logo tile grid** (client/partner proof band): appears directly under the intro paragraph, arranged 5-per-row across roughly 10 rows; each tile transparent fill, 0px radius, 0px padding, 1px `#414141` hairline border shared between adjacent cells, anatomy is a single centered logotype filling most of the tile with no caption, heading, or body text — pure logo-mark, uniform card grid (not bento — no cell varies in span).
- **Tabbed content switcher**: a 3-way segmented control (labelled options) sitting above a text band mid-page; active tab shown as solid `#111111` fill, inactive tabs are bordered/transparent — used to swap the paragraph content beneath it (Vitess / Postgres / Neki equivalent structure).
- **Architecture diagram blocks**: bordered rectangle nodes (labelled boxes) connected by dashed vertical/branching rule lines, rendered in the same hairline `#414141` border and monospace label type as everything else — no illustration, no gradient, no icon; the diagram IS the graphic.
- **Chart/dashboard card**: a bordered flat panel containing a multi-series line chart (latency percentiles) with a colored legend row (green/blue/purple/orange dots) and a horizontal timeline scrubber above it; card itself is unstyled/transparent beyond its container border, all visual richness comes from the chart's own line-color coding.
- **Blockquote / testimonial**: appears 4–5 times through the page, each a simple left-rule `1px solid #414141` block with 16px left padding, quote text in body weight, byline in muted `#737373`/`#C1C1C1` below — no avatar, no card frame, no background tint.
- **Checklist bands**: bulleted lists (asterisk markers) of feature/spec lines mixing plain text and inline blue links, grouped under underlined section labels (uppercase-style headers with a bottom rule) — this is the primary content-density device for the Uptime/Cost/Security/Features sections, not cards.
- **Feature/gradient-textured card**: a rarer card variant carrying the hatched repeating-linear-gradient fill (see Graphics) as its background instead of a border — 0px radius, 24px padding, anatomy is heading + body paragraph only, no media; used sparingly (×4 across the page) to visually distinguish a callout block from the surrounding flat-text bands.
- **Footer**: transparent background, structured as a dashed-border frame containing 5 columns of underlined column headers (Company/Product/Resources/Courses/Open source) each with a stacked link list (32 links total), followed by a legal row and a social-icon text row — same hairline/dash-rule visual language as the rest of the page, no color, no logo mark repeated.

## Graphics & Effects
The only non-photographic graphic device is a four-directional hatch pattern built from repeating linear gradients: `repeating-linear-gradient(0deg, rgb(65,65,65), rgb(65,65,65) 12px, rgba(0,0,0,0) 12px, rgba(0,0,0,0) 16px)` layered with its 90deg, 180deg (unrotated), and 270deg counterparts. Each individual gradient layer measures ~0.7% of total page area; combined, this hatch fills the small set of feature-callout card backgrounds (×4 total instances) — a crosshatch/graph-paper texture in dark gray on the card's interior only, never the page background or hero. There is no gradient hero wash, no mesh gradient, no scrim, no glass/blur anywhere in the system. Elevation is communicated exclusively through hairline borders and dashed rule frames, never box-shadow. The architecture diagram and chart panel are the system's only "illustration" — flat vector-style boxes and a live-data line chart, both drawn with the same thin monochrome strokes as the rest of the page, keeping every visual element consistent with the document/console metaphor.

## Motion
Interactive-state changes use a single fast, uniform transition: `color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter 0.15s cubic-bezier(0.4, 0, 0.2, 1)` (also expressed as `all 0.15s cubic-bezier(0.4, 0, 0.2, 1)`). This is a snap-speed, ease-out-leaning curve applied uniformly across hover/focus states (nav link color shifts, button fills) — there is no stagger, no scroll-triggered reveal, and no spring/overshoot anywhere in evidence; motion exists only to make discrete state changes feel instant rather than to add expressive choreography.

## Guardrails
- Never introduce border-radius above 0px on any card, button, or tile except the reserved pill token — rounding any surface breaks the terminal/document identity.
- Never expand the orange/amber accent beyond the two CTA rectangles and inline links — do not tint section backgrounds or add a gradient hero wash.
- Never substitute a second typeface family for body or heading text — the system is monospace-only at a fixed 16px/1.5, with sans-serif reserved for a rare inline accent.
- Never add drop shadows, blur, or glass fills — elevation must come only from 1px hairline borders and dashed rule frames.
- Never turn the uniform logo grid into a bento/masonry layout — all tiles are equal-width, equal-height, unspanned.
- Keep the hatch-gradient texture confined to its small callout-card role; it must never scale up to a section or page background.
