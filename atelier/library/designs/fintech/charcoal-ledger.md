---
version: "1"
name: "Charcoal Ledger"
description: "Editorial light-mode system with a full-charcoal capsule navbar, mono-labeled outline buttons, and a repeating charcoal band rhythm rationing near-black density against a warm off-white page."
colors:
  background: "#F6F6F6"
  surface-dark: "#272727"
  surface-white: "#FFFFFF"
  text-primary: "#272727"
  text-on-dark: "#FFFFFF"
  text-muted: "#8A8A8A"
  border: "#272727"
  accent: "#E7211A"
typography:
  display-lg:
    fontFamily: "Noto Sans JP"
    fontSize: "16px"
    fontWeight: 400
  headline-md:
    fontFamily: "Roboto Mono"
    fontSize: "22px"
    fontWeight: 400
    lineHeight: "1"
  body-md:
    fontFamily: "Noto Sans JP"
    fontSize: "16px"
    fontWeight: 400
  label-md:
    fontFamily: "Noto Sans JP"
    fontSize: "28px"
    fontWeight: 500
    lineHeight: "1.2"
  label-mono:
    fontFamily: "Roboto Mono"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1"
  accent-serif:
    fontFamily: "Times New Roman"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.2"
spacing:
  base: "4px"
  gap: "24px"
  section-padding: "280px"
  section-gap-sm: "96px"
  section-gap-lg: "216px"
rounded:
  control: "2px"
  navbar: "50px"
  card: "4px"
  pill: "540px"
components:
  navbar-shell:
    background: "#FFFFFF"
    radius: "50px 50px 8px 8px"
    text-color: "#272727"
  button-outline-mono:
    background: "transparent"
    text-color: "#272727"
    radius: "0px"
    height: "29px"
    border: "1px solid #272727"
  button-hero-primary:
    background: "#FFFFFF"
    text-color: "#272727"
    radius: "6px"
    border: "observed 1px solid #272727"
  card-inverted-media:
    background: "#272727"
    radius: "4px"
    padding: "0px"
  card-full-bleed-media:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  card-cta-band:
    background: "#272727"
    radius: "0px"
    padding: "0px"
    text-color: "#FFFFFF"
---
# Charcoal Ledger
Source: https://actbe.co.jp/

## Overview
This is an editorial, Swiss-leaning light-mode system built on a near-white page (`#F6F6F6`/`#FFFFFF`) that periodically drops into full-bleed charcoal (`#272727`) bands — never true black except in the footer. Structure is carried by typography and rule lines rather than shadows or gradients: a Roboto Mono label face for eyebrows and timestamps, Noto Sans JP for all reading text, and hairline black borders standing in for elevation. The one saturated hue, `#E7211A`, is rationed to a single status dot and logo mark. It reads as a corporate-editorial hybrid: dense information bands (news, press, footer) alternate with quiet oversized-photography sections, unified by sharp 0px corners on every interactive control and mono-spaced numerals throughout.

## Composition
The first screen is almost entirely open `#F6F6F6` field with a compact floating navbar pinned top-right — a deliberate asymmetric-emphasis choice over a conventional edge-to-edge header, leaving the fold nearly empty to foreground whatever hero copy/illustration follows below the captured frame. Descending the page: a full-bleed light section, a dense 3-up case-study card row on white, a testimonial/podcast list section, a large full-bleed charcoal band with oversized layered Japanese typographic texture (a moodboard-style word-cloud), a two-column press/news list section on light gray, and a two-up charcoal CTA band immediately before the footer. Density alternates strictly: sparse hero → dense card row → sparse charcoal statement → dense list → CTA band → dense footer. This rhythm of alternating light/dark, sparse/dense bands (rather than one continuous scroll of uniform cards) is the system's core structural device.

## Colors
`#F6F6F6` and `#FFFFFF` together account for the large majority of the pixel field (~61% white, ~16% near-white) and serve as the page and card-media backgrounds. `#272727` (declared at 51.6% of styled area, ~15-17% of rendered pixels) is the system's true "ink black" — used for body text, borders, and as a full-surface fill on inverted cards, CTA bands, and the footer; it functions as both text-primary and a surface-dark role simultaneously. Pure `#000000` appears only in small high-contrast pockets (~14% declared, mostly the layered typographic texture band). `#E7211A` is the sole chromatic accent — seen only as a tiny bullet/dot and in the logo mark — deliberately withheld from buttons, links, and cards so the entire system otherwise reads as ink-on-paper monochrome. Secondary/muted text sits in `#8A8A8A`/`#B0B0B0` grays for timestamps and captions. Nothing else is colored: no accent fills on buttons, no tinted card backgrounds.

## Typography
Noto Sans JP 16px/400 is the workhorse body face for all paragraph and UI copy. Roboto Mono 22px/400 (lh 1) is reserved for headline/label moments needing a technical, ledger-like feel — mono numerals appear again at smaller sizes in date stamps (`2026-08-20` style) and section eyebrows (`/ Press Release`, `/ News`), reinforcing a documentation aesthetic. A Noto Sans JP 28px/500 label size marks card sub-headings and CTA-band titles (larger mono-adjacent headings like "Company"/"IR" render in this heavier weight). Times New Roman appears as a rare accent serif, likely a small quoted or stylized inline element — treat it as a signature accent face, not a body option. Hierarchy is built through weight and face-switching (mono vs. sans) far more than through size jumps, keeping most running text at a single 16px base.

## Layout
Content is organized in bands of full viewport width, not a persistent centered container — case-study cards, the charcoal texture band, and the CTA band all bleed edge to edge. The case-study row is a 3-up card grid, uniform width, tight gutters, no radius variance greater than 4px. The press/news section is a 2-column layout (2 columns, gap 56px 168px, 2 items, rows [40/40]) — Press Release and News lists side by side, each an equal-width vertical stack of dated entries. The CTA band beneath it is a 2-column, gap-0 split (rows [83/17]) — two equal charcoal panels sitting flush against each other with no gutter, each holding a heading + link. The hero-area grid measured as 2 columns with 3 items at rows [24/63 | 21] suggests an asymmetric hero-to-content transition, not a symmetric split. Card padding is uniformly 0px — all internal spacing is created by the child elements' own margins, not container padding. Section padding runs very generously at 280px, with inter-section gaps at 96/113/119/216px, giving the page a slow, deliberate scroll pace typical of Swiss/editorial pacing rather than a dense SaaS layout.

## Components
- **Navbar**: floats top-right of the hero, not edge-to-edge — a bounded rectangle with an asymmetric four-corner topology (rounded ~50px top corners, tighter ~8px bottom corners, giving it a rounded-capsule-into-card shape). Contains a logo mark (small red-accented glyph + wordmark) at top, a hairline divider, then one visible nav row ("Home" plus a hamburger icon) below — 2 rows total, compact height. Fill is solid `#FFFFFF` on the `#F6F6F6` page, sharp black hairline text, no shadow.
- **Button — mono outline (utility)**: appears mid-page as list/section "View More" links and as a boxed CTA control — transparent fill, `#272727` text and border, radius 0px (sharp), height ~29px, left padding 16px, trailing arrow glyph. This is the recurring secondary/utility action across the page, not the hero primary.
- **Button — hero primary**: the solid button seen under hero-adjacent content is an observed near-white/white filled rectangle with a thin dark border and modest ~6px corner rounding — visually the highest-contrast clickable element on its screen; distinct from the sharp-cornered 0px mono outline buttons used elsewhere.
- **Case-study card (inverted media card) ×3**: appears in the light "different industries, same method" section, arranged in a single row of 3 equal-width cards. Surface: `#272727` fill, 4px radius, 0px padding — internal anatomy top-to-bottom is a full-width photograph filling roughly two-thirds of the card, then an inverted (dark) content zone holding a small numbered/category eyebrow in muted gray, a bold white company-style label, a two-line white headline, and a small gray hashtag-style tag at the bottom.
- **Full-bleed media cards ×6**: measured on the first screen band, transparent background, 0px radius/padding, anatomy is media-top-bleed only — large uncropped photographic panels with no card chrome, functioning as an edge-to-edge image gallery/rail rather than bordered cards.
- **Full-width panel cards ×2 (with list)**: found near the page end, transparent, 0px radius/padding; anatomy is a full-width panel containing a heading, an icon, a checklist/list block, and body text — likely a value-proposition or capability panel stacked vertically.
- **List-row card family ×3**: near the page end, transparent, anatomy is a heading followed by rows at [100 | 100 | 100]% width — full-width stacked list rows (e.g., the Podcast/YouTube/Tech Blog navigation list), each row spanning the full container.
- **Heading+icon+body cards ×2**: transparent, compact anatomy of heading, icon, and short body copy, likely small feature or link callouts.
- **Body-text list cards ×2**: transparent, rows at [93 | 74]% width — an intentionally uneven two-line list block (e.g., a quote or credo list) where line lengths visibly differ.
- **Press/News list panel**: two-column text list, each column an eyebrow (`/ Press Release`, `/ News`) over a hairline rule, followed by stacked dated entries (mono date stamp + sans headline), each column closed with a mono "View More →" link.
- **CTA band cards ×2**: full-width charcoal panels in a flush 2-up row (rows [83/17], no gap), each holding a large label-weight heading, a small gray sublabel, and a bottom-right "View More →" mono link — background `#272727`, text `#FFFFFF`, 0px radius.
- **Footer**: background `#272727`, holds 19 links organized into "Site Map" and "Social" label columns under mono-style section headers, plus a row of partner/certification badge logos and a copyright line — all text white/gray on charcoal, no borders between link items beyond column grouping.

## Graphics & Effects
The only measured gradient, `linear-gradient(90deg, rgb(39, 39, 39), rgb(39, 39, 39))`, is a flat charcoal-to-charcoal wash covering a tiny 0.4% sliver of the page — almost certainly a thin decorative rule or progress-style bar beneath the case-study row, not a hero background; treat backgrounds elsewhere as flat solids. Two `canvas` elements drive live rendering (likely the layered-Japanese-text moodboard band and/or a spinner); for a static rebuild, substitute a pre-rendered image of overlapping oversized gray/white kanji at varied sizes and opacities on the `#272727`/`#000000` band. Backdrop blurs of `blur(35px)` and `blur(16px)` indicate frosted-glass treatment on at least one floating panel (plausibly the navbar shell or a modal), so give the navbar a subtle translucent-blur backing even though its base fill reads solid white. No drop shadows or elevation glows are evident — depth is communicated entirely through flat color-block contrast (light section vs. charcoal section), not shadow.

## Motion
Motion is restrained and functional: color and opacity transitions run at `0.3s ease` (link/button hover state changes), a height transition uses `cubic-bezier(0.4, 0, 0, 1)` at `0.4s` for expand/collapse behavior (likely an accordion or nav disclosure), and a bespoke `--service-line-fade-start` transition at `0.8s ease` suggests a staggered line-by-line fade-in for the layered-text charcoal band as it scrolls into view. Named keyframes `loop-x1`/`loop-x2` imply an infinite horizontal marquee (probably the partner-badge row or a logo rail), `fuwafuwa` ("floaty/bobbing") suggests a gentle vertical idle animation on a decorative element, and `mediaListSpinner`/`podcastSpinner` are rotating loaders for media-list and podcast components. Overall motion character is subtle, slow, and ambient rather than snappy — no spring/overshoot easing is present anywhere in the evidence.

## Guardrails
- Do not fill the hero or any full section with a saturated gradient — backgrounds are flat `#F6F6F6`/`#FFFFFF`/`#272727` blocks; the only gradient found is a hairline-scale charcoal wash.
- Do not round the navbar into a generic full-width or fully-pill bar — it is a bounded, top-right-floating shape with asymmetric ~50px/8px corner radii.
- Do not apply the 0px sharp mono-outline button style to the hero's primary action — the primary is a separate, softer-cornered solid button.
- Do not tint cards or buttons with `#E7211A` — the red is a single-glyph accent (logo, one bullet dot) and must stay rationed to under 1% of the composition.
- Do not add drop shadows or soft elevation glows — depth comes only from flat charcoal/white contrast and hairline borders.
- Keep all list/card padding at 0px; internal spacing must come from child typography margins, not container padding.
