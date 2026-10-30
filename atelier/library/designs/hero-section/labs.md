---
version: "1"
name: "Design System Inspired by Labs"
description: "Labs is a dark cinematic one-screen hero for an internet provider: a looping film of neon green light streaks over pure black, a centered Inter Tight headline where a single word turns italic, a floating black-glass navigation pill, and one white CTA. The discipline is total: every UI element is strictly black and white — all chroma on the page belongs to the video. There is exactly one animation: the film fades in over 1.5 seconds; everything else renders statically."
colors:
  black: "#000000 — page background + loading fallback"
  white: "#ffffff — headline, logo, CTA fill"
  soft: "white/85 — subheadline"
  nav: "white/90 links → white on hover · pill surface black/50 + backdrop-blur-md"
  cta: "white fill, black text · hover white/90"
  chroma: "none in UI — the neon lime streaks (#8FE821-range) live only in the video"
typography:
  display: { fontFamily: "'Inter Tight', Inter, sans-serif", weights: "600 + italic 600", role: "two-line headline 42/64/84px, leading 1.06, tracking tight; one word italic" }
  body:    { fontFamily: "'Inter', sans-serif", weights: "400-600", role: "sub 15-17px relaxed · nav 14px medium · logo 17px medium · CTA 15px semibold" }
spacing:
  nav: "px-6 sm:px-10 pt-6 · pill px-2 py-1.5, links px-4 py-2"
  hero: "centered column with pt-[14vh] — the composition sits below center so the brightest streaks own the top half"
  rhythm: "headline → mt-7 sub → mt-9 CTA"
rounded:
  pill: "rounded-2xl — the nav capsule"
  button: "rounded-xl — the CTA"
motion:
  entrance: "one tween on the whole page: video opacity 0 → 1 over 1500ms ease on loadeddata"
  hover: "transition-colors only — nav links brighten, CTA dips to white/90"
  none: "no scroll effects, no staggers, no reveals — all text is visible from first paint"
components:
  nav: "logo (ChevronsRight glyph + 'Labs') left · glass-dark capsule right with five 14px links, hidden below md"
  headline: "'Connecting you to / a faster future.' — the single word 'faster' in italic, everything else upright, pure white"
  cta: "one white rounded-xl button, 'Get started now', no icon"
  video-bed: "fullscreen object-cover loop at z-0, fade-in via React state; content at z-10, no overlay"
---

# Design System Inspired by Labs

## Overview

Labs sells speed by refusing to move. The whole page is **one dark screen**: a film of neon lime light streaks sweeping across a black void, and over it a centered, two-line Inter Tight statement — *Connecting you to / a faster future.* — where exactly one word, *faster*, tips into italic. That italic is the entire typographic gesture. Below it, one soft subheadline and one white button. Nothing else exists.

The color system is a refusal: **the UI owns no color at all**. Headline, nav, and CTA are strictly white-on-black; every photon of chroma on the page comes from the video's lime streaks. This division of labor — film does the drama, interface does the clarity — is what makes the page feel engineered rather than decorated, which is exactly the brand argument an ISP wants to make.

The chrome is one floating object: a **black-glass capsule** (`bg-black/50 + backdrop-blur-md`) holding five nav links, hovering unanchored in the top-right like a HUD element. The logo is a stock `ChevronsRight` glyph — two chevrons pointing forward, the cheapest possible "fast" — and its restraint is the point.

Motion discipline is absolute: the only animation on the page is the video itself fading from black over **1.5 seconds** when its data loads. No staggers, no reveals, no scroll effects — the text is simply there, readable from first paint. On a page whose background never stops moving, static type reads as confidence.

**Key Characteristics:**
- **One italic word** — emphasis by posture, not color, weight, or size; *faster* leans forward while the sentence stands still.
- **Zero-chroma UI** — black and white interface over a colorful film; the video is the palette.
- **Below-center composition** — `pt-[14vh]` drops the text block so the brightest streaks play uncovered in the top half.
- **HUD capsule nav** — one glass-dark pill floating top-right; no bar, no border, no logo lockup competing with it.
- **Single-fade entrance** — the film fades in; nothing else animates, ever.
- **No overlay** — text sits directly on footage; the composition (not a scrim) protects legibility.
- **One viewport, no scroll** — `h-screen overflow-hidden`; the hero is the whole site.

## Colors

> Source: Tailwind utilities in the single App file; no CSS variables.

### Surface
- **Black** ({colors.black}): the page, the fallback while the film buffers, and the nav pill's tint (`black/50` over blur).
- **Chroma** ({colors.chroma}): the video's neon lime streaks are the only color — and no UI element ever borrows it. Do not "pick up" the green for accents; the separation is the system.

### Text & interactive
- **White** ({colors.white}) for structure; **soft** ({colors.soft}) for the subheadline; **nav** ({colors.nav}) links rest at 90% and reach 100% on hover.
- **CTA** ({colors.cta}): the only solid object — white fill, black text, hover dips the fill to `white/90`.

## Typography

- **Display** ({typography.display}): Inter Tight semibold, `42px → 64px → 84px`, leading 1.06, tracking tight. Two authored lines with a hard `<br/>`; the word *faster* wrapped in `<em>` — italic 600 is required (clamp to italic 500 if unavailable, never fake it).
- **Body** ({typography.body}): Inter for everything small — 15–17px subheadline at 85% white, 14px nav, 17px logo, 15px CTA.

**Rule:** emphasis in this system is italic, never color. If a second emphasis is ever needed, italicize it — do not reach for lime.

## Layout

- **Root**: `relative h-screen overflow-hidden bg-black font-sans` — exactly one viewport.
- **Nav**: absolute top strip, `flex justify-between px-6 sm:px-10 pt-6` — logo left, capsule right.
- **Hero**: full-height centered flex column with `pt-[14vh]` pushing the block below true center; `px-6` guards mobile edges.
- **Stacking**: video `z-0` → nav and hero `z-10`. No intermediate layers.

## Elevation

None. No shadows, no borders, no cards. The nav capsule's backdrop-blur is the page's only depth cue — it reads as glass because the streaks smear behind it.

## Shapes

- **Capsule** ({rounded.pill}): the nav pill, `rounded-2xl` rather than a full pill — a soft rectangle, not a stadium.
- **Button** ({rounded.button}): the CTA at `rounded-xl`. Two radii on the whole page, both slightly squared — nothing fully round.

## Components

### Navbar
{components.nav}. Links transition color only. Below `md` the capsule vanishes entirely — mobile gets logo + hero, no menu.

### Headline
{components.headline}. Pure white always: no gradient, no color span. The italic carries everything.

### CTA
{components.cta} — `px-7 py-3.5`, semibold, hover softens fill.

### Video bed
{components.video-bed}. Attributes: `autoPlay loop muted playsInline`; opacity driven by React state on `loadedData`, transitioning 1500ms ease. The film downloads from the asset CDN to `public/labs-video.mp4` and serves locally.

## Motion

- **Entrance** ({motion.entrance}) — the whole choreography.
- **Hovers** ({motion.hover}).
- **Everything else** ({motion.none}). Adding a reveal or stagger to this page breaks its argument: on a moving background, stillness is the luxury.

## Do's and Don'ts

### Do
- Keep footage lime-on-black, slow, and seamless — the fade-in assumes a dark first frame.
- Keep the italic exclusive to one word.
- Keep the interface colorless; let the film be the palette.
- Keep the text block below center (`pt-[14vh]`).

### Don't
- Don't add a scrim, gradient, or vignette over the video.
- Don't color the headline or borrow the video's lime for UI.
- Don't add icons beyond the single ChevronsRight mark.
- Don't animate text entrances — static is the design.
- Don't let the page scroll.

## Responsive

- Headline steps `42 → 64 (sm) → 84 (lg)`; sub steps `15 → 17 (sm)`.
- Nav capsule is `hidden md:flex`; logo persists everywhere.
- Centered flex means no breakpoint-specific layout work — only type scales.

## Iteration Guide

To re-skin for another brand, change only:
1. The two headline lines (keep one italic word).
2. The subheadline and CTA label.
3. The five nav labels and logo glyph/text.
4. The film at `public/labs-video.mp4` (keep it dark with one hue).

Leave the zero-chroma rule, the 14vh offset, the single fade, and the two radii untouched — they are the system.

## Known Gaps

- **All links are `href="#"` placeholders** — hero ships without target pages.
- **No mobile menu** — the capsule simply hides below `md`; navigation on mobile is intentionally out of scope.
- **Video is the palette**: swap in footage with a different hue and the brand changes with it — that's a feature, but it means the film choice is a design decision, not an asset slot.
