---
version: "1"
name: "Archival Cream Ledger"
description: "Warm off-white editorial system with a stone-arch photographic hero, a Baskerville/Concrette serif-sans pairing, and data-forward bar-chart panels rendered in a muted sage-clay-stone palette."
colors:
  background: "#F5F3ED"
  surface: "#E8E3DA"
  surface-alt: "#C8CECC"
  text-primary: "#484A2E"
  text-secondary: "#837975"
  text-heading: "#000000"
  border: "#E2DDD0"
  border-strong: "#B8B0AA"
  accent-teal: "#A0C3C4"
  accent-navy: "#3A3F4B"
  ink-dark: "#292C33"
  danger: "#FB2C36"
  warning: "#FE9A00"
  success: "#00D492"
typography:
  display-lg:
    fontFamily: "Concrette"
    fontSize: "34px"
    fontWeight: 400
    lineHeight: "1.2"
    letterSpacing: "-0.8px"
  headline-md:
    fontFamily: "Libre Baskerville"
    fontSize: "34px"
    fontWeight: 400
    lineHeight: "1.4"
    letterSpacing: "-0.4px"
  body-md:
    fontFamily: "Concrette"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: "1.2"
  body-base:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
  label-eyebrow:
    fontFamily: "Inter"
    fontSize: "12px"
    fontWeight: 500
    letterSpacing: "0.08em"
  icon-face:
    fontFamily: "Material Symbols Outlined"
  accent-serif:
    fontFamily: "Times New Roman"
    style: "italic"
spacing:
  base: "8px"
  gap: "22px"
  section-padding: "80px"
  section-gap: "131px"
rounded:
  control: "8px"
  control-lg: "10px"
  pill: "50px"
  card: "22px"
  card-sm: "37px"
  sharp: "4px"
components:
  button-nav-cta:
    background: "linear-gradient(rgba(41, 44, 51, 0.6), rgba(41, 44, 51, 0.6))"
    text-color: "#292C33"
    radius: "0px"
    height: "20px"
  button-hero-primary:
    background: "#F5F3ED"
    text-color: "#2B2B2B"
    radius: "6px"
    height: "48px"
    note: "observed — near-white/cream solid pill-ish rectangle under headline, not directly measured"
  button-dark-filled:
    background: "#3A3F4B"
    text-color: "#FFFFFF"
    radius: "10px"
    height: "48px"
    padding: "11px 18px"
    border: "1px solid rgb(58, 63, 75)"
  button-dark-filled-sm:
    background: "#3A3F4B"
    text-color: "#484A2E"
    radius: "8px"
    height: "44px"
    padding: "10px 14px"
    border: "1px solid rgb(58, 63, 75)"
  button-outline:
    background: "transparent"
    text-color: "#484A2E"
    radius: "8px"
    height: "44px"
    padding: "10px 14px"
    border: "1px solid rgb(226, 221, 208)"
    hover-background: "#F0EDE4"
  button-tint-filled:
    background: "#F0EDE4"
    text-color: "#2B2B2B"
    radius: "10px"
    height: "48px"
    padding: "11px 18px"
    border: "1px solid rgb(226, 221, 208)"
  card-list-item:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  card-resource:
    background: "#E8E3DA"
    radius: "0px"
    padding: "0px"
---
# Archival Cream Ledger
Source: https://intelligence.ai/

## Overview
This is a warm-neutral editorial system pairing museum-photographic imagery with a data-dashboard sensibility — an unusual hybrid of luxury/high-fashion restraint (generous cream space, a Libre Baskerville serif headline, muted stone palette) and app-shell density (bar charts, tabbed leaderboards, table-like list rows). The dominant surface is a warm off-white (#F5F3ED, ~74% of declared area, confirmed by the ~64% #F0F0F0-adjacent pixel field), never dark-mode. Color is rationed almost entirely to muted sage, clay, dusty-teal and stone tones inside chart bars and icon chips; the rest of the page stays deliberately monochrome-cream with dark ink text.

## Composition
The first screen is a full-bleed photographic hero — a stone-arch colonnade — with a small eyebrow label and a serif headline set low in the frame, cursor-caret visible, sitting on the cream ground beneath the arches rather than over them. A slim 72px cream navbar sits fixed above it. Scrolling reveals a rationed-color logo strip, then a data-heavy leaderboard module (tabs + filter pills + a bar chart), then a network/diagram band on a dusty-stone surface with a dark CTA pill at its center, then a three-up resource card row, ending in a plain cream footer. The deliberate choice is restraint: nearly the whole shell stays cream-on-cream, and color is earned only inside functional data elements (chart bars, icon badges) — the rejected alternative would be a vivid gradient hero or dark-mode dashboard, which this system avoids entirely in favor of archival, paper-like neutrality.

## Colors
`#F5F3ED` is the page background and dominant surface, confirmed by the ~64-70% share of near-white/cream pixels. `#E8E3DA` (measured 18.7% declared area) is the secondary/card surface — used for the diagram band and resource cards, a half-step darker than the page. `#C8CECC` is a cooler stone surface used sparingly for contrast blocks. Text ink is `#484A2E` (an olive-black) for primary copy and `#000000`/`#2B2B2B` for headings, with `#837975` as the muted secondary tone for captions and metadata. Borders run on `#E2DDD0` (light) and `#B8B0AA` (stronger). The accent system is chart-bound: sage green, clay/amber, and dusty teal (`#A0C3C4`) fill leaderboard bars and pill icon-chips; navy/charcoal (`#3A3F4B`, `#292C33`) carries the darkest filled buttons and CTA gradient. Semantic reds/ambers/emerald (`#FB2C36`, `#FE9A00`, `#00D492`) exist as token primitives but are not visible as page chrome — reserve them for status dots or chart annotations only. Nothing outside charts, icons, and CTAs is colored; body copy, cards, and structure stay achromatic cream/stone.

## Typography
Two serif/sans pairings anchor hierarchy: display headlines use Concrette at 34px/400, tight tracking (-0.8px), while a second headline register uses Libre Baskerville at the same 34px/400 but looser tracking (-0.4px) and taller leading (1.4) — the Baskerville face reads as the more literary, "product lab" register seen in the hero, while Concrette carries the dashboard-facing headings (e.g. "Top Leaderboards"). Body copy runs on Inter at 16px/400 in `#484A2E`, with `#837975` for secondary/caption text. UI labels (nav items, chart labels, eyebrows) use small all-caps Concrette or Inter around 12–14px/500, wide tracking. Material Symbols Outlined supplies all interface icons at body-scale. A Times New Roman italic accent appears as a rare literary flourish (visible in the hero's serif headline treatment) — treat it as a one-clause signature, not a running voice.

## Layout
Content is capped at a 1130px max-width, centered, with 80px section padding and unusually large 131px gaps between major sections — this generous rhythm is what makes the page feel archival rather than dense. Card grids follow measured tracks: a 2-column grid (gap 22px) split roughly 19%/79% (icon-label beside a dominant panel); a 3-column even grid (gap 22px, each ~32%) for the resource-card row; and a 2-column 28px-gap grid split ~35%/44% for the leaderboard's sidebar-plus-chart layout. The leaderboard's own internal list is a single-column row-list, not a grid — 19 stacked rows at near-full width (95% then a run of 14 rows at 5% each, i.e., a tall label-column followed by a dense value-column), confirming a table-like list layout rather than cards. Radii vary by density: sharp 0px on list rows and resource-card media, small 8–10px on controls, and generous 22–37px on select container panels — never a uniform system, reinforcing the paper/dashboard hybrid.

## Components
- **Navbar**: 72px tall, sticky, background `#F5F3ED`, containing a logo mark + wordmark at left, 4 text nav items, and one CTA. The CTA is a small dark glass-tinted pill: fill `linear-gradient(rgba(41, 44, 51, 0.6), rgba(41, 44, 51, 0.6))`, text `#292C33`, radius 0px, height 20px — a compact utility button, not the page's primary action.
- **Hero primary CTA**: none rendered as a filled button in the captured hero region — the emphasis instead sits on the serif headline with a blinking text caret; if a CTA button is required, use an observed near-white/cream solid with ~6px corners, sized to match `button-hero-primary` token, positioned under the headline.
- **Filter/tab pills** (leaderboard module): a horizontal cluster of ~6 icon-labeled pills (Code, Image, Video, Audio, Slides, SVG/ASCII) plus a vertical list of 7 category tabs at left; outline style, `transparent` fill, `#484A2E` text, radius 8px, height 44px, border `1px solid rgb(226,221,208)`, hover fills `#F0EDE4`.
- **Bar-chart panel** (leaderboard band): one large chart card containing ~17 vertical bars of varying muted hues (sage, clay, teal, stone-gray), each bar topped with a numeral and an icon chip below; a dropdown ("All Models") and a two-way toggle sit top-right of the panel.
- **List-row family** (×19, inside chart/sidebar): transparent fill, radius 0px, no padding — rows split into a wide ~95% leading column and a run of ~5%-wide value columns, i.e. a dense tabular list, not a card grid.
- **Logo strip**: single row of 5–6 grayscale wordmarks/logomarks under a small "REFERENCED BY"-style eyebrow, evenly spaced, no card container.
- **Diagram/network band**: a `#E8E3DA` (or stone `#C8CECC`) full-width panel containing a radial ring diagram with 4 floating icon-pill nodes (rounded pill chips with icon + label) arranged around a central dark CTA button (`#3A3F4B`-family fill, white/cream text, pill-ish radius, small height) — an eyebrow label sits above the section headline, top-left.
- **Resource card family** (×3, row near page end): surface `#E8E3DA`, radius 0px, padding 0px, media-top-bleed anatomy — each card is dominated (top ~80%+) by an illustrative image/graphic (code snippet render, trophy render, document stack render) with a small centered all-caps label beneath.
- **Footer**: background `#F5F3ED`, flat single row of 8 text links, no card structure, minimal vertical padding.

## Graphics & Effects
The only literal gradient captured is a 0.1%-area black-on-black scrim (`linear-gradient(rgb(0,0,0), rgb(0,0,0))`) — treat this as a small darkening overlay on a photographic element (likely inside the arch imagery), never as a page-wide wash. Three live video surfaces exist in the mid-page network/diagram region; substitute a static muted-stone gradient or the diagram illustration itself as the stand-in. Elevation is soft and paper-like: a wide diffused shadow `rgba(41,44,51,0.14) 0px 18px 48px 0px` lifts primary panels, and a tight utility shadow `rgba(0,0,0,0.08) 0px 1px 3px 0px` sits under small controls. A glass/frosted treatment (`backdrop-filter: blur(16px) saturate(1.8)`) applies to at least one floating control, likely the nav CTA or a dropdown — keep it subtle, saturating rather than darkening. No visible noise, grain, or star-field texture; the surface stays clean and matte, texture coming only from the photographic hero itself (stone, foliage, halftone-dot overlay visible within the arch imagery).

## Motion
Interactions are fast and understated: base transitions run at `opacity 0.2s ease` and `all 0.2s ease` for hover/focus state changes, with a combined `opacity, filter 0.25s, 0.25s ease, ease` for richer reveals and a `color, background-size 0.16s, 0.28s ease, ease` pairing likely driving underline/hover-fill sweeps on links. Named keyframes (`caret-blink`, `arena-pointer-drift`, `lbp-scatter-pulse`, `lbp-board-enter`, `lbp-board-fade`, `loading-dot-pulse`) point to a blinking text caret in the hero, a drifting cursor/pointer animation and scatter/pulse/board-enter sequence inside the diagram band, and a pulsing loading-dot for async chart states. Motion overall stays quiet and functional — no springy overshoot, no parallax — consistent with the archival, editorial restraint of the palette.

## Guardrails
- Never darken the overall shell to a dark-mode surface — the system is cream-dominant; color lives only inside charts, icon chips, and CTAs.
- Do not stretch the black-on-black scrim gradient into a full-page background — it is a small localized overlay only.
- Never assign the small navbar glass CTA (0px radius, 20px height) as the hero's primary action — the hero's emphasis is the serif headline with caret; give any hero button an observed cream/near-white fill with soft ~6px corners.
- Keep card/list radii sharp (0px) for data rows and resource-card media; reserve the larger 22–37px radii for container-level panels only, never for buttons.
- Preserve the Libre Baskerville vs. Concrette split — serif for literary/hero headlines, Concrette/Inter for dashboard UI — never substitute one face for the other's role.
