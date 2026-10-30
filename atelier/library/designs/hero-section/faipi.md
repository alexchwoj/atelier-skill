---
version: "1"
name: "Design System Inspired by FaiPi"
description: "FaiPi's canvas is pure black #000 behind a full-bleed looping background video — the video carries every drop of color and atmosphere, and the foreground stays strictly monochrome. There is no chromatic accent: every UI value is white, a white opacity, or near-black neutral-900 on the white pill buttons. The signature surface is a single full-screen cinematic stage; the page rhythm is a no-scroll hero with content gravity-pulled to the bottom — an Instrument Serif headline, a white pill CTA, and an infinite logo marquee — all floating above the video under a readability vignette."
colors:
  black: "#000000"          # page background, behind the video — the true canvas
  white: "#ffffff"          # primary text, wordmark, pill CTA fill
  white-70: "rgba(255,255,255,0.70)"  # aside paragraph + nav links
  white-75: "rgba(255,255,255,0.75)"  # marquee logo text
  white-60: "rgba(255,255,255,0.60)"  # "Trusted by teams at" label
  white-20: "rgba(255,255,255,0.20)"  # ghost-button hairline border
  neutral-900: "#171717"    # text on the white pills (cta-text) + arrow stroke #111
  ghost-fill: "rgba(0,0,0,0.30)"      # Watch Demo button surface + backdrop-blur-sm
  ghost-hover: "rgba(0,0,0,0.45)"     # Watch Demo hover surface
typography:
  serif: { fontFamily: "'Instrument Serif', Georgia, serif", weights: "400 (roman + italic loaded)", role: "the hero headline ONLY — font-normal, clamp(40px,6vw,86px), line-height 1.0" }
  sans:  { fontFamily: "Inter, system-ui, -apple-system, sans-serif", weights: "400, 500, 600", role: "everything else — nav, body, buttons, marquee, label" }
spacing:
  base: "4px"
  xs: "8px"                 # nav inner gaps (gap-2), watch-demo icon gap
  sm: "16px"                # pill horizontal padding floor, gap-4-class rhythms
  md: "20px"                # button horizontal padding (px-5)
  lg: "24px"                # page rail floor (px-6), CTA horizontal (px-6)
  xl: "40px"                # marquee per-logo right margin floor (mr-10)
  rail: "64px"             # page rail at lg (px-16)
  section: "64px"           # marquee top offset at lg (mt-16)
rounded:
  pill: "9999px"            # every button + the marquee is built on pill / full-round
  monolith: "5px"           # the optional cosmic-portal pillar (not mounted)
shadow:
  none: "Foreground UI carries NO drop shadow — depth is the video + vignette stack, not box-shadow"
  ghost-blur: "backdrop-blur-sm over rgba(0,0,0,0.30) — the only blur on the page, the Watch Demo pill"
components:
  pill-primary: "The white CTA — bg {colors.white}, text {colors.neutral-900}, Inter 500, rounded-full, px-5/px-6 py-2.5; hover:opacity-90, active:translate-y-px"
  pill-ghost: "Watch Demo — border {colors.white-20}, {shadow.ghost-blur}, white text, rounded-full px-4 py-2.5; hover bg {colors.ghost-hover}"
  wordmark: "8-point star SVG (18×18, fill #fff) + 'FaiPi' in Inter 600 at 18px, tracking-tight — the star IS the mark"
  vignette: "Two stacked black→transparent gradients (top 0.4→0 @26%, bottom 0.6→0 @42%) at z-[2], pointer-events-none — keeps white type legible over any video frame"
  marquee: "Infinite logo row — Inter, white/75, 28s linear translateX(0→-50%), pause-on-hover, edge-masked 6%/94%"
  vmask: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent) mask — fades the marquee in/out at both edges"
---

# Design System Inspired by FaiPi

## Overview

FaiPi's marketing canvas is the darkest surface in this collection — `{colors.black}` is true `#000`, sitting behind a **full-bleed looping background video** that is the actual protagonist of the page. The video carries all the color, motion, and cosmic atmosphere; the page reads as a cinematic stage, not a SaaS sheet. Onto that stage sit white type and white pill buttons, separated from the footage only by a `{components.vignette}` that darkens the top and bottom edges so the type stays legible over any frame the video happens to be on.

The foreground is **strictly monochrome by decision**. Every UI value is white, a white opacity, or one near-black: `{colors.white}` for primary text and the wordmark, `{colors.white-70}` for the aside paragraph and nav links, `{colors.white-75}` for the marquee logos, `{colors.white-60}` for the trusted-by label, `{colors.white-20}` for the one hairline border, and `{colors.neutral-900}` (`#171717`) for text on the white pills. There is **no accent color anywhere in the foreground UI**. **Most decision-intelligence and data-SaaS sites reach for bright dashboards, chart screenshots, and blue gradient accents to signal "intelligence" — FaiPi refuses all of it, holding a black cinematic video stage with strictly monochrome type and one serif headline, and letting the video carry every drop of color.**

Display type runs **Instrument Serif** at `font-normal` (weight 400), scaling fluidly via `clamp(40px, 6vw, 86px)` on a tight `1.0` line-height with `tracking-tight`, capped to a `max-w-[12ch]` measure so the headline wraps to a tall editorial block. It is the **only** element on the page set in serif — the single expressive move. Everything else is **Inter** at 400/500/600: the nav, the body aside, both pill labels, the marquee, and the label. The two faces stay two distinct voices and never blend.

The page rhythm is a **single full-screen hero — no scroll, no second section**. A `min-h-screen` flex column holds the nav pinned to the top and the hero body as a `flex-1` block that uses `justify-end` to gravity-pull all of its content to the **bottom** of the viewport: a Watch Demo ghost pill, then the headline-plus-aside row, then the logo marquee. The one piece of page-level motion is the marquee — a `{components.marquee}` of partner wordmarks scrolling left forever on a CSS keyframe, masked at both edges and paused on hover. (A pure-CSS "cosmic monolith" portal exists in the codebase but is **not mounted** — the video already carries the atmosphere.)

**Key Characteristics:**
- **Pure-black canvas behind a video** — `{colors.black}` `#000` is the page background; a full-bleed `object-cover` looping `<video>` fills the frame and carries all color.
- **Strictly monochrome foreground** — white, white opacities, and `{colors.neutral-900}` only; there is no chromatic accent anywhere in the UI.
- **Instrument Serif headline, alone** — `font-normal`, `clamp(40px,6vw,86px)`, line-height `1.0`, `max-w-[12ch]`; the only serif element on the page.
- **Inter carries everything else** at 400/500/600 — nav, aside body, pill labels, marquee, label.
- **Bottom-anchored content** — the hero body is `flex-1 justify-end`, pulling Watch Demo → headline/aside → marquee to the floor of the viewport.
- **The marquee is the only page-level motion** — `{components.marquee}` `28s linear` `translateX(0→-50%)`, edge-masked, pause-on-hover; no scroll reveals, parallax, or counters.
- **One vignette, no box-shadow** — `{components.vignette}` is the only depth device on the foreground; the single blur is `{shadow.ghost-blur}` on the Watch Demo pill.
- **Pill geometry throughout** — every button is `rounded-full`; corners elsewhere are effectively pill or square.
- No second typeface, no icon library (icons are inline SVG), no animation library (motion is CSS `@keyframes`), no colored accent, no scroll.

## Colors

> Source pages: the single full-screen FaiPi hero — pure-black canvas, the full-bleed background video, the top nav with the star wordmark, the bottom-anchored Watch Demo pill + serif headline + aside + Start Free pill, and the edge-masked logo marquee. The system is one viewport; there are no other live surfaces. All saturation lives in the video, not the token sheet.

### Brand & Accent
- **None.** FaiPi has **no chromatic accent token**. Where most systems declare a `primary`, FaiPi declares white. The "brand color" of the page is whatever the video is showing at that instant — the foreground deliberately holds zero saturated color so it never competes with the footage. This absence is the brand.

### Surface
- **Black** ({colors.black}): The page background — true `#000`, set on `body` and the hero `<section>` (`bg-black`). It is mostly hidden behind the video, but it is the canvas the video and vignette stack on, and it shows through at the very edges and on the briefest frame load. Never `#0a0a0a`, never a near-black tint — the canvas is true black.
- **Ghost-fill** ({colors.ghost-fill}): A black at 30% opacity (`bg-black/30`) plus `backdrop-blur-sm` — the surface of the single ghost button. It darkens the video behind the Watch Demo pill just enough to read white text, then lifts to `{colors.ghost-hover}` (`bg-black/45`) on hover.

### Text
- **White** ({colors.white}): Primary type — the headline, the wordmark, the nav `Sign in` link, both pill labels (on the white fill it inverts to `{colors.neutral-900}`). `#ffffff`, full strength, the brightest layer over the video.
- **White-70** ({colors.white-70}): The aside paragraph and the center nav links (`text-white/70`) — the supporting voice, one step down from primary, lifting to full white on nav hover.
- **White-75** ({colors.white-75}): The marquee logo row (`text-white/75`) — slightly brighter than the body to keep the wordmarks crisp as they scroll.
- **White-60** ({colors.white-60}): The "Trusted by teams at" label (`text-white/60`) — the quietest type on the page, a caption register.
- **Neutral-900** ({colors.neutral-900}): `#171717` — text on the white pill buttons (`text-neutral-900`), the one place type goes dark because the surface goes white. The Start-Free arrow SVG strokes a hair darker at `#111`.

### Hairline
- **White-20** ({colors.white-20}): The single hairline on the page — `border-white/20` on the Watch Demo ghost pill (`rgba(255,255,255,0.20)`). There are no dividers, no card borders, no rules anywhere else.

### Semantic
None on the marketing surface. No success / error / warning / overlay colors are present on the single hero. The only "overlay" device is the `{components.vignette}` — two black→transparent gradients that exist for legibility, not state. Semantic colors would have to be introduced for later forms (see Known Gaps), and would need to survive sitting over a video.

## Typography

### Font Family

- **Instrument Serif** — the display serif; fallback stack `'Instrument Serif', Georgia, serif`, exposed as `--font-serif` in the Tailwind v4 `@theme` block. Loaded from Google Fonts with **both roman and italic** (`ital@0;1`), though only the roman is used in the build. It carries the masthead headline **and nothing else**, at `font-normal` (400). This is the one expressive face on the page.
- **Inter** — the body and UI sans; fallback stack `Inter, system-ui, -apple-system, sans-serif`, exposed as `--font-sans` and set on `body`. Loaded at weights 400 / 500 / 600. It carries the nav, the wordmark (600), the aside paragraph, both pill labels (500), the marquee (500/600 per logo), and the trusted-by label. Antialiased (`-webkit-font-smoothing: antialiased`).

The page treats serif and sans as two separate voices: Instrument Serif is the cinematic protagonist, Inter is the quiet operator. They never blend into one continuous voice — the contrast (one big serif line against an all-Inter UI) is the point.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.serif}` (headline) | clamp(40px, 6vw, 86px) | 400 | 1.0 | tracking-tight (≈ -0.025em) | The hero `<h1>` — Instrument Serif, `max-w-[12ch]` |
| `{typography.sans}` (wordmark) | 18px | 600 | 1.2 | tracking-tight | Brand `FaiPi` next to the star (Inter) |
| `{typography.sans}` (aside) | 15px | 400 | relaxed (≈1.625) | 0 | The aside paragraph (Inter, white/70) |
| `{typography.sans}` (nav) | 14px (`text-sm`) | 400 | 1.2 | 0 | Center nav links + `Sign in` (Inter, white/70 → white) |
| `{typography.sans}` (button) | 14px (`text-sm`) / inherited | 500 | 1.2 | 0 | Pill CTA + ghost pill labels (Inter) |
| `{typography.sans}` (logo) | 20px → 23px (`text-[20px] lg:text-[23px]`) | 500 / 600 | 1.2 | tracking-tight | Marquee wordmarks (Inter, white/75; weight varies per logo) |
| `{typography.sans}` (label) | 13px (`text-[13px]`) | 400 | 1.2 | 0 | "Trusted by teams at" (Inter, white/60) |
| `{typography.sans}` (h2) | 40px | 500 | 1.15 | -0.01em | Section heads on later pages (estimated) |
| `{typography.sans}` (body) | 16px | 400 | 1.6 | 0 | Long-form copy on later pages (estimated) |

### Principles

- **The headline is the page.** One serif line (wrapping to a tall block at `max-w-[12ch]`), `font-normal`, line-height `1.0`. Instrument Serif carries it alone — no other element is serif.
- **Tracking is tight on display, neutral on UI.** The headline, wordmark, and marquee logos all use `tracking-tight`; nav, body, and labels stay neutral. There is no wide-tracked eyebrow on this page.
- **Inter does the work in three weights.** 400 for body/nav/label, 500 for pill labels and most marquee logos, 600 for the wordmark and the heavier logos. There is no weight above 600.
- **Opacity is the type scale for white.** Instead of color steps, FaiPi steps white down by opacity — 100 → 75 → 70 → 60 — to set hierarchy over the video. Reach for an opacity, not a grey.
- **The serif never appears in the UI**, and Inter never appears in the headline. The line between the two faces is absolute.

### Note on Font Substitutes

FaiPi uses no licensed typeface. **Instrument Serif** and **Inter** are both open-licensed on Google Fonts — load them directly via the `css2` link (`Inter:wght@400;500;600` + `Instrument+Serif:ital@0;1`), no substitution required. If Instrument Serif is ever unavailable, the documented fallback `Georgia` is the recommended substitute for the headline — accept a heavier, less cinematic display. Do not introduce a commercial serif or a second sans; the open pair is the system of record.

## Layout

### Spacing System

- **Base unit**: 4px (Tailwind scale).
- **Tokens (front matter)**: `{spacing.xs}` 8px · `{spacing.sm}` 16px · `{spacing.md}` 20px · `{spacing.lg}` 24px · `{spacing.xl}` 40px · `{spacing.rail}` 64px · `{spacing.section}` 64px.
- Page rail: horizontal padding scales `px-6 sm:px-10 lg:px-16` (24 → 40 → 64px); vertical `pt-6 lg:pt-7` top and `pb-7 lg:pb-10` bottom. The whole hero lives inside this rail.
- Pill padding: primary CTA `px-5/px-6 py-2.5` (20–24px × 10px); ghost pill `px-4 py-2.5` (16px × 10px).
- Nav gaps: brand `gap-2` (8px); center links `gap-7 lg:gap-9` (28 → 36px); right actions `gap-5` (20px).
- Hero row gap: `gap-8 md:gap-16 lg:gap-24` (32 → 64 → 96px) between the headline and the aside column.
- Marquee: container `gap-6 lg:gap-10` (24 → 40px) between label and track; per-logo `mr-10 lg:mr-16` (40 → 64px); marquee top offset `mt-10 lg:mt-16` (40 → 64px).

### Grid & Container

- **Single-screen hero**: a `min-h-screen` flex column inside the section — nav pinned top, hero body `flex-1 justify-end` filling the rest and pushing its children to the floor. No scroll on the home screen.
- The hero body row is `flex flex-col md:flex-row md:items-end md:justify-between` — a stacked column on mobile that becomes a baseline-aligned (`items-end`) two-column row at `md`: the headline on the left, the aside (`md:max-w-[360px] shrink-0`) on the right.
- The headline caps its measure at `max-w-[12ch]`; the aside caps at `360px`. There is no central `max-w` container — the content spans the full rail width and is split by the row, not centered.
- Later pages would inherit the same rail (`px-6 sm:px-10 lg:px-16`) over black; design content blocks left-aligned, never centered in a fixed column (estimated).

### Whitespace Philosophy

Whitespace here is the dark video itself. By pulling all content to the bottom (`justify-end`), FaiPi leaves the entire upper two-thirds of the frame to the footage — that emptiness is what makes the page feel cinematic rather than crowded. The vignette deepens the top and bottom so the content sits in a pool of legibility while the middle breathes. Negative space is what lets the single serif headline and the white pills register against the moving color; fill the frame and the video stops reading as the protagonist.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow, no border | Default for all type, the nav, the headline |
| 1 (hairline) | 1px `{colors.white-20}` border | The Watch Demo ghost pill only |
| 2 (vignette) | `{components.vignette}` — two black→transparent gradients at `z-[2]` | The readability layer between video and content |
| 3 (blur) | `{shadow.ghost-blur}` — `backdrop-blur-sm` over `bg-black/30` | The Watch Demo pill surface |
| 4 (video) | The full-bleed `<video>` at `z-0` | The atmospheric stage carrying all color and motion |

FaiPi's depth is carried by the **z-stack over the video**, not by box-shadows: video `z-0` → vignette `z-[2]` → all content `z-10`. There is **no drop shadow anywhere** on the foreground UI. The only blur is the ghost pill's backdrop. The brand resists box-shadow entirely — a shadowed card would immediately pull the page from cinematic-stage toward generic dark-SaaS.

### Decorative Depth

- **The background video** is the decorative depth — full-bleed `object-cover`, looping, muted, the source of every color on the page.
- **The vignette** is the only foreground depth device — a top-and-bottom darkening that frames the content without a visible edge.
- **No atmospheric gradients on the UI, no glass cards, no glow, no grain.** (A pure-CSS "cosmic monolith" portal — nebula + drifting stars + shimmer + glow + reflection — exists in `index.css`/`Monolith.jsx` but is **not mounted**; the video replaces it.)

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.monolith}` | 5px | The optional cosmic-portal pillar (not mounted) |
| `{rounded.pill}` | 9999px | Every button (`rounded-full`) and the conceptual shape of the marquee |

FaiPi's radius vocabulary is effectively binary: **pill or nothing**. Both pill buttons and the wordmark cluster round to `rounded-full`; the section, the video, and the headline are square-edged. There is no card radius because there are no cards.

### Photography & Illustration Geometry

- The hero "image" is a **looping background video**, full-bleed `object-cover` so it always fills the frame regardless of viewport ratio, `z-0`, with `autoPlay loop muted playsInline preload="auto"`. It is never letterboxed or contained.
- The only inline graphics are **SVG icons drawn in white**: the 8-point star in the wordmark (`18×18`, `fill="#fff"`), the play triangle in Watch Demo (`12×12`), the right-arrow in Start Free (stroke `#111` on the white pill), and a small filled triangle beside one marquee logo. All are inline SVG — no icon library.
- The marquee wordmarks are **type, not logo images** — set in Inter at 20–23px, weight varying per brand, so the row stays crisp and recolorable with the rest of the system.
- On later pages, hold any imagery to the same cinematic register: full-bleed or generously framed over black, monochrome UI on top.

## Components

### Buttons

> Measured from the live build: there are three button surfaces — two white pills (one in nav, one in the aside) and one ghost pill (Watch Demo). All are `rounded-full`.

**`pill-primary`** ({components.pill-primary}) — The white CTA ("Start Free"). Appears twice: top-right of the nav and at the foot of the aside.
- Background `{colors.white}`, text `{colors.neutral-900}`, Inter weight 500 (`font-medium`), padding `px-5 py-2.5` (nav) / `px-6 py-2.5` (aside), `rounded-full`. No border, **no shadow**. The aside instance carries a 15px right-arrow SVG after the label (`gap-2`, stroke `#111`). Hover `opacity-90`; active `translate-y-px` (a 1px press). The only filled buttons on the page.

**`pill-ghost`** ({components.pill-ghost}) — The secondary action ("Watch Demo"), `self-start mb-6` above the headline row.
- Surface `{colors.ghost-fill}` (`bg-black/30`) + `{shadow.ghost-blur}` (`backdrop-blur-sm`), 1px `{colors.white-20}` border, white text, Inter 500, padding `px-4 py-2.5`, `rounded-full`. Leads with a 12px play-triangle SVG (`gap-2`). Hover lifts the surface to `{colors.ghost-hover}` (`bg-black/45`); active `translate-y-px`. The one glass element on the page.

**`nav-link`** — The ghost text actions: the center nav links and `Sign in`.
- Transparent, no border, Inter `text-sm`. Center links sit at `{colors.white-70}` and brighten to full white on hover; `Sign in` sits at white and softens to `white/80` on hover. `transition-colors` only.

### Marks & Accents

**`wordmark`** ({components.wordmark}) — The logo, top-left of the nav.
- An inline **8-point star** SVG (`18×18`, `fill="#fff"`) + `FaiPi` in Inter weight 600 at 18px, `tracking-tight`, `gap-2`. The star IS the mark — do not add a separate logotype or a colored glyph.

### Background & Stage

**`vignette`** ({components.vignette}) — The readability layer between the video and the content.
- A `pointer-events-none` div at `z-[2]` carrying two stacked gradients: top `linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 26%)` and bottom `linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 42%)`. It darkens only the top and bottom so the nav and the bottom-anchored content stay legible over any video frame, leaving the middle clear. Tune these two stops if a new video is brighter — never add a full-screen scrim.

**`video-bg`** — The full-bleed looping background.
- `<video>` at `absolute inset-0 z-0 h-full w-full object-cover`, `autoPlay loop muted playsInline preload="auto"`. Served from the Fivefold CDN in the prompt (`cdn.5sdesign.art/projects/faipi/hero.mp4`); a local `public/hero.mp4` mirrors it in the build. It is the source of all color — never swap it for a static placeholder.

### Signature — Logo Marquee

**`marquee`** ({components.marquee}) — The page's single piece of motion, at the foot of the hero.
- A static label "Trusted by teams at" (`{colors.white-60}`, 13px) sits left of a `.marquee-mask` container. Inside, a `.marquee-track` row of partner wordmarks (set in Inter, `{colors.white-75}`) is repeated **4×** so a `translateX(0 → -50%)` shift loops seamlessly — `marquee 28s linear infinite`, `will-change: transform`. The track **pauses on hover** of the masked container (`animation-play-state: paused`). Each wordmark is `mr-10 lg:mr-16` apart at `text-[20px] lg:text-[23px]`, `tracking-tight`, weight per logo; one carries a small filled-triangle SVG. Treat this as the only page-level motion — never add scroll animation or a second moving element to compete with it. (Wordmarks are generic partner names — e.g. Northwind, Cadence, Quanta, Lumen, Orbit, Vela, Strate — and are placeholder; swap freely.)

**`vmask`** ({components.vmask}) — The edge fade on the marquee.
- `mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)` (and the `-webkit-` twin) on `.marquee-mask` — fades the wordmark row in and out at both edges so logos appear and disappear softly instead of clipping at the container boundary.

### Navigation

**`top-nav`** — A `relative z-10` bar, **not sticky**, pinned to the top of the hero column.
- `flex items-center justify-between gap-6`. The `{components.wordmark}` sits left; the center holds the four links (`hidden md:flex`, `{colors.white-70}`); the right holds `Sign in` + a `{components.pill-primary}` "Start Free". No background of its own — it floats directly over the video, relying on the top vignette stop for contrast.

### Footer & Forms (later pages)

Not present on the single hero. A footer, contact form, input, focus, and validation styling would have to be introduced for later pages in the same cinematic-monochrome language — black canvas (or video), Inter 400 body, white type stepped by opacity, white-20 hairlines, white pill CTAs, and any focus state expressed as a white ring rather than a colored one (see Known Gaps).

## Do's and Don'ts

### Do

- Keep `{colors.black}` (`#000`) as the canvas and let the full-bleed `<video>` carry every drop of color.
- Hold the foreground strictly monochrome — white, white opacities, and `{colors.neutral-900}` on the pills, nothing else.
- Set the headline in Instrument Serif `font-normal`, line-height `1.0`, `clamp(40px,6vw,86px)`, `max-w-[12ch]` — the only serif on the page.
- Step white by **opacity** (100 / 75 / 70 / 60) to build hierarchy over the video.
- Anchor content to the bottom with `flex-1 justify-end`, leaving the upper frame to the footage.
- Keep the `{components.vignette}` (top 0.4→0 @26%, bottom 0.6→0 @42%) as the only foreground depth device.
- Let the `{components.marquee}` (`28s linear`, pause-on-hover, edge-masked) be the only page-level motion.
- Build every button as `rounded-full`; keep icons inline SVG and motion CSS `@keyframes`.

### Don't

- Don't add any colored accent to the foreground UI — no blue, no gradient pill, no chromatic glow; color comes from the video only.
- Don't swap the background video for a static image or placeholder — it is the protagonist.
- Don't introduce a second typeface or set the headline in Inter; Instrument Serif is the headline alone.
- Don't put the serif anywhere in the UI, or Inter in the headline — the line between the faces is absolute.
- Don't add a `box-shadow` to any foreground element; depth is the video + vignette z-stack.
- Don't add a full-screen scrim over the video — the vignette darkens edges only, by design.
- Don't add scroll reveals, entrance animations, parallax, or counters competing with the marquee.
- Don't mount real company logos as the brand of record — the marquee wordmarks are generic, swappable partner names.
- Don't bring in an icon library (lucide/heroicons) or an animation runtime (Framer Motion) — inline SVG and CSS keyframes only.
- Don't use `bg-blue-500`-style AI-default accents anywhere on the page.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Phone | <768px (`< md`) | Nav center links hidden (`hidden md:flex`); brand + `Sign in`/`Start Free` stay on one row; hero body stacks to a column (`flex-col`); headline at/near the `clamp` floor (40px); rail `px-6` |
| Tablet / sm | 640–767px | Rail opens to `px-10`; headline scales by `6vw`; content still column-stacked until `md` |
| Desktop | 768–1023px (`md`) | Hero row becomes a baseline-aligned two-column (`md:flex-row md:items-end md:justify-between`); aside caps at `360px`; nav links appear; gap `md:gap-16` |
| Wide | ≥1024px (`lg`) | Rail at `px-16`; nav gaps `lg:gap-9`; headline approaches the 86px cap; hero gap `lg:gap-24`; marquee `mt-16`, logos `text-[23px]`, `mr-16` |

### Touch Targets

- Both pill paddings (`py-2.5` ≈ 40px tall with line-height) and the ghost pill clear the ≥44px tap target comfortably with their horizontal padding.
- The marquee pauses on `:hover`; on touch there is no hover, so the row simply keeps scrolling — acceptable for a decorative band.
- Nav links and `Sign in` are text-only but sit in a `gap-5/gap-7` row that keeps their tap zones from overlapping.

### Collapsing Strategy

- **The home screen never scrolls** — it is one `min-h-screen` viewport at every width; only the headline `clamp`, the rail padding, and the row direction flex.
- **Nav**: the center links collapse to nothing below `md` (no hamburger in the build); the brand and right actions hold. A later fuller nav would need a sheet/menu at narrow widths.
- **Hero row**: column on mobile → baseline-aligned two-column at `md`. **Display type**: `clamp(40px,6vw,86px)` does all the scaling — never a fixed display size.

### Image Behavior

- The background `<video>` is always `object-cover` so it fills the frame at any ratio; it is never letterboxed. Provide a poster or keep `#000` behind it for the load frame.
- The vignette holds its two gradient stops at every width — re-tune them only if the video itself changes brightness.
- Respect `prefers-reduced-motion`: the global guard already stops the marquee (`.marquee-track { animation: none }`) and the optional monolith animations; the looping video should be paused or swapped for a still frame under the same query.

## Iteration Guide

1. New page (pricing, solutions, contact)? Start from `{colors.black}` (or a video stage) + an Instrument Serif headline + Inter body. The black-stage shell is the brand.
2. Keep the monochrome rule absolute — a new "accent need" is answered by a white opacity or by the video, **never** by a new color. Introducing any saturated UI color requires its own governing decision.
3. Reference everything by token name — `{colors.x}`, `{rounded.x}`, `{typography.x}`, `{components.x}` — so a value change cascades.
4. Decide first which device carries any new depth: the video, the vignette, or the ghost blur. A surface that "needs depth" gets a vignette tweak or a backdrop-blur — never a box-shadow.
5. Display vs UI stays a hard line: Instrument Serif `font-normal` + tight tracking for the one headline; Inter 400/500/600 for everything else.
6. Treat the video as the only color source — every new section over it must keep the foreground white-and-near-black, and must add a vignette if the footage threatens legibility.
7. Keep the marquee the single motion primitive; any new "movement" should be reconsidered before it competes with it.

## Known Gaps

- This is a **single hero with no scroll** — there is no second section, no pricing, solutions, footer, or content body to measure. The h2/body rows in the type table and all later-page guidance are estimated; design them in the same black-stage / Instrument-Serif-headline / Inter-body / monochrome language.
- **There is no bespoke color palette** to document — the foreground is intentionally monochrome and all color is delegated to the background video, which is an external asset, not a token. A different video changes the entire chromatic feel of the page without changing a single token.
- **Form / input and validation states** (error, success, disabled, focus) are not surfaced on the analyzed screen; semantic colors and a focus treatment would have to be introduced, and would need to survive sitting over a video (likely a white ring rather than a colored one).
- **Motion is a single primitive** — the logo marquee. There is no scroll-driven motion, parallax, or entrance system to extend; a richer motion language would be a new decision, not an extrapolation.
- The **nav links, both `Start Free` buttons, `Sign in`, and `Watch Demo`** point to `#` placeholders, and the marquee wordmarks are generic stand-ins — routing, real destinations, and real partner logos are out of scope for this hero.
- The **cosmic-monolith** block (nebula / stars / shimmer / glow / reflection) lives in `index.css` and `Monolith.jsx` but is **not mounted**; it is a documented optional accent, not part of the rendered system, and its colored gradients would break the monochrome rule if layered in without a governing decision.
