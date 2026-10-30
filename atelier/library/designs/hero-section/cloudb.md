---
version: "1"
name: "Design System Inspired by CloudB"
description: "CloudB is sportswear-editorial in one screen: a pure white shell holding a full-bleed product film whose only frame is two 50px top corners, a giant translucent 'CLOUD' wordmark melted into the footage with mix-blend overlay, and exactly one solid object — a black pill CTA. Type is Clash Display 700 for the display word and General Sans micro-caps for everything else; motion is one expo.out entrance timeline (canvas scale-in, letters blur up, tag, CTA) plus spring-feel hovers on two custom easings. No hue outside the film except the green slot gradient that shows only while the video loads."
colors:
  white: "#ffffff"          # the shell — html/body/app root, the page's frame
  ink: "#0a0a0a"            # all text on white, CTA fill, selection bg
  slot: "#22b45c"           # loading-fallback gradient start — visible pre-video only
  slot-deep: "#17914a"      # loading-fallback gradient end
  word-glass: "rgba(255,255,255,0.72) + mix-blend-mode: overlay"   # the CLOUD letters
  on-video: "white/90 (micro tag) · white/10 (CTA icon circle)"
  ink-muted: "ink/80"       # nav links + icon buttons at rest → ink on hover
typography:
  display: { fontFamily: "'Clash Display', 'General Sans', sans-serif", weights: "700", role: "the CLOUD word — clamp(5.5rem,21vw,19rem), leading 0.82, tracking −0.02em — and the 22px logo wordmark" }
  body:    { fontFamily: "'General Sans', sans-serif", weights: "400-500", role: "reserved — the page has no body paragraph" }
  ui:      { fontFamily: "'General Sans', sans-serif", weights: "600", role: "nav links 11px, CTA 12px, micro tag 10px — all uppercase, tracking 0.14–0.28em" }
spacing:
  header: "24px x / 20px y → 40px (sm) → 56px (lg)"   # px-6 py-5 sm:px-10 lg:px-14
  nav-gap: "36px between links · 20px between icons"
  hero-inset: "24px → 40px (sm)"                       # tag right-6/sm:right-10, CTA bottom-6/sm:bottom-8
  canvas-min: "min(78dvh, 900px)"
rounded:
  canvas-top: "50px — top two corners of the hero canvas ONLY; bottom corners square"
  pill: "9999px — CTA, icon circle, cart badge"
motion:
  ease-out-expo: "cubic-bezier(0.16, 1, 0.3, 1)"      # underline sweep, CTA icon nudge
  ease-fluid: "cubic-bezier(0.32, 0.72, 0, 1)"        # color/shadow hovers
  entrance: "one GSAP timeline, defaults expo.out — canvas {scale 0.965, opacity 0, 1.1s} → letters {yPercent 60, blur 10px, stagger 0.06, 1.2s, −0.55} → tag {y24, 0.9s, −0.9} → CTA {y24, 0.9s, −0.7}"
  hover: "300–500ms only, never linear/ease-in-out; press = active:scale-95/0.97"
  lenis: "lerp 0.12, smoothWheel, own rAF"
  reduced-motion: "global CSS kill-switch (0.01ms) + gsap.matchMedia gate"
components:
  shell: "min-h-100dvh white flex column — navbar + hero, no max-width, no border, no shadow"
  navbar: "Non-sticky white bar — CloudB superscript wordmark, five 11px caps links with origin-left underline sweep, person + bag icon buttons (21px, stroke 1.4) with ink badge '2'"
  canvas: "Full-bleed video stage — .slot green gradient fallback, rounded-t-[50px], min-height min(78dvh,900px), film object-cover with no overlay"
  hero-word: "CLOUD in per-letter spans — Clash 700, clamp 21vw, leading 0.82, rgba-white .72 + overlay blend, pointer-events-none, top 16%"
  cta: "Black pill — py-2.5 pl-6 pr-2.5, 12px/600 caps 0.14em, deep ink shadow, nested white/10 icon circle whose arrow nudges ↗ on hover"
  micro-tag: "10px/600 caps 0.28em white/90 — top-right of the film"
---

# Design System Inspired by CloudB

## Overview

CloudB is one screen doing one job. The page is a **white shell** — `{colors.white}` on html, body, and root, with a plain non-sticky navbar — and everything cinematic happens inside a single **full-bleed canvas** that fills the rest of the viewport. The canvas has exactly one piece of geometry: its **two top corners round at 50px** while the bottom corners run square into the viewport edges, turning the film into a device-like card that's been slid up into the page. Before the video arrives, the canvas shows the `.slot` green gradient (`{colors.slot}` → `{colors.slot-deep}`) — a deliberate, branded loading state, not an error; once `hero.mp4` loads it disappears behind the footage forever.

The signature is the wordmark: **"CLOUD" at `clamp(5.5rem, 21vw, 19rem)`**, Clash Display 700, leading crushed to 0.82, painted `rgba(255,255,255,0.72)` with **`mix-blend-mode: overlay`** — so the letters don't sit on the film, they're *developed into it*, brightening and darkening with whatever frame passes underneath. It's typography as light, not as ink. Around it the page whispers: a 10px micro-tag top-right, five 11px nav links, and **exactly one solid object** — the black pill CTA with its nested `white/10` icon circle. **Most sneaker heroes stack product cards, colorway pickers, price chips, and badges; CloudB ships a film, one glass word, and a single button — the restraint is what reads as premium.**

Type is a two-font system with no middle register: **Clash Display 700** exists only at display scale (the CLOUD word, the 22px logo lockup with its superscript B), and **General Sans 600** handles every functional string as uppercase micro-caps tracked 0.14–0.28em. There is no body text — the page contains ten strings total.

Motion is one **`expo.out` timeline**: the canvas scales in from 0.965, the five letters rise from `yPercent: 60` through a 10px blur with a 0.06 stagger, then the tag and CTA settle in overlapping offsets. Hovers ride two custom cubic-beziers (`--ease-fluid` for color/shadow, `--ease-out-expo` for transforms) at 300–500ms — never default easings. Everything is double-gated for reduced motion: a global CSS kill-switch plus `gsap.matchMedia`.

**Key Characteristics:**
- **White shell, film core** — the page frames the video; no max-width, border, or shadow on the shell.
- **50px top-corner geometry** — the canvas's only rounding; bottom edges bleed to the viewport.
- **Blend-mode wordmark** — CLOUD at 21vw, `rgba(255,255,255,0.72)` + `overlay`, per-letter spans, leading 0.82.
- **One solid object** — the ink pill CTA; everything else on the film is translucent white.
- **Green slot fallback** — a branded gradient loading state behind the video, never visible after load.
- **Two fonts, two registers** — Clash Display 700 for display, General Sans 600 micro-caps for UI; no body copy.
- **Expo entrance, spring hovers** — one timeline (0.06 letter stagger, blur-up), custom easings only, `active:scale` press states.
- **Ten strings of copy** — the entire page inventory fits in a tweet.

## Colors

> Source: the single hero screen — white navbar, video canvas, wordmark, tag, CTA.

### Surface
- **White** ({colors.white}): the shell — page background and the navbar's ground. It is never tinted, shadowed, or bordered; its emptiness is the frame.
- **Slot green** ({colors.slot} → {colors.slot-deep}): a 160° gradient with a soft radial top-light, used *only* as the canvas fallback while the film buffers. It is brand-adjacent (clouds/grass athletic energy) but intentionally never appears once the video plays. Do not reuse it as an accent elsewhere.

### Ink
- **Ink** ({colors.ink}): #0a0a0a — nav text, icon strokes, CTA fill, cart badge, and the `::selection` background. On white, ink rests at `{colors.ink-muted}` (`ink/80`) and sharpens to full on hover.

### On-video whites
- **Word glass** ({colors.word-glass}): the CLOUD letters — 72% white pushed through `mix-blend-mode: overlay`, so contrast comes from the footage itself.
- **Micro tag**: `white/90`. **CTA icon circle**: `white/10` glass inside the ink pill. No other white-alpha values exist on the film.

### Accent
- None. The film supplies all color; the UI is strictly white/ink. No purple, indigo, or neon anywhere.

## Typography

### Font Families

- **Clash Display** (700, with 500/600 loaded) — display voice: the CLOUD word and the logo lockup. Loaded from Fontshare, the foundry's official free CDN.
- **General Sans** (400/500/600) — functional voice: nav, tag, CTA. Same Fontshare stylesheet.
- Both load in one `<link>`; `--font-display` falls back through General Sans before system sans.

### Hierarchy

| Token | Size | Weight | Case/Tracking | Use |
|---|---|---|---|---|
| `{typography.display}` word | `clamp(5.5rem, 21vw, 19rem)`, leading 0.82 | 700 | −0.02em | "CLOUD", per-letter spans |
| logo | 22px + 13px superscript | 700 / 600 | tracking-tight | "CloudB" lockup |
| `{typography.ui}` CTA | 12px | 600 | uppercase 0.14em | "Explore Now" |
| nav links | 11px | 600 | uppercase 0.18em | Five labels |
| micro tag | 10px | 600 | uppercase 0.28em | "Essential Men's Shoe" |
| badge | 9px | 600 | none | The cart "2" |

### Principles

- **No middle register.** Type is either enormous (display) or micro (10–12px caps). Introducing a 16px paragraph would break the editorial silence — if body copy is ever needed, it belongs on a new section, not the hero.
- **Tracking widens as size shrinks**: −0.02em at 19rem → 0.14em → 0.18em → 0.28em at 10px.
- **The wordmark is a component**, not a string — "Cloud" + superscript "B" (align-super, 13px/600), reused anywhere the brand signs.
- Uppercase belongs exclusively to the micro register; the logo and display word are the only mixed/upper exceptions.

### Note on Font Substitutes

Clash Display and General Sans are free via Fontshare (Indian Type Foundry's official CDN) — load the exact `<link>` given; no substitution, no rehosts. Keep 700 available: the entire display presence depends on it.

## Layout

### Spacing System

- Header: `px-6 py-5 → sm:px-10 → lg:px-14` — the only padded element on the page.
- The hero canvas has **zero padding**; its children position absolutely against its edges (`right-6/sm:right-10` tag, `bottom-6/sm:bottom-8` CTA, wordmark centered at `top-[16%]`).
- Canvas height: `flex-1` of the `100dvh` column with `minHeight: min(78dvh, 900px)` — the film always dominates the viewport but never grows past 900px of itself.
- Nav rhythm: 36px between links (`gap-9`), 20px between icon buttons (`gap-5`).

### Grid & Container

- There is no grid and no container — one flex column (`navbar` + `hero`) at full viewport width. Adding a `max-w-*` wrapper is explicitly forbidden; the 50px corners against the true viewport edge are the composition.
- Z-order inside the canvas: film (base) → wordmark `z-10` → tag + CTA `z-30`.

### Whitespace Philosophy

The white shell is the whitespace — a thin margin of calm (one nav bar's worth) framing the film. Inside the canvas, space is kept open by refusal: no play button, no product card, no name tag, no overlay wash. The brief's "do not add them" list is part of the layout system.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat white | The shell |
| 1 | The film (object-cover) over the slot gradient | The canvas |
| blend | `mix-blend-mode: overlay` at 72% white | The CLOUD word — *in* the film, not on it |
| 2 | `white/90` text, `white/10` glass circle | Tag + CTA icon |
| 3 | Ink pill + `0 18px 40px -14px rgba(10,10,10,0.6)` shadow (deepening on hover) | The CTA — the page's only shadow |

One shadow exists, under the one solid object. The wordmark's depth is optical (blend mode), not layered — recreating it with plain opacity flattens the whole hero.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.canvas-top}` | 50px, top corners only | The hero canvas |
| `{rounded.pill}` | 9999px | CTA, icon circle, cart badge |

The asymmetric canvas rounding is the identity — rounding all four corners turns the film into a card floating in the page; the design wants it *rising from the bottom edge*.

### Iconography

- Three inline SVGs, thin and precise: person (21×21, stroke 1.4), shopping bag (21×21, stroke 1.4), arrow-up-right (13×13, stroke 1.6, `M7 17 17 7M9 7h8v8`). Round caps/joins everywhere. No icon library may be installed.

## Components

### Navbar ({components.navbar})

Non-sticky, borderless, on the white shell. Left: the `CloudBMark` lockup. Center (≥md): five uppercase links, each carrying the **underline sweep** — a 1px ink span scaling `scale-x-0 → 100` from `origin-left` on 500ms `--ease-out-expo`, while the label eases `ink/80 → ink` on `--ease-fluid`. Right: person and bag icon buttons (`active:scale-95`), the bag wearing the 16px ink badge "2".

### Canvas ({components.canvas})

`data-hero-canvas` — the `.slot`-backed, `rounded-t-[50px]`, `overflow-hidden` stage. The film is its first child: `autoPlay loop muted playsInline`, `object-cover`, **no overlay on top**. The GSAP entrance scales the whole canvas in from 0.965 — the film arrives as one object.

### Hero word ({components.hero-word})

`<h1 aria-label="Cloud">` holding five `data-hero-letter` spans. `pointer-events-none select-none whitespace-nowrap`, centered at `top-[16%]`. The letters enter from `yPercent: 60` with `blur(10px)`, staggered 0.06s — a title developing out of the footage.

### CTA ({components.cta})

The conversion object: ink pill with asymmetric padding (`pl-6 pr-2.5`) so the icon circle nests flush at the right end. Hover deepens the shadow and nudges the arrow `+x/−y` with a 1.05 scale on `--ease-out-expo`; press compresses to 0.97. Always wrapped in a separate positioning div — GSAP animates the link itself, the wrapper owns the centering transform.

### Micro tag ({components.micro-tag})

The quiet product caption: 10px/600, 0.28em tracking, `white/90`, top-right. It is the only copy on the film besides the word and the CTA.

### Inputs & Forms

None. Future commerce UI should keep the ratio: ink-on-white chrome outside the canvas, translucent white inside it, one solid element per screen.

## Do's and Don'ts

### Do

- Keep the shell pure white and unpadded except the header — the film must touch left/right/bottom viewport edges.
- Round exactly the two top canvas corners at exactly 50px.
- Render the wordmark with `rgba(255,255,255,0.72)` + `mix-blend-mode: overlay`, split into per-letter spans.
- Keep the entrance order and offsets: canvas → letters (blur-up, 0.06 stagger) → tag → CTA, all `expo.out`.
- Use `--ease-fluid` / `--ease-out-expo` for every hover; give every pressable an `active:scale` state.
- Let the `.slot` gradient be the loading state — it's brand, not a bug.
- Keep `100dvh` sizing and the `min(78dvh, 900px)` canvas floor.

### Don't

- Don't add a play button, product card, name tag, badge, or overlay wash to the hero — the refusal list is part of the spec.
- Don't flatten the wordmark to plain opacity or solid white — the blend mode *is* the effect.
- Don't reuse the slot green as an accent, and don't introduce any hue into the UI.
- Don't wrap the page in a max-width container or put borders/shadows on the shell.
- Don't round the canvas's bottom corners, and don't shrink the top radius "to match" other cards.
- Don't use default or linear easings, and never animate layout properties — transform/opacity/filter only.
- Don't attach GSAP transforms to the CTA's centering wrapper — keep positioning and animation on separate elements.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <768px | Nav links hidden (logo + icons remain); tag at `right-6 top-16`; CTA at `bottom-6`; header `px-6` |
| sm | ≥640px | Offsets widen (`right-10`, `bottom-8`, `px-10`) |
| md | ≥768px | The five nav links appear |
| lg | ≥1024px | Header `px-14`; wordmark caps at 19rem |

### Fluid Strategy

- The wordmark never uses breakpoint sizes — `clamp(5.5rem, 21vw, 19rem)` tracks the viewport continuously, and `whitespace-nowrap` guarantees one line at every width.
- The film covers at every ratio; the canvas min-height keeps it cinematic on short viewports.

### Touch Targets

- CTA ≈ 46px tall; icon buttons 21px glyphs padded by their hit areas; the badge is decorative. All hovers degrade gracefully — press states (`active:scale`) carry the tactile feel on touch.

### Media Behavior

- `autoPlay loop muted playsInline` keeps iOS inline; the slot gradient covers the buffer window; `aria-hidden` keeps the film out of the a11y tree while `aria-label="Cloud"` names the h1.
- Reduced motion: the CSS kill-switch zeroes every transition/animation and `gsap.matchMedia` skips the timeline — the page renders complete and static.

## Iteration Guide

1. A second section goes *under* the canvas on the white shell — the hero stays a closed composition. Give new sections their own imagery; never extend the hero film downward.
2. New footage: landscape ~16:10, product-centered with bright sky/ground contrast — the overlay-blend word needs tonal variety behind it to read.
3. Reference tokens — `{colors.x}`, `{motion.x}`, `{components.x}` — so an easing or radius change cascades.
4. New interactive elements pick one of the two easings and a 300–500ms duration; new pressables get `active:scale-95`.
5. A second CTA anywhere on this screen must be a ghost (text or outline) — the ink pill's solidity monopoly is the hierarchy.
6. Keep new copy in the micro register (10–12px caps); if a sentence needs more than ~6 words, it belongs in a future section.
7. Real cart/account behavior should keep the 21px stroke-1.4 icon language and ink badge pattern.

## Known Gaps

- All links and buttons are inert (`href="#"` / no handlers); the cart badge is a static "2".
- The page is a single hero — no product grid, story section, or footer exists yet.
- Declared-but-unused tokens ship in the build: `--color-shell` (#cfd1d4), the `.slot-label` utility, and `.hero-word--ghost` — reserves from the slot-placeholder workflow; adopt or remove deliberately.
- The film is the entire brand mood; test any replacement against the blend-mode word at multiple frames (bright and dark passes both matter).
- No semantic states, forms, or focus-visible treatments exist beyond browser defaults.
