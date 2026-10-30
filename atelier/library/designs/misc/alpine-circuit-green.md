---
version: "1"
name: "Alpine Circuit Green"
description: "Near-black, dark-mode-default system with a rationed mint-green accent, tight display type, hairline glass chips, and a bento-style capability grid."
colors:
  background: "#000000"
  surface: "rgba(255, 255, 255, 0.05)"
  text-primary: "#F2F2F4"
  text-secondary: "#A3A3A3"
  text-tertiary: "#71717A"
  accent: "#00E68A"
  accent-bright: "#5CFFB3"
  border-hairline: "#FFFFFF"
  border-accent: "#00E78B"
typography:
  display-lg:
    fontFamily: "Geist"
    fontSize: "74px"
    fontWeight: 600
    lineHeight: "0.98"
    letterSpacing: "-2.9px"
  headline-md:
    fontFamily: "-apple-system"
    fontSize: "54px"
    fontWeight: 600
    lineHeight: "1.5"
    letterSpacing: "-2.2px"
  body-md:
    fontFamily: "Geist"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
  label-md:
    fontFamily: "-apple-system"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: "1.33"
    letterSpacing: "-0.6px"
  label-mono:
    fontFamily: "Geist Mono"
    fontSize: "13px"
    fontWeight: 500
    letterSpacing: "0.08em"
spacing:
  base: "8px"
  gap-sm: "12px"
  gap-md: "20px"
  gap-lg: "64px"
  section-padding: "96px"
  section-gap-sm: "91px"
  section-gap-lg: "298px"
  content-max-width: "298px"
rounded:
  control: "10px"
  card: "12px"
  chip: "10px"
  pill: "9999px"
  badge: "30px"
components:
  button-primary:
    background: "#00E68A"
    text-color: "#000000"
    radius: "9999px"
    height: "44px"
    border: "none"
    icon: "circular arrow-glyph in a black disc"
  button-secondary:
    background: "#000000"
    text-color: "#F2F2F4"
    radius: "9999px"
    height: "44px"
    border: "1px solid rgba(255,255,255,0.15)"
  button-nav-cta:
    background: "#00E68A"
    text-color: "#000000"
    radius: "9999px"
    height: "36px"
    border: "none"
  card-feature-glow:
    background: "linear-gradient(150deg, rgba(0, 230, 138, 0.16) 0px, rgba(255, 255, 255, 0.02) 55%)"
    radius: "12px"
    padding: "28px"
    shadow: "rgba(0, 214, 140, 0.55) 0px 30px 80px -40px"
  card-integration-chip:
    background: "rgba(255, 255, 255, 0.05)"
    radius: "10px"
    padding: "14px 20px"
    shadow: "rgba(16, 24, 40, 0.12) 0px 8px 30px -14px"
  card-panel-band:
    background: "linear-gradient(rgb(7, 7, 8), rgb(14, 14, 18), rgb(7, 7, 8))"
    radius: "0px"
    padding: "96px 0px"
  card-plain-block:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  badge-eyebrow:
    background: "rgba(255, 255, 255, 0.05)"
    text-color: "#00E68A"
    radius: "30px"
    border: "1px solid rgba(255,255,255,0.1)"
  footer:
    background: "rgba(255, 255, 255, 0.05)"
    radius: "0px"
---
# Alpine Circuit Green
Source: https://www.skylineautomationsllc.com/

## Overview
This is a dark-mode-default technical-marketing system: a near-black canvas (#000000) carrying a single mint-green accent (#00E68A) rationed across icon glyphs, an eyebrow dot, hairline borders, and one solid CTA. The aesthetic reads as engineered minimalism with a bento feature grid in its midsection — glass integration chips, gradient-glow feature cards, and full-bleed dark panel bands stacked in disciplined rhythm. Geist carries the display type at extreme tight tracking (-2.9px), giving the headline a compressed, technical authority; a faint pixel-grid texture underlies the hero for a blueprint/schematic feel.

## Composition
The first screen opens with a centered eyebrow pill, a two-line tightly-tracked headline, a short centered subhead, and a paired CTA row — then drops into a large centered hardware-device illustration floating on a dark radial glow, establishing an immediate hero-then-proof-object rhythm. Scrolling reveals a horizontal scrolling rail of two rows of integration chips (a logo strip), then a numbered capability section pairing a left text column against a right glowing feature card — this alternating text-left/card-right split is the deliberate choice, rejecting a symmetric center-stacked layout in favor of asymmetric emphasis on the illustrated card. Section gaps are generous (91px small, up to 298px between major bands), giving each band room to breathe against the black field; density stays low throughout, never more than one card-grid concept per screen.

## Colors
Background is flat #000000 dominating over 90% of the pixel field — this is a true black canvas, not a dark gray. White (#FFFFFF, ~25% declared area) carries all headline and primary-button-text weight. The accent #00E68A appears sparingly (~0.2% declared area): a status dot in the eyebrow pill, icon glyphs inside cards, card glow-shadows, hairline borders on the primary button, and the solid CTA fill — never as a background wash. Secondary text sits at #A3A3A3, tertiary/muted labels at #71717A, with #F2F2F4 as primary body ink. Borders are near-invisible hairlines (rgba white or accent at low opacity), keeping structure implied rather than drawn. Nothing else is colored — integration-brand icons (red, blue, purple logos) are the only other saturated colors on the page, appearing only inside the logo-strip chips, confirming the accent's scarcity everywhere else.

## Typography
Display headlines use Geist at 74px/600, line-height 0.98, letter-spacing -2.9px — an extremely compressed, confident display face for the hero line. A secondary headline register (-apple-system, 54px/600, ls -2.2px) handles mid-page section headings at a slightly smaller, less extreme tracking. Body copy is Geist 16px/400/1.5, sitting quietly at secondary gray. Label text (-apple-system 24px/600, ls -0.6px) marks card headings inside the feature grid. A monospace face (Geist Mono) is reserved for small uppercase eyebrow labels and numbered step markers, giving a technical/systems-log accent voice against the humanist Geist body.

## Layout
Content is capped at a 672px measure for body copy blocks, with section padding at 96px top/bottom. The integration logo strip runs as a scrolling rail, two rows deep, of pill-shaped chips. The capability section grid is 2 columns with a 64px gap (rows split ~39/56 — text column narrower than the glowing card column). Deeper mid-page, a denser feature grid runs 3 columns with 20px gaps across 10 items in an irregular row map (66/32 first row, then 32/32/32 twice, closing 32/66) — an asymmetric bento composition where the first and last rows carry a wide spanning card flanked by a narrow one, and the middle rows hold three even cards apiece. Full-width dark panel bands (0px radius, 96px vertical padding) interrupt the grid rhythm as single-column spanners between card sections. Footer runs as a dense flat link block (51 links) on a faint white-wash surface.

## Components
- **Navbar**: edge-to-edge square bar, 104px tall, spans full 1920px viewport width with 0px left/right inset, all four corners 0px radius (a flat full-bleed strip, not an inset capsule), background transparent, sticky on scroll. Contains 8 items: circular badge logo + wordmark, 4 nav labels (one with a dropdown chevron), and a solid pill CTA button on the far right.
- **Hero primary CTA**: an observed solid mint-green (#00E68A) pill button, full 9999px rounded corners, black text, with a small circular black icon-disc containing an arrow glyph docked at its right edge — sits directly under the subhead, the highest-contrast element on the first screen.
- **Hero secondary button**: a black-fill outline pill beside the primary, hairline white border, white text, same circular arrow-disc icon — a lower-emphasis discovery-call action.
- **Eyebrow badge**: pill shape (~30px radius), translucent white-wash fill (rgba(255,255,255,0.05)), hairline border, small mint status dot + mono uppercase label — sits centered above the hero headline.
- **Integration/logo chips**: ×8+ per row across 2 rows in a horizontal scrolling rail; rgba(255,255,255,0.05) fill, 10px radius, 14px/20px padding, shadow `rgba(16, 24, 40, 0.12) 0px 8px 30px -14px`; each holds a small brand-colored icon + wordmark label, inverted/translucent surface treatment.
- **Feature-glow card** (bento grid, ×10): gradient fill `linear-gradient(150deg, rgba(0, 230, 138, 0.16) 0px, rgba(255, 255, 255, 0.02) 55%)`, 12px radius, 28px padding, shadow `rgba(0, 214, 140, 0.55) 0px 30px 80px -40px`. Anatomy top-to-bottom: small icon in a bordered square chip, a thin horizontal rule, a bold headline, then supporting body text — occupies the wide card slots in the 66/32-32-32-32-32-66 row map.
- **Numbered capability row**: left-column text block pairs a mono step-number + label (e.g. two-digit index in brackets) beside a headline and body paragraph, sitting opposite the feature-glow card at a 39/56 two-column split with 64px gap.
- **Full-width dark panel band** (×3): gradient fill `linear-gradient(rgb(7,7,8), rgb(14,14,18), rgb(7,7,8))`, 0px radius, 96px vertical padding, full-bleed single-column spanner containing icon + heading + body text — used as section dividers/proof bands between grids.
- **Plain text block group** (×4, ×2 variants): transparent background, 0px radius, no padding or 96px/24px padding depending on placement; heading + icon + body-text stacks used for lighter list-style content sections.
- **Footer**: translucent rgba(255,255,255,0.05) full-width surface, 0px radius, dense 51-link flat directory beneath the last content band.

## Graphics & Effects
Two large radial gradients wash the entire page (100% coverage each): `radial-gradient(80% 50% at 50% -10%, rgba(0, 214, 140, 0.1), rgba(0,0,0,0) 60%)` glowing down from above the hero, and a mirrored, fainter one rising from the bottom `radial-gradient(60% 40% at 50% 120%, rgba(0, 214, 140, 0.06), rgba(0,0,0,0) 60%)` — together these keep the black canvas dominant while bookending it with a whisper of mint at top and bottom edges only. A smaller, denser radial `radial-gradient(60% 42% at 50% 0px, rgba(0, 230, 138, 0.18), rgba(0,0,0,0) 68%)` covers roughly 9% of the page, sitting behind the hero's device illustration to backlight it. A faint pixel-grid texture (two 1px hairline gradients, one horizontal one vertical, each ~7.7% coverage, rgba(10,10,10,0.1)) overlays the hero, reading as a subtle blueprint/schematic grid rather than a visible line pattern. A thin diagonal scrim streak (`rgba(255,255,255,0.035)` 1px lines) plays over the hardware illustration for a glass-reflection cue. Card shadows lean mint-tinted rather than neutral black (`rgba(0,214,140,0.55) 0px 30px 80px -40px`), reinforcing the glow-card language. Backdrop-filter blur/saturate combinations (`blur(20px) saturate(1.4)`, `blur(40px) saturate(1.4)`, `blur(12px)`) suggest glass panels are used on translucent overlays and possibly the navbar on scroll. Any live video or canvas element should be stood in with a static gradient/glow image matching the above values.

## Motion
Interactive color/border transitions run fast and consistent: `color, background-color, border-color, text-decoration-color, fill, stroke 0.15s cubic-bezier(0.4,0,0.2,1)` for micro state changes and a slower `0.3s` variant of the same for larger surface transitions; general property transitions use `all 0.3s cubic-bezier(0.4,0,0.2,1)`, and fades use `opacity 0.3s cubic-bezier(0.4,0,0.2,1)`. Named keyframe animations present in the system — aurora, marquee, meteor, orbit, ping, spotlight — point to a slow-drifting aurora glow behind hero content, a continuously scrolling marquee for the logo rail, occasional meteor/ping accents as ambient decoration, and a spotlight sweep for hover emphasis on glow-cards. Scrolling is smoothed via Lenis, giving section transitions a slight momentum-eased glide rather than an instant snap.

## Guardrails
- Never fill the hero background with a full-saturation gradient — keep it black with mint rationed to top/bottom radial edges and the device glow only.
- Never render the accent as a large fill; #00E68A appears only on icons, borders, shadows, dots, and the one primary CTA.
- Do not round the navbar corners or inset it — it is a flat, edge-to-edge, 0px-radius bar at 104px height.
- Keep the bento feature grid's asymmetric row map (wide-narrow / three-even / three-even / narrow-wide) — do not normalize it to uniform equal cards.
- Do not substitute the glass nav CTA's values for the hero primary button — the hero primary is the solid mint pill with black arrow-disc, not a translucent control.
- Preserve extreme tight letter-spacing (-2.9px, -2.2px) on display type; loosening it breaks the compressed technical voice.
