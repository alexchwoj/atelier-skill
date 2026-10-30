---
version: "1"
name: "Fola Pastry — Colorful Pâtisserie Catalogue"
description: "A single-page landing for a French pâtisserie, built as a cheerful, colorful cake catalogue. Cream canvas, cocoa type, and a 5-cake hero carousel where the background color morphs per cake — because each cake's color IS its identity. Type is deliberately minimal so color and cakes lead."
colors:
  cream: "#FFF8F3"
  cocoa-deep: "#3A2418"
  cocoa: "#6B4423"
  rose: "#EAACBB"
  jade: "#6BBF7A"
  amber: "#EFD9AA"
  celeste: "#B3DAE1"
  velvet: "#B5414C"
typography:
  display:
    fontFamily: "Beausite Classic"
    weights: "400, 500 only — NO italic"
    role: "headlines + body, weight-limited by design"
spacing:
  base: "4px"
  split: "50/50 FeaturedSplit grid"
rounded:
  block: "soft block corners"
components:
  cake-carousel: "5 cakes at 5 positions (center/left/right/backLeft/backRight); section bg morphs to the active cake's color"
  featured-split: "50/50 — colored block (cake's color) + lifestyle photo; cake sits directly on the block"
  ticker: "horizontal scrolling French phrase / cake-name strip between hero and splits"
---

# Fola Pastry — Colorful Pâtisserie Catalogue

> Fivefold showcase. Pairs with the Fola Pastry prompt. Use this to keep pages you build *after* the landing — menu, order, about — feeling like the same cheerful, color-coded cake catalogue.

## Overview

Fola Pastry is a single-page landing for a French pâtisserie in Hà Nội, staged as a cheerful, colorful cake catalogue. The atmosphere is bakery-paper warm: a cream canvas, cocoa type, and five signature cakes that take turns owning the page. Where most food sites lean on appetising photography alone, Fola treats *color* as the headline ingredient — each cake's hue floods the hero so the whole surface feels like the cake itself for a moment.

The governing decision: **each cake's color IS its identity, and the system is built around that.** The five cakes — Rosé, Jade, Amber, Celeste, Velvet — aren't just products; they're color-characters. The page is a frame that lets each one "go on stage" with its own backdrop. Type recedes to a near-invisible label so nothing competes with the color story. This is why Beausite Classic ships with only two weights, italic disabled, and why the FeaturedSplit blocks refuse to put a panel behind the cake PNG — the cake must touch the color.

The system extends across any later surface (menu, order, individual cake pages, about) by the same rule: cream/cocoa neutrals carry the chrome, and the active cake's color carries the section. Add a sixth cake and you add a sixth color — never reuse Rosé for two cakes, never theme a UI element in a cake color that isn't currently "on stage". The discipline is what keeps a multicolor page refined instead of candy-store chaotic.

**Key Characteristics:**
- Cream canvas + cocoa-deep headlines + cocoa body — a near-monochrome chrome that exists only to spotlight the five cake colors.
- 5-cake hero carousel: cakes occupy 5 fixed positions (center / left / right / backLeft / backRight) and the section background morphs to whichever cake is in the center slot.
- Five FeaturedSplit sections in a strict 50/50 grid: colored block + lifestyle photo, cake PNG sitting directly on the color with no plate behind it.
- Strict cake → color → order pairing: Rosé → Jade → Amber → Celeste → Velvet, identical in the hero and the five splits.
- Beausite Classic locked to weights 400 and 500, italic globally disabled via CSS reset — type stays quiet by rule.
- Motion is restricted to a single signature: the background color morph between active cakes plus a small horizontal ticker.
- Decorative restraint — no gradients, no soft shadows on cakes, no patterned backdrops; the color flood is the decoration.
- Bakery-paper feel — warm whites and edible browns, never pure white, never pure black.

## Colors

> **Source pages analyzed:** Landing (Nav, Hero carousel, Ticker, 5× FeaturedSplit, Footer). The palette is fully surfaced in `colors.*` tokens.

A neutral cream/cocoa chrome plus five cake-identity colors. The five cake colors are the brand — the chrome only exists to frame them.

### Surface
- **Cream** (`{colors.cream}` — #FFF8F3): The base canvas of every page — Nav, body, Footer. A warm bakery-paper white, never pure #FFFFFF; pure white would feel clinical and break the edible warmth.

### Text
- **Cocoa-deep** (`{colors.cocoa-deep}` — #3A2418): Headlines, the Fola wordmark, and primary cake names. A deep chocolate near-black that belongs to the pastry world; never substitute pure black.
- **Cocoa** (`{colors.cocoa}` — #6B4423): Body copy, captions, ticker text, footer microcopy. A warm milk-chocolate brown that reads as edible rather than typographic.

### Cake Identity Colors
Each color is one cake's identity. The pairing is the brand — never reassign.
- **Rosé** (`{colors.rose}` — #EAACBB): The Rosé cake. Powdered-raspberry pink. Hero position 1, FeaturedSplit 1.
- **Jade** (`{colors.jade}` — #6BBF7A): The Jade cake. Pistachio green. Hero position 2, FeaturedSplit 2.
- **Amber** (`{colors.amber}` — #EFD9AA): The Amber cake. Caramel-cream. Hero position 3, FeaturedSplit 3.
- **Celeste** (`{colors.celeste}` — #B3DAE1): The Celeste cake. Sky-blue meringue. Hero position 4, FeaturedSplit 4.
- **Velvet** (`{colors.velvet}` — #B5414C): The Velvet cake. Red-velvet crimson. Hero position 5, FeaturedSplit 5.

### Usage Rules
- The active hero background is *always* one of the five cake colors at full strength — no tints, no overlays, no gradients.
- Cocoa-deep type on Amber / Celeste / Cream is comfortable. On Velvet, headlines may need to flip to Cream for legibility — check per section.
- Never blend two cake colors in the same section; one cake on stage at a time.

## Typography

### Font Family
- **Display + Body:** `"Beausite Classic", "Inter", system-ui, sans-serif` — Beausite Classic is self-hosted; Inter is the substitute fallback.
- **OpenType features:** standard ligatures on; italic *disabled site-wide* via a CSS reset on `em`, `i`, and `.italic` (`font-style: normal !important`).

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| display-hero | 96px | 500 | 1.0 | -0.02em | Hero cake name (single cake at a time) |
| display-section | 64px | 500 | 1.05 | -0.015em | FeaturedSplit headline (cake name) |
| heading-lg | 40px | 500 | 1.1 | -0.01em | Section titles outside the splits |
| heading-md | 28px | 500 | 1.2 | -0.005em | Sub-section titles, menu group titles |
| eyebrow | 13px | 500 | 1.0 | 0.16em (uppercase) | Position labels above hero, ticker tags |
| body-lg | 18px | 400 | 1.5 | 0 | Lead paragraph beneath split headlines |
| body | 16px | 400 | 1.55 | 0 | Default body copy, footer paragraphs |
| caption | 13px | 400 | 1.45 | 0 | Cake descriptors, photo captions |
| micro | 11px | 500 | 1.3 | 0.08em (uppercase) | Legal, copyright, nav micro-links |

### Principles
- Two weights only: 400 for any flowing copy, 500 for every headline and label. Weight 600+ is forbidden.
- Italic is disabled globally — book titles, emphasis, French words all stay roman. Use color or a new line for emphasis instead.
- Display sizes get negative tracking (-0.02em → -0.005em) so the wordmark reads as one shape; body sizes get 0 tracking.
- Eyebrows and micro labels are the *only* uppercase moments — and they always carry positive tracking ≥ 0.08em.
- Line-height collapses as size grows (1.55 body → 1.0 hero), keeping display type tight and architectural.
- Type color follows surface, not whim: cocoa-deep on cream/amber/celeste, cream on velvet, cocoa on photography.

### Note on Font Substitutes
If Beausite Classic isn't available, substitute Inter at weights 400 and 500 only, keep italic disabled, and tighten display tracking by an extra -0.005em to compensate for Inter's slightly wider letterforms. Avoid Helvetica clones — they read as corporate; Beausite's warmth comes from its softened terminals, and the substitute should lean grotesk-but-friendly (Söhne, Aktiv Grotesk) before reaching for default system fonts.

## Layout

### Spacing System
- **Base unit:** 4px. All spacing snaps to multiples of 4.
- **Tokens:** 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 px.
- **Section padding (desktop):** 96px top/bottom, 64px gutter sides.
- **Section padding (mobile):** 48px top/bottom, 24px gutter sides.
- **Card / split-block padding:** 48px desktop, 24px mobile.
- **Rhythm constant:** the vertical gap between a headline and its lead paragraph is always 24px; between paragraphs always 16px.

### Grid & Container
- **Max content width:** 1440px, centered. The hero may bleed full-viewport.
- **FeaturedSplit:** strict 50/50 two-column grid, no gutter — the colored block meets the photo edge-to-edge.
- **Footer / Nav:** 12-column grid, 24px gutter, 64px outer margin.
- **Carousel stage:** centered, max-width 1200px, overflow visible so back-row cakes can poke past.

### Whitespace Philosophy
Whitespace is cream, and cream is the bakery paper the cakes sit on. The page never crowds; sections breathe with 96px of vertical air, headlines sit alone on a line, and the FeaturedSplit refuses to put anything between the color block and the cake. The negative space isn't empty — it's the surface the color flood is *painted on*. Reducing whitespace anywhere reduces the color's impact, so spacing values are non-negotiable rather than optional polish.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Hero background, FeaturedSplit color blocks, the cake PNGs themselves |
| Soft hairline | 1px `{colors.cocoa}` at 12% opacity | Nav bottom border, footer divider, ticker top/bottom edges |
| Cake drop shadow | `0 24px 48px rgba(58, 36, 24, 0.18)` | The cake PNG only, suggesting it rests on the color block |
| Backdrop blur | Not used | Reserved — no glass surfaces in this system |

**Shadow philosophy.** Shadow is reserved almost entirely for the cakes themselves — a single soft cocoa-tinted drop that makes each cake feel physically placed on its colored stage. UI chrome (cards, buttons, nav) stays flat or hairline-only. There are no card shadows, no hover lifts, no layered z-depth — the page reads as colored paper with cakes resting on it.

**Decorative Depth.**
- The cake PNG's drop shadow is the *only* depth cue inside the splits.
- The hero carousel uses scale + horizontal position (no z-shadows) to imply depth between front and back cakes.
- The ticker has no shadow; its hairline borders and motion alone signal layering.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| none | 0px | FeaturedSplit color blocks, hero background, ticker |
| xs | 4px | Form inputs, small chips |
| sm | 8px | Buttons, ticker tags |
| md | 16px | Photo cards in splits, lifestyle imagery |
| lg | 24px | Larger image containers, modals if introduced |
| pill | 999px | "Order" CTA, language switch in nav |
| full | 50% | Cake thumbnail dots on the carousel, avatar moments |

### Photography Geometry
- **Cake PNGs:** transparent background, square crop, centered, ~75% of the colored block's smaller dimension.
- **Lifestyle photos in FeaturedSplit:** 1:1 on desktop (matches the color block height), 4:5 on mobile when stacked.
- **Hero carousel cakes:** PNGs at 5 fixed scales — center 1.0, left/right 0.7, backLeft/backRight 0.5 — radius is irrelevant since they're transparent.
- **Image radius:** lifestyle photos use `{shapes.md}` (16px); cake PNGs are never wrapped in a panel and so carry no radius.
- **Loading:** lifestyle photos use `loading="lazy"`; the active hero cake PNG is preloaded.

## Components

### Top Navigation
- **Nav bar** `{component.nav}` — flat cream surface, 72px tall, full-width with 64px side gutter. Cocoa-deep wordmark left, cocoa-color nav links right (body token, weight 500). Soft hairline bottom border. On scroll, the nav stays cream; it does *not* inherit the active cake color.
- **Mobile menu** opens via `motion/react` `AnimatePresence` — full-screen cream sheet, cocoa-deep links stacked at `heading-md`. The only place `motion/react` is used.

### Buttons
- **Primary CTA** `{component.button-primary}` — pill radius `{shapes.pill}`, cocoa-deep background, cream text, `body` size, padding 16px / 32px. **Default:** flat cocoa-deep. **Active:** scale 0.98, no shadow change. **Focus:** 2px cream offset ring + 2px cocoa-deep outer ring.
- **Secondary CTA** `{component.button-secondary}` — pill radius, transparent fill, 1px cocoa-deep border, cocoa-deep text. **Default:** transparent. **Active:** background flips to cocoa-deep, text to cream. **Focus:** same 2px ring as primary.
- **Utility / icon button** `{component.button-utility}` — 40px square, `{shapes.sm}` radius, cream surface with hairline border, cocoa icon. Used for ticker pause, carousel arrows, language switch. **Default:** hairline border only. **Active:** border darkens to cocoa-deep. **Focus:** 2px cocoa-deep outer ring.

### Cards & Containers
- **FeaturedSplit color block** `{component.split-color}` — half of a 50/50 grid, 0px radius, the cake's signature color as background, the cake PNG centered. No inner border, no plate. Headline (display-section, cocoa-deep or cream depending on cake color) sits in the photo half, not the color half.
- **FeaturedSplit photo tile** `{component.split-photo}` — the other half of the grid, full-bleed lifestyle photo, no radius (matches the color block edge). On mobile when stacked, this tile gets `{shapes.md}` radius.
- **Ticker chip** `{component.ticker-chip}` — `{shapes.sm}` radius, cream fill, hairline border, cocoa eyebrow-token text. Used inline within the scrolling ticker.

### Inputs & Forms
- **Text input** `{component.input}` — 48px tall, `{shapes.xs}` radius, cream fill, 1px cocoa hairline border, cocoa body text, 16px padding. **Default:** hairline border. **Active (typing):** border darkens to cocoa-deep, no fill change. **Focus:** 2px cocoa-deep outer ring + hairline darkens. No floating labels — labels sit above the input at `eyebrow` token.

### Footer
- **Footer** `{component.footer}` — cream surface, 96px top padding, 48px bottom padding. Cocoa-deep wordmark left at `heading-md`, four-column link grid right at `body`, micro legal row at bottom inside a soft hairline border. The footer never adopts a cake color — it's pure chrome.

## Do's and Don'ts

### Do
- Use `{colors.cream}` as the global page background; let any cake color appear only inside a hero or a split block.
- Keep the Rosé → Jade → Amber → Celeste → Velvet order identical between the hero carousel and the five FeaturedSplits.
- Apply the cake's drop shadow `0 24px 48px rgba(58, 36, 24, 0.18)` only to the cake PNG, never to chrome.
- Set every headline at Beausite 500 with negative tracking per the hierarchy table.
- Reserve the pill radius `{shapes.pill}` for primary/secondary CTAs and the language switch — nothing else.
- Keep the FeaturedSplit a strict 50/50 with no gutter between color block and photo on desktop.
- Use `{colors.cocoa-deep}` on Cream / Amber / Celeste, and flip to `{colors.cream}` on Velvet for legibility.
- Preload the active hero cake PNG and lazy-load every lifestyle photo.

### Don't
- Don't use any font weight outside 400 / 500, and never enable italic — the restraint is the refinement.
- Don't add a background panel, frame, or plate behind the cake PNGs in FeaturedSplit — cakes sit on the color directly.
- Don't reassign cake colors or break the Rosé → Jade → Amber → Celeste → Velvet order — the mapping is the system.
- Don't introduce gradients between cake colors or tints of them; cake colors are flat and full-strength.
- Don't let chrome (nav, footer, buttons) inherit a cake color — chrome stays cream/cocoa.
- Don't use `motion/react <motion>` outside the mobile-menu `AnimatePresence` — every other motion is CSS/state.
- Don't apply shadows to cards, buttons, or sections — shadow belongs to cakes only.
- Don't use pure white (#FFFFFF) or pure black (#000000) anywhere — cream and cocoa-deep are the limits.
- Don't crowd sections below 96px desktop / 48px mobile vertical padding — the cream breathing room is part of the color flood.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤ 419px | Carousel reduces to center + 1 side cake; splits stack photo-above-color |
| Phone | 420 – 640px | Carousel center + 2 side cakes (no back row); splits stacked, photo gets `{shapes.md}` |
| Large phone | 641 – 735px | Same as Phone; nav links collapse to hamburger triggering `AnimatePresence` sheet |
| Tablet portrait | 736 – 833px | Carousel shows partial back row; splits remain stacked, 24px gutter introduced |
| Tablet landscape | 834 – 1023px | Carousel near-full (back row visible, 0.5 scale); splits flip to 50/50 horizontal |
| Small desktop | 1024 – 1068px | Full 5-position carousel; section padding 72px vertical |
| Desktop | 1069 – 1440px | Reference layout — 96px section padding, max-width 1440px content |
| Wide desktop | ≥ 1441px | Content stays max-width 1440px centered; hero may bleed full-viewport with extra cream margin |

### Touch Targets
- Minimum tap area 44 × 44px for any interactive element (carousel arrows, ticker pause, mobile nav links).
- Carousel side cakes themselves are not tappable below tablet — only arrows and dots are. This keeps tap targets unambiguous.

### Collapsing Strategy
- **Nav:** desktop horizontal link row → tablet condensed → mobile hamburger + `AnimatePresence` full-sheet menu.
- **Hero carousel:** 5 cakes desktop → 3 cakes tablet → 1 + 2 side cakes phone → 1 + 1 side cake small phone. Background morph retained at every breakpoint.
- **FeaturedSplit:** desktop 50/50 horizontal → tablet portrait stacks (color block on top, photo below) → phone same stack, photo gains 16px radius.
- **Ticker:** desktop full-width scroll → mobile same width but text shrinks to caption size, scroll speed slows 25%.
- **Hero typography:** display-hero 96px desktop → 72px tablet → 56px phone → 44px small phone (tracking holds at -0.02em).

### Image Behavior
- Lifestyle photos ship with `srcset` at 1x / 2x and a `sizes` declaration matching split half-widths.
- Aspect ratios are enforced via `aspect-ratio` CSS, not container padding hacks.
- All lifestyle imagery uses `loading="lazy"` + `decoding="async"`; the currently-active hero cake PNG is `<link rel="preload">`-ed.
- Cake PNGs are served as transparent PNG-8 or WebP with alpha; never JPEG.

## Iteration Guide

1. When you add a new page (menu, order, about), inherit the cream/cocoa chrome verbatim and choose one cake color as the page's theme — never blend two.
2. New cake → new color. Add a sixth token to `{colors.*}` rather than reusing an existing cake's color. The pairing is sacred.
3. Variants live in components, not new sections. If you need a third button style, add `{component.button-utility}` rather than introducing a new chrome treatment.
4. Always reference tokens (`{colors.rose}`, `{shapes.pill}`) — never hard-code hexes in component code; that's how the system stays editable.
5. Never document hover states — Apple convention, mirrored here. Default / Active / Focus only.
6. Beausite Classic for both display and body; do not introduce a second family for "personality". The personality is the cake colors.
7. Shadow belongs to cakes. If a new component wants depth, give it a hairline border first; only escalate to shadow if the cake-shadow recipe genuinely applies.

## Known Gaps

- Ordering / checkout flow and individual cake-detail pages aren't specified — only the landing. Carry the per-cake color identity into them (e.g., a cake's detail page themed in its color).
- The carousel's touch / swipe gesture behavior on mobile isn't fully specified beyond simplification of cake count.
- Beausite Classic is self-hosted at two weights; a substitute font's exact tracking compensation hasn't been measured against the Inter fallback.
- Color-contrast of cocoa-deep type on the brighter cake backgrounds (Amber / Celeste) isn't formally WCAG-audited; section-by-section visual check is currently the only gate.
- Form validation states (error, success, disabled) aren't surfaced — only the default / active / focus input states are documented.
- Dark mode isn't specified; the system assumes a single light "bakery-paper" mode and reusing cake colors against a dark surface hasn't been tested.
