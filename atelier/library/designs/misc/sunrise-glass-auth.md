---
version: "1"
name: "Sunrise glass auth"
description: "A near-white, minimalist authentication surface topped by a single fixed pastel-aurora band; sharp-edged inputs, mixed-radius buttons, and a violet brand mark rationed to one small glyph."
colors:
  background: "#FAFBFC"
  surface: "#FFFFFF"
  text-primary: "#202020"
  text-secondary: "#646464"
  border: "#E8E8E8"
  border-strong: "#202020"
  accent: "#0B68CB"
  accent-brand: "#7B68EE"
  accent-brand-dark: "#5F48EA"
  accent-brand-light: "#D3CDF9"
  disabled-fill: "#BBBBBB"
typography:
  body-md:
    fontFamily: "-apple-system"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.5"
  label-md:
    fontFamily: "-apple-system"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: "1.25"
  link-inline:
    fontFamily: "-apple-system"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.5"
    color: "#0B68CB"
spacing:
  base: "4px"
  gap: "12px"
  input-padding: "10px 12px"
  section-padding: "16px"
rounded:
  input-sharp: "6px"
  control: "8px"
  card: "12px"
components:
  button-text-ghost:
    background: "transparent"
    text-color: "#202020"
    radius: "0px"
    height: "44px"
    padding: "0px"
  button-oauth:
    background: "#FFFFFF"
    text-color: "#202020"
    radius: "8px"
    height: "38px"
    padding: "10px 12px"
    border: "1px solid rgb(232, 232, 232)"
    hover-background: "rgba(0, 0, 0, 0.06)"
  button-primary-disabled:
    background: "#BBBBBB"
    text-color: "#FFFFFF"
    radius: "8px"
    height: "36px"
    padding: "10px 12px"
    border: "1px solid rgba(0, 0, 0, 0)"
  input-field:
    background: "#FFFFFF"
    text-color: "#202020"
    radius: "0px"
    border: "1px solid #E8E8E8"
    focus-border: "1px solid #202020"
    padding: "10px 12px"
---
# Sunrise glass auth
Source: https://app.clickup.com/90122085290/v/b/li/901222348389

## Overview
This is a minimalist, light-mode-default authentication pattern: a single centered card floating on an otherwise empty near-white canvas, with all color interest concentrated in one decorative band pinned to the top of the viewport. The aesthetic reads as restrained SaaS-utility — Swiss-adjacent in its reliance on alignment, hairline borders, and sharp-cornered form controls — softened only by one pastel aurora gradient and a small multi-hue brand glyph. Nothing else on the page carries color; the system's entire expressive budget is spent on that top band and the mark beneath it.

## Composition
The page is a vertical stack, dead-centered, with no grid columns competing for attention. At the very top, a wide horizontal gradient band occupies roughly the top fifth of the viewport, fading to the page background beneath it — this is the only saturated region on an otherwise white/near-white canvas. Below it, a small diamond-shaped brand mark sits alone, followed by a short heading, a one-line secondary prompt with an inline link, two stacked full-width utility buttons, a divider rule with a small "or" label breaking it, two stacked text inputs, a full-width disabled action button, and a centered link beneath it. A second, much smaller text line sits isolated near the bottom of an otherwise empty lower two-thirds of the page. The deliberate choice here is extreme vertical whitespace — a single ~330px-wide column anchored near the top third of a tall, mostly blank canvas — rejecting the alternative of a split-screen or boxed-card-with-shadow layout; there is no visible card container, shadow, or background differentiation behind the form itself, only implicit grouping through proximity and a shared column width.

## Colors
The dominant pixel value is white/near-white (#FFFFFF and #FAFBFC together account for essentially the entire declared area), confirming this is a light, unelevated surface system rather than a card-on-background composition — the "surface" and "background" roles are nearly identical in value, differentiated only by the faintest off-white tint (#FAFBFC) used for the page beneath the gradient. The pastel aurora band blends peach, pink, lavender, and sky-blue tones (visible as #F0D8F0, #D8F0FF, #FFF0F0 and #F0F0FF in the pixel field) and is strictly rationed to the top ~15% of the viewport — it never bleeds into the form area. Text ink runs in three steps: near-black (#202020) for primary labels and headings, mid-gray (#646464) for secondary/helper text, and pure black-adjacent tones reserved for the darkest emphasis. Borders are a very light hairline gray (#E8E8E8), barely visible, used only to separate input fields and outlined buttons. The one true accent is a saturated blue (#0B68CB) used exclusively for the two inline text links ("Sign up," "Forgot Password?" equivalents) — otherwise the palette stays achromatic. A violet brand triad (--theme-main-color #7B68EE, its dark #5F48EA, its light #D3CDF9) exists as tokens but appears only inside the tiny multi-color glyph mark, not spread across any UI chrome — color is deliberately withheld from every button and input.

## Typography
A single system font family (-apple-system) carries the entire page at two weights: a body-md token at 14px/400/1.5 line-height for helper copy, placeholder text, and secondary prompts, and a label-md token at 18px/600/1.25 for the primary heading, sized notably larger and heavier than everything around it but still modest by display standards — there is no hero-scale type anywhere on this page. Inline links inherit the 14px body size but shift to the blue accent color, distinguishing them from static gray text by hue alone, not by weight or size.

## Layout
There is no multi-column grid; this is a single fixed-width centered stack (approximately 330px measured column) with no responsive breakpoint behavior visible beyond re-centering. Vertical spacing between stacked elements is tight and consistent — small increments in the 4px–16px range (12px, 10px, 7px, 4px, 2px) — producing a dense, compact form despite the otherwise vast empty canvas around it. Input fields and buttons share the same full-bleed-to-column width and stack with minimal gaps, while the divider rule with its "or" label breaks the visual monotony roughly at the two-thirds point of the form. Corner radii vary meaningfully by control: form inputs are perfectly sharp (0px), while buttons carry a modest 8px rounding — a deliberate mismatch that a rebuild must preserve rather than unify.

## Components
- **Brand mark**: appears once, centered, directly above the heading. A small diamond/chevron glyph rendered in the violet triad (#7B68EE core, #5F48EA dark, #D3CDF9 light) — the only place these tokens surface.
- **Heading + subtext block**: one instance, centered, directly under the mark. Heading uses label-md (18px/600); subtext uses body-md (14px/400, #646464) with one inline blue (#0B68CB) link at the end of the sentence.
- **OAuth button (outline variant)**: ×1, full-width, stacked first among the two utility buttons. Surface: `#FFFFFF` fill, `1px solid rgb(232, 232, 232)` border, `8px` radius, `38px` height, `10px 12px` padding. Hover state shifts fill to `rgba(0, 0, 0, 0.06)`. Interior: a small tri-color "G" glyph on the left, centered label text in #202020.
- **SSO button (outline variant)**: ×1, stacked directly beneath the OAuth button, identical surface spec to the button above (same white fill, hairline border, 8px radius, 38px height) — a small cloud glyph precedes its label.
- **Divider rule**: one horizontal hairline split by a centered small-caps-weight "or" label in secondary gray, marking the transition from social auth to manual credentials.
- **Text input — email**: ×1, full width, sharp `0px` radius, `1px solid #E8E8E8` border that darkens to `1px solid #202020` on focus, `10px 12px` padding, placeholder text in body-md gray.
- **Text input — password**: ×1, identical surface spec to the email input, with a trailing eye-icon affordance for visibility toggle sitting inside the right edge of the field.
- **Primary action button (disabled state)**: ×1, full width, directly beneath the password field. Surface: `#BBBBBB` fill, text `#FFFFFF`, `8px` radius, `36px` height, `10px 12px` padding, `1px solid rgba(0,0,0,0)` border — visually inert/disabled until form validation is presumably satisfied.
- **Inline text link ("Forgot Password?" equivalent)**: one instance, centered directly beneath the primary button, blue (#0B68CB), 14px body weight.
- **Footer micro-link**: one small secondary-gray text line, isolated near the very bottom of the viewport, functioning as a low-emphasis help affordance with no visible container or styling beyond plain text.

## Graphics & Effects
The only gradient on the page is the fixed decorative band pinned to the top of the viewport: a soft multi-stop pastel blend moving through peach, pink, pale lavender, and sky-blue before dissolving into the page's near-white background — it covers roughly the top 15–18% of the viewport height and does not extend behind the form, card, or any lower content; the remaining ~80%+ of the page is flat white/off-white with zero gradient or texture. No noise, grain, or pattern overlay is present anywhere. Elevation is expressed only through two subtle shadow tokens available in the system — `rgb(224, 224, 224) 0px 0px 0px 2px` (a soft outline-style ring) and `rgb(128, 128, 128) 0px 0px 5px 0px` (a diffuse ambient shadow) — both faint enough to register as focus/hover cues on inputs or buttons rather than card-level elevation; no component in this view sits on a visibly raised surface.

## Motion
Interaction motion is minimal and utilitarian: a `right 0.3s ease` transition drives any horizontally-animated UI (such as a slide-in panel or icon shift), while the remaining registered keyframes (`fadeInUp`, `fadeInDown`, `fadeOut`, `fadeOutAlt`, plus autofill-detection keyframes) suggest simple opacity-and-vertical-offset entrance/exit patterns for transient UI (toasts, validation messages, autofilled-field cues) rather than any looping or decorative animation. There is no scroll-triggered or scroll-linked motion — the page has no scrollable content beyond the single viewport-height form.

## Guardrails
- Never extend the pastel gradient band past the top ~15–18% of the viewport — the rest of the page must stay flat near-white.
- Never apply the violet brand triad to buttons, inputs, or links — it is reserved solely for the small brand glyph.
- Never round the text inputs — they stay sharp (0px) while buttons keep their 8px radius; do not unify these two radii.
- Never add a card background, border, or shadow behind the form stack — the grouping is achieved by proximity and shared column width alone.
- Never introduce a second accent hue beyond the single blue (#0B68CB) used for inline links.
- Never add drop shadows or elevation beyond the two faint measured shadow tokens — this system stays visually flat.
