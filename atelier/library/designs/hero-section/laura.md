---
version: "1"
name: "Design System Inspired by Laura"
description: "Laura is cinematic pastoral calm: a golden-hour meadow film behind a two-voice headline — one featherweight sans line stacked over an Instrument Serif italic line — a single soft-halo white CTA, a three-column nav punctuated by hairline rules, and a bracketed whisper note in the bottom corner. Warm off-white ink at three alphas, no pure white text, and a total refusal to animate: nothing enters, nothing reveals. The design argues 'slow living' by being the slowest page on the internet. Vanilla HTML in one file."
colors:
  fallback: "#3d4a49 — sage-slate behind the film while it loads"
  ink: "#f4f1ea warm off-white (serif line) · ink-soft 82% (sans line, body, wordmark) · ink-dim 70% (nav, ®, note)"
  rules: "rgba(244,241,234,0.55) — the 1px×22px vertical hairlines flanking brand and Contact"
  tint: "top-only gradient rgba(20,30,32,0.14) → transparent at 22% — seats the nav, leaves the meadow untouched"
  cta: "#fdfcfa surface · #1f1f1f text · halo 0 0 0 4px rgba(253,252,250,0.28) + 0 2px 10px rgba(20,30,32,0.18)"
typography:
  sans:  { fontFamily: "'DM Sans', sans-serif", weights: "300/400/500", role: "headline line 1 at 300 clamp(42px,4.9vw,74px) · body 16px/300 · nav 15-16px/400 · CTA 15px/500" }
  serif: { fontFamily: "'Instrument Serif', serif", weights: "400 italic only", role: "headline line 2 — clamp(48px,5.6vw,86px), always italic, never bold" }
spacing:
  nav: "grid 1fr auto 1fr · padding 30px 42px 0 · links gap 38px"
  hero: "margin-top 11vh · sub mt-26px max-w-420px · CTA mt-34px"
  foot: "absolute bottom, padding 0 42px 26px, pointer-events none"
rounded:
  cta: "12px — the only radius on the page"
motion:
  none: "no entrance animation of any kind; every element visible on first paint"
  hover: "nav links warm from ink-dim to ink (0.25s) · CTA lifts -1px while its halo widens 4px→5px"
  film: "the meadow loop is the page's only continuous motion"
components:
  nav: "3-column grid — hairline + lowercase 'laura®' left · four links dead-center · Contact + hairline right"
  headline: "two voices in one h1: DM Sans 300 'Start where you are' over Instrument Serif italic 'Move, rest, and repeat' (+2px gap)"
  cta: "soft white block with a 4px translucent halo ring — reads as a smooth stone, not a button"
  note: "[Begin where you are, not where you “should” be] — bracketed 13.5px whisper, bottom-left, unclickable"
---

# Design System Inspired by Laura

## Overview

Laura sells rest, and the page performs it. One viewport, one meadow film at dusk, and a headline that speaks in **two voices**: *Start where you are* in featherweight DM Sans — the instruction — stacked 2px above *Move, rest, and repeat* in Instrument Serif italic — the exhale. That sans-to-serif handoff inside a single `<h1>` is the whole brand: structure first, softness after. The serif line is also the only place the ink reaches full strength (`{colors.ink}`); everything else sits at 82% or 70%, so hierarchy is warmth, not weight.

The chrome is a **three-column grid nav** whose signature is punctuation: a 1px × 22px hairline rule standing before the lowercase wordmark and another after the Contact link — bookends, not borders. The wordmark is `laura` with an 8px superscript ® — lowercase humility with a registered trademark's confidence.

The conversion moment is a single **soft-halo CTA**: an off-white block (`#fdfcfa`, deliberately not pure white) wearing a 4px translucent ring of its own color, like light bleeding through paper. On hover it lifts exactly 1px while the ring widens to 5px — the largest movement the page permits. And at the bottom-left, a **bracketed whisper**: *[Begin where you are, not where you "should" be]* — 13.5px, 70% ink, `pointer-events: none`. It's set dressing that reads like a margin note in a retreat journal, and the empty right corner is intentional negative space.

Most radically for 2026: **nothing animates in**. No fade, no rise, no blur-in — the page is simply there, complete, like a field you walked into. On a landing page about slowing down, an entrance animation would be a contradiction; stillness is the copywriting.

**Key Characteristics:**
- **Two-voice headline** — sans instruction over serif-italic exhale in one h1; the italic line is the only 100%-ink text.
- **Warmth as hierarchy** — three alphas of one off-white; no grays, no pure white.
- **Hairline punctuation** — vertical rules as typographic bookends around the nav.
- **The halo CTA** — a self-colored translucent ring instead of a border or shadow; hover widens it by exactly 1px of ring.
- **Bracketed whisper** — a non-interactive caption in square brackets and curly quotes, bottom-left only.
- **Top-only tint** — 14% dark gradient fading by 22%; the meadow is never dimmed where it matters.
- **Absolute stillness** — zero entrance animation; two hovers are the entire interaction model.
- **One file, no build** — vanilla HTML/CSS.

## Colors

- **Fallback** ({colors.fallback}): sage-slate matched to the meadow's shadow tones — buffering doesn't flash.
- **Ink ladder** ({colors.ink}): full / 82% / 70% of `#f4f1ea`. All hierarchy lives in these three stops.
- **Rules** ({colors.rules}) and **tint** ({colors.tint}): the only other surfaces.
- **CTA** ({colors.cta}): `#fdfcfa` on `#1f1f1f` — warm white on warm black; neither end of the scale is pure.

## Typography

- **DM Sans** ({typography.sans}): optical-size variable; the page leans on 300 — even the headline's first line is featherweight at up to 74px.
- **Instrument Serif** ({typography.serif}): one line, always italic, 400 only (the family ships no bold — never synthesize). If a second serif moment appears in an iteration, the two-voice structure collapses; don't.

## Layout

- **Nav** ({spacing.nav}): `1fr auto 1fr` keeps the links dead-center regardless of brand/Contact widths.
- **Hero** ({spacing.hero}): a flex column starting 11vh down — high enough to breathe, low enough to leave meadow above the headline.
- **Foot** ({spacing.foot}): absolute, non-interactive, left-weighted with the right side intentionally empty.
- One viewport: `100dvh` column, `overflow: hidden` on html/body.

## Elevation

The CTA halo is the page's only elevation — and it's a ring of the button's own color, not a dark shadow. Nothing else lifts, borders, or shadows.

## Components

### Nav
{components.nav}. Links warm on hover; nothing moves.

### Headline
{components.headline}. The serif line's `letter-spacing: 0` (vs the sans line's −0.01em) is deliberate — italics need their air.

### CTA
{components.cta}. Both shadow states are spec'd digit-for-digit; the hover adds 1px of ring and 4px of depth, nothing more.

### Whisper note
{components.note}. Keep the brackets and the curly quotes around "should" — the punctuation is the voice.

## Motion

{motion.none} · {motion.hover} · {motion.film}. If a platform demands an entrance effect, the correct output is none — stillness is the specification, not an omission.

## Do's and Don'ts

### Do
- Keep footage golden-hour, soft, and slow; the fallback color should stay matched to its shadows.
- Keep the serif exclusively on line 2, always italic.
- Keep the ink ladder at exactly three stops.
- Keep the right side of the footer empty.

### Don't
- Don't add entrance animations, parallax, or scroll — the page must be complete on first paint.
- Don't use pure `#ffffff` for any text.
- Don't turn the whisper note into a link or move it.
- Don't give the CTA a border or a dark shadow — the halo is the identity.
- Don't add icons; the ✦ favicon is the only glyph ornament allowed.

## Responsive

- One breakpoint (`≤720px`): center links hide, nav grid becomes `auto 1fr`, hero drops to `14vh`, paddings tighten to 20px.
- Headline sizes ride their clamps; the film stays `object-fit: cover` everywhere.

## Iteration Guide

To re-skin for another calm practice, change only:
1. The film (keep dusk warmth; retune `--background` to its shadows).
2. The two headline lines (keep sans-then-serif-italic).
3. Nav labels, CTA text, and the bracketed note.
4. The wordmark.

Leave the ink ladder, halo recipe, grid nav, and stillness untouched — they are the system.

## Known Gaps

- **All links and the CTA are `href="#"` placeholders.**
- **The film downloads from the asset CDN** to `laura.mp4` and serves locally — footage choice is most of the mood.
- **Contact link's hover is inlined in the build** (style + handlers) — the published prompt normalizes it to the shared CSS hover; rendering is identical.
