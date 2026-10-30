---
version: "1"
name: "Papercut Fable"
description: "A layered-paper-diorama aesthetic on a deep midnight-blue ground, with hand-painted storybook illustration, gold-foil calligraphic display type, and jewel-toned section bands that shift the whole scene's palette as the page unfolds."
colors:
  background: "#FFFFFF"
  surface-alt-teal: "#78A890"
  surface-alt-violet: "#303048"
  surface-alt-cream: "#FEF6D1"
  text-primary-gold: "#AB9546"
  text-secondary-cream: "#F6E1BB"
  text-ink: "#000000"
  link-blue: "#0000EE"
  accent-deep-purple: "#44139B"
typography:
  body-md:
    fontFamily: "Manrope"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: "1.2"
  display-serif:
    fontFamily: "Cormorant"
    fontSize: "64px"
    fontWeight: 400
    lineHeight: "1.1"
  body-serif:
    fontFamily: "Cormorant"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.5"
  accent-serif-caps:
    fontFamily: "Cormorant Unicase"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "1.3"
  accent-serif-upright:
    fontFamily: "Cormorant Upright"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: "1.2"
  label-legacy:
    fontFamily: "Times New Roman"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: "1.4"
spacing:
  base: "8px"
  gap: "14px"
  card-gap: "32px"
  section-padding: "100px"
rounded:
  control: "8px"
  badge: "50px"
  circle-seal: "203px"
  arch-card: "90px"
  medallion: "127px"
  pill: "39px"
components:
  button-buynow:
    background: "#FEF6D1"
    text-color: "#000000"
    radius: "39px"
    height: "40px"
    border: "none"
  button-price-pill:
    background: "#000000"
    text-color: "#FEF6D1"
    radius: "39px"
    height: "36px"
  button-hero-primary-observed:
    background: "near-white cream, observed"
    text-color: "#000000"
    radius: "~20px, observed"
    height: "~40px, observed"
  card-event-arch:
    background: "illustrated panel, gradient-varied per event"
    radius: "90px 90px 8px 8px"
    border: "2px solid #AB9546"
    padding: "14px"
  seal-medallion-cta:
    background: "#0C4860"
    radius: "127px"
    border: "2px solid #AB9546"
    shadow: "rgb(0, 0, 0) 0px 0px 68.5px 0px inset, rgb(0, 0, 0) 0px 0px 50px 5.09px inset"
    text-color: "#F6E1BB"
---
# Papercut Fable
Source: https://www.missingpieceinvites.com/demos/whimsical

## Overview
This is a maximalist, illustration-led storybook aesthetic built from layered die-cut paper forms — scalloped medallions, torn-edge foliage panels, arched frames — staged against a deep midnight-teal-blue (`#0C4860`) ground rendered with a visible canvas/velvet grain. It borrows from editorial/whimsical wedding-stationery design rather than any flat digital system: hand-painted gouache-style illustration (castles in clouds, hot-air balloons, engagement rings, crescent moons) supplies the imagery, while gold-foil calligraphic serif type (Cormorant family) supplies the voice. The system is section-driven: each scroll band recolors its entire stage — blue night, sage toile, plum floral, butter-yellow damask — turning the page into a sequence of dioramas rather than one continuous canvas.

## Composition
The first screen opens on the night-blue diorama: a centered calligraphic lockup stacked three lines tall, dwarfed by a gold constellation of stars, sparkle-glitter icons, and tiny puzzle-piece motifs scattered at low density across the full width. A soft-cut paper arch (cream, torn foliage edge) intrudes from the bottom, foreshadowing the next diorama before it starts — the signature move: every section bleeds into the next through an irregular torn-paper silhouette instead of a hard rule. Below the fold, illustrated vignettes (castle-in-clouds, ring, moon) sit inside the night sky at generous whitespace before a dedication line and a row of three arch-topped illustration cards. The page then cycles: sage toile band with one centered circular seal → plum floral band with a second seal → butter-yellow damask closing band with a third seal, countdown, and credit line. This rejects a single unified hero-to-footer canvas in favor of discrete themed stages, trading visual continuity for per-section drama.

## Colors
The dominant field is a deep teal-blue (`#0C4860`/`#003048`-family, ~25% of pixels combined) used as page background for the opening and card-illustration zones — never overwritten by a full-bleed gradient, only accented with gold ornament. Sage-green (`#78A890`, ~9%) and slate-teal (`#90A8A8`, ~6%) own the "route" mid-page band as a toile-pattern surface. A muted navy-violet (`#303048`, ~5%) hosts the RSVP band. White (`#FFFFFF`, declared at near-total area but reading as ~28% of visible pixels) supplies illustration highlights, cloud forms, and card interiors rather than the page shell. Gold (`#AB9546`/`#AC9545`) is the rationed accent — every headline, hairline circle-seal border, and small icon uses it, and it is the only warm hue permitted against the cool blues until the closing cream/yellow band. Ink black (`#000000`) and classic hyperlink blue (`#0000EE`) appear only in body/legal-style text, kept deliberately plain against the ornamented illustration. Deep purple (`#44139B`) and pale butter (`#FEF6D1`) are reserved for the final countdown stage, marking it as the "arrival" tone shift.

## Typography
Display lines are set in Cormorant at large size, thin-weight, tight leading (~1.1), gold-colored, centered — the single recurring signature. A second display cut, Cormorant Upright, handles slightly heavier ornamental headline words (e.g., an ampersand glyph rendered oversized as its own display moment). Cormorant Unicase provides small-caps-style connector words between two display names, sized far smaller than its neighbors — an intentional whisper between two shouts. Body and caption text throughout sits in regular-weight Cormorant at ~14px, colored gold or cream depending on the section's ground, always centered, never left-aligned. Manrope appears only as a bold utility face — used at 22px/600 for compact UI text such as the pill buttons in the top-right corner, giving those two controls a modern-sans contrast against the otherwise all-serif page. A legacy Times New Roman trace exists in low-emphasis micro-copy (link instructions, QR captions).

## Layout
There is no visible column grid; this is a free-form illustrated-stage layout, each section a fixed-height diorama with centered content and asymmetric decorative elements bleeding off both edges. Content is capped near 1500px max-width but reads visually centered within a narrower ~700–900px column for text stacks. Card/seal spacing runs on an irregular hand-set rhythm (10px, 14px, 32px gaps) rather than a strict 8px system, consistent with a paper-craft, non-grid-snapped feel. The three-arch event-card row is the only true multi-column composition on the page: **rows of [3 equal-width arch cards]**, uniform span, no bento asymmetry — a straightforward card grid, not a bento or masonry pattern. Circular medallion CTAs (route, RSVP, Instagram) are single, full-width-centered, one per section — never grouped — each acting as a full-bleed section punctuation mark rather than a grid item.

## Components
- **Navbar**: a transparent, non-bounded bar (no visible fill or edge) pinned top-right only, ~48px tall, containing two adjacent pill controls — an off-white/cream "Buy Now" pill (`#FEF6D1`-toned, radius 39px, ~40px height) beside a solid black pill badge showing a price figure (`#000000` fill, cream text, radius 39px, ~36px height). No logo, no left-side nav items, no hamburger — this is an asymmetric, right-anchored micro-navbar, not a full edge-to-edge bar.
- **Button — cream pill (Buy Now)**: rounded-pill (39px), cream/off-white fill, black text, sits top-right; hover state not evidenced but consistent with a lift/darken micro-interaction typical of this pill class.
- **Button — black price badge**: pill radius, solid black fill, small cream numeral text, positioned immediately right of the Buy Now pill, functions as a secondary label rather than an action.
- **Hero primary CTA (observed)**: no separate large hero button beyond the nav pills is visible on the first screen — the cream Buy Now pill functions as the page's primary action, an observed near-white solid with a full pill radius (~20px+ corner feel), placed in the header rather than under the headline.
- **Event card (arch-topped)**: appears ×3 in a row beneath the dedication text; each is a torn/scalloped-edge arch panel, gold-illustrated border, an illustrated vignette of a couple at top covering ~60% of the card, a small hot-air-balloon icon overlapping the top edge, and a crescent-moon cutout bleeding from the side edge — pure illustration, no text baked into the card itself beyond the artwork.
- **Circular seal / medallion CTA**: appears once per themed section (route, RSVP, Instagram) — a large scalloped-edge circle (radius ~127px+), double gold/teal ring border, small circular illustration inset at top (ring, portrait miniature, mermaid vignette), a two-line serif headline centered, a smaller instruction caption below, and a tiny QR or ornament glyph at the base. Fill shifts per section (`#0C4860` night version, `#78A890`-toned sage version, plum version) but the anatomy is identical each time — media inset, headline, caption, icon.
- **Countdown block**: plain centered text stack on the closing cream/yellow band — a serif label line, a large digit-string countdown row, and a smaller paragraph beneath; no card container, sits directly on the damask-pattern background.
- **Footer**: minimal single-line copyright caption centered beneath the countdown block, no columns, no icon row, matching the closing band's plain-text treatment.

## Graphics & Effects
Every seal/medallion carries an inset shadow of `rgb(0, 0, 0) 0px 0px 68.5px 0px inset, rgb(0, 0, 0) 0px 0px 50px 5.09px inset` — a heavy double inner-shadow that reads as a deep engraved/cupped disc rather than a flat circle; this is the system's signature elevation cue, used only on circular CTA seals, never on rectangular cards. A `blur(8px)` backdrop-filter is present, likely softening a translucent layer behind the nav pills or seal overlays. The dominant background texture across every section is a visible fine paper/velvet grain plus a repeating tone-on-tone damask/toile pattern (crown-and-diamond lattice in the blue section, foliate bird toile in the sage section, floral brocade in the violet and yellow sections) — always same-hue-on-same-hue, never a contrasting print. Gold glitter-texture icons (stars, sparkle bursts, tiny jigsaw pieces) are scattered at low density as a decorative dust layer, not a dense pattern. No photographic imagery anywhere — only painted illustration, positioned with drop shadows to fake paper-layer depth (visible cast shadows under balloons, foliage, and card edges).

## Motion
Built on framer-motion and lenis, implying smooth inertial scroll (lenis) with element-level reveal/parallax choreography (framer-motion) — consistent with the section-by-section diorama reveal: each themed band likely fades or rises into place as it enters viewport, and the torn-paper arch transitions between bands suggest a scroll-linked reveal rather than a hard cut. Expect gentle, slow easing (no snap/spring evidence) suited to a storybook pacing rather than a snappy app-UI feel.

## Guardrails
- Never replace the torn/scalloped paper-edge section transitions with straight horizontal dividers — the irregular silhouette is the section-break signature.
- Never fill the whole hero with a saturated gradient; the ground stays deep teal-blue with gold ornament rationed to type, icons, and seal borders only.
- Never render the circular medallion CTAs as flat-fill discs — they require the heavy double inset shadow to read as engraved seals.
- Keep Manrope confined to the two header pill controls; all headline and body text stays in the Cormorant serif family.
- Do not merge the three arch-topped event cards into unequal spans — they are a uniform three-up row, not a bento grid.
- Preserve the per-section palette shift (blue → sage → violet → yellow); do not unify the page into one background color.
