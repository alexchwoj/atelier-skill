---
version: "1"
name: "Voidframe console"
description: "A near-black auth surface with a single elevated dark panel, terse all-caps micro-labels, and one rationed cobalt-blue action fill against an otherwise achromatic system."
colors:
  background: "#000000"
  surface: "#1A1A1A"
  surface-alt: "#111111"
  text-primary: "#FFFFFF"
  text-secondary: "#888888"
  accent: "#3B82F6"
  border-default: "#333333"
  border-focus: "#3B82F6"
typography:
  display-lg:
    fontFamily: "-apple-system"
    fontSize: "22px"
    fontWeight: 700
  body-md:
    fontFamily: "-apple-system"
    fontSize: "13px"
    fontWeight: 400
  body-base:
    fontFamily: "-apple-system"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
  label-mono:
    fontFamily: "Arial"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "1.2"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "40px"
  field-gap: "30px"
  micro-gap: "6px"
rounded:
  control: "8px"
  card: "16px"
  pill: "16px"
components:
  button-primary:
    background: "#3B82F6"
    text-color: "#FFFFFF"
    radius: "8px"
    height: "40px"
    padding: "12px"
    hover-background: "#2563EB"
  input-field:
    background: "#111111"
    radius: "8px"
    height: "40px"
    padding: "12px"
    border: "1px solid #333333"
    border-focus: "1px solid #3B82F6"
    text-color: "#E0E0E0"
  panel-card:
    background: "#1A1A1A"
    radius: "16px"
    padding: "40px"
    border: "none"
---
# Voidframe console
Source: https://brightplayground.my.id/dashboard

## Overview
This is a minimalist, dark-mode-default utility screen — a single-purpose authentication console rendered as one elevated panel floating on a void-black page. The aesthetic borrows from Swiss/International restraint (strict vertical stack, all-caps micro-labels, no ornament) filtered through a modern dark SaaS console idiom: flat fills, an 8px corner language, and exactly one saturated hue reserved for the single actionable moment. There is no gradient wash, no illustration, no texture — the entire visual weight rests on value contrast between near-black page, dark-gray panel, and one cobalt-blue fill.

## Composition
The page is essentially empty except for one centered panel occupying a small fraction of the viewport, vertically upper-middle rather than true center — deliberately leaving the majority of the frame as inert black space above, below, and around it. Inside the panel the hierarchy runs strictly top-to-bottom: a bold title, a muted subtitle directly beneath it, then two stacked labeled input fields, then one full-width filled button as the terminus. There is no secondary section, no scroll, no rhythm to speak of beyond this single vertical stack — density is intentionally low. The deliberate choice is isolation: one small card adrift in a black field, rejecting the alternative of a full-bleed split-screen or a bordered, edge-anchored login treatment. This maximizes focus on the single task and reinforces a console/tool identity over a marketing one.

## Colors
The page background is flat `#000000`, confirmed by the pixel field's ~94% black dominance — this is the true canvas, not a declared-area gray. The panel surface is `#1A1A1A` (measured at ~79% declared area, the dominant UI-chrome value), with a slightly darker inset tone of `#111111` (~14%) used for the input fields themselves, creating a subtle two-step elevation: page < panel < field-recess (field reads darker/recessed, panel reads as the raised card). Primary text is white (`#FFFFFF`) for the title; secondary/label text drops to `#888888` and `#E0E0E0` for muted subtitle and field values. The single accent, `#3B82F6` (~6.7% of declared area), is rationed to exactly two places: the focused input's border ring and the primary button fill — nothing else on the page carries color. Borders are hairline `#333333` on rest-state inputs, swapping to the accent blue on focus. No warm, no success, no danger tone appears; error states, if present elsewhere in this system, would need to borrow the `#7F1D1D` border candidate, but it is unused on this screen.

## Typography
Two sizes carry the whole hierarchy: a 22px/700 weight `-apple-system` display for the title, and 13px/400 for the subtitle and all-caps field labels — the labels are visually distinguished by uppercase casing and wide implied tracking rather than a size jump, a classic Swiss-derived label convention. Field values and button text sit at 16px/400 and the button label likely bumps to a semibold weight for emphasis. No serif or accent italic exists in this composition; Times New Roman is available in the family stack but not visibly deployed anywhere seen. The system leans on `-apple-system` for everything functional, keeping the type voice purely utilitarian.

## Layout
This is a single-column, fixed-width bounded-card layout — not a grid system in the traditional sense, but a vertically stacked flex column within one panel, centered on the page both horizontally and (roughly) vertically-upper. The card itself uses 40px outer padding, 30px gaps between field groups, 16px between label and its input, and 6px micro-spacing for label-to-field pairs. Corner radius is 16px on the outer panel and 8px on every interior control (inputs, button) — a consistent two-tier radius scale. There is no responsive grid of cards visible; the two "card" measurements in evidence (100% | 100% width, 0 radius, 0 padding, transparent fill) describe the two full-width input rows stacked inside the panel, not a multi-card grid — confirming the field-stack reads as two full-bleed rows rather than a bento or masonry composition.

## Components
- **Auth panel (card)** — appears once, centered upper-middle on the page. Surface: `#1A1A1A` fill, `16px` radius, `40px` padding, no visible border or shadow beyond the value-contrast against black. Inside, top to bottom: bold 22px white title, 13px muted `#888888` subtitle directly below, a labeled username field, a labeled password field, and a full-width primary button at the base — no media, no icon, no footer link visible.
- **Input field ×2 (username, password)** — appear stacked inside the panel, one per row, each spanning the full panel width (100% | 100%, confirming a two-row full-bleed stack, not a side-by-side pair). Surface: `#111111` fill, `8px` radius, `12px` padding, `1px solid #333333` border at rest. The username field is shown in its **focused** state with an accent `1px solid #3B82F6` border — establishing focus-ring behavior for the family. Each field is preceded by an uppercase `#888888` micro-label (13px) sitting 6px above it.
- **Button — primary (filled)** — appears once, at the base of the panel, full width. Fill `#3B82F6`, text `#FFFFFF`, radius `8px` (slightly-rounded, not pill), height `40px`, `12px` padding. Hover state darkens fill to `#2563EB`. This is the only saturated, filled control on the page and the clear terminal action of the stack.

## Graphics & Effects
There are no gradients, no scrims, no imagery, and no textures anywhere in this composition — the entire visual system is flat color fields separated by value contrast alone. Elevation is communicated purely through a single step of lightness (black page → `#1A1A1A` panel → `#111111` recessed fields) with no drop shadow evident; the panel appears to float by contrast rather than by cast shadow. This absence of noise, grain, or gradient texture is itself the signature: a stripped, chrome-free utility surface.

## Motion
No animation or transition values are present in the evidence; the only implied motion is a standard state-swap on input focus (border color shift from `#333333` to `#3B82F6`) and a hover fill-darken on the button (`#3B82F6` → `#2563EB`). Treat both as instantaneous or near-instant (~100–150ms ease-out) color transitions consistent with a minimal utility console — no spring, no stagger, no scroll-triggered behavior belongs in this system.

## Guardrails
- Never introduce a second hue — cobalt blue `#3B82F6` is the only accent and must stay rationed to focus rings and the primary button only.
- Never fill the page background with gray or gradient — the canvas is flat `#000000`; the `#1A1A1A`/`#111111` tones belong only to the panel and its fields.
- Never round the button or inputs past `8px` — this system's control radius is slightly-rounded, not pill, and must stay visually sharper than the panel's `16px` card radius.
- Never add shadows, gradients, textures, or imagery — elevation here is conveyed by flat value-contrast alone.
- Never widen the composition into a multi-column or split-screen layout — the identity depends on one small isolated card adrift in black space.
