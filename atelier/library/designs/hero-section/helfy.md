---
version: "1"
name: "Helfy — Monochrome Studio Hero with Spotlight Reveal"
description: "A quiet, monochrome studio hero for a future-helmet brand. Soft grey radial backdrop (#d5d2d8 → #eeecf1), near-black ink (#15151a), Space Grotesk for display/UI and Inter for body. The signature interaction is the Helfy Spotlight Reveal — a cursor-tracked Canvas 2D radial mask that paints the face beneath the helmet through a second registered photograph, with a faint SVG grid drifting in parallax above the imagery."
colors:
  ink: "#15151a"
  muted: "#5d5b66"
  faint: "#8a8893"
  line: "rgba(21,21,26,.16)"
  bg-edge: "#d5d2d8"
  bg-center: "#eeecf1"
  bg-mid: "#e2dfe6"
  grid: "#64748b @ opacity .1"
  invert-text: "#ffffff"
typography:
  display:
    fontFamily: "Space Grotesk"
    weights: "300 / 400 / 500 / 600 / 700"
    role: "headings, nav, eyebrow, labels, button text, spec values"
  body:
    fontFamily: "Inter"
    weights: "300 / 400 / 500"
    role: "tagline + spec descriptions only — the reading voice"
spacing:
  base: "Hand-tuned px values (44px container padding desktop, 22px mobile)"
  nav: "34px 44px 0 desktop · 24px 22px 0 mobile"
  footer: "0 44px 36px desktop · 0 22px 28px mobile"
  headline: "absolute top:148px / left:48px"
  spec-panel: "absolute top:148px / right:48px / max-width:360px"
  hero-h1: "clamp(40px, 5.2vw, 78px) desktop · clamp(32px, 11vw, 52px) mobile"
  side-title: "clamp(38px, 4.4vw, 62px)"
rounded:
  pill: "100px (menu button, CTA)"
  dot: "50% (6px CTA dot, menu bars endcaps)"
  none: "0px (everything else — photo is unframed)"
components:
  spotlight-reveal: "Offscreen Canvas 2D paints a 6-stop radial gradient each frame at the eased cursor position (smoothing 0.1); the canvas data-URL becomes the mask-image of the .reveal layer, exposing the face photo through the helmet photo"
  reactive-grid: "Inline SVG <pattern> at 48×48 with #64748b 0.6 stroke at opacity .1, translated each frame by gridOffset (ease 0.06, amplitude 16px) for cursor parallax"
  dual-layer-photo: ".bg-base (helmet, z-1) + .reveal (face, z-2) — identical background-size auto 110% and background-position center top so the masked reveal lands in perfect registration"
  hairline-pill-button: "1px solid var(--line), border-radius 100px, Space Grotesk 12px uppercase tracking .22em; active → background var(--ink), text #fff over .25s ease"
  menu-bars-icon: "Two <i> bars in .menu-btn .bars, 16px wide, 1.5px tall, gap 4px, second bar 60% width — hand-built, no icon library"
  cta-dot: "6px .dot span (border-radius:50%; background:currentColor) preceding the CTA label — the only decorative glyph besides the menu bars"
---

# Helfy — Monochrome Studio Hero with Spotlight Reveal

> Fivefold showcase. Pairs with the Helfy hero prompt. Use this file to keep Helfy's studio restraint when extending the page — every new section must inherit the soft-grey backdrop, the hand-built hairlines, and the rule that motion comes from one rAF loop, never from CSS entrance animations.

## Overview

Helfy is a single-screen hero for an aerospace-grade future-helmet brand, staged as a quiet monochrome studio photograph with one signature interaction. A soft grey radial backdrop. A figure wearing the helmet, full-bleed and centered. Sparse uppercase typography pinned to the margins. And one piece of magic — move the cursor and a circular spotlight reveals the face beneath the helmet through a second perfectly-registered photograph.

The governing decision: **product photography is the page; the interface stays out of its way.** Most hardware launches drown the hero in scrim gradients, hex-accent badges, and looping product spins. Helfy refuses all of it. There is no neon, no saturated color, no entrance animation, no icon library, no framework. The palette is strictly greyscale plus the natural blacks of the photograph. The only non-grey value in the entire build is the engineering-grid stroke `#64748b` at 10% opacity — a whisper of CAD beneath the headline. The bet: a single Canvas-driven mask interaction carries the entire emotional arc of the page, because the product photograph already carries the brand.

The system extends across surfaces the same way it extends across the hero: by deletion. Future sections inherit the same body radial backdrop, the same five tokens, the same two typefaces in the same two roles. Any new component arrives as a hairline pill or as untreated typography — never as a card, never as a tinted surface, never with a shadow. The page is a stage and the photograph is the actor; every other element is stagecraft kept deliberately small.

**Key Characteristics:**
- Soft-grey radial backdrop tuned to blend seamlessly into the studio photo's outer vignette — page and photograph share a horizon, with no visible seam between them.
- Dual-layer photograph: `.bg-base` (helmet) and `.reveal` (face) on identical `background-position: center top` / `background-size: auto 110%` so the spotlight reads as "looking beneath the helmet," not a crossfade.
- Canvas 2D spotlight mask with six invariant gradient stops (`1 → 1 → 0.75 → 0.4 → 0.12 → 0`) at radius 260px, painted offscreen each frame and applied via data-URL `mask-image`.
- Reactive engineering grid in inline SVG `<pattern>`, 48×48 cells, 0.6px `#64748b` stroke at 10% opacity, parallaxing on the eased cursor at amplitude 16px / ease 0.06.
- Two typefaces in two strictly separate roles: Space Grotesk (300–700) for every heading, label, button and spec value; Inter (300–500) for the tagline and spec descriptions only.
- Hairline pill buttons: 1px solid `{colors.line}`, 100px radius, 12px Space Grotesk uppercase, `.22em` tracking — recipe shared verbatim by the menu button and the footer CTA.
- Hand-built glyphs only: two stacked `<i>` bars inside the menu button (16px wide, 1.5px tall, second bar 60%) and a 6px decorative dot before the CTA label. Zero third-party icon set.
- Black-on-grey selection rather than a colored highlight — the page reads as printed catalog even when text is selected.

## Colors

> **Source pages analyzed:** Helfy single-screen hero (`index.html`) — nav, headline, spec panel, footer, dual-layer photograph, grid overlay. No other surfaces shipped.

### Text Ink
- `{colors.ink}` — `#15151a`. Primary text, headline, brand wordmark, spec values, button text in resting state. Softer than absolute black so it doesn't fight the photographic blacks of the helmet.
- `{colors.muted}` — `#5d5b66`. Nav links, tagline body copy, spec descriptions. Sits a tone above the page so secondary information reads quieter than the headline without feeling washed out.
- `{colors.faint}` — `#8a8893`. The eyebrow ("Aerospace-grade protection") and meta labels. Barely there — just enough to anchor scale and signal hierarchy below the H1.

### Hairlines & Borders
- `{colors.line}` — `rgba(21,21,26,.16)`. The only border value in the entire build. Used on the menu button and the CTA pill. No darker hairlines, no shadows, no dividers between content groups.

### Surface (Body Radial)
- `{colors.bg-center}` — `#eeecf1`. The lightest stop, anchored at `50% 44%` — the optical brightness near the helmet visor.
- `{colors.bg-mid}` — `#e2dfe6`. The mid stop at 52% — the seamless backdrop's body tone.
- `{colors.bg-edge}` — `#d5d2d8`. The outer stop at 100% — matches the photograph's outer grey exactly so the page edge and the studio backdrop are indistinguishable.
- Body composition (invariant): `radial-gradient(125% 120% at 50% 44%, #eeecf1 0%, #e2dfe6 52%, #d5d2d8 100%)`.

### Off-Palette Accent
- `{colors.grid}` — `#64748b @ .1`. The only non-grey value in the build, and only as a 0.6px SVG stroke at 10% opacity. Even this whisper is a deliberate budget item — the page's single concession to colored ink.

### Inversion
- `{colors.invert-text}` — `#ffffff`. Used exclusively as the active text colour inside the pill buttons when the fill flips to `{colors.ink}`. Never as a surface, never as a border.

**Constraint** (verbatim from prompt): "Do not use any saturated or neon colors anywhere — the palette is strictly greyscale plus the natural blacks of the photography."

## Typography

### Font Family
- **Display + UI** — `"Space Grotesk", sans-serif` at weights 300 / 400 / 500 / 600 / 700. Brand wordmark, nav, eyebrow, H1, side title, all labels, all button text, all spec values.
- **Body** — `"Inter", system-ui, sans-serif` at weights 300 / 400 / 500. Tagline and spec descriptions only. The reading voice.
- Both families loaded via a single Google Fonts `<link>` with `display=swap`. No local fallback fonts beyond `sans-serif` / `system-ui`. No OpenType features toggled — Helfy uses default metrics, default kerning, default figures.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `display.brand` | 20px | 600 | 1 | `.42em` (with matching text-indent) | "HELFY" wordmark in nav |
| `display.h1` | clamp(40px, 5.2vw, 78px) | 300 (bold span 600) | .94 | `-.02em` | Hero headline, two lines |
| `display.side-title` | clamp(38px, 4.4vw, 62px) | 300 (bold span 600) | .92 | `-.02em` | "SERIES 01" side-title |
| `display.eyebrow` | 11px | 400 | 1 | `.46em` | Uppercase eyebrow above H1 |
| `display.tag` | 11px | 400 | 1 | `.24em` | "Specs" label above spec lines |
| `display.nav` | 12px | 400 | 1 | `.22em` | Nav links + menu button + CTA label |
| `display.spec` | 13px | 400 | 1 | `.04em` | Inline spec values ("980 g", "ECE 22.06") |
| `body.tagline` | 13.5px | 400 (lead-in 500) | 1.6 | normal | Footer tagline copy |
| `body.spec-line` | 12.5px | 400 | 1.5 | normal | Spec panel description lines (Inter) |
| `body.selection` | inherits | inherits | inherits | inherits | Selected text — `#fff` on `{colors.ink}` |

### Principles
- Two families, two roles, no overlap — Space Grotesk never sets body copy and Inter never sets a heading, a button, or a number.
- Negative letter-spacing only at display sizes (`-.02em` on H1 + side title) to compensate for Space Grotesk 300's open counters.
- Wide tracking (`.22em`–`.46em`) reserved for uppercase micro-type — paired with matching `text-indent` on the brand wordmark to keep tracked-out letters optically centered.
- Body line-height is 1.6 in Inter, never lower; the tagline's breathing room is the only soft texture in the bottom band.
- Headline weight mix is exactly two weights: 300 sets the cinematic tone, a `<b>` span at 600 punches the active phrase. No weight 400 or 500 in display.
- Values + units are kept unbreakable with `&nbsp;` ("980 g", "Adaptive tint 0–100%", "ECE 22.06") so spec lines never wrap mid-measurement.

### Note on Font Substitutes
If Space Grotesk is unavailable, fall back to `"Inter Tight"` or the platform `sans-serif`; reduce display tracking to `-.015em` and bump weight by one step (300 → 400) so the headline doesn't ghost. If Inter is unavailable, fall back to `system-ui` and keep line-height at 1.6 — the tagline's calmness depends on the vertical rhythm, not the typeface. Never synthesize-bold: if a required weight is missing, clamp down to the nearest available weight and comment the substitution.

## Layout

### Spacing System
- No base unit — Helfy uses **hand-tuned pixel values** because the hero is a single composed photograph, not a grid layout. The recurring numbers are: `11px`, `14px`, `18px`, `22px`, `26px`, `34px`, `36px`, `44px`, `48px`, `148px`.
- Nav padding: `34px 44px 0` desktop → `24px 22px 0` mobile.
- Footer padding: `0 44px 36px` desktop → `0 22px 28px` mobile.
- Headline anchor: `top: 148px; left: 48px` (absolute, z-5).
- Spec panel anchor: `top: 148px; right: 48px; max-width: 360px` (absolute, z-5, right-aligned).
- Pill padding: menu button `11px 20px` · CTA `14px 26px`. Eyebrow→H1 gap `18px`. Side-title→tag gap `26px`. Tag→spec-line gap `12px`. These are the rhythm constants; do not invent intermediate values.

### Grid & Container
- No grid system, no `max-width` container. The page is a stage, not a layout.
- Surface: `<main class="hero">` at `position: relative; height: 100svh; width: 100%; display: flex; flex-direction: column`.
- The flex column is what pins the footer to the bottom via `margin-top: auto` — there is no fixed positioning on the footer.
- z-index stack: `.bg-base` helmet `1` → `.reveal` face `2` → `.grid-bg` `3` → headline / spec panel `5` → nav / footer `6`. Reserved gaps at z-4 are intentional — leave them for future overlay copy.
- Background layers share `inset: 0`, `background-position: center top`, `background-size: auto 110%` so both photographs are zoomed identically and the reveal mask stays in registration.

### Whitespace Philosophy
Whitespace is structural, not residual. The 148px top inset on the headline and spec panel is what gives the helmet visor room to read; the empty band beneath the nav is what makes "Aerospace-grade protection" feel like a watermark instead of a label. The footer tagline at `max-width: 230px` and the spec panel at `max-width: 360px` are calibrated so that copy ends before it would compete with the visor's reflection. Negative space here isn't minimalism for taste — it's the rectangle that the product photograph needs to behave like a photograph.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No border, no shadow | Body surface, headline, spec lines, tagline |
| Hairline | `1px solid {colors.line}` | Menu button, CTA pill (the only bordered objects on the page) |
| Backdrop blur | None | Helfy ships zero `backdrop-filter` |
| Product shadow | Photographic only | The helmet's natural shadow on the seamless — not a CSS shadow |

**Shadow philosophy:** Helfy has zero `box-shadow` declarations in CSS. The only sense of depth comes from the photograph itself (the helmet's specular highlights, the seamless backdrop's natural gradient) and from the radial body backdrop that meets the photo's outer grey. Adding a CSS shadow anywhere would announce that the page is a layout, breaking the illusion that the page is a print.

**Decorative depth:**
- The radial body gradient (`125% 120% at 50% 44%`) is the only "lighting" the page produces.
- The grid overlay at 10% opacity is the only z-3 layer — it sits between the photograph and the text so the type still reads cleanly without a scrim.
- The spotlight reveal is the only dynamic depth cue; it carries the page's entire interactive depth budget.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `rounded.none` | 0px | Photograph, grid overlay, headline group, spec panel, footer surface — everything by default |
| `rounded.xs` | not surfaced | No xs rung in the build; reserved for future input recipe if added |
| `rounded.sm` | not surfaced | No sm rung — Helfy has no soft-rectangle UI |
| `rounded.md` | not surfaced | No md rung — no cards exist on the page |
| `rounded.lg` | not surfaced | No lg rung — no panels exist on the page |
| `rounded.dot` | 50% (3px from a 6px square) | CTA decorative dot; endcaps of the menu-bar `<i>` bars |
| `rounded.pill` | 100px | Menu button, CTA pill — full pill, not a soft rectangle |

That is the complete radius system. The `xs / sm / md / lg` ladder is intentionally empty because there are no card surfaces; if a future section needs a tile, build it as untreated typography on the body backdrop rather than introducing a new radius token.

### Photography Geometry
- Both hero photographs are 16:9 (2020×1138), shot on the same soft-grey seamless with identical framing — suit and shoulders line up exactly, only the head differs (helmet vs. bare face).
- Both layers render at `background-size: auto 110%` (slight zoom) and `background-position: center top` so the helmet's crown sits just inside the top edge regardless of viewport height.
- No image radius: photographs are unframed. No `object-fit: cover` because they are CSS backgrounds, not `<img>` elements.
- No `srcset`: both files are served as single JPGs from `cdn.5sdesign.art/projects/Helfy/`. The page never lazy-loads — both layers are required on first paint to support the reveal interaction.
- Swap rule: if the two images are replaced, both must remain in identical framing on the same backdrop, otherwise the spotlight reveal will misregister.

## Components

### Top Navigation

**Brand wordmark** · `{component.brand}` — `.brand`. Space Grotesk 600 / 20px / `letter-spacing: .42em` / `text-indent: .42em` so the tracked-out "HELFY" stays optically centered. Default colour `{colors.ink}`. No active state. No focus ring — the wordmark is not interactive.

**Nav links** · `{component.nav-link}` — `.menu a`. Space Grotesk 400 / 12px / `letter-spacing: .22em` / uppercase. Default colour `{colors.muted}`. Active (link hover-equivalent) → colour `{colors.ink}` with `transition: color .25s ease`. Focus state inherits the active colour with a `:focus-visible` outline of `2px solid {colors.ink}` at `outline-offset: 4px`. Gap between links: 42px.

**Menu button** · `{component.menu-btn}` — `.menu-btn`. Pill: `border: 1px solid {colors.line}`; `border-radius: 100px`; `padding: 11px 20px`; Space Grotesk 12px uppercase `.22em`; colour `{colors.ink}`; transparent background. Active → `background: {colors.ink}`; colour `{colors.invert-text}`; `transition: background .25s ease, color .25s ease`. Focus → outline `2px solid {colors.ink}` at `outline-offset: 3px`. Contains a 2-bar `.bars` icon (`flex-direction: column; gap: 4px; width: 16px`; each `<i>`: `height: 1.5px; background: currentColor`; second bar `width: 60%`) followed by the label "Menu". `aria-label="Open menu"`.

### Buttons

**Primary CTA** · `{component.cta}` — `.cta`. Pill identical in spirit to the menu button: `border: 1px solid {colors.line}`; `border-radius: 100px`; `padding: 14px 26px`; Space Grotesk 12px uppercase `.22em`; colour `{colors.ink}`. A 6px `.dot` (`border-radius: 50%; background: currentColor`) precedes the label "Reserve yours". Active → `background: {colors.ink}`; colour `{colors.invert-text}`; `transition: background .25s ease, color .25s ease`. Focus → outline `2px solid {colors.ink}` at `outline-offset: 3px`.

**Secondary (nav link as button)** · `{component.nav-link}` — see Top Navigation. Helfy intentionally ships only one secondary affordance — the nav links — because the page has one primary action.

**Utility (menu-btn)** · `{component.menu-btn}` — the menu button doubles as the utility button, with the bars icon serving as the affordance. Helfy does not ship a separate icon-only or text-only utility button.

### Cards & Containers

Helfy ships **zero card surfaces.** No tile, no panel, no group container. Content groups are formed by absolute position and rhythm alone:

**Headline group** · `{component.headline}` — `.headline`. `position: absolute; z-index: 5; top: 148px; left: 48px; pointer-events: none`. Eyebrow + H1 stacked at gap 18px. No background, no border, no padding. The pointer-events disable is so the headline never blocks the spotlight cursor.

**Spec panel** · `{component.spec-panel}` — `.side`. `position: absolute; z-index: 5; top: 148px; right: 48px; max-width: 360px; text-align: right`. Body in Inter 12.5px / `{colors.muted}`. Side-title (Space Grotesk 300, clamp scale) → tag label (Space Grotesk 11px `.24em`) → four spec lines with inline `.spec` values. No background, no border — the right-aligned column floats over the photograph.

**Footer group** · `{component.footer}` — `.footer`. `position: relative; z-index: 6; margin-top: auto; padding: 0 44px 36px; display: flex; align-items: flex-end; justify-content: space-between`. Holds the tagline (left) and CTA (right). Again — no surface, no border, just a flex row pinned by `margin-top: auto`.

### Inputs & Forms

Helfy ships no input components in the hero. If a form is added (e.g., a "Reserve yours" capture), the input recipe must inherit: `border: 0 0 1px 0 solid {colors.line}` (single bottom hairline), `border-radius: 0`, Space Grotesk 13px, colour `{colors.ink}`, transparent background, `padding: 10px 0`. Focus state → bottom border thickens to `1.5px` solid `{colors.ink}` with `transition: border-color .25s ease`. No filled inputs, no pill inputs — that radius is reserved for buttons.

### Footer

See `{component.footer}` above. Mobile collapse: `flex-direction: column; align-items: center; gap: 18px; text-align: center; padding: 0 22px 28px`; tagline `max-width: none`. The CTA sits below the tagline on mobile, not beside it.

## Do's and Don'ts

### Do
- Use `{colors.bg-edge}` → `{colors.bg-center}` as the body radial backdrop verbatim — `radial-gradient(125% 120% at 50% 44%, #eeecf1 0%, #e2dfe6 52%, #d5d2d8 100%)`.
- Apply `{colors.line}` as the only border colour; reserve `{colors.ink}` fills for active button states.
- Keep Space Grotesk and Inter in strictly separate roles — display/UI vs. body, no crossover.
- Set headline tracking to `-.02em` and uppercase tracking to `.22em`–`.46em`, paired with matching `text-indent` on the brand wordmark.
- Use `&nbsp;` between value + unit ("980 g", "Adaptive tint 0–100%", "ECE 22.06") so spec lines stay unbreakable.
- Reserve the pill (`rounded.pill` = 100px) for the menu button and the CTA only; everything else stays at `rounded.none`.
- Keep the entire reveal interaction inside one `requestAnimationFrame` loop with the invariant constants (`smoothing 0.1`, `grid-ease 0.06`, `amplitude 16`, `reveal radius 260`, six gradient stops).
- Set `pointer-events: none` on headline + reveal layer so the cursor stays free to drive the mask.
- Pin the footer with `margin-top: auto` on the hero flex column — never with `position: fixed`.

### Don't
- Don't introduce a sixth colour token or a saturated hue; `{colors.grid}` at 10% opacity is the budget for non-grey.
- Don't add CSS entrance animations, IntersectionObserver reveals, GSAP, Framer Motion, or Lottie — motion comes only from the rAF loop.
- Don't apply a CSS `box-shadow` anywhere; depth is photographic only.
- Don't use a `backdrop-filter`, a scrim gradient on the photograph, or a dark overlay to "improve" text contrast — adjust copy length instead.
- Don't replace the menu bars or CTA dot with an SVG icon set (Lucide, Heroicons, Phosphor, Tabler). Hand-build any new glyph in the same 1.5px / 0.6px hairline language.
- Don't swap the two studio photographs for differently-framed images — the spotlight will misregister.
- Don't round the spotlight gradient stops (`1 / 1 / 0.75 / 0.4 / 0.12 / 0`) or the radius (`260`); the falloff curve is calibrated.
- Don't put a CSS `transition` on the `.reveal` mask — it updates per frame.
- Don't synthesize-bold a missing Space Grotesk weight; clamp down to the nearest available weight and note the substitution.
- Don't add a max-width container or a grid system. The page is a stage.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤ 419px | Single `@media (max-width: 900px)` rules apply — nav links + spec panel hidden, footer stacks, headline scales to `clamp(32px, 11vw, 52px)` |
| Phone | 420–640px | Same mobile rule set; tagline `max-width: none`; container padding 22px |
| Large phone | 641–735px | Mobile rule set still active; the menu button is the sole nav affordance |
| Tablet portrait | 736–833px | Mobile rule set still active up to 900px; spec panel hidden, brand wordmark + menu button only |
| Tablet landscape | 834–1023px | At 900px desktop layout returns — nav links re-appear, spec panel re-anchors right |
| Small desktop | 1024–1068px | Desktop composition active; headline + spec panel both at `top: 148px` |
| Desktop | 1069–1440px | Full composition; clamp scales H1 between 40–78px on viewport width |
| Wide desktop | ≥ 1441px | Headline reaches the 78px cap; container padding stays 44px (no widescreen expansion) |

### Touch Targets
- Minimum tap target: the menu button and CTA at `padding: 11px 20px` / `14px 26px` measure 36px / 46px tall — both ≥ 44px clear including the line-box. No tap target smaller than the menu button is allowed.
- The brand wordmark is decorative on mobile (not a home link) — kept non-interactive to avoid an accidental tap target inside the wide-tracked letters.
- On touch devices the spotlight rests at its last (or centered) position; the page reads as a clean full-bleed product shot.

### Collapsing Strategy
- **Nav** — `.menu` links hide; the menu button stays. The brand wordmark stays at 20px (no scale-down).
- **Headline** — H1 drops to `clamp(32px, 11vw, 52px)` and `white-space: normal` so the two-line composition can wrap naturally; `margin-top: 24px` is added so the headline sits below the nav rather than over it.
- **Spec panel** — fully hidden below 900px. There is no mobile substitute; the specs return when there is room.
- **Footer** — collapses to `flex-direction: column; align-items: center; gap: 18px; text-align: center`. The CTA sits below the tagline, not beside it.
- **Grid overlay** — unchanged; the reactive grid still drifts on touch via the centered "rest" position, even though the spotlight is pinned.
- **Hero typography** — every display token uses `clamp()`; no media-query-specific overrides except H1.

### Image Behavior
- Both photographs are served as single JPGs (no `srcset`, no AVIF/WebP variants in the shipped build).
- Both load eagerly on first paint — the reveal interaction requires the face layer to be ready immediately; lazy-loading would cause the first cursor move to flash an empty mask.
- `background-size: auto 110%` is invariant — both layers stay zoomed identically across breakpoints so the reveal stays registered.
- Aspect ratio is set by the viewport (`100svh` hero), not by the image. Crops are accepted on narrow screens; the helmet stays centered top-down.

## Iteration Guide

1. Extend by adding sections that inherit the body radial backdrop and the five-token palette; never introduce a new surface colour to differentiate a section.
2. Keep variants of buttons inside the pill recipe — change padding (`11px 20px` ↔ `14px 26px`), not radius, border, or weight.
3. Reference tokens (`{colors.ink}`, `{colors.line}`, `{component.menu-btn}`) instead of hex / class names when adding rules; the file is the source of truth, the markup mirrors it.
4. Never document a hover state — Helfy's only state changes are **default**, **active** (button fill flips), and **focus** (`outline 2px solid {colors.ink}`). Follow the same convention in extensions.
5. Display vs body family rule is absolute: Space Grotesk for any heading, label, button, value; Inter for any sentence-level reading copy. Do not introduce a third typeface.
6. Shadow restriction: zero `box-shadow`. If depth is needed, reach for the photograph or the radial backdrop — not a CSS shadow.
7. Chrome vs surface alternative: when a new affordance feels like it wants a card, build it as untreated typography on the body backdrop instead. The absence of cards is the design.

## Known Gaps

- Validation states (input error, success, disabled) are not surfaced — Helfy ships no form components in the hero, so validation language is out of scope.
- Dark mode is not surfaced in analyzed pages; the build assumes a single shipped theme. A future dark surface would need to re-derive the `{colors.bg-edge}` → `{colors.bg-center}` radial against the photograph's blacks.
- Loading / skeleton states are not surfaced — both photographs are required eagerly and there is no documented placeholder for the first paint before the JPGs decode.
- Modal / dialog patterns are not surfaced; the menu button is wired but the menu surface itself is out of scope for this hero.
- Specific blur radii, focus-ring offsets beyond the `2px / 3–4px` proposals above, and reduced-motion fallbacks for the grid parallax (vs. spotlight) are not surfaced in the prompt and should be confirmed against the live build before extending.
- Internationalization metrics (CJK line-height, RTL mirroring of the right-aligned spec panel) are not surfaced and would need explicit calibration before the page ships in non-Latin scripts.
