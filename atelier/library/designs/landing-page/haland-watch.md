---
version: "1"
name: "Design System Inspired by HALAND"
description: "HALAND is dark editorial luxury for a Geneva watch house: a near-black ink canvas, Bebas Neue condensed display over 1px hairlines, Helvetica micro-labels with tabular figures, and a 400vh hero where scrolling scrubs a product film frame by frame through a 0.085 rAF lerp while a live chronograph readout counts the footage. Below it: an inline-image manifesto, a 42s marquee, a staircase collection grid, sticky craft and atelier columns, one full-bleed break frame, and a viewport-wide wordmark footer. No scroll-reveal anywhere — every section renders visible; motion belongs to scroll and hover only."
colors:
  ink: "#0b0b0a"             # global background — html, body, every section
  bone: "#edeae3"            # primary text, CTA borders, ::selection bg
  mist: "#a8a49b"            # muted text — eyebrows, notes, captions, spec keys
  line: "rgba(237,234,227,0.14)"   # every border on the page — 1px hairlines
  bone-alphas: "bone/90 footer wordmark · /70 readout+est line · /50 scroll hint · /40 coordinates+cal line"
  veil: "gradient ink/55 → transparent → ink/80 over the hero film · ink/30 over the break image"
typography:
  display: { fontFamily: "'Bebas Neue', 'Helvetica Neue', sans-serif", weights: "400 (single-weight face)", role: "wordmarks 16vw/13vw hero + 18vw/15vw footer · section H2 text-5xl→7xl · card names 3xl · marquee 2xl-3xl · stat numerals 5xl-6xl" }
  body:    { fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", weights: "400", role: "all paragraphs — text-sm leading-relaxed, always max-width-capped (26-52ch)" }
  mono:    { fontFamily: "same Helvetica stack + font-variant-numeric: tabular-nums", weights: "400", role: "eyebrows 11px .25em · spec keys 10px .22em · readout 11px — uppercase micro-labels; tabular figures stop the counting readout from jittering" }
spacing:
  section-shell: "px-6 py-28 → md:px-10 md:py-40 · every section ends border-b hairline"
  eyebrow-gap: "24px below the numbered eyebrow (mb-6), 56-80px to content (mb-14/mb-20)"
  grid-gaps: "gap-x-8 · gap-y-20 (collection) / gap-y-16 (gallery) · stats gap-10"
  staircase: "md:mt-0 / 24 / 48 / 72 — collection cards step down 6rem per column"
rounded:
  none: "0 everywhere — no radius exists on this page; hairlines and hard frames only"
motion:
  hero-scrub: "ScrollTrigger stores progress → dedicated rAF lerps current += (target−current) × 0.085 → video.currentTime = current × duration; all-intra H.264 so every frame seeks"
  hero-typo: "same current value drives wordmark letterSpacing 0.08+p×0.35em, opacity 1−p×1.15, translateY p×−6vh · caption fades in clamp((p−0.45)×3) · hint dies at 1−p×4"
  lenis: "lerp 0.09, smoothWheel, driven from gsap.ticker with lagSmoothing(0)"
  ease-out-quart: "cubic-bezier(0.25, 1, 0.5, 1) — every hover"
  durations: "--dur-fast 300ms (links, buttons) · --dur-slow 700ms (media zoom)"
  u-link: "1px underline scaleX 0→1, origin flips right→left so it exits the way it entered"
  slot-zoom: "media scales 1.035 inside overflow-hidden frames, 700ms quart"
  marquee: "42s linear infinite, translateX(−50%) over a duplicated track"
  no-reveal: "nothing enters on scroll — no fade-ins, no viewport triggers, page is calm on load"
  reduced-motion: "global CSS guard zeroes all animation/transition durations"
components:
  nav: "fixed top, mix-blend-difference — wordmark .35em tracked, 4 u-links, bordered Enquire button that inverts to bone on hover"
  hero: "h-[400vh] section > sticky h-screen viewport — film, tonal veil, wordmark block, late caption, chronograph readout, coordinates, scroll hint"
  readout: "live T+00:SS.CC in tabular figures, computed from current×duration each frame; Cal. HL-01 · 28,800 vph beneath"
  section-shell: "border-b hairline + px-6/10 py-28/40 + numbered mono eyebrow (01 — Manifesto … 06 — Correspondence)"
  slot-frame: "overflow-hidden media frame; .slot-inner img/video object-cover, 1.035 zoom on hover"
  staircase-grid: "4-col collection, each card mt-stepped +24; card = 3/4 image, hairline meta row, Bebas name, note, price + Reserve u-link"
  sticky-split: "craft: sticky left column (md:h-screen) + scrolling right media stack · featured: 3/5 spec sheet + sticky 2/5 looping video"
  spec-sheet: "10 hairline-separated key/value rows — mono uppercase key left, text-sm value right"
  break: "70vh full-bleed image, ink/30 wash, one tracked Bebas line pinned bottom-12"
  footer: "3-col correspondence block, then 18vw/15vw HALAND wordmark over a hairline, then a 10px mono legal row"
---

# Design System Inspired by HALAND

## Overview

HALAND sells eighty-eight watches a year, and the page moves like it: slow, exact, and quiet. Everything sits on a single **ink canvas** (`{colors.ink}`) — there are no cards, no panels, no elevation. Structure comes from **1px hairlines** (`{colors.line}`) that rule off every section, every collection card's meta row, every spec line; the page is closer to a letterpress catalogue than a web layout. Type is a two-voice system: **Bebas Neue** as the condensed display voice at every scale from a 2xl marquee item to an 18vw footer wordmark, and a **Helvetica micro-register** — 10–11px, uppercase, tracked .22–.25em, with `font-variant-numeric: tabular-nums` — playing the role a mono font usually plays. Body copy is deliberately scarce and always width-capped (26–52ch).

The signature is the **hero**: a 400vh runway holding a sticky viewport, inside which a ~3s product film is *scrubbed by scroll*. The engine is precise and non-negotiable — ScrollTrigger only records progress; a dedicated `requestAnimationFrame` loop lerps toward it at **0.085** and writes `video.currentTime`, which is what turns 30fps footage into liquid slow motion (the source is encoded all-intra so every frame is seekable). The same lerped value drives typography: the HALAND wordmark's letter-spacing stretches from 0.08em to 0.43em as it fades and lifts, a late caption ("Time, held still.") surfaces past 45% progress, and a **live chronograph readout** — `T+00:SS.CC` in tabular figures — counts the film's timecode in the corner like an instrument. Scroll down, and the watch film plays under your thumb.

Below the hero the page refuses spectacle. Six numbered chapters (`01 — Manifesto` … `06 — Correspondence`) share one shell: hairline bottom border, `px-6/10 py-28/40`, mono eyebrow, Bebas headline. The manifesto embeds two small images *inside the sentence* as inline chips; the collection steps its four references down a **staircase grid** (+6rem per column); craft and atelier both use **sticky split columns** where editorial text holds still while imagery scrolls past (or vice versa); a 70vh **break frame** — one image, one tracked line — resets the breath between chapters; and the footer signs off with a viewport-wide wordmark. Crucially, **nothing reveals on scroll**: every element is visible the moment it paints. Motion exists in exactly three places — the scrub, hovers (300/700ms on one quart ease), and a 42s marquee.

**Key Characteristics:**
- **Ink + bone + mist + one hairline value** — the entire palette; no accent hue exists anywhere.
- **Scroll-scrubbed hero** — 400vh sticky film, rAF lerp 0.085, typographic scrub, live tabular-figure readout.
- **Hairline architecture** — every border on the page is 1px `{colors.line}`; sections, meta rows, spec sheets, captions.
- **Bebas display / Helvetica micro** — condensed headlines over tracked uppercase labels; body text is rare and narrow.
- **Numbered chapters** — `01 — Manifesto` through `06 — Correspondence` as a mono eyebrow system.
- **Staircase + sticky layouts** — offset collection grid, pinned editorial columns, offset gallery rows.
- **No scroll-reveal** — content never hides; the page is calm on load and calm forever.
- **Zero radius, zero shadow** — depth comes from film, veils and hairlines, never from elevation.

## Colors

> Source: the `@theme` block — four tokens carry the whole site.

### Surface
- **Ink** ({colors.ink}): the only surface. Sections do not change background; chapters are separated by hairlines and whitespace, not tint shifts. The break section and hero darken via image + veil, not via new surface colors.

### Text
- **Bone** ({colors.bone}): headlines, values, prices, nav — and the `::selection` background (inverted: bone behind ink text).
- **Mist** ({colors.mist}): the secondary voice — eyebrows, card notes, spec keys, captions, address block. Mist is a real hex, not an alpha of bone: it stays warm where alpha would go grey.
- **Bone alphas** ({colors.bone-alphas}): reserved for the hero's instrument layer — readout /70, coordinates /40, scroll hint /50 — and the /90 footer wordmark.

### Line
- **Hairline** ({colors.line}): `rgba(237,234,227,0.14)` on every border via a single `.rule` utility. One value, everywhere — changing it retunes the whole page's contrast.

### Veils
- Hero film: `from-ink/55 via-transparent to-ink/80` vertical gradient — darkest at the bottom where the wordmark sits. Break image: flat `ink/30`. Veils protect type; they never carry color.

### Accent
- None. The brief forbids purple/indigo/saturated accents outright; warmth comes from the film's gold tones and the cream cast of bone/mist.

## Typography

### Font Families

- **Bebas Neue** (Google Fonts, single weight) — the display voice. All-caps by design; sizes do the talking, from `text-2xl` marquee items to `text-[18vw]` in the footer.
- **Helvetica Neue / Helvetica / Arial** — body paragraphs at `text-sm leading-relaxed`.
- **The "mono" role** — same Helvetica stack plus `font-variant-numeric: tabular-nums`, applied via a `.font-mono` utility. It isn't a monospace face; it's a *convention* (10–11px, uppercase, tracked) with tabular figures where numbers move — mandatory on the chronograph readout, which re-renders every frame and must not jitter.

### Hierarchy

| Token | Size | Case/Tracking | Use |
|---|---|---|---|
| hero wordmark | `text-[16vw]` → `md:text-[13vw]`, leading-none | letterSpacing animated 0.08→0.43em | HALAND over the film |
| footer wordmark | `text-[18vw]` → `md:text-[15vw]`, leading-[0.85] | 0.12em | The sign-off |
| section H2 | text-5xl → md:text-7xl | Bebas natural | "Four movements." etc. |
| stat numerals | text-5xl → md:text-6xl | — | 92 / 120h / 1 · 88 |
| card name / craft entry | text-3xl / text-2xl | — | Meridian, Anglage… |
| body | text-sm, leading-relaxed | max-w 26–52ch | Notes, manifesto captions |
| eyebrow | 11px | uppercase 0.25em, mist | `01 — Manifesto` |
| spec key / caption / legal | 10px | uppercase 0.22em, mist | Sheet keys, gallery captions |
| readout | 11px | 0.25em, tabular-nums | `T+00:SS.CC` |

### Principles

- **Display never explains, labels never decorate.** Bebas carries emotion at size; the mono register carries data at 10–11px. Body text exists only where a sentence is genuinely needed.
- **Tabular figures wherever numbers change or align** — the readout, prices, spec values.
- **Foreign strings are part of the voice**: `Pièce Maîtresse`, `Genève`, `Équation`, `É-01`, `−1/+2 s/day` — reproduce the diacritics and the true minus sign exactly.

### Note on Font Substitutes

Bebas Neue loads from Google Fonts — one family, one `<link>`. Helvetica Neue is the assumed system face with Helvetica/Arial fallbacks; do not load a webfont to imitate it. "A condensed sans" is not Bebas Neue.

## Layout

### Spacing System

- One **section shell** rules them all: `border-b rule px-6 py-28 md:px-10 md:py-40`. Chapters differ inside the shell, never around it.
- Eyebrow rhythm: `mb-6` under the number, then 56–80px (`mb-14`/`mb-20`) before the content proper.
- Vertical grids breathe at `gap-y-16/20`; horizontal at `gap-x-8`.
- The hero owns no padding — its children pin absolutely to the sticky viewport (`left/right-6 md:10`, `top-20`, `bottom-[16vh]`).

### Grid & Container

- No max-width container: content spans the viewport minus the shell padding. Wide text is prevented by per-element `max-w-[Nch]` caps instead of a global wrapper.
- **Staircase**: `md:grid-cols-4` with `md:mt-0/24/48/72` per card — the row reads as a descending arpeggio. Gallery does the two-column version: every odd figure `md:mt-32`.
- **Sticky splits**: Craft = `md:grid-cols-2`, left column `md:sticky md:top-0 md:h-screen`; Featured = `md:grid-cols-5` (3 text / 2 media), the *media* side sticky this time. The alternation — text pinned, then media pinned — keeps the long page from feeling templated.

### Whitespace Philosophy

`py-40` sections and 6rem staircase offsets make emptiness the luxury cue. Where a normal store would add a product card's worth of UI, HALAND adds nothing and lets the hairline hold the edge. If a section feels sparse, it is working.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat ink | Everything |
| film | object-cover media under a tonal veil | Hero, break |
| line | 1px `{colors.line}` | All structure |
| blend | `mix-blend-difference` | The nav, inverting over any surface |

No shadows, no radius, no layered surfaces — flatness is the brand. The nav achieves "float" optically: `mix-blend-difference` keeps bone text legible over film, watermark and ink alike without a background bar.

## Shapes

### Border Radius Scale

None. `{rounded.none}` — every frame, button and image is hard-cornered. The bordered Enquire/Request buttons are rectangles that invert (`hover:bg-bone hover:text-ink`); rounding anything on this page breaks the letterpress read.

### Iconography

None. `LAYER 10` is explicit: hierarchy is carried by type, hairlines and numerals — no arrows, chevrons or social glyphs. The scroll hint is a 1px × 32px line, not an icon.

## Components

### Nav ({components.nav})

`fixed inset-x-0 top-0 z-50 mix-blend-difference` — wordmark tracked .35em, four `u-link` labels (hidden below md), and the bordered **Enquire** button. The difference blend is the whole trick: one nav works over every frame of the film.

### Hero ({components.hero})

The 400vh section wraps a `sticky top-0 h-screen overflow-hidden` stage — CSS sticky does the pinning, GSAP never pins. Layers: film (`muted playsInline preload="auto"`, **never autoplaying**), veil, wordmark block at `bottom-[16vh]`, the late caption in the same anchor, readout top-right, coordinates top-left (`46°14′N 6°02′E — Genève`), scroll hint bottom-center. On `loadedmetadata` the video seeks to `0.001` to force-decode frame one.

### Scrub engine ({motion.hero-scrub})

Two moving parts, deliberately decoupled: ScrollTrigger writes `target = self.progress`; the rAF loop eases `current` toward it at 0.085 and sets `currentTime` only while the delta exceeds 0.0001. Direct `currentTime = progress × duration` from the scroll handler is the classic mistake — it steps at frame boundaries and stutters under Lenis. The lerp *is* the deliverable.

### Section shell ({components.section-shell})

Eyebrow (`01 — Manifesto` → `06 — Correspondence`), Bebas H2, content, hairline bottom. New sections must join the numbering — the sequence is a design element.

### Slot frame ({components.slot-frame})

Every image and looping video sits in `.slot-frame` (overflow-hidden) with the media as `.slot-inner` — object-cover, absolute-filled, scaling to 1.035 over 700ms on hover. Aspect ratios are per-use: 3/4 collection, 4/5 craft, 1/1 macro loop, 4/3 gallery.

### Staircase card ({components.staircase-grid})

Image → hairline meta row (index left, line right, both 10px mist) → Bebas name → mist note → price + **Reserve** u-link. The card has no border, no background — the hairline row is its entire chrome.

### Spec sheet ({components.spec-sheet})

Ten `border-t rule py-3` rows, key mono-mist left, value `text-sm` right — engineering data typeset like a dial. It is the page's densest moment and still uses only two type styles.

### Break ({components.break})

`h-[70vh]` full-bleed image + `ink/30` wash + one Bebas line (`WHAT THE LIGHT KEEPS`, tracked 0.15em) pinned `bottom-12`. A pause, not a section — it carries no eyebrow and no number.

### Footer ({components.footer})

Chapter `06 — Correspondence`: three columns (heading, address with the one bone `u-link` email, link list), then the hairline, then HALAND at 18vw/15vw, then the 10px legal row (`© 2026 Haland Watch SA · Manufacture d'Horlogerie — Genève · Est. 1949`).

## Do's and Don'ts

### Do

- Keep the scrub lerp at **0.085** and Lenis at **0.09** — the pair defines the site's viscosity.
- Encode any replacement hero footage all-intra (`-g 1 -keyint_min 1`) or seeking will stutter.
- Route every border through `.rule`; add hairlines, never solid dividers.
- Keep `tabular-nums` on the readout, prices and spec values.
- Keep the veil gradient under the wordmark — bone at 16vw needs the ink/80 floor.
- Alternate sticky sides (text pinned in Craft, media pinned in Featured) when adding chapters.
- Reproduce foreign strings and symbols exactly: `Équation`, `Genève`, `−1/+2 s/day`, `É-01`, `46°14′N 6°02′E`.

### Don't

- Don't set `currentTime` directly from scroll events, autoplay the hero, or add play controls — scroll is the only transport.
- Don't add scroll-reveal, fade-in-on-view, or entrance animations of any kind. The calm is the design.
- Don't introduce an accent color, a border radius, or a shadow anywhere.
- Don't swap the mono role for an actual monospace font — it's Helvetica with tabular figures, tracked uppercase.
- Don't wrap sections in a max-width container; cap line length per element with `max-w-[Nch]`.
- Don't skip the `0.001` first-frame seek — an undecoded first frame flashes black under the sticky stage.
- Don't let the marquee be the model for other motion; it is the page's one ambient animation.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <768px | Nav center links hide; grids stack to one column; staircase offsets and sticky columns deactivate; wordmarks at 16vw/18vw; shell `px-6 py-28` |
| md | ≥768px | Row grids, staircase steps, sticky columns engage; wordmarks 13vw/15vw; shell `px-10 py-40` |

### Fluid Strategy

- Both wordmarks are vw-sized — they scale continuously and never wrap. The break stays `h-[70vh]` at all widths.
- `overflow-x: clip` on body; the marquee is the only horizontal overflow and it clips inside its own section.

### Touch Targets

- Enquire / Request a viewing are bordered blocks ≥40px tall; Reserve and footer links are text targets backed by generous line-height. The hero needs no targets — scroll is the interaction.

### Media Behavior

- Hero: `muted playsInline preload="auto"`, scrubbed only. Macro and exploded loops: `autoPlay loop muted playsInline` inside slot frames. All images `loading="lazy"` with descriptive `alt`.
- Reduced motion: the global CSS guard zeroes marquee and hover transitions; the scrub remains user-driven (scroll position = film position, no autonomous motion to suppress).

## Iteration Guide

1. New chapters take the next eyebrow number and the section shell; renumber nothing.
2. New collection pieces extend the staircase pattern (`md:mt-96` would be the fifth step) — or start a second staircase row rather than flattening the grid.
3. Replacement hero footage: ~3s, product-centered, tonal range that survives the ink/55→ink/80 veil; re-encode all-intra and test the readout against the new duration.
4. Keep new media inside `.slot-frame` so the 1.035 hover zoom stays universal.
5. Prices/data follow the spec-sheet pattern: mono key, `text-sm` value, hairline row. Never a table with visible cells.
6. A real commerce flow should live behind Reserve/Enquire on separate pages — this page stays a catalogue; adding cart chrome here breaks the "by appointment only" positioning.
7. If the palette must expand (a second collection line), tint *bone*, never ink — e.g. a cooler `#e8ebe3` text set — and keep the hairline value untouched.

## Known Gaps

- All links are anchors or `href="#"` — Reserve, Enquire, Instagram, Journal etc. lead nowhere yet.
- The build carries a dormant `Slot` placeholder branch (green `--color-slot: #21c063` + label) from the imagery workflow; with all `src` supplied it never renders. Adopt or strip deliberately.
- No form exists — "Enquire" implies email only (`atelier@halandwatch.com`).
- The scrub assumes a pointer/scroll input; there is no keyboard affordance to drive the hero timeline besides page scroll itself.
- The hero film is ~4MB and `preload="auto"` — on slow connections the first scroll may outrun the buffer; a poster frame or range-request tuning would harden it.
- Focus-visible styling beyond browser defaults is absent.
