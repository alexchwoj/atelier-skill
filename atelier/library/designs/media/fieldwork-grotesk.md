---
version: "1"
name: "Fieldwork Grotesk"
description: "Cream-and-black editorial system with condensed Sora display type, a single rationed orange fill, angled corner-brackets, and skewed card wedges."
colors:
  background: "#FFF4EA"
  surface-dark: "#111111"
  surface-white: "#FFFFFF"
  text-primary: "#111111"
  text-inverse: "#FFFFFF"
  text-secondary: "#666660"
  accent: "#FF6A00"
  accent-hover: "#E85F00"
  footer-bg: "#161616"
typography:
  display-lg:
    fontFamily: "Sora"
    fontSize: "102px"
    fontWeight: 400
    lineHeight: "0.82"
    letterSpacing: "-10.2px"
  headline-md:
    fontFamily: "Sora"
    fontSize: "80px"
    fontWeight: 400
    lineHeight: "0.89"
    letterSpacing: "-7.2px"
  body-md:
    fontFamily: "Inter"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.65"
  label-md:
    fontFamily: "Sora"
    fontSize: "27px"
    fontWeight: 400
    lineHeight: "1.5"
    letterSpacing: "-2.2px"
  body-default:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
  label-mono:
    fontFamily: "ui-sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: "1.4"
spacing:
  base: "8px"
  gap: "23px"
  micro: "6px"
  card-pad: "30px"
  section-padding: "110px"
rounded:
  control: "8px"
  card-hero-image: "14px"
  pill: "14px"
content-max-width: "660px"
components:
  button-nav-cta:
    background: "#111111"
    text-color: "#FFFFFF"
    radius: "0px"
    height: "42px"
    padding: "0px 15px"
    border: "1px solid rgba(0, 0, 0, 0)"
    hover-background: "#FF6A00"
  button-hero-primary:
    background: "#FF6A00"
    text-color: "#FFFFFF"
    radius: "14px"
    height: "46px"
    padding: "0px 19px"
    border: "1px solid rgba(0, 0, 0, 0)"
    shadow: "rgba(255, 106, 0, 0.16) 0px 10px 20px 0px"
    hover-background: "#E85F00"
  button-footer-cta:
    background: "#FF6A00"
    text-color: "#FFFFFF"
    radius: "0px"
    height: "46px"
    padding: "0px 19px"
    border: "1px solid rgba(0, 0, 0, 0)"
    shadow: "rgba(255, 106, 0, 0.16) 0px 10px 20px 0px"
    hover-background: "#E85F00"
  card-numbered-wedge:
    background: "varies: #FFFFFF / #111111 / #FFF4EA"
    radius: "0px"
    padding: "0px"
    notes: "skewed corner-bracket ornament, plus-glyph in corner"
  card-faq-row:
    background: "transparent"
    radius: "0px"
    padding: "0px"
    border-bottom: "1px solid #E8E8E4"
  card-step:
    background: "#FFFFFF"
    radius: "0px"
    padding: "30px 27px"
---
# Fieldwork Grotesk
Source: https://runnamarket-tqthjbhw.manus.space/merchants

## Overview
This is an editorial/typographic system with brutalist undertones: enormous condensed Sora display type set at negative tracking carries the page, while a single warm orange is rationed to CTAs, numerals, and hairline accents against a cream-and-black field. Squared-off corners dominate (buttons, nav, footer), broken only by one 14px-radius hero image and one 14px pill button — a deliberate exception that marks the single most important action on the page. Corner-bracket ornaments and skewed "wedge" cards give it a technical, dossier-like feel rather than a soft SaaS one.

## Composition
The first screen is a bisected hero: oversized four-line display headline on the left over cream, a photographic panel on the right with a die-cut angled top-right corner and an orange tab bleeding off-frame. A thin vertical orange rule and a small kicker ("index" label + line) sit above the headline — a recurring wayfinding device. Scrolling reveals a white section with a second oversized headline and a staggered four-card row where cards alternate elevation (flat white, raised black wedge, bare numeral, tinted peach wedge) rather than uniform sizing. A full-width orange marquee band divides this from a black "process" section with four rule-separated numbered steps. Further down, a white FAQ section uses hairline-divided accordion rows, closing into a black CTA band with an orange pill button and a dark footer with an orange circular line-arc as sole decoration. The deliberate choice is asymmetric, non-grid-locked card staging (overlapping wedges, mixed elevation) over a safe uniform 4-up card grid — it trades tidiness for a hand-assembled, editorial energy.

## Colors
Background is a warm cream `#FFF4EA` (the largest declared area at ~29%), paired with near-black `#111111`/`#161616` sections (~26%+14%) that alternate down the page — confirmed by the pixel field's near-black-and-white-dominant split. White `#FFFFFF` surfaces (~25%) carry the mid-page feature/FAQ content. Orange `#FF6A00` is the sole accent, rationed to under 1% of declared area: CTAs, numerals, rule lines, the hero's angled tab, and one hairline gradient wash. Text ink is `#111111` on light surfaces and `#FFFFFF` on dark; secondary/caption text sits at `#666660`. Nothing else is colored — no secondary hue, no tints beyond the peach card fill `#FFE6D2`/`#F4F1EC`, keeping the palette essentially three-value (cream, black, orange) with white as a fourth structural surface.

## Typography
Sora is the display/label voice: massive, tight-leaded, heavily negative-tracked (`-10.2px` at 102px, `-7.2px` at 80px) headlines that read almost as wordmarks, plus a 27px Sora label style for card headings. Inter is the body workhorse at 15–16px/400 with generous 1.5–1.65 line-height for paragraphs and captions. There is no serif or mono accent family in evidence beyond a small uppercase sans label style (kickers, badges) — treat that as a functional `label-mono` role even though it's ui-sans-serif, since it behaves like one (tracked-out, small-caps-adjacent captions).

## Layout
Content is bounded to a 660px measure for body copy blocks, with generous 110px section padding stacking the black/white/cream bands. The four-card "why partner" row is not an even grid — it is four items of irregular visual width staggered with vertical offsets and connecting hairlines, functioning as a bento-like asymmetric row rather than equal columns. The onboarding-steps row is a true 4-column grid with 45px gaps and rule-separated columns, each holding a numeral + label. Near the page end, two further compositions appear: a 4-column icon/checklist grid with no gap (rows sized 24/15/29/18 of container) and a 2-column split (37/54) — both zero-gap, meaning divisions are made by padding and rules, not gutters. Card padding is tight and consistent at 30px 27px where boxed (feature cards), or 0px where cards are transparent/rule-based (FAQ, step list). Nothing suggests a fluid auto-fit system — this is a hand-placed fixed layout at desktop width.

## Components
- **Navbar**: edge-to-edge square bar, 90px tall, full 1920px viewport width, zero corner radius on all four corners (not a floating/inset shape), sticky, fill `#F4F1EC` with `backdrop-filter: blur(16px)`. Contains 9 items: logo mark, 5–6 text nav links (one underlined as active/current), and a CTA. Nav CTA is solid `#111111`/white text, radius 0px, height 42px, padding 0px 15px, hover fills `#FF6A00` with a -2px vertical lift.
- **Button — hero primary**: the single orange pill under the hero headline is the page's true primary — `#FF6A00` fill, white text, 14px radius (rounded, not square), 46px height, padding 0px 19px, resting shadow `rgba(255, 106, 0, 0.16) 0px 10px 20px 0px`, hover darkens to `#E85F00` with a -2px lift. This is the ONLY rounded-corner button on the page; treat its 14px radius as an intentional singular exception.
- **Button — footer/closing CTA**: same orange fill and shadow as the hero primary but radius 0px (square), height 46px, padding 0px 19px — appears once, in the black closing band, paired with an arrow glyph.
- **Button — nav CTA**: square (0px radius), dark fill, smaller height (42px) — a navbar utility, not the primary.
- **Numbered wedge cards (×4, mid-page "why partner" row)**: staggered, non-uniform elevation — card 1 flat white with hairline top rule and corner-bracket, card 2 a raised black skewed wedge with a plus-glyph in its lower corner, card 3 bare (numeral + heading + body, no box), card 4 a peach-tinted skewed wedge. Each: large orange numeral (01–04) top-left, a Sora heading beneath, one line of Inter body copy, corner-bracket ornament top-right.
- **Process/step cards (×4, black band)**: transparent background, 0px radius, 0px padding, rule-separated columns in a 45px-gap grid; each holds a small orange numeral label, then a bold heading, stacked top to bottom with a hairline top border.
- **Feature/step boxed cards (×4, mid-page)**: white fill, 0px radius, 30px 27px padding, heading + one line of body text, no media, no icon.
- **FAQ accordion (×3 rows)**: transparent background, 0px radius, full-width hairline top/bottom rule per row, heading text left with a chevron control right; expands on click (implied by chevron affordance).
- **Media/hero image card**: single instance, right half of hero, photographic content covering the full panel, 14px radius only on visible corners (angled die-cut top-right edge in orange), a small dark caption chip lower-left and a dark "proof" tag lower-right overlapping the image edge.
- **Footer**: `#161616` background, 11 links across three labeled columns (Explore / Support / Legal) plus a logo lockup and short description block; a thin orange circular arc line is the sole decorative graphic, positioned upper-right of the CTA band above it.

## Graphics & Effects
A small horizontal gradient — `linear-gradient(90deg, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0) 11%, rgba(255, 106, 0, 0.35) 11%, rgba(255, 106, 0, 0.35) 11.2%, rgba(0, 0, 0, 0) 11.2%)` — renders as a thin vertical-feeling orange band/rule accent (roughly a 0.2%-wide slice of its container), used as a kicker-line accent near section headers, not a background wash; it covers a sliver, never a full section. The navbar's `blur(16px)` backdrop-filter gives it a frosted-glass float over scrolled content despite its square, edge-to-edge shape. Shadows are limited to the orange buttons (`rgba(255, 106, 0, 0.16) 0px 10px 20px 0px`), giving them a soft colored lift rather than neutral drop shadow. The hero and mid-page wedge cards use angled/skewed clip edges (not simple rectangles) as the system's signature corner treatment, paired with small L-shaped corner-bracket line ornaments and plus-sign glyphs as recurring decorative marks. No noise, mesh gradient, or photographic texture beyond the single documentary-style hero photograph.

## Motion
Interactive elements transition on `transform, background 0.25s, 0.25s cubic-bezier(0.23, 1, 0.32, 1), ease` for hover fills, and a faster `transform, background, border-color 0.16s cubic-bezier(0.23, 1, 0.32, 1)` for nav/button micro-states; padding/shadow changes ease over 0.22s on the same curve. The consistent hover signature across every orange and dark button is a fill-color swap plus a -2px vertical lift (`matrix(1, 0, 0, 1, 0, -2)`) — a snappy "rise toward the cursor" micro-interaction, not a scale or glow. Keyframe names (`spin`, `enter`, `float`, `pulse`, `exit`) indicate loading spinners, mount/unmount fades, a subtle floating idle animation (likely on the corner-bracket or plus-glyph ornaments), and pulsing emphasis on numerals or badges.

## Guardrails
- Never round the navbar, nav CTA, footer CTA, or step/feature cards — 0px is structural to this system; only the hero primary button and hero image get radius.
- Do not spread the orange accent broadly — it is a rationed sub-1% ink reserved for CTAs, numerals, rules, and one tab/wedge accent, never a background fill.
- Keep the hero background cream and photographic, not a saturated gradient — orange appears only as a small angled tab and caption chips.
- Preserve the negative letter-spacing on display type; loosening it turns the signature condensed-headline look generic.
- Keep card elevation staggered/asymmetric in the four-card feature row — do not normalize it into a uniform equal-height grid.
- The 14px pill hero button is a singular exception; do not reuse its radius elsewhere or apply square radius to it.
