---
version: "1"
name: "Clerical Ledger Forms"
description: "A near-white administrative form system built on flat panels, single-pixel dividers, and one rationed institutional blue for links, focus, and primary actions."
colors:
  background: "#F8F8F8"
  surface: "#FFFFFF"
  text-primary: "#1C1C1C"
  text-secondary: "#7D7D7D"
  text-tertiary: "#4A4A4A"
  accent: "#1E6FB9"
  danger: "#D64545"
  border: "#E6E6E6"
typography:
  display-lg:
    fontFamily: "Inter"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: "1.5"
  headline-md:
    fontFamily: "Inter"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: "1.5"
  body-md:
    fontFamily: "Inter"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "1.5"
  body-default:
    fontFamily: "Inter"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.5"
  label-mono:
    fontFamily: "ui-sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: "1.4"
spacing:
  base: "4px"
  gap: "10px"
  field-gap: "24px"
  section-gap: "327px"
rounded:
  control: "6px"
  card: "8px"
  input: "12px"
  pill: "9999px"
components:
  button-primary:
    background: "#1E6FB9"
    text-color: "#FFFFFF"
    radius: "6px"
    height: "32px"
    padding: "0px"
  button-ghost:
    background: "transparent"
    text-color: "#7D7D7D"
    radius: "6px"
    height: "32px"
    padding: "0px"
  button-link:
    background: "transparent"
    text-color: "#1E6FB9"
    radius: "0px"
    height: "35px"
    padding: "0px"
  button-tab:
    background: "transparent"
    text-color: "#7D7D7D"
    radius: "0px"
    height: "44px"
    padding: "0px"
  input-field:
    background: "#FFFFFF"
    border: "1px solid #E6E6E6"
    radius: "12px"
    focus-ring: "rgba(30, 111, 185, 0.1) 0px 0px 0px 4px"
  input-field-error:
    background: "#FFFFFF"
    border: "1px solid #D64545"
    radius: "12px"
  card-panel:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  navbar:
    background: "#FFFFFF"
    radius: "0px 0px 0px 0px"
    height: "130px"
---
# Clerical Ledger Forms
Source: https://p.superdesign.dev/draft/767e8ab1-5326-4767-96a0-a67dfe4a5c89

## Overview
This is a flat, light-mode-default administrative UI in the Swiss/utility tradition: near-white surfaces, hairline dividers, and Inter as the sole workhorse family across headings, body, and labels. There is no shadow language beyond a soft focus halo and a near-invisible resting shadow — depth is communicated by section rules and whitespace, not elevation. One institutional blue is rationed to interactive and structural moments (focus rings, links, primary buttons, active tabs); everything else sits in a tight grayscale ramp from near-black to mid-gray. The overall character is dense, forms-first, and clerical — closer to a records/back-office console than a marketing surface.

## Composition
The page opens with a plain masthead: a bold title over a smaller gray subtitle, left-aligned, sitting above a full-width hairline rule — no hero imagery, no color wash. Below the rule, content organizes into labeled panels introduced by a small icon + bold section title pair ("Input Fields", "Search Bars" as section markers in role, not verbatim). Each panel stacks form fields vertically at generous ~24px gaps: label, control, and optional helper/error text directly beneath. Fields run full-width within a max-width column rather than sitting in a multi-column grid — this is a single-track, top-to-bottom rhythm, not a card grid. The deliberate choice here is single-column linear stacking over a two-column form grid: it trades density for scanability and unambiguous tab order, at the cost of vertical length. A bottom tab bar (icons + labels, 4 items) is pinned as the persistent navigation shell, confirming this is an app-shell pattern, not a scrolling marketing page.

## Colors
Background reads overwhelmingly light-neutral: the pixel field is dominated by #F0F0F0-class grays (~58%) and white (~36%), matching the declared #F8F8F8 page background and #FFFFFF panel/input surfaces — this is a bright, flat, near-white system, not dark-mode. Text ink is a three-step grayscale: #1C1C1C for primary labels and headings, #4A4A4A for default body copy, #7D7D7D for secondary/placeholder/ghost-button text. #1E6FB9 is the single accent — used at low area (~1.4% declared) but high signal: primary button fill, link-style buttons, active-tab text, and the `rgba(30, 111, 185, 0.1)` focus ring. #D64545 is reserved strictly for error states (border + message). Borders are a near-white #E6E6E6 hairline. Large stretches of the canvas — the masthead, the panel backgrounds, inter-field whitespace — are deliberately left uncolored to keep the blue legible as an action signal rather than a decoration.

## Typography
Single-family system: Inter throughout, with ui-sans-serif as the fallback/label face. Hierarchy is built by weight and size, not by mixing families: display-lg (24px/600) for the page title, headline-md (18px/600) for section titles, body-default (14px/400, #4A4A4A) for the bulk of running/helper text, and body-md (12px/400) for the tightest captions and field hints. Labels above inputs are small, bold, and dark (#1C1C1C-toned), sitting directly above their control with minimal gap — a label-mono role at 12px/500 covers this identifier text. Line-height holds at a relaxed 1.5 across every scale, giving the dense form stack air despite the small sizes.

## Layout
This is a linear stack layout, not a grid: a single content column (implicitly max-width, centered under the masthead) holding full-width panels at rows of [98% | 98% | 98%] — i.e., near-full-bleed sections stacked one per row, each spanning almost the entire container with a small residual gutter. Spacing units observed are small and form-tuned: 4px and 6px for tight internal gaps, 10px for icon-to-label spacing, 24px between fields, and a large 327px gap marking section-to-section breathing room. Radii step from 6px (buttons) to 12px (inputs) to 8px (generic cards), with 9999px reserved for pill-shaped controls elsewhere in the system. The layout is static and non-responsive in evidence — one column, one width, no breakpoint behavior shown.

## Components
- **Navbar**: edge-to-edge (100% viewport width, 0px inset both sides), square-cornered bar (TL/TR/BR/BL all 0px), 130px tall, flat #FFFFFF fill, static, 0 nav items visible — a pure header band, not a nav rail. Bottom tab bar (separate from top navbar) carries 4 icon+label items (roles: Home, Members, Messages with a red notification dot, Settings), plain white background, active item marked in the accent-adjacent dark tone, inactive items in #7D7D7D.
- **Button — primary**: fill `#1E6FB9`, text `#FFFFFF`, radius `6px` (slightly-rounded), height `32px`, zero internal padding recorded — used for the main affirmative action near page-end content, the highest-contrast control in the system.
- **Button — ghost/secondary**: transparent fill, text `#7D7D7D`, radius `6px`, height `32px` — used adjacent to the primary button as a lower-emphasis alternative.
- **Button — link-style**: transparent fill, text `#1E6FB9`, radius `0px` (sharp), height `35px` — reads as an inline text-action, not a boxed control.
- **Button — tab/utility**: transparent fill, text `#7D7D7D`, radius `0px`, height `44px` — the top-of-page utility pair, larger touch target, sharp corners, no fill (present but not the hero action here since this is a forms console, not a marketing hero).
- **Input field**: white `#FFFFFF` fill, `1px solid #E6E6E6` border, radius `12px` (rounded), label sits above in bold dark text, placeholder in `#7D7D7D`. Focus state applies `rgba(30, 111, 185, 0.1) 0px 0px 0px 4px` — a soft blue halo, no color change to border. Helper text below in `body-md` gray. Disabled/read-only field (Employee ID role) shows muted placeholder-style text on the same white surface with reduced visual weight.
- **Input field — error**: same white fill and `12px` radius, border swaps to `#D64545`, with an error message in `#D64545` directly beneath — no icon, text-only signal.
- **Search bar**: full-width field with a leading magnifier icon, white fill, `12px` radius, placeholder text in `#7D7D7D`; a secondary/active search instance shows entered text plus a trailing clear (×) icon and the same focus halo treatment when engaged.
- **Panel / section group**: transparent background, `0px` radius, `0px` padding — really a content band delimited by a small leading icon + bold headline pair and the vertical rhythm of its children rather than by a drawn card boundary; rows run near-full-width at ~98% of the container, stacked one below the next (rows [98 | 98 | 98]) — a uniform single-column stack, not a bento or card grid.
- **Resting shadow** (applies to inputs/panels at rest): `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px` — a barely-perceptible base shadow, essentially flat.
- **Footer**: white `#FFFFFF` background, 4 links, no additional graphic treatment.

## Graphics & Effects
No gradients, no mesh backgrounds, no imagery, no noise/grain, no video or canvas surfaces appear anywhere in this system — it is a flat-fill, photo-free administrative interface. The only two visual-effect tokens present are: the focus ring `rgba(30, 111, 185, 0.1) 0px 0px 0px 4px` (a soft 4px blue halo applied on input/control focus) and the near-invisible resting shadow `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px` applied to give inputs and panels the barest lift off the page. Elevation throughout is otherwise communicated by hairline borders (`#E6E6E6`) and whitespace, not by shadow depth or blur.

## Motion
Two transition tokens govern all interactivity: a general-purpose `all 0.15s cubic-bezier(0.4, 0, 0.2, 1)` for state changes (focus rings appearing, border-color swaps on error/valid, button fills on hover/press) — fast, snappy, no overshoot — and a faster `opacity 0.1s ease-in` reserved for simple fade transitions (helper text appearing, icon toggles like the password visibility eye). There is no spring/overshoot, no stagger, and no scroll-triggered motion in evidence; every interaction is a near-instant, linear-feeling micro-transition consistent with a dense data-entry tool where speed matters more than delight.

## Guardrails
- Never introduce shadow-heavy elevation, glassmorphism, or gradients — this system is flat and matte throughout.
- Keep #1E6FB9 rationed to interactive/structural roles (links, primary fill, focus ring, active tab); do not tint backgrounds or large surfaces with it.
- Do not convert the single-column field stack into a multi-column or card-grid layout — vertical linear stacking is the deliberate pattern.
- Preserve the navbar as an edge-to-edge, perfectly square-cornered white band — do not add rounding, insetting, or centering.
- Keep the grayscale text ramp (#1C1C1C / #4A4A4A / #7D7D7D) distinct by role; don't substitute pure black or collapse the three tones into one gray.
- Motion stays fast and linear-feeling (~100–150ms); do not add spring/bounce easing anywhere.
