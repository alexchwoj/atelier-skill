---
version: "1"
name: "Design System Inspired by Hibou"
description: "Hibou is a strict monochrome editorial system: a pure black canvas, heavy bold white Figtree type at brutally tight leading (0.79 on the 11rem hero), and photography doing all the color. The signature move is the masked-card mosaic — several rounded cards share one large photograph, each showing a different window into the same image via background-position math, so a whole section reads as one picture sliced by thin 6–8px black gutters. Surfaces are three whites: solid white, white/90 frosted, white/20 liquid glass. No hue exists anywhere."
colors:
  black: "#000000"          # page canvas, navbar base, splash, dropdown — the void between cards
  white: "#ffffff"          # all primary type, solid buttons, light overlay cards
  glass: "white/20 + backdrop-blur-xl"   # inactive chips, feature-bar overlays, glass overlay card
  glass-active: "white/90 + backdrop-blur-md"  # the one active service chip
  nav-surface: "black/80 + backdrop-blur-md"   # fixed navbar
  photo-scrim: "black/30"   # flat wash over Section-3 photos for type legibility
  fallback-deep: "#171717"  # neutral-900 — Lens Crafting card floor behind its photo
  fallback-soft: "#27272a"  # zinc-800 — Consultation card floor behind its photo
  hover-muted: "#a3a3a3"    # neutral-400 — menu link hover text
typography:
  display: { fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, sans-serif", weights: "700", role: "hero + section headlines — clamp() up to 11rem, leading 0.79–0.95, tracking-tight" }
  body:    { fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, sans-serif", weights: "600", role: "labels + micro-copy — 12–14px semibold; there is no regular-weight body text on the page" }
  ui:      { fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, sans-serif", weights: "600-800", role: "nav links/buttons 14px 600, chips 20–36px 700, logo lockup extrabold 800 uppercase" }
spacing:
  base: "4px"
  gutter: "6px → 8px (md)"        # gap-1.5 md:gap-2 — the mosaic's thin black seams, used everywhere
  rail: "12px → 20px (md)"        # page side padding px-3 md:px-5
  card-pad: "12px → 20px (md)"    # chip/overlay padding p-3 md:p-5
  card-pad-lg: "20px → 28px (md)" # Section-3 content cards p-5 md:p-7
  nav-clear: "96px"               # hero pt-24 clears the fixed navbar
  section-joint: "6–8px"          # pb/pt between sections — near-seamless
rounded:
  card: "12px → 16px (md)"        # every mosaic card (rounded-xl md:rounded-2xl)
  pill: "9999px"                  # all buttons, number badges, arrow circles
  dropdown: "16px shell / 12px items"
motion:
  reveal: "opacity 0→1 + translateY 24px→0, 0.6s cubic-bezier(0.16,1,0.3,1), stagger index×120ms, once at 15% visibility"
  dropdown: "open 250ms scale 0.97→1 / close 150ms → 0.99, cubic-bezier(0.22,1,0.36,1)"
  group-hover: "lift −4px · scale 1.05 · falloff 0.45^d · 320ms; enter cubic-bezier(0.22,1,0.36,1), leave springs cubic-bezier(0.34,3.85,0.64,1)"
  menu: "hamburger + panel + links on cubic-bezier(0.76,0,0.24,1), 300–500ms, link stagger 100+i×60ms"
  splash: "counter 0→100 over 2000ms, hold 200ms, fade 700ms"
  cta: "hover:scale-105 transition-transform"
components:
  masked-card: "The signature — N cards share one photo; each computes its window via section-relative offsets + cover-scale + focal pan (focalX 0.65–0.8, focalY 0.1)"
  navbar: "Fixed black/80 blur bar — stacked extrabold uppercase wordmark left, 'Visit Our Store' + outlined Menu pill right"
  dropdown: "t-dropdown — black panel, white/15 hairline, grows from top-right (scale 0.97, 250/150ms)"
  feature-bar: "Masked-card strip under the hero — white/20 blur-xl overlay + centered bold label, group hover lift"
  service-chip: "Glass chip with whitespace-pre-line bold title + outlined number badge; active = white/90 + black text"
  overlay-duo: "Two cards docked at the portrait's foot — one solid white (black text), one white/20 glass (white text), each with an outlined arrow circle"
  splash: "Black full-screen, bold tabular counter bottom-left, 0→100"
  arrow-icon: "One inline 14×14 SVG arrow, rotate −45° (up-right), stroke 1.5 — the page's only icon"
---

# Design System Inspired by Hibou

## Overview

Hibou is built on refusal: **pure black, pure white, and photography — nothing else.** The canvas is `{colors.black}` #000000 (one of the rare systems where true black is correct, because the page is a darkroom for photographs). All type is white Figtree at heavy weights; the only "colors" on the page arrive inside the seven photos, and even those are pulled toward the mono system by `{colors.photo-scrim}` washes. There is no accent hex, no gradient, no hue — de-emphasis is done with translucency (`white/20`) and neutral grays, never with a tint.

The signature is the **masked-card mosaic** (`{components.masked-card}`): Sections 1 and 2 each hold one large photograph shared across four rounded cards. Each card computes its own `background-position` window from its offset inside the section — cover-scaled to the *section*, not the card — so the model's face flows uninterrupted from the main hero card into the three feature bars below it, sliced only by 6–8px black gutters. It reads as one picture behind a black grid, not four separate images. **Most landing pages treat every card as its own image slot — Hibou's cards are windows cut into a single continuous photograph, and that shared-canvas math (plus the strict no-hue palette) is the entire identity.**

Typography is **one voice at maximum volume**: Figtree bold-to-extrabold, with display sizes running on `clamp()` up to `11rem` and line-heights crushed to `0.79–0.95`. The hero "Clear Vision" stacks two words into a solid typographic block taller than most sections. There is no light weight, no regular body paragraph — the quietest text on the page is 12px **semibold**. Hierarchy comes from scale contrast (11rem vs 14px), never from weight contrast.

Everything animates by hand — **zero animation libraries**. Cards stagger up 24px on an IntersectionObserver reveal; the menu dropdown grows from its trigger corner; horizontal groups (feature bars, service chips) lift on a distance-falloff spring where neighbors rise a fraction of the hovered card's −4px; and the page opens with a black splash counting 0→100 in the bottom-left corner like a film leader.

**Key Characteristics:**
- **True-black canvas** — `{colors.black}` everywhere; the black between cards is the composition's grid lines.
- **No hue, ever** — black, white, three glass opacities, neutral grays. A single colored pixel outside the photos breaks the system.
- **Masked-card mosaic** — one photo per section shared across cards via section-relative `background-position` windows with focal panning (`focalX` 0.65–0.8).
- **Heavy type, crushed leading** — Figtree 700/800, `clamp(3rem,11vw,11rem)`, leading 0.79/0.9/0.95; semibold 12–14px is the floor.
- **Three whites as surfaces** — solid `bg-white`, frosted `white/90 blur-md`, liquid `white/20 blur-xl`; borders are 1px white or black hairlines.
- **Thin-gutter geometry** — every gap on the page is 6px (mobile) / 8px (desktop); sections join nearly seamlessly.
- **Hand-rolled motion** — staggered reveal (0.6s, ×120ms), corner-grown dropdown, distance-falloff group hover with a springy release, splash counter. All guarded by `prefers-reduced-motion`.
- **One icon** — a 14×14 inline SVG arrow rotated −45°; no icon library exists in the project.

## Colors

> Source: the three-section Hibou page — hero mosaic + feature bars, frame-gallery mosaic + service chips, and the lens-crafting grid with photo cards and the overlay duo. The system is strictly monochrome.

### Surface
- **Black** ({colors.black}): The page, the splash, the dropdown panel, the mobile menu panel, and — critically — the gutters between cards. True `#000000` is correct here: the page is a dark gallery wall and the photos supply all warmth. 
- **Nav surface** ({colors.nav-surface}): `black/80` + `backdrop-blur-md` — the fixed header stays black but lets the mosaic ghost through as it scrolls under.
- **Fallback floors** ({colors.fallback-deep} / {colors.fallback-soft}): `neutral-900` and `zinc-800` sit *behind* the Section-3 photos as loading floors — the only non-pure grays on the page, never visible once images land.

### The Three Whites
- **Solid white** ({colors.white}): The strongest surface — CTA buttons ("Call Us", "Book Online", "Book a Fitting") and the white overlay card, all carrying `text-black`. Solid white = "this is the action".
- **Frosted white** ({colors.glass-active}): `white/90 + backdrop-blur-md` — exactly one placement: the active "Optical Frames" service chip. Near-opaque, black text, reads as "selected".
- **Liquid glass** ({colors.glass}): `white/20 + backdrop-blur-xl` — the workhorse translucency: feature-bar overlays, inactive service chips, the glass overlay card, and the mobile-menu backdrop (at `blur-sm`). White type sits on it; the photo glows through it.

### Text
- **White** on everything dark and on glass; **black** on solid white and the frosted active chip. Muted states are rare: menu links hover to `{colors.hover-muted}` (neutral-400) — the only grey text moment on the page.

### Overlay & Hairline
- **Photo scrim** ({colors.photo-scrim}): a flat `black/30` over the two Section-3 photo cards, keeping white headlines legible without killing the image.
- **Hairlines**: 1px `border-white` (Menu pill, badge circles, arrow circle on glass), `border-black` (badges/arrows on white), `border-white/15` (dropdown edge), `border-neutral-800` (mobile menu divider).

### Semantic
None. No success/error/warning exists; any future state colors would be a deliberate system extension (see Known Gaps).

## Typography

### Font Family

- **Figtree** — the only typeface, loaded from Google Fonts at weights 400, 500, 600, 700, 800; stack `'Figtree', -apple-system, BlinkMacSystemFont, sans-serif`, antialiased. (The build originally shipped "Open Sauce One" from an unreliable font rehost; Figtree is the pinned open-licensed replacement — geometric-humanist, near-identical voice at bold weights.)
- One family carries everything; 400 is loaded but the page never speaks quieter than 500.

### Hierarchy

| Token | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| `{typography.display}` hero | `clamp(3rem, 11vw, 11rem)` | 700 | **0.79** | "Clear Vision" — tracking-tight, a solid type block |
| display L | `clamp(3rem, 7vw, 6rem–6.5rem)` | 700 | 0.9 / 0.95 | "Style makeover", "Lens Crafting" |
| section title | 24 → 30px | 700 | 1.2 | "Frame Gallery" |
| chip/card title | 20 → 36px | 700 | 1.05 | Service chips (`whitespace-pre-line`), overlay cards 18→24px at leading 5→7 |
| feature bar | 18 → 24px | 700 | 1 | Centered labels on glass |
| logo | 20 → 24px | **800** | 1 (stacked, −6/−8px overlap) | "HIBOU / EYEWEAR" uppercase tracking-tight |
| `{typography.ui}` | 14px | 600 | 1.4 | Nav links, dropdown items, small buttons |
| label / micro | 12 → 14px | 600 | leading-4/5 | Corner copy, "Free Eye Test", consultation label |
| splash counter | 72 → 128px | 700 | 1 | `tabular-nums`, bottom-left |

### Principles

- **Scale is the only hierarchy.** From 12px to 11rem is a ~15× jump with weight nearly constant (600–700). Nothing is de-emphasized by thinning — only by shrinking.
- **Crushed leading is the look** — 0.79 on the hero makes the two lines interlock into one shape. Loosening it to "safe" values (1.1+) dissolves the editorial punch.
- **Semibold is the floor.** No `font-normal` text exists. Even 8px "quality eyewear" under the logo is 500.
- **Uppercase lives only in the logo lockup** — all other copy, including nav and buttons, is sentence case.
- **Multi-line titles break by hand** (`<br/>` or `\n` + `whitespace-pre-line`) — line breaks are art-directed, never left to wrapping.

### Note on Font Substitutes

Figtree is open-licensed on Google Fonts — load it directly, no substitution needed. Keep weights 600–800 available; the system collapses without a true extrabold for the lockup. Do not re-substitute "something like Figtree".

## Layout

### Spacing System

- **Base unit**: 4px.
- **The gutter rules everything**: `{spacing.gutter}` (`gap-1.5 md:gap-2`, 6→8px) is the gap between *every* card, bar, chip, column, and section joint on the page. One value, everywhere — the mosaic reads as a single sliced surface because of it.
- Page rail: `{spacing.rail}` (`px-3 md:px-5`) — deliberately narrow so cards run nearly edge-to-edge.
- Card padding: `{spacing.card-pad}` (12→20px) on chips/overlay cards, `{spacing.card-pad-lg}` (20→28px) on Section-3 content cards; corner copy insets 16→28px.
- Sections: hero clears the nav with `pt-24` ({spacing.nav-clear}); every other vertical joint is the 6–8px gutter — sections touch, they don't breathe.

### Grid & Container

- **No max-width container** — the mosaic spans the full viewport at every size; only the thin rail frames it.
- **Section 1**: flex column — main masked card (`flex-1`) + a 3-bar strip (`h-14 md:h-20`).
- **Section 2**: 2-column grid `md:grid-rows-[1fr_1fr_0.8fr]` — tall CTA card spans 2 rows left; gallery + makeover stack right; a full-width services card (4 chips) closes it.
- **Section 3**: 2-column grid — content column (heading card `flex-[1.2]`, image pair `flex-1`, consultation `flex-[0.8]`) and the portrait column, swapped by `md:order` so the portrait sits left on desktop but the headline leads on mobile.
- Every section is `h-screen` on desktop (`min-h-screen` on mobile for 2–3) — three full theatrical screens, no partial sections.

### Whitespace Philosophy

There is almost none — and that's the design. Density is controlled by the photographs' own negative space (the models sit right-of-center; `focalX 0.65–0.8` pans the crop so copy zones land on quiet backdrop areas). The black gutters are the whitespace: thin, uniform, structural. Widening them turns a mosaic into a card grid and kills the effect.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (canvas) | Flat `#000000` | The page, visible only as gutters and section joints |
| 1 (photo) | The masked/cover photographs | Every card's ground |
| 1.5 (scrim) | Flat `black/30` | Over Section-3 photos, under type |
| 2 (glass) | `white/20 backdrop-blur-xl` (+ `white/90 blur-md` active) | Feature bars, chips, glass overlay card |
| 3 (solid) | Opaque white | CTAs and the white overlay card |
| floating | `shadow-2xl` | Dropdown panel + mobile menu panel only |

Shadows are almost absent — two `shadow-2xl` on the floating menus, nothing on cards. Depth is *material*: photo, then glass over photo, then paper over photo. The overlay duo at the portrait's foot demonstrates the whole ladder in one spot: solid white card beside liquid glass card, identical geometry, opposite materials.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.card}` | 12px → 16px (md) | Every mosaic card, chip, image card, overlay card |
| `{rounded.pill}` | 9999px | All buttons, number badges, arrow circles, hamburger spans |
| `{rounded.dropdown}` | 16px shell / 12px items | The desktop menu panel |

### Iconography

- **One icon**: the `{components.arrow-icon}` — inline 14×14 SVG, path `M1 7h12m0 0L8 2m5 5L8 12`, stroke `currentColor` 1.5, round caps, always `rotate-[-45deg]` so it points up-right. It appears twice, inside hairline circles on the overlay duo.
- No icon library is installed. The hamburger is three animated `<span>` bars, not an icon.

## Components

### Navigation

**`navbar`** ({components.navbar}) — fixed, full-width, `{colors.nav-surface}`.
- Left: stacked lockup — "HIBOU" / "EYEWEAR" extrabold uppercase with negative margin overlap, "quality eyewear" at 8–9px/500 beneath.
- Right (desktop): "Visit Our Store" text + the **Menu pill** — black fill, 1px white border, inverting to white/black on hover.
- The **dropdown** ({components.dropdown}) grows from top-right: scale 0.97→1 in 250ms, closes at 150ms to scale 0.99, black panel with `white/15` hairline and `shadow-2xl`; links hover `bg-white/10`.
- Mobile: 3-bar hamburger morphing to an X on `cubic-bezier(0.76,0,0.24,1)`; right slide-in black panel (85% width) with 4xl bold links staggering in at `100+i×60ms`, backdrop `white/20 blur-sm`, body scroll locked while open.

### The Mosaic

**`masked-card`** ({components.masked-card}) — the system's engine.
- A section holds one photo; each card gets `{ x, y }` (its offset in the section) from a `ResizeObserver` pass, then paints `backgroundSize` = section-cover dimensions and `backgroundPosition = -(x + focalOffset)` — a window into the shared canvas.
- Focal panning: `focalX` 0.8 desktop (0.65–0.7 mobile) slides the crop toward the model; `focalY` 0.1 keeps faces high.
- The url **must** be quoted (`url("...")`) and `backgroundSize` stays `undefined` until the natural size loads — cards show black, then the photo snaps in as one piece.

**`feature-bar`** ({components.feature-bar}) — the hero's bottom strip: three masked cards under `white/20 blur-xl`, centered bold labels, wired as one `{motion.group-hover}` group.

**`service-chip`** ({components.service-chip}) — glass chips inside the services masked card: bold pre-line titles ("Optical\nFrames"), outlined number badges (01–03), one active chip in `white/90` with black text. 2×2 wrap on mobile, single row desktop, group hover.

**`overlay-duo`** ({components.overlay-duo}) — two equal cards docked at the portrait photo's foot: solid white ("The Process of Crafting Your Lenses", black arrow circle) beside liquid glass ("Caring for Your Eyewear", white arrow circle). The clearest statement of the material system.

### Buttons

- **Solid pill**: white fill, black bold text, `hover:scale-105` — "Call Us" / "Book Online" (16–20px bold, generous `px-8 py-5` on desktop), "Book a Fitting" (14px semibold, full-width in the mobile menu).
- **Outline pill**: black fill + 1px white border — the nav "Menu" trigger, inverting on hover.
- No ghost/text buttons; anything clickable is a pill or a nav link.

### Splash

**`splash`** ({components.splash}) — black overlay, `z-[100]`, bold `tabular-nums` counter (72→128px) bottom-left counting 0→100 in exactly 2s, holding 200ms, fading 700ms, then unmounting. It sets the film-leader tone and buys the mosaic its image load.

### Inputs & Forms

Not present. A future input should be a pill — black fill, 1px white hairline, white semibold text — with the frosted `white/90` treatment reserved for focus/active.

## Do's and Don'ts

### Do

- Keep the palette binary: black canvas, white type, glass in between. Photography is the only color source.
- Reproduce the masked-card math exactly — section-relative offsets, cover-scale to the *section*, quoted `url()`, focal pan 0.65–0.8/0.1. The shared canvas is the identity.
- Keep every gutter at `gap-1.5 md:gap-2` — one spacing value unifies the whole mosaic.
- Crush display leading (0.79–0.95) and break headline lines by hand.
- Use the three-white material ladder deliberately: solid = action, frosted = active state, `white/20 blur-xl` = surface.
- Set the group-hover timing-function inline **before** writing `--shift`/`--scale-active`, and keep the springy `cubic-bezier(0.34,3.85,0.64,1)` release.
- Ship every custom utility with its `prefers-reduced-motion` guard, and keep the IntersectionObserver fallback that reveals content immediately.

### Don't

- Don't introduce any hue — no blue links, no green success, no brand accent. One tinted pixel breaks the system.
- Don't replace masked cards with per-card `background-size: cover` — four independent crops of the same photo is exactly what this design is *not*.
- Don't widen the gutters or add outer margins around sections — the near-seamless joints are structural.
- Don't lighten the type — no `font-normal` body copy, no thin display weights.
- Don't add shadows to mosaic cards; elevation belongs to the two floating menu panels only.
- Don't swap the arrow for an icon library, or add a second icon.
- Don't animate with a library — the hand-rolled reveal/dropdown/group-hover trio is part of what buyers copy.
- Don't let the splash exceed ~3s total; it's a leader, not a loader.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <768px | Everything stacks; feature bars go vertical (`h-14`); chips wrap 2×2; hamburger + slide-in panel; portrait column drops below content (`order`); sections 2–3 relax to `min-h-screen`; focalX eases to 0.65–0.7 |
| md | ≥768px | The full mosaic: 2-column grids, single-row bars/chips, desktop dropdown menu, `h-screen` sections, focalX 0.8, radius steps 12→16px, gutters 6→8px |

One breakpoint total — the system flips from stacked reader to full mosaic at 768px, nothing else.

### Touch Targets

- Solid CTAs are 44px+ tall at both sizes; nav pill ≈46px; hamburger is a 40×40 hit area; mobile menu links are 4xl-tall full-width anchors.
- Group-hover lifts are pointer-only garnish — layout and legibility lose nothing on touch.

### Media Behavior

- Masked sections re-window on every resize via `ResizeObserver`; the photo re-covers per section, so no crop ever letterboxes.
- Section-3 photos use `object-cover` with art-directed `object-[center_60%]` / `object-[center_35%]` positions — keep those percentages; they place glasses and faces in the visible band.
- Under `prefers-reduced-motion: reduce`, the `t-dropdown`/`t-avatar` transitions are disabled and reveal styles resolve visible — the page renders complete with zero motion.

## Iteration Guide

1. New section? Decide first: mosaic (one photo, N windows) or photo-card grid (Section-3 style). Don't mix a third pattern.
2. New mosaic photos need quiet zones — the focal-pan system assumes subject right-of-center with breathing room for corner copy at the edges.
3. Reference tokens — `{colors.x}`, `{spacing.gutter}`, `{rounded.card}`, `{motion.x}`, `{components.x}` — so a gutter or easing change cascades.
4. New interactive groups (logo rows, image strips) wire into the existing `useAvatarGroupHover` — one hover grammar page-wide.
5. New surfaces pick a rung on the white ladder (solid / 90 / 20); inventing `white/40` is a system change, not a tweak.
6. Keep new display type on the clamp + crushed-leading recipe; if a headline needs leading above 1.05, it's body copy, not display.
7. A second icon is a design decision — the system currently owns exactly one glyph; extend the inline-SVG pattern, never install a library.

## Known Gaps

- All navigation (dropdown links, mobile links, "Visit Our Store") is `href="#"` — no routing or destinations exist. CTAs ("Call Us", "Book Online", "Book a Fitting") have no handlers.
- There is no footer, no contact section, no form — the page ends at Section 3's grid.
- Weight 400 is loaded but unused; keep it as reserve or drop it from the Google Fonts query deliberately.
- The photos are owner-supplied and carry the composition (subject placement feeds the focal math) — replacements must be portrait-ratio with right-of-center subjects, tested against all card windows at both breakpoints.
- No semantic states, focus-visible styles, or form language exist; they would need to be introduced inside the black/white/glass grammar.
- `useIsMobile` re-renders on breakpoint cross only for focal values — fine as-is, but any new responsive JS should reuse it rather than adding listeners.
