---
version: "1"
name: "Design System Inspired by Spotlight"
description: "Spotlight's canvas is pure black #000000 behind a full-bleed looping background video and two darkening overlays. Every other color on the page is white #ffffff held at graded opacity — there is no accent color anywhere, the system is fully monochrome. The signature surface is the cinematic video stage; the page rhythm is a single-screen hero where one oversized tight-grotesque headline owns the optical center, four floating corner labels drift at the edges, and a single white pill CTA carries the only filled element."
colors:
  black: "#000000"            # page canvas — the body and the video block fall to this
  white: "#ffffff"            # primary text, all marks, the CTA fill
  white-85: "rgba(255,255,255,0.85)"  # partner wordmarks
  white-80: "rgba(255,255,255,0.80)"  # nav links (→ white on hover)
  white-78: "rgba(255,255,255,0.78)"  # the 4 corner tag labels
  white-72: "rgba(255,255,255,0.72)"  # rating row text
  white-60: "rgba(255,255,255,0.60)"  # subtitle + footer label
  cta-ink: "#0a0a0a"          # CTA label text on the white pill — near-black, not #000
  overlay-flat: "rgba(0,0,0,0.25)"    # video overlay 1 — flat darken
  overlay-grad: "black/40 → transparent → black/55"  # video overlay 2 — vertical gradient
typography:
  display: { fontFamily: "\"Inter Tight\", ui-sans-serif, system-ui, sans-serif", weights: "400, 500, 600", role: "logo wordmark, headline, CTA label, rating numbers, partner wordmarks" }
  body:    { fontFamily: "\"Inter\", ui-sans-serif, system-ui, sans-serif", weights: "400, 500", role: "default body font — subtitle, nav links, tag labels, footer label" }
spacing:
  base: "4px"
  xs: "10px"                  # gap-2.5 — logo mark↔word, CTA gap, tag mark↔word
  sm: "22px"                  # subtitle top margin (mt-[22px])
  md: "26px"                  # rating-row top margin (mt-[26px]); also CTA px-7 (28px)
  lg: "28px"                  # footer gap-7; nav group gap-9 (36px) sits just above
  xl: "52px"                  # partner-row horizontal gap (gap-x-[52px])
  pad: "24px"                 # px-6 — the global horizontal rail
rounded:
  md: "5px"                   # logo mark rx (rounded square)
  pill: "9999px"              # the single white CTA (rounded-full)
shadow:
  cta-glow: "0 12px 40px -8px rgba(255,255,255,0.35) — soft white glow under the CTA on hover only"
components:
  cta-pill: "The only filled element — bg {colors.white}, label {colors.cta-ink} Inter Tight 500 at 15px, px-7 py-[15px], rounded {rounded.pill}, lifts -translate-y-0.5 with {shadow.cta-glow} on hover"
  wordmark: "Spotlight — Inter Tight 600 at 17px, -0.01em tracking, white, preceded by an 18px rounded-square + 4-point spark mark"
  tag: "Floating corner label — absolute, hidden below lg, Inter 13px white/78, +0.01em tracking, inline-flex with a 15px outline icon; carries both floaty + rise with a two-value animationDelay"
  rise: "Entrance fade-up — opacity 0→1, translateY(18px)→0, 0.9s cubic-bezier(0.2,0.7,0.2,1) forwards"
  floaty: "Idle drift — translateY 0→-6px→0, 6s ease-in-out infinite; on the 4 corner tags only"
---

# Design System Inspired by Spotlight

## Overview

Spotlight's stage is **pure black** `{colors.black}` (#000000) — set on `body` and on the video block beneath it, so the page bottoms out to true black with no surface ladder. Onto that black sits a **full-bleed looping background video** (`object-cover`, `autoPlay muted loop playsInline`) and two darkening overlays: a flat `{colors.overlay-flat}` black/25 wash and a vertical `{colors.overlay-grad}` gradient (black/40 → transparent → black/55) that keeps the type legible against any frame of footage. The video and overlays live at `-z-10`; every piece of content rides above on `relative z-10`.

Above that stage, **every single color is white `{colors.white}` at graded opacity** — there is no accent color of any kind. White at full strength carries the headline, the logo, all SVG marks, and the CTA fill; white is then stepped down through `{colors.white-85}` (partner wordmarks), `{colors.white-80}` (nav links), `{colors.white-78}` (corner tags), `{colors.white-72}` (rating), and `{colors.white-60}` (subtitle and footer label). The one non-white value is `{colors.cta-ink}` #0a0a0a, the near-black label sitting inside the white pill. **Most AI-product sites lean on purple-cyan gradients, neon glow, and a colored star-rating badge to signal intelligence — Spotlight refuses every accent, holding a pure white-on-black monochrome stage over a looping video and letting one oversized grotesque headline carry the whole page.**

Display type runs **Inter Tight** — a tight grotesque used for the logo wordmark, the headline, the CTA label, the rating numbers, and the partner wordmarks. The headline scales fluidly via `clamp(2rem, 5vw, 4.4rem)` at weight 500 (`font-medium`) on a `1.04` line-height with `-0.025em` tracking, locked to exactly two lines on desktop by `md:whitespace-nowrap` and a literal `<br />`. **Inter** is the quieter body voice for the subtitle, nav links, tag labels, and footer caption.

The page rhythm is a **single-screen hero** — `min-h-[100svh]`, a flex column holding the centered nav on top, the hero `flex-1` in the middle, and the partners footer at the bottom. The hero's protagonist is the centered type stack (headline → subtitle → CTA → rating); four `floaty` corner tags drift at the left and right edges (desktop only), and a single white pill CTA is the only filled element on an otherwise weightless, monochrome page. Entrance is a staggered `rise` fade-up cascading top-to-bottom (nav 0 → footer 0.7s).

**Key Characteristics:**
- **Pure-black canvas** — `{colors.black}` (#000000) on the body and video block; never a dark grey, never a tint.
- **Fully monochrome, zero accent** — every color above the canvas is `{colors.white}` at one of six opacity steps (100 / 85 / 80 / 78 / 72 / 60%); the only other value is `{colors.cta-ink}` #0a0a0a inside the white pill.
- **Looping video stage** — full-bleed `object-cover` video at `-z-10` under two overlays (flat black/25 + black/40→transparent→black/55 gradient).
- **Inter Tight headline** at `clamp(2rem,5vw,4.4rem)`, weight 500, line-height 1.04, -0.025em — locked to two lines on desktop via `<br />` + `md:whitespace-nowrap`.
- **One filled element** — the white `{components.cta-pill}`; everything else is text, hairline-thin outline icons, or video.
- **Two CSS animations only** — the `{components.rise}` entrance fade-up and the `{components.floaty}` corner drift; no animation library, no scroll motion.
- **Hand-written inline SVGs** — logo mark, 4 tag icons, CTA arrow, rating star, and 4 partner marks are all literal `<svg>`; no icon library.
- **The single shadow is the `{shadow.cta-glow}`** white glow under the CTA on hover — nowhere else.
- No accent color, no gradient on text, no second filled button, no card, no border, no light mode.

## Colors

> Source pages: the single Spotlight hero — black canvas + looping video stage, centered nav, the headline/subtitle/CTA/rating stack, four floating corner tags, and the partners footer. The system is one viewport; there are no other live surfaces.

### Brand & Accent
- **None.** Spotlight has **no accent color**. The brand signal is the *absence* of color: a pure white-on-black monochrome field. Where most products would place an accent (the CTA, the logo, the rating), Spotlight uses white or near-black. Introducing any hue (purple, indigo, neon, blue, a colored rating mark, a gradient on text) breaks the system — the monochrome restraint **is** the identity.

### Surface
- **Black** ({colors.black}): The canvas — #000000, set on `body` and on the `bg-black` video block so the page falls to true black behind and beyond the footage. There is no surface ladder, no card surface, no panel; the only "surface" is the looping video plus its two overlays.
- **Video overlays**: Two stacked darkening layers over the video — `{colors.overlay-flat}` (flat `bg-black/25`) and `{colors.overlay-grad}` (`bg-gradient-to-b from-black/40 via-transparent to-black/55`). They exist only to hold text legibility against moving footage; treat them as structure, not color.

### Text
- **White** ({colors.white}): Primary type and all marks — the headline, the logo wordmark, the CTA arrow's `currentColor`, the rating star and `5.0`, and every inline-SVG stroke/fill — at full #ffffff.
- **White / 85%** ({colors.white-85}): The partner wordmarks in the footer row.
- **White / 80%** ({colors.white-80}): Nav links at rest; they transition to full `{colors.white}` on hover (`hover:text-white`).
- **White / 78%** ({colors.white-78}): The four floating corner tag labels (`text-white/[0.78]`).
- **White / 72%** ({colors.white-72}): The rating row text (`text-white/[0.72]`) — the bracketed `(+225 reviews)`.
- **White / 60%** ({colors.white-60}): The subtitle paragraph and the footer's "Integrated with the best" label.
- **CTA ink** ({colors.cta-ink}): #0a0a0a — the only non-white type value, used solely for the CTA label on the white pill. A near-black (not pure #000) so the label sits soft against the bright fill.

### Semantic
None on the marketing surface. No success / error / warning colors are present on the single hero, and there is deliberately no accent to repurpose for state. The only "overlay" colors are the two black video washes above. Semantic states would have to be introduced for later forms within the monochrome language (see Known Gaps).

## Typography

### Font Family

- **Inter Tight** — the tight-grotesque display face; loaded from Google Fonts at weights 400 / 500 / 600, fallback stack `"Inter Tight", ui-sans-serif, system-ui, sans-serif`, applied in JSX via `font-[family-name:var(--font-display)]`. Carries the logo wordmark (600), the headline (500), the CTA label (500), the rating numbers, and the partner wordmarks (600). The tightened grotesque + negative tracking is the page's typographic signature.
- **Inter** — the body and UI sans; weights 400 / 500, fallback `"Inter", ui-sans-serif, system-ui, sans-serif`, set as the default `font-family` on `body`. Carries the subtitle, nav links, the four tag labels, and the footer label. Quieter and more open than Inter Tight by design — the contrast between the two Inter cuts is the only type contrast on the page.

The page treats Inter Tight and Inter as two cuts of one voice: the tight grotesque is the protagonist (headline, CTA, marks), the regular Inter is the narrator (body, nav, captions). They never blend into one face — that subtle contrast is the point.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display}` (headline) | clamp(2rem, 5vw, 4.4rem) | 500 | 1.04 | -0.025em | Hero headline (Inter Tight; 2 lines via `<br />`) |
| `{typography.display}` (logo) | 17px | 600 | — | -0.01em | Logo wordmark `Spotlight` (Inter Tight) |
| `{typography.display}` (partners) | 19px | 600 | — | -0.01em | Partner wordmarks (Inter Tight, white/85) |
| `{typography.display}` (CTA) | 15px | 500 | — | 0 | CTA label `Step into the stream` (Inter Tight) |
| `{typography.display}` (rating num) | 13.5px | 600 | — | 0 | The `5.0` mark in the rating row (Inter Tight `<b>`) |
| subtitle | 15px | 400 | 1.6 | 0 | Intro paragraph under the headline (Inter, white/60) |
| nav | 14.5px | 400 | — | 0 | Nav links (Inter, white/80) |
| tag | 13px | 400 | — | +0.01em | The 4 corner labels (Inter, white/78) |
| footer label | 13px | 400 | — | 0 | "Integrated with the best" (Inter, white/60) |
| rating text | 13.5px | 400 | — | 0 | Bracketed `(+225 reviews)` (Inter, white/72) |

### Principles

- **The headline is the page.** Keep it to two lines; lock the desktop layout with a literal `<br />` + `md:whitespace-nowrap` so it never reflows past two lines. Inter Tight at weight 500 carries it alone.
- **Fluid display, never fixed.** The headline scales only via `clamp(2rem, 5vw, 4.4rem)` — never a hard px size.
- **Negative tracking on the display cuts** — -0.025em on the headline, -0.01em on the logo and partner wordmarks; body and tags stay neutral (the tag opens just +0.01em).
- **Weight ceiling is 600.** The wordmarks sit at 600, the headline/CTA at 500, body at 400; nothing climbs past 600 — there is no heavier display weight.
- **Two Inter cuts, kept apart.** Inter Tight is display (headline, CTA, marks), Inter is body (subtitle, nav, captions); they never share a single run of text.

### Note on Font Substitutes

Spotlight uses no licensed typeface. **Inter Tight** and **Inter** are both open-licensed on Google Fonts — load them directly from the documented `css2` URL (`Inter+Tight:wght@400;500;600` + `Inter:wght@400;500`), no substitution required. If Inter Tight is ever unavailable, the documented fallback `ui-sans-serif, system-ui` is the recommended substitute for the display; accept a slightly looser headline. Do not introduce a commercial grotesque — the open Inter family is the system of record.

## Layout

### Spacing System

- **Base unit**: 4px (Tailwind scale).
- **Tokens (front matter)**: `{spacing.xs}` 10px · `{spacing.sm}` 22px · `{spacing.md}` 26px · `{spacing.lg}` 28px · `{spacing.xl}` 52px · `{spacing.pad}` 24px.
- Global horizontal rail: `{spacing.pad}` 24px (`px-6`) on the header, hero wrapper, and footer — the one consistent side margin.
- Nav group gap: 36px (`gap-9`) between the logo and the link cluster, both centered as one group.
- Nav link gap: 30px (`gap-[30px]`) between the five links.
- Centered stack rhythm: subtitle `mt-[22px]` ({spacing.sm}), CTA `mt-9` (36px), rating `mt-[26px]` ({spacing.md}) — the vertical beat under the headline.
- CTA padding: `px-7` (28px) horizontal · `py-[15px]` (15px) vertical; the pill is wide and shallow.
- Footer: `gap-7` ({spacing.lg} 28px) between label and logo row, `pb-12` (48px) bottom; partner row `gap-x-[52px]` ({spacing.xl}) / `gap-y-6` (24px).

### Grid & Container

- **Single-screen hero**: a `min-h-[100svh]` flex column — centered `<header>` nav on top, hero `<div>` as `flex-1` filling the middle (content centered both axes), partners `<footer>` at the bottom. No scroll on the home screen.
- The hero content block caps at `max-w-[1000px]`, centered, `text-center`; the subtitle caps narrower at `max-w-[470px]` for a clean reading measure.
- The header centers its logo+links group rather than splitting left/right — the whole nav is one centered cluster.
- The four corner tags are absolutely positioned against the hero wrapper at fixed percentages (`left/right-[…] top-[…]`), drifting at the edges of the centered stack.

### Whitespace Philosophy

Whitespace is darkness. The hero breathes by letting black video carry the field — the headline owns the optical center, the subtitle and CTA bracket it with generous air, and the four tags float far out at the edges so they never crowd the type. Negative space (black) is what lets the single white CTA and the bright headline register; crowd the page and the monochrome restraint collapses into noise. Density here is a deliberate refusal, not an oversight.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow, no border | All type, the nav, the tags, the footer — everything on the black field |
| 1 (video stage) | Looping video + two black overlays at `-z-10` | The full-bleed background that all content rides above (`relative z-10`) |
| 2 (CTA glow) | `{shadow.cta-glow}` soft white glow, hover only | The single `{components.cta-pill}` |

Spotlight's depth is carried by exactly two devices: (1) the layered video-plus-overlays stage that all content sits above via a clean `relative z-10` / `-z-10` split, and (2) the white glow that makes the single CTA feel lit on hover. The brand resists drop shadows and borders everywhere else — a box-shadow under any other element would immediately drag the page from cinematic-monochrome toward generic-SaaS.

### Decorative Depth

- **The looping video stage** dominates as decorative depth — a full-bleed cinematic loop dimmed by two black overlays so type stays legible.
- **The `{components.floaty}` corner tags** add gentle parallax-like life — four labels drifting ±6px at the edges.
- **No atmospheric gradients on content, no spotlight cards, no glass, no neon.** The only gradient is the black darkening overlay on the video; the only glow is the white CTA hover.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.md}` | 5px | The logo mark — a rounded square (`rx="5"`) holding the spark glyph |
| `{rounded.pill}` | 9999px | The single white CTA (`rounded-full`) — the only fully-pilled element |

There is no card radius and no image radius on this hero — the only rounded shapes are the logo's rounded square and the pill CTA. Tag icons, the rating star, the CTA arrow, and the partner marks are unframed inline SVGs with their own intrinsic geometry.

### Photography & Illustration Geometry

- The only "photography" is the **full-bleed background video** (`object-cover`, fills the viewport, dimmed by two overlays). There are no photo frames, avatars, or screenshots.
- All marks are **hand-written inline SVGs** in white, hairline-thin (stroke 1.3–1.6) on a `0 0 24 24` viewBox: the logo's rounded square + 4-point spark; the four tag icons (a target, concentric rings, a grid panel, three stacked flow-lines); the CTA's up-right arrow; the rating star; and the four abstract partner marks (a tri-circle, an angular folded glyph, a dark-square-in-disc, and a knotted pipe form). They read as one geometric family built from the same stroke weight and viewBox, not stock icons.

## Components

### Buttons

> Measured from the live build: there is exactly one filled element on the page — the white pill CTA. Everything else is text, an outline icon, or video.

**`cta-pill`** ({components.cta-pill}) — The single primary CTA ("Step into the stream"). The only filled element on the page.
- Background `{colors.white}`, label `{colors.cta-ink}` (#0a0a0a) in Inter Tight weight 500 at 15px, padding `px-7` (28px) · `py-[15px]` (15px), rounded `{rounded.pill}` (`rounded-full`). No border. Contains a trailing 14px (`h-3.5 w-3.5`) up-right arrow SVG after the label (`gap-2.5` 10px). Hover lifts `-translate-y-0.5` and casts the `{shadow.cta-glow}` (`0 12px 40px -8px rgba(255,255,255,0.35)`); the arrow nudges `translate-x-0.5 -translate-y-0.5`. All transitions `duration-200`. There is no secondary or ghost button on the page — this CTA is singular.

### Marks & Accents

**`wordmark`** ({components.wordmark}) — The logo. Centered in the nav group, left of the links.
- The word `Spotlight` in `{colors.white}`, Inter Tight weight 600 at 17px with -0.01em tracking, preceded (gap-2.5) by an 18px inline SVG: a `rx="5"` rounded square (stroke white, 1.6) holding a 4-point spark/star path (fill white). The mark + word together are the logo — do not add a separate symbol.

**`tag`** ({components.tag}) — A floating corner label. Four instances, desktop only.
- `absolute`, `hidden lg:inline-flex`, Inter at 13px, `{colors.white-78}`, +0.01em tracking, `whitespace-nowrap`. An `items-center gap-2.5` row of a 15px outline icon (`opacity-85`) + the label. Each carries **both** `floaty` and `rise` with a **two-value `animationDelay`**: `${delay}s` for the entrance and `${delay + 0.6}s` for the float. Positions + delays:
  - `Driven by precision` — `left-[3.5%] top-[41%]`, delay `0.5` (target icon: r=9 ring + r=3 dot).
  - `Light, reimagined as thought` — `left-[11%] top-[60%]`, delay `0.7` (concentric rings r=9 + r=4.5).
  - `It's stream architecture` — `right-[3.5%] top-[41%]`, delay `0.6` (grid panel: rounded rect + interior rules).
  - `Let it flow` — `right-[9%] top-[60%]`, delay `0.8` (three stacked flow-lines, round caps).
- These are decorative atmosphere, not interactive controls — never wire them to actions.

### Rating

**`rating-row`** — The social-proof line under the CTA.
- `inline-flex items-center gap-2`, Inter 13.5px, `{colors.white-72}`, entrance delay `0.55s`. A 14px white star SVG (`fill="currentColor"`, `text-white`), then `<b>` `5.0` (Inter Tight 600, white), then `(+225 reviews)` in white/72. **Monochrome — white only.** There is no colored rating mark, no brand glyph, no accent on this line.

### Navigation

**`top-nav`** — A centered, full-width header, **not sticky**, rising in on load (`rise`, delay `0s`).
- `<header className="flex w-full justify-center px-6 py-7">` holding one centered `gap-9` group: the `{components.wordmark}` logo + a `hidden md:flex` `gap-[30px]` nav of five links. Links: `How It Flows · Use Cases · Integrate · About Us · Pricing`, each Inter 14.5px at `{colors.white-80}`, transitioning to full white on hover. Links hide below `md`; there is no mobile menu in this hero build.

### Footer (partners)

**`partners-footer`** — The bottom band, `rise` at delay `0.7s`.
- `flex flex-col items-center gap-7 px-6 pb-12`. A label `Integrated with the best` in Inter 13px `{colors.white-60}`, then a `flex-wrap` row (`gap-x-[52px] gap-y-6`) of four partner lozenges in Inter Tight 600 at 19px, `{colors.white-85}`, -0.01em. Each lozenge is an `inline-flex items-center gap-2.5` of an abstract white inline-SVG mark + a placeholder wordmark: **lumio** (tri-circle), **Kanos** (angular folded glyph), **orbis** (dark square in a white disc), **streamly** (knotted pipe form). These are fictional placeholder brands — never substitute a real company name or logo.

### Inputs & Forms

Not present on the single hero. There are no inputs, fields, or focus states to document. Any later form would have to be introduced in the same monochrome language — black field, white type at graded opacity, white outline strokes, the pill CTA, with a focus treatment built from white opacity rather than a colored ring (see Known Gaps).

## Do's and Don'ts

### Do

- Keep the canvas pure black `{colors.black}` (#000000) on the body and the video block — true black, never a dark grey or tint.
- Stay fully monochrome: every color above the canvas is `{colors.white}` at one of the six opacity steps (100 / 85 / 80 / 78 / 72 / 60%), plus `{colors.cta-ink}` only on the pill label.
- Run the background as a full-bleed `object-cover` looping video at `-z-10`, dimmed by the flat black/25 + black/40→transparent→black/55 overlays.
- Set the headline in Inter Tight weight 500, two lines via `<br />` + `md:whitespace-nowrap`, scaling with `clamp(2rem,5vw,4.4rem)` at -0.025em / 1.04.
- Keep the white `{components.cta-pill}` the only filled element; reserve the `{shadow.cta-glow}` for its hover.
- Give each corner `{components.tag}` its two-value `animationDelay` (`delay`, `delay + 0.6`) so `rise` and `floaty` start independently.
- Hand-write every icon as inline `<svg>` on the `0 0 24 24` viewBox in white; keep the rating line white-only (`5.0 (+225 reviews)`).

### Don't

- Don't introduce any accent color — no purple, indigo, neon, blue, colored rating mark, or gradient on text. The monochrome is the brand.
- Don't recolor the canvas to grey, navy, or a tint; don't ship a light mode.
- Don't add a second filled button, a card, a panel, a border, or a box-shadow other than the CTA hover glow.
- Don't let the headline reflow past two lines on desktop, and don't give it a fixed px size — `clamp` does all the scaling.
- Don't swap the inline SVGs for an icon-library equivalent, and don't add a real brand logo to the partners row.
- Don't add a third animation, scroll motion, parallax, typewriter, or counters — only `rise` + `floaty` exist.
- Don't drop or re-time the entrance delays (nav 0 / headline 0.1 / subtitle 0.25 / CTA 0.4 / rating 0.55 / footer 0.7; tags 0.5 / 0.6 / 0.7 / 0.8).
- Don't use `#000` for the CTA label — it is `{colors.cta-ink}` #0a0a0a by design.
- Don't promote any white-opacity step out of its role (e.g. nav at /80, tags at /78, subtitle at /60) — the ladder is deliberate.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <768px (below `md`) | Nav links hidden (`hidden md:flex`) — logo only, no mobile menu; corner tags hidden; headline `whitespace-normal` (wraps naturally); headline near the `clamp` floor (2rem) |
| Tablet | 768–1023px (`md`) | Nav links appear; headline `md:whitespace-nowrap` locks to two lines; corner tags still hidden (below `lg`) |
| Desktop | ≥1024px (`lg`) | All four corner tags appear (`hidden lg:inline-flex`); headline scales by `5vw` toward the 4.4rem cap |
| Wide | ≥1280px+ | Content holds at `max-w-[1000px]`; headline at the 4.4rem cap; tags at their fixed percentage positions |

### Touch Targets

- The `{components.cta-pill}` padding (`px-7 py-[15px]`) clears the ≥44px minimum tap target comfortably.
- The four corner tags are decorative and hidden below `lg`, so they never become small touch targets on mobile.
- Nav links are hidden below `md` — there is no mobile nav to tap in this hero build (see Known Gaps).

### Collapsing Strategy

- **The home screen never scrolls** — it is one `min-h-[100svh]` viewport at every width; only the headline size (`clamp`), the headline wrap, and the visibility of nav/tags change.
- **Nav**: collapses to the logo alone below `md`; the five links reappear at `md`. No hamburger/sheet exists yet.
- **Corner tags**: hidden below `lg` so they never overlap the centered headline on small screens.
- **Display type**: `clamp(2rem, 5vw, 4.4rem)` does all the scaling — never a fixed display size. The partner row wraps via `flex-wrap`.

### Image Behavior

- The background video is `object-cover h-full w-full`, so it crops to fill at every aspect ratio while the two overlays hold legibility; keep `autoPlay muted loop playsInline preload="auto"`.
- Respect `prefers-reduced-motion: reduce`: the global guard disables `floaty` and `rise` and forces `.rise { opacity: 1 }`, so all content stays visible and static.
- Serve the video from the documented CDN URL (`/hero.mp4` locally → `https://cdn.5sdesign.art/projects/spotlight/hero.mp4`); never swap in a stock/placeholder clip.

## Iteration Guide

1. New section or page? Start from the black `{colors.black}` canvas + the video stage + an Inter Tight headline + Inter body. The dark monochrome shell is the brand.
2. Keep the monochrome rule absolute — a new "accent" need is answered by a brighter white step (toward `{colors.white}`) or by nothing, never by introducing a hue.
3. Reference everything by token name — `{colors.x}`, `{rounded.x}`, `{typography.x}`, `{components.x}` — so a value change cascades.
4. Decide first which one device carries any new depth: the video stage or the CTA glow. A new surface that "needs depth" gets neither a border nor a box-shadow — rethink the hierarchy instead.
5. Display vs body stays a hard line: Inter Tight weight 500–600 + negative tracking for headlines/marks/CTA; Inter 400 + neutral tracking for everything else.
6. Treat the white pill as the single filled element — earning a second filled button requires a documented decision, not a one-off.
7. Keep motion to `rise` + `floaty`; any new animation requires its own governing decision and must respect `prefers-reduced-motion`.

## Known Gaps

- Beyond the single hero, later-page layouts (use-cases, pricing, about, contact) are not specified — design them in the same monochrome language: black canvas, video or flat-black surfaces, Inter Tight heads, Inter body, white-at-opacity text, the pill CTA. The non-headline rows in the type table are read directly from the hero; deeper scales would be estimated for new pages.
- **Pure monochrome means there is no color system to extend** — no accent, no semantic palette. Form / input / validation states (error, success, disabled, focus) are not surfaced and would have to be built from white opacity (e.g. a white focus ring) rather than colored states.
- The four corner tags and the partner lozenges are **decorative** — labels and placeholder brands (lumio / Kanos / orbis / streamly), not real partners and not interactive; a real integration list needs its own treatment.
- **No mobile navigation** — links simply hide below `md` with no hamburger or sheet; a real mobile menu must be introduced.
- The headline is **fixed at two lines** via a literal `<br />` + `md:whitespace-nowrap`; different copy lengths or locales (i18n) may break the two-line lock and need re-balancing.
- The background is a single looping video served from the CDN; there is no poster image, no fallback frame, and no still-image variant specified for slow connections or video-blocked contexts.
