---
version: "1"
name: "Zero2One — Cinematic Dark Growth-Marketing Landing"
description: "A single-page marketing site for a growth & brand studio that connects strategy, creative, and performance into one engine. Pure black canvas (#111111) with a single chromatic accent — mint-cream #4fe3c1. Inter (Google Fonts) is the only family. GSAP scroll-linked arrows trace dashed cubic paths through a 7-step process. Marquees of project imagery run both vertically and horizontally. Two bright sections (#f4f6f8) invert the rhythm to give the eye somewhere to breathe."
colors:
  brand-dark: "#111111"
  brand-darker: "#0a0a0a"
  brand-accent: "#4fe3c1"
  brand-accent-dim: "#2bc9a3"
  soft-white: "#f4f6f8"
  ceo: "#1b1b1b"
  ink: "#070707"
typography:
  sans:
    fontFamily: "Inter (next/font/google)"
    weights: "400 / 500 / 600 / 700"
    role: "headlines, body, labels, CTAs — one family, hierarchy from weight + size"
spacing:
  base: "Tailwind v4 default (4px)"
  hero-headline: "text-[2.6rem] sm:text-6xl lg:text-[5.2rem] · leading-[1.1] · tracking-tight"
  section-padding: "py-20 sm:py-28 (dark) / py-24 sm:py-32 (bright + accent)"
  container: "max-w-6xl px-4"
rounded:
  pill: "9999px (Navbar island, Label, CTAs, social icon circles)"
  card: "1.5rem → 2rem (rounded-3xl / rounded-[2rem])"
  radius-4xl: "2rem"
  radius-5xl: "2.5rem"
shadows:
  soft: "0 5px 16px rgba(157, 157, 157, 0.17)"
  glow: "0 4px 30px rgba(79, 227, 193, 0.4)"
  card: "0 24px 60px -20px rgba(0, 0, 0, 0.55)"
components:
  navbar-island: "Fixed pill nav; transparent at top, morphs to bg-black/70 + backdrop-blur-xl + border-white/10 + shadow-card past scrollY > 24px"
  hero-word-drop: "Each headline word wrapped in [data-word] and animated with gsap.from yPercent:-130, opacity:0, rotate:-5, back.out(1.6), stagger 0.07"
  reveal-wrapper: "Universal GSAP fade-up — y:40 → y:0, opacity 0 → 1, power3.out, scrollTrigger start top 85%"
  process-motion-path: "MotionPathPlugin arrow scrubs a dynamically measured dashed cubic-bezier through 7 zig-zag steps; thresholds light up proc-num / proc-title / proc-body / proc-img per step"
  marquee-system: "Six keyframes (marquee-left/right/up/down + spin-slow + shimmer) driving horizontal service/brand/tech rows and vertical 3-col gallery"
  swiper-testimonials: "Swiper 11 carousel with custom progress track + prev/next circle buttons + 5.0/5 trust block"
---

# Zero2One — Cinematic Dark Growth-Marketing Landing

> Fivefold showcase. Pairs with the Zero2One prompt. Use this file to keep Zero2One's cinematic editorial restraint when you add new sections — it should always read as a founder-led growth studio, never a generic SaaS template.

## Overview

Zero2One is a single-page marketing site for a growth marketing & brand design studio that connects strategy, creative, and performance into one engine that turns attention into revenue. The canvas is pure black, a single mint-cream accent earns every appearance, Inter carries the entire type system at every weight, and GSAP scroll-linked arrows trace dashed cubic-bezier curves through a 7-step process. Two bright sections invert the rhythm so the dark never fatigues the eye.

The governing decision: **one engine, one accent, one family.** Most growth-marketing sites fragment — multi-color "feature buckets," icon-set zoos, gradient-soup hero, three font families fighting for attention. Zero2One does the opposite. The studio sells *coherence* — strategy + creative + performance pulling in one direction — so the page proves it visually. There is exactly one chromatic accent (mint `#4fe3c1`), exactly one typeface (Inter), and exactly one motion vocabulary (GSAP fade-up + scrubbed motion path + CSS marquee). The mint never appears as fill noise; it earns its appearance — selection highlight, accent dot in the Label pill, scrubbed arrow on the process path, the primary CTA. The rest is monochrome — `#111111` ink, `#f4f6f8` paper, `#1b1b1b` for the founder room. The bet: when the visual language is this disciplined, the founder narrative reads as proof, not promise.

The system extends across every surface — navbar island, hero word-drop, vertical and horizontal marquees, asymmetric 12-col strategy grid, zig-zag process with scroll-linked arrow, Swiper testimonials, founder room, FAQ accordion, blog grid, social hover-scale, and form card — by enforcing the same three constraints everywhere: one accent, one family, one motion vocabulary. The result is editorial cinema: each section reads as a distinct frame, but every frame belongs to the same film.

**Key Characteristics:**
- **Pure black canvas** (`{colors.brand-dark}` — #111111) for 11 of 16 sections; soft-white (`{colors.soft-white}` — #f4f6f8) for Portfolio + Testimonials; pure white for FAQ + Blog; CEO neutral (`{colors.ceo}` — #1b1b1b) for the founder block. The page walks dark → bright → dark like a film cut.
- **Single chromatic accent** — mint `{colors.brand-accent}` (#4fe3c1) and dim sibling `{colors.brand-accent-dim}` (#2bc9a3). No purple, no indigo, no neon green, no second mint.
- **Inter only**, loaded via `next/font/google` and exposed as `--font-inter` → `--font-sans`. Hierarchy is weight × size, never family-swap.
- **GSAP 3.12.5 + ScrollTrigger + MotionPathPlugin** drive every animation; Lenis 1.1.13 handles smooth scroll; Swiper 11 carries only the testimonials carousel. No Framer Motion, no Lottie.
- **Signature motion** is the Process — a 7-step zig-zag where a dashed cubic-bezier is built at runtime by measuring each anchor, and a `<polygon>` arrow scrubs the path via `motionPath` to light each step.
- **Marquee orchestra** — six keyframes (left, right, up, down, spin-slow, shimmer) drive a vertical 3-col gallery, horizontal service row, brand wordmark strip, and dual tech-ticker rows.
- **Sharp pills, soft cards** — radius rhythm is 9999px for navbar/CTA/Label, `rounded-3xl` for project + service cards, `{rounded.radius-5xl}` for the Contact card and Footer container. No mid-radius noise.
- **::selection flips to mint** (`background: #4fe3c1; color: #000`) — the accent's quietest cameo, reinforcing brand even when the user just highlights text.

## Colors

> **Source pages analyzed:** the full single-page mount in `app/page.js` — Navbar through Footer (16 sections). Tokens declared in a single `@theme` block at the top of `app/globals.css`. Tailwind v4 auto-generates utilities (`bg-brand-dark`, `text-brand-accent`, `shadow-card`) directly from these.

### Brand & Accent
- **Mint accent** (`{colors.brand-accent}` — #4fe3c1): The only chromatic color in the system. Primary CTA fill, Label pill dot, Process arrow + drop-shadow, `::selection` background, tech-ticker highlights, hero ambient glow at 10% alpha, Contact section gradient fade.
- **Mint accent dim** (`{colors.brand-accent-dim}` — #2bc9a3): Reserved for hover-darken and any place mint needs to recede a half-step. Never used as a fresh fill — always as a secondary state of `{colors.brand-accent}`.

### Surface
- **Brand dark** (`{colors.brand-dark}` — #111111): The canvas. Eleven of sixteen sections sit here. `<body>` default. Slightly softer than pure black so deep shadows still register.
- **Brand darker** (`{colors.brand-darker}` — #0a0a0a): Inner card surfaces, founder portrait container, near-black wells inside dark sections.
- **Soft white** (`{colors.soft-white}` — #f4f6f8): The bright paper for Portfolio + Testimonials. Never pure white — the slight grey reads as printed paper, not a screen reset.
- **Pure white** (#ffffff): Reserved for FAQ + Blog only — the cleanest sheets.
- **CEO neutral** (`{colors.ceo}` — #1b1b1b): A warmer near-black used **only** for the founder section so it reads as its own room — neither the gallery dark nor the canvas.

### Text & Ink
- **Pure white** (#ffffff) on dark surfaces — body, headings, primary text. Contrast ratio on `{colors.brand-dark}` is 18.9:1 (AAA at all sizes).
- **Ink** (`{colors.ink}` — #070707): Near-black text + accent ink on light surfaces. `text-ink` class on Portfolio, Testimonials, FAQ, Blog headings.
- **Muted dark** (`text-white/55`): Body copy on dark sections — lead paragraphs, card descriptions, testimonial bodies on bright cards inside dark wells.
- **Muted light** (`text-black/55`): Body copy on light sections — Portfolio descriptions, Testimonial bodies, FAQ answers.

### Hairlines & Borders
- **Hairline on dark** (`border-white/8` to `border-white/10`): Card edges, footer card border, social row dividers, navbar scrolled border.
- **Hairline on light** (`border-black/10` to `border-black/15`): Contact field row separators, FAQ accordion borders, testimonial trust pill border, prev/next button rings.

**Constraint** (verbatim from prompt): *"Do not use: purple-as-primary, neon green, indigo, mint outside #4fe3c1 / #2bc9a3. The mint is the only chromatic accent. Everything else is monochrome."* Contrast comes from section rhythm and weight, never from color drift.

## Typography

### Font Family
- **Inter** loaded with `next/font/google` and exposed as `--font-inter` → `--font-sans`. Full stack: `var(--font-inter), system-ui, sans-serif`.
- Heading and body share the family — hierarchy is **weight × size**, never typeface-swap.
- OpenType features: default Inter ligatures + tabular numerals where numeric alignment matters (process step numerals, trust block `5.0/5`).

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `hero-headline` | 2.6rem → 5.2rem | 700 | 1.1 | tracking-tight | H1 word-drop; line 1 has `italic font-medium text-brand-accent` on "Growth" |
| `ceo-headline` | text-5xl → text-8xl | 700 | 0.95 | tracking-tight | The largest H2 on the page — "SCHEDULE / A MEETING" stacked |
| `section-h2` | text-4xl → text-5xl/6xl | 700 | 1.05 | tracking-tight | All section headings (Services, Strategy, Process, etc.) |
| `sub-h3` | text-2xl → text-3xl | 600 / 700 | tight / snug | normal | Card titles, FAQ headline, founder name |
| `card-title` | text-lg → text-2xl | 600 | snug → tight | normal | Service card title, Portfolio card title, testimonial headline |
| `body-lead` | text-sm → text-base | 400 | normal | normal | Hero lead, section lead paragraphs — `text-white/55` or `text-black/55` |
| `body-small` | text-sm | 400 | normal | normal | Card descriptions, footer copy, link lists |
| `label-pill` | text-xs | 500 | normal | normal | Label eyebrow inside pill component, tag pills on cards |
| `wordmark-graphic` | h-auto w-[min(92vw,1100px)] | — | — | — | Footer wordmark — rendered as `<img>`, not type |

### Principles
- **One family, hierarchy by weight × size.** Never pair Inter with a second face. If weight 950 isn't available, **clamp down** to nearest available — never synthesize.
- **The only italic glyph on the page** is "Growth" in the hero, set in `italic font-medium text-brand-accent`. Italic is reserved for this single accent moment.
- **Tracking tightens at display sizes.** `tracking-tight` is mandatory on H1, CEO H2, and section H2. Body and labels stay at default tracking.
- **Leading collapses with size.** Hero `leading-[1.1]`, section H2 `leading-[1.05]`, CEO H2 `leading-[0.95]`. Tight leading reads as editorial restraint at display sizes.
- **Muted body, full-strength heading.** Body sits at `/55` opacity on its surface; headings always at full opacity. The contrast is the hierarchy.
- **Uppercase + tracking-[0.25em] reserved for the Brands eyebrow only.** It's the single typographic moment on the page where letterspacing widens — everywhere else stays tight.

### Note on Font Substitutes
If Inter is unavailable, fall back to `system-ui` then `sans-serif` (the declared CSS stack). When the renderer lands on system-ui, the hero headline may render slightly narrower — compensate by reducing the responsive max from `5.2rem` to `5rem` and the `leading-[1.1]` to `leading-[1.05]`. Never substitute a geometric sans (Poppins, Montserrat) — they break the editorial restraint.

## Layout

### Spacing System
- **Base unit**: Tailwind v4 default 4px scale. All padding, gap, and margin tokens are multiples of 4.
- **Container**: `max-w-6xl` (72rem / 1152px) with `px-4` horizontal padding — the universal content rail used by every section except the marquees and the giant Footer wordmark, which break out.
- **Section padding-y rhythm** (only two values):
  - Dark sections: `py-20 sm:py-28`
  - Bright sections + Process + CEO + Contact: `py-24 sm:py-32`
- **Card padding**: Service / Portfolio / Strategy / Blog cards = `p-5` to `p-8`. Contact form card = `p-6 sm:p-10`. Footer card = `p-8 sm:p-12`.
- **Inter-section gap**: governed by section padding-y alone; no margin-collapse hacks, no `<div>` spacers.

### Grid & Container
- **Universal rail**: `mx-auto max-w-6xl px-4` for every section's content.
- **Hero**: centered text inside `max-w-5xl` headline; `max-w-xl` lead.
- **Strategy asymmetric grid**: `grid-cols-1 lg:grid-cols-12`, gap-5. Two horizontal cards span 7 cols (image-right), two vertical cards span 5 cols (image-top).
- **Process zig-zag**: alternating left/right rails per step — `i % 2 === 0` → right (`lg:justify-end`), else left.
- **Portfolio + Blog grid**: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` (Portfolio) and `lg:grid-cols-4` (Blog), gap-6.
- **CEO 3-col**: `lg:grid-cols-[1fr_300px_1fr]` — bio · portrait · right rail.
- **Footer 4-col**: `lg:grid-cols-[1.4fr_1fr_1fr_1fr]` — brand wider than service columns.

### Whitespace Philosophy
Whitespace on Zero2One is rhythmic, not generous. The dark canvas already creates apparent space (deep blacks read as expansive), so section padding stays moderate (py-20 → py-32) and lets cadence — dark, dark, bright, dark, bright — do the breathing. The bright sections feel airier not because they have more padding, but because they invert the lightness ratio. Inside cards, padding is tight (p-5 → p-8) to keep editorial density. The two places that truly breathe are the Hero (deep top padding `pt-32 sm:pt-40 lg:pt-44`) and the Footer wordmark (a `w-[min(92vw,1100px)]` graphic floating in the bottom margin).

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Default body, marquee rows, full-bleed sections |
| Soft hairline | `border-white/8` (dark) or `border-black/10` (light) | Card edges, footer card, FAQ accordion, contact form, social row dividers |
| Backdrop blur | `bg-black/70 backdrop-blur-xl` + `border-white/10` | Navbar island when scrolled, mobile dropdown, tag pills `bg-black/40 backdrop-blur` |
| Product shadow | `{shadows.card}` 0 24px 60px -20px rgba(0,0,0,0.55) | Navbar scrolled, contact form card, Portfolio card hover ambient |

**Shadow philosophy.** Shadows are scarce. The dark canvas swallows them, so most surfaces use a 1px hairline (`border-white/8`) instead of a shadow to define edges. The two places shadows do appear are: (1) elevation cues that need to read against light surfaces — `{shadows.soft}` on Portfolio + Testimonial cards floating on `{colors.soft-white}`, and (2) the morphed Navbar + Contact card, where `{shadows.card}` projects deep beneath to anchor floating chrome.

**Decorative Depth:**
- **Hero ambient glow**: `bg-brand-accent/10 blur-[140px]` 600×900px blob top-center — atmosphere, not chrome.
- **Strategy ambient glow**: `bg-brand-accent/5 blur-[120px]` 500×500px centered blob — softer cousin of the hero glow.
- **Contact gradient fade**: `bg-gradient-to-t from-brand-accent/10 to-transparent` filling the bottom 50% — mint vapor rising from the canvas floor.
- **Process arrow glow**: `drop-shadow(0 0 8px rgba(79,227,193,0.6))` on the polygon arrow — the only motion shadow in the system.
- **Marquee edge fades**: `bg-gradient-to-{r|l} from-brand-dark to-transparent` 24-wide overlays on left/right of brand + tech marquees to mask the wrap seam.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| none | 0 | Default for text blocks, marquee rows, founder portrait inside its rounded container |
| sm | 0.5rem (rounded-md) | Tech ticker badge squares, accordion `+` glyph well |
| md | 1rem (rounded-2xl) | VideoGallery image cards, FAQ accordion rows, process step thumbnails |
| lg | 1.5rem (rounded-3xl) | Service cards, Portfolio cards, Strategy cards, Blog cards, mobile nav dropdown, founder portrait, testimonial slide |
| xl | `{rounded.radius-4xl}` 2rem | (Reserved — token declared, not currently consumed by sections) |
| xxl | `{rounded.radius-5xl}` 2.5rem | Contact form card, Footer card container |
| pill | 9999px | Navbar island, all CTAs, Label pills, tag pills, social icon circles, prev/next testimonial buttons, "Book a Consultation" 128px disc |

### Photography Geometry
- **Hero tool row**: `works.avif` rendered as `h-10 w-auto opacity-90` next to the primary CTA — landscape horizontal, never resized.
- **VideoGallery cards**: `aspect-[16/10]` with `object-cover object-top` — top of every mockup is the consistent focal point. Border `border-white/8`, radius `rounded-2xl`.
- **Service cards**: 300×420 fixed dimensions, `object-cover object-top`, `group-hover:scale-105` (5% zoom inside its frame on hover).
- **Portfolio cards**: 260px image area, `object-cover object-top`, gradient overlay `from-black/50 to-transparent` for tag legibility.
- **Founder portrait**: `aspect-[3/4]`, `max-w-[300px]`, `object-cover object-center` inside `rounded-3xl bg-brand-darker`.
- **Strategy panels**: `object-contain` (not cover) so each native aspect is respected — these are metric screenshots, not photography.
- **Process step thumbnails**: 150×120 (sm and up only), `object-cover object-top`, `rounded-2xl border-white/10`. Each thumbnail enters with `rotation: ±5deg` alternating per step.
- **Loading strategy**: All images use root-relative `/projects/*` and `/brand/*` paths. If a file is missing, render a neutral `bg-black/40` placeholder of the same dimensions and log a comment — never substitute a different asset.

## Components

### Top Navigation

**Navbar Island** `{component.navbar-island}` — fixed pill nav.
- Default: `mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 bg-transparent border border-transparent transition-all duration-300`.
- Scrolled (>24px): swaps to `bg-black/70 backdrop-blur-xl border-white/10 shadow-card`.
- Left: `<Logo className="h-7" />`. Center (desktop): 4 links `text-sm text-white/70 transition-colors` to `text-white`, gap-8. Right: pill CTA `rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black`.
- Focus: visible focus ring via Tailwind v4 default `focus-visible` outline on every link and the CTA.
- Mobile dropdown: `mx-auto mt-2 max-w-6xl rounded-3xl border border-white/10 bg-black/90 p-4 backdrop-blur-xl md:hidden`.

### Buttons

**Button — Primary (Mint)** `{component.button-primary}`
- `rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-black`. Hero variant `px-7 py-3.5`.
- Active: `transition-transform hover:scale-[1.04]` on Hero, `hover:scale-[1.03]` on Contact submit and "See Our Work".
- Focus: focus-visible outline + mint underglow `{shadows.glow}`.

**Button — Secondary (White Pill)** `{component.button-secondary}`
- `rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-transform`. Used as Navbar "Get Started" + Portfolio "View All Work".
- Active: `hover:scale-[1.03]`.
- Focus: focus-visible outline.

**Button — Outline (Ghost Pill)** `{component.button-outline}`
- `rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white` (dark) / `border-black/15 text-ink` (light). Used as "Explore Services", "View All Articles".
- Active: `hover:bg-white hover:text-black` (dark) or `hover:bg-black hover:text-white` (light) — full inversion.

**Button — Circular Utility** `{component.button-circular}`
- 36px (`h-9 w-9`) to 48px (`h-12 w-12`) circle, `rounded-full border border-{white|black}/15`. Used as mobile hamburger, testimonial prev/next, social platform icon anchors.
- Service card has its own variant: `h-11 w-11 rounded-full bg-white text-black` with arrow that `rotate-45` on group hover.

### Cards & Containers

**Card — Light Tile (Portfolio / Testimonial)** `{component.card-light}`
- `flex h-full flex-col rounded-3xl bg-white shadow-soft`. Portfolio: 260px image area + `p-5` text. Testimonial: `p-8 min-h-[300px]`.
- Image overlay `bg-gradient-to-t from-black/50 to-transparent` for tag pill legibility.

**Card — Dark Tile (Service / Strategy / Process Thumbnail)** `{component.card-dark}`
- Service: 300×420 `rounded-3xl border-white/8 bg-black/40 overflow-hidden` with absolute bg-image + dark overlay `from-black/85 via-black/30 to-black/10`.
- Strategy: `rounded-3xl border-white/8 bg-white/[0.03] p-8` — horizontal (`min-h-[260px]` image-right) or vertical (image-top).
- Active state on Service card: `group-hover:scale-105` on image + `group-hover:rotate-45` on circular arrow.

**Card — Utility (FAQ Accordion Row)** `{component.card-utility}`
- `overflow-hidden rounded-2xl border border-black/10 bg-soft-white`. Button row `px-6 py-5` with `+` glyph that `rotate-45` when open.
- Active (open): grid trick — `gridTemplateRows: "1fr"` (closed: `"0fr"`), `transition-all duration-300 ease-out`.

**Card — Form (Contact)** `{component.card-form}`
- `rounded-[2rem] bg-white p-6 sm:p-10 text-ink shadow-card` floating on `bg-brand-dark`. Contains `space-y-6` of `Field` rows.

### Inputs & Forms

**Input — Conversational Field** `{component.input-field}`
- Row: `flex flex-col gap-2 border-b border-black/10 pb-4 sm:flex-row sm:items-center sm:gap-4`.
- Left label (`sm:w-44`): emoji glyph + bold label text. Right `flex-1`: `<input>`, `<select>`, or pill toggle group.
- Default: transparent input, `text-lg outline-none placeholder:text-black/30`.
- Focus: focus-visible outline on the input element itself (not the row container). No floating label.
- Pill toggle group (Budget): unselected `border border-black/15 px-4 py-2 rounded-full`; selected `border-black bg-black text-white`.

### Footer

**Footer Card** `{component.footer-card}`
- `rounded-[2rem] border border-white/8 bg-white/[0.02] p-8 sm:p-12` containing the 4-col link grid + social row.
- Followed by the giant wordmark logo (`<Logo className="h-auto w-[min(92vw,1100px)]" />`) breaking out of the `max-w-6xl` container, centered.

## Do's and Don'ts

### Do
- **Use `{colors.brand-accent}` only when it earns the moment** — primary CTA, Label pill dot, Process arrow, `::selection`, tech-ticker highlight, ambient glow. If you can't justify one of those roles, keep the element monochrome.
- **Set every heading in Inter at the prescribed weight × size.** Hierarchy comes from `font-bold` and the scale, not from family-swap.
- **Apply `tracking-tight` to every display-size heading** (Hero, CEO, section H2). Body and labels stay at default tracking.
- **Reserve `back.out(1.6)` for the Hero word-drop only**, and `ease: "none"` for the Process scrubbed motionPath only. Every other animation is `power3.out`.
- **Keep the dark/bright cadence intact** — only the four allowed surfaces (`{colors.brand-dark}`, `{colors.ceo}`, `{colors.soft-white}`, white). If a new section is needed, it picks one of the four — no new backgrounds.
- **Use `<Reveal>` for every entrance**: `y: 40 → 0`, `opacity: 0 → 1`, `duration: 0.9`, `start: "top 85%"`. Stagger only via `data-reveal-children`.
- **Respect `prefers-reduced-motion`**: disable Lenis smoothing, snap reveal end-states, freeze marquees, jump arrow to final.
- **Render real form controls** — `<input>`, `<select>`, `<button>` — with the left-column label acting as the semantic label.
- **Apply `marquee-paused:hover .marquee-track { animation-play-state: paused }`** to every marquee so hover-pause is a system default, not a per-row override.

### Don't
- **Don't introduce a second chromatic accent.** Not purple, not indigo, not neon green, not a second mint. The accent constraint is the brand argument.
- **Don't add a second font family.** Inter for everything. No serif for "elegance," no display face for "personality."
- **Don't synthesize missing weights.** If Inter weight 950 isn't loaded, clamp down to 700, never let the browser fake-bold it.
- **Don't document or wire hover-only states** in the design tokens. Hover effects exist (`scale-[1.03]`, `group-hover:rotate-45`, marquee-pause) but per Apple convention they live in component CSS, not in the design contract.
- **Don't add a third radius value between pill and `rounded-3xl`.** No `rounded-xl`, no `rounded-2xl` on cards (only on micro-utility surfaces). Mid-radius noise breaks the rhythm.
- **Don't substitute project assets.** If `/projects/p7.png` is missing, render a `bg-black/40` placeholder of the same dimensions — never swap in a different image.
- **Don't break out of `max-w-6xl`** for content. Only marquees, the Brands trust strip, and the giant Footer wordmark break out — and only because the wrap-seam fades or the graphic anchor demands it.
- **Don't add shadows on dark sections** beyond the navbar morph + decorative blur glows. Edges on dark are defined by `border-white/8`, not shadow.
- **Don't mix easing curves within a section.** Pick one (`power3.out` for reveals, `back.out(1.6)` for word-drop, `none` for scrub) and let it carry the whole pass.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤419px | Hero `text-[2.6rem]`; single-column grids; mobile dropdown nav; CEO heading stacked at `text-5xl` |
| Phone | 420-640px | Same as small phone; VideoGallery 2-col only (col 3 hidden via `hidden md:block`) |
| Large phone | 641-735px | Tag pills + lead body shift to `text-base`; Portfolio 2-col activates at `sm:grid-cols-2` |
| Tablet portrait | 736-833px | Section padding scales `py-20 → sm:py-28`; Hero `text-6xl`; section H2 `text-5xl`; CEO `text-7xl` |
| Tablet landscape | 834-1023px | Strategy stays 1-col; Process steps stack vertical with left-rail dashed connector (no SVG arrow) |
| Small desktop | 1024-1068px | `lg:` breakpoint engages: Portfolio + Blog become 3 / 4-col; Strategy asymmetric 12-col activates; Process zig-zag + GSAP arrow activate; CEO 3-col grid |
| Desktop | 1069-1440px | Hero `text-[5.2rem]`; CEO `text-8xl`; Process SVG path rebuilt on resize debounced 250ms |
| Wide desktop | ≥1441px | Container caps at `max-w-6xl` (1152px) — no further scale-up. Margins absorb extra width |

### Touch Targets
- Minimum target: 44×44px (Apple convention) — applied to all CTAs (`px-5 py-2.5` ≈ 40px tall; padding bumped at hero variant to `py-3.5` ≈ 48px).
- Circular utility buttons: 36px (mobile hamburger, social anchors) is below 44px but enlarged via padding around the icon; testimonial prev/next at 48px clears.
- Accordion `+` glyph: 24px glyph centered in a 44px+ button row — entire row is tappable, not just the icon.

### Collapsing Strategy
- **Navbar**: 4 desktop links collapse into a mobile dropdown (`md:hidden`); the right-side CTA persists at all widths.
- **VideoGallery**: 3-col → 2-col below `md` (third column hidden, durations preserved).
- **Services marquee**: card width fixed at 300px regardless of viewport — marquee speed compensates for narrower view.
- **Portfolio + Blog**: 4-col → 2-col → 1-col cascade via `lg:grid-cols-4 sm:grid-cols-2 grid-cols-1`.
- **Strategy**: 12-col asymmetric grid → 1-col stack below `lg`; horizontal cards retain image position by reordering image above text.
- **Process**: desktop zig-zag + SVG arrow → mobile vertical stack with left-edge dashed `border-l border-dashed border-white/15` connector replacing the SVG path.
- **CEO**: 3-col (`1fr_300px_1fr`) → 1-col stack at `<lg`; portrait stays centered with `max-w-[300px]`.
- **FAQ**: 2-col `0.8fr_1.2fr` → 1-col; question-mark image and headline move above accordion.
- **Hero headline**: `text-[2.6rem]` → `text-6xl` → `text-[5.2rem]` across breakpoints; word-drop stagger remains 0.07 at every size.

### Image Behavior
- All `<img>` use root-relative paths (`/projects/p1.png`, `/brand/founder.jpg`); no `srcset` declared (single source per slot).
- Aspect ratios are enforced by container, not image: cards use `aspect-[16/10]` or fixed `h-[260px]` / `h-[420px]`; founder uses `aspect-[3/4]`.
- `object-cover object-top` is the universal default — top of every mockup is the consistent focal point.
- Loading: native lazy-loading (browser default for `<img>`) — no manual `loading="lazy"` declared in source.
- If asset missing: neutral `bg-black/40` placeholder of same dimensions + console comment, per prompt rule.

## Iteration Guide

1. **Extend one component at a time.** If a new card type is needed, add a fourth `{component.card-*}` variant — don't reshape the existing three. Variants live inside the component file, never as ad-hoc class soup at the call-site.
2. **Reference tokens, never hex.** Use `{colors.brand-accent}` or `bg-brand-accent`, never `#4fe3c1` inline. Tokens live in the `@theme` block; everything else consumes them.
3. **Display vs body family rule: there is no rule.** Inter handles both. If a future section feels like it "needs" a display face, the answer is a heavier weight + tighter tracking, not a new family.
4. **Shadow restriction.** Stay inside the four-level table (Flat / Hairline / Backdrop blur / Product shadow). New shadows require a new token in the `@theme` block — not an inline `shadow-[…]`.
5. **Chrome vs surface alternative.** When a new affordance is needed (e.g., a sticky CTA on scroll), prefer borrowing the Navbar's morph pattern (transparent → backdrop-blur + hairline + `shadow-card`) over inventing a new chrome treatment.
6. **Never document hover in the design contract.** Hover affordances exist in component CSS (`scale-[1.03]`, `group-hover:rotate-45`); the contract documents default / active / focus only.
7. **Motion vocabulary is closed.** Reveal (`power3.out`) + Hero word-drop (`back.out(1.6)`) + Process scrub (`none`) + marquee (CSS linear) is the full set. New motion = one of these four, or it doesn't ship.

## Known Gaps

- **Validation states for form fields are not surfaced** — error, success, disabled, and inline-error styling are not declared in the prompt. Recommend deriving from the existing `border-b border-black/10` hairline (error: `border-red-500/60` + body-small error text below).
- **Dark mode for the bright sections is not specified.** Portfolio + Testimonials + FAQ + Blog assume the user is on the canonical light surface; no `prefers-color-scheme: dark` override is declared.
- **Specific blur radii beyond the hero/strategy glows are not enumerated.** The navbar `backdrop-blur-xl` and tag pill `backdrop-blur` use Tailwind defaults — exact px values not surfaced in analyzed pages.
- **Dynamic content overflow** — testimonial slides assume copy fits the `min-h-[300px]` card; longer testimonials (>4 lines body) are not styled.
- **i18n behavior** — Hero word-split assumes English word order ("Growth Marketing / Brand Design Studio"). Translated headlines will need their own per-word `<span data-word>` markup; the GSAP stagger will follow markup order regardless.
- **Print stylesheet is not specified** — marquees, GSAP reveals, and the Process arrow have no print fallback declared.
