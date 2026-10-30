---
version: "1"
name: "Golden-hour editorial grid"
description: "Full-bleed cinematic photographic hero in warm golden tones giving way to a stark off-white editorial system: flat gray capsule tags, hairline-divided stat rows, and deep forest-green brand ink."
colors:
  background: "#FAFAF9"
  surface: "#E6E6E6"
  surface-dark-hero: "#0D1016"
  text-primary: "#000000"
  text-secondary: "#68655E"
  text-tertiary: "#343434"
  accent: "#005032"
  link: "#0000EE"
  border: "#E6E6E6"
typography:
  display-lg:
    fontFamily: "CUSTOMV2;Aktiv Grotesk VF Variable Regular"
    fontSize: "60px"
    fontWeight: 400
    lineHeight: "1.05"
    letterSpacing: "-2.4px"
  body-md:
    fontFamily: "CUSTOMV2;Aktiv Grotesk VF Variable Regular"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "1.4"
  label-md:
    fontFamily: "CUSTOMV2;Aktiv Grotesk VF Variable Regular"
    fontSize: "36px"
    fontWeight: 400
    lineHeight: "1.2"
    letterSpacing: "-0.7px"
  caption-sm:
    fontFamily: "Aktiv Grotesk VF Variable Regular"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "1.4"
  accent-serif:
    fontFamily: "Times New Roman"
    fontWeight: 400
    note: "reserved serif appearing sparingly as a wordmark or editorial accent weight"
spacing:
  base: "8px"
  gap-sm: "5px"
  gap-md: "10px"
  gap-lg: "15px"
  gap-xl: "30px"
  gap-xxl: "40px"
  content-max-width: "40px"
rounded:
  pill-tag: "9999px"
  control: "5px"
  card: "24px"
  card-lg: "48px"
  sharp: "2px"
components:
  button-hero-primary:
    background: "#005032"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "~44px"
    note: "observed solid forest-green pill with circular trailing arrow glyph, under hero headline"
  button-nav-cta:
    background: "#005032"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "36px"
    note: "same green pill family, smaller scale, top-right of navbar"
  button-nav-link:
    background: "transparent"
    text-color: "#FFFFFF"
    radius: "0px"
  tag-pill:
    background: "#68655E"
    text-color: "#FFFFFF"
    radius: "9999px"
    padding: "8px 16px"
  tag-pill-active:
    background: "#343434"
    text-color: "#FFFFFF"
    radius: "24px"
    padding: "16px 24px"
  card-media:
    background: "transparent"
    radius: "0px"
    padding: "0px"
    border: "none"
  stat-row:
    background: "transparent"
    border-top: "1px solid #E6E6E6"
    padding: "40px 0"
  logo-strip-item:
    text-color: "#68655E"
    background: "transparent"
---
# Golden-hour editorial grid
Source: https://p.superdesign.dev/draft/0be9704c-49f8-4cce-9b8e-d624787f4e1a

## Overview
This is an editorial, content-led system riding on top of a single cinematic photographic hero. The hero is maximalist in imagery (a full-bleed aerial city skyline at golden hour) but minimalist in UI — thin white sans labels, one green pill CTA, and a large, quiet serif-free headline floating low in the frame. Below the fold the system flips entirely: a near-white, almost paper-toned (`#FAFAF9`) editorial canvas carries flat gray capsule tags, hairline dividers, and oversized black numerals in a Swiss-influenced, grid-strict rhythm. The brand ink, a deep forest green, is rationed to pills, links, and the wordmark — never used as a field color.

## Composition
The first screen is a single dominant photographic plane with UI pinned to its top and bottom thirds: a transparent navbar overlays the image directly (no bar fill), and the headline plus subhead plus CTA sit low, anchored above the fold's bottom edge with a dark gradient scrim beneath them for legibility. Immediately below, the page snaps to the flat off-white surface: a logo strip, then a capsule-tag accordion/stack (an interactive list of labeled rows, one expanded to reveal body copy), then a 4-up card grid, then a stat section pairing giant black numerals against short caption lines in a strict two-column split, then a two-tone "vision" band on a flat warm-gray surface, finally a dense multi-column footer. The deliberate choice is to let one photographic hero carry all the emotional weight and keep every subsequent section flat, numeric, and grid-disciplined — rejecting the alternative of repeating gradient/photo treatments throughout, which would dilute the hero's impact.

## Colors
`#FAFAF9` is the dominant surface (the pixel field's ~69% `#F0F0F0`-adjacent reading and ~9% white confirm an off-white, not pure-white, canvas) and carries nearly all body sections. `#E6E6E6` is the secondary surface, used as a flat warm-gray card/section background (the tag-stack container and the vision band) and as hairline dividers between stat rows. `#0D1016` only exists within the hero photograph's shadow range, never as a UI fill — the hero reads photographic, not flat-dark. Text ink is pure `#000000` for headings and numerals; `#68655E` is the secondary/caption tone used across body copy and logo-strip wordmarks; `#343434` marks a slightly deeper secondary tier (active tag state). The forest green `#005032` is the sole saturated brand color, rationed to under 1% of pixels — CTA pills, the footer wordmark, and footer link text only. Blue `#0000EE` appears only as a visited/default hyperlink ink in body copy, a classic browser-blue left largely undisturbed. No color is used for section backgrounds beyond the gray/off-white pairing — saturation is deliberately withheld from structure and spent only on action.

## Typography
A single variable sans, Aktiv Grotesk VF, carries the entire system at three registers: a tight, large display size (60px, weight 400, line-height 1.05, tracking -2.4px) for hero and section headlines; a mid label size (36px, line-height 1.2, tracking -0.7px) for sub-headings like section titles; and a small body size (~14px, line-height 1.4, color `#68655E`) for paragraph copy, dropping to 12px for captions and logo-strip labels. There is no serif or mono family active in visible UI — Times New Roman exists only as a fallback token, not a styled accent. Hierarchy is built entirely through size and negative tracking on the display cut, not through weight changes (everything sits at regular 400).

## Layout
Content is capped at a 1680px max-width, centered, with generous flat padding. The spacing scale runs in small, uneven increments (5, 8, 10, 15, 30, 40px) rather than a strict multiple-of-8 system, giving a slightly organic, editorial density instead of a mechanical grid feel. The mid-page feature section is a 4-column card grid with 40×32px gaps — four equal media-led cards in one row. The logo strip beneath the hero runs as a 5-column equal-width scrolling rail (five logo slots at 20% width each, zero gap), reading as a flat trust strip rather than a card grid. Border radii range from sharp 2px hairlines up to fully pilled 9999px tags and a generous 48px on larger card corners — rounding scales with a component's prominence, sharp for dividers, pill for interactive labels.

## Components
- **Navbar**: transparent, edge-to-edge overlay directly on the hero photograph (no bar fill, no blur visible), full viewport width, ~64–72px tall. Five text nav items left-aligned, a centered serif-free wordmark lockup, "Log in" as plain white text, and a solid green pill CTA (`#005032` fill, white text, trailing circular arrow glyph, full pill radius) at far right.
- **Hero primary CTA**: the solid green pill beneath the headline and subhead — an observed near-solid `#005032` fill, white label, circular arrow icon capsule, full 9999px corners, small ~36–40px height. This is the single highest-contrast, most attention-getting control on the first screen; the nav's green pill is a smaller secondary instance of the same variant, not a separate primary.
- **Logo strip**: a 5-column equal-width rail directly below the hero, flat `#FAFAF9` background, muted gray wordmarks (`#68655E`), no card chrome, no gap — a trust-signal band read as continuous text rather than discrete tiles.
- **Capsule tag-accordion**: a vertical stack of seven-plus pill-shaped rows (gray `#68655E` fill, full radius, small "+" affordance icon at trailing edge) sitting inside a flat `#E6E6E6` panel; one row expands into a darker `#343434` pill with body copy revealed beneath its label — a progressive-disclosure list, not a grid.
- **Feature card grid (×4)**: four equal cards in a single row, gap 40×32px, transparent background, 0px radius, 0px padding — each card is pure media-top-bleed (a product screenshot or illustrative render filling the full card width) followed by outside-the-card text: a bold label line, a 2–3 line description in secondary gray, and a small arrow-prefixed text link below.
- **Stat row block**: a two-column split — left column holds a short intro paragraph; right column stacks three giant black numeral rows (display-scale, ~70–90px, tight tracking) each paired with a short caption to its right, separated by thin `#E6E6E6` hairline dividers. No card chrome, no fill — pure typographic rhythm.
- **Vision band**: a full-width flat `#E6E6E6` section breaking the white rhythm, pairing a left-aligned large label-scale heading with two right-side body-copy columns, and a photographic image bleeding in at the bottom edge of the section.
- **Footer**: flat white background, four-column link grid (Product, Solutions, Certified, Company) in small caption-size type with green-ish link coloring, followed by a very large standalone wordmark set in the brand green, then a final legal/social utility row beneath a hairline divider.

## Graphics & Effects
The hero photograph carries two stacked scrims for text legibility: `linear-gradient(rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 13.1%, rgba(0,0,0,0.1) 72.2%, rgba(0,0,0,0.5) 100%)` darkening both the top (behind the nav) and bottom (behind the headline) thirds of the frame, and a secondary `linear-gradient(rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 75%)` reinforcing the base. These scrims cover only the hero image itself — roughly the first full viewport — and must not be read as a page-wide gradient. A smaller scrim, `linear-gradient(rgba(0,0,0,0.4) 0%, rgba(67,81,112,0.2) 15%, rgba(0,0,0,0) 100%)`, applies to secondary media elements (card thumbnails or inline video) elsewhere on the page at under 1% total coverage each. Live video surfaces appear in at least two places (likely within the feature-card media); substitute a static photographic or soft-gradient still when rebuilding. A soft ambient shadow, `rgba(0,0,0,0.15) 0px 0px 40px 0px`, lifts card media subtly off the flat canvas. Backdrop blur (`blur(27.5px)`, `blur(10px)`) is reserved for any glass-like overlay chrome, likely a subtle frosted treatment behind hero nav text — not applied broadly.

## Motion
Interactive width/flex transitions use a custom deceleration curve, `cubic-bezier(0.625, 0.05, 0, 1)` at 0.5s, driving the capsule tag-accordion's expand/collapse (flex-basis and width animating together) — a deliberate, slightly slow, weighted reveal rather than a snappy one. Background and border hover states use quick, simple easing: `background 0.18s ease` for general hover fills, and a layered `background, border-color, transform 0.15s/0.15s/0.05s ease` for button press feedback, giving buttons a near-instant tactile response distinct from the slower panel reveals. Framer Motion drives scroll-triggered reveals across sections; keyframe sets (editorbx-css-0 through -5) suggest sequenced fade/slide entrances timed to scroll position rather than on-load.

## Guardrails
- Never fill the hero with a flat or saturated gradient — it is a photographic image with two dark scrims rationed to its top and bottom thirds only.
- Never give the green brand color to a background or section fill — it belongs only to pills, links, and the wordmark, at well under 1% of total pixels.
- Never round the feature-card media to a card radius — these are intentionally 0px, full-bleed, borderless media blocks.
- Keep the tag-accordion pills fully rounded (9999px) and gray-filled; do not reskin them as outline or ghost buttons.
- Preserve the uneven spacing scale (5/10/15/30/40px) rather than normalizing to a strict 8px grid — the rhythm is intentionally editorial, not mechanical.
- Do not add weight variation to the type system; hierarchy comes from size and negative tracking only, at a single regular weight.
