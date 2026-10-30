---
version: "1"
name: "Meadow-glass ledger"
description: "Light-mode-dominant system on a lime-saturated hero, built from an ultra-black condensed display face, hairline-glass utility buttons, and a single deep-forest surface reserved for trust/testimonial bands."
colors:
  background: "#FFFFFF"
  surface-hero: "#9FE870"
  surface-muted: "#ECF9F9"
  surface-forest: "#163300"
  text-primary: "#0E0F0C"
  text-secondary: "#454745"
  text-tertiary: "#6A6C6A"
  accent-lime: "#9FE870"
  accent-blue: "#0097C7"
  accent-positive: "#008026"
  border-hairline: "#101008"
typography:
  display-lg:
    fontFamily: "Wise Sans"
    fontSize: "96px"
    fontWeight: 900
    lineHeight: "0.85"
  headline-md:
    fontFamily: "Wise Sans"
    fontSize: "64px"
    fontWeight: 900
    lineHeight: "0.85"
  body-md:
    fontFamily: "Inter"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: "1.4"
  label-md:
    fontFamily: "Inter"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: "1.4"
    letterSpacing: "0.1px"
  body-dense:
    fontFamily: "Inter"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "1.4"
  accent-legal:
    fontFamily: "Times New Roman"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: "1.4"
spacing:
  base: "8px"
  gap: "40px"
  section-padding: "60px"
  section-gap-lg: "88px"
rounded:
  control: "9999px"
  card: "30px"
  hairline: "2px"
components:
  button-primary-hero:
    background: "#9FE870"
    text-color: "#163300"
    radius: "9999px"
    height: "40px"
    padding: "8px 16px"
    hover-background: "#80E142"
    hover-text-color: "#0D1F00"
  button-glass-utility:
    background: "rgba(62, 59, 7, 0.07)"
    text-color: "#0E0F0C"
    radius: "9999px"
    height: "40px"
    padding: "8px 12px 8px 16px"
    hover-background: "rgba(62, 59, 7, 0.12)"
  button-nav-cta:
    background: "#163300"
    text-color: "#9FE870"
    radius: "9999px"
    height: "32px"
    padding: "8px 12px"
    border: "1px solid rgb(22, 51, 0)"
    hover-background: "#0D1F00"
  button-nav-large:
    background: "#163300"
    text-color: "#9FE870"
    radius: "9999px"
    height: "72px"
    padding: "19px 24px"
    border: "1px solid rgb(22, 51, 0)"
  card-widget-panel:
    background: "#9FE870"
    radius: "0px"
    padding: "60px 0px"
  card-feature-media:
    background: "#FFFFFF"
    radius: "30px"
    padding: "40px 30px"
    border: "rgba(255, 255, 255, 0.2) 0px 0px 0px 1px"
  card-testimonial:
    background: "#163300"
    text-color: "#9FE870"
    radius: "0px"
    padding: "0px"
    shadow: "rgba(14, 15, 12, 0.12) 0px 0px 0px 1px"
---
# Meadow-glass ledger
Source: https://wise.com/

## Overview
This is a light-mode financial system that opens with a full-bleed lime plane instead of the near-black hero one might expect from a fintech — the darkness here is compressed into a condensed, ultra-heavy display face (Wise Sans at 900 weight, 0.85 line-height) sitting directly on the lime, and into a single deep-forest surface reserved for the trust and testimonial bands mid-page. The pixel field is genuinely white/off-white dominant (~40% #FFFFFF, ~39% #F0F0F0) once you scroll past the hero — the lime (#A8F078/#9FE870) is a rationed hero-and-accent color, not the page's resting state. This is Swiss-adjacent in its grid discipline and condensed type, but softened with a bento-style card layer, full pill controls everywhere, and a glassy translucent utility button. It reads as a confident, high-legibility utility brand with one loud color move at the top of the page.

## Composition
The first screen is a solid lime plane (#9FE870) carrying a two-line, left-of-center display headline in near-black at 96px/900, a body sentence in a muted dark tone, one pill CTA, and a white embedded calculator card with its own internal green data band and dark "Send money" pill. Scrolling reveals: a currency-flag rail on lime, a 3-up icon+text row (still on lime), a full-bleed photographic band with a play affordance, then the page drops to white/off-white (#ECF9F9-adjacent) for a 3-up bento feature row on light-gray cards, an alternating photo+copy trust module, a full-bleed dark-forest testimonial carousel (3-up cards visible with edge-cropped overflow signaling scroll), and a final light footer. The deliberate choice is to let color do all the work in one saturated top-of-page hit and then retreat to near-monochrome white/gray for the entire body — rejecting the alternative of a gradient-heavy, color-throughout marketing page. This keeps every mid-page card legible and lets the lime and forest bands act as punctuation, not wallpaper.

## Colors
`#9FE870` (lime) is the hero surface and the primary CTA fill — it also reappears as card-panel backgrounds mid-page and as the text color inside forest-green testimonial cards, giving it a ~13–27% pixel share depending on scroll position, always in large rationed blocks, never as a small accent dot. `#163300` (deep forest) is the second color role: nav CTA fill, testimonial-card background, and the ink used for text sitting on lime. `#0E0F0C` and `#454745` (content-primary/secondary tokens) carry all body and heading text on white surfaces. `#0097C7` (content-accent, unseen as a large fill but present as the token) marks links. `#008026` (content-positive) is reserved for confirmation/checkmark states next to feature bullets. White and a near-white `#ECF9F9`/`#F0F0F0` gray are the resting background for every non-hero, non-testimonial section — left deliberately uncolored so the lime and forest bands read as events.

## Typography
Wise Sans at 96px/900/0.85 line-height carries the hero and section headlines (headline-md drops to 64px/900 for secondary section titles) — an extremely condensed, tightly-set display face used only for headlines, never body copy. Inter carries everything else: body copy sits at 18–20px/400 with 1.4 line-height, and a 20px/600 label variant with 0.1px tracking marks eyebrows, chip labels, and stat captions. A residual Times New Roman appears only in fine-print legal copy at the very foot of the page — a serif used exclusively for regulatory disclaimer text, never for voice or accent. This is a two-family system: one massive grotesque-condensed display face against one workhorse humanist sans for all reading text.

## Layout
Content is capped at a 1440px max-width with 60px section padding and 88px gaps between major bands. Mid-page feature grids run as 3-column tracks at 40px and 30px gaps: one row of 3 equal feature cards (light-gray, 30px radius), one row of 3 equal testimonial cards (forest, edge-cropped to imply horizontal scroll), and a 4-item row that splits 45/45 width pairs plus two 45%-width singles beneath — an asymmetric two-plus-one-plus-one stacking rather than a strict uniform grid. The embedded hero calculator is a full-width stacked panel (100% width rows repeated 5×) — a vertically listed widget, not a grid. Corner radii scale by role: 9999px pill on every button and chip, 30px on the light feature cards, 0px flat on panels, testimonial cards, and list rows — the flat 0px is used deliberately on any full-bleed or list-style container to distinguish "surface" cards from "control" pills.

## Components
- **Navbar**: 76px tall, transparent/static background, 39 total link/utility items across primary nav, language switcher, help, log in, and sign up. Its CTA is a lime-on-forest pill (`background #163300`, `text #9FE870`, `radius 9999px`, `height 32px`) — this is the persistent nav sign-up button, distinct from the hero's own CTA.
- **Hero primary CTA**: the solid lime pill under the headline (`#9FE870` fill, `#163300` text, `radius 9999px`, `height 40px`, `padding 8px 16px`, hover → `#80E142`/`#0D1F00`) — this is the single most emphasized control on the first screen, sitting alone beneath the headline and subhead.
- **Calculator widget CTA**: a second, larger dark pill ("Send money") inside the white embedded card — same forest-on-lime-adjacent family as the nav CTA but functions as the calculator's own conversion action, not the page's primary.
- **Glass utility button**: `rgba(62, 59, 7, 0.07)` fill, `#0E0F0C` text, `radius 9999px`, `height 40px`, `padding 8px 12px 8px 16px`, hover → `rgba(62, 59, 7, 0.12)` — used for secondary in-card actions like "Change" country selectors and fee-detail expanders; a translucent, low-contrast pill distinct from the solid lime primary.
- **Nav-large CTA**: an oversized 72px-tall forest pill variant with generous 19px/24px padding — used as a standalone anchor CTA in a dedicated promotional strip, heavier than the standard 32px nav button.
- **Hero calculator card**: full-width stacked panel family, lime fill, 0px radius, 60px vertical padding per row, 5 stacked 100%-width rows — anatomy top to bottom: country-selector row (flag + name + glass "Change" pill), rate-disclosure chip, currency-amount input row (flag + code + numeral + edit chevron), a discount-eligibility banner, a second currency-amount row, then arrival-time and fee-line rows, ending in the calculator's dark CTA pill and a text link for destination browsing.
- **Feature triptych (light)**: ×3 in a row, white fill, `radius 30px`, `padding 40px 30px`, bordered by `rgba(255,255,255,0.2) 0px 0px 0px 1px`. Anatomy: media/icon graphic covering the top third (product screenshot, card render, or numeral stat), a bold short heading, a body sentence, a checklist line with a lime checkmark and underlined link, and a pill-outline secondary CTA at the base.
- **Trust/security module**: alternating media-left + text-right band — a rounded photographic image on the left with a floating lime pill badge overlapping its corner, paired with a heading, a body paragraph, a divider-separated list of three icon+heading+body rows, and a solid lime CTA pill.
- **Testimonial carousel (dark)**: ×3 visible per row (with a 4th peeking at the edge to signal scroll), forest-green fill, `radius 0px`, `shadow rgba(14,15,12,0.12) 0px 0px 0px 1px`. Anatomy: paired circular flag icons at top, a lime-colored quote in Inter body weight, an attribution line, and a lime pill "View on Trustpilot" CTA at the base. Paired with round prev/next arrow controls (one dimmed/disabled-gray, one active lime-filled) above the row.
- **Logo/flag rail**: a horizontal scrolling row of circular country-flag chips with a dark circular forward-arrow control breaking the rhythm at one position — a scrolling-rail pattern, not a static logo strip.
- **Footer**: `rgba(22, 51, 0, 0.08)` tinted background, 43 links organized into column groups under un-styled small headings, a wordmark lockup, five social icon glyphs, then a divider and dense legal/regulatory paragraph set in the small serif accent face.

## Graphics & Effects
No large-scale decorative gradients render on this page — the only "gradient-like" surface is the video hero panel behind the calculator card, which should be stood in with a still frame of natural/outdoor color grading (greens and daylight tones) rather than an abstract mesh. Two live `video` surfaces exist mid-page (a testimonial-adjacent play-button panel and a background loop) — replace both with static photographic stand-ins at the same crop. Elevation is expressed almost entirely through hairline borders and near-invisible shadows rather than heavy drop shadows: `rgba(255,255,255,0.2) 0px 0px 0px 1px` outlines light cards, `rgb(134,134,133) 0px 0px 0px 1px inset` gives an inset hairline to input-style rows, and `rgba(14,15,12,0.12) 0px 0px 0px 1px` grounds the dark testimonial cards. A single `blur(8px)` backdrop-filter is used sparingly, likely on a floating badge or sticky utility element, producing a light frosted-glass edge rather than a full glassmorphic panel.

## Motion
Interactive color changes are the dominant motion signature: `color, background-color, border-color 0.35s cubic-bezier(0.8, 0.05, 0.2, 0.95)` drives hover transitions on buttons and links, giving a slow, decelerated settle rather than a snappy micro-interaction. A faster `color, background-color 0s, 0.15s ease, ease-in-out` pairing handles instant-feeling toggle states. Named keyframes (`rotating`, `droppable-fade-in`, `listSlideOver`, `loaderStroke`) indicate a rotating icon loop (likely the currency-swap glyph), a fade-in for dropdown/select panels, a slide transition for list-style content swaps (e.g., testimonial or destination carousel), and a stroke-drawing loader animation for async states.

## Guardrails
- Never let the lime hero plane bleed past the first screen — the rest of the page is white/off-white with lime and forest used only as punctuation blocks.
- Never render a soft drop shadow on cards; use 1px hairline borders/insets exactly as specified — this system has no blurred elevation.
- Never substitute the glass utility pill's translucent fill for the hero's solid lime CTA, or vice versa — they are different roles at different opacities.
- Never round card panels and list rows — they are 0px flat by design; only buttons, chips, and the light feature-card family carry radius.
- Never replace the condensed 900-weight display face with a standard-weight sans — the extreme weight and 0.85 line-height are the system's signature.
