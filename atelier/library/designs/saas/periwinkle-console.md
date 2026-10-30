---
version: "1"
name: "Periwinkle Console"
description: "Light-mode SaaS system on a near-white, faint-lavender field with a single rationed indigo-violet accent, Geist-driven type, dense utility card grids, and soft 0.28–0.8s eased transitions."
colors:
  background: "#FBFBFD"
  surface: "#FFFFFF"
  surface-muted: "#FAFAFC"
  text-primary: "#18181B"
  text-secondary: "#71717A"
  text-tertiary: "#A1A1AA"
  accent: "#545DFF"
  accent-soft: "#7A81FF"
  border: "#ECECF1"
typography:
  display-lg:
    fontFamily: "Geist"
    fontSize: "58px"
    fontWeight: 400
    lineHeight: "1.06"
    letterSpacing: "-2.3px"
  headline-md:
    fontFamily: "Geist"
    fontSize: "40px"
    fontWeight: 500
    lineHeight: "1.2"
    letterSpacing: "-1px"
  body-md:
    fontFamily: "Geist"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: "1.6"
  label-md:
    fontFamily: "Geist"
    fontSize: "16px"
    fontWeight: 500
    letterSpacing: "-0.2px"
  body-quote:
    fontFamily: "Times New Roman"
    fontSize: "16px"
    fontWeight: 400
    color: "#000000"
  label-mono:
    fontFamily: "Geist Mono"
    fontWeight: 400
    role: "terminal / code-console copy, eyebrow tags"
spacing:
  base: "8px"
  gap-tight: "6px"
  gap-sm: "9px"
  gap-md: "14px"
  gap-lg: "22px"
  section-padding: "124px"
rounded:
  control: "9px"
  control-alt: "12px"
  card: "16px"
  card-lg: "18px"
  pill: "9999px"
  bar: "9px"
components:
  navbar:
    background: "transparent"
    radius: "0px"
    height: "40px"
    width: "619px (bounded, centered)"
  button-primary-hero:
    background: "#545DFF"
    text-color: "#FFFFFF"
    radius: "9px"
    height: "~44px"
    note: "observed solid indigo-violet fill, slightly-rounded corners"
  button-secondary-ghost:
    background: "transparent"
    text-color: "#71717A"
    radius: "9px"
    height: "38px"
    padding: "0px 24px"
  button-tertiary-solid:
    background: "#FFFFFF"
    text-color: "#18181B"
    radius: "9px"
    height: "38px"
    padding: "0px 24px"
    shadow: "rgba(24, 24, 27, 0.1) 0px 2px 6px 0px"
  button-nav-utility:
    background: "#FFFFFF"
    text-color: "#000000"
    radius: "12px"
    height: "40px"
    padding: "0px 14px 0px 8px"
    border: "1px solid rgb(228, 228, 236)"
    hover-shadow: "rgba(24, 24, 27, 0.06) 0px 4px 14px 0px"
  card-media-panel:
    background: "#FBFBFD"
    radius: "0px"
    padding: "0px"
  card-feature-split:
    background: "#FFFFFF"
    radius: "16px"
    padding: "24px"
  card-orbit-radial:
    background: "radial-gradient(closest-side, rgba(255, 255, 255, 0.5), rgba(201, 205, 255, 0.22) 45%, rgba(0, 0, 0, 0) 72%)"
    radius: "50%"
    padding: "0px"
  card-hero-strip:
    background: "transparent"
    radius: "0px"
    padding: "0px 0px 64px"
  card-infra-tile:
    background: "#FAFAFC"
    radius: "16px"
    padding: "0px"
  card-glass-panel:
    background: "transparent"
    backdrop-filter: "blur(26px) saturate(1.05)"
    radius: "0px"
    padding: "0px"
  card-icon-block:
    background: "#FFFFFF"
    radius: "18px"
    padding: "34px 30px"
---
# Periwinkle Console
Source: https://staycloud.com/

## Overview
A light-mode, dark-UI-opposed system for a developer-facing SaaS: near-white ground (`#FBFBFD`), pure-white card surfaces, and a single rationed indigo-violet accent (`#545DFF`/`#7A81FF`) that appears only at structural pivots — the hero terminal mock, primary CTAs, a CTA band, pricing's recommended column. Geist carries every interface size from display to label; a Times New Roman quote mark and body sit inside a testimonial card as a single editorial break, and a monospace label face runs the terminal/console chrome. The composition reads as a Swiss-adjacent SaaS system: strict content column, uniform card radii (9–18px family), generous 124px section rhythm — refined utility design, not maximalist marketing.

## Composition
The first screen splits into a bounded, inset navbar; a two-column hero (headline/CTA stack left, a layered agent-console + terminal mockup right); and a logo strip directly below, un-sectioned. Scrolling down: a social-proof testimonial card with an avatar rail beneath it, then a labeled content band (eyebrow + headline + two-column feature grid of asymmetric cards), then a full-bleed indigo-violet infrastructure band containing a tabbed checklist and detail panel, then a four-tier pricing table, then a closing indigo-violet CTA band with orbiting icon chips, then a white footer. The deliberate choice is restraint: color is confined to discrete full-bleed bands (infra section, closing CTA) rather than washing the whole page — the alternative (a continuously tinted page) is explicitly rejected in favor of white card fields punctuated by violet moments.

## Colors
Ground is near-white (`#FBFBFD`, ~73% declared area, confirmed dominant in the pixel field as `#F0F0FF`/`#FFFFFF`) — this is a light system, not dark-mode-default. Pure white (`#FFFFFF`) layers on top for cards and the tertiary button. Text ink is near-black `#18181B` for primary copy, `#71717A` for secondary/muted labels, `#A1A1AA` and `#8E8E99` for tertiary metadata. The accent `#545DFF` (and its lighter sibling `#7A81FF`) is rationed to under 3% of pixels — hero CTA, link-colored headline clause, infra/CTA band fills, pricing's recommended card — never spread across body text or default cards. Borders are hairline `#ECECF1`. Status dots in the infra checklist use isolated hues (a blue, a green, an amber, a pink/magenta) strictly as list markers, not as section color.

## Typography
Geist is the sole UI family across all weights: `display-lg` 58px/400, lh 1.06, ls -2.3px for hero headlines; `headline-md` 40px/500, lh 1.2, ls -1px for section titles; `body-md` 17px/400 lh 1.6 for paragraph copy; `label-md` 16px/500 ls -0.2px for nav items, button labels, and eyebrow tags. A monospace (Geist Mono) renders terminal/code-console lines and small system labels. A single Times New Roman quote block breaks the sans-only rhythm inside the testimonial card — an isolated editorial accent, not a repeating pattern. Headlines pair a near-black first line with an accent-violet or muted-gray second line for a two-tone hierarchy.

## Layout
Content is bounded to a 1248px max-width, centered. Section padding is a generous 124px top/bottom. Card grids run at measured gaps of 22px (4-column, 4-item stat/tile row, even 24/24/24/24 split), 14px (3-column asymmetric grid, rows "65/32 | 65/32" — one wide card plus one narrower per row), and 64px (2-column 45/44 split for the infra alternating layout). The feature-catalog band is a two-up grid of unequal-height cards; the pricing section is four uniform tiered columns with the second column popped forward (deeper fill, lifted). Corner radii stay in a tight family: 9px/12px for controls, 16–18px for cards, 9999px for pills/avatars, 50% for the circular orbit-chip stage. The system is dense but never crowded — generous internal card padding (24px, 34px/30px) offsets the tight external section rhythm.

## Components
- **Navbar**: centered bounded bar, NOT edge-to-edge — measured 619px wide (~32% of viewport) with large symmetric insets (~654px/647px), 40px tall, square all four corners (0px radius), background transparent, sticky. Holds 5 nav items plus logo at left and a dual CTA cluster at right (ghost "Entrar"-style text button + solid white/filled primary button). A slim full-width announcement strip sits above it, separately, in solid accent-violet.
- **Button — hero primary**: an observed solid indigo-violet fill (`#545DFF`), white text, ~9px corners (slightly-rounded), sits directly under the hero headline — the single highest-contrast CTA on the first screen.
- **Button — tertiary solid (white)**: `#FFFFFF` fill, `#18181B` text, 9px radius, 38px height, 0 24px padding, resting shadow `rgba(24, 24, 27, 0.1) 0px 2px 6px 0px`; used as the secondary hero action and footer CTA.
- **Button — ghost/ghost-text**: transparent fill, `#71717A` text, 9px radius, 38px height, 0 24px padding; used for low-emphasis actions beside the primary.
- **Button — nav utility (bordered white)**: `#FFFFFF` fill, `#000000` text, 12px radius, 40px height, asymmetric padding `0 14px 0 8px`, 1px solid `rgb(228,228,236)` border, hover lifts to `rgba(24,24,27,0.06) 0px 4px 14px 0px` — this is the account/plus-style nav-cluster button, not the hero primary.
- **Card — media panel (navbar-adjacent catalog, ×10)**: `#FBFBFD` fill, 0px radius, 0px padding; full-width panel with top-bled product-screenshot media, then heading, then body text — appears in the services catalog band.
- **Card — feature split (×4)**: `#FFFFFF`, 16px radius, 24px padding; top media + heading + body, arranged in rows of one wide card (~65%) beside one narrow card (~32%), repeated twice — an asymmetric two-up feature grid, not uniform.
- **Card — infra tile (×4)**: `#FAFAFC`, 16px radius, 0px padding; heading + body + a trio of contained tiles, laid out as three stacked 32%-width rows above one full-width row — used in the infrastructure checklist/detail composition.
- **Card — icon block (×3)**: `#FFFFFF`, 18px radius, 34px/30px padding; icon plus body text only, no heading — compact supporting-copy cards.
- **Card — orbit radial (×5, closing CTA band)**: gradient fill `radial-gradient(closest-side, rgba(255, 255, 255, 0.5), rgba(201, 205, 255, 0.22) 45%, rgba(0, 0, 0, 0) 72%)`, fully circular (50% radius), containing four small icon chips each; arranged scattered around the central headline rather than gridded.
- **Card — hero strip (×4)**: transparent, 0px radius, bottom padding only (64px), top media only — the testimonial/avatar-rail row beneath the main testimonial card, rows sized 96/63/83/72% suggesting an uneven avatar-and-caption scroll strip.
- **Card — glass panel (×4)**: transparent with `backdrop-filter: blur(26px) saturate(1.05)`, 0px radius — floating chrome overlays inside the hero terminal/agent mockup.
- **Pricing table**: 4-column tier grid, the second ("recommended") column raised with a dark-navy fill and a pill-shaped "recommended" tag, each column: label, description, large price numeral with strikethrough original price, solid or outline CTA, then a checklist of feature rows with leading check icons.
- **Footer**: `#FFFFFF` background, logo + tagline + status dot at left, three link columns (18 links total), a small badge/certification tile, bottom legal row with address — plain list layout, no card framing.

## Graphics & Effects
Five radial gradients compose the page's color washes, each confined to a specific band, none full-screen: two near-identical `radial-gradient(38% 52% at 6%/56% 18%, rgba(201,205,255,0.75), rgba(0,0,0,0) 70%)` washes sit at the hero's upper corners; two `radial-gradient(30% 46% at 21%/71% 88%, rgba(255,255,255,0.5), rgba(0,0,0,0) 70%)` washes sit low in the same hero area; one tighter, more saturated `radial-gradient(26% 40% at 36% 8%, rgba(122,129,255,0.85), rgba(0,0,0,0) 70%)` sits near the top-center as the strongest localized color hit — together these cover roughly 17% of total page area and are what reads as the hero's "aurora," rationed to the hero band only, not the full page. A dot-pattern scrim (`radial-gradient(rgba(84,93,255,0.17) 0.7px, transparent 0.7px)` and a fainter 0.1-alpha variant) textures specific media surfaces, giving a soft halftone grain over mockup panels. Live canvas/video surfaces back the terminal and orbit-chip areas; stand in with a static soft-gradient screenshot when rebuilding. Shadow language is glow-based, not just dark drop-shadow: `rgba(84,93,255,0.28) 0px 0px 8px 1px` and `rgba(98,107,233,0.5) 0px 0px 0px 1.5px` ring highlighted elements, while `rgba(255,255,255,0.35) 0px 1px 0px 0px inset, rgba(28,33,140,0.2) 0px 18px 40px 0px` gives the dark pricing column its lifted-card elevation. Backdrop blurs of 6–26px (`blur(14px)`, `blur(8px)`, `blur(10px)`, `blur(6px)`) soften floating console chrome.

## Motion
Primary content reveals use `opacity, transform` over 0.8s with `cubic-bezier(0.22, 0.61, 0.36, 1)` — a slow, confident ease-out entrance for section-level elements. Interactive state changes (hover, focus) run faster: `transform, opacity, border-color, box-shadow` at 0.28s each with the same `cubic-bezier(0.22, 0.61, 0.36, 1)`/ease mix, giving buttons and cards a snappy but non-abrupt settle. A 0.25s plain `ease` handles simple opacity fades (tooltips, toggles), and a 0.38s ease/cubic-bezier blend governs secondary reveals. Named keyframes (`sc-shine`, `scFadeUp`, `scDriftY`, `scPulse`, `scBlink`, `scFlow`) drive a looping shine sweep, upward fade-ins, slow drift, pulsing glow, blinking cursor, and flowing gradient motion — consistent with the terminal cursor blink, the floating icon drift in the CTA band, and the pulsing status dot in the footer.

## Guardrails
- Never saturate the full hero background with the violet gradient — keep it confined to corner/upper-band washes over a near-white field.
- Do not substitute the bordered white nav-utility button's values for the hero primary CTA; the primary is a solid violet fill, the nav button is a white-bordered utility.
- Keep card radii within their family: 0px for media/panel cards, 16–18px for content cards, 9999px/50% only for pills and the orbit chips — do not round sharp panels or square content cards.
- Preserve the asymmetric row compositions (wide+narrow pairs, 32/32/32+100 stacks) in feature and infra grids; do not normalize them into uniform equal-width cards.
- Reserve Times New Roman strictly for the single testimonial quote; do not extend serif into headlines or UI labels.
- Keep the navbar as a centered, bounded, square-cornered bar with large side insets — never stretch it edge-to-edge.
