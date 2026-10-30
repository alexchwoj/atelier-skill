---
version: "1"
name: "Operational Noir"
description: "A dark-mode-default operations aesthetic pairing a near-black grain-textured hero with clinical white documentation bands; an italic-serif editorial voice interrupts a Geist UI system, with one rationed cobalt accent for action and emphasis."
colors:
  background: "#FFFFFF"
  surface: "#FFFFFF"
  surface-alt: "#F6F6F8"
  text-primary: "#FFFFFF"
  text-primary-on-light: "#0B1014"
  text-secondary: "#9DA2B3"
  text-muted: "#6E7180"
  accent: "#2C63FF"
  border-light: "#E4E6EE"
  border-dark: "#40424D"
typography:
  display-lg:
    fontFamily: "Geist"
    fontSize: "47px"
    fontWeight: 300
    lineHeight: "1.09"
    letterSpacing: "-1.2px"
  headline-md:
    fontFamily: "Lora"
    fontSize: "40px"
    fontWeight: 400
    lineHeight: "1.14"
    letterSpacing: "-1px"
  body-md:
    fontFamily: "Geist"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.55"
  label-md:
    fontFamily: "Geist"
    fontSize: "18px"
    fontWeight: 500
    lineHeight: "1.3"
    letterSpacing: "-0.4px"
  accent-serif:
    fontFamily: "Lora"
    fontStyle: "italic"
    role: "editorial headline interruption on light section bands"
  label-mono:
    fontFamily: "JetBrains Mono"
    role: "eyebrow / annotation / data-label caps"
spacing:
  base: "8px"
  unit-sm: "10px"
  unit-md: "17px"
  unit-lg: "19px"
  unit-xl: "32px"
  section-padding: "32px"
rounded:
  control: "23px"
  card: "23px"
  pill: "23px"
  data-accent: "23px"
components:
  navbar:
    background: "transparent"
    height: "97px"
    width: "100%"
    radius: "0px 0px 0px 0px"
  button-primary:
    background: "observed near-white/cream solid"
    text-color: "#0B1014"
    radius: "observed ~6px"
    height: "observed ~44px"
    note: "hero primary CTA, values observed from screenshot only"
  button-nav-cta:
    background: "#2C63FF"
    text-color: "#FFFFFF"
    radius: "0px"
    height: "43px"
  button-nav-link:
    background: "transparent"
    text-color: "#FFFFFF"
    radius: "0px"
    height: "20px"
  card-panel-full:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  card-icon-feature:
    background: "transparent"
    radius: "0px"
    padding: "32px 24px 0px"
  card-heading-body:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  card-inverted:
    background: "#FFFFFF"
    radius: "0px"
    padding: "17.28px 18px"
  card-heading-list:
    background: "transparent"
    radius: "0px"
    padding: "0px"
---
# Operational Noir
Source: https://www.meuze.ai/

## Overview
This is a dark-mode-default system built on operational seriousness: a near-black (`#0B1014`) canvas carries a grain/dot-textured photographic hero, while interior documentation sections flip to clinical white surfaces with hairline rules and technical mono labels. The voice is dual-registered — a light-weight Geist sans for UI chrome and data, an italic Lora serif for editorial headline moments — evoking a control-room-meets-editorial tone. One cobalt blue (`#2C63FF`) is the entire chromatic vocabulary; everything else is grayscale value.

## Composition
The first screen is hero-dominant: a full-bleed dark textured environment photograph sits under the headline, with a transparent edge-to-edge navbar overlaid at top and a two-tier CTA stack (solid primary + hairline label) anchored lower-left. Scroll rhythm alternates: black hero → near-black transition band → a stark white technical-documentation section (eyebrow + serif headline + isometric line-art illustration + labeled definition list) → a second white section with a 4-up icon/data-panel grid → a return to black for a large-numeral stat band with a dot-matrix globe illustration → a black footer. The deliberate choice is this hard black/white alternation by section rather than a single continuous dark theme — it rejects smooth dark-mode uniformity in favor of sharp editorial contrast between "brand mood" bands and "product proof" bands.

## Colors
`#0B1014` (near-black) and `#FFFFFF` each command roughly equal real estate (~48%/47% per pixel field), confirming the page is a strict binary of ink-black sections and paper-white sections, not a single dark theme with light cards. Text ink flips per section: white text on black bands, `#0B1014` ink on white bands. `#2C63FF` is rationed to under 1% of pixels — reserved exclusively for the navbar CTA fill, one inline demand-chart label/line, and link/accent moments — never used as a background wash. Grays (`#9DA2B3`, `#6E7180`, `#40424D`, `#54575A`) carry secondary text, borders, and muted captions; `#E4E6EE` and `#F6F6F8` are the faint hairline/backdrop tones inside white sections. Nothing else is colored — icons, illustrations, and charts stay grayscale or line-art except where cobalt marks an active data point.

## Typography
Geist Light at 47px/1.09 with -1.2px tracking is the hero display size, kept tight and cool. Inside white sections, section headlines switch to Lora Regular at 40px/1.14, -1px tracking — an italic-leaning serif voice that reads as editorial commentary layered onto the technical Geist system. Body copy is Geist Regular 16px/1.55, comfortable and neutral. Labels (feature titles, sub-headers like "Demand"/"Labor") sit at Geist Medium 18px/1.3, -0.4px tracking. Eyebrows and small system annotations (section kickers, chart axis labels) use a monospace face (JetBrains Mono), all-caps, wide tracking — the technical/data signifier threaded through every section.

## Layout
Content is edge-to-edge full-bleed in the hero and stat sections, then shifts to a bordered, ruled interior frame in the documentation sections — a thin hairline box (visible top-left corner tick mark) containing a two-column split: a left label column (~narrow, holds eyebrow + serif headline) and a right column carrying supporting body copy, divided by a vertical hairline. Below that header row, the mid-page grid runs as [1 label column | 1 large illustration column] roughly 36/64 in the "how it works" band, then reflows to a 4-across row of equal data-panel cards (Demand / Ordering / Labor / Supply-chain) each with a mono-label eyebrow, a graphic/chart placeholder, and a two-line caption — a uniform card-grid row of 4, not bento. The isometric illustration and dot-matrix globe are single large media blocks spanning half the frame, unpaired. Spacing is tight and technical: 0/8/10/17/19/32px increments, zero border-radius throughout (`0px` on every card, button, and nav), except one measured 23px radius reserved for a small data-accent element. Max content width caps at 1800px, but sections routinely run full-bleed to the viewport edge with only a thin inset rule marking the "content frame."

## Components
- **Navbar** — top of every screen, edge-to-edge square bar, 97px tall, transparent background, sticky, zero corner radius on all four corners (flat full-width bar, not inset or capsule). Holds a logo mark + wordmark at left, 12 total nav items (text links, transparent, white text, 0px radius, ~20px hit height, no padding), and one solid CTA at far right: `#2C63FF` fill, white text, 0px radius, 43px height — the only filled control in the bar.
- **Hero primary CTA** — appears once, lower-left of the hero, stacked below the sub-headline as a solid observed near-white/cream pill-ish rectangle with an arrow glyph; approximate radius ~6px, height ~44px — this, not the navbar's cobalt button, is the visual primary of the first screen by virtue of contrast and placement. The navbar's `#2C63FF` button is a secondary utility CTA, not the hero primary.
- **Full-width definition rows** (×5, "how it works" band) — a stacked list of label + body pairs (Demand, Labor, Inventory, Locations, plus one more), each row 100% container width, transparent fill, 0px radius/padding, divided by hairline rules; first item's label rendered in cobalt to mark it active/selected, remaining labels in dark ink.
- **Icon/data feature cards** (×3, mid-page band under integrations logos) — arranged in a row, transparent fill, 0px radius, padding `32px 24px 0px`; anatomy top-to-bottom: small icon or mono eyebrow, medium-weight heading, short body caption below.
- **Operational data-panel cards** (×3–4, "forecasting/stock/labor/supply" row) — arranged 4-across in one row, transparent fill, 0px radius, 0px padding; anatomy: mono-caps eyebrow at top, a graphic/chart or grid-diagram filling most of the card body, a heading label, then a one-to-two-line caption beneath — this is the uniform card-grid pattern (rows of [4], equal width, not asymmetric).
- **Inverted white tiles** (×4, embedded within a dark band) — solid `#FFFFFF` fill, 0px radius, tight `17.28px 18px` padding; small square logo/icon marks used as an integrations strip, sitting inline with a mono caption reading as a "plus any system" note.
- **Stat/numeral band** — one large oversized numeral (far larger than any other type on the page, roughly 4–5× the display-lg size) paired with a mono eyebrow above and a caption line below, set beside a large dot-matrix globe illustration; hairline rule separates the numeral block from a closing caption line.
- **Closing list cards** (×3, footer-adjacent) — transparent fill, 0px radius/padding, anatomy: heading + a short link/list beneath, arranged as parallel columns (Product / Company / Follow).
- **Footer** — full-bleed `#0B1014` band, logo + short paragraph at left, three link columns (13 links total) at right, hairline rule above a closing copyright/legal row.

## Graphics & Effects
The hero photograph (a dim, dot-grain-textured interior scene) is darkened by a stack of radial and linear scrims layered directly over it: `radial-gradient(78% 42% at 26% 0px, rgba(11, 16, 20, 0.94) 0%, rgba(11, 16, 20, 0.55) 45%, rgba(0, 0, 0, 0) 78%)` anchored top-left, plus three further radials at lower-left, center-left, and bottom-right positions of similar structure, plus a full-height `linear-gradient(rgba(11, 16, 20, 0.78) 0%, rgba(11, 16, 20, 0.72) 30%, rgba(11, 16, 20, 0.34) 58%, rgba(11, 16, 20, 0.12) 80%, rgba(11, 16, 20, 0.4) 100%)` — together these cover the full hero frame, pooling darkest at the edges/corners to keep the headline zone legible while letting midtone texture show through center-right. A second scrim, `linear-gradient(color(srgb 0.0431373 0.0627451 0.0784314 / 0.62), rgba(0,0,0,0))`, sits over the isometric-illustration media block to fade it from dark top edge to clear. The isometric floor-plan illustration and the globe are rendered as dot-matrix/pixel-grain line art (canvas-based live surfaces in production; treat as static dithered PNG/SVG stand-ins when rebuilding). Elevation is expressed only through soft drop shadows on floating panels: `rgba(11, 16, 20, 0.55) 0px 24px 48px -24px` and `rgba(11, 16, 20, 0.4) 0px 24px 48px -20px`, both diffuse and low-position. Backdrop blur (`blur(8px)`, `blur(6px)`) is used sparingly on any glassy overlay chip. A fine dot/grain texture overlays the entire hero photograph, giving it a halftone, slightly analog quality distinct from a clean photographic hero.

## Motion
Entrances are fade/slide combinations: `opacity 0.42s ease-out` for simple reveals, and a two-stage `opacity, transform 0.38s, 0.52s ease-out, cubic-bezier(0.16, 1, 0.3, 1)` for content that both fades and translates — a soft, slightly decelerating settle rather than a bounce. Micro-interactions (hover states, small toggles) are much snappier: `opacity 0.18s ease` and `opacity, transform 0.18s, 0.22s ease, cubic-bezier(0.16, 1, 0.3, 1)`. Keyframe vocabulary includes fade-in, fade-in-up, fade-in-down, scale-in, slide-in-right, and slide-in-left — directional entrance variety used for staggering the definition-row list and the 4-up data panels as the user scrolls. Scroll is smoothed via Lenis, giving the black/white section transitions a gliding, momentum-based feel rather than a hard snap.

## Guardrails
- Never fill the hero background with a full-screen saturated gradient — the hero stays a dark, grain-textured photograph darkened by cornered radial scrims, with cobalt appearing only in the nav CTA and hero primary's surroundings, not as a wash.
- Never round the navbar, buttons-as-links, or any card — every component in this system is edge-to-edge, 0px radius; reserve rounding only for the true hero CTA (~6px) and pill-shaped elements explicitly called out.
- Never substitute the transparent, 0px-radius navbar CTA's cobalt fill for the hero's primary button — they are different components with different observed treatments.
- Keep the black/white section alternation hard-edged, not blended — white documentation bands must feel like a distinct paper-toned zone, not a lightened dark-mode surface.
- Reserve the italic Lora serif exclusively for section headlines inside white bands; never apply it to body copy, labels, or dark-band hero type.
- Keep cobalt usage under roughly 1% of visible pixels — it marks exactly one active/primary element per section, never a decorative fill.
