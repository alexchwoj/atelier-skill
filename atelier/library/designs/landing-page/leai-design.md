---
version: "1"
name: "Leai Design — Liquid-Glass Dark Studio"
description: "A premium 11-section landing for an AI-native design studio, where the site itself is the proof of quality. Pure-black base, frosted liquid-glass cards with gradient border masks, a 400px cursor radial glow, 3% grain everywhere, and one hero video reused as the anchor. Built with zero animation libraries — vanilla React + CSS + rAF."
colors:
  base: "#000000"
  ink: "#FFFFFF"
  body: "rgba(255,255,255,0.64)"
  muted: "rgba(255,255,255,0.40)"
  hairline: "rgba(255,255,255,0.08)"
  glass: "rgba(255,255,255,0.04)"
  glass-border: "linear-gradient(white→transparent), mask-composited"
typography:
  display:
    fontFamily: "Inter-grade geometric sans (Inter / system-ui)"
    role: "headlines — confident, tight, negative tracking"
  body:
    fontFamily: "Inter-grade sans"
    role: "body, labels, micro-legal"
spacing:
  base: "4px"
  scale: "4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128"
  breakpoints: "375 → 768 → 1280 → 1920 (mobile-first)"
rounded:
  card: "20–24px (glass cards)"
  control: "10–12px (buttons, inputs)"
  pill: "9999px"
components:
  liquid-glass-card: "Frosted glass with gradient border mask — the single shared glass utility"
  cursor-glow: "400px radial glow following the mouse (desktop), rAF-driven"
  hero-video: "One video, reused 4 places (Hero, FinalCTA, 3 showcase cards) — the anchor"
  grain-overlay: "3% film grain layer applied site-wide"
---

# Leai Design — Liquid-Glass Dark Studio

> Fivefold showcase. Pairs with the Leai Design prompt. Use this to keep pages you build *after* the landing at the same obsessive bar — every new surface must look like proof, not filler.

## Overview

Leai Design is **a premium studio whose website IS its portfolio** — an AI-native design tool that must prove, pixel by pixel, that it ships studio-quality work. The reference set is Linear × Vercel × Apple keynote × Rauno: pure-black cinematic depth, frosted glass surfaces, a cursor that lights the room. Nothing on the page is generic, because the page is the sales pitch — if it looked AI-generic, the product's whole claim collapses.

The governing decision: **the craft of the page is the product demo.** The liquid glass, the gradient-masked borders, the 400px cursor glow, the 3% grain — these aren't decoration; they're a *render-technique flex* that says "look what we can build." Detail obsession is mandatory: one shadcn default or one `bg-blue-500` would betray the thesis. Every token below exists in service of that argument; nothing is here for taste alone.

The system extends by *restraint, not by addition.* New surfaces (docs, pricing, app shell) inherit the same monochrome palette, the same shared `liquid-glass-card` utility, the same grain, the same desktop-only cursor glow. There is no second card style, no light theme, no accent color waiting in reserve. If a new page needs more, the answer is more space and better photography — not new tokens.

**Key Characteristics:**
- **Pure-black base** (`{colors.base}` — #000000) — cinematic depth, the canvas a studio reel sits on.
- **Liquid-glass cards** — frosted (`white/04` + backdrop-blur) with a **gradient-masked border** (white→transparent). Borders fade rather than draw a hard line.
- **400px cursor radial glow** following the mouse on desktop — the room lights where you look, rAF-driven, never janky.
- **3% film grain overlay everywhere** — premium texture, anti-flat, separates the page from generic dark SaaS.
- **One hero video reused in 4 places** (Hero, FinalCTA, 3 of 6 showcase cards) — a deliberate anchor that ties 11 sections into one world.
- **Zero animation libraries** — vanilla React + CSS + rAF + IntersectionObserver. The toolchain restraint is itself a flex.
- **Monochrome only** — no chromatic accent. The glow + glass provide all the "color."
- **Mobile-first cinematic scroll** (375 → 1920) with 2-up / 3-up grids collapsing to stacked.

## Colors

> **Source pages analyzed:** the 11-section landing (Hero, Manifesto, Process, Showcase grid, Capability rows, Testimonial, Pricing teaser, FAQ, FinalCTA, Footer, Floating nav). Monochrome by design — black, white, and white-opacities only. Color would cheapen the studio gravity.

### Base & Surface
- **Base** (`{colors.base}` — `#000000`): True black. The single page background; cinematic depth that lets glass and glow read. Any near-black would dilute the reading.
- **Glass fill** (`{colors.glass}` — `rgba(255,255,255,0.04)` + `backdrop-blur(24px)`): Every card, panel, floating-nav, and modal surface. The 4% white is intentionally barely-there — the blur, not the fill, does the lifting.

### Ink & Body
- **Ink** (`{colors.ink}` — `#FFFFFF`): Headlines, key marks, primary button label, logo. Reserved for the most load-bearing type.
- **Body** (`{colors.body}` — `rgba(255,255,255,0.64)`): Paragraph copy, secondary headings, default link text. The workhorse opacity.
- **Muted** (`{colors.muted}` — `rgba(255,255,255,0.40)`): Labels, captions, micro-legal, disabled-ish states. The opacity ramp (100 → 64 → 40) does all secondary hierarchy.

### Hairlines & Borders
- **Hairline** (`{colors.hairline}` — `rgba(255,255,255,0.08)`): Dividers, table rules, footer separator. Only used when the gradient-masked border would be overkill.
- **Glass border** (`{colors.glass-border}`): A CSS-masked linear gradient (white → transparent) composited with `mask`/`-webkit-mask`. The signature render-flex; a flat 1px border would look ordinary and break the thesis.

### Glow
- **Cursor glow** (radial, white → transparent over ~400px): Not a token color so much as a *light source.* Opacity ramp from `rgba(255,255,255,0.10)` at center to `0` at the edge. Sits below content, above grain.

### What's Deliberately Absent
- **No chromatic accent.** No purple, pink, teal, blue. No `bg-blue-500`, no Tailwind palette default. Introducing a hue reads AI-generic and breaks the studio proof.
- **No success/warning/error palette surfaced** — validation states aren't documented on the marketing site (see Known Gaps).

## Typography

### Font Family
- **Display + Body:** `Inter, "InterVariable", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` — confident, tight geometric sans in the Linear/Vercel register.
- OpenType features on: `"cv11", "ss01", "ss03"` (single-storey g, straight-leg l) for that engineered look. `font-feature-settings: "tnum"` on any numeric run (pricing, stats).
- No serif anywhere, no script, no display face. The drama lives in surface and light, not in type.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| display-xl | 72–96px | 600 | 1.02 | -0.03em | Hero headline only |
| display-lg | 56–64px | 600 | 1.05 | -0.025em | Section anchors (Manifesto, FinalCTA) |
| display-md | 40–48px | 600 | 1.08 | -0.02em | Sub-section heads |
| heading | 28–32px | 600 | 1.15 | -0.015em | Card titles, FAQ questions |
| subhead | 20–22px | 500 | 1.30 | -0.005em | Capability rows, testimonial attribution |
| body-lg | 18px | 400 | 1.55 | 0 | Lead paragraphs |
| body | 16px | 400 | 1.60 | 0 | Default paragraph copy |
| label | 13px | 500 | 1.30 | 0.04em (uppercase) | Eyebrows, section labels |
| caption | 12px | 400 | 1.40 | 0 | Captions, footer meta |
| micro-legal | 11px | 400 | 1.30 | 0 | Footer fine print |

### Principles
- **Negative tracking at display sizes** (-0.03em → -0.015em). At 64px+, default tracking looks loose; tightening is the difference between marketing and studio.
- **Weight 600 is the ceiling.** No 700/800/900 — bold-bold reads as SaaS template, not Apple keynote.
- **Body at 16/1.6, not 14.** Long-form reads like an editorial, not a control panel.
- **Eyebrows are uppercase + tracked +0.04em + weight 500.** The only place letter-spacing goes positive.
- **Opacity, not size, carries secondary hierarchy.** Drop from 100% → 64% → 40% before you drop from 32px → 28px.
- **No italics.** Studio voice is upright; italic reads as decorative.
- **Tabular numerals (`tnum`) on every numeric stat** so pricing and metrics never wobble.

### Note on Font Substitutes
If Inter is unavailable, fall back to `system-ui` then `-apple-system` — both ship with negative-tracked display rendering on Apple/Google platforms. Compensate by tightening `letter-spacing` an additional `-0.005em` at display sizes and raising body `line-height` from 1.60 → 1.62 to keep the same airy rhythm. Never substitute Helvetica Neue — its tracking at 64px+ is loose enough to undermine the cinematic feel.

## Layout

### Spacing System
- **Base unit:** 4px. Scale: `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128`.
- **Section padding:** `128px` top/bottom on desktop, `96px` on tablet, `64px` on mobile. Generous on purpose — a studio doesn't ship cramped grids.
- **Card padding:** `32px` desktop, `24px` mobile. Glass cards need internal air so the gradient border reads.
- **Universal rhythm:** Heading-to-body gap = `16px`. Section heading-to-content gap = `48px`. Grid gutter = `24px` (mobile/tablet) or `32px` (desktop).

### Grid & Container
- **Max content width:** `1280px` for body content, `1440px` for full-bleed media frames.
- **Hero + Showcase grids:** 12-column on desktop, used as 6/6 splits or 4/4/4 triples.
- **Card grids:** 3-up at ≥1280, 2-up at 768–1279, 1-up at <768. No 4-up — too dense for the studio voice.
- **Floating nav:** centered, max-width ~640px, `top: 24px` with glass treatment.

### Whitespace Philosophy
Negative space is treated as a material, not an absence. Section padding is intentionally larger than the page actually "needs" — the breathing room signals confidence. A studio that ships cramped layouts is signalling it has too much to say and not enough to show; the long vertical scroll, the wide gutters, and the deep section padding all communicate "we curated; you don't need more."

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No elevation, sits on `{colors.base}` | Body copy, footer text, eyebrows |
| Soft hairline | `1px` mask-gradient border, no shadow | Dividers, table rules, card outlines |
| Backdrop blur | `backdrop-blur(24px)` + `{colors.glass}` fill + gradient-mask border | All cards, floating nav, modals |
| Light source | 400px radial cursor glow, blend-mode `screen` | Desktop ambient — sits above grain, below content |

**Shadow philosophy:** *no drop shadows.* Depth comes from blur, gradient borders, and the cursor glow — not from `box-shadow`. A drop shadow on glass reads as Material Design and breaks the studio claim. The only "shadow" is the implicit one made by the glass border fading toward the bottom of the card.

**Decorative Depth:**
- **Cursor glow** sits at `z-index: 0`, blend `screen`, never above interactive content.
- **Grain overlay** sits at `z-index: 1` with `pointer-events: none` and `opacity: 0.03`.
- **Glass cards** sit at `z-index: 2+`, content above blur.
- **Reused hero video** sits at the back of its container with `object-fit: cover` and `filter: brightness(0.9)` to keep it from competing with overlay copy.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| none | 0 | Section dividers, full-bleed media bands |
| sm | 8px | Inputs, small tags |
| md | 12px | Buttons, secondary controls |
| lg | 20px | Standard glass cards |
| xl | 24px | Hero glass panels, large showcase cards |
| pill | 9999px | Eyebrow chips, floating nav, icon buttons |
| full | 50% | Avatars (testimonial only) |

### Photography Geometry
- **Hero video:** 16:9 on desktop, 4:5 on mobile (cropped from the same source). `border-radius: 24px` on its frame, with the gradient-mask border applied to the *frame*, not the video.
- **Showcase tiles:** 4:3 desktop, 1:1 mobile. `border-radius: 20px`. Three of six tiles reuse the hero video (autoplay, muted, loop, `playsinline`).
- **Capability row imagery:** 1:1 micro-thumbnails, 8px radius, monochrome only.
- **Image loading:** All non-hero media `loading="lazy"`; hero video is `preload="metadata"` only; poster frame is a single static JPG to avoid layout shift.
- **No raw-photography.** All imagery is rendered, screen-recorded, or generated — keep the made-by-design feel intact.

## Components

### Top Navigation

**`floating-nav`** — `{component.floating-nav}`. Centered pill at `top: 24px`, max-width 640px, glass treatment (`{colors.glass}` + blur + gradient-mask border, `border-radius: pill`). Padding `12px 20px`. Links use `label` token in `{colors.body}`.
- **Default:** body opacity link.
- **Active (current section):** opacity 1, no underline (a subtle 4px dot below the label at `{colors.ink}` if needed).
- **Focus:** 2px outline at `rgba(255,255,255,0.40)`, `outline-offset: 4px`.

### Buttons

**`button-primary`** — `{component.button-primary}`. White fill `{colors.ink}`, black label, `border-radius: md` (12px), padding `14px 24px`, weight 500, `label`-sized text. The single high-contrast call to action; used once per section maximum.
- **Default:** `bg: {colors.ink}` / `color: {colors.base}`.
- **Active (pressed):** `transform: translateY(1px)`, fill drops to `rgba(255,255,255,0.92)`.
- **Focus:** `outline: 2px solid rgba(255,255,255,0.60)`, `outline-offset: 3px`.

**`button-secondary`** — `{component.button-secondary}`. Glass treatment: `{colors.glass}` fill + gradient-mask border + blur, `border-radius: md`, padding `14px 24px`, label in `{colors.ink}`. Same dimensions as primary; the visual sibling.
- **Default:** glass fill + masked border.
- **Active:** fill jumps to `rgba(255,255,255,0.08)`.
- **Focus:** outline `2px` at `rgba(255,255,255,0.40)`, offset `3px`.

**`button-utility`** — `{component.button-utility}`. Text-only with chevron, `body` color, no fill, no border. Used for "Learn more" and inline links inside cards.
- **Default:** `{colors.body}`, chevron at same color.
- **Active:** color jumps to `{colors.ink}`, chevron translates right by 2px.
- **Focus:** 2px underline at `{colors.muted}`.

### Cards & Containers

**`liquid-glass-card`** — `{component.liquid-glass-card}`. The shared utility. Fill `{colors.glass}`, `backdrop-blur(24px)`, gradient-mask border (white→transparent), `border-radius: lg` (20px), padding 32px. Every glass surface uses it — there is no second glass style.
- **Default:** as above.
- **Active (when interactive):** `backdrop-blur(28px)`; border-mask opacity climbs from `0.16` → `0.24` at top edge.
- **Focus (when interactive):** outline `2px` at `rgba(255,255,255,0.40)`, offset 4px.

**`showcase-tile`** — `{component.showcase-tile}`. Glass-card variant for the 6-tile portfolio grid. `border-radius: xl` (24px), aspect 4:3, contains either a static render or the reused hero video. Caption sits below, 16px gap, using `caption` token in `{colors.muted}`.

**`stat-card`** — `{component.stat-card}`. Glass-card variant for capability/metric rows. Big number in `display-md` + `tnum`, label in `label` token, no imagery. Used in 3-up rows.

### Inputs & Forms

**`input-text`** — `{component.input-text}`. Glass treatment scaled down: `{colors.glass}` fill + gradient-mask border + blur, `border-radius: sm` (8px), padding `12px 16px`, text in `{colors.ink}`, placeholder in `{colors.muted}`.
- **Default:** as above.
- **Focus:** mask-border opacity climbs to `0.40`, outline `1px` at `rgba(255,255,255,0.40)` with offset 0.
- Validation states (error/success) are **not surfaced** in the analyzed pages — see Known Gaps.

### Footer

**`footer`** — `{component.footer}`. Sits directly on `{colors.base}` with a hairline (`{colors.hairline}`) top border. No glass treatment — the footer is deliberately quiet. Logo, three link columns (`label` token, `{colors.muted}`), and micro-legal row at bottom. Padding `96px 0 48px`.

## Do's and Don'ts

### Do
- **Use the shared `{component.liquid-glass-card}` utility** for every glass surface — never fork a second glass style.
- **Reserve `{colors.ink}` (#FFFFFF)** for headlines and primary CTAs only; everything else uses `{colors.body}` or `{colors.muted}`.
- **Apply the 3% grain overlay site-wide** (`{component.grain-overlay}`) — it's the anti-flat layer.
- **Keep the cursor glow at 400px radius, rAF-driven, desktop-only**, with a clean no-op on touch.
- **Set display sizes with negative tracking** (-0.03em → -0.015em) per the Typography table.
- **Use `tnum` numerals** in every numeric run (pricing, stats, FAQ counts).
- **Lazy-load every non-hero image**, and use `preload="metadata"` on the reused hero video.
- **Treat new surfaces as portfolio proof** — studio bar, no filler — and extend by restraint, not by adding tokens.
- **Use mask-gradient borders** on all glass treatments — they're the render flex.

### Don't
- **Don't ship a single generic detail** — one shadcn default, one `bg-blue-500`, one hard 1px border, and the "we're a real studio" claim dies.
- **Don't add chromatic accents** (purple/pink/teal/blue) — monochrome gravity is the studio voice.
- **Don't add a dark-mode toggle** — the site IS dark, by design; there is no light theme.
- **Don't use `box-shadow` for elevation** — depth comes from blur + mask-borders + the cursor glow, never drop shadows.
- **Don't let the cursor glow stutter** — jank reads as "not actually good at this" and breaks the proof.
- **Don't use a different video per slot** — the single reused anchor is intentional for cohesion and performance.
- **Don't reach for an animation library** (Framer Motion, GSAP) — hand-built motion is the flex.
- **Don't use weight 700+** anywhere — the cap is 600.
- **Don't bump font-size to carry hierarchy** when an opacity drop would do it.
- **Don't introduce a 4-up card grid** — it reads dense and breaks the editorial pacing.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤419 | 1-up cards, hero video 4:5, cursor glow off, section padding 64px |
| Phone | 420–640 | 1-up cards, hero video 4:5, glow off, section padding 64px |
| Large phone | 641–735 | 1-up cards, hero video 16:9 begins, glow off, section padding 80px |
| Tablet portrait | 736–833 | 2-up cards, floating nav full-width, glow off or faint, padding 96px |
| Tablet landscape | 834–1023 | 2-up cards, glow on (reduced 280px), padding 96px |
| Small desktop | 1024–1068 | 3-up cards begin, glow full 400px, padding 112px |
| Desktop | 1069–1440 | 3-up grids, full cursor glow, padding 128px |
| Wide desktop | ≥1441 | Same as desktop; content capped at 1280px, never stretch cards |

### Touch Targets
- Minimum target size: `44px × 44px` per Apple HIG.
- Primary/secondary buttons hit `48px` height at all breakpoints via vertical padding.
- Floating-nav links use `12px` vertical padding to clear the 44px floor.

### Collapsing Strategy
- **Floating nav:** desktop pill → mobile collapses to logo + hamburger that opens a full-screen glass sheet.
- **Showcase grid:** 3-up → 2-up at 1024 → 1-up at 736. Captions stay below tiles at every breakpoint.
- **Capability rows:** desktop 3-up `stat-card` → mobile stacked single-column.
- **Hero typography:** `display-xl` 96px desktop → 72px tablet → 56px phone → 44px small phone. Tracking tightens further at smaller sizes (-0.035em at small phone).
- **Footer:** 4-column desktop → 2-column tablet → stacked mobile, link columns convert to disclosure panels under 640.

### Image Behavior
- **`srcset` / `sizes`** on every showcase tile, three widths (640 / 1024 / 1440).
- **Aspect ratio reserved via CSS `aspect-ratio`** to prevent layout shift on lazy load.
- **`loading="lazy"`** on every non-hero image; hero video uses `preload="metadata"` and a poster JPG.
- **Reused hero video** loads once and is referenced via `<video>` in each of its 4 slots; mobile drops to the poster JPG when `prefers-reduced-motion: reduce` is set.

## Iteration Guide

1. **Extend one component at a time.** New variant of `liquid-glass-card`? Add it as a modifier on the existing utility, never as a parallel new card.
2. **Variants live inside the component definition.** Don't create `liquid-glass-card-blue`; if you need contrast, change opacity, not hue.
3. **Use token references everywhere.** `{colors.ink}` not `#FFF`; `{component.button-primary}` not "the white button."
4. **Never document hover states.** Apple convention is default / active / focus only — hover is implied by `:hover` inheriting from `:focus-visible` styles.
5. **Display vs body family rule:** both use Inter; only sizes, weights, and tracking differ. Don't introduce a second family for "personality."
6. **Shadow restriction:** depth = blur + mask-border + cursor glow. If a surface needs more lift, it needs more whitespace, not a `box-shadow`.
7. **Chrome vs surface:** floating-nav and modals use the same glass utility as cards. There is no "chrome treatment" separate from the rest — chrome IS surface here.

## Known Gaps

- **App/product UI (the actual Leai editor) isn't documented** — only the marketing site. Applying the glass system to functional density (toolbars, panels, editing surfaces) is a harder design problem and not surfaced in the analyzed pages.
- **The cursor-glow mobile fallback is under-specified beyond "off"** — decide whether a faint touch-glow on tap or full no-op is canonical.
- **Gradient-border-mask exact CSS isn't pinned** — document the precise `mask-composite` / `-webkit-mask` recipe, or it degrades to a plain border on copy/paste.
- **Validation states (input error, success, disabled) are not surfaced** in analyzed pages — needs definition before forms ship.
- **Reduced-motion and reduced-transparency fallbacks** are mentioned but not fully specified — what replaces the cursor glow and the 400px blur when the user opts out?
- **Pricing/docs surface details (tables, code blocks, callouts)** aren't surfaced — they would extend the monochrome glass system, but token definitions for `code` / `kbd` / `callout` aren't yet defined.
