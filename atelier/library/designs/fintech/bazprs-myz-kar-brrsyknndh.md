---
version: "1"
name: "Obsidian emerald console"
description: "RTL dark-mode-default forensic dashboard: near-black glass surfaces, a single rationed emerald accent for status and progress, and dense ui-sans card grid of case tiles."
colors:
  background: "#09090B"
  surface: "#18181B"
  surface-border: "#27272A"
  text-primary: "#F4F4F5"
  text-secondary: "#71717A"
  accent: "#10B981"
  accent-strong: "#34D399"
  accent-tint-fill: "rgba(16, 185, 129, 0.1)"
  accent-tint-border: "rgba(16, 185, 129, 0.2)"
typography:
  display-lg:
    fontFamily: "Vazirmatn"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: "1.33"
  body-md:
    fontFamily: "Vazirmatn"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.43"
  label-md:
    fontFamily: "Vazirmatn"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: "1.5"
  label-mono-badge:
    fontFamily: "Vazirmatn"
    fontSize: "14px"
    fontWeight: 700
    note: "small pill/status labels on cards, same face as body, set at label weight"
spacing:
  base: "8px"
  unit-sm: "4px"
  unit-md: "16px"
  unit-lg: "20px"
  unit-xl: "24px"
  gap: "24px"
rounded:
  control-sm: "4px"
  control: "12px"
  card: "12px"
  pill: "9999px"
components:
  button-primary:
    background: "#10B981"
    text-color: "#09090B"
    radius: "12px"
    height: "44px"
    padding: "10px 20px"
    shadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(16, 185, 129, 0.1) 0px 10px 15px -3px, rgba(16, 185, 129, 0.1) 0px 4px 6px -4px"
    hover-background: "#059669"
  button-accent-ghost:
    background: "rgba(16, 185, 129, 0.1)"
    text-color: "#10B981"
    radius: "12px"
    height: "40px"
    padding: "0px"
    border: "1px solid rgba(16, 185, 129, 0.2)"
  button-nav-ghost:
    background: "transparent"
    text-color: "#71717A"
    radius: "12px"
    height: "40px"
    padding: "0px"
    hover-background: "#27272A"
  button-tab-small:
    background: "transparent"
    text-color: "#71717A"
    radius: "4px"
    height: "28px"
    padding: "6px 16px"
  card-case:
    background: "#18181B"
    radius: "12px"
    padding: "20px"
    border: "1px solid #27272A"
  card-create-dashed:
    background: "transparent"
    radius: "12px"
    border: "1px dashed #3F3F46"
  navbar:
    background: "rgba(24, 24, 27, 0.5)"
    backdrop-filter: "blur(12px)"
    height: "56px"
    radius: "0px 0px 0px 0px"
---
# Obsidian emerald console
Source: https://p.superdesign.dev/draft/4effb797-0800-4ae6-940c-e6a77d7eafda

## Overview
A dark-mode-default operations console built on flat, near-black glass surfaces rather than drama or gradient. The identity is carried by restraint: a near-black page (`#09090B`), slightly-lifted card surfaces (`#18181B`), and one emerald hue (`#10B981`/`#34D399`) rationed to status badges, one progress bar, and the single primary action. Typography is a single Vazirmatn family doing all the work — bold weights substitute for a second display face. This is Swiss-adjacent in its restraint and grid discipline, but reads as a SaaS/ops dashboard rather than an editorial system: dense card grid, RTL text flow, utilitarian iconography, no illustration, no imagery.

## Composition
Top-to-bottom: a 56px edge-to-edge sticky navbar in translucent glass sits above a page header pairing a bold title with a muted one-line subtitle. Below it, a filter/segmented-control row (all/in-progress/completed) sits right-aligned opposite a plain-text total count, establishing a left-heavy information bar with the counter anchored right (RTL reading order). The body is a single 4-column card grid at 24px gaps — one dashed creation tile plus three populated case cards — then the page ends; there is no secondary band, testimonial, pricing, or footer content below the fold. The deliberate choice is density-over-narrative: one flat grid of task tiles rather than a scrolling marketing cadence of alternating sections — this is a tool, not a pitch, so the composition rejects hero storytelling for an immediate, scannable work queue.

## Colors
`#09090B` is the page background and dominates the pixel field (~78% declared, ~71% rendered black), confirming a true near-black canvas, not dark-gray. `#18181B` (~16%) is the sole surface role — every card, the dashed-tile ghost, and the footer sit on this one lift step; no deeper surface-2/3 is used, keeping elevation flat and iconographic rather than layered. Borders are hairline `#27272A`/`#28282A`, nearly invisible against the surface, giving cards definition without visual weight. Text ink is bold `#F4F4F5` for primary content and `#71717A` for secondary/meta (dates, counts, nav links) — a two-step ink ramp, no mid-gray. Emerald (`#10B981`, with `#34D399` as a lighter echo) is the only hue in the system and is tightly rationed: a status pill's fill/border, the primary button's solid fill, and one progress-bar track. Left uncolored: card borders, card bodies, iconography — only status and the one call-to-action carry color, which is what makes the accent register as signal rather than decoration.

## Typography
Single-family system: Vazirmatn, serving all roles through weight and size alone, no accent serif or mono present. Section titles/card headings sit at 24px/700/1.33 (display-lg). Labels and emphasized inline numerals sit at 16px/700/1.5. Body and meta text (dates, descriptions, secondary nav) sit at 14px/400/1.43. The dominant char-weighted mode is actually 16px/700 in `#F4F4F5` — meaning most visible text runs bold, not light; hierarchy is built by size and by the swap to `#71717A` for secondary text rather than by weight alone.

## Layout
Content is organized on a 4-column card grid, 24px gap, within a 1280px max-width container. The measured row is one uniform band — 4 equal-width cards (24%/24%/24%/24% of container), confirming a true uniform card grid, not bento or masonry: no card spans wider than its neighbors. Card internal padding is 20px; tighter controls use 16/8/6/4px steps. The header zone uses looser spacing (section rhythm ~24px vertical) while controls inside cards tighten to 4–8px. The grid does not show secondary responsive breakpoints in evidence, but at 1280px max-width four equal tracks is the base; a narrower viewport would reasonably collapse this toward 2 or 1 columns while preserving the 24px gap and 12px card radius.

## Components
- **Navbar**: edge-to-edge square bar, full viewport width (0px inset either side), 56px tall, radius 0px on all four corners (TL/TR/BR/BL) — a flush bar, not an inset or capsule. Background `rgba(24, 24, 27, 0.5)` with `backdrop-filter: blur(12px)`, sticky on scroll. Carries 6 items total: a leading icon/notification cluster and search at the far side, two top-level ghost nav links (ghost-nav-button style, transparent/`#71717A` text, 40px height, 12px radius, hover → `#27272A`), and a trailing user identity chip with avatar — no secondary button beside the identity chip; no separate filled nav CTA is present.
- **Primary hero button** (page-level creation action, top-left of the grid): an observed near-emerald solid fill with white/dark-ink text and ~8–12px corners sized larger than the ghost controls — on-screen this is the single highest-contrast filled control on the page and is the true primary; treat it as using the measured solid-emerald button token (`#10B981` fill, `#09090B` text, 12px radius, 44px height, 10px 20px padding, soft emerald glow shadow) since no second, higher-contrast fill exists anywhere else in the capture.
- **Segmented filter control** (below header, right-aligned): small text tabs, transparent background, `#71717A` text, 4px radius, 28px height, 6px 16px padding; the active tab is visually promoted to a filled rounded pill state against the group.
- **Dashed creation tile**: first cell of the card grid, transparent fill, dashed border (~`#3F3F46`), 12px radius, centered plus-icon glyph and a short label — an empty-state invitation card, not a data card.
- **Case card family** (×3 in the 4-column grid, one per populated cell): background `#18181B`, radius 12px, padding 20px, hairline `#27272A` border. Internal anatomy top-to-bottom: a small top-left status pill (bold label, color-coded — emerald tint for in-progress/final states, neutral for pending), a top-right icon glyph in a soft rounded tile denoting media/device type; below that a bold 16–24px heading line, a muted 14px metadata row (date, icon), then a body region that varies per card — one shows a short activity/log line, one shows two small filled chip buttons (image/people-style utility chips), one shows a numeric figure plus a thin horizontal progress bar filled part-way in emerald; each card closes with a footer row pairing a small chevron control against a right-aligned meta label (file count, size, or status text) with a trailing small icon.
- **Footer**: flat `#18181B` band, no visible links — a structural close to the page rather than a navigation surface.

## Graphics & Effects
No gradients, mesh backgrounds, or photographic imagery appear anywhere in this system — the aesthetic is flat-color-plus-glass, not aurora or mesh-driven. The only translucency is the navbar's `rgba(24, 24, 27, 0.5)` fill combined with `backdrop-filter: blur(12px)`, a glassmorphic treatment applied to one 56px-tall strip at the very top of the viewport — it does not extend into card surfaces, which remain solid `#18181B`. The primary button carries a soft colored elevation shadow, `rgba(16, 185, 129, 0.1) 0px 10px 15px -3px, rgba(16, 185, 129, 0.1) 0px 4px 6px -4px`, tinting its drop shadow with the accent rather than neutral black — this is the system's only colored-shadow elevation cue. No visible grain, noise, or star-field texture is present; surfaces are clean flat fills.

## Motion
Interaction motion is fast and utilitarian: color/background/border transitions run at `0.15s cubic-bezier(0.4, 0, 0.2, 1)` for hover-state micro-feedback (nav links, tab states, button hover-darkening from `#10B981` to `#059669`). Broader state changes (panel/card transitions) use `all 0.2s cubic-bezier(0.4, 0, 0.2, 1)`, with a quicker `all 0.15s` variant for smaller controls. Opacity-only reveals (tooltips, dismiss) use a snappy `0.1s ease-in`. Keyframe-driven effects are limited to `fade-in`/`fade-out` for mount/unmount and a `pulse` loop reserved for live/in-progress status indicators (e.g., the extraction-progress card). All motion is short (≤200ms) and ease-out-leaning — appropriate to a dense, task-driven console rather than a marketing page.

## Guardrails
- Never introduce a gradient or mesh background — this system is flat near-black with a single accent hue only.
- Do not lighten the page background past `#09090B`/`#18181B` two-step ramp — no mid-gray surface-2/3 layer exists here.
- Keep emerald rationed to status, progress, and the one primary action — do not recolor nav links, borders, or card bodies with it.
- Do not reclassify the glass navbar as inset or capsule-shaped — it is flush, edge-to-edge, and square-cornered.
- Preserve the uniform 4-column equal-span card grid — do not convert it to bento/masonry spans not present in the evidence.
- Keep all text on the bold Vazirmatn face; do not substitute a second serif/mono display family not seen in the system.
