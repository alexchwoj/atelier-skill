---
version: "1"
name: "Vermillion Editorial Grid"
description: "A white-and-black editorial system that opens with a three-panel photographic hero, drops into a near-black trust band, and threads an italic serif accent with one rationed vermillion fill through an otherwise monochrome grid."
colors:
  background: "#FFFFFF"
  background-dark: "#000000"
  background-navy: "#0A172C"
  surface-light: "#F5F7FA"
  text-primary: "#000000"
  text-inverse: "#FFFFFF"
  text-secondary: "#F5F7FA"
  accent-vermillion: "#DD1D00"
  border-hairline: "#F5FFFF"
typography:
  display-lg:
    fontFamily: "Inter Variable"
    fontSize: "72px"
    fontWeight: 400
    lineHeight: "1"
    letterSpacing: "-2.9px"
  headline-md:
    fontFamily: "Inter Variable"
    fontSize: "80px"
    fontWeight: 400
    lineHeight: "1"
    letterSpacing: "-3.2px"
  body-md:
    fontFamily: "Inter Variable"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.56"
  label-md:
    fontFamily: "Inter Variable"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "1"
    letterSpacing: "-0.4px"
  body-default:
    fontFamily: "Inter Variable"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
  accent-serif:
    fontFamily: "Instrument Serif"
    fontStyle: "italic"
    role: "italic serif interruption on headline clauses and quote marks"
  accent-mono-legacy:
    fontFamily: "Times New Roman"
    role: "incidental serif fallback in body copy blocks"
spacing:
  base: "8px"
  gap: "24px"
  gap-tight: "16px"
  gap-hairline: "3px"
  gap-loose: "32px"
  section-padding: "120px"
  content-max-width: "120px"
rounded:
  control: "8px"
  control-lg: "20px"
  card: "24px"
  pill: "384px"
  pill-lg: "405px"
components:
  navbar-cta:
    background: "#000000"
    text-color: "#FFFFFF"
    radius: "12px"
    height: "40px"
  button-primary:
    background: "#DD1D00"
    text-color: "#FFFFFF"
    radius: "384px"
    height: "40px"
    padding: "0px 24px"
  button-nav-link:
    background: "transparent"
    text-color: "#000000"
    radius: "0px"
    height: "80px"
    padding: "0px 16px"
  button-outline-secondary:
    background: "transparent"
    text-color: "#000000"
    radius: "384px"
    height: "40px"
    border: "1px solid #000000"
  button-text-link:
    background: "transparent"
    text-color: "#000000"
    radius: "0px"
    height: "20px"
    padding: "2.8px 0px"
  card-media-panel:
    background: "transparent"
    radius: "0px"
    padding: "0px"
    anatomy: "media-top-bleed + lower-third text overlay"
  card-industry-feature:
    background: "linear-gradient(120deg, #1a3a5c 0%, #DD1D00 120%)"
    radius: "24px"
    padding: "32px"
    anatomy: "heading + body + tag row + device screenshot"
  card-stat-panel:
    background: "#F5F7FA"
    radius: "8px"
    padding: "24px"
    anatomy: "oversized vermillion numeral + label, 3-up divided row"
  card-testimonial:
    background: "linear-gradient(rgba(0,0,0,0.3) 30%, rgba(102,102,102,0.3) 80%)"
    radius: "8px"
    padding: "24px"
    anatomy: "photo-bleed background + serif italic pull-quote + attribution body"
  card-badge-strip:
    background: "rgba(255,255,255,0.08)"
    radius: "20px"
    padding: "16px"
    anatomy: "logo row, borderless"
---
# Vermillion Editorial Grid
Source: https://www.brandvm.com/

## Overview
This is a light-mode-default editorial system built on Inter Variable's tight, negative-tracked display cuts, interrupted everywhere by an italic serif accent (Instrument Serif) that carries the emotional register of every headline. The base register is stark: pure white surfaces (`#FFFFFF`), pure black ink (`#000000`), and one rationed vermillion (`#DD1D00`) that appears only on primary actions and numerals. The composition alternates between this white-paper register and full-bleed near-black bands with photographic and gradient-lit cards — a two-register rhythm (paper / dark-stage) rather than a single dark-mode or single light-mode identity. It reads as Swiss-influenced grid discipline (strict columns, generous 120px section padding, hairline dividers) crossed with an editorial-maximalist typographic voice (oversized serif italics, mixed serif/sans headline clauses).

## Composition
The first screen is a three-panel photographic triptych directly under the navbar — no single hero image, but three roughly equal vertical bands (mockup-and-object still life / lifestyle photo / laptop screenshot) with headline copy anchored bottom-left over a dark gradient scrim, and a secondary text block on white-on-photo at right. Below this, the page drops to a near-black band holding a two-column trust composition: headline block at left, a 4×3 logo grid at right, with an unplaced warm blob-glow lower in the frame. It then returns to white paper for a services headline and a three-card work grid (rows of 3, uniform width, media-top with text overlaid at the bottom third). Further down, a black industries band pairs a vertical text-link list with one large asymmetric feature card (gradient-lit device mockup). The page closes on another black band: a centered headline, a full-width three-way stat strip, then a 2-up testimonial row, then a badge/logo trust strip, then a white footer. The deliberate choice is this alternating black/white banding rather than one continuous background — it segments trust-proof, work, and service content into distinct dark "stages" against a white "paper" default, rejecting a single uniform surface in favor of contrast-driven section breaks.

## Colors
White (`#FFFFFF`) and black (`#000000`) split the page almost evenly at the pixel level (~51% white, ~23% black, plus near-black tones `#181818`/`#303030` at ~6% combined) — this is not a dark-mode-default system; it's a bisected paper/stage system. `#F5F7FA` serves as the light surface for elevated panels sitting on white (the stat strip). Vermillion `#DD1D00` is rationed tightly: primary buttons, one word or clause per headline, and the oversized proof numerals — never a background fill. Navy (`#0A172C`) appears as a declared background token for select dark panels distinct from true black. Photography and gradient-lit device mockups carry all remaining saturation (blues, ambers) — the palette itself stays achromatic so imagery reads as the color event.

## Typography
Two Inter Variable display cuts anchor headlines: 72px at -2.9px tracking and 80px at -3.2px tracking, both weight 400 and lh 1 — tight, cinematic, ungenerous line-height by design. Instrument Serif italic interrupts these headlines on a short clause (typically two to four words, sized to match or exceed its sans neighbors) — this is the signature move, repeated in nearly every section headline and again inside testimonial pull-quotes. Body copy sits at 15–16px/400 with loose 1.5–1.56 line-height for legibility against the tight display type. Labels (eyebrows, tags) use 18px/400 at -0.4px tracking, uppercase-styled. A legacy Times New Roman appears incidentally in longer body paragraphs.

## Layout
Content is capped at a 1580px max-width with 120px section padding — a generous editorial gutter. The primary card grid is 3 columns with 24px gap; secondary grids run 3 columns at 20px gap. The measured work-card grid is genuinely uniform (three equal-width cards per row, not bento spans), so despite the varied imagery this is a uniform card grid, not bento — asymmetry is reserved for the single large industries feature card sitting beside a plain text list, and for the triptych hero which is three unequal-feeling but structurally equal panels. Radii swing from sharp 0px on nav items and work cards to a soft 8px on stat panels, 20–24px on feature cards, and full 384–405px pills on primary buttons — a deliberate split between sharp editorial cards and soft pill controls.

## Components
- **Navbar** — edge-to-edge square bar, 80px tall, full 1920px viewport width, 0px radius on all four corners (a true full-bleed flat bar, not inset or capsule), sticky, `#FFFFFF` fill. Holds a wordmark/logo at left, roughly six text nav items (some with chevron sub-menus) at center-right using the 80px-tall borderless nav-link style, and one solid CTA pill at far right (`#000000` fill, `#FFFFFF` text, 12px radius, 40px height).
- **Button — primary (hero)** — the vermillion pill seen under the hero headline is the observed primary: solid `#DD1D00` fill, `#FFFFFF` text, full pill radius (384px), 40px height, 0px/24px padding. This is the highest-contrast, most saturated element on the first screen and is reused as the primary CTA in the work section and testimonial band.
- **Button — outline secondary** — transparent fill, black text, thin black border, same 384px pill radius and 40px height, paired immediately beside the primary pill (hero, work section) as the lower-emphasis companion action.
- **Button — nav text link** — transparent, black text, 0px radius, full 80px nav height, used only inside the navbar row.
- **Button — text link (small)** — transparent, black text, 0px radius, 20px height, tight 2.8px vertical padding — used for inline "see more" style links in dense copy blocks.
- **Card family — triptych hero panels** — ×3 side by side on the first screen, transparent/0px-radius containers, full-bleed photographic or object-still media filling the whole panel, with a bottom scrim (`linear-gradient(rgba(0,0,0,0.72), rgba(0,0,0,0) 50%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.92))`) and headline/body text anchored in the lower third.
- **Logo grid — trust strip** — 4 columns × 3 rows of individual dark-chip logo tiles (`rgba` glass-dark fill, ~20px radius) sitting beside a headline-and-body text block; an award-badge row of 3 marks sits beneath.
- **Card family — work grid** — 3 uniform cards per row (rows of [3]), transparent/0px-radius, each with a full media-top-bleed image, a floating row of pill tag chips (Branding/Web Design/etc., dark translucent fill, small pill radius) across the top edge, and an italic serif project name plus scrim overlay at the bottom — anatomy matches the measured media-top-bleed + text row structure.
- **Card — industries feature (asymmetric)** — one large card beside a plain vertical text-link list (not a card grid at this point): gradient fill `linear-gradient(120deg, ...)` blue-to-vermillion, ~24px radius, containing a heading, body paragraph, a wrapped row of small pill tags, a corner arrow-icon button, and a large device-screenshot mockup bleeding off the bottom-right — the richest single-card anatomy on the page.
- **Stat strip** — one wide `#F5F7FA` panel, 8px radius, divided into 3 equal columns by hairline vertical rules, each holding an oversized vermillion italic-serif numeral over a small black label — the numeral is roughly 4–5× the label's point size.
- **Card family — testimonials** — ×2 side by side, background is a portrait photo under gradient scrim (`linear-gradient(rgba(0,0,0,0.3) 30%, rgba(102,102,102,0.3) 80%)`), 8px radius, containing an italic serif pull-quote at top and a smaller sans attribution/body paragraph beneath — rows read [100 | 79] per the measured composition.
- **Badge/logo trust strip (footer band)** — a rounded dark panel holding a 3×2 logo grid plus a horizontal row of 5–6 certification/award badges, sitting just above the footer.
- **Footer** — `#FFFFFF` background, four-column link layout (Quick Links / Services / Company / Follow Us) plus a social-icon row and a four-location address grid at the bottom, separated by a hairline rule; total of roughly 33 links.

## Graphics & Effects
- Hero triptych scrim (largest gradient, ~9.5% of page): `linear-gradient(rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.92))` — applied only over the three hero media panels to hold headline/body legibility, not as a page background.
- Testimonial scrim (~5.9% of page): `linear-gradient(rgba(0, 0, 0, 0.3) 30%, rgba(102, 102, 102, 0.3) 80%)` — sits on the two testimonial photo cards only.
- Smaller corner/edge washes (0.7–1.7% each) — `linear-gradient(color(display-p3 0 0 0), rgba(0,0,0,0))`, `linear-gradient(120deg, rgba(0,0,0,0.4) 35%, rgba(0,0,0,0) 83%)`, `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.48))` — used as localized darkening on isolated media elements (device mockup edges, feature card corners), never full-bleed.
- A soft warm blob-glow (amber/orange) sits low in the trust-band's black frame — an out-of-focus radial light wash, decorative rather than functional.
- Live surfaces: four video elements substitute for what would otherwise be static photography in the hero and testimonial panels — treat as static gradient-scrim images in a rebuild.
- Glass/inset shadows on dark chip surfaces: `color(srgb 0.958882 0.969006 0.981757 / 0.08) 0px 0px 0px 1px inset`, `rgba(242,242,242,0.5) 0px 0px 40px 0px inset`, `rgb(153,153,153) 0px 0px 0px 1.27px inset` — used on the logo-grid tiles and badge panels to give a faint inner rim without a visible drop shadow.
- Backdrop blurs (`blur(24px)`, `blur(16px)`, `blur(10px)`, `blur(5px)`) apply to the dark glass chip surfaces in the trust strip and badge panel, producing a frosted, glassmorphic tile over the ambient blob-glow background.

## Motion
Transitions are slow and deliberate rather than snappy: color/border/background shifts run at `0.735s` with a shared custom curve `cubic-bezier(0.64, 0.05, 0, 1)` — a decelerating ease used consistently across hover states. Text-decoration-color on inline links animates faster at `0.24s` on the same curve for underline reveals. Transform-based hover (card lift, icon shift) uses the same `0.735s cubic-bezier(0.64, 0.05, 0, 1)`. A `spin` keyframe drives loading/rotating iconography. Scroll-triggered reveals and pinned/staggered section entrances are built with GSAP + ScrollTrigger, consistent with the section-by-section fade/rise choreography visible between bands.

## Guardrails
- Never fill the full hero viewport with the scrim gradient — it belongs only on the three triptych media panels, each scrimmed independently.
- Keep the primary CTA a solid vermillion pill (`#DD1D00`, 384px radius); never substitute the black navbar CTA or the outline button for it.
- Preserve the black/white alternating section rhythm — do not flatten the page to one continuous background color.
- Keep work-grid cards uniform-width (3-up rows); do not convert them into bento/mixed-span cards — asymmetry belongs only to the industries feature card.
- Reserve Instrument Serif italic for short two-to-four-word clauses inside headlines and quotes — never set full paragraphs in it.
- Keep card and nav corners sharp (0px) distinct from the full-pill (384–405px) buttons; don't average the two into a mid-radius system.
