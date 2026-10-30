---
version: "1"
name: "Pixel-ledger blue"
description: "White-dominant, bitmap-display system: a squared-off electric blue rationed onto CTAs and highlights, a pixel-cut display face for headlines, Inter for body, and hairline-bordered rule-of-three cards throughout."
colors:
  background: "#FFFFFF"
  surface: "#F8F8F8"
  surface-highlight: "#EAE4FF"
  text-primary: "#121212"
  text-secondary: "#7E7E7E"
  text-tertiary: "#AAAAAA"
  accent: "#173EF5"
  accent-hover: "#143CF8"
  border: "#E8E8EC"
  border-dark: "#0D0D0D"
  success: "#00B67A"
typography:
  display-lg:
    fontFamily: "PP NeueBit"
    fontSize: "83px"
    fontWeight: 700
    lineHeight: "0.92"
    letterSpacing: "0.4px"
  headline-md:
    fontFamily: "Inter"
    fontSize: "48px"
    fontWeight: 700
    lineHeight: "1.12"
    letterSpacing: "-1.7px"
  body-md:
    fontFamily: "Inter"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: "1.65"
  label-md:
    fontFamily: "PP NeueBit"
    fontSize: "27px"
    fontWeight: 700
    lineHeight: "1.65"
  label-mono:
    fontFamily: "PP NeueBit"
    fontSize: "27px"
    fontWeight: 700
    lineHeight: "1.65"
  body-sm:
    fontFamily: "Inter"
    fontSize: "13.76px"
    fontWeight: 400
    lineHeight: "1.5"
spacing:
  base: "8px"
  gap: "24px"
  section-padding: "130px"
  content-max-width: "130px"
rounded:
  sharp: "2px"
  control: "4px"
  card-tight: "7px"
  card: "8px"
  card-lg: "16px"
  pill: "50px"
components:
  button-primary-hero:
    background: "#173EF5"
    text-color: "#FFFFFF"
    radius: "4px"
    height: "54px"
    padding: "16px 30px"
    shadow: "rgba(0, 0, 0, 0.28) -2px -2px 0px 0px inset"
  button-primary-mid:
    background: "#173EF5"
    text-color: "#FFFFFF"
    radius: "4px"
    height: "46px"
    padding: "13px 26px"
    shadow: "rgba(0, 0, 0, 0.28) -2px -2px 0px 0px inset"
  button-nav-cta:
    background: "#173EF5"
    text-color: "#FFFFFF"
    radius: "4px"
    height: "32px"
    padding: "9px 18px"
    shadow: "rgba(0, 0, 0, 0.28) -2px -2px 0px 0px inset"
  button-outline-secondary:
    background: "transparent"
    text-color: "#121212"
    radius: "4px"
    height: "54px"
    border: "1px solid #E8E8EC"
  button-text-link:
    background: "transparent"
    text-color: "#173EF5"
    radius: "0px"
    height: "62px"
    padding: "0px 10px"
  card-review:
    background: "#FFFFFF"
    radius: "8px"
    padding: "0px"
    border: "1px solid #E8E8EC"
  card-highlighted-panel:
    background: "#EAE4FF"
    radius: "8px"
    border: "1px solid #173EF5"
    padding: "24px"
  card-step-panel:
    background: "#FFFFFF"
    radius: "8px"
    padding: "24px"
    border: "1px solid #E8E8EC"
  card-tricolumn-band:
    background: "transparent"
    radius: "0px"
    padding: "129.6px 0px"
  card-avatar-strip:
    background: "transparent"
    radius: "50%"
    size: "avatar circles ~64px"
  footer:
    background: "#173EF5"
    text-color: "#FFFFFF"
    links: 9
---
# Pixel-ledger blue
Source: https://theaicourse.ai/self-paced?trakyo_id=VBESRYAi4o3wu2Fb

## Overview
This is a white-dominant, editorial-tech system built on a single rationed brand blue (`#173EF5`) against near-pure white (`#FFFFFF` at ~87% of pixels). The identity is carried by a pixelated bitmap display face (PP NeueBit) used at huge scale for the hero headline and section eyebrows, paired with a clean grotesque (Inter) for body copy and headline-weight subheads. Squared, hard-edged geometry dominates: 4px button radii, hairline `#E8E8EC` borders, and an inset "pressed-plastic" shadow on every filled button. It reads as a conversion-first, dense information page (Swiss-adjacent structural discipline) styled with a retro-pixel accent, not a soft SaaS gradient product.

## Composition
The first screen is left-aligned: a bordered eyebrow pill, a three-line PP NeueBit/Inter mixed headline with two phrases sitting on a pale lavender (`#EAE4FF`-family) highlight block, a body paragraph, a highlighted-price sentence, a primary/secondary button pair, and a fine-print disclaimer — all confined to roughly the left half, with a tilted pricing card and a dot-particle illustration occupying the right void. Below the fold the page runs a strict vertical rhythm of full-width bands (130px section padding, 760px content max-width for text): a wall of Trustpilot-style review cards in a multi-column masonry-feeling grid, a large italic-free bitmap statement band, a full-bleed rotating avatar mosaic behind a centered proof headline, a numbered accordion list of course "parts," an office-hours/testimonial split, and a closing price-urgency band before the footer. The deliberate choice is generous white space and hairline dividers instead of card shadows or gradients to separate content — sections are told apart by padding and rule lines, not by elevation, keeping the page feeling flat and print-like rather than app-like.

## Colors
`#FFFFFF` is the page and card background at ~87–71% of rendered area — this is a light-mode-default system, not dark. `#173EF5` (declared 16.8% area, ~7-8% of live pixels) is the single accent: every filled button, the footer's full-bleed fill, highlighted price text, eyebrow dots, and link color. `#F8F8F8` is a pale neutral "band" surface for slightly separated sections. `#EAE4FF` is a low-saturation lavender tint used only behind the two highlighted headline phrases and the "Theory" callout card — this is the tint role, always paired with blue text or a blue left border. Text ink is `#121212` primary, `#7E7E7E` secondary, `#AAAAAA` tertiary/muted, running on hairline `#E8E8EC` borders. `#00B67A` (Trustpilot green) appears only inside review-star iconography — it's borrowed brand color, not part of this system's palette, and should not be reused elsewhere. Nothing else is colored: icons, dividers, and disabled states stay in the gray ramp, keeping blue's density low and legible as the single call-to-action signal.

## Typography
PP NeueBit, a squared pixel/bitmap display face, carries both the largest headline text (83px/700, lh 0.92, tracking 0.4px) and small all-caps section eyebrows and numbered labels (27px/700 in isolated instances, styled down for eyebrows) — it is the system's signature accent face and must render with hard pixel-stepped edges, not a smooth sans substitute. Inter carries the secondary headline weight (48px/700, lh 1.12, tracking -1.7px, used for mid-page section titles) and all running body copy (17px/400 lh 1.65 for lead paragraphs; 13.76px/400 for dense card text), with secondary text dropping to `#7E7E7E`. There is no serif; hierarchy comes entirely from switching between the pixel display face (headline impact, eyebrows) and Inter (structure, reading copy), plus weight and size — never italics or color changes to indicate rank.

## Layout
Content is capped at a 760px reading column for prose blocks, but full-width bands (reviews, avatar mosaic, footer) bleed edge to edge. Section padding is a heavy 130px top/bottom, giving the page a slow, deliberate scroll cadence. Card grids run in single-column-stacked rows rather than side-by-side multi-column bento: the "parts" accordion is a stack of full-width rows (rows [100 | 100 | 100 | 100]), the review wall and step panels are similarly uniform single-column repeats (rows of 100% width items, sometimes six deep), and the pricing/testimonial content areas resolve to one or two stacked 100%-width blocks rather than a card grid — this is a list-layout system, not a card-grid system, despite card-like borders on individual rows. Radii step in two families: 4px/7px/8px for functional controls and bordered panels, versus 16px used specifically for a distinct group of four-item white card rows — treat 16px cards as a separate, softer sub-family reserved for a specific content type, never interchange it with the 8px operational cards.

## Components
- **Navbar**: edge-to-edge square bar, full 1920px viewport width, 0px inset both sides, 59px tall, all four corners 0px radius (perfectly square, sticky, `#FFFFFF` fill). Contains a logo/wordmark in blue, 18 total nav items including a dropdown-marked item and one item on a lavender pill highlight, plus a primary CTA at the far right: `#173EF5` fill, `#FFFFFF` text, 4px radius, 32px height, 9px 18px padding, inset shadow `rgba(0, 0, 0, 0.28) -2px -2px 0px 0px inset`, hover lifts via `matrix(1,0,0,1,0,-1)`.
- **Hero primary button**: an observed solid `#173EF5` pill-free rectangle under the headline, ~4px corners, ~54px tall, 16px 30px padding, white text, bearing the same inset pressed-shadow as other filled buttons — this is the single most emphasized control on the first screen. It sits beside a secondary outline/ghost button (transparent fill, hairline border, dark text) of matching height — the outline is a lower-emphasis companion, not a second primary.
- **Hero tilted pricing card**: one instance, upper-right of the first screen, white fill, rounded corners, subtle rotation for a "dropped receipt" effect; interior top-to-bottom: a small blue price-off badge, a struck-through original price, a large bold current price, and a small gray deposit/pay-later caption.
- **Review card family**: appears mid-page in a dense multi-column masonry-feeling wall (×4 measured, `#FFFFFF`, 8px radius, 0px padding, hairline border). Interior: circular avatar + name/location line, a date stamp, a five-star row, a bold one-line review title, a gray body paragraph, and a small useful/share utility row at the base.
- **Trustpilot overlay card**: one floating card mid-review-wall, white fill, rounded corners, drop shadow; interior: Trustpilot wordmark, a row of five solid green star icons, and a full-width blue CTA button (reserve variant) beneath.
- **Numbered course "parts" accordion**: mid-page, a vertical stack of full-width rows (rows [100 | 100 | 100 | 100], repeats to more entries below the fold). One expanded/active row uses the `#EAE4FF` tint card treatment: 8px radius, blue border, blue left-accent bar under a checklist; interior top-to-bottom: a small blue "PART 0X" eyebrow, a bold Inter subhead, a gray descriptive paragraph, a blue-labeled "you leave with" sub-eyebrow, and a two-item bulleted checklist with diamond bullets. Collapsed rows show only eyebrow + bold title + hairline divider, white background, no border/tint.
- **Avatar mosaic band**: full-bleed section, four+ rows of circular photographic avatars (~64px, mixed color/monochrome treatment) tiled edge to edge behind a centered white gap holding the proof eyebrow, a bold Inter headline, and a gray subhead — the avatars form a decorative full-width texture rather than a card grid.
- **Office-hours / numbered testimonial split**: centered eyebrow + bold headline + two body paragraphs (one with an inline bold clause), followed by one bordered, unfilled step-counter card (e.g. "0X/0X" pagination label, bold title, gray caption) — 8px-radius, hairline border, white fill, no shadow.
- **Closing urgency band**: centered headline continuation, gray subhead sentence contrasting two prices, one full-emphasis primary button (identical spec to the mid-page 46px button), and a muted disclaimer line beneath — a simple stacked CTA molecule, not a card.
- **Footer**: full-bleed band, solid `#173EF5` fill, white text throughout; interior: centered pixel-face wordmark, a single row of 9 nav links, a contact sentence with an underlined email link, then a smaller legal-links row and a bottom-most domain caption — a faint diagonal line-art texture overlays the fill.

## Graphics & Effects
A dot-grid scrim, `radial-gradient(rgba(23, 62, 245, 0.13) 1px, rgba(0, 0, 0, 0) 1px)`, sits behind hero-adjacent illustration elements (the falling-dots decoration beside the pricing card) — this is a small textured pattern layer, not a page background, covering only that graphic's bounding box (~5% of page area). A soft radial vignette, `radial-gradient(circle, rgba(8, 8, 16, 0.46), rgba(8, 8, 16, 0.1) 64%)`, and a bottom-anchored scrim, `linear-gradient(to top, rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0))`, are reserved for small media elements only (well under 1% of page area) — treat both as localized image/video legibility scrims, never full-hero washes. Two canvas elements and four video elements exist as live surfaces (likely the dot-particle hero animation and embedded testimonial/demo clips); stand in with a static dot-pattern PNG and a poster-frame image respectively when rebuilding. Buttons carry a signature inset shadow, `rgba(0, 0, 0, 0.28) -2px -2px 0px 0px inset` (and a lighter `rgb(227, 227, 227) -2px -2px 0px 0px inset` variant), giving filled controls a subtle pressed-bevel rather than a floating drop shadow. A near-invisible blue ring shadow, `rgba(23, 62, 245, 0.027) 0px 0px 0px 5.64758px`, ghosts around some focal elements. Backdrop blurs (`blur(16px)`, `blur(12px)`) apply to the floating Trustpilot overlay card, giving it a glass-lite separation from the review wall behind it.

## Motion
Buttons transition on `transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)` (hero-scale) and `0.34s` (nav-scale), producing the one-pixel-row lift (`matrix(1,0,0,1,0,-1)`) on hover — a snappy, minimal-travel micro-interaction, not a scale or glow effect. Section and card reveals use longer paired opacity/transform choreography: `0.9s` for hero-level entrances and `0.4s` for smaller in-view elements, both on the same `cubic-bezier(0.22, 1, 0.36, 1)` ease-out-with-overshoot-flavor curve, implying scroll-triggered fade-and-rise entrances staggered down the page. Named keyframes (`blink`, `crosspulse`, `griddrift`, `livedot`, `marq`, `demoTyping`) point to a blinking cursor or status dot, a marquee/ticker crawl, a drifting dot-grid background, and a simulated typing effect somewhere in the "how it works" or demo sections — reproduce these as small looping accents, not page-wide effects. CSS scroll-driven animations drive the section-entrance timing without JS scroll listeners.

## Guardrails
- Do not tint the page background blue or place a full-screen gradient in the hero — blue stays rationed to buttons, the footer, tints, and small scrims only; the base stays white.
- Do not round the navbar or turn it into an inset/floating capsule — it is a perfectly square, edge-to-edge, sticky 59px bar with 0px radii on all four corners.
- Never substitute the 32px navbar CTA's dimensions for the hero's 54px primary button, or vice versa — each button size/padding pair is fixed to its context.
- Keep PP NeueBit's stepped, pixelated character on display text and eyebrows; do not smooth it into a standard grotesque, or the signature is lost.
- Do not convert the stacked, full-width "parts" and testimonial rows into a multi-column card grid — they are single-column list layouts with row dividers, not bento cards.
- Reserve the 16px-radius white card family for its own distinct content group; do not mix it with the 7–8px bordered operational cards.
