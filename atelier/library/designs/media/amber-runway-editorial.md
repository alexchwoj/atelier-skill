---
version: "1"
name: "Amber Runway Editorial"
description: "A slate-and-gold documentary-marketing system: an edge-to-edge amber gradient bar crowns a photographic, full-bleed narrative built on condensed body type, oversized uppercase display headings, and archival image treatments."
colors:
  background: "#333F48"
  surface: "#F5F7FA"
  text-primary: "#F5F7FA"
  text-secondary: "#333F48"
  accent: "#D4AF35"
  accent-deep: "#CC9F2D"
  highlight-cream: "#F2E49F"
  stroke: "#1E3B8A"
typography:
  display-lg:
    fontFamily: "Roboto"
    fontSize: "62px"
    fontWeight: 400
    lineHeight: "1.1"
    letterSpacing: "-1.9px"
  headline-md:
    fontFamily: "Roboto"
    fontSize: "57px"
    fontWeight: 400
    lineHeight: "1.11"
    letterSpacing: "-1.7px"
  body-md:
    fontFamily: "Roboto Condensed"
    fontSize: "21px"
    fontWeight: 400
    lineHeight: "1.4"
  label-md:
    fontFamily: "Roboto"
    fontSize: "57px"
    fontWeight: 400
    lineHeight: "1.11"
    letterSpacing: "-1.7px"
  accent-serif:
    fontFamily: "Clarkson"
    fontWeight: 400
    style: "italic, used for pull-quote emphasis within body copy"
  label-mono:
    fontFamily: "Arial"
    fontSize: "13px"
    fontWeight: 700
    style: "uppercase bylines and dateline labels"
spacing:
  base: "11px"
  gap: "16px"
  unit-sm: "10px"
  unit-md: "32px"
  unit-lg: "63px"
  section-padding: "115px"
rounded:
  control: "50px"
  pill: "300px"
  card: "50px"
components:
  button-primary-hero:
    background: "#D4AF35"
    text-color: "#333F48"
    radius: "300px"
    height: "36px"
    padding: "11px 15px"
    hover-background: "#D4AF35"
  button-nav-cta:
    background: "#FFFFFF"
    text-color: "#333F48"
    radius: "300px"
    height: "88px"
    padding: "32px 48px"
  button-band-cta:
    background: "#D4AF35"
    text-color: "#333F48"
    radius: "300px"
    height: "83px"
    padding: "32px 48px"
  button-utility-outset:
    background: "#EFEFEF"
    text-color: "#000000"
    radius: "0px"
    height: "30px"
    padding: "1px 6px"
    border: "2px outset rgb(0, 0, 0)"
  card-fullbleed-panel:
    background: "transparent"
    radius: "0px"
    padding: "0px 0px 115.2px"
  card-nav-panel:
    background: "transparent"
    radius: "0px"
    padding: "127.812px 0px 0px"
  card-text-only:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  navbar:
    background: "#CC9F2D"
    radius: "0px 0px 0px 0px"
    height: "128px"
  footer:
    background: "#CC9F2D"
---
# Amber Runway Editorial
Source: https://gwingz.squarespace.com/

## Overview
This is a photographic, editorial marketing system — closer to Swiss-influenced typographic rigor than to app-UI convention. It is built almost entirely from full-bleed photography and rendered hero objects laid over a slate-blue-gray page body (`#333F48`), with a single warm metallic hue (`#D4AF35`/`#CC9F2D`) rationed to structural bands: the navbar, the footer, and one full-width announcement strip. There is no glassmorphism, no dark-mode-default palette, and no card-shadow language in the conventional sense — depth comes instead from image layering (a rendered gold object over a flat gray field, a screenshot pasted over a photograph) and from oversized, tightly-tracked Roboto display type set entirely in uppercase. The overall feel is nostalgic-aviation-editorial: warm archival photography, a gold/amber accent standing in for "gold wings" iconography, and a spacious, uncluttered stacking rhythm.

## Composition
The first screen opens on a full-bleed atmospheric photograph (sunset wing-through-clouds) beneath the amber navbar, establishing photography — not illustration or gradient art — as the primary hero device. Below the fold, the system alternates: a two-column text/media introduction band on the slate surface, a full-width amber announcement/press band, a full-bleed photographic band with an overlaid smaller video-thumbnail card, a full-bleed rendered 3D-object band (isolated on flat slate), and a closing full-bleed archival-photo band with vertically-set letterforms bleeding off the edges before the footer. The deliberate choice is edge-to-edge full-bleed imagery stacked in single-column rhythm rather than a contained, boxed max-width layout — this rejects a card-grid marketing template in favor of a scrapbook/press-kit sequence, which is consistent with the near-total absence of measured card radius (every card family is `0px` radius, `transparent` fill — "cards" here are really full-width photographic panels, not bounded containers).

## Colors
`#333F48` (slate charcoal-blue, ~57% of declared area and the dominant body-copy background) is the **background/surface-0** role — it is what the page reads as once past the hero photograph, matching its dominance in the pixel field's darker neutral cluster. `#FFFFFF` (21.2%) is the **on-dark text and card-surface** role, used for headline copy set over the slate. `#D4AF35`/`#CC9F2D` (gold/amber, combined ~8%) is the sole **accent/brand** hue — it is rationed strictly to the navbar bar, the footer bar, the press-announcement band, and pill-shaped buttons; it never appears as a body-text color or a large-panel fill elsewhere. `#F2E49F` (8.4%, pale cream-gold) functions as a **tint** companion to the accent, likely used in gradient transitions and hover states. `#F5F7FA` (near-white) is the **on-color / surface** token for text set on the slate ground and for the summary-block surface (`--tweak-summary-block-background-color`). `#1E3B8A` (a small navy sliver, 0.1%) is reserved as a **stroke/border** token (`--tweak-text-block-stroke-color`), an outlier accent kept for thin rule-lines, not fills. Photography itself — warm oranges, golds, and slate grays lifted directly from the sunset-wing and archival images — supplies the majority of the actual rendered pixel field (`#304848` ~33%, `#D8A830` ~18%), confirming the page's real visual weight sits in its images, not its flat UI chrome.

## Typography
Display and headline sizes share one Roboto token (57–62px, weight 400, line-height ~1.1, tight negative tracking around -1.7px to -1.9px), always set in full uppercase for section titles — this negative-tracked uppercase Roboto is the system's structural signature, not a bold weight. Body copy drops to Roboto Condensed at 20–21px/1.4, a distinctly narrower grotesque that reads as a secondary, denser voice against the wide display face — this pairing (wide uppercase display + narrow condensed body) is the core typographic contrast. An italic serif (Clarkson) interrupts body paragraphs selectively for emphasis clauses and film-title references. A small bold uppercase label face (Arial) marks datelines and bylines at the top of the press-style band.

## Layout
The page is single-column and full-bleed at the section level — no boxed 12-column marketing grid is evident; instead, measured "card" families are simply 100%-width stacked panels (rows of `[100][100][100]`, `[100][100][100][100][100]`), confirming a vertical stack of full-width photographic/text bands rather than a multi-up card grid. One finer 26-column internal grid appears twice mid-page with an 11px gap and mixed, asymmetric spans (rows like `[31][25/25][25][25][44][44]`) — this is the system's only true asymmetric/bento-like moment, used for a compact image-and-caption cluster rather than for the main flow. Section padding is generous and consistent at 115px, with a tighter 63px/32px rhythm inside content blocks and an 11px/16px micro-rhythm for inline gaps. Border radius is functionally binary: `0px` everywhere content-shaped (cards, panels, images), and `300px`/`50px` (full pill) exclusively on buttons — a hard, deliberate split between sharp editorial panels and soft pill controls.

## Components
- **Navbar**: edge-to-edge square bar, 100% viewport width, 128px tall, all four corners 0px radius (no inset, no capsule), fixed amber `#CC9F2D` fill, holding 43 total items (logo mark, ~5 text nav links, a social icon cluster, a language selector). Its CTA is a solid white pill: `#FFFFFF` fill, `#333F48` text, 300px radius, 88px tall, 32px/48px padding — the largest, most substantial button in the whole system.
- **Hero primary CTA**: an observed near-white/cream solid pill sitting under the hero photograph area is the true first-screen primary; where a gold pill button is measured on the first screen it registers small (`#D4AF35`, `#333F48` text, 300px radius, only 36px tall, 11px/15px padding) — this is a secondary/inline link-style pill, not the dominant CTA, and hovers to the same gold (no color shift, only implied state via underline/weight).
- **Press-announcement band button**: a sharp-cornered utility button (`#EFEFEF` fill, `#000000` text, 0px radius, 30px tall, 1px/6px padding, 2px outset black border) — a deliberately retro/skeuomorphic outset-bordered rectangle, visually distinct from every pill elsewhere, used once inside the amber press strip.
- **Mid-page band CTA**: a large gold pill matching the nav CTA's proportions (`#D4AF35`, `#333F48` text, 300px radius, 83px tall, 32px/48px padding) — the second-largest control in the system, anchoring a full-width amber content band.
- **Full-bleed photographic panels (×3, ×5 families)**: appear as the body's primary content type — one per section, stacked full-width (`rows [100][100][100]` and `[100][100][100][100][100]`), transparent/`0px`-radius "cards" whose real fill is a top-bleeding photograph or rendered 3D object followed by body text beneath; anatomy top-to-bottom is media-full-bleed → caption/body-text block, no borders or shadows.
- **Compact asymmetric image cluster**: the 26-column mixed-span grid (`[31][25/25][25][25][44][44]`) — a small gallery of unevenly sized photographic tiles at 11px gaps, the system's only bento-like moment, used for a supplementary image collage rather than primary navigation.
- **Footer**: full-width amber `#CC9F2D` bar matching the navbar's fill, holding a wordmark label and 6 social/utility links plus a contact-email text string, no card structure, sharp corners throughout.

## Graphics & Effects
The only measured gradient, `linear-gradient(rgb(245, 247, 250), rgba(0, 0, 0, 0))`, is a small scrim (1.1% of page area) — a soft near-white-to-transparent fade used behind or beneath a text block for legibility, not a page-wide aurora wash; the visible amber-to-cream diagonal in the navbar bar is a separate, unmeasured gradient fill local to that 128px strip only. Photography carries the page's real texture: warm sunset cloud grain, archival scrapbook-photo grain with visible paper/binding edges, and a rendered metallic-gold 3D aircraft object with specular highlighting standing in for a signature "golden" motif. A live video surface and a canvas element are present mid-page (an embedded archival clip with a pink retro title-card thumbnail) — treat as a static image stand-in when rebuilding. Two inset/drop shadows are measured: `rgb(51, 63, 72) 0px 0px 0px 2px inset` (a thin slate ring, likely a focus/selected outline) and `rgb(51, 63, 72) 0px 12px 12px -28px` (a very tight, low-spread contact shadow, near-invisible — elevation here is minimal and understated, never a heavy card shadow). Backdrop blur values of `blur(15px)` and `blur(12px)` exist for isolated overlay panels (e.g., the video-thumbnail-over-photo composite) rather than for broad glass panels.

## Motion
Primary transitions use a slow, decelerating cinematic curve — `transform, opacity, clip-path 0.65s cubic-bezier(0.19, 1, 0.22, 1)` — for section reveals and image-panel entrances, giving a smooth, unhurried, editorial pace rather than a snappy UI feel. Fast, linear 0.1s transitions handle immediate color/background/box-shadow state swaps (hover, active). Icon fills animate at `0.17s ease-in-out`. A slightly springier `cubic-bezier(0.2, 0.6, 0.3, 1)` at 0.25s governs width/transform changes, likely on the press-band's autoplay/pause carousel control. Overall the motion language is deliberate and slow-reveal, matching the photographic, documentary tone rather than a snappy SaaS-app cadence.

## Guardrails
- Never round the "card" panels — every measured card family is 0px radius; roundness belongs only to pill buttons (300px/50px).
- Never fill the hero or full sections with the small scrim gradient (`rgb(245,247,250)→transparent`) — it is a small legibility scrim, not a page background.
- Keep the amber/gold accent confined to navbar, footer, press band, and pill buttons — do not tint body-copy panels or large photographic sections gold.
- Preserve the navbar as a square, edge-to-edge, 128px bar — never convert it to an inset, centered, or capsule nav.
- Keep uppercase, negative-tracked Roboto for display/headline roles and reserve Roboto Condensed for body copy; don't merge the two families.
- Do not invent card shadows or glass blur on the photographic panels — depth comes from image layering, not elevation styling.
