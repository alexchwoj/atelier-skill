---
version: "1"
name: "Design System Inspired by Nikki"
description: "Nikki is a one-screen cinematic hero: a pure-black canvas where a looping studio film supplies the only color — a green neon glow with a red light streak — and five Urbanist capitals spaced 0.42em apart own the frame. UI is outlined pills with white arrow chips, hairline dividers, and a white-alpha text ladder. One GSAP timeline plays the whole page in; after that, nothing moves but the film and a breathing scroll-mouse dot."
colors:
  canvas: "#000000 — html, body, and wrapper are all hard black"
  ink: "#ffffff — headline, tagline, labels"
  alphas: "white/95 Connect link · white/90 nav + mouse icon · white/85 socials · border-white/60 pill outlines (hover → white) · bg-white/40 divider hairline"
  chip: "#ffffff chip fill with #000000 arrow — the highest-contrast element on the page"
  selection: "rgba(84, 240, 156, 0.35) — text selection; the one green echo of the film in CSS"
  none: "no accent variable anywhere; the video is the palette"
typography:
  display: { fontFamily: "'Urbanist', ui-sans-serif, system-ui, sans-serif", weights: "500", role: "h1 — clamp(4rem, 13.5vw, 11.5rem), leading-none, five spans with 0.42em right margins (no letter-spacing)" }
  ui: { fontFamily: "'Urbanist' (same family — the site uses exactly one)", weights: "600-700", role: "nav 13px semibold tracking 0.08em · buttons 13-14px semibold tracking 0.04em · tagline 15px→18px bold tracking 0.06em" }
spacing:
  frame: "px-6 sm:px-10 lg:px-14 — one padding rhythm shared by header, hero, and bottom bar"
  rows: "header pt-6 · hero min-h-[calc(100svh-88px)] centered, pb-24 · bottom bar pb-7"
  gaps: "nav gap-10 · CTA row gap-6 · socials gap-6 · chip gap-3/gap-4"
rounded:
  pill: "rounded-full — the only radius on the page (buttons + arrow chips)"
motion:
  entrance: "one useGSAP timeline, defaults ease power3.out — nav {y:-24, 0.9s} → letters {y:60, 1.1s, stagger 0.07} at '-=0.45' → tagline {y:24, 0.8s} at '-=0.6' → CTA {y:20, 0.8s} at '-=0.5' → bottom {fade 0.9s} at '-=0.4'; all .from() with autoAlpha"
  loop: "CSS .mouse-dot — translateY 10px + opacity dip, 1.8s cubic-bezier(0.45,0,0.55,1), infinite, reduced-motion guarded"
components:
  film: "autoplay/muted/loop video, object-cover full viewport; 3 scrims — left from-black/85 via-black/25, bottom h-40 from-black/80, top h-28 from-black/70"
  pill-cta: "outlined pill (border-white/60 → white) + white circular arrow chip that nudges right 0.5 on group hover"
  headline: "five inline-block spans, N-I-K-K-I, margin-right 0.42em except the last"
  chrome: "logo mark (circle + folded triangle SVG) · center nav (hidden below md, no hamburger) · socials left / mouse icon center in the bottom bar"
---

# Design System Inspired by Nikki

## Overview

Nikki is built on a refusal: **the CSS contains no color**. The canvas is hard `#000000`, every character is white or a white alpha, and the entire chromatic identity — a green neon wash, one red light streak — lives inside the looping background film. Most hero pages pick an accent and repeat it across buttons and links; Nikki keeps its UI achromatic so the video reads as the brand. The single green trace a visitor can find in code is the text-selection tint, and almost nobody will ever see it.

The composition is a movie-poster equation: one word, stretched. The five capitals of NIKKI render as separate spans with `0.42em` right margins — not letter-spacing, so the intro can lift each letter individually — at up to 11.5rem. Everything else is furniture scaled small on purpose: 13px nav labels, outlined pills whose only flourish is a white circular chip holding a thin arrow, a hairline divider, three social glyphs, a breathing mouse indicator dead-center at the floor.

Entrance is one GSAP timeline on `power3.out`: header drops in, the five letters rise with a 0.07 stagger, then tagline, CTA row, and bottom bar overlap in on relative offsets. It plays once. After the intro the page is still — the film carries all ongoing motion, plus a 1.8s CSS loop on the scroll-mouse dot.

**Key Characteristics:**
- **Zero accent in CSS** — black canvas, white ink, alpha ladder; color is outsourced to the film.
- **Spaced-letter headline** — five spans at 0.42em gaps, `clamp(4rem, 13.5vw, 11.5rem)`, weight 500, leading-none.
- **Outlined pill + white chip** — `border-white/60` pills; the solid white chip with black arrow is the brightest object on screen.
- **One padding rhythm** — `px-6 sm:px-10 lg:px-14` for every row; the page reads as three horizontal bands.
- **Three scrims, one job** — left/bottom/top gradients seat the type without killing the glow.
- **Single-timeline entrance** — GSAP `.from()` tweens with autoAlpha and relative offsets; no scroll triggers, ever.
- **`svh` viewport math** — `min-h-svh` wrapper, `min-h-[calc(100svh-88px)]` hero, so mobile browser chrome never clips the layout.
- What Nikki does **not** do: no gradient text, no glassmorphism, no icon library, no second section, no hamburger.

## Colors

- **Canvas** ({colors.canvas}): declared on `html, body` and the wrapper — there is no lighter surface anywhere.
- **Alpha ladder** ({colors.alphas}): hierarchy is opacity, not hue. Hover always resolves to full `white`.
- **Chip contrast** ({colors.chip}): the white chip/black arrow pair is the CTA's focal point; both buttons share it.
- **Selection** ({colors.selection}): the one deliberate green in CSS, matching the film's glow.

## Typography

- **Display** ({typography.display}): the headline is the layout. Weight 500 keeps 11.5rem letters airy instead of heavy.
- **UI** ({typography.ui}): small, semibold, positive tracking — labels read as etched hardware against the film.
- One family total: Urbanist, loaded once from Google Fonts with full 100–900 variable range.

## Layout

- **Three bands** ({spacing.rows}): header at top, vertically-centered hero block, absolute bottom bar. All share {spacing.frame}.
- **Left-aligned hero**: headline, tagline, and CTA row sit on the left edge where the left scrim is strongest; the film's glow owns the right half.
- **Bottom bar symmetry**: socials left, mouse icon absolutely centered, `w-16` spacer right keeps the center honest.
- Stacking: video (DOM base) → three scrims → header/main/bottom at `z-10`.

## Elevation

None. No shadows, no borders except pill outlines and the divider hairline, no glass. Depth comes from the film's own light and the scrim falloff.

## Components

### The film
{components.film}. The clip is a 5.04s silent 1916×1080 H.264 loop. If it fails to load, a radial green-tinted gradient on black keeps the composition legible — never substitute stock footage.

### Pill CTA
{components.pill-cta}. Two sizes: header (`py-2 pl-5 pr-2`, h-7 chip) and hero (`py-2.5 pl-6 pr-2.5`, h-8 chip). The border brightens and the chip slides 2px — that is the entire hover vocabulary.

### Headline
{components.headline}. Each span is a GSAP target (`data-letter`); merging them into one string breaks both the spacing and the stagger.

### Chrome
{components.chrome}. All icons are hand-drawn inline SVGs on `currentColor` — logo mark, arrow, three socials, mouse outline.

## Motion

{motion.entrance}. {motion.loop}. Rules: load-time only, autoAlpha so nothing is ever stuck hidden, no ScrollTrigger, no whileInView. The film and the mouse dot are the only perpetual motion.

## Do's and Don'ts

### Do
- Keep the CSS achromatic — if an iteration needs emphasis, use scale or the white chip, never a hue.
- Keep the five-span headline structure and the 0.42em gaps; adjust `clamp()` bounds only.
- Keep all three scrims — removing the left scrim costs headline legibility over bright frames.
- Keep the relative-offset timeline; absolute delays drift the overlap feel.

### Don't
- Don't add an accent color, gradient text, or colored buttons — the film is the palette.
- Don't use letter-spacing on the h1 or wrap the letters.
- Don't swap GSAP for CSS keyframes or motion libraries; the stagger + offsets are the intro.
- Don't use `vh` — browser chrome on phones will clip the bottom bar.
- Don't add sections, scroll content, or a mobile menu; hero-only is the design.

## Responsive

- Nav links hide below `md` with no hamburger — the pill CTA remains the header's action.
- Headline scales purely via clamp between 4rem and 11.5rem.
- Padding steps `px-6 → sm:px-10 → lg:px-14`; structure never reflows.

## Iteration Guide

To re-skin for another studio: swap the film (keep it dark-set with one dominant glow color), replace the five letters (short names only — six-plus letters need a smaller clamp ceiling), rewrite the tagline and labels, redraw the logo mark. Leave the alpha ladder, pill/chip recipe, scrim stack, and timeline untouched — they are the system.

## Known Gaps

- All links are `href="#"` placeholders — nav, CTAs, and socials go nowhere.
- The GSAP entrance has no reduced-motion branch (only the CSS mouse dot is guarded).
- Single breakpoint behavior beyond `md` nav reveal is untested against ultra-wide (>2560px) viewports where the headline clamp ceiling flattens.
