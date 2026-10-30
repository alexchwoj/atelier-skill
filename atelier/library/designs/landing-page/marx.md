---
version: "1"
name: "Design System Inspired by MarX"
description: "MarX's global background is near-black #07060A and the default text is warm bone #F6EFE6 — never pure white. The Mars palette is rationed: ember #FF3B2E and plasma #FF9A4D carry every accent, with cosmic violet #8B5CF6 and signal cyan #38E1D6 held to a few touches. The signature surface is a fixed, scroll-scrubbed background video (deep space → planet → surface) read through a luminance-aware scrim and a glassmorphism card system; Orbitron sets every display mark over a Sora body, and the page rhythm is a long cinematic L1 landing of glass cards rising on scroll."
colors:
  void: "#07060A"            # global page background — near-black, the body bg + scrollbar track
  bone: "#F6EFE6"            # warm bone white — text base (set on body); also Mars polar cap
  ember: "#FF3B2E"           # primary Mars accent — dot glow, gradient anchor, kicker rule, $MARX chips
  plasma: "#FF9A4D"          # warm secondary — kickers, icon chips, scrollbar thumb, ink-gradient start
  cosmic: "#8B5CF6"          # cosmic violet — ambient hover glow + ink-gradient terminus only
  signal: "#38E1D6"          # signal cyan — rationed to one distribution-bar segment
  text-body: "rgba(255,255,255,0.70)"   # body copy — white/70, never pure-white
  text-caption: "rgba(255,255,255,0.55)" # captions / stat labels — white/55
  glass-fill: "rgba(0,0,0,0.22)"         # .glass surface fill
  glass-strong-fill: "rgba(0,0,0,0.34)"  # .glass-strong surface fill
  hairline: "rgba(255,255,255,0.10)"     # glass border + divider hairline
typography:
  display: { fontFamily: "Orbitron, sans-serif", weights: "400-900", role: "wordmark, all headings, stat numerals, step indices, $MARX symbol, roadmap phase labels — via .font-orbitron" }
  body:    { fontFamily: "Sora, sans-serif", weights: "300-700", role: "everything else — subheads, body copy, nav links, buttons, captions; set on body" }
spacing:
  base: "4px"
  pad-x: "16px / 40px / 48px"  # px-4 sm:px-10 lg:px-12 — global side rail
  card-pad: "24px / 28px"      # p-6 sm:p-7 on glass cards (p-8 / p-12 on large panels)
  gap: "16px / 20px"           # gap-4 sm:gap-5 — grid gutter
  head-gap: "16px"             # mt-4 between kicker / heading / subheading
  section-y: "80px / 112px"    # py-20 sm:py-28 — section rhythm
  body-max: "1280px"           # max-w-7xl content cap
rounded:
  xl: "12px"      # rounded-xl — icon chips, mobile toggle
  card2: "16px"   # rounded-2xl — brand pill, glass cards, quick-link cards
  card3: "24px"   # rounded-3xl — stats band, tokenomics panels, footer shell
  panel: "32px"   # rounded-[2rem] — CTA glass panel
  full: "9999px"  # rounded-full — nav pill, email field, feature pills, scrollbar thumb, dots
components:
  glass: "Card surface — bg {colors.glass-fill}, backdrop-blur 14px, 1px {colors.hairline} border; the default floating panel"
  glass-strong: "Heavier glass — bg {colors.glass-strong-fill}, backdrop-blur 22px, 1px rgba(255,255,255,0.12) border; stats band, hero form, CTA, mobile menu"
  bg-scrim: "Fixed radial + vertical scrim over the video — keeps text legible WITHOUT flattening it to a dull plate"
  ink-gradient: "Clipped text gradient linear(100deg) {colors.plasma} 0% → {colors.ember} 45% → {colors.cosmic} 100% — stat numerals, step indices, $MARX symbol"
  kicker: "Section eyebrow — 12-14px uppercase, 0.22em tracking, {colors.plasma}/90, preceded by an 8px ember→transparent rule"
  icon-chip: "44px square, rounded-xl, bg-white/5, 1px white/10 border, {colors.plasma} lucide glyph at strokeWidth 1.6"
  btn-white: "The CTA — bg white, text gray-900, Sora medium, rounded-full, hover bg-white/90, active:scale-[0.98]"
  ember-dot: "8px ember dot with a 0_0_12px_3px rgba(255,59,46,0.7) glow — the hero eyebrow pip"
  reveal: "IntersectionObserver enter — opacity+translateY(26px) over 0.8s cubic-bezier(0.22,1,0.36,1), (i%cols)*90ms stagger, 1200ms failsafe"
  rise: "CSS keyframe entrance for above-the-fold — 0.9s cubic-bezier(0.22,1,0.36,1), ends fully visible"
  logo: "Inline SVG Mars globe — radial body, polar ice cap, surface maria, specular highlight, limb shadow; useId() unique gradients"
---

# Design System Inspired by MarX

## Overview

MarX is a dark, cinematic landing for a Cosmos-SDK Layer-1 blockchain, and its canvas is the darkest surface in this collection — `{colors.void}` #07060A, a near-black set globally on `body` and reused as the scrollbar track. Onto that void sits warm bone type `{colors.bone}` #F6EFE6, declared once on `body` so the page never defaults to pure white. Body copy actually renders at `{colors.text-body}` (`text-white/70`) and captions at `{colors.text-caption}` (`text-white/55`), so even the "white" text is a softened bone-white reading off a black field rather than a clinical #FFFFFF.

The accent system is a strict Mars rationing. **Ember** `{colors.ember}` #FF3B2E and **plasma** `{colors.plasma}` #FF9A4D do almost all the chromatic work — the hero eyebrow pip, the kicker rules and labels, icon chips, the scrollbar thumb, and the anchor stops of the ink gradient. **Cosmic violet** `{colors.cosmic}` #8B5CF6 appears only as the terminus of the ink gradient and as a faint hover bloom behind ecosystem cards; **signal cyan** `{colors.signal}` #38E1D6 is held to a single segment of the tokenomics distribution bar. **Most L1 / crypto sites default to purple-indigo gradients and neon-green "blockchain" glow — MarX refuses that palette, holding Mars ember + plasma against a near-black monochrome field, with cosmic violet and signal cyan rationed to a few touches.** The governing decision is heat-against-void, not the crypto-default cool spectrum.

The signature surface is a **fixed, full-viewport `<video>` that scrubs forward as the page scrolls** — the top of the page maps to `t=0` and the bottom to the final frame, so scrolling the whole page plays the entire clip once (deep space → planet → surface). It is not a looping autoplay hero and not parallax: the page owns the timeline, easing toward the scroll target with inertia and committing one seek at a time. Above the video, `{components.bg-scrim}` — a radial plus vertical gradient blend — keeps text legible without flattening the footage to a dull dark plate. Over both float **glassmorphism** panels: `{components.glass}` (`rgba(0,0,0,0.22)` + `blur(14px)`) and `{components.glass-strong}` (`rgba(0,0,0,0.34)` + `blur(22px)`).

Type is a two-voice split. **Orbitron** (a heavy geometric display face, weights 400–900) carries every display mark — the wordmark, all headings, stat numerals, step indices, the `$MARX` symbol, roadmap phase labels — applied only through the `.font-orbitron` class. **Sora** (300–700) is set on `body` and carries everything else: subheads, body copy, nav links, buttons, captions. Orbitron never sets body copy.

The page rhythm is a **long cinematic L1 landing**: Nav (fixed glass) → Hero → an overlapping StatsBand → Thesis → Protocol → Ecosystem → Tokenomics → Roadmap → CTA → Footer. Below the fold, every card and header is a `{components.reveal}` that rises and fades in on scroll behind an IntersectionObserver, with a 1200 ms failsafe so content is never stuck hidden; above the fold the Hero uses a CSS-only `{components.rise}` keyframe so it can never get caught off-screen if JS fails.

**Key Characteristics:**
- **Near-black void canvas** — `{colors.void}` #07060A is the global `body` background and scrollbar track; there is no light mode and no page-background gradient.
- **Bone white, never pure white** — `{colors.bone}` #F6EFE6 is the text base; body copy renders `text-white/70`, captions `text-white/55` — `#FFFFFF` appears only on hard CTAs and `::selection`.
- **Rationed Mars palette** — ember `{colors.ember}` + plasma `{colors.plasma}` do the accent work; cosmic `{colors.cosmic}` and signal `{colors.signal}` are held to a hover glow, the ink-gradient terminus, and one distribution segment.
- **Orbitron display + Sora body** — Orbitron via `.font-orbitron` on wordmark, headings, numerals, `$MARX`; Sora on `body` for everything else. No third face.
- **Glass system** — `{components.glass}` (blur 14) and `{components.glass-strong}` (blur 22) over a fixed video; 1px white-hairline borders, no drop shadows on cards.
- **Scroll-scrubbed fixed video** is the centerpiece motion (deep space → planet → surface), read through `{components.bg-scrim}`; no parallax, no typewriter, no number counters.
- **Ink-gradient text** — `{components.ink-gradient}` (plasma → ember → cosmic) clips onto stat numerals, step indices, and the `$MARX` symbol only.
- **Fail-safe reveals** — `{components.rise}` (CSS, above the fold) and `{components.reveal}` (IntersectionObserver + 1200 ms failsafe, below) both end fully visible.
- **Inline Mars-globe logo** — a self-contained SVG sphere with `useId()` unique gradients; no raster or stock mark.
- No animation library, no light mode, no page-bg gradient, no pure-white body text, no emoji, no `bg-blue-500`-style defaults.

## Colors

> Source pages: the single live MarX landing — fixed scroll-scrubbed video + scrim, glass Nav, Hero with email capture, overlapping StatsBand, the Thesis / Protocol / Ecosystem sections, Tokenomics, Roadmap, CTA band, and Footer. Tokens are read from `tailwind.config.js` (`ember`/`plasma`/`cosmic`/`signal`/`bone`) and `index.css`.

### Brand & Accent
- **Ember** ({colors.ember}): The primary Mars accent (#FF3B2E) — the glowing hero eyebrow dot (with a `0_0_12px_3px rgba(255,59,46,0.7)` halo), the `from-ember to-transparent` kicker rule before every section label, the roadmap `Dot` bullets, the utility-list `Check` chip (`bg-ember/15` + `border-ember/30` + `text-ember`), the CTA ambient glow (`bg-ember/20 blur-[100px]`), the middle stop of the ink gradient, and `::selection` (`rgba(255,59,46,0.35)`).
- **Plasma** ({colors.plasma}): The warm secondary (#FF9A4D) — kicker labels at `text-plasma/90`, every icon-chip glyph (`text-plasma`), the roadmap timeframe `Circle`, the scrollbar thumb (`rgba(255,154,77,0.35)`, hover `0.55`), and the opening stop of the ink gradient.
- **Cosmic violet** ({colors.cosmic}): #8B5CF6 — rationed to two roles: the terminus of `{components.ink-gradient}` (100%) and the ambient hover bloom behind ecosystem cards (`bg-cosmic/10 blur-2xl`, `opacity-0 group-hover:opacity-100`). Never a headline, fill, or border.
- **Signal cyan** ({colors.signal}): #38E1D6 — the most rationed color: a single segment of the tokenomics distribution bar (`BAR_COLORS[3]`). Nowhere else on the page.

### Surface
- **Void** ({colors.void}): The global page background (#07060A), set on `body`, behind the fixed video; also the scrollbar track. There is no surface ladder of opaque panels — depth is carried by translucent glass, not by stepped solid surfaces.
- **Glass** ({components.glass}): `{colors.glass-fill}` `rgba(0,0,0,0.22)` with `backdrop-filter: blur(14px)` and a 1px `{colors.hairline}` border — the default floating card.
- **Glass-strong** ({components.glass-strong}): `{colors.glass-strong-fill}` `rgba(0,0,0,0.34)` with `blur(22px)` and a 1px `rgba(255,255,255,0.12)` border — the heavier panels (stats band, hero email form, CTA panel, mobile menu).
- **Scrim** ({components.bg-scrim}): a fixed `z-1` overlay over the video — `radial-gradient(120% 80% at 50% 0%, ...0 → 0.35)` plus `linear-gradient(180deg, 0.25 → 0.05 → 0.45 → 0.8)` in `rgba(7,6,10,...)`. Darkens the top and bottom for legibility while leaving the planet mid-frame lit.

### Text
- **Bone** ({colors.bone}): The text base (#F6EFE6), declared on `body` so nothing defaults to white; a warm off-white that sits in the Mars family. Headings render as `text-white` over it; the Mars-globe polar cap reuses this exact hex.
- **Body** ({colors.text-body}): Long-form copy at `text-white/70` (subheadings at `/65`, card descriptions at `/60`) — a softened bone-white, never `#FFFFFF`.
- **Caption** ({colors.text-caption}): Stat labels, footer descriptor, fine print at `text-white/55` (some footer/legal at `/45`). The quiet bottom of the text ladder.

### Semantic
None on this marketing surface — no success / error / warning system. The only state colors are interaction tints: ember on the utility `Check` chips (affirmative-by-association, not a semantic success token), hover border brightening to `white/25`, and `active:scale-[0.98]` on buttons. The `::selection` rule paints ember-on-white. Form validation would have to be introduced for a real signup flow (see Known Gaps).

## Typography

### Font Family

- **Orbitron** — the display / brand face; fallback stack `Orbitron, sans-serif`, loaded from Google Fonts at weights 400;500;600;700;800;900. A heavy geometric, wide-set display type that gives the headings their sci-fi mass. Applied **only** through the `.font-orbitron` class (also declared as a literal CSS rule), on: the wordmark, every `<h1>`/`<h2>`/`<h3>` heading mark, stat numerals, step indices, the `$MARX` symbol, and the roadmap phase labels. It never sets body copy.
- **Sora** — the body / UI face; fallback `Sora, sans-serif`, weights 300;400;500;600;700, set on `body` so it is the default everywhere. Carries subheadings, body copy, nav links, button labels, captions, kickers, and form text. A clean humanist sans that reads quietly under the loud Orbitron heads.

The two voices stay apart by role: Orbitron is the structural display protagonist (it carries the mass and the numerals), Sora is the narrator (it carries the words). That contrast — geometric display over humanist body — is the typographic system.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display}` (h1 hero) | clamp via 2.1rem → sm 3.5rem → md 4.5rem → lg 5.5rem | 400–500 | 1.04 | tracking-tight | Hero headline (Orbitron) |
| `{typography.display}` (h2 section) | 2rem → sm 2.75rem → lg 3.25rem | 400–500 | 1.08 | tracking-tight | Section headings (Orbitron) |
| `{typography.display}` (h2 CTA) | 2.2rem → sm 3.25rem → lg 3.75rem | 400–500 | 1.05 | tracking-tight | CTA headline (Orbitron) |
| `{typography.display}` (stat) | 3xl → sm 4xl → lg 5xl | 500–600 | none (1.0) | 0 | Stat numerals, step indices (Orbitron, ink-gradient) |
| `{typography.display}` (wordmark) | base → sm xl | 500 | normal | tracking-wide | `MarX` wordmark (Orbitron) |
| `{typography.body}` (subhead) | sm → md/lg | 400 | relaxed (~1.6) | 0 | Section subheadings, hero subtitle (Sora, white/65–70) |
| `{typography.body}` (h3 card title) | lg (18px) | 500 (medium) | normal | 0 | Card / feature titles (Sora) |
| `{typography.body}` (card desc) | sm (14px) | 400 | relaxed | 0 | Card descriptions (Sora, white/60) |
| `{typography.body}` (nav / button) | sm (14px) | 400–500 | normal | 0 | Nav links, CTA labels (Sora) |
| `{components.kicker}` | xs → sm (12–14px) | 400 | normal | 0.22em (uppercase) | Section eyebrow (Sora, plasma/90) |
| `{typography.body}` (caption) | xs (12px) | 400 | normal | tracking-wide / 0.18em | Stat labels, roadmap timeframe, fine print (Sora, white/45–55) |

### Principles

- **Orbitron is for mass and numerals, not prose.** Headings, stat values, step indices, and `$MARX` get Orbitron; the moment text becomes a sentence it switches to Sora.
- **Negative tracking on the display heads** (`tracking-tight`) tightens the wide Orbitron letterforms so big headlines stay cohesive; the kicker opens up to +0.22em uppercase as the one place tracking widens.
- **Body never reaches pure white.** The ceiling for running text is `text-white/70`; subheads `/65`, descriptions `/60`, captions `/55–/45`. White at full opacity is reserved for the CTA buttons and headings.
- **Card titles sit at Sora medium (500), 18px.** They are deliberately quiet against the Orbitron section heads so the hierarchy reads heading → card title → body without a second display tier.

### Note on Font Substitutes

MarX uses no licensed typeface. **Orbitron** and **Sora** are both open-licensed on Google Fonts — load them directly from the `fonts.googleapis.com` `css2` URL (with `preconnect`), no substitution required. If Orbitron is ever unavailable, the documented fallback is the generic `sans-serif`, but a wide geometric display face (not a neutral grotesque) is required to keep the sci-fi mass — do not substitute a humanist sans for the heads. Sora's fallback is likewise `sans-serif`. Do not introduce a third family; the two-voice split is the system.

## Layout

### Spacing System

- **Base unit**: 4px (Tailwind scale).
- **Side rail**: `{spacing.pad-x}` — `px-4 sm:px-10 lg:px-12` (16 / 40 / 48px) on the header, every section, and the footer; the global horizontal rail.
- **Section rhythm**: `{spacing.section-y}` — `py-20 sm:py-28` (80 / 112px) on content sections, each with `scroll-mt-24` so anchor jumps clear the fixed nav.
- **Content cap**: `{spacing.body-max}` — `max-w-7xl mx-auto` (1280px) on section inners; headers cap narrower at `max-w-3xl`; the hero left column at `max-w-[760px]`, its subtitle at `max-w-[560px]`, its form at `max-w-[480px]`.
- **Card padding**: `{spacing.card-pad}` — `p-6 sm:p-7` (24 / 28px) on glass cards; large panels (stats, tokenomics, footer) at `p-6 sm:p-8` / `p-8 sm:p-12`; the CTA panel `p-8 sm:p-14`.
- **Grid gutter**: `{spacing.gap}` — `gap-4 sm:gap-5` (16 / 20px) between cards.
- **Header stack**: `{spacing.head-gap}` — `mt-4` between the kicker row, the heading, and the subheading.

### Grid & Container

- **App shell**: a fixed `<video>` + scrim at `z-0/1`, then a `relative z-10` content stack; the nav lives in a `fixed top-0 inset-x-0 z-40` header.
- **Hero**: `min-h-screen flex flex-col` with a leading `flex-1` spacer that pushes content to the bottom of the viewport; a `flex flex-col sm:flex-row sm:items-end` row puts the headline column left and the feature pills right.
- **StatsBand**: a `max-w-7xl` glass-strong band pulled up into the hero with `-mt-6 sm:-mt-10`; a `grid-cols-2 lg:grid-cols-4` grid with `divide-x divide-y lg:divide-y-0 divide-white/10` internal rules.
- **Section grids** collapse predictably: feature `sm:grid-cols-2 lg:grid-cols-3`, ecosystem / tokenomics `lg:grid-cols-2`, two-column `lg:grid-cols-2`, roadmap `sm:grid-cols-2 lg:grid-cols-4`, steps `lg:grid-cols-4`.
- **Footer**: a `glass rounded-3xl` shell with `lg:grid-cols-[1.4fr_repeat(3,1fr)]` — a wide brand cell plus the link columns.

### Whitespace Philosophy

Whitespace is cinematic negative space: the hero pushes its content to the lower third with a `flex-1` spacer so the planet in the video reads above it, the `py-20 sm:py-28` section rhythm gives each band room to breathe over the moving footage, and the glass cards float with generous internal padding rather than crowding. Density would fight the video — the page leaves air so the scrubbing background and the rationed accents can register.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No border, no shadow | Plain text and dividers directly on the void |
| 1 (hairline) | 1px `{colors.hairline}` rule | Grid dividers (`divide-white/10`), footer top border, glass card borders |
| 2 (glass) | `{components.glass}` — blur 14 + translucent black + hairline | Default floating cards, nav pill, footer shell |
| 3 (glass-strong) | `{components.glass-strong}` — blur 22 + heavier fill | Stats band, hero form, CTA panel, mobile menu |
| 4 (glow bloom) | Large blurred radial accent (`blur-2xl` / `blur-[100px]`) | Cosmic hover bloom on ecosystem cards; ember bloom behind the CTA |
| 5 (video) | Fixed scroll-scrubbed `<video>` + `{components.bg-scrim}` | The cinematic background plane behind everything |

MarX carries depth almost entirely through **translucency and blur**, not drop shadows — there is no `box-shadow` on cards. The only "shadows" are the ember dot's glow halo and the large blurred accent blooms. Layering the two glass tiers over the moving video, read through the scrim, is the entire depth language.

### Decorative Depth

- **The scroll-scrubbed video** is the primary decorative plane — a fixed full-viewport clip that plays deep space → planet → surface across the page scroll, read through `{components.bg-scrim}` so it never flattens to a dull plate.
- **Accent blooms** are the secondary device: a `bg-cosmic/10 blur-2xl` glow that fades in behind ecosystem cards on hover, and a `bg-ember/20 blur-[100px]` bloom behind the CTA panel.
- **No grain, no spotlight cards, no drop shadows.** The glass borders and the blur do the work; the page background is the video, never a static gradient.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xl}` | 12px (rounded-xl) | Icon chips, mobile menu toggle, quick-link chip glyph wells |
| `{rounded.card2}` | 16px (rounded-2xl) | Brand pill, all glass feature/quick-link cards, mobile menu sheet |
| `{rounded.card3}` | 24px (rounded-3xl) | Stats band, tokenomics panels, footer shell |
| `{rounded.panel}` | 32px (rounded-[2rem]) | The CTA glass panel |
| `{rounded.full}` | 9999px (rounded-full) | Nav center-link pill, feature pills, email field, social chips, allocation bar, all dots, scrollbar thumb |

### Photography & Illustration Geometry

- **No photography.** The only imagery is the fixed background video (full-bleed, `object-cover`, repositioned across breakpoints with `object-[80%_center] md:object-[right_center] lg:object-center`) and the inline SVG Mars-globe logo.
- **The Mars-globe `{components.logo}`** is a self-contained SVG sphere: a radial body gradient (`#FFCD96 → #FF9A4D → #F04A21 → #B0240F → #5B1407`), a `{colors.bone}` polar ice cap, ochre surface maria ellipses, a warm specular highlight, and a limb-shadow gradient for 3D depth, all clipped to a circle. It uses `useId()` so multiple instances get unique gradient IDs.
- **Icon chips** are 44px (`w-11 h-11`) rounded-xl wells; smaller quick-link chips are 36px (`w-9 h-9`). All icons are lucide-react at `strokeWidth={1.6}`.
- The favicon reuses the same Mars-globe artwork; there is no raster or stock asset anywhere.

## Components

### Buttons

> Measured from the live build. There is one filled button style — solid white — used for every primary action; everything else is a glass surface or a text link.

**`btn-white`** ({components.btn-white}) — The primary CTA. The desktop nav "Launch App", the hero "Join the list" submit, the CTA-band submit, and the mobile-menu button.
- Background `white`, text `gray-900`, Sora `font-medium`, `rounded-full`. Nav: `px-6 py-3`; hero submit: absolute inside the form, `px-3.5 sm:px-6 py-2.5 sm:py-3` with a trailing `ArrowRight` (`w-3.5`). Hover `bg-white/90`, `active:scale-[0.98]`. The one place pure white is used as a fill.

**Mobile toggle** — `lg:hidden glass rounded-xl p-2.5 text-white`, `aria-label="Toggle menu"`, swapping `Menu` ↔ `X`. A glass surface, not a filled button.

### Cards & Containers

**`glass-card`** ({components.glass}) — The default feature / ecosystem / roadmap / quick-link card.
- `{components.glass}` surface, `rounded-2xl`, `p-6 sm:p-7`. Hover brightens the border to `white/25`. Holds an `{components.icon-chip}`, an 18px Sora-medium `<h3>`, and a `text-white/60` description. Ecosystem variant adds `flex items-start gap-4`, an `ArrowUpRight` in the title row, and the cosmic hover bloom.

**`stats-band`** — The overlapping metric strip.
- `{components.glass-strong}`, `rounded-3xl`, `max-w-7xl`, pulled up with `-mt-6 sm:-mt-10`. A `grid-cols-2 lg:grid-cols-4` grid with `divide-white/10` rules; each cell centers an Orbitron `{components.ink-gradient}` numeral over a `text-white/55` label.

**`tokenomics-panel`** — Two `glass rounded-3xl p-6 sm:p-8` cards.
- Distribution: a title row pairing `<h3>` with an Orbitron ink-gradient `$MARX`, a stacked allocation bar (`flex h-3 rounded-full overflow-hidden bg-white/5`, each segment `width: percent%` and a `BAR_COLORS` fill), then a legend of colored dots + labels + `tabular-nums` percents. Utility: a list of ember `Check` chips + text, then a 2-col mini-grid of `Total supply` / `Symbol` wells (`rounded-2xl bg-white/5 border border-white/10`).

**`cta-panel`** ({components.glass-strong}) — The community CTA.
- `glass-strong rounded-[2rem] p-8 sm:p-14 text-center`, an ember `blur-[100px]` bloom, a `floaty` Mars-globe logo, kicker + Orbitron heading + subtitle, the glass email form, and a 3-up quick-link grid.

### Marks & Accents

**`kicker`** ({components.kicker}) — The section eyebrow.
- An 8px `h-px w-8 bg-gradient-to-r from-ember to-transparent` rule followed by a 12–14px uppercase label at `tracking-[0.22em]`, `text-plasma/90`. Marks every section opener.

**`icon-chip`** ({components.icon-chip}) — The glyph well.
- 44px square, `rounded-xl`, `bg-white/5`, 1px `white/10` border, `text-plasma` lucide glyph at `strokeWidth 1.6`.

**`ink-gradient`** ({components.ink-gradient}) — Clipped gradient text.
- `linear-gradient(100deg, #ff9a4d 0%, #ff3b2e 45%, #8b5cf6 100%)` with `background-size: 200% auto` and `background-clip: text` → transparent fill. Plasma → ember → cosmic, on stat numerals, step indices, and the `$MARX` symbol only — the one place all three warm-to-violet accents appear together.

**`ember-dot`** ({components.ember-dot}) — The hero eyebrow pip.
- An 8px ember circle with a `shadow-[0_0_12px_3px_rgba(255,59,46,0.7)]` glow inside the glass eyebrow pill.

### Inputs & Forms

**`email-field`** — The hero and CTA email capture.
- A `glass` / `glass-strong` `rounded-full` shell wrapping a transparent input (`bg-transparent text-white placeholder-white/45 outline-none`, `sr-only` label) with the `{components.btn-white}` submit absolutely positioned inside on the right. On submit the build `preventDefault`s, ignores empty, and `alert`s a confirmation — there is no real validation or backend yet.

### Navigation

**`top-nav`** — A fixed glass bar, not a solid plate. Inside `<header className="fixed top-0 inset-x-0 z-40 ...">`.
- **Brand pill**: `glass rounded-2xl px-4 py-2.5 sm:px-5 sm:py-3` holding the Mars-globe `{components.logo}` + the Orbitron `MarX` wordmark.
- **Center links** (`hidden lg:flex`): a `glass rounded-full` pill of `text-white/75 hover:text-white` links with `hover:bg-white/10` rounded-full hover wells.
- **Right**: the desktop `{components.btn-white}` "Launch App" (`hidden sm:block`) + the `lg:hidden` glass mobile toggle. The mobile menu is an absolute `glass-strong rounded-2xl` sheet.

### Footer

**`footer`** — A `glass rounded-3xl p-8 sm:p-12` shell.
- A `lg:grid-cols-[1.4fr_repeat(3,1fr)]` grid: a brand cell (Mars-globe logo + Orbitron wordmark + descriptor + pill-shaped social chips) and four link columns (`text-white/55 hover:text-white` links). A `border-t border-white/10` bottom bar holds the legal line and the "Built on the Cosmos SDK · Secured by CometBFT" credit, both at `text-white/45 text-xs`.

### Signature

**`video-background`** ({components.bg-scrim} over the clip) — The centerpiece.
- One fixed full-viewport `<video>` at `z-0`, `{components.bg-scrim}` at `z-1`, content at `z-10`. Page scroll drives the timeline: `progress = scrollY / (scrollHeight − innerHeight)` clamped 0..1, `target = progress * max(0, duration − 0.04)`. Each rAF frame eases `current += (target − current) * 0.16` and commits at most one seek (only when `|current − lastSeek| > 0.012`, waiting on the `seeked` event, with a 220 ms safety gate). `prefers-reduced-motion: reduce` falls back to a calm muted autoplay loop; no-JS keeps `autoPlay loop muted playsInline`. Treat it as the page's single piece of background motion — no parallax or second moving plane competes with it.

## Do's and Don'ts

### Do
- Keep `{colors.void}` #07060A as the global `body` background and the only page surface; let the video, not a gradient, fill it.
- Set the text base to `{colors.bone}` #F6EFE6 and run body copy at `text-white/70`, captions `text-white/55` — keep `#FFFFFF` for CTA fills and `::selection` only.
- Do all accent work with ember `{colors.ember}` + plasma `{colors.plasma}`; reach for cosmic `{colors.cosmic}` or signal `{colors.signal}` only for the ink-gradient terminus, the hover bloom, or a single distribution segment.
- Set every display mark in Orbitron via `.font-orbitron`; keep all prose in Sora.
- Float content on `{components.glass}` / `{components.glass-strong}` over the scrim — translucency + blur, not drop shadows.
- Clip `{components.ink-gradient}` only onto numerals, step indices, and the `$MARX` symbol.
- Wrap below-the-fold blocks in `{components.reveal}` (0.8s, `(i%cols)*90ms` stagger, 1200 ms failsafe) and above-the-fold in `{components.rise}` — both end fully visible.
- Keep Cosmos SDK / CometBFT / IBC / IBC Eureka / DPoS / CosmWasm / ATOM / `$MARX` verbatim — they are MarX's own product domain.

### Don't
- Don't add a light mode, a page-background gradient, or any second moving plane competing with the scroll-scrubbed video.
- Don't set body copy in pure `#FFFFFF`, and don't set it in Orbitron — body is Sora at `white/70`.
- Don't promote cosmic or signal to a primary accent, and don't introduce the crypto-default purple-indigo gradient or neon-green "blockchain" glow.
- Don't flatten the video to a dull dark plate — `{components.bg-scrim}` is a radial+vertical blend, not an opaque overlay.
- Don't add `box-shadow` to glass cards; depth is blur + hairline borders + accent blooms.
- Don't add an animation library — motion is CSS `{components.rise}`, the IntersectionObserver `{components.reveal}`, and Tailwind `floaty` / `shimmer` only.
- Don't replace the inline Mars-globe `{components.logo}` SVG with a raster/stock image or drop its `useId()` unique gradients.
- Don't use emoji or `bg-blue-500`-style AI-default accents anywhere.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px (base) | Side rail `px-4`; hero `<h1>` at 2.1rem; feature pills wrap under the form (`flex sm:hidden`); nav center links hidden, glass toggle shows; stats `grid-cols-2`; scroll cue hidden |
| sm | ≥640px | Rail `px-10`; `<h1>` 3.5rem; hero goes `sm:flex-row sm:items-end` with the pill column right; desktop CTA button shows (`hidden sm:block`); scroll-cue chevron appears |
| md | ≥768px | Hero `<h1>` 4.5rem; video repositions `md:object-[right_center]` |
| lg | ≥1024px | Rail `px-12`; `<h1>` 5.5rem; nav center-link pill shows (`hidden lg:flex`); feature grid → 3 cols, roadmap → 4 cols; stats → 4 cols; video `lg:object-center` |
| xl | ≥1280px | Content caps at `max-w-7xl` (1280px); layout holds |

### Touch Targets
- The `{components.btn-white}` (`py-3` / `py-2.5 sm:py-3`) and the 44px `{components.icon-chip}` clear the ≥44px tap minimum.
- The mobile menu toggle (`p-2.5`) and the mobile menu link rows (`py-2.5 px-2`) extend comfortably for touch.

### Collapsing Strategy
- **Nav**: center links are `hidden lg:flex`; below `lg` a glass toggle opens an absolute `glass-strong` sheet of the same links plus a full-width Launch App button. The desktop CTA is `hidden sm:block`.
- **Hero pills**: a vertical right-aligned column on `sm+`, wrapped chips under the form on mobile (`flex sm:hidden`).
- **Grids**: stats `grid-cols-2 lg:grid-cols-4`; feature `sm:grid-cols-2 lg:grid-cols-3`; ecosystem / tokenomics `lg:grid-cols-2`; roadmap `sm:grid-cols-2 lg:grid-cols-4`.
- **Type**: hero `<h1>` and section `<h2>` step up per breakpoint via discrete Tailwind sizes (not a single `clamp`).

### Image Behavior
- The background video is `object-cover` full-bleed, repositioned `object-[80%_center] md:object-[right_center] lg:object-center` so the planet stays framed across widths.
- `prefers-reduced-motion: reduce` collapses the scrub to a calm ambient autoplay loop; the `{components.rise}` keyframe is gated behind `no-preference`.
- The Mars-globe `{components.logo}` is inline SVG — it scales crisply at every size with no layout shift.

## Iteration Guide

1. New section? Start from the `Section` shell: a `Reveal` `{components.kicker}` + Orbitron `<h2>` + Sora subhead in `max-w-3xl`, then a glass-card grid at `gap-4 sm:gap-5 mt-12`. The shell is the brand.
2. Reference everything by token — `{colors.x}`, `{rounded.x}`, `{typography.x}`, `{components.x}` — so a value change cascades.
3. Keep the accent budget: ember + plasma carry new accents; a new need for cosmic or signal must justify joining the ink-gradient/hover-bloom/distribution set, never a new hue.
4. Any new depth uses the existing devices — a glass tier, a hairline, or a blurred accent bloom — never a drop shadow or an opaque panel.
5. Display vs body is a hard line: Orbitron (`.font-orbitron`) for marks and numerals, Sora for every sentence.
6. New below-the-fold blocks wrap in `{components.reveal}` with `delay={(i % cols) * 90}`; above-the-fold blocks use `{components.rise}`. Both must end fully visible — never ship an opacity:0 with no failsafe.
7. The scroll-scrubbed video is the only background plane — a new "needs motion" answer is a `floaty` micro-loop or a hover bloom, not a second moving layer.

## Known Gaps

- The build is a single landing page; secondary surfaces (docs, app dashboard, governance/staking screens) are not specified — design them in the same language: void canvas, glass tiers, Orbitron heads, Sora body, ember/plasma accents.
- Form validation, error, success, disabled, and focus states are not surfaced — the email forms only `alert` on submit. A real signup/auth flow would need a semantic state system introduced (none exists today).
- Heading weights are read as the Orbitron range (400–900 loaded) used at display sizes; the exact per-heading numeric weight is not pinned in the markup beyond `font-medium` on card titles — the type table approximates the rendered weight.
- The `Steps` and `SplitStats` layouts and several pre-imported icons (`Radio`, `CircleCheckBig`, `GitCompareArrows`, `Vote`, `Blocks`, `Cpu`, `Repeat`, `GitBranch`, `Code`, `Gauge`) are defined but unused — kept so `layoutHint` / icon names stay swappable; their live appearance is unverified.
- The `shimmer` Tailwind animation is defined but not applied on the current page; it is available for future gradient sweeps.
- The exact background-video timeline (the deep-space → planet → surface keyframing) is an asset, not code — the design depends on that clip being re-encoded all-intra and hosted at the CDN URL for the scrub to stay smooth.
