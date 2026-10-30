---
version: "1"
name: "Blueprint Moss"
description: "Warm off-white light system with a technical mono label voice, a forest-moss accent rationed to CTAs and icons, and an ASCII/dot-matrix textured hero over a light field that inverts to charcoal only at section bookends."
colors:
  background: "#F6F6F4"
  surface: "#EDEFEA"
  surface-alt: "#F1F1EA"
  text-primary: "#050605"
  text-secondary: "#474A48"
  accent: "#48816D"
  inverse-background: "#181818"
  inverse-text: "#FFFFFF"
typography:
  headline-md:
    fontFamily: "Geist Mono"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: "1.43"
    letterSpacing: "-0.7px"
  body-md:
    fontFamily: "Switzer"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
  label-md:
    fontFamily: "Switzer"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: "1.5"
  label-mono:
    fontFamily: "Geist Mono"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: "1.43"
    letterSpacing: "-0.7px"
    textTransform: "uppercase"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "48px"
  section-gap: "676px"
rounded:
  control: "6px"
  card: "16px"
  chip: "4px"
  pill: "9999px"
components:
  button-primary-dark:
    background: "#050605"
    text-color: "#F6F6F4"
    radius: "6px"
    height: "50px"
    padding: "20px 32px"
    hover-background: "rgba(5, 6, 5, 0.8)"
  button-accent:
    background: "#48816D"
    text-color: "#FFFFFF"
    radius: "6px"
    height: "50px"
    padding: "20px 32px"
    shadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
    hover-background: "#050605"
    hover-text-color: "#F6F6F4"
  button-white-utility:
    background: "#FFFFFF"
    text-color: "#050605"
    radius: "16px"
    height: "64px"
    padding: "8px"
  button-glass-nav:
    background: "rgba(255, 255, 255, 0.25)"
    backdrop-filter: "blur(12px)"
    text-color: "#050605"
    radius: "6px"
    height: "50px"
    padding: "20px 32px"
    border: "1px solid color(srgb 0.0196078 0.0227451 0.0203922 / 0.2)"
    shadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px"
  card-panel-row:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  card-media-top:
    background: "#F1F1EA"
    radius: "0px"
    padding: "0px"
  card-graph-paper:
    background: "#EDEFEA"
    gradient-fill: "repeating-linear-gradient(0deg, rgb(213, 220, 202), rgb(213, 220, 202) 7px, rgba(0, 0, 0, 0) 7px, rgba(0, 0, 0, 0) 10px, rgb(213, 220, 202) 10px), repeating-linear-gradient(90deg, rgb(213, 220, 202), rgb(213, 220, 202) 7px, rgba(0, 0, 0, 0) 7px, rgba(0, 0, 0, 0) 10px, rgb(213, 220, 202) 10px), repeating-linear-gradient(rgb(213, 220, 202), rgb(213, 220, 202) 7px, rgba(0, 0, 0, 0) 7px, rgba(0, 0, 0, 0) 10px, rgb(213, 220, 202) 10px), repeating-linear-gradient(270deg, rgb(213, 220, 202), rgb(213, 220, 202) 7px, rgba(0, 0, 0, 0) 7px, rgba(0, 0, 0, 0) 10px, rgb(213, 220, 202) 10px)"
    radius: "4px"
    padding: "0px"
---
# Blueprint Moss
Source: https://www.nomic.ai/

## Overview
This is a light-mode-default, technical-editorial system built on a warm off-white field (#F6F6F4) rather than pure white, paired with a Geist Mono label voice for all eyebrows and buttons — a deliberate nod to engineering/CAD culture. The aesthetic sits between Swiss/International (strict left-aligned headline blocks, hairline-dashed card borders, generous negative space) and a restrained bento-adjacent card system for feature proof. One accent, a deep forest moss (#48816D), is rationed to a small set of CTAs and icon strokes against an otherwise monochrome ink-on-off-white palette. The system inverts fully to a near-black surface (#181818) only at the very top (announcement bar) and the very bottom (closing CTA band), bookending the page like matte covers on a light interior.

## Composition
The first screen opens on the off-white field with a slim inverted announcement strip, a transparent sticky navbar, and a large ASCII/dot-matrix textured illustration occupying the lower two-thirds — headline and subhead are notably absent from the immediate hero capture, letting the technical texture carry the first impression alone. Scrolling reveals a strict problem/solution rhythm: a centered mono eyebrow + serif-weight sans headline pair, followed by a 3-up card row of icon+heading+body, then a solution restatement of the same eyebrow/headline pattern. Mid-page shifts to alternating proof panels — a two-column split (copy left, device-style diagram right, oversized numeral far right) repeated as a vertical stack, each row separated by hairline dashed borders rather than shadows. The page closes on a centered logo-strip integrations band on off-white, then hard-cuts to the black closing CTA. The deliberate choice is austerity over density: single-column centered headlines with wide measure, large vertical gaps (676px between major sections), and dashed-border card seams instead of shadow/elevation — rejecting a denser, shadow-heavy SaaS-card convention in favor of a drafting-table, blueprint-grid restraint.

## Colors
`#F6F6F4` is the dominant page background (~65% of pixels, confirmed by the near-white pixel-field reading), a warm off-white rather than clinical white — white itself (#FFFFFF) is reserved for a small utility button and card media grounds. `#EDEFEA` and `#F1F1EA` are the two card-surface tints, barely darker than the page, used to differentiate panels without shadow. `#181818` is the inverse background used only at the top strip and bottom CTA band (~13% of pixels), never mid-page. Ink is `#050605` near-black, not pure black, for headlines and the dark button fill; `#474A48` is the secondary/body-muted tone. The single accent `#48816D`, a muted forest moss, is rationed to: the nav/hero CTA fill, icon strokes in the 3-up problem cards, and the graph-paper card border tint (#D5DCCA is its pale desaturated echo used in the repeating-gradient "grid paper" texture). Borders are hairline `#050505` at low opacity or moss at 20% alpha on glass. Nothing else is colored — data/status hues (red/orange/sky tokens) exist in the codebase but are not visible in this page's rendered chrome, meaning charts/badges elsewhere carry them, not this page's core system.

## Typography
Two families carry the whole system: Switzer for all reading text (body 16px/400/1.5, label 16px/500/1.5) and Geist Mono as the exclusive signature accent face — every eyebrow, every button label, and the top announcement bar are set in Geist Mono 14px/500, tight tracking at -0.7px, uppercase. This mono/serif-free pairing is the system's signature move: headlines are large Switzer at bold weight with tight leading for punch, body copy relaxes to 1.5 line-height for a 55–75 character measure, and the mono label is the only place tracking goes negative and letterforms go monospace — it functions like a technical stamp (drafting-tool voice) contrasting the humanist sans everywhere else.

## Layout
Content is capped at a 1440px max-width, centered, with 48px section padding and unusually large 676px gaps between major sections — the rhythm is spacious, almost editorial-slow, never dense. The 3-up problem/feature row is a 3-column grid, 32px gap, equal thirds. The integrations logo strip is a 3-column-equivalent horizontal cluster of square icon tiles. Proof panels use an asymmetric split — captured as a 6-column grid alternating 67/33 and 33/67 spans row to row — pairing a text column against a diagram/numeral column, mirroring side to side down the page (an alternating layout). Card seams are drawn with dashed hairline borders rather than corner radius or shadow (radius 0px on nearly every content card, reserving 16px only for the rounded white utility button and 4px for the graph-paper cards).

## Components
- **Navbar**: edge-to-edge square bar, 81px tall, full 1920px viewport width, 0px radius all four corners (flush rectangle, not inset or capsule), sticky, transparent background over page content. 9 items total: wordmark/logo + up to 6 text links + 2 buttons. Two right-side CTAs: a glass utility button (`rgba(255,255,255,0.25)` fill, `blur(12px)` backdrop, 1px border `color(srgb 0.0196 0.0227 0.0204 / 0.2)`, radius 6px, height 50px, padding 20px 32px, text #050605) sitting beside the accent primary button (`#48816D` fill, white text, radius 6px, height 50px, padding 20px 32px, resting shadow `rgba(0,0,0,0.05) 0px 1px 2px 0px`, hover → `#050605` background with `#F6F6F4` text).
- **Hero primary CTA**: the accent-filled pill-like rectangle beneath the inverted closing headline is the single most emphasized button on its screen — observed near-solid moss `#48816D` fill, white text, ~6px corners (matches the measured accent button token), sitting centered under a large white headline on the black inverse band. This is the true "primary" action; the glass button living in the navbar is a secondary nav utility, not this role.
- **Dark solid button**: `#050605` fill, `#F6F6F4` text, radius 6px, height 50px, padding 20px 32px, hover → `rgba(5,6,5,0.8)`. Used as the "view all" utility action mid-page (integrations band) and as a secondary dark CTA elsewhere.
- **White rounded utility button**: `#FFFFFF` fill, `#050605` text, radius 16px (noticeably rounder than the 6px family), height 64px, padding 8px — a squarer, icon-forward control distinct from the mono-label CTAs.
- **3-up problem card row** (first content band below hero): transparent background, 0px radius, no padding as a group but individually bordered by the shared dashed panel; each card: icon (line-art, moss stroke) top, bold heading, 2–3 line body copy beneath. Arranged ×3 across, equal width, 32px gutter.
- **Full-width stat/panel rows** (mid-page, ×8 stacked): transparent fill, 0px radius, 0px padding, each row spanning the full container width (75% inner content column repeated 8 times down the page) — anatomy per row: heading, small icon, supporting body line, functioning as a vertically stacked feature-detail list rather than a grid.
- **Alternating proof panel** (×2 stacked pairs, mid-page): asymmetric split per row — copy column (heading + body paragraph) opposite a diagram/device-style illustration panel with an oversized numeral statistic (e.g., a large hour-count figure) set in bold display weight to the far side; separated by dashed hairline borders, background tint `#EDEFEA`/`#F1F1EA`, 0px radius.
- **Graph-paper accent cards** (×4 + ×4, mid-page): `#EDEFEA` base with a fine cross-hatch `repeating-linear-gradient` "grid paper" texture in `rgb(213,220,202)` at 7px/10px repeat, radius 4px, no padding; anatomy is heading + short body only — used as small supporting proof tiles, distinguishable from the plain cards by their visible grid texture.
- **6-column asymmetric diagram grid** (×8 items): 0px gap, alternating 67/33 and 33/67 column spans row to row — the composition IS the alternating layout described above, each row flipping which side is wide.
- **Media/testimonial card family** (×6, mid-page): `#F1F1EA` fill, 0px radius, top-bled media (screenshot or illustration) covering roughly a third of card height, heading + body beneath; arranged in two rows of 3 (32/32/32 per row).
- **Integrations logo strip**: centered horizontal cluster of ~12 square icon tiles (white rounded 16px containers, 64px tall) beneath a centered mono eyebrow + headline + one dark CTA button; no card border, just a loose cluster on the off-white field.
- **Footer**: `#151816` (near the inverse family) background, 23 text links, presumably multi-column — the darkest surface on the page besides the closing CTA band.
- **Closing CTA band**: full-bleed inverse `#181818`-to-`#151816` gradient panel, centered mono eyebrow, large white headline, muted white/gray subhead, single accent primary button — textured with the same dot-matrix pattern as the hero.

## Graphics & Effects
The dominant textured surface — visible at both the hero and the closing CTA band — is an ASCII/dot-matrix stipple pattern rendering a skyline-like silhouette in pale moss-tinted dots over the off-white field (hero) and a matching dot pattern over near-black (closing band); this is a static/generative canvas-style texture, not a photograph, and should be rebuilt as a dot-grid raster or noise-based canvas stand-in. The closing band's actual measured fill is `linear-gradient(to right bottom in oklab, rgb(25, 29, 26) 0px, rgb(21, 24, 22) 100%)` — a subtle near-black diagonal gradient covering that one full-bleed section only (~13% of total page height), not a page-wide treatment. The four repeating-linear-gradient "graph paper" fills (`rgb(213, 220, 202)` at 7px/10px intervals, all four directions) are scoped strictly to the small accent card family, each covering under 2% of the page — a fine architectural grid-paper texture, not a background wash. Two identical media scrims (`linear-gradient(to top, oklab(0 0 0 / 0.9) 0px, oklab(0 0 0 / 0.7) 50%, oklab(0 0 0 / 0.4) 100%)`) darken the base of image/illustration panels for caption legibility. The glass nav button uses a true `blur(12px)` backdrop-filter — keep it translucent, never flatten to solid gray. Shadows throughout are nearly invisible utility shadows (`0.05` and `0.1` alpha, 1–3px spread) — this system uses border/dash separation, not elevation, as its primary depth cue.

## Motion
Interactive color and background transitions run at `0.15s` with `cubic-bezier(0.4, 0, 0.2, 1)` (button hover fills, link color shifts); broader state changes use `0.3s` on the same curve, and transform-based movement (scale/translate/rotate) uses a snappier `0.3s cubic-bezier(0, 0, 0.2, 1)` for a quick-settle feel. Named keyframes (`tab-progress`, `marquee-left`, `marquee-right`, border-draw animations `borderAnimationMobileTop/TopBot/Left`) indicate horizontally scrolling marquee rails (likely the logo strip) and animated dashed-border reveals that draw the hairline card borders progressively — reinforcing the drafting/blueprint metaphor. CSS scroll-driven animations are present, implying section reveals and border-draw effects trigger on scroll position rather than only on load.

## Guardrails
- Never fill the hero or mid-page sections with a saturated full-frame gradient — color stays off-white/near-black with moss rationed to CTAs, icons, and thin borders only.
- Do not flatten the navbar's glass button to solid gray — preserve `rgba(255,255,255,0.25)` + `blur(12px)` + hairline border.
- Do not round the content cards — panel/stat/media cards are 0px radius with dashed hairline seams; only the white utility button (16px) and graph-paper cards (4px) get corner radius.
- Do not substitute Geist Mono body copy — mono is exclusively for eyebrows, buttons, and the announcement bar; body and headlines stay in Switzer.
- Preserve the inverse black bookends (top strip, closing band) as the only two dark zones; never let mid-page sections go dark.
- Keep the alternating proof-panel split asymmetric (67/33 flipping to 33/67) — do not force it to an even 50/50 grid.
