---
version: "1"
name: "Violet Compiler Dark"
description: "Near-black developer-tool dark mode with a rationed violet-to-blue accent, oversized condensed display type, and glass utility chrome over a faint grid texture."
colors:
  background: "#000018"
  surface: "#0C0F1D"
  surface-glass: "rgba(255, 255, 255, 0.05)"
  text-primary: "#FFFFFF"
  text-secondary: "#9CA3AF"
  text-tertiary: "#6B7280"
  accent-purple: "#7C3AED"
  accent-purple-deep: "#7C3AED"
  accent-violet: "#A855F7"
  accent-blue: "#3B82F6"
  border-glass: "rgba(255, 255, 255, 0.1)"
  border-accent: "rgba(170, 85, 245, 0.4)"
typography:
  display-lg:
    fontFamily: "General Sans"
    fontSize: "96px"
    fontWeight: 900
    lineHeight: "1"
    letterSpacing: "-4.8px"
  headline-md:
    fontFamily: "General Sans"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: "1.43"
    letterSpacing: "2.8px"
  body-md:
    fontFamily: "General Sans"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: "1.33"
  label-md:
    fontFamily: "General Sans"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: "1.5"
  body-default:
    fontFamily: "General Sans"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.6"
  label-mono:
    fontFamily: "ui-monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: "1.5"
spacing:
  base: "8px"
  gap-sm: "12px"
  gap-md: "20px"
  gap-lg: "24px"
  gap-xl: "32px"
  section-padding: "128px"
rounded:
  sharp: "2px"
  control: "8px"
  card: "16px"
  pill: "9999px"
  panel: "24px"
components:
  navbar:
    background: "transparent"
    width: "100%"
    height: "98px"
    radius: "0px 0px 0px 0px"
  button-hero-primary:
    background: "#7C3AED (observed solid violet fill)"
    text-color: "#FFFFFF"
    radius: "8px"
    height: "~52px (observed)"
  button-nav-cta:
    background: "linear-gradient(135deg, rgb(124, 58, 237) 0%, rgb(109, 40, 217) 100%)"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "36px"
  button-secondary-outline:
    background: "transparent"
    border: "1px solid rgba(255,255,255,0.1)"
    text-color: "#FFFFFF"
    radius: "8px"
    height: "~52px (observed)"
  card-editorial-list:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  card-cta-band:
    background: "linear-gradient(135deg, rgb(124, 58, 237) 0%, rgb(109, 40, 217) 100%)"
    radius: "16px"
    shadow: "rgba(124, 58, 237, 0.4) 0px 0px 20px 0px"
    padding: "20px 48px"
  card-code-panel:
    background: "#0C0F1D"
    radius: "16px"
    shadow: "rgba(0, 0, 0, 0.37) 0px 8px 32px 0px"
    border: "1px solid rgba(255,255,255,0.1)"
    backdrop-filter: "blur(12px)"
---
# Violet Compiler Dark
Source: https://p.superdesign.dev/draft/635dbe9d-eb1e-4cf0-9685-c621f977a6bd

## Overview
A dark-mode-default developer-tool aesthetic: near-black background, a single violet-to-blue gradient rationed to CTAs and glow accents, and a condensed 900-weight display face pushed to enormous sizes with negative tracking. The mood is technical-editorial — code-panel mockups, terminal chrome, monospace status chips — layered with soft glassmorphic surfaces rather than flat cards. It reads as Swiss-adjacent restraint (huge type, strict left alignment, generous negative space) crossed with a glowing sci-fi UI skin.

## Composition
The first screen stacks: a transparent edge-to-edge navbar, a centered pill eyebrow, a two-line oversized headline (line one solid white, line two mixing white and gradient-violet words), a centered body paragraph, a dual-button row, then a large glass-bordered code-mockup panel that bleeds partway off-screen at the fold — establishing the page's visual anchor before any feature content. Below the fold, rhythm alternates between text-led bands (eyebrow + headline + right-aligned support copy) and paired half-width content blocks; a horizontal six-step process rail with connecting line sits mid-page as a lightweight punctuation before the closing CTA. The deliberate choice is restraint: violet is confined to buttons, glows, and single accent words rather than washing full sections — rejecting a full-bleed aurora hero in favor of keeping the frame almost entirely black with color as incident light.

## Colors
Background is near-black (`#000018`, ~63% of pixels) with a deep teal-black secondary shadow tone (`#001818`, ~13%) and dark slate panels (`#181818`/`#181830`, ~21% combined) forming card and code-panel surfaces — confirming a true dark-mode-default, not a gradient-washed hero. `#0C0F1D` is the declared card/panel background (13.4% area). White (`#FFFFFF`, 53.3% declared area) carries nearly all text and borders. The accent system is `#7C3AED`/`#6D28D9` (author tokens `--accent-purple`, deep variant) driving every filled button and glow shadow, paired with `#3B82F6`/`#A855F7` for gradient-text words and the corner-glow washes — together under 1% of declared pixel area, proof the accent is tightly rationed to CTAs, one gradient headline clause, and ambient glows. Gray text (`#9CA3AF` secondary, `#6B7280` tertiary) handles all supporting copy; pure black borders exist only in code-mockup UI chrome.

## Typography
General Sans is the sole family, doing both display and body duty — a rare single-font system that relies entirely on weight and size contrast. Display headlines run at 96px/900 with -4.8px tracking and 1.0 line-height, wrapping to two lines where the second line mixes a white word with a gradient-violet-to-blue clause. Section headlines drop to a large bold weight at roughly half the display size. Eyebrow/label text (14px/700, 2.8px tracking, uppercase) sits above nearly every section headline in violet or muted tone. Body paragraphs run 16-24px/400 in muted gray (`#9CA3AF`), and a monospace-flavored label style appears in status chips and code panels for technical texture.

## Layout
Content is capped at 1280px max-width with 128px section padding, giving each band significant vertical breathing room against the otherwise dense code-panel content. The measured mid-page feature grid is a strict 2-column layout, gap 32px, 4 items arranged as rows [49/49 | 49/49] — two even-width cards per row, two rows, a uniform card grid rather than bento. A 12-column asymmetric grid appears once at [25/75] — a narrow label column beside a wide support-copy column. A 5-column process rail (gap 48px) renders as [38/17/17/17]-plus recurring even steps — one wider lead item followed by uniform steps, read as a horizontal step-rail, not a card grid. Cards throughout carry 0px radius and 0px padding at the grid-item level (structure comes from internal heading/list/body-text stacking, not card chrome); only the CTA-band and code-panel families carry true card surfaces (16px radius, gradient or dark fill, shadow).

## Components
- **Navbar**: edge-to-edge, transparent background, 98px tall, full 1920px viewport width, square corners (0/0/0/0) — a flush technical bar, not an inset or capsule. 7 items: logo mark + wordmark, 4 nav links, a text-only secondary link, and a filled CTA. CTA: gradient `linear-gradient(135deg, rgb(124, 58, 237) 0%, rgb(109, 40, 217) 100%)`, white text, 9999px pill radius, 36px height — this is a nav utility button, not the hero primary.
- **Hero primary button**: an observed near-solid violet fill (~`#7C3AED`), white bold label, ~8px slightly-rounded corners, sitting left in the hero button row beneath the headline — the single highest-contrast, most emphasized control on the first screen.
- **Hero secondary button**: outline/ghost variant beside it, transparent fill, thin light border, ~8px radius, same height, carrying an icon-plus-label pair.
- **Code-mockup panel**: appears once, directly below the hero CTAs, spanning near-full content width. Dark surface (`#0C0F1D`)-adjacent, 16px radius, glass border glow, `rgba(0,0,0,0.37) 0px 8px 32px 0px` shadow, `blur(12px)` backdrop-filter. Inside: macOS-style traffic-light dots and a file-path label bar at top; a left skeleton-line sidebar list; a right content zone with a bold sub-heading, muted description line, a monospace-labeled status chip (green-tinted "optimized" state), and two nested sub-panels each with an icon, uppercase mono label, and indented code/spec lines.
- **Feature card pair (×2 per row, 2 rows)**: transparent, 0px radius/padding grid cells. Anatomy top-to-bottom: a small icon in a rounded tinted square (violet or blue tint), a bold headline, a muted body paragraph, then a checklist of items each prefixed with a small circular check icon.
- **Process rail (5-up)**: circular icon badges connected by a thin horizontal line, each with a centered icon and a bold label beneath — a lightweight step indicator, not a card component.
- **CTA band**: a single large rounded panel, `rgba` dark surface with soft top glow, ~24px radius (rounder than standard cards), centered bold headline, centered muted support line, and a two-button row (filled violet pill primary + outline secondary) — this is the page's closing conversion band, distinct from the nav CTA and hero buttons.
- **Footer**: transparent background, logo lockup + short muted description + 3 circular social icon buttons on the left; three link columns (headed by bold small labels) totaling 15 links; a bottom hairline divider with copyright text left and a muted tagline right.

## Graphics & Effects
Two full-page grid-line gradients tile the background: `linear-gradient(rgba(124, 58, 237, 0.05) 1px, rgba(0, 0, 0, 0) 1px)` and its 90°-rotated pair, each covering ~24% of the page — a faint violet graph-paper texture visible across dark sections, not a color wash. A diagonal two-stop gradient `linear-gradient(to right, rgb(168, 85, 247), rgb(37, 99, 235))` (7.8% coverage) renders as the gradient-text clause in the hero headline and matching small accents. A soft corner wash `linear-gradient(to right bottom, rgba(168, 85, 247, 0.1), rgba(37, 99, 235, 0.1))` (6.1%) and a `radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, rgba(59, 130, 246, 0.05) 50%, rgba(0, 0, 0, 0) 100%)` glow (5.5%) sit behind the hero code panel and CTA band as ambient light pools, each confined to its own section, never full-viewport. Shadows: `rgba(0,0,0,0.37) 0px 8px 32px 0px` for elevated dark panels, `rgba(124,58,237,0.4) 0px 0px 20px 0px` as a violet glow beneath every gradient-filled CTA surface. Glass chrome uses `blur(12px)` backdrop-filter with hairline white borders at low opacity.

## Motion
Interactive color/border/fill transitions run at 0.15s with `cubic-bezier(0.4, 0, 0.2, 1)` for immediate hover feedback (links, icons). Richer property transitions (opacity, box-shadow, transform, filter, backdrop-filter) run at 0.5s on the same curve for card and glass-panel state changes. A generic `all 0.3s ease` covers simpler toggle states. Keyframe animations — `float`, `ping`, `pulse` — drive ambient motion: a slow vertical float on decorative glow elements, a pulsing ring on live-status indicators, and a ping effect on notification-style dots (the eyebrow pill's leading dot, status chips). Motion stays subtle and functional, never used for large entrance choreography.

## Guardrails
- Never fill more than a small fraction of any section with the violet-blue gradient; it belongs on buttons, glows, and single accent words only — the base must stay near-black.
- Do not round the navbar; it is a flush, square-cornered, edge-to-edge bar, never a capsule or inset rectangle.
- Keep grid-item cards at 0px radius/padding — only true CTA bands and code panels get 16-24px rounding and shadow.
- Never substitute the glass nav CTA's pill spec for the hero's primary button; the hero primary is a separate solid rectangular-ish control with ~8px corners.
- Preserve the single-family typography system (General Sans only); do not introduce a second display face.
- Keep the grid-line texture faint (0.05 alpha) — it is a background hint, not a visible ruled grid.
