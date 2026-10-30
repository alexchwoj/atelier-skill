---
version: "1"
name: "Design System Inspired by Mapple"
description: "Mapple is a headphone store compressed into one breathing viewport: three vertical finish panels — candlelit noir, polar silver, forest moss — that expand on hover like a bellows, revealing price, specs and a Buy Now pill while a giant translucent MAPPLE watermark develops behind the product. One Google Sans Flex family plays every role from 11px micro-caps to 13rem watermark; a liquid-glass nav pill with a moving specular sheen floats over everything. Motion is a GSAP state machine on power4.out — flexGrow is the animated property, and the page never scrolls."
colors:
  page: "#0e0d0b"            # body behind the panels — visible only during entrance
  noir-bg: "#161209"         # panel 01 — near-black amber
  noir-text: "#f2ead8"       # bone on noir; also noir's button fill
  frost-bg: "#c6cbd4"        # panel 02 — the light panel, silver-grey
  frost-text: "#24272d"      # ink on frost; also frost's button fill
  moss-bg: "#4d5744"         # panel 03 — desaturated forest
  moss-text: "#eaeddd"       # chalk on moss; also moss's button fill
  gold: "#c9a35c"            # noir accent + ::selection bg — the brand's warm metal
  steel: "#5b6474"           # frost accent
  bronze: "#c8a97e"          # moss accent
  muted: "theme text at 55% alpha — indexes, prices, descriptions, specs"
  watermark: "theme text at 7-8% alpha (32% white on the light frost panel)"
  glow: "accent at 14-35% alpha inside a 60vmin radial, blurred 64px"
typography:
  display: { fontFamily: "'Google Sans Flex', 'Google Sans', system-ui, sans-serif", weights: "700-800", role: "watermark clamp(4rem,13vw,13rem) w800 −0.04em lh0.82 · price H2 36/48px w700 · logo 18px w700" }
  body:    { fontFamily: "'Google Sans Flex', 'Google Sans', system-ui, sans-serif", weights: "400-600", role: "product description 13px relaxed · product name 18px semibold" }
  ui:      { fontFamily: "'Google Sans Flex', 'Google Sans', system-ui, sans-serif", weights: "400-500", role: "micro-caps register — nav links 11px .18em, eyebrow 11px .28em, index 11px .2em, specs 10px .2em, all uppercase" }
spacing:
  panel-bar: "24px x / 24px y → 32px (md)"      # idle label px-6 pb-6 md:px-8 md:pb-8
  details-stack: "12px between eyebrow/price/description · 16px to specs · 24px to CTA"
  image-floor: "10vh bottom padding (md: 8vh) keeps the product above the label bar"
  nav-top: "1.25rem (md: 1.75rem)"
rounded:
  pill: "9999px — nav shell, glass links, cart button, Buy Now CTA"
  none: "0 — panels are hard-edged and meet seamlessly"
motion:
  ease-out-expo: "cubic-bezier(0.16, 1, 0.3, 1)"   # only for the nav sheen sweep (1.2s)
  panel-ease: "power4.out 1.05s — flexGrow + product image, the signature weight"
  soft-ease: "power2.out — watermark (.9s in/.35s out), glow (.9s), idle label (.3s/.55s)"
  detail-rise: "fromTo y26→0, .75s power3.out, stagger .055, delay .18; exit .25s power2.in"
  entrance: "one power3.out timeline — panels yPercent6 .9s stagger.12 → images y70 1.1s −=.5 → labels y20 .8s −=.7 → header y−16 .7s −=.8"
  state-machine: "React active: index|null → useGSAP({dependencies:[active]}), every tween overwrite:'auto'"
  flex-ratios: "active 2.6 · idle 1 · compressed 0.7"
  reduced-motion: "JS multiplies every GSAP duration by 0 + global CSS 0.01ms guard"
components:
  panel: "flex-1 min-w-0 overflow-hidden cursor-pointer section — bg/text from its theme; will-change: flex-grow"
  watermark: "3 stacked MAPPLE lines, clamp(4rem,13vw,13rem) w800, theme watermark color, hidden until its panel is active"
  glow: "60vmin radial (accent → transparent 70%) blur-64px centered — opacity 1/.6/.25 by state"
  idle-label: "bottom bar — index over 18px name left, price right, all muted micro-type"
  details: "bottom-centered column — eyebrow, price H2, 13px description (max-w 24rem), specs line, Buy Now pill; pointer-events none except the active CTA"
  glass-nav: "liquid-glass pill — 4-stop white gradient over rgba(18,16,13,.28), blur(22px) saturate(180%), 6-layer inset shadow stack, ::before sheen sweeping 120%→−20% on hover, ::after bottom refraction"
  buy-cta: "theme buttonBg/buttonText pill, px-8 py-3, 13px semibold, CSS hover scale 1.05 (.3s)"
---

# Design System Inspired by Mapple

## Overview

Mapple is a store with no scroll, no grid, and no cards — the entire catalog is **three vertical color panels** standing shoulder to shoulder in one `100%`-height viewport. Each panel *is* a product: its background is the finish (`{colors.noir-bg}`, `{colors.frost-bg}`, `{colors.moss-bg}`), its text is the finish's counter-color, and a transparent-background render floats at its center over a soft accent glow. Browsing is a physical gesture: hover (or tap) a panel and it **inflates to `flexGrow: 2.6`** while its siblings compress to `0.7`, the product leans in at `scale 1.06`, a three-line **MAPPLE watermark** develops at 7% alpha behind it, and the commerce details — eyebrow, a 48px price, description, spec line, Buy Now pill — rise in with a 55ms stagger. Leave the layout and everything exhales back to equal thirds.

The second signature is the **liquid-glass nav pill** floating over the seam of all three panels: a 4-stop white gradient over smoked glass (`blur(22px) saturate(180%)`), four inset hairline highlights plus two drop shadows, a `::before` specular sheen that sweeps across the pill on hover like light over lacquer, and a blurred `::after` refraction hugging the bottom edge. It is the only fixed chrome — logo, three links, a `Cart (0)` button — and it stays legible over noir, frost and moss alike because its glass is tinted, not solid.

Type is radical in its economy: **one variable family (Google Sans Flex) plays every role.** What would be a mono font elsewhere is the same family at 10–11px, uppercase, tracked to .2em; the display voice is the same family at weight 800 crushed to `line-height 0.82`. Hierarchy comes entirely from size, weight, case and alpha — `{colors.muted}` (55% of the theme text) carries every secondary string.

Motion is a **React state machine rendered by GSAP**: one `active: index | null` value re-runs a `useGSAP` block whose tweens all carry `overwrite: 'auto'`, so mid-flight direction changes never stack. The load entrance is a single overlapping `power3.out` timeline (panels → images → labels → header). Panels and images move on `power4.out` at 1.05s — heavy, damped, expensive-feeling; details answer faster on `power3.out`.

**Key Characteristics:**
- **Panels as products** — three full-height color fields, each a complete theme (8 tokens) from one `products.js`.
- **flexGrow is the animation** — 2.6 / 1 / 0.7 ratios on `power4.out` 1.05s; nothing slides, the layout itself breathes.
- **Watermark on activation** — MAPPLE ×3 at `clamp(4rem,13vw,13rem)`, 7–8% alpha (32% white on the light panel), visible only while its panel is active.
- **Liquid-glass nav** — gradient-on-smoke pill with sheen sweep and bottom refraction; the page's only fixed element.
- **One font, all registers** — Google Sans Flex from 10px micro-caps to 13rem watermark; no second family, no true mono.
- **Theme-driven buttons** — each Buy Now inverts its panel (text color becomes the fill).
- **No scroll, ever** — `height: 100%` chain + `overscroll-behavior: none`; mobile stacks the panels vertically and the same flexGrow trick works on the column.

## Colors

> Source: the three panel themes in `products.js` plus the global shell.

### Surface
- **Page** ({colors.page}): the near-black behind the panels — visible only for milliseconds during the entrance stagger. It matches noir's family so the reveal feels tonal, not flashy.
- **Noir** ({colors.noir-bg}): black steeped in amber. **Frost** ({colors.frost-bg}): the one light surface, a silvered grey-blue. **Moss** ({colors.moss-bg}): desaturated forest. Together they read as a product line, not three random hues.

### Text
- Each panel carries its own counter-color at full strength ({colors.noir-text} / {colors.frost-text} / {colors.moss-text}) and a **muted register at 55% alpha** for indexes, prices, descriptions and specs. Muted is never a separate hex — it is always the theme text with alpha, so it stays harmonious inside every panel.

### Accents
- **Gold** ({colors.gold}) on noir, **steel** ({colors.steel}) on frost, **bronze** ({colors.bronze}) on moss — used *only* for the detail eyebrow and each panel's glow. Gold doubles as the global `::selection` background: the brand's warm metal signature.

### Optical layers
- **Watermark**: theme text at 7–8% alpha on the dark panels, `rgba(255,255,255,.32)` on frost — a light surface needs white, not ink, to glow.
- **Glow**: the accent at 14–35% alpha in a 60vmin radial blurred 64px. On frost the glow is pure white — silver catches light, it doesn't emit color.

## Typography

### Font Families

- **Google Sans Flex** (400–800, Google Fonts) — the entire page. `--font-sans`, `--font-display`, `--font-body` and `--font-mono` all point to the same stack; the "mono" role is a size/case/tracking convention, not a typeface.

### Hierarchy

| Token | Size | Weight | Case/Tracking | Use |
|---|---|---|---|---|
| `{typography.display}` watermark | `clamp(4rem, 13vw, 13rem)`, lh 0.82 | 800 | uppercase, −0.04em | MAPPLE ×3 |
| price H2 | 36px → 48px (md) | 700 | tracking-tight | Active panel price |
| logo | 18px + 9px superscript | 700 | tracking-tight | `Mapple®` |
| product name | 18px | 600 | tracking-tight | Idle label |
| description | 13px | 400 | relaxed leading | Active panel copy |
| eyebrow | 11px | 400 | uppercase 0.28em | `{finish} · Wireless Over-Ear` |
| nav links / index / price | 11px | 400–500 | uppercase 0.15–0.2em | Micro register |
| specs | 10px | 400 | uppercase 0.2em | `Active NC / 40h battery / …` |

### Principles

- **One family, two poles.** Everything is either display-heavy (700–800, tight, huge) or micro (10–13px, tracked, often uppercase). The 18px product name is the only middle voice, and it exists to be replaced by the 48px price on activation.
- **Tracking inverts size**: −0.04em at 13rem, tracking-tight at 18px+, then .15em → .28em as type shrinks to 10px.
- **Alpha is hierarchy**: full text for names and prices-in-detail, 55% for everything secondary. No greys are mixed per-panel.

### Note on Font Substitutes

Google Sans Flex is served from Google Fonts — load weights 400–800 exactly as declared. If it is unavailable, the declared fallback (`'Google Sans', system-ui`) holds the layout, but the watermark's weight-800 mass is the design; do not substitute a lighter family.

## Layout

### Spacing System

- The panel is edge-to-edge; only its *content* is padded: idle label at `px-6 pb-6` (md: `px-8 pb-8`), details column at `px-6 pb-8` (md: `pb-12`).
- The product image floor is viewport-relative — `10vh` bottom padding (md: `8vh`) — so the render always clears the label bar regardless of screen height.
- The details stack breathes in 12/16/24px steps: eyebrow → +12 price → +12 description → +16 specs → +24 CTA.
- Nav floats at `top: 1.25rem` (md: `1.75rem`), horizontally centered, z-40.

### Grid & Container

- No grid, no container, no max-width: one flex row (`flex-col` under 48rem) of three `flex: 1 1 0%` sections filling `100%` height exactly. `min-width: 0` and `min-height: 0` on every panel are load-bearing — without them flexGrow animation stutters at compression.
- Z-order inside a panel: watermark + glow (z-0) → product image (z-10) → idle label (z-20) → details (z-30). Nav rides above all panels at z-40.

### Whitespace Philosophy

Whitespace here is *panel area* — the empty color field around each render is the product photography's studio wall. The idle state shows almost nothing (index, name, price); the design trusts the hover to deliver the rest. Never fill idle panels with copy or badges: the reveal is the interface.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat theme color | Panel fields |
| glow | 60vmin accent radial, blur 64px, opacity .25–1 by state | Behind every render |
| 1 | `drop-shadow(0 40px 60px rgba(0,0,0,.35))` | The product render |
| 2 | Watermark at 7–32% alpha | Behind the active product |
| glass | Gradient + blur(22px) saturate(180%) + 6-shadow stack | The nav pill |

Depth is atmospheric, not stacked: glow, drop-shadow and watermark all sit *behind or under* the product. The nav's glass is the only constructed elevation, and its four inset highlights (top/bottom/left/right hairlines) are what sell the "liquid" read — omit them and it becomes a flat smoked pill.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.pill}` | 9999px | Nav shell, glass links, cart button, Buy Now |
| `{rounded.none}` | 0 | Panels — hard seams, edge-to-edge |

Two shapes only: the architecture is square, the interactive objects are pills. Nothing in between — no 8/12/16px card radii exist on this page.

### Iconography

None. Even the cart is text — `Cart (0)`. Adding icons would put a third visual language between the type and the color fields.

## Components

### Panel ({components.panel})

The unit of the whole design: `section.panel` with theme bg/text inline, `overflow-hidden`, `cursor-pointer`, `will-change: flex-grow`. `onMouseEnter` and `onClick` both set `active = i` (click is the touch path); the *container* — not the panel — clears state on `onMouseLeave`, so moving between panels never passes through an idle frame.

### Watermark ({components.watermark})

Three stacked `Mapple` spans, uppercase, `clamp(4rem,13vw,13rem)`/0.82/800/−0.04em, theme watermark color, `user-select: none`. Starts `autoAlpha: 0, scale: 1.04`; activation settles it to 1/1 over .9s — the oversized brand *develops* rather than pops.

### Glow ({components.glow})

A 60vmin circle centered mid-panel: `radial-gradient(circle, {theme.glow} 0%, transparent 70%)` + 64px blur. It idles at .6 opacity, dims to .25 when compressed, and blooms to 1 at `scale 1.25` on activation — the panel's lighting rig, animated like stage light.

### Idle label ({components.idle-label})

The resting storefront: index over name on the left, price on the right, all in the muted register. On activation it lifts out (`y −12, autoAlpha 0` in .3s) to hand the floor to the details; on compression it dims to .4 instead of vanishing — neighbors stay legible as labels.

### Details ({components.details})

Five `detail-item` children in a bottom-centered column, `pointer-events: none` as a group with only the active CTA re-enabled. They always animate `fromTo` (y 26 → 0) so re-entry never inherits a half-faded state, with `.055` stagger and `.18s` delay tuned to land *after* the panel's inflation has visibly begun.

### Glass nav ({components.glass-nav})

The one persistent object. Recipe, in order: gradient-over-smoke background, double backdrop-filter (with `-webkit-` twin), pill radius, `isolation: isolate`, the 6-layer shadow stack, `::before` sheen (background-position 120% → −20% on hover, 1.2s `--ease-out-expo`), `::after` bottom refraction (`inset: 55% 6% -2% 6%`, blur 3px). Links are `.glass-link` pills that fill `rgba(255,255,255,.12)` on hover; the cart is a solid `white/90` pill that sharpens to white.

### Buy Now ({components.buy-cta})

Each panel's CTA inverts its own theme — noir's is bone, frost's is ink, moss's is chalk — with the panel's `buttonText` inside. Hover is plain CSS `scale 1.05` over .3s; GSAP owns its entrance/exit only. `pointerEvents` toggles with panel state so compressed panels never capture clicks.

## Do's and Don'ts

### Do

- Keep the flexGrow trio exactly 2.6 / 1 / 0.7 on `power4.out` 1.05s — the ratios are the choreography.
- Put `overwrite: 'auto'` on every state-machine tween; rapid cross-panel hovers must retarget mid-flight.
- Keep `min-width: 0` / `min-height: 0` on panels and `will-change: flex-grow`.
- Route all copy, prices, specs and theme tokens through `products.js` — the panel component stays content-blind.
- Keep the watermark hidden at idle (`visibility: hidden` + opacity 0) so screen readers and paint both skip it.
- Keep both `backdrop-filter` declarations and the full shadow stack on the nav.
- Let click mirror hover — the same handler is the touch interface.

### Don't

- Don't animate `width` instead of `flexGrow` — flexbox negotiation is what makes siblings compress in the same motion.
- Don't give panels border-radius or gaps; the seams between color fields are the composition.
- Don't add a second font or a true monospace — the single-family discipline is the type system.
- Don't show details on more than one panel, and don't leave the Buy Now clickable on compressed panels.
- Don't brighten the watermark past its alpha spec "for visibility" — at 7% it is texture, at 20% it is noise.
- Don't let the page scroll: any added content means a new page, not a taller one.
- Don't drop the entrance timeline's overlap offsets (−0.5/−0.7/−0.8) — sequential tweens feel like a slideshow.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <768px | Panels stack as a column (flexGrow works vertically); nav center links hidden; image max-h 46vh; price H2 36px; label padding 24px |
| md | ≥768px | Row layout; links visible; image max-h 56vh; price 48px; nav drops to 1.75rem; padding 32px |

### Fluid Strategy

- The watermark is the only fluid type — `13vw` clamped between 4rem and 13rem tracks every width without breakpoint jumps.
- Product images size by viewport height (`46/56vh`), not width — headphones stay proportional on ultrawide and portrait alike.

### Touch Targets

- The entire panel is the target — tap to expand, tap another to switch. Buy Now (~46px tall) and the cart pill are comfortably tappable; nav links only exist at md+ where a cursor is likely.

### Media Behavior

- Renders must be transparent-background PNGs; the glow and watermark are painted by CSS behind them, so baked-in backgrounds break the depth illusion. `draggable="false"` keeps the product from ghosting on drag.
- Reduced motion: every GSAP duration multiplies to 0 and the CSS guard zeroes transitions — the page arrives complete, with hover still switching states instantly.

## Iteration Guide

1. **Add a product = add an object in `products.js`** — 8 theme tokens + copy. Keep bg dark-or-light decisive; the muted/watermark alphas assume clear polarity. Four panels work; five starts starving each compressed panel below usable width.
2. New accent colors should stay in the warm-metal family (gold/steel/bronze) unless the whole line pivots — the accent only ever appears in eyebrow + glow, so test both.
3. Keep any new detail row inside the `.detail-item` stagger; a sixth item still reads well at .055.
4. If a real cart is wired, keep the pill as the trigger and put the drawer *outside* the panels — the viewport composition must survive commerce chrome.
5. Nav links are decorative anchors today; real routes should keep the three-link discipline — the pill's proportions break past four items.
6. To retheme for another product line (watches, speakers), the panels, state machine and glass nav carry over untouched — change `products.js` and the renders only. That is the point of the architecture.

## Known Gaps

- All nav links and the cart are inert (`href="#"`); Buy Now has no handler — commerce is visual only.
- The cart count is a static string `Cart (0)`.
- Keyboard access is incomplete: panels respond to mouse/touch only (no `tabIndex`/focus path to expand a panel), and the details are `pointer-events: none` for non-active panels by design.
- On very short landscape viewports (<480px tall) the 46vh render and the details column can crowd; the design assumes ≥600px of height.
- The three renders ship as ~1MB PNGs each; production would want AVIF/WebP with PNG fallback for the transparency.
