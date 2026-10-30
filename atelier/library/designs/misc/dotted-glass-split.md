---
version: "1"
name: "Dotted Glass Split"
description: "A white split-screen auth system: a dot-grid marketing panel with a rationed cyan-blue glow bleeding from the bottom corner, opposite a clean form panel anchored by a single primary-blue pill button."
colors:
  background: "#FFFFFF"
  surface: "#F7F9FC"
  text-primary: "#000000"
  text-secondary: "#606266"
  text-muted: "#A1A1AF"
  accent: "#377DFF"
  accent-hover: "#73A4FF"
  accent-tint-7: "#C3D8FF"
  accent-tint-8: "#D7E5FF"
  accent-tint-9: "#EBF2FF"
  border: "#E3E8EE"
typography:
  display-lg:
    fontFamily: "ui-sans-serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: "1.5"
  body-md:
    fontFamily: "ui-sans-serif"
    fontSize: "18px"
    fontWeight: 300
    lineHeight: "1.8"
  label-md:
    fontFamily: "ui-sans-serif"
    fontSize: "36px"
    fontWeight: 600
    lineHeight: "1.11"
  body-fine:
    fontFamily: "ui-sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.5"
    color: "#808093"
  accent-captcha:
    fontFamily: "Comic Sans MS"
    fontSize: "18px"
    fontWeight: 700
    note: "multicolor distorted glyphs, one per character, decorative only"
spacing:
  base: "8px"
  gap: "18px"
  tight: "5px"
  loose: "26px"
  section-padding: "120px"
rounded:
  control: "8px"
  button-primary: "5px"
  pill: "8px"
components:
  button-primary:
    background: "#377DFF"
    text-color: "#FFFFFF"
    radius: "4.66667px"
    height: "40px"
    padding: "8px 15px"
    border: "1px solid rgb(55, 125, 255)"
    hover-background: "#73A4FF"
  button-secondary-outline:
    background: "#FFFFFF"
    text-color: "#A1A1AF"
    radius: "8px"
    height: "40px"
    padding: "0px"
    border: "1px solid rgb(227, 232, 238)"
  input-field:
    background: "#FFFFFF"
    radius: "8px"
    border: "1px solid #E3E8EE"
    shadow: "rgb(227, 232, 238) 0px 0px 0px 1px inset"
    height: "40px"
  card-captcha:
    background: "#F7F9FC"
    radius: "4px"
    border: "1px solid #E3E8EE"
---
# Dotted Glass Split
Source: https://www.app.artd.pro/

## Overview
This is a light-mode, structured-minimalist authentication screen built on Element-Plus-derived tokens (`--el-color-primary: #377DFF`) — a corporate SaaS idiom, not a marketing aesthetic. The system is fundamentally two-toned: near-total white/off-white field punctuated by exactly one saturated brand blue, rationed to controls, links, and a single soft radial glow. The dot-grid overlay covering the left panel is the system's quiet signature — a printed-circuit / graph-paper texture that keeps an otherwise empty panel from feeling unfinished, while a diffuse blue-cyan bloom pools in the bottom-left corner as the only chromatic event in the entire composition besides the button.

## Composition
The page is a fixed two-column split, roughly 65/35, with no scroll. The left column is a quiet brand/marketing panel: a small mark + wordmark top-left, then a large vertical gap, then a stacked text block sitting in the lower-middle third — an uppercase eyebrow, a two-weight headline (regular lead-in + bold product name), a supporting sentence, and a three-dot carousel indicator. The right column is the functional form panel, vertically centered: a greeting headline, a subheading, two stacked text inputs, a split row (captcha input + captcha image), a checkbox-and-link utility row, a full-width primary button, and a final signup link — all constrained to a narrow ~360px form column. The deliberate choice is asymmetric emptiness: the left panel is 90% negative space animated only by texture and glow, rejecting the alternative of filling it with illustration or screenshots — this keeps all functional weight and all color-saturation weight on the right.

## Colors
White (#FFFFFF) and near-white (#F7F9FC) together account for essentially the entire pixel field (~89%+ measured white, plus faint violet/cyan-tinted whites at 1-5% each from the corner glow and dot texture) — this is a white-dominant system, not a tinted one. Primary blue #377DFF is the sole saturated hue: it fires the button fill, the button border, the input focus/active accents, the checkbox fill, and both text links (record-password link, signup link), and nothing else — true color rationing to under 1% of area. Ink is pure black (#000000) for headline text, stepping down to #606266 for secondary labels and #A1A1AF for placeholder/muted text and the outline-button's label. Borders run a single hairline gray, #E3E8EE. The blue-tint scale (#73A4FF, #9BBEFF, #C3D8FF, #D7E5FF, #EBF2FF) exists for hover and tint states even though only the boldest step (#73A4FF, the hover state) and the base are visibly used here. The captcha image is deliberately the one exception, injecting uncontrolled multicolor glyphs against the system's monochrome discipline.

## Typography
All faces are ui-sans-serif except the decorative captcha glyphs, which render in Comic Sans MS for a jittery, distorted, non-brand texture — the system's only display outlier. Hierarchy is built by weight and size jumps rather than color: the greeting headline sits at the label-md token (36px/600, lh 1.11) in pure black; the marketing headline on the left mixes a lighter regular weight for the lead-in with a bold weight on the product name in one continuous line, sized near display scale. Body copy under both headlines drops to a light 300-weight at 18px/1.8 line-height (body-md) in muted gray, giving generous, airy reading lines against the dot texture. Form labels/placeholders and fine print use the smallest register, ~14px regular at #808093, with links picking up primary blue and no underline until interaction.

## Layout
No column grid governs the page — it is a two-pane flex split at the viewport level, left pane unbounded/fluid, right pane a fixed narrow content column capped near 640px max-width, further constrained internally to a ~360px form measure. Spacing follows an 8px-rooted scale visible in the evidence (5px, 8px, 10px, 18px, 26px, 120px): tight 5-8px gaps between stacked form fields, an 18px rhythm between grouped elements, and a large 120px-class gap separating the wordmark from the marketing text block. Card/control radii stay small and structural — 8px for inputs and the outline button, a tighter 4.66667px for the primary pill-adjacent button — signaling a dense, enterprise-console corner language rather than a soft consumer one. The layout is not responsive-card-grid based; it is a single fixed split-screen composition with no repeating card families.

## Components
- **Brand mark (top-left, left panel)**: a small triangular/mountain glyph in gradient blue beside the wordmark in black medium-weight sans, ~20px, sitting alone at the top with no nav links beside it — this is a logo lockup, not a navbar.
- **Utility controls (top-right, floating)**: two small icon-only controls (a language/locale glyph and a theme/moon toggle), unbounded, no visible container, plain dark-gray glyphs — utility affordances, not buttons in the primary/secondary sense.
- **Marketing text block (left panel, lower-middle)**: no card container, sits directly on the dotted background. Top to bottom: an uppercase tracked-out eyebrow label in primary blue, a two-weight headline directly below, a single muted body sentence, then a three-segment carousel/progress indicator (one filled blue bar + two short gray bars) as the block's only interactive-looking element.
- **Form panel (right side, single instance)**: no visible card border or shadow separates it from the white background — it reads as a borderless content column, not a boxed card. Top to bottom: black bold greeting headline, muted gray subheading, username input, password input (with a trailing show/hide glyph), a two-part row pairing a captcha input with a captcha-image control, a checkbox+label paired with a right-aligned blue text link, the primary button, and a final centered caption with an embedded blue link.
- **Text input**: white fill, 8px radius, 1px solid #E3E8EE border reinforced by an inset shadow (`rgb(227, 232, 238) 0px 0px 0px 1px inset`), 40px height, muted placeholder text — used identically for username, password, and captcha fields.
- **Captcha image control**: a small fixed-width rectangle beside the captcha input, off-white fill (#F7F9FC-class), thin border, displaying four distorted multicolor Comic-Sans-style glyphs — a refresh-on-click affordance implied by its bounded, button-like framing.
- **Checkbox + link row**: a small filled blue checkbox (checked state) paired with a blue text label on the left, a plain blue text link right-aligned on the same baseline — no button chrome, text-only interactive elements.
- **Primary button (hero primary, this screen's single most emphasized control)**: solid fill #377DFF, white text, height 40px, padding `8px 15px`, radius 4.66667px (a slightly-rounded rectangle, not a pill), border 1px solid rgb(55,125,255), full-width within the form column; hover shifts fill to #73A4FF. This is the definitive primary action of the page.
- **Secondary/outline button**: white fill, #A1A1AF text, height 40px, zero internal padding, radius 8px (more rounded than the primary), 1px solid #E3E8EE border — a lower-emphasis utility variant; not present as a visible labeled control in this screen's button set beyond its measured token, reserved for secondary actions elsewhere in the product shell.
- **Footer caption link**: plain inline text row beneath the button, muted gray statement ending in a blue link — no container, smallest type register on the page.

## Graphics & Effects
The left panel carries a fine dot-grid pattern built from two repeating linear gradients, `linear-gradient(to right, rgba(0, 93, 170, 0.14) 0.75px, rgba(0, 0, 0, 0) 0.75px)` and `linear-gradient(rgba(0, 93, 170, 0.14) 0.75px, rgba(0, 0, 0, 0) 0.75px)`, tiled to form a faint blue-gray grid of points across roughly the entire left two-thirds of the page — a graph-paper texture, not a full gradient wash. Layered beneath/over this grid in the bottom-left corner only (roughly the lower quarter of the left panel) sits a soft radial bloom blending cyan into blue, the page's single atmospheric color event, fading to transparent well before reaching the vertical divide. A faint violet-white diagonal wash also touches the divide between panels. Inputs carry a subtle inset ring (`rgb(227, 232, 238) 0px 0px 0px 1px inset`) rather than a drop shadow, keeping the form flat; a general soft shadow (`rgba(0, 0, 0, 0.12) 0px 0px 12px 0px`) is reserved for floating/popover-class elements. No photographic imagery, video, or canvas surfaces appear — every visual is CSS gradient, SVG glyph, or flat color.

## Motion
Interactions are transition-based, not keyframe-driven for this screen: button and input state changes (hover, focus, active) animate via `box-shadow 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)` and `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)` for color/background/border shifts, giving a smooth, slightly decelerated 200-300ms settle rather than a snap. A broader `color, background-color, border-color, outline-color, ... 0.3s cubic-bezier(0.4, 0, 0.2, 1)` transition governs link and text-color state changes system-wide. Named keyframes present in the underlying framework (`rotating`, `loading-rotate`, `loading-dash`, `v-modal-in`, `v-modal-out`, `dialog-fade-in`) belong to loading spinners and modal/dialog enter-exit choreography used elsewhere in the product shell, not visible on this static login screen — modals fade/scale in, spinners rotate continuously at loading state.

## Guardrails
- Never let the left-panel glow expand past its bottom-left corner into a full-bleed gradient hero — it is a rationed, localized bloom only.
- Never recolor the outline/secondary button to blue or give it the primary's radius — it stays white-filled, gray-text, 8px radius, distinct from the 4.66667px primary.
- Never replace the dot-grid texture with a solid or heavily saturated background — it must stay a faint, sparse point pattern at low opacity.
- Never apply drop shadows to form inputs — they use inset hairline rings only.
- Keep brand blue confined to controls, links, and the checkbox — do not tint body text, headlines, or backgrounds with it.
- Preserve Comic Sans as the captcha-only exception; never extend it to any other label, heading, or body text.
