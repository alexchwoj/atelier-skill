---
version: "1"
name: "Verdant Grid Corporate"
description: "Light, white-dominant corporate service-sector system built on condensed display type, a rationed leaf-green action color, and a single dark charcoal band that interrupts the page for proof and process content."
colors:
  background: "#FFFFFF"
  surface-dark: "#1F242C"
  surface-muted: "#F0F4F9"
  text-primary: "#1F242C"
  text-secondary: "#565872"
  text-on-dark: "#FFFFFF"
  accent-primary: "#57B33E"
  accent-secondary: "#FF7029"
  border: "#D1D1D1"
  border-alt: "#E2EEFF"
typography:
  headline-md:
    fontFamily: "Teko"
    fontSize: "72px"
    fontWeight: 400
    lineHeight: "0.95"
    letterSpacing: "-1.5px"
  body-md:
    fontFamily: "Rubik"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.88"
  label-md:
    fontFamily: "Rubik"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: "1.24"
  icon-accent:
    fontFamily: "Font Awesome 5 Free"
    style: "solid glyph, used for inline checklist and social icons"
spacing:
  base: "15px"
  gap: "30px"
  section-padding: "60px"
  section-gap-lg: "415px"
  section-gap-sm: "109px"
rounded:
  control: "5px"
  card: "3px"
  pill: "126px"
  circle: "50px"
components:
  button-primary-hero:
    background: "#57B33E"
    text-color: "#FFFFFF"
    radius: "5px"
    height: "36px"
    padding: "6px 12px"
  button-primary-nav:
    background: "#57B33E"
    text-color: "#FFFFFF"
    radius: "5px"
    height: "70px"
    padding: "0px"
  button-primary-body:
    background: "#57B33E"
    text-color: "#FFFFFF"
    radius: "5px"
    height: "47px"
    padding: "11px 30px"
  button-accent-banner:
    background: "#FF7029"
    text-color: "#FFFFFF"
    radius: "126px"
    height: "64px"
    padding: "23px 5px 20px 12px"
  card-service:
    background: "#FFFFFF"
    radius: "0px"
    padding: "0px 0px 60px"
  card-testimonial:
    background: "#FFFFFF"
    radius: "3px"
    padding: "20px 24px"
    border: "1px solid #D1D1D1"
  card-process:
    background: "#FFFFFF"
    radius: "3px"
    padding: "24px 30px"
    shadow: "rgba(0, 0, 0, 0.06) 0px 3px 36px 0px"
  card-panel-dark:
    background: "#1F242C"
    text-color: "#FFFFFF"
    radius: "0px"
    padding: "60px"
---
# Verdant Grid Corporate
Source: https://sekhmetenergyindia.com/

## Overview
This is a bright, white-dominant corporate service-marketing system, closer to a Bootstrap-era construction/industrial site than a contemporary SaaS aesthetic. Its identity is carried by a condensed, tightly-tracked display face (Teko) set at a large size with near-1.0 line height, paired against a humanist grounded body face (Rubik). Color discipline is strict: white surfaces (~52% of rendered pixels) and pale gray-blue tints (~15%) form the base, one leaf-green (`#57B33E`) is rationed to every call-to-action and icon accent, and a single dark charcoal panel (`#1F242C`, ~9% + ~9% variants) interrupts the page mid-scroll to hold proof and process content. A hot orange (`#FF7029`) appears once as a secondary accent, exclusively on a pill-shaped banner CTA. This is a flat, image-and-icon-illustrated marketing style — no glass, no gradient hero wash, no dark-mode default — its sophistication comes from the restraint of the two-accent, mostly-monochrome-neutral palette against confident oversized condensed type.

## Composition
The first screen is left-text/right-illustration: an eyebrow label, a two-line condensed headline, a short body line, a primary CTA, then — unusually — two testimonial quote cards sit directly below the fold-line rather than deeper in the page, front-loading social proof. Below that the page shifts to a dark charcoal full-bleed band holding a service pair (two large image cards with icon badges). A photographic full-bleed section follows with a dark overlay card of checklist proof points, itself overlapping a strip of three image-bleed promotional cards. Next a light section presents a three-up circular-icon process sequence. Near the bottom, a two-column quote/contact-form band sits on an orange-accented dark panel, before a final green contact-strip and light footer. Rhythm alternates: light section → dark section → photographic/dark section → light section → dark form section → green band → light footer — a deliberate light/dark banding used to segment content types (pitch vs. proof vs. process vs. capture) rather than a continuous single-tone scroll. This rejects a homogeneous all-white marketing page in favor of dark "trust bands" that reset attention.

## Colors
White (`#FFFFFF`) is the page background and dominant surface for hero, service-card, and footer-top zones. A pale blue-gray tint (`#F0F4F9`) sits behind circular icon badges and softens the process section. Charcoal (`#1F242C`) is the sole dark surface, used for the "why choose us" panel and the quote-form band — never the whole page. Leaf-green (`#57B33E`) is the single interactive/brand accent: every button, the footer contact-strip background, and checklist icon glyphs. It is rationed to controls and one full-width footer band, never used as a body-text or large-surface color. Orange (`#FF7029`) appears exactly once, on the pill CTA inside the photographic promotional strip — a deliberate second accent kept rare so it reads as urgent/singular. Body text ink is a muted slate (`#565872`), headings and dark-panel text run in near-black (`#1F242C`) on light or pure white on dark panels. Borders are a light neutral gray (`#D1D1D1`); a pale blue-tinted border (`#E2EEFF`) delineates form inputs. Nothing else is colored — imagery (solar panel photography, wind-turbine illustration) supplies the only other saturation on the page.

## Typography
Headlines use Teko, a condensed display face, at 72px/0.95 line-height with tight -1.5px tracking — set in near-uppercase visual weight even at 400 weight, giving every heading a tall, narrow, engineered character distinct from the rounded body face. Body copy runs in Rubik 16px/400 at an unusually generous 1.88 line-height, giving paragraphs a loose, breathable rhythm that offsets the compressed headlines. Bold labels (eyebrows, nav items, buttons) use Rubik 16px/700 at 1.24 line-height. Icon glyphs come from Font Awesome 5 Free/Brands for inline checkmarks and social marks. The pairing logic is contrast-by-construction: an extremely condensed, all-caps-feeling display face for impact headlines against a wide, relaxed sans for everything read at length.

## Layout
Content is capped at a 1200px max-width container, centered, with section padding as large as 60px vertical and gap bands up to 415px/109px marking major section breaks. The service and process sections use uniform three-up card grids (rows of [3]) with equal-width columns; the promotional photographic strip is a rigid three-across full-bleed row (measured widths 98/98/98% — effectively edge-to-edge equal thirds with a hairline gap). The "what we offer" service section runs a two-up row of large media cards. Spacing units cluster around 15px/30px/60px, with 5px and 3px radii for tight card corners, 126px for the one pill CTA, and 50px for circular icon badges. The grid is a simple uniform column system, not bento or masonry — no card ever spans irregularly; density is moderate-to-spacious, driven mostly by the 1.88 body line-height and generous section padding rather than tight card packing.

## Components
- **Navbar**: edge-to-edge square bar, full viewport width, 0px corner radii on all four corners, 100px tall, white (`#FFFFFF`) fill, static (non-glass) on scroll; logo mark at left, 23 total interactive items across primary links and a dropdown, a bordered outline-style "Get A Quote" button at far right (transparent fill, thin border, square-ish corner, sits outside the green-fill family — a secondary/outline CTA distinct from the primary green buttons used elsewhere).
- **Hero primary CTA**: an observed solid green pill/rounded-rectangle button beneath the headline — approximate 5px radius, green (`#57B33E`) fill, white text, small height (~36–47px) — this is the page's true primary action; the glass-looking navbar button is an outline utility, not the hero primary.
- **Button — primary (body)**: `#57B33E` fill, white text, 5px radius (slightly-rounded, near-square), 47px height, 11px/30px padding — used mid-page for "Read More" process CTAs.
- **Button — primary (compact)**: same green fill/white text, 5px radius, 36px height, 6px/12px padding — smallest CTA size, used on first-screen quote card.
- **Button — accent pill**: `#FF7029` fill, white text, 126px radius (full pill), 64px height, asymmetric padding — used once, on the photographic promo-strip banner.
- **Testimonial cards** (×2 on first screen): white surface, quote-mark glyph badge in green, block quote body text, avatar photo + bold name label + "Customer" caption; arranged side by side directly below the hero fold.
- **Service cards** (×2, dark band): full-bleed photographic top with a circular white icon badge overlapping the image/text boundary, bold heading, short body copy, underlined "Read More" link with arrow glyph; two-up row on charcoal background.
- **Proof panel** (photographic section): dark semi-opaque card overlapping a full-bleed photo, heading + body + a 2×2 checklist grid of orange circular check-glyphs with bold labels.
- **Promotional media strip** (×3, image-bleed): equal-width (98/98/98%) full-bleed photo cards, one bearing the orange pill CTA overlay near its base — rows of [3], uniform card grid, no span variation.
- **Process cards** (×3): large pale-blue-tint (`#F0F4F9`) circular icon badge above each card, numbered heading ("01/02/03" style), body copy, green primary "Read More" button with arrow glyph; three-up uniform row with a thin orange top-rule accent per card.
- **Quote/contact form band**: two-column split on dark charcoal ground — left a full-bleed photographic panel over an orange corner block, right a stacked form (name/email/subject/message inputs, white fill, thin border) and a green submit button.
- **Contact info strip**: full-width green (`#57B33E`) band, three-up row of icon + label + value (address, phone, email), white icon glyphs in circular frames.
- **Footer**: transparent/light background, 17 total links organized in columns (about/services/locations, latest-post teasers with thumbnail + date + heading, and an email-subscribe field with orange submit button); social icons in small circular badges above the columns.

## Graphics & Effects
Three `canvas` elements are present on the page (likely animated background or chart surfaces) — treat as static gradient or illustrative image stand-ins when rebuilding, positioned within hero/decorative zones. Card and panel elevation uses soft, large-radius diffused shadows: `rgba(0, 0, 0, 0.06) 0px 3px 36px 0px` on process cards, `rgba(0, 0, 0, 0.03) 0px 5px 50px 0px` on lighter surface cards, and `rgba(0, 0, 0, 0.05) 0px 10px 30px 3px` on deeper panels — all soft, wide-spread, low-opacity, giving a gentle lift rather than a hard drop shadow. Photography (solar panel installations, workers, roof arrays) is used at full-bleed crop with `object-fit: cover` throughout service and promo cards; the "why choose us" section overlays a dark semi-transparent card directly on a photographic background for legibility, functioning as a scrim. Decorative line-art SVGs (leaf sprigs, wind-turbine blades, a battery-and-recycle icon, flowing wave lines in green) are scattered at hero and section edges as illustrative accents, not photographic.

## Motion
Transitions are short and utilitarian: `all 0.3s ease` and `all 0.4s ease` drive hover-state changes on buttons and cards, `all 0.3s ease-in-out` and `all 0.5s ease-in-out` cover slower panel/interaction states. Modal/lightbox-style entrances and exits use keyframe animations named `iziM-comingIn` (entrance) and `iziM-comingOut`/`iziM-fadeOut` (exit) — simple fade/slide-style modal transitions, not spring or bounce easing. Overall motion character is conservative and functional: quick ease transitions on interactive elements, no scroll-linked parallax or staggered reveal choreography evident.

## Guardrails
- Never fill the hero background with a full-saturation gradient — the dominant field is white/pale-tint; green and orange are controls-only accents, not backdrop colors.
- Do not merge the two green button sizes/paddings into one token — nav (70px), body (47px), and compact (36px) are distinct variants sharing only fill and 5px radius.
- Keep the orange pill CTA (126px radius) exclusive to its one promotional-banner occurrence; do not reuse its shape for the primary green buttons, which are 5px, near-square.
- Preserve the charcoal (`#1F242C`) band as a discrete section interruption, not a page-wide dark mode — light sections must remain white/pale-tint dominant.
- Do not round the navbar's corners or inset its width — it is edge-to-edge, full-bleed, 0px radius on all corners, 100px tall.
- Keep card grids uniform (rows of equal-width items); do not introduce bento-style asymmetric spans where the evidence shows equal thirds or halves.
