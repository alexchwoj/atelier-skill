---
version: "1"
name: "Design System Inspired by Dreamy"
description: "Dreamy's canvas is a soft looping dream video, not a flat color — a faint white top-down scrim (#ffffff at 40%→10%→0) sits above it to keep dark neutral type legible. There is no chromatic accent; the page rides Tailwind's default grays (gray-900 headline, gray-700 nav, gray-600 body) and one ink fill, gray-900 #111827, on the search button and CTA. The signature surface is glass — white at low opacity (white/60, white/80) over backdrop-blur — and the page rhythm is a single-screen hero pinned near the top (a flex-1 bottom spacer pushes content up, never centered) that blurs in once on load."
colors:
  ink: "#111827"            # gray-900 — headline, logo, icons, button + CTA fill, input text
  nav: "#374151"            # gray-700 — desktop nav links, mobile drawer rows
  body: "#4b5563"           # gray-600 — description paragraph
  placeholder: "#6b7280"    # gray-500 — search input placeholder
  hairline: "#e5e7eb"       # gray-200 — pill ring, drawer ring, drawer row borders
  ink-hover: "#1f2937"      # gray-800 — CTA hover fill
  glass-60: "rgba(255,255,255,0.60)"   # white/60 — search pill surface
  glass-80: "rgba(255,255,255,0.80)"   # white/80 — mobile drawer surface
  scrim-top: "rgba(255,255,255,0.40)"  # white/40 — scrim top stop
  scrim-mid: "rgba(255,255,255,0.10)"  # white/10 — scrim mid stop
  white: "#ffffff"          # button + CTA text
typography:
  sans: { fontFamily: "'Arimo', 'Helvetica Neue', Helvetica, Arial, sans-serif", weights: "400, 500, 700", role: "the one face — headline, nav, body, button, input; Helvetica/Arial metric-compatible grotesque" }
spacing:
  base: "4px"
  xs: "8px"                 # input vertical padding (py-2), pill inner gap (gap-3 = 12px see sm)
  sm: "12px"                # pill content gap (gap-3), pill right padding (pr-1.5 = 6px see micro)
  md: "20px"                # pill left padding (pl-5), nav h-padding base (px-5)
  lg: "32px"                # desktop nav link gap (gap-8)
  xl: "48px"                # top spacer max (lg:min-h-12), nav v-padding context
rounded:
  drawer: "16px"            # rounded-2xl — mobile dropdown
  pill: "9999px"            # rounded-full — search pill, search button, CTA, hamburger
shadow:
  none: "no box-shadow anywhere — depth is glass blur + the white scrim only"
components:
  search-pill: "The glass search bar — bg {colors.glass-60}, ring-1 {colors.hairline}, backdrop-blur-md, rounded {rounded.pill}, py-1.5 pl-5 pr-1.5, holding a transparent input + an ink round button"
  pill-button: "Round submit — h-9/w-9 (sm h-10/w-10), bg {colors.ink}, white ArrowUp, rounded {rounded.pill}, scales 1.05 hover / 0.95 active"
  cta: "Get Started — bg {colors.ink}, white, font-medium 13px, px-4 py-2 (sm px-5), rounded {rounded.pill}, hover bg {colors.ink-hover}"
  logo: "Cloud SVG — 24×24 single filled path, fill currentColor (inherits gray-900), reused as the #111 favicon"
  fade-up: "Entrance — 24px rise + 6px blur clearing to 0 over 0.9s cubic-bezier(0.22,1,0.36,1) both"
  fade-down: "Nav entrance — drops from -16px over 0.7s, same ease, no blur"
---

# Design System Inspired by Dreamy

## Overview

Dreamy's backdrop is not a color at all — it is a soft looping dream video filling the full viewport, with a faint white top-down scrim laid over it (`{colors.scrim-top}` → `{colors.scrim-mid}` → transparent) so that dark neutral type stays legible across the shifting footage. There is no painted canvas to declare; the "surface" the page reads against is the moving video plus that gradient veil. Everything structural sits in glass: white at low opacity (`{colors.glass-60}` on the search pill, `{colors.glass-80}` on the mobile drawer) over `backdrop-blur`, so the dream shows through every chrome.

Type is the whole palette. Dreamy uses **no chromatic accent** — it rides Tailwind's default neutral grays directly: `{colors.ink}` (gray-900 #111827) for the headline, logo, icons, and the two ink fills; `{colors.nav}` (gray-700 #374151) for nav links; `{colors.body}` (gray-600 #4b5563) for the description; `{colors.placeholder}` (gray-500 #6b7280) for the input placeholder; and `{colors.hairline}` (gray-200 #e5e7eb) for every ring and row border. The only "fills" on the page are ink: the round search button and the **Get Started** CTA, both `{colors.ink}` with white glyphs. **Most dream / journaling / wellness apps reach for dark mystical purples, starfields, and glowing orbs — Dreamy refuses that, holding a bright airy field of glass over a soft video, dark neutral type, and one quiet blur-in motion.**

One face carries everything: **Arimo** (loaded from Google Fonts at weights 400 / 500 / 700), a Helvetica/Arial metric-compatible grotesque with the fallback chain `'Helvetica Neue', Helvetica, Arial, sans-serif`. The headline is `font-normal` (400) stepping through fixed breakpoints to 80px; nav and CTA sit at `font-medium` (500); body stays at 400. There is no second family and no italic — the page speaks in a single calm voice.

The page rhythm is a **single-screen hero, pinned near the top**. A `min-h-[100svh]` flex column holds the navbar, a small top spacer, the content block (headline → glass search pill → description), and then a `flex-1` bottom spacer that absorbs the remaining height and pushes everything **up** — the hero is deliberately **not** vertically centered. On load it blurs in once: the nav fades down, then headline lines, search bar, and description rise and unblur on a 100 / 220 / 340ms stagger. After that, nothing animates but the looping video.

**Key Characteristics:**
- **Video-plus-scrim backdrop** — a looping `<video>` (`object-cover`, `-z-10`) under a white top-down gradient (`{colors.scrim-top}` → `{colors.scrim-mid}` → transparent); there is no flat canvas color.
- **No chromatic accent** — the system is Tailwind default grays only; `{colors.ink}` (#111827) is the single fill, on the search button and CTA.
- **Glass is the chrome** — every surface is white at low opacity (`{colors.glass-60}` / `{colors.glass-80}`) over `backdrop-blur`, so the dream shows through.
- **One face, Arimo** (Google Fonts 400/500/700) — headline `font-normal`, nav/CTA `font-medium`, no italic, no second family.
- **Top-pinned, never centered** — a `flex-1` bottom spacer pushes the content block toward the top of the single viewport.
- **One motion primitive** — `{components.fade-up}` (24px + 6px blur, 0.9s) and `{components.fade-down}` (-16px, 0.7s), staggered 100 / 220 / 340ms, on a `cubic-bezier(0.22,1,0.36,1)` ease.
- **Pill geometry** — `{rounded.pill}` on the search bar, its button, the CTA, and the hamburger; `{rounded.drawer}` 16px on the mobile sheet.
- **Cloud logo** — a custom 24×24 SVG filled with `currentColor`, reused as the `#111` favicon; the only mark on the page.
- No second section, no accent color, no gradient headline, no card elevation, no drop shadow, no scroll.

## Colors

> Source pages: the single-screen Dreamy hero — the glassy navbar (cloud logo + wordmark, Explore/Journal/Inspiration links, Get Started CTA, mobile drawer) and the top-pinned content block (headline, glass search pill, description) over the video + white scrim. The system is one viewport; there are no other live surfaces.

### Brand & Accent
- **None.** Dreamy has no chromatic accent. Where other systems would place a brand color, Dreamy places `{colors.ink}` (gray-900 #111827) — the same near-black it uses for type — as the fill on the round search button and the **Get Started** CTA. The "accent" is the absence of one; the dream video carries all the color the page has.

### Surface
- **Video + scrim** (no token color): The backdrop is a looping `<video>` at `object-cover`, with a white top-down gradient above it stepping `{colors.scrim-top}` (white/40) → `{colors.scrim-mid}` (white/10) → transparent. Both sit at `-z-10`; the content layer floats at `z-20`. There is no flat page background — the scrim only lifts the top of the frame so dark type stays legible.
- **Glass-60** ({colors.glass-60}): The search-pill surface — `white/60` over `backdrop-blur-md`. Translucent enough that the video reads through it.
- **Glass-80** ({colors.glass-80}): The mobile-drawer surface — `white/80` over `backdrop-blur-xl`. Slightly more opaque than the pill because it carries stacked link rows.

### Text
- **Ink** ({colors.ink}): The headline, the logo/wordmark, the icons, and the input text — gray-900 #111827, a near-black. Also the fill on the search button and CTA (with white glyphs), and the favicon color (`#111`). The dominant ink of the page.
- **Nav** ({colors.nav}): Desktop nav links and mobile-drawer rows — gray-700 #374151. Shifts to `{colors.ink}` on hover.
- **Body** ({colors.body}): The description paragraph — gray-600 #4b5563. The quietest readable gray on the page.
- **Placeholder** ({colors.placeholder}): The search input placeholder ("What did you dream last night?") — gray-500 #6b7280, via `placeholder:text-gray-500`.

### Hairline
- **Hairline** ({colors.hairline}): gray-200 #e5e7eb — the `ring-1` around the search pill and the mobile drawer, and the `border-b` between drawer rows (`last:border-b-0` drops the final one). The only structural line on the page; there are no dividers in the open frame.

### Semantic
None on the marketing surface. No success / error / warning colors are present on the single hero. The search `<form>` is decorative — `onSubmit` only calls `preventDefault()`, so there is no validation or feedback state to color. Semantic states would have to be introduced for a real submit flow (see Known Gaps). There is no overlay or modal scrim beyond the mobile drawer's own glass.

## Typography

### Font Family

- **Arimo** — the one face for the whole page; fallback stack `'Helvetica Neue', Helvetica, Arial, sans-serif`. Loaded from **Google Fonts** at weights **400 / 500 / 700** via a `<link>` in `index.html` (preconnect to `fonts.googleapis.com` + `fonts.gstatic.com` first), and registered both as `theme.extend.fontFamily.sans` in `tailwind.config.js` and on the `html` rule in `index.css`. Arimo is a Helvetica/Arial metric-compatible grotesque, so it sets at the same widths as the system fallbacks — no reflow if the webfont is slow. `html` also enables `-webkit-font-smoothing: antialiased` and `-moz-osx-font-smoothing: grayscale`. There is no second family, no serif, and no italic anywhere on the page.

The page deliberately uses only three of Arimo's weights: 400 for the headline and body, 500 for the wordmark / nav / CTA, and 700 is loaded but unused on the hero (available for future emphasis). The voice is calm and even — weight, not color or face, marks hierarchy.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.sans}` (hero) | 40 → 44 → 60 → 72 → 80px | 400 | 1.05 | tight (`tracking-tight`) | Headline, two block spans (Arimo) |
| `{typography.sans}` (wordmark) | 16px (sm 18px) | 500 | normal | tight (`tracking-tight`) | "Dreamy" brand text |
| `{typography.sans}` (body) | 14 → 16 → 18px | 400 | relaxed (`leading-relaxed`) | normal | Description paragraph (gray-600) |
| `{typography.sans}` (input) | 14px (sm 16px) | 400 | normal | normal | Search input text + placeholder |
| `{typography.sans}` (nav) | 13px | 400 | normal | normal | Desktop nav links (gray-700) |
| `{typography.sans}` (CTA) | 13px | 500 | normal | normal | Get Started CTA, white on ink |
| `{typography.sans}` (drawer) | 15px | 400 | normal | normal | Mobile-drawer link rows (gray-700) |

The headline steps through **fixed breakpoints**, never one fluid `clamp`: `40px` base → `44px` at `min-[400px]` → `text-6xl` (60px) at `sm` → `text-7xl` (72px) at `lg` → `80px` at `xl`. It is set in two block spans on a tight `1.05` line-height so the two lines stack as one mass.

### Principles

- **One face does everything.** Arimo carries headline, nav, body, button, and input; hierarchy comes from size and weight, not from a second family.
- **Headline is `font-normal` (400), not bold.** The calm comes from the weight restraint — the 80px line never goes heavier than 400.
- **`tracking-tight` on display and wordmark only.** The headline and the "Dreamy" wordmark tighten; body, nav, and input keep normal tracking.
- **Step sizes, don't clamp.** The headline uses five discrete breakpoint sizes rather than a fluid scale — deliberate, predictable jumps.
- **No italic, no 700 on the hero.** Weight 700 is loaded but unused; italic is never used. The face stays even.

### Note on Font Substitutes

Dreamy uses **Arimo**, which is open-licensed and served from **Google Fonts** — load it directly, no substitution required. Because Arimo is **metric-compatible with Helvetica and Arial**, the documented fallback chain `'Helvetica Neue', Helvetica, Arial, sans-serif` renders at identical widths if the webfont fails to load, so there is no layout shift. Do not swap in a different grotesque "that looks similar" — the Helvetica metrics are the point; if you must substitute, fall back along the existing chain, never to a wider or narrower sans.

## Layout

### Spacing System

- **Base unit**: 4px (Tailwind default scale).
- **Tokens (front matter)**: `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 20px · `{spacing.lg}` 32px · `{spacing.xl}` 48px.
- Nav padding scales `px-5 py-4` (20/16px) → `sm:px-8 sm:py-5` (32/20px) → `lg:px-10` (40px).
- Top spacer under the nav scales `min-h-6` (24px) → `sm:min-h-10` (40px) → `lg:min-h-12` (48px) — a small, deliberate gap so content sits near the top.
- Search pill: `py-1.5` (6px) vertical, `pl-5` (20px) left, `pr-1.5` (6px) right so the round button hugs the edge; `gap-3` (12px) between input and button.
- Content block: `px-5` (20px) side padding, `text-center`; headline → search `mt-5` (sm `mt-6`); search → description `mt-4` (sm `mt-5`).
- Desktop nav link gap: `{spacing.lg}` 32px (`gap-8`). CTA + hamburger gap: `gap-2` (8px).

### Grid & Container

- **Single-screen hero**: a `min-h-[100svh]` flex column — navbar on top, a top spacer, the centered content block, then a `flex-1` bottom spacer. No scroll; one viewport at every width.
- The content block is `flex flex-col items-center text-center` — horizontally centered, but pushed to the **top** of the frame by the bottom spacer.
- Search `<form>` is full width capped at `max-w-xl` (36rem); the description caps narrower at `max-w-md` (28rem) for a clean reading measure.
- The navbar is a full-bleed `justify-between` row: brand left, desktop links center (hidden below `md`), CTA + hamburger right.
- The mobile drawer is absolutely positioned `left-4 right-4 top-full` — pinned under the nav, inset 16px from each edge.

### Whitespace Philosophy

Whitespace is the calm of the dream. The content is held in a tight stack near the top of the frame, and the entire lower half of the viewport is intentionally **empty** — the `flex-1` spacer is the design, letting the video breathe below the type. Nothing fills the bottom; that openness is what keeps the page feeling airy rather than busy. Crowd the lower frame with a second section and the dreamy stillness collapses.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow, no border | The headline, description, nav links, CTA — most of the page |
| 1 (hairline) | `ring-1` / `border-b` in `{colors.hairline}` | The search pill, the mobile drawer, the drawer row separators |
| 2 (scrim) | White top-down gradient `{colors.scrim-top}` → `{colors.scrim-mid}` → transparent | The legibility veil over the top of the video |
| 3 (glass) | `white/60`–`white/80` over `backdrop-blur` | The search pill and mobile drawer floating over the video |

Dreamy's depth is carried by exactly two devices: (1) the **white scrim** that lifts the top of the frame so dark type reads, and (2) the **glass blur** that makes the pill and drawer feel like frosted panes over the dream. There are **no drop shadows anywhere** — a `box-shadow` under the pill would immediately drag the page from ethereal-glass toward generic-SaaS-card.

### Decorative Depth

- **The looping video + white scrim** is the whole atmosphere — soft, shifting, dream-like footage under a gentle veil.
- **Glass `backdrop-blur`** is the only "material" — `backdrop-blur-md` on the pill, `backdrop-blur-xl` on the drawer.
- **No box-shadow, no spotlight cards, no gradient overlays on content, no glow.** The page is flat chrome over a moving backdrop.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.drawer}` | 16px (`rounded-2xl`) | The mobile dropdown sheet |
| `{rounded.pill}` | 9999px (`rounded-full`) | The search pill, its submit button, the CTA, the hamburger |

The geometry is binary: everything interactive is a **full pill** (`rounded-full`), and the one stacked surface — the mobile drawer — is a soft `rounded-2xl` rectangle. There is no mid-scale card radius because there are no cards.

### Photography & Illustration Geometry

- The only "image" is the **full-bleed background video** — `object-cover`, edge-to-edge, no radius, no frame.
- The **cloud Logo** is a 24×24 SVG with a single filled path, `fill="currentColor"` so it inherits the surrounding `{colors.ink}` text color; rendered at `h-5 w-5` (sm `h-6 w-6`) in the navbar.
- The same cloud path is the **favicon**, inlined as an SVG data URI with `fill='%23111'` (#111).
- There are no avatars, photos, or framed images — the dream video is the only imagery.

## Components

### Buttons

> Measured from the live build: there are two ink fills — the round search submit and the **Get Started** CTA. Both are `{colors.ink}` with white glyphs; both are full pills. No outlined or ghost button exists.

**`pill-button`** ({components.pill-button}) — The round search submit inside the glass pill.
- `h-9 w-9` (sm `h-10 w-10`), `shrink-0`, `bg-gray-900` (`{colors.ink}`), white `ArrowUp` icon (`h-4 w-4`, sm `h-[18px] w-[18px]`), `rounded-full`. `transition-transform` — scales `1.05` on hover, `0.95` on active. `aria-label="Decode dream"`.

**`cta`** ({components.cta}) — The **Get Started** action in the navbar.
- `<a href="#">`, `bg-gray-900` (`{colors.ink}`), white text, Arimo `font-medium` 13px, `px-4 py-2` (sm `px-5`), `rounded-full`. `transition-colors` — hover fills `bg-gray-800` (`{colors.ink-hover}`). No border, no shadow.

### Cards & Containers

**`search-pill`** ({components.search-pill}) — The hero's centerpiece: a glass search bar standing in for a CTA.
- `<form onSubmit={preventDefault}>` capped at `max-w-xl`; inner `<div>`: `flex items-center gap-3 rounded-full bg-white/60 py-1.5 pl-5 pr-1.5 ring-1 ring-gray-200 backdrop-blur-md`. Holds the transparent `<input>` (flex-1) and the `pill-button`. The `bg-white/60` + `backdrop-blur-md` is the signature glass; the `ring-1` in `{colors.hairline}` is its only edge. This is the primary action of the hero — not a button.

**`mobile-drawer`** — The dropdown sheet, rendered only when `open`.
- Absolutely positioned `left-4 right-4 top-full`, `rounded-2xl bg-white/80 px-5 py-3 ring-1 ring-gray-200 backdrop-blur-xl md:hidden`, `animate-fade-up` on open. Maps `NAV_LINKS` to `<a>` rows: `block border-b border-gray-200 py-3 text-[15px] text-gray-700 ... last:border-b-0 hover:text-gray-900`. More opaque glass than the pill because it carries stacked rows.

### Inputs & Forms

**`search-input`** — The dream-prompt field inside the glass pill.
- `type="text"`, placeholder "What did you dream last night?", `flex-1 bg-transparent py-2 text-sm text-gray-900 outline-none placeholder:text-gray-500 sm:text-base`. Transparent (the pill carries the surface), no border (the pill's `ring` is the edge), no visible focus ring — `outline-none` with the pill as the only framing. The `<form>` is decorative: `onSubmit` only calls `preventDefault()`.

### Navigation

**`top-nav`** — A full-bleed, **non-sticky** bar that fades down on load (`animate-fade-down`, no delay).
- `relative z-20 flex items-center justify-between px-5 py-4 sm:px-8 sm:py-5 lg:px-10`. **Left**: the cloud `{components.logo}` (`h-5 w-5` sm `h-6 w-6`) + the wordmark "Dreamy" (Arimo `font-medium`, 16px sm 18px, `tracking-tight`), both `text-gray-900`. **Center** (`hidden md:flex`, `gap-8`): an **Explore** button with a trailing `ChevronDown` (`h-3.5 w-3.5`), then **Journal** and **Inspiration** links — all 13px `text-gray-700 hover:text-gray-900`. **Right** (`gap-2`): the `{components.cta}` and the hamburger.
- Hamburger: `h-9 w-9 rounded-full text-gray-900 hover:bg-gray-900/10 md:hidden`, toggling `open`; renders `X` when open, `Menu` when closed (both `h-5 w-5`).

### Marks

**`logo`** ({components.logo}) — The cloud mark. Top-left of the nav.
- A 24×24 SVG with a single filled path, `fill="currentColor"` so it takes the parent's `{colors.ink}`. Accepts a `className` for sizing. The same path is reused as the `#111` favicon data URI. The only mark on the page — no separate symbol.

### Footer

Not present. The hero ends at the description paragraph; there is no footer on the single screen. A later-page footer would have to be designed in the same language — glass over the video, Arimo, gray-700 rows, gray-200 hairlines (see Known Gaps).

## Do's and Don'ts

### Do

- Lay a soft looping `<video>` (`object-cover`, `-z-10`) under a white top-down scrim (`{colors.scrim-top}` → `{colors.scrim-mid}` → transparent) — the scrim is what makes dark type legible.
- Keep every chrome surface glass: white at low opacity (`{colors.glass-60}` / `{colors.glass-80}`) over `backdrop-blur`.
- Use Tailwind default grays only — `{colors.ink}` (#111827) headline + fills, `{colors.nav}` (#374151) nav, `{colors.body}` (#4b5563) body — no chromatic accent.
- Set the headline in Arimo `font-normal` (400), `tracking-tight`, `leading-[1.05]`, stepping 40 → 44 → 60 → 72 → 80px through fixed breakpoints.
- Pin the content near the top with a `flex-1` bottom spacer — leave the lower half of the frame empty.
- Make every interactive element a `{rounded.pill}` full pill; reserve `{rounded.drawer}` 16px for the mobile sheet.
- Stagger the one entrance: `fade-down` nav, then `fade-up` on headline lines / search / description at 100 / 220 / 340ms, `cubic-bezier(0.22,1,0.36,1)`.
- Keep the `prefers-reduced-motion: reduce` guard that disables both keyframes.

### Don't

- Don't reach for dark purples, starfields, gradient orbs, or any "mystical dream" cliché — Dreamy is bright glass over a soft video.
- Don't introduce a chromatic accent or a second fill color; the only fill is `{colors.ink}` on the search button and CTA.
- Don't add a `box-shadow` anywhere — depth is the scrim and the glass blur, nothing else.
- Don't vertically center the content; the `flex-1` bottom spacer pins it near the top on purpose.
- Don't put a gradient on the headline or render it bolder than `font-normal` (400).
- Don't swap Arimo for a "similar" grotesque — the Helvetica/Arial metrics matter; fall back only along the documented chain.
- Don't add a second section, feature grid, pricing, testimonial, or footer — the hero ends at the description.
- Don't use a `clamp()` for the headline; it steps through five discrete breakpoint sizes.
- Don't add scroll animation, parallax, typewriter, or counters — the only continuous motion is the looping video.
- Don't use `bg-blue-500`-style AI-default accents or solid card surfaces in place of the glass.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤399px | Headline at 40px; nav `px-5 py-4`; desktop links hidden, hamburger + drawer instead; CTA `px-4` |
| Phone | 400–639px | Headline jumps to 44px at `min-[400px]`; search/input at `text-sm`; description `text-sm` |
| Tablet | 640–767px (`sm`) | Headline `text-6xl` (60px); nav `px-8 py-5`; input/description `text-base`; button `h-10 w-10`; CTA `px-5` |
| Desktop | 768–1023px (`md`) | Desktop nav links appear (`md:flex`); hamburger + drawer hidden |
| Large | 1024–1279px (`lg`) | Headline `text-7xl` (72px); nav `px-10`; top spacer `min-h-12`; description `text-lg` |
| Wide | ≥1280px (`xl`) | Headline at the 80px cap |

### Touch Targets

- The round search button (`h-9 w-9` → `h-10 w-10`) and the hamburger (`h-9 w-9`) clear the ≥44px minimum at `sm` and sit just under it at base — acceptable for a single decorative hero.
- The CTA (`px-4 py-2` → `px-5`) and drawer rows (`py-3`, full-width) give comfortable tap area.
- Nav links are text-only at 13px; on touch the mobile drawer replaces them with `py-3` full-width rows.

### Collapsing Strategy

- **The screen never scrolls** — it is one `min-h-[100svh]` viewport at every width; only the headline size (five fixed steps) and the paddings flex.
- **Nav**: desktop links are `hidden` below `md` and replaced by the hamburger + the `bg-white/80` glass drawer; they reappear from `md` up.
- **Headline**: five discrete breakpoint sizes (40 / 44 / 60 / 72 / 80px) — never a fluid clamp.
- **Search + description**: full-width capped at `max-w-xl` / `max-w-md`; type bumps `sm` (14→16px) and `lg` (→18px on the description).

### Image Behavior

- The background video is `object-cover` full-bleed at `-z-10` — it always fills the frame and crops, never letterboxes. Keep `autoPlay loop muted playsInline preload="auto"`.
- The white scrim sits at `-z-10` directly over the video, `pointer-events-none`, so it never intercepts input.
- Respect `prefers-reduced-motion: reduce`: the guard disables `fade-up` / `fade-down`; the looping video continues (it is not a keyframe animation).

## Iteration Guide

1. New page (about, journal, settings)? Start from the same shell — the video + white scrim backdrop, glass chrome, Arimo, `{colors.ink}` type. The atmosphere is the brand.
2. Keep the no-accent rule absolute — a new "color need" is answered by `{colors.ink}` on a small fill, by a glass surface, or by nothing; never by introducing a chromatic accent.
3. Reference everything by token name — `{colors.x}`, `{rounded.x}`, `{typography.sans}`, `{components.x}` — so a value change cascades.
4. Decide first which one device carries any new depth: the scrim or the glass blur. A new surface that "needs depth" gets neither a border-heavy card nor a box-shadow — make it glass.
5. Display vs body stays a hard line: Arimo `font-normal` 400 `tracking-tight` for the headline; 400 normal-tracking for body; 500 only for the wordmark / nav / CTA.
6. Keep interactive shapes as full pills; reserve `rounded-2xl` for stacked sheets only.
7. Treat the single entrance stagger as the budget — `fade-down` then `fade-up` at 100 / 220 / 340ms. A new element joins the stagger; it does not get its own new motion.

## Known Gaps

- Beyond the single hero, later-page layouts (a real journal view, a dream-detail page, an about page, settings) are not specified — design them in the same language: video + scrim backdrop, glass chrome, Arimo, gray-only type. The wordmark / drawer / body rows in the type table are the only non-headline sizes the live build proves.
- The palette is **Tailwind's default neutral grays, not a bespoke system** — gray-900 / 700 / 600 / 500 / 200 used directly. There is no tuned brand hue; a true brand color would be a new governing decision, not a recolor.
- There is **one motion primitive** (`fade-up` / `fade-down`), used for the whole entrance. No hover-reveal, scroll, or continuous animation exists beyond the looping video; richer interaction states would have to be introduced.
- The search `<form>` is **decorative** — `onSubmit` only calls `preventDefault()`. There is no real submit, loading, result, error, or empty state, and no input focus ring; semantic colors and form states are absent and would need to be designed.
- Weight **700 of Arimo is loaded but unused** on the hero; an emphasis style using it is available but not demonstrated.
- The background `<video>` itself is not part of this spec's measurable surface — any soft, dream-like clip suits the slot, and contrast over arbitrary footage relies on the scrim, which is tuned only for bright/soft frames (dark footage would break legibility).
