---
version: "1"
name: "Terminal Linen"
description: "A light, paper-toned operational aesthetic pairing a bureaucratic ivory field with sharp-cornered mono labels, one dark near-black UI panel as a signature inversion, and a coral/orange accent rationed to tags and dividers."
colors:
  background: "#F1F1E6"
  surface: "#EFEDE6"
  surface-alt: "#DCDCCD"
  surface-inverse: "#181818"
  text-primary: "#000000"
  text-secondary: "#525252"
  text-tertiary: "#2B2B2B"
  border: "#DCDCCD"
  border-dark: "#2A2A2A"
  accent: "#E05E0A"
  accent-tint: "#F7C7A8"
  link: "#0000EE"
  success: "#22C55E"
typography:
  display-lg:
    fontFamily: "Geist"
    fontSize: "60px"
    fontWeight: 400
    lineHeight: "1"
    letterSpacing: "-3px"
  headline-md:
    fontFamily: "Geist"
    fontSize: "54px"
    fontWeight: 400
    lineHeight: "1.1"
    letterSpacing: "-2.7px"
  body-md:
    fontFamily: "Geist"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.4"
  label-md:
    fontFamily: "Geist Mono"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.2"
    letterSpacing: "-0.6px"
  body-fine:
    fontFamily: "Geist"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.4"
  accent-mono:
    fontFamily: "JetBrains Mono"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: "1.2"
spacing:
  base: "4px"
  gap-sm: "6px"
  gap-md: "12px"
  gap-lg: "16px"
  gap-xl: "24px"
  content-max-width: "24px"
rounded:
  sharp: "2px"
  control: "2px"
  control-alt: "3px"
  card: "4px"
  panel: "6px"
  pill: "50px"
  panel-lg: "12px"
components:
  button-primary:
    background: "#2A2A2A"
    text-color: "#F1F1E6"
    radius: "0px"
    height: "44px"
    hover-background: "#000000"
  button-outline:
    background: "transparent"
    text-color: "#2B2B2B"
    border: "1px solid #DCDCCD"
    radius: "3px"
    height: "38px"
  button-nav-cta:
    background: "transparent"
    text-color: "#0000EE"
    border: "1px solid #2B2B2B"
    radius: "0px"
    height: "39px"
  card-benefit:
    background: "#EFEDE6"
    radius: "0px"
    padding: "24px 24px 32px"
    border: "1px solid #DCDCCD"
  card-media:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  card-blog:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  panel-inverse:
    background: "#181818"
    radius: "6px"
    border: "1px solid #303030"
    shadow: "rgba(0, 0, 0, 0.35) 0px 24px 80px 0px"
---
# Terminal Linen
Source: https://p.superdesign.dev/draft/74f79eb5-2a41-4d58-9b99-560779a3af5b

## Overview
This is a light-mode-default, editorial-technical system: a paper-toned ivory field (`#F1F1E6`, ~74% of pixels, with a lighter `#EFEDE6` panel tone at ~15%) styled like a terminal manual rather than a soft SaaS marketing page. Structure is Swiss/International in spirit — hairline `#DCDCCD` borders trace every section and card into a visible grid, sharp 0px corners dominate, and a Geist Mono label face marks every eyebrow and tag in uppercase tracking. The one aesthetic swing is a dark near-black (`#181818`/`#2A2A2A`) UI-panel inversion used for hero and mid-page product screenshots, floated with a heavy soft shadow — this is the system's single moment of depth and color contrast against an otherwise flat, shadowless field. Orange (`#E05E0A`) and its pale tint (`#F7C7A8`) are the only saturated colors, rationed to small square icon tiles and thin vertical accent bars beside section eyebrows.

## Composition
The first screen opens with an edge-to-edge transparent navbar, then a left-aligned hero: a small square "BETA" tag beside a mono eyebrow line, an oversized display headline (~60px, tight -3px tracking), a short body paragraph, and one dark solid button — with the right half of the hero column left empty, a deliberate restraint that keeps the fold text-dominant rather than illustration-led. Below, a 3×2 logo grid sits in bordered cells. A thin diagonal-hatch divider strip (a repeating striped texture band, full-bleed) separates every major section — this recurs at least four times down the page and is the system's structural punctuation. Mid-page, content alternates between text (eyebrow + headline + body) and a dark inverted product-screenshot panel, then a 3-column benefit-card grid, then a 2-up blog teaser grid, then a 4-up logo/press strip, then a final dark cloud-textured CTA band with an embedded dashboard screenshot bleeding into the footer. Density is low-to-moderate: generous whitespace, single-column text blocks, and grids that never exceed 3 columns.

## Colors
`#F1F1E6` is the background — the dominant warm-ivory page field seen at ~74% pixel share, functioning like aged paper rather than clinical white. `#EFEDE6` is a very slightly deeper card/panel surface (~15% share) used for benefit cards and inset zones. `#DCDCCD` is the universal hairline border/divider color, drawing the grid seams visible throughout. `#181818` is the surface-inverse role — dark UI screenshots and the hero's absent illustration slot both anticipate this near-black panel, which appears at ~6% share as the system's sole high-contrast zone. Text ink is true `#000000` for headlines, stepping down to `#525252` and `#2B2B2B` for body and secondary copy — a three-step gray ladder, no true black body text. `#0000EE` (classic hyperlink blue) marks the navbar CTA text specifically, an intentionally raw, unstyled-link signal against the otherwise custom palette. `#E05E0A` (accent) and its tint `#F7C7A8` are rationed entirely to icon-tile backgrounds and the vertical eyebrow bars — never fills, never large regions, never buttons. `#22C55E` is reserved for a success/completed status pill inside the dark dashboard screenshot only.

## Typography
Geist is the workhorse family across display, headline, and body — a single-family system distinguished only by size and tracking, not weight (everything sits at 400). Display/headline sizes run 54–60px with aggressive negative tracking (-2.7 to -3px) and lineHeight 1–1.1, giving headlines a compressed, technical-manual weight rather than warm editorial swash. Body text drops to 15–16px at 1.4 line-height in `#525252`, a muted secondary tone that keeps body copy quiet under heavy headlines. Geist Mono at 14px with tight -0.6px tracking carries every eyebrow label, nav item, tag, and UI-chrome string (breadcrumbs, status words) in uppercase or code-like casing — this mono face is the signature accent, marking anything structural or systemic as distinct from prose. JetBrains Mono appears as a secondary code-styled face for smaller inline technical accents.

## Layout
Content is bound to a 1200px max-width container with consistent 0px outer corner treatment on all section wrappers — everything reads as bordered rectangles tessellated edge to edge. The benefit section is a 3-column grid, 12px gap, 6 cards in two rows of 3. Two 4-column numeral/stat grids appear with tighter 6px gaps and asymmetric row heights (~17%/31–33% splits), reading as compact data strips rather than card grids. The logo strip is a 3×2 bordered-cell grid; the press-mention strip below is a single row of 4. Blog teasers run 2-up. Spacing follows a tight 4/6/12/16/24px rhythm — small increments throughout, consistent with the dense, technical register. No card in the system carries its own border-radius above a few px; the grid itself, not curvature, is the organizing device.

## Components
- **Navbar**: edge-to-edge, transparent, sticky, 82px tall, spans full 1920px viewport with 0px inset and 0/0/0/0px corner radii (a true full-bleed square bar, not an inset capsule). Contains a wordmark + icon lockup at left, 3 mono-styled nav links centered/left-grouped, and one CTA at far right: text `#0000EE` on `#2B2B2B`-bordered ground, 0px radius, 39px height — styled like a raw hyperlink boxed into a button rather than a filled pill.
- **Hero primary button**: a solid dark rectangle (observed near `#2A2A2A`/near-black fill, cream/white text, ~0–4px corners) positioned directly under the hero paragraph — the single highest-contrast, most-emphasized control on the first screen. This is distinct from the navbar's outline-link CTA and from the secondary bordered "Let's Talk"-style button seen mid-page.
- **Button — outline/secondary**: transparent fill, `#DCDCCD`-toned hairline border, ~3px radius, ~38–39px height; appears beside section headlines mid-page as a lighter-weight secondary action.
- **Button — nav CTA**: see navbar entry; 0px radius, blue link-colored text, dark border, 39px height.
- **Benefit card ×6** (3-column grid, 2 rows of 3): `#EFEDE6` fill, 0px radius, hairline `#DCDCCD` border, ~24px padding. Anatomy top-to-bottom: a small square icon tile (pale coral `#F7C7A8` background with a black linework glyph, ~40px), a headline (~18–20px, dark), and a 1–2 line secondary-gray body sentence. No CTA inside the card.
- **Dark UI/dashboard panel** (mid-page product visual, ×2 instances — one under "designed for modern complexity," one in the final CTA band): near-black `#181818` fill, ~6px radius, `rgba(0,0,0,0.35) 0px 24px 80px 0px` drop shadow, floated over the ivory field with photographic/noise texture bleeding at its top edge. Internal anatomy: breadcrumb-style mono path label, a bold white headline row, a horizontal tab bar (active tab underlined), and below it either a task/approval list with colored status badges or a data table with status pills (`Completed` green, `Running` amber), avatar circles, and duration/trigger columns in mono figures.
- **Media + heading + body card ×2** (mid-page, transparent, 0px radius/padding): a top-bleed image or screenshot filling roughly 60–70% of the card height, followed by a headline and one line of dated metadata below — used for blog/editorial teasers.
- **Tile-grid card ×2** ("contains-3-tiles" anatomy, transparent, 0px radius/padding): a card wrapper housing three smaller sub-tiles in a row, used for compact feature or stat breakdowns.
- **Logo strip cards** (two grids of 3×2 and 4×1, transparent cells, 0px radius, hairline borders): each cell centers one grayscale wordmark/logo, uniform height, no padding beyond centering.
- **Tag/eyebrow chip**: small square-cornered `#000` or dark-bordered chip (e.g. "BETA") paired inline with a mono all-caps label string; 0px–2px radius.
- **Footer**: `#F1F1E6` background, 4-column layout — wordmark + description at left, then three link columns (8 links total), all mono/sans mixed labels, hairline top border, plain-text copyright line at the very bottom.

## Graphics & Effects
The diagonal-hatch striped band (a repeating light-on-ivory texture strip, full-bleed, ~40–80px tall) recurs as the section divider at least four times down the page — it is a textile/paper texture, not a gradient, and covers only the thin horizontal strip between sections, never a full section background. The final CTA band carries a soft cloud/noise photographic texture bleeding behind its headline — a muted grayscale wash covering roughly the top half of that section only, functioning as atmospheric texture rather than a color gradient. Live/interactive surfaces (one `video` element and five `canvas` elements) sit inside the dark UI panels; treat each as a static dark screenshot with light UI chrome (tables, tabs, status pills) as the rebuild stand-in. Elevation is expressed once, decisively: `rgba(0, 0, 0, 0.35) 0px 24px 80px 0px` and its siblings (`0px 20px 50px 0px`, `0px 20px 60px 0px`) lift the dark panels off the ivory field with large, soft, low-opacity shadows — no other element in the system carries a shadow. All logo marks render in flat grayscale, desaturated against the warm background.

## Motion
Interaction motion is quick and utilitarian: color and underline transitions run at `0.3s` on `cubic-bezier(0.01, 0.8, 0.5, 1)` for link/text states, a fast-out, gentle-settle curve suited to a technical/terminal feel rather than a bouncy one. Background hover states use a plain `background 0.2s ease`; opacity reveals fire fast at `0.1s ease-in`; a `width 0.04s linear` drives near-instant progress-style fills (consistent with the dashboard's progress indicators). `pulse` keyframes animate status/loading indicators inside the dark panels; a `__framer-loading-spin` keyframe drives a small spinner glyph beside mono labels. Framer Motion and Lenis power scroll easing and reveal choreography — expect section content to fade/slide in on scroll rather than animate continuously.

## Guardrails
- Never fill the hero or full page with a saturated gradient — orange stays rationed to small icon tiles and accent bars; the field is ivory, not color.
- Do not round the sharp 0px-cornered cards, navbar, or buttons into soft 12px+ card radii — the system's identity is squared, bordered rectangles, with only the dark UI panel and a few small controls carrying any radius at all.
- Keep the navbar edge-to-edge and transparent — do not convert it into an inset, centered, or pill-shaped bar.
- Reserve the near-black panel treatment strictly for UI/dashboard screenshots; do not apply it to text sections or cards.
- Do not replace the muted mono-label eyebrow system with a sans-serif or colored badge — the Geist Mono uppercase tag is the system's structural signature.
- Do not add shadows to benefit cards, logo cells, or buttons — shadow is reserved exclusively for the dark floating panels.
