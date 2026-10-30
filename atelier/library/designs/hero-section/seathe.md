---
version: "1"
name: "Design System Inspired by SEATHE"
description: "SEATHE's stage is near-black — the hero base is Abyss #050607 and the body fills to true #000, never a panel surface. A full-bleed looping underwater video runs behind a two-layer dark wash (radial vignette + vertical linear) that exists only to keep type legible. Type is two voices: a warm off-white Playfair Display serif headline (Ink #f1efe9) and Inter for everything else. The single chromatic accent is Ember orange #e8893c, rationed to the five review stars and nowhere else; the page is one non-scrolling cinematic viewport with content pinned top / center / bottom."
colors:
  abyss: "#050607"                          # hero base — fallback behind the video
  void: "#000000"                           # the <body> fill, true black under the hero
  ink: "#f1efe9"                            # headline + primary text — warm near-white
  ink-soft: "rgba(241,239,233,0.66)"        # subtitle, nav links, right actions
  ink-faint: "rgba(241,239,233,0.45)"       # nav dot separators only
  pill-bg: "rgba(18,19,21,0.55)"            # glass nav-pill background
  pill-border: "rgba(255,255,255,0.10)"     # glass nav-pill hairline
  ember: "#e8893c"                          # accent — ONLY the five review stars
  cta-bg: "#f6f4ef"                         # CTA pill fill (inline hex in styles.css)
  cta-ink: "#15171a"                        # CTA pill text (inline hex in styles.css)
typography:
  display: { fontFamily: "'Playfair Display', Georgia, serif", weights: "400,500,600,700", role: "the headline only — set at weight 500" }
  body:    { fontFamily: "'Inter', system-ui, -apple-system, sans-serif", weights: "400,500", role: "logo, nav, subtitle, CTA, reviews — everything that is not the headline" }
spacing:
  base: "4px"
  xs: "5px"                                 # star gap (gap:5px)
  sm: "16px"                                # reviews row gap (gap:16px)
  md: "18px"                                # nav-pill link gap (gap:18px)
  lg: "26px"                                # subtitle top margin (margin-top:26px)
  cta: "36px"                               # CTA top margin (margin-top:36px)
  pill-y: "13px"                            # nav-pill vertical padding
  pill-x: "28px"                            # nav-pill horizontal padding
  nav-y: "30px"                             # navbar vertical padding
  nav-x: "52px"                             # navbar horizontal padding (rail)
  cta-y: "16px"                             # CTA vertical padding
  cta-x: "34px"                             # CTA horizontal padding
rounded:
  pill: "999px"                             # nav pill + CTA + nav dots-as-circles
components:
  hero-overlay: "Two-layer dark wash — radial vignette (120% 80% at 50% 36%) + vertical linear (Abyss 0.55→0.15→0.35) over the video, pointer-events:none, the only thing standing between footage and type"
  nav-pill: "Centered glass capsule — pill-bg fill, 1px pill-border hairline, blur(14px) backdrop, four links split by 3px ink-faint dots, rounded {rounded.pill}"
  cta-pill: "The only filled button — bg {colors.cta-bg}, text {colors.cta-ink}, 16px 34px, rounded {rounded.pill}, dark drop shadow that deepens + lifts -2px on hover"
  star: "22px Ember-filled SVG star — five identical, the page's single chromatic moment"
  logo: "Wordmark SEATHE — Inter 500, 18px, 0.34em tracking, no mark, no underline"
---

# Design System Inspired by SEATHE

## Overview

SEATHE's stage is the darkest surface in this collection. The `<body>` fills to true `{colors.void}` (#000000) and the hero base sits one half-step warmer at `{colors.abyss}` (#050607) — a near-black with the faintest blue-grey graphite cast that reads as deep water, never a flat black rectangle. There is no surface ladder, no card field, no panel; the only thing on the page besides type is a full-bleed looping underwater video. Onto that footage sit a warm off-white `{colors.ink}` (#f1efe9) and two transparency-derived neutrals — `{colors.ink-soft}` at 66% for the subtitle and nav links, `{colors.ink-faint}` at 45% for the nav dot separators — both struck from the same #f1efe9, so every quiet element is the headline color simply turned down rather than a new grey.

The single chromatic accent is **Ember orange** `{colors.ember}` (#e8893c). It is treated as a scarce resource, not a palette: it fills the five review stars at the bottom of the screen and appears nowhere else — not the headline, not the CTA, not a hover, not a link. **Most wearable / health-tech and dive sites lean on clinical blue, data HUDs, neon vitals readouts, and pulsing heart-rate graphs to signal "monitoring" — SEATHE refuses all of it, holding a dark cinematic underwater stage with a single Playfair serif headline and one warm-orange accent rationed to the review stars.** The brief is explicit: no purple, indigo, blue, or neon anywhere on the page.

Display type runs **Playfair Display** at weight 500, scaling fluidly via `clamp(40px, 6.6vw, 90px)` on a `1.08` line-height with a hair of negative tracking (-0.005em). It carries the two-line headline ("A New Way to Dive / Safe at Heart") and nothing else. Every other word — the `SEATHE` wordmark, the four nav links, the subtitle, the CTA label, the reviews row — is **Inter** at 400/500. The serif is the protagonist; Inter is the quiet narrator. They never blend.

The page rhythm is a **single non-scrolling cinematic viewport**. A `min-h-screen` flex column pins three bands: the navbar on top, the hero content block floated down from `14vh`, and the reviews row pushed to the bottom edge by `margin-top: auto`. The hero is deliberately **static** — all content is visible on first paint. There are no entrance fades, no scroll reveals, no blur-in, no animation library; the only motion is the looping video itself, plus two CSS hover transitions (nav-link color, CTA lift). Everything-visible-on-load is a decision, not an omission.

**Key Characteristics:**
- **Near-black cinematic canvas** — hero base `{colors.abyss}` (#050607) over a true-black `{colors.void}` body; no surface ladder, no cards.
- **A full-bleed looping background video** is the entire backdrop, under the `{components.hero-overlay}` two-layer dark wash that exists only for legibility.
- **Ember-orange accent** (`{colors.ember}` #e8893c) — used scarcely on the five review stars and nowhere else; no blue / purple / indigo / neon anywhere.
- **Playfair serif headline** at weight 500, `clamp(40px,6.6vw,90px)`, line-height 1.08 — the headline IS the page.
- **Inter 400/500** carries every other word — wordmark, nav, subtitle, CTA, reviews.
- The text neutrals are **one ink at three opacities** — `{colors.ink}` 100% → `{colors.ink-soft}` 66% → `{colors.ink-faint}` 45%.
- A single **glass nav pill** (`{components.nav-pill}`) and a single white **CTA pill** (`{components.cta-pill}`) are the only built surfaces.
- **The hero is static** — content renders fully on load; the only motion is the video loop and two CSS hover transitions.
- No second chromatic color, no gradient *content* (only the legibility wash), no entrance animation, no scroll reveal, no icon library — three inline SVGs only.

## Colors

> Source pages: the single non-scrolling SEATHE hero — the looping underwater video, the two-layer dark wash, the navbar (wordmark + glass center pill + EN/search actions), the centered headline + subtitle + CTA cluster, and the bottom-pinned reviews row with five orange stars. The system is one viewport; there are no other live surfaces.

### Brand & Accent
- **Ember** ({colors.ember}): The single SEATHE accent (#e8893c) — fills the five `{components.star}` SVGs in the reviews row, `fill: var(--star)`. Five placements, all in one cluster, nowhere else on the page. Never a headline, body, link, hover, or CTA color. This rationing is the brand — it is the only chromatic moment on an otherwise near-monochrome screen.

### Surface
- **Abyss** ({colors.abyss}): The hero base (#050607) — `background-color` on `.hero`, sitting behind the video as a fallback so the section never flashes a lighter color before footage paints. A near-black with the faintest cool graphite cast that reads as deep water.
- **Void** ({colors.void}): True black (#000000) — the `<body>` fill under everything. The page's literal floor; one half-step darker than Abyss so any uncovered edge stays black, not grey.
- There is **no surface ladder** — no cards, panels, or raised fields. The only built surfaces are the translucent `{components.nav-pill}` (graphite glass) and the `{components.cta-pill}` (warm white). Everything else is type directly on footage.

### Text
- **Ink** ({colors.ink}): Primary text (#f1efe9) — a warm off-white (not `#ffffff`), carrying the Playfair headline, the `SEATHE` wordmark, and the `Reviews 1,042` / `Excellent Score` labels. The warmth keeps it in the underwater family rather than reading clinical.
- **Ink-soft** ({colors.ink-soft}): Secondary text at `rgba(241,239,233,0.66)` — the subtitle paragraph, the four nav-pill links (resolving to full `{colors.ink}` on hover), and the EN / search action group. Not a new grey: it is Ink at 66% opacity.
- **Ink-faint** ({colors.ink-faint}): The faintest tier at `rgba(241,239,233,0.45)` — the 3px dot separators between nav links only. Ink at 45% opacity; present but barely there.

### Glass
- **Pill-bg** ({colors.pill-bg}): `rgba(18,19,21,0.55)` — the translucent graphite fill of the center nav pill, dark enough to read against bright footage, sheer enough to let the video glow through under its `blur(14px)`.
- **Pill-border** ({colors.pill-border}): `rgba(255,255,255,0.10)` — the 1px hairline ringing the nav pill, a 10%-white edge that defines the glass against the video.

### Semantic
None on the marketing surface. No success / error / warning colors are present on the single hero; the only "overlay" is the `{components.hero-overlay}` legibility wash (radial + linear dark gradient over the video), and the only shadow is the CTA's dark drop shadow. Semantic states would have to be introduced for any later form (see Known Gaps).

## Typography

### Font Family

- **Playfair Display** — the display serif; loaded from Google Fonts at weights 400/500/600/700, fallback stack `'Playfair Display', Georgia, serif`. Carries the two-line headline **only**, set at weight 500. The high-contrast didone serif is what makes the underwater stage feel editorial rather than gadget-spec.
- **Inter** — the body and UI sans; Google Fonts at weights 400/500, fallback stack `'Inter', system-ui, -apple-system, sans-serif`, set as the `body` default with `-webkit-font-smoothing: antialiased`. Carries the wordmark, nav links, action buttons, subtitle, CTA label, and reviews labels — every word that is not the headline.

The page treats Playfair and Inter as two distinct voices: the serif is the literary protagonist owning the optical center, the sans is the quiet operational narrator around it. They never blend into one continuous voice — that contrast is the point. There is no third family and no mono.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display}` (headline) | clamp(40px, 6.6vw, 90px) | 500 | 1.08 | -0.005em | The two-line hero headline (Playfair) |
| subtitle | 17px (15.5px ≤520px) | 400 | 1.62 | 0 | Intro paragraph under the headline (Inter, Ink-soft) |
| `{components.logo}` | 18px (16px ≤520px) | 500 | — | 0.34em (0.28em ≤520px) | The `SEATHE` wordmark (Inter) |
| nav link | 14.5px | 400 | — | 0.01em | The four center-pill links (Inter, Ink-soft) |
| action | 14px | 400 | — | 0 | EN / search buttons (Inter, Ink-soft) |
| CTA | 15px | 500 | — | 0 | `See How It Works` pill label (Inter) |
| reviews label | 14px | 500 | — | 0 | `Reviews 1,042` / `Excellent Score` (Inter, Ink) |

### Principles

- **The headline is the page.** Two lines via `<br/>`, Playfair weight 500, fluid `clamp(40px,6.6vw,90px)` on a tight 1.08 line-height. It owns the optical center; nothing competes.
- **Negative tracking on the serif display** (-0.005em) — a hair tighter, just enough to knit the warm off-white letters; body never tightens.
- **Wide tracking is the wordmark's signature** — `SEATHE` opens to 0.34em (relaxing to 0.28em on small screens), the one place tracking expands, marking it as a logotype.
- **Two weights only: Inter 400 + 500.** 400 for reading copy and quiet links, 500 for the wordmark, CTA, and reviews labels. There is no bold and no light.
- **The headline line 2 is held on one line** (`white-space: nowrap` on `Safe at Heart`) until ≤860px, where it relaxes to `normal` so it can wrap on phones.

### Note on Font Substitutes

SEATHE uses no licensed typeface. **Playfair Display** and **Inter** are both open-licensed on Google Fonts — load them directly via the `<link>` in `index.html`, no substitution required. If Playfair is ever unavailable, the documented fallback `Georgia` is the recommended display substitute; accept a lower-contrast headline. Inter falls back to `system-ui` / `-apple-system`. Do not introduce a commercial display face or a second serif — the two-family system is the system of record.

## Layout

### Spacing System

- **Base unit**: 4px.
- **Tokens (front matter)**: `{spacing.xs}` 5px (star gap) · `{spacing.sm}` 16px (reviews gap) · `{spacing.md}` 18px (nav-pill link gap) · `{spacing.lg}` 26px (subtitle top) · `{spacing.cta}` 36px (CTA top).
- **Navbar rail**: `{spacing.nav-y}` 30px vertical · `{spacing.nav-x}` 52px horizontal padding (drops to 22px / 24px ≤860px) — the wordmark and actions align to this rail.
- **Nav pill padding**: `{spacing.pill-y}` 13px vertical · `{spacing.pill-x}` 28px horizontal — a snug capsule.
- **CTA padding**: `{spacing.cta-y}` 16px vertical · `{spacing.cta-x}` 34px horizontal.
- **Hero content** floats down from `14vh` top padding (`18vh` ≤860px) with 24px side padding; the **reviews row** pins to the bottom with `padding: 0 24px 44px`.

### Grid & Container

- **Single-screen hero**: `.hero` is a `min-height: 100vh` flex column with `overflow: hidden` — navbar on top, hero content below it, reviews pushed to the bottom edge via `margin-top: auto`. No scroll on the page.
- The navbar is a `justify-content: space-between` row: wordmark hard-left, EN/search actions hard-right, and the `{components.nav-pill}` **absolutely centered** (`left:50%; transform:translateX(-50%)`) so it stays optically centered regardless of the side clusters' widths.
- The hero content column is `text-align: center`; the **subtitle caps at `max-width: 480px`** (centered) for a clean reading measure. The headline scales with the viewport, not a fixed column.
- The reviews row is a centered flex group (`gap: 16px`) holding label · stars · label on one line, wrapping only at ≤520px.

### Whitespace Philosophy

Whitespace here is the dark itself. The three bands — nav, headline cluster, reviews — are deliberately spread to the top, optical center, and bottom of one viewport, with the near-black video field carrying everything between them. That negative darkness is what lets the single warm headline and the one Ember accent register; fill the middle and both become noise. The `14vh` top offset and the `margin-top:auto` bottom pin are the whole rhythm. Density is a refusal, not an oversight.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow, no border | Default — all type sits directly on the footage |
| 1 (wash) | `{components.hero-overlay}` radial vignette + vertical linear gradient | Over the video, beneath all content, for legibility only |
| 2 (glass) | `{colors.pill-bg}` fill + `{colors.pill-border}` 1px hairline + `blur(14px)` backdrop | The center `{components.nav-pill}` |
| 3 (CTA shadow) | `0 10px 40px rgba(0,0,0,0.35)` → `0 16px 50px rgba(0,0,0,0.45)` on hover | The single `{components.cta-pill}` |

SEATHE's depth is carried by exactly three devices: (1) the dark legibility wash that separates type from footage, (2) the frosted-glass nav pill, and (3) the CTA's dark drop shadow that deepens and lifts on hover. There is no card elevation and no shadow anywhere else — depth comes from the video and the wash, not from stacked panels.

### Decorative Depth

- **The looping background video** is the entire decorative field — a full-bleed `object-fit: cover` underwater clip behind everything, the page's one piece of ambient motion.
- **The two-layer wash** (`{components.hero-overlay}`) is the only gradient on the page, and it is functional, not decorative — a radial vignette pulling the edges down plus a vertical Abyss gradient (0.55 → 0.15 → 0.35) anchoring top and bottom so the type reads.
- **The glass nav pill** is the one frosted surface; **the CTA shadow** is the one drop shadow. No spotlight cards, no neon glow, no grain, no atmospheric color.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.pill}` | 999px | The `{components.nav-pill}`, the `{components.cta-pill}`, and the 3px nav dots (`border-radius:50%`) |

The geometry is almost entirely pills and circles. There is no rectangle-with-soft-corners on the page — the two built surfaces (nav pill, CTA) are full capsules at 999px, the nav separators are 3px circles, and the stars are their own SVG silhouette. There is no card radius scale because there are no cards.

### Photography & Illustration Geometry

- The only "photography" is the **full-bleed background video** — `position:absolute; inset:0; width/height:100%; object-fit:cover; object-position:center`, filling the hero edge-to-edge with no bars at every breakpoint. The brief requires the source be pre-cropped to its visible content (no baked-in letterbox/pillarbox black bars), since `cover` cannot remove edges already in the file.
- **Icons are three inline SVGs**, no icon library: a chevron-down in the EN button (`viewBox 0 0 11 7`, stroked), a search glyph (`viewBox 0 0 18 18`, stroked circle + handle), and the star (`viewBox 0 0 24 24`, filled). Stroke icons inherit `currentColor` (Ink-soft → Ink on hover); only the star carries `{colors.ember}`.
- The five stars are identical 22px filled silhouettes in a `gap:5px` row.

## Components

### Buttons

> Measured from the live build: there is exactly one filled button on the page. The warm-white CTA fills it; nothing else is filled.

**`cta-pill`** ({components.cta-pill}) — The single primary CTA ("See How It Works"). The only filled button on the page.
- Background `{colors.cta-bg}` (#f6f4ef), text `{colors.cta-ink}` (#15171a), Inter weight 500 at 15px, padding 16px vertical · 34px horizontal, rounded `{rounded.pill}` (999px), no border. `box-shadow: 0 10px 40px rgba(0,0,0,0.35)`. Hover lifts `translateY(-2px)` and deepens the shadow to `0 16px 50px rgba(0,0,0,0.45)` over 0.2s. Note: in `styles.css` the fill/text are written as inline hex (#f6f4ef / #15171a); the prompt names them `--cta-bg` / `--cta-ink` — same values either way.

**Action buttons (EN / search)** — ghost / secondary, text-and-icon only.
- Transparent (`background:none; border:none`), Inter 14px, `color: var(--ink-soft)`, `cursor:pointer`. EN carries the chevron SVG (gap 6px); search carries the search SVG with `aria-label="Search"`. Both resolve to full `{colors.ink}` on hover over 0.2s. The 5%-of-the-page restraint that lets the filled CTA stay singular.

### Navigation

**`top-nav`** — A full-bleed, **non-sticky** navbar (`position:relative; z-index:3`), `justify-content:space-between`, padding 30px · 52px.
- Left: the `{components.logo}` wordmark. Right: the EN + search action group (`gap:22px`, color Ink-soft). Center: the absolutely-positioned `{components.nav-pill}`.

**`nav-pill`** ({components.nav-pill}) — The centered glass capsule, the navbar's signature surface.
- `position:absolute; left:50%; transform:translateX(-50%)`, `display:flex; align-items:center; gap:18px; padding:13px 28px`. Background `{colors.pill-bg}`, `1px solid {colors.pill-border}`, `border-radius:999px`, `backdrop-filter:blur(14px)`. Holds four links — `Home` · `How It Works` · `Technology` · `Use Cases` — each Inter 14.5px, `{colors.ink-soft}`, 0.01em tracking, resolving to `{colors.ink}` on hover over 0.2s. Links are split by 3px `{colors.ink-faint}` dot circles. The whole pill is **hidden** (`display:none`) at ≤860px.

**`logo`** ({components.logo}) — The wordmark. Top-left of the nav.
- Text `SEATHE`, Inter weight 500, 18px, `letter-spacing:0.34em`, `{colors.ink}`, no underline. No icon mark — the spaced caps are the logo. Shrinks to 16px / 0.28em tracking at ≤520px.

### Reviews (social proof)

**`reviews`** — A bottom-pinned, centered row (`margin-top:auto`, `gap:16px`, `padding:0 24px 44px`), the page's only social-proof element.
- `Reviews 1,042` label (Inter 500, 14px, `{colors.ink}`) · the stars group · `Excellent Score` label (Inter 500, 14px, `{colors.ink}`). The stars wrapper carries `aria-label="Rated 4.8 out of 5"`. Wraps with `flex-wrap` and a 10px/14px gap at ≤520px.

**`star`** ({components.star}) — The page's single chromatic moment.
- Five identical 22px SVG stars (`viewBox 0 0 24 24`) in a `gap:5px` row, `fill: var(--star)` (`{colors.ember}` #e8893c). The only Ember placement on the page — never recolor or add a sixth context for the orange.

### Cards & Containers

None. There are no cards, panels, or content containers on the page — the hero is type and two pills directly over footage. Any later-page card would have to be designed from scratch in the same dark, glass-or-flat language (see Known Gaps).

### Inputs & Forms

None on the single hero. The `search` action button is decorative — it has no attached input or live search. Input, focus, and validation styling would have to be introduced for any later page in the same dark language — Abyss field, Inter 400, a 10%-white hairline like `{colors.pill-border}`, Ink-soft placeholder (see Known Gaps).

### Footer

Not present on the single hero; the reviews row is the page's bottom band. A later-page footer would inherit the dark stage: `{colors.void}` fill, Inter links in `{colors.ink-soft}`, the `{components.logo}` wordmark treatment, Ember reserved (still stars-only).

## Do's and Don'ts

### Do

- Reserve `{colors.abyss}` (#050607) as the hero base over a `{colors.void}` (#000) body — near-black water, never a lighter panel.
- Ration `{colors.ember}` (#e8893c) to exactly the five review stars — it is the page's only chromatic accent.
- Set the headline in Playfair Display weight 500, two lines, `clamp(40px,6.6vw,90px)` on a 1.08 line-height.
- Derive every quiet text tone by lowering `{colors.ink}` opacity — Ink-soft 66%, Ink-faint 45% — not by inventing new greys.
- Keep the `{components.hero-overlay}` two-layer wash as the only gradient, and only for legibility over the video.
- Hold the nav pill as graphite glass (`{colors.pill-bg}` + `{colors.pill-border}` + blur) and the CTA as the one warm-white filled pill.
- Let the looping video be the only motion, with just the two CSS hover transitions (nav-link color, CTA lift).

### Don't

- Don't use blue, indigo, purple, or neon anywhere — the brief forbids the entire clinical-vitals palette.
- Don't spread `{colors.ember}` beyond the stars onto headlines, the CTA, links, or a hover — the rationing is the brand.
- Don't add a heart-rate graph, data HUD, vitals readout, or pulsing meter — SEATHE refuses the health-tech cliché.
- Don't introduce a card field, surface ladder, or second built surface beyond the nav pill and CTA.
- Don't add entrance fades, scroll reveals, blur-in, counters, or an animation library — the hero is static, all content on first paint.
- Don't ship a background video with baked-in black bars — crop the source to visible content (`object-fit:cover` can't remove them).
- Don't use `#ffffff` for text — the warm off-white `{colors.ink}` (#f1efe9) is the white.
- Don't swap the three inline SVGs for an icon library, or add a third font family.
- Don't make the nav pill or CTA a rectangle — both are 999px capsules.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Phone | ≤520px | Wordmark drops to 16px / 0.28em tracking; subtitle to 15.5px; reviews row wraps (`flex-wrap`, 10px/14px gap); headline near the `clamp` floor (40px) |
| Tablet / small | ≤860px | Center `{components.nav-pill}` is hidden (`display:none`); navbar padding tightens to 22px / 24px; hero content top-padding grows to 18vh; headline line 2 relaxes to `white-space:normal` (can wrap) |
| Desktop | 861px+ | Full layout — center pill visible, navbar at 30px / 52px, headline scaling by `6.6vw` toward the 90px cap |

### Touch Targets

- The `{components.cta-pill}` padding (16px × 34px) clears the ≥44px minimum tap target.
- On ≤860px the nav pill is removed entirely rather than shrunk, so its four links never become sub-target taps; primary navigation collapses to the wordmark + action buttons.
- The EN / search buttons are icon-and-text with comfortable hit areas; no nav menu sheet is implemented on the single hero (see Known Gaps).

### Collapsing Strategy

- **The page never scrolls** — it is one viewport at every width; only the headline `clamp`, the hero top-padding, and the type sizes flex.
- **Nav**: the center glass pill is the first thing to go (≤860px); the wordmark and right actions hold on one row at every width.
- **Display type**: `clamp(40px, 6.6vw, 90px)` does all the headline scaling — never a fixed display size — and line 2 unlocks to wrap below 860px.

### Image Behavior

- The background video holds `object-fit: cover` and `object-position: center` at every breakpoint, filling the hero with no bars; it is `autoplay muted loop playsInline preload="auto"`.
- The source must be pre-cropped (shipped asset `1620×1080`) — CSS `cover` cannot strip black bars baked into the file.
- No `prefers-reduced-motion` guard is present in the build; since the only motion is an ambient looping video and CSS hover, a reduced-motion path (pausing the loop / showing a poster frame) would have to be added (see Known Gaps).

## Iteration Guide

1. New page (How It Works, Technology, Use Cases)? Start from `{colors.void}` / `{colors.abyss}` + a Playfair headline + Inter 400/500 body. The dark stage is the brand.
2. Keep the Ember rule absolute — a new accent need is answered by the stars staying the only orange, or by nothing; never a new color and never blue/indigo/purple/neon.
3. Reference everything by token name — `{colors.x}`, `{rounded.x}`, `{typography.x}`, `{components.x}` — so a value change cascades.
4. Decide first which one device carries any new depth: the wash, the glass, or the CTA shadow. A new surface that "needs depth" gets glass or a single dark shadow, never a stacked card stack.
5. Display vs body stays a hard line: Playfair 500 for headlines; Inter 400/500 for everything else. No third family, no bold, no light.
6. Treat Ember as scarce — the five stars are the budget. Earning a sixth placement requires a documented decision.
7. Keep the static rule — new content renders on first paint. A scroll reveal or entrance animation requires its own governing decision, not a one-off.

## Known Gaps

- Beyond the single hero, later-page layouts (How It Works, Technology, Use Cases) are not specified — design them in the same dark cinematic language: Abyss/Void canvas, Playfair heads, Inter 400/500 body, Ember-only-on-stars, glass-or-flat surfaces.
- The build is shipped as **vanilla HTML + CSS** (`index.html` + `styles.css`); the build prompt targets a React 18 + TypeScript + Vite + Tailwind 3 reproduction using the identical class names, custom properties, and values. Class names and tokens map 1:1 across both; no JSX-only behavior exists to document.
- Form / input and validation states (error, success, disabled, focus) are not surfaced; the `search` button is decorative with no attached input. Semantic colors and input styling would have to be introduced.
- Mobile navigation has no menu sheet — the center pill is simply hidden at ≤860px, leaving the wordmark + action buttons. A real nav drawer/sheet is not designed.
- No `prefers-reduced-motion` handling exists for the looping video; a poster-frame / pause fallback should be added for accessibility.
- A light counterpart is intentionally absent; the system is dark-only. If ever needed it requires its own governing decision, not a recolor of Void → off-white.
