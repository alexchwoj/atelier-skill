---
version: "1"
name: "Chalkline Grid Light"
description: "A near-white light-mode system on a faint ruled/dot canvas, built from a rounded geometric display face, hairline card dividers, and one rationed cobalt-blue accent for interactive emphasis."
colors:
  background: "#FFFFFF"
  surface: "#F9FAFB"
  surface-muted: "#E5E7EB"
  text-primary: "#000000"
  text-secondary: "#4B5563"
  text-tertiary: "#6B7280"
  border: "#E5E7EB"
  border-subtle: "#F3F4F6"
  accent: "#2563EB"
  accent-tint: "#EFF6FF"
  focus-ring: "#3C81F5"
typography:
  display-lg:
    fontFamily: "Rambla"
    fontSize: "60px"
    fontWeight: 300
    lineHeight: "1"
  headline-md:
    fontFamily: "Rambla"
    fontSize: "60px"
    fontWeight: 300
    lineHeight: "1"
  body-md:
    fontFamily: "Rambla"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: "1.4"
  label-md:
    fontFamily: "Rambla"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: "1.43"
    letterSpacing: "0.7px"
  body-sm:
    fontFamily: "Rambla"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: "1.4"
  accent-mono:
    fontFamily: "Fira Code"
    fontWeight: 400
    role: "code-block accent face for syntax examples"
spacing:
  base: "8px"
  unit-sm: "12px"
  unit-md: "24px"
  unit-lg: "32px"
  unit-xl: "48px"
  section-padding: "128px"
  content-max-width: "128px"
rounded:
  control: "8px"
  card: "12px"
  card-lg: "16px"
  pill: "9999px"
  sharp: "8px"
components:
  navbar:
    background: "#FFFFFF"
    backdrop-filter: "blur(4px)"
    height: "65px"
    radius: "0px"
    width: "edge-to-edge, 100vw"
  button-hero-primary:
    background: "#000000"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "58px"
    padding: "16px"
    border: "1px solid rgb(229, 231, 235)"
    shadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px"
    hover-background: "#1F2937"
  button-navbar-cta:
    background: "#000000"
    text-color: "#FFFFFF"
    radius: "8px"
    height: "36px"
  button-secondary-solid:
    background: "#000000"
    text-color: "#FFFFFF"
    radius: "8px"
    height: "32px"
    padding: "6px 12px"
    shadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
  button-nav-link:
    background: "transparent"
    text-color: "#4B5563"
    radius: "0px"
    height: "20px"
    hover-color: "#000000"
  button-ghost:
    background: "transparent"
    text-color: "#4B5563"
    radius: "8px"
    height: "32px"
    padding: "6px 12px"
  button-outline-secondary:
    background: "transparent"
    text-color: "#000000"
    radius: "9999px"
    border: "1px solid #E5E7EB"
  card-feature-tile:
    background: "#FFFFFF"
    radius: "0px"
    padding: "48px"
    border: "1px solid #F3F4F6"
  card-pricing-panel:
    background: "transparent"
    radius: "0px"
    padding: "128px 32px"
  card-pricing-popular:
    background: "#FFFFFF"
    radius: "12px"
    border: "1px solid #2563EB"
  card-project-tile:
    background: "transparent"
    radius: "0px"
    padding: "0px"
    border-divider: "1px solid #F3F4F6"
  card-code-panel:
    background: "#F9FAFB"
    radius: "16px"
    padding: "40px"
---
# Chalkline Grid Light
Source: https://maelyn.eu/

## Overview
This is a light-mode-default, developer-tool aesthetic: near-white surfaces (~85% of rendered pixels pure `#FFFFFF`, another ~12% a barely-tinted `#F0F0F0`), a faint ruled-graph texture underlying the hero, and a single rounded-geometric display face (Rambla, weight 300 at display size) carrying all headings. It reads as Swiss-adjacent minimalism crossed with a SaaS-developer-portal convention — hairline dividers instead of card shadows, black-on-white solid buttons as the primary interactive signal, and one cobalt-blue accent (`#2563EB`) rationed to links, focus rings, and a single popular-tier outline. Structure carries the hierarchy, not color.

## Composition
The first screen opens with a left-aligned text column (eyebrow pill, two-tone headline, paragraph, a stat pair, two buttons) balanced against a right-side character illustration — an asymmetric hero split, not centered. A dismissible notification card floats top-left of center on load, glassy-white over the ruled backdrop. Below the fold the page settles into a strict single-column rhythm of centered section headers (headline + one-line subhead) followed by full-width content bands at 128px section padding: a 3×2 icon-tile feature grid, a two-column "why choose" split (checklist left, tabbed code panel right), a 4-tier pricing row, and a second 3×2 tile grid for adjacent services, closing in a 4-column link footer. The deliberate choice is uniform hairline-divided grids over shadowed floating cards — this keeps the page feeling like flat documentation rather than a marketing showcase; the rejected alternative would be elevated card shadows throughout, which the system reserves only for the hero CTA and pricing's popular panel.

## Colors
Background is `#FFFFFF`, confirmed dominant at ~85% of the pixel field, with `#F0F0F0`/`#F9FAFB` as a secondary panel tone (~12–15%) used for the code-example surface and notification card. Text ink is true `#000000` for headings and primary labels, stepping down to `#4B5563` for body copy and `#6B7280` for tertiary/meta text — a three-step neutral ramp, no warm or cool cast. Borders live on two whisper-light values, `#E5E7EB` and `#F3F4F6`, used as row dividers and card outlines rather than shadows. The accent `#2563EB` (with tint `#EFF6FF`) appears in well under 1% of pixel area: the "ReRise" wordmark split, inline links, the popular-pricing-tier border, and the focus-ring token (`--tw-ring-color: #3C81F5`). Black itself functions as the second "accent" — every primary and secondary solid button is `#000000`, making pure black a functional color role, not just text ink. Nothing else is colored: icons render as black glyphs on black-tile chips, never gaining hue.

## Typography
Rambla (weight 300) is the display/headline face at 60px, line-height 1, used exclusively for section titles and the hero name-lockup — always centered for section headers, left-aligned in the hero. Body copy shifts to Rambla at heavier weight (700) — 20px for hero-adjacent lead paragraphs, 14px for dense card body text — an unusual pairing where the display weight is the lightest in the system and body text is bolder than expected, giving flat sans copy more visual presence than the airy display cuts. Labels (eyebrows, tab bar text, badge text) sit at 14px/500 with 0.7px tracking, always uppercase in application. Fira Code appears only inside the code-example panel as the monospace accent face, syntax-highlighted (orange keywords, green strings) against the `#F9FAFB` panel.

## Layout
Content is capped at a 1280px max-width, centered, with 128px vertical section padding throughout — a generous, documentation-style rhythm. The two repeating 3×2 icon-tile grids (feature set, adjacent-services set) both use 3 columns × 2 rows of 6 items with a near-invisible 1px gap and hairline row/column dividers rather than gutters — cards touch edge-to-edge and are separated by rule lines, not whitespace, giving a spreadsheet-like density. The "why choose" band is a 2-column split at 80px gap (roughly 47/47), checklist against a rounded code card. Pricing runs 4 tiers in an even row, the second tile elevated slightly outside the shared baseline with a blue-outlined card and a "popular" pill badge, the fourth carrying a green "best value" pill — the only two saturated badges on the page. Footer is a 4-column link list (product, resources, company, plus a brand/social column) under a full-width hairline rule.

## Components
- **Navbar**: edge-to-edge square bar, 65px tall, spans full 1920px viewport width with 0px inset on both edges, all four corners 0px radius (flush rectangle), `#FFFFFF` fill with `blur(4px)` backdrop-filter, sticky on scroll. Carries a small circular logo mark + wordmark at left, 9 total items (nav links + utility icons), a plain-text "Sign In" link, and a solid CTA button (`#000000` fill, `#FFFFFF` text, 8px radius, 36px height) at far right.
- **Hero primary button**: the standout solid pill under the headline — observed near-black fill `#000000` with white text, full pill radius `9999px`, 58px tall, 16px padding, hairline `1px solid rgb(229,231,235)` border, resting shadow `rgba(0,0,0,0.1) 0px 10px 15px -3px, rgba(0,0,0,0.1) 0px 4px 6px -4px`; on hover it darkens to `#1F2937` and scales up ~1.1×. This is the single most emphasized control on the first screen.
- **Hero secondary button**: beside the primary, an outline pill, transparent fill, black text, same `9999px` radius and hairline border, no solid shadow — a lighter-weight sibling, not a second primary.
- **Navbar/global CTA**: separate from the hero primary — solid black rectangle, 8px radius, 36px height, sits inside the navbar only.
- **Section utility buttons**: transparent-fill, `#4B5563` text, 8px radius, 32px height, 6px/12px padding — used for in-page ghost actions (e.g. tab switches, "explore" links); hover shifts text to `#000000`.
- **Nav text links**: bare transparent links, 0px radius, 20px line-height, `#4B5563` resting → `#000000` on hover, used for the horizontal nav item row.
- **Icon-tile feature card** (feature grid + adjacent-services grid, ×6 each, 3-across/2-down): `#FFFFFF` fill, 0px radius, 48px padding, separated by hairline dividers not gaps. Anatomy top-to-bottom: a black rounded-square icon chip (~40px) with a white glyph, a bold heading line, a `#4B5563` two-line body sentence, then a row of uppercase small-caps keyword tags separated by dots (e.g. category taxonomy) at the tile's foot.
- **Pricing tier card** (×4 in a row): three tiers transparent/flat with 0px radius sitting on the page background; the "popular" second tier is promoted with a `#FFFFFF` fill, `12px` radius, and a `1px solid` cobalt-blue border plus a blue pill badge above it; the fourth tier carries a green pill badge instead. Anatomy: eyebrow tier name, large price numeral, small credit-cap caption (blue-tinted on the popular tier), a plain-text feature list (4 lines, no checkmarks), then a full-width solid button at the base — black on three tiers, cobalt-blue fill only on the popular tier's button.
- **Checklist band** (why-choose section, left column): eyebrow label, headline, body paragraph, then a 3-row checklist, each row pairing a small black rounded-square check-icon chip with a text line — transparent background, 0px radius, no card container.
- **Code-example panel** (why-choose section, right column): `#F9FAFB`-toned rounded card, `16px` radius, 40px padding, with an internal pill-style tab switcher (3 tabs, active tab solid black/white text, inactive tabs plain text) above a monospace Fira Code block with syntax color accents.
- **Footer**: transparent background, sits below a full-width hairline rule; 4 columns — brand mark + one-line description + two circular social icon glyphs, then three link columns of plain text list items (16 links total), closing in a bottom copyright/status bar.

## Graphics & Effects
The page background carries a subtle engineered texture, not a flat white: a 1px horizontal rule pattern `linear-gradient(rgba(0,0,0,0.04) 1px, rgba(0,0,0,0) 0px)` layered with its vertical twin `linear-gradient(90deg, rgba(0,0,0,0.04) 1px, rgba(0,0,0,0) 0px)`, producing a faint graph-paper grid confined to the hero band (~16% of page area each), finished with a soft radial vignette `radial-gradient(rgba(0,0,0,0) 40%, rgba(0,0,0,0.06) 100%)` that darkens the hero's outer edge. The only saturated gradient on the page, `linear-gradient(to right, rgb(37,99,235), rgb(96,165,250))`, is a small element fill — the blue "ReRise" wordmark treatment in the hero title, covering a few characters, not a background wash. Elevation is expressed almost entirely through hairline borders rather than shadow; the two shadow tokens in use are reserved for the hero primary button (`0px 10px 15px -3px / 0px 4px 6px -4px` at 0.1 alpha) and small utility buttons (`0px 1px 2px 0px` at 0.05 alpha). Backdrop blur appears at three strengths — `blur(4px)` on the sticky navbar, `blur(12px)`/`blur(24px)` on the floating notification card and dropdown surfaces — giving those elements a light glassmorphic lift off the ruled backdrop without introducing color.

## Motion
Interactive color and border transitions run on a shared multi-property tween — `color, background-color, border-color, text-decoration-color, fill, stroke` at `0.15s cubic-bezier(0.4, 0, 0.2, 1)` — the system's default hover feel: quick, no overshoot. Transform-based hover (the hero button's 1.1× scale) animates on its own `transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)` track, while broader state changes use a slower `all 0.2s cubic-bezier(0.4, 0, 0.2, 1)` or a 0.3s ease triple-property tween for larger surface recolors. Entrance motion is scroll-triggered fade/rise (`fade-in-up`, `fadeInUp`), plus a looping idle float (`mascotMtFloat`) on the hero illustration and a typing-cursor simulation (`typing-dot`, `cursor-blink`) inside the code panel — small, playful accents against an otherwise static, documentation-calm page.

## Guardrails
- Never fill the hero background with a saturated gradient wash — color stays confined to the small wordmark treatment and a faint ruled/vignette texture; the hero remains predominantly white.
- Do not replace hairline-divided grid tiles with shadowed floating cards — dividers, not elevation, separate the 3×2 icon-tile grids.
- Keep the hero primary as the black pill (`9999px`, 58px) — never substitute the navbar's small 8px-radius rectangular CTA into the hero.
- Preserve the display face's light weight (300) against heavier body weight (700) — do not default to bold headlines and thin body text.
- Ration cobalt-blue (`#2563EB`) to links, focus rings, and the single popular-pricing accent only; it must never become a general fill color.
- Keep the navbar flush edge-to-edge with square corners; do not inset it or round it into a floating capsule.
