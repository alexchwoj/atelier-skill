---
version: "1"
name: "Rationed voltage dark"
description: "Near-black engineering-grade system with hairline-outlined glass panels, oversized display type, and one caustic yellow accent reserved for signal and CTA density."
colors:
  background: "#181818"
  surface: "#161616"
  surface-glass: "rgba(22, 22, 22, 0.5)"
  navbar-glass: "rgba(21, 21, 21, 0.8)"
  text-primary: "#F9F9F9"
  text-secondary: "#DFDFDF"
  text-on-accent: "#151515"
  accent: "#F0FF60"
  accent-alt: "#FAFF69"
  border: "#414141"
  border-accent: "#4F5101"
  danger: "#FB2C36"
  warning: "#E17100"
typography:
  display-lg:
    fontFamily: "basier"
    fontSize: "96px"
    fontWeight: 600
    lineHeight: "1"
  headline-md:
    fontFamily: "basier"
    fontSize: "36px"
    fontWeight: 600
    lineHeight: "1.25"
  body-md:
    fontFamily: "Inter"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: "1.33"
  label-md:
    fontFamily: "basier"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: "1.25"
  body-base:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
  label-mono:
    fontFamily: "Inconsolata"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
spacing:
  base: "8px"
  gap: "16px"
  gap-lg: "64px"
  section-padding: "96px"
rounded:
  control: "4px"
  control-alt: "8px"
  card: "8px"
  card-lg: "12px"
  pill: "9999px"
components:
  button-primary:
    background: "#FAFF69"
    text-color: "#151515"
    radius: "4px"
    height: "40px"
    border: "none"
  button-glass-outline:
    background: "transparent"
    backdrop-filter: "blur(16px)"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "40px"
    padding: "10px 16px"
    border: "1px solid lab(33.2214 -7.82569 40.1322)"
    hover-background: "rgba(40, 40, 40, 0.8)"
  button-nav-link:
    background: "transparent"
    text-color: "#DFDFDF"
    radius: "0px"
    height: "40px"
    padding: "0px"
  button-nav-pill:
    background: "transparent"
    text-color: "#DFDFDF"
    radius: "8px"
    height: "38px"
    padding: "10px 12px"
  button-glass-heavy:
    background: "transparent"
    backdrop-filter: "blur(16px) brightness(1.5)"
    text-color: "#1F2014"
    radius: "9999px"
    height: "84px"
    padding: "2px"
    shadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px"
  card-media:
    background: "rgba(22, 22, 22, 0.5)"
    radius: "8px"
    padding: "0px"
    shadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px"
  card-accent-block:
    background: "#FAFF69"
    radius: "8px"
    padding: "40px"
  card-accent-icon:
    background: "#FAFF69"
    radius: "8px"
    padding: "24px 8px"
  card-outline-feature:
    background: "transparent"
    radius: "0px"
    padding: "24px"
    border: "1px solid #414141"
---
# Rationed voltage dark
Source: https://clickhouse.com/

## Overview
This is dark-mode-default engineering minimalism: a near-black canvas built for legibility at density, punctuated by one caustic, high-voltage yellow reserved for calls to action, iconography, and a small number of full-bleed accent panels. The type system pairs a squared-off grotesque display face (basier) at extreme scale for headlines with Inter for running copy — a Swiss-adjacent, function-first pairing with none of the warmth of editorial serif systems. Glassmorphic controls (blurred, translucent, hairline-bordered pills) carry navigation and mid-page utility actions, while flat yellow fills carry the highest-priority conversions. The overall character reads as technical-product-marketing: confident, ungimmicky, grid-disciplined, with color used as a signal rather than a mood.

## Composition
The first screen is centered and restrained: a 96px display headline, a single-line subhead, two buttons side by side, then a thin glass notice bar, then a trust wordmark row of logos on a slightly lighter charcoal band. This hero stays almost entirely achromatic — yellow appears only in the primary button and a small announcement icon chip, rationed to well under 5% of the frame. Moving down, the rhythm alternates between near-black bands (#181818, feature grids, comparison diagrams) and full-yellow bands (#FAFF69, deployment options, integration cards) — a deliberate high-contrast alternation rather than a single continuous dark scroll with color accents throughout. This rejects a subtler approach (yellow only as small highlights on dark) in favor of full inverted panels that force a hard visual break every 2–3 sections, giving the page a strobing, modular cadence. Density is high: four-up icon grids, two-up comparison visualizations, five-up deployment/integration cards, all tightly bordered with hairlines rather than shadows for most of the scroll.

## Colors
Background dominance is #181818, confirmed by the pixel field at ~63% — this is the true canvas color, not a gradient wash. A warm-olive undertone (#303018, ~8%) and mid-grey (#484848, ~6%) mark the transition bands between hero and feature sections, plus card fills. The accent #F0FF60 / #FAFF69 (measured ~10% of pixels) is the system's entire chromatic budget: it fires on the primary CTA, the nav CTA, icon strokes, link text, and — most aggressively — on full-panel inverted cards (deploy-your-way band, integration block) where black text sits directly on yellow fill. Text ink is #DFDFDF for secondary/body copy and #F9F9F9/#FFFFFF for primary headings and emphasis; on yellow panels text inverts to near-black (#151515/#1F2014). Borders are hairline #414141 on dark surfaces and an olive-toned #4F5101 where a border needs to read against yellow-adjacent glass. Red (#FB2C36 family) and amber (#E17100) exist only as semantic tokens, held in reserve and not visible in the rendered pixel field — deliberately uncolored territory for status/error use only.

## Typography
Display headlines run basier at 96px/600, lh 1, tracking tight — used once per major section as a scene-setting statement, never for body copy. A secondary basier weight at 36px/600 (lh 1.25) heads sub-sections and card-cluster intros. Labels and card titles use basier 20px/700 (lh 1.25) for a blocky, all-purpose UI voice. Body copy is Inter at 24px/400 (lh 1.33) for lead paragraphs and 16px/400 (lh 1.5) for dense supporting text — the char-weighted true body size — colored #DFDFDF, stepping up to #FFFFFF for emphasis spans. A monospace family (Inconsolata) appears for command-line/code snippets, signaling technical authenticity. The signature typographic move is a single-word highlight treatment: one word set on a solid yellow rectangle inline within an otherwise white headline — extent is exactly one word, sized identically to its neighbors, appearing once at the base of the scroll.

## Layout
Content is capped at 1280px max-width with 96px section padding and 96px inter-section gaps — a generous, magazine-scale rhythm rather than a compact app-shell feel. Feature grids run 4 columns with 16px gaps (four equal ~24%-width icon cards). Comparison sections use a 2-column, 64px-gap grid at ~47% each — wide, deliberate breathing room between paired diagrams. A "why us" numbered-benefit band mixes a 3-across intro row with a 5-across accent-card row beneath it (padding 24px 8px, tight icon-led cards). The deploy-options band stacks one full-width panel atop a 2-column, 24px-gap pair (100 / 49-49) — an asymmetric single-then-split composition, not a uniform grid. Card density is generally high with thin borders substituting for shadows; true elevation shadows (`0 1px 3px rgba(0,0,0,.1)`, `0 10px 15px -3px rgba(0,0,0,.1)`) appear only on the glass media cards and the large pill buttons, reserving depth cues for the most interactive elements.

## Components
- **Navbar**: sticky, 73px tall, `rgba(21, 21, 21, 0.8)` fill with `backdrop-filter: blur(8px)`; wordmark + icon glyph at left, ~6 flat text links (radius 0px, height 40px) and grouped utility pills (radius 8px, height 38px, padding 10px 12px) for search/locale/repo-count/sign-in; primary CTA at far right is a solid `#FAFF69` fill, `#151515` text, radius 4px, height 40px — square-cornered, high-contrast, the only filled button in the bar.
- **Hero primary button**: an observed near-solid yellow pill/rectangle under the headline, ~4-6px corners, black/near-black text — the single most emphasized control on the first screen, distinct from every measured glass button.
- **Hero secondary button**: outline/ghost rectangle beside the primary, same corner radius family, transparent fill with a thin border — a lower-emphasis "contact" action, not a glass blur variant.
- **Announcement bar**: a full-width dark strip directly under the hero, icon-chip + body copy, dividing hero from trust section — no border radius, flat fill slightly lighter than page background.
- **Logo strip**: eyebrow label in accent yellow, all-caps, above two dense rows of monochrome brand wordmarks on a lightly-lifted charcoal band — no card chrome, pure logo cluster.
- **Feature icon-grid (4-up)**: appears mid-page under a centered headline; each card is a hairline-bordered rectangle (border #414141, radius 8px implied by card family, padding ~24px), stroke icon in yellow at top, bold heading, 2–3 line body, and a yellow arrow-suffixed text link at the bottom — no CTA button, link only.
- **Video/testimonial split**: a 2-column asymmetric row — left is text (heading + body + pill-shaped filter chips, radius 9999px, outlined), right is a full-bleed `#FAFF69` panel containing a video-thumbnail card with a circular play button and a quote line beneath in dark text.
- **Filter chip row**: pill buttons (radius 9999px, hairline border, transparent fill) in a wrapping cluster beneath the split section; likely toggles to a filtered card set below.
- **"Why us" panel**: one large bordered container (dark fill, subtle top-edge yellow glow) holding a 3-across icon+heading+body intro row, then a 5-across accent-card row: each card solid `#FAFF69`, radius 8px, padding 24px 8px, icon + bold heading + "More →" link in dark text — flat fill, no shadow, corner-to-corner tight grid.
- **Comparison diagram pair**: 2-column, 64px gap, each side a dark bordered card containing a small bar-chart/grid visualization (red/yellow blocks) plus heading + body beneath — illustrative data-viz components, not photography.
- **Deploy-options card stack**: full-width dark panel (radius 8px implied, padding 40px) with icon + heading + body + solid white rectangular button (radius ~8px, black text) sitting on the yellow section background; below it a 2-up pair of matching dark cards each with icon, heading, body, and an outlined button.
- **Code/install panel**: dark bordered card with monospace command line, copy-icon control at right, and inline yellow text links below for platform alternatives.
- **Footer**: flat `#151515` fill, six-column link matrix (~57 links total) under headers, wordmark + tagline + email-capture input (dark fill, hairline border) paired with a solid yellow "Sign up" button (radius 4px) and an outlined "star on repo" button beneath; legal row at the very bottom in muted grey text.

## Graphics & Effects
The dominant background gradient — `linear-gradient(275deg, rgb(41, 41, 36) 0%, rgb(15, 15, 15) 100%)` — covers the full page as the base canvas wash, a near-imperceptible warm-to-black diagonal rather than a vivid hero gradient; this is why the pixel field reads as flat near-black. A second, much smaller gradient — `linear-gradient(to right bottom, oklab(0.999994 0.0000455678 0.0000200868 / 0.05) 0%, rgba(0,0,0,0) 50%)` — covers roughly 5.5% of the page and functions as a soft top-edge sheen on isolated panels (the "why us" container's glow), not a page-wide effect. Glass controls use `backdrop-filter: blur(16px)` and `blur(16px) brightness(1.5)` for buttons, and `blur(8px)` for the navbar — true frosted-glass legibility layers over the dark canvas. A large soft radial shadow, `oklch(0.7267 0.1689 22.18 / 0.07) 0px 0px 800px 480px`, produces a diffuse warm halo behind at least one focal element (likely the glass-heavy button), not a hard-edged shadow. Card elevation is otherwise minimal: `0 1px 3px rgba(0,0,0,.1), 0 1px 2px -1px rgba(0,0,0,.1)` on glass media cards, `0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -4px rgba(0,0,0,.1)` on the large pill button — both subtle, near-flat elevation cues appropriate to a mostly-borders-not-shadows system. No photographic or video texture beyond the single embedded testimonial video-thumbnail; no visible grain or star-field.

## Motion
All transitions run on a single fast, consistent curve: `cubic-bezier(0.4, 0, 0.2, 1)` at 150ms, applied uniformly to color, background-color, border-color, opacity, and transform/scale/translate/rotate changes — this is a snappy, utilitarian easing with no springy overshoot anywhere in the system. Keyframe library includes spin (loaders), ping and pulse (attention/status dots), fade-up (scroll-triggered content entrances), a custom floating-cursor animation (likely an illustrative device/demo element), and a generic module-scoped "animate" keyframe for section reveals. The motion vocabulary is therefore: instant-feeling micro-interactions on every control, plus a gentle upward fade for content entering the viewport on scroll — nothing decorative or slow.

## Guardrails
- Never spread the yellow accent as a background wash across large dark sections — it belongs to full-panel inverted cards, buttons, icons, and link text only, at roughly 10% of total pixels.
- Never render the hero primary button as a glass/blur pill — it is a solid, opaque yellow fill with sharp-to-slightly-rounded corners, distinct from every glass control measured mid-page.
- Never substitute drop shadows for the hairline-border language on feature and comparison cards; shadows are reserved for the few genuinely elevated glass/media components.
- Never soften the display headline weight or scale below 600/96px — the oversized basier display is the system's structural anchor, not a decorative flourish.
- Never introduce spring/overshoot easing; every interaction resolves on the fast linear-feeling `cubic-bezier(0.4,0,0.2,1)` at 150ms.
- Never let the base gradient read as a colorful hero wash — it is a near-black 41,41,36 → 15,15,15 diagonal, functionally flat.
