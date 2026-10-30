---
version: "1"
name: "Lockain — Blockchain Data-Security Hero"
description: "A dark-cinematic hero section for Lockain, a blockchain-based data-security company that encrypts, shards, and anchors enterprise data to an immutable ledger. Near-black canvas (#05060a) under an interactive WebGL 'gradient blinds' background that eases toward the cursor, a shiny emerald→cyan headline gradient, and quiet glass UI. The only accent family is emerald/teal — no purple, no indigo, no neon-green."
colors:
  ink-950: "#05060a"
  ink-900: "#080a12"
  ink-800: "#0d1018"
  ink-700: "#141823"
  glow: "#3ddc97"
  glow-cyan: "#36e0d4"
  glow-dim: "#1b6b54"
  text-default: "rgba(255,255,255,0.8)"
  text-muted: "rgba(255,255,255,0.65)"
  text-quiet: "rgba(255,255,255,0.5)"
  hairline: "rgba(255,255,255,0.07)"
  raised-surface: "rgba(255,255,255,0.02)"
typography:
  display:
    fontFamily: "Space Grotesk"
    weights: "400 / 500 / 600 / 700"
    role: "headings, logo wordmark, stat numbers"
  body:
    fontFamily: "Inter"
    weights: "400 / 500 / 600 / 700"
    role: "UI text, nav links, sub-paragraph, default sans"
  mono:
    fontFamily: "JetBrains Mono"
    weights: "400 / 500"
    role: "mono accents — reserved for future code/ledger UI"
spacing:
  base: "Tailwind default (4px)"
  container: ".container-x = mx-auto max-w-7xl px-6 sm:px-8 lg:px-12"
  navbar-height: "h-20"
  hero-padding: "pt-28 pb-20"
  rhythm-h1-to-p: "mt-7"
  rhythm-p-to-cta: "mt-9"
  rhythm-cta-to-stats: "mt-14"
rounded:
  pill: "9999px (CTAs, nav links)"
  card: "rounded-2xl (stats strip)"
  icon-button: "rounded-full (hamburger, logo wrap)"
  mobile-link: "rounded-xl (mobile sheet links)"
components:
  gradient-blinds: "Self-contained ogl/WebGL background — vertical 'blind' stripes over a multi-stop emerald→teal→deep→ink gradient with a spotlight that eases toward the cursor (mouseDampening 0.25). Single fragment shader, mixBlendMode 'lighten'."
  glow-border: "Signature card edge — 1px conic-style gradient border drawn via ::before mask-composite, fading from glow at 140° into transparent"
  btn-primary: "Pill, glow fill, ink-950 text, active lifts -1px and casts a 12px emerald shadow at 65% opacity"
  btn-ghost: "Pill, 1px white/15 border, white/[0.02] bg, backdrop-blur — used for the secondary 'Explore the platform' CTA"
  stats-strip: "3-col rounded-2xl glass card with hairline border white/[0.07], inner cells separated by 1px gap-px on ink-950/30"
---

# Lockain — Blockchain Data-Security Hero

> Fivefold showcase. Pairs with the Lockain prompt. Use this file to keep Lockain's cinematic restraint when you add new sections — it should always read as a premium security product, never a generic crypto landing.

## Overview

Lockain is **a single full-screen hero for a blockchain data-security company that encrypts, shards, and anchors enterprise data to an immutable ledger.** Near-black canvas, an interactive WebGL "gradient blinds" surface that tracks the cursor, layered cinematic overlays, and a shiny emerald→cyan headline. There is no purple, no indigo, no magenta, no neon-green — the entire web3 visual playbook has been refused. What replaces it: a cinematic monochrome dark with one disciplined accent family (`{colors.glow}` / `{colors.glow-cyan}`).

The governing decision: **infrastructure, not ICO.** Most blockchain landings shout — gradient meshes, glow rings, "join the revolution" pressure. Lockain does the opposite. The animation system isn't fireworks; it's a single GLSL shader that paints 16 vertical blinds over a gradient and eases a spotlight ~0.25s behind the cursor. Every overlay above the canvas is `pointer-events-none` so the cursor reaches the shader — the cinema happens because the page is responsive to you, not because anything is flashing. Type is Space Grotesk for display and Inter for body, both at restrained weights. The bet: enterprise buyers trust a page that behaves like a product, not a pitch deck.

The system extends across future surfaces by holding three rules sacred. First, the accent family never widens — when ledger/audit views ship, their data viz must compose from `{colors.glow}`, `{colors.glow-cyan}`, `{colors.glow-dim}` and luminance steps of white only. Second, motion is always user-driven or entry-only — no idle marquees, no looping shimmers on payload content, no auto-playing carousels. Third, raised surfaces stay quiet — `{colors.raised-surface}` over `{colors.hairline}` is the universal card recipe; deeper elevation comes from backdrop-blur, not shadow.

**Key characteristics:**
- **Near-black canvas** (`{colors.ink-950}` — #05060a) under a live WebGL background. Raised surfaces are `{colors.raised-surface}`, hairlines `{colors.hairline}`, default text `{colors.text-default}`. Muted text steps to `{colors.text-muted}` then `{colors.text-quiet}`.
- **One accent family only** — emerald `{colors.glow}`, teal `{colors.glow-cyan}`, deep `{colors.glow-dim}`. No purple, indigo, magenta, neon-green anywhere.
- **Space Grotesk** (400–700) for headings + logo + stat numbers, **Inter** (400–700) for body and UI, **JetBrains Mono** (400/500) held in reserve. Three families, three roles, never blurred.
- **GradientBlinds canvas** — 16 vertical stripes (min 55px each), angle 20°, noise 0.25, spotlightRadius 0.55, spotlightOpacity 0.9, mouseDampening 0.25, mixBlendMode `lighten`.
- **Pointer-events-none overlay stack** — five overlays sit between canvas and content; only the CTA row opts back in.
- **Gradient text headline** — `linear-gradient(120deg, #fff 0%, #d6fff0 45%, #3ddc97 100%)` on "locked by blockchain." Line one stays plain white for contrast.
- **Pill geometry** — 9999px on all CTAs and nav links; 2xl on the stats strip; full radius on the hamburger.
- **Quiet glass UI** — backdrop-blur on the scrolled navbar, the ghost CTA, and the stats strip. No heavy shadows, no glassmorphism rings.

## Colors

> **Source pages analyzed:** Lockain landing hero + fixed navbar — the only two rendered surfaces in the current build. Future ledger/audit views are unseen and noted in Known Gaps.

Four ink tones, three accents, and disciplined white-opacity steps. Nothing else exists in the palette.

### Surface & Ink
- **Ink-950** (`{colors.ink-950}` — #05060a): The global background. The hero sits on this; the navbar fades into a 70% tint of it when scrolled.
- **Ink-900** (`{colors.ink-900}` — #080a12): Alt section background, reserved for future sections below the hero.
- **Ink-800** (`{colors.ink-800}` — #0d1018): Raised surface tone — also the final stop in the `gradientColors` palette so the shader fades into the canvas at edges.
- **Ink-700** (`{colors.ink-700}` — #141823): Hairline-surface tone for any future bordered cards.

### Brand Accents
- **Glow** (`{colors.glow}` — #3ddc97): Primary emerald. Primary CTA fill, logo center dot, "ain" in the wordmark, scroll-cue sparkle. Text on glow surfaces is `{colors.ink-950}`.
- **Glow-cyan** (`{colors.glow-cyan}` — #36e0d4): Secondary teal. First stop of the GradientBlinds palette and the second stop of the LogoMark linear gradient.
- **Glow-dim** (`{colors.glow-dim}` — #1b6b54): Deep accent — third gradient stop in the shader, used to anchor brighter glows into the canvas.

### Text Steps
- **Default** (`{colors.text-default}` — rgba(255,255,255,0.8)): Body baseline on `{colors.ink-950}` — ~16:1 contrast.
- **Muted** (`{colors.text-muted}` — rgba(255,255,255,0.65)): Sub-paragraph, secondary nav links.
- **Quiet** (`{colors.text-quiet}` — rgba(255,255,255,0.5)): Stat captions, footnote-tier copy.
- **White**: Reserved for H1, stat numbers, ghost-CTA labels.

### Hairlines & Raised Surfaces
- **Hairline** (`{colors.hairline}` — rgba(255,255,255,0.07)): The universal 1px edge on the stats strip and scrolled navbar bottom border.
- **Raised** (`{colors.raised-surface}` — rgba(255,255,255,0.02)): Card fill behind the glass — pairs always with hairline + backdrop-blur.

### Brand Gradient
- **Headline gradient**: `linear-gradient(120deg, #ffffff 0%, #d6fff0 45%, #3ddc97 100%)` — applied only to "locked by blockchain." in the H1.
- **GradientBlinds shader palette**: `['#36e0d4', '#3ddc97', '#1b6b54', '#0d1018']` — teal → emerald → deep → ink, in that order.

**Constraint** (verbatim from prompt): *do not use purple, indigo, magenta, or neon-green anywhere — the only accent family is emerald/teal.* Contrast comes from luminance and the cursor-tracked spotlight, never from a second hue.

## Typography

### Font Family
- **Display**: `'Space Grotesk', Inter, sans-serif` — geometric, slightly humanist, holds at display sizes without becoming generic.
- **Body**: `Inter, system-ui, sans-serif` — neutral UI workhorse; default `font-sans`.
- **Mono**: `'JetBrains Mono', ui-monospace, monospace` — reserved for ledger/code surfaces.
- OpenType: rely on browser defaults; `text-rendering: optimizeLegibility` + `-webkit-font-smoothing: antialiased` set globally on `html`.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| h1-display | text-5xl → 6xl → 7xl | 600 | 1.04 | tracking-tight | Hero headline, 2 lines |
| h1-gradient-span | inherits h1 | 600 | 1.04 | tracking-tight | "locked by blockchain." span only |
| sub-paragraph | text-lg | 400 | leading-relaxed | normal | Hero supporting copy, max-w-xl |
| stat-value | text-2xl sm:text-3xl | 600 | tight | normal | 4.2B+ / 99.99% / 38ms |
| stat-label | text-xs sm:text-sm | 400 | normal | normal | Records encrypted / Uptime SLA / Verification latency |
| nav-link | text-sm | 400 | normal | normal | Platform / Solutions / How it works / Security |
| nav-cta-label | text-sm | 600 | normal | normal | Get started, Sign in cluster |
| cta-label | text-sm | 600 | normal | normal | Request a demo, Explore the platform |
| logo-wordmark | text-lg | 600 | normal | tracking-tight | "Lockain" — display family |
| mobile-link | text-base | 400 | normal | normal | Stacked links inside open sheet |

### Principles
- Display family is reserved for headings, the wordmark, and stat numbers — never used for paragraph copy.
- Body copy never exceeds `{colors.text-muted}` on the canvas; the H1 is the only text that earns full white.
- Negative letter-spacing (`tracking-tight`) is applied at H1 sizes only; body and UI stay at default tracking.
- Line-height `1.04` on the H1 is deliberate — it lets the gradient line and the white line read as one unit, not two stacked headlines.
- Weight 500 exists in the font load but is intentionally absent from the rendered hierarchy — every weight step jumps 400 → 600 for clear hierarchy.
- The em-dash in the sub-paragraph is rendered as a true em-dash (`—`), never two hyphens or an en-dash.
- The stat numerals are display-family at semibold — they read as headlines, not data, which is the point.

### Note on Font Substitutes
If Space Grotesk is unavailable, fall back to Inter at the same sizes and add `letter-spacing: -0.01em` to compensate for Inter's wider default tracking at display sizes. If Inter is unavailable, fall back to system-ui and accept the slight loss of geometric consistency. Never synthesize bold from a 400 file via `font-weight: bold` — clamp to the nearest loaded weight and leave a code comment.

## Layout

### Spacing System
- **Base unit**: Tailwind default 4px scale (4 / 8 / 12 / 16 / 20 / 24 / 28 / 32 / 36 / 40 / 48 / 56 / 64 / 80).
- **Navbar height**: `h-20` (80px) fixed.
- **Hero vertical padding**: `pt-28 pb-20` (112px / 80px).
- **Hero rhythm**: H1 → p uses `mt-7` (28px); p → CTA row uses `mt-9` (36px); CTA → stats uses `mt-14` (56px).
- **CTA padding**: `px-7 py-3.5` (28px / 14px), nav-cluster CTA shrinks to `!px-5 !py-2.5`.
- **Stats cell padding**: `px-5 py-5 sm:px-6` (20 / 24 sides, 20 vertical).
- **Mobile sheet padding**: `px-6 py-6` outer, stacked links `px-4 py-3`.

### Grid & Container
- **Container**: `.container-x` = `mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12` — caps the design at 1280px regardless of viewport.
- **Hero content column**: `max-w-3xl` (768px) — headline plus everything below sits in this column.
- **Sub-paragraph column**: `max-w-xl` (576px) — narrower than the headline so the eye lands faster.
- **Stats strip column**: `max-w-2xl` (672px), 3 equal columns, `gap-px` hairline between cells.
- **Gutters**: 24px mobile, 32px tablet, 48px desktop (via container padding).

### Whitespace Philosophy
Whitespace is the second background. Below the headline, the design refuses to fill — `max-w-xl` on the paragraph and `max-w-2xl` on the stats strip leave the right half of the canvas empty so the cursor-tracked spotlight has room to perform. The scroll cue sits alone at the bottom, anchored by 32px of breathing room on every side. The argument: a security product earns trust by demonstrating restraint, not by packing every pixel. Empty canvas is the surface area on which the WebGL shader makes its argument.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No border, no shadow | The hero canvas itself, the H1, the sub-paragraph, the scroll-cue line |
| Soft hairline | `1px {colors.hairline}` + `{colors.raised-surface}` | Stats strip, ghost CTA, scrolled navbar bottom edge |
| Backdrop blur | `backdrop-blur` (sm) or `backdrop-blur-xl` (lg) | Scrolled navbar (xl), ghost CTA (sm), stats strip (sm), mobile sheet (xl) |
| Product shadow | `0 12px 40px -8px rgba(61,220,151,0.65)` | Primary CTA active state only |

**Shadow philosophy:** Depth comes from blur and luminance, not from drop shadow. The only drop shadow in the entire system is the emerald glow on the active primary CTA — and even that is colored, not gray. Every other "raised" surface earns its elevation from `{colors.raised-surface}` over `{colors.hairline}` plus a backdrop-blur. This rule keeps the dark stack readable; gray shadows on a near-black canvas just muddy the surface.

**Decorative depth:**
- `.bg-grid` — 56px × 56px rgba grid at 3.5% line opacity, layered at 40% block opacity over the canvas.
- `.noise` utility (SVG fractalNoise) — defined but not rendered in the hero; reserved for future ledger panels.
- `.glow-border` — 1px conic-style mask-composite border, defined for future cards; not used in the hero build.
- Radial emerald accent — `radial-gradient(120% 80% at 20% 30%, rgba(61,220,151,0.10), transparent 55%)` overlay at 10% strength.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| none | 0 | Inline `.bg-grid` texture, full-bleed overlays |
| sm | 0.5rem (8px) | Not used in hero; reserved for inline badges |
| md | 0.75rem (12px) | Not used in hero; reserved for inline form fields |
| lg | 0.75rem (12px) | Reserved for cards in future sections |
| xl | 1rem (16px) | Reserved for future panels |
| 2xl | 1rem (16px) | Stats strip outer container |
| pill | 9999px | All CTAs, nav center links, mobile-sheet CTA, mobile-link `rounded-xl` (12px) — exception |
| full | 9999px | Hamburger button, logo wrap, scroll-cue sparkle frame |

### Photography Geometry
- **No photography** in the hero — the visual centerpiece is the live WebGL canvas.
- No people, no stock, no 3D renders, no product mockups.
- Favicon is the padlock LogoMark on `{colors.ink-950}` — the only "image" asset that ships.
- Image radius behavior, srcset, and lazy-loading are not surfaced because no `<img>` element exists in the current build.

## Components

### Top Navigation

**Navbar** `{component.navbar}` — `<header>` fixed, `inset-x-0 top-0 z-50`, height `h-20`. Inner `<nav className="container-x flex h-20 items-center justify-between py-4">`. Default state: `border-b border-transparent`, transparent background. Scrolled state (`window.scrollY > 24`): adds `border-b border-white/[0.06] bg-ink-950/70 backdrop-blur-xl`, transitioned over 500ms.

**Nav Center Link** `{component.nav-link}` — `rounded-full px-4 py-2 text-sm text-white/60`. Default: muted. Active (current page): not surfaced in hero build (single page). Focus: inherits `:focus-visible` outline from `color-scheme: dark`.

### Buttons

**Primary CTA** `{component.button-primary}` — `.btn-primary` pill, `bg-glow` fill, `text-ink-950`, `px-7 py-3.5`, `text-sm font-semibold`, trailing `ArrowIcon h-4 w-4`. Default: flat, no shadow. Active: `translateY(-1px)` + `box-shadow: 0 12px 40px -8px rgba(61,220,151,0.65)`. Focus: inherits `:focus-visible` outline; the emerald fill provides its own visual prominence.

**Ghost CTA** `{component.button-ghost}` — `.btn-ghost` pill, `border border-white/15`, `bg-white/[0.02]`, `backdrop-blur`, `text-white/90`. Leading `ShieldIcon h-4 w-4 text-glow`. Default: quiet glass. Active: border steps to `white/30`, fill steps to `white/[0.06]`. Focus: inherits `:focus-visible` outline.

**Utility — Hamburger** `{component.button-hamburger}` — `h-10 w-10 rounded-full border border-white/10`, three bars centered. Default: three horizontal bars. Active (open state): top bar `translate-y-2 rotate-45`, middle `opacity-0`, bottom `-translate-y-2 -rotate-45`. Focus: inherits `:focus-visible` outline.

**Utility — Nav Cluster CTA** `{component.button-nav-primary}` — `.btn-primary` with overrides `!px-5 !py-2.5`. Same active and focus rules as Primary CTA; just denser geometry for the navbar.

### Cards & Containers

**Stats Strip** `{component.card-stats}` — `grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] backdrop-blur`. Each cell `bg-ink-950/30 px-5 py-5 sm:px-6`. Default: flat glass. Active: not applicable (display-only). Focus: not applicable.

**Mobile Sheet** `{component.card-mobile-sheet}` — `border-t border-white/[0.06] bg-ink-950/95 backdrop-blur-xl px-6 py-6`. Stacked links `rounded-xl px-4 py-3 text-base text-white/70`. Default: hidden. Active (open): slides down beneath navbar. Focus: each stacked link inherits `:focus-visible` outline.

**Utility — Radial Accent Surface** `{component.card-radial-accent}` — inline-style div, `radial-gradient(120% 80% at 20% 30%, rgba(61,220,151,0.10), transparent 55%)`, `pointer-events-none`, `z-10`. Default-only; decorative.

### Inputs & Forms

**Input — not surfaced** in the hero build. The page contains zero `<input>` elements. When forms ship in future sections, follow the ghost-CTA recipe: `border border-white/15`, `bg-white/[0.02]`, `backdrop-blur`, `text-white/90`, focus ring `ring-1 ring-glow/40`. Documented in Known Gaps.

### Footer

**Footer — not surfaced.** The page renders exactly two pieces: Navbar and Hero. A footer is not in the current build. When it ships, anchor it to `{colors.ink-900}`, hairline-top `{colors.hairline}`, type at `{colors.text-quiet}`.

## Do's and Don'ts

### Do
- Use `{colors.glow}` only for primary action surfaces (CTA fill, logo dot, scroll-cue sparkle) — never for decorative chrome.
- Set every overlay above the GradientBlinds canvas to `pointer-events-none` so the cursor reaches the shader.
- Apply the gradient span to "locked by blockchain." only — leave "Your data," plain white for luminance contrast.
- Reserve `text-white` for the H1, stat numbers, and ghost-CTA label; keep all other text at `{colors.text-default}` or below.
- Keep the H1 at exactly two lines on desktop — let `max-w-3xl` constrain it.
- Use the `cubic-bezier(0.16, 1, 0.3, 1)` ease for every transition and entry animation in the system.
- Pair every raised surface with a `{colors.hairline}` border and a backdrop-blur — depth comes from blur, not shadow.
- Honor the entry timeline `0.1 / 0.2 / 0.3 / 0.4s` — the cascade is the choreography.
- Hold `JetBrains Mono` in reserve for ledger and code surfaces only — never use it for UI labels.

### Don't
- Don't introduce purple, indigo, magenta, or neon-green — the constraint is absolute, not a guideline.
- Don't add a gradient mesh, glow ring, or auto-looping shimmer to the canvas — the GradientBlinds shader is the only motion.
- Don't widen the H1 column past `max-w-3xl` or the paragraph past `max-w-xl` — whitespace is the second background.
- Don't substitute fonts with "similar" alternatives — Space Grotesk + Inter + JetBrains Mono are load-bearing.
- Don't drop the `pointer-events-none` rule on overlays — it is what makes the background interactive.
- Don't use gray drop shadows on dark surfaces — depth is blur and luminance, not shadow.
- Don't import an external icon library (lucide, phosphor, heroicons) — the inline-SVG kit is self-contained.
- Don't synthesize bold from a 400 weight — clamp to the nearest loaded weight and leave a code comment.
- Don't render the radial accent at more than 10% strength — it must whisper, never glow.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤419px | Container `px-6`; H1 at `text-5xl`; hamburger; stats stay 3-col but tighten to `px-5 py-5` |
| Phone | 420–640px | Same as small phone; sub-paragraph wraps freely within `max-w-xl` |
| Large phone | 641–735px | Approaching `sm:` breakpoint; container still `px-6` |
| Tablet portrait | 736–833px | Hits `sm:` — container `px-8`, H1 jumps to `text-6xl`, stat value to `text-3xl`, stat label to `text-sm` |
| Tablet landscape | 834–1023px | Same `sm:` rules; mobile sheet still in play |
| Small desktop | 1024–1068px | Hits `lg:` — container `px-12`, H1 to `text-7xl`, scroll cue appears, center nav links + right cluster show, hamburger hides |
| Desktop | 1069–1440px | Stable layout; `max-w-7xl` keeps content centered with growing side margins |
| Wide desktop | ≥1441px | Container caps at `max-w-7xl` (1280px); side margins continue to grow; canvas extends to viewport edges |

### Touch Targets
- Minimum interactive size: 40 × 40px. Hamburger is `h-10 w-10` exactly; mobile-sheet links are `py-3` plus `text-base` line-height for ~48px effective height.
- Nav CTAs in the cluster shrink to `!px-5 !py-2.5` (~36px tall) — acceptable on desktop where pointer precision is higher; never used on mobile.

### Collapsing Strategy
- **Nav center links + right cluster**: hidden below `md` (768px); replaced by hamburger trigger that opens stacked sheet.
- **Mobile sheet**: full-width below navbar, vertical link stack, full-width `Get started` CTA at the bottom. Closes on link tap.
- **Hero typography**: H1 collapses `7xl → 6xl → 5xl` from `lg:` down; sub-paragraph stays at `text-lg` across all breakpoints; stat numbers collapse `3xl → 2xl` below `sm:`.
- **Stats strip**: stays 3 columns at every breakpoint — the `4.2B+ / 99.99% / 38ms` reading rhythm is design-critical and never reflows.
- **Scroll cue**: `hidden lg:flex` — desktop-only; never appears on tablet or phone where viewport height already implies scroll.
- **CTA row**: `flex flex-wrap items-center gap-4` — wraps to two lines on narrow phones rather than shrinking buttons.

### Image Behavior
Not applicable to current build. No `<img>` elements, no srcset, no lazy-loading hooks. The favicon (`public/favicon.svg`) ships as a single static SVG. When imagery enters future sections, lock the aspect ratios to 16:10 for ledger visualizations and 1:1 for any avatar tiles, and respect `prefers-reduced-data` by serving SVG where possible.

## Iteration Guide

1. **Focus on one component at a time.** When extending Lockain, ship one new surface — never redesign the hero and add a feature panel in the same pass.
2. **Variants live inside components.** A new dense-mode stats strip is a variant of `{component.card-stats}` with `gap-px` swapped for `gap-0` — not a new card token.
3. **Reference tokens, never raw hex.** Write `{colors.glow}` in design notes; new contributors should never need to memorize `#3ddc97`.
4. **Never document hover states.** Apple-tier components document default, active, and focus only — hover is implicit and should never be load-bearing.
5. **Display vs body family is sacred.** Space Grotesk is for headings, the wordmark, and stat numbers. Inter is for everything else. Never blur the line by using Space Grotesk on a paragraph.
6. **Restrict shadows.** The only drop shadow in the system is the colored emerald glow on the active primary CTA. New components earn depth from `{colors.raised-surface}` + `{colors.hairline}` + backdrop-blur, not from gray shadows.
7. **Chrome vs surface alternative.** When adding a new accent surface, decide first whether it is chrome (navbar, footer, dividers — quiet, hairline-led) or surface (cards, panels — raised glass). Don't mix recipes.

## Known Gaps

- **Validation states** are not surfaced — no inputs exist in the hero. Error, success, and disabled treatments for form fields are undefined and must be designed before any contact, sign-up, or demo-request form ships.
- **Dark mode** is not surfaced — the entire system is dark by default. A light mode is not in scope; if it ever becomes one, the emerald accent must be re-tested for AA contrast on white.
- **Specific blur radii** are not surfaced — the design uses Tailwind's `backdrop-blur` (sm, ~8px) and `backdrop-blur-xl` (~24px) by name. Exact pixel values for designers working outside Tailwind are not documented.
- **Dynamic content** behavior is undefined — the stats `4.2B+ / 99.99% / 38ms` are static strings in the build. When fed live data, number-tick animation, locale-aware separators, and abbreviation thresholds (B vs M vs K) need a spec.
- **Footer, forms, ledger visualization panels, and any below-the-fold section** are not surfaced. The current build is hero + navbar only. The `useReveal` hook is shipped for these future surfaces but has no rendered consumer in the hero itself.
- **Reduced-motion** behavior for the cursor spotlight is documented as "continues" (since it's user-driven), but a hard opt-out (e.g., disabling the canvas entirely under `prefers-reduced-motion: reduce`) is not surfaced and should be evaluated for accessibility-strict deployments.
