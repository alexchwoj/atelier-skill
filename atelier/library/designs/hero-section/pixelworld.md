---
version: "1"
name: "PixelWorld — Voxel Solar System Hero"
description: "A dark-cinematic single-page hero whose background IS a live WebGPU canvas: an 8.6-radius hollow voxel globe rendered in real time with GTAO, SSR, and Bloom. The world is rebuilt one cube at a time — Mercury through Neptune — with a single violet accent (#6E5BE7) over a near-black sky (#06060a). Manrope drives the display weight; Inter carries the prose."
colors:
  background: "#06060a"
  foreground: "#ffffff"
  primary: "#6E5BE7"
  primary-hover: "#8170ec"
  body-text: "rgba(255,255,255,0.50)"
  muted-text: "rgba(255,255,255,0.35)"
  nav-text: "rgba(255,255,255,0.55)"
  hairline: "rgba(255,255,255,0.06)"
  border-soft: "rgba(255,255,255,0.15)"
  active-pill: "rgba(255,255,255,0.08)"
typography:
  display:
    fontFamily: "Manrope"
    weights: "400 / 500 / 600 / 700 / 800"
    role: "logo, H1, stat numbers, planet switcher labels"
  body:
    fontFamily: "Inter"
    weights: "300 / 400 / 500 / 600 / 700"
    role: "nav links, hero description, CTAs, stat labels"
spacing:
  base: "Tailwind default (4px)"
  container: "max-width 1320px, padding 0 56px (desktop) → 0 24px (mobile)"
  hero-content: "50% column, max-width 560px"
  hero-stats: "gap 40px, padding-top 32px, 120×1px hairline rule above"
rounded:
  nav-cta: "8px"
  buttons: "10px"
  planet-pill: "10px"
components:
  voxel-globe: "Hollow voxel sphere (SHELL_INNER 5.6 → SPHERE_R 8.6) built from one InstancedMesh per category — `planet` (rough .82) and `ring` (rough .65) — using `MeshPhysicalNodeMaterial` clearcoat. Auto-rotates at 0.5 with OrbitControls damping 0.05."
  planet-switcher: "Bottom-center #variation-bar with 8 .morph-btn (Mercury → Neptune), data-variation 0..7, Manrope 600 / 14px. Active pill = rgba(255,255,255,0.08)."
  cursor-repulsion: "Raycast onto a camera-facing plane, repulsionRadius 10 / strength 18, cubic falloff, ~60% radial + 40% scatter, lerp-out 8.0 / return 2.5 — blocks explode away and settle back."
  morph-engine: "startMorph(target) lerps every instance position + color over 1.8s cubic ease-in-out with a per-voxel sin(x*0.5 + z*0.7) stagger; bloom strength lerps between VARIATION_BLOOM stops; Saturn's ring fans out / collapses inline."
  post-stack: "PostProcessing MRT → GTAO (16 samples, r .60) → SSR (.25/.25) → Bloom (.5/.2/.8), each wrapped in try/catch with graceful degradation."
---

# PixelWorld — Voxel Solar System Hero

> Fivefold showcase. Pairs with the PixelWorld prompt. Use this file to keep PixelWorld's render-as-hero discipline when you extend the page — the canvas IS the marketing, the copy is the caption.

## Overview

PixelWorld is a single-page hero whose entire background is a live WebGPU voxel globe — eight planets, modelled from cubic voxels, rendered in real time at 60fps. Near-black space (`{colors.background}`), a single violet accent (`{colors.primary}`), Manrope 800 in the headline, Inter 300 in the body. There is no looping CloudFront mp4, no static hero illustration, no Lottie. The page boots a `three/webgpu` scene, builds a hollow sphere shell of voxels, lights it with ACES Filmic tone mapping, runs GTAO + SSR + Bloom over the frame, and lets the user cursor-scatter the cubes.

The governing decision: **the render IS the hero.** Most landing pages pretend the background is alive — a 12MB looping video, a CSS gradient with a parallax tilt, a noise overlay. PixelWorld actually is. The camera holds at `(26, 18, 52)` with a `setViewOffset` of `-12%` so the globe sits in the right two-thirds while the left column stays clean for copy; the voxels auto-rotate at `0.5`; eight planet buttons morph the whole geometry over a 1.8s cubic ease-in-out with a per-voxel sin stagger; and a cursor-repulsion field with `radius 10 / strength 18` lets you punch holes in Mars. The bet: a real-time, interactive voxel system communicates the "PixelWorld" thesis (re-see reality one cube at a time) more credibly than any video could.

The system extends across the surface the way an editorial spread does — chrome stays whisper-quiet so the canvas can speak. Navbar transparent, no card chrome, no panel borders, no shadows. The only chrome is the planet switcher and the stat hairline. Every additional section that joins this page later must inherit the same discipline: the render is the loudest object on screen, copy lives at 50% white, and the accent is rationed to four surfaces (logo span, H1 em, primary CTA, eyebrow rule).

**Key Characteristics:**
- **Near-black space canvas** (`{colors.background}` — #06060a) and pure-white text (`{colors.foreground}`). No yellow, no gold, no teal, no neon — the only accent is `{colors.primary}` (#6E5BE7), hover-lifted to `{colors.primary-hover}` (#8170ec).
- **Manrope 800** for the H1, logo, stat numbers, and planet switcher labels. **Inter 300–500** for nav, description, CTAs, and stat captions. Two families, two roles.
- **Live WebGPU canvas** as the hero background — `three/webgpu` with the TSL node system, ACES Filmic tone mapping, exposure 1.0, VSM shadow map. No mp4, no HDR fetch on first paint (a PMREM cube is generated from a `#0a1430 → #03040a` dark-space gradient).
- **Hollow voxel sphere** (SPHERE_R 8.6, SHELL_INNER 5.6, RING_COUNT 720, center `(0, 8, 0)`) rendered as one `InstancedMesh` per category. Saturn's ring is a tilted (`0.46 rad`) annulus that fans out only during Saturn's morph.
- **Eight planet morphs** with per-planet bloom strength (`VARIATION_BLOOM`), per-planet scale (`PLANET_SCALE`), and per-planet surface noise — Earth gets blue oceans + green land + ice caps above `|lat| 0.82`; Jupiter gets latitude bands + a Great Red Spot.
- **Cursor repulsion** as the signature interaction: blocks explode away from the cursor with cubic falloff, lerp out fast (`8.0`) and return slow (`2.5`).
- **Entry stagger** via CSS keyframes only — `fadeUp 0.9s cubic-bezier(0.16,1,0.3,1)` stepped at `.2 / .35 / .5 / .65 / .8s`. No GSAP, no Framer.
- **Icon-free hero** — the visual interest is the render. Iconography would compete with the cubes.

## Colors

> **Source pages analyzed:** PixelWorld hero (full-bleed, the only shipped surface). Scope: navbar, hero copy column, planet switcher, stat row, and the WebGPU canvas chrome. Nine static tokens plus one accent — everything else is alpha-on-white.

### Surface
- **Background** (`{colors.background}` — #06060a): Page background and WebGPU canvas clear color. Near-black with a faint blue lean — reads as space, not absence of light. Used on `html, body` and as the renderer clear value.
- **Foreground** (`{colors.foreground}` — #ffffff): H1 base color, logo wordmark, active planet pill text, primary CTA text, stat numbers.

### Brand & Accent
- **Primary** (`{colors.primary}` — #6E5BE7): The single accent. Lands on the logo's `World` span, the H1 `<em>` emphasis word, the primary CTA fill, the nav-cta fill, and the optional eyebrow rule + dash.
- **Primary hover** (`{colors.primary-hover}` — #8170ec): Hover-lifted accent for every filled accent surface. Paired with a `translateY(-1px..-2px)` lift; never paired with a glow.

### Text
- **Body text** (`{colors.body-text}` — rgba(255,255,255,0.50)): Hero description (15px Inter 300, line-height 1.7, max-width 420px). Second-tier paragraph copy elsewhere.
- **Muted text** (`{colors.muted-text}` — rgba(255,255,255,0.35)): Stat captions and idle planet buttons at rest.
- **Nav text** (`{colors.nav-text}` — rgba(255,255,255,0.55)): Nav links at rest; resolves to `{colors.foreground}` when interacted with.

### Hairlines & Borders
- **Hairline** (`{colors.hairline}` — rgba(255,255,255,0.06)): The 120×1px rule drawn via `::before` above the stat row. The quietest line in the system.
- **Border-soft** (`{colors.border-soft}` — rgba(255,255,255,0.15)): Secondary CTA border at rest. Lifts to `rgba(255,255,255,0.4)` under interaction without being added to the token table — that is an interaction value, not a theme color.
- **Active pill** (`{colors.active-pill}` — rgba(255,255,255,0.08)): Selected planet button background. A quiet pill, not a glow.

### Constraint
Verbatim from the prompt: *"Do not use yellow/gold, teal, or neon accents anywhere — the only accent is `#6E5BE7`."* Treat this as a license boundary, not a suggestion.

## Typography

### Font Family
- **Display** — `'Manrope', sans-serif`. Weights 400 / 500 / 600 / 700 / 800. Loaded with Inter in a single Google Fonts call.
- **Body** — `'Inter', sans-serif`. Weights 300 / 400 / 500 / 600 / 700.
- **OpenType:** default features (`liga`, `kern`) on; no `salt`, no `ss0x` stylistic alternates, no tabular figures requested in the shipped hero. Stat numbers are proportional.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| Logo | 24px | Manrope 800 | 1.0 | -0.8px | `.nav-logo` wordmark, with accent span on `World` |
| Nav link | 13px | Inter 400 | 1.0 | +0.2px | `.nav-links a` at rest |
| Nav CTA | 13px | Inter 500 | 1.0 | +0.2px | `.nav-cta` filled accent |
| Eyebrow | 11px | Inter 600 | 1.0 | +2.5px uppercase | `.hero-label` (optional; omitted in shipped hero, reserved) |
| H1 | clamp(40px, 4.2vw, 68px) | Manrope 800 | 1.06 | -2px | `.hero-h1` — `<em>` recolors to accent, weight unchanged |
| Hero description | 15px | Inter 300 | 1.7 | 0 | `.hero-desc`, color `{colors.body-text}`, max-width 420px |
| Primary CTA | 14px | Inter 500 | 1.0 | +0.2px | `.btn-primary` filled accent |
| Secondary CTA | 14px | Inter 400 | 1.0 | +0.2px | `.btn-secondary` ghost |
| Stat number | 32px | Manrope 700 | 1.0 | -0.5px | `.hero-stat-number` |
| Stat label | 12px | Inter 400 | 1.0 | +0.3px | `.hero-stat-label`, color `{colors.muted-text}` |
| Planet button | 14px | Manrope 600 | 1.0 | +0.2px | `#variation-bar .morph-btn` |
| H1 mobile | 36px | Manrope 800 | 1.06 | -2px | `@media (max-width:900px)` fixed step |

### Principles
- **Two families, two roles.** Manrope is reserved for display weight (logo, H1, stat numbers, planet labels). Inter carries every paragraph and chrome character. No serif, no monospace — the only "technical" texture is the voxel render.
- **Negative tracking at display sizes.** H1 at `-2px`, logo at `-0.8px`, stat numbers at `-0.5px`. The display face pulls in; the body face breathes out at `+0.2px..+0.3px`.
- **Italics are banned in emphasis.** The H1 `<em>` is `font-style: normal`, weight 800, recolored to `{colors.primary}`. Italics would soften the editorial pose; the accent does the work.
- **Body weight is 300, not 400.** The hero description ships at Inter Light over 50% white at 15px — deliberately quiet so the canvas reads first.
- **Eyebrow uppercase is +2.5px tracking.** When the optional eyebrow rule ships, it pairs an 11px uppercase Inter 600 caption with a 32×1px accent dash. Never use sentence-case at this size.
- **Stat caption is 12px Inter 400, never bold.** Numbers shout in Manrope 700; labels whisper underneath.

### Note on Font Substitutes
If Manrope is unavailable, fall back to a geometric grotesk (e.g. `Plus Jakarta Sans` 800, `DM Sans` 800) and reduce H1 tracking from `-2px` to `-1.5px` — most substitutes are slightly wider than Manrope at 800. If Inter is unavailable, fall back to `'system-ui', sans-serif` and lift the hero description from 300 to 400 to recover x-height — Inter Light is unusually open and most system stacks at 300 read as hairline.

## Layout

### Spacing System
- **Base unit:** Tailwind default 4px scale (4 / 8 / 12 / 16 / 24 / 32 / 40 / 56 / 72 / 120).
- **Section padding (hero):** full-bleed — section is `100vh`, container handles the horizontal inset.
- **Container inset:** `0 56px` desktop → `0 24px` mobile (single break at 900px).
- **Hero stat block:** `margin-top: 56px`, `padding-top: 32px`, with a `120×1px` hairline above drawn via `::before`. Gap between stat columns: 40px desktop, 24px mobile.
- **Hero buttons:** gap 16px between primary and secondary.
- **Planet switcher:** gap 2px between chips (the active pill carries its own background to separate them, so 2px reads as a tight row, not a list).
- **Navbar:** 72px tall desktop, 60px mobile. Nav link gap 36px.

### Grid & Container
- **Max content width:** 1320px on the container — wide enough to host a 50%-column copy block at 560px with the canvas breathing on the right.
- **Column pattern:** single column, 50% wide (`max-width: 560px`) for hero copy. The other 50% is intentionally left empty — that is where the voxel globe lives after the `-12%` view offset.
- **Vertical rhythm:** flex column inside `.hero-content` — H1 → 24px → description → 40px → buttons → 56px (+ 32px above hairline) → stat row.

### Whitespace Philosophy
Whitespace is the lighting rig here. The reason the canvas reads as cinematic is that the copy column refuses to fill its half — H1 wraps to two lines, the description hard-stops at `max-width: 420px`, the stat row is two items (not four), and the secondary buttons do not exist. Every additional element subtracts depth from the globe. Negative space is the cheapest GTAO pass in the system: empty real estate makes the bloom around Saturn's ring readable. Resist the urge to add a third stat, a feature row, or a logo strip — they will eat the render.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No border, no shadow | Default for the navbar, the hero copy, and the section background — chrome stays in the plane of the page so the canvas owns z-depth |
| Soft hairline | `1px solid rgba(255,255,255,0.06)` (decorative) or `0.15` (interactive) | Stat divider and secondary CTA border — the only borders in the system |
| Backdrop blur | None on chrome; `scene.backgroundBlurriness = 0.4` inside the WebGPU env map | Reserved for the canvas environment, never applied to DOM surfaces |
| Product depth | Bloom strength 0.5 (post pass) + GTAO radius 0.60 + SSR strength 0.25 | The voxel globe — depth lives inside the canvas, never on top of it |

**Shadow philosophy.** PixelWorld treats DOM shadows as forbidden. There are no `box-shadow` declarations on any chrome — no card lift, no button glow, no nav drop. The only "shadows" in the system are the physically simulated ones inside the WebGPU render (VSM shadow map on the directional light, GTAO occlusion on inner voxel crevices, SSR cubelet-to-cubelet bounces). When chrome casts a shadow on a canvas-driven hero, the eye reads it as a paste-up. Keep the chrome flat; let the render carry depth.

**Decorative Depth.**
- 120 additive dust motes (`#cfe0ff`, slow sine drift) wrap around the camera frustum and read as faint stars.
- 40 instanced stardust quads spawn in a `radius 10→17` shell with a per-planet tint palette (greys for Mercury, blue/white for Earth, gold for Saturn).
- Per-planet bloom strength `[0.14, 0.18, 0.22, 0.16, 0.20, 0.26, 0.18, 0.22]` modulates how much the post-bloom flares around each world — Saturn carries the most.
- Procedural environment map: PMREM cube from `#0a1430 → #03040a` plus a single emissive sun sphere for PBR highlights.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| none | 0 | Section edges, hairline rule, canvas |
| sm | 8px | `.nav-cta` (the smaller filled accent) |
| md | 10px | `.btn-primary`, `.btn-secondary`, `#variation-bar .morph-btn` (and `.active` pill) |
| lg | 12px | `#variation-bar` outer container (decorative, transparent — kept for symmetry if a bg ever lands here) |
| pill | 9999px | Reserved — not used in shipped hero; available for future tag chips |
| full | 50% | Reserved — not used (no avatars, no circular icons in shipped hero) |

### Photography Geometry
- **Hero aspect ratio:** N/A — the hero is a live WebGPU canvas at full viewport (`100vh`), not a still image. Aspect adapts to viewport.
- **Static imagery:** none. No hero photo, no illustration, no looping mp4, no HDR fetch on first paint.
- **Environment map:** procedural PMREM cube generated in-engine; never fetched, never cached as a JPEG.
- **Image radius behavior:** N/A — no raster image surfaces in shipped hero.
- **Loading strategy:** the only "asset" is the dynamic-imported `three/webgpu` + post-processing modules; each is wrapped in try/catch with WebGL fallback. No `loading="lazy"` decisions exist because no `<img>` exists.

## Components

### Top Navigation

**Navbar** (`{component.navbar}`) — fixed, `72px` tall (60px mobile), transparent background, `z-index: 2000`. Container is `pointer-events: none` with `pointer-events: auto` re-enabled on links and the CTA so OrbitControls can receive drags through the empty regions of the bar. Default state: transparent. Focus state: nav links and CTA expose a `2px solid {colors.primary}` outline with `outline-offset: 2px` via `:focus-visible`. The `* { outline: none !important }` reset in the prompt's Layer 4 must be tightened per element so keyboard navigation stays legible.

**Nav logo** (`{component.nav-logo}`) — Manrope 800, 24px, `-0.8px` tracking, `{colors.foreground}` with the `World` span recolored to `{colors.primary}`. No icon mark.

### Buttons

**Primary CTA** (`{component.btn-primary}`) — filled accent. Default: background `{colors.primary}`, color `{colors.foreground}`, Inter 500 14px, `padding: 14px 32px`, `border-radius: 10px`, no border. Active state: background resolves to `{colors.primary-hover}` (#8170ec) with a `translateY(-2px)` lift. Focus: `2px solid {colors.primary}` outline at `+2px` offset.

**Secondary CTA** (`{component.btn-secondary}`) — ghost. Default: transparent background, `1px solid {colors.border-soft}`, color `rgba(255,255,255,0.7)`, Inter 400 14px, `padding: 14px 28px`, `border-radius: 10px`. Active state: border resolves to `rgba(255,255,255,0.4)`, color resolves to `{colors.foreground}`, lift `translateY(-2px)`. Focus: same accent outline as primary.

**Nav CTA** (`{component.nav-cta}`) — filled accent, smaller. Inter 500 13px, `padding: 10px 24px`, `border-radius: 8px`. Same accent fill / hover-lift / focus convention as the primary CTA, sized down for the navbar rhythm.

### Cards & Containers

**Stat block** (`{component.stat-block}`) — a card with no chrome. Manrope 700 32px number stacked over Inter 400 12px label at `{colors.muted-text}`. The "card" boundary is the 120×1px hairline drawn above the row via `.hero-stats::before` — there is no surface fill, no padding box, no shadow.

**Planet switcher container** (`{component.variation-bar}`) — `position: absolute; bottom: 28px; left: 50%; transform: translateX(-50%)`, `flex-wrap: wrap`, `max-width: min(92vw, 760px)`, gap 2px. Background transparent, border none, padding 0. Hosts 8 `morph-btn` chips.

**Hero content column** (`{component.hero-content}`) — flex column, 50% wide, `max-width: 560px`, `pointer-events: none` with `auto` re-enabled per interactive child. No border, no fill, no surface treatment — it is a layout container, not a card.

### Inputs & Forms

**Planet chip** (`{component.morph-btn}`) — segmented control. Default: transparent background, color `{colors.muted-text}`, Manrope 600 14px, `padding: 8px 15px`, `border-radius: 10px`, `transition: all 0.3s ease`. Active state (selected): background `{colors.active-pill}`, color `{colors.foreground}`. Focus: `2px solid {colors.primary}` outline at `+2px` offset. The chip is the only true "input" in shipped hero — there are no text fields, no toggles, no selects.

### Footer

**Footer** — not shipped in the hero surface. If a footer is later added, inherit the hero's chrome-quiet rule: transparent background, Inter 13px at `{colors.nav-text}`, hairline divider in `{colors.hairline}`, no logo restate, no large CTA. Treat it as a single muted row.

## Do's and Don'ts

### Do
- **Use** `{colors.primary}` on exactly four surfaces: logo `World` span, H1 `<em>`, primary CTA fill, eyebrow rule. Adding a fifth dilutes the system.
- **Set** every filled accent button's hover to `{colors.primary-hover}` (#8170ec) paired with a `translateY(-1px..-2px)` lift — never with a glow or shadow.
- **Apply** the `cubic-bezier(0.16, 1, 0.3, 1)` easing to every CSS entry animation. Steps at `.2 / .35 / .5 / .65 / .8s`. Duration `0.9s`. Fill `both`.
- **Reserve** Manrope 800 for display roles (H1, logo, stat numbers). Drop to Manrope 600 only for the planet switcher and 700 only for stat numbers.
- **Keep** the hero copy at `width: 50%; max-width: 560px` so the WebGPU canvas owns the right two-thirds after the `-12%` view offset.
- **Use** `pointer-events: none` on the hero copy layer with `auto` re-enabled per button so OrbitControls and cursor repulsion receive mouse events through the headline.
- **Cap** `pixelRatio` at `min(devicePixelRatio, 1.5)` and adaptively lower AO / SSR samples when the camera approaches — the 60fps stat must be defensible.
- **Wrap** every post-processing import (GTAO, SSR, Bloom) in try/catch and silently skip if the add-on fails — the hero must never break to a white screen.
- **Hold** `prefers-reduced-motion` by slowing or stopping auto-rotate and resolving CSS entry animations to their end state. Cursor repulsion stays — it is user-initiated.

### Don't
- **Don't** introduce yellow, gold, teal, or neon accents — verbatim prompt constraint, the only accent is `{colors.primary}`.
- **Don't** italicize the H1 `<em>`. Recolor to accent and keep weight 800 — italics soften the editorial pose.
- **Don't** add `box-shadow` to any DOM surface. Depth lives inside the canvas (bloom + GTAO + SSR), never on chrome.
- **Don't** swap the live WebGPU canvas for a video, GIF, or static image — the render IS the hero, that is the governing decision.
- **Don't** drop the `-12%` `setViewOffset` — it is what keeps the left copy column readable over the bright globe.
- **Don't** add a third stat to the hero row. Two items keep the hairline rule honest.
- **Don't** load an HDR environment map on first paint — generate the PMREM cube procedurally from `#0a1430 → #03040a`.
- **Don't** change the globe constants (`SPHERE_R 8.6`, `SHELL_INNER 5.6`, `RING_COUNT 720`, center `(0, 8, 0)`) or the `PLANET_SCALE` / `VARIATION_BLOOM` arrays.
- **Don't** use the `* { outline: none !important }` reset as written for keyboard users — re-enable a `:focus-visible` outline per interactive element.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤419px | Container padding 24px; H1 fixed 36px; planet bar wraps to multiple rows |
| Phone | 420–640px | Same as small phone; stat row gap 24px |
| Large phone | 641–735px | Same as phone; planet bar still wraps; nav links hidden |
| Tablet portrait | 736–833px | Container padding 24px; nav links still hidden under 900px; hero content full width |
| Tablet landscape | 834–899px | Same as tablet portrait — single breakpoint at 900px gates the full layout shift |
| Small desktop | 900–1023px | Container padding 56px; nav links visible; hero content 50% / max 560px; H1 resumes clamp |
| Desktop | 1024–1440px | Same as small desktop; container caps at 1320px |
| Wide desktop | ≥1441px | Container caps at 1320px and centers; canvas continues full-bleed behind |

### Touch Targets
- Minimum tap area 44×44px. The planet chip at `8px × 15px` padding around a 14px label clears this comfortably (38–42px visual, 44px with the chip gap absorbed).
- Primary CTA at `14px × 32px` padding around a 14px label hits ~46px tall — meets target.
- Nav CTA at `10px × 24px` around a 13px label hits ~38px tall on mobile — acceptable in the 60px navbar; not a primary tap target.

### Collapsing Strategy
- **Navbar:** 72px → 60px at 900px. Nav links list hidden; CTA persists.
- **Hero copy column:** 50% width → 100% width at 900px; `max-width` released so copy fills the container inset.
- **H1:** `clamp(40px, 4.2vw, 68px)` → fixed `36px` at 900px (overrides the clamp).
- **Stat row:** gap 40px / margin-top 56px → gap 24px / margin-top 32px at 900px. Two items remain side-by-side.
- **Planet switcher:** `flex-wrap: wrap` lets the row break into two or three rows on narrow viewports without code intervention.
- **Canvas:** never resized down; pixel-ratio cap and adaptive AO/SSR sample counts keep the cost bounded.

### Image Behavior
- No `<img>` elements in shipped hero — no srcset, no aspect ratios, no lazy-loading rules to document.
- The WebGPU canvas resizes on `window.resize` and re-applies the `-12%` view offset. The renderer pixel ratio is capped at `min(devicePixelRatio, 1.5)` on every resize so high-DPR phones don't blow the frame budget.
- The procedural PMREM env map is generated once at boot and reused for every planet morph — never re-fetched, never re-baked.

## Iteration Guide

1. **Extend by adding canvas, not chrome.** New content (an About strip, a features row, a CTA section) must live below the 100vh hero. Do not add a second column inside the hero, do not stack a card over the canvas, do not introduce a hero overlay panel.
2. **Variants live in components, never in tokens.** When you need a third button (e.g. a tertiary text link), add a `.btn-text` component class — do not invent a fourth accent color or a fifth radius.
3. **Reference tokens by name in every new declaration.** Use `{colors.primary}` not `#6E5BE7`, `{colors.body-text}` not `rgba(255,255,255,0.5)`. This is what keeps the system portable.
4. **Never document hover.** Apple convention: default / active / focus only. Hover is an interaction value, not a design state — document it inside the component CSS, not in the design contract.
5. **Display vs body family rule is non-negotiable.** Manrope for display weight, Inter for chrome and paragraph. No Manrope at body sizes, no Inter at headline weight.
6. **Shadows are forbidden on chrome.** Depth belongs to the canvas (bloom + GTAO + SSR). If a new component asks for elevation, return to the hairline or the active pill instead.
7. **Chrome vs surface alternative:** when in doubt, prefer chrome that disappears (transparent background, hairline border) over a surface that asserts itself. The canvas is the loudest object on screen; everything else is caption.

## Known Gaps

- **Validation / error states** are not surfaced — the shipped hero has no form, no input, no submit feedback. If a contact form lands later, the system has no documented error color (red is implicitly forbidden by the "no yellow / teal / neon" constraint, so the rule needs an explicit carve-out).
- **Light mode** is not surfaced — the system is dark-only. A light variant would require re-pricing every alpha-on-white token against a light surface and is not surfaced in analyzed pages.
- **Tabular figures / monospace** are not surfaced — the stat numbers are proportional Manrope 700, which is fine at two items but will jitter if the row ever animates a count-up. A `font-variant-numeric: tabular-nums` rule is not in the analyzed pages.
- **Specific blur radii** for any potential backdrop-blur chrome are not surfaced — `backgroundBlurriness 0.4` is a WebGPU environment value, not a CSS one. No CSS `backdrop-filter` is shipped.
- **Dynamic content** (long planet labels in other languages, an i18n'd description) is not surfaced — the planet switcher uses `white-space: nowrap` and the row will overflow if labels grow much beyond 9 characters per chip.
- **Footer chrome** is not surfaced — the hero is a single 100vh surface. A footer convention is hinted at in the Components section but not specified in the source prompt.
