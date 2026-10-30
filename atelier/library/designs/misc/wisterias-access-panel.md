---
version: "1"
name: "Bloomguard access panel"
description: "White-field auth screen with a floating bounded card, a single large mauve figurative silhouette rationed to the right two-thirds, and a deep navy solid primary control."
colors:
  background: "#FFFFFF"
  surface: "#FFFFFF"
  text-primary: "#000000"
  text-secondary: "#1F4970"
  accent: "#651F70"
  accent-mauve: "#D8C0D8"
  border: "#F3F3F3"
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
    style: "mixed-case wordmark, navy body with a single magenta glyph"
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
    background: "#1F4970"
    text-color: "#FFFFFF"
    radius: "10px"
    height: "50px"
    padding: "6px 16px"
    shadow: "rgba(0, 0, 0, 0.08) 0px 4px 24px 0px"
  button-icon-toggle:
    background: "transparent"
    text-color: "#1F4970"
    radius: "50%"
    height: "42px"
    padding: "9px"
    hover-background: "rgba(31, 73, 112, 0.02)"
  card-panel:
    background: "#FFFFFF"
    radius: "0px"
    padding: "0px"
    shadow: "rgb(204, 204, 204) 0px 0px 7px 0px"
---
# Bloomguard access panel
Source: https://client.wisterias.co.uk/

## Overview
This is a minimalist, form-first authentication screen built on an almost pure-white field (~80% of rendered pixels) with structural color withheld from every functional element except one deep navy solid button. The identity carries entirely through a single oversized decorative asset — a soft mauve figurative silhouette built from overlapping circles and a heart-shaped negative-space cutout — placed off to the right and behind the login card. Typography is entirely Poppins, one family doing every job (wordmark, headline, labels, body), differentiated only by weight and size. The overall register is clinical-friendly: a healthcare-adjacent utility screen dressed with one warm, rounded, organic graphic to soften an otherwise square, bordered, corporate form.

## Composition
The page is a single unbroken screen, no scroll rhythm to speak of: one centered-but-off-axis card floats above a large background illustration. Hierarchy from top to bottom inside the card: a two-line wordmark lockup (brand name + small tagline beneath it), a short all-caps section label, two stacked labeled text inputs, a checkbox-plus-link utility row, one full-width solid button, and a closing sentence with an inline text link. The deliberate choice is restraint — one card, one CTA, one illustration — rejecting any split-screen hero-plus-form layout or side imagery panel; everything the user needs sits in one 396px-ish bounded rectangle with the brand illustration purely atmospheric behind it, not informational.

## Colors
Background is flat #FFFFFF, confirmed dominant in the pixel field (~80%, plus ~2% near-white #F0F0F0 tints) — this is a white-surface system, not a tinted or dark one. The mauve silhouette (#D8C0D8, ~16% of pixels, plus a faint pink-white wash #F0D8F0 ~1%) is the system's only large-area color and is entirely decorative, rationed to background geometry — never touching text or controls. Deep navy (#1F4970, declared at 7.3% area) is the structural ink: used for the primary button fill, field labels, secondary/link text, and the icon toggle. A small magenta/purple (#651F70) appears only as a single accent glyph inside the wordmark and the "Sign Up" link — an extremely rationed second accent, never a fill. Body ink is pure #000000 for input text and body copy. Borders are near-invisible hairlines (#F3F3F3/#F5F5F5) framing the inputs and card edge. No warm or saturated color touches any functional control — the palette leaves everything except the mauve illustration and the navy button deliberately uncolored.

## Typography
Single-family system: Poppins throughout, at three weights. The wordmark reads as a large label-scale lockup at 24px/600/1.17, mixed case, with one glyph in the accent magenta breaking the navy field — the system's one typographic flourish. Below it, a short all-caps section heading sits at headline scale, 30px/600/1.2, with a magenta accent applied to its final syllable — an inline weight/color break rather than a separate word. Field labels are small, bold, navy (#1F4970), sitting directly above each input. Input and body text runs at 16px/400 in black. Utility text (checkbox label, forgot-link, footer sentence) sits at body size or smaller, with the two inline links (#651F70) as the only non-navy, non-black text in the form.

## Layout
This is a single centered card layout, not a grid of cards — the "card family" measured here is the pair of input rows, each spanning ~95% of the card's inner width (rows [95] [95]), stacked, full-bleed within the card padding. Card corners are square (0px radius) with a soft ambient shadow (`rgb(204, 204, 204) 0px 0px 7px 0px`) lifting it off the page rather than a hard border. Internal spacing runs on a tight scale — 6px, 9px, 10px, 12px, 17px — visible in input padding, icon-button padding, and the gaps between label/input/label/input/checkbox-row/button. Input radius is 10px (slightly-rounded), matching the primary button's radius, giving the whole card one consistent corner language except the card shell itself, which stays sharp. The illustration behind the card is unconstrained by any grid — it's a free-floating decorative composition, large-scale, bleeding off the top and right edges of the viewport.

## Components
- **Auth card (shell)**: appears once, centered right-of-center on the page. Surface #FFFFFF, radius 0px, shadow `rgb(204, 204, 204) 0px 0px 7px 0px`, no visible border beyond the shadow edge. Internally, top to bottom: wordmark lockup, tagline, section heading, two labeled inputs, a checkbox+link utility row, the primary button, and a closing link line.
- **Text input ×2 (username, password)**: stacked full-width rows inside the card, each ~95% of card width. Surface #FFFFFF, radius 10px, hairline border (#F3F3F3/#F5F5F5), padding scaled to the 6–17px system. Password field carries a trailing icon-button (visibility toggle).
- **Icon toggle button**: located inside the password field, right-aligned. Transparent fill, text/icon color #1F4970, fully circular (radius 50%), height 42px, padding 9px; hover state shifts to a barely-visible navy wash `rgba(31, 73, 112, 0.02)`.
- **Checkbox + inline link row**: one row beneath the password field — an unchecked square checkbox with a navy outline paired with a body-weight label, and a right-aligned magenta text link occupying the same row, no button styling, underline-free.
- **Primary button (LOGIN)**: full-width solid rectangle beneath the utility row. Fill #1F4970, text #FFFFFF, radius 10px (slightly-rounded, not pill), height 50px, padding 6px 16px, resting shadow `rgba(0, 0, 0, 0.08) 0px 4px 24px 0px`. This is the single highest-contrast, most emphasized control on the screen — the hero primary.
- **Footer link line**: a single centered sentence beneath the button pairing black body text with a bold magenta inline link, no container or border — plain text row closing the card.

## Graphics & Effects
The sole graphic is a large mauve (#D8C0D8) organic/figurative illustration built from overlapping perfect circles and a heart-shaped negative cutout, positioned behind and around the card, extending from roughly mid-viewport to well past the bottom edge and bleeding off the right side — it covers a substantial minority of the total canvas (visually consuming the right two-thirds of the background) while the card sits in a clean white void to its left. It is flat-filled, no gradient, no texture, no photographic treatment — pure geometric silhouette work, functioning as brand mark rather than illustration. The card's only elevation cue is its soft grey ambient shadow (`rgb(204, 204, 204) 0px 0px 7px 0px`); the button carries its own separate, tighter drop shadow (`rgba(0, 0, 0, 0.08) 0px 4px 24px 0px`) to lift it slightly off the card surface. No noise, grain, or pattern overlay is present anywhere.

## Motion
Interactions are fast and utilitarian: fill transitions run at `0.2s cubic-bezier(0.4, 0, 0.2, 1)` for state color changes (icon toggle, hover washes), with width/height/box-shadow transitions at `0.15s`–`0.3s` on the same cubic-bezier family for any expanding or shadow-shifting control feedback. No entrance animation, parallax, or scroll-triggered motion applies — this is a static, single-view screen where motion exists only as micro-interaction feedback on hover/press, not as page choreography.

## Guardrails
- Never fill the whole background with the mauve tone — it is a single large decorative silhouette behind/right of the card, not a wash or gradient across the canvas.
- Never give the primary button a pill radius — it is 10px, slightly-rounded, matching the input fields exactly.
- Never recolor the icon toggle button as a filled/solid button — it stays transparent-fill, navy icon, circular.
- Never introduce a second display typeface — Poppins carries wordmark, headline, labels, and body at weight/size variation only.
- Never round the outer card shell — it stays sharp-cornered (0px) even though every control inside it is rounded.
- Keep magenta (#651F70) rationed to single glyphs/links only — it must never become a fill or a large text color.
