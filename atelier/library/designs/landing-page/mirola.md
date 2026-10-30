---
version: "1"
name: "Mirola — AI Visual Production Studio Landing"
description: "A dark, editorial landing for an AI visual production studio. Near-black canvas (#020108), elevated card surface (#111), oversized SF Pro Display headlines, a single warm orange dot (#fd7b03) on every section eyebrow, and an orbital circular image carousel that counter-rotates so every showcase card stays upright while the ring spins."
colors:
  main-bg: "#020108"
  second-bg: "#111111"
  menu: "#272727"
  lines: "#2a2a30"
  fonts-100: "#ffffff"
  fonts-64: "rgba(255,255,255,0.64)"
  fonts-50: "rgba(255,255,255,0.5)"
  fonts-30: "rgba(255,255,255,0.3)"
  fonts-20: "rgba(255,255,255,0.2)"
  accent-orange: "#fd7b03"
  accent-orange-2: "#ff6b02"
  accent-blue: "#146ef5"
typography:
  display:
    fontFamily: "SF Pro Display"
    weights: "400 / 500 / 700"
    role: "headlines, body, nav, every visible text — self-hosted .woff2 with font-display: swap"
spacing:
  base: "Tailwind v4 default (4px)"
  section: "section-padding utility — 6rem 1.5rem mobile, 8rem 2rem ≥768px"
  container: "container-x — max-width 1280px, centered, full-width"
rounded:
  pill: "9999px (buttons, tag-chips, sticky header)"
  card: "14px → 24px (orbital cards 14px, image frames 2xl/3xl)"
components:
  orbital-carousel: "8 portrait product cards orbiting an invisible center. The rotor spins 360° / 40s; each slot uses triple-transform (rotate(a) translate(0,-r) rotate(-a)) and the keeper inside counter-rotates so every image stays upright. Dashed center ring. Disabled under prefers-reduced-motion."
  section-eyebrow: "Inline-flex span (`.eyebrow`) with a 6×6 #fd7b03 dot, uppercase 13px label, letter-spacing 0.15em, color rgba(255,255,255,0.5). Used on every section kicker — the only place orange appears."
  pill-nav: "Fixed sticky header pill — container-x with rounded-full border-[#2a2a30] bg-[#020108]/70 backdrop-blur-xl. LogoMark + 'Mirola' on left, link cluster center, btn-ghost + btn-primary right."
  faq-accordion: "Native <details> rows separated by 1px var(--lines) hairlines. Plus icon rotates 45° to an X via transform on [open]."
  marquee: "CSS keyframe marquee — translateX 0 → -50% over 30s linear infinite, mask-image fades 80px edges on both sides for the Trusted By strip."
---

# Mirola — AI Visual Production Studio Landing

> Fivefold showcase. Pairs with the Mirola prompt. Use this file to keep Mirola's editorial confidence when you add new pages — it should always read as a premium AI-native studio, never a generic SaaS template.

## Overview

Mirola is **a dark, editorial landing for an AI visual production studio aimed at commerce brands.** Near-black canvas, oversized SF Pro Display headlines, a single warm orange dot on every section eyebrow, and an orbital carousel as the signature hero device. There is no gradient mesh, no purple, no indigo, no neon glass card — the entire AI-SaaS landing playbook has been refused. What replaces it: a confident editorial monochrome where the only color event is the 6×6 orange dot that opens each section.

The governing decision: **studio output, software speed — and the page itself must look like the studio.** Most AI-tool landings shout — neon gradients, dashboard mock screenshots, hero badges promising "10× faster." Mirola does the opposite. The hero is a slow, mechanical orbit of eight portrait shots circling an invisible center, each card counter-rotated so it stays upright while the ring spins. The headlines run at clamp(2.5rem, 8vw, 5.5rem) so the brand reads as a magazine cover, not a product page. The accent palette holds itself to a single warm orange dot — never a fill, never a gradient — so the editorial pose stays intact. The bet: a creative studio's landing must demonstrate taste in the first scroll, not promise it in a tagline.

The system extends across surfaces through a small, repeated set of moves: an `.eyebrow` opens every section, a quiet `0X — Capabilities` index closes the right side, 1px `{colors.lines}` hairlines do every separating job a shadow would normally do, and the only pill that isn't `9999px` is a card. New pages should never introduce a second accent, a gradient, or a shadow heavier than the 0 12px 32px lift on orbital cards. If a future surface needs to feel "louder," the answer is bigger type — never more color.

**Key characteristics:**
- **Near-black canvas** (`{colors.main-bg}` — #020108) with an elevated card surface (`{colors.second-bg}` — #111). The whole site lives in one tonal range; lift comes from hairlines, not from raising backgrounds.
- **SF Pro Display** at 400 / 500 / 700, self-hosted as `.woff2` with `font-display: swap`. One family, one role per weight. Body uses `-webkit-font-smoothing: antialiased`.
- **Orange dot as the only color event** — `{colors.accent-orange}` (#fd7b03) renders only as the 6×6 dot at the start of `.eyebrow`. No orange fill, no orange text, no orange border anywhere else.
- **Orbital carousel hero** — 8 portrait shots on a 200px-radius ring, 40s linear rotation, each card counter-rotated so it stays upright. Dashed center ring. The signature visual.
- **Pill-everything** — header, primary CTA, ghost CTA, tag chips, trusted-by chips are all `border-radius: 9999px`. Cards are softer 14–24px radius. No square buttons.
- **Hairline borders** — 1px `{colors.lines}` (#2a2a30) for every divider, card border, and section-top rule. No drop shadows except a single 0 12px 32px shadow on the orbital cards.
- **GSAP + Lenis** drive every scroll movement — Lenis at `duration: 1.1` with the custom ease `1.001 - 2^(-10t)`, GSAP `power3.out` at 0.9s on `y` + `autoAlpha` only. No bounce, no scale entrances.
- **Section eyebrows are the only "badge" pattern** — every section opens with an `.eyebrow` (orange dot + uppercase label) and closes with a quiet `0X — Capabilities` index on the right. Replaces all corner-radius badges and pill labels.

## Colors

> **Source pages analyzed:** Mirola landing — Header, Hero + Orbital Carousel, Platform statement, AI Features (3 pillars), How It Works + Trusted By marquee, Workflow grid, FAQ, Footer. The palette is uniform across all eight sections; no section introduces a unique tone.

### Surface
- **Main background** (`{colors.main-bg}` — #020108): The full canvas. Almost-black with a trace of blue so it doesn't read as pure void. Applied to `<body>`, the header pill base, every section base, and the inside of the workflow image frames.
- **Second background** (`{colors.second-bg}` — #111111): Elevated card surface — workflow cards, the active tab card in How It Works, the inside of every product-image frame, the orbital card fill behind the image.
- **Menu surface** (`{colors.menu}` — #272727): Reserved for the mobile-menu fill and rare hover lifts on opaque surfaces. Not used in the default desktop view.

### Text
- **fonts-100** (`{colors.fonts-100}` — #ffffff): The H1, H2, H3, active tab title, button labels, and bullet-list items. Reserved for content the eye should land on first.
- **fonts-64** (`{colors.fonts-64}` — rgba(255,255,255,0.64)): Body prose, nav links in default state, card body copy, tag-chip text. The default reading tone.
- **fonts-50** (`{colors.fonts-50}` — rgba(255,255,255,0.5)): Eyebrow labels, section indices (`0X — Capabilities`), the second-line muted halves of two-line headlines, FAQ small print.
- **fonts-30 / fonts-20** (`{colors.fonts-30}` / `{colors.fonts-20}`): Inactive states, ultra-quiet legal lines, hairline glyph tints. Used sparingly.

### Brand & Accent
- **Accent orange** (`{colors.accent-orange}` — #fd7b03): The 6×6 dot at the start of every `.eyebrow`. Never a fill, never a text color, never a hover state.
- **Accent orange 2** (`{colors.accent-orange-2}` — #ff6b02): Held in the token set as the warm-orange alternate for future motion or hover lifts; currently unused on the landing.
- **Accent blue** (`{colors.accent-blue}` — #146ef5): Reserved for inline links and rare interactive accents on downstream pages. Not used on the live landing.

### Hairlines & Borders
- **Lines** (`{colors.lines}` — #2a2a30): The site's only structural color. Every 1px divider, card border, header pill border, FAQ row hairline, tag-chip border, section-top rule. If a line is visible, it is this token.
- **Transparent white wash** (rgba(255,255,255,0.03)): The almost-invisible fill behind `.tag-chip`. Reads as "lifted" without breaking the monochrome.

**Constraint** (verbatim from prompt): "No purple, no indigo. Accent palette is the warm orange (#fd7b03 / #ff6b02) plus a deep blue link accent (#146ef5). The orange only appears as the tiny 6×6 dot at the start of every eyebrow."

## Typography

### Font Family
- **SF Pro Display** — `"SF Pro Display", Arial, sans-serif`. Self-hosted from `public/fonts/` as `.woff2` (400 Regular, 500 Medium, 700 Bold). Declared via three `@font-face` blocks at the top of `app/globals.css` with `font-display: swap`. Mapped via Tailwind v4 `@theme inline` as `--font-display`.
- **No serif, no mono.** SF Pro Display carries everything — wordmark, hero, body, nav, legal.
- **OpenType note:** Body uses `-webkit-font-smoothing: antialiased` on `<body>`. No tabular-nums or alternate stylistic sets are explicitly enabled.

### Hierarchy
| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `.h1-display` | clamp(2.5rem, 8vw, 5.5rem) | 500 | 1.0 | -0.025em | Hero headline (one per page) |
| `.h2-display` | clamp(2.25rem, 6.5vw, 5rem) | 500 | 1.05 | -0.02em | Section titles (Platform, How, Workflow, FAQ, Footer CTA) |
| `.h3-display` | clamp(1.5rem, 4vw, 3.25rem) | 500 | 1.1 | -0.015em | AI Feature pillar titles |
| `.h4-display` | clamp(1.5rem, 3vw, 2.25rem) | 500 | 1.2 | default | Reserved for future sub-blocks |
| Workflow step title | 1.5rem → 1.75rem | 500 | tight | tight | Each workflow card heading |
| `.eyebrow` | 0.8125rem (13px) | 500 | 1.0 | 0.15em uppercase | Every section kicker + Trusted By label |
| Body large | 1rem → 1.125rem (16–18px) | 400 | relaxed (~1.6) | default | Prose paragraphs, hero subhead |
| Body small | 0.875rem (14px) | 400/500 | 1.5 | default | Card bodies, FAQ answers, footer columns |
| Nav link | 0.9375rem (15px) | 400 | 1.0 | default | Header center cluster + footer sitemap |
| Micro-legal | 0.75rem (12px) | 400 | 1.4 | 0.1em uppercase on dept labels | Footer bottom bar, status pill, sitemap headers |

### Principles
- Display sizes always use `clamp()` — the page must read as a magazine on a 13-inch laptop and as a billboard on a 27-inch monitor.
- Negative letter-spacing at display sizes (-0.025 → -0.015em). Body and small text use default tracking.
- Weight 500 is the headline weight; weight 700 is reserved (held in the font set but not used on the visible landing). Weight 300 is intentionally absent — "ghost" tone comes from `{colors.fonts-50}`, never from a lighter weight.
- Body reads at 16–18px (`text-base md:text-lg`), not 14px. The page is meant to feel publication-grade.
- Two-line headlines pair a full-white first line with a `{colors.fonts-50}` second line for editorial cadence (e.g. "Ship a season of content. / Without the studio."). The muted half carries the rhetorical turn.
- Eyebrows are always uppercase, 0.15em tracked, `{colors.fonts-50}`, with a 6×6 `{colors.accent-orange}` dot prefix. They are the only repeating glyph on the page.

### Note on Font Substitutes
If SF Pro Display cannot be self-hosted, fall back to Inter or system `-apple-system, BlinkMacSystemFont, "Helvetica Neue"`. Inter ships slightly wider — reduce display letter-spacing by an additional 0.005em and bump line-height by 0.02 on H1/H2 to recover the editorial tightness. Never substitute a slab or geometric sans; the page reads as a studio because SF's humanist proportions match the photography.

## Layout

### Spacing System
- **Base unit:** Tailwind v4 default 4px scale (`1` = 4px, `2` = 8px, `3` = 12px, `4` = 16px, `6` = 24px, `8` = 32px, `12` = 48px, `16` = 64px, `20` = 80px, `24` = 96px, `32` = 128px). No custom spacing tokens are declared.
- **Section padding:** `.section-padding` utility — `padding: 6rem 1.5rem` on mobile, `padding: 8rem 2rem` at `min-width: 768px`. Applied to every `<section>`.
- **Card padding:** Workflow cards `p-6 md:p-8`. How-It-Works tab buttons `p-5 md:p-6`. Image frames have zero inner padding — the image fills the radius.
- **Universal rhythm:** Eyebrow → headline gap `mb-6 md:mb-8`. Headline → paragraph gap `mt-8 md:mt-10`. Paragraph → CTA gap `mt-10 md:mt-12`. Block-to-block inside a section uses `gap-24 md:gap-32` for the AI Features stack.

### Grid & Container
- **Container:** `.container-x` — `max-width: 1280px; margin: 0 auto; width: 100%`. Applied directly inside every `<section>`. The header pill also sits inside `.container-x`.
- **Hero grid:** `grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center`. Left text takes `lg:col-span-7`, right orbital takes `lg:col-span-5`.
- **AI Features grid:** 12-col `gap-8 md:gap-12 items-center`, with `md:[&>div:first-child]:order-2` flipping even-indexed blocks — pure Tailwind selector, no JS.
- **How It Works grid:** `grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-stretch`. Image is `md:col-span-7`, tab list is `md:col-span-5`.
- **Workflow grid:** `grid-cols-1 md:grid-cols-2 gap-6 md:gap-8`. Four cards in 2×2 on desktop, full-width stack on mobile.
- **FAQ grid:** `grid-cols-1 md:grid-cols-12 gap-12`. Left title block `md:col-span-5`, accordion `md:col-span-7`.
- **Orbital carousel:** Auto-scales via `--orbit-size: 460px / 360px / 300px` at desktop / `≤1023px` / `≤640px`, with proportionally smaller `--orbit-radius` and card dimensions.

### Whitespace Philosophy
The page is engineered around breath. Sections are 6–8rem of vertical padding before any content begins, and the headline-to-paragraph gap is always wider than feels comfortable. Whitespace is the page's primary "expensive" signal — it is what makes a single orange dot read as deliberate instead of forgotten. When in doubt, double the gap before adding a divider.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No border, no shadow — direct on `{colors.main-bg}` | Section base, hero text column, paragraph blocks |
| Hairline | 1px `{colors.lines}` border, transparent fill | Header pill, workflow cards, FAQ row separators, tag-chips, section-top rules, footer bottom bar |
| Tile | 1px `{colors.lines}` border + `{colors.second-bg}` fill | Active How-It-Works tab card, workflow card surface (`bg-[var(--secondbg)]/50`), AI-feature image frame fill |
| Product shadow | `box-shadow: 0 12px 32px -16px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)` | Orbital carousel cards only — the single deliberate shadow on the page |

**Shadow philosophy:** Lift comes from hairlines and surface color shifts, not from blur. The single product shadow on orbital cards exists because they float in front of a dashed ring and need physical presence; everything else is held flat. No card-stack drop shadows, no glow effects, no inner shadows.

**Decorative depth:**
- The header pill uses `backdrop-blur-xl` on a `70% opacity` near-black background — the only blur on the page.
- The orbital dashed center ring at 50% opacity sits behind the cards and provides a sense of orbit without breaking flatness.
- The marquee uses an 80px-wide `mask-image` linear-gradient on both edges to fade the loop into the canvas.
- The Trusted By chip strip and footer status pill (`bg-[#22c55e]`) are the only places where a non-token color flashes briefly.

## Shapes

### Border Radius Scale
| Token | Value | Use |
|---|---|---|
| none | 0 | Image fill inside an already-rounded frame, the dashed center ring's stroke |
| sm | 9px (rx on LogoMark rect) | LogoMark soft square |
| card | 14px | Orbital card outer frame |
| 2xl | 16px | Workflow image inner frames, How-It-Works tab buttons |
| 3xl | 24px | AI-feature image frames, workflow card outer frame, How-It-Works hero image |
| pill | 9999px | Header pill, all buttons, tag-chips, trusted-by chips, status pill, dot accents |

### Photography Geometry
- **Orbital portraits:** 3:4 aspect, shown at ~130×175px desktop / 100×135px tablet / 84×112px mobile. Source 1500–4000px wide for retina headroom.
- **AI-feature pairs:** 3:4 aspect each, displayed in a 2-col mini-grid with the second card offset `mt-8 md:mt-12` for a staggered editorial cadence.
- **How-It-Works hero:** 4:3 mobile, 16:10 desktop. Lives in a `rounded-3xl` frame with `{colors.second-bg}` fill behind the image.
- **Workflow step image:** 4:3 inside a `rounded-2xl` frame with `{colors.main-bg}` fill (one tone darker than the card it sits in).
- **Loading strategy:** `next/image` with `priority` on the first two orbital cards (`i < 2`); everything else lazy-loaded. `sizes` set per slot (`180px` orbital, `50vw` feature pairs, `(max-width:768px) 100vw, 40vw` workflow).

## Components

### Top Navigation

**Pill header** (`{component.header-pill}`) — Fixed top, full-width wrapper `fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4`. Inner pill: `container-x flex items-center justify-between gap-4 px-4 md:px-6 py-3 rounded-full border border-[{colors.lines}] bg-[{colors.main-bg}]/70 backdrop-blur-xl`.
- **Default:** Pill border at 1px `{colors.lines}`, fill 70% `{colors.main-bg}`, backdrop blur `xl`.
- **Active link:** `text-[{colors.fonts-100}]` (the current section's link color shifts from `{colors.fonts-64}` to full white).
- **Focus:** Keyboard focus inherits `currentColor` outline for keyboard parity with the dark canvas.

**Mobile menu button** (`{component.menu-toggle}`) — `w-10 h-10 rounded-full border border-[{colors.lines}]` with a two-bar hamburger morphing into an X via `translate-y` + `rotate`.

### Buttons

**Button primary** (`{component.button-primary}`) — `display: inline-flex; gap: 0.5rem; padding: 0.75rem 1.25rem; background: {colors.fonts-100}; color: {colors.main-bg}; border-radius: 9999px; font-weight: 500; font-size: 1.0625rem`.
- **Default:** White fill, near-black text, pill radius, transition `transform 0.2s ease, background 0.2s ease`.
- **Active:** Lifts `translateY(-1px)` with fill softening to `#e8e8e8`.
- **Focus:** Inherited `currentColor` ring; no custom outline.

**Button ghost** (`{component.button-ghost}`) — Same dimensions and pill radius as primary, but transparent fill with a 1px `{colors.lines}` border and `{colors.fonts-100}` text.
- **Default:** Transparent on canvas, 1px hairline border, white label.
- **Active:** Fill lights to `rgba(255,255,255,0.05)`.
- **Focus:** Inherits keyboard ring.

**Button utility — Tab card** (`{component.tab-button}`) — Used in How It Works. `text-left p-5 md:p-6 rounded-2xl border transition-all`.
- **Default (inactive):** 1px `{colors.lines}` border, transparent fill, body in `{colors.fonts-64}`.
- **Active:** Border shifts to `{colors.fonts-100}`, fill to `{colors.second-bg}`, title becomes full white.
- **Focus:** Inherits border highlight.

### Cards & Containers

**Tag chip** (`{component.tag-chip}`) — `display: inline-flex; gap: 0.4rem; padding: 0.5rem 1rem; border-radius: 9999px; border: 1px solid {colors.lines}; background: rgba(255,255,255,0.03); font-size: 0.9375rem; color: {colors.fonts-64}`. Used in hero pills (`E-commerce / Editorial / Lifestyle / UGC / Paid social / Video ads`) and workflow step codes.

**Orbital card** (`{component.orbital-card}`) — `border-radius: 14px; overflow: hidden; background: {colors.second-bg}; box-shadow: 0 12px 32px -16px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04); transition: transform 0.4s ease`. The only card on the page that carries a real shadow.
- **Active:** Slot hover scales `1.06` over 0.4s ease.

**Workflow card** (`{component.workflow-card}`) — `rounded-3xl border border-[{colors.lines}] bg-[{colors.second-bg}]/50 p-6 md:p-8 flex flex-col gap-6 overflow-hidden`. Header row pairs a `tag-chip` step code with a quiet `01 / 04` index in `{colors.fonts-50}`. Footer row is a `border-t border-[{colors.lines}]` strip with a tag on the left and `Learn more →` on the right.

**Trusted-by chip** (`{component.trustedby-chip}`) — `px-6 py-3 rounded-full border border-[{colors.lines}] text-[{colors.fonts-64}] text-sm whitespace-nowrap`. Duplicated in the marquee track for the infinite loop.

### Inputs & Forms

**FAQ disclosure** (`{component.faq-item}`) — Native `<details>` row with `border-bottom: 1px solid {colors.lines}`. Summary: `padding: 1.5rem 0; font-size: clamp(1.125rem, 2vw, 1.5rem); font-weight: 500; color: {colors.fonts-100}`. Body: `padding: 0 0 1.5rem; color: {colors.fonts-64}; font-size: 1rem; line-height: 1.6`.
- **Default:** Plus icon (18×18 SVG) at right, no rotation.
- **Active (`[open]`):** Plus icon rotates 45° to an X via `transform: rotate(45deg)` over 0.3s ease.
- **Focus:** Native `<summary>` focus ring inherits `currentColor`.

### Footer

**Footer wrapper** (`{component.footer}`) — `relative pt-20 md:pt-32 pb-10 px-4 md:px-6 overflow-hidden border-t border-[{colors.lines}]`. Opens with a `h2-display` closing CTA ("Ready to ship / your next campaign?") and a two-button CTA row, then a 12-col sitemap, then a bottom bar `border-t border-[{colors.lines}]` with copyright, legal links, and social handles. Status pill: `w-2 h-2 rounded-full bg-[#22c55e] animate-pulse` paired with "All systems operational" in `{colors.fonts-50}`.

## Do's and Don'ts

### Do
- Use `.eyebrow` to open every section — orange dot, uppercase label, `{colors.fonts-50}`. No exceptions.
- Pair every section heading with a quiet `0X — Capabilities` index on the right at `≥md` breakpoints.
- Reserve `{colors.fonts-100}` for content the eye lands on first; default everything else to `{colors.fonts-64}`.
- Apply 1px `{colors.lines}` for every divider, card border, hairline, and section-top rule.
- Use `clamp()` on display sizes so the page reads as a magazine at 1280px and a billboard at 1920px.
- Keep two-line headlines structured as full-white first line + `{colors.fonts-50}` second line for editorial cadence.
- Set pill radius `9999px` on every button, header, chip, and dot — cards stay at 14–24px.
- Honor `prefers-reduced-motion` on the orbital ring (`animation: none` on `.orbital__rotor` and `.orbital__keeper`).
- Use GSAP `power3.out` 0.9s on `y` + `autoAlpha` only for reveals — never scale, never bounce.
- Keep the orange dot at 6×6px exactly; if the dot grows, the editorial pose collapses.

### Don't
- Don't introduce gradient meshes, indigo glows, purple accents, or neon glass cards — the AI-SaaS playbook is the thing we're refusing.
- Don't fill anything with `{colors.accent-orange}`. It exists only as the 6×6 dot.
- Don't add a drop shadow to anything except an orbital card. Lift comes from hairlines.
- Don't raise card backgrounds beyond `{colors.second-bg}`. There is no third elevation tier.
- Don't document or build hover on links — focus state is enough; transitions handle subtle feedback.
- Don't use weight 300 to create "ghost" body — drop opacity via `{colors.fonts-50}` instead.
- Don't add a second accent color "just for variety." The site's argument is monochrome.
- Don't replace the orbital carousel with a standard slider or autoplay video. The orbit is the brand.
- Don't break the pill / card radius split. Pills are 9999px, cards are 14–24px. Square buttons are forbidden.
- Don't ship the orbital carousel without the counter-rotation keeper — cards must stay upright while the ring spins.

## Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤419px | `.section-padding: 6rem 1.5rem`. Orbital uses 300px size / 128px radius / 84×112px cards. Hero stacks single-column; tag-chips wrap freely. |
| Phone | 420–640px | Same orbital scale (`≤640px` query). FAQ summary at 18px floor of its clamp. Workflow 1-col stack. |
| Large phone | 641–735px | Orbital still at 300px tier. AI feature pairs remain 2-col internal. Header collapses to mobile (lg+ hides). |
| Tablet portrait | 736–833px | `.section-padding` switches to `8rem 2rem`. Orbital steps up to 360px / 155px / 100×135px. AI features 1-col block stack with internal 2-col image grid. |
| Tablet landscape | 834–1023px | Workflow 2-col grid activates (`md:`). FAQ 12-col layout activates. Orbital still at 360px tier. |
| Small desktop | 1024–1068px | Header center nav cluster reveals (`lg:`). Hero splits to 7/5 columns. Orbital steps up to 460px / 200px / 130×175px. |
| Desktop | 1069–1440px | Full `.container-x` (1280px) breathes inside the viewport. Headlines at the upper third of their clamp. |
| Wide desktop | ≥1441px | `.container-x` caps at 1280px and centers — never grows. Headlines saturate at clamp ceiling (5.5rem). Whitespace widens around the container. |

### Touch Targets
- Minimum touch target 40×40px. `btn-primary` and `btn-ghost` at `0.75rem 1.25rem` padding hit 44px tall comfortably.
- Mobile menu toggle is a dedicated `w-10 h-10 rounded-full` button to guarantee target size.
- FAQ summary rows have 1.5rem vertical padding so the full row is tappable, not just the title.

### Collapsing Strategy
- **Header:** Desktop center cluster + right CTA row collapse into a hamburger ≥`lg`. Mobile overlay is `fixed inset-0 z-40 bg-[{colors.main-bg}] pt-24 px-6` with stacked `text-2xl` links.
- **Hero:** 12-col grid collapses to a single column at `<lg`. Orbital moves below the text block, centered.
- **AI Features:** The image pair stays a 2-col mini-grid even on mobile; only the outer text/image columns collapse to a stack.
- **How It Works:** Tab list moves below the active image on `<md`. The image keeps its 4:3 aspect on mobile, 16:10 on desktop.
- **Workflow:** 2×2 grid collapses to a single column at `<md`.
- **FAQ:** Left title column drops above the accordion at `<md`.
- **Footer sitemap:** 12-col grid collapses to `grid-cols-2` at `<md`; the brand block spans both columns.

### Image Behavior
- All product imagery served via `next/image`. AVIF + WebP enabled in `next.config.ts` for modern bitstreams.
- `priority` flagged only on the first two orbital cards (`i < 2`); everything else lazy-loaded by default.
- `sizes` declared per slot: orbital `180px`, AI feature `50vw`, How-It-Works hero responsive, workflow `(max-width:768px) 100vw, 40vw`.
- Image frames carry the radius; the `<Image>` element itself uses `object-cover` and fills the parent. No bleed-to-edge images, no stock photography.

## Iteration Guide

1. **One accent forever.** New sections may extend the system but never introduce a second accent. If a future surface needs emphasis, scale type — never add color.
2. **One family, three weights, no exceptions.** SF Pro Display at 400 / 500 / 700 covers every role. Don't import Inter, IBM Plex, or a mono — the editorial pose depends on the single typographic voice.
3. **Token references over literals.** When adding a new component, reference `{colors.lines}` / `{colors.fonts-64}` / `{colors.main-bg}` — never inline a hex. Tokens travel; literals rot.
4. **Hairlines over shadows.** New components default to a 1px `{colors.lines}` border. The orbital card shadow is the only license the page grants; copying it elsewhere breaks the depth budget.
5. **Variants live inside the component file.** Don't fork a tab button into "tab-button-large" — adjust the existing component's variants. The system stays auditable because each role has exactly one source.
6. **Display family vs body family.** `h1-display` / `h2-display` / `h3-display` are reserved for hero, section titles, and feature pillars. Card titles and prose use plain Tailwind sizes — don't reach for display tokens inside a card.
7. **Never document or design hover.** Apple convention. Mirola ships default, active, and focus. Transitions handle subtle pointer feedback; explicit hover specs are forbidden.

## Known Gaps

- **Form validation states** — the live page has no form (FAQ uses native `<details>`). Error / success / disabled input styling is not surfaced in analyzed pages.
- **Light mode** — Mirola is dark-only. A light counterpart palette is not surfaced in analyzed pages.
- **Empty / loading states for the dashboard** — the landing implies a product app behind it; skeleton, spinner, and empty-state patterns are not surfaced in analyzed pages.
- **Pricing surface tokens** — the Pricing nav link points to `#` placeholder; pricing-card elevation, tier highlights, and toggle styling are not surfaced in analyzed pages.
- **Localization / RTL** — the eyebrow + index pairing assumes LTR reading order; RTL mirror behavior is not surfaced in analyzed pages.
- **Dark-mode 2nd accent** — `{colors.accent-blue}` (#146ef5) is held in the token set for inline links on downstream pages but has no live instance to study on this landing.
