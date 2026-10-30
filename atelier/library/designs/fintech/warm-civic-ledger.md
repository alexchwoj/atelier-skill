---
version: "1"
name: "Warm civic ledger"
description: "A cream-and-charcoal editorial system with a single rationed vermilion accent, tight geometric display type, and a full-bleed documentary photo hero under a diagonal scrim."
colors:
  background: "#F4EBDD"
  surface: "#FAF4EA"
  surface-alt: "#FFFFFF"
  surface-dark: "#2A2A2A"
  footer: "#111111"
  text-primary: "#121212"
  text-secondary: "#6F6A62"
  accent: "#CA352B"
  accent-active: "#A82E25"
  accent-soft: "#E4A59D"
  border: "#D8CFC2"
typography:
  display-lg:
    fontFamily: "Inter Tight"
    fontSize: "60px"
    fontWeight: 700
    lineHeight: "1.1"
    letterSpacing: "-1.5px"
  headline-md:
    fontFamily: "Inter Tight"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: "1.5"
    letterSpacing: "1.2px"
  body-md:
    fontFamily: "Inter"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: "1.6"
  label-md:
    fontFamily: "Inter Tight"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: "1.5"
    letterSpacing: "-0.6px"
  body-base:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.6"
  label-mono:
    fontFamily: "IBM Plex Mono"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.5"
spacing:
  base: "8px"
  gap: "24px"
  section-padding: "100px"
  section-gap: "49px"
rounded:
  control: "6px"
  card: "8px"
  panel: "6px"
  pill: "9999px"
components:
  button-hero-primary:
    background: "#CA352B"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "56px"
    padding: "0px"
    shadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px"
  button-secondary-outline:
    background: "transparent"
    text-color: "#121212"
    radius: "9999px"
    height: "56px"
    border: "1px solid #2A2A2A"
  button-nav-cta:
    background: "#CA352B"
    text-color: "#FFFFFF"
    radius: "6px"
    height: "44px"
    padding: "14px 28px"
    hover-background: "#A82E25"
  button-midpage:
    background: "#CA352B"
    text-color: "#FFFFFF"
    radius: "8px"
    height: "50px"
    padding: "12px 24px"
    border: "1px solid rgb(202, 53, 43)"
  button-split-tab:
    background: "#CA352B"
    text-color: "#FFFFFF"
    radius: "0px 8px 8px 0px"
    height: "39px"
    padding: "8px 16px"
    hover-background: "#A82E25"
  card-feature-icon:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  card-panel-tiled:
    background: "#FAF4EA"
    radius: "0px"
    padding: "100px 64px"
  card-media-bleed:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  card-white-elevated:
    background: "#FFFFFF"
    radius: "8px"
    padding: "32px"
    shadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.06) 0px 2px 12px 0px"
  card-panel-list:
    background: "#FFFFFF"
    radius: "0px"
    padding: "100px 64px"
  card-dark-panel:
    background: "#2A2A2A"
    radius: "0px"
    padding: "32px"
    text-color: "#FFFFFF"
---
# Warm civic ledger
Source: https://newtown.digital/

## Overview
This is a warm-neutral editorial system — a cream (`#F4EBDD`) canvas standing in for the paper-and-ink feel of a community notice board, disciplined by a tight geometric sans (Inter Tight) for headlines and a plain-spoken humanist sans (Inter) for body copy. One vermilion (`#CA352B`) is the entire color vocabulary beyond ink and cream; it is never diluted into a palette of shades, only applied solid or as a soft tint. The hero breaks from the flat-color system with a single full-bleed documentary photograph, scrimmed for legibility — otherwise the page stays resolutely flat, gridded, and typographic, closer to Swiss-influenced editorial than to any glossy SaaS gradient style.

## Composition
The first screen is a full-bleed photographic hero: a street-scene photograph fills the viewport edge-to-edge, darkened by a diagonal scrim, carrying a large left-aligned headline, a support line, a bold declarative fragment, a short body line, and a two-button row (solid pill + outline pill), with a small italic caption beneath. Below the fold the page shifts entirely to flat cream and white surfaces: a four-up icon-led feature row sits on cream, then a dark marquee-style scrolling word rail interrupts as a full-bleed dark band, then a black headline-and-checklist block on white, then an alternating two-column "start here" panel pairing text against a placeholder image tile, then a three-card pricing-style row followed by a two-card dark/light row beneath it, then a two-column proof section mixing text blocks with device-mockup photography, ending in a contact panel and a near-black footer. The deliberate choice is to isolate all photographic/textural richness to the hero and two mid-page image tiles, rejecting the alternative of scattering imagery throughout every section — this keeps the mid-page feeling like a printed service sheet, not a marketing deck.

## Colors
`#F4EBDD` (measured area 52.2%) is the dominant page background, reinforced by the pixel field's near-40% share of light neutrals — this is the true canvas, not white. `#FAF4EA` (19%) and `#FFFFFF` (15.5%/26% pixel share) are the two lighter surface steps used for panels and elevated cards, in that order of frequency. `#2A2A2A` (5% declared, ~12% pixel share as darker grays) is the charcoal used for the dark interrupting band and dark cards; `#111111` is reserved solely for the footer, the single darkest surface on the page. `#CA352B` is rationed to under 1% of pixel area yet carries nearly all interactive and emphasis meaning — CTA fills, icon glyphs, list-marker dots, link-adjacent accents, and the vermilion tab button. `#E4A59D` exists as the token for a soft tint of the accent (unseen as a large fill here but reserved for hover/soft backgrounds). Ink `#121212`/`#111111` carries headings; `#6F6A62` is the secondary/muted text tone for supporting lines. Borders run a hairline `#D8CFC2`/`#D8CEC0` — visible only as thin card and input outlines, never as heavy strokes.

## Typography
Display headlines use Inter Tight at 60px/700, line-height 1.1, tracked tight at -1.5px — this is the largest text on the page, used once per section for its heading. A smaller Inter Tight token at 24px/600/-0.6px handles card and sub-section headings (e.g., the mid-weight headline inside feature panels). An all-caps eyebrow-style label uses Inter Tight at 12px/600 with +1.2px tracking, colored in the accent, sitting above the four-icon feature row. Body copy runs in Inter: a larger 20px/400/1.6 size in the hero and lead paragraphs, stepping down to a 16px/400 body-base (ink `#2A2A2A`, secondary tone `#6F6A62`) for dense paragraph and list content. A monospace family (IBM Plex Mono) appears as the signature accent, restricted to the horizontal scrolling word-rail band — its typewriter/ledger character marks that one strip as a distinct, list-like interruption against the otherwise humanist type system.

## Layout
Content is bound to a 1100px max-width, centered, with section padding of 100px vertical and gaps of 49px between major bands — generous, editorial breathing room rather than dense app spacing. The base spacing scale runs 8/12/14/16/24/32px for internal component rhythm. Card grids are uniform-column, not masonry: a 3-column grid at 24px gap for the pricing-style row (5 items, full-width rows), a 2-column 64px-gap grid for the alternating proof section (2 items each roughly 47% wide), and a 2-column 24px-gap grid for the four media-bleed tiles (each ~49% wide, two rows of two). Full-width panels (100% span) are used for the tiled feature strip, the checklist block, and the icon-led feature row — these act as spanners that break the column rhythm intentionally. Radius is 0px on all full-bleed panels and media tiles, rising to 6–8px only on discrete floating cards and buttons, keeping the panel language flat and architectural while componentized cards feel slightly softened.

## Components
- **Navbar**: edge-to-edge square bar, 64px tall, spans full viewport width with 0px inset, all four corners 0px radius (a flat structural bar, not an inset capsule), sticky on scroll, background `#F4EBDD`. Carries a wordmark lockup on the left, 6 text nav items centered/right, and one solid CTA pill on the far right: `#CA352B` fill, `#FFFFFF` text, 6px radius, 44px height, 14px/28px padding, hover darkens to `#A82E25` with a 1px upward transform shift.
- **Hero primary button**: the solid vermilion pill under the headline — `#CA352B` fill, `#FFFFFF` text, full pill radius (9999px), 56px height, no internal padding token beyond pill shape, resting shadow `rgba(0,0,0,0.1) 0px 10px 15px -3px, rgba(0,0,0,0.1) 0px 4px 6px -4px`. This is the single most emphasized control on the page.
- **Hero secondary button**: an outline pill beside it, transparent fill, dark ink border and text, same 9999px radius and ~56px height — a lower-emphasis companion, not a glass treatment.
- **Mid-page CTA button**: solid vermilion, 8px radius (a slightly-rounded rectangle, not a pill), 50px height, 12px/24px padding, 1px solid accent-colored border — appears once as a standalone content-band action.
- **Split-tab button**: solid vermilion, asymmetric radius `0px 8px 8px 0px` (rounded only on the trailing edge, suggesting it's docked to an adjacent element), 39px height, 8px/16px padding, near the page end — used as a compact inline action beside a bordered field.
- **Four-up icon feature row**: appears on cream directly below the hero; ×4 arranged in one row, each transparent/no-border, containing a small vermilion line-icon, a bold short heading, and a body paragraph beneath — no card container, pure content columns.
- **Marquee word rail**: a full-bleed dark charcoal band directly beneath the feature row, one continuous horizontally-scrolling line of short mono-set terms separated by slashes — a signature texture band, not a card.
- **Checklist panel**: full-width white panel, 100px/64px padding, containing a bold heading, two body paragraphs, and a vertical list of short lines each prefixed with a small vermilion dot marker.
- **Alternating start-here panel**: two-column layout (one text column, one placeholder-image tile at `#E4D9CA`-toned fill with 8-ish rounded corners), text side carries a heading, two paragraphs, a callout row with a red left-border strip and bold single-line text inside a white card, a muted indented list of short alternatives, and a solid vermilion CTA pill beneath.
- **Pricing/offer card row**: ×5 cards, 3-per-row on row one and 2-per-row on row two (dark variant), `#FAF4EA` fill for light cards, `#2A2A2A` for the dark variant with white text; each contains a heading, a body description, a thin divider rule, a small-caps "good for" label, a muted qualifier line, a bold price line, and a bordered outline button at the base.
- **Proof/credibility section**: two-column 64px-gap grid, each column pairing a bold sub-heading and short paragraph above a full-bleed photographic or mockup image tile (device-mockup photography, dark-background phone renders) — media covers roughly half the card height, image-top-bleed with no radius.
- **Contact form panel**: `#FAF4EA`/white bordered card containing labeled inputs (email, phone) with hairline `#D8CFC2` borders and 6–8px radius, a textarea, and a full-width solid vermilion submit button with white text, plus a muted micro-copy line beneath.
- **Footer**: full-width `#111111` band, wordmark lockup with a short paragraph, a link column, and an email-capture row (bordered input + small solid vermilion "join" button), social glyphs, and a bottom copyright rule — the darkest surface on the page, used nowhere else.

## Graphics & Effects
The only gradient in the system is a scrim applied to the hero photograph: `linear-gradient(to right top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.15) 100%)`, covering the full hero image (roughly the entire first viewport, ~6.5% of total page area) to darken the lower-left where text sits while letting the upper-right of the photo stay brighter — this is a scrim on one photographic element, not a page-wide background wash. Elevation is minimal and quiet: white cards use `rgba(0,0,0,0.06) 0px 2px 12px 0px`, buttons use soft ambient shadows like `rgba(0,0,0,0.1) 0px 10px 15px -3px, rgba(0,0,0,0.1) 0px 4px 6px -4px`, and some elements carry a near-zero `rgba(0,0,0,0.05) 0px 1px 2px 0px` hairline lift. No blur, no glass, no noise texture is present; the only textural interest is the documentary photograph itself and the mono-set scrolling word rail acting as a graphic/typographic hybrid band.

## Motion
Interactive elements transition on `all 0.15s cubic-bezier(0.4, 0, 0.2, 1)` for color/background/border shifts, with a slightly slower `transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)` for press/lift movement (seen as the navbar CTA's 1px upward shift on hover) and a broader `all 0.7s cubic-bezier(0, 0, 0.2, 1)` for larger reveal transitions. Keyframe utilities present include `marquee` (driving the continuous scrolling word rail), plus standard `bounce`, `pulse`, `enter`/`exit`, and `accordion-up` for disclosure-style content. Motion overall is restrained and functional — quick state feedback on controls, one continuous horizontal marquee as the page's sole ambient/looping motion.

## Guardrails
- Never let the accent vermilion spread beyond buttons, icons, dots, and thin rule accents — it must stay under 1% of visible area, not become a background color.
- Do not replace the hero's solid pill CTA with any glass or outline treatment; the outline pill is strictly the secondary action beside it.
- Keep full-bleed panels and media tiles at 0px radius; reserve 6–8px radius for discrete floating cards, inputs, and buttons only.
- Do not colorize the dark charcoal/black bands (feature marquee, footer) — they stay neutral ink, with vermilion appearing only as small accents within them.
- Preserve the navbar as a flat, edge-to-edge, square-cornered bar — never convert it into an inset or pill-shaped floating header.
- Keep photographic imagery confined to the hero and the two proof-section tiles; do not scatter photography through the flat cream/white mid-page bands.
