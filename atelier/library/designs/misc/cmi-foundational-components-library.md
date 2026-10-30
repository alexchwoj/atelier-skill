---
version: "1"
name: "Foundational Ledger"
description: "A light, near-white component ledger built on flat filled and outlined controls, a rationed blue/red/green semantic trio, and small-caps section labels organized in a dense vertical catalog rhythm."
colors:
  background: "#F2F2F2"
  surface: "#FFFFFF"
  text-primary: "#1C1C1C"
  text-secondary: "#7D7D7D"
  accent: "#1E6FB9"
  accent-deep: "#155490"
  danger: "#D64545"
  success: "#2E7D5B"
  warning-tint: "#FFF4DD"
  success-tint: "#E8F5EF"
  info-tint: "#EAF3FB"
  border-default: "#E6E6E6"
  border-accent: "#1E6FB9"
typography:
  display-lg:
    fontFamily: "Inter"
    fontSize: "28px"
    fontWeight: 600
    lineHeight: "1.25"
  headline-md:
    fontFamily: "Inter"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: "1.5"
  body-md:
    fontFamily: "Inter"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.5"
  label-md:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: "1.5"
  body-sm:
    fontFamily: "Inter"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: "1.5"
  label-caps-mono:
    fontFamily: "Inter"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: "1.4"
spacing:
  base: "4px"
  gap: "24px"
  section-padding: "591px"
rounded:
  control: "12px"
  card: "16px"
  pill: "9999px"
components:
  button-primary:
    background: "#1E6FB9"
    text-color: "#FFFFFF"
    radius: "12px"
    height: "44px"
    padding: "0px 16px"
    shadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
    hover-background: "#155490"
    disabled-background: "#9CC9E5"
  button-secondary:
    background: "transparent"
    text-color: "#1E6FB9"
    radius: "12px"
    height: "44px"
    padding: "0px 16px"
    border: "1px solid #1E6FB9"
    hover-background: "#EAF3FB"
  button-tertiary:
    background: "transparent"
    text-color: "#1E6FB9"
    radius: "9999px"
    height: "44px"
    padding: "0px"
    hover-background: "#F2F2F2"
  button-destructive:
    background: "#D64545"
    text-color: "#FFFFFF"
    radius: "12px"
    height: "44px"
    padding: "0px 16px"
    shadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
    disabled-background: "#C0C0C0"
  icon-button-standard:
    background: "transparent"
    text-color: "#1E6FB9"
    radius: "9999px"
    height: "44px"
    hover-background: "#EAF3FB"
  badge-active:
    background: "#E8F5EF"
    text-color: "#2E7D5B"
    radius: "9999px"
    padding: "2px 8px"
  badge-pending:
    background: "#FFF4DD"
    text-color: "#F0A020"
    radius: "9999px"
    padding: "2px 8px"
  badge-disabled:
    background: "#F2F2F2"
    text-color: "#7D7D7D"
    radius: "9999px"
    padding: "2px 8px"
  card-notes-panel:
    background: "#FFFFFF"
    radius: "16px"
    padding: "24px"
    border: "1px solid #E6E6E6"
---
# Foundational Ledger
Source: https://p.superdesign.dev/draft/6c6ad549-cfc7-4335-b533-4f91d42cb4bb

## Overview
This is a component-catalog page rendered in a flat, light, Swiss-adjacent documentation style: a near-white field, one working sans (Inter) carrying every weight from small-caps eyebrow labels to bold section titles, and a restrained semantic palette (blue for action, red for destructive, green for success, amber for pending) rationed into pill badges and filled buttons. There is no gradient, no glass, no imagery — the system communicates entirely through flat fills, 1px borders, and consistent 12px/9999px radii. It reads as an internal design-system reference: dense, left-aligned, organized by labeled subsections stacked vertically with generous section breaks.

## Composition
The page opens with a bold display title and a muted subtitle, then proceeds as a strict top-to-bottom stack of labeled component groups: Buttons → Avatars → Badges → Icon Buttons → an Accessibility notes panel at the very bottom. Each group is introduced by a small icon + bold section title, then broken into sub-rows tagged with small-caps micro-labels (PRIMARY, SECONDARY, SIZES, STANDARD). Variants are laid out in tight horizontal clusters of 3 (Default/Hover/Disabled) rather than grids — this is a spec sheet, not a marketing page, so density and left-alignment dominate over whitespace-driven hierarchy. The one deliberate choice is ending on a bordered white notes card with checkmarked accessibility rules rather than another component row — closing the page on documentation rather than more UI, which the alternative (ending on the last icon-button row) would have left feeling unfinished.

## Colors
Background is a flat #F2F2F2 (matches the ~88% pixel-field dominant), with pure #FFFFFF used sparingly for the closing notes card (~10% of pixels) — the only elevated surface on the page. Text ink is #1C1C1C for headings and default labels, #7D7D7D for secondary captions and disabled states. Accent blue #1E6FB9 is the primary action color, rationed to primary-button fills, secondary-button borders/text, tertiary text-buttons, and icon-button strokes; its hover-darkened sibling #155490 appears on the primary button's hover state and as a standalone dark-blue prominent button. Red #D64545 is reserved exclusively for destructive actions. Green (~#2E7D5B) and its pale tint #E8F5EF mark "active" success badges; amber lives in the pending badge's pale #FFF4DD tint. Borders are a uniform hairline #E6E6E6. Nothing else is colored — icons, dividers, and inactive text stay neutral gray, keeping the semantic hues legible as signals rather than decoration.

## Typography
Single-family system: Inter throughout, doing all work through weight and size rather than font-mixing. Display-lg (28px/600/1.25) sets the page title; headline-md (18px/600/1.5) marks each major section header; label-md (16px/600) titles individual components/buttons; body-md (14px/400) and a tighter body-sm (13px/400, #4A4A4A) carry descriptive and secondary text. A distinct label-caps-mono role (12px/600, uppercase, wide tracking) marks all the small subsection tags (PRIMARY, SIZES, STANDARD (CMI BLUE)) — this all-caps micro-label treatment is the closest thing to a signature typographic accent in the system.

## Layout
No visible column grid — the page is a single-column vertical ledger with left-aligned content blocks, each component group separated by a large section gap (591px measured between major bands). Within a group, sub-rows use tight horizontal clustering (flex-style, gap ~24/16/12px) rather than a card grid: three-button state rows, four-avatar size/style rows, two-column badge pairs positioned left/right (Active|Pending, Disabled|Departed) forming an implicit 2-column arrangement with ~50/50 split. The one true grid element is the closing notes card: a single full-width (100%) bordered container holding a vertical stack of checkmark + text rows, padding 24px, radius 16px. Spacing scale runs 24/16/12/8/4/2px, consistently applied as gaps between label, control, and caption.

## Components
- **Section header (repeated ×5)**: appears at the top of each group (Buttons, Avatars, Badges, Icon Buttons, Accessibility notes). Small icon (outline, blue or green) + bold headline-md title, no card container, transparent background, sits directly on page background.
- **Button — Primary** (×3 states in a row, under "PRIMARY" label): fill `#1E6FB9`, text `#FFFFFF`, radius `12px`, height `44px`, padding `0 16px`, shadow `rgba(0,0,0,0.05) 0px 1px 2px 0px`; hover state darkens to `#155490`; disabled lightens to a washed `#9CC9E5`-toned fill with reduced-contrast label.
- **Button — Secondary/outline** (×3 states in a row): transparent fill, `#1E6FB9` text, 1px `#1E6FB9` border, radius `12px`, height `44px`; hover fills with a pale blue tint; disabled fades border and text to low-contrast gray-blue.
- **Button — Tertiary (text-only)** (×3 states in a row): no fill, no border, `#1E6FB9` text, pill radius `9999px`, height `44px`; hover shows a faint neutral gray background wash; disabled fades to muted gray.
- **Button — Destructive** (×2 states): fill `#D64545`, text `#FFFFFF`, radius `12px`, height `44px`, same resting shadow as primary; disabled state washes to a soft pink.
- **Avatar family**: appears under its own section, ×4 style variants in a row (initials, image-placeholder, icon, semantic-icon) all circular, ~40px; below that a ×3 size row (32/48/64px) demonstrating scale, all filled with the same pale blue tone, initials/numeral centered in white bold text.
- **Badge — pill, semantic** (×6 across 2 label pairs, arranged in a 2-column layout: left column stacked Active/Small, right column stacked Pending/Small, then a second such pair for Disabled/Departed): pill radius `9999px`, tight padding, tiny label text; success uses green-on-mint, pending uses amber-on-cream, disabled/departed use gray-on-gray — each has a full-size and a "Small" compact sibling directly beneath it.
- **Icon button — standard** (×3 states in a row): circular hit area, blue outline icon, transparent fill, hover shows a light blue circular fill behind the icon; disabled fades icon to pale blue.
- **Icon button — semantic variants** (×3 side-by-side under NEUTRAL/ERROR/MORE labels): pencil (neutral gray), trash (red, error), ellipsis (more, neutral) — all transparent, icon-only, no visible border.
- **Icon button — touch-target size row** (×3 in a row under "ICON SIZES (44PX TARGET)"): bell icon at three visual weights (light outline, medium, bold filled-stroke) each inside a bordered square hit-box (~44px), radius ~8px, border `#E6E6E6`.
- **Notes/accessibility card**: single full-width panel, background `#FFFFFF`, radius `16px`, border `1px solid #E6E6E6`, padding `24px`; anatomy top-to-bottom: green shield icon + bold headline, then a vertical checklist of 4 rows each pairing a green checkmark glyph with body-md gray text — the page's only bordered/elevated surface and its closing element.

## Graphics & Effects
The only shadow in the system is the shallow resting elevation `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`, applied uniformly to the primary and destructive buttons to lift them barely off the flat background — no other component carries elevation. There are no gradients, no scrims, no imagery, no texture layers of any kind; the entire surface is flat color fields and hairline borders. Depth is communicated solely through this single shadow value and through the one bordered white card at the page's end.

## Motion
Interactive color changes (button/icon-button hover, border/text transitions) run on `color, background-color, border-color, text-decoration-color, fill, stroke 0.15s cubic-bezier(0.4, 0, 0.2, 1)` — a quick, standard ease-out shift with no overshoot. A secondary faster fade, `opacity 0.1s ease-in`, governs disabled-state or visibility toggles. Motion is confined to state transitions on interactive atoms; there is no scroll-triggered, staggered, or ambient animation anywhere on the page.

## Guardrails
- Do not introduce gradients, glass blur, or imagery — every surface is flat, opaque color.
- Keep radius strictly binary per family: `12px` for rectangular buttons and cards, `9999px` for pills/tertiary buttons/badges/icon-buttons — never a mid-value like 6 or 20px.
- Reserve `#D64545` exclusively for destructive actions; never use it for emphasis or brand accent.
- Keep the small-caps micro-label treatment (12px/600, wide tracking, gray) exclusive to subsection tags — do not promote it to body or heading use.
- Preserve the single 1px 2px soft shadow as the only elevation cue; do not add heavier card shadows elsewhere.
- Maintain left-aligned, single-column vertical rhythm — do not convert the button/badge rows into a symmetric multi-column card grid.
