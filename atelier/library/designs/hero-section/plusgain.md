---
version: "1"
name: "Plusgain — Liquid-Glass AI Hero with Live Color-Bend Shader"
description: "A single-screen hero for an AI design plugin. Deep blue-violet base (`hsl(260 87% 3%)`), off-white type (`hsl(40 6% 95%)`), a live WebGL color-bend shader drifting and reacting to the cursor, a liquid-glass button system, and an oversized 220px General Sans headline where the word 'AI' burns through a fixed indigo → violet → amber gradient (#6366f1 → #a855f7 → #fcd34d). No motion library — animation is the shader and a 20s linear marquee. Nothing else."
colors:
  background: "hsl(260 87% 3%)"
  foreground: "hsl(40 6% 95%)"
  hero-sub: "hsl(40 6% 82%)"
  brand-indigo: "#6366f1"
  brand-violet: "#a855f7"
  brand-amber: "#fcd34d"
  blur-shape: "bg-gray-950 / opacity-90 / blur-[82px]"
  hairline: "hsl(40 6% 95% / 0.12)"
typography:
  display:
    fontFamily: "General Sans (Fontshare CDN)"
    weights: "400 / 500 / 600 / 700"
    role: "hero <h1> only — `font-display text-[220px] leading-[1.02] tracking-[-0.024em]`"
  body:
    fontFamily: "Geist Sans (@fontsource/geist-sans)"
    weights: "400 / 500 / 600 / 700"
    role: "everything else — nav, subtitle, CTA, marquee logos, buttons"
spacing:
  base: "Tailwind 3 default (4px)"
  nav-pad: "px-8 py-5"
  hero-headline: "fixed text-[220px] — never clamp()"
  cta: "mt-[25px] px-[29px] py-[24px]"
  marquee-container: "max-w-5xl mx-auto, inner gap-12, track gap-16"
rounded:
  none: "rounded-none (hairline divider)"
  tile: "rounded-lg / 8px (6×6 liquid-glass marquee initials)"
  logo: "rounded-[9px] (logo + favicon glyph)"
  pill: "rounded-full (Sign Up + Install Plusgain CTAs)"
components:
  color-bends-shader: "GLSL fragment shader rendered via three.js (OrthographicCamera + PlaneGeometry(2,2)). 18 uniforms — uTime, uPointer, uWarpStrength, uIntensity, uBandWidth, etc. Drifts continuously, bends toward the cursor (window-level pointermove, lerp factor 8), color stops fixed to the three brand stops."
  liquid-glass: "Custom .liquid-glass utility — `rgba(255,255,255,0.01)` fill, `background-blend-mode: luminosity`, `backdrop-filter: blur(4px)`, `box-shadow: inset 0 1px 1px rgba(255,255,255,0.1)`, and a ::before mask-composite hairline that paints a top→bottom white edge. Applied to Sign Up, Install Plusgain, and every marquee tile."
  hero-button: "cva-based <Button> with `heroSecondary` variant: `liquid-glass rounded-full text-foreground hover:bg-white/[0.06] active:scale-[0.98]`."
  blur-shape: "984×527 absolute div, opacity-90, blur-82px, behind headline — darkens the colorful shader so type stays legible."
  logo-marquee: "Two-half duplicated track using `flex w-max animate-marquee gap-16`. Edge mask `[mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]`. Six fixed brand names: Vortex · Nimbus · Prysma · Cirrus · Kynder · Halcyn."
---

# Plusgain — Liquid-Glass AI Hero with Live Color-Bend Shader

> Fivefold showcase. Pairs with the Plusgain prompt. Use this file to keep Plusgain's premium-AI restraint when you extend the page — the brand should always feel like a tool launched by a design studio, not a generic SaaS landing.

## Overview

Plusgain is a single-section hero for an AI design plugin that connects with every tool a design team already uses. The atmosphere is deep blue-violet and quiet, with a live WebGL color-bend shader filling the whole viewport, off-white type floating over a soft dark pool of legibility, and a 220-pixel General Sans headline where only the word "AI" carries the brand gradient. There is no second section, no testimonials, no feature grid — the page is one oversized statement.

The governing decision: **the shader is the page.** Most AI tool landings hedge — a static gradient hero, a video loop bolted to a CTA, a fading mesh png. Plusgain refuses the static asset entirely. The background is a `three.js` fragment shader that drifts on `uTime` and bends toward the cursor on every `pointermove`, so the page is alive the moment it loads and continues to react for as long as the visitor stays. Layered over that liquid surface is a single dark blur shape (984 × 527, blurred 82px) that creates a soft pool of legibility behind the headline — so the type reads crisp without ever flattening the motion underneath. The headline is fixed at `text-[220px]` on every breakpoint; mobile overflow is intentional and clipped by the wrapper. The bet: an AI design tool earns trust by demonstrating taste at first paint, not by listing features.

The system extends across the page by repetition, not addition. One shader, one finish (liquid-glass), one accent gradient (indigo → violet → amber), one display family, one body family, one icon. The Sign-Up pill, the Install-Plusgain CTA, and every marquee tile share the same `.liquid-glass` utility. The headline "AI" word and the logo glyph share the same three brand stops. The shader uses those same three stops as its color palette so the background and the brand rhyme. When the page is extended later, every new surface must adopt the same finish — not a new one — or the argument collapses.

**Key Characteristics:**
- Deep blue-violet base + off-white type — a two-token surface where the shader, not chrome, carries the visual weight.
- A live WebGL color-bend shader as the only background — no static image, no video, no CSS gradient fallback.
- A fixed 220-pixel General Sans headline with the word "AI" burning through indigo → violet → amber.
- A single `.liquid-glass` finish powers every interactive surface (Sign Up, CTA, marquee tiles).
- A 984 × 527 blur shape sits behind the headline to guarantee AAA contrast over the colorful shader.
- One 1-pixel gradient hairline under the nav — the page's only divider.
- A 20-second linear marquee of six fixed brand names with an edge fade mask — the only CSS-keyframe motion.
- Two families, two roles, never more: General Sans on the hero only, Geist Sans on everything else.

## Colors

> **Source pages analyzed:** the single Hero page (Index.tsx) — the only surface that ships in v1.

The Plusgain palette is intentionally narrow. Three semantic tokens carry the surface (background, foreground, hero-sub), three brand stops carry the accent (indigo, violet, amber), and one ad-hoc composition (the blur shape) carries the legibility pool. Anything outside that list is forbidden by Layer 11 of the prompt.

### Surface

- **Background** — `#040108` equivalent / `hsl(260 87% 3%)`. Declared on `:root` as `--background: 260 87% 3%` (HSL channels, no `hsl(...)` wrapper, so Tailwind's `<alpha-value>` modifier works). Consumed via `bg-background` on the outermost wrapper. Quote as `{colors.background}`.
- **Blur shape** — `bg-gray-950 opacity-90 blur-[82px]`. Not a token, an ad-hoc Tailwind composition that exists exactly once: the 984 × 527 dark pool behind the headline. Quote as `{colors.blur-shape}`.

### Text

- **Foreground** — `hsl(40 6% 95%)`. Off-white. Default text + icon color. Declared as `--foreground: 40 6% 95%`, consumed as `text-foreground` and as alpha variants like `text-foreground/90` for nav links and `text-foreground/50` for the marquee static text. Quote as `{colors.foreground}`.
- **Hero subtitle** — `hsl(40 6% 82%)`. A slightly dimmer off-white used only on the hero `<p>`. Always paired with `opacity-80` to push it further back without losing legibility. Quote as `{colors.hero-sub}`.

### Brand Gradient

The single accent. Applied with `linear-gradient(to left, …)` in exactly two places: the gradient-filled word "AI" in the headline and the logo glyph fill.

- **Brand indigo** — `#6366f1` (indigo-500). First stop of the brand gradient. Quote as `{colors.brand-indigo}`.
- **Brand violet** — `#a855f7` (purple-500). Middle stop. Anchors the gradient's identity. Quote as `{colors.brand-violet}`.
- **Brand amber** — `#fcd34d` (amber-300). Final stop. The warm note that prevents the page from reading as a pure cool-violet AI cliché. Quote as `{colors.brand-amber}`.

The shader uses these same three stops as its `uColors` palette — Plusgain's background and brand are literally painted from the same input.

### Hairlines & Borders

- **Hairline** — `hsl(40 6% 95% / 0.12)`. Applied via the universal selector (`* { border-color: hsl(var(--foreground) / 0.12); }`) so any `border` utility inherits this token. Quote as `{colors.hairline}`.
- **Nav divider gradient** — `bg-gradient-to-r from-transparent via-foreground/20 to-transparent`. The only divider on the page; one pixel tall, sits at `mt-[3px]` below the nav.

**Constraint** (verbatim from prompt Layer 11): no neon green, no warm reds, no teal. The shader, the headline gradient, and the logo glyph all use the same three brand stops. Color is one decision, made once.

## Typography

### Font Family

- **Display** — `font-display: ['"General Sans"', '"Geist Sans"', 'sans-serif']`. Loaded from the Fontshare CDN with preconnect (`https://api.fontshare.com`, `f[]=general-sans@400,500,600,700`). Applied via `font-display` on the hero `<h1>` and nowhere else.
- **Body** — `font-sans: ['"Geist Sans"', 'system-ui', 'sans-serif']`. Loaded via `@fontsource/geist-sans/{400,500,600,700}.css` weight bundles in `src/main.tsx`. Set as the base `font-family` on `<body>` with `-webkit-font-smoothing: antialiased` and `text-rendering: optimizeLegibility`.
- **OpenType features** — none enabled or required. Both families ship with sensible defaults; ligatures and kerning are inherited from the engine.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{type.hero}` | 220px | 400 | 1.02 | -0.024em | Hero `<h1>` "Design AI" — display only |
| `{type.subtitle}` | 18px | 400 | 32px (`leading-8`) | default | Hero `<p>` subtitle on `text-hero-sub opacity-80` |
| `{type.cta}` | 16px | 500 | inherit | default | Install Plusgain button label |
| `{type.nav}` | 14px | 400 | inherit | default | Nav buttons on `text-foreground/90` |
| `{type.sign-up}` | 14px | 500 | inherit | default | Top-right Sign Up pill |
| `{type.marquee-name}` | 16px | 600 | inherit | default | Rolling logo names |
| `{type.marquee-static}` | 14px | 400 | snug | default | Left "Connects with the tools…" caption |
| `{type.tile-glyph}` | 12px | 600 | inherit | default | Single-letter inside each liquid-glass marquee tile |
| `{type.wordmark}` | 20px | 600 | inherit | -0.6 (SVG tracking) | "Plusgain" wordmark inside the logo SVG (Helvetica fallback) |
| `{type.icon}` | 16px (`h-4 w-4`) | — | — | — | `ChevronDown` glyph at `opacity-70` |

### Principles

- **Negative letter-spacing at display sizes.** The 220px headline rides at `-0.024em` so the gradient "AI" sits tight against "Design ".
- **Fixed display size — no `clamp()`.** Mobile overflow is the point. The wrapper's `overflow-hidden` clips it cleanly.
- **Body at 18px, not 16px.** The hero subtitle is `text-lg` with `leading-8` so it reads like a confident statement, not a SaaS sub-deck.
- **Weight 500 is sparing.** Only the Sign-Up pill and the CTA label use 500; everything else lives at 400 or jumps to 600.
- **Two families, two roles.** General Sans on the hero `<h1>` only; Geist Sans everywhere else. Mixing is forbidden.
- **Synthesized weights are not allowed.** Both families load only 400/500/600/700. Clamp to the nearest available weight rather than asking the engine to fake one.
- **Marquee static text uses opacity, not weight.** `text-foreground/50` pulls it back without changing the family.

### Note on Font Substitutes

If General Sans cannot load from the Fontshare CDN, the headline falls back through `'"Geist Sans"', 'sans-serif'`. Geist is slightly tighter at large sizes — bump tracking from `-0.024em` to `-0.018em` to compensate. If Geist Sans is also unavailable, ship Inter Tight as the body substitute (keep weights 400/500/600/700, keep `-webkit-font-smoothing: antialiased`); do not substitute with a humanist sans or a slab — the brand reads as wrong instantly.

## Layout

### Spacing System

- **Base unit** — Tailwind 3 default 4px scale. No custom spacing extension.
- **Nav padding** — `px-8 py-5` (32px × 20px). The same horizontal value used by every other section.
- **Section column padding** — `px-8` on the hero content column and on the marquee container.
- **CTA padding** — `mt-[25px] px-[29px] py-[24px]`. Non-token values are deliberate; do not round to `mt-6` / `px-7` / `py-6`.
- **Subtitle margin** — `mt-8` (32px) above the subtitle; `max-w-md` (28rem / 448px) on the text block.
- **Marquee container** — `max-w-5xl mx-auto px-8`; inner row at `gap-12` (48px); rolling track at `gap-16` (64px).
- **Marquee bottom padding** — `pb-10` (40px) on the marquee wrapper to lift it off the viewport floor.
- **Hairline offset** — `mt-[3px]` between the nav and the gradient divider. A single negotiated value.
- **Blur shape size** — `h-[527px] w-[984px]`, centered via `left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`.

### Grid & Container

- **Outer wrapper** — `relative min-h-screen overflow-hidden bg-background`. The `overflow-hidden` clips the 220px headline on narrow viewports.
- **Inner section** — `relative flex min-h-screen flex-col overflow-visible`. `overflow-visible` is deliberate so the centered blur shape isn't sliced by the section box.
- **Hero content** — `flex flex-1 items-center justify-center` so the centered column always takes the slack between nav and marquee.
- **Hero column** — `flex flex-col items-center px-8 text-center`. Not width-capped; the 220px headline establishes its own width.
- **Marquee row** — `max-w-5xl` (64rem / 1024px). The only width-capped row on the page.
- **Z-index stack** — `z-0` shader → `z-0` blur shape → `z-10` UI layer. Two layers only; never introduce a third.

### Whitespace Philosophy

Whitespace on Plusgain is generated by the shader, not by padding. The hero column is centered in a `flex-1` slack region and the page intentionally avoids vertical rhythm rules — there is no consistent `space-y-*` between sections because there is only one section. The shader keeps the negative space alive: anywhere you might add a divider, a stat, or a secondary CTA, the moving color and the blur pool are doing the work instead. When extending the page, add new surfaces by making more of the same shader visible, not by adding more chrome on top.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | `border-color: hsl(var(--foreground) / 0.12)` via universal selector | Default surface; no shadow on bare elements |
| Hairline | `mt-[3px] h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent` | The single divider beneath the nav |
| Inset glass | `box-shadow: inset 0 1px 1px rgba(255,255,255,0.1)` + `::before` mask-composite edge | Liquid-glass buttons + marquee tiles |
| Backdrop blur | `backdrop-filter: blur(4px)` on `.liquid-glass`; `blur-[82px]` on the central pool | The button finish and the headline-legibility pool |

**Shadow philosophy.** Plusgain ships no drop shadow. Every piece of "depth" comes from either an inset highlight (the glass finish), a backdrop blur (the headline pool), or the shader itself. Drop shadows would flatten the live surface and read as bolted-on chrome — they're explicitly off-limits on this page.

**Decorative Depth:**
- The blur shape `bg-gray-950 opacity-90 blur-[82px]` painted at 984 × 527 pixels behind the headline.
- The `.liquid-glass::before` pseudo that runs a vertical highlight gradient (`rgba(255,255,255,0.45)` → `0.15` → `0` → `0` → `0.15` → `0.45`) with `mask-composite: exclude` to render only the hairline edge.
- The shader's per-pixel GLSL noise (`uNoise = 0.12`) that breaks gradient banding without showing as grain.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Hairline divider, page wrappers |
| `{rounded.tile}` | 8px (`rounded-lg`) | 24 × 24 liquid-glass marquee initials |
| `{rounded.logo}` | 9px (`rounded-[9px]`) | Logo + favicon glyph squares |
| `{rounded.pill}` | 9999px (`rounded-full`) | Sign Up button + Install Plusgain CTA |

There is no `rounded-md` or `rounded-xl` on this page. Three radii cover every surface: zero, small-tile, and pill.

### Photography Geometry

- **No photography on the page.** No people, no product shots, no lifestyle imagery.
- **No raster background.** The shader replaces any hero image; no `<img>` is loaded in the hero stack.
- **SVG assets only** — `src/assets/logo.svg` (wordmark) and `public/favicon.svg` (glyph). Both hand-authored, inline-friendly, gradient-filled with the same three brand stops.
- **Loading strategy** — both SVGs ship in-tree; no lazy-loading because there is nothing below the fold to defer.

## Components

### Top Navigation

- **Navbar** `{component.navbar}` — `flex w-full items-center justify-between px-8 py-5`. Left: logo SVG `h-8 w-auto`. Center (hidden under `md`): four buttons — `Features` ↓, `Integrations`, `Pricing`, `Resources` ↓ — at `text-sm text-foreground/90` with `transition-colors`. Right: the Sign-Up pill. Below: the gradient hairline divider at `mt-[3px]`. Focus state inherits the Button focus ring (`focus-visible:ring-2 focus-visible:ring-foreground/25`).

### Buttons

- **Button — Sign Up pill** `{component.button-sign-up}` — `<Button variant="heroSecondary" className="rounded-full px-4 py-2 text-sm">`. Default: `.liquid-glass rounded-full text-foreground`. Active: `active:scale-[0.98]`. Focus: `focus-visible:ring-2 focus-visible:ring-foreground/25`. Sits top-right in the nav.
- **Button — Install Plusgain CTA** `{component.button-cta}` — `<Button variant="heroSecondary" className="mt-[25px] px-[29px] py-[24px] text-base">`. Same `heroSecondary` cva variant as Sign-Up, scaled up via padding. Default: `.liquid-glass rounded-full text-foreground` at `font-medium`. Active: `active:scale-[0.98]`. Focus: ring at `foreground/25`. The label reads "Install Plusgain" — no icon, no chevron.
- **Button — Nav utility** `{component.button-nav}` — bare `<button>` (not the cva component). Default: `flex items-center gap-1 text-sm text-foreground/90`. Active: no scale, no fill change. Focus: native focus outline acceptable; component-level ring not enforced.

### Cards & Containers

- **Card — Liquid-glass tile** `{component.tile-glass}` — 24 × 24 (`h-6 w-6`) `flex items-center justify-center rounded-lg`. `.liquid-glass` finish. Inner: single uppercase letter at `text-xs font-semibold text-foreground`. Used once per marquee logo (six tiles, duplicated to twelve). No padding overrides.
- **Card — Headline pool** `{component.pool-blur}` — `pointer-events-none absolute left-1/2 top-1/2 z-0 h-[527px] w-[984px] -translate-x-1/2 -translate-y-1/2 bg-gray-950 opacity-90 blur-[82px]`. Not a clickable card, but functions as a container in the layout sense — it defines the legibility zone for the hero text.
- **Card — Marquee container** `{component.container-marquee}` — `max-w-5xl mx-auto px-8` with inner `flex items-center gap-12`. Houses the static caption on the left and the rolling track on the right. Edge-faded via `[mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]` on the inner overflow wrapper.

### Inputs & Forms

- **Input — none in v1.** There is no form on the page. The Install CTA is a button, not an email capture. If a future iteration adds an input, follow the `.liquid-glass` finish + `rounded-full` shape + `px-[29px] py-[24px]` rhythm of the CTA, with the input placeholder set in `text-foreground/50` to match the marquee caption.

### Footer

- **Footer — Logo Marquee row** `{component.footer-marquee}` — sits at the bottom of the hero section at `pb-10`. Composition: a static `<p>` on the left ("Connects with the tools / your team already uses") at `text-sm leading-snug text-foreground/50`, plus the duplicated rolling track on the right. Each `LogoItem` is `flex items-center gap-3` containing a `liquid-glass` tile + a `text-base font-semibold text-foreground` name. No traditional footer (no links, no legal, no copyright) — the marquee row IS the footer.

## Do's and Don'ts

### Do

- Use `{colors.background}` and `{colors.foreground}` for every surface and every body of text. Two tokens cover the page.
- Apply the brand gradient (`{colors.brand-indigo}` → `{colors.brand-violet}` → `{colors.brand-amber}`) only on the "AI" wordfill and the logo glyph.
- Keep the headline locked at `text-[220px]` with `leading-[1.02]` and `tracking-[-0.024em]` on every breakpoint.
- Reach for the `heroSecondary` cva variant whenever a new button appears; resize via padding, not by introducing a new variant.
- Use the `.liquid-glass` utility for any new surface that needs perceived elevation. One finish, applied consistently.
- Reserve `font-display` (General Sans) for the hero `<h1>` alone. Everything else lives on Geist Sans.
- Set the shader props from Layer 5e verbatim — `speed=0.2`, `warpStrength=1`, `mouseInfluence=1`, `parallax=0.5`, `noise=0.12`, `iterations=2`, `intensity=1.2`, `bandWidth=6`.
- Keep all motion in the shader + the 20s linear marquee; honor `prefers-reduced-motion: reduce` by pausing both.
- Apply `transition-all duration-200` on interactive elements; layer `active:scale-[0.98]` on glass buttons.

### Don't

- Don't add a drop shadow. The page ships zero `box-shadow` outside the inset glass highlight.
- Don't introduce a third color outside the declared palette. Layer 11 explicitly forbids neon green, warm reds, and teal.
- Don't `clamp()` the hero headline. The 220-pixel overflow on mobile is part of the brand statement.
- Don't import a second display family or a third weight beyond 400 / 500 / 600 / 700.
- Don't bolt Framer Motion or `motion/react` onto the page — no entry animations, no hover springs.
- Don't replace the WebGL shader with a CSS gradient, a video, or a static mesh PNG. The shader IS the background.
- Don't add icons beyond the single `ChevronDown` from `lucide-react`. Extending Layer 10 is required before any new icon import.
- Don't substitute the six marquee names (Vortex · Nimbus · Prysma · Cirrus · Kynder · Halcyn). The set is fixed.
- Don't pin `pointer-events-none` on the content layer. The shader listens on `window`; the content remains fully interactive without the workaround.
- Don't round the non-token CTA paddings (`mt-[25px] px-[29px] py-[24px]`) to nearest Tailwind tokens. The exact values are the design.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤ 419px | Headline at 220px overflows; wrapper `overflow-hidden` clips. Nav center group hidden. |
| Phone | 420–640px | Same as above. Marquee container shrinks to viewport width minus `px-8` padding. |
| Large phone | 641–735px | Subtitle stays at `max-w-md` (448px); fits comfortably. CTA padding unchanged. |
| Tablet portrait | 736–833px | Still under `md` (768px). Center nav remains hidden until 768px. |
| Tablet landscape | 834–1023px | `md:flex` reveals the four center nav items. Marquee uses full `max-w-5xl`. |
| Small desktop | 1024–1068px | Marquee capped at `max-w-5xl`; padding even on both sides. |
| Desktop | 1069–1440px | Default target. Blur pool centered under headline; shader covers viewport. |
| Wide desktop | ≥ 1441px | No layout change. Shader scales via `setSize(w, h)` inside the `ResizeObserver`. |

### Touch Targets

- **Minimum size** — 44 × 44px hit area for any touchable. The Sign-Up pill at `px-4 py-2 text-sm` resolves to ~36px tall; pad with surrounding spacing rather than enlarging the visual box.
- **CTA hit area** — the `Install Plusgain` button at `px-[29px] py-[24px] text-base` is comfortably > 60px tall; safe across all viewports.
- **Marquee tiles** — 24 × 24px and decorative only; they are not focusable touch targets.

### Collapsing Strategy

- **Nav** — center group hides via `hidden md:flex`. Logo and Sign-Up persist at all sizes. No hamburger menu in v1; fewer items, fewer dependencies.
- **Hero headline** — never scales. Mobile cropping is intentional; the wrapper `overflow-hidden` makes the crop clean.
- **Subtitle** — fixed `max-w-md`. On phones it wraps naturally within the viewport.
- **CTA** — same padding at all sizes. It does not stretch to full-width on mobile.
- **Marquee** — the static left caption sits inline at `md+`. Below `md`, the row continues to lay out horizontally; the edge-fade mask keeps the overflow elegant.
- **Blur shape** — fixed at 984 × 527px. On smaller viewports it extends past the section edges; the section's `overflow-visible` keeps it from being sliced.

### Image Behavior

- **`srcset` / `sizes`** — not used. No raster imagery ships on the page.
- **SVGs** — the logo (`src/assets/logo.svg`) and favicon (`public/favicon.svg`) are loaded eagerly; no lazy-loading because they are above the fold.
- **Shader canvas** — `renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))` clamps DPR at 2 to protect retina-class GPUs. Resizes happen via `ResizeObserver`, falling back to `window.resize` on legacy browsers.

## Iteration Guide

1. **Extend the page by adding a new shader-visible section, never new chrome.** If you need a second moment, reveal more of the shader; do not add cards stacked over it.
2. **Variants live in components, never in tokens.** New button sizes are achieved by passing different padding to the same `heroSecondary` cva variant, not by adding a `heroTertiary`.
3. **Always reference tokens via the `{colors.*}` / `{type.*}` / `{rounded.*}` / `{component.*}` syntax.** Inline hex codes and pixel values break the audit trail.
4. **Never document a `:hover` state.** Plusgain follows Apple convention: document default / active / focus only. Hover is implementation detail.
5. **Display family lives on the hero `<h1>` alone.** If you introduce a new oversized statement, it must use Geist Sans at the same 220-pixel ceiling, not General Sans, to keep General Sans rare.
6. **Drop shadows are off-limits.** Depth is delivered by the `.liquid-glass` inset highlight, the `blur-[82px]` pool, and the shader. Never `shadow-md` or `shadow-lg`.
7. **The shader is the entry animation.** When a new component lands, do not add Framer Motion entry choreography — let it paint, let the shader carry it.

## Known Gaps

- **Dark/light theme** — Plusgain is dark-only by design. A light mode is not surfaced in analyzed pages and would require re-thinking the shader palette before it could ship.
- **Form components** — no input, select, textarea, or checkbox surfaced in the v1 hero. Their `.liquid-glass` adaptation is sketched in the Components section but not validated against real content.
- **Validation, error, and disabled states** — only the Button cva's `disabled:pointer-events-none disabled:opacity-50` is defined. No error styling, no toast pattern, no inline help.
- **Mobile shader cost** — the prompt does not surface a low-power fallback. The shader runs full-quality on all devices; a `prefers-reduced-motion` pause is recommended but a low-DPR or static-poster fallback is not yet specified.
- **Footer beyond the marquee** — no legal links, copyright, or social row exists. If marketing requires them, a new component is needed and the marquee's role-as-footer assumption breaks.
- **Multiple pages or routes** — Plusgain ships a single Index page; navigation items currently link to `#`. A real router, route tokens, and inter-page transitions are not surfaced.
