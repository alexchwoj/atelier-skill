---
version: "1"
name: "Design System Inspired by ESAI"
description: "ESAI is a dark cinematic one-screen hero for a creative studio: a looping surreal film under a deep slate-blue grade, a two-line ultra-light Inter headline in pale fog gray where a single word — reality. — turns champagne gold, a hairline divider, a three-line caption, and a gold-ringed arrow CTA. Chrome is a thin uppercase nav with a gold active dot and a two-line hamburger; a gold beam drips down a hairline track as the scroll cue. One GSAP timeline pours everything in from the nav down; after that, only the film and the beam move."
colors:
  ink: "#232a33"          # global background — deep slate blue, shows before the film buffers
  fog: "#d3d8dd"          # headline + primary text
  mist: "#a9b6bf"         # muted body text, scroll label
  gold: "#d3ab7e"         # champagne accent — the word "reality.", nav dot, CTA ring text, scroll beam
  gold-deep: "#b08c5f"    # CTA ring border
  washes: "left-to-right #1c232b/60 → /10 → transparent · top band h-32 #161c23/55"
  selection: "rgba(211,171,126,0.35) background, white text"
typography:
  display: { fontFamily: "'Inter', 'Helvetica Neue', sans-serif", weights: "300", role: "two-line headline 13vw → sm 9vw → lg 6.4vw, leading 1.09, tracking −0.015em" }
  body:    { fontFamily: "'Inter', sans-serif", weights: "400", role: "caption 13.5px at leading 1.85 · nav links 11.5px uppercase tracking 0.22em" }
  wordmark: { fontFamily: "'Inter', sans-serif", weights: "500", role: "ESAI at 15px, tracking 0.5em · CTA label 11.5px uppercase tracking 0.3em" }
spacing:
  shell: "px-6 sm:px-10 lg:px-12 everywhere · nav pt-7 · main pb-10"
  hero: "text block max-w-3xl, pushed down by pt-[13vh] · divider mt-12 · paragraph mt-10 · CTA mt-14"
  rhythm: "min-h-[calc(100vh-96px)] main with justify-between — headline block up top, scroll cue pinned to the floor"
rounded:
  ring: "9999px — the 52px CTA circle, the only rounded surface"
  none: "no cards, no panels, no radii anywhere else"
motion:
  ease: "power3.out for the entrance timeline · power1.inOut for the looping beam · CSS 300–500ms for hovers"
  entrance: "one GSAP timeline — nav items {y:-18, 0.9s, stagger 0.06} → headline lines {yPercent:110, 1.2s, stagger 0.12} at 0.25 → rule {scaleX:0→1, origin left} at 0.9 → copy at 1.05 → CTA at 1.2 → scroll cue at 1.5"
  loop: "gold beam tweens yPercent 220 over 1.8s, repeat -1, repeatDelay 0.4 — the page's only perpetual motion besides the film"
  hover: "nav links brighten + their gold dot fades to 60% · hamburger's short line grows to full · CTA ring fills gold/10 while the arrow slides 4px"
components:
  nav: "logo (orbit-stroke SVG mark + ESAI wordmark at 0.5em tracking) · five uppercase links with 3px gold active dot on Works · two-hairline hamburger"
  headline: "two masked lines — 'Imagining' / 'beyond reality.' — each in an overflow-hidden wrapper, revealed by yPercent"
  divider: "a 44px × 1px fog hairline that draws itself from the left"
  cta: "52px gold-bordered ring holding an arrow SVG + tracked uppercase label 'View Our Work'"
  scroll-cue: "SCROLL label over a 64px hairline track with a looping gold gradient beam"
  video-bed: "fullscreen object-cover loop + two gradient washes (left column + top band) — no full dimming layer"
---

# Design System Inspired by ESAI

## Overview

ESAI stages a creative studio the way a film stages a title card. The entire pitch is **one dark screen**: a looping surreal film graded into deep slate blue `{colors.ink}`, and over it a two-line statement — *Imagining / beyond reality.* — set in **Inter at weight 300**, so light it reads as engraving rather than shouting. The layout is classically editorial: everything hangs from a single left column (`max-w-3xl`, pushed down 13vh), stacked in strict order — headline, hairline rule, three-line caption, ring CTA — while the film owns the right side of the frame.

The color story is a two-note chord. Almost everything is **fog** ({colors.fog}) on slate, softened one step further to **mist** ({colors.mist}) for the caption. Then exactly one word — **"reality."**, period included — turns **champagne gold** ({colors.gold}). That single accent recurs in only three other places: the 3px dot marking the active nav link, the CTA's ring and arrow, and the beam that drips down the scroll track. Gold never touches a background, a heading, or a hover fill beyond `gold/10`; its scarcity is the brand.

Legibility is handled cinematically instead of with a scrim: two **directional washes** — a left-to-right gradient (`#1c232b/60 → transparent`) shading the text column and a thin top band under the nav — darken only where type lives, leaving the film bright everywhere else. There are no cards, borders, shadows, or glass; the one geometric object on the page is the 52px CTA ring.

Motion is a single **GSAP timeline** on `power3.out`: nav items drop in staggered 0.06s, the two headline lines rise out of overflow-hidden masks 0.12s apart, the divider draws itself from the left, then caption, CTA, and scroll cue fade up in sequence — about 2.5 seconds of choreography, and then stillness. The only perpetual motion is the film loop and the gold beam cycling down its hairline track every 2.2 seconds.

**Key Characteristics:**
- **Weight-300 display** — the headline whispers at 6.4–13vw; scale does the work, weight never does.
- **One gold word** — the accent lands on a single word of copy; everything else earns attention through hierarchy.
- **Directional washes, no scrim** — legibility is painted only where text sits; the film stays vivid.
- **Left-column editorial stack** — headline → rule → caption → CTA in one `max-w-3xl` column; the right half of the frame belongs to the film.
- **Masked line reveal** — headline lines rise from behind clipping edges, the signature move of the entrance.
- **A drawn divider** — the 44px hairline animates `scaleX 0→1` from the left, a printer's rule coming off the press.
- **Looping scroll beam** — a gold gradient cycles down a 1px track; the scroll cue is animated furniture, not an icon.
- **No icon library** — two hand-drawn SVGs total: the orbit-stroke logo mark and the CTA arrow.

## Colors

> Source: `@theme` tokens in `src/index.css` + utility values in the single App file.

### Surface
- **Ink** ({colors.ink}): the global background and pre-buffer fallback. Once the film plays, ink survives only in the washes' tint.
- **Washes** ({colors.washes}): the page's entire lighting rig — a horizontal gradient shading the text column and a top band seating the nav. Remove either and type lands on bright footage.

### Text
- **Fog** ({colors.fog}): headline, nav links, CTA label — structure.
- **Mist** ({colors.mist}): the caption and scroll label — voice, one step quieter.
- White appears only in the logo (mark strokes + `ESAI` wordmark) and hover states.

### Accent
- **Gold** ({colors.gold}) with **gold-deep** ({colors.gold-deep}) for the CTA ring border: the word "reality.", the active-nav dot, the CTA ring, the scroll beam. Four sanctioned appearances; nowhere else, ever.
- **Selection** ({colors.selection}): even text selection stays in the champagne family.

## Typography

> One family — Inter with optical sizing (`opsz` 14..32), three working weights. Hierarchy is size and letterspacing, not weight contrast.

- **Display** ({typography.display}): `text-[13vw] → sm:[9vw] → lg:[6.4vw]`, weight 300, leading 1.09, tracking −0.015em. Two authored lines; the mask wrappers are part of the type system.
- **Body** ({typography.body}): the caption at 13.5px with an unusually tall 1.85 leading — three short lines that read like film credits. Nav links at 11.5px uppercase, tracked 0.22em.
- **Wordmark** ({typography.wordmark}): `ESAI` at 15px tracked a full 0.5em — the widest tracking on the page marks the brand; the CTA label sits between at 0.3em.

**Rule:** weights above 500 don't exist here. If bold is requested, use scale or tracking instead.

## Layout

- **Shell**: nav (`flex justify-between`, `px-6 sm:px-10 lg:px-12 pt-7`) over a `min-h-[calc(100vh-96px)]` main with `justify-between` — content block on top, scroll cue pinned to the floor.
- **The column**: everything textual lives in one `max-w-3xl` block starting at `pt-[13vh]`. No grid, no second column — the film is the second column.
- **Stacking**: video + washes at base → content `z-10` (header and main both `relative z-10`).
- **The floor**: the scroll cue's `pb-2` and main's `pb-10` keep a consistent baseline with the `px` rhythm.

## Elevation

None. No shadows, no borders except the CTA ring's 1px gold, no glass. Depth comes from the washes (atmosphere), the masked reveals (type emerging from behind an edge), and the film's own parallax content.

## Shapes

- **Ring** ({rounded.ring}): the 52px CTA circle — border `gold-deep/80`, filling `gold/10` on hover.
- **Everything else** ({rounded.none}): hairlines and bare type. The logo mark is a 1.7px-stroked circle with an orbital flourish — geometry, not an icon.

## Components

### Navigation
{components.nav}. The active state is a 3×3px gold dot centered under the link; inactive links reveal it at 60% opacity on hover. The hamburger's asymmetric hairlines (28px over 20px) equalize on hover — the page's smallest choreography.

### Headline
{components.headline}. Only `reality.` carries color. The mask wrappers (`block overflow-hidden`) are structural — reveals read as printing, not fading.

### Divider
{components.divider} — `data-rule`, animated `scaleX: 0 → 1` from `left center`.

### CTA
{components.cta}. Hover is a three-part chord: border brightens to full gold, fill rises to `gold/10`, arrow slides 4px right — all at 500ms.

### Scroll cue
{components.scroll-cue}. The beam (`via-gold to-gold` gradient) starts above the track (`-top-full`) and tweens `yPercent: 220`, so it enters and exits through the clip.

### Video bed
{components.video-bed}. Attributes exactly: `autoPlay muted loop playsInline preload="auto"`; the local file lives at `public/esai.mp4`.

## Motion

- **Entrance** ({motion.entrance}): one timeline, `defaults: {ease: 'power3.out'}`, inside `useGSAP({scope: rootRef})`. Beats: nav 0 / lines 0.25 / rule 0.9 / copy 1.05 / CTA 1.2 / scroll cue 1.5.
- **Loop** ({motion.loop}): the beam is the only `repeat: -1` tween.
- **Hovers** ({motion.hover}): pure CSS at 300ms (color) and 500ms (transform) — no JS hover animation.
- **No scroll triggers**: the page is one viewport; everything animates once on load.

## Do's and Don'ts

### Do
- Keep the film surreal, slow, and blue-graded — the washes assume dark-ish footage on the left.
- Spend gold only on the four sanctioned surfaces; the accent must stay scarce to stay expensive.
- Keep the headline at weight 300 with the masks intact.
- Let `justify-between` pin the scroll cue — don't absolutely position it.

### Don't
- Don't add a full-frame dimming overlay — the two directional washes are the entire lighting plan.
- Don't introduce cards, glass, shadows, or an icon library.
- Don't give more nav links the gold dot; exactly one is active.
- Don't swap the beam for a bouncing chevron or arrow icon.
- Don't turn the CTA ring into a filled button.

## Responsive

- **Breakpoints**: `sm` and `lg` only. Nav links appear at `lg:`; logo + hamburger persist everywhere.
- **Headline**: stepped viewport units (13vw / 9vw / 6.4vw) — fluid at every width, never fixed px.
- **Padding rhythm**: `px-6 sm:px-10 lg:px-12` shared by nav and main keeps the left rail aligned.
- **One viewport always**: `min-h-screen` root, `min-h-[calc(100vh-96px)]` main.

## Iteration Guide

To re-skin for another studio, change only:
1. The two headline lines (keep the mask structure and pick one gold word).
2. The three caption lines and CTA label.
3. The five nav labels.
4. The film at `public/esai.mp4`.
5. The logo mark inside the 38px SVG frame.

Leave the weights, washes, timeline, and gold budget untouched — they are the system.

## Known Gaps

- **Nav links and CTA are `href="#"` placeholders** — the hero ships without target pages; wire real routes when sections exist.
- **The hamburger has no menu** — it's a styled button with hover states only; mobile navigation is intentionally out of scope for the one-screen hero.
- **Video is served locally**: the film downloads from the asset CDN to `public/esai.mp4`; the slate background covers buffering but footage quality carries the design.
