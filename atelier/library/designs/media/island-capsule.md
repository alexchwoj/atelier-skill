---
version: "1"
name: "Island Capsule"
description: "A light-dominant editorial system interrupted by near-black mid-page bands, built around a single floating pill-shaped bar, rationed coral accents, and italic serif headline cadences."
colors:
  background: "#000000"
  surface: "#FFFFFF"
  surface-alt: "#ECECEE"
  surface-dark: "#101014"
  text-primary: "#1D1D1F"
  text-secondary: "#56565C"
  text-faint: "#86868B"
  line: "#000000"
  accent: "#F34B38"
  on-dark-bg: "#000000"
typography:
  display-lg:
    fontFamily: "-apple-system"
    fontSize: "84px"
    fontWeight: 700
    lineHeight: "1.02"
    letterSpacing: "-3.8px"
  headline-md:
    fontFamily: "-apple-system"
    fontSize: "52px"
    fontWeight: 700
    lineHeight: "1.05"
    letterSpacing: "-1.8px"
  body-md:
    fontFamily: "-apple-system"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.65"
  label-md:
    fontFamily: "-apple-system"
    fontSize: "15px"
    fontWeight: 700
  accent-serif:
    fontFamily: "Instrument Serif"
    fontStyle: "italic"
    role: "headline interruption clause"
spacing:
  base: "6px"
  gap: "14px"
  card-gap: "64px"
  section-padding: "96px"
  section-gap: "648px"
rounded:
  control: "7px"
  pill: "100px"
  pill-lg: "50px"
  card: "24px"
  sharp: "2px"
components:
  navbar:
    background: "#FFFFFF"
    radius-tl: "0px"
    radius-tr: "0px"
    radius-br: "0px"
    radius-bl: "0px"
    height: "edge-to-edge square bar"
  button-nav-cta:
    background: "#F34B38"
    text-color: "#FFFFFF"
    radius: "100px"
    height: "39px"
    padding: "10px 20px"
    shadow: "rgba(243, 75, 56, 0.35) 0px 4px 18px 0px"
    hover-shadow: "rgba(243, 75, 56, 0.45) 0px 8px 26px 0px"
  button-nav-secondary:
    background: "rgba(0, 0, 0, 0.05)"
    text-color: "#1D1D1F"
    radius: "100px"
    height: "39px"
    padding: "10px 20px"
    border: "1px solid rgba(0, 0, 0, 0.16)"
    hover-background: "rgba(0, 0, 0, 0.09)"
  button-nav-link:
    background: "transparent"
    text-color: "#000000"
    radius: "0px"
    height: "50px"
    padding: "0px"
  button-hero-primary:
    background: "#F34B38 (observed solid fill)"
    text-color: "#FFFFFF"
    radius: "100px (observed, full pill)"
    height: "~44px (observed)"
    padding: "observed ~12px 24px"
  button-hero-secondary:
    background: "#ECECEE (observed near-white/light-gray)"
    text-color: "#1D1D1F"
    radius: "100px (observed, full pill)"
    height: "~44px (observed)"
  card-feature-band:
    background: "transparent"
    radius: "0px"
    padding: "96px 0px 0px"
  card-expandable-faq:
    background: "transparent"
    radius: "0px"
    padding: "0px"
    border-bottom: "1px solid #000000"
  card-howitworks-row:
    background: "transparent"
    radius: "0px"
    padding: "30px 0px 34px"
    border-top: "1px solid #000000"
  card-dark-inverted:
    background: "#101014"
    radius: "24px"
    padding: "24px"
---
# Island Capsule
Source: https://notchbay.com/

## Overview
This is a light-mode-default editorial system that stages one dark, cinematic interruption at mid-page before returning to a paper-white canvas — the inverse of the usual dark-first SaaS pattern. The identity is carried by three devices: a single floating pill-shaped navbar rendered in pure white with razor-sharp internal corners, an Apple-system sans at extreme negative tracking for display weight, and a recurring italic serif clause (Instrument Serif) that interrupts every major headline on its second line. Coral (`#F34B38`) is the only saturated hue in the entire system and is rationed to CTAs and eyebrow labels — never a background. The aesthetic reads as Swiss-adjacent editorial restraint crossed with an Apple-marketing demo page: ruled hairline dividers, numbered rows, device-mockup hero art, and a glass-free, flat-surface component language.

## Composition
The first screen is strictly vertical and centered: eyebrow pill → two-line display headline (second line italic serif) → one paragraph of body copy with inline bold phrases → a two-button cluster → a large laptop-framed hero illustration bleeding to the viewport edge. Below the fold the page alternates registers deliberately: a near-black band (dark app-skin triptych of three cards) sits between two light `#F5F5F7` bands (how-it-works ledger, FAQ accordion), then the page resolves to pure black again for the footer banner and legal rows. This light→dark→light→dark alternation is the one deliberate compositional choice — it rejects a single continuous light page, using the dark bands as punctuation that isolates the product-in-context screenshots from the explanatory copy. Section gaps are enormous (measured 648px), producing a slow, confident scroll rhythm rather than a dense SaaS stack.

## Colors
`#F5F5F7` (declared `--bg`) and `#FFFFFF` (`--surface`) together dominate the pixel field (the measured ~27% white + ~20% near-white account for most of the light sections), serving as page background and card/nav surface respectively. `#000000` dominates separately at ~40% of pixels — this is not a hero wash but the footer band and the mid-page dark feature-triptych section, both genuinely near-black (`#101014` for the dark cards is a slightly lifted near-black, distinct from true `#000000` dividers/footer). `#1D1D1F` is the primary ink on light surfaces; `#56565C` is secondary/muted body text; `#86868B` is the faintest tier (captions, timestamps). `#F34B38` appears at only ~0.2% measured area — it is rationed strictly to the nav CTA fill, the hero primary button, and eyebrow label text (`APP SKINS`, `HOW IT WORKS`), never as a background wash or gradient. Borders and dividers are drawn in flat `#000000` hairlines at low implied opacity, not gray — this gives the ruled-ledger feel of the how-it-works and FAQ sections. Nothing is colored beyond this: no secondary brand hue, no success/warning semantics visible.

## Typography
The system pairs one grotesque (-apple-system / ui-rounded family for numerals and labels) against one italic serif accent (Instrument Serif) used exclusively for the second clause of major headlines. Display headlines run 84px/700 at −3.8px tracking, line-height 1.02 — extremely tight, built for 1–2 lines maximum. A second headline tier runs 52px/700 at −1.8px tracking for recurring section titles (how-it-works, FAQ), always two lines with the second line rendered in the italic serif at matching size. Body copy sits at 16px/400, line-height 1.65, color `#1D1D1F` with `#56565C` for secondary spans — generous leading for the long single-paragraph hero description. Labels (eyebrow pills, numbered list digits) are 15px/700, uppercase-tracked, in the coral accent or in dark ink depending on background. Times New Roman and Arial appear only as rendering fallbacks, not as designed choices.

## Layout
Content is capped at a 1080px max-width, centered, with a 96px section padding rhythm but extreme 648px gaps between major sections — this page breathes rather than stacks tightly. The feature-triptych (app-skin cards) is a strict 3-column grid, 14px gap, uniform row heights. The how-it-works numbered list is a 2-column asymmetric grid (39/55 split, 64px gap): a short label+headline column on the left, a tall ruled list of four numbered rows on the right, each row divided by a `#000000` hairline. The FAQ accordion is a single-column stack of full-width expandable rows. Deeper down, a 12-column/7-item grid with rows of [32/32/32] then [24/24/24/24] governs the footer link columns. No card in this system carries a shadow for elevation — separation comes from hairline rules and flat background contrast, not drop shadow, except for the dark inverted cards which float on pure black via their own `#101014` fill.

## Components
- **Navbar**: edge-to-edge in measurement terms but visually a wide, fully-rounded floating capsule sitting with margin above the page content — background `#FFFFFF`, square corner radii measured (0px/0px/0px/0px describes the bar's internal content box, while the visible shape reads as a large pill with both top and bottom corners heavily rounded in the screenshot — rebuild as a centered rounded-rectangle/capsule bar, not a square full-bleed strip). Contains 9 items: a leading logo mark + wordmark, a cluster of transparent text links (`transparent` bg, `#000000` text, 50px tall, 0 radius), a primary coral CTA pill (`#F34B38`, white text, 100px radius, 39px height, 10px 20px padding, resting shadow `rgba(243, 75, 56, 0.35) 0px 4px 18px 0px`, hover shadow `rgba(243, 75, 56, 0.45) 0px 8px 26px 0px` with a 1px upward translate), and a secondary neutral pill beside it (`rgba(0,0,0,0.05)` fill, `#1D1D1F` text, 100px radius, 39px height, 1px solid `rgba(0,0,0,0.16)` border, hover to `rgba(0,0,0,0.09)`).
- **Hero primary button**: the dominant coral-filled pill beneath the headline — an observed solid `#F34B38` fill, white text, full pill radius (~100px), roughly 44px tall. This is the single most emphasized control on the first screen and must not be confused with the navbar's glass-adjacent secondary pill.
- **Hero secondary button**: an observed near-white/light-gray pill beside the primary, same pill radius family, lower visual weight, dark text — a quiet companion action, not a glass treatment.
- **Device-mockup hero card**: one full-width laptop-frame illustration directly under the button cluster, covering nearly the full viewport width; interior shows a dark OS-chrome strip, a floating dark pill-shaped widget (the island itself) with white numeral time display and a coral status dot, over a full-bleed landscape photograph with a soft bottom vignette.
- **App-skin feature triptych**: appears in the mid-page near-black band; ×3 cards in one row (3-column grid, 14px gap). Surface: `#101014` fill (inverted/dark card family), 24px radius, 24px padding, no border, no shadow. Internal anatomy top-to-bottom: a photographic thumbnail image (~55% of card height) with rounded top corners, a bold white heading label, one line of `#56565C`-toned body copy, then a row of small pill-shaped tags (dark fill, light icon + label, 100px-radius chips) representing compatible targets.
- **How-it-works numbered ledger**: appears in the light `#F5F5F7` band following the dark triptych; ×4 rows stacked full-width (100% rows), each row padded 30px 0px 34px with a `#000000` hairline rule above/between rows. Internal anatomy per row: a bold two-digit numeral label on the left, a bold short headline, and a `#56565C` body paragraph beneath — composition matches the measured 2-column 39/55 asymmetric grid with the numeral+copy nested in the right-hand column.
- **FAQ accordion**: single-column stack of ×6 expandable rows, `transparent` background, 0px radius, full-width, hairline divider between each, chevron affordance at the row's right edge; collapsed by default, body text revealed on expand (measured `height 0.09s linear` transition).
- **Footer CTA banner**: one full-width rounded-rectangle card sitting on the black footer band — large radius (~24px class), image/gradient fill (night-sky photographic scene), containing a small logo lockup on the left and a right-aligned paragraph mixing full-opacity white spans with dimmed gray spans for de-emphasized words, plus one coral eyebrow label above the paragraph.
- **Footer**: `#000000` background, 15 links organized into 3 label-headed columns (labels in coral/accent-toned uppercase, links in muted gray), a contact email line in white at larger weight, copyright row, and one oversized ghost wordmark bleeding off the bottom edge of the viewport at very low opacity.

## Graphics & Effects
Two scrims govern the dark sections: `linear-gradient(rgba(5, 5, 5, 0) 0%, rgb(5, 5, 5) 26%)` and `linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 30%)` — both render as bottom-anchored fades over photographic/illustrative media (the hero laptop screenshot and the app-skin thumbnails), darkening the lower portion of each image for legibility, each covering roughly 9% of total page area (i.e., confined to their host images, not the full viewport). A light-mode equivalent, `linear-gradient(rgb(245, 245, 247) 0px, rgb(245, 245, 247) 40px, rgb(255, 255, 255) 240px)`, forms a soft top-of-section wash transitioning the page background into white at the start of a content band. A radial `radial-gradient(48% 40% at 50% 10%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.88) 32%, rgba(255, 255, 255, 0) 68%)` sits as a small centered glow — likely behind the eyebrow pill or headline top — not a full-bleed hero treatment. The footer CTA banner carries its own scrim, `linear-gradient(to top, rgba(10, 12, 14, 0.72) 0%, rgba(10, 12, 14, 0.28) 34%, rgba(0, 0, 0, 0) 62%)`, darkening the bottom of its night-sky photograph. Live canvas elements render the floating island widget's dynamic state (clock, activity cards) — stand in with a static dark rounded-rect mockup screenshot when rebuilding. Shadows are minimal and precise: a near-invisible `rgba(0, 0, 0, 0.04) 0px 1px 3px 0px` for flat card lift, and a subtle inset highlight `rgba(140, 175, 235, 0.55) 0px 0px 1.5px 0px inset, rgba(255, 255, 255, 0.06) 0px 0px 0px 0.5px` suggesting a faint cool rim-light on the dark island widget. Backdrop blurs (`blur(10px)`, `blur(16px) saturate(1.6)`, `blur(12px)`, `blur(6px)`) apply to small floating chip/pill elements over imagery, producing a light glass effect confined to those controls, not full panels.

## Motion
Interaction motion is fast and utilitarian: accordion expansion uses `height 0.09s linear` for a near-instant snap open/close, color transitions on links and buttons use `color 0.22s ease` / `color 0.2s ease`. Larger compositional reveals (image/text entrances) use a slow synchronized triple-property transition — `opacity, transform, filter` each at `0.7s ease` — suggesting scroll-triggered fade-and-rise entrances for section content. Named keyframe sets (`naura`, `nfloat`, `phspin`, `petbob`, `pstep`, `pblink`) drive small looping idle animations on the hero's illustrative widget (floating, spinning, blinking status elements), and CSS scroll-driven animations tie some of these states to scroll position rather than time.

## Guardrails
- Never fill the hero or any full section background with the coral accent or a saturated gradient — coral stays confined to CTA fills and eyebrow text, under 1% of page area.
- Do not flatten the navbar into a square edge-to-edge bar; it is a floating, heavily-rounded capsule with margin from the viewport edges.
- Keep the dark mid-page bands genuinely near-black (`#000000`/`#101014`), not dark gray — the light/dark alternation is structural, not a gradient fade.
- Preserve the italic serif clause as a short accent on the second line of headlines only — do not apply it to body copy or labels.
- Do not add drop shadows to the light-surface cards; separation comes from hairline rules and flat fills, reserving shadow for the coral CTA's colored glow only.
- Keep section vertical gaps large and generous; do not compress the rhythm into a dense SaaS stack.
