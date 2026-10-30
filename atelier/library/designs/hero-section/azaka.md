---
version: "1"
name: "Design System Inspired by Azaka"
description: "Azaka is a dark cinematic hero where the background film follows your mouse: an all-intra portrait clip is seeked, never played, so the model turns her head toward the cursor. Two massive Inter Tight words pin to opposite screen edges and drift on pointer parallax; the UI is hairlines and white-alpha text; the cursor is a custom two-layer instrument — a glued dot and a lagging ring carrying turn-hint chevrons. Strictly black, white, and alpha tints. One 100vh screen, no scroll, and the only thing that ever moves after the intro is whatever your hand does."
colors:
  bg: "#050505 — near-black, page and main"
  white: "#ffffff — headline words, logo, links"
  alphas: "white/90 menu · white/80 footer labels · white/75 intro paragraph · ring border rgba(255,255,255,0.85)"
  vignette: "radial-gradient(120% 90% at 50% 50%, transparent 55%, rgba(0,0,0,0.45) 100%) — seats type without dimming the face"
  none: "no accent, no hue, anywhere"
typography:
  display: { fontFamily: "'Inter Tight', 'Inter', sans-serif", weights: "500", role: ".headline — clamp(56px,10.5vw,190px), leading 0.86, tracking −0.035em" }
  ui:      { fontFamily: "'Inter', system-ui, sans-serif", weights: "400-600", role: "logo 15px semibold tracked 0.08em · menu/links 13.5-14px · footer 13px" }
spacing:
  frame: "px-8 md:px-12, py-7 — header top, footer bottom, intro left rail"
  words: "'Creative' top-[26%] left-[3vw] · 'Direction' top-[52%] right-[3vw] — a diagonal across the model's shoulders"
  intro: "top-[44%], max-w-[230px] — tucked under 'Creative'"
rounded:
  none: "no radii anywhere except the two cursor circles"
motion:
  scrub: "mouse x → pose ∈ [−1,1] (linear, /0.35 sensitivity) → pose lerp 0.09/frame → poseToTime across four anchors (FWD_L 0.15 · LEFT_MAX 1.5 · FWD_R 4.7 · RIGHT_MAX 5.95) → seek gated on !video.seeking && Δ > 1/48s"
  intro: "one GSAP timeline, power4.out — headlines {yPercent:60, 1.4s, stagger 0.12} at 0.2 · UI fades {y:24, 1.0s, stagger 0.08} at 0.7"
  parallax: "headline wrapper quickTo x ±7px / y ±4px, 0.8s power3.out"
  cursor: "dot quickTo 0.08s power2.out (glued) · ring 0.45s power3.out (trails) · hover: ring scales 1.7, border fades to /35, chevrons hide"
  hover: "underline-swipe: the existing underline exits right then redraws from left, 0.5s out-expo"
components:
  film: "blob-buffered all-intra video, poster crossfade 700ms, never play() — currentTime is the only control"
  cursor: "dot + ring in mix-blend-difference with ◀ ▶ glyphs at the ring's inner edges — the ring literally tells you the film is steerable"
  headline: "two h1 words on opposite edges inside one data-parallax wrapper, pointer-events-none"
  chrome: "AZAKA® + Menu top row · four service labels bottom row · 230px intro block left-center"
---

# Design System Inspired by Azaka

## Overview

Azaka's entire identity is one interaction: **the page looks back**. The background is a portrait film of the model against black studio — but it never plays. It's an all-intra clip loaded into memory as a blob and *seeked* frame-by-frame, mapped to your cursor: mouse left and she turns left, mouse right and she turns right, center and she faces you. The mechanic runs on four timeline anchors (two near-identical "forward" frames bracket the left- and right-turn segments, so crossing center never jumps), a 0.09 pose lerp, and a seek gate at 1/48s — numbers, not vibes, and the numbers are the reason it feels like eye contact instead of a gimmick.

Everything else on the page is deliberately quiet so the film can perform. Two massive **Inter Tight** words — *Creative* top-left, *Direction* mid-right — pin to opposite edges at 190px max, crossing the model's shoulder line like titles on a movie poster, drifting a few pixels on pointer parallax so they feel suspended rather than printed. The UI is hairline furniture: a tracked wordmark, one Menu link, a 230px intro paragraph, four service labels along the floor. **No accent color exists**; hierarchy is white at three alphas over `#050505`, with a soft radial vignette seating the corners.

The second signature is the **cursor**: a 6px dot glued to the pointer and a 44px ring that trails it on a slower ease, both in `mix-blend-difference`. Inside the ring, two tiny chevrons (◀ ▶) — an instruction manual four characters long, telling you the film is steerable. Hover any link and the ring swells while the chevrons vanish: the affordance switches from "steer" to "click."

**Key Characteristics:**
- **Seek, don't play** — the film is a scrubber; `currentTime` is the only playback API used.
- **Four-anchor pose map** — forward/left/forward/right timestamps; the duplicate forward frames make center-crossing seamless.
- **Poster-edge typography** — two words, opposite corners, one diagonal; parallax gives them depth without motion cost.
- **Two-layer cursor with a manual** — dot for precision, ring for character, chevrons for instruction.
- **Difference blending** — cursor inverts against whatever it crosses; white UI stays legible over the film with no scrims beyond one vignette.
- **Hairline interactions** — the underline-swipe redraw is the only link effect; nothing lifts, glows, or scales except the cursor ring.
- **One screen, no scroll** — `overflow: hidden`; the page's depth is temporal (the film) not spatial.
- **Strict monochrome** — black, white, alpha. Nothing else.

## Colors

- **Background** ({colors.bg}) with the **vignette** ({colors.vignette}) as the only overlay — the face must never sit behind a scrim.
- **Text ladder** ({colors.alphas}): three working alphas of white; no grays.
- **No accent** ({colors.none}): if an iteration needs emphasis, it gets scale or position, never hue.

## Typography

- **Display** ({typography.display}): `.headline` at `clamp(56px, 10.5vw, 190px)`, leading 0.86, tracking −0.035em, weight 500 — huge but light on its feet.
- **UI** ({typography.ui}): Inter for everything else; the wordmark's 0.08em tracking + superscript ® is the brand lockup.

## Layout

- **Frame** ({spacing.frame}): header and footer as full-width rows; everything else absolute.
- **The diagonal** ({spacing.words}): *Creative* at 26% height hugging left, *Direction* at 52% hugging right — the composition reads across the model's shoulders. Do not center either word.
- **Intro block** ({spacing.intro}): tucked under *Creative*, narrow enough to never touch the face.
- Stacking: poster/video 0 → vignette → headline 10 → UI 20 → cursor 90.

## Elevation

None. Depth comes from the film's own dimensionality, the parallax drift, and the blend-mode cursor. No shadows, borders, or glass.

## Components

### The film
{components.film}. Load order: fetch → blob → objectURL → `loadeddata` → seek to FWD_L → crossfade poster out over 700ms. If footage is swapped, the four anchors must be retuned to the new clip and the all-intra re-encode is mandatory (`-g 1 -keyint_min 1`) — a normal H.264 will stutter on every seek.

### Cursor
{components.cursor}. Skipped entirely on coarse pointers; the page falls back to native cursor and static video poster interactivity is unaffected.

### Headline + chrome
{components.headline} · {components.chrome}.

## Motion

{motion.scrub} — the signature. {motion.intro} · {motion.parallax} · {motion.cursor} · {motion.hover}. Reduced motion: CSS guard zeroes transitions; the film simply rests on its forward frame.

## Do's and Don'ts

### Do
- Keep the model against near-black so the film edge dissolves into the page.
- Keep the two forward anchors on visually identical frames.
- Keep the cursor chevrons — without them the scrub is undiscoverable.
- Keep seek gating (`!seeking && Δ > 1/48`) — removing it queues seeks and judders.

### Don't
- Don't `play()` the video, ever — autoplay/loop kills the entire concept.
- Don't ship a normal-GOP video; all-intra is non-negotiable.
- Don't center the headline words or let them wrap.
- Don't add icons, accents, scroll content, or a second section.
- Don't attach the parallax to the video — only type drifts; the film answers the mouse in pose, not position.

## Responsive

- Coarse pointers: custom cursor disabled; scrub still works via touch-move x-position; headline clamps to its 56px floor.
- Middle footer labels hide below `sm`; paddings step `px-8 → md:px-12`.
- The film stays `object-cover` centered at every ratio.

## Iteration Guide

To re-skin for another person or brand, change only:
1. The film + poster (all-intra re-encode, retune the four anchors).
2. The two headline words (keep them short; they must not wrap).
3. The intro paragraph, link label, wordmark, and four footer services.

Leave the pose math, seek gate, cursor spec, and monochrome rule untouched — they are the system.

## Known Gaps

- **All links are `href="#"` placeholders** — Menu and Know more go nowhere.
- **Film + poster download from the asset CDN**; the anchor timestamps are tuned to the shipped 6.04s clip.
- **Touch devices get the film without the cursor affordance** — steering still works but is undiscovered; an on-screen hint is a possible v2.
