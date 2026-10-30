---
version: "1"
name: "Canbe — Editorial Lookbook Landing"
description: "A single-page editorial lookbook for Canbe, a studio-led ready-to-wear label that dresses the road and the city. Warm cream canvas (#efeee9), near-black ink (#0a0a0a), floating black pill chrome bars top and bottom, twelve portrait model videos in one horizontal row, a quiet Three.js noise field behind everything, and a Web Animations API FLIP that lifts a tile into a lightbox. No accent color anywhere — the entire site lives on the cream → black axis."
colors:
  bg: "#efeee9"
  bg-inner: "#ffffff"
  bg-info: "#fcfbf7"
  fg: "#0a0a0a"
  muted: "#b2b2b2"
  divider: "#e6e6e6"
  hover: "#666666"
  accent: "#3a3a3a (charcoal — monochrome only, NOT a brand color)"
  pill-bg: "#0a0a0a"
  pill-hover-bg: "#1a1a1a"
  pill-secondary: "#8a8a8a / #6a6a6a"
  shop-hover: "#2a2a2a"
typography:
  display:
    fontFamily: "Orbitron"
    weights: "400 / 500 / 600 / 700 / 800 / 900"
    role: "CANBE wordmark, giant COLLECTION headline (900), Look titles (h2 800), Total look value (800)"
  body:
    fontFamily: "IBM Plex Mono"
    weights: "300 / 400 / 500 / 600 / 700"
    role: "nav labels, counters, eyebrow, item rows, DISCOVER CTA, prev/next labels, all uppercase chips"
spacing:
  base: "fluid-rem (1rem === 1px at the 1440px desktop / 393px mobile reference viewport)"
  grid: "12-column desktop / 8-column mobile, --grid-margin 40rem→16rem, --grid-gutter 16rem→10rem"
  bar: "--bar-h 28rem desktop / 32rem mobile, --bar-margin 12rem / 8rem"
rounded:
  outer: "14rem (pill bars + info panel + stage)"
  inner: "10rem (tiles)"
  pill: "999rem (chips, close button, nav arrow)"
components:
  pill-chrome: "Five black pill bars (Header left, Header right, page BottomBar, modal TopBar, modal BottomBar) sharing one dark token — #0a0a0a fill, white text, 14rem radius, layered drop shadow"
  fluid-rem: "useFluidRem hook sets --rem on :root each resize so html { font-size: var(--rem) } scales the entire layout in proportion, never broken, never stretched"
  webgl-noise-field: "Vanilla three.js orthographic plane + RawShaderMaterial — soft radial wash + velocity-reactive vignette + hashed fine grain at opacity 0.45, fixed z-index 1 behind the DOM"
  char-mask-reveal: ".charBox overflow:hidden + .char translateY(110%→0) staggered 45ms per character — used on the giant COLLECTION headline"
  flip-stage: "Web Animations API element.animate() with 3 keyframes (origin rect → 78% overshoot scale 1.05 → settle 1.0) lifts the clicked tile into the lightbox stage in 950ms"
  has-spotlight: "CSS-only :has(.tile:hover) dims and shrinks the non-hovered tiles in the 12-tile row; zero re-render cost"
  custom-cursor: "Two-layer dot + ring with mix-blend-mode: difference, ring lerps at 0.18, scales 2.4 on interactive hover, shrinks 0.7 on press, auto-disabled on coarse pointer"
---

# Canbe — Editorial Lookbook Landing

> Fivefold showcase. Pairs with the Canbe prompt. Keep this file beside future Canbe drops so the lookbook stays a lookbook — cream canvas, black pills, monochrome end-to-end, never a fashion-tech catalog.

## Overview

Canbe is a single-page editorial lookbook for a studio-led ready-to-wear label that designs objects to travel between the road and the city. Warm cream canvas, near-black ink, floating black pill chrome bars, twelve portrait model videos in one horizontal row, and a quiet WebGL noise field behind everything. There is no orange, no red, no blue, no accent. The entire visual system lives on the cream → black axis, and every dimension on the page is written in `rem` units recalculated each resize so the layout scales in proportion to the viewport.

The governing decision: **a lookbook, not a shop.** Most fashion landings reach for editorial hero crops, brand-color CTAs, and grid-of-products thumbnails. Canbe refuses all three. The page never shows a product photo at rest — every tile is a moving model in portrait. The chrome floats above the canvas as two black pills (top) and one black pill (bottom), so the cream surface reads as paper and the chrome reads as caption stickers laid on top of it. The signature interaction is not a hover badge or a buy button: it is a FLIP transition that visually lifts the clicked tile out of the row and grows it into a lightbox with a 78% overshoot pop. The bet: editorial restraint plus one theatrical interaction beats ten loud ones.

The system extends consistently across every surface. The same dark pill token paints the header pills, the page footer pill, and both pills inside the lightbox modal. The same Orbitron-plus-IBM-Plex-Mono pairing carries from the wordmark down to the SKU references. The same fluid-rem primitive scales chrome, tiles, type, and motion together — so a Canbe spread on a 14-inch laptop looks like a Canbe spread on a 6.1-inch phone, just smaller. Drops that follow this file should add looks and swap videos, never invent colors or alternate type roles.

**Key Characteristics:**
- Warm cream canvas (`{colors.bg}`) plus near-black ink (`{colors.fg}`) — never pure white, never pure black, never a hue.
- No brand color. `{colors.accent}` (`#3a3a3a`) is a charcoal hover, not a tone. Any saturated value breaks the brief.
- Orbitron for the wordmark, the giant `COLLECTION` headline, and Look titles; IBM Plex Mono for every label, counter, ref, and CTA.
- Fluid-rem scaling: `html { font-size: var(--rem) }` recomputes each resize so the layout never stretches or breaks.
- Five floating black pill chrome bars share one dark token; the cream shows through every gap between them.
- Three.js noise field at fixed `z-index: 1`, vanilla `three`, opacity 0.45 — alive without being decorated.
- Twelve portrait videos in a single row with monochrome `:has()` spotlight on hover and IntersectionObserver playback gating.
- One theatrical beat: a Web Animations API FLIP with three keyframes and a 78% overshoot pop.

## Colors

> **Source pages analyzed:** Header (left + right pills), Collection headline, Figure grid (12 tiles), Bottom bar, Product detail modal (top bar, info panel, stage, bottom bar) — describing the entire single-page lookbook surface.

A near-monochrome system built around cream and ink. Greys exist only to support hairlines, muted labels, and the secondary numerics inside the dark pills.

### Surface

- **Page canvas** (`{colors.bg}` — `#efeee9`): the warm cream background. Reads as paper, never as screen. Set on `body` and as the renderer clear color of the WebGL noise field so the shader and the DOM dissolve into a single surface.
- **Inner surface** (`{colors.bg-inner}` — `#ffffff`): nested card surface reserved for stark white containers.
- **Info panel surface** (`{colors.bg-info}` — `#fcfbf7`): the modal's left info panel sits on a near-white warm tone, half a step lighter than the page so it reads as a paper card laid on cream.

### Ink & Text

- **Foreground** (`{colors.fg}` — `#0a0a0a`): primary text, ink, and the fill of every chrome pill. Slightly softer than absolute black, intentional.
- **Muted** (`{colors.muted}` — `#b2b2b2`): secondary text on cream — slot labels, references, eyebrows on the info panel.
- **Hover** (`{colors.hover}` — `#666666`): text hover state for links sitting on the cream canvas.
- **Pill secondary** (`{colors.pill-secondary}` — `#8a8a8a` / `#6a6a6a`): numbers, slashes, kickers, and disabled CTA text inside the dark pills.

### Hairlines & Borders

- **Divider** (`{colors.divider}` — `#e6e6e6`): 1rem hairline between item rows in the info panel.
- **Pill internal hairline** (`#2a2a2a`): the structural rule inside the BottomBar pill — flex-spacer painted at `1rem` height.

### Accent (not a hue)

- **Charcoal accent** (`{colors.accent}` — `#3a3a3a`): reserved for darker hover states on cream. Hard rule — if it ever turns saturated, the brief is broken.
- **Shop look hover** (`{colors.shop-hover}` — `#2a2a2a`): the deeper charcoal hover on the primary modal CTA. Never red, never orange.
- **Pill hover bg** (`{colors.pill-hover-bg}` — `#1a1a1a`): hover background on nested buttons inside pills (navBtn).

## Typography

### Font Family

- **Display** — `"Orbitron", "Eurostile", "Helvetica Neue", Arial, sans-serif`. Geometric futuristic.
- **Body / Mono** — `"IBM Plex Mono", ui-monospace, "SF Mono", Menlo, monospace`. Technical monospace doubles as the body face.
- **OpenType features**: `tabular-nums` is mandatory wherever a number sits next to type (nav counters, eyebrow `01 / 01`, item refs, Total look value, modal counter).

There is no serif. There is no second mono — IBM Plex Mono fills both the body and the mono role. Two families, two roles, no exceptions.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `display.wordmark` | 17rem | 900 (Orbitron) | 1.0 | 0.04em | `CANBE` brand wordmark in the left pill |
| `display.collection` | clamp(72rem, 11vw, 196rem) | 900 (Orbitron) | 0.95 | -0.01em | Giant `COLLECTION` headline (char-mask reveal) |
| `display.look-title` | clamp(28rem, 2.4vw, 38rem) | 800 (Orbitron) | 1.0 | -0.01em | Modal `<h2>` Look title (e.g. `Look 01 — Northwind`) |
| `display.total` | 22rem | 800 (Orbitron) | 1.0 | normal | Modal `Total look` value, tabular-nums |
| `body.eyebrow` | 11rem | 700 (Plex Mono) | 1.0 | 0.16em | `COLLECTION 01 / 01` eyebrow above the headline |
| `body.nav-label` | 10rem | 700 (Plex Mono) | 1.0 | 0.12em | Uppercase nav labels (`ALL`, `STORIES`, `CART`) |
| `body.kicker` | 10rem | 700 (Plex Mono) | 1.0 | 0.20em | Modal TopBar `Look detail` kicker |
| `body.item-name` | 13rem | 600 (Plex Mono) | 1.2 | normal | Item name inside the info panel rows |
| `body.item-ref` | 10rem | 500 (Plex Mono) | 1.0 | 0.08em | Item SKU reference (`OW-01`), tabular-nums |
| `body.item-slot` | 9rem | 700 (Plex Mono) | 1.0 | 0.16em | Item slot label (`OUTER`, `MID`, `BOTTOM`) |
| `body.body` | 13rem | 400 (Plex Mono) | 1.45 | normal | Default body / hint text |
| `body.hint` | 10rem | 600 (Plex Mono) | 1.0 | 0.16em | Modal BottomBar keyboard hint |

### Principles

- Two families only. Orbitron is reserved for four roles (wordmark, headline, Look title, Total value) — nothing else gets it.
- Display sits at negative tracking (-0.01em) at large sizes; body sits at positive tracking (0.04em → 0.20em) at small sizes. The further apart, the better the geometric vs technical tension.
- Every numeric uses `font-variant-numeric: tabular-nums` so columns align without measuring.
- The headline never animates as a single block — it always uses `splitChars()` and the `.charBox` mask so each character resolves on its own beat.
- IBM Plex Mono carries body weight at 400 and emphasis at 600/700. Weight 500 is deliberately absent from text — it only appears as muted numeric (`#8a8a8a`) inside pills.
- Letter-spacing scales with role, not size: 0.20em on the kicker, 0.16em on the eyebrow, 0.14em on labels, 0.12em on nav. Never less than 0.08em on uppercase mono.

### Note on Font Substitutes

If Orbitron is unavailable, fall back to Eurostile or a tight geometric sans — but Canbe explicitly disallows "geometric futuristic similar to Orbitron" in the brief, so substitution is a last resort. If Plex Mono is unavailable, ui-monospace or SF Mono will hold, but tighten tracking by 0.02em on uppercase chips to compensate for the wider monospace metrics. The char-mask animation must still play on the FOUT/FOIT fallback — never block the entry on font load.

## Layout

### Spacing System

- **Base unit**: `1rem === 1px at the reference viewport` (1440px desktop, 393px mobile). All other values are integer rem.
- **Bar margin**: `--bar-margin: 12rem` desktop / `8rem` mobile. Distance from header/footer pill to the page edge.
- **Bar height**: `--bar-h: 28rem` desktop / `32rem` mobile.
- **Grid margin**: `--grid-margin: 40rem` desktop / `16rem` mobile.
- **Grid gutter**: `--grid-gutter: 16rem` desktop / `10rem` mobile.
- **Tile gap**: `6rem` between the 12 cells in the figure grid.
- **Section padding**: `80rem var(--grid-margin) 0` on the headline section; `60rem 20rem 40rem` on the figure grid outer.
- **Info panel padding**: `28rem 28rem 24rem`. Item row padding: `14rem 0`.

### Grid & Container

- **Desktop grid**: 12 columns, `--grid-cols: 12`. Column width is derived: `(vw − (cols−1) × gutter − 2 × margin) / cols`.
- **Mobile grid**: 8 columns, single 768px breakpoint redefines the token block on `:root`.
- **Tile row**: twelve flex cells, each `flex: 0 0 calc((100% - 11 × 6rem) / 12)`, `aspect-ratio: 3/5`. On `<=768px` the row becomes horizontally scrollable (`overflow-x: auto`) with a `min-width: 800rem` so proportions hold.
- **Modal body**: CSS grid `1fr auto`, gap `var(--bar-margin)`. Info panel takes the `1fr`; stage sizes to its 4/5 aspect-ratio and centers in the right column.
- **Page root**: `padding-top: calc(var(--bar-margin) × 2 + var(--header-h))`, `padding-bottom: calc(var(--bar-margin) × 2 + 44rem)` so the floating chrome never overlaps content.

### Whitespace Philosophy

The cream is the loudest element on the page. The pills float at `var(--bar-margin)` from every edge, leaving a visible band of cream between chrome and content; the headline sits 80rem below the header with nothing else competing; the 12-tile row stretches edge to edge but each cell breathes inside its own 3/5 portrait frame. Whitespace is treated as paper — not as filler — and the WebGL grain at 0.45 opacity is what keeps the negative space alive without putting decoration into it.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, lives on cream | Page sections, eyebrow, headline, item rows |
| Soft pill shadow | `0 1rem 0 rgba(0,0,0,0.04), 0 6rem 24rem rgba(20,20,20,0.04)` | Default pill chrome on cream |
| Layered pill drop | `0 2rem 0 rgba(0,0,0,0.08), 0 10rem 30rem rgba(0,0,0,0.18)` | Header pills, BottomBar pill, modal TopBar/BottomBar |
| Tile lift shadow | `0 22rem 50rem rgba(0,0,0,0.28)` | Active hovered tile only (z-index 5) |

Shadow philosophy: chrome casts a soft drop because it is a sticker floating above the cream; tiles cast nothing at rest because they are part of the editorial row; only the hovered tile rises with a single elevated shadow to signal it has been picked up. The info panel inside the modal carries the same `0 10rem 30rem rgba(0,0,0,0.18)` so the entire modal frame reads as a coherent floating object.

**Decorative Depth**
- WebGL noise field at fixed `z-index: 1`, opacity 0.45 — the only ambient texture on the page.
- Velocity-reactive vignette inside the shader fires only during fast scroll; static state is pure radial wash.
- Hashed fine grain at `± 0.018` luminance keeps the cream from banding on any display.
- Backdrop blur 14px on the modal backdrop, plus an 8px blur on the per-tile index chip background.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `radius.none` | 0 | Hairlines, structural dividers |
| `radius.chip-inner` | 8rem | Right-pill thumbnail video frame |
| `radius.inner` | 10rem | Figure grid tile, modal action button (12rem alt) |
| `radius.action` | 12rem | Shop look / Save buttons in modal |
| `radius.outer` | 14rem | All five pill chrome bars, info panel, stage |
| `radius.pill` | 999rem | Index chip, modal close button |

### Photography Geometry

- **Tile aspect**: `3 / 5` portrait, fixed on every breakpoint. The row never collapses to a square or 4/5 — that would break the editorial vertical rhythm.
- **Source spec**: H.264 MP4, 1288 × 1608 portrait, ~24 fps, ~4–5MB each, ~6s loop. Twelve files, `model-01.mp4` → `model-12.mp4`.
- **Stage `object-fit`**: `contain` only. The modal stage uses 4/5 aspect so the 1288 × 1608 source fits without crop — `cover` would cut the model's head or feet.
- **Right-pill thumbnail**: hard-coded to `model-03.mp4` (Ember), 28rem square, `filter: saturate(0.85) contrast(1.05)`. Never rotates.
- **Tile filter**: default `saturate(0.92) contrast(1.03)`; indices `{1, 4, 6, 8, 11}` get `.cellAccent` → `saturate(0.6) contrast(1.05) brightness(0.95)` for monochrome rhythm.
- **Playback gating**: single `IntersectionObserver` with `threshold: 0.1` plays on enter, pauses on exit. Keeps memory under 60MB on a typical desktop.

## Components

### Top Navigation

- **Left header pill** — `{component.header-left}`. Position fixed top-left, fill `{colors.fg}` (`#0a0a0a`), text `#ffffff`, `border-radius: 14rem`, padding `10rem 14rem`, min-width `320rem`. Two rows: brand wordmark (Orbitron 900 17rem, 0.04em uppercase) then nav counter row (`All 27 · Stories 04 · spacer · Cart 00`). Default: `pillDown 0.55s` from translateY `-60rem`. Focus: visible white ring inherited from chrome.
- **Right header pill** — `{component.header-right}`. Position fixed top-right, same dark token. Height `38rem`, padding `0 6rem 0 14rem`, gap `10rem`. Contains `Collection` label, `01 / 01` counter, and a 28rem square video thumbnail (border `1rem solid #262626`, radius `8rem`). Default: `pillDown 0.55s` with 0.16s delay (cascades after left pill).

### Buttons

- **Discover CTA** — `{component.button-primary}`. Lives inside the BottomBar pill. Default (disarmed): text `#6a6a6a`, `cursor: not-allowed`, `aria-disabled`. Active (`.ctaArmed`, fires when scroll progress > 0.04): text `#ffffff`, cursor normal, arrow `transform: translateX(4rem)` on container hover, padding shifts to `8rem 6rem 8rem 0`. Focus: inherits white ring against pill bg.
- **Shop look** — `{component.button-action-primary}`. Modal action. Filled `{colors.fg}` background, white text, border `1rem solid {colors.fg}`, height `42rem`, radius `12rem`, font 11rem 700 uppercase 0.14em. Active: background `{colors.shop-hover}` (`#2a2a2a`), border `#2a2a2a` — never a hue. Focus: 2rem outline in `{colors.fg}`.
- **Save** — `{component.button-action-secondary}`. Transparent background, `{colors.fg}` text and border, same 42rem × 12rem proportions. Active: inverts to filled `{colors.fg}` with white text. Focus: same outline as primary.
- **Modal close button** — `{component.button-utility}`. Inside modal TopBar. Background `{colors.pill-hover-bg}` (`#1a1a1a`), white text, radius `999rem`, height `28rem`, padding `0 12rem`, gap `8rem`. Active: background `#ffffff`, text `{colors.fg}` — white invert, never a hue.
- **Modal nav buttons (Previous / Next look)** — `{component.button-nav}`. Inside modal BottomBar. Transparent background, white text, inline-flex gap `10rem`. Active: background `{colors.pill-hover-bg}`, arrow `scale(1.2)`.

### Cards & Containers

- **Tile** — `{component.card-tile}`. Default: `aspect-ratio: 3/5`, `border-radius: 10rem`, `overflow: hidden`, background `{colors.fg}`, soft shadow `0 2rem 8rem rgba(0,0,0,0.06)`. Children: `<video>` covering the cell, hidden `.index` chip (top-left, blur 8px), hidden `.name` label (bottom-left, Orbitron 700). Active (hovered): `translateY(-14rem) scale(1.04)`, shadow lifts to `0 22rem 50rem rgba(0,0,0,0.28)`, video filter `saturate(1.15) contrast(1.06)`, `.index` + `.name` reveal. Sibling state via `:has()`: non-hovered tiles dim to `opacity 0.65`, scale `0.96`, filter `grayscale(1) brightness(0.7)`.
- **Tile active (modal open)** — `{component.card-tile-active}`. Receives `.tileActive` → `opacity: 0; pointer-events: none`. Disappears from the row while the FLIP stage occupies its visual position.
- **Info panel** — `{component.card-info}`. Modal left column. Background `{colors.bg-info}` (`#fcfbf7`), radius `14rem`, padding `28rem 28rem 24rem`, shadow `0 10rem 30rem rgba(0,0,0,0.18)`. Flex column gap `22rem`. Default: opacity 0, translateX `-60rem`, animates `infoIn 0.28s` at 0.34s delay.
- **Stage** — `{component.card-stage}`. Modal right column. Position relative, `aspect-ratio: 4/5`, radius `14rem`, overflow hidden, background `{colors.fg}`. No CSS transition on transform — the Web Animations API FLIP owns motion. Contains an autoplaying muted looped video with `object-fit: contain`.

### Inputs & Forms

- **Item row** — `{component.input-row}`. Treated as a structural row inside the info panel `<ul className="itemList">`. Grid `70rem 1fr auto`, gap `14rem`, padding `14rem 0`, hairline `1rem solid {colors.divider}`. Three children: slot label (`{colors.muted}` 9rem 700 uppercase 0.16em), main column (item name 13rem 600 + ref 10rem `{colors.muted}` tabular-nums), price (13rem 700 tabular-nums). Active state (row hover): background `rgba(0, 0, 0, 0.04)` — neutral, never tinted. Focus state: 1rem inset outline in `{colors.fg}` when keyboard-selected.

### Footer

- **BottomBar pill** — `{component.footer}`. Position fixed bottom, `var(--bar-margin)` from every edge. Single dark pill, height `44rem`, min-width `380rem`, gap `14rem`. Layout: `12 · Products` label group, flex divider (`1rem` height, `#2a2a2a`), `Discover →` CTA. Default: opacity 0, translateY `60rem`, animates `pillUp 0.6s` at 0.4s delay. Focus: the inner CTA inherits the same focus ring as buttons; the pill itself is non-focusable.
- **Modal BottomBar pill** — `{component.footer-modal}`. Same dark token, same `44rem` height, same shadow. Three children: `Previous` nav button, keyboard hint (`Arrow keys to navigate · Esc to close`, 10rem 600 `#6a6a6a` 0.16em), `Next look` nav button. Entrance: `bottomIn 0.24s` at 0.3s delay.

## Do's and Don'ts

### Do

- Use `{colors.bg}` (`#efeee9`) for every page surface and `{colors.fg}` (`#0a0a0a`) for every ink mark.
- Reserve Orbitron for the wordmark, the headline, the Look `<h2>`, and the Total value — nothing else.
- Apply `tabular-nums` everywhere a number sits next to type, including the eyebrow `01 / 01` and item refs.
- Keep all five pills on one shared dark token; vary only padding, height, and min-width.
- Set every dimensional value in `rem` so the fluid-rem hook can scale the layout in proportion.
- Use the `:has()` spotlight on the figure grid; it is zero-cost compared with JS-driven `mouseenter` per tile.
- Run the FLIP open via Web Animations API with three keyframes (origin → 78% overshoot → settle).
- Call `entry.commitStyles()` before `entry.cancel()` in `handleClose` so the close transition reads the live state.
- Render the WebGL noise field with vanilla three at opacity 0.45 and `pointer-events: none`.
- Honor `prefers-reduced-motion`: snap the char-mask, collapse the overshoot, freeze the shader velocity to 0.

### Don't

- Don't introduce a brand color. `{colors.accent}` is `#3a3a3a` charcoal — if it ever turns saturated, the brief is broken.
- Don't replace `{colors.fg}` with `#000000` or `{colors.bg}` with `#ffffff`. Both are intentionally off-pure.
- Don't substitute Orbitron with a "geometric futuristic similar" face — the brief disallows it.
- Don't replace the shader with a static gradient; the velocity-reactive vignette is the signature on scroll.
- Don't swap the Web Animations API FLIP for a CSS transition — the 78% overshoot pop will not survive.
- Don't `object-fit: cover` the modal stage; the 4/5 aspect plus `contain` is what keeps the model end-to-end.
- Don't add Tailwind, GSAP, Lenis, Framer Motion, or `@react-three/fiber` — Canbe is intentionally library-free for motion.
- Don't transform-wrap the page for "smooth scroll"; native scroll plus RAF lerp subscribers is mandatory so `position: fixed` chrome behaves.
- Don't pad SKU codes (`OW-12`, never `OW-012`, never `ow12`).
- Don't document hover states in extensions of this file — only default, active, and focus.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤419px | `--rem = vw / 393`; pills stack vertically; tile row min-width 800rem scroll |
| Phone | 420–640px | Same mobile token block; headline still clamp-floors at 72rem |
| Large phone | 641–735px | Mobile grid (8 cols) holds; modal body collapses to single column |
| Tablet portrait | 736–833px | At 768px breakpoint: tokens swap to desktop set, pills go horizontal |
| Tablet landscape | 834–1023px | Desktop grid (12 cols) active; modal grid stays single column below 980px |
| Small desktop | 1024–1068px | Desktop grid in full; tile row sits edge-to-edge with `var(--grid-margin)` |
| Desktop | 1069–1440px | Reference viewport — `--rem ≈ 1px`; all spec values resolve as written |
| Wide desktop | ≥1441px | `--rem > 1px`; headline rides up to its 196rem clamp ceiling |

### Touch Targets

- Minimum tap area is `44rem` square (BottomBar pill height; modal CTA pair sits at `42rem` because they pair with the surrounding `var(--bar-margin)` and exceed 44rem effective).
- The 28rem close button inside the modal TopBar increases its hit area via padding (`0 12rem`) — the visual is `28 × 60rem+`, well above 44px on mobile.
- Tile tap targets are the full 3/5 cell — minimum width is ~80rem on small phones, which exceeds the 44rem rule.

### Collapsing Strategy

- **Header**: at ≤768px the left/right pills column-stack via `flex-direction: column`; `--bar-h` rises to `32rem` and `--header-h` becomes `bar-h * 3`.
- **Sub-nav (counters)**: stays inside the left pill — only label/number gap tightens via the `--rem` recalculation.
- **Figure grid**: the 12-tile row becomes horizontally scrollable (`overflow-x: auto`) with `min-width: 800rem`; the `:has()` spotlight still fires.
- **Modal body**: below 980px the grid swaps to `grid-template-columns: 1fr; grid-template-rows: auto 1fr`; info panel caps at `max-height: 40vh` and scrolls inside.
- **BottomBar**: stays full-width with `bar-margin: 8rem` on each edge; CTA never wraps because `min-width: 380rem` shrinks proportionally with `--rem`.
- **Hero typography**: the `COLLECTION` headline floors at `72rem` on the smallest viewport and ceilings at `196rem` via `clamp(72rem, 11vw, 196rem)`.

### Image Behavior

- No `srcset` — model videos are the imagery. Each tile loads a single `model-NN.mp4` with `preload="metadata"` so initial bytes stay low.
- `IntersectionObserver` with `threshold: 0.1` plays a video only when the tile is visible and pauses on exit.
- DPR clamped at 2 (`Math.min(window.devicePixelRatio || 1, 2)`) on the WebGL canvas — Retina sharp, mobile efficient.
- Modal stage video resets to `currentTime = 0` and calls `play()` on every prev/next via `useEffect([model.id])`.
- No lazy-loading library; native browser lazy behavior plus IO gating is the whole strategy.

## Iteration Guide

1. Focus extensions on a single component at a time — never edit pill chrome, info panel, and stage in the same drop.
2. Variants live inside the component file (e.g. `cellAccent` as a class modifier on `.tile`), not as separate components or token forks.
3. Reference colors and spacing as `{colors.tokenName}` and `var(--*)` only; never paste raw hex into a new component.
4. Never document hover. Only default, active, and focus are first-class states in Canbe's contract.
5. Display vs body: if a new role needs Orbitron, propose a tradeoff — what existing Orbitron role becomes IBM Plex Mono? The set is fixed at four.
6. Shadow restriction: only chrome and the hovered tile cast shadows. New surfaces inherit `flat` or borrow the layered pill drop — no new shadow tokens.
7. Chrome vs surface: when adding a new floating control, ask whether it is chrome (dark pill, `{colors.fg}`) or surface (cream/info, `{colors.bg}` / `{colors.bg-info}`). There is no third bucket.

## Known Gaps

- Validation, error, and empty states are not surfaced in analyzed pages — the lookbook has no forms beyond the FLIP modal.
- Dark mode is not defined; Canbe is single-theme by design (cream + ink), and a dark variant would require re-deriving the entire chrome strategy.
- Exact focus ring radii and offsets are not documented per component; assume a 2rem ring in `{colors.fg}` on cream and `#ffffff` on chrome until specified.
- The decorative WebGL canvas color triad (`uColorA / B / C`) is fixed in the prompt but no design rule covers how to tune it for future drops with different model palettes.
- Loading and skeleton states for the 12 videos are not specified beyond `preload="metadata"`; no placeholder still or shimmer behavior is defined.
- Internationalization is not addressed — every label is short uppercase English; longer translations may force the header pills to wrap at narrower breakpoints than documented.
