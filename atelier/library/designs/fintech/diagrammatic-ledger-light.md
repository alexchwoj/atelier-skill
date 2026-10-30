---
version: "1"
name: "Diagrammatic ledger light"
description: "White-dominant, technical-editorial system built on node-diagram illustrations, a single emerald accent, and a serif-italic interruption in headline copy."
colors:
  background: "#FFFFFF"
  surface: "#F7F7F7"
  text-primary: "#171717"
  text-secondary: "#538772"
  accent: "#065F46"
  border: "#E5E5E5"
typography:
  display-lg:
    fontFamily: "Inter"
    fontSize: "48px"
    fontWeight: 500
    lineHeight: "1.05"
    letterSpacing: "-1.2px"
  headline-md:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
  body-md:
    fontFamily: "Inter"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "1.56"
  label-md:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: "1.5"
  accent-serif:
    fontFamily: "Hedvig Letters Serif"
    fontStyle: "italic"
    role: "headline word-interruption accent"
spacing:
  base: "4px"
  gap: "16px"
  section-padding: "64px"
rounded:
  control: "6px"
  card: "8px"
  pill: "9999px"
components:
  button-primary-hero:
    background: "#0A0A0A"
    text-color: "#FFFFFF"
    radius: "8px"
    height: "44px"
    note: "observed near-black solid fill under hero headline, ~8px corners"
  button-secondary-outline:
    background: "#FFFFFF"
    text-color: "#171717"
    radius: "8px"
    height: "44px"
    padding: "10px 16px"
    border: "1px inset lab(84.92 0 -0.0000119209), 1px inset rgba(0,0,0,0.18)"
    shadow: "rgba(0,0,0,0.05) 0px -2px 0px 0px inset, rgba(0,0,0,0.05) 0px 1px 2px 0px"
    hover-background: "#FAFAFA"
    hover-text-color: "#262626"
  button-nav-ghost:
    background: "transparent"
    text-color: "#000000"
    radius: "0px"
    height: "41px"
  button-nav-cta:
    background: "#0A0A0A"
    text-color: "#FFFFFF"
    radius: "8px"
    height: "36px"
  button-pill-tag:
    background: "transparent"
    text-color: "#171717"
    radius: "9999px"
    height: "26px"
    padding: "4px 8px"
  button-inline-accent:
    background: "#065F46"
    text-color: "#FFFFFF"
    radius: "6px"
    height: "24px"
    padding: "4px 10px"
  card-section-panel:
    background: "#FFFFFF"
    radius: "0px"
    padding: "64px 0px"
    border: "1px inset (hairline #E5E5E5-derived)"
  card-utility-tile:
    background: "#F7F7F7"
    radius: "8px"
    padding: "12px"
  navbar:
    background: "#FFFFFF"
    height: "57px"
    radius: "0px 0px 0px 0px"
---
# Diagrammatic ledger light
Source: https://hellomatik.com/?ref=minimal.gallery

## Overview
This is a technical-editorial system in the Swiss/International lineage: white-dominant surfaces, black structural type, hairline dividers, and content organized as numbered content bands rather than decorative marketing blocks. Its signature carrier is the node-diagram illustration — small boxes and dashed connector lines rendered in muted teal, amber, and blue outline chips — used repeatedly to depict system architecture instead of photography or abstract gradients. A single emerald accent (`#065F46`) is rationed to headline keywords, one inline pill button, and a couple of chip fills, while an italic serif family (Hedvig Letters Serif) interrupts otherwise-sans headlines for two to three words at a time, giving the page its one voice-driven flourish inside an otherwise mechanical, grid-drawn identity.

## Composition
The first screen stacks: an edge-to-edge navbar, a two-line display headline with an italic serif clause on its opening two words, a one-paragraph subhead, a primary/secondary button pair, then a large paired-window illustration (a network-diagram panel beside a chat-log/console panel) that anchors the hero visually more than any single button does. Below the fold the page runs as five explicitly numbered sections ("01" through "05" style eyebrows), each following the same rhythm: small eyebrow label → headline with one emerald-colored clause → one-paragraph body → either a 3-column diagram/checklist triptych, a Q&A list paired with a live console mockup, or a stat row. Density stays low — generous 64px section padding, thin hairline dividers instead of card borders in the full-width panels — until the footer, which compresses into a dense four-column link list. The deliberate choice is a diagram-first, chip-and-node visual language over illustrative or photographic hero art; the rejected alternative is a conventional gradient-mesh SaaS hero, which this system avoids entirely in favor of literal system-mapping graphics.

## Colors
Background is flat `#FFFFFF`, confirmed dominant at ~79-89% of rendered pixels, with a secondary neutral panel tone `#F7F7F7` used only for compact utility tiles. Text ink is near-black (`#171717`/`#000000`/`#181818`), never pure gray-on-gray, keeping body copy high-contrast against white. The single accent, emerald `#065F46`, is reserved for: one keyword clause per headline, one small solid pill/inline button, and sparse chip strokes (`#538772` as a border/text tone) — it never fills a section background or a card. Borders are hairline `#E5E5E5`. Deliberately uncolored: all diagram node boxes stay outline-only in cool neutral teals/blues/ambers rather than being reskinned into the brand accent, preserving the diagram's own internal color logic as illustration, not UI chrome.

## Typography
Display headlines run Inter 48px/500, line-height 1.05, tracking -1.2px — tight and confident, mixed mid-sentence with the italic serif accent-family (Hedvig Letters Serif) for a two-to-three-word emphasis clause per headline, never a full line. Body copy sits at Inter 18px/400 lh 1.56 for section paragraphs and Inter 16px/400 lh 1.5 for supporting headline-md text (chat prompts, list items). Labels/eyebrows use Inter 16px/600 lh 1.5, all appearing in small caps-like numbered prefixes ("01 · ", "02 · "). This is a two-family pairing: a workhorse grotesque (Inter) for all structural and UI text, interrupted only at the emotional peak of each headline by the serif italic — a classic editorial contrast device kept extremely tightly rationed.

## Layout
Content is capped at a 1300px max-width, centered, with 64px section padding stacking sections vertically in a single column at the page level. Internally, the numbered sections deploy a 3-column grid (gap 12px) for diagram/checklist triptychs, a 2-column grid (gap 32px, each item ~49% width) for asymmetric text+illustration pairings, and a 1-column stacked pair (gap 1px, two 100%-width items) for tightly-seamed panels. The full-width feature panels ("card family ×7") run edge-to-edge at 0px radius with 64px vertical padding, stacking seven times down the page as plain horizontal bands rather than boxed cards — this is a magazine/editorial layout, not a bento grid: no card ever competes for irregular spans, every row is a uniform full-bleed strip. The compact utility tiles ("card family ×6") sit in a 2×3 arrangement (rows of 96%-width items) inside `#F7F7F7` fill, 8px radius, 12px padding — small, dense, icon-led reference tiles contrasted against the airy panels around them.

## Components
- **Navbar**: edge-to-edge square bar spanning ~99% of viewport width (0px left inset / 15px right inset), 57px tall, 0px radius on all four corners, sticky, `#FFFFFF` fill, 13 total items (wordmark, text links, CTA). Its CTA is `#0A0A0A` fill, `#FFFFFF` text, 8px radius, 36px height — the only filled control in the bar.
- **Hero primary button**: an observed near-black (`#0A0A0A`) solid rectangle beneath the headline, white text, ~8px corner radius, sitting directly under the hero copy — this is the page's true primary action, distinct from any glass or outline control.
- **Hero secondary button**: outline/bordered variant, `#FFFFFF` fill, `#171717` text, 8px radius, 44px height, hairline inset border (`rgba(0,0,0,0.18)` + `lab(84.92 0 -0.0000119209)` inset), soft bottom inner highlight and `rgba(0,0,0,0.05) 0 1px 2px` drop — sits beside the primary as a lower-emphasis "view more" control.
- **Nav ghost links**: transparent fill, `#000000` text, 0px radius, 41px tall, no padding — ×10 across the nav/body serving as plain text links.
- **Pill tag buttons**: transparent fill, `#171717` text, full 9999px pill radius, 26px height, 4px/8px padding — used as small inline filters or breadcrumb-like tags.
- **Inline accent button**: solid `#065F46` fill, white text, 6px radius (slightly-rounded), 24px height, 4px/10px padding — the only saturated-fill control, used sparingly mid-page as a single emphasis action.
- **Diagram illustration panel** (hero, left of paired window): full-width-panel-adjacent bordered box containing a network of outline node-boxes in teal/amber/blue with dashed connector lines, depicting a data/process map; covers roughly half the hero's illustrative real estate.
- **Console/chat mockup panel** (hero right, and repeated mid-page): a macOS-style chrome window (traffic-light dots, url bar reading as a path, status dot) containing a timestamped activity log or chat thread with avatar chips, subject lines, and file-attachment rows — appears twice: once as an "orders" activity feed, once as a live chat Q&A transcript with a source-count disclosure row and input field at the bottom.
- **Stat row**: a 4-up row of oversized numeral figures (Inter, bold, black, one figure in emerald) each paired with a small icon and one line of muted caption text beneath — appears once, directly below the hero.
- **Utility tile grid** (2×3, six tiles): `#F7F7F7` fill, 8px radius, 12px padding, each holding a small paired-icon glyph and one line of label text, no body copy — a dense reference index of domains/use-cases.
- **Full-width feature panel** (×7, stacked): `#FFFFFF` fill, 0px radius, 64px vertical padding, no visible card border beyond a hairline top rule; internal anatomy is heading + checklist (checkmark icon + short line) + a diagram illustration containing roughly eight small node tiles, laid out as a two-column text/diagram split within the full-bleed strip.
- **3-column diagram triptych**: three bordered panels (hairline `#E5E5E5` border, 0px or minimal radius) each headed by a small numeral/label ("1", "2", "3"), containing a mini node-diagram and a short caption — used to compare three system-maturity levels and, later, three agent-behavior categories (execute / watch / answer), each with a bullet checklist beneath.
- **Q&A accordion list**: hairline-divided rows, each with a question in `label-md` weight and a muted answer line beneath, no visible expand icon chip beyond a small leading glyph — paired beside the live chat mockup panel.
- **Process-cycle diagram**: a circular arrangement of four pill-shaped nodes connected by a curved directional line and one dashed vertical connector, with a central solid emerald-filled callout capsule holding a fractional counter — a unique circular diagram used once in the process section.
- **Footer**: transparent background, hairline top divider, four-column layout (wordmark + tagline, then three link columns of varying counts totaling 15 links), plain text links, small monochrome social glyphs, closing with a legal line and locale tag.

## Graphics & Effects
Two edge fade gradients are used only as small horizontal scrims flanking a scrollable row or illustration edge: `linear-gradient(to left, rgba(0,0,0,0), rgb(255,255,255))` and `linear-gradient(to right, rgba(0,0,0,0), rgb(255,255,255))` — each covering roughly 0.2% of the page, a soft white fade-to-transparent at a horizontal scroll boundary, not a background treatment. Elevation is communicated almost entirely through hairline inset borders rather than drop shadows: panels use `lab(90.952 0 -0.0000119209) 0px 0px 0px 1px inset` or `oklab(0 0 0 / 0.1) 0px 0px 0px 1px inset` for a one-pixel structural outline; only the outlined secondary button carries a true soft shadow (`rgba(0,0,0,0.05) 0px 1px 2px 0px`). The console-window mockups are static chrome-bar illustrations (traffic-light dots, url text, status dot) standing in for a live product surface — no video or canvas is implied. No noise, grain, or photographic texture is present anywhere; the only "texture" is the diagrammatic node-and-line illustration style itself, rendered flat and vector-clean throughout.

## Motion
Transitions are fast and utilitarian: color/background/border/shadow/transform properties animate on a 0.1s linear timing for hover-state micro-feedback, opacity fades run at 0.18s–0.3s using `cubic-bezier(0.33, 1, 0.68, 1)` for entrances and exits, and a slower 0.2s pairing governs combined opacity+filter changes. Named keyframe animations (shiny-text, fade-scale-in, demo-pulse, demo-artifact-fadein, mo-greet, mo-hover-blink) drive small looping accents inside the diagram and console mockups — likely a pulsing node, a blinking cursor, or a shimmering text label — rather than large section transitions. Scroll-driven CSS animations are present, implying sections and diagram elements fade or scale into place as they cross the viewport, consistent with the low-density, one-section-at-a-time reveal rhythm.

## Guardrails
- Never fill a full-width section panel with color — these bands are white with hairline rules only; color stays inside chips, keywords, and the one inline accent button.
- Do not turn the navbar into a generic centered or floating bar — it is edge-to-edge, square-cornered (0px all corners), sticky, white, asymmetrically inset (0px left / 15px right).
- Do not expand the italic serif accent beyond two to three headline words — it is a punctuation device, not a heading typeface.
- Never substitute a gradient-mesh or photographic hero background — the hero stays white with diagrammatic outline illustrations as its only imagery.
- Keep the emerald accent rationed to headline clauses, one pill/inline button, and chip strokes — do not use it as a card or section fill.
- Preserve diagram nodes as outline chips in their own muted teal/amber/blue palette — do not recolor them into the brand accent.
