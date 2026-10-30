---
version: "1"
name: "Design System Inspired by Somic"
description: "Somic is editorial zinc minimalism on a light canvas: a misty-forest hero with a floating pill navbar, a white about section that physically overlaps the hero through a negative margin and 25px rounded top, and a scroll-driven features section where a fixed dusk-forest background sits behind a sticky column and three glass cards that reveal once. One font (DM Sans, italic included), a twelve-step zinc scale where elevation is a 1px hairline instead of a shadow, and exactly one accent: two 8px ember-orange dots punctuating a divider. Calm is the product and the design argues it."
colors:
  scale: "12 named zinc steps obsidian #09090b → snow #ffffff; never pure #000000"
  canvas: "paper #f4f4f5 page · snow #ffffff elevated section + pill navbar"
  ink: "graphite #18181b body · obsidian headlines/dark buttons · fog/ash helpers"
  hairline: "cloud #ececee — borders and the divider line; shadows only on the floating navbar/dropdown"
  ember: "#ff5a00 — TWO 8px dots on the about divider. Nowhere else, ever."
  dark-side: "features section runs white text over photography with black/20-30 glass"
typography:
  single: { fontFamily: "'DM Sans', system-ui, sans-serif", weights: "300-700 variable + italic", role: "every role — hero 96px with an italic light phrase, statement 42px, cards 24px, UI 14px. No second family." }
spacing:
  overlap: "hero mb-[-25px] + about rounded-t-[25px] + z-10 — the sections physically shingle"
  sections: "about py-20/32 · features py-20/40/48 with sticky column py-32"
  grids: "features lg:[400px_1fr] xl:[460px_1fr], gaps 24/48"
rounded:
  pill: "9999px — navbar, buttons, feature nav chips"
  card: "1.5rem features cards · 1rem card media · 25px the about section's top corners"
motion:
  reveal: "IntersectionObserver at 0.15, once per card, unobserve after: opacity-0 translate-x-16 → visible, 700ms ease-out; fallback renders everything visible if IO is missing"
  active: "second observer at 0.6 drives the sticky nav's active state"
  hamburger: "two 2px bars, translateY ±3px → ±45° rotate, 300ms cubic-bezier(0.77,0,0.175,1); dropdown scales from origin-top on the same curve"
  hovers: "transition-colors only — no transforms on buttons"
components:
  navbar: "floating snow pill, brand 'Somic.', animated hamburger, 192px dropdown — the page's only drop shadows"
  hero: "full-viewport moss photograph, bottom-anchored centered copy, italic-light emphasis, glass CTA bar with long/short copy swap"
  about: "white shingled section: centered intro, two circle-icon pill buttons, ember-dot divider, logo + 42px manifesto"
  features: "fixed forest bg + sticky left column (h2, active-state chip nav, CTA bar) + three glass cards: logo, title, 16:9 UI shot, description"
  logo: "SomicLogo — four rounded soundwave bars, one fill prop, used in ink and in white/80"
---

# Design System Inspired by Somic

## Overview

Somic sells calm writing software, and the page performs calmness instead of claiming it. The structure is three moves. First, a **misty-forest hero** — full-viewport photograph, copy settled at the *bottom* of the frame (not the center), a floating pill navbar hovering alone at the top. Second, a white about section that doesn't merely follow the hero but **physically shingles over it**: the hero ends in `mb-[-25px]`, the about section rises with `rounded-t-[25px]` and a higher z-index — paper laid over a photograph. Third, a **scroll-driven features section** where the background is a fixed dusk forest and three glass cards slide in from the right, once each, while a sticky left column tracks which card you're reading.

The palette is a **twelve-step zinc scale** with theatrical names (obsidian → graphite → slate → iron → steel → fog → ash → mist → cloud → paper → snow) and two laws: never pure black — `obsidian #09090b` is the deepest ink — and **elevation is a hairline, not a shadow**. Cards and buttons separate from the canvas by a 1px `cloud` border; the only drop shadows on the page belong to the floating navbar and its dropdown, because they genuinely float. Then one heresy, rationed to the pixel: **ember `#ff5a00` appears exactly twice**, as two 8px dots punctuating the about divider. The entire page earns its restraint so that sixteen square pixels of orange can feel loud.

Type is a **single-family system**: DM Sans does the 96px hero, the 42px manifesto, buttons, badges, and body — with the hero's emotional beat carried by an *italic light* phrase ("the noise") instead of a second font. Motion is equally frugal: an animated hamburger on a signature curve (`cubic-bezier(0.77,0,0.175,1)`), one-time card reveals via IntersectionObserver with an explicit no-IO fallback, and color-only hovers. Nothing bounces. Nothing loops.

**Key Characteristics:**
- **Shingled sections** — negative margin + rounded top + z-index: the layout's most ownable move.
- **Bottom-anchored hero copy** — the photograph breathes; the words wait at the floor of the frame.
- **Hairline elevation** — 1px `cloud` borders instead of shadows everywhere except the two genuinely floating objects.
- **Two ember dots** — the entire accent budget: 8px, twice, on one divider.
- **Single font, italic as seasoning** — DM Sans everywhere; emphasis is posture (italic light), never a new family.
- **Fixed-background depth** — the features section scrolls content over a stationary forest, giving parallax weight with zero JS.
- **Sticky column + one-time reveals** — reading position mirrored in the nav chips; cards never re-hide (and render visible if IntersectionObserver is absent).
- **Glass on the dark side only** — black/20-30 + blur appears exclusively over photography.

## Colors

> Source: `tailwind.config.js` extend.colors + `:root` vars in `index.css`.

- **The scale** ({colors.scale}): twelve named steps — use the names, not raw zinc-xxx utilities, so intent survives edits.
- **Canvas vs ink** ({colors.canvas} · {colors.ink}): paper page, snow surfaces; graphite working text, obsidian for headlines and the two dark buttons.
- **Hairline** ({colors.hairline}): `cloud` is the border, the divider line, and the muted button fill — the hardest-working neutral on the page.
- **Ember** ({colors.ember}): never on text, fills, or buttons. If a redesign needs a third orange element, the answer is no.
- **Dark side** ({colors.dark-side}): over photography, text is white at 100/80/60/40 and surfaces are black-alpha glass — the light system's exact negative.

## Typography

{typography.single} — one family, both moods: upright for information, *italic font-light* for the hero's emotional phrase. Weights walk 300–700 but headlines sit at 400; hierarchy comes from the 96→42→24→16 size ladder, not boldness.

## Layout

- **The shingle** ({spacing.overlap}): hero `mb-[-25px]`, about `rounded-t-[25px] relative z-10`. Do not replace with plain stacking — the 25px lip is the page's signature silhouette.
- **Features grid** ({spacing.grids}): sticky left column (`lg:h-screen justify-between py-32`) holds headline, chip nav, and CTA; the right column scrolls three cards past it.
- **Section rhythm** ({spacing.sections}); container paddings `px-5/6 → md:px-10 → lg:px-16`.

## Elevation

Hairlines on the light side, glass on the dark side, and exactly two drop shadows (navbar pill, dropdown) — both attached to objects that hover in space. A card with a shadow on the white section is a bug.

## Shapes

{rounded.pill} · {rounded.card}. The 25px top radius of the about section is the same radius language as the cards — the section itself behaves like a card laid over the hero.

## Components

### Floating navbar
{components.navbar}. The hamburger is two bars, not three — `translateY(±3px)` closed, `rotate(±45°)` open, 300ms on the signature curve; the dropdown scales from `origin-top` on the same curve. Toggle `aria-expanded`.

### Hero
{components.hero}. Copy verbatim, including the italic split: `Own your voice / without *the noise*`. The CTA bar swaps long copy for "No blank pages. Just ideas, written." below `sm`.

### About
{components.about}. The two pill buttons share one anatomy — white icon circle + uppercase label — in inverse color schemes (obsidian/snow and cloud/graphite).

### Features
{components.features}. Chip nav clicks `scrollIntoView({block:'center'})`; active state is driven by a 0.6-threshold observer, reveals by a 0.15-threshold observer that unobserves after firing.

### Logo
{components.logo} — four rounded bars reading as a soundwave: "voice" as a mark, one `fill` prop for both ink and white contexts.

## Motion

{motion.hamburger} · {motion.reveal} · {motion.active} · {motion.hovers}. Ship the `prefers-reduced-motion` guard always. The no-IntersectionObserver fallback is non-negotiable: content must never be stuck invisible.

## Do's and Don'ts

### Do
- Keep photography mid-dark with soft bottom edges — white hero text sits directly on it (only a black/20 wash).
- Keep the ember budget at exactly two dots.
- Keep one font; reach for italic before reaching for a new family.
- Keep hairlines as the elevation system on light surfaces.

### Don't
- Don't use pure #000000 anywhere.
- Don't add drop shadows to cards or buttons.
- Don't replace the shingle overlap with plain section stacking.
- Don't let reveal animations re-hide content or run without the IO fallback.
- Don't introduce a second accent or move ember onto text/buttons.

## Responsive

- Hero heading: `text-5xl → sm:7xl → md:8xl → lg:[96px]`; CTA copy swaps at `sm`.
- Features: single column below `lg` — sticky, chip nav, and column CTA all disappear; cards keep their reveal.
- About bottom area stacks below `md`. Body uses `overflow-x: clip`.

## Iteration Guide

To re-skin for another calm product, change only:
1. The five photographs (keep hero mid-dark, features-bg near-black).
2. Copy strings per section (keep the italic phrase in the hero).
3. The three feature title/description pairs and their UI shots.
4. The ember hex — still exactly two dots.

Leave the shingle mechanic, zinc scale, hairline law, single-font rule, and observer thresholds untouched — they are the system.

## Known Gaps

- **All CTAs are inert** — "Start for free", "Say hello", "Stay informed" and nav links go nowhere; wire routes/forms at production.
- **Imagery downloads from the asset CDN** to `public/` with solid-color fallbacks specified — the app-UI shots (feature-1/2/3) define the product's look as much as the code does.
- **`slate`, `iron`, `steel`, `fog`, `ash`, `mist` are defined but lightly used** — they exist so extensions stay on the scale instead of inventing grays.
- **Port 6050 is shared with another Fivefold showcase** (Login 004) — irrelevant in isolation, collides only if both dev servers run at once.
