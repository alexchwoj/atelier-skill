---
version: "1"
name: "Warm hand-drawn craft studio"
description: "Cream-toned editorial system built on a hand-lettered display face, a near-black espresso ink, and dark capsule buttons over a soft warm-white gradient field."
colors:
  background: "#F0F0F0"
  surface: "#FFFFFF"
  surface-alt: "#FBFBFB"
  text-primary: "#171717"
  text-ink: "#000000"
  text-on-dark: "#FFFFFF"
  accent-blue: "#3385F9"
  accent-blue-light: "#3385F9"
  danger: "#E7000B"
typography:
  body-md:
    fontFamily: "Inter Tight"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.38"
  label-md:
    fontFamily: "Inter Tight"
    fontSize: "18px"
    fontWeight: 500
    lineHeight: "1.38"
  accent-handlettered:
    fontFamily: "hand-drawn display script (marker-style, uneven baseline)"
    fontWeight: 400
    lineHeight: "1.0"
spacing:
  base: "8px"
  gap: "13px"
  section-padding: "21px"
rounded:
  control: "13px"
  card: "13px"
  pill: "13px"
components:
  button-primary-gradient:
    background: "linear-gradient(rgb(61, 139, 250) 0%, rgb(91, 162, 249) 100%)"
    text-color: "#FFFFFF"
    radius: "13px"
    height: "40px"
    padding: "0px 25.4px"
    shadow: "rgba(58, 137, 253, 0.5) 0px 6px 12px -5px"
  button-secondary-light:
    background: "#F3F3F3"
    text-color: "#000000"
    radius: "13px"
    height: "40px"
    padding: "0px 25.4px"
    shadow: "rgba(0, 0, 0, 0.024) 0px 4px 4px 0px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px, rgba(255, 255, 255, 0.75) 0px 1px 0px 0px inset"
  button-dark-capsule:
    background: "#171717"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "44px"
    padding: "0px 24px"
  button-white-pill:
    background: "#FFFFFF"
    text-color: "#171717"
    radius: "9999px"
    height: "44px"
    padding: "0px 24px"
  card-photo:
    background: "#FFFFFF"
    radius: "13px"
    padding: "8px"
    shadow: "rgba(0, 0, 0, 0.086) 0px 6px 10px -6px"
  card-media-frame:
    background: "#FBFBFB"
    radius: "13px"
    padding: "17px"
---
# Warm hand-drawn craft studio
Source: https://www.webild.io/templates/coffee-shop

## Overview
This is an organic, editorial-leaning marketing aesthetic: a warm off-white canvas carries a single oversized hand-lettered wordmark as the entire visual anchor of the first screen, contrasted against small-scale, tightly-tracked Inter Tight body copy and dark near-black capsule buttons. It reads as artisanal-modern — the hand-drawn display treatment supplies craft/authenticity signaling while the surrounding UI (pill buttons, soft shadows, rounded photo frames) stays clean, minimal, and system-typeface disciplined. Nothing is dark-mode; the entire field sits in cream/warm-white territory with espresso-brown and near-black ink doing all the contrast work, and a single blue gradient reserved for one interactive control elsewhere in the flow.

## Composition
The hero opens with a small wordmark lockup top-left, a dark capsule CTA plus a circular menu-trigger top-right, then drops into the massive hand-lettered display line centered in the upper-middle of the frame — the single largest visual element on the page. Below it, right-aligned body copy (a measure of roughly 40-45 characters per line) sits opposite empty space, then a two-button cluster (dark capsule primary + white pill secondary) left-aligned beneath. The fold breaks into a large rounded photographic frame showing an interior/product shot, with a smaller offset card overlapping its lower-left corner — an intentional collage/overlap-grid moment rather than a clean grid cell. This overlap is the deliberate compositional choice: it rejects a tidy contained hero image in favor of a scrapbook-style layered photo stack, reinforcing the handmade identity established by the lettering. Section rhythm going down the page continues in generous vertical whitespace bands, each anchored by one dominant photographic or illustrative block rather than dense card grids — density stays low throughout, prioritizing large media over packed information.

## Colors
The field reads overwhelmingly warm-neutral: `#F0F0F0` (~40%), warm cream `#F0F0D8` (~18%) and dusty pink-cream `#F0D8D8` (~15%) blend into a soft gradient wash rather than a flat fill — this is the background role, never a saturated hue. Ink is carried by `#171717`/`#000000` for body text and the espresso-brown of the hand lettering and dark capsule buttons (~`#241209` observed). `#FFFFFF` supplies card and pill surfaces at high declared area (96% on isolated elements), used for photo-frame chrome and the secondary button. The single accent — a blue gradient (`linear-gradient(rgb(61, 139, 250) 0%, rgb(91, 162, 249) 100%)`) — is rationed to roughly 0.3% of the page: one small interactive control, not the hero. Red tokens (`#FEF2F2` through `#9F0712`) exist in the system but are reserved for destructive/error states, never surfaced in the primary composition. Large areas of the page are deliberately left uncolored — plain cream — so the lettering and photography carry all visual weight.

## Typography
Two families carry the entire hierarchy. Inter Tight at 16px/400 (lh 1.38) runs all body paragraphs in `#171717`; Inter Tight at 18px/500 (lh 1.38) serves label-weight text (button labels, small UI text). Layered over this system type is the signature accent-handlettered face: an uneven, marker-drawn script used exclusively for the brand wordmark, rendered at extreme display scale (roughly 120px, filling the full width of the content column) with a loose, wobbling baseline — the single largest and most expressive type element on the page, appearing once in the hero and again smaller as an interior signage motif within the photo. No serif appears anywhere; contrast is entirely script-vs-grotesk, not serif-vs-sans.

## Layout
The page runs as a centered, contained single-column composition rather than a multi-column grid — there is no card grid in the hero; instead, a two-item cluster (measured 2 columns, gap 12.7px, row heights 48/48) governs the button pairing pattern reused across the page. Spacing follows an irregular but consistent rhythm of 8px, 13px, 17px, and 21px increments rather than a strict 8pt scale, giving tight micro-spacing inside controls and looser 17–21px gaps between stacked text blocks. Corner radius is standardized at 13px for rectangular controls and cards, with pill/capsule shapes going fully round (9999px) for primary navigation and hero CTAs. Photographic content is boxed in large rounded-corner frames with generous internal padding (~17px), and overlapping secondary cards break the frame edge rather than sitting in a clean adjacent grid cell.

## Components
- **Navbar**: edge-to-edge transparent bar over the cream background, ~64-72px tall, 1 wordmark logo (left, plain text), no visible text nav links, 1 dark capsule CTA button (right) plus 1 circular icon-only menu trigger beside it. The capsule CTA uses the button-dark-capsule token; the circular trigger is a plain dark filled circle with a horizontal-line glyph, no border. This is a minimal, link-free header — navigation is deferred entirely to the hamburger trigger.
- **Hero primary CTA**: an observed dark espresso-brown solid capsule ("Order Now" role), fully rounded pill (~9999px), sitting directly under the hero subhead alongside a white pill secondary. This is the most emphasized control on the first screen — solid dark fill, white text, no border — and it is distinct from the navbar's dark capsule (same family, hero placement) and from the measured blue-gradient/light-gray button pair, which belong to a different, later UI moment (a utility control cluster, not the hero).
- **Hero secondary CTA**: a white-filled pill, same height and rounding as the primary capsule, dark text, positioned immediately right of the primary button — a lower-emphasis companion action.
- **Utility button pair (gradient + light)**: measured elsewhere on the page as a 2-column, 48px-row cluster. Button A: gradient fill `linear-gradient(rgb(61, 139, 250) 0%, rgb(91, 162, 249) 100%)`, white text, 13px radius, 40px height, padding 0 25.4px, shadow `rgba(58, 137, 253, 0.5) 0px 6px 12px -5px` — this is the one place saturated blue appears. Button B: `#F3F3F3` fill, black text, same radius/height/padding, shadow `rgba(0, 0, 0, 0.024) 0px 4px 4px 0px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px, rgba(255, 255, 255, 0.75) 0px 1px 0px 0px inset`.
- **Primary photo frame (hero, below fold)**: one large rounded-corner (13px) white/cream frame, ~17px internal padding, containing a full-bleed interior/product photograph with the hand-lettered wordmark repeated as in-scene signage — covers the majority of the frame, landscape orientation.
- **Overlapping accent card**: a small secondary rounded card (13px radius) offset over the primary frame's lower-left corner, containing a cropped beverage photo and a small label caption beneath it in a casual handwritten-style tag; shadow `rgba(0, 0, 0, 0.086) 0px 6px 10px -6px` gives it a lifted, collaged feel against the larger frame.
- **Cookie consent panel**: a bottom-right-anchored white rounded rectangle (13px radius), containing a short heading, a body paragraph with one underlined inline link, and a 2-button row — a light neutral "Decline" (button-secondary-light token) and a solid blue "Accept" (flat `#3D8BFA`-family fill, white text, ~9999px or 13px rounding, no gradient/shadow drama) — the only other place saturated blue appears on the page.

## Graphics & Effects
The background is not a flat fill but a soft, large-radius radial/linear blend across warm-white, cream, and dusty-pink stops (`#F0F0F0`, `#F0F0D8`, `#F0D8D8`, `#D8D8C0`) — visible as gentle cloud-like light/shadow drifts across the hero, covering the full viewport at very low saturation; this is the page's only "gradient" at full-bleed scale. The blue gradient `linear-gradient(rgb(61, 139, 250) 0%, rgb(91, 162, 249) 100%)` is strictly a single small button fill (≈0.3% of page area), not a background treatment. Photography is warm and naturally lit, cropped into rounded frames with soft ambient shadows (`rgba(0, 0, 0, 0.086) 0px 6px 10px -6px`) rather than hard drop shadows, giving a paper-cutout, layered-collage depth rather than glassmorphic or heavy-elevation depth. Button surfaces carry a fine inset highlight (`rgba(255, 255, 255, 0.75) 0px 1px 0px 0px inset`) on light fills, simulating a subtle pressed-paper sheen consistent with the handcrafted mood.

## Motion
Transitions are short and utilitarian: `filter, opacity 0.3s`, `0.2s ease-out`, and `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)` govern hover/state changes on buttons and cards — quick, snappy settles rather than springy overshoot. Entrance choreography relies on `fadeInOpacity` and `fadeInTranslate` keyframes for section and card reveals, while `circleAnimation`, `colorWave`, `colorWaveFaded`, and `gradientScan` keyframes suggest looping ambient motion reserved for decorative or canvas-driven elements (rebuild these as a static soft gradient sweep where a live canvas isn't available).

## Guardrails
- Never render the hero CTA as the blue-gradient button — that fill belongs to a separate utility control; the hero primary is a dark espresso solid capsule.
- Never flatten the background to a single solid cream hex — preserve the soft multi-stop warm-white/pink/cream drift.
- Never shrink or serif-ify the hand-lettered wordmark — it must stay the largest, script-style element on the page, appearing at hero scale once and again small as in-photo signage.
- Never turn the overlapping photo-card collage into an aligned grid cell — the offset overlap is intentional.
- Keep all destructive-red tokens out of primary marketing surfaces; they belong only to error/danger states.
