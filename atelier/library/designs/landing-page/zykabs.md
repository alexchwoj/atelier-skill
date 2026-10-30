---
version: "1"
name: "ZyKabs — Enterprise Blockchain (Light)"
description: "A light-mode landing for a blockchain engineering team, presented like enterprise SaaS rather than a crypto site. Pure white canvas, near-black ink, a single black→blue trust gradient on the headline, one dark stats band, and a hero panel that mimics a real product dashboard."
colors:
  background: "#FFFFFF"
  ink: "#0A0A0A"
  primaryText: "#18181B"
  subtleText: "#52525B"
  faintText: "#A1A1AA"
  muted: "#5A5A5A"
  blue: "#2563EB"
  indigo: "#818CF8"
  surface: "#F5F6F8"
  surfaceSoft: "#FAFAFA"
  border: "#E4E4E7"
  borderSoft: "#F4F4F5"
  darkBand: "#18181B"
  signalGreen: "#10B981"
typography:
  display:
    fontFamily: "Inter"
    weights: "600–700"
    role: "headlines"
  body:
    fontFamily: "Inter"
    weights: "400–500"
    role: "body, labels"
  mono:
    fontFamily: "ui-monospace, SFMono-Regular"
    role: "contract addresses, technical strings"
spacing:
  base: "4px"
  section-y: "7rem"
  card-p: "32px"
  panel-p: "32px"
rounded:
  xs: "6px"
  sm: "8px"
  md: "12px"
  card: "16px"
  panel: "24px"
  pill: "9999px"
components:
  hero-tab-panel: "Glass UI panel over hero video, 4 tabs (Node/Bridge/Audit/Launch) auto-swapping every 4s — looks like the real product dashboard"
  headline-gradient: "Second headline line only: from-black via-blue-600 to-indigo-400 — the single colored moment"
  stats-band: "The one dark inverted section, for rhythm"
  feature-card: "Light tile, hairline border, PNG icon, monochrome type"
  cta-primary: "Pill, near-black fill, white ink"
  cta-secondary: "Pill, hairline border, ink text"
---

# ZyKabs — Enterprise Blockchain (Light)

> Fivefold showcase. Pairs with the ZyKabs prompt. Use this to keep pages you build *after* the landing — docs, product, pricing — reading as serious enterprise infra, not a crypto site.

## Overview

ZyKabs is **Web3 with the crypto-hype stripped out and a suit put on** — blockchain engineering presented exactly like a credible enterprise SaaS (think Stripe/Vercel calm), not like a meme-coin launch. The whole design argues *"we are audited and serious"* by refusing every crypto cliché: no neon, no purple, no dark-glass casino energy. A clean white page with near-black type does the trust work; a single restrained blue gradient is the only color allowed in.

The governing decision: **look like infrastructure, not like a token.** Enterprise buyers and serious Web3 teams are allergic to hype aesthetics, so ZyKabs reads as a calm, light, technical product — credibility through restraint, with one interactive moment that proves there's real depth behind the marketing.

The system extends to docs, product, and pricing surfaces by inheriting one simple constraint: keep the page monochrome ink-on-white, reserve the `{colors.blue}→{colors.indigo}` ramp for a single phrase per page, and allow exactly one inverted dark band for rhythm. Density may grow on data-heavy product surfaces, but the palette, typeface, and color economy do not.

**Key Characteristics:**
- **Pure white** canvas (`{colors.background}` — #FFFFFF) reading as clinical transparency, "nothing to hide / audited"
- Near-black ink type (`{colors.primaryText}`) — the page is essentially ink-on-white
- A **single black→blue→indigo gradient** on the headline's second line only (`Scale Decentralized.`)
- One **dark "Tech Stats" band** (`{colors.darkBand}`) for tonal rhythm against the bright page
- Hero **glass panel with 4 auto-swapping tabs** (Node / Bridge / Audit / Launch, every 4s) that mimics the real product dashboard
- **Inter only**, weights 400/500/600/700 — engineering-grade monochrome typography
- **PNG feature icons** (isometric, shared lighting) — never lucide line icons for the 3-up grid
- **CSS keyframes + `animationDelay` stagger** — no Framer Motion, no animation library

## Colors

> **Source pages analyzed:** Hero, Features, How It Works, Tech Stats, Bottom CTA, Footer — single light page with one inverted dark band.

### Surface
- **Background** (`{colors.background}` — #FFFFFF): Pure white — deliberate here (opposite of a warm-paper brand). White reads as clinical, audited, transparent.
- **Surface Soft** (`{colors.surfaceSoft}` — #FAFAFA): Mono code background inside the Launch tab.
- **Surface** (`{colors.surface}` — #F5F6F8): Faint gray for tab inactive pills and card backgrounds. A whisper, never a hard fill.

### Text
- **Ink** (`{colors.ink}` — #0A0A0A): Near-black primary type. The page is ink-on-white; restraint is the credibility.
- **Primary Text** (`{colors.primaryText}` — #18181B / zinc-900): Headlines, body emphasis, nav, button fills.
- **Subtle Text** (`{colors.subtleText}` — #52525B / zinc-600): Subheadings, body paragraphs, secondary copy.
- **Faint Text** (`{colors.faintText}` — #A1A1AA / zinc-400): Captions, the oversized `01/02/03` step numerals, metadata.
- **Muted** (`{colors.muted}` — #5A5A5A): Legacy label tone; equivalent to subtle text on light backgrounds.

### Brand Gradient
- **Blue → Indigo** (`{colors.blue}` #2563EB → `{colors.indigo}` #818CF8): The trust gradient. **Blue is the enterprise-infra trust color (IBM, Stripe); the black→blue→indigo ramp reads "from solid foundation → forward".** It appears only on the headline's second line — the single place the brand allows itself color, used to underline the core promise.

### Hairlines & Borders
- **Border** (`{colors.border}` — #E4E4E7 / zinc-200): All hairlines, card outlines, footer separator, audit ring track.
- **Border Soft** (`{colors.borderSoft}` — #F4F4F5 / zinc-100): The thinnest separators inside the audit findings list.

### Inverted Band
- **Dark Band** (`{colors.darkBand}` — #18181B / zinc-900): The single inverted section (Tech Stats). White-on-dark type, large numerals, used exactly once.

### Signal
- **Signal Green** (`{colors.signalGreen}` — #10B981 / emerald-500): Live status only — pulse dots, audit ring stroke, latency bars, security checks. Never decorative.

## Typography

### Font Family
- **Inter** loaded via Google Fonts in `index.html`, weights 400 / 500 / 600 / 700
- CSS stack: `'Inter', system-ui, -apple-system, Segoe UI, Roboto, sans-serif`
- Tabular numerals not explicitly enabled; the Tech Stats numerals rely on Inter's default proportional figures
- A single neutral engineering-grade typeface — no display serif, no flourish. The restraint is the message

### Hierarchy
| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| Hero H1 (desktop) | 72px / `text-7xl` | 600 | 1.05 | -0.03em | `Build Faster. / Scale Decentralized.` |
| Section H2 | 48px / `text-5xl` | 600 | 1.10 | -0.025em | `Infrastructure for the Decentralized Frontier`, `From Concept to Mainnet`, `Ready to launch your protocol?` |
| Card H3 | 20px / `text-xl` | 600 | 1.25 | -0.01em | Feature card titles |
| Step H4 | 18px / `text-lg` | 600 | 1.30 | 0 | `Protocol Design`, `Security Audit`, `Ecosystem Growth` |
| Stat numeral | 48px / `text-5xl` | 600 | 1.0 | -0.02em | `$2.5B+`, `<0.8s`, `150+`, `Zero` |
| Subhead / body | 16–18px | 400 | 1.60 | 0 | Hero subhead, feature body, section subheads |
| Body small | 14px / `text-sm` | 400 | 1.65 | 0 | Card paragraphs, step descriptions |
| Eyebrow | 12px / `text-xs` | 600 | 1.0 | 0.20em uppercase | `INFRASTRUCTURE`, `THE ZYKABS PIPELINE`, `VALIDATOR NODE STATUS` |
| Footer column title | 12px / `text-xs` | 600 | 1.0 | 0.15em uppercase | `Ecosystem`, `Developers`, `Company` |
| Mono | 14px | 400 | 1.5 | 0 | Contract address inside Launch tab |

### Principles
- Headlines run Inter 600–700; body 400–500; weight 500 is reserved for buttons and active states
- The only typographic "event" is the **gradient on the second headline line** — color does the emphasis a heavier weight or a different face would do elsewhere
- Negative letter-spacing at display sizes (`-0.025em` to `-0.03em`) tightens headlines; eyebrows use wide positive tracking (`0.20em`) for the inverse rhythm
- Body text leans on 1.60–1.65 line-height for calm readability — long lines never look cramped
- The oversized `01/02/03` step numerals use `font-light` (300) at 30px against zinc-300 — a deliberate near-erasure so the title carries the row
- Never apply the gradient or a colored fill to anything except the headline's second line; keep all body copy monochrome

### Note on Font Substitutes
If Inter cannot load, fall back to `system-ui` (San Francisco on macOS, Segoe UI on Windows). Both are close-enough geometric sans typefaces and preserve the engineering tone. Reduce display letter-spacing slightly (`-0.02em`) on system-ui since it sets a touch tighter than Inter; otherwise no compensation needed.

## Layout

### Spacing System
- **Base unit:** `{spacing.base}` — 4px
- **Section vertical rhythm:** `{spacing.section-y}` — 7rem (≈112px) between sections on desktop, 6rem on mobile (`py-24 md:py-32`)
- **Card padding:** `{spacing.card-p}` — 32px (`p-8`) for feature cards and steps
- **Panel padding:** `{spacing.panel-p}` — 32px desktop, 24px mobile for the hero glass panel
- **Stats band inner padding:** 80px desktop, 48px mobile (`p-12 md:p-20`)
- **Stagger:** child enters at 0.1s, 0.2s, 0.3s … offsets via inline `animationDelay`

### Grid & Container
- **Outer container:** `max-w-7xl mx-auto px-6` (1280px max, 24px horizontal gutter)
- **CTA / narrow content:** `max-w-3xl mx-auto` (768px) for centered headers and the bottom CTA
- **Hero subhead:** `max-w-2xl` (672px) to keep line length reading like a thesis statement
- **Feature grid:** `grid-cols-1 md:grid-cols-3`, gutter `gap-6 md:gap-8`
- **How It Works:** `grid-cols-1 lg:grid-cols-2`, gutter `gap-12 lg:gap-20`
- **Tech Stats:** `grid-cols-2 md:grid-cols-4`, gutter `gap-8 md:gap-12`

### Whitespace Philosophy
Whitespace is the trust signal. Each section opens with a centered eyebrow/heading pair set against ~7rem of vertical air, and feature copy is hemmed by `max-w-2xl`/`max-w-3xl` so it never sprawls. The hero panel sits inside generous breathing room (32px internal, 64px below the CTA) — the page is allowed to feel under-populated on purpose. Crypto sites scream; ZyKabs leaves quiet around every claim.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body copy, eyebrows, raw text blocks |
| Soft hairline | `border border-zinc-200` (1px, `{colors.border}`) | Feature cards, footer top, audit findings rows, tab-panel outer |
| Backdrop blur | `bg-white/85 backdrop-blur-md` (nav), `bg-white/40 backdrop-blur-[2px]` (hero video overlay), `bg-white/95 backdrop-blur-md` (hero panel) | Nav bar, hero video veil, hero panel surface |
| Product shadow | `shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]` (hero panel) · `shadow-[0_20px_60px_-20px_rgba(0,0,0,0.08)]` (feature card active) | Hero glass panel only; feature cards on active state |

**Shadow philosophy.** Shadows are reserved for the hero panel (`{components.hero-tab-panel}`) and active feature cards. Everywhere else, depth is implied with hairlines and surface tint, not blur. A casino-glass shadow on every card would betray the governing decision; one soft drop on the panel is the maximum.

**Decorative Depth.**
- Hero video runs behind a 40% white veil + 2px blur — ambient texture, not a foreground hero
- The How It Works visualization uses a 20×20px radial-dot grid background (`{colors.border}` dots on white) for engineering atmosphere
- Pulse dots scale 1.0 → 1.2 over 1.6s `ease-in-out` infinite — the only continuous secondary motion

## Shapes

### Border Radius Scale
| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 6px / `rounded` | Bridge tab route pills (`IBC`, `Axelar`) |
| `{rounded.sm}` | 8px / `rounded-lg` | Mono contract address box, How-It-Works database tiles |
| `{rounded.md}` | 12px / `rounded-xl` | Bridge Relay and Vault rows inside the infrastructure visualization |
| `{rounded.card}` | 16px / `rounded-2xl` | Feature cards, hero panel, How It Works visualization frame |
| `{rounded.panel}` | 24px / `rounded-3xl` | Tech Stats dark band — only one element at this scale |
| `{rounded.pill}` | 9999px / `rounded-full` | All CTAs, tab buttons, the hero badge, pulse dots |

### Photography Geometry
- Hero **video** at full-bleed 16:9 (or larger), `object-cover`, behind a white/40 veil with 2px backdrop blur
- Hero **panel** is sized like a real app window — width follows the 7xl container, height grows with content per tab
- **PNG feature icons** at 512×512 source, rendered 48×48 (`w-12 h-12 object-contain`); transparent background, single isometric icon centered at ~80% canvas with shared lighting direction
- Icons sit at the **top-left of each feature card** with a 20px gap to the title — never centered, never inside a colored chip
- Loading: hero video `autoPlay loop muted playsInline`; PNGs lazy-load implicitly (no explicit `loading` attr in the spec)

## Components

### Top Navigation
**`{component.nav-bar}`** — Sticky `top-0 z-50` with `bg-white/85 backdrop-blur-md` and a `border-b border-zinc-200`. Inner container `max-w-7xl mx-auto px-6 py-4 flex items-center justify-between`. Left: `Layers` lucide icon at 24px + `ZyKabs` wordmark in Inter 600 `tracking-tight`. Right: one pill CTA (`Get Started`). No menu items — the original 5 menu links were intentionally removed.

### Buttons

**`{component.cta-primary}` — Primary pill (dark fill)** — `rounded-full bg-zinc-900 text-white text-sm font-medium px-6 py-3` (nav uses `px-5 py-2.5`). Used for `Get Started`, `Explore Documentation`, `Start Building`, `Deploy to Mainnet`. Default `{colors.primaryText}` fill; **active** state `bg-zinc-800` via `transition-colors duration-200`; **focus** ring inherits browser default (none customized in spec).

**`{component.cta-secondary}` — Secondary pill (outline)** — `rounded-full border border-zinc-300 text-zinc-900 font-medium px-6 py-3`. Used for `Contact Engineering` in the bottom CTA pair. Default transparent fill; **active** `bg-zinc-50`; **focus** inherits browser default.

**`{component.tab-button}` — Utility pill (tab)** — `px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-200`. Default: `bg-zinc-100 text-zinc-700`. **Active** (current tab): `bg-zinc-900 text-white`. Driven by `useState<'node'|'bridge'|'audit'|'launch'>('node')` plus a `setInterval(4000)` that auto-advances through all four keys. The active state is also the focus surface for the panel beneath.

### Cards & Containers

**`{component.feature-card}` — Light feature tile** — `p-8 rounded-2xl border border-zinc-200`. Contains: PNG icon `w-12 h-12 object-contain mb-5`, H3 title `text-xl font-semibold tracking-[-0.01em] mb-3`, body `text-sm text-zinc-600 leading-[1.65]`. **Active** (group state): `border-zinc-300` + `shadow-[0_20px_60px_-20px_rgba(0,0,0,0.08)]` and icon scales 1.05 via `group-hover:scale-105 transition-transform`. **Focus** state not surfaced.

**`{component.hero-tab-panel}` — Glass dashboard panel** — `rounded-2xl border border-zinc-200 bg-white/95 backdrop-blur-md shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] p-6 md:p-8`. Holds the four operational tab views (Node / Bridge / Audit / Launch). **Treat it as a live preview of the real product dashboard, not decoration** — its job is to let a visitor *imagine using ZyKabs*. Tab content swaps via conditional render on the 4s interval — no transition library, the browser handles the snap.

**`{component.stats-band}` — Dark inverted tile** — `rounded-3xl bg-zinc-900 text-white p-12 md:p-20`. The single dark element on the page. Holds the 2×4 (or 4×1) numeric grid. Big stat at `text-4xl md:text-5xl font-semibold tracking-[-0.02em]`; label at `text-xs uppercase tracking-[0.2em] text-zinc-400`. Never add a second dark band per page.

**`{component.infra-viz}` — Pipeline visualization frame** — `aspect-square rounded-2xl border border-zinc-200 p-8` with a radial-dot background (`#e4e4e7` dots, `20px 20px` size). Contains a 2×2 grid of `Database` tiles, a Bridge Relay strip (pulse dot + `streaming…` mono caption), and a Vault row (`ShieldCheck` + `Vault — Protected`).

### Inputs & Forms

**`{component.mono-readout}` — Code/address readout** — `font-mono text-sm bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2 break-all`. Used inside the Launch tab to display `0x742d35Cc6634C0532925a3b8442B4dC8C4F8c8E1`. Default state only; no editing, no focus state. The closest surface to an "input" in the system — there are no real form fields in the landing.

**`{component.route-pill}` — Bridge route chip** — `text-xs px-2 py-1 rounded bg-zinc-100 text-zinc-700`. Two instances inside the Bridge tab: `via IBC`, `via Axelar`. Static (non-interactive).

### Footer

**`{component.footer}`** — `border-t border-zinc-200 py-12 px-6 max-w-7xl mx-auto`. Top: `grid grid-cols-2 md:grid-cols-5 gap-10` — left brand block (col-span-2) with logo and tagline `Engineering the decentralized future.`, then three link columns (Ecosystem · Developers · Company). Column titles: `text-xs font-semibold uppercase tracking-[0.15em] text-zinc-900 mb-3`. Links: `block mt-2 text-sm text-zinc-600`. **Active** link state: `text-zinc-900`. Bottom row: `mt-12 pt-6 border-t border-zinc-200`, copyright left, social icons right (X / Discord via `MessageCircle` / GitHub).

## Do's and Don'ts

### Do
- Use `{colors.background}` as the canvas everywhere except the single Tech Stats band
- Reserve `{components.headline-gradient}` (`from-black via-blue-600 to-indigo-400`) for one phrase per page
- Set every CTA as a pill (`{rounded.pill}`) — primary uses `{colors.primaryText}` fill, secondary uses `{colors.border}` outline
- Keep the hero panel sized like a real product window and populate every tab with plausible operational data
- Reserve `{colors.signalGreen}` for live signals only (pulse dots, audit ring, latency bars)
- Apply `animate-fade-in-up` with 0.1s `animationDelay` increments to every section's direct children
- Use PNG feature icons sharing the same isometric perspective and lighting — never lucide line icons in the 3-up grid
- Use `{component.stats-band}` exactly once per page for tonal rhythm
- Keep Inter monochrome everywhere except the headline gradient

### Don't
- Don't add crypto-hype cues — no neon, no purple, no dark-glass casino aesthetic
- Don't introduce a second gradient or a second color section — the headline and the dark band are the only contrast events
- Don't add a partner-logo wall (the brand has none — fake logos destroy the "audited and serious" credibility)
- Don't make the hero panel decorative or fake-looking — if it doesn't read as a real product view, it fails its job
- Don't introduce a display serif, script font, or flourish typeface — engineering seriousness is monochrome and unembellished
- Don't extend `tailwind.config.js` — the design intentionally uses the default palette only
- Don't add a dark-mode toggle — the system is light-mode by argument, not by accident
- Don't add nav menu items beyond the single `Get Started` CTA; the empty nav is the statement
- Don't reach for Framer Motion — CSS keyframes + `animationDelay` stagger are the entire motion budget
- Don't break the gradient across more than one line of type — color is a scalpel, not a brush

## Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤419px | Hero H1 at `text-4xl`, panel paddings collapse to 24px, tabs may wrap to two rows |
| Phone | 420–640px | Single-column feature grid, Tech Stats 2×2, How It Works visualization hidden or stacks below text |
| Large phone | 641–735px | Same as Phone; CTA pair stacks vertically |
| Tablet portrait | 736–833px | Hero H1 at `text-6xl`, feature grid 1-up, panel grids remain single column |
| Tablet landscape | 834–1023px | Feature grid 2-up at the bleeding edge, panel inner grids switch to 2-column where defined |
| Small desktop | 1024–1068px | Hero H1 at `text-7xl`, 3-up feature grid, How It Works switches to lg:grid-cols-2 |
| Desktop | 1069–1440px | Full hero panel layouts, Tech Stats 4-up, footer 5-column grid |
| Wide desktop | ≥1441px | Container caps at `max-w-7xl` (1280px); extra width becomes outer whitespace, never extra columns |

### Touch Targets
- Minimum 44×44px for every pill CTA (`px-5 py-2.5` or larger satisfies this with Inter at 14px)
- Tab buttons inherit `px-5 py-2.5` — comfortable thumb size; tap targets do not shrink on mobile
- Footer links use `text-sm` with natural line-height padding — keep `block` on mobile so the full row is tappable

### Collapsing Strategy
- **Nav:** stays sticky; the right-side CTA remains visible at every breakpoint (no hamburger needed since there are no menu items)
- **Hero panel:** inner two-column tab grids collapse to single column < 768px; the tab row keeps all four buttons but may wrap to two rows on small phones
- **Feature grid:** 3 → 2 → 1 column as width decreases; cards retain `p-8` padding
- **How It Works:** the right-side visualization either stacks below the text or is hidden on `< 1024px`; numbered steps remain single-column
- **Tech Stats:** 4 → 2 columns; the `rounded-3xl` band keeps its scale, padding collapses to `p-12`
- **Footer:** 5 → 2 columns; the brand block takes the full top row on mobile

### Image Behavior
- Hero video served from CDN (`https://cdn.5sdesign.art/projects/ZyKabs/zykabs-hero.mp4`); `autoPlay loop muted playsInline` to satisfy mobile autoplay policies
- PNG feature icons load directly from `/public/icons/`; no explicit `srcset` — 512×512 source rendered at 48×48 is sharp through Retina
- No explicit `loading="lazy"`; if added later, exclude the hero badge icon (above the fold)
- White/40 veil + 2px blur on the hero video is non-negotiable — the panel must always read above the video, not against it

## Iteration Guide

1. **New page (docs, product, pricing)?** Start from `{colors.background}` + `{colors.primaryText}` + Inter. Color appears only where you'd put the trust-blue moment.
2. **One feature per page.** The headline gradient is a scalpel — one use per page, on the most important phrase. Never compound it with a second colored element.
3. **Live > decorative.** Any interactive element should feel like the real product (`{components.hero-tab-panel}` is the reference). If it reads as a mock, it fails the governing decision.
4. **One dark band, always.** Keep exactly one `{component.stats-band}` per page for rhythm; a second flattens the tonal contrast.
5. **Token references over raw values.** When extending the system, write `{colors.blue}` and `{rounded.card}` in design notes — never hardcode `#2563EB` or `16px` into prose specs.
6. **Display vs body family — no exceptions.** Both run Inter. If a future page begs for a serif accent, that is the moment to ask whether you are still designing ZyKabs.
7. **Resist crypto cues at every step.** When a visual choice could read "token launch" or "enterprise infra," pick infra — every time, without negotiation.

## Known Gaps

- Real dashboard / app states (auth screens, data tables, empty states, validation) are not specified — only the hero's simulated panel. Build them in the same `{colors.background}` + `{colors.blue}` language.
- **Focus rings** beyond the browser default are not documented — buttons and tabs need explicit focus-visible treatment before shipping to keyboard-heavy enterprise audiences.
- **Hover states** are intentionally not documented (Apple convention applied to a light enterprise system); some interactions in the source spec still rely on `hover:` utilities and will need to be re-thought for touch-only contexts.
- **PNG feature icons** are showcase-specific assets. A new section needs matching isometric icons (same perspective, same lighting); mismatched lucide line icons must not be substituted.
- **Dark mode** is not provided and is not on the roadmap — the system argues against it by design.
- **Localization** (RTL layouts, longer German/Vietnamese headlines) is not surfaced in the analyzed pages; the negative letter-spacing and tight headline line-height may need relaxing for non-Latin scripts.
