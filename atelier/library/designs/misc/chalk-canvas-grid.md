---
version: "1"
name: "Chalk Canvas Grid"
description: "Light-mode-default workbench system on an off-white canvas, carrying a dense card grid of translucent dark-tinted tiles, pill-shaped controls, and a rationed cool-glass gradient accent."
colors:
  background: "#F7F7F6"
  surface: "#FFFFFF"
  surface-2: "#F1F1F0"
  surface-3: "#ECEBE7"
  text-primary: "#17181A"
  text-secondary: "#5C5B56"
  text-tertiary: "#6F6E68"
  accent-ring: "#3C81F5"
  accent-green: "#1F9D55"
  border: "#1C1C1C"
typography:
  display-lg:
    fontFamily: "Inter"
    fontSize: "40px"
    fontWeight: 500
    lineHeight: "1.1"
    letterSpacing: "-0.5px"
  headline-md:
    fontFamily: "Google Sans"
    fontSize: "38px"
    fontWeight: 500
    lineHeight: "1.08"
    letterSpacing: "-0.8px"
  body-md:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.55"
  body-sm:
    fontFamily: "Inter"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.55"
  label-mono:
    fontFamily: "Inter"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: "1.2"
spacing:
  base: "4px"
  scale: "4px, 6px, 8px, 12px, 16px"
  section-padding: "20px"
rounded:
  control: "999px"
  card: "28px"
  card-sm: "11px"
  tile: "20px"
  hairline: "2px"
components:
  button-utility:
    background: "rgba(23, 24, 26, 0.06)"
    text-color: "#3C3B37"
    radius: "999px"
    height: "32px"
    padding: "0px 14px"
    hover-background: "rgba(23, 24, 26, 0.1)"
    hover-text-color: "#17181A"
  button-primary:
    background: "#17181A"
    text-color: "#FFFFFF"
    radius: "999px"
    height: "40px"
    padding: "0px 20px"
  button-footer-link:
    background: "transparent"
    text-color: "#17181A"
    radius: "0px"
    height: "54px"
    padding: "16px 0px"
  button-tile-action:
    background: "#F1F1F1"
    text-color: "#17181A"
    radius: "11px"
    height: "46px"
    padding: "0px"
  card-media-tile:
    background: "rgba(23, 24, 26, 0.06)"
    radius: "28px"
    padding: "0px"
    border: "color(srgb 0.0901961 0.0941176 0.101961 / 0.12) 0px 0px 0px 1px"
  card-icon-tile:
    background: "rgba(23, 24, 26, 0.06)"
    radius: "28px"
    padding: "0px"
    border: "rgba(23, 24, 26, 0.12) 0px 0px 0px 1px inset"
  card-flat-media:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  navbar-glass-panel:
    background: "transparent"
    backdrop-filter: "blur(1.5px)"
    radius: "0px"
    padding: "0px"
---
# Chalk Canvas Grid
Source: https://bencho.dev/

## Overview
This is a light-mode-default, workbench-flavored system: a near-white canvas (`#F7F7F6`) hosting a dense, uniform grid of soft dark-tinted glass tiles. The aesthetic sits between minimalism and a component-library catalog look — Swiss-grid discipline (strict column rhythm, generous gutters) crossed with glassmorphic card fills rendered in translucent black rather than the usual frosted-white. Color is almost entirely rationed to structure (ink grays, off-white surfaces) with a single cool mesh-gradient wash and one green accent held in reserve. Typography pairs a geometric sans display face with a workhorse UI sans for body copy, keeping the whole page feeling like a technical product catalog rather than a marketing page.

## Composition
The first screen is centered and sparse: a pill-shaped member-count badge, a short display headline, a one-line body sentence with two inline link emphases, and one solid pill CTA — all stacked and center-aligned against open canvas space. Immediately below, a horizontal scrolling rail of small pill filter-chips introduces the content system. The page then drops into a dense, edge-to-edge card grid that runs for the remainder of the page — this is where the real design mass lives: large square media tiles, smaller icon-plus-text tiles, and sponsored/flat media cards packed tightly with ~uniform small gutters. The deliberate choice is restraint-then-density: a quiet, almost empty hero gives way abruptly to a saturated grid, rejecting the alternative of scattering content and color evenly down the page. This creates a strong top-of-page breathing room followed by a catalog-like, high-information lower system — appropriate for a component/asset library rather than a narrative landing page.

## Colors
The canvas is off-white (`--bg: #FFFFFF` / `--canvas-bg: #F7F7F6`), confirmed by the pixel field's overwhelming white/near-white dominance (~57% pure white, ~39% `#F0F0F0`-range). Card surfaces are not solid white but a translucent dark wash, `rgba(23, 24, 26, 0.06)`, over the canvas — this is the system's signature "ink-glass" tile, distinct from typical white glassmorphism. Text ink is near-black `#17181A` for headings and primary labels, stepping down to `#5C5B56` for secondary/body copy and `#6F6E68`/`#3C3B37` for tertiary and chip labels. Borders are hairline near-black at low opacity (`rgba(23,24,26,0.12)`), giving tiles a barely-there edge rather than a hard line. Color accent is tightly rationed: a cool blue-violet mesh gradient (`rgb(207,227,255)` ↔ `rgb(226,214,255)`) appears only inside individual media tiles, never as a page background, and a single green (`#1F9D55`) exists as a declared brand/status token, used sparingly. The vast remainder of the UI — buttons, chips, borders, panels — is achromatic, letting the rare gradient tile and occasional saturated screenshot content (oranges, blues inside cards) pop against the gray-on-white field.

## Typography
Headlines use Inter at 40px/500 with tight -0.5px tracking for the display role, alongside a secondary headline face, Google Sans at 38px/500 with -0.8px tracking, for select large headings — the two display faces are near-interchangeable in size and weight, both compressed and confident, read as geometric/grotesque pairing rather than contrast pairing. Body copy runs Inter 16px/400 at 1.55 line-height for lead paragraphs, dropping to a dense Inter 14px/400 for the char-weighted bulk of in-card body text, colored `#5C5B56` with `#17181A` reserved for secondary emphasis spans. No serif or monospace accent appears; the system is entirely sans-driven, with hierarchy built from size and weight steps (40/38 → 16 → 14) rather than family changes.

## Layout
The page sits on a centered column with a narrow content measure (max-width 620px) for the hero's headline and copy block, flanked by full-bleed canvas. Below the hero, the layout shifts to a wide multi-column card grid with normal/small gutters, items placed edge-to-edge in a masonry-adjacent bento arrangement: large square media tiles sit beside a half-width stack, with a third sponsored-style tile completing the row — row composition reads as [1 large square] [1 large square] [1 large square] at the widest point, each roughly equal-width thirds, then the grid continues downward mixing wider media tiles with smaller icon+text tiles in irregular but rhythmic spans (a bento pattern, not uniform cards). Spacing increments are tight and consistent (16/8/12/6/4/2px), producing a dense, catalog-grade information density rather than airy marketing whitespace. The horizontal filter-chip row above the grid behaves as a scrolling rail, auto-fit with no wrap.

## Components
- **Navbar**: edge-to-edge square bar, full viewport width with ~20px left/right visual inset, 0px radius on all four corners (sharp rectangular topology, not a capsule or inset pill), transparent background with `backdrop-filter: blur(1.5px)` — a barely-frosted glass panel rather than opaque. Contains one primary nav item cluster (text links) plus a search affordance, an icon-only avatar/logo button, and a trailing primary CTA pill (`#17181A` fill, `#FFFFFF` text, 999px radius, 40px height) paired with a small chevron/secondary disclosure control beside it.
- **Button — utility pill**: `rgba(23, 24, 26, 0.06)` fill, `#3C3B37` text, 999px radius (full pill), 32px height, 0/14px padding; hover darkens to `rgba(23, 24, 26, 0.1)` fill with `#17181A` text. Used for the horizontal filter-chip rail beneath the hero.
- **Button — hero primary CTA**: solid `#17181A` fill, `#FFFFFF` text, 999px radius (full pill), 40px height, 0/20px padding. This is the single most emphasized control on the first screen, centered beneath the hero's body copy — the dark high-contrast pill, not the glass utility chips, is the primary.
- **Button — footer link**: transparent background, `#17181A` text, 0px radius (sharp, no pill), 54px height, 16px/0 padding — functions as a full-row tappable link rather than a bounded button.
- **Button — tile action**: `#F1F1F1` fill, `#17181A` text, 11px radius (slightly-rounded, not pill), 46px height — a compact rounded-rectangle control seen inside card footers near the page end.
- **Card family — media tile (large)**: appears ×15 in the main grid as the dominant tile type; `rgba(23, 24, 26, 0.06)` fill, 28px radius (rounded, generous), 0px padding, hairline border `color(srgb 0.09 0.09 0.10 / 0.12) 0px 0px 0px 1px`. Anatomy top-to-bottom: full-bleed media/illustration filling most of the tile (dotted sphere renders, stacked gradient cards, app-screenshot composites), a small pill eyebrow label pinned to the top-left corner ("New"/"Sponsored"-style badge in dark-on-light or light-on-dark), and an inset label chip near the bottom edge of the media identifying the asset.
- **Card family — icon + body tile**: appears ×14, same `rgba(23, 24, 26, 0.06)` fill and 28px radius but inset shadow variant (`rgba(23, 24, 26, 0.12) 0px 0px 0px 1px inset`), 0px padding. Anatomy: a small icon or logo mark top-left, inverted-translucent chrome, short heading line, 1-2 lines of secondary body text in `#5C5B56` beneath.
- **Card family — flat media card**: appears ×3, fully transparent background, 0px radius (sharp edge, no card chrome), 0px padding. Anatomy: media fills the top majority, a short caption/body-text line directly beneath with no container framing — reads as an uncontained editorial tile against the canvas.
- **Footer**: transparent background, a dense multi-column block of roughly 28 plain-text links with no card chrome or dividers — a flat sitemap-style link field.

## Graphics & Effects
Card-level gradients are the only color events on the page and are strictly tile-scoped, each covering roughly 3.6% of total page area — never the full viewport. A cool mesh-style linear gradient, `linear-gradient(125deg, rgb(207,227,255) 0%, rgb(226,214,255) 25%, rgb(207,227,255) 50%, rgb(226,214,255) 75%, rgb(207,227,255) 100%)`, fills one specific media tile. A soft diagonal light-sweep scrim, `linear-gradient(115deg, rgba(0,0,0,0) 20%, rgba(255,255,255,0) 30%, rgba(230,234,240,0.55) 42%, rgba(255,255,255,0.85) 48%, rgba(210,216,226,0.5) 54%, rgba(0,0,0,0) 68%)`, washes diagonally across another tile's media as a glare/highlight effect rather than a backdrop. Two radial gradients — `radial-gradient(circle, rgba(255,255,255,0.28), rgba(0,0,0,0) 50%)` and `radial-gradient(120% 120%, rgba(255,255,255,0.7), rgba(255,255,255,0.08) 60%)` — act as soft interior highlights/vignettes inside individual tiles, not page backdrops. Two `canvas` elements render live interactive content inside grid tiles (likely a particle/dot-matrix sphere and a cursor-driven micro-interaction demo); substitute static gradient or dot-pattern stills when rebuilding. Shadow use is minimal and structural: hairline 1px solid or inset borders define tile edges rather than drop shadows; backdrop blurs range from a barely-there `blur(1.5px)` on the navbar glass to a stronger `blur(14px)` likely used on an overlay or popover surface.

## Motion
Interaction transitions are fast and tightly tuned: `opacity, transform, background, color` properties animate over 0.16s–0.24s windows, mixing standard `ease` with a springy `cubic-bezier(0.28, 1.3, 0.36, 1)` overshoot curve for transform/opacity pairs — giving hover and press states a light bounce rather than a flat fade. A distinct `cubic-bezier(0.3, 1.12, 0.4, 1)` governs a 0.26s scale transition, reserved for tile press/activate feedback. Named keyframe sets (`enter`, `exit`, `drift`, `lock-set`, `tools-in`, `undo-drain`) indicate purpose-built entrance/exit choreography per interactive demo tile rather than one global animation; CSS scroll-driven animations are present, implying some tiles or the filter rail animate state as they cross the viewport rather than purely on hover.

## Guardrails
- Do not paint the hero or page background with the cool mesh or glare gradients — they belong only inside individual grid tiles, each under 4% of page area.
- Do not render card fills as white frosted glass; the signature glass tint is translucent **black** (`rgba(23,24,26,0.06–0.12)`) over a white canvas, not the reverse.
- Do not collapse the four button variants into one pill shape — utility chips (999px/32px), primary CTA (999px/40px), footer links (0px/54px), and tile actions (11px/46px) are visually distinct families.
- Do not give the navbar soft outer rounding or inset margins beyond ~20px; it is a sharp-cornered, nearly edge-to-edge bar with only a faint glass blur, not a floating capsule.
- Do not scatter color evenly down the page; keep saturation concentrated in grid-tile media and hold the hero and chrome achromatic.
