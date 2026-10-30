---
version: "1"
name: "OMMOD — Dark Instrument Panel (Dual-Theme)"
description: "A dark-first, product-grade instrument panel for an RWA oracle module. Near-black onyx canvas, a single graphite hairline carrying every border / divider / grid seam / stroke, cool-gray monochrome type in Inter + JetBrains Mono, and a draggable Three.js wireframe-wormhole hero. Ships a real light/dark theme toggle (clean palette inversion) and a rotating crypto-logo globe as its second signature."
colors:
  bg: "#08090a"               # onyx — canvas / the void everything floats on
  surface-1: "#0f1011"        # charcoal — header, card base, terminal/globe panels
  surface-2: "#161718"        # obsidian — deep cards, hover lift, floating chip
  surface-input: "#383b3f"    # steel — reserved filled-input surface
  bg-deep: "#0f1011"          # alias for raised-cell hover (dark)
  line: "#282c33"             # graphite — THE single hairline (every border/seam/stroke)
  border: "#282c33"           # alias of {colors.line} — no second line color, by rule
  text: "#f7f8f8"             # snow — primary text/icons + the white CTA fill
  mist: "#d0d6e0"             # tertiary text, lead voice, soft icon strokes
  muted: "#8a8f98"            # fog — secondary body, captions, nav at rest, metadata
  faint: "#62666d"            # slate — eyebrows, placeholders, line numbers, legal
  accent: "#e4f222"           # acid lime — favicon check + ::selection ONLY (rationed)
  on-accent: "#08090a"        # near-black text on lime (AAA)
  indigo: "#5e6ad2"           # decorative only — throat ring, <step> tags, focus, active node
  emerald: "#27a644"          # status — first terminal dot only (reserved otherwise)
  crimson: "#eb5757"          # reserved — error status (unused in shipped build)
  cyan: "#02b8cc"             # reserved — info status (unused in shipped build)
  scrollbar-bg: "#0f1011"     # scrollbar track (dark)
colors-light:
  bg: "#ffffff"               # light canvas (clean inversion)
  surface-1: "#f7f8f8"        # charcoal → near-white
  surface-2: "#eef0f2"        # obsidian → light gray
  surface-input: "#eef0f2"    # steel → light gray
  bg-deep: "#f1f2f4"          # raised-cell hover (light)
  line: "#e3e5e9"             # the single hairline, light value
  border: "#e3e5e9"           # alias of {colors-light.line}
  text: "#08090a"             # snow → onyx
  mist: "#3a3d42"             # tertiary text (light)
  muted: "#62666d"            # secondary text (light)
  faint: "#8a8f98"            # low-emphasis (light)
  scrollbar-bg: "#eef0f2"     # scrollbar track (light)
typography:
  display:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, \"Segoe UI\", Roboto, sans-serif"
    weights: "300 / 400 / 510 / 590"
    role: "display headlines (weight 300, negative tracking) + all body (weight 400) — one continuous voice"
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    weights: "400 / 500"
    role: "labels, eyebrows-as-mono, terminal, metadata, form labels, line numbers, legal row"
spacing:
  base: "4px"
  scale: "4 / 8 / 12 / 16 / 24 / 40 / 64 / 96 (--s-1…--s-8)"
  frame-inset: "16px — the gutter holding the .stack card off every screen edge"
  header-height: "64px"
  maxw: "1280px"
rounded:
  badge: "2px"      # tiny badges/chips
  btn: "6px"        # floating header bar, contained lime button, chip, inputs
  input: "6px"      # filled input surfaces
  card: "12px"      # the outer .stack main card
  pill: "9999px"    # ghost/outline buttons, scrollbar thumb
shadow:
  depth: "0px 5px 2px rgba(0,0,0,.01), 0px 3px 2px rgba(0,0,0,.04), 0px 1px 1px rgba(0,0,0,.07), 0px 0px 1px rgba(0,0,0,.08) — floating header + contained lime button"
  inset-border: "inset 0 0 0 1px var(--line) — the hairline as elevation"
  card: "rgba(0,0,0,0.4) 0 2px 4px, inset 0 0 0 1px var(--line) — raised card"
  sm: "rgba(0,0,0,0.4) 0 2px 4px — faint lift under the floating chip"
  xl: "rgba(8,9,10,0.6) 0 4px 32px — heaviest float, reserved"
components:
  bleed-hairline-grid: "The page primitive — container gap:1px + background {colors.line}; each .cell background {colors.bg}; the 1px gap reveals the graphite line beneath"
  btn-bar-primary: "Full-cell action bar with a snow ({colors.text}) fill + canvas-color ({colors.bg}) label — the white CTA, never colored"
  btn-lime: "Contained inline button — {colors.accent} lime fill, {colors.on-accent} text; forms/inline only, the single filled-color action"
  wormhole-hero: "Three.js wireframe hyperboloid portal — drag-to-orbit + inertia + hover-energize, {colors.indigo} throat ring, theme-aware, reduced-motion-safe"
  logo-globe: "Procedural inline-SVG Fibonacci sphere of 26 grayscale logos, 3-nearest-neighbour links, rotating network globe"
  terminal: "Mono fake-terminal block — status dots, line numbers, indigo <step> tags, snow keywords"
  theme-toggle: "Half-circle sun/moon SVG; toggles .light on <html>, persisted, no-flash"
---

# OMMOD — Dark Instrument Panel (Dual-Theme)

> Fivefold showcase. Pairs with the OMMOD prompt. Use this to keep pages you build *after* the landing — docs, dashboard, status, integration guides — feeling like one quiet, product-grade dark instrument panel ruled by a single hairline.

## Overview

OMMOD is a dark-first, product-grade instrument panel for a verifiable oracle module that puts real-world-asset data on-chain. The atmosphere is a restrained command deck, not a marketing splash — a near-black onyx canvas (`{colors.bg}` #08090a), a cool-gray monochrome type scale, and **exactly one line color** (`{colors.line}` #282c33) doing the work of every border, divider, grid seam, and motif stroke. The whole page reads as a single continuous ruled grid; the only emotional motion is the draggable wireframe wormhole in the hero.

**The governing decision: most crypto / RWA sites lean on neon palettes, atmospheric gradients, glowing colored CTAs, and a second or third accent fighting for attention — OMMOD refuses all of it.** It commits to one onyx canvas, one graphite hairline, monochrome type, and motion earned only by interaction. Color is rationed to the edge of invisibility: acid lime (`{colors.accent}` #e4f222) appears *only* in the favicon check and the `::selection` highlight; indigo (`{colors.indigo}` #5e6ad2) is decorative only — the wormhole throat ring, terminal `<step>` tags, the active globe node, focus rings. The primary call-to-action is deliberately **not** colored — it is a snow-white fill with canvas-color text. Everything else is gray on near-black, separated by 1px graphite alone.

The single chromatic decision that *isn't* gray is the page primitive itself. Every layout is built from the `{components.bleed-hairline-grid}`: a container painted `{colors.line}` with a `gap: 1px`, holding cells painted `{colors.bg}` — so the 1px gap *is* the divider. Hero band, splits, stats, feature grids, terminal wrap, ecosystem, contact, and footer are all this one primitive. Depth is carried by the hairline, never by a drop shadow on a card.

Unlike a single-screen hero study, OMMOD is a complete 10-section landing (Hero → Problem → Stats → Architecture → Why → Use Cases → How It Works → Ecosystem → Contact → Footer), so most of the system is observed rather than inferred. It also ships a **real light/dark theme toggle** — a clean palette inversion, not a recolor — documented as a first-class dual-theme system below. The same bleed grid, type, and component structure hold in both; only the surface/line/text values flip.

**Key Characteristics:**
- **Near-black onyx canvas** (`{colors.bg}` #08090a) — the deepest surface; no gradients on any section background.
- **One graphite hairline** (`{colors.line}` #282c33 dark / #e3e5e9 light) for *every* border, divider, grid seam, and stroke — `--border` is an alias of the exact same value, by rule.
- **The bleed-hairline grid** (`{components.bleed-hairline-grid}`) — cells on `{colors.bg}` with a 1px gap revealing the line, so the layout reads as one ruled grid.
- **Inter at light weight 300** with negative tracking for display, regular 400 for body; **JetBrains Mono** for labels, terminal, and metadata. Nothing exceeds weight 590.
- **A draggable Three.js wireframe-wormhole hero** (orbit + inertia + hover-energize) as the primary signature; a rotating crypto-logo globe as the second.
- **Two micro-accents only** — lime (`{colors.accent}`, favicon + selection) and indigo (`{colors.indigo}`, decorative/focus). The CTA is white, not colored.
- **A genuine light theme** (`:root.light`) that inverts the palette with no flash on load — never a dark-only component.
- **A floating bordered header** that snaps flush against the grid, overlapping the `.stack` card by 1px so the seam reads as a single line.
- **Does NOT** use neon palettes, gradient section fills, colored CTAs, a second line color, drop-shadowed cards, font weights above 590, emoji, or any imported icon font.

## Colors

> **Source pages analyzed:** all 10 shipped sections (hero band, problem split, stats band, architecture split, why-features grid, use-cases grid, how-it-works terminal + globe, ecosystem logo grid, contact form, footer) plus the floating header and mobile nav overlay — both themes captured from the live toggle. This is the full surface palette, not a single screen.

### A dual-theme system (dark is default)

OMMOD ships a real theme toggle. **Dark is the default `:root`; light is `:root.light`** — the toggle adds/removes the `light` class on `<html>` and persists to `localStorage['ommod-theme']`, with a no-flash inline script in `<head>` setting the class before stylesheets load. The two themes are a *clean inversion of the same tokens*, not different designs: the bleed-hairline grid, type, and component structure are identical; only the surface/line/text values flip. Document and build both; never ship a dark-only variant of a component.

### Brand & Accent
- **Acid Lime** (`{colors.accent}` #e4f222, text `{colors.on-accent}` #08090a): The single chromatic spark. Used **only** in the favicon check mark and the `::selection` highlight — plus the fill of the rare contained `{components.btn-lime}` (forms/inline). It is *not* the primary page CTA. Never on headlines, backgrounds, or section fills.
- **Indigo** (`{colors.indigo}` #5e6ad2): Decorative only — the wormhole throat ring, terminal `<step>` tags, the active globe `node-dot.on`, the form `focus-within` inset ring, and link-hover in contact/footer. Never a fill for content.

### Surface (dark / light)
- **Bg** (`{colors.bg}` #08090a → `{colors-light.bg}` #ffffff): The canvas — the void every cell floats on. Onyx in dark, pure white in light.
- **Surface-1** (`{colors.surface-1}` #0f1011 → #f7f8f8): Charcoal — header bar, card base, terminal/globe panels, ecosystem cells. Elevation level 1.
- **Surface-2** (`{colors.surface-2}` #161718 → #eef0f2): Obsidian — deep cards, hover state on action bars and feature cards, the floating chip.
- **Surface-input** (`{colors.surface-input}` #383b3f → #eef0f2): Steel — reserved input surface (the live form uses transparent inputs inside hairline cells; this is the token if a filled input is needed).
- **Bg-deep** (`{colors.bg-deep}` #0f1011 → `{colors-light.bg-deep}` #f1f2f4): Raised-cell hover alias.

### The single hairline
- **Line** (`{colors.line}` #282c33 → `{colors-light.line}` #e3e5e9): The one structural value. Used for **every** border, divider, grid seam, motif stroke, scrollbar thumb, and the inset-border elevation. `{colors.border}` is an alias of the exact same value — there is no second line color, by rule.

### Text (cool grays, dark / light)
- **Text** (`{colors.text}` #f7f8f8 → `{colors-light.text}` #08090a): Snow — primary headings, body emphasis, icons, and the **white CTA fill**. Near-white in dark, onyx in light.
- **Mist** (`{colors.mist}` #d0d6e0 → #3a3d42): Tertiary text — the `lead` paragraph voice and soft icon strokes. One step down from primary.
- **Muted** (`{colors.muted}` #8a8f98 → #62666d): Fog — secondary body copy, captions, nav links at rest, metadata, stat labels.
- **Faint** (`{colors.faint}` #62666d → #8a8f98): Slate — eyebrows, placeholders, line numbers, tags, legal row, low-emphasis chrome.

### Semantic
- **Emerald** (`{colors.emerald}` #27a644): The only status color that *appears* in the shipped build — the first terminal status dot (`.on`). Reserved otherwise.
- **Crimson / Cyan** (`{colors.crimson}` #eb5757, `{colors.cyan}` #02b8cc): Defined as error / info status but **unused** on the shipped surface. Reserved — never promoted to a brand accent.

## Typography

### Font Family
- **Inter** (display + body) — `Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`. Both roles share the identical stack; the family change is silent. Display is Inter at **weight 300** with negative tracking; body is Inter at **weight 400**. Loaded with `font-feature-settings: "cv01" 1, "ss03" 1` and `-webkit-font-smoothing: antialiased`.
- **JetBrains Mono** (labels / terminal) — `JetBrains Mono, ui-monospace, "SFMono-Regular", Menlo, Monaco, Consolas, monospace`. Carries eyebrows-as-mono where used, the terminal block, metadata, form labels, line numbers, and the footer legal/social rows. Runs slightly tight (`letter-spacing: -0.01em`) except uppercase labels, which open up (0.12–0.14em).
- **Weights** — four named tokens: `--w-light: 300` (display headlines, the big word stack, stat numbers, mobile nav links), `--w-regular: 400` (body, nav links), `--w-mid: 510` (eyebrows, action-bar/button labels, card titles, deflist keys, `h3`), `--w-strong: 590` (wordmark only). **Nothing exceeds 590** — that is the ceiling.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display}` | clamp(2.75rem, 1.9rem + 4.2vw, 4.5rem) (~44–72px) | 300 | 1.02 | -0.02em | Hero headline (Inter light) |
| `h1` | clamp(2rem, 1.5rem + 2.4vw, 3rem) (~32–48px) | 400 | 1.08 | -0.015em | Section heads (Problem, Architecture, Use Cases) |
| `h2` | clamp(1.6rem, 1.3rem + 1.5vw, 2.25rem) (~26–36px) | 400 | 1.12 | -0.012em | Sub-section heads (Ecosystem, Contact) |
| `h3` | clamp(1.15rem, 1.02rem + .55vw, 1.5rem) (~18–24px) | 510 | 1.20 | -0.01em | Card / deflist titles |
| `big` (stack) | clamp(2.2rem, 1.5rem + 3.4vw, 4rem) | 300 | 1.02 | -0.02em (uppercase) | The "Proof / over / trust" word stack |
| `num` (stat) | clamp(2.2rem, 1.6rem + 2.6vw, 3.5rem) | 300 | 1.00 | -0.02em | Stat figures ($10B+, 0, 100%) |
| `lead` | 1.0625rem (17px) | 400 | 1.50 | 0 | Intro paragraph under headings (Mist) |
| `body` | 0.9375rem (15px) | 400 | 1.60 | 0 | Long-form copy (Muted) |
| `sm` / caption | 0.875rem (14px) | 400 | ~1.55 | 0 | Card body, stat labels, nav links |
| `xs` / micro (`{typography.mono}`) | 0.75rem (12px) | 510 | — | 0.14em (uppercase) | Eyebrows, tags, mono metadata |
| `label` (mono) | 0.75rem (12px) | 400 | — | 0.12em (uppercase) | Form labels |

### Principles
- The hero headline lives at Inter **300** with -0.02em tracking — the light weight at large size *is* the voice; never bump display to 400+.
- Body runs 15px at line-height 1.6; `lead` lifts to 17px and shifts to `{colors.mist}` to sit a step above body without changing weight.
- Eyebrows are uppercase mono-feel labels at 12px, **weight 510**, 0.14em tracking, `{colors.faint}` — short and quiet.
- Mono is the system's "instrument" voice: tight (-0.01em) for terminal/metadata, wide (0.12–0.14em) only for uppercase labels.
- Stat numerals use the light display weight at line-height 1.0 so each figure reads as a single graphic mark.
- Never exceed weight 590 anywhere — the wordmark is the only place that weight appears.

### Note on Font Substitutes
Inter and JetBrains Mono are both open-licensed (Google Fonts) — load them directly; **no substitution is required**. If Inter is unavailable, fall back to `system-ui` / `-apple-system` and accept slightly looser display setting; keep the 300/400/510/590 weight map intact. If JetBrains Mono is unavailable, fall back to `ui-monospace` / SF Mono / Menlo and hold the -0.01em tightening. Do not substitute a serif or a geometric sans — the engineered, neutral character of Inter paired with a true monospace *is* the system.

## Layout

### Spacing System
- **Base unit**: `{spacing.base}` (4px). Steps: 4 / 8 / 12 / 16 / 24 / 40 / 64 / 96 (`--s-1`…`--s-8`).
- **Frame inset**: `{spacing.frame-inset}` (16px) — the gutter that holds the whole `.stack` card off every screen edge; the floating header sits inside the same inset.
- **Section padding**: panes use `clamp(--s-5, 3.5vw, --s-7)` (24→64px); cards use `clamp(--s-5, 2vw, --s-6)` (24→40px) — padding scales with the viewport, never fixed.
- **Max content width**: `{spacing.maxw}` (1280px).
- **Header height**: `{spacing.header-height}` (64px), which is also the header's logo/theme cell width.

### Grid & Container
- **The page is one bordered card.** `<main class="stack">` is a single 1px-`{colors.line}` bordered, `{rounded.card}` (12px) container; the 10 sections live inside it, each a full-viewport flex column separated by a hairline (`.auto-h` sections shrink to content).
- **Everything is built from `{components.bleed-hairline-grid}`:** the container gets `gap: 1px; background: var(--line)`, each `.cell` gets `background: var(--bg)` — so the 1px gap *is* the divider. Hero band, splits, stats, feature grids, terminal wrap, ecosystem, contact, and footer are all this one primitive.
- **Section min-height**: `calc(100svh - header - frame*3)` so each section fills the viewport on entry; `.auto-h` (Stats, Why, Use Cases, Ecosystem, Contact, Footer) collapse to their content.
- **Mobile-first single column** → `@media (min-width: 768px)` upgrades the big splits to `1fr 1fr` (and stats to 3-col) → `@media (min-width: 1024px)` reveals the desktop header (logo | wordmark | nav | theme) and hides the burger.

### Whitespace Philosophy
Whitespace here is the dark space *between* ruled cells. The grid is dense by design — content sits edge-to-edge inside each cell with generous internal padding, and the 1px seams do the separating that margins would do elsewhere. The restraint is in color and motion, not in air: the page can be tightly gridded *because* it is monochrome and the only line is graphite. Adding margin between cells, or a second divider color, would break the "one continuous ruled grid" read that is the whole identity.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Default for type and any `.cell` on `{colors.bg}` |
| Hairline / inset | `{shadow.inset-border}` (inset 0 0 0 1px `{colors.line}`) | The structural "elevation" — borders and grid seams ARE the depth |
| Soft + inset (card) | `{shadow.card}` | Raised cards needing a faint lift plus the hairline |
| Depth (header / lime) | `{shadow.depth}` (4-layer micro-shadow) | The floating header bar and the contained `{components.btn-lime}` |
| XL (reserved) | `{shadow.xl}` (rgba(8,9,10,.6) 0 4px 32px) | Heaviest float; reserved, used sparingly |

Depth is almost entirely **the hairline itself**. The single graphite line — as a border, a grid seam, or an `inset 0 0 0 1px` — does the work a drop shadow would do in a glossier UI. The only real shadows are the 4-layer `{shadow.depth}` under the floating header and the lime button, and a faint `{shadow.sm}` under the floating chip. A cell that "needs depth" gets the inset hairline, not a `box-shadow`.

### Decorative Depth
- **The bleed-hairline grid** carries structural depth — the seams ARE the elevation.
- **The 3D wireframe wormhole and the rotating logo globe** carry interactive/atmospheric depth — fog-based recession in the wormhole, depth-sized nodes in the globe.
- **No atmospheric gradients, no glow, no spotlight cards.** The only gradient anywhere is the faint 64px masked grid background behind the hero canvas.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.badge}` | 2px | Tiny badges/chips |
| `{rounded.btn}` | 6px | Floating header bar, contained lime button, chip, inputs |
| `{rounded.input}` | 6px | Filled input surfaces (same value as btn) |
| `{rounded.card}` | 12px | The `.stack` main card — the page's outer container |
| `{rounded.pill}` | 9999px | Ghost/outline buttons, scrollbar thumb — only where truly round |

Most of the layout is **sharp-cornered** — the bleed-hairline cells carry no radius. Rounding is reserved for the outer `.stack` card (12px), the floating header (6px), and pill-shaped ghost controls. The sharp internal cells are part of the instrument-panel read.

### Photography & Illustration Geometry
- The build uses **three raster images** (hero fallback, Problem image, Architecture image) and a **set of 46 grayscale logo SVGs** — no full-color photography.
- **Problem image** (`image-01.png`): `object-fit: contain`, static (no parallax) — inside a `{colors.surface-1}` media cell.
- **Architecture image** (`section-01.png`): `object-fit: cover`, fills the frame edge-to-edge with no gaps, static.
- **Hero fallback** (`image-02.png`): shown only if WebGL is unavailable; otherwise the Three.js canvas renders.
- **Logos** render `grayscale(1)` at ~0.8 opacity, brightening on hover. In light theme the grayscale filter shifts (`brightness(0.82)` vs `1.18`) so marks stay legible on white. The Ecosystem grid shows 6 fixed marks (`logo-01/09/17/20/23/33`); the globe samples 26 onto a sphere.
- **Parallax guards (load-bearing):** the 3D hero and any `<img>` media panel stay **perfectly static** — scrub parallax applies *only* to pure-SVG / canvas-less media.

## Components

### Buttons

**`btn-bar-primary`** — White action bar (the primary CTA). A **full-cell** `.btn-bar` that fills its grid cell, centered, with an arrow: `background: var(--text)` (snow) + `color: var(--bg)` (canvas) label at weight 510. **It is white, never colored.** Hover: `filter: brightness(0.92)` and the gap opens 12→16px so the arrow nudges right (`translateX(4px)`). Used for `Start Building →`, `Read the Docs →`, `Send Message →`.

**`btn-bar`** (secondary) — The same full-cell bar with `background: transparent; color: var(--text)`. Hover: `background: var(--surface-2)`, gap opens, arrow nudges. This is the *default* btn-bar treatment — the quiet sibling of the white CTA.

**`btn-lime`** (`{components.btn-lime}`) — A contained inline button (`.btn`): `{rounded.btn}` (6px), `{colors.accent}` lime fill, `{colors.on-accent}` near-black text, `{shadow.depth}` lift, hover `filter: brightness(1.06)`. This is the **only filled-color action** and is reserved for forms/inline use — not the hero CTA. AAA contrast guaranteed by `on-accent`.

**`btn-ghost`** — Pill-radius (`{rounded.pill}`), transparent fill, 1px `{colors.line}` border, `{colors.text}` label. Hover: `background: var(--surface-2)`, border brightens to `{colors.mist}`. Used where a filled button would over-weight the cell.

### Cards & Containers

**`fcard`** — Feature / use-case card. `{colors.surface-1}` surface, padding `clamp(--s-5, 2vw, --s-6)`, min-height ~200px, a 34–40px `motif-stroke` line-art icon, a `tag`/`ft` title (weight 510), an `fd` body (14px `{colors.muted}`), and a mono `fnum`/`tag` index. Hover: surface lifts to `{colors.surface-2}` and the icon brightens `{colors.muted}` → `{colors.text}`.

**`terminal`** (`{components.terminal}`) — `{colors.surface-1}` panel, JetBrains Mono at 14px / line-height 1.7, tight tracking. A title bar (`ommod verify`) with three 7px status dots (first emerald `.on`), then numbered `.tline`s with a faint mono line number, indigo `<step>` tags (`.st`), and snow keywords (`.tk`). The instrument panel's literal terminal.

**`chip`** — Absolutely-positioned `{colors.surface-2}` box, 1px `{colors.line}` border, `{rounded.btn}`, mono 12px, faint `{shadow.sm}`. Annotates the globe panel.

### Inputs & Forms

**`form`** — The contact form is itself a `{components.bleed-hairline-grid}` (`1fr 1fr`, fields seamed by `{colors.line}`). Each field is a `label` cell on `{colors.bg}` with an uppercase **mono** label (12px, 0.12em, `{colors.muted}`) and a **borderless** input/textarea (transparent, no field border, `{colors.text}` text, faint placeholder). Focus is shown on the *cell*, not the input: `label:focus-within` gets `box-shadow: inset 0 0 0 1px var(--indigo)` and the label brightens to `{colors.text}`. The submit cell is a white `{components.btn-bar-primary}`. Not wired to a backend (`onsubmit="return false"`).

### Signatures

**`wormhole-hero`** (`{components.wormhole-hero}`) — The centerpiece: a Three.js **wireframe hyperboloid** `r(z) = a·√(1 + (z/c)²)` rendered as `LineSegments` in `{colors.muted}`, with a separate 100-segment **indigo throat ring** (`{colors.indigo}`). It auto-spins slowly, has `{colors.bg}`-colored fog for depth, you can **drag to orbit** (with release inertia), and **hover energizes it** (faster spin + brighter lines). It is **theme-aware** — a MutationObserver re-reads the CSS vars so the wormhole recolors instantly on toggle — reduced-motion-safe (auto-spin → 0, drag still works), and paused offscreen. If WebGL is unavailable, the canvas is removed and the `image-02.png` fallback shows. The canvas uses `touch-action: pan-y` so vertical scroll works while horizontal drag orbits; cursor is `grab` / `grabbing`. Do not swap it for a torus, particle field, or imported model.

**`logo-globe`** (`{components.logo-globe}`) — The How-It-Works second signature: a procedural inline-SVG globe — 26 grayscale logos on a Fibonacci sphere, each node linked to its 3 nearest neighbours by thin `{colors.line}`-color lines, so it reads as a rotating network globe. Built into a `[data-motif="globe"]` host; rotated on a rAF loop (`ang += 0.0028`/frame, paused offscreen via IntersectionObserver), with nodes sized and links faded by depth. Logos load from the project CDN; the active node uses indigo `node-dot.on`.

### Navigation

**`top-nav`** (`.site-header`) — A floating bordered bar: `position: fixed` inside the 16px frame inset, 64px tall, `{colors.surface-1}`, 1px `{colors.line}` border, `{rounded.btn}`, `{shadow.depth}`. The `.stack` below uses a `-1px` top margin so its border **overlaps the header's into a single seam**. Children are seamed by `border-left: 1px solid var(--line)`: logo (circle+check SVG) | wordmark `OMMOD` (weight 590) | nav (`{colors.muted}` → `{colors.text}` on hover) | theme toggle. A burger replaces nav below 1024px, opening a full-screen `clip-path` overlay with big Inter-300 links and a mono index per row.

**`theme-toggle`** (`{components.theme-toggle}`) — A 20px half-filled circle (sun/moon) SVG, `{colors.muted}` → `{colors.text}` on hover. Toggles `.light` on `<html>`, persists to `localStorage['ommod-theme']`, updates `<meta name="theme-color">` (#08090a dark / #ffffff light), reacts to system change in `system` mode, and triggers the wormhole recolor. The no-flash inline script in `<head>` sets the class before stylesheets load.

### Footer

**`footer`** (`.footer__grid`) — A bleed-hairline grid: a brand cell (30px logo + `OMMOD` wordmark, body, and a closing eyebrow) beside a links grid (each `<a>` a seamed cell with a `↗`, `{colors.muted}` → `{colors.text}` on hover) over a social row (X + email icon cells). A mono `.footer__legal` row sits on a top hairline, in `{colors.faint}`.

## Do's and Don'ts

### Do
- Keep the canvas `{colors.bg}` (onyx dark / white light); no gradients on section backgrounds.
- Use `{colors.line}` for **every** border, divider, grid seam, and stroke — one value, everywhere.
- Build every layout from the `{components.bleed-hairline-grid}` primitive (gap:1px + line bg; cells on bg).
- Set the hero headline in Inter **300** with -0.02em tracking; keep body at 400.
- Keep the primary CTA **white** (`{components.btn-bar-primary}`) — snow fill, canvas text.
- Ration `{colors.accent}` lime to the favicon + selection (+ the inline `{components.btn-lime}`); keep `{colors.indigo}` decorative only.
- Build **both** themes — light is a first-class inversion, with the no-flash script.
- Let the wormhole + globe be the only continuous motion; everything else reveals once on scroll, and the 3D hero + `<img>` panels stay static.

### Don't
- **Don't introduce a second line color** — there is exactly one `{colors.line}`; `{colors.border}` is an alias of it.
- Don't make the primary CTA colored — lime is not the CTA; the CTA is white (`{components.btn-bar-primary}`).
- Don't go neon or gradient on section backgrounds (the only gradient is the faint masked grid in the hero stage).
- Don't exceed font weight **590** anywhere — the wordmark is the ceiling.
- Don't add card elevation beyond the inset hairline + soft shadow; no heavy `box-shadow` on a card.
- Don't credit, name, or imply any third-party design system or template — this is OMMOD's own dark product design.
- Don't swap the wormhole for a torus / particle field / imported model, or drop the parallax guards.
- Don't ship a dark-only component — both themes are required.
- Don't reach for `bg-blue-500`-style AI-default accents; the palette is monochrome with two micro-accents.
- Don't space the bleed-hairline cells apart with margin — the 1px seam *is* the divider.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Phone | <768px | Everything single-column; hero band stacks; form → 1 column; hero motif widens to `94vw`; vertical labels go horizontal |
| Tablet | ≥768px | Big splits → `1fr 1fr`; stats → 3-col; feature/use-case grids 2-up; ecosystem logos 3-col; reverse-split flips media order |
| Desktop | ≥1024px | Desktop header revealed (`logo | wordmark | nav | theme`), burger hidden; `fgrid.three` → 3 columns |
| Wide | ≥1280px | Content respects the `{spacing.maxw}` 1280px cap |

### Touch Targets
- The full-cell `.btn-bar` and full-card `.fcard` are large hit areas by construction; minimum 44×44 is cleared everywhere.
- The wormhole canvas uses `touch-action: pan-y` so vertical scroll works while horizontal drag orbits it; globe and wormhole are fed by pointer events that work on touch.
- Nav collapses to a full-screen overlay (clip-path reveal) with big Inter-300 links and a mono index per row.

### Collapsing Strategy
- Sections are `min-height: 100svh - frame` so each fills the viewport; `.auto-h` sections shrink to content at every width.
- Header: full inline `logo | wordmark | nav | theme` (≥1024px) → `logo | wordmark | burger` (<1024px) → full-screen `clip-path` overlay.
- All headlines use `clamp()` — never a fixed display size; the `--fs-*` scale carries the scaling.
- The 16px frame inset holds the `.stack` card off the edges at every width.

### Image Behavior
- Hero: faint 64px masked grid background + Three.js canvas; `image-02.png` fallback only when WebGL is missing.
- Problem image `object-fit: contain` (static); Architecture image `object-fit: cover` (static) — both excluded from parallax by the guards.
- Reveals: `.reveal` elements fade up (`y:40 → 0`, `expo.out`, stagger .08) on `ScrollTrigger start "top 72%"`; a tighter mobile version (`y:26`, `start "top 86%"`).
- `prefers-reduced-motion`: all transitions/animations clamp to ~0, the loader is hidden, static states show, Lenis (GSAP-synced smooth scroll) is disabled, wormhole auto-spin → 0 (drag still works).

## Iteration Guide

1. New page (docs, dashboard, status, integration guide)? Start from `{colors.bg}` + the `.stack` card + the `{components.bleed-hairline-grid}` primitive + Inter-300 display / JetBrains-Mono labels. The shell is the brand.
2. Keep the single-hairline rule absolute — a new divider, border, or stroke is `{colors.line}`, never a new value. `{colors.border}` stays an alias.
3. Build both themes from day one: define new surface/text needs as token pairs (dark `:root` + light `:root.light`); never hardcode a hex that won't invert.
4. Reference everything by token name — `{colors.X}`, `{rounded.X}`, `{components.X}` — so a value change cascades and theme-toggling stays automatic.
5. Display vs body: Inter 300 + negative tracking for display; Inter 400 + 0 tracking for body; Mono for labels/terminal/metadata. Don't blur the rule.
6. Keep color rationed: a new accent need is answered by indigo (decorative) or by nothing — never by promoting lime, emerald, crimson, or cyan to a content fill. The CTA stays white.
7. Hold the depth restriction: a new surface that "needs depth" gets the inset hairline (`{shadow.inset-border}`), not a drop shadow. Reserve `{shadow.depth}` for floating chrome.
8. Any new continuous motion must be earned by interaction (like the wormhole drag) or be a single slow ambient loop (like the globe) — everything else reveals once on scroll.

## Known Gaps

- Beyond the 10 shipped sections, later-page layouts (docs, dashboard, status, pricing) are not specified — design them in the same instrument-panel language: onyx/white canvas, single hairline, bleed grid, Inter + Mono, white CTA.
- Form validation states (error, success, disabled) are not surfaced — the live form is unwired (`onsubmit="return false"`); an error state would likely use `{colors.crimson}` and a success state `{colors.emerald}`, but the exact treatment is unconfirmed.
- `{colors.surface-input}` (#383b3f) is defined as a filled-input surface, but the shipped form uses borderless transparent inputs inside hairline cells; how a filled input should look is inferred.
- `{colors.crimson}` (#eb5757) and `{colors.cyan}` (#02b8cc) are in the token set but unused in the shipped build — their roles (error / info status) are reserved, not demonstrated.
- The light theme is a clean inversion of the same tokens; component-by-component contrast in light mode (grayscale-logo legibility, indigo focus ring on white) is mostly observed, but a few edge cells are inferred to follow the same inversion.
