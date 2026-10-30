---
version: "1"
name: "Design System Inspired by Shelter"
description: "Shelter is a dark cinematic one-screen hero: a looping film with no overlay at all, three oversized lowercase display words staggered diagonally down the viewport in a masked slide-up reveal, and the interface reduced to corner furniture — a minimal top nav with sliding-underline links and a white pill CTA, three small stat counters pinned to the frame's corners. There is no accent color: the entire system is black, white, and white at two working alphas. Type is Inter Tight everywhere; motion is one GSAP timeline on power4.out that unmasks the words, then fades the small print."
colors:
  black: "#000000"           # page canvas + video loading fallback — the only background
  white: "#ffffff"           # display words, stat numbers, nav, logo
  soft: "white/80"           # the single hero paragraph
  muted: "white/50"          # stat captions
  cta: "bg-white text-black · hover rgba(255,255,255,0.86)"
  selection: "inverted — white background, black text"
typography:
  display: { fontFamily: "'Inter Tight', system-ui, sans-serif", weights: "500", role: "display words clamp(84px, 15vw, 280px), leading 0.82, tracking −0.035em, lowercase, nowrap" }
  stat:    { fontFamily: "'Inter Tight', system-ui, sans-serif", weights: "500", role: "counters clamp(22px, 2.6vw, 44px), leading none, tracking tight" }
  body:    { fontFamily: "'Inter Tight', system-ui, sans-serif", weights: "400", role: "paragraph 13px leading-relaxed · captions 11px leading-snug · nav 14px — all lowercase" }
spacing:
  inset: "3vw horizontal edge inset for everything — nav padding, word anchors, stat corners"
  vertical: "words at top-[13vh] / top-[37vh] / top-[61vh] · paragraph top-[46vh] · stats top-[15vh] and bottom-[5vh]"
  nav: "px-[3vw] py-7 · links gap-9 · right cluster gap-10"
  container: "h-svh min-h-[640px] overflow-hidden — one viewport, never scrolls"
rounded:
  pill: "9999px — the CTA button, the only rounded surface"
  none: "everything else is bare text on film; no cards, no borders, no radii"
motion:
  ease: "power4.out for the entrance timeline · cubic-bezier(0.22, 1, 0.36, 1) for hovers"
  entrance: "one GSAP timeline — .word-inner {yPercent: 112 → 0, 1.5s, stagger 0.14} at 0.15 · .fade-in {opacity 0, y 22, 1.1s, stagger 0.09} at 0.6 · header {opacity 0, 1s} at 0.3"
  hover: "nav underline scaleX 0→1 with transform-origin swap (260ms) · CTA scale 1.03 + background dip to 86% white (300ms) · active scale 0.98"
  reduced-motion: "timeline registered inside gsap.matchMedia('(prefers-reduced-motion: no-preference)') + CSS transition kill-switch"
components:
  nav: "absolute top bar — ring-and-dot SVG logo + lowercase wordmark left; lowercase links with sliding underline + white pill 'start today' right; links hidden below md"
  display-words: "three lowercase h1s in overflow-hidden wrappers — 'shelter' top-left, 'user' upper-right, 'info' lower-center-left; a Z-shaped reading path"
  stats: "value + caption pairs, text-left or text-right, pinned to three corners — +90k / +2.7b / +450k"
  paragraph: "one 240px-wide lowercase sentence parked in the left midfield"
  video-bed: "fullscreen object-cover loop, no overlay, no poster — black canvas shows during buffer"
---

# Design System Inspired by Shelter

## Overview

Shelter treats the viewport as a poster, not a page. The whole composition is **one black screen**: a looping background film with **no overlay of any kind**, and three oversized lowercase words — *shelter*, *user*, *info* — staggered diagonally down the frame in a Z-shaped reading path. Nothing is centered. The words anchor to viewport coordinates (`13vh`, `37vh`, `61vh`; `3vw` from either edge), so the composition is a fixed piece of typography that happens to have video playing underneath.

Everything else on screen is deliberately small. A one-sentence paragraph, 240px wide and set at 13px, sits in the left midfield like a caption. Three stat counters pin to the corners the words don't occupy — top-right, bottom-left, bottom-right — each a medium-weight number over an 11px caption at half opacity. The nav is a single row: a ring-and-dot logo mark, four lowercase links with a sliding hairline underline, and the page's only solid object, a **white pill CTA**. The scale gap between the 280px display words and the 11px captions *is* the hierarchy; there are no cards, borders, shadows, or panels anywhere.

Color discipline is absolute: **there is no accent color**. The system is black, white, and white at two working alphas (`white/80` for the paragraph, `white/50` for captions). The inverted CTA and the inverted text selection are the only "color events" on the page. Because there's no dimming overlay, the footage itself must be dark — the design delegates contrast to the asset.

Motion is one **GSAP timeline** on `power4.out`: each display word rises out of an `overflow-hidden` wrapper (`yPercent: 112 → 0`, 1.5s, staggered 0.14s), the paragraph and stats fade up in DOM order from 0.6s, and the header crossfades in alongside. After the 2-second entrance the page is still — the only motion left is the film loop and two micro-hovers (an underline that wipes left-to-right and reverses out the other side, and a CTA that swells 3%).

**Key Characteristics:**
- **Poster composition** — absolute positioning against `vw`/`vh` coordinates; no flow layout, no grid, no max-width.
- **Z-path typography** — three display words alternate left / right / center-left, pulling the eye diagonally down the frame.
- **No overlay** — the video is raw; black `#000` is only a loading fallback, not a scrim.
- **Two-alpha text system** — full white for structure, `white/80` for voice, `white/50` for whispers; no grays.
- **Corner-pinned data** — stats live at the frame's edges like registration marks, never in the composition's center.
- **One solid object** — the white CTA pill is the single opaque surface and the page's only conversion moment.
- **Masked reveal** — words don't fade in, they rise from behind a clipping edge; the wrapper/inner split is the system's signature move.
- **Lowercase everything** — nav, headline, paragraph, captions, button; the voice never raises its case.

## Colors

> Source: `src/index.css` + the utility classes in the single App file.

### Surface
- **Black** ({colors.black}): set on `html, body` and repeated as `bg-black` on the container. It is the loading fallback and the letterbox — once the film buffers, the footage is the real surface.
- **No overlay**: there is deliberately no gradient, scrim, or dimming layer between film and type. Contrast management belongs to the footage (keep it dark, low-detail, slow).

### Text
- **White** ({colors.white}): display words, stat numbers, nav links, logo — structure is always full white.
- **Soft** ({colors.soft}): the hero paragraph only — present but subordinate to the display words around it.
- **Muted** ({colors.muted}): stat captions — labels that whisper under their numbers.

### Interactive
- **CTA** ({colors.cta}): the inverted pill — white ground, black text. Hover dips the ground to 86% white while the pill scales 1.03; active compresses to 0.98.
- **Selection** ({colors.selection}): selecting any text inverts it — a detail that keeps even the browser chrome on-system.

## Typography

> One family. Inter Tight, three weights (400/500/600), loaded from Google Fonts — and 600 is never actually reached on this page. Hierarchy is built from size and alpha, not weight or family changes.

- **Display** ({typography.display}): `clamp(84px, 15vw, 280px)` at weight 500. The tight `0.82` leading and `−0.035em` tracking make each word a solid block; `white-space: nowrap` and `user-select: none` keep the poster intact.
- **Stats** ({typography.stat}): `clamp(22px, 2.6vw, 44px)`, `leading-none`, `tracking-tight` — the same voice as the display words, four octaves down.
- **Body** ({typography.body}): 13px relaxed for the paragraph, 11px snug for captions, 14px for nav links, 15px for the wordmark. Everything is lowercase by class, not by copywriting — the type system enforces the voice.

**Rule:** if a heavier weight than 600 is ever requested, clamp down to 600 — never synthesize.

## Layout

- **Container**: `relative h-svh min-h-[640px] w-full overflow-hidden` — exactly one viewport, no scroll, with a 640px floor for short screens.
- **Primitive**: absolute positioning only. Every element carries its own `vw`/`vh` coordinates; there is no flow, grid, or flexbox in the composition (flex appears only inside the nav row).
- **Edge system**: `3vw` is the universal horizontal inset — nav padding, left words, right stats all share it. Bottom stats sit at `5vh`; the top-right stat at `15vh` clears the nav.
- **Stacking**: video (base) → `<main>` content at `z-10` → header at `z-20`.
- **The Z-path**: word 1 top-left (`3vw/13vh`) → word 2 upper-right (`right 3vw/37vh`) → word 3 lower-center-left (`24vw/61vh`). The paragraph (`3vw/46vh`) fills the pocket the path leaves open on the left.

## Elevation

None. No shadows, no borders, no glass, no blur. Depth is expressed two ways only: the clipping wrappers during the entrance (type emerging from *behind* an invisible edge), and the film moving behind static type. The CTA's hover scale is the closest thing to elevation on the page.

## Shapes

- **Pill** ({rounded.pill}): the CTA button alone.
- **Everything else** ({rounded.none}): bare text set directly on footage. The logo mark — an 18px SVG of a 1.5px-stroked ring with a filled 3px dot — is the only graphic element, and even it is geometry, not iconography.

## Components

### Navbar
{components.nav}. The underline hover is the page's micro-signature: a 1px `currentColor` line that wipes in from the left (`transform-origin: left`) and, on mouse-out, exits through the right (`transform-origin: right`) — 260ms on `cubic-bezier(0.22, 1, 0.36, 1)`.

### Display words
{components.display-words}. Each is an `<h1 class="display-word word-inner lowercase">` inside an `absolute overflow-hidden` wrapper — the wrapper is the mask, GSAP moves the inner. The `.display-word` utility carries all the typography; position classes live on the wrapper.

### Stats
{components.stats}. A shared `Stat` component takes `value`, `label`, `align` — number in the stat voice, caption in `mt-2 text-[11px] lowercase text-white/50`. All three carry the `fade-in` hook class.

### Paragraph
{components.paragraph} — `max-w-[240px] text-[13px] lowercase leading-relaxed text-white/80`, also a `fade-in` target.

### Video bed
{components.video-bed}. Attributes exactly: `autoPlay muted loop playsInline aria-hidden` — and no `poster`, so the black canvas does the buffering.

## Motion

- **Entrance** ({motion.entrance}): one timeline, `defaults: {ease: 'power4.out'}`, registered inside `useGSAP({ scope: container })`. Resulting beats — header 0.30, *shelter* 0.15, *user* 0.29, *info* 0.43, paragraph 0.60, +90k 0.69, +2.7b 0.78, +450k 0.87.
- **Hovers** ({motion.hover}): driven by semantic CSS tokens (`--nav-link-dur: 260ms`, `--cta-dur: 300ms`, shared ease `cubic-bezier(0.22, 1, 0.36, 1)`) — not by GSAP.
- **Reduced motion** ({motion.reduced-motion}): the timeline never registers under `prefers-reduced-motion: reduce` (everything renders in final state), and a CSS block zeroes the hover transitions.
- **Nothing scrolls**: Lenis is initialized as infrastructure, but the page fits one viewport — there are no scroll triggers.

## Do's and Don'ts

### Do
- Keep the footage dark and slow — the design has no scrim to save a bright clip.
- Keep every string lowercase; the case discipline is the brand voice.
- Position against `vw`/`vh` so the poster holds at any aspect ratio.
- Let the `clamp()` handle display type across breakpoints — no per-breakpoint font sizes.
- Keep the CTA as the only solid, the only pill, the only inversion.

### Don't
- Don't add an overlay, gradient, or vignette over the video.
- Don't introduce an accent color, icon library, or imagery beyond the logo mark.
- Don't center the composition or convert it to flow layout — the off-balance is the design.
- Don't swap the masked reveal for a plain fade; the clip-and-rise is the signature.
- Don't let the display words wrap or become selectable.

## Responsive

- **One breakpoint**: `md:` hides/shows the nav links (`hidden md:flex`); logo and CTA persist on mobile.
- **Type**: both clamps (`15vw` display, `2.6vw` stats) scale continuously — no stepped sizes.
- **Positions**: viewport-relative coordinates mean the Z-path composition survives every size; the `min-h-[640px]` floor protects short landscape screens.
- **No scroll at any size**: `h-svh` + `overflow-hidden`.

## Iteration Guide

To re-skin this system for another brand, change only:
1. The three display words (keep them short — one word each, nowrap).
2. The paragraph sentence and three stat value/caption pairs.
3. The nav link labels and CTA text.
4. The background film.
5. The logo mark inside the 18px SVG frame.

Leave the coordinates, clamps, alphas, and timeline untouched — they are the system.

## Known Gaps

- **Lenis without scroll**: Lenis is installed and initialized although the page never scrolls — harmless, and ready if sections are added below the hero, but strictly unnecessary today.
- **Video downloads from the asset CDN** to `public/hero.mp4` and serves locally — output quality depends heavily on the footage, so keep replacements dark and slow.
- **Stat numbers are static copy** — there is no count-up animation; the numbers simply fade in with their captions.
