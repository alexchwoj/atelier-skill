---
version: "1"
name: "Sunlit Didone Editorial"
description: "Light-mode-default editorial system on warm cream, built from a serif-didone display, a hand-italic script accent, and full-bleed sun-drenched photography behind soft mauve-toned glass cards."
colors:
  background: "#FEFAF7"
  surface: "#FFF0E1"
  text-primary: "#705C5C"
  text-secondary: "#FEFAF7"
  ink-black: "#000000"
  border-neutral: "#C1C1C1"
  muted-mauve: "#9A8484"
  accent-warm: "#FCDEC0"
typography:
  display-lg:
    fontFamily: "cabrito-didone-normal"
    fontSize: "58px"
    fontWeight: 400
    lineHeight: "1.25"
  headline-md:
    fontFamily: "cabrito-didone-normal"
    fontSize: "38px"
    fontWeight: 400
    lineHeight: "1.32"
  body-md:
    fontFamily: "Quattrocento Sans"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "1.8"
  label-md:
    fontFamily: "cabrito-didone-normal"
    fontSize: "26px"
    fontWeight: 400
    lineHeight: "1.37"
  accent-script:
    fontFamily: "arolse-belmonteria-script"
    fontSize: "26px"
    fontWeight: 400
    lineHeight: "1.4"
spacing:
  base: "8px"
  unit-sm: "11px"
  unit-md: "16px"
  unit-lg: "32px"
  hairline: "2px"
  section-padding: "260px"
rounded:
  control: "50px"
  card: "75px"
  pill: "100px"
components:
  navbar:
    background: "transparent"
    height: "260px"
    width: "100%"
    radius: "0px 0px 0px 0px"
  button-nav-cta:
    background: "#705C5C"
    text-color: "#FFFFFF"
    radius: "100px"
    height: "76px"
    padding: "28.8px 33.6px"
  button-hero-primary:
    background: "#FFF0E1 (observed near-cream solid)"
    text-color: "#705C5C"
    radius: "100px (observed, full pill)"
    height: "76px"
    padding: "28.8px 33.6px"
  button-nav-link:
    background: "transparent"
    text-color: "#FEFAF7"
    radius: "0px"
    height: "76px"
    padding: "0px"
  button-secondary-mauve:
    background: "#9A8484"
    text-color: "#FFFFFF"
    radius: "100px"
    height: "63px"
    padding: "0px 33.6px"
  card-portrait-arch:
    background: "transparent"
    radius: "75px 75px 0px 0px"
    padding: "0px"
    border: "none, gold-glitter arch overlay"
  card-testimonial:
    background: "#FEFAF7"
    radius: "32px"
    padding: "32px"
    shadow: "rgb(128, 128, 128) 0px 0px 5px 0px"
  input-field:
    background: "#FFF0E1"
    text-color: "#705C5C"
    radius: "8px"
    height: "63px"
---
# Sunlit Didone Editorial
Source: https://www.donnamariella.net/

## Overview
This is a warm, feminine, editorial-minimalist system: a cream-and-mauve palette carrying a large didone display serif against full-bleed sun-flared photography. It reads as luxury-adjacent wellness editorial — restrained color, generous whitespace, and one recurring hand-script accent standing in for a signature. Glass and grain are nearly absent; depth comes from photographic texture (marbled watercolor washes, gold-leaf arches) rather than blur or shadow layering.

## Composition
The first screen is a full-bleed backlit photograph (a figure with hair and fabric caught in wind) faded to white at the very top edge via a vertical scrim, with a centered ring-motif mark, wordmark, and a thin transparent-button nav row sitting on it. Headline hierarchy stacks three tiers directly on the photo: an oversized italic didone headline, a large script-italic subline below it, then a smaller italic line — before one solid pill CTA anchors the fold. Below the fold the page shifts to flat cream, alternating short serif-question bands with a full-width warm marbled-texture band (belief statements, an empty avatar-ring portrait slot, a two-up arch-photo chooser). A mauve-wash testimonial band with two rounded quote cards follows, then a solid dark-mauve footer band closes the page. Rhythm is built from alternating background value (cream flat → warm texture → cream flat → mauve solid) rather than from grid density — this is a deliberate editorial choice over a uniform card-grid marketing page.

## Colors
Background is dominant warm off-white `#FEFAF7` (measured area 73%, and the largest pixel-field share as `#FFF0F0`/`#F0F0F0` at ~55% combined) — this is the true page canvas, not any single gradient. Text ink is a soft mauve-brown `#705C5C` (26.7% area) used for nearly all body and heading copy — a warm neutral standing in for both a "gray" and a brand color simultaneously. `#FEFAF7` doubles as reversed text-on-photo (secondary text tone over the dark image hero). `#FFF0E1` is the sole tinted surface — used for input fields, the hero CTA fill, and internal card/summary blocks (the author's own tokens confirm this single tint covers text-blocks, shape-blocks, and carousel cards alike). `#9A8484` is a muted secondary-mauve reserved for one lower-emphasis button. Pure black and `#C1C1C1` exist only as functional ink/border, never as a design color. No blue, green, or saturated accent exists anywhere — the entire system is monochromatic-warm, rationing color to value shifts within one mauve-cream family.

## Typography
Three-family system with clear role separation. `cabrito-didone-normal` — a high-contrast serif didone — carries every display and label moment (58px display, 38px headline, 26px label), always italic in the hero. `Quattrocento Sans` is the workhorse body face at 18px/1.8 (measured char-weighted 17.6px), regular weight, generous leading for long-form paragraphs. `arolse-belmonteria-script` is the signature accent — a flowing hand-script used exclusively for short interstitial lines ("what's next"-type transitions and section intros), never for body copy, appearing once or twice per section at roughly label-size scale. Hierarchy runs script (voice) → didone italic (statement) → didone upright (structural heading) → sans body (explanation).

## Layout
No visible column grid dominates; this is a stacked full-width sectional layout with a generous 260px section padding rhythm and small 11px/16px/32px internal gaps. Where measured, an underlying 26-column grid governs internal proportions but resolves visually to single or two-item rows: portrait pairs run 50/50, testimonial cards run 50/50, and hero/footer content is a single full-width column. Card density is low — most "cards" are transparent full-width text blocks with zero radius and zero padding, not bounded containers; the only true bounded cards are the two testimonial panels and the arch-topped portrait pair. Content max-width is narrow and centered, consistent with an editorial reading measure rather than an app-dashboard grid.

## Components
- **Navbar**: edge-to-edge, 0px/0px/0px/0px radii (square, full 1920px width, no inset), 260px tall, transparent background sitting over the hero photo, static (non-sticky observed). Center-aligned circular ring logomark above a serif wordmark; nav links are ~4-5 transparent-fill text items (`#FEFAF7`, 0px radius, 76px tall, no padding) plus a mail-icon utility button at far left. No visible CTA button inside the navbar itself in the hero screen — the CTA cluster observed at 76px/100px-radius/`#705C5C` fill belongs to a secondary nav-adjacent utility, not the hero's primary action.
- **Hero primary button**: one solid pill beneath the three-tier headline stack, observed near-cream/blush fill (`#FFF0E1`) with mauve `#705C5C` text, full pill radius (~100px), roughly 76px tall with generous horizontal padding — the single highest-contrast, most solid element on the first screen and the clear primary CTA.
- **Nav/utility button (dark pill)**: `#705C5C` fill, `#FFFFFF` text, 100px radius, 76px height, 28.8px/33.6px padding — used for "get to know me"-style secondary CTAs mid-page.
- **Secondary mauve button**: `#9A8484` fill, white text, 100px radius, 63px height — used once mid-page beneath the testimonial band ("see more" affordance).
- **Transparent text-link buttons**: transparent fill, `#FEFAF7`/ink text, 0px radius, 76px tall, no padding — the nav link style, ×10 across the header row.
- **Portrait-arch card pair**: two-up row, transparent fill, top corners rounded into a full arch (~75px radius), gold-glitter-textured border framing a photographic portrait filling the entire arch; a serif heading and italic caption sit below each image, outside the card bounds.
- **Testimonial card**: ×2 side-by-side, `#FEFAF7` fill, soft rounded corners (~32px), subtle shadow `rgb(128, 128, 128) 0px 0px 5px 0px`, generous internal padding; anatomy top-to-bottom is a large italic serif quote block, then a smaller attribution line with inline underlined links.
- **Full-width text-block "cards"**: the measured 7-row and 4-row/3-row/2-row families — transparent, 0px radius, 0px or single top-padding (259.625px on the first family), stacking pure heading+body text with no visible container; these are section rhythm dividers, not cards.
- **Email-capture band**: three side-by-side input fields (`#FFF0E1` fill, soft rounded corners, placeholder text in muted mauve) plus one solid blush pill submit button, set inside the dark footer band.
- **Footer**: solid dark-mauve band (`#705C5C`-family), centered ring logomark repeated in gold outline, 9 text links in a single row, transparent background otherwise.

## Graphics & Effects
The only measured gradient, `linear-gradient(rgb(255, 255, 255), rgba(0, 0, 0, 0))`, is a small top-of-hero vertical scrim (covering roughly the top ~4% of page height) that fades the photograph to white at the very top edge behind the nav — it is not a full-hero wash; the rest of the hero stays photographic and warm-toned. Mid-page sections use a warm marbled/watercolor texture image (cream-gold-terracotta veining) as a full-width band background, giving organic, biophilic depth without blur. Portrait cards carry a gold-glitter-grain texture on their arch borders. A live canvas element is present on the page (treat as decorative motion; substitute a static warm-gradient or marble-texture frame when rebuilding). Elevation is minimal and confined to the two testimonial cards via a soft gray glow shadow; no glassmorphism or backdrop-blur is used anywhere.

## Motion
Transitions are soft and utilitarian: `opacity 0.9s ease` for slow content fades, `opacity 0.1s linear` for near-instant state flips, and `transform, width 0.25s / cubic-bezier(0.2, 0.6, 0.3, 1)` for spring-flavored size/position changes on interactive elements. A general `opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1)` governs standard hover/reveal fades. A dedicated font-loading keyframe animation confirms the didone/script faces swap in post-load — build in a brief FOUT-safe fade for display type. Overall motion character is gentle, unhurried, and fade-led rather than slide- or scale-led, matching the editorial pacing.

## Guardrails
- Never saturate the palette — every color is a mauve/cream value shift, not a hue change; no blue, green, or vivid accent may be introduced.
- Do not turn the navbar into a bounded or rounded bar — it is edge-to-edge, full-width, perfectly square-cornered, and transparent over the photo.
- Do not fill the hero background with the top scrim gradient — that gradient covers only a thin top band; the hero body stays photographic.
- Keep the didone serif italic exclusively for headline-tier statements and the script face exclusively for short interstitial lines — never apply either to body paragraphs.
- Do not add drop shadows, glass blur, or heavy elevation beyond the two testimonial cards' soft gray glow — depth here comes from texture and photography, not layering.
- Preserve the two-up (not three-up) rhythm for portrait/testimonial rows — this system pairs, it does not triple.
