---
version: "1"
name: "Design System Inspired by Login 004"
description: "Login 004 is a warm-cream booking screen split in two temperatures: a cinematic rounded video panel on the left carrying five stars and a white serif promise, and an unhurried editorial form on the right — greige rounded fields, pill radios with hand-built indicator dots, one coal CTA whose label lifts as its arrow slides. Five earth tokens, two fonts, two inline SVGs, zero libraries. The page sells a call the way a nice studio lobby sells a meeting: soft materials, no urgency."
colors:
  cream: "#f7f2e9 — page canvas"
  field: "#e9e4d9 — inputs, textarea, radio pills (hover deepens to #e2ddd1)"
  ink: "#2b2b2b — text · muted #6f6c66 — placeholders, footer"
  coal: "#262019 — the CTA, hover pure black"
  dot: "#cfcabf — unselected radio indicator"
  panel: "white text on video, dimmed to white/90 and white/85 for small print"
typography:
  serif: { fontFamily: "'Instrument Serif', Georgia, serif", weights: "400 only", role: "one appearance — the 38→46px video-panel headline" }
  body:  { fontFamily: "'Inter', system-ui, sans-serif", weights: "400-600", role: "fields 14px · questions 15px medium · pills 13.5px medium · footer 12.5px" }
spacing:
  shell: "max-w-[1920px], p-5 → lg:p-8, gap-8 → lg:gap-14; video 44% / form 56%"
  form: "max-w-[600px] centered; question blocks mt-9, options mt-4, textarea mt-10, CTA mt-9"
  fields: "px-5 py-4, radius 14px · pills px-4.5 py-2.5, full round"
rounded:
  panel: "24px — the video frame"
  field: "14px — inputs, textarea, CTA"
  pill: "9999px — radio options"
motion:
  hover: "pills deepen one greige step · CTA background coal→black while the label lifts -2px and the arrow slides +4px, both 300ms"
  none: "no entrance animation, no library — the video loop is the only continuous motion"
components:
  video-panel: "rounded-24 black frame, object-cover loop, no overlay; stars + 'Helped over 100+ businesses' pinned at top 9%, serif headline + subline dead center"
  radio-pill: "greige pill with sr-only native input; 14px indicator swaps from flat #cfcabf disc to white ring (1.5px ink border) with a 6px ink core"
  fields: "borderless greige blocks with a soft ink/15 focus ring — no labels, placeholder-driven"
  cta: "54px coal bar, arrow micro-choreography on hover"
---

# Design System Inspired by Login 004

## Overview

Login 004 splits a booking decision into two temperatures. On the left, a **cinematic panel** — a 24px-rounded frame of looping video with five white stars, a social-proof line, and a serif promise (*Turn confusion into clarity, today.*) floating dead center. On the right, the **paperwork made pleasant**: a cream page, greige fields with no borders and no labels, two questions answered by tapping pills, and one near-black button. The emotional pitch and the form never share a surface — the video panel does the persuading so the form can stay quiet.

The palette is five earth tokens deep. **Cream** (`{colors.cream}`) is the canvas; **field greige** one step darker shapes every input; **ink** carries text; **coal** is spent once, on the CTA. Nothing is white except the panel's text and the checked radio's ring — on this page, white is an event. There are no borders anywhere: fields are defined by fill against canvas, focus is a soft `ink/15` ring, and hierarchy comes entirely from tone-on-tone contrast, like layers of card stock.

The interaction signature is the **radio pill**: a full-round greige chip whose native input is screen-reader-only, with a hand-built 14px indicator that flips from a flat putty disc to a white ring with an ink core. Choosing a service feels like pressing a physical button rather than filling a form — which is the entire UX argument of a "book a call" page: reduce answers to taps, save typing for the one textarea that earns it.

Type follows the split: **Instrument Serif appears exactly once**, at 38–46px on the video, in its only weight; **Inter** does everything else at 12.5–15px. Motion is three CSS transitions, the largest being the CTA's hover chord — background deepens, label lifts 2px, arrow slides 4px — a handshake, not a performance.

**Key Characteristics:**
- **Two-temperature split** — cinematic dark panel (44%) beside warm paper form (56%); persuasion and paperwork never mix.
- **Borderless everything** — fills, not strokes; the whole hierarchy is tone-on-tone greige.
- **Serif as promise** — one serif moment, on video, in white; the form never uses it.
- **Tap-first form** — two radio-pill groups turn qualification into button presses; only one field expects sentences.
- **Coal singularity** — exactly one dark object on the paper side; the eye lands on it from anywhere.
- **Hand-built radio anatomy** — sr-only input + custom ring/core dot; accessible and entirely on-palette.
- **Three-transition budget** — pill hover, focus ring, CTA chord. Nothing enters, nothing reveals.

## Colors

> Source: five `@theme` tokens + three literal values in `src/index.css` and App classes.

- **Cream / field** ({colors.cream} · {colors.field}): the two-step paper system; hover adds a third step (`#e2ddd1`) so pills visibly respond without borrowing a new hue.
- **Ink / muted** ({colors.ink}): text at two volumes — never pure black, never gray-blue.
- **Coal** ({colors.coal}): the button, darker than ink, hover snaps to `black` — the page's full contrast reserved for its one action.
- **Dot** ({colors.dot}): unselected state sits *between* field and muted — visible, ignorable.
- **Panel text** ({colors.panel}): white with alpha steps for the subline; no scrim behind it — the video is expected to be mid-dark.

## Typography

- **Serif** ({typography.serif}): one appearance. If a second serif moment creeps in, the panel stops feeling like a signature.
- **Body** ({typography.body}): Inter across five sizes (12.5 / 13 / 13.5 / 14 / 15), medium weight doing all emphasis. No bold anywhere on the paper side.

## Layout

- **Shell** ({spacing.shell}): one row on desktop — panel stretches full column height (`lg:min-h-0`), form vertically centered; below `lg` it stacks with the panel first at `min-h-[520px]`.
- **Form measure** ({spacing.form}): 600px max — wide enough for six pills to wrap into two calm rows, narrow enough to read as a letter.
- **Question rhythm**: label `mt-9`, options `mt-4` — consistent breathing between the two groups; the textarea gets `mt-10` as a paragraph break before the CTA's `mt-9`.

## Elevation

None — no shadows anywhere. Depth is fill-on-fill (field on cream), the focus ring, and the video's own dimensionality inside its frame. The page reads as flat card stock on purpose.

## Shapes

Three radii, one per role ({rounded.panel} / {rounded.field} / {rounded.pill}): the big soft frame, the 14px workhorse, and the full-round tap targets. Nothing square, nothing fully round except the pills and dots.

## Components

### Video panel
{components.video-panel}. The video downloads from the asset CDN to `public/hero.mp4` and serves locally; `bg-black` covers buffering. No overlay — pick footage that stays mid-dark behind white type.

### Radio pill
{components.radio-pill}. State lives in React (`service`, `challenge`), one string each with sensible defaults, so the form is never in an unanswered state.

### Fields
{components.fields}. Required marks live in the placeholder text (`Name*`), keeping the layout label-free.

### CTA
{components.cta} — the only place the page "performs," and it waits for a hover to do it.

## Motion

{motion.hover} — and deliberately nothing else ({motion.none}). A booking page that animates its form reads as salesy; this one lets the film loop carry all the life.

## Do's and Don'ts

### Do
- Keep footage mid-dark and slow — white type sits on it bare.
- Keep coal exclusive to the CTA and white exclusive to the panel + checked ring.
- Keep both radio groups defaulted so submission is always one tap away.
- Keep placeholders as labels; the greige system depends on empty-looking fields.

### Don't
- Don't add borders, shadows, or a second dark element on the form side.
- Don't use the serif anywhere but the panel headline.
- Don't add entrance animations or animate the panel text over the video.
- Don't replace the hand-built radio dot with a native or library control.
- Don't cool the palette — no blue-grays; every neutral here leans warm.

## Responsive

One breakpoint (`lg`): stack → split. Panel `min-h-[520px]` when stacked, full column height beside the form when split. Headline 38 → 46px. Nothing else changes — the pill wrap handles every width in between.

## Iteration Guide

To re-skin for another service business, change only:
1. The headline, subline, and social-proof line.
2. The two question labels and their pill options (keep defaults on option 1).
3. The film behind the panel.
4. The five `@theme` tokens (keep the two-step paper relationship: field ≈ cream −5% lightness).

Leave the split ratio, radii, radio anatomy, and three-transition budget untouched — they are the system.

## Known Gaps

- **The form doesn't submit anywhere** — `onSubmit` only prevents default; wire a real endpoint (or a mailto/calendar link) at production.
- **"Terms of service" links to `#`.**
- **No scrim on the panel** — legibility is delegated to the footage; a bright clip will wash out the stars and subline.
