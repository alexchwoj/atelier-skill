---
version: "1"
name: "Design System Inspired by Zpeed"
description: "A near-black, single-screen motorsport-editorial hero. Carbon canvas (#181818, never pure black) holds three full-bleed cover videos that cross-fade on end behind edge-to-edge white Inter type scattered diagonally across the frame. The signature surface is the looping footage; the single accent, Race red (#da291c), is rationed to one element — the Get Tickets CTA. The page rhythm is one viewport, no scroll, the headline strewn diagonally over moving footage between three corner-anchored stat cells."
colors:
  carbon: "#181818"               # canvas — body bg, section bg behind videos, bottom-gradient target. Near-black, NEVER #000
  white: "#ffffff"                # primary ink + marks — headline, logo fill, brand, nav, CTA label, all stat numbers
  white-soft: "rgba(255,255,255,0.90)"    # description paragraph (text-white/90)
  white-muted: "rgba(255,255,255,0.70)"   # uppercase stat labels (text-white/70)
  white-hairline: "rgba(255,255,255,0.40)" # diagonal divider rules in stat cells (bg-white/40)
  glass-fill: "rgba(255,255,255,0.10)"     # navbar background (bg-white/10)
  glass-border: "rgba(255,255,255,0.20)"   # navbar pill edge (border-white/20)
  race-red: "#da291c"             # accent — ONLY the Get Tickets CTA fill. Race red, the team's own mark
  race-red-pressed: "#b01e0a"     # CTA active: state only
typography:
  display: { fontFamily: "Inter, -apple-system, system-ui, sans-serif", weights: "500", role: "scattered headline words — Race / beyond / limits; -0.02em tracking, 1.05 leading" }
  body:    { fontFamily: "Inter, -apple-system, system-ui, sans-serif", weights: "400 / 600 / 700", role: "description (400), nav + brand + labels (600), CTA + stat numbers (700)" }
spacing:
  base: "8px"
  xxs: "4px"
  xs: "8px"
  sm: "16px"
  md: "24px"          # navbar top inset (top-6)
  lg: "32px"
  xl: "48px"          # CTA height (h-12), nav-link gap reference
  navbar-inset-x: "50px"   # left + right viewport edge (left-[50px] right-[50px])
  navbar-h: "64px"         # h-16
  description-max: "240px" # max-w-[240px]
  bottom-fade: "192px"     # h-48 gradient into Carbon
rounded:
  sharp: "0px"        # everything by default — headline, stat cells, video frame, hairlines
  pill: "9999px"      # navbar pill + Get Tickets CTA — the only rounded elements
shadow:
  navbar-glass: "inset 0 1px 0 rgba(255,255,255,0.25), 0 8px 32px rgba(0,0,0,0.35)"  # the navbar pill ONLY — the page's single drop shadow
components:
  hero: "the single section — owns the 3-video cross-fade, scattered headline, description, 3 stat cells, bottom fade"
  navbar: "floating liquid-glass pill — inset 50px, top-6, h-16, rounded-full, glass fill + border + {shadow.navbar-glass}"
  cta-red: "Get Tickets — the ONLY red element. h-12 rounded-full pill, {colors.race-red} fill, active {colors.race-red-pressed}"
  video-loop: "3 stacked full-bleed videos, opacity-only cross-fade over 200ms, advancing 1→2→3→1 on onEnded"
  stat-cell: "bold white number + diagonal white hairline rule + uppercase muted label, corner-anchored"
  chevron-logo: "hand-authored inline double-chevron SVG (»), white fill, the only glyph on the page"
---

# Design System Inspired by Zpeed

## Overview

Zpeed's canvas is **Carbon** `{colors.carbon}` (#181818) — a near-black that deliberately refuses pure black. The slight lift off #000 keeps the racing footage from crushing in the shadows and reads as a calibrated broadcast feed rather than a void. There is no surface ladder and no second background: the whole frame is Carbon, and on top of it sit three full-bleed cover videos that cross-fade on end. The footage is the surface. The bottom 192px fades back into Carbon so any low copy stays legible.

The single chromatic accent is **Race red** `{colors.race-red}` (#da291c) — Zpeed's own motorsport-editorial red, not a borrowed marque. It is spent on exactly one element: the `Get Tickets` CTA fill, with `{colors.race-red-pressed}` (#b01e0a) as its pressed state. Nothing else is red. The three stat numbers — including `+58` race wins — are white. Headlines, body, hairlines, and the brand mark are all white or white-at-reduced-opacity (`{colors.white-soft}` 90%, `{colors.white-muted}` 70%, `{colors.white-hairline}` 40%). The red rationing IS the brand restraint, the same way Carbon-not-black is.

Type is **Inter only** — one family, four weights (400 / 500 / 600 / 700), loaded from Google Fonts. The scattered headline runs at weight 500 with `-0.02em` tracking and 1.05 leading; uppercase nav, CTA, and stat labels open to positive tracking (0.65 / 1.4 / 1.1px) for an instrument-panel feel. There is no display face — the editorial voice comes from placement and scale, not from a typeface.

The page rhythm is **moving footage + scattered editorial type + one rationed red**. The page is one viewport with **no scroll**: the headline is split into three separate words (`Race` / `beyond` / `limits`) strewn diagonally by absolute insets, framed by three corner-anchored stat cells, with the description tucked at left-center. The only engineered motion is the 200ms opacity cross-fade between clips; everything else is the footage's own movement.

**GOVERNING DECISION:** Most motorsport and sports sites pile on chrome — multiple brand accents, neon gradients, glossy bevels, sponsor-board color noise — to telegraph "fast." **Zpeed refuses all but one Race-red mark on a single CTA**, refuses gradients on the type, refuses any drop shadow but the navbar's, refuses a second accent and a light theme, and lets three cross-fading videos carry the speed. Restraint is the speed.

**Key Characteristics:**
- **Carbon canvas** (`{colors.carbon}` #181818) — near-black, **never** `#000`; the only gradient on the page is the bottom fade back into Carbon.
- **Three full-bleed cover videos** cross-fading on `onEnded` over 200ms — the signature surface and the only animation system.
- **Race red rationed to one element** (`{colors.race-red}` #da291c) — the `Get Tickets` CTA fill plus its `{colors.race-red-pressed}` press state, nowhere else. Even `+58` is white.
- **Inter-only** type — one family, four weights (400/500/600/700); the scattered headline at weight 500, `-0.02em`, 1.05 leading.
- **Scattered-headline geometry** — three separate words placed diagonally by absolute insets (top-left → mid-right → lower-center), not one centered block.
- **Floating liquid-glass navbar** — a `rounded-full` pill inset 50px carrying the `{shadow.navbar-glass}` shadow, the single drop shadow on the page.
- **Diagonal stat cells** — three corner-anchored modules, each a bold white number flanked by a `rotate-[20deg]` / `rotate-[-20deg]` white hairline rule.
- **Tailwind v4, config-less** — no `tailwind.config.js`; every token is applied as an arbitrary-value utility inline.
- It does **not** scroll, does **not** carry a second accent, a light theme, type gradients, card borders, stat-cell elevation, video controls, or any animation library — and never uses pure black.

## Colors

> Source pages: the single full-screen Zpeed hero — Carbon canvas behind three cross-fading cover videos, the floating glass navbar (brand lockup + links + red CTA), the diagonally scattered headline, the description paragraph, three diagonal stat cells, and the bottom fade into Carbon. This is the complete single-screen palette.

### Brand & Accent
- **Race Red** (`{colors.race-red}` #da291c): The single saturated accent — Zpeed's own motorsport-editorial red. Used **only** on the `{components.cta-red}` (`Get Tickets`) fill. Never on headlines, body, stat numbers, backgrounds, hairlines, or a second button. The `+58` race-wins stat is white, not red.
- **Race Red Pressed** (`{colors.race-red-pressed}` #b01e0a): The CTA `active:` state only — an instantaneous darken on press, no transition timing.

### Surface
- **Carbon** (`{colors.carbon}` #181818): The body background, the section background behind the videos, and the target of the bottom gradient. Near-black, **never** `#000` — the lift off pure black keeps footage from crushing. There is no surface ladder; the whole canvas is Carbon and the footage rides on top.
- **Glass Fill** (`{colors.glass-fill}` rgba(255,255,255,0.10), `bg-white/10`): The navbar background — semi-transparent white at 10% over the footage, paired with `backdrop-blur-2xl backdrop-saturate-150`.
- **Glass Border** (`{colors.glass-border}` rgba(255,255,255,0.20), `border-white/20`): The 1px hairline edge that makes the bar read as real liquid glass and not a wash.

### Text
- **White** (`{colors.white}` #ffffff): All primary type and marks — the scattered display headline, the logo fill, the brand wordmark, nav links, the CTA label, and all three stat numbers. White is the page's voice; the footage is its mood.
- **White / Soft** (`{colors.white-soft}` rgba(255,255,255,0.90), `text-white/90`): The description paragraph — one half-step down from pure white so the body copy sits *under* the headline without going grey.
- **White / Muted** (`{colors.white-muted}` rgba(255,255,255,0.70), `text-white/70`): The uppercase stat labels (`km/h top speed`, `laps led this season`, `race wins`) — quiet, instrument-panel, never invisible.
- **White / Hairline** (`{colors.white-hairline}` rgba(255,255,255,0.40), `bg-white/40`): The diagonal divider rules in the stat cells — the lightest structural line, present over footage but never loud.

### Semantic
None on this surface. There is no success / error / warning color and no overlay scrim — the only non-white, non-Carbon color is Race red, and it is an accent, not a status. The bottom fade is `from-transparent to-{colors.carbon}`, not a tint.

## Typography

### Font Family
- **Inter** — the **only** typeface, loaded from Google Fonts at four weights (400 / 500 / 600 / 700). It serves both display and body roles; the family change is silent because there is no family change. Fallback stack `Inter, -apple-system, system-ui, sans-serif`. The scattered headline is set at weight 500 (`font-medium`) with negative tracking; everything else is the same family at 400–700.
- There is no serif, no mono, and no second sans. The editorial feeling is carried by *placement and scale* — Inter, scattered and oversized — not by a display cut.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display}` (hero) | `text-[14vw]` → `md:text-[13vw]` | 500 | 1.05 | -0.02em | Scattered headline words (`Race` / `beyond` / `limits`) |
| stat-number | `text-4xl` → `md:text-5xl` (36→48px) | 700 | 1.0 | -0.02em | `+370` / `+1.2k` / `+58` |
| cta | 14px | 700 | 1.0 | 1.4px (uppercase) | `Get Tickets` |
| nav / brand | 13px | 600 | 1.0 | 0.65px (uppercase) | Brand `zpeed`, nav links |
| stat-label | 11px | 600 | 1.0 | 1.1px (uppercase) | Stat labels (`{colors.white-muted}`) |
| body | 14px | 400 | normal (~1.5) | 0 | Description paragraph |

### Principles
- **The headline is the page.** Keep it to the three scattered words; never consolidate them into one block or add a fourth word.
- **Negative tracking on display and numbers, never on body.** `-0.02em` on the headline and the stat numbers; body copy holds at 0.
- **Uppercase carries positive tracking.** Nav, CTA, and stat labels open to 0.65 / 1.4 / 1.1px — the one place tracking opens up, for an instrument-panel feel.
- **Weight discipline:** headline 500, body 400, nav/brand/labels 600, CTA and stat numbers 700. Never promote the headline above 500 or body above 400.
- **No italics anywhere.** Inter upright carries everything; the `+` prefix is part of the stat value, not a separate mark.

### Note on Font Substitutes
Inter is open-licensed and free — load it directly from Google Fonts in the `index.html` `<head>` (preconnect first), all four weights in one request, so **no substitute is needed**. The global stack already falls back to `-apple-system, system-ui, sans-serif` if Inter fails; accept slightly looser display setting in that case. Never substitute "a sans like Inter" — a near-Inter changes the scattered headline's optical width and breaks the inset geometry.

## Layout

### Spacing System
- **Base unit**: 8px. Steps: 4 / 8 / 16 / 24 / 32 / 48 / 64 / 96 / 128.
- **Tokens (front matter)**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 16px · `{spacing.md}` 24px · `{spacing.lg}` 32px · `{spacing.xl}` 48px.
- **Navbar inset**: `{spacing.navbar-inset-x}` (50px) in from both the left and right viewport edges, `{spacing.md}` (24px, `top-6`) from the top, at `{spacing.navbar-h}` (64px, `h-16`) tall.
- **CTA padding**: `px-8` horizontal at `h-12` (48px) tall. Navbar padding `px-4` mobile → `md:px-6` desktop.
- **Description column** caps at `{spacing.description-max}` (240px, `max-w-[240px]`) for a clean editorial measure.
- **Bottom fade**: `{spacing.bottom-fade}` (192px, `h-48`) of `from-transparent to-{colors.carbon}` gradient.
- **Tailwind v4 config-less**: there is no `tailwind.config.js`. Every spacing, color, and tracking value is applied as an **arbitrary-value utility** inline (`bg-[#181818]`, `left-[50px]`, `top-[18%]`, `tracking-[0.65px]`, `text-[14vw]`, `max-w-[240px]`, `h-48`) plus the small `src/index.css` (`@import "tailwindcss";`, the `body` rule, `.hero-title`). Treat the inline arbitrary values as the design tokens.

### Grid & Container
- Single-screen hero: a `relative h-screen w-full overflow-hidden` section. `html`, `body`, and `#root` are all `height: 100%` so `h-screen` fills the frame with no parent collapse. **No scroll** — exactly one viewport at every width.
- There is no centered column and no symmetric grid. The composition is a **scattered absolute layout**: each headline word, the description, and each stat cell is independently positioned by percentage/edge insets so the type reads as diagonally strewn across the broadcast frame.
- Layer order (DOM and z): video layer (`inset-0`) → navbar (`z-20`) → content stack (headline, description, stat cells) → bottom fade (`pointer-events-none`).

### Whitespace Philosophy
Whitespace here is the footage. The scattered words are deliberately spread so the moving background reads *between* them — the negative space is where the video lives. The headline diagonal (top-left → mid-right → lower-center) and the three corner-anchored stat cells frame the frame; crowd them and the footage becomes wallpaper and the red CTA loses its punch. Density is a deliberate refusal — the broadcast breathes.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow, no border | Default for all type, the stat cells, the headline, the description |
| 1 (glass edge) | 1px `{colors.glass-border}` hairline | The navbar pill edge only |
| 2 (glass lift) | `{colors.glass-fill}` + `backdrop-blur-2xl backdrop-saturate-150` + `{shadow.navbar-glass}` | The floating navbar pill only |
| Footage | Live video + the `{spacing.bottom-fade}` gradient into Carbon | The hero background; never a CSS drop shadow on content |

Zpeed's depth comes from three devices only: (1) the liquid-glass navbar (blur + saturate + inset highlight + outer shadow) floating over the footage, (2) the moving footage's own optical depth, and (3) the bottom fade that sinks the footage into Carbon. Drop shadows are banned everywhere except the one navbar glass shadow. A `box-shadow` under a stat cell, or a border on the stat cells, would immediately drag the page from motorsport-broadcast toward generic-SaaS.

### Decorative Depth
- **The three cross-fading cover videos** are the decorative depth — full-bleed footage carrying its own color and motion, no filter, no duotone, no overlay scrim.
- **The liquid-glass navbar** is the only synthetic surface — `inset 0 1px 0 rgba(255,255,255,0.25)` top highlight inside the pill, `0 8px 32px rgba(0,0,0,0.35)` cast below.
- **No atmospheric gradients on the type, no spotlight cards, no grain.** The single gradient is the bottom fade into Carbon.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.sharp}` | 0px | Everything by default — headline, stat cells, video frame, hairlines, description |
| `{rounded.pill}` | 9999px | The navbar pill and the `Get Tickets` CTA — the only rounded elements on the page |

The system is overwhelmingly **sharp-edged**. The only rounded shapes are the floating navbar (`rounded-full`) and the `Get Tickets` CTA pill (`rounded-full`, `h-12`). Stat cells, hairlines, and the video frame are all square. There is no card-radius and no input-radius — there are no cards and no inputs on this single screen.

### Photography & Illustration Geometry
- The background is **video, not stills** — three full-bleed cover loops, `object-cover` on `inset-0 w-full h-full`, cropped by the viewport. Any landscape footage works; no fixed pixel dimensions are imposed.
- The footage is the project's own motorsport material (3 clips). Treat it as the signature material; it is not stock and is not swappable.
- The diagonal stat hairlines (`h-px w-24`, `rotate-[20deg]` / `rotate-[-20deg]`, `{colors.white-hairline}`) are the only geometric drawing on top of the footage; they are `hidden md:block`.
- The `{components.chevron-logo}` renders at `h-5 w-5` (20px) with `aria-hidden="true"`, filled `{colors.white}`.

## Components

### Buttons

> Measured from the live build (`Navbar.tsx`): the Get Tickets CTA is the only filled button and the only red element on the page. The accent never appears twice.

**`cta-red`** — Race-red pill. The only filled button and the only red element on the page ("Get Tickets").
- Background `{colors.race-red}` (#da291c), text `{colors.white}`, type `{typography.body}` at weight 700 uppercase 14px with `1.4px` tracking, height 48px (`h-12`), padding `px-8`, rounded `{rounded.pill}`. No border, no shadow (the navbar carries the only shadow). Press: `active:bg-[#b01e0a]` → `{colors.race-red-pressed}`, an instantaneous swap, no transition timing.

**`nav-link`** — Text-only nav action within `{components.navbar}` ("Team", "Drivers", "Races", "Garage").
- Transparent, no border, text `{colors.white}`, weight 600 uppercase 13px with `0.65px` tracking, `href="#"`. The four links live `hidden md:flex` with `gap-10`; on mobile they disappear entirely (only logo + brand + CTA remain).

### Marks

**`chevron-logo`** — The single graphic on the page.
- A hand-authored inline `<svg viewBox="0 0 256 256" className="h-5 w-5" aria-hidden="true">` double-chevron (`»`, two right-pointing arrows reading as speed), filled `{colors.white}`. Path verbatim:
  ```
  M 40 32 L 144 128 L 40 224 L 40 164 L 80 128 L 40 92 Z M 136 32 L 240 128 L 136 224 L 136 164 L 176 128 L 136 92 Z
  ```
- No icon library, no second glyph — no hamburger, no social, no arrow icon.

**`wordmark`** — `zpeed`, white Inter weight 600 uppercase-rendered at 13px with `0.65px` tracking, sitting `gap-3` after the `{components.chevron-logo}`. The chevron + wordmark together are the brand lockup; do not add a separate mark.

### Cards & Containers

**`stat-cell`** — A repeated three-part module placed at three corners of the frame. There is no card chrome — no border, no fill, no elevation; the cell is type over footage.
- A row (`flex items-center gap-3`, justified to the cell's edge) holding a bold white number (`text-4xl md:text-5xl font-bold tracking-[-0.02em]`) and a diagonal hairline rule (`h-px w-24 bg-white/40`, rotated `20deg` or `-20deg`, `hidden md:block`).
- A label beneath (`text-[11px] font-semibold uppercase tracking-[1.1px] text-white/70 mt-1`), aligned to the cell's edge.
- The three instances, verbatim: **Top-right** (`right-6 md:right-24 top-[14%]`) hairline `rotate-[20deg]` then `+370` → `km/h top speed` (right-aligned); **Bottom-left** (`left-6 md:left-20 bottom-20 md:bottom-24`) `+1.2k` then hairline `rotate-[-20deg]` → `laps led this season`; **Bottom-right** (`right-6 md:right-20 bottom-16 md:bottom-20`) hairline `rotate-[-20deg]` then `+58` → `race wins` (right-aligned). All three numbers are white.

### Inputs & Forms
None on this surface. There are no text inputs, no search, and no form on the single-screen hero — the only interactive elements are the `{components.cta-red}` and the `{components.nav-link}` set. A real ticketing form would be a later-page decision (see Known Gaps).

### Navigation

**`top-nav`** (`{components.navbar}`) — A floating **liquid-glass** pill with the brand lockup (chevron + wordmark) left, the four nav links centered (`hidden md:flex gap-10`), and the `{components.cta-red}` right.
- `absolute top-6 left-[50px] right-[50px] z-20`, `flex h-16 items-center justify-between rounded-full`, `border border-white/20 bg-white/10 backdrop-blur-2xl backdrop-saturate-150`, `{shadow.navbar-glass}` shadow, `px-4 md:px-6`. Not sticky — it does not move on scroll (there is no scroll).

### Background

**`video-loop`** (`{components.video-loop}`) — The signature surface and the page's one piece of engineered motion.
- Three `<video>` elements stacked absolutely (`absolute inset-0 w-full h-full object-cover`); exactly one is visible at a time. `active` (React state) holds the visible index, starting at `0`. A `useRef<(HTMLVideoElement | null)[]>([])` holds the three DOM nodes. A `useEffect` keyed on `[active]` rewinds the now-active video (`currentTime = 0`) and calls `.play().catch(() => {})` (the empty catch swallows the autoplay-policy rejection). Each clip's `onEnded` advances the index: `setActive((a) => (a + 1) % videos.length)` — full natural duration per clip, **no timer**, advancing `1 → 2 → 3 → 1`.
- Visibility is **opacity-only**: active video `opacity-100`, the rest `opacity-0`, all sharing `transition-opacity duration-200`. The clip underneath is already buffered (`preload="auto"`), so the 200ms hand-off is a fast near-cut, not a slow dissolve. All three are `muted playsInline preload="auto"`; only the first gets `autoPlay`.

**`bottom-fade`** — A `pointer-events-none absolute bottom-0 left-0 right-0 h-48` gradient, `from-transparent to-[#181818]`, sinking the footage into Carbon at the bottom edge so low copy stays legible.

### Footer
Not present on the single-screen hero (one viewport, no scroll). For later pages, a footer should sit on `{colors.carbon}`, type in `{colors.white}` / `{colors.white-muted}`, links in the `{components.nav-link}` style (Inter 600 uppercase, `0.65px` tracking), and reserve Race red for nothing — keep the red rationed to action CTAs only.

## Do's and Don'ts

### Do
- Keep the canvas `{colors.carbon}` (#181818) — near-black, never `#000`; the slight lift is intentional.
- Ration `{colors.race-red}` to the single `{components.cta-red}` (and its `{colors.race-red-pressed}` press state) — nowhere else.
- Keep the `+58` race-wins stat and all stat numbers `{colors.white}`.
- Set the headline in Inter weight 500 with `-0.02em` tracking and 1.05 leading; keep it as the three scattered words.
- Let the `{components.video-loop}` (3 clips, 200ms opacity cross-fade, advancing 1→2→3→1) be the only motion.
- Use uppercase + positive tracking (0.65 / 1.4 / 1.1px) on nav, CTA, and stat labels.
- Reserve the `{shadow.navbar-glass}` shadow for the `{components.navbar}` pill only.
- Apply tokens as Tailwind v4 arbitrary-value utilities inline; there is no config file.

### Don't
- Don't spread the red onto a second button, the stat numbers, the headline, or any background — the rationing is the brand.
- Don't use `#000` true black as the canvas — Carbon is `#181818`.
- Don't introduce a second chromatic accent or a light theme.
- Don't put a gradient on the type; the only gradient is the bottom fade into Carbon.
- Don't add card borders or elevation on the stat cells, or any drop shadow other than the navbar glass shadow.
- Don't add scroll content — the page is exactly one viewport.
- Don't add a video controls bar, a play button, or a mute toggle; the videos are muted, auto-advancing background loops.
- Don't lengthen the 200ms cross-fade, add a fade/animation library, or add scroll reveals, counters, parallax, or stagger.
- Don't introduce a serif, a mono, or a second sans; Inter (400/500/600/700) is the only family.
- Don't swap the 3 cover videos for stock or other footage, and don't cut clips short with a timer.
- Don't use `bg-blue-500`-style AI-default accents or emoji.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < `md` (≤767px) | Headline `text-[14vw]`; words tuck to the edges (`left-4`, `right-4`, `left-[18%]`); nav links `hidden`, only logo + brand + CTA on the bar; navbar `px-4`; diagonal hairlines `hidden`; stat numbers `text-4xl`; stat cells at the tighter insets (`right-6`, `left-6`, `bottom-16`/`bottom-20`) |
| Desktop | ≥ `md` (768px+) | Headline `md:text-[13vw]`; words breathe inward (`md:left-10`, `md:right-10`, `md:left-[28%]`); nav links `md:flex`; navbar `md:px-6`; diagonal hairlines `md:block`; stat numbers `md:text-5xl`; stat cells shift inset (`md:right-24`, `md:left-20`, `md:bottom-24`) |

There is **one breakpoint that matters** (`md`); the layout flexes between mobile and desktop only. The page never scrolls — it is one viewport at every width. Only the headline size, the inset positions, the nav-link visibility, the hairline visibility, and the navbar padding flex.

### Touch Targets
- The `{components.cta-red}` is `h-12` (48px) with `px-8` — clears the 44×44 minimum comfortably.
- The navbar pill is `h-16` (64px); the brand lockup and CTA sit well inside it.
- On mobile the nav links are removed rather than shrunk, so no sub-44px tap targets are introduced.

### Collapsing Strategy
- **Nav links** (`Team / Drivers / Races / Garage`) are `hidden md:flex` — on mobile they disappear; only the logo + brand and the `Get Tickets` CTA remain. There is **no** hamburger menu (no icon library ships).
- **Scattered words and stat cells** shift inset at `md` (e.g. `left-4 md:left-10`, `right-6 md:right-24`, `bottom-20 md:bottom-24`) so they tuck toward the edges on mobile and breathe on desktop.
- **Diagonal divider hairlines** are `hidden md:block` — they appear only at `md` and up.
- **Display type** uses `text-[14vw]` → `md:text-[13vw]` — never a fixed display size.

### Image Behavior
- All three videos are `muted playsInline preload="auto"` so the next clip is buffered and never shows a black flash; only the first is `autoPlay`.
- `object-cover` crops landscape footage to the viewport at every width — no letterboxing, no fixed dimensions.
- The `{spacing.bottom-fade}` gradient sinks the footage into Carbon at the bottom edge at all widths.

## Iteration Guide

1. New page (schedule, drivers, team, garage)? Start from `{colors.carbon}` + Inter type + the `{components.navbar}`. The shell is the brand; later-page layouts are not specified by the single-screen hero — design them in the same near-black broadcast language.
2. Keep the red rule absolute — a new accent need is answered by `{colors.race-red}` on an action CTA, or by white/opacity tiers, never by a new color.
3. Reference components by their `components:` token name and apply tokens as Tailwind v4 arbitrary-value utilities inline (no config file to edit).
4. Document default / active only on the CTA; the system has essentially no hover (touch-first, the one press state is `active:bg-[#b01e0a]`). Do not add hover choreography.
5. Display vs body: Inter 500 + `-0.02em` for the scattered headline; Inter 400 for body; Inter 600/700 uppercase + positive tracking for nav/CTA/labels.
6. Depth restriction holds: it is the navbar glass + the footage + the bottom fade. A new surface that "needs depth" gets none of border, box-shadow, or a second glass bar without a documented reason — rethink the hierarchy instead.
7. Motion restriction holds: the 200ms video cross-fade is the whole system. A new motion need is answered by nothing, not by a new library.

## Known Gaps

- This is a **single-screen hero**; later-page layouts (schedule, drivers roster, team, garage, ticketing flow) are not specified — they must be designed in the same near-black motorsport language, not inferred from this one screen.
- **Form / input and validation states** (a real ticketing or sign-up form) are not surfaced here — there are no inputs on this single screen, so input radius, focus rings, and error styling are undefined.
- A **light counterpart is intentionally absent** — the brand is the near-black broadcast. If ever needed it requires its own governing decision, not a recolor of Carbon → white.
- **`prefers-reduced-motion` is not handled** in the build; a reduced-motion path (hold a poster frame, skip the cross-fade) would need to be added without introducing new motion.
- A **mobile navigation pattern** for the four links is undefined — on mobile they are simply removed (no hamburger, since no icon library ships). A real multi-page site would need a documented mobile-nav decision. Exact clip durations and any footer treatment on later pages are likewise undocumented.
