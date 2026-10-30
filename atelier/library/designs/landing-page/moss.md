---
version: "1"
name: "Design System Inspired by MOSS"
description: "MOSS is a dark botanical commerce system: a #060606 near-black canvas where every surface is drawn with 1px white hairlines instead of shadows, every control is a frosted-glass uppercase pill, and every headline is DM Sans at weight 300 with exactly one word flipped into italic DM Serif Display. The palette is strictly monochrome warm-white (#f4f2ee) stepped through two alpha rungs; the only motion is 0.35s hovers on one shared ease and a 28-second marquee. No scroll-reveal exists — the page renders complete, then simply responds."
colors:
  bg: "#060606"                              # page canvas — near-black, one step off pure
  bg-soft: "#0d0d0d"                         # cards, marquee band, footer
  bg-card: "#111111"                         # image-placeholder fill
  text: "#f4f2ee"                            # warm white — all primary type + solid CTA fill
  text-dim: "rgba(244,242,238,0.62)"         # secondary text — body, descriptions
  text-faint: "rgba(244,242,238,0.38)"       # tertiary — index numbers, column headings, legal
  line: "rgba(255,255,255,0.14)"             # visible hairlines — pills, icon circles, hover borders
  line-soft: "rgba(255,255,255,0.08)"        # subtle hairlines — cards, list rows, section joints
  accent: "#f4f2ee"                          # declared accent = the warm white itself; no hue exists
typography:
  display: { fontFamily: "'DM Sans', system-ui, sans-serif", weights: "300", role: "all headlines — clamp() 30–72px, light 300, leading 1.08–1.15, tracking −0.02em" }
  accent:  { fontFamily: "'DM Serif Display', Georgia, serif", weights: "400 italic", role: "exactly one <em> word per headline — the signature serif flip" }
  body:    { fontFamily: "'DM Sans', system-ui, sans-serif", weights: "300-400", role: "paragraphs 13–18px at text-dim, line-height 1.6" }
  ui:      { fontFamily: "'DM Sans', system-ui, sans-serif", weights: "500-700", role: "pills/CTAs/eyebrows/labels — 9–11px uppercase, letter-spacing 0.18–0.28em" }
spacing:
  base: "4px"
  pad-x: "clamp(20px, 5vw, 72px)"            # single global horizontal rail
  section-rhythm: "clamp(90px, 14vh, 160px)" # bottom padding of every section
  grid-gap: "16px"                           # product/benefit/review grids
  split-gap: "clamp(40px, 6vw, 96px)"        # 2-col feature sections
  row-pad: "18–24px"                         # hairline list rows (minerals, steps, FAQ)
rounded:
  pill: "999px"                              # every button, tag, input, cart badge
  card: "18px"                               # every card and media slot
motion:
  ease: "cubic-bezier(0.22, 1, 0.36, 1)"     # THE easing — every transition on the page
  hover: "0.35s (pills, cards, CTA) · 0.4s nav bg · 0.3s link colors + FAQ plus"
  marquee: "28s linear infinite, translateX(−50%), track ×2, off under reduced-motion"
  cta-hover: "translateY(−2px) + white glow shadow + arrow slides +4px"
  none: "NO scroll-reveal, NO entrance animation — content is never hidden"
components:
  pill: "Frosted-glass capsule — white/4 fill, blur 12, 1px {colors.line}, 11px/700/0.18em uppercase; hover white/12 + brighter border"
  cta: "Solid warm-white capsule — 15px 30px, black text 11px/600/0.2em, lifts −2px with white-glow shadow, arrow glyph slides right"
  ph: "Placeholder slot — #111 fill, 1px dashed hairline, centered data-label caption in faint uppercase"
  product-card: "Hairline card, 18px radius, 4:5 media over 20px info block, white pill tag, lifts −4px on hover"
  hairline-list: "Numbered rows (01…) split by line-soft top borders — minerals, ritual steps, FAQ all share it"
  benefit-card: "Hairline card with a 44px circled text-glyph (☀︎ ❍ ✚ ≈) — no icon library"
  faq: "Native <details> accordion — 45°-rotating + glyph, JS closes siblings"
  marquee: "16px band on bg-soft between hairlines — 11px uppercase claims separated by ✦"
  nav: "Fixed, transparent → frosted black/72 after 40px scroll; absolute-centered MOSS® wordmark, pill groups both sides"
  hero-video: "Full-bleed looping mp4 under a bottom-up 45% black vignette; falls back to solid black by design"
---

# Design System Inspired by MOSS

## Overview

MOSS draws its entire interface with **hairlines on near-black**. The canvas is `{colors.bg}` #060606 — one step off pure black, kept flat everywhere — and structure comes not from shadows or surface contrast but from 1px white borders at two opacities: `{colors.line-soft}` (8%) for the resting skeleton of cards and list rows, `{colors.line}` (14%) for interactive edges and hover states. Sections sit directly on the canvas separated by nothing but padding and the occasional hairline; the page reads as a single dark sheet with fine white engraving.

Type is the brand. Every headline is **DM Sans at weight 300** — genuinely light, at sizes up to 72px with tracking pulled to −0.02em — and inside each one, **exactly one word flips to italic DM Serif Display**: *ever*, *bottled*, *ritual*, *ingredients*, *weeks*, *morning*, *mouth*, *answered*, *do*. That single serif word per headline is the signature move; two would be decoration, zero would be generic. Around the light display voice, all UI text goes the opposite direction: 9–11px, weights 500–700, uppercase, letter-spacing stretched to 0.18–0.28em — tiny loud labels against huge quiet headlines.

Every control is a **pill**. Nav links, buttons, product actions, tags, the newsletter input, even the cart badge — all run `border-radius: 999px`. The default pill is frosted glass (white at 4% + `backdrop-filter: blur(12px)` + hairline); the primary CTA is the same capsule filled solid warm-white with black text. `{colors.text}` #f4f2ee is deliberately warm — against #060606 it reads as bone/ivory rather than clinical white, which is what makes the dark feel botanical instead of techy. **There is no hue anywhere: no green (despite the sea-moss subject), no purple, no saturated accent — the declared `--accent` token is the warm white itself.**

Motion is almost nothing, on purpose: one shared ease (`{motion.ease}`) drives every transition, hovers run 0.35s, the marquee loops in 28 seconds, and **no scroll-reveal or entrance animation exists** — the page renders fully visible with zero JavaScript dependency for content. The only two JS behaviors are the nav frosting after 40px of scroll and the FAQ accordion closing its siblings.

**Key Characteristics:**
- **Hairline architecture** — structure = 1px white borders at 8%/14%, not shadows, not surface color jumps.
- **Light display + serif accent** — DM Sans 300 headlines with one italic DM Serif Display word each, always inside `<em>`.
- **Micro-label voice** — all UI text 9–11px, 500–700, uppercase, 0.18–0.28em tracking.
- **Pill everything** — 999px radius on every interactive element; 18px on every card.
- **Warm monochrome** — #f4f2ee on #060606, de-emphasis via two alpha rungs (0.62 / 0.38), zero hue.
- **One easing, few moves** — `cubic-bezier(0.22,1,0.36,1)` everywhere; hover lifts of −2/−4px; a 28s marquee; nothing else.
- **Statically visible** — no opacity-0 states, no reveal-on-scroll; content never depends on JS to appear.
- **Placeholder-honest** — every image slot except the hero video ships as a labeled `.ph` frame (dashed hairline + faint caption), designed to look intentional until real photos arrive.

## Colors

> Source: the full MOSS page — nav, video hero, marquee, intro, 4-product shop, what's-inside split, benefits grid, ritual split, reviews, FAQ, final CTA, footer.

### Surface
- **Canvas** ({colors.bg}): #060606 under everything — hero letterbox, section gaps, FAQ. Never pure #000000 except inside the two media stages (`.hero-media`, `.final-media`), where true black is the video/vignette floor.
- **Soft** ({colors.bg-soft}): #0d0d0d — one step up for anything that is a "thing": product/benefit/review cards, the marquee band, the footer.
- **Card fill** ({colors.bg-card}): #111111 — only inside `.ph` placeholder slots, under the dashed border.

### Line (the real structure)
- **Soft hairline** ({colors.line-soft}): rgba(255,255,255,0.08) — card borders at rest, list-row separators, section joints (marquee edges, footer top), the dashed placeholder borders.
- **Visible hairline** ({colors.line}): rgba(255,255,255,0.14) — pill borders, benefit icon circles, newsletter input, and the hover state of every soft-hairline card. Interaction = the border stepping from 8% to 14% (and pills on to 30%).

### Text
- **Warm white** ({colors.text}): #f4f2ee — headlines, pill labels, star rows; also the *fill* of the solid CTA, tags, and cart badge (with black text on top).
- **Dim** ({colors.text-dim}): 62% — body copy, product descriptions, eyebrows, FAQ answers, footer links.
- **Faint** ({colors.text-faint}): 38% — index numbers (01–04), column headings, marquee separators, placeholder captions, legal line.
- De-emphasis is always an alpha rung of the same warm white — never a grey hex, never a smaller weight jump.

### Accent
- None. `--accent` is declared as #f4f2ee — the system's statement that the warm white *is* the accent. Adding a color (even sea-green) would be the single fastest way to break this design.

## Typography

### Font Families

- **DM Sans** (Google Fonts, optical-size axis, weights 300–700 + italic 400) — everything except accent words.
- **DM Serif Display** (Google Fonts, italic) — only inside `<em>`, only one word per headline, always weight 400 italic. Fallback `Georgia, serif`.

### Hierarchy

| Token | Size | Weight | Tracking | Use |
|---|---|---|---|---|
| hero title | `clamp(36px, 5.4vw, 72px)` | 300 | −0.02em | H1, line-height 1.12 |
| `{typography.display}` | `clamp(34px, 4.6vw, 62px)` | 300 | −0.02em | Section titles, 1.08 |
| intro title | `clamp(30px, 4vw, 54px)` | 300 | −0.02em | Intro statement, 1.15 |
| final title | `clamp(32px, 4.6vw, 60px)` | 300 | −0.02em | Final CTA, 1.12 |
| `{typography.accent}` | inherits headline size | 400 italic serif | 0 | The one `<em>` word |
| intro/step body | 15–18px | 300–400 | 0 | text-dim, 1.6 |
| card titles | 16–17px | 500 | 0 | Products, minerals, benefits |
| review quote | 16px | 300 | 0 | 1.55 |
| `{typography.ui}` eyebrow | 11px | 500 (hero: 700) | **0.28em** | Uppercase section labels |
| pill / CTA label | 11px | 700 / 600 | 0.18–0.2em | Uppercase capsules |
| tag / badge | 9px | 600 | 0.18em | Product tags, cart count |
| index numbers | 11px | 300 | 0.1em | 01–04, text-faint |

### Principles

- **300 is the display weight.** Headlines are never bolded for emphasis — emphasis is the serif italic word.
- **One `<em>` per headline, always a single word**, marked in the copy itself. The serif never appears outside `<em>`.
- **The label voice never grows**: anything uppercase stays 9–11px regardless of context; anything large stays light.
- **The hero eyebrow is the one exception** — bumped to 700 and full white for legibility over video.
- Body line-height is a relaxed 1.6 against the tight 1.08–1.15 display leading — air lives in paragraphs, not headlines.

### Note on Font Substitutes

Both families are on Google Fonts — load them directly with the exact query string (DM Sans needs the optical-size + weight axes; DM Serif Display needs italic). If a weight is missing, clamp down to the nearest real weight — never synthesize bold or italic.

## Layout

### Spacing System

- **One horizontal rail**: `{spacing.pad-x}` = `clamp(20px, 5vw, 72px)` pads every section, the nav, and the footer. No per-section rail exists.
- **One vertical rhythm**: `{spacing.section-rhythm}` = `clamp(90px, 14vh, 160px)` as bottom padding on every content section (intro also carries it on top). Sections butt against each other with no margins.
- Grids gap at `{spacing.grid-gap}` 16px; the two 2-column feature splits open to `{spacing.split-gap}` clamp(40–96px).
- Hairline rows: minerals 22px, ritual steps 18px, FAQ 24px vertical padding.
- Width caps are per-block: intro 920px (body 620px), FAQ 860px, hero content 1000px — all centered; product/benefit/review grids run the full rail.

### Grid & Container

- Shop + benefits: `repeat(4, 1fr)`; reviews: `repeat(3, 1fr)`; inside/ritual: `1fr 1fr` with media and text alternating sides (media left in "Inside", right in "Ritual").
- Footer: `1.4fr 1fr 1fr 1.4fr` — brand and newsletter get the wide outer columns.
- Nav is a three-part flex with the brand **absolutely centered** (`left: 50%`), so the wordmark never drifts as groups change width.
- Hero is `min-height: 100svh` flex-centered; final CTA is `min-height: 72svh` grid-centered — the two theatrical moments bracket the commerce content.

### Whitespace Philosophy

Vertical generosity, horizontal economy: sections breathe through the 90–160px rhythm, but content inside runs dense hairline rows and tight 16px grids. The contrast — huge quiet gaps between sections, fine engraved detail inside them — is what makes a placeholder-heavy page still feel premium.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat `{colors.bg}` | The page |
| 1 | `{colors.bg-soft}` + soft hairline | Cards, marquee, footer |
| 2 | Hairline steps up to `{colors.line}` + `translateY(−4px)` | Card hover |
| glass | white/4 + blur(12px) + hairline | Pills; nav gains black/72 + blur(16px) after scroll |
| glow | `0 12px 32px rgba(255,255,255,0.12)` | The ONLY shadow — under the solid CTA on hover |

There are no drop shadows at rest anywhere. Depth cues are: hairline opacity, a step of background (#060606 → #0d0d0d → #111), frosted blur, and tiny hover lifts. The single white-glow shadow exists to make the solid CTA feel lit from behind on hover — reserve it for that.

### Media Treatments
- **Hero video**: full-bleed `object-fit: cover` under a bottom-up vignette (`black/45 → transparent at 45%`) so the centered copy always reads.
- **Final CTA**: solid black stage with a radial edge-vignette — a "video-less hero" that bookends the page.
- **Placeholders** (`{components.ph}`): #111 fill, dashed 8% border, faint uppercase caption via `data-label` — honest, intentional-looking empty frames.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.pill}` | 999px | Every pill, CTA, tag, input, badge |
| `{rounded.card}` | 18px | Every card, media slot, placeholder |

### Iconography

- **No icon library.** The inventory is closed: one inline SVG cart bag (24 viewBox, stroke 1.5, two paths), text glyphs `→ ▾ ✦ + ★`, and the four circled benefit glyphs `☀︎ ❍ ✚ ≈` (17px characters inside 44px hairline circles).
- The FAQ "+" rotates 45° to become an "×" when open — one glyph, two states.

## Components

### Pills & CTAs

**`pill`** ({components.pill}) — the atom of the whole interface. Frosted glass capsule: `rgba(255,255,255,0.04)` fill, `blur(12px)`, 1px `{colors.line}`, 11px/700 uppercase at 0.18em. Hover: fill to 12%, border to 30%. Variants: `pill-ghost` (transparent fill — "View all"), `pill-icon` (tight padding around the cart SVG + white 16px `cart-count` badge), `pill-select` (with 8px ▾ caret).

**`cta`** ({components.cta}) — the same capsule, solid `{colors.text}` with black label, 15px×30px padding. Hover lifts −2px, casts the white glow, and slides the `→` +4px. Used exactly three times (hero, ritual, final) plus the nav-free footer form's Join pill stays a regular pill — the solid treatment marks purchase intent only.

### Commerce

**`product-card`** ({components.product-card}) — hairline card on `{colors.bg-soft}`: 4:5 `.ph` media (dashed bottom border), 20px info block — 17px/500 name, 13px dim description (min-height 40px keeps rows level), price row with 19px/500 price (+12px dim `/mo` suffix) and a pill action. White pill `tag` badges ("Bestseller", "New") sit top-left of the media. Hover: border to 14%, lift −4px.

**`marquee`** ({components.marquee}) — the trust strip: 16px band on bg-soft between hairlines, 11px uppercase claims separated by faint `✦`, duplicated ×2 for the seamless −50% loop, 28s linear.

### Editorial

**`hairline-list`** ({components.hairline-list}) — the shared row pattern: faint 11px index number + content, rows split by soft-hairline top borders (last row also bottom). Minerals (with 16px/500 h4 + 13.5px dim p), ritual steps (16px single lines), and FAQ all derive from it.

**`benefit-card`** ({components.benefit-card}) — hairline card, 32×26px padding, a 44px `{colors.line}` circle holding a 17px text glyph, then 16px/500 title + 13.5px dim body.

**`review-card`** — `<figure>` on bg-soft: 13px star row (4px letter-spacing), 16px quote at 1.55, 12px dim caption.

**`faq`** ({components.faq}) — native `<details>`: 16.5px/400 summaries, hidden markers, the rotating `+`, answers capped at 640px. The only stateful JS on the page closes open siblings.

### Chrome

**`nav`** ({components.nav}) — fixed and transparent over the hero; after 40px of scroll gains `rgba(6,6,6,0.72)` + blur(16px). Left: three pill links. Center (absolute): `MOSS®` at 20px/600/0.12em with a 9px ®. Right: Login pill, USD selector, cart pill with badge.

**`footer`** — bg-soft behind a hairline: brand + tagline, two link columns, newsletter (transparent pill input, focus border to white/40, Join pill), uppercase socials, then a faint legal bar.

### Inputs & Forms

One exists — the newsletter input: transparent fill, hairline border, pill radius, 13px text, faint placeholder, focus border `rgba(255,255,255,0.4)`. Any future field should copy it exactly.

## Do's and Don'ts

### Do

- Draw every boundary with the two hairline opacities; let hover = border stepping 8% → 14%.
- Keep headlines DM Sans 300 and flip exactly one word per headline into `<em>` serif italic.
- Keep all UI text in the micro-label voice: 9–11px, 500–700, uppercase, 0.18–0.28em.
- Use `{motion.ease}` for every transition, 0.3–0.4s; hover lifts stay at −2/−4px.
- Keep the page statically visible — new sections render complete with no reveal states.
- Ship unphotographed slots as labeled `.ph` frames at the correct aspect ratio (4:5 for products/features).
- Keep the hero copy dead-center of the viewport, over the vignette, with nothing else in the hero.

### Don't

- Don't introduce a hue — no green "natural" accent, no purple, no gradient. The warm white is the accent.
- Don't add scroll-reveal, parallax, stagger, or any opacity-0 entrance — this system explicitly has none.
- Don't use drop shadows for depth; the only shadow permitted is the CTA hover glow.
- Don't bold a headline or serif a second word — emphasis budget is one `<em>` per headline.
- Don't round the tokens (#060606 is not #000; 0.08/0.14 are exact; 999px is not 12px).
- Don't install an icon library — the glyph inventory is closed (cart SVG + text characters).
- Don't put a play button, badge, or extra UI in the hero, and don't bottom-align its content.
- Don't replace the CDN hero video with stock footage; a failed load falls back to solid black by design.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Desktop | >1024px | 4-col shop/benefits, 3-col reviews, 4-col footer |
| ≤1024px | tablet | Shop + benefits → 2 cols; footer → 2 cols |
| ≤760px | mobile | Nav left pills hidden, brand goes static (brand + right group); inside/ritual → 1 col with media first (`order: -1`); reviews → 1 col; section heads stack |
| ≤520px | small | Shop, benefits, footer → 1 col; footer bottom stacks left-aligned |

### Fluid Strategy

- All display type and the global rail/rhythm run on `clamp()` — breakpoints only re-flow grids, they never resize type.
- `100svh` / `72svh` (not `vh`) keep the hero and final CTA honest under mobile browser chrome.

### Touch Targets

- Pills are ≈37px tall with generous horizontal padding; CTAs ≈47px; FAQ summaries pad to ≈65px rows — all comfortably tappable.
- Hover states (border steps, lifts, glow) are garnish; every affordance is readable at rest on touch.

### Media Behavior

- Hero video: `autoplay muted loop playsinline`, covers at every ratio; the vignette is a CSS `::after`, so it survives any footage swap.
- Marquee pauses (animation: none) under `prefers-reduced-motion`; everything else is hover-only and needs no guard.

## Iteration Guide

1. New section? Start from the canvas + `{spacing.section-rhythm}` + a centered eyebrow/title pair, then choose: full-rail grid (cards) or 920px editorial column.
2. New card type = bg-soft + soft hairline + 18px radius + 0.35s border/lift hover. Never invent a third surface color.
3. New list = the `{components.hairline-list}` pattern with faint 01-numbers.
4. New emphasis word goes inside `<em>` — one per headline, choose the word that carries the sentence's promise.
5. New control = a pill variant; if it converts money, it may be the solid `cta` — otherwise frosted glass.
6. Replacing placeholders: keep each slot's aspect ratio and radius; dark, desaturated botanical photography preserves the mono palette.
7. If motion is ever added, it must ride `{motion.ease}` at ≤0.4s and may never gate visibility.

## Known Gaps

- All commerce is decorative: `href="#"` links, a static `0` cart count, `onsubmit="return false"` on the newsletter — no cart logic, routing, or backend exists.
- Every image slot except the hero video is a `.ph` placeholder by design — real product/lifestyle photography is the single biggest upgrade path.
- The `Affirm` nav label points at `#inside` and `News` at `#journal` (the reviews section) — anchor naming is loose and would need real destinations.
- No semantic states (error/success), no focus-visible treatment beyond the newsletter border, no form validation language.
- `--accent` duplicates `--text`; if a real accent is ever introduced it must be argued against the no-hue rule first.
- The FAQ accordion is the only stateful behavior; anything richer (cart drawer, currency menu) needs its own decision inside the pill/hairline grammar.
