---
version: "1"
name: "Corporate Deep-Cobalt Editorial"
description: "A light-field institutional system anchored by a deep cobalt brand layer, full-bleed photojournalism, square-cornered utility controls, and oversized condensed-sans display type."
colors:
  background: "#F4F4F4"
  surface-deep: "#0B2D71"
  surface-mid: "#0066B2"
  text-primary: "#000000"
  text-on-dark: "#FFFFFF"
  accent: "#3860BE"
  accent-cyan: "#009DD9"
  border-neutral: "#696969"
typography:
  headline-md:
    fontFamily: "GothamBlack"
    fontSize: "64px"
    fontWeight: 400
    lineHeight: "1.06"
    letterSpacing: "-0.8px"
  body-md:
    fontFamily: "GothamNarrowBook"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "1.78"
  label-md:
    fontFamily: "GothamNarrowBook"
    fontSize: "28px"
    fontWeight: 400
    lineHeight: "1.14"
  accent-icon:
    fontFamily: "ChevronIcons2023"
    fontWeight: 400
spacing:
  base: "8px"
  gap: "2px"
  section-padding: "96px"
rounded:
  sharp: "2px"
  control: "2px"
  card: "16px"
  pill-outline: "20px"
components:
  button-primary-hero:
    background: "#3860BE"
    text-color: "#FFFFFF"
    radius: "2px"
    height: "40px"
    border: "1px solid rgb(56, 96, 190)"
    hover-opacity: "0.7"
  button-outline-light:
    background: "transparent"
    text-color: "#000000"
    radius: "0px"
    height: "62px"
    border: "none"
  button-outline-cyan:
    background: "transparent"
    text-color: "#FFFFFF"
    radius: "8px"
    height: "48px"
    border: "2px solid rgb(0, 157, 217)"
    hover-background: "#009DD9"
    hover-text-color: "#000000"
  button-pill-outline-dark:
    background: "transparent"
    text-color: "#000000"
    radius: "20px"
    height: "40px"
    border: "2px solid rgb(0, 0, 0)"
  card-nav-panel:
    background: "#0B2D71"
    radius: "0px"
    padding: "0px"
  card-media-collage:
    background: "transparent"
    radius: "16px"
    padding: "0px"
  card-article:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  card-divider-band:
    background: "linear-gradient(to right, rgb(255, 255, 255), rgb(255, 255, 255))"
    radius: "0px"
    padding: "0px"
---
# Corporate Deep-Cobalt Editorial
Source: https://www.chevron.com/

## Overview
This is a light-mode-default institutional system with a near-black-strength deep cobalt (#0B2D71) carrying all structural anchors — navbar backdrop plane, nav panels, footer — against a dominant off-white (#F4F4F4) body field. The aesthetic is corporate editorial: photojournalistic imagery, square or barely-rounded utility controls, and an oversized condensed grotesque (Gotham family) doing the emotional work typography-led layouts usually leave to serif. There is no gradient-mesh or glassmorphism signature; depth comes from full-bleed photography and a single thin frosted scrim, not from blur panels or neumorphic shading.

## Composition
The first screen is a full-bleed documentary photograph with the navbar floating transparent and edge-to-edge over it, logo dead-center. A rectangular glass-dark card sits lower-left-of-center over the photo, holding the display headline, a short body line, and one arrow-led link — the card does not span full width, leaving most of the photograph exposed left and right. Below the fold, color flips: a deep cobalt full-width band carries large oversize type fragments bleeding off both edges, then a mid-tone cobalt band with small photographic tiles scattered at different sizes (an asymmetric mosaic, not a grid), then the page returns to the light #F4F4F4 field for a centered editorial header, a five-image mosaic of unequal card sizes, then a horizontal article rail, finally resolving into the deep cobalt footer. The deliberate choice is dark/light alternation by section (cobalt → cobalt → light → light → cobalt) rather than a single consistent surface tone throughout — this creates a banded rhythm that signals section boundaries without relying on dividers or shadows.

## Colors
`#0B2D71` is the structural/brand surface (66.8% of declared area, carrying navbar backdrop, nav drawer panels, divider bands, and footer) — this is the system's anchor, not an accent. `#F4F4F4` (24% of declared area) is the body background for content sections — editorial headers, mosaics, article rails. `#0066B2` and `#3860BE` are mid-blue variants used in gradient transitions and the primary button fill; `#009DD9` is a brighter cyan reserved for outline-button borders and their hover fill. Text ink is binary: `#FFFFFF` on any cobalt surface, `#000000` on the light surface — no gray intermediate tone is used for secondary text, which is unusual restraint. Black (`#000000`) and the brand blue (`#0066B2`) are the only border colors, and warm hues are entirely absent — this is a monochromatic-blue-plus-neutral palette with zero warm accent, which a rebuild must not introduce.

## Typography
Display headlines run GothamBlack at 64px/1.06 with tight -0.8px tracking — condensed, heavy, and used for both the hero's dark-overlay headline and the light-field section headlines beneath. Body copy is GothamNarrowBook at 18px/1.78, an unusually generous leading that gives paragraphs a loose, breathable editorial rhythm distinct from the tight display. A larger GothamNarrowBook cut at 28px/1.14 serves as a label/subheading weight between the two. GothamBold and GothamBook exist as secondary weights for lighter emphasis; ChevronIcons2023 is a dedicated icon font for inline glyphs (the arrow glyphs preceding links); Times New Roman appears only as a fallback serif, not a design choice. There is no italic-serif accent treatment in this system — hierarchy is carried entirely by weight, size, and color-mode flip (dark overlay vs. black-on-light).

## Layout
Content is organized in max-width 600px text columns for headline+body clusters, centered within much wider page sections. The signature mid-page composition is an asymmetric photo mosaic graph: a 5-column, 0px-gap grid holding 16 items across four uneven rows — row one at roughly [25% / 30% / 23%] width splits (three unequal tiles), row two a single 29%-width tile, row three [42% / 30% / 20%] (three tiles of descending width), row four a single 34%-width tile. This is a true mosaic/bento pattern, not a uniform card grid — tile size signals visual priority, and empty negative space is left deliberately uncovered between tiles rather than packed edge-to-edge. The article rail beneath is a horizontal scrolling row of equal-width cards (a scrolling rail with carousel dots and a circular next-arrow control). A thin divider band (a `linear-gradient(to right, #fff, #fff)` fill, functionally a solid white hairline strip) spans full width at 100% across five stacked rows, used purely as a section separator. Section padding runs at a generous 96px; internal spacing otherwise sits on a tight 0/2/8/10px rhythm, with 40px as the larger block gap — dense micro-spacing inside loosely-separated macro-sections.

## Components
- **Navbar**: edge-to-edge, square-cornered bar (0px radius all four corners), 62px tall, transparent background sitting directly over the hero photograph, spans full 100% viewport width with zero inset. Carries 46 total interactive items across the bar (primary links left, centered logo mark, utility icons/search right) — a dense mega-nav rather than a minimal 4–5 item bar. No visible CTA button in the bar itself; it relies on text links plus a search icon.
- **Button — hero primary** (observed, first screen): a solid near-opaque dark/cobalt-tinted pill sitting under the hero headline, white text, arrow glyph prefix; corners read as only slightly rounded (~4–6px, sharp-leaning). This is the single most emphasized control on the first screen — do not substitute the measured outline or glass variants for it.
- **Button — solid utility** (measured, first screen cluster): fill `#3860BE`, white text, radius 2px (sharp), height 40px, padding `12px 10px`, 1px solid border `rgb(56,96,190)`; hover drops opacity to 0.7. A secondary/utility action, square-cornered and dense.
- **Button — cyan outline** (measured mid-page): transparent fill, white text, radius 8px (slightly-rounded), height 48px, padding `10px 24px`, 2px solid border `rgb(0,157,217)`; hover fills solid cyan `#009DD9` with text flipping to black. Used as a mid-page section CTA on the light field (arrow-prefixed link-style button, e.g. the "solutions" link under the editorial header).
- **Button — black pill outline** (measured near page end): transparent fill, black text, radius 20px (rounded, pill-leaning but not full 9999px), height 40px, zero padding, 2px solid black border. Used sparingly near page end, likely a secondary filter/toggle control.
- **Button — full-bleed text link** (measured, first screen): transparent, black text, 0px radius, 62px tall, generous horizontal padding (~38px), no border — functions as a nav-height clickable text zone rather than a visible button.
- **Card — navbar drawer panel**: fill `#0B2D71`, 0px radius, 0px padding; anatomy is full-width panel with media bleeding to the top edge and inverted (white-on-cobalt) text beneath — used for expanded nav/mega-menu states.
- **Card — mosaic media tile** (×8 across the asymmetric grid described in Layout): transparent background, 16px rounded corners, 0px internal padding; each tile is pure image with no overlaid text — media coverage is 100% of the card, hierarchy communicated purely through tile size and position.
- **Card — article rail item** (×3+ in the horizontal scrolling rail): transparent background, 0px radius (square), anatomy top-to-bottom is photographic media (top portion), then a solid cobalt lower panel carrying a date label, a bold headline in white, and an arrow-prefixed "read" link — the photo-to-panel ratio is roughly 60/40.
- **Card — divider/hairline band** (×5 stacked rows): a flat white gradient fill spanning 100% width per row, 0px radius — purely a structural rule, not a content container.
- **Card — expandable list row** (×4, footer-adjacent): transparent, 0px radius, rows at roughly 41%/41% width split then two further full-width rows — a list-with-expansion pattern (accordion-like), body-text only, no media.
- **Footer**: fill `#0B2D71`, 39 total links organized in labeled columns (identity lockup + tagline + newsletter link on the left, then two multi-item link columns), closing with a legal/utility row and a social icon rail — entirely white text on cobalt, no card chrome.

## Graphics & Effects
A vertical gradient `linear-gradient(rgb(11,45,113) 0%, rgb(0,102,178) 179.9%)` covers roughly a quarter of total page area — this is the fill of the cobalt structural bands (nav-drawer panels, mid-page color sections), not a hero backdrop; the hero itself stays a photographic image with a separate scrim. A dark scrim `linear-gradient(rgba(0,0,0,0.6) 0px, rgba(0,0,0,0) 280px)` sits over the top ~280px of hero/media imagery to guarantee white-text legibility against bright photo content — apply it only to the top edge of image-backed headline cards, not as a full-image wash. The thin white "divider" gradient (`to right, #fff, #fff`) is a flat hairline rule disguised as a gradient token, covering under 1% of the page. Five video surfaces exist as live media (likely hero or testimonial loops); substitute a static full-bleed documentary-style photograph in the same aspect when rebuilding. A soft ambient shadow `rgb(128,128,128) 0px 0px 5px 0px` gives card edges a faint lift with no directional offset. A `blur(40px) opacity(1)` backdrop-filter is available for a frosted panel treatment — reserve it for the hero's headline card only, since no other glass surfaces are evidenced.

## Motion
Interaction timing favors a custom cubic-bezier `(0.72, 0.05, 0.35, 1)` — a sharp-start, soft-land curve — applied to `background-size` (0.3s), `color` (0.5s), and `opacity` (0.3s) transitions, giving hover and state changes a deliberate, slightly weighted snap rather than a linear fade. A separate `transform 0.2s linear` drives quick positional shifts (likely button press or carousel nudge) with constant velocity, contrasting the eased color/opacity changes. Keyframe utilities (progress-bar-stripes, spinner-border, spinner-grow, placeholder-glow/wave, splide-loading) point to a component library powering loading states and a Splide-based carousel for the article rail. GSAP with ScrollTrigger drives scroll-linked reveals through the banded dark/light sections — expect staged entrance of the oversized type fragments and mosaic tiles as the section crosses the viewport, not a simple fade-in.

## Guardrails
- Never render the hero as a full-frame saturated gradient — the hero is a photograph with only a bottom-anchored dark card and a top 280px scrim; cobalt gradients belong to the mid-page structural bands only.
- Keep the navbar edge-to-edge, transparent, and square-cornered (0px all corners) at 62px — do not inset it, round it, or give it an opaque fill.
- Do not substitute the cyan outline button or the black pill outline button for the hero's primary action — the hero CTA is a solid dark filled pill with white text, observed only, distinct from both measured outline variants.
- Preserve the asymmetric mosaic row structure (unequal tile widths, 16px radius, zero gap-filling padding) rather than normalizing it into a uniform equal-width card grid.
- Keep text ink strictly binary (white on cobalt, black on #F4F4F4) — do not introduce a mid-gray secondary text tone.
- Do not add warm hues (orange/red/yellow) anywhere — the palette is monochromatic blue plus black/white only.
