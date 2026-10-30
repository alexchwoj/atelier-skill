---
version: "1"
name: "AI Studio — Cinematic Liquid-Glass Hero"
description: "A fullscreen hero for an AI movie / film-generation studio. Pure black canvas (#000000), white type (#ffffff), and a single cool cyan-white accent (#cdebff) carried only by animated WebGL light rays. Playfair Display 900 carries the title; Source Sans 3 carries the rest. The marquee effect is a layered system: a looping CDN background video, an ogl shader of volumetric rays beaming from the top-center, and a word-by-word blur-in heading driven by motion/react."
colors:
  background: "#000000"
  foreground: "#ffffff"
  accent: "#cdebff"
  muted: "rgba(255,255,255,0.70–0.75)"
  hairline: "rgba(255,255,255,0.10–0.15)"
  scrim: "rgba(0,0,0,0.35)"
typography:
  display:
    fontFamily: "Playfair Display"
    weights: "400 / 700 / 900 (+ 400 italic)"
    role: "hero title — serif, weight 900, clamp(96px, 18vw, 280px), line-height 0.92, tracking -0.02em"
  body:
    fontFamily: "Source Sans 3"
    weights: "300 / 400 / 500 / 600"
    role: "nav, buttons, side paragraphs, body copy (aliased as Source Sans Pro)"
spacing:
  base: "Tailwind 3 default (4px)"
  hero-title: "clamp(96px, 18vw, 280px) / line-height 0.92 / letter-spacing -0.02em"
  nav: "px-4 py-2.5 / gap-6"
  bottom-row: "bottom-12 / px-10 / max-w-[220px] side paragraphs"
rounded:
  default: "9999px (Tailwind borderRadius.DEFAULT override — every `rounded` class becomes a full pill)"
components:
  liquid-glass: "Backdrop-blur(4px) translucent panel with a masked gradient border highlight via ::before — used on the nav pill and the Secondary CTA"
  liquid-glass-strong: "Heavier backdrop-blur(50px) variant with inset highlight and soft drop shadow — used on the 'Try it free' nav button"
  light-rays: "Full-screen ogl fragment shader beaming volumetric rays from `top-center`, pulsating, faintly noisy, mouse-influenced, mix-blend-screen on top of the looping video"
  blur-text: "motion/react heading that splits text by words, gates on IntersectionObserver(threshold 0.1), and animates each word from blur(10px)/y -50 → blur(5px)/y 5 → blur(0)/y 0"
  logo-mark: "Inline SVG play-mark — a 26×26 white rounded-rect with a black play triangle, sitting inside the nav pill"
  button-primary: "bg-white text-black rounded px-6 py-3 with white-glow hover and 0.97 active scale"
  button-secondary: "liquid-glass pill with inset highlight + soft outer glow on hover"
  cta-try-free: "liquid-glass-strong text-sm font-medium pill at px-4 py-1.5"
---

# AI Studio — Cinematic Liquid-Glass Hero

> Fivefold showcase. Pairs with the AI Studio prompt. Use this file to keep AI Studio's cinematic restraint when you extend the page — it should always read as a film studio's opening title card, never a SaaS landing.

## Overview

AI Studio is **a fullscreen hero for an AI movie / film-generation product, designed like the opening title of a film, not the homepage of a SaaS.** Pure black canvas, white type, a single cool cyan-white accent carried only by the light rays. A looping CDN video sits behind everything; a WebGL shader beams volumetric rays from the top of the screen; the title reveals word-by-word in a soft blur. There is no purple, no indigo, no neon green, no gradient text — the entire AI-product visual playbook has been refused.

The governing decision: **cinema, not software.** Most AI tools advertise themselves with chrome gradients, glowy node graphs, and "magical" particle dust. AI Studio does the opposite. The page leans into the language of film — a Playfair Display 900 wordmark at `clamp(96px, 18vw, 280px)`, a darkened video plate behind it, and a single shader of light that behaves like a lens flare from a sun off-screen. The UI chrome is liquid-glass: barely-there 4px backdrop-blur panels with a thin gradient edge highlight, every corner forced to a full pill via `borderRadius.DEFAULT = '9999px'`. The bet: an AI film studio should make you feel the room go dark before the credits roll, not feel like another dashboard.

The system extends by subtraction, not addition. Any new surface (about page, pricing, showcase grid) inherits the same five-tone palette, the same two-font split, and the same liquid-glass chrome — it never reaches for a brand gradient, never adds a third typeface, never breaks the rounded-pill default. Layering rules carry across pages: there is always a still or moving plate at `z-0`, an optional shader or scrim at `z-10`, content at `z-20`, and a floating glass nav at `z-50`. Consistency is what turns a single hero into an identity.

**Key Characteristics:**
- **Pure black background** (`{colors.background}` — #000000) and pure white text (`{colors.foreground}` — #ffffff). The only accent in the system (`{colors.accent}` — #cdebff) lives exclusively inside the shader.
- **No CTA brand color** — the primary button is `bg-white text-black`, the secondary button is `liquid-glass`. Color is never used to signal action.
- **Playfair Display 900** for the hero title + **Source Sans 3 (300–600)** for everything else. Two families, two roles, never more.
- **Hero title at `clamp(96px, 18vw, 280px)`** with line-height 0.92 and tracking -0.02em — the wordmark reads like a film title, not a logotype.
- **Layered fixed-position composition** — looping video (`z-0`) → light rays (`z-10`, `mix-blend-screen`) → title (`z-20`) → bottom row (`z-20`) → nav (`z-50`). Every layer is `fixed inset-0`.
- **Liquid-glass UI chrome** — nav pill, "Try it free" button, and secondary CTA all use the `.liquid-glass` / `.liquid-glass-strong` utilities verbatim. The masked gradient border (`::before` with `-webkit-mask-composite: xor`) is the design DNA.
- **Every `rounded` is a pill** — `borderRadius.DEFAULT = '9999px'` is an intentional Tailwind override. Buttons, the nav bar, and the CTA cluster are all fully rounded.
- **Word-by-word blur-in title** — `BlurText` from `motion/react`, `delay=220ms` between words, `stepDuration=0.5s` per word, gated on `IntersectionObserver(threshold 0.1)`.

## Colors

> **Source pages analyzed:** Hero (App.tsx) — the only page in the showcase. Five tones total. The smallness is the point; this is not a "dark mode" palette, it is a theatrical one.

### Surface
- **Background** (`{colors.background}` — `#000000`): The global canvas. Set on `<body>` and the root `<div>`. Never softened toward `#0a0a0a` or `#111` — this is theatrical black, the color of a darkened auditorium.
- **Scrim** (`{colors.scrim}` — `rgba(0,0,0,0.35)`): A `bg-black/35` overlay sitting above the looping video and below the rays to push white text off the plate without flattening the footage.

### Text
- **Foreground** (`{colors.foreground}` — `#ffffff`): All headlines, primary button surface, the logo mark's rounded rect. Pure white because the video and rays need a hard surface to push against.
- **Muted** (`{colors.muted}` — `rgba(255,255,255,0.70–0.75)`): Secondary copy — nav links at `0.70`, bottom-row side paragraphs at `0.75`. White at opacity, never a different hue. Hover restores full white.

### Brand & Accent
- **Accent** (`{colors.accent}` — `#cdebff`): The cool cyan-white light-ray color. Passed to the `ogl` shader as `raysColor="#cdebff"` and nowhere else. It never appears as a fill, border, or text color — its only home is photons.

### Hairlines & Borders
- **Hairline** (`{colors.hairline}` — `rgba(255,255,255,0.10–0.15)`): Glass edge highlights inside the `::before` gradient on `.liquid-glass` and `.liquid-glass-strong`, plus the `inset 0 1px 1px rgba(255,255,255,0.1)` highlight. The only "border" the system has.

**Constraint** (verbatim from prompt): **do not use purple, indigo, or neon green anywhere.** Contrast comes from the scrim, the light rays, and white-on-black weight — never from hue.

## Typography

### Font Family
- **Display:** `'Playfair Display', serif` — weights 400 / 700 / 900 plus 400 italic, loaded via Google Fonts at the very top of `src/index.css` before the `@tailwind` directives.
- **Body:** `'Source Sans 3', 'Source Sans Pro', sans-serif` — weights 300 / 400 / 500 / 600. The Pro alias is intentional so legacy class names continue to resolve.
- **OpenType features:** Defaults only. No `font-feature-settings` overrides — Playfair's standard ligatures and Source Sans's tabular numerals are accepted as shipped.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `hero-title` | `clamp(96px, 18vw, 280px)` | 900 | 0.92 | -0.02em | The "AI Studio" wordmark, Playfair Display |
| `nav-link` | 14px (`text-sm`) | 300 (`font-light`) | normal | normal | Nav menu items, Source Sans 3 |
| `nav-cta` | 14px (`text-sm`) | 500 (`font-medium`) | normal | normal | "Try it free" pill label |
| `button-primary-label` | 14px (`text-sm`) | 500 (`font-medium`) | normal | normal | "Start your film" label |
| `button-secondary-label` | 14px (`text-sm`) | 500 (`font-medium`) | normal | normal | "See showcase" label |
| `body-side` | 14px (`text-sm`) | 300 (`font-light`) | `leading-relaxed` | normal | Bottom-row left/right paragraphs |
| `sign-in` | 14px (`text-sm`) | 300 (`font-light`) | normal | normal | "Sign in" link in the nav cluster |
| `logo-mark` | 34×26 SVG viewport | — | — | — | Inline play-mark beside the nav |

### Principles
- Negative letter-spacing (`-0.02em`) at display size only. Body text rides at default tracking — never tighten 14px copy.
- Line-height 0.92 at hero size lets the wordmark read like a film title, not a headline.
- Weight 900 is reserved for the title. Anywhere else (nav, buttons, copy) lives at 300–500.
- Body type is 14px (`text-sm`) globally on the hero — there is no 16px or 17px body. The film-credit feel comes from small type beneath a huge title.
- Italics are imported but unused on the hero; reserve them for editorial overlays in future pages.
- The display family appears exactly once per surface. Never use Playfair for buttons, nav, or copy.

### Note on Font Substitutes
If Playfair Display 900 cannot load, fall back to a paid editorial serif (DM Serif Display, Cormorant Garamond 700) at the same clamp range and tighten line-height to 0.90 to compensate for x-height shift. Never synthesize-bold a 700; leave a code comment instead. If Source Sans 3 is missing, the system-ui stack is acceptable — bump weight by 100 (300 → 400) because system fonts read lighter on dark backgrounds.

## Layout

### Spacing System
- **Base unit:** Tailwind 3 default — 4px scale (`1` = 4px, `2` = 8px, `3` = 12px, `4` = 16px, `5` = 20px, `6` = 24px, `10` = 40px, `12` = 48px).
- **Nav padding:** `px-4 py-2.5` (16px horizontal, 10px vertical) on the liquid-glass pill.
- **Nav gaps:** `gap-6` (24px) between LogoMark/links cluster, `gap-5` (20px) inside the links cluster, `gap-3 ml-4` (12px / 16px) for the right cluster.
- **Hero title offset:** inline `top: 126px` from the top of the viewport.
- **Bottom row offset:** `bottom-12` (48px) with `px-10` (40px) horizontal padding.
- **CTA cluster gap:** `gap-3` (12px) between the primary and secondary buttons.
- **Side paragraph width:** capped at `max-w-[220px]`.

### Grid & Container
- The hero is **full-bleed** — no max-width clamp, no centered column. Every layer is `fixed inset-0` and fills the viewport regardless of breakpoint.
- **Z-order (mandatory):** video `z-0` → light rays `z-10` → hero title `z-20` → bottom row `z-20` → nav `z-50`.
- The nav and the centered CTA cluster both use `left-1/2 -translate-x-1/2` for absolute centering — they do not share a grid.
- The bottom row is `flex items-end justify-between` with the centered CTA absolutely positioned over the row's center.

### Whitespace Philosophy
Whitespace is the theater. The hero treats the gap between the title and the bottom row as the most expensive space on the page — it is where the rays breathe and the video shows through. There are no decorative dividers, no "feature card" rows, no testimonial strip. The negative space is the proof that the studio has nothing to apologize for. When extending the system, resist the urge to fill it; if a new surface needs content, add a section below the hero with the same `px-10` margin and let it inherit the same emptiness.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | The page background, the looping video plate, the inline LogoMark |
| Hairline glass | `inset 0 1px 1px rgba(255,255,255,0.10)` + masked gradient `::before` | `.liquid-glass` — nav pill, "See showcase" CTA |
| Strong glass | `4px 4px 4px rgba(0,0,0,0.05)` + `inset 0 1px 1px rgba(255,255,255,0.15)` + heavier gradient `::before` | `.liquid-glass-strong` — "Try it free" CTA |
| Active glow | `0_0_24px_4px_rgba(255,255,255,0.25)` (primary) / `0_0_20px_2px_rgba(255,255,255,0.07)` (secondary) | Button :active / :focus emphasis |

**Shadow philosophy.** Depth is implied by light, never by drop shadow. The primary button glows on hover the way a key light blooms on white wardrobe; the glass panels gain depth from the masked `::before` highlight, not from `box-shadow`. The only "real" shadow on the page is the 4px `rgba(0,0,0,0.05)` on `.liquid-glass-strong`, and even that is half a hairline.

**Decorative depth:**
- Looping video at `z-0` is the deepest plane — out of focus by design.
- `bg-black/35` scrim sits between video and rays, pulling everything one stop darker.
- WebGL rays at `z-10` use `mix-blend-screen` so they only brighten — they never darken or tint underneath.
- Title and bottom row at `z-20` cast no shadow; weight and contrast carry them.
- Nav pill at `z-50` floats above everything via the glass `::before` highlight alone.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `rounded` (DEFAULT) | 9999px | Every pill — nav, buttons, CTA cluster (Tailwind override) |
| `LogoMark rx` | 7px | The 26×26 white square inside the LogoMark SVG |
| `none` | 0 | The video plate, the rays canvas, the bottom-row container |

The Tailwind `borderRadius.DEFAULT = '9999px'` override is intentional and load-bearing. It means every utility that reads as `rounded` (without a suffix) renders as a full pill. Do not introduce `rounded-md`, `rounded-lg`, or `rounded-xl` on the hero — the visual identity depends on the binary choice between sharp rectangles (canvas) and full pills (chrome).

### Photography Geometry
- **Hero video:** 16:9 source, `object-cover` to fill any aspect ratio. Canonical CDN URL `https://cdn.5sdesign.art/projects/aistudio/hero-video.mp4`. `autoPlay muted loop playsInline preload="auto"`.
- **Scrim:** `bg-black/35` (`rgba(0,0,0,0.35)`) absolutely positioned over the video, no border-radius.
- **Light-rays canvas:** full-screen, DPR-aware (`Math.min(window.devicePixelRatio, 2)`), `mix-blend-screen`, `pointer-events-none`.
- **LogoMark:** 34×26 viewport, internal rect `x=4 y=0 w=26 h=26 rx=7`, play triangle `M14 8 L14 18 L22 13 Z`. No external icon library.
- **Lazy-loading:** none for the hero plate — the video preloads via `preload="auto"` because it IS the first impression.

## Components

### Top Navigation

**Nav pill** `{component.nav-pill}`. A single `liquid-glass flex items-center gap-6 rounded px-4 py-2.5` capsule fixed at `top-5 left-1/2 -translate-x-1/2 z-50`. Houses: `LogoMark` → 5 nav links (`Showcase / Styles / API / Pricing / Blog`) → right cluster (Sign in + "Try it free"). The whole nav is one floating capsule, never a horizontal bar across the viewport.

**Nav link** `{component.nav-link}`. `text-sm font-body font-light text-white/70 transition-colors duration-200`. Default state at `{colors.muted}`. Active state on the current route lifts to `{colors.foreground}`. Focus state inherits the browser default ring on the glass surface — do not strip it.

### Buttons

**Primary button** `{component.button-primary}`. `group relative bg-white text-black text-sm font-body font-medium rounded px-6 py-3 overflow-hidden transition-all duration-200`. Default: solid `{colors.foreground}` on `{colors.background}`. Active: `scale-[0.97]` with the inner gradient overlay `bg-gradient-to-b from-white to-white/85` revealed. Focus: outer glow `shadow-[0_0_24px_4px_rgba(255,255,255,0.25)]` combined with `scale-[1.03]`. Used for "Start your film".

**Secondary button** `{component.button-secondary}`. `liquid-glass group text-white text-sm font-body font-medium rounded px-6 py-3 transition-all duration-200`. Default: `.liquid-glass` with masked gradient `::before`. Active: `scale-[0.97]`. Focus: `scale-[1.03]` with combined `inset_0_1px_1px_rgba(255,255,255,0.2),0_0_20px_2px_rgba(255,255,255,0.07)`. Used for "See showcase".

**Utility / CTA button** `{component.cta-try-free}`. `liquid-glass-strong text-sm font-body font-medium text-white rounded px-4 py-1.5 transition-all duration-200`. Default: heavier 50px backdrop blur, brighter masked border, `4px 4px 4px rgba(0,0,0,0.05)` drop shadow. Active: `scale-[0.97]`. Focus: `scale-[1.04]` with `0_0_16px_2px_rgba(255,255,255,0.12)`. Used for "Try it free" inside the nav pill.

### Cards & Containers

**Liquid-glass panel** `{component.liquid-glass}`. `background: rgba(255,255,255,0.01); backdrop-filter: blur(4px); background-blend-mode: luminosity;` with an `inset 0 1px 1px rgba(255,255,255,0.10)` highlight and a `::before` masked gradient border (`-webkit-mask-composite: xor`). Default state. No active or focus variants — the panel is structural chrome, not interactive.

**Liquid-glass-strong panel** `{component.liquid-glass-strong}`. Same recipe with `blur(50px)`, brighter gradient stops (0.5 → 0.2 → 0), and an outer `4px 4px 4px rgba(0,0,0,0.05)`. Reserved for surfaces that must read above bright video frames.

**Video plate** `{component.video-plate}`. `fixed inset-0 z-0` container holding a `w-full h-full object-cover` video plus an `absolute inset-0 bg-black/35` scrim. No border-radius, no shadow, no inner padding.

### Inputs & Forms

**Default input** (forward-looking, not present on the hero) `{component.input-default}`. When forms arrive, follow the liquid-glass system: `.liquid-glass rounded px-4 py-3 text-sm font-body text-white placeholder:text-white/40`. Default state inherits the masked gradient border. Focus state adds the same `0_0_16px_2px_rgba(255,255,255,0.12)` outer glow used by the "Try it free" CTA. Active state collapses to `scale-[0.98]` while typing.

### Footer

**Bottom row** `{component.bottom-row}`. `fixed bottom-12 left-0 right-0 px-10 flex items-end justify-between z-20`. Hosts the two side paragraphs (left and right, each `text-sm text-white/75 max-w-[220px] leading-relaxed`) and the absolutely-centered CTA cluster. There is no traditional footer — the bottom row IS the foot of the page. No link list, no socials, no copyright.

## Do's and Don'ts

### Do
- Use `{colors.background}` flat with no gradient on every full-bleed surface.
- Set the hero title at `clamp(96px, 18vw, 280px)` with `line-height: 0.92` and `letter-spacing: -0.02em`.
- Apply `.liquid-glass` to every floating chrome element (nav, secondary CTA).
- Reserve `{colors.accent}` for the WebGL ray color and nothing else.
- Keep `borderRadius.DEFAULT = '9999px'` in `tailwind.config.js` — every `rounded` becomes a pill.
- Layer compositions in the canonical z-order: video `z-0` → rays `z-10` → content `z-20` → nav `z-50`.
- Drive the title with `BlurText` at `delay={220}` and `stepDuration={0.5}` for new headlines.
- Keep body copy at `text-sm font-light text-white/75` with `leading-relaxed` on side paragraphs.

### Don't
- Don't use purple, indigo, or neon green anywhere — the prompt's constraint is verbatim.
- Don't introduce a CTA brand color; primary stays `bg-white text-black`, secondary stays `.liquid-glass`.
- Don't add `rounded-md`, `rounded-lg`, or `rounded-xl` on the hero — the binary pill/rectangle vocabulary is the identity.
- Don't paraphrase the `.liquid-glass` recipe; the `-webkit-mask-composite: xor` masked border IS the design DNA.
- Don't synthesize-bold Playfair if 900 fails — fall back to the nearest weight and leave a comment.
- Don't drop the `bg-black/35` scrim — the video alone fails AA at body sizes.
- Don't animate hover states on links beyond `transition-colors duration-200` to white.
- Don't add a max-width clamp to the hero — every layer is `fixed inset-0` by design.
- Don't pin a second shader to the page; one volumetric ray field is the rule.
- Don't replace the inline LogoMark with a lucide / heroicons / Phosphor import.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤419px | Hero clamps to its 96px floor; nav pill shrinks via `whitespace-nowrap` but stays horizontally centered |
| Phone | 420–640px | Bottom-row side paragraphs hug `max-w-[220px]`; CTA cluster centers absolute over the row |
| Large phone | 641–735px | Nav links remain visible (no hamburger); title still at floor `96px` |
| Tablet portrait | 736–833px | Hero begins to scale via `18vw`; rays fill more of the viewport because `inset-0` |
| Tablet landscape | 834–1023px | Title approaches mid-clamp; side paragraphs remain capped at 220px |
| Small desktop | 1024–1068px | Composition reads as designed — title near `clamp` upper third |
| Desktop | 1069–1440px | Default reference viewport — title at full visual weight |
| Wide desktop | ≥1441px | Title hits `280px` ceiling; ray spread (`lightSpread=0.7`) still reads from `top-center` |

### Touch Targets
- Minimum 44×44px on all interactive elements.
- "Sign in" link sits inside the nav pill — its hit area is the link bounds plus the `py-2.5` padding of the parent capsule.
- Primary and secondary CTAs at `px-6 py-3` and `text-sm` deliver 44px height on default font metrics.
- "Try it free" CTA at `px-4 py-1.5` is the smallest target — keep its label one word to preserve hit area.

### Collapsing Strategy
- **Nav:** never collapses to a hamburger on the hero — `whitespace-nowrap` and the floating-pill layout keep all 5 links visible down to 360px. If a future surface needs a hamburger, build it as a separate component, not by mutating this pill.
- **Hero title:** the `clamp()` function does all collapsing; never apply per-breakpoint overrides.
- **Bottom row:** at narrow widths the centered CTA cluster overlaps the side paragraphs. Acceptable — `max-w-[220px]` keeps them out of the way. Do not stack vertically.
- **Light rays:** never disabled responsively — the WebGL component handles small viewports through its own DPR clamp.
- **Video plate:** `object-cover` handles all aspect ratios; never swap to a portrait source on mobile.

### Image Behavior
- The hero video is the only image asset and ships at one resolution from the CDN. No `srcset`, no `<source media>` swap.
- Aspect ratio is implicit — `object-cover` lets the plate fill any viewport without letterboxing.
- The video `preload="auto"` because it is above the fold; no lazy-loading.
- The WebGL canvas is `pointer-events-none` and DPR-clamped to 2 to keep mobile GPUs sane.

## Iteration Guide

1. Extend by adding new surfaces below the hero, not by adding chrome to the hero itself. The hero is a fixed, final composition.
2. Variants live inside `Components`. If a new button shape is needed, add a fourth entry — never overload the primary or secondary tokens.
3. Always reference colors and tokens via `{colors.tokenName}` and `{component.componentName}` syntax — never hard-code hex in new sections.
4. Do not document hover. Apple convention is default / active / focus only. If a hover effect ships, it is a `transition-colors` or `scale` micro-motion, not a new state token.
5. Display family (Playfair Display) appears once per surface, on the headline only. Body family (Source Sans 3) carries everything else, including secondary headlines on new pages.
6. Shadows stay restricted to the four levels in the Elevation table. New components inherit `liquid-glass` or `liquid-glass-strong` — they do not invent a fifth level.
7. When chrome (nav, footer, CTA cluster) needs to live on a non-hero surface, swap the looping video for a solid `{colors.background}` plate — the glass recipe still reads because the masked `::before` doesn't depend on the underlying motion.

## Known Gaps

- **Validation states.** The forward-looking input spec is sketched but never built — error, disabled, and success appearances are not surfaced in analyzed pages.
- **Dark vs. light mode.** There is no light mode. The system is single-theme by design, but a future "press kit" variant would need its own token set.
- **Specific blur radii beyond 4px and 50px.** Intermediate glass levels (e.g. 12px or 24px) are not surfaced — pick one based on the panel's depth, then document it.
- **Form components beyond a single input.** Textarea, select, checkbox, radio, and switch are not documented and have no liquid-glass treatment in the source.
- **Modal and overlay patterns.** There is no `Dialog` component — overlays would need to define their own scrim opacity (currently the only scrim is `bg-black/35` over the video plate).
- **Localization metrics.** Playfair Display's italic 400 is loaded but the system is not stress-tested against long German or Cyrillic titles; the `clamp()` may need a smaller floor.
