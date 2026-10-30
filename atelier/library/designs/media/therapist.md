---
version: "1"
name: "Pressed Bloom Editorial"
description: "Warm cream light-mode wellness system built on a serif-headline/sans-body pairing, ink-navy structure, rationed pastel section bands, and pressed-flower photographic accents."
colors:
  background: "#F1EFE8"
  surface: "#FFFFFF"
  text-primary: "#0E125A"
  text-secondary: "#000000"
  accent-coral: "#E6A388"
  accent-teal: "#79B6B1"
  accent-lavender: "#A093D6"
  accent-blue-gray: "#BDCCDB"
  neutral-btn: "#939393"
  neutral-btn-hover: "#414345"
typography:
  display-lg:
    fontFamily: "Gilda Display"
    fontSize: "40px"
    fontWeight: 400
    lineHeight: "1"
  headline-md:
    fontFamily: "Gilda Display"
    fontSize: "40px"
    fontWeight: 400
    lineHeight: "1"
  body-md:
    fontFamily: "Montserrat"
    fontSize: "22px"
    fontWeight: 500
  label-md:
    fontFamily: "Gilda Display"
    fontSize: "35px"
    fontWeight: 400
    lineHeight: "1"
  body-copy:
    fontFamily: "Source Sans Pro"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.6"
  accent-script:
    fontFamily: "La Belle Aurore"
    fontSize: "28px"
    fontWeight: 400
    lineHeight: "1.2"
spacing:
  base: "8px"
  gap: "20px"
  section-padding: "30px"
rounded:
  control: "4px"
  card: "25px"
  pill: "50px"
components:
  button-nav-cta:
    background: "#0E125A"
    text-color: "#F7F7F7"
    radius: "50px"
    height: "56px"
    border: "2px solid rgba(0, 0, 0, 0)"
    hover-background: "#F0D5B7"
  button-hero-primary:
    background: "#0E125A"
    text-color: "#F7F7F7"
    radius: "50px"
    height: "56px"
    border: "2px solid rgba(0, 0, 0, 0)"
    hover-background: "#F0D5B7"
  button-hero-secondary:
    background: "#F0D5B7"
    text-color: "#F7F7F7"
    radius: "50px"
    height: "56px"
    border: "2px solid rgb(14, 18, 90)"
    hover-background: "#79B6B1"
  card-photo:
    background: "transparent"
    radius: "25px"
    padding: "0px"
    border: "2px solid #0E125A"
  card-service-triptych:
    background: "transparent"
    radius: "0px"
    padding: "0px 15px"
  card-step-circular:
    background: "transparent"
    radius: "50%"
    padding: "0px"
    border: "2px solid #0E125A"
---
# Pressed Bloom Editorial
Source: https://www.brightmomentstherapy.com/

## Overview
This is a light-mode editorial-wellness system: a warm off-white ground (`#F1EFE8`/`#FFFFFF`) carries an ink-navy (`#0E125A`) serif-and-sans hierarchy, with rounded photographic tiles bordered in that same navy and periodic pastel section bands (coral, teal, blue-gray, lavender) that carry all the page's saturation. The dominant sensation is Swiss-adjacent restraint softened by botanical, hand-pressed-flower photography and script accents — closer to a boutique editorial brochure than a SaaS product. Corners are consistently rounded (pill buttons, 25px photo tiles, full-circle step portraits), never sharp, giving the whole system a soft, approachable geometry against its otherwise disciplined grid.

## Composition
The first screen is a two-column hero: a serif headline block with one italicized connector word on the left, a single navy-bordered rounded-rectangle portrait photo on the right, floating pressed-flower cutouts breaking the frame at the photo's corner. Below the fold the page runs as a long vertical stack of full-bleed color bands alternating with cream bands: a licensed-therapist statement band (cream), a coral service-triptych band, a cream photo-and-copy alternating band (image left/text right, then reversed), a teal quote/CTA band, a blue-gray three-step vertical timeline band, a lavender pull-quote band, and finally a cream footer. Density is low-to-medium: generous vertical spacing (30px section rhythm, 20px component gaps) and large serif type keep each band feeling uncrowded. The deliberate choice is a strict single-column-per-band vertical rhythm with alternating full-bleed color rather than a boxed, shadowed card-on-white layout — color IS the section divider here, not borders or elevation.

## Colors
Background is cream `#F1EFE8` (30.7% declared area) and white `#FFFFFF` (51.5%) — together these two near-neutral tones dominate the rendered page per the pixel field (~57%/~9%/~2% split across light neutrals), confirming a light-mode-first system, not a colored one. Ink-navy `#0E125A` is the universal text and border/structure color — every heading, body copy line, button fill, and photo-tile border resolves to this one hue, giving the page a single-ink discipline. Saturation is entirely rationed to full-bleed section bands: coral `#E6A388` (8.2% area) carries the services triptych, teal `#79B6B1` (2.8%) carries a mid-page CTA/quote band, blue-gray `#BDCCDB` (4.7%) carries the numbered-steps band, and lavender `#A093D6` (1.8%) carries the closing pull-quote band. A soft peach `#F0D5B7` appears only inside buttons (fill and hover states). Nothing else on the page is colored — icons, dividers, and body copy remain navy-on-neutral, so color exclusively signals "new section," never emphasis within a section.

## Typography
Gilda Display, a transitional serif, sets every headline and label at 35–40px/400 weight with lineHeight 1 — tight, quiet, editorial, never bold. Body copy runs in two registers: a Montserrat 22px/500 register for short standalone statements, and a smaller Source Sans Pro 16px/400 register in near-black `#000000` for paragraph copy, with secondary/meta text shifting to the navy ink tone. A cursive accent family (La Belle Aurore) interrupts select phrases — single connector words in headlines ("for"-type conjunctions) and whole short callout lines in later bands — always in italic-style script, roughly one to a handful of words per occurrence, never a full sentence's worth of body copy. This script accent is the system's signature typographic move: it never scales above its serif neighbor, it just changes voice.

## Layout
Content is centered within a 1200px max-width container. Section bands are full-bleed (edge-to-edge color) with inner content constrained to that 1200px measure. The service-offering band runs a 3-up row of equal-width triptych cards (rows: [100 | 100 | 100]) — one icon-topped card per column, no wide spanner. A checklist/rows-style content block elsewhere runs a two-item near-full-width stack (rows: [99 | 95]), reading as a simple list rather than a grid. Photo-and-copy alternating bands use a fixed two-column split (photo tile fixed at a modest square-ish size, text taking the remainder) that flips side-to-side band to band. The three-step process band is a single column of stacked circular-photo + text rows (not a grid at all — one item per row, vertically stacked). Spacing is built from a small set of increments (20px, 15px, 10px, 8px, 30px) — tight component gaps against generous inter-section padding (30px+) is what produces the airy-but-structured feel. No card in the system carries its own background fill, radius-as-card, or shadow — "card" framing throughout is achieved by border + radius on photographic tiles only; text-only groupings are unbounded.

## Components
- **Navbar**: edge-to-edge full-width bar, cream `#F1EFE8`/white fill, sitting flush at the top with a thin bottom hairline divider (visible 1px rule under the logo lockup). Five nav items (Home, Services, About, Contact Us, plus the flower-mark logo centered between links) plus one right-aligned CTA button. Logo is a hand-drawn navy flower icon paired with a small-caps serif wordmark, centered in the bar rather than left-aligned — an asymmetric three-zone layout (left nav cluster / center logo / right CTA). CTA button: navy `#0E125A` fill, `#F7F7F7` text, radius 50px (full pill), height 56px, 2px transparent border, hover fill shifts to peach `#F0D5B7`.
- **Button — hero primary**: solid navy `#0E125A` pill, `#F7F7F7` text, radius 50px, height 56px, no visible border stroke, hover → `#F0D5B7`. This is the single most emphasized control on the first screen, stacked directly under the subheadline.
- **Button — hero secondary**: peach `#F0D5B7` fill, navy 2px border (`rgb(14, 18, 90)`), `#F7F7F7`-toned label, radius 50px, height 56px, hover → teal `#79B6B1`. Appears directly beneath the primary button as a stacked secondary action, and recurs mid-page as a standalone "learn more" pill beside photo-and-copy bands.
- **Share-row icon buttons**: small navy filled circles (social glyphs), appearing directly under both the hero button stack and mid-page CTA stack — a repeating molecule, always paired with a small caption label above it.
- **Photo tile (card-photo)**: transparent background, 25px rounded corners, 2px navy border, no padding, no shadow. Holds a black-and-white portrait or hands/gesture photograph, filling the entire tile edge-to-edge (object-fit cover). Appears once large in the hero (right column), then repeatedly at smaller/medium sizes through the alternating photo-and-copy bands. Some instances are full rounded-rectangles, one variant late in the page is fully circular (used only in the three-step band).
- **Service triptych card**: transparent, 0px radius, 0 15px horizontal padding, no border/shadow. Anatomy top-to-bottom: serif heading (occasionally two-tier: small-caps label line + larger serif word beneath), a centered navy line-icon in a circular outline, then a Source Sans Pro paragraph. Three across per row, one row, equal width.
- **Two-line checklist block**: transparent, 0 radius/padding, body-text only, arranged as two near-full-width stacked rows rather than columns — used for a licensed-therapist statement paragraph block.
- **Step timeline item**: transparent, 0 radius/padding. Each row pairs a circular navy-bordered photo (fixed small diameter) on the left with a script "Step N." label + serif heading + Source Sans Pro paragraph on the right; three rows stacked vertically, full width each.
- **Pull-quote band**: full-bleed color background (teal or lavender), centered script/cursive quotation set large, with a smaller serif attribution line beneath — no card framing, just centered text on flat color.
- **Footer**: cream full-width band, three-zone layout — left a stacked navy text link list (with two nested sub-lists indented under two parent items), center the full flower-mark lockup logo over a thin divider rule with address/contact/license text beneath, right side left open except for scattered pressed-flower photo cutouts. Copyright line centered at the very bottom in small navy type.

## Graphics & Effects
Pressed real-flower photographs (purple sprigs, coral/pink blossoms, single stems) are scattered as free-floating cutout decorations breaking section corners and mid-page whitespace — never contained in a box, always drop-shadowed softly against the flat background to read as physically resting on the page. Photo tiles carry a soft drop shadow, `rgba(0, 0, 0, 0.25) 0px 3px 11px 0px`, giving each rounded portrait a slight lift off the cream ground — this is the system's only elevation cue; flat-color section bands and text blocks carry no shadow at all. Section-band color transitions are hard edges (no gradients between bands) — each band is a single flat fill full-bleed, so color changes read as a page turn, not a wash. The flower-mark logo icon itself is a thin hand-drawn navy line illustration with one small teal/star accent dot — the same linework style repeats in the service-triptych icons (line-drawn, circular-outline, single navy stroke).

## Motion
Interaction motion is limited to state transitions on interactive elements: `color 0.2s ease`, `all 0.2s ease-out`, `background-color, border-color 0.2s ease`, `color 0.2s ease-out`. All transitions are short (200ms) and ease-based with no spring/overshoot — hover states (button fill swaps, nav underline/color shifts) resolve quickly and quietly. There is no evidence of scroll-triggered reveals, parallax, or looping animation; the page's sense of movement comes entirely from its alternating band rhythm and floating flower photography, not from motion design.

## Guardrails
- Never fill a section band with a gradient — bands are flat, single-hue, full-bleed color only; color changes are hard-edged band breaks.
- Never sharpen the photo tiles, buttons, or step-circles — 25px/50px/50%-radius rounding with a 2px navy border is the only card language in this system; no drop-in generic square cards.
- Never apply the script accent family to more than a few words or a short line at a time — it is a voice interruption, not a body or headline replacement.
- Never introduce a second saturated color into the same section band — each band uses exactly one accent hue against navy text.
- Never give buttons a shadow or glass treatment — buttons are flat pill fills with a 2px border variant only; elevation belongs to photo tiles alone.
- Never left- or right-align the navbar logo — it is centered between two flanking nav clusters, an asymmetric three-zone bar, not a standard left-logo layout.
