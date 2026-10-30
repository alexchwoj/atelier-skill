---
version: "1"
name: "Cherry Cloud Maximalism"
description: "White-dominant, hand-inked maximalist system built on a single saturated cherry-pink hue, an oversized black-weight display face, and a cloud-shaped illustrative mascot carrying the hero."
colors:
  background: "#FFFFFF"
  surface: "#EBEBEB"
  surface-alt: "#DDDDDD"
  text-primary: "#000000"
  text-secondary: "#A3A3A3"
  accent: "#FB395F"
  footer-bg: "#000000"
  footer-text-dim: "#595959"
typography:
  display-lg:
    fontFamily: "Commissioner"
    fontSize: "52px"
    fontWeight: 900
    lineHeight: "0.96"
  headline-md:
    fontFamily: "Commissioner"
    fontSize: "52px"
    fontWeight: 900
    lineHeight: "0.96"
  body-md:
    fontFamily: "Commissioner"
    fontSize: "18px"
    fontWeight: 500
    lineHeight: "1.38"
  label-md:
    fontFamily: "Commissioner"
    fontSize: "32px"
    fontWeight: 900
    lineHeight: "1.06"
  accent-utility:
    fontFamily: "Helvetica Neue"
    fontWeight: 400
  accent-mono:
    fontFamily: "Lucida Console"
  icon-face:
    fontFamily: "webflow-icons"
spacing:
  base: "16px"
  gap: "24px"
  gap-lg: "32px"
  inset: "28px"
  inset-lg: "43px"
  section-padding: "166px"
rounded:
  control: "4px"
  card: "40px"
  card-sm: "12px"
  panel: "16px"
  pill: "50px"
components:
  button-primary-hero:
    background: "#FFFFFF"
    text-color: "#000000"
    radius: "4px"
    height: "44px"
    border: "1px solid #000000"
  button-nav-cta:
    background: "#000000"
    text-color: "#FFFFFF"
    radius: "4px"
    height: "44px"
  button-nav-link:
    background: "transparent"
    text-color: "#000000"
    radius: "0px"
    height: "44px"
  button-nav-link-tall:
    background: "transparent"
    text-color: "#222222"
    radius: "0px"
    height: "73px"
    padding: "24px 12px 24px 0px"
    hover-color: "rgba(26, 27, 31, 0.75)"
  button-carousel-top:
    background: "#FFFFFF"
    text-color: "#000000"
    radius: "16px 16px 0px 0px"
    height: "44px"
    hover-background: "#F4F4F4"
  button-carousel-bottom:
    background: "#FFFFFF"
    text-color: "#000000"
    radius: "0px 0px 16px 16px"
    height: "44px"
  card-media-bleed:
    background: "transparent"
    radius: "40px"
    padding: "0px"
  card-promo-panel:
    background: "#EBEBEB"
    radius: "0px"
    padding: "0px"
  card-faq-row:
    background: "transparent"
    radius: "0px"
    padding: "0px"
    border-bottom: "1px solid #D9D9D9"
---
# Cherry Cloud Maximalism
Source: https://loko.delivery/

## Overview
This is a white-ground, black-ink maximalist system carried entirely by one saturated cherry-pink hue and a single black-weight grotesque, Commissioner, set at near-0.96 line-height so headline caps stack edge-to-edge. The identity reads as playful brutalist-adjacent: hard black outlines, a hand-drawn comic illustration (a spotted creature caught mid-leap) sitting inside a huge cloud-shaped pink blob, square-cornered utility buttons beside heavily rounded 40px media cards. Nothing is pastel or muted — the palette is binary (black/white) plus one hot accent, which is exactly why the cherry reads as loud as it does.

## Composition
The first screen is a single dominant composition: an edge-to-edge transparent navbar sits atop a full-bleed cherry-pink cloud/blob shape that fills roughly two-thirds of the viewport width and most of its height, containing the illustrated mascot, an oversized 3-line black display headline, a medium-weight subhead, and one square white CTA button beneath. Below the fold the page shifts to a strict white ground: a 4-up icon-and-caption row, a horizontal scrolling-rail carousel of grey promo panels, a numbered/captioned section band, a full-width illustrated map module on grey, a split hero-style device/QR module, an accordion FAQ list, and a near-black footer. This rhythm — one saturated illustrative hero, then long flat-white utility stretches — is the deliberate choice: color is spent once, up front, at full intensity, rather than diluted across every section; the rejected alternative would be a color-washed page with tinted section backgrounds throughout.

## Colors
`#FFFFFF` is the page/background role, holding roughly 72–90% of rendered pixels across the page body — every section below the hero reverts to pure white. `#000000` is the structural ink: all headline type, body copy, icon strokes, hairline outlines on the illustration, and the footer surface (~21.7% declared area, concentrated in text mass and the footer block). `#EBEBEB` and `#DDDDDD` are the neutral card/panel surfaces used for the carousel tiles and the map module — flat, unbordered, there purely to separate content from the white page without introducing a second hue. `#A3A3A3` (`--medium-grey`) is secondary/muted text — the dimmed footer tagline and FAQ helper tone. The accent is `#FB395F` (`--cherry`), covering ~36.9% of declared area but visually concentrated almost entirely into the hero's cloud shape and mascot — this is the hue the whole system is rationed around; it does not reappear as button fills, link colors, or section backgrounds elsewhere, which keeps its hero appearance singular and loud. The author's named-but-unused tokens `--mint` and `--peach` are present in the token set but not evidenced on this page — deliberately left uncolored, reserved vocabulary rather than live color.

## Typography
Commissioner at weight 900 is the entire display/heading voice — both the 52px hero headline and 52px/32px section headlines use the same ultra-bold weight and the same tight 0.96–1.06 line-height, so headings stack as dense black type blocks rather than airy lines. Body copy drops to Commissioner 500 at 18px/1.38 — a notably lighter weight and much looser leading, creating a sharp hierarchy jump straight from black-weight display to medium-weight paragraph with no intermediate semibold step. Helvetica Neue appears as a secondary utility face (likely nav/system chrome), Lucida Console as a monospace accent for incidental technical labeling, and webflow-icons supplies the pictographic icon glyphs used in the 4-up feature row and FAQ chevrons. There is no serif anywhere — this system has no editorial register, only grotesque-weight contrast.

## Layout
Content is constrained to a 1328px max-width container with generous 166px section gaps, giving the page a long, loosely-paced vertical rhythm despite its dense black typography. The mid-page carousel is a horizontal scrolling-rail of equal grey panels, peeking the next card at the viewport edge. Further down, a 15-card grid organizes into three rows of five equal-width items (each at 1/5 container width — a uniform card grid, not bento), used for the feature/benefit breakdown. A 14-item grid runs as four full-width (100%) stacked rows — a list layout for FAQ-style body-text entries. A 6-card full-width-panel grid stacks five 100%-width rows for the feature/illustration panels, and an 8-item expandable list (the FAQ accordion itself) stacks eight 100%-width rows with hairline dividers. A separate 4-column icon-caption grid (gap 16px) runs the four onboarding benefits in one even row. Card radii swing hard between 0px (flat list/table rows) and 40px (media-bleed illustrative cards) with no intermediate step except the 16px carousel-button corners and 12px small-card radius — rounding is binary, not a gradual scale.

## Components
- **Navbar**: edge-to-edge, square-cornered bar (0px radius all four corners), 68px tall, spans the full 1920px viewport width with zero inset, background transparent, sticky on scroll, holding 9 items — logo wordmark at left, a cluster of text nav links (some with dropdown carets), and one solid black CTA button at far right.
- **Button — hero primary (observed)**: a white, black-text rectangular button beneath the hero headline, approximately 4px corner radius (sharp/square feel), black 1px outline, sitting directly on the cherry-pink blob — this is the single most emphasized control on the first screen.
- **Button — nav CTA**: solid `#000000` fill, white text, 0px radius, 44px height — the dark pill-less rectangle at the navbar's right edge.
- **Button — nav text links**: transparent fill, `#000000` text, 0px radius, 44px height, no padding; a second nav-link variant runs 73px tall with `24px 12px 24px 0px` padding and `#222222` text that dims to `rgba(26,27,31,0.75)` on hover.
- **Button — carousel pagination (top/bottom pair)**: white fill, black text, asymmetric radius — top button `16px 16px 0px 0px`, bottom button `0px 0px 16px 16px` — forming one rounded capsule split into two stacked halves; hover lightens top to `#F4F4F4`.
- **Card — media-bleed illustrative card** (×17, radius 40px): appears mid-page in the feature/benefit bands; full media-top-bleed anatomy, illustration or icon fills the card nearly edge-to-edge with no visible padding, caption text sits below outside the rounded frame.
- **Card — flat uniform grid tile** (×15, radius 0px): three rows of five equal-width tiles, each 1/5 of container — icon or small illustration plus a short caption line, used for the benefit/feature breakdown band beneath the carousel.
- **Card — FAQ/body-text row** (×14 and the ×8 expandable set, radius 0px): full-width stacked rows separated by hairline `#D9D9D9` dividers; each row shows a question-style label left-aligned and a chevron-style toggle icon right-aligned, expanding on click to reveal body copy.
- **Card — full-width feature panel** (×6, radius 0px): stacked 100%-width rows combining a full-bleed illustration/photo top zone with a heading and body-text block beneath — used for the device/QR "how to use" module.
- **Promo carousel panel** (grey `#EBEBEB`/`#DDDDDD` surface, 0px radius): horizontal scrolling-rail items with an illustration crop bleeding off one edge, a stacked logo lockup, and a bold headline plus short caption centered in the visible frame.
- **Map module**: a flat grey panel containing a stylized vector territory map in cherry-pink fill with black outlines, a rounded pill status toggle floating top-right, and circular zoom controls bottom-right — sits beneath a heading and a 3-icon caption row.
- **Footer**: near-black (`#000000`) full-width rounded-top panel containing a dimmed `#595959`-toned heading, a light-grey body paragraph, three link columns in white/light text, three circular social icons, and a copyright + email line at the base.

## Graphics & Effects
The hero's cherry-pink field is a flat illustrative shape (cloud/blob silhouette), not a gradient — it occupies roughly two-thirds of the first screen's area, rendered as a solid fill with a thick black hand-drawn outline rather than a soft digital blend. A small isolated 3D-styled gradient box (the shipping-crate motif beside the mascot) carries its own pink-to-magenta gradient fill local to that one object only — it does not extend to the page or section background. A soft drop shadow, `rgba(0, 0, 0, 0.06) 0px 8px 16px 0px`, elevates the carousel panels and map module card above the white ground. Texture is otherwise absent — no grain, no noise, no pattern fill; all depth comes from flat color blocking, thick black linework, and the one soft shadow value. The illustration style itself (loose hand-inked outlines, slightly imperfect linework) functions as the system's signature graphic texture in place of photography.

## Motion
Transitions are short and utilitarian: `all 0.2s ease` and `all 0.5s ease` drive general state changes, `font-size 0.2s ease` and `background-image 0.2s ease` suggest hover-driven type or image swaps on interactive tiles. Two named keyframe animations, `spin` and `moving`, cover a rotating loader/badge element and a continuously translating element (likely the floating "grab a discount" paw badge or a marquee-style promo strip). Easing stays conventional ease curves throughout — no spring/overshoot — keeping the motion feel brisk and functional rather than bouncy, which matches the hard-edged illustrative tone rather than a soft, playful one.

## Guardrails
- Never spread the cherry-pink hue across multiple sections as a tinted background — it belongs to the hero blob only; every other section stays white or neutral grey.
- Do not soften the hero shape into a gradient or mesh background; it is a flat-filled illustrative silhouette with thick black outline.
- Keep card radii binary: 0px for list/table/grid-tile rows, 40px for media-bleed illustrative cards — avoid inventing mid-range radii beyond the documented 12px/16px exceptions.
- Do not give nav text links or the square hero CTA a pill radius — this system's buttons are square-to-slightly-rounded (0–4px), not capsule-shaped.
- Preserve the navbar as a full edge-to-edge transparent bar with square corners; it is not a centered or inset rounded shape.
- Keep Commissioner at weight 900 exclusive to display/heading roles; body text must stay at the lighter 500 weight to preserve the hierarchy jump.
