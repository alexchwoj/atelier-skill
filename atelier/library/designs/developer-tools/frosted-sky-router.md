---
version: "1"
name: "Frosted Sky Router"
description: "Light glassmorphic dashboard-marketing hybrid over a pale blue-white field, with a rationed cobalt-cyan accent, tight geometric display type, and a dark-mode code panel as its centerpiece artifact."
colors:
  background: "#F0F0FF"
  surface: "#FFFFFF"
  surface-glass: "rgba(255, 255, 255, 0.44)"
  text-primary: "#0F172A"
  text-secondary: "#64748B"
  border: "#E2E8F0"
  accent: "#2D7BFF"
  accent-secondary: "#00B8D5"
  success: "#2F9D5A"
typography:
  display-lg:
    fontFamily: "Satoshi"
    fontSize: "60px"
    fontWeight: 700
    lineHeight: "1.08"
    letterSpacing: "-3.3px"
  headline-md:
    fontFamily: "Satoshi"
    fontSize: "48px"
    fontWeight: 700
    lineHeight: "1"
    letterSpacing: "-2.2px"
  body-md:
    fontFamily: "Satoshi"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "1.8"
  label-md:
    fontFamily: "Satoshi"
    fontSize: "20px"
    fontWeight: 800
    lineHeight: "1.2"
    letterSpacing: "-0.7px"
  body-base:
    fontFamily: "Satoshi"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.6"
  accent-mono:
    fontFamily: "monospace"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.6"
spacing:
  base: "8px"
  gap: "24px"
  section-padding: "40px"
rounded:
  control: "8px"
  card: "16px"
  card-lg: "24px"
  pill: "9999px"
  chip: "6px"
components:
  navbar:
    background: "transparent"
    height: "56px"
    radius: "0px"
  button-hero-primary:
    background: "linear-gradient(135deg, rgb(45, 123, 255), rgba(45, 123, 255, 0.82))"
    backdrop-filter: "blur(10px) saturate(1.6)"
    text-color: "#FFFFFF"
    radius: "8px"
    height: "48px"
    border: "1px solid rgba(45, 123, 255, 0.5)"
  button-nav-cta:
    background: "#2D7BFF"
    text-color: "#FFFFFF"
    radius: "6px"
    height: "32px"
    hover-background: "#2563EB"
  button-secondary-solid:
    background: "#2D7BFF"
    text-color: "#FFFFFF"
    radius: "8px"
    height: "40px"
  button-outline:
    background: "#FFFFFF"
    text-color: "#0F172A"
    radius: "8px"
    height: "48px"
    border: "1px solid #E2E8F0"
  button-text-link:
    background: "transparent"
    text-color: "#2D7BFF"
    radius: "0px"
    height: "20px"
  card-glass:
    background: "rgba(255, 255, 255, 0.44)"
    gradient-overlay: "linear-gradient(rgba(255, 255, 255, 0.06), rgba(0, 0, 0, 0) 42%)"
    backdrop-filter: "blur(14px) saturate(1.4)"
    radius: "16px"
    padding: "24px 22.4px"
  card-step:
    background: "#FFFFFF"
    radius: "16px"
    border: "1px solid rgba(6, 182, 212, 0.3)"
  card-pricing:
    background: "#FFFFFF"
    radius: "16px"
    border: "1px solid #E2E8F0"
    padding: "24px"
  card-feature-gradient:
    background: "radial-gradient(circle at 22% 0px, rgba(79, 124, 255, 0.08), rgba(0, 0, 0, 0) 32%), linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.92)), linear-gradient(125deg, rgb(45, 123, 255), rgb(6, 182, 212) 55%, rgb(45, 123, 255))"
    radius: "24px"
    padding: "24px"
  card-code-panel:
    background: "#0F172A"
    radius: "12px"
    border: "1px solid #1E293B"
  card-faq:
    background: "#FFFFFF"
    radius: "14px"
    padding: "0px"
---
# Frosted Sky Router
Source: https://router.bynara.id/

## Overview
This is a light-mode-default glassmorphic dashboard-marketing hybrid: a pale blue-white field carrying translucent white glass cards, a single cobalt accent, and one deliberate dark artifact — a terminal-styled code panel — that anchors the hero against an otherwise airy composition. Geometric grotesque display type (Satoshi, heavy negative tracking) supplies confident hierarchy; the palette otherwise stays desaturated, letting cobalt-blue and a cyan complement do all interactive signaling. The overall register reads technical-but-approachable: developer tooling styled with consumer-SaaS softness — rounded glass panels, pill chips, soft cyan-tinted shadows — rather than terminal-brutalist starkness.

## Composition
The first screen is asymmetric: a left text column (eyebrow chip pair, two-line display headline, body paragraph, button row, trust checkmarks) against a right-side dark code panel roughly matching its height — a classic fixed-plus-fluid split rejecting a centered single-column hero. Below the fold, a 4-up row of glass icon-stat tiles closes the hero band. Section rhythm downstream alternates plain white/pale bands with pale-blue tinted bands: a collaboration callout, a horizontal logo rail (marquee-style scrolling row), a three-card numbered-step band, a stat/numeral row, a horizontal tool-icon rail, a pricing carousel, a publisher CTA band, an FAQ accordion, and a plain white footer. Density stays generous (40px section padding, 24px gaps) with no dense data tables — every band is card- or row-based, never more than 3–4 columns wide, favoring wide breathing room over information density.

## Colors
Background is a pale lavender-blue field (~#F0F0FF, ~52% of pixels) alternating with pure white bands (~23%) and a near-white cool gray (~15%) — three tints of the same neutral family, not a single flat color, giving section separation without borders. Text ink is near-black slate (#0F172A) for headings/body and slate-gray (#64748B) for secondary/caption text. The accent, cobalt #2D7BFF, is rationed tightly: nav CTA fill, hero gradient button, link color, chip text, active-state glows — never a full-bleed wash. A cyan complement (#06B6D4) appears only inside the feature-triptych gradient border and the radial hero glows, giving the accent a two-hue blue-cyan range rather than a single flat blue. Borders run hairline #E2E8F0. Green (#16A34A-family) is reserved purely semantically for a "start free" CTA and success checkmarks; nothing else borrows it.

## Typography
Satoshi carries the entire system at both display and body sizes — no serif or mono interruption except the code panel's monospace body, which functions as the signature accent face (dark terminal block against the light page). Display headline sits at 60px/700, line-height 1.08, tracking -3.3px; a secondary headline weight (48px/700, tracking -2.2px) recurs at each section head. Labels/eyebrows use a dense 20px/800 with tight -0.7px tracking, almost always inside a pill chip. Body copy runs 18px/400 at loose 1.8 line-height for hero paragraphs, dropping to 16px/400 at 1.6 for in-card body text — the loosen-for-hero, tighten-for-density pattern.

## Layout
Content is capped at a 1280px max-width, centered. Grids are simple and named directly by column count: a 4-column stat-tile row, a 2-column 40px-gap split (roughly 46/49 width), and repeating 3-column 24px-gap rows for step and feature cards. The pricing band is a horizontal carousel of 4 uniform-width cards with dot pagination rather than a wrapping grid. The tool-compatibility and logo sections use a horizontal scrolling rail of fixed-width tiles, not a grid at all. Spacing units cluster at 8/12/14/16/40px; corner radii cluster at 8/10/12/14/16/9999px, with pill (9999px) reserved for chips and round icon-badges, 16px as the default card radius, and 24px used only for the elevated feature-gradient cards.

## Components
- **Navbar** — edge-to-edge square bar, 100% viewport width (0px inset either side), 56px tall, all four corners 0px radius (no rounding, no floating-pill treatment), background transparent over the page field, static/non-glass. Carries 17 items: logo mark + wordmark, ~7 text nav links (one shown active/highlighted), a small "earn" pill badge beside one link, language and theme-toggle icons, a text "Sign in" link, and a solid nav CTA — background #2D7BFF, text #FFFFFF, radius 6px, height 32px, padding 0 12px, resting shadow `rgba(15, 23, 42, 0.08) 0px 1px 3px 0px, rgba(15, 23, 42, 0.06) 0px 1px 2px -1px`, hover background #2563EB.
- **Hero primary button** — the solid cobalt-gradient pill-cornered rectangle beneath the headline, paired with an arrow glyph. Fill `linear-gradient(135deg, rgb(45, 123, 255), rgba(45, 123, 255, 0.82))` with `backdrop-filter: blur(10px) saturate(1.6)`, text #FFFFFF, radius 8px (slightly-rounded), height 48px, padding 0 24px, border 1px solid rgba(45, 123, 255, 0.5), resting shadow `rgba(45, 123, 255, 0.22) 0px 12px 30px 0px`; hover shifts background toward rgba(255,255,255,0.32) overlay, shadow deepens to `rgba(45, 123, 255, 0.34) 0px 18px 44px 0px`, and lifts via `translateY(-2px)`.
- **Hero secondary button** — an outline rectangle beside the primary, white fill, dark text, hairline border, same 8px radius family, no gradient — a plain utility companion, not a competing primary.
- **Secondary solid button** — flat #2D7BFF fill, white text, radius 8px, height 40px, padding 0 16px, soft `rgba(15,23,42,0.08) 0px 1px 3px 0px` shadow; used for a mid-page callout action (e.g. the collaboration band CTA).
- **Text link buttons** — transparent, cobalt #2D7BFF text, 0px radius, 20px height, no padding; used for inline "view all / explore" affordances throughout mid-page cards and FAQ links.
- **Stat/icon tile row (hero)** — ×4 in a single row (rows [100|100|100|100]), full-width-panel anatomy with no card chrome: rounded square icon badge (pale blue tint fill) + bold label + muted caption stacked beneath, transparent background, 0px radius, 0px padding — a borderless info row, not a boxed card.
- **Glass icon-text card** — ×7, appears mid-page (compatibility/feature context), rgba(255,255,255,0.44) fill + `linear-gradient(rgba(255,255,255,0.06), rgba(0,0,0,0) 42%)` overlay + `backdrop-filter: blur(14px) saturate(1.4)`, radius 16px, shadow `rgba(15,23,42,0.04) 0px 1px 2px 0px`, padding 24px 22.4px. Anatomy top-to-bottom: icon badge, heading, short body line.
- **Numbered step card** — ×3 in a single row, appears in the process/"how it works" band, white fill, 16px radius, cyan-tinted hairline border, glow-adjacent. Anatomy: small "STEP 0N" pill eyebrow + icon badge top row, bold heading, muted body caption beneath.
- **Tool/logo tile (scrolling rail)** — ×8+ items, uniform square tiles (rows measured as irregular fractional widths, confirming a horizontal rail rather than a wrapping grid), pale-blue tinted fill, rounded corners, centered icon + label beneath; one tile shown in an active/selected state with a cobalt glow ring and lifted border.
- **Stat/numeral row** — a 4-up row of oversized numeral figures (large bold Satoshi numerals with "+" suffixes) each paired with a muted caption label beneath, no card container, transparent background, centered as a group beneath a heading.
- **Pricing card** — ×4+ in a horizontal carousel with dot pagination, white fill, 16px radius, hairline border, padding ~24px. Anatomy top-to-bottom: small logo/icon mark, plan name label, large price numeral with a muted per-period suffix, secondary weekly-price caption, a divider, a bulleted checklist of model names with a trailing "view all" text link, a labeled meta row (token cap, rate limit figures right-aligned), and a full-width CTA button at the bottom (solid green "start free" on the free tier, cobalt-outline "buy plan" on paid tiers, a disabled/muted button on an out-of-stock tier).
- **Feature-gradient triptych card** — ×3 in a row (32/32/32 split), the richest surface in the system: `radial-gradient(circle at 22% 0px, rgba(79,124,255,0.08), rgba(0,0,0,0) 32%), linear-gradient(rgba(255,255,255,0.92), rgba(255,255,255,0.92)), linear-gradient(125deg, rgb(45,123,255), rgb(6,182,212) 55%, rgb(45,123,255))` (the last layer forming a blue-to-cyan-to-blue gradient border/edge), radius 24px, shadow `rgba(15,23,42,0.07) 0px 18px 55px 0px`, padding 24px. Anatomy: heading, short body line, a small bulleted list, and an icon accent.
- **FAQ accordion row** — ×5 stacked full-width, white fill, radius 14px, shadow `rgba(15,23,42,0.07) 0px 10px 30px 0px`, no padding on the container (padding lives inside each row). Anatomy: question row with chevron/expand icon, one row shown expanded revealing a muted body paragraph beneath.
- **Code/terminal panel (hero)** — the dark centerpiece artifact beside the hero text: near-black background (#0F172A-family), radius ~12px, traffic-light dots top-left, a small "Copy" utility button top-right, a 3-tab language switcher row (one tab active with a pale blue pill highlight), monospace syntax-highlighted body text below with line numbers. This is the system's one deliberate dark surface — a static stand-in for any live/animated code demo.
- **Footer** — plain white background, 0px radius, no card chrome. Logo + one-line description + a row of circular social icon buttons on the left; three link columns (labeled group headers in muted caps, plain text links beneath) on the right; a hairline divider above a closing copyright row.

## Graphics & Effects
Five soft radial glows sit across the page as ambient background wash, each covering a modest fraction (measured at ~18.3% page-area each, so they overlap into a diffuse cumulative field rather than one full-bleed gradient): `radial-gradient(55% 50% at 12% 8%, rgba(45,123,255,0.16), rgba(0,0,0,0) 60%)` upper-left, `radial-gradient(45% 45% at 88% 16%, rgba(6,182,212,0.14), rgba(0,0,0,0) 60%)` upper-right, `radial-gradient(55% 50% at 85% 72%, rgba(6,182,212,0.1), rgba(0,0,0,0) 62%)` lower-right, `radial-gradient(50% 50% at 70% 95%, rgba(45,123,255,0.1), rgba(0,0,0,0) 60%)` near bottom, `radial-gradient(45% 45% at 28% 62%, rgba(45,123,255,0.07), rgba(0,0,0,0) 62%)` mid-left. These sit under the whole scroll as a faint blue/cyan haze, not a saturated hero backdrop — the hero itself stays pale and mostly neutral, with color arriving only as this rationed ambient tint plus the two small localized scrims over media: `radial-gradient(42% 42% at 20% 24%, rgba(45,123,255,0.08), rgba(0,0,0,0) 66%)` and `radial-gradient(48% 42% at 76% 35%, rgba(45,123,255,0.16), rgba(0,0,0,0) 60%)`, each sized to one card/panel, not the viewport. A faint dot/star-speckle texture is visible scattered across the pale background bands, giving subtle depth without noise grain. Elevation is expressed through soft cyan/cobalt-tinted shadows rather than neutral gray — e.g. `rgba(255,255,255,0.55) 0px 1px 0px 0px inset, rgba(45,123,255,0.12) 0px 10px 30px 0px` on glass cards, and `rgba(255,255,255,0.5) 0px 1px 0px 0px inset, rgba(15,23,42,0.04) 0px 8px 22px 0px` on flatter surfaces. Backdrop-filters (`blur(14px) saturate(1.4)`, `blur(10px) saturate(1.6)`, `blur(8px)`) mark every glass surface as translucent-over-tinted-background, never opaque white.

## Motion
Interactive color/shadow/transform changes run on a shared `0.3s cubic-bezier(0.4, 0, 0.2, 1)` covering color, background, border, shadow, transform, and backdrop-filter together — the whole button/card state change animates as one coordinated block, not staggered properties. Fine-grained UI feedback (menu items, toggles) uses a snappier `0.12s cubic-bezier(0.32, 0.72, 0, 1)` for color/background only. Named keyframes (`nara-lo-fade`, `nara-toast-in`, `nara-bl-bar`, `nara-btn-pulse`, `nara-cmdk-fade`) indicate fade-and-slide entrances for toasts/overlays and a pulsing glow on at least one CTA. CSS scroll-driven animations are present, implying section/element reveals tied to scroll position rather than only viewport-intersection triggers.

## Guardrails
- Never fill the hero full-bleed with the cobalt/cyan radial glows — they are a diffuse ~18%-coverage ambient haze over a pale, mostly-neutral background, not a saturated gradient backdrop.
- Never render the navbar as a floating, rounded, or inset pill — it is a flat 0px-radius, edge-to-edge, transparent 56px bar.
- Never substitute the nav's small blue-fill CTA (32px, radius 6px) for the hero's gradient-glass primary button (48px, radius 8px) — they are different variants at different weights.
- Keep the code/terminal panel as the system's only dark surface; do not extend dark mode elsewhere.
- Preserve glass fills as translucent rgba with backdrop-filter — do not flatten glass cards to opaque white.
- Keep green reserved strictly for the free-tier/success CTA; do not reuse it as a general accent.
