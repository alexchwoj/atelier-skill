---
version: "1"
name: "Carousel Void"
description: "A near-black 3D-staged gallery: a perspective-grid floor carries edge-curved panel cards that bow like projected screens, each a warm desert-toned render topped by an oversized italic serif wordmark, orbiting a pure-black void."
colors:
  background: "#000000"
  surface: "#907878"
  surface-alt: "#483030"
  text-primary: "#FFFFFF"
  text-secondary: "#767676"
  text-ink-inverse: "#000000"
  accent-ring: "#3C81F5"
typography:
  display-lg:
    fontFamily: "sans"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: "1.4"
  headline-md:
    fontFamily: "sans"
    fontSize: "27px"
    fontWeight: 700
    lineHeight: "1.4"
  body-md:
    fontFamily: "sans"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "1.4"
  body-char:
    fontFamily: "sans"
    fontSize: "17.92px"
    fontWeight: 400
    lineHeight: "1.4"
    color: "#FFFFFF"
  accent-serif:
    fontFamily: "Times New Roman"
    fontStyle: "italic"
    role: "oversized italic wordmark on each card, the signature move"
  label-mono:
    fontFamily: "Arial"
    role: "micro UI labels: corner wordmarks, nav tabs, timestamp-like tags"
spacing:
  base: "10px"
  gap: "19px"
  section-padding: "38px"
  panel-gap: "51px"
  micro: "26px"
rounded:
  control: "26px"
  card: "26px"
  pill: "9999px"
components:
  button-primary:
    background: "#FFFFFF"
    text-color: "#000000"
    radius: "999px"
    height: "58px"
    padding: "0px"
  button-icon-dark:
    background: "rgba(0,0,0,0.6)"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "36px"
    note: "observed, circular arrow glyph, bottom-corner of each card"
  card-panel:
    background: "transparent"
    radius: "25.6px"
    padding: "0px"
    note: "surface carried by embedded render/image, not a flat fill"
---
# Carousel Void
Source: https://jesperlandberg.com/

## Overview
This is a dark-mode-default, stage-lit 3D showcase system: a pure-black void holds a faint perspective grid floor on which large, gently curved panel cards sit like projected screens tilted in space. The aesthetic reads as cinematic/editorial-3D — closer to a product-render gallery than a flat web grid — built on near-black and warm neutral-rose/terracotta surfaces (#907878, #483030, #604848) punctuated by one glowing warm-light accent inside the imagery itself. Typography carries the brand voice: an oversized italic serif wordmark dominates each card face, intentionally the loudest single element on the page, surrounded by minimal all-caps sans micro-labels in white and mid-gray. The system is restrained everywhere except the single serif flourish and the warm sphere-glow inside each render.

## Composition
The first screen opens almost entirely black: a thin sans wordmark top-left, a single right-aligned label top-right, and the void floor-grid beginning roughly a third down. The dominant object is a large, horizontally-bowed card tilted slightly off the vertical axis, flanked by a second, cropped card at the left edge (only its spine of color visible) — establishing a carousel/stage rhythm rather than a static hero. Inside the primary card: a huge italic serif word spans nearly the card's full width at roughly 4–5× the height of any other text on screen, floating over a warm architectural/render photograph; a small heading and caption sit bottom-left, a circular arrow control bottom-right and bottom-left corner of the stage. Bottom bar of the viewport carries a left-aligned filter toggle pair and a right-aligned call-to-action label; this bottom strip repeats at the page's true bottom edge. The deliberate choice is staged 3D depth (grid floor, tilted bowed panels, implied z-axis) over a flat edge-to-edge image carousel — it rejects conventional flat-card scroll galleries in favor of a spatial, almost showroom installation feel, trading scan-speed for atmosphere.

## Colors
Background is emphatically black (#000000, ~83% of pixels) — the void is the system's true surface-0 and must never be lightened. The warm rose-taupe (#907878, ~5%) and deep terracotta tones (#483030 ~3%, #604848 ~3%) are not literal UI tokens but the dominant hues sampled from the embedded renders/cards themselves — they read as "surface" because the cards' photographic content fills that role; treat them as the image palette, not a flat fill. A cooler neutral #303030/#484848 (~4%/~2%) shows in shadowed card edges and the floor grid lines. Text ink is pure white (#FFFFFF) for primary labels and wordmarks, with #767676 for secondary/caption text and faint borders. The one true UI accent is a blue ring (--tw-ring-color: #3C81F5), reserved entirely for a keyboard-focus state — never visible in static browsing, confirming how little saturated color this system permits outside the embedded imagery. Nothing else is colored: no colored buttons, no tinted chips — restraint outside the cards is total.

## Typography
The hierarchy is inverted from typical marketing pages: the largest type on screen is not a page headline but an italic serif wordmark embedded per-card, rendered at a scale (~4–5× the measured 36px display-lg) that dwarfs the actual UI type scale — this is the system's one maximalist gesture against an otherwise minimal frame. True UI type is small and quiet: display-lg at 36px/700 serves card titles like the "Casa Di Solare"-style heading beneath the serif mark; headline-md at 27px/700 would size any secondary card headline; body-md at 18px/400 and the char-weighted 17.92px/400 both sit on white text for captions and nav labels. All UI sans text uses tight 1.4 line-height throughout — no loose editorial leading. Arial/system-sans covers micro-labels (nav tabs, corner marks, bottom bar labels); the italic Times New Roman-class serif is reserved exclusively for the one-per-card oversized wordmark — never body copy, never UI chrome.

## Layout
The layout is a 3D-staged scene, not a CSS grid in the conventional sense: a ground-plane perspective grid anchors a row of large panel "cards" positioned with simulated depth and slight rotation, visually similar to a scrolling rail but staged in faux-3D rather than flat horizontal scroll. Eight card instances are measured sharing one family: transparent background, 25.6px corner radius, zero padding — confirming the cards' visible color comes entirely from embedded render content filling the rounded frame edge-to-edge. Spacing units of 10px, 19px, 26px, 38px, and 51px govern the tight internal gaps (corner badges, label clusters) versus the wider separation between stage elements. The dominant card is large and singular per view (one full card in focus, one cropped neighbor peeking at the frame edge) — a low-density, one-hero-at-a-time rhythm rather than a multi-up grid; the page's "grid" is this sequential carousel of full-bleed render cards, not a bento or masonry arrangement.

## Components
- **Navbar**: edge-to-edge transparent bar over black, full viewport width (not inset, not a capsule), ~2 items — a left wordmark label and a right single label — both set in small white sans caps; no visible height boundary, no fill, no border, no shadow; sits flush at the very top with generous side margin instead of a boxed container.
- **Button, primary (hero/stage control)**: the single prominent control measured on the first screen — solid white (#FFFFFF) fill, black (#000000) text, full pill radius (999px), 58px height, zero internal padding reported (icon-only circular treatment is likely given the arrow-glyph context) — this is the dominant "primary" interactive affordance of the composition, placed as a corner control on the focal card, not a traditional CTA banner button.
- **Button, icon-dark (secondary, observed)**: small circular dark control (~36px), near-black translucent fill, white arrow glyph, pill/circle radius; appears twice — bottom-left and bottom-right corners of the focal card — functioning as prev/next or expand affordances layered directly onto the render, distinct from the white primary pill and never to be confused with it.
- **Panel/stage card family (×8 across the scene/sequence)**: transparent shell, 25.6px radius, zero padding, edge-to-edge embedded render fills the entire visible card face — top strip carries tiny tab-style micro-labels (3–4 small words in gray/white sans) and a centered small wordmark caption; center-to-lower-center hosts the oversized italic serif wordmark overlapping the photographic scene; bottom-left corner holds a smaller sans headline plus a muted caption line in #767676; bottom-right corner holds the circular icon-button. Only one card is fully in frame/focus at a time; adjacent cards crop at the viewport edge showing only a sliver of their rose/terracotta surface color, implying horizontal progression through the sequence.
- **Side label tags**: small isolated sans text fragments (e.g. a short two-word label) floating independently in the black void beside the stage, right-aligned at mid-height — function as a caption or chapter marker for the current card, not attached to any container.
- **Bottom utility bar**: full-width transparent strip pinned to the viewport bottom, left side holds a two-state text toggle pair (one bright white active state, one dimmed #767676 inactive state) and right side holds a single call-to-action label in white — repeats identically at the true page bottom, acting as a persistent footer/filter control rather than a conventional multi-column footer.

## Graphics & Effects
The embedded render imagery inside each card is the system's primary graphic device — warm interior/architectural scenes lit by a glowing sphere, rendered with soft directional light and ambient warm bounce (#907878/#483030/#604848 tones derive from this). The wordmark overlay uses a soft drop-shadow/glow to stay legible against the busy photographic background beneath it — treat it as a light scrim effect localized to the text layer only, not a page-wide gradient. A **live canvas surface** drives the 3D floor grid and card perspective/rotation — when rebuilding, substitute a static dark grid-floor image or a CSS perspective-transform mock rather than attempting true WebGL. No noise/grain texture is evident; the black void is flat and clean, deliberately empty to let the floor grid lines (faint #303030-toned strokes) suggest depth via perspective convergence alone. No large-scale background gradient exists anywhere on the page — the void stays pure #000000 full-frame; all warmth is contained strictly within the bordered card frames.

## Motion
Two measured transition curves govern state changes: `opacity 0.3s cubic-bezier(0, 0, 0.2, 1)` for fast UI reveals (hover states, label fades) and `opacity 0.5s cubic-bezier(0, 0, 0.2, 1)` for slower content transitions (card-to-card changes, wordmark fade-in) — both are ease-out curves (fast start, gentle settle), never linear or bouncy. This restrained, fade-only motion vocabulary paired with the implied 3D rotation of the staged cards (likely scroll- or drag-linked rather than autoplaying) produces a deliberate, unhurried gallery feel — motion signals state change quietly rather than performing for attention.

## Guardrails
- Never fill the full viewport with a saturated or gradient background — the void stays #000000 edge-to-edge; warmth lives only inside card frames.
- Never shrink or body-weight the italic serif wordmark — it must remain the single oversized element, several multiples larger than any UI label.
- Do not flatten the staged 3D perspective into a plain horizontal scroll rail or uniform flat grid — the bowed, tilted, depth-staged card arrangement is structural, not decorative.
- Do not recolor the primary button away from solid white-on-black pill, and never substitute the small dark icon-button's circular form for the primary CTA's pill.
- Keep all UI chrome (nav, labels, bottom bar) minimal sans and monochrome — reserve all color for embedded render imagery only.
