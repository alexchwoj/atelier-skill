---
version: "1"
name: "Design System Inspired by Seno"
description: "Seno is a misty steel-blue dreamscape for a Web3 identity layer: full-bleed mountain photography dissolving between eight sections through blur-blended seams, Instrument Serif italic display type in pale cream over a ten-token desaturated palette, frosted-glass surfaces (folder-tab cards with pointer tilt, a pinned horizontal step track, a dome-arched CTA whose curve is scrubbed via a CSS variable), animated film grain over everything, and Lenis + ScrollTrigger choreography with a reveal failsafe. The page reads as one continuous tonal flow from hazy sky to near-black abyss — no hard section boundaries anywhere."
colors:
  flow: "hero photo → slate → steel → haze → mist photo → steel → slate → ink → dome photo → abyss — every seam color-matched"
  sky: "#8ba2b2 / #6f8a9c — hero tint"
  mist: "#c3d2d9 · haze #a9bcc7 — the light mid-page band"
  steel: "#5b7382 · slate #33454f — the working mid-blues"
  ink: "#131c21 · abyss #0d1418 — the dark floor"
  cream: "#e8e4cd (dim #cfcab0) — display type, pills, knobs, progress fill"
  glass: "linear-gradient white 22%→10% + blur 18px + 1px white/28 border + inset highlight"
typography:
  display: { fontFamily: "'Instrument Serif', Georgia, serif", weights: "400 italic only", role: "hero clamp(64px,13.5vw,210px) · section H2s clamp 84–92px · ghost numerals 150–180px" }
  body:    { fontFamily: "'Inter', system-ui, sans-serif", weights: "400-600", role: "paragraphs 13–15px · card bodies 12.5–13px · captions 10–11px tracked uppercase" }
spacing:
  container: "max-w-[1600px] px-5 md:px-10 · section rhythm py-24 md:py-36"
  hero: "100svh min-680px, content pt-28/36 pb-8/12, justify-between"
  seams: "h-72 blur strips at every photo→color boundary"
rounded:
  pill: "9999px — nav CTA, chips, toggle-pill buttons with knobs"
  card: "1.5rem (rounded-3xl) — step cards, Works grid shell · folder cards 0 22px 22px 22px with a 104×26px tab"
  dome: "50% 50% 0 0 / var(--dome-r) — the CTA arch, radius scrubbed 200→110px (95→60 mobile)"
motion:
  ease: "power3.out reveals · power4.out hero · out-expo/out-quart CSS tokens · scrubbed tweens ease:none"
  reveal: "[data-reveal] autoAlpha 0 y44 → 1.15s at top 88% once, delays i*0.08–0.12 + a 2.5s failsafe that force-shows anything stuck invisible"
  hero: "CSS char-split rise (1.35s out-expo, 0.035s/char) + GSAP bg scale 1.14→1.05 + scroll parallax (bg +12%, headline −18% fading to 0.25)"
  pin: "How-section horizontal track pinned at lg+, scrub 1, track x to −(scrollWidth−clientWidth+80), cream progress bar scaleX 0→1; native swipe below lg"
  tilt: "Why cards ±5° pointer tilt at perspective 900px + translateY(-8px)"
  grain: "0.9s 4-step position jitter, static below 768px"
components:
  nav: "fixed, transparent → ink/55 + blur past 60px scroll · ✳ + serif-italic wordmark · cream Get Started ↗ pill · burger→X mobile panel with inert"
  hero: "eyebrow 'Your Universal' + Web3 ↔ Identity split headline + 46 deterministic floating specks + glass chips + scroll-drip line"
  folder-cards: "4 glass cards with file-folder tabs, staggered lg offsets (0/14/6/20), tilt on pointer"
  step-track: "4 glass cards with ghost numerals 01–04, pinned horizontal scrub + progress hairline"
  works-grid: "5 rails in a gap-px hairline grid, slate/90 cells lightening on hover, inline-SVG icons that lift"
  redefine: "serif/sans mixed H2 + ghost-outline numerals 01–04 + toggle-pill CTA"
  cta-dome: "arched photo section, radius flattening on approach, rim-lit, mailto toggle-pill with rotating knob"
  footer: "24px-circle logo, nav-link underlines, static legal text, two-line hairline base row"
---

# Design System Inspired by Seno

## Overview

Seno builds trust for a privacy protocol the way landscape photography builds awe: by making one continuous world. The page's signature is its **tonal flow** — {colors.flow}. There are no section boundaries in the usual sense; every photo-to-color transition is dissolved by an `h-72` strip combining a `backdrop-blur` mask with a gradient that lands on the *exact* color the next section starts with. Scrolling Seno feels like descending through weather: hazy sky, steel mist, slate dusk, near-black night.

The type system is a two-voice duet. **Instrument Serif italic** — weight 400 only, no bold exists — carries every display moment in pale **cream** ({colors.cream}): the split hero headline (*Web3* flung left, *Identity* right), section H2s, ghost numerals. **Inter** answers in small, precise sizes (12.5–15px) at white alphas. The contrast of a romantic italic serif against cool engineering blues is the brand: cryptography described in the voice of a nature documentary.

Surfaces are **frosted glass** ({colors.glass}) in three signature shapes: the Why section's **folder-tab cards** (a 104×26px tab grown from the top-left corner, radius `0 22px 22px 22px`), the How section's **step cards** with 180px ghost numerals, and the CTA's **dome** — a photo section arched by a two-axis border-radius whose vertical radius GSAP scrubs from 200px to 110px as it enters (the arch visibly flattens as you approach). Over everything sits **animated film grain** at 5.5% opacity, jittering in 4 steps — the analog texture that keeps the digital blues from feeling sterile.

Motion is orchestrated once at App level: **Lenis** (lerp 0.09) drives scroll, a universal `[data-reveal]` tween lifts content 44px into place, and — critically — a **2.5-second failsafe interval** force-reveals any element stuck invisible, so choreography can never cost content. The hero headline splits into characters that rise on pure CSS (GSAP never touches the chars); the How track pins and scrubs horizontally at desktop but degrades to native swipe on mobile and reduced motion.

**Key Characteristics:**
- **One continuous tonal flow** — ten desaturated tokens sequenced dark→light→dark; seam strips erase every boundary.
- **Italic serif display** — Instrument Serif 400 italic for everything big; hierarchy from size and cream, never weight.
- **Glass with a file-folder tab** — the Why cards' tab shape is the system's most ownable component.
- **Scrubbed geometry** — the dome's radius and the step track's position are scroll-driven, not time-driven.
- **Film grain atmosphere** — a fixed, animated noise overlay unifies photography, glass, and flat color.
- **Ghost numerals** — 150–180px serif digits at 14% white (filled) or cream outline (stroked) as spatial anchors.
- **Choreography with a safety net** — reveal failsafe + reduced-motion path + native-swipe fallback; the page can never trap content.
- **Deterministic randomness** — 46 hero specks positioned by formula (`i*73+11 % 100`), not `Math.random()`.

## Colors

> Source: ten `@theme` tokens in `src/index.css`; all text is white at working alphas.

### The flow
- **Sky / sky-deep** ({colors.sky}): the hero's upper tint only.
- **Mist / haze** ({colors.mist}): the light mid-page band (Why's body, How's base) — the page at its brightest.
- **Steel / slate** ({colors.steel}): the workhorses — card fields, gradients' midpoints, Works cells.
- **Ink / abyss** ({colors.ink}): nav-scrolled chrome, CTA field, footer floor.
- **Cream / cream-dim** ({colors.cream}): every display line, pill, knob, and the progress fill. Cream is to Seno what an accent color is elsewhere — except it's a paper tone, not a hue.

### Rules
- Text hierarchy is **white at alphas** (85/75/70/65/60/55/50/40) — never gray hexes.
- No saturated color anywhere: no purple, indigo, neon green. The palette *is* the atmosphere.
- Shadows are blue-black (`rgba(13,20,24,…)`), and H2s over photography carry soft text-shadows for lift.

## Typography

- **Display** ({typography.display}): always italic, always 400. Hero `clamp(64px,13.5vw,210px)` with `leading-[0.9]`; H2s clamp to 84–92px; the CTA pairs a serif italic line with a sans semibold line — the only place the voices share a heading.
- **Body** ({typography.body}): Inter 400–600. Card titles 15–17px semibold; bodies 12.5–13px relaxed; captions 10–11px uppercase tracked 0.3em+.
- **Ghost numerals**: serif digits as texture — `.ghost-num` fills at `white/14`, `.ghost-outline` strokes 1px cream at 38%.

**Rule:** Instrument Serif has no bold — never synthesize. If a display line needs more weight, it becomes Inter semibold (as the CTA's second line does).

## Layout

- **Container** ({spacing.container}): one 1600px shell; generous `py-24 md:py-36` sections.
- **Hero** ({spacing.hero}): full `100svh`, content stretched between eyebrow/headline (top) and paragraph/scroll/chips (bottom).
- **Seams** ({spacing.seams}): the `h-72` strips are layout members, not decoration — z-indexed above photos, below content.
- **Signature grids**: Why's 4 columns with staggered tops (`lg:mt-0/14/6/20` — cards hang like folders at different depths); Works' `gap-px` hairline grid where the border *is* the background showing through; Redefine's asymmetric `[1.05fr_1fr]` split.
- **The How track**: `w-max` flex row of fixed-size cards + a `10vw` end spacer, translated by scroll at desktop, swiped natively below `lg`.

## Elevation

Glass does the lifting: the `.glass` recipe (gradient + 18px blur + 1px white/28 border + inset top highlight + deep blue-black shadow) reads as physical panes over the landscape. Hover elevates by geometry — folder cards rise 8px and deepen their shadow; Works cells lighten; knobs translate. Blur drops to 10px and grain freezes below 768px for GPU sanity.

## Shapes

- **Pills** ({rounded.pill}): every CTA is a pill, and the important ones are **toggle-pills** — text left, a circular cream knob right (`↗` inside) that slides (Redefine) or slides-and-rotates 45° (CTA dome) on hover.
- **Cards** ({rounded.card}): `rounded-3xl` for steps and the Works shell; the folder tab for Why.
- **The dome** ({rounded.dome}): a two-axis radius arch. GSAP must tween **only `--dome-r`** — tweening the full shorthand drops the vertical radii and snaps the arch flat.

## Components

### Nav
{components.nav}. The scrolled state (`bg-ink/55 backdrop-blur-xl border-b white/10`) fades in over 500ms past 60px. Mobile panel uses `max-height` transition + `inert` when closed.

### Hero
{components.hero}. The char-split reveal is CSS-only (`translateY(120%)→0`, 1.35s out-expo, 0.035s/char, "Identity" offset +0.18s) — GSAP handles the background zoom and the bottom row, never the characters. Parallax on exit: background +12%, headline −18% fading to 25%.

### Folder cards
{components.folder-cards}. The tab is a `::before` grown from `bottom: 100%`; pointer tilt is ±5° at `perspective(900px)`, cleared on leave.

### Step track
{components.step-track}. Pin math: `end: '+=' + (track.scrollWidth − wrapper.clientWidth + 80)`, `scrub: 1`, `anticipatePin: 1`, `invalidateOnRefresh: true`. The wrapper's `overflow-x` flips to `visible` only while pinned (restored on cleanup) so the fallback stays swipeable.

### Works grid
{components.works-grid}. Five inline-SVG line icons (1.4 stroke); the 5th cell takes `sm:max-lg:last:col-span-2` so tablet never shows a hole.

### Redefine
{components.redefine} — the manifesto: serif-italic cream phrase + plain sans continuation in one H2, four stroked numerals with "X, not Y" titles.

### CTA dome
{components.cta-dome}. Atmosphere radial above the arc, rim light tracing the curve via inset shadows, reveal delays cascading 0→0.4s down the stack.

### Footer
{components.footer}. Privacy Policy / Terms are **static spans** (`cursor-default`) — honest about being a template.

## Motion

- **Reveal system** ({motion.reveal}): one `fromTo` per `[data-reveal]`, `once: true` — plus the failsafe interval that kills tweens and force-shows any in-viewport element still under 5% opacity. Choreography never outranks content.
- **Hero** ({motion.hero}) · **Pin** ({motion.pin}) · **Tilt** ({motion.tilt}) · **Grain** ({motion.grain}).
- **Scrubbed tweens are `ease: 'none'`** — the scrollbar is the ease.
- **Reduced motion**: no Lenis, no reveals, no parallax, no pin, static grain — the full page, just still.

## Do's and Don'ts

### Do
- Keep all three photographs inside the steel-blue palette — one warm image breaks the flow.
- End every seam gradient on the *exact* token the neighbor starts with.
- Keep display type italic serif at 400; let cream and clamp() carry hierarchy.
- Ship the failsafe and the native-swipe fallback with any scroll choreography.
- Use deterministic formulas for decorative randomness (specks) so renders are stable.

### Don't
- Don't introduce a saturated accent; cream is the only "color event."
- Don't tween the dome's border-radius shorthand — variable only.
- Don't put hard edges between sections; a photo may never meet a flat color without a seam strip.
- Don't let GSAP animate the hero characters — they're CSS so the reveal survives any JS hiccup.
- Don't bold the serif or use it for body text.

## Responsive

- Breakpoints `sm 640 / md 768 / lg 1024`; container `px-5 md:px-10`.
- Hero headline `clamp(64px,13.5vw,210px)`; every H2 clamps; nothing is fixed-px display.
- The How track: pinned scrub at `lg+`, native horizontal swipe below — steps 02–04 must always be reachable.
- The dome scrubs shallower radii on mobile (95→60px) and overdraws `-mx-[32vw]` so the arc stays wide, not egg-shaped.
- Mobile perf budget: grain static, blurs 18→10px.

## Iteration Guide

To re-skin for another protocol, change only:
1. The three photographs (keep them same-palette; re-tune the ten tokens to the new imagery).
2. The two hero words + eyebrow, and each section's H2/paragraph pair.
3. The four folder-card and four step-card title/body pairs, five rail items, four manifesto points.
4. The ✳ glyph, wordmark, and mailto address.

Leave the seam system, glass recipes, reveal/failsafe engine, pin math, and dome mechanics untouched — they are the system.

## Known Gaps

- **Imagery downloads from the asset CDN** to `public/images/{hero,mist,cta}.jpg` and serves locally — any replacement must match the steel-blue palette or the tonal flow breaks.
- **`.glass-dark` is defined but unused** — dead CSS kept out of the published prompt.
- **Legal links are static text**, and the CTA is a `mailto:` — no form, no backend; wire real endpoints at production.
- **Lenis anchors offset (−80)** assumes the fixed nav height; changing nav height requires retuning it.
