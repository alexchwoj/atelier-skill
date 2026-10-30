---
version: "1"
name: "Design System Inspired by Estudio"
description: "Estudio's canvas is Linen #fafffa — a near-white with a faint green cast, never #ffffff. The single chromatic accent is Voltage green #2bee4b, rationed to the CTA fill, the wordmark split, the eyebrow ticks, and one || mark. The signature surface is an interactive black-and-white image-trail that spawns broadsheet tiles at the cursor; the page rhythm is a single-screen editorial masthead where an oversized Fraunces serif headline owns the optical center and nothing scrolls."
colors:
  linen: "#fafffa"          # canvas / page background — near-white, green cast
  ink: "#121613"            # primary text, dark surface in poster art
  bark: "#232924"           # secondary dark surface — duotone poster fields only
  sage: "#516254"           # muted text — eyebrow label, Times captions
  mist: "#c8d2c8"           # hairlines / dividers / scrollbar thumb
  voltage: "#2bee4b"        # accent — ONLY: CTA fill, dio split, ticks, ||
  moss: "#93b799"           # secondary green — scrollbar hover, poster art (never primary)
  pollen: "#c4e4c9"         # tertiary green — incidental poster art only
typography:
  display: { fontFamily: "Fraunces, Georgia, serif", weights: "300-400", role: "literary masthead headline — light weight, line 2 italic" }
  body:    { fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", weights: "350, 550", role: "standfirst, eyebrow, nav, CTA — signature weight 350" }
  poster:  { fontFamily: "'Playfair Display', Georgia, serif", weights: "400-600", role: "architectural display — inside poster art only, never page type" }
  caption: { fontFamily: "Times, 'Times New Roman', serif", weights: "400 italic", role: "small observational captions, Sage" }
spacing:
  base: "4px"
  xs: "8px"                 # gap-3 on CTA contents
  sm: "16px"                # eyebrow gap (gap-4), standfirst top (mt-8 ≈ 32px see md)
  md: "20px"                # CTA vertical padding (py-5)
  lg: "28px"                # action cluster gap (gap-7)
  xl: "50px"                # page rail (px-[50px]) + CTA horizontal padding
  section: "96px"           # later-page section rhythm (estimated)
rounded:
  sm5: "5px"                # tiny inline chips
  btn: "10px"               # the single Voltage CTA
  card: "14px"              # cards, panels
  img: "14px"               # image-trail tiles, photo frames
  pill: "9999px"            # only where an element is truly circular
shadow:
  voltage: "rgba(16,94,29,0.45) 1px 8px 20px 0px, rgba(18,146,39,0.25) 1px 8px 20px 0px — dual-layer green halo, the CTA only"
components:
  btn-voltage: "The only filled button — bg {colors.voltage}, Ink caps 550, padding 20px 50px, rounded {rounded.btn}, {shadow.voltage} glow"
  tick: "2px × 50px Voltage rule — flanks the eyebrow at a shortened w-8"
  eyebrow: "11px uppercase, 0.16em tracking, Sage, Inter 350"
  wordmark: "Estu (Ink) + dio (Voltage) — the green split IS the logo, Inter 550 at 14px"
  link-underline: "Ghost link — currentColor underline sweeps in left-to-right over 0.45s"
  image-trail: "GSAP cursor trail of 8 B&W broadsheet tiles drifting and fading across the masthead"
---

# Design System Inspired by Estudio

## Overview

Estudio's marketing canvas is the lightest surface in this collection — `{colors.linen}` is #fafffa, a near-white carrying a faint green cast, deliberately warmer than `#ffffff` so the page reads as printed broadsheet paper rather than a clinical SaaS sheet. Onto that paper sit near-black `{colors.ink}` (#121613) type and four monochrome-green neutrals: `{colors.bark}` #232924 for dark poster fields, `{colors.sage}` #516254 for muted labels and captions, and `{colors.mist}` #c8d2c8 for hairlines and the scrollbar thumb. Every neutral shares the same green undertone, so the whole field sits in one family rather than fighting itself.

The single chromatic accent is **Voltage green** `{colors.voltage}` (#2bee4b). It is treated as a scarce resource, not a color: it appears on the `{components.btn-voltage}` fill, the `dio` half of the wordmark, the two eyebrow `{components.tick}` marks, and the lone `||` mark in the nav — four placements, nowhere else. Two further greens exist in the token sheet, `{colors.moss}` #93b799 and `{colors.pollen}` #c4e4c9, but they are confined to scrollbar-hover and incidental poster art; neither is ever promoted to a primary accent or allowed onto the CTA. **Most design-studio sites lean on color, full-bleed photography, and gradient atmosphere to signal creativity — Estudio refuses all of it, holding to one rationed green against a monochrome page and letting the typography carry the taste.**

Display type runs **Fraunces** (with `Georgia` fallback) at `font-light` weight 300, scaling fluidly via `clamp(40px, 8vw, 104px)` on a tight `0.90` line-height, the second headline line set in italic — the one expressive move on the page. The body voice is **Inter** at the signature **weight 350**, a low-key sans that never climbs past 550 (the ceiling the wordmark and CTA caps sit at). A third serif, Playfair Display, lives only inside the poster art; Times serves the rare italic caption.

The page rhythm is a **single-screen editorial masthead** — one viewport tall, no scroll, no second section. A `min-h-screen` flex column holds the Linen navbar on top and the hero `flex-1` below it. The hero's protagonist is the **interactive black-and-white image-trail**: as the cursor crosses the masthead, GSAP spawns broadsheet tiles at the pointer, drifts them toward it, then fades and shrinks them away. The centered type stack (eyebrow → serif headline → standfirst → CTA cluster) floats above the trail and is `pointer-events-none` so the cursor always feeds the art behind it.

**Key Characteristics:**
- **Light editorial canvas** — `{colors.linen}` (#fafffa) is a near-white with a green cast, never `#ffffff`, never dark.
- **Voltage-green accent** (`{colors.voltage}` #2bee4b) — used scarcely on the CTA fill, the `dio` split, the eyebrow ticks, and the `||` mark — never on headlines, body, or backgrounds.
- **Literary serif masthead** — Fraunces at weight 300, `clamp(40px,8vw,104px)`, line-height 0.90, line 2 italic — the headline IS the page.
- **Inter at weight 350** carries every word of body, eyebrow, nav, and CTA; weight never exceeds 550.
- **The image-trail is the only motion** — 8 B&W broadsheet tiles cycling at the cursor; no scroll, parallax, typewriter, or counters.
- Soft corners only — `{rounded.card}` / `{rounded.img}` 14px on tiles, `{rounded.btn}` 10px on the button; `{rounded.pill}` reserved for truly circular shapes.
- The single drop shadow on the page is the `{shadow.voltage}` dual-layer green halo under the CTA.
- Imagery is strictly black-and-white / duotone; color enters the page only as Voltage on the accents.
- No second chromatic color, no gradient page background, no card borders, no elevation, no font weight above 550.

## Colors

> Source pages: the single-screen Estudio hero — the Linen navbar with the green-split wordmark, the centered eyebrow + serif headline + standfirst + CTA cluster, and the B&W image-trail field. The system is one viewport; there are no other live surfaces.

### Brand & Accent
- **Voltage** ({colors.voltage}): The signature Estudio accent (#2bee4b) — the `{components.btn-voltage}` fill, the `dio` of the `{components.wordmark}`, the two `{components.tick}` marks flanking the eyebrow, and the `||` mark. Four placements total. Never a headline, body, background, or large fill. This rationing is the brand.
- **Moss** ({colors.moss}): Secondary green (#93b799) — scrollbar-thumb hover and incidental poster art. Never promoted to a primary accent, never on the CTA.
- **Pollen** ({colors.pollen}): Tertiary green (#c4e4c9) — incidental poster-art tones only.

### Surface
- **Linen** ({colors.linen}): Default page background — #fafffa, a near-white with a faint green cast. Warmer and more alive than `#ffffff`, which keeps the broadsheet from feeling clinical. The canvas, the navbar, and the hero section are all Linen; there is no surface ladder.
- **Bark** ({colors.bark}): Secondary dark surface (#232924) — appears inside duotone poster fields (e.g. the giant ampersand tile). Not a text color and not a page surface on Linen.

### Text
- **Ink** ({colors.ink}): All page type — the masthead headline, the standfirst, the nav links, the CTA label — at #121613, a near-black with a green undertone so it sits in the canvas family rather than fighting it. Also the dark fill in poster art and the `::selection` background.
- **Sage** ({colors.sage}): Muted type at #516254 — the eyebrow label and the Times captions. A desaturated green-grey: quiet, never invisible.

### Hairline
- **Mist** ({colors.mist}): Hairlines, dividers, and the scrollbar thumb at #c8d2c8 — the lightest structural line, present but never loud. The scrollbar thumb sits on Mist and shifts to Moss on hover.

### Semantic
None on the marketing surface. No success / error / warning colors are present on the single hero; semantic states would have to be introduced for later forms (see Known Gaps). The only "overlay" is the `::selection` rule — Ink background with Linen text.

## Typography

### Font Family

- **Fraunces** — the literary display serif; fallback stack `Fraunces, Georgia, serif`. Loaded with optical sizing (`font-optical-sizing: auto`) so it stays correct at billboard scale. Carries the masthead headline only, at `font-light` weight 300; the second line is italic.
- **Inter** — the body and UI sans; fallback stack `Inter, ui-sans-serif, system-ui, sans-serif`. Carries the standfirst, eyebrow, nav links, wordmark, and CTA label. The signature is **weight 350**; the ceiling is 550 (wordmark + CTA caps).
- **Playfair Display** — the architectural display serif; fallback `'Playfair Display', Georgia, serif`, optical sizing on. Used only inside the poster-art tiles (the giant serif `E` and `&`). An asset face, not page type.
- **Times** — the caption serif; fallback `Times, 'Times New Roman', serif`. Italic, Sage, for short observational fragments (`.caption-times`). Not a headline or body face.

The page treats Fraunces and Inter as two distinct voices: the serif is the literary protagonist, the sans is the quiet narrator. They never blend into one continuous voice — that contrast is the point.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display}` (hero) | clamp(40px, 8vw, 104px) | 300 | 0.90 | -0.02em | Masthead headline (Fraunces; line 2 italic) |
| `{typography.display}` (section) | 56px | 300 | 0.95 | -0.02em | Section openers on later pages (Fraunces, estimated) |
| h2 | 32px | 400 | 1.10 | -0.01em | Sub-section heads on later pages (estimated) |
| h3 | 20px | 500 | 1.25 | 0 | Card / list titles on later pages (estimated) |
| standfirst | 16px | 350 | 1.40 | -0.32px | Intro paragraph under the headline (Inter) |
| body | 16px | 350 | 1.50 | 0 | Long-form copy on later pages (Inter) |
| `{typography.body}` (nav) | 14px | 350 | 1.20 | 0.01em | Nav links, ghost mailto link (Inter) |
| wordmark | 14px | 550 | 1.20 | 0.01em | The `Estu`/`dio` mark (Inter) |
| button | 14px | 550 | 1.20 | 0.01em (uppercase) | CTA label (Inter) |
| `{components.eyebrow}` | 11px | 350 | 1.20 | 0.16em (uppercase) | Section label (Inter, Sage) |
| caption | 16px | 400 | 1.20 | 0 (italic) | Times caption, Sage |

### Principles

- **The headline is the page.** Keep it to two lines; set the second line in italic for the literary turn. Fraunces carries it alone.
- **Negative tracking on the serif display** (`{typography.display}` at -0.02em); the standfirst tightens slightly (-0.32px) but body never tightens further.
- **One body weight: Inter 350.** The low weight IS the brand's voice — do not "fix" it up to 400.
- **550 is the ceiling.** The wordmark and the CTA caps sit at 550; nothing on the page is heavier. There is no bold.
- **Eyebrow uses wide positive tracking** (+0.16em) — the one place tracking opens up, against the negative-tracked display, marking it as taxonomy.
- **Two serif voices stay apart.** Fraunces is page type; Playfair Display is poster-art only — they never share a headline.

### Note on Font Substitutes

Estudio uses no licensed typeface. **Fraunces**, **Inter**, and **Playfair Display** are all open-licensed on Google Fonts — load them directly, no substitution required. Times resolves to the system serif. If Fraunces is ever unavailable, the documented fallback `Georgia` is the recommended substitute for the display; accept a slightly less optical headline. Do not introduce a commercial display face — the open trio is the system of record.

## Layout

### Spacing System

- **Base unit**: 4px.
- **Tokens (front matter)**: `{spacing.xs}` 8px · `{spacing.sm}` 16px · `{spacing.md}` 20px · `{spacing.lg}` 28px · `{spacing.xl}` 50px · `{spacing.section}` 96px (later pages, estimated).
- Page rail: `{spacing.xl}` 50px horizontal padding (`px-[50px]`) inside a `max-w-page` 1440px container — the navbar aligns to this rail.
- CTA padding: `{spacing.md}` 20px vertical (`py-5`) · `{spacing.xl}` 50px horizontal (`px-[50px]`) — the button is deliberately wide.
- Eyebrow gap: `{spacing.sm}` 16px (`gap-4`) between each tick and the label.
- Action cluster gap: `{spacing.lg}` 28px (`gap-7`) between the CTA and the ghost mailto link.

### Grid & Container

- **Single-screen hero**: a `min-h-screen` flex column — navbar on top, hero `flex-1` filling the remaining height, content centered both axes. No scroll on the home screen.
- The hero content column caps at `max-w-[760px]`, centered, with `px-6` (24px) side padding so nothing touches the edge on mobile. The standfirst caps narrower at `max-w-md` (28rem) for a clean reading measure.
- The navbar inner row caps at `max-w-page` 1440px with `px-[50px]`, holding the wordmark left and the `Menu ||` group right on a single row at every width.
- Later pages inherit the 1440px rail at 50px padding; design content blocks left-aligned or centered, never both in one band (estimated).

### Whitespace Philosophy

Whitespace is the margin of a printed page. The masthead breathes: the headline owns the optical center, the eyebrow and CTA bracket it with generous air, and the Linen field carries the rest. Negative space is what lets the single Voltage accent and the moving B&W tiles register — crowd the page and both become noise. Density here is a deliberate refusal, not an oversight.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow, no border | Default for all type, the navbar, and any later-page card on Linen |
| 1 (hairline) | 1px `{colors.mist}` rule | Dividers and rules on later pages |
| 2 (Voltage glow) | `{shadow.voltage}` dual-layer green halo | The single `{components.btn-voltage}` only |
| 3 (image-trail) | Layered GSAP tiles with a running z-index | The masthead field behind the type |

Estudio's depth is carried by exactly two devices: (1) the green glow that makes the single button feel lit, and (2) the stacking, fading image-trail tiles. The brand resists drop shadows everywhere else — a box-shadow under a card would immediately drag the page from editorial-broadsheet toward generic-SaaS.

### Decorative Depth

- **The cursor image-trail** dominates as decorative depth — 8 B&W broadsheet tiles spawning, drifting, and fading behind the type.
- **No atmospheric gradients, no spotlight cards, no glass.** The page background is flat Linen.
- **The Voltage CTA glow** is the only lit element — a faint green halo that reads as the single point of energy on a still page.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.sm5}` | 5px | Tiny inline chips (reserved) |
| `{rounded.btn}` | 10px | The `{components.btn-voltage}` |
| `{rounded.card}` | 14px | Cards, panels on later pages |
| `{rounded.img}` | 14px | Image-trail tiles, photo frames |
| `{rounded.pill}` | 9999px | Only where an element is truly circular (scrollbar thumb) |

### Photography & Illustration Geometry

- All imagery is **black-and-white or duotone** — no full-color photographs. Color enters the page only as Voltage on the accents.
- The 8 broadsheet tiles are abstract editorial motifs built from the palette — an Ink grid, concentric Ink rings on Linen, 45° two-tone stripes, a duotone figure, a giant Playfair `E`, a bar-chart of spines, a halftone dot field, and a giant ampersand on Bark. They read as a studio's own visual language, not stock photography, each carrying a small Georgia-italic index caption.
- **Image-trail tiles**: 190px wide, `aspect-ratio: 1.1`, `{rounded.img}` 14px radius, absolutely positioned, starting at `opacity: 0`. They spawn at the cursor, drift toward it over 0.4s, then fade to `opacity 0` and shrink to `scale 0.2`.
- On later pages, hold work images to Linen with 14px corners and B&W/duotone treatment; reserve breathing room around each.

## Components

### Buttons

> Measured from the live build: there is exactly one filled button on the page. The Voltage accent fills it and nothing else.

**`button-voltage`** ({components.btn-voltage}) — The single primary CTA ("Start a project"). The only filled button on the site.
- Background `{colors.voltage}` (#2bee4b), text `{colors.ink}`, type Inter at weight 550 uppercase 14px with +0.01em tracking, padding 20px vertical · 50px horizontal, rounded `{rounded.btn}` (10px), `{shadow.voltage}` dual-layer green glow. No border. Contains a 16px `ArrowRight` lucide icon after the label (`gap-3` 12px). Hover lifts `translateY(-2px)` over 0.3s; the glow holds.

**`link-underline`** ({components.link-underline}) — The ghost / secondary action. Used for the email mailto link and the nav `Menu` link.
- Transparent, no border, Inter at the surrounding weight (350), text `{colors.ink}`. A 1px `currentColor` underline sweeps in from the right over 0.45s on hover (origin flips right→left). The 5%-of-the-page restraint that lets a filled button stay singular.

### Marks & Accents

**`wordmark`** ({components.wordmark}) — The logo. Top-left of the nav.
- `Estu` in `{colors.ink}` + `dio` in `{colors.voltage}`, set in Inter weight 550 at 14px with +0.01em tracking. The green split IS the logo — do not add a separate mark.

**`tick`** ({components.tick}) — A 2px-tall × 50px-wide Voltage rule.
- `{colors.voltage}` fill. Used in pairs to flank the `{components.eyebrow}`, rendered at a shortened `w-8` (32px) there. A decorative rest against the monochrome field — never a divider on body content.

**`eyebrow`** ({components.eyebrow}) — The section label.
- Inter weight 350, 11px, uppercase, +0.16em tracking, `{colors.sage}`. Always short; section taxonomy only.

**`voltage-mark`** — The `||` mark in the nav, right of `Menu`.
- A plain `aria-hidden` span, Inter 550 at 14px, `{colors.voltage}`. Not an icon — one of the four rationed Voltage placements.

### Signature

**`image-trail`** ({components.image-trail}) — The masthead's interactive centerpiece, GSAP-driven over vanilla DOM.
- As the pointer moves past an 80px threshold, the next of 8 B&W tiles spawns at a lerped cursor position (0.1 ease), drifts toward the live pointer over 0.4s (`power1`), then from 0.4s fades to `opacity 0` / `scale 0.2` over 0.4s (`power3`). Tiles cycle 0→7→0 with a running z-index so newer tiles stack on top. The hero type sits above it but is `pointer-events-none`, so the cursor always feeds the trail; only the CTA cluster re-enables pointer events. Treat it as the page's single piece of motion — never add scroll animation or a second moving element to compete with it.

### Navigation

**`top-nav`** — A full-bleed Linen bar, **not sticky**, fading opacity 0→1 over 0.8s on load. The `{components.wordmark}` sits left; a `Menu` ghost link + the `||` Voltage mark sit right.
- Background `{colors.linen}`, text `{colors.ink}`, type Inter 14px, inner row `max-w-page` 1440px at `px-[50px]`, `py-6` (24px) vertical.

### Footer (later pages)

**`footer`** — Not present on the single hero; specified here for later pages.
- Background `{colors.linen}`, no border or a single `{colors.mist}` hairline on top, generous top padding. Wordmark in the `{components.wordmark}` treatment; link columns in h3 heads + body rows, all `{colors.ink}`; legal row in Times-italic caption, `{colors.sage}`.

### Inputs & Forms

Not present on the single hero. The only form-adjacent element is the `mailto:` ghost link in the CTA cluster. Input, focus, and validation styling would have to be introduced for later contact pages in the same broadsheet language — Linen field, Inter 350, Mist hairline, Voltage focus accent (see Known Gaps).

## Do's and Don'ts

### Do

- Reserve `{colors.linen}` (#fafffa) as the anchor canvas — the faint green cast is intentional; never use `#ffffff`.
- Ration `{colors.voltage}` (#2bee4b) to exactly four placements: the CTA fill, the `dio` split, the two eyebrow ticks, and the `||` mark.
- Set the headline in Fraunces at weight 300, second line italic, on a 0.90 line-height, scaling with `clamp(40px,8vw,104px)`.
- Keep body, eyebrow, nav, and CTA at Inter weight 350 — let the low weight be the voice.
- Hold all imagery to black-and-white / duotone built from the palette.
- Reserve the `{shadow.voltage}` glow for the single `{components.btn-voltage}`.
- Let the `{components.image-trail}` be the only motion on the page.

### Don't

- Don't spread `{colors.voltage}` onto headlines, body, backgrounds, or a second button — the rationing is the brand.
- Don't introduce a second saturated color or promote `{colors.moss}` / `{colors.pollen}` to a primary accent.
- Don't use `#ffffff` true white as the canvas, and don't ship a dark hero.
- Don't add a gradient to the page background.
- Don't exceed font weight 550 anywhere — there is no bold.
- Don't add card borders, elevation, or any `box-shadow` other than the CTA glow.
- Don't use `bg-blue-500`-style AI-default accents.
- Don't mix Fraunces and Playfair Display in one headline; Playfair is poster-art only.
- Don't drop in a full-color photograph; imagery stays B&W / duotone.
- Don't add scroll animation, parallax, typewriter, or counters competing with the image trail.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤419px | Headline at the `clamp` floor (40px); CTA cluster wraps via `flex-wrap`; nav holds `Estu`/`dio` + the `Menu` link and Voltage mark on one row |
| Phone | 420–640px | Headline scales by `8vw`; standfirst at full `max-w-md`; `px-6` column padding |
| Tablet | 641–1023px | Headline mid-clamp; hero column centered at `max-w-[760px]` |
| Desktop | 1024–1440px | Headline approaches the 104px cap; image trail fills the masthead |
| Wide | ≥1441px | Content caps at the `max-w-page` 1440px rail; headline holds at 104px; trail continues full-width |

### Touch Targets

- The `{components.btn-voltage}` padding (20px × 50px) clears the ≥44px minimum tap target comfortably.
- On touch, the image trail is fed by `touchmove` exactly the way `mousemove` feeds it on desktop.
- Ghost links extend their tap target with padding even though the visual is text-only.

### Collapsing Strategy

- **The home screen never scrolls** — it is one viewport at every width; only the headline size (`clamp`) and the column padding flex.
- **Nav**: the wordmark stays; on later pages a fuller inline nav would collapse to the `Menu` ghost link / sheet at narrow widths.
- **Display type**: `clamp(40px, 8vw, 104px)` does all the scaling — never a fixed display size.

### Image Behavior

- Image-trail tiles are small inline SVG assets; preload `/trail/poster-1.svg … poster-8.svg` so the first cursor move has no pop-in.
- Set `aspect-ratio` on any photo container to prevent layout shift; hold the B&W / duotone treatment.
- Respect `prefers-reduced-motion`: the global guard collapses the trail and the entrance `rise` to near-instant (≈0.001ms).

## Iteration Guide

1. New page (work index, case study, about, contact)? Start from `{colors.linen}` + a Fraunces headline + Inter 350 body. The shell is the brand.
2. Keep the Voltage rule absolute — a new accent need is answered by `{colors.voltage}` on a small mark, or by nothing, never by a new color.
3. Reference everything by token name — `{colors.x}`, `{rounded.x}`, `{typography.x}`, `{components.x}` — so a value change cascades.
4. Decide first which one device carries any new depth: the CTA glow or the image trail. A new surface that "needs depth" gets neither a border nor a box-shadow — rethink the hierarchy instead.
5. Display vs body stays a hard line: Fraunces weight 300 + negative tracking for headlines; Inter 350 + neutral tracking for everything else.
6. Treat Voltage as scarce — the four placements are the budget. Earning a fifth requires a documented decision.
7. Keep imagery B&W / duotone; a full-color image requires its own governing decision, not a one-off.

## Known Gaps

- Beyond the single hero, later-page layouts (work grid, case-study spreads, about, contact form) are not specified — design them in the same broadsheet language: Linen canvas, Fraunces heads, Inter 350 body, Voltage-only accents, B&W imagery. The h2/h3/body rows in the type table are estimated for that use.
- Form / input and validation states (error, success, disabled, focus) are not surfaced on the analyzed single screen; semantic colors would have to be introduced.
- A dark counterpart is intentionally absent; if ever needed it requires its own governing decision, not a recolor of Linen→Ink.
- Section spacing for later pages (`{spacing.section}` 96px) is estimated; the live build is a single non-scrolling viewport with no inter-section rhythm to measure.
- The 8 broadsheet tiles are a fixed set; a larger work archive needs more motifs drawn in the same Ink-on-Linen / duotone language.
