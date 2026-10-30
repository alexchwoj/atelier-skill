---
version: "1"
name: "Design System Inspired by EnergZ"
description: "EnergZ is disciplined paper monochrome around a scroll-driven product film: seven viewport-height sections choreographed against 8 seconds of all-intra footage of a matte-black bottle, where the copy column swaps sides to follow the bottle through the frame. Geist at weight 450 with tight negative tracking, Geist Mono uppercase micro-labels, hairline rings instead of shadows, and exactly one chromatic color — a terminal green reserved for checkmarks. The scrub engine is blob-buffered with a half-frame seek gate, and the page ships a polished SVG placeholder so it works with the footage absent."
colors:
  canvas: "#fafafa page · #ffffff video stage (blends with the pure-white footage)"
  ink: "#171717 headings + CTA fill · #4d4d4d body · #666666 muted · #8f8f8f footer micro-copy"
  hairline: "#ebebeb — borders, spec rows, metric rules; depth = shadow-[0_0_0_1px] rings, zero drop-shadows"
  green: "#297a3a — checkmarks ONLY; the page's entire chromatic budget"
typography:
  sans: { fontFamily: "Geist (next/font)", weights: "400-500, headlines at 450", role: "H1 clamp(2.6rem,5.5vw,4.6rem) tracking −0.06em · H2s −0.05em · story words clamp(3rem,7vw,6rem) — never bold" }
  mono: { fontFamily: "Geist Mono", weights: "400", role: "eyebrows, metric labels, spec dt, copyright — 11px uppercase tracking 0.071em, always" }
spacing:
  container: "max-w-[1440px] px-5 md:px-10 — copy hugs the edges so it never overlaps the centered bottle"
  stage: "7 × min-h-screen sections over one sticky 100vh video layer (-mt-[100vh] trick)"
  rhythm: "post-stage sections py-24 md:py-32 · spec/metric rows py-5 on hairlines"
rounded:
  md: "6px — buttons, cards"
  pill: "9999px — the Pre-order header pill only"
motion:
  scrub: "useScroll progress → lerp 0.15/frame → time = min(current, 0.9995) × duration → seek only if !video.seeking && Δ > (1/24)/2 — blob-buffered so seeks never hit network"
  choreography: "scroll 0→1 maps linearly onto 8s: bottle centered (copy LEFT) → lid close-ups bottle-left (copy RIGHT) → drifts right (copy LEFT) → returns center"
  entries: "whileInView {opacity 0→1, y 32→0}, 0.7s easeOut, once, amount 0.5 · hero staggers 0/0.1/0.2/0.3"
  story: "scroll-linked fade-through: opacity keyframes 0.12/0.38/0.62/0.88 → 0/1/1/0, y 36→0"
  lenis: "lerp 0.09, anchor offset −64; disabled under reduced motion; native scroll always owns the page"
components:
  stage: "ScrollProductStage — sticky video + children stacked over it; ProductVideoBackground handles blob/states/scrub"
  fallback: "status unavailable → polished SVG bottle placeholder; the page must work with no footage"
  nav: "fixed h-16, transparent → bg/85 blur past 12px scroll; skewed-Z wordmark; Pre-order pill"
  metrics: "dl rows on hairlines — 24 hr / 12 hr / 100% in display sizes with mono labels"
  story: "three one-word moments: Charge. Train. Recover. — placed opposite the bottle"
  cta: "bottle cutout with a blurred contact-shadow ellipse, then centered pitch + pre-order"
---

# Design System Inspired by EnergZ

## Overview

EnergZ sells a bottle by never letting you stop looking at it. One 8-second film — a matte-black bottle orbited on a pure-white set — sits sticky behind **seven viewport-height sections**, its timeline scrubbed by your scroll position. The design's core contract is the **choreography table**: at every scroll range, the copy column sits on the *opposite* side of the frame from wherever the bottle is. Hero and Design read left while the bottle centers; Smart Lid and Performance jump right as the bottle drifts left for its close-up; the story words swing back left as it drifts right. Text and product never collide, and the swap itself becomes the page's rhythm.

The visual system is **paper monochrome with a Vercel accent** (in the literal sense: Geist, hairlines, near-white). The canvas is `#fafafa` but the video stage stays pure `#ffffff` so footage and page share one surface — the bottle appears to sit *on the page*, not in a player. Type discipline is the brand: **Geist at weight 450** — never bold — with negative tracking up to −0.06em, answered by **Geist Mono 11px uppercase** for every eyebrow, metric label, and spec key. Depth is a 1px ring (`shadow-[0_0_0_1px]`), never a drop-shadow. And the entire chromatic budget is **one green**, `{colors.green}`, spent exclusively on feature-list checkmarks — the page says "confirmed" in color and everything else in ink.

The engineering is spec'd as tightly as the type: the film is **blob-buffered** before any scrubbing, seeks are **gated at half a source frame** and only issued when the previous seek finished, scroll smoothing runs through Lenis at 0.09 with native scroll always in command, and if the footage is missing entirely the stage renders a **polished SVG bottle placeholder** — the page is designed to degrade, which is exactly why it feels engineered.

**Key Characteristics:**
- **Copy follows the bottle** — the seven-section choreography table is the layout's law; column side is a function of footage time.
- **Sticky-stage scrub** — one 100vh video layer, children stacked over it with `-mt-[100vh]`; scroll progress = film time.
- **Weight-450 headlines** — presence from size and negative tracking, never boldness.
- **Mono as metadata** — one exact recipe (11px / uppercase / 0.071em) for every label on the page.
- **Hairline elevation** — rings and rules; zero drop-shadows anywhere.
- **One green** — checkmarks only; even the CTA is ink.
- **Half-frame seek gate** — (1/24)/2 threshold + seeking flag = scrub smoothness as a contract.
- **Graceful absence** — SVG placeholder state means the design survives its own asset failing.

## Colors

- **Canvas vs stage** ({colors.canvas}): the two whites are deliberate — `#fafafa` gives paper warmth, `#ffffff` matches the footage set so the video has no edges.
- **Ink ladder** ({colors.ink}): four grays from headline to footer micro-copy; ink also fills every button.
- **Hairline** ({colors.hairline}).
- **Green** ({colors.green}): checkmarks at 16px stroke 2.5. Nowhere else — not links, not accents, not hovers.

## Typography

- **Geist Sans** ({typography.sans}): the 450 weight is the identity — headlines read engineered, not shouted. Story words go to `clamp(3rem,7vw,6rem)` single-word scale.
- **Geist Mono** ({typography.mono}): one recipe, ~20 appearances, zero variation. If a new label appears, it uses the recipe or it doesn't ship.

## Layout

- **Container** ({spacing.container}): 1440px max, copy in `max-w-lg/md/sm` columns pinned left or right per the table.
- **Stage** ({spacing.stage}): the `-mt-[100vh]` overlap is the load-bearing trick — content scrolls over the sticky film.
- **Post-stage** ({spacing.rhythm}): Specifications, CTA, and Footer return to flow on `bg-background` with `relative z-10`.

## Elevation

{colors.hairline} — rings only. The single soft shadow on the page is the CTA bottle's blurred contact ellipse, which is diegetic (it's the product's shadow, not the UI's).

## Components

### Stage + scrub
{components.stage}. Numbers: lerp 0.15, gate (1/24)/2, end-clamp 0.9995 (seeking exact duration can flash black). Mobile: video takes the top half (`mt-16 h-[52vh]`), sections bottom-anchor — text and bottle never share pixels.

### Fallback
{components.fallback} — plus loading state keeps poster visible with zero layout shift.

### Nav
{components.nav}. Mobile panel with Escape-close and full aria wiring is part of the spec, not a nicety.

### Metrics & specs
{components.metrics}; specifications repeat the same row anatomy in a 2-column grid — one pattern, two densities.

### Story & CTA
{components.story} · {components.cta}.

## Motion

{motion.scrub} · {motion.choreography} · {motion.entries} · {motion.story} · {motion.lenis}. Every animated component checks `useReducedMotion()` and renders static when true. No loops, no parallax, no scroll hijacking.

## Do's and Don'ts

### Do
- Keep footage on a pure-white set; the stage's `#ffffff` depends on it.
- Keep the choreography table in sync if sections are reordered — column side must match bottle position.
- Keep headlines at 450 with negative tracking; keep mono labels on the one recipe.
- Keep the blob buffer and seek gate; both are required for smooth scrubbing.

### Don't
- Don't add a second color; green is checkmarks only.
- Don't use drop-shadows — rings and rules carry all depth.
- Don't let any copy column cross the bottle's side of the frame.
- Don't bold anything above 500.
- Don't skip the placeholder state — the page must build and demo with zero videos present.

## Responsive

- Mobile: film in the top half, copy bottom-anchored (`items-end pb-20/24`) — the collision-avoidance strategy rotates from horizontal to vertical.
- Desktop `md:`: full-bleed film, `items-center`, side-pinned columns.
- All display type on `clamp()`; menu with Escape + aria required below `md`.
- Verify no text overlaps the bottle at 1440×900 and 1920×1080 — that check is part of the definition of done.

## Iteration Guide

To re-skin for another product, change only:
1. The film (8s, pure-white set, all-intra re-encode) + poster + cutout — then re-derive the choreography table from where the product sits per second.
2. Copy strings per section, the three metrics, the spec table, the story verbs.
3. The wordmark (keep one styled glyph like the skewed Z as the lockup's signature).
4. The accent hex — still checkmarks only.

Leave the scrub numbers, choreography law, weight-450 rule, mono recipe, and hairline system untouched — they are the system.

## Known Gaps

- **No .webm shipped** — the loader tries it first by design; adding one is a free performance win later.
- **Pre-order goes to an anchor, not a checkout** — commerce is out of scope.
- **Assets download from the Fivefold CDN**; swapping footage requires redoing the choreography table, not just the file.
- **Story sections are scroll-linked, not whileInView** — reordering them without adjusting the stage height changes their fade windows.
