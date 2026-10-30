---
version: "1"
name: "Apos — Omnichain Swap Bridge Hero"
description: "A single-screen, liquid-glass hero for an omnichain swap bridge moving any asset across 40+ blockchains. Ink-black canvas (#070b0a), a single mint accent (#5ed29c), a full-bleed WebGL Bayer-dithered pixel field that paints click ripples, a floating glass pill navbar, and a 200×200 glass card whose only flourish is one italicised Instrument Serif word."
colors:
  ink: "#070b0a"
  mint: "#5ed29c"
  white: "#ffffff"
  white-opacity-ramp: "white/10 · white/15 · white/20 · white/40 · white/50 · white/55 · white/70 · white/80"
typography:
  display:
    fontFamily: "Inter"
    weights: "400 / 500 / 600 / 700 / 800"
    role: "headline, body, nav links, logo wordmark, stats values & labels"
  label:
    fontFamily: "Plus Jakarta Sans"
    weights: "400 / 500 / 600 / 700 / 800"
    role: "eyebrow tag and the card's [ 2026 ] date tag — small uppercase tracking-heavy labels only"
  accent:
    fontFamily: "Instrument Serif"
    weights: "italic only"
    role: "the single italic accent word `Industry` inside the glass card — the design's one fancy typographic moment"
spacing:
  base: "Tailwind 3 default (4px)"
  max-prose: "512px (`maxWidth.prose` extension — hero description cap)"
  container: "max-w-7xl (1280px) with px-6 lg:px-10 on hero, px-4 pt-4 sm:px-6 sm:pt-6 on header"
rounded:
  pill: "9999px (navbar, connect-wallet button)"
  card: "16px (rounded-2xl — liquid glass card)"
components:
  liquid-glass: "Signature surface. rgba(7,11,10,0.5) scrim + 4px backdrop-blur + inset top highlight + masked gradient ::before border. Used on navbar (overridden to bg-ink/25) and the 200×200 hero card."
  pixel-blast: "Full-bleed WebGL canvas using three + postprocessing. Bayer-dithered FBM noise field rendered in the mint accent, drifting continuously and emitting outward ring ripples from every pointerdown (10 click slots)."
  liquid-glass-card: "200×200 floating tile translated up 50px, three vertical children: `[ 2026 ]` date tag, headline with italic serif `Industry`, and an 11px white/55 description."
  animate-fade-up: "The sole motion primitive — 0.9s cubic-bezier(0.16, 1, 0.3, 1), opacity 0→1 + translateY 24px→0, applied to all five hero children simultaneously."
---

# Apos — Omnichain Swap Bridge Hero

> Fivefold showcase. Pairs with the Apos prompt. Use this file to keep Apos's restraint when you extend the system — it should always read as a single-screen liquid-glass marquee, never a multi-section dApp landing.

## Overview

Apos is **a single-screen hero for an omnichain swap bridge that routes any asset across 40+ blockchains in seconds.** The canvas is ink black. The accent is one mint green. The background is a WebGL Bayer-dithered pixel field that drifts on its own and answers every click with a ring ripple. Above it floats a glass pill navbar and a glass tile, both built from the same `.liquid-glass` recipe. There are no other sections, no CTA buttons, no gradients, no neon — the entire visual playbook of "DeFi landing page" has been refused.

The governing decision: **one screen, one accent, one ripple.** Most cross-chain protocols stack a hero, a stats strip, a partner wall, a "how it works" diagram, three feature cards, an audit badge row, and a CTA fold — and end up looking like every other bridge. Apos compresses the entire identity into a single viewport: ink background, mint period, one italic serif word. The marquee effect isn't a hero video or a 3D globe; it's a WebGL pixel canvas that ripples on click, so the visitor's first input is literally what animates the brand. The bet: a confident first frame is more persuasive than five folds of explanation. Trust is implied by what is *removed*, not what is added.

The system extends by *not* extending. Every future surface — docs, app shell, governance portal — is expected to inherit the same two-color floor, the same `.liquid-glass` recipe, the same `.animate-fade-up` primitive, and the same restraint on serif accents (one word, never two). When a new section is necessary, it should look like another viewport-sized Apos hero, not a stitched-on subpage with its own palette, motion stack, or grid. Consistency is enforced by subtraction.

**Key Characteristics:**
- **Ink-only floor** ({colors.ink} — `#070b0a`) — the single dark background painting body, App root, the `.liquid-glass` scrim, and the navbar's `bg-ink/25` override.
- **Mint-only accent** ({colors.mint} — `#5ed29c`) — used for the eyebrow, the trailing period of the headline, the date tag, the italic serif `Industry`, link hover, the WebGL pixel color, the radial glow stops, and the favicon glyph.
- **White-with-opacity ramp** for everything else — pure white reserved for the wordmark, headline, and stat values; opacities `10 / 15 / 20 / 40 / 50 / 55 / 70 / 80` handle hairlines, descriptions, labels, grid lines.
- **Three families, three roles** — Inter for everything readable, Plus Jakarta Sans for two uppercase labels, Instrument Serif italic for the single word `Industry`.
- **Liquid-glass surface** — one CSS recipe (`rgba(7,11,10,0.5)` scrim + 4px backdrop blur + inset top highlight + masked-gradient `::before` border), reused on the navbar pill and the 200×200 hero card.
- **WebGL pixel field** — `three` + `postprocessing` render a Bayer-dithered FBM noise pattern in mint with a 10-slot click-ripple buffer. The shader *is* the imagery.
- **Single motion primitive** — `.animate-fade-up` (0.9s, high-ease cubic-bezier, no stagger). No Framer Motion, no GSAP, no scroll triggers.
- **One italic serif word** — `Industry` inside the card, set in Instrument Serif italic at 22px in mint. That is the entire decorative budget for the page.

## Colors

> **Source pages analyzed:** the single-screen Apos hero (App root + Navbar + Hero + LiquidGlassCard + Background). No other surfaces exist in this build.

Two brand tokens plus a white-with-opacity ramp. The smallness is the point — there are no CSS variables; the palette lives directly in `tailwind.config.js`.

### Brand & Accent
- **Mint** ({colors.mint} — `#5ed29c`): The *only* colored accent in the build. It paints the eyebrow text, the trailing period of the headline, the card date tag `[ 2026 ]`, the italic serif word `Industry`, link hover state, the WebGL pixel color (`color="#5ed29c"` prop on `PixelBlast`), the radial glow's inner stop, and the favicon glyph. Contrast is always opacity + scale + this single hue — never a second color.

### Surface
- **Ink** ({colors.ink} — `#070b0a`): Global background and App root, body `background-color`, the `.liquid-glass` scrim base (at 50% alpha), and the text-on-mint button color inside the mobile overlay's Connect Wallet pill. Slightly green-shifted near-black so it sits cleanly under the mint pixel field without reading as pure jet.
- **Ink at 25%** (`bg-ink/25`): The navbar pill override — lighter scrim than the card's 50%, so the pill reads as a hairline-bordered floating surface rather than a solid bar.
- **Ink at 98%** (`bg-ink/98`): The mobile menu overlay fill, paired with `backdrop-blur-md` so the underlying canvas continues to drift faintly behind the link list.

### Text
- **White** ({colors.white} — `#ffffff`): Reserved for the logo wordmark, the hero headline (excluding its mint period), and the stat values. Default body text color set on `<body>`.
- **White at 80%** (`text-white/80`): Nav links in their default state.
- **White at 70%** (`text-white/70`): The hero description — long-form body copy.
- **White at 55%** (`text-white/55`): The card description (`Battle-tested smart contracts secured across every supported chain.`).
- **White at 50%** (`text-white/50`): Stat labels (`Chains connected / Volume bridged / Avg. settlement`).

### Hairlines & Borders
- **White at 15%** (`border-white/15`): The Connect Wallet button border in its default state.
- **White at 10%** (`bg-white/10`, `border-white/10`): The three vertical grid lines (`lg:` only) and the mobile overlay's link-list dividers.
- **Masked gradient border** (`rgba(255,255,255,0.6)` → `rgba(255,255,255,0.05)`): The 1.4px gradient drawn through the `.liquid-glass::before` mask — used on both the navbar pill and the 200×200 card.

### Brand Gradient (decorative)
- **Mint glow stops** (`#5ed29c` → `#0f6e5a` → `#070b0a`): The single radial SVG glow sitting behind the wordmark area, blurred at `stdDeviation="25"`. The middle stop `#0f6e5a` exists only as a transitional value inside this one filter — it is not a token, never used in text or chrome.

**Constraint** (verbatim from prompt): mint is the only colored accent. Forbidden everywhere: purple, indigo, blue, cyan-as-primary, neon green, orange, red, yellow.

## Typography

### Font Family
- **Inter** — body, headline, nav, wordmark, stats. Stack: `'Inter', system-ui, sans-serif`.
- **Plus Jakarta Sans** — eyebrow + card date tag only. Stack: `'"Plus Jakarta Sans"', system-ui, sans-serif`.
- **Instrument Serif** (italic only) — the single word `Industry` inside the card. Stack: `'"Instrument Serif"', Georgia, serif`.
- Loaded via a single Google Fonts stylesheet with `preconnect`. Tailwind exposes them as `font-inter`, `font-jakarta`, `font-serif`.
- OpenType features inherit Inter's defaults — no contextual alternates, no tabular numerals are explicitly enabled. The stat row uses Inter 800 at 24px, which already reads as evenly-spaced without `font-feature-settings`.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `display.hero` | 40 → 60 → 72 px | 800 Inter | 1.02 | tracking-tight | Hero headline (mobile → sm → lg breakpoints, no clamp) |
| `display.card-headline` | 18 px | 600 Inter | snug | normal | Card line `Audited by … security firms` |
| `display.card-accent` | 22 px | italic Instrument Serif | snug | normal | The single word `Industry` inside the card |
| `label.eyebrow` | 11 px | 700 Plus Jakarta | 1 | 0.25em | Mint eyebrow `Omnichain Liquidity Protocol` |
| `label.date-tag` | 14 px | 500 Plus Jakarta | 1 | widest | Card date `[ 2026 ]` |
| `body.description-hero` | 14 px (text-sm) | 400 Inter | relaxed | normal | Hero 38-word description, capped at `maxWidth.prose` 512px |
| `body.description-card` | 11 px | 400 Inter | relaxed | normal | Card sub-line at `text-white/55` |
| `data.stat-value` | 24 px (text-2xl) | 800 Inter | 1 | normal | `40+ / $2.4B / <8s` |
| `data.stat-label` | 12 px (text-xs) | 400 Inter | 1 | tracking-wide, uppercase | Sub-label under each stat at `text-white/50` |
| `nav.link` | 16 px (text-base) | 500 Inter | 1 | normal | Desktop nav `SWAP / BRIDGE / DOCS / DAO` at `text-white/80` |
| `nav.cta` | 14 px (text-sm) | 600 Inter | 1 | normal | Connect Wallet pill text |
| `nav.wordmark` | 18 px (text-lg) | 800 Inter | 1 | tracking-tight | Logo wordmark `Apos` |

### Principles
- **Three families, three jobs.** Never use Plus Jakarta for body copy. Never use Inter for the italic accent. Never introduce a fourth family.
- **Italic is structural, not decorative.** Italic appears exactly once — on the word `Industry`. No other italic anywhere in the build.
- **Tracking belongs to labels, not text.** Only `label.eyebrow` (`0.25em`) and `label.date-tag` (`widest`) carry wide tracking. Body and headline use `normal` or `tracking-tight`.
- **Discrete sizes, no clamp.** The headline steps at three breakpoints (40 / 60 / 72) rather than fluid-scaling. Discrete sizes hold their proportions against the pixel field.
- **Weight 500 deliberately absent from the headline.** Display weight is 800 (extrabold). Body is 400. Nav is 500. The headline never softens to 600.
- **Period is its own span.** The trailing `.` of `Swap across every chain.` is `<span className="text-mint">.</span>`. It is the only mint character in the headline and is non-negotiable.
- **Weight-clamping rule.** If a requested Inter weight isn't loaded, clamp to the nearest loaded weight rather than synthesizing.

### Note on Font Substitutes
When `Inter` is unavailable, fall back to `system-ui` and reduce headline weight from 800 to 700 to avoid the synthetic-bold look of macOS San Francisco at extrabold. When `Instrument Serif` is unavailable, fall back to `Georgia italic` and bump the `Industry` size from 22px to 24px to compensate for Georgia's tighter italic. `Plus Jakarta Sans` is the easiest to substitute — any clean geometric sans (`Manrope`, `system-ui`) preserves the wide-tracking effect once `0.25em` is applied.

## Layout

### Spacing System
- **Base unit:** Tailwind 3 default 4px scale (`1 = 4px`, `2 = 8px`, `4 = 16px`, `6 = 24px`, `10 = 40px`, `14 = 56px`, `20 = 80px`, `40 = 160px`).
- **Card padding:** `p-5` (20px) inside the 200×200 liquid-glass tile — the only card padding token in the build.
- **Hero rhythm:** `pt-40 pb-20` (160px top / 80px bottom) — generous top to clear the floating navbar, smaller bottom because the section is single-screen `min-h-screen`.
- **Navbar rhythm:** outer header `px-4 pt-4 sm:px-6 sm:pt-6`; inner pill `px-5 py-3.5 sm:px-7 lg:px-8`.
- **Stat row gaps:** `gap-x-10 gap-y-4` (40px horizontal, 16px vertical when wrapped).
- **Card lift:** `-translate-y-[50px]` — the only off-grid translation in the build, used solely by the card.
- **Prose cap:** `maxWidth.prose = '512px'`, applied to the hero description only.

### Grid & Container
- **Hero container:** `max-w-7xl` (1280px) centered, with `px-6 lg:px-10`.
- **Hero text column:** `max-w-2xl` (672px) — confines text to the left two-thirds, leaving the right side as visible pixel field.
- **Navbar container:** `max-w-7xl` centered, full-bleed within the header padding.
- **Vertical grid lines:** thin white/10 verticals at `25% / 50% / 75%` of the viewport, `hidden lg:block` only — desktop scaffolding the user can sense but not consciously read.
- **No columns.** The build has no multi-column grid — the stat row is `flex flex-wrap`, the card is a `flex flex-col`, everything else is a single vertical stack.

### Whitespace Philosophy
Apos treats empty space as the marquee. The hero is single-viewport, so every block of negative space is visible at once — the right two-thirds of the column, the area under the stats, the headroom above the navbar. The pixel field fills the void without crowding it; ripples reward attention to the empty zones rather than dragging the eye toward content. The result is the opposite of a stats-stuffed DeFi fold: the page argues that the most important thing on screen is the air, and the air is the brand.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Hero text column, stat row, eyebrow, body — everything except chrome and the card |
| Soft hairline | 1.4px masked gradient via `.liquid-glass::before` (`rgba(255,255,255,0.6) → rgba(255,255,255,0.05)`) + `border-white/15` on the Connect Wallet button | Navbar pill, 200×200 card, button outline |
| Backdrop blur | `backdrop-filter: blur(4px)` on `.liquid-glass`; `backdrop-blur-md` on the mobile overlay | Glass surfaces only — never on plain dark surfaces |
| Inset highlight | `box-shadow: inset 0 1px 1px rgba(255,255,255,0.1)` on `.liquid-glass` | The top edge of every glass surface, simulating refracted light |

**Shadow philosophy.** Apos uses no drop shadow. Depth is purely additive — a top highlight, a 1.4px gradient border, and a 4px backdrop blur. The reasoning: drop shadows imply objects floating over a *page*, but there is no page here — the canvas is a continuous field. A glass tile sits *in* the field, not *above* it, so depth has to come from light bouncing off the tile's edge, not from a shadow underneath.

**Decorative Depth:**
- **Central radial glow** — a single SVG ellipse (`#5ed29c → #0f6e5a → #070b0a`) blurred at `stdDeviation="25"`, positioned `top-[-12%] h-[55%]`, dimensions `w-[120%] sm:w-[80%]`. Decorative only, `aria-hidden`.
- **Two readability gradients** — `bg-gradient-to-r from-ink via-ink/40 to-transparent` and `bg-gradient-to-t from-ink via-ink/20 to-transparent`. They darken the left edge and bottom so the headline stays AAA over the pixel field.
- **Three grid lines** — `bg-white/10`, 1px wide, full viewport height, at `left-1/4 / left-1/2 / left-3/4`, `lg:` only.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `radius.none` | 0 | Grid lines, glow SVG, the pixel canvas itself |
| `radius.card` | 16px (`rounded-2xl`) | The 200×200 liquid-glass card |
| `radius.pill` | 9999px (`rounded-full`) | Navbar pill, Connect Wallet button, mobile-overlay Connect Wallet button |

No `xs`, `sm`, `md`, or `lg` exist in this build — only `none / card / pill`. The radius vocabulary is intentionally tiny: things are either sharp lines (chrome scaffolding), one card with the same radius as the navbar's children, or fully pill. There is no in-between radius scale to manage.

### Photography Geometry
- **No photography.** No people, no chain logos, no marketing imagery, no product screenshots.
- The entire visual centerpiece is the WebGL `PixelBlast` canvas in mint over ink — the imagery *is* the shader.
- **Canvas aspect** — full-bleed `100% / 100%` of the hero viewport. The canvas resizes via a `ResizeObserver` on its container.
- **Glow aspect** — the radial SVG uses `viewBox="0 0 800 400"` with `preserveAspectRatio="xMidYMid slice"`, sized `h-[55%] w-[120%] sm:w-[80%]`, centered by `left-1/2 -translate-x-1/2`.
- **Loading strategy** — the canvas mounts on first paint; there is no skeleton because the underlying `bg-ink` already matches the canvas's transparent base. Three.js initializes inside the `useEffect`, so the page is interactive before the shader compiles.

## Components

### Top Navigation

#### Floating glass-pill navbar — `{component.navbar}`
- **Default state.** `<header className="absolute inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6">` wrapping `<nav className="liquid-glass mx-auto flex max-w-7xl items-center justify-between rounded-full bg-ink/25 px-5 py-3.5 sm:px-7 lg:px-8">`. The pill uses {colors.ink}-at-25% as a lighter scrim than the card's 50%, while the `.liquid-glass` blur + gradient border carry through. Three flex slots: logo + wordmark left, four uppercase links centered (`hidden md:flex`), Connect Wallet right (`hidden md:inline-block`).
- **Focus state.** Each nav link inherits the default browser focus ring (no custom outline override). Connect Wallet relies on its `border-white/15` shifting to `border-mint` via `transition-colors duration-200`. Focusable order: logo → SWAP → BRIDGE → DOCS → DAO → Connect Wallet → hamburger.

### Buttons

#### Connect Wallet (desktop) — `{component.button-primary}`
- **Default state.** `<a className="hidden rounded-full border border-white/15 px-5 py-2 font-inter text-sm font-semibold text-white transition-colors duration-200 hover:border-mint hover:text-mint md:inline-block">Connect Wallet</a>`. Outline-only pill, `radius.pill`, 14px Inter 600, padding `px-5 py-2`, border `border-white/15`.
- **Active state.** While `:active`, the browser default press feedback is retained; no transform, no scale change.
- **Focus state.** Default focus ring; `transition-colors duration-200` makes the focus indicator feel coherent with hover.

#### Connect Wallet (mobile overlay) — `{component.button-secondary}`
- **Default state.** `<a className="block rounded-full bg-mint px-6 py-4 text-center font-inter font-bold uppercase tracking-wide text-ink">Connect Wallet</a>`. The only filled button in the build — solid `{colors.mint}` background, `{colors.ink}` text. Lives only inside the mobile overlay, never on the desktop chrome.
- **Active state.** Inherits browser default press feedback.
- **Focus state.** Default ring against the high-contrast mint fill makes the focus visible without a custom outline.

#### Hamburger trigger — `{component.button-utility}`
- **Default state.** `<button className="text-white md:hidden" aria-label="Open menu"><Menu size={26} /></button>`. Plain white `Menu` icon from lucide-react at 26px. No background, no border, no padding token — relies on the navbar's own padding for hit area.
- **Active state.** Tapping opens the overlay; no visual transform on the button itself.
- **Focus state.** Default browser outline on the `<button>` element.

### Cards & Containers

#### Liquid-glass card — `{component.card-glass-tile}`
- **Default state.** `<div className="liquid-glass flex h-[200px] w-[200px] flex-col justify-between rounded-2xl p-5">`. Fixed 200×200, `radius.card` (16px), 20px padding, flex column with `justify-between` so the three children push to top / center / bottom. Surface uses the unmodified `.liquid-glass` recipe (50% ink scrim, 4px blur, inset highlight, gradient border). Wrapped by `<div className="-translate-y-[50px]">` to lift it 50px out of normal flow.
- **Active state.** Not interactive — no press behavior.
- **Focus state.** Not focusable.

#### Mobile-menu overlay — `{component.card-overlay}`
- **Default state.** `<div className={`fixed inset-0 z-50 bg-ink/98 backdrop-blur-md transition-opacity duration-300 md:hidden ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}>`. A full-screen scrim using `bg-ink/98` + `backdrop-blur-md`. Toggles via opacity only — no slide transform.
- **Active state.** While `open === true`, `pointer-events-auto opacity-100`.
- **Focus state.** Each link inside the list inherits default focus; the close `<X />` button is the first natural tab stop after open.

#### Trust-stats row — `{component.card-data-row}`
- **Default state.** `<div className="animate-fade-up mt-14 flex flex-wrap gap-x-10 gap-y-4">` with three child items. Each item: 24px Inter 800 value over a 12px uppercase tracking-wide white/50 label. No card chrome — the row is "flat" elevation; the data carries itself.
- **Active state.** Not interactive.
- **Focus state.** Not focusable.

### Inputs & Forms

#### Inputs
- **Not surfaced in this build.** Apos's hero has no form fields — Connect Wallet is the only call to action and it is a link, not an input. Inputs are deferred to the app shell beyond this hero.

### Footer

#### Footer
- **Intentionally absent.** The prompt explicitly forbids a footer in the hero. The single-screen rule means no closing chrome — the page ends where the viewport ends.

## Do's and Don'ts

### Do
- **Use** {colors.mint} for *exactly* the eight roles listed in the Brand & Accent section. Adding a ninth role requires re-justifying the brand.
- **Use** the `.liquid-glass` class verbatim on any new floating surface — never recreate the recipe with different alpha, blur radius, or border treatment.
- **Apply** `.animate-fade-up` only to hero children that mount with the page; never to chrome (navbar, glow, grid lines).
- **Set** the trailing period of any headline as its own `<span className="text-mint">.</span>` so the mint dot rule scales when copy changes.
- **Keep** Instrument Serif italic to a single word per surface. If a future section needs another italic accent, the existing one moves — there is never two.
- **Reserve** `bg-ink/25` for the navbar and `bg-ink/50` (default `.liquid-glass`) for the card. New surfaces must pick one of these two scrims, not a custom value.
- **Use** the `pointer-events-none` content wrapper in the hero so clicks fall through to the canvas; opt interactive elements back in with `pointer-events-auto`.
- **Set** the `PixelBlast` `color` prop to {colors.mint} verbatim — never to a lighter or darker mint, never to a second hue.
- **Use** discrete Tailwind breakpoint sizes for the headline (`text-[40px] sm:text-6xl lg:text-[72px]`) rather than `clamp()`.

### Don't
- **Don't** introduce a second accent color — not even for a "secondary" CTA, error state, or chart. The build has no chart, no error, no secondary CTA.
- **Don't** add a drop shadow to any surface. Depth comes from `.liquid-glass::before`, the inset highlight, and the radial glow — nothing else.
- **Don't** apply `.animate-fade-up` to the navbar or grid lines; chrome stays static.
- **Don't** wrap `Industry` (or its replacement) in anything other than `font-serif italic text-mint text-[22px]`.
- **Don't** import a third icon from lucide-react. Only `Menu` and `X` are approved.
- **Don't** stack a second hero, a feature grid, or a CTA fold beneath the existing hero. The single-viewport rule is the brand.
- **Don't** use `-z-10` on `Background` — content uses `relative z-10`, Background uses `z-0`, otherwise `bg-ink` paints over the canvas.
- **Don't** apply `pointer-events-auto` to the hero content wrapper — clicks must fall through to the canvas so ripples fire.
- **Don't** swap the WebGL canvas for a static gradient, video, or 3D globe. The `PixelBlast` shader *is* the imagery.
- **Don't** render the trailing period of the headline in white. It is always {colors.mint}.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤ 419px | Headline 40px, glow `w-[120%]`, header `px-4 pt-4`, hamburger nav, grid lines hidden, card stays 200×200 |
| Phone | 420 – 640px | Same as small phone; canvas DPR clamped at `Math.min(devicePixelRatio, 2)` |
| Large phone | 641 – 735px | Eyebrow + description begin breathing room; nav still mobile (hamburger) |
| Tablet portrait | 736 – 833px (sm:) | Header padding bumps to `px-6 pt-6`; glow narrows to `w-[80%]`; headline jumps to 60px (`sm:text-6xl`) |
| Tablet landscape | 834 – 1023px | Desktop nav reveals at `md:` (768px) — `SWAP / BRIDGE / DOCS / DAO` + Connect Wallet appear, hamburger hides |
| Small desktop | 1024 – 1068px (lg:) | Headline jumps to 72px (`lg:text-[72px]`); three vertical grid lines reveal; hero inner padding bumps to `lg:px-10` |
| Desktop | 1069 – 1440px | Same as small desktop; container caps at `max-w-7xl` so the layout stops growing past 1280px |
| Wide desktop | ≥ 1441px | Layout pinned to `max-w-7xl`; ambient margin grows on both sides, glow stays centered at 50% of viewport |

### Touch Targets
- **Minimum target** — the hamburger trigger uses a 26px icon with the navbar's `py-3.5` padding (≈54px tall hit area), comfortably above the 44px iOS / 48px Material minimum.
- **Mobile overlay links** — each link uses `py-5` (40px vertical padding) for a 70px+ tall row.
- **Connect Wallet (mobile)** — `px-6 py-4` produces a full-width 56px tall button.
- **Connect Wallet (desktop)** — `px-5 py-2` keeps the pill in proportion with `nav.link`. Cursor-only target; not optimized for touch desktops.

### Collapsing Strategy
- **Nav** — desktop menu + Connect Wallet disappear below `md:`. The hamburger opens a full-screen `fixed inset-0` overlay with opacity transition.
- **Headline** — discrete steps `40 → 60 → 72`. No fluid scaling.
- **Description** — width capped at `maxWidth.prose` (512px) regardless of viewport, so it never spans the full content column.
- **Stat row** — `flex flex-wrap` with `gap-x-10 gap-y-4`; on narrow viewports the three items wrap onto two rows automatically.
- **Card** — fixed 200×200 at every breakpoint. Never scales.
- **Glow** — `w-[120%]` mobile → `sm:w-[80%]` so it doesn't dominate on tablet+.
- **Grid lines** — `hidden lg:block`; on tablet/mobile the pixel field carries the layout alone.

### Image Behavior
- **No raster imagery, no srcset, no lazy-load.** The only "image" is the WebGL canvas; it ships as code, not as an asset.
- **Canvas DPR** — `renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))` caps the device pixel ratio at 2 to keep the shader fillrate bounded on retina displays.
- **Resize behavior** — a `ResizeObserver` on the canvas container drives `renderer.setSize` and updates `uResolution`; the shader re-fits the FBM field continuously rather than re-mounting on breakpoint change.

## Iteration Guide

1. **Extend one component at a time.** When the build grows beyond the hero, add the next surface as a self-contained component file under `src/components/` — never edit the hero to host a second concern.
2. **Variants live inside components, not in tokens.** A new card style is a prop on an existing component, not a new color or radius in `tailwind.config.js`. The token list stays at two colors and three radii.
3. **Use {colors.tokenName} references in every doc edit.** When updating this file or a sibling designMd, refer to tokens by their bracketed names so renaming `ink → night` propagates through find-and-replace.
4. **Never document hover.** Hover is implementation noise; this designMd records default, active, and focus only. New components must keep that convention.
5. **Display vs body family rule.** Inter handles headline and body. Plus Jakarta handles only the two existing labels. Instrument Serif handles only the single italic word. Adding a body-weight Plus Jakarta or a roman Instrument Serif breaks the rule.
6. **Shadow restriction is absolute.** Future surfaces may add the masked gradient border, but never a drop shadow. If a card needs more depth, raise its blur radius or scrim alpha — do not add a shadow.
7. **Chrome vs surface alternative.** The two scrims (`bg-ink/25` for chrome, default `.liquid-glass` 50% for surfaces) are the only two glass densities. New glass surfaces must choose one — they cannot introduce a third alpha.

## Known Gaps

- **No validation / error / success states** are documented because the hero has no form fields. When inputs land in the app shell, they will need their own designMd revision.
- **No light mode.** The build is dark-only via `color-scheme: dark` on `:root`. A light variant of the `.liquid-glass` recipe is not surfaced in analyzed pages.
- **No specific blur radii beyond `4px` and `backdrop-blur-md`.** The Tailwind `md` blur token resolves to the framework default; no custom blur scale is defined.
- **Loading skeleton, error boundary, and offline state** for the WebGL canvas are not documented. The current build trusts the `useEffect` mount and assumes WebGL is available.
- **Dynamic content** (i18n, longer stat values, RTL layout) is not documented. The 40-character description and the three-item stat row are hard-coded; the wrap behavior at extreme content lengths has not been audited.
- **Iconography beyond `Menu` and `X`.** Future sections needing icons (Discord, GitHub, status indicators) have no approved set yet — those choices are deferred.
