---
version: "1"
name: "Clinical split slide"
description: "Light editorial slide system pairing a heavyweight black display type with a bounded diagram panel on a near-white canvas; one cobalt accent rations itself to labels, index numerals, and legend dots."
colors:
  background: "#E9ECEE"
  surface: "#FFFFFF"
  text-primary: "#16191C"
  text-secondary: "#1C39C4"
  accent: "#1C39C4"
  accent-border: "#1E37C3"
  tag-orange: "#F4A261"
  tag-yellow: "#E9C46A"
typography:
  display-lg:
    fontFamily: "Public Sans"
    fontSize: "110px"
    fontWeight: 800
    lineHeight: "0.9"
    letterSpacing: "-5.5px"
  body-md:
    fontFamily: "Public Sans"
    fontSize: "30px"
    fontWeight: 300
    lineHeight: "1.63"
  label-mono:
    fontFamily: "ui-sans-serif"
    fontWeight: 600
    style: "uppercase, wide letter-spacing, used for eyebrow and diagram micro-labels"
spacing:
  base: "8px"
  gap: "16px"
  inset-sm: "12px"
  inset-md: "40px"
  section-padding: "80px"
rounded:
  control: "8px"
  card: "16px"
  pill: "9999px"
components:
  diagram-panel:
    background: "#FFFFFF"
    radius: "16px"
    padding: "0px"
    shadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px"
  legend-card:
    background: "#FFFFFF"
    backdropFilter: "blur(4px)"
    radius: "8px"
    padding: "12px"
    border: "1px solid #E9ECEE"
    text-color: "#16191C"
  label-tag-orange:
    background: "#F4A261"
    radius: "0px"
    padding: "8px 12px"
    text-color: "#16191C"
  label-tag-yellow:
    background: "#E9C46A"
    radius: "0px"
    padding: "8px 12px"
    text-color: "#16191C"
  nav-dot:
    background: "#1C39C4"
    inactive-background: "#D8D8D8"
    radius: "9999px"
    height: "8px"
---
# Clinical split slide
Source: https://p.superdesign.dev/draft/789f3766-c49b-45cd-9428-31b0a8ede953

## Overview
This is a presentation-deck aesthetic in the Swiss/editorial register: a strict two-column asymmetric split, an oversized black-on-light display headline carrying nearly all the visual weight, and a single bounded white panel holding dense, diagrammatic content. The palette is otherwise near-monochrome — ink, white, and a soft off-white canvas — with one cobalt-blue accent rationed to a handful of functional marks (eyebrow label, index numeral, legend dots), plus two muted warm tags (orange, yellow) that exist only to tint categories inside the diagram. It reads as restrained, technical, and content-first rather than decorative.

## Composition
The frame splits left/right: a vertical hairline divider sits a little right of center, separating a typographic left column from a contained diagram card on the right. Top-left carries a small tracked eyebrow label with a short horizontal rule trailing it; beneath sits the two-line display headline at extreme weight and tight negative tracking, then a lighter, larger-than-usual body sentence as subhead. The bottom-left corner holds a slide-index treatment: a large numeral in the accent color paired with a muted total, divided by a slash, with a thin rule continuing rightward — a pagination device, not a page footer. The right column is a single self-contained card: a tall white rounded rectangle with a soft drop shadow, interior-cluttered with a labeled anatomical diagram, small coded tags, a floating legend box in the top-right corner, and fine leader-lines connecting labels to illustration points. Top-right of the whole frame, four small dots mark multi-slide position. The deliberate choice is radical asymmetry and whitespace on the left versus maximal information density on the right — rejecting a centered, evenly-balanced hero layout in favor of a dashboard-like content panel beside pure typographic air.

## Colors
Background is a soft off-white (`#E9ECEE`, ~75% declared area and dominant across the pixel field alongside pure white), functioning as the page/surface-0; the diagram panel is pure `#FFFFFF`, elevated above it with shadow, acting as surface-1. Text ink is near-black (`#16191C`, with `#000000` for the heaviest display strokes) — doing the compositional heavy lifting since there is no hero imagery or gradient. Cobalt (`#1C39C4`, border variant `#1E37C3`) is the single accent: it colors the eyebrow label, the slash-numeral pagination, legend bullet dots, and the leader-line endpoints in the diagram — never fills a large area. Two desaturated warm tags, `#F4A261` (orange) and `#E9C46A` (yellow), exist solely as small coded-category chips inside the diagram card, functioning as semantic/grouping color rather than brand color. Everything else — body copy, dividers, panel chrome — is deliberately left achromatic.

## Typography
Public Sans carries the entire system at two extremes: a display weight of 800 at 110px with 0.9 line-height and -5.5px tracking for the headline (set in uppercase in the observed instance), and a light 300 weight at 30px with 1.63 line-height for body/subhead copy — a stark weight contrast rather than a size-only hierarchy. A third role, a compact uppercase label-mono treatment (ui-sans-serif, semibold, wide tracking), serves the eyebrow text and every micro-label inside the diagram card (section tags, legend captions), keeping the dense interior legible at small scale against the expressive display type outside it.

## Layout
No conventional grid of repeating cards is present; the composition is a two-pane split within a single full-bleed canvas, with the diagram card behaving as a fixed-width floating object (not a responsive multi-column grid). Spacing follows an 8px-rooted scale (8, 12, 16, 40, 80px): generous 80px-class section padding frames the whole slide, inner diagram labels use tight 8–12px padding, and the legend/tag chips use small uniform insets. Card density inside the diagram is high — stacked labeled groups (mouth, salivary glands, small intestine, large intestine) each rendered as their own small sub-card with a tinted header and a list of plain-text sub-items below, wired to the illustration by thin connector lines. The outer panel radius is 16px; inner sub-group tags are unrounded (0px), creating a two-tier corner language: soft outer container, sharp functional labels inside.

## Components
- **Eyebrow label** — top-left of the left column; single instance; plain text, uppercase, wide tracking, cobalt-tinted-adjacent ink color, paired with a thin horizontal rule extending right to the divider.
- **Display headline** — left column, below eyebrow; one two-line block; 110px/800/0.9/-5.5px Public Sans in near-black; no background, no container — pure type as hero graphic.
- **Subhead sentence** — directly under headline; one instance; 30px/300 Public Sans, lighter ink, generous line-height, roughly a third the visual weight of the headline.
- **Pagination index** — bottom-left; one instance; large cobalt numeral + slash + muted gray total numeral, with a thin horizontal rule continuing to the right edge of the column — functions as a progress/position marker, not a true component button.
- **Slide-position dots** — top-right corner of the frame; row of 4; small filled circles, radius 9999px, one dot in cobalt (current), remaining in light gray (inactive).
- **Diagram panel (card)** — right column; one instance, full column height; surface `#FFFFFF`, radius 16px, shadow `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px`, no border; interior top-to-bottom: a tinted category tag, a central vertical illustration with fine black leader-lines fanning to text labels on both flanks, repeating tag-plus-label-list groups stacked down the panel, with a floating legend card pinned near the top-right corner.
- **Category tag chips** — inside the diagram panel; multiple (one per anatomical zone); solid flat fills in `#F4A261` or `#E9C46A`, radius 0px, small padding, dark text, each followed by a plain-text list of sub-items in the same ink color at smaller size.
- **Legend card** — floating, top-right inside the diagram panel; one instance; translucent-white glass chip, `backdrop-filter: blur(4px)`, radius 8px, thin light border, containing an uppercase label heading and a short list of rows each prefixed with a small colored dot (cobalt, amber, blush) naming a coded category.
- **Divider rule** — a single thin vertical hairline separating the two columns, plus matching thin horizontal rules beside the eyebrow and the pagination index.

## Graphics & Effects
The only elevation effect is the diagram panel's drop shadow, verbatim `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px` — a soft, deep-set shadow lifting roughly the right 45% of the frame off the page background; nothing else in the composition carries shadow. The legend chip alone uses `backdrop-filter: blur(4px)`, a small glassmorphic treatment applied to a corner element no larger than roughly a tenth of the panel — not a full-panel glass effect. No gradients, noise, or photographic texture are present; the diagram artwork itself is flat vector illustration with pastel organ fills and black hairline connector strokes, functioning as a static infographic rather than any live canvas surface.

## Motion
The only declared transition is `opacity 0.1s ease-in` — a near-instant, linear-feeling fade, consistent with slide-to-slide content swaps or hover-state label reveals rather than any expressive easing. Motion in this system should stay brief and utilitarian: fast fades, no slides, scales, or springs, keeping the diagram's dense label set from feeling animated or playful.

## Guardrails
- Never fill the diagram panel or page background with a gradient — color stays flat, with cobalt rationed to small functional marks only.
- Do not round the inner category tags; keep them sharp (0px) against the panel's soft 16px outer radius to preserve the two-tier corner language.
- Do not shrink the headline-to-body weight contrast — the system depends on 800-weight display type against 300-weight body copy, not on size alone.
- Keep the shadow soft and panel-only; do not add shadow to type, dividers, or the pagination numerals.
- Preserve the asymmetric split — do not center or evenly balance the two columns.
