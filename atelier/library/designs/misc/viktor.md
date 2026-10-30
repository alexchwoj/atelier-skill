---
version: "1"
name: "Warm-linen violet dispatch"
description: "Light-mode-default system on warm off-white linen, with an oversized bold-rounded display face, a single indigo-to-peach radial gradient rationed to hero and card surfaces, and a screenshot-styled app-panel motif carried through every feature card."
colors:
  background: "#FAF5F1"
  surface: "#FFFFFF"
  surface-gradient-violet: "#9E84FF"
  text-primary: "#1A182B"
  text-secondary: "#716F7E"
  text-muted: "#9693A3"
  accent: "#6E47FF"
  accent-deep: "#150079"
  accent-peach: "#FFBB98"
  border: "#1A182B"
typography:
  display-lg:
    fontFamily: "UlmGrotesk"
    fontSize: "80px"
    fontWeight: 700
    lineHeight: "1.1"
    letterSpacing: "-4.8px"
  headline-md:
    fontFamily: "Gellix"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
  body-md:
    fontFamily: "Gellix"
    fontSize: "18px"
    fontWeight: 500
    lineHeight: "1.4"
  label-md:
    fontFamily: "UlmGrotesk"
    fontSize: "20px"
    fontWeight: 500
    lineHeight: "1.4"
  accent-script:
    fontFamily: "Lato"
    fontStyle: "italic"
    fontWeight: 400
spacing:
  base: "8px"
  gap: "20px"
  section-padding: "112px"
rounded:
  control: "14px"
  card: "32px"
  card-lg: "36px"
  pill: "9999px"
components:
  navbar:
    background: "transparent"
    height: "65px"
    width: "100%"
    radius: "0px"
  button-nav-cta:
    background: "#1A182B"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "40px"
    padding: "0px 24px"
    border: "1px solid rgb(26, 24, 43)"
  button-primary:
    background: "#1A182B"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "56px"
    padding: "0px 40px"
    border: "1px solid rgb(26, 24, 43)"
  button-secondary-outline:
    background: "transparent"
    text-color: "#1A182B"
    radius: "9999px"
    height: "56px"
    padding: "0px 40px"
    border: "1px solid rgb(26, 24, 43)"
  button-glass-utility:
    background: "linear-gradient(to right in oklab, rgba(158, 132, 255, 0) 0%, rgba(158, 132, 255, 0.24) 100%)"
    text-color: "#000000"
    radius: "6.59px"
    height: "31px"
    padding: "0px 10.983px 0px 13.18px"
  button-ghost-link:
    background: "transparent"
    text-color: "#6E47FF"
    radius: "14px"
    height: "62px"
    padding: "16px 24px"
    border: "1px solid rgba(0, 0, 0, 0)"
  card-feature-gradient:
    background: "radial-gradient(210.1% 116.78% at 39.65% 0%, rgb(158, 132, 255) 0%, rgb(110, 71, 255) 36.52%, rgb(21, 0, 121) 100%)"
    radius: "32px"
    padding: "0px"
    shadow: "rgba(26, 24, 43, 0.12) 0px 20px 48px 0px"
  card-white-faq:
    background: "#FFFFFF"
    radius: "36.4px"
    padding: "0px"
    shadow: "rgba(0, 0, 0, 0.05) 0px 3.863px 17.769px 0px"
  card-app-panel:
    background: "#FFFFFF"
    radius: "32px"
    padding: "0px"
    shadow: "rgba(46, 30, 107, 0.04) 0px 0px 15.451px 7.725px"
  cta-band:
    background: "radial-gradient(145.58% 104.75% at 52.06% -4.35%, rgb(255, 187, 152) 0%, rgb(255, 187, 152) 6.43%, rgb(158, 132, 255) 50.71%, rgb(110, 71, 255) 80.36%, rgb(21, 0, 121) 100%)"
    radius: "32px"
    padding: "0px"
---
# Warm-linen violet dispatch
Source: https://viktor.com/

## Overview
This is a light-mode-default marketing system built on a warm linen field rather than pure white, carried almost entirely by an oversized, bold, tightly-tracked sans display face (UlmGrotesk, -4.8px letter-spacing) and a single deep-indigo-to-peach radial gradient that appears only where the product itself is being staged — never as a full-page wash. The visual grammar borrows from bento UI (asymmetric gradient cards with app-chrome content) and glassmorphism (a soft blurred nav CTA, blurred gradient orbs in the footer), but the dominant register is friendly-editorial: huge rounded type, pill buttons everywhere, and dark ink-on-linen body copy that reads more like a product notebook than a SaaS deck.

## Composition
The first screen is stacked and centered: a star-rating strip, then a two-line oversized headline (black line + violet-gradient line), a short two-line paragraph body set to the right of the headline block, a primary/secondary button pair, then a large white-cornered app-panel mockup that dominates the lower half of the viewport and bleeds past the fold. Below the fold, a violet gradient band holds a horizontal logo strip, then the page returns to the linen background for a long vertical rhythm of: an icon + two-line statement + single black CTA; a labeled feature grid of four gradient cards; a three-step "how it works" band with a distinct middle illustrative card; an FAQ accordion paired with a violet CTA card; and a footer with a giant ghost-outline wordmark bleeding off the bottom edge. The deliberate choice is to keep body copy dark-on-light and reserve all saturated color for discrete card surfaces and one gradient band — rejecting a full-bleed colorful hero in favor of rationing color to look like distinct "moments," which keeps the page feeling calm and editorial rather than a marketing wall of gradient.

## Colors
`#FAF5F1` is the true background (~94% declared area, confirmed dominant in the pixel field's near-white/off-white readings) — a warm linen, not stark white. `#FFFFFF` surfaces (~5.4%) carry the app-panel mockups, FAQ cards, and nav CTA text-plate, giving a crisp inset contrast against the warmer page tone. Ink `#1A182B` is the primary text and border color throughout — headlines, nav CTA fill, buttons, borders — functioning as a near-black brand-ink rather than pure `#000000`. `#716F7E` is secondary/supporting body text, `#9693A3` sits even quieter for muted captions. The violet accent cluster (`#9E84FF`, `#6E47FF`, deep `#150079`/`#1500 79`-adjacent `rgb(21,0,121)`) is rationed strictly to: the gradient word inside headlines, four feature-card fills, the mid-page illustrative "connect" card, and the closing CTA band and footer glow — together these read as the ~2-4% of true saturated pixels the field shows. Peach (`#FFBB98`) appears only as the warm terminus of those same gradients, never standalone. Everything else — nav, footer link grid, FAQ text — is deliberately left uncolored (ink-on-linen), so the gradient always signals "this is Viktor speaking."

## Typography
UlmGrotesk carries all display and label duty: 80px/700 at -4.8px tracking for hero and section headlines (bold, rounded terminals, very tight leading at 1.1), stepping down to a 20px/500 label weight for numbered step labels and card headings. Gellix is the workhorse body face: 18px/500 for card body copy and paragraph text, 16px/400 for the lighter headline-adjacent supporting line and secondary UI text. Lato appears as an italic accent — visible on a short two-to-three-word clause set in an italicized serif-adjacent style breaking up an otherwise all-sans headline (e.g. the lowercase closing word of the hero headline pairing). Hierarchy is size-and-weight-driven, not color-driven: black ink for primary headline lines, the violet gradient reserved for a single accent line or word cluster per headline, secondary text always dropped to `#716F7E` at body-md scale.

## Layout
Content is centered within a max-width container (1280px), with generous 112px section padding stacking each band. The primary feature grid runs 2 columns × 2 rows (rows [49/49 | 49/49], 20px gap) — four gradient cards of matching width, no spans. The three-step "how it works" band is a flat 3-across row, equal width. The FAQ/CTA band splits 2 columns with an asymmetric gap (32px/80px) across 3 items in rows [37/49 | 20] — accordion list on the left, gradient CTA card spanning below/beside it on the right. Footer link columns run as a simple even row of link groups. Card radius is consistently large and soft (32px feature/media cards, 36.4px FAQ/white cards) versus tight pill radii (9999px) on every button — this radius contrast between "soft card, hard-pill control" is a load-bearing rule of the system. Nothing masonry or dense-packed appears; every grid observed is uniform-span, rows of equal-width siblings.

## Components
- **Navbar** — edge-to-edge, transparent, 65px tall, spans full 1920px viewport width with 0px inset on all sides, 0px corner radius on all four corners (a true flat full-bleed bar, not an inset capsule), sticky on scroll. Holds a wordmark at far left, 22 total nav items including dropdown groups, and two right-aligned buttons: a secondary outline/ghost "Book a Demo"-style button and a solid ink-fill pill CTA (`#1A182B` fill, `#FFFFFF` text, radius 9999px, height 40px, padding 0 24px, 1px solid `rgb(26,24,43)` border, hover→opacity 0.83).
- **Hero primary button** — the solid ink pill beneath the headline is the true primary: `#1A182B` fill, `#FFFFFF` text, radius 9999px, height 56px, padding 0 40px, 1px solid `rgb(26,24,43)` border, hover→opacity 0.8. Its outline sibling beside it (same radius/height/padding, transparent fill, ink border and text) is the secondary "book a call" variant — never the primary, despite matching geometry.
- **Nav utility glass button** — a small transparent-to-violet gradient chip (`linear-gradient(to right in oklab, rgba(158,132,255,0) 0%, rgba(158,132,255,0.24) 100%)`, black text, 6.59px radius, 31px height) appears as a small toggle/tab control inside the hero app-panel mockup (e.g. switching "With Teams"/"On Slack") — a utility control, not a page-level CTA.
- **Ghost link button** — transparent fill, violet text (`#6E47FF`), 14px radius, 62px height, 1px transparent border; used repeatedly mid-page as understated inline actions (e.g. "show more" affordances) — slightly rounded, not pill, distinguishing it from every pill CTA.
- **Feature card grid (gradient)** — appears mid-page as a 2×2 grid, 4 cards, rows [49/49 | 49/49], 20px gap. Surface: `radial-gradient(210.1% 116.78% at 39.65% 0%, rgb(158,132,255) 0%, rgb(110,71,255) 36.52%, rgb(21,0,121) 100%)`, 32px radius, shadow `rgba(26,24,43,0.12) 0px 20px 48px 0px`. Anatomy top-to-bottom: a small "Viktor · APP" chat-message eyebrow row, one to two lines of chat-style body copy, then a centered icon-and-chip illustration (roughly 55-60% of card height) simulating an app notification/output card, followed below the gradient panel by a white zone with a bold heading and a `#716F7E` support line.
- **How-it-works step cards** — 3-across equal row. First and third cards are white app-panel mockups (radius 32px, shadow `rgba(46,30,107,0.04) 0px 0px 15.451px 7.725px`) showing OAuth-connection rows or a chat/dashboard screenshot filling ~70% of the card top; middle card is the sole violet gradient illustration card (`radial-gradient(108.79%...)`-family fill) showing a node-network graphic centered at ~80% coverage. Each card is capped below by a numbered pill-badge + bold label + one-line `#716F7E` description.
- **FAQ accordion** — left-aligned list of white rows/panels, no visible fill/border on collapsed items beyond hairline dividers; expanded item shown with violet-tinted heading text and chevron rotated up. A "show all" pill button (transparent fill, ink border, 9999px radius) sits below the visible items.
- **CTA band (bottom)** — full-width violet-to-peach radial gradient card, 32px radius, holding an italic-peach-accented two-line headline, a support paragraph, a white pill primary button + adjacent ghost-outline pill secondary, and a right-aligned checklist column of three items (white checkmark badges in circular chips + label + hairline dividers between rows).
- **Logo strip band** — a full-bleed violet gradient band directly under the hero panel, holding a small label plus 4-5 monochrome/white brand wordmarks in a single horizontal row, edge-inset padding, no cards or borders — pure wordmark cluster.
- **Footer** — `#FAF5F1` background, wordmark + 3 social icon buttons at left, four link-column groups (Product / Compare / Solutions / About+Resources+Terms) arranged as an even row grid, hairline divider above a language-selector pill, then a giant outlined/ghost wordmark typographic mark bleeding off the bottom edge with a soft violet-peach glow gradient behind it.

## Graphics & Effects
Five radial gradients are measured, each scoped to a specific small surface, never the full page: the feature-card fill (`radial-gradient(210.1% 116.78% at 39.65% 0%, rgb(158,132,255) 0%, rgb(110,71,255) 36.52%, rgb(21,0,121) 100%)`, ~4.4% of page, used across the 4-card grid); the bottom CTA band fill (`radial-gradient(145.58% 104.75% at 52.06% -4.35%, rgb(255,187,152) 0%, rgb(255,187,152) 6.43%, rgb(158,132,255) 50.71%, rgb(110,71,255) 80.36%, rgb(21,0,121) 100%)`, ~5.7% of page); a soft peach wash (`radial-gradient(108.79% 100% at 50% 0%, rgba(255,187,152,0.2) 0%, rgba(255,187,152,0) 100%)`, ~4.4%, likely the faint top-of-hero tint visible behind the star rating); and two smaller variants (~0.3% and ~0.1%) reserved for compact illustration chips inside cards. The footer's giant wordmark sits on a soft radial peach-to-violet glow bleeding from a small circle above the "v" — a decorative accent, not a background fill. Shadows are soft and warm-tinted rather than neutral black: `rgba(26,24,43,0.12) 0px 20px 48px 0px` on gradient cards, `rgba(0,0,0,0.05) 0px 3.863px 17.769px 0px` on white FAQ/panel cards, `rgba(46,30,107,0.04) 0px 0px 15.451px 7.725px` as an ambient glow around app-panel mockups. Backdrop blurs (`blur(6px)`, `blur(7px)`, `blur(21.389px)`, `blur(40px)`) apply to the nav's translucent scroll state and the softened glow discs behind the footer wordmark — true glassmorphism confined to these two spots, not a global treatment. No noise/grain or star-field texture is visible; surfaces are clean flat fills and gradients.

## Motion
Interactive color/border/fill transitions run fast and uniform at `0.15s cubic-bezier(0.4, 0, 0.2, 1)` (hover opacity shifts on buttons, link color changes). Transform-based interactions (press states, icon micro-motion) use `0.2s cubic-bezier(0, 0, 0.2, 1)`. Larger entrance/reveal motion — cards and illustrative graphics animating in — uses a slower, springier `0.7s cubic-bezier(0.22, 1, 0.36, 1)` for opacity/filter/transform, giving feature cards and step illustrations a gentle decelerating settle rather than a snap. Named keyframes (`how-it-connect-grid-drift`, `perf-dash-draw-line`, `perf-dash-fade-in`, `perf-dash-dot-in`, `perf-dash-metric-in`, `spin`) drive the illustrative dashboard/chart graphics inside cards — animated line-drawing, sequential dot/metric reveal, and a looping spinner — plus scroll-driven animation triggers sections and card content into view as the user scrolls rather than on a fixed timer.

## Guardrails
- Never fill the hero background with the violet/peach radial gradient — it belongs only to the logo band, feature cards, and CTA band; the hero itself stays linen with a white app-panel mockup as its only large visual.
- Never render buttons at anything less than full pill (9999px) radius except the small nav-utility gradient chip (6.59px) and ghost-link controls (14px) — do not round the primary/secondary/nav-CTA buttons down to a soft-square radius.
- Never substitute pure black/white for the ink and linen tokens — text and borders are `#1A182B`, background is `#FAF5F1`, not `#000000`/`#FFFFFF`.
- Keep the italic accent face confined to a short two-to-three-word clause per headline; do not italicize full sentences or body paragraphs.
- Do not turn the flat, square-cornered edge-to-edge navbar into an inset or rounded capsule bar.
- Reserve saturated violet/peach fill for card surfaces and the two gradient bands only — body copy, FAQ, and footer links stay ink-on-linen.
