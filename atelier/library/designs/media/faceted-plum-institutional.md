---
version: "1"
name: "Faceted Plum Institutional"
description: "Light-dominant editorial-institutional system built on triangular full-bleed section breaks, deep-plum content panels, thin-weight Work Sans display type, and one rationed amber accent for CTAs and eyebrows."
colors:
  background: "#FFFFFF"
  surface: "#312439"
  text-primary: "#312439"
  text-secondary: "#FFFFFF"
  accent: "#EBBE07"
  border: "#FFFFFF"
  muted-panel: "#DEDEDE"
typography:
  display-lg:
    fontFamily: "Work Sans"
    fontSize: "64px"
    fontWeight: 300
    lineHeight: "1.23"
  headline-md:
    fontFamily: "Work Sans"
    fontSize: "42px"
    fontWeight: 300
    lineHeight: "1.31"
  body-md:
    fontFamily: "Work Sans"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.6"
  label-md:
    fontFamily: "Work Sans"
    fontSize: "27px"
    fontWeight: 300
    lineHeight: "1.36"
  accent-eyebrow:
    fontFamily: "Poppins"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: "1.4"
spacing:
  base: "11px"
  gap: "16px"
  block: "30px"
  section-padding: "127px"
  panel-offset: "63px"
rounded:
  control: "300px"
  card: "15px"
  pill: "300px"
components:
  navbar:
    background: "transparent"
    height: "157px"
    width: "100%"
    radius: "0px"
  button-nav-cta:
    background: "#EBBE07"
    text-color: "#FFFFFF"
    radius: "300px"
    height: "33px"
    padding: "6.4px 16px"
  button-primary-hero:
    background: "#000000"
    text-color: "#FFFFFF"
    radius: "300px"
    height: "38px"
    padding: "11px 15px"
    border: "1px solid rgb(255, 255, 255)"
  button-secondary-hero:
    background: "#EBBE07"
    text-color: "#FFFFFF"
    radius: "300px"
    height: "38px"
    padding: "11px 15px"
  button-midpage-large:
    background: "#EBBE07"
    text-color: "#FFFFFF"
    radius: "300px"
    height: "63px"
    padding: "0px 16px"
  panel-plum:
    background: "#312439"
    text-color: "#FFFFFF"
    radius: "0px"
    padding: "63px"
  card-accordion:
    background: "transparent"
    radius: "0px"
    padding: "0px"
    border-bottom: "1px solid #312439"
  card-full-panel:
    background: "transparent"
    radius: "0px"
    padding: "0px 57.6px"
---
# Faceted Plum Institutional
Source: https://decennialgroup.com/

## Overview
This is a light-mode-default institutional system with an editorial backbone: thin-weight Work Sans display type at generous sizes carries the voice, while a single deep plum (`#312439`) supplies gravity as offset panels and a static navbar fill. It reads as corporate-minimalist rather than app-like — no drop shadows, no rounded cards, no glass — its only concession to softness is the fully-pilled button and control radius (300px) against otherwise perfectly square panels and photography. An amber accent (`#EBBE07`) is rationed to eyebrows, CTAs, and hover-revealed accordion carets — never a background.

## Composition
The first screen opens on a deep plum navbar (edge-to-edge, square, static) sitting atop a white/pale-gray field cut by large diagonal triangular shapes in `#F0F0F0` — a faceted, low-chroma geometric backdrop behind a centered thin-weight headline. Below the fold, the rhythm alternates: a photographic panel overlapped by an offset plum text panel (image + panel diagonally staggered, image always upper-left, panel lower-right, overlapping by roughly a third), then a plain white band of accordion rows (Integrity / Equity / Ingenuity-type disclosure list), then the pattern repeats with the image/panel positions inverted. Near the page end, a honeycomb-textured light-gray band interrupts the white for an email-capture section, then a plum footer closes it. The deliberate choice is asymmetric photo-plus-panel overlap rather than a symmetric split hero — it creates depth without shadows or gradients, using only overlap and color-block contrast, at the cost of a busier reading path (Z-pattern rather than clean F-pattern).

## Colors
White (`#FFFFFF`, ~58-91% of declared area and the dominant pixel value) is the page background and default surface. Deep plum (`#312439`, ~9% pixel share, ~8.6% declared) is the sole secondary surface — used for the navbar fill, offset content panels, and footer; it also serves as body text ink on white grounds, doing double duty as both a surface and a text color depending on context. Amber (`#EBBE07`, <1% of pixels) is the only saturated color in the system and is rationed strictly to interactive/attention elements: nav CTA, hero CTAs, mid-page CTA, eyebrow labels, and accordion chevrons — never a fill for panels or text blocks. A near-black (`#000000`) appears once as a bordered hero button fill, functioning as a secondary-emphasis dark neutral distinct from the plum. Photography (building exteriors, skies) supplies the only other chroma on the page and is left otherwise uncolored — no scrim, no overlay tint — so the amber and plum read as clean punctuation against it.

## Typography
Work Sans at weight 300 is the display and headline face throughout — 64px/1.23 for the hero headline, 42px/1.31 for section headlines, and 27px/1.36 for a mid-weight label/subhead size — all light-weight, giving the institutional tone an airy rather than corporate-bold feel. Body copy drops to 14px/400 at 1.6 line-height in the plum ink color, dense and legible against white. Poppins appears only as the small all-caps eyebrow label (e.g., the amber section tags) — a distinct sans accent face used exclusively for that one role, never for body or headline. No serif or mono appears anywhere; hierarchy is built purely through the light-weight Work Sans scale plus the Poppins eyebrow contrast.

## Layout
Content is bounded to a 1200px max-width container. Spacing runs on an approximate 8px-family scale sampled at 11px, 16px, 30px, 32px, 63px, and 127px — the largest values driving section padding, the smallest driving list-row and accordion gaps. Card-like sections are consistently full-bleed-within-container: measured families show single-column stacks at 100% item width repeated 2, 3, or 6 times (accordion rows, full-width photo/panel bands) rather than any multi-up card grid — this is a list/stack layout system, not a grid-of-cards system, despite the 26-column underlying grid measured elsewhere (used for fine alignment of overlapping photo/panel offsets, not for card tiling). Radius is binary: 0px for every panel, image, and card surface; 300px (full pill) for every button and control — there is no intermediate rounded-corner value anywhere in the system.

## Components
- **Navbar**: edge-to-edge square bar, 100% viewport width (0px inset either side), 157px tall, transparent/plum background, static (non-sticky observed), housing ~20 nav-related items (primary links plus utility icon); its CTA is amber (`#EBBE07`) on white text, 300px radius, 33px height, 6.4px/16px padding — a small pill sitting right-aligned in the bar. Logo is a geometric X-mark mark plus wordmark, left-aligned.
- **Button — hero primary (dark)**: black (`#000000`) fill, white text, 300px pill radius, 38px height, 11px/15px padding, 1px solid white border; hover drops opacity to 0.8. This is an observed secondary-emphasis hero action, bordered and dark against the light triangular field.
- **Button — hero primary (amber)**: `#EBBE07` fill, white text, 300px pill radius, 38px height, 11px/15px padding; hover opacity 0.8. This is the true hero primary — the single warm, saturated pill under the headline, most visually dominant against the pale triangular background.
- **Button — mid-page large CTA**: `#EBBE07` fill, white text, 300px pill radius, 63px height, 0px/16px padding — a taller variant used once mid-page as a section-level call to action (e.g., beside the values/accordion block).
- **Panel — plum offset block**: `#312439` fill, 0px radius, ~63px padding, always overlapping a photographic panel by roughly a third of its width/height; carries an amber eyebrow label, a light-weight Work Sans headline (white text), and occasionally a body paragraph. Appears twice per major content section, alternating left/right offset.
- **Accordion / disclosure list**: transparent background, 0px radius, 0px padding, hairline bottom border (implied by `#312439` rule lines in the screenshots); anatomy is a label row with a chevron caret (amber) that expands to reveal body text; occurs in stacks of 3 rows per section, appearing twice across the page (values section, leadership/community section).
- **Full-width photo/panel band**: transparent container, 0px radius, 0px/57.6px horizontal padding, carries a large photographic image (building exterior) at roughly 55-60% of the band width with a short body-text caption beneath, overlapped by the plum panel described above; recurs 3 times down the page as the primary content-band pattern.
- **Email-capture band**: full-bleed light-gray textured section, centered light-weight headline, a supporting body line, and a plain mailto-style text link — no button component, just an underlined link as the call to action.
- **Footer**: transparent background, plum wordmark logo, three text columns (tagline, Locations address block, Connect links/social icon) and 4 total links; bottom-aligned copyright line in plum ink on white.

## Graphics & Effects
The dominant background graphic is a large-scale triangular/faceted diagonal cut in flat `#F0F0F0` over white — a geometric, non-gradient shape treatment repeated at the top of the page and again above the email-capture band, functioning as the system's signature section-break device (a mosaic/faceted motif, not a wave or blob). The email-capture band carries a fine repeating honeycomb line-pattern texture at low contrast over its light-gray fill — the only textured surface in the system. No gradients, no blur, no glassmorphism, and no shadow/elevation language appear anywhere; depth is created entirely through flat color-block overlap (photo panel behind plum panel) rather than shadow or blur. Photography is used untouched — no scrim, no color grade — letting sky-blue and green tones supply the only non-brand chroma on the page.

## Motion
Transitions are simple, utility-level property animations rather than expressive choreography: `opacity 0.6s ease` and `transform, opacity 0.6s ease` drive fade/reveal entrances (likely scroll-triggered section and image reveals), while `transform, width 0.25s / cubic-bezier(0.2, 0.6, 0.3, 1)` and `transform 0.25s ease` govern faster interactive feedback (accordion expand, hover states). The system favors a slow 600ms ease for content entrances and a snappier 250ms custom cubic-bezier for direct-manipulation feedback — no spring/overshoot, no stagger, no parallax observed.

## Guardrails
- Never round any panel, image, or card surface — 0px is absolute; only buttons and the accordion caret control get the 300px pill.
- Never fill a full section or hero with a gradient or saturated wash — amber is a punctuation color for pills/eyebrows/carets only, at well under 1% of page pixels.
- Never make the black-fill bordered button the hero's primary action — the amber pill is the highest-emphasis CTA on the first screen.
- Never replace the triangular faceted background with a blob, mesh gradient, or wave divider — the section-break motif is strictly geometric and flat-colored.
- Never add drop shadows, blur, or glass surfaces — depth comes only from flat plum-panel-over-photo overlap.
- Keep body/display type light-weight (300) Work Sans; do not substitute a heavier weight for headlines even at 64px size.
