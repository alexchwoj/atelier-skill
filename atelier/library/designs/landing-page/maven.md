---
version: "1"
name: "Maven — Bordeaux Heritage Wine House"
description: "A 7-section heritage landing for a Bordeaux négociant (since 1892). Off-black base, white type, a restrained burgundy-gold accent used sparingly, a wine-red arch line, and a cinematic scroll-driven hero where 3 video slides cross-fade via clip-path over a 400vh region. GSAP-driven, with light/dark alternating sections."
colors:
  base: "hsl(0 0% 9%)"
  on-dark: "#FFFFFF"
  gold: "#A8842C"
  wine-red: "#5B1F2F"
  body: "rgba(255,255,255,0.70)"
  muted: "rgba(255,255,255,0.45)"
typography:
  display:
    fontFamily: "heritage serif"
    role: "headlines — gravitas, since-1892 voice"
  body:
    fontFamily: "sans"
    role: "body, labels"
spacing:
  base: "4px"
  hero-region: "400vh scroll-driven hero"
rounded:
  arch: "wine arch frame (Gallery)"
  pill: "9999px"
components:
  scroll-hero: "3 video slides cross-fading via clip-path ellipse expansion across a 400vh scroll region"
  wine-arch-gallery: "Arch-framed gallery with #5B1F2F frame line"
  floating-nav: "Auto-inverts on light/dark sections"
  age-gate: "Modal on first load"
---

# Maven — Bordeaux Heritage Wine House

> Fivefold showcase. Pairs with the Maven prompt. Use this to keep pages you build *after* the landing — portfolio, partners, contact — carrying the same since-1892 gravitas.

## Overview

Maven is **a heritage Bordeaux wine house** — a négociant since 1892 — and the design carries that gravitas like a cellar carries age: dark, hushed, candle-gold. It's not a wine *shop*; it's a house with history, speaking to European B2B partners with cinematic restraint. The signature is a slow, scroll-driven hero where three video slides dissolve into one another — a brand film you walk through, not a page you skim.

The governing decision: **heritage is conveyed through gravitas and restraint, not ornament.** Off-black depth, a serif with weight, and gold used so sparingly it reads as precious — every choice signals "established, serious, expensive." The cinematic scroll is the flex that says a 130-year-old house is also impeccably modern.

The system extends across surfaces by holding three constants: the off-black base, the heritage serif at display sizes, and gold reserved for moments of consequence (CTAs, links, the active nav state). New pages — portfolio, partners, contact — inherit alternating light/dark bands and a FloatingNav that auto-inverts. Wine-red is reserved for architectural framing (the Gallery arch) so it never collides with gold as a UI accent. The result is a single voice: engraved-label dignity, never startup energy.

**Key Characteristics:**
- **Off-black base** (`{colors.base}` — hsl(0 0% 9%)) — warm-leaning, like a dim cellar, not a void.
- **Single gold accent** (`{colors.gold}` — #A8842C) — aged, medal-tone, deployed only where it must.
- **Heritage serif** for headlines; sans for body — engraved label voice over modern startup voice.
- **Scroll-driven hero** — 3 video slides cross-fade via clip-path ellipse expansion across a 400vh region.
- **Wine-red arch frame** (`{colors.wine-red}` — #5B1F2F) for the Gallery — the product's color, used architecturally.
- **Alternating light/dark bands** for rhythm — the FloatingNav auto-inverts to remain legible.
- **GSAP 3.14** (ScrollTrigger + useGSAP) drives motion; framer-motion intentionally avoided.
- **Age-gate modal** on first load — regulatory + tonal, sets the "serious house" register immediately.

## Colors

> **Source pages analyzed:** Landing (7 sections — scroll hero, story, terroir, gallery, vintages, partners, contact-CTA) — heritage wine house, B2B négociant.

Dark, warm, heritage. Gold is the jewel; everything else is restraint.

### Surface

- **Base** (`{colors.base}` — hsl(0 0% 9%)): Off-black cellar depth. Warm-leaning, not pure black — like a dim room, not a void. The default canvas for dark bands.
- **Light band** (#F4EFE6, ivory): An inverse band — the candle-glow side of the cellar — used to break the dark rhythm and let serif headlines sit in daylight gravitas.

### Text

- **On-dark** (`{colors.on-dark}` — #FFFFFF): Display + heading type on dark bands. White, not cream, so the serif reads engraved.
- **Body** (`{colors.body}` — rgba(255,255,255,0.70)): Paragraph copy on dark bands. The 30% drop creates a calm reading layer beneath the white headlines.
- **Muted** (`{colors.muted}` — rgba(255,255,255,0.45)): Labels, eyebrows, captions, footnote rows.

### Brand & Accent

- **Gold** (`{colors.gold}` — #A8842C, burgundy-gold): **The single accent, kept rare precisely so it reads as precious.** A muted, aged gold (medal/wine-label gold), never bright or flashy. Used on CTAs, hover/active fills, links, the active FloatingNav state, and an occasional tinted word in a headline. Its scarcity is the luxury — flood the page with gold and it becomes cheap.

### Architectural Color

- **Wine-red** (`{colors.wine-red}` — #5B1F2F): Reserved for the Gallery arch frame line — the color of the wine itself, used architecturally, never as a UI accent. Treat it like the colour of the building's structure, not the colour of a button.

### Forbidden

- **No purple/blue/teal** — they break the heritage palette. **No bright golds** — they cheapen the accent. **No pure-black** — too modern, too flat.

## Typography

### Font Family

- **Display** — a heritage serif (transitional/old-style) with full CSS stack: `"Maven Heritage Serif", "Cormorant Garamond", "EB Garamond", "Hoefler Text", Georgia, serif`. OpenType features `liga` + `dlig` + `onum` (old-style figures) enabled for the engraved-label feel.
- **Body** — a humanist sans: `"Maven Sans", Inter, "Helvetica Neue", Arial, sans-serif`. OpenType `kern` + `ss01` for a slightly warmer 'a' if available.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| display-xl | 96px | 400 | 1.02 | -0.02em | Hero headline over scroll video |
| display-lg | 72px | 400 | 1.05 | -0.015em | Section openers (Story, Terroir) |
| display-md | 56px | 400 | 1.08 | -0.01em | Vintage names, Gallery title |
| heading-lg | 40px | 500 | 1.12 | -0.005em | Sub-section anchors |
| heading-md | 28px | 500 | 1.2 | 0 | Card titles, vintage entries |
| body-lg | 20px | 400 | 1.5 | 0 | Lead paragraphs (Story intro) |
| body-md | 17px | 400 | 1.55 | 0 | Default body copy |
| body-sm | 14px | 400 | 1.5 | 0.01em | Captions, footnotes |
| label | 12px | 500 | 1.2 | 0.14em | Eyebrows ("EST. 1892"), nav labels — UPPERCASE |
| micro | 11px | 400 | 1.3 | 0.06em | Legal, age-gate fine print |

### Principles

- **Serif for gravitas, sans for utility** — never reverse. The serif carries the house's age; the sans carries the work.
- **Negative letter-spacing at display sizes** — tighten as size grows so headlines read as engraved type, not as set type.
- **Eyebrows are UPPERCASE with 0.14em tracking** — the only place uppercase is allowed; it functions as a date-stamp.
- **Body sits at 17px, not 16px** — the extra point matches the unhurried pace.
- **Weight 600+ is intentionally absent** — no bold; emphasis comes from size + serif, never from heaviness.
- **Old-style figures (onum) by default** — numerals sit on the baseline like a wine label, not a spreadsheet.

### Note on Font Substitutes

If the Maven Heritage Serif isn't available, substitute Cormorant Garamond at the same metrics; add `font-feature-settings: "onum"` and reduce tracking by ~0.01em to preserve the engraved feel. Avoid Playfair Display — its high stroke contrast reads modern editorial, not heritage. For the sans, Inter is the only acceptable fallback; Helvetica Neue runs second.

## Layout

### Spacing System

- **Base unit**: 4px. All spacing is a multiple.
- **Scale**: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 / 192 px.
- **Section padding (desktop)**: 192px top + bottom on dark bands, 128px on light bands — dark sections breathe more.
- **Section padding (mobile)**: 96px top + bottom.
- **Card padding**: 32px (compact tiles) / 48px (vintage cards) / 64px (story blocks).
- **Universal rhythm**: every section that contains an eyebrow uses 16px gap eyebrow→headline, 24px headline→lede, 48px lede→supporting copy.

### Grid & Container

- **Max content width**: 1320px (Landing). Story copy capped at 720px measure (~ 62-72 characters).
- **Columns**: 12-column desktop grid, 24px gutters. Gallery uses asymmetric 8 / 4 splits to evoke architectural framing.
- **Hero region**: 400vh scroll-driven; content layer is 100vh sticky with the video stage behind, copy + UI in front.

### Whitespace Philosophy

A house doesn't rush. Whitespace in Maven is the silence of a tasting room — generous between sections (192px on dark) so each band lands like a page-turn, tight within blocks so prose reads as a continuous argument. The eye is allowed to rest before the next vintage is poured.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | No shadow, no border | Default surface inside dark bands |
| 1 — Soft hairline | 1px solid rgba(255,255,255,0.08) | Card edges, divider rules between vintages |
| 2 — Backdrop blur | 24px blur + 1px hairline on rgba(20,20,20,0.55) | FloatingNav glass, age-gate modal scrim |
| 3 — Product shadow | 0 40px 80px rgba(0,0,0,0.55) | Floating bottle imagery, Gallery arch lift |

**Shadow philosophy** — depth comes from black on black, not from drop shadows on a card. The cellar is dim; shadows are felt, not seen. Soft hairlines do the work of borders so nothing reads as plastic.

**Decorative Depth**
- The **wine arch** (Gallery) is the strongest depth cue — its `{colors.wine-red}` line traces a vault, not a frame.
- Video grain in the hero stage adds analog texture; never add fake film grain to static imagery elsewhere.
- A subtle vignette (radial 0% → 18% black at edges) sits over hero video to keep the white type readable.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| none | 0 | Architectural frames, the wine arch's bottom, dividers |
| xs | 2px | Form fields, inline tags |
| sm | 4px | Small cards, label chips |
| md | 8px | Vintage cards, image tiles |
| lg | 16px | Story blocks, age-gate modal |
| arch | top 50% / bottom 0 | The Gallery wine arch — half-ellipse top, flat base |
| pill | 9999px | CTAs, FloatingNav container |

### Photography Geometry

- **Hero video stage**: 16:9 ratio, full-bleed; clip-path ellipse expands from 0% → 140% across 400vh.
- **Vintage bottle renders**: 2:3 portrait, 800×1200 minimum, transparent PNG over the dark base.
- **Gallery arch images**: clipped to the arch shape (top half-ellipse, flat base) — never auto-rounded.
- **Terroir landscape crops**: 21:9 cinematic banner.
- **Image radius behavior**: only the standard tokens above; no per-corner radii. Arch is the single non-rectangular shape.
- **Loading strategy**: hero video preloads `metadata` only; subsequent slides lazy-load on ScrollTrigger entry; bottle PNGs use srcset 1x/2x.

## Components

### Top Navigation

**FloatingNav** `{component.floating-nav}` — A capsule-shaped glass nav floating top-center, 56px tall, padding 8px 16px, radius `pill`. Backdrop blur 24px + 1px hairline. **Auto-inverts** between dark and light bands (tracks current section via ScrollTrigger). Labels use the `label` type token. Active state: text in `{colors.gold}` + 1px gold underline 2px below baseline. Focus state: 2px gold outline offset 4px, no fill change.

### Buttons

**Button — Primary** `{component.button-primary}` — Gold CTA. Background `{colors.gold}` (#A8842C), text `{colors.base}`, padding 16px 32px, radius `pill`, label type token (UPPERCASE, 12px / 500 / 0.14em). Active state: background darkens to #8E6F25, text remains base. Focus state: 2px gold outline offset 3px on the off-black base.

**Button — Secondary** `{component.button-secondary}` — Ghost on dark. Background transparent, text `{colors.on-dark}`, 1px hairline rgba(255,255,255,0.32), padding 16px 32px, radius `pill`. Active state: hairline becomes solid `{colors.gold}`, text shifts to `{colors.gold}`. Focus state: gold outline as Primary.

**Button — Utility** `{component.button-utility}` — Inline link affordance ("read the dossier →"). No background, no border, just text in `{colors.gold}`, body-md weight 400, with a trailing arrow glyph that translates +4px on active state. Focus state: 2px gold underline.

### Cards & Containers

**Card — Vintage** `{component.card-vintage}` — Dark tile for a single vintage. Background `{colors.base}` over a slightly lighter inset (hsl(0 0% 11%)), padding 48px, radius `md`, 1px hairline rgba(255,255,255,0.08). Header: vintage name in `display-md`; year in `label` eyebrow; tasting notes in `body-md` / `{colors.body}`. Active state (when carousel-selected): hairline becomes `{colors.gold}` at 0.4 opacity.

**Card — Story** `{component.card-story}` — Light tile on the inverted band. Background #F4EFE6, padding 64px, radius `lg`, no hairline. Text in #1A1410 (warm near-black). Used for the "Since 1892" narrative blocks.

**Card — Partner / Utility** `{component.card-utility}` — Compact, dark, for partner logos or contact rows. Padding 32px, radius `sm`, hairline only. No headline; just a logo or a 2-line address in `body-sm`.

### Inputs & Forms

**Input — Text** `{component.input-text}` — Used in the partner contact form and age-gate. Background transparent, 1px hairline bottom only (rgba(255,255,255,0.32)), padding 12px 0, body-md type, no radius. Label sits above in `label` token. Active state (typing): hairline becomes solid `{colors.gold}`. Focus state: hairline `{colors.gold}` + 2px gold dot 4px right of the field — a typographic, not boxy, focus ring.

### Footer

**Footer** `{component.footer}` — Off-black, 128px top padding, 64px bottom. 4-column grid (House / Vintages / Partners / Legal). Headings in `label`, links in `body-sm` / `{colors.body}`. Bottom row: micro type ("© 1892–2026 Maison Maven · Bordeaux") + age-statement line. The single gold moment is the house wordmark in the top-left, set in the heritage serif.

## Do's and Don'ts

### Do

- **Use `{colors.gold}` only on CTAs, active states, links, and one tinted word per headline at most.**
- **Set display headlines in the heritage serif at weight 400 with negative tracking.**
- **Apply the `pill` radius only to the FloatingNav and Primary/Secondary buttons.**
- **Reserve `{colors.wine-red}` for the Gallery arch frame** — never for buttons, never for text.
- **Keep body copy at 17px / line-height 1.55** for the unhurried tasting pace.
- **Alternate dark and light bands** so the FloatingNav inversion has somewhere to go.
- **Drive motion with GSAP ScrollTrigger** and gate the 400vh hero behind `prefers-reduced-motion`.
- **Preload the first hero video's metadata** and lazy-load slides 2 + 3 on ScrollTrigger entry.
- **Use the arch shape for Gallery images only** — every other image uses the rectangular radius tokens.

### Don't

- **Don't flood the page with `{colors.gold}`** — overuse turns "precious" into "cheap."
- **Don't introduce purple, blue, teal, or bright golds** — they break the heritage palette.
- **Don't use framer-motion** — this house is GSAP-driven by design.
- **Don't bold the serif** — emphasis comes from size, not weight.
- **Don't let the scroll-video stutter** — jank destroys the expensive-heritage illusion.
- **Don't apply drop shadows to cards** — depth lives in hairlines + black-on-black, not in elevation cards.
- **Don't add the cut elements back** (Lottie, 4-office address grid) — they were removed for focus.
- **Don't rush pacing** — the 400vh hero is the tasting-pace, intentional.
- **Don't auto-round the arch** with border-radius shorthand — it's a clip-path shape, not a CSS radius.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤419px | Hero collapses to 1 video, 200vh region; nav becomes hamburger; all sections single-column. |
| Phone | 420-640px | Hero: 2 videos, 280vh; gallery 1-up; section padding 96px. |
| Large phone | 641-735px | Hero: 2 videos, 320vh; type scales display-xl→72px. |
| Tablet portrait | 736-833px | Hero retained at 3 videos, 360vh; gallery 2-up; nav inverts but stays floating. |
| Tablet landscape | 834-1023px | Full 400vh hero; gallery 2-up; section padding 144px. |
| Small desktop | 1024-1068px | Full system engaged; max-width 960px content. |
| Desktop | 1069-1440px | Reference layout; max-width 1320px; section padding 192px. |
| Wide desktop | ≥1441px | Content stays at 1320px; surplus space becomes margin; type does not scale further. |

### Touch Targets

- **Minimum size**: 44×44px (Primary/Secondary buttons satisfy at 16px×32px padding + label height).
- **FloatingNav links** get an invisible 44px tap area even though the visual is 24px.
- **Form fields** are 48px tall on touch breakpoints (vs 40px on desktop).

### Collapsing Strategy

- **FloatingNav** → collapses to a single gold-underlined "Menu" label that opens a full-screen overlay sheet on ≤735px.
- **Vintage carousel** → horizontal scroll-snap on touch; arrow buttons hide.
- **Gallery arch** → preserved at all widths; one arch per row below tablet portrait.
- **Hero typography** → display-xl steps down to 72px at large phone, 56px at small phone.
- **Footer** → 4 columns → 2 columns at tablet portrait → stacked at phone.

### Image Behavior

- **srcset**: 1x / 2x for bottle PNGs, 1x / 1.5x for landscape banners.
- **Aspect ratio** locked via CSS aspect-ratio property to prevent layout shift.
- **Lazy-loading**: `loading="lazy"` on every image below the hero; hero slides 2 + 3 lazy via ScrollTrigger.

## Iteration Guide

1. **Focus on one component per change.** Adding a new card variant? Don't also redesign the buttons in the same pass.
2. **Variants live in components, not in pages.** A new vintage-card style is `card-vintage--reserve`, not a one-off in the Vintages section.
3. **Use token refs everywhere.** Hardcoding `#A8842C` instead of `{colors.gold}` is how a house drifts into a brand.
4. **Never document hover.** Default / active / focus only — Apple convention, and hover doesn't exist on the touch breakpoints anyway.
5. **Serif for display, sans for body — full stop.** If a new role needs the serif, justify it against the heritage voice; if it needs the sans, justify it against utility.
6. **No shadows; hairlines + black-on-black do the work.** If you reach for a drop shadow, you're solving the wrong problem.
7. **Chrome (nav, modal scrim, glass) inverts; surfaces (cards, hero) do not.** Keep the inversion contract intact when adding a new chrome element.

## Known Gaps

- **B2B trade flow (product catalogue, partner login, order portal) isn't specified** — build it in the same dark heritage system; resist a generic e-commerce grid.
- **Scroll-hero performance on low-end mobile** needs a documented reduced mode (1 video, no clip-path) so it never janks.
- **Age-gate persistence** (cookie vs. session) and its accessibility (focus trap, screen-reader copy) aren't surfaced in the analyzed pages.
- **Form validation states** (error, success, in-flight) aren't documented — extend from the input gold-hairline pattern.
- **The heritage serif specification** is named generically; production needs a licensed font decision (Maven Heritage Serif vs. Cormorant Garamond licensing) before launch.
- **Dark/light band ordering for new pages** isn't prescribed — establish a per-page rhythm decision when adding portfolio / partners / contact.
