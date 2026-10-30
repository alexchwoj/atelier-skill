---
version: "1"
name: "Design System Inspired by Marchie"
description: "Marchie is a single-page cinematic car-reveal landing whose entire experience is one full-screen video scrubbed frame-by-frame by scroll: the car starts under silk, the cover slides off, and the camera travels headlight → flank → rear as you scroll. Six text overlays fade in and out over the footage, each timed to the exact moment it describes. The palette is pure grayscale — near-black #0a0a0b frame, white type at four alphas — with zero accent; the silver car is the only color on screen. Jost light carries every word with italic emphasis clauses, Great Vibes scripts the one wordmark, and animated film grain sits over everything. The mechanic is all-intra video + in-memory Blob buffer + lerped currentTime seek + fixed overlays with [a,b] fade windows, driven by one GSAP ScrollTrigger and a rAF loop."
colors:
  bg: "#0a0a0b — page + html background, shows before the video buffers"
  fg: "#ffffff — headings, wordmark, primary CTA text"
  body: "rgba(255,255,255,0.75) (text-white/75) — section paragraph copy"
  hero-body: "rgba(255,255,255,0.85) (text-white/85) — the hero paragraph only, one notch brighter"
  muted: "rgba(255,255,255,0.5) (text-white/50) — section eyebrows; stat labels at /55"
  footer: "rgba(255,255,255,0.4) (text-white/40) — footer + copyright"
  hairline: "rgba(255,255,255,0.1–0.7) — logo oval border, progress rail, CTA outline"
  accent: "none — the silver car in the footage is the only chroma on the page"
typography:
  sans: { fontFamily: "'Jost', ui-sans-serif, system-ui, sans-serif", weights: "300-600 + italics", role: "everything — headings (font-light), body, nav, stats; italics carry the emphasis clause of each headline" }
  script: { fontFamily: "'Great Vibes', cursive", weights: "400", role: "the 'Marchie' wordmark inside the oval logo badge — nowhere else" }
spacing:
  insets: "left-6 → md:left-14 → lg:left-20/24; header px-6 pt-5 → md:px-10 md:pt-7"
  scroller: "SCROLL_VH = 700 → a 700vh empty div drives scroll; video + overlays are position:fixed"
rounded:
  logo: "rounded-[50%] — the oval nav badge (h-12 w-24 → md:h-14 md:w-28)"
  cta: "square — no radius on the two finale buttons (px-8 py-4)"
motion:
  engine: "one useEffect: fetch the all-intra mp4 as a Blob → object URL src (whole clip buffered in memory); one ScrollTrigger writes progress 0–1 into a ref; a rAF tick reads it every frame"
  seek: "target = p * (duration - 0.05); current += (target - current) * 0.14 → lerped currentTime seek, weighted not snappy; only writes when it moved > 0.001"
  overlay: "each section has an [a,b] progress window; opacity = min((p-a)/FADE, (b-p)/FADE) clamped 0–1 with FADE = 0.035; drift translateY((0.5 - r) * 36px); visibility hidden when ≤0.001, pointerEvents auto only when >0.5"
  rail: "fixed right-edge bar, scaleY(p) from top origin"
  grain: ".grain::after — fractalNoise SVG at 0.05 opacity, grain 8s steps(10) infinite; the only always-on motion, disabled under prefers-reduced-motion"
  deeplinks: "#p=0.5 scrolls to 50% on load; #debug=0.5 freezes the whole experience at that progress for screenshotting"
components:
  video-film: "fixed inset-0 z-0, object-cover; muted playsInline preload=auto, NEVER autoplayed — scroll drives it; first frame painted via currentTime = 0.001 on loadedmetadata"
  legibility: "radial vignette + top (h-32 from-black/50) + bottom (h-40 from-black/55) gradients, all pointer-events-none over the video"
  nav-badge: "oval CSS border with the Great Vibes wordmark; two uppercase text links + a two-bar hamburger whose top bar shrinks to w-6 on hover"
  overlay-section: "fixed inset-0 z-20, pointerEvents none; heading Jost light with one italic clause, tracking-nav eyebrow, /75 body"
---

# Design System Inspired by Marchie

## Overview

Marchie is a movie, not a page. The entire surface is a single ~10-second, 24fps clip of a silver grand tourer — covered in silk, then uncovered, then toured headlight to rear — and the user *is the playhead*: scroll position maps directly to `video.currentTime`. Nothing autoplays. Over that footage, six text overlays fade in and out inside precise `[a, b]` scroll windows, each timed to the exact frame it narrates: the reveal copy lands as the silk slides off the nose, the design copy lands on the headlight close-up, the stats land on the rear three-quarter.

The world is **pure grayscale**: a near-black `#0a0a0b` frame and white type at four alphas (85 for the hero line, 75 for body, 55/50 for labels, 40 for the footer). **There is no accent color** — the only chroma on screen is the silver car in the footage. Type is **Jost at light weights** for everything, with the *emphasis clause of each headline set in italic* ("A legend, *uncovered.*"), and a single **Great Vibes** script wordmark inside an oval nav badge. Animated film grain at 0.05 opacity unifies the whole thing with a shot-on-film texture.

The mechanic is exacting and is the entire brand: **all-intra video** (every frame a keyframe) is fetched as a **Blob and buffered in memory** so seeks are instant; a **single GSAP ScrollTrigger** writes normalized progress into a ref; a **requestAnimationFrame loop** reads that progress every frame and does three things — lerp the video's `currentTime` toward the target (weighting constant `0.14`, so scrubbing feels heavy, not twitchy), fade + drift each overlay by its window, and scale the progress rail. A CSS-only or autoplay version is a different, lesser thing.

**Key Characteristics:**
- **Scroll IS the playhead** — a 700vh empty scroller drives one ScrollTrigger; scroll progress maps to `video.currentTime` via a lerped seek. Everything visual is a pure function of progress `p`.
- **All-intra + Blob buffer** — the mp4 is re-encoded with `-g 1 -keyint_min 1` and fetched as an object URL so every seek is instant; without all-intra keyframes, scrubbing stutters.
- **Zero accent** — near-black frame, white type at four alphas; the silver car is the only color.
- **Jost light + italic clause** — headlines never bold; the emphasis half of each headline is italic. Great Vibes scripts only the wordmark.
- **[a,b] fade windows** — each overlay owns a scroll range; `FADE = 0.035` bands the edges; content drifts `translateY((0.5-r)*36px)` through the window.
- **Film grain over everything** — the one always-on animation, killed by `prefers-reduced-motion`.
- **Dev deep-links** — `#p=0.5` jumps to a scroll position, `#debug=0.5` freezes the experience for screenshots. Keep them.

## Colors

- **Frame** ({colors.bg}): the mat behind the footage and the pre-buffer background.
- **White ladder**: {colors.fg} for headings/wordmark, {colors.hero-body} for the hero paragraph only, {colors.body} for section body, {colors.muted} for eyebrows (stat labels at `/55`), {colors.footer} for the footer.
- **No accent** ({colors.accent}): emphasis comes from italic, scale, and position — never hue. If you re-skin to another subject, the footage supplies the only color; keep the UI grayscale.

## Typography

- **Sans** ({typography.sans}): Jost does everything at light weights; the italic clause is the entire typographic personality of each headline.
- **Script** ({typography.script}): Great Vibes appears once, in the oval badge. Do not use it for anything else.

## Layout

- **The scroller** ({spacing.scroller}): a 700vh empty div is the only tall element; the video and all six overlays are `position: fixed`, so the page never actually "scrolls" content — it scrubs.
- **Corner composition**: each overlay anchors to a different corner (hero bottom-left + top-left headline, reveal top-right, design bottom-left, craft top-left, performance centered, finale left) so the eye moves around the car as the camera does.
- **Insets** ({spacing.insets}) scale up by breakpoint.

## Elevation & Depth

No shadows, no glass, no cards. Depth is entirely the footage's own dimensionality plus the vignette falloff and the top/bottom legibility gradients. Film grain sits above everything at `z-60`.

## Components

### Video film
{components.video-film}. {components.legibility}.

### Nav badge + progress rail
{components.nav-badge}. The right-edge rail is `scaleY(progress)` from a top origin, hidden below `md`.

### Overlay section
{components.overlay-section}. Registered via an `overlay(a, b)` ref-callback that pushes `{ el, a, b }` into an array the rAF loop reads.

## Motion

{motion.engine}. {motion.seek}. {motion.overlay}. {motion.rail}. {motion.grain}. Dev: {motion.deeplinks}. Nothing is ever left permanently hidden — the hero is fully visible at `p = 0`, every other overlay resolves to opacity 1 at the center of its window.

## Do's and Don'ts

### Do
- Keep the all-intra re-encode (`-g 1 -keyint_min 1`) and the Blob-buffer seek — they are why scrubbing is instant.
- Keep the `0.14` lerp and `FADE = 0.035` — they are the feel.
- Keep headlines Jost light with exactly one italic clause.
- Keep the film grain and its reduced-motion guard.

### Don't
- Don't autoplay the video or drive it with CSS scroll-snap — it must be scrubbed via `currentTime`.
- Don't add an accent color, gradient, glass, or shadow — the car is the palette.
- Don't bold a headline or swap Jost / Great Vibes for "similar" fonts.
- Don't paraphrase the copy — the six sections' strings are verbatim, em-dashes included.

## Responsive

- Mobile-first; headlines step `text-[36–40px]` → `md:text-[52–54px]` → `lg:text-[62px]` (hero).
- The nav tagline hides below `sm`; the two nav links and the progress rail hide below `md`; the hamburger always shows.
- The video stays `object-cover` full-bleed at every ratio; the composition is fixed-viewport, never a scrolling column.

## Iteration Guide

To re-skin for another cinematic reveal (a watch, a sneaker, a building): swap the all-intra clip (keep a single-subject, single-light shot on near-black), retune each overlay's `[a, b]` window to the new footage's beats, and rewrite the six copy blocks + stats. Leave the grayscale system, the Blob-buffer + lerp engine, `FADE`, the grain, and the Jost-light + italic-clause rule untouched — they are the system.

## Known Gaps

- All links (`href="#"`) and the two finale CTAs are placeholders — they go nowhere.
- The clip downloads from the asset CDN; the vignette/grain are tuned to the shipped silver-car footage and its 10s/24fps timing.
- No reduced-motion branch on the scroll-scrub itself (only the CSS grain is guarded); on a touch device with reduced motion the film still scrubs.
- It is a marketing front — no forms, no backend, nothing dynamic beyond the scroll.
