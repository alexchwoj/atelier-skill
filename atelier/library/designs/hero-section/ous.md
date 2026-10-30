---
version: "1"
name: "Design System Inspired by Ous"
description: "Ous is a one-screen cinematic hero: a looping clifftop-at-sunset film framed in near-black with 7px of breathing room and 20px rounded corners, graded with a warm vignette and animated film grain. A colossal cream Archivo-800 wordmark 'Ous*' anchors the bottom-left; a browser-tab-shaped nav hangs from the top center with concave CSS notches; a right-aligned paragraph and a cream pill CTA sit bottom-right. One GSAP expo.out timeline plays it in. Strictly frame-black, cream, and whatever color the footage carries — no accent hue anywhere."
colors:
  frame: "#08080a — outer page background + the dark nav tab base"
  cream: "#f0e8d6 — wordmark, nav links, button text-on-dark"
  cream-dim: "#d6cdb9 — the right paragraph body"
  ink: "#100f0d — CTA button background + the arrow circle"
  tab: "#0a0a0c at 92% opacity — nav tab fill"
  none: "no blue, purple, teal, or neon anywhere; the only color is the film"
typography:
  display: { fontFamily: "'Archivo', 'Helvetica Neue', Arial, sans-serif", weights: "800", role: ".wordmark — clamp(7rem, 29vw, 25rem), letter-spacing -0.03em, line-height 0.82" }
  ui: { fontFamily: "'Archivo' (one family total)", weights: "400-500", role: "nav 15px · paragraph 15px leading-1.5 · button 17px medium" }
spacing:
  frame: "outer p-[7px] around the whole viewport; footage rounded-[20px]"
  wordmark: "bottom-[3.2vh] left-[2.4vw] — hugs the lower-left corner"
  copy: "bottom-[6.5vh] right-[3vw], w-[min(30rem,84vw)], items right-aligned"
rounded:
  frame: "20px — the footage container"
  tab: "22px concave notches + rounded-b-[22px] on the nav"
  pill: "rounded-full — the CTA and its arrow circle"
motion:
  entrance: "one GSAP timeline in gsap.context (cleanup via ctx.revert()), default ease expo.out — nav {y:-22, opacity:0, 0.9s} → wordmark {yPercent:14, opacity:0, 1.4s} at 0.1 → copy children {y:18, opacity:0, 1s, stagger 0.12} at 0.5"
  grain: "CSS .grain — fractalNoise SVG, opacity 0.16, mix-blend overlay, 0.6s steps(2) infinite; disabled under prefers-reduced-motion"
  hover: "CTA arrow circle rotates 45deg on group-hover (transition-transform duration-500 ease-out); nav links fade cream on hover"
components:
  film: "autoplay/muted/loop video, object-cover full-bleed inside the frame; grade + grain stacked above"
  tab-nav: "browser-tab shape via .tab-notch ::before/::after concave corners (box-shadow trick) hanging from top center"
  wordmark: "h1 = 'Ous' span + a small superscript '*' span (0.22em, mt-0.12em)"
  pill-cta: "cream pill 'Get started' + ink arrow-circle; the only button on the page"
---

# Design System Inspired by Ous

## Overview

Ous is a single interaction-free screen that behaves like a movie poster: a looping cinematic clip of a person on a grassy clifftop above golden sunset clouds, framed in near-black `#08080a` with **7px of margin on every side** and **20px rounded corners** — the frame itself is part of the composition, letting the footage read as a held image rather than a full-bleed background. A warm vignette grade and an animated film-grain layer sit over the video to seat the type and give it a shot-on-film texture.

The identity is one word, oversized. **"Ous"** renders in **Archivo weight 800** at up to 25rem, tracking −0.03em, leading 0.82, cream `#f0e8d6`, pinned to the bottom-left with a tiny superscript asterisk. Everything else is deliberately small and to the side: a browser-tab-shaped nav hanging from the top center (with hand-built concave CSS corners), a 23rem paragraph and a single cream pill CTA at bottom-right. **No accent color exists** — hierarchy is cream at two levels over the frame black, and the only chroma on screen is the sunset in the footage.

Entrance is one GSAP timeline on `expo.out`: the nav drops in, the wordmark rises from behind its own baseline, then the paragraph and button stagger up. It plays once and rests fully visible. After that the only motion is the looping film and the perpetual grain.

**Key Characteristics:**
- **Framed footage, not full-bleed** — 7px inset + 20px radius makes the video a held image on a black mat.
- **One giant grotesque word** — Archivo 800, `clamp(7rem, 29vw, 25rem)`, −0.03em, leading 0.82, with a superscript asterisk.
- **Browser-tab nav** — a dark tab hanging from top center, concave corners drawn purely in CSS (`.tab-notch` box-shadow trick).
- **Film grade + grain** — a warm radial+linear vignette plus an animated fractal-noise grain at 0.16 opacity, overlay blend.
- **Zero accent** — frame-black + two creams; all color is the sunset in the clip.
- **Single GSAP entrance** — `expo.out`, nav → word → copy stagger, `.from()` so nothing is ever stuck hidden.
- **One screen, no scroll** — `fixed inset-0`; depth is the film, not the page.

## Colors

- **Frame** ({colors.frame}): the mat around the footage and the base of the nav tab.
- **Cream ladder**: {colors.cream} for wordmark/nav/button text, {colors.cream-dim} for the paragraph — the only two text values.
- **Ink** ({colors.ink}): CTA fill + arrow circle; the one dark-on-cream inversion.
- **No accent** ({colors.none}): if emphasis is needed it comes from scale or position, never hue.

## Typography

- **Display** ({typography.display}): the wordmark is the layout. Weight 800 at 25rem with −0.03em tracking and 0.82 leading reads as a printed masthead.
- **UI** ({typography.ui}): Archivo again at 15-17px for nav, paragraph, and button — one family, no exceptions.

## Layout

- **The frame** ({spacing.frame}): `fixed inset-0` outer with p-[7px]; inner `section` rounded-[20px] holds the video + overlays.
- **Corner composition**: wordmark bottom-left, copy block bottom-right, nav top-center — the three anchors form a triangle around the footage's focal point.
- Stacking inside the frame: video (base) → `.grade` → `.grain` → nav (z-20) → hero content (z-10).

## Elevation

None beyond the frame. No shadows or glass; depth is the film's own dimensionality plus the vignette falloff and grain.

## Components

### The film
{components.film}. A ~5s silent 1916×1080 H.264 loop. Downloaded from the asset CDN and served locally; never a remote/placeholder URL.

### Browser-tab nav
{components.tab-nav}. Five links: About us · Community · Residencies · Courses · Questions. The concave corners are the signature — do not replace with a plain rounded bar.

### Wordmark
{components.wordmark}.

### Pill CTA
{components.pill-cta}. Cream pill with ink text; the arrow circle rotates 45° on hover — the only hover motion besides the nav link fade.

## Motion

{motion.entrance}. {motion.grain}. {motion.hover}. Reduced motion: grain animation off (CSS guard); the film simply loops.

## Do's and Don'ts

### Do
- Keep the 7px frame + 20px radius — the mat is the concept.
- Keep the wordmark at 800 weight and the superscript asterisk.
- Keep the concave tab corners and the grain + vignette grade.
- Keep the entrance on expo.out with the exact nav/word/copy timings.

### Don't
- Don't add an accent color, gradient, or glass — the footage is the palette.
- Don't full-bleed the video edge-to-edge; it must sit inside the frame.
- Don't swap Archivo or drop the −0.03em / 0.82 leading on the wordmark.
- Don't add sections, scroll content, or a second CTA; it is a one-screen hero.

## Responsive

- Wordmark scales via `clamp(7rem, 29vw, 25rem)`; positions use vh/vw so the corner triangle holds across widths.
- Copy block clamps `w-[min(30rem,84vw)]` so it never overflows on phones.
- The film stays `object-cover` centered at every ratio; the page never scrolls.

## Iteration Guide

To re-skin for another collective/brand: swap the film (keep a dark, single-warm-light clip), change the one word (short — it must fill the lower-left without wrapping), rewrite the paragraph and five nav labels. Leave the frame inset, grain/grade, tab-notch, cream ladder, and the GSAP timings untouched — they are the system.

## Known Gaps

- All links are `href="#"` placeholders — nav and CTA go nowhere.
- The film downloads from the asset CDN; the grade/grain are tuned to the shipped clifftop clip.
- No reduced-motion branch on the GSAP entrance (only the CSS grain is guarded).
