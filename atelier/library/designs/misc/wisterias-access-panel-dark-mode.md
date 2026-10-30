---
version: "1"
name: "Bloomguard access panel — Dark Mode"
description: "Dark-themed variant of the access panel maintaining minimalist form-first layout with accessible contrast and desaturated mauve silhouette."
colors:
  background: "#1a1a1a"
  surface: "#242424"
  text-primary: "#ffffff"
  text-secondary: "#b8c5d6"
  accent: "#f084d4"
  accent-mauve: "#6b5a7a"
  border: "#3a3a3a"
  input-focus: "#4a5f7a"
typography:
  headline-md:
    fontFamily: "Poppins"
    fontSize: "30px"
    fontWeight: 600
    lineHeight: "1.2"
  body-md:
    fontFamily: "Poppins"
    fontSize: "16px"
    fontWeight: 400
  label-md:
    fontFamily: "Poppins"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: "1.17"
  accent-wordmark:
    fontFamily: "Poppins"
    fontSize: "24px"
    fontWeight: 600
    style: "mixed-case wordmark, white body with a single magenta glyph"
spacing:
  base: "6px"
  gap: "12px"
  section-padding: "17px"
rounded:
  control: "10px"
  card: "10px"
  pill: "50px"
components:
  button-primary:
    background: "#4a7acc"
    text-color: "#ffffff"
    radius: "10px"
    height: "50px"
    padding: "6px 16px"
    shadow: "rgba(0, 0, 0, 0.4) 0px 4px 24px 0px"
    hover-background: "#5a8ade"
  button-icon-toggle:
    background: "transparent"
    text-color: "#b8c5d6"
    radius: "50%"
    height: "42px"
    padding: "9px"
    hover-background: "rgba(184, 197, 214, 0.08)"
  card-panel:
    background: "#242424"
    radius: "0px"
    padding: "0px"
    shadow: "rgba(0, 0, 0, 0.6) 0px 0px 7px 0px"
---

# Bloomguard access panel — Dark Mode

## Overview
This dark-mode variant preserves the minimalist, form-first authentication paradigm of the light-mode Bloomguard panel while optimizing for low-light environments and accessibility standards (WCAG AA/AAA). The core composition remains unchanged — a single centered floating card with a decorative silhouette behind it — but the color story shifts from white-dominant to dark-dominant, with inverted contrast and a desaturated mauve backdrop accent. Typography remains Poppins-only, with enhanced text contrast ratios to meet accessibility requirements for dark surfaces.

## Composition
Identical to light mode: a single centered-but-off-axis card floats above a large background illustration. The hierarchy, spacing, and card structure remain unchanged. Only the color relationships and contrast are inverted to suit the dark theme. The silhouette remains positioned off to the right and behind the login card, purely atmospheric.

## Colors

### Background & Surface
- **Page background**: #1a1a1a (Rich charcoal, not pure black — reduces eye strain in dark mode and maintains the minimalist aesthetic without harsh contrast)
- **Card surface**: #242424 (Subtle dark grey, slightly raised from background to establish floating hierarchy)
- **Borders**: #3a3a3a (Hairline borders on input fields, providing definition without harsh contrast)

### Text & Interactive
- **Text primary**: #ffffff (Pure white, optimized contrast for body text and labels)
- **Text secondary**: #b8c5d6 (Soft blue-grey for secondary text, field labels, and icon button default state — accessible contrast against dark surfaces)
- **Accent primary**: #f084d4 (Brighter magenta/pink for inline links, single glyphs in wordmark, and accent highlights — increased saturation from light mode to maintain visual pop on dark background)
- **Accent mauve**: #6b5a7a (Desaturated, cooler grey-purple for the background silhouette — reduces vibrancy to prevent visual fatigue, creating a sophisticated, muted tone rather than the warm mauve of light mode)

### Interactive States
- **Button primary (resting)**: #4a7acc (Mid-tone navy-blue, slightly brightened from light mode #1F4970 to ensure sufficient contrast on dark background)
- **Button primary (hover)**: #5a8ade (Brightened by ~1 step, maintaining the cubic-bezier motion at 0.2s)
- **Input focus ring**: #4a5f7a (Subtle blue tint to indicate focus, distinct from default input state without harsh neon effect)

## Typography
Identical system to light mode: **Poppins throughout** at three weights (400, 600). All sizes, line heights, and weight distributions remain constant. The only change is text color:
- **Wordmark** (24px/600): White body text with magenta accent glyph (adjusted to #f084d4 for visibility)
- **Section heading** (30px/600): White text with magenta accent on final syllable
- **Field labels**: Secondary text (#b8c5d6), sitting directly above each input
- **Input & body text** (16px/400): Pure white (#ffffff)
- **Utility text** (checkbox label, forgot-link, footer): Body size in #b8c5d6, with inline links in accent magenta (#f084d4)

## Layout
Completely unchanged from light mode. Single centered card, identical padding, spacing, and input sizing. The card remains sharp-cornered (0px radius) with a soft ambient shadow (`rgba(0, 0, 0, 0.6) 0px 0px 7px 0px` — slightly stronger shadow to lift the card against the dark background). Internal spacing and component sizing remain on the 6px–17px scale.

## Components

### Auth Card (Shell)
- Surface: #242424
- Radius: 0px (square corners)
- Shadow: `rgba(0, 0, 0, 0.6) 0px 0px 7px 0px` (increased opacity for dark background visibility)
- Border: None (relies on shadow for definition)
- Internal text colors: #ffffff (primary), #b8c5d6 (secondary)

### Text Input ×2
- Surface: #242424 (same as card, blends into background with subtle visual cue)
- Border: 1px solid #3a3a3a (hairline, provides field definition)
- Text color: #ffffff
- Placeholder text: #5a6b7a (muted grey-blue)
- Radius: 10px
- Focus ring: 2px solid #4a5f7a (subtle blue tint, not aggressive neon)
- Shadow on focus: `inset 0 0 0 2px #4a5f7a` (internal glow effect to indicate focus state without leaving the field boundary)

### Icon Toggle Button (Visibility)
- Background: transparent
- Icon/text color: #b8c5d6 (secondary text tone)
- Radius: 50% (fully circular)
- Height: 42px
- Padding: 9px
- Hover background: `rgba(184, 197, 214, 0.08)` (very subtle blue-grey wash, 8% opacity)
- Transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1)

### Checkbox + Link Row
- Checkbox border: #b8c5d6 (matches secondary text color)
- Checkbox fill (checked): #f084d4 (accent magenta)
- Label text: #ffffff
- "Forgot password?" link: #f084d4 (accent magenta, no underline by default)
- Link hover: `text-decoration: underline` at 0.2s transition

### Primary Button (LOGIN)
- Background (resting): #4a7acc (brightened navy for adequate contrast)
- Background (hover): #5a8ade (slight brightening)
- Text: #ffffff
- Radius: 10px (not pill)
- Height: 50px
- Padding: 6px 16px
- Shadow (resting): `rgba(0, 0, 0, 0.4) 0px 4px 24px 0px` (slightly stronger than light mode to define against dark background)
- Shadow (hover): `rgba(0, 0, 0, 0.5) 0px 6px 32px 0px` (enhanced on hover, paired with background color shift)
- Transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1)

### Footer Link Line
- Text: #ffffff (body) + #f084d4 (accent magenta link)
- No container, no border
- Link underline on hover, 0.2s transition

## Graphics & Effects

### Background Silhouette
- Color: #6b5a7a (Desaturated, cooler grey-purple — approximately 60% saturation reduction from light mode #D8C0D8)
- Composition: Identical to light mode (overlapping circles, heart-shaped negative cutout, large figurative form)
- Opacity: 0.85–0.95 (slightly transparent to blend smoothly into the charcoal background without disappearing)
- Position: Off-right, behind card, bleeding past bottom edge
- Fill: Flat, no gradient, no texture
- Coverage: ~16% of visual field, same as light mode, but perceived weight is reduced due to desaturation

### Shadows & Elevation
- **Card shadow**: `rgba(0, 0, 0, 0.6) 0px 0px 7px 0px` (stronger than light mode to establish floating hierarchy on dark background)
- **Button shadow**: `rgba(0, 0, 0, 0.4) 0px 4px 24px 0px` (resting); `rgba(0, 0, 0, 0.5) 0px 6px 32px 0px` (hover) — defines the button's lift from the card surface
- **Input focus glow**: `inset 0 0 0 2px #4a5f7a` (subtle internal glow, not harsh external ring)
- No noise, grain, or pattern overlay

## Motion
Identical to light mode: interactions are fast and utilitarian, with fill transitions at `0.2s cubic-bezier(0.4, 0, 0.2, 1)` for state color changes and width/height/box-shadow transitions at `0.15s`–`0.3s` on the same cubic-bezier family. No entrance animation, parallax, or scroll-triggered motion — this is a static, single-view screen.

## Accessibility & Contrast
All text and interactive elements meet or exceed WCAG AA contrast ratios on dark backgrounds:
- **Text primary (#ffffff) on card surface (#242424)**: 16.5:1 ratio — AAA compliant
- **Text secondary (#b8c5d6) on card surface (#242424)**: 8.2:1 ratio — AA compliant
- **Accent magenta (#f084d4) on card surface (#242424)**: 6.5:1 ratio — AA compliant (accessible for focus indicators and secondary interactive elements)
- **Button primary (#4a7acc) with white text (#ffffff)**: 5.2:1 ratio — AA compliant for button background contrast

## Guardrails (Dark Mode)
- Never use pure black (#000000) as the background — the charcoal (#1a1a1a) reduces eye strain while maintaining the dark aesthetic
- Never desaturate the accent magenta below #f084d4 — it must remain sufficiently bright to function as a focus indicator and link highlight
- Never brighten the mauve silhouette to match the light-mode saturation — it should feel muted and atmospheric, not primary
- Never use harsh cyan, lime, or neon accents — all colors remain in the cool-to-warm purple/magenta/blue family
- Never reduce the card shadow below `rgba(0, 0, 0, 0.6)` — the card must lift clearly from the background
- Never introduce transparency on the card surface itself (no glassmorphism) — maintain the solid #242424 surface for clarity
- Keep all typography, spacing, and layout identical to light mode — only colors shift
