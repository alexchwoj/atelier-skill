---
version: "1"
name: "Preserve-jar playground"
description: "Cream-and-ink flat-illustration system with bouncing mascot characters, a deep-plum footer band, and one saturated pink-red rationed to buttons and outlines."
colors:
  background: "#F0ECE0"
  surface: "#F5F5F5"
  surface-inverse: "#353148"
  text-primary: "#353148"
  text-on-dark: "#F5F5F5"
  accent: "#EE4D87"
  border-hairline: "#CBC7C2"
  neutral-muted: "#9B9B9B"
typography:
  display-lg:
    fontFamily: "Ginkatrial"
    fontSize: "98px"
    fontWeight: 700
    lineHeight: "1"
    letterSpacing: "-3px"
  headline-md:
    fontFamily: "Ginkatrial"
    fontSize: "98px"
    fontWeight: 700
    lineHeight: "1"
  body-md:
    fontFamily: "Instrument Sans"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: "1.4"
  label-md:
    fontFamily: "Ginkatrial"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: "1.33"
  body-copy:
    fontFamily: "Instrument Sans"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "1.4"
  accent-icon:
    fontFamily: "webflow-icons"
    fontWeight: 400
spacing:
  base: "16px"
  gap: "25px"
  section-padding: "100px"
  section-gap: "90px"
rounded:
  control: "20px"
  card: "25px"
  card-lg: "30px"
  pill: "100px"
components:
  button-primary-hero:
    background: "#EE4D87"
    text-color: "#F0ECE0"
    radius: "100px"
    height: "60px"
    padding: "0px"
    hover-background: "#353148"
    hover-text-color: "#EE4D87"
  button-primary-midpage:
    background: "#EE4D87"
    text-color: "#F0ECE0"
    radius: "100px"
    height: "70px"
    padding: "24px"
    hover-background: "#F5F5F5"
    hover-text-color: "#EE4D87"
  button-nav-link:
    background: "transparent"
    text-color: "#F5F5F5"
    radius: "0px"
    height: "70px"
    padding: "0px"
  button-outline:
    background: "transparent"
    text-color: "#EE4D87"
    radius: "100px"
    height: "70px"
    padding: "24px"
    border: "3px solid #EE4D87"
  card-media-showcase:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  card-icon-feature:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  card-faq-row:
    background: "transparent"
    radius: "0px"
    padding: "0px"
    border-bottom: "1px solid #CBC7C2"
  card-testimonial-tile:
    background: "#F5F5F5"
    radius: "30px"
    padding: "42.6562px"
---
# Preserve-jar playground
Source: https://www.jamm.co/

## Overview
This is a flat-illustration, character-led marketing system built on a warm off-white ground rather than paper white — closer to old-lace than pure white — paired with a near-black plum for ink, inversions, and the footer band. It reads as playful minimalism: rounded pill geometry, oversized rounded-grotesque display type, and hand-drawn mascot illustrations doing the emotional work usually left to photography. One saturated pink-red is the entire accent vocabulary — it never appears as a background wash, only as button fills, outlines, and small iconography. Structurally it's disciplined: wide flat content bands, uniform hairline-divided lists, and a bento-style showcase grid of screenshots — so the whimsy sits on top of a fairly conventional SaaS-marketing skeleton.

## Composition
The first screen is centered and symmetrical: a two-item nav, a large centered display headline broken across two lines, a short centered subhead, one solid pill CTA, a micro-disclaimer line, and two mascot illustrations flanking the headline at roughly its vertical center — giving the hero an A-B-A visual rhythm (character / text / character) instead of a single hero visual. Below the fold, the page shifts to a full-bleed showcase panel: a masonry-like grid of colorful screenshot tiles sitting inside one large rounded card, cropped by the viewport edge — the page's only place where saturated, varied color is allowed to dominate. This panel resolves into a flat logo strip. The middle of the page alternates: a large left-aligned display headline with a two-panel image/screenshot pair, then a four-up icon-led feature row, then an accordion FAQ list. The footer breaks the entire palette pattern by inverting to the deep plum surface, the one deliberate high-contrast moment in an otherwise flat-cream document — rejecting a gradient-hero approach in favor of saving all contrast punch for the close.

## Colors
`#F0ECE0` (old-lace) is the page background and dominates the pixel field along with its near-white neighbors — this is a cream canvas, not a stark white one. `#353148` (dark plum) is the universal ink: headlines, body text, and the full-bleed footer surface where it inverts to become the background with `#F5F5F5` text on top. `#F5F5F5` (white-smoke) serves double duty as light-mode text-on-dark and as a card surface (the testimonial tile). `#EE4D87` (deep-pink) is the single rationed accent — appearing only on primary buttons, an outline-button border, and small character/icon details; it is measured at well under 1% of page area, confirming its restraint. `#CBC7C2` functions as the hairline divider tone in the FAQ list. Grays (`#9B9B9B`, `#928E94`) are reserved for de-emphasized helper captions. Nothing else is colored — no tinted section backgrounds, no gradient fills — keeping the palette to exactly four working roles plus the plum inversion.

## Typography
Display and headline sizes share one token: Ginkatrial at 98px/700, line-height 1, tracking pulled in −3px — used for every major section headline, left- or center-aligned, sometimes wrapping to two or three short lines. Ginkatrial reappears at 18px/700 as the bold label face for FAQ questions and feature titles. Body copy runs in Instrument Sans, 400 weight — 24px for hero/section subheads, settling to about 18px for feature descriptions and FAQ-adjacent copy, at 1.4 line-height for open, airy paragraphs. There is no serif or mono accent family in use; webflow-icons supplies the FAQ chevrons and similar UI glyphs. The hierarchy is binary and confident: heavy rounded display type for headlines, plain grotesque sans for everything else — no medium-weight intermediate step.

## Layout
Content is capped at a 1400px max-width with 100px section padding and 80–100px gaps between major bands, giving the page a spacious, unhurried rhythm despite dense mascot/icon detailing. The showcase panel beneath the hero is a mosaic/bento arrangement of unequal tiles inside one rounded container — row heights measured at roughly [70/100/100/63/63/70/92] percent against a trailing [70] column, i.e., an irregular masonry of screenshot cards rather than a uniform grid, reinforcing an editorial, collaged feel. The mid-page feature grid is a strict uniform grid: 4 columns × 2 rows, gap 90px/40px, each item spanning an equal 23% width — rows read as [4 equal][4 equal], a clean bento-free card grid. The logo strip is a 5-column single-row grid with 0 gap, items sized [21/22/17/17/17]%, unevenly weighted toward the first two marks. The FAQ is a single-column stacked list, 12 rows, 16px gap, each row hairline-divided — a list layout, not a grid. No visible sticky elements; the navbar is static and scrolls away with the page.

## Components
- **Navbar**: edge-to-edge square bar, 1920px wide at measured viewport (100% width, 0px inset both sides), 45px tall, transparent background, 0px corner radius on all four corners — a flush, unbounded top bar, not an inset or capsule. Holds a wordmark/logotype at left and 4 nav text items right-of-center; no visible CTA button embedded in the bar itself (CTA lives below in the hero).
- **Button — hero primary** (observed, first screen): solid `#EE4D87` fill, `#F0ECE0` text, 100px pill radius, 60px height, 0px padding, centered under the headline — the single most emphasized control on the first screen; hover swaps to `#353148` background with `#EE4D87` text and a slight upward transform.
- **Button — mid-page primary**: solid `#EE4D87` fill, `#F0ECE0` text, 100px pill radius, 70px height, 24px padding; hover swaps to `#F5F5F5` background with `#EE4D87` text plus upward transform — same family as hero button, scaled taller for a denser mid-page CTA band.
- **Button — nav/utility link**: transparent fill, `#F5F5F5` text, 0px radius (not a button shape at all, plain text), 70px tap height, 0px padding — used ×14 for in-page nav-style links and footer utility links.
- **Button — outline**: transparent fill, `#EE4D87` text, 100px pill radius, 70px height, 24px padding, 3px solid `#EE4D87` border — the secondary paired action beside a solid pill (seen paired with the primary in the closing band).
- **Showcase mosaic tiles** (first screen, below hero): ×8 unequal-height cards, transparent/no radius/no padding wrappers holding full-bleed screenshot media that bleeds to each tile's edge — anatomy is "media only," no text overlay, arranged in the irregular row heights described above.
- **Media-pair cards** (mid-page): ×4 cards pairing a media-top-bleed image with a second tile beside it — two-up screenshot/illustration pairs used to illustrate a process step, no visible border or radius on the outer wrapper.
- **Logo strip row**: ×5 flat monochrome partner wordmarks in a single row, transparent background, no card chrome, evenly baseline-aligned, preceded by a small eyebrow icon + one-line caption.
- **Icon-feature cards**: ×8 arranged 4-across/2-deep, transparent background, 0px radius/padding — anatomy top to bottom is a small mascot/icon illustration, a bold Ginkatrial heading (1–2 words), then a short Instrument Sans description line; no card border or shadow, spacing alone separates them.
- **Testimonial/detail tile**: ×3 cards, `#F5F5F5` fill, 30px radius, ~42.6px padding — anatomy is a top media block (screenshot or portrait), a bold heading, then body copy; the only card family with an actual filled surface and radius in the whole system.
- **Expandable list cards** (FAQ): ×11 rows, transparent, 0px radius, hairline-bordered bottom edge, each holding a bold Ginkatrial question label left-aligned and a chevron icon right-aligned in `#EE4D87`; expands to reveal body copy — collapsed by default.
- **Footer/CTA band**: full-bleed section inverting to `#353148` background with `#F5F5F5` display headline, muted secondary copy, a solid pill primary button beside an outline pill secondary button, flanked by two large mascot illustrations at the outer edges, and a small utility link row (terms, social icon) beneath.

## Graphics & Effects
Illustration is the system's primary graphic device: flat-vector mascot characters (a jar, a toast slice, a preserve blob, an envelope, a phone) with thick dark-plum outlines, simple dot-and-crescent eyes, and a closed gouache-flat coloring style — no gradients or shading within the characters themselves. Soft flat gray ellipse "shadows" sit beneath floating mascots to imply they're airborne. The showcase mosaic panel is the only place saturated photographic/UI-screenshot color and gradients appear — individual tiles carry their own gradient or photo content (e.g., a magenta-to-cyan gradient tile, a violet device-mockup tile), but these are contained within small showcase cards, not spread across the page background. No blur, glass, or noise-grain texture is present; surfaces are flat and opaque throughout. Card elevation is implied only by fill contrast (`#F5F5F5` tile against `#F0ECE0` page) — no drop shadows are used on cards.

## Motion
Interactions are lightweight CSS transitions: `all 0.25s ease` and `background-color, color 0.2s ease` govern button hover-state color swaps, paired with a small upward `translateY`-style transform (matrix values around −0.13 to −0.18) giving buttons a subtle lift on hover rather than a scale change. `opacity 0.3s ease` handles reveal/fade transitions, likely for FAQ expand or scroll-in reveals. A `spin` keyframe exists for loading/spinner use. Scroll is smoothed via Lenis, giving the whole page an inertial, slightly weighted scroll feel rather than native browser scrolling — appropriate to the unhurried, generously spaced section rhythm.

## Guardrails
- Never fill the hero or any full section background with a saturated gradient — color stays flat cream/plum; saturation is confined to small showcase tiles only.
- Do not tint card backgrounds by default — most card families are transparent/no-radius; only the testimonial tile and the showcase container carry a filled, rounded surface.
- Keep the pink-red accent off body text and backgrounds; it belongs only to button fills, one outline border, and small character accents.
- Preserve the pill radius (100px) exclusively for buttons; use 25–30px radii only for the filled testimonial/showcase card surfaces, never merge the two scales.
- Do not give the navbar an inset, floating, or capsule treatment — it is flush edge-to-edge with square corners.
- Keep mascot illustrations flat-vector and outlined in dark plum; do not render them with gradients, shadows, or photographic texture.
