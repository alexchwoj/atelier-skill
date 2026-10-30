---
version: "1"
name: "Terminal Flat"
description: "Light-mode-dominant, square-cornered technical system built on Archivo display type, a single magenta accent, and monospace code surfaces, broken once by a near-black full-bleed closing band."
colors:
  background: "#FFFFFF"
  surface: "#F6F6F6"
  surface-inverse: "#0A0A0A"
  text-primary: "#0A0A0A"
  text-secondary: "#525252"
  text-tertiary: "#707070"
  border: "#E2E2E2"
  accent: "#FF1F8F"
  accent-deep: "#D60066"
  success: "#009150"
  footer-surface: "rgba(246, 246, 246, 0.6)"
typography:
  display-lg:
    fontFamily: "Archivo"
    fontSize: "68px"
    fontWeight: 800
    lineHeight: "0.92"
    letterSpacing: "-1.4px"
  headline-md:
    fontFamily: "ui-sans-serif"
    fontSize: "17px"
    fontWeight: 700
    lineHeight: "1.5"
    letterSpacing: "-0.2px"
  body-md:
    fontFamily: "ui-sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "1.55"
  label-md:
    fontFamily: "ui-sans-serif"
    fontSize: "17px"
    fontWeight: 600
    lineHeight: "1.5"
    letterSpacing: "-0.3px"
  accent-mono:
    fontFamily: "Martian Mono"
    fontWeight: 500
    role: "code snippets, terminal strings, version badges, command-line labels"
  accent-serif:
    fontFamily: "Times New Roman"
    role: "rare legacy/serif citation accent, used sparingly off the main sans system"
spacing:
  base: "8px"
  gap-sm: "12px"
  gap-md: "24px"
  gap-lg: "64px"
  section-padding: "112px"
rounded:
  control: "3px"
  control-alt: "4px"
  card: "3px"
  pill: "9999px"
components:
  navbar:
    background: "#FFFFFF"
    height: "65px"
    radius: "0px"
    items: 11
  button-nav-cta:
    background: "#0A0A0A"
    text-color: "#FFFFFF"
    radius: "0px"
    height: "36px"
  button-primary-hero:
    background: "#0C0C0C"
    text-color: "#FFFFFF"
    radius: "0px"
    height: "45px"
    padding: "12px 10px"
  button-secondary-hero:
    background: "#0C0C0C"
    text-color: "#FFFFFF"
    radius: "0px"
    height: "24px"
    padding: "3px 10px"
  button-closing-cta:
    background: "#FF1F8F"
    text-color: "#FFFFFF"
    radius: "0px"
    height: "45px"
    note: "observed solid magenta fill on the closing dark band"
  button-outline-closing:
    background: "transparent"
    text-color: "#FFFFFF"
    border: "1px solid #FFFFFF"
    radius: "0px"
    height: "45px"
  button-tab-ghost:
    background: "transparent"
    text-color: "#525252"
    radius: "4px"
    height: "41px"
    padding: "10px 14px"
  card-icon-text:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  card-tool-panel:
    background: "#FFFFFF"
    radius: "0px"
    padding: "24px"
    border: "1px solid #E2E2E2"
  card-feature-band:
    background: "transparent"
    radius: "0px"
    padding: "112px 0px"
  card-expandable-band:
    background: "transparent"
    radius: "0px"
    padding: "112px 0px"
  card-media-testimonial:
    background: "#FFFFFF"
    radius: "0px"
    padding: "0px"
  card-stdlib-grid:
    background: "#FFFFFF"
    radius: "0px"
    padding: "20px"
  footer:
    background: "rgba(246, 246, 246, 0.6)"
    radius: "0px"
    links: 22
---
# Terminal Flat
Source: https://bun.com/

## Overview
This is a flat, Swiss-leaning technical documentation aesthetic rendered almost entirely in light mode: square corners everywhere, a tight black-on-white editorial grid, and condensed heavyweight Archivo display type carrying every section header. It reads as developer-tool brutalism-lite — no shadows beyond hairline borders, no gradients beyond a near-invisible 7%-opacity wash, and a single saturated magenta reserved for the one interactive/brand moment per screen. The system trusts negative space and rule lines over elevation to create structure, then detonates that restraint once, at the very end, with a full-bleed near-black band.

## Composition
The first screen is a classic two-column hero split: left column carries an eyebrow badge, an 68px Archivo headline with one word recolored, a body paragraph, and a stacked install block with OS toggle; right column holds a tabbed benchmark panel with horizontal bar chart. Below the fold, rhythm alternates between dense comparative data (a 4-up tool grid with bursts), oversized single-column statement headlines ("one binary" type moments) paired with an interactive terminal mock, a release-notes band with a two-column fix list, a 3-up video testimonial grid with a trailing asymmetric row, and a two-column API/code-sample band followed by a 3-row stat grid. The page closes by inverting entirely to a near-black full-bleed band with light serif-weight statement type and a pink interruption, then drops into a flat light footer. The deliberate choice is maximal density of real code/data artifacts (terminal panes, benchmark bars, diff-style fix lists) over any illustrative or photographic hero imagery — this rejects a marketing-gloss hero in favor of proof-by-artifact.

## Colors
`#FFFFFF` is the dominant background at roughly 77% of rendered pixels, carrying nearly every section; `#F6F6F6` functions as a secondary surface for panels and the footer tint. Ink is layered: `#0A0A0A`/`#24211D` for primary headings and body-strong text, `#525252` for secondary/supporting copy, `#707070` for tertiary meta labels. `#E2E2E2` is the sole border/divider value, used in hairlines at 1px. The accent `#FF1F8F` (with a deeper `#D60066`/`#C41A68` register for hover/pressed) is heavily rationed — one hero word, one badge fill, bullet markers, inline code keywords, and the single solid CTA on the closing dark band — never used as a background fill at scale. `#009150` appears as an isolated success/diff-green accent inside code samples. The near-black `#180018`/`#181818` register (~8% combined of the pixel field) is reserved entirely for the terminal mockup and the closing full-bleed band — it is a deliberate tonal reversal, not a dark theme.

## Typography
Archivo 800-weight at 68px/0.92 with -1.4px tracking drives every section headline — condensed, heavy, almost poster-like, with single words recolored into the magenta accent as the system's signature move (one or two words per headline, never a whole phrase, each sized identically to its neighboring black words). Body copy runs ui-sans-serif 18px/400 at 1.55 line-height for lead paragraphs, dropping to a 16px/400 reading weight at #0A0A0A for in-card body text with #525252 for secondary lines. Labels and eyebrows use 17px/600 with tight -0.3px tracking, usually set in uppercase micro-caps. Martian Mono carries every code sample, terminal string, inline command token, and version badge — it is the functional "data" voice against Archivo's "statement" voice. A Times New Roman serif surfaces only as a rare legacy accent, not part of the working hierarchy.

## Layout
Content is capped at a 1216px max-width container with 112px vertical section padding, giving each band generous top/bottom air despite zero-radius, border-only components. Grids are strictly rectilinear: a 4-column tool-summary grid, a two-column 38/57 hero split, 50/40 and 42/46 two-column bands elsewhere for code+copy pairings, and multiple 3-column, 33/33/33 card rows for the standard-library and testimonial sections. One row breaks the 3-up testimonial rhythm with an asymmetric final pair. Full-width 112px-padded panels (5 of them, each 100%-width stacked) carry expandable/accordion-style feature lists. Gaps are consistently large — 64px between major two-column panes, 48px in tighter data pairs — reinforcing the system's preference for whitespace-as-structure over shadow-as-structure. The navbar and footer are edge-to-edge; all other content sits inside the centered container.

## Components
- **Navbar** — top of page, sticky, edge-to-edge square bar, 65px tall, full 99% viewport width (0px left inset / 15px right), all four corners 0px radius, background `#FFFFFF`. Holds a logo mark + wordmark, 11 total nav items (primary links, search field, two icon links, CTA). CTA is `#0A0A0A` fill / `#FFFFFF` text, 0px radius, 36px height — a flat rectangular button, not a pill.
- **Hero primary button** — large install/quickstart action under the headline area, observed `#0C0C0C` fill, white text, 0px radius (sharp), 45px height, 12px/10px padding — the single most emphasized control on the first screen.
- **Hero secondary button / inline tag** — smaller companion control (e.g. OS toggle pill, inline command chip), `#0C0C0C` fill, white text, 0px radius, 24px height, 3px/10px padding — a compact utility variant, not the primary.
- **Ghost tab buttons** — mid-page, ×9 in horizontal tab rows (benchmark panel tabs, workflow step tabs), transparent fill, `#525252` text, 4px radius (the system's only rounded control), 41px height, 10px/14px padding; active state swaps to solid dark fill per the tabbed panel pattern seen in the hero benchmark widget.
- **Closing CTA pair** — on the final near-black band: one solid `#FF1F8F`-filled rectangular button (observed, 0px radius) as primary, paired with one outline button (transparent fill, white 1px border, 0px radius) as secondary — the only place the accent fills a full button surface.
- **Icon + text card** — ×4 on first screen (tool badges) and ×10 mid-page, transparent background, 0px radius, 0px padding; anatomy is a small icon plus a line or two of body text, no border, no container — pure content, relies on grid gap for separation.
- **Tool summary panel** — ×6 mid-page in two rows of three (33/33/33 each row), `#FFFFFF` fill, 0px radius, 24px padding, bordered; anatomy top-to-bottom: bold heading, a small checklist/feature list, an icon, supporting body copy, and an embedded 3-tile command strip.
- **Full-width feature band** — ×5, each a 100%-width stacked panel with 112px vertical padding, transparent background, 0px radius; anatomy: eyebrow label, large Archivo heading, body copy, bulleted list, icon, and an embedded code/terminal panel occupying roughly half the band.
- **Expandable feature band** — ×3, same full-bleed 112px-padded structure as above but anatomy adds an accordion/expandable disclosure row beneath heading + list + icon + body text — used for the standard-library capability groups.
- **Media testimonial card** — ×3 in a row, `#FFFFFF` fill, 0px radius, 0px padding (edge-bleeding media); anatomy: top-bleed photo/video still with a centered circular play glyph and name/title caption overlaid in a bottom scrim, then below the media a small colored eyebrow label, a bold statement heading, body copy, and a dark rectangular link button at the base. A trailing asymmetric fourth testimonial breaks the 3-up rhythm with a larger photo-left, text-right layout.
- **Stdlib stat grid card** — ×6 in two rows of three (32/32/32 each), `#FFFFFF` fill, 0px radius, 20px padding, bordered; body-text only, functioning as compact category labels (e.g. grouped API domains).
- **Code/API sample panel** — paired beside the sidebar list in the "APIs baked in" band; monospace Martian Mono content on a pale `#F6F6F6`-toned panel, bordered, with a small top label row and inline syntax coloring (keywords, strings, function calls in distinct hues consistent with a code editor theme).
- **Footer** — base of page, full width, `rgba(246, 246, 246, 0.6)` translucent surface, 0px radius, 22 links arranged in four labeled columns beneath a logo/mark and short description block, plus a thin divider and copyright line below.

## Graphics & Effects
A near-imperceptible scrim `linear-gradient(rgba(10, 10, 10, 0.07) 0px, rgba(10, 10, 10, 0.07) 0px)` covers roughly 6.7% of the page — this is a flat near-transparent dark wash applied to a single contained element (a panel or image overlay), not a page-wide gradient treatment; the rest of the canvas remains flat solid color. A live video surface appears inside the three testimonial media cards (use a static dark still-frame with a centered white play-circle glyph as the non-animated stand-in). Elevation is communicated almost exclusively through 1px hairline borders rather than shadow — `rgba(0, 0, 0, 0.1) 0px 0px 0px 1px` and `rgba(255, 255, 255, 0.06) 0px 0px 0px 1px` are the two dominant "card" treatments, both effectively flat outline rings with no blur. One true drop shadow, `rgba(0, 0, 0, 0.12) 0px 2px 10px 0px`, appears on floating/overlay elements (dropdowns, popovers) only. A sticker/burst graphic (jagged star shape in rotating hues — pink, blue, green, yellow) decorates the top-right corner of each tool-summary card as a small label badge.

## Motion
Interactive color and border transitions run at `0.15s cubic-bezier(0.22, 1, 0.36, 1)` on color/background/border/fill properties — fast, snappy settles with no overshoot. Transform and opacity changes (hover lifts, reveals) run slightly longer at `0.2s` on the same curve. Named keyframe animations include a `loaderbar` for progress/benchmark fills, `fade-in` for scroll-triggered section entrances, `float` for subtle idle motion on illustrative marks, `marquee` for the logo strip, `blink` for the terminal cursor, and `spin-starburst` for the sticker badges. CSS scroll-driven animations drive section reveals as the page is scrolled, keeping entrances tied directly to scroll position rather than a fixed timer.

## Guardrails
- Never round the card, panel, navbar, or button corners — this system is 0px-radius square everywhere except the 3–4px ghost-tab control and true pill badges; rounding cards breaks the identity.
- Never expand the magenta accent beyond single words, bullets, badges, and one closing CTA — it must stay a rationed accent, not a background or large fill.
- Never render the hero as a dark or gradient-saturated scene — the page is light-dominant; reserve near-black full-bleed treatment exclusively for the final closing band.
- Never substitute shadow-heavy elevation for this system's border-only card language — use 1px hairline rings, not soft blurred drop shadows, on standard cards.
- Never merge the tool-summary panels, full-width feature bands, expandable bands, testimonial cards, and stdlib grid into one generic "card" — each has a distinct padding, border, and internal anatomy and must stay a separate family.
