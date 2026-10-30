---
version: "1"
name: "Lime Ledger"
description: "A light, high-key booking-UI system built on a lime-to-white page field, pill-shaped controls, and a rationed cobalt accent that carries every primary action and gradient band."
colors:
  background: "#FFFFFF"
  surface-hero: "#ACEF81"
  surface-muted: "#F4F4F4"
  text-primary: "#2D3137"
  text-secondary: "#868686"
  text-disabled: "#AFAFAF"
  accent-primary: "#0E41D2"
  accent-lime: "#ACEF81"
  border-light: "#E5E5E5"
typography:
  display-lg:
    fontFamily: "PT Root UI Web"
    fontSize: "14px"
    fontWeight: 480
    lineHeight: "1.29"
  headline-md:
    fontFamily: "Spoof"
    fontSize: "36px"
    fontWeight: 400
    lineHeight: "1.11"
  body-md:
    fontFamily: "PT Root UI Web"
    fontSize: "24px"
    fontWeight: 480
    lineHeight: "1"
  label-md:
    fontFamily: "Spoof"
    fontSize: "36px"
    fontWeight: 500
    lineHeight: "0.89"
  body-base:
    fontFamily: "PT Root UI Web"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
  accent-display:
    fontFamily: "Spoof"
    fontSize: "36px"
    fontWeight: 500
    lineHeight: "0.89"
spacing:
  base: "4px"
  gap-sm: "8px"
  gap-md: "16px"
  gap-lg: "24px"
  section-padding: "196px"
rounded:
  control: "4px"
  card: "16px"
  pill: "50px"
  circle: "50px"
  panel: "24px"
components:
  button-primary-dark:
    background: "#0E41D2"
    text-color: "#FFFFFF"
    radius: "16px"
    height: "56px"
    padding: "0px 16px"
    border: "1px solid rgba(0, 0, 0, 0)"
    hover-background: "#0636C8"
  button-primary-lime:
    background: "#ACEF81"
    text-color: "#0D41D2"
    radius: "16px"
    height: "56px"
    padding: "0px 16px"
    border: "1px solid rgb(172, 239, 129)"
    hover-background: "#A5E57C"
  button-nav-ghost:
    background: "transparent"
    text-color: "#000000"
    radius: "0px"
    height: "34px"
    padding: "0px"
  button-icon-circle:
    background: "#FFFFFF"
    text-color: "#2D3137"
    radius: "50%"
    height: "40px"
    shadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px 0px"
  card-media-top:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  card-media-body:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  card-stat-tile:
    background: "#EAF2FF"
    radius: "16px"
    padding: "24px"
  card-gradient-banner:
    background: "linear-gradient(90deg, rgb(20, 73, 220) 0px, rgb(30, 83, 236) 12.5%, rgb(38, 88, 243) 25%, rgb(40, 90, 246) 50%, rgb(39, 89, 245))"
    radius: "16px"
    text-color: "#FFFFFF"
---
# Lime Ledger
Source: https://ostrovok.ru/

## Overview
This is a flat, minimalist booking-product system riding on high-key brightness rather than dark-mode depth: a lime-green hero field, a white page body, and a single cobalt-blue accent (`#0E41D2`) deployed with discipline across primary actions, link text, and occasional gradient bands. Corners run rounded throughout — 16px cards and buttons, 50px/9999px pills and circles for utility controls — giving the whole system a soft, consumer-travel friendliness rather than a technical or editorial one. Illustration (hand-drawn vector scenes) and photography (hotel exteriors, food, dark atmospheric night shots) sit side by side in the card grid, which is the system's real signature: color only lands in UI chrome and gradient bands, while photographic cards carry their own tonal range.

## Composition
The first screen opens on a saturated lime-green hero block holding the display headline, a pill-segmented booking-mode switcher, and a white-filled search bar — all color, no photography, the only full-saturation block on the page. Immediately below, the hero's rounded bottom edge gives way to a white canvas where content alternates in bands: a full-bleed photographic promo strip, a horizontal card-grid section, a repeat lime-field section for a second grid, a dark photographic full-bleed band (night texture) hosting both a headline and a card row, a light-tinted band of stat tiles plus one blue gradient tile, and finally a blue gradient app-download band before the footer. The deliberate choice is to let whole sections flip background (lime → white → photographic-dark → light-tint → blue-gradient) rather than hold one neutral canvas throughout with color only in cards — this produces a magazine-banded rhythm instead of a uniform scroll, at the cost of visual consistency between bands.

## Colors
Lime (`#ACEF81`, ~10% pixel share) is the hero and secondary-section surface — not an accent but a structural background role, establishing the brand's dominant warm-cool contrast against cobalt. Cobalt (`#0E41D2`/`#0A4FEC`, ~8% combined) is reserved for the single primary CTA fill, link-colored text, icon tints, and gradient bands — it never appears as a large flat background except inside banner cards. White (`#FFFFFF`, ~68% declared area, ~51% rendered) is the dominant page canvas, carrying search inputs, button fills, and most section backgrounds. `#F4F4F4` is a secondary light-neutral used for stat-tile fills and subtle section separation. Ink text runs `#2D3137` (primary) with `#868686` muted and `#AFAFAF` disabled — all neutral, never tinted. Borders are near-invisible, `#E5E5E5` or transparent white, keeping surfaces seamless rather than outlined. The system deliberately leaves imagery uncolored — photography and illustration supply their own palette (sky blues, night greens, food tones) and are never overlaid with a brand tint.

## Typography
Two families carry the entire system: PT Root UI Web for body copy, UI labels, and dense running text (16px/400 as the char-weighted default, scaling up to 24px/480 for emphasis lines), and Spoof as the display/headline face at large sizes (36px, swinging between 400 regular for headlines and 500 medium for short label-style accents) with unusually tight leading (1.11 and 0.89) that compresses multi-line headlines into a dense block. Spoof is the signature accent: every section headline and hero title uses it, while PT Root UI Web handles everything functional — inputs, buttons, card metadata, nav. No italic or serif accent exists in this system; the contrast is purely geometric-sans display vs. geometric-sans body at different weights and leading.

## Layout
Content is held to a 1380px max-width, centered, with generous 196px section padding establishing a slow, airy vertical rhythm between major bands. Card grids vary by density: a 3-column, 8px-gap grid with an uneven row split (25%/25%/49% width distribution) showing that one card in a row intentionally spans wider than its siblings — a deliberate bento-style asymmetry rather than uniform thirds. A separate 2-column grid runs tighter at 16px/32px gaps for 3 items (two-up with wraparound). Horizontal card rails (the promo strip, the food-city rail, the night-castle rail) scroll as rows of 4–5 similarly-sized cards with a trailing chevron-in-circle affordance. Spacing increments (4, 8, 12, 16, 24px) are small and tight at the component level, reserved for internal card padding and control gaps, while the 196px section padding does all the macro-rhythm work.

## Components
- **Navbar**: edge-to-edge, transparent-on-lime bar, ~29 ghost text links/icons measured at 34px height, 0 radius, transparent fill, black text — a dense utility cluster (heart/wishlist, bell, language flag, grid-apps icon, help, sign-in with person icon, hamburger) plus one pill-shaped secondary button (rounded ~50px, light-lime fill) for a property-listing CTA. Logo is wordmark-only, top-left, cobalt-blue lettering with an exclamation mark.
- **Hero primary button**: solid cobalt `#0E41D2`, white text, 16px radius, 56px height, 0px/16px padding, 1px transparent border, hover darkens to `#0636C8` — this is the search/primary action button sitting in the hero's booking form, the single most emphasized control on the first screen.
- **Hero segmented control**: pill-group of 3 tabs (accommodation/transfers/business) in white or lime-tinted pill, rounded ~50px, with the active tab shown as a solid white capsule with a small line-icon plus label.
- **Mid-page CTA button variant**: lime fill `#ACEF81`, cobalt text `#0D41D2`, 16px radius, 56px height, same padding rhythm as the primary — this is the inverse-color secondary CTA used inside dark/photographic bands (e.g., the "sign in" prompt over a gradient tile) where cobalt-on-lime reads as a full-contrast action against saturated surrounds.
- **Circular icon buttons**: white fill, `#2D3137` icon/text, full-circle 50% radius, 40px height, resting shadow `rgba(0, 0, 0, 0.15) 0px 2px 8px 0px` — used as carousel-advance chevrons floating at the right edge of horizontal card rails.
- **Media-top card (image-bleed only)**: transparent container, 0 radius, 0 padding — a full-bleed photo filling the entire card with no text overlay; used in dense rail grids where the photo alone (castle, food plate) is the content.
- **Media + body card**: same transparent/0-radius/0-padding shell, image fills the top ~60–70% of the card, a white or light-neutral footer strip below holds a small label line (location name) and a bolded price line — this is the dominant hotel/offer card used across the autumn-sale rail, food-city rail, and mysterious-night rail.
- **Text-only card**: transparent, 0 radius, used for the pure-copy tiles inside the stat row (bold headline figure + one line of supporting copy on a light `#F4F4F4`/`#EAF2FF` tint).
- **Gradient banner/stat card**: fill is the verbatim `linear-gradient(90deg, rgb(20, 73, 220) 0px, rgb(30, 83, 236) 12.5%, rgb(38, 88, 243) 25%, rgb(40, 90, 246) 50%, rgb(39, 89, 245))`, 16px radius, white headline/body text, small decorative icon chips (percent badge, coin icons) floating on the surface, appears once per stat-row section as the rightmost, most emphasized tile in a 3-up row.
- **Email-capture band**: full-bleed section on a blue gradient background (deeper cobalt-to-teal diagonal), containing a white rounded input field, a lime pill-shaped submit button, and a checkbox consent line — illustration of a reclining cartoon character plus floating percent-badge chips occupies the right two-thirds of the band.
- **App-download band**: full-bleed cobalt-blue section, left-aligned bullet list in white text, a white-bordered QR code square (0 radius, white fill), and a large illustrated hand/phone-mockup composition filling the right half.
- **Footer**: white background, wordmark top-left, three stacked app-store badge buttons (dark pill/rounded-rect), a 3-column link list (plain text, no card chrome), social icon row, and a bottom legal strip separated by a hairline `#E5E5E5` divider.

## Graphics & Effects
Three gradients are measured, each scoped to a small element, not the page: a 90°-angle cobalt sweep (`linear-gradient(90deg, rgb(20, 73, 220) 0px, rgb(30, 83, 236) 12.5%, rgb(38, 88, 243) 25%, rgb(40, 90, 246) 50%, rgb(39, 89, 245))`) fills the stat-row's rightmost tile and the app-download band, covering roughly 6% of total page area; a steeper diagonal cobalt-to-sky-blue gradient (`linear-gradient(171deg, rgb(10, 79, 236) 41.56%, rgb(126, 239, 255) 121.36%)`) fills the email-capture band at ~1.5% of page area; a short white fade (`linear-gradient(0deg, rgb(255, 255, 255), rgb(255, 255, 255) 25%, rgba(255, 255, 255, 0))`) is a bottom-edge scrim, likely feathering a card's photo into its white footer strip. Photographic full-bleed bands (the ski-lift promo, the night-forest/spiderweb section) use the photo directly as background color with white headline text laid over the darker tonal regions — no visible dark scrim gradient was measured, so legibility relies on the source photo's own dark areas. Shadows are soft and tight: `rgba(0, 0, 0, 0.15) 0px 2px 8px 0px` for floating circular controls, `rgba(75, 100, 171, 0.25) 0px 0px 11px 0px` for a blue-tinted glow (likely the gradient card's ambient lift), and `rgba(45, 49, 55, 0.3) 0px 2px 12px 0px` for a slightly heavier card elevation. No backdrop-blur is used anywhere (`blur(0px)`) — this system has no glassmorphism; elevation is conveyed entirely through flat drop shadows on a bright canvas.

## Motion
Transitions are short and utilitarian: `background-color, box-shadow` at `0.32s ease` for button hover fills, `transform 0.32s ease` for pressed/scaled states, `color 0.16s ease` for faster text-color swaps on hover, and `scale 0.32s ease` for card or icon emphasis. A named keyframe (`flock-ball-clip-rotate`) suggests a small rotating decorative element, and load/preloader keyframes (`uxs-1e16qjk-load`, `uxs-1f2funi-preloader`) drive an initial-paint reveal rather than ongoing ambient motion. Overall the motion language is snappy and functional — sub-350ms, ease-timed, built for hover/press feedback on buttons and cards rather than scroll-triggered or staggered choreography.

## Guardrails
- Never render the hero as a dark or black canvas — the dominant field is lime-green into white; cobalt is a rationed accent, not a background.
- Do not apply the measured gradients as full-page or full-hero fills — each is scoped to one card or band (stat tile, email band, app-download band) at single-digit page-area coverage.
- Keep all primary/secondary buttons at 16px radius and 56px height; do not drift them toward full-pill unless building the segmented-tab or icon-circle controls, which alone use 50px/9999px radii.
- Do not add blur/glassmorphism — elevation here is flat-shadow only (`blur(0px)` everywhere measured).
- Preserve the asymmetric 3-column grid's uneven row split (25/25/49) where it occurs — do not normalize it into equal thirds.
- Keep Spoof confined to headlines/short labels at tight leading; do not use it for body or UI copy, which stays in PT Root UI Web.
