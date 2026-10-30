---
version: "1"
name: "Rationed Aurora Light"
description: "White-dominant editorial system with a violet brand core, a rationed multi-hue aurora reserved for hero and section-break moments, and a low-weight variable sans carried at large optical sizes."
colors:
  background: "#FFFFFF"
  surface: "#F8FAFD"
  surface-alt: "#E5EDF5"
  text-primary: "#000000"
  text-secondary: "#64748D"
  text-tertiary: "#50617A"
  accent: "#533AFD"
  accent-hover: "#4C37E9"
  accent-deep: "#2C2484"
  border: "#E5EDF5"
  border-strong: "#B9B9F9"
  success: "#15BE53"
typography:
  display-lg:
    fontFamily: "sohne-var"
    fontSize: "48px"
    fontWeight: 300
    lineHeight: "1.15"
    letterSpacing: "-1px"
  headline-md:
    fontFamily: "sohne-var"
    fontSize: "32px"
    fontWeight: 300
    lineHeight: "1.1"
    letterSpacing: "-0.6px"
  body-md:
    fontFamily: "sohne-var"
    fontSize: "32px"
    fontWeight: 300
    lineHeight: "1.1"
  label-md:
    fontFamily: "sohne-var"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.4"
  body-lg:
    fontFamily: "sohne-var"
    fontSize: "32px"
    fontWeight: 300
    lineHeight: "1.1"
  accent-mono:
    fontFamily: "SourceCodePro"
    fontWeight: 400
    role: "numerals, tokens, code-adjacent labels"
spacing:
  base: "8px"
  micro: "4px"
  tight: "6px"
  gap: "16px"
  card-gap: "12px"
  hairline: "2px"
  content-max-width: "40px"
rounded:
  control: "4px"
  card-sm: "5px"
  card: "6px"
  card-lg: "8px"
  panel: "16px"
  pill: "9999px"
components:
  button-primary:
    background: "#533AFD"
    text-color: "#FFFFFF"
    radius: "4px"
    height: "48px"
    padding: "15.5px 24px 16.5px"
    hover-background: "#4C37E9"
  button-nav-cta:
    background: "#533AFD"
    text-color: "#FFFFFF"
    radius: "4px"
    height: "40px"
    padding: "11.5px 20px 12.5px"
    hover-background: "#4032C8"
  button-secondary-outline:
    background: "#FFFFFF"
    text-color: "#533AFD"
    radius: "4px"
    height: "40px"
    border: "1px solid #E5EDF5"
  button-google-alt:
    background: "#FFFFFF"
    text-color: "#533AFD"
    radius: "4px"
    height: "48px"
    border: "1px solid #E5EDF5"
  button-inline-tag-green:
    background: "#00D66F"
    text-color: "#000000"
    radius: "4px"
    height: "24px"
    padding: "0px"
  button-inline-tag-neutral:
    background: "#000000"
    text-color: "#000000"
    radius: "4px"
    height: "24px"
    padding: "0px"
  card-media-bento:
    background: "transparent"
    radius: "0px"
    padding: "0px"
    anatomy: "media-top-bleed + heading + body-text"
  card-panel-app-mock:
    background: "#FFFFFF"
    radius: "0px"
    padding: "0px 16px"
    anatomy: "full-width-panel + media-top + heading + expandable + body-text + 2-tile-layout"
  card-stat-numeral:
    background: "transparent"
    radius: "8px"
    padding: "40px 0px"
    anatomy: "oversized-numeral + caption-below"
  card-media-banner:
    background: "linear-gradient(image + aurora wash)"
    radius: "0px"
    padding: "0px"
    anatomy: "dark-photo-bg + headline + button + logo-mark"
---
# Rationed Aurora Light
Source: https://stripe.com/

## Overview
This is a white-dominant, editorial-grade enterprise system: a Swiss-adjacent grid of hairline dividers and left-aligned type sits on top of a near-total white/near-white field (>85% of rendered pixels are white or off-white), with a single saturated violet (`#533AFD`) reserved for the brand's interactive layer and a five-hue aurora gradient rationed to a handful of decorative zones. Typography carries the whole first impression: a light-weight (300) variable sans set at large sizes with tight negative tracking does the work other systems give to imagery. The result reads as restrained-corporate-meets-futurist — flat, ungimmicked panels and product screenshots, punctuated by soft radial-gradient "wing" and "starburst" graphics that are the system's only concession to spectacle.

## Composition
The first screen is text-led: a small label-and-metric line sits above a four-line headline built from two ink colors (black, then a lighter slate-blue clause), followed by a tight CTA pair, then a bare logo row — all left-aligned inside roughly the left half of the viewport, while a large diagonal aurora ribbon occupies the right ~40–50% of the hero as a bleed graphic, never a full-bleed background. Below the fold, the rhythm alternates: a dense feature-card band (mixed bento sizing), a full-bleed dark banner-with-photo, a centered stat band with a radiating line-burst graphic, an editorial two-column enterprise callout with a photographic case-study panel, then a link-dense footer on an off-white surface. This is a deliberate choice to keep 90% of the page pure white/graph-paper and let color exist only as brief punctuation — the rejected alternative is a saturated gradient-hero-throughout (common in AI/dev-tool marketing) which this system explicitly avoids in favor of density and legibility.

## Colors
`#FFFFFF` is the page background and dominates the pixel field at roughly 54–63%; `#F8FAFD` and `#E5EDF5` are the next-largest fields (surface and hairline-border tokens respectively), giving the page its "graph paper" off-white undertone rather than pure white throughout. The violet `#533AFD` (`--hds-color-accent-border-solid`) is the singular accent — it appears only on solid buttons, link-colored headline clauses, and small icon strokes, never as a fill of any large area; its total declared footprint is near 0.2%, confirming strict rationing. `#061B31`/`#0D253D`-family near-blacks are reserved for body ink and dark banner surfaces, `#64748D`/`#50617A` for secondary/muted text. `#15BE53`/`#00D66F` greens and a ruby (`#EA2261`) exist only as isolated micro-accents (small tags, icon fills) — never backgrounds. The five aurora radial-gradients (violet→pink→amber→cream family) are the only saturated color permitted at scale, and they are explicitly confined to hero corner-wash and section-break bands, never washing an entire section.

## Typography
A single low-weight variable sans (sohne-var) carries every text role from 16px labels to 48px display — hierarchy comes from size and negative tracking, not weight variation (weight stays 300 for anything above label size, 400 for body/label). Display headline is 48px/300, line-height 1.15, tracking -1px; a secondary headline register runs 32px/300 at tighter 1.1 line-height and -0.6px tracking, and this same 32px/300 size doubles as an oversized body-style register for lead paragraphs — the system uses "big light type" as its primary rhetorical device rather than italics or serif interruption. Labels and running body copy drop to 16px/400 at 1.4–1.5 line-height, in near-black `#000000` for primary reading text and `#64748D` for secondary/caption text. A monospace family (SourceCodePro) is reserved for numeral-driven and code-adjacent moments — the stat band's oversized figures and any tabular/technical labels — functioning as this system's signature accent face in place of a serif.

## Layout
Content is capped at a 1266px max-width, centered, with hairline (`#E5EDF5`) rules dividing horizontal bands full-bleed edge to edge. The primary feature area uses a 12-column grid with 16px gaps; one measured instance runs 4 equal-ish items at ~23% width each (a stat row), another runs 2 unequal items at 41%/49% (an asymmetric two-up feature pair) — confirming this system freely breaks a uniform grid into deliberate asymmetric spans rather than staying strictly uniform. The mid-page feature bands themselves compose as rows of **[1 wide + 1 wide]** (two large panels, roughly half-width each) followed by **[3 narrow]** (a triptych of smaller cards) — a bento rhythm, not masonry, since row heights stay aligned within each row even as column count changes row to row. A separate three-item panel family (the app-mockup band) runs full-width single-column stacked rows **[100 | 100 | 100]**, each row a full-bleed panel containing its own two-tile internal layout. Spacing throughout resolves to small, exact increments (4/6/8/12/16px) rather than generous whitespace — this is a dense, information-forward layout despite its white canvas.

## Components
- **Navbar**: 76px tall, transparent/static background, 13 total items (logo + grouped dropdown nav + Sign in + CTA). Primary CTA is solid `#533AFD` fill, white text, 4px radius, 40px height, padding `11.5px 20px 12.5px`, hover → `#4032C8`. A secondary outline button (Sign in) sits immediately left of it, white fill with a hairline `#E5EDF5` border, same 40px height. Logo is a wordmark, static, no icon lockup.
- **Hero primary button**: an observed near-white/violet-filled solid pill-ish rectangle under the headline — this is the deep-violet `#533AFD` fill with white text, ~4px corners (sharp-to-slightly-rounded, not pill), 48px height, padding `15.5px 24px 16.5px`, hover → `#4C37E9`. This is the single most emphasized control on the first screen.
- **Hero secondary button**: a white-filled outline button beside the primary, hairline border, same family of icon-plus-label composition, lower visual weight than the primary — an alternate sign-up path, not a utility action.
- **Logo strip**: a single row of ~7 flat wordmark/icon logos, no cards, no borders, sitting directly below the hero on plain white, functioning as a trust band.
- **Bento feature grid (mid-page)**: rows compose as **[2 wide]** then **[3 narrow]**. Surfaces are transparent/borderless, 0px radius, 0px padding — cards are pure content compositions, not chrome. Anatomy top-to-bottom: heading text at top-left of each cell, then a large media element (device mockup, checkout screenshot, or abstract particle/wave graphic) bleeding to the card edges below the heading; no body copy beyond the heading in most cells, no CTA chip. Some cells carry small floating UI-chip overlays (an "expand" icon button, small in-graphic data cards).
- **App-mockup / two-tile panel family**: 3 full-width stacked rows (100% each), white `#FFFFFF` fill, 0px radius, `0px 16px` padding. Anatomy: heading top-left, an expandable/toggle affordance, body text, and an embedded two-tile composition below (e.g., a phone-payment mock beside a browser-checkout mock) — these are the richest cards in the system, combining real product-UI screenshots with copy.
- **Dark photo banner**: one full-bleed dark panel with a photographic/stage image, an aurora-hued wave graphic layered behind the subject, white heading text top-left, a white solid button (`#FFFFFF` fill, dark text, small radius) below it, and a small wordmark lockup bottom-right.
- **Stat/numeral row**: 4 items in a 12-column grid at ~23% width each, no card chrome (radius 8px, padding 40px 0px, transparent fill) — each cell is an oversized monospace-leaning numeral in dark ink over a small muted caption line beneath, center-aligned as a group.
- **Enterprise editorial band**: 2-column asymmetric grid (41%/49%), left column carries eyebrow-style two-tone heading (black clause + `#64748D` clause), a solid violet CTA button (same 4px-radius family, `#533AFD`/white), and a small logo-plus-caption case-study strip with a text link; right column carries supporting paragraph copy. Below it, a full-bleed aerial photograph closes the band.
- **Footer**: `#F8FAFD` surface, 85 links total, organized into 4+ labeled columns (unstyled text-link lists, no dividers between links), a locale-selector control with globe icon, and a small dark geometric mark bottom-right.

## Graphics & Effects
Five radial-gradient washes are measured, each occupying roughly 6.6% of total page area and each confined to its own section, never stretching full-viewport: e.g. `radial-gradient(1653px 1092px at 50% calc(100% + 28px), rgb(72, 111, 253) 0px, rgb(127, 129, 243) 9.84%, rgb(196, 137, 255) 20.83%, rgb(218, 192, 255) 34.13%, rgb(234, 220, 255) 44.86%, rgb(249, 246, 255) 58.59%, rgb(248, 250, 253) 100%)` renders as a bottom-anchored soft glow beneath a stat/graphic band, fading up into the surrounding `#F8FAFD` surface — it is a section-floor wash, not a hero backdrop. The hero's diagonal multi-hue ribbon (blue→orange→pink) is a large illustrated/rendered graphic occupying the right half of the first screen only; the remaining hero canvas stays white. Live canvas elements (5 measured) drive the animated particle/line-burst and wave graphics seen mid-page — treat these as static gradient-blob or line-radiation image stand-ins when rebuilding. Card and panel shadows are soft and receded: `rgba(50, 50, 93, 0.25) 0px 30px 45px -30px, rgba(0, 0, 0, 0.1) 0px 18px 36px -18px` for elevated tiles, a lighter `rgba(50, 50, 93, 0.12) 0px 13.5px 27px -12.4px, rgba(0, 0, 0, 0.05) 0px 8.1px 16.2px -8.1px` for secondary elevation. A `blur(12px)` backdrop-filter is available for glass-style floating chips (the small expand-icon overlays on media cards).

## Motion
State transitions are uniform and fast across color, fill, stroke, and transform properties: `0.3s cubic-bezier(0.25, 1, 0.5, 1)` — an ease-out-dominant curve giving hover and focus changes a quick, confident settle rather than a bounce. This single curve governs button hover-fills, link color shifts, and icon-stroke color changes; there is no evidence of spring/overshoot or scroll-linked parallax in the measured transitions, so motion should stay purely state-driven and brief.

## Guardrails
- Never fill more than a small corner/edge region with the aurora gradient — it is a section accent, not a hero backdrop; the hero stays majority white.
- Keep `#533AFD` reserved for interactive elements (buttons, links, icon strokes) only — never use it as a large surface fill.
- Do not round buttons or cards past 8px; this system's controls are sharp-to-slightly-rounded (4–8px), not pill-shaped except where explicitly noted as 9999px utility.
- Do not add body-copy-heavy card interiors to the bento media cells — they are heading + bleeding media only, deliberately sparse.
- Keep all transitions at the measured `0.3s cubic-bezier(0.25, 1, 0.5, 1)` — no bounce/spring easing belongs in this system.
- Preserve the light-weight (300) display type as the primary hierarchy device; do not substitute bold weights for emphasis.
