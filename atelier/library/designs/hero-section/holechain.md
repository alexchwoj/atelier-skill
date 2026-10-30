---
version: "1"
name: "HoleChain — Dark Cinematic Wormhole Hero"
description: "A single-viewport hero landing for an omnichain liquidity layer. Pure-black stage with a hand-coded HTML5 canvas wormhole — concentric grayscale ellipses receding into a glowing core, radial spokes, a stream of white particles drawn up into the hole, and crisp white centered copy floating above a soft radial vignette. No color, no animation library, no video — the entire identity is one canvas engine plus three CSS signatures."
colors:
  bg-page: "#000000"
  text-main: "#f4f4f5"
  text-secondary: "#9a9a9a"
  title-ink: "#fafafa"
  brand-white: "#ffffff"
  card-bg: "rgba(255, 255, 255, 0.045)"
  stroke-canvas: "#6e6e6e"
  cta-gradient: "linear-gradient(180deg, #2c2c2c 0%, #111111 100%)"
typography:
  display:
    fontFamily: "DM Sans"
    weights: "400 / 500 / 600 / 700 / 800"
    role: "single family for the entire page — heading, body, brand, nav, CTA"
  icon-font:
    fontFamily: "Material Symbols Rounded"
    weights: "400 (FILL 1, opsz 24)"
    role: "optional decorative .deco glyphs only"
spacing:
  base: "Tailwind 3 default (4px)"
  navbar-container: "max-width 1100px / padding 28px 40px"
  main-container: "max-width 700px / padding 20px 20px 30px"
  viewport-lock: "html, body, #root → height 100vh / overflow hidden"
rounded:
  pill-cta: "40px (CTA button)"
  pill-icon: "9999px (24×24 white chevron chip inside CTA)"
  tag: "6px (inline 'bridge' / 'connect' pills in subtext)"
  card: "18px (reserved card style, not currently mounted)"
components:
  hole-background: "Original self-contained HTML5 canvas engine — 60 concentric ellipses tweened from a wide startDisc to a vanishing endDisc with easeInExpo, 60 radial spokes baked into an off-screen canvas, 100 square particles rising vy 0.5–1 and clipped to the funnel path. p += 0.001 per frame, every 5th disc drawn for cadence. DPI-aware, resize-aware, library-free."
  copy-vignette: ".main::before — 920×580 radial-gradient ellipse, rgba(0,0,0,0.95→0) with blur(38px) sitting behind the hero copy so it reads over the busy tunnel."
  hole-aura: ".hole-aura — 6s linear background-position sweep on a grayscale linear-gradient(20deg, #fff → #999), mix-blend-plus-lighter, blur(60px), 55vmin circle centered on the hole core."
  hole-overlay: ".hole-overlay — 1px-period repeating-linear-gradient scanlines, rgba(255,255,255,0.5), mix-blend-overlay at opacity 0.5 across the whole stage."
  cta-button: "CtaButton — dark linear-gradient pill (#2c2c2c → #111), white text, 24×24 white circle leading-chip with a stroked #111 chevron SVG. Hover lifts -1px and brightens 1.1×."
  mobile-nav: "Slide-in fixed overlay, transform translateX(100% → 0) over 0.6s cubic-bezier(0.77, 0, 0.175, 1), backdrop-blur(14px), 38px/800 stacked links."
---

# HoleChain — Dark Cinematic Wormhole Hero

> Fivefold showcase. Pairs with the HoleChain prompt. Use this file to keep HoleChain's library-free, single-canvas restraint when you extend the page — it should always read as one cinematic frame, never a marketing scroll.

## Overview

HoleChain is **a single-viewport hero for an omnichain liquidity layer, rendered as one cinematic frame: a pure-black stage with a hand-coded canvas wormhole pulling the eye into a glowing core, and four lines of crisp white copy floating above it.** No scroll. No second section. No video file, no shader library, no animation framework — the entire signature is one `<canvas>` element, three CSS rules, and DM Sans.

The governing decision: **one frame, one engine, no library.** Most web3 hero pages reach for Framer Motion, Lottie, a looping background MP4, and a chromatic gradient to manufacture mood. HoleChain refuses all of it. The mood is generated live, in code: 60 concentric grayscale ellipses receding with `easeInExpo`, 60 radial spokes baked into an off-screen canvas, 100 square particles rising into the hole's clip path, and a 6s aura sweep underneath — every frame computed by a single `requestAnimationFrame` loop. The page is locked to `100vh` with `overflow: hidden` so there is nowhere to scroll. The bet: a hero that runs entirely on first-party code reads more confident than one assembled from third-party effects, and the singular vanishing point — the hole itself — does the persuasion that a multi-section landing usually tries to do with copy.

The system is intentionally narrow so it survives extension. Three CSS signatures (`.main::before` vignette, `.hole-aura` rotating glow, `.hole-overlay` scanline grid) are invariant — the prompt forbids dropping any of them. A single tech stack (React 18 + TypeScript + Vite + Tailwind 3) is pinned, with `screens` extended only, no theme color extension, so the entire palette can never leak chroma. Future variants ship inside this perimeter: change the copy, swap the brand mark, tune disc count — but never add an animation library, never insert a video, never introduce a hue. If a constraint conflicts with a framework limit, clamp to the nearest valid value and leave a comment; do not silently change.

**Key characteristics:**
- **Pure-black stage** (`{colors.bg-page}` — #000000) with `{colors.text-main}` (#f4f4f5) default copy. **No color anywhere** — the entire palette is white → grey → black. No blue, no purple, no accent hue of any kind.
- **DM Sans, alone.** A single variable family (100–1000 axis) carries headings, body, brand, nav, and CTA. Material Symbols Rounded is loaded for optional `.deco` glyphs but not currently mounted.
- **Library-free motion.** No Framer Motion, no GSAP, no Lottie, no motion.react. Two motion systems only: a canvas rAF loop and a handful of CSS keyframes (`aura-glow`, `floatSlow`).
- **Three CSS signatures** carry the identity — the `.main::before` copy vignette, the `.hole-aura` rotating glow, and the `.hole-overlay` scanline grid. They are invariant; the prompt forbids dropping any of them.
- **Single-viewport lock** — `html, body, #root { height: 100vh; overflow: hidden }`. No scroll, no second section, no footer. The page is one composed frame.
- **Hand-drawn icon system.** One inline-SVG chevron (the CTA chip) and Material Symbols Rounded for the optional `.deco` glyphs. No icon library.
- **Pinned tech stack.** React 18 + TypeScript + Vite + Tailwind 3 with `screens` extended only (no theme color extension). All styling lives in one hand-authored `index.css`.
- **Singular vanishing point.** The hole is the entire persuasion. Copy stays at four lines; everything else is the engine doing its work.

## Colors

> **Source pages analyzed:** the single-viewport hero (navbar + main + mobile overlay) — the entire production surface. There is no second page.

A four-token root palette plus a handful of working greys used verbatim in component CSS. The smallness is the point — the page proves it can be cinematic without a single chromatic hue.

### Stage & Surface
- **Page** (`{colors.bg-page}` — #000000): The stage. Absolute black, no off-black, no near-black. Everything paints on top.
- **Card surface** (`{colors.card-bg}` — rgba(255,255,255,0.045)): Glass for the reserved card style. Currently not mounted but shipped — when mounted, it sits on top of the canvas at radius 18px with 1px rgba(255,255,255,0.08) hairline.

### Text
- **Text main** (`{colors.text-main}` — #f4f4f5): Primary copy, eyebrow ink, tag fill. Slightly off-white so the page doesn't feel monitor-bright.
- **Text secondary** (`{colors.text-secondary}` — #9a9a9a): Eyebrow, subtext, card sub. The "supporting voice" grey.
- **Title ink** (`{colors.title-ink}` — #fafafa): Reserved for the H1 (`One network for every chain`) — a half-step brighter than text-main so the headline sits above body copy by tone, not weight.
- **Brand white** (`{colors.brand-white}` — #ffffff): The wordmark `holechain.`, the CTA label `Launch App`, and the mobile-nav links. The only pure white in text.

### Canvas Palette
- **Canvas stroke** (`{colors.stroke-canvas}` — #6e6e6e): The wormhole's disc and line stroke colour, passed to `HoleBackground` as a prop. Default in the engine is `#737373`; the production mount uses `#6e6e6e`.
- **Aura stops** (verbatim): `#ffffff`, `rgba(102,102,102,0.13)`, `#cccccc`, `rgba(204,204,204,0.13)`, `rgba(255,255,255,0.38)`, `#999999`. The `linear-gradient(20deg, ...)` baked into `.hole-aura`.
- **Decorative gradient** (`.deco` glyphs): `linear-gradient(to bottom, #ffffff 40%, #c9c9c9 72%, #8a8a8a 100%)`.

### Brand Gradient (CTA)
- **CTA gradient** (`{colors.cta-gradient}` — `linear-gradient(180deg, #2c2c2c 0%, #111 100%)`): The only "non-flat" surface on the page. Dark, narrow vertical fade — never radial, never colorful. Border `rgba(255,255,255,0.12)`, shadow `0 4px 15px rgba(0,0,0,0.35)`.

**Constraint** (verbatim from prompt): every chromatic hue is forbidden. The page is grayscale end to end. Contrast comes from value, not from chroma. Round nothing.

## Typography

### Font Family
- **DM Sans** — full stack: `'DM Sans', system-ui, sans-serif`. Variable 100–1000 weight axis + 9–40 optical-size axis loaded from Google Fonts.
- **Material Symbols Rounded** — `'Material Symbols Rounded'` with `font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24`. Optional, decorative only.
- OpenType: `-webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility`. No `font-feature-settings` overrides — DM Sans's defaults stand.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `title` | `clamp(34px, 5vw, 52px)` | 500 | 1.08 | -1.5px | H1 — `One network for every chain` |
| `title-md` | 30px | 500 | 1.08 | -1.5px | H1 at ≤768px hard override |
| `title-sm` | 26px | 500 | 1.08 | -1.5px | H1 at ≤480px hard override |
| `eyebrow` | 15px | 400 | inherit | normal | `.lost-text` — `The omnichain liquidity layer` |
| `subtext` | 14px | 400 | 1.7 | normal | `.subtext` paragraph, max-width 470px |
| `brand` | 20px | 700 | inherit | -0.3px | `.brand` wordmark `holechain.` |
| `nav-link` | 14px | 400 | inherit | normal | `.nav-links a`, opacity 0.65 → 1 |
| `cta-label` | 13px | 500 | inherit | normal | `Launch App` text |
| `tag` | 12.5px | 600 | inherit | normal | Inline `.tag` pills (`bridge`, `connect`) |
| `mobile-link` | 38px | 800 | inherit | -1.5px | Mobile-nav slide-in links |
| `caret` | 10px | 400 | inherit | normal | `▾` glyph trailing the `Bridge` link |
| `mobile-cta` | 18px | 500 | inherit | normal | CTA inside `.mobile-nav` |

### Principles
- **One family, full axis.** DM Sans handles everything; no second sans, no serif, no mono. The 100–1000 variable axis means weights 400 / 500 / 600 / 700 / 800 are real cuts, never synthesized.
- **Negative tracking at display.** H1 and mobile-nav links share -1.5px letter-spacing. Body copy stays at default (0). The wordmark sits between at -0.3px.
- **Weight as tone, not just rank.** The H1 is 500, not 700 — weight is used sparingly so brightness (#fafafa vs #f4f4f5) carries the hierarchy.
- **Body at 14px, not 16px.** The page is a hero, not a reading surface. 14px / 1.7 keeps the subtext compact and unmistakably supporting.
- **Eyebrow is grey, not uppercase.** `.lost-text` at 15px / 400 / #9a9a9a — no tracking-out, no all-caps. The visual register comes from colour, not from typography.
- **Tag pills are 12.5px, not 12 or 13.** A deliberate half-step to settle below the subtext baseline and above the caret.
- **CTA label is 13px / 500.** Smaller and lighter than nav links would suggest — the chip and the gradient do the announcing, not the type.

### Note on Font Substitutes
If DM Sans is unavailable, fall back to `Inter` (closest tracking and x-height) before `system-ui`. Increase the H1 letter-spacing to -1.0px (Inter tracks tighter than DM Sans at display) and drop the wordmark to -0.2px. Never substitute a serif or a mono — the page reads as monochrome sans only.

## Layout

### Spacing System
- **Base unit:** Tailwind 3 default 4px scale (no `spacing` extension in `tailwind.config.js`).
- **Navbar padding:** 28px 40px (desktop), 20px (≤768px).
- **Hero padding:** `.main` is 20px 20px 30px.
- **Vertical rhythm inside hero:** eyebrow margin-bottom 12px → title margin-bottom 14px → subtext margin-bottom 28px. A 12 / 14 / 28 cadence — tight, tight, breath.
- **Reserved card padding:** 18px 22px (desktop), 15px 18px (≤768px).
- **Mobile-nav padding:** 0 32px outer; each link 24px 0 vertical.
- **Universal:** `* { margin: 0; padding: 0; box-sizing: border-box }`. No reset library.

### Grid & Container
- **Navbar container:** max-width 1100px, margin 0 auto, padding 28px 40px. Dashed hairline (`::after`, 6px-period gradient) inset 40px left/right.
- **Hero container** (`.main`): max-width 700px, padding 20px 20px 30px, `flex: 1` so it centers vertically in the remaining viewport.
- **Subtext column:** max-width 470px inside the 700px hero — the copy block is narrower than the container by design.
- **Reserved cards block** (`.cards`): max-width 460px, gap 12px column.
- **No columns.** The page is single-column on every breakpoint. There is no grid system because there is no second slot.

### Whitespace Philosophy
The page treats negative space as the medium, not the gap. Locking `height: 100vh; overflow: hidden` and centering a 700px column inside a 1440px viewport guarantees that the wormhole owns ~70% of the visible pixels and the copy owns ~10%; the remaining 20% is the dark perimeter where the eye rests. Whitespace is not "padding around content" — it is the canvas the content sits inside, and the canvas itself is live. The rhythm inside the hero (12 / 14 / 28) collapses the eyebrow and title into one beat so the subtext, with its longer 28px breath, reads as the answer.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Default — body, nav links, eyebrow, subtext, all type |
| Soft hairline | 1px rgba(255,255,255,0.12) border | CTA pill outline |
| Pill shadow | `0 4px 15px rgba(0,0,0,0.35)` | Default CTA — anchors it on the live canvas |
| Active pill | `0 6px 22px rgba(0,0,0,0.45)` + `brightness(1.1)` + `translateY(-1px)` | CTA pressed/lifted state |
| Glass card | `0 2px 12px rgba(0,0,0,0.25)`, `backdrop-blur(10px)` | Reserved `.card` (not currently mounted) |
| Glass card lifted | `0 8px 28px rgba(0,0,0,0.4)` + `translateY(-3px)` | Reserved `.card` lift state |

**Shadow philosophy.** Shadows exist only where a surface must lift off the canvas. The CTA pill — the only interactive object on the live tunnel — earns a 4px-blur drop and a brightness step on activate. Reserved cards earn a subtle 2px-blur drop. Nothing else carries shadow; the canvas itself is the depth, and stacking shadows on type would only fight the vignette behind it.

**Decorative depth:**
- **Copy vignette** (`.main::before`): 920×580 ellipse radial-gradient (#000 0.95 → 0) blurred 38px, parked at `.main` center — pushes the copy forward without painting a panel.
- **Hole aura** (`.hole-aura`): 55vmin circle, 20deg grayscale gradient, `mix-blend-plus-lighter`, blur(60px), opacity 0.4 — bloom inside the hole.
- **Scanline overlay** (`.hole-overlay`): 1px CRT lines at rgba(255,255,255,0.5), `mix-blend-overlay`, opacity 0.5 — texture pass over the whole stage.
- **Decorative drop-shadow** (`.deco`): `drop-shadow(0 0 1px rgba(255,255,255,0.85)) drop-shadow(0 0 14px rgba(255,255,255,0.35))` — only on optional Material Symbols glyphs.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `radius-none` | 0 | Canvas, navbar hairline, scanline overlay |
| `radius-tag` | 6px | Inline `.tag` pills (`bridge`, `connect`) |
| `radius-card` | 18px | Reserved `.card` — glass tiles, not currently mounted |
| `radius-pill` | 40px | CTA button outer pill |
| `radius-circle` | 50% / 9999px | CTA leading icon chip (24×24), reserved `.card-icon` (48×48), `.main::before` ellipse vignette |

### Photography Geometry
- **No photography.** The signature asset is a live HTML5 canvas, not a media file. Do not insert a placeholder video, GIF, or shader.
- **Brand mark:** `Image/HoleChain.png`, the only raster asset, displayed at 30px tall in the navbar. Width auto, no rounding.
- **Aspect ratio:** the canvas fills its container (`absolute inset-0 size-full`). The hero composition is 1:1 visually because the hole is centered horizontally and pinned 45% from the top — the geometry is owned by the engine, not by an image crop.
- **Loading:** the canvas mounts on first paint via `useEffect` → `requestAnimationFrame`. No `loading="lazy"` because nothing is below the fold; there is no fold.

## Components

### Top Navigation

**Brand cluster** `{component.nav-left}` — Flex row, gap 9px. Logo at 30px tall (`Image/HoleChain.png`) + `.brand` wordmark at 20px / 700 / -0.3px / `{colors.brand-white}`.

**Nav links** `{component.nav-links}` — Flex row, gap 36px. Each link at 14px / 400 / `{colors.text-main}` opacity 0.65. Focus state inherits browser default outline (no override). Active (interaction) raises opacity to 1.0 via `transition: opacity 0.2s ease`. The `Bridge` link carries a trailing `<span className="caret">▾</span>` at 10px / opacity 0.7.

**Hamburger** `{component.hamburger}` — Three 24×2px white bars, gap 5px, `display: none` until ≤768px. Active state translates outer bars ±7px and rotates 45°, middle bar `opacity: 0`. Transitions: `transform 0.3s ease, opacity 0.3s ease`. ARIA: `aria-label="Toggle menu"`, `aria-expanded={menuOpen}`.

### Buttons

**Primary CTA** `{component.cta-primary}` — Dark vertical gradient pill. Background `{colors.cta-gradient}` (`linear-gradient(180deg, #2c2c2c 0%, #111 100%)`), color `{colors.brand-white}`, font 13px / 500, border 1px `rgba(255,255,255,0.12)`, radius 40px, padding `5px 16px 5px 5px`. Leading icon chip: 24×24 white circle with stroked `#111` chevron SVG (`<path d="M9 6l6 6-6 6"/>`, strokeWidth 3, round caps/joins, 13×13 inside). Shadow `0 4px 15px rgba(0,0,0,0.35)`. Active: `translateY(-1px)` + `box-shadow 0 6px 22px rgba(0,0,0,0.45)` + `filter: brightness(1.1)` over 0.2s ease. Focus inherits browser default.

**Mobile CTA** `{component.cta-mobile}` — Same CtaButton component, scaled inside `.mobile-nav`: font 18px, padding `8px 24px 8px 8px`, icon chip 32×32, svg 16×16, **no border** (`border: none`). Margin-top 30px from the link stack.

**Hamburger button** `{component.cta-utility}` — Background `none`, no border, no padding; the visual target is the three bars themselves. 24×24 box, z-index 60 (sits above the slide-in overlay). Behaves as the utility button — toggles `menuOpen` state.

### Cards & Containers

**Reserved navigation card** `{component.card-glass}` — Currently shipped but not mounted. Flex row `space-between`, gap 16px, background `{colors.card-bg}` (rgba(255,255,255,0.045)), border 1px rgba(255,255,255,0.08), radius 18px, padding 18px 22px, `backdrop-blur(10px)`, shadow `0 2px 12px rgba(0,0,0,0.25)`. Active: `translateY(-3px)` + border `rgba(255,255,255,0.16)` + shadow `0 8px 28px rgba(0,0,0,0.4)` over 0.25s ease.

**Card icon chip** `{component.card-icon}` — 48×48 circle, background rgba(255,255,255,0.08), 22×22 SVG stroked `{colors.text-main}` inside. Active (parent card hovered): `transform: scale(1.05)`.

**Hero copy block** `{component.hero-stack}` — Vertical centered stack inside `.main`. Eyebrow → title-wrap → subtext, with the `.main::before` vignette painted behind via `position: absolute; z-index: -1`. No background panel on the stack itself — the vignette is the panel.

**Mobile-nav overlay panel** `{component.mobile-nav}` — Fixed `inset: 0`, z-index 50, background rgba(8,8,8,0.96), `backdrop-blur(14px)`, flex column centered. Default state: `transform: translateX(100%)`. Active state (`.open`): `transform: translateX(0)` over 0.6s `cubic-bezier(0.77, 0, 0.175, 1)`. Each link has a `1px solid rgba(255,255,255,0.1)` bottom hairline.

### Inputs & Forms

**Inline tag pill** `{component.tag-inline}` — The only "input-looking" element on the page (wraps the words `bridge` and `connect` in subtext). Inline-flex, background rgba(255,255,255,0.1), color `{colors.text-main}`, font 12.5px / 600, padding 2px 12px, radius 6px. No focus state — it is a span, not an interactive control.

> No text inputs, no forms ship in v1. When adding a field, build it on the CTA pill geometry: 40px radius, 1px rgba(255,255,255,0.12) border, transparent background, 13px / 500 text, padding 5px 16px. Focus state: border `{colors.brand-white}`, no glow.

### Footer
> **No footer ships.** The page is locked to one viewport. If a future variant needs a footer, it must live inside the mobile-nav overlay or replace the mobile-nav entirely — never break the `100vh` lock.

## Do's and Don'ts

### Do
- Use `{colors.bg-page}` as the global stage and let the canvas paint over it.
- Set the H1 in DM Sans 500 with -1.5px letter-spacing at `{colors.title-ink}` — brightness, not weight, carries hierarchy.
- Apply the three CSS signatures (`.main::before`, `.hole-aura`, `.hole-overlay`) verbatim — they are the identity.
- Reserve `{colors.cta-gradient}` for the CTA only. It is the only non-flat surface on the page.
- Keep the canvas params exact: `strokeColor="#6e6e6e"`, `numberOfLines={60}`, `numberOfDiscs={60}`, `particleRGBColor={[255,255,255]}`, `p += 0.001`, `i % 5`, 100 particles.
- Use the `{component.tag-inline}` pill style for any inline keyword emphasis in body copy.
- Keep `html, body, #root { height: 100vh; overflow: hidden }` — the viewport lock is the contract.
- Set `prefers-reduced-motion` to clamp the canvas to one frame and freeze the aura; never substitute a video.
- Quote tokens in `{colors.tokenName}` / `{component.name}` form throughout downstream design docs.
- Center the hero column at max-width 700px and the navbar at max-width 1100px — both `margin: 0 auto`.

### Don't
- Don't introduce any chromatic hue. No blue, no purple, no green, no accent — grayscale end to end.
- Don't add an animation library (Framer Motion, GSAP, Lottie, motion.react). The canvas rAF loop + CSS keyframes are the only motion systems.
- Don't replace `HoleBackground` with a video, GIF, MP4, or shader library. The engine is the asset.
- Don't drop the `.main::before` vignette, the `.hole-aura`, or the `.hole-overlay` scanlines — they are invariant.
- Don't round greys (`#f4f4f5`, `#9a9a9a`, `#fafafa`, `#6e6e6e`, gradient stops) — exact values only.
- Don't add a second section, a footer, or any scroll. The page is one composed frame.
- Don't substitute DM Sans for a different display family, and don't load any third-party icon set.
- Don't extend Tailwind's `theme.colors` — the palette ships as CSS custom properties only.
- Don't document hover as a separate state in components — only default / active / focus per the system.
- Don't shorten or reword the verbatim hero copy (`The omnichain liquidity layer`, `One network for every chain`, the subtext) without changing the showcase identity.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤419px | Inherits ≤480px overrides — H1 at 26px, all else unchanged |
| Phone | 420–480px | H1 → 26px, deco-hub → 28px, deco-bolt → 22px |
| Large phone | 481–640px | H1 → 30px, nav collapsed, hamburger visible, navbar padding 20px |
| Tablet portrait | 641–767px | H1 → 30px, nav collapsed, hamburger visible, navbar padding 20px |
| Tablet landscape | 768–833px | Desktop nav restored at 768px breakpoint (CSS media query fires at max-width:768px) |
| Small desktop | 834–1023px | Full navbar (1100px container), full hero (700px container) |
| Desktop | 1024–1100px | `xl` Tailwind breakpoint, container max-widths still cap at 1100 / 700 |
| Wide desktop | ≥1101px | Container caps hold; canvas fills full viewport; vignette scales to max-width 138% |

### Touch Targets
- **Minimum:** 24×24px (hamburger button) — below the 44×44 iOS guideline because the bars are visually centered inside a touch-padded `<button>`; in practice the padding-free 24×24 sits inside the navbar's 20px outer padding, giving a ~64×40 effective tap area.
- **CTA pill:** ~34px tall × content width. Above 44px when icon chip + label combine.
- **Mobile-nav links:** 38px type + 24px vertical padding = ~86px tall touch row each.

### Collapsing Strategy
- **Nav links:** hidden at ≤768px (`.nav-links { display: none }`), replaced by the hamburger.
- **Navbar CTA:** hidden at ≤768px alongside nav links; the CTA re-appears inside the mobile-nav overlay at 18px scale.
- **Navbar padding:** 28px 40px → 20px (uniform) at ≤768px; the `::after` hairline inset matches at 20px.
- **H1 type:** `clamp(34px, 5vw, 52px)` → hard 30px at ≤768px → hard 26px at ≤480px.
- **Decorative glyphs** (if mounted): `.deco-hub` 42px → 34px → 28px; `.deco-bolt` 32px → 26px → 22px, with position offsets tightening per breakpoint.
- **Reserved cards** (if mounted): max-width 460px → 100%, gap 12px → 10px, padding 18px 22px → 15px 18px, icon 48×48 → 42×42.

### Image Behavior
- **Brand mark:** the only raster on the page. Imported via Vite (`import logoUrl from '../Image/HoleChain.png'`), no `srcset`, no `<picture>`. Width auto, height 30px.
- **Canvas asset:** not an image — re-renders every frame via `requestAnimationFrame`, DPI-aware via `window.devicePixelRatio`, resize-aware via `window.addEventListener('resize')`.
- **No lazy-loading.** Above-the-fold is the entire fold. The logo loads eagerly with the React bundle.

## Iteration Guide
1. **Iterate one component at a time.** Variants of the CTA, hero copy, or navbar live inside their own component file — never inline a one-off restyle in `App.tsx`.
2. **Reference tokens, never hex literals.** Use `{colors.title-ink}` not `#fafafa` in any new design doc; the showcase YAML is the source of truth.
3. **Never document hover.** The system ships default / active / focus only. Hover is a presentation detail of the active transition, not its own state.
4. **DM Sans for everything.** If a new role needs type, give it a row in the Hierarchy table — do not add a second family.
5. **Shadow is reserved for surfaces that lift.** The CTA pill and the reserved card are the only shadowed elements. Type, dividers, hairlines, and inline pills stay flat.
6. **Canvas params are tuning, not architecture.** You may tweak `numberOfDiscs`, `numberOfLines`, `particleRGBColor` for a variant — but the engine (the rAF loop, the easing, the clip path) is invariant.
7. **If a constraint conflicts with a framework limit,** clamp to the nearest valid value and leave a code comment. Never silently change a documented number.

## Known Gaps
- **No input/form states surfaced.** v1 ships no text inputs; the inline `.tag` pill is the only related primitive. Validation, error, and disabled states for future fields are not documented.
- **No dark/light mode toggle.** The page is dark-only by construction; there is no theme switching layer. A light-mode variant has not been scoped.
- **Reserved cards are shipped but unmounted.** `.cards` / `.card` / `.card-icon` CSS is present but the React mounting layer is omitted from `App.tsx`; behavior on the live canvas (z-index interaction with `.hole-overlay`) is untested.
- **Decorative `.deco` glyphs** (`.deco-hub`, `.deco-bolt`) are shipped in CSS but not currently mounted. The `floatSlow` keyframe and Material Symbols base class ship for future variants; production behavior is theoretical.
- **`prefers-reduced-motion` handling is specified, not implemented.** The contract says "clamp the canvas to one frame and let the static composition stand"; the React code path that pauses `requestAnimationFrame` on the media query is not yet in the engine.
- **Accessibility audit beyond contrast and ARIA on the hamburger is not surfaced.** Keyboard trap behavior on the mobile-nav overlay, focus return on close, and reduced-motion announcements are not documented in this version.
