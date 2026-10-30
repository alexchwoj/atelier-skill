---
version: "1"
name: "Terminal Transit Noir"
description: "Near-black blueprint-dark system with hairline-bordered schematic panels, a periwinkle ink accent, and a monospace label voice stitched into a sans display hierarchy."
colors:
  background: "#070F0F"
  surface: "#000000"
  text-primary: "#CDD8FC"
  text-secondary: "#4E5764"
  accent: "#A8AAE5"
  border: "#505368"
  border-strong: "#8090C4"
  muted-tint: "#989EBB"
typography:
  display-lg:
    fontFamily: "volksans"
    fontSize: "54px"
    fontWeight: 500
    lineHeight: "1.04"
    letterSpacing: "-0.9px"
  headline-md:
    fontFamily: "volksans"
    fontSize: "40px"
    fontWeight: 500
    lineHeight: "1.1"
  body-md:
    fontFamily: "volksans"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: "1.32"
  label-md:
    fontFamily: "volksans"
    fontSize: "40px"
    fontWeight: 500
    lineHeight: "1"
    letterSpacing: "-0.7px"
  body-base:
    fontFamily: "volksans"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
  accent-mono:
    fontFamily: "decimaMono"
    fontWeight: 400
    role: "eyebrow labels, section tags, data readouts, ASCII glyphs"
spacing:
  base: "8px"
  gap: "16px"
  micro-gap: "4px"
  padding-md: "20px"
  section-padding: "40px"
rounded:
  control: "4px"
  button-md: "8px"
  button-lg: "10px"
  card: "12px"
  pill: "9999px"
components:
  button-primary:
    background: "#CDD8FC"
    text-color: "#000000"
    radius: "8px"
    height: "40px"
    padding: "8px 32px"
    note: "observed solid periwinkle-white fill, high-contrast, hero first-screen CTA"
  button-secondary-solid:
    background: "#CDD8FC"
    text-color: "#000000"
    radius: "10px"
    height: "51px"
    padding: "13px 16px 14px"
  button-ghost:
    background: "transparent"
    text-color: "#CDD8FC"
    radius: "4px"
    height: "28px"
    padding: "4px 8px"
  button-nav-capsule:
    background: "#CDD8FC"
    text-color: "#CDD8FC"
    radius: "3.35544e7px"
    height: "24px"
    padding: "0px"
  card-schematic-panel:
    background: "transparent"
    radius: "0px"
    padding: "0px"
    border: "1px solid #505368"
  card-stat-tile:
    background: "transparent"
    radius: "0px"
    padding: "16px"
    border: "1px solid #505368"
  card-media-bleed:
    background: "transparent"
    radius: "0px"
    padding: "0px"
---
# Terminal Transit Noir
Source: https://www.torontotechweek.com/

## Overview
This is a dark-mode-default, engineering-blueprint aesthetic: a near-black ink field (`#070F0F`) ruled with hairline borders into schematic panels, as if a transit map had been redrawn as a web page. The visual vocabulary is closer to Swiss/International rigor than to a soft SaaS gradient hero — sharp rectangular panels, circular "node" junctions connecting sections with thin vertical rules, and a monospace label voice (decimaMono) stamped over a rounder sans display face (volksans). Color is almost entirely withheld: everything sits in near-black and periwinkle-tinted off-white ink, with a single cool accent (`#A8AAE5`/`#CDD8FC`) doing all expressive work, and a thin illustrated line-art skyline doing the rest.

## Composition
The first screen opens on a centered square-cornered navbar, a large centered headline, a short support line, and a bordered modal-style panel offering a single email field and one solid action — an interruption placed directly in the hero rather than deferred. Below the fold, the rhythm is a long single-column schematic: a bordered stat panel (a 5-up row of numeral tiles) feeds via a thin vertical connector into a circular icon node (a line-art landmark), which feeds into another bordered text panel, which feeds into a two-column split (long-form text panel left, a nested sponsor/partner panel right), then into a video-card module with a captioned side panel, then another node, a closing text panel, and a final oversized sign-off headline before the footer. The deliberate choice is this rail-and-node connective tissue — vertical hairlines with circular junctions literally wiring every section together like a circuit or subway line — rejecting the more common whitespace-only section break in favor of a visible, diagrammatic spine.

## Colors
The pixel field is dominated by a deep teal-black (`#001818`/`#070F0F`, ~85% combined), establishing the background role unambiguously as near-black, not pure black — a cold, almost CRT-phosphor undertone rather than neutral charcoal. Text ink is `#CDD8FC`, a pale periwinkle-white used for all headings and primary copy, giving the whole page a faint cool cast instead of true white. The single accent, `#A8AAE5`/`#CDD8FC` at full saturation, is rationed to interactive fills only: the navbar capsule CTA, primary buttons, and a handful of icon-node outlines — never washed across backgrounds or used decoratively. Borders run a muted slate-blue (`#505368`, stepping up to `#8090C4` on emphasis), tracing every panel edge. Secondary/meta text drops to `#4E5764`, a dim blue-gray, and pure `#000000` appears as both deep shadow pockets and declared ink on light-filled buttons (text-on-accent). Warm color is entirely absent except inside embedded photographic and illustrated assets (a red-accented transit livery, sponsor logo marks) — the system itself never introduces hue beyond its one cool accent.

## Typography
volksans is the workhorse: a 54px/500/-0.9px tracking display for hero headlines, dropping to 40px/500 for mid-page section headlines and numeral labels, down to a 20px/400 body-md for supporting hero copy and a tighter 16px/400 body-base for long-form paragraphs. decimaMono is the signature accent — small all-caps tracked labels ("eyebrow" tags above panels, sponsor-tier labels, button microcopy) that read as terminal/data readouts against the rounder sans, plus hand-drawn ASCII line-art used as literal decorative glyphs within panels. The hierarchy is strict: oversized sans display for emotional beats, monospace for anything structural or data-like (stats, tags, navigation), body sans kept narrow and legible underneath.

## Layout
Content is held to a 1200px max-width, centered, with panels nested inside via consistent hairline borders rather than shadow-implied elevation — flat, bordered, blueprint-style surfaces throughout (card radius measured at 0px across every mid-page family). The navbar is a centered, bounded, square-cornered bar — not edge-to-edge: 70px tall, 1280px wide at this viewport (roughly two-thirds of viewport width, ~313–327px side insets), all four corners at 0px radius, sticky positioned with a transparent fill. The stat row is a 5-column grid, 6px gap, equal-width tiles (rows [20/20/20/20/20]) — a tight, dense, uniform card grid, not bento. A separate 3-column grid runs asymmetric rows [45/10/45], used for the sponsor-tier panel (wide outer columns bracketing a thin center label row). Two-column 50/50 splits (rows [100|100]) recur for text-panel/sponsor-panel and media/caption pairings. Spacing is tight and technical: 4px and 6px micro-gaps inside tile grids, 8–20px internal padding, 40px marking major section transitions — a dense, drafting-table rhythm rather than generous marketing whitespace.

## Components
- **Navbar**: centered bounded rectangle (not full-bleed), 70px tall, ~1280px wide, all corners 0px radius, sticky, transparent background, 8 nav items plus a logo mark center-set; CTA is a capsule button, `#CDD8FC` fill and text, radius `3.35544e7px` (full pill), 24px height, zero padding — the one fully rounded shape against an otherwise square-cornered system.
- **Hero primary button**: solid `#CDD8FC` fill, `#000000` text, 8px radius (slightly-rounded), 40px height, 8px/32px padding — the single highest-contrast control on the first screen, sitting beneath the headline/modal.
- **Secondary solid button**: same `#CDD8FC`/`#000000` pairing, 10px radius, taller at 51px, asymmetric 13/16/14px padding — used near the page end (closing CTA, download-style actions).
- **Ghost/ruled buttons**: transparent fill, `#CDD8FC` text, 4px radius (sharp), 28px height, 4px/8px padding — compact in-panel actions (media controls, inline links), ×5 instances mid-page.
- **Stat tile row**: 5 equal tiles in one bordered panel, each carrying a heading-weight numeral, an icon accent, and a small caption label beneath — uniform-width card grid, rows [20/20/20/20/20], zero radius, zero individual padding (padding lives on the outer panel).
- **Schematic text panel**: the recurring bordered rectangle anatomy throughout mid-page — eyebrow/heading in sans, a hairline rule, then monospace or sans body copy; zero radius, zero corner treatment, border-only separation.
- **Node connector**: circular bordered icon (line-art glyph inside), linked above and below by a single thin vertical rule — the connective-tissue component between every major section, not a card at all but a structural glyph.
- **Sponsor/partner panel**: nested bordered sub-panel with a monospace all-caps label row, then horizontal rows of grayscale logo marks grouped by tier (rows [100|100]) — logo-strip family, distinct from the text panel beside it.
- **Media card**: full-bleed video/image occupying roughly two-thirds of a bordered panel, paired with a caption column (heading + body + a ghost-style CTA) occupying the remainder — zero radius, media-top-bleed anatomy, native video controls visible.
- **Closing sign-off block**: oversized two-line display headline, a shorter support line beneath, and one centered solid button — the page's final panel before footer, acting as a terminal CTA band.
- **Footer**: transparent background, 4 text links plus a small row of social glyph icons, bottom-aligned, no border treatment distinguishing it from the page field above.

## Graphics & Effects
A looping video is embedded natively inside the media-card component (use a static frame or gradient card as a stand-in when rebuilding offline). Elevation is almost entirely absent — card radii measure 0px and shadows are near-zero (`rgba(0,0,0,0) ...` stacks) except two soft utility shadows (`rgba(0,0,0,0.1) 0px 4px 6px -1px, rgba(0,0,0,0.1) 0px 2px 4px -2px` and a deeper `0px 10px 15px -3px / 0px 4px 6px -4px` pair) reserved for isolated floating elements like the toggle control, not for the panels themselves. A `blur(8px)` backdrop-filter and a lighter `blur(1px)` appear on small overlay/toggle surfaces. A fine dotted-line, circuit-node texture — small hollow circles at panel corners and along connector rails — reads as a deliberate blueprint/schematic grain across the page, alongside flat line-art illustration (a landmark glyph, a transit-car diagram) rendered in accent-colored strokes against the dark field.

## Motion
Interaction transitions are fast and utilitarian: `0.15s`–`0.2s cubic-bezier(0.4, 0, 0.2, 1)` on color/background/border/fill/stroke properties (hover and focus state shifts), with a slower `0.4s ease-in-out` reserved for stroke-drawing effects. Named keyframe animations — `spin-slow`, `blink`, `flickerColor`, `flickerOpacity`, `lineWave`, `waveform-draw` — point to a terminal/CRT motion character: blinking cursor-like accents, flickering label states, and a waveform or line being progressively drawn, reinforcing the schematic/diagnostic read rather than soft marketing easing.

## Guardrails
- Never fill the hero background with a full-frame saturated gradient — the field stays near-black (`#070F0F`/`#001818`) with accent rationed to text, borders, and the one capsule/solid button.
- Never round the navbar into a generic full-width bar — it is a centered, inset, square-cornered rectangle at ~70px tall.
- Never give mid-page cards a soft radius or shadow — this system's panels are hard-edged (0px radius), hairline-bordered, and flat.
- Never substitute the ghost/nav-capsule button values for the hero primary — the hero CTA is the solid 8px-radius, 40px-tall, black-on-periwinkle button.
- Never drop the monospace label voice — eyebrows, tags, and stat captions must stay in the mono accent face, not the sans display.
- Never add warm hues to the base palette — color stays cool (periwinkle/slate-blue) with warmth only inside embedded photographic/logo assets.
