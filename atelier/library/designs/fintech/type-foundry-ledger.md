---
version: "1"
name: "Type-Foundry Ledger"
description: "Cream-paper, ink-black type-catalog system: an edge-to-edge blackout navbar block, a repeating full-bleed specimen-row list, and giant single-word display specimens set in the very families the page ships."
colors:
  background: "#FFFFE3"
  surface: "#10100E"
  text-primary: "#10100E"
  text-secondary: "#C0C0AB"
  border: "#30302B"
  border-subtle: "#C0C0AB"
  accent-mint: "#C4FDC7"
  accent-blush: "#FFCFCF"
  accent-amber: "#FFF1B5"
  accent-focus-ring: "#3C81F5"
  footer-bg: "#F8F8DD"
typography:
  specimen-display:
    fontFamily: "Satoshi Variable"
    fontSize: "210px"
    fontWeight: 700
    lineHeight: "1.0"
  body-md:
    fontFamily: "Passenger Sans"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
  label-mono:
    fontFamily: "Passenger Sans"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: "1.4"
  accent-serif:
    fontFamily: "Clash Display Variable"
    fontSize: "56px"
    fontWeight: 600
    lineHeight: "1.05"
  accent-grotesk:
    fontFamily: "General Sans Variable"
    fontSize: "40px"
    fontWeight: 500
    lineHeight: "1.1"
spacing:
  base: "5px"
  gap: "20px"
  section-padding: "40px"
  hairline: "2px"
rounded:
  control: "9999px"
  card: "9999px"
  pill: "9999px"
components:
  button-primary-navlink:
    background: "#10100E"
    text-color: "#FFFFE3"
    radius: "0px"
    height: "160px"
    hover-background: "#191815"
  button-toggle-outline:
    background: "transparent"
    text-color: "#10100E"
    radius: "0px"
    height: "36px"
    border: "1px solid #C0C0AB"
  button-pill-track:
    background: "#FFFFF0"
    text-color: "#10100E"
    radius: "9999px"
    height: "6px"
    border: "1px solid #30302B"
  card-specimen-row:
    background: "transparent"
    radius: "0px"
    padding: "0px"
    border-bottom: "1px solid #C0C0AB"
  card-feature-triptych:
    background: "transparent"
    radius: "0px"
    padding: "0px"
---
# Type-Foundry Ledger
Source: https://www.fontshare.com/

## Overview
This is a Swiss/International-leaning specimen-catalog aesthetic dressed in an unexpected cream-paper palette instead of white: a warm, near-uniform `#FFFFE3` field (91%+ of rendered pixels) standing in for gallery-wall paper, with ink-black `#10100E` doing all typographic and structural work. There is no gradient, no shadow, no card elevation anywhere — flatness and hairline rules carry the entire hierarchy, in the tradition of a type-foundry ledger or a printed specimen book rendered as a web list. The one saturated interruption is a solid-black square block sitting in the navbar, functioning like an ink stamp against the paper field. Personality tags (mint, blush, amber swatches) exist only as small accent fills, never as backgrounds.

## Composition
The page opens with a wordmark at top-left and a squared-off, edge-to-edge black block occupying the navbar's left segment — an intentional, jarring solid-fill against the paper field, immediately signaling "control panel," not "hero." Below the navbar, a dense filter strip (search, category/property/personality selectors, a size slider reading a numeric px value, and text-mode toggles for Cities/Excerpts/Names) sits in a single flat row with hairline dividers, no borders around fields — a deliberately un-chromed control bar. The main body is a repeating vertical list of specimen rows: each row shows a font's family name, a live giant-scale rendering of a single word set in that font (the compositional set piece, scaled to the slider's px value), a foundry credit line, and metadata (style count, Variable/Static tag, Closed/Open Source tag) pinned to the row's right edge. This rejects a grid-of-cards approach entirely in favor of a single-column, full-bleed list — the deliberate choice is legibility-at-scale per specimen over density-of-comparison; the alternative (a masonry/bento grid of small preview cards) is explicitly not used. Rhythm is metronomic: hairline rule, whitespace, giant word, credit line, hairline rule, repeat — for at least 17 rows before the footer.

## Colors
`#FFFFE3` is the background/surface role, confirmed dominant in the pixel field (~91%, with `#FFFFF0`/`#F0F0D8` as adjacent lighter/cooler paper variants — likely toggle-state or hover paper tones). `#10100E` (also tokenized `--black-b-color`) is text-primary and the sole heavy-fill color, used for the navbar's blackout block and all specimen headlines — it is the system's only true "ink." `#C0C0AB` (`--gray-b-color`) is text-secondary/muted, used for metadata labels, placeholder copy, and hairline borders. `#30302B` (`--gray-d2-color`) is a darker structural border/rule tone used more sparingly than the lighter gray. `#E8E8CF` (`--gray-l1-color`) and `#606055` (`--gray-d1-color`) sit as intermediate neutrals for secondary UI chrome. Three small tag/swatch hues — `#FFF1B5` amber, `#FFCFCF` blush, `#C4FDC7` mint — appear only as tiny personality/category indicator dots, never as fills of any size; this is the palette's entire rationed color, deliberately kept off backgrounds, buttons, and type. A single focus-ring blue `#3C81F5` exists purely as an interaction-state token, invisible until a control is focused. The footer breaks from the body's paper tone to a slightly cooler, flatter cream, `#F8F8DD`.

## Typography
Body and UI chrome run in Passenger Sans at 16px/400, ink-colored, doing all interface labeling — search field, filters, credit lines. The star of the page is the specimen-display token: single words set at the slider-controlled scale (measured up to 210px) in each font's own family, so Satoshi renders "Satoshi" at ~210px/700, filling the row's full width and towering over every neighboring line of chrome. Accent families General Sans Variable and Clash Display Variable appear as alternate specimen faces within the same giant-word slot, not as separate UI text — so treat them as swappable specimen fonts, each taking the display role when its row is active. Metadata (style count, Variable/Closed Source tags) runs small and light in the muted gray, right-aligned against the giant word for contrast of scale.

## Layout
The structure is a single-column full-bleed list (1 column, full-width rows, no gutters) rather than a multi-column grid — confirmed by the measured 1-column/1-item and 8-column/1-item grid reads, meaning individual rows internally use flexible multi-part alignment (label · giant word · metadata) without a repeating card boundary. The one true grid is the top navbar/hero utility strip: three cards at 100%/100%/100% row widths — full-width stacked panels, not side-by-side columns, each holding an icon plus body text. Spacing runs on a tight 5px-multiple scale (5, 10, 15, 20, 40px), giving the filter bar and metadata a dense, tabular, almost spreadsheet-like compactness that contrasts against the oversized specimen type. Nothing exceeds a soft implied max-width beyond the viewport itself — the list is edge-to-edge, paper-to-paper.

## Components
- **Navbar** — edge-to-edge square bar, full 1920px viewport width (0px inset either side), 160px tall, all four corners 0px radius, transparent overall background except for a solid `#10100E` blackout block filling its leftmost "Fonts" segment (with a "100" count beneath in ink-on-black); 3 primary items total (Fonts-block, Pairs, Licenses) plus a right-aligned hamburger-style rule icon and a muted "No styles selected" status label at far right. No pill, no shadow, no floating inset — a hard-edged static rectangle flush to the viewport top.
- **Filter/control strip** — one full-width row directly under the navbar: a text search field, three chevron-triggered dropdown pills (Categories, Properties, Personality), a numeric size readout ("210px") beside a thin horizontal slider track (pill-radius 9999px handle), three text-alignment icon toggles, a light/dark contrast toggle (two small circles), and a "Reset All" text link — all transparent-background, 0px radius, separated only by hairline verticals.
- **Mode-toggle row** — a second thin strip switching specimen text between Cities/Excerpts/Names (Names bold-active), flush left under the "Your Text" custom-input line, sharing the same hairline-rule language.
- **Specimen-row card family (×17 near page end, ×1 pattern repeated)** — full-width transparent panels, 0px radius, 0px padding, separated by a `#C0C0AB` hairline bottom border; anatomy top-to-bottom: bold small-caps family name + favorite-star icon at top-left with style-count/Variable/Source-type tags at top-right, then the dominant giant single-word specimen rendered in that font filling most of the row's height, then a small muted foundry-credit caption bottom-left. This is the page's core repeating organism.
- **Feature/utility triptych (×3, first screen)** — three full-width stacked panels (100%/100%/100%), transparent, 0px radius/padding, each pairing a small icon with a short line of body text — introductory utility callouts rather than marketing cards.
- **List/Grid view toggle & sort controls** — small text-link cluster ("List view / Grid view", "Top 20 / Hot 20 / Variable", "Fontshare Originals / Shortlisted", "New / Popular / Hot / Alphabetical") — plain text buttons, no fill, no border, active state indicated by bold weight only (e.g., "Popular" reads heavier/darker than siblings).
- **Footer** — flat `#F8F8DD` full-width band, 0 links rendered, sitting as the terminal paper-toned block beneath the last specimen row, radius 0px throughout.

## Graphics & Effects
There are no gradients, no blurs, no glassmorphism, and no photographic imagery anywhere in this system — a deliberate rejection of depth effects in favor of flat ink-on-paper contrast. The only "graphic" elements are the live specimen glyphs themselves (giant black type rendered at slider-controlled scale) and small solid-color personality-tag dots (amber/blush/mint). Elevation is communicated purely through weight and fill, never shadow: the navbar's solid black block reads as foreground precisely because it is the only saturated fill against the paper field. Hairline rules (`#C0C0AB`, ~1px) are the sole separators between rows and control-bar segments — no drop shadows, no card borders beyond these single-pixel lines.

## Motion
All interactive transitions are fast and functional, not decorative: a shared `background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter 0.15s cubic-bezier(0.4, 0, 0.2, 1)` covers hover/focus state changes on controls, with simpler `color 0.15s ease` and `background-color 0.15s ease` on text links. Keyframe animations (`spin`, `ping`, `pulse`) exist only for small loading/status indicators, not for page-level entrances — there is no scroll-triggered reveal or parallax; the system's motion signature is instant, snappy micro-feedback (150ms) on discrete controls, never on the specimen rows themselves, which appear immediately and statically.

## Guardrails
- Never introduce shadows, gradients, or rounded cards (radius stays 0px) — this system's entire authority comes from flat ink-on-paper contrast and hairline rules.
- Never let the amber/blush/mint accents fill a background, button, or large surface — they are dot-scale personality tags only.
- Never shrink the specimen word below its row-dominant scale; the giant single-word rendering (up to 210px) is the compositional anchor, not a subordinate label.
- Keep the navbar's black block confined to its single segment — it must not spread into a full-width dark navbar, which would erase the paper-vs-ink contrast.
- Do not convert the single-column specimen list into a multi-column card grid; the row-by-row full-bleed list is structural, not incidental.
- Preserve cream `#FFFFE3` (not pure white) as the page background; substituting true white flattens the paper-stock character.
