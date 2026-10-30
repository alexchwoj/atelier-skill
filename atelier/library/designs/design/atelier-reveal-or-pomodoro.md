---
version: "1"
name: "Tenebrous Bloom"
description: "A near-black, painterly dark-mode canvas where a single desaturated gold rations all warmth against saturated botanical color, carried by a Cormorant Garamond accent clause and full-pill Satoshi controls."
colors:
  background: "#0A0A0A"
  surface: "#181818"
  text-primary: "#FFFFFF"
  text-secondary: "#FFFFFF"
  ink-on-accent: "#0A0A0A"
  accent: "#C9A46D"
  focus-ring: "#3C81F5"
typography:
  body-md:
    fontFamily: "Satoshi"
    fontSize: "10px"
    fontWeight: 400
    lineHeight: "1.5"
  caption-sm:
    fontFamily: "Satoshi"
    fontSize: "10px"
    fontWeight: 400
    lineHeight: "1.5"
  accent-serif:
    fontFamily: "Cormorant Garamond"
    fontStyle: "italic"
    fontWeight: 400
spacing:
  base: "8px"
  gap: "24px"
  section-padding: "96px"
rounded:
  control: "9999px"
  card: "9999px"
  pill: "9999px"
components:
  button-primary:
    background: "#C9A46D"
    text-color: "#0A0A0A"
    radius: "9999px"
    height: "64px"
    padding: "0px"
    shadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px"
  button-utility-glass:
    background: "rgba(255, 255, 255, 0.08)"
    backdrop-filter: "blur(24px)"
    border: "1px solid rgba(255, 255, 255, 0.15)"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "44px"
  card-glass-panel:
    background: "rgba(10, 10, 10, 0.4)"
    backdrop-filter: "blur(4px)"
    border: "1px solid rgba(255, 255, 255, 0.1)"
    radius: "16px"
    padding: "24px"
    shadow: "rgba(0, 0, 0, 0.5) 0px 4px 20px 0px"
---
# Tenebrous Bloom
Source: https://p.superdesign.dev/draft/6ad57e39-a9ae-4078-ac76-0093d4aa2598

## Overview
This is a dark-mode-default system built on a near-black stage, its whole identity carried by a single full-bleed painterly image whose own saturated pigment supplies nearly all chroma the page ever shows. The interface layer sits on top as restrained glassmorphism — translucent, blurred, borderless-feeling panels — plus one unmistakably solid, warm-gold pill that functions as the sole manufactured color in the UI. Typography pairs a workhorse grotesque (Satoshi) for all functional text with an italic serif (Cormorant Garamond) reserved for a single accent clause, giving the system an editorial, gallery-placard voice against its otherwise utilitarian control set. Corners are uniformly pushed to full pill/9999px, so every control reads soft and capsule-shaped against the hard rectangular canvas of the artwork.

## Composition
The first screen is dominated edge-to-edge by the still-life image itself — dense, layered botanical forms rendered in oil-painting realism against a black ground — with interface chrome kept minimal and peripheral: a small circular icon control anchored bottom-right, and a whisper of italic caption text pinned to the bottom-left corner at low contrast. There is no hero headline block competing with the image; the composition's deliberate choice is to let the painting BE the hero, with text treated as a marginal annotation rather than a layered headline system. The alternative it rejects is a conventional hero with large display type and a scrim-darkened image behind it — here the image stays untouched and full-strength, and UI elements are pushed to the frame's edges so as not to interrupt the picture plane. Density is intentionally sparse at the interface level even though the image content itself is maximalist and richly detailed — a controlled tension between an ornate visual and an almost-empty control layer.

## Colors
The pixel field is overwhelmingly near-black (`#000000` at roughly half of all pixels, with dark olive `#181800`, dark maroon `#180000`, and muted charcoal-olive `#303018` filling most of the remainder) — confirming this is a black-stage system, not a colorful one, despite the vivid botanical subject. Black (`#0A0A0A`/`#000000`) is the background role. A muted gold (`#C9A46D`) is the single rationed accent, appearing only as the fill of the one primary control — never as a wash, never as text color on dark, deliberately scarce against the near-total black field. White (`#FFFFFF`) serves as both text-primary/secondary ink and the only border/ring color measured, used sparingly for hairline glass borders and caption text at reduced opacity. A cool blue (`#3C81F5`) exists only as a focus-ring token, invisible until keyboard interaction — an accessibility-only color intentionally excluded from the resting palette. Every hue seen beyond these belongs to the photographic/painterly content itself, not to the design system, and must never be extracted into UI tokens.

## Typography
Satoshi is the workhorse sans, carrying all functional and caption text at small, quiet sizes — 16px/400/1.5 for body-weight reading text, dropping to 10px/400/1.5 for the smallest caption register, both understated rather than assertive. Cormorant Garamond, an italic serif, is reserved exclusively as a signature accent clause — a brief, lower-contrast caption-style line rendered in a classical, painterly hand that echoes the artwork's own era, visually distinct from every other UI string. Hierarchy is therefore not built from scale contrast (no large display size is measured or shown) but from FAMILY contrast: grotesque-sans for utility, italic serif for atmosphere. Body text sits at low visual weight and low opacity against the black field, functioning as a whisper rather than a headline.

## Layout
There is no visible card grid, multi-column arrangement, or bento composition on this canvas — the layout is a single full-bleed image plane with zero-column, edge-anchored overlay elements. The spacing system (8px base, 24px gap, 96px section padding) governs the overlay layer's inset from the frame edges rather than any internal grid, consistent with the single circular control sitting inset from the bottom-right corner and the caption text inset from the bottom-left. Corner radius is uniformly 9999px across every control, producing a soft-capsule/circular vocabulary that contrasts against the hard rectangular canvas edge. This is a single-surface, full-bleed layout pattern, not a sectioned page — any rebuild must resist the urge to introduce a conventional grid where none exists.

## Components
- **Icon button (circular utility control)** — appears bottom-right corner of the frame, singular, floating over the image with no visible container beneath it. Surface: warm-gold `#C9A46D` fill, fully circular (9999px radius), compact icon-button footprint holding a single small glyph rendered in dark ink `#0A0A0A`. This is the ONE overtly manufactured-color element on the page — an observed near-gold solid circular chip, small (icon-button scale, well under the 64px primary height), functioning as a persistent utility affordance rather than a content CTA.
- **Caption text mark** — appears bottom-left corner of the frame, singular, low-contrast italic line set in Cormorant Garamond, rendered in a pale, semi-transparent white against the black background beneath it. No container, no border, no background fill — it reads as an etched annotation directly on the image, not a card.
- **Primary CTA button (measured, off-canvas variant)** — the richest measured control: `#C9A46D` fill, `#0A0A0A` text, fully pill-shaped (9999px), a tall 64px height, zero internal padding, resting shadow `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px` — a deep, soft, offset drop shadow implying strong elevation. This is the system's primary-button token: solid, high-contrast, warm-gold against black, unmistakably the highest-emphasis control in the component set even though it is not visible in this particular frame.
- **Glass utility button (secondary variant)** — a translucent, blurred pill control distinct from the primary: `rgba(255,255,255,0.08)` fill, `blur(24px)` backdrop-filter, hairline white border, white text, full pill radius, shorter 44px height — used for secondary/utility actions layered over imagery, never for the highest-emphasis action.
- **Glass panel (card family)** — a translucent dark panel: `rgba(10,10,10,0.4)` fill, `blur(4px)` backdrop-filter, hairline `rgba(255,255,255,0.1)` border, 16px radius, 24px padding, shadow `rgba(0,0,0,0.5) 0px 4px 20px 0px` — the system's card surface for any floated content block, kept low-contrast and recessive against the dominant image.

## Graphics & Effects
The dominant graphic is the full-bleed painterly still-life itself — treat any live canvas/video surface elsewhere in the system with a static image or soft gradient stand-in of comparable dark, richly-detailed character, never a flat color. Two backdrop-filter strengths are in play: a light `blur(4px)` for shallow glass (subtle frosting over the image) and a heavy `blur(24px)` for deeper glass utility controls (near-total diffusion of what sits behind). Elevation is expressed through soft, large-radius, low-opacity black shadows — `rgba(0,0,0,0.5) 0px 4px 20px 0px` for standard panel lift, and a deeper triple-layer shadow (`...0.25 0px 25px 50px -12px`) for the primary button, giving it a hovering, detached quality above the picture plane. No gradient fill is present anywhere in the measured components — all color plane transitions in view belong to the photographic content, not to CSS.

## Motion
Interactive elements transition via `all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)` — an eased, slightly overshoot-leaning curve well-suited to hover/press states on the pill controls, giving them a smooth, unhurried settle. Color and border changes use a snappier `color, background-color, border-color, text-decoration-color, fill, stroke 0.15s cubic-bezier(0.4, 0, 0.2, 1)` for immediate-feeling state feedback (hover tint, focus-ring appearance). Opacity fades use a fast `0.1s ease-in` for near-instant appearance/disappearance, while transform-based feedback (press/scale) runs at `0.15s cubic-bezier(0.4, 0, 0.2, 1)`. A `fadeIn` keyframe governs content entrance. Overall the motion language is quick and utilitarian for feedback, slower and eased only for the primary button's full state transition — nothing here should read as bouncy or playful.

## Guardrails
- Never fill the background with a gradient or flat color other than near-black — the field is image-dominated black, not a designed color wash.
- Never assign the gold accent (`#C9A46D`) to more than one control at a time; it must stay rationed to a single primary action.
- Never substitute the glass utility button's rgba/blur values for the primary CTA — the primary is solid gold, not translucent.
- Never introduce a card grid, multi-column layout, or bento structure; this system is a single full-bleed plane with edge-anchored overlays only.
- Never scale up the Cormorant Garamond accent beyond a brief caption-length clause — it is a whisper, not a headline face.
- Never sharpen the corner radius; every control stays at full 9999px pill/circle, contrasting against the hard-edged canvas frame.
