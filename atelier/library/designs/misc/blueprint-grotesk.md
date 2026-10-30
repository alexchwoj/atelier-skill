---
version: "1"
name: "Blueprint Grotesk"
description: "Off-white technical-drawing system with square edge-to-edge geometry, a rationed vermillion accent, and monospace annotation set against oversized grotesk display type."
colors:
  background: "#F2F2F1"
  surface: "#EFEFEF"
  text-primary: "#282828"
  text-secondary: "#B3B3AF"
  accent: "#FA3600"
  disabled: "#B4B4B0"
  surface-alt: "#72726F"
  granite: "#626260"
  white: "#FFFFFF"
typography:
  display-lg:
    fontFamily: "BT Grotesk"
    fontSize: "62px"
    fontWeight: 700
    lineHeight: "1"
    letterSpacing: "-1.2px"
  headline-md:
    fontFamily: "BT Grotesk"
    fontSize: "44px"
    fontWeight: 600
    lineHeight: "1"
    letterSpacing: "-0.9px"
  body-md:
    fontFamily: "Geistmono"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: "1.3"
  label-mono:
    fontFamily: "Geistmono"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: "1.3"
spacing:
  base: "9px"
  gap: "18px"
  section-padding: "36px"
rounded:
  control: "99px"
  card: "99px"
  pill: "99px"
components:
  button-nav:
    background: "transparent"
    text-color: "#282828"
    radius: "0px"
    height: "37px"
    padding: "0px"
  button-utility:
    background: "#EFEFEF"
    text-color: "#FFFFFF"
    radius: "0px"
    height: "37px"
    padding: "0px"
  button-primary-hero:
    background: "#282828"
    text-color: "#F2F2F1"
    radius: "6px"
    height: "44px"
    padding: "0 24px"
  card-diagram-panel:
    background: "transparent"
    radius: "0px"
    padding: "0px"
    border: "1px solid #B3B3AF"
  card-icon-body:
    background: "transparent"
    radius: "0px"
    padding: "26.6667px 35.5556px 26.6667px 171.111px"
  card-media-bleed:
    background: "transparent"
    radius: "0px"
    padding: "0px"
---
# Blueprint Grotesk
Source: https://heronaiapp.com/

## Overview
This is a technical / schematic aesthetic — the visual grammar of architectural line-drawing and CAD annotation applied to a software marketing page. The system is Swiss-adjacent in its discipline (strict left alignment, monospace metadata blocks, ruled dividers) but rejects Swiss neutrality of color by rationing one saturated vermillion (`#FA3600`) as a single measurement line, label, or border accent per screen. The base is a warm off-white paper tone rather than pure white, giving the whole page the feel of a plotted drawing sheet rather than a digital UI. Everything is edge-square: zero border radius on every measured navbar, button, and card, broken only by a soft pill token (`99px`) reserved for isolated capsule elements. Monospace annotation (`Geistmono`) supplies system/status voice — key:value labels, numbered init sequences, percentage call-outs — while an oversized grotesk (`BT Grotesk`, weight 700, tight `-1.2px` tracking) carries all display statements at a scale that dominates its column.

## Composition
The first screen is a wireframe architectural elevation rendered in thin gray strokes, floating right-of-center against the paper background, crossed by a single horizontal vermillion rule tagged with a small monospace percentage label at its left end. Large-scale grotesk display text is pinned to the bottom-left corner, stacked three to four lines tall, left-aligned and full-bleed to the margin. A monospace data block sits bottom-right, structured as a label/value ledger (type, founded, focus, location) beside a second monospace column listing a numbered initialization sequence — the page opens like a spec sheet, not a hero banner. Moving down the page, density increases: the measured evidence shows repeating icon+body-text rows lined up in strict single-column stacks (rows of 100/100/100/100…), full-width bleed panels pairing left-bled media with body copy, and a denser multi-row card cluster near the page end whose column widths vary sharply (6/14, 4, 6, 25, 23, 7, 7, 5 percent splits) — an asymmetric, almost ledger-like grid rather than uniform cards. The deliberate choice is restraint: no color fields, no card shadows or radius anywhere in the flow, rhythm is carried entirely by rule lines, monospace labels, and generous vertical stacking — the alternative (a saturated bento of colored panels) is explicitly rejected in favor of a paper-and-ink diagram feel.

## Colors
`#F2F2F1` (background/paper) and `#FFFFFF` (63.9% declared area) split the neutral base between the page canvas and white card/panel fills layered over it — treat white as the elevated surface tone, paper as the page. `#282828` (21.8% area) is the primary ink for display type, body copy, and line strokes — near-black but warm, never pure black. `#B3B3AF` is the structural gray: borders, secondary/muted text, hairline rules (7.2% area). `#FA3600` is the signature accent (6.9% area) — reserved for a single measurement rule, a label, or a border moment per screen, never used as a fill; it is rationed to thin lines and small type, not blocks. `#B4B4B0` marks disabled states, `#EFEFEF` is the utility button surface. Nothing on the page carries a saturated fill beyond the vermillion line — no gradients, no colored card backgrounds — keeping the palette functionally monochrome with one alarm-red pen stroke.

## Typography
Display statements use `BT Grotesk` at 700 weight, 62px, line-height 1, tracking pulled in to `-1.2px` — set for maximum density at large scale, stacked tight with no leading room, always left-aligned. A secondary grotesk step at 44px/600/`-0.9px` handles section headlines one register down. Body and all annotation/label work runs in `Geistmono` at 16px/500/1.3 line-height (with a smaller ~13px label-mono step for dense key:value ledgers) — monospace is the system's voice for anything that reads as data, status, or metadata, sharply contrasting the humanist grotesk display. There is no serif anywhere; the pairing logic is strictly grotesk-for-statement, mono-for-fact.

## Layout
Content is capped at a 927px measure for reading columns even though the page runs wide — diagrams and hero graphics are allowed to float outside that column. Spacing runs on a tight base unit (steps of 0, 6, 9, 18, 27, 36px), producing a dense, low-air rhythm rather than generous whitespace. The navbar is edge-to-edge and full-width — 1902px measured at a ~1920 viewport (99% of viewport, 9px insets each side), 75px tall, square on all four corners (0px radius throughout), sticky, with a transparent fill so the page background shows through beneath it. Card grids are strictly single-column stacks for most repeating families (icon+body rows, full-width bleed panels) — no side-by-side multi-card rows for these — while one measured cluster runs a 12-column grid at 3 items with a 50/50 then 50 split, and the densest end-of-page card family breaks into uneven fractional columns (6/14, 4, 6, 25, 23, 7, 7, 5). Nothing carries corner radius or padding at the card level except the icon+body family, which uses an unusually deep left inset (171.111px) to clear space for a leading icon glyph.

## Components
- **Navbar**: edge-to-edge square bar spanning full viewport width, 75px tall, transparent background, sticky on scroll, square on all four corners (0px radius each), holding 14 items total across logo, link cluster, and trailing CTA controls.
- **Nav/utility button (transparent variant)**: appears ×6 across the navbar/header row; transparent fill, `#282828` text, 0px radius (sharp), 37px height, zero internal padding — set flush against neighboring items, function as text-only nav links.
- **Nav CTA button (filled utility variant)**: single instance in the header row; `#EFEFEF` fill, white text, 0px radius (sharp), 37px height — the header's one filled control, functioning as a secondary/utility action rather than the page's primary CTA.
- **Hero primary CTA**: the emphasized solid control beneath the hero headline, observed as a dark near-black (`#282828`) filled pill/rectangle with light paper-toned text, corners slightly rounded (~6px, observed) — distinct from every measured transparent or `#EFEFEF` nav button; this is the one button the eye lands on first and should be rebuilt with its own token, not the header's utility fill.
- **Architectural diagram panel**: the first-screen hero graphic — a thin-stroke wireframe elevation drawing floating right of the display headline, crossed by one horizontal vermillion measurement line carrying a small monospace percentage tag at its left terminus; occupies roughly the right two-thirds of the hero's vertical band.
- **Data ledger block**: bottom-right of the hero, a two-column monospace arrangement — a label:value ledger (dotted-rule header, then stacked key/value rows) beside a numbered system-initialization list; sets the page's "console readout" voice.
- **Icon + body-text row family**: repeats ×8, single-column stack (each row 100% width), transparent background, 0px radius, deep asymmetric padding (`26.6667px 35.5556px 26.6667px 171.111px`) that reserves a wide left gutter for a leading icon glyph ahead of the body copy.
- **Full-width bleed panel family**: repeats ×4, each row 100% width, transparent, 0px radius, 0px padding; anatomy is a full-bleed left-side image/illustration paired with body text filling the remainder — a strict single-column stack, no side-by-side pairing.
- **Media-top-bleed card family**: repeats ×8; media fills the top of each card edge-to-edge with body content below; transparent fill, 0px radius, 0px padding.
- **Composite tile panel family**: repeats ×6; full-width panel combining an icon, body text, and an embedded cluster of 4 smaller tiles — the most structurally complex repeating family, functioning as a mini feature-grid nested inside a full-width band.
- **Dense fractional card cluster**: 13-item family near the page end with sharply uneven column widths per row (6% / 14%, 4%, 6%, 25%, 23%, 7%, 7%, 5%) — a ledger-like asymmetric grid, transparent/0px-radius/0px-padding throughout; rebuild the exact width ratios per row, not a uniform grid.
- **12-col feature grid**: 3 items, gap `0px 22.2222px`, rows split 50/50 then a single 50 — a two-up pairing followed by one half-width item, not a symmetric 3-up.
- **Footer**: transparent background, 23 links, laid out as a dense flat link list rather than a boxed panel — consistent with the page's zero-chrome, zero-radius language throughout.

## Graphics & Effects
The only measured shadow (`rgb(0, 0, 0) 0px 8.88889px 0px -2.22222px`) is a flat, hard-edged offset shadow with no blur — used sparingly under a raised element to read as a thin drop-ledge rather than soft elevation; there is no glassmorphism or blur anywhere in the system. A canvas element is present (interactive/generative content) and must be rebuilt with a static gradient or illustrated stand-in — likely animating part of the wireframe diagram or a data-visualization surface. No full-screen gradients exist; color is delivered entirely through the single vermillion accent line and flat neutral fills. Texture reads as a faint paper-grain overlay across the background — a subtle noise consistent with the off-white `#F2F2F1` base giving it a plotted/printed-sheet quality rather than a flat digital fill.

## Motion
Transitions are quick and mechanical: `transform 0.4s ease` and `opacity 0.4s ease` / `color 0.4s ease` handle simple state changes, while a springier `transform 0.48s cubic-bezier(0.625, 0.05, 0, 1)` drives more deliberate reveals — a curve with a sharp initial pull and gentle settle, suited to panel or diagram-element entrances. Keyframe animations include continuous `spin` and `rotate` loops (likely small diagram or icon elements), `marqueeLeft`/`marqueeRight` for horizontal scrolling rails (logo strip or tag rail), and `fadeLoop` for ambient pulsing emphasis. Scroll behavior is driven by `gsap` + `ScrollTrigger` with `lenis` smooth-scroll — expect scroll-linked reveals and eased inertial scrolling rather than native scroll-snap.

## Guardrails
- Never apply border-radius to navbar, buttons, or cards beyond the explicit hero-CTA and pill exceptions — the system's identity is sharp, square edges.
- Never fill the hero background with a full-screen gradient — color stays rationed to thin lines, labels, and single accent strokes against the paper-toned base.
- Never substitute the transparent nav buttons' or `#EFEFEF` utility button's values for the hero's primary CTA — the primary is a separate dark solid pill, observed not measured.
- Never render repeating card families as uniform equal-width grids — reproduce their exact asymmetric row splits (6/14, 4, 6, 25, 23, 7, 7, 5 and similar).
- Never substitute a serif for the mono/grotesk pairing — annotation and data are always monospace, statements are always grotesk.
- Never lose the deep asymmetric left padding (171.111px) on icon+body rows — it is structural, not incidental spacing.
