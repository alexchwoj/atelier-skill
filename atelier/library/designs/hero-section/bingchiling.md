---
version: "1"
name: "Design System Inspired by Bingchiling"
description: "Bingchiling's canvas is warm ink #14100a — a near-black with a brown-amber cast, never #000000 — sitting under a looping full-bleed video and two dark scrims. The single chromatic accent is Gold #e8b04a, rationed to the 'New' badge chip (its cousin gradient #f3d08a→#c98a2e fills only the logo mark). Every word on the page is white Inter stepped through opacity (/85 /75 /70 /60); the rhythm is a single cinematic viewport — glass nav pill on top, centered hero copy, a trust strip of wordmarks at the foot."
colors:
  ink: "#14100a"            # canvas / page + hero background — warm near-black, brown-amber cast
  gold: "#e8b04a"           # accent — the "New" badge chip fill ONLY, nowhere else
  badge-ink: "#3a2a0e"      # dark-roast brown — text on the gold chip, its only use
  gold-light: "#f3d08a"     # logo gradient start — SVG linearGradient, logo mark only
  gold-deep: "#c98a2e"      # logo gradient end — SVG linearGradient, logo mark only
  white: "#ffffff"          # all type + logo fills — deployed at opacity steps /85 /75 /70 /60
  scrim: "#000000"          # pure black — overlay gradients + glass fills only, at /10–/60 alpha
  cream: "#e9e1d3"          # declared reserve token on :root — unused on the shipped hero
typography:
  display: { fontFamily: "Inter, system-ui, -apple-system, sans-serif", weights: "600", role: "hero headline — semibold, tracking-tight, 1.12 line-height, pure white" }
  body:    { fontFamily: "Inter, system-ui, -apple-system, sans-serif", weights: "400", role: "subheadline + trust line — white at /70 and /75, relaxed leading" }
  ui:      { fontFamily: "Inter, system-ui, -apple-system, sans-serif", weights: "500-600", role: "nav links, CTAs, badge chip, wordmarks — 12–16px, medium/semibold" }
spacing:
  base: "4px"
  xs: "8px"                 # nav pill py-2 / pr-2; logo inner gap (gap-2)
  sm: "16px"                # CTA row gap (gap-4), nav pill pl-4, nav CTA px-4
  md: "24px"                # mobile page rail (px-6), headline→sub (mt-6), trust column gap (gap-6)
  lg: "32px"                # badge→headline (mb-8)
  xl: "40px"                # page rail ≥sm (sm:px-10), sub→CTA row (mt-10), page bottom (pb-10)
  logo-gap: "56px"          # trust logo row horizontal gap (gap-x-14)
rounded:
  xl: "12px"                # the nav pill — the only non-pill radius on the page
  pill: "9999px"            # announcement badge, gold chip, both CTA buttons
motion:
  ease-out-quart: "cubic-bezier(0.165, 0.84, 0.44, 1)"    # the entrance ease — every .rise
  ease-out-cubic: "cubic-bezier(0.215, 0.61, 0.355, 1)"   # the video .fade + btn-glass transform
  ease-out-quad: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"   # hover color / opacity transitions
  duration-base: "250ms"                                    # all hover transitions (150ms/400ms declared, unused)
  rise: "rise-in 0.9s {motion.ease-out-quart} both — opacity 0→1 + translateY 24px→0"
  fade: "fade-in 1.2s {motion.ease-out-cubic} both — opacity only; the video layer"
  delays: "d-1 0.08s · d-2 0.18s · d-3 0.30s · d-4 0.42s · d-5 0.56s"
components:
  nav-pill: "Glass nav — max-w-3xl, 1px border white/10, bg black/25, backdrop-blur-md, rounded {rounded.xl}, py-2 pl-4 pr-2"
  logo: "24px three-tier SVG mark filled with the {colors.gold-light}→{colors.gold-deep} gradient + 'Bingchiling' white 600 tracking-tight"
  badge: "Announcement pill — black/30 glass, border white/15, gold 'New' chip ({colors.gold} bg, {colors.badge-ink} text, 12px 600), white/85 label, white/60 chevron"
  btn-glass: "Glass button — pill, bg white/10 → white/20 hover, 1px border white/15 (nav) or white/25 (hero), backdrop-blur-md, lifts -1px on hover"
  btn-ghost: "Text-only secondary — white/85, 14px 500, trailing chevron slides +2px right on hover"
  trust-strip: "white/75 proof line + 5 placeholder wordmark logos at 70% opacity — white 20px SVG glyph + 16px 600 name"
  video-bg: "Looping /hero.mp4, object-cover full-bleed, under a black/55→/15→/60 vertical scrim + a flat black/10 wash"
---

# Design System Inspired by Bingchiling

## Overview

Bingchiling's canvas is **warm ink** `{colors.ink}` — #14100a, a near-black carrying a distinct brown-amber cast, deliberately warmer than `#000000` so the dark stage reads as cinema rather than void. The canvas is almost never seen bare: a looping background video fills the entire viewport `object-cover`, and two dark scrims sit on top of it — a vertical gradient running `black/55 → black/15 → black/60` (dark at the nav, open in the middle where the headline lives, dark again at the trust strip) plus a flat `black/10` wash. The ink token is the floor under the video — the page and any letterboxing resolve to #14100a, never pure black.

The single chromatic accent is **Gold** `{colors.gold}` (#e8b04a). It appears in exactly one place: the "New" chip inside the announcement badge, carrying `{colors.badge-ink}` (#3a2a0e) dark-roast text. Its only relative is the logo mark's SVG gradient, `{colors.gold-light}` #f3d08a → `{colors.gold-deep}` #c98a2e — a 24px glyph, not a surface. Everything else on the page is white at opacity steps: `/85` for the badge label and ghost CTA, `/75` for the trust line, `/70` for the subheadline, `/60` for inactive nav links and chevron strokes. **Most AI image-generation sites flex rainbow gradients, neon glow, purple-blue "AI" clichés, and wall-to-wall galleries of generated art — Bingchiling refuses all of it, holding a dark warm-ink stage over one looping video, with a single gold accent rationed to one badge chip and white type doing everything else.** No purple, no indigo, no blue, no neon green — anywhere.

Typography is one voice: **Inter**, loaded as a variable font with optical sizing (`opsz 14..32`) at weights 400–700. The headline runs semibold 600 with `tracking-tight` on a very tight `1.12` line-height, stepping `36px → 60px → 68px` across breakpoints in pure white. The body voice is regular 400 at white/70; every interactive element — nav links, both CTAs — is 14px medium 500. There is no serif, no mono, no second family; hierarchy comes entirely from size, weight, and the white opacity ladder.

Surfaces are **glass over film**: the nav pill, the announcement badge, and the primary CTA are all translucent black or white fills (`black/25`, `black/30`, `white/10`) with 1px `white/10–/25` hairline borders and `backdrop-blur-md`, so the video glows through every component. There is not a single `box-shadow` on the page — depth is carried by the blur, the hairlines, and the moving footage behind them.

The page rhythm is a **single cinematic viewport**: a `min-h-screen` flex column with the glass `{components.nav-pill}` at the top, the hero copy stack (badge → headline → subheadline → CTA row) centered in the `flex-1` middle, and the `{components.trust-strip}` pinned to the bottom. Everything enters via pure CSS keyframes — a `rise` (24px lift + fade, 0.9s) staggered down a delay ladder from 0.08s to 0.56s, with the video on its own 1.2s `fade` — so no content can ever be stuck hidden behind a JS trigger.

**Key Characteristics:**
- **Warm-ink canvas** — `{colors.ink}` (#14100a) has a brown-amber cast; the page is never `#000000` and never light.
- **One gold accent** (`{colors.gold}` #e8b04a) — a single placement: the "New" badge chip, with `{colors.badge-ink}` #3a2a0e text. The logo's #f3d08a→#c98a2e gradient is its only relative.
- **White opacity ladder** — all type is white stepped through `/85 /75 /70 /60`; muted text is never a grey hex, always a white alpha.
- **Full-bleed looping video** under a `black/55→/15→/60` gradient scrim + flat `black/10` — the two overlays are the legibility system.
- **Glassmorphism everywhere interactive** — `backdrop-blur-md` + translucent fills + 1px white hairlines on the nav pill, badge, and primary CTA.
- **Inter only** — variable font, weights 400–700; headline at 600 `tracking-tight`, leading `1.12`.
- **Pure CSS entrances** — `rise-in` 0.9s on `{motion.ease-out-quart}`, delays 0.08–0.56s, with a `prefers-reduced-motion` guard; no animation library, no JS reveals.
- **Two radii total** — `{rounded.xl}` 12px on the nav pill; `{rounded.pill}` on everything else. The section itself is full-bleed with no frame.
- No box-shadows, no gradient text, no purple/indigo/blue/neon, no icon library (inline SVG paths only), no galleries of generated art.

## Colors

> Source: the single-screen Bingchiling hero — glass nav pill, announcement badge with the gold chip, headline + subheadline + CTA pair over the video, and the five-wordmark trust strip. The system is one viewport; there are no other live surfaces.

### Brand & Accent
- **Gold** ({colors.gold}): The signature accent (#e8b04a) — fills the "New" chip inside the `{components.badge}` and nothing else. One placement on the whole page. Never a headline color, never a button fill, never a border. The rationing is the brand.
- **Badge ink** ({colors.badge-ink}): #3a2a0e, a dark-roast brown used solely as text on the gold chip — dark-on-gold instead of white-on-gold, keeping the chip warm and print-like.
- **Gold light / Gold deep** ({colors.gold-light} → {colors.gold-deep}): #f3d08a → #c98a2e, the SVG `linearGradient` filling the 24px logo mark. A glyph fill only — this gradient never paints a surface, border, or text.

### Surface
- **Ink** ({colors.ink}): The page and hero background — #14100a, a warm near-black. It is the floor beneath the video; visible only during video load or letterboxing, but it sets the temperature of the whole composition. Never substitute `#000000`.
- **Scrim** ({colors.scrim}): Pure black, used only at alpha — the `from-black/55 via-black/15 to-black/60` vertical gradient plus the flat `black/10` wash over the video, and the glass fills `black/25` (nav pill) and `black/30 → /40 hover` (badge).
- **White glass**: `white/10` fills the two glass buttons, rising to `white/20` on hover — white enters surfaces only as translucency, never as an opaque fill.
- **Cream** ({colors.cream}): #e9e1d3, declared on `:root` but unused on the shipped hero — a reserve token for later light-on-dark moments (see Known Gaps).

### Text
- **White** ({colors.white}): The headline, active nav link, all button labels, and logo wordmarks at full opacity. Everything else steps down the alpha ladder:
  - `white/85` — badge announcement text, ghost CTA label.
  - `white/75` — the trust-strip proof line.
  - `white/70` — the subheadline.
  - `white/60` — inactive nav links (hover → white) and chevron strokes.
- There is no grey hex anywhere — muted text is always a white alpha, so it inherits the video's glow.

### Hairline
- **White hairlines**: 1px borders at `white/10` (nav pill), `white/15` (badge, nav CTA), and `white/25` (primary hero CTA) — the border steps up in opacity with the element's importance.

### Semantic
None on the marketing surface. No success / error / warning colors exist on the single hero; semantic states would have to be introduced for later product screens (see Known Gaps).

## Typography

### Font Family

- **Inter** — the only typeface; fallback stack `"Inter", system-ui, -apple-system, sans-serif`. Loaded from Google Fonts as a variable font with optical sizing (`opsz 14..32`) at weights 400, 500, 600, 700; rendered with `-webkit-font-smoothing: antialiased` and `text-rendering: optimizeLegibility`.
- One family carries every role — display, body, UI, wordmarks. Hierarchy is built from size, weight (400/500/600), and the white opacity ladder, never from a second face.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display}` | 36px → 60px (sm) → 68px (lg) | 600 | 1.12 | -0.025em (tracking-tight) | Hero headline, pure white, `text-balance` |
| `{typography.body}` (sub) | 16px → 18px (sm) | 400 | 1.625 (relaxed) | 0 | Subheadline, white/70, `text-balance` |
| wordmark | 16px | 600 | 1.5 | -0.025em | "Bingchiling" logo + trust-strip brand names |
| `{typography.ui}` (button) | 14px | 500 | 1.43 | 0 | Both CTAs, nav "Try for free" |
| `{typography.ui}` (nav) | 14px | 400–500 | 1.43 | 0 | Nav links — active white 500, rest white/60 400 |
| trust line | 14px | 400 | 1.43 | 0 | "Trusted by creative teams…", white/75 |
| badge text | 14px | 400 | 1.43 | 0 | Announcement copy, white/85 |
| chip | 12px | 600 | 1.33 | 0 | The "New" label on gold |

### Principles

- **The headline is the loudest thing on the page** — semibold 600, `tracking-tight`, a very tight 1.12 leading, capped at `max-w-4xl` so it wraps to two balanced lines over the video's open middle band.
- **600 is the ceiling.** Nothing renders bolder than semibold; 700 is loaded but unused. There is no bold, no black weight.
- **UI text is uniformly 14px/500** — nav, both CTAs, and the badge body all share one size, so the composition stays calm.
- **Opacity is the hierarchy tool** — de-emphasis always steps down the white alpha ladder (/85 → /60), never switches to a grey or smaller weight.
- **`text-balance` on headline and subheadline** keeps ragged edges symmetric at every breakpoint.

### Note on Font Substitutes

Inter is open-licensed on Google Fonts — load it directly, no substitution needed. Preserve the variable axes (`opsz 14..32`, weights 400–700); a static Inter cut loses the optical-size correction at 68px display scale. Do not swap in a geometric or grotesque lookalike — "similar to Inter" is not Inter.

## Layout

### Spacing System

- **Base unit**: 4px.
- **Tokens (front matter)**: `{spacing.xs}` 8px · `{spacing.sm}` 16px · `{spacing.md}` 24px · `{spacing.lg}` 32px · `{spacing.xl}` 40px · `{spacing.logo-gap}` 56px.
- Page rail: `{spacing.md}` 24px on mobile (`px-6`), `{spacing.xl}` 40px from `sm:` (`sm:px-10`); vertical frame `pt-6` (24px) top, `pb-10` (40px) bottom.
- Nav pill padding is asymmetric: `py-2` (8px) vertical, `pl-4` (16px) left for the logo, `pr-2` (8px) right so the pill hugs its CTA button.
- Hero copy rhythm: badge → headline `{spacing.lg}` 32px (`mb-8`) · headline → subheadline `{spacing.md}` 24px (`mt-6`) · subheadline → CTA row `{spacing.xl}` 40px (`mt-10`) · CTA gap `{spacing.sm}` 16px (`gap-4`).
- Primary CTA padding: 12px vertical · 28px horizontal (`py-3 px-7`); nav CTA: 8px · 16px (`py-2 px-4`).
- Trust strip: 24px between line and logos (`gap-6`); logo row `gap-x-14` (56px) horizontal, `gap-y-6` (24px) when wrapping.

### Grid & Container

- **Single-viewport flex column**: `section.relative.min-h-screen.overflow-hidden` holding the video + scrims, with a `relative z-10 flex min-h-screen flex-col` content wrapper — nav at top, hero copy `flex-1` centered both axes, trust strip at the bottom.
- Width caps are per-element, not one container: nav pill `max-w-3xl` (768px), headline `max-w-4xl` (896px), subheadline `max-w-2xl` (672px), logo row `max-w-5xl` (1024px) — each centered with `mx-auto`, producing a subtle hourglass silhouette.
- The section is **full-bleed**: no outer frame, no rounded corners, no page padding around it.

### Whitespace Philosophy

The scrim gradient does the composing: dark bands at top and bottom anchor the nav and trust strip, while the `via-black/15` middle leaves the video brightest exactly where the headline sits. Vertical air comes from `flex-1` centering rather than fixed margins, so the copy block floats at the optical center at any viewport height. Crowding the middle band with more elements would cost the one clear window onto the footage.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (base) | The looping video, `object-cover`, `.fade` entrance | The entire backdrop |
| 1 (scrim) | `bg-gradient-to-b from-black/55 via-black/15 to-black/60` + flat `bg-black/10` | Legibility over the footage — always both layers, in this order |
| 2 (content) | `relative z-10`, flat type on the scrimmed video | All copy |
| 3 (glass) | Translucent fill + 1px white hairline + `backdrop-blur-md` | Nav pill, badge, primary CTA |

There is **no `box-shadow` anywhere on the page**. Depth is carried entirely by the glass recipe (blur + translucency + hairline) and by the video moving behind it. Adding a drop shadow to any element would break the cinematic flatness — the components are panes of glass over film, not cards above a page.

### Decorative Depth

- **The video is the only decoration** — no gradient meshes, no glow orbs, no particles, no generated-art gallery.
- **Glass borders step with importance**: `white/10` on the passive nav shell, `white/15` on the badge and nav CTA, `white/25` on the primary hero CTA.
- The gold chip is the single point of saturated color on the page — a 1-inch flag on a dark stage.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xl}` | 12px | The `{components.nav-pill}` — the only rectangle-with-corners on the page |
| `{rounded.pill}` | 9999px | Announcement badge, gold "New" chip, nav CTA, primary CTA |

### Iconography & Logo Geometry

- **No icon library.** Every icon is an inline SVG path written into the JSX: the logo mark (`viewBox 0 0 24 24`, 24px), two chevrons (`viewBox 0 0 16 16`, 14px, `strokeWidth 1.5`, path `M6 3l5 5-5 5`), and five brand glyphs (`viewBox 0 0 20 20`, 20px, `fill-white`).
- The logo is a three-tier stacked mark filled with the `{colors.gold-light}`→`{colors.gold-deep}` linearGradient — the only gradient fill in the system.
- The five trust-strip glyphs are simple geometric shapes (offset squares, a starburst, a quarter-cut disc, three bars, a ring) — abstract enough to read as logos at 70% opacity without competing with the copy.

## Components

### Navigation

**`nav-pill`** ({components.nav-pill}) — The floating glass header, first element to rise (`d-1`).
- `max-w-3xl` centered row, background `black/25`, 1px border `white/10`, `backdrop-blur-md`, rounded `{rounded.xl}` (12px), padding `py-2 pl-4 pr-2`.
- Left: the `{components.logo}` — gradient mark + "Bingchiling" in white 600 `tracking-tight`.
- Center (hidden below `md:`): five links at 14px — active "Home" in white 500, the rest `white/60 → white` on hover, color easing over `{motion.duration-base}` on `{motion.ease-out-quad}`.
- Right: "Try for free" as a `{components.btn-glass}` — pill, `white/10` fill, `white/15` border, `px-4 py-2`.

### Badge

**`badge`** ({components.badge}) — The announcement pill above the headline (`d-2`), and the only home of the gold accent.
- Pill of `black/30` glass (`hover:bg-black/40`), 1px border `white/15`, `backdrop-blur-md`, padding `py-1.5 pl-1.5 pr-4`, internal `gap-3`.
- Contents: the gold chip (`{colors.gold}` fill, `{colors.badge-ink}` text, 12px 600, pill, `px-3 py-1`) → announcement copy at 14px `white/85` → a chevron stroked `white/60`.
- The chip's tight `pl-1.5` inset makes the gold read as set *into* the glass, not stuck on top.

### Buttons

**`btn-glass`** ({components.btn-glass}) — The primary action recipe, used twice (nav CTA + "Start Creating Free").
- Pill, background `white/10 → white/20` on hover, `backdrop-blur-md`, white 14px 500 label. Border `white/15` in the nav, `white/25` on the hero CTA — the stronger hairline marks the primary. Hero padding `px-7 py-3`.
- Hover lifts `translateY(-1px)` on `{motion.ease-out-cubic}`; active returns to 0. Background and border ease over `{motion.duration-base}`.
- Note: the primary CTA is glass, not gold — the accent budget is spent on the chip, not the button.

**`btn-ghost`** ({components.btn-ghost}) — The secondary "See It in Action".
- Text-only, `white/85` at 14px 500, `px-2 py-3` for tap area, trailing chevron in `stroke-current`. On hover the chevron slides `+2px` right over 300ms and the label goes full opacity. No border, no fill — the 0% treatment that lets two glass buttons stay quiet.

### Trust Strip

**`trust-strip`** ({components.trust-strip}) — Pinned to the viewport bottom, rising with the CTA row (`d-5`).
- Proof line at 14px `white/75`, then a wrapping row (`gap-x-14 gap-y-6`, `max-w-5xl`) of five logo items.
- Each item: 20px white SVG glyph + 16px 600 `tracking-tight` white name, the whole item at `opacity-70` easing to 1 on hover.
- The five names — **Pixelform, Lumina, Artvane, Framecast, Studioly — are fictional placeholder wordmarks**, not real companies. Swap them for real client/partner logos at the same size, opacity, and gap; keep glyphs monochrome white.

### Background

**`video-bg`** ({components.video-bg}) — The stage.
- `<video>` with `autoPlay muted loop playsInline`, `absolute inset-0 object-cover`, source `/hero.mp4` (owner-supplied local file — never a stock/placeholder URL). Enters on the 1.2s `fade`.
- Immediately above it, always both scrims in order: the `black/55 → black/15 → black/60` vertical gradient, then the flat `black/10` wash. Content sits at `z-10`.

### Inputs & Forms

Not present on the single hero. Any later form should follow the glass recipe — `black/25–/30` fill, `white/15` hairline, `backdrop-blur-md`, white text — with a `white/25` or gold focus treatment to be decided (see Known Gaps).

## Do's and Don'ts

### Do

- Keep the canvas at `{colors.ink}` (#14100a) — the warm brown-amber cast is the temperature of the brand; the floor under the video is never pure black.
- Ration `{colors.gold}` (#e8b04a) to the "New" chip; if a second gold moment is ever earned, it must be chip-scale, never a button fill or headline.
- Step all muted text down the white alpha ladder — `/85 /75 /70 /60` — instead of introducing grey hexes.
- Always stack both scrims over the video (`black/55→/15→/60` gradient + flat `black/10`) before placing type.
- Build every raised surface from the glass recipe: translucent fill + 1px white hairline + `backdrop-blur-md`, hairline opacity stepping with importance (/10 → /15 → /25).
- Enter everything with the CSS `rise`/`fade` classes on the `d-1…d-5` ladder — content must render visible even if CSS animation never fires.
- Keep icons as inline SVG paths at `strokeWidth 1.5`; no icon library imports.

### Don't

- Don't use purple, indigo, blue, or neon green anywhere — the explicit refusal that keeps this off the AI-startup mood board.
- Don't spread gold onto buttons, headlines, borders, or backgrounds — one chip is the entire accent budget.
- Don't add a `box-shadow` to anything; depth is blur + hairline + moving footage only.
- Don't replace the CSS keyframe entrances with an animation library or `opacity-0` + JS scroll reveals — content can never depend on a script to become visible.
- Don't darken the middle scrim stop — `via-black/15` is the window that keeps the video alive behind the headline.
- Don't exceed font weight 600 or introduce a second typeface; Inter carries every role.
- Don't frame the hero — no outer padding, rounded corners, or border around the section; it is full-bleed.
- Don't swap `/hero.mp4` for a stock URL, and don't ship real brand logos in the trust strip without permission — the five wordmarks are placeholders by design.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px | Headline 36px; rail `px-6`; nav links hidden — pill holds logo + "Try for free" only; CTA row and logo row wrap (`flex-wrap`) |
| sm | ≥640px | Rail widens to `sm:px-10`; headline 60px; subheadline 18px |
| md | ≥768px | Nav links appear (`md:flex`) between logo and CTA |
| lg | ≥1024px | Headline caps at 68px (`text-[4.25rem]`) |
| Wide | ≥1280px | No further changes — width caps (`max-w-3xl/4xl/2xl/5xl`) hold the composition; the video keeps covering |

### Touch Targets

- The primary CTA (`px-7 py-3` ≈ 46px tall) and nav CTA (≈ 38px) sit at or near the 44px minimum; the ghost link pads itself to a full-height target with `py-3`.
- The whole announcement badge is a single anchor — the chip, text, and chevron share one tap area.

### Collapsing Strategy

- **The hero never scrolls internally** — it is one `min-h-screen` viewport at every width; only type scale, rail padding, and wrapping flex.
- **Nav**: no hamburger — below `md:` the link row simply disappears, leaving logo + CTA. A menu would need its own decision.
- **Trust strip**: `flex-wrap` reflows five logos into two rows on narrow screens at the same gaps; nothing is hidden.

### Media Behavior

- The video covers at every ratio (`object-cover`, `absolute inset-0`); `playsInline` keeps iOS from going fullscreen, `muted` + `autoPlay` + `loop` keep it running silently.
- `prefers-reduced-motion: reduce` disables `rise`/`fade` (content shown immediately, no transform) and clamps all transition/animation durations to 0.01ms — the video element itself remains, per the shipped build.

## Iteration Guide

1. New section below the hero? Start from `{colors.ink}` as a flat canvas — the video belongs to the hero alone; later sections earn imagery individually.
2. Reference everything by token — `{colors.x}`, `{motion.x}`, `{rounded.x}`, `{components.x}` — so a palette or easing change cascades.
3. Any new raised surface uses the glass recipe with a hairline chosen from the /10–/15–/25 ladder; never invent a fourth border opacity casually.
4. New text gets a rung on the white alpha ladder, not a new hex — if /70 and /60 both feel wrong, the hierarchy is wrong, not the palette.
5. Gold stays a chip-scale resource: the answer to "this needs an accent" is the existing chip pattern, or nothing.
6. New entrances join the existing `d-1…d-5` ladder (extend to `d-6` at ~0.7s if needed) on the same `rise` keyframe — never a second entrance system.
7. Icons continue as hand-written inline SVG paths at `strokeWidth 1.5`; adding an icon package is a system change, not a convenience.

## Known Gaps

- The system is a single hero viewport — no later sections, footer, pricing, gallery, or product UI are specified. Extend on flat `{colors.ink}`, Inter, the white alpha ladder, and the glass recipe.
- The gold accent appears exactly once; how it scales to a full page (links? focus rings? charts?) is undecided and needs its own governing decision.
- All nav links, CTAs, and the badge are decorative `href="#"` anchors — no routing, states, or destinations exist.
- `/hero.mp4` is an owner-supplied local file and an external dependency of the whole composition — the palette's warmth partly comes from the footage's grade, which this spec cannot pin. Test any replacement video against the scrim stack.
- Declared-but-unused tokens ship in the build: `--cream` #e9e1d3, `--duration-fast`/`--duration-slow`, `--ease-in-out-cubic`, and a `gsap` dependency in package.json that is never imported. Treat cream as a reserve; remove or adopt the rest deliberately.
- Form inputs, focus styles, and semantic states (error/success) are absent and would need to be introduced in the glass language.
