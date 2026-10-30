---
version: "1"
name: "Blackframe Cinematic"
description: "Near-black editorial system built on full-bleed cinematic photography, oversized geometric-sans display type, and hairline-divided data cards, with a single off-white pill as its only warm accent."
colors:
  background: "#0A0A0A"
  surface: "#171717"
  text-primary: "#F7F8FA"
  text-secondary: "#B7BDC8"
  accent: "#3B82F6"
  ink-on-light: "#000000"
  border: "#767676"
typography:
  display-lg:
    fontFamily: "Switzer"
    fontSize: "94px"
    fontWeight: 400
    lineHeight: "1"
    letterSpacing: "-3.8px"
  headline-md:
    fontFamily: "Switzer"
    fontSize: "72px"
    fontWeight: 400
    lineHeight: "1.1"
    letterSpacing: "-2.2px"
  body-md:
    fontFamily: "Switzer"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.1"
  label-md:
    fontFamily: "Switzer"
    fontSize: "48px"
    fontWeight: 500
    lineHeight: "1.2"
    letterSpacing: "-1px"
  accent-sans-alt:
    fontFamily: "Satoshi"
    fontWeight: 400
    role: "secondary body/label alternate face"
  legacy-serif:
    fontFamily: "Times New Roman"
    role: "unstyled fallback / not used decoratively"
spacing:
  base: "8px"
  gap: "16px"
  micro: "4px"
  section-padding: "24px"
  block-gap: "20px"
rounded:
  control: "8px"
  card: "8px"
  pill: "223px"
  navbar: "8px"
components:
  navbar:
    background: "transparent"
    height: "66px"
    width: "100%"
    radius: "0px 0px 0px 0px"
    items: 7
  button-primary:
    background: "#F7F8FA"
    text-color: "#000000"
    radius: "0px"
    height: "40px"
    padding: "8px 24px"
  button-nav-cta:
    background: "transparent"
    text-color: "#F7F8FA"
    radius: "0px"
    border: "underline only"
    height: "auto"
  card-media-editorial:
    background: "transparent"
    radius: "0px"
    padding: "0px"
    anatomy: "media-top-bleed + heading + body-text"
  card-stat:
    background: "#171717"
    radius: "0px"
    padding: "0px"
    anatomy: "dot-progress + oversized numeral + label + body-text"
  card-service:
    background: "transparent"
    radius: "0px"
    padding: "0px"
    anatomy: "heading + body-text"
  navbar-panel-blur:
    background: "transparent"
    backdrop-filter: "blur(0.390625px)"
    radius: "0px"
    anatomy: "full-width-panel"
---
# Blackframe Cinematic
Source: https://playbackstudio.framer.website/

## Overview
This is a dark-mode-default, editorial/typographic system carried by full-bleed cinematic portrait photography and an oversized geometric sans (Switzer) run at display scale with tight negative tracking. The page reads almost entirely in near-black (#0A0A0A, ~97% of the pixel field), with photography supplying all warmth and color; UI chrome stays achromatic except one rationed blue accent (#3B82F6) used sparingly as a progress-dot indicator. There is no glassmorphism as a visual style choice beyond a near-imperceptible 0.39px navbar blur — this is a photography-and-type system, not a frosted-panel one.

## Composition
The first screen is a single full-bleed photographic hero (a portrait, blurred figures flanking it) with the wordmark set in giant Switzer display type anchored bottom-left, a transparent edge-to-edge navbar overlaid at the top, and a small floating video-testimonial chip anchored bottom-left beneath the wordmark. Body copy sits bottom-right, right-aligned, in the muted secondary tone. Moving down, the rhythm alternates: a dense stat/impact band (oversized numerals over a photographic card), a full-bleed section-transition slide bearing only a centered mid-size headline on pure black, a services/creator triptych of media cards, and a closing CTA band with an email-capture field and a footer whose base is a giant outlined wordmark bleeding off the bottom edge. The deliberate choice is letting photography and negative space carry the page rather than color or iconography — the rejected alternative is a saturated gradient-hero/bento-dashboard approach; this system instead uses black as the connective tissue between image-heavy bands.

## Colors
Background is #0A0A0A, functioning as both page and card surface — cards are frequently just `transparent` sitting on this same black, distinguished only by photography or hairline structure, not by a lighter surface tile (the one exception, #171717, appears in ~2.7% of the field as a slightly-lifted stat-card panel). Text-primary is a warm off-white (#F7F8FA) for headings and the primary CTA fill; text-secondary (#B7BDC8) carries all body copy and is also used at large scale as a hollow/outlined display treatment (the giant footer wordmark). Pure black (#000000) and pure white (#FFFFFF, ~0.1% of pixels) act as ink extremes — black for on-light button text, white barely present, reserved for icon glyphs. The single chromatic note, #3B82F6, is rationed to tiny progress-dot clusters inside stat cards — never a background, never a button. Borders run a neutral mid-gray (#767676) hairline, used only where structure must be implied without a filled panel.

## Typography
Switzer is the display/heading engine at three fixed scales: 94px/400/lh1/-3.8px for hero-level wordmarks, 72px/400/lh1.1/-2.2px for section headlines, and 48px/500/lh1.2/-1px for stat numerals and mid-weight labels — all with aggressive negative tracking that compresses the geometric letterforms into a dense, confident block. Inter carries all body copy at 16px/400/lh1.1 in the muted #B7BDC8 tone, occasionally lightening to #F7F8FA for emphasis lines. Satoshi appears as a secondary sans face for auxiliary labels. Times New Roman exists only as an unstyled system fallback, not a deployed accent — this system has no serif or mono signature; its signature move is scale contrast between the 94px display face and 16px body, not typeface mixing.

## Layout
Content is capped at a 1440px max-width. The stat/impact section runs a 2-column grid, 16px gap, 4 items in rows of roughly equal width (49/49 | 49/49) — a tall photographic card at left spanning two row-heights beside two stacked stat tiles. Service and creator bands use asymmetric row compositions rather than uniform tiles: rows like [35/28/23 | 22/41] and [49/35 | 17/36/38] recur, meaning card widths vary deliberately row to row — this is a mosaic/asymmetric-grid pattern, not a uniform card grid or true masonry. Elsewhere a 4-column, 16px-gap grid holds 8 and 4-item groupings for denser listings. All cards are unpadded and unradiused (0px), so visual separation comes from photographic content, hairline borders, and generous 16–24px gaps rather than card chrome. Section padding is tight (16–24px range) relative to the type scale, letting oversized headlines dominate each band.

## Components
- **Navbar** — edge-to-edge, full 100vw width, 0px inset, transparent fill, 66px tall, square on all four corners (0px/0px/0px/0px) — a flat static bar, not an inset or capsule shape. Carries 7 items: a "back" utility link with play-triangle icon at far left, a centered 5-item text link cluster, and a right-aligned underlined text CTA with a trailing arrow glyph — no filled button here, just an underline treatment.
- **Hero primary CTA** — none present as a filled button; the hero's persuasive weight is carried entirely by the wordmark and photography, with only the navbar's underlined text CTA and a small floating video-chip acting as calls to action on the first screen.
- **Button — light-fill (footer form)** — fill `#F7F8FA`, text `#000000`, radius 0px (sharp/square), height 40px, padding 8px 24px; appears once, as the email-capture submit control in the closing band.
- **Video-testimonial chip** — small horizontal card, bottom-left of hero, ~dark thumbnail with center play-circle icon at left, stacked two-line label (small caption + name) at right; transparent/dark fill, sharp corners, sits directly on the hero photograph.
- **Stat/numeral cards** — appears in the impact band, 4-up in a 2×2 grid (49/49 | 49/49 row split); surface `#171717`, 0px radius, 0px padding; anatomy top-to-bottom: a 4-dot progress indicator (blue #3B82F6 active dot among gray dots), an oversized Switzer numeral (48px scale), a short label line, and a muted Inter body sentence — one tile pairs with a tall photographic card occupying the left column across both rows.
- **Service/media cards (triptych)** — appear in the mid-page creator/services band, arranged in asymmetric rows (row patterns like [38/12/31 | 24/33] and [35/22/28 | 27/55]); transparent fill, 0px radius, 0px padding; anatomy: top-bleed media area (dark/photographic or empty), a heading line set in Switzer, and a short Inter body description beneath.
- **Section-transition slide** — a full-viewport pure-black band holding a single centered mid-size headline with no other content — used as a rhythm break between dense sections.
- **Footer** — dark band on `#0A0A0A`; top-left stacked heading (two Switzer lines), an email-input with a bottom hairline border, and the light-fill submit button beside/below it; lower zone holds a 4-column link cluster (utility/back link + business email, primary nav repeat, legal links, social icon row of 3 square dark icon-buttons); base of footer bleeds into a giant outline-style wordmark set in `#B7BDC8` at a scale exceeding any other type in the system, cropped by the viewport edge.

## Graphics & Effects
Photography is the primary graphic device — full-bleed portrait and lifestyle imagery, cropped tight, sometimes with intentional foreground blur (bokeh figures) framing a sharp central subject. Media edges are controlled with vertical fade scrims rather than hard crops: `linear-gradient(rgb(0, 0, 0) -8%, rgba(0, 0, 0, 0) 23%, rgba(0, 0, 0, 0) 68%, rgb(0, 0, 0) 105%)` fades a mid-page media card's top and bottom into the surrounding black (covers that one card only, not the page); `linear-gradient(rgba(255, 255, 255, 0) 0%, rgb(0, 0, 0) 113%)` darkens the base of another image toward black for text legibility; smaller variants (`linear-gradient(rgb(0, 0, 0) -19%, rgba(0, 0, 0, 0) 19.8276%, rgba(0, 0, 0, 0) 76%, rgb(0, 0, 0) 116%)` and its close variant) apply the same top/bottom scrim logic to smaller thumbnail-scale media, each covering well under 1% of total page area. A soft outer shadow (`rgba(0, 0, 0, 0.17) 0px 0.602187px 1.56569px -1.5px, rgba(0, 0, 0, 0.14) 0px 2.28853px 5.95019px -3px, rgba(0, 0, 0, 0.02) 0px 10px 26px -4.5px`) and an inset hairline (`rgb(0, 0, 0) 0px 0px 0px 1px inset`) give floating chips (like the video-testimonial card) subtle separation from the black field without introducing a lighter surface. Backdrop blurs are near-invisible (0.39–1.56px), functioning as edge anti-aliasing on the navbar rather than a true frosted-glass effect.

## Motion
Motion is driven by framer-motion with Lenis-smoothed scroll, producing eased scroll-triggered reveals as sections enter view (visible in the abrupt content-repositioning between capture states) rather than snappy micro-interactions. The only explicit transition value is a near-instant `overflow 0.001s ease`, used to gate scroll/overflow state changes cleanly rather than animate them — confirming that scroll-linked reveals, not hover micro-transitions, are this system's primary motion signature.

## Guardrails
- Never fill card backgrounds with a lighter gray panel by default — surfaces stay transparent-on-black; only stat tiles get the faint `#171717` lift.
- Never round card or navbar corners — this system is entirely 0px-radius except the pill-shaped video-chip button and controls; keep those exceptions rare.
- Never expand the blue accent beyond small progress-dot indicators — it must never become a button fill, headline color, or background wash.
- Never substitute a filled hero CTA button — the hero's persuasion comes from photography and an underlined nav-style link, not a solid pill.
- Never crop photography without a top/bottom fade scrim when it borders black — hard edges break the system's signature blend-to-black transitions.
- Never introduce a second decorative typeface — Switzer (display) and Inter (body) are the entire voice; Satoshi stays a minor alternate, not a new accent.
