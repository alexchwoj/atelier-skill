---
version: "1"
name: "Chrome Void"
description: "Near-black 3D-grid dark mode with a chrome wireframe hero, rationed violet-to-ember radial washes, and condensed extended display type carrying all headline weight."
colors:
  background: "#181818"
  surface: "#353535"
  surface-alt: "#202020"
  text-primary: "#FFFFFF"
  text-secondary: "#C9C9C9"
  accent: "#713DFF"
  accent-ember: "#F54900"
  border: "#707070"
  border-subtle: "#353535"
typography:
  display-lg:
    fontFamily: "Microgramma D Extended"
    fontSize: "68px"
    fontWeight: 700
    lineHeight: "1"
    letterSpacing: "-2.7px"
  headline-md:
    fontFamily: "Suisse"
    fontSize: "24px"
    fontWeight: 500
    lineHeight: "1.2"
    letterSpacing: "-0.7px"
  body-md:
    fontFamily: "Suisse"
    fontSize: "24px"
    fontWeight: 500
    lineHeight: "1.4"
  label-md:
    fontFamily: "Suisse"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: "1.2"
    letterSpacing: "-0.4px"
  body-base:
    fontFamily: "Suisse"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
  accent-mono:
    fontFamily: "Helvetica"
    fontWeight: 400
    role: "utility/legal microcopy"
spacing:
  base: "8px"
  gap: "20px"
  gap-lg: "30px"
  section-padding: "120px"
  section-gap: "292px"
rounded:
  control: "10px"
  card: "20px"
  chip: "12px"
  well: "50px"
components:
  navbar:
    background: "rgba(24, 24, 24, 0.4)"
    backdrop-filter: "blur(50px)"
    radius: "0px"
    height: "102px"
    width: "100vw"
  button-primary-hero:
    background: "#FFFFFF"
    text-color: "#141414"
    radius: "6px"
    height: "48px"
    note: "observed, approximate — solid light pill under hero headline, not in measured set"
  button-nav-cta:
    background: "transparent"
    border: "1px solid #707070"
    text-color: "#FFFFFF"
    radius: "10px"
    height: "45px"
    padding: "12px 48px"
    hover-color: "#000000"
  button-underline:
    background: "linear-gradient(to top, rgb(201, 201, 201) 1px, rgba(0, 0, 0, 0) 1px)"
    text-color: "#C9C9C9"
    radius: "0px"
    height: "22px"
    padding: "0px 0px 4px"
  button-plain:
    background: "transparent"
    text-color: "#000000"
    radius: "0px"
    height: "48px"
  card-panel:
    background: "#353535"
    radius: "20px"
    padding: "0px"
  card-media-right:
    background: "transparent"
    radius: "0px"
    padding: "0px 40px 0px 0px"
  card-tile-media-top:
    background: "transparent"
    radius: "0px"
    padding: "0px 20px"
  card-grid-cell:
    background: "transparent"
    radius: "0px"
    padding: "0px 20px"
  card-list:
    background: "transparent"
    radius: "0px"
    padding: "0px 10px"
---
# Chrome Void
Source: https://nogood.io/

## Overview
This is a dark-mode-default, 3D-motion-forward system built on a near-black stage (`#181818`) with a single chrome/metallic 3D wordmark as its hero centerpiece, set inside a receding wireframe grid box that reads as a perspective room. The visual language pairs Swiss-adjacent condensed display type with a chrome/liquid-metal 3D object language and small, precisely rationed violet-and-ember radial glows — closer to an aurora-UI treatment than a full mesh-gradient hero. Structure is carried by flat panels and hairline borders; color is carried almost entirely by light (gradient washes, chrome specular highlights) rather than by fill.

## Composition
The first screen opens on a full-bleed wireframe perspective box, a centered chrome 3D wordmark as the singular hero image, an oversized condensed headline beneath it, then a smaller two-line support line, closing on a thin trust strip. This rejects a conventional split hero (headline-left, image-right) in favor of a single vertical stack where the 3D object IS the hero visual, not a supporting graphic — a deliberate choice that keeps the eye on one axis. Mid-page rhythm alternates: a wireframe globe/orbit diagram with radiating labels, a horizontal panel-carousel of numbered gradient-tinted cards, dense card grids of flat list/heading panels, and repeating tile grids on transparent ground. Density is low above the fold (large type, huge negative space) and increases sharply mid-page into compact multi-column card and list grids. Section gaps are extreme (292px), giving each band room to breathe before the next composition begins. The footer closes with a second chrome wordmark occupying nearly the full width, lit from below by the violet radial wash — bookending the page with the same metallic-object motif that opened it.

## Colors
`#181818` is the background, dominating ~78–79% of rendered pixels — this is a true near-black stage, not a card-differentiated dark gray. `#353535` (~9–15% declared area) is the surface role: flat card panels sit one step up in value with no shadow, relying on the value shift alone for separation. `#202020` is a secondary surface/divider tone. Text ink is binary at the extremes — `#FFFFFF` for primary headline/body, `#C9C9C9` for secondary/support copy and the underline-button label — with `#000000` reserved for text sitting on light/hover-inverted surfaces. `#713DFF` (violet) is the system's single accent hue, and it is heavily rationed: it appears only as soft-edged radial glows at specific coordinates (top of a section, bottom of a section, corner) covering roughly 3–10% of any given section each, never as a fill, never as text. `#F54900` (ember/orange) appears exactly once, blended into one radial wash at a section midpoint, functioning as a secondary accent that never repeats elsewhere — a controlled two-color accent system, not a rainbow. Borders (`#707070`, `#353535`) are hairline and structural only. Nothing else is colored: buttons, chips, and card fills stay achromatic, keeping violet/ember as pure atmosphere.

## Typography
Microgramma D Extended at 68px/700, tight -2.7px tracking, is the display voice — condensed, technical, all-caps-feeling even in mixed case, used exclusively for the largest headline claims. Suisse carries everything else: a 24px/500 headline-md for section subheads, an oddly-large 24px/500 body-md for lead paragraphs (this is a display-adjacent body used sparingly, not default paragraph text), a 14px/700 label-md with tight tracking for eyebrows and numbered card labels, and a 16px/400 body-base for standard copy. Helvetica appears as a plain utility face for legal/footer microcopy; Times New Roman is present but marginal — treat both as fallback/incidental, not signature. The signature accent is Microgramma's extreme condensation and negative tracking against Suisse's neutral grotesk — geometry-driven contrast, not serif-vs-sans.

## Layout
Content sits in a generous max-width around 1300px with 120px section padding and exceptional 292px inter-section gaps. The numbered-panel band is a horizontal scrolling rail (carousel arrows visible) of near-square cards, each holding one numeral, one heading, and body text, tinted by a corner-anchored radial gradient unique to that card. The dense mid-page grid is a strict 3-up row pattern at 33/33/33 width repeated across two rows (six equal cells total) — a uniform card grid, not bento; no cell spans wider than its neighbors. Other mid-page bands use narrower list-style cards (padding 0 10px) stacked in a column, and media-right feature rows pairing an image/illustration slot against heading+body text. Radii scale with role: 20px on the heavy dark panel cards, 10px on the outlined button, up to 50px on well-shaped containers — corners get rounder as elements get more interactive/isolated, sharper (0px) on structural list and grid cells.

## Components
- **Navbar** — edge-to-edge, full 100vw width, 0px corner radius on all four corners (a true square bar, not inset or capsule), 102px tall, sticky, fill `rgba(24, 24, 24, 0.4)` with `backdrop-filter: blur(50px)` — a glass bar over scrolling content. Carries roughly 30 total link/menu items across grouped dropdown triggers, plus one bounded CTA button (outline, 10px radius, 45px tall, 12px/48px padding, white text turning `#000000` on hover) pinned right. Logo is a flat wordmark lockup at far left, distinct from the 3D chrome wordmark used only in hero/footer.
- **Hero primary button** — an observed near-white/cream solid pill or rounded rectangle beneath the headline, ~6px corners, dark text — the single highest-contrast control on the first screen; not present in the measured button set, so its fill is approximate and must not be replaced by the glass nav CTA or underline button.
- **Underline button** ×10 — used mid-page as inline text-link actions; transparent fill with a 1px `linear-gradient(to top, rgb(201,201,201) 1px, rgba(0,0,0,0) 1px)` baseline rule standing in for a border, `#C9C9C9` text, 0px radius, 22px tall — a minimal underlined-link variant, not a filled button.
- **Outline button** ×6 — the navbar CTA and repeated section CTAs; transparent fill, 10px radius (slightly-rounded), 45px height, 12px/48px padding, white text inverting to black on hover.
- **Plain/ghost buttons** ×11 and ×1 — 0px radius, transparent, text-only (`#000000` / `#141414`), 48px tall, used as low-emphasis inline or utility actions beside headings.
- **Orbit/globe diagram** — one per mid-page section, a wireframe sphere with dashed leader lines radiating to short Suisse labels positioned around its upper hemisphere — a diagrammatic organism illustrating a capability set, not a card grid.
- **Numbered gradient panel carousel** — a horizontal scrolling rail of near-square cards (dark panel, hairline border, ~20px radius implied by rounded top corners visible), each anatomy: large numeral top-left (Microgramma-style bold), radial gradient wash bleeding from one edge (violet on card 1, ember-to-violet on card 2), a small floating glossy 3D sphere as decorative accent, heading below, body paragraph beneath — navigated by two circular prev/next icon buttons above the row.
- **Dark panel card family** ×9 — `#353535` fill, 20px radius, 0px padding at the container level (internal padding handled by children), anatomy: heading, list content, an expandable/disclosure element, and supporting body text — a FAQ- or feature-accordion-style card.
- **Media-right feature row** ×5 — transparent background, 0px radius, padding `0 40px 0 0`, anatomy: image/illustration slot on the right, heading and body text on the left — an alternating-layout pattern for capability explanations.
- **Media-top tile card** ×3 — transparent, 0px radius, padding `0 20px`, anatomy: full-bleed media at top of card, heading, body text, and two smaller sub-tiles nested beneath — a compact case-study or result tile.
- **Uniform grid cell** ×6 — transparent, 0px radius, padding `0 20px`, arranged in two rows of three equal-width cells (33/33/33 | 33/33/33) — a strict uniform card grid (not bento, not masonry), each cell holding a heading plus body text.
- **List card** ×4 — transparent, 0px radius, padding `0 10px`, anatomy: heading, list, body text — used near page end, likely a resource/link index.
- **Compact panel** ×6 (two instances) — transparent, 0px radius, padding `30px 10px` — simple vertical content blocks, likely logo-strip or stat-adjacent groupings.
- **Footer** — transparent background, roughly 90 total links organized into multiple label columns, plus a location/hub block (city names with sub-addresses), social icon row (circular dark chips), and closing with the large chrome 3D wordmark lit by the violet radial wash from below.

## Graphics & Effects
Five radial gradients carry all of the page's color, each tied to a specific element, never the full viewport: `radial-gradient(91.7% 54.32% at 50% -0.02%, rgb(113,61,255) 0%, rgba(0,0,0,0) 100%)` washes the top edge of a section (~10.5% of page area); `radial-gradient(83.21% 71.85% at 50% 125.28%, rgb(113,61,255) 0%, rgba(113,61,255,0) 100%)` glows up from below a section boundary (~9%); `radial-gradient(46.54% 25.81% at 48.6% 63.98%, rgb(245,73,0) 6%, rgba(113,61,255,0.5) 50%, rgba(0,0,0,0) 100%)` sits centered inside one numbered carousel card, blending ember into violet (~6.3%, doubles as a media scrim); `radial-gradient(120.41% 99.94% at 50% 100%, rgb(113,61,255) 0%, rgba(0,0,0,0) 100%)` lights the footer wordmark from below (~5.1%); `radial-gradient(61.33% 110.96% at 1.88% 100%, rgb(113,61,255) 0%, rgba(113,61,255,0) 100%)` anchors a bottom-left corner glow (~3.4%). Two live video surfaces exist in-page — replace with a static dark gradient or chrome-object still when rebuilding. Elevation is expressed through soft, large-radius shadows: `rgba(0,0,0,0.25) 0px 20px 60px 0px` for lifted panels/carousel cards and `rgba(0,0,0,0.15) 0px 4px 16px 0px` for lighter separation; the navbar's `blur(50px)` backdrop-filter is the only true glassmorphic surface. A fine wireframe-grid texture (perspective room lines) sits behind the hero object as the page's signature textural device — not noise or grain, but a drafting/blueprint-style linear grid receding to a vanishing point.

## Motion
Transitions are short and consistent: color, background, border-color, width, height, and opacity all animate at `0.2s ease-in-out` for hover/state changes, with a slower `0.4s ease-in-out` reserved for background-size and larger opacity crossfades (e.g., panel/carousel transitions). Lightbox/gallery interactions use dedicated keyframes — `lightboxLoader`, `gfadeIn`/`gfadeOut`, `gslideInLeft`/`gslideOutLeft`, `gslideInRight` — indicating slide-and-fade entrances for any modal or media viewer. The overall motion character is quick and mechanical (short durations, ease-in-out, no spring/overshoot), matching the technical/chrome aesthetic rather than a soft or playful one.

## Guardrails
- Never fill the hero background with a full-frame violet gradient — violet and ember stay as small radial washes rationed to specific corners/edges of specific sections; the hero stage itself stays near-black.
- Never substitute the glass navbar CTA's outline-button values for the hero primary button — the hero primary is an observed solid light control, distinct and higher-contrast.
- Never round the uniform 33/33/33 grid cells or the list/media-right cards — their 0px radius and flat transparent ground is deliberate structural flatness against the 20px-radius dark panel cards.
- Never replace Microgramma D Extended's condensed, tightly-tracked display role with a standard grotesk at large size — the -2.7px tracking and extended-but-condensed geometry is the system's single most identifying typographic signature.
- Never add drop shadows to the flat `#353535` panel cards — separation comes from value shift against `#181818`, not elevation shadow.
- Keep the wireframe perspective-grid texture behind the hero object — it is the compositional frame that makes the chrome wordmark read as an object in space, not a flat logo.
