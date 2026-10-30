---
version: "1"
name: "Design System Inspired by LosView"
description: "A full-viewport WebGL experience for a Los Angeles live-camera network on a pure-black (#000) canvas with a near-white (#f2f2f2) IBM Plex Mono UI. The signature is the curved-sphere gallery — the camera sits at the centre of a sphere whose inner surface is tiled with photo cards, and meridian columns converge toward the poles via a cos(phi) width falloff; drag or wheel rotates the view with a 0.075 lenis-style lerp, and clicking a card dollies the camera in while a feed page slides up. A radial vignette and an animated SVG grain sit over the whole frame; the single solid accent is a white pill (#fff on #000) for the CTA and active states only."
colors:
  bg: "#000"                    # the stage — page background AND scene.background; one seamless void
  fg: "#f2f2f2"                 # primary UI ink — active chrome, live clock row, hover
  fg-dim: "#9a9a9a"             # inactive / secondary ink — dim clock row, muted labels
  card-pill: "#262626"          # canvas-drawn tag-pill fill on the 3D card texture
  tag-pill: "#1e1e1e"           # DOM project-detail tag-pill fill
  list-hairline: "#1d1d1d"      # the one CSS divider — 1px bottom rule between list rows
  list-hover: "#141414"         # list-row hover fill
  project-surface: "#0a0a0a"    # the slide-up project feed sheet
  fallback-block: "#161616"     # solid block a card draws when its photo fails to load
  nav-glass: "rgba(40,40,40,0.55)"  # translucent fill behind nav + view-toggle clusters (with blur 14px)
  overlay-scrim: "rgba(0,0,0,0.92)" # list-overlay backdrop (with blur 8px)
  dot-active: "#fff"            # the lit clock dot / live indicator
  dot-dim: "#555"               # the inactive clock dot
  # incidental muted-grey family used inline, never tokenized into named roles:
  # #666 (list index) · #777 (li-year, sound bars rest) · #888 (project index/year)
  # #999 (p-client, gmt) · #b9b9b9 (project copy) · #c9c9c9 (list title) · #cfcfcf (vt svg, p-tag text)
  # #d6d6d6 (nav-pill rest) · #444 (next-project border) · #e8e8e8 (CTA hover)
  # canvas card ink (drawn, not CSS): #e9e9e9 (district) · #c4c4c4 (title) · #d6d6d6 (first tag) · #cfcfcf (pill tags) · #b9b9b9 (altitude)
typography:
  mono: { fontFamily: "\"IBM Plex Mono\", \"SF Mono\", ui-monospace, monospace", weights: "400 / 500 / 600", role: "all UI chrome, statement, clocks, list rows, AND the 3D card text drawn onto every canvas" }
  sans: { fontFamily: "\"Helvetica Neue\", Helvetica, Arial, sans-serif", weights: "500 / 700 (system)", role: "CTA pill, nav pills, view-toggle, big project title, project body copy — five named roles only" }
spacing:
  base: "4px"
  chrome-top: "22px 28px 0"     # top-bar padding
  chrome-project: "20px 28px"   # project-bar padding
  fluid-gap: "clamp() margins between top-bar groups (24vw / 9vw / 7vw)"
  project-max: "1280px"         # project body
  list-max: "1100px"            # list overlay
  copy-max: "980px"             # two-column project copy
rounded:
  pill: "999px"                 # CTA, nav pills, view-toggle clusters, DOM tags, glass clusters
  circle: "50%"                 # 40x40 view-toggle buttons, the 7px clock dots
  card-pill: "21px"             # roundRect tag pills drawn onto the canvas card texture
motion:
  lerp: "0.075"                 # lenis-style current → target rotation, every frame
  sway: "0.04"                  # idle cursor parallax ease
  clamp-x: "0.46"               # rad — vertical rotation soft-clamp
  drag-k: "0.0026"              # drag sensitivity
  hover: "1.055"                # hovered-card scale
  ease-out: "cubic-bezier(0.22, 1, 0.36, 1)"
  dur-fast: "0.25s"
  dur-med: "0.45s"
components:
  sphere-gallery: "Camera at sphere centre (radius 10, FOV 68); 16 meridian columns × 5 latitude rows = 80 inward-facing cards; cos(phi) width falloff converges meridians at the poles; drag/wheel rotate with 0.075 lerp + inertia; hover raycast scales 1.055×; click <7px dollies in"
  card-texture: "768×820 CanvasTexture — district + auto-shrink title, a 688×590 cover-cropped photo, tag pills + altitude; redrawn on photo load and on document.fonts.ready"
  vignette: "Fixed radial-gradient darkening the frame edges (z-index 2)"
  grain: "Animated SVG fractal-noise layer at 0.05 opacity, 4-step keyframe (z-index 3)"
  cta-pill: "The single white #fff-on-#000 Helvetica pill — Get Access; primary action + active states only"
  dual-clock: "Two live locale rows (LA active / Saigon dim) with status dots"
  glass-cluster: "blur(14px) {colors.nav-glass} pill clusters — bottom nav + view-toggle"
  project-detail: "Fixed feed sheet that slides up over the sphere (translateY 100% → 0%)"
---

# Design System Inspired by LosView

## Overview

LosView is a full-viewport WebGL experience — one screen, **no page scroll** — for a network of fixed live cameras across Los Angeles, under the line *"Every View of Los Angeles."* The canvas is the deepest possible dark: `{colors.bg}` is pure `#000`, set both as the page `background` and as `scene.background` in Three.js so the DOM and the 3D scene read as one seamless void. On top sits a near-white monospace UI — `{colors.fg}` (#f2f2f2, calm white, never pure) for active chrome, and one dimmed grey `{colors.fg-dim}` (#9a9a9a) for inactive text. There is no surface ladder, because there are almost no surfaces: a `{colors.project-surface}` (#0a0a0a) sheet and two translucent glass clusters are the only things that ever lift off the void.

The single chromatic move is the **absence of chroma**. The only solid accent is a **white pill** — `{colors.bg}` text on a `{colors.fg}`-white fill — used on the `{components.cta-pill}` (Get Access) and on active toggle states (active nav pill, active view-toggle button, the live clock dot) and nowhere else. No second hue, no gradient on the stage beyond the vignette, no neon, no light mode. The aesthetic is **black-mono control-room / live camera feed**: a `{components.vignette}` darkens the frame edges and an animated `{components.grain}` sits over everything, and the whole frame reads like a feed pulled off a wall of monitors.

The page rhythm is **the sphere itself**. The signature is the `{components.sphere-gallery}`: a perspective camera sits at the **centre** of a sphere of radius 10, and 80 photo cards tile its **inner** surface in 16 meridian columns × 5 latitude rows. Alternate columns are phi-staggered, and each card's width is multiplied by `cos(phi)` so the meridians converge toward the poles — that curved-grid convergence is the look you cannot get from a flat layout. Drag or wheel moves only a *target* rotation; the render loop lerps current → target at `{motion.lerp}` (0.075, lenis-style) with thrown inertia, and clicking a card dollies the camera in while a feed page slides up over the scene.

**The governing decision: most photo galleries lay images out on a flat scrolling grid — LosView refuses the grid entirely, mounting every viewpoint on the inner wall of a single immersive WebGL sphere with the camera at its heart, and refuses the page scroll, the second hue, the card border, and the drop shadow that a grid would carry.** The whole interface is one 3D scene plus a strict mono frame; everything you would normally call "a page" is chrome that floats over the canvas.

The stack is **pinned and vanilla**: hand-written HTML + CSS + JavaScript, **Three.js** (local ES module, resolved by an import map) for the sphere, the per-card canvas textures, and the raycast picking, and **GSAP** (local classic script) for every timed motion. One Google Font (IBM Plex Mono) loads; Helvetica Neue is the system fallback for five named roles. No React, no Tailwind, no bundler, no build step — and because the build is a single screen, all UI state (current viewpoint, page-open, list-open, view lock) lives in the Layout / chrome handlers, not in any framework store.

**Key Characteristics:**
- **Pure-black WebGL stage** — `{colors.bg}` (#000) is both the page background and `scene.background`; the only "lit" thing is the white pill.
- **The `{components.sphere-gallery}` IS the interface** — camera-in-sphere, 16 meridian columns × 5 latitude rows, cards facing the centre, `cos(phi)` convergence toward the poles, `{motion.lerp}` (0.075) lenis-style easing with thrown inertia.
- **Every card is a `{components.card-texture}`** — a 768×820 canvas drawing IBM Plex Mono text around a cover-cropped photo, redrawn on `document.fonts.ready`.
- **Two whole-frame overlays carry atmosphere** — a `{components.vignette}` (z-index 2) and an animated `{components.grain}` at 0.05 opacity (z-index 3); they are the live-feed DNA.
- **All chrome floats over the canvas** — `{components.dual-clock}`, sound toggle, statement, `{components.glass-cluster}` pills, and the `{components.cta-pill}`; `.ui-top` is `pointer-events: none` with its children `auto` so the canvas still receives drag/pick between them.
- **The white pill is the only solid accent** (`{colors.fg}` fill, `{colors.bg}` text) — CTA and active toggle states only.
- **Type is a binary split** — IBM Plex Mono everywhere including the 3D card text; Helvetica Neue only for the CTA, nav/toggle pills, the big project title, and project copy.
- **Vanilla, framework-free** — Three.js + GSAP loaded locally; no React, no Tailwind, no bundler; all UI state held in the chrome handlers.
- It does **not** scroll, fake depth with shadows or borders, introduce a second hue, ship a light mode, or use any icon library — every mark is hand-authored inline SVG and arrows are HTML entities.

## Colors

> Source pages: the single WebGL screen and its floating chrome (top bar, bottom nav, view toggle), the full-screen list overlay, and the slide-up project detail — plus the canvas-drawn card surface. This is the full palette; there is no second page in the build.

### Brand & Accent
- **White pill** ({colors.fg} fill, {colors.bg} text): The only solid accent in the system — a `{colors.fg}` (#f2f2f2 → #fff) fill with `{colors.bg}` text. Deployed **only** on the `{components.cta-pill}` (Get Access), the active nav pill, the active view-toggle button, and the lit clock dot (`{colors.dot-active}` #fff). Hover lift on the CTA brightens to `#e8e8e8`. There is no second chromatic color anywhere on the surface — the mono palette is the brand and the pill is the one thing that lights up.

### Surface
- **Background** ({colors.bg}): The stage — pure `#000`, set as the page `background` AND as `scene.background` so the canvas and the page are one seamless void. No gradient on the stage other than the vignette.
- **Project surface** ({colors.project-surface}): The slide-up project feed sheet — `#0a0a0a`, a hair off black so it reads as a distinct sheet sliding over the stage.
- **Card fallback block** ({colors.fallback-block}): `#161616` — the solid block a card draws when its photo fails to load, so the scene always renders.
- **Nav glass** ({colors.nav-glass}): `rgba(40,40,40,0.55)` translucent fill behind the bottom nav and view-toggle clusters, paired with `backdrop-filter: blur(14px)`.
- **Overlay scrim** ({colors.overlay-scrim}): `rgba(0,0,0,0.92)` backdrop behind the list overlay, paired with `blur(8px)`.

### Text
- **Foreground** ({colors.fg}): All primary UI type — active chrome, the live clock row, hover states. Near-white `#f2f2f2`, never pure white, to sit calm on black.
- **Foreground dim** ({colors.fg-dim}): Inactive / secondary type — the dim clock row, muted labels. The one quiet step below `{colors.fg}`.
- **Incidental greys** (inline, never tokenized): a ladder used directly in CSS by emphasis — `#666` (list index), `#777` (list year, sound bars rest), `#888` (project index/year), `#999` (project client eyebrow, GMT labels), `#b9b9b9` (project copy), `#c9c9c9` (list title), `#cfcfcf` (view-toggle SVG, DOM tag text), `#d6d6d6` (nav-pill rest), `#444` (next-project underline). Treat these as one "muted grey" family, lightest-to-darkest by emphasis — do not promote them into named roles.

### Semantic
- None on this surface. There is no success / error / warning color — the system is mono. The only state colors are the white pill (active) and `{colors.dot-dim}` (#555, the inactive clock dot). Validation and status colors do not exist in the build.

### Canvas card text (drawn, not CSS)
The `{components.card-texture}` draws its own near-grey ladder onto the 768×820 canvas: `#e9e9e9` (district), `#c4c4c4` (title), `#d6d6d6` (first tag) / `#cfcfcf` (pill tags), `#b9b9b9` (altitude), all over `{colors.card-pill}` (#262626) pills. These are exact and parallel the CSS greys — the 3D type stays strictly in the mono palette like everything else.

## Typography

### Font Family
- **IBM Plex Mono** — the primary voice; `{typography.mono}` = `"IBM Plex Mono", "SF Mono", ui-monospace, monospace`, loaded from Google Fonts at weights **400 / 500 / 600**. Carries **all** UI chrome, the statement, the clocks, the list rows, **and the 3D card text** drawn onto every canvas texture. The monospace grid IS the control-room feel.
- **Helvetica Neue** — the secondary face; `{typography.sans}` = `"Helvetica Neue", Helvetica, Arial, sans-serif`, a system stack with no web load. Used **only** for the CTA pill, the nav pills, the view-toggle, the big project title, and the project body copy — the few places a neutral grotesk reads better than mono at scale or in long copy.

The 3D card textures are drawn with the Canvas 2D API (`'600 27px "IBM Plex Mono"'`, `'400 21px..15px "IBM Plex Mono"'`, `'500 20–21px "IBM Plex Mono"'`). When the web font finishes loading, **every card texture is redrawn** via the `document.fonts.ready` hook so the canvas text re-renders in IBM Plex Mono instead of the fallback. That redraw is part of the type system, not an optimization — drop it and the 3D type lands in a generic monospace.

### Hierarchy

| Token | Family | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|---|
| `{typography.sans}` project-title | Helvetica | clamp(42px, 7vw, 110px) | 700 | 0.98 | -0.03em (uppercase) | The big title on the project detail page |
| `{typography.mono}` card-district | IBM Plex Mono | 27px (canvas) | 600 | — | 0 | District label, top-left of each 3D card |
| `{typography.mono}` card-title | IBM Plex Mono | 21px → 15px auto-shrink (canvas) | 400 | — | 0 | Viewpoint title, top-right of each card |
| `{typography.mono}` card-tag / alt | IBM Plex Mono | 20–21px (canvas) | 500 | — | 0 | Tag pills + altitude footer on the card |
| `{typography.sans}` project-copy | Helvetica | 16px | 400 | 1.7 | 0 | Two-column project body paragraphs |
| `{typography.sans}` nav-pill / cta | Helvetica | 15px | 500 | — | 0 | Bottom nav pills + the Get Access CTA |
| `{typography.mono}` project-client | IBM Plex Mono | 12px | 400 | 1.5 | 0.1em (uppercase) | District eyebrow above the project title |
| `{typography.mono}` list-row | IBM Plex Mono | 12px | 400 / 600 | — | 0.05em (uppercase) | List overlay rows |
| `{typography.mono}` chrome | IBM Plex Mono | 11px | 500 | 1.5 | 0.04–0.08em | Top-bar statement, clocks, sound, project bar |
| `{typography.mono}` tag-dom | IBM Plex Mono | 10px | 400 | — | 0.06em (uppercase) | Project-detail DOM tag pills |

### Principles
- **IBM Plex Mono is the default; Helvetica Neue is the exception.** Reach for the grotesk only for the five named roles (CTA, nav pills, view-toggle, project title, project copy). The split is binary — never blur it.
- **Chrome type is small and lightly tracked.** 11–12px at +0.04–0.10em uppercase reads as instrument labelling, not content; the monospace advance gives the readouts their tabular feel.
- **The project title is the one big type moment.** Helvetica 700, tight `-0.03em`, uppercase, on a 0.98 line-height — let it dominate the feed page; nothing else in the system runs above 27px.
- **Card titles auto-shrink to fit.** A measure loop drops the title from 21px to a 15px floor so it never overflows the canvas width — the shrink IS the layout mechanism.
- **No italics anywhere.** The mono + neutral-grotesk pairing carries the whole tone; a third face or an italic would break the readout voice.

### Note on Font Substitutes
**IBM Plex Mono is free** — open-licensed and served straight from Google Fonts at 400 / 500 / 600, so no substitution is needed; its fallback chain `"SF Mono", ui-monospace, monospace` is the safe degrade. **Helvetica Neue is a system face, not a web font** — the stack falls back through Helvetica → Arial → sans-serif and needs no load. If a closer cross-platform match for the grotesk is wanted on non-Apple systems, **Inter** at slightly negative tracking is the nearest free substitute, but the system stack is the system of record. Never introduce a display serif — it would break the control-room voice.

## Layout

### Spacing System
- **Base unit**: `{spacing.base}` (4px). Chrome padding is fixed: `{spacing.chrome-top}` (`22px 28px 0`) on the top bar, `{spacing.chrome-project}` (`20px 28px`) on the project bar.
- **Fluid `clamp()` margins** (`{spacing.fluid-gap}`) separate the top-bar groups — sound at `margin-left: clamp(60px, 24vw, 420px)`, statement at `clamp(40px, 9vw, 180px)`, locale at `clamp(40px, 7vw, 140px)` — so the bar reflows across widths without breaking; the CTA pushes to the right with `margin-left: auto`.
- **Content maxima**: project body caps at `{spacing.project-max}` (1280px), the list overlay at `{spacing.list-max}` (1100px), the two-column project copy at `{spacing.copy-max}` (980px), all centred.
- Pill paddings: CTA `18px 26px`, nav pills `12px 24px`, DOM tags `7px 14px`, list rows `18px 16px`.

### Grid & Container
- **The page is exactly one viewport** — `html, body { height: 100%; overflow: hidden }`. Nothing scrolls except the list overlay and the open project page.
- `#webgl` is the Three.js mount, `position: fixed; inset: 0`, filling the window and resizing with it (`renderer.setSize` + `camera.aspect` on `resize`, `setPixelRatio(min(dpr, 2))`). It owns the `grab` / `grabbing` / `pointer` cursor states.
- **Z-order is the layout** — there is no document flow to speak of: canvas (0) → `{components.vignette}` (z-index 2) → `{components.grain}` (z-index 3) → list overlay (z-index 8) → all chrome (z-index 10) → `{components.project-detail}` (z-index 20).
- The top bar is a `display: flex; align-items: flex-start` row; `.ui-top` is `pointer-events: none` with `.ui-top > * { pointer-events: auto }` so the canvas still receives drag/pick *between* the chrome elements.
- The project body uses a 2-column copy grid (`1fr 1fr`, 40px gap); the list overlay uses a 4-column row grid (`60px 220px 1fr auto`, 24px gap).

### Whitespace Philosophy
Whitespace here is the dark void of the stage. The sphere occupies the optical centre; the chrome hugs the four edges and the vertical centre line, leaving the middle clear for the 3D scene to rotate and breathe. The vignette deliberately darkens the rim so the chrome never competes with cards near the edge. The dark IS the whitespace — don't crowd the frame; a second floating panel or a denser chrome row would turn the instrument into a dashboard. Negative space is what lets the sphere read as the subject.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow, no border | All chrome type, the project sheet body, the stage |
| Hairline | 1px `{colors.list-hairline}` (#1d1d1d) | The only CSS divider — list-row bottom rules |
| Glass | `{colors.nav-glass}` + `backdrop-filter: blur(14px)` | Bottom nav + view-toggle clusters |
| Overlay scrim | `{colors.overlay-scrim}` + `blur(8px)` | The list-overlay backdrop |
| Vignette | `{components.vignette}` radial-gradient (z-index 2) | Edge darkening over the whole frame |
| Grain | `{components.grain}` SVG noise at 0.05 (z-index 3) | Live-feed texture over the whole frame |
| Scene depth | Real WebGL perspective + camera dolly | The sphere itself — true 3D depth, not CSS |

### Decorative Depth
Depth is never faked. It is either **real** — the Three.js perspective camera at FOV 68 inside the sphere, the `cos(phi)` width convergence toward the poles, the dolly-in on open — or it is **atmospheric**, carried entirely by the `{components.vignette}` and `{components.grain}` over the whole frame. **Drop shadows are banned everywhere.** The only surfaces that "raise" are the two glass pill clusters (translucent + blur) and the off-black project sheet; a `box-shadow` under any chrome element would immediately read as generic UI and break the camera-feed illusion. Card "depth" on the sphere comes from geometry (`cos(phi)`), never from a shadow or border.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.card-pill}` | 21px | The rounded `#262626` tag pills **drawn onto the canvas** card texture (`roundRect`) |
| `{rounded.circle}` | 50% | The two round 40×40 view-toggle buttons, the 7px live clock dots |
| `{rounded.pill}` | 999px | The CTA pill, nav pills, view-toggle clusters, DOM project tag pills, glass clusters |

There is no card radius on the 3D meshes — they are flat `PlaneGeometry` quads tiling the sphere, with no rounding; rounding lives only on the pills and the chrome clusters. The grid/list toggle SVGs use small `rx="1"` rounded rects internally.

### Photography & Illustration Geometry
- Gallery content is **20 photographs**, one per viewpoint, each a Los-Angeles scene matching its district (Downtown skyline, Venice boardwalk, the Hollywood sign, a pier, harbor cranes, a runway). They are LosView's own images — no third-party photo service, no photographer credits embedded.
- On the 3D card: each photo is **cover-cropped** into a `688×590` window (`IMG_RECT { x:40, y:104, w:688, h:590 }`) inside the `768×820` canvas, centred. Aspect is flexible — any landscape source fits; the cover-crop centres it.
- On the project page: the photo fills a `62vh` hero with `object-fit: cover`.
- **20 textures are shared across 80 meshes** (`idx` wraps with modulo) — the same viewpoint repeats around the sphere; that repetition is intentional and reads as a dense field of feeds.
- Failure handling: a `pN` that fails to load draws a solid `{colors.fallback-block}` (#161616) block so the scene still renders.
- Every other mark is hand-authored inline SVG: the logo (a 44×44 white circle + black "L" path), the grid toggle (four 6×6 `rx="1"` rects), the list toggle (three 14×2 `rx="1"` bars). No icon library; arrows are HTML entities (`&larr;` / `&rarr;`).

## Components

### The Signature — Spherical camera gallery
**`sphere-gallery`** (`{components.sphere-gallery}`) — the centrepiece and the whole interface.
- The perspective camera (FOV **68**, `rotation.order = "YXZ"`) sits at the **centre** of a sphere of radius **10**; **80 cards** tile the **inner** surface — **16 meridian columns × 5 latitude rows** (`ROWS_PHI = [-0.82, -0.41, 0, 0.41, 0.82]` rad). Alternate columns are **phi-staggered by 0.205** so rows interlock; each card's width is multiplied by `cos(phi)` (floored at **0.55**) so meridians **converge toward the poles** — that curved-grid convergence is the signature look. Every plane `lookAt(0,0,0)` so it faces the camera.
- **Drag or wheel** only moves a *target* rotation; the render loop lerps current → target at `{motion.lerp}` (0.075, lenis-style) every frame. Horizontal rotation is infinite; vertical is soft-clamped at `{motion.clamp-x}` (0.46 rad). Release velocity is thrown ahead onto the target for **inertia** (`DRAG_K` 0.0026).
- A **hover raycast** scales the hovered card to `{motion.hover}` (1.055×) over 0.45s `power3.out`; an idle **cursor sway** (eased at `{motion.sway}` = 0.04) adds subtle parallax. A click that moved **< 7px** opens that card's project page. This is the page's one interaction — never add scroll, a second moving system, or competing animation.

### Cards & Containers
**`card-texture`** (`{components.card-texture}`) — each card is a `768×820` `CanvasTexture`, not an image element.
- District top-left (`'600 27px "IBM Plex Mono"'`, `#e9e9e9`), an **auto-shrinking** title top-right (21px → 15px floor, `#c4c4c4`), the cover-cropped photo in `IMG_RECT`, then a footer — first tag plain (`#d6d6d6`), the rest as rounded `{colors.card-pill}` pills (`{rounded.card-pill}` 21px, `#cfcfcf` text), the altitude right-aligned (`#b9b9b9`). Anisotropy 8, sRGB color space. Redraws once on photo load and again on `document.fonts.ready`.

**`project-detail`** (`{components.project-detail}`) — the feed page that slides up over the sphere.
- `position: fixed; inset: 0; z-index: 20; background: {colors.project-surface}; transform: translateY(100%); visibility: hidden`. A sticky `.project-bar` (back button + `01 / 20` index, on a top-fading gradient), a `62vh` cover hero, then a 1280px body — district eyebrow (`{colors.fg-dim}`-ish #999), the big Helvetica title, a tag/altitude meta row, two-column Helvetica copy (verbatim — see prompt), and a `NEXT VIEWPOINT →` link. Opening runs a GSAP timeline (aim camera → dolly in → page slides up, hero `1.3→1`, text stagger); `Esc` or back reverses it, landing the gallery at the exact angle you left.

### Buttons & Pills
**`cta-pill`** (`{components.cta-pill}`) — the only solid-accent control.
- `{colors.fg}` white fill, `{colors.bg}` text, Helvetica 15px / 500, padding `18px 26px`, `{rounded.pill}`. Label **Get Access** (verbatim). Hover `transform: scale(1.05); background: #e8e8e8`. No shadow.

**`nav-pill`** — three pills in the centred bottom glass cluster.
- Helvetica 15px, rest `#d6d6d6`, hover `#fff`; active = `#fff` fill / `#000` text. **Views** (active), **Districts**, **About** — static visual toggle in the build.

**`view-toggle-btn`** — two round 40×40 buttons in the bottom-left glass cluster.
- `{rounded.circle}` (50%), SVG fill `#cfcfcf`, hover `#fff`; active = `#fff` fill, SVG `#000`. `#btnGrid` (2×2 grid SVG, active by default) and `#btnList` (3-bar SVG, opens the list overlay).

**`text-control`** — the back / next links on the project page, not pills.
- `← BACK TO VIEWS` (mono 11px / 600, hover opacity 0.7) and `NEXT VIEWPOINT →` (mono 13px / 600, `#444` bottom border that goes `#fff` on hover). Arrows are HTML entities.

### Inputs & Forms
None on this surface. The only interactive inputs are pointer drag/pick on the canvas and the toggles above — there is no text field, search, or form anywhere in the build, and no focus-ring treatment to extract.

### Navigation
**`glass-cluster`** (`{components.glass-cluster}`) — the two floating navigation surfaces.
- Bottom nav: centred at `bottom: 22px`, `{colors.nav-glass}` + `blur(14px)`, `{rounded.pill}`, `padding: 5px` around the three `nav-pill`s. View toggle: bottom-left, same glass, holding the two `view-toggle-btn`s. Both float over the canvas as the only persistent nav.

### Chrome — clocks, sound, statement, logo
**`dual-clock`** (`{components.dual-clock}`) — two locale rows: active `LOS ANGELES, US` (`{colors.dot-active}` #fff dot, `id="timeLA"`, GMT-7) over dim `SAIGON, VN` (`{colors.dot-dim}` #555 dot, `id="timeSGN"`, GMT+7). Both times are **live**, formatted via `Intl.DateTimeFormat("en-GB", { hour12:false })` for `America/Los_Angeles` and `Asia/Ho_Chi_Minh`, refreshed every 10s.
**`sound-toggle`** — eight 2px `<i>` equalizer bars (rest `#777`) + a `SOUND [OFF]` label. Click toggles `.is-on` — bars go `#fff` and animate via the `eq` keyframe (staggered on odd / every-3rd bar), the label swaps `ON`/`OFF`. Visual only in the build.
**`statement`** — three uppercase mono lines (11px / 500), verbatim: `LOSVIEW PUTS THE WHOLE OF / LOS ANGELES INSIDE ONE SPHERE — / EVERY DISTRICT, EVERY HOUR.`
**`logo`** — a 44×44 inline SVG: a white `#fff` circle (r 20) with a black `#000` "L" path, plus a tiny `®` (`.logo-r`, 8px).

### List View
**`list-overlay`** — a full-screen overlay (z-index 8, `{colors.overlay-scrim}` + `blur(8px)`, `display: none` until `.is-open`). `#listInner` (max `{spacing.list-max}` 1100px) is built at runtime: for each of the 20 records a `.list-row` button — a 4-col grid `60px 220px 1fr auto` — index `01..20` (`#666`), district (600), title (`#c9c9c9`), altitude (`#777`). Hover: `{colors.list-hover}` fill + `padding-left: 26px`; rows separated by a `{colors.list-hairline}` hairline. Clicking a row closes the list and opens that card's project. Rows stagger in on open (GSAP, `stagger: 0.025`).

### Footer
None. The page is one viewport with no scroll, so there is no footer; the persistent navigation lives in the floating bottom `{components.glass-cluster}` instead.

## Do's and Don'ts

### Do
- Keep the stage `{colors.bg}` pure black — page background AND `scene.background` — so canvas and page are one void.
- Let the `{components.sphere-gallery}` be the entire interface; tune feel via the constants, never replace it with a flat grid.
- Hold the `{motion.lerp}` (0.075) lenis-style easing on every rotation — input moves a *target*, the loop lerps to it.
- Ration the white pill (`{colors.fg}` fill, `{colors.bg}` text) to the `{components.cta-pill}` and active toggle states only.
- Keep IBM Plex Mono as the voice including the 3D card text; reach for Helvetica Neue only for the five named roles.
- Always redraw card textures on `document.fonts.ready` so the canvas type lands in IBM Plex Mono.
- Keep the `{components.vignette}` and `{components.grain}` over the whole frame — they are the live-feed DNA.

### Don't
- Don't lay the gallery out as a flat scrolling grid — the sphere with `cos(phi)` convergence is the governing decision; a grid is the thing this system refuses.
- Don't add a second hue, a gradient on the stage beyond the vignette, neon, or a light mode — the mono is the brand.
- Don't make the page scroll — it is one viewport; only the list overlay and the open project page scroll.
- Don't add card borders, elevation, or any `box-shadow` — depth is real (3D) or atmospheric (vignette + grain) only.
- Don't add a second moving system, scroll animation, counters, or a typewriter — the sphere + grain + idle sway are the only motion.
- Don't change the sphere constants (`RADIUS 10`, `COLS 16`, `ROWS_PHI`, phi-stagger 0.205, `CARD_W 3.42`, `cos(phi)` floor 0.55, FOV 68) or the motion constants (`LERP 0.075`, `CLAMP_X 0.46`, `DRAG_K 0.0026`, 7px click threshold, 1.055× hover).
- Don't swap the stack — vanilla HTML/CSS/JS + local Three.js + local GSAP; no framework, no Tailwind, no bundler, no CDN scripts; keep UI state in the chrome handlers, not a store.
- Don't drop the `document.fonts.ready` redraw — the 3D card text falls back to a generic monospace without it.
- Don't import an icon library or embed photographer credits — every mark is hand-authored inline SVG, arrows are HTML entities, and the photos are LosView's own.

## Responsive Behavior

> The page is one viewport at every width; the WebGL canvas fills the window and resizes on `resize` (`setPixelRatio(min(dpr, 2))`). Chrome reflows via `clamp()` margins, and two media queries shed elements at narrow widths.

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Desktop | >1100px | Full top bar — logo, sound, statement, dual clock, CTA all visible; fluid `clamp()` margins at their mid-to-max range |
| Tablet / small desktop | ≤1100px | Hide the `.statement`; push `.locale` to the right (`margin-left: auto; margin-right: 24px`) |
| Phone | ≤760px | Hide `.sound` and `.locale`; project `.p-copy` collapses to one column; list rows drop the title column (`grid-template-columns: 40px 1fr auto`) |

### Touch Targets
- The canvas handles drag/click identically on touch — `pointer*` events cover mouse and touch, with `setPointerCapture` during a drag.
- The CTA pill (`18px 26px`), nav pills (`12px 24px`), and 40×40 toggle buttons all clear a comfortable touch target.
- No explicit 44×44 minimum is coded; the pill paddings happen to clear it (estimated) — verify if you add denser controls.

### Collapsing Strategy
- Top bar sheds inner groups outward-in: statement first (≤1100px), then sound + locale (≤760px) — the logo and CTA always stay.
- The dual clock relocates to the right edge at the 1100px breakpoint before disappearing at 760px.
- Project copy: two columns → one at 760px. List rows: 4 columns → 3 (title hidden) at 760px.
- The sphere itself never collapses — it just re-fits the new aspect ratio on resize; FOV and constants hold.

### Image Behavior
- The 20 photos cover-crop into the card canvas and `object-fit: cover` the project hero — both crop, neither letterboxes, so any landscape source fits.
- A failed photo falls back to a `{colors.fallback-block}` block on the card; the project hero would simply show its empty `src`.
- No `srcset` / `loading="lazy"` is wired (Three.js loads each `pN` once via `new Image()`); if you add a districts grid of DOM `<img>`, add lazy-loading and explicit aspect-ratio there.

## Iteration Guide

1. New screen (a real feed page, a districts index, an about screen)? Start from `{colors.bg}` black + IBM Plex Mono chrome + the `{components.vignette}` / `{components.grain}` overlays. The dark-mono frame is the brand; a new screen floats over (or replaces) the canvas the same way `{components.project-detail}` does.
2. Keep the white-pill rule absolute — a new "primary" need is answered by the white pill or by nothing, never by a new color.
3. Reference everything by token name — `{colors.X}`, `{rounded.X}`, `{motion.X}`, `{components.X}` — so a value change cascades. The motion constants in particular are the feel; change them only with intent.
4. Type split is binary: IBM Plex Mono for everything, Helvetica Neue only for the CTA / nav-toggle / project title / project copy. A new control inherits mono unless it is one of those five roles.
5. New 3D content (more viewpoints, a different tiling)? Draw it as a `{components.card-texture}`-style canvas in the same grey ladder, keep the `cos(phi)` convergence, and keep the `document.fonts.ready` redraw.
6. A surface that "needs depth" gets glass (blur) or the off-black sheet treatment, never a `box-shadow` or a border.
7. Reduced-motion is a first-class state, not an afterthought — any new motion must collapse cleanly under `prefers-reduced-motion` / `?noanim` (instant lerp, zero-duration GSAP, no grain).

## Known Gaps

- **Only one screen exists in the build.** The nav pills (`Districts`, `About`) and a real feed page are not designed — the project detail is explicitly a stand-in ("This template stands in for the full feed page — schedule, weather overlay and history scrubbing would live here"). Those downstream pages are inferred, not extracted; design them in the same dark-mono language.
- The **sound toggle and nav pills are visual only** — no audio plays and no routing is wired. A real sound feature or section navigation needs its own behavior spec.
- There is **no input / form component anywhere** (search, filter, validation) — no field exists to extract, and there is no focus-ring or error state in the system. Design one in mono if a future screen needs it.
- A **light counterpart is intentionally absent** and would contradict the live-camera-feed concept; if ever needed it requires its own governing decision, not a recolor of black → white.
- The 20 viewpoint records (district / title / tags / `ALT` altitude) and the two project paragraphs are **verbatim content**; a larger camera network needs more records drawn in the same district / title / tag / `ALT` format, and the photos resolve from the project's own CDN (or the local `assets/img/pN.jpg`) — never a third-party photo service.
