---
version: "1"
name: "Design System Inspired by Taste"
description: "Taste is a cinematic classical poster: one full-viewport golden-hour film of marble statues flanking a gilded harp, with engraved Cinzel capitals floating over it in warm cream — every letter carrying a soft golden text-shadow glow. The chrome is a letter-spaced nav with one Reserve pill; the foot holds a sponsor row with a serif monogram. The page is deliberately still: no entrance animation, no scroll, no transforms — a printed poster that happens to have moving light. Vanilla HTML in one file."
colors:
  bg: "#120c05 — near-black amber, visible only before the film paints"
  cream: "#f3e9d2 — every display glyph · soft rgba(243,233,210,0.82) for links/eyebrow"
  gold: "#e9b969 — the SVG mark only; type is never gold, it GLOWS gold"
  glow: "title 0 0 26px rgba(255,219,160,0.38) + grounding 1px shadow · soft variant 14px for chrome"
  hairlines: "pill border cream/55 · divider cream/40 · monogram circle cream/75"
typography:
  serif: { fontFamily: "'Cinzel', serif", weights: "500", role: "engraved Roman caps — title clamp(2.2rem,6.4vw,6.6rem), brand word, sponsor names, monogram" }
  sans:  { fontFamily: "'Jost', sans-serif", weights: "300", role: "nav links 0.72rem uppercase · sponsor eyebrow clamp ~0.5rem — the quiet voice" }
  tracking: "every tracked element pairs letter-spacing with equal text-indent so centered text stays optically centered (0.42em brand · 0.34em links · 0.18em title · 0.38em eyebrow)"
spacing:
  anchors: "title top: 11.5% · sponsors bottom: 9.5% · nav padding clamp(18px,2.4vh,28px) clamp(22px,4vw,56px)"
  stage: "100svh, min-height 620px, overflow hidden — no scroll"
rounded:
  pill: "999px — the Reserve button, the only rounded rectangle"
  circle: "the CD monogram ring"
motion:
  none: "zero entrance animation; all content on first paint"
  hover: "links brighten to #fff · Reserve pill inverts to cream/#3a2a12 — color only, 0.25s ease, no transforms"
  film: "the background loop is the page's entire life"
components:
  nav: "gold ring-and-line mark with drop-shadow halo + TASTE at 0.42em tracking · three uppercase Jost links · Reserve pill"
  title: "TASTE THE NOTES in engraved Cinzel with non-breaking spaces and the strong glow"
  veil: "stage::before — top 34% and bottom 42% amber-black gradients fading by ~22-24%, so type zones read like printed poster edges"
  sponsors: "Maison block (uppercase eyebrow over TAVIGNAC) · 1px divider · CD monogram ring + CELLIERS D'AUBE"
---

# Design System Inspired by Taste

## Overview

Taste art-directs a webpage the way a concert hall prints a season poster. The entire product is **one frame**: a golden-hour film — marble statues, a gilded harp, dust in warm light — and over it, **engraved Roman capitals** placed at fixed poster coordinates (title at `top: 11.5%`, sponsors at `bottom: 9.5%`). Nothing enters, nothing reveals, nothing scrolls. The page is finished the instant it paints, and that stillness is the luxury argument: motion is for interfaces, permanence is for engravings.

The typographic trick that carries the whole design is the **glow**. Type is cream (`{colors.cream}`), never gold — but every letter carries a warm `text-shadow` (26px amber halo on the title, 14px on the chrome) plus a 1px dark grounding shadow, so the glyphs read as if lit by the same candlelight as the marble behind them. One utility, two intensities, applied to everything — it welds HTML text onto cinematic footage without a single overlay trick beyond the **veil**: two edge gradients (top 34%, bottom 42% amber-black) that darken only where type lives, exactly like the vignette of a printed poster.

The craft detail worth stealing is the **tracking discipline**: every letter-spaced element pairs its `letter-spacing` with an equal `text-indent`. Tracked text in CSS hangs a phantom space after the last glyph; the paired indent re-centers it optically. At 0.42em (brand) and 0.18em (title) this is the difference between engraved and misaligned.

Cinzel — a typeface literally drawn from Roman inscriptions — does all display work at weight 500; Jost answers in featherweight 300 uppercase for links and the sponsor eyebrow. Gold pigment itself (`{colors.gold}`) is spent on exactly one object: the ring-and-line SVG mark, which echoes the glowing emblem on the harp pedestal in the footage — chrome and film sharing one icon.

**Key Characteristics:**
- **Poster coordinates** — title and sponsors pinned by percentage anchors; the composition is fixed, not flowed.
- **Glow, not color** — cream type + amber text-shadow; the gold you perceive on letters is light, not pigment.
- **The veil** — edge-only gradients; the middle of the film stays untouched.
- **Paired tracking** — letter-spacing always ships with equal text-indent; centered caps stay centered.
- **Zero animation** — no entrances, no reveals, no hover transforms; two color transitions are the entire motion budget.
- **One gold object** — the SVG mark monopolizes the accent, halo included.
- **Sponsor row as provenance** — fictional maison + cellars lockups at the foot make the event read established.
- **Single-file vanilla build** — no framework; the whole poster is one `index.html`.

## Colors

- **Background** ({colors.bg}): amber-black, a warmer void than pure black — visible only pre-buffer and through the veil.
- **Cream** ({colors.cream}): all glyphs. The soft variant (82%) marks the quiet tier: nav links and the eyebrow.
- **Glow** ({colors.glow}): the system's real accent. Strong on the title, soft on chrome; both include a dark 1px grounding shadow so glyph edges stay crisp on bright footage.
- **Gold** ({colors.gold}): the mark's strokes and its drop-shadow halo. Never on text.
- **Hairlines** ({colors.hairlines}): three alphas of cream for pill border, divider, and monogram ring — structure at three volumes.

## Typography

- **Cinzel** ({typography.serif}): weight 500 everywhere it appears; the title clamps `2.2rem → 6.4vw → 6.6rem` at `line-height: 1` with non-breaking spaces so the three words never wrap unevenly.
- **Jost** ({typography.sans}): weight 300, uppercase, heavily tracked — the program-notes voice.
- **The pairing rule** ({typography.tracking}) is non-negotiable; dropping a text-indent visibly de-centers the composition.

## Layout

- **Stage** ({spacing.stage}): one `100svh` frame, `min-height: 620px`, body scroll disabled.
- **Anchors** ({spacing.anchors}): three absolute groups — nav at the top edge, title in the upper field (the harp occupies center frame; type never covers it), sponsors near the foot. The center belongs to the film.
- **Stacking**: video → veil (`z-1`) → UI (`z-2`).

## Elevation

None in the box-shadow sense. Depth is the film's own perspective plus the glow lifting letters off it. The one `drop-shadow` belongs to the SVG mark.

## Components

### Nav
{components.nav}. The Reserve pill is the page's only interactive surface with a fill state: hover inverts to cream with espresso text (`#3a2a12`).

### Title
{components.title}.

### Veil
{components.veil} — do not extend it into a full scrim; the 22-24% fade stops are the spec.

### Sponsors
{components.sponsors}. The eyebrow is lowercase in HTML ("Maison fondée en 1874") and uppercased by CSS — keep it that way so the accent é survives casing correctly everywhere.

## Motion

{motion.none} · {motion.hover} · {motion.film}. There is also a 4-line autoplay-fallback script (retry on first `pointerdown`) — infrastructure, not motion.

## Do's and Don'ts

### Do
- Keep footage warm, slow, and symmetric — the composition assumes a centered subject.
- Keep glows as `text-shadow` values exactly; they are tuned to the footage's color temperature.
- Keep the title's non-breaking spaces and nowrap above 900px.
- Keep gold exclusive to the mark.

### Don't
- Don't animate anything in — the stillness is the design.
- Don't replace the veil with a full-frame dim.
- Don't track text without the paired indent.
- Don't use pure white anywhere except the nav-link hover.
- Don't add icons, a mobile menu, or a scroll affordance.

## Responsive

- `≤900px`: links hide (Reserve stays), title wraps with tracking relaxed to 0.14em.
- `≤620px`: sponsors stack, divider hides, row lifts to `bottom: 11%`.
- Everything else is `clamp()`-fluid — two breakpoints total.

## Iteration Guide

To re-skin for another event, change only:
1. The film + poster frame (keep golden-hour warmth or retune the glow rgba to the new footage).
2. The three words of the title (keep nbsp + nowrap).
3. Nav labels and the two sponsor lockups.
4. The mark inside the 22px SVG frame.

Leave the anchors, glow values, tracking pairs, and stillness untouched — they are the system.

## Known Gaps

- **All links are `href="#"` placeholders** — no reservation flow behind Reserve.
- **Film + poster download from the asset CDN** and serve locally; a static server with Range support (any `http.server`) is needed for smooth video seeking in some browsers.
- **No mobile menu by design** — below 900px navigation reduces to brand + Reserve.
