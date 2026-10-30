---
version: "1"
name: "Aurora glass console"
description: "Near-black dark-mode-default system with a rationed emerald-and-violet aurora wash confined to the hero, glass-pill controls with inset highlights, and a tight sans display face broken once by an italic serif accent clause."
colors:
  background: "#001818"
  surface: "#07070A"
  text-primary: "#EAF0F7"
  text-secondary: "#A7B4C4"
  text-muted: "#7F90A2"
  text-faint: "#5E6E80"
  border: "#C4D8EB"
  accent-lilac: "#C9AEFF"
  accent-live: "#34D06A"
  accent-glacial: "#7FB7DD"
  accent-ice: "#9FD0EE"
typography:
  display-lg:
    fontFamily: "Instrument Sans"
    fontSize: "80px"
    fontWeight: 600
    lineHeight: "1"
    letterSpacing: "-3.6px"
  headline-md:
    fontFamily: "Instrument Sans"
    fontSize: "52px"
    fontWeight: 600
    lineHeight: "1.06"
    letterSpacing: "-1.6px"
  body-md:
    fontFamily: "Instrument Sans"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: "1.55"
  label-md:
    fontFamily: "Instrument Sans"
    fontSize: "21px"
    fontWeight: 600
    lineHeight: "1.6"
    letterSpacing: "-0.4px"
  body-sm:
    fontFamily: "Instrument Sans"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
  accent-serif:
    fontFamily: "Instrument Serif"
    fontStyle: "italic"
    fontWeight: 400
  label-mono:
    fontFamily: "IBM Plex Mono"
    fontWeight: 500
    letterSpacing: "0.08em"
spacing:
  base: "4px"
  gap-sm: "6px"
  gap-md: "16px"
  gap-lg: "18px"
  gap-xl: "21px"
  section-padding: "112px"
  section-gap: "220px"
rounded:
  control: "12px"
  card: "20px"
  card-alt: "15px"
  pill: "9999px"
  pill-alt: "50px"
components:
  button-nav-cta:
    background: "radial-gradient(135% 92% at 50% -20%, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0) 52%), linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0) 46%), linear-gradient(135deg, rgba(150, 175, 255, 0.4), rgba(192, 160, 255, 0.32))"
    backdrop-filter: "blur(20px) saturate(2)"
    text-color: "#F8FAFF"
    radius: "999px"
    height: "42px"
    border: "1px solid rgba(255, 255, 255, 0.26)"
  button-primary:
    background: "an observed near-white/glass solid, ~999px pill radius"
    text-color: "#0B0E14"
    radius: "9999px"
    height: "52px"
    note: "hero primary — Download pill, first screen; solid high-contrast fill, not the glass gradient variant"
  button-glass-hero:
    background: "radial-gradient(135% 92% at 50% -20%, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0) 52%), linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0) 46%), linear-gradient(135deg, rgba(150, 175, 255, 0.4), rgba(192, 160, 255, 0.32))"
    backdrop-filter: "blur(20px) saturate(2)"
    text-color: "#F8FAFF"
    radius: "999px"
    height: "52px"
    padding: "13px 24px"
    border: "1px solid rgba(255, 255, 255, 0.26)"
    shadow: "rgba(255, 255, 255, 0.85) 0px 1.4px 0.5px 0px inset, rgba(120, 140, 255, 0.55) 0px -14px 26px -14px inset, rgba(160, 180, 255, 0.25) 0px 0px 22px -6px inset, rgba(120, 140, 255, 0.5) 0px 8px 20px -8px, rgba(150, 130, 255, 0.5) 0px 20px 50px -16px"
  button-ghost-glass:
    background: "radial-gradient(135% 92% at 50% -20%, rgba(255, 255, 255, 0.28), rgba(255, 255, 255, 0) 52%), linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0) 48%), none"
    backdrop-filter: "blur(20px) saturate(1.6)"
    text-color: "#EEF3FA"
    radius: "999px"
    height: "52px"
    padding: "13px 24px"
    border: "1px solid rgba(255, 255, 255, 0.2)"
    shadow: "rgba(255, 255, 255, 0.62) 0px 1.2px 0.5px 0px inset, rgba(200, 215, 255, 0.2) 0px 0px 18px -8px inset, rgba(0, 0, 0, 0.5) 0px 10px 26px -12px"
  button-tab-mini:
    background: "#07070A"
    text-color: "#EEF1F6"
    radius: "0px 0px 13.98px 13.98px"
    height: "28px"
    border: "1px solid rgba(255, 255, 255, 0.07)"
    shadow: "rgba(0, 0, 0, 0.55) 0px 22px 44px -20px"
  card-expandable:
    background: "transparent"
    backdrop-filter: "blur(8px)"
    radius: "12px"
    padding: "0px 24px"
  card-panel-full:
    background: "transparent"
    radius: "0px"
    padding: "112px 0px"
  card-feature:
    background: "transparent"
    backdrop-filter: "blur(8px)"
    radius: "20px"
    padding: "26px"
  card-feature-lg:
    background: "transparent"
    backdrop-filter: "blur(8px)"
    radius: "20px"
    padding: "32px"
  card-feature-wide:
    background: "transparent"
    backdrop-filter: "blur(8px)"
    radius: "20px"
    padding: "28px 30px"
  navbar:
    background: "rgba(11, 14, 20, 0.72)"
    backdrop-filter: "blur(20px) saturate(1.5)"
    height: "69px"
---
# Aurora glass console
Source: https://heyski.io/

## Overview
This is dark-mode-default engineering-tool minimalism carried by a monospace-labeled, glass-console vocabulary — near-black surfaces (`#001818`/`#07070A`), a tight 600-weight Instrument Sans display face, and glass pill controls whose inset highlights read as physical lozenges of frosted acrylic. Signature move: an aurora gradient wash, kept to the hero only, and a single italic-serif clause breaking the otherwise geometric sans headline. The system is disciplined rather than decorative — most of the page is unlit black surface, with color rationed to small, deliberate zones.

## Composition
First screen: a centered eyebrow pill, a two-line display headline (sans line one, italic-serif-accented line two), a two-line body paragraph, a primary/secondary button pair, a small credential chip, then a large device-mockup screenshot bleeding off the bottom edge — classic hero funnel, Z-pattern into the CTA. Below the fold the rhythm alternates: a dense feature-grid band (3-up cards) → a full-bleed dark panel with an alternating icon/heading/body layout and an embedded device-mockup illustration → a second, denser feature grid mixing single and double-width cards → a minimal dark footer. Section padding is a generous 112px with 220px gaps between major bands, giving the page a slow, breathing rhythm despite the small type scale. The deliberate choice: an almost entirely unlit page (near-black at ~79%+9%+3%) with saturated color confined to soft radial blooms rather than a full gradient background — the rejected alternative is a loud, full-bleed mesh-gradient hero; instead the page stays a black instrument panel with light escaping only at its edges.

## Colors
Background is near-black teal-black (`#001818`, ~79% of pixels) with secondary dark neutrals (`#181818` ~9%, `#000018` ~3%, `#183030` ~2%) — this is the true page field, not any single declared gradient. Surfaces sit on `#07070A`-toned cards with near-zero visible fill (glass/blur only, no solid card background). Text ink is `#EAF0F7` (primary), stepping down through `#A7B4C4` (secondary/body), `#7F90A2` (muted/labels), `#5E6E80` (faintest). Borders use a pale ice-blue `#C4D8EB` at low opacity, echoed in glass control borders (`rgba(255,255,255,0.2–0.26)`). The accent system is a cool trio — lilac `#C9AEFF`, live-green `#34D06A`/`#1EA855`, and glacial blue `#7FB7DD`/`#9FD0EE` — rationed almost entirely to the hero aurora blooms and to status dots/glows (a `#34D06A` live-indicator glow, `rgba(52,208,106,0.8) 0 0 7px`). Everything else — the entire mid-page feature and panel sections — is left uncolored: pure grayscale ink on black, so the aurora hues register as rare, hero-only accents rather than a running palette.

## Typography
Instrument Sans carries the whole system at 600 weight for display/headline and 400 for body — display-lg at 80px/1/-3.6px tracking for the hero's first line, dropping to headline-md (52px/1.06/-1.6px) for internal section headings. The signature accent is a single italic Instrument Serif clause replacing the sans face on the hero's second headline line only — roughly two to three words, sized to match the display line, in a soft lilac-to-ice gradient tone rather than solid ink. Body copy runs 20px/1.55 (body-md) in hero paragraphs, dropping to 16px/1.5 body-sm inside cards. Labels (eyebrow pill text, card sub-labels) use a small caps-tracked mono/label face at 21px/1.6/-0.4px or an IBM Plex Mono style for technical tags (version chips, hotkey callouts) — wide-tracked, uppercase, giving a terminal/console flavor against the otherwise humanist sans.

## Layout
Content is capped at a 1200px max-width, centered. Section padding is a fixed 112px top/bottom with 220px gaps separating major bands — a slow, spacious vertical rhythm. Card grids use tight 16–18px gaps against generous section padding, producing a contrast between airy section breathing room and dense in-band card packing. Measured grids: a 6-column band at 16px gap holding 9 items in rows of **[3][2 wide][3][1 full-width]** — three uniform cards, a two-card row where each card is wider (49/49%), another three-card row, then one full-span closer; a 3-column band at 18px gap with a plain **[3]** row; and a 2-column band at 18px gap with **[2]**, each item near half-width (49/49%). This reads as an asymmetric bento composition, not a uniform card grid — most rows are even triples, but the middle row of the main feature block deliberately widens to two cards to host a richer visual (a waveform illustration, a multi-tag project selector). Corner radii scale by container: 20px on standalone feature cards, 12px on the horizontal expandable list cards, 999px/9999px on every pill control.

## Components
- **Navbar** — top of every screen, fixed/sticky, 69px tall, `rgba(11,14,20,0.72)` fill + `blur(20px) saturate(1.5)` backdrop-filter; 10 total items: a wordmark/logo lockup left, 8 text nav links center-right, and one glass CTA pill right (the nav-cta token: same gradient/blur recipe as the hero glass button, 999px radius, 42px height, `#F8FAFF` text).
- **Hero primary button** — under the headline, left of the pair; an observed solid near-white/cream pill (999px radius, ~52px height) — the single highest-contrast control on the page and the true primary CTA; do not substitute any measured glass button's values here.
- **Hero secondary button** — beside the primary, ghost-glass variant (`button-ghost-glass` token): translucent white-tinted gradient fill, `blur(20px) saturate(1.6)` backdrop, 999px radius, 52px height, 13px/24px padding, `1px solid rgba(255,255,255,0.2)` border, soft inset+drop shadow — visually recessed relative to the solid primary.
- **Credential chip** — small dark rounded-rect badge beneath the button pair, one per hero; a small badge icon, an uppercase micro-label, and a bold single-line achievement string stacked two-line inside a `#07070A`-toned rounded card.
- **Device-mockup illustration** — one large laptop-frame illustration bleeding off the bottom of the hero, containing a miniature app window (title bar, chat bubble, input row with icon buttons) — this is the hero's dominant visual, roughly half the viewport height.
- **Dock/toolbar strip** — a horizontal row of ~10 square app-icons (rounded-rect, ~12px radius) mid-page beneath a second laptop mockup, functioning as a feature-callout strip; a thin ticker of mono-labeled feature tags runs directly below it, each tag separated by a diamond glyph.
- **Tab-mini button** — a small floating traffic-light-style window chrome control seen mid-page, `#07070A` fill, bottom-corners-only radius (`0 0 13.98px 13.98px`), 28px tall, no padding, hairline border, soft drop shadow — decorative window-frame chrome, not a CTA.
- **Feature triptych (×3 card row)** — a full-bleed dark panel band; three equal cards each with a small icon-in-rounded-square glyph, an uppercase mono eyebrow ("A / ...", "B / ...", "C / ..."), a bold heading, and 2–3 lines of body copy; cards are borderless, blurred-transparent (`blur(8px)`), 20px radius equivalent, no visible fill.
- **Alternating icon/text panel** — full-width band (`card-panel-full`, 112px vertical padding, 0 radius), a small ruled eyebrow line, a bold heading, a body paragraph, followed by an embedded device-mockup illustration (a floating window over a colorful abstract wallpaper) sitting at the bottom of the panel.
- **Bento feature grid (mid-page, dense)** — 9 cards in rows **[3][2-wide][3]**: row one is three equal cards each with an icon/oversized-numeral or icon-badge, a heading, and 1–2 lines of body; row two widens to two cards — one pairs an icon+heading+body with a small illustrative waveform/infinity-loop graphic panel, the other pairs an icon+heading+body with a stack of small pill-shaped project tags (each tag: icon + label + live-status dot); row three returns to three equal icon/heading/body cards. All cards share the `card-feature`/`card-feature-lg` tokens: transparent blurred fill, 20px radius, 26–32px padding.
- **Footer** — bottom of page, transparent background, no card surface; a small logo lockup + attribution mark left, 7 text links right (support email, docs/legal, community, copyright), all in muted secondary ink on the plain black field.

## Graphics & Effects
The hero's color comes from four soft radial blooms layered on the black field, none exceeding roughly a fifth of the page each: `radial-gradient(40% 60% at 22% 30%, rgba(52, 208, 106, 0.3), rgba(0, 0, 0, 0) 60%)` (green, upper-left), `radial-gradient(36% 56% at 68% 22%, rgba(166, 120, 255, 0.3), rgba(0, 0, 0, 0) 62%)` (violet, upper-right), `radial-gradient(32% 52% at 48% 14%, rgba(127, 183, 221, 0.24), rgba(0, 0, 0, 0) 60%)` (blue, top-center), and `radial-gradient(30% 48% at 86% 48%, rgba(52, 208, 106, 0.16), rgba(0, 0, 0, 0) 62%)` (green, right-mid) — together these form the aurora curtain visible only across the top portion of the first screen, fading to pure black by mid-page. A fifth, wider but fainter bloom, `radial-gradient(120% 80% at 50% 118%, rgba(52, 208, 106, 0.1), rgba(0, 0, 0, 0) 52%)`, sits low and covers roughly a tenth of the page — a subtle green floor-glow beneath the hero mockup, not a section-wide fill. Card and window elevation uses layered soft shadows: `rgba(0,0,0,0.55) 0 12px 28px -12px, rgba(0,0,0,0.75) 0 48px 96px -34px` for large floating panels, and a tighter `rgba(0,0,0,0.5) 0 6px 16px -8px` for smaller elements. Status/live indicators glow with `rgba(52,208,106,0.8) 0 0 7px` — a small green halo on live-status dots. Glass surfaces throughout use `blur(8px)` (cards) up to `blur(20px) saturate(1.5–2)` (buttons, navbar) — true frosted-glass translucency, not flat fills.

## Motion
Interaction transitions are fast and controlled: `transform 0.16s cubic-bezier(0.22, 0.75, 0.22, 1)` for button press/hover feedback, `opacity 0.3s cubic-bezier(0.22, 0.75, 0.22, 1)` for simple fades, and a slower `opacity, transform 0.75s cubic-bezier(0.22, 0.75, 0.22, 1)` pairing for scroll-triggered section entrances. Icon or status-color changes use `fill 0.45s cubic-bezier(0.22, 0.75, 0.22, 1)`. Named keyframe animations — `aurora`, `aurora2` — drive slow ambient drift in the hero's radial blooms; `pulse` and `b-pulse` animate the live-status glow breathing; `typ` and `slide` drive a typing/carousel-style reveal inside device-mockup illustrations. All easing shares the same `cubic-bezier(0.22, 0.75, 0.22, 1)` signature — a soft ease-out — giving every transition, from button press to section reveal, the same unhurried, glassy settle.

## Guardrails
- Keep the page field near-black; never let the aurora gradients cover more than the hero's upper region — no full-viewport saturated gradient washes.
- Reserve the italic serif face strictly for the short hero headline accent clause; never apply it to body copy, labels, or card headings.
- Do not fill mid-page cards with any solid or gradient background — they are transparent + `blur(8px)` only, bordered by hairline glass edges.
- Never render the hero primary as the glass gradient variant — it is a solid, high-contrast pill, distinct from the navbar/hero glass buttons.
- Preserve the bento asymmetry (uniform triples flanking a widened double row) — do not normalize the grid to equal-span cards throughout.
- Keep all accent hues (lilac, green, glacial blue) rationed to hero blooms and status glows; mid-page sections stay grayscale-on-black.
