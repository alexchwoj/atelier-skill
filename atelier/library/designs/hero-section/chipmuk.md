---
version: "1"
name: "Chipmuk — Mouse-Scrub Cinematic Hero"
description: "A fullscreen hero for a creative studio brand built around a paused background MP4 that scrubs forward/backward as the user moves their mouse horizontally. Deep navy canvas (#010828), cream display ink (#EFF4FF), a single neon green accent (#6FFF00), a floating pill nav, and a chunky three-line Poppins 900 heading pinned to the bottom-left. No autoplay, no animation library — the user IS the timeline."
colors:
  background: "#010828"
  cream: "#EFF4FF"
  neon: "#6FFF00"
  navbar-ink: "Tailwind gray-900 (#111827) — pill nav + CTA fill"
  navbar-mute: "Tailwind gray-300 (#D1D5DB) — inactive pill links"
  status-dot: "Tailwind green-400 (#4ADE80) — CTA status affordance"
typography:
  display:
    fontFamily: "Poppins"
    weights: "400 / 600 / 700 / 800 / 900"
    role: "hero heading at weight 900, all UI labels"
  script:
    fontFamily: "Caveat"
    weights: "400 / 700"
    role: "handwritten cursive overlay, reserved for downstream variants"
spacing:
  base: "Tailwind default (4px) — no custom scale"
  hero-padding: "px-6 lg:px-12 horizontal, pb-16 sm:pb-20 lg:pb-24 bottom"
  navbar-padding: "px-5 sm:px-8 horizontal, py-4 sm:py-5 vertical"
  heading-scale: "28px → 40px → 52px → 64px (base / sm / md / lg), fixed pixels NOT clamp()"
rounded:
  pill: "9999px (rounded-full) — nav pill, CTA, status dot, active link"
  none: "0px elsewhere — section is full-bleed, no card rounding"
components:
  mouse-scrub-video: "Paused <video> (no autoplay/loop/controls). A single useRef holds {targetTime, isSeeking, prevX}. window.mousemove computes deltaX/innerWidth × 0.8 × duration and chain-seeks video.currentTime. seeked event re-triggers the chain so fast drags never drop a target."
  floating-pill-nav: "Fixed top, transparent background, three-zone flex: logo (left) · absolutely-centered gray-900 pill (`bg-gray-900 rounded-full px-2 py-1.5`) · CTA (right). First nav item is the active pill (`bg-white text-gray-900`)."
  start-a-project-cta: "Pill button `bg-gray-900 text-white px-5 py-2 rounded-full` with a 2×2 px `bg-green-400` status dot before the label. Hovers to `bg-gray-700` via `transition-colors`."
  bottom-anchored-heading: "Three-line `<h1>` in Poppins 900, uppercase, `whitespace-nowrap`, `tracking-tight`, `leading-[1.05]`, `textShadow: '0 2px 24px rgba(0,0,0,0.55)'`. Parenthetical `( wild )` keeps literal single spaces inside the brackets."
  gradient-veil: "`absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent`, `pointer-events-none`, `aria-hidden` — keeps cream type readable when bright frames pass under it."
  liquid-glass-utility: "Reserved CSS utility for downstream sections — `backdrop-filter: blur(4px)`, `background: rgba(255,255,255,0.01)`, gradient-masked 1.4px inset border. Defined in the design system even though the hero never consumes it."
---

# Chipmuk — Mouse-Scrub Cinematic Hero

> Fivefold showcase. Pairs with the Chipmuk prompt. Use this file to keep Chipmuk's interaction-led restraint when you add new sections — the page should always feel like a paused film reel that wakes up under the cursor, never a marketing landing.

## Overview

Chipmuk is a fullscreen hero for a creative studio brand where the only moving thing on the page is a paused MP4 that scrubs forward and backward under the user's mouse. Deep navy canvas, cream display ink, one neon-green dot of accent, and a three-line Poppins 900 heading anchored to the bottom-left. There is no autoplay, no entry transition, no Framer Motion, no GSAP — the entire motion budget is spent on a single `requestAnimationFrame`-free `video.currentTime` chain-seek.

The governing decision: **interaction IS the animation.** Most hero videos play themselves and ask the viewer to watch. Chipmuk inverts that — the video sits paused at frame zero, and only moves when the user moves. Horizontal mouse delta is normalized against `window.innerWidth`, multiplied by a `SENSITIVITY` of 0.8, scaled by `duration`, then accumulated into a `targetTime` ref. The browser can only honor one seek at a time, so a chain-seek pattern listens for `seeked` and immediately re-issues the next target. The result is a head-turn or character animation that follows the cursor frame-by-frame, with the heading locked to the bottom-left like a film title card. The bet: a studio's reel doesn't need to perform — it needs to respond.

The system is designed to extend without losing this restraint. Downstream sections may consume the reserved `.liquid-glass` utility, swap the `( wild )` parenthetical for another short token, or layer a Caveat cursive overlay onto the heading (see the Orbis.Nft worked example in the prompt), but the contract is the same on every surface: one paused video, one cream Poppins 900 lockup, one rationed neon dot, and zero entry transitions. The page is the brand; the brand is a film reel waiting for the user.

**Key Characteristics:**
- Single dark navy canvas (`{colors.background}` — `#010828`) fills the entire viewport and the video fallback. No second background, no section transitions.
- Cream display ink (`{colors.cream}` — `#EFF4FF`) slightly cooler than pure white so it never glares against the navy.
- One accent rationed to a 2×2 px green dot today (`{colors.neon}` — `#6FFF00`); reserved for cursive overlays in variants.
- Poppins 900 as the only display weight for the hero — `font-black` is non-negotiable.
- Mouse-scrub MP4 as the entire motion system — no autoplay, no loop, no controls.
- Bottom-anchored three-line heading, indented `lg:ml-12`, capped at `max-w-[900px]` — reads like a film poster's lower-third.
- Floating gray-900 pill nav with one active link in white, transparent over the video.
- No entry animations anywhere — the only thing under the user's control is the scrub.

## Colors

> **Source pages analyzed:** Hero (fullscreen), Floating pill nav, Mobile dropdown — every paintable surface in the shipped page.

Three brand tokens plus a tight Tailwind UI slice. The constraint is the point: contrast comes from the navy ↔ cream ratio and the single green dot, never from a second accent.

### Brand & Accent
- **Background** (`{colors.background}` — `#010828`): Deep navy. Page body, video fallback, the entire viewport. Slightly blue-shifted so it reads cinematic, not corporate-black.
- **Cream** (`{colors.cream}` — `#EFF4FF`): Off-white with a cool tint. Hero heading, default body text, the active pill's text-on-gray. Never substitute pure `#FFFFFF` for content type.
- **Neon** (`{colors.neon}` — `#6FFF00`): Bright project green. Rationed to a single use today — the dot before "Start a project". Reserved for cursive overlays in variants.

### Surface (chrome)
- **Navbar ink** (`{colors.navbar-ink}` — `#111827`, Tailwind `gray-900`): Pill nav container, CTA fill. Reads near-black against the navy but never matches it.
- **Hover ink** (`#374151`, Tailwind `gray-700`): CTA hover fill via `transition-colors`. No other component consumes it.
- **Dropdown surface** (`#FFFFFF`, white): Mobile dropdown background only — paired with `shadow-lg`. Never appears on desktop.

### Text on chrome
- **Active link** (`#FFFFFF`, white): Text on the first pill item only. Pairs with `gray-900` pill fill.
- **Inactive link** (`{colors.navbar-mute}` — `#D1D5DB`, Tailwind `gray-300`): Remaining pill links. Shifts to white on hover via `transition-colors`.
- **Mobile dropdown link** (`#1F2937`, Tailwind `gray-800`): Stacked links inside the white mobile dropdown.
- **Dropdown hairline** (`#F3F4F6`, Tailwind `gray-100`): 1px bottom border between dropdown links.

### Status & Affordance
- **Status dot** (`{colors.status-dot}` — `#4ADE80`, Tailwind `green-400`): 2×2 px circle before the CTA label. Communicates "open for projects" without copy.

### Overlay
- **Gradient veil** (`from-black/80 via-black/40 to-transparent`): `h-2/3` painted from the bottom up. Keeps cream type AAA-readable when bright frames scrub underneath.
- **Heading shadow** (`rgba(0,0,0,0.55)` at `0 2px 24px`): Inline `textShadow` on the `<h1>` for the same reason at the type level.

**Constraint** (verbatim from prompt): *"Do not introduce purple, indigo, or any neon colors other than the project green `#6FFF00`."*

## Typography

### Font Family
- **Display / UI:** `font-display: ['Poppins', 'system-ui', 'sans-serif']` — Poppins 400 / 600 / 700 / 800 / 900, loaded via Google Fonts.
- **Script / Accent:** `font-script: ['Caveat', 'cursive']` — Caveat 400 / 700. Loaded but never rendered in the base hero; reserved for variant overlays.
- **OpenType features:** Default. No `font-feature-settings` overrides — Poppins ships with the metrics the design relies on.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `heading-base` | 28px | 900 | 1.05 | tracking-tight | Hero `<h1>` at `<640px` |
| `heading-sm` | 40px | 900 | 1.05 | tracking-tight | Hero `<h1>` at `≥640px` |
| `heading-md` | 52px | 900 | 1.05 | tracking-tight | Hero `<h1>` at `≥768px` |
| `heading-lg` | 64px | 900 | 1.05 | tracking-tight | Hero `<h1>` at `≥1024px` |
| `nav-link` | 14px | 500 | default | default | Pill nav links, both states |
| `cta-label` | 14px | 500 | default | default | "Start a project" label |
| `mobile-link` | 16px | 500 | default | default | Stacked links in white dropdown |
| `body-default` | inherits 16px | 400 | default | default | Any fallback body text (not used on this page) |
| `script-accent` | variant-defined | 400 / 700 | default | default | Reserved Caveat overlay (variants only) |

### Principles
- **Fixed pixel scale, not `clamp()`** — the four breakpoints (28 / 40 / 52 / 64) are tuned to keep three lines fitting at desktop while leaving meaningful padding at mobile. Clamp would defeat `whitespace-nowrap`.
- **`whitespace-nowrap` is a contract** — it guarantees exactly three rendered lines regardless of viewport width. The hero `<section>` is `overflow-hidden` so micro-viewports clip rather than reflow.
- **Hero ships at weight 900** — Poppins 900 (`font-black`) is non-negotiable. Lighter weights read as a different brand.
- **Uppercase only at the hero** — `uppercase` is applied to the `<h1>` exclusively; nav and CTA stay sentence-case to keep the heading the loudest thing on the page.
- **Tracking is `tracking-tight` at display sizes** — Poppins 900 needs negative letter-spacing to keep the lockup dense; default tracking on a 64 px weight 900 reads loose.
- **Caveat is loaded, not consumed** — the base hero never renders it, but the subset is preloaded so variants that add a cursive accent don't pay a font-load delay.
- **Weight 500 is the UI floor** — pill links and CTA both ship at 500. Weight 400 is never used in chrome — it reads underweight against `gray-900`.

### Note on Font Substitutes
If Poppins 900 is unavailable on the loaded Google Fonts subset, clamp to the nearest weight (800) and leave a one-line code comment — never synthesize a fake-bold via CSS, which destroys the optical density Poppins 900 was drawn for. If Poppins itself is unavailable, fall back to the system stack (`system-ui, sans-serif`) but tighten `letter-spacing` to `-0.02em` to compensate for looser default metrics. Caveat has no defined substitute — variants that depend on it must wait for the font to load.

## Layout

### Spacing System
- **Base unit:** Tailwind default `4px` scale. No custom extension.
- **Hero horizontal padding:** `px-6` (24px) base → `lg:px-12` (48px) at ≥1024.
- **Hero bottom padding:** `pb-16` (64px) base → `sm:pb-20` (80px) → `lg:pb-24` (96px).
- **Hero heading indent:** `lg:ml-12` (48px) at desktop. None below `lg`.
- **Navbar horizontal padding:** `px-5` (20px) base → `sm:px-8` (32px).
- **Navbar vertical padding:** `py-4` (16px) base → `sm:py-5` (20px).
- **Pill nav internal padding:** `px-2 py-1.5` (8px × 6px).
- **Pill link padding:** `px-4 py-1.5` (16px × 6px).
- **CTA padding:** `px-5 py-2` (20px × 8px).
- **Mobile dropdown padding:** `pt-16 pb-6 px-5` (64px / 24px / 20px) with `gap-1` between links.
- **CTA-to-status-dot gap:** `gap-2` (8px).

### Grid & Container
- **Hero `<section>`:** `relative h-screen w-full overflow-hidden bg-background` — fills the viewport, clips overflow.
- **Content layer:** `relative z-10 flex flex-col h-full` — pushes the anchor row to fill vertical space.
- **Anchor row:** `flex-1 flex items-end` pins the heading block to the bottom edge.
- **Heading wrapper:** `relative lg:ml-12 max-w-[900px]` — caps line length so the heading never stretches edge-to-edge on ultra-wide displays.
- **Navbar:** `fixed top-0 left-0 right-0 z-50 flex items-center justify-between` — three-zone flex with the pill absolutely centered (`absolute left-1/2 -translate-x-1/2`).
- **No grid system.** The hero is one column; the navbar is a flex row. The system does not need a 12-column grid.

### Whitespace Philosophy
Negative space is the loudest element on the page. The video fills the viewport, but the heading sits in the bottom-left fifth — the remaining four-fifths are deliberately empty so the user's eye is drawn to the moving frames behind the type. The bottom padding (`pb-16` → `pb-24`) and the `max-w-[900px]` cap on the heading wrapper exist precisely to keep that asymmetry. The navbar pill floats with `py-4` of clearance above it so it never feels welded to the top edge. Chipmuk treats silence the way a film treats a held shot: the absence is the composition.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border, no blur | Hero content layer, video, navbar, all pill chrome |
| Soft hairline | `border-b border-gray-100` (1px) | Between mobile dropdown links only |
| Gradient veil | `bg-gradient-to-t from-black/80 via-black/40 to-transparent`, `h-2/3` | Painted above the video to protect heading legibility |
| Product shadow | `shadow-lg` (Tailwind default) | Mobile dropdown white surface only |

**Shadow philosophy.** Chipmuk is flat by default. The page has no card shadows, no inner glows, no decorative blurs. The two depth treatments that exist — the gradient veil and the mobile-dropdown `shadow-lg` — both serve a legibility purpose, not a decorative one. The hero `<h1>` also carries an inline `textShadow: '0 2px 24px rgba(0,0,0,0.55)'`, which counts as a typographic affordance rather than a component shadow. If a future surface needs depth, it should use the reserved `.liquid-glass` utility (`backdrop-filter: blur(4px)`, `1.4px` gradient-masked inset border, `1%` white tint) — never a Tailwind shadow utility.

**Decorative Depth**
- The gradient veil is `pointer-events-none` and `aria-hidden` — it must never block input or read as content.
- The `<h1>` text-shadow is the only typographic shadow on the page.
- `.liquid-glass` exists in `index.css` but is unconsumed by the hero — it is the only sanctioned downstream depth treatment.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `none` | 0px | Hero `<section>`, video, gradient overlay, mobile dropdown surface |
| `xs` | not surfaced | — |
| `sm` | not surfaced | — |
| `md` | not surfaced | — |
| `lg` | not surfaced | — |
| `pill` | 9999px (`rounded-full`) | Center pill nav, every pill link, CTA, status dot, logo (implicit via PNG mask) |
| `full` | 9999px | Same token as pill — Tailwind exposes one keyword |

### Photography Geometry
- **Hero asset:** one MP4 (`cdn.5sdesign.art/projects/Chipmuk/character.mp4`), `object-cover`, full bleed `absolute inset-0 h-full w-full`. Aspect ratio is whatever fills the viewport — the video re-frames to the section.
- **Encoding:** all-intra H.264, 1024 px width, `-g 1 -keyint_min 1 -sc_threshold 0 -tune fastdecode`. Every frame is a keyframe so seeks resolve instantly.
- **Loading:** `preload="auto"` so metadata + first segment ship eagerly. No lazy-loading — the video is the page.
- **Logo:** `/logo.png`, 40 × 40, `object-contain`, transparent background. Black chipmunk silhouette. Not an SVG, not part of the icon system.
- **No stock photography.** No people, no lifestyle imagery, no patterns. The single video carries the entire visual weight.

## Components

### Top Navigation

**Floating pill nav** (`{component.navbar}`)
- Wrapper: `<nav>` at `fixed top-0 left-0 right-0 z-50`, padding `px-5 sm:px-8 py-4 sm:py-5`, transparent fill.
- Three zones: logo (left, `relative z-50`), absolutely-centered pill (`hidden md:flex absolute left-1/2 -translate-x-1/2`), CTA (right, `hidden md:flex`).
- Pill container: `bg-gray-900 rounded-full px-2 py-1.5`.
- **Default state:** all chrome flat over the video, no shadow.
- **Active state:** first nav item ships as `bg-white text-gray-900 text-sm font-medium px-4 py-1.5 rounded-full`. Doubles as the active-link affordance.
- **Focus state:** inherits Tailwind default focus ring — the active pill's white fill on `gray-900` already serves as a high-contrast focus surrogate for the active item.

**Inactive pill link** (`{component.nav-link}`)
- `text-gray-300 text-sm font-medium px-4 py-1.5 rounded-full transition-colors`.
- **Default state:** `text-gray-300` against `gray-900` pill.
- **Focus state:** Tailwind default ring on the `<a>`; underline never used.

**Mobile dropdown link** (`{component.mobile-link}`)
- `text-gray-800 text-base font-medium py-3 border-b border-gray-100 text-left transition-colors`.
- **Default state:** flat against white surface, 1px `gray-100` baseline.
- **Focus state:** Tailwind default focus outline.

### Buttons

**Primary CTA — "Start a project"** (`{component.button-primary}`)
- `hidden md:flex items-center gap-2 bg-gray-900 text-white text-sm font-medium px-5 py-2 rounded-full transition-colors`.
- Leading child: `<span className="w-2 h-2 rounded-full bg-green-400" />`.
- **Default state:** `gray-900` fill, white label, green-400 status dot.
- **Active state:** `bg-gray-700` (applied via the Tailwind `hover` utility per prompt, but treated as the "engaged" surface).
- **Focus state:** Tailwind default focus ring on the `<button>`.

**Secondary — Mobile CTA** (`{component.button-secondary}`)
- Identical class chain to the primary CTA, but re-anchored with `mt-4 mx-auto` inside the dropdown. No visual variant — the same pill, recentered.
- **Default / Active / Focus states:** inherit from the primary CTA.

**Utility — Hamburger toggle** (`{component.button-utility}`)
- `md:hidden relative z-50` containing `<Menu size={22} className="text-gray-900" />` or `<X size={22} className="text-gray-900" />`.
- `aria-label` flips between `'Open menu'` and `'Close menu'`.
- **Default state:** Menu icon, no surface.
- **Active state:** X icon, no surface — the dropdown beneath it is the affordance.
- **Focus state:** Tailwind default focus outline on the `<button>`.

### Cards & Containers

**Hero `<section>`** (`{component.card-hero}`)
- `relative h-screen w-full overflow-hidden bg-background`. Edge-to-edge, no radius, no padding.
- **Default state:** flat navy fill behind the video.
- **Active state:** the underlying video scrubs under cursor — the card itself does not change.

**Mobile dropdown surface** (`{component.card-dropdown}`)
- `fixed top-0 left-0 right-0 z-40 bg-white pt-16 pb-6 px-5 shadow-lg flex flex-col gap-1 md:hidden`.
- **Default state:** hidden — only mounts when `open === true`.
- **Active state:** white surface with `shadow-lg`, links stacked with 1px `gray-100` baselines.

**Reserved utility — `.liquid-glass`** (`{component.card-utility}`)
- Defined in `src/index.css`. `position: relative; background: rgba(255,255,255,0.01); backdrop-filter: blur(4px); border: none; box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);`. The `::before` paints a 1.4px gradient-masked inset border (`rgba(255,255,255,0.45) → 0 → 0.45`).
- **Default state:** unused on the hero — reserved for downstream sections.

### Inputs & Forms

**Note:** no inputs are surfaced on the Chipmuk hero. The CTA is a link / button, not a form. When a future section adds an input, it should use the `.liquid-glass` utility as its base, render label and field in `{colors.cream}` on `{colors.background}`, and reserve `{colors.neon}` for the focus border — not for fill. Hover is undocumented by convention.

### Footer

**Note:** no footer ships on the Chipmuk hero — the page is one full-bleed `<section>` and stops there. When a future surface adds a footer, it should remain on `{colors.background}` with `{colors.cream}` text and no decorative depth; the gradient veil should not be reused as a footer treatment.

## Do's and Don'ts

### Do
- Use `{colors.background}` as the only page fill — body + video fallback + every section behind the navbar.
- Set the hero `<h1>` at Poppins 900 (`font-black`) every time the brand renders large display copy.
- Apply `whitespace-nowrap` to the hero heading so it stays exactly three lines regardless of viewport.
- Reserve `{colors.neon}` for a single, deliberate dot — never use it for fills, gradients, or extended runs of type.
- Keep the gradient veil at `h-2/3` and `from-black/80 via-black/40 to-transparent` whenever a bright media frame can pass under cream type.
- Use Tailwind `transition-colors` for state changes; never reach for `transform`, `scale`, or `opacity` easing.
- Hold the entire scrub state in a single `useRef` — `targetTime`, `isSeeking`, `prevX` — and never lift it into React state.
- Pin the heading to the bottom-left via `flex items-end` + `lg:ml-12 max-w-[900px]` so the composition always reads like a film title card.
- Keep the pill nav transparent and floating; the `gray-900` pill is the only chrome surface allowed over the video.

### Don't
- Don't autoplay, loop, or expose controls on the `<video>` — the user is the timeline.
- Don't import Framer Motion, GSAP, Lottie, or any animation library — the scrub is the entire motion budget.
- Don't substitute fonts. "Similar to Poppins" is not Poppins; "Caveat-like script" is not Caveat.
- Don't round the brand hex values — `#010828`, `#EFF4FF`, `#6FFF00` are exact.
- Don't add a second accent color — no purple, no indigo, no neon other than `{colors.neon}`.
- Don't `clamp()` the hero typography — the fixed 28 / 40 / 52 / 64 px scale is the contract.
- Don't reflow the heading on micro-viewports — let the `<section>`'s `overflow-hidden` clip it instead.
- Don't document hover states in the design system — only default, active, and focus per Apple convention.
- Don't paint a Tailwind `shadow-*` utility on hero or nav chrome — only the mobile dropdown is allowed `shadow-lg`.
- Don't add a `<source>` child to the `<video>` or introduce React state to the scrub — the prompt's exact-reproduction clause forbids both.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤419 | Heading 28px, hero `px-6 pb-16`, navbar `px-5 py-4`; pill nav + desktop CTA `hidden`, hamburger visible. Heading may clip horizontally — by design. |
| Phone | 420–640 | Same as small phone; `whitespace-nowrap` still mandatory. |
| Large phone | 641–735 | Heading bumps to 40px (`sm:text-[40px]`), bottom padding `pb-20`, navbar `px-8 py-5`. Pill nav + CTA still hidden. |
| Tablet portrait | 736–833 | Same as large phone — `md:` not yet engaged. |
| Tablet landscape | 834–1023 | `md:` engaged: pill nav + CTA become `md:flex`, hamburger `md:hidden`. Heading 52px. |
| Small desktop | 1024–1068 | `lg:` engaged: heading 64px, hero `lg:px-12 pb-24`, heading wrapper `lg:ml-12`. |
| Desktop | 1069–1440 | Same as small desktop. Pill nav stays absolutely centered regardless of viewport width. |
| Wide desktop | ≥1441 | `max-w-[900px]` on the heading wrapper prevents the lockup from stretching. Video remains `object-cover`. |

### Touch Targets
- Minimum tappable size: pill link `px-4 py-1.5` = 32px tall — sits under the 44px Apple guidance but is acceptable because the desktop pill is mouse-driven.
- Mobile dropdown links `py-3` + 16px label ≈ 48px tall — the mobile-only surface meets the 44px floor.
- Hamburger toggle: 22px icon inside a tappable area with no explicit `padding` set — recommend `p-2` if expanded for future variants.
- CTA: `px-5 py-2` = 36px tall — desktop only; mobile copy re-renders inside the dropdown with the same dimensions.

### Collapsing Strategy
- **Pill nav:** desktop-only (`hidden md:flex`). Below `md`, the four `NAV_ITEMS` re-render as stacked links inside the white mobile dropdown.
- **CTA:** desktop variant `hidden md:flex`; mobile variant lives inside the dropdown as `mt-4 mx-auto`. Same classes, two anchors.
- **Hamburger:** mobile-only (`md:hidden`). Toggles `open` state in the navbar; never animated on entry.
- **Hero heading:** scales 28 → 40 → 52 → 64 across breakpoints. `whitespace-nowrap` is preserved at every size — micro-viewport overflow is clipped by `overflow-hidden`.
- **Heading wrapper:** drops the `lg:ml-12` indent below `lg`, so mobile copy aligns with the section's left padding directly.
- **Gradient veil:** unchanged across breakpoints — `h-2/3` reads the same on every viewport because the heading anchor moves with the padding scale.

### Image Behavior
- **Video:** one source URL, no `srcset`. `preload="auto"` ships metadata + first segment immediately. Encoded at 1024 px width so the same asset serves mobile and 1440-wide desktop without re-encoding. `object-cover` re-crops for tall viewports.
- **Logo PNG:** fixed 40 × 40, `object-contain`. No `srcset` and no lazy-loading — the asset is too small to benefit and ships above the fold.
- **No lazy-loading anywhere** — every visual element on the page is above the fold by definition (the page is one viewport tall).

## Iteration Guide

1. **Edit only the customization slots from the prompt's cheat sheet** — `BRAND_NAME`, `VIDEO_URL`, `SENSITIVITY`, heading copy, nav items, CTA label, heading font, accent color, logo file. Everything else is invariant.
2. **Variants live in components, not tokens.** If a sister hero needs a cursive overlay, add a `<span>` inside the heading wrapper consuming `font-script` and `{colors.neon}` — do not introduce a new color or a new font family.
3. **Reference tokens, not raw hex.** Use `{colors.background}`, `{colors.cream}`, `{colors.neon}` in copy and component definitions; raw hex is acceptable only in the YAML front-matter and the Tailwind config.
4. **Never document hover.** Only default, active, and focus states belong in this file. Hover is a Tailwind implementation detail.
5. **Display family is Poppins; script family is Caveat.** No third family ever enters the system without a versioned migration of the YAML `typography` block.
6. **Shadows are restricted.** `shadow-lg` is the only Tailwind shadow allowed, and only on the mobile dropdown. New depth treatments must consume `.liquid-glass`.
7. **Chrome vs surface:** the navbar is chrome (transparent, floats); the hero is a surface (`bg-background`, full-bleed). Future sections must declare which they are — never both.

## Known Gaps

- **No validation, error, or empty states** are surfaced on this page — the hero has no form. Variants that add input must define those states fresh.
- **No light-mode counterpart.** The design ships a single dark theme; a light variant would require re-grading the gradient veil and the `textShadow` for contrast.
- **`.liquid-glass` consumers are undocumented.** The utility is defined but unused — the radius, sizing, and content treatment for a future card on this utility are not surfaced in the analyzed page.
- **Focus-ring specifics inherit Tailwind defaults** — exact ring color, width, and offset for the brand are not surfaced; future audit should pin a deliberate ring on `{colors.neon}` or `{colors.cream}`.
- **`xs / sm / md / lg` radius tokens are not surfaced in analyzed pages** — only `none` and `pill` exist today. New components requiring a 6–12 px radius should propose a token before shipping.
- **No motion specification beyond the scrub.** `transition-colors` is the only documented easing; entry transitions, exit transitions, and page transitions are deliberately undefined because the brand argues against them.
