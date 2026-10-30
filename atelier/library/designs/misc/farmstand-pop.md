---
version: "1"
name: "Farmstand Pop"
description: "Illustration-forward, hand-drawn-line grocery system on a warm blush base, with fruit-bright orange/yellow/teal blocking and a chunky rounded display face."
colors:
  background: "#FFFFFF"
  surface: "#DACCC3"
  page-band-accent: "#FF5F00"
  page-band-info: "#FFD800"
  ink-dark: "#132525"
  ink-black: "#0B2222"
  text-primary: "#132525"
  text-on-dark: "#FFFFFF"
  accent-orange: "#FF5F01"
  accent-teal: "#133E3E"
  footer-bg: "#132525"
typography:
  headline-md:
    fontFamily: "Nichrome Dark"
    fontSize: "37px"
    fontWeight: 400
    lineHeight: "1.4"
  body-md:
    fontFamily: "Nichrome Dark"
    fontSize: "50px"
    fontWeight: 700
    lineHeight: "1"
  label-md:
    fontFamily: "Nichrome Dark"
    fontSize: "28px"
    fontWeight: 400
    lineHeight: "1.2"
    letterSpacing: "2px"
  body-copy:
    fontFamily: "Cabin"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: "1.5"
  accent-serif:
    fontFamily: "Arvo"
    fontWeight: 400
    role: "editorial accent face used sparingly for quoted/callout lines"
spacing:
  base: "6px"
  gap: "10px"
  micro: "5px"
  section-padding: "70px"
  section-padding-lg: "117px"
  inline-gap: "19px"
rounded:
  control: "19px"
  control-lg: "20px"
  pill: "50px"
  square: "19px"
components:
  navbar:
    background: "#DDCAC0"
    height: "104px"
    width: "100%"
    radius-tl: "0px"
    radius-tr: "0px"
    radius-br: "0px"
    radius-bl: "0px"
    position: "sticky"
    item-count: 26
    cta-background: "#FF5E00"
    cta-text-color: "#132525"
    cta-radius: "0px"
    cta-height: "36px"
  button-hero-primary:
    background: "#FF5F00"
    text-color: "#132525"
    radius: "50%"
    height: "48px"
    padding: "0px"
    shadow: "rgba(0, 0, 0, 0.06) 0px 1px 6px 0px, rgba(0, 0, 0, 0.16) 0px 2px 32px 0px"
    note: "circular icon-style dispatcher seen at hero corner; not the headline CTA"
  button-hero-headline:
    background: "#FF5F00"
    text-color: "#FFFFFF"
    radius: "6px"
    height: "48px"
    padding: "12px 28px"
    note: "observed near-solid orange pill/rounded-rect under hero headline, off-white/white label text, slightly rounded corners"
  button-primary-orange:
    background: "#FF5F01"
    text-color: "#FFFFFF"
    radius: "19.1324px"
    height: "73px"
    padding: "19.1324px 47.831px"
    hover: "opacity 0.8"
  button-primary-teal:
    background: "#133E3E"
    text-color: "#FFFFFF"
    radius: "20.4042px"
    height: "78px"
    padding: "20.4042px 51.0106px"
    hover: "opacity 0.8"
  button-secondary-blush:
    background: "#DDCAC0"
    text-color: "#0B2222"
    radius: "0px"
    height: "50px"
    padding: "13px 26px"
    hover: "opacity 0.8"
  card-media-panel:
    background: "transparent"
    radius: "0px"
    padding: "0px"
    anatomy: "full-width panel, media top-bleed"
  card-media-body:
    background: "transparent"
    radius: "0px"
    padding: "0px"
    anatomy: "full-width panel, media top-bleed, body text"
  card-media-left:
    background: "transparent"
    radius: "0px"
    padding: "0px"
    anatomy: "full-width panel, media left-bleed, body text"
  card-circle-media:
    background: "transparent"
    radius: "0px"
    padding: "0px"
    anatomy: "circular media-top-bleed, heading, body text"
  card-footer-text:
    background: "transparent"
    radius: "0px"
    padding: "20px"
    anatomy: "body text only"
  footer:
    background: "#132525"
    link-count: 25
---
# Farmstand Pop
Source: https://hungryharvest.net/

## Overview
This is an illustration-forward, editorial-flat aesthetic: hand-drawn linework (loopy arrows, asterisk sparks, wobbly outlines) laid over a blush-neutral field, punctuated by fruit-bright orange/yellow/teal color blocks and photographic circle-crops. The type system pairs a chunky, rounded-slab display face (Nichrome Dark) for headlines and labels against a plain humanist sans (Cabin) for body copy — a friendly, farmers-market-poster register rather than a corporate-tech one. Corners run either fully square (navbar, most cards) or fully round (pill buttons, circle-crop photos), with almost nothing in between except the two large mid-page CTA pills at ~19–20px radius. This binary corner language — sharp panels containing round imagery and round buttons — is the system's structural signature.

## Composition
The first screen is a two-column split: static display headline and short supporting copy plus one CTA on the left, a loose scatter of product photography (bottle, produce, packaged goods) on colored organic blobs and free line-art (asterisks, arrows, a dashed connector) on the right — no grid, pure collage. A jagged orange zigzag border seals the hero to the next band. Scroll rhythm alternates: a full-bleed saturated color band (orange) with a single centered message and dark pill CTA; a white 4-up icon-and-caption row explaining a numbered process, capped by one centered outline-style button; a blush full-width text band with an oversized two-line statement; then a repeating alternating-layout pattern of circular photo crops paired with heading + body + solid CTA, image and text swapping sides each time. A yellow full-bleed band interrupts near the bottom for a testimonial. The page closes with a 4-up circular-photo tip row on white and a dark, dense multi-column footer. Density is low-to-medium throughout — generous whitespace, one idea per band — trading a strict grid for illustrative asymmetry; the alternative (a tight uniform card grid) is deliberately rejected in favor of hand-placed, overlapping organic shapes.

## Colors
Background is dominant white/off-white (#FFFFFF ~30%, blush #D8D8C0-family ~31% combined as the neutral surface), so this reads as a light, warm system, not dark-mode. Orange (#FF6000/#FF5F00 family, ~17% of pixels) is the primary accent and action color — it fills the hero CTA-adjacent circular button, the mid-page pill buttons, one full-bleed message band, and dozens of small line-art produce icons; it is the single most-repeated brand color. A deep teal/near-black (#183030 family, ~6%) supplies the second CTA variant, footer background, and ink for display headlines — functioning as the grounding "text-on-light" and "dark-surface" role. Yellow (#FFD800, ~5%) is rationed to exactly one full-bleed testimonial band, never used elsewhere. A dusty blush/mauve (#DACCC3/#DDCAC0) is the recurring surface tint for the navbar and secondary text bands, distinct from pure white. Body ink is #132525/#0B2222, never pure black. Blue, purple, and green appear only inside product photography and illustration fills (blobs, leaf icons), never as UI chrome — color is rationed to accents and illustration, leaving typography and layout structure entirely uncolored (black-on-white or black-on-blush).

## Typography
Headlines and section titles use Nichrome Dark, a bold rounded-slab display face, at two operative sizes: a large ~50px/700 weight for hero and mid-page statement headlines, and a lighter ~37px/400 for secondary heading rows — both set at tight lh 1–1.4. All-caps labels (nav items, button text, footer column heads) use the same Nichrome Dark family at ~28px/400 with 2px tracking, giving buttons and nav a distinct blocky, spaced-out capital treatment separate from body prose. Body copy throughout — descriptive paragraphs, captions — runs in Cabin at 19px/400, ink #132525, a plain warm sans that keeps long-form text legible against the busy illustration backdrop. Arvo, a slab serif, appears as a restrained accent face for occasional editorial/quote-style lines, providing textural contrast without overtaking the Nichrome Dark hierarchy.

## Layout
No strict multi-column grid governs the page; it is section-stacked with each band running full width or full-bleed. Card "grids" are single-row lists rather than multi-row matrices: the navbar's 26 items sit in one uninterrupted row (rows [100]×5 measured slices), the mid-page feature/testimonial groups run as one row of 3 equal panels (rows [100|100|100]), and the closing tips strip runs 4 items across in one row — always uniform single-row spans, never bento-style mixed spans. Spacing uses a tight micro-rhythm (5px, 6px, 10px) for internal control padding and large section gutters (70px, 117px) between major bands. Circular photo crops (media-top-bleed or media-left-bleed anatomy) recur as the primary imagery shape, breaking from the otherwise square-panel/full-bleed-band structure. The system reads as content-led and hand-composed rather than systematized-grid; responsiveness would collapse the row counts to single-column stacks while preserving the circle-crop and full-bleed band devices.

## Components
- **Navbar**: edge-to-edge square bar, 104px tall, 100% viewport width, all four corners 0px radius, sticky on scroll, background #DDCAC0, logo mark at left, 26 total nav items/utilities across primary links and icon utilities, CTA at right filled #FF5E00 with #132525 text, 0px radius, 36px height — a flat rectangular utility strip, not a capsule or inset bar.
- **Hero primary CTA**: an observed near-solid orange rounded rectangle/pill beneath the hero headline, white label text, ~6px corner rounding — the single highest-contrast, most-emphasized control on the first screen.
- **Hero circular icon button**: solid #FF5F00 fill, white/dark text, full 50% (circular) radius, 48px height, 0px padding, soft dual drop shadow `rgba(0,0,0,0.06) 0px 1px 6px 0px, rgba(0,0,0,0.16) 0px 2px 32px 0px` — a compact circular utility control near hero imagery, not the main CTA.
- **Button — orange rounded (mid-page)**: fill #FF5F01, white text, radius 19.1324px, height 73px, padding 19.1324px 47.831px, hover fades to opacity 0.8; used as the primary conversion action inside content bands.
- **Button — teal rounded (mid-page)**: fill #133E3E, white text, radius 20.4042px, height 78px, padding 20.4042px 51.0106px, hover opacity 0.8; a secondary dark-accent CTA alternating with the orange variant across bands.
- **Button — blush square (secondary/utility)**: fill #DDCAC0, ink #0B2222 text, 0px radius, 50px height, padding 13px 26px, hover opacity 0.8; a low-emphasis, all-caps labeled control (e.g., a centered "find/learn" action beneath the process row).
- **Process/feature row**: appears once, white background, 4 items across in a single row, each composed of a small hand-drawn produce icon, a bold caption line, and a short body paragraph — no card border or shadow, transparent surface, capped by the blush-square button.
- **Alternating media/text panels**: appear ×3 through the mid-page, each a full-width transparent panel pairing a large circular photo crop (left- or top-bleed) with heading + body copy + a solid rounded CTA (orange or teal variant); image side alternates left/right each instance; loose hand-drawn arrow or spiral line connects photo to text.
- **Testimonial band**: single full-bleed yellow section, oversized organic orange leaf/blob shapes behind a centered heading, a large quote line, and an attribution name; carries prev/next scroll-rail arrows at the band edges (horizontal scrolling rail of testimonials).
- **Tips/content strip**: near the page end, 4 circular photo-crop cards in one row, each with body-text caption beneath, 20px internal padding, transparent background, 0px radius — a scrolling-rail-style closing content grid.
- **Statement band**: full-width blush surface holding one oversized two-line display headline, centered, no imagery — a pure typographic interruption between sections.
- **Footer**: background #132525 (near-black teal), dense multi-column link layout, 25 total links across labeled columns, small circular social icons at top-center, all-caps Nichrome Dark column headers, Cabin body links.

## Graphics & Effects
Hand-drawn vector line art (thin black stroke, ~2px) recurs across every band: looping arrows, spiral connectors, asterisk/spark marks, and produce silhouettes — this linework is the system's connective tissue, not decoration confined to one section. Organic color blobs (solid fills in orange, purple, teal, green, yellow — flat, no gradient) sit behind product photography in the hero, functioning as informal card backgrounds with no radius or edge treatment, just freeform SVG shapes. Circular photo crops throughout mid-page sections use `object-fit: cover` with a hard circular mask — the dominant imagery treatment. The only measured shadow, `rgba(0, 0, 0, 0.06) 0px 1px 6px 0px, rgba(0, 0, 0, 0.16) 0px 2px 32px 0px`, applies solely to the small circular hero utility button — a soft dual-layer elevation, not used elsewhere; a second near-invisible shadow token (`rgba(255,255,255,0) 25px 0px...`) is effectively a no-op reset seen on other elements. No blur, glass, mesh gradient, or noise/grain texture appears anywhere — surfaces are flat and opaque throughout, and the jagged zigzag divider between hero and the next band is the system's one graphic "section break" motif.

## Motion
Interaction motion is limited to short, utilitarian easing: color/background-color transitions at 0.17s ease-in-out, fill transitions at 0.17s ease-in-out, a slightly quicker color-only transition at 0.15s ease-out, and opacity fades at 0.2s ease-out — consistent with the hover-to-opacity-0.8 behavior specified on every button variant. No spring/overshoot or scale keyframes are present; this is a calm, quick-fade interaction language, not a bouncy or theatrical one. Named keyframe animations are limited to a third-party messenger widget (launcher, gradient, messenger) and are not part of the page's own design system.

## Guardrails
- Do not turn the navbar into a rounded, centered, or inset bar — it is a full-bleed, perfectly square 104px rectangle.
- Do not paint the hero background as a saturated gradient wash — it stays white/light with color rationed to blob shapes and product imagery only.
- Do not substitute the circular hero utility button's spec for the hero's actual headline CTA — keep them as two distinct components.
- Do not round the card/panel surfaces — all panels stay 0px radius; only buttons and photo crops are round.
- Do not add gradients, glass blur, or grain — every surface in this system is flat and opaque.
- Do not compress the alternating media/text panels or the 4-up rows into a mixed-span bento grid — they are uniform single-row layouts.
