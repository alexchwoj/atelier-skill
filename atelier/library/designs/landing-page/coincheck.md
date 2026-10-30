---
version: "1"
name: "Design System Inspired by CoinCheck"
description: "A near-black #111111 rich-carbon canvas with one infrared #fd5321 ember accent rationed to a single ribbon of moments. The signature surface is a trio of Three.js scenes — a wireframe hero tube, a shader ring field under an inverted light panel, and a dark backdrop — stitched by GSAP pins, scrubbed clip-path wipes, a grayscale logo marquee, and one global ease, so the page reads as a single scroll film rather than a stack of sections."
colors:
  rich-carbon: "#111111"        # page background, dark cards, footer, menu panel (alias core-black/charcoal-ink)
  urban-smoke: "#0f1e1f"        # scrolled-nav bg, menu second prelayer — a barely-green-black
  neural-fog: "#fcfbf8"         # primary text on dark; ALSO the bg of the inverted light Problem/Solution panel
  off-white: "#ededea"          # card text on dark; source of every hairline via /20 and /60 opacity
  pulse-ash: "#c1c4c2"          # rare mid-tone grey (mist / muted) off-white-at-opacity can't cover
  infrared: "#fd5321"           # THE single accent — ember; rationed (alias ember)
  infrared-hover: "#ff6536"     # brighter ember — contact-button hover only
  electric-teal: "#ededea"      # TRAP: overridden to off-white, NOT teal — see Colors
  hairline-20: "#ededea33"      # off-white @ 20% — dividers, card/form borders, FAQ rules
  hairline-60: "#ededea99"      # off-white @ 60% — muted/secondary copy, footer labels
  placeholder: "#6b6f6e"        # input placeholder text
typography:
  primary: { fontFamily: "'General Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif", weights: "400/500/600/700", role: "headings (500, uppercase) + body + nav wordmark" }
  mono:    { fontFamily: "'Azeret Mono', monospace", weights: "500", role: "eyebrows, labels, indices, counters, cursor pill, footer labels — uppercase, 0.04em" }
spacing:
  base: "4px"
  header-height: "4rem (5rem at lg)"
  container: "40rem base; widened to max-w-[1440px] inside section grids"
  footer-pad: "120px top / 40px bottom"
  card-padding: "clamp(24px, 4vw, 40px) (contact form)"
rounded:
  none: "0px"           # outlined CTA, hero edges, raw card faces
  sm: "8px"             # inputs, textarea, contact button, small chips
  card: "20px"          # pinned why/use-case cards, contact form, the rounded-t block seam
  pill: "9999px"        # only truly round chrome — scrolled-nav pill, cursor pill
easing:
  global: "cubic-bezier(.62, .16, .13, 1.01)"   # --easing — every transition
components:
  outlined-cta: ".group/button — ridge-bordered button; two ink bars collapse to nothing on hover as an inset glow blooms in"
  contact-cta: ".tc-btn — the ONLY filled button: bg {colors.infrared}, label {colors.rich-carbon}, mono uppercase, rounded {rounded.sm}"
  nav-draw: ".group/link — four 1px segments draw clockwise around a nav link on hover"
  hero-tube: "Static Three.js wireframe TubeGeometry as LineSegments, perspective + fog — the hero's near→far depth object"
  ring-field: "GLSL ShaderMaterial drawing 6 expanding rings (#141414 → {colors.infrared}) on a transparent quad behind the light Problem panel"
  logo-marquee: ".logo-loop — three infinite grayscale rows, mask-faded edges, 28s linear, pause on hover"
  faq-accordion: ".faq-* — grid-rows 0fr→1fr reveal with a plus→cross rotating icon that tints ember"
  staggered-menu: ".sm-* — right-slide mobile panel behind two prelayers (ember then urban-smoke); labels rise from yPercent 140"
  cursor-pill: "Fixed mono View/Hide pill that follows the pointer (viewCursor)"
---

# Design System Inspired by CoinCheck

## Overview

CoinCheck's marketing canvas is **rich-carbon** `{colors.rich-carbon}` (#111111) — a near-black warm enough to read as engineered carbon rather than pure black or casino neon. The whole dark spine of the page is this one value; there is no surface ladder, no second dark step except `{colors.urban-smoke}` (#0f1e1f), a barely-green-black reserved for the scrolled-nav and the menu prelayer. Default type is **neural-fog** `{colors.neural-fog}` (#fcfbf8); card text and every hairline derive from **off-white** `{colors.off-white}` (#ededea) at `/20` and `/60` opacities. There is no greyscale ramp beyond those — `{colors.pulse-ash}` (#c1c4c2) is the only standalone mid-grey, and it is barely used.

The single chromatic accent is **infrared ember** `{colors.infrared}` (#fd5321), and it is rationed like a resource. It appears on the wordmark period (`COINCHECK.`), exactly **one card per row**, the contact CTA fill, the FAQ open state, link hovers, and the mobile-menu first prelayer — and nowhere else. The contact button's hover lifts to a brighter `{colors.infrared-hover}` (#ff6536); that is the only ember variant. Everything else is carbon, fog, and off-white, with motion doing the persuading.

The governing decision: **most crypto and stablecoin sites go neon-gradient maximal — glowing mesh backgrounds, two or three saturated brand colors, glassmorphic cards, blobby rounding — to signal "future of money." CoinCheck refuses all of it.** It commits to a near-black carbon canvas, one infrared accent rationed to a single ribbon of moments, sharp 8px/20px corners, and zero drop shadows — then spends its entire visual budget on three Three.js scenes and GSAP scroll choreography. The confidence comes from restraint plus motion, not from color count. The one tonal surprise the system permits is a mid-page inversion to a **light** `{colors.neural-fog}` panel for "the problem" — a held breath before the dark solution resumes — and it earns its place precisely because nothing else breaks the carbon.

Display and body run **General Sans** (Fontshare, weights 400–700); headings sit at weight **500** and are almost always `uppercase`. Mono labels run **Azeret Mono** at weight 500 (uppercase, 0.04em tracking) for eyebrows, indices, counters, and footer labels. The page rhythm is **one continuous scroll film**: a video hero with a wireframe 3D tube, a pinned light Problem panel over a shader ring field, two pinned-card scroll columns over a dark backdrop canvas, a grayscale logo marquee, a grid-rows FAQ, and a dark contact footer — every transition on one global ease (`{easing.global}`).

**Key Characteristics:**
- **Rich-carbon canvas** (`{colors.rich-carbon}` #111111) — a near-black warm carbon; no gradient on the background beyond the hero scrim, no surface ladder.
- **One infrared ember accent** (`{colors.infrared}` #fd5321), rationed to the wordmark dot, one card per row, the contact CTA, the FAQ open state, link hovers, and the menu prelayer — never on body, headings, or a second button.
- **General Sans heads at weight 500, almost always `uppercase`**, paired with **Azeret Mono 500** labels (0.04em tracking) — the mono is what makes every section read as instrumented.
- **Three Three.js scenes are the signature** — a static wireframe hero tube, a transparent shader ring field under the light Problem panel, and a dark decorative backdrop behind the pinned cards.
- **GSAP scroll grammar** — ScrollSmoother + ScrollTrigger drive section pins, scrubbed `clip-path` wipes, split-text reveals, and pin-stacking overlapping cards.
- **Off-white-at-opacity is the only greyscale** — `{colors.hairline-20}` (#ededea33) for borders/dividers, `{colors.hairline-60}` (#ededea99) for muted copy; no new greys are introduced.
- **Sharp corners, zero drop shadows** — 8px on inputs, 20px on big cards, pill only on truly round chrome; depth comes from scrim + inset-glow + hairlines + the 3D scenes.
- **One mid-page light inversion** — a `{colors.neural-fog}` Problem panel is the single tonal surprise the system permits.
- **It does NOT** ship a second saturated color, a gradient on the carbon, glassmorphism, blobby rounding, a `box-shadow` for elevation, a third font, or a full light theme.

## Colors

> Source pages: the single-page CoinCheck landing — fixed header, video hero with wireframe tube, the light Problem panel over the ring shader, the dark Solution cards, the two pinned why/use-case columns, the logo marquee, the FAQ accordion, and the dark contact footer.

### Brand & Accent
- **Infrared** (`{colors.infrared}` #fd5321): The single ember — the only saturated color in the system. Used **only** on the wordmark period (`COINCHECK.`), exactly **one card per row** (`bg-infrared`, card #3 in Solution and the ember card in Why/Use Cases), the contact CTA fill, the FAQ open state (`.faq-q:hover`, the open icon, the open question), link / `.tc-link` hovers, and the mobile-menu first prelayer + active menu-item color. Never on body, headings, large fills, or a second button. This rationing **is** the brand.
- **Infrared Hover** (`{colors.infrared-hover}` #ff6536): A brighter ember — the hover lift on the contact button (`.tc-btn:hover`) only. The single accent variant in the system.

### Surface
- **Rich Carbon** (`{colors.rich-carbon}` #111111): The page background, the dark cards, the footer, and the menu panel. Near-black but warm enough to read as carbon, not pure black. The whole dark spine of the page is this one value; the aliases `--color-core-black` and `--color-charcoal-ink` resolve to the same hex.
- **Urban Smoke** (`{colors.urban-smoke}` #0f1e1f): The scrolled-nav background and the menu's second prelayer — a barely-green-black that reads as a deeper shade of carbon, never as a color.

### Text
- **Neural Fog** (`{colors.neural-fog}` #fcfbf8): Primary type on the dark canvas — headlines, body, nav. It is **also** the background of the inverted light Problem/Solution panel: the same off-white serves as ink on dark and as canvas on light. That double duty is deliberate — there is no separate "light bg" token.
- **Off-White** (`{colors.off-white}` #ededea): Card text on dark, and the source of every hairline via opacity — `{colors.hairline-20}` (#ededea33) for dividers and borders, `{colors.hairline-60}` (#ededea99) for muted and secondary copy.
- **Pulse Ash** (`{colors.pulse-ash}` #c1c4c2): The mist / muted grey reserved for the rare mid-tone that off-white-at-opacity can't cover. Barely used.

### Semantic
- None on the marketing surface. There are no success/error/warning colors — the contact form is `action="#"` and unwired, so validation states are not surfaced. The only overlay is the hero scrim gradient (`rgba(17,17,17,…)`).

### The electric-teal trap (documented quirk)
- **Electric Teal** (`{colors.electric-teal}` #ededea): A documented override, **not a teal.** The compiled Tailwind bundle (`main.min.css`) defines color tokens inside an `@layer theme` block, and every color utility resolves through `var(--color-*)`. A second, *unlayered* stylesheet — `assets/coincheck-theme.css` — is loaded **after** the bundle and redefines `--color-electric-teal` to `#ededea`. Because unlayered declarations beat `@layer` declarations in the cascade, the utility class `bg-electric-teal` (used on 3 cards) renders **off-white**, not teal. Do not "fix" this to a real teal — the override is intentional, and those cards are meant to read off-white. Only `bg-infrared` (#fd5321) is the accent fill. The legacy aliases (`--color-ember`, `--color-bone-canvas`, `--color-signal-blue #007aff`, etc.) are kept in `:root` for parity but are not part of the rendered palette.

## Typography

### Font Family
- **General Sans** — Fontshare CDN, weights 400/500/600/700; fallback `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif`. Carries headings, body, and the nav wordmark. Headings are weight **500** and almost always `uppercase`; the mobile menu items push to **600**. Imported at the top of the theme CSS: `@import url('https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap')`.
- **Azeret Mono** — self-hosted `.otf`, weight **500** only; fallback `monospace`. Carries eyebrows, section labels, card indices (`01 / 03`, `CHECKOUT`), the floating cursor pill, footer labels, and the legal row. Declared via an `@font-face` with `font-display: swap`. The mono is what makes every section read as instrumented rather than as marketing.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.primary}` h2 | 2.25rem (→ larger on hero) | 500 | 0.95 | uppercase | Hero headline (split L/R), Problem heading |
| `{typography.primary}` h4 | 1.75rem | 500 | 1.0 | uppercase | Why / Use-case / FAQ headings, contact title |
| `{typography.primary}` h5 | 1.5rem | 500 | 1.0 | uppercase | Solution + Ecosystem headings, card titles |
| `{typography.primary}` h6 | 1.125rem | 500 | 1.1 | uppercase | Small heads, FAQ question text |
| problem-title | clamp(1.875rem, 4.5vw, 3rem) | 500 | (h2) | uppercase | The Problem heading override |
| p1 | 0.875rem | 400 | 120% | 0 | Body copy, ledes |
| p3 | 0.875rem | 400 | 115% | 0 | Tighter body (Problem body) |
| p1-mono | 0.75rem | 500 | 120% | uppercase | Mono eyebrows / larger labels (Azeret) |
| p2-mono | 0.688rem | 500 | 0.938rem | 0.04em, uppercase | Mono eyebrows / small labels |
| p3-mono | smallest | 500 | — | uppercase | The smallest mono label |
| sm-panel-item | clamp(2.5rem, 12vw, 4rem) | 600 | 1.0 | -1.5px, uppercase | Mobile menu items only |

### Principles
- **Uppercase 500 is the heading voice, not an exception.** Heads are General Sans weight 500, almost always uppercase. Don't set a heading in sentence case or above 600 — only the mobile menu reaches 600.
- **The section triad is mandatory.** Every section opens with a mono eyebrow (`.p1-mono` / `.p2-mono`) + an uppercase heading + a `{colors.hairline-20}` divider. That triad is the rhythm everywhere.
- **Negative tracking is reserved.** Only the big mobile-menu items pull tracking negative (-1.5px); page headings keep their natural width. Mono labels hold +0.04em.
- **Mono is for instrumentation only** — eyebrows, indices, counters, the cursor pill, footer labels. Never set a paragraph in Azeret Mono.
- **Headings reveal on scroll.** `splitTextReveal()` splits and reveals each heading on scroll-in; the hero `.h2` is additionally split across left/right alignment (`hero-title--left` / `hero-title--right`).

### Note on Font Substitutes
Both families are free, so no substitution is needed. **General Sans** is open-licensed via **Fontshare** — load it directly with the `@import` above. **Azeret Mono** is open-licensed via **Google Fonts**, but here it is **self-hosted** as a single `.otf` at weight 500; reproduce the `@font-face` verbatim rather than swapping in "a similar mono" — the weight-500 self-host is the system of record. If General Sans is ever unavailable, fall back to a neutral grotesk (`ui-sans-serif` / `system-ui`) and accept a slightly looser uppercase setting; never substitute a commercial display face.

## Layout

### Spacing System
- **Base unit**: `{spacing.base}` (4px). The page leans on Tailwind's scale plus a few fixed values.
- **Tokens**: footer padding `{spacing.footer-pad}` (120px top / 40px bottom); contact-form padding `{spacing.card-padding}` (clamp 24–40px); marquee row gap 24px; logo item gap 48px.
- Header height: `{spacing.header-height}` — 4rem, growing to 5rem at `lg` (via `--header-height`).
- Section heads use a `{colors.hairline-20}` divider with ~15px padding/margin around it.

### Grid & Container
- Base `.container` is `{spacing.container}` (max-w 40rem); section grids widen to **max-w 1440px** on a **12-col grid**.
- Column splits in the build: Why / Use-Cases run a 12-col grid with a `md:col-span-5` text column beside the card stack; Ecosystem runs `lg:col-span-4` text + `lg:col-span-8` marquee; FAQ runs `md:col-span-4` heads + the answer list.
- Solution cards are a flex row that becomes `33.3333%` each at `≥768px` (`#ethos-cards > li`); below that they stack full-width.
- The contact footer is a flex column (`.tc-grid`) that becomes a space-between row at `≥1024px`, form capped at 640px.

### Whitespace Philosophy
The dark carbon between cinematic beats IS the whitespace. Each section is given room to pin, wipe, or reveal before the next begins; the eye should rest on carbon between the hero, the light inversion, and the card columns. Negative space is what lets the single ember and the Three.js motion register — crowd the page and both become noise. The light Problem panel is itself a kind of whitespace: a held breath of inverted tone before the solution resumes in carbon.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow, no border | Default for type and most surfaces on `{colors.rich-carbon}` |
| 1 (hairline) | 1px `{colors.hairline-20}` (#ededea33) | Section dividers, card/form borders, FAQ rules, footer top rule |
| 2 (scrim) | `linear-gradient(180deg, rgba(17,17,17,.6)…rgba(17,17,17,.88))` | The hero video overlay only |
| 3 (inset glow) | `box-shadow: inset 0 0 25px` (white / carbon) | The `{components.outlined-cta}` on hover only |
| 4 (3D depth) | Three.js perspective + fog (tube), shader rings, dark backdrop canvas | The hero, the Problem panel, and the why/use-cases block |

Drop shadows are banned across the system. Depth comes from four devices only — (1) the hero scrim gradient, (2) the inset glow that lights the single outlined CTA on hover, (3) hairlines at `{colors.hairline-20}`, and (4) the three Three.js scenes. A `box-shadow` under a card would immediately drag the page from engineered-carbon toward generic-SaaS.

### Decorative Depth
- **The three Three.js scenes** carry decorative depth — perspective + fog on the wireframe tube, expanding shader rings under the light panel, and the dark backdrop canvas behind the pinned cards.
- **No atmospheric gradients on the carbon, no glassmorphism, no spotlight cards.** The only gradient is the hero scrim.
- **The light Problem inversion** doubles as a depth device — the single tonal break that frames "the problem" before the dark solution resumes.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | The outlined CTA, hero edges, raw card faces |
| `{rounded.sm}` | 8px | Form inputs, textarea, the contact button, small chips |
| `{rounded.card}` | 20px | Pinned why/use-case cards, the contact form, the dark `rounded-t-[20px]` block seam |
| `{rounded.pill}` | 9999px | Only truly round chrome (the scrolled-nav pill state, the cursor pill) |

Sharp corners are the default; the system reads as precise because most edges are square or only lightly rounded (8px). 20px is the largest radius, reserved for the big card surfaces and the section seam (`#investors-founders` is `rounded-t-[20px] -mt-[20px]` so the dark block tucks under the light one). No "blobby" rounding anywhere.

### Photography & Illustration Geometry
- **Hero**: a full-bleed looping `<video>` (`object-fit: cover`) behind the `{colors.rich-carbon}` scrim, hidden entirely under `prefers-reduced-motion` (the poster `hero-poster.jpg` carries the frame).
- **Solution images**: abstract renders (`applications.png`, `core.png`, `data.png`), `object-contain`, `max-h-[300px]`.
- **Pinned-card icons**: line-style SVGs (`why-1..3`, `use-1..3`), 32px on mobile / 60px on desktop, top-right of each card.
- **Logo marquee**: 46 ecosystem mark SVGs rendered `grayscale(1)` at 40px height, `opacity .7` → 1 on hover, edges mask-faded.
- The pinned why/use-case cards use `aspect-[1.3/1]` and `{rounded.card}` (20px).

## Components

### Buttons

**`outlined-cta`** (`{components.outlined-cta}` — `.group/button`) — the signature button.
- A `1px ridge` border with two ink bars (`::before` bottom / `::after` top, each `94%` wide, `32%` tall) sitting just outside the top and bottom edges. On hover the two bars `scale(0)` to nothing while an `inset 0 0 25px` glow blooms in (white on the `light` theme, carbon on the `dark` theme); the box-shadow transitions over `0.5s ease`. Square corners (`{rounded.none}`), label a roll-up mono pair. Used for the hero **START BUILDING** CTA (`data-theme="light"`). A `data-theme="dark"` variant flips the bars and glow to carbon for use on light panels.

**`contact-cta`** (`{components.contact-cta}` — `.tc-btn`) — the only **filled** button.
- Background `{colors.infrared}`, label `{colors.rich-carbon}` in Azeret Mono 0.75rem uppercase 0.04em, rounded `{rounded.sm}` (8px), full-width, padding 14px. Hover brightens to `{colors.infrared-hover}` (#ff6536); active `scale(0.985)`. Reserved for the contact form's **Send Message** — there is no second filled button anywhere.

### Cards & Containers

**`solution-card` / `pinned-card`** — the dominant card type.
- On dark: `{colors.rich-carbon}` face with `{colors.neural-fog}` text, OR `bg-electric-teal` (renders **off-white**) with carbon text, OR `bg-infrared` (ember) — **exactly one ember card per row**. Each carries an uppercase split-revealed `h4`/`h5` title, a mono index (`01 / 03`, or a label like `CHECKOUT`), and a body. Pinned why/use-case cards are `aspect-[1.3/1]`, `{rounded.card}` (20px), with a 60px line icon top-right. On desktop the three cards **pin-stack and overlap** (`topOffset = 80 + 80*index*0.25`); on mobile they reveal via `clip-path`.

**`form-shell`** (`.tc-form`) — the contact form container.
- A `1px {colors.hairline-20}` bordered panel, `{rounded.card}` (20px), padding `{spacing.card-padding}`, transparent fill — the one place a 20px-radius outlined container appears on dark.

### Inputs & Forms

**`text-input` / `text-input-focused`** (`.tc-input` / `.tc-textarea`)
- Background `{colors.rich-carbon}`, text `{colors.neural-fog}`, `1px {colors.hairline-20}` border, rounded `{rounded.sm}` (8px), padding 12×14px, General Sans 0.875rem, placeholder `{colors.placeholder}` (#6b6f6e).
- Focused: border goes `{colors.infrared}`, no outline. Textarea `min-height: 120px`, vertical resize. Labels above in Azeret Mono 0.688rem uppercase 0.04em at `{colors.hairline-60}`.

### Navigation

**`top-nav`** — fixed header (`z-50`, full width).
- Background `{colors.rich-carbon}`. On scroll past ¼ viewport it gains `-scrolled` (shrinks to an 8px pill, bg → `{colors.urban-smoke}`); scrolling down past one viewport hides it, scrolling up shows it. Wordmark left (`.sm-brand`): `COINCHECK` in General Sans 600 `text-[20px] tracking-tight` with a trailing ember period — `COINCHECK<span style="color:#fd5321">.</span>`. The ember dot **is** the only color in the wordmark; do not add a separate logo mark.

**`nav-draw`** (`{components.nav-draw}` — `.group/link`)
- Each desktop nav link draws a 1px border around itself on hover: four absolutely-positioned `#fff` segments animate clockwise — top (`0.1s`), right (`+0.1s`), bottom (`+0.2s`), left (`+0.3s`) — and the label text goes white. The link also carries a roll-up mono label (two stacked `.p2-mono` spans, hover translates `-translate-y-full`). The 2nd nav item is reordered first via CSS (`nth-child(2){order:-1}`).

### Accordion

**`faq-accordion`** (`{components.faq-accordion}` — `.faq-*`)
- A bordered list (top + per-item `{colors.hairline-20}` rules). Each `.faq-q` is a full-width General Sans 500 1.125rem button; on hover the text goes `{colors.infrared}`. The `.faq-answer` is a `display:grid` whose `grid-template-rows` transitions `0fr → 1fr` over `0.35s {easing.global}` when `.is-open`; the inner `p` fades up (`translateY(4px) → none`) with a 0.1s delay, copy at `{colors.hairline-60}`, `max-width: 60ch`. The `.faq-icon` is a plus made of two 2px lines; open rotates it `45deg` (plus → cross) and tints it ember. Only one item open at a time (Alpine `open` index).

### Signatures (Three.js + scroll)

**`hero-tube`** (`{components.hero-tube}`)
- A static (non-interacting) `TubeGeometry` rebuilt as connected `LineSegments`, drawn with perspective + `Fog(0x111111, 0..15)` so it reads big-near → small-far. Exact constants: `FOV 60`, camera `z 50`, `ARC_LEN 22`, `RADIUS 1.5`, `TUBULAR/RADIAL 60`, object position `{4.9, -1.6, 36}`, rotation `{0, -117, 11}°`, `LINE_COLOR 0xd1d1d1`, `opacity 0.5`. Absolutely positioned in the hero behind the content (`<canvas data-hero-rings>`). Do not change the constants — they are tuned to frame the headline.

**`ring-field`** (`{components.ring-field}`)
- A custom GLSL `ShaderMaterial` drawing **6** expanding rings, color interpolated `#141414 → {colors.infrared}`, on a **transparent** orthographic quad so the light `{colors.neural-fog}` panel shows through. Config (verbatim): `speed 0.6`, `ringCount 6`, `attenuation 11`, `lineThickness 2`, `baseRadius 0.62`, `radiusStep 0.13`, `opacity 0.75`, `noiseAmount 0.06`. Runs only while in view (IntersectionObserver); `prefers-reduced-motion` renders one static frame. The canvas is masked top/bottom with a transparent→black→transparent gradient.

**`dark-backdrop`** — the third Three.js scene.
- Fills `#investors-founders` (`<canvas x-ref="canvas">`) as a dark decorative field behind the why/use-cases cards, driven inside the bundle.

**`logo-marquee`** (`{components.logo-marquee}` — `.logo-loop`)
- Three infinite rows (`--left`, `--right`, `--left`), each a duplicated track animated by CSS keyframes (`translateX(0) → -50%`) at **28s linear**, edges mask-faded (`linear-gradient(90deg, transparent, #000 8% … 92%, transparent)`). Items are `grayscale(1)` at 40px, `opacity .7 → 1` on hover; hovering a row pauses it (`animation-play-state: paused`). Stopped entirely under `prefers-reduced-motion`.

**`scroll-wipes`** — GSAP section reveals.
- The Solution section enters with a scrubbed `clipPath: inset(0 100% 0 0)` wipe (`scrub:1`); per-card mobile reveals use `clipPath: inset(0 0 100% 0)`. The Problem panel **pins** an overlay on desktop (`pinSpacing:false`) while heading/body fade from `y:64, opacity:0, power4.inOut, 1.2s`.

### Mobile Menu

**`staggered-menu`** (`{components.staggered-menu}` — `.sm-*`)
- A right-slide panel (`{colors.rich-carbon}`) behind two prelayers — first `{colors.infrared}` (ember), then `{colors.urban-smoke}`. Items are `clamp(2.5rem, 12vw, 4rem)` uppercase General Sans 600 with `-1.5px` tracking and a leading-zero counter in ember; labels animate up from `yPercent:140, rotate:10` with a 0.1s stagger. The `.sm-toggle` shows a "Menu/Close" text-roller and a plus→cross icon (`.sm-icon` rotates `225deg`). A mandatory `@media (min-width:1024px){.sm-overlay,.sm-toggle{display:none!important}}` overrides Tailwind's `lg:hidden` — keep it. Driven by Alpine `mobileMenuOpen` → `window.CoinCheckMenu.set(bool)`.

### Cursor & Footer

**`cursor-pill`** (`{components.cursor-pill}`) — a fixed mono `View/Hide` pill that follows the cursor (`viewCursor()` Alpine helper), giving the page a single instrumented cursor affordance over interactive zones.

**`footer`** (`.tc-footer`)
- Background `{colors.rich-carbon}`, padding `{spacing.footer-pad}` (120px/40px). Left `.tc-info` (max-w 460px): mono eyebrow + uppercase `h4`-scale title + body, then a details list with Azeret-mono `{colors.hairline-60}` labels and `{colors.neural-fog}` links that hover ember. Right: the `.tc-form` panel. Bottom `.tc-bottom`: a `{colors.hairline-20}` top rule + mono `© 2026 CoinCheck` legal row at `{colors.hairline-60}`.

## Do's and Don'ts

### Do
- Keep the canvas `{colors.rich-carbon}` (#111111) — warm near-black, gradient-free except the hero scrim.
- Ration `{colors.infrared}` to the wordmark dot, one card per row, the contact CTA, the FAQ open state, link hovers, and the menu prelayer — and nowhere else.
- Set headings in General Sans **500, uppercase**, paired with an Azeret Mono eyebrow and a `{colors.hairline-20}` divider — the section triad.
- Derive every hairline and muted tone from `{colors.off-white}` at `/20` (#ededea33) and `/60` (#ededea99).
- Treat the three Three.js scenes + GSAP pins/wipes as the motion budget; reveal every heading with `splitTextReveal()`.
- Run every transition on the global ease `{easing.global}`, and keep corners sharp — 8px on inputs, 20px on big cards, pill only on truly round chrome.

### Don't
- **Don't spread ember** onto body, headings, large fills, or a second button — the rationing is the brand.
- **Don't "fix" `bg-electric-teal` to a teal** — `--color-electric-teal` is overridden to `#ededea`; those 3 cards are meant to render off-white. Only `bg-infrared` is the accent fill.
- Don't add a second saturated color, or any gradient on the carbon beyond the hero scrim.
- Don't add a `box-shadow` for elevation — depth is scrim + inset-glow + hairlines + the 3D scenes.
- Don't round UI into "blobby" shapes or exceed 20px radius on surfaces; don't ship glassmorphism.
- Don't use a third font, sentence-case a heading, push a heading above 600, or set body in Azeret Mono.
- Don't ship a full light-mode page — the only light surface is the mid-page Problem/Solution inversion.
- Don't drop a `prefers-reduced-motion` guard or swap the `{easing.global}` curve.
- Don't rename the legacy section IDs (`#investors-section` = WHY, `#founders-section` = USE CASES, `#ethos` = SOLUTION, `#partners` = ECOSYSTEM, `#focus`/`#focus-industries` = PROBLEM) — they are wired to ScrollTriggers and the Three.js canvases.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Phone | ≤767px | Nav → `.sm-*` staggered menu; Solution cards stack full-width; pinned cards become `clip-path` reveals; icons at 32px; header at 4rem |
| Tablet | 768–1023px | `#ethos-cards` go 33.333% per row; why/use-case cards pin-stack (if also ≥666px tall); icons at 60px; `.hero-para-right` right-aligns |
| Small desktop | 1024–1439px | Desktop nav with draw-borders appears; `.sm-toggle`/`.sm-overlay` forced `display:none`; footer `.tc-grid` becomes a row; header grows to 5rem |
| Wide | ≥1440px | Section grids cap at the 1440px 12-col container; marquee + 3D scenes fill full width |

### Touch Targets
- Minimum 44×44 hit area; nav links, FAQ questions, and the menu toggle clear this via padding.
- The mobile menu items are oversized (`clamp(2.5rem…4rem)`) — comfortably tappable.
- The cursor pill is a desktop affordance; touch surfaces rely on the native tap.

### Collapsing Strategy
- **Nav**: full inline draw-border links (`lg`) → `.sm-*` staggered slide-in menu below 1024px; the wordmark stays.
- **Card columns**: pin/overlap **only** at `≥768px` **and** viewport `≥666px` tall; everything else uses stacked `clip-path` reveals.
- **Hero**: `h-dvh min-h-[550px]`; the headline scales via the `.h2` token and the left/right split.
- **Footer**: `.tc-grid` column → row at `≥1024px`, form capped at 640px.

### Image Behavior
- Hero `<video>` is `autoplay muted loop playsinline` with a poster; hidden under `prefers-reduced-motion` (the poster carries the frame).
- Solution PNGs are `object-contain max-h-[300px]`; logo marks are grayscale 40px.
- Three.js canvases resize on `window.resize`; the ring shader and the backdrop canvas start/stop via IntersectionObserver.
- Every motion block falls back to static under `prefers-reduced-motion` (video hidden, marquee stopped, shaders render one frame, menu opens instantly).

## Iteration Guide

1. New page (docs home, pricing, dashboard shell, changelog)? Start from `{colors.rich-carbon}` + uppercase General Sans 500 heads + an Azeret Mono eyebrow + a `{colors.hairline-20}` divider. The shell is the brand.
2. When introducing a section, decide first whether it lives on dark carbon or borrows the one permitted light inversion — never a third tone.
3. Keep the ember rule absolute — a new accent need is answered by `{colors.infrared}` on a small mark or one card, or by nothing, never by a new color.
4. Reference everything by token name — `{colors.X}`, `{rounded.X}`, `{components.X}` — so a value change cascades.
5. Keep the three type roles distinct: General Sans 500 uppercase for heads; General Sans 400 (0.875rem) for body; Azeret Mono 500 (0.688–0.75rem, 0.04em, uppercase) for labels.
6. The shadow restriction holds: a surface that "needs depth" gets a hairline or a 3D treatment, never a `box-shadow`.
7. Respect the electric-teal override: if you need an off-white card, `bg-electric-teal` is fine (it renders off-white); never reach for a real teal.

## Known Gaps
- Beyond the single landing page, later-page layouts (docs home, pricing, dashboard shell, changelog, legal) are **not** in the build — design them in the same dark-carbon language and treat the section triad (mono eyebrow + uppercase head + hairline) as the contract. This is the largest extrapolation in this document.
- The exact GLSL of the ring shader and the dark backdrop canvas, plus the full GSAP timeline values beyond those quoted, live in the source scripts and bundle — reproduce them verbatim rather than re-deriving.
- Form validation states (error, success, disabled, loading) are not surfaced — the contact form is `action="#"` and unwired. Design error/success in ember / `{colors.hairline-60}`, consistent with the input focus treatment.
- A full light-mode counterpart is intentionally absent; the only light surface is the mid-page Problem/Solution inversion (`{colors.neural-fog}` panel). A real light theme would need its own governing decision, not a recolor.
- The `{colors.pulse-ash}` mid-grey and several legacy `:root` aliases (`--color-signal-blue`, `--color-bone-canvas`, etc.) are defined but barely used; ignore the aliases — the rendered palette is carbon / fog / off-white / ember.
