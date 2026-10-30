---
version: "1"
name: "Design System Inspired by Gates"
description: "Gates is a single-screen SaaS hero that lets one cinematic video carry all the color. A full-bleed golden-hour clip of a cloud gateway sits behind a warm-greige haze; clean white Inter Tight type reads on the veiled left, a frosted trust pill anchors the bottom. Strictly warm greige (#a9a29a) + white — no accent hue anywhere, every trace of color comes from the footage. React 19 + Tailwind 4 (@theme) + one GSAP power3.out intro timeline with masked headline lines."
colors:
  bg: "#a9a29a — global page base behind the video"
  haze: "#b9b2a9 — warm greige scrim/section tone (bg-haze)"
  ink: "#2c2925 — reserved dark body text token"
  ink-strong: "#201d19 — the one dark label, on the white primary button"
  muted: "#6a6159 — reserved subdued token"
  line: "rgba(120,110,98,0.28) — trust-badge hairline border"
  fg: "#ffffff — every hero text except the primary button label"
  none: "no purple, indigo, blue, teal or neon; all chroma is the video"
typography:
  display: { fontFamily: "'Inter Tight' via Google Fonts, @theme --font-display", weights: "500", role: "the two-line masked headline only — font-medium, tracking -0.022em, leading 1.04" }
  sans: { fontFamily: "'Inter' via Google Fonts, @theme --font-sans", weights: "400-600", role: "nav, body, buttons, trust badge — everything that is not the headline" }
spacing:
  edge: "px clamp(1.5rem, 3.6vw, 3.75rem) — one horizontal inset shared by nav + content so wordmark and headline align"
  spread: "content is a min-h-[100svh] flex column; headline sits high under a pt clamp(8.5rem,17vh,12rem), lower cluster shoved down with mt-auto — the wide vertical gap IS the composition"
rounded:
  button: "rounded-lg primary CTA"
  badge: "rounded-2xl trust pill; avatars rounded-full"
motion:
  library: "GSAP 3 only — one on-load timeline in gsap.context, reverted on unmount. No motion/react."
  intro: "power3.out timeline: nav {y:-18} 0.05 · headline lines {yPercent:118, stagger:0.12, dur:1.15} 0.15 · body {y:22} 0.55 · cta {y:20} 0.7 · trust {y:20} 0.82. gsap.ticker.lagSmoothing(0) keeps it deterministic."
  maskline: "each headline line lives in an overflow-hidden mask; yPercent:118 slides it up out of nothing. The .line class is the GSAP hook."
  reduced: "prefers-reduced-motion → early return; every element stays in its final visible state. .reveal utility carries the guard + will-change."
components:
  hero-film: "looping ~5s 1916×1080 cloud-gateway video, object-cover object-center, poster fallback; downloaded from the asset CDN, served local"
  scrim: ".hero-scrim — horizontal warm-greige fade (desktop) / vertical (mobile) that lightens the left column so white type reads; .hero-topwash keeps the nav legible"
  trust-badge: "frosted pill (bg-white/20, backdrop-blur, hairline border) with 3 overlapping inline-SVG gradient avatars + one line of white copy"
  avatars: "3 chips, useId gradient (sunset/sky/tan), white head circle + shoulder path, -ml-2.5 overlap, z descending so left sits on top"
---

# Design System Inspired by Gates

## Overview

Gates is a one-screen SaaS hero built on a single idea: **let the video be the only color**. A full-bleed golden-hour clip — a monumental archway in towering peach-lit clouds, a staircase rising from a mirror sea, a lone figure at the top — fills the frame. Over it, a **warm-greige haze** (`.hero-scrim`) veils the left column just enough that clean **white Inter Tight** type reads without a single accent hue. The page base is `#a9a29a`; the scrim tone is `#b9b2a9`; everything else is white. The only dark ink on the entire page is the label on the white "Connect Your Data" button.

The layout is a tall spread: the two-line headline sits high under the nav, and the lower cluster (body, CTAs, trust badge) is pushed to the bottom with `mt-auto`, leaving a deliberate vertical gap that lets the footage breathe. Motion is one **GSAP `power3.out`** timeline on mount — the nav drops, each headline line wipes up out of an `overflow-hidden` mask, then body, CTAs, and the frosted trust pill fade up in sequence. It plays once and rests; nothing is scroll-triggered, and reduced-motion renders everything in its final state.

**Key Characteristics:**
- **Video-as-color** — one cinematic clip carries all chroma; the UI is warm greige + white only.
- **Warm-greige scrim** — `.hero-scrim` (horizontal desktop / vertical mobile) makes white type legible on the bright side of the footage; `.hero-topwash` protects the nav.
- **Inter Tight 500 headline** — two masked lines, `clamp(2.5rem,6vw,4.95rem)`, tracking -0.022em; Inter carries everything else.
- **Spread composition** — headline top, cluster bottom via `mt-auto`; the gap is the design.
- **One GSAP intro** — `power3.out`, exact delays, `yPercent:118` masked line wipe, plays once.
- **Frosted trust pill** — `bg-white/20` + backdrop-blur + hairline, with 3 inline-SVG gradient avatars.
- **Zero accent, zero icons** — no purple/blue/neon, no icon library; the only SVGs are the avatar chips.

## Colors

- **Base ladder**: {colors.bg} page base → {colors.haze} scrim/`bg-haze`. The video supplies every other color.
- **Text**: {colors.fg} for all hero copy. {colors.ink-strong} is the single dark label (white button). {colors.ink} / {colors.muted} are reserved tokens.
- **Hairline**: {colors.line} on the trust pill. **No accent** ({colors.none}).

## Typography

- **Display** ({typography.display}): Inter Tight 500 on the headline only — never bold, tracking -0.022em, leading 1.04.
- **Sans** ({typography.sans}): Inter 400-600 for nav, body, buttons, badge.
- Defined as Tailwind 4 `@theme` tokens (`--font-display`, `--font-sans`), no `tailwind.config.js`.

## Layout

- **Edge** ({spacing.edge}): shared horizontal inset aligns wordmark + headline.
- **Spread** ({spacing.spread}): the vertical gap between headline and cluster is intentional.
- **Stack**: video (base) → `.hero-scrim` → `.hero-topwash` → content `z-20`. Nav is `absolute top-0 z-30`, pointer-events-none wrapper with a pointer-events-auto inner nav.

## Elevation & Depth

Depth is atmospheric, not shadow-based: the scrims and top wash are the only "layers", plus the primary button's soft drop shadow (`0 10px 30px -12px`) that deepens on hover, and the trust pill's backdrop-blur. No cards, no borders beyond the pill hairline.

## Components

### Hero film
{components.hero-film}. The single source of color; the scrims sit above it, content above them.

### Scrims
{components.scrim}. Without them the white type is unreadable on the bright side — never drop them.

### Trust badge + avatars
{components.trust-badge}. {components.avatars}.

### Buttons
Primary "Connect Your Data" is a white `rounded-lg` button with dark `--color-ink-strong` label and a soft shadow that lifts on hover. Secondary "Book a Demo" is plain white text, no background.

## Motion

{motion.intro} {motion.maskline} Library: {motion.library} Reduced motion: {motion.reduced}. No scroll-jacking, no continuous loops beyond the video, no custom cursor.

## Do's and Don'ts

### Do
- Keep the two scrims + top wash — they are what make white type readable.
- Keep the headline at Inter Tight 500 in `overflow-hidden` masks with the `.line` hook.
- Keep the GSAP `power3.out` delays and `yPercent:118` wipe exactly.
- Keep the spread: headline high, cluster bottom via `mt-auto`.

### Don't
- Don't introduce any accent color — all chroma is the footage.
- Don't bold the headline or swap Inter Tight for a lookalike.
- Don't recolor the body / "Book a Demo" / badge text; only the primary label is dark.
- Don't replace GSAP with motion/react or a CSS-only intro.
- Don't add icons or a UI kit; the only SVGs are the three avatar chips.

## Responsive

- Mobile-first; `clamp()` on headline (`2.5rem→4.95rem`) and edge padding.
- `<768px`: `.hero-scrim` switches to the vertical gradient; primary nav links hide (only wordmark + Log In); no hamburger by design.
- Content column `min-h-[100svh]` with `mt-auto` holds the spread at every height.

## Iteration Guide

To re-skin for another brand: swap the hero clip (keep a single warm/golden-hour asset so the greige scrim still reads), retune `--color-haze` and the scrim rgba stops to the new footage, rewrite the wordmark, four nav labels, headline, body, and trust copy. Leave the scrim recipe, the spread layout, the GSAP timing, and the avatar chips untouched — they are the system.

## Known Gaps

- All links (`href="#"`) are placeholders; nav, CTAs, and Log In go nowhere.
- The hero video + poster download from the asset CDN; the scrim stops are tuned to the shipped cloud clip.
- Single viewport only — no scroll content, no authenticated or dynamic surface beyond the one hero.
