---
version: "1"
name: "Structured Light Scheduler"
description: "A light-mode, framed-canvas system on flat #F4F4F4 with a black-ink hairline border grid, a single near-black solid CTA, and a functional booking-widget hero rendered as a real product screenshot."
colors:
  background: "#F4F4F4"
  surface: "#FFFFFF"
  surface-muted: "#E5E7EB"
  text-primary: "#141414"
  text-secondary: "#898989"
  text-tertiary: "#242424"
  border: "#767676"
  link: "#0000EE"
  accent-ring: "#3C81F5"
typography:
  display-lg:
    fontFamily: "Cal Sans"
    fontSize: "64px"
    fontWeight: 600
    lineHeight: "1.1"
  headline-md:
    fontFamily: "Cal Sans"
    fontSize: "48px"
    fontWeight: 600
    lineHeight: "1.1"
  body-md:
    fontFamily: "Cal Sans UI Variable Light"
    fontSize: "14px"
    fontWeight: 300
    lineHeight: "1.4"
  label-md:
    fontFamily: "Cal Sans UI Variable Light"
    fontSize: "18px"
    fontWeight: 300
    lineHeight: "1.3"
    letterSpacing: "-0.2px"
  body-default:
    fontFamily: "Cal Sans UI Variable Light"
    fontSize: "16px"
    fontWeight: 300
    lineHeight: "1.5"
  accent-ui-sans:
    fontFamily: "Inter"
    fontWeight: 400
  accent-alt-display:
    fontFamily: "Matter Medium"
    fontWeight: 500
  accent-serif-legacy:
    fontFamily: "Times New Roman"
    fontStyle: "normal"
spacing:
  base: "4px"
  gap-sm: "8px"
  gap-md: "12px"
  gap-lg: "24px"
  section-padding: "24px"
rounded:
  control: "8px"
  card: "12px"
  card-lg: "29px"
  pill: "100px"
  tag: "4px"
  hairline: "2px"
components:
  button-primary:
    background: "#141414"
    text-color: "#FFFFFF"
    radius: "100px"
    height: "44px"
    border: "none"
  button-secondary-outline:
    background: "#FFFFFF"
    text-color: "#141414"
    radius: "100px"
    height: "44px"
    border: "1px solid #767676"
  button-social-google:
    background: "#141414"
    text-color: "#FFFFFF"
    radius: "8px"
    height: "48px"
    border: "none"
  button-nav-cta:
    background: "#141414"
    text-color: "#FFFFFF"
    radius: "8px"
    height: "36px"
  card-step:
    background: "#FFFFFF"
    radius: "12px"
    padding: "24px"
    border: "1px solid #E5E7EB"
    shadow: "rgba(36, 36, 36, 0.7) 0px 1px 5px -4px, rgba(36, 36, 36, 0.05) 0px 4px 8px 0px"
  card-widget-preview:
    background: "#FFFFFF"
    radius: "12px"
    padding: "16px"
    border: "1px solid #E1E2E3"
    shadow: "rgba(19, 19, 22, 0.7) 0px 1px 5px -4px, rgba(34, 42, 53, 0.08) 0px 0px 0px 1px, rgba(34, 42, 53, 0.05) 0px 4px 8px 0px"
  card-icon-tile:
    background: "#FFFFFF"
    radius: "8px"
    padding: "24px"
    border: "1px solid #E5E7EB"
    icon-container-radius: "8px"
  card-hero-frame:
    background: "#FFFFFF"
    radius: "29px"
    padding: "24px"
    border: "1px solid #D3D3D3"
  testimonial-popover:
    background: "#FFFFFF"
    radius: "12px"
    padding: "16px"
    shadow: "rgba(19, 19, 22, 0.7) 0px 1px 5px -4px, rgba(34, 42, 53, 0.08) 0px 0px 0px 1px, rgba(34, 42, 53, 0.05) 0px 4px 8px 0px"
---
# Structured Light Scheduler

Source: https://cal.com/

## Overview
This is a light-mode-default, editorial-technical system: flat off-white canvas, black-ink type, and a visible drafting-frame motif (corner plus-marks, hairline crop borders) that signals precision tooling rather than marketing gloss. The aesthetic sits closest to Swiss/International rationalism crossed with a modern SaaS product-first style — Cal Sans display type carries all headline voice, single-color line icons carry all iconography, and the product itself (a live scheduling widget) is the hero image rather than an illustration or photograph. Surfaces are white cards floating on a warm-gray page field; there is no gradient-hero, no dark mode, no glass. Color is almost entirely withheld — ink, gray, white — so the one saturated element (a Google-logo-colored button, a blue focus ring) reads instantly.

## Composition
The first screen is a bordered "canvas" — a full-bleed rectangle inset from the viewport edge with corner crosshair marks — containing a two-column hero: display headline + subcopy + stacked CTAs on the left, a fully rendered live booking-widget card on the right. Below the fold, sections repeat a strict rhythm: centered eyebrow pill → centered display headline → centered subcopy → centered CTA pair → a content grid, each band separated by full-width hairline dividers (also corner-crossed). The three-step "how it works" band, the 2×2 "and so much more" icon grid, the logo/app-sync band, the testimonial wall, and the FAQ accordion all follow this same header-then-grid template — a deliberate single rhythm rather than varied per-section layouts, trading visual surprise for legibility and reuse. Density is generous (96px-scale section padding) but card interiors are tight (12px internal gaps), so the page reads spacious at the macro level and dense at the component level.

## Colors
Background is a flat, warm off-white, `#F4F4F4` (~70% of declared area, confirmed by the ~74% #F0F0F0 pixel-field reading) — this is the page surface, not a card. Card and popover surfaces sit on pure `#FFFFFF` (~28% declared, ~22% pixel field), giving a two-step light elevation system (page slightly gray, card pure white) instead of shadows doing the elevation work alone. Text ink is near-black `#141414`/`#000000` for headlines and primary labels, stepping down to `#242424` for secondary emphasis and `#898989` for tertiary/muted body copy and captions — a three-stop gray ramp doing all hierarchy work with zero hue. Borders and dividers use `#767676` (hairline dividers, crosshair marks) and `#141414` (card outlines needing more definition). The only saturated color in the entire system is functional: `#3C81F5` as a focus ring token (`--sj-tw-ring-color`) and the native palette of third-party logos (Zoom blue, Zapier orange, Slack purple, HubSpot orange) inside the integrations grid — color is rationed to "this is clickable/focused" and "this is a recognizable brand mark," never to decoration.

## Typography
Cal Sans at 600 weight carries every display and headline role — 64px for the hero display line, 48px for section headlines — both at tight 1.1 line-height, giving short, punchy, left- or center-aligned headline blocks rather than long wrapped lines. Body and UI text drop to Cal Sans UI Variable Light at 300 weight: 16px for reading paragraphs (color `#898989`), 14px for tighter component copy, and 18px with -0.2px tracking for label-weight lines (step numbers, card titles). Inter appears as a secondary UI sans in dense functional contexts; Matter Medium/Regular and an incidental Times New Roman are present as accent/legacy families but do not carry any primary hierarchy — treat Cal Sans (display) + Cal Sans UI Variable Light (body/label) as the working pair.

## Layout
Content is framed inside a bordered canvas container rather than a bare max-width column — visible corner plus-marks at approximately every section boundary reinforce a "cropped artboard" feel. Grids observed: a 2-column, 4-item grid at 12px gap with equal ~49/49 split (paired feature tiles); a 4-column, 4-item grid at 24px gap with equal ~23/23/23/23 split (the icon-tile row, "and so much more"); a 3-column, 3-item grid at 12px gap with equal ~33/33/33 split (the three-step how-it-works cards). Every grid observed is uniform-span — no bento asymmetry, no masonry — reinforcing the rational, evenly-metered feel; row composition reads as [3 equal] for the step cards, [2 equal | 2 equal] for paired panels, and [4 equal | 4 equal] for the icon grid. Radii scale from 4px (tags) through 8px/12px (controls, cards) up to 29px on the largest hero frame and 100px on pill buttons — a small, disciplined radius set, not a continuous curve.

## Components
- **Navbar**: fixed top band, ~64px tall, full-bleed within the outer canvas border. Contains wordmark at left ("Cal.com" set in bold sans), a right-aligned cluster of a plain-text "Sign in" link, a solid primary CTA pill, and a hamburger/menu glyph. No secondary icon buttons. CTA spec: `#141414` fill, white text, ~8px radius, chevron-right suffix icon, ~36–40px height.
- **Hero primary CTA ("Sign up with Google")**: the single most emphasized action on the first screen — a full-width, solid near-black `#141414` filled button with white text, an inset Google "G" mark at left, 8px radius (slightly-rounded), ~48px height. This is the primary; the paired button beneath it is a lighter-weight secondary (white/near-white fill, thin `#767676`-toned border, same 8px radius, chevron suffix) offered as the alternate signup path — not a competing primary.
- **Nav/section CTA pill pairs ("Get started" / "Book a demo")**: repeated at the top of nearly every content band. Primary member is solid `#141414`, white text, fully-rounded 100px pill, chevron-right suffix, ~40px height; secondary member is white-fill, `#767676` hairline border, same pill radius, same chevron suffix — always positioned immediately to the right of the primary.
- **Booking-widget hero card**: sits right-of-headline on the first screen. White surface, ~29px radius outer frame, thin `#D3D3D3`-toned border. Internal anatomy top-to-bottom: small circular avatar + name label, bold heading line, one line of muted description copy, a duration-chip row (four pill/tab options, one active in a darker fill), a video/location row with icon, a timezone selector row with chevron, then a full month calendar grid with select dates carrying a darker `#141414`-toned fill (selected day) and small availability dot indicators beneath open days.
- **Numbered step cards** (how-it-works triptych): ×3 in a row, equal width. White fill, ~12px radius, thin `#E5E7EB` border, ~24px padding, shadow `rgba(36, 36, 36, 0.7) 0px 1px 5px -4px, rgba(36, 36, 36, 0.05) 0px 4px 8px 0px`. Internal anatomy: small gray rounded-square numeral badge ("01"/"02"/"03") top-left, bold headline label beneath, one line of muted body copy, then a bottom-anchored product-UI illustration (concentric-circle calendar-sync diagram, an availability-toggle list with time-range inputs, or a two-avatar video-call mockup) occupying roughly the bottom half of the card.
- **Feature/benefit panels** (paired 2-up cards, e.g. booker-experience / no-show-reduction): ×2 side by side. White fill, same 12px-radius/border/shadow language as step cards, larger internal padding. Internal anatomy: bold headline, muted description paragraph, then a bottom product-screenshot mockup — a weekly calendar-overlay view with colored event blocks, or a notification-toast card ("Booking rescheduled"-style) with an avatar-badge and timestamp.
- **Icon-tile grid ("and so much more")**: 4-column × 2-row grid (8 items total), 24px gap, equal spans. Each tile: white fill, 8px-radius rounded-square icon container holding a single-stroke line icon, centered, with a bold short label beneath — no body copy, no border visible beyond the icon container itself.
- **Integrations/app-sync band**: single large white card, 12px-ish radius, generous padding. Internal anatomy: eyebrow pill label top-left, bold two-line headline, muted subcopy, primary+secondary CTA pair, then a 4-column × 2-row logo grid (8 marks) separated by thin cross-hatch dividers, each cell holding one full-color third-party app icon (Teams, Zoom, Zapier, Slack, HubSpot, etc.) at consistent icon scale.
- **Testimonial wall**: freeform stacked/overlapping card cluster (masonry-like, irregular card heights), each card white-filled with 12px radius and the popover shadow (`rgba(19, 19, 22, 0.7) 0px 1px 5px -4px, rgba(34, 42, 53, 0.08) 0px 0px 0px 1px, rgba(34, 42, 53, 0.05) 0px 4px 8px 0px`). Internal anatomy per card: small circular avatar + name + handle/role line at top, quoted body copy beneath in muted ink, an inline hyperlink occasionally in `#0000EE`. A "Show more" pill control sits centered beneath the cluster.
- **FAQ accordion**: single-column list, full content-width, each row a plain text question with a trailing plus/cross toggle icon and a thin bottom hairline divider; answer copy expands in muted body-default weight. No card chrome — divider-only separation.
- **Trust badge / certification strip**: horizontal row of small monochrome circular seal icons (ISO, SOC 2, HIPAA-style marks) beside a locale-selector chip and a status-pill ("systems operational" style with a small green dot) in the footer.
- **Footer**: full-bleed band on the page background (not a card). Wordmark + legal line top-left, certification seal row, mission statement line, language selector + status chip, then a "Downloads" row of pill-shaped platform badges (rounded ~8px, icon + label, thin border), followed by two review-badge tiles (star rating + platform mark) and a multi-column plain-text link list beneath.

## Graphics & Effects
The only gradient in evidence is a soft radial scrim, `radial-gradient(50% 50%, rgba(255, 255, 255, 0) 87.1499%, rgb(255, 255, 255) 100%)`, applied to specific media elements (an award-badge collage strip near the footer and similar small illustrative clusters) to fade their edges into the white card — it covers only that element's bounding box, never the page or hero background. There is no full-screen gradient anywhere; the hero stays entirely on the flat `#F4F4F4`/white palette. A crosshair/plus-mark motif at section-boundary corners functions as a recurring graphic texture — a drafting/blueprint cue rather than noise or grain. Shadows are soft and low-elevation throughout: card-level `rgba(36, 36, 36, 0.7) 0px 1px 5px -4px, rgba(36, 36, 36, 0.05) 0px 4px 8px 0px` for step/feature cards, and a slightly cooler variant `rgba(19, 19, 22, 0.7) 0px 1px 5px -4px, rgba(34, 42, 53, 0.08) 0px 0px 0px 1px, rgba(34, 42, 53, 0.05) 0px 4px 8px 0px` for floating popovers/testimonials — both are barely-there, close, tight-radius shadows, never deep or diffuse. An inset highlight, `rgba(0, 0, 0, 0.16) 0px 1px 1.9px 0px inset`, gives pressed/input-style elements a subtle recessed edge.

## Motion
Motion is utility-driven, not spectacle-driven: framer-motion powers scroll-triggered reveals and interactive widget states (calendar date selection, accordion expand/collapse) rather than any looping decorative animation. Keyframe sets present are functional — a loading-spinner rotation (`__framer-loading-spin`) for async states, `pulse` for skeleton/availability-dot loading affordances, and small internal component keyframes (`sp-k-eyOShd`, `sp-k-iOHdLQ`) tied to individual widget transitions. Expect short, snappy, ease-out transitions on hover/focus states (button fills darkening, card shadows lifting slightly) rather than spring/overshoot; nothing in the evidence supports parallax, mesh-gradient motion, or video backgrounds.

## Guardrails
- Never introduce a dark surface or gradient-mesh hero — the page is light-mode-default and color-withheld; any saturation must come from a logo mark or a single focus-ring blue, not a background treatment.
- Do not give the hero a decorative illustration — its media slot is a functional, fully-detailed product-widget screenshot (calendar + avatar + duration chips), not abstract art.
- Keep all grids uniform-span (equal-width tiles) unless rebuilding the testimonial wall specifically, which is the one irregular/stacked layout in the system.
- Do not upsize the radial scrim gradient beyond its small media element — it is a corner/edge fade on badges and illustrations, never a full-bleed background wash.
- Preserve the three-stop gray text ramp (`#141414` / `#242424` / `#898989`) as the only hierarchy mechanism in body copy — do not introduce hue-based text hierarchy.
- Keep card shadows tight and low-elevation (1–8px blur ranges as specified); avoid deep, diffuse, or colored shadows that would read as elevated/floating beyond this system's restrained depth.
