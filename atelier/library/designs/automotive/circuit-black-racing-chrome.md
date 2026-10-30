---
version: "1"
name: "Circuit Black Racing Chrome"
description: "Near-black motorsport system carried by full-bleed video/media surfaces, a rationed racing-red accent, and a squared, edge-to-edge navbar with condensed uppercase micro-labels."
colors:
  background: "#000000"
  surface: "#131313"
  text-primary: "#FFFFFF"
  text-secondary: "#707582"
  border-muted: "#ECEDEE"
  accent: "#EB0D3F"
  accent-dim: "#EB0C3E"
typography:
  display-lg:
    fontFamily: "helvetica"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: "1.5"
  headline-md:
    fontFamily: "audiType"
    fontSize: "10px"
    fontWeight: 700
    lineHeight: "1.5"
    letterSpacing: "1px"
  body-md:
    fontFamily: "helvetica"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.5"
  body-base:
    fontFamily: "audiType"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
spacing:
  base: "4px"
  gap: "12px"
  section-padding: "40px"
rounded:
  control: "4px"
  card: "8px"
  pill: "9999px"
components:
  button-primary:
    background: "#EB0D3F"
    text-color: "#000000"
    radius: "9999px"
    height: "58px"
    padding: "6px"
    border: "1px solid rgb(235, 13, 63)"
  button-secondary-outline:
    background: "#FFFFFF"
    text-color: "#212121"
    radius: "4px"
    height: "44px"
    padding: "8px 16px"
    border: "2px solid rgb(255, 255, 255)"
  button-ghost-flush:
    background: "transparent"
    text-color: "#FFFFFF"
    radius: "0px"
    height: "64px"
    padding: "0px"
  button-ghost-outline:
    background: "transparent"
    text-color: "#FFFFFF"
    radius: "4px"
    height: "44px"
    padding: "8px 16px"
    border: "2px solid rgb(255, 255, 255)"
  nav-cta:
    background: "#FFFFFF"
    text-color: "#000000"
    radius: "8px"
    height: "65px"
  card-media-bleed:
    background: "transparent"
    radius: "8px"
    padding: "0px"
  card-nav-icon:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  card-text-block:
    background: "transparent"
    radius: "0px"
    padding: "0px"
---
# Circuit Black Racing Chrome
Source: https://f1.audi.com.au/

## Overview
This is dark-mode-default motorsport minimalism: a near-black stage that lets full-bleed video and photographic media carry all visual weight, with structure supplied by thin white rules, condensed uppercase micro-labels, and a single racing-red accent held in reserve. The aesthetic sits closer to Swiss/International rationalism than to any soft glass or gradient trend — flat black fields, square edges, hairline white strokes, and a restrained accent color used like a warning light rather than a decoration. A frosted-glass loading treatment (`blur(4px)`/`blur(12px)`) is the one concession to depth; everything else is flat and high-contrast.

## Composition
The first screen opens on a near-total black field with a centered four-dot loading indicator — establishing that content (video, imagery) is the payload, not chrome. Below the fold, sections alternate between full-bleed media bands and flush text/icon rows: a three-up media strip with edge-to-edge imagery, then paired heading-plus-body text blocks stacked two deep, then a navbar-style icon grid (2×2) reappearing as a content module. Density stays low — generous 40px section padding, hairline dividers, no card borders or shadows to compete with the video surfaces. The deliberate choice is to let imagery bleed to the container edge with zero padding and zero radius on media cards, rejecting the alternative of contained, padded, shadowed cards — this keeps footage feeling cinematic and continuous rather than boxed.

## Colors
Black (`#000000`) is the dominant field at roughly 68–95% of rendered pixels depending on section, functioning as both page background and card background — there is effectively no lighter elevated surface; depth comes from media, not lightened panels. White (`#FFFFFF`, ~12.7% declared area) carries all primary text, hairline borders, and the one solid prominent button, giving on-black maximum contrast. A deep charcoal (`--color-deepcharcoal: #131313`) sits just above true black for subtle panel separation. `--color-darkgrey: #707582` and `--color-lightgrey: #ECEDEE` handle secondary text and muted borders. Racing red (`#EB0D3F`, ~3.2% declared area) is the only saturated color in the system — rationed to a single pill-shaped call-to-action and small accent marks, never used as a fill for large areas or backgrounds. Nothing else is colored: no blues, greens, or gradients compete with red's exclusivity as the signal hue.

## Typography
Two-family pairing: Helvetica for dense UI text (body-md at 14px/400 and a bold 16px/700 display role), and audiType — a proprietary grotesque — for the branded headline label (10px/700, uppercase-feeling with 1px letter-spacing) and for body copy at 16px/400 where character count is high. Helvetica reads utilitarian and numeric; audiType is the signature voice for tracked, small, all-caps-style eyebrow labels sitting above larger content blocks. Hierarchy is compressed and horizontal rather than tall — no oversized display headline is measured; scale differences are carried by weight (700 vs 400) and tracking rather than dramatic size jumps.

## Layout
An edge-to-edge canvas with no visible max-width constraint on the navbar or media bands — full 1920px-wide sections at this viewport. Spacing scale runs 4/8/12/16/20/40px, favoring tight 4–20px component-level gaps and a single larger 40px section rhythm, which reads as compact and technical rather than airy. Card grids follow three families: a three-up full-width media row (rows of [100 | 100 | 100], each item spanning its own full column — a single-row triptych of equal-width bleed panels), a two-row stack of paired text blocks (rows of [97 | 97], near-full-width heading+body units stacked vertically, not side-by-side), and a 2×2 icon grid (rows of [50/50 | 50/50], a four-item uniform card grid) echoing the navbar's icon language inside content. All three are uniform-span grids — no bento asymmetry, no masonry; rhythm comes from alternating row types (media → text → icon) rather than varied card sizes within one row.

## Components
- **Navbar**: edge-to-edge square bar, 90px tall, spans full 1920px viewport width with 0px left/right inset — a true full-bleed bar, not an inset or capsule shape; all four corner radii are 0px (square topology top and bottom); background transparent over the black field; static (non-scrolling-shrink observed); holds 8 nav items. Its CTA is a solid white rectangle, `#FFFFFF` fill, `#000000` text, 8px radius, 65px tall — noticeably taller than standard buttons, functioning as a prominent flush-right anchor.
- **Hero primary button**: the most emphasized control on the first screen is an observed near-white/light solid pill sitting under the loading/hero state — treat the measured `#FFFFFF` fill, `#212121` text, 4px radius, 44px height, `2px solid rgb(255,255,255)` border button as this primary when it appears under a headline; it is a slightly-rounded rectangle (4px, sharp-leaning), not a full pill.
- **Secondary accent pill**: `#EB0D3F` fill, `#000000` text, radius 999px (full pill), height 58px, 6px padding, `1px solid rgb(235,13,63)` border — a racing-red capsule reserved for a single high-intent action, distinct from the white hero button by both color and full-pill shape.
- **Ghost flush button** (×2 instances): transparent fill, `#FFFFFF` text, 0px radius, 64px height, 0px padding — a tall, borderless, square-edged text-button used inline in flush navigation-adjacent rows.
- **Ghost outline button** (×2 instances): transparent fill, `#FFFFFF` text, 4px radius, 44px height, `2px solid rgb(255,255,255)` border, 8px/16px padding — the outlined secondary counterpart to the white solid hero button, same corner feel (slightly-rounded ~4px).
- **Media-bleed card family** (×3, one full-width row): transparent background, 8px radius, 0px padding; anatomy is media-top-bleed only — each card is dominated edge-to-edge by video/photographic content with no visible padding, caption or text overlay measured, arranged in a single row of three equal-width panels.
- **Icon card family** (×4, 2×2 grid, appears in navbar-style content module): transparent background, 0px radius, 0px padding; anatomy is a single icon per card, arranged two rows of two half-width items — a compact symbolic grid, likely representing a feature or category set.
- **Text-block card family** (×2, stacked two rows): transparent background, 0px radius, 0px padding; anatomy is heading followed by body copy, each spanning near-full container width (97%) — sequential editorial blocks rather than side-by-side columns.
- **Footer**: transparent background, holds 9 links, flush against the black field with no card treatment or divider color specified beyond the system's white hairline convention.

## Graphics & Effects
Live video is the primary graphic surface across media-bleed cards and likely the hero itself — when rebuilding, substitute a dark, high-contrast still frame (automotive/motion-blur photographic tone) as the static stand-in, cropped full-bleed with zero corner radius. Two backdrop-filter blurs are measured — `blur(4px)` and `blur(12px)` — used on the initial loading overlay state, producing a soft frosted darkening over the black field before content resolves; this is the system's only glassmorphic gesture and should be confined to transient/loading states, not persistent panels. No gradients, noise, or star-field textures are measured or visible; the black field is flat. Elevation is communicated entirely through media contrast and hairline white strokes, never through box-shadow — cards and buttons are flat plywood, not lifted.

## Motion
Transitions are multi-property and layered: `rotate, background-color, color` at `0.6s, 0.3s, 0.3s` with `ease, ease, ease`; icon/link color-fill shifts at `0.2s` `ease`; a compound `translate, rotate, color, background-color, border-color` transition running `0.7s, 0.3s, 0.3s, 0.3s, 0.3s` `ease` across all five properties for interactive elements with position and color shift together; and a `0.5s cubic-bezier(0.4, 0, 0.2, 1)` opacity fade for reveal states. Keyframe library includes `fade-in`, `slide-right`, `slide-left`, `slide-up`, `box-slide-up`, `slide-down` — directional entrance animations for content bands as they scroll into view, consistent with a scroll-triggered reveal pattern rather than scroll-linked scrubbing. The overall motion character is deliberate and slightly slow (0.3–0.7s ranges), never snappy, reinforcing a controlled, engineered feel rather than playful bounce.

## Guardrails
- Never lighten the base field beyond `#131313` for panels — this system has no mid-gray card surface; depth comes from media and hairlines only.
- Never fill a large area with `#EB0D3F` — red is a single-control accent (one pill button, small marks), not a section background.
- Never round the navbar or media-bleed cards — both are strictly 0px/square; only buttons and the nav CTA carry radius (4px, 8px, or full pill).
- Never substitute the outline/ghost button values for the hero primary — the hero's dominant control is the solid white/light 4px-radius button, not the transparent outline variant.
- Never add drop shadows or glass panels to persistent UI — reserve `blur(4px)`/`blur(12px)` for loading/transient overlays only.
- Never break the three-up media row or 2×2 icon grid into asymmetric bento spans — both are uniform, equal-width grids.
