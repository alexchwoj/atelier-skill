---
version: "1"
name: "Ember Ledger"
description: "Near-black dark-mode-default system with a single rationed ember-orange gradient accent, oversized tight Manrope display type, and a dense bento/card grid rhythm carrying every section."
colors:
  background: "#000000"
  surface: "#180000"
  surface-raised: "#300000"
  text-primary: "#FFFFFF"
  text-secondary: "#767676"
  accent: "#D32800"
  accent-alt: "#FC6D01"
  accent-tertiary: "#F53F16"
  positive: "#0CBE4D"
  link: "#0000EE"
typography:
  display-lg:
    fontFamily: "Manrope"
    fontSize: "64px"
    fontWeight: 400
    lineHeight: "1.2"
    letterSpacing: "-2.5px"
  headline-md:
    fontFamily: "Manrope"
    fontSize: "52px"
    fontWeight: 400
    lineHeight: "1.2"
    letterSpacing: "-0.5px"
  body-md:
    fontFamily: "Manrope"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.6"
  label-md:
    fontFamily: "Manrope"
    fontSize: "32px"
    fontWeight: 500
    lineHeight: "1.28"
    letterSpacing: "-0.5px"
  accent-serif:
    fontFamily: "Times New Roman"
    fontStyle: "italic"
    role: "rare editorial interruption, not used for primary hierarchy"
spacing:
  base: "8px"
  unit-sm: "4px"
  unit-md: "12px"
  gap: "24px"
  section-padding: "100px"
rounded:
  control: "12px"
  card: "20px"
  pill: "9999px"
  capsule-alt: "100px"
  button-alt: "30px"
  bar: "60px"
components:
  navbar:
    background: "transparent"
    width: "edge-to-edge, 100% viewport"
    height: "107px"
    radius: "0px 0px 0px 0px"
    position: "sticky"
    item-count: 7
  button-nav-cta:
    background: "#D32800"
    text-color: "#0000EE"
    radius: "60px"
    height: "59px"
  button-primary-hero:
    background: "observed near-flat #D32800 solid, slightly glossed"
    text-color: "#FFFFFF"
    radius: "~8px, slightly-rounded"
    height: "~48px (observed)"
  button-footer-prominent:
    background: "#D32800"
    text-color: "#000000"
    radius: "60px"
    height: "52px"
    padding: "13px 17px 13px 14px"
  card-glass-panel:
    background: "rgba(10,10,10,0.6) with blur(20px)"
    radius: "20px"
    border: "rgb(0,0,0) 0px 0px 0px 1px inset"
    shadow: "rgba(0,0,0,0.17) 0px 0.6px 1.57px -1.5px, rgba(0,0,0,0.14) 0px 2.29px 5.95px -3px, rgba(0,0,0,0.02) 0px 10px 26px -4.5px"
  card-feature-gradient:
    background: "linear-gradient(116deg, rgb(211,40,0) 0%, rgba(211,40,0,0.3) 100%)"
    radius: "20px"
    padding: "24px"
  card-coin-list:
    background: "#180000"
    radius: "20px"
    padding: "24px"
    border: "1px solid #767676 (hairline)"
  footer-cta-band:
    background: "linear-gradient(129deg, rgb(0,0,0) 0%, rgb(30,6,0) 100%)"
    radius: "20px"
    padding: "100px 24px"
---
# Ember Ledger
Source: https://cryonix.framer.website/

## Overview
This is a dark-mode-default system built on near-total black (~71% pure `#000000` plus deep maroons `#180000`/`#300000` as the next pixel tiers), with a single ember-orange identity color rationed into gradient washes, pill controls, and card accents. The aesthetic reads as bento-grid SaaS marketing: oversized Manrope display type with tight negative tracking carries the voice, while glassmorphic panels (`blur(20px)`, inset hairline shadow) and soft elevation shadows give the dark surfaces depth without introducing new hues. It sits between aurora-gradient hero styling and a structured bento feature grid — moody, infrastructural, technical-feeling rather than playful.

## Composition
The first screen stacks: a transparent sticky navbar, a centered pill-bordered eyebrow, a two-line oversized headline with the first line faded/ghosted lighter than the second, a short centered body line, one solid CTA, then a large centered device-mockup illustration bleeding into the section below. Scrolling reveals a steady rhythm of alternating paired bands — eyebrow pill, headline, support copy, then a grid — repeated for a logo-strip/stat band, a feature triptych, a platform/security pairing, a market-data grid, and finally a bordered callout card before the footer. Density is high: every section packs a full-bleed gradient card grid almost immediately below its headline, leaving the hero as the only generously empty canvas. The deliberate choice is restraint-by-monochrome — nearly everything rendered is black/maroon/orange rather than a multi-hue palette — rejecting a brighter multi-accent SaaS look in favor of a single-ember signature.

## Colors
`#000000` is the page and section background, dominating ~71–87% of declared area; it is never pure flat — maroon undertones `#180000` (~19%) and `#300000` (~4%) sit beneath cards and gradient panels as the next elevation tier, functioning as `surface`/`surface-raised` roles. `#D32800` is the single brand/accent hue, rationed into: the nav CTA fill, the hero/footer primary buttons, eyebrow-pill borders, and every feature-card gradient wash — never used as body text color. `#0CBE4D` is the lone semantic-success tone, appearing only on percentage/gain figures in the market grid. `#0000EE` appears only as nav-CTA text, an unusual ink-on-fill pairing that reads as a link-blue accent rather than a UI color. `#767676` is the hairline border/divider gray separating stat rows and card edges. White (`#FFFFFF`) carries all primary text and icon ink; everything else (secondary labels, muted captions) drops to desaturated grays pulled from the same black family — no separate gray ramp is introduced.

## Typography
Manrope is the sole typeface carrying the entire hierarchy, with Times New Roman reserved as a rare italic/serif interruption for brand-voice emphasis only. Display headlines run at 64px/400 with aggressive -2.5px tracking and 1.2 line-height, frequently split across two lines with the first line rendered in a dimmer, ghosted white-to-transparent treatment against the second line's full-white weight — a signature two-tone headline move, not a gradient-text effect. Secondary section headlines step down to 52px/400 with -0.5px tracking. A 32px/500 label size (-0.5px tracking) is used for mid-weight callouts (card titles, stat labels). Body copy sits at 16px/400 with a generous 1.6 line-height for legibility against the dark field. No bold weights or all-caps tracking-wide labels appear; hierarchy is built through size and opacity, not weight contrast.

## Layout
Content is constrained to a 1320px max-width container with 100px vertical section padding and a consistent 24px gap rhythm across grids. The dominant pattern is a card grid: feature sections resolve into asymmetric bento rows — e.g. one wide gradient card above two half-width cards (rows of [1 full] [2 even]), and a platform band of [2 even-wide cards] above [3 even cards]. The market-data section runs a strict uniform 4-column grid, 24px gap, 8 cards in two rows of 4 — a card grid, not bento, since every tile is equal span. Radii scale from tight 12px control corners up to 20px standard card corners, with pill (9999px) and extended capsule (100px) shapes reserved for buttons, badges, and eyebrow pills. The logo strip uses a horizontal scrolling rail of equal-width chips. Layout is edge-anchored and desktop-first with no visible breakpoint collapse in the samples, implying graceful reflow to single-column stacks at narrower widths.

## Components
- **Navbar**: edge-to-edge square bar, 1920px measured width (100% viewport, 0px inset either side), 107px tall, 0px radius on all four corners, transparent background, sticky on scroll. Carries 7 items: a logo mark + wordmark at left, 5 text nav links center-left, and one solid CTA pill at far right (`#D32800` fill, `#0000EE` text, 60px radius, 59px height) — no secondary/outline button beside it.
- **Hero primary button**: an observed near-flat solid orange fill (not the measured glass value), white text, slightly-rounded corners (~8px, observed), sitting directly under the hero subhead — the single highest-contrast click target on the first screen.
- **Logo strip**: a horizontal scrolling rail of ~9 equal chip cards, dark maroon fill, hairline border, each holding one centered wordmark/icon lockup — no heading inside, pure trust-signal repetition.
- **Stat/numeral row**: 3 stacked rows (not a grid) inside the about band, each pairing one oversized numeral (64px-class) at left with a small label at right, divided by a `#767676` hairline rule between rows.
- **Feature triptych/bento grid**: one full-width gradient panel (icon/illustration left-weighted, heading + body text filling ~40% of the card) stacked above a 2-up row of equal gradient cards, each carrying an abstract node/network illustration occupying the top ~70% and a heading + body pinned to the bottom-left.
- **Platform pairing band**: 2 even-width large cards (illustration top ~65%, heading + body bottom-left) followed immediately by a 3-up row of smaller matching cards — same gradient-card family, denser scale.
- **Market/coin data card grid**: uniform 4-column grid, 8 cards, 24px gap, each card: icon badge top-left, ticker heading + subtitle below, a gap, then a green (`#0CBE4D`) percentage figure and a large bold price numeral at the bottom — no CTA inside these cards, pure data display.
- **Email-capture/subscribe band**: embedded in the footer, a pill-shaped input (dark fill, hairline border) paired with an adjacent solid orange "subscribe" pill button, capsule radius.
- **CTA callout band**: one full-bleed rounded card (20px radius) near page end holding centered headline, support copy, and a single solid button — background is the dedicated `linear-gradient(129deg, rgb(0,0,0) 0%, rgb(30,6,0) 100%)` panel, not the page background.
- **Footer**: transparent background, 11 links organized into two label-topped columns plus the subscribe molecule and a leftmost logo/tagline block; a hairline divider separates the link grid from a bottom copyright line.

## Graphics & Effects
Five near-identical ember gradients (`linear-gradient(108–129deg, rgb(211,40,0) 0% → rgba(211,40,0,0.3) 100%)`) are used exclusively as individual card and scrim fills — each covers only its own panel (roughly 1.5–5.8% of total page area per instance), never the full hero or page background, which stays black. The darkest gradient (`linear-gradient(129deg, rgb(0,0,0) 0%, rgb(30,6,0) 100%)`) is reserved for the late-page CTA callout card only. Two scrim gradients sit directly over device-mockup/media art to maintain text legibility on the illustration edges. Glass panels use `backdrop-filter: blur(20px)` with a 1px inset black shadow for edge definition; a lighter `blur(2px)` appears on smaller floating UI chips inside illustrations. Card elevation is carried by a soft triple-layer shadow (`0.6px`/`2.3px`/`10px` offsets, low opacity) rather than hard drop shadows. A faint grain/noise is visible across the black field, softening the otherwise flat void.

## Motion
Built on framer-motion for component-level transitions and lenis for smooth inertial scrolling — expect eased, momentum-based scroll rather than native jump-scroll. Headline first-lines fade from dim to full white as they enter view (scroll-triggered fade), gradient cards likely cross-fade/scale in per bento tile with a short stagger, and the logo rail runs a continuous linear horizontal marquee. Buttons take simple opacity/background hover shifts; no springy overshoot is evident — motion favors calm ease-out settling consistent with the restrained palette.

## Guardrails
- Never let the hero or page background inherit the orange gradient — black stays dominant; orange only fills discrete cards, pills, and the footer CTA band.
- Do not substitute the glass nav/utility values for the hero primary button — the hero CTA is a flat solid, not a blurred glass pill.
- Keep headline two-line treatment as a dim-line/bright-line contrast, not a multi-color gradient-text effect.
- Preserve the 0px-radius, edge-to-edge, transparent navbar — do not round its corners or inset it into a floating capsule.
- Do not introduce new hues beyond black/maroon/orange/white plus the single green success tone and blue link ink.
- Keep card grids true to their row composition (uniform 4-up for data, asymmetric 1+2 and 2+3 for features) — don't flatten bento rows into uniform grids.
