---
version: "1"
name: "Design System Inspired by VR World"
description: "VR World's canvas is Canvas #1c1c1c — a soft near-black, never #000000 — with deeper sections dropping to Onyx #101010 as the body background cross-fades on scroll. There is no chromatic accent: the entire foreground (text, borders, icons, marks) is Bone #fffdf9, a warm off-white, and every hue is refused. The signature surface is a 480vh sticky 'portal' hero where curtains, a foreground model and a frame dissolve over a looping video; the page rhythm runs Nav → portal hero → protocol app-shell → 400vh horizontal six-world gallery → architecture panel → marquee → footer, all under a fixed WebGL film-grain canvas and an SVG noise overlay."
colors:
  canvas: "#1c1c1c"          # page/base background, hero + architecture sections, scrollbar track
  onyx: "#101010"            # deeper sections (protocol, gallery, marquee, footer), recesses, dark text on Bone chips
  recess: "#151515"          # image-placeholder background behind gallery frames 2-5
  bone: "#fffdf9"            # ALL foreground — text, borders, icons, marks; warm off-white, never #ffffff
  thumb: "#555555"           # scrollbar thumb only
typography:
  display: { fontFamily: "'Neue Montreal', 'Inter', sans-serif", weights: "400-900", role: "oversized headlines on line-height 0.82; italic on emphasis lines; font-black=900 for marks/stats" }
  body:    { fontFamily: "'Neue Montreal', 'Inter', sans-serif", weights: "300-500", role: "standfirst, nav, eyebrows, CTA, captions — font-light 300 for paragraphs" }
spacing:
  base: "4px"
  xs: "8px"                  # gap-2 dot/label rows
  sm: "16px"                 # gap-4 stats-badge cluster, gap-y in lists
  md: "24px"                 # px-6 container floor, h-20 nav inset, py-3/4 chips
  lg: "40px"                 # px-10 container ceiling, gap-10 nav links, py-10 marquee
  xl: "96px"                 # py-24 section padding floor
  section: "128px"           # py-32 section padding ceiling (md:py-32)
rounded:
  sm: "2px"                  # rounded-sm gallery frame inner clip wrapper
  card: "12px"               # rounded-xl proto-items, stat tiles
  lg: "16px"                 # rounded-2xl stats badge, architecture image frame
  xl: "24px"                 # rounded-3xl protocol app shell + corner accents
  pill: "9999px"            # rounded-full CTAs, cursor, toggle, dots, nav circle
components:
  cursor: "Custom dot (7px Bone) + ring (38px Bone, 1px border) — mix-blend-difference, ring lerps 0.18/frame, grows to 64px on [data-cursor] hover; hidden <768px"
  clip-poly: "Three angled clip-path frames (clip-poly-1/2/3) on gallery + architecture imagery — never border-radius"
  cta-line: "gs-te-cta — pill outline button, Bone/40 border, uppercase wide-tracked label + arrow; GSAP white glow + y:-2 on hover"
  cta-solid: "The single filled button — bg Bone, Onyx text, rounded-full px-9 py-6, footer 'Brief the studio' only"
  reveal-line: "Headline lines start translateY(110%) inside an overflow-hidden mask, slide to 0 on load (power4.out, stagger 0.12)"
  noise-overlay: "Fixed full-screen SVG feTurbulence rect, opacity 0.045, mix-blend-overlay, z-60"
  grain-bg: "Fixed full-viewport WebGL canvas (z-0) — two near-black tones + animated film grain shader"
  marquee: "26s linear infinite translateX(-50%) loop of italic display phrases split by font-black ✦"
---

# Design System Inspired by VR World

## Overview

VR World's canvas is `{colors.canvas}` (#1c1c1c) — a soft near-black that reads as a dark room rather than a void; it is never `#000000`. Deeper bands of the page drop to `{colors.onyx}` (#101010), and the `<body>` background itself cross-fades between the two as Protocol and Architecture scroll into view, so the page breathes darker and lighter without ever leaving the near-black register. A third recess, `{colors.recess}` (#151515), sits only behind gallery frames as an image placeholder. Onto this dark field sits a single foreground value: `{colors.bone}` (#fffdf9), a warm off-white used for every word, border, icon, and mark. The lone non-foreground color is `{colors.thumb}` (#555555), reserved for the scrollbar thumb.

There is **no chromatic accent — none.** The build refuses every hue. Tellingly, the inline `tailwind.config` keeps two legacy aliases, `flare` and `cyan`, but maps both to `#fffdf9`, so any `text-cyan`, `border-cyan`, or `to-flare` class in the markup renders as Bone white. The system is engineered so that even a "colored" utility resolves to monochrome. **Most VR and gaming sites scream with neon, RGB lighting, and saturated 3D — VR World refuses every hue, holding a strict black-and-white cinematic editorial system where oversized type, the portal-scroll dissolve, and film grain are the only spectacle.**

Display type is set in **Inter** at heavy weights (the `font-black` utility resolves to Inter 900) on a tight `0.82` line-height, scaling with viewport units (`text-[12vw] md:text-[8.5vw]`) across four stacked hero lines; emphasis lines switch to *italic*. The body voice is the same family at `font-light` weight 300 for standfirsts and captions, weight 500 for nav and eyebrows. A first-choice family, **Neue Montreal**, is named ahead of Inter in every font stack but is **never loaded** — it is a local-only preference; everyone without it installed sees Inter, which is the only webfont the page requests.

The page rhythm is a cinematic scroll sequence: a fixed WebGL grain canvas and an SVG noise overlay sit behind and over everything, a custom dot-and-ring cursor (mix-blend-difference) replaces the system pointer, and the protagonist is the **480vh sticky portal hero** — a looping video behind a portal frame, a foreground model, and two corner curtains, all of which dissolve, blur, and scale away as the timeline scrubs. Below it: a Protocol app-shell, a 400vh horizontal gallery dragging six worlds past, an interactive Architecture panel, an italic marquee, and the footer CTA.

**Key Characteristics:**
- **Soft near-black canvas** — `{colors.canvas}` (#1c1c1c), dropping to `{colors.onyx}` (#101010) on deeper sections; the body bg cross-fades between the two on scroll. Never `#000000`.
- **No chromatic accent at all** — `{colors.bone}` (#fffdf9) is the only foreground value; the `flare`/`cyan` config aliases are deliberately mapped to Bone so even "colored" classes render white.
- **Inter only** — `font-black` resolves to native weight 900 (heavy display); body runs `font-light` 300. **Neue Montreal** is named first in every stack but never loaded (local-only fallback).
- **Oversized display headlines** at `0.82` line-height, viewport-unit sizing (`12vw / md:8.5vw`), italic on emphasis lines — the type is the spectacle.
- **480vh sticky portal hero** — curtains slide + blur, portal scales to 5× and fades, model scales + drops, video scales 1.25×, headline rises and clears, all scrubbed at `scrub: 1.2`.
- **400vh horizontal gallery** — six grayscale frames in `clip-poly-1/2/3` angled masks, dragged horizontally at `scrub: 1`, decoloring to full grayscale-0 on hover.
- **Custom dot+ring cursor** (mix-blend-difference, ring lerp 0.18) + fixed WebGL film-grain canvas + SVG noise overlay — the texture systems that make the page feel cinematic.
- **Angled `clip-poly` framing**, not rounded corners, on every gallery and architecture image — a signature geometry.
- No hue anywhere, no second font, no pure white, no pure black, no rounded image corners where a `clip-poly` belongs.

## Colors

> Source pages: the single shipped `index.html` — Nav, the 480vh portal hero, the Protocol app-shell, the 400vh six-world gallery, the Architecture panel, the marquee, and the footer. All values are read from the inline `tailwind.config`, the `<style>` block, and Tailwind arbitrary values in the markup.

### Brand & Accent
- **Bone** ({colors.bone}): The sole foreground value (#fffdf9) — every headline, paragraph, nav link, icon, border, mark, the custom cursor, the marquee stars, and the single filled CTA. A warm off-white, deliberately not `#ffffff`. This is the closest thing to an "accent," but it is the foreground for the entire page, not a rationed highlight.
- **No chromatic accent.** There is no blue, cyan, orange, green, or purple anywhere. The `tailwind.config` aliases `flare: '#fffdf9'` and `cyan: '#fffdf9'` are intentional decoys — markup like `text-cyan`, `border-cyan`, `hover:bg-cyan`, and `from-cyan to-flare` all resolve to Bone, keeping the system monochrome even where the class names suggest color.

### Surface
- **Canvas** ({colors.canvas}): Default page background (#1c1c1c) — the `<body>` base, the hero section, and the Architecture section. A soft near-black; the room the cinema plays in.
- **Onyx** ({colors.onyx}): The deeper surface (#101010) — Protocol, gallery, marquee, and footer backgrounds; the architecture image frame; the gradient veil's bottom stop; and the dark text/dot on Bone chips (e.g. the stats badge and its ping dot). The body's `backgroundColor` animates to Onyx as Protocol enters and back to Canvas as Architecture enters, over `0.6s`.
- **Recess** ({colors.recess}): A placeholder dark (#151515) — set only as `bg-[#151515]` behind gallery frames 2–5 so the angled `clip-poly` masks read before the image paints.

### Text
- **Bone** ({colors.bone}): All type (#fffdf9). Full-strength for headlines and the active states; opacity ramps carry hierarchy — `/70` for secondary labels, `/60` for standfirst paragraphs, `/55` for inactive list rows, `/50` and `/40` for captions and footer meta, `/10` for hairlines. There is no second text color; muting is done entirely with Bone opacity.
- **Onyx as text** ({colors.onyx}): Used inversely on the one light chip — the hero stats badge sits on `bg-[#fffdf9]/40` with `text-[#101010]` and Onyx ping dots, the only place dark type appears on a light field. Also the `selection:text-[#101010]` on a Bone selection background.

### Hairline
- **Bone at low opacity** — every divider, border, and rule is `border-[#fffdf9]/10` (occasionally `/20`, `/30`, `/40` for stronger outlines like the CTA and nav circle). There is no separate hairline color; structure is drawn with translucent Bone over the dark field.

### Semantic
None on the marketing surface. No success / error / warning colors exist — the page is pure grayscale + Bone. The decorative "live" cues (the `animate-ping` stats dot, the `animate-pulse` live-feed dot) are Onyx and Bone, not semantic greens or reds. The only "overlay" treatments are the gradient veils (`from-black/30 … to-[#101010]/70` over the hero video; `from-[#101010]/80` up the architecture image) and the `::selection` rule (Bone background, Onyx text). Semantic states would have to be introduced for any later form (see Known Gaps).

## Typography

### Font Family

- **Inter** — the only loaded typeface (Google Fonts, weights 300–900, `display=swap`). Carries every word on the page: the oversized display headlines (heavy weights, `0.82` line-height, italic on emphasis lines), the `font-light` 300 standfirsts and captions, the `font-medium` 500 nav and eyebrows, and the `font-black` 900 marks and stat figures.
- **Neue Montreal** — named **first** in every font stack (`serif`, `sans`, `inter` aliases all resolve to `"'Neue Montreal', 'Inter', sans-serif"`, and `body { font-family: 'Neue Montreal', 'Inter', sans-serif }`) but **never loaded** — no `@font-face`, no CDN link. It is a local-only first choice: a viewer who happens to have Neue Montreal installed sees it; everyone else falls back to Inter. Treat Inter as the system of record.
- There is deliberately **no `black` family alias** in the config, which keeps the `font-black` utility resolving to Tailwind's native font-weight 900 (heavy Inter) rather than a family name. Keep it that way — the heavy display weight depends on it.

The page treats one family as two voices through weight and style: heavy/black Inter for the cinematic display, light Inter for the quiet narration, italic for the expressive turn.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display}` (hero) | clamp via `text-[12vw] md:text-[8.5vw]` | 400 (italic lines) | 0.82 | -0.02em | Four-line hero headline "Virtual / Worlds / Game / Play" |
| `{typography.display}` (h2 marquee-scale) | `text-[7vw] md:text-[5vw]` | 400 italic / 900 stars | ~1.0 | 0 | Marquee phrases |
| `{typography.display}` (h2 footer) | `text-6xl md:text-8xl` (60→96px) | 400 | 0.85 | 0 | Footer "Let's build your world." |
| `{typography.display}` (h2 section) | `text-5xl md:text-7xl` (48→72px) | 400 | 0.90 | 0 | Protocol / Gallery intro / Architecture heads |
| h3 (frame title) | `text-2xl` / `text-3xl` (24→30px) | 400 | 1.0 | 0 | Gallery captions, architecture list rows |
| stat figure | `text-xl`–`text-3xl` | 900 (`font-black`) | tight | -0.01em | 1.2M, 84%, 12ms, 120Hz, 6DoF |
| standfirst / body | `text-[15px]`–`text-base` | 300 (`font-light`) | 1.5 | 0 | Intro paragraphs (Bone/60) |
| nav links | `text-[13px]` | 500 (`font-medium`) | 1.2 | 0.18em (uppercase) | Center nav |
| eyebrow | `text-[12px]` | 400 | 1.2 | 0.4em (uppercase) | Section numbers ("02 — The Protocol") |
| micro-label | `text-[11px]` | 400 | 1.2 | 0.2em–0.4em (uppercase) | Tags, readouts, footer headings |
| wordmark | `text-lg` | 900 (`font-black`) | 1.0 | -0.02em | "VR WORLD" |

### Principles

- **The headline is the spectacle.** Four stacked lines on `0.82` line-height, two left / two right, italic on lines 1–2, sized in viewport units so it dominates the hero at every width.
- **One family, two extremes of weight.** Heavy/black Inter for display and figures; `font-light` 300 for body. Avoid the middle — the contrast is the voice.
- **Italic marks the turn.** Emphasis fragments ("One engine.", "living system.", "Protocol", "world.") go italic; everything structural stays roman.
- **Wide positive tracking on small caps.** Eyebrows and labels open to 0.18em–0.4em uppercase, against the negative-tracked display (-0.02em) — the small type reads as taxonomy.
- **Hierarchy is opacity, not color.** Secondary text is Bone at reduced opacity, never a second hue.

### Note on Font Substitutes

VR World loads only **Inter**, which is open-licensed on Google Fonts — load it directly, no substitution required. **Neue Montreal** is a commercial typeface and is deliberately *not* loaded; it appears only as the first name in the fallback stack so locally-installed viewers get it. Do not add a `@font-face` or CDN link for Neue Montreal — that would change the build. If a closer free substitute for Neue Montreal's grotesque is ever wanted, Inter already is the documented fallback and is the system of record; a tighter visual match would be a neo-grotesque like **Söhne** or **Aktiv Grotesk** (commercial) — but the build's intent is Inter for everyone.

## Layout

### Spacing System

- **Base unit**: 4px.
- **Tokens (front matter)**: `{spacing.xs}` 8px · `{spacing.sm}` 16px · `{spacing.md}` 24px · `{spacing.lg}` 40px · `{spacing.xl}` 96px · `{spacing.section}` 128px.
- Page rail: `px-6 md:px-10` (24px → 40px) inside a `max-w-[1600px]` centered container — every content section aligns to this rail.
- Section rhythm: `py-24 md:py-32` (96px → 128px) on Protocol, Architecture, and the footer.
- Nav: `h-20` (80px) tall, same `px-6 md:px-10` rail; nav center links `gap-10` (40px).
- Chips and tiles: proto-items `px-4 py-3` (16/12px); stat tiles `p-5` (20px); stats badge `px-5 py-4`; CTAs `px-6 py-4` to `px-9 py-6`.
- Hero content: `pt-24 pb-10` inside the sticky stage; gallery track `gap-8 md:gap-12` with `px-[8vw]` lead-in.

### Grid & Container

- **Global container**: `max-w-[1600px] mx-auto px-6 md:px-10` — the widest rail in this collection, suited to the cinematic full-bleed scale.
- **Hero**: `height:480vh` outer section with a `sticky top-0 h-screen overflow-hidden` stage; an absolutely-positioned z-stacked layer cast (video → veil → portal → model → curtains → content); content is a `grid grid-rows-[1fr_auto]` with the headline self-centered and a 3-column bottom bar.
- **Protocol app-shell**: `grid md:grid-cols-[300px_1fr] min-h-[600px]` — a fixed 300px sidebar + fluid live-feed pane, inside a `rounded-3xl` bordered shell with four corner accents.
- **Gallery**: `height:400vh` outer section with a `sticky` centered stage; a single horizontal flex `#track-emq` (intro panel → six frames → end CTA) translated on X by ScrollTrigger.
- **Architecture**: `grid md:grid-cols-2 gap-12 md:gap-20` — a `md:sticky md:top-28` left list + a right interactive image panel.
- **Footer**: `grid md:grid-cols-2` CTA row over a `grid md:grid-cols-4` link grid.

### Whitespace Philosophy

Whitespace is theatrical staging. The sections are deep (`py-24 md:py-32`) and the container is wide (1600px), so the oversized type and the angled frames get room to be the only events on screen. The two scroll-pinned sections (480vh hero, 400vh gallery) convert vertical distance into time — the air is the duration of the dissolve and the drag, not just margin. Crowding the page would collapse the cinema back into a generic dark SaaS layout; the negative space is what lets the grain, the noise, and the single Bone value register.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow, no border | Default for type and most surfaces on the dark field |
| 1 (hairline) | 1px `border-[#fffdf9]/10` (up to /40) | Dividers, app-shell border, stat tiles, CTA outlines, nav circle |
| 2 (translucent lift) | `backdrop-blur-md` over `bg-[#fffdf9]/40` or `bg-black/40` | Hero stats badge, architecture System-Link toggle bar |
| 3 (gradient veil) | `bg-gradient-to-b/t` near-black overlays | Hero video veil, architecture image scrim, app-shell top sheen |
| 4 (model shadow) | `drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]` | The hero foreground model only |
| 5 (cinematic scrub) | Pinned 480vh / 400vh scroll timelines | The portal dissolve and the horizontal gallery drag |
| 6 (texture layers) | Fixed WebGL grain canvas (z-0) + SVG noise overlay (z-60) | Page-wide film grain and noise over everything |

Depth here is not box-shadows on cards — it is layering and motion. The portal effect is built entirely from z-index stacking and scrubbed transforms; the page reads as cinematic because of the fixed grain, the noise overlay, the mix-blend-difference cursor, and the gradient veils, not from elevation in the Material sense.

### Z-index Stack (load-bearing — do not reorder)

`bgCanvas` z-0 → hero video z-1 → gradient veil z-2 → portal frame z-10 → hero model z-15 → curtains z-20 → hero content z-30 → Protocol section z-40 → Nav z-50 → noise overlay z-60 → cursor dot/ring z-9999. This exact order is what makes the portal sit behind the model and in front of the video; the comments in the build flag it as reproduce-exactly.

### Decorative Depth

- **The fixed WebGL grain canvas** (z-0) — a fullscreen shader mixing `vec3(0.110)` paper and `vec3(0.063)` onyx with `smoothstep` and a hashed film grain (`* 0.06`), animated on `requestAnimationFrame` via `u_time`. It is the literal floor of the page.
- **The SVG noise overlay** (z-60) — a `feTurbulence fractalNoise` rect at `opacity 0.045`, `mix-blend-overlay`, fixed over the whole viewport.
- **The mix-blend-difference cursor** and the `blend-diff` gallery header invert against whatever value is beneath them.
- **No colored glows, no glass tint, no spotlight cards** — depth is grayscale grain, translucent Bone, and motion only.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.sm}` | 2px | `rounded-sm` outer wrapper of gallery frames (under the clip-poly) |
| `{rounded.card}` | 12px | `rounded-xl` proto-items, stat tiles |
| `{rounded.lg}` | 16px | `rounded-2xl` hero stats badge, architecture image frame |
| `{rounded.xl}` | 24px | `rounded-3xl` Protocol app-shell + its corner-accent radii |
| `{rounded.pill}` | 9999px | `rounded-full` CTAs, cursor dot/ring, System-Link toggle, dots, nav/footer brand circles |

### The `clip-poly` Framing System (signature)

Angled polygon clip-paths replace rounded corners on imagery — **never substitute `border-radius` here.** Three masks:
- `{components.clip-poly}` **clip-poly-1**: `polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)` — bottom-right corner sliced. Frames 01, 03, 06.
- **clip-poly-2**: `polygon(20% 0, 100% 0, 100% 100%, 0 100%, 0 20%)` — top-left corner sliced. Frames 02, 05, and the architecture image.
- **clip-poly-3**: `polygon(0 12%, 12% 0, 100% 0, 100% 88%, 88% 100%, 0 100%)` — both opposite corners chamfered. Frame 04.

### Photography & Illustration Geometry

- All imagery is **grayscale by default** — gallery frames render `grayscale` and decolor to `grayscale-0` on hover over `duration-700`, scaling from `scale-105` to `scale-100`. (Note: the source images are already monochrome cinematic stills, so "decolor" reads as a contrast/clarity shift; the system enforces grayscale regardless.)
- Frames are `aspect-[3/4]`, `w-[78vw] md:w-[30vw]`, set in one of the three `clip-poly` masks; frames 2/4/6 carry `md:mt-24` for a staggered baseline.
- The architecture image is `aspect-[4/5]` in `clip-poly-2`, with a System-Link toggle that flips it between full and `grayscale(1) brightness(0.7)`, and an Overdrive slider that scales it `1 + value/600`.
- The hero PNGs (portal, model, curtains) are bottom-anchored, `object-contain`, `pointer-events-none select-none`; the model carries the only `drop-shadow`.

## Components

### Buttons

> Measured from the live build. Two CTA recipes: an outlined "line" pill used several times, and exactly one filled button in the footer.

**`cta-line`** ({components.cta-line}) — The repeated outline CTA. Used for "Enter the Portal" (hero), "See the System" (gallery end), and the architecture/footer link rows.
- Transparent fill, `border border-[#fffdf9]/30` (or `/40`), `rounded-full`, padding `px-6 py-4` → `px-7 py-5`, label in `text-[12px] tracking-[0.28em] uppercase` Bone, plus an Iconify gamepad or Lucide `arrow-up-right` glyph (`gap-3`). Carries `gs-te-cta`: on hover GSAP tweens `boxShadow:'0 0 20px rgba(255,255,255,0.3)'` and `y:-2` over `0.4s`; `hover:border-cyan` (→ Bone) firms the outline. The white glow is the only "lit" hover on the page.

**`cta-solid`** ({components.cta-solid}) — The single filled button. Footer "Brief the studio" only.
- `bg-[#fffdf9]` (Bone), `text-[#101010]` (Onyx), `rounded-full px-9 py-6`, `text-sm tracking-[0.2em] uppercase font-medium`, with a Lucide `arrow-up-right` (`w-5 h-5`). `hover:bg-cyan` resolves to Bone (no color change); the `gs-te-cta` glow + lift applies. This inversion is the page's loudest single element — keep it to one placement.

### Cards & Containers

**`app-shell`** — The Protocol panel. `relative rounded-3xl border border-[#fffdf9]/10 bg-gradient-to-b from-[#fffdf9]/[0.04] to-transparent overflow-hidden`, with four `.proto-corner` accents (`w-12 h-12` two-sided `border-cyan/60` → Bone, matched `rounded-…-3xl`). Holds a 300px sidebar + a live-feed video pane.
**`proto-item`** — Sidebar list rows. `flex items-center gap-3 px-4 py-3 rounded-xl`; active = `bg-[#fffdf9]/[0.06] text-[#fffdf9]` with an `ACTIVE` tag; inactive = `text-[#fffdf9]/55 hover:text-[#fffdf9] hover:bg-[#fffdf9]/[0.04]`.
**`stat-tile`** — `rounded-xl border border-[#fffdf9]/10 p-5`, `font-black text-2xl` figure over `text-[11px] tracking-widest uppercase text-[#fffdf9]/50` label (12ms / 120Hz / 6DoF).
**`stats-badge`** — The hero light chip. `bg-[#fffdf9]/40 backdrop-blur-md text-[#101010] rounded-2xl px-5 py-4 shadow-2xl`, an Onyx `animate-ping` dot + solid dot, `font-black text-xl` "1.2M" over a Bone-on-light micro-label.

### Inputs & Forms

The only input is the **Overdrive range slider** in Architecture: `<input type="range" class="w-full appearance-none h-1 rounded-full bg-[#fffdf9]/20 outline-none accent-cyan">` (accent resolves to Bone). On `input` it updates the `84%` readout and scales the architecture image. No text inputs, no validation, no focus rings beyond the browser default exist on the page — a contact form would have to introduce them in the same Bone-on-dark language (see Known Gaps).

### Navigation

**`top-nav`** — A `fixed top-0 w-full z-50` bar with **no background and no blend** — plain Bone text that stays neutral over the hero video. Inner row `max-w-[1600px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between`.
- Left: wordmark `<a>` — a `w-9 h-9 rounded-full border` circle holding Iconify `solar:gamepad-linear` (18) + `font-black text-lg tracking-[-0.02em]` "VR WORLD".
- Center (`hidden lg:flex gap-10 text-[13px] tracking-[0.18em] uppercase font-medium`): Protocol · Worlds · Architecture · Studio, each `hover:opacity-60`.
- Right (`gap-5`): three `w-9 h-9` icon buttons — magnifier, bag, hamburger (Iconify Solar).
- Every interactive element carries `data-cursor` (drives the cursor-ring grow).

### Signature Surfaces

**`reveal-line`** ({components.reveal-line}) — Headline reveal. Each line is an `overflow-hidden` inline mask whose inner `<span>` starts at `translateY(110%)`; on `load`, GSAP tweens `y:0`, `duration:1.2`, `ease:'power4.out'`, `stagger:0.12`, `delay:0.2`. During the hero scrub the whole line group also fades and rises (`opacity:0, y:-40`).
**`portal-hero`** — The 480vh sticky stage. Scrubbed at `scrub:1.2`, all tweens at position 0, `ease:'none'`: curtains slide `xPercent ±100` and `blur(14px)`; portal `scale:5, opacity:0`; model `scale:1.4, opacity:0, y:'8vh'`; video `scale:1.25`; reveal-lines fade out. The dissolve *is* the section.
**`gallery-drag`** — The 400vh horizontal track. `#track-emq` is tweened on X by `-(scrollWidth - innerWidth + innerWidth*0.08)`, `ease:'none'`, `scrub:1, invalidateOnRefresh:true`.
**`cursor`** ({components.cursor}) — Dot (7px Bone, 1:1 on mousemove) + ring (38px Bone outline, lerping `0.18`/frame), both `mix-blend-mode:difference`, `z-9999`; ring grows to 64px with `rgba(255,255,255,0.08)` fill on any `[data-cursor]` hover. Hidden and replaced with `cursor:auto` under 768px.
**`marquee`** ({components.marquee}) — `animation: marquee 26s linear infinite` (`translateX(0 → -50%)`); italic display phrases "Build the impossible" / "Step inside the game" split by a `font-black ✦` star, content duplicated to ≥200% width for a seamless loop.
**`grain-bg`** ({components.grain-bg}) and **`noise-overlay`** ({components.noise-overlay}) — the fixed WebGL film-grain canvas (z-0) and the SVG `feTurbulence` overlay (z-60) described under Decorative Depth.

### Footer

**`footer`** ({colors.onyx} background) — CTA row (eyebrow + giant italic headline left, `cta-solid` right), then a `mt-24 pt-10 border-t border-[#fffdf9]/10 grid md:grid-cols-4` link grid: a Brand column (gamepad circle + "VR WORLD" + tagline), a **Studio** column (Protocol/Worlds/Architecture), a **Connect** column (Twitter / X · Discord · ArtStation — functional links), and a **Contact** column (`build@vrworld.studio`, `© 2026 VR World Studio.` / "All worlds reserved."). All link hovers are `hover:text-cyan` → Bone.

## Do's and Don'ts

### Do
- Reserve `{colors.canvas}` (#1c1c1c) as the base and `{colors.onyx}` (#101010) for deeper sections; cross-fade the body between them on scroll over `0.6s`. Never use `#000000`.
- Keep `{colors.bone}` (#fffdf9) as the only foreground value; build hierarchy with Bone opacity ramps (/70, /60, /55, /40, /10), not a second color.
- Set display headlines in Inter at heavy/black weight, `0.82` line-height, viewport-unit sizing, italic on emphasis lines.
- Frame all imagery with the `clip-poly-1/2/3` angled masks and the default `grayscale` treatment.
- Drive the page texture with the fixed WebGL grain canvas, the SVG noise overlay, and the mix-blend-difference dot+ring cursor.
- Hold every GSAP number exactly: hero `scrub:1.2`, gallery `scrub:1`, reveal `stagger:0.12 / duration:1.2 / power4.out`, protocol `stagger:0.08 / back.out(2)`, cursor lerp `0.18`.
- Keep the single filled `cta-solid` to its one footer placement; everywhere else use the outline `cta-line`.

### Don't
- Don't introduce any hue — no blue, cyan, orange, green, or purple; the refusal of color is the brand. The `flare`/`cyan` aliases must stay mapped to `#fffdf9`.
- Don't use `#ffffff` for text or `#000000` for backgrounds — the warm-off-white / soft-near-black pair is deliberate.
- Don't add a `@font-face` or CDN link for Neue Montreal; it is local-only first-choice, with Inter the loaded fallback.
- Don't add a `black` font-family alias — it would break `font-black` resolving to weight 900.
- Don't replace the `clip-poly` masks with `border-radius` on imagery.
- Don't reorder the z-index stack (video 1 → veil 2 → portal 10 → model 15 → curtains 20 → content 30 → protocol 40 → nav 50 → noise 60 → cursor 9999) — the portal effect depends on it.
- Don't drop `mix-blend-difference` on the cursor or the `blend-diff` gallery header.
- Don't add colored glows, glass tints, or drop-shadow cards; depth is grain, translucent Bone, and motion only.
- Don't use full-color photography or `bg-blue-500`-style AI-default accents.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <768px | Custom cursor hidden, `cursor:auto` restored; hero headline `12vw`; hero CTA + scroll-hint `hidden`; Protocol/Architecture grids stack to one column; gallery frames `w-[78vw]`; nav center links hidden |
| Tablet | 768–1023px (`md:`) | Headline `8.5vw`; `px-10` rail; `py-32` sections; gallery frames `w-[30vw]` with `mt-24` stagger; protocol 300px sidebar appears; custom cursor active |
| Desktop | ≥1024px (`lg:`) | Nav center links (`hidden lg:flex`) appear; full 1600px container; all interactions live |

### Touch Targets

- The `cta-line` / `cta-solid` paddings (`px-6 py-4` up to `px-9 py-6`) clear the ≥44px minimum comfortably; nav icon buttons are `w-9 h-9` (36px) — at the small end, acceptable for a desktop-first cinematic build.
- The custom cursor is disabled under 768px so touch users get the native pointer; `data-cursor` becomes inert.
- The gallery drag is fed by scroll on touch (the horizontal track is scroll-scrubbed, not pointer-dragged).

### Collapsing Strategy

- **Nav**: center links collapse below `lg`; the hamburger button persists at every width as the mobile menu affordance.
- **Hero**: the four-line headline scales with `vw` units; the CTA and scroll-hint hide under `md`, leaving only the headline + stats badge on mobile.
- **Grids**: Protocol (`md:grid-cols-[300px_1fr]`) and Architecture (`md:grid-cols-2`) collapse to single column; the architecture left list loses its `md:sticky`.
- **Type**: display sizes step down via the `md:` variants (`text-7xl → 5xl`, `8.5vw → 12vw`); body holds.

### Image Behavior

- Gallery frames keep `aspect-[3/4]`, architecture `aspect-[4/5]`, so the `clip-poly` masks and layout don't shift; images `object-cover grayscale`.
- Hero PNGs are bottom-anchored `object-contain`; the looping videos are `object-cover` with `muted playsinline loop preload="metadata"` (hero) and `autoplay …` (protocol feed).
- Preload the CDN assets (`video-bg.mp4`, `portal.png`, `hero-model.png`, `curtain-l/r.png`, `w1–w7.jpg`) so the first scroll of the portal dissolve has no pop-in; the hero video uses `portal.png` as its poster.

## Iteration Guide

1. New page or section? Start from `{colors.canvas}` (or `{colors.onyx}` for a deeper band) + Bone foreground + Inter, inside the `max-w-[1600px] px-6 md:px-10` rail at `py-24 md:py-32`. The dark cinematic shell is the brand.
2. Keep the monochrome rule absolute — a new "accent" need is answered by Bone, by an opacity step, or by nothing, never by a new hue. The `flare`/`cyan` decoy aliases are a guardrail, not a license to colorize.
3. Reference everything by token name — `{colors.x}`, `{rounded.x}`, `{typography.x}`, `{components.x}` — so a value change cascades.
4. Decide which one device carries any new motion: the scrub timeline, the reveal-line, the marquee, or the cursor. Don't stack a second competing scroll animation on a section that already pins.
5. Frame new imagery with a `clip-poly` mask and grayscale; reserve `rounded-*` for chrome (cards, pills, chips), never for photos.
6. Treat the filled `cta-solid` inversion as scarce — one per page. New CTAs default to the outline `cta-line`.
7. New display headline: heavy/black Inter, `0.82`–`0.9` line-height, italic only on the emphasis fragment; small labels open to wide uppercase tracking.

## Known Gaps

- The build is a **single self-contained page**; there are no interior routes (a real "Worlds" detail page, a case study, an about/contact page). Those would have to be designed in the same Canvas/Onyx + Bone + Inter language — the section-level type rows here are read off the one page only.
- **Heavy runtime dependency**: the experience leans on GSAP + ScrollTrigger (480vh and 400vh pinned timelines), a WebGL grain canvas, an SVG noise filter, and a custom RAF cursor. There is **no `prefers-reduced-motion` guard** in the build — the portal dissolve, gallery drag, marquee, and grain all run unconditionally. Add one for accessibility before shipping to a broad audience.
- **Decorative / non-functional controls**: the Protocol sidebar items, the System-Link toggle, and the Overdrive slider drive only local visual effects (image filter/scale) — they are theatrical, not connected to real state.
- A **dormant Three.js cloth variant** ships in the JS (a `PlaneGeometry(7,9,64,64)` `MeshStandardMaterial` mesh with a Bone wireframe and sine-field vertex animation) but is **not active** — the Protocol "Live Feed" pane uses a looping `<video>`, not the mesh. The mesh would only render if a `#fabricCanvas` element were present (there is none). Treat it as an optional swap, documented but off.
- **No form, input, or validation states** (error / success / disabled / focus) beyond the single range slider; semantic colors and focus styling would have to be introduced for any later contact surface.
- The grayscale-to-color hover on gallery frames assumes color source images; the shipped assets are already monochrome cinematic stills, so the decolor reads as a contrast shift rather than a hue change.
