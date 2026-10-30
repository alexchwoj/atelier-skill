---
version: "1"
name: "Design System Inspired by Comai"
description: "Comai's stage is warm ink #171114 — a near-black with a brown cast, never #000000 — lit by faint amber haze in two corners and dusted with fine monochrome film grain. All type is cream #ede3d8 (Outfit Variable, the only family) with clay #a3948b for the muted tagline; ember #e2612c exists solely as the text-selection highlight. The page is one viewport: a floating glass pill navbar and an endless 3D coverflow conveyor of seven comic panels arching across the full screen width, driven by GSAP math — no scroll, no second section."
colors:
  ink: "#171114"          # page + hero background — warm near-black, brown cast
  ink-soft: "#1f171a"     # reserved surface tint — declared, unused on the shipped hero
  cream: "#ede3d8"        # primary text + primary CTA fill — the light of the page
  clay: "#a3948b"         # muted text — the tagline only
  ember: "#e2612c"        # ::selection highlight only (at 35% alpha), nowhere else
  moss: "#3e9b4f"         # reserved token — never rendered
typography:
  display: { fontFamily: "'Outfit Variable', 'Outfit', system-ui, sans-serif", weights: "500", role: "hero wordmark — 24px medium, tracking-tight, full cream" }
  body:    { fontFamily: "'Outfit Variable', 'Outfit', system-ui, sans-serif", weights: "400", role: "tagline — 16→18px, clay, leading-relaxed" }
  ui:      { fontFamily: "'Outfit Variable', 'Outfit', system-ui, sans-serif", weights: "500-600", role: "nav links 13px/500, wordmark 13.5px/600, CTAs 14px/500, Contact pill 13px/600" }
spacing:
  base: "4px"
  nav-inset: "6px"        # nav shell padding (p-1.5)
  xs: "12px"              # CTA row gap (gap-3)
  sm: "16px"              # nav offset from top (top-4), logo lockup gap (gap-4)
  md: "24px"              # hero side rail (px-6)
  lg: "32px"              # tagline → CTA row (mt-8)
  xl: "40px"              # logo → ring and ring → tagline (mt-10)
  hero-frame: "80px top / 48px bottom"   # hero pt-20 pb-12
rounded:
  card: "20px"            # carousel panels — the only non-pill radius
  pill: "9999px"          # nav shell, every nav item, both CTAs
motion:
  ease-default: "power3.out"                 # every entrance tween
  ease-pop: "back.out(1.25)"                 # card entrance overshoot
  ease-conveyor: "none (linear)"             # the endless loop — one lap / 36s
  ease-float: "sine.inOut"                   # idle bob, yoyo repeat
  ease-card-hover: "cubic-bezier(0.16,1,0.3,1) 500ms"   # CSS lift on panel hover
  hover-brake: "timeScale → 0.1 over 0.7s on pointerenter, → 1 on leave"
  lenis: "lerp 0.12, ticker-driven, skipped under prefers-reduced-motion"
components:
  nav-pill: "Floating glass bar — rounded-full, 1px border white/10, bg ink/55, backdrop-blur-xl, p-1.5, shadow [0_24px_60px_-24px_rgba(0,0,0,0.8)], fixed top-4 centered"
  nav-link: "13px/500 cream/60 pill — hover bg white/[0.06] + text cream, 300ms color ease"
  contact-pill: "Solid cream pill in the nav — 13px/600 ink text, hover bg white"
  btn-primary: "Cream pill — px-6 py-3, 14px/500 ink text, hover scale 1.03, active 0.98 (transform transition)"
  btn-ghost: "Outline pill — border white/15, cream/80 text, hover bg white/[0.06] + full cream (color transition)"
  panel-card: "4:5 portrait, rounded 20px, ring-1 white/10, shadow [0_36px_70px_-20px_rgba(0,0,0,0.75)], gloss gradient white/10→black/25, ink depth-shade overlay, CSS hover lift -8px/1.03"
  conveyor: "7 cards on a 120%-viewport track — x=d·w·1.2, y=−24+a²·60, scale 0.78+a·0.3, rotZ 24d, rotY −44d, shade a·0.34, fade a>0.94, 36s lap"
  backdrop: "hero-haze corner radial gradients (amber rgb(190 106 58/.14) ×2 + rgb(94 46 36/.22) floor) + 180px SVG film grain at 9%"
---

# Design System Inspired by Comai

## Overview

Comai's stage is **warm ink** `{colors.ink}` — #171114, a near-black with a distinct brown cast, deliberately warmer than `#000000` so the dark room reads as cinema rather than void. The room is lit, not decorated: two faint amber radial glows (`rgb(190 106 58 / 0.14)`) hang in the top corners with a deeper warm pool (`rgb(94 46 36 / 0.22)`) rising past the bottom edge, and a fine monochrome SVG film grain (180px tile, 9% opacity) dusts the whole backdrop. There is no background video, no shader, no imagery behind the content — the atmosphere is two CSS layers on top of one hex.

The subject of the page is the **endless 3D conveyor**: seven portrait comic panels on an invisible looping track that spans 120% of the viewport width, arching like a curved gallery wall — the center panel small, flat, and raised; the edge panels larger, tilted (`rotationZ`), and turned inward (`rotationY` coverflow); each card shaded progressively darker toward the edges by an opacity-driven ink overlay. One lap takes 36 unhurried seconds, each panel bobs on its own sine wave, and the whole loop eases to a tenth of its speed when the visitor hovers to inspect a panel. **Most AI-startup heroes flex neon gradients, purple-blue glows, and grids of generated output — Comai instead hangs seven prints in a warm dark room and lets them drift past like a museum wall, with a single cream CTA as the brightest object on the page.** No purple, no indigo, no neon green — anywhere.

Type is one voice: **Outfit Variable**, self-hosted via `@fontsource-variable/outfit`, carrying every role from the 13px nav links to the 24px hero wordmark. All text is `{colors.cream}` (#ede3d8) or an opacity step of it, except the tagline which drops to `{colors.clay}` (#a3948b) — the only second text color. `{colors.ember}` (#e2612c) exists on exactly one surface: the text-selection highlight at 35% alpha. It never touches a button, border, or headline.

Everything interactive is a **pill**: the glass navbar shell, every nav item, the solid-cream Contact chip, and both hero CTAs are `rounded-full`; the only other radius on the page is the panels' 20px. Depth belongs to the cards — a deep soft shadow (`0 36px 70px -20px` at 75% black), a 1px `white/10` ring, and a top-gloss gradient give each print a glassy, physical finish against the flat room.

**Key Characteristics:**
- **Warm-ink canvas** — `{colors.ink}` #171114 everywhere; the page is never pure black and never light.
- **Light, not decoration** — `{components.backdrop}`: two amber corner glows + a warm floor pool + 9% film grain. No video, no orbs, no mesh gradients.
- **The conveyor is the hero** — 7 panels, exact math (`{components.conveyor}`), 36s linear lap, hover brake to 0.1× speed, per-panel sine float.
- **Cream does all the talking** — `{colors.cream}` type on ink, clay for one muted sentence, ember rationed to `::selection`.
- **One typeface** — Outfit Variable 400/500/600; hierarchy from size and weight only.
- **Pill geometry** — every control is `rounded-full`; panels alone carry the 20px card radius.
- **Compositor-only animation** — GSAP writes `transform`/`opacity` exclusively; depth shading is overlay opacity, never `filter: brightness()`; continuous values live in a plain object, never React state.
- **Four-layer card anatomy** — `h-card` (conveyor) / `h-card-pop` (entrance) / `h-card-float` (idle bob) / `h-card-inner` (CSS hover) — each layer owns exactly one transform system so they never fight.
- No icon library beyond Phosphor's `Cube` (duotone), no gradient text, no purple/indigo/neon, no second section.

## Colors

> Source: the single-viewport Comai hero — glass nav pill, logo lockup, the 7-panel conveyor, tagline, and CTA pair. The system is one screen; there are no other live surfaces.

### Surface
- **Ink** ({colors.ink}): The page and hero background — #171114, a warm near-black with a brown cast. It is the room; the haze and grain sit directly on it. Never substitute `#000000`.
- **Ink soft** ({colors.ink-soft}): #1f171a, a declared surface tint for future raised panels — unused on the shipped hero (see Known Gaps).
- **Haze**: not a token but a recipe — `radial-gradient` pools of `rgb(190 106 58 / 0.14)` at the top corners and `rgb(94 46 36 / 0.22)` past the bottom edge. This is the only "color" the background ever shows.
- **White glass**: white enters surfaces only as translucency — `white/[0.06]` hover fills, `white/10` ring and nav border, `white/12` divider, `white/15` ghost-CTA border.

### Text
- **Cream** ({colors.cream}): The light of the page — full-strength on the wordmarks, headline-scale logo, and primary CTA label (as `text-ink` on cream fill). Steps down for de-emphasis: `cream/85` (brand icon), `cream/80` (ghost CTA label), `cream/60` (idle nav links). Muted text is a cream alpha, never a grey hex.
- **Clay** ({colors.clay}): #a3948b — the tagline only. The single second text color, warm enough to sit in the same room as cream.

### Accent
- **Ember** ({colors.ember}): #e2612c at 35% alpha as the `::selection` background — the entire accent budget. It never fills a button, never colors a link, never appears in the layout. Selecting text is the only way to see it.
- **Moss** ({colors.moss}): #3e9b4f, declared and never rendered — a reserve token (see Known Gaps).

### Depth
- **Black at alpha**: shadows only — `rgba(0,0,0,0.8)` under the nav shell, `rgba(0,0,0,0.75)` under the panels, and the `to-black/25` base of each card's gloss gradient.

### Semantic
None. No success / error / warning colors exist on the hero; they would need to be introduced deliberately for product screens.

## Typography

### Font Family

- **Outfit Variable** — the only typeface, self-hosted through `@fontsource-variable/outfit` (no Google Fonts `<link>`, no CDN). Fallback stack `'Outfit Variable', 'Outfit', system-ui, sans-serif`; rendered with `-webkit-font-smoothing: antialiased`.
- One family carries every role. Hierarchy is built from size (13 → 24px) and weight (400/500/600), never from a second face.

### Hierarchy

| Token | Size | Weight | Letter Spacing | Use |
|---|---|---|---|---|
| `{typography.display}` | 24px (text-2xl) | 500 | tracking-tight | Hero wordmark "Comai Studio", full cream |
| `{typography.body}` | 16px → 18px (md:) | 400 | 0 | Tagline, clay, `leading-relaxed`, `max-w-xl` centered |
| nav wordmark | 13.5px | 600 | tracking-tight | "Comai Studio" in the nav pill |
| `{typography.ui}` (CTA) | 14px | 500 | 0 | Both hero buttons |
| `{typography.ui}` (nav) | 13px | 500 | 0 | Nav links, cream/60 → cream on hover |
| contact pill | 13px | 600 | 0 | The solid-cream nav CTA |

### Principles

- **There is no headline.** The brand lockup (Cube glyph + 24px wordmark) plus the artwork conveyor do the talking; the tagline is deliberately body-scale. Adding a display-size headline would compete with the panels.
- **600 is the ceiling** — semibold appears only at chip scale (nav wordmark, Contact pill). Nothing on the page is bold at large sizes.
- **Sentence case everywhere** — nav labels are `Home / Product / How / About / Contact`, never uppercase, no letter-spacing tricks outside `tracking-tight` on wordmarks.
- **De-emphasis = alpha or clay**, never a smaller grey type ramp.

### Note on Font Substitutes

Outfit is open-licensed (via Fontsource) — install `@fontsource-variable/outfit` and import it; no substitution needed. Keep the variable weight axis (400–600 in use); "a geometric sans like Outfit" is not Outfit.

## Layout

### Spacing System

- **Base unit**: 4px.
- **Tokens (front matter)**: `{spacing.nav-inset}` 6px · `{spacing.xs}` 12px · `{spacing.sm}` 16px · `{spacing.md}` 24px · `{spacing.lg}` 32px · `{spacing.xl}` 40px.
- Hero frame: `pt-20` (80px) clears the fixed nav, `pb-12` (48px) grounds the CTA row, `px-6` (24px) side rail — but the conveyor escapes the rail at `w-screen`, full-bleed by design.
- Copy rhythm: logo lockup internal `gap-4` (16px) → ring `mt-10` (40px) → tagline `mt-10` (40px) → CTA row `mt-8` (32px), CTA gap `gap-3` (12px).
- Nav: fixed `top-4` (16px), shell `p-1.5` (6px) with `gap-1`; brand `py-2 pl-3.5 pr-4`; links `px-4 py-2`; Contact `px-4.5 py-2` with `ml-1.5`.
- CTA padding: `px-6 py-3` (24 × 12px) on both hero buttons.

### Grid & Container

- **Single-viewport flex column**: `section.hero-haze.relative.min-h-[100dvh]` (never `h-screen`) with `flex flex-col items-center justify-center` — everything centered on both axes as one stack.
- Width caps are per-element: tagline `max-w-xl`; the ring is `w-screen` (full-bleed); the nav shell shrink-wraps its content. There is no page container.
- The carousel ring is a fixed-height stage — `h-[clamp(270px,46vh,440px)]` with `perspective: 1600px` — inside which all seven cards are absolutely positioned at `left-1/2 top-1/2` and moved purely by transform.

### Whitespace Philosophy

The composition is a vertical sandwich: identity above, artwork in the middle, persuasion below — separated by two equal 40px breaths. The conveyor supplies all the visual density, so the copy zone stays sparse: one glyph, one wordmark, two sentences, two buttons. Crowding the stack (a headline, badges, social proof) would turn the gallery wall into a billboard.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (room) | Flat `{colors.ink}` + `{components.backdrop}` haze & grain | The entire backdrop |
| 1 (stage) | `perspective: 1600px` on the ring | 3D space for the conveyor |
| 2 (prints) | `{components.panel-card}` — deep soft shadow + `white/10` ring + gloss gradient + ink depth-shade | The seven panels |
| 3 (glass) | `bg-ink/55` + 1px `white/10` border + `backdrop-blur-xl` + `0 24px 60px -24px` shadow | The nav pill |

- Depth *within* the conveyor is algorithmic: each card's ink `h-card-shade` overlay runs `opacity: a·0.34` (a = normalized distance from center), so the center print catches the light and the edges recede into the room. This is overlay opacity, **never** `filter: brightness()` — the shade layer keeps the loop compositor-only.
- Cards also carry a static gloss: `bg-gradient-to-b from-white/10 via-transparent via-30% to-black/25` — soft top light, grounded base, the "glass over print" finish.
- Unlike a flat cinematic system, shadows are welcome here — but only under the two floating objects (nav shell, panels), never under text or buttons.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.card}` | 20px | Carousel panels — the only rectangle-with-corners |
| `{rounded.pill}` | 9999px | Nav shell, every nav item, Contact chip, both CTAs |

### Iconography

- **Phosphor Icons (`@phosphor-icons/react`), duotone weight, one glyph**: `Cube` — 17px as the nav brand mark, 24px in the hero lockup, both at `text-cream/85`.
- No other icons exist. Never hand-draw SVG icon paths; never import a second icon set.

## Components

### Navigation

**`nav-pill`** ({components.nav-pill}) — The floating glass header.
- `fixed inset-x-0 top-4 z-50` wrapper centers a shrink-wrapped `rounded-full` shell: `border white/10`, `bg-ink/55`, `backdrop-blur-xl`, `p-1.5`, shadow `0 24px 60px -24px rgba(0,0,0,0.8)`.
- Order: brand link (Cube 17 + 13.5px/600 wordmark) → 1px `white/12` divider → four `{components.nav-link}` items (Home `#top`, Product, How, About) → `{components.contact-pill}`.
- Every item is itself a pill with a `white/[0.06]` hover fill; color transitions run 300ms. Entrance: shell drops in from −28px, items stagger from −14px at 0.05s steps.

### Buttons

**`btn-primary`** ({components.btn-primary}) — "Get Started Now".
- Solid `{colors.cream}` pill, `px-6 py-3`, 14px/500 `text-ink`. Hover scales to 1.03, active presses to 0.98 — a `transition-transform` on the `<a>` itself, which is exactly why GSAP animates a plain `.hero-cta` wrapper `<div>` instead (see Do's).

**`btn-ghost`** ({components.btn-ghost}) — "Case studies".
- `border white/15` outline pill, `text-cream/80`, hover `bg-white/[0.06]` + full cream — a *color* transition, no transform. The quiet twin that keeps cream's brightness budget on the primary.

**`contact-pill`** ({components.contact-pill}) — nav-scale primary: solid cream, 13px/600, hover `bg-white`.

### The Conveyor

**`panel-card`** ({components.panel-card}) — one print, four nested layers, each owning one transform system:
1. `h-card` — absolute at ring center, `width: clamp(124px, 16vw, 265px)`; the conveyor writes `x/y/scale/rotationZ/rotationY/opacity/zIndex` here every frame.
2. `h-card-pop` — the entrance tween target (`y:150, scale:0.55 → 0`, `back.out(1.25)`, staggered from center).
3. `h-card-float` — the idle sine bob (`y:8`, 2.4–3.4s, yoyo, per-card delay).
4. `h-card-inner` — the visual: `aspect-[4/5]`, `rounded-[20px]`, ring, shadow, `<img object-cover>`, gloss gradient, ink `h-card-shade`; CSS hover lifts −8px / 1.03 on `cubic-bezier(0.16,1,0.3,1)`.

**`conveyor`** ({components.conveyor}) — the math, reproduced exactly: track position `p = wrap01(t + i/N)`, signed distance `d = p − 0.5`, normalized edge `a = |d|/0.5`; then `x = d·w·1.2` (120% viewport track), `y = −24 + a²·60` (parabolic arch, center raised), `scale = 0.78 + a·0.3` (center small, edges large), `rotationZ = 24d`, `rotationY = −44d` (coverflow turn-in), shade `a·0.34`, end-fade past `a > 0.94` with the fading card z-indexed *under* its neighbors. One lap = 36s linear; hover brakes `timeScale` to 0.1 over 0.7s and releases on leave. All compositor hints (`will-change`, `backface-visibility`) are pre-declared in CSS.

### Backdrop

**`backdrop`** ({components.backdrop}) — `.hero-haze` (three radial gradients) painted on the section itself + one absolute `.grain` div (180px SVG fractal-noise tile, desaturated, 9% opacity) as the first child. Content sits above at `z-10`. That is the entire background system.

### Inputs & Forms

Not present. Any future form should sit on `{colors.ink-soft}` or a `white/[0.06]` glass fill with a `white/10` hairline, cream text, and an ember-free focus treatment to be decided (see Known Gaps).

## Do's and Don'ts

### Do

- Keep the canvas at `{colors.ink}` #171114 — the brown cast is the room's temperature; never cool it toward pure black or blue-black.
- Reproduce the conveyor math digit-for-digit — span 1.2, arch −24+a²·60, scale 0.78+a·0.3, rotZ 24d, rotY −44d, shade a·0.34, fade a>0.94, 36s lap. The arc's character *is* these constants.
- Keep the four card layers separate — conveyor, entrance, float, hover each own one transform system; merging any two corrupts the others.
- Drive depth shading through the ink overlay's opacity; keep every per-frame write to `transform`/`opacity` only.
- Split GSAP entrances and CSS hovers across nested wrappers whenever one element needs both (the `.hero-cta` div pattern).
- Gate all motion behind `gsap.matchMedia('(prefers-reduced-motion: no-preference)')` and keep the static symmetric arc render for reduced-motion visitors.
- Keep artwork portrait 4:5; the shuffle order (c2 c4 c6 c1 c3 c5 c7) exists so similar art never sits adjacent — preserve it when swapping images.

### Don't

- Don't use purple, indigo, or neon green anywhere — the explicit refusal that keeps this off the AI-startup mood board.
- Don't promote ember beyond `::selection` — no ember buttons, links, or badges; the accent budget is spent on a hidden delight.
- Don't put `filter: brightness()` (or any filter) in the render loop — repaint jank is the reason the shade overlay exists.
- Don't route continuous animation values through React state — the conveyor mutates a plain object and calls `gsap.set` per frame.
- Don't add a headline, badges, or social proof to the copy stack — the panels are the headline.
- Don't use `h-screen` — the hero is `min-h-[100dvh]` so mobile browser chrome never crops the CTA row.
- Don't put `transition-transform` on any element GSAP tweens (StrictMode snapshot corruption); don't swap Phosphor for another icon library.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <768px | Nav collapses to brand + Contact pill (links + divider hidden); tagline 16px; cards bottom out at 124px wide |
| md | ≥768px | Nav links + divider appear; tagline steps to 18px |
| Wide | ≥1280px | Cards cap at 265px; ring height caps at 440px; nothing else changes |

### Fluid Strategy

- The conveyor scales continuously, not by breakpoint: card width `clamp(124px, 16vw, 265px)`, ring height `clamp(270px, 46vh, 440px)`. The same math produces a pocket-sized arc on a phone and a gallery wall on a desktop.
- The end-fade (`a > 0.94`) is the seam-hider: on narrow viewports where the 120% track overshoot can't push cards fully off-screen, the fade covers the wrap.

### Touch Targets

- Both hero CTAs are ≈46px tall (`py-3` + text); nav pills ≈37px with generous horizontal padding; the whole brand lockup is one link.
- Panel hover states (lift + loop brake) are pointer-only niceties — the composition loses nothing on touch.

### Media Behavior

- Panels are plain `<img object-cover draggable="false">` in 4:5 frames served from the Fivefold CDN; a failed load keeps the ring + shadow + shade so the card reads as an intentional dark pane, never a broken glyph.
- Under `prefers-reduced-motion: reduce`: Lenis is never created, no spin/float/entrance runs — but `render()` executes once, so the visitor still gets the full symmetric static arc, not a blank stage.

## Iteration Guide

1. New section below the hero? Start on flat `{colors.ink}` (or `{colors.ink-soft}` for raised zones) — the haze and grain belong to the hero; later sections earn their own atmosphere deliberately.
2. Reference everything by token — `{colors.x}`, `{motion.x}`, `{rounded.x}`, `{components.x}` — so a temperature or easing change cascades.
3. New artwork: portrait 4:5, painterly enough to survive 124px; re-shuffle so similar palettes never sit adjacent, then keep that order fixed.
4. New interactive elements are pills with the `white/[0.06]` hover recipe; a fifth border opacity or a second radius is a system change, not a convenience.
5. If a real accent is ever needed beyond `::selection`, audition `{colors.ember}` at chip scale first — and treat `{colors.moss}` as the reserve, not a second brand color.
6. New motion joins the existing grammar: `power3.out` entrances, `sine.inOut` idles, linear conveyors — and always inside the `matchMedia` gate.
7. Changing the lap time? Keep it slow (30s+). At speed the wall becomes a slot machine and the hover-brake stops feeling like leaning in.

## Known Gaps

- The system is a single hero viewport — no later sections, footer, pricing, or product UI are specified. Extend on ink, Outfit, cream/clay, and the pill grammar.
- Nav anchors (`#product`, `#how`, `#about`, `#contact`) and the secondary CTA's `#work` have no targets on the page — `goTo` no-ops gracefully, but real destinations need building.
- `{colors.ink-soft}` and `{colors.moss}` are declared and never rendered; ember appears only in `::selection`. How the palette scales to full pages (links, focus rings, states) is undecided.
- The build ships two unused CSS utilities (`.marquee-track` keyframes, `.rail` scrollbar-hider) from an earlier layout pass — adopt or remove them deliberately.
- Form inputs, focus-visible styles, and semantic states (error/success) are absent and would need to be introduced in the ink + cream language.
- ScrollTrigger is registered but unused on the single viewport — it becomes live the moment a second section exists.
