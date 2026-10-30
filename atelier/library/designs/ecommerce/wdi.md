---
version: "1"
name: "Ivory advocacy grid"
description: "A light, editorial-warm advocacy system on cream and white surfaces, carried by a coral/crimson headline voice, a rationed emerald accent for commerce moments, and a deep-violet CTA thread running through every conversion point."
colors:
  background: "#FFFFFF"
  surface: "#F7F9FB"
  surface-warm: "#FAF9F6"
  hero-tint: "#FFF0D8"
  text-primary: "#000000"
  text-secondary: "#444444"
  brand-headline: "#D33031"
  brand-violet: "#4F1B6E"
  accent-emerald: "#1F9D5A"
  accent-blue-border: "#5D78FF"
typography:
  headline-md:
    fontFamily: "Poppins"
    fontSize: "22px"
    fontWeight: 500
    lineHeight: "1.5"
  body-md:
    fontFamily: "Poppins"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.4"
  label-md:
    fontFamily: "Poppins"
    fontSize: "24px"
    fontWeight: 500
    lineHeight: "1.3"
  accent-icon:
    fontFamily: "Font Awesome 5 Free"
    fontWeight: 900
  accent-brand-icon:
    fontFamily: "Font Awesome 5 Brands"
  accent-alt-sans:
    fontFamily: "Rubik"
spacing:
  base: "8px"
  gap: "20px"
  gap-lg: "30px"
  section-padding: "50px"
rounded:
  control: "5px"
  card: "10px"
  card-lg: "12px"
  pill: "100px"
components:
  button-primary-hero:
    background: "#4F1B6E"
    text-color: "#FFFFFF"
    radius: "5px"
    height: "58px"
    note: "observed near-solid violet rectangle, ~5px corners"
  button-nav-link:
    background: "transparent"
    text-color: "#444444"
    radius: "0px"
    height: "58px"
  button-nav-cta:
    background: "transparent"
    text-color: "#FFFFFF"
    radius: "0px"
    height: "56px"
    padding: "15px 21px"
  button-outline-attend:
    background: "transparent"
    border: "1px solid #5D78FF"
    text-color: "#5D78FF"
    radius: "5px"
  card-focus-area:
    background: "#FFFFFF"
    radius: "10px"
    padding: "0px 15px"
    shadow: "rgba(7, 104, 159, 0.1) 0px 5px 20px 0px"
  card-sustainability-media:
    background: "transparent"
    radius: "10px"
    padding: "0px 15px"
  card-event:
    background: "#FFFFFF"
    radius: "10px"
    padding: "0px 15px"
    shadow: "rgba(0, 0, 0, 0.05) 0px 5px 20px 0px"
  card-pricing:
    background: "linear-gradient(-35deg, rgb(31, 157, 90) 0%, rgb(31, 157, 90) 100%)"
    radius: "12px"
    border: "1px solid #1F9D5A"
    text-color: "#FFFFFF"
  card-pricing-plain:
    background: "linear-gradient(-35deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)"
    radius: "12px"
    border: "1px solid #1F9D5A"
    text-color: "#000000"
  card-testimonial:
    background: "#FFFFFF"
    radius: "10px"
    border: "1px solid #E9E9E9"
    padding: "20px"
---
# Ivory advocacy grid
Source: https://worlddayinnovations.com/

## Overview
This is a light, minimalism-adjacent editorial system built on white and cream surfaces (#FFFFFF, #F7F9FB, #FAF9F6), warmed at the hero by a pale cream tint (#FFF0D8) rather than any dark or aurora treatment. The voice is carried by Poppins across every weight and role — a single-family type system with Rubik and an icon face (Font Awesome) as quiet support. Color is otherwise disciplined: a coral-crimson (#D33031) headline accent, a deep violet (#4F1B6E) for every commitment-moment button, and emerald green (#1F9D5A) rationed almost entirely to pricing/commerce cards. The overall grammar reads as "advocacy-brand editorial" — rounded 10–12px cards, soft blue-tinted shadows, no glass, no gradients on primary surfaces, gradients reserved for two specific icon-badges and the pricing card fills.

## Composition
The first screen opens as a large cream card (hero-tint #FFF0D8) inset within a white page margin, not full-bleed — an eyebrow, a three-line coral/orange headline, a short body line, and one violet CTA sit left; a white-circle-backed photographic cutout occupies the right half. Below the fold, rhythm alternates: a 3-up icon-card row (white cards on white bg), then an image-plus-copy split band (gradient-framed photo card + right-column text + violet CTA), then a red-headlined 3-up card row restating focus areas, then a 3-up photographic grid for sustainability themes, then an events list, a violet CTA banner, a 3-tier pricing row, a 2-up testimonial row, a soft-pink wave-background CTA band, then a blog teaser row and a warm-cream footer. The deliberate choice is rhythmic alternation of white-bg and cream/off-white bands to segment sections without borders — rejecting a bordered-card or dark-toned-section alternative; sections are separated by background luminance shift and generous 50px padding, not by dividers or shadow-heavy card stacks.

## Colors
White (#FFFFFF, ~60% pixel share) and near-white grays (#F0F0F0 ~24%, #FAF9F6/#F7F9FB) are the dominant page background — this is a white-first system, not dark-mode. Cream (#FFF0D8, ~4%) is reserved for the hero card and a couple of light section washes. Emerald (#18A860/#1F9D5A, ~4%) is rationed strictly to pricing-tier fills and a couple of icon badges — it is the only saturated hue given real page area. A pale pink wash (#FFF0F0, ~3%) marks the closing CTA band. Ink is #444444 for body copy and #000000 for stronger secondary/heading text; #D33031 carries every red headline and section title; #4F1B6E is the sole button/CTA fill color across the entire page, giving the violet a "commit" role distinct from red's "announce" role. Borders lean on a near-invisible #E9E9E9 hairline or a saturated #5D78FF outline (used only on the small outline "attend" buttons). Nothing on the page is colored dark/near-black as a surface — the deepest fills are the violet CTAs and the black-to-charcoal icon-badge gradient.

## Typography
Poppins is the system typeface at every level: headline-md at 22px/500 (lh 1.5) for card and section sub-headings, label-md at 24px/500 (lh 1.3) for stat/label emphasis, and body-md at 16px/400 (lh 1.4) for all running copy, measured at #444444 with #000000 used for higher-emphasis secondary lines (names, plan titles). Display headlines (the hero's three-line statement, section titles like the focus-areas or pricing headers) run larger and bolder than the measured scale, in the same coral/crimson (#D33031), extra-bold weight, tight leading — the system's only "big type" moment. Rubik appears as a secondary sans, likely for numeral-heavy or label contexts (pricing figures, stat rows); Font Awesome (Free + Brands) supplies every icon glyph, used at icon-badge and inline sizes matching adjacent text. No serif or mono appears anywhere — this is an all-sans, single-primary-family system.

## Layout
Content is capped at a 1350px max-width, centered, with a generous cream-inset hero card sitting inside that container rather than running edge-to-edge. Card grids repeat as 3-column rows at both 20px and 30px gap, each row uniform at three equal-width items (rows [32/32/32] confirm even thirds) — used for the icon-topped focus-area cards, the photographic sustainability-theme cards, and the event-listing cards; none of these grids introduce spanning or asymmetric tiles, so this reads as a uniform card grid / repeated triptych pattern rather than bento or masonry. The pricing section is a 3-up row where the center card (Silver) is visually promoted via full green fill while its siblings stay white/outline — the row's only compositional break from uniformity. Testimonials sit two-up. Vertical rhythm uses spacing steps of 8/10/14/15/20/50px, with 50px as the dominant section gutter. The grid is fully responsive by stacking to one column under the 3-up breakpoints, per the card padding pattern (`0px 15px`) that assumes fluid full-bleed-within-column behavior at narrow widths.

## Components
- **Navbar**: edge-to-edge square bar, 168px tall, 100% viewport width, all four corners 0px radius (sharp, full-bleed, no inset) — background transparent over the page, static (non-glass, non-blurred), holding 22 total items across nav links (11 buttons, transparent, #444444 text, 0px radius, 58px height) and CTA-style items (6 buttons, transparent bg, #FFFFFF text, 0px radius, 56px height, 15px 21px padding) plus a logo mark at left.
- **Hero primary CTA**: one violet (#4F1B6E) solid rectangular button beneath the headline, observed ~5px corner radius, white text, comfortable horizontal padding — the single highest-contrast, highest-emphasis control on the first screen; every other button on that screen (nav links, nav CTA) is a lower-emphasis transparent utility, not the primary.
- **Icon-badge triptych** (mid-page, first 3-up band): white cards, 0px radius, 0px/15px padding, top-aligned square icon badge (red rounded-square fill, ~10px radius) → bold heading → 3–5 line paragraph body; arranged 3 per row, one row only.
- **Story/media-split band**: one gradient-cornered photo card (`linear-gradient(132deg, rgb(31,157,90) 0%, rgb(239,213,39) 70%)` visible as the card's rounded backing edge) holding a top-bled photographic image with an overlaid caption graphic, paired right with an eyebrow label (violet), a red two-line heading, a body paragraph, and one violet CTA button.
- **Focus-area triptych** (red-headline restatement): white cards, 10px radius, soft shadow `rgba(7, 104, 159, 0.1) 0px 5px 20px 0px`, each holding a centered red-line icon glyph, a bold dark heading, and a centered short paragraph; 3 per row.
- **Sustainability photo-card triptych**: image-top-bleed cards, 10px radius, no visible caption chrome in the crop shown — 3 per row, each a single full-bleed photograph filling the card top with heading/body implied beneath.
- **Event list cards**: white cards, 10px radius, shadow `rgba(0,0,0,0.05) 0px 5px 20px 0px`, anatomy top-to-bottom: bold heading, 2–3 line body, a calendar-icon date row, and a paired outline "attend" button (#5D78FF border/text, small radius) at the row's right edge; 3 per row, followed by one centered violet "view all" button below the row.
- **Pricing triptych**: 3 cards, 12px radius, 1px green-bordered outline; center card fully filled with the emerald gradient (`linear-gradient(-35deg, rgb(31,157,90) 0%, rgb(31,157,90) 100%)`) and white text/numerals, flanking cards white-filled (`linear-gradient(-35deg, rgb(255,255,255) 0%, rgb(255,255,255) 100%)`) with dark numerals; each card stacks a plan-name label, a large white-pill price capsule, 1–3 checklist rows (check-icon + text), and a bottom "choose plan" button (white capsule button on the green card, outline button on the white cards).
- **Testimonial row**: 2 cards, white fill, ~10px radius, hairline #E9E9E9 border, each holding a circular avatar photo + name + role/affiliation line (blue-tinted secondary text) + a 5-star icon row + a quoted paragraph; a right-edge circular carousel-arrow control overlaps the row.
- **Pink-wash CTA band**: full-width band tinted pale pink (#FFF0F0-family) with faint blue wave line-art overlay, holding a small violet eyebrow label, a large two-line dark headline, and one violet solid CTA button at right — no card chrome, band is the container itself.
- **Blog/read-all teaser row**: card row (specs shared with other body cards, 0px radius truncated in crop) each ending in a red "read more" chevron-link, followed by one centered violet "read all" button.
- **Footer**: transparent/warm-cream background, 12 links total organized into a "quick links" column and implicit contact column, plus a logo lockup, a short mission paragraph, and 5 circular social icon buttons (white fill, dark glyph); a 3-column layout of brand block / links / contact details with location pin, mail, and two phone-icon rows.

## Graphics & Effects
Two icon-badge gradients carry real but small page area: `linear-gradient(132deg, rgb(31, 157, 90) 0%, rgb(239, 213, 39) 70%)` (green-to-yellow, ~1.5% of page — the story-band photo card's backing corner) and `linear-gradient(132deg, rgb(0, 0, 0) 0%, rgb(61, 61, 61) 100%)` (black-to-charcoal, ~1.5% — a dark icon-badge fill elsewhere in the icon triptych). Pricing cards use flat single-color "gradients" that are effectively solid fills: white-to-white and green-to-green, both `linear-gradient(-35deg, ...)`. None of these are full-screen washes — the page background itself stays flat white/cream at every section; color only lands inside these bounded card elements. Shadows are soft and blue-tinted for elevation: `rgba(7,104,159,0.1) 0px 5px 20px 0px` on light cards, `rgba(0,0,0,0.05) 0px 5px 20px 0px` on event cards, and a near-invisible `rgba(0,0,0,0) 0px 0px 10px 0px` reset state. The pink CTA band carries a faint linear line-art wave texture as decorative overlay, not a photographic scrim. Photography throughout (hero cutout, sustainability triptych, testimonial avatars) is naturalistic and warmly lit, treated with no filter/duotone — full color, straight `object-fit: cover` crops.

## Motion
Transitions are short and utilitarian: `all 0.4s ease` for general state changes, a compound `background, border, box-shadow, transform` set at `0.3s`/`0.3s`/`0.3s`/`0.4s` all `ease` for card and button hover lifts, an extended variant adding `border-radius` at the same cadence, and a fast `background-color, color 0.15s linear` for link-level color swaps. Named keyframe animations (`ctcBounce`, `ctc_fadeIn`, `ht_ctc_cta_stick`, `spin`, `blink`, `custom-modal-fade-in`) point to a bouncing/sticky click-to-chat affordance, spinner loaders, a blinking micro-cue, and fade-in modal entrances — all small, functional micro-interactions rather than scroll-linked or parallax storytelling. The system favors ease-out feeling deceleration on hover states, no springy overshoot, and quick sub-second timing throughout.

## Guardrails
- Never darken the page background or hero — this is a white/cream-dominant system; color is a rationed accent, not a base.
- Never give the violet CTA a pill radius — it is a rectangular/slightly-rounded (~5px) solid button, distinct from any capsule shape.
- Never apply the green pricing gradient or the black icon-badge gradient as a full-section or hero background — both are small, bounded-element fills only.
- Never merge the nav's transparent link buttons with its transparent CTA buttons — they differ in height (58px vs 56px) and padding and must stay distinct tokens.
- Never add glassmorphism/blur — no component on this page uses backdrop-filter; elevation comes only from soft blue-tinted box-shadows.
- Never round the navbar's corners or inset its width — it is measured full-bleed, 0px radius on all four corners.
