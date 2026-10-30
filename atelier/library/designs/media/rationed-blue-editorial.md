---
version: "1"
name: "Rationed Blue Editorial"
description: "White-dominant editorial system on a huge condensed grotesk, with a full-bleed black interlude, hairline-bordered cards, and one saturated blue accent rationed to links, prices, and a single geometric mark."
colors:
  background: "#FFFFFF"
  surface-dark: "#181818"
  surface-tint: "#F5F5F5"
  text-primary: "#101010"
  text-secondary: "#7E7E7E"
  text-tertiary: "#A3A3A3"
  accent: "#3548FE"
  accent-deep: "#2C28F7"
  border: "#DFDFDF"
typography:
  display-lg:
    fontFamily: "Aeonikpro"
    fontSize: "115px"
    fontWeight: 400
    lineHeight: "0.85"
    letterSpacing: "-3.5px"
  headline-md:
    fontFamily: "Aeonikpro"
    fontSize: "190px"
    fontWeight: 400
    lineHeight: "1"
    letterSpacing: "-1.9px"
  body-md:
    fontFamily: "Aeonikpro"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: "1.3"
  label-md:
    fontFamily: "Aeonikpro"
    fontSize: "28px"
    fontWeight: 400
    lineHeight: "1.4"
  body-copy:
    fontFamily: "Aeonikpro"
    fontSize: "18.018px"
    fontWeight: 400
    lineHeight: "1.5"
  accent-serif:
    fontFamily: "Ogg"
    fontWeight: 400
  icon-mono:
    fontFamily: "webflow-icons"
spacing:
  base: "10px"
  gap-sm: "15px"
  gap-md: "30px"
  gap-lg: "60px"
  section-padding: "120px"
rounded:
  control: "12px"
  card: "15px"
  card-alt: "6px"
  pill: "120px"
  blob: "201px"
components:
  button-nav-primary:
    background: "#101010"
    text-color: "#FFFFFF"
    radius: "119.966px"
    height: "55px"
    padding: "0px"
  button-nav-secondary:
    background: "#FFFFFF"
    text-color: "#101010"
    radius: "119.966px"
    height: "53px"
    padding: "14.938px 20.02px"
    border: "1px solid #DFDFDF"
  button-nav-link:
    background: "transparent"
    text-color: "#101010"
    radius: "0px"
    height: "23px"
    padding: "0px"
  button-hero-primary:
    background: "#101010"
    text-color: "#FFFFFF"
    radius: "119.966px"
    height: "55px"
    padding: "14px 24px"
  button-section-link:
    background: "transparent"
    text-color: "#101010"
    radius: "0px"
    height: "70px"
    padding: "0px"
    border-bottom: "1px solid #101010"
  card-course:
    background: "#FFFFFF"
    radius: "15px"
    padding: "30px"
    border: "1px solid #DFDFDF"
  card-icon-feature:
    background: "transparent"
    radius: "6.006px"
    padding: "30.03px"
    border: "1px solid #DFDFDF"
  card-media-testimonial:
    background: "#FFFFFF"
    radius: "15px"
    padding: "0px"
    border: "1px solid #DFDFDF"
  card-tutor-portrait:
    background: "transparent"
    radius: "50%"
    padding: "0px"
  card-circle-cta:
    background: "#F5F5F5"
    radius: "50%"
    padding: "0px"
---
# Rationed Blue Editorial
Source: https://www.wftutor.school/

## Overview
This is a minimalist, typography-led editorial system built on a colossal condensed grotesk (Aeonikpro) that behaves almost like a wordmark at 115–190px, contrasted with a nearly monochrome supporting palette. The dominant surface is pure white; ink is near-black (#101010), never true black in body copy. One saturated blue (#3548FE) is the entire color budget, rationed to links, price figures, one icon mark, and one full-bleed rectangle — everything else is grayscale. A single near-black full-bleed band interrupts the white flow mid-page, giving the system a light/dark/light rhythm rather than a dark-mode-default identity. Hairline borders (#DFDFDF) and 6–15px soft-square radii carry the structural language; there is no shadow-driven elevation, no glass, no gradient hero — depth comes from grayscale photographic texture and generous negative space instead.

## Composition
The first screen is headline-dominant: an oversized three-line display headline sits left-aligned under a thin top navbar, with a 3-column strip of small eyebrow-labeled captions anchoring the bottom of the fold — a classic Swiss-adjacent, left-aligned hierarchy with no hero image. The alternative rejected here is a split hero with a product screenshot; instead the page holds pure typography above the fold and defers all imagery to the second screen (a full-bleed grayscale marbled-abstract band with two floating message-bubble cards). Section rhythm alternates: white text band → dark full-bleed band (tutor grid on black) → white text band → white card grid (courses) → white testimonial rail → dark full-bleed CTA → white FAQ → dark footer. Density is generous — 120px section padding, 60–121px gaps between bands — so the page reads as a slow, spacious scroll despite the size of the display type.

## Colors
Background is white (#FFFFFF, ~59% of pixels) carrying nearly all content; a near-black surface (#181818, ~22%) forms the tutor-grid band, the CTA band, and the footer — giving the page a light-majority, dark-interlude structure, not a dark-mode-default one. Text ink is #101010 for headings and primary copy, #7E7E7E for secondary/meta text (dates, roles, durations), #A3A3A3 for tertiary/muted labels. The accent blue #3548FE (~4% of pixels) is reserved for interactive text (links, "поглиблений курс" style labels), price figures, and one solid blue illustration panel inside a course card — never a background wash or button fill. #F5F5F5 forms flat tint fills (the circular "all courses" disc, icon-card backgrounds). Borders are a consistent light gray (#DFDFDF/#D5D5D5), never colored. Nothing else is colored: buttons, icons, and structural chrome stay black/white/gray so the blue reads as a single deliberate signal.

## Typography
Aeonikpro is the sole grotesk driving every level of hierarchy: display-lg (115px/400, lh 0.85, ls -3.5px) for the hero headline, an even larger headline-md (190px/400, lh 1, ls -1.9px) reserved for one-word/short-phrase full-bleed statements (section openers, footer wordmark), label-md (28px/400) for section titles like list headers, and body-md (24px/400, lh 1.3) for card headings. Running body copy measures 18px/400 in #101010 with secondary text dropping to #7E7E7E — a single-family system with hierarchy built entirely from size and color, not mixed fonts. Ogg appears only as a latent accent-serif token in the type stack (unused as a visible interruption in these views, but reserved for editorial emphasis); webflow-icons supplies inline iconographic glyphs (arrows, chevrons) at body scale. Letter-spacing tightens aggressively at large sizes (-1.9 to -3.5px), giving the display type a compressed, poster-like density.

## Layout
Content is left-aligned and unboxed at the top (no visible max-width container on the hero), but card grids snap to a clean column system: a 2-column icon-feature grid (rows of 49/49 repeated five times), a 4-column stat/tutor-portrait row (74/100/100/100), and paired 2-column course-card rows (49/49). Course and testimonial cards run in a horizontal auto-fit rail with a distinct oversized circular disc breaking the rhythm as a spanner between two card columns. Gutters are tight and precise (14.938px, 30.03px), section padding is a flat 120px top/bottom with 60–121px gaps between bands. Cards default to 0px radius for full-bleed media/text combinations and 6–15px soft-square radii for bordered content cards — density is moderate-to-spacious, never cramped.

## Components
- **Navbar**: edge-to-edge, square-cornered bar (0/0/0/0 radii), 120px tall, full 1920px width, transparent background, static (non-floating). Wordmark + tagline pair at left, 11 total items including a black pill primary CTA (radius 119.966px, height 55px, fill #101010, text white) and an adjacent white outline pill secondary CTA (radius 119.966px, height 53px, padding 14.938px 20.02px, fill white, text #101010, hairline border) — the utility login/register pair, not the hero primary.
- **Hero primary button**: none rendered inline in the hero text block itself in these captures; the black filled pill (observed ~119px pill radius, ~55px height) from the navbar CTA is the closest analog for a primary action and is reused as the system's primary variant.
- **Button — link/underline**: transparent, 0px radius, text #101010, sits under section headers (e.g., the "all reviews" style link) with an arrow glyph and a hairline underline; height ~70px hit area mid-page.
- **Card — icon/feature**: transparent-to-bordered surface, 6.006px radius, 30.03px padding, hairline border; anatomy top-to-bottom is heading + small icon + short body line, arranged in a five-row two-up grid (rows 49/49 × 5) plus a secondary three-item cluster (49/49 then 49 full-width).
- **Card — course**: white fill, 15px radius, hairline border, no internal padding token beyond content margin; anatomy is a full-bleed top illustration panel (roughly top 40% of card, one rendered in solid accent blue #3548FE, others in flat line-art grayscale) then heading, 2-line body description, duration/start metadata, and a colored price figure (blue) beside a thin vertical divider tick.
- **Card — circular CTA disc**: flat #F5F5F5 fill, fully circular (50% radius), centered single-line label, no border/shadow — acts as a spanner breaking the course-card row rhythm.
- **Card — testimonial/media**: white fill, 15px radius, hairline border; anatomy is circular avatar photo + small social-platform glyph badge at top, bold quote-style heading, paragraph body, name credit line — arranged in a horizontal scrolling rail of equal-width cards.
- **Tutor portrait grid**: circular photo crops (one filled solid blue #3548FE with a paper-plane glyph standing in for a "join us" card) in a single row of seven, each with name + role caption beneath in white/gray text on the black band.
- **Full-width panel cards**: transparent, 0px radius, bottom padding only (0 0 38.0072px), three stacked at 100% width each — used for large statement/illustration bands between text sections.
- **Footer**: transparent background on the near-black band, 25 text links organized in three columns, plus payment-method glyphs, a phone number, two overlapping rotated card-shaped graphics (one black, one accent blue #3548FE) as decorative objects, a circular scroll-to-top icon button, and an enormous two-word wordmark set at headline-md scale spanning the full footer width.

## Graphics & Effects
The only literal gradient measured, `linear-gradient(12.7046deg, rgba(2, 2, 2, 0.094), rgba(24, 24, 24, 0.094))`, is a near-transparent dark wash applied to a small scrim element (a caption card overlay inside the second-screen marbled band), not a page or hero background — it barely tints its host. The dominant "hero" visual interest in the second screen is a large grayscale, marbled/liquid abstract texture image (photographic, not gradient-generated) filling a full-bleed rounded band, with two floating white message-bubble cards (`box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 8px 1px`) layered on top in a chat-mockup composition. A `blur(10.78px)` backdrop-filter is available in the system for translucent panels, though the captured cards read as opaque white, not glass. Rotated, overlapping flat-color card graphics (black and accent blue) appear twice as decorative footer objects, giving a subtle collage/print-material texture without any grain or noise overlay. Elevation throughout is expressed via that single soft drop shadow plus hairline borders — never stacked shadow depth.

## Motion
Interactions are fast and utilitarian: `all 0.2s ease` and `all 0.15s ease` drive most hover/state transitions, `all 0.1s ease` and a `background-color, color 0.1s ease` pairing handle button and link color shifts on hover — all short, linear-feeling eases under 200ms, consistent with a crisp editorial UI rather than a springy or playful one. A `spin` keyframe drives loading/rotation micro-interactions and a `marqueeAnimation` keyframe powers a continuously scrolling rail (likely the testimonial or logo strip). GSAP with ScrollTrigger and Lenis smooth-scrolling indicate scroll-driven reveals and inertial scrolling govern section entrances, reinforcing the slow, deliberate pacing of the scroll rhythm described above.

## Guardrails
- Never fill the hero or any full section background with saturated blue — blue is a rationed accent confined to text, one icon, and single card panels, not a background wash.
- Keep the two full-bleed dark bands near-black (#181818), not pure black, and never extend them beyond their two mid-page/footer placements.
- Do not round the navbar corners or inset it from the viewport edge — it is an edge-to-edge, perfectly square 120px bar.
- Preserve Aeonikpro as the only visible display/body typeface; do not introduce a second sans for hierarchy — contrast comes from size and color, not typeface switching.
- Do not add drop shadows to cards as a default elevation cue — hairline borders and flat fills carry structure; the one measured shadow belongs only to floating message-bubble cards.
- Keep the two hero CTA pills distinct: solid black fill is primary, white-with-border pill is secondary — never merge or recolor them identically.
