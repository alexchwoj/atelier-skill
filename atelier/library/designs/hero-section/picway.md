---
version: "1"
name: "Design System Inspired by Picway"
description: "Editorial-daylight photo-memory hero on a Pure White canvas (#ffffff) with near-black Ink type (#17191c). The single chromatic rest is an Apricot Wash dawn glow (#fbe1d1) behind a literary serif headline; below it, one full-bleed draggable WebGL ring of memory cards (ogl) loops infinitely. The page rhythm is daylight stillness + one warm wash + one piece of living motion — exactly one filled Ink pill per screen, no hero CTA."
colors:
  ink: "#17191c"             # primary type, logo stroke, the single filled CTA fill
  pure-white: "#ffffff"      # canvas — page, navbar, mobile sheet
  fog: "#f7f7f8"             # secondary surface / hover fill (mobile link hover)
  ash: "#4c4c4c"             # secondary body — the hero subtitle
  graphite: "#777b86"        # tertiary text (reserved — unplaced in build)
  dove: "#a3a6af"            # hairline borders / dividers
  slate: "#8b8c8d"           # muted text (reserved — unplaced in build)
  rust: "#5d2a1a"            # warm dark accent (reserved — unused in build)
  apricot-wash: "#fbe1d1"    # the hero dawn glow — hero only, the single warm rest
  sky-wash: "#d3e3fc"        # cool wash counterpart (reserved — unused in build)
typography:
  display: { fontFamily: "'Source Serif 4', Georgia, serif", weights: "400, 600", role: "literary hero headline only — set at weight 400, 1.08 line-height (Tailwind class font-signifier)" }
  body:    { fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", weights: "400, 500, 600, 700, 800", role: "subtitle, nav, wordmark, buttons, gallery labels — ceiling 600 (Tailwind class font-sohne)" }
spacing:
  base: "4px"
  content-rail: "1200px"     # max-w-[1200px] with px-5 sm:px-8 (20px → 32px gutters)
  headline-max: "720px"      # the centered headline stack cap
  subtitle-max: "560px"      # the subtitle measure cap
  navbar-height: "68px"      # fixed at every width
rounded:
  images: "12px"             # --radius-images — photo frames on later pages
  inputs: "16px"             # --radius-inputs — token only; no form in hero
  cards: "24px"              # --radius-cards / rounded-card — cards & panels
  pill: "9999px"             # CTA pill, circular close button
shadow:
  steep: "rgba(4,23,43,0.05) 0 0 0 1px, rgba(0,0,0,0.1) 0 20px 25px -5px, rgba(0,0,0,0.1) 0 8px 10px -6px"   # signature 3-layer card shadow — reserved for elevated surfaces; hero stays flat
  sheet: "-12px 0 48px rgba(23,25,28,0.12)"   # the mobile slide-in sheet only
components:
  cta-pill: "Ink pill — bg {colors.ink}, white Inter 500 label 15px, rounded {rounded.pill}, px-5 py-2, lifts -translate-y-0.5 on hover. The ONLY filled button per screen."
  nav-link: "Ghost link — Inter 500 15px {colors.ink}, no fill/border, hover:opacity-60."
  navbar: "Sticky bg-pure-white/85 + backdrop-blur-md, border-b border-dove/40 hairline, h-[68px], logo + 5 links + Ink pill."
  mobile-menu: "Right-side AnimatePresence slide-in sheet, bg-pure-white, {shadow.sheet}, staggered links."
  logo: "Line-art photo frame with a sun + mountains, {colors.ink} stroke, inline SVG."
  apricot-glow: "Radial dawn wash behind the headline — radial-gradient rgba(251,225,209,0.62)→0, hero only."
  circular-gallery: "Full-bleed draggable WebGL (ogl) ring of 8 memory cards, infinite loop — the page's only continuous motion."
---

# Design System Inspired by Picway

## Overview

Picway's marketing canvas is the brightest surface in this collection — `{colors.pure-white}` is #ffffff, pure daylight white with no tint and no gradient. There is no surface ladder: the page, the navbar (at 85% opacity with backdrop blur), and the mobile sheet are all the same white. Near-black Ink (`{colors.ink}` #17191c) carries every mark — headline, nav links, wordmark, button labels, gallery card labels, and the logo stroke. Body text drops to Ash (`{colors.ash}` #4c4c4c) for the subtitle; structure is drawn with a single Dove (`{colors.dove}` #a3a6af) hairline.

The single chromatic rest is the **Apricot Wash dawn glow** `{colors.apricot-wash}` (#fbe1d1) — a radial wash painted behind the headline at `rgba(251,225,209,0.62)` fading to transparent, used **only** in the hero. It is never a fill, never a text color, never repeated. Every other warm or cool tone in the token set — Rust (`{colors.rust}` #5d2a1a), Sky Wash (`{colors.sky-wash}` #d3e3fc) — is held in reserve and unplaced in the build.

Display type runs a literary optical serif — Source Serif 4 (optical 8–60) via the `font-signifier` family — set at **weight 400** with a tight `1.08` line-height and `-0.025em` tracking. The body voice is Inter via `font-sohne`, restrained to a ceiling of weight 600 (the wordmark), with a global `-0.009em` letter-spacing on the whole page. The serif is the one expressive face; Inter is silent infrastructure.

The page rhythm is **daylight stillness + one warm wash + one piece of living motion.** The hero leads with a centered serif headline over the Apricot glow, a quiet Inter subtitle, and below them a full-bleed WebGL ring of eight memory cards (built on `ogl`) that the visitor drags or scrolls to rotate; it snaps to the nearest card and loops infinitely. The gallery is the only continuous motion on the page — everything else holds still and lets the type, the warm wash, and the rotating ring carry the mood. There is exactly **one** filled button per screen (the Ink `Start for free` pill in the navbar); there is no hero CTA.

The governing decision: **most photo and cloud-storage sites go dark, chrome-heavy, and gradient-saturated to feel "premium" — Picway refuses the dark UI, refuses a second accent, and refuses elevation in the hero, leading instead with pure daylight, one apricot wash, and a single WebGL gallery doing all the talking.** Depth is almost entirely absent: the signature three-layer `{shadow.steep}` is kept in the token set but the hero itself is flat. The result reads as a product confident enough to be quiet.

**Key Characteristics:**
- **Light-canvas marketing system** — `{colors.pure-white}` (#ffffff) is pure daylight white; no gradient on the page background, no dark hero.
- **Literary serif display at weight 400** — Source Serif 4 (`font-signifier`) at `1.08` line-height and `-0.025em` tracking; the one expressive face.
- **Restrained Inter body** (`font-sohne`) — global `-0.009em` letter-spacing, ceiling weight 600 (the wordmark), working weight 500 (nav, buttons).
- **One warm rest** — the Apricot dawn glow (`{colors.apricot-wash}` #fbe1d1), a radial wash behind the headline, hero only and rationed to near-zero.
- **One filled button per screen** — the Ink `{components.cta-pill}`; no hero CTA, no second filled action.
- **A full-bleed WebGL ring** of 8 memory cards (`{components.circular-gallery}`, `ogl`) is the page protagonist and the only continuous motion.
- **Flat hero, hairline structure** — depth is the blurred white navbar chrome + the soft `{shadow.sheet}`; `{shadow.steep}` is reserved, never painted on hero text.
- No second chromatic accent, no surface ladder, no atmospheric gradient, no card borders or elevation in the hero, no `bg-blue-500`-style AI-default accents.

## Colors

> Source pages: the single-screen Picway hero — sticky white navbar (logo + 5 links + Ink pill), the centered headline + subtitle stack with the Apricot dawn glow, the full-bleed WebGL gallery, and the mobile slide-in sheet.

### Brand & Accent
- **Apricot Wash** (`{colors.apricot-wash}`): The single warm note — a radial *dawn glow* behind the headline (`{components.apricot-glow}`), painted at `rgba(251,225,209,0.62)` fading to transparent. Used **only** in the hero, never as a fill, text color, or second-page accent. This restraint is the brand.

### Surface
- **Pure White** (`{colors.pure-white}`): Default page background — #ffffff, pure daylight white with no tint. The whole page, the navbar (at 85% opacity with `backdrop-blur-md`), and the mobile sheet are Pure White. No gradient, never dark.
- **Fog** (`{colors.fog}`): The only secondary surface — #f7f7f8, a barely-there off-white used as the hover fill on mobile menu links (`hover:bg-fog`). A hover tone, not a card background.

### Text
- **Ink** (`{colors.ink}`): All headlines, nav links, wordmark, button labels, gallery card labels, and the logo stroke — near-black #17191c with a faint cool cast. Also the fill of the single CTA pill.
- **Ash** (`{colors.ash}`): Secondary body at #4c4c4c — the subtitle under the headline. Quiet, not invisible.
- **Graphite** (`{colors.graphite}`): Tertiary text at #777b86. Reserved — present in the token set, unplaced in the hero (see Known Gaps).
- **Slate** (`{colors.slate}`): A muted text tone at #8b8c8d, held in reserve. Reserved — unplaced in the hero (see Known Gaps).

### Hairline
- **Dove** (`{colors.dove}`): The lightest structural line at #a3a6af — the navbar's bottom border (at 40% opacity, `border-dove/40`) and the mobile sheet's divider (at 50%, `bg-dove/50`).

### Reserved (do not promote)
- **Rust** (`{colors.rust}`): A warm dark accent at #5d2a1a held in the token set. Unused in the build; reserve for a single deliberate warm mark on a later page, never as a second accent.
- **Sky Wash** (`{colors.sky-wash}`): A cool wash counterpart to Apricot at #d3e3fc. Unused; a second wash needs its own governing decision, not a casual swap onto the hero glow.

### Semantic
None on the marketing surface. There are no success / error / overlay colors in the build — the mobile backdrop is a neutral `rgba(23,25,28,0.35)` Ink scrim, not a semantic tone.

## Typography

### Font Family
- **Source Serif 4** — a literary optical serif (optical axis 8–60), registered as the Tailwind family `font-signifier`; fallback `Georgia, serif`. Carries the masthead headline **only**, set at weight 400. This is the one expressive face on the page.
- **Inter** — the quiet sans, registered as `font-sohne`; fallback `ui-sans-serif, system-ui, sans-serif`. Carries the subtitle, nav links, wordmark, buttons, and the gallery's canvas labels. Ceiling weight is 600 (the wordmark); working weight is 500 (nav, buttons). The whole body voice carries a global `-0.009em` letter-spacing.
- **Gallery labels** — drawn onto the WebGL planes at `bold 30px Inter`, the same body family rendered to a 2D canvas texture inside the gallery component.

The Tailwind families are named `font-signifier` and `font-sohne` for legacy token parity; they resolve to Source Serif 4 and Inter respectively. Keep the class names; only the resolved families matter.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display}` (hero) | clamp(2.5rem, 7vw, 4.75rem) | 400 | 1.08 | -0.025em | Masthead headline (Source Serif 4) |
| display | 90px (`--text-display`) | 400 | ~1.05 | -0.025em | Section openers on later pages (extrapolated) |
| heading-lg | 64px (`--text-heading-lg`) | 400/600 | ~1.10 | -0.02em | Large later-page heads (extrapolated) |
| heading | 44px (`--text-heading`) | 600 | ~1.15 | -0.015em | Sub-section heads (extrapolated) |
| heading-sm | 26px (`--text-heading-sm`) | 600 | ~1.25 | -0.01em | Card / list titles (extrapolated) |
| subheading | 22px (`--text-subheading`) | 500 | ~1.30 | 0 | Lead-ins on later pages (extrapolated) |
| wordmark | 18px | 600 | 1.20 | -0.02em | Brand wordmark (Inter) |
| body-lg | clamp(1rem, 2.2vw, 1.125rem) | 400 | 1.50 | -0.011em | Hero subtitle (Inter, Ash) |
| nav / button | 15px | 500 | 1.20 | -0.009em | Nav links, CTA labels (Inter) |
| mobile-link | 17px | 500 | 1.20 | -0.009em | Mobile sheet links (Inter) |
| body | 16px (`--text-body`) | 400 | 1.50 | -0.009em | Long-form copy (extrapolated, Inter) |
| caption | 14px (`--text-caption`) | 400 | 1.40 | 0 | Captions / fine print (extrapolated, Inter) |

The hero headline and subtitle scale with `clamp()`; the rest of the `--text-*` scale from `:root` is the system token set for later pages and is extrapolated — only the hero headline, `body-lg` subtitle, `wordmark`, and `nav/button` are placed in the build.

### Principles
- **The headline is the page.** Keep it short and let the serif carry it; the build's single line is `Every memory, beautifully kept.`
- **Negative tracking throughout.** Serif display at `-0.025em`; the body carries a gentler global `-0.009em`, the subtitle a touch more (`-0.011em`). Tracking is never opened up.
- **Serif at regular weight 400** — not light, not a heavy display weight. The optical face does the work.
- **Inter ceiling is 600** (wordmark); 500 is the working weight (nav, buttons). Body and subtitle are never pushed heavier. One display face only — no second serif, no italics.

### Note on Font Substitutes
Source Serif 4 and Inter are both open-licensed via Google Fonts — load them directly; no commercial face is named or required. If Source Serif 4 is unavailable, fall back to **Georgia** for the display and accept a slightly less optical headline. If Inter is unavailable, the system stack (`ui-sans-serif, system-ui`) holds the body voice. The open pair is the system of record; do not substitute a commercial typeface.

## Layout

### Spacing System
- **Base unit**: `{spacing.base}` (4px) — Tailwind's standard 4px scale applies.
- **Tokens**: `{spacing.content-rail}` 1200px (rail) · `{spacing.headline-max}` 720px (headline stack) · `{spacing.subtitle-max}` 560px (subtitle measure) · `{spacing.navbar-height}` 68px (nav row).
- Hero vertical rhythm: `paddingTop: clamp(40px, 7vw, 80px)`, `paddingBottom: clamp(12px, 2.5vw, 32px)`; the subtitle sits `mt-6` (24px) under the headline.
- CTA pill padding: `px-5 py-2` desktop; the mobile-sheet variant is full-width at `py-3.5`.
- Page gutters: `px-5` (20px) on small viewports, `sm:px-8` (32px) from the `sm` breakpoint.

### Grid & Container
- The page is a single column: sticky navbar → centered headline + subtitle stack → full-bleed gallery. No multi-column grid in the hero.
- The headline stack is centered (`mx-auto flex flex-col items-center text-center`) inside the `{spacing.content-rail}` 1200px rail.
- The gallery is deliberately **`w-full` with no `max-w`** so it bleeds past the 1200px rail to both screen edges; a negative `marginTop: clamp(-40px, -2.5vw, -8px)` pulls the ring up under the subtitle so it overlaps the headline block.
- `overflow-x-hidden` on the hero wrapper keeps the negative-margin, full-bleed gallery from introducing horizontal scroll.

### Whitespace Philosophy
Whitespace is daylight. The headline owns the optical center; the Apricot glow and the subtitle bracket it with air; the gallery is given the full width so the ring can breathe edge to edge. Negative space is what lets the single warm wash and the single moving ring register — crowd the page and both become noise. Density is a deliberate refusal.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow, no border | Default for all hero type, the headline stack, and the gallery |
| 1 (hairline) | 1px `{colors.dove}` at 40–50% opacity | Navbar bottom border, mobile sheet divider |
| 2 (blur chrome) | `backdrop-blur-md` over `bg-pure-white/85` | Sticky navbar; the mobile backdrop also blurs (`blur(4px)`) |
| 3 (sheet shadow) | `{shadow.sheet}` | The mobile slide-in sheet only — a soft left-cast lift |
| Reserved | `{shadow.steep}` (1px ring + 20px drop + 8px drop) | Elevated cards on later pages; never on hero text |

### Decorative Depth
- **The WebGL gallery** carries the page's only sense of dimension — the curved ring of memory cards with per-plane wave displacement.
- **No atmospheric gradients, no spotlight cards, no card borders in the hero.** The hero is flat by decision.
- The signature `{shadow.steep}` three-layer card shadow is kept in the token set but intentionally **not** applied in the hero. A box-shadow under hero text would immediately drag the page from daylight-editorial toward generic-SaaS.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.images}` | 12px | Photo frames, image tiles on later pages |
| `{rounded.inputs}` | 16px | Inputs / secondary controls (token only; no form in the hero) |
| `{rounded.cards}` | 24px | Cards, panels (`rounded-card`) |
| `{rounded.pill}` | 9999px | The CTA pill and the circular mobile close button |

The mobile menu links use `rounded-xl` (12px) for their hover target; the circular close button is a full pill (`h-10 w-10 rounded-full`). The gallery cards carry their own corner rounding via a rounded-box SDF in the fragment shader (`borderRadius={0.05}`, normalized), not a CSS radius.

### Photography & Illustration Geometry
- Gallery cards are landscape **4:3** memory photos (~800×600), 8 in total. The gallery duplicates the list internally so the ring shows 16 and loops seamlessly — supply 8.
- The photos are the **project's own** memory photography (builder-supplied, dropped into `public/gallery/` and referenced by local path); each card is `{ image, text }` with a verbatim label: `Golden Hour`, `City Lights`, `Mountain Trail`, `Beach Day`, `Birthday`, `Road Trip`, `First Snow`, `Old Friends`. Do not wire external image URLs or stock CDNs into the gallery.
- Each plane carries a subtle wave displacement (vertex shader) that intensifies with scroll speed, plus rounded corners via the rounded-box SDF.
- The logo / favicon is a line-art "photo frame with a sun and mountains" in Ink — a rounded rect, a small sun circle, and a mountain stroke. On later pages, photo frames sit on Pure White with `{rounded.images}` (12px) corners and generous breathing room (extrapolated — the build only ships the gallery).

## Components

### Buttons

> Measured from the build: there is exactly one filled button on screen. The Ink fill never becomes a second accent, and there is no hero CTA — the pill lives in the navbar and repeats full-width in the mobile sheet.

**`cta-pill`** — Ink pill. The **only** filled button on the screen ("Start for free").
- Background `{colors.ink}`, text `{colors.pure-white}`, type `{typography.body}` Inter at weight 500 / 15px, rounded `{rounded.pill}`, padding `px-5 py-2` (full-width `py-3.5` in the mobile sheet). No border. Hover lifts `-translate-y-0.5` over 0.2s; active `scale-95`.

**`nav-link`** — Ghost text link. The five center nav actions ("Gallery", "Plans", "Apps", "Stories", "Help").
- Transparent, no border, text `{colors.ink}`, Inter 500 / 15px. Hover fades to `opacity-60`. Desktop only; below `md` they move into the mobile sheet.

### Cards & Containers

**`apricot-glow`** — The single warm surface, not a card: a `pointer-events-none` radial wash behind the headline.
- `radial-gradient(50% 50% at 50% 42%, rgba(251,225,209,0.62) 0%, rgba(251,225,209,0) 70%)`, `min(960px, 100%)` wide, 540px tall, centered, `zIndex: 0` so the type sits above it. Hero only, never repeated.

### Inputs & Forms
None in the build. When forms are added on later pages they should adopt `{rounded.inputs}` (16px); focus / error / disabled states are not yet specified (see Known Gaps).

### Marks

**`logo`** — Picway picture mark.
- A line-art "photo frame with a sun and mountains" in Ink (a rounded rect, a sun circle, a mountain stroke), inline SVG at `size={26}` in the chrome, `strokeWidth={2}`, stroke `{colors.ink}`. The favicon is the same mark as a filled Ink rounded-rect with a white sun and mountain line.
- **Wordmark** — `Picway` in Inter **600** at 18px, `-0.02em` tracking, `{colors.ink}`. Always sits beside the logo with a `gap-2.5`.

### Navigation

**`top-nav`** (`{components.navbar}`) — Sticky blurred white bar with the logo + wordmark left, five ghost links centered (desktop), and one Ink pill right (desktop); a hamburger appears below `md`.
- Background `{colors.pure-white}` at 85% (`bg-pure-white/85`) with `backdrop-blur-md`, `border-b border-dove/40` hairline, `sticky top-0 z-30`, inner row `h-[68px] max-w-[1200px]`. Static — no entrance animation.

**`mobile-menu`** — Right-side slide-in sheet wrapped in `AnimatePresence`.
- Backdrop: `rgba(23,25,28,0.35)` + `blur(4px)`, fades over 0.3s, click-to-close. Sheet: `bg-pure-white`, `min(88vw, 360px)` wide, `100dvh` tall, `{shadow.sheet}`; enters `x: 100% → 0` over 0.45s ease `[0.22,1,0.36,1]`, exits over 0.35s ease `[0.55,0,1,0.45]`. Header repeats the logo + wordmark and a circular close button (`h-10 w-10 rounded-full`, `rgba(23,25,28,0.06)` fill, `X` icon, `whileTap scale 0.9`). A `dove/50` divider, then the five links staggering in `delay: 0.18 + i*0.07` (each 0.4s, `hover:bg-fog`), then a full-width Ink pill pinned to the bottom (`mt-auto`).

### Signature

**`circular-gallery`** — The hero's interactive centerpiece: 8 memory cards on a curved, draggable ring rendered with **ogl** (WebGL over a transparent canvas).
- Dragging or wheel-scrolling rotates the ring; it snaps to the nearest card on release and loops infinitely. Deployed configuration: `bend={3}` (positive arc — bends the cards downward into a smile), `textColor="#17191c"` (Ink labels matching page type), `borderRadius={0.05}` (SDF-rounded corners, normalized), `scrollEase={0.02}` (a slow, heavy lerp — calm drift, not snappy), `font="bold 30px Inter"`. Each plane is a `100×50`-segment `Plane` with a wave-displacement vertex shader that intensifies with scroll speed, a rounded-box-SDF fragment shader, and a `Title` plane drawn from a 2D canvas texture. DPR is capped at 2 for retina performance. The component duplicates the supplied list so the ring loops seamlessly, and its `destroy()` cleanup removes every listener and the canvas — which is why mounting inside `React.StrictMode` is safe. Treat it as the page's single piece of motion.

### Footer
Not in the build (extrapolated). When a footer is needed, keep it Pure White with a `{colors.dove}` hairline top border, the `{components.logo}` + wordmark, link columns in Inter, and legal in `caption` — no dark footer, no second accent.

## Do's and Don'ts

### Do
- Keep the canvas `{colors.pure-white}` (#ffffff) — bright daylight, gradient-free, never dark.
- Ration warmth to the single `{components.apricot-glow}` at `rgba(251,225,209,0.62)` in the hero — nowhere else.
- Set the headline in Source Serif 4 (`font-signifier`) at **weight 400**, `1.08` line-height, `-0.025em` tracking.
- Keep Inter (`font-sohne`) restrained: 500 for nav/buttons, 600 ceiling for the wordmark; subtitle at `{colors.ash}`.
- Keep exactly **one** filled `{components.cta-pill}` per screen; let the navbar pill be the only filled button — no hero CTA.
- Let the `{components.circular-gallery}` be the only continuous motion, with the project's own 4:3 memory photos at `/gallery/*.jpg`.

### Don't
- Don't ship a dark hero or a dark counterpart theme — the daylight white is the system.
- Don't introduce a second chromatic accent, or spread the Apricot glow outside the hero — the rationing is the brand.
- Don't add a page-background gradient or a second filled button.
- Don't round colors — Ink is `#17191c`, the dawn glow is `rgba(251,225,209,*)`, not "near-black" / "peach".
- Don't exceed Inter weight 600 anywhere, push the subtitle or body heavier, or add a second display serif or italics.
- Don't paint `{shadow.steep}` onto hero text, or add card borders / `box-shadow` to hero elements — the hero is flat.
- Don't use `bg-blue-500`-style AI-default accents.
- Don't wire external image URLs or stock CDNs into the gallery — photos are the project's own, builder-supplied.
- Don't change the gallery props (`bend=3`, `textColor="#17191c"`, `borderRadius=0.05`, `scrollEase=0.02`, `font="bold 30px Inter"`) or add a second moving element to compete with the ring.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤419px (estimated) | Headline at the `clamp` floor (2.5rem); page padding `px-5` (20px); hamburger + mobile sheet; gallery at its `clamp` floor (360px) |
| Phone | 420–639px (estimated) | Headline scales via `7vw`; subtitle at full `max-w-[560px]`; nav still collapsed |
| Below md | ≤767px | Center links + Ink pill hidden; hamburger shows; mobile sheet is `min(88vw, 360px)` × `100dvh` |
| md and up | ≥768px | Center links + Ink pill appear (`md:flex`); hamburger hidden; padding lifts to `sm:px-8` (32px) |
| Desktop | 768–1200px | Headline approaches the 4.75rem cap; gallery fills the viewport width edge to edge |
| Wide | ≥1201px | Content caps at the 1200px rail; the gallery stays `w-full` and continues full-viewport-width |

### Touch Targets
- Minimum ~44×44 hit area; the CTA pill padding (`px-5 py-2` desktop, full-width `py-3.5` mobile) and the 40×40 circular close button clear or approach this.
- The gallery reads `mousewheel`/`wheel` and `touch*` events, so drag works identically on pointer and touch.
- Mobile links carry `px-4 py-3` padding so the tap target extends past the text.

### Collapsing Strategy
- The page is one viewport at every width — the navbar height (68px) and the gallery (full width) hold; only the headline size and page padding flex.
- **Top nav**: full inline links + Ink pill → hamburger + slide-in sheet below `md`; the logo + wordmark stay.
- **Headline**: `clamp(2.5rem, 7vw, 4.75rem)` does the work — never a fixed display size. Subtitle: `clamp(1rem, 2.2vw, 1.125rem)`.
- **Gallery**: height `clamp(360px, 55vh, 560px)`; its negative `marginTop` and `marginBottom` clamps flex with viewport width.

### Image Behavior
- Gallery photos are landscape 4:3 (~800×600); the WebGL plane handles aspect-fit internally via the fragment shader's `ratio` math, so source crops are forgiving.
- DPR is capped at 2 for retina performance; the renderer is alpha (transparent canvas) over the white page.
- `prefers-reduced-motion` is respected in `index.css` for `steepFloat` and `scroll-behavior`, but the gallery's continuous loop is not gated by that guard (see Known Gaps).

## Iteration Guide

1. New page (gallery, plans, apps, stories, help)? Start the shell from `{colors.pure-white}` + a Source Serif 4 head + Inter 500/400 body — the shell is the brand. Reference every component by its `components:` token name.
2. When introducing a section, decide first which surface it lives on — and remember there is only one surface (Pure White); structure comes from a `{colors.dove}` hairline, not a lifted panel.
3. Default body to `{typography.body}` Inter at weight 400 with the global `-0.009em`; reach for the serif only for a headline.
4. Keep the warmth rule absolute — a new warm need is answered by the `{components.apricot-glow}` *only in the hero*, or by nothing, never by a new accent color.
5. Hold one filled button per screen: a new action that "needs a button" gets the `{components.nav-link}` ghost treatment or shares the single Ink pill — not a second fill.
6. Treat the Apricot glow and the gallery as scarce: one warm wash, one moving element. Do not add scroll reveals, parallax, or a second animation to compete with the ring.
7. Keep depth restrained: the blurred navbar chrome + `{shadow.sheet}` carry the hero; `{shadow.steep}` is the one allowance for elevated cards on later pages — used sparingly, never on text.

## Known Gaps

- Beyond the single hero, later-page layouts (gallery grid, plans/pricing, stories, help) are **not specified** — they are extrapolated here. Design them in the same daylight language: Pure White canvas, Source Serif 4 heads, Inter body, one-filled-button discipline, no second accent.
- The full `--text-*` type scale (caption → display) and the `graphite` / `slate` / `rust` / `sky-wash` colors exist in the token set but are **unplaced** in the build — reserved system tokens.
- Form / input and validation states (error, success, disabled) are not surfaced; `{rounded.inputs}` (16px) is the radius they should adopt when built.
- The `{shadow.steep}` three-layer card shadow and the `.steep-float` keyframe are kept in the system but **unused** by the hero — apply them only on later elevated surfaces / floating cards, never on hero text.
- The gallery's continuous loop is **not** currently gated by `prefers-reduced-motion`; a reduced-motion pause / slowdown is a recommended extension. A dark counterpart is intentionally absent and would require its own governing decision.
