---
version: "1"
name: "Amée Paris — Editorial Parisian Maison"
description: "A single-page editorial landing for a Parisian couture maison, built like a fashion-magazine cover. Cream canvas, near-black ink, zero chromatic accent, and a giant Italiana 'AMÉE PARIS' wordmark stretched edge-to-edge as the layout's architecture."
colors:
  cream: "#F5F1EA"
  bone: "#EAE4D9"
  ink: "#0E0E0E"
  white: "#FFFFFF"
  muted: "#8C8678"
  scrim-top: "rgba(0,0,0,0.55)"
  scrim-bottom: "rgba(0,0,0,0.70)"
  scrim-vignette: "rgba(0,0,0,0.45)"
typography:
  wordmark:
    fontFamily: "Italiana"
    role: "the giant edge-to-edge AMÉE PARIS wordmark"
  display:
    fontFamily: "Playfair Display"
    role: "editorial eyebrows / italic accent"
  mono-label:
    fontFamily: "Michroma"
    role: "nav 'PARIS' caption, technical labels (wide, architectural)"
  body:
    fontFamily: "Inter"
    role: "body, marquee italic-bold, captions"
spacing:
  base: "4px"
  nav-pad-x: "32px / 48px / 64px"
  nav-pad-top: "28px"
  section-pad-y: "96px / 128px"
  full-bleed: "edge-to-edge hero + wordmark"
rounded:
  none: "0px"
  pill: "9999px"
components:
  hero-wordmark: "AMÉE PARIS in Italiana, characters distributed full viewport width via flex justify-between, size clamp(4.5rem, 17.5vw, 20rem)"
  marquee: "Continuous horizontal text strip, 38s linear infinite, Inter italic bold uppercase with Diamond glyphs"
  drop-showcase: "Two editorial photos (4:5), right image offset -mt-16, no eyebrow rows (stripped by design)"
  nav-inline: "Three lowercase links left, centered Amée/Paris brand, three icons right (Search, Heart, ShoppingBag)"
  cta-pill: "Outline pill, border white/70, hover inverts to bg-white text-ink"
---

# Amée Paris — Editorial Parisian Maison

> Fivefold showcase. Pairs with the Amée Paris prompt. Use this to keep pages you build *after* the landing — collection, lookbook, atelier — reading as a couture magazine, not an e-commerce store.

## Overview

Amée Paris is **a fashion-magazine cover rendered as a website** — the reference is the opening spread of Vogue or Numéro, not a shopping site. The hero is a looping video framed by a colossal Italiana wordmark stretched across its top; the rest is cream space, two editorial photographs, and a single marquee. It sells *savoir-faire*, never product — confidence is shown by how much it refuses to say.

The governing decision: **luxury is maximum restraint.** A maison doesn't shout, discount, or decorate; it trusts its name and its imagery. So the system has no accent color, no gradients on UI surfaces, no drop shadows on cards — just cream, ink, type as architecture, and photography as the only richness. Every iteration of this page has stripped elements (eyebrow rows, figcaptions, glass cards, "Discover" CTAs) rather than added them; subtraction is the design method.

The system extends to every adjacent surface the same way. A collection page, a lookbook, an atelier-story page — each inherits the cream canvas, the two-tone palette, the four-font hierarchy (one job per font), and the print-not-product corner geometry. Photography is the only place color is permitted; the chrome stays colorless so the garments speak.

**Key Characteristics:**
- Cream canvas (`{colors.cream}` — `#F5F1EA`), near-black ink (`{colors.ink}` — `#0E0E0E`), bone (`{colors.bone}` — `#EAE4D9`) only as image fallback.
- **Zero chromatic accent.** No gold, rose, green, or "buy" red — by rule.
- The signature: a giant **AMÉE PARIS** wordmark in Italiana whose characters are distributed **edge-to-edge across the viewport** via `flex justify-between`. The name *is* the layout.
- Four-font discipline: Italiana (wordmark), Playfair Display (italic eyebrow), Michroma (technical caps), Inter (body, marquee).
- Sharp corners everywhere — `{rounded.none}` — with one pill exception: the outline "Shop Now" CTA.
- Magazine-cover composition: Navbar → Hero (video + wordmark + La Maison block) → Marquee → DropShowcase. **No footer**, intentionally unmounted.
- Motion is custom and hand-built — `FadeIn` (setTimeout-based) and `AnimatedHeading` (char-by-char stagger); no animation library.
- Photography is the only richness; surface chrome stays inert so garments carry color.

## Colors

> **Source pages analyzed:** Single-page landing (Navbar, Hero with video + La Maison block, Marquee, DropShowcase). All color tokens surfaced from the prompt's Layer 3 + Layer 5 overlay specs.

### Surface

- **Cream** (`{colors.cream}` — `#F5F1EA`): The page. Warm paper-of-a-magazine, never sterile white. It's the gallery wall the photography hangs on. Used for `<main>` and the DropShowcase backdrop.
- **White** (`{colors.white}` — `#FFFFFF`): One surface only — the Marquee strip. The brightness sets it apart from the cream above and below.
- **Bone** (`{colors.bone}` — `#EAE4D9`): Image fallback only — visible behind editorial photos before they load so the slot never goes blank or grey.

### Ink

- **Ink** (`{colors.ink}` — `#0E0E0E`): All primary type, marks, marquee glyphs. Near-black, editorial, printed-feeling — chosen over `#000` so it reads as ink on paper rather than digital black.

### Secondary Text

- **Muted** (`{colors.muted}` — `#8C8678`): Rare — reserved for small captions and nav-secondary text. A warm grey pulled from the cream/ink axis, never blue-grey.
- **White / Opacity stack** (`white/90`, `white/85`, `white/80`, `white/70`, `white/30`): Used over the hero video only. `white/90` for active nav links, `white/85` for the La Maison body copy, `white/70` for the CTA pill border, `white/30` for the mobile hamburger ring.

### Scrims (Hero Video Overlays)

- **Top scrim** (`{colors.scrim-top}` — `rgba(0,0,0,0.55)` to transparent, 28vh): Protects nav legibility against bright video frames.
- **Bottom scrim** (`{colors.scrim-bottom}` — `rgba(0,0,0,0.70)` to transparent, 55vh): Protects the La Maison block and wordmark base.
- **Radial vignette** (`{colors.scrim-vignette}` — transparent at 30% out to `rgba(0,0,0,0.45)`): Pulls the eye toward the centre of the frame.

### No Accent — By Rule

The absence of accent is itself the statement. **Color is for attracting and selling; a true maison needs neither.** Cream + ink alone reads as confidence. Any color on the page comes from the editorial photographs, nothing else.

## Typography

### Font Family

- **Italiana** (`'Italiana', serif`) — the giant wordmark and the small "Amée" in the navbar. High-contrast, couture-elegant.
- **Playfair Display** (`'"Playfair Display"', 'Georgia', 'serif'`) — italic eyebrows, decorative serif fallback.
- **Michroma** (`'Michroma', 'sans-serif'`) — the nav "PARIS" caption, wide architectural caps.
- **Inter** (`'Inter', 'system-ui', 'sans-serif'`) — body, La Maison copy, marquee italic-bold, DropShowcase paragraphs.

All four families load via one `<link>` request to Google Fonts.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| Brand Wordmark | `clamp(4.5rem, 17.5vw, 20rem)` | 400 (Italiana) | 0.82 | −0.04em | Hero `AMÉE PARIS`, edge-to-edge |
| Nav Brand (Amée) | `text-2xl` (24px) | 400 (Italiana) | normal | 0.06em | Centered nav wordmark |
| Nav Caption (Paris) | `10px` | 400 (Michroma) | normal | 0.32em (uppercase) | Below nav brand |
| Nav Links | `text-sm` (14px) | 400 (Inter) | normal | wide (lowercase) | `new drop`, `our club`, `contacts` |
| Marquee Words | `text-2xl / text-3xl` (24–30px) | 700 italic (Inter) | normal | 0.02em (uppercase) | Continuous strip |
| La Maison Eyebrow | `13px` | 400 italic (Playfair) | normal | 0.4em (uppercase) | `La Maison` label |
| La Maison Body | `14.5px` | 300 (Inter) | 1.7 | normal | Hero copy block |
| CTA Pill | `text-sm` (14px) | 500 (Inter) | normal | normal | `Shop Now` |
| DropShowcase Body | `13.5px` | 300 (Inter) | 1.8 | normal | Two editorial paragraphs |

### Principles

- **Letters become the layout.** The hero wordmark is not a logo placed on the page — its characters, distributed full-width via `flex justify-between`, ARE the page's structural frame. Typography does the job a grid would do elsewhere.
- **Negative letter-spacing at display sizes.** The wordmark uses `−0.04em` so the Italiana serifs feel etched rather than typeset.
- **Wide tracking on the smallest type.** Michroma "PARIS" at 10px / `0.32em` and Playfair "La Maison" at 13px / `0.4em` — small type earns its presence by stretching.
- **Lowercase is deliberate.** Nav links are lowercase (`new drop`, `our club`, `contacts`) — a quiet rebellion against e-commerce caps.
- **Italic + bold uppercase belongs to the marquee.** The only place Inter is set italic-bold; it gives the strip a fashion-spread voice.
- **Weight 500 is rare.** Used only on the CTA pill. The system runs on 300 (body), 400 (display/nav), and 700-italic (marquee).
- **Each font has one job.** Italiana = the name. Playfair = italic accent. Michroma = technical label. Inter = everything readable.

### Note on Font Substitutes

If Italiana is unavailable, fall back to a high-contrast didone (Bodoni Moda, Playfair Display Black) with tracking pulled to `−0.05em` to recover the couture sharpness — but accept that the wordmark loses some of its signature. Michroma substitutes poorly; use Eurostile Extended or a stretched Inter at `0.4em` tracking before defaulting to system sans. Never substitute Inter with a humanist serif — it disrupts the four-font discipline.

## Layout

### Spacing System

- **Base unit:** `4px` (Tailwind default). All paddings, gaps, and margins are 4-multiples.
- **Nav padding:** `px-8 md:px-12 lg:px-16` (32 / 48 / 64px) horizontal, `pt-7` (28px) top.
- **Hero copy padding:** matches nav (`px-8 md:px-12 lg:px-16`) so the La Maison block aligns with the navbar gutter.
- **Section padding (DropShowcase):** `py-24 md:py-32` (96 / 128px) vertical, `px-6 md:px-10 lg:px-14` horizontal.
- **Marquee padding:** `py-8 md:py-10` (32 / 40px) vertical, gap `gap-12` (48px) between words.
- **Grid gaps:** `gap-6 md:gap-10` (24 / 40px) inside the DropShowcase 12-col grid; `gap-8 lg:gap-16` (32 / 64px) inside the hero copy grid.

### Grid & Container

- **Page width:** Full-bleed. No max-width on the page shell — the cream canvas touches all four sides.
- **DropShowcase container:** `max-w-7xl mx-auto` (1280px) over a 12-column grid. Left image `col-span-5`, right image `col-span-5` with `md:-mt-16` offset, text column `col-span-2`.
- **Hero copy grid:** `grid lg:grid-cols-2 gap-8 lg:gap-16 items-end` — left col holds the La Maison block; right col intentionally empty.
- **Marquee:** No container — full viewport width, `overflow-hidden` clipping the looping track.

### Whitespace Philosophy

Whitespace is the maison's most expensive material. The cream around the wordmark is not "empty" — it's the gallery wall, and removing it would make the hero look promotional. The DropShowcase keeps two photos and 24 words of copy on a page that could hold a hundred; the restraint signals confidence. Every iteration of this page has *removed* elements (eyebrows, captions, glass cards, secondary CTAs) — when in doubt, take something out.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Cream surfaces, marquee strip, DropShowcase tiles |
| Hairline | `border border-white/30` or `border-white/70` | Mobile hamburger ring, CTA pill outline (over video only) |
| Wordmark glow | `text-shadow: 0 4px 32px rgba(0,0,0,0.15)` | The giant Italiana wordmark only — keeps it from going flat against bright video frames |
| Scrim wash | `linear-gradient` top/bottom + radial vignette | Hero video legibility — never on cream surfaces |

### Shadow Philosophy

Drop shadows are forbidden on cream surfaces. The page is print, not product UI — paper doesn't cast shadows on itself. The one exception is the wordmark's soft `text-shadow`, which exists purely to keep the Italiana letterforms readable against video; it should be invisible as a "shadow" and felt only as etched depth.

### Decorative Depth

- **Hero video** — the only "depth" on the page; photography substitutes for shadow.
- **Three-layer scrim stack** — top scrim, bottom scrim, radial vignette — gives the hero a vignette without darkening the centre.
- **Image hover scale** — DropShowcase images scale `1.04` over `1200ms ease-out` to imitate a slow magazine page-turn.
- **Grain overlay utility** (`.grain`) — defined but applied sparingly; a 6% opacity SVG turbulence layer for paper texture when needed.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | `0px` | Default — all images, sections, marquee, nav, DropShowcase tiles |
| `{rounded.pill}` | `9999px` | Single use — the outline "Shop Now" CTA in the hero |
| `{rounded.circle}` | `9999px` (square) | Mobile hamburger button (`w-9 h-9`) |

No `sm` / `md` / `lg` radii exist in the system — sharp corners are non-negotiable. The pill is the only soft shape, and it is borrowed from couture button conventions, not from product UI.

### Photography Geometry

- **Hero video:** Full viewport, `object-cover`, `h-[100svh] min-h-[680px]`. No radius, no crop frame.
- **DropShowcase tiles:** `aspect-[4/5]` (portrait 1600×2000), `overflow-hidden`, `bg-bone` fallback. Sharp corners.
- **Right image offset:** `md:-mt-16` pulls the second tile up by 64px, creating the editorial stagger that defines the section.
- **Image hover:** `transition transform duration-[1200ms] ease-out group-hover:scale-[1.04]` — slow, dignified.
- **Loading:** No lazy-loading on the two hero photos — they're above-fold on most viewports. `?v=2` cache buster on the DropShowcase background image.

## Components

### Top Navigation

**Navbar** `{component.nav-inline}` — Absolute-positioned (`absolute top-0 left-0 right-0 z-50`), padded `px-8 md:px-12 lg:px-16 pt-7`. Three lowercase Inter links on the left (`new drop`, `our club`, `contacts`), centered brand stack (`Amée` Italiana `text-2xl` + `Paris` Michroma `10px / 0.32em`), three lucide icons on the right (`Search`, `Heart`, `ShoppingBag`, all `strokeWidth={1.3}` `w-5 h-5`). Mobile collapses left links into a circular hamburger (`w-9 h-9 rounded-full border border-white/30`).
- *Default:* text `text-white/90`, icons `text-white`.
- *Active link:* `hover:text-white transition-colors` — only state shift permitted.
- *Focus:* native focus ring; do not restyle.
- *Critical:* `<FadeIn>` lives INSIDE `<nav>`, never wrapping it — wrapping creates a stacking context that hides the nav behind the hero video.

### Buttons

**`{component.cta-pill}` — Shop Now (outline pill)** — `inline-flex items-center gap-2 rounded-full border border-white/70 text-white text-sm font-medium px-5 py-2.5`. Lives in the hero La Maison block only.
- *Default:* transparent fill, `white/70` border, white text.
- *Active:* `hover:bg-white hover:text-ink transition-colors` — full inversion, no scale.
- *Focus:* native focus ring.

**`{component.button-icon}` — Nav icon button** — Bare `<button>` wrapping a lucide icon (`Search` / `Heart` / `ShoppingBag`). No background, no padding chrome, `aria-label` required.
- *Default:* `text-white`, stroke 1.3, 20×20.
- *Active:* opacity shift only — never recolor.
- *Focus:* native ring.

**`{component.button-hamburger}` — Mobile menu** — `md:hidden w-9 h-9 rounded-full border border-white/30 flex items-center justify-center`. Contains a single `4×1px` white bar.
- *Default:* hairline border `white/30`, transparent fill.
- *Active:* increase border to `white/60`.
- *Focus:* native ring.

### Cards & Containers

**`{component.tile-editorial}` — Editorial photo tile** — `aspect-[4/5] overflow-hidden bg-bone` containing an `<img object-cover>` with `transition transform duration-[1200ms] ease-out group-hover:scale-[1.04]`. The DropShowcase uses two of these.
- *Default:* full-bleed image inside fixed 4:5 frame.
- *Active:* image scales 1.04 over 1.2s; tile geometry never moves.

**`{component.tile-marquee}` — Marquee strip** — `bg-white text-ink py-8 md:py-10 overflow-hidden`, contents `flex items-center gap-12 whitespace-nowrap` driven by `.marquee-track` (`animation: marquee 38s linear infinite`). Each word pairs with a `Diamond` glyph (`strokeWidth 1.4`, `w-5 h-5 opacity-70`).
- *Default:* perpetual leftward translate from 0 to −50%.
- *Reduced motion:* animation disabled by the global `prefers-reduced-motion` rule.

**`{component.tile-text}` — DropShowcase text column** — `col-span-2 space-y-6 mt-8 md:mt-16`, two Inter paragraphs at `13.5px / 1.8 / 300`. No heading above it; the photos do the introducing.

### Inputs & Forms

Not present in this showcase. If introduced (collection filters, atelier contact), use ink-on-cream text inputs with a 1px ink hairline underline, no rounded corners, no fill — match the print discipline. Reserve any focus accent as a thicker ink underline, never a chromatic glow.

### Footer

**No footer.** A `Footer.tsx` exists in the repo but is intentionally **not** imported in `App.tsx`. The page ends with the DropShowcase the way a magazine cover ends with its last image. Do not mount it. Contact / legal links, if required, should be solved with a discrete utility line inside an existing section — never a bottom slab.

## Do's and Don'ts

### Do

- Keep the page `{colors.cream}` + `{colors.ink}` only. Let color come exclusively from the editorial photography.
- Treat the wordmark as architecture — stretch it edge-to-edge via `flex justify-between` regardless of letter count.
- Use the four fonts with discipline — one job per family.
- Keep corners sharp (`{rounded.none}`). Reserve `{rounded.pill}` for the single outline CTA.
- Apply the three-layer scrim stack on any hero video — top, bottom, radial — and nothing else.
- Set body copy at `13.5–14.5px` with `1.7–1.8` line height; couture reads slowly.
- Use `FadeIn` (setTimeout-based) and `AnimatedHeading` for all motion. No framer-motion, no GSAP.
- Honor `prefers-reduced-motion` — the global override disables `.marquee-track` and all transitions.
- Reference `{colors.bone}` only as image fallback so slots never blink to grey while loading.

### Don't

- Don't add any chromatic accent — gold, rose, green, "buy" red. The colorlessness IS the luxury statement.
- Don't add gradients to UI surfaces, drop shadows to cards, or soft-rounded tiles — couture print has none.
- Don't reintroduce eyebrow rows on the DropShowcase (`Édition No.008 / spring summer 2026`) — they were stripped on purpose.
- Don't add figcaptions (`Look 01` / `Look 02`), glass overlay cards, or "Discover →" links — all removed during iteration.
- Don't mount the `Footer.tsx` — the page ends like a magazine cover.
- Don't shrink the wordmark to a "polite logo" — its edge-to-edge dominance is the brand's confidence.
- Don't add e-commerce clutter — badges, sale tags, swatches, price chips. *Savoir-faire over selling.*
- Don't wrap `<nav>` in `<FadeIn>` — it must live inside. Wrapping creates a stacking context bug that hides the nav.
- Don't substitute Inter with a serif — the four-font discipline collapses.
- Don't recolor on hover. Only opacity, scale, or background-invert (CTA pill) are permitted.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤ 419px | Wordmark drops to `clamp` low end (~4.5rem), nav shows only centered brand + hamburger |
| Phone | 420–640px | Same as above; La Maison block remains single column |
| Large phone | 641–735px | Nav still hamburger; DropShowcase grid still stacked (`col-span-12`) |
| Tablet portrait | 736–833px | Below `md:768` cutoff — still mobile rules |
| Tablet landscape | 834–1023px | `md:` rules engage — left nav links visible, 5+5+2 DropShowcase grid, right image gains `-mt-16` offset |
| Small desktop | 1024–1068px | `lg:` rules engage — hero copy grid splits to 2-col, padding bumps to `px-16` / `px-14` |
| Desktop | 1069–1440px | Wordmark scales mid-range of `clamp`; full 12-col DropShowcase |
| Wide desktop | ≥ 1441px | Wordmark caps at `20rem`; cream gutters widen on either side of `max-w-7xl` showcase |

### Touch Targets

- Minimum hit area: 44×44px (nav icon buttons satisfy via stroke + invisible padding).
- Mobile hamburger: exact `w-9 h-9` (36px) — paired with generous nav padding to keep tap accuracy.
- CTA pill: `px-5 py-2.5` yields ~40px height; lengthen vertical padding before resizing text on small screens.

### Collapsing Strategy

- **Nav links:** hidden below `md` (`hidden md:flex`); centered brand and right icons remain visible.
- **Centered brand:** always centered via `absolute left-1/2 -translate-x-1/2`.
- **Hero wordmark:** may wrap to 2 lines on small screens but each line keeps edge-to-edge `justify-between`.
- **La Maison grid:** collapses from `lg:grid-cols-2` to single column; right column was empty anyway.
- **DropShowcase grid:** below `md` all three children become `col-span-12` and stack vertically; the `-mt-16` offset disappears.
- **Marquee:** speed and font size hold across breakpoints — the perpetual motion is constant.

### Image Behavior

- DropShowcase tiles enforce `aspect-[4/5]` at every breakpoint; the image is `object-cover`.
- Hero video uses `object-cover` with `h-[100svh] min-h-[680px]` so safe-area collapse on iOS doesn't kill the frame.
- Background image on DropShowcase uses `?v=2` cache buster and `background-size: cover; background-position: center;`.
- No `srcset` is specified — buyer is expected to supply correctly-sized assets (`look-01.png`, `look-02.png`, `background-section-2.png`).

## Iteration Guide

1. **New page (collection / lookbook / atelier)?** Start from `{colors.cream}` + `{colors.ink}` + large photography. No accent, ever.
2. **Use type as structure.** A big Italiana wordmark or Playfair display line can be the layout itself, not just a label.
3. **Subtract before you add.** Every iteration of this page removed elements; the page reads luxurious because of what isn't there.
4. **One job per font.** Italiana = the name, Playfair = italic accent, Michroma = technical caps, Inter = everything else. Don't blur the boundaries.
5. **Reference tokens, never hex.** Use `{colors.cream}` / `{colors.ink}` / `{rounded.none}` so future edits stay coherent.
6. **Display vs body rule.** Italiana and Playfair never carry body copy. Inter never carries display headlines.
7. **Never document hover.** Per Apple convention, only `default`, `active`, and `focus` states exist in this system. The CTA pill's `hover:bg-white` is the single sanctioned exception, treated as the active state.

## Known Gaps

- Validation, error, and success states are not surfaced — no form lives in this showcase. Design them in ink hairlines, never chromatic.
- Dark-mode behavior is not specified — the maison is a cream-paper artifact; a dark variant would require a parallel decision (most likely ink-canvas + cream-ink type, never grey).
- Cart, product detail, and checkout flows aren't specified. Resist adding accent colors for "buy" buttons when those flows are designed.
- The intentionally-absent footer means contact / legal links currently have no home — solve discretely without breaking the magazine-cover ending.
- Italiana and Michroma are specific display faces; high-fidelity substitutes are not surfaced in the analyzed pages and any swap will alter tone.
- No specific blur radius is documented for backdrop-blur surfaces beyond the prompt's `liquid-glass` utility (which is defined but unused in the four mounted sections).
