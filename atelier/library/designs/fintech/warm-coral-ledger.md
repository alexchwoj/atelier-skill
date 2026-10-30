---
version: "1"
name: "Warm Coral Ledger"
description: "Light-mode-default SaaS system in Montserrat, built on white/pale-gray surfaces with a rationed coral action color, floating collaged UI-mockup illustrations, and softly rounded utility controls."
colors:
  background: "#FFFFFF"
  surface: "#F2F4F7"
  text-primary: "#000000"
  text-secondary: "#474955"
  text-muted: "#C8C8C8"
  accent: "#F04B32"
  accent-dark: "#D9402C"
  accent-alt: "#E34225"
  border: "#DADCE5"
  footer-surface: "#474955"
typography:
  display-lg:
    fontFamily: "Montserrat"
    fontSize: "44px"
    fontWeight: 700
    lineHeight: "1.41"
  headline-md:
    fontFamily: "Montserrat"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: "1.4"
  body-md:
    fontFamily: "Montserrat"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: "1.5"
  label-md:
    fontFamily: "Montserrat"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: "1.44"
  body-run:
    fontFamily: "Montserrat"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: "1.5"
  accent-fallback:
    fontFamily: "lucida grande"
    fontWeight: 400
spacing:
  base: "4px"
  gap: "16px"
  section-padding: "70px"
  section-gap-lg: "205px"
  section-gap-md: "70px"
  section-gap-sm: "50px"
rounded:
  control-sm: "4px"
  control: "8px"
  control-round: "10px"
  chip: "5px"
  pill: "50px"
components:
  navbar-cta:
    background: "#F04B32"
    text-color: "#FFFFFF"
    radius: "8px"
    height: "44px"
  button-primary-hero:
    background: "#F04B32"
    text-color: "#FFFFFF"
    radius: "8px"
    height: "58px"
    padding: "14px 24px"
    hover-background: "#E82D11"
  button-secondary-outline:
    background: "transparent"
    text-color: "#F04B32"
    radius: "8px"
    height: "58px"
    border: "1px solid #DADCE5"
  button-small-solid:
    background: "#F04B32"
    text-color: "#FFFFFF"
    radius: "5px"
    height: "47px"
    padding: "11px"
  button-fab-round:
    background: "#E34225"
    text-color: "#474955"
    radius: "50%"
    height: "48px"
    shadow: "rgba(0, 0, 0, 0.06) 0px 1px 6px 0px, rgba(0, 0, 0, 0.16) 0px 2px 32px 0px"
  card-media-grid:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  card-full-panel:
    background: "#FFFFFF"
    radius: "0px"
    padding: "0px"
  card-list-row:
    background: "transparent"
    radius: "0px"
    padding: "0px 20px"
  card-stat:
    background: "transparent"
    radius: "0px"
    padding: "12px 16px"
---
# Warm Coral Ledger
Source: https://www.qasir.id/

## Overview
A light-mode-default, minimalism-leaning marketing system for a utilitarian tool: near-white and pale-gray surfaces (`#FFFFFF`, `#F2F4F7`) carry nearly all of the page, with a single rationed coral (`#F04B32`) doing every job that matters — CTAs, links, active accents. Structural neutrality comes from a charcoal-gray text/footer tone (`#474955`), never black-on-white harshness. Typography is a single Montserrat family carrying every register from 44px display down to 16px UI labels, all at heavy 600–700 weight, giving the whole system a dense, bold, sans-only "product brochure" voice rather than an editorial one. Illustration is built from floating, drop-shadowed collages of miniature app-screenshot chips (mini cards, QR tiles, avatar stacks) layered over lifestyle photography — a signature device-and-photo hybrid rather than a device mockup.

## Composition
The first screen is a classic split hero: left-aligned display headline + short body + a two-button cluster (solid primary, ghost secondary), right side a large collaged illustration of app-screenshot fragments and floating info chips over a phone/tablet silhouette. Immediately below, a full-width stat band on white presents four oversized numeral labels in a row. The page then runs a long, single-column-dominant rhythm: a centered section headline + subhead, a full-bleed embedded video panel on pale gray, then a repeating alternating-layout band (image-left/text-right, flipping sides each section) explaining capabilities one at a time — this is the dominant mid-page pattern, chosen over a dense feature grid so each capability gets full-width breathing room. A logo-proof band ("Didukung Oleh") on pale gray, a single large testimonial block, a press-logo band, then a closing CTA band with one download badge, and a dark charcoal footer. Density is low-to-medium: wide vertical section gaps (measured up to 205px between major bands) keep the page airy despite heavy type weight.

## Colors
`#FFFFFF` and `#F2F4F7` together cover roughly 86–91% of rendered pixels — the page reads as a bright, neutral canvas, confirmed by the pixel field's ~47% pure white and ~41% off-white gray. The charcoal `#474955`/`#484860` tone covers ~8% and is doing double duty as body-text ink and as the footer's full background — the only dark surface on the page. Coral (`#F04B32`, with a pressed-state `#D9402C`/`#CE181E`/`#E82D11` and a lighter accent `#E34225`) covers under 1% of pixels yet is the entire interactive vocabulary: every button, every active link ("Pelajari Lebih Lanjut"-style inline links), and the one floating percent-badge and floating round FAB. Borders are a soft `#DADCE5` hairline, used only around outline buttons and card seams. Nothing else is colored — icons, logo strips, and photography carry their own native colors (payment-brand logos, press logos) but the chrome itself is strictly white/gray/charcoal/coral, keeping coral legible as the sole "act here" signal.

## Typography
One family, Montserrat, run at uniformly heavy weights (600–700) across every size step — there is no light or regular-weight body copy anywhere in the system, which is what gives the page its dense, confident, almost slab-like texture despite the airy spacing. `display-lg` (44px/700, lh 1.41) sets hero and closing-CTA headlines; `headline-md` (28px/700, lh 1.4) sets each alternating-section's heading; `label-md` (32px/700, lh 1.44) is reserved for the oversized stat-band numerals. Running body copy sits at 20px/600 in `#474955` with a lighter secondary tone `#C8CAD4` for muted captions — notably larger and heavier than typical body text, reinforcing the brochure/poster feel over an editorial one. A residual `lucida grande` fallback exists in the stack but never surfaces visually; treat Montserrat as the only visible face, with no serif or mono accent anywhere in the system.

## Layout
Content is capped at a 1170px max-width, centered, with generous 70px section padding and section-to-section gaps ranging from 50px to a hero-scale 205px. The dominant grid type is NOT a card grid but a two-column asymmetric split (roughly image-column + text-column) repeated and flipped down the page — a magazine/alternating layout rather than a bento or masonry grid. Where card grids do occur (the mid-page media-chip clusters), the measured composition runs rows of four-then-three items at ~23% width each — i.e. `[4][3]`, an asymmetric card count per row, not a strict uniform grid. Logo-proof and press bands use a simple evenly spaced horizontal cluster (a scrolling-rail feel at narrower widths). Corner radii throughout are shallow and utilitarian (4–10px on controls, 5px on the small solid button, 50% only on the single floating FAB) — never a large "rounded card" radius; most content cards themselves carry 0px radius, relying on drop shadow and whitespace rather than rounded containers for separation.

## Components
- **Navbar**: edge-to-edge square bar, full 1920px viewport width (0px inset either side), 92px tall, white `#FFFFFF` fill, 0px radius on all four corners, sticky on scroll. Holds a wordmark logo at left, ~6 nav labels/dropdowns center-left, a location selector and language selector, and a solid coral CTA at far right (`#F04B32` fill, white text, 8px radius, 44px height) — 23 total interactive items counted across the bar.
- **Button — hero primary (observed)**: the large solid coral rectangle under the hero headline; fill `#F04B32`, text `#FFFFFF`, radius 8px, height 58px, padding `14px 24px`, hover → `#E82D11`. This is the single most emphasized control on the first screen.
- **Button — hero secondary (ghost)**: sits beside the primary, transparent fill, coral text, hairline `#DADCE5` border, same 8px/58px sizing — a lower-emphasis companion, not a second primary.
- **Button — nav CTA**: `#F04B32` fill, white text, 8px radius, 44px height, padding `0px 24px`, hover → `#CE181E`; lives only in the navbar, distinct role from the hero primary.
- **Button — small solid utility**: `#F04B32` fill, white text, 5px radius (near-square, slightly-rounded), 47px height, padding `11px`; used for inline card CTAs like the illustrated "print receipt" chip.
- **Button — floating round FAB**: `#E34225` fill, `#474955` text, full circle (50% radius), 48px, resting shadow `rgba(0, 0, 0, 0.06) 0px 1px 6px 0px, rgba(0, 0, 0, 0.16) 0px 2px 32px 0px`; appears only as a decorative floating chip inside hero/section illustrations, never as a standalone page action.
- **Media-chip card grid** (mid-page, under the video section): transparent fill, 0px radius, 0px padding; two stacked rows of small screenshot/illustration chips composed as `[4 items][3 items]` at ~23% width each, floating with drop shadows over each alternating section's photograph — this is the illustration system's building block, not a content card.
- **Full-width alternating panel** (×3, mid-page capability sections): white `#FFFFFF` fill, 0px radius, 0px padding; each row is a full-width `[100]` split into a bleed image/photo column plus a heading + body-text column, alternating left/right each occurrence.
- **List/body card family** (×5, near page end — footer link columns): transparent, 0px radius, padding `0px 20px`; each is a simple label list, no border, no fill.
- **Stat/numeral row card** (×4, first screen): transparent, 0px radius, padding `12px 16px`; each holds one oversized `label-md` numeral (32px/700) above a short caption label — a 4-up row directly beneath the hero.
- **Testimonial block** (single instance, mid-lower page): a square photo at left, a name + role label pair, and a quoted paragraph at right — one occurrence only, not a rotating carousel in the captured views.
- **Logo-strip bands** (×2 — "Didukung Oleh" and "Diliput Oleh"): plain horizontal clusters of third-party logos on the pale `#F2F4F7` surface, no card chrome, no border.
- **Email/download CTA band**: centered headline + body over pale gray, single black store-badge graphic, no form field — a callout band, not a waitlist capture.
- **Footer**: full-width `#474955` charcoal panel, wordmark at left, five link columns (26 links total), a contact block, social icon row, and a duplicated location/language selector at bottom right.

## Graphics & Effects
No gradients or scrims are used anywhere in this system — every surface is a flat fill. Elevation is communicated purely through drop shadow on floating illustration chips and cards: `rgba(0, 0, 0, 0.12) 0px 8px 24px 0px` and `rgba(0, 0, 0, 0.04) 0px 4px 12px 0px` for standard floating UI-fragment chips, escalating to `rgba(0, 0, 0, 0.15) 0px 8px 32px 0px` for the most prominent floating elements (the FAB, primary illustration mockups). These shadows are soft, diffuse, and low-contrast — never a hard-edged card shadow — reinforcing a light, gently elevated illustration layer over flat photography. An embedded video panel (dark video thumbnail with a play control) is the only non-flat visual surface, appearing once, mid-page, full content-width.

## Motion
Motion is restrained and utility-only: short property transitions — `opacity 0.2s ease`, `all 0.2s ease-in-out`, `transform 0.2s ease`, `border-color 0.2s ease` — drive hover/press feedback on buttons and cards, all under a quarter second and eased rather than sprung. A small set of keyframe animations (`fb_transform`, `rotateSpinner`, plus the `intercom-lightweight-app-*` set) power a spinner and a chat-launcher widget rather than any hero-level motion — there is no scroll-triggered reveal, parallax, or stagger evident in this system; treat entrances as static/instant.

## Guardrails
- Do not tint the page background — it must stay white/`#F2F4F7`, with coral confined to buttons, active links, and small floating badges only.
- Do not round content-card corners; cards are flat 0px-radius panels separated by shadow and whitespace, not rounded containers.
- Do not give the navbar CTA and the hero primary button the same visual weight/role — they share a fill color but are separate components at separate sizes (44px vs 58px).
- Do not introduce a second typeface; every size step, including numerals and labels, stays in Montserrat at 600–700 weight.
- Do not replace the alternating image/text bands with a symmetric feature grid — the mid-page rhythm is deliberately full-width and alternating, not card-gridded.
- Do not add gradients, glass blur, or scrims — every fill in this system is flat, and depth comes only from soft drop shadows.
