---
version: "1"
name: "Amber Archive Dark"
description: "Dark-mode-default data-explorer system: near-black surfaces, an amber pill accent rationed to CTAs and the eyebrow icon, violet used for taxonomy chips, and dense uniform card grid at high count."
colors:
  background: "#0A0A0A"
  surface: "#141414"
  surface-card: "#181818"
  text-primary: "#FFFFFF"
  text-secondary: "#A1A1A1"
  text-tertiary: "#E2E8F0"
  accent-amber: "#FE9A00"
  accent-amber-alt: "#FFB900"
  accent-violet: "#C27AFF"
  accent-violet-strong: "#AF46FF"
  accent-emerald: "#00D492"
typography:
  headline-md:
    fontFamily: "-apple-system"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: "1.25"
    letterSpacing: "-0.7px"
  body-md:
    fontFamily: "-apple-system"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.63"
  label-md:
    fontFamily: "-apple-system"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: "1.25"
    letterSpacing: "-0.5px"
  body-emphasis:
    fontFamily: "-apple-system"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: "1.4"
  accent-serif:
    fontFamily: "-apple-system italic"
    fontSize: "16px"
    fontWeight: 400
    fontStyle: "italic"
spacing:
  base: "4px"
  tight: "6px"
  gap-sm: "8px"
  gap-md: "16px"
  gap-lg: "20px"
  section-padding: "10px"
rounded:
  control: "8px"
  card: "12px"
  panel: "16px"
  large: "32px"
  xlarge: "40px"
  pill: "9999px"
components:
  button-hero-primary:
    background: "#FE9A00"
    text-color: "#000000"
    radius: "9999px"
    height: "44px"
    note: "observed near-solid amber pill; treated as measured via navbar CTA token"
  button-nav-cta:
    background: "#FE9A00"
    text-color: "#000000"
    radius: "9999px"
    height: "44px"
    padding: "10px 16px"
    shadow: "oklab(0.769 0.0640531 0.176752 / 0.1) 0px 4px 6px -1px, oklab(0.769 0.0640531 0.176752 / 0.1) 0px 2px 4px -2px"
  button-tag-violet:
    background: "rgba(167, 69, 255, 0.1)"
    text-color: "#DAB2FF"
    radius: "9999px"
    height: "25px"
    padding: "4px 12px"
    border: "1px solid oklab(0.627 0.147802 -0.219953 / 0.2)"
    hover-background: "rgba(175, 70, 255, 0.2)"
  button-tag-amber-outline:
    background: "rgba(245, 147, 0, 0.1)"
    text-color: "#FFB900"
    radius: "9999px"
    height: "34px"
    padding: "8px 14px"
    border: "1px solid oklab(0.769 0.0640531 0.176752 / 0.3)"
    hover-background: "rgba(255, 155, 0, 0.2)"
    hover-text: "#FFD230"
  button-glass:
    background: "rgba(0, 0, 0, 0.6)"
    backdrop-filter: "blur(12px)"
    text-color: "#E2E8F0"
    radius: "9999px"
    height: "44px"
    padding: "10px"
    border: "1px solid oklab(0.999994 0.0000455678 0.0000200868 / 0.1)"
  card-breed:
    background: "#181818"
    radius: "12px"
    padding: "0px"
    shadow: "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px"
  card-stat:
    background: "transparent"
    radius: "0px"
    padding: "0px"
---
# Amber Archive Dark
Source: https://atlascanino.cl

## Overview
This is a dark-mode-default database/explorer aesthetic — closer to a Linear-style app shell than a marketing site. The system rests on near-black surfaces (`#0A0A0A` bar, `#141414` panels, `#181818` cards) with a single rationed amber accent (`#FE9A00`/`#FFB900`) carrying every call-to-action pill, and a secondary violet (`#C27AFF`/`#AF46FF`) reserved strictly for taxonomy/category chips. Photographic dog portraits sit inside uniform dark cards with a bottom scrim, giving the grid a quiet, editorial-archive tone rather than a playful one. Typography is system-sans (-apple-system) at every weight, no serif or display face — hierarchy is built from size and weight, not font-pairing.

## Composition
The first screen stacks: an edge-to-edge sticky navbar, a centered pill-shaped segmented nav/tab bar beneath it, a hero band with an eyebrow pill + headline + stat cluster, then an immediate filter panel with six labeled dropdowns, and finally the card grid begins before the fold ends. This is a utility-first composition — filters and data density are prioritized over a persuasive marketing hero, rejecting the alternative of a large illustrative/gradient hero; the actual "hero" is compressed to roughly 220px before the interface work begins. Below the fold the page is one long, unbroken rhythm of the same 3-column card grid repeated for the full 122-item catalog, with no interrupting banners, testimonials, or pricing bands — density and repetition are the design statement. The footer is minimal and terse, closing the page as quietly as it opened.

## Colors
Background is near-black across ~92% of pixels (`#000000` ~47%, `#181818` ~45%), confirming a true dark-mode-default rather than a gradient hero — color is almost entirely rationed to small UI accents. Amber (`#FE9A00`, `#FFB900`, `#FFD230`) is the sole call-to-action/brand color: nav CTA, per-card "Ver Detalles" pills, the eyebrow badge icon, and the stat numeral for the primary metric. Violet (`#C27AFF` text ink, `#AF46FF` border, `rgba(167,69,255,...)` fills) is scoped exclusively to archetype/taxonomy chips atop each card — never used for actions. Emerald (`#00D492`/`#5EE9B5`) appears only as a small stat numeral and a resilience-indicator dot. Text runs `#FFFFFF` (headings) → `#E2E8F0`/`#CAD5E2` (secondary ink) → `#A1A1A1` (muted metadata), a three-step neutral ramp with no additional grays introduced. Card group-label badges stay flat white-on-dark with no color at all — deliberately left neutral so amber and violet keep their exclusive roles.

## Typography
Single family throughout: -apple-system. Headline role sits at 30px/700, line-height 1.25, tracked tight at -0.7px, used once per section for the page's main descriptive line. Card titles/labels use 20px/700 at -0.5px tracking (label-md), matched by an italic accent-serif style applied to the quoted epithet beneath each breed name (an italic sentence-case phrase, one per card, roughly the same size as the body copy beneath it — not oversized). Body copy runs 14px/400 at 1.63 line-height for descriptions and stat labels. Numeral/stat emphasis (grid counts, resilience/independence values) borrows the 20px/700 weight to read as a secondary display size rather than true body text.

## Layout
Content is capped at a 1280px max-width, centered. The dominant pattern is a uniform card grid: 3 columns, 20px gap, repeated to 122 items — strictly uniform-width cards, no bento spans or masonry variation; every row is [1,1,1] all the way down. A secondary grid governs the filter panel: 3 columns × 2 rows of dropdown controls (6 items, 16px gap), each row holding three equal-width selectors. Spacing is tight and utilitarian: 4–20px increments, no generous 96px section padding — this is a dense, app-like density rather than a spacious marketing rhythm. Corner radii scale by role: 8–12px on cards and controls, 9999px pill on every button/badge, giving one consistent "rounded interactive, moderately-rounded container" language.

## Components
- **Navbar** — edge-to-edge, square-cornered bar (0px radius all four corners), 143px tall, full 1920px viewport width (0px inset either side), sticky, fill `#0A0A0A` with `backdrop-filter: blur(24px)`; holds a logo mark + wordmark at left, a search input at right, and 7 nav items total, one of which (the leftmost/active tab) is rendered as the amber pill CTA (`#FE9A00` fill, `#000000` text, 9999px radius, 44px height) with the others as plain glass/text tabs in a shared pill-shaped segmented control beneath the top bar.
- **Hero eyebrow + stat cluster** — appears once, top of page below nav: a small amber-outlined pill badge (icon + label) sits above the 30px/700 headline and 14px body line; to its right a 3-up inline stat row of oversized numerals (amber, violet, emerald in sequence) each with a small caption label beneath.
- **Filter panel** — one card-like band directly under the hero, fill `#141414`-family surface, containing a header row (icon + label + live count + an "Entender Filtros" amber-outline button + a sort dropdown) followed by a 3×2 grid of labeled dropdown selects, each an amber all-caps micro-label over a dark rounded control.
- **Breed card (×122, the core repeating unit)** — arranged 3-per-row across the full grid; each card: dark `#181818` surface, ~12px radius, no visible border; top ~40% is a photographic portrait with a bottom-up scrim (`linear-gradient(to top, rgb(20,20,20) 0%, oklab(...)/0.3 50%, transparent 100%)`) for legibility, a small group-label badge (flat white-on-black, all-caps) top-left, and two circular icon buttons (swap/compare, bookmark) top-right in glass-dark chips; below the image: bold white title, one italic quoted epithet line, one or two violet taxonomy chips, a 2–3 line muted description, a row of 3–4 lowercase hashtag chips, a 2×2 mini-stat block (resilience/sociability/independence/threshold, each with a colored dot icon + label + value), and a full-width amber pill "Ver Detalles" button anchoring the bottom.
- **Tag/chip family** — two distinct variants used only inside cards: violet taxonomy chips (`rgba(167,69,255,0.1)` fill, `#DAB2FF` text, 9999px radius, 25px height, 1px violet-tinted border) for archetype labels, and flat neutral hashtag chips (dark fill, muted text, small pill) for trait keywords — never intermixed.
- **Footer** — flat `#141414` band, no visible link list (0 links measured), just a small logo/label cluster and a one-line descriptive caption, quiet close to the page with no additional CTA.

## Graphics & Effects
No hero gradient or mesh covers the page — the only gradient present is a small bottom-up scrim applied per-card over each portrait image, `linear-gradient(to top, rgb(20, 20, 20) 0%, oklab(0.191251 -7.45058e-9 0 / 0.3) 50%, rgba(0, 0, 0, 0) 100%)`, covering roughly the lower half of each card's image region for text legibility — it is a media treatment, not a page background. Glass is used narrowly: navbar blur (`blur(24px)` over `#0A0A0A`) and the circular icon buttons on each card (`rgba(0,0,0,0.6)` + `blur(12px)`), both true frosted-glass, never flattened to solid black. Elevation is expressed through soft shadow stacks rather than borders: cards carry `rgba(0,0,0,0.1) 0px 20px 25px -5px, rgba(0,0,0,0.1) 0px 8px 10px -6px`; the amber nav CTA carries its own tinted shadow `oklab(0.769 0.0640531 0.176752/0.1) 0px 4px 6px -1px, ... 0px 2px 4px -2px`. No visible noise/grain or star-field texture — surfaces read flat and clean.

## Motion
Interaction motion is fast and utilitarian: color/background/border transitions run at `0.15s cubic-bezier(0.4, 0, 0.2, 1)` for hover states on chips and buttons, with a slightly slower `0.3s` variant for larger state changes. Transform-driven motion (translate/scale/rotate) uses `0.5s cubic-bezier(0.4, 0, 0.2, 1)` — reserved for card entrance, paired with a `cardFadeIn` keyframe that likely staggers the grid into view. Nothing overshoots or springs; everything decelerates smoothly, matching the system's restrained, data-tool character.

## Guardrails
- Never spread the amber accent beyond CTAs/eyebrow/stat numerals — it must stay a rationed accent, not a background wash.
- Never recolor the violet taxonomy chips into buttons or apply them to actions; violet is a classification color only.
- Do not turn the navbar into an inset, centered, or rounded bar — it is edge-to-edge, full-width, square-cornered (0px all corners).
- Keep the card grid strictly uniform 3-column (no bento spans, no masonry height variance) — row composition is always [1,1,1].
- Do not flatten the glass icon buttons or navbar blur into solid fills — preserve `backdrop-filter: blur()` with translucent rgba fills.
- Keep body/display type to a single system-sans family; the only stylistic deviation is the italic epithet line, never a separate serif family.
