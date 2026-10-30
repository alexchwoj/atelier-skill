---
version: "1"
name: "Corporate Ledger Blue"
description: "Light corporate editorial system on a pale blue field, with a single saturated diagonal-blue gradient reserved for the primary split CTA, sharp-edged utility surfaces, and rounded media cards only at the page's terminal band."
colors:
  background: "#EBF4FF"
  surface: "#FFFFFF"
  surface-inverse: "#031120"
  text-primary: "#1F2937"
  text-secondary: "#777777"
  text-muted: "#B0B0B0"
  accent-blue: "#00559B"
  accent-link: "#1473E6"
  border-hairline: "#DCDCDC"
  border-blue: "#004F92"
typography:
  display-lg:
    fontFamily: "bcaSans"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: "1.67"
  headline-md:
    fontFamily: "bcaSans"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: "1.33"
  body-md:
    fontFamily: "bcaSans"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.7"
  label-md:
    fontFamily: "bcaSans"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: "1.33"
  accent-serif:
    fontFamily: "cordon-bleu"
    fontStyle: "italic"
    role: "emphasis interruption on select words within headings/body, e.g. defined terms"
spacing:
  base: "4px"
  gap: "16px"
  micro: "8px"
  control-pad: "10px"
  section-padding-lg: "40px"
  section-padding-md: "36px"
rounded:
  control: "8px"
  card: "8px"
  pill: "9999px"
components:
  navbar:
    background: "transparent"
    height: "38px"
    width: "100%"
    radius: "0px 0px 0px 0px"
  button-hero-primary-right:
    background: "linear-gradient(265deg, rgb(2, 57, 198) 2.8%, rgb(4, 106, 190) 77.42%)"
    text-color: "#FFFFFF"
    radius: "0px 9999px 9999px 0px"
    height: "48px"
    padding: "0px 42px"
  button-hero-primary-left:
    background: "linear-gradient(265deg, rgb(2, 57, 198) 2.8%, rgb(4, 106, 190) 77.42%)"
    text-color: "#FFFFFF"
    radius: "9999px 0px 0px 9999px"
    height: "48px"
    border: "1px solid rgba(0, 80, 147, 0.3)"
    hover-opacity: "0.8"
  button-utility-white:
    background: "#FFFFFF"
    text-color: "#000000"
    radius: "0px"
    height: "48px"
    padding: "8px 40px 8px 12px"
    border: "1px solid rgba(0, 80, 147, 0.3)"
  button-footer-link:
    background: "transparent"
    text-color: "#1F2937"
    radius: "0px"
    height: "29px"
  card-content-row:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  card-media-white:
    background: "#FFFFFF"
    radius: "8px"
    shadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px"
    padding: "0px"
---
# Corporate Ledger Blue
Source: https://promo.bca.co.id/id/all/2026/09/29/15/Palem-Cinde

## Overview
This is a light, institutional editorial system: an information-dense promo-detail page built on a near-white/pale-blue field, sharp-cornered utility components, and one rationed diagonal-blue gradient reserved entirely for the primary action pair. It reads as corporate Swiss-adjacent — left-aligned headings, hairline dividers, dense bulleted legal copy — with a single moment of consumer-facing warmth: rounded 8px white cards with soft shadow at the page's closing recommendation band. The system deliberately withholds roundness and color everywhere except that one CTA cluster and that one card family, making both feel earned rather than decorative.

## Composition
The first screen opens with a thin transparent navbar (38px), then a white search-and-utility bar with a solid blue "Cari" button, then breadcrumb, a bold blue headline, a date-range subline, and a large full-width photographic banner (rounded corners, object-fit cover) — a food tableau establishing the seasonal/promotional subject. Below the banner, a pale surface panel opens with a small "channel" row (two tiny icon+label chips), then a mixed-weight heading with an italic-serif emphasis clause, then a long single-column stack of bulleted terms-and-conditions copy in body text — no cards, no imagery, pure text density (the measured 8-row/98%-width stack). The page closes with a "Promo Serupa" band: a uniform 4-up card grid, then a dark full-bleed footer. The deliberate choice is to run the entire middle of the page as unstyled text rhythm rather than breaking terms into decorative cards — this keeps legal/procedural content legible and skimmable rather than falsely elevating it with shadow and radius it hasn't earned; the rejected alternative would be wrapping every clause in its own card, which would visually overweight routine conditions.

## Colors
The dominant pixel field is a pale lavender-blue (`#F0F0FF`/`#EBF4FF`, ~46–65% of the page) — this is the page background, not a card surface. A near-white/cyan-white band (`#F0FFFF`, ~18%) covers the panel holding the terms copy. A deep teal-black (`#001818`≈`#031120`, ~16%) is the footer, the only dark surface on the page. Pure white (`#FFFFFF`, ~8%) carries the header bar, utility button, and the closing card grid. Text ink is `#1F2937` for body copy, `#737777`/`#777777` for secondary labels, and `#B0B0B0` for the most muted captions. The only saturated color is the diagonal blue gradient (`linear-gradient(265deg, rgb(2, 57, 198) 2.8%, rgb(4, 106, 190) 77.42%)`) rationed to under 1% of page area — exclusively the split hero CTA pair. Accent blue `#00559B`/`#1473E6` appears only in links and small icon glyphs. Nothing else is colored: imagery carries all remaining visual richness.

## Typography
A single sans face, bcaSans, runs the entire hierarchy — 24px/700 for the page headline (display-lg), 24px/400 for section headings and labels (headline-md/label-md), and 16px/400 body at 1.7 line-height for dense paragraph and list copy. There is no separate display size beyond 24px; hierarchy comes from weight (700 vs 400) and color (blue headline vs dark-gray body), not scale jumps. A second family, cordon-bleu, appears only as an italicized accent clause inside otherwise-regular headings and inline within body sentences — a signature emphasis device covering just one or two words at a time, never a full line, repeating each time a defined/promotional term needs calling out.

## Layout
Content is capped at a 1280px max-width, centered. The terms section is a true single-column stack (rows measured at 98% width each) — not a grid, a vertical list rhythm with 4px/8px internal spacing and paragraph gaps. Two structured grids appear near the page's end: a 4-column, 16px-gap grid of four equal-width recommendation cards (rows of [4]), and supporting 12-col and 3-col asymmetric splits elsewhere in the mid-page utility rows (a 17/50 two-up split and a 32/66 two-up split) used for label+content or icon+text pairings, not for cards. Density is high: hairline-only separation, no big whitespace bands except the section padding (36–40px) between the terms panel and the recommendation band.

## Components
- **Navbar** — edge-to-edge square bar, 38px tall, 100% viewport width, 0px radius all four corners, transparent background, static (no scroll transform), holding 4 top-level items; a second-tier bar beneath carries the logo, a search input, a "Kategori" dropdown, a solid blue "Cari" button, and language toggle (ID/EN) — this second bar is white, not part of the 38px transparent strip.
- **Hero primary CTA (split pair)** — the single most emphasized control on first screen: a two-piece pill button using the same gradient fill `linear-gradient(265deg, rgb(2, 57, 198) 2.8%, rgb(4, 106, 190) 77.42%)` on both halves, left segment radius `9999px 0px 0px 9999px` with `border: 1px solid rgba(0, 80, 147, 0.3)`, right segment radius `0px 9999px 9999px 0px`, both 48px tall, white text; hover reduces opacity to 0.8. This pair sits as the utility "channel" selector (myBCA / QRIS icons) directly under the promo headline.
- **Button, utility white** — square-cornered (0px radius), white fill, black text, 48px tall, padding `8px 40px 8px 12px`, hairline border `1px solid rgba(0, 80, 147, 0.3)` — the "Cari" search-adjacent or secondary action; sharp-corner feel signals it as a functional control, not a promotional CTA.
- **Button, footer/inline link** — transparent, 0px radius, 29px tall, dark-gray text `#1F2937`, no padding — used for share icons, "Lihat semua" and similar in-flow text actions.
- **Terms/body content stack** — appears in the mid-page panel; 8 full-width (98%) stacked rows of body text, transparent background, 0px radius, no padding — bulleted legal/procedural copy, italic-serif spans on defined terms, closing with location and date-range lines and a row of circular share icons.
- **Recommendation card (media card)** — appears in the "Promo Serupa" band at page end, ×4 in a single row (4-column grid, 16px gap). White fill, 8px radius, shadow `rgba(0,0,0,0) 0px 0px 0px 0px, rgba(0,0,0,0) 0px 0px 0px 0px, rgba(0,0,0,0.1) 0px 4px 6px -1px, rgba(0,0,0,0.1) 0px 2px 4px -2px`, 0px padding. Anatomy top-to-bottom: full-bleed top photograph (roughly two-thirds of card height) with a small circular brand-logo badge overlapping its lower-left corner, then a bold dark headline (two lines max), then a small muted caption line carrying the date range, set in the card's bottom padding-less band.
- **Footer** — full-bleed dark band, background `#031120`, holding a monochrome logo mark and 21 text links organized into labeled columns (contact, social, office address), plain white/gray text, no cards, no radius.

## Graphics & Effects
The only gradient on the page is `linear-gradient(265deg, rgb(2, 57, 198) 2.8%, rgb(4, 106, 190) 77.42%)`, and it is confined to the small split-pill CTA control near the top of the page — well under 1% of total page area; it must never be extended to a hero background or full-bleed wash. The hero banner itself is a straight photographic image (a styled food tableau) with rounded corners and no scrim, cover-fit, occupying the full content width beneath the headline. The recommendation cards' shadow (`rgba(0,0,0,0.1) 0px 4px 6px -1px, rgba(0,0,0,0.1) 0px 2px 4px -2px`) is the only elevation cue on the page — a soft, low-offset drop shadow implying a slight lift over the pale background, paired only with white surfaces and 8px radius. No noise, grain, or pattern texture is present; the system is flat-color and photographic, not textured.

## Motion
Transitions are utilitarian and brief: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1)` for larger state changes, `all 0.2s cubic-bezier(0, 0, 0.2, 1)` and `transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)` for hover/press feedback (e.g., the CTA's opacity drop to 0.8), and a slower `transform 0.8s ease` for incidental entrance movement. Named keyframes (fade, skeletonPulse, pulse, shimmer, bounce, sway) indicate loading skeletons and subtle idle motion on interactive icons rather than any scroll-linked or parallax choreography — motion here is functional feedback, not spectacle.

## Guardrails
- Never extend the diagonal blue gradient beyond the split hero CTA pair — it is not a background, banner, or card fill.
- Keep the terms/conditions section as an unstyled single-column text stack; do not wrap its bullets into cards or add radius/shadow to it.
- Reserve 8px radius and drop shadow exclusively for the closing recommendation card family; all other buttons and panels stay 0px-radius/sharp.
- Do not darken or saturate the page background — the dominant field is pale lavender-blue/white, not a dark or vibrant surface.
- Preserve the navbar as a transparent, 0px-radius, edge-to-edge 38px strip distinct from the white search bar beneath it — do not merge them into one bar.
- Limit italic-serif (cordon-bleu) use to one- or two-word emphasis spans inside bcaSans copy; never set full headings or paragraphs in it.
