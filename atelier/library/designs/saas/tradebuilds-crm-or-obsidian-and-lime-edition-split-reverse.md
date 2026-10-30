---
version: "1"
name: "Voltage Grid"
description: "Near-black brutalist-technical system with a rationed acid-lime accent, oversized condensed display type, and a persistent hairline grid texture."
colors:
  background: "#0C0C0C"
  surface: "#000000"
  text-primary: "#FFFFFF"
  text-secondary: "#D8D8D8"
  accent: "#CCFF00"
  accent-secondary: "#10B981"
typography:
  display-lg:
    fontFamily: "Space Grotesk"
    fontSize: "120px"
    fontWeight: 700
    lineHeight: "0.82"
    letterSpacing: "-7.2px"
  headline-md:
    fontFamily: "Space Grotesk"
    fontSize: "72px"
    fontWeight: 700
    lineHeight: "0.85"
    letterSpacing: "-1.8px"
  body-md:
    fontFamily: "Space Grotesk"
    fontSize: "24px"
    fontWeight: 300
    lineHeight: "1.63"
  label-md:
    fontFamily: "Space Grotesk"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: "1.56"
  label-mono:
    fontFamily: "JetBrains Mono"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: "1.4"
    letterSpacing: "0.05em"
spacing:
  base: "16px"
  gap: "24px"
  gap-lg: "64px"
  section-padding: "64px"
rounded:
  control: "8px"
  card: "16px"
  card-lg: "40px"
  pill: "9999px"
components:
  button-primary:
    background: "#CCFF00"
    text-color: "#000000"
    radius: "9999px"
    height: "44px"
    shadow: "rgba(204, 255, 0, 0.3) 0px 0px 30px 0px"
  button-secondary:
    background: "transparent"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "44px"
    border: "1px solid rgba(255,255,255,0.15)"
  button-nav-cta:
    background: "#FFFFFF"
    text-color: "#000000"
    radius: "9999px"
    height: "44px"
  card-glass-hero:
    background: "rgba(255,255,255,0.02)"
    backdrop-filter: "blur(16px)"
    radius: "16px"
    padding: "20px"
    border: "1px solid rgba(255,255,255,0.1)"
  card-glass-feature:
    background: "rgba(255,255,255,0.02)"
    backdrop-filter: "blur(16px)"
    radius: "40px"
    padding: "32px"
    shadow: "rgba(255,255,255,0.1) 0px 0px 0px 1px, rgba(0,0,0,0.25) 0px 25px 50px -12px"
  card-lime-fill:
    background: "#CCFF00"
    text-color: "#000000"
    radius: "40px"
    padding: "32px"
  card-flat-analytics:
    background: "#0C0C0C"
    radius: "0px"
    padding: "0px"
    border: "none"
---
# Voltage Grid
Source: https://p.superdesign.dev/draft/141bb745-27d2-4e18-917a-3bcddf305151

## Overview
This is a dark-mode-default, technical/industrial aesthetic — closer to neobrutalism-meets-dashboard-UI than to soft SaaS marketing. The system is carried by three devices: a near-black field (#0C0C0C/#000000, roughly 83% of measured pixels), a single acid-lime accent (#CCFF00) rationed to buttons, chips, and small radial glows, and an oversized, ultra-condensed Space Grotesk display face set at negative tracking so tight it reads almost stenciled. A faint 1px hairline grid overlays the entire canvas, giving the flat black plane a blueprint/schematic texture rather than a void. Glassmorphic cards (blur(16px), hairline borders) sit inside this grid like instrument panels, reinforcing a "control system" read over a "friendly product" read.

## Composition
The first screen splits into a fixed-width dashboard mockup (left) and headline block (right) — an asymmetric two-up, not a centered hero, rejecting the safer centered-stack alternative to let the illustration anchor visual weight low-left while type dominates upper-right. A small mono eyebrow pill sits above the headline; the headline itself is two lines, the second rendered in italic lime against the same weight as line one — a two-line, ~7-word treatment where only the second line carries color and slant. Below, a body paragraph is capped short (roughly 3 lines), then a hero button pair. Scrolling into the middle bands, density rises sharply: a bento arrangement of unevenly sized glass/flat cards (analytics chart, token swatches, a full-lime callout card, a secure-core card, a mobile card) packs the row tighter, with gaps opening to reveal grid texture beneath. The page closes on a huge, low-contrast oversized watermark word sitting directly behind a smaller solid-white headline, then a single centered lime pill CTA, then a four-column flat footer on pure black. Section rhythm: sparse hero → dense bento grid → sparse closing statement → dense footer — an alternating tight/loose cadence rather than uniform spacing throughout.

## Colors
Background is #0C0C0C to #000000 (the two account for over 80% of pixels), functioning as both page and card base — nearly all cards are transparent-on-black rather than lighter surfaces, so elevation is signaled by border/blur, not lightness steps. #CCFF00 (lime) is the sole accent, applied only to: the italic headline clause, one hero button fill, the nav CTA's active-state indicator dot, one fully-lime callout card, token swatches, and the closing CTA pill — never as a background wash. #10B981 (emerald) appears once, as a second token swatch, establishing it as a secondary/tertiary accent, not a primary. #FFFFFF is reserved for primary headline text, the nav CTA fill, and the footer's inverted light band; #9A9A9A-range gray carries all secondary/body copy. Nothing else is colored — icons, borders, and chip backgrounds stay in grayscale or lime, keeping the palette to effectively three hues total.

## Typography
Space Grotesk is the only display and body family — a single-typeface system distinguishing itself purely through size and weight rather than family pairing. display-lg (120px/700, lh 0.82, ls ‑7.2px) is reserved for the closing oversized watermark word; headline-md (72px/700, lh 0.85, ls ‑1.8px) drives hero and section headlines, with the italic-lime clause sitting at the same size as its upright neighbor. body-md (24px/300, lh 1.63) is a light-weight, generously-leaded paragraph style used sparingly for supporting copy. label-md (18px/700, lh 1.56) marks card titles. A JetBrains Mono label face appears at small sizes (system status pills, token names, coordinate-style captions) in uppercase with wide tracking — the signature "technical readout" accent distinguishing UI chrome from the humanist display type.

## Layout
Max-width content column runs 1440px. The measured 12-column grids show two dominant patterns: a 2-item asymmetric split at gap 64px with rows [36/53] (narrow-left/wide-right), and a 2-item split at gap 80px with rows [44/44] (near-even). The dense mid-page feature area is a 4-column bento grid, gap 24px, 5 cards arranged as rows [49/24/24 | 24 | 24] — a large top-left analytics card spans roughly half the row width beside two stacked smaller cards, with two more full-row cards beneath: an uneven bento, not a uniform card grid. Card density is high in this band (five cards, tight 24px gaps) versus sparse hero and closing sections. Padding on glass cards runs 32px (large) or 20px (compact hero cards); radii scale from 16px (compact) to 40px (feature-scale), plus a 9999px pill for all buttons — a two-tier rounding logic: near-square small chips, very-rounded large feature cards, full-pill controls.

## Components
- **Navbar**: centered bounded bar, 108px tall, 1440px wide (75% of a wider viewport, 240px insets both sides) — a wide inset bar, not edge-to-edge, with square 0px corners on all four sides so it reads as a flat rectangle rather than a rounded shell. Sticky, transparent background. Contains logo mark (lime rounded-square badge + wordmark), 4 nav links, a mono status readout chip with a lime dot, and the CTA: solid #FFFFFF fill, #000000 text, 9999px pill radius, 44px height.
- **Hero primary button**: an observed solid lime (#CCFF00) fill, black text, full pill radius (9999px), ~48px height — this is the single most emphasized control on the first screen, sitting left of a secondary outline button. Do not substitute the nav's white pill or any glass control for this role.
- **Hero secondary button**: dark/transparent fill, white text, thin light border, 9999px pill, trailing arrow glyph — positioned beside the primary as the lower-emphasis pair member.
- **Dashboard illustration card** (hero, left column): glass surface, blur(16px), 16px radius, 20px padding, dark window-chrome dots at top, a mono URL-style label, an inset bar-chart panel in olive/lime bars, two small stat sub-cards below with icon-in-rounded-square + label bar, and a floating lime pill badge reading a mono status label — the card covers roughly the full left half of the hero.
- **Analytics feature card** (mid-page, bento large cell): flat #0C0C0C surface, 0px radius, no padding shown, heading + short body copy at top, a muted gray bar-chart illustration filling the lower half — no CTA, purely informational.
- **Token/swatch card** (mid-page, bento stacked cell): flat dark surface, mono eyebrow label, bold heading, two swatch rows (lime swatch + mono code label, emerald swatch + mono code label) plus an "add" affordance row, mono caption at bottom — a settings-panel anatomy.
- **Lime callout card** (mid-page, bento cell): full #CCFF00 fill, black text, 40px radius, 32px padding, two-line bold heading, a black rounded-square icon badge with lime glyph — the only fully-colored card in the system, shadow `rgba(204, 255, 0, 0.3) 0px 0px 30px 0px`.
- **Feature cards, compact pair** (mid-page, bento bottom row): flat dark surface, icon-in-rounded-square (shield / phone glyph), bold short heading, one-line muted description — no media, text-only anatomy, ~half-row width each.
- **Closing CTA band**: no card frame — a giant low-opacity watermark word behind a smaller bold white headline, single centered lime pill button beneath (black text, 9999px), on flat black.
- **Footer**: background #000000, logo lockup + short description column, two link columns (labeled section headers in muted caps, 4 links each = matches the "12 links" total across product/company groups), three circular social icons (outline, transparent fill), copyright line bottom-right in mono caps.

## Graphics & Effects
A dual hairline grid texture spans roughly three-quarters of the page: `linear-gradient(rgba(255,255,255,0.05) 1px, rgba(0,0,0,0) 1px)` and its 90°-rotated pair, both at 1px pitch — this is the persistent background weave visible through every dark section, not a hero-only device. A small radial lime glow, `radial-gradient(circle, rgba(204,255,0,0.1) 0%, rgba(0,0,0,0) 70%)`, covers under 5% of the page — a soft rationed wash sitting behind the hero illustration or a bento cell corner, never full-bleed. A 1px-tall lime-to-white linear gradient (`linear-gradient(to right, rgb(204,255,0), rgb(255,255,255))`) functions as a divider or underline accent at ~1% coverage. Glass cards use `backdrop-filter: blur(16px)` uniformly with soft elevation shadows (`rgba(255,255,255,0.1) 0px 0px 0px 1px, rgba(0,0,0,0.25) 0px 25px 50px -12px`). The lime card's glow shadow (`rgba(204,255,0,0.3) 0px 0px 30px 0px`) is the system's only "emissive" element, reinforcing it as a status/energy signifier.

## Motion
Interactive elements transition on `color, background-color, border-color, fill, stroke 0.15s cubic-bezier(0.4,0,0.2,1)` for fast, snappy state changes (hover/focus). Larger compositional shifts use `all 0.5s cubic-bezier(0.4,0,0.2,1)` and `all 0.3s cubic-bezier(0.4,0,0.2,1)` — the 0.3–0.5s tier for card entrances or layout reflow, the 0.15s tier for micro-interactions. Two named keyframes, `float` and `pulse-lime`, drive ambient motion: a slow vertical bob (likely on the dashboard illustration or status badge) and a breathing glow/opacity pulse on lime elements (the status chip, the glow radial) — subtle, looping, never jarring.

## Guardrails
- Never fill more than a small rationed region with lime — it is a signal color, not a background wash.
- Keep all card surfaces transparent-on-black or glass-blurred; do not introduce lighter gray card fills as elevation.
- Preserve the navbar's inset, square-cornered rectangle geometry — do not stretch it edge-to-edge or round its corners.
- Keep the italic-lime headline treatment to exactly one line/clause per headline, matched in size to its upright neighbor, never scaled up as a separate hero element.
- Do not soften the display type's negative tracking or condense-to-normal spacing — the tight ls values are the signature.
- Preserve the hairline dual-axis grid texture across dark sections; it is structural, not decorative filler.
