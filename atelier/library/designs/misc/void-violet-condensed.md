---
version: "1"
name: "Void Violet Condensed"
description: "Near-black dark-mode system carried by oversized condensed display type, a single violet accent rationed into glow fields and hairline grids, with glass-free, flat UI chrome."
colors:
  background: "#05050E"
  background-secondary: "#090611"
  surface: "transparent"
  text-primary: "#F5F3F7"
  text-secondary: "#C28AFF"
  accent: "#A765F0"
  accent-strong: "#973DF2"
  accent-line: "#A78BFA"
  status-dot: "#00FF61"
typography:
  display-lg:
    fontFamily: "Antonio"
    fontSize: "170px"
    fontWeight: 700
    lineHeight: "1"
    letterSpacing: "-5.9px"
  headline-md:
    fontFamily: "Antonio"
    fontSize: "599px"
    fontWeight: 700
    lineHeight: "1"
    letterSpacing: "-18px"
  body-md:
    fontFamily: "Inter"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: "1"
  label-mono:
    fontFamily: "Roboto Mono"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: "1"
  accent-display:
    fontFamily: "Kanit"
    fontSize: "170px"
    fontWeight: 700
    lineHeight: "1"
  accent-serif:
    fontFamily: "Times New Roman"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.4"
  accent-condensed:
    fontFamily: "Francois One"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: "1.2"
spacing:
  base: "4px"
  gap-sm: "8px"
  gap-md: "12px"
  gap-lg: "28px"
  gap-xl: "36px"
  section-padding: "10px"
rounded:
  control: "2px"
  pill: "9999px"
  pill-alt: "50px"
  card: "28px"
  card-alt: "14px"
  card-wide: "30px"
components:
  button-primary:
    background: "#9560DE"
    text-color: "#000000"
    radius: "9999px"
    height: "46px"
    shadow: "rgba(65, 30, 103, 0.85) 0px 9px 0px 0px"
  button-outline:
    background: "transparent"
    border: "1px solid #A78BFA"
    text-color: "#F5F3F7"
    radius: "9999px"
    height: "46px"
  button-nav-utility:
    background: "rgba(167, 101, 240, 0.1)"
    text-color: "#000000"
    radius: "9999px"
    height: "42px"
    padding: "12px 18px"
  pill-badge:
    background: "transparent"
    border: "1px solid #A765F0"
    text-color: "#C28AFF"
    radius: "9999px"
    height: "34px"
  chip:
    background: "#05050E"
    border: "1px solid #A78BFA"
    text-color: "#F5F3F7"
    radius: "9999px"
    height: "32px"
  card-grid-cell:
    background: "transparent"
    gradient-overlay: "linear-gradient(rgb(167, 139, 250) 1px, rgba(0, 0, 0, 0) 1px), linear-gradient(90deg, rgb(167, 139, 250) 1px, rgba(0, 0, 0, 0) 1px)"
    radius: "0px"
    padding: "0px"
  navbar:
    background: "#05050E"
    radius: "0px"
    height: "66px"
    width: "1440px"
---
# Void Violet Condensed
Source: https://piyushkataria.framer.website/

## Overview
This is a dark-mode-default system built on near-total black (`#05050E` covers ~79% of declared area, pixel-sampled at ~92% near-black) punctured by exactly one violet hue family. The identity is carried almost entirely by typography: an ultra-condensed, heavyweight grotesque (Antonio) blown up to 170px+ with aggressive negative tracking (-5.9px to -18px), stacked tight at line-height 1, so headline mass itself becomes the primary graphic element — outline-free, shadow-free, letting scale and color alone do the work. Structural chrome (nav, buttons, chips) stays flat and sharp-to-pill, never glassy, never elevated with blur. The system reads as editorial-brutalist in type handling but softened by one glowing violet radial field and a faint technical grid texture — closer to a dark engineering console than a glossy SaaS hero.

## Composition
The first screen opens with a centered pill status badge, then two stacked display lines of monumental condensed type — one in near-white, one in solid violet — broken mid-word by a small circular illustrated motif inline with the text. Below that, a thin tricolon of lowercase labels separated by bullet dots, then a two-button row (one solid filled pill, one outline pill), then a horizontal rail of small capsule tool-chips. This front-loads nearly all hero density into vertical type mass and keeps the actual interactive surface compact and low in the frame. Scrolling down, the page empties dramatically: full black or near-black fields holding only a soft centered violet radial glow crossed by a faint rectangular grid overlay — confirming the system's real mid-page rhythm is sparse, glow-anchored transition zones between content bands rather than continuous density. The deliberate choice is restraint: huge type and near-empty black fields instead of continuous card-dense scrolling — this rejects a typical bento/feature-grid-heavy portfolio in favor of type-as-hero and negative space as pacing device.

## Colors
`#05050E` is the background role, confirmed by both the largest declared area (79.4%) and the pixel field's near-black dominance (~92% including the near-identical `#000018`/`#000000` samples) — this is the true page surface, not the `#090611` secondary tone (20.3% declared, likely a secondary panel/overlay base). Violet is the single accent, carried in three registers: `#A765F0` for headline fills and outline strokes, `#973DF2`/`#9560DE` for solid button fills and darker accents, and `#C28AFF`/`#F7F2FF` for lighter label and secondary text tints. `#00FF61` appears once as a tiny status-availability dot — the only non-violet chromatic note on the page, functioning as a semantic-success signal. White (`#F5F3F7`/`#FFFFFF`) is reserved for primary headline text and body copy needing maximum contrast. Nothing else is colored: borders, dividers, and grid-texture lines all resolve to the same violet family at reduced opacity (`#A78BFA`), so the accent is rationed into exactly: headline fill, button fill, border strokes, and glow fields — never spent on body copy or backgrounds at full strength.

## Typography
Antonio is the display engine at two scales (headline name and oversized statement line), always uppercase, always condensed, always weight 700 at line-height 1 with heavy negative tracking — this is the system's loudest signature and should dominate any hero rebuild at near-viewport-width scale. Inter carries small UI labels and nav items at 14px/500 for restrained, functional text. Roboto Mono appears as a secondary accent voice — likely numerals or small tags — at 24px/400 in the violet accent-strong tone, giving the system a technical/data-label counterpoint to the display type's emotional scale. Kanit, Francois One, and Times New Roman register as minor supporting families, likely applied to isolated accent words or stylized labels rather than structural text — treat them as rare signature flourishes, not scale citizens.

## Layout
Content is bounded to a 1440px max-width stage. The navbar is a centered bounded rectangle, not edge-to-edge: 1440px wide at a viewport where that equals 75% of the viewport, with equal 240px insets left and right, 66px tall, sharp corners on all four sides (0px TL/TR/BR/BL) — a square-cornered inset bar, sticky on scroll. Spacing runs tight and small (4px, 8px, 12px) for control-level gaps, jumping to 28px/36px for section-level separation — a two-tier rhythm, not a smooth 8px scale. A measured card-grid component uses a literal 1px-line gradient grid as its fill with zero padding and zero radius — this indicates a graph-paper/technical-grid card family rather than padded content cards, reinforcing the engineering-console read. Given the sparse mid-page screens, the grid pattern present is a technical backdrop texture, not a populated content grid — expect generous full-bleed black/glow sections between any card bands.

## Components
- **Navbar**: top of page, sticky, one instance. Centered bounded rectangle (not full-bleed), 1440px wide, 66px tall, square corners all four sides (0px), background `#05050E`. Contains 5 items: 4 text nav links (one shown in an active outlined pill state) left-of-center, with a filled-outline CTA button at the far right. Logo treatment is absent/text-based — identity is carried by the hero type below, not a navbar mark.
- **Hero primary button**: appears once, hero only, directly under the eyebrow tricolon. An observed near-solid violet/lavender pill (~`#9560DE`-toned fill), full pill radius (9999px), with a crisp drop shadow `rgba(65, 30, 103, 0.85) 0px 9px 0px 0px` giving it a flat offset "pressed-block" feel rather than a soft blur — this is the single most emphasized control on the page, white/light text on a saturated violet fill.
- **Hero secondary button**: beside the primary, same row, one instance. Outline pill, transparent fill, `#A78BFA`-toned border, full pill radius (9999px), same height band as the primary — lower visual weight, no fill.
- **Nav utility button (CTA in navbar)**: top right, one instance. Measured glass-adjacent tint `rgba(167, 101, 240, 0.1)` fill, `#000000` text, radius 999px (full pill), height 42px, padding 12px 18px — this is a nav-only utility chip, not the hero primary; keep it visually quieter than the hero button.
- **Status badge**: top of hero, one instance, centered above headline. Pill shape, thin violet border, transparent/near-black fill, contains a small green status dot (`#00FF61`) plus a short violet-toned label — semantic-availability signal.
- **Tool capsule chips**: hero, one row of several (4+), horizontally arranged beneath the button pair. Small pill shapes (full radius), dark fill, thin border, each carrying a small icon plus short label — a scrolling-rail-style cluster of tool/skill tags.
- **Technical grid card**: mid-page sections, appears as a full-bleed textured field rather than a discrete card. Transparent base with a repeating 1px-line violet gradient overlay (`linear-gradient(rgb(167,139,250) 1px, transparent 1px)` crossed both axes), zero radius, zero padding — functions as a graph-paper backdrop texture under a centered glow, not a bounded content container.
- **Footer**: bottom of page, one instance, transparent background, no visible link list (0 links measured) — minimal, carrying only small copyright-style text left and a status label right, both in muted violet/white tones, separated from content by a thin hairline divider.

## Graphics & Effects
The dominant mid-page graphic is a centered radial glow: `radial-gradient(50% 50% at 74% 55%, rgba(123, 75, 188, 0.3) 0%, rgba(14, 12, 25, 0.15) 42%, rgb(5, 5, 14) 76%)`, covering roughly 11% of total page area — rendered as one soft violet orb sitting within an otherwise black section, not a page-wide wash. A second, tighter and more saturated orb — `radial-gradient(circle at 52% 53%, rgb(167, 139, 250) 0%, rgba(0, 0, 0, 0) 38%)` (~8.3% of page) — sits inside or near the first, giving the glow a hot core plus a softer halo. A third radial, `radial-gradient(50% 50% at 75% 20%, rgba(123, 75, 188, 0.28) 0%, rgb(5, 5, 14) 65%)` (~3.8%), appears higher in another section, offset toward the top-right — confirming glows are positioned per-section, not one continuous hero wash. Over and around these glows sits a faint technical grid texture built from the same 1px-line gradients used in the card component — this is the signature texture layer: a sparse violet graph-paper overlay visible mainly where it crosses the glow's lit area. Shadows are used sparingly and deliberately flat: the primary button's offset block-shadow (`0px 9px 0px 0px`) reads as a hard, un-blurred "sticker" shadow rather than soft elevation; a separate multi-layer soft shadow set (`0.4px` through `10px` offsets, low-opacity blacks) exists for smaller UI elements needing conventional elevation. No blur/glass surfaces, no photographic imagery, no video — this is a vector-and-gradient system end to end.

## Motion
Framer Motion drives the interaction layer, implying entrance and scroll-triggered reveals rather than constant looping animation — consistent with the sparse, glow-anchored mid-page sections acting as scroll checkpoints. Expect headline and badge elements to fade/slide in on load, button presses to use the flat offset-shadow as a pressed/active-state cue (shadow compresses toward 0 on press rather than easing into blur), and section glows to likely fade or drift subtly on scroll entry given the scroll-indicator label present at a lower viewport. Treat motion as restrained and functional — supporting the type-first, glow-punctuated composition — not as a decorative or playful overlay.

## Guardrails
- Never fill the hero background edge-to-edge with the violet radial gradient — it is a rationed, section-scoped glow (~4–11% of page area each), surrounded by near-black.
- Never round the navbar's corners or shrink it to a floating capsule — it is a sharp-cornered, inset-but-rectangular bar at measured width, not full-bleed and not a pill.
- Never substitute the nav utility chip's `rgba(167,101,240,0.1)` glass tint for the hero primary button — the hero button is a solid, high-contrast violet fill with a flat offset shadow, a distinct and louder variant.
- Never soften the display type's tracking or weight — Antonio at 700 weight with heavy negative letter-spacing is the system's central signature and must stay condensed and tight.
- Never add blur/glassmorphism to cards or panels — all surfaces in this system are flat, sharp, or pill-radiused; depth comes from glow and flat offset shadows only.
- Never densify the mid-page sections with continuous card grids — the system's rhythm depends on large black negative-space fields between glow-anchored moments.
