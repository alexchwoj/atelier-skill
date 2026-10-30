---
version: "1"
name: "Design System Inspired by 1Brain"
description: "1Brain's canvas is pure black #000000 with pure white #ffffff type — no hue exists anywhere in the system. The single chromatic decision is the refusal of color: every surface, accent, and hairline is white at a graded opacity over black. The signature surface is a fixed fullscreen video whose currentTime is scrubbed by scroll (never autoplayed), with frosted liquid-glass cards floating over it; the page rhythm is a cinematic dark stage — Header → Hero → Highlight → Contact — where scroll-scrubbed video, character-by-character text-scramble headings, and backdrop-blur glass are the only spectacle."
colors:
  void: "#000000"            # canvas / page background — pure black, the only solid
  pure: "#ffffff"            # primary text, glass borders, button fill — pure white
  ink-on-light: "#000000"    # text on the white pill/CTA — black on white
  btn-hover: "#e2e2e6"       # the ONE near-white hover tint — white button on hover
  white-75: "rgba(255,255,255,0.75)"   # card body copy
  white-70: "rgba(255,255,255,0.70)"   # contact paragraph, social/email links
  white-60: "rgba(255,255,255,0.60)"   # hero standfirst, eyebrow labels
  white-55: "rgba(255,255,255,0.55)"   # (reserved muted text rung)
  white-40: "rgba(255,255,255,0.40)"   # contact detail labels (faintest legible text)
  glass-fill: "rgba(255,255,255,0.08)" # liquid-glass panel fill
  white-20: "rgba(255,255,255,0.20)"   # number-badge hairline
  white-15: "rgba(255,255,255,0.15)"   # glass border, contact divider, header pill fill
  white-10: "rgba(255,255,255,0.10)"   # number-badge fill, dot-grid (via opacity-5)
  sheen: "rgba(255,255,255,0.22)"      # inset top highlight on glass (specular)
typography:
  display: { fontFamily: "Outfit, sans-serif", weights: "300", role: "hero headings — font-light, 50→100px, tracking -0.03em" }
  sans:    { fontFamily: "Outfit, sans-serif", weights: "300-800", role: "every word on the page — Outfit is the ONLY font" }
  serif:   { fontFamily: "Outfit, sans-serif", weights: "—", role: "alias remapped to Outfit (no serif exists)" }
  mono:    { fontFamily: "Outfit, sans-serif", weights: "—", role: "alias remapped to Outfit (no mono exists; scramble glyphs are still Outfit)" }
spacing:
  base: "4px"
  xs: "12px"                 # logo-pill gap (gap-2 / gap-2.5)
  sm: "20px"                 # header pill px-5, header height edge
  md: "28px"                 # card padding (p-7), glass radius
  lg: "32px"                 # card padding (sm:p-8), highlight section top
  xl: "64px"                 # contact panel horizontal padding (sm:px-16)
  section: "96px"            # section vertical rhythm (pt-24/pt-32, pb-28/pb-36)
rounded:
  badge: "16px"             # number-badge (rounded-2xl), logo pill (rounded-[14px])
  glass: "28px"             # the liquid-glass panel (rounded-[28px])
  pill: "9999px"            # the white CTA + email button (rounded-full)
shadow:
  glass: "0 8px 40px rgba(0,0,0,0.35), inset 0 1px 0 0 rgba(255,255,255,0.22) — black drop + white inset sheen, glass panels only"
components:
  glass-panel: "Liquid-glass surface — bg {colors.glass-fill}, border {colors.white-15}, rounded {rounded.glass}, backdrop-blur-2xl + saturate-150, {shadow.glass}, top sheen + corner glow"
  btn-white: "The only filled button — bg {colors.pure}, black text Outfit 600, h-12 px-7, rounded {rounded.pill}; hover {colors.btn-hover} + scale 1.03 spring; label runs ScrambleText decode"
  logo-pill: "Header brand pill — bg {colors.white-15}, backdrop-blur-md, rounded {rounded.badge}, brain SVG + '1Brain' Outfit 600; hover white/25 + scale 1.02"
  number-badge: "Card index — 44px square, border {colors.white-20}, bg {colors.white-10}, rounded {rounded.badge}, '01/02/03' Outfit 600"
  scramble-in: "Scroll-aware heading scramble — characters decode L→R over 900ms in, 700ms out, re-runs on scroll-up; Outfit glyph pool"
  scramble-text: "Hover decode — 25ms/frame L→R lock, char i settles at frame i*4; on CTA labels"
  video-scrub: "Fixed fullscreen video, currentTime driven by scroll (not autoplay), LERP-smoothed single-seek, blur 0→55px + scale 1.03→1.11"
  progressive-blur: "The ONLY frame darkener — fixed bottom 150px edge, backdrop-blur-4px masked upward + transparent→black gradient, fades out past hero"
---

# Design System Inspired by 1Brain

## Overview

1Brain's stage is the darkest surface in this collection — `{colors.void}` is `#000000`, true black, the only solid color the system owns. Onto that black sits pure white `{colors.pure}` (`#ffffff`) type and a single structural device: white at a graded opacity. Every "color" beyond black and white is white dialled down — `white/75` and `white/70` for body copy, `white/60` for standfirst and eyebrows, `white/40` for the faintest detail labels, and `white/15`–`white/10` for hairlines and fills. There is **no hue anywhere** — no blue "tech" accent, no neon gradient, no warm cast. The chromatic decision is the refusal of chroma.

This is the governing decision. **Most software / dev-studio sites lean on neon gradients, code screenshots, terminal greens, and a saturated "tech" accent to signal engineering — 1Brain refuses every hue, holding a pure black-and-white cinematic stage where a scroll-scrubbed background video, character-scramble type, and frosted liquid-glass are the only spectacle.** The most load-bearing rule sits inside `{components.video-scrub}`: there is deliberately **NO dark overlay on the video**. The video is never tinted, scrimmed, or dimmed by a black layer. The single element permitted to darken the frame is `{components.progressive-blur}`, and it touches only the bottom 150px edge.

Type runs **Outfit and nothing else**. The CSS overrides every Tailwind font alias — `--font-sans`, `--font-serif`, `--font-inter`, `--font-mono` all map to `"Outfit, sans-serif"` — so "serif" and "mono" are aliases that still resolve to Outfit; there is one typeface on the page. The hero headings sit at `font-light` weight 300, scaling `50px → 100px` across breakpoints on a tight `-0.03em` tracking and `0.95` line-height. Weights climb to 600 on the brand/CTA and 800 is available in the loaded set, but the display voice is deliberately light.

The page rhythm is a **scrolling cinematic stack** over a fixed video. A fixed fullscreen `<video>` sits at `z-[1]` (lowest), the Header pill row at `z-50` (topmost), the content `<main>` at `z-10` between them, and the bottom-edge progressive blur at `z-30`. Scroll scrubs the video's `currentTime` frame-by-frame (LERP-smoothed, single-seek), blurs and scales it, while the hero scramble-headings decode in and the liquid-glass Highlight and Contact panels slide up over the still-running video. The sections are: **Header → Hero (Software / Engineered / One / Brain) → Highlight (3 glass cards) → Contact (one glass panel)**.

**Key Characteristics:**
- **Pure-monochrome, zero hue** — `{colors.void}` `#000000` canvas, `{colors.pure}` `#ffffff` type, everything else is white at a graded opacity. No accent color exists.
- **Outfit is the only font** — every Tailwind family alias (sans/serif/inter/mono) is remapped to `"Outfit, sans-serif"`; weights 300–800 are loaded, the display sits at 300.
- **Scroll-scrubbed video** (`{components.video-scrub}`) — `currentTime` driven by `window.scrollY`, never autoplayed; LERP `0.12` smoothing + single in-flight seek; blur curves `0→5→55px`, scale `1.03→1.11`.
- **NO dark overlay on the video** — the video is never scrimmed; the only frame darkener is `{components.progressive-blur}` on the bottom 150px edge.
- **Character-scramble type** — `{components.scramble-in}` decodes hero headings L→R (900ms in / 700ms out, re-runs on scroll), `{components.scramble-text}` decodes CTA labels on hover.
- **Liquid-glass panels** (`{components.glass-panel}`) — `bg-white/[0.08]`, `border-white/15`, `backdrop-blur-2xl backdrop-saturate-150`, `{rounded.glass}` 28px, top sheen + corner glow.
- **The opacity ladder is the palette** — `white/75 · /70 · /60 · /55 · /40` for text, `white/20 · /15 · /10` for hairlines and fills, `white/[0.08]` for glass.
- **Custom brain SVG logo** — two mirrored hemispheres drawn as `currentColor` strokes, inheriting white.
- No hue, no gradient page background, no autoplay video, no neon accent, no second typeface, no dark overlay tint, no light-mode counterpart.

## Colors

> Source pages: the single scrolling page — the fixed scroll-scrubbed video bed, the Header pill row, the Hero scramble masthead, the 3-card Highlight band, and the Contact glass panel. The system is one black stage; there are no other live surfaces.

### Brand & Accent
- **The accent is the absence of one.** 1Brain has **no chromatic accent**. Where a dev-studio would place a saturated brand color, 1Brain places pure white (`{colors.pure}`) — the white CTA fill, the white logo pill text, the white headings. The "accent move" is the white-on-black contrast itself, not a hue.
- **Btn-hover** (`{colors.btn-hover}` `#e2e2e6`): the one near-white tint in the entire system — the white CTA/email button shifts to `#e2e2e6` on hover. It is a dimmed white, not a color.

### Surface
- **Void** (`{colors.void}` `#000000`): the page background — true black, set on `html, body` and on the video wrapper (`bg-black`), visible only before the first video frame paints. The only solid fill; there is no surface ladder of greys.
- **Glass-fill** (`{colors.glass-fill}` `rgba(255,255,255,0.08)`): the liquid-glass panel fill — a barely-there translucent white over the video, never a solid card. Combined with `backdrop-blur-2xl` it is the only "surface" that lifts off the black.
- The header logo pill sits on `{colors.white-15}` (`rgba(255,255,255,0.15)`) with `backdrop-blur-md`; the number badges on `{colors.white-10}`.

### Text
- **Pure** (`{colors.pure}` `#ffffff`): primary type — the hero headings, card titles, contact heading, the brand wordmark, detail values. Full-strength white, no tint.
- **White/75** (`{colors.white-75}`): card body copy in the Highlight band.
- **White/70** (`{colors.white-70}`): the contact paragraph, the email link, social links.
- **White/60** (`{colors.white-60}`): the hero standfirst paragraph and the uppercase eyebrow labels ("Why 1Brain", "Get in touch").
- **White/40** (`{colors.white-40}`): the contact detail labels ("Email", "Studio", "Social") — the faintest legible text on the page.
- **Ink-on-light** (`{colors.ink-on-light}` `#000000`): black text, used only inside the white CTA pill and the white email button (black on white).

### Hairline & Fill
- **White/20** (`{colors.white-20}`): the number-badge border.
- **White/15** (`{colors.white-15}`): the glass-panel border, the contact divider rule (`border-t`), and the header pill fill — the primary structural line.
- **White/10** (`{colors.white-10}`): the number-badge fill, and (via `opacity-[0.05]` on a white dot) the ambient dot-grid in the hero.
- **Sheen** (`{colors.sheen}` `rgba(255,255,255,0.22)`): the `inset 0 1px 0 0` top highlight baked into `{shadow.glass}`, plus the `from-white/15` top sheen overlay — the specular "liquid" cue.

### Semantic
None on the marketing surface. No success / error / warning colors are present — there are no forms beyond `mailto:` links, so no validation states exist. The only color-shift events are hover tints (`#e2e2e6` on buttons, `white/25` on the logo pill) and the `::selection` rule — `rgba(255,255,255,0.85)` background with `#000000` text (the page's white/black inverted). Any future form would have to introduce semantic states in this same monochrome language (see Known Gaps).

## Typography

### Font Family

- **Outfit** — the only typeface. Loaded from Google Fonts at weights `300;400;500;600;700;800` with `display=swap`. The fallback stack is `"Outfit, sans-serif"`. Critically, the `@theme` block remaps **every** Tailwind font variable to Outfit: `--font-sans`, `--font-serif`, `--font-inter`, and `--font-mono` are all `"Outfit, sans-serif"`. So even a `font-serif` or `font-mono` utility resolves to Outfit — the system is single-typeface by force.
- **"Serif" / "Mono"** — not real families. They exist only as remapped aliases pointing at Outfit. There is no serif and no monospace face on the page. (The scramble glyph pool is rendered in Outfit too — its "code" texture comes from the symbol characters, not a mono font.)

The page treats Outfit as one continuous voice across the whole weight range: `font-light` (300) for the cinematic display, `font-medium` (500) for card titles, `font-semibold` (600) for the brand and CTAs. There is no second voice to contrast against — hierarchy is carried by size, weight, and the opacity ladder alone.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display}` (hero) | 50→70→85→100px | 300 | 0.95 | -0.03em | Hero headings: Software / Engineered / One / Brain (Outfit, scramble-in) |
| section head | 32→44→56px | 300 | 1.05 | -0.02em | Highlight + Contact headings (Outfit font-light) |
| card title | 19px | 500 | normal | 0 | Highlight card titles (Outfit font-medium) |
| contact link | 16px | 400 | 1.625 | 0 | `hello@1brain.dev` ghost link |
| standfirst | 14→15px | 400 | 1.625 | 0 | Hero description paragraph (white/60) |
| body | 14px | 400 | 1.625 | 0 | Card body copy (white/75) |
| contact body | 15px | 400 | 1.625 | 0 | Contact paragraph (white/70) |
| brand / CTA | 13→16px | 600 | normal | -0.01em (tight) | Wordmark, Contact button, email button label |
| detail value | 15px | 400 | normal | 0 | Contact detail values (white, e.g. "Remote · Worldwide") |
| number badge | 14px | 600 | normal | 0 | "01 / 02 / 03" card index |
| eyebrow | 12px | 400 | normal | 0.25em (uppercase) | "Why 1Brain", "Get in touch" (white/60) |
| detail label | 12px | 400 | normal | 0.18em (uppercase) | "Email / Studio / Social" (white/40) |

### Principles

- **The display is light.** Hero headings sit at weight 300 — the cinematic move is a large, thin, tightly-tracked Outfit, never a heavy "tech" bold.
- **Negative tracking on the display** (`-0.03em` on the hero, `-0.02em` on section heads); the brand and CTA tighten too (`tracking-tight`). Only the eyebrows and detail labels open up (`+0.25em` / `+0.18em` uppercase) to read as taxonomy.
- **Weight maps to role, not to emphasis** — 300 display, 400 body, 500 card titles, 600 brand/CTA. 700–800 are loaded but unused on the live page; reserve them, don't reach for them.
- **Hierarchy is size + opacity, never a second font.** A title is white at a larger size; its body is `white/75` at 14px. The contrast that a second typeface would carry is carried by the opacity ladder instead.
- **The scramble glyphs are still Outfit.** The "terminal decode" texture comes from the symbol pool (`!@#$%^&*…`), not from a monospace switch mid-word.

### Note on Font Substitutes

1Brain uses no licensed typeface. **Outfit** is open-licensed on Google Fonts — load it directly, no substitution required. Because the system forces every font alias to Outfit, there is nothing else to substitute. If Outfit were ever unavailable, the documented fallback is the system `sans-serif`; accept a less geometric display. Do **not** introduce a serif or a monospace to "differentiate" — the single-typeface rule is the system of record, and the aliases are deliberately collapsed.

## Layout

### Spacing System

- **Base unit**: 4px (Tailwind scale).
- **Tokens (front matter)**: `{spacing.xs}` 12px · `{spacing.sm}` 20px · `{spacing.md}` 28px · `{spacing.lg}` 32px · `{spacing.xl}` 64px · `{spacing.section}` 96px.
- Page rail: every band is `mx-auto max-w-7xl` (1280px) with `px-4` (16px) mobile → `sm:px-8` (32px) side padding. The Header matches the same `px-4 sm:px-8` rail.
- Hero: `h-screen`, `px-4 sm:px-8`, `pt-20` (80px) top / `pb-36` (144px) bottom; the inner column is `min-h-[80vh]` flex spreading the top heading and bottom row to the screen edges.
- Highlight: `pt-24 sm:pt-32` (96→128px) top, `pb-12` bottom; the 3-card grid sits `mt-14` (56px) below the heading with `gap-6` (24px).
- Contact: `pt-12` top, `pb-28 sm:pb-36` (112→144px) bottom; the glass panel pads `px-7 py-12` mobile → `sm:px-16 sm:py-20` (64px / 80px).
- Card padding: `p-7` (28px) → `sm:p-8` (32px) inside each glass card.

### Grid & Container

- **Fixed video bed**: a `fixed inset-0 z-[1]` wrapper holds an `object-cover` fullscreen video; it never scrolls and underlies every section.
- **Hero**: a `max-w-7xl` flex column spreading a 2-col grid top (left heading / empty right) and a 2-col grid bottom (left standfirst / right-aligned heading). Collapses to a single stacked column below `md`.
- **Highlight**: `grid-cols-1 md:grid-cols-3` — three equal glass cards at `gap-6`.
- **Contact**: a single full-width glass panel inside the `max-w-7xl` rail, with an internal `grid-cols-1 sm:grid-cols-3` detail row under a `white/15` divider.
- **Z-index stack** (the spine of the layout): video `z-[1]` → content `<main> z-10` (sections also `z-10`) → progressive blur `z-30` → header `z-50`.

### Whitespace Philosophy

Whitespace is the black itself. The hero is a full `h-screen` with the headings pushed to opposite corners of an `80vh` column, the video breathing in the gap between them. The glass panels float on generous black margins (`pt-24`, `pb-36`), never crowding the frame, so the backdrop-blur reads as a lens over the moving video rather than a stacked card UI. Density is a refusal — the page is mostly black, and that emptiness is what lets the scrambling type and the scrubbing video register.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No border, no shadow, sits on `{colors.void}` | Default for all hero type and the dot grid |
| 1 (hairline) | 1px `{colors.white-15}` / `{colors.white-20}` rule | Glass border, contact divider, number-badge border |
| 2 (glass lift) | `backdrop-blur-2xl saturate-150` + `{colors.glass-fill}` + `{shadow.glass}` | The `{components.glass-panel}` — Highlight cards + Contact |
| 3 (frame darken) | `{components.progressive-blur}` bottom 150px edge | The single darkening device, hero only |
| 4 (video transform) | Scroll-driven `blur()` 0→55px + `scale()` 1.03→1.11 | The scrubbed video bed |

1Brain's depth comes from exactly two devices: (1) the frosted glass that lenses the video behind each panel, and (2) the scroll-driven blur/scale on the video itself. Drop shadows exist only inside the glass recipe (`{shadow.glass}`) — a black `0 8px 40px` plus a white `inset 0 1px 0` sheen. There is no other `box-shadow` on the page. Crucially, **nothing scrims the video** — depth never comes from a dark overlay, only from blur, glass, and the bottom-edge progressive blur.

### Decorative Depth

- **The scroll-scrubbed video** is the primary decorative depth — a fixed fullscreen bed whose frame, blur, and scale all answer to scroll position.
- **Liquid-glass panels** carry mid-ground depth — `backdrop-blur-2xl`, a top specular sheen (`from-white/15`), and a `-left-10 -top-10` radial corner glow (`rgba(255,255,255,0.15)`).
- **The ambient dot grid** — a `radial-gradient(#ffffff 1px, transparent 1px)` at `opacity-[0.05]`, `24px` cells, `pointer-events-none` over the hero — a faint texture, never a blocker.
- **No atmospheric gradient page background, no glow accents, no neon.** The page is flat black behind the glass; the only "glow" is the white corner radial inside each panel.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.badge}` | 16px | Number badge (`rounded-2xl`) and the header logo pill (`rounded-[14px]`, 14px) |
| `{rounded.glass}` | 28px | The `{components.glass-panel}` — every glass card and the contact panel |
| `{rounded.pill}` | 9999px | The white CTA and the email button (`rounded-full`) |

The system is soft-cornered throughout: 28px on the large glass surfaces, ~14–16px on the small pills and badges, and full-pill on the buttons. There are no sharp 0-radius corners and no `{rounded.glass}`-sized radius on anything but glass.

### Photography & Illustration Geometry

- **The only "image" is the background video** — fullscreen `object-cover`, no radius (it bleeds to every edge), scrubbed by scroll. It must be **scroll-scrubbed-encoded**: short, keyframe-dense, and seekable, because `currentTime` is set per frame (see Known Gaps).
- **The brain logo** is a 24×24 SVG of two mirrored hemispheres drawn as `currentColor` strokes (`stroke-width 2`, round caps/joins) — it inherits white from its parent and scales `h-4 w-4` → `sm:h-5 w-5`. No fill, no color, a line mark.
- **The dot grid** is a CSS radial-gradient texture, not an asset.
- There are no photographs, avatars, or screenshots anywhere — the video is the entire image budget.

## Components

### Buttons

> Measured from the live build: there are two pill buttons, both white-on-black with a scramble label. The white fill is the closest thing to an accent.

**`btn-white`** (`{components.btn-white}`) — The primary CTA. Two instances: the Header "Contact" button and the Contact "Start a project" button.
- Background `{colors.pure}` (`#ffffff`), text `{colors.ink-on-light}` (`#000000`), Outfit weight 600 `tracking-tight`, height `h-9` → `sm:h-12`, horizontal `px-5` → `sm:px-7`, rounded `{rounded.pill}` (full). No border. The label is a `{components.scramble-text}` that decodes on hover. Hover: `scale 1.03` + background `#e2e2e6` on a `spring` (`stiffness 400, damping 28`); tap `scale 0.97`.

**email button** — the second `btn-white` instance in Contact, an `<a href="mailto:>` at `h-12 px-7`, identical recipe, label "Start a project".

**ghost email link** — `hello@1brain.dev` at 16px `white/70`, `underline-offset-4`, hover → `white` + underline. The quiet secondary action beside the filled CTA.

### Cards & Containers

**`glass-panel`** (`{components.glass-panel}`) — The signature surface. Used for all three Highlight cards and the Contact panel.
- `bg-white/[0.08]` (`{colors.glass-fill}`), `border border-white/15` (`{colors.white-15}`), rounded `{rounded.glass}` (28px), `backdrop-blur-2xl backdrop-saturate-150`, `{shadow.glass}` (black `0 8px 40px` drop + white `inset 0 1px 0` sheen). `overflow-hidden`. Two decorative children: a top specular sheen (`absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/15 to-transparent`) and a `-left-10 -top-10 h-40 w-40` radial corner glow (`rgba(255,255,255,0.15) → transparent 70%`). Content lives in a `relative` wrapper above both.

**`number-badge`** (`{components.number-badge}`) — The card index inside each Highlight glass card.
- A `44px` (`h-11 w-11`) square, `border border-white/20`, `bg-white/10`, rounded `{rounded.badge}` (`rounded-2xl`), centering "01 / 02 / 03" in Outfit 600 14px white. The card title sits `mt-6` below it, the body `mt-3` under that at `white/75`.

### Inputs & Forms

Not present. There are no text inputs, selects, or form fields — every "action" is a `mailto:` link or a scroll-to-anchor. Focus and validation styling would have to be introduced for a future contact form in the same monochrome glass language: black field, `white/15` hairline, white text, white focus ring (see Known Gaps).

### Navigation

**`top-nav` / header** — A `fixed inset-x-0 top-0 z-50` bar, `h-20`, `px-4 sm:px-8`, fading `opacity 0→1` over 0.8s once the video entrance completes. **No background bar** — only the two pills sit on it, floating over the video.
- **Left**: the `{components.logo-pill}` — `bg-white/15`, `backdrop-blur-md`, rounded `{rounded.badge}` (`rounded-[14px]`), holding the brain `Logo` SVG + "1Brain" in Outfit 600. Hover: `scale 1.02` + `backgroundColor rgba(255,255,255,0.25)` spring.
- **Right**: the `btn-white` "Contact" button, which scroll-jumps to `#contact` via Lenis (`duration 1.4`) or native `scrollIntoView`.

### Footer / Contact

**`contact`** — There is no separate footer; the Contact glass panel closes the page and absorbs the footer role.
- One `{components.glass-panel}` at `px-7 py-12 sm:px-16 sm:py-20` holding: an eyebrow ("Get in touch", `white/60` `+0.25em`), a `font-light` heading, a `white/70` paragraph, the `btn-white` CTA + ghost email link, then a `white/15` divider (`border-t pt-8`) over a `grid-cols-1 sm:grid-cols-3` row of details — Email (`hello@1brain.dev`), Studio ("Remote · Worldwide"), and Social (GitHub / X / LinkedIn). The social links are functional `<a>` placeholders (`href="#"`) styled in white with a `hover:text-white/60` shift.

### Signature Systems

**`video-scrub`** (`{components.video-scrub}`) — The fixed fullscreen scroll-scrubbed video. The protagonist of the page.
- A `fixed inset-0 z-[1] bg-black` wrapper holds an `object-cover` `<video>` (`loop muted playsInline preload="auto"`) that is **never autoplayed**. A rAF loop reads `window.scrollY` against `window.innerHeight * 1.5` to get progress `0→1`, sets the target `currentTime = progress * duration`, LERP-smooths it (`smoothed += (target - smoothed) * 0.12`), and seeks with a single in-flight guard (`!isSeeking && !video.seeking`, queueing the next target) so overlapping seeks never produce black frames. Per frame it also sets `video.style.filter = blur()` (0→5px first half, 5→55px second half) and `transform = scale()` (1.03→1.11) directly on the DOM. Entrance: the wrapper animates `scale 1.12→1, opacity 0→1` over 1.4s `[0.22,1,0.36,1]` once frames are ready (`readyState >= 3`) or a 3500ms safety timeout fires, then signals `onEntranceComplete`. **No dark overlay** — the wrapper's `bg-black` shows only before the first frame paints.

**`progressive-blur`** (`{components.progressive-blur}`) — The ONLY element permitted to darken the frame.
- A `fixed bottom-0 left/right-0 z-30 h-[150px]` strip, `pointer-events-none`, with `backdropFilter: blur(4px)`, a `maskImage` fading upward (`transparent 0% → #000 65%`), and a `transparent → rgba(0,0,0,0.9)` gradient. Its opacity is driven by hero scroll progress (`useTransform [0,0.7,1] → [1,1,0]`) so it fully fades out once past the hero, keeping the content sections clean.

**`scramble-in`** (`{components.scramble-in}`) — The scroll-aware heading decode. Drives the four hero words (Software / Engineered / One / Brain).
- Initial state is non-breaking spaces sized to the final text (no layout shift). When triggered near the top it scrambles in left-to-right over 900ms — each character owns a staggered window (`charStart = (i/len)*0.65`, `local/0.35`) and shows `randomGlyph()` until its window closes. Crossing `scrollProgress > 0.015` downward scrambles out over 700ms with an opacity fade; scrolling back up re-runs the entrance. Per-heading `delay` staggers the four words (0 / 0.15 / 0.3 / 0.45s).

**`scramble-text`** (`{components.scramble-text}`) — The hover decode on CTA labels.
- On hover, a 25ms (`~40FPS`) `setInterval` runs a left-to-right decode: character `i` locks to its final glyph once the frame counter reaches `i*4`; the whole run is `length*4 + 4` frames. On unhover it snaps back instantly. Both scramble systems share one glyph pool (`A-Za-z0-9!@#$%^&*()_+~|}{[]:;?><`) rendered in Outfit.

**`logo` (brain mark)** — see Photography & Illustration Geometry. A line-drawn two-hemisphere SVG inheriting `currentColor` (white).

## Do's and Don'ts

### Do

- Keep the canvas pure black `{colors.void}` (`#000000`) and primary type pure white `{colors.pure}` (`#ffffff`) — the contrast IS the brand.
- Build every other tone from the white opacity ladder — text at `white/75 · /70 · /60 · /40`, hairlines at `white/20 · /15 · /10`, glass at `white/[0.08]`.
- Use Outfit for everything; let `font-light` (300) carry the cinematic display at `50→100px` and `-0.03em` tracking.
- Scrub the video by scroll (`currentTime = progress * duration`), LERP-smoothed with a single in-flight seek — never autoplay it.
- Reserve `{components.glass-panel}` (blur-2xl + `white/[0.08]` + `white/15` border + sheen + corner glow) for floating content over the video.
- Let `{components.progressive-blur}` be the only frame darkener — bottom 150px edge, fading out past the hero.
- Decode headings with `{components.scramble-in}` and button labels with `{components.scramble-text}`, both from the shared glyph pool.
- Hold the z-stack: video `z-[1]` → main `z-10` → progressive blur `z-30` → header `z-50`.

### Don't

- Don't introduce any hue — no blue/green "tech" accent, no neon, no colored gradient. White-on-black only.
- **Don't put a dark overlay or scrim on the video** — never tint or dim the frame with a black layer; darkening is the bottom-edge progressive blur's job alone.
- Don't autoplay the video or let it run on a timer — its `currentTime` is owned by scroll.
- Don't add a second typeface — every font alias is deliberately remapped to Outfit; a serif or mono breaks the system.
- Don't make the display bold — the hero is weight 300; 700–800 are loaded but unused.
- Don't give glass panels a solid fill or drop the backdrop-blur — `white/[0.08]` over blur is what makes the video read through them.
- Don't add a `box-shadow` outside the `{shadow.glass}` recipe, or a border heavier than `white/20`.
- Don't wrap the app in `<StrictMode>` — its double-invoke spawns two Lenis instances and two scrub loops that fight the single-source scroll→seek logic.
- Don't use `bg-blue-500`-style AI-default accents, code-screenshot hero art, or a terminal-green palette.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px | Lenis disabled (mobile detected); hero heading at 50px; sections stack 1-col; header pills at `h-9 px-5`/`px-3`; rail `px-4`; glass cards `p-7`, contact panel `px-7 py-12` |
| sm | ≥640px | Header pills grow to `h-12`; rail `px-8`; hero heading 70px; standfirst 15px; glass `p-8`, contact `px-16 py-20`; section heads 44px |
| md | ≥768px | Hero splits to 2-col grids; Highlight goes `grid-cols-3`; hero heading 85px; section heads 56px; contact details `grid-cols-3` (at sm) |
| lg | ≥1024px | Hero heading at the 100px cap |
| Wide | ≥1280px | Content caps at `max-w-7xl` (1280px); layout holds |

### Touch Targets

- Both `btn-white` instances are `h-12` (≥44px) at `sm`; on mobile `h-9` (36px) — acceptable but at the lower bound for the header Contact button.
- The logo pill is `h-9` → `h-12`, a comfortable tap target.
- **Lenis smooth-scroll is disabled on mobile** (UA + `innerWidth < 768` check) — touch uses native scroll, which still drives the video scrub via `window.scrollY`.

### Collapsing Strategy

- **Hero**: the two 2-col grids collapse to single stacked columns below `md`; the right-aligned "One / Brain" heading stays right-aligned.
- **Highlight**: `md:grid-cols-3` → single column on mobile; cards keep their full glass recipe.
- **Contact details**: `sm:grid-cols-3` → single column; the CTA row goes `flex-col` → `sm:flex-row`.
- **Display type**: hardcoded breakpoint sizes (`text-[50px] sm:text-[70px] md:text-[85px] lg:text-[100px]`), not a `clamp` — it steps rather than scales fluidly.

### Image / Video Behavior

- The video is `object-cover` fullscreen at every width; it never crops to a frame and never gets a radius.
- The scrub math is viewport-relative (`window.innerHeight * 1.5`), so the scrub distance adapts to screen height automatically.
- No `prefers-reduced-motion` guard is wired (see Known Gaps) — the scrub, scramble, and entrance all run regardless of the user's motion preference.

## Iteration Guide

1. New section? Start from the black canvas, an Outfit `font-light` heading, and a `{components.glass-panel}` for any floating content — the shell is the brand.
2. Keep the monochrome rule absolute — a new "accent need" is answered by raising text to full white or lowering it on the opacity ladder, never by adding a hue.
3. Reference everything by token name — `{colors.x}`, `{rounded.x}`, `{typography.x}`, `{components.x}` — so an opacity or radius change cascades.
4. Decide first which device carries any new depth: the glass blur, the video transform, or the bottom progressive blur. A new surface that "needs depth" gets `{components.glass-panel}`, not a fresh `box-shadow`.
5. Preserve the z-stack (video 1 → main 10 → blur 30 → header 50) when inserting anything — a new fixed element must slot into this order deliberately.
6. Never autoplay or overlay the video. New scroll effects read `window.scrollY` and apply transforms directly to the DOM in the existing rAF loop, LERP-smoothed.
7. Any new motion uses the existing primitives — `{components.scramble-in}` for reveal, `{components.scramble-text}` for hover, motion `spring(400,28)` for press — not a new animation library.

## Known Gaps

- **Heavy motion / Lenis dependency.** The page leans on `lenis` + `motion/react` + a hand-rolled rAF scrub. No `prefers-reduced-motion` guard exists — the scramble, scrub, blur, and entrance all run regardless; a reduced-motion path (instant reveals, static last-frame) would have to be added.
- **No `<StrictMode>`.** It is intentionally omitted (double-invoke would spawn two Lenis instances and two scrub loops). This trades away StrictMode's dev safety checks; any added effect must be manually audited for double-mount safety.
- **Single page, no routing.** There is one scrolling page (Header → Hero → Highlight → Contact). Work index, case studies, an about page, and any real footer are unspecified — design them in the same black/glass/Outfit language.
- **The video must be scroll-scrubbed-encoded.** Smooth seeking requires a short, keyframe-dense, seekable clip; a long or sparsely-keyframed MP4 will stutter or show black frames despite the single-seek guard. The clip is a hard dependency, not a swappable asset.
- **Decorative social links.** GitHub / X / LinkedIn point at `href="#"`, and the only "form" is a `mailto:` — there are no input, focus, or validation states. A real contact form would need semantic states introduced in the monochrome language.
- **No light-mode counterpart.** The black stage is the system; a light variant would require its own governing decision, not an inversion of the opacity ladder.
