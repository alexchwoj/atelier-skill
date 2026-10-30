---
version: "1"
name: "Roster Ledger"
description: "Light administrative list system: near-white paneled rows on a soft-gray field, avatar-led records, semantic status pills, and quiet icon-only actions."
colors:
  background: "#F8F8F8"
  surface: "#FFFFFF"
  text-primary: "#1C1C1C"
  text-secondary: "#7D7D7D"
  text-tertiary: "#4A4A4A"
  accent: "#3C81F5"
  status-active-bg: "#E8F5EF"
  status-active-text: "#2E7D5B"
  status-pending-bg: "#FFF4DD"
  status-pending-text: "#F0A020"
  status-disabled-bg: "#F2F2F2"
  status-disabled-text: "#7D7D7D"
  status-departed-bg: "#F2F2F2"
  status-departed-text: "#7D7D7D"
  avatar-fill: "#9CC9E5"
  avatar-fill-disabled: "#BDBDBD"
  border: "#E6E6E6"
typography:
  headline-md:
    fontFamily: "ui-sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: "1.5"
    letterSpacing: "0.7px"
  label-md:
    fontFamily: "ui-sans-serif"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: "1.25"
  body-md:
    fontFamily: "ui-sans-serif"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: "1.4"
  accent-eyebrow:
    fontFamily: "ui-sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: "1.5"
    letterSpacing: "0.7px"
    textTransform: "uppercase"
spacing:
  base: "4px"
  gap: "12px"
  card-padding: "16px"
  row-gap: "16px"
  section-padding: "56px"
  inner-gap: "34px"
rounded:
  control: "12px"
  card: "12px"
  pill: "9999px"
  avatar: "9999px"
components:
  button-icon-ghost:
    background: "transparent"
    text-color: "#7D7D7D"
    radius: "0px"
    height: "44px"
    padding: "0px"
    border: "none"
  button-icon-accent:
    background: "transparent"
    text-color: "#3C81F5"
    radius: "0px"
    height: "44px"
    padding: "0px"
    border: "none"
  card-record-row:
    background: "#FFFFFF"
    radius: "12px"
    padding: "16px"
    shadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
    border: "none"
  pill-status-active:
    background: "#E8F5EF"
    text-color: "#2E7D5B"
    radius: "9999px"
    height: "24px"
    padding: "4px 12px"
  pill-status-pending:
    background: "#FFF4DD"
    text-color: "#F0A020"
    radius: "9999px"
    height: "24px"
    padding: "4px 12px"
  pill-status-neutral:
    background: "#F2F2F2"
    text-color: "#7D7D7D"
    radius: "9999px"
    height: "24px"
    padding: "4px 12px"
---
# Roster Ledger
Source: https://p.superdesign.dev/draft/792afc4f-ed45-42bd-b93c-38f2ba463559

## Overview
This is a clean, light, data-utility list system — closer to Swiss-rational admin UI than any marketing aesthetic. It has no hero, no gradient, no imagery; its entire visual identity rests on flat white record rows floating on a barely-differentiated gray field, each row identified by a circular avatar tint, a two-line text stack, and a single semantic status pill at the far edge. The design language is minimalism applied to operational density: no borders, no dividers, elevation carried entirely by a 1px near-invisible shadow, color reserved almost exclusively for state communication.

## Composition
The page opens with a small all-caps eyebrow label anchored top-left, then falls straight into a single-column stack of six record rows, each full-width and evenly spaced. There is no grid branching, no card variety beyond state — the rhythm is purely vertical repetition: avatar-and-text cluster on the left, status pill plus a trio of icon actions on the right, on every row. Density is high (deliberately tight vertical spacing) rather than airy, because the artifact being modeled is a roster/ledger, not a showcase. The deliberate choice is uniform row height and consistent right-edge action geometry across every state (active, pending, disabled, departed, and a dimmed/inactive variant) rather than varying each row's layout by its status — the alternative (customizing layout per status) is rejected in favor of one strict template where only color and label change.

## Colors
Background is a soft neutral gray (`#F8F8F8`, ~52% of pixels) with the record cards sitting on pure white (`#FFFFFF`, ~47–82% depending on measurement scope) — the contrast between these two near-white values is what separates "page" from "surface" since there is no border to do that work. Text ink is near-black (`#1C1C1C`) for names, mid-gray (`#7D7D7D`) for role/secondary labels, and a slightly warmer gray (`#4A4A4A`) for tertiary metadata. The avatar fill is a soft desaturated sky blue (`#9CC9E5`), rationed to a small 44px-ish circle per row — the only saturated color besides status pills. Status pills carry all semantic meaning: mint-green pair (`#E8F5EF` bg / `#2E7D5B` text) for active, warm cream/amber pair (`#FFF4DD` bg / `#F0A020` text) for pending, and flat neutral-gray pairs (`#F2F2F2` bg / `#7D7D7D` text) for disabled and departed — same neutral treatment for both inactive states, differentiated only by label text. A thin border gray (`#E6E6E6`) is available for hairline separation but the design leans on shadow, not border, for card definition. The accent blue (`--tw-ring-color: #3C81F5`) appears only as an icon tint on the "view" action and as a focus-ring token — never as a fill.

## Typography
Single-family system: ui-sans-serif throughout, no serif or mono accent present. Hierarchy is built by weight and size, not family: the record name sits at 18px/600 (the heaviest, largest element on the row), role and diocese lines drop to smaller secondary weight in the gray inks, and the all-caps section eyebrow uses a compact 14px/600 with 0.7px tracking to stay quiet and structural above the list. Status pill labels are small, medium-weight, and centered within their pill — legible but deliberately subordinate to the name.

## Layout
This is a list layout, not a card grid: one column, full-width rows (100% of container width each, confirmed row map [100 | 100 | 100 | 100 | 100]), each row an independent 12px-radius white panel. Vertical rhythm between rows is a consistent gap (roughly 16px), internal card padding 16px, with a base spacing unit of 4px scaling up through 12/16/24/34/56px for larger structural gaps. There is no responsive column collapse implied — the pattern is built to hold at any width by simply keeping the row full-bleed within its container and letting the right-hand action cluster stay pinned.

## Components
- **List record row (card family)** — appears once per roster entry, stacked ×6 vertically, one per person. Surface: `#FFFFFF` background, `12px` radius, `16px` padding, shadow `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`, no border. Inside, left-to-right: a 9999px-radius avatar circle (`#9CC9E5` fill, white glyph icon; disabled-state row swaps this to `#BDBDBD`) sized roughly 44px; beside it a three-line text stack — bold name (18px/600, `#1C1C1C`), role label (`#7D7D7D`), sub-organization label (`#7D7D7D`, smallest). On the far right: a status pill, then a trio of icon-only actions.
- **Status pill** — one per row, right-aligned before the action icons. Full pill radius `9999px`, small fixed height (~24px), horizontal padding ~12px. Four color variants: active (mint `#E8F5EF`/`#2E7D5B`), pending (cream `#FFF4DD`/`#F0A020`), disabled (neutral `#F2F2F2`/`#7D7D7D`), departed (neutral `#F2F2F2`/`#7D7D7D`). Label only, no icon.
- **Icon action group** — appears at the far right of every row, ×3 icons per row (view/eye, edit/pencil, more/ellipsis). Surface: transparent, `0px` radius, `44px` tap height, `0px` padding, no border, no fill — pure icon-on-white. Text/icon color `#7D7D7D` for edit and more; the eye/view icon carries the accent blue `#3C81F5` tint, marking it as the primary quick-action per row. On the fully dimmed/inactive last row, all three icons desaturate toward a faint gray, signaling non-interactive state.
- **Avatar glyph** — one per row, circular, `9999px` radius, flat tint fill with a simple white person-outline glyph centered; one variant swaps the glyph to a person-with-x icon to signal a disabled account state, and the dimmed row swaps the fill to muted gray.
- **Section eyebrow label** — one instance, top-left of the list, all-caps, small, tracked-out gray text (`#7D7D7D`-family), purely structural — labels the list block, not a component with variants.

## Graphics & Effects
The only rendered effect is a single soft drop shadow on each record row: `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px` — a near-imperceptible 1px elevation cue that lifts the white row a hair off the gray page without any visible border or outline. There are no gradients, no scrims, no imagery, no texture/grain/noise layers anywhere in this system — the entire visual weight is carried by flat fills, pill color-coding, and this one shadow token repeated identically across every row and, presumably, every card-style component in the broader system.

## Motion
Motion is minimal and utilitarian: a single transition token, `opacity 0.1s ease-in`, governing state changes (icon hover/press feedback, row-to-dimmed transitions). No spring, no stagger, no scroll-triggered choreography — consistent with an admin/operational surface where speed and clarity outrank expressive motion.

## Guardrails
- Never introduce a background gradient, mesh, or hero treatment — this system has no hero and must stay flat gray/white throughout.
- Never give status pills anything but the four defined neutral/mint/amber pairings — do not invent new semantic hues.
- Never add visible borders to the record row cards — elevation comes only from the `rgba(0,0,0,0.05) 0px 1px 2px 0px` shadow.
- Never turn the icon action row into filled/bordered buttons — they must stay `0px` radius, transparent, icon-only.
- Never vary row layout per status — every record row (active, pending, disabled, departed, dimmed) shares the identical template; only color/label/icon glyph changes.
- Never substitute a serif or mono face — the entire type system is ui-sans-serif differentiated by weight and size only.
