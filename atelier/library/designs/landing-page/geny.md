---
version: "1"
name: "Design System Inspired by Geny"
description: "Geny's canvas is pitch-black Ink #0a0a0a with white type — a cinematic studio page where full-bleed media sits inside thin 10px gutters with 6px corners. The single chromatic accent is a red #ea3323 dot repeating down the one white ticker band; a green #16a34a slot color exists only as the media fallback and text selection. The page rhythm is oversized uppercase Archivo Variable extrabold headlines at negative tracking, masked-line reveals, and a 21vw footer wordmark scrubbing up on scroll."
colors:
  ink: "#0a0a0a"            # canvas / page background — pitch black
  ink-soft: "#0d0d0d"       # showcase card surface — one step above canvas
  paper: "#ffffff"          # all type, hero dots, AND the ticker band fill
  accent: "#ea3323"         # red — ONLY the ticker dots
  slot: "#16a34a"           # green — ONLY media-slot fallback + ::selection
  line: "#262626"           # hairline borders — showcase card, footer legal bar
typography:
  display: { fontFamily: "'Archivo Variable', ui-sans-serif, system-ui, sans-serif", weights: "800 (extrabold)", role: "every headline + ticker + wordmark — uppercase, negative tracking" }
  body:    { fontFamily: "'Archivo Variable', ui-sans-serif, system-ui, sans-serif", weights: "400-700", role: "intro statement (400), email (500), nav/captions (600), work titles (700)" }
spacing:
  base: "4px"
  gutter: "10px"            # px-2.5 / gap-2.5 — the media frame, the signature
  meta: "12px"              # mt-3 work meta row
  caption: "16px"           # bottom-4 / left-4 in-frame captions + hero dots
  rail: "20px"              # px-5 text rail (40px at md:)
  block: "40px"             # mt-10 heading → grid
  row: "48px"               # gap-y-12 grid row gap
  section: "112px"          # pt-28 section rhythm (144px at md:)
rounded:
  md: "6px"                 # rounded-md — every media frame, hero, carousel, cards
  pill: "9999px"            # ctrl buttons, hero dots, ticker dots only
motion:
  ease-out-quart: "cubic-bezier(0.25, 1, 0.5, 1)"   # all CSS transitions
  dur-fast: "250ms"         # underlines, ctrl hover
  dur-med: "600ms"          # media-slot hover dim
components:
  media-slot: "Any media frame — solid {colors.slot} until a real <img>/<video> fills it; group-hover dims to brightness(0.82) over 600ms"
  hero-frame: "calc(100svh − 66px) rounded-md frame inside the 10px gutter; media wrapper at -inset-[12%] overscan so scale-in + parallax never expose an edge"
  ticker: "White {colors.paper} marquee band, 13px extrabold uppercase items, a 6px {colors.accent} dot after each; xPercent −50 loop in 30s + scroll-velocity boost"
  ctrl: "40px circle button — border white/30, hover inverts to white fill + {colors.ink} text, active scale 0.92"
  nav-link: "10px semibold uppercase 0.14em link — 1px currentColor underline scales in left-to-right over 250ms"
  link-underline: "Same sweep at 2px height, −5px offset — the footer email only"
  showcase-card: "4:3 {colors.ink-soft} card with 1px {colors.line} border — the only bordered surface"
  wordmark: "Geny + superscript ® — 13px in the nav, clamp headline in the hero, 21vw in the footer"
---

# Design System Inspired by Geny

## Overview

Geny's canvas is pitch black — `{colors.ink}` #0a0a0a on the `html` element itself, so nothing lighter ever flashes behind the page. Onto it goes exactly one type color, white `{colors.paper}`, stepped down through a five-stop opacity ladder (`/95` intro statement, `/80` carousel counter, `/70` back-to-top, `/45` work meta, `/40` captions and legal) instead of a grey palette. One near-black lift exists — `{colors.ink-soft}` #0d0d0d for the showcase card — and one hairline, `{colors.line}` #262626, drawn on that card and the footer legal bar. That is the entire neutral system: two blacks, one white, one line.

Color is rationed to two exact placements. The red `{colors.accent}` #ea3323 appears only as the 6px dots punctuating the white ticker band — never on type, buttons, or backgrounds. The green `{colors.slot}` #16a34a appears only as the media-slot fallback (a solid block wherever an image or video has not loaded) and the text `::selection`. **Most AI-video sites drown the pitch in purple-to-blue gradients, glow, glassmorphism, and floating UI chrome — Geny refuses all of it: a pitch-black page, one grotesque, full-bleed media held by thin 10px gutters, and a single red dot repeating down a white ticker band as the only break in the dark.**

Typography is a single self-hosted variable family, **Archivo Variable**, doing every job on the page. Headlines are `font-extrabold` (800), uppercase, negatively tracked (−0.02em, tightening to −0.04em on the giant footer wordmark), and scaled with `clamp()` — the hero reaches `clamp(2.6rem, 8.4vw, 8.6rem)` and the footer wordmark hits a viewport-locked `21vw`. Below display scale the family drops to 400–700 for the intro statement, email link, captions, and meta rows. There is no second font, no serif, no mono.

The layout signature is the **10px media gutter**: every media section uses `px-2.5` + `gap-2.5` + `rounded-md`, so full-bleed images and video read as film frames floating on black, while text sections sit on a wider `px-5 md:px-10` rail. Motion is GSAP + Lenis throughout — three scroll-reveal systems (rise, masked lines, SplitText lines) governed by a never-pre-hide rule, a hero that scales in from 1.14 with a 12% overscan bleed then parallaxes on scrub, and a fixed nav in `mix-blend-difference` that inverts itself automatically as it crosses the white ticker.

**Key Characteristics:**
- **Pitch-black canvas** — `{colors.ink}` #0a0a0a everywhere; the only light surface is the white ticker band.
- **Red rationed to one shape** — `{colors.accent}` #ea3323 exists solely as the ticker dots; green `{colors.slot}` #16a34a solely as media fallback + selection.
- **One family, one voice** — Archivo Variable self-hosted; headlines extrabold uppercase at −0.02em, hero `clamp(2.6rem, 8.4vw, 8.6rem)`, footer wordmark `21vw` at −0.04em.
- **10px media gutters** — `px-2.5` / `gap-2.5` / `rounded-md` (6px) frame every image, video, and carousel like sprocket-less film frames.
- **White opacity ladder, not greys** — `/95 /80 /70 /45 /40` steps of `{colors.paper}` carry the entire text hierarchy.
- **Three reveal systems** — `data-reveal` rise, `data-mask-lines` heading slides, `data-lines` SplitText paragraphs — all `fromTo` inside `onEnter`, so content can never be stuck hidden.
- **Mix-blend-difference nav** — the fixed header inverts to black over the white ticker with zero JavaScript.
- **A single inline SVG** — the carousel arrow; no icon library anywhere.
- No gradients, no box shadows, no glassmorphism, no borders on media, no second accent, no second font.

## Colors

> Source pages: the single-page Geny build — Nav, Hero video frame, Intro statement, Showcase grid, white Ticker band, Studio carousel, Work grid, Journal, Footer wordmark. One dark theme; there are no other surfaces.

### Brand & Accent
- **Accent red** ({colors.accent}): #ea3323 — exactly one job: the `h-1.5 w-1.5 rounded-full` dots separating items on the white ticker band. Never on type, never a button fill, never a hover state. Its scarcity against the black/white page is the brand's entire chromatic voice.
- **Slot green** ({colors.slot}): #16a34a — the `.media-slot` fallback fill (any frame without a loaded `src` renders as a solid green block, never a broken-image glyph) and the `::selection` background. A working state and a text highlight — not a brand accent; never promoted to buttons or headlines.

### Surface
- **Ink** ({colors.ink}): #0a0a0a — the page background, set on `html` and `body` both so overscroll stays black. Not #000000: the one-step lift keeps pure-black media frames readable against it.
- **Ink soft** ({colors.ink-soft}): #0d0d0d — the showcase card only; a lift so subtle it reads as texture, made legible by its `{colors.line}` border.
- **Paper** ({colors.paper}): #ffffff — doubles as the ticker band fill, the single light surface on the page. Ticker type flips to `{colors.ink}` on it.

### Text
- **White** ({colors.paper}): the only text color, deployed through opacity: `text-white` full-strength for headlines, nav, and the email; `/95` intro statement; `/80` carousel counter; `/70` back-to-top; `/45` work category + year; `/40` captions, dates, legal. Hierarchy is opacity, not hue.

### Hairline
- **Line** ({colors.line}): #262626 — the showcase card border and the footer legal-bar `border-t`. Two placements. Media frames never get borders; the gutter is the frame.

### Semantic
None. No success / error / warning colors exist on the page; there are no forms. The only stateful colors are the white `:focus-visible` outline (2px, offset 3px) and the green selection.

## Typography

### Font Family

- **Archivo Variable** — the only family on the site, self-hosted via the `@fontsource-variable/archivo` npm package (no Google Fonts link, no CDN). Fallback stack `"Archivo Variable", ui-sans-serif, system-ui, sans-serif`. A variable grotesque spanning 100–900; the page uses 400 (intro statement) through 800 (every headline). Body renders `antialiased`.

One family carries display, body, captions, and UI. The voice comes from range inside the file — extrabold uppercase at display scale against quiet 400/600 lowercase supporting text — never from a second face.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display}` (wordmark) | 21vw | 800 | 0.80 | -0.04em | Footer wordmark GENY® (uppercase) |
| `{typography.display}` (hero) | clamp(2.6rem, 8.4vw, 8.6rem) | 800 | 0.95 | -0.02em | Hero masked lines (uppercase) |
| `{typography.display}` (studio h2) | clamp(2.3rem, 5.8vw, 5.9rem) | 800 | 0.98 | -0.02em | Studio heading, two masked lines (uppercase) |
| `{typography.display}` (footer cta) | clamp(2.2rem, 5.5vw, 5.5rem) | 800 | 0.98 | -0.02em | Footer CTA, two masked lines (uppercase) |
| `{typography.display}` (section h2) | clamp(2rem, 4.4vw, 4.2rem) | 800 | 1.0 | -0.02em | Work / Journal headings (uppercase) |
| intro statement | clamp(1.7rem, 3.6vw, 3.4rem) | 400 | 1.16 | -0.015em | The `data-lines` about paragraph, white/95 |
| card title | clamp(1.4rem, 2vw, 2rem) | 800 | 1.02 | -0.01em | Showcase card, three stacked lines (uppercase) |
| email link | 20px → 30px (md:) | 500 | 1.4 | 0 | Footer mailto, `{components.link-underline}` |
| journal title | 18px | 600 | 1.375 | 0 | Post titles, max-w-[26rem] |
| brand / ticker | 13px | 800 | 1.2 | tight / +0.02em | Nav logo (tracking-tight) · ticker items (uppercase) |
| meta row | 11px | 700 / 400 | 1.2 | +0.12em | Work title (bold) · category + year (white/45, uppercase) |
| ui label | 10px | 600 | 1.2 | +0.14em | Nav links, figcaptions, carousel counter (uppercase) |
| caption | 10px | 400 | 1.2 | +0.14em | Intro captions, dates, legal — white/40 (uppercase) |
| micro caption | 9px | 400 | 1.2 | +0.32em | Showcase card caption "Geny Studio" (uppercase) |

### Principles

- **Display type is always extrabold, always uppercase, always negatively tracked.** The bigger it gets, the tighter it tracks — −0.02em at clamp scale, −0.04em at 21vw — and the shorter the leading (0.95 → 0.80).
- **Every display size is a `clamp()`**; only the footer wordmark is viewport-locked (21vw) so it always spans the page.
- **Small type flips the tracking positive** — 10–11px labels open to +0.12em/+0.14em uppercase, the 9px micro caption to +0.32em — taxonomy against the compressed display.
- **Hierarchy below display scale is weight + opacity, not size**: 10px carries nav links, captions, and counters alike, separated by 600-vs-400 and `/40`-vs-full-white.
- **The ® is typographic**, a `<sup>` at `0.3em`–`0.34em` of its headline — never an icon.

### Note on Font Substitutes

Archivo is open-licensed (Google Fonts / Fontsource) — no substitution needed. Use the **variable** cut via `@fontsource-variable/archivo`, not a static Archivo, so the 400–800 range ships in one file. If unavailable, the documented fallback `ui-sans-serif / system-ui` holds the layout; do not swap in a second family or a "similar grotesque."

## Layout

### Spacing System

- **Base unit**: 4px.
- **Tokens**: `{spacing.gutter}` 10px · `{spacing.meta}` 12px · `{spacing.caption}` 16px · `{spacing.rail}` 20px (→40px md:) · `{spacing.block}` 40px · `{spacing.row}` 48px · `{spacing.section}` 112px (→144px md:).
- The signature is the **10px media gutter**: media sections use `px-2.5` + `gap-2.5`, and the frame is completed by `rounded-md` — hero, showcase, carousel, work, journal, and the footer wordmark rail all share it.
- Text sections sit on the wider `{spacing.rail}`: `px-5 md:px-10` (intro, section headings, footer CTA).
- Section rhythm: `pt-28 md:pt-36` (112/144px) for Studio, Work, Journal; intro breathes more at `py-28 md:py-40`; footer opens at `pt-32 md:pt-44`; the ticker floats on `mt-24 md:mt-32`.
- In-frame captions and dots pin to `bottom-4 left-4` / `right-4` (16px) inside every media frame.
- Nav is `h-12` (48px); the hero starts at `pt-14` (56px) and its frame height is `calc(100svh − 66px)` — nav clearance plus the 10px bottom gutter.

### Grid & Container

- **No max-width container** — the page is full-bleed at every size; the gutters are the only margins.
- Showcase: `grid-cols-1 md:grid-cols-3`, all cells `aspect-[4/3]` — image / ink-soft text card / image.
- Work: `grid-cols-1 md:grid-cols-2`, `gap-x-2.5 gap-y-12`, 4:3 frames with an 11px meta row below.
- Journal: `grid-cols-1 md:grid-cols-3`, 16:10 thumbs.
- Studio carousel: one full-width `aspect-video` slide at a time, `max-h-[82vh]`, sliding by `xPercent: −100` per index.
- Intro statement caps at `max-w-[68rem]`; journal titles at `max-w-[26rem]`.

### Whitespace Philosophy

Whitespace here is black space. Sections are separated by 112–176px of pure `{colors.ink}`, and media is separated from media by exactly 10px — the tension between huge section gaps and razor-thin media gutters is the composition. Nothing is boxed, ruled, or carded (one showcase card excepted); the dark itself does the framing.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow, no border | Everything — type, media frames, buttons, ticker |
| 1 (surface lift) | `{colors.ink-soft}` + 1px `{colors.line}` border | The showcase card only |
| 2 (in-frame overlay) | White type pinned inside a media frame | Hero title, slide captions, counter, corner dots |
| 3 (motion depth) | Overscan parallax + masked reveals | Hero media/title scrub, footer wordmark rise |

There are **zero box shadows and zero gradients** on the page. Depth is cinematic, not physical: the hero video bleeds 12% past its frame (`-inset-[12%]`) so its scale-in and scroll parallax never expose an edge, headlines rise out of `overflow-hidden` masks, and the fixed nav gains "layering" for free via `mix-blend-difference`.

### Decorative Depth

- **The media is the decoration.** Full-bleed video and stills inside 10px gutters carry all visual richness; the UI around them stays flat white-on-black.
- **The white ticker band** is the one flat light plane breaking the dark — paper fill, ink type, red dots.
- **No glass, no glow, no grain, no gradient washes** — a blurred panel or glowing button would instantly break the film-frame language.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.md}` | 6px | Every media frame — hero, showcase cells, carousel, work, journal thumbs — and the showcase card |
| `{rounded.pill}` | 9999px | `{components.ctrl}` circles, hero corner dots, ticker dots |

Two stops. The 6px corner is deliberately slight — enough to read as a rounded film frame, never a friendly card. Nothing uses an in-between radius.

### Photography & Illustration Geometry

- Media aspect ratios are fixed per section: **4:3** (showcase, work), **16:9** capped at `max-h-[82vh]` (carousel), **16:10** (journal); the hero fills `calc(100svh − 66px)` with `min-h-[520px]`.
- Every frame is `overflow-hidden rounded-md`; images render `object-cover` with `loading="lazy"`.
- Any slot without a loaded `src` renders as a solid `{colors.slot}` green block via `.media-slot` — the honest placeholder state, never a broken image.
- On `group` hover, media dims to `brightness(0.82)` over `{motion.dur-med}` 600ms — the only image treatment; no zoom, no overlay tint.

## Components

### Navigation

**`top-nav`** — Fixed full-width header, `h-12`, `z-50`, in **`mix-blend-difference`** so it self-inverts over the white ticker.
- Left: the `{components.wordmark}` at 13px extrabold uppercase `tracking-tight` with a `text-[8px]` superscript ®. Right: five `{components.nav-link}` anchors (10px, 600, uppercase, +0.14em) at `gap-4 md:gap-6`. Every click intercepts and glides via Lenis `scrollTo` (1.4s, quart-out easing). One row at all sizes — no hamburger.

**`nav-link`** ({components.nav-link}) — 1px `currentColor` underline at `bottom: -3px`, `scaleX(0)` with origin right; hover/focus flips origin left and scales to 1 over `{motion.dur-fast}` 250ms `{motion.ease-out-quart}`. Also used by the footer "Back to top" button.

### Hero

**`hero-frame`** ({components.hero-frame}) — `px-2.5 pb-2.5 pt-14` section holding a `calc(100svh − 66px)` / `min-h-[520px]` `rounded-md` frame.
- Inside: a `.media-slot` wrapper at `-inset-[12%]` overscan holding the autoplaying, muted, looping background video; a centered `h1` of two masked `hero-line`s (GENY® / WE GENERATE VIDEOS); two 6px white dots pinned `bottom-4` left and right.
- Load timeline (`power4.out` defaults): media `scale 1.14 → 1` over 1.9s (`power3.out`); hero lines `yPercent 115 → 0`, 1.25s, stagger 0.14, overlapping at `-=1.45`; dots fade in 0.7s, stagger 0.12, at `<0.5`.
- Scrub parallax (ease `none`, `scrub: true`, `top top → bottom top`): media drifts `yPercent: 12`, title `yPercent: 18` while fading to `autoAlpha 0.35`.

### Ticker

**`ticker`** ({components.ticker}) — The one light band: `bg-paper text-ink`, `py-3.5`, full-bleed, `overflow-hidden`.
- Track renders the 8 service items **twice** (second copy `aria-hidden`) and loops `xPercent: −50` over 30s, linear, infinite. Each item: 13px extrabold uppercase +0.02em with `px-6`, followed by a 6px `{colors.accent}` dot.
- Scroll-velocity boost: `timeScale` rises to `clamp(1, 4, 1 + |velocity| / 1200)` — raise-only — and decays back to 1 by lerp 0.035 per ticker frame. Scrolling makes the band sprint, then settle.

### Carousel

**`studio-carousel`** — Full-width slide deck inside the 10px gutter, one `aspect-video` slide per screen.
- Track slides `xPercent: −100 × index` over **1.05s `power4.inOut`** with `overwrite: true`; index wraps `(i + dir + count) % count`. Caption bottom-left (10px, 600, uppercase, +0.14em); zero-padded counter `01 / 04` bottom-right in `text-white/80 tabular-nums`.

**`ctrl`** ({components.ctrl}) — The paired arrow buttons: 40px circle, `border-white/30`, white glyph.
- Hover inverts fully — white fill, `{colors.ink}` glyph, white border — over 250ms; active compresses to `scale(0.92)`. Contains the site's **only SVG**: a 14px stroked arrow (`M1 7h11M8 2.5 12.5 7 8 11.5`, stroke-width 1.5); "Previous" is the same SVG rotated 180°.

### Cards & Containers

**`showcase-card`** ({components.showcase-card}) — The middle cell of the 3-up showcase grid and the only bordered surface: `aspect-[4/3]`, `bg-ink-soft`, `border border-line`, `rounded-md`, centered stack of a three-line extrabold uppercase title (`clamp(1.4rem, 2vw, 2rem)`) over a 9px +0.32em caption in white/40.

**`work-item`** — 4:3 `{components.media-slot}` frame + an 11px uppercase +0.12em baseline row: bold title, category and year in white/45, `justify-between`.

**`journal-card`** — 16:10 thumb, 10px white/40 date, 18px semibold title capped at `max-w-[26rem]`.

### Footer

**`footer`** — CTA headline (two masked lines, footer-cta clamp) → the email as the sole `{components.link-underline}` (20→30px, weight 500, 2px sweep) → the **21vw wordmark**: centered GENY® at leading 0.80 / −0.04em inside an `overflow-hidden` rail, scrubbing `yPercent 26 → 0` as the footer enters (`center bottom → bottom bottom`, ease none) → a `border-t {colors.line}` legal bar (10px uppercase white/40) with a "Back to top" `nav-link`.

### Motion System

**`reveal-system`** — Three scroll-reveal patterns, all inside `gsap.matchMedia("(prefers-reduced-motion: no-preference)")`, all `once: true`, and all obeying the **never-pre-hide rule**: content renders visible; elements are hidden only inside `onEnter` via `fromTo` the instant they animate — a failed trigger can never strand content invisible.
1. `data-reveal` — batched rise: `y 56 → 0`, `autoAlpha 0 → 1`, 1.1s `power3.out`, stagger 0.09, start `top 88%`, `clearProps` after.
2. `data-mask-lines` — headings with pre-wrapped `overflow-hidden > .line` spans: `yPercent 115 → 0`, 1.15s `power4.out`, stagger 0.09, start `top 85%`.
3. `data-lines` — SplitText paragraphs by line: `yPercent 55 + fade → 0`, 1.05s `power3.out`, stagger 0.08, start `top 85%`.

Lenis runs at duration 1.15 (skipped entirely under reduced motion); reveals initialize only after `document.fonts.ready` + `ScrollTrigger.refresh()` so line splits measure the real font. All scrubbed tweens use ease `none`.

### Inputs & Forms

None on the page. The only contact affordance is the `mailto:` link. Any future form should stay in the system: ink field, white text, `{colors.line}` hairline, the white `:focus-visible` outline — no new accent (see Known Gaps).

## Do's and Don'ts

### Do

- Keep the canvas `{colors.ink}` #0a0a0a on both `html` and `body`; hierarchy in text comes from the white opacity ladder `/95 /80 /70 /45 /40`, never grey hexes.
- Frame every piece of media with the 10px gutter system — `px-2.5`, `gap-2.5`, `rounded-md` — and pin captions inside frames at `bottom-4`.
- Set every headline in Archivo Variable extrabold, uppercase, −0.02em, sized by `clamp()`; let the footer wordmark hit 21vw.
- Ration `{colors.accent}` #ea3323 to the ticker dots and `{colors.slot}` #16a34a to the media fallback + selection — two colors, two jobs.
- Render all content visible by default; hide only inside `onEnter` with `fromTo` (the never-pre-hide rule).
- Use `svh` for the hero height (`calc(100svh − 66px)`, `min-h-[520px]`) and give the hero media the −12% overscan before scaling or scrubbing it.
- Duplicate the ticker items once and loop `xPercent: −50` — 30s base, raise-only velocity boost, 0.035 lerp decay.

### Don't

- Don't introduce purple, indigo, blue, or any gradient — the page's chroma budget is one red dot and one green fallback.
- Don't add box shadows, glassmorphism, blur panels, or glow; depth belongs to overscan parallax and masked reveals only.
- Don't load a second font family or a static Archivo cut — one variable file via `@fontsource-variable/archivo`, self-hosted.
- Don't spread the red beyond the ticker dots or promote the green to buttons, headlines, or hovers.
- Don't border or shadow media frames — the gutter is the frame; the showcase card is the only bordered surface.
- Don't import an icon library — the site owns exactly one inline SVG arrow; dots and ® marks are plain markup.
- Don't pre-hide content with CSS or `gsap.from` waiting on scroll triggers.
- Don't use `vh` for the hero, and don't round the hex values — #0a0a0a, #0d0d0d, #ea3323, #16a34a, #262626 are exact.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <768px | All grids single-column; text rail `px-5`; section rhythm at the small stop (pt-28, py-28, mt-24); display type at clamp floors; nav gaps `gap-4` |
| md: | ≥768px | Showcase + journal → 3 columns, work → 2; text rail `px-10`; rhythm steps up (pt-36 / py-40 / mt-32 / pt-44); email 30px; nav gaps `gap-6` |
| Wide | ≥~1640px | Display clamps hit their rem caps (hero 8.6rem); the 21vw wordmark and 8.4vw hero keep scaling with the viewport |

One breakpoint does nearly all the work — the system is mobile-first with `md:` as its single hinge (estimated wide-stop from the clamp math).

### Touch Targets

- `{components.ctrl}` is 40×40px; nav links and the back-to-top button are small type but padded by the `h-12` bar.
- Hover-only effects (media dim, underline sweeps, ctrl invert) degrade silently on touch — no functionality is hover-gated.

### Collapsing Strategy

- **The nav never collapses** — five short 10px links hold one row at every width; there is no hamburger or menu sheet.
- Grids stack to one column; the media gutter stays 10px at all sizes so the film-frame language survives mobile.
- Display type scales purely through `clamp()`/vw — no per-breakpoint font sizes.
- The hero uses `svh` so mobile browser chrome never causes a jump, with the 520px floor guarding short landscape screens.

### Image Behavior

- All media `object-cover` inside fixed-ratio frames; slides cap at `max-h-[82vh]`.
- Missing or still-loading assets show the solid `{colors.slot}` green block — never a broken glyph, never a layout shift.
- The hero video is `autoplay muted loop playsinline preload="auto"` with the green slot visible through the overscan while it buffers.
- `prefers-reduced-motion: reduce` collapses every CSS transition to 0.01ms, skips Lenis, and leaves the page fully static and fully visible.

## Iteration Guide

1. New section? Decide first whether it is a **media section** (10px gutter: `px-2.5` / `gap-2.5` / `rounded-md`) or a **text section** (`px-5 md:px-10` rail) — never both paddings in one band.
2. Reference everything by token — `{colors.x}`, `{rounded.x}`, `{spacing.x}`, `{components.x}` — so a value change cascades.
3. New headline = extrabold + uppercase + negative tracking + `clamp()` + masked-line reveal (`data-mask-lines`). A headline outside that recipe is off-system.
4. A new text tone comes from the white opacity ladder, not a new grey; a new emphasis comes from weight, not color.
5. The chroma budget is spent: red = ticker dots, green = fallback + selection. A new accent need is answered by white, scale, or motion — not a new hue.
6. Every new animation goes inside the reduced-motion `matchMedia`, uses `fromTo` inside `onEnter`, and picks from the standard numbers (1.1/1.15/1.05s, staggers 0.08–0.09, starts 85–88%, scrub ease `none`).
7. Sections enter the page order between Hero and Footer; the ticker stays the single light band — a second white band would halve its power.

## Known Gaps

- **The motion layer is a hard dependency** — GSAP (ScrollTrigger + SplitText) and Lenis carry the reveals, marquee, carousel, and parallax. Without them the page is static but, by the never-pre-hide rule, fully visible; the exact timings documented here are the system of record.
- **Media is user-supplied** — one hero video and ten stills fill the frames; until real assets land, every slot renders as the solid `{colors.slot}` green block, so an unfinished build reads as green-blocked by design.
- **Single dark theme** — no light mode exists or is implied; a light variant would need its own governing decision, not an inversion of `{colors.ink}`.
- **No forms or app surfaces** — input, validation, and semantic state colors are unspecified; introducing them must not spend a new accent.
- **The wide-stop breakpoint row is estimated** from clamp math; the build itself only branches at `md:`.
