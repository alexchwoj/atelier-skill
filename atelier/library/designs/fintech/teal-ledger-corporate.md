---
version: "1"
name: "Teal Ledger Corporate"
description: "Light-mode corporate SaaS system built on a near-white/pale-gray canvas with a rationed teal-to-cyan gradient identity, a full-bleed portrait hero, and a dense stack of white and pale-blue content bands separated by flat dividers."
colors:
  background: "#FFFFFF"
  surface-alt: "#F4F8F9"
  surface-muted: "#F8F8F8"
  hero-fill: "#12ABB1"
  text-primary: "#23221F"
  text-on-accent: "#FFFFFF"
  accent-primary: "#12ABB1"
  accent-secondary: "#0F7F85"
  accent-tertiary: "#00C4CC"
  accent-highlight: "#FFEE11"
  border-hairline: "#DADADA"
  border-accent: "#0F7F85"
typography:
  display-lg:
    fontFamily: "AdjustedYuGothic"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
  headline-md:
    fontFamily: "AdjustedYuGothic"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: "1.4"
  body-md:
    fontFamily: "AdjustedYuGothic"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: "1.4"
  label-md:
    fontFamily: "AdjustedYuGothic"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: "1.4"
  body-reading:
    fontFamily: "AdjustedYuGothic"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
  accent-numeral:
    fontFamily: "Roboto"
    fontSize: "48px"
    fontWeight: 700
    lineHeight: "1.1"
  utility-mono:
    fontFamily: "Helvetica Neue Light"
    fontSize: "13px"
    fontWeight: 300
    lineHeight: "1.4"
spacing:
  base: "8px"
  gap: "16px"
  gap-lg: "32px"
  section-gap: "100px"
  section-gap-lg: "766px"
rounded:
  control: "8px"
  control-tag: "4px"
  card: "4px"
  pill: "9999px"
  capsule-lg: "64px"
  capsule-xl: "50px"
components:
  button-primary-hero:
    background: "#005A64"
    text-color: "#FFFFFF"
    radius: "64px"
    height: "72px"
    padding: "15px 22px 15px 28px"
    shadow: "rgba(82, 101, 102, 0.5) 0px 4px 8px 0px"
  button-secondary-glass:
    background: "#0F7F85"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "42px"
    padding: "10px 16px"
    border: "1px solid rgb(15, 127, 133)"
    hover-background: "#0A565A"
  button-tag-badge:
    background: "#FFEE11"
    text-color: "#0F7F85"
    radius: "64px"
    height: "23px"
    padding: "2px 12px 1px"
  button-nav-link:
    background: "transparent"
    text-color: "#23221F"
    radius: "0px"
    height: "68px"
    padding: "0px 20px"
  card-media-bleed:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  card-media-left:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  card-list-body:
    background: "transparent"
    radius: "0px"
    padding: "0px"
---
# Teal Ledger Corporate
Source: https://smarthr.jp/

## Overview
This is a light-mode corporate B2B SaaS system, not a dark-glass or aurora identity: the pixel field is dominated by white (~48%) and pale gray (~40%), with teal/cyan (#18A8A8, #12ABB1, #00C4CC family) rationed to roughly 3-6% of the frame. The visual language sits closer to flat-design/Swiss-adjacent corporate minimalism than to any glassmorphic or dark-mode school — flat rectangles, hairline dividers, zero card radius almost everywhere, and a single saturated teal reserved for the hero band and interactive accents. Typography runs on AdjustedYuGothic across nearly every role (display, headline, body, label), giving the system a single-family, weight-driven hierarchy rather than a serif/sans pairing; Roboto appears only for oversized numerals (stat callouts), acting as the signature accent face.

## Composition
The first screen is a two-zone split: a flat white utility bar plus edge-to-edge navbar on top, then a full-bleed solid-teal (#12ABB1-family) hero band containing a stacked headline, two rounded promotional pills, one large dark capsule CTA, and a large photographic cutout of three business-attired figures anchored right. Below the fold, the page runs as a long vertical stack of alternating white and pale-gray (#F4F8F9/#F8F8F8) bands, each a self-contained content unit: a radial process diagram, a logo marquee, a service-feature split (media right, text left), a case-study card rail, a three-step numbered list flanked by flat illustration panels, a teal CTA band, and finally a dense multi-column footer. Density is high — sections are tightly packed with icons, chips, and small captions rather than generous whitespace — reflecting an enterprise-software rather than a marketing-minimalist priority. The deliberate choice is a photographic, human-centric hero over an abstract mesh-gradient or product-screenshot hero; this trades brand-abstraction for trust-signaling realism, at the cost of a busier first screen.

## Colors
Background is white/off-white (#FFFFFF main canvas, #F4F8F9 and #F8F8F8 as alternating section backgrounds) — these three cover roughly 88% of pixels and constitute the true `background` role; nothing in this system is dark-mode. Teal (#12ABB1, declared area 5.1%) is the brand/primary hue, carried by the hero fill, the logo mark, headline emphasis words, and link-colored text; #0F7F85 is a deeper shade used for solid CTA fills and borders; #00C4CC is the brightest cyan step, used in gradient endpoints and icon accents. #23221F is the near-black text ink used everywhere body copy appears on light surfaces. #FFEE11 (yellow) is a rationed highlight color appearing only on two small pill badges in the hero — under 1% of the page — functioning as an attention flag, not a system color. #005A64 is the darkest teal step, reserved for the single most prominent hero button. Borders are hairline #DADADA on card/list dividers and #0F7F85 on bordered teal buttons. Nothing else is colored: illustrations, footer, and body sections stay deliberately grayscale/teal-monochrome so the teal ramp reads as the sole identity color.

## Typography
The system runs almost entirely on AdjustedYuGothic, weight and size doing all hierarchy work rather than family contrast: headline-md at 36px/700/1.4 line-height for section titles, label-md at 18px/700 for sub-heads and card titles, body-md at 14px/700 for short bold captions, and a lighter body-reading register at 16px/400 for paragraph copy in #23221F. Display-lg is set small (16px/400) — this token governs compact hero eyebrow-style lines, not a large marketing display size, confirming the hero's big type is composed from stacked headline-md/heavier custom sizes rather than a single display token. The one true accent face is Roboto, used exclusively for oversized numeral callouts (percentages, counts) — bold, tabular-feeling, and roughly 3x the surrounding body size, functioning as the system's signature typographic flourish. Helvetica Neue Light appears as a residual utility face for fine print/legal captions.

## Layout
Content is bounded to a 1120px max-width container with generous 120px section padding and large inter-section gaps (up to 766px between major bands, 100px between related sub-sections), giving the page a long-scroll, band-based rhythm rather than a tight single-page composition. Grids are simple and low-column-count: a 3-item single-column stat row (rows [62|62] height distribution), 2-column halves at 32px gaps for feature-pairs (rows [33/49]), a 5-across case-study card rail at ~49%/49% paired widths (effectively a 2-per-visual-row scrolling arrangement), and a 3-across numbered-step layout. All measured cards carry 0px radius and 0px padding — this is a flat, edge-aligned card language where imagery bleeds directly to the card edge rather than sitting in a padded, rounded container. The system leans on RAM-style auto-fit behavior for logo strips and uses horizontal scrolling rails (with visible prev/next arrows and dot pagination) for case-study content rather than wrapping grids.

## Components
- **Navbar**: edge-to-edge square bar, 32px tall utility strip above a taller main bar; effectively full-viewport width (~99%, 0/15px inset), all four corners 0px radius (sharp rectangle, not inset or capsule), background #F8F8F8, static/non-transparent, holding 5 primary nav items plus a logo mark at left and two CTA buttons at right.
- **Navbar CTA cluster**: two buttons beside the nav items — a bordered/outlined button and a solid teal button (#0F7F85 fill, white text, 9999px radius, 42px height, 1px solid #0F7F85 border), hover darkens to #0A565A.
- **Hero primary button**: the single most emphasized control on the first screen — a large dark capsule (observed fill approx. #005A64, 64px radius, 72px height, padding 15px 22px 15px 28px), carrying a leading icon plus label, with resting shadow `rgba(82, 101, 102, 0.5) 0px 4px 8px 0px`; sits directly under the headline, distinct from and more dominant than the outlined secondary CTA beside it.
- **Hero secondary CTA**: an off-white/light rounded rectangle button paired left of the primary, carrying a download-style icon; less saturated fill than the primary, establishing a two-tier CTA pairing.
- **Hero promo badge pills**: two small pill badges (#FFEE11 fill, #0F7F85 text, 64px radius, 23px height, padding 2px 12px 1px) floating above each hero CTA as short attention flags.
- **Radial process diagram**: appears once, mid-page, directly below the hero — a semicircular arc of five filled teal circles (varying opacity/tint of the teal ramp) connecting to two flat white rectangular labels beneath, converging into a horizontal arrow-capped summary bar with checkmark bullets; entirely illustrative, no photographic media.
- **Logo marquee strip**: one row, full-width, auto-scrolling logo tiles on white background beneath an oversized-numeral stat line (registered-count style figure in Roboto), no card chrome, no border — pure logo lockups in a horizontal rail with a pause control.
- **Service/feature split card**: appears once as a two-column band — left column headline + body + numeral stat + a checklist-style feature list with icon chips (rows of labeled pill tags, some flagged with a small highlight badge), right column a large flat product-screenshot card, transparent background, 0px radius, media covering the full right half.
- **Case-study card rail**: ×5 visible cards in a horizontal scrolling row (media-top-bleed anatomy), transparent fill, 0px radius, 0px padding; each card is photographic-top (portrait or storefront photo covering roughly 60% of card height) with a small logo badge overlapping the photo's lower edge, then a bold headline-style stat line and caption text beneath; arrows + dot pagination below the row.
- **Category tag row**: a flat pale-gray (#F8F8F8-toned) band beneath the case-study rail holding a wrapped cluster of pill-shaped category chips (hairline #DADADA border, 0px-adjacent flat text), alongside a small flat illustration and two stat badges (count + percentage) in laurel-wreath-style icon frames.
- **Numbered feature list (three-step)**: a centered column of 3 white rectangular rows, each row pairing a filled teal numeral disc (circle, teal fill, white numeral) with a bold headline line and a small outlined pill link button; flanked left and right by full-height flat illustration panels (isometric-style office scenes) that bleed to the section edges.
- **CTA/resource band**: one full-width teal (#0F7F85-toned) rectangular band, 0px radius, containing a stack of overlapping flat document/card mockups on the left and a heading + solid off-white pill button on the right — the system's mid-page conversion push, high color-saturation against the otherwise white page.
- **Footer**: transparent/white background, dense multi-column link list (145 links total) organized under bold category headers, followed by a row of certification/badge marks, a secondary partner/media info bar, and a final legal strip with social icons and a login button; no card chrome, pure text-and-hairline-divider layout.

## Graphics & Effects
Two gradients are measured, both small-footprint, never full-screen washes: `linear-gradient(229deg, rgb(0, 140, 146) 3.72%, rgb(0, 169, 176) 25.4%, rgb(0, 196, 204) 45.5%, rgb(0, 140, 146) 85.7%)` covers about 4% of the page — this renders on a contained decorative element (a card accent or icon panel), not the hero background, which stays a flat solid teal fill; `linear-gradient(115deg, rgb(18, 171, 177) 5.04%, rgb(18, 171, 177) 51.51%, rgb(15, 127, 133) 101.24%)` covers ~1.4% of the page, likely a button or small badge fill. Shadows are soft and low-elevation: `rgba(82, 101, 102, 0.5) 0px 4px 8px 0px` on the hero primary CTA, and a slightly heavier `rgba(0, 0, 0, 0.15) 0px 8px 18px 0px` on elevated cards/popovers elsewhere. There is no noise, grain, or star-field texture visible; the illustration style (flat isometric office scenes, flat human figures) supplies the page's only "textured" visual variety against otherwise clean flat fills. Photography (the hero portrait trio, case-study thumbnails) is treated with hard-edged rectangular crops and no scrim — legibility comes from placing text on the solid teal or white fields beside images, not over them.

## Motion
Interactive transitions are fast and mechanical: `transform 0.4s cubic-bezier(0, 0.7, 0, 1)` and `background-color 0.4s cubic-bezier(0, 0.7, 0, 1)` drive larger state changes (hover fills, panel shifts), while `transform 0.1s ease-out` and a combined `border-color, color, background-color 0.1s, 0.1s, 0.1s ease-out, ease-out, ease-out` handle snappy micro-interactions on buttons and links. Two named keyframe animations exist: a logo-list-slider driving the continuous horizontal scroll of the logo marquee, and a fade-in used for section/element entrance on scroll. The overall motion character is utilitarian and quick (100–400ms), favoring instant-feeling feedback over springy or decorative motion.

## Guardrails
- Never render the hero as a full-bleed gradient wash — the hero fill is a flat solid teal; gradients are confined to small decorative elements under 5% of page area.
- Do not round the navbar or the content cards — navbar is a sharp 0px-radius edge-to-edge bar, and every card family measured carries 0px radius and 0px padding.
- Do not substitute the glass/outline nav button for the hero primary — the primary CTA is the dark #005A64 capsule with drop shadow; nav/secondary buttons use the lighter #0F7F85 pill.
- Keep yellow (#FFEE11) confined to small pill badges — it must never spread to buttons, backgrounds, or text at scale.
- Preserve AdjustedYuGothic as the near-universal body/heading face; reserve Roboto strictly for oversized numeral statistics, not headings or body copy.
- Do not add dark surfaces or dark-mode contrast — background roles are white/pale-gray only; darkness is reserved for the deepest teal CTA and text ink.
