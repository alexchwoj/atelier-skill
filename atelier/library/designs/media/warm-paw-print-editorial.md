---
version: "1"
name: "Warm paw-print editorial"
description: "Light, soft-cornered charity system on a near-white/grey field, with forest-green inverted panels and a single rationed orange accent carrying every call to action."
colors:
  background: "#E6E6E6"
  surface: "#FFFFFF"
  surface-inverted: "#234721"
  text-primary: "#282828"
  text-on-inverted: "#FFFFFF"
  accent: "#F76D31"
  accent-deep-green: "#234721"
  accent-pink-tint: "#FFB5B5"
  accent-warm-tint: "#FFF0D8"
typography:
  headline-md:
    fontFamily: "Onest"
    fontSize: "63px"
    fontWeight: 500
  body-md:
    fontFamily: "Onest"
    fontSize: "26px"
    fontWeight: 400
  label-md:
    fontFamily: "Onest"
    fontSize: "47px"
    fontWeight: 500
  body-core:
    fontFamily: "Onest"
    fontSize: "21px"
    fontWeight: 400
    lineHeight: "1.6"
  accent-numeral:
    fontFamily: "Onest"
    fontSize: "47px"
    fontWeight: 500
    lineHeight: "1.1"
spacing:
  base: "13px"
  gap: "26px"
  section-padding: "68px"
  micro: "2px"
  small: "11px"
  large: "53px"
rounded:
  control: "21px"
  pill: "39px"
  card: "39px"
  card-tight: "12px"
  badge: "13px"
components:
  navbar:
    background: "#E6E6E6"
    height: "105px"
    width: "95%"
    radius-tl: "39.375px"
    radius-tr: "39.375px"
    radius-br: "39.375px"
    radius-bl: "39.375px"
  button-hero-primary:
    background: "#F76D31"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "observed ~48px"
    padding: "observed 16px 28px"
  button-nav-cta:
    background: "#F76D31"
    text-color: "#FFFFFF"
    radius: "39.375px"
    height: "53px"
    padding: "0px 32.823px"
    hover-background: "#234721"
  button-section-primary:
    background: "#234721"
    text-color: "#FFFFFF"
    radius: "39.375px"
    height: "66px"
    padding: "0px 32.823px"
    hover-background: "#F76D31"
  button-dark-secondary:
    background: "#282828"
    text-color: "#FFFFFF"
    radius: "39.375px"
    height: "66px"
    padding: "0px 32.823px"
    hover-background: "#234721"
  button-donation-cta:
    background: "#234721"
    text-color: "#FFFFFF"
    radius: "18px"
    height: "63px"
    padding: "12px 0px"
  card-service-row:
    background: "#E6E6E6"
    radius: "39.375px"
    padding: "42px 78.75px 78.75px"
  card-feature-panel:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  card-inverted-tile:
    background: "#234721"
    radius: "39.375px"
    padding: "26.25px 26.25px 47.25px"
  card-media-bleed:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  card-text-only:
    background: "transparent"
    radius: "0px"
    padding: "7.35px 21px"
  footer:
    background: "#E6E6E6"
---
# Warm paw-print editorial
Source: https://fond-nika.ru/

## Overview
This is a soft, approachable charity-editorial system built on a flat, near-white/grey field (#E6E6E6 at ~85% declared area, reading as the dominant background) rather than any dark or glass treatment. Corners are uniformly generous — pill buttons at 39.375px, card radii matching — giving the whole system a rounded, friendly, non-technical warmth. Forest green (#234721) functions as the system's "ink block": a recurring full-fill inverted panel color, not a text color. A single hot orange (#F76D31) is the only saturated accent, rationed to CTAs, pins, and small badge motifs. Photography of animals is the real content; illustration touches (sticker-shaped cutout masks, heart motifs, sunburst badges) sit as collage ornaments layered over photo corners. This is minimalism-adjacent editorial with a mascot-driven, hand-drawn footer flourish — not brutalist, not glassmorphic, not dark-mode.

## Composition
The first screen opens on a wide inset sticky navbar, then immediately a full-bleed orange promotional strip with a top band of pin-coded location labels and a hero banner graphic — the only moment of saturated full-width color in the whole page, functioning as a banner carousel, not the brand hero. Below that, the actual mission statement appears on a solid pink tinted band (#FFB5B5-family) pairing a photo card with a heart-cutout mask against right-aligned display text. The page then alternates rhythmically: an inverted dark-green card row, a grey service-detail row with circular photo badges, a warm peach/cream gradient band introducing a sub-program with a stat strip, a donation-form card over a muted background photo, a horizontal "feed" card rail, and finally a grey-field closing CTA with a hand-drawn line illustration before the footer. The deliberate choice is alternating full-bleed color bands (orange, pink, peach, green, grey) stacked as discrete horizontal zones rather than a single continuous neutral page — this trades calm minimalism for a segmented, scrapbook-like rhythm that signals each section's distinct purpose.

## Colors
`#E6E6E6` is the dominant neutral surface (page background, navbar, footer, and the grey card row) — confirmed by the pixel field's #F0F0F0/#FFFFFF/#D8D8D8 cluster reading as near-white-grey, not dark. `#234721` (deep forest green) is the secondary structural color, used as a full-panel inverted fill (~5% of pixels, matching the measured #184818-family green patch) for card rows and one button variant — it is never a text-on-light color. `#F76D31` orange is the rationed accent: nav CTA, hero promotional banner fill, pin icons, sunburst badges, and hover states — it never spreads past small controls and one full-bleed banner strip. A warm cream/peach gradient (`linear-gradient(150deg, rgb(255, 246, 238), rgb(255, 233, 216) 92%)`) covers a mid-page stat/program band, roughly 6.7% of the page. A soft pink (`#FFB5B5`) tints one full band plus small heart/cross ornaments. Text ink is near-black (`#282828`/`#000000`), kept flat with no color variation for hierarchy — hierarchy is carried by size and weight, not hue. Large areas of the page are deliberately left uncolored (plain white/grey), letting the orange and green bands read as punctuation.

## Typography
A single family, Onest, carries the entire system at multiple weights and sizes — no serif or mono accent appears. Display headlines run at 63px/500 for section openers, with a secondary heading/numeral tier at 47px/500 used for both sub-headings and oversized statistic figures (e.g., large counter numerals in stat strips), which doubles as this system's "signature" numeral treatment: one or two large standalone digits per stat row, roughly double the size of the body copy beside them. Body copy sits at two measured sizes — 26px/400 for intro/lede paragraphs and 21px/400 for dense paragraph copy — both left-aligned, non-justified, ink colored #000000/#282828. No italic or serif interruption exists in this system; emphasis is instead carried by the orange accent color wrapping one or two words inline within an otherwise dark headline.

## Layout
Content is organized in horizontal full-bleed bands rather than a single centered column; where a measure is constrained, it sits near 715px for paragraph copy. Section padding runs 68px top/bottom, with an internal spacing scale of 53/26/13/11/2/16px governing gaps between stacked elements. Grids are simple and low-count: a 3-column equal grid (33/33/33) for triptych service panels, and a 2-column asymmetric grid (roughly 50/28 then a 92-wide row) for stat-and-portrait clusters. Card radii are uniformly large (39.375px) giving every block a soft, bento-adjacent look, though spans are mostly uniform rather than true bento variation — this is closer to a card-grid / alternating-panel magazine layout than true bento. Horizontal scrolling rails (carousel arrows, chevron controls) appear repeatedly for card feeds, keeping vertical density low despite many sections.

## Components
- **Navbar**: wide inset, uniformly rounded rectangle (not full-bleed), 105px tall, ~95% viewport width with 53px/52px left/right insets, all four corners 39.375px, sticky, background #E6E6E6, holds 25 nav items including a logo mark, text links, a phone number, utility icons, and its CTA button (#F76D31 fill, #FFFFFF text, 39.375px radius, 53px height).
- **Hero promotional banner** (first screen, full-bleed orange strip below nav): one large full-width panel, transparent/no-card-chrome, carrying a top row of four pin-labeled location badges on a cream strip, then a solid-orange zone with centered wordmark-style graphic and tagline text and large flanking animal photo crops bleeding off both edges; carousel arrows bottom-left.
- **Button — hero/CTA primary** (on hero/mission bands): #F76D31 fill, white text, full pill radius (9999px/~39px observed), compact padding (observed ~16px/28px) — this is the highest-contrast, most-repeated call-to-action shape in the system.
- **Button — nav CTA**: #F76D31, white text, radius 39.375px, height 53px, padding 0 32.823px, hover → #234721.
- **Button — section primary** (mid-page, under program headers): #234721 fill, white text, radius 39.375px, height 66px, padding 0 32.823px, hover → #F76D31.
- **Button — dark utility**: #282828 fill, white text, radius 39.375px, height 66px, hover → #234721.
- **Button — donation CTA**: #234721 fill, white text, smaller radius 18px, height 63px, used inside the donation-form card.
- **Mission card** (pink band, first screen): photo-left (heart-shaped cutout mask) + display heading-right + two body paragraphs + one dark pill button beneath.
- **Service row cards ×6** (grey band, triptych-into-stack): #E6E6E6 fill, radius 39.375px, padding 42px/78.75px/78.75px; each carries a circular/sticker-masked photo on one side, a heading, body copy, and an orange sunburst badge ornament — rows run full-width stacked [100|100|100|100|100|100].
- **Inverted program tiles ×4** (dark green band): #234721 fill, radius 39.375px, padding 26.25/26.25/47.25px; media-top circular photo, white inverted heading and body beneath, sunburst or heart ornament overlapping the photo edge.
- **Full-bleed feature panels ×4** (mid-page alternating section): transparent/no card chrome, media-right photo + heading + body, repeating as alternating-layout rows.
- **Stat/numeral strip** (peach gradient band): 2-column asymmetric grid (50/28 then 92 width), oversized numeral (47px/500) paired with small label text per stat, three stats across a divider-separated row, orange pill CTA plus two outline/ghost pill buttons beside it.
- **Donation form card** (muted photo background band): white rounded card containing stacked input fields (name/email/phone), two checkbox rows, and the green donation CTA button with amount label; collapsible "other ways to help" disclosure beneath.
- **Horizontal feed cards ×N** ("Лента событий" rail): transparent panel, media-top-bleed photo with a folded-corner paper-sticker badge showing a date, dense body text below; arranged in a scrolling rail with prev/next chevron controls.
- **Newsletter/closing band**: grey field, photo with heart ornament on left, heading + body + input-and-button pair on right, hand-drawn single-line squiggle illustration beneath spanning the full width.
- **Footer**: #E6E6E6 background, logo mark top-left, four link columns (26 links total), five circular social icons, bottom legal row with copyright and policy links.

## Graphics & Effects
The only measured gradient, `linear-gradient(150deg, rgb(255, 246, 238), rgb(255, 233, 216) 92%)`, fills one mid-page peach/cream stat band (~6.7% of the page) — it is a section background, not a hero wash; the first-screen hero itself stays solid flat orange, not gradient. Collage ornaments recur throughout: torn-paper/sticker-shaped photo masks, heart cutouts, plus-sign crosses, and orange sunburst badges — these function as a consistent decorative vocabulary layered at photo corners, standing in for any texture/grain layer (no noise or pattern background is present). Card elevation is minimal — flat fills with large radii stand in for shadow in most cards; where shadow is measured it is soft and tight: `rgba(0, 0, 0, 0.18) 0px 2px 8px 0px` for subtle lift, and ring-style white outlines (`rgb(255, 255, 255) 0px 0px 0px 2px` and a double-ring `0px 0px 0px 4px, rgba(0, 0, 0, 0.14) 0px 8px 18px 0px`) used for focus/selected states on circular avatar clusters. A hand-drawn single-stroke line doodle appears once, decoratively, above the footer.

## Motion
Transitions are short and utilitarian: `all 0.3s ease` for general hover fades, and a composite `transform, background, color, box-shadow 0.15s/0.3s/0.3s/0.3s cubic-bezier(0.4,0,0.2,1), ease, ease, ease` for buttons swapping fill color on hover (e.g., orange↔green swaps). Opacity-only fades use `opacity 0.3s ease`; transform-only moves use `transform 0.3s ease`. A custom `opb-pulse` keyframe suggests a subtle looping pulse on ornament badges, and `opb-av-in` an entrance animation for avatar/photo clusters. No scroll-linked or parallax motion is evidenced; carousels advance via discrete arrow-click navigation, not autoplay sweep.

## Guardrails
- Never render the hero as a dark or glass surface — the dominant field is light grey/white with the orange banner as the only saturated full-bleed moment.
- Never use the peach gradient as a page-wide or hero background; it belongs only to the mid-page stat band.
- Keep #234721 green as a solid inverted panel fill, never as a body-text color on light backgrounds.
- Do not sharpen corners — every button and card uses the large 39.375px-family radius; sharp/square corners are foreign to this system.
- Do not invent a serif or mono accent face — Onest alone carries all type, with hierarchy from size/weight only.
- Keep the orange accent rationed to CTAs, pins, and badges — do not let it spread across large fills beyond the one promotional banner.
