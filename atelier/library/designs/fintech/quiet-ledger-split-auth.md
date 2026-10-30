---
version: "1"
name: "Quiet ledger split-auth"
description: "A two-pane split-screen auth system pairing a warm off-white editorial left panel with a pure-white right-panel card stack, finished with a single violet-tinted radial wash, a sharp near-black primary pill, and a pine-green hover accent."
colors:
  background: "#FFFFFF"
  surface-warm: "#FDFCFC"
  text-primary: "#0B0B0C"
  text-secondary: "#575343"
  text-tertiary: "#777169"
  text-muted-ui: "#364153"
  accent-brand: "#FF5100"
  accent-hover: "#15362B"
  border: "#E5E5E5"
typography:
  display-lg:
    fontFamily: "Inter"
    fontSize: "46px"
    fontWeight: 500
    lineHeight: "1.05"
    letterSpacing: "-0.9px"
  body-md:
    fontFamily: "DM Sans"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: "1.6"
  body-fine:
    fontFamily: "DM Sans"
    fontSize: "13.5px"
    fontWeight: 400
    lineHeight: "1.6"
  accent-grotesk:
    fontFamily: "Century Gothic"
    fontWeight: 400
  accent-variable:
    fontFamily: "Geist Variable"
spacing:
  base: "6px"
  gap-sm: "12px"
  gap-md: "20px"
  gap-lg: "28px"
  section-padding: "48px"
  hairline: "3px"
rounded:
  control: "3px"
  pill: "9999px"
components:
  button-primary:
    background: "#0B0B0C"
    text-color: "#FDFCFC"
    radius: "9999px"
    height: "48px"
    padding: "0px 16px"
    hover-background: "#0B0B0C"
  button-secondary:
    background: "#FFFFFF"
    text-color: "#364153"
    radius: "9999px"
    height: "46px"
    padding: "12px 16px"
    border: "1px solid rgb(229, 229, 229)"
    hover-background: "#F5F3F1"
  button-tertiary-link:
    background: "transparent"
    text-color: "#777169"
    radius: "0px"
    height: "20px"
    padding: "0px"
    hover-color: "#15362B"
  badge-social-proof:
    background: "#FDFCFC"
    radius: "9999px"
    border: "1px solid #E5E5E5"
  input-field:
    background: "#FFFFFF"
    radius: "3px"
    border: "1px solid #E5E5E5"
    text-color: "#0B0B0C"
  card-auth-panel:
    background: "#FFFFFF"
    radius: "3px"
    padding: "28px"
---
# Quiet ledger split-auth
Source: https://dashboard.tsenta.com/dashboard

## Overview
This is a minimalist, content-first split-screen auth pattern: a warm-paper editorial left column carries the brand voice in large Inter display type, while a stark-white right column holds a single bounded auth card. The palette is almost monochrome — off-white, white, near-black ink, warm gray secondary text — with exactly one saturated hue (a burnt-orange badge accent) and one cool violet-toned radial wash rationed to a small corner. The system reads as restrained SaaS-editorial: no imagery, no illustration, the entire visual interest comes from type scale contrast, a single pill-shaped primary button, and a soft gradient glow used sparingly as atmosphere, not background.

## Composition
First screen is a strict two-pane split: left pane is text-led (eyebrow, display headline with one italicized/colored word, supporting paragraph, a thin divider, then a three-item checklist), right pane is a single centered auth card (headline, subcopy, OAuth button, divider rule, email field, submit button, fine-print links). A soft radial gradient glow sits only in the upper-right corner of the left pane, bleeding faintly toward the seam between panes — it does not spread across the page. Density is low throughout: generous vertical whitespace separates the eyebrow from the headline from the checklist, and the right-pane card floats centered with large empty margins above and below. The deliberate choice is restraint — one accent color, one gradient, one primary button — rejecting a denser multi-color marketing hero in favor of a single calm decision point.

## Colors
Background is overwhelmingly white (`#FFFFFF`, ~75% declared area, ~91% of rendered pixels), with a warm off-white (`#FDFCFC`, ~25% declared area) used as the left-panel wash and card-adjacent surface — these two near-white tones do the structural work of separating panes without a visible border in most of the frame. Text ink is near-black (`#0B0B0C`) for headlines and primary button fill/label pairing, with warm grays (`#575343` secondary, `#777169` tertiary/muted) carrying body copy and fine print — this warm-gray-on-warm-white pairing is the system's quiet signature instead of pure black-on-white. The one saturated hue, `#FF5100`, is rationed to a single small rounded badge in the top-right of the header — nowhere else. A pine-green (`#15362B`) appears only as a hover state on the plain-text tertiary link. Borders are a flat `#E5E5E5` hairline, used on the secondary button and the badge. Red tokens (`#FEF2F2` through `#E7000B`) exist in the author's palette but are not visible on this screen — reserved for error/destructive states elsewhere in the product.

## Typography
Display headline uses Inter at 46px/500, 1.05 line-height, -0.9px tracking — tight and confident, with one word distinguished (by color/italic treatment) inside an otherwise black headline, roughly one word out of a dozen. Body copy runs DM Sans at 17px/400/1.6 for the left-panel paragraph, dropping to a finer 13.5px/400 DM Sans for secondary captions, fine print, and legal links. Inter is reserved for display/heading duty; DM Sans carries all running body and UI text; Century Gothic and Geist Variable are present in the system's font stack as reserve/accent faces not dominant on this screen. The eyebrow label above the headline is small, uppercase, wide-tracked, in the muted tertiary tone — classic small-caps signpost convention.

## Layout
The page is a two-column fixed split (no visible column-grid system beyond the pane division), with the left pane holding a single-column text stack and the right pane holding a max-width-600px centered auth card. Spacing follows a tight scale — 6px, 12px, 20px, 28px, 48px — producing a compact rhythm inside the card (field-to-button gaps near 12–20px) and a looser rhythm in the left-pane text stack (headline-to-paragraph, paragraph-to-divider near 28–48px). The checklist below the divider is a vertical stack of 3 items with checkmark glyphs, gap ~12px, single column. No card grids or multi-column repeating components appear on this screen — this is a single-purpose auth template, not a content-grid page.

## Components
- **Header bar (left pane, top)**: top-left wordmark lockup (glyph + name) in near-black; no nav links, no CTA — this is an auth-flow header, not a marketing navbar. Not edge-to-edge chrome; sits directly on the warm-white page background with generous side padding.
- **Social-proof badge**: top-right of the left pane, single pill, background `#FDFCFC`, border `1px solid #E5E5E5`, fully rounded (pill/9999px), containing a small colored mark plus fine-print label text in muted ink — one instance only, floats isolated at top-right, partially overlapped by the radial glow.
- **Eyebrow + display headline + body block**: stacked vertically, left-aligned, no card/border — eyebrow (uppercase, tracked, muted tone) sits above the two-line Inter display headline, which sits above a DM Sans paragraph at 17px.
- **Hairline divider**: a thin horizontal rule in `#E5E5E5` separating the intro paragraph from the checklist below — full-width within the left column's text measure.
- **Checklist (feature list)**: 3 stacked rows, each a checkmark glyph + single-line label, gap ~12px, no bullets/numerals, no card surface — plain text rows against the page background.
- **Auth card headline block**: centered within the right-pane card, large medium-weight heading plus a smaller muted subcopy line stating the free-start offer — no border around this block, sits directly above the OAuth button.
- **OAuth button (secondary/outline variant)**: full-width within the card, background `#FFFFFF`, text `#364153`, radius 9999px (pill), height 46px, padding 12px 16px, border `1px solid rgb(229, 229, 229)`; hover background shifts to `#F5F3F1`. Carries a provider glyph plus label, centered.
- **"Or continue with" divider**: a thin rule with centered label text bisecting it, muted tone, separating OAuth from the email field.
- **Email input field**: full-width, labeled above (not placeholder-as-label), background `#FFFFFF`, radius 3px (sharp/near-square), border `1px solid #E5E5E5`, placeholder text in muted tone.
- **Primary button (hero/auth primary)**: full-width submit button directly under the email field — background `#0B0B0C`, text `#FDFCFC`, radius 9999px (full pill), height 48px, padding 0px 16px, hover retains `#0B0B0C` (no visible lightening, relies on inherent contrast/press feedback). This near-black pill is the single most emphasized control on the screen — the true primary action.
- **Tertiary text link row**: below the primary button, plain transparent-background text in `#777169`, no border, no padding beyond line-height (height 20px), hover color shifts to pine-green `#15362B` — used for an alternate sign-in-method link.
- **Fine-print legal line**: smallest text size (13.5px DM Sans), muted tone, with two inline links in a slightly darker weight — sits at the very bottom of the card, tight to the card's lower edge.

## Graphics & Effects
A single radial gradient glow — `radial-gradient(circle at 30% 30%, rgba(112, 93, 236, 0.1), rgba(204, 181, 209, 0.04) 60%, rgba(0, 0, 0, 0) 72%)` — renders only in the upper-right region of the left pane, covering roughly the top third of that column (measured at ~7% of total page area); it is a soft violet-to-transparent wash, not a full-bleed hero background, and fades to full transparency well before reaching the right pane. No scrims, no photographic treatment, no canvas/video elements appear — the page is otherwise flat color with hairline borders providing all structural separation. Elevation is near-absent: no drop shadows are visible on the auth card or buttons; depth is implied purely through the warm-white/pure-white pane contrast and the single hairline border on the secondary button.

## Motion
State changes use the system's short, snappy default transitions: color/background/border property changes animate at `0.15s cubic-bezier(0.4, 0, 0.2, 1)`, broader property shifts (hover backgrounds, link color changes) at `0.2s cubic-bezier(0.4, 0, 0.2, 1)`, and transform-based feedback (press/scale states) at `0.2s cubic-bezier(0.4, 0, 0.2, 1)` on translate/scale/rotate. These durations are fast and non-bouncy — no spring/overshoot keyframes are in evidence for this screen; the available keyframe library (spin, pulse, fade-in, rise) is reserved for loading and entrance states elsewhere, not visible in this static auth view.

## Guardrails
- Never spread the violet radial glow across the full viewport — it is a small upper-right corner wash on the left pane only, ~7% of page area.
- Never render the primary submit button as an outline/glass style — it is a solid near-black pill (`#0B0B0C` fill, `#FDFCFC` text), fully opaque.
- Never give the OAuth/secondary button a dark fill — it stays white with a light hairline border and a pale warm-gray hover fill.
- Never introduce a second saturated color — the burnt-orange badge accent is the only hue break in an otherwise near-monochrome warm-neutral system.
- Never add shadows or elevation cards — depth comes only from the off-white/white pane split and hairline borders, kept flat.
- Never widen the right-pane card beyond its narrow centered measure (~600px max-width) — it must stay a compact, isolated block, not a full-width form.
