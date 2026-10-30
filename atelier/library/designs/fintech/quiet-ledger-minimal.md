---
version: "1"
name: "Quiet Ledger Minimal"
description: "A stark white error-state system carried by a single bold serif headline, a hairline rule, and stacked gray metadata lines in a restrained sans face."
colors:
  background: "#FFFFFF"
  surface: "#F0F0F0"
  text-primary: "#333333"
  text-secondary: "#7F8C8D"
  border: "#808080"
typography:
  display-lg:
    fontFamily: "Futura Bk BT"
    fontSize: "36px"
    fontWeight: 700
  body-md:
    fontFamily: "Futura Bk BT"
    fontSize: "16px"
    fontWeight: 400
  accent-serif:
    fontFamily: "Times New Roman"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: "1.2"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "24px"
rounded:
  control: "0px"
  card: "0px"
  pill: "0px"
components:
  divider-rule:
    background: "#808080"
    height: "1px"
    width: "530px"
    margin: "24px auto"
  text-block-metadata:
    color: "#7F8C8D"
    fontSize: "16px"
    lineHeight: "1.5"
    padding: "8px 0"
---
# Quiet Ledger Minimal
Source: https://www.dior.com/en_au

## Overview
This is a bare-bones utilitarian error page, not a marketing surface — the design language is Swiss-adjacent by omission: a near-blank white canvas, a single centered bold serif-classed headline, one hairline rule, and a short stack of monospace-feeling metadata lines set in a humanist sans. There is no color system, no imagery, no grid to speak of — the entire visual weight rests on typographic contrast between a heavy 700-weight display line and light gray 400-weight body lines beneath it.

## Composition
Everything is centered in a narrow vertical column floating in the upper-third of an otherwise empty viewport — the page reads as a single isolated block rather than a scrolling sequence of sections. Hierarchy runs top to bottom: bold dark headline, then a full-width hairline divider, then three short lines of muted gray metadata stacked with even spacing. The deliberate choice is radical restraint — a single centered content island on a white field — rejecting any framing device (card, border, background tint) that would normally contain an error message; the emptiness itself is the statement.

## Colors
Background is flat white (`#FFFFFF`), consuming effectively the entire pixel field (~98%+) with no gradient, tint, or surface layer breaking it. The headline uses a near-black ink (`#333333`) for maximum contrast against the white field. Supporting metadata text drops to a muted slate gray (`#7F8C8D`), establishing a clear secondary tier. A mid-gray (`#808080`) hairline rule is the only structural mark on the page, spanning the width of the text column. No accent hue exists in this system — color is entirely achromatic, reserved solely for text-ink contrast levels.

## Typography
Two-tier hierarchy: a bold 36px display line (`Futura Bk BT`, weight 700) carries the entire headline statement, set with tight, confident leading. Beneath it, three lines of 16px regular-weight body text (`Futura Bk BT`, weight 400) in the muted gray tone carry the metadata — each on its own line, centered, with generous vertical spacing between them rather than tight paragraph leading. A secondary serif face (`Times New Roman`) is present in the measured font stack as a fallback/accent register alongside the primary geometric sans, suggesting the system pairs a humanist geometric sans for its dominant voice with a classical serif held in reserve.

## Layout
No grid system is engaged — this is a single centered stack, not a column layout. The content column sits at a fixed width (~530px) horizontally centered on the page via auto margins. Vertical rhythm between the divider and each metadata line follows an 8px/16px spacing cadence — tight, even gaps rather than generous section padding. There are no cards, no breakpoint-driven reflow visible, no responsive grid — this is a single fixed-position content block vertically anchored near the top of the viewport with the remainder of the page left intentionally blank.

## Components
- **Headline text block** — appears once, at the top of the centered column; single line, bold 36px dark ink (`#333333`), serves as the page's sole heading with no eyebrow or label above it.
- **Divider rule** — sits immediately below the headline, full width of the content column (~530px), 1px height, mid-gray (`#808080`) hairline with no shadow or blur; the only graphic device on the page separating the heading tier from the metadata tier.
- **Metadata text stack** — three discrete lines below the rule, each centered, 16px regular weight, muted gray (`#7F8C8D`) ink; functions as a molecule of key-value status lines with consistent line spacing and no visual differentiation between the three (no bolding, no icons, no borders per line).
- **Page container** — the implicit outermost surface: flat white background field with no padding box, shadow, or border visible; the content island floats with large asymmetric whitespace above and below.

## Graphics & Effects
There are no gradients, no imagery, no textures, no noise or grain layers, no shadows, and no glassmorphic or elevated surfaces anywhere on this page — the entire visual system is flat, achromatic, and effect-free. The only rendered graphic element is the single 1px hairline rule; it carries no blur, glow, or gradient fill, just a flat mid-gray stroke.

## Motion
No animation, transition, or scroll-triggered behavior is present or implied by this static, single-state error view — the page renders once and holds; there is no keyframe, easing curve, or duration to document.

## Guardrails
- Do not introduce color, gradients, or imagery — this system's entire identity is achromatic restraint.
- Do not add card containers, shadows, or borders around the text stack; the content must float free on the white field.
- Do not widen the layout into a multi-column or full-bleed grid — preserve the fixed, narrow, centered column.
- Do not soften the divider into a thick rule or accent color; it must stay a thin, flat mid-gray hairline.
- Do not increase font weight or size hierarchy beyond the two established tiers (bold display vs. regular muted body).
