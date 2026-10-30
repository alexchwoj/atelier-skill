---
version: "1"
name: "3DVIEW — Real-Time 3D & Virtual Reality Hero"
description: "A dark cinematic hero for a spatial-computing platform that turns physical spaces into navigable VR. Full-screen interactive WebGL grid-scan backdrop (#07060b background, #2F293A grid lines, #a89fff scan beam), floating liquid-glass nav pill, Montserrat 800 headline with violet→magenta gradient (#a89fff → #ff9ffc), Open Sans body. No video, no image — the backdrop is a custom fragment shader."
colors:
  bg: "#07060b"
  bg-2: "#0b0912"
  ink: "#f4f1fb"
  ink-dim: "#a39db8"
  ink-faint: "#6f6985"
  accent: "#a89fff"
  accent-2: "#ff9ffc"
  line: "#2f293a"
typography:
  display:
    fontFamily: "Montserrat"
    weights: "700 / 800"
    role: "brand wordmark + hero headline"
  body:
    fontFamily: "Open Sans"
    weights: "400 / 500 / 600 / 700"
    role: "lede, nav links, CTAs, all secondary copy"
spacing:
  base: "vanilla CSS, no Tailwind — uses px + clamp()"
  radius: "16px default; 999px for the nav pill and CTAs"
  container: "nav max-width 720px; content column max-width 820px; padding clamp(20px, 5vw, 64px)"
rounded:
  default: "16px"
  pill: "999px"
  preview: "8px"
  badge: "6px"
components:
  spatial-grid: "Custom WebGL shader field — orthographic full-screen quad running a raymarched grid + animated scan beam, with optional bloom + chromatic aberration via the `postprocessing` library"
  liquid-glass-nav: "Floating frosted-glass pill — backdrop-filter blur(20px) saturate(180%), inset hairline highlights, glossy ::before sheen, border-radius 999px"
  gradient-headline: "Montserrat 800 clamp(30px, 4.4vw, 54px) with an inline accent span gradient-clipped from --accent to --accent-2"
  legibility-veil: "Stacked radial + linear darkening over the WebGL canvas so the centered copy stays AAA-readable against the live grid"
  rise-keyframe: "Single CSS @keyframes rise — opacity 0→1 + translateY(18px→0), staggered 0s / 0.16s / 0.24s across headline / lede / actions"
  cta-primary: "Violet→magenta gradient fill, ink color #0a0810, 999px radius, 8px 30px -8px rgba(168,159,255,0.7) shadow"
  cta-ghost: "Hairline 1px solid rgba(255,255,255,0.14) border, rgba(255,255,255,0.02) fill, --ink color"
  nav-cta: "Violet-tinted pill — 1px rgba(168,159,255,0.28) border, rgba(168,159,255,0.06) fill"
---

# 3DVIEW — Real-Time 3D & Virtual Reality Hero

> Fivefold showcase. Pairs with the 3DVIEW prompt. Use this file to keep 3DVIEW's signature feel when you extend the page — it should always read as a cinematic spatial-computing console, not a generic SaaS landing.

## Overview

3DVIEW is **a hero section for a real-time spatial-computing platform that turns physical spaces into navigable 3D virtual reality.** The page opens on a near-black field (`{colors.bg}` `#07060b`) carrying a live, interactive WebGL grid that pitches, yaws, and skews with the cursor while a violet scan beam sweeps across it. Above the grid floats a single frosted-glass nav pill; below it sits a centered Montserrat 800 headline whose accent words are gradient-clipped from violet to magenta. Two CTAs — a violet gradient primary and a hairline ghost — finish the composition.

The governing decision: **the backdrop is the product, not a backdrop.** Most spatial-computing landings reach for a hero video — a recorded lidar scan, a stock VR clip, a hosted MP4 looping behind the headline. 3DVIEW refuses that. The entire field is a custom fragment shader (`SpatialGrid`) — raymarched grid lines, an animated scan beam, bloom and chromatic aberration in post — that responds to the user's mouse over the entire hero because the content layer passes pointer events through. The decision compounds in every choice: no third-party CDN, no video file, no Lottie, no motion library beyond a single CSS keyframe. What sells the spatial-computing promise is the fact that the page itself behaves like a spatial-computing surface — when you move the cursor, the world tilts. The headline merely names what the backdrop is already demonstrating.

The system extends by repeating its primitives, never by adding new ones. Any additional surface (feature module, capture gallery, pricing strip) inherits the same two-family type pairing, the same eight-token color ramp, the same 16px / 999px radius pair, and the same `rise` keyframe for entrance. New components are built by stacking liquid-glass + legibility-veil + gradient-text rather than reaching for a card library. The shader is the only "rich" surface in the system; everything else is hairline, pill, or text.

**Key characteristics:**
- **Dark cinematic ground** — `{colors.bg}` (`#07060b`) global background plus a deeper `{colors.bg-2}` (`#0b0912`) panel. No greys above #1a; the page reads as a black box theater for the WebGL scene.
- **Single violet accent ramp** — `{colors.accent}` (`#a89fff`) → `{colors.accent-2}` (`#ff9ffc`). One gradient powers the scan beam glow, the headline accent words, and the primary CTA fill. No orange, no lime, no warm/earth tones.
- **Montserrat 700/800 for display + Open Sans 400–700 for everything else.** Two families, two roles. Headline is Montserrat 800 with `letter-spacing: -0.025em`; wordmark is Montserrat 700 18px `-0.01em`.
- **Liquid-glass navbar pill** with backdrop-filter blur + saturate, inset hairline highlights, and a ::before glossy sheen — the signature surface.
- **WebGL grid-scan backdrop** rendered by a custom `<SpatialGrid>` component using `three` + `postprocessing` — solid lines, animated jitter, ping-pong scan beam, optional bloom + chromatic aberration.
- **Pointer pass-through** — `.hero__inner` is `pointer-events: none` so the cursor reaches the canvas underneath; only `.hero__actions` and `.hero__cta` opt back in.
- **Single CSS keyframe** (`rise`) drives all entrance motion — no Framer, no GSAP. Backdrop motion lives entirely inside the WebGL render loop with a critically-damped smoothDamp.
- **Three glyphs only** — `logo-cube`, `arrow-right`, `play`. No icon library, no Lucide, no SVG sprite imports.

## Colors

> **Source pages analyzed:** the single hero section (`<section className="hero">`) — navbar, headline, lede, primary + ghost CTAs, WebGL backdrop, legibility veil. One shipped theme: dark only. Eight tokens defined as CSS custom properties on `:root` in `index.css`.

### Surface

- `{colors.bg}` **`#07060b`** — Global background. Also the base for the hero's top radial mask: `radial-gradient(120% 90% at 50% -10%, #15102200 0%, var(--bg) 70%)`. Sits just above pure black so the WebGL grid never collides with a true `#000` clip.
- `{colors.bg-2}` **`#0b0912`** — Deeper panel reserved for any nested surface that needs to recede a half-step below the page. Not used in the hero itself, but pre-allocated for future modules so they never invent a new dark.

### Text

- `{colors.ink}` **`#f4f1fb`** — Primary text. Headline, brand wordmark, nav CTA label, ghost CTA label. Cool off-white tuned to the violet accent — never pure `#fff`.
- `{colors.ink-dim}` **`#a39db8`** — Secondary text. Nav links and the lede paragraph. ~7.5:1 on `{colors.bg}` — passes AA at body size.
- `{colors.ink-faint}` **`#6f6985`** — Tertiary text. Captions, fine print, future legal/meta. Reserved; not consumed in the live hero.

### Brand & Accent

- `{colors.accent}` **`#a89fff`** — Primary violet. Scan beam color (`scanColor="#a89fff"`), headline gradient start, primary CTA gradient start, brand logo glow via `drop-shadow(0 0 10px rgba(168,159,255,0.5))`.
- `{colors.accent-2}` **`#ff9ffc`** — Magenta. Gradient end for the headline accent word and the primary CTA fill: `linear-gradient(100deg, var(--accent) 0%, var(--accent-2) 100%)`.

### Hairlines & Tints

- `{colors.line}` **`#2f293a`** — Grid line color burned into the shader (`linesColor="#2F293A"`). The only "structural" non-text color.
- **White hairlines** — `rgba(255,255,255,0.14)` for the nav pill border + ghost CTA border; `rgba(255,255,255,0.22)` / `rgba(255,255,255,0.04)` for inset top/bottom highlights; `rgba(255,255,255,0.02)` / `rgba(255,255,255,0.06)` for ghost CTA fills.
- **Violet hairlines** — `rgba(168,159,255,0.28)` for the nav CTA border; `rgba(168,159,255,0.06)` for its fill; `rgba(168,159,255,0.7)` inside the primary CTA shadow.

**Constraint (verbatim from prompt):** "Do not use orange, lime/neon green, or any warm/earth tones anywhere." Contrast comes from the dark canvas + bright accent, never from a hue switch.

## Typography

### Font Family

- **Montserrat** — `'Montserrat', system-ui, -apple-system, sans-serif`. Weights 700 / 800. Display only.
- **Open Sans** — `'Open Sans', system-ui, -apple-system, sans-serif`. Weights 400 / 500 / 600 / 700. Body, nav, CTA.
- Loaded together via a single Google Fonts `@import` in `index.css` with `display=swap`.
- OpenType features: default. The aesthetic relies on weight + tracking, not stylistic sets.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `display-hero` | `clamp(30px, 4.4vw, 54px)` | 800 | 1.05 | -0.025em | Hero H1 — "Step inside the / 3D reality / of any space." |
| `display-hero-accent` | inherits | 800 | 1.05 | -0.025em | Gradient-clipped span ("3D reality"); identical metrics, color transparent |
| `wordmark` | 18px | 700 | 1.0 | -0.01em | Brand "3DVIEW" in nav |
| `lede` | `clamp(13.5px, 1.2vw, 15px)` | 400 | 1.6 | normal | Hero paragraph, max-width 480px |
| `nav-link` | 13.5px | 400 | 1.2 | normal | Platform / Capture / Developers / Pricing |
| `nav-cta` | 14px | 500 | 1.0 | normal | "Request access" pill |
| `cta` | 13.5px | 600 | 1.0 | normal | "Launch the demo" / "Watch the capture" |
| `badge-debug` | 12px | 400 | 1.2 | normal | Webcam preview HUD label (dev only) |

### Principles

- **Two families, hard split.** Montserrat 700/800 is reserved for display (H1 + wordmark). Open Sans handles everything else — never let a body element drift into Montserrat.
- **Negative tracking at display.** Headline runs `-0.025em`; wordmark runs `-0.01em`. Body and CTA stay at `normal` — no synthetic tracking on small type.
- **Headline always clamps.** `clamp(30px, 4.4vw, 54px)` never resolves to a fixed px in the hero. Same rule for the lede and container padding.
- **Weight 500 is reserved for the nav CTA only.** Body is 400, CTA is 600. Skipping 500 elsewhere keeps the contrast between "label" and "action" intact.
- **Color is the second tracking control.** `{colors.ink}` for primary, `{colors.ink-dim}` for paragraph, `{colors.ink-faint}` for tertiary — no underline, no italic, no all-caps.
- **No text drop-shadows.** Legibility is provided by `.hero__veil`, not by stroking the type.
- **Antialiasing is global** — `-webkit-font-smoothing: antialiased` on `html, body`.

### Note on Font Substitutes

If Montserrat fails to load, fall back through `system-ui, -apple-system, sans-serif` and tighten letter-spacing by an additional `-0.005em` on the headline to compensate for the wider system metrics. If Open Sans fails, the same system stack is acceptable at the given sizes without adjustment. **Never** synthesize weights — if 800 is unavailable, clamp down to 700 rather than letting the browser fake the strokes.

## Layout

### Spacing System

- **Unit system:** vanilla CSS only — px + `clamp()`. No Tailwind, no CSS-in-JS, no design-token JSON.
- **Container padding:** `clamp(20px, 5vw, 64px)` on `.hero__inner`. Top/bottom: 40px / 80px.
- **Nav margin:** `18px auto 0` — the pill floats 18px below the viewport top.
- **Nav padding:** `11px 14px 11px 20px` — left side carries 20px for the logo, right side carries 14px to balance the CTA pill.
- **Element rhythm inside `.hero__inner`:** headline → 18px gap → lede → 28px gap → action row.
- **Action row gap:** 11px between primary and ghost CTAs.
- **CTA padding:** `11px 19px` (both variants). Nav CTA: `9px 18px`.

### Grid & Container

- **Hero viewport:** `min-height: 100vh; min-height: 100svh;` — `svh` first for mobile browser chrome.
- **Nav max-width:** 720px, centered.
- **Content column max-width:** 820px, centered.
- **Lede max-width:** 480px — the paragraph is intentionally narrower than the headline column to ease scan-reading.
- **Stacking order inside the hero:** `.hero__canvas` z-0 → `.hero__veil` z-1 → nav and content z-3.
- The layout is a single flex column: nav on top, `.hero__inner` taking `flex: 1` and centering everything via `justify-content: center; align-items: center; text-align: center`.

### Whitespace Philosophy

Whitespace in 3DVIEW is *active* — the WebGL field fills every pixel the type does not, so "negative space" is a misnomer. The legibility veil carves a darker reading well at 22%/42% (radial center) so the headline never competes with a bright grid intersection. The 18px / 28px rhythm between headline / lede / actions is tighter than a typical SaaS hero because the cinematic backdrop already provides air. Padding scales fluidly via `clamp(20px, 5vw, 64px)` so the headline never touches the viewport edge, even on a 320px phone.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Headline, lede, page body |
| Soft hairline | `1px solid rgba(255,255,255,0.14)` | Nav pill border, ghost CTA border |
| Backdrop blur | `backdrop-filter: blur(20px) saturate(180%)` + inset highlights | Liquid-glass nav pill (signature surface) |
| Product shadow | `0 8px 30px -8px rgba(168,159,255,0.7)` (violet) and `0 8px 32px -8px rgba(0,0,0,0.5)` (nav) | Primary CTA glow; nav drop |

**Shadow philosophy:** shadows in 3DVIEW are **chromatic, not neutral.** The primary CTA casts a violet glow tinted from `{colors.accent}` at 70% — it's an accent extension, not a hover affordance. The nav pill carries a soft neutral shadow at black 50% only to lift the pill off the live shader behind it. Ghost surfaces (ghost CTA, default text) carry no shadow at all.

**Decorative Depth:**
- Inset top highlight on nav: `inset 0 1px 0 rgba(255,255,255,0.22)` simulates a fresnel rim.
- Inset bottom highlight on nav: `inset 0 -1px 0 rgba(255,255,255,0.04)` — a near-invisible counter-rim.
- Glossy `::before` sheen across the nav's top 45% with elliptical radius `999px 999px 40% 40% / 999px 999px 100% 100%`.
- Logo glow: `filter: drop-shadow(0 0 10px rgba(168,159,255,0.5))` — the wordmark stays flat; only the cube radiates.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `radius.none` | 0 | (reserved; unused in hero) |
| `radius.badge` | 6px | Webcam debug badge (dev HUD) |
| `radius.preview` | 8px | Webcam preview tile (dev HUD) |
| `radius.default` | 16px | `--radius` default — reserved for future panels |
| `radius.pill` | 999px | Nav pill, nav CTA, primary CTA, ghost CTA, brand link interaction surface |
| `radius.glass-sheen` | `999px 999px 40% 40% / 999px 999px 100% 100%` | Top-cap of nav glass sheen |

### Photography Geometry

- **No hero photography.** No video, no Lottie, no third-party CDN media.
- **No image assets ship in the hero.** The visual field is the WebGL shader; the favicon (`/favicon.svg`) reuses the `logo-cube` geometry on a `#0b0710` rounded tile with `#a89fff` strokes.
- **Optional face-tracking debug preview** (off by default) renders at 220×132 with `border-radius: 8px` and `border: 1px solid rgba(255,255,255,0.25)`.
- **Image radius behavior:** any future image surface must inherit `--radius: 16px`. Pills are reserved for chrome, not media.
- **Loading strategy:** WebGL renderer mounts on `useEffect`, antialias on, pixel ratio capped at `Math.min(devicePixelRatio, 2)`. No skeleton, no fallback image — if WebGL is unavailable the legibility veil + flat background remain readable.

## Components

### Top Navigation

- **Liquid-glass nav pill** `{component.hero-nav}` — Floating frosted pill, `display: flex; align-items: center; justify-content: space-between; gap: 24px; width: 100%; max-width: 720px; margin: 18px auto 0; padding: 11px 14px 11px 20px; border-radius: 999px;`. Background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 48%, rgba(168,159,255,0.06) 100%)`. Border: `1px solid rgba(255,255,255,0.14)`. Backdrop-filter: `blur(20px) saturate(180%)`. Box-shadow: `0 8px 32px -8px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -1px 0 rgba(255,255,255,0.04)`. `::before` sheen caps the top 45%. Children: brand · links · nav CTA.
- **Brand link** `{component.hero-brand}` — Montserrat 700, 18px, `letter-spacing: -0.01em`, color `{colors.ink}`. Inline-flex with 10px gap between cube glyph and wordmark. Cube wears `color: {colors.accent}` + `drop-shadow(0 0 10px rgba(168,159,255,0.5))`.
- **Nav link** `{component.hero-link}` — Open Sans 400, 13.5px, color `{colors.ink-dim}`. **Active:** `color: {colors.ink}`. **Focus:** inherits `currentColor` outline. Spacing: 26px gap between links.

### Buttons

- **Primary CTA** `{component.cta-primary}` — Open Sans 600, 13.5px. `display: inline-flex; align-items: center; gap: 8px; padding: 11px 19px; border-radius: 999px; color: #0a0810; background: linear-gradient(100deg, var(--accent) 0%, var(--accent-2) 100%); box-shadow: 0 8px 30px -8px rgba(168,159,255,0.7);`. Trailing `arrow-right` SVG (15×15). **Active:** `transform: translateY(-2px)` over `0.18s ease`, shadow deepens to `0 12px 36px -8px rgba(168,159,255,0.85)`. **Focus:** browser-native outline via `currentColor` — do not override.
- **Ghost CTA** `{component.cta-ghost}` — Open Sans 600, 13.5px. `padding: 11px 19px; border-radius: 999px; color: {colors.ink}; border: 1px solid rgba(255,255,255,0.14); background: rgba(255,255,255,0.02);`. Leading `play` SVG (13×13, filled). **Active:** border `rgba(255,255,255,0.32)`, background `rgba(255,255,255,0.06)`. **Focus:** inherits CTA base focus.
- **Nav CTA** `{component.nav-cta}` — Open Sans 500, 14px, `padding: 9px 18px; border-radius: 999px; color: {colors.ink}; border: 1px solid rgba(168,159,255,0.28); background: rgba(168,159,255,0.06);`. **Active:** border `rgba(168,159,255,0.6)`, background `rgba(168,159,255,0.12)`. **Focus:** native outline.

### Cards & Containers

- **Hero canvas surface** `{component.hero-canvas}` — `position: absolute; inset: 0; z-index: 0;`. Wraps `<SpatialGrid>` at 100% × 100%. `aria-hidden="true"`.
- **Legibility veil** `{component.hero-veil}` — `position: absolute; inset: 0; z-index: 1; pointer-events: none;`. Background: stacked radial `(70% 55% at 22% 42%, rgba(7,6,11,0.82) 0%, rgba(7,6,11,0) 60%)` + top linear `(rgba(7,6,11,0.55) 0%, rgba(7,6,11,0) 22%)` + bottom-to-page fade `(var(--bg) 2%, rgba(7,6,11,0) 38%)`.
- **Content column** `{component.hero-inner}` — `display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; max-width: 820px; margin: 0 auto; padding: 40px clamp(20px, 5vw, 64px) 80px; pointer-events: none;`. The `pointer-events: none` is load-bearing — the WebGL canvas lives underneath.

### Inputs & Forms

- **Webcam preview HUD** `{component.spatial-grid-preview}` — Debug-only. 220×132, `border-radius: 8px`, `border: 1px solid rgba(255,255,255,0.25)`, `box-shadow: 0 4px 16px rgba(0,0,0,0.4)`, `background: #000`. Inner `<video>` is `object-fit: cover; transform: scaleX(-1)`. Inner badge: 12px system font, 2px/6px padding, `rgba(0,0,0,0.5)` background, `border-radius: 6px`, `backdrop-filter: blur(4px)`. Renders only when `showPreview` prop is true; off by default.
- No text inputs ship in the hero — form patterns are deferred to future surfaces.

### Footer

- **No footer ships in the hero.** When one is added it inherits `{colors.bg}` background, `{colors.ink-faint}` link color at 13.5px Open Sans 400, and a `1px solid {colors.line}` top hairline. Do not add a footer pill — chrome pills are reserved for nav.

## Do's and Don'ts

### Do

- Use the eight-token palette only. Reach for `{colors.accent}` → `{colors.accent-2}` for any accent; reach for `{colors.ink-dim}` for secondary text.
- Keep the `radius.pill` (999px) reserved for **chrome and CTAs**. New panels use `radius.default` (16px).
- Apply the `rise` keyframe with the same stagger ladder (`0s / 0.16s / 0.24s`) when adding new entrance sequences.
- Render new accent surfaces with the violet→magenta linear gradient at the same `100deg` angle as the headline and primary CTA.
- Set `pointer-events: none` on any new content layer over the WebGL canvas; opt clickable children back in with `pointer-events: auto`.
- Reserve Montserrat 700/800 strictly for display. Body and chrome stay Open Sans.
- Keep all type contrast above 7:1 on `{colors.bg}` by ramping through `{colors.ink}` → `{colors.ink-dim}` → `{colors.ink-faint}`.
- Mount the `SpatialGrid` with the shipped default props for the hero. Tune only `sensitivity`, `scanDuration`, `scanDelay` when extending.

### Don't

- Don't introduce a hero video, MP4, GIF, Lottie, or any hosted CDN media. The shader IS the asset.
- Don't add a fourth icon. Only `logo-cube`, `arrow-right`, `play` are licensed by the system.
- Don't use orange, lime/neon green, or any warm/earth tone — the constraint is prompt-verbatim.
- Don't add a motion library (Framer, GSAP, motion/react). All UI motion is the `rise` keyframe; all backdrop motion lives inside the WebGL render loop.
- Don't document hover states in new component specs — describe default, active, focus only.
- Don't synthesize font weights. If 800 isn't available, clamp down to 700.
- Don't text-shadow the headline for legibility — that's what `.hero__veil` is for.
- Don't override the WebGL canvas's `aria-hidden="true"` — it is decorative; the semantic copy is the H1/p/CTAs.
- Don't enable `enableWebcam` or `enableGyro` by default. Both are opt-in to avoid permission prompts.
- Don't introduce Tailwind, CSS-in-JS, or a utility framework. Vanilla CSS is part of the identity.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤419px | Headline floors at 30px (`clamp` min); container padding floors at 20px |
| Phone | 420–559px | Same as small phone; nav CTA still visible |
| Large phone | 560–640px | Below 560px the nav CTA hides; brand + links + CTA collapse to brand + links only |
| Tablet portrait | 641–735px | Headline scales by viewport width; nav still 720px max |
| Tablet landscape | 736–833px | Same as tablet portrait |
| Small desktop | 834–1023px | Below 860px the nav links hide entirely; nav becomes brand + CTA only |
| Desktop | 1024–1440px | Full nav (brand + links + CTA); headline mid-scale via `4.4vw` |
| Wide desktop | ≥1441px | Headline caps at 54px (`clamp` max); container padding caps at 64px |

### Touch Targets

- **Minimum:** 44×44px logical area for all interactive chrome. Nav CTA at `9px 18px` plus 14px font yields ~38px height — increase to `12px 20px` on touch-first surfaces if extended.
- **Primary + ghost CTAs:** `11px 19px` plus 13.5px font → ~42px height. Acceptable on mouse; pad up if the design moves into a mobile-primary surface.
- **Nav links:** 13.5px text with 26px horizontal gap. On phones the links collapse before they become a hit-target issue.

### Collapsing Strategy

- **Nav:** below 860px → drop `.hero__links`. Below 560px → drop `.hero__nav-cta`. Brand always survives.
- **Headline:** never line-breaks dynamically — the `<br>` is hard-coded between "Step inside the" and "3D reality". The accent span wraps with the rest of the line on the smallest widths.
- **Lede:** wraps within `max-width: 480px`; on phones it consumes full container width minus padding.
- **Actions:** `flex-wrap: wrap; justify-content: center` — the ghost CTA wraps below the primary on the narrowest viewports.
- **WebGL canvas:** fills 100% × 100% at every breakpoint; pixel ratio capped at 2 so dense displays don't tank framerate.

### Image Behavior

- **No raster images** in the hero, so srcset / lazy-load / aspect-ratio rules do not apply.
- **WebGL canvas:** resizes on `window.resize` via the renderer's `setSize` + uniform update.
- **Favicon:** single `/favicon.svg`, no PNG fallbacks.
- **Future media surfaces:** must declare an explicit `aspect-ratio`, lazy-load via native `loading="lazy"`, and round to `radius.default` (16px) — never `radius.pill`.

## Iteration Guide

1. **One backdrop per page.** A second `<SpatialGrid>` instance doubles the GPU cost; new sections sit on flat `{colors.bg}` and use the violet→magenta gradient sparingly for emphasis.
2. **Variants live in components, not in tokens.** Add new CTA shapes by composing the existing `{component.cta-primary}` / `{component.cta-ghost}` rules — do not introduce a third color or a fourth radius.
3. **Reference colors by token (`{colors.accent}`), never by hex** in new prose. Hex appears only at the `:root` declaration.
4. **Display vs body family is hard-split.** New headlines: Montserrat 800 with `letter-spacing: -0.025em`. New body: Open Sans 400. Do not mix.
5. **Never document hover** — describe default, active, focus only. Hover transitions ship in CSS but are not part of the spec.
6. **Shadows stay chromatic + restrained** — one violet glow (CTA), one neutral lift (nav). Adding a third tier requires updating Elevation & Depth.
7. **The chrome-vs-surface rule:** if it's interactive, it gets `radius.pill` (999px). If it's a panel, it gets `radius.default` (16px). There is no in-between.

## Known Gaps

- **No validation, error, or empty states** documented — the hero has no form. When introduced, validation copy must use `{colors.accent-2}` for warnings and `{colors.ink-dim}` for hints.
- **No light-mode variant.** The single shipped theme is dark; light-mode tokens are not surfaced in the analyzed pages.
- **Focus rings rely on browser defaults.** A token (`focus-ring: 2px solid {colors.accent}`) is not yet specified; native outline inherits `currentColor`.
- **WebGL fallback path is unspecified.** If `WebGLRenderer` instantiation fails, the legibility veil + flat background remain readable, but there is no documented "shader-off" pose for the backdrop.
- **No skeleton / loading states.** The hero assumes synchronous mount; a slow font swap may produce a brief FOUT — acceptable trade for the no-blocking-CDN constraint.
- **No internationalization tokens.** Copy length and headline `<br>` placement are hard-coded for the English string; longer translations may require relaxing the `max-width: 820px` content column.
