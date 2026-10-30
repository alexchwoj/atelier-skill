---
version: "1"
name: "Portfolio 001 — Midnight Monochrome Atelier (Dark)"
description: "A dark single-page product-designer portfolio reduced to three values: near-black Canvas #171717, pure-white Chalk #ffffff for primary type, and muted grey Ash #9a9a9a for secondary type. There is NO accent color anywhere in the editorial body — the page is left-aligned, square-cornered, with no cards, borders, shadows, or CTA buttons. One full-bleed photographic hero card under a dark scrim is the only place color, a rounded corner, and a non-400 weight appear. The signature surface is the photographic media; the page rhythm is a single flowing column where every block enters once with a 24px blur-rise scroll reveal and the stats row pops its last two digits in."
colors:
  canvas: "#171717"        # page background — near-black charcoal, on <body> and root <div>
  chalk: "#ffffff"         # primary type — headlines, titles, contact line, email, active nav underline
  ash: "#9a9a9a"           # secondary type — section cues, descriptions, labels, social links, copyright, designer label
  hero-text: "#f0f0f5"     # hero card headline — near-white, faintly cool, distinct from Chalk on purpose
  hero-base: "#0d0b12"     # deep plum-black fill under the hero photograph, visible before the image loads
  hero-sub: "rgba(255,255,255,0.4)"   # hero card subtitle — white at 40%, a recessive second voice over the image
  hero-border: "rgba(255,255,255,0.07)"   # the single 1px hairline framing the hero card — the only border on the page
  hero-scrim-top: "rgba(13,11,18,0.35)"     # top of the hero scrim gradient
  hero-scrim-bottom: "rgba(13,11,18,0.65)"  # bottom of the hero scrim gradient — the only gradient on the page
typography:
  body:
    fontFamily: "Helvetica Neue, Inter, ui-sans-serif, system-ui, -apple-system, sans-serif"
    weights: "400"
    role: "everything in the editorial body — display through caption — Inter 400 only"
  hero:
    fontFamily: "Inter, sans-serif"
    weights: "300, 400"
    role: "hero card only — light 300 first headline line, 400 second line; the deliberate exception"
spacing:
  base: "4px"                      # --spacing-unit; spacing is expressed inline with arbitrary values, not a token scale
  element-gap: "20px"              # --element-gap; media→title, social row gaps
  section-gap: "120px"             # --section-gap; between editorial sections (Work opens at 60px)
  side-padding: "20px / 40px"      # px-5 mobile, md:px-10 desktop, on every section
rounded:
  square: "0px"                    # everything in the editorial body
  hero: "20px"                     # the hero card only (16px ≤480px) — the only rounded element
elevation:
  flat: "none"                     # no shadow, no border, no card surface anywhere in the body
  hero-border: "1px hero-border hairline on the hero card only"
motion:
  reveal-ease: "cubic-bezier(0.22, 1, 0.36, 1)"   # --panel-ease (transitions.dev easing)
  reveal: "translateY(24px → 0) + opacity(0 → 1) + blur(2px → 0) over 600ms, once"   # --panel-translate-y 24px, --panel-open-dur 600ms
  digit-ease: "cubic-bezier(0.34, 1.45, 0.64, 1)"  # --digit-ease (transitions.dev springy)
  digit-pop: "last two chars rise 8px + deblur 2px over 500ms, staggered 70ms"        # --digit-distance/dur/blur/stagger
  media-zoom: "scale(1.03) over 700ms cubic-bezier(0.22, 1, 0.36, 1) on hover"
components:
  hero-card: "Full-bleed photographic image card under a dark top→bottom scrim, 20px radius, 1px hairline — the only chromatic / rounded / non-400-weight surface"
  section-cue: "A grey ↓-prefixed Ash line that opens each editorial section (↓ Selected work, ↓ Services, ↓ In numbers, ↓ Awwwards, ↓ Contact)"
  media-tile: "Full-bleed img/video at aspect-[4/3] (or aspect-video), object-cover, inside a hover-zoom wrapper that clips overflow"
  pop-value: "Stat value split into characters; the last two carry data-stagger 1/2 and run the digit pop-in"
  nav-underline: "Active header link gets a 1px Chalk bottom border; no other link state"
  reveal: "IntersectionObserver-driven .t-panel-slide wrapper; flips data-open once on first view, then disconnects"
---

# Portfolio 001 — Midnight Monochrome Atelier (Dark)

> Fivefold showcase. Pairs with the Portfolio 001 (Brave White) prompt. Use this to keep pages you build *after* the single-page portfolio — a project case study, an about page, a writing index — feeling like one quiet, confident, midnight-monochrome editorial system.

## Overview

Portfolio 001 is a dark, single-page portfolio for a product designer. The atmosphere is a printed editorial spread at midnight, not a SaaS landing — a near-black **Canvas** (`{colors.canvas}` #171717) holding white **Chalk** type, muted grey **Ash** secondary type, and **no accent color at all** across the editorial body. Everything is left-aligned. Corners are square. There are no card backgrounds, no borders, no shadows, no elevation, and no CTA buttons. Type carries the entire design.

**Governing decision: Most product-designer portfolios reach for a signature accent and a motion library to feel "designed" — this portfolio refuses both.** No second hue, no Framer Motion, no GSAP. The page is reduced to Canvas / Chalk / Ash, set entirely in **Inter 400** (rendering in Helvetica Neue where available), on a tight negative-tracking scale that compresses harder as it grows, with every transition hand-built from a transitions.dev `:root` token block driven by a single IntersectionObserver. The hierarchy that an accent would normally carry is done instead by the **Chalk → Ash** step and by photographic media. The restraint *is* the design.

The single exception — and it is deliberate — is the **hero card** (`{components.hero-card}`): a full-bleed photograph under a dark scrim, the only place color enters the page, the only rounded corner, the only border, the only gradient, and the only place a weight other than 400 appears (a light 300 first headline line). Color enters the page **by photograph, not by palette.**

The page rhythm is **photographic media against a quiet column.** The render order is fixed: image-card hero → intro headline → a four-image work grid → three text services → a stats row that pops in → award-video grid → contact footer. The protagonist of every section is the photograph or video; the surrounding chrome is intentionally monochrome so the media does the talking. The system extends across surfaces as one broadsheet — a case study, an about page, or a writing index all inherit the same Canvas, the single-font / single-weight rule, the square corners, the zero-accent restraint, and the scroll-reveal motion spine. No surface may introduce a second font, a second weight, an accent, a gradient, a card surface, a border, a shadow, or a filled button without a documented reason.

**Key Characteristics:**
- Near-black **Canvas** (`{colors.canvas}` #171717) — a warm charcoal, not pure `#000`; gradient-free in the editorial body.
- Exactly three values: **Canvas** background, **Chalk** (`{colors.chalk}` #ffffff) primary type, **Ash** (`{colors.ash}` #9a9a9a) secondary type — the Chalk→Ash step is the page's only hierarchy device.
- A single font at a single weight — **Inter 400** throughout (display through caption), via a `Helvetica Neue → Inter → system` stack.
- A six-step type scale whose negative tracking tightens as size grows (`-0.05px` at 16px → `-0.56px` at 56px); display lines sit on `leading-none`.
- **Square corners everywhere** (`{rounded.square}` 0px); the hero card is the only rounded element (`{rounded.hero}` 20px, 16px ≤480px).
- One photographic **hero card** under a dark scrim — the single chromatic moment, and the only place a non-400 weight (light 300), a border, and a gradient appear.
- Hand-built CSS motion — transitions.dev easing tokens + a single IntersectionObserver reveal — carries the whole page: a site-wide 24px blur-rise, a stats-row digit pop-in, a subtle media hover-zoom.
- Directional marks are literal `↓` glyphs in the section cues; `lucide-react` is installed but no icon is ever imported or rendered.
- It does **NOT** use any accent or semantic color, any card surface / border / shadow, any filled CTA button, any centered body content, any icon library, any animation library, or any continuous idle motion (parallax, marquee, typewriter) — that absence is the brand.

## Colors

> **Source pages analyzed:** the photographic hero card, the intro headline, the four-image work grid, the three text services, the stats row, the award-video grid, and the contact footer — the full single-page surface palette plus the hero card's self-contained tones.

### Brand & Accent
- **None.** There is **no accent color, no gradient, no semantic color** anywhere in the editorial body. This absence is the brand. A new "needs emphasis" moment is answered by Chalk-on-Ash contrast or by photographic media — never by introducing a color. The only chromatic moment on the page is the hero photograph itself.

### Surface
- **Canvas** (`{colors.canvas}` #171717): The page background. A near-black charcoal, not pure black — warmer and less clinical than `#000`. Every editorial section, the header, and the footer sit directly on Canvas with no surface beneath them. Set on `<body>` and on the root `<div className="min-h-screen bg-canvas">`.

### Text
- **Chalk** (`{colors.chalk}` #ffffff): Primary type — the intro headline, every section heading, project and service titles, the contact line, the email link, and the active nav underline. Pure white; the only "loud" value on the page.
- **Ash** (`{colors.ash}` #9a9a9a): Secondary type — the section cues (`↓ …`), every body description, stat labels, social links, the copyright row, and the `Brave White` label in the header. A muted neutral grey; quiet, never invisible. The Chalk→Ash step *is* the page's only hierarchy device — there is no accent and no size jump doing that job.

### Semantic
- **None on the marketing surface.** No success / error / warning color exists; the build ships no form or status component that would need one. A later form state must be expressed monochrome (Chalk text, Ash placeholder), never by adding a semantic hue.

### Hero card (self-contained exception)
The hero card is the **one** place color enters the page, and it does so by photograph. Its CSS is the only component-local stylesheet and defines its own tones:
- **Hero text** (`{colors.hero-text}` #f0f0f5): the headline color inside the card — a near-white, faintly cool, distinct from Chalk on purpose.
- **Hero base** (`{colors.hero-base}` #0d0b12): the deep plum-black fill under the photograph, visible only before the image loads.
- **Hero sub** (`{colors.hero-sub}` rgba(255,255,255,0.4)): the card's subtitle — white at 40% for a recessive second voice over the image.
- **Hero border** (`{colors.hero-border}` rgba(255,255,255,0.07)): the single 1px hairline framing the card — the only border on the page.
- **Hero scrim** (`{colors.hero-scrim-top}` → `{colors.hero-scrim-bottom}` — rgba(13,11,18,0.35) → rgba(13,11,18,0.65)): a top-to-bottom dark gradient over the photograph so the light type holds across the image. This is the **only gradient on the page.**

> The hero card's stylesheet also declares dormant tones (`--surface #111118`, `--accent #c8a0e0`, `--accent-pink #b04090`, `--text-muted #8888a8`, `--border rgba(255,255,255,0.08)`) that are **defined but never rendered** — leftovers from a richer card variant. Treat them as inert: the actual card uses only the tones listed above. Do **not** promote the dormant accents into the editorial body; doing so would break the monochrome rule.

## Typography

### Font Family
- **Everything (body):** `Helvetica Neue, Inter, ui-sans-serif, system-ui, -apple-system, sans-serif`. The stack lists **Helvetica Neue first**, then the loaded **Inter**, then system fallbacks — so the page renders in Helvetica Neue where installed and falls back to Inter elsewhere. One family, one voice, display through caption.
- **Hero card:** `Inter, sans-serif` — declared locally in the hero stylesheet, the only place the family deviates from the body stack.
- **Weight:** **400 only**, everywhere in the editorial body. `<body>` is pinned to `font-weight: 400`. The page never renders a heavier weight outside the hero card.
- Inter is loaded from Google Fonts with weights `300;400;500;600;700;800` requested, but **only 300 (hero card) and 400 (everything) are used** — the heavier weights are dormant in the link.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display}` | 56px (`md:`) / 40px (mobile) | 400 | 1.0 (`leading-none`) | -0.56px (mobile -0.4px) | Intro headline, each stat value, the contact line |
| `heading-lg` | 32px | 400 | 1.2 | -0.26px | Service titles |
| `heading` | 28px | 400 | 1.2 | -0.2px | Scale step; reserved for later pages (unused in build) |
| `heading-sm` | 24px | 400 | 1.4 | -0.14px | Scale step; reserved for later pages (unused in build) |
| `subheading` | 20px | 400 | 1.4 | -0.1px | Project titles, award titles, the email link |
| `body` | 16px | 400 | 1.5 | -0.05px | All descriptions, section cues, labels, nav links, copyright |

> The display lines are written inline as `text-[40px] leading-none tracking-[-0.4px] md:text-display` rather than as a single token — they render at 40px on mobile and step to the 56px `display` token at `md`. The hero card runs its own scale (below) entirely outside this table.

### Hero card type (the deliberate exception)
- **Headline:** `font-size: clamp(2.4rem, 5.5vw, 4rem)`, **weight 300** (light) on line 1, **weight 400** on line 2 (the `<strong>` block), `line-height 1.1`, `letter-spacing -0.02em`, color `{colors.hero-text}`. This light 300 first line is the **only** sub-400 weight on the entire page.
- **Subtitle:** `0.9rem`, weight 400, `line-height 1.6`, color `{colors.hero-sub}`, with a hard `<br>` line break.

### Principles
- One font, one weight (400), one color hierarchy (Chalk over Ash). The restraint *is* the typography — do not add a second weight or family to the body.
- The negative-tracking scale is the rhythm: tracking tightens as size grows (`-0.05px` at 16px → `-0.56px` at 56px). Never loosen tracking on display; never tighten the 16px body further.
- Display lines sit on `leading-none` (1.0) so the large type stacks tight and editorial.
- Everything is left-aligned. Never center body content.
- Section cues are 16px Ash lines beginning with a `↓` glyph — not eyebrows, not uppercase, not tracked.
- The hero card's light 300 headline is the one expressive move. Keep it light; do not "fix" it to 400.

### Note on Font Substitutes
Inter and Helvetica Neue are the system. **Inter is open-licensed (Google Fonts) — load it directly; no substitution is needed.** Helvetica Neue is a system face on Apple platforms; the stack falls back to Inter cleanly where it is absent. If neither is available, `ui-sans-serif` / `system-ui` carries the page acceptably at weight 400 — accept slightly different metrics rather than introducing a new licensed face. Never add a display serif or a second family; the single sans carries everything.

## Layout

### Spacing System
- **Base unit:** `{spacing.base}` 4px (`--spacing-unit`). Spacing is **expressed inline with arbitrary values** (`mt-[120px]`, `gap-[20px]`, `pt-[120px]`) rather than a Tailwind spacing scale — there is no extended spacing token set.
- **Section gap:** `{spacing.section-gap}` 120px (`--section-gap`) between editorial sections — `mt-[120px]` on Services, Stats, Awwwards, and the Footer; the Hero intro is padded `pt-[120px]`. **Work is the one exception at `mt-[60px]`.**
- **Element gap:** `{spacing.element-gap}` 20px (`--element-gap`) between media and title; titles step to descriptions at `mt-[5px]`; cues step to content at `mt-[40px]`.
- **Side padding:** `{spacing.side-padding}` — `px-5` (20px) on mobile, `md:px-10` (40px) on desktop, on every section.

### Grid & Container
- The page is a single flowing column on `min-h-screen bg-canvas` — **no max-width container on the editorial body**; sections span the side padding to the viewport edge.
- **Work grid:** `grid-cols-1 md:grid-cols-2`, `gap-x-[20px] gap-y-[60px]` — four image tiles, two-up on desktop, one-up on mobile.
- **Services:** a single `flex flex-col gap-[40px]` stack — three text items, never a grid, never cards.
- **Stats grid:** `grid-cols-1 md:grid-cols-3`, `gap-x-[20px] gap-y-[40px]` — three numbers.
- **Awwwards grid:** `grid-cols-1 md:grid-cols-2`, `gap-x-[20px] gap-y-[60px]` — two 4:3 videos, the third 16:9 spanning `md:col-span-2`.
- **Hero card:** centered in its own `xero-hero` flex wrapper (14px padding), `max-width: 1600px`, full-bleed within that — the only element with its own container width.

### Whitespace Philosophy
Whitespace is the margin of the editorial page. The 120px section gaps let each block stand alone; the eye rests on grey between the white headings; the photographic media registers precisely *because* the surrounding page is quiet and monochrome. Negative space is what lets a zero-accent, single-weight page read as confident rather than empty — crowd it and the restraint collapses into blankness. Density is a deliberate refusal.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border, no surface | Default for **everything** in the editorial body — type, grids, footer |
| Hero hairline | 1px `{colors.hero-border}` | The hero card frame only — the single border on the page |
| Hero scrim | `{colors.hero-scrim-top}` → `{colors.hero-scrim-bottom}` gradient (`z-0`) | Darkening layer over the hero photograph so light type holds |
| Photographic depth | The image / video footage itself | Hero card + media tiles carry their own optical depth |

### Decorative Depth
- **Photographic media** is the only decorative depth. The hero photograph and the project/award footage carry their own optical depth.
- **No drop shadows, no card surfaces, no atmospheric gradients in the body.** The page has exactly one border (the hero hairline) and one gradient (the hero scrim), both contained inside the hero card.
- The **scroll-reveal blur-rise** brings each block in — depth in time rather than in shadow. A box-shadow or a card background anywhere in the body would immediately drag the page from midnight-editorial toward generic-SaaS.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.square}` | 0px | **Everything** in the editorial body — media tiles, sections, grids, footer |
| `{rounded.hero}` | 20px (16px ≤480px) | The hero card only — the single rounded element on the page |

Square corners are the rule. Project tiles, award videos, headings, and the footer all sit at `0` radius. The hero card's 20px corner (16px on small phones) is the one curved edge, and it pairs with the only hairline and the only scrim — a single, self-contained "soft" object against an otherwise hard-edged page.

### Photography & Illustration Geometry
- The **hero photograph** is full-bleed `center / cover`, `min-height: 640px` (auto ≤768px), under the dark scrim. It is the single chromatic asset — color enters the page here and nowhere else.
- **Work tiles:** four images at `aspect-[4/3] object-cover`, full-bleed within their grid cell, square corners. (The data type also supports a `video` variant rendered the same way, but all four shipped tiles are images.)
- **Award videos:** `autoPlay loop muted playsInline` — two at `aspect-[4/3]`, the third at `aspect-video` (16:9) spanning both columns. They autoplay simultaneously and are served pre-compressed.
- Every tile lives inside a `media-hover` wrapper that clips overflow so the hover-zoom stays within the frame.
- Images use `loading="lazy"`; videos autoplay on mount (no IntersectionObserver gating on playback) — keep new media consistent (lazy images, muted autoplay loops) so the page stays quiet and light.

## Components

### Buttons
**None.** The system ships **no buttons of any kind** — no primary, no ghost, no pill. Every action is a plain text link in `body` (nav links, the `mailto:` email link, the social-row links). Adding a filled or bordered button would break the no-surface rule. Actions stay as left-aligned text.

### Cards & Containers
The only "container" on the page is the **hero card** (below). The editorial body has **no card surfaces** — sections are bare type and media stacked directly on Canvas. Do not wrap content in a panel, tile, or bordered box; the grid cell and the photograph are the only framing devices.

### Hero card (`{components.hero-card}`)
The single photographic surface. A full-bleed image (`center / cover`) under the dark top→bottom scrim (`z-0`), with left-aligned light content (`z-1`, `max-width: 620px`). `border-radius {rounded.hero}` (20px; 16px ≤480px), a 1px `{colors.hero-border}` hairline, `overflow: hidden`, `padding 80px 40px 70px` (60px 20px ≤768px), `min-height: 640px` (auto ≤768px), content vertically centered. Headline in the hero scale (light 300 line 1 / 400 line 2); subtitle in `{colors.hero-sub}`. **This is the only place on the page where color, a rounded corner, a border, a gradient, and a non-400 weight all appear — and it is intentional. Keep the break exact; do not normalize it to the body rules, and do not spread its tones outward.**

### Media tile (`{components.media-tile}`)
A `media-hover` wrapper (clips overflow) around a full-bleed `img` or `video` at `aspect-[4/3]` (or `aspect-video` for the wide award), `object-cover`, square corners, followed by a `subheading` Chalk title (`mt-[20px]`) and a `body` Ash description (`mt-[5px]`). On hover the media zooms to `scale(1.03)` over 700ms; the title/description never move. Used identically in Work and Awwwards.

### Stat value (`{components.pop-value}`)
A stat value (`120+`, `98%`, `<48h`) rendered at the display scale in Chalk, split into per-character `<span class="t-digit">`. The **second-to-last** character carries `data-stagger="1"`, the **last** carries `data-stagger="2"`; the group span gets `is-animating` when the stats block enters view, triggering the digit pop-in. A `body` Ash label sits below at `mt-[10px]`.

### Inputs & Forms
**None on the marketing surface.** The build ships no input, no field, no validation state. A future form must stay monochrome — Chalk text, Ash placeholder, a hairline only if unavoidable, no semantic color, no filled submit button.

### Navigation (`{components.nav-underline}`)
**`top-nav`** — a **non-sticky** top nav: a left link group (`Work` active, `Services`, `Awwwards`, `Contact`) with the `Brave White` designer label pushed right in Ash (`whitespace-nowrap`, never wraps). Links are `body` Chalk with `pb-[10px]`; the **active** link gets a 1px Chalk bottom border (`border-b border-chalk`) — the page's only "selected" affordance. The link group `flex-wrap`s on narrow widths; there is no other link state, no hover spec, no menu sheet.

### Footer / contact close
**`footer`** — the closing section (`id="contact"`): a `↓ Contact` cue, a display-scale `Let's work together.` line in Chalk, a `subheading` Chalk `mailto:hello@bravewhite.design` link, a wrapping row of four `body` Ash social text links (`X (Twitter)`, `LinkedIn`, `Dribbble`, `Instagram`, all `href="#"`), and a `body` Ash copyright row (`©2026 Brave White Studio · Terms · Privacy`) set `mt-[120px]` below. No buttons, no surface — text links only.

### Section cue (`{components.section-cue}`)
A single Ash `body` line that opens each editorial section, prefixed with a literal `↓` glyph: `↓ Selected work`, `↓ Services`, `↓ In numbers`, `↓ Awwwards`, `↓ Contact`. It is the page's only recurring "label" device — left-aligned, 16px, Ash, weight 400, **not** uppercase or tracked. It replaces what other systems do with an eyebrow or an icon. New sections get a cue in the same shape; never an icon, never a colored label.

### Reveal wrapper (`{components.reveal}`)
The motion spine. A `.t-panel-slide` div whose `data-open` flips to `true` the first time it scrolls into view (IntersectionObserver, `threshold 0.15`, `rootMargin '0px 0px -10% 0px'`), then the observer disconnects — nothing re-animates on scroll-back. An optional `delay` prop sets `transitionDelay` for staggering siblings. Most blocks use the `<Reveal>` wrapper; the Stats section applies `.t-panel-slide` directly via the `useInView` hook so the panel reveal and the digit pop-in fire together.

## Do's and Don'ts

### Do
- Keep the canvas `{colors.canvas}` (#171717) — near-black, gradient-free in the body.
- Hold the whole body to three values: Canvas / Chalk / Ash; let the Chalk→Ash step carry hierarchy.
- Set everything in **Inter 400** (Helvetica Neue first in the stack); use the negative-tracking scale as the rhythm.
- Keep corners square (`{rounded.square}`) everywhere except the hero card.
- Open each section with a `↓` Ash `{components.section-cue}`, left-aligned, 16px, weight 400.
- Keep the hero card exactly as specified — the one chromatic, rounded, hairlined, light-300 exception.
- Let the scroll-reveal blur-rise be the motion spine; reserve the digit pop-in for the stats row.

### Don't
- **Don't introduce any accent, brand, or semantic color** into the editorial body — the monochrome is the brand.
- Don't add a second font or a second weight to the body — the hero card's 300/400 is the sole exception.
- Don't add gradients to editorial sections — the hero scrim (`{colors.hero-scrim-top}` → `{colors.hero-scrim-bottom}`) is the only gradient on the page.
- Don't round any corner outside the hero card (`{rounded.hero}`).
- Don't add card surfaces, borders, shadows, or elevation in the body — the hero hairline (`{colors.hero-border}`) is the only border.
- Don't add a filled or bordered CTA button — every action is plain text link in `body`.
- Don't center-align body content — everything is left-aligned.
- Don't add emoji or SVG icons — the only marks are literal `↓` glyphs; `lucide-react` stays installed-but-unused.
- Don't promote the hero card's dormant variables (`--accent #c8a0e0`, `--accent-pink #b04090`, `--surface #111118`, `--text-muted #8888a8`) into anything visible.
- Don't add an animation library, parallax, marquee, typewriter, or any continuous idle motion — all motion is CSS + IntersectionObserver.

## Responsive Behavior

### Breakpoints
The build uses **one** primary breakpoint, Tailwind `md` (≥768px), plus two raw widths inside the hero card's stylesheet (`≤768px`, `≤480px`). It is mobile-first: base classes target mobile, `md:` scales up.

| Name | Width | Key Changes |
|---|---|---|
| Phone | <768px | Single column everywhere; side padding `px-5` (20px); display lines at `text-[40px]` / `tracking-[-0.4px]`; hero card padding `60px 20px`, `min-height: auto` |
| Small phone | ≤480px | Hero card radius drops to 16px (other rules unchanged) |
| Desktop | ≥768px (`md:`) | Side padding `md:px-10` (40px); display lines step to `text-display` (56px); Work + Awwwards go 2-up, Stats 3-up; the wide award spans `md:col-span-2` |

> Beyond `md`, no wide-desktop cap is defined for the editorial body (sections span to the viewport edge minus padding); only the hero card caps at `max-width: 1600px`. A later large-desktop treatment would be moderate extrapolation.

### Touch Targets
- Header links carry `pb-[10px]` plus their text height; extend tap padding on any new interactive text so it clears ~44px without changing the visual.
- Media tiles are non-interactive (the hover-zoom is decorative); the only tap targets are nav links, the email link, and the social links.
- The hover-zoom and the active-link underline are the only interactive feedback specified — there is no documented `:active`/focus styling; add `focus-visible` outlines on later pages for accessibility without introducing color.

### Collapsing Strategy
- Every grid collapses to one column below `md`: Work + Awwwards (`grid-cols-1 md:grid-cols-2`), Stats (`grid-cols-1 md:grid-cols-3`). The wide award keeps `md:col-span-2` only once two columns exist.
- The header link group `flex-wrap`s on narrow widths; the `Brave White` label stays `whitespace-nowrap` on the right at every width.
- Display lines swap from `text-[40px]` to `text-display` (56px) at `md`; tracking relaxes from `-0.56px` toward `-0.4px` on mobile.
- Vertical rhythm is hand-set with arbitrary margins (`mt-[120px]`, Work `mt-[60px]`) and does not change across breakpoints.

### Image Behavior
- Work images use `loading="lazy"`; the hero photograph and award videos load eagerly (videos autoplay on mount).
- `aspect-[4/3]` / `aspect-video` are set on every media element so the grid reserves space and avoids layout shift.
- Hold every media element to `object-cover`; the `media-hover` wrapper must clip overflow so the zoom stays framed.
- Respect `prefers-reduced-motion`: the global guard collapses all transition/animation durations to `0.01ms` and disables the digit keyframe and the panel transition.

## Iteration Guide

1. New page (case study, about, writing index)? Start from `{colors.canvas}` + Inter 400 + the negative-tracking scale + left-aligned columns + `↓` section cues. The shell is the brand.
2. Keep the three-value rule absolute — a new "needs emphasis" moment is answered by Chalk-on-Ash contrast or by photographic media, never by a new color.
3. Reference everything by token name (`{colors.X}`, `{rounded.X}`, `{components.X}`) so a value change cascades.
4. Spacing is inline arbitrary values, not a scale: section gaps `mt-[120px]` (Work `mt-[60px]`), element gaps `20px` / `40px`, title→desc `mt-[5px]`. Stay on those steps.
5. One font, one weight (400) in the body; the hero card's light 300 is the only exception and stays inside the card.
6. The shadow / border / surface ban holds: a new block that "needs depth" gets photographic media or a scroll-reveal, never a border or a box-shadow.
7. Motion is the transitions.dev token block + IntersectionObserver only. New motion reads the same `:root` tokens (reveal `24px / 600ms`, digit `8px / 500ms / 70ms`, hover `scale(1.03) / 700ms`); don't add a library or continuous idle motion.

## Known Gaps

- The build is a single page; later-page layouts (a full case study, an about page, a contact form) are not specified — design them in the same midnight-monochrome language: Canvas, Inter 400, square corners, `↓` cues, zero accent.
- Form/input and validation states (text input, error, success, disabled) do not appear in the build — they'd need a monochrome treatment (Chalk text, Ash placeholder, hairline borders only if unavoidable) consistent with the no-surface rule.
- The final section is documented as **Awwwards** (award videos: two 4:3 + one 16:9 full-width) per the canonical prompt; the shipped build folder renames that component `Testimonials` while keeping the same grid spec. The structure is identical — treat the prompt's Awwwards naming as the system of record.
- Hover / active / focus states beyond the media hover-zoom and the active-nav underline are not documented; add `focus-visible` outlines on later pages without introducing color.
- The middle `heading` (28px) and `heading-sm` (24px) scale steps are defined in the tokens but unused in the build — they exist for later pages.
- The hero card's stylesheet carries dormant accent/surface variables (`--accent`, `--accent-pink`, `--surface`, `--text-muted`, `--border`) that are never rendered; the system of record is the monochrome body + the contained hero card, not those leftovers.
