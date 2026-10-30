---
version: "1"
name: "Porgas — Step Into Wonder"
description: "An immersive scroll-driven parallax landing for an AI mirror product. Warm-dark cinematic canvas (#0a0608) with two scenes pinned inside a sticky viewport, five photographic parallax layers with reverse-tracking smoothed mouse offset, and an arc-style card carousel that fans across a phantom arc tangent to the bottom of the screen. Bodoni Moda serif for the wordmark and arc titles, Nunito for everything else. No animation libraries — hand-rolled rAF and CSS transitions only."
colors:
  page: "#0a0608"
  ink-deep: "#3b1a0a"
  ink-warm: "#5c2d0e"
  ink-accent: "#6b2e0e"
  hero-on-photo: "rgba(255,245,235,0.88)"
  scene2-body: "rgba(255,255,255,0.82)"
  arc-desc: "rgba(255,255,255,0.85)"
  nav-link: "rgba(255,255,255,0.9)"
typography:
  display:
    fontFamily: "Bodoni Moda"
    weights: "400 (regular + italic only)"
    role: "wordmark, scene-2 headline, arc card titles, all numerals"
  body:
    fontFamily: "Nunito"
    weights: "300 / 400 / 500 / 600 / 700 / 800 (variable 300–800)"
    role: "body copy, nav links, descriptions, labels, scroll cue"
spacing:
  base: "Tailwind default (4px) — used sparingly; inline CSSProperties owns everything else"
  desktop-hero-anchor: "bottom: 120px / left: 60px (heading) · right: 40px (cards) — never centered"
  mobile-hero-pad: "80px 24px 100px"
  arc-bottom-base: "140 (mobile) / 200 (desktop)"
rounded:
  card-soft: "22px (mobile Scene 1) / 28px (desktop Scene 1) / 26px (desktop arc) / 18px (mobile arc)"
  circle: "50% (PlayCircle, ScrollChevron, numbered badges, nav logo container)"
  bar: "2px (slider dots)"
components:
  arc-card-slider: "Nine cards fanned across a phantom arc tangent to the viewport bottom — radius 700 (mobile) / 1100 (desktop), 9° spacing per card on desktop, rotation driven by scrollProgress between 0.7 and 1.0"
  scene1-card: "Square photographic card with bottom-gradient overlay, optional backdrop-blur masked upward, and a 'reel' or 'number' content variant"
  parallax-stack: "Five layers (World BG / Bottom Clouds / Portal BG / Foliage L / Foliage R) all transform-owned by a single rAF loop with 0.07 lerp smoothing"
  sticky-viewport: "480vh outer container holding a position:sticky 100vh stage — the entire experience plays inside one frame"
---

# Porgas — Step Into Wonder

> Fivefold showcase. Pairs with the Porgas prompt. Use this file to keep Porgas's cinematic restraint when you add new pages — it should always read as a museum-of-imagined-places, never a SaaS landing.

## Overview

Porgas is a single-page parallax for an AI mirror that opens onto living worlds and lets you capture yourself standing inside them. Two scenes — the threshold, then the gallery of worlds — play inside one pinned 100vh stage. Five photographic layers track the cursor in reverse and scale up as you scroll. A nine-card arc fans across the bottom of the second scene like a tarot deck laid on glass. Bodoni Moda serif carries the wordmark and the arc titles; Nunito does everything else.

The governing decision: **cinema, not page.** Most consumer-AI landings still read like a product page — a centered hero, three feature columns, a pricing table. Porgas refuses all of it. There is no hero column. The heading lives at `bottom: 120px / left: 60px` and the three reel cards live at `bottom: 120px / right: 40px`, with a layout decree printed in the prompt itself that the build is **wrong** if it ever comes out centered on a 1280px+ viewport. The whole page is one continuous shot: you fall through a portal, the foliage parts, the clouds drift past, and you land in front of nine windows onto different worlds. The bet is that an AI mirror is sold by the feeling of standing in front of it — so the page itself has to feel like standing in front of it.

The system extends sideways by *staying within the frame.* New surfaces don't add scroll length, hero stacks, or feature tables — they add a third scene inside the same sticky viewport, a new arc fan, or a new photographic layer in the existing parallax stack. Bodoni Moda governs every headline and every numeral the user reads; Nunito governs every nav link, label, and body sentence. Color stays on the earth + white restraint. Animation stays hand-rolled rAF. The page is one shot — every extension is a new beat in that same shot.

**Key Characteristics:**
- Warm-dark cinematic canvas (`{colors.page}` — #0a0608) — no greys, no neon, no purple, no saturated accents.
- Two scenes pinned inside one `480vh / sticky 100vh` viewport — no second page, no second scroll.
- Five-layer photographic parallax (World / Clouds / Portal / Foliage L / Foliage R) with reverse-tracking smoothed mouse offset at `lerp 0.07` per frame.
- Bodoni Moda 400 only — wordmark, scene-2 headline, arc card titles, the `48` numeral. Italic reserved for the single word `INTO`.
- Nine-card arc slider on a phantom radius (1100 desktop / 700 mobile), 9° apart, fanning across the final 30% of scroll.
- Decree-level layout law — at any viewport ≥ 1024px the hero is absolute bottom-left + cards bottom-right, never centered.
- No animation libraries — single `requestAnimationFrame` loop owns every transform; React owns only opacity on UI wrappers.
- White on dark rescued by photographic text-shadows, not contrast bumps.

## Colors

> **Source pages analyzed:** the single-file `src/App.tsx` (Scene 1 threshold + Scene 2 gallery) — a restrained earth-and-white palette inlined as hex/rgba with no `:root` token system. Every white surface earns its visibility from a tuned `textShadow`, not a brightness bump.

### Page & Surface
- `{colors.page}` — `#0a0608` — the brown-black canvas. Set on `html`, `body`, `#root`, and the sticky viewport. Slightly warmer than pure black so the photographic layers don't fight the background.
- Top fade gradient — `linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 100%)` — z-45, 42vh tall, anchors the nav.
- Bottom fade gradient — `linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 100%)` — z-16, 40% tall, anchors the arc.

### Ink (Warm Browns, used only on light portal areas)
- `{colors.ink-deep}` — `#3b1a0a` — the `HeadingDark` color used on mobile/tablet where the heading sits over the lighter portal area, not over the photo. Also the fill of the `PlayCircle` triangle.
- `{colors.ink-warm}` — `#5c2d0e` — mobile/tablet subtext color under `HeadingDark`.
- `{colors.ink-accent}` — `#6b2e0e` — legacy chevron accent (chevron has been removed; reserved for future earth-tone affordances).

### Text on Photography (White, Shadowed)
- Desktop hero `h1` — `#ffffff` + `textShadow: 0 2px 24px rgba(0,0,0,0.7), 0 1px 4px rgba(0,0,0,0.9)`.
- `{colors.hero-on-photo}` — `rgba(255,245,235,0.88)` — desktop hero `<p>` color over the photographic background, paired with `textShadow: 0 1px 12px rgba(0,0,0,0.8)`.
- Scene 2 head — `#ffffff` + `textShadow: 0 2px 20px rgba(0,0,0,0.4)` — the `MIRROR EVERY WORLD` line.
- `{colors.scene2-body}` — `rgba(255,255,255,0.82)` — Scene 2 `<p>` subhead.
- Arc card title — `#ffffff` + `textShadow: 0 1px 12px rgba(0,0,0,0.4)`.
- `{colors.arc-desc}` — `rgba(255,255,255,0.85)` + `textShadow: 0 1px 10px rgba(0,0,0,0.4)` — body text inside each arc card.
- `{colors.nav-link}` — `#ffffff` at `opacity: 0.9`, never solid white.

### Hairlines & Overlays
- Numbered badge border — `1.5px solid rgba(255,255,255,0.5)` with text `rgba(255,255,255,0.85)`.
- Arc card overlay — `linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.22) 100%)` — sits above bg, below content.
- Scene 1 card gradient overlay — `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0.15) 75%, transparent 100%)` — 60% bottom height of each card.

**Constraint (verbatim from prompt):** "Do not use neon, purple, or saturated accent colors anywhere — palette is restrained earth + white." Do not round any hex / rgba above to "near" values.

## Typography

### Font Family
- **Display** — `'Bodoni Moda', serif` — Regular 400 + Italic 400 only. Carries the wordmark, scene-2 headline, arc card titles, and the `48` numeral. Italic is reserved for one word: `INTO`.
- **Body** — `'Nunito', sans-serif` — variable axis 300–800, default 400. Everything else on the page: nav, body copy, labels, descriptions, the `Descend` scroll cue.
- Both loaded via a single Google Fonts request in `index.html`. No system fallback used decoratively, no monospace.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| Wordmark "STEP INTO" | `clamp(32px, 4.5vw, 54px)` | Bodoni 400 | 1.1 | `0.04em` | Desktop hero line 1 |
| Wordmark "WONDER" | `clamp(50px, 7.5vw, 88px)` | Bodoni 400 | 0.9 | `-0.02em` | Desktop hero line 2 |
| Scene-2 head (desktop) | `clamp(38px, 6.5vw, 78px)` | Bodoni 400 | 1.05 | `0.03em` | `MIRROR EVERY WORLD` |
| Scene-2 head (mobile) | `clamp(28px, 8vw, 44px)` | Bodoni 400 | 1.05 | `0.03em` | `MIRROR EVERY WORLD` |
| Hero body | 18 / 16 / 15 px | Nunito 400 | 1.7 desktop · 1.6 mobile | default | Desktop `<p>` + tablet `<p>` + mobile `<p>` |
| Arc title | 30 / 22 px | Bodoni 400 | 1.05 | default | Desktop / mobile arc card title |
| Arc desc | 15 / 12 px | Nunito 400 | 1.4 | default | Desktop / mobile arc card body |
| Nav link | 12 / 11 px | Nunito 400 | n/a | `0.12em` uppercase | Tablet+desktop / mobile nav |
| Scroll cue "DESCEND" | 10 px | Nunito 400 | n/a | `0.22em` uppercase | Desktop bottom-center cue |
| Numbered badge "01–09" | 10 px | Nunito 400 | n/a | default | Arc card badge text |
| `48` numeral | 36 / 28 px | Bodoni 400 | 1.0 | default | Desktop / mobile `AI Worlds` card |

### Principles
- Bodoni Moda only loads weight 400. Every heading element must set `fontWeight: 400` explicitly — `h1`/`h2` default to 700 in browsers and will faux-bold the missing cut.
- Italic is a single-word event, not a tone — only `INTO` ever uses `fontStyle: italic`.
- Negative letter-spacing (`-0.02em`) is applied only to the WONDER line; everywhere else display type uses positive tracking (`0.03–0.04em`) to keep the serif breathing.
- Body sits at 18px on desktop, not 16 — the photographic backdrop demands a larger read.
- `clamp()` owns every responsive head size — no breakpoint-based font swaps.
- Uppercase is reserved for nav and the `Descend` cue. Headings stay mixed-case.
- Weight 500 is deliberately absent — Nunito ramps 300 → 400 → 600 → 800 on the page.
- If a weight outside 300–800 is requested, clamp to nearest — never let the browser synthesize.

### Note on Font Substitutes
If Bodoni Moda is unavailable, fall back to Playfair Display 400 or Cormorant Garamond 400 — both keep the high-contrast vertical stroke. Compensate by adding `+0.02em` letter-spacing on the WONDER line, since substitutes typically have less aggressive negative side-bearings. If Nunito is unavailable, fall back to Inter 400 — keep the same sizes but reduce `0.12em` nav tracking to `0.10em` because Inter's apertures are tighter than Nunito's.

## Layout

### Spacing System
- Tailwind's default 4px scale, used only for `gap-3.5` and a handful of typography utilities (`tracking-widest`, `tracking-tight`, `leading-none`, `leading-relaxed`).
- Desktop hero anchor — `bottom: 120 / left: 60` for the heading block, `bottom: 120 / right: 40` for the three reel cards.
- Slider dots — `bottom: 40 / left: 60` (desktop), `bottom: 28` centered (mobile).
- Scroll cue — `bottom: 36` centered (desktop only).
- Mobile / tablet padding — `80px 24px 100px` (mobile column), `80px 32px 96px` (tablet column).
- Arc bottom base — `140` (mobile) / `200` (desktop) — where the phantom-arc apex sits relative to viewport bottom.
- Nav padding — `18px 20px` (mobile), `22px 48px` (tablet+desktop).
- Card gap inside Scene 1 desktop row — `12px`; mobile row — `14px`; tablet row — `gap-3.5` (14px).
- Reel card content `inset` — `12px` from card edges.

### Grid & Container
- Outer scroll container — `height: 480vh; position: relative`. Holds the sticky stage.
- Stage — `position: sticky; top: 0; height: 100vh; overflow: hidden; background: #0a0608`. Every layer lives inside this one frame.
- Tailwind `screens` config overrides `xl` to `1024px` so the desktop split layout kicks in at laptop width, not at 1280px.
- Desktop hero heading `maxWidth: 440`, body paragraph `maxWidth: 300`.
- Mobile body paragraph `maxWidth: 280`; tablet body paragraph `maxWidth: 400`.
- Scene 2 body `maxWidth: 260` mobile / `480` desktop.

### Whitespace Philosophy
Porgas treats negative space as photographic air, not layout grid. The desktop hero deliberately leaves the upper two-thirds of the viewport empty — that's where the portal pulses and the foliage breathes. Anchoring all UI to the bottom corners reads as a film still where titling sits at the lower thirds, not a SaaS hero where everything stacks toward the middle. The 480vh scroll length is itself a negative-space tool: nothing happens in a hurry; you fall through the portal slowly.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | World BG, Portal BG, Clouds — photographic layers carry their own depth. |
| Soft hairline | `1.5px solid rgba(255,255,255,0.5)` | Arc card numbered badge, ScrollChevron border. |
| Backdrop blur | `backdropFilter: blur(5px)` masked `linear-gradient(to top, black 55%, transparent 100%)` | Lower 44% of every Scene 1 card with `withBlur=true`. |
| Product shadow | `0 8px 32px rgba(0,0,0,0.5)` (mobile) · `0 8px 32px rgba(0,0,0,0.45)` (desktop) · `0 8px 40px rgba(40,30,40,0.28)` (arc card) | Scene 1 cards and arc cards. |

**Shadow philosophy.** Shadows on Porgas are never decorative — they're either lifting a photographic card off the photographic backdrop (Scene 1 reel cards) or seating the arc cards on the phantom arc tangent (warm tinted shadow `rgba(40,30,40,0.28)`). The page itself has no shadow — the canvas is a flat warm black, and any sense of depth comes from scale animation (portal 1 → 7.5×) and the parallax differential between layers.

**Decorative Depth:**
- Portal scale 1 → 7.5 owns the depth-of-falling sensation.
- Foliage scale 1 → 1.7 with bottom-corner `transformOrigin` makes the corners feel like they bow outward as you scroll.
- Cloud scale 1 → 1.4 with `transformOrigin: '50% 100%'` makes the strip rise into the frame.
- Reverse-tracking mouse parallax: every layer translates *opposite* to the cursor — the viewer feels they are inside the frame, not above it.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| none | `0` | Photographic full-bleed layers. |
| bar | `2px` | Slider dot bars. |
| sm-arc-mobile | `18px` | Mobile arc card. |
| md-card-mobile | `22px` | Mobile/tablet Scene 1 reel card. |
| lg-arc-desktop | `26px` | Desktop arc card. |
| lg-card-desktop | `28px` | Desktop Scene 1 reel card. |
| circle | `50%` | PlayCircle, ScrollChevron, numbered badges, nav logo container. |

### Photography Geometry
- **World BG** — full-bleed `object-fit: cover`, `transformOrigin: 50% 50%`, panoramic source.
- **Portal BG** — full-bleed `object-fit: cover`, `transformOrigin: 52% 38%` (the offset origin gives the fall-through its slight off-center pull).
- **Foliage L/R** — transparent PNG, content packed into the bottom-left / bottom-right of the source. Sized `clamp(220px, 42vw, 560px)`, anchored to its corner with matching `transformOrigin`.
- **Bottom clouds** — horizontal cloud band, `width: 100%; height: auto`, parent `bottom: -240` so the strip sits low and the lower portion clips off the viewport.
- **Reel cards (Scene 1)** — square photographic crops, 140px (mobile/tablet) or 158px (desktop), `cover, center`.
- **Arc card backgrounds (Scene 2)** — one image per card (`Back 01–09`), `cover, center`, sized `160×175` (mobile) or `220×230` (desktop).
- Eager-load every layer at first paint — there is no lazy strategy because the entire stage is on screen from frame one.

## Components

### Top Navigation
**Nav bar** `{component.nav}` — absolute `top: 0; left: 0; right: 0`, z-50, flex `space-between` items-center.
- Mobile (`flex md:hidden`): `padding: 18px 20px`; `<NavLink size={11}>Explore</NavLink>` · `<StarLogo />` · `<NavLink size={11}>Capture</NavLink>`.
- Tablet/Desktop (`hidden md:flex`): `padding: 22px 48px`; left group gap 36 (`Worlds` · `Mirror` · `Capture`), center `<StarLogo />`, right group gap 36 (`Gallery` · `Story` · `Connect`).
- **Default:** white at `opacity 0.9`, uppercased, `letter-spacing: 0.12em`.
- **Active:** `opacity: 1.0`, color `{colors.nav-link}` resolved to full white.
- **Focus:** `outline: 1.5px solid rgba(255,255,255,0.5)` with `outline-offset: 4px` — matches the ScrollChevron hairline.

**StarLogo** `{component.logo}` — `<img src={logo}>` at `height: 32, width: auto, display: block`. No fallback letterform.

### Buttons
**PlayCircle (button-primary)** `{component.button-primary}` — white circle of arbitrary `size`, flex-centered, contains an SVG right-triangle filled `{colors.ink-deep}` (`#3b1a0a`). Triangle path `M0 0 L10 6 L0 12 Z`. Used inside reel cards.
- **Default:** white fill, ink-deep triangle, no border.
- **Active:** triangle fill stays ink-deep; container compresses to `transform: scale(0.97)` (apply only on press — never on hover).
- **Focus:** `outline: 1.5px solid rgba(255,255,255,0.6)` at `outline-offset: 3px`.

**NavLink (button-secondary)** `{component.button-secondary}` — uppercased Nunito anchor at 11–12px, `letter-spacing: 0.12em`, color `#fff` at `opacity: 0.9`, `text-decoration: none`, `cursor: pointer`.
- **Default:** opacity 0.9.
- **Active:** opacity 1.0, no underline.
- **Focus:** white hairline outline as above.

**ScrollChevron (button-utility)** `{component.button-utility}` — 34×34 circle, `border-radius: 50%`, `border: 1.5px solid rgba(255,255,255,0.5)`, centered 14×14 SVG chevron stroked `rgba(255,255,255,0.7)`, `stroke-width: 1.5`. `animation: bobUp 1.8s ease-in-out infinite` (translateY 0 → -6 → 0).
- **Default:** decorative-only; not focusable in current build.
- **Active:** n/a (not surfaced as interactive).
- **Focus:** n/a — if upgraded to a button, apply the same hairline outline rule.

### Cards & Containers
**Scene1Card — reel variant (card-light-tile)** `{component.card-reel}` — square photographic card. Outer `width/height = size`, `border-radius: {radius}`, `overflow: hidden`, `background-image: url(image) cover center`, `box-shadow: 0 8px 32px rgba(0,0,0,0.5)` (mobile) or `0 8px 32px rgba(0,0,0,0.45)` (desktop). DOM order: image bg → 60% bottom gradient overlay → optional 44% backdrop-blur (masked upward) → content (`<PlayCircle size={circleSize}/>` + `<span>{label}</span>`). Content at `inset: 12px` from bottom edges.

**Scene1Card — number variant (card-dark-tile)** `{component.card-number}` — same structure, content swapped to stacked Bodoni numeral (`fontSize: numberSize`, color `#fff`, lineHeight 1) over Nunito label (`fontSize: labelSize`, color `rgba(255,255,255,0.85)`, marginTop 3). Used for the `48 / AI Worlds` middle card.

**ArcCard (card-utility)** `{component.card-arc}` — utility card on the phantom arc. Inner `border-radius: 26 / 18`, `padding: 20px 22px 24px / 16px 16px 18px`, `box-shadow: 0 8px 40px rgba(40,30,40,0.28)`, `display: flex; flex-direction: column; justify-content: flex-end; overflow: hidden`. DOM order is load-bearing:
1. Dark overlay — `absolute inset:0`, gradient overlay above.
2. Numbered circle — `top: 14/18; right: 14/18`, 24×24, `border-radius: 50%`, hairline border, Nunito 10px text `String(i+1).padStart(2,'0')`.
3. Title — Bodoni 30/22, color `#fff`, lineHeight 1.05, with title text-shadow.
4. Desc — Nunito 15/12, color `{colors.arc-desc}`, marginTop 6, lineHeight 1.4, with desc text-shadow.
- **Default:** Standard rotation per `(i - centerIndex) * cardSpacingDeg`.
- **Active:** n/a — slider is `pointer-events: none` (decorative scenery).
- **Focus:** n/a in current build.

### Inputs & Forms
**SliderDots (input-indicator)** `{component.slider-dots}` — four bars in a flex row, `gap: 8`. Index 0: `28×4`, `border-radius: 2`, `background: rgba(255,255,255,0.9)`. Others: `14×4`, `border-radius: 2`, `background: rgba(255,255,255,0.35)`. Suggests carousel state without owning one — there is no input wiring in the current build. No active/focus states defined; the bars are visual only.

### Footer
**Decorative arc footer** `{component.footer-arc}` — the nine-card arc itself functions as the page footer at scrollProgress ≥ 0.7. There is no traditional footer with copyright / links. The arc spans `bottom: 60 (mobile) / 80 (desktop)` to the phantom radius apex, and fades in via `scene2Opacity`. Treat any new "footer" content as a new card on the arc, or as a new scene appended to the sticky viewport — never as a separate stacked block.

## Do's and Don'ts

### Do
- Use `{colors.page}` (#0a0608) on every root-level surface — `html, body, #root`, and the sticky stage.
- Set `fontWeight: 400` explicitly on every `h1`/`h2` that uses Bodoni Moda — the browser faux-bolds the missing 700 cut otherwise.
- Anchor the desktop hero block via `position: absolute; bottom: 120; left: 60` and the cards via `right: 40` — never `align-items: center`.
- Reserve italic for the single word `INTO` and nothing else.
- Apply `textShadow` on every white text element layered over photography — contrast is earned by shadow, not by brightness.
- Keep the rAF loop the single owner of `transform` on World / Clouds / Portal / Foliage refs — React must not set `transform` on those divs.
- Use `clamp()` for every responsive head size; switch column → absolute-positioned at the `xl: 1024px` breakpoint via Tailwind classes, not inline `display`.
- Set `scrollbar-gutter: stable` on `html, body` so the layout doesn't shift when the sticky lock engages.

### Don't
- Don't use neon, purple, or saturated accent colors anywhere. The earth-+-white restraint is the brand.
- Don't center the hero on any viewport ≥ 1024px — the build is wrong if it ever comes out centered on a 1280px+ viewport.
- Don't import `motion/react`, GSAP, shadcn/ui, or headless-ui. Motion is hand-rolled rAF + CSS transitions only.
- Don't import `lucide-react` in `App.tsx`. It's listed in `package.json` for compatibility but every icon on the page is inline SVG.
- Don't apply inline `style={{ display: 'flex' }}` on an element whose visibility is controlled by `md:hidden` / `xl:hidden` — inline display wins the cascade fight.
- Don't reorder DOM children inside the arc card. Overlay must come before the numbered circle / title / desc, otherwise the overlay paints on top of the text.
- Don't round any hex / rgba to "near" values, and don't change any parallax magnitude in `MAG` (6 / 9 / 7 / 14 / 14) or any scale ceiling (1.18, 1.4, 7.5, 1.7).
- Don't add a second scroll-snap section or a stacked footer — every extension is a new beat in the same 480vh sticky shot.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤ 419px | Mobile column; `useIsMobile() === true`; mouse listener detached; `mx = my = 0`. |
| Phone | 420–640px | Mobile column; nav reduces to 3 items (Explore · Logo · Capture); single reel card. |
| Large phone | 641–735px | Still mobile column up to 767px; same nav + card layout. |
| Tablet portrait | 736–833px | Tablet column kicks in at `md: 768px`: nav goes to 6 items + logo; 3 reel cards row. |
| Tablet landscape | 834–1023px | Tablet column persists; centered column hero; arc radius stays at mobile 700. |
| Small desktop | 1024–1068px | Tailwind `xl: 1024px` switches layout to absolute-positioned heading-left + cards-right; arc radius jumps to 1100. |
| Desktop | 1069–1440px | Same desktop split; type sizes scale via `clamp()`. |
| Wide desktop | ≥ 1441px | Layout unchanged; `clamp()` ceiling holds the heads at 54/88/78px. |

### Touch Targets
- Minimum interactive size: 34×34 (`ScrollChevron`, `PlayCircle` at smallest).
- Nav links inherit the 32px logo height as a hit-area floor.
- Numbered badges (24×24) are decorative only — never wire them to a tap target.
- Arc card slider is `pointerEvents: none` — never expose it to touch; the "real" navigation is the nav bar.

### Collapsing Strategy
- **Nav:** 6 items + logo (desktop+tablet) → 2 items + logo (mobile, ≤ 767px). Items dropped on mobile: Worlds, Mirror, Gallery, Story, Connect — only Explore + Capture remain.
- **Hero typography:** absolute-positioned bottom-left `STEP INTO WONDER` in white (desktop) → centered `HeadingDark` in `{colors.ink-deep}` over the lighter portal area (mobile/tablet).
- **Reel cards:** 3-card row (desktop, 158px each) → 3-card row (tablet, 140px each) → single card (mobile, 140px).
- **Slider dots:** `bottom: 40 / left: 60` (desktop) → centered `bottom: 28` (mobile/tablet).
- **Scroll cue:** centered bottom (desktop only) → removed on mobile/tablet.
- **Arc geometry:** radius 1100, spacing 9°, card 220×230 (desktop) → radius 700, spacing 12°, card 160×175 (mobile).
- **Mouse parallax:** active on `!isMobile` only — mobile receives scroll-driven layers but never mouse-driven offset.

### Image Behavior
- Every photographic asset is statically imported (Vite hash) or fetched via fixed CDN URL — never lazy. The whole stage paints from frame one because the entire experience plays inside one viewport.
- No `srcset` is used in current build — the 11 photographic assets are sized for ≥1440px viewports and `object-fit: cover` handles down-scaling.
- Foliage PNGs must be transparent with content packed into the bottom-left (Curtain left) and bottom-right (Curtain right). If swapped for placeholders, preserve corner packing or the `transformOrigin` math breaks.
- Reel and arc card backgrounds use `background-image cover center` — never `<img>` tags inside the card, so the overlay/blur stack composes cleanly.

## Iteration Guide

1. Add new beats inside the same sticky shot — extend `containerRef` from `480vh` to `560vh` and add a third scene with its own `sceneNOpacity` derived from scroll, never a second page.
2. Variants live in component props — `Scene1Card` already has `variant: 'reel' | 'number'`. A new card type means a new `variant` value, not a new component file.
3. Use token refs throughout — `{colors.page}`, `{colors.ink-deep}`, `{colors.arc-desc}` — never paste hex into a new file without first checking if a token exists.
4. Never document hover states. Apple convention applies — default, active, focus only. Hover is for cursors, and Porgas is a cinema page.
5. Display vs body family rule — Bodoni Moda governs anything the eye reads as a title or numeral; Nunito governs everything that scans as language. New components must declare which family they belong to.
6. Shadow restriction — soft hairlines for borders, blur for glass, product shadow for lifted cards, nothing else. No glow, no inset, no neon ring.
7. Chrome vs surface — `{colors.page}` is the chrome; photography is the surface. Never paint chrome onto the surface (no dark cards over dark canvas) and never paint the surface onto the chrome (no photographic textures on the canvas itself).

## Known Gaps

- Validation / error states are not surfaced in analyzed pages — there is no form on Porgas, so no token system for invalid / error / success exists.
- Dark mode toggling is not documented — the page is single-theme dark by design; a light-mode counterpart would require re-deriving every textShadow.
- Specific blur radii beyond the single `blur(5px)` on Scene 1 cards are not defined — backdrop-filter scale, grain, and noise overlays were considered and rejected per the prompt.
- Reduced-motion handling is not specified — the rAF loop runs regardless of `prefers-reduced-motion`. A future iteration should gate `MAG` and scale ceilings behind the media query.
- Dynamic content patterns (loading skeletons, async card hydration) are not surfaced — all 9 arc cards are hard-coded `CARD_DATA` at build time.
- Hover states for `NavLink` and `ScrollChevron` are intentionally undocumented; if a future surface needs hover affordances, treat them as out-of-scope until a new governing decision is made.
