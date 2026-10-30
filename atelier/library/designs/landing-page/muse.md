---
version: "1"
name: "Muse — Editorial Art Catalogue"
description: "A multi-section landing for a contemporary art exhibition studio, built to feel like a luxury exhibition catalogue (Gagosian / Zwirner / Hauser & Wirth). Bone canvas, a single oxblood used as traditional ink, Fraunces serif display, slow-reading print rhythm, and one dark Archive section."
colors:
  bone: "#F4EFE6"
  paper: "#FAF7F1"
  oxblood: "#6B2B1F"
  ink: "#161413"
  ash: "#8A8780"
  border: "#16141319"
typography:
  display:
    fontFamily: "Fraunces"
    role: "headlines, exhibition titles (serif, optical-size aware)"
  body:
    fontFamily: "Inter"
    weights: "300–500"
    role: "body, captions, labels"
  flourish:
    fontFamily: "Instrument Serif"
    style: "italic"
    role: "rare italic flourish — a single poetic line"
spacing:
  base: "4px"
  section-y: "10rem"
  reading-measure: "60ch"
rounded:
  none: "0px"
  pill: "9999px"
components:
  magnetic-cursor: "8px oxblood dot trailing the mouse with spring physics — the one playful, alive element"
  archive-section: "The only dark band — inverts to ink, by design"
  exhibition-plate: "Sharp-cornered figure with sepia-tint + grain, Fraunces title, Inter metadata"
  schedule-row: "Hairline row that fills oxblood scaleX on hover, text inverts to bone"
---

# Muse — Editorial Art Catalogue

> Fivefold showcase. Pairs with the Muse prompt. Use this to keep pages you build *after* the landing — exhibition detail, artist index, visit info — feeling like the same printed catalogue.

## Overview

Muse is **a luxury exhibition catalogue rendered as a website** — the reference is the printed object a blue-chip gallery (Gagosian, David Zwirner, Hauser & Wirth) hands you at a show: lots of paper, large plates, minimal type, and the confidence to leave space empty. It is not a "website about art"; it's the catalogue itself, scrolling. The tagline — *"Look slowly. Look again."* — is also the interaction thesis: Lenis inertial scroll, ~10rem section gaps, and a ~60ch reading measure all conspire to make the viewer decelerate.

The governing decision: **the work is the content; the interface is the frame.** A catalogue never competes with the art on its pages — so the UI recedes to bone paper, restrained serif type, and almost no color. Generosity of whitespace and slow pacing signal that this is a place to look, not to convert. Oxblood is the only chromatic accent and it is handled as *ink or oil paint*, not a brand color — it punctuates (a rule, a single word, the cursor dot, an active marker) and never floods the surface.

The system extends past the landing by repeating four constants: bone canvas, sharp-cornered plates, oxblood-as-punctuation, and a single dark Archive band. Any new page — exhibition detail, artist index, visit/RSVP — should inherit those constants, lengthen the reading rhythm, and resist the urge to add a second accent or a second dark surface. The catalogue voice survives only if every new screen looks like another spread from the same printed object.

**Key Characteristics:**
- Warm bone canvas (`{colors.bone}` — `#F4EFE6`) — the color of premium uncoated paper; never pure white.
- A single chromatic accent — **oxblood** (`{colors.oxblood}` — `#6B2B1F`) — treated as traditional ink, used as punctuation only.
- **Fraunces** display serif (optical-size aware, `ss01`/`ss02` enabled) + **Inter** body + rare **Instrument Serif italic** flourish.
- Print rhythm: ~60ch reading measure, ~10rem section gaps, Lenis inertial smooth scroll (1.2s duration, exponential ease).
- Sharp `{rounded.none}` corners everywhere except pill buttons; no drop shadows on imagery.
- One dark band — the **Archive** — inverts to `{colors.ink}`. The only dark surface in the entire system.
- Sepia-tint filter (`sepia(0.15) saturate(0.92) contrast(1.02)`) + 6% grain overlay on every artwork — the printed-plate texture.
- A magnetic cursor (8px oxblood dot, spring `stiffness: 150 / damping: 15`) — the single alive, tactile gesture.

## Colors

> **Source pages analyzed:** Hero · NowShowing · Archive · Curator · Schedule · Footer — the full 6-section catalogue.

### Surface

- **Bone** (`{colors.bone}` — `#F4EFE6`): The paper. Warm, uncoated, never white. The global `<body>` background and the canvas every section sits on. Pure `#FFFFFF` would turn the catalogue into a screen.
- **Paper** (`{colors.paper}` — `#FAF7F1`): A slightly brighter accent surface, reserved for the Schedule section background. The only deviation from bone in light mode; reads as a different stock of paper, not a different palette.
- **Ink** (`{colors.ink}` — `#161413`): The Archive band's background. A warm near-black, like printer's ink — never `#000`.

### Brand & Accent

- **Oxblood** (`{colors.oxblood}` — `#6B2B1F`): The one accent — **read it as ink or oil paint, not a logo color.** It carries the weight of art history and craft. Permitted uses: eyebrow labels, the 8px hairline before an eyebrow, the magnetic cursor dot, the Schedule row hover fill, the scroll-progress bar, the newsletter input focus border, the dropcap. Using it as a flat "brand color" on every button would cheapen it.

### Text

- **Ink** (`{colors.ink}` — `#161413`): Primary type on bone surfaces. Headlines, body, navigation. Same hex as the Archive background — the system is bichrome before it adds anything.
- **Bone** (`{colors.bone}`): Primary type *inside* the Archive band — reversed-out, the only inverted reading mode.
- **Ash** (`{colors.ash}` — `#8A8780`): Captions, plate numbers, dates, credentials, bottom-bar legal. The catalogue's quiet metadata voice. Always at small sizes with meta tracking.

### Hairlines & Borders

- **Border** (`{colors.border}` — `#16141319`): 10% ink. Section dividers, Schedule row tops, footer card border, newsletter input underline. The only line weight in the system is 1px hairline — heavier rules feel ungallery.

### What's Forbidden

- No second accent color, no gradients (except the hero video's `from-black/45 via-black/15 to-black/65` legibility vignette), no neon, no dark-mode toggle. The Archive *is* the dark mode and it is a section, not a setting.

## Typography

### Font Family

- **Display:** `Fraunces, Georgia, serif` — optical-size aware (`opsz 9..144`), `font-feature-settings: 'ss01', 'ss02'`, weights 300–600 in both upright and italic. Loaded with `font-optical-sizing: auto` so display sizes get tighter spacing and ball-terminal shapes automatically.
- **Body:** `Inter, system-ui, sans-serif` — weights 300 / 400 / 500 only. Loaded plain; no stylistic sets.
- **Flourish:** `"Instrument Serif", serif` — italic only (`ital@1`). Reserved for one poetic line per section, never more.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `hero-wordmark` | `24vw` (lg) / `26vw` (md) / `33vw` (sm) | 300 (light) | `0.9` / `0.85` | `-0.045em` | Footer "MUSE" + hero "Muse" — Fraunces |
| `display-xl` | `text-6xl` (md+) / `text-4xl` (sm) | 300 | `1.05` | `-0.03em` | Section H2 (NowShowing, Archive, Schedule) — Fraunces |
| `display-lg` | `text-5xl` (md+) / `text-3xl` (sm) | 300 | `1.1` | `-0.03em` | Newsletter heading — Fraunces |
| `display-md` | `text-4xl` (md+) / `text-3xl` (sm) | 300 | `1.15` / `1.1` | `-0.02em` | Curator pull quote, Visit address — Fraunces |
| `plate-title` | `text-lg` | 500 | `tight` | normal | Artwork caption titles — Fraunces |
| `body` | `text-base` | 400 | `1.6` – `1.7` | normal | Body copy, descriptions — Inter |
| `body-small` | `text-sm` | 400 / 500 | `1.5` | normal | Schedule descriptions, hours, nav links — Inter |
| `eyebrow` | `text-xs` | 400 | normal | `tracking-meta` (`0.3em`) UPPERCASE | Section eyebrows, dates, credentials — Inter |
| `caption` | `text-xs` | 400 | normal | `tracking-meta` UPPERCASE | Plate years, metadata, bottom bar — Inter |
| `flourish` | inherits parent | 400 italic | inherits | normal | One italic clause per section — Instrument Serif |

### Principles

- **Optical sizing is non-negotiable on Fraunces.** Display sizes get `font-optical-sizing: auto` so headlines pull tight and small captions stay open — never override the variable axis with a fixed `opsz`.
- **Negative letter-spacing scales with size.** Wordmarks at `-0.045em`, display headers at `-0.03em`, mid-display at `-0.02em`, body at 0. Tight at large, neutral at small — the print rule.
- **Italic is a single breath, not a texture.** Instrument Serif italic appears once per section at most, mid-sentence after an em-dash or comma. Sprinkling italic across captions kills the gesture.
- **Body weight stops at 500.** Weight 600+ never appears on bone. A catalogue does not bold; it sets weight 500 once for emphasis and trusts the reader.
- **`tracking-meta` (`0.3em`) is reserved for UPPERCASE labels only** — eyebrows, dates, credentials, navigation utility text. Never apply meta tracking to mixed-case body.
- **Reading measure caps at ~60ch.** Long-form body never crosses 60 characters per line — that's what makes the page feel like prose, not UI.
- **Text-balance on display headers.** Section H2s use `text-balance` so the italic clause never orphans on its own line.
- **Dropcap is a Curator-only flourish.** `.dropcap` (4.5em oxblood Fraunces) appears once on the page — the Curator body opener. Repeating it elsewhere flattens it.

### Note on Font Substitutes

If Fraunces fails to load, the stack falls to `Georgia, serif` — acceptable but loses the optical-size response, so manually tighten display letter-spacing by an extra `-0.005em` to compensate. If Inter fails, `system-ui` is fine; weights 300–500 map cleanly to SF Pro / Segoe UI. If Instrument Serif fails, fall back to `Georgia` italic and accept the slightly heavier feel — do *not* substitute another italic display face, because the contrast with Fraunces upright is what makes the flourish read.

## Layout

### Spacing System

- **Base unit:** `4px` (Tailwind default).
- **Section vertical padding:** `py-24 md:py-40` (~6rem mobile / ~10rem desktop) — the print rhythm constant. `{spacing.section-y}`.
- **Section horizontal padding:** `px-6 md:px-10`.
- **Inter-section gap:** No backgrounds, just padding — bone-on-bone separation is intentional.
- **Component padding:** Visit card `p-8 md:p-12`. Pill button `pl-5 pr-2 py-2`. Filter pill `px-4 py-2`. Schedule row `py-8 md:py-10`.
- **Caption spacing:** Plate `<figcaption>` uses `mt-5 space-y-1` — captions hug the image, lines hug each other.

### Grid & Container

- **Max content width:** `max-w-[1280px]` for editorial sections (NowShowing, Curator, Schedule, Footer Visit card). `max-w-[1440px]` for the Archive masonry only — the vault gets to breathe wider.
- **NowShowing grid:** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10`.
- **Archive masonry:** `columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6` with `break-inside-avoid` on each figure.
- **Curator grid:** 12-column, portrait at `col-span-4 col-start-2`, text at `col-span-6 col-start-6` — deliberate asymmetry.
- **Schedule rows:** 12-column, zones `1 / 5 / 4 / 2` (date · title · description · city).
- **Aspect ratios:** `portrait 3/4`, `landscape 4/3`, `painting 5/7` (signature artwork crop).

### Whitespace Philosophy

Whitespace is not the gap between things; it is the thing. The ~10rem section pads, the 60ch measure, and the empty quadrants of the Curator grid all do the same job — they tell the reader the page is unhurried and the work matters. Removing whitespace to fit more on a screen flattens the catalogue into a marketing site. When in doubt, take an element out and add `py-` instead.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Default for every plate and the Archive masonry — catalogues don't float their images. |
| Soft hairline | `border border-ink/15` (10% ink) | Visit card, Schedule row tops, footer bottom bar, newsletter input underline. |
| Backdrop blur | `bg-bone/85 backdrop-blur-sm` | Navbar after scroll past hero, hero CTA button (`bg-bone/10 backdrop-blur-md`). |
| Vignette gradient | `bg-gradient-to-b from-black/45 via-black/15 to-black/65` | Hero video legibility overlay only — the only gradient on the page. |

**Shadow philosophy.** There are no `box-shadow` declarations in the system. A printed catalogue does not cast shadows; lifting plates with drop shadows is the single fastest way to make Muse look like a generic agency template. Depth comes from sepia tonality and the warm-on-warm bone-vs-paper shift, not from elevation.

**Decorative Depth:**
- **Grain overlay** — SVG fractal noise at `opacity: 0.06`, `mix-blend-mode: multiply`, applied over every artwork and the hero video.
- **Sepia-tint** — `filter: sepia(0.15) saturate(0.92) contrast(1.02)` on every art image; the Curator portrait adds `grayscale-[0.3]` on top.
- **Mask-image gradient** — the Visit card's right image fades in left-to-right via `linear-gradient(to right, transparent 0%, black 35%)`.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | `0px` | Every plate, every figure, the Visit card, the Archive masonry — the catalogue default. |
| `{rounded.pill}` | `9999px` | Hero CTA, Subscribe nav button, "Plan your visit" button, Archive filter pills, magnetic cursor, inner-circle ornaments. |

The system is binary: sharp-corner everything, pill the few interactive controls. No `rounded-sm/md/lg/xl`, no soft tile radius. Mixing a 12px card radius in here would announce "this is a SaaS template."

### Photography Geometry

- **Hero:** Full-bleed `100vw × 100vh` video, `object-cover`.
- **NowShowing artworks:** `aspect-[5/7]` (painting crop) — taller than 3:4, the signature ratio.
- **Archive masonry:** Mixed organic — portrait, landscape, painting, square — heights flow naturally inside `columns-*`.
- **Curator portrait:** `aspect-[3/4]` (portrait).
- **Visit card image:** `landscape`, mask-faded from the left edge.
- **Image radius:** All images are `{rounded.none}`. The pill radius never touches imagery.
- **Loading strategy:** Eager for above-the-fold (hero video, first 3 NowShowing plates, Curator portrait). Lazy for Archive masonry items past the second row and the Visit image.
- **Alt-text format for artworks:** `${artist}, ${title}, ${medium}, ${year}` — the catalogue caption itself.

## Components

### Top Navigation

**Navbar** · `{component.navbar}` — Fixed `top-0 z-40`, `px-6 md:px-10 py-5`. **Default (over hero):** transparent, text `{colors.bone}`. **Active (after `scrollY > 100vh`):** `bg-bone/85 backdrop-blur-sm border-b border-border`, text `{colors.ink}`. Center links (desktop): `text-sm font-medium`. Subscribe right: pill border in `{colors.oxblood}`. **Focus:** link color shifts to `{colors.oxblood}`.

### Buttons

**Button — Hero CTA** · `{component.button-hero}` — Glassy pill: `bg-bone/10 backdrop-blur-md border border-bone/30 rounded-full pl-2 pr-5 py-2`, label `text-sm font-medium` `{colors.bone}`, inner circle `w-9 h-9 rounded-full bg-ink` with `ArrowRight`. **Active:** `bg-bone/15`. **Focus:** 2px `{colors.bone}` outline at 2px offset.

**Button — Visit Primary** · `{component.button-primary}` — Solid pill: `bg-ink text-bone rounded-full pl-5 pr-2 py-2`, trailing circle `w-8 h-8 rounded-full bg-bone/15` with `ArrowUpRight`. **Active:** `bg-oxblood` — the rare permitted oxblood fill, justified because it marks the page's single most important conversion. **Focus:** 2px `{colors.oxblood}` outline at 2px offset.

**Button — Newsletter Submit (Utility)** · `{component.button-utility}` — Naked icon: `text-oxblood p-3`, just `ArrowRight`. **Active:** `translate-x-1`. **Focus:** 2px `{colors.oxblood}` outline at 2px offset.

**Button — Filter Pill** · `{component.button-pill}` — `px-4 py-2 rounded-full border border-bone/20 text-xs tracking-meta uppercase text-bone/70` (Archive only). **Active (selected):** `bg-bone text-ink`. **Focus:** 2px `{colors.bone}` outline at 2px offset.

### Cards & Containers

**Exhibition Plate** · `{component.exhibition-plate}` — Sharp `{rounded.none}` figure, `aspect-painting`, `sepia-tint` + grain, no shadow, no border. Caption `mt-5 space-y-1`: year (ash), title (Fraunces `text-lg` — artist 500 + em-dash + italic title), medium (ash). **Active (in-view):** fades up `y: 24 → 0` over `0.7s` ease `[0.22, 1, 0.36, 1]`, stagger `i * 0.08s`.

**Archive Tile** · `{component.archive-tile}` — Inside the dark band: `break-inside-avoid` figure, `sepia-tint` + grain, no caption by default. **Active (focus / metadata reveal):** bottom strip slides `translate-y-2 → 0`, fades `opacity-0 → 100` over `0.5s`, bg `bg-gradient-to-t from-ink/95 to-transparent`, text `{colors.bone}`.

**Visit Card** · `{component.visit-card}` — `border border-ink/15 p-8 md:p-12`, 12-col grid. Left: eyebrow + address + hours + primary button. Right: masked landscape, bleeds `-mt-12 -mb-12 -mr-12` on desktop. Sharp corners, hairline only.

**Schedule Row** · `{component.schedule-row}` — `border-t border-ink/10 py-8 md:py-10`, 12-col (date / title / description / city). **Active (focus / hover):** absolute `bg-oxblood` overlay scales `scaleX: 0 → 1` from `origin-left` over `0.6s` ease-out; text → `{colors.bone}`; arrow translates `+8px x, -4px y`.

### Inputs & Forms

**Newsletter Email Input** · `{component.input-email}` — Bare: `bg-transparent border-b border-ink/30 outline-none py-3 text-base placeholder-ink/40`. **Active (typing):** value in `{colors.ink}`. **Focus:** underline shifts to `border-oxblood` — the line is the focus indicator.

### Footer

**Footer Block** · `{component.footer}` — Stacked inside `max-w-[1280px] mx-auto`: Visit card → Newsletter → Marquee → wordmark → bottom bar. Wordmark MUSE letters `text-[28vw]` `tracking-[-0.045em]`, each animates `y: 60 → 0, opacity 0 → 1` with `0.15s` stagger. Bottom bar: `border-t border-ink/10 mt-6 py-6`, three zones (legal / social / credit).

## Do's and Don'ts

### Do

- **Use `{colors.oxblood}` as ink, not as fill.** Reserve it for eyebrows, the hairline before an eyebrow, the cursor dot, the scroll-progress bar, the schedule-row hover fill, and the newsletter focus underline.
- **Set every plate to `{rounded.none}`** and trust the sharp corner. The catalogue voice depends on it.
- **Apply `sepia-tint` + grain to every artwork**, including the Curator portrait — consistent treatment is the brand.
- **Keep one Instrument Serif italic line per section maximum** — preferably mid-sentence after an em-dash.
- **Reserve `tracking-meta` (`0.3em`) for UPPERCASE labels.** Eyebrows, dates, credentials only.
- **Use `text-balance` on every display H2** so the italic clause never orphans.
- **Disable the magnetic cursor under `prefers-reduced-motion: reduce`** and on touch (md: breakpoint and below).
- **Keep the Archive (`{colors.ink}` bg) as the only dark section** — its meaning is in being alone.
- **Cap body width at ~60ch** so reading genuinely decelerates.
- **Let imagery dominate** — if type fights an image, shrink the type.

### Don't

- **Don't turn `{colors.oxblood}` into a brand color.** Filling every button with it flattens it from "ink" to "UI accent" and kills the craft argument.
- **Don't use `#FFFFFF` or `#000000`** anywhere — bone and warm-ink only.
- **Don't add a second accent color**, a second gradient (beyond the hero vignette), or any neon.
- **Don't put `box-shadow` on plates, cards, or buttons.** Catalogues don't float their images.
- **Don't add a second dark section.** The Archive's darkness only works because it's the only one.
- **Don't use `font-weight: 600+`** on bone surfaces — 500 is the ceiling for emphasis.
- **Don't sprinkle Instrument Serif italic** across captions and labels — it's a once-per-section gesture.
- **Don't tighten the section padding** below `py-24 md:py-40` — slowness is the thesis.
- **Don't introduce soft radii** (`rounded-sm/md/lg`). The system is sharp-or-pill.
- **Don't use framer-motion `<motion>` on every node** — reserve it for in-view triggers and the magnetic cursor.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤419 | Hero wordmark `text-[33vw]`, scroll cue + clock hidden, NowShowing 1-col, Archive 2-cols (CSS columns), Curator stacked. Pill buttons remain full-text. |
| Phone | 420–640 | Same as small phone. Footer marquee letter size `text-2xl`. Schedule rows show date + title + city only — description hidden. |
| Large phone | 641–735 | NowShowing 2-col, Archive 2-col, Curator stacked, Schedule still mobile-row. |
| Tablet portrait | 736–833 | NowShowing 2-col, Archive 3-col, navbar still mobile-collapsed. |
| Tablet landscape | 834–1023 | Hero wordmark `text-[26vw]`, navbar full (links visible), NowShowing 2-col, Archive 3-col, Curator stacked, Schedule full 4-zone row. |
| Small desktop | 1024–1068 | Hero wordmark `text-[24vw]`, NowShowing 3-col, Archive 4-col, Curator 12-col asymmetric layout, magnetic cursor active. |
| Desktop | 1069–1440 | Full editorial grid, max margins, all decorative depth (grain, sepia-tint) active. Schedule rows show full 4-zone (date / title / description / city). |
| Wide desktop | ≥1441 | Container caps at `1280px` (or `1440px` for Archive only); content centers, side margins grow — never let the line measure exceed 60ch. |

### Touch Targets

- Minimum tappable area: `44 × 44px` for any link or button (filter pills, nav links, schedule row arrows).
- Schedule rows are full-row clickable — `py-8` already exceeds the minimum.
- Filter pills sit at `px-4 py-2` plus text height = ~36px; on touch breakpoints they get `min-h-[44px]`.
- Magnetic cursor is disabled below `md:` so native tap behavior is preserved.

### Collapsing Strategy

- **Navbar:** Center links collapse to a hamburger below `md:`. Brand and Subscribe button persist.
- **Hero overlay:** Top metadata strip keeps the EST. line; clock disappears below `lg:`. Right-side editorial overlay narrows from `max-w-md` to full container width minus padding.
- **NowShowing grid:** 3 → 2 → 1 cols across desktop / tablet / mobile.
- **Archive masonry:** 4 → 3 → 2 cols. Filter pills wrap freely (`flex-wrap gap-2`).
- **Curator:** 12-col asymmetric layout collapses to a single stacked column below `md:` — portrait first, then text block.
- **Schedule rows:** Description column hidden below `md:`. City + arrow drop to the bottom-right of the row on mobile.
- **Footer Visit card:** 12-col layout stacks; image moves below the address block on mobile and abandons its bleed.

### Image Behavior

- All artworks delivered as `<img>` with explicit `alt` (artist, title, medium, year) — no decorative-only artwork.
- `srcset` recommended at 1x / 2x for plates; the hero is a single `.mp4` (`muse-hero.mp4`) at viewport size.
- Lazy-loading: `loading="lazy"` for Archive masonry past the first viewport, NowShowing items past the third, and the Visit image.
- `object-cover` on every figure, `aspect-painting` / `aspect-portrait` / `aspect-landscape` controls the box.
- Sepia-tint and grain remain at every breakpoint — they are the brand, not a desktop flourish.

## Iteration Guide

1. **New page (exhibition detail, artist index, essay)?** Start from `{colors.bone}` + large plates + Fraunces titles + ~60ch reading measure. Add `{colors.oxblood}` only as punctuation.
2. **Build whitespace before elements.** If a screen feels empty, that is correct — slowness is the brand.
3. **Italic flourish is once-per-section.** A new section earns a new italic line; repeating italic inside the same section breaks the gesture.
4. **Any new dark surface must justify itself against the Archive.** Ideally there is still only one. A dark CTA, a dark testimonial block — say no first.
5. **Imagery leads; type recedes.** If a caption fights the painting, shrink the caption to `text-lg` and trust the reader.
6. **Variants live in `{component.*}` tokens, not new components.** A "secondary archive tile" is still an archive tile with different image content — don't fork the system.
7. **Never document hover.** Per the system convention, state docs cover default / active / focus only. Hover is decoration, not contract.

## Known Gaps

- **Form validation states** (error, success, disabled) for the newsletter input — not surfaced in analyzed pages. Extend the hairline-underline language: `{colors.oxblood}` for error, `{colors.ash}` for disabled.
- **Magnetic cursor `data-cursor="hover"` state** is partially specified — touch fallback is documented but the hover-scale interaction on links isn't fully tokenised.
- **Artist index / long-form essay layouts** aren't documented — extend the ~60ch measure rather than introducing a new system.
- **Ticketing / RSVP flows** (multi-step forms, calendar, payment) are not in the analyzed pages.
- **Internationalization** — CJK / RTL behavior for Kyoto and Mexico City locales is not surfaced.
- **Dark-mode parity for non-Archive surfaces** is intentionally undefined — if a future page needs one, treat it as a *second* Archive band, not a theme toggle.
