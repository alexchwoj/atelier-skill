---
version: "1"
name: "Quiet Grain Editorial"
description: "Warm-neutral editorial system built on an oversized Playfair Display serif, flat uncornered cards, and a single photographic hero — otherwise entirely typographic and unshadowed."
colors:
  background: "#F5F3F0"
  surface: "#FFFFFF"
  text-primary: "#2C2C2C"
  text-secondary: "#000000"
  accent: "#3C81F5"
  inverse-panel: "#181818"
typography:
  display-lg:
    fontFamily: "Playfair Display"
    fontSize: "96px"
    fontWeight: 400
    lineHeight: "1"
    letterSpacing: "-2.9px"
  headline-md:
    fontFamily: "Playfair Display"
    fontSize: "48px"
    fontWeight: 400
    lineHeight: "1"
  body-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "20px"
    fontWeight: 300
    lineHeight: "1.4"
  label-md:
    fontFamily: "Playfair Display"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: "1.33"
  body-default:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
  label-mono-caps:
    fontFamily: "ui-sans-serif"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: "1.4"
spacing:
  base: "8px"
  gap: "32px"
  section-padding: "192px"
rounded:
  control: "0px"
  card: "0px"
  pill: "9999px"
components:
  button-primary:
    background: "#FFFFFF"
    text-color: "#2C2C2C"
    radius: "0px"
    height: "~56px"
    border: "1px solid #2C2C2C"
    note: "observed outline-filled rectangle, hero left button"
  button-text-link:
    background: "transparent"
    text-color: "#2C2C2C"
    radius: "0px"
    height: "auto"
    border: "none"
    decoration: "underline rule with trailing arrow glyph"
  button-nav-cta:
    background: "transparent"
    text-color: "#2C2C2C"
    radius: "0px"
    height: "80px (navbar height)"
    border: "none"
  button-whatsapp:
    background: "#FFFFFF"
    text-color: "#2C2C2C"
    radius: "0px"
    height: "~64px"
    shadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px"
  card-craft:
    background: "#FFFFFF"
    radius: "0px"
    padding: "0px"
    border: "none"
    anatomy: "icon + heading + body-text"
  card-category:
    background: "transparent"
    radius: "0px"
    padding: "0px"
    anatomy: "image/dark-panel + heading + eyebrow-label"
  card-philosophy-media:
    background: "#181818"
    radius: "0px"
    padding: "0px"
    shadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px"
---
# Quiet Grain Editorial
Source: https://p.superdesign.dev/draft/f42ca811-6334-4983-b938-4e499e52b37a

## Overview
This is a warm-neutral editorial system — closer to Swiss/International rigor than to any dark-glass or bento marketing style. The identity is carried almost entirely by typography: an oversized Playfair Display serif at 96px with tight -2.9px tracking anchors the hero and recurs at 48px and 24px through the page, set against a Plus Jakarta Sans body in light 300-weight and a mono-caps all-uppercase label face for eyebrows and nav. Surfaces are flat and uncornered — 0px radius everywhere, no drop shadows on content cards — so the single photographic hero image and a few dark near-black panels (#181818) carry all the visual weight that shadow or color would elsewhere. It reads as quiet, confident, material-led minimalism: paper-colored ground, ink-dark type, one blue ring-token reserved for focus states only.

## Composition
The first screen is a full-bleed photograph (ceramic/wood vessels on a pale backdrop) with the display headline and body copy set directly over it in the left two-thirds, followed by a two-button cluster — one solid outline rectangle, one bare text link with a trailing rule-arrow. Below the fold the page shifts to the flat #F5F3F0 ground and runs a strict editorial rhythm: an eyebrow + headline + supporting paragraph pair opens each band, followed by asymmetric media grids, then a two-panel overlapping-image "philosophy" statement, then a three-card craft grid, then a centered contact statement, then a four-column footer. Section padding is a generous 192px, giving each band room to breathe — the deliberate choice is restraint (flat cards, no shadow, no color accent in the body) over a richer bento/shadowed-card treatment; the tradeoff is that hierarchy depends entirely on type scale and whitespace, not surface depth.

## Colors
Ground is #F5F3F0, a warm off-white paper tone that dominates the pixel field below the hero (measured ~55% as #F0F0F0-adjacent plus ~8% #D8D8D8, both reading as this same warm neutral under lighting variance); pure #FFFFFF (~22%) is used for raised flat cards and the footer-adjacent whitespace. Ink is #2C2C2C for all running body copy and #000000 for headlines, borders, and the heaviest display type — a two-step ink system rather than a full gray ramp. A near-black #181818 (~6% of pixels) appears as solid panel fill behind oversized placeholder wordmarks in the category and philosophy grids, functioning as a structural accent, not a brand color. The only chromatic note anywhere in the system is the token pair `--tw-ring-color: #3C81F5` against `--tw-ring-offset-color: #FFFFFF` — a cool blue reserved exclusively for keyboard-focus rings, never for decoration, buttons, or body accents. Nothing else in the layout carries hue; this is a monochrome-plus-photography palette by design.

## Typography
Display-lg (Playfair Display, 96px/1, -2.9px tracking, weight 400) is reserved for the hero headline only. Headline-md (Playfair Display, 48px/1) repeats for every section's lead line ("category," "philosophy," "contact" bands). Label-md (Playfair Display, 24px/1.33) steps down for card-level and sub-section headings (e.g. craft-card titles). Body-md (Plus Jakarta Sans, 20px/1.4, weight 300) carries the hero subcopy and lead paragraphs; a smaller body-default (Plus Jakarta Sans, 16px, weight 400, #2C2C2C) runs card descriptions and footer copy. An uppercase mono-caps label face in small sizes with wide tracking marks every eyebrow, nav item, and button caption — the system's structural "accent-serif/label-mono" pairing: Playfair Display is the voice, Plus Jakarta Sans is the workhorse, the uppercase label treatment is the connective tissue.

## Layout
Content is organized on a 12-column grid at a 1280px max-width with a 32px gap as the default rhythm; section padding runs 192px top/bottom, the most generous band spacing in the system. The measured 4-item asymmetric grid (rows [57/32 | 40/49]) governs the project/category showcase — two uneven-width media tiles per row rather than uniform columns, producing a mosaic feel. The 3-column craft grid (31/31/31, gap 32px) is perfectly uniform — three equal flat white cards in one row. The 4-column footer grid (22/22/22/22, gap 48px) is likewise uniform. Two-item rows at 100/100 width appear stacked full-bleed (the philosophy and media-pair sections), meaning those elements each take the full row rather than sitting side by side. Card density is low — most cards are mostly empty image/placeholder space with a short heading-plus-caption cluster pinned at the bottom-left.

## Components
- **Navbar**: edge-to-edge square bar, 80px tall, full viewport width with 0px left/right inset, all four corners 0px radius, background transparent (sits directly on hero photo), sticky. Contains a wordmark lockup at left and 7 total items: a 4-item text nav cluster at center-left, and a single capitalized CTA at far right with no secondary button beside it. No pill, no fill — pure text-on-transparent nav.
- **Hero primary button**: left-hand hero button, an observed solid near-white/outline rectangle with ~0px corner radius (sharp, not rounded), dark ink text, sitting directly under the headline — the single most emphasized control on the first screen. A second hero element beside it is a bare text link with an underline rule and trailing arrow glyph — this is a secondary/tertiary action, not a button surface.
- **Category/project media cards** (asymmetric showcase grid): appear in the mid-page "categories" band, 4 items arranged in two uneven rows (one large tile ~57% paired with a ~32% tile, then ~40%/~49%), each a flat 0px-radius rectangle filled with a dark #181818 panel bearing an oversized pale wordmark placeholder, a Playfair heading below in black, and a small mono-caps eyebrow label beneath that — media covers the large majority (80%+) of each card's height, text sits in a thin strip below.
- **Project list cards**: continuing the same family further down the page, alternating photographic thumbnails (interior/product photography) and a flat dark placeholder tile, each followed by a Playfair label-md heading and a mono-caps caption line — this is a list-style continuation of the category grid, 1 card per row width-wise but visually paired left/right across the fold.
- **Philosophy dual-image panel**: one mid-page instance, two overlapping square/rectangular dark panels (#181818 gray-toned + near-black) staggered diagonally with a soft drop shadow (`rgba(0,0,0,0.25) 0px 25px 50px -12px`), each bearing a faint oversized wordmark placeholder; paired to its right with an eyebrow, a two-line Playfair headline, two paragraphs of body-default copy, and a mono-caps text link with trailing arrow.
- **Craft/feature triptych**: 3 flat white (#FFFFFF) cards in one uniform row (31/31/31 split, 32px gap), 0px radius, 0px declared padding (content sits with internal breathing room via typography alone), each containing top-to-bottom: a small light-gray line icon, generous empty vertical space, a Playfair label-md heading, and a one-to-two-line body-default description.
- **Contact/CTA band**: single centered block near page end — mono-caps eyebrow, a two-line Playfair headline, one line of body copy, then a flat white rounded-free button (0px radius) holding an icon + mono-caps label with the elevated-card shadow (`rgba(0,0,0,0.1) 0px 20px 25px -5px, rgba(0,0,0,0.1) 0px 8px 10px -6px`), with a plain secondary phone-number line beneath it.
- **Footer**: background #F5F3F0, 10 links total organized into 3 labeled columns (navigation, social, newsletter) plus a wordmark/address block at far left; all text-only, mono-caps column headers over regular-weight link lists; an email-capture row with a bare underline input and arrow-icon submit control closes the footer.

## Graphics & Effects
No gradients, mesh, or canvas surfaces appear anywhere in this system — it is flat-fill and photographic only. The hero's only graphic device is the single full-bleed documentary photograph; all other "media" placeholders in mid-page cards are flat near-black (#181818) rectangles standing in for imagery, each bearing an oversized pale sans-serif wordmark watermark. Elevation is nearly absent: content cards sit at true 0px radius with no shadow at all, and the only two shadow values in the system are reserved for the staggered philosophy-panel pair (`rgba(0, 0, 0, 0.25) 0px 25px 50px -12px`, a deep diffuse drop shadow implying the two panels float above the page) and the contact-band CTA button (`rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px`, a tighter elevated-card shadow). No visible texture, grain, or pattern overlay is present; surfaces are clean flat color.

## Motion
Interaction motion is brief and utilitarian: a 150ms `opacity` transition on cubic-bezier(0.4, 0, 0.2, 1) governs hover/fade state changes, a matching 150ms `all` transition covers combined property shifts on interactive elements (likely buttons/links), a 100ms `ease-in` opacity transition handles quick exits, and a single slow 1s `transform` transition on the same cubic-bezier curve drives the staggered photo/panel entrance or parallax-like settle in the philosophy section. A `fadeIn` keyframe animation is declared for section/element entrance, consistent with scroll-triggered reveals rather than looping or ambient motion — the system has no idle animation, no autoplay video, and no scroll-linked parallax beyond this single transform transition.

## Guardrails
- Never round any card or button corner — every surface in this system is a true 0px rectangle; introducing an 8px or pill radius breaks the editorial identity.
- Never add a shadow to the flat white craft cards or category tiles — reserve shadow exclusively for the overlapping philosophy panels and the contact CTA button, using their exact shadow strings.
- Never introduce a second hue — the blue ring token is focus-only; do not use it for buttons, links, or decorative accents.
- Keep the Playfair Display sizes exclusive to headline/label roles; never set body copy or captions in the serif.
- Do not fill the hero background with a gradient or solid color — it must remain a single full-bleed photograph with text overlaid directly on it.
- Preserve the navbar as transparent, edge-to-edge, 80px, square-cornered — do not insert an inset margin, pill shape, or background fill.
