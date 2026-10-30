---
version: "1"
name: "Design System Inspired by Zara"
description: "Zara is a single-viewport agency hero in strict cinematic monochrome: a moody landscape film under black gradient bookends, Inter display type against JetBrains Mono technical labels, three slash-prefixed service lines upper-left answered by a justified intro upper-right, a bordered badge over a giant two-line headline bottom-left, and a floating dark consultation card with a real portrait bottom-right. One GSAP entry timeline choreographs six elements; after that only the film moves. No accent color exists — hierarchy is carried entirely by alpha-white steps and the two white pills."
colors:
  base: "#0a0a0a — page + root div, visible while the film buffers"
  white: "#ffffff — headline, wordmark, card title · both CTAs are white fill / black text"
  alphas: "white/95 intro · /85 nav + badge · /75 service labels · /60 sup · /45 slash + role line · /10 card border"
  surface: "#101010 at 90% + backdrop-blur-md — the consultation card"
  overlays: "black/25 full-bleed + h-32 top from-black/50 + h-40 bottom from-black/55"
typography:
  sans: { fontFamily: "'Inter', system-ui, sans-serif", weights: "300-700 variable", role: "wordmark 26px · nav 15px · intro 19-22px justified · headline clamp(56px,8.5vw,124px) at weight 400" }
  mono: { fontFamily: "'JetBrains Mono', monospace", weights: "400-500", role: "service labels 11-12px ls 0.18em · badge 11px ls 0.14em · card role 10px ls 0.16em — always uppercase" }
spacing:
  shell: "px-6 md:px-12 lg:px-20 · nav pt-7 · upper row mt-10/12 · flex-1 spacer · bottom pb-10/12"
  corners: "the four corners hold the content; the center belongs to the film"
rounded:
  pill: "9999px — nav CTA + card button"
  card: "1rem (rounded-2xl) card · 0.5rem (rounded-lg) portrait"
  badge: "0 — the badge is square-cut with a 2px white left border"
motion:
  entrance: "one GSAP timeline, power3.out, fromTo only — nav {y:-16, 0.9s} → services {x:-14, stagger 0.08} → intro → badge → headline lines {y:36, stagger 0.12} → card, overlapped with negative offsets (-=0.4 to -=0.7)"
  hover: "duration-300 — nav links brighten, both pills scale 1.02-1.03"
  none: "no scroll effects; single viewport"
components:
  nav: "open-frame logo mark + lowercase wordmark · absolutely centered links (Projects with sup 6) · white pill CTA with inset-highlight shadow"
  services: "three mono labels, each opened by a dimmed slash — reads as a terminal directory listing"
  badge: "left-bordered mono chip on black/55 blur — a caption slate, not a pill"
  headline: "two-line clamp display at weight 400 — scale does the shouting so weight doesn't have to"
  card: "dark glass card: 86×104 portrait, name, mono role line, white pill 'Book 15-mins call' with arrow"
---

# Design System Inspired by Zara

## Overview

Zara stages an automation agency like a film credit sequence. The entire pitch is **one viewport**: a moody landscape loop graded by three overlays (a full-bleed `black/25` plus gradient bookends top and bottom), and content pushed to the **four corners** by a flex column with a `flex-1` spacer — services and intro up top, badge, headline, and consultation card at the bottom. The center of the frame is deliberately empty; that emptiness is what makes the page feel expensive.

The typographic system is a **two-voice dialogue**: Inter speaks (wordmark, intro, the giant `clamp(56px→124px)` headline at weight 400 — scale does the work, never boldness), while **JetBrains Mono annotates** (slash-prefixed service labels, the badge, the card's role line — always uppercase, always letter-spaced). The mono voice is what makes an agency page read as an engineering document rather than a brochure.

Color discipline is absolute: **no accent exists**. Hierarchy lives in seven alpha-white steps (95/85/75/60/45/10) over near-black, and the only solid objects are the two white pills — the nav CTA and the card's booking button — which is exactly where the eye should land. The one photographic element besides the film is a real portrait in the **consultation card**: dark glass (`#101010/90 + blur`), hairline border, deep shadow — a business card floating over the footage that turns "agency" into "a person you can call."

Motion is a single **GSAP timeline** with negative offsets, so six elements land in one overlapping breath (~2.5s): nav drops, services type in from the left, intro rises, badge, headline lines, card. Everything uses `fromTo`, so content can never be stuck hidden. After the entrance, only hovers (scale 1.02–1.03) and the film move.

**Key Characteristics:**
- **Four-corner composition** — flex column + `flex-1` spacer pins content to the frame edges; the center belongs to the film.
- **Two-voice type** — Inter displays, JetBrains Mono annotates; the mono is always uppercase + tracked.
- **Slash directory labels** — `/ AI AUTOMATION` reads like a file path; the dimmed slash (white/45) is the detail.
- **Alpha-only hierarchy** — seven white opacities, zero grays, zero hues.
- **The badge slate** — square-cut, 2px white left border, mono caption: a film slate, not a marketing pill.
- **Consultation card as anchor** — the page's only portrait, only border, and deepest shadow; trust concentrated in one object.
- **Overlapped entrance** — negative timeline offsets make six entrances feel like one gesture.
- **Justified intro** — `[text-align:justify]` on a 340px column: newspaper discipline on a dark hero.

## Colors

> Source: hex + alpha utilities in the single App file; tokens in `@theme`.

- **Base** ({colors.base}) shows only before the film buffers and through the overlays.
- **Alpha ladder** ({colors.alphas}): every text level is white at a named opacity — never introduce a gray hex; dim by alpha.
- **Surface** ({colors.surface}): the card is the one elevated plane; its `white/10` hairline is the page's only border.
- **Overlays** ({colors.overlays}): the gradient bookends protect nav and headline legibility without flattening the footage mid-frame.
- **CTAs**: white fill, black text, no exceptions — and nothing else on the page is allowed to be solid white.

## Typography

- **Inter** ({typography.sans}): variable optical sizing; the headline runs weight 400 at up to 124px — presence through scale, `leading-[0.98]`, `tracking-[-0.02em]`.
- **JetBrains Mono** ({typography.mono}): three sanctioned appearances (services, badge, card role). If a fourth mono moment appears, cut one — the ration keeps the technical voice special.

## Layout

- **Shell** ({spacing.shell}): one flex column, `min-h-screen`; the `flex-1` spacer is the layout's engine.
- **Upper row**: `flex items-start justify-between` — mono list left, justified paragraph right (`max-w-[340px]`).
- **Bottom row**: stacks on mobile, `md:flex-row md:items-end` on desktop — headline block left, card right (`max-w-[380px]`).
- **Nav**: logo left, links absolutely centered (true center regardless of logo/CTA widths), CTA right.

## Elevation

Two planes only: the film, and the consultation card (`shadow-[0_20px_60px_rgba(0,0,0,0.5)]` + blur). The nav CTA carries a subtle inset top-light (`0_1px_0 white/40 inset`) that makes the white pill read as physical. Nothing else lifts.

## Shapes

- {rounded.pill} · {rounded.card} · {rounded.badge}. The square badge against the rounded pills is intentional contrast — slates are cut, buttons are soft.

## Components

### Navbar
{components.nav}. The `Projects` link carries a superscript count (`6`, white/60) — a portfolio tease in three characters.

### Service labels
{components.services}. Stagger 0.08s on entrance, sliding from the left like a printout.

### Badge + headline
{components.badge} above {components.headline}. Copy: `WE AUTOMATE 100+ BUSINESSES` over `Clear. Precise. / Automated.` — the period-separated cadence is the brand voice.

### Consultation card
{components.card}. Portrait downloads from the asset CDN (`mitha.jpg`) and serves locally; the arrow icon sits in `text-black/70` so the button has two ink levels.

## Motion

{motion.entrance} — memorize the offsets (`-=0.5 / -=0.55 / -=0.4 / -=0.45 / -=0.7`); they are what make six tweens feel like one. {motion.hover}. {motion.none}. Reduced motion: global CSS guard zeroes durations.

## Do's and Don'ts

### Do
- Keep footage moody and slow; the overlays assume dark-ish edges.
- Keep the mono voice uppercase, tracked, and rationed to three appearances.
- Keep both CTAs white-on-black-page — the only solids.
- Use `fromTo` for every tween so a failed timeline never hides content.

### Don't
- Don't add an accent color, icon library, or footer.
- Don't bold the headline — scale is the emphasis.
- Don't round the badge or square the pills.
- Don't add scroll sections; the page is a poster, not a funnel.
- Don't replace the portrait with an illustration — the human face is the trust mechanic.

## Responsive

- One breakpoint story: below `md`, center nav links hide, the bottom row stacks (headline above card), the intro stays right-aligned.
- Headline clamps `56px → 8.5vw → 124px`; paddings step `px-6 → md:px-12 → lg:px-20`.
- The four-corner logic survives every width because rows are flex, not absolute.

## Iteration Guide

To re-skin for another agency, change only:
1. The three service labels and badge line.
2. The two headline lines (keep the period cadence).
3. The intro paragraph and card person (name, role, portrait).
4. The film behind everything.

Leave the alpha ladder, two-voice type, four-corner layout, and timeline offsets untouched — they are the system.

## Known Gaps

- **All links are `href="#"` placeholders** — no routes behind Projects/About/Blog/Contact or the booking button.
- **The nav has no mobile menu** — center links simply hide below `md`.
- **Film and portrait download from the asset CDN** to `public/` — footage choice carries the mood; a bright clip breaks the alpha ladder's legibility.
