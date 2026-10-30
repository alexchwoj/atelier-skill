---
version: "1"
name: "NONAME® — Monochromatic Burgundy Storefront"
description: "A minimal fashion storefront for a Porto studio, bathed entirely in one burgundy hue on warm grey. Editorial concept-store feel, hairline rules, a signature hover image-flip on product cards, and a curtain reveal on entry. The single burgundy is the brand identity."
colors:
  bone: "#F0F0F0"
  cream: "#E0E0E0"
  stone: "#CCCCCC"
  mist: "#A88A92"
  graphite: "#73263A"
  ink: "#560310"
  oxblood: "#560310"
typography:
  display:
    fontFamily: "Outfit"
    weights: "100–900 (variable)"
    role: "headings — weight does the contrast"
  body:
    fontFamily: "Outfit"
    role: "body, labels, prices"
spacing:
  base: "4px"
  gutter: "1.5rem mobile / 2.5rem desktop"
  container: "1440px max-width"
rounded:
  none: "0px"
  default: "0.125rem"
components:
  product-card: "Hover image-flip: front layer reveals back via L→R clip-path + brightness/contrast blow-out easing to normal"
  curtain-reveal: "Stone panel curtain lifts on initial viewport entry"
  nav: "Full-bleed, no top border, SmallMark left + link-underline right"
  hairline: "1px burgundy-tinted divider, scaleX animation on scroll-in"
---

# NONAME® — Monochromatic Burgundy Storefront

> Fivefold showcase. Pairs with the NONAME prompt. Use this to keep pages you build *after* the landing — product, collection, about — bathed in the same single-burgundy identity.

## Overview

NONAME® is **a minimal editorial concept store** — the calm, disciplined feel of a curated boutique where everything is chosen, nothing is shouted. It's a small Porto studio making considered, made-to-last clothing, and the design embodies that ethos: one hue, hairline structure, generous gutters, and two precise interactions that reward attention.

The governing decision: **one color is the entire identity.** Where a colorless maison (Amée) signals luxury by absence, NONAME does the opposite — it bathes the whole page in a single burgundy across every shade (text, border, surface, curtain). Burgundy *is* the brand; the monochrome is the signature.

The system extends across every surface — product, collection, about, journal — by holding two constants: the burgundy hue family and the Outfit single-family weight ramp. New pages don't need new tokens; they need *fewer* moves. The page opens with a curtain, the products turn on hover, and everything else stays still. That stillness is the boutique's voice.

**Key Characteristics:**
- Monochromatic burgundy palette — every shade is a value of the same hue, on a warm grey floor (`{colors.bone}`).
- Single typeface: Outfit 100–900 variable, weight does all hierarchy contrast.
- Sharp `{rounded.none}` corners throughout — no softening, no shadows.
- Hairline-rule editorial grid in burgundy-tinted `{colors.mist}`.
- Signature hover image-flip on product cards (L→R clip-path + brightness blow-out).
- Curtain reveal on viewport entry in `{colors.stone}`.
- Two ease curves only: `cubic-bezier(0.22, 1, 0.36, 1)` for entries, `cubic-bezier(0.87, 0, 0.13, 1)` for the flip + curtain.
- 1440px max-width container with `1.5rem` → `2.5rem` gutters; deliberately squeezed 4-column intro grid on mobile.

## Colors

> **Source pages analyzed:** Landing page (Nav, Hero, ProductGrid, Journal, ProductGridAsymmetric, Footer). Every color is a value of one burgundy hue family; there is no secondary accent anywhere in the system.

### Brand & Identity
- `{colors.ink}` (#560310) — Primary text and the brand burgundy. **This single color is the identity — burgundy IS NONAME.** Use it confidently and exclusively; there is no second accent, ever.
- `{colors.oxblood}` (#560310) — Token alias of `{colors.ink}` retained for legacy/shadcn `--primary` references. Same hex, no visual difference.

### Surface
- `{colors.bone}` (#F0F0F0) — Warm grey page floor. The neutral ground that lets the burgundy read richly. Also the `bg-bone` blank-product-tile color in the asymmetric grid.
- `{colors.cream}` (#E0E0E0) — Subtle secondary surface (`--secondary`, `--muted`, `--accent` in the shadcn map). Greys, not colors — stays out of the burgundy's way.
- `{colors.stone}` (#CCCCCC) — The curtain-reveal panel. A deeper grey that frames the entry ceremony without competing with the ink.

### Text
- `{colors.ink}` (#560310) — Primary text on every surface. Body copy resolves to this via `text-foreground`.
- `{colors.graphite}` (#73263A) — Secondary muted text and the synthesized-italic accent color (`.ital`). A lighter burgundy, never a neutral gray — even the muted state belongs to the hue.

### Hairlines & Borders
- `{colors.mist}` (#A88A92) — Burgundy-tinted 1px border. Used directly for prominent rules; the `--border` and `--input` shadcn tokens map to `351 8% 78%` (a desaturated cousin) for shadcn primitives.
- `border-foreground/15` — The idiomatic hairline expression in Tailwind: 15% of the burgundy ink. Matches the `.hairline` utility exactly.

## Typography

### Font Family
- **Outfit** — Google Fonts variable, weights `100..900`. Single CSS stack: `'Outfit', system-ui, sans-serif`. Mapped to all four Tailwind font aliases (`sans`, `display`, `serif`, `mono`) so every text element resolves to Outfit by construction.
- OpenType note: Outfit ships **no italic face** — `.italic` and `<em>` are browser-synthesized obliques. This is intentional. Do not load Outfit Italic. Do not swap in a secondary italic family.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `display-xl` | `clamp(7rem, 14vw, 14rem)` | 700 | 0.9 | normal | Reserved for future maximal wordmark contexts |
| `display-lg` | `clamp(5rem, 10vw, 9rem)` | 700 | 0.95 | normal | Large editorial headings |
| `display-md` | `clamp(3.5rem, 7vw, 6rem)` | 400 | 1 | `-0.02em` | Journal heading ("Every garment is cut to outlast its season.") |
| `display-sm` | `clamp(2.5rem, 5vw, 4rem)` | 400 | 1 | normal | Section secondary headings |
| `display-xs` | `clamp(2rem, 4vw, 3rem)` | 400 | 1 | normal | Sub-section heads |
| Wordmark SVG | 296px (fits 1391 textLength) | 700 | inline | `lengthAdjust=spacingAndGlyphs` | The giant "NONAME" hero |
| Body | 13.5px | 400 | 1.7 | normal | Journal paragraph (`max-w-[52ch]`) |
| Body-tight | 13px | 400 | 1.55 | normal | Intro paragraph + footer address |
| Caption | 13px | 500 | 1 | normal | Product name + price + links |
| Eyebrow | 10px | 500 (mono-styled) | 1 | `0.18em` (uppercase) | `.eyebrow` kicker (`/// The lookbook`) |
| Colophon | 11px | 400 | 1 | normal | Footer bottom row at `text-foreground/55` |

### Principles
- Weight (not color, not a second face) carries all hierarchy — a thin 100–200 label against a 700 heading is the editorial contrast move.
- Only three weights are actually referenced in the live page: `400` (body), `500` (links + section titles), `700` (wordmark + SmallMark). The rest of 100–900 is loaded but reserved.
- Negative letter-spacing (`-0.02em`) is applied only to display-md and larger — body copy stays at default tracking.
- The giant hero wordmark uses SVG `textLength` + `lengthAdjust="spacingAndGlyphs"` to fill the container width edge-to-edge — never set the SVG to a fixed pixel size.
- Italic is *synthesized* — the `.ital` class applies `italic font-light text-graphite` as an accent inside headings, leaning on the browser oblique. Accept the slight slant imperfection; it's part of the voice.
- Eyebrows use the `///` triple-slash prefix exclusively. Never use `++`, `→`, or `—` as a kicker glyph.

### Note on Font Substitutes
If Outfit fails to load, the stack falls through to `system-ui` then `sans-serif`. System-ui on macOS/iOS resolves to San Francisco, which sits slightly tighter than Outfit at body sizes — compensate by accepting the default tracking (do not loosen) and rely on the `-0.02em` headline tracking already in place. Never substitute Inter, Manrope, or a geometric humanist with a real italic — the synthesized-italic decision depends on the absence of a true italic face.

## Layout

### Spacing System
- **Base unit:** `4px` (Tailwind default scale).
- **Custom spacing tokens:** `26` → `6.5rem`, `34` → `8.5rem` (used for `mt-26` between Hero and ProductGrid, `mt-34` before Journal and Footer).
- **Section vertical rhythm:** Hero `pt-8 md:pt-16 pb-12 md:pb-20`; ProductGrid `mt-16 md:mt-26`; Journal `mt-20 md:mt-34 mb-12 md:mb-16`; Asymmetric grid `mt-12 md:mt-20`; Footer `mt-24 md:mt-34 pb-10`.
- **Intra-section rhythm:** Hairline-to-grid spacing `mt-8 md:mt-10`; row-to-row inside Asymmetric `mb-4 lg:mb-6`.

### Grid & Container
- `.gutter` utility: `mx-auto w-full max-w-[1440px] px-6 md:px-10` — the single container expression used by every section.
- Product grids: `grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6` (top) and 3-up Asymmetric rows at `grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6`.
- Journal grid: `grid grid-cols-16 gap-4` — a 16-column system, with `col-span-3` kicker + `col-span-13` heading.
- Hero intro: `grid grid-cols-4 gap-6 md:gap-10` — four equal cells that deliberately squeeze on mobile (do NOT stack vertically).

### Whitespace Philosophy
Whitespace is the second material after burgundy. The 1440px container, generous 6.5rem–8.5rem section gaps, and 16-column journal grid exist so that any single product, paragraph, or hairline has air around it. Nothing competes for attention. The empty `bg-bone` tiles in the asymmetric grid are not missing content — they are intentional rest beats inside the rhythm.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border-radius, full burgundy contact | Default surface for every section — page floor, product cards, footer |
| Hairline | `border-foreground/15` 1px (or `.hairline` utility) | Section dividers, footer colophon top, card frames |
| Curtain | `{colors.stone}` solid panel, `origin-left scaleX(1 → 0)` | Viewport-entry reveal on ProductCard + Hero hairline |
| Image-flip | Layered clip-path + brightness/contrast filter | Product card hover transition (no shadow involvement) |

**Shadow philosophy.** There are no drop shadows in NONAME. None. The concept-store ethos is flat and sharp — depth is communicated through hairlines, clip-paths, and stacked image layers, not through CSS shadows. If a state needs more presence, increase the burgundy contrast (`text-foreground` vs `text-foreground/70`) before reaching for elevation.

**Decorative Depth.**
- The hover image-flip *is* the depth — two stacked image layers, the back revealed via L→R clip-path expansion.
- The curtain reveal *is* a layer — a stone panel above the product, slid off on viewport entry.
- The animated hairlines *are* arrival — `scaleX: 0 → 1` from `origin-left` over 900ms turns a 1px rule into a small event.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | `0px` | The default for every editorial surface — section dividers, headings, blank tiles |
| `{rounded.default}` | `var(--radius)` → `0.125rem` | shadcn primitives (Button, Input, Badge) — a near-sharp 2px to keep the editorial tone |
| Tailwind `rounded-DEFAULT` | inherits `--radius` | Product card outer frame and clip-path container |
| (No `sm`, `md`, `lg`, `pill`, `full` tokens) | — | Intentionally absent. Pills and full-rounds break the concept-store voice. |

### Photography Geometry
- **Product cards (primary):** `aspect-large` → `9 / 12` portrait. Used by the 4-up top grid and the Asymmetric Row A.
- **Product cards (secondary):** `aspect-small` → `242 / 240` near-square. Used by Asymmetric Row B accessories.
- **Hero wordmark:** SVG viewBox `0 0 1391 296`, no fixed pixel size — `block w-full h-auto`.
- **Image radius:** product images inherit the card's `rounded-[var(--radius)]` — a barely-perceptible 2px softening, never more.
- **Loading:** front and back product images must share lighting, backdrop, and crop so the flip reads as one garment turning. Kebab-case filenames under `/public/products/<slug>.png` + `<slug>-2.png`. No lazy-loading specified (not surfaced in analyzed pages).

## Components

### Top Navigation

**Nav** `{component.nav}` — Full-bleed, no top border. Container `flex items-center justify-between px-4 py-8 lg:px-6`. **Left** holds the SmallMark inline SVG (a single "n." glyph at 14px Outfit 700 inside a 24×12 viewBox), filled with `currentColor`. **Right** is `flex items-center gap-8 text-[13px]` containing two anchors: `Shop` (current state — `.link-underline.link-selected`, underline always visible) and `Bag (0)` (`.link-underline`, underline grows on hover). The `(0)` is a hardcoded literal — cart state is unimplemented.
- **Default:** burgundy `text-foreground` on `bg-bone`, links unweighted (font-medium implicit via cascade).
- **Active state:** `Shop` gets `.link-selected` — the 1px `currentColor` underline is fixed at `scaleX(1)`.
- **Focus state:** rely on browser default outline (`--ring` maps to `{colors.ink}`).

### Buttons

**Button — Primary** `{component.button-primary}` — shadcn `default` variant. `bg-primary text-primary-foreground` → burgundy fill on bone text, `rounded-[var(--radius)]` (2px), 13px Outfit 500.
- **Default:** `bg-ink` / `text-bone`, 1px implicit border via `--border`.
- **Active:** browser-default depressed state; no token override.
- **Focus:** 2px `--ring` outline in `{colors.ink}`.

**Button — Ghost** `{component.button-ghost}` — shadcn `ghost` variant. Transparent surface, `text-foreground`, no border. Used for icon triggers (mobile drawer toggle).
- **Default:** transparent, 13px text.
- **Active:** background fades to `--accent` (`{colors.cream}`).
- **Focus:** `--ring` outline.

**Button — Utility (Icon)** `{component.button-icon}` — shadcn `size="icon"`. Square 36px footprint, used for the mobile `Menu` and drawer close `X` (lucide-react icons).
- **Default:** ghost styling, icon at `currentColor`.
- **Focus:** `--ring` outline.

### Cards & Containers

**Card — Product (with image)** `{component.product-card}` — The signature surface. `group relative overflow-hidden bg-bone aspect-large rounded-[var(--radius)]` wrapping **two stacked `<img>` layers**. The front image is always rendered; the back image lives inside a clip-path container that animates from `polygon(0 0, 0 0, 0 100%, 0 100%)` to full-cover on `group-hover`, with the back image simultaneously easing from `scale(1.2) brightness(380%) contrast(150%)` to `scale(1) brightness(100%) contrast(100%)` over 700ms `cubic-bezier(0.87, 0, 0.13, 1)`. Below the image: a 2-row caption — `name` (left, `text-foreground`) + `price` (right, `text-foreground/70`) on row 1, `eyebrow` `category` on row 2.
- **Default:** front image visible, back image clipped to a 0%-width slice on the left.
- **Active (hover/touch):** back image expanded L→R, blow-out filter eased back to normal — the "garment turned."
- **Focus:** card relies on caption link focus, not card-level focus (anchor wraps caption).

**Card — Product (blank)** `{component.product-card-blank}` — When `product.blank === true` (`cotton-scarf`, `wool-cap`). Renders a single empty tile: `<div className="aspect-large rounded-[var(--radius)] bg-bone" />`. **No images, no curtain, no caption, no hover.** The empty slot is the design — a rest beat inside the asymmetric grid.

**Card — Product (canvas fallback)** `{component.product-card-canvas}` — When neither `image` nor `blank` is set: `ProductCanvas.tsx` renders one of six SVG/CSS variants matching `product.front` — `glyph`, `stamp`, `ruled`, `grid`, `medallion`, `marquee`. All use `bg-bone` + `text-ink` + Outfit. Simple, no animation, no chrome.

### Inputs & Forms

**Input — Default** `{component.input-default}` — shadcn `input.tsx` new-york variant, unmodified. `bg-bone` surface (via `--background`), `border-[hsl(var(--input))]` (a desaturated 351 8% 78% border), `text-foreground`, `rounded-[var(--radius)]`, 13px Outfit. No form is implemented in the landing — the primitive exists for future product/checkout extensions.
- **Default:** desaturated 1px border.
- **Focus:** `--ring` 2px outline in `{colors.ink}`.

### Footer

**Footer** `{component.footer}` — `.gutter mt-24 md:mt-34 pb-10`, opens with a `.hairline mb-10` animated rule. Main row is `flex flex-wrap items-start justify-between gap-6`. **Studio block** (left, `max-w-xs`): `///` `Studio` eyebrow + 3 address lines at 13px `text-foreground/85` + 1 mailto link `.link-underline`. **Link columns** (right, `flex gap-8 md:gap-14`): three columns (Shop / Help / Elsewhere), each headed by `eyebrow` and listing `.link-underline` anchors at `space-y-2 text-[13px]`. **Colophon row** at `mt-14 pt-6` above a second hairline: `© NONAME® S.A. · MMXXVI` / `Set in Outfit` / `Spring MMXXVI` at 11px `text-foreground/55`.

## Do's and Don'ts

### Do
- Use `{colors.ink}` exclusively as the brand burgundy — every interactive accent traces to this hex.
- Keep every shade inside the burgundy hue family — even hairlines (`{colors.mist}`) and curtains (`{colors.stone}`) belong to it.
- Apply Outfit weight contrast (thin labels vs 700 wordmark) for hierarchy instead of color or a second face.
- Use `.gutter` for every section container — 1440px max with 6/10 px responsive padding.
- Reserve the hover image-flip for genuine second-angle product photography — both layers must share lighting + crop.
- Keep corners sharp at `{rounded.none}`; let shadcn primitives carry the `0.125rem` default only.
- Animate hairlines with `scaleX: 0 → 1` from `origin-left` over 900ms `cubic-bezier(0.22, 1, 0.36, 1)`.
- Use the `///` eyebrow prefix and the `→` arrow glyph (not `->`) in CTAs like `View Spring MMXXVI →`.

### Don't
- Don't introduce any color outside the burgundy palette — a stray blue or green breaks the "one color is the identity" thesis instantly.
- Don't add a second font family. Outfit's weight range is the whole system; `sans`/`display`/`serif`/`mono` all map to it.
- Don't load Outfit Italic or substitute a real italic face — `.italic` and `<em>` stay browser-synthesized by design.
- Don't add drop shadows or soften corners; the concept-store voice is flat and sharp.
- Don't pile on motion beyond the curtain reveal and image-flip — restraint is the brand.
- Don't fill the blank `cotton-scarf` and `wool-cap` tiles with fallback content; the empty `bg-bone` tile is the design.
- Don't add fast-fashion clutter (sale badges, urgency banners, countdowns) — NONAME is considered and made-to-last.
- Don't include `®` in the giant hero SVG wordmark — it appears only in the footer colophon as `NONAME®`.
- Don't add spacer `<div />` elements in Nav for padding; use flex gap + container padding instead.
- Don't auto-fallback the dev port — `vite.config.ts` is `strictPort: true` at 5180 by contract.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤ 419px | Hero 4-col intro squeezes hard; product grid 2-up; gutter `px-6`; section gaps drop to mobile values |
| Phone | 420–640px | Same as above; nav links + SmallMark stay inline |
| Large phone | 641–735px | Asymmetric grid still 2-up; intro grid still 4-up (squeezed) |
| Tablet portrait | 736–833px | Approaching `md`; section paddings prepare to expand at 768px |
| Tablet landscape | 834–1023px | `md:` styles active — gutter `px-10`, intro `gap-10`, `mt-26` rhythm starts |
| Small desktop | 1024–1068px | `lg:` styles active — product grid 4-up, gutters `gap-6`, mobile drawer trigger hides |
| Desktop | 1069–1440px | Full editorial grid, container snaps to `max-w-[1440px]` |
| Wide desktop | ≥ 1441px | Container caps at 1440px; remaining viewport is bone margin — never widen the grid |

### Touch Targets
- Minimum target: 44 × 44px (iOS HIG). Nav links carry implicit padding via `py-8` parent; small caption links rely on text-line height + line-spacing.
- Mobile drawer trigger uses `Button size="icon"` (36px) wrapped inside a touch-padded parent — adjust upstream padding to meet 44px in production.
- The image-flip is a hover affordance — on touch, swap to a tap-toggle that latches the back image (not surfaced in current code).

### Collapsing Strategy
- **Nav:** Desktop shows inline `Shop` + `Bag (0)`. Mobile shows a `Menu` icon button that opens a full-screen `bg-bone` drawer sliding in from the right over 400ms.
- **Hero intro grid:** The 4-column grid **does not stack** on mobile — cells squeeze. This is deliberate editorial discipline.
- **Product grid (top):** 2-up on phone/tablet → 4-up at `lg:` (1024px).
- **Asymmetric grid:** 2-up on phone → 3-up at `md:` (768px), each row independent.
- **Journal:** 16-column grid holds across breakpoints; kicker `col-span-3` + heading `col-span-13` ratio is preserved.
- **Hero wordmark:** SVG `textLength` mechanism auto-fits container width; no breakpoint-specific font sizing required.
- **Footer link columns:** `flex gap-8 md:gap-14` — gap grows at tablet+; columns wrap below studio block on small phones.

### Image Behavior
- Aspect ratios fixed via Tailwind `aspectRatio` extensions (`large: 9/12`, `small: 242/240`) — never override per-card.
- `object-cover` on both `<img>` layers; crop is decided at the asset stage, not in CSS.
- srcset / responsive image sources: not surfaced in analyzed pages — author single `.png` / `.jpg` per face.
- Lazy loading: not surfaced; default browser eager-load is acceptable for the 10-product landing.

## Iteration Guide

1. **New page (product, collection, about)?** Stay entirely inside the burgundy hue — text, border, surface are all values of it. No new accent color, ever.
2. **Hierarchy comes from Outfit weight + scale**, never from a new color or face. Reach for `font-weight: 700` before `text-graphite`, and for size before weight.
3. **One component per file** — `ProductCard.tsx` owns the flip; variants (blank, canvas) live inside it as conditional branches, not as new sibling components.
4. **If you add an interaction, make it a reward** (like the flip), not decoration. The two existing gestures are the budget.
5. **Use `{colors.tokenName}` references** in code — never inline a hex. The HSL `:root` vars are the contract.
6. **Never document hover-only states** in the design system. Default / active / focus are the canon trio (active = hover-or-touch on cards).
7. **Display vs body family:** they are the same family. Display = Outfit 700 + display-md/lg/xl size + negative tracking. Body = Outfit 400 at 13/13.5px. Don't introduce a serif or mono override.

## Known Gaps

- Cart / checkout / product-detail flows are not specified — only the storefront landing. Keep them monochrome-burgundy with the same hairline grid; resist adding "buy now" color accents.
- The image-flip needs a documented touch fallback (tap-to-flip) — only the hover behavior is specified.
- Outfit's synthesized italic is intentional but fragile; if real italic is ever needed it's a system-level decision, not an ad-hoc swap.
- Dark mode is not surfaced in analyzed pages. The page is single-mode burgundy-on-bone by design; a dark variant would require re-deriving the entire hue ladder.
- Form validation states (error/success on Input) are not surfaced — shadcn primitives exist but no field is wired in the landing.
- srcset / responsive image sources / explicit lazy-loading are not surfaced — production deployment should add them without changing the aspect tokens.
