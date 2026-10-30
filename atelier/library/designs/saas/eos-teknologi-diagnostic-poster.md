---
version: "1"
name: "Cyan-Cobalt Ledger"
description: "A cobalt-to-cyan radial-gradient panel bearing stacked glass status rows, condensed display type in cyan-on-white, and a numbered-badge card rhythm."
colors:
  background: "#FFFFFF"
  background-deep: "#050A30"
  background-glow: "#00F2FF"
  surface-card: "#FFFFFF"
  text-primary: "#050A30"
  text-on-blue: "#FFFFFF"
  accent: "#22D3EE"
  accent-strong: "#00F2FF"
typography:
  display-lg:
    fontFamily: "Clash Grotesk"
    fontSize: "92px"
    fontWeight: 700
    lineHeight: "0.9"
    letterSpacing: "-4.6px"
  body-md:
    fontFamily: "Satoshi"
    fontSize: "32px"
    fontWeight: 500
    lineHeight: "1.5"
  body-caption:
    fontFamily: "Satoshi"
    fontSize: "26px"
    fontWeight: 500
    lineHeight: "1.4"
  label-mono:
    fontFamily: "ui-sans-serif"
    fontSize: "20px"
    fontWeight: 700
    note: "numeric badge digits, tabular-feeling, set inside filled squares"
spacing:
  base: "32px"
  gap: "48px"
  section-padding: "64px"
rounded:
  control: "16px"
  card: "32px"
  pill: "9999px"
components:
  badge-numeral:
    background: "#0066FF"
    text-color: "#FFFFFF"
    radius: "16px"
    height: "64px"
  card-status-row:
    background: "#FFFFFF"
    backdrop-filter: "blur(10px)"
    radius: "32px"
    padding: "32px"
    shadow: "rgba(0, 0, 0, 0.15) 0px 20px 40px 0px"
    border: "none"
  card-status-row-active:
    background: "#FFFFFF"
    backdrop-filter: "blur(10px)"
    radius: "32px"
    padding: "32px"
    shadow: "rgba(0, 0, 0, 0.15) 0px 20px 40px 0px"
    border-accent: "#22D3EE"
    note: "outset cyan edge-glow on right side marking the emphasized row"
---
# Cyan-Cobalt Ledger
Source: https://p.superdesign.dev/draft/189f20bc-3fa5-4298-81d1-3250f98e3ec9

## Overview
This is a dark-mode-adjacent, brand-saturated panel system: a single full-bleed cobalt-to-cyan radial gradient carries the entire surface, and legibility is restored through stacked white glass cards rather than any lightening of the background. The aesthetic reads as SaaS-operational — condensed, all-caps display type paired with a soft-cornered card ledger — closer to a dashboard status feed styled as a promotional panel than a marketing hero. The dominant visual grammar is a numbered badge + label + sublabel row repeated three times, escalating in visual emphasis toward the middle item.

## Composition
The frame is split in half: a fully saturated colored panel occupies the left/primary field while the right half of the canvas is left bare white — an intentional asymmetric bleed rather than a centered, contained composition. This rejects the more conventional full-width hero; instead the product-panel is treated as an inset artifact floating against negative space, foregrounding the panel as a discrete object. Within the panel, hierarchy runs strictly top-to-bottom: a three-line condensed headline (two lines white, third line cyan) sits at the top third, a single sentence-case supporting line follows, then a vertical stack of three status cards fills the lower two-thirds. Density is low at the top (generous line-height gaps between headline rows) and increases going down as the cards pack tightly with only small gaps between them.

## Colors
The background is a single radial gradient — `radial-gradient(circle at 0% 0%, rgb(0, 242, 255) 0%, rgb(0, 102, 255) 45%, rgb(5, 10, 48) 100%)` — anchoring cyan at the top-left origin, transitioning through mid-tone blue (#0066FF, ~4-5% of pixel field at its purest sampled patch) and deepening to near-navy-black (#050A30) toward the bottom-right corner; this single gradient is the dominant colored mass of the composition, reading as roughly 40% of the visible frame. Pure white (#FFFFFF, ~59-61% of pixels) is the true majority color, split between the card surfaces and the untouched right-hand negative space — confirming this is a light-card-on-blue system, not an all-blue one. Cyan (#22D3EE / #00F2FF) is rationed to exactly two places: the third headline line and a thin glowing edge on the middle status card — never washed across large fields. Body copy sits in white directly on the gradient; ink inside the cards is near-black navy (#050A30) for headings and mid-blue (#0066FF) for sublabels, giving every card a two-tone internal hierarchy.

## Typography
Display type is Clash Grotesk at 92px/700, line-height 0.9, tracking pulled tight at -4.6px — set in full uppercase in a squared-off condensed cut for maximum impact at three stacked lines, with the third line breaking to the cyan accent. Body-supporting copy under the headline uses Satoshi at a sentence-case, mid-size body-md rhythm (32px/500) for the single instructional line, then drops to a caption-scale Satoshi (26px/500) for the sublabel text inside each card. Card headings use a smaller-scale relative of the display face — bold, condensed, uppercase — kept short (single words), while the numeral badges use a bold sans (ui-sans-serif) at a compact size, centered inside their own tinted square.

## Layout
The panel is not a multi-column grid but a single-column vertical stack: headline block, one-line instruction, then three full-width status cards. Each card spans the full measured container width, with the second card the outlier — inset slightly narrower and shifted, creating a subtle stair-step/offset rather than uniform alignment; the measured row heights are equal at 88px-equivalent proportional bands, confirming a uniform three-row stack (not a grid) with one row's content intentionally floated forward via elevation. Spacing follows a coarse rhythm of 32px and 64px units: internal card padding is 32px on all sides, gaps between stacked cards run near 48px, and radius is a generous 32px on cards versus 16px on the small numeral badges. This is a fixed single-panel composition rather than a responsive multi-breakpoint grid — the right-hand blank half implies the panel itself is the fixed-width unit, floating in a larger canvas.

## Components
- **Status-row card (×3, vertically stacked)** — appears as the sole content system beneath the headline. Surface: `#FFFFFF` with `backdrop-filter: blur(10px)`, radius `32px`, padding `32px`, shadow `rgba(0, 0, 0, 0.15) 0px 20px 40px 0px`, no border. Anatomy left-to-right: a numeral badge (bold digit in a filled `#0066FF` square, radius `16px`, white text) sits at the far left; to its right a two-line text stack — an uppercase condensed heading in near-black, followed by a smaller mid-blue sentence-case sublabel. Rows are near-identical in structure (three equal proportional bands), differentiated only by their numeral and copy.
- **Emphasized status-row card (×1 of the three, the middle row)** — same glass-white surface and shadow as its siblings but rendered slightly larger/wider with an added cyan (`#22D3EE`) glow-edge along its right border, and offset horizontally from the other two rows — the sole card visually promoted to "active/highlighted" state within the stack, signaling selection or focus without any color fill change to its body.
- **Numeral badge (×3, one per card)** — a small filled square, `#0066FF` background, `16px` radius, bold white numeral centered, sized to sit flush against the card's left padding; acts as an ordinal/status marker rather than a button.
- **Headline block (single instance, top of panel)** — not a card; three stacked lines of uppercase condensed display type directly on the gradient, first two lines white, final line cyan, functioning as the panel's sole eyebrow-to-headline unit with no separate eyebrow label.
- **Support line (single instance, below headline)** — one sentence-case white line in Satoshi body-md, acting as the instructional lead-in to the card stack below; no icon or chip attached.

## Graphics & Effects
The entire panel background is one radial gradient, `radial-gradient(circle at 0% 0%, rgb(0, 242, 255) 0%, rgb(0, 102, 255) 45%, rgb(5, 10, 48) 100%)`, originating cyan-bright at the top-left corner and darkening toward navy-black at the bottom-right — this covers 100% of the panel area (not the full canvas, since the right half remains plain white). Layered faintly over the gradient's lower-right region is a soft geometric linework texture — thin curved and angular pale strokes, near-invisible against the dark gradient tail, adding subtle depth without competing with the cards. Each card carries a soft drop shadow, `rgba(0, 0, 0, 0.15) 0px 20px 40px 0px`, plus a `blur(10px)` backdrop-filter that gives the white fill a frosted, faintly glass quality against the gradient showing through at the card edges. The middle card's cyan edge-glow functions as a rim-light effect rather than a filled border, reinforcing elevation hierarchy through light rather than color fill.

## Motion
Interactive transitions are fast and functional: `transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)` for any position/scale shifts (card hover-lift or badge press), and a quicker `opacity 0.1s ease-in` for fades — consistent with snappy, utilitarian micro-interactions rather than expressive or springy motion. No scroll-linked or looping animation is implied by the evidence; motion should be reserved for discrete state changes (hover elevation increase, focus-in) on the card stack and badges.

## Guardrails
- Never lighten the background gradient into a pale wash — it must stay saturated cyan-to-navy full-panel, with white confined to cards and the separate negative-space half.
- Do not center the panel as a symmetric hero; preserve the asymmetric left-panel/right-blank-space split.
- Keep cyan strictly rationed to the third headline line and the single active-card rim-glow — never apply it as a card fill or body text color.
- Do not equalize all three cards; the middle row must stay visually promoted via offset position and cyan edge treatment, not color fill.
- Preserve the frosted-glass card quality (`blur(10px)` + soft shadow) — flattening cards to opaque solid white with hard edges loses the elevation system.
