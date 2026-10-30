---
version: "1"
name: "Design System Inspired by Unsee"
description: "Unsee is a cinematic, minimalist AI-creative-studio landing page: a deep dusty blue-violet dreamscape (#080d20 → #131d40) lit by one warm orange glow (#ff9677) borrowed from a bioluminescent fish in the looping hero video. Inter carries everything at weight 400; a single Instrument Serif italic word accents each key headline. Fine film grain, hairline borders, soft glass, and restrained motion/react animation that supports the footage rather than competing with it. Four sections — Hero, Features, Workflow, Vision+Contact — over lots of negative space."
colors:
  bg-deep: "#080d20 — global deepest background (body)"
  bg-hero: "#131d40 — the hero surface"
  bg: "#111b3d — features/workflow surface"
  ink: "#060a19 — deepest ink for gradients/scrims"
  fg: "rgba(239,242,255,0.90) — primary text"
  fg-muted: "rgba(221,227,248,0.60) — body/nav rest"
  fg-faint: "rgba(216,224,250,0.38) — captions, footer"
  warm: "#ff9677 — THE accent: the fish glow. Dots, progress fills, accent word glow, selection"
  warm-strong: "#ff7f57 — hotter warm variant"
  cool: "#829cff — horizon line, focus ring, cool side of atmosphere"
  hairline: "rgba(228,234,255,0.15) — borders; -strong 0.30"
  glass: "rgba(216,226,255,0.10) — glass surface fill"
typography:
  sans: { fontFamily: "'Inter' variable via next/font/google", weights: "400-500", role: "everything — nav, body, headline sans parts; headline weight 400, never bold" }
  serif: { fontFamily: "'Instrument Serif' 400", weights: "400 italic only", role: ".font-serif-italic — the one accent word per headline (imagination, future)" }
spacing:
  edge: "--edge = clamp(1.25rem, 5.5vw, 5.6rem) — horizontal inset everywhere; logo + content align to it"
  section: "py clamp(5-7rem, 10-16vh, 8-14rem) per section; min-h, never fixed h"
rounded:
  panel: "1.4rem sticky feature panel · 2xl mobile feature images · rounded-full pills"
motion:
  library: "Motion (motion/react) only — useReducedMotion/useInView/useScroll/useTransform/useSpring/AnimatePresence. No GSAP."
  hero-intro: "masked line-wipe headlines + staggered fades, ease [0.22,1,0.36,1] — line1 0.15 · 'your' 0.29 · 'imagination' 0.44 · body 0.58 · button 0.72 · bottom 0.90; calm, no bounce"
  maskline: "MaskLine wipes a line up from behind overflow-hidden; the IntersectionObserver watches the always-visible WRAPPER, never the translated inner span"
  scroll: "hero content opacity/y fades on scroll; desktop pointer parallax on headline (x*-14,y*-9) + warm glow (x*30,y*22) via useSpring; never move the video. Workflow: warm progress rail scaleY on scrollYProgress; active step opacity 1, inactive 0.4 + blur(1.5px)"
  reveal: "Reveal wrapper — opacity+y 26, duration 0.9, once; reduced-motion → opacity-only 0.4"
components:
  hero-film: "looping fish video, object-cover, object-position shifts right on mobile; reduced-motion renders the poster img instead — never downloads the video"
  glass: ".glass / .glass-panel — blur+saturate, hairline border, inset top highlight; pills and header bar"
  grain: ".grain-overlay — fixed fractalNoise SVG, opacity 0.055, mix-blend soft-light"
  serif-accent: ".font-serif-italic — Instrument Serif italic 400, one word per headline"
  section-heading: "tracked label + warm glow dot over a clamp(1.9-3.4rem) editorial h2, weight 400"
---

# Design System Inspired by Unsee

## Overview

Unsee is a landing page that treats its hero video as the light source and builds everything else in shadow around it. The world is a **deep dusty blue-violet dreamscape** — body sits on `#080d20`, the hero on `#131d40` — and the only warmth is a single orange `#ff9677` glow borrowed from a bioluminescent fish in the footage. That warm is rationed like a scarce resource: a 5px dot before a section label, the progress fill on the workflow rail, the glow behind an accent word, the selection color. Everywhere else is Inter at three alphas of near-white over deep blue, with hairline borders and soft glass.

Typography is editorial and calm. **Inter at weight 400** carries every headline (never bold), and a single **Instrument Serif italic** word — *imagination*, *future* — accents each key line, wiping up from behind a mask. The page refuses the AI-SaaS defaults it could so easily fall into: no purple/indigo brand accents, no neon, no multi-stop gradients, no crowded card grids, no dashboard chrome. Instead: lots of negative space, one accent color, one serif accent, and motion that is physically believable and always in service of the footage.

Motion is **Motion (motion/react)**, never GSAP. The hero intro is a sequence of masked line-wipes and gentle fades on `[0.22,1,0.36,1]`; scroll drives a warm progress rail through the four workflow steps and a subtle pointer parallax on the headline (the video never moves). Every reveal resolves to fully visible, guarded by a `<noscript>` failsafe and `useReducedMotion`, so nothing is ever trapped off-screen.

**Key Characteristics:**
- **One warm accent** — `#ff9677` fish glow used only for dots, progress, accent-word glow, and selection; surfaces stay blue.
- **Inter 400 + one serif-italic word** — headlines never bold; Instrument Serif italic accents one word per line.
- **Blue-violet surface ladder** — `#080d20` deep → `#131d40` hero → `#111b3d` sections, gradient-blended between.
- **MaskLine headlines** — line-wipe from behind a mask; the observer watches the wrapper, never the clipped inner span (else text stays hidden).
- **Glass + hairline + grain** — `.glass` pills/header, `rgba(228,234,255,0.15)` borders, a 0.055-opacity soft-light film grain over everything.
- **Footage-first motion** — pointer parallax and scroll fades support the video; the video itself never moves; reduced-motion swaps it for a poster.
- **Refuses the AI default** — no purple/neon/multi-stop gradients, no card-grid clutter, no oversized icon sets (exactly three inline SVG marks).

## Colors

- **Surface ladder**: {colors.bg-deep} → {colors.bg-hero} → {colors.bg}, blended with vertical gradients between sections.
- **Warm accent** ({colors.warm}): the scarce resource — dots, progress fill, accent-word glow, `::selection`. `warm-strong` {colors.warm-strong} for hotter moments.
- **Cool** ({colors.cool}): the luminous water-horizon line in the closing section and the focus ring — used even more sparingly than warm.
- **Text**: {colors.fg} primary, {colors.fg-muted} body/nav, {colors.fg-faint} captions/footer. **Hairlines** {colors.hairline}; **glass** {colors.glass}.

## Typography

- **Sans** ({typography.sans}): Inter variable does everything; headlines are weight 400 — bolding a headline breaks the editorial calm.
- **Serif** ({typography.serif}): Instrument Serif italic 400, applied via `.font-serif-italic`, one word per headline. It is the whole typographic personality.

## Layout

- **Edge** ({spacing.edge}): one horizontal inset token aligns logo and all content.
- **Section rhythm** ({spacing.section}): generous vertical padding, `min-h` never fixed `h`, so short laptops never clip.
- **Structure**: fixed header → Hero (#top) → Features (#features) → Workflow (#workflows) → Vision+Contact (#vision, containing #testimonials + #contact). Sticky sub-layouts on desktop (feature panel, workflow heading) collapse to simple vertical sequences on mobile.

## Elevation & Depth

Depth is atmospheric, not shadow-based: gradient scrims over the video, soft glass with an inset top highlight, radial warm/cool glows, and a luminous horizon line with a large soft box-shadow. Film grain unifies it. No hard drop-shadows or elevation cards.

## Components

### Hero film
{components.hero-film}. A ~5s looping 1916×1080 H.264 clip of a person + glowing fish anchored right, empty blue space left for the headline. Downloaded from the asset CDN, served local; reduced-motion renders `hero-poster.jpg`.

### Glass
{components.glass}. Header bar (glassy on scroll), waitlist pills, primary CTAs.

### MaskLine + Reveal
{motion.maskline}. {motion.reveal}. These two carry all entrance motion.

### SectionHeading
{components.section-heading}. Small tracked label with a warm glow dot over a large weight-400 editorial h2.

### Icons
Exactly three inline SVG marks (1.4 stroke, currentColor): arrow-up-right, hamburger, close. The logo is a CSS radial-gradient orb, not an icon. No icon library.

## Motion

{motion.hero-intro}. {motion.scroll}. Library: {motion.library}. Rules: no scroll-jacking, no continuous JS loops, no custom cursor, no magnetic effects; scale changes stay ~0.98–1.07. Reduced motion: opacity-only reveals, poster instead of video, no parallax, no blur.

## Do's and Don'ts

### Do
- Keep the warm accent scarce — dots, progress, accent-word glow, selection only.
- Keep headlines at Inter 400 with exactly one Instrument Serif italic word.
- In MaskLine, observe the wrapper, never the inner span (else the final statement stays hidden).
- Keep the `<noscript>` failsafe and reduced-motion poster so content is never trapped off-screen.

### Don't
- Don't introduce purple/indigo/neon or multi-stop SaaS gradients.
- Don't bold a headline or use the serif upright/roman — it is italic-only.
- Don't move the video on scroll or pointer; only type and glow drift.
- Don't add a fourth+ icon, a UI kit, GSAP, or crowded card grids.
- Don't let overlays over-darken the footage — the fish glow must read through.

## Responsive

- Mobile-first; support 360 · 390 · 768 · 1024 · 1280 · 1440+.
- Headlines clamp: hero `clamp(2.6rem,6.7vw,5.8rem)`, final statement `clamp(2.5rem,8vw,6.8rem)`.
- Hero video `object-position` shifts right on mobile so person + fish never crop; a mobile scrim keeps the headline off the fish's face.
- Desktop sticky feature panel / workflow heading become plain vertical sequences below `lg`; nav collapses into a full-screen mobile menu.

## Iteration Guide

To re-skin for another studio: swap the hero clip + 3 feature stills (keep a dark set with one warm practical light), retune the warm/cool tokens to the new footage, rewrite the copy in `data/site-content.ts` (single source of truth), and pick the one serif-italic accent word per headline. Leave the surface ladder, warm-scarcity rule, MaskLine/Reveal specs, glass, grain, and the three-icon set untouched — they are the system.

## Known Gaps

- Contact email `hello@yourstudio.com` and Instagram/Behance/LinkedIn are placeholder — swap before any real deploy.
- Waitlist and "Start a conversation" CTAs point to `#contact`; there is no live form/backend.
- Feature stills + hero video download from the asset CDN; object-position values are tuned to the shipped fish clip.
- The site is a marketing front with no authenticated or dynamic surface to verify beyond the single page.
