---
version: "1"
name: "Deep-space glass orbit"
description: "Near-black cosmic-blue system with reflective sphere renders, a rationed aurora wash, edge-to-edge transparent navbar, and square-cornered utilitarian cards on a white mid-page bed."
colors:
  background: "#FFFFFF"
  surface: "#FFFFFF"
  surface-muted: "#F5F5F5"
  text-primary: "#16181C"
  text-on-dark: "#FFFFFF"
  accent-deep-blue: "#0E1A3A"
  accent-blue: "#2C52A2"
  accent-bright: "#1A52DC"
  danger: "#FB2C36"
typography:
  display-lg:
    fontFamily: "DM Sans"
    fontSize: "72px"
    fontWeight: 400
    lineHeight: "1.15"
    letterSpacing: "-1.8px"
  headline-md:
    fontFamily: "DM Sans"
    fontSize: "56px"
    fontWeight: 400
    lineHeight: "1.1"
    letterSpacing: "-1.1px"
  body-md:
    fontFamily: "DM Sans"
    fontSize: "21px"
    fontWeight: 400
    lineHeight: "1.4"
  label-md:
    fontFamily: "DM Sans"
    fontSize: "32px"
    fontWeight: 500
    lineHeight: "1.3"
  body-lg:
    fontFamily: "DM Sans"
    fontSize: "21px"
    fontWeight: 400
    lineHeight: "1.4"
  accent-mono:
    fontFamily: "Space Grotesk"
    note: "used for oversized numeral figures in stat cards"
spacing:
  base: "8px"
  gap: "40px"
  small-gap: "12px"
  section-padding: "40px"
rounded:
  control: "8px"
  card-soft: "20px"
  card-tight: "12px"
  square: "4px"
  pill: "24px"
components:
  button-nav-cta:
    background: "linear-gradient(90deg, rgb(0, 31, 93) 0px, rgb(0, 31, 93) 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)"
    text-color: "#001F5D"
    radius: "8px"
    height: "54px"
  button-hero-primary:
    background: "#0E1A3A"
    text-color: "#FFFFFF"
    radius: "6px"
    height: "44px"
    note: "observed near-solid deep-navy pill under hero headline, approximate values"
  button-nav-utility:
    background: "transparent"
    text-color: "#FFFFFF"
    radius: "0px"
    height: "41px"
    padding: "8px 13.6px"
    hover-color: "#FFFFFF"
  button-solid-white:
    background: "#FFFFFF"
    text-color: "#000000"
    radius: "0px"
    height: "44px"
  button-solid-gray:
    background: "#F5F5F5"
    text-color: "#000000"
    radius: "0px"
    height: "44px"
  card-stat-panel:
    background: "#FFFFFF"
    radius: "20px"
    padding: "24px"
  card-stat-gradient:
    background: "radial-gradient(120% 140% at 15% 100%, rgb(28, 63, 174) 0%, rgb(10, 20, 66) 45%, rgb(4, 6, 28) 100%)"
    text-color: "#FFFFFF"
    radius: "20px"
  card-feature-media:
    background: "#FFFFFF"
    radius: "12px"
    padding: "0px"
  card-icon-triptych:
    background: "transparent"
    radius: "19.2px"
    padding: "19.2px"
  footer:
    background: "#001F5D"
    text-color: "#FFFFFF"
    radius: "0px"
---
# Deep-space glass orbit
Source: https://nebusec.ai/

## Overview
This is a dark-mode-default cosmic aesthetic: a near-black midnight-blue field (`#001F5D`/`#0E1A3A`) punctuated by photoreal reflective sphere renders, star-field texture, and a single rationed aurora wash of orange-through-violet-through-blue. The system alternates between this dark cosmic register and flat, square-cornered, white/off-white utility panels for mid-page data — a deliberate register-switch between "brand spectacle" (hero, section dividers) and "product proof" (stat blocks, feature cards). Type is DM Sans at large display sizes with tight negative tracking, paired with Geist for dense body copy — a display/body split that separates voice from information.

## Composition
The first screen is dark-cosmic: an edge-to-edge transparent navbar sits over a starfield-and-orbiting-spheres background, left-aligned headline block at roughly one-third width, one solid CTA beneath it, spheres receding to the right and off-bottom. Scrolling down, the page snaps to a near-white bed (`#F5F5F5`/`#FFFFFF`, ~46%+12% of pixels) carrying a dense stat/proof grid, a logo strip, and an advisory list — this is the page's true density center, not the hero. A second dark-cosmic band returns mid-page as a section break (aurora gradient, feature copy + a bordered device diagram), then a white feature-card row, then the page closes on a solid navy footer band. This top→dark→light→dark→light→navy rhythm is the deliberate choice: cosmic bands are reserved for narrative/transition moments, while data and proof always sit on flat light surfaces — rejecting the alternative of a single continuous dark theme throughout.

## Colors
`#001F5D` and its darker relative `#0E1A3A` are the background/brand role, carrying the hero, section-break bands, and footer — roughly a quarter of total pixels. `#FFFFFF` and `#F5F5F5` (together ~61% of pixels) are the dominant surface, used for the entire mid-page proof and card system — this is a light-surface-majority page despite its dark-cosmic identity moments. `#16181C` is the text-ink role on light surfaces; `#FFFFFF` is text-on-dark. `#2C52A2`/`#1A52DC` function as accent-blue, appearing in gradient stops and small UI chrome (dashboard mockup accents, icon fills) — rationed to small interior details, never a full surface. Red (`#FB2C36` family) and orange (`#FFB86A`) are held in reserve as semantic/status tokens, visible only as small "hot" tag chips against the advisory list — never spent on structure.

## Typography
DM Sans carries all display and label roles: 72px/1.15/-1.8px for the hero headline, 56px/1.1/-1.1px for section headlines, 32px/500/1.3 for label-weight numerals and callouts. Geist takes over for all body copy at 16px/400/1.4 in `#16181C` — a deliberate sans/sans pairing distinguished by weight and tracking rather than family contrast, keeping the system quiet. Oversized numeral figures (stat counts) sit at display scale, disproportionately larger than their caption labels beneath them, functioning as the page's signature typographic flourish.

## Layout
Content is bounded to a 1300px max-width. The mid-page proof area runs a 2-column grid (gap 40px, rows sized ~45%/51%) pairing a text/brand panel against a numeral panel, feeding into a single-column stack of five full-width rows (gap normal) for the advisory list. The feature-card row is a 3-up uniform track of media-top cards (12px radius) sliding under a paddle/arrow control, reading as a horizontal scrolling rail rather than a fixed grid. The icon-triptych near the first screen runs 3 equal-width cards in one row (radius 19.2px, padding 19.2px) — uniform card grid, not bento. Spacing throughout mid-page sections favors small, tight increments (8–20px) versus the generous 40px section gap between major blocks — dense information packed into a wide, loosely-spaced macro-rhythm.

## Components
- **Navbar**: edge-to-edge square bar, 98px tall, spans full 1920px viewport width with 0px inset on both edges, all four corners 0px radius (no rounding, no floating-capsule treatment), background transparent, sticky, holding 19 total items (logo + nav links + CTA + dropdown carets). Its CTA is a two-tone gradient fill `linear-gradient(90deg, rgb(0, 31, 93) 0px, rgb(0, 31, 93) 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)`, text `#001F5D`, radius 8px, height 54px. Two secondary nav-utility buttons sit beside it: transparent fill, white text, 0px radius, 41px height, 8px/13.6px padding, hover shifts text to full white.
- **Hero primary CTA**: a solid near-white/deep-navy pill beneath the headline, small radius (~6px, observed), high-contrast against the cosmic background — this is the emphasized action of the first screen, distinct from the navbar's gradient CTA and the transparent nav-utility buttons.
- **Stat panel (brand card)**: appears first in the mid-page proof grid; one instance, white fill, 20px radius, 24px padding; anatomy top-to-bottom: small wordmark + "backed by" badge row, a two-line headline, a supporting body sentence.
- **Stat panel (gradient card)**: paired beside the brand card; fill is the verbatim `radial-gradient(120% 140% at 15% 100%, rgb(28, 63, 174) 0%, rgb(10, 20, 66) 45%, rgb(4, 6, 28) 100%)`, white text, 20px radius; anatomy: oversized numeral at top, small caption label beneath, then a secondary descriptive line near the bottom edge.
- **Numeral tiles**: two more instances below the pair — one light-blue-tinted panel with a numeral + label + decorative overlapping-circle graphic; one full-width white bar pairing a numeral against a partner logo mark and a small orbiting-sphere thumbnail.
- **Advisory list (row card family)**: single-column stack of five full-width rows (100% each), transparent background, 0px radius/padding; each row carries a small colored status dot, an eyebrow category label, a one-line entry, and a right-aligned status chip (e.g., a small pill tag in warm orange/red).
- **Logo strip**: one row of ~9 monochrome partner marks, evenly spaced, sitting directly beneath the advisory list on the same white bed — no card container, no border.
- **Feature card rail (media-top)**: 3 cards visible per row in a horizontal scrolling rail with prev/next arrow controls; white fill, 12px radius, 0px padding; anatomy: a top-bleed media panel (a product-screenshot mockup on the first card, an abstract sphere-on-gradient render on the others, each tagged with a small pill badge for unreleased items), followed by an icon + heading pair and a one-to-two-line body description beneath.
- **Icon triptych**: 3 equal cards in one row on the first screen, transparent fill, 19.2px radius/padding; anatomy: a bordered circular icon chip at top, a short label line beneath it — a minimal icon+caption pattern repeated three times.
- **Section-break diagram card**: single dark-bordered panel on the cosmic band, containing three small icon nodes connected by dotted guide lines above a labeled capsule footer strip — a schematic/process visualization, not a data card.
- **Footer**: full-width solid `#001F5D` band; left column holds wordmark + tagline + 4 circular social icons; three link columns (14 links total) with small-caps section labels; bottom strip holds legal links and copyright in a dimmer tone.

## Graphics & Effects
The hero background stays cosmic dark across its full frame — starfield dots plus large reflective glass/metal sphere renders — with no full-hero gradient wash; color is delivered entirely through the sphere renders' internal reflections, not a background gradient. The aurora sweep — `linear-gradient(90deg, rgb(0, 18, 71) 0%, rgb(0, 14, 56) 8%, rgb(0, 9, 40) 16%, rgb(0, 6, 29) 25%, rgb(0, 3, 16) 35%, rgb(0, 2, 9) 50%, rgb(0, 3, 15) 60%, rgb(0, 6, 27) 70%, rgb(0, 7, 32) 80%, rgb(0, 2, 17) 90%, rgb(0, 5, 28) 100%)` layered under an orange-to-violet-to-blue diagonal streak — is confined to the single section-break band roughly a third of the way down the page, covering that band's full width but only that band, not the hero. The soft white radial `radial-gradient(900px 620px at 63.71% 50%, rgba(255, 255, 255, 0.85) 0%, rgba(207, 221, 242, 0.55) 45%, rgba(160, 186, 229, 0) 75%)` functions as a scrim/glow behind sphere renders inside individual feature-card media panels only — a localized halo, not a page wash. Card and panel elevation uses soft diffuse shadows: `rgba(0, 0, 0, 0.18) 0px 24px 48px -20px` on floating panels, `rgba(0, 19, 75, 0.32) 0px 8px 24px 0px` on brand-blue tiles. A `blur(15px)` backdrop-filter is used sparingly, likely on the navbar's scroll state or small overlay chips. Fine star-dot texture is visible across every cosmic band, giving depth without noise/grain.

## Motion
Transitions favor a soft spring-out curve, `transform 0.42s cubic-bezier(0.2, 0.65, 0.3, 1)`, for panel and sheet movement, paired with a slower two-stage entrance `opacity, transform 0.5s, 0.72s cubic-bezier(0.22, 0.61, 0.36, 1)` for scroll-revealed content — elements fade and settle rather than snap. Fast utility transitions (`opacity 0.15s ease`, `color/background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1)`) drive hover-state color shifts on nav links and buttons. Named keyframes (`bul-sheet-in/out/rise`, `bul-nav-icon-in`, `df-scan-in`, `df-drift-y`) indicate slide-in sheets, an icon-entrance animation in the nav, a scanning reveal effect on data elements, and a slow ambient drift on background graphics. Lenis-smoothed scrolling underlies the whole page, giving section transitions an eased, momentum-based feel rather than a hard cut.

## Guardrails
- Never fill the hero's full frame with the aurora or radial gradients — they belong to a single mid-page band and small media scrims only.
- Keep mid-page cards and rows square-cornered (0px) and flat; do not round or shadow them to match the soft cosmic-band panels.
- Do not merge the nav-utility buttons, the nav CTA, and the hero primary button into one style — each has a distinct fill, radius, and role.
- Preserve the navbar as an edge-to-edge, 0px-radius, transparent, sticky bar at 98px — never convert it to a floating or capsule shape.
- Reserve red/orange semantic tones for small status chips only; never let them color a full surface.
- Keep DM Sans for display/label sizes and Geist for body; do not swap them or introduce a third family for structure.
