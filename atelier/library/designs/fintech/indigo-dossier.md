---
version: "1"
name: "Indigo Dossier"
description: "Dark-mode-default editorial system for long-form investigative content, built from near-black surfaces, a single rationed indigo accent, and one gold variant reserved for the highest-stakes conversion moment."
colors:
  background: "#050508"
  surface: "#18181B"
  surface-alt: "#27272A"
  text-primary: "#FFFFFF"
  text-secondary: "#A1A1AA"
  accent: "#6366F1"
  accent-light: "#818CF8"
  accent-dark: "#4F46E5"
  border: "#27272A"
  border-accent: "#6366F1"
  gold-accent: "#C9A227"
  danger: "#FF4D4D"
typography:
  display-lg:
    fontFamily: "Inter"
    fontSize: "80px"
    fontWeight: 900
    lineHeight: "1.1"
    letterSpacing: "-2.4px"
  headline-md:
    fontFamily: "Inter"
    fontSize: "56px"
    fontWeight: 800
    lineHeight: "1.2"
    letterSpacing: "-1.1px"
  body-md:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.7"
  label-md:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: "1.6"
  accent-mono:
    fontFamily: "Space Mono"
    fontSize: "16px"
    fontWeight: 700
    role: "wordmark and numeral-prefix accent (used on logotype and card index numerals)"
spacing:
  base: "8px"
  gap: "32px"
  section-padding: "96px"
rounded:
  control: "8px"
  card: "16px"
  card-tight: "8px"
  pill: "50px"
components:
  button-hero-primary:
    background: "#6366F1"
    text-color: "#FFFFFF"
    radius: "8px"
    height: "observed ~46px"
    padding: "observed 12px 24px"
    note: "observed solid indigo fill, not glass; the single highest-emphasis control under the headline"
  button-secondary-outline:
    background: "transparent"
    text-color: "#A1A1AA"
    radius: "8px"
    height: "45px"
    padding: "12px 24px"
    border: "2px solid #27272A"
    hover-background: "rgba(99, 102, 241, 0.05)"
    hover-text-color: "#FFFFFF"
  button-navbar-cta:
    background: "#6366F1"
    text-color: "#FFFFFF"
    radius: "8px"
    height: "43px"
  button-midpage-solid:
    background: "#6366F1"
    text-color: "#FFFFFF"
    radius: "8px"
    height: "45px"
    padding: "12px 24px"
    border: "2px solid rgb(99, 102, 241)"
    shadow: "rgba(99, 102, 241, 0.3) 0px 4px 12px 0px"
  button-gold-conversion:
    background: "linear-gradient(135deg, rgb(201, 162, 39), rgb(250, 204, 21))"
    text-color: "#000000"
    radius: "8px"
    height: "48px"
    padding: "14.4px 24px"
    hover-shadow: "rgba(99, 102, 241, 0.3) 0px 8px 24px 0px"
    hover-transform: "matrix(1, 0, 0, 1, 0, -2)"
  button-dark-outline:
    background: "#18181B"
    text-color: "#6366F1"
    radius: "8px"
    height: "56px"
    padding: "16px 32px"
    border: "2px solid rgb(99, 102, 241)"
  card-icon-body:
    background: "#18181B"
    radius: "16px"
    padding: "0px"
  card-large-body:
    background: "#18181B"
    radius: "16px"
    padding: "64px"
  card-tagged:
    background: "#27272A"
    radius: "8px"
    padding: "32px"
  card-checklist:
    background: "#18181B"
    radius: "16px"
    padding: "64px"
  card-tight-icon:
    background: "#27272A"
    radius: "8px"
    padding: "16px"
  card-media-translucent:
    background: "rgba(0, 0, 0, 0.3)"
    radius: "8px"
    padding: "32px"
  card-list-dark:
    background: "#27272A"
    radius: "8px"
    padding: "32px"
navbar:
  background: "rgba(10, 10, 15, 0.8)"
  backdrop-filter: "blur(20px)"
  height: "111px"
  width: "edge-to-edge, 0px inset both sides"
  radius: "0px all corners"
---
# Indigo Dossier
Source: https://iuripiragibe.net/

## Overview
This is dark-mode-default editorial design built for investigative long-form content: near-black surfaces (#050508 background at ~42% declared area, reinforced by the near-black/near-navy pixel field), stacked dark card surfaces one step lighter (#18181B, #27272A), and a single indigo accent (#6366F1) rationed to interactive elements, borders, and small gradient washes. The aesthetic reads as a hybrid of Swiss-influenced grid rigor (strict 3-column card rows, consistent 32px gaps, centered eyebrow-headline-subhead openers per section) and a SaaS-dashboard visual language (stat tiles, media-kit demographic bars, glassy sticky navbar). A faint scanline/grid texture sits under the hero. The system deliberately avoids full-bleed color: saturation is reserved for badges, borders, CTA fills, and one gold gradient button near the page's end.

## Composition
The first screen stacks five distinct elements before any illustration: a pill-shaped status badge, a bordered announcement/community band, a bordered promotional band in amber tones, a three-line oversized headline (with the second line in gradient indigo), a body paragraph with bolded inline figures, a three-button cluster, and a four-up stat row — all center-aligned in a single column, no hero image or device mockup. This is a text/data-led hero, not an illustration-led one: the deliberate choice is density and credibility signaling (numbers, badges, community proof) over a visual centerpiece; the rejected alternative is a large hero graphic or product screenshot. Below the fold, the page settles into a strict repeating rhythm: centered eyebrow pill → headline → subhead → a 3-or-4-up card grid, repeated for each content pillar (capability triptych, portfolio grid, filterable video gallery, media-kit stat/demographic block). Density is high — 96px section padding but tight 32px card gaps and minimal empty canvas — consistent with an information-dense investigative-content site rather than a spacious marketing minimalism.

## Colors
Background (#050508, ~42% area) and its near-black/near-navy pixel-field siblings (#000000, #000018, #181818) carry the page; surfaces step up in two tiers — #18181B for primary cards (~20% area) and #27272A for secondary/tagged cards and borders (~6% area). Text-primary is pure white (#FFFFFF) for headings and stat numerals; text-secondary is a cool gray (#A1A1AA) for body copy and captions. The indigo accent (#6366F1, with light #818CF8 and dark #4F46E5 alias steps) is rationed to: button fills, focus/border rings, badge text, gradient headline words, and two soft radial washes in the hero. A gold gradient (`linear-gradient(135deg, rgb(201, 162, 39), rgb(250, 204, 21))`) appears exactly once, on a single late-page conversion button — deliberately the only warm, non-indigo saturated color in the system, marking it as the terminal call-to-action. A muted red (#FF4D4D) is reserved for a single urgent-toned promotional band border/text. Pure black and deep charcoal remain otherwise uncolored — no secondary brand hue is introduced.

## Typography
Inter carries the entire system at three logical registers: display-lg (80px/900, lh 1.1, ls -2.4px) for the hero's three-line stacked headline, headline-md (56px/800, lh 1.2, ls -1.1px) for section headers, and body-md (16px/400, lh 1.7, color #A1A1AA) for paragraph copy, with label-md (16px/600, lh 1.6) for eyebrows, badges, and button text. A monospace accent (Space Mono) marks the wordmark/logotype and numeral prefixes on portfolio cards (e.g., two-digit index numbers), giving the system its one deliberate typographic signature against an otherwise pure-sans hierarchy. Headline gradient treatment (white line → indigo-gradient line) covers roughly one full line of the three-line hero headline — not the whole headline — establishing the accent as an emphasis device, not a wash.

## Layout
Content is capped at a 1200px max-width, centered, with 96px vertical section padding and a 32px gap governing all card grids. The dominant grid is a 3-column card grid (rows of [3] repeating, with a trailing partial row of 1 wide item when count isn't divisible by 3 — e.g., a 4-item feature set renders as [3, 1] rather than reflowing to fill). Card radii follow two tiers: 16px for large/primary cards (padding up to 64px), 8px for compact/tagged cards (padding 16–32px). The media-kit stat block uses a 4-up row of numeral tiles inside one bordered indigo-tinted container. The footer runs a simple two-column split (wordmark+tagline left, 9-link nav right) with no background fill, sitting directly on the page's base near-black.

## Components
- **Navbar**: edge-to-edge square bar (0px inset left/right, 0/0/0/0 corner radii — a true full-width bar, not inset or pill-shaped), 111px tall, sticky, glass fill `rgba(10, 10, 15, 0.8)` + `blur(20px)` backdrop-filter. Carries ~20 items: monospace-accented wordmark at far left, a cluster of text nav links, then a stack of distinct right-side controls including a solid indigo CTA (#6366F1, white text, 8px radius, 43px height) plus multiple secondary pill/rect utility buttons (red YouTube-toned, amber "Livros," gold "Biblioteca") each with their own small fill — these are navbar utilities, not the hero primary.
- **Hero primary CTA**: an observed solid near-white-to-indigo filled pill/rect sitting under the body paragraph — rendered as `button-hero-primary` (#6366F1, white text, ~8px corners, ~46px height) — the most emphasized control on the first screen, accompanied by two lower-emphasis outline/ghost buttons beside it.
- **Button — midpage solid** (#6366F1 fill, 45px height, 8px radius, 2px solid indigo border, resting shadow `rgba(99, 102, 241, 0.3) 0px 4px 12px 0px`): used for in-content primary actions mid-page; slightly-rounded corner feel.
- **Button — outline/ghost** (transparent fill, #A1A1AA text, 45px height, 8px radius, 2px solid #27272A border; hover → `rgba(99, 102, 241, 0.05)` bg, white text): the secondary/tertiary action variant, ×5 measured instances, slightly-rounded.
- **Button — dark-outline** (#18181B fill, indigo text, 56px height, 8px radius, 2px solid indigo border): a larger tertiary variant, slightly-rounded, used once mid-page.
- **Button — gold conversion** (transparent base with `linear-gradient(135deg, rgb(201, 162, 39), rgb(250, 204, 21))` fill, black text, 48px height, 8px radius; hover lifts with shadow `rgba(99, 102, 241, 0.3) 0px 8px 24px 0px` and translateY(-2px)): the single terminal-CTA variant near page end, slightly-rounded, gold-on-dark for maximum contrast against the surrounding indigo system.
- **Capability triptych card** (icon-body family, #18181B fill, 16px radius, 0px padding): appears in the "about the work" band, ×3 in a row of [3], each carrying an emoji-style icon, a bold heading, and a body paragraph — no CTA, no chip.
- **Portfolio numbered card** (large-body family, #18181B fill, 16px radius, 64px padding): appears in the portfolio grid, rows of [3, 1] (3 cards then one trailing wide card), anatomy top-to-bottom: monospace two-digit index numeral in accent color, bold heading, body paragraph, one small pill-shaped topic chip (bordered, indigo text) at the bottom.
- **Video/media card** (translucent family, `rgba(0, 0, 0, 0.3)` fill, 8px radius, 32px padding): appears in the filterable video gallery, ×3 in a row, each with a placeholder dark media block on top (roughly half the card height), then heading, body caption, and a small text link with external-link icon below.
- **Filter chip/tab row**: a horizontal cluster of pill-ish rectangular tabs (one active in solid indigo fill, rest outline) above the video gallery, functioning as a scrolling-rail-style filter control.
- **Stat/numeral row** (4-up, inside one bordered container with indigo-tinted radial background and border): oversized bold indigo numerals stacked over small gray labels, arranged in a single row of 4 equal cells inside the media-kit section.
- **Demographic bar / progress card** (#27272A or dark background, 8px radius): horizontal proportion bars (e.g., single-segment fill bar) with inline percentage labels, used in the media-kit demographic breakdown.
- **Email-capture band**: single-row layout with a dark bordered text input (placeholder text, muted fill) beside the gold-gradient conversion button — a dedicated waitlist/newsletter molecule distinct from any card.
- **Contact tile row**: three stacked dark rectangular rows (#18181B-toned), each pairing a small colored icon glyph with a label, beside one bordered indigo-tinted callout card ("response time" style) with centered heading and body text.
- **Footer**: transparent background sitting on page base color, two-column split with monospace wordmark + tagline at left and a 9-item text link row at right, thin hairline divider above a final copyright/legal line.

## Graphics & Effects
Two radial washes sit behind the hero only, each covering roughly 9% of total page area: `radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.15) 0%, rgba(0, 0, 0, 0) 50%)` on the left and `radial-gradient(circle at 80% 50%, rgba(99, 102, 241, 0.1) 0%, rgba(0, 0, 0, 0) 50%)` on the right — these are soft indigo glows bleeding from the hero's edges into black, not a full-frame gradient; the hero canvas otherwise stays near-black. A fine 1px grid-line texture overlays the hero (`linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)` repeated both axes), giving a faint blueprint/schematic grain rather than visible noise. One small vertical panel gradient (`linear-gradient(rgb(10,10,15) 0%, rgb(18,18,28) 100%)`, ~3% of page) shades a single bordered callout card, not the page. Card elevation uses soft ambient shadows (`rgba(0,0,0,0.5) 0px 10px 30px 0px`) and a colored indigo glow (`rgba(88,101,242,0.3) 0px 0px 10px 0px`) on emphasized/bordered containers; one urgent-toned card carries a red-tinted glow (`rgba(234,60,60,0.59) 0px 0px 21.4828px 0px, rgba(0,0,0,0.4) 0px 2px 8px 0px`). Navbar and select overlays use `blur(20px)`/`blur(25px)` backdrop-filters for the glassmorphic sticky-bar effect.

## Motion
Interaction transitions are short and utilitarian: `all 0.3s ease` and `color 0.3s ease` govern hover/focus state changes on buttons and links; `all 0.2s ease` covers finer control feedback. Entrance/reveal motion uses a slower dual-property transition `opacity, transform 0.6s ease` (paired keyframe `fadeInUp`) for scroll-triggered section reveals. Named keyframe animations (`material-oculto-pulse`, `biblioteca-shimmer`, `biblioteca-pulse`, `dropdown-fade-in`) drive subtle looping pulse/shimmer effects on select badges/buttons and a fade-in for dropdown menus — motion stays restrained and functional, never bouncy or overshooting.

## Guardrails
- Never fill the hero background edge-to-edge with the indigo radial gradient — it is two soft corner washes over near-black, not a saturated backdrop.
- Never render the hero primary CTA as a glass/translucent button — it is a solid indigo fill; glass treatment belongs only to the sticky navbar.
- Never merge the 16px-radius large cards with the 8px-radius tagged/tight cards — they are distinct families with different padding and corner feel.
- Reserve the gold gradient fill for exactly one conversion button; do not reuse it on navbar or mid-page controls.
- Keep card grids in strict 3-column rows with a trailing partial row (e.g., [3,1]) rather than reflowing to even rows.
- Keep all body text in the muted gray (#A1A1AA); pure white is reserved for headings, stat numerals, and emphasis text only.
