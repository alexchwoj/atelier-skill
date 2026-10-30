---
version: "1"
name: "BlueAI — Fluid Dark Cinematic Hero"
description: "A single-screen hero for an AI development company. Pure black canvas (#000000), interactive WebGL fluid background driven by the cursor, an Instrument Serif pre-headline above a giant Instrument Sans display headline gradient-clipped from white to pale blue (#b4c0ff). The only accent family is brand-blue (#2738ff → #3054ff → #5b8bff → #b4c0ff). No purple, no magenta, no neon, no looping video."
colors:
  bg: "#000000"
  fg: "#ffffff"
  fg-muted: "rgba(255,255,255,0.70)"
  fg-faint: "rgba(255,255,255,0.80)"
  accent: "#3054ff"
  accent-hover: "#2040e0"
  headline-stop: "#b4c0ff"
  cta-text: "#0a0400"
  decor-blue: "bg-blue-900/20"
  decor-indigo: "bg-indigo-900/20"
  fluid-palette: "#2a3fff → #4863ff → #6f86d6 → #9fb0dd"
typography:
  display:
    fontFamily: "Instrument Sans"
    weights: "400 / 500 / 600 / 700"
    role: "wordmark, nav, display headline (gradient-clipped), subheadline, CTA labels"
  serif:
    fontFamily: "Instrument Serif"
    weights: "400 (roman) — italic axis on file but used roman"
    role: "pre-headline (the single editorial line above the H1)"
spacing:
  base: "Tailwind default (4px)"
  hero-stack: "space-y-12 (48px between blocks) + mt-20 (80px top offset)"
  container: "max-w-5xl, px-6 (no breakpoint scaling)"
  nav: "px-6 py-4 (constant across breakpoints)"
rounded:
  none: "0"
  lg: "0.5rem (secondary CTA hover surface)"
  pill: "9999px (white CTA, blue arrow puck, nav 'Get Started')"
components:
  fluid-background: "In-house WebGL Navier–Stokes fluid sim (three.js peer). BFECC advection, Poisson pressure solve, palette-mapped velocity color, transparent background. cursorSize:170, mouseForce:42, resolution:0.5, autoDemo:true, autoSpeed:0.8, autoIntensity:3.2"
  radial-vignette: "Single absolutely-positioned div over the fluid background, pointer-events-none, z-[1] — bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.42),rgba(0,0,0,0.18)_55%,rgba(0,0,0,0.58))]"
  decor-blooms: "Two pointer-events-none circles with mix-blend-screen — top-left 600px bg-blue-900/20, bottom-right 500px bg-indigo-900/20, both blur-[120px]"
  primary-cta: "White pill with embedded #3054ff arrow puck; active state scales 1.05 and grows a soft white halo (shadow-[0_0_20px_rgba(255,255,255,0.3)])"
  secondary-cta: "Ghost ink-on-glass pill with backdrop-blur-sm and trailing ArrowRight; active surface bg-white/5"
  nav-cta: "Solid white pill, text-black, font-semibold, rounded-full px-5 py-2.5"
  sunburst-mark: "Custom 24×24 SVG — center circle r=4 with eight equal radial spokes (cardinal + diagonal), 1.8 stroke, rounded line caps"
---

# BlueAI — Fluid Dark Cinematic Hero

> Fivefold showcase. Pairs with the BlueAI prompt. Use this file to keep BlueAI's calibrated restraint when you extend the section — the page should always read as an engineered surface, never a generic "AI startup" hero.

## Overview

BlueAI is a single-screen hero for an AI development company shipping production-ready models and a developer-first platform. Pure black canvas, an interactive WebGL fluid that reads the cursor, an Instrument Serif pre-headline above an enormous Instrument Sans display headline gradient-clipped from white to pale blue. There is no looping video, no purple, no magenta, no neon green, no warm tone — the entire generic "AI hero" visual playbook has been refused. What replaces it: a calibrated, cinematic surface that behaves like an engineered instrument the moment you move the mouse.

The governing decision: **the background is the product demo.** Most AI landing pages reach for a stock looping video, a glowing orb, or a Sparkles field; BlueAI ships a real Navier–Stokes fluid simulation with BFECC advection and a Poisson pressure solve, and lets the cursor pilot it. The text on top is deliberately reverent — one editorial serif line, one short display headline, one muted subheadline — because the demonstration of capability is happening behind the words. The palette is starved on purpose: only brand-blue, white, and black. The accent CTA puck ({colors.accent} — `#3054ff`) is the single saturated note; the headline gradient ends at {colors.headline-stop} (`#b4c0ff`) — not white, not pure brand-blue — so peak velocity in the fluid never collides with the headline against the radial vignette.

The system is engineered to extend only when the same restraint can be honored. Any new surface inherits the same two families (Instrument Sans + Instrument Serif), the same accent family (brand-blue only), the same z-stack discipline (fluid · vignette · blooms · content · nav), and the same entrance window (one mount, ~1.1s, no scroll-triggered animation). When a future section needs a card or a stat row, those components inherit the pill geometry, the `{colors.cta-text}` near-black ink, and the pointer-events choreography that lets cursor motion reach the simulation while clicks land only where they should.

**Key Characteristics:**
- **Pure black canvas** ({colors.bg} — `#000000`) and white ink ({colors.fg} — `#ffffff`). Everything sits on a single dark layer; there is no second section at this stage.
- **Brand-blue accent family only** — `#2738ff → #3054ff → #5b8bff → #b4c0ff`. The fluid palette uses `#2a3fff → #4863ff → #6f86d6 → #9fb0dd`. No purple, magenta, indigo-bright, neon green, or warm-tone accents anywhere.
- **Two-family typography:** Instrument Sans (400–700) for wordmark, nav, headline, subheadline, CTAs + Instrument Serif (400 roman) for the single pre-headline. Two families, two roles, never more.
- **Interactive WebGL fluid** — `FluidBackground.jsx` runs a real Navier–Stokes solver in three.js, palette-mapped to velocity. `cursorSize: 170`, `mouseForce: 42`, `resolution: 0.5`, `autoDemo: true`. Idle behavior is a soft autopilot; first mouse move lerps takeover across 0.25s.
- **Tri-layer pointer-events choreography** — fluid wrapper default, overlay + blooms + content all `pointer-events-none`, CTA row re-enables with `pointer-events-auto`. The cursor reads everywhere; clicks land only on the two buttons.
- **Gradient headline shine** — `bg-gradient-to-b from-white via-white to-[#b4c0ff]` + `bg-clip-text text-transparent`. No keyframe animation — the energy comes from the fluid behind it, not the text itself.
- **Radial vignette + dual mix-blend-screen blooms** — one readability ellipse plus a 600px blue bloom top-left and a 500px indigo bloom bottom-right, both `blur-[120px]`. Together they frame the type without ever crossing into a "card" or "panel".
- **Sharp instrument feel** — no shadows on type, no glow on the headline, no `whileInView`. Everything plays once on mount in a fixed 1.1s entrance window.

## Colors

> **Source pages analyzed:** the BlueAI hero (Section 1 Navbar + Section 2 Hero). Single dark theme; nine tokens total. Smallness is the argument.

### Surface

- **Background** ({colors.bg} — `#000000`): The canvas. Pure black so the fluid's brand-blue palette reads at full chroma without ever crossing a value boundary into grey. There is no surface-2 token — the entire hero sits on this one plane.

### Text

- **Foreground** ({colors.fg} — `#ffffff`): The headline (before gradient-clip), the wordmark, the nav `Get Started` text container, and the primary CTA pill fill. Default text color at the `<body>` level.
- **Foreground muted** ({colors.fg-muted} — `rgba(255,255,255,0.70)`): The subheadline's settled state. It animates to opacity 0.7, not 1 — a deliberate non-1 target so the eye lands on the headline first.
- **Foreground faint** ({colors.fg-faint} — `rgba(255,255,255,0.80)`): Nav link rest state. Active state resolves to `{colors.fg}` (`text-white`).
- **CTA text** ({colors.cta-text} — `#0a0400`): The label inside the white pill. Near-black with a 1-bit warm bias — not `#000000` — so it reads ink, not vacuum. Do not round to `#000`.

### Brand & Accent

- **Accent** ({colors.accent} — `#3054ff`): The arrow puck inside the primary CTA. Single saturated note on the page.
- **Accent active** ({colors.accent-hover} — `#2040e0`): The puck on press / focus-within. A controlled darkening, not a value flip.
- **Headline stop** ({colors.headline-stop} — `#b4c0ff`): The bottom of the headline's vertical gradient. Pale-blue, not white — so the gradient reads "shine" instead of "fade-to-paper".

### Brand Gradient (Headline)

- **Headline gradient** — `bg-gradient-to-b from-white via-white to-[#b4c0ff]`. The `from` and `via` are both pure white, biasing the gradient's center of mass to the top so only the lowest 30% picks up the pale-blue stop. Always paired with `bg-clip-text text-transparent`.
- **Fluid gradient palette** — `#2a3fff → #4863ff → #6f86d6 → #9fb0dd`. Sampled by the velocity texture (length(vel) → 0..1). Index 0 maps to low velocity; the final stop is muted light blue, not near-white, so peak velocity never over-saturates against the vignette.

### Decorative

- **Decor blue** ({colors.decor-blue} — `bg-blue-900/20`): Tailwind utility for the top-left 600px mix-blend-screen bloom. Never used as solid color anywhere else.
- **Decor indigo** ({colors.decor-indigo} — `bg-indigo-900/20`): Tailwind utility for the bottom-right 500px mix-blend-screen bloom. Never used as solid color anywhere else.

**Constraint** (verbatim from prompt): the only accent hues allowed are the brand-blue family and neutral white/black. No purple, magenta, indigo-bright, neon green, or warm-tone accents. Round nothing — `#0a0400` is not `#000000`; `#3054ff` is not `#3b82f6`.

## Typography

### Font Family

- **Display & body:** `'Instrument Sans', system-ui, sans-serif` — wordmark, nav, headline (gradient-clipped), subheadline, CTA labels.
- **Serif:** `'Instrument Serif', Georgia, serif` — exclusively the single pre-headline above the H1. Loaded with the italic axis available but used roman; do not italicize.
- Load both via a single Google Fonts import in `src/index.css`; map via Tailwind `fontFamily.sans` and `fontFamily.serif`.
- OpenType features: rely on the families' defaults. No `font-feature-settings` overrides; no small-caps; no tabular numerals (no number-heavy UI at this stage).

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `pre-headline`     | 30 → 48 → 48 px (`text-3xl sm:text-5xl lg:text-[48px]`) | 400 (roman) | 1.1 | normal | The single Instrument Serif editorial line above the H1 |
| `display-headline` | 60 → 96 → 136 px (`text-6xl sm:text-8xl lg:text-[136px]`) | 600 | 0.9 | `tracking-tighter` (-0.05em) | "Build Smarter" — gradient-clipped white → `{colors.headline-stop}` |
| `subheadline`      | 18 → 20 px (`text-lg sm:text-[20px]`) | 400 | 1.65 | normal | Muted body line under the headline, capped at `max-w-xl` |
| `nav-link`         | 14 px (`text-sm`) | 500 | default | normal | Center nav links — rest `{colors.fg-faint}`, active `{colors.fg}` |
| `nav-cta-label`    | 14 px (`text-sm`) | 600 (semibold) | default | normal | `Get Started` solid-white pill label, `text-black` |
| `wordmark`         | 18 px (`text-lg`) | 600 (semibold) | default | `tracking-tight` (-0.025em) | `BlueAI` next to the Sunburst SVG |
| `primary-cta`      | 18 px (`text-lg`) | 500 | default | normal | `Start Building Free` label inside the white pill |
| `secondary-cta`    | 14 px (Tailwind base) | 400 | default | normal | `See Examples` ghost link with trailing arrow |
| `book-demo-link`   | 14 px (`text-sm`) | 500 | default | normal | Nav-right text link, hidden below `sm:` |

### Principles

- **No body weight at 500 in display roles.** The display headline locks at 600; do not test 500 — the gradient clip needs the slightly heavier stroke to hold its hue range.
- **Negative tracking only above 60px.** `tracking-tighter` is reserved for the display headline (and `tracking-tight` for the 18px wordmark). Subheadline, nav, and CTAs stay at default tracking.
- **Subheadline lands at opacity 0.7, not 1.** This is the only place in the system where a final state is sub-1. Removing it flattens the hierarchy by ~15% perceived weight.
- **One serif role only.** Instrument Serif appears exactly once per viewport — the pre-headline. Do not add a serif eyebrow, footer attribution, or quote.
- **Two-family hard cap.** No mono, no third display face, no Inter fallback used decoratively. If the platform lacks Instrument Sans, fall back to system-ui and accept the loss.
- **Weight clamp at 700.** Instrument Sans tops at 700; if a class requests `font-extrabold` (800), clamp to `font-bold` (700) and note the substitution as a code comment — never synthesize.
- **Line-height collapse at display.** Headline runs `leading-[0.9]` so the descenders of `Smarter` brush the baseline of the subheadline 48px below it — the negative breathing is intentional.

### Note on Font Substitutes

If Instrument Sans cannot load, fall through to `system-ui, sans-serif` and bump the headline `tracking-tighter` to `tracking-[-0.06em]` to compensate for system fonts running wider at display sizes. If Instrument Serif is unavailable, the chain resolves to Georgia — accept the slightly heavier roman and reduce the pre-headline from `text-3xl sm:text-5xl` to `text-2xl sm:text-4xl` so the optical weight matches the original. Never substitute Inter for Instrument Sans — the H1 gradient clip exposes Inter's heavier dot grid and the surface stops reading as "engineered".

## Layout

### Spacing System

- **Base unit:** Tailwind default 4px scale.
- **Universal rhythm constants:** `space-y-12` (48px) between hero stack blocks; `mt-20` (80px) top offset on the inner stack.
- **Container padding:** `px-6` (24px) on the content block; **no `sm:` or `lg:` change for this hero.**
- **Nav padding:** `px-6 py-4` (24px × 16px) constant across breakpoints.
- **CTA pill geometry:** primary `py-2 pl-6 pr-2` (8/24/8/8) with a 40×40 puck; secondary `px-4 py-2` (16/8); nav-CTA `px-5 py-2.5` (20/10).
- **No section padding** — the section is `min-h-screen` and the content owns its own horizontal inset.

### Grid & Container

- **Section:** `relative w-full min-h-screen overflow-hidden bg-[#000000] text-white`. No `max-width` on the section itself.
- **Content cap:** `max-w-5xl` (1024px) on the centered text block.
- **Subheadline cap:** `max-w-xl` (576px) — narrower than the content cap so the line breaks land before reaching the headline's edge.
- **Columns:** none. The hero is a single centered column at every breakpoint.
- **Gutters:** none — the inner stack is `space-y-12` only; no horizontal gap because there is no row.
- **Z-stack** (bottom → top): `z-0` fluid · `z-[1]` radial vignette · `z-[1]` blooms · `z-10` content · `z-50` nav.

### Whitespace Philosophy

Whitespace here is not "breathing room" — it is the volume that lets the fluid behind the type stay readable as a moving surface. The `mt-20` bias pushes the centered column slightly below true center so the eye reads the headline against the most active band of the simulation (the vignette's brightest ring). The 48px gap between blocks is a metronome — small enough that the four elements still read as one composition, large enough that the entrance staggers (0.0s / 0.2s / 0.4s / 0.6s) land as four distinct beats. There are no empty sidebar columns, no decorative gutters, and no top-of-card padding because there is no card.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat               | No shadow, no border | Default for everything (headline, nav links, secondary CTA rest) |
| Radial vignette    | `bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.42),rgba(0,0,0,0.18)_55%,rgba(0,0,0,0.58))]` | The only readability layer over the fluid |
| Mix-blend bloom    | `bg-blue-900/20` / `bg-indigo-900/20` + `blur-[120px]` + `mix-blend-screen` | The two decorative depth circles (top-left + bottom-right) |
| Halo (active)      | `shadow-[0_0_20px_rgba(255,255,255,0.3)]` | Only the primary CTA on press / active. No other element ever carries a shadow. |

**Shadow philosophy.** The hero has no panel shadows, no card lifts, no soft drop shadows on type, and no border-glow on inputs. Depth is delivered entirely by the fluid simulation's velocity color and the two `mix-blend-screen` blooms — the simulation itself has parallax-like depth, so adding a CSS shadow on top would read as redundant. The single exception is the primary CTA halo on press, which is functional (it confirms the press) and uses pure white at 0.3 alpha so it reads as a soft glow against the vignette, not a drop shadow.

**Decorative Depth:**
- Top-left bloom: `h-[600px] w-[600px] bg-blue-900/20 blur-[120px] mix-blend-screen` at `top-[-20%] left-[20%]`. Sits behind the headline's upper edge.
- Bottom-right bloom: `h-[500px] w-[500px] bg-indigo-900/20 blur-[120px] mix-blend-screen` at `bottom-[-10%] right-[20%]`. Anchors the CTA row.
- Both blooms are `pointer-events-none` and z-`[1]`. The cursor reads through them to the fluid wrapper.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `none`   | `0`            | Section boundaries, radial vignette div, blooms (perceptual radius from `rounded-full`) |
| `lg`     | `0.5rem` (8px) | Secondary CTA hover surface (`rounded-lg`) |
| `pill`   | `9999px`       | Primary CTA pill, primary CTA arrow puck, nav `Get Started` button |
| `full`   | `9999px`       | Sunburst center circle (`r="4"`), decorative bloom circles (`rounded-full`) |

There is no `xs` / `sm` / `md` radius in this hero — the system is intentionally two-state (pill or zero). If a future card requires a radius, introduce a single `rounded-2xl` (16px) token and document it then. Do not retrofit a five-step radius scale.

### Photography Geometry

- **No imagery.** No looping background video, no CloudFront/Mux/HLS source, no hero product shot, no people, no lifestyle photography.
- The interactive WebGL fluid is the only "image" on the page; it owns the full viewport at every breakpoint with no aspect-ratio constraint.
- The radial vignette + the two mix-blend-screen blooms are the entire static visual layer behind the type.
- If imagery is added later (e.g. a screenshot section below the fold), it must use `rounded-2xl` corners, no shadow, and a brand-blue ring (`ring-1 ring-[#3054ff]/30`) — never a shadow.
- Loading: not applicable. The fluid sim is a `<canvas>` and starts at mount; there is no `<img>` to lazy-load.

## Components

### Top Navigation

- **Nav container** `{component.nav}` — `fixed top-0 left-0 z-50 w-full bg-transparent px-6 py-4`. Inner row: `flex items-center justify-between`. Default: fully transparent, no entry animation, floats above the hero (`z-50`) and the fluid (`z-0`). No active or focus state on the nav itself — it never collapses or condenses.
- **Brand wordmark** `{component.brand-wordmark}` — `flex items-center gap-2 text-white`. Children: Sunburst 24×24 SVG + `BlueAI` in Instrument Sans 600 `text-lg tracking-tight`. Focus: default browser focus-visible ring (white).
- **Nav link** `{component.nav-link}` — `flex items-center gap-1 font-sans text-sm font-medium text-white/80 transition-colors`. Default: `{colors.fg-faint}`. Active state: resolves to `{colors.fg}` (`hover:text-white`). Focus: white focus-visible ring. The first link (`Products`) carries a trailing `ChevronDown h-4 w-4`; the other three (`Customer Stories`, `Resources`, `Pricing`) are plain text.
- **Book A Demo link** `{component.book-demo-link}` — `hidden font-sans text-sm font-medium text-white/80 transition-colors sm:block`. Hidden below `sm:` (640px); resolves to `{colors.fg}` on active.

### Buttons

- **Nav CTA — Get Started** `{component.button-nav-cta}` — `rounded-full bg-white px-5 py-2.5 font-sans text-sm font-semibold text-black transition-transform`. Default: solid white pill, black ink. Active: `hover:scale-105`. Focus: white focus-visible ring on the dark canvas.
- **Primary CTA — Start Building Free** `{component.button-primary}` — `group flex items-center rounded-full bg-white py-2 pl-6 pr-2 transition-all`. Label: `font-sans text-lg font-medium text-[#0a0400]` ({colors.cta-text}). Trailing puck: `ml-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#3054ff]` ({colors.accent}) holding a 20×20 white `ArrowRight`. Active state: `hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]` + puck darkens to `{colors.accent-hover}` (`group-hover:bg-[#2040e0]`). Focus: white focus-visible ring on the outer pill.
- **Secondary CTA — See Examples** `{component.button-secondary}` — `group flex items-center gap-2 rounded-lg px-4 py-2 font-sans text-white/70 backdrop-blur-sm transition-colors`. Default: text at `{colors.fg-muted}` on transparent. Active: `hover:bg-white/5 hover:text-white` — the surface fills with a 5% white wash. Trailing `ArrowRight h-4 w-4 transition-transform group-hover:translate-x-1`. Focus: white focus-visible ring inset on the rounded-lg.

### Cards & Containers

(There are no cards in this hero; the entire system refuses panels.) When a future section introduces cards, they must follow these utility patterns:

- **Hero column** `{component.hero-column}` — `relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center pointer-events-none`. The single "container" in the system. Wraps the inner stack.
- **Hero stack** `{component.hero-stack}` — `mt-20 flex flex-col items-center space-y-12`. 80px top bias, 48px vertical rhythm between the four hero blocks.
- **CTA row** `{component.cta-row}` — `pointer-events-auto flex flex-col items-center gap-6 sm:flex-row`. Re-enables clicks for the two buttons. Stacks vertical on mobile, horizontal at `sm:` and up.

### Inputs & Forms

There are no inputs in this hero. If a future surface introduces an email-capture or search field, the default state must inherit: `rounded-full bg-white/5 backdrop-blur-sm` surface, `{colors.fg}` text, `placeholder-white/40` placeholder, no border. Focus state: `ring-1 ring-[#3054ff]/40` ({colors.accent} at 40%) — never a colored border, always an outer ring. Do not introduce a shadow on focus.

### Footer

There is no footer in this hero. When extended, the footer must be the inverse of the nav — `relative` (not fixed), transparent background, `border-t border-white/10` hairline, and the same `px-6 py-4` rhythm. No social icons, no newsletter form, no four-column link grid at this stage of the system.

## Do's and Don'ts

### Do

- Use {colors.bg} (`#000000`) for every surface in the hero — there is no second surface token.
- Reserve {colors.accent} (`#3054ff`) for the single primary CTA puck only.
- Apply the headline gradient as `bg-gradient-to-b from-white via-white to-[#b4c0ff] bg-clip-text text-transparent` — both `from` and `via` stay white.
- Keep the subheadline's final opacity at 0.7 — it is the only sub-1 settled state in the system.
- Set the entrance window to ~1.1s on mount and never trigger anything from scroll.
- Use the tri-layer pointer-events choreography: fluid default, overlay/blooms/content `pointer-events-none`, CTA row `pointer-events-auto`.
- Cap Instrument Sans at weight 700; if a class asks for 800, clamp to 700 and note the substitution as a code comment.
- Reserve `rounded-lg` for the secondary CTA surface only; everything else is pill or zero.
- Keep both decorative blooms at `mix-blend-screen` with `blur-[120px]` — do not switch blend modes.

### Don't

- Don't introduce purple, magenta, indigo-bright, neon green, or any warm-tone accent — the brand-blue family is the only chroma.
- Don't replace the `FluidBackground` with a video, a static gradient, a Sparkles field, or an orb — the hero requires the WebGL Navier–Stokes sim.
- Don't add `whileInView`, scroll-triggered animation, staggered word reveals, or marquee keyframes — entrance plays on mount only.
- Don't substitute Inter for Instrument Sans — the H1 gradient clip exposes Inter's heavier dot grid.
- Don't round colors — `#0a0400` is not `#000000`; `#3054ff` is not `#3b82f6`; `#b4c0ff` is not pure white.
- Don't add a drop shadow on the headline, the wordmark, or the subheadline — the only shadow in the system is the primary CTA halo.
- Don't swap `ArrowRight` for `ChevronRight` on the CTAs, and don't swap the Sunburst SVG for a lucide `Sun` or `Sparkles`.
- Don't introduce a third font family, a mono face, or a serif eyebrow — two families, two roles.
- Don't add a hamburger menu at `<md` — the center nav links simply hide; the Get Started pill is always visible.
- Don't put the radial vignette under the fluid — the order is fluid (`z-0`) → vignette (`z-[1]`), or the type loses contrast.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone        | ≤419px      | Pre-headline 30px, headline 60px, subheadline 18px; CTA row stacks vertical; nav center links hidden |
| Phone              | 420–640px   | Same as small phone — no class change between these two ranges |
| Large phone        | 641–735px   | At `sm:` (640px): pre-headline jumps to 48px, headline to 96px, subheadline to 20px, `Book A Demo` link appears, CTA row goes horizontal (`sm:flex-row`) |
| Tablet portrait    | 736–833px   | No further changes |
| Tablet landscape   | 834–1023px  | No further changes — center nav links still hidden below `md:` |
| Small desktop      | 1024–1068px | At `lg:` (1024px): headline jumps to 136px; nav center links become visible (`md:flex` = 768px, already on by tablet portrait) |
| Desktop            | 1069–1440px | No further changes — content stays at `max-w-5xl` (1024px); wider viewports get more black margin |
| Wide desktop       | ≥1441px     | No further changes; the hero is centered with deliberate negative space on the sides |

### Touch Targets

- **Minimum size:** 40×40px (`h-10 w-10`) for the primary CTA puck — the system's smallest tappable element.
- **Nav links:** 14px text at `py-4` container gives ~48px tap rows. Sufficient on mobile because the nav center links hide below `md:` anyway.
- **Primary CTA:** ~56px tall (label `py-2` + 40px puck) — comfortably above the 44px iOS recommendation.
- **Secondary CTA:** ~36px tall (`py-2 px-4 text-base`). On phones at the bottom of the column, the CTA row's `gap-6` (24px) ensures the two targets never overlap.

### Collapsing Strategy

- **Nav center links:** `hidden md:flex` — disappear entirely below 768px. No hamburger replacement; the right-side `Get Started` pill carries the conversion.
- **Book A Demo link:** `hidden sm:block` — disappears below 640px; the layout cleans up to brand + pill.
- **Hero typography:** breakpoint stairs only (`text-3xl sm:text-5xl lg:text-[48px]` etc.) — no `clamp()`, no fluid scaling. The system snaps cleanly between three sizes.
- **CTA row:** `flex-col` on mobile → `sm:flex-row` from 640px. Vertical stacks with `gap-6` (24px), horizontal stays with `gap-6`.
- **Inner stack offset:** `mt-20` is constant across breakpoints. Because the section is `min-h-screen` and the column is `justify-center`, the 80px offset reads as a slight downward bias at every size.
- **Subheadline cap:** `max-w-xl` (576px). On phones it wraps to three lines; on tablet+ it sits as two lines. Do not increase the cap.

### Image Behavior

- **No images.** No `srcset`, no `<picture>`, no `loading="lazy"`. The fluid sim is a `<canvas>` and starts at mount.
- The `<canvas>` adapts via `Common.resize()` inside the simulation — it reads the container's `getBoundingClientRect()` on `window resize` and updates the renderer + FBO sizes accordingly.
- DPR is clamped to `Math.min(window.devicePixelRatio, 2)` — a deliberate cap so 3× screens don't double the GPU load for an imperceptible quality gain.

## Iteration Guide

1. **One component per change.** When refining the primary CTA, do not edit the secondary CTA in the same pass — the two pills exist as a tuned pair and drift in opposite directions when edited together.
2. **Variants live inside components, not as new tokens.** If a third button variant is needed (e.g. a danger pill), express it as a prop on the primary CTA, not as a new `{component.button-danger}` entry — the system explicitly refuses a third pill until a user goal requires it.
3. **Always reference tokens via `{colors.tokenName}` / `{component.name}`.** Never inline a hex outside YAML — if a value needs to be hard-coded, add it to YAML first.
4. **Never document hover.** The system documents default, active, and focus only. Hover is a desktop convenience and is left to Tailwind's `hover:` utilities at implementation time.
5. **Display vs body family rule:** Instrument Sans owns every role except the single pre-headline. Do not introduce Instrument Serif anywhere else, and do not promote Instrument Sans into the serif's role.
6. **Shadow restriction:** the only shadow in the system is `shadow-[0_0_20px_rgba(255,255,255,0.3)]` on the primary CTA active state. Adding any other shadow (cards, modals, dropdowns) requires a new YAML entry and a justification paragraph.
7. **Chrome vs surface alternative:** when extending below the hero, prefer adding a transparent section with `border-t border-white/10` over a darker surface — the system has one surface ({colors.bg}) by design.

## Known Gaps

- **No dark / light mode duality.** The hero is dark-only by argument; if a light surface is ever required, the entire fluid palette and gradient strategy must be re-tuned (not surfaced in analyzed pages).
- **No form / input states documented.** The hero contains no inputs, so error / disabled / validation states are not surfaced. The "Inputs & Forms" guidance above is forward-looking, not observed.
- **No modal / dropdown / toast patterns.** The `ChevronDown` on `Products` signals a dropdown affordance but the dropdown surface itself is not implemented in this stage.
- **No motion-reduced fluid fallback specified beyond "the simulation continues."** A future iteration may need a static gradient still for `prefers-reduced-motion: reduce` users on low-power devices, but the current decision is to keep the simulation running as the identity carrier.
- **No localization / RTL behavior documented.** Headline `tracking-tighter` and the asymmetric CTA pill (`pl-6 pr-2`) will need explicit RTL flips that are not surfaced in analyzed pages.
- **No analytics / event taxonomy.** The two CTAs link to `#` placeholders; click targets, event names, and conversion taxonomy are out of scope at this stage.
