---
version: "1"
name: "Void Panel Utilitarian"
description: "Near-black flat-panel system on true-black page voids, Inter-only type at heavy display weight, a single rationed blue accent, and a full-pill white primary CTA."
colors:
  background: "#000000"
  surface: "#111111"
  surface-alt: "#1A1A1A"
  text-primary: "#FAFAFA"
  text-secondary: "#9CA3AF"
  accent-blue: "#2563EB"
  accent-green: "#16A34A"
  accent-red: "#DC2626"
  accent-amber: "#EAB308"
  border: "#FFFFFF"
typography:
  display-lg:
    fontFamily: "__Inter_f367f3"
    fontSize: "60px"
    fontWeight: 700
    lineHeight: "1"
    letterSpacing: "-1.5px"
  headline-md:
    fontFamily: "__Inter_f367f3"
    fontSize: "60px"
    fontWeight: 700
    lineHeight: "1"
  body-md:
    fontFamily: "__Inter_f367f3"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: "1.33"
  label-md:
    fontFamily: "__Inter_f367f3"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: "1.56"
  body-lg:
    fontFamily: "Inter"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: "1.33"
  label-mono-eyebrow:
    fontFamily: "Inter"
    fontSize: "13px"
    fontWeight: 600
    style: "uppercase, wide tracking, used as small eyebrow labels above section headings"
spacing:
  base: "8px"
  gap-sm: "12px"
  gap-md: "16px"
  gap-lg: "24px"
  gap-xl: "32px"
  section-padding: "64px"
rounded:
  control: "8px"
  chip: "4px"
  card: "16px"
  card-lg: "24px"
  pill: "9999px"
components:
  button-primary-hero:
    background: "#FFFFFF (observed near-white solid)"
    text-color: "#000000"
    radius: "9999px (observed full pill)"
    height: "~44px (observed)"
    padding: "12px 24px (observed)"
  button-solid-white:
    background: "#FFFFFF"
    text-color: "#000000"
    radius: "9999px"
    height: "36px"
    padding: "12px 32px"
    shadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px"
    hover-background: "#FFFFFF"
  button-solid-white-compact:
    background: "#FFFFFF"
    text-color: "#000000"
    radius: "9999px"
    height: "36px"
    padding: "8px 16px"
    shadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px"
    hover-background: "#FFFFFF"
  button-glass-utility:
    background: "rgba(255, 255, 255, 0.05)"
    text-color: "#FFFFFF"
    radius: "4px"
    height: "24px"
    padding: "4px 12px"
    hover-background: "rgba(255, 255, 255, 0.1)"
  button-accent-blue:
    background: "#2563EB"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "36px"
    padding: "12px 32px"
    shadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px"
  card-feed-panel:
    background: "#000000"
    radius: "0px"
    padding: "64px 0px 0px"
  card-media-bleed:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  card-tile-quad:
    background: "#111111"
    radius: "24px"
    padding: "0px"
    shadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px"
  card-icon-body:
    background: "#1A1A1A"
    radius: "16px"
    padding: "24px"
---
# Void Panel Utilitarian
Source: https://aibuilderclub.com/

## Overview
This is a dark-mode-default, flat-panel utilitarian system: true-black page voids (#000000 dominates ~66% of rendered pixels) interrupted by dark-gray structural panels (#111111, #1A1A1A) rather than glassmorphic depth. Corner language is pill-forward for every button and most cards trend toward large 16–24px radii, giving a soft, approachable edge on top of an otherwise stark, code-adjacent aesthetic (visible monospace-styled code snippets, terminal-like content cards). Type is Inter exclusively, run at a heavy 700 weight and tight -1.5px tracking for display sizes — this single-family, single-accent discipline (one blue, #2563EB, rationed to a handful of controls) is what keeps a very component-dense page legible.

## Composition
The first screen is centered and vertical: a floating pill navbar (transparent, no visible bg chip) sits above a centered eyebrow pill, a two-line 60px bold headline, a 24px subhead, an overlapping avatar cluster, one white pill CTA, then a horizontal auto-scrolling logo rail. This hero deliberately rejects a full-bleed colorful gradient treatment — color is entirely absent here except the single green dot in the eyebrow pill; the choice is restraint over spectacle. Below the fold the rhythm alternates full-width black content bands (feed/testimonial/founder sections) with darker embedded panel sections (#111111, #1A1A1A) that hold card grids — a "black void, then gray shelf" cadence repeating roughly every 1–2 screens down to the footer. Density increases mid-page (feed posts, leaderboard, tool grids, testimonial triptych) before decompressing into the spacious pricing/FAQ close.

## Colors
`#000000` is the background role, confirmed by the pixel field (~66%) and the true-black voids visible between every section. `#111111` and `#1A1A1A` (17.7% and 5.1% declared area) are the surface role — card/panel fills for feed items, founder-photo frame, and icon-tiles. `#FFFFFF` (~1% pixel share) is reserved for the primary button fill and card/heading text ink — extremely rationed given its visual weight. `#2563EB` is the sole brand/accent hue, appearing on exactly one measured button and the ring/focus token `--tw-ring-color: #3C81F5` — a close blue-violet variant used for focus states. `#16A34A` (green) marks a single live-status dot in the hero eyebrow; `#DC2626` (red) and `#EAB308` (amber/gold star ratings) are semantic accents used only in testimonial star icons and status contexts. `#9CA3AF` is secondary/muted text throughout (timestamps, subheads, helper copy). Nothing else is colored — icons, dividers, and 90% of surface area stay achromatic by design.

## Typography
Inter carries the entire system, no serif or mono family in evidence beyond styled code-block text that is still rendered in Inter/ui-sans-serif. Display/headline tokens sit at 60px/700/lh-1/-1.5px tracking — used for the hero headline and every major section title ("Community of Builders," "Premium Tools," "What Builders Say" scale headings). Body copy runs at two registers: a 24px/400/lh-1.33 lead-body size for hero subheads and section descriptions, dropping to 16px/400 (color #FAFAFA) for card copy and testimonial quotes, with #9CA3AF for secondary metadata. A 18px/600/lh-1.56 label weight marks FAQ question rows and card headings. An uppercase, wide-tracked small eyebrow label (observed above major section headers and inside the hero status pill) functions as this system's signature accent face despite sharing the Inter family — treat it as a distinct label-mono-eyebrow role.

## Layout
Max-width container sits at 1280px with 64px section padding. The navbar is a floating pill, 84px tall, sticky, transparent background, holding 6 nav items. Card grids favor even, uniform-span rows over bento asymmetry: the feed/testimonial panel is a single full-width stacked column (rows of [100]), the tool-boilerplate icon grid runs 2×2 (rows [50/50] twice), the tile-quad "contains-4-tiles" card is a 2-column, 2-row uniform grid at 32px gap, and the icon-body card family (×6, ×6, ×6) tiles in uniform rows rather than mixed spans. This is a uniform card-grid system, not bento — no card deliberately breaks rhythm to span wider. Spacing increments cluster at 8/12/16/20/24/32px; card radii step from 4px (compact glass utility chip) up through 8px, 12px, 16px, to 24px for the largest tile-quad container.

## Components
- **Navbar**: top of every screen, floating pill, transparent background, 84px tall, sticky, 6 text items (one shown active with an underline), no visible logo mark measured, no secondary button — CTA lives in-page, not in the bar.
- **Hero primary CTA**: one button, centered under the subhead, an observed near-white solid fill with black text, ~9999px full-pill radius, ~44px height, 12px/24px padding — the single most emphasized control on the first screen.
- **Button — solid white (mid-page utility)**: ×9 instances, #FFFFFF fill, #000000 text, 9999px radius, 36px height, 12px/32px padding, resting shadow `rgba(0,0,0,0) 0px 0px 0px 0px, rgba(0,0,0,0) 0px 0px 0px 0px, rgba(0,0,0,0.1) 0px 1px 3px 0px, rgba(0,0,0,0.1) 0px 1px 2px -1px`; used on tool-card CTAs ("Get Template," "Get Boilerplate").
- **Button — solid white compact**: ×3 near page end, same fill/radius/shadow, smaller 8px/16px padding — pricing-band micro CTAs.
- **Button — glass utility**: ×1, rgba(255,255,255,0.05) fill, #FFFFFF text, 4px radius, 24px height, 4px/12px padding, hover → rgba(255,255,255,0.1) — a small inline chip control, not the hero button.
- **Button — accent blue**: ×1, #2563EB fill, #FFFFFF text, 9999px radius, 36px height, 12px/32px padding — the one saturated-color CTA in the whole system, used sparingly mid-page.
- **Feed/testimonial panel card**: full-width-panel family (×5 rows measured, each 100% width), #000000 fill, 0px radius, 64px top padding; anatomy top-to-bottom is avatar + name/timestamp heading + icon row + body text — used for the community-feed posts and leaderboard-adjacent list.
- **Media-bleed card**: ×6 and ×5 variants, transparent fill, 0px radius, media fills the top edge-to-edge with heading and body text below — used for the course-preview cards (code screenshot + presenter photo bleeding to the card edge).
- **Tile-quad card**: ×4, #111111 fill, 24px radius, 0px padding, shadow `rgba(0,0,0,0) 0px 0px 0px 0px, rgba(0,0,0,0) 0px 0px 0px 0px, rgba(0,0,0,0.1) 0px 10px 15px -3px, rgba(0,0,0,0.1) 0px 4px 6px -4px`; anatomy: media-top zone + heading + body text, and internally contains a nested 2×2 grid of 4 icon tiles (icon glyph + bold label + muted description) — the tool/boilerplate showcase cards.
- **Icon-body card**: ×18 total across three ×6 rows, #1A1A1A fill, 16px radius, 24px padding, anatomy: icon glyph at top + body text below — used for feature/benefit tiles and testimonial cards (avatar-initial badge + name + role + 5-star row + quote body).
- **Footer**: #0A0A0A background, 12 links across a Resources and Links column plus a brand block with a short description line and a "Built by" credit line; bottom bar holds a copyright line under a hairline divider.

## Graphics & Effects
No hero gradient wash — the first screen stays flat black with color rationed to a single green status-dot and the white CTA. A `linear-gradient(to right, rgba(0, 0, 0, 0), rgba(18, 18, 18, 0.9))` scrim (1.6% of page) sits over media inside the course-preview cards, darkening the right edge where a presenter photo bleeds against code text for legibility. A small cornerstone gradient `linear-gradient(to right bottom, rgb(31, 41, 55), rgb(17, 24, 39))` (0.3%) fills one small decorative element, likely an avatar-fallback badge. Edge-fade gradients — `linear-gradient(to right, rgb(0,0,0), rgba(0,0,0,0))`, its mirrored left version, and `linear-gradient(to top, rgb(17,17,17), rgba(0,0,0,0))` — mask the edges of the horizontal logo-marquee rail, fading logos to transparent at both ends. Live video surfaces exist in at least one media-bleed card (course/agent demo); use a static dark gradient or code-screenshot still as a stand-in. Card elevation follows two shadow tiers: a tight `0px 1px 3px / 0px 1px 2px` tier on buttons, and a deeper `0px 10px 15px -3px / 0px 4px 6px -4px` tier on the tile-quad cards — no shadow on flat feed panels. Backdrop blur values of `blur(4px)` and `blur(12px)` exist in the system for overlay/utility elements even though the dominant card language is opaque flat fill, not glass.

## Motion
Interaction transitions are fast and utilitarian: color/background/border/fill/stroke changes run at `0.15s cubic-bezier(0.4, 0, 0.2, 1)`, transforms at `0.2s cubic-bezier(0.4, 0, 0.2, 1)`, and compound state changes at `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)` — all standard Tailwind ease-out-style curves, nothing springy or bouncy. Opacity fades use the same fast `0.15s` curve for hover/focus reveals. A `marquee` keyframe drives the continuous logo rail scroll; `ping`, `pulse`, and `spin` keyframes support status indicators and loading spinners; `enter`/`exit` keyframes govern panel/menu mount and unmount. Overall the motion character is snappy micro-feedback rather than choreographed scroll-linked storytelling — nothing in evidence suggests parallax or scroll-triggered reveals beyond standard enter/exit transitions.

## Guardrails
- Never fill the hero background with a saturated gradient — it is flat black with color confined to a single status dot and one white CTA.
- Do not substitute the glass utility button (rgba(255,255,255,0.05), 4px radius) for the hero primary — the primary is a solid near-white full pill.
- Keep card grids uniform-row (2×2, or single-column stacks) — do not invent bento-style mixed spans; none were measured or observed.
- Reserve #2563EB for one CTA only; do not recolor secondary buttons or card accents blue.
- Do not add serif or mono display faces — Inter is the only family in evidence, including for code-styled text.
- Preserve the pill radius (9999px) on all primary/secondary buttons; do not shrink to the 4px chip radius, which belongs only to the small glass utility control.
