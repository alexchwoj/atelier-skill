---
version: "1"
name: "Glassy — Liquid-Glass DeFi Landing on Solana"
description: "A single-page liquid-glass DeFi landing built on Solana. Pitch-black canvas (#000), full-viewport WebGL shader stack (Swirl + ChromaFlow + FlutedGlass + FilmGrain), cyan-only accent (#22D3EE) and CTA blue (#0EA5E9). No purple, indigo, magenta, or warm-orange anywhere. System sans-serif (no Google Fonts), 3D mouse-tilt feature cards, sticky pill nav, asymmetric glass cards with decorative product imagery."
colors:
  background: "#000000"
  text-primary: "#FFFFFF"
  text-muted: "rgba(255,255,255,0.55–0.85)"
  hairline: "rgba(255,255,255,0.10–0.15)"
  glass-surface: "rgba(255,255,255,0.06–0.08)"
  accent-cyan: "#22D3EE"
  cta-blue: "#0EA5E9"
  cta-blue-hover: "#0284C7"
  solana-brand-1: "#9945FF"
  solana-brand-2: "#14F195"
  shader-base-a: "#0a0a0a"
  shader-base-b: "#1e293b"
typography:
  display:
    fontFamily: "System sans-serif (Tailwind default)"
    weights: "400 / 500 / 600"
    role: "headlines + body, antialiased, no Google Fonts loaded"
  mono:
    fontFamily: "—"
    weights: "—"
    role: "no separate mono face — APY and stat numbers use `tabular-nums` on the same system sans"
spacing:
  base: "Tailwind v3 default (4px)"
  container: "max-w-[1440px], px-5 sm:px-8 lg:px-12 (20 → 32 → 48px)"
  section: "py-16 sm:py-24 (64 → 96px); Hero special-cased to min-h-[calc(100vh-80px)]"
  nav-rhythm: "Trade ← 100px → Pools ← 100px → LOGO ← 100px → Stake ← 100px → Docs"
rounded:
  pill: "9999px (nav, CTA buttons, badges)"
  card-md: "16px (.liquid-glass utility)"
  card-lg: "20px (.liquid-glass-strong utility)"
  card-xl: "rounded-2xl / rounded-3xl (Featured + Benefits + Final CTA)"
components:
  shader-stack: "Fixed full-viewport WebGL background. Four layered effects in exact order: Swirl(colorA:#0a0a0a, colorB:#1e293b, detail:1.7) → ChromaFlow(momentum:13, radius:3.5, all 4 directions #22d3ee) → FlutedGlass(angle:0, speed:0.3, aberration:0.61, refraction:4, shape:rounded) → FilmGrain(strength:0.06). `pointer-events-none` is mandatory."
  tilt-card: "3D mouse-tracking via direct DOM transform on `useRef` (NOT React state). rotateX/rotateY 0–8° (intensity=8), CSS vars `--mx --my` drive a 400px radial-gradient cyan spotlight. Parent grid needs `[perspective:1200px]`; element runs `perspective(1000px)` internally."
  scroll-text: "CTA label duplicated vertically inside `overflow-hidden h-[20px]`. On group-hover the inner flex column translates `-translate-y-1/2` over 500ms `cubic-bezier(0.25,0.1,0.25,1)`."
  cta-button: "Cyan `#0EA5E9` pill with white inner circle housing `<ArrowRight size={14} />`. Arrow rotates `-45deg` on group-hover; bg shifts to `#0284C7`."
  pill-nav: "Sticky top-0, `bg-white/[0.08] backdrop-blur-2xl backdrop-saturate-150 border border-white/15 rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.3)]`. Shrinks to content width on md+."
  bottom-sheet: "Mobile menu slides from `translate-y-full → translate-y-0` over 500ms `cubic-bezier(0.32,0.72,0,1)`, backdrop `bg-black/70` fades 300ms."
---

# Glassy — Liquid-Glass DeFi Landing on Solana

> Fivefold showcase. Pairs with the Glassy prompt. Use this file when adapting the template for sister DeFi protocols — keep the shader stack, tilt physics, and cyan-only restraint intact.

## Overview

Glassy is a single-page landing for a liquid-glass DeFi protocol on Solana that routes every swap, stake, and bridge through the lowest-latency path with sub-second finality. The canvas is pitch-black. A four-layer WebGL shader (Swirl → ChromaFlow → FlutedGlass → FilmGrain) drifts behind every section, following the cursor and refracting under every glass card. The only typeface is the OS default sans — instant first paint, native feel on every device.

The governing decision: **the page is the product demo.** Most DeFi landings reach for purple gradients, glow rings, animated charts, and hero illustrations to fake premium. Glassy refuses all of it. There are no Google Fonts (the system sans loads instantly, feels native, and forces the visual weight onto the shader). There is no purple, no indigo, no magenta, no warm-orange — only black, white, cyan `#22D3EE`, and CTA blue `#0EA5E9`. There is no charting library, no Lottie, no GSAP — the marquee effect is a four-layer WebGL stack (Swirl + ChromaFlow + FlutedGlass + FilmGrain) that follows the cursor and refracts behind every card. The bet: a DeFi protocol that feels this calibrated under the cursor reads as a DeFi protocol that is this calibrated under the hood.

The system extends by holding three invariants across every surface: pitch-black floor with white text and alpha-on-black muting (never grey), a single cyan accent that owns APYs / eyebrows / spotlights / shader blobs, and one CTA blue that owns the only button that matters ("Launch App"). When the system is ported to a sister DeFi product, the shader stack, tilt physics, easing curves, breakpoints, and 4-icon set stay frozen; only the brand swap, copy, and product PNGs move.

**Key Characteristics:**

- **Pitch-black canvas** (`{colors.background}` — #000000) with white text. All muted text is `rgba(255,255,255,0.55–0.85)` — never grey, always alpha-on-black.
- **Cyan-only accent** — `{colors.accent-cyan}` (#22D3EE) for APY numbers, eyebrows, ChromaFlow blobs, hover glows. CTA blue `{colors.cta-blue}` (#0EA5E9) for "Launch App". **No purple, indigo, magenta, or warm-orange anywhere.** Solana brand stops (`#9945FF` → `#14F195`) appear only inside the official SolanaMark SVG.
- **System sans-serif** at 400 / 500 / 600 — no Google Fonts, no Inter, no Geist. First paint is instant; type feels native on every OS.
- **Fixed full-viewport WebGL shader** drifts behind every section, follows the cursor, and is `pointer-events-none` so it never blocks interaction.
- **3D tilt feature cards** — `mousemove` writes directly to `element.style.transform` via `useRef`, never React state. Grid wrapper carries `[perspective:1200px]`; each card runs `perspective(1000px)` and tilts up to 8°.
- **Asymmetric Benefits grid** — Articles 1 + 2 sit side-by-side, Article 3 spans `md:col-span-2` underneath. Decorative product PNGs leak off the right edge on mobile (`-right-4 / -right-6`), pull back inside on lg+.
- **Cyan spotlight follows the cursor** inside every tilt card via CSS vars `--mx --my` driving a 400px radial-gradient overlay.
- **One CTA, one accent, one typeface** — the discipline is the design.

## Colors

> **Source pages analyzed:** Glassy single-page landing (Nav + Mobile Sheet + Hero + Featured Tilt grid + Benefits asymmetric grid + Final CTA + Footer). Eleven tokens total. No Tailwind palette extension — everything goes through arbitrary values (`bg-[#0EA5E9]`, `text-[#22D3EE]`).

### Canvas & Surface

- **Background** (`{colors.background}` — #000000): Root `bg-black`. The shader stack sits on top of this, but pure black is the floor under every section. No off-black, no near-black.
- **Glass surface** (`{colors.glass-surface}` — rgba(255,255,255,0.06–0.08)): Featured cards, Benefits cards, nav pill, "Powered by Solana" pill, Final CTA card. Always pair with `backdrop-blur-xl` or `backdrop-blur-2xl` + `backdrop-saturate-150` so the shader can read through.

### Text

- **Text primary** (`{colors.text-primary}` — #FFFFFF): All headings and body. No off-white, no near-white.
- **Text muted** (`{colors.text-muted}` — rgba(255,255,255,0.55–0.85)): Subtitles, paragraphs, nav links, secondary metadata. The alpha is the only muting mechanism — there is no grey ramp.

### Hairlines & Borders

- **Hairline** (`{colors.hairline}` — rgba(255,255,255,0.10–0.15)): Glass card borders, footer dividers, Final CTA card border, nav pill border. Always single-pixel; never widened beyond 1px.

### Brand & Accent

- **Accent cyan** (`{colors.accent-cyan}` — #22D3EE): APY numbers, eyebrows ("All you need"), ChromaFlow blob colors, hover spotlight glow, middle-card highlight border + cyan shadow `shadow-[0_0_40px_-12px_rgba(34,211,238,0.25)]`.
- **CTA blue** (`{colors.cta-blue}` — #0EA5E9): "Launch App" button background only.
- **CTA blue hover** (`{colors.cta-blue-hover}` — #0284C7): Active/hover state of the cyan CTA pill.

### Brand Gradient (Locked)

- **Solana brand 1** (`{colors.solana-brand-1}` — #9945FF) → **Solana brand 2** (`{colors.solana-brand-2}` — #14F195): Appears strictly inside the SolanaMark SVG gradient and the pulsing `#14F195` status-badge dot. Never used as a UI accent. The only "purple" allowed on the page lives inside an official Solana mark.

### Shader Tokens (WebGL only)

- **Shader base A** (`{colors.shader-base-a}` — #0a0a0a) / **Shader base B** (`{colors.shader-base-b}` — #1e293b): Swirl colorA/colorB. The only "dark blue" on the page lives inside the WebGL layer.

**Constraint** (verbatim from prompt): *Do not use purple, indigo, magenta, or warm-orange accents anywhere. The only accent is cyan `#22D3EE` and CTA blue `#0EA5E9`.*

## Typography

### Font Family

- **Display + Body:** Tailwind default `font-sans` stack — `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`. No Google Fonts, no Inter, no Geist.
- **Numeric stats:** same family with `tabular-nums` enabled so APYs, TVL, and staker counts stay column-aligned across cards.
- **OpenType features:** `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;` applied to `body`. No `font-feature-settings` overrides — let the OS sans render natively.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| Hero H1 | `clamp(2rem, 7.5vw, 4.6rem)` mobile / `clamp(2.8rem, 5.5vw, 4.6rem)` sm+ | 500 | 1.05 | -0.035em | "Premium DeFi engineered for the speed of Solana." |
| Benefits H2 | `clamp(1.75rem, 5vw, 3rem)` | 500 | 1.1 | -0.025em | "One protocol. Every Solana primitive." |
| Final CTA H2 | `clamp(1.85rem, 5.5vw, 3.4rem)` | 500 | 1.05 | -0.03em | "Start earning the most efficient yields on Solana." |
| Article 1 hero word | `clamp(2rem, 5vw, 3.25rem)` | 500 | 1.02 | -0.03em | "All-in-One / Platform" (second word at `text-white/40`) |
| Tilt card H3 | 28–34px (`text-[28px] sm:text-[34px]`) | 500 | leading-none | tracking-tight | "SOL/USDC", "mSOL" |
| APY stat | 22–26px (`text-[22px] sm:text-[26px]`) | 500 | tight | tracking-tight, tabular-nums | "28.5% APY", "47% APY" — colored `{colors.accent-cyan}` |
| Card title (small) | 15–16px | 500 | tight | tracking-tight | "Customization in Minutes", "Top-Notch Development" |
| Eyebrow / label | 13–14px | 400–500 | normal | tracking-wide | "All you need" — colored `{colors.accent-cyan}` |
| Body / paragraph | 13–17px | 400 | leading-relaxed | normal | Hero copy, card descriptions |
| Nav link | 14px | 400 | normal | normal | Trade · Pools · Stake · Docs at `text-white/85` |
| Footer link | 13px | 400 | normal | normal | Product / Resources / Community / Legal columns at `text-white/55` |
| Micro / legal | 12px | 400 | normal | normal | Copyright + risk warning at `text-white/45` |

### Principles

- **Negative letter-spacing at display sizes.** Every H1/H2 carries `-0.025em` to `-0.035em`. Optical tightening that the system sans needs at large sizes.
- **Weight 500 is the workhorse.** Headlines never reach 700/800. The restraint of medium weight is the voice.
- **Muting is alpha, not grey.** `text-white/55`, `text-white/70`, `text-white/85` — never `text-gray-400`. The shader reads through the alpha; a grey ramp would block it.
- **Numbers use `tabular-nums`.** APYs, staker counts, TVL — all column-aligned. Decorative figures that don't compare (e.g., "v1.4") skip it.
- **`clamp()` does the responsive work.** No paired `text-base sm:text-lg lg:text-xl` ladders for headlines — one fluid `clamp()` per H1/H2.
- **Line breaks are intentional.** Hero H1 carries a hardcoded `<br />` plus a mobile-only inline-space fallback. Don't reflow.
- **No synthesized weights.** If the OS sans doesn't ship a 500, fall back natively — never `font-synthesis: weight`.

### Note on Font Substitutes

The page is built on whatever sans the OS ships. If a port needs a specific brand face (e.g., custom Geist, Söhne, or Inter), preload it with `font-display: swap`, keep weights at 400/500/600, and re-tune Hero H1 tracking +0.005em to compensate for tighter modern grotesques. Never substitute a serif or a slab — the optical balance of the cyan accents depends on a neutral sans.

## Layout

### Spacing System

- **Base unit:** Tailwind v3 default 4px scale (`p-1` = 4px, `p-2` = 8px, …).
- **Container padding:** `px-5 sm:px-8 lg:px-12` → **20 / 32 / 48px**.
- **Section vertical rhythm:** `py-16 sm:py-24` → **64 / 96px**. Hero special-cased to `min-h-[calc(100vh-80px)]`.
- **Card padding:** `p-6 sm:p-7` (24–28px) for Featured tilt cards; `p-6 sm:p-8 lg:p-10` (24–32–40px) for Benefits cards; `px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20` (24/48 → 48/64 → 64/80px) for Final CTA card.
- **Grid gaps:** `gap-3 sm:gap-4` (12 → 16px) for tight Featured + Benefits grids. `gap-8 sm:gap-10` (32 → 40px) for footer columns.
- **Nav rhythm (locked):** `Trade ← 100px → Pools ← 100px → [LOGO] ← 100px → Stake ← 100px → Docs`. Symmetry only works with 4 nav items.

### Grid & Container

- **Max content width:** `max-w-[1440px] mx-auto` on every section (Hero, Featured, Benefits, Final CTA, Footer).
- **Featured tilt grid:** `grid-cols-1 md:grid-cols-3` — 3 cards side by side at md+. Wrapper carries `[perspective:1200px]` (mandatory).
- **Benefits 2×2 asymmetric grid:** `grid-cols-1 md:grid-cols-2`. Article 1 + Article 2 sit side-by-side; Article 3 spans `md:col-span-2` underneath.
- **Footer grid:** `grid-cols-2 sm:grid-cols-3 lg:grid-cols-6`. Brand column spans `col-span-2 lg:col-span-2`; 4 link columns occupy the rest.
- **Nav pill:** `max-w-[1440px] w-full justify-between` on mobile; `md:max-w-fit md:w-fit md:justify-center` on md+ — shrinks to content width.

### Whitespace Philosophy

Whitespace is the floor that makes the shader visible. The Hero bottom-aligns via a `flex-1` spacer pushing all content to the bottom of the viewport — the top 40% of the screen is intentionally empty so the WebGL Swirl and ChromaFlow blobs can breathe. Card padding is generous (24–40px) so glass surfaces don't crowd the cyan spotlight. Between sections, 96px of `py-24` lets each glass island sit on its own pool of shader. The page is not afraid of empty rectangles — they are not empty, they are the shader.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat (z-0) | Fixed shader stack, `pointer-events-none` | Global background floor |
| Soft hairline | `border border-white/10` to `border-white/15` | Every glass card, nav pill, Final CTA card |
| Backdrop blur | `backdrop-blur-xl` / `backdrop-blur-2xl` + `backdrop-saturate-150` | Glass surfaces, nav pill, bottom sheet |
| Product shadow | `shadow-[0_4px_30px_rgba(0,0,0,0.3)]` (nav) / `shadow-[0_0_40px_-12px_rgba(34,211,238,0.25)]` (middle tilt card) | Discrete elevation moments only |

**Shadow philosophy.** Shadows are rare and intentional. The nav pill earns one because it floats above content; the middle Featured tilt card earns a cyan-tinted shadow because it is the highlighted vault. Every other glass card lifts via backdrop blur + hairline alone — the shader does the depth work.

**Decorative Depth**

- **Cyan blur blobs:** every Benefits card carries a `w-72 h-72 rounded-full bg-[#22D3EE]/15` to `/20 blur-3xl` ambient blob, absolutely positioned outside the card edge (`-top-24 -right-16`, `-bottom-24 -left-20`). Static — no animation.
- **Spotlight glow:** `radial-gradient(400px circle at var(--mx,50%) var(--my,50%), rgba(34,211,238,0.18), transparent 60%)` fades in over 500ms on tilt-card group-hover. Middle card boosts to `0.28`.
- **Shader refraction:** FlutedGlass `aberration={0.61} refraction={4}` distorts whatever sits below the card edges, creating optical depth without a single CSS shadow.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| none | 0 | Hairline dividers only |
| pill-sm | 9999px | Badges, status pills, "Powered by Solana" pill, nav pill, all CTA buttons |
| `{rounded.card-md}` | 16px | `.liquid-glass` utility (kept available for future dense cards) |
| `{rounded.card-lg}` | 20px | `.liquid-glass-strong` utility |
| rounded-2xl | 16px | Featured tilt cards, Benefits glass cards, mobile bottom sheet |
| rounded-3xl | 24px | Final CTA card |
| circle | 50% (`rounded-full`) | Pulse dot (`bg-[#14F195]`), inner CTA arrow circle, decorative blur blobs |

### Photography Geometry

- **Logo PNG (`glassy-logo.png`):** 983×601 native, height-based sizing (`h-7 sm:h-8 lg:h-9 w-auto`). Aspect locked by `object-contain`; never crop.
- **Section 1 (block cluster):** rendered with `mix-blend-screen` inside the Top-Notch Development card so white particles dissolve into the dark glass. Width scales `w-72 sm:w-[340px] lg:w-[420px]`.
- **Section 2 (stake UI slider):** `opacity-90` inside All-in-One Platform. Width scales `w-64 sm:w-80 lg:w-[360px]`.
- **Section 3 (Solana particle globe):** `opacity-90` inside Cross-Chain Ecosystem. Width scales `w-64 sm:w-80 lg:w-[420px]`.
- **Edge-leak behavior:** all decorative PNGs use negative `-right-4 / -right-6` on mobile so they spill off the card edge cinematically, then pull back inside on `lg+` (`right-0` / `lg:right-6`).
- **No radius on imagery:** PNGs are decorative overlays absolutely-positioned inside `overflow-hidden` glass cards. The card's `rounded-2xl` clips them; no `rounded-*` on the `<img>` itself.
- **No lazy-loading.** Hero is bottom-aligned and decorative images are below the fold but still part of the cinematic first scroll — load eagerly.

## Components

### Top Navigation

**Sticky pill nav** `{component.pill-nav}`. Wrapper: `sticky top-0 p-2 sm:p-3`, z-index dynamically bumps to `z-[60]` when the mobile menu opens (otherwise `z-30`). Pill: `bg-white/[0.08] backdrop-blur-2xl backdrop-saturate-150 border border-white/15 rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.3)]`. Layout: `flex items-center justify-between md:justify-center gap-2 px-2 md:px-[50px] py-2.5 sm:py-3 max-w-[1440px] md:max-w-fit md:w-fit mx-auto`. Logo image only — no text label in nav. **Default:** `text-white/85`. **Active:** `text-white`. **Focus:** browser default outline; do not strip.

**Mobile bottom sheet** `{component.bottom-sheet}`. Backdrop `bg-black/70` fades `opacity-0 → 100` over 300ms. Sheet `bg-black/80 backdrop-blur-2xl backdrop-saturate-150 border border-white/10 rounded-2xl mt-auto mx-3 mb-3 px-6 pt-6 pb-8`. Slides `translate-y-full → translate-y-0` over 500ms `cubic-bezier(0.32,0.72,0,1)`. Top meta row carries `<Clock size={14} />` + UTC time + "Mainnet beta". Nav links rendered as `text-[28px] sm:text-[32px] font-medium`.

### Buttons

**Button — Primary CTA (cyan "Launch App")** `{component.cta-button}`. `bg-[#0EA5E9] hover:bg-[#0284C7] text-white text-[13px] sm:text-[14px] font-medium pl-5 sm:pl-6 pr-2 py-2 rounded-full`. White inner circle `w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-[#0EA5E9]` housing `<ArrowRight size={14} />`. **Default:** bg `{colors.cta-blue}`, arrow at 0°. **Active:** bg `{colors.cta-blue-hover}`, arrow rotates `-45deg`, label runs `ScrollText` vertical scroll over 500ms `cubic-bezier(0.25,0.1,0.25,1)`. **Focus:** inherit browser outline.

**Button — Secondary "Read the docs" (glass)** `{component.button-secondary}`. `bg-white/[0.06] hover:bg-white/[0.12] backdrop-blur-md border border-white/15 text-white text-[14px] font-medium px-6 py-2.5 rounded-full`. Sits next to the primary CTA in the Final CTA section. **Default:** glass surface alpha 0.06. **Active:** alpha 0.12. **Focus:** inherit browser outline.

**Button — Mobile menu trigger (utility)** `{component.button-utility}`. `bg-white hover:bg-gray-100 text-gray-900 text-[13px] font-medium pl-4 pr-3 py-2 sm:py-2.5 rounded-full`. Inverted: white pill on dark canvas, the only place gray-900 text appears on the page. Houses `'Menu'` + `<Menu size={14} />` or `'Close'` + `<X size={14} />`.

### Cards & Containers

**Card — Featured tilt (default)** `{component.card-tilt}`. `group relative bg-white/[0.06] backdrop-blur-xl backdrop-saturate-150 border border-white/10 rounded-2xl p-6 sm:p-7 overflow-hidden min-h-[260px] sm:min-h-[280px] flex flex-col cursor-pointer`. Wraps in `<TiltCard intensity={8}>`. **Default:** rotation 0°, spotlight opacity 0. **Active (group-hover):** rotateX/Y up to 8° on cursor position, spotlight `radial-gradient(400px circle at var(--mx,50%) var(--my,50%), rgba(34,211,238,0.18), transparent 60%)` fades to 1 over 500ms.

**Card — Featured tilt (highlighted middle)** `{component.card-tilt-featured}`. Adds gradient + cyan border + cyan shadow: `bg-gradient-to-br from-[#22D3EE]/[0.08] via-white/[0.06] to-white/[0.04] border border-[#22D3EE]/25 shadow-[0_0_40px_-12px_rgba(34,211,238,0.25)] flex flex-col items-center justify-center text-center`. Spotlight opacity boosts to `0.28`.

**Card — Benefits glass article** `{component.card-benefit}`. `relative bg-white/[0.06] backdrop-blur-xl backdrop-saturate-150 border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 overflow-hidden flex flex-col min-h-[280px] sm:min-h-[340px]`. Houses a decorative product PNG absolutely positioned right-edge + an ambient `w-72 h-72 rounded-full bg-[#22D3EE]/15` to `/20 blur-3xl` blob. Text width capped at `max-w-[55%]` to `max-w-[60%]` so copy never overlaps imagery.

**Card — Final CTA** `{component.card-final-cta}`. `bg-white/[0.06] backdrop-blur-2xl backdrop-saturate-150 border border-white/15 rounded-3xl px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 text-center overflow-hidden relative`. The only `rounded-3xl` surface on the page.

### Inputs & Forms

**Input — not surfaced** `{component.input}`. The Glassy landing carries no form inputs (no email capture, no newsletter, no wallet-connect modal). The closest analog is the "Powered by Solana" pill: `bg-white/[0.08] backdrop-blur-md backdrop-saturate-150 border border-white/15 rounded-full pl-3 pr-2 sm:pl-3.5 sm:pr-2.5 py-1.5 sm:py-2 shadow-[0_2px_8px_rgba(0,0,0,0.25)]`. **Default:** glass surface alpha 0.08, shadow soft. **Active:** shadow deepens to `[0_4px_16px_rgba(0,0,0,0.35)]` over 500ms. **Focus:** inherit browser outline (none present yet — see Known Gaps).

### Footer

**Footer** `{component.footer}`. `relative z-10 px-5 sm:px-8 lg:px-12 max-w-[1440px] mx-auto pb-10 sm:pb-12 pt-8 border-t border-white/10`. Two-row layout: `grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-10 mb-12` (brand col-span-2 + 4 link columns) on top, `flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-6 border-t border-white/10` on bottom. The brand row is the ONLY place "Glassy" appears as a text label next to the logo — nav uses the logo image only. Link colors: `text-white/55 hover:text-white transition-colors duration-300`.

## Do's and Don'ts

### Do

- **Use** `{colors.accent-cyan}` (#22D3EE) for every accent — APY numbers, eyebrows, ChromaFlow blob colors, spotlight glows, middle-card highlight border.
- **Reserve** `{colors.cta-blue}` (#0EA5E9) for "Launch App" only. It is the one button that matters.
- **Apply** `backdrop-blur-xl` or `backdrop-blur-2xl` + `backdrop-saturate-150` to every glass surface so the shader reads through.
- **Set** `pointer-events-none` on the fixed shader stack and on every decorative PNG. The cursor must reach the content underneath.
- **Keep** the 100px nav rhythm (Trade ← 100px → Pools ← 100px → LOGO ← 100px → Stake ← 100px → Docs). The symmetry only works with 4 items.
- **Use** `tabular-nums` on every numeric stat (APY, TVL, staker count) so columns align across cards.
- **Mutate** TiltCard transform via direct DOM (`useRef` + `element.style.transform`). Never use React state for `mousemove`.
- **Wrap** the Featured grid in `[perspective:1200px]` and each tilt card in `perspective(1000px)`. Without both, tilt children render flat.
- **Render** muted text as `text-white/55` to `text-white/85`. Alpha-on-black is the only mute mechanism.
- **Honor** `prefers-reduced-motion` for any future scroll additions; the shader keeps running because it is ambient, not a transition.

### Don't

- **Don't** load Google Fonts, Inter, Geist, or any custom face. The system sans is the typeface.
- **Don't** use purple, indigo, magenta, or warm-orange anywhere. The Solana brand gradient (`#9945FF` → `#14F195`) is allowed only inside the official SolanaMark SVG.
- **Don't** introduce a grey ramp (`text-gray-400`, `text-zinc-500`, etc.). Mute via white alpha, never grey hex.
- **Don't** swap shader props. `Swirl detail={1.7}`, `ChromaFlow momentum={13} radius={3.5}`, `FlutedGlass angle={0} speed={0.3} aberration={0.61}`, `FilmGrain strength={0.06}` are tuned.
- **Don't** add a charting library, Lottie, AOS, or GSAP. The shader is the only ambient motion.
- **Don't** widen hairlines beyond 1px. `border-white/10` to `border-white/15` is the entire border vocabulary.
- **Don't** synthesize font weights. If the OS sans lacks a 500, fall back natively.
- **Don't** add radii to decorative PNGs — they sit inside `overflow-hidden` glass cards that clip them.
- **Don't** add a hover scale or translate on the Featured tilt cards. The 3D rotation + spotlight is the entire interaction.
- **Don't** drop the `flex-1` spacer in the Hero. The bottom-aligned headline is deliberate.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤419px | Hero H1 floors at `clamp(2rem,…)`; CTA row stacks `flex-col`; product PNGs leak `-right-4` to `-right-6`; nav pill spans width with `justify-between` |
| Phone | 420–640px | Same as small phone; Benefits cards `min-h-[280px]`; Featured cards `min-h-[260px]` |
| Large phone | 641–735px | sm: kicks in at 640 → padding goes `px-5 → px-8`; section rhythm goes `py-16 → py-24`; CTA row becomes `flex-row` |
| Tablet portrait | 736–833px | Hero H1 shifts to `clamp(2.8rem,5.5vw,4.6rem)`; type scale lifts everywhere via sm: |
| Tablet landscape | 834–1023px | md: kicks in at 768 → nav pill shrinks to `w-fit max-w-fit md:justify-center`, 4 nav links visible, Menu button hides; Benefits grid becomes 2 columns; Featured tilt grid becomes 3 columns |
| Small desktop | 1024–1068px | lg: kicks in at 1024 → padding goes `px-8 → px-12`; Benefits product PNGs grow to `w-[360px]`/`w-[420px]` and pull inside the card (`right-0` / `lg:right-6`); footer becomes 6-column grid |
| Desktop | 1069–1440px | Full grid layouts visible; container caps at `max-w-[1440px]` |
| Wide desktop | ≥1441px | Container locks at 1440px; lateral margins absorb the extra width — no further scaling |

### Touch Targets

- **Minimum size:** 44×44px tap target. The Cyan CTA inner circle is 28px (sm) / 32px (lg) but the parent `<a>` pill carries `py-2` to `py-2.5` so the full hit area clears 44px.
- **Mobile menu trigger:** `pl-4 pr-3 py-2 sm:py-2.5` → 40–48px tall, clears the rule.
- **Nav links:** `text-[14px]` with the pill's `py-2.5 sm:py-3` giving ~44px row height.
- **Footer links:** `gap-2.5` between rows for finger separation; individual link rows are tighter (~24px) but the page is content-driven, not control-driven.

### Collapsing Strategy

- **Nav:** 4 links + center logo on md+; mobile collapses 4 links into a bottom sheet, logo stays left, "Menu" pill goes right.
- **Hero:** double `clamp()` ranges per breakpoint so headline doesn't blow out; `max-w-[16ch]` constrains mobile to two visual lines, removed at sm+; CTA row goes `flex-col → flex-row` at sm.
- **Featured tilt grid:** stacks 1 column on mobile, expands to 3 columns at md+. The mirror layout between Card 1 and Card 3 is preserved at every width.
- **Benefits asymmetric grid:** all 3 articles stack on mobile; at md+ Article 1 + Article 2 sit side-by-side, Article 3 spans both columns underneath.
- **Decorative imagery:** "leaks" off the right edge on mobile (`-right-4 / -right-6`) for cinematic feel; pulls inside the card on lg+ (`right-0 / lg:right-6`).
- **Footer:** 2-column grid on mobile (brand col-span-2 + first 4 links wrap), 3-column at sm, 6-column at lg.

### Image Behavior

- **No `srcset`.** All decorative PNGs are single-resolution and width-capped by Tailwind utilities (`w-64 sm:w-80 lg:w-[420px]`).
- **No lazy-loading.** Decorative images are part of the first cinematic scroll — load eagerly so glass cards never appear with empty right halves.
- **`aria-hidden="true"` + `alt=""` + `draggable={false}` + `select-none`** on every decorative `<img>`.
- **`mix-blend-screen`** on `section-1.png` only — blends white particles into the dark glass; never apply blend modes to other PNGs.
- **Logo aspect:** preserved via `object-contain` + height-only sizing. Never set a fixed width.

## Iteration Guide

1. **Add new sections by cloning the Benefits glass card pattern** — `bg-white/[0.06] backdrop-blur-xl backdrop-saturate-150 border border-white/10 rounded-2xl`. Do not invent new surface treatments; the page has exactly one glass recipe.
2. **Variants live as component props, not new components.** TiltCard accepts `intensity`; Cyan CTA accepts a `size` prop (small Hero / large Final CTA). Don't fork the component.
3. **Reference tokens, never hex.** Use `{colors.accent-cyan}` in spec / `bg-[#22D3EE]` in code. If a hex appears that isn't in the YAML front-matter, it's a violation.
4. **Never document hover.** Apple convention — describe default / active / focus only. Hover is browser-implicit and degrades gracefully on touch.
5. **Display vs body family — same family, different weight.** Headlines at 500, body at 400. Don't introduce a second face.
6. **Shadows are rare — restrict to nav + middle Featured card.** New components default to backdrop-blur + hairline; only earn a shadow if they float above other content.
7. **Chrome vs surface:** chrome (nav pill, mobile sheet, "Powered by Solana" pill) uses `bg-white/[0.08]` + `backdrop-blur-2xl`. Surface (Featured cards, Benefits cards) uses `bg-white/[0.06]` + `backdrop-blur-xl`. Keep the two recipes distinct.

## Known Gaps

- **Form input states not surfaced.** The landing has no email capture, newsletter, wallet-connect modal, or search field. Validation / error / disabled states are undocumented because no input exists.
- **Dark mode is the only mode.** The system is built on pitch-black canvas with white alpha-on-black muting. A light theme would invert the entire color model and is not described — building one requires a new design pass.
- **Focus rings not customized.** Buttons rely on browser-default `:focus-visible` outlines. A branded focus ring (cyan 2px offset 2px on black) is not specified.
- **Specific blur radii are token-level (`xl` / `2xl`) not pixel-level.** The exact backdrop-blur px values are Tailwind defaults (24px / 40px); changing the underlying Tailwind config would shift the entire glass system.
- **Dynamic content (loading skeletons, empty states, error toasts) not documented.** The page is a marketing landing; no live data states are shown.
- **Keyboard navigation for the mobile bottom sheet not specified.** Backdrop click closes; Esc-to-close and focus-trap behavior are not described.
