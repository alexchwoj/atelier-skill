---
version: "1"
name: "Paper-white technical mint"
description: "Light-mode-default engineering system on a near-white field, with a single mint-green accent rationed to CTAs and diagram glyphs, sharp-cornered utility type, and one orange gradient card family breaking the palette mid-page."
colors:
  background: "#FDFDFD"
  surface: "#FFFFFF"
  text-primary: "#030303"
  text-secondary: "#696969"
  text-tertiary: "#464646"
  accent: "#72E3AD"
  accent-deep: "#3FCF8E"
  accent-hover-strong: "#0A844E"
  border: "#000000"
  border-accent: "#15B674"
  gradient-orange: "#FA934E"
typography:
  display-lg:
    fontFamily: "Manrope"
    fontSize: "46px"
    fontWeight: 500
    lineHeight: "1"
  headline-md:
    fontFamily: "Manrope"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: "1.5"
  body-md:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: 450
    lineHeight: "1.5"
  label-md:
    fontFamily: "Manrope"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: "1.43"
  accent-mono:
    fontFamily: "Source Code Pro"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.5"
spacing:
  base: "4px"
  gap: "16px"
  gap-lg: "24px"
  section-padding: "270px"
rounded:
  control: "6px"
  input: "8px"
  card: "12px"
  card-lg: "16px"
  pill: "9999px"
  sharp: "4px"
components:
  button-hero-primary:
    background: "#72E3AD"
    text-color: "#030303"
    radius: "6px"
    height: "38px"
    padding: "8px 16px"
    border: "1px solid oklch(0.1 0 34 / 0.146418)"
    note: "observed on first screen; exact fill/height carried from nav-CTA measurement of same visual family"
  button-nav-cta:
    background: "#72E3AD"
    text-color: "#030303"
    radius: "6px"
    height: "26px"
    padding: "4px 10px"
    border: "1px solid oklab(0.685565 -0.144466 0.057858 / 0.75)"
    hover-background: "rgba(62, 207, 142, 0.8)"
  button-nav-utility:
    background: "transparent"
    text-color: "#030303"
    radius: "6px"
    height: "34px"
    padding: "8px"
    border: "1px solid rgba(0, 0, 0, 0)"
    hover-text-color: "#0A844E"
  button-secondary-outline:
    background: "#FDFDFD"
    text-color: "#030303"
    radius: "6px"
    height: "38px"
    padding: "8px 16px"
    border: "1px solid oklch(0.1 0 34 / 0.146418)"
  button-tab-flat:
    background: "transparent"
    text-color: "#696969"
    radius: "0px"
    height: "60px"
    padding: "16px 0px"
    hover-background: "rgba(253, 255, 255, 0.5)"
    hover-text-color: "#464646"
  card-feature-bento:
    background: "transparent"
    radius: "12px"
    padding: "0px"
    border: "none"
  card-fullwidth-panel:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  card-testimonial-gradient:
    background: "linear-gradient(to left bottom, color(display-p3 0.980392 0.364706 0.098039) 0%, color(display-p3 0.980392 0.364706 0.098039 / 0.9) 100%)"
    radius: "8px"
    padding: "32px"
    shadow: "rgba(255, 255, 255, 0.12) 0px 0px 0px 1px inset"
    text-color: "#FFFFFF"
  card-logo-tile:
    background: "linear-gradient(to left bottom, color(display-p3 0.275 0.306 0.8) 0%, color(display-p3 0.118 0.176 0.769) 100%)"
    radius: "0px"
    padding: "0px"
---
# Paper-white technical mint
Source: https://supabase.com/

## Overview
This is a light-mode-default developer-tool aesthetic: a near-white paper field (`#FDFDFD`/`#FFFFFF`, ~85%+ of rendered pixels) carrying dense, technical content in flat, sharp-edged panels. It reads as Swiss-influenced information design crossed with a bento product grid — grid-strict, typography-led headlines in Manrope paired with an Inter body face, zero drop shadows on most surfaces, and a single saturated mint accent (`#72E3AD`/`#3FCF8E`) rationed almost exclusively to buttons and diagram glyphs. The system trusts whitespace and hairline black borders over color to establish structure, then punctuates the calm with one deliberately hot orange gradient card family and a dot-matrix numeral treatment near the footer.

## Composition
The first screen opens with a two-column hero: a left-aligned stacked headline (mixed weight, second line in mint) over two buttons, paired with a short right-column support line — then immediately drops into a dense 3-up/3-up bento feature grid, no full-bleed hero image or video. Scrolling reveals a steady rhythm of full-width panels (each a single dashboard screenshot bleeding to its container edge), a muted logo strip, a features-tabbed dashboard mockup, then a color break: one wide orange gradient testimonial card beside four narrow color-block tiles. The page closes with a scrolling community-quote mosaic, a dot-matrix stat numeral treatment, a repeated centered CTA band, and a six-column link footer. Section gaps run large (~270px), giving each band room to breathe against the flat white field. The deliberate choice is restraint-by-default with color reserved for proof points (testimonials, stats) rather than the hero — rejecting the alternative of an aurora/gradient-drenched hero that competitor dark-mode dev-tool sites favor.

## Colors
`#FDFDFD`/`#FFFFFF` is the background and surface role, accounting for the dominant pixel field — this is a white-canvas system, not a dark one, despite the mint brand color. `#030303` is text-primary (near-black ink, not pure black), `#696969` is text-secondary for supporting copy, `#464646` appears as a hover-state text tone. `#72E3AD` is the sole accent — used on the hero's second headline line, the nav CTA, the hero primary button fill, and scattered diagram/glyph accents (dot-matrix stat treatment, small map pins) — it never appears as a background wash or fills more than a control-sized element. `#000000` supplies hairline borders throughout (`--border`). The one deliberate palette break is the orange gradient (`color(display-p3 0.980392 0.364706 0.098039)`) on a single testimonial card and its adjacent color-block tiles (`#2A2A2A`→`#181818`, an indigo `#2A2A2A`-class gradient) — these are intentionally left as the only saturated non-mint hues on the page, isolated to one band. Large areas — the entire dashboard-screenshot bands, the footer — are left fully uncolored (white/gray only), keeping color as an event, not a wash.

## Typography
Manrope carries all display and heading roles: `display-lg` at 46px/500/lh-1 for hero and section headlines, `headline-md` at 16px/600/lh-1.5 for card titles, `label-md` at 14px/500/lh-1.43 for eyebrow-style labels and nav items. Inter carries all body copy at 16px/450/lh-1.5 in `#030303` with secondary passages dropping to `#696969`. Source Code Pro appears as an accent-mono face on inline API-path fragments and terminal-style snippets inside product diagrams (e.g. deploy commands) — the system's one typographic signature beyond weight contrast. A stray Times New Roman is present but not a designed accent; treat Manrope/Inter/mono as the intentional triad. Hierarchy is built by weight and size jump (46px display vs 16px body) rather than color — headlines stay near-black, with only the mint accent line breaking that rule.

## Layout
Content is capped at a 1280px max-width container, centered. The hero feature area is a 12-column grid (gap 24px) with row spans of [42/20/20 | 20/20/20/20 | 85] — a large lead card (Postgres Database, ~42% width) beside two stacked 20%-width cards, then a second row of four equal 20%-width cards, then one near-full 85%-width panel. A secondary grid runs 7 columns (gap 16px) at [28/71] — a narrow label column beside a dominant 71%-width panel. A tighter 5-column, 8px-gap grid with five equal 20%-width items appears for compact icon/tool rows. Full-width dashboard panels stack as single-column [100 | 100 | 100 | 100 | 100] bands with zero radius and zero padding — these are meant to bleed edge-to-edge inside the container. Card radius steps from 12px (feature bento cards) down to 0px (full-bleed panels) up to 8px (the orange gradient testimonial). Section-to-section vertical gap runs roughly 270px, giving a spacious, editorial pace despite dense card contents.

## Components
- **Navbar**: fixed/sticky, 65px tall, background transparent with `backdrop-filter: blur(4px)`, 11 total items (logo + 6 nav links/dropdowns + GitHub star count + Sign in + primary CTA). Logo is a mint lightning-bolt mark beside wordmark, left-aligned. Primary CTA sits far right: `#72E3AD` fill, `#030303` text, 6px radius, 26px height, 4px 10px padding, `1px solid oklab(0.685565 -0.144466 0.057858 / 0.75)` border, hover darkens to `rgba(62,207,142,0.8)`. A secondary "Sign in" utility button sits just left of the CTA: transparent fill, `#030303` text, 6px radius, 34px height, 8px padding, hover text shifts to `#0A844E`.
- **Hero primary button**: the single most emphasized control on the first screen — an observed near-mint solid fill matching the nav CTA family, `#72E3AD` background, `#030303` text, ~6px corners (slightly-rounded), sitting directly under the two-line headline.
- **Hero secondary button**: outline/near-white fill (`#FDFDFD`), `#030303` text, 6px radius, 38px height, 8px/16px padding, `1px solid oklch(0.1 0 34 / 0.146418)` hairline border — positioned beside the primary, lower visual weight.
- **Feature bento card family** (×7, first screen): transparent background, 12px radius, no padding at container level; anatomy top-to-bottom is an icon/eyebrow label row, a bold headline phrase, supporting body copy, and (on the lead cards) a checklist of short affirmations with checkmark glyphs; the largest card additionally carries a linework illustration filling roughly half its area.
- **Full-width dashboard panel family** (×5, mid-page): transparent, 0px radius, 0px padding, each a single edge-to-edge product-screenshot/mockup image with a tabbed control strip (flat tab buttons, 0px radius, 60px height, 16px/0px padding, hover background `rgba(253,255,255,0.5)`) sitting above the screenshot.
- **Tool-icon row cards** (three separate ×3 families, mid-page): transparent, 0px radius, single-column-per-item rows at 100% width each, anatomy is an icon paired with a short body line — used for auxiliary integration/tool call-outs.
- **Logo strip tiles**: five-column, 8px-gap grid of equal-width tiles, each a flat logo mark on transparent ground — the "trusted by" band.
- **Testimonial gradient card** (×1 in a five-up row): background `linear-gradient(to left bottom, color(display-p3 0.980392 0.364706 0.098039) 0%, color(display-p3 0.980392 0.364706 0.098039 / 0.9) 100%)`, 8px radius, 32px padding, inset ring shadow `rgba(255,255,255,0.12) 0px 0px 0px 1px inset`; anatomy top-to-bottom is an emoji/glyph mark, a small eyebrow label, an italic-weight pull-quote in white, an avatar+name+role byline, and a text link CTA. Beside it, four narrower solid/gradient color-block tiles (indigo, near-black, orange, black) carry only a centered brand glyph each.
- **Community quote mosaic**: an unbounded, overflowing multi-column arrangement of small quote cards (white fill, hairline border implied, no visible radius token beyond card defaults), each with an avatar, handle, and 1–3 line quote — arranged in loosely staggered columns suggesting a masonry/scrolling-rail hybrid rather than a strict grid.
- **Stat/numeral band**: a large dot-matrix–rendered numeral built from small mint/gray square dots at varying opacity, paired with a left-column headline and body copy and an outline "View on GitHub"-style button (same secondary-outline spec as above).
- **Email-capture footer band**: single-line input (`Your email` placeholder) beside a `#72E3AD`-filled Subscribe button, 6px radius, compact height matching the nav-CTA family.
- **Footer**: background `#FDFDFD`, six labeled link columns (64 links total), logo + social icon row at far left, hairline top border separating it from the stat band above, copyright line and a light/dark theme toggle glyph at the very bottom edge.

## Graphics & Effects
No full-screen gradient exists anywhere on this page — the field stays flat white throughout. Color arrives only in small, named surfaces: the testimonial card's orange gradient (`linear-gradient(to left bottom, color(display-p3 0.980392 0.364706 0.098039) 0%, color(display-p3 0.980392 0.364706 0.098039 / 0.9) 100%)`, one card, ~2.4% of page); a faint dark overlay wash (`linear-gradient(oklch(0.1 0 34 / 0.0812725) 0px, oklab(0.1 0 0 / 0.0406362) 100%)`) used as a subtle scrim on a diagram element; a top-fade scrim (`linear-gradient(to top, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 50%, oklch(1 0 34) 85%)`) fading a media panel into the white page at its base; two small color-block tile gradients (indigo `color(display-p3 0.275 0.306 0.8)`→`color(display-p3 0.118 0.176 0.769)` and neutral `rgb(42,42,42)`→`rgb(24,24,24)`) each confined to one logo tile. A dot/grain field of small mint-toned squares forms the stat-numeral graphic and a faint dotted texture behind parts of the mosaic band — treat as a pixel/matrix texture, not photographic grain. Live video surfaces appear inside product-diagram cards (e.g. simulated deploy/network animations); stand these in with a static line-art or dot-field illustration frame when rebuilding. Card elevation is nearly shadow-free — the only shadow values present are a 1px inset highlight ring on the gradient testimonial and fully-transparent shadow stacks (effectively flat) on nav buttons — this system signals depth through borders and whitespace, not blur or drop shadow. The navbar is the one glass surface: `backdrop-filter: blur(4px)` over a transparent fill.

## Motion
Interactions are fast and utilitarian: color/background/border transitions run at `0.15s cubic-bezier(0.4, 0, 0.2, 1)`, matching Tailwind's default easing, applied to hover states on buttons and links. Opacity-driven reveals use two speeds — `0.4s ease` and `0.6s ease` — likely for scroll-triggered fade-ins of sections and staggered card entrances. Toast/notification-style elements use dedicated keyframes (`sonner-fade-in`, `sonner-fade-out`, `sonner-spin`, `swipe-out`) for transient feedback. There is no spring-overshoot or scale-based motion evidenced; the system favors quick, linear-feeling opacity and color settles over bouncy transforms — consistent with its restrained, technical tone.

## Guardrails
- Never wash the hero or any full section in the orange gradient — it belongs to exactly one testimonial card and its adjacent tiles.
- Keep the page field white/near-white (`#FDFDFD`/`#FFFFFF`); this is not a dark-mode system despite the mint accent.
- Reserve `#72E3AD`/`#3FCF8E` for buttons, small glyphs, and the second headline line only — never as a large fill or section background.
- Do not add drop shadows to feature or panel cards; structure comes from 0–12px radius shifts and hairline black borders, not elevation blur.
- Keep full-width dashboard panels at 0px radius and 0px padding, bleeding to their container edge — rounding them breaks the flat-panel language.
- Reserve Source Code Pro for inline code/path fragments only; body and headline text stay in Inter/Manrope.
