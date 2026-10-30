---
version: "1"
name: "Ember Void Editorial"
description: "Near-black, near-monochrome dark system where a single rationed red-orange fires through radial glows, italic serif interruptions, and a flat sharp-cornered navbar."
colors:
  background: "#000000"
  surface: "#0D0D0D"
  surface-alt: "#111111"
  text-primary: "#FFFFFF"
  text-secondary: "#999999"
  text-muted: "#4D4D4D"
  accent: "#FF4533"
  link-legacy: "#0000EE"
typography:
  display-lg:
    fontFamily: "Satoshi"
    fontSize: "80px"
    fontWeight: 500
    lineHeight: "1.1"
    letterSpacing: "-3.2px"
  headline-md:
    fontFamily: "Satoshi"
    fontSize: "60px"
    fontWeight: 500
    lineHeight: "1.2"
    letterSpacing: "-2.4px"
  body-md:
    fontFamily: "Satoshi"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: "1"
  label-md:
    fontFamily: "Satoshi"
    fontSize: "28px"
    fontWeight: 500
    lineHeight: "1"
    letterSpacing: "-0.6px"
  caption-sm:
    fontFamily: "Satoshi"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: "1"
  accent-serif:
    fontFamily: "Instrument Serif"
    fontStyle: "italic"
    role: "headline interruption word/phrase"
  legacy-serif:
    fontFamily: "Times New Roman"
    role: "incidental logo/wordmark accent"
spacing:
  base: "8px"
  gap-sm: "12px"
  gap-md: "24px"
  gap-lg: "32px"
  section-padding: "64px"
rounded:
  control: "12px"
  card: "12px"
  card-lg: "24px"
  pill: "9999px"
  panel: "500px"
components:
  navbar-cta:
    background: "#FF4533"
    backdropFilter: "blur(10px)"
    textColor: "#0000EE"
    radius: "10px"
    height: "36px"
  button-hero-primary:
    background: "#FF4533 (observed solid fill, near-flat)"
    textColor: "#FFFFFF"
    radius: "12px"
    height: "44px"
    padding: "0px 20px"
    note: "observed on first screen; not the measured navbar/glass button"
  button-hero-secondary:
    background: "transparent"
    border: "1px solid rgba(255,255,255,0.2)"
    textColor: "#FFFFFF"
    radius: "12px"
    height: "44px"
  button-service-solid:
    background: "#FF4433"
    textColor: "#000000"
    radius: "12px"
    height: "40px"
    padding: "0px"
  button-footer-cta:
    background: "#FF4533"
    textColor: "#FFFFFF"
    radius: "12px"
    height: "43px"
    padding: "12px 16px"
  card-testimonial:
    background: "#0D0D0D"
    radius: "12px"
    padding: "24px"
    border: "rgba(255,255,255,0) 0px 0px 0px 1px"
  card-result-tile:
    background: "#0D0D0D"
    radius: "12px"
    padding: "24px"
    shadow: "rgba(255, 69, 51, 0.12) 0px 0px 0px 1px"
  card-service-gradient:
    background: "linear-gradient(135deg, #0044FF 0%, #0D0D0D 60%) / #FF4533 variant"
    radius: "24px"
    padding: "32px"
  card-comparison-panel:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  footer:
    background: "rgba(10, 10, 10, 0.48)"
    linkCount: 2
---
# Ember Void Editorial
Source: https://conversion.framer.media/

## Overview
This is a dark-mode-default, near-monochrome system carried by huge Satoshi display type and a single rationed accent — a red-orange (#FF4533/#FF4433) that appears only as button fills, chip borders, and radial glows, never as a background wash. The identity leans editorial-minimalist: black surfaces (#000000 at ~85% of pixels), tight negative letter-spacing on display type, and an italic serif (Instrument Serif) inserted mid-headline as the signature typographic move. Corner language is soft throughout (10–24px) except the navbar, which is unrounded and edge-to-edge, and pill CTAs used sparingly.

## Composition
The first screen stacks vertically and centered: a small avatar-cluster + star-rating proof line, a two-line display headline with one italicized serif word, a muted supporting paragraph, a two-button row (solid primary + outline secondary), then a large soft radial glow, then a logo strip. Scrolling reveals a strict rhythm of eyebrow-label → headline-with-serif-accent → supporting copy → content grid, repeated for testimonials, service cards, a differentiation two-column comparison, a three-step process, a team grid, and a closing CTA panel before the footer. Density is generous — large vertical gaps (64px section padding) — with content capped centrally (max-width 1200px). The deliberate choice is restraint: color is denied to 98%+ of the canvas so the eye has nowhere to land but the accent buttons and glows, rejecting a saturated full-bleed gradient hero in favor of a black stage with light rationed at the edges.

## Colors
Background is flat #000000, dominating ~85% of rendered pixels — this is the true stage, not a gradient. Card/panel surfaces sit one step up at #0D0D0D and #111111, both near-invisible against the black except for hairline borders and shadows. Text-primary is pure #FFFFFF for headlines and body; text-secondary drops to #999999 for supporting copy, and a darker #4D4D4D serves as the most muted tier (metadata, disabled-feeling labels). The single accent, #FF4533 (and its near-twin #FF4433), is rationed to interactive surfaces only: the navbar CTA, primary buttons, chip/shadow rings (`rgba(255, 69, 51, 0.12) 0px 0px 0px 1px`), and the warm half of radial glows — never a full-section fill. An anomalous #0000EE (classic link-blue) appears as text inside the blurred navbar CTA, a deliberate retro/legacy-link wink against the otherwise modern palette. Everything else — icons, dividers, secondary panels — is left in grayscale on purpose, so the red-orange reads as the only "hot" signal on the page.

## Typography
Satoshi is the workhorse for every weight of the system: display-lg (80px/500, lh 1.1, ls -3.2px) for hero headlines, headline-md (60px/500, lh 1.2, ls -2.4px) for section titles, label-md (28px/500, ls -0.6px) for card headings, body-md (16px/500) for paragraphs, and caption-sm (14px/500) for eyebrow pills and metadata. The signature move is Instrument Serif set in italic, dropped into headlines as a one-to-two-word interruption at the same or slightly larger size than its neighbors — it appears in the hero headline, the services headline, the process headline, the team headline, and the closing CTA headline, always mid-sentence, never as a whole line. Times New Roman surfaces incidentally in a wordmark-style logo treatment, a legacy-serif flourish distinct from the Instrument Serif accent.

## Layout
Content is centered and capped at a 1200px max-width. Card grids vary by section: a 3-column, 32px-gap grid of 6 result tiles; a 2-column, 16px-gap comparison grid where one row runs 49/49 (two near-equal panels) and the row below spans 100 (one full-width panel) — a checklist-versus-checklist layout resolving into a single wide summary band; and a 3-column, 0-gap grid of exactly 3 equal-width (33/33/33) process-step tiles with no gutter, reading as a seamless triptych. The testimonial and team rows scroll horizontally as a rail beyond the visible three-up cards, with a round accent-colored arrow control for advancing. Spacing follows an 8px-rooted scale (8, 12, 24, 32, 64px) with generous 64px inter-section padding.

## Components
- **Navbar**: edge-to-edge square bar, 108px tall, 100% viewport width (0px insets), all four corners 0px radius, background transparent, sticky on scroll. Contains a logo mark + 7 nav items (text links plus one dropdown-style item) and a solid CTA button (`#FF4533` fill with `blur(10px)` backdrop, text `#0000EE`, radius 10px, height 36px) right-aligned.
- **Hero primary button**: an observed near-flat solid red-orange fill (~`#FF4533`), white text, ~12px radius, ~44px height — the most visually dominant control on the first screen, positioned directly under the headline paragraph.
- **Hero secondary button**: outline/ghost variant beside it, transparent fill, thin light border, white text, same ~12px radius and ~44px height — a lower-emphasis "learn more" companion.
- **Service button (solid, mid-page)**: `#FF4433` fill, black text, 12px radius, 40px height, no internal padding — used inside gradient service cards as an implicit tap target/label chip.
- **Footer CTA button**: `#FF4533` fill, white text, 12px radius, 43px height, `12px 16px` padding — larger and more padded than the mid-page variant, used at the page's closing panel.
- **Testimonial cards**: appear in the client-quotes rail, 3 visible at a time in a horizontal scroll, `#0D0D0D` background, 12px radius, 24px padding, near-invisible border (`rgba(255,255,255,0) 0px 0px 0px 1px`). Anatomy top-to-bottom: a rectangular logo/media placeholder, a wordmark-style client logo, a 2–3 line quote in white, then a name/title pair in secondary gray beneath.
- **Result/stat tiles**: 3-up row, each `#0D0D0D` surface, 12px radius, glowing hairline shadow (`rgba(255, 69, 51, 0.12) 0px 0px 0px 1px`). Anatomy: full-bleed photographic image covering the top ~60% of the card, a bold headline label and one-line result sentence beneath, then a row of two small pill chips carrying percentage figures.
- **Service cards (gradient)**: 2-up row (with a 3rd stacked below on narrow viewports), large 24px radius, 32px padding, background a diagonal gradient fill — one card cool-toned, one warm-toned — anatomy: a large label-md heading followed by a short supporting sentence, no imagery.
- **Comparison panels**: 2-up row, transparent background, 0px radius, no padding container each holding a stacked checklist — left panel uses an "×" glyph in muted gray per row (rejected traits), right panel uses a check glyph in the accent color per row (adopted traits); the right panel sits on a warm gradient wash.
- **Process step tiles**: 3-up, 0px gap, equal thirds, each with a centered small icon in a rounded square frame, a label-md heading, and a short centered paragraph beneath — no card background, just column dividers implied by whitespace.
- **Team cards**: horizontal rail of large portrait-photo tiles, name overlaid near the bottom edge in bold white type; cards are wider than tall, near-full-bleed imagery with minimal visible chrome.
- **Newsletter/email-capture band**: sits in the footer, a single-line text input (dark fill, muted placeholder) paired with a solid accent submit button, both ~40–43px tall with rounded (~10–12px) corners.
- **CTA closing panel**: one large bounded rectangle (not full-bleed), ~24px radius, dark surface, centered headline with italic serif interruption, supporting paragraph, and one centered primary button.
- **Footer**: background `rgba(10, 10, 10, 0.48)`, translucent over a bottom radial glow; contains a wordmark logo, a short newsletter blurb, the email-capture molecule, and two link columns (2 links measured per grouping) under small caption headings.

## Graphics & Effects
Two conic gradients exist but are small, localized elements, not backgrounds: one (`conic-gradient(rgb(255, 0, 0) 0deg, rgb(255, 0, 26) 54.8916deg, rgb(0, 166, 255) 106.699deg, rgb(71, 151, 255) 162deg, rgb(0, 68, 255) 252deg, rgb(255, 128, 0) 306deg, rgb(255, 0, 0) 360deg)` covering ~1.9% of the page) renders as a compact avatar or icon-scale swatch; the second (`conic-gradient(rgb(255, 217, 173) 0deg, rgb(19, 156, 229) 180deg, rgb(253, 134, 77) 360deg)`, ~1.1%) is similarly a small accent element, likely a logo mark or badge — neither should be scaled up to a hero backdrop. The true large-scale graphic language is soft radial glow blooms: a warm amber-to-red glow beneath the hero CTA row spanning roughly the section's full width at low height, and a cyan-toned glow low in the footer — both diffuse, blurred, and set against the black stage rather than filling it. Card elevation is near-flat, signaled mostly by hairline rings (`rgba(255, 255, 255, 0) 0px 0px 0px 1px`, `rgba(255, 69, 51, 0.12) 0px 0px 0px 1px`) rather than heavy drop shadows; one inset shadow (`rgb(0, 0, 0) 0px 0px 0px 1px inset`) reinforces a pressed/contained edge on darker panels. The navbar CTA and other small controls use `blur(10px)`/`blur(5px)` backdrop-filters for a light glass effect on an otherwise flat, non-glassy system.

## Motion
Interactive color changes use `color 0.3s cubic-bezier(0.44, 0, 0.56, 1)` — a smooth, symmetric ease for hover/text-color transitions, not spring or overshoot. Scroll behavior is managed by Lenis for smooth/inertial scrolling, and section and element reveals are handled via Framer Motion, implying scroll-triggered fades/slides timed to viewport entry rather than autoplaying loops. Motion overall is restrained and functional: it smooths scroll and eases color/state changes, it does not drive large transforms or decorative looping animation.

## Guardrails
- Keep the background flat black; never replace it with a full-frame version of either conic gradient or the radial glows.
- Reserve `#FF4533`/`#FF4433` for buttons, chip rings, and glow warmth only — do not tint large surfaces or body text with it.
- Do not round the navbar; it is a sharp, edge-to-edge, transparent, sticky bar — corner radius stays 0px on all four corners.
- Preserve the italic Instrument Serif accent as a short mid-headline interruption (one to two words), never a full-line treatment.
- Keep the process-step and comparison grids gap-less/edge-aligned (0px and thirds) — do not add card gutters that aren't measured.
- Do not substitute the glass navbar CTA's values for the hero's primary button; they are distinct components with different fills and hosts.
