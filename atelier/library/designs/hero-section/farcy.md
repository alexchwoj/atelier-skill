---
version: "1"
name: "Design System Inspired by Farcy"
description: "Farcy is a cinematic dark one-screen hero: a looping film behind glass-dark objects, everything gravity-anchored to the bottom edge — a two-line headline over a white email-capture pill on the left, two smoked-glass cards on the right (a Doto dot-matrix stat with an intentionally blurred second line, and a testimonial). Chrome is a backdrop-blur pill nav; the only hue is leaf green #34d24b, reserved for the logo mark. Type is Inter everywhere except the stat's dot-matrix Doto; motion is a single GSAP mount sequence on expo.out that pours in from the nav down."
colors:
  ink: "#0b0d0b"             # page canvas + @theme token, shows before the film loads
  white: "#ffffff"           # headline, card text, capture pill
  leaf: "#34d24b"            # logo mark stroke + avatar gradient start — nowhere else
  glass: "black/55 (cards) · black/45 (nav pill) · black/85 (nav CTA)"
  neutrals: "neutral-950 form button (hover neutral-800) · neutral-900 input text · neutral-500 placeholder"
  muted: "white/85 nav links · white/90 card body · white/70 blurred stat line · white/65 job title"
  overlays: "bottom: to-t from-black/55 via-black/5 · top: h-28 from-black/45"
typography:
  display: { fontFamily: "'Inter', system-ui, sans-serif", weights: "500", role: "headline clamp(2.4rem, 5vw, 3.9rem), leading 1.08, tracking −0.02em, two hard lines" }
  body:    { fontFamily: "'Inter', system-ui, sans-serif", weights: "400-500", role: "card copy 14px leading-snug · input 15px" }
  stat:    { fontFamily: "'Doto', monospace", weights: "600-700", role: "the 42px dot-matrix number and its blurred 15px sub-line — nothing else, ever" }
spacing:
  shell: "px-6 pb-8 pt-28 → sm:px-9 sm:pb-10 — one padded main, content pushed to the bottom edge"
  row: "gap-8 between headline column and cards, lg:items-end"
  capture: "mt-8 under the headline, max-w-md, p-1.5 inner padding"
  cards: "grid gap-3, sm:grid-cols-2, p-5 inside each card"
rounded:
  pill: "9999px — nav pill, nav links, CTA, capture form, submit button"
  card: "1rem (rounded-2xl) — the two glass cards"
  avatar: "6px (rounded-md) — the gradient avatar tile"
motion:
  ease: "expo.out (= cubic-bezier(0.16, 1, 0.3, 1)) — every tween"
  entrance: "GSAP on mount, gsap.context + ctx.revert — nav {y:-18, 0.9s} → headline spans {y:34, 1.1s, delay 0.15, stagger 0.09} → capture {y:22, 1.0s, delay 0.4} → cards {y:26, 1.05s, delay 0.5, stagger 0.12}"
  hover: "transition-colors duration-200 on every pill — color moves only, no transforms"
  reduced-motion: "matchMedia early-return skips the whole GSAP block + global CSS 0.01ms guard"
components:
  nav: "absolute top bar — palm-mark logo left; right cluster = blurred link pill (Features/Customers/Use Cases+chevron/Pricing) + standalone black/85 'Try for free' pill"
  headline: "two spans, block + sm:whitespace-nowrap — the line break is authored, not fluid"
  capture: "white pill form, p-1.5 — borderless input + neutral-950 submit nested flush right; shadow 0_10px_40px_rgba(0,0,0,0.35)"
  stat-card: "glass card — Doto 42px '50,000+', blurred Doto sub-line (blur-[5px], aria-hidden), 14px caption pushed down with mt-8"
  testimonial-card: "glass card — Axiom glyph + name, quote in typographic quotes, mt-auto author row with leaf-gradient avatar tile"
  video-bed: "fullscreen object-cover loop + two gradient overlays (bottom-heavy + thin top band)"
---

# Design System Inspired by Farcy

## Overview

Farcy composes a SaaS pitch like a film still. The whole product story lives on **one dark screen**: a looping background video under `{colors.ink}`, and every interface object pulled down to the **bottom edge** by `flex-col justify-end` — headline and email capture bottom-left, two glass cards bottom-right, nothing in the middle of the frame but footage. Two gradient overlays do the cinematography: a bottom-heavy `black/55` ramp that seats the content, and a thin `h-28` band under the nav so the chrome never fights the film.

Surfaces are **smoked glass, not panels**: cards at `black/55 + backdrop-blur-xl`, the nav's link cluster at `black/45 + backdrop-blur-md`, the nav CTA at `black/85`. Against them, exactly one solid object — the **white email-capture pill**, the conversion moment, glowing at the bottom of a dark frame with a deep shadow. Color discipline is strict: the only hue on the page is **leaf green `{colors.leaf}`**, spent entirely on the logo's hand-drawn palm outline (and diluted into the testimonial's avatar gradient). No blue, no purple, no gradient text.

The typographic signature is the stat card: **"50,000+" set in Doto**, a dot-matrix face that reads as machine telemetry next to Inter's calm — and directly beneath it, its own sub-line **"agents deployed" deliberately blurred to illegibility** (`blur-[5px]`, `aria-hidden`, unselectable). It's a designed redaction: the number shouts, the detail is classified. That one move gives the card a story no clean layout could.

Motion is a single **GSAP mount sequence** on `expo.out`: the nav drops in first, the two headline lines rise staggered 0.09s apart, the capture pill follows, then the cards land 0.12s apart — a 1.5-second pour from top to bottom, scoped in `gsap.context`, reverted on unmount, and skipped entirely under `prefers-reduced-motion`. After that the page is still; hovers move color only, never geometry.

**Key Characteristics:**
- **Bottom-anchored composition** — `justify-end` gravity; the frame's center belongs to the film.
- **Glass hierarchy in one channel** — black at 45/55/85 alpha + two blur strengths; no borders, no elevation shadows on cards.
- **One solid object** — the white capture pill is the only opaque surface and the only shadow.
- **Doto as data voice** — dot-matrix for the stat number only; Inter for everything else.
- **The designed redaction** — a blurred, decorative sub-line under the stat; copy that exists to be unreadable.
- **Leaf green monopoly** — #34d24b on the logo mark alone; the avatar gradient is its only echo.
- **Single GSAP pour** — four `gsap.from` tweens, one ease, fixed delays; no scroll triggers anywhere.
- **Authored line breaks** — the headline's two lines are hard spans with `sm:whitespace-nowrap`, not fluid wrapping.

## Colors

> Source: `@theme` tokens + the utility values used in the single App file.

### Surface
- **Ink** ({colors.ink}): the canvas behind the film and the `@theme` token behind `bg-ink`. Visible only pre-buffer; the film is the real surface.
- **Glass** ({colors.glass}): three alphas of pure black over blur — 45 (nav links), 55 (cards), 85 (nav CTA). Depth is communicated by *how much film shows through*, not by shadows.

### Text
- **White** at four working alphas ({colors.muted}): 100 for headline and names, 90 for card body, 85 for nav links, 70 for the blurred line, 65 for the job title. All hierarchy on dark surfaces is alpha, never gray hexes.
- **Neutrals** ({colors.neutrals}): reserved for the white pill's interior — `neutral-900` input text, `neutral-500` placeholder, `neutral-950` button.

### Accent
- **Leaf** ({colors.leaf}): the palm mark's stroke and the `from-leaf/70 via-emerald-900 to-black` avatar tile. It never touches buttons, links, text, or focus states — scarcity is what makes the logo own the color.

### Overlays
- {colors.overlays} — the bottom ramp is the layout's foundation; the top band exists only to seat the nav. Neither is decorative; remove one and either the cards or the nav lose legibility on bright footage.

## Typography

### Font Families

- **Inter** (400/500/600, Google Fonts) — the entire interface voice.
- **Doto** (600/700, Google Fonts) — dot-matrix display, licensed to exactly two strings: the 42px stat and its blurred sub-line. Using Doto anywhere else dilutes the telemetry effect.

### Hierarchy

| Token | Size | Weight | Notes |
|---|---|---|---|
| `{typography.display}` | clamp(2.4rem, 5vw, 3.9rem), leading 1.08 | 500 | −0.02em, two authored lines |
| stat number | 42px Doto | 700 | leading-none, tracking-tight |
| blurred line | 15px Doto | 600 | white/70 + blur(5px), decorative |
| logo | 22px | 600 | tracking-tight |
| card body / quote | 14px | 400 | leading-snug, white/90 |
| brand + author | 15px / 13px | 600 | white |
| job title | 12px | 400 | white/65 |
| nav links / CTAs | 14px | 500 | pills |
| input | 15px | 400 | neutral-900 on white |

### Principles

- **Medium-weight display** (500) at clamp scale — the film carries drama; the type states facts.
- **Two-voice system with a hard boundary**: Inter speaks, Doto counts. The contrast is the stat card's whole identity.
- **14px is the card register** — both cards run their body copy at the same size regardless of content type; hierarchy inside cards comes from weight and alpha.

### Note on Font Substitutes

Both faces load from Google Fonts in one link tag. Doto is non-negotiable — a monospace fallback loses the dot-matrix texture that justifies the card. If Doto fails to load, the design intent fails silently; verify it renders.

## Layout

### Spacing System

- One padded shell: `px-6 pb-8 pt-28 sm:px-9 sm:pb-10` on the `<main>`; the nav has its own `px-6 py-5 sm:px-9` and floats absolute.
- The content row: `gap-8`, `lg:items-end lg:justify-between` — headline column capped `max-w-2xl`, cards capped `max-w-lg`.
- Card interior: `p-5`; grid gap between cards `gap-3` — tight, instrument-panel spacing, distinct from the airy `gap-8` of the macro layout.

### Grid & Container

- No container, no max-width shell — the composition spans the viewport, and the two content clusters push apart with `justify-between` at `lg`.
- Stacking: video → overlays → content `z-10` → nav `z-20`.
- Below `lg`, the row stacks (`flex-col`): headline + capture first, cards under them, still 2-up from `sm`.

### Whitespace Philosophy

`pt-28` guarantees the frame's upper two-thirds stay film. The design treats emptiness as footage screen-time — a stat strip, marquee, or centered badge in that space would demote the video to wallpaper.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | The film | The stage |
| veil | Two black gradients | Legibility floor + nav band |
| glass | black/45–85 + backdrop-blur | Nav pill, nav CTA, both cards |
| solid | White + `0 10px 40px rgba(0,0,0,0.35)` | The capture pill — the page's only shadow |

Depth is transparency, not shadow: cards feel *over* the film because footage moves through their blur. The single drop shadow under the capture form marks the one object that isn't part of the glass world.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.pill}` | 9999px | Nav pill, links, both CTAs, capture form |
| `{rounded.card}` | 16px (rounded-2xl) | The two glass cards |
| `{rounded.avatar}` | 6px (rounded-md) | Avatar tile |

Interactive = pill, container = 16px card, identity chip = 6px. Three radii, three roles, no drift.

### Iconography

No icon library. Three inline SVGs, all specified path-for-path: the leaf palm mark (26×26, stroke 2.1, round caps), the 10×10 nav chevron, and the 18×18 Axiom glyph (`fill-opacity` 0.92). New glyphs must be authored inline in the same stroke language, not imported.

## Components

### Nav ({components.nav})

Absolute top bar, `justify-between`: palm mark + 22px wordmark left; right cluster (`gap-3`) holds the blurred link pill and the standalone `black/85` "Try for free" CTA. Link hovers fill `white/10` and lift text to full white at 200ms — color-only transitions keep the glass calm. Below `md` the link pill disappears entirely; logo + CTA carry the chrome.

### Headline ({components.headline})

Two `block sm:whitespace-nowrap` spans inside one `<h1 data-headline>` — GSAP staggers the *lines*, which is why they must be separate spans. The break ("Build AI agents that / work while you sleep") is authored; fluid rewrap would break both the rhythm and the animation.

### Email capture ({components.capture})

The conversion object: white pill, `p-1.5`, borderless input, `neutral-950` submit nested flush right. It reuses the nav CTA's label ("Try for free") deliberately — one action, two entry points. Keep the input `min-w-0` so the pill never overflows on small screens.

### Stat card ({components.stat-card})

`justify-between` column: Doto number on top, blurred Doto sub-line (`mt-1.5`, `aria-hidden`, `select-none`) directly beneath, then the plain-Inter caption pushed to the bottom with `mt-8`. The blur is a *design element* — do not "fix" it, do not make it hover-revealable, do not put real secrets in it (it's decorative text, still in the DOM).

### Testimonial card ({components.testimonial-card})

Brand row (glyph + Axiom), the quote in real typographic quotes “ ”, and an author row pinned down with `mt-auto pt-5`: the avatar is a `from-leaf/70 via-emerald-900 to-black` gradient tile — an abstract identity block that keeps the page photo-free and quietly reuses the brand green.

### Video bed ({components.video-bed})

`autoPlay loop muted playsInline`, `object-cover`, `aria-hidden`. The two overlays are separate `pointer-events-none` divs — keep them independent so the bottom ramp can be retuned for brighter footage without touching the nav band.

## Do's and Don'ts

### Do

- Keep the composition bottom-anchored (`justify-end`); the mid-frame belongs to the film.
- Keep the three glass alphas (45/55/85) and two blur strengths exactly — the hierarchy is calibrated.
- Keep Doto confined to the stat number + blurred line.
- Keep the GSAP order and offsets (0 / 0.15 / 0.4 / 0.5) — the pour reads top-to-bottom because delays say so.
- Keep the headline as two hard spans; new copy must be re-broken by hand.
- Keep the reduced-motion early return *and* the CSS guard.
- Keep leaf green exclusive to the mark (+ avatar gradient).

### Don't

- Don't add borders or shadows to the glass cards — transparency is their elevation.
- Don't give hovers transforms; color shifts at 200ms are the interaction language.
- Don't sharpen, tooltip, or reveal the blurred stat line — and don't put meaningful text in it.
- Don't introduce a photo avatar; the gradient tile is the pattern.
- Don't add scroll content or scroll triggers — one screen, all visible on load.
- Don't let the accent leak into buttons, links, or focus rings.
- Don't animate with CSS keyframes here — this asset's engine is GSAP, and the stagger structure depends on it.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px | Cards stack 1-up; nowrap off (headline may wrap); `px-6 pb-8` |
| sm | ≥640px | Cards 2-up; headline lines lock to nowrap; `px-9 pb-10` |
| md | ≥768px | Nav link pill appears |
| lg | ≥1024px | Cards move beside the headline (`row`, `items-end`, `justify-between`) |

### Fluid Strategy

- The headline never uses breakpoint sizes — one clamp covers phone to desktop.
- The capture pill is `w-full max-w-md`; the input flexes, the button never shrinks (`shrink-0`).
- The film covers at every ratio; overlays are viewport-relative so legibility holds.

### Touch Targets

- Capture submit and nav CTA ≈ 40px tall; the input's full pill area is tappable. Hover states are color-only, so touch loses nothing.

### Media Behavior

- Video: muted + playsInline for iOS autoplay; `aria-hidden` keeps it out of the a11y tree.
- Reduced motion: the GSAP block never runs — the page renders complete and static; the film still loops (it's ambient, not animated UI).

## Iteration Guide

1. New footage must survive both overlays — test the nav against bright skies and the cards against dark ground; retune the bottom ramp's `black/55` first if legibility slips.
2. A third card extends the grid (`sm:grid-cols-2` wraps it); give it `data-card` so it joins the existing stagger automatically.
3. New stats reuse the Doto + blurred-subline pattern — number loud, context redacted; keep sub-lines decorative.
4. Real form handling replaces the `preventDefault` stub; keep the button label in sync with the nav CTA.
5. If sections are ever added below the fold, this hero stays `min-h-screen` and self-contained; new sections need their own background strategy — the film does not extend.
6. A light-mode variant inverts the glass (white/55 over bright footage) but must keep the one-solid-object rule: exactly one opaque conversion surface per screen.

## Known Gaps

- The form is a stub (`onSubmit` prevents default only); no validation UI or success state exists.
- Nav links point at anchors (`#features` etc.) that have no targets on this one-screen page.
- The blurred "agents deployed" line is real text in the DOM — fine as designed (decorative), but never repurpose the pattern for actual sensitive content.
- No focus-visible styling beyond browser defaults; keyboard users get the stock ring on the white pill.
- The film loops without a pause affordance; reduced-motion stops UI animation but not the footage.
