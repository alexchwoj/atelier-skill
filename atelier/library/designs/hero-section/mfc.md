---
version: "1"
name: "Design System Inspired by MFC"
description: "MFC's stage is an off-white #f0f0ee that sits behind a fullscreen looping background video — the off-white only shows for the instant before the video paints. The single chromatic accent is blue (Tailwind blue-500/400/300/200), rationed to the badge link, the CTA fill, and its glow. The signature surface is a left-aligned editorial hero block in bright white type held legible over the video by per-element drop-shadows; the page rhythm is one viewport, vertically centered, no scroll. Typography is Tailwind's default system sans stack — no web font is loaded."
colors:
  stage: "#f0f0ee"          # root page background behind the video — off-white, shows pre-paint only
  pill: "#EDEDED"           # navbar pill fill (both pills) — inline backgroundColor
  logo-fill: "rgb(84,84,84)" # fist SVG mark — mid-grey, the only grey-on-pill ink
  nav-ink: "#374151"        # nav link rest — Tailwind gray-700
  nav-ink-hover: "#111827"  # nav link hover — Tailwind gray-900
  headline: "#ffffff"       # h1 + CTA label — pure white over the video
  subtext: "rgba(255,255,255,0.85)" # paragraph — text-white/85
  accent: "#3b82f6"         # accent fill — Tailwind blue-500, the CTA
  accent-hover: "#60a5fa"   # accent hover — Tailwind blue-400
  accent-badge: "#93c5fd"   # badge rest — Tailwind blue-300
  accent-badge-hover: "#bfdbfe" # badge hover — Tailwind blue-200
typography:
  sans: { fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif", weights: "400, 500, 600", role: "the entire page — Tailwind's DEFAULT system stack, NO web font loaded" }
spacing:
  base: "4px"
  xs: "8px"                 # badge / CTA inner gap (gap-2)
  sm: "10px"                # nav logo↔links gap at sm (gap-3 ≈ 12px; gap-2 = 8px at base)
  md: "20px"                # mb-5 — badge↓headline, headline↓subtext (20px)
  lg: "28px"                # CTA horizontal padding (px-7) + subtext↓CTA (mb-8 = 32px see xl)
  xl: "32px"                # subtext bottom margin (mb-8) + nav links pill gap at sm (gap-10 = 40px see section)
  hero-rail: "112px"        # hero side padding at lg (lg:px-28); steps 24→48→80→112
rounded:
  pill-links: "12px"        # links pill — rounded-xl
  pill-cta: "9999px"        # CTA — rounded-full
  pill-logo: "9999px"       # circular logo pill — rounded-full
shadow:
  cta: "shadow-lg shadow-blue-500/40 — soft blue glow under the CTA, the page's only box-shadow"
  text-badge: "[text-shadow:0_1px_10px_rgba(0,0,0,0.55)] — legibility halo on the badge"
  text-headline: "[text-shadow:0_2px_24px_rgba(0,0,0,0.6)] — legibility halo on the h1"
  text-subtext: "[text-shadow:0_1px_12px_rgba(0,0,0,0.55)] — legibility halo on the paragraph"
components:
  cta: "The only filled button — bg {colors.accent} (blue-500), white 600 label, px-7 py-3.5, rounded {rounded.pill-cta}, {shadow.cta} glow, hover bg {colors.accent-hover}"
  badge: "Glowing blue eyebrow link — {colors.accent-badge} (blue-300), 600 weight, {shadow.text-badge}, trailing → that slides on hover"
  nav-pill-logo: "Circular {colors.pill} pill, w-10/11, holding the fist {components.logo}"
  nav-pill-links: "Rounded-xl {colors.pill} pill holding 4 gray-700 links"
  logo: "Inline fist SVG built from 6 rounded rects, fill {colors.logo-fill} rgb(84,84,84)"
  text-shadow-system: "Per-element drop-shadows that carry legibility over the video — there is no overlay tint"
---

# Design System Inspired by MFC

## Overview

MFC's page background is `{colors.stage}` (#f0f0ee), an off-white with a faint warm-grey cast — but it is almost never seen. It is the root wrapper's `bg-[#f0f0ee]`, sitting behind a fullscreen, autoplaying, muted, looping background video that fills the stage with `object-cover`. The off-white shows only in the instant before the video paints, and on a frame the video happens to leave bare. The real surface of the page is moving footage; the off-white is the safety net beneath it.

Onto the video sit only three ink families: bright `{colors.headline}` white (#ffffff) for the headline and CTA label, `{colors.subtext}` `text-white/85` for the one paragraph, and a mid-grey `{colors.logo-fill}` `rgb(84,84,84)` reserved for the fist mark inside the navbar pill. The two navbar pills are filled `{colors.pill}` (#EDEDED), a light grey set inline; their link text is Tailwind `{colors.nav-ink}` gray-700 lifting to gray-900 on hover. There is no surface ladder, no card, no border anywhere on the page.

The single chromatic accent is **blue**, drawn straight from Tailwind's palette: `{colors.accent}` blue-500 fills the CTA, `{colors.accent-hover}` blue-400 is its hover, `{colors.accent-badge}` blue-300 colors the badge link, and `{colors.accent-badge-hover}` blue-200 is the badge hover. Three placements total — the badge, the CTA fill, and the CTA's blue glow `{shadow.cta}`. **Most game / esports landing pages lean on dark backgrounds, neon gradients, and aggressive display type — MFC refuses all of it, holding a calm light editorial hero over a single looping video and letting one blue accent plus soft drop-shadows carry the whole page.**

Typography is the quiet decision that defines the build: **no web font is loaded at all.** There is no Google Fonts `@import`, no `<link>` in `index.html`, no `fontFamily` extension in the Tailwind config (`theme.extend = {}`). Every word renders in Tailwind's **default `sans-serif` system stack** — `system-ui`, `-apple-system`, `Segoe UI`, `Roboto`, and so on — so the type is whatever the visitor's OS supplies. Type is sized entirely with utility classes (`text-4xl`, `text-[14px]`) and weighted 400/500/600; there is no brand typeface.

The page rhythm is a **single-screen hero** — one `min-h-screen` flex column, navbar pinned at the top, the hero block taking the remaining height (`flex-1`) and centering its content vertically (`items-center`). The hero copy is **left-aligned** and capped at `max-w-2xl`: a glowing blue badge link, a bright white headline, an 85%-white subtext, and a solid blue pill CTA, stacked in that order. Nothing scrolls; there is no second section.

**Key Characteristics:**
- **Video-over-off-white stage** — root `{colors.stage}` (#f0f0ee) sits behind a fullscreen `object-cover` looping video; the off-white is a pre-paint net, not the visible surface.
- **One blue accent** (`{colors.accent}` blue-500 / blue-400 / blue-300 / blue-200) — used only on the badge link, the CTA fill, and the CTA glow; never on the headline, body, or background.
- **Bright white type over video** — headline `#ffffff`, subtext `text-white/85`, held legible by per-element `{components.text-shadow-system}` drop-shadows, not an overlay tint.
- **System sans, no web font** — Tailwind's default `sans-serif` stack carries everything; no typeface is loaded, weights run 400/500/600.
- **Two `#EDEDED` navbar pills** — a circular logo pill and a rounded-xl links pill, floating, not sticky, centered as a row.
- **Inline fist logo** — a punch mark built from 6 rounded rects in `{colors.logo-fill}` rgb(84,84,84); the only grey ink on the page.
- **One viewport, no scroll** — `min-h-screen` column, hero `flex-1` vertically centered; static render, no entrance or scroll animation.
- The single box-shadow is the `{shadow.cta}` blue glow under the CTA; the only motion is hover micro-interactions.
- No second accent color, no dark hero, no text gradient, no overlay tint, no card border, no entrance animation, no icon imports.

## Colors

> Source page: the single-screen MFC hero — the off-white root behind a fullscreen looping video, two `#EDEDED` navbar pills (circular logo + rounded links), and the left-aligned hero stack (blue badge → white headline → 85%-white subtext → blue CTA). The system is one viewport; there are no other live surfaces.

### Brand & Accent
- **Accent (blue)** ({colors.accent}): The single chromatic accent — Tailwind blue-500 (#3b82f6) fills the `{components.cta}`, with blue-400 ({colors.accent-hover}) on hover. Three placements total: CTA fill, CTA glow, badge. Never a headline, body, or background.
- **Badge blue** ({colors.accent-badge}): Tailwind blue-300 (#93c5fd) on the `{components.badge}` eyebrow link, lifting to blue-200 ({colors.accent-badge-hover}, #bfdbfe) on hover. A lighter step than the CTA so the badge reads as a label, not a second button.

### Surface
- **Stage** ({colors.stage}): The root page background — #f0f0ee, an off-white with a faint warm-grey cast, applied as `bg-[#f0f0ee]` on the root wrapper. It sits behind the fullscreen video and is visible only before the video paints or on a bare frame. Never `#ffffff`, never dark. There is no surface ladder above it.
- **Pill** ({colors.pill}): The navbar pill fill — #EDEDED, a light grey set inline (`backgroundColor: '#EDEDED'`) on both the circular logo pill and the rounded links pill. The only filled neutral surface that is reliably visible (it floats over the video).

### Text
- **Headline white** ({colors.headline}): The h1 and the CTA label at pure #ffffff (`text-white`), held legible over the video by the `{shadow.text-headline}` drop-shadow. The brightest ink on the page.
- **Subtext** ({colors.subtext}): The single paragraph at `text-white/85` — white at 85% opacity, a quiet step down from the headline, with its own `{shadow.text-subtext}` halo.
- **Nav ink** ({colors.nav-ink}): The navbar links at Tailwind gray-700 (#374151), lifting to gray-900 ({colors.nav-ink-hover}, #111827) on hover. The only dark text on the page — it lives on the light `{colors.pill}`, not over the video.
- **Logo fill** ({colors.logo-fill}): The fist mark at rgb(84,84,84), a mid-grey. Not a text color — it fills the `{components.logo}` SVG inside the circular pill.

### Semantic
None on the marketing surface. No success / error / warning colors are present on the single hero; semantic states would have to be introduced for later forms (see Known Gaps). There is no overlay tint over the video — legibility is carried entirely by the per-element text drop-shadows.

## Typography

### Font Family

- **System sans (default Tailwind stack)** — the only type voice on the page. **No web font is loaded:** no `@import`, no `<link>` in `index.html`, and `tailwind.config.js` ships `theme.extend = {}`, so the default `font-sans` resolves to `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, …`. The rendered face is whatever the visitor's operating system supplies — San Francisco on Apple, Segoe UI on Windows, Roboto on Android. Carries every element: nav, badge, headline, subtext, CTA.

There is no display / body split and no monospace — one system stack does the whole page. The visual hierarchy is built purely from size and weight (400/500/600), not from a second typeface.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.sans}` (h1) | 36 → 48 → 60px (`text-4xl`/`sm:text-5xl`/`lg:text-6xl`) | 600 | 1.08 (`leading-[1.08]`) | tracking-tight (-0.025em) | Headline — bright white over video |
| `{typography.sans}` (subtext) | 18 → 20px (`text-lg`/`sm:text-xl`) | 400 | 1.5 (default) | 0 | One-line paragraph, `text-white/85` |
| `{typography.sans}` (CTA) | 15 → 16px (`text-[15px]`/`sm:text-base`) | 600 | 1.5 (default) | 0 | CTA label, white |
| `{typography.sans}` (badge) | 14 → 15px (`text-[14px]`/`sm:text-[15px]`) | 600 | 1.5 (default) | 0 | Badge eyebrow link, blue-300 |
| `{typography.sans}` (nav) | 12 → 14px (`text-[12px]`/`sm:text-[14px]`) | 500 | 1.5 (default) | 0 | Nav links, gray-700 |

### Principles

- **No web font — the system stack is the type system.** Do not add a Google Fonts loader or a `fontFamily` extension; the default `font-sans` is the brand voice here.
- **Hierarchy from size + weight only.** With one stack, the headline earns its dominance through `text-6xl` at weight 600, not through a separate display face.
- **The headline is the only tracking-tight element** (`tracking-tight`, -0.025em). Everything else runs at default tracking.
- **Weight tops out at 600.** Headline, badge, and CTA sit at semibold (600); nav links at medium (500); the subtext at normal (400). There is no 700/bold on the page.
- **Type over video carries a drop-shadow.** Every foreground text element gets a `[text-shadow:…]` halo — the legibility system is part of the typography, not an afterthought.

### Note on Font Substitutes

MFC uses **no licensed or web typeface** — there is nothing to substitute. Reproduce it by leaving Tailwind's default `font-sans` untouched (`theme.extend = {}`, no font loader). If a brand wants a fixed face later, it should be added deliberately as a new decision; the system stack is the system of record and is intentionally device-native.

## Layout

### Spacing System

- **Base unit**: 4px (Tailwind's scale).
- **Tokens (front matter)**: `{spacing.xs}` 8px (`gap-2`) · `{spacing.md}` 20px (`mb-5`) · `{spacing.lg}` 28px (CTA `px-7`) · `{spacing.xl}` 32px (`mb-8`) · `{spacing.hero-rail}` 112px (`lg:px-28`).
- **Hero side rail**: scales `px-6 → sm:px-12 → md:px-20 → lg:px-28` (24 → 48 → 80 → 112px) — the hero block breathes wider as the viewport grows.
- **Hero vertical rhythm**: badge `mb-5` (20px) → headline `mb-5` (20px) → subtext `mb-8` (32px) → CTA. A tight, deliberate stack.
- **CTA padding**: `px-7 py-3.5` (28px × 14px), `gap-2` (8px) between label and arrow.
- **Badge padding**: none — it is an inline-flex link with `gap-2` (8px) to its arrow.
- **Navbar**: outer `pt-4 sm:pt-6 px-4 sm:px-8`, `gap-2 sm:gap-3` between the two pills; links pill `gap-4 sm:gap-10 px-4 sm:px-8 py-2.5 sm:py-3`; logo pill `w-10 h-10 sm:w-11 sm:h-11`.

### Grid & Container

- **Single-screen hero**: a `min-h-screen` flex column — navbar on top, hero `flex-1` filling the remaining height with content centered vertically (`items-center`). No scroll on the page.
- The hero copy column is **left-aligned** and capped at `max-w-2xl` (42rem / 672px), pinned to the left rail by the scaling `px-*` padding — never centered horizontally.
- The navbar is a centered row (`justify-center`) holding the two pills; it is not full-bleed and not sticky.
- The background video is absolutely positioned (`absolute inset-0 w-full h-full object-cover`) at the back of the stack; the foreground wrapper is lifted with `relative z-10`.

### Whitespace Philosophy

Whitespace is what keeps a video-backed page calm. The hero copy sits in the left third at most, with the wide right side left to the footage; the vertical stack is tight (20/20/32px) so the block reads as one confident unit rather than a scattered list. The off-white stage and the absence of any second section mean the eye rests on exactly one thing — the white headline — with the video moving behind it. Density here is a refusal: there is no feature grid, no logo wall, nothing to crowd the single message.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow, no border | The stage, the two navbar pills, all nav links |
| 1 (text halo) | `[text-shadow:…]` per element | Badge, headline, subtext — legibility over the video |
| 2 (CTA glow) | `{shadow.cta}` `shadow-lg shadow-blue-500/40` | The single `{components.cta}` only |
| 3 (video) | `object-cover` footage behind `z-10` foreground | The page's only background — the moving surface itself |

MFC's depth is carried by three quiet devices: (1) the per-element text drop-shadows that float the white type off the video, (2) the soft blue glow that makes the single button feel lit, and (3) the video layer itself sitting behind the `z-10` foreground. The brand resists box-shadows everywhere else — there is no card, no panel, no elevated surface. The pills are flat fills, not raised cards.

### Decorative Depth

- **The background video** is the decorative surface — fullscreen, `object-cover`, autoplaying and looping. There is no overlay tint over it; the page trusts the text shadows for contrast.
- **The CTA blue glow** (`shadow-blue-500/40`) is the single lit element — a soft halo that marks the one action.
- **No atmospheric gradients, no glass, no spotlight cards, no grain.** The off-white stage is flat; the only "atmosphere" is the moving footage.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.pill-links}` | 12px (`rounded-xl`) | The links pill in the navbar |
| `{rounded.pill-cta}` | 9999px (`rounded-full`) | The CTA button |
| `{rounded.pill-logo}` | 9999px (`rounded-full`) | The circular logo pill |

The page uses only two radius values: a soft 12px on the rounded links pill and a full pill on the circular logo holder and the CTA. There is no card radius because there are no cards. The fist logo's internal rects carry their own small radii (1.6–3.5px) as drawing geometry, not as design tokens.

### Photography & Illustration Geometry

- **The only imagery is the background video** — fullscreen, `object-cover`, no rounding (it is the edge-to-edge stage). It carries the entire visual atmosphere.
- **The logo is inline SVG**, not a raster — a front-facing fist built from six rounded rectangles (four arched knuckles, the fist body, a thumb across the front) in a `0 0 24 24` viewBox, rendered at 18×18 inside the pill, filled `{colors.logo-fill}` rgb(84,84,84).
- **The arrows are literal `→` glyphs** in plain `<span>`s, not icon components — on the badge and the CTA. No raster or icon-font asset.

## Components

### Buttons

> Measured from the live build: there is exactly one filled button on the page. The blue accent fills it and nothing else.

**`cta`** ({components.cta}) — The single primary CTA ("Play the free beta"). The only filled button on the page.
- Background `{colors.accent}` (blue-500), text white at weight 600, type 15px → 16px (`text-[15px] sm:text-base`), padding `px-7 py-3.5` (28px × 14px), rounded `{rounded.pill-cta}` (full pill), `{shadow.cta}` soft blue glow (`shadow-lg shadow-blue-500/40`). No border. Contains a trailing literal `→` span (`gap-2`, 8px). Hover fades to `{colors.accent-hover}` (blue-400) over `duration-200`; the arrow span slides right `group-hover:translate-x-0.5`.

**`badge`** ({components.badge}) — The glowing blue eyebrow link ("Now streaming the 2099 World Final"), above the headline.
- An `inline-flex` link, no fill, text `{colors.accent-badge}` (blue-300) at weight 600, 14px → 15px, with the `{shadow.text-badge}` drop-shadow for legibility. Hover lifts to `{colors.accent-badge-hover}` (blue-200) over `transition-colors`. Trailing literal `→` span slides right `group-hover:translate-x-0.5`. The lighter blue and absence of a fill keep it reading as a label, not a second button.

### Marks & Accents

**`logo`** ({components.logo}) — The fist mark. Inside the circular navbar pill.
- An inline SVG (18×18, viewBox `0 0 24 24`) filled `{colors.logo-fill}` rgb(84,84,84), built from six rounded rects: four gently arched knuckles, the fist body (`rx=3.5`), and a thumb across the front. A front-facing punch — the robot-boxing brand mark. Do not swap it for a wordmark or an icon.

### Navigation

**`nav-pill-logo`** ({components.nav-pill-logo}) — The circular logo pill, left of the links pill.
- A `rounded-full` pill, `w-10 h-10 sm:w-11 sm:h-11`, filled `{colors.pill}` (#EDEDED) inline, centering the `{components.logo}`. `shrink-0` so it never compresses.

**`nav-pill-links`** ({components.nav-pill-links}) — The rounded links pill, right of the logo pill.
- A `rounded-xl` ({rounded.pill-links}) pill, filled `{colors.pill}` (#EDEDED) inline, padded `px-4 sm:px-8 py-2.5 sm:py-3`, holding four links at `gap-4 sm:gap-10`.
- **Links** (verbatim, in order): `Story`, `Fighters`, `Arena`, `Support`. Each anchor: 12px → 14px (`text-[12px] sm:text-[14px]`), weight 500, `{colors.nav-ink}` gray-700 lifting to gray-900 on hover over `transition-colors duration-200`.

**`top-nav`** — The navbar row itself.
- A centered (`justify-center`) flex row, padded `pt-4 sm:pt-6 px-4 sm:px-8`, `gap-2 sm:gap-3` between the two pills. **Not sticky**, no background of its own — the two pills float over the video. It sits at the top of the `z-10` foreground column.

### Cards & Containers

None. The page has no card, panel, or bordered container — the two navbar pills are flat fills, and the hero copy sits directly on the video. Any later surface should be introduced deliberately rather than borrowing a card pattern the build does not have (see Known Gaps).

### Inputs & Forms

Not present on the single hero. The only interactive elements are anchor links (nav, badge, CTA), all `href="#"`. Input, focus, and validation styling would have to be introduced for later pages in the same language — flat fills, system sans, blue focus accent (see Known Gaps).

### Footer

Not present on the single-screen hero. The page is one viewport with no footer; a later footer would be specified in the same flat, off-white-and-blue language.

## Do's and Don'ts

### Do

- Keep `{colors.stage}` (#f0f0ee) as the root behind the fullscreen `object-cover` video — it is the pre-paint net, never `#ffffff`, never dark.
- Ration blue to exactly three roles: the `{components.cta}` fill (blue-500), the badge (blue-300), and the CTA glow — nothing else.
- Hold the headline and CTA label in pure white at weight 600, the subtext at `text-white/85`, each with its `[text-shadow:…]` legibility halo.
- Leave Tailwind's default `font-sans` untouched (`theme.extend = {}`, no font loader) — the system stack is the type system.
- Fill both navbar pills with `{colors.pill}` (#EDEDED) inline; keep the logo pill circular and the links pill `rounded-xl`.
- Render the arrows as literal `→` glyphs in `<span>`s, not icon components.
- Keep the hero left-aligned at `max-w-2xl`, vertically centered, one viewport, no scroll.

### Don't

- Don't add a second accent color or a dark hero — blue is the only chromatic, and the stage stays light.
- Don't load a web font or extend `fontFamily` — the build deliberately ships the default system sans.
- Don't change or round the literal colors: `#f0f0ee`, `#EDEDED`, `rgb(84,84,84)`, and `blue-500/400/300/200` are exact.
- Don't put an overlay tint over the video — legibility comes from the per-element text drop-shadows only.
- Don't add a card, border, panel, or any box-shadow other than the `{shadow.cta}` blue glow.
- Don't add an entrance animation, scroll-reveal, parallax, or counter — the page renders static and always visible.
- Don't reword the copy strings or replace the `→` arrows with icons.
- Don't add a second section, route, or backend — the entire page is one file (`src/App.tsx`).
- Don't import a lucide icon even though `lucide-react` is installed — it is unused on purpose.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Phone | < 640px | Hero rail `px-6` (24px); headline `text-4xl` (36px); subtext `text-lg`; badge `text-[14px]`; nav pad `pt-4 px-4`, gap `gap-2`, links pill `gap-4 px-4 py-2.5`, logo pill `w-10 h-10`, nav links `text-[12px]` |
| Small (`sm` ≥640px) | 640–767px | Hero rail `px-12` (48px); headline `text-5xl` (48px); subtext `text-xl`; badge `text-[15px]`; CTA `text-base`; nav pad `pt-6 px-8`, gap `gap-3`, links pill `gap-10 px-8 py-3`, logo pill `w-11 h-11`, nav links `text-[14px]` |
| Medium (`md` ≥768px) | 768–1023px | Hero rail `px-20` (80px); type holds at the `sm` sizes |
| Large (`lg` ≥1024px) | ≥1024px | Hero rail `px-28` (112px); headline `text-6xl` (60px) |

### Touch Targets

- The `{components.cta}` padding (`px-7 py-3.5`) clears the ≥44px minimum tap target comfortably.
- The circular logo pill (`w-10 h-10` → `w-11 h-11`, 40–44px) and the nav links inside the padded links pill all sit at or above a usable tap size.
- The badge link's `inline-flex` plus its arrow gives it a wider hit area than the text alone.

### Collapsing Strategy

- **The page never scrolls** — it is one `min-h-screen` viewport at every width; only the hero rail padding, the type sizes, and the nav spacing flex via the `sm`/`md`/`lg` prefixes.
- **Nav**: both pills stay on a single centered row at every width; only their padding, gap, and type size scale. There is no hamburger / sheet.
- **Hero**: the copy column holds `max-w-2xl` and left alignment throughout; the headline scales `text-4xl → sm:text-5xl → lg:text-6xl` while staying vertically centered.

### Image Behavior

- The background video fills the stage at all sizes via `object-cover` (`absolute inset-0 w-full h-full`); it crops rather than letterboxes, so the framing shifts with aspect ratio.
- It is `autoPlay muted loop playsInline` so it plays inline on mobile without controls and without sound.
- No `prefers-reduced-motion` guard is present in the build — the looping video plays regardless (see Known Gaps).

## Iteration Guide

1. New section or page? Start from `{colors.stage}` (or the video stage) + system-sans type + the single blue accent. The shell — light stage, white type, one blue — is the brand.
2. Keep the blue rule absolute — a new accent need is answered by `{colors.accent}` (or its blue-300 badge step) on a small element, or by nothing, never by a second color.
3. Reference everything by token name — `{colors.x}`, `{rounded.x}`, `{typography.sans}`, `{components.x}` — so a value change cascades.
4. Decide first which one device carries any new depth: the text shadows, the CTA glow, or the video. A new surface that "needs depth" gets neither a card border nor a box-shadow — rethink the hierarchy instead.
5. Leave the type system alone: default `font-sans`, weights 400/500/600, hierarchy from size only. Adding a brand face is a deliberate new decision, not an iteration.
6. Treat blue as scarce — the three placements (CTA fill, badge, CTA glow) are the budget. Earning a fourth requires a documented decision.
7. If content grows past one screen, the no-scroll, one-viewport rule is the first thing under pressure — adding a second section is a deliberate departure from the single-hero brief, not a default.

## Known Gaps

- The build is a **single hero in one file** — there is no second section, footer, route, or backend. Card, container, footer, and multi-section rhythm are all unspecified; any later surface must be designed deliberately in the same flat, light, one-blue language.
- **The system font means there is no brand typeface.** The rendered face changes per operating system (San Francisco / Segoe UI / Roboto). Cross-device type metrics, and any future brand face, are not specified by the build.
- Form / input and validation states (error, success, disabled, focus) are not present on the hero; the only interactive elements are `href="#"` anchors. Semantic colors would have to be introduced.
- **Only one chromatic accent exists.** There is no secondary or tertiary color, no semantic palette, and no dark counterpart; any of these would require its own governing decision, not a recolor.
- No `prefers-reduced-motion` handling is present — the background video loops unconditionally. A reduced-motion fallback (poster frame) is not specified by the build.
- The off-white stage `{colors.stage}` (#f0f0ee) is rarely seen in practice because the video covers it; its exact role on a slow connection or a bare video frame is the only moment it surfaces.
