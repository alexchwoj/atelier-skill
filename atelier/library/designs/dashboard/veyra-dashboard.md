---
version: "1"
name: "Veyra — Smart Staking Dashboard"
description: "A two-column smart staking dashboard for proof-of-stake crypto assets. Near-black navy canvas (#0c0e14) with a single radial sheen, a strictly enforced lavender accent ramp (#8b7bff → #a78bfa) as the only chromatic note, Inter at every weight, hand-authored inline SVG sparklines and a waveform slider. No framework, no chart library — exactly two files: index.html + styles.css."
colors:
  bg: "#0c0e14"
  bg-sheen: "radial-gradient(1200px 800px at 70% -10%, #161a2a 0%, #0c0e14 55%)"
  panel: "#11141d"
  panel-2: "#141823"
  card: "#161b27"
  card-nested: "#1a2030"
  stroke: "#222838"
  stroke-soft: "#1c2230"
  txt-1: "#e8eaf0"
  txt-2: "#9aa3b8"
  txt-3: "#646d82"
  accent: "#8b7bff"
  accent-2: "#a78bfa"
  accent-soft: "#b9a6ff"
  positive: "#3ddc84"
  negative: "#ff6b6b"
typography:
  display:
    fontFamily: "Inter"
    weights: "400 / 500 / 600 / 700"
    role: "everything — headlines, body, labels, counters, numerics"
  numerics:
    feature: "font-variant-numeric: tabular-nums on every column-aligned figure"
spacing:
  base: "Custom CSS — no Tailwind. 4px rhythm."
  shell: "Two-column shell: sidebar 248px left, main flex right, capped at 1640px and centered"
  body: "Body 14px, letter-spacing -.01em"
  scroll-pad: "24px 26px 40px"
  topbar-pad: "16px 26px"
rounded:
  outer: "18px (coin cards, promo, outer surfaces)"
  inner: "12px (pills, segmented buttons, inner controls)"
  panel: "22px (the Active Positions panel)"
  pill: "9999px (profile chip, deltas, status pills)"
  button: "11px (deposit, icon-btn, search, settings)"
components:
  coin-card: "Stacked metric card — header (icon + position + name + ext-link button), 'Reward Rate' label, 34px tabular figure with trailing percent, up/down delta chip, inline SVG sparkline with gradient fill, dashed midline, and a positioned spark-tag"
  promo-card: "Lavender gradient 'Auto-Compound Vault' card with rotated hairline shimmer pseudo-element, primary lavender CTA + ghost CTA"
  waveform-slider: "Inline SVG bars in the right rail acting as a draggable amount picker — preserveAspectRatio='none' so it stretches with the column"
  sparkline: "Hand-authored <path> with linearGradient fill, dashed reference line, terminal endpoint dot — never Recharts"
  segmented-toggle: "Staking / Restaking pill segment inside the sidebar — active segment gets inset highlight"
  upsell-tile: "Bottom-of-sidebar 'Activate Pro' tile, lavender lightning glyph in a soft-grey square"
  metric-card: "Compact KPI tile (Staked Supply / Price / Staking Ratio / Reward Rate) with label, optional 24H tag, and a tabular figure"
  tx-table: "CSS-grid driven transaction list with asset chip, type pill (Stake / Reward / Unstake), tabular amount, date, status pill (Completed / Pending / Failed) and right-aligned USD value"
---

# Veyra — Smart Staking Dashboard

> Fivefold showcase. Pairs with the Veyra prompt. Use this file to keep Veyra reading as a precision instrument — a calm, near-black trading-floor surface where lavender is rationed and every number is tabular.

## Overview

Veyra is a desktop-first smart-staking surface rendered as a static design artifact, not a starter to evolve. Two files at the project root — `index.html` and `styles.css` — render the entire dashboard byte-for-byte with no build step and no dependencies beyond a Google Fonts call for Inter. Everything else, from the sidebar logo to the waveform slider in the right rail, is hand-authored inline SVG inside the markup.

The governing decision: **one accent, one font, one canvas — the rest is restraint.** Most crypto dashboards reach for teal, orange, glow, and saturated pure blue at every opportunity. Veyra refuses the entire palette. A single lavender ramp (`#8b7bff → #a78bfa`) carries every interactive moment — the primary CTA, the active sparkline, the notification dot, the asset name in the navigation. Status reds and greens appear only on price deltas and one chart line. The bet: when chromatic accent is rationed, every figure on the page becomes its own visual event. The dashboard reads less like a marketing surface and more like a Bloomberg terminal styled by a typography studio.

The system extends from the sidebar through the topbar, the trending-assets grid, the Active Positions panel, the metric tiles, and the transactions table without ever introducing a second hue. Hairlines at `1px solid {colors.stroke}` hold the chrome together — not shadows. Tabular numerics keep every column-aligned figure aligned. Inline SVG glyphs (Heroicons-style outline / solid paths) inherit `currentColor` so a single class change re-tints an entire region.

**Key Characteristics:**
- Near-black navy canvas (`{colors.bg}` — `#0c0e14`) with a single radial sheen `radial-gradient(1200px 800px at 70% -10%, #161a2a 0%, #0c0e14 55%)` — the only gradient applied to the page background.
- One accent ramp — lavender `{colors.accent}` → `{colors.accent-2}`. Teal, orange, and saturated pure blue are explicitly banned by the prompt.
- Status colors are scarce — `{colors.positive}` for up-deltas, `{colors.negative}` for down-deltas, on chips and one downward chart line only.
- Inter only at four weights (`400 / 500 / 600 / 700`) — no second family, no monospace fallback. Numerics earn column alignment from `font-variant-numeric: tabular-nums`.
- Two-column shell — sidebar `248px` left, main flex right, capped at `1640px` and centered. No second breakpoint structure; the design is desktop-first.
- Charts are inline SVG — sparklines and the right-rail waveform are hand-authored `<path>` and `<line>` with `preserveAspectRatio="none"`. No Recharts, no Chart.js, no D3.
- Hairline borders at `1px solid {colors.stroke}` everywhere — the page is held together by 1px lines, not shadows.
- Soft micro-motion — buttons lift `translateY(-2px)`, the bell icon rings on hover via a 5-keyframe animation, ext-link arrows nudge `translate(2px,-2px)`.

## Colors

> **Source pages analyzed:** Full `index.html` + `styles.css` token block. The palette is enforced verbatim by the prompt's BRAND & DESIGN INVARIANT — no second accent permitted.

### Canvas & Atmosphere
- `{colors.bg}` (`#0c0e14`) — the page surface; the near-black navy under everything.
- `{colors.bg-sheen}` (`radial-gradient(1200px 800px at 70% -10%, #161a2a 0%, #0c0e14 55%)`) — applied to `body` once. Makes the top-right corner read slightly warmer than the bottom-left without ever touching cards.

### Surfaces
- `{colors.panel}` (`#11141d`) — the deepest panel fill (upsell gradient stop, deep inserts).
- `{colors.panel-2}` (`#141823`) — the standard pill / chrome fill (profile chip, search, settings, icon-btn).
- `{colors.card}` (`#161b27`) — the base card fill — coin cards, promo, the Active Positions panel.
- `{colors.card-nested}` (`#1a2030`) — the inner pill fill — segmented buttons, top-bar profile chip, inline controls.

### Hairlines & Borders
- `{colors.stroke}` (`#222838`) — the universal hairline. `1px solid` separators on every card, button, and divider.
- `{colors.stroke-soft}` (`#1c2230`) — the softer separator used on chrome elements (sidebar border, topbar bottom, search field).

### Text Ramp
- `{colors.txt-1}` (`#e8eaf0`) — primary text. Headlines, the big `34px` rate figure, active nav, reward number.
- `{colors.txt-2}` (`#9aa3b8`) — secondary text. Most labels, body copy, filter chips, settings.
- `{colors.txt-3}` (`#646d82`) — tertiary text. Meta lines (`Balance $…`), kbd hint host, registered-mark glyph.

### Brand Accent (rationed)
- `{colors.accent}` (`#8b7bff`) — lavender stop 1. Deposit-button gradient base, notification badge, sparkline stroke.
- `{colors.accent-2}` (`#a78bfa`) — lavender stop 2. The asset-name color in the nav, brand glyph, promo surface tint.
- `{colors.accent-soft}` (`#b9a6ff`) — used inside the `PRO` and `Beta` pills against a `#2a2350` chip.
- **Constraint (verbatim from prompt):** the lavender ramp is the only chromatic accent on the page — do not introduce teal, orange, or saturated pure blue anywhere on the dashboard.

### Status
- `{colors.positive}` (`#3ddc84`) — up-deltas (`.coin-delta.up`, `.mc-value.up`, the `.tx-type.stake` and `.tx-type.reward` dots).
- `{colors.negative}` (`#ff6b6b`) — down-deltas, the single downward Polygon sparkline, `.tx-status.failed`.

## Typography

### Font Family
- **Display + Body:** `Inter`, loaded from Google Fonts at weights `400 / 500 / 600 / 700`. CSS stack: `'Inter', system-ui, sans-serif`.
- **OpenType feature:** `font-variant-numeric: tabular-nums` applied to every column-aligned figure (Reward Rate, balances, transaction amounts, metric values). There is no monospace fallback — Inter's tabular figures carry alignment.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `block-title` | 26px | 600 | 1.2 | -.02em | Section H1 ("Trending Yield Assets") |
| `coin-rate` | 34px | 600 | 1 | -.03em | The big tabular rate figure on coin cards |
| `stake-title` | 22px | 600 | 1.2 | -.02em | "Stake Solana (SOL)" panel headline |
| `promo-title` | 22px | 600 | 1.2 | -.02em | "Auto-Compound Vault" |
| `brand-name` | 15px | 600 | 1.2 | normal | Sidebar "Veyra ®" wordmark |
| `body` | 14px | 400 | 1.5 | -.01em | Body copy, paragraph text, default |
| `nav-item` | 13.5px | 500 | 1.3 | normal | Sidebar nav links |
| `label` | 12–13px | 500 | 1.4 | normal | Recommend label, filter chips, settings |
| `meta` | 11px | 400 | 1.35 | normal | `Balance $…`, brand sub, asset amounts |
| `pill` | 10–11px | 600 / 700 | 1.4 | normal | "New", "Beta", count chips, PRO badge |
| `pct` | .55em (relative) | 500 | inherit | normal | Trailing `%` on the 34px rate |

### Principles
- Display sizes pull negative tracking (`-.02em` to `-.03em`) so headlines feel tight and editorial against the wide tabular figures.
- Body sits at `14px` (not 16) with `-.01em` tracking — terminal density, not marketing comfort.
- Weight `500` is used on labels and nav items; weight `600` carries headlines and CTAs; weight `700` is reserved for tiny pills and badges.
- Numerics always use tabular figures so columns of `Reward Rate`, dollar values, and stake balances line up vertically without a monospace face.
- The trailing `%` on the big rate uses a relative `.55em` size and `txt-2` color — the percent is a hint, not part of the figure.
- The `PRO`, `Beta`, and `New` pills are uppercase tracking and intentionally tiny (`8–10px`) so they read as metadata, not decoration.
- There is no italic anywhere except the inline `<i>SOL</i>` ticker hints in the transactions table, where italic acts as a typographic micro-modifier.

### Note on Font Substitutes
If Inter is unavailable, fall back to `system-ui` (San Francisco on macOS, Segoe UI Variable on Windows). When substituting, keep the same weights but tighten tracking by an extra `-.005em` at display sizes — system faces tend to render slightly wider than Inter at the same weight, and the dashboard's editorial feel depends on tight headlines. Do not substitute a monospace family for the numerics; instead enforce `font-variant-numeric: tabular-nums` on the substitute and verify column alignment.

## Layout

### Spacing System
- Base unit: `4px`. All paddings and gaps are 4-px multiples.
- Sidebar padding: `22px 16px`. Nav vertical gap: `2px`. Nav item padding: `10px 12px`.
- Topbar padding: `16px 26px`. Topbar gap: `16px`. Topbar-right gap: `12px`.
- Scroll region padding: `24px 26px 40px`. Inter-section vertical gap: `22px`.
- Coin-card padding: `18px`. Promo-card padding: `18px`. Active Positions panel padding: outer card padding ~`22px`.
- Metric-card padding: `14px 16px`. Transaction row vertical pad: `12px`.
- Whitespace between block-title and the grid below: `12px 0 18px` margin on the H1.

### Grid & Container
- Shell: `display:grid; grid-template-columns:248px 1fr; min-height:100vh; max-width:1640px; margin:0 auto`.
- Trending Yield Assets: `grid-top` is `display:grid; grid-template-columns:repeat(3,1fr) 1.05fr; gap:16px` — three coin cards and one slightly wider lavender promo card.
- Metric cards row: 4-up grid, even widths.
- Transactions table: CSS grid with `Asset / Type / Amount / Date / Status / Value` columns; the Value column is right-aligned via `tx-r`.
- Sidebar nav-group "Active Staking" expands to a list of `.asset` rows indented by a `1px solid {colors.stroke-soft}` left border at `margin-left:12px`.

### Whitespace Philosophy
The dashboard treats whitespace as a structural separator, not a decorative one. Coin cards sit at `min-height:248px` regardless of content so the row holds its rhythm even when one sparkline is shorter. The Active Positions panel breathes around the large `Stake Solana` title because the right rail (lock duration, waveform) demands a vertical match. The block-head row separates filter chrome from the headline by `12px` margin so the H1 lands isolated — the page never crowds a headline into its tooling.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border, hairline only | Default body, sidebar, panel surfaces |
| Soft hairline | `1px solid {colors.stroke}` | Coin cards, promo, search, settings, icon-btn — the universal card edge |
| Backdrop tint | Gradient fill `linear-gradient(180deg,#171c29,#13171f)` | Coin-card body — a near-imperceptible top-to-bottom warm shift |
| Product shadow | `0 6px 18px -6px #7c66f0` (rest) → `0 12px 26px -8px #7c66f0` (active) | Primary CTAs only (`.deposit`, `.upgrade`, `.promo-cta.primary`) |

**Shadow philosophy.** Shadows are reserved exclusively for the lavender CTAs — they read as luminous, not heavy, because the tint matches the brand accent. Cards never cast shadows; they earn separation through hairline strokes and the warm-to-cool gradient inside `.coin-card`. The page is structurally flat; only the deposit-class buttons rise from the canvas.

**Decorative Depth:**
- The promo card uses a rotated `::after` pseudo (`transform: rotate(35deg)`) as a faint diagonal shimmer over the lavender gradient.
- The sparkline gradient (`stop-opacity:.35` at top, `0` at bottom) fades under the line so the chart reads as light rising from the card floor, not a separate shape.
- The waveform bars in the lock-duration slider step `stroke:#3a4255` → `#6b7488` between the two halves so the "filled" portion reads brighter without leaving the monochrome palette.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `rounded.none` | `0` | Hairline separators, inline SVG strokes |
| `rounded.kbd` | `5px` | `⌘` keyboard hint, `PRO` pill |
| `rounded.icon-tile` | `8–9px` | Asset glyph chips, segment buttons, brand toggle |
| `rounded.inner` | `12px` | Pills, segmented controls, inner controls |
| `rounded.button` | `11px` | Deposit, icon-btn, search, settings, filter |
| `rounded.outer` | `18px` (`--radius`) | Coin cards, promo, metric cards — the standard card edge |
| `rounded.panel` | `22px` | The Active Positions panel — a slightly softer outer |
| `rounded.pill` | `9999px` | Profile chip, deltas, status pills, count badges |

### Photography Geometry
- The only raster image on the page is the avatar — `<img class="avatar" src="https://i.pravatar.cc/80?img=32">` at `34×34` rendered through `border-radius:50%; object-fit:cover`.
- No hero illustration, no marketing imagery, no chart-as-image. All charts are inline SVG.
- Asset glyphs (Ethereum, Avalanche, Polygon, BNB Chain, Solana, Cardano) ship as `11–14px` inline SVG against tinted square backgrounds. Solana uses `linear-gradient(135deg, #9945ff, #14f195)` as its chip background — this gradient appears only inside the asset-icon container, never on the page surface.
- Loading strategy: no lazy-loading is required; the avatar is the single image and ships above the fold.

## Components

### Buttons

**Button — Primary Deposit** `{component.deposit}`. Lavender pill CTA on the topbar. Background `linear-gradient(180deg,#9b8cff,#7c66f0)`, color `#fff`, weight `600`, font-size `13.5px`, padding `11px 22px`, radius `11px`, shadow `0 6px 18px -6px #7c66f0`. **Active:** `translateY(-2px)`, shadow expands to `0 12px 26px -8px #7c66f0`, inner SVG scales to `1.12`. **Focus:** outline replaced by a `2px` lavender ring at `box-shadow: 0 0 0 2px rgba(139,123,255,.45)` (system-provided fallback).

**Button — Primary Promo CTA** `{component.promo-cta-primary}`. Soft-violet pill inside the lavender promo card. Same gradient as Deposit but reduced padding for the narrower promo column. Carries the `Connect Wallet` action and an inline wallet SVG.

**Button — Ghost** `{component.promo-cta-ghost}`. Used on `Enter a Wallet Address`, `Unstake`, `Settings`, `View profile`, `View all`, filter chips. Background `{colors.panel-2}`, border `1px solid {colors.stroke-soft}`, color `{colors.txt-2}`, weight `500`, font-size `12.5–13px`, padding `8px 13px`, radius `10–11px`. **Active:** color brightens to `{colors.txt-1}`; arrow SVGs translate `(2px, -2px)`. **Focus:** same lavender ring as primary.

**Button — Icon-only** `{component.icon-btn}`. Square chrome button used for the bell, settings, panel toolbar. `38×38` (sm: `34×34` inside the Active Positions panel), background `{colors.panel-2}`, border `1px solid {colors.stroke-soft}`, color `{colors.txt-2}`, radius `11px`. The bell hosts a lavender notification badge `{colors.accent}` at `top:-5px; right:-5px`, `16×16`, with a `2px` ring of canvas color to detach it from the icon body.

**Button — Filter Chip** `{component.filter}`. Used in the Trending block-head and tx-card toolbar. Inline flex, gap `7px`, font-size `12.5px`, color `{colors.txt-2}`, background `{colors.panel-2}`, border `1px solid {colors.stroke-soft}`, padding `8px 13px`, radius `10px`. Carries a `.caret` SVG at `{colors.txt-3}`.

**Button — Segmented Toggle** `{component.seg-btn}`. Two-button row (`Staking / Restaking`) at the top of the sidebar. Background `{colors.panel-2}`, border `1px solid {colors.stroke-soft}`, container radius `12px`, inner padding `4px`. Active segment: `background:#222838; color:{colors.txt-1}; box-shadow:0 1px 0 rgba(255,255,255,.03) inset`. Inactive: `color:{colors.txt-3}`.

### Cards & Containers

**Coin Card** `{component.coin-card}`. The flagship tile. Background `linear-gradient(180deg,#171c29,#13171f)`, border `1px solid {colors.stroke}`, radius `18px`, padding `18px`, `min-height:248px`, `position:relative; overflow:hidden`. Layout: header row (asset chip + position label + name + ext-link button), "Reward Rate" `{colors.txt-2}` label, `34px` tabular figure with `.55em` trailing `%`, up/down delta chip, sparkline.

**Promo Card** `{component.promo}`. Lavender gradient surface — explicitly a marketing tile inside the data grid. Carries a rotated hairline shimmer via `::after` (`transform: rotate(35deg)`), a `New` pill, the `Connect Wallet` primary CTA, and the `Enter a Wallet Address` ghost CTA underneath.

**Active Positions Panel** `{component.panel}`. Full-width card, radius `22px`, with `panel-head` (title + 4 icon-btn tools), the featured `stake-card` (left: rewards / right: lock-duration with waveform), then `metric-tabs`, `metric-cards`, and the `tx-card` below — all nested inside the panel.

**Metric Card** `{component.metric-card}`. Compact KPI tile. Background `{colors.card}`, border `1px solid {colors.stroke}`, radius `18px`, padding `14px 16px`. Header: small `mc-label` and an optional `mc-tag` (e.g. `24H`). Body: a tabular `mc-value` with optional `mc-delta.up` inline.

**Transactions Table** `{component.tx-card}`. CSS-grid driven, six-column row. `.tx-th` provides the header row in `{colors.txt-3}`. Each row carries: asset chip + ticker / type pill (`stake / reward / unstake` with colored dot) / tabular amount / date / status pill (`ok / pending / failed`) / right-aligned USD value (`.tx-r`).

**Upsell Tile** `{component.upsell}`. Pinned to the bottom of the sidebar via `margin-top: auto`. Background `linear-gradient(180deg,#15192480,#11141d)`, border `1px solid {colors.stroke-soft}`, radius `14px`, padding `13px`. Lavender lightning glyph in a `32×32` `#222838` square at left.

### Inputs & Forms

**Search Field** `{component.search}`. Compact, height `38px`, padding `0 12px`, background `{colors.panel-2}`, border `1px solid {colors.stroke-soft}`, radius `11px`. Carries a leading `15px` magnifier SVG, the `<input>` (`width:90px`, `font-size:13px`, transparent background, color `{colors.txt-1}`), and a trailing `⌘` kbd hint (`background:#222838; padding:1px 6px; radius:5px`). **Focus:** the input itself drops `outline:none`; container-level focus state is not surfaced in source.

### Footer
The dashboard has no marketing footer. The scroll region ends with the transactions table at `padding-bottom:40px`. The sidebar's `upsell` block acts as the persistent end-of-region anchor.

## Do's and Don'ts

### Do
- Use lavender `{colors.accent}` → `{colors.accent-2}` only for: the Deposit CTA, the notification badge, the active sparkline, the asset-name color in nav, the brand glyph, and the promo surface.
- Set every column-aligned figure to `font-variant-numeric: tabular-nums` so balances and rates align without monospace.
- Apply hairline borders at `1px solid {colors.stroke}` to hold cards together — let strokes do the structural work shadows usually do.
- Reserve `{colors.positive}` / `{colors.negative}` for up/down deltas and one downward chart line; always pair color with an arrow icon.
- Keep coin cards at `min-height:248px` so the trending row holds rhythm regardless of sparkline content.
- Apply `translateY(-2px)` lift plus a heavier lavender shadow on primary CTAs in active state — the only place shadows expand.
- Use the rotated `::after` shimmer on the promo card to differentiate it from data tiles without breaking the monochrome rule.
- Indent the nav-group `.assets` list with a `1px solid {colors.stroke-soft}` left border at `margin-left:12px` — the tree visualization.

### Don't
- Don't introduce a second chromatic accent (teal, orange, saturated pure blue, cyan) anywhere on the page.
- Don't replace inline SVG icons or sparklines with an icon font, an SVG sprite, or a chart library (Recharts, Chart.js, D3).
- Don't add a build step, a framework, or a JS animation library — the two files are the deliverable.
- Don't cast box-shadows on cards; only the lavender CTAs and the notification-badge ring are allowed shadow treatments.
- Don't substitute a monospace face for the numerics — keep Inter and rely on tabular figures.
- Don't tint asset glyph backgrounds with a brand-foreign hue (the Solana gradient stays scoped to the 11–14px chip and never bleeds out).
- Don't document or implement hover states in this designMd — only default, active, and focus are governed here.
- Don't soften the `1px` hairline; it's a load-bearing structural element.
- Don't let body text drift above `14px` — the editorial-terminal density depends on it.
- Don't introduce gradients on text, on borders, or on the page background beyond the single radial sheen.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤ 419px | Not surfaced in source — desktop-first artifact; treat as horizontal scroll fallback |
| Phone | 420–640px | Not surfaced in source — same |
| Large phone | 641–735px | Not surfaced in source — same |
| Tablet portrait | 736–833px | Not surfaced in source — same |
| Tablet landscape | 834–1023px | Recommend collapsing sidebar to icon rail; not implemented in source |
| Small desktop | 1024–1068px | Trending grid may need to collapse to `repeat(2,1fr) + promo` or 2-col |
| Desktop | 1069–1440px | Primary design target — shell fits within `1640px` cap |
| Wide desktop | ≥ 1441px | Shell centers at `max-width:1640px`; canvas extends with radial sheen |

### Touch Targets
- Icon buttons ship at `38×38` (topbar) and `34×34` (panel toolbar — labeled `sm`). Both clear a 32-px minimum on pointer devices, but a 44-px touch minimum is not enforced — flag as a known gap for any mobile adaptation.
- Nav items: `10px 12px` padding gives ~`38px` row height — acceptable for cursor, undersized for touch.
- Filter chips: `8px 13px` padding gives ~`32px` row height — flag as a known gap.

### Collapsing Strategy
- **Sidebar:** in source, the sidebar is `position:sticky; top:0; height:100vh; overflow-y:auto`. The recommended collapse for narrow viewports (not implemented) is to drop the brand-text, asset-meta, and upsell-sub, leaving only the `38×38` brand-logo, the nav `.ic`s, and the upsell-ic — converting the 248-px rail to a ~72-px icon rail.
- **Sub-nav:** the `.assets` list should collapse into the parent nav-item's tooltip; the `1px` left border becomes vestigial in icon-rail mode.
- **Trending grid:** `repeat(3,1fr) 1.05fr` should fall back to `repeat(2,1fr)` with the promo card moving to a full-width row below.
- **Active Positions panel:** the `stake-card` two-column layout (left: rewards / right: lock-duration) should stack vertically when the panel narrows below ~760px.
- **Hero typography:** `block-title` should scale from `26px` to ~`22px` at tablet portrait — not surfaced in source.

### Image Behavior
- The avatar is the single raster image; it ships at fixed `34×34` with `object-fit:cover` and does not need srcset.
- No lazy-loading is configured; the asset weights are dominated by Inter (Google Fonts) and the inline SVG markup.

## Iteration Guide

1. Add new components by composing existing tokens — every new tile inherits `{colors.card}` + `1px solid {colors.stroke}` + `radius:18px` unless it's explicitly a panel (then `22px`) or a pill (then `9999px`).
2. Variants live inside the component, not as new components — a new metric card adds a modifier class to `.metric-card`, never a fresh card primitive.
3. Always reference tokens by name (`{colors.accent}`) instead of inlining hex. The lavender ramp is the single point of brand control.
4. Never document hover states in this file; only `default / active / focus` are governed. Hover micro-motion remains in `styles.css` as decorative polish, not contract.
5. Display family vs body family is a non-rule here — Inter carries both. New roles must specify weight + size + tracking only.
6. Shadows remain restricted to the lavender CTA class. Any new elevation must use hairline `{colors.stroke}` or the warm-to-cool gradient inside `.coin-card`.
7. When extending the chrome (more topbar buttons, sidebar groups), reuse `{colors.panel-2}` + `{colors.stroke-soft}` — chrome and surfaces have distinct palettes and should not bleed.

## Known Gaps

- Responsive breakpoints below `~1024px` are not surfaced in the source CSS — the prompt is desktop-first by design.
- Touch-target minimums (44px) are not honored at icon-btn (`38px`) or filter chip (`~32px`) sizes; a mobile adaptation requires sizing up.
- Focus rings are not explicitly defined in source; the file recommends a `2px` lavender ring at `rgba(139,123,255,.45)` but this is not enforced in `styles.css`.
- Input validation states (error / success / disabled) for the search field are not surfaced.
- Light mode does not exist — the design is dark-only by contract.
- Empty / loading / error states for the transactions table and metric cards are not surfaced; only happy-path content ships in the artifact.
