---
version: "1"
name: "Warm paper editorial"
description: "A cream-paper, ink-black editorial system pairing a bold grotesque display with a serif for long-form voice, rationed with a single near-black content band and a clay accent held in reserve."
colors:
  background: "#F0EEE6"
  surface: "#E3DACC"
  surface-dark: "#141413"
  text-primary: "#141413"
  text-inverse: "#FAF9F5"
  text-muted: "#B0AEA5"
  link-hover: "#5E5D59"
  border: "#141414"
  accent-clay: "#D97757"
typography:
  display-lg:
    fontFamily: "Anthropic Sans"
    fontSize: "64px"
    fontWeight: 700
    lineHeight: "1.1"
  headline-md:
    fontFamily: "Anthropic Serif"
    fontSize: "64px"
    fontWeight: 400
    lineHeight: "1.1"
  body-md:
    fontFamily: "Anthropic Serif"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: "1.4"
  label-md:
    fontFamily: "Anthropic Sans"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: "1.3"
  accent-mono:
    fontFamily: "Anthropic Mono"
    fontWeight: 400
spacing:
  base: "8px"
  gap: "32px"
  tight: "4px"
  section-padding: "32px"
rounded:
  control: "8px"
  card: "16px"
  band: "24px"
  square: "8px"
components:
  button-nav-utility:
    background: "transparent"
    text-color: "#141413"
    radius: "0px"
    height: "69px"
    padding: "22.4px 12px"
  button-nav-cta:
    background: "#141413"
    text-color: "#FAF9F5"
    radius: "8px"
    height: "40px"
  button-primary-observed:
    background: "#FAF9F5"
    text-color: "#141413"
    radius: "6px"
    height: "40px"
  button-dark-fill:
    background: "#141413"
    text-color: "#FAF9F5"
    radius: "8px"
    height: "40px"
  card-release:
    background: "#E3DACC"
    radius: "0px"
    padding: "0px"
  card-editorial-row:
    background: "transparent"
    radius: "0px"
    padding: "0px"
    border-bottom: "1px solid #141414"
  band-dark-feature:
    background: "#141413"
    radius: "24px"
    padding: "0px"
---
# Warm paper editorial
Source: https://www.anthropic.com/

## Overview
This is a minimalist, editorial system built on paper-warm neutrals rather than pure white or dark-mode-default black. The identity is carried by typographic contrast: a heavy grotesque sans for display headlines against a classic serif for supporting voice and one large mid-page statement. Corners are held to two extremes — hard 0px squares on nearly every card and row, and a single soft 24px radius reserved for the one full-bleed near-black band. Color is almost entirely achromatic (ink on cream); a clay hue exists in the token set but is not visible as a rendered surface in these views, confirming it is a rationed, occasional accent rather than a structural color.

## Composition
The first screen opens on the cream page background with a left-aligned, three-line bold sans headline whose middle words carry an underline treatment, paired to its right with a shorter serif support paragraph — an asymmetric two-column hero split (headline heavier and wider on the left, commentary lighter and narrower on the right). Immediately below, the page's one deliberate contrast move: a full-bleed, rounded-corner near-black band interrupting the cream field, centering a large serif statement and a small pill-shaped button. Scrolling further, the system returns to cream and shifts into dense editorial list mode: a three-up card row of releases, then a two-column band pairing a short serif statement against a stacked list of ruled rows, closing in a near-black footer. This rejects a conventional alternating image/text marketing scroll in favor of a text-and-list-driven, publication-like rhythm — there is no hero product screenshot or illustration anywhere in the sampled scroll.

## Colors
`#F0EEE6` is the dominant page background (measured ~60% declared area, confirmed by the ~47% near-white pixel-field reading), functioning as the paper surface for nearly the entire scroll. `#141413` is the primary ink — used for body/heading text on cream AND as a full surface fill for the mid-page feature band and the footer (pixel-field ~41% dark), making near-black the system's second structural color, not just a text tone. `#E3DACC` is a secondary warm-cream surface (~5.5% area) used to lift the release cards a half-step above the page. `#FAF9F5` is the off-white ink used for text sitting on the dark surfaces (headline in the dark band, footer logo). `#B0AEA5` (agate) is the muted/secondary text tone for metadata rows. `#D97757` (clay) exists as a declared swatch token but is not present as visible surface color in this scroll — treat it as reserved brand accent, not a rendered UI color. Borders are near-black hairlines (`#141414`) used flat, without shadow, to rule list rows apart.

## Typography
Two families carry the entire hierarchy, deliberately unpaired in style: Anthropic Sans is bold/heavy and used for the largest display headline (64px/700, lh 1.1) with an underline device on emphasized words, and again at label weight (24px/600) for small caps-style metadata labels (DATE, CATEGORY). Anthropic Serif carries the voice register — a 64px/400 statement in the dark band, and 24px/400 body copy elsewhere — giving the page a bookish, editorial pause against the sans's structural bluntness. Body reading mode (char-weighted) trues to 20px/400 serif at `#141413`. Anthropic Mono is present in the family set as a reserved accent face, not visibly used in the sampled sections. Metadata labels (DATE, CATEGORY, READ ANNOUNCEMENT) are consistently small, sans, uppercase-styled, and set at reduced opacity against agate.

## Layout
Content is capped at a 1272px max-width, centered on the cream field. The primary release-card row is a 12-column grid, 32px gap, 3 equal items per row (rows [32/32/32]) — a uniform card grid, not bento. A secondary content band uses the same 12-column/32px-gap grid but splits 2 items asymmetrically (rows [32/66]) — a fixed+fluid pairing of a short statement column against a wider list column. A separate 4-column, 32px-gap grid of 4 equal items (rows [22/22/22/22]) appears for compact stat/label rows. List-style card families repeat rows of two or three full-width (100%) items stacked vertically rather than side-by-side, consistent with the ruled, publication-list treatment seen in the mid-to-late scroll. Nearly every card and row uses 0px radius and 0px padding, relying on ruled borders and generous vertical spacing (32px/8px/4px scale) rather than boxed containers for separation. The one exception is the dark feature band and its internal pill CTA, which carry the system's only visible rounding (24px band, ~pill button).

## Components
- **Navbar**: fixed at top of page (not confirmed sticky-fixed offset), 68px tall, background `#F0EEE6`, 35 total link items across a logo mark, primary nav labels, a chevron-caret dropdown, and a CTA cluster. Nav link buttons are transparent, radius 0px, height 69px, padding `22.4px 12px`, text `#141413` — flat text-only utility buttons, no fill or border. Beside them sits a solid dark CTA button (`#141413` fill, off-white text, small pill/rounded-rect) with a second smaller dark chevron-only button immediately to its right acting as a secondary/expand control. Logo is a bold wordmark in Anthropic Sans, all-caps, with a stylized backslash character replacing one letterform.
- **Hero primary button**: an observed near-white/cream solid pill (~6px corners, small height ~40px) centered inside the dark feature band beneath the serif statement — this is the single most emphasized action on the page, floating on the near-black band rather than on the cream hero. It is a distinct variant from the flat navbar buttons and must not be built with their transparent/0px spec.
- **Dark feature band** (first content band below hero): one full-bleed rounded rectangle (`24px` radius) filling `#141413`, containing a centered large serif headline, a short centered sans/serif support line beneath it, and the pill CTA — no image or icon, pure typographic centerpiece.
- **Release card row** (×3, 12-col grid, row [32/32/32]): background `#E3DACC`, radius 0px, padding 0px. Anatomy top-to-bottom: bold sans heading, serif body description, an inline text link with trailing arrow glyph, a ruled metadata block (DATE row, CATEGORY row, each a label/value pair separated by hairline borders), and a bottom dark pill button with trailing arrow icon. No image or icon media — text-and-metadata only.
- **Icon+list card family** (×3, mid-page): transparent background, 0px radius/padding, anatomy: heading, small icon, body text, bullet/checklist, arranged as two stacked tiles per card — used for a capability/feature explainer band.
- **Two-tile summary card family** (×4, near page end): transparent, 0px radius/padding, anatomy: heading, list, body text, two tiles per card — a denser variant of the icon-list family without the icon.
- **Ruled editorial list rows** (×3 and ×2 variants, near page end): transparent background, 0px radius/padding, full-width (100%) stacked rows each pairing a heading/body against a right-aligned category label, separated by hairline `#141414` borders — this is the "Latest releases"-adjacent list pattern of link + category pairs.
- **Compact list card** (×2, first screen): transparent, 0px radius, padding `16px 0px 0px`, containing a tight list occupying ~81% row width — likely the underlined-word emphasis list inside the hero headline treatment.
- **Footer**: full-bleed `#141413` band, no radius, containing a small off-white logo mark and 90 total links organized into labeled columns (Products, Solutions, Resources, Company, Programs, Terms and policies, Claude Platform, Models) — dense multi-column sitemap list, text set small and cool-toned against the dark fill, no dividers between columns beyond whitespace.

## Graphics & Effects
No gradients, meshes, or textured overlays are present anywhere in the sampled scroll — the system is flat color fields only. The sole elevation cue is a very soft, barely-perceptible shadow stack — `rgba(0, 0, 0, 0.01) 0px 2px 2px 0px, rgba(0, 0, 0, 0.02) 0px 4px 4px 0px, rgba(0, 0, 0, 0.04) 0px 16px 24px 0px` — used sparingly on raised elements such as the dropdown/dark CTA cluster in the navbar, not on the release cards (which are flat, unshadowed color blocks). There are no photographic images, illustrations, or device mockups in any sampled section; the entire visual language is typographic and chromatic blocking. The single dark rounded band functions as the page's only "graphic" moment, using flat fill and corner radius alone to create depth-of-attention rather than shadow or blur.

## Motion
Interactions are quick and utilitarian rather than expressive: color transitions run at `0.2s ease` for hover states (e.g., nav link to `#5E5D59` link-hover tone), a faster `0.1s ease` governs opacity fades, and combined border/color/background transitions on interactive controls run at `0.2s ease` in parallel. Keyframe animations present in the system include a `spin` (loading indicator), a `marquee` pair (continuous horizontal scroll, likely for a logo or ticker rail elsewhere on the site), and `fadein`/`menuOpen`/`menuClose` pairs governing dropdown and mobile-menu reveal/dismiss. Scroll-triggered choreography is implemented via GSAP with ScrollTrigger, implying sections and list rows fade or reveal progressively as they enter viewport rather than animating on a fixed page-load timer. Overall motion character: subtle, fast, utility-first — supporting legibility and state change, not spectacle.

## Guardrails
- Never render the dark band as a full-page background — it is one rounded, contained element within a dominantly cream page.
- Never give the navbar buttons a pill radius or fill — they are flat, transparent, 0px-radius text buttons; only the CTA cluster beside them is a solid dark pill/rounded-rect.
- Never substitute the clay swatch as a rendered UI color — it is a reserved brand token, absent from all visible surfaces here.
- Never add shadows, gradients, or image media to the release/list card families — they are flat, unbordered-fill, typographic-only blocks separated by hairline rules.
- Keep card radii at 0px throughout the content grids; reserve rounding (16–24px) exclusively for the dark feature band and small controls.
- Do not invent a hero product screenshot or illustration; the hero and mid-page sections are text-and-list driven only.
