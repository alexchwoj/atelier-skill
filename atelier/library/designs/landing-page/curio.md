---
version: "1"
name: "Design System Inspired by Curio"
description: "Curio is a content-forward SaaS landing where the product demo is built entirely from CSS: a warm-white paper canvas, near-black ink, one cobalt accent (#2547ff), and a hero collage of twelve generative 'saved item' cards — mini browsers, palette strips, type specimens, gradients, UI fragments — each tilted by a CSS variable and flattening on hover. DM Sans is the only typeface including the technical chips; shadows exist only on interactive elements; every visual placeholder is pure CSS/SVG with zero stock images. Below the collage: four alternating feature rows with scrub parallax, a paused-on-hover logo marquee, two-card pricing, and a dark final CTA panel with a faint cobalt glow."
colors:
  paper: "#fdfdfc"        # page canvas
  mist: "#f4f4f2"         # tinted bands — logos + pricing (at /40)
  ink: "#101014"          # primary text + final CTA panel
  ink-soft: "#52525e"     # secondary text
  ink-faint: "#8b8b96"    # tertiary, labels, footnotes
  line: "#e8e8e4"         # hairlines
  cobalt: "#2547ff"       # THE accent — CTAs, checks, glow, selection
  cobalt-soft: "#eaeeff"  # accent tint surfaces
  cobalt-deep: "#1a35cc"  # accent hover
typography:
  sans: { fontFamily: "'DM Sans Variable', ui-sans-serif, system-ui, sans-serif", weights: "400-800", role: "MỌI text — kể cả chip kỹ thuật (font-mono map về DM Sans); H1 extrabold 5xl→7xl tracking −0.03em text-balance; micro-label 11px semibold caps 0.14–0.2em" }
spacing:
  container: "max-w-6xl, sections px-4 py-24 sm:py-36"
  collage: "columns-2 sm:columns-3 lg:columns-4, gap 4, mt-16"
  pricing: "max-w-4xl, grid 1→2 cols"
rounded:
  card: "12px (rounded-xl) — collage cards; 16px (rounded-2xl) pricing; 24px (rounded-3xl) CTA panel"
  pill: "9999px — nav, mọi button"
motion:
  ease-css: "cubic-bezier(0.22, 1, 0.36, 1)"
  hero: "GSAP expo.out — [data-hero-stagger] y-rise stagger 0.09; collage pop-in stagger {each: 0.05, from: 'random'}"
  parallax: "mỗi feature visual — y drift fromTo, scrub 1.2, start 'top 95%'"
  lift: ".lift — translateY(-4px) + shadow-lift-lg, 500ms"
  collage-hover: ".collage-card — rotate(var(--tilt)) → rotate(0) translateY(-6px) scale(1.03), 600ms, z-10"
  marquee: "32s linear, pause on hover, gradient fade masks 2 đầu"
  reduced-motion: "marquee dừng, lift/collage transition none, guard 0.01ms toàn cục"
components:
  nav: "floating glass pill — fixed, max-w-5xl, bg-paper/80 backdrop-blur, wordmark 'Curio*' (asterisk cobalt), 3 link, CTA đen 'Get Curio — free'"
  hero: "centered max-w-3xl — H1 'Save anything you see.', sub, 2 CTA, footnote; cobalt radial glow 900×480 opacity 0.07 phía sau"
  collage: "12 generative cards × 5 kind (site/palette/type/gradient/shot), mỗi card white rounded-xl + border line + shadow-card + chip 'Saved →' + --tilt riêng"
  features: "4 hàng text/visual xen kẽ — visual là fake-UI card tự dựng (extension popover, tag chips, visual search bar, shared board), scrub parallax"
  logos: "band mist/40 border-y — 5 cái tên hư cấu + mark SVG 18px, marquee đôi"
  pricing: "Free $0 / Pro $8 — Pro featured: border cobalt, badge, CTA cobalt, .lift"
  cta: "panel ink rounded-3xl, glow cobalt mờ, 'Your eye deserves a better memory.'"
---

# Design System Inspired by Curio

## Overview

Curio's landing page solves the SaaS-screenshot problem by refusing screenshots entirely: **the product demo is built out of CSS**. The hero collage — twelve "saved item" cards in a masonry of 2→4 columns — *is* the pitch: mini-browser mocks with dot headers, five-strip palette cards, type specimens ("Aa — Grotesk / 640"), gradient tiles, and fake-UI fragments, each wearing a tiny "Saved →" chip like a specimen tag. Every card tilts between −3° and 3° via a CSS variable and **flattens to 0° on hover** (600ms, lifting and scaling to 1.03) — the exact sensation of picking a reference off a desk. No stock images exist anywhere on the page.

The chrome around that demo is deliberately plain: warm-white paper (`{colors.paper}`), near-black ink (`{colors.ink}`), hairlines (`{colors.line}`), and **one cobalt** (`{colors.cobalt}`) that behaves like a brand should — it owns the selection color, the checks, the Pro card, the radial glows, and nothing else. Type is even stricter: **DM Sans is the only family on the page**, including the small technical chips that would conventionally be mono (`--font-mono` literally maps to DM Sans). Headlines run extrabold with −0.02 to −0.03em tracking and `text-balance`; micro-labels run 11px semibold caps at 0.14–0.2em.

Below the fold, four **feature rows** alternate text and visual, each visual another hand-built fake UI (extension popover, self-sorting tag chips, a visual search bar querying "that dark pricing page with the serif headline", a shared board) drifting on `scrub: 1.2` parallax. Social proof is a **paused-on-hover marquee** of five fictional studios with 18px SVG marks tinted to text color; pricing is a two-card grid where Pro earns the cobalt border; and the page closes on a **dark ink panel** with a faint cobalt radial glow: "Your eye deserves a better memory."

The shadow policy is worth copying into any system: **shadows exist only on interactive elements** (`.lift` cards, buttons, collage cards) via three tokened values — static layout never casts.

**Key Characteristics:**
- **CSS-generative product demo** — 12 collage cards + 4 feature visuals, all pure CSS/SVG; zero screenshots, zero stock.
- **Tilt-and-flatten physics** — `--tilt` custom property per card; hover resets rotation, lifts, scales; reduced-motion keeps the tilt static.
- **One family, all registers** — DM Sans 400–800 covers headlines, body, chips; the mono register is a styling convention, not a font.
- **Cobalt monopoly** — #2547ff owns interaction, accenting, glow, and selection; #eaeeff and #1a35cc are its only relatives.
- **Interactive-only shadows** — three tokened shadows appear exclusively on things you can touch.
- **Fake-UI storytelling** — features demo themselves through hand-built interface fragments, parallax-drifting on scroll.
- **Glass pill nav** — paper/80 + blur, floating, with the asterisk wordmark `Curio*`.
- **Marquee etiquette** — duplicated track, gradient fade masks, pauses on hover, dies under reduced motion.

## Colors

> Source: nine `@theme` tokens — six neutrals, three cobalts.

### Surface
- **Paper** ({colors.paper}): the canvas — warm white, never pure `#fff` (cards are the white; the page is a half-step warmer, which is what makes the cards read as objects).
- **Mist** ({colors.mist}): applied at /40 as tinted bands behind logos and pricing — a whisper of sectioning without borders doing all the work.
- **Ink panel**: the final CTA reuses `{colors.ink}` as a surface, with the cobalt radial glow at low opacity.

### Text
- **Ink** ({colors.ink}) → **ink-soft** ({colors.ink-soft}) → **ink-faint** ({colors.ink-faint}): a strict three-step text scale. Body copy is soft; labels and footnotes are faint; headlines and prices are full ink.

### Accent
- **Cobalt** ({colors.cobalt}): CTAs (featured), checks (Pro), the wordmark asterisk, glows, `::selection`. **Cobalt-deep** ({colors.cobalt-deep}) is hover; **cobalt-soft** ({colors.cobalt-soft}) is tint surfaces (popover chips, shot-card tones). No second hue exists — greens and pinks appear *only inside* generative card content (palettes, gradients), where they read as saved content, not UI.

## Typography

### Font Families

- **DM Sans Variable** (Fontsource) — everything. The `--font-mono` token deliberately points at DM Sans too, so any `font-mono` utility renders in-brand.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| H1 | text-5xl → sm:text-7xl, leading 1.02 | 800 | "Save anything you see.", −0.03em, text-balance |
| section heading | text-3xl → 5xl | 800 | −0.02em, balanced |
| feature title | 2xl → 3xl | 800 | Row headings |
| body / sub | text-lg | 400 | ink-soft |
| card copy | 14px | 400–500 | ink-soft |
| price | 3xl–4xl | 800 | With "/mo" suffix in faint |
| micro-label | 11px | 600 | caps, 0.14–0.2em — chips, marquee label |
| footnote | text-xs | 400 | ink-faint |

### Principles

- **Extrabold or quiet** — headings commit to 800; everything else stays 400–600. The middle weights exist for chips and buttons only.
- **`text-balance` on every headline** — multi-line heads must break evenly; it's in the spec, not a nicety.
- **The "mono" chips are DM Sans** — uppercase + tracking does the technical voice; a real mono would fracture the single-family identity.

### Note on Font Substitutes

DM Sans loads self-hosted via `@fontsource-variable/dm-sans` — one import, all weights. Do not substitute Inter "because it's similar" and do not reintroduce a real monospace for the chips.

## Layout

### Spacing System

- Container `max-w-6xl`, sections `px-4 py-24 sm:py-36`; nav is its own floating `max-w-5xl` pill.
- Collage: CSS columns (2 → 3 → 4) with gap-4 — masonry by columns, not grid, so tilts overlap organically.
- Pricing narrows to `max-w-4xl`; the CTA panel is an inset `rounded-3xl` block inside the container.

### Grid & Container

- Feature rows: two-column md grids alternating text/visual order; visuals stack below text on mobile.
- The hero is a centered `max-w-3xl` column — CTAs in a row, footnote beneath.

### Whitespace Philosophy

Sections breathe at 6–9rem; the collage is intentionally dense (gap-4) against that calm — a desk covered in references in the middle of a clean studio. Keep that contrast: loosening the collage or tightening the sections both flatten the story.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat paper / mist bands | Layout |
| line | 1px `{colors.line}` | Borders, band seams |
| shadow-card | tokened, soft | Collage cards at rest |
| shadow-lift / lift-lg | tokened | Interactive rest / hover |
| glow | cobalt radial, low opacity | Behind H1 (0.07) + inside CTA panel |

**Static layout never casts.** If an element gains a shadow, it must be hoverable — the shadow *is* the affordance.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.pill}` | 9999px | Nav pill, every button |
| `{rounded.card}` 12px | rounded-xl | Collage cards |
| 16px | rounded-2xl | Pricing cards, feature visuals |
| 24px | rounded-3xl | Final CTA panel |

Radius grows with container importance: card → panel → stage.

### Iconography

No icon library. Vector art is exactly: five solid 24×24 marquee marks stored as raw SVG files (pencil, globe, rocket, sun, beaker — tinted by `.logo-mark svg path { fill: currentColor }`), a thin 20×20 stroke check for feature bullets (ink-faint), and the pricing `Check` component (cobalt on Pro). CTAs are text-only pills — no arrows.

## Components

### Nav ({components.nav})

Fixed glass pill: `bg-paper/80 backdrop-blur border-line rounded-full`. Wordmark `Curio` + cobalt `*`; three quiet links; black CTA pill with `.lift`. Below `sm`, links hide — wordmark and CTA survive.

### Hero ({components.hero})

Four staggered elements (`data-hero-stagger`, expo.out, 0.09): H1, sub ("…so your next idea starts warm."), CTA pair (black pill + ghost), and the footnote ("Free forever for your first 500 saves. No card required."). Behind it, the 900×480 cobalt glow at 0.07 — felt, not seen.

### Collage ({components.collage})

Twelve cards across five generative kinds, each `--tilt`ed (−3° → 3°) with border, `shadow-card`, and the "Saved →" chip. Pop-in staggers `{each: 0.05, from: 'random'}` — the desk assembles from the middle out. Hover flattens, lifts, scales, and z-indexes above neighbors. Verbatim data (studio-verse.com, Dusk tones, Editorial No. 4, Meadow blur, Checkout flow, foundry.design, Terracotta set, Mono Spec, Onboarding cards, Signal fade, atlas-journal.co, Paper & ink) — the fictional names are part of the design.

### Features ({components.features})

Four rows under "From “ooh, nice” to organized in one keystroke." Each: extrabold title, soft body, three bullets with thin checks, and a hand-built visual (extension popover / tag chips / search bar querying plain words / shared board) drifting on scrub-1.2 parallax from `top 95%`.

### Logos ({components.logos})

The social-proof band: "Trusted by teams with taste" in micro-caps, then the marquee — five fictional studios (FIELDNOTE STUDIO → OBJET LAB), each mark + name, duplicated track aria-hidden, gradient fades at both ends, paused on hover.

### Pricing ({components.pricing})

Free ($0 forever, "Everything you need to start a serious reference library.") vs Pro ($8/mo, "For people whose bookmarks folder gave up years ago.") — Pro takes the cobalt border, badge, `.lift`, and cobalt CTA. Feature lists are verbatim strings with checks.

### Final CTA ({components.cta})

Ink `rounded-3xl` panel, faint cobalt glow, white text: headline, one line of proof, the black-on-white… no — the cobalt-context CTA, and the platform footnote ("Mac, Windows, and every modern browser."). The page's only dark surface, saved for the close.

## Do's and Don'ts

### Do

- Build every visual in CSS/SVG — new card kinds join the five existing generators.
- Keep `--tilt` on a custom property so hover (and reduced-motion) can override it cleanly.
- Keep shadows tokened and interactive-only.
- Keep cobalt exclusive: one accent, two relatives, `::selection` included.
- Duplicate the marquee track with `aria-hidden` and keep the fade masks.
- Use `text-balance` on all multi-line headings.
- Let palette/gradient cards carry foreign hues — they are content, not UI.

### Don't

- Don't introduce screenshots, stock imagery, or product photos — the CSS-built demo is the identity.
- Don't add a second accent or use cobalt as body-text color.
- Don't shadow static sections or borders.
- Don't swap DM Sans chips for a real monospace.
- Don't let the collage animate on scroll — it pops once on load; scroll motion belongs to feature visuals only.
- Don't add arrows/chevrons to CTAs; pills stay text-only.
- Don't raise the hero glow above ~0.07 — at visible strength it becomes a gradient background, which the spec forbids.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px | Collage 2 cols; nav links hidden; H1 5xl; pricing stacks |
| sm | ≥640px | Collage 3 cols; H1 7xl; py-36 |
| md | ≥768px | Feature rows go two-column; pricing 2 cols |
| lg | ≥1024px | Collage 4 cols |

### Fluid Strategy

- The collage reflows by column count, not card resizing — cards keep their intrinsic proportions and tilts at every width.
- Feature visuals cap their height and scale within their column; parallax amplitude is constant.

### Touch Targets

- All buttons are ≥40px pills; collage hover-flatten degrades gracefully (cards simply stay tilted); marquee pause-on-hover is a no-op on touch.

### Media Behavior

- No media at all — the page ships with zero images/videos; the favicon is the only asset. This makes the reduced-motion story trivial: transitions zero out and the page is instantly complete.

## Iteration Guide

1. New collage cards: pick a kind (or design a sixth generator), assign a title in the same fictional voice, and a tilt between −3° and 3° that breaks up its column neighbors.
2. New features follow the row grammar: verb-first title, three bullets, one fake-UI visual built from existing chip/bar/card primitives.
3. Real logos would replace the five marks 1:1 — keep 18px, keep currentColor tinting, keep five to seven items max.
4. A changelog/blog inherits paper + hairlines + micro-labels; cobalt stays reserved for links and CTAs.
5. Dark mode: invert paper/ink, keep cobalt as-is (it holds on both), and re-tune the two glows upward slightly.
6. If annual pricing appears, it's a toggle pill pair — not a third card; the two-card tension is the layout.

## Known Gaps

- All CTAs and nav links are stubs; the "extension" does not exist — the page is a fiction with a legal line admitting it ("A fictional product, lovingly imagined.").
- The collage pops in from near-visible states, but extremely-early scrollers on slow devices may catch the stagger mid-flight.
- Marquee marks live as raw SVG files with hardcoded fills, overridden by CSS — swapping in marks without `path` elements (e.g. strokes) would escape the tint rule.
- No form, no email capture — conversion is a dead-end by design.
- Focus-visible styling is browser-default.
