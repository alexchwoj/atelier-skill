---
version: "1"
name: "Editorial Ivory Grid"
description: "Bright editorial minimalism on a near-white field, carried by an italicized serif-in-sans headline treatment, hairline dividers, and softly rounded utility surfaces with a single rationed pastel-gradient accent per section."
colors:
  background: "#FFFFFF"
  surface: "#F2F2F2"
  text-primary: "#000000"
  text-secondary: "#222222"
  accent-lavender: "#FEF3FF"
  accent-mint: "#F2F2F2"
  border: "#000000"
typography:
  display-lg:
    fontFamily: "Instrument Sans"
    fontSize: "60px"
    fontWeight: 400
    lineHeight: "1.12"
    letterSpacing: "-1.2px"
  headline-md:
    fontFamily: "Instrument Sans"
    fontSize: "48px"
    fontWeight: 400
    lineHeight: "1.2"
    letterSpacing: "-0.5px"
  body-md:
    fontFamily: "Instrument Sans"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
  label-md:
    fontFamily: "Instrument Sans"
    fontSize: "20px"
    fontWeight: 500
    lineHeight: "1.5"
    letterSpacing: "-0.3px"
  accent-serif:
    fontFamily: "Instrument Serif"
    fontStyle: "italic"
    role: "single-letter and short-word interruptions inside display headlines"
spacing:
  base: "8px"
  gap: "20px"
  gap-lg: "48px"
  section-padding: "72px"
rounded:
  control: "8px"
  chip: "50px"
  card: "24px"
  pill: "80px"
  capsule-nav-btn: "160px"
components:
  button-primary:
    background: "#000000"
    text-color: "#FFFFFF"
    radius: "80px"
    height: "48px"
    padding: "16px 20px"
  button-nav-utility:
    background: "transparent"
    text-color: "#000000"
    radius: "160px"
    height: "39px"
    padding: "10px 16px"
    hover-background: "rgba(0, 0, 0, 0.05)"
  button-footer-secondary:
    background: "#F2F2F2"
    text-color: "#000000"
    radius: "80px"
    height: "48px"
    padding: "8px 16px 8px 20px"
  button-text-link:
    background: "transparent"
    text-color: "#000000"
    radius: "0px"
    height: "24px"
    padding: "0px"
  card-feature:
    background: "transparent"
    radius: "24px"
    padding: "32px"
    border: "1px solid rgba(0,0,0,0.08)"
  card-media-bleed:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  card-flow-tile:
    background: "linear-gradient(rgb(247, 243, 255), rgb(229, 215, 255))"
    radius: "24px"
    padding: "32px"
  card-flow-tile-mint:
    background: "linear-gradient(170deg, rgb(236, 247, 241), rgb(179, 226, 207))"
    radius: "24px"
    padding: "32px"
  navbar:
    background: "rgba(255, 255, 255, 0.85)"
    backdrop-filter: "blur(56px)"
    height: "72px"
    radius: "0px 0px 0px 0px"
---
# Editorial Ivory Grid
Source: https://www.isomeet.com/

## Overview
This is a bright, editorial-minimalist system: near-white paper canvas, restrained black ink type, and a single expressive signature — an italic serif letter or word stitched mid-word into an otherwise geometric sans display line. It reads closer to Swiss-influenced editorial than to SaaS-glass; structure comes from generous whitespace, hairline rules, and a strict content column rather than from shadow or color. Color is used as a rationed material — pastel gradient tiles and one pill-shaped black CTA — never as a wash.

## Composition
The first screen opens on a two-column hero: a small pill badge, an oversized headline with the serif-italic interruption, a support line, an email-capture row, and a social-proof avatar cluster on the left; a single rounded photographic card with two floating glass-white info chips fills the right half, paired with a dot-indicator carousel below it. Scrolling reveals a three-card feature row, then a horizontally-scrolling rail of role tags with circular thumbnails (two staggered rows, offset for rhythm), then a tabbed two-up showcase (Hirer/Talent) built from a 2-column asymmetric grid whose left card is neutral-gray and right is lavender-gradient, followed by a mint-gradient and a bleed-media card beneath. Further down, a two-column FAQ-plus-signup band pairs a plain accordion list against a bordered gradient-framed form card. The page closes on a scattered, overlapping photo collage flanking a centered final CTA, then a plain white footer. The deliberate choice is restraint: no full-bleed color washes anywhere, even in showcase sections — gradients are always confined to a single card's fill, rejecting the alternative of a saturated aurora hero background that the palette could easily have supported.

## Colors
Background is page-white (#FFFFFF, ~52% declared area, confirmed dominant in the pixel field at ~81% counting near-white variants) with a soft paper-gray secondary surface (#F2F2F2, ~40.6% declared) used for input fields, chips, and the footer-adjacent button fill. Text ink is pure black (#000000) for headings and primary copy, stepping down to #222222 for secondary/support lines — no gray-on-gray hierarchy beyond these two stops. Black is reused as the single interactive fill: button backgrounds, borders, and the badge/hairline strokes all key off #000000 (per the author's own `--_colors---black`, `--black-20`, `--black-50` tokens), meaning depth comes from opacity steps of one hue, not new hues. Color proper appears only inside two showcase tiles — a pale lavender wash `linear-gradient(rgb(247, 243, 255), rgb(229, 215, 255))` and a pale mint wash `linear-gradient(170deg, rgb(236, 247, 241), rgb(179, 226, 207))` — each confined to ~2.4% of total page area, i.e. one card each. Everything else — nav, hero, footer, FAQ — is deliberately left uncolored to keep those two tiles legible as accents.

## Typography
Instrument Sans carries every structural role: display headlines at 60px/400 (lh 1.12, ls -1.2px), section headlines at 48px/400 (lh 1.2, ls -0.5px), body copy at 16px/400 (lh 1.5), and medium-weight labels at 20px/500 (lh 1.5, ls -0.3px) for card titles and form field headers. The signature move is Instrument Serif set in italic, dropped into the sans display line to re-letter one word or a single letter-cluster per headline (never more than one clause, always sized identically to its sans neighbors, appearing in nearly every major headline on the page — hero, feature intro, showcase intro, closing CTA). This is the system's only typographic flourish; everything else stays geometric and upright.

## Layout
Content sits in a max-width container of 1328px with 72px section padding. Grids are simple and shallow: the feature-triptych is a straightforward 3-up row of equal cards; the showcase band runs as a 2-column asymmetric grid (43%/49% split, second row full-width) mixing a neutral tile against a colored one; a 12-column/20px-gap grid underlies a 4-item feature pairing with reversed span ratios (58/41 then 41/58) for alternating emphasis; the FAQ accordion is a single-column stack of six 85%-width expandable rows with hairline dividers, paired beside a 43%-wide signup card in a 2-item/48px-gap row. Spacing steps in small increments (4, 8, 16, 18, 20, 24px) giving a tight, editorial density rather than loose SaaS air. The role-tag rail runs as a horizontal scrolling row (scrolling rail pattern) rather than wrapping, keeping the "who it's for" content compact.

## Components
- **Navbar** — edge-to-edge square bar, 1920px wide (100% viewport, 0px insets), 72px tall, all four corners 0px radius, sticky on scroll, fill `rgba(255, 255, 255, 0.85)` with `backdrop-filter: blur(56px)`. Carries a circular-mark logo + wordmark at left, 4 text nav links center-left, and one CTA at far right (#000000 fill, #FFFFFF text, 80px radius, pill-shaped) — 7 items total in the bar.
- **Button — primary (hero)** — the solid black pill under the hero headline (measured on first screen): `#000000` fill, `#FFFFFF` text, 80px radius (full pill), 48px height, 16px 20px padding. This is the single most emphasized control on the page.
- **Button — nav utility pair** — two transparent capsule buttons measured inside the navbar area (tab-style toggles, e.g. the Hirer/Talent switch): transparent fill, #000000 text, 160px radius, 39px height, 10px 16px padding, hover state `rgba(0, 0, 0, 0.05)` background. Distinct from the hero primary — this is a lighter-weight toggle control, not a CTA.
- **Button — footer/secondary** — light-gray pill seen near the page end (checkout/continue actions): `#F2F2F2` fill, `#000000` text, 80px radius, 48px height, 8px 16px 8px 20px padding.
- **Button — text link** — bare text controls used for FAQ toggles and inline actions near the page end: transparent, #000000 text, 0px radius, 24px height, no padding.
- **Hero media card** — one large rounded photographic panel on the right of the first screen, roughly a third of viewport width, with two overlapping floating info chips (white, rounded ~16px, small icon + two-line label stack) anchored at its lower-left, plus a 5-dot carousel indicator beneath.
- **Feature triptych** — 3 cards in one row (3-up), transparent fill, 24px radius, 32px padding, each holding a circular icon chip, a bold short heading, and 1–2 lines of support body copy.
- **Role-tag rail** — a scrolling horizontal rail of circular thumbnail + label pairs, arranged in two vertically staggered rows for rhythm; no card chrome, just avatar-and-caption pairs.
- **Showcase toggle tiles** — a 2-item asymmetric row (43%/49%): a neutral gray tile pairs a heading + caption with a phone-mockup screenshot bleeding to the edge; a lavender-gradient tile (`linear-gradient(rgb(247, 243, 255), rgb(229, 215, 255))`) pairs a heading + caption with a stacked card-style screenshot. A second row below adds a mint-gradient tile (`linear-gradient(170deg, rgb(236, 247, 241), rgb(179, 226, 207))`) and a full-bleed media card, each with heading + one-line caption at top and image filling the remainder.
- **FAQ accordion** — single-column stack of 6 rows at 85% container width, transparent fill, 0px radius, 24px vertical / 0px horizontal padding, plus-icon disclosure trigger at right, hairline divider between each row.
- **Gradient-framed signup card** — a bordered card whose 1px border cycles through a conic-style pink→tan→green gradient frame, white interior, 24px radius; internally stacked top to bottom: two-line heading, two-up name field row, single email field with helper caption, a labeled input with character-limit caption, two radio-style option rows, and a black pill CTA (80px radius) at the bottom.
- **Closing CTA band** — centered single-column block: small circular logo mark, italic-accented headline, one support line, an email input + solid black pill button, and a social-proof avatar-cluster caption — surrounded by scattered, independently-rounded photographic tiles placed asymmetrically around the text (overlap-grid decorative pattern, not a structured grid).
- **Footer** — plain white (`#FFFFFF`) band, logo + descriptor at left, two link columns (Sitemap, Email) totaling 7 links, bottom bar with copyright and a single circular social icon at right; 0px radius throughout, no border above except an implied hairline.

## Graphics & Effects
Color-bearing gradients are strictly card-scoped: the lavender wash `linear-gradient(rgb(247, 243, 255), rgb(229, 215, 255))` and mint wash `linear-gradient(170deg, rgb(236, 247, 241), rgb(179, 226, 207))` each fill exactly one showcase tile (~2.4% of page area apiece) — never the section background. A dark top-fading scrim `linear-gradient(rgb(0, 0, 0), rgba(0, 0, 0, 0))` sits over the top edge of at least one media card for caption legibility, covering roughly the top third of that image only. A radial highlight `radial-gradient(circle at 50% 20%, rgb(255, 255, 255) 30%, rgb(220, 220, 220))` appears at negligible scale (0.1%), likely a small icon-chip backing. Card lift is conveyed with soft, low-opacity shadows: `rgba(13, 32, 47, 0.04) 0px 0px 14px 0px` for resting cards, `rgba(0, 0, 0, 0.09) 4px 12px 12px 0px, rgba(0, 0, 0, 0.1) 1px 3px 7px 0px` and `rgba(0, 0, 0, 0.1) 2px 7px 15px 0px, rgba(0, 0, 0, 0.09) 8px 27px 28px 0px` for the more elevated floating chips and mockup screenshots. The navbar's `blur(56px)` backdrop-filter is the only glassmorphic surface in the system — a frosted bar over scrolled content, not used elsewhere.

## Motion
Interactions are fast and utilitarian: `all 0.15s ease` and `all 0.1s ease` drive hover/press transitions on buttons and toggles, `opacity 0.3s ease` handles fades (accordion reveals, image swaps), and a slower `none 0.3s ease` gates state changes that shouldn't visibly animate their layout property. Scroll is smoothed via Lenis, giving inertial, slightly weighted scrolling rather than native snap. A `scroll` keyframe animation drives the continuous horizontal role-tag rail. Overall motion character is quick and understated — sub-200ms micro-transitions, no springy overshoot, no long entrance choreography.

## Guardrails
- Never fill the hero or any section background with the lavender/mint gradients — they are single-card accents only, confined to their measured tile.
- Do not round the navbar's corners or inset it from the viewport edge — it is a full-width, sharp-cornered, sticky glass bar, not a floating capsule.
- Keep the italic serif interruption to one word or letter-cluster per headline, sized identically to the surrounding sans type — it is a punctuation mark, not a competing display face.
- Do not substitute the nav toggle capsule (160px radius, 39px height, transparent) for the hero's solid black pill primary — they are different variants with different fills and heights.
- Preserve black as the only interactive/border hue; do not introduce grays beyond #F2F2F2/#222222 or new accent hues outside the two named gradients.
- Keep shadows soft and low-opacity per the verbatim values — this system has no hard-edged or high-contrast drop shadows.
