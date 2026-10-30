---
version: "1"
name: "Institutional Blue Ledger"
description: "A transparent-navbar, primary-blue institutional system with a stacked-link hero panel, flat white card grids, and a deep-navy footer terminus."
colors:
  background: "#0060A8"
  surface: "#F1F5F8"
  hero-fill: "#0066AE"
  footer-fill: "#031120"
  text-primary: "#000000"
  text-secondary: "#6C6C6C"
  text-on-blue: "#FFFFFF"
  accent: "#1473E6"
typography:
  headline-md:
    fontFamily: "BCASans"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: "1.33"
  body-md:
    fontFamily: "BCASans"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: "1.45"
  label-md:
    fontFamily: "BCASans"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: "1.33"
  body-sm:
    fontFamily: "BCASans"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: "1.45"
  accent-display:
    fontFamily: "cordon-bleu"
    fontWeight: 400
    lineHeight: "1.1"
spacing:
  base: "8px"
  gap: "28px"
  section-padding: "50px"
rounded:
  control: "10px"
  card: "10px"
  pill: "9999px"
  panel: "16px"
components:
  button-hero-primary:
    background: "#0066AE"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "64px"
    padding: "0px"
  button-link-utility:
    background: "transparent"
    text-color: "#1473E6"
    radius: "0px"
    height: "32px"
    padding: "0px"
  card-promo:
    background: "#FFFFFF"
    radius: "10px"
    padding: "0px"
  card-news:
    background: "#FFFFFF"
    radius: "10px"
    shadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px"
    padding: "0px"
  navbar-menu-row:
    background: "transparent"
    radius: "0px"
    padding: "0px"
---
# Institutional Blue Ledger
Source: https://www.bca.co.id/

## Overview
This is a corporate-institutional flat design system: a transparent square-cornered navbar over a solid primary-blue mega-menu, flowing into a white/near-white editorial body of flat card grids, and terminating in a deep-navy footer. There is no glassmorphism as an aesthetic choice, though one blur backdrop-filter (`blur(10px)`) exists as a utility overlay effect, not a surface style. The visual language is Swiss-adjacent in its restraint — one primary hue (`#0066AE`), one link-blue accent (`#1473E6`), neutral ink and grays doing the rest — carried by a single humanist sans (BCASans) at nearly every size. Corner radii stay a consistent soft 10px across cards and controls, with a single full-pill (9999px) reserved for the one hero call-to-action. This is a content-dense, trust-driven institutional style, not a marketing-aurora or bento style — density and grid regularity are the identity, not gradient spectacle.

## Composition
The first screen is a slim white utility strip (a login link, right-aligned) sitting atop a full-bleed solid-blue navigation panel that occupies the rest of the frame — stacked full-width rows, each a menu category with a right-aligned label and outline icon, separated by hairline dividers at ~1px in a translucent white. This is a deliberate choice: navigation-as-hero, prioritizing wayfinding over a marketing headline — the alternative (a gradient hero banner with a headline and device mockup) is rejected in favor of an immediate, list-form utility menu. Scrolling into the body, the composition shifts to a light `#F1F5F8`/white surface hosting two consecutive uniform card grids (a 4-column promo grid, then a 3-column news grid), each preceded by a left-aligned eyebrow-style heading with a blue underline accent and a right-aligned "view all" link. The page ends on a dark full-bleed footer band. Density is high: eight promo cards and seven news cards appear before the footer, each tightly packed with thumbnail, date-metadata, and title — no whitespace-heavy marketing breathing room.

## Colors
`#0066AE` (declared area 4.1%, but the dominant visual mass of the first screen) is the brand/primary fill, carrying the entire navbar-menu panel. `#031120` is the footer ink — a near-black navy (pixel-field ~17%) that bookends the page. White (`#FFFFFF`, pixel-field ~27%, declared ~40.7%) and off-white `#F0F0F0`/`#EFEFEF` (~21%) form the body surface — this is a light-mode-dominant system despite the dark navbar and footer anchors. Text ink is pure `#000000` for primary content and `#6C6C6C` for secondary/metadata (dates, captions). The accent `#1473E6` (link-blue) is rationed strictly to inline text links and small utility buttons — never to a card fill or large surface. `--swiper-theme-color: #007AFF` and `--tw-ring-color: #3C81F5` exist as component-internal blues for carousel controls and focus rings, kept out of the main palette. Nothing is left in a warm hue — the system is entirely blue/neutral, no secondary color family.

## Typography
BCASans is the sole workhorse family across every measured token — headline-md and label-md share identical specs (24px/400, lh 1.33), meaning heading and menu-label treatments read at the same visual weight, differentiated only by color and position, not by a display/body size jump. Body copy runs at 16px/400 for primary reading and drops to 11px/400 (lh 1.45) for the densest metadata (card timestamps, captions). Secondary text is consistently toned `#6C6C6C` regardless of size. `cordon-bleu` appears as a distinct accent-display family — reserved for a single oversized wordmark-style graphic treatment inside one promo card, functioning as a signature-brand display face rather than a UI text style; it never appears in running copy.

## Layout
Content is bounded to a 1170px max-width container with 50px section padding, sitting inside a white/near-white page canvas. The promo grid is 4 columns with 28px gaps, holding 8 items across two full rows (rows: [4 equal-width cards | 4 equal-width cards], each ~23% of container width) — a uniform card grid, not bento, no span variance. The news/features grid runs 3 columns at 28px gaps holding 7 items across three rows: [3 equal cards | 2 equal cards | 2 equal cards] (~32% each) — again uniform-width, with the final rows simply under-filled rather than spanned wider, confirming a strict column-grid rather than a masonry or dense-pack pattern. The navbar's 12 items resolve internally to a 6-row stacked full-width list (100% width each) rather than a horizontal cluster — a vertical mega-menu behaving like a list-layout, not a horizontal nav bar in the classic sense. A secondary 12-column/2-item asymmetric grid (rows 15%/49%) appears deeper in the page for a large-vs-small editorial split.

## Components
- **Navbar**: edge-to-edge square bar, 104px tall, 100% viewport width (0px inset either side), all four corners 0px radius, background transparent (revealing the blue menu panel beneath), static/non-sticky, holding 12 total items. Rendered as six full-width stacked rows (Produk, Layanan, Promo, Webform BCA, Chat, plus one more), each row pairing a right-aligned white text label with a right-aligned white outline icon, divided by thin translucent-white hairlines. A top utility row above the blue panel holds a single "Login" text link in `#1473E6` beside an outline login/arrow icon, right-aligned on white.
- **Button — hero primary**: solid `#0066AE` fill, white text, radius 9999px (full pill), height 64px, 0px padding — this is the most prominent button on the first screen, an observed high-contrast pill-shaped control (distinct from any nav utility element).
- **Button — text/link utility**: transparent background, `#1473E6` text, radius 0px (sharp, no fill shape), height 32px, appears ×3 near the page end (footer-adjacent utility links like "view all" and social/media links) — flat text-link treatment, not a filled control.
- **Card — promo grid** (×8, mid-page, role: "Promo Terbaru" band): white `#FFFFFF` fill, 10px radius, 0px padding (image bleeds to card edge), arranged 4-per-row across 2 rows at 23% width each. Anatomy top-to-bottom: a top-bleed photographic thumbnail (~40% of card height) with a small circular logo badge overlapping its top-left corner, then a body zone holding a two-line dark headline, then a small clock-icon-prefixed date-range caption in `#6C6C6C`.
- **Card — news/features grid** (×7, role: "News & Features" band): white fill, 10px radius, shadow `rgba(0,0,0,0) 0px 0px 0px 0px, rgba(0,0,0,0) 0px 0px 0px 0px, rgba(0,0,0,0.1) 0px 1px 3px 0px, rgba(0,0,0,0.1) 0px 1px 2px -1px`, 0px padding, arranged 3/2/2 across three rows at ~32% width. One larger hero-style card variant (leftmost, spanning taller) carries a bold display-style graphic treatment in the cordon-bleu accent face; the remaining six cards pair a small square thumbnail (~30% of card width, left-aligned) with a date+category caption line and a two-line headline to its right.
- **Section heading + tab row**: left-aligned label in accent blue with a short underline rule beneath it, paired with adjacent gray sibling-tab labels (unselected state) and a right-aligned chevron-suffixed "view all" link in `#1473E6` — repeats identically above each of the two card grids.
- **Footer**: full-bleed band, background `#031120`, holding 14 links organized in labeled columns (address/contact block, phone/email/chat rows, social-icon row), a horizontal divider rule, then a fine-print disclosure line with two inline underlined links — all footer text rendered in white/light-gray against the navy fill.

## Graphics & Effects
A directional scrim `linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,0.8))` covers a small fraction of the page (~2.9%) — this is a text-legibility scrim laid over a single promo-card thumbnail, not a page-wide treatment. A near-white shimmer gradient `linear-gradient(to right, rgb(238,238,238) 8%, rgb(221,221,221) 18%, rgb(238,238,238) 33%)` at ~1.6% coverage is a skeleton/loading-placeholder sheen on card content, not a decorative background. `backdrop-filter: blur(10px)` exists as a utility blur (likely a modal/overlay backing), separate from the flat card surfaces which carry no blur or translucency. Card elevation is expressed entirely through the single soft shadow pair listed above — subtle, near-flat, closer to a 1dp Material elevation than a dramatic drop shadow. There is no visible grain, noise, or pattern texture anywhere in the system; surfaces are clean flat fills throughout.

## Motion
Interactions resolve fast and mechanically: the dominant transition is `all 0.15s cubic-bezier(0.4, 0, 0.2, 1)` for hover/state changes on controls and links, a snappy near-instant ease-out. Content reveals use `opacity 0.4s ease` for simple fades and a springier `opacity, transform 0.3s/0.5s cubic-bezier(0, 1.4, 1, 1)` for card or panel entrances — an overshoot curve giving a light bounce to appearing elements. A `bounce` keyframe and a `heroBannerImage` keyframe suggest a subtle idle bob animation applied to a hero graphic element. A `swiper-preloader-spin` keyframe confirms carousel components (the promo strip likely swipes/scrolls with a spinning loader during transition) rather than static-only card grids.

## Guardrails
- Never fill the hero with a gradient or photographic banner — it is a stacked, transparent-over-solid-blue navigation list, not a marketing headline hero.
- Keep card radii at a consistent soft 10px across every family; do not introduce a sharper or fully-rounded variant.
- Ration `#1473E6` to text links and thin utility controls only — never apply it as a card or section background fill.
- Do not merge the promo grid and news grid into one pattern — they differ in column count (4 vs 3) and card anatomy (top-bleed image vs. side-thumbnail).
- Preserve the navbar's true geometry: 0px corner radii, 100% width, transparent fill, 104px height, six stacked full-width rows — not a centered pill or floating capsule.
- Keep the footer strictly navy (`#031120`) with light text — it is the only large dark surface besides the nav panel; do not extend dark mode elsewhere.
