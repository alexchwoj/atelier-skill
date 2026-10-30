---
version: "1"
name: "Deep-channel feed glass"
description: "Near-black navy dashboard system with sticky frosted-glass navbar, a rationed cyan-and-violet accent duo, feed-card social stream, and a subtle grid-line texture beneath a corner-washed radial gradient."
colors:
  background: "#070D18"
  surface: "#0D1828"
  surface-raised: "#132137"
  surface-inset: "#091321"
  text-primary: "#EDF4FF"
  text-secondary: "#94A3B8"
  accent-cyan: "#67E8F9"
  accent-blue: "#3C81F5"
  accent-violet: "#6D5EE8"
typography:
  display-lg:
    fontFamily: "Inter"
    fontSize: "36px"
    fontWeight: 900
    lineHeight: "1.11"
  headline-md:
    fontFamily: "Inter"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: "1.4"
  body-md:
    fontFamily: "Inter"
    fontSize: "10px"
    fontWeight: 900
    lineHeight: "1.5"
  label-md:
    fontFamily: "Inter"
    fontSize: "20px"
    fontWeight: 900
    lineHeight: "1.25"
  eyebrow-mono:
    fontFamily: "Inter"
    fontSize: "10px"
    fontWeight: 900
    lineHeight: "1.5"
spacing:
  base: "8px"
  gap: "24px"
  section-padding: "24px"
rounded:
  control: "12px"
  card: "26px"
  card-sm: "12px"
  pill: "26px"
components:
  navbar:
    background: "#070D18"
    backdrop-filter: "blur(40px)"
    radius: "0px 0px 0px 0px"
    height: "81px"
  button-nav-cta:
    background: "rgba(255, 255, 255, 0.05)"
    text-color: "#E2E8F0"
    radius: "12px"
    height: "36px"
    border: "1px solid rgba(255, 255, 255, 0.1)"
  button-glass:
    background: "rgba(255, 255, 255, 0.05)"
    text-color: "#E2E8F0"
    radius: "12px"
    height: "38px"
    padding: "10px 16px"
    border: "1px solid rgba(255, 255, 255, 0.1)"
  button-primary:
    background: "linear-gradient(to right, rgb(124, 58, 237), rgb(37, 99, 235))"
    text-color: "#FFFFFF"
    radius: "12px"
    height: "38px"
    padding: "10px 16px"
  button-ghost:
    background: "transparent"
    text-color: "#94A3B8"
    radius: "12px"
    height: "40px"
    padding: "10px"
  card-feed:
    background: "#091321"
    radius: "25.6px"
    padding: "0px"
    shadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.24) 0px 24px 70px 0px"
  card-utility:
    background: "transparent"
    radius: "12px"
    padding: "12px"
---
# Deep-channel feed glass
Source: https://dev.etmania.com/organizations

## Overview
This is a dark-mode-default dashboard system — a deep navy-black canvas carrying a frosted, glassmorphic navigation shell over a social-feed body. The aesthetic sits between editorial minimalism and app-shell utility: heavy Inter weights (900 on labels and display, 700 on headlines) supply the graphic punch, while restrained cyan and violet accents mark the only saturated notes against an otherwise achromatic surface stack. Cards are near-black glass panels with a soft ambient drop shadow rather than a hard edge, giving the whole feed a floating, layered elevation model typical of a modern SaaS console rather than a marketing site.

## Composition
The first screen is a three-column app shell: a fixed left rail (identity block, nav list, a promotional media card) at roughly 220px, a center feed column bounded near 1152px max-width, and a right rail of a follow-list module. The sticky navbar tops all three at 81px, edge-to-edge. Scrolling through the middle sections reveals a repeating feed rhythm — organization identity row, headline, metadata line, a solid utility CTA, engagement icons, then a media block (illustration or sponsor artwork) with a scrim-anchored caption — repeated per post, each post its own full-bleed card. The bottom terminates in a wide multi-column footer link grid over a flat, unglassed background. The deliberate choice is a persistent three-zone dashboard layout (nav rails always present) rather than a full-bleed marketing scroll — this reads as a product surface, not a landing page, so density stays high and whitespace stays tight throughout.

## Colors
The dominant field is a near-black desaturated navy — `#091321` (74.4% declared area) and `#070D18`/`#0D1828` for canvas and surface — confirmed by the pixel field's ~80% near-black-teal reading. Text ink is a cool off-white `#EDF4FF` for primary copy and headings, dropping to `#94A3B8`/`#91A1B8` for secondary metadata and muted labels. Two accents are rationed against this near-monochrome base: a cyan (`#67E8F9`/`#18E0FF`-family, seen in eyebrow labels, hashtag links, and small icon glyphs) and a violet-to-blue gradient (`rgb(124,58,237)` → `rgb(37,99,235)`) reserved exclusively for the single primary call-to-action button. White (`#FFFFFF`) appears only as focus-ring offset and hairline borders at low opacity. Surfaces themselves are left deliberately colorless — all chroma is spent on links, one button, and small badge glyphs, keeping 90%+ of the frame achromatic.

## Typography
Inter carries the entire system at weights from 400 to 900, with no serif or mono accent present — the "signature" face is simply Inter pushed to 900 on both display and label roles, giving oversized headlines and all-caps eyebrow labels the same graphic heaviness. Display heading text runs 36px/900 at tight 1.11 line-height for the hero headline; headline-md at 20px/700 sets card and section titles; label-md at 20px/900 marks short capitalized eyebrows and identity names; body copy runs a true 16px/400 at 1.5 line-height in `#EDF4FF ` with secondary metadata dropping to `#94A3B8`. The pairing logic is binary — heavy display/label weight for anything that identifies or headlines, plain 400 body weight for everything read at length.

## Layout
Content is bounded to a 1152px max-width column flanked by two narrower rails at the widest breakpoint. Spacing runs a tight scale — 8, 10, 12, 16, 20, 24px — favoring dense stacking over generous air. Card radii are large and soft (25.6px on feed cards, 12–16px on utility panels, up to 24–26px on promotional blocks), pill radius reserved for follow buttons and tags. Grids observed: a 2-column/2-item rail split at 13%/85% proportions (icon-plus-panel pattern), a 2-column/2-item split at 70%/28% (media-plus-caption), and a 3-column, 14-item footer link grid at 12px/32px gaps. Feed cards stack as single-column full-width rows (rows of [100 | 100 | 100 | 100]) — a vertical list-layout, not a multi-up card grid, reinforcing the feed/timeline metaphor over a gallery metaphor.

## Components
- **Navbar** — edge-to-edge square bar, 1920px wide at full viewport (0/0 inset), 81px tall, all four corners 0px radius, sticky, fill `#070D18` with `backdrop-filter: blur(40px)`; carries 14 items (logo mark + wordmark, ~6 text nav links, search field, icon cluster, sign-in text button, and a solid Sign Up pill CTA in violet-blue).
- **Button — glass utility** (navbar/first-screen secondary): `rgba(255,255,255,0.05)` fill, `#E2E8F0` text, 12px radius (slightly-rounded), 36–38px height, `1px solid rgba(255,255,255,0.1)` border — used for "sign in to apply"-type secondary actions, not the hero primary.
- **Button — primary** (hero, first screen — observed + partially measured): gradient fill `linear-gradient(to right, rgb(124, 58, 237), rgb(37, 99, 235))`, white text, 12px radius (slightly-rounded), 38px height, 10px/16px padding — the single saturated CTA on the page, used for the main conversion action inside the feed body.
- **Button — ghost/nav-link** (×12, sidebar and nav rail): transparent fill, `#94A3B8` text, 12px radius, 40px height, 10px padding — used for the left-rail and top-nav wayfinding items.
- **Card — feed post** (×4+ down the center column): `#091321` fill, 25.6px radius (rounded), 0px padding, shadow `rgba(0,0,0,0.24) 0px 24px 70px 0px`; anatomy top-to-bottom: identity row (small badge/avatar + bold name + @handle, optional location tag), heading line, metadata/detail line, a solid glass or gradient CTA, a divider, then an icon row (heart/comment/share) with a like-and-comment count, then a caption line with hashtag links and an optional inline follow chip.
- **Card — media post** (variant of the feed card): same 25.6px-radius shell, full-bleed illustration or artwork filling most of the card body edge-to-edge above the caption zone, with the same icon-row/caption footer as the standard feed card.
- **Card — utility/rail panel** (×2, left and right rails): transparent fill, 12px radius, 12px padding, single or stacked body-text rows — used for the promotional/featured-campaign block and the sidebar list items.
- **Follow-list module** (right rail, one instance): a stacked list of organization rows, each with a small square badge, bold name, muted @handle, and a pill-shaped outlined "Follow" button at the row's right edge.
- **Cookie/consent band** (floating, lower-left overlay): a glass surface panel with an icon, heading, body copy, and two side-by-side buttons — one ghost/outline, one gradient-filled — echoing the primary/secondary button pair exactly.
- **Footer** — transparent background, no card shell, three-column link grid of 14 total links under a logo lockup and a short descriptive line; plain-text link list, no dividers, no icons beyond the logo mark.

## Graphics & Effects
The background is built from two full-page layered gradients, not a single hero wash: a very low-alpha radial bloom `radial-gradient(circle at 8% 0%, rgba(81, 73, 190, 0.16), rgba(0, 0, 0, 0) 30%)` seated in the top-left corner, sitting atop a diagonal base gradient `linear-gradient(145deg, rgb(7, 13, 24), rgb(9, 19, 33) 58%, rgb(11, 16, 32))` that spans the entire canvas — together these keep the frame reading almost solid near-black with only a faint violet corner glow, matching the pixel field's near-total dark-teal-navy dominance. Over roughly a third of the page, a faint grid-line texture is laid in via two hairline linear-gradients (`rgba(255,255,255,0.04) 1px` steps, one vertical/one horizontal) — a subtle graph-paper grain rather than noise, visible mainly behind the feed column. A small corner accent gradient (`linear-gradient(to right bottom, rgba(139, 92, 246, 0.2), rgb(9, 20, 38), rgba(34, 211, 238, 0.1))`) covers under 3% of the page — this is a badge or icon-tile fill, not a section background. Media inside feed cards (illustration/artwork) carries a bottom-anchored scrim `linear-gradient(to top, rgb(5, 9, 20), rgba(5, 9, 20, 0.55), rgba(5, 9, 20, 0.05))` to seat captions legibly over imagery. Elevation is expressed purely through soft, large-blur ambient shadows (`0px 24px 70px rgba(0,0,0,0.24)`, `0px 18px 45px rgba(0,0,0,0.25)`) rather than borders — cards float rather than frame. The navbar and consent band use heavier `blur(40px)`/`blur(18px)` backdrop-filters for true frosted-glass separation from the scrolling body beneath.

## Motion
Interactive state changes are unified under one short transition covering `color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter` at `0.15s cubic-bezier(0.4, 0, 0.2, 1)` — a fast, linear-feeling ease-out-style snap applied uniformly to hover and focus states across buttons, links, and cards rather than bespoke per-component timing. Named keyframe animations (grid-drift, lock, scan, ping, pipeline, core-signal) drive a loader/scanning motif, implying a technical, radar-like sequential reveal used during load states. Scroll-driven CSS animations are present, indicating scroll-triggered or scroll-linked reveals for feed content as it enters the viewport.

## Guardrails
- Never render the hero as a full-frame saturated gradient — the background stays near-black with color confined to a thin top-left corner bloom and hairline grid texture.
- Keep the gradient CTA (`rgb(124,58,237)`→`rgb(37,99,235)`) as the only saturated-fill button on the page; all other buttons stay glass (`rgba(255,255,255,0.05)`) or ghost/transparent.
- Do not convert the feed's single-column card stack into a multi-up grid — cards are full-width rows, not tiles.
- Preserve the navbar as a true edge-to-edge, square-cornered (0px all corners) sticky bar — never inset it or round its corners.
- Keep card radii large and soft (~25.6px) on feed/media cards versus tight 12px on utility/rail panels — do not unify these into one radius.
- Reserve cyan for text links/labels only; it never fills a button or a large surface.
