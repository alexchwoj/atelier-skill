---
version: "1"
name: "Warm-paper catalog light"
description: "Light, editorial-minimalist system on a warm parchment canvas, with a single rationed burnt-orange accent, tight dense sans display type, and a live simulation panel as its hero centerpiece."
colors:
  background: "#F6F3EC"
  surface: "#FFFFFF"
  text-primary: "#211D18"
  text-secondary: "#5C5346"
  text-muted: "#79715F"
  accent: "#C2410C"
  accent-alt: "#FF7A45"
  info: "#A9741F"
  success: "#3D8F5F"
  border: "#ECE7DD"
  border-alt: "#D3E7DA"
typography:
  display-lg:
    fontFamily: "ui-sans-serif"
    fontSize: "46px"
    fontWeight: 600
    lineHeight: "1.08"
    letterSpacing: "-1.1px"
  headline-md:
    fontFamily: "ui-sans-serif"
    fontSize: "28px"
    fontWeight: 600
    lineHeight: "1.45"
    letterSpacing: "-0.7px"
  body-md:
    fontFamily: "ui-sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.5"
  label-md:
    fontFamily: "ui-sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: "1.35"
  body-sm:
    fontFamily: "ui-sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.5"
spacing:
  base: "4px"
  gap: "20px"
  section-padding: "96px"
rounded:
  sharp: "2px"
  control: "5px"
  button: "9px"
  card: "16px"
  pill: "9999px"
components:
  button-primary:
    background: "#211D18"
    text-color: "#FFFFFF"
    radius: "9px"
    height: "40px"
    padding: "0px 16px"
  button-outline:
    background: "#FFFFFF"
    text-color: "#5C5346"
    radius: "9px"
    height: "23px"
    padding: "0px 10px"
    border: "1px solid rgb(236, 231, 221)"
    shadow: "rgba(38, 50, 63, 0.08) 0px 1px 2px 0px"
  chip-pill:
    background: "transparent"
    text-color: "#5C5346"
    radius: "9999px"
    height: "22px"
    padding: "4px 10px"
    border: "1px solid rgba(0, 0, 0, 0)"
  card-component:
    background: "#FFFFFF"
    radius: "16px"
    padding: "0px"
    shadow: "rgba(38, 50, 63, 0.05) 0px 1px 2px 0px"
  card-pillar:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  card-tier-free:
    background: "#F3EFE7"
    radius: "16px"
    padding: "32px"
    border: "none"
  card-tier-pro:
    background: "#FFF1EA"
    radius: "16px"
    padding: "32px"
    border: "1px solid #FF7A45"
  navbar:
    background: "rgba(255, 255, 255, 0.8)"
    backdrop-filter: "blur(12px)"
    height: "57px"
    radius: "0px"
---
# Warm-paper catalog light
Source: https://future-of-work-with-ai.vercel.app/

## Overview
This is a light, paper-toned editorial system built for cataloging interface primitives: a warm off-white canvas (`#F6F3EC`) instead of pure white, ink-brown text instead of pure black, and one saturated burnt-orange accent (`#C2410C`/`#FF7A45`) rationed to headline emphasis, small pills, and live-data highlights. The dominant pixel field (~55% `#F0F0F0`-adjacent canvas, ~38% white cards) confirms a light, low-saturation, content-forward register — closer to Swiss/editorial minimalism than to marketing gloss. A live agent-simulation canvas sits inside the hero as the system's signature device, framed like a monitoring console rather than a decorative graphic.

## Composition
The first screen splits asymmetrically: a left text column (headline, body, two buttons, four small status pills) against a right-side bounded panel holding a live simulation with its own micro-header bar. Below the fold, a four-column pillar band (numbered 01–04) explains the system's principles in short label + paragraph units. A dense component-gallery grid follows — three-per-row cards, four rows deep, the section's clear center of gravity — then a two-up tier comparison (free vs. pro, each in its own tinted card), a single-row email-capture band, and a four-column footer. The deliberate choice is density-through-repetition: many small uniform cards over few large hero visuals, rejecting the alternative of one dominant illustrative hero image — the product is the catalog, not a single showpiece.

## Colors
`#F6F3EC` (`--color-canvas`) is the page background, warm and slightly yellow rather than neutral gray, covering the majority of non-card area. `#FFFFFF` (`--color-surface`) carries all cards, the navbar, and the footer, at ~38% of pixels — the second-largest field, establishing a two-tone paper-and-card system. Text ink runs three deep: `#211D18` primary, `#5C5346` secondary, `#79715F` muted/tertiary — all warm near-blacks, never true gray. `#C2410C` and `#FF7A45` are the accent, appearing only on the second clause of the headline, a live-status dot, numeral labels (01–04), and the "PRO" badge — never as a background fill of any large area. Secondary chip hues — a violet/blue label, a muted olive-gold, a soft green — mark small taxonomic pills (counts, states, license) and stay confined to text-on-tint chips rather than surfaces. Borders are hairline and warm: `#ECE7DD` general, `#D3E7DA` on a green-tinted variant. Large surfaces (hero, footer, hardest structural elements) are deliberately left uncolored — flat white or canvas — so the orange accent reads as a signal, not a theme.

## Typography
A single sans-serif family (`ui-sans-serif`) carries the entire system — no serif or mono accent is present; the identity is built by weight and negative tracking, not by mixing families. Display headlines sit at 46px/600, line-height 1.08, tracking -1.1px, tight enough to feel dense and print-like. Mid-level headings step down to 28px/600 at a looser 1.45 line-height. Body copy is 15px/400 at 1.5 (with a secondary 14px/400 reading in denser card contexts), and labels — eyebrows, pill text, numeral captions — share the body size at 15px/600, distinguished from body purely by weight and often uppercase tracking. Hierarchy is entirely weight- and color-driven: primary ink for headlines and body, `#5C5346` for supporting copy, `#79715F` for the faintest captions.

## Layout
Content is capped at a 1140px max-width, centered, with a 20px grid gap governing the primary component gallery. That gallery runs a strict 3-column grid, 12 items across 4 equal rows (each row's three cards at ~32/32/32% width) — a uniform card-grid pattern, not bento or masonry; every card occupies the same footprint regardless of content richness. The four-pillar principles band is a flatter 4-up row with no card chrome, just text stacked in columns. The tier-comparison section drops to 2 columns at a wider 48px gap, two items at roughly 50/45% width — an asymmetric near-half split. The email-capture band uses a 2-column, 24px-gap layout at ~46/46% (copy vs. form). Spacing throughout favors small, exact increments (20/8/4/2/6/12px) rather than a loose 8pt scale, giving the layout a tight, engineered density consistent with a component catalog rather than a spacious marketing page.

## Components
- **Navbar** — edge-to-edge square bar, full 100% viewport width (0px inset either side), 57px tall, corner radii 0/0/0/0 (perfectly square, no rounding on any corner), sticky, fill `rgba(255, 255, 255, 0.8)` with `backdrop-filter: blur(12px)` — a glass bar over scrolled content. Holds a mark + wordmark at left, 5 nav items total (three text links plus a theme-toggle icon button and implicit brand), no visible CTA button distinct from the link set.
- **Button — primary (hero)** — the solid near-black pill-cornered rectangle under the headline is the hero's primary CTA: observed fill `#211D18`, white text, ~9px corner radius (slightly-rounded, not pill), ~40px height, paired with a trailing arrow glyph. This is the single most emphasized control on the first screen.
- **Button — secondary (hero)** — a white/near-white outline-style rectangle beside the primary, same slightly-rounded corner family, lower visual weight, no fill, sits immediately right of the primary button.
- **Button — outline utility** — measured near page end: `#FFFFFF` fill, `#5C5346` text, 9px radius, 23px height, 1px solid `rgb(236, 231, 221)` border, resting shadow `rgba(38, 50, 63, 0.08) 0px 1px 2px 0px` — a compact secondary control (footer/link-style), not the hero button.
- **Chip / pill (status tags)** — transparent fill, `#5C5346` text, full 9999px pill radius, 22px height, 4px/10px padding, 1px transparent border; used ×4 under the hero copy to show taxonomic facts (counts, mode, license) and again as small state labels on gallery cards ("PRO" badge, live-status dot label).
- **Card — component gallery (×12)** — appears in the mid-page gallery band, arranged 3-per-row across 4 rows (rows at 32/32/32% width each, uniform card grid, not bento/masonry). Surface: `#FFFFFF`, 16px radius, 0px padding (edge-bleed media), shadow `rgba(38, 50, 63, 0.05) 0px 1px 2px 0px`. Anatomy top-to-bottom: a full-bleed media region (illustrative canvas render, mocked data panel, or UI snapshot) covering roughly the top half to two-thirds of the card, then below the media a heading with an inline "PRO" badge on premium items, then one line of muted body description. Some cards carry small internal chrome (a mini status bar with a colored dot, a progress table, a checklist of task rows) rendered inside the media region itself.
- **Card — pillar (principles band, ×4)** — appears directly below the hero in a plain 4-up row, transparent background, 0px radius, no padding chrome. Anatomy: a small orange two-digit numeral label, a bold short heading, then 2–3 lines of muted body copy — no card border or shadow, distinguished purely by column position.
- **Card — tier comparison (×2)** — appears in a 2-column band beneath the gallery. Free-tier card: `#F3EFE7` fill, 16px radius, small uppercase eyebrow chip, bold heading, muted paragraph. Pro-tier card: `#FFF1EA` fill, 16px radius, 1px orange-toned border, an orange filled eyebrow badge, bold heading, muted paragraph — the pro card is visually promoted via its warmer tint and bordered edge against the plain free card.
- **Email-capture band** — single row, transparent background, orange dot + small uppercase eyebrow label, bold heading, muted supporting line to the left; to the right a white bordered input field and the same solid near-black button (`#211D18`, white text, ~9px radius) as the hero primary, reused here as the form's submit control.
- **Footer** — white background, 7 links arranged in three labeled columns beside a brand mark and short descriptive line; hairline top border, plain text links with no button chrome, closing copyright row beneath.

## Graphics & Effects
The hero's right-hand panel is a live agent-simulation canvas element (rendered via canvas, not CSS) styled as a monitoring console: a thin micro-header bar above it carries a status dot, small metadata text, and a "live" tag, and the panel itself sits on the `#FFFFFF` card surface at 16px radius. A subtle repeating dot-grid texture — `radial-gradient(rgb(222, 215, 202) 1px, rgba(0, 0, 0, 0) 1px)` — is visible faintly across roughly 1% of total page area, most likely inside one of the flowchart/canvas-style gallery card media regions, giving it a graph-paper feel; treat it as a small textured card background, not a page-wide pattern. A second radial wash, `radial-gradient(120% 90% at 50% 0%, color(srgb 0.954824 0.918902 0.880471) 0%, rgb(243, 239, 231) 70%)`, covers roughly 1% of the page and reads as a soft top-down light falloff behind a single card or panel — not the page background. Card elevation throughout is nearly flat: shadows are whisper-thin, `rgba(38, 50, 63, 0.05) 0px 1px 2px 0px` on gallery cards and a slightly stronger `rgba(38, 50, 63, 0.08) 0px 1px 2px 0px` on the outline button — elevation is a hint, not a dramatic lift. The live canvas should be rebuilt with a static illustrative stand-in (a frozen swarm/particle scatter) when motion isn't available.

## Motion
Interaction transitions are fast and utilitarian: color and background-color shifts run on `0.15s cubic-bezier(0.4, 0, 0.2, 1)`, matching transform/scale/rotate changes on the same 0.15s curve — snappy micro-interactions on hover/press states. Entrance motion is slightly slower and eased outward: opacity/transform combos run at `0.36s` on `cubic-bezier(0.16, 1, 0.3, 1)`, a pronounced ease-out suited to cards and panels settling into place on scroll or reveal, alongside a plain `opacity 0.25s ease` fade for simpler toggles. Named keyframes — spin, fade-in, fade-up, pop-in, eq-bounce, shimmer — cover a loading spinner, scroll-in reveals, a bouncy pop for badges/toasts, an equalizer-style bounce (likely tied to the live-status indicators), and a shimmer for skeleton/loading placeholders. Motion overall is quick, functional, and confidence-building rather than showy — consistent with a system built to demonstrate trustworthy AI-interface behavior.

## Guardrails
- Never fill the hero background with a saturated gradient — canvas stays flat warm `#F6F3EC`/white; color is rationed to the second headline clause, pills, and the simulation panel only.
- Do not substitute the outline utility button's specs for the hero primary — the hero CTA is the solid near-black `#211D18` pill-corner button, not the white bordered 23px-tall control.
- Keep the component gallery a uniform 3-column, 4-row grid — do not convert it to bento/masonry; every card shares the same footprint.
- Preserve the navbar's true geometry: edge-to-edge, perfectly square corners (0px all sides), glass blur fill — never round it into a capsule or inset it from the viewport edge.
- Keep accent orange confined to text, pills, badges, and thin borders — never as a large fill or full-bleed panel color.
- Maintain warm-ink text tones (`#211D18`, `#5C5346`, `#79715F`) rather than neutral or cool grays; the warmth is structural to the identity.
