---
version: "1"
name: "Monochrome Etch"
description: "A black-and-white editorial-photography system on a white canvas, carried by a tall condensed display serif and one rationed celadon-green pill accent."
colors:
  background: "#FFFFFF"
  surface: "#333333"
  text-primary: "#000000"
  text-secondary: "#FFFFFF"
  accent: "#A0DD79"
typography:
  display-lg:
    fontFamily: "etch-salon-serif"
    fontSize: "52px"
    fontWeight: 400
    lineHeight: "1.08"
  headline-md:
    fontFamily: "etch-salon-serif"
    fontSize: "44px"
    fontWeight: 400
    lineHeight: "1.23"
  body-md:
    fontFamily: "etch-salon-san-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "1.78"
  label-md:
    fontFamily: "etch-salon-san-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "1.56"
  accent-serif:
    fontFamily: "Georgia"
    fontStyle: "italic"
  label-mono:
    fontFamily: "Raleway"
spacing:
  base: "10px"
  gap: "27px"
  section-padding: "40px"
rounded:
  control: "5px"
  pill: "200px"
  circle: "100px"
components:
  button-primary:
    background: "#A0DD79"
    text-color: "#000000"
    radius: "200px"
    height: "51px"
    padding: "15px 22px"
    hover-shadow: "rgba(0, 0, 0, 0.16) 0px 20px 38px 0px"
    hover-transform: "matrix(1, 0, 0, 1, 0, -3)"
  button-nav-link:
    background: "transparent"
    text-color: "#333333"
    radius: "0px"
    height: "28px"
    padding: "0px 0px 0px 40px"
  card-nav-panel:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  card-service-tile:
    background: "transparent"
    radius: "0px"
    padding: "0px 10px"
  card-media-feature:
    background: "transparent"
    radius: "0px"
    padding: "0px 40px"
  card-full-bleed-media:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  card-team-portrait:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  card-value-row:
    background: "transparent"
    radius: "0px"
    padding: "192px 0px"
---
# Monochrome Etch
Source: https://etchsalon.com/

## Overview
This is a black-and-white editorial system — monochrome photography doing the work of a palette, with a tall, slightly condensed display serif supplying the only ornament. It reads as Swiss-adjacent minimalism crossed with salon-luxury editorial: generous white page ground (~51% of pixels), near-full-bleed grayscale photography, and a single saturated celadon-green pill reserved for calls to action. There is no gradient language, no glassmorphism, no shadow-heavy elevation system — depth comes entirely from photographic tone and from one soft ambient drop-shadow on the primary button. The aesthetic is confident and restrained: let the imagery and the serif headline carry the voice.

## Composition
The first screen is a full-bleed grayscale photographic hero (interior salon scene) under a flat, transparent, edge-to-edge navbar; a dark scrim sits behind the headline block so white serif type and a green pill CTA remain legible against the photo. Below the fold the page shifts to a strict white canvas: a two-column portrait-plus-copy band (black-and-white architectural photo left, body copy and a testimonial right), then a service-tile row of five narrow grayscale image cards, then a team grid of portrait cards in pairs/triples, then a two-up full-bleed photo pairing, then a value-proposition band, and finally a dark closing CTA photo band bleeding into a flat dark footer. Density alternates deliberately: tight uniform grids (service tiles, team portraits) are bracketed by wide, quiet whitespace bands of copy — rejecting a continuous-scroll magazine density in favor of clear rest beats between photographic sections.

## Colors
`#FFFFFF` is the dominant page surface (~51% of rendered pixels plus a declared 74.1% area), used as the ground for every content band outside the hero and footer. `#000000` and `#333333` carry nearly all text ink — `#333333` for navbar/body label tone, pure `#000000` for headline and dense body copy. Dark neutrals (`#303030` ~14%, `#181818` ~10%, `#484848` ~5%, `#606060` ~3%) belong to the grayscale photography itself and to the footer surface — not to any flat UI fill, confirming the system is photo-driven rather than color-driven. `#A0DD79` is the single rationed accent (~0.1% of area) — it appears only on button fills (hero CTA, mid-page CTA, closing CTA, newsletter submit) and nowhere else: never in text, never in a background tint, never in an icon. This extreme rationing is the signature restraint: everything else in the system stays achromatic so the one green pill reads as the sole actionable color in the entire interface.

## Typography
Two families carry the whole system. `etch-salon-serif` is the display/headline voice — tall, slightly condensed, high-contrast letterforms set at 52px/1.08 for hero-scale statements and 44px/1.23 for secondary headlines; it is always set in uppercase in the screenshots, giving it a monumental, engraved-plate character appropriate to the name. `etch-salon-san-serif` is the workhorse for body copy and labels, 18px at two line-heights (1.78 loose for paragraphs, 1.56 tighter for labels/nav), rendered in `#000000` on white grounds and white on dark grounds. Georgia appears as an italic accent-serif on supporting testimonial-style quotes. Raleway and icon fonts (icomoon, FontAwesome) supply small label and glyph roles (service-tile icons, social icons) — never body text.

## Layout
Content is held to a 1500px max-width container with generous outer margins. The primary spacing unit cluster is small and tight (7px, 10px, 12px) for micro-gaps between icon/label pairs, stepping up to 27px and 30px for card gutters, and 40px for section-level breathing room — there is no single 8px grid; spacing instead clusters around these specific stops. Corner treatment is binary: every structural card, image, and panel is perfectly square (0px radius), while every button and avatar-adjacent control uses a full pill (200px) or circle (100px) — a hard either/or with nothing in between. The service-tile row and team-portrait grid are uniform equal-width tracks; the two-up full-bleed photo pairing and the mid-page value rows use two equal 100%/88%-width items side by side rather than any masonry or bento asymmetry — this is a uniform card grid system, not an asymmetric one.

## Components
- **Navbar**: edge-to-edge, square-cornered bar (0px radius all four corners), 128px tall, full viewport width (0px inset left/right), sticky, background transparent (sits directly over the hero photo). Carries 12 interactive items total: wordmark lockup (serif "ETCH SALON" over a small tracked-caps subline), 4–5 text nav links in `etch-salon-san-serif` at `#333333` style (transparent fill, 0px radius, 28px tall, 40px left-padding stacking), a phone-number link, and a terminal green pill CTA button.
- **Button — primary (hero CTA)**: an observed near-white/cream-adjacent but here confirmed-green solid pill, `#A0DD79` fill, `#000000` text, 200px radius (full pill), ~51px height, `15px 22px` padding; on hover lifts with `rgba(0,0,0,0.16) 0px 20px 38px 0px` shadow and a `-3px` vertical translate. This exact token is reused verbatim for every CTA across the page (hero, mid-page "view services," closing band, newsletter submit) — it is the single primary action style in the system, always paired with a short leading dash/arrow glyph before the label.
- **Button — nav text link**: transparent fill, `#333333` text, 0px radius, 28px height, `0px 0px 0px 40px` padding — a plain underline-free text link used only in the navbar row.
- **Card — nav/full-width panel** (×12, measured inside navbar interactions): transparent fill, 0px radius, 0px padding; anatomy is full-width-panel + media-top-bleed + heading + body-text, used for dropdown-style navigation reveals.
- **Card — service tile** (×5, mid-page service grid): transparent fill, 0px radius, `0px 10px` padding; anatomy is heading + icon only on top of a full-bleed grayscale photo background per tile — rows run [5] in one uniform track, each tile a vertical photo crop with a small outline icon and a short serif/caps label pinned near the bottom.
- **Card — media-feature pair** (×3, mid-page): transparent, 0px radius, `0px 40px` padding; anatomy is media-top + heading + body-text + contains-2-tiles, arranged as rows of [2 wide items] — a two-up photo-plus-copy pairing.
- **Card — full-bleed media block** (×3): transparent, 0px radius, 0px padding; pure media-top-bleed, no text — large grayscale photography spanning full card width, used in the two-up architectural/interior photo pairing mid-page.
- **Card — icon value row** (×3): transparent, 0px radius, 0px padding; anatomy heading + icon + body-text, rows run [100 | 100] — two full-width stacked items, not a multi-column grid.
- **Card — stacked text row** (×3): transparent, 0px radius, `0px 0px 92.3906px` padding; anatomy heading + body-text, rows run [100 | 100 | 100] — three full-width stacked statement blocks.
- **Card — closing value pair** (×2, near page end): transparent, 0px radius, `192px 0px` padding; anatomy heading + icon + body-text, rows run [88 | 88] — two near-full-width items with heavy vertical breathing room, used just above the closing CTA band.
- **Team portrait card**: full-bleed black-and-white photographic portrait filling the card top, below it a small sans-serif role eyebrow (e.g., founder/co-owner designation styling), a serif name in caps, and a small diagonal arrow glyph beneath — arranged in a 3-across grid.
- **Testimonial block**: no card chrome; a divider rule above, an italic serif-styled quote line, and a small circular avatar paired with a two-line name/source label beneath.
- **Footer**: flat dark surface (`#333333`-family dark neutral), split into a left address/contact column with underlined social text links and a right newsletter column with a rectangular input (pill-radius submit button in the same `#A0DD79` primary token) — closes with a thin-rule copyright line and a row of small circular social icon glyphs.

## Graphics & Effects
All imagery is desaturated black-and-white photography — the system's primary graphical device in place of illustration or gradient. A dark scrim sits only behind the hero's left-side headline/copy block, not across the full hero frame, to hold white serif type legible against the photo; the rest of the hero photograph remains unscrimmed and visible at full tonal range. A live video surface is used in place of a static hero image in production (swap to a static grayscale still or soft gradient stand-in when rebuilding). The only measured shadow, `rgba(0, 0, 0, 0.08) 0px 6px 28px 0px`, is a soft, low-opacity ambient lift used around elevated photo/testimonial groupings — not a heavy card shadow system. No noise/grain or pattern texture is evident; texture comes entirely from photographic grain inherent to the source images.

## Motion
Interactions are governed by soft, slightly eased springs rather than linear ticks: color transitions at `color 0.3s ease`, opacity fades at `opacity 0.5s ease`, and a signature decelerating transform on hover/reveal at `transform 0.65s cubic-bezier(0.05, 0.2, 0.1, 1)`. A broader state-change group (`opacity, transform, border-color, color, background-color, box-shadow`) all resolve together over `0.45s` using `cubic-bezier(0.25, 1, 0.33, 1)` — a smooth, slightly overshooting ease-out that gives hover lifts (like the primary button's shadow-and-rise) a soft, confident settle rather than a mechanical snap. Looping `spin`/`fa-spin` keyframes exist for loading/icon-spinner states only.

## Guardrails
- Never introduce a second accent hue — `#A0DD79` is the only saturated color in the system and must stay confined to button fills.
- Keep all structural cards and photo frames perfectly square (0px radius); reserve the 200px/100px radii exclusively for buttons and avatar/icon circles.
- Do not replace the grayscale photography with color imagery or illustration — the monochrome photographic field is the system's primary visual carrier.
- Keep the hero scrim local to the headline region only; never darken or gradient-wash the full hero frame.
- Preserve the navbar as a transparent, edge-to-edge, perfectly square bar — do not inset it or round its corners.
- Reuse the single primary pill-button token verbatim everywhere a CTA appears; do not invent secondary filled-button variants.
