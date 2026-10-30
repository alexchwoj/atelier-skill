---
version: "1"
name: "Nocturne Codex"
description: "Dark-mode-default devotional reading system: near-black ink pages lit by a single rationed violet-amber aurora wash, an Instrument Serif editorial display, and frosted glass tiles carrying muted photographic imagery."
colors:
  background: "#12121E"
  surface: "#161527"
  surface-raised: "#1B1A2E"
  text-primary: "#EEEBF7"
  text-secondary: "#C4BFD9"
  text-tertiary: "#A29CBB"
  accent-amber: "#E7C580"
  accent-mint: "#96D8C8"
  border: "rgba(255, 255, 255, 0.16)"
typography:
  display-lg:
    fontFamily: "Instrument Serif"
    fontSize: "54px"
    fontWeight: 400
    lineHeight: "1.03"
    letterSpacing: "-0.8px"
  headline-md:
    fontFamily: "fontUiLatin"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.6"
  body-md:
    fontFamily: "fontUiLatin"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: "1.2"
  label-md:
    fontFamily: "fontUiLatin"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: "1.6"
    letterSpacing: "1.7px"
  accent-devanagari:
    fontFamily: "fontScriptureDeva"
    fontWeight: 400
  logo-mark:
    fontFamily: "logoLetter"
    fontWeight: 400
spacing:
  base: "8px"
  gap: "20px"
  section-padding: "124px"
  section-gap: "112px"
rounded:
  control: "12px"
  card: "20px"
  card-lg: "26px"
  pill: "9999px"
components:
  button-hero-primary:
    background: "linear-gradient(rgb(243, 215, 160) 0%, rgb(226, 187, 114) 100%)"
    text-color: "#1D1626"
    radius: "14px"
    height: "46px"
    shadow: "rgba(255, 255, 255, 0.55) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.8) 0px 10px 22px -14px"
  button-midpage-primary:
    background: "linear-gradient(rgb(243, 215, 160) 0%, rgb(226, 187, 114) 100%)"
    text-color: "#1D1626"
    radius: "16px"
    height: "54px"
    shadow: "rgba(255, 255, 255, 0.55) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.8) 0px 10px 22px -14px"
  button-nav-utility:
    background: "rgba(255, 255, 255, 0.06)"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "34px"
    border: "1px solid rgba(255, 255, 255, 0.28)"
  button-outline:
    background: "transparent"
    text-color: "#EEEBF7"
    radius: "14px"
    height: "50px"
    border: "1px solid rgba(255, 255, 255, 0.16)"
  card-glass-media:
    background: "linear-gradient(rgba(255, 255, 255, 0.067), rgba(255, 255, 255, 0.024))"
    backdrop-filter: "blur(18px) saturate(1.4)"
    radius: "20px"
    shadow: "rgba(255, 255, 255, 0.07) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.35) 0px 1px 2px 0px, rgba(2, 1, 12, 0.95) 0px 24px 48px -24px"
  card-flat-panel:
    background: "transparent"
    radius: "0px"
    padding: "48px 0px 124px"
  card-chapter:
    background: "#161527"
    radius: "20px"
    padding: "24px"
---
# Nocturne Codex
Source: https://swarved-new.vercel.app/en

## Overview
This is a dark-mode-default editorial-devotional system: near-black violet ink (`#12121E`) carries nearly three-quarters of every pixel, pierced by a star-field texture and a single rationed aurora wash of indigo and amber. An Instrument Serif display gives the page its literary, almost liturgical voice — oversized, tight-leaded headlines — while a compact grotesque (fontUiLatin) runs all UI chrome, labels, and body copy at small, disciplined sizes. Frosted glassmorphic tiles (`blur(18px) saturate(1.4)`) hold photographic stand-ins for a live canvas/video layer, giving the otherwise flat-dark system its only real elevation.

## Composition
The first screen is a bounded hero card (not full-bleed) floating on a starry void, pairing a left text column against a right-hand luminous portrait illustration lit by a radial glow. Below it, a horizontal marquee rail of looping label chips breaks the vertical rhythm before the main column resumes. From there the page settles into a strict single-column stack of content bands — a daily-reading module, a short-reads grid, a random-chapters grid, a speaker/media-parts triptych, a theme-collection row — each announced by a small icon chip + eyebrow + serif heading + one-line description, closing in a dense multi-column footer. The deliberate choice is restraint: large empty black fields separate each band (112px section gaps) rather than tinting every section, so the aurora color reads as an event, not a wallpaper — rejecting a maximalist, fully-gradient-saturated alternative.

## Colors
`#12121E`/`#161527`/`#1B1A2E` form a three-step near-black surface ramp (page / card / raised card) that together with pure black dominate the pixel field (~71% `#181818`-family, ~21% `#181830`-family). Text runs on `#EEEBF7` (primary ink) stepping down to `#C4BFD9` (secondary) and `#A29CBB` (tertiary/muted) — a desaturated lavender-white triad, never pure white for body copy. The signature accent is a champagne-amber gradient (`rgb(243,215,160)`→`rgb(226,187,114)`) reserved exclusively for the single highest-emphasis CTA per screen and tag chips (`#E7C580` ink). A cool mint (`#96D8C8`/`rgba(147,214,201,0.26)`) appears only as a faint inset ring on rare bordered elements. Violet-indigo (`#2C4C6B`, `rgba(92,80,176,0.34)`) and a warm rust (`rgba(120,90,82,0.22)`) are rationed into two soft radial washes covering roughly a quarter of the hero card's own background only — never the full viewport. Borders are near-invisible hairlines of translucent white (`rgba(255,255,255,0.16–0.28)`), leaving most card edges undefined and relying on fill/blur for separation.

## Typography
Instrument Serif at 54px/400, line-height 1.03, letter-spacing -0.8px, carries every section's headline — an editorial, high-contrast-stroke display face used nowhere else. One compact sans (fontUiLatin) handles all remaining text at three tight sizes: 16px/400 for conversational copy, 13px/500 for dense card body text, and 12px/600 with +1.7px tracking for uppercase eyebrow labels — a label register clearly separated from body by weight and spacing, not size alone. Devanagari scripture text renders in a dedicated serif (fontScriptureDeva) at large conversational scale, paired beside italic English sub-translations, establishing a bilingual editorial rhythm throughout the content bands. The wordmark uses a distinct decorative glyph face (logoLetter).

## Layout
Content is capped at a 1156px max-width, centered, with 124px section padding and 112px gaps between bands — a generous, editorial rhythm, not a dense app density. Grids are shallow and few-columned rather than deep: a 12-column asymmetric grid at 20px gap splits one row 58/41 then drops to even 41/41 thirds then rises to 41/58 — an intentional unevenness, not a uniform card grid. Elsewhere, simple 2-up and 4-up card rows dominate (reading modules, short-reads, random chapters, theme collections), all at consistent 20px gaps, with full-bleed flat panels (padding `48px 0 124px`, no radius) used for the top-level daily-reading wrapper only. The system favors a handful of fixed-column rows over auto-fit fluidity — composition is authored per section, not generically responsive.

## Components
- **Navbar**: edge-to-edge square bar (0px corner radius all four corners), 57px tall, full 100vw width, sticky, fill `#12121E` with `backdrop-filter: blur(20px) saturate(1.5)`; holds 17 nav items plus one pill CTA (`rgba(255,255,255,0.06)` fill, `#FFFFFF` text, 999px radius, 34px height, 1px `rgba(255,255,255,0.28)` border) — this pill is a nav utility button, not the page's primary action.
- **Hero primary CTA**: observed near-opaque champagne-gold solid pill-rounded rectangle beneath the hero headline, ~6-10px corners (slightly-rounded), dark plum text, paired beside a smaller dark secondary "platform" button with an icon glyph — this is the single most emphasized control on the first screen.
- **Button — gradient-gold (hero/mid-page primary)**: `linear-gradient(rgb(243,215,160) 0%, rgb(226,187,114) 100%)` fill, `#1D1626` text, 14px radius (hero, 46px height) or 16px radius (mid-page, 54px height), both slightly-rounded rectangles, inset highlight + soft drop shadow, lifts 1px on hover.
- **Button — nav utility pill**: `rgba(255,255,255,0.06)` fill, 1px `rgba(255,255,255,0.28)` border, 999px full pill, 34px height — navbar only.
- **Button — outline**: transparent fill, 1px `rgba(255,255,255,0.16)` border, 14px radius, 50px height, `#EEEBF7` text — used ×4 as secondary actions beside media cards mid-page.
- **Daily-reading flat panel** (full-width, appears once near top): transparent background, 0px radius, padding `48px 0 124px`; anatomy top-to-bottom: icon chip + eyebrow + date, large serif verse couplet with dotted-underline glossary words, divider rule, "COMMENTARY" label + body paragraph, one gradient-gold CTA, then a three-icon action row (share/copy/save).
- **Glass media card** (×3, mid-page, arranged in a stacked column each at 41% width footprint beside the daily panel): `linear-gradient(rgba(255,255,255,0.067), rgba(255,255,255,0.024))` fill, `blur(18px) saturate(1.4)` backdrop, 20px radius, layered shadow `rgba(255,255,255,0.07) 0 1px 0 inset, rgba(0,0,0,0.35) 0 1px 2px, rgba(2,1,12,0.95) 0 24px 48px -24px`; anatomy: full-bleed photographic top (~55% of card height), eyebrow chip, serif heading, one-line body, text link with arrow.
- **Short-reads grid** (1 large + 4 small, asymmetric 12-col: 58/41 then 41/41 then 41/58 rows): large card is image-top (60%+ coverage) with two pill chips (category + "Today" status) overlaid at the image/text seam, serif heading, clock+duration meta; small cards are horizontal thumbnail-left + category chip + heading + duration, transparent flat fill, 0px radius.
- **Random-chapter card** (×4 in a single row, uniform width): `#161527`-toned surface, ~20px radius, padding ~24px; anatomy: small eyebrow ("Chapter n·n") + mandal label, Devanagari heading, "Open chapter" link, with a huge pale translucent numeral watermark bleeding off the bottom-right corner.
- **Speaker/media triptych** (×3 in a row beneath a full-width speaker intro card): transparent flat cards, 0px radius; anatomy: photographic top-bleed image (~45% height) with a "Part n" pill chip overlaid top-left, Devanagari heading, italic serif sub-translation, body paragraph, small avatar + name row with arrow link.
- **Speaker intro card** (full-width, single instance above the triptych): `#161527` surface, rounded ~20px, padding ~24px; anatomy: circular avatar photo, mic-icon eyebrow label, serif name heading, one-line body description.
- **Theme-collection card** (×4 in a row): photographic full-bleed background with a bottom scrim (`linear-gradient(rgb(15,14,37) 0%, rgb(23,21,56) 42%, rgb(31,26,66) 72%, rgb(21,18,43) 100%)` or the 135deg indigo variant), ~20px radius; anatomy: "THEME" eyebrow, serif title, italic subtitle, dohas-count meta, small pill "Start" button (`rgba` tinted fill, 999px radius) bottom-right.
- **Marquee rail** (below hero, single instance): horizontal auto-scrolling strip of plus-separated Devanagari phrase chips on transparent dark ground, looping via a dedicated marquee keyframe.
- **Footer**: transparent background, 12 links across three label-mono-style columns (eyebrow headers), wordmark + tagline + one gradient-outline "Mac" download button + one info callout card (`#161527`, rounded), bottom bar with legal line and a two-state language pill toggle (EN / हिं).

## Graphics & Effects
Two soft radial washes sit only within the hero card's own background, not the full page: `radial-gradient(50% 55% at 70% 40%, rgba(92,80,176,0.34), rgba(0,0,0,0) 70%)` (indigo, upper-right) and `radial-gradient(40% 46% at 4% 98%, rgba(120,90,82,0.22), rgba(0,0,0,0) 72%)` (rust, lower-left), together covering roughly a quarter of that one bounded panel. A closest-side radial halo (`rgba(255,240,206,0.42)` core fading through peach/rose/violet to transparent) forms the glowing aureole behind the hero's seated illustration — a localized light-source effect, not a background fill. The base page gradient `linear-gradient(rgb(13,13,26) 0%, rgb(19,18,40) 62%, rgb(18,18,30) 100%)` is a subtle vertical deepening applied behind the hero region only. A fine white star-field/noise texture scatters across the full dark canvas behind the hero, giving the "scripture in samadhi" cosmic read. Photographic media throughout (forest, aurora, mountains, candle) sits beneath directional scrims — a straight vertical indigo fade or a 135deg diagonal plum fade — for text legibility. Card elevation reads through soft layered shadows (`rgba(255,255,255,0.07) inset` + `rgba(0,0,0,0.35)` + `rgba(2,1,12,0.95) 0 24px 48px -24px`) rather than borders; glass panels use `blur(18px) saturate(1.4)` or `blur(16px) saturate(1.5)` backdrop-filters.

## Motion
Interactive color/underline transitions run at `0.35s ease`; transform/shadow/border-color state changes use a springy `cubic-bezier(0.22, 0.8, 0.24, 1)` over 0.4–0.6s, giving hover lifts (the gradient-gold button's `translateY(-1px)`) a gentle overshoot-free ease-out feel rather than a snap. Link color changes alone use a faster `0.25s ease`. The marquee rail and a scripture-progress indicator run as dedicated looping/scroll-tied keyframe animations, and a menu-fade keyframe governs overlay dismissal — motion throughout is quiet, ambient, and in service of a reading rhythm rather than a flashy showcase.

## Guardrails
- Never fill the full hero viewport with the aurora/radial gradients — they belong only inside the bounded hero card and the illustration's halo; the surrounding canvas stays near-black with a star texture.
- Never substitute the navbar's glass pill CTA values for the hero's primary action — the hero/mid-page primary is always the opaque champagne-gold gradient button.
- Keep section spacing generous (112px gaps, 124px padding) — do not compress bands into a dense app-density stack.
- Preserve the navbar as an edge-to-edge, zero-radius square bar — do not round its corners or inset it as a floating capsule.
- Reserve the gold gradient for exactly one CTA per view; all secondary actions stay outline or translucent-glass, never a second gold fill competing for attention.
- Keep card corner radii distinct by family (0px flat panels vs 20px glass/media cards vs 999px pills) — do not normalize them to one radius.
