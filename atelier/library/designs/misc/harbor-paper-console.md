---
version: "1"
name: "Harbor Paper Console"
description: "Warm off-white, paper-toned console UI with near-black ink type, a rationed pastel-gradient pill accent, and crisp 4px-radius controls throughout."
colors:
  background: "#F7F6F2"
  surface: "#FFFFFF"
  text-primary: "#17170F"
  text-secondary: "#52525C"
  accent-warm: "#FFD230"
  accent-cool: "#615FFF"
  accent-pink: "#C0C0C0"
  footer-bg: "#11120D"
typography:
  display-lg:
    fontFamily: "interFont"
    fontSize: "64px"
    fontWeight: 700
    lineHeight: "1.12"
    letterSpacing: "-1.3px"
  headline-md:
    fontFamily: "interFont"
    fontSize: "40px"
    fontWeight: 500
    lineHeight: "1.5"
    letterSpacing: "-0.9px"
  body-md:
    fontFamily: "interFont"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: "1.5"
  label-md:
    fontFamily: "interFont"
    fontSize: "17px"
    fontWeight: 700
    lineHeight: "1.25"
    letterSpacing: "-0.2px"
  label-eyebrow:
    fontFamily: "Inter"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: "1.3"
    letterSpacing: "0.08em"
spacing:
  base: "4px"
  gap: "16px"
  section-padding: "80px"
  content-max-width: "80px"
rounded:
  control: "4px"
  card: "14px"
  pill: "9999px"
components:
  button-primary:
    background: "#17170F"
    text-color: "#FFFFFF"
    radius: "4px"
    height: "48px"
    hover-transform: "translateY(-2px)"
    hover-opacity: "0.94"
  button-nav-cta:
    background: "#17170F"
    text-color: "#FFFFFF"
    radius: "4px"
    height: "36px"
    padding: "0px 16px"
    shadow: "rgba(0, 0, 0, 0.06) 0px 1px 0px 0px, rgba(26, 25, 24, 0.14) 0px 2px 4px 0px, rgba(26, 25, 24, 0.28) 0px 8px 22px -4px"
    hover-shadow: "rgba(0, 0, 0, 0.06) 0px 1px 0px 0px, rgba(26, 25, 24, 0.18) 0px 4px 10px 0px, rgba(26, 25, 24, 0.36) 0px 16px 32px -6px"
    hover-transform: "translateY(-2px)"
  button-ghost:
    background: "transparent"
    text-color: "#17170F"
    radius: "4px"
    height: "21px"
    hover-transform: "translateY(-2px)"
    hover-opacity: "0.94"
  button-secondary-white:
    background: "#FFFFFF"
    text-color: "#17170F"
    radius: "4px"
    height: "36px"
    padding: "0px 16px"
    shadow: "rgba(26, 25, 24, 0.05) 0px 1px 0px 0px, rgba(26, 25, 24, 0.04) 0px 1px 2px 0px, rgba(26, 25, 24, 0.08) 0px 4px 12px -2px"
  card-promise:
    background: "#FFFFFF"
    radius: "14px"
    padding: "28px"
    shadow: "rgba(26, 25, 24, 0.06) 0px 2px 3px 0px, rgba(26, 25, 24, 0.12) 0px 12px 22px -8px, rgba(26, 25, 24, 0.2) 0px 32px 60px -24px"
  pill-announcement:
    background: "linear-gradient(pastel multi-stop, observed)"
    text-color: "#17170F"
    radius: "9999px"
    border: "1px solid rgba(0,0,0,0.06)"
---
# Harbor Paper Console
Source: https://tokenharbor.ai/

## Overview
A warm-neutral, light-mode console aesthetic — paper-toned background, near-black ink type, and sharp 4px control geometry rather than soft rounding. This is a restrained editorial-minimalist system with a Swiss-adjacent grid discipline: single accent gestures (a pastel gradient pill, a ring of small colored provider glyphs) punctuate an otherwise monochrome, off-white canvas. The overall register reads as a technical/developer product built with unusual warmth — cream paper instead of clinical white, a heavy black wordmark and near-black solid buttons instead of a saturated brand hue.

## Composition
The first screen is centered and sparse: a small pill notification sits above a very large bold wordmark-style headline, a single-line subheadline, one prominent input-with-button control, and a row of five small circular provider glyphs, closing with a one-line auxiliary link. Vertical rhythm is generous and unhurried — large empty margins above and below the centered stack, no competing content in the fold. Scrolling into the middle of the page the density increases sharply: a small centered eyebrow label introduces a 2×2 card grid (rows of [2] [2], each card ~49% width, 16px gap) carrying icon + tag + heading + body copy — a deliberate move from hero whitespace to a tight, bordered information grid. The page terminates in a dark near-black footer band that inverts the palette entirely, a 5-column link grid (rows [1 wide-brand-column][4 link-columns], first column ~29% the rest ~13% each) with a bottom legal strip. The compositional choice is restraint-then-density: an almost-empty hero followed by a compact proof grid, rejecting the alternative of stacking multiple feature bands with equal whitespace — density is concentrated, not distributed.

## Colors
`#F7F6F2` (~73% of the page) is the dominant page background — a warm paper tone, not pure white — carrying the hero and the surrounding canvas around the card grid. `#FFFFFF` (~11%) is reserved for elevated surfaces: the navbar bar, the promise cards, and the secondary button fill — a whisper-lighter layer sitting on the paper. `#17170F` is the ink: near-black, used for the wordmark, body headings, and as the fill of every primary/dark button and the footer background (`#11120D` is a slightly cooler near-black variant for the footer specifically). Text secondary sits in mid-gray body copy. Accent color is heavily rationed: the announcement pill uses a soft multi-hue pastel wash (warm amber/orange, cool blue, pink) visible only in that single rounded element — nowhere else on the page does saturated color appear except the five small circular provider glyphs (a terracotta, a green, a blue, a violet-blue, and black), each a tiny brand-glyph accent no larger than 32px. Everything else — cards, buttons, footer — stays strictly monochrome black/white/paper, leaving over 90% of the page deliberately uncolored.

## Typography
Inter carries the entire system — no serif or mono accent appears anywhere in the evidence; the system is monotype by design, deriving hierarchy purely from size, weight, and tracking. Display-lg (64px/700, lh 1.12, ls -1.3px) is the hero wordmark scale, tight and heavy. Headline-md (40px/500, ls -0.9px) drives mid-page section headlines like the promise-grid title, looser tracking at a lighter weight than the display size despite being a "headline." Body-md (16px/400–500) is used for descriptive copy in cards and the subheadline. Label-md (17px/700, ls -0.2px) is bold and compact, used for short in-card tags. A small all-caps eyebrow label sits above section headlines at a reduced size with wide tracking, functioning as the "PROMISES"-style category marker — this is a distinct label role from body/heading despite sharing the Inter family.

## Layout
Content is capped at 1240px max-width, centered. The hero is a single-column centered stack with large section padding (80px rhythm) separating it from the page edges. The mid-page proof section is a 2-column CSS grid, 16px gap, 4 cards arranged in two even rows of 2 (49%/49% each) — a uniform card grid, not bento or masonry, every tile equal in footprint. Cards carry generous internal padding (28px) relative to their modest overall size, giving each tile visual weight despite plain content. The footer uses a 6-column-implied grid collapsing to 5 visible items: one wide brand column (~29%) plus four narrow link columns (~13% each) — an asymmetric grid, brand-heavy on the left, utilitarian link stacks on the right. Radii throughout are crisp and small (4px controls, 14px cards) — never pill-shaped except the hero announcement banner and the icon glyphs, reinforcing a squared-off, structural feel against a soft paper background.

## Components
- **Navbar** — edge-to-edge square bar, 68px tall, full 1920px viewport width (0px inset either side), 0px corner radius on all four corners (a flat static bar, not an inset or floating capsule), fill `#F7F6F2` matching the page background exactly so it reads as a seamless top strip rather than a distinct surface. Contains 13 items: wordmark + shield glyph at left, then a run of text nav links, a chevron-bearing dropdown label, utility social icons, a "Sign in" text link, and a solid CTA button (`#17170F` fill, `#FFFFFF` text, 4px radius, 36px height) at the far right.
- **Hero primary button** — the solid black rectangular control embedded in the hero's input row (observed fill `#17170F`, text `#FFFFFF`, radius 4px, height 48px, 0px padding, arrow glyph only, no label) is the primary CTA of the page: highest contrast, largest interactive element in the fold, paired directly under the headline as an input-adjacent submit control. On hover it lifts (`translateY(-2px)`) and dims slightly (`opacity 0.94`).
- **Nav CTA button** — a second, smaller instance of the same dark-fill family at 36px height with 16px horizontal padding and a three-layer resting shadow (`rgba(0,0,0,0.06) 0px 1px 0px 0px, rgba(26,25,24,0.14) 0px 2px 4px 0px, rgba(26,25,24,0.28) 0px 8px 22px -4px`), deepening further on hover — this is the navbar's "Try free"-style utility CTA, not the hero primary.
- **Ghost text button** — transparent fill, `#17170F` text, 4px radius, compact 21px height, used inline for the nav "Sign in" link; same hover lift/opacity behavior as the darker buttons.
- **Secondary white button** — `#FFFFFF` fill, `#17170F` text, 4px radius, 36px height, 16px padding, a soft one-tier shadow (`rgba(26,25,24,0.05) 0px 1px 0px 0px, rgba(26,25,24,0.04) 0px 1px 2px 0px, rgba(26,25,24,0.08) 0px 4px 12px -2px`) — used where a lighter-weight action sits beside the primary, e.g. a secondary hero or section action.
- **Announcement pill** — a rounded full-pill banner positioned above the hero headline, pastel multi-hue gradient fill (warm/cool/pink wash), small icon glyph at left, two-line stacked text (bold lead line + lighter supporting line), chevron at right — the only saturated color in the entire hero.
- **Provider glyph row** — five small circular badges (~32px) beneath the hero input, each a flat-colored circle (terracotta, green, blue, indigo, black) with a simple mark — a compact logo-strip substitute signaling model/provider variety, sitting directly under the primary CTA.
- **Promise card grid (×4)** — appears in the mid-page proof section, 2×2 uniform grid, 16px gap, each card 49% width. Surface: `#FFFFFF`, radius 14px, padding 28px, shadow `rgba(26,25,24,0.06) 0px 2px 3px 0px, rgba(26,25,24,0.12) 0px 12px 22px -8px, rgba(26,25,24,0.2) 0px 32px 60px -24px`. Anatomy top-to-bottom: a small square icon tile (rounded-square gray chip housing a line-icon), a short pill-shaped label/tag beneath it, a bold heading line, then a 2–3 line body paragraph in secondary-gray tone. No CTA inside these cards — purely informational.
- **Footer** — full-width band, `#11120D` background (a cooler near-black distinct from the ink token), inverted white/gray text. Contains a brand lockup with wordmark + one-line tagline at left, then four link-list columns (19 links total) with plain uppercase-free labels, social utility icons top-right of the brand block, and a bottom legal strip below the fold edge.

## Graphics & Effects
Three radial gradients are layered as small localized washes, each covering roughly 1.7% of the page area, positioned behind the hero announcement pill and immediate surrounding whitespace — not the full hero background: `radial-gradient(40% 60% at 20% 30%, rgba(255, 184, 86, 0.55), rgba(0, 0, 0, 0) 60%)` (warm amber, upper-left), `radial-gradient(50% 70% at 80% 40%, rgba(124, 167, 255, 0.5), rgba(0, 0, 0, 0) 60%)` (cool blue, upper-right), and `radial-gradient(45% 65% at 50% 80%, rgba(255, 138, 196, 0.45), rgba(0, 0, 0, 0) 60%)` (pink, lower-center) — together these form the soft pastel wash visible only inside/around the announcement pill, fading to transparent well before reaching the hero's edges. A thin diagonal light-sweep gradient, `linear-gradient(105deg, rgba(0, 0, 0, 0) 30%, rgba(255, 255, 255, 0.65) 50%, rgba(0, 0, 0, 0) 70%)`, covering under 1% of the page, functions as a shimmer/shine highlight likely animated across the pill or a button surface. Card elevation uses a consistent three-layer shadow language (tight near-shadow + mid blur + large soft ambient shadow), scaling in intensity from resting to hover states on interactive buttons. No image, video, or canvas media appears — the entire visual system is typographic and vector/icon-based on a flat paper surface.

## Motion
Interactive elements use short, snappy transitions: color/opacity shifts at 0.14s ease-out for immediate hover feedback, and a slower 0.42s cubic-bezier(0.65, 0, 0.18, 1) for transform-based movement (the button lift). A combined multi-property transition (`transform, opacity, box-shadow, background-color, color` at 0.14s–0.18s with cubic-bezier(0.22, 0.61, 0.36, 1) and ease-out mixes) governs button hover states, producing the small upward nudge plus shadow deepening seen on both dark buttons. Color-token transitions (0.15s cubic-bezier(0.4, 0, 0.2, 1)) cover borders, fills, and text color shifts uniformly across the system. Named keyframes (a fade-in-up entrance, a shake, a shimmer sweep, a shine pass, a glow, and a celebratory pop) point to a system that reserves playful, attention-getting motion for promotional/announcement moments while keeping standard controls fast and understated.

## Guardrails
- Never fill the hero background with the pastel radial gradients — they belong only to the announcement pill region, covering a few percent of the page; the hero canvas stays paper-toned `#F7F6F2`.
- Never round buttons or cards into full pills except the announcement banner and provider glyphs — the control language is 4px/14px crisp radii, not pill-shaped.
- Never substitute the navbar's glass/utility CTA values for the hero's primary button — the hero primary is the larger 48px dark rectangular control under the headline, observed, not the measured 36px nav CTA.
- Keep the footer strictly near-black (`#11120D`), never the paper tone — it is the one full palette inversion on the page.
- Do not distribute density evenly across sections — preserve the sparse hero / dense proof-grid contrast as the core rhythm.
- Keep accent color rationed to the pill, the five provider glyphs, and hover-shadow states only — no other element should carry saturated hue.
