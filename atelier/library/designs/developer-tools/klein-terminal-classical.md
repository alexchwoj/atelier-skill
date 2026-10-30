---
version: "1"
name: "Klein Terminal Classical"
description: "A single-hue ultramarine field paired with condensed Didone display serif, monospace labels, and duotone halftone imagery — Swiss-terminal rigor staged as classical engraving."
colors:
  background: "#0000F2"
  surface: "#FFFFFF"
  text-primary: "#F5F5F5"
  text-secondary: "#0000F2"
  accent: "#EDFF45"
typography:
  display-lg:
    fontFamily: "displayFont"
    fontSize: "107px"
    fontWeight: 300
    lineHeight: "0.88"
    letterSpacing: "3.2px"
  headline-md:
    fontFamily: "displayFont"
    fontSize: "52px"
    fontWeight: 300
    lineHeight: "1"
  body-md:
    fontFamily: "monoFont"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.5"
  ui-label:
    fontFamily: "ui-sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.4"
  accent-serif:
    fontFamily: "Times New Roman"
    fontStyle: "italic"
    note: "used only for the large classical-engraving overlay caption instances"
spacing:
  base: "16px"
  gap: "24px"
  section-padding: "98px"
rounded:
  control: "4px"
  card: "4px"
  pill: "4px"
components:
  button-primary:
    background: "#FFFFFF"
    text-color: "#0000F2"
    radius: "4px"
    height: "44px"
    note: "observed on hero, near-white solid fill, tight corner rounding — distinct from measured transparent buttons"
  button-nav-cta:
    background: "transparent"
    text-color: "#F5F5F5"
    radius: "0px"
    height: "59px"
  button-ghost:
    background: "transparent"
    text-color: "#0000F2"
    radius: "0px"
    height: "28px"
  card-feature-media:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  card-download-panel:
    background: "#0000F2"
    radius: "0px"
    padding: "0px"
  card-icon-text:
    background: "transparent"
    radius: "0px"
    padding: "0px"
---
# Klein Terminal Classical
Source: https://hermes-agent.nousresearch.com/

## Overview
This is a monochromatic system built on one saturated blue field (`#0000F2`, roughly 85% of declared area and the majority of rendered pixels) treated as a canvas for two competing typographic registers: a condensed high-contrast Didone display serif for headlines, and a monospace/terminal face for labels, eyebrows, and body copy. The aesthetic reads as Swiss/International grid discipline crossed with a classical-engraving art direction — halftone, duotone-processed illustration in the same blue-on-white/white-on-blue key repeats as the system's signature imagery. There is no drop shadow language beyond one soft ambient shadow value, no rounded geometry beyond a near-flat 4px, and almost no gradient — color is otherwise flat and binary (blue field / white field / near-white text).

## Composition
The first screen is navigation-then-headline-then-proof: an edge-to-edge transparent navbar, a huge left-aligned three-line serif headline over the blue field, a compact CTA stack (solid button + bordered terminal input) beneath it, and a large halftone illustration occupying the right half of the viewport, bleeding to the frame edges. Scrolling down, the page alternates between blue full-bleed bands (illustration showcases, a giant wordmark-as-texture close, a final flat blue field) and a white contained band holding a numbered, three-column feature grid with mono labels, serif sub-headlines, and halftone media tiles. This alternation — blue immersive band / white structured grid / blue immersive band — is the deliberate rhythm; the rejected alternative would be a single continuous white content column with blue used only as accent, which would abandon the brand's core move of treating full-bleed ultramarine as a first-class background rather than a highlight.

## Colors
`#0000F2` is the background/brand role and dominates both the pixel field (~50-65% combined across its near-identical blue variants) and the declared area (84.7%). `#FFFFFF`/`#F5F5F5` form the surface and on-color text role: white panels for the content band and downloads grid, off-white (`#F5F5F5`) for text set directly on blue. `#0000F2` doubles as the ink color when text sits on white (headings, labels, body copy inside the white band), making the same hex serve as both background and foreground depending on section — a strict two-tone contrast system. `#EDFF45`, a lime-yellow, is the only accent and it is heavily rationed: it appears only inside one diagonal gradient band (measured at ~1.7% of page area) as a mid-stop color, never as a solid fill, button, or text color. Nothing else is colored — no secondary blues, no grays, no semantic hues — leaving all state/emphasis work to weight, size, and the blue/white flip.

## Typography
Hierarchy is carried entirely by the displayFont serif at dramatic size drops: 107px/300/0.88 line-height/3.2px tracking for the hero display line, 52px/300/1 for section headlines — both markedly condensed-feel Didone letterforms with high stroke contrast. Supporting copy runs in monoFont at 15px/400/1.5, used for eyebrows (numbered "#1"-style labels), terminal command strings, and body paragraphs under each feature tile — giving the whole system a coded, technical counterpoint to the classical serif. A generic ui-sans-serif at 14px/400 appears in incidental UI chrome. Times New Roman appears once, italicized, as the oversized wordmark-scale interruption treated as pure texture rather than a readable headline register.

## Layout
Content is capped at a 1600px max-width with 98px section padding. The primary feature grid is 3 columns with an asymmetric gap of 122px horizontal / 24.4px vertical, 6 items arranged in two full rows of three equal-width cards (rows [30/30/30 | 30/30/30] as percentage of container) — a uniform card grid, not bento, despite the generous horizontal gutter suggesting depth. A second 3-column grid (gap 24.4px, 3 items, row [32/32/32]) holds the OS-download cards. A third 3-column arrangement (rows [37/8/37]) spans the hero's icon+text and CTA-stack cluster, showing a compressed middle row (secondary label) flanked by two taller content rows. All grids are strictly even-width columns; density is generous in the hero, tighter and more code-like in the mono-labeled feature band.

## Components
- **Navbar**: edge-to-edge, square-cornered bar (0px radius all four corners), full 1920px viewport width with zero inset, 138px tall, transparent background, static (no scroll-hide). Holds 8 items: two left text links, a centered stacked two-line wordmark with a row of three social icons beneath it, a dropdown-style products link, and a right-aligned arrow CTA link — all set in mono/small-caps letterforms, no button chrome.
- **Hero primary CTA**: an observed near-white/off-white solid pill-rectangle button beneath the headline, ~6px corner rounding, dark blue text, paired with an Apple glyph — the single highest-contrast object on the first screen and the true primary action.
- **Nav CTA (secondary)**: transparent-background text link, `#F5F5F5` ink, 0px radius, 59px tall, right edge of navbar — a utility link, not the primary.
- **Ghost text buttons**: transparent fill, `#0000F2` ink, 0px radius, 28px tall — used for small in-content toggles (e.g., a paired platform-switch control beside the terminal install block).
- **Terminal install panel**: a bordered white rectangle beneath the primary CTA holding monospace command text and a copy icon — molecule combining a tab switcher (ghost buttons) with a code-styled input row.
- **OS download cards** (×3, one row): full-bleed halftone illustration fills each card top-to-bottom, `#0000F2`-toned duotone image treatment; centered mono eyebrow (device/version label), centered serif OS name, centered white pill download button near the bottom third. Zero radius, zero padding, media covers ~80% of card height.
- **Numbered feature cards** (×6, two rows of three): each card is media-top (halftone portrait/illustration, ~55% of card height) over mono eyebrow ("#N LABEL"), serif two-line headline, and a short mono body paragraph — transparent background, 0px radius/padding, set on the white content band.
- **Feature-band toggle control**: a small bordered two-state pill/tab pair ("FEATURE"/"PREVIEW") pinned top-right of the white band — bordered rectangle, 0px-ish radius, mono caps text.
- **Wordmark-texture band**: a full-bleed section where a single word is rendered at extreme display scale in italic Times New Roman, functioning as a graphic device/divider rather than legible copy, straddling the white-to-blue transition.
- **Footer**: solid `#0000F2` band, minimal — a single link, no grid, flat and unadorned, closing the page on the same blue as the hero.

## Graphics & Effects
The one measured gradient — `linear-gradient(160deg, rgba(0,0,0,0) 0%, rgb(245,245,245) 15%, rgb(237,255,69) 20%, rgb(0,0,242) 25%, rgba(0,0,0,0) 35%, rgba(0,0,0,0) 40%, rgb(245,245,245) 55%, rgb(237,255,69) 60%, rgb(0,0,242) 65%, rgba(0,0,0,0) 75%, rgba(0,0,0,0) 80%, rgb(245,245,245) 95%, rgb(237,255,69) 100%)` — covers only ~1.7% of the page and functions as a diagonal scrim/stripe over a single media element (an image overlay treatment, not the hero background); the hero itself stays flat solid blue. Photographic and illustrative content throughout is uniformly duotone-processed into blue/white halftone engravings — mythological figures, terminal screenshots over painterly art, radiating line-burst motifs — giving the whole system its "etched" texture rather than any noise/grain layer applied to flat color. Live surfaces (two videos, one canvas) should be substituted with static halftone-blue stills matching this treatment when rebuilt. The only shadow in use is a single soft ambient drop: `rgba(0,0,0,0.25) 0px 4px 14px 0px`, applied sparingly to floating elements (e.g., the terminal window mockup), with all other shadow layers transparent/zeroed — elevation is otherwise communicated purely by white-panel-on-blue contrast, not by shadow depth.

## Motion
Interactive color/opacity transitions are fast and linear-feeling: `0.15s cubic-bezier(0.4,0,0.2,1)` for color/background/border/gradient-stop shifts, `0.2s cubic-bezier(0,0,0.2,1)` and `0.2s ease` for opacity fades — all short, snappy, non-bouncy state changes suited to a terminal-utility feel rather than playful overshoot. A named keyframe (`hw-arc-stroke`) suggests a drawing-on stroke animation, likely used to trace the radiating line-burst illustration elements progressively. Scroll is smoothed via Lenis, giving inertial, slightly eased scroll momentum across the section transitions rather than native abrupt scrolling.

## Guardrails
- Never soften the palette: keep it strictly `#0000F2` blue, white/off-white, and ink — do not introduce secondary blues or grays.
- Do not round any card or button beyond ~4px; this system is corner-square, not soft.
- Ration `#EDFF45` to a single diagonal gradient stripe over one media element — never apply it as a solid fill, text color, or button color.
- Keep the hero background flat blue; do not stretch the measured diagonal gradient across the full viewport.
- Preserve the serif/mono pairing split: display headlines always in the condensed Didone serif, all labels/eyebrows/body/code always in monospace.
- Keep the navbar edge-to-edge and square-cornered — do not insert margins or add corner radius to it.
