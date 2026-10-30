---
version: "1"
name: "ButterNFT — Museum-Grade Web3 Landing"
description: "An editorial-monochrome landing for a generative collection of 8,888 hand-drawn butterfly NFTs on Ethereum. Off-white canvas (#fcfcfc), near-black ink (#111), dark gallery surfaces (#0a0a0a), no purple/indigo/neon — color is strictly black, white, grey. Inter for prose, Orbitron for techno labels. The marquee effect is a sand-dissolve SVG filter — particles shatter and reform as you scroll."
colors:
  canvas: "#fcfcfc"
  ink: "#111"
  ink-soft: "#1a1a1a"
  gallery: "#0a0a0a"
  footer-glyph: "#161616"
  hairline-light: "rgba(0,0,0,0.08) — Tailwind gray-200/300"
  hairline-dark: "Tailwind gray-800 (#1f2937) on gallery"
  muted-dark: "Tailwind gray-400/500 (#9ca3af / #6b7280) for mono labels on dark"
  muted-light: "Tailwind gray-500/700 (#6b7280 / #374151) for mono labels on light"
typography:
  display:
    fontFamily: "Inter"
    weights: "300 / 400 / 500 / 600"
    role: "headlines + body, antialiased"
  mono:
    fontFamily: "Orbitron"
    weights: "400 / 500 / 600 / 700"
    role: "nav, counters, on-chain spec labels, CTA button text"
spacing:
  base: "Tailwind default (4px)"
  section-y: "py-24 md:py-36 (96px → 144px)"
  container-x: "px-6 md:px-16 (24px → 64px)"
  max-width: "1400px content cap; mega wordmark unconstrained"
rounded:
  none: "0px (museum-sharp — sections, headings, chapter cards, mint progress edges)"
  sm: "rounded-md (mint button only — 6px)"
  pill: "9999px (small chips, sub-nav pills, inverting icon circles, View Details circle)"
components:
  sand-dissolve: "Inline SVG <feTurbulence> + <feDisplacementMap> + <feOffset> + <feGaussianBlur> + <feColorMatrix> driven each frame by requestAnimationFrame — image shatters into sand and reassembles on scroll (900ms duration, easing via Math.pow curves)"
  butter-logo: "Two-tone wordmark that letter-staggers in (y:120 → 0, 1.2s, [0.16,1,0.3,1]) with NFT superscript at 1.4vw"
  invert-pills: "Pill buttons whose icons flip color via group-hover:invert (light pills) or group-hover:invert-0 (dark circles) — never re-rendered"
  museum-counters: "Orbitron numeric counters (8,888 / 0/8888 / Floor 0.05Ξ) framed by hairlines, no badges, no glow, tabular-nums"
  chapter-list: "Border-separated rows (border-gray-800/80, py-8), active row text-white with ArrowUpRight spring-in, auto-cycles every 3500ms"
  faq-accordion: "Borderless rows separated by border-gray-200, Plus icon rotates 45° to ×, AnimatePresence height 0→auto over 400ms with [0.16,1,0.3,1]"
---

# ButterNFT — Museum-Grade Web3 Landing

> Fivefold showcase. Pairs with the ButterNFT prompt. Use this file to keep ButterNFT's curatorial restraint when you add new pages — it should always read as a natural-history publication, never a mint-day landing.

## Overview

ButterNFT is **a generative drop of 8,888 hand-drawn butterfly NFTs presented like a natural-history museum collection.** Off-white canvas, near-black ink, dark gallery rooms, mono labels in a techno display face. There is no purple, no indigo, no neon, no gradient text — the entire NFT-landing visual playbook has been refused. What replaces it: an editorial monochrome that treats each butterfly as a specimen.

The governing decision: **museum, not marketplace.** Most web3 drops shout — gradient mints, hex-glow countdowns, "claim now" pressure. ButterNFT does the opposite. The animation system isn't fireworks; it's a sand-dissolve SVG filter that turns each artwork into particles and reforms it as you scroll, the way you'd flip a page in a coffee-table monograph. The wordmark scales to 21vw (`text-mega`) so the brand reads as a museum facade, not a logo. The counters use Orbitron at small sizes so you still know it's on-chain, but you'd never mistake the page for OpenSea. The bet: the value of the art carries the page; the launch hype stays offstage.

The system extends by reusing two families (Inter + Orbitron), six tones, one easing curve `[0.16, 1, 0.3, 1]`, and one signature filter. Sections alternate between Canvas (`{colors.canvas}`) and Gallery (`{colors.gallery}`) — the entire rhythm of the page is "lit gallery wall → dark exhibit room → lit wall". When a new page or surface is added, it inherits this rhythm: no new accent, no new family, no new shadow, no new radius. The aesthetic survives because the design refuses to add anything.

**Key Characteristics:**
- Off-white canvas (`{colors.canvas}` — #fcfcfc) and near-black ink (`{colors.ink}` — #111) — never pure white, never absolute black.
- Strict monochrome — the only "accent" is the section rhythm of light canvas ↔ dark gallery.
- Two families only: Inter 300–600 for prose, Orbitron 400–700 for nav/counters/CTA labels.
- A 21vw mega wordmark with line-height 0.75 — the brand reads architectural, not corporate.
- A single sand-dissolve SVG filter as the site's only marquee motion (feTurbulence → feDisplacementMap → feOffset → feGaussianBlur → feColorMatrix).
- Invert-on-hover icon system — pure-black SVGs recolor via `filter: invert(1)` rather than swapping sources.
- Sharp edges — 0px radius for sections and headings; 9999px only for small pills and circular icon backgrounds; 6px (`rounded-md`) appears exactly once on the mint button.
- Black-on-black selection (`::selection { background: #000; color: #fff }`) reinforces the editorial pose even in highlighted text.

## Colors

> **Source pages analyzed:** ButterNFT single-page landing (Hero, Collection, Ancient Collection dark room, FAQ, CTA/Mint, Footer). The palette is identical across every section — light or dark rhythm is the only variable.

### Surface

- **Canvas** (`{colors.canvas}` — #fcfcfc): The gallery wall. Hero, Collection, FAQ sit on this. Off-white reads as paper, not screen — pure white would betray the museum intent.
- **Gallery** (`{colors.gallery}` — #0a0a0a): The dark rooms — Ancient Collection grid, CTA/Mint, Footer. Walking from Canvas into Gallery is the only "transition" the page admits.
- **Ink-soft** (`{colors.ink-soft}` — #1a1a1a): Near-black inner surfaces inside light sections — used for chapter card hover states and dark inset blocks. Slightly above true black so the layering reads.

### Text

- **Ink** (`{colors.ink}` — #111): All primary type on Canvas, the wordmark, primary button fills. Slightly softer than absolute black so the page doesn't feel printer-ink heavy.
- **Canvas on Gallery** (`{colors.canvas}` — #fcfcfc): All primary type on Gallery sections. The same off-white as the wall it replaces — keeps the system to one ink/one paper.
- **Muted dark** (`{colors.muted-dark}` — Tailwind gray-400/500): Mono labels, inactive nav, FAQ index numerals, footer micro-copy on Gallery.
- **Muted light** (`{colors.muted-light}` — Tailwind gray-500/700): Body copy de-emphasis on Canvas, sub-nav columns, FAQ closed-state question text.

### Hairlines & Borders

- **Hairline-light** (`{colors.hairline-light}` — Tailwind gray-200/300, `rgba(0,0,0,0.08)`): 1px dividers inside Canvas sections — FAQ row separators, sub-nav columns, pill button outlines.
- **Hairline-dark** (`{colors.hairline-dark}` — Tailwind gray-800, #1f2937): 1px dividers inside Gallery — chapter list rows, two-column panel split, footer top border, mint progress track.

### Footer Glyph

- **Footer glyph** (`{colors.footer-glyph}` — #161616): The 18vw `BUTTER` wordmark in the footer, sitting on Gallery (#0a0a0a). The deliberately low contrast (≈1.3:1) reads as architectural signage — the way a museum's name carves into the exit-door lintel, present but not loud.

**Constraint** (verbatim from prompt): one ink-tone family, no hue fluctuation, no accent. Contrast comes from weight, scale, and the light/dark section rhythm — never from color.

## Typography

### Font Family

- **Inter** (`--font-sans`): `"Inter", ui-sans-serif, system-ui, sans-serif`. Weights 300 / 400 / 500 / 600. Headlines and body. Antialiased via `-webkit-font-smoothing: antialiased`.
- **Orbitron** (`--font-mono` and `--font-display`): `"Orbitron", ui-sans-serif, system-ui, sans-serif`. Weights 400 / 500 / 600 / 700. Nav links, technical labels, counters, footer link columns, CTA button labels — the "on-chain spec sheet" texture.
- OpenType features: rely on `tabular-nums` for counters (8,888 / 0.08 ETH / 6,214) so progress bar and stat rows stay visually locked when values tick.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `text-mega` | 21vw | 500 (Inter) | 0.75 | -0.04em | Hero `BUTTER` wordmark |
| `text-mega-footer` | 18vw | 500 (Inter) | 0.8 | tracking-tighter | Footer `BUTTER` glyph on Gallery |
| Hero H1 | clamp(56px, 5vw, 80px) — `text-[3.5rem] md:text-[5rem]` | 400 (Inter) | 1.0 | tracking-tight | `WINGED WONDERS` left sidebar |
| Section H2 | clamp(35px, 4vw, 67px) — `text-[2.2rem] md:text-[3.5rem] lg:text-[4.2rem]` | 500 (Inter) | 1.1–1.15 | tracking-tight | Collection / Ancient Collection / FAQ / CTA headings |
| Chapter row | `text-2xl md:text-[2rem]` (24 → 32px) | 500 (Inter) | tight | tracking-tight | Five chapter list items |
| FAQ question | `text-[1.1rem] md:text-[1.4rem]` (17.6 → 22.4px) | 500 (Inter) | 1.4 | tracking-tight | Accordion triggers |
| Body | 13–15px — `text-[13px] md:text-[14px]` / `text-[15px]` | 400 (Inter) | 1.6–1.7 | normal | Sidebar paragraphs, FAQ answers, footer blurb |
| Mono label | 10–11px — `text-[10px] md:text-[11px]` | 500–700 (Orbitron) | 1.5 | tracking-[0.2em] uppercase | Section indices, sub-nav, footer columns, bottom strip |
| Mono micro | 9–10px — `text-[9px] md:text-[10px]` | 400–500 (Orbitron) | 1.5 | tracking-widest uppercase | Bottom legalese, "TAKING FLIGHT" strip, taglines |
| Counter value | 13–15px — `text-[13px]` / `text-[15px]` | 500 (Inter) tabular-nums | 1 | normal | Stat values (Traits 12, Rarity 0.1%, 0.08 ETH) |
| NFT superscript | 1.4vw | 400 (Orbitron) | 1 | tracking-[0.25em] | `NFT` next to logo |
| CTA button | `text-[13px]` | 600 (Orbitron) | 1 | tracking-[0.15em] uppercase | Mint a Butter |

### Principles

- Mega display sizes use negative letter-spacing (`-0.04em` for wordmark, `tracking-tight` for H2/H3) — at 21vw, default tracking would feel airy and corporate.
- Body sits at 13–15px, not 16px. Pair with line-height 1.6–1.7 so dense mono labels and editorial paragraphs both read as catalog text.
- Orbitron is reserved for spec-sheet roles only — never headlines. Mixing Orbitron and Inter inside a single sentence is forbidden; the only exception is the inline icon trio inside Section 3's heading, which is visual, not typographic.
- Weight 500 carries the system. 600 is used only on Mono labels for emphasis (sub-nav "The Collection") and on the CTA button label. 700 is reserved for the brand wordmark's optional bold lockup — never on body.
- All mono labels uppercase with tracking ≥ 0.2em. Mono never appears mixed-case or at body sizes.
- Type contrast comes from scale, not from a different family — the same Inter 500 runs from H2 (67px) down to the FAQ question (22px) — the hierarchy reads through size and the surrounding hairline rhythm.

### Note on Font Substitutes

If Inter is unavailable, fall back to `ui-sans-serif, system-ui, sans-serif` and increase the body line-height by ~0.05 to compensate for SF Pro / Segoe / system metrics drift. If Orbitron is unavailable, do NOT substitute another mono — the system loses its on-chain texture. Replace with `"JetBrains Mono", ui-monospace, monospace` and tighten tracking by 0.02em, then leave a code comment noting the substitution. Never synthesize bold or italic — clamp to the nearest loaded weight.

## Layout

### Spacing System

- Base unit: Tailwind v4 default 4px scale (1 = 4px, 2 = 8px, 4 = 16px, 8 = 32px, 16 = 64px, 24 = 96px, 32 = 128px, 36 = 144px).
- Section padding-y: `py-24 md:py-36` (96px → 144px) for FAQ/CTA, `pt-24 md:pt-32` for Collection, `pt-32 md:pt-48` for the dark gallery — heavier on Gallery to give the artwork room.
- Container padding-x: `px-6 md:px-16` (24px → 64px). Inner CTA/FAQ/Footer cap at `max-w-[1400px] mx-auto`.
- Card padding (chapter list rows): `py-8 px-8` (32px). Sub-nav columns: `pt-6 px-6 md:px-16`. Mobile menu: `py-6` with `space-y-6`.
- Universal rhythm constant: the section index label (`[ 01 ]`, `[ 02 ]`…) sits with `mb-12` below it to the H2, and the H2 sits with `mb-16` above its first content block.

### Grid & Container

- Hero: full viewport (`min-h-screen`), `flex flex-col`. Left sidebar `w-[320px]` at `px-10 md:px-16 mt-20 sm:mt-28 md:mt-32`; right sidebar `w-[200px]` at `mt-12 md:mt-20 px-6`, hidden under `md:`.
- Collection grid (Section 3 two-column panel): asymmetric `flex flex-col md:flex-row`, left 35% / right 65%, divided by `border-r border-gray-800`.
- FAQ grid: `grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20` — sticky heading column, accordion column.
- CTA grid: `grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-14 lg:gap-20 items-end` — large statement, compact mint widget.
- Footer grid: `grid grid-cols-1 lg:grid-cols-[1.4fr_1fr]` for brand vs link columns, then `grid grid-cols-3 gap-8` inside the link block.
- All asymmetric grids collapse to single-column under `lg:` (1024px). Gutters never exceed 80px.

### Whitespace Philosophy

Whitespace is the page's only decoration. A 21vw wordmark would feel oppressive in any other system; here it works because the surrounding margins — the empty 320px sidebar, the empty bottom band of Section 2, the 144px section padding — give it room to read as architecture instead of advertising. Negative space is treated like the matte border around a museum print: never compressed for "density", never filled with secondary copy. When in doubt, remove a row before adding one.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No border, no shadow | Default surface state — hero, statement panels, footer body |
| Soft hairline | `border border-gray-200` (light) or `border-gray-800` (dark) | FAQ row dividers, chapter list rows, mint widget stat rows, footer top border, two-column panel split |
| Inverted fill | `bg-black text-white` (light pill hover) or `bg-white text-[#0a0a0a]` (Gallery CTA) | Active button state, mint CTA — depth via inversion, not shadow |
| Backdrop blur | `bg-white/50 backdrop-blur-sm` | Section 2 sub-nav pills only — gives the pills a paper-translucent feel without breaking flatness |

**Shadow philosophy:** ButterNFT has no `box-shadow` outside the mobile menu (`shadow-xl` on the dropdown — pragmatic, since it sits on Canvas with no other separator). Depth is created by hairlines, inversion, and the light/dark section rhythm. The sand-dissolve filter substitutes for any "lift" or "glow" treatment a normal NFT site would use.

**Decorative Depth:**
- Section 5 CTA watermark: oversized `butterfly-2.svg` at `h-[120%]` with `opacity-[0.06]` and `invert` — a near-invisible ghost in the dark room.
- Section 6 footer wordmark: `BUTTER` at 18vw in `{colors.footer-glyph}` (#161616) on `{colors.gallery}` (#0a0a0a) — a printed surname carved into the door, not a logo.
- Section 3 chapter art: rendered through `mix-blend-lighten` so the pure-black photo background drops out into the Gallery panel — depth created by compositing, not shadow.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `rounded-none` | 0px | Sections, headings, chapter list rows, FAQ rows, mint progress bar, footer columns — the museum-sharp default |
| `rounded-md` | 6px | Mint a Butter CTA button — the ONLY exception, used to soften the single most-clicked element |
| `rounded-full` | 9999px | Section 2 sub-nav pills, Section 3 inline icon trio, "View Details" Plus circle, Section 3 right-column tag pills |

The system is binary: sharp by default, pill for circular affordances, one md exception for the primary CTA. Mid-radius values (`rounded-lg`, `rounded-xl`, `rounded-2xl`) are forbidden — they read as "SaaS dashboard", which is the opposite of museum.

### Photography Geometry

- Chapter artwork: square (`aspect-ratio` implied via `w-[80%] h-[80%]` inside an `absolute inset-0 m-auto` container), `object-contain`, photographed on pure-black background so `mix-blend-lighten` drops the background into Gallery surfaces.
- Hero video (`butter-hero.mp4`): full-bleed `w-full h-full object-cover` behind the wordmark, mounts after 2800ms, fades `opacity 0 → 1` over 1.6s easeOut.
- Section overlap video (`butter-section.mp4`): `w-screen max-w-none` at full viewport width, animates `y: -65% → -78%` and `opacity 0 → 1` over 1.4s on scroll into view.
- All decorative icons: pure-black SVGs (`fill="black"`), tall ~32×47 viewBox, rendered via `<img>` with `object-contain` and `crossOrigin="anonymous"` where loaded from CDN. Color states are produced exclusively with `filter: invert(1)` or `invert-0` — never by editing the SVG.
- Loading strategy: hero video stays muted, autoplay, playsInline, with a 2800ms delayed mount via `showVideo` state — the page renders editorially first, then the motion arrives.

## Components

### Top Navigation

**Header — `{component.header}`**
Sticky-feeling but actually `pt-6 px-6 md:px-16 z-20` static. Renders `ButterLogo` (the 21vw wordmark) above the sub-nav bar. The wordmark glyphs animate in via `letterBlock` (y:120 → 0, 1.2s, [0.16, 1, 0.3, 1]) with a 0.06s stagger.

**Sub-nav bar — `{component.sub-nav}`**
Five columns: brand stack, arrow separator, centre tagline, arrow separator, nav links column. `text-[10px] md:text-[11px] font-mono tracking-[0.2em] uppercase`, all in `{colors.muted-light}`. The right column (`navItems`) uses `font-display hover:text-black hover:underline transition-colors`. Mobile collapses to the hamburger.

**Hamburger — `{component.hamburger}`**
`md:hidden flex flex-col items-end gap-[6px]` with two `h-[1.5px] bg-black` bars. Default state: bars at `w-8` and `w-6`. Active state (`isMobileMenuOpen`): bars rotate ±45° and translate ±3.75px into an X. Focus state inherits `outline-current` from the page.

### Buttons

**Mint CTA — `{component.button-primary}`**
Default: `w-full bg-white text-[#0a0a0a] py-4 rounded-md` with Orbitron 600 label "MINT A BUTTER" at `text-[13px] tracking-[0.15em] uppercase`. Active: `active:scale-[0.98]`. Focus: inherits `outline-current` on `{colors.canvas}`. Lives on Gallery so the white fill reads maximally — the only `rounded-md` in the system.

**Sub-nav action pill — `{component.button-secondary}`**
Default: `flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 bg-white/50 backdrop-blur-sm text-gray-800 text-[11px] font-medium uppercase tracking-wider`, with a 20px black SVG icon (h-5). Active: `hover:border-black hover:bg-black hover:text-white` and `group-hover:invert` on the icon. Focus: `outline-2 outline-offset-2 outline-black`. Used for the five Origins/Traits/Rarity/Species/Roadmap chips.

**View Details circle — `{component.button-utility}`**
Default: `w-10 h-10 rounded-full border border-gray-400` housing a `Plus` icon (size 16, strokeWidth 1.5). Active: `hover:border-black hover:bg-[#111]` with icon `→ text-white`. Focus: `outline-2 outline-offset-2 outline-current`. Used on the right hero sidebar.

**Dark circle CTA — `{component.button-circle-dark}`**
Default: `w-10 h-10 md:w-14 md:h-14 rounded-full border border-gray-600 bg-black` with `<img>` icon `invert` (→ white). Active: `hover:bg-white hover:border-white` and icon `group-hover:invert-0` (→ black). Focus: outline white. Used for the inline icon trio inside Section 3's heading.

**Tag pill (dark) — `{component.button-tag-dark}`**
Default: `px-5 py-2 rounded-full border border-gray-600 text-[9px] font-mono tracking-widest uppercase text-gray-300`. Active: `hover:bg-white hover:text-black hover:border-white`. Focus: outline white. Used for the Generative / On-chain / Rare tags.

### Cards & Containers

**Chapter list row — `{component.card-chapter}`**
Default: `flex items-center justify-between border-b border-gray-800/80 py-8 px-8 cursor-pointer text-[#444]`, chapter name `text-2xl md:text-[2rem] font-medium tracking-tight`. Active (`activeChapter === i`): `text-white` with an `ArrowUpRight` (size 22, strokeWidth 1, `text-gray-400`) that spring-animates in from `x: -20, opacity: 0`. No border-radius, no shadow — pure museum row. Focus: outline white inset.

**FAQ row — `{component.card-faq}`**
Default: `border-b border-gray-200`. Trigger: `flex items-center justify-between gap-6 w-full py-7 text-left active:scale-[0.995]`. Question closed: `text-gray-500`. Question open: `text-[#111]`. Plus icon (size 20, strokeWidth 1.5) rotates to `rotate-45` over 300ms with `[0.16, 1, 0.3, 1]` easing. Focus: visible `outline-2 outline-current` on the trigger button.

**Mint widget row — `{component.card-utility}`**
Default: `border-t border-gray-800 pt-5` with mono label left + tabular-nums value right (`font-mono text-[15px] tabular-nums`). No fill, no radius, no shadow — depth is only the hairline. Stack of rows builds the entire "widget".

### Inputs & Forms

**FAQ trigger button — `{component.input-accordion}`**
This is the only interactive form-like element in the system. Default: full-width unstyled `button` with `aria-expanded` synced to `openFaq` state. Active: `active:scale-[0.995]` micro-press feedback. Focus: relies on `:focus-visible` outline-current (inherits Ink on Canvas). Disabled: not used — every FAQ is always openable. There are no text inputs, selects, or text areas on the landing page.

### Footer

**Footer — `{component.footer}`**
Container: `relative w-full bg-[#0a0a0a] text-white border-t border-gray-800`, inner `px-6 md:px-16 pt-20 pb-10 max-w-[1400px] mx-auto`. Brand lockup: `Butter` at `text-xl font-medium tracking-tight` + `NFT` Orbitron `text-[10px] tracking-[0.25em] text-gray-500`. Link columns: `grid grid-cols-3 gap-8` with column titles in mono `text-[10px] tracking-widest uppercase text-gray-500 mb-5`. Links: `font-display text-[12px] tracking-wide text-gray-300 hover:text-white`, external links append an `ArrowUpRight` (size 12, strokeWidth 1.5) that nudges up/right on hover. Bottom bar: `mt-10 pt-6 border-t border-gray-800 flex items-center justify-between` with copyright left and Terms/Privacy right, all `text-[10px] font-mono tracking-widest uppercase text-gray-500`.

## Do's and Don'ts

### Do

- Use `{colors.canvas}` (#fcfcfc) for every light section background. Never substitute pure white (#ffffff) — the off-white is part of the museum read.
- Set body type at 13–15px with line-height 1.6–1.7. Reserve 16px+ for headings.
- Apply the sand-dissolve filter (`SandTransitionImage`) to every key artwork reveal. It is the site's only marquee motion.
- Reserve Orbitron for spec-sheet roles: nav, counters, mono labels, CTA button label, footer column titles. Never use Orbitron in prose.
- Keep all section radius at 0px. Use `rounded-full` only for sub-nav pills and small circular affordances; `rounded-md` only on the Mint CTA.
- Use `tabular-nums` on every numeric counter (8,888 / 0.08 ETH / 6,214 / Floor 0.05Ξ) so values don't shift width when they tick.
- Drive every hover/active state through `transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)` and the house easing `[0.16, 1, 0.3, 1]` for content motion.
- Render every decorative icon as a pure-black SVG (`fill="black"`) inside `<img>` and recolor via `filter: invert(1)` or `invert-0`. Never edit the SVG to change color.
- Honor `prefers-reduced-motion`: sand filter snaps to its final state (progress = 1), video autoplay stays muted, no JS-driven reveals.

### Don't

- Don't introduce purple, indigo, violet, neon, or any saturated accent. The system is strictly black / white / grey.
- Don't add gradient text, gradient backgrounds, or "claim-now" countdown chrome — the museum pose breaks the moment any web3 trope appears.
- Don't use `box-shadow` outside the mobile menu (`shadow-xl`). Depth is achieved through hairlines, inversion, and section rhythm.
- Don't mix Inter and Orbitron inside a single sentence. The inline icon trio in Section 3 is the only allowed cross-system intrusion.
- Don't substitute fonts loosely. If Inter is unavailable, use system-ui and adjust line-height by +0.05. If Orbitron is unavailable, leave a code comment.
- Don't round colors. `#fcfcfc`, `#111`, `#0a0a0a`, `#1a1a1a`, `#161616` are exact and load-bearing.
- Don't add mid-radius shapes (`rounded-lg`, `rounded-xl`, `rounded-2xl`) — they pull the design toward SaaS dashboard territory.
- Don't animate `top`, `left`, `width`, or `height` for motion — only `transform`, `opacity`, SVG filter primitives, and accordion `height: auto` are permitted.
- Don't swap self-hosted media (`butter-hero.mp4`, `butter-section.mp4`, `01.png`–`05.png`, `/icons/*.svg`) for placeholders or external URLs.
- Don't add a "scroll to explore" cue, a particle background, or a chain-logo badge — they were intentionally removed.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤419 | Wordmark already legible at 21vw (~88px); right hero sidebar hidden; mobile menu only |
| Phone | 420–640 | Sub-nav arrows hidden, centre tagline switches to 4-line `md:hidden` variant; pills wrap to 2-up |
| Large phone | 641–735 | Section 2 H2 at `text-[2.2rem]`; pills wrap to 3-up |
| Tablet portrait | 736–833 | Mobile menu still active; hero left sidebar at `mt-28`; FAQ stays single column |
| Tablet landscape | 834–1023 | `md:` breakpoint — sub-nav full 5-column, right hero sidebar reveals, hamburger hides, container padding to `px-16` |
| Small desktop | 1024–1068 | `lg:` breakpoint — asymmetric grids activate (FAQ 0.8fr/1.2fr, CTA 1.3fr/0.7fr, Footer 1.4fr/1fr); chapter panel splits 35%/65% |
| Desktop | 1069–1440 | Container caps at `max-w-[1400px]`; H2 reaches `text-[3.5rem]`; chapter row names at `text-[2rem]` |
| Wide desktop | ≥1441 | `xl:` — Section 3 left/right heading wrap to row; wordmark continues to scale at 21vw (no cap) |

### Touch Targets

- All interactive elements have a minimum 44×44 hit area. The "View Details" Plus circle is `w-10 h-10` (40px) — increased to 44px via implicit padding from the surrounding `motion.div`. Sub-nav pills are `px-5 py-2.5` for 44px+ height.
- Chapter list rows are `py-8` (32px top + 32px bottom = 64px row height), comfortably tappable.
- FAQ triggers are `py-7` (28px top + 28px bottom + content), exceeding 44px.
- Mobile menu links are `space-y-6` (24px gap) and inherit Orbitron at `text-sm` — minimum 44px per row via line-height.

### Collapsing Strategy

- **Top nav:** desktop 5-column sub-nav → mobile hamburger + slide-in `AnimatePresence` menu (`y:-20 → 0`, 0.3s easeOut) anchored at `top-[150px]`.
- **Sub-nav tagline:** 3-line desktop variant `hidden md:block` → 4-line mobile variant `md:hidden` (line breaks shift to keep `8,888` on its own visual line on phone).
- **Hero sidebars:** left sidebar always visible at `w-[320px]` (scales `mt-20 sm:mt-28 md:mt-32`); right sidebar `hidden md:flex` — disappears entirely under tablet.
- **Pills (Section 2):** wrap naturally, gap-2 maintained; backdrop blur preserved on mobile so the wall texture reads.
- **Two-column panel (Section 3):** `flex flex-col md:flex-row` — vertical stack on mobile with `border-b border-gray-800` between left and right panels; horizontal with `border-r` from `md:` up.
- **FAQ / CTA / Footer grids:** all `lg:` activations — below 1024px every asymmetric grid collapses to single column with content stacking heading → body.
- **Hero typography:** `text-[3.5rem]` mobile → `text-[5rem]` md. Mega wordmark scales fluidly via `21vw` — no breakpoint changes needed.

### Image Behavior

- Hero and section videos: `playsInline muted autoPlay loop` — required for iOS autoplay; no `poster` (the page renders editorially before video mounts at 2800ms).
- Chapter PNGs: served from `cdn.5sdesign.art/projects/Butter-NFT/0[1-5].png`, `crossOrigin="anonymous" referrerPolicy="no-referrer"`. No `srcset` defined — images are already optimized for the 80% container width and rely on the `mix-blend-lighten` knockout, not pixel-perfect resolution.
- Decorative icons: `<img>` with `object-contain` and intrinsic ratio preservation. Lazy-loading not used — the icon weight is trivial and the invert filter requires the asset to be present for hover transitions.

## Iteration Guide

1. **Extend by section, not by component.** New page sections inherit the Canvas ↔ Gallery rhythm — add a light section after a dark one, or vice versa. Don't introduce a third surface.
2. **Variants live inside the existing component table.** A new pill style means adding it to the action-pill / tag-pill list, not inventing a new component. The system has 5 button types; the 6th is a smell.
3. **Use token references (`{colors.canvas}`, `{component.button-primary}`) when documenting.** Never inline a hex outside the Colors section.
4. **Never document hover state.** Apple convention — show default, active, focus. Hover is implementation detail.
5. **Display vs body family rule:** Inter is for content (anything a user reads), Orbitron is for labels (anything a user scans). If a string lives in a sentence, it's Inter. If it lives in a chip, counter, or column title, it's Orbitron.
6. **Shadow restriction holds.** New sections must use hairlines, inversion, or the sand filter for depth. `box-shadow` outside the mobile menu is a regression.
7. **Chrome (sub-nav, footer, mobile menu) uses Orbitron + muted greys. Surface (hero, statement, FAQ, mint widget) uses Inter + Ink/Canvas.** Don't blur the line — chrome that adopts Inter starts reading as content and the museum pose collapses.

## Known Gaps

- **Wallet connection / mint flow states not surfaced.** The Mint button has default + active states; loading, pending-tx, error, and success states aren't documented in the analyzed pages.
- **Form validation states not present.** There are no text inputs or selects on the landing; if a future page (e.g., a holder dashboard) adds inputs, the input radius, focus ring, and error color need to be invented (currently undefined).
- **Dark mode is not a toggle — it's a section rhythm.** A true OS-level dark mode would invert the entire Canvas/Gallery system; the prompt doesn't surface that token map. Treat as out of scope for now.
- **Empty / loading skeletons for the chapter list and FAQ.** The chapters auto-cycle every 3500ms and the FAQ has a default-open index 0 — there's no "no data" state designed.
- **Reduced-motion implementation is described but not coded.** The sand filter must snap to `progress = 1` and video must remain muted under `prefers-reduced-motion: reduce` — the prompt describes the behavior but the component code does not yet branch on `window.matchMedia`.
- **Localization metrics for Orbitron.** Orbitron supports Latin only; if the site ships in non-Latin languages, Orbitron labels will fall back to system mono and tracking-[0.2em] will need re-tuning per script.
