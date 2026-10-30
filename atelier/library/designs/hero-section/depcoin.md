---
version: "1"
name: "Depcoin — Cinematic CEX Hero with Volumetric Beam"
description: "A single-section hero for Depcoin, a centralized crypto exchange (CEX). Dark void (#0c0a14) backdrop, in-house three.js BeamCore shader projecting a volumetric purple beam (#c9a8ff) that lands on a rounded preview card showing a live trading dashboard. Four-family typography (Manrope/Cabin/Instrument Serif/Inter), three icons, zero JS animation libraries — the shader is the entire motion system."
colors:
  section-bg: "#0c0a14"
  primary: "#7b39fc"
  primary-hover: "#8d52fd"
  dark-purple: "#2b2344"
  dark-purple-hover: "#3a3059"
  off-white: "#f6f7f9"
  sign-in-ink: "#171717"
  sign-in-border: "#d4d4d4"
  beam: "#c9a8ff"
  card-border: "rgba(185, 138, 255, 0.30)"
  pill-border: "rgba(164, 132, 215, 0.50)"
  pill-bg: "rgba(85, 80, 110, 0.40)"
  impact-halo: "rgba(201, 168, 255, 0.45)"
  cta1-shadow: "rgba(123, 57, 252, 0.40)"
  card-top-shadow: "rgba(123, 57, 252, 0.22)"
typography:
  manrope: { fontFamily: "Manrope", weights: "400 / 500 / 600 / 700", role: "navbar links, action buttons, logo wordmark" }
  cabin: { fontFamily: "Cabin", weights: "400 / 500 / 600 / 700", role: "primary CTAs, pill tagline" }
  serif: { fontFamily: "Instrument Serif", weights: "regular + italic", role: "main headline + italic 'and'" }
  inter: { fontFamily: "Inter", weights: "400 / 500 / 600 / 700", role: "body subtext at 18px" }
spacing:
  base: "Tailwind default (4px)"
  container: "px-6 mobile → lg:px-[120px] desktop"
  section-height: "h-screen min-h-[780px]"
  headline-block: "max-w-[680px], mt-12, text-left"
rounded:
  card: "24px"
  cta: "10px"
  nav-button: "8px"
components:
  beam-core: "In-house three.js + GLSL shader (BeamCore.jsx). RawShaderMaterial on a full-screen triangle. Adaptive DPR (0.6 floor when FPS<50). IntersectionObserver + visibilitychange auto-pause. 18 public props."
  preview-card: "Absolute rounded-[24px] card pinned to beam landing (left-[63%], top-[54vh]). w-[92%] max-w-[1180px] h-[58vh]. Three-stage top: hairline + radial halo + blurred white streak."
  navbar: "In-house hex-D SVG logo + Depcoin wordmark, 4 nav links, Sign In + Get Started CTAs. Mobile: full-screen bg-black overlay."
  cta-pair: "Start Trading Now (primary, cta1-shadow) + Explore Markets (dark-purple, off-white text). flex-col on mobile, flex-row on sm+."
---

# Depcoin — Cinematic CEX Hero with Volumetric Beam

> Fivefold showcase. Pairs with the Depcoin hero prompt. Use this file to keep Depcoin's trading-grade cinematic restraint when you add new sections — the page should always read like a premium CEX product page, never a meme-coin landing.

## Overview

Depcoin is **a single-section hero for a centralized cryptocurrency exchange, built around one piece of WebGL theatre: a volumetric purple beam that lands on the corner of a rounded preview card.** The card holds a live trading dashboard screenshot. The beam is an in-house three.js shader called `BeamCore` — 400+ lines of GLSL with wisps, fog, and falloff curves — and it is the only animation in the entire build. No Framer. No GSAP. No Lottie. The page reads as if a Bloomberg terminal had been staged on a soundstage, then lit by a single cinema fixture pointed straight down.

The governing decision: **the shader is the story, everything else gets out of its way.** Most CEX landings shout — neon green tickers, cyan price flashes, pink "moon" gradients. Depcoin refuses all of it. The palette is a single dark void (`{colors.section-bg}` — #0c0a14), a single brand purple (`{colors.primary}` — #7b39fc), and a single beam tint (`{colors.beam}` — #c9a8ff) — no green, no cyan, no pink anywhere. The headline is set in Instrument Serif, the navbar in Manrope, the CTAs in Cabin — four faces, four jobs, all subordinate to the beam's impact halo. The math is precise: the beam center sits at `0.5 + 0.13 = 63%` screen-width, and the card's `left-[63%]` is calculated from that exact offset; the landing flare sits at `50 − 100 × −0.04 = 54vh`, and the card's `top-[54vh]` is calculated from that exact offset. The card top is where the beam dies. Move the beam, the card moves with it. The bet: a CEX deserves to look like a Bloomberg terminal staged in a film noir — premium, cinematic, trading-grade — not like an airdrop landing.

The system extends across future sections the same way the hero does: one piece of theatre per section, never two. If a Markets section is added, it inherits the dark void, the four-family typography, and the same beam-card lock pattern; new animation libraries are not permitted. Chrome stays Manrope; surfaces alternate between the void and the card's interior dark, never a third gray.

**Key characteristics:**
- **Dark void canvas** (`{colors.section-bg}` — #0c0a14) under a volumetric purple beam (`{colors.beam}` — #c9a8ff). The only "color" is purple in three temperatures: beam, brand, dark.
- **In-house BeamCore shader** — three.js v0.184 RawShaderMaterial running a single full-screen triangle. `R_H/R_V = 150`, `FLARE_HEIGHT 16`, 10 wisp lanes per side, 5 FBM octaves for fog. The whole hero's motion comes out of this one file.
- **Four typefaces, four roles** — Manrope (nav/buttons/logo), Cabin (CTAs), Instrument Serif (headline + italic "and"), Inter (subtext). One Google Fonts `<link>` in `index.html`.
- **Beam-card lock** — `horizontalBeamOffset 0.13` ↔ card `left-[63%]`; `verticalBeamOffset −0.04` ↔ card `top-[54vh]`. Invariant per Layer 11 of the prompt.
- **Three-stage card top** — hairline gradient, radial halo (`{colors.impact-halo}`), blurred white streak — layered so the beam reads as "landing on" the dashboard, not painted behind it.
- **Adaptive DPR + auto-pause** — drops to 0.6 DPR floor when FPS < 50, lifts back at 58, pauses when offscreen or tab-hidden. The shader pays its own performance rent.
- **Three lucide-react icons only** — `ChevronDown`, `Menu`, `X`. No emoji, no third-party icon set.

## Colors

> **Source pages analyzed:** the single Hero section — navbar, headline block, CTA pair, preview card, BeamCore shader uniforms. The whole identity sits inside one viewport.

### Surface & Canvas
- **Section background** (`{colors.section-bg}` — #0c0a14): Global dark, slightly violet-leaning, so brand purple reads continuous with the canvas. Also the card's own `bg` — the card is a clipped piece of the same void.

### Brand Purples
- **Primary** (`{colors.primary}` — #7b39fc): Brand purple. CTA1 fill ("Start Trading Now"), Get Started button, D-mark inside the hex logo. Tailwind-extended as `primary`.
- **Primary hover** (`{colors.primary-hover}` — #8d52fd): One step lighter — the only CTA1 hover treatment. No transform, no shadow change.
- **Dark purple** (`{colors.dark-purple}` — #2b2344): CTA2 fill ("Explore Markets") — the secondary action that doesn't ask to be pressed. Tailwind-extended as `dark-purple`.
- **Dark purple hover** (`{colors.dark-purple-hover}` — #3a3059): Hover swap for CTA2. Reads as the same surface, one shade up.
- **Beam** (`{colors.beam}` — #c9a8ff): Shader tint, never used for type. Lives in GLSL `uColor` and in two CSS gradients.

### Text & Sign-In
- **Default text** (#ffffff): Pure white on the void. Headline, nav links, CTA1 text.
- **Subtext** (text-white/70): 70% white, applied via Tailwind alpha. ~14:1 contrast on the void.
- **Off-white** (`{colors.off-white}` — #f6f7f9): CTA2 text. Slightly warm so it doesn't compete with the headline's pure white.
- **Sign-In ink** (`{colors.sign-in-ink}` — #171717): Near-black text on the white Sign In button — the only dark text in the build.
- **Sign-In border** (`{colors.sign-in-border}` — #d4d4d4): Neutral hairline around the white Sign In button.

### Hairlines, Halos & Shadows
- **Card border** (`{colors.card-border}` — rgba(185,138,255,0.30)): Purple-30 hairline around the preview card. Applied as `border-[#b98aff]/30`.
- **Impact halo** (`{colors.impact-halo}` — rgba(201,168,255,0.45)): Radial gradient at the card's top edge — ground zero of the beam.
- **CTA1 shadow** (`{colors.cta1-shadow}` — rgba(123,57,252,0.40)): `shadow-[0_8px_24px_…]` under the primary CTA — purple light bleeding onto the void.
- **Card top shadow** (`{colors.card-top-shadow}` — rgba(123,57,252,0.22)): Negative-Y shadow `shadow-[0_-8px_60px_…]` that lifts the card upward toward the beam.

### Pill (reserved)
- **Pill border** (`{colors.pill-border}` — rgba(164,132,215,0.50)) and **pill background** (`{colors.pill-bg}` — rgba(85,80,110,0.40)): Defined in the prompt's Layer 3 but not mounted in the active hero; reserved for an above-headline tagline pill in future variants.

**Constraint** (verbatim from prompt Layer 1): "Do not introduce neon green, cyan, or pink anywhere — the only purples allowed are the brand tokens in Layer 3."

## Typography

### Font Family
- **Manrope** — `'Manrope', sans-serif` — nav, action buttons, logo wordmark.
- **Cabin** — `'Cabin', sans-serif` — CTAs and the (reserved) pill tagline.
- **Instrument Serif** — `'"Instrument Serif"', serif` — headline only, regular + italic.
- **Inter** — `'Inter', sans-serif` — body subtext, fixed 18px.
- One Google Fonts `<link>` in `index.html` loads all four families. No `@font-face`, no self-hosted woff2 in this build.
- OpenType features: italic is the only style change requested (the word "and" in the headline). No tabular numerals — there are no numerals in the hero copy.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| Headline (mobile) | 48px (`text-5xl`) | regular | 1.1 | default | "Trade crypto instantly and securely" |
| Headline (tablet) | 72px (`sm:text-7xl`) | regular | 1.1 | default | same headline at sm+ |
| Headline (desktop) | 78px (`lg:text-[78px]`) | regular | 1.1 | default | same headline at lg+ |
| Headline italic span | inherits | italic | inherits | `word-spacing:0.08em` | the word "and" |
| Subtext | 18px (`text-[18px]`) | 400 | relaxed (~1.625) | default | the 350+ crypto paragraph |
| Nav link | 14px | 500 (medium) | default | default | Home / Markets / Reviews / Contact us |
| Action button (Sign In / Get Started) | 14px | 600 (semibold) | default | default | top-right pair |
| CTA (Start Trading / Explore Markets) | 16px (`text-[16px]`) | 500 (medium) | default | default | hero CTAs |
| Logo wordmark | 20px | 700 (bold) | default | tracking-tight | "Depcoin" next to hex mark |
| Mobile nav link (overlay) | 24px (`text-2xl`) | 500 | default | default | full-screen overlay link list |
| Mobile action button (overlay) | 15px | 600 | default | default | overlay bottom Sign In / Get Started |

### Principles
- **Four families, four roles.** Never use Manrope for headlines or Instrument Serif for buttons. Role-binding is the typography system.
- **Italic is a single-word event.** Instrument Serif italic is applied to the word "and" only; never to a phrase, never to subtext.
- **`word-spacing:0.08em` on the italic span is non-negotiable** per prompt Layer 11. Without it the headline collapses to a single optical lump.
- **Subtext is fixed at 18px across all breakpoints.** No fluid scaling, no clamp() — the body reads the same on a phone as on a 1440 monitor.
- **Weight 500 is the workhorse.** Nav, CTAs, and the mobile overlay all sit at medium. Bold (700) is reserved for the logo wordmark.
- **No `transform: scale` on type.** Sizes change per breakpoint only via the token table; never via CSS scale.
- **Pure white is the headline; off-white is the secondary CTA.** A 1-step color drop separates the loudest line from the quieter button below.

### Note on Font Substitutes
If `Instrument Serif` is unavailable, swap to a transitional serif with a strong italic (Cormorant Garamond, EB Garamond italic) and keep the `word-spacing:0.08em` rule on the italic word. If Manrope is unavailable, fall back to Inter at the same sizes and weights — they share an x-height close enough that nothing else needs to retune. If Cabin is unavailable, ship Inter at the same size and weight for the CTAs; do not substitute a display sans-serif. The prompt's weight-clamp rule applies: if a requested weight is missing, fall back to the nearest defined weight — never let the browser synthesize.

## Layout

### Spacing System
- **Base unit:** Tailwind default 4px scale — no custom scale, no `extend.spacing`.
- **Section height:** `h-screen min-h-[780px]` — the floor of 780px guarantees the card has room to land.
- **Horizontal rhythm:** container padding `px-6` mobile → `lg:px-[120px]` desktop. Navbar and the main text block inherit the same gutter.
- **Headline block:** `mt-12` (48px above the H1), then `mt-6` (24px) before subtext, then `mt-8` (32px) before the CTA pair, then `gap-4` (16px) between CTAs.
- **Navbar internal gaps:** `gap-10` between logo and link list, `gap-8` between nav links, `gap-3` between the Sign In and Get Started buttons.
- **Card top-stack heights:** hairline `h-px`, radial halo `h-52` (208px), bright streak `h-40 w-24` (160 × 96px).

### Grid & Container
- No CSS grid in this hero. The hero is a flex column (`flex-col`) with a single flex-row at the CTA pair on `sm+`.
- **Max content widths:** headline block `max-w-[680px]`, subtext paragraph `max-w-[560px]`, preview card `max-w-[1180px]`.
- **Card width:** `w-[92%] max-w-[1180px]` — the card breathes 4% on each side until the cap kicks in.
- **Card position:** `left-[63%]` + `-translate-x-1/2` + `top-[54vh]` — the centerline of the card is locked to the beam centerline.

### Whitespace Philosophy
The hero is mostly empty on purpose. The left third holds the headline block; the right two-thirds belongs to the beam and the card. Negative space is the canvas for the volumetric fog — every pixel of black that isn't beam is where the eye rests before it lands on the dashboard. This is the opposite of a meme-coin landing, where every square inch carries a ticker, a badge, a confetti emoji. Depcoin's whitespace is the same gesture as a Bloomberg terminal's matte black bezel: it signals that the data inside is the only thing that matters.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Section background, headline block, navbar bar |
| Soft hairline | 1px border at 30% alpha | Preview card outer edge (`border-[#b98aff]/30`), Sign In button (`border-[#d4d4d4]`) |
| Volumetric halo | Radial gradient at 45% alpha | Card top impact halo (`{colors.impact-halo}` in `radial-gradient`) |
| Cinematic shadow | Long-throw colored shadow | CTA1 `shadow-[0_8px_24px_{colors.cta1-shadow}]` + card top `shadow-[0_-8px_60px_{colors.card-top-shadow}]` |

**Shadow philosophy.** Every shadow in this hero is colored, never neutral. The CTA1 shadow is purple-40 because the button is purple; the card top shadow is purple-22 pointing upward because the beam is "lifting" the card toward the light. Neutral gray drop-shadows are forbidden — they would read as Material Design and break the cinematic frame.

**Decorative Depth.**
- The card's `shadow-[0_-8px_60px_…]` points up (negative Y) — visually the card is being pulled toward the beam, not pushed down toward the page.
- The radial halo sits inside the card, not behind it — the beam reads as landing on the dashboard's surface.
- The blurred white streak (`filter: blur(6px)`) is the brightest pixel on the page and the smallest — a controlled hotspot that anchors the eye.
- The shader's own fog and wisps provide ambient atmospheric depth; no other parallax or scroll-bound effect is used.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `none` | 0 | Hairlines, the 1px hairline gradient on the card top |
| `nav-button` | 8px (`rounded-[8px]`) | Sign In and Get Started buttons (both desktop and mobile overlay) |
| `cta` | 10px (`rounded-[10px]`) | Start Trading Now and Explore Markets CTAs |
| `card` | 24px (`rounded-[24px]`) | Preview card |
| `pill` | full (`rounded-full`) | Reserved for the (not-mounted) tagline pill in Layer 3 |
| `logo` | hex polygon | The hex-D logo — pre-rendered as SVG, not a CSS radius |

### Photography Geometry
- **One image only:** `https://cdn.5sdesign.art/projects/Depcoin/main-hero.png` — Depcoin trading dashboard screenshot at 1440 × 1391.
- **Anchor:** `absolute inset-x-0 top-0 w-full` inside the card; the image is pinned to the top edge so the beam impact lands on its own top hairline.
- **Clip:** the card's `overflow-hidden rounded-[24px]` clips the image to the card geometry; the bottom of the image extends below the viewport (intentional fold-clip).
- **Loading:** no `srcset`, no `loading="lazy"` — the image is the hero subject and must paint immediately. Use a preload `<link rel="preload" as="image">` in future variants if LCP regresses.
- **Drag/select disabled:** `draggable={false}` + `pointer-events-none select-none` — the dashboard is decorative, not interactive.
- **No stock photography. No people. No lifestyle imagery.** The dashboard is the only photography this section permits.

## Components

### Top Navigation

**Navbar** — `{component.navbar}`. Header bar `relative z-20 w-full`. Inner `flex items-center justify-between px-6 py-[16px] lg:px-[120px]`. Left cluster: hex-D logo SVG (26 × 26) + "Depcoin" wordmark (Manrope 20 bold, tracking-tight, white) + a `gap-8` `lg:flex` list of four nav links. Right cluster on `lg+`: Sign In button + Get Started button. Right cluster on `<lg`: hamburger button. The bar itself is flat — no background, no shadow.

**Nav link** — `{component.nav-link}`. Manrope 14 medium, white. `flex items-center gap-1` so the ChevronDown sits next to "Markets". Default state: full opacity. Focus state: inherits Tailwind `focus:outline` (white).

**Mobile overlay** — `{component.mobile-overlay}`. `fixed inset-0 z-50 flex flex-col bg-black lg:hidden`. Top row mirrors the desktop nav with a close (X) button replacing the hamburger. Center: stacked links at `text-2xl` Manrope medium, `gap-8`. Bottom: Sign In and Get Started buttons stacked, `gap-3`, padded `px-6 pb-12`.

### Buttons

**Button — primary CTA** — `{component.button-primary}`. "Start Trading Now". `rounded-[10px] bg-primary px-7 py-3.5 text-center font-cabin text-[16px] font-medium text-white shadow-[0_8px_24px_{colors.cta1-shadow}]`. Default: `{colors.primary}` (#7b39fc) fill, white text, purple-40 glow shadow. Active (hover swap via `transition-colors`): background shifts to `{colors.primary-hover}` (#8d52fd) — no shadow change, no transform. Focus: inherits Tailwind `focus:outline` (white ring).

**Button — secondary CTA** — `{component.button-secondary}`. "Explore Markets". `rounded-[10px] bg-dark-purple px-7 py-3.5 font-cabin text-[16px] font-medium text-[{colors.off-white}]`. Default: `{colors.dark-purple}` (#2b2344) fill, `{colors.off-white}` (#f6f7f9) text, no shadow. Active: background shifts to `{colors.dark-purple-hover}` (#3a3059). Focus: white outline.

**Button — utility (Sign In)** — `{component.button-utility-light}`. `rounded-[8px] border border-[{colors.sign-in-border}] bg-white px-5 py-2.5 font-manrope text-[14px] font-semibold text-[{colors.sign-in-ink}]`. The only dark-on-white surface in the build. Active: background shifts to `#f5f5f5`. Focus: white outline.

**Button — utility (Get Started)** — `{component.button-utility-primary}`. `rounded-[8px] bg-primary px-5 py-2.5 font-manrope text-[14px] font-semibold text-[#fafafa] shadow-[0_4px_14px_rgba(123,57,252,0.35)]`. A scaled-down sibling of the primary CTA — same brand purple, lighter shadow (`0.35` not `0.40`), tighter padding.

### Cards & Containers

**Card — preview** — `{component.card-preview}`. The only true card in the hero. `absolute left-[63%] top-[54vh] z-[5] h-[58vh] w-[92%] max-w-[1180px] -translate-x-1/2 overflow-hidden rounded-[24px] border border-[{colors.card-border}] bg-[{colors.section-bg}] shadow-[0_-8px_60px_{colors.card-top-shadow}]`. Holds the dashboard image and the three-stage beam-impact stack. Position is invariant per the beam-card lock.

**Card top — hairline layer** — `{component.card-hairline}`. `pointer-events-none absolute inset-x-0 top-0 h-px` with inline `background: linear-gradient(to right, transparent, rgba(201,168,255,0.9) 35%, #ffffff 50%, rgba(201,168,255,0.9) 65%, transparent)`. A 1px chrome line where the beam strikes.

**Card top — radial halo** — `{component.card-halo}`. `pointer-events-none absolute inset-x-0 top-0 h-52` with inline `background: radial-gradient(ellipse 42% 100% at 50% 0%, {colors.impact-halo}, transparent 72%)`. The diffuse purple bloom under the hairline.

**Card top — bright streak** — `{component.card-streak}`. `pointer-events-none absolute left-1/2 top-0 h-40 w-24 -translate-x-1/2` with inline `background: radial-gradient(ellipse 60% 100% at 50% 0%, rgba(255,255,255,0.35), transparent 70%); filter: blur(6px)`. The hotspot. Stacking order: image → hairline → halo → streak.

### Inputs & Forms

**Input — none mounted.** This hero has no form. If a future section adds an email capture: `rounded-[10px]` to match CTAs, Manrope 14 medium for the placeholder, `bg-[{colors.dark-purple}]` surface, `border border-[{colors.card-border}]` hairline, focus state lifts border to `{colors.beam}` at 50% alpha. Do not introduce a white input field on the void — it would break the cinematic frame.

### Footer

**Footer — none mounted.** The hero terminates at the fold (the card clips below). If a footer is added later, it inherits the void background, Manrope 14 for link rows, and a single hairline divider at `{colors.card-border}` to separate it from the hero. No second card surface in the footer.

## Do's and Don'ts

### Do
- **Use** `{colors.section-bg}` as the single background; never paint a second surface color on the void.
- **Lock the card to the beam** — when adjusting BeamCore offsets, hold `card-left% = 50 + 100 × horizontalBeamOffset` and `card-topVh = 50 − 100 × verticalBeamOffset`.
- **Reserve italic for the word "and"** with `word-spacing:0.08em`; never italicize a phrase or the subtext.
- **Set CTAs in Cabin at 16px medium** — both CTAs share the same scale; only the surface color differs.
- **Apply colored shadows only** — `{colors.cta1-shadow}` under the primary CTA, `{colors.card-top-shadow}` above the card.
- **Keep the icon set to three** — `ChevronDown`, `Menu`, `X` from lucide-react. Anything else is promoted to a project-wide kit first.
- **Use Tailwind `transition-colors` / `transition-opacity` for hover** — never `transform`, never `scale`.
- **Preserve the three-stage card top order:** image → hairline → halo → streak. The order is what makes the beam read as "landing on" the dashboard.
- **Pause the shader off-screen** — keep the IntersectionObserver + visibilitychange handlers intact.
- **Mount one Google Fonts `<link>`** that loads all four families together.

### Don't
- **Don't** introduce neon green, cyan, or pink anywhere — only the brand purples are allowed.
- **Don't** swap the dashboard image URL (`https://cdn.5sdesign.art/projects/Depcoin/main-hero.png`) — it's invariant per Layer 11.
- **Don't** add Framer Motion, GSAP, Lottie, or any JS animation library — the shader is the entire motion budget.
- **Don't** round hex codes (`#7b39fc` is not `#7c3aed`; `#c9a8ff` is not `#caa9ff`).
- **Don't** synthesize font weights — fall back to the nearest defined weight from the four families.
- **Don't** use neutral gray drop-shadows — every shadow in this build is colored.
- **Don't** add a scale or transform hover state on the CTAs — the brand is restraint.
- **Don't** rename `BeamCore` or `.beam-core-container` — the public API is fixed for this asset.
- **Don't** mount a fourth card surface, a second background, or a third purple — three purples is the ceiling.
- **Don't** dock the headline center-aligned — it's `text-left` so the beam owns the right two-thirds.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤419 | `px-6`; headline `text-5xl`; CTAs `flex-col gap-4`; nav collapses to hamburger; subtext stays 18px |
| Phone | 420–640 | Same as small phone; subtext line-length grows naturally inside `max-w-[560px]` |
| Large phone | 641–735 | Headline still `text-5xl`; CTAs still stacked; hamburger still active |
| Tablet portrait | 736–833 | Headline scales to `sm:text-7xl` (72px); CTAs flip to `sm:flex-row sm:items-center` |
| Tablet landscape | 834–1023 | Same as tablet portrait; padding stays `px-6` (no `lg` yet) |
| Small desktop | 1024–1068 | `lg:` activates: `px-[120px]`, nav links + action buttons visible, headline `lg:text-[78px]` |
| Desktop | 1069–1440 | Card hits `max-w-[1180px]` cap; beam math holds; all chrome at desktop scale |
| Wide desktop | ≥1441 | Card stays capped at 1180px; extra space is absorbed by the void; beam stays locked to 63% |

### Touch Targets
- **Minimum size:** 44 × 44 px on all interactive elements. Sign In / Get Started at `px-5 py-2.5` (text 14px) yield ~44px tall; CTAs at `px-7 py-3.5` (text 16px) yield ~52px tall.
- **Hamburger and X icons** ship at 28 × 28 inside a `text-white` button with no explicit padding — the parent button's hit area inherits the icon size, so allow extra `p-2` if a future variant needs to widen the target.

### Collapsing Strategy
- **Navbar:** desktop link list (`hidden lg:flex`) and action-button cluster (`hidden lg:flex`) both collapse below `lg`. Hamburger (`lg:hidden`) takes over.
- **Mobile overlay:** `fixed inset-0 z-50 flex flex-col bg-black` — full-screen black with centered links and bottom-pinned CTAs. Solves nav and CTAs in a single sheet.
- **Headline:** scales 48 → 72 → 78 across the three breakpoints; line-height stays 1.1.
- **Subtext:** fixed at 18px; line length collapses naturally as the container narrows.
- **CTA pair:** `flex-col gap-4` on mobile → `sm:flex-row sm:items-center` on tablet+. The primary CTA is always first in DOM order.
- **Preview card:** position holds across breakpoints (`left-[63%]`, `top-[54vh]`); width `w-[92%]` lets the card breathe on narrower screens until the 1180px cap engages.

### Image Behavior
- The single dashboard image is delivered as a static PNG at 1440 × 1391. No `srcset`, no `picture` element in the current build.
- `draggable={false}`, `pointer-events-none`, `select-none` — purely decorative.
- The image is anchored top inside the card with `absolute inset-x-0 top-0 w-full`; it naturally extends below the viewport fold and gets clipped by the card's `overflow-hidden`.
- For future variants on hi-DPI screens, a `@2x` companion at 2880 × 2782 should be added via `srcset`; the card's natural rendered width caps at 1180px so a 2x asset is the ceiling.
- Loading is eager (no `loading="lazy"`) — the dashboard is the LCP target.

## Iteration Guide

1. **One animation system per page.** Depcoin uses BeamCore. If you add a new section, the section gets at most one piece of theatre — either a second BeamCore variant (re-tuned props), a second WebGL shader, or a tasteful Framer entry block. Never two animation systems on screen at once.
2. **Variants live inside the component.** New button styles (e.g., outline, ghost) become new tokens (`{component.button-outline}`) in this file, not separate components. Same for new card styles.
3. **Reference tokens, not hex codes.** When extending sections, write `{colors.primary}` not `#7b39fc`; the next iteration will rename, not search-and-replace.
4. **Never document hover.** Per Apple convention, only default / active / focus are speccable here; hover is a Tailwind transition concern, not a token concern.
5. **Display vs body family rules.** Instrument Serif for any new display copy; Inter for any new body copy; Manrope for chrome; Cabin for action labels. Do not introduce a fifth family.
6. **Shadow restriction.** Any new shadow is colored, never neutral. Pick from the existing two tokens or extend with another `rgba(123,57,252,X)` variant.
7. **Chrome vs surface.** Navbar and (future) footer stay on the void; cards introduce a clipped sub-region of the same void with a 30%-alpha purple hairline. No third surface tone.

## Known Gaps

- **Validation / error / disabled states** for the buttons are not surfaced in the analyzed pages — only default and Tailwind hover swaps are specced. A future section that adds a form will need to extend this file.
- **The pill component** (`{colors.pill-border}`, `{colors.pill-bg}`) is defined in the prompt's Layer 3 but not mounted in the active hero; its exact dimensions, padding, and copy are not surfaced.
- **Light mode** is not in scope. The entire identity is dark-cinematic; a light variant would require rethinking the beam color and the card border alpha.
- **Footer typography, link grid, legal copy** are not surfaced — the hero terminates at the fold via the card's overflow clip.
- **Localization metrics** (line-length for CJK, RTL behavior of the italic "and") are not surfaced in analyzed pages. The headline's `word-spacing:0.08em` assumes a Latin script.
- **Specific blur radii beyond the streak's `blur(6px)`** are not surfaced — any new blurred surfaces will need to be calibrated against the streak as the reference.
