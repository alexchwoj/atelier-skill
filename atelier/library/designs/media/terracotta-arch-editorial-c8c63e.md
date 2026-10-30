---
version: "1"
name: "Terracotta arch editorial"
description: "Warm-neutral editorial system built on Instrument Sans and a Lora italic accent, staging photographic archways behind a near-black nav shell, then resolving into a stone-grey card canvas with a single black-panel testimonial band."
colors:
  background: "#EEEDEA"
  surface: "#111111"
  text-primary: "#111111"
  text-secondary: "#DCD8D5"
  accent: "#413936"
  border-dark: "#14372D"
  border-light: "#EBF0EB"
typography:
  display-lg:
    fontFamily: "Instrument Sans"
    fontSize: "64px"
    fontWeight: 500
    lineHeight: "1.1"
    letterSpacing: "-2.5px"
  headline-md:
    fontFamily: "Instrument Sans"
    fontSize: "48px"
    fontWeight: 500
    lineHeight: "1.1"
    letterSpacing: "-1.5px"
  body-md:
    fontFamily: "Instrument Sans"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: "1"
  label-md:
    fontFamily: "Instrument Sans"
    fontSize: "32px"
    fontWeight: 500
    lineHeight: "1.2"
    letterSpacing: "-1px"
  accent-serif:
    fontFamily: "Lora"
    fontStyle: "italic"
    role: "italic word-level interruption inside headlines"
  legacy-serif:
    fontFamily: "Times New Roman"
    role: "residual fallback serif, not primary voice"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "156px"
  section-gap-sm: "113px"
  section-gap-lg: "160px"
rounded:
  control: "8px"
  pill: "9999px"
  card: "16px"
  sharp: "4px"
  panel-top: "40px"
components:
  button-nav-cta:
    background: "#413936"
    text-color: "#EEEDEA"
    radius: "1600px"
    height: "48px"
    padding: "14px 20px"
    hover-background: "#111111"
  button-primary-hero:
    background: "#111111"
    text-color: "#DCD8D5"
    radius: "16px 16px 0px 0px"
    height: "43px"
    padding: "9.6px 16px"
    note: "observed solid dark pill-cornered rectangle, hero-only variant"
  button-nav-ghost:
    background: "transparent"
    text-color: "#EAEEED"
    radius: "1600px"
    height: "37px"
    padding: "9.6px 13.6px"
    hover-background: "rgba(255, 255, 255, 0.1)"
  button-nav-link:
    background: "transparent"
    text-color: "#111111"
    radius: "0px"
    height: "48px"
    padding: "0px"
  card-media-bleed:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  card-dark-inverted:
    background: "#111111"
    radius: "16px"
    padding: "24px 24px 28px"
  card-checklist-row:
    background: "transparent"
    radius: "0px"
    padding: "0px 32px 32px"
  card-full-panel:
    background: "#EEEDEA"
    radius: "0px"
    padding: "156px 40px"
---
# Terracotta arch editorial
Source: https://archscale.webflow.io/

## Overview
This is a warm-neutral editorial system: a stone-grey (`#EEEDEA`) canvas carrying black (`#111111`) display type set in Instrument Sans, punctuated by a single italic Lora accent word per headline. The opening screen is the system's one saturated moment — a full-bleed architectural photograph of glowing terracotta archways — everything after it retreats to flat neutral cards, sharp-edged photo blocks, and one true black panel (`#111111`) for testimonial and creator-quote moments. It reads as gallery-minimalist: large confident type, thin hairline dividers, generous negative space, and color used only where a photograph supplies it.

## Composition
Screen one is photograph-dominant: a dark glass navbar sits over a bed/archway interior shot, with centered display type and a single primary button anchored at the bottom third, scrim-darkened for legibility. Below the fold the page snaps to the flat `#EEEDEA` canvas: a centered eyebrow-chip + headline + supporting paragraph module opens each section, followed by a stat row of four oversized numerals, then a services list of alternating text/media rows, a two-then-three-column media mosaic, a black quote panel, a testimonial rail, and finally a dark closing CTA band that fades into the footer. The deliberate choice is to spend the ONE vivid, textured, colorful moment entirely on the hero photograph and let every subsequent section run achromatic — rejecting a repeating-gradient-hero pattern in favor of "photograph once, typography everywhere else."

## Colors
`#EEEDEA` (~70% of declared area, reads as the dominant "off-white stone" page field) is the background role across all body sections. `#111111` (~19%) is both primary text ink and the surface fill for the dark inverted cards, quote panel, and footer — never a pure black, always this warm near-black. `#FFFFFF` (~6%) appears only inside the hero photograph's light streaks and on the primary hero button. `#413936` ("brown") is the accent role, used exclusively for the navbar's solid CTA pill and its hover-darkened states — rationed to one control at a time. `#DCD8D5` ("light-brown") serves as secondary/muted text, seen on dark surfaces. The hero photograph itself contributes the pixel-field's warm browns (`#301818`, `#483018`, `#784830`) — these are NOT design tokens but the photographic subject; they are never repeated as flat fills elsewhere. Borders are hairline `#14372D` (a near-black green-brown) and `#EBF0EB` (a near-white), both nearly invisible — dividers, not statements.

## Typography
Instrument Sans carries the entire interface at medium weight (500) — there is no regular/light weight in use. Display-lg (64px/500, ls -2.5px) and headline-md (48px/500, ls -1.5px) both run at tight negative tracking for a dense, confident headline block. Label-md (32px/500, ls -1px) marks secondary section headers and stat numerals. Body-md is small and flat: 16px/500 at lh 1, always set close and unindented. The signature move is a Lora italic clause inserted mid-headline — one to two words per headline, same size as its neighbors, switching only in style/family, never in scale — this is the system's only serif appearance and its only italic. Times New Roman exists as a legacy fallback and should not be treated as a designed voice.

## Layout
Content is bounded to a 1560px max-width, with section padding of 156px top/bottom and inter-section gaps of 113–160px — a slow, generous editorial rhythm. The primary grid is 12-column with a 16px gutter; row spans vary deliberately: a full-width row, then a 33/66 split, then a full 66, then a 66/33 split — an asymmetric grid, not a uniform card grid. The services list is a single-column stack of five full-width rows (each 100% of container), alternating text-block-left/media-right and media-left/text-right. The mosaic sections run two-up at 66% width per row and, separately, a denser three/four-up rail at 33% per item. The four-panel closing CTA/footer-adjacent blocks are each full-width (100%), stacked vertically at 156px vertical padding, not side-by-side.

## Components
- **Navbar** — edge-to-edge glass bar over the hero photograph, dark-tinted with `blur(12px)`/`blur(20px)` backdrop-filter; logo mark left, five text links center-left (transparent, `#111111`-on-light-context but rendering white-ish over the photo), one solid pill CTA far right at `#413936`/text `#EEEDEA`, radius `1600px` (full pill), height `48px`, padding `14px 20px`, hover→`#111111`. A ghost ×28 ghost-ink ×16 button family exists at `37px`/`transparent`/hover `rgba(255,255,255,0.1)` for secondary nav utilities like the bottom-left "Pages" dropdown.
- **Hero primary CTA** — the single most emphasized control on screen one: an observed near-white/dark solid pill-topped rectangle beneath the headline, `#111111` fill, text `#DCD8D5`, radius `16px 16px 0px 0px`, height `43px`, padding `9.6px 16px`. This is distinct from the navbar's brown pill and must not be substituted with it.
- **Secondary/outline button** — light `transparent`-fill, thin-bordered pill (e.g. "Templates"), always paired beside the dark primary CTA in twos throughout mid-page sections; rounded to full pill, no fill, dark text.
- **Eyebrow chip** — small pill-shaped label with a leading icon glyph, `#EEEDEA`-toned fill, appears once atop every major section, centered above the headline.
- **Stat row (numeral card family)** — one row of four items, each 100%-of-column width side by side, no card chrome (transparent, 0px radius, 0px padding); anatomy top-to-bottom: oversized display numeral, then a small caption label beneath.
- **Services list (checklist row family)** — five stacked full-width rows (padding `0px 32px 32px`), each: small icon glyph, heading, short body paragraph, outline "Learn More" pill button, paired with a large media-bleed image occupying roughly half the row.
- **Media mosaic cards** — two families of image-only cards with no chrome (`transparent`, `0px` radius): one pair at 66% column width (two per row) and one pair/set at 33% width (three-plus per row), each carrying a full-bleed photograph plus a heading caption below.
- **Dark inverted card** — `#111111` fill, `16px` radius, padding `24px 24px 28px`; used mid-page for compact author/quote callouts; anatomy: icon chip, bold statement text, thin CTA button beneath.
- **Quote/creator panel** — full-width `#111111` panel, no radius, generous internal padding; anatomy: eyebrow chip, large quote-style paragraph left, supporting caption + CTA button right, two-column split inside a single dark rectangle.
- **Testimonial rail** — horizontal scrolling row of equal-width portrait cards (photo-top-bleed, dark caption footer), with prev/next circular arrow controls floating top-right of the section.
- **Closing CTA band** — full-bleed dark photographic panel (scrim-darkened), centered eyebrow + two-line headline with italic accent, two pill buttons (dark-solid + light-outline) side by side.
- **Footer** — `#111111` panel; logo mark top-left, address block, an email-capture row (dark pill input + "Join Us" pill button, `#111111`/rounded-full), three link columns (Main Pages / Company / Contact & Utility), closing legal row with muted `#DCD8D5` copyright text.

## Graphics & Effects
Two radial/linear gradients act as scrims, not backgrounds: `radial-gradient(circle at 50% 100%, rgba(29, 22, 13, 0.7) 10%, rgba(13, 29, 25, 0) 35%, rgba(13, 29, 25, 0) 70%, rgba(29, 23, 13, 0.7) 90%)` covers roughly 10% of total page area and sits directly over the hero photograph's top/bottom edges to darken for text legibility — it never fills the full viewport, only the hero media element. `linear-gradient(rgba(13, 29, 25, 0) 25%, rgb(17, 17, 17))` (~10% of page) is the bottom-fade transition where the closing CTA photograph dissolves into the solid `#111111` footer. A smaller `linear-gradient(rgba(13, 29, 25, 0) 20%, rgba(29, 16, 13, 0.7) 81%)` (~1.4%) is a secondary media scrim used on a smaller photo block. The hero and closing-band photographs are implemented as looping video in production; use a static warm-toned architectural photograph as the stand-in. Elevation is expressed only through the dark `#111111` cards sitting on the light `#EEEDEA` canvas — no drop shadows are evident; separation comes from flat color contrast and hairline borders alone.

## Motion
Interactions are quick and mechanical: color and background transitions run at `background-color, color 0.1s, 0.1s ease, ease` for instant hover feedback on nav links, while larger surface changes (button backgrounds, borders/padding) ease over `0.4s cubic-bezier(0.645, 0.045, 0.355, 1)` — a custom snap-then-settle curve. Opacity fades (section reveals, scrim crossfades) run at `0.3s cubic-bezier(0.645, 0.045, 0.355, 1)`. A `spin` keyframe drives loading/icon rotation. Scroll-triggered reveals are orchestrated with GSAP + ScrollTrigger, implying sections fade/slide into place as they enter viewport rather than animating on a fixed timer.

## Guardrails
- Never paint a full-viewport saturated gradient in place of the hero photograph — color/warmth is rationed to the media element and its scrim only.
- Do not give the nav's brown pill CTA (`#413936`, 48px, full pill) to the hero primary button — the hero primary is the darker, top-rounded `#111111` variant.
- Keep body copy at 16px/500/lh 1 in Instrument Sans; do not introduce a regular or light weight anywhere.
- Reserve Lora italic for one to two words per headline at matching size — never a full sentence, never a different scale.
- Do not add drop shadows to cards; separation comes from flat black-on-stone contrast and hairline borders only.
- Preserve the asymmetric 12-column row rhythm (100 / 33-66 / 66 / 66-33) — do not normalize mid-page grids into uniform equal-width cards.
