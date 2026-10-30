---
version: "1"
name: "Design System Inspired by Metery"
description: "Metery is cinematic nature-tech in one fixed viewport: a golden-hour wildflower meadow film fills the screen under a bottom-heavy scrim, a solid white pill navigation floats at the top, and a giant centered headline sits in the lower third above a white CTA and four white partner wordmarks. Type is a single self-hosted Inter Variable; motion is pure CSS — one hero-rise keyframe reused at three delays (0 / 0.12s / 0.24s) on one soft ease. Nothing scrolls, nothing uses an animation library, and no color exists outside the film except ink on white."
colors:
  fallback: "#0d130f"        # body behind the video — visible only while the film buffers
  white: "#ffffff"           # all hero text, the nav pill, the CTA, the partner marks
  ink: "#17271e"             # dark text on white surfaces (nav links, CTA label)
  btn-dark: "#111512"        # the Sign up pill — near-black with a leaf undertone
  scrim: "black/10 → black/15 → black/75 (top → bottom)"
  on-video: "white/90 — the subheading's only concession to hierarchy"
typography:
  display: { fontFamily: "'Inter Variable', ui-sans-serif, system-ui, sans-serif", weights: "500", role: "headline text-6xl → md:text-8xl, leading 1.02, tracking-tight" }
  body:    { fontFamily: "'Inter Variable', ui-sans-serif, system-ui, sans-serif", weights: "400", role: "subheading text-lg → md:text-2xl, white/90, max-w-xl" }
  ui:      { fontFamily: "'Inter Variable', ui-sans-serif, system-ui, sans-serif", weights: "500-800", role: "nav links 15px/500 · logo 19px/700 · CTA 17px/600 · partner wordmarks 22px/600-700 · boxed R 15px/800" }
spacing:
  nav-top: "top-5 (md: top-6), pill max-w-[1090px], py-2.5 pl-6 pr-2.5"
  nav-rhythm: "links gap-10 after ml-10 · auth cluster ml-auto gap-5"
  hero-stack: "headline → mt-7 sub → mt-10 CTA · flex spacers 1.4 above / 1 below"
  logo-row: "gap-x-16 gap-y-6, mb-9 from the viewport bottom"
rounded:
  pill: "9999px — nav shell, Sign up"
  cta: "0.75rem (rounded-xl) — Get Started, the page's only soft rectangle"
  mark-box: "8px — the boxed R in the rowan wordmark"
motion:
  ease-soft: "cubic-bezier(0.16, 1, 0.3, 1)"       # every animation and transition
  dur-slow: "800ms — entrance"
  dur-quick: "200ms — hovers"
  hero-rise: "one keyframe (opacity 0 + translateY 22px → visible), reused as .hero-rise / -2 (0.12s) / -3 (0.24s), fill both"
  press: ".btn-press → scale(0.98) on :active"
  hover: "nav links opacity 90 → 60 · Sign up opacity → 85 · CTA -translate-y-[1px]"
  reduced-motion: "hero-rise classes set to animation:none + global 0.01ms guard"
components:
  nav: "solid white floating pill — logo + exploded-pie mark, 4 links (hidden <md), Log in text link, near-black Sign up pill; shadow 0_12px_40px_rgba(0,0,0,0.18)"
  hero: "min-h-[100dvh] section — film, scrim, then a centered max-w-[1400px] flex column using two flex spacers (1.4 / 1) instead of fixed offsets"
  cta: "white rounded-xl px-8 py-4, ink text, lifts 1px on hover, presses to 0.98"
  logo-row: "four white partner wordmarks built from type + tiny inline SVGs (boxed R, three bars, globe) — no images"
  logomark: "pie chart split into three exploded segments, single currentColor SVG, 240×240 viewBox at 22px"
---

# Design System Inspired by Metery

## Overview

Metery is one shot, held. The entire site is a **single fixed viewport**: a golden-hour wildflower meadow plays on loop behind everything, darkened by a **bottom-heavy scrim** (`black/10 → black/15 → black/75`) so the composition gets heavier exactly where the content sits. There are no sections below the fold, no scroll listeners, no animation library — the page is closer to a movie poster with a working nav than to a landing page, and that restraint is the design.

The layout is a **three-band composition**. Top: a solid white pill nav floating over the film — not glass, not blurred, an opaque object whose confidence *is* the brand's. Middle-low: the headline "Scale with Metery" at up to `text-8xl` weight 500, deliberately medium-weight so the sunlight does the drama, with a `white/90` subheading and a white CTA under it. Bottom edge: four **partner wordmarks built entirely from type and three tiny inline SVGs** — no logo images, no icon library, just 22px semibold wordmarks that read as a credible ecosystem row. Vertical placement is engineered with **two flex spacers (`flex-[1.4]` above the headline, `flex-1` below the CTA)** — the lower third position holds at every viewport height without a single fixed offset.

Color discipline is absolute: the film supplies every hue, the UI supplies only white and two darks — `{colors.ink}` for text on white surfaces and `{colors.btn-dark}` for the Sign up pill, both green-cast near-blacks pulled from the meadow's shadow range rather than pure neutrals. The page background `{colors.fallback}` exists only for the buffering instant (and a poster frame covers even that).

Motion is **one CSS keyframe used three times**: `hero-rise` (22px rise + fade on `cubic-bezier(0.16,1,0.3,1)`, 800ms) fires at 0s, 0.12s, and 0.24s across headline, CTA, and logo row. Hovers are 200ms opacity or 1px-lift moves; every pressable compresses to 0.98. That is the complete motion inventory — and it ends fully visible, permanently.

**Key Characteristics:**
- **One viewport, no scroll** — `min-h-[100dvh]` composition; adding sections means a new page.
- **Film + scrim as the only surface** — bottom-heavy gradient anchors the lower-third content.
- **Opaque white chrome** — the nav pill and CTA are solid white objects, not translucent glass.
- **Flex-spacer composition** — `flex-[1.4]` / `flex-1` position the content band proportionally at any height.
- **Type-built partner logos** — four wordmarks from text + three micro-SVGs; zero image assets beyond the film.
- **Single variable font** — self-hosted Inter Variable covers 400–800; no second family.
- **Pure CSS entrance** — one keyframe, three delays, one ease; no JS animation at all.
- **Green-cast darks** — #17271e and #111512 instead of black; the UI stays in the meadow's shadow family.

## Colors

> Source: the film, the scrim, and three declared values.

### Surface
- **The film**: all color on the page. Golden-hour warmth, pink and white blooms — the palette is licensed from the footage, not the stylesheet.
- **Fallback** ({colors.fallback}): a deep green-black behind the video, chosen to match the footage's darkest range so a slow connection shows a plausible frame, not a void. The poster image makes it near-invisible in practice.

### Chrome
- **White** ({colors.white}): the nav pill, CTA, all hero text, and partner marks. On video it is always full-strength except the subheading's `white/90`.
- **Ink** ({colors.ink}): text on white surfaces only — nav links, logo, CTA label. A green-black, not `#000`; on the white pill it reads softer than pure black without losing contrast.
- **Button dark** ({colors.btn-dark}): the Sign up pill. One step warmer-darker than ink; the two darks never swap roles.

### Scrim
- `{colors.scrim}` — the gradient is the layout's gravity. The `to-black/75` floor is what lets pure white type sit on moving footage without a text-shadow anywhere.

### Accent
- None. No purple, indigo, or neon; nothing competes with the sunlight.

## Typography

### Font Families

- **Inter Variable** — self-hosted via the official Fontsource package (`@fontsource-variable/inter`), imported once in `index.css`. One file, all weights 400–800, no runtime Google Fonts request.

### Hierarchy

| Token | Size | Weight | Tracking | Use |
|---|---|---|---|---|
| `{typography.display}` | text-6xl → md:text-8xl, leading 1.02 | 500 | tight | "Scale with Metery" |
| sub | text-lg → md:text-2xl | 400 | normal | The one sentence, `white/90`, max-w-xl |
| partner marks | 22px | 600–700 | tight | rowan / Solvane / veldt / Windmere |
| logo | 19px | 700 | tight | "Metery" + 22px mark |
| CTA | 17px | 600 | — | "Get Started" |
| nav links | 15px | 500 | — | Features / Pricing / Docs / Community |
| boxed R | 15px | 800 | leading-none | Inside the rowan box |

### Principles

- **Medium-weight display.** The 8xl headline at weight 500 (not 700+) is the taste decision that keeps the page editorial — the film provides the intensity, the type stays composed.
- **One family, no mono register**: hierarchy is size and placement, never a second face or uppercase tracking games.
- **Copy is finite**: fourteen strings total. The subheading is the only sentence on the page.

### Note on Font Substitutes

Use the variable Inter via Fontsource exactly as pinned — a static-weights Google Fonts link changes loading behavior and misses intermediate weights. If Inter is unavailable, the `ui-sans-serif` fallback holds the layout but loses the 500-weight display nuance; do not substitute a "similar" grotesque.

## Layout

### Spacing System

- Nav: `top-5` (md `top-6`), pill `py-2.5 pl-6 pr-2.5` — the asymmetric right padding lets the Sign up pill nest flush.
- Hero column: `px-5`, `max-w-[1400px]`, centered text; headline → `mt-7` sub → `mt-10` CTA; logo row `mb-9` off the bottom edge with `gap-x-16` between marks.
- Vertical rhythm is proportional, not fixed: `flex-[1.4]` above the content band, `flex-1` between CTA and logo row. Taller viewports open the composition; nothing ever pins to a magic pixel offset.

### Grid & Container

- No grid. One absolutely-layered section (video → scrim → content column) and one floating header. The nav pill's `max-w-[1090px]` is narrower than the hero's `max-w-[1400px]` — the chrome sits inside the composition's frame.
- Z-order: video (base) → scrim → content (relative) → nav `z-50`.

### Whitespace Philosophy

The meadow is the whitespace. The middle band of the viewport is intentionally empty film — resist filling it with badges, stats, or a second CTA. The composition works because two-thirds of the screen is landscape.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | The film | Everything behind |
| scrim | 3-stop black gradient | Legibility floor |
| 1 | Solid white + `0 12px 40px rgba(0,0,0,0.18)` | The nav pill |
| 1 | Solid white, no shadow | The CTA |

One shadow on the whole page, under the nav. The CTA earns its presence from contrast alone; the partner marks and headline sit directly on the scrim with no glow, stroke, or shadow.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.pill}` | 9999px | Nav shell, Sign up |
| `{rounded.cta}` | 12px (rounded-xl) | Get Started |
| `{rounded.mark-box}` | 8px | The rowan "R" box |

The CTA being `rounded-xl` while everything else is a pill is deliberate — the conversion object has its own geometry.

### Iconography

No icon set. Three inline SVGs total, all brand marks: the Metery exploded-pie (three `currentColor` paths in a 240×240 viewBox, rendered at 22px), the veldt three-bars, the Windmere globe. All specified path-for-path; never redrawn, never replaced with an icon library.

## Components

### Nav ({components.nav})

A solid white pill floating over film: logo + mark left, four 15px links after `ml-10` (hidden below md), then `ml-auto` pushes Log in + the near-black Sign up pill to the right edge. Hovers are pure opacity (90 → 60 on links, → 85 on Sign up) at 200ms — no underlines, no background swells. It is present from first paint; the entrance choreography belongs to the hero only.

### Hero ({components.hero})

`min-h-[100dvh]` section: film (`autoPlay loop muted playsInline`, poster set), scrim, then the centered column with its two flex spacers. Headline and sub share `.hero-rise-2`; CTA and logo row share `.hero-rise-3` — two visual groups, one keyframe.

### CTA ({components.cta})

White `rounded-xl px-8 py-4`, ink text, `hover:-translate-y-[1px]` on the 200ms soft ease, `.btn-press` compression. The only rectangle-ish object on the page and the only element that moves upward on hover — a one-pixel lift, not a bounce.

### Partner row ({components.logo-row})

Four marks constructed from type: **rowan** (2.5px-bordered 8px-radius box holding an 800-weight R + lowercase bold wordmark), **Solvane** (wordmark only), **veldt** (three rounded bars + wordmark), **Windmere** (stroked globe + wordmark). They wrap as a flex row with `gap-y-6` on narrow screens. Keep them white, keep them type — replacing these with logo PNGs breaks the page's single-asset economy.

## Do's and Don'ts

### Do

- Keep the scrim exactly `from-black/10 via-black/15 to-black/75` — lighter floors break white-on-footage legibility.
- Keep the flex spacers at 1.4 / 1; they are the composition.
- Keep the nav pill and CTA solid white — no backdrop-blur, no translucency.
- Reuse `hero-rise` for any new element, choosing one of the three existing delays.
- Keep `min-h-[100dvh]` and the poster frame so mobile never flashes the fallback.
- Keep both darks in their lanes: ink for text, `#111512` for the Sign up fill.

### Don't

- Don't add sections, scroll triggers, or a scrollbar — one viewport is the format.
- Don't turn the nav into glass; opaque white is the identity.
- Don't heavier-weight the headline "for impact" — 500 is the design.
- Don't replace the partner wordmarks with image logos or an icon font.
- Don't introduce any hue: no accent color exists on this page.
- Don't animate with JS; the CSS keyframe at three delays is the complete engine.
- Don't drop the `prefers-reduced-motion` guard (both the class-level `animation: none` and the global kill-switch).

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px | Log in hidden; nav = logo + Sign up; headline 6xl; sub text-lg |
| sm | ≥640px | Log in returns |
| md | ≥768px | Nav links appear; headline 8xl; sub 2xl; nav drops to top-6 |

### Fluid Strategy

- The film covers at every ratio (`object-cover`); the content column re-centers; the logo row wraps with `gap-y-6` instead of shrinking.
- `100dvh` (not `h-screen`) keeps the composition honest under mobile browser chrome.

### Touch Targets

- CTA ≈ 56px tall; Sign up ≈ 41px; the whole nav pill is finger-friendly. Hovers degrade to nothing gracefully — `.btn-press` supplies the tactile feedback on touch.

### Media Behavior

- `autoPlay loop muted playsInline` + poster = safe on iOS; the poster is frame one of the same footage so the handoff is invisible.
- Reduced motion: the page renders complete and static instantly — the entrance classes are removed, not slowed.

## Iteration Guide

1. New footage must be golden-hour-graded with a dark lower third (or rely on the scrim harder) — test white type against the brightest frame.
2. A second page (pricing, docs) copies the nav verbatim and may reuse `hero-rise`; the meadow film stays exclusive to the hero.
3. More partners: extend the type-built pattern (wordmark + optional micro-SVG), keep 22px/600 scale, let the row wrap.
4. If a real product shot is ever needed, it belongs on a new page — never layered over this composition.
5. Localization: the headline must stay one line through `md`; if a translation runs long, drop to `md:text-7xl` rather than allowing a wrap.
6. Any new interactive element uses `--ease-soft` at 200ms and takes `.btn-press`.

## Known Gaps

- All links are `href="#"` — nav, Log in, Sign up, and the CTA are visual only.
- `@fontsource-variable/outfit` ships in package.json unused (leftover from an earlier direction) — remove or adopt deliberately.
- `public/images/still-2.jpg` and `still-3.jpg` are unused alternates; only `still-1.jpg` (the poster) is referenced.
- No mobile menu — by design at this scope, but a real site needs one once nav links matter.
- The film has no pause control; `prefers-reduced-motion` stops the entrance but not the video loop itself.
