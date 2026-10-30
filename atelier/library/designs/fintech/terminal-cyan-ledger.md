---
version: "1"
name: "Terminal Cyan Ledger"
description: "Near-black operator-console aesthetic with a single rationed cyan signal color, slash-marked technical labels, and dense monitoring-panel imagery standing in for a live dashboard."
colors:
  background: "#000000"
  surface: "#000D0B"
  surface-alt: "#001412"
  text-primary: "#FFFFFF"
  text-secondary: "#919D9C"
  text-tertiary: "#CAC9D1"
  accent: "#00FFE1"
  accent-deep: "#0000EE"
  border: "#767676"
typography:
  display-lg:
    fontFamily: "Bricolage Grotesque"
    fontSize: "64px"
    fontWeight: 600
    lineHeight: "1.2"
  headline-md:
    fontFamily: "Bricolage Grotesque"
    fontSize: "36px"
    fontWeight: 600
    lineHeight: "1"
  body-md:
    fontFamily: "Bricolage Grotesque"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.3"
  label-md:
    fontFamily: "Bricolage Grotesque"
    fontSize: "40px"
    fontWeight: 600
    lineHeight: "1.1"
  accent-mono:
    fontFamily: "Geist"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: "1.3"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "150px"
rounded:
  control: "24px"
  card: "32px"
  pill: "100px"
  circle: "9999px"
components:
  button-primary:
    background: "#00FFE1"
    text-color: "#0000EE"
    radius: "100px"
    height: "34px"
    border: "none"
  button-glass-utility:
    background: "rgba(0, 0, 0, 0.2)"
    text-color: "#000000"
    radius: "40px"
    height: "40px"
    padding: "0px"
  button-outline-ghost:
    background: "transparent"
    text-color: "#000000"
    radius: "20px"
    height: "40px"
    padding: "8px 24px"
  card-monitor-panel:
    background: "#000D0B"
    radius: "32px"
    padding: "24px"
    border: "rgb(0, 0, 0) 0px 0px 0px 1px inset"
  card-transparent-list:
    background: "transparent"
    radius: "0px"
    padding: "0px"
---
# Terminal Cyan Ledger
Source: https://cryptolab.framer.website/

## Overview
This is a dark-mode-default, terminal/console-inspired system: near-black surfaces throughout, a single high-voltage cyan signal color rationed to labels, links, and one CTA family, and a slash ("/") glyph used as a recurring typographic prefix on eyebrows and mid-word headline breaks. The dominant visual carrier is a live-dashboard illustration (wallet/trading panel) reused across sections as both hero centerpiece and feature proof — this is a fintech-monitoring aesthetic, closer to Bloomberg-terminal density than to soft SaaS marketing, expressed through Bricolage Grotesque's geometric, slightly technical letterforms.

## Composition
The first screen opens on a full-bleed near-black hero with a faint animated wireframe-terrain texture in the upper band, a small proof-row of rating/count text, an oversized centered headline broken by one cyan word, a one-line description, a single pill CTA, and a large dashboard screenshot bleeding off the bottom edge. Below the fold the rhythm alternates: a numbered 4-up card row (service capabilities), a two-column about band with circular badge graphics, a two-column live-metrics band with a radial dial graphic, a full dashboard screenshot band paired with descriptive copy, a why-us band with floating pill-shaped tag graphics, a testimonial band with a portrait card, and a closing gradient-washed CTA band into the footer. Every content section carries a `[ 0X ] /Label` eyebrow pair, top-right or top-left, establishing a numbered-index rhythm down the whole page. The deliberate choice is restraint: nearly every section keeps nine-tenths of its canvas pure black with content pinned to one edge or a narrow column, rejecting a denser, evenly-filled bento composition in favor of negative space as the dominant material.

## Colors
Background is #000000, confirmed by the pixel field's ~43% pure-black dominance; the next-largest shares (#001800, #001818, ~27% each) are near-black cyan-tinted and teal-tinted surface variants — these are the card/section-band fills (#000D0B, #001412), not a separate hue. Text ink is white (#FFFFFF) for primary copy and #919D9C for secondary/muted labels and metadata. The accent #00FFE1 (cyan) is rationed hard: it appears only on eyebrow slash-labels, one headline word per section, small percentage/status glyphs, icon strokes, and the primary CTA fill — never as a background wash except in one small scrim element. #0000EE (a saturated blue) exists solely as the CTA's text-on-cyan color, an unusual on-color choice that reads as a deliberate technical/terminal signature rather than a standard dark-on-light pairing. Borders are a mid-gray #767676 hairline, kept low-contrast so panel edges stay recessive against the black field.

## Typography
Bricolage Grotesque carries every role — display (64px/600/1.2), headline (36px/600/1), an oversized label weight (40px/600/1.1) used for large standalone stat/status numerals, and body (14px/400/1.3) — meaning hierarchy is built entirely from size and the cyan/white color split rather than family contrast. A secondary geometric sans (Geist) appears in the small monospaced-feeling status-log lines of the live-metrics panel, functioning as an accent-mono label face for terminal-style readouts. Headlines consistently interrupt one or two words with the cyan accent color and a leading slash glyph, never italics — the "signature" is chromatic, not stylistic-slant.

## Layout
Content is held to a ~1130px max-width column, generally left-anchored with generous right-side negative space or a paired illustration. Section padding is a heavy 150px, producing a slow, spacious vertical rhythm against a small 6–16px internal spacing scale used inside cards and control rows. Corner radii run large and soft: 32px on major panels, 100px/9999px pill radii on buttons and tags, and one oversized 380px radius reserved for a hero-adjacent decorative shape — there are no sharp-cornered components anywhere in the system. The one true card grid — the service-capability row — runs a single uniform row of [4] equal-width cards, no spanning variation: a plain uniform grid, not a bento pattern, reinforcing the console-panel restraint over playful asymmetry.

## Components
- **Navbar**: edge-to-edge square bar, 66px tall, full 1920px viewport width with 0px insets on all sides, 0px corner radius on all four corners (a true full-bleed bar, not an inset or capsule), background #000D0B, sticky on scroll. Carries a logo mark + wordmark at left, 7 total items (5 text nav links plus logo plus CTA), and a CTA pill at far right: fill #00FFE1, text #0000EE, radius 100px, height 34px.
- **Hero primary CTA**: an observed near-white/cyan solid pill beneath the hero headline, ~radius 100px (pill), height ~40px, cyan fill with dark text — the single most emphasized control on the first screen; do not substitute the glass utility button's values here.
- **Button — glass utility** (mid-page controls, e.g. dashboard mock chrome/toggles): `rgba(0, 0, 0, 0.2)` fill, text #000000, radius 40px, height 40px, 0px padding — a low-contrast rounded utility control, not a hero action.
- **Button — outline/ghost** (near page end, secondary actions): background transparent, text #000000, radius 20px (slightly-rounded, not full pill), height 40px, padding 8px 24px.
- **Service capability cards** ×4 in one row: transparent/near-black fill, sharp 0px radius, no padding beyond internal text flow; anatomy top-to-bottom is a small line-icon, a "/00X" index label at top-right, a heading, a thin divider rule, and a short body paragraph — no imagery, no CTA per card.
- **About badge cluster**: circular graphic elements (badge/seal illustrations) arranged in a loose row beneath the about copy, transparent background, no visible card frame — decorative trust marks rather than data cards.
- **Live-metrics panel** (dedicated mid-page band): a radial dial/gauge illustration paired with a stacked terminal-style status list (label + colon + cyan value per line), plus one small oversized numeral stat and a circular icon-button CTA — background stays black, panel has no visible border or fill of its own.
- **Dashboard screenshot band**: a large static image of a trading/wallet interface anchored left, paired with a right-column heading + body + small pill CTA carrying an index label ("/001") — the screenshot itself covers roughly half the section's width and is the section's dominant visual weight.
- **Why-us floating tags**: irregularly-rotated pill/blob shapes containing short label text, scattered at different angles on the right half of the section — a mosaic-style decorative cluster, not a grid.
- **Testimonial row**: one portrait card (photographic image, rounded corners) paired with a large quote block at right, sitting on a teal-tinted surface band (#001412 territory) distinct from the pure-black bands above and below it — this band shift signals the transition into the testimonial/trust zone.
- **Footer**: transparent background, 12 links total across contact-info stack, newsletter input + submit control, and social icon row; logo mark repeats at top-left with a short description line; legal/back-to-top row sits at the very bottom.

## Graphics & Effects
The hero stays black across roughly 90%+ of its frame; the only saturated element is the dashboard screenshot itself and thin animated wireframe linework in the upper third — there is no full-frame gradient wash in the hero. The large-area gradient `linear-gradient(rgb(0, 6, 5) -14%, rgb(0, 6, 5) 100%)` (25.9% of page) is a near-flat near-black section-background treatment, effectively a dark backdrop rather than a visible color gradient. The vivid `linear-gradient(rgb(0, 255, 225) 0%, rgb(0, 6, 5) 100%)` (9.4% of page) is a scrim applied over a specific media element — it renders as a top-to-bottom cyan-to-black fade inside one image/panel container, most visible as the bright wash under the closing CTA band, not as a page-wide treatment. The companion `linear-gradient(rgba(0, 6, 5, 0) 50%, rgb(0, 6, 5) 100%)` (9.4%) is a bottom-fade scrim used to seat imagery into the black background. A small 178deg gradient (0.3% of page, cyan emerging at ~69% stop) marks one compact decorative accent, likely the radial-dial glow. Three video elements exist as live/animated surfaces (background terrain motion, ambient loops); use a static dark-to-cyan gradient or single-frame still as their rebuild stand-in. Elevation is expressed through soft layered shadows (`rgba(0,0,0,0.17) 0px 0.6px 1.6px -1.5px`, `rgba(0,0,0,0.14) 0px 2.3px 6px -3px`, `rgba(0,0,0,0.02) 0px 10px 26px -4.5px`) plus a hard 1px black inset shadow on panel edges, and glass surfaces use `backdrop-filter: blur(100px)` or `blur(15px)`. A subtle fine-grain/noise texture sits over the black fields, giving the flat black a slight analog texture rather than a perfectly flat digital fill.

## Motion
A `__framer-loading-spin` keyframe drives circular loading/spinner elements. Scroll behavior is smoothed via Lenis, and section/element entrances are orchestrated with framer-motion — consistent with soft fade/slide-up reveals timed to scroll position rather than hard cuts. Treat all motion as low-key and functional: subtle parallax on the wireframe hero texture, gentle staggered reveals on card rows, and a continuous spin on loader glyphs — nothing bounces or overshoots.

## Guardrails
- Never fill more than a small scrim element with the cyan-to-black gradient; the hero and body sections must stay black-dominant.
- Never round the navbar's corners or inset it from the viewport edge — it is a true 0px-radius, edge-to-edge bar.
- Never give the hero primary CTA the glass `rgba(0,0,0,0.2)` utility fill — that belongs to mid-page dashboard controls only.
- Never introduce a second accent hue; all emphasis must resolve to the single cyan plus its #0000EE on-color pairing.
- Never merge the 4-card service row into an asymmetric bento span — it is a uniform equal-width row.
- Keep corner radii large and pill-like on controls (24–100px+); do not sharpen buttons or badges to 0–4px.
