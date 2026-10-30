---
version: "1"
name: "Chalkboard Scheduling Grid"
description: "Light-mode, near-white system with a rounded-geometric display face, black-fill primary actions, and a plus-tick bounded canvas dividing content into bordered bands."
colors:
  background: "#F4F4F4"
  surface: "#FFFFFF"
  text-primary: "#141414"
  text-secondary: "#898989"
  text-tertiary: "#242424"
  accent: "#3C81F5"
  border: "#767676"
  border-subtle: "#E5E7EB"
  link: "#0000EE"
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
  body-sm:
    fontFamily: "Cal Sans UI Variable Light"
    fontSize: "14px"
    fontWeight: 300
    lineHeight: "1.4"
  accent-ui:
    fontFamily: "Inter"
    fontWeight: 400
  accent-medium:
    fontFamily: "Matter Medium"
    fontWeight: 500
  accent-regular:
    fontFamily: "Matter Regular"
    fontWeight: 400
  accent-quote-serif:
    fontFamily: "Times New Roman"
    fontStyle: "italic"
spacing:
  base: "4px"
  gap: "12px"
  gap-lg: "24px"
  section-padding: "24px"
rounded:
  control: "8px"
  card: "12px"
  chip: "4px"
  avatar: "29px"
  pill: "100px"
components:
  button-primary:
    background: "#141414"
    text-color: "#FFFFFF"
    radius: "100px"
    height: "44px"
    padding: "10px 24px"
  button-google-social:
    background: "#141414"
    text-color: "#FFFFFF"
    radius: "8px"
    height: "48px"
    border: "1px solid #292929"
  button-secondary-outline:
    background: "#FFFFFF"
    text-color: "#141414"
    radius: "8px"
    border: "1px solid #E1E2E3"
    height: "40px"
  nav-cta:
    background: "#141414"
    text-color: "#FFFFFF"
    radius: "8px"
    height: "36px"
    padding: "8px 12px"
  card-booking-preview:
    background: "#FFFFFF"
    radius: "12px"
    border: "1px solid #E5E7EB"
    padding: "24px"
    shadow: "rgba(19, 19, 22, 0.7) 0px 1px 5px -4px, rgba(34, 42, 53, 0.08) 0px 0px 0px 1px, rgba(34, 42, 53, 0.05) 0px 4px 8px 0px"
  card-step-numbered:
    background: "#FFFFFF"
    radius: "12px"
    border: "1px solid #E5E7EB"
    padding: "24px"
    shadow: "rgba(36, 36, 36, 0.7) 0px 1px 5px -4px, rgba(36, 36, 36, 0.05) 0px 4px 8px 0px"
  card-feature-icon:
    background: "#FFFFFF"
    radius: "12px"
    border: "1px solid #E5E7EB"
    padding: "24px"
  chip-eyebrow:
    background: "#FFFFFF"
    text-color: "#141414"
    radius: "100px"
    border: "1px solid #E1E2E3"
    padding: "4px 12px"
  toggle-track:
    background-on: "#141414"
    background-off: "#E5E7EB"
    radius: "100px"
  input-time-field:
    background: "#FFFFFF"
    border: "1px solid #D3D3D3"
    radius: "8px"
    padding: "2px 8px"
---
# Chalkboard Scheduling Grid
Source: https://cal.com/

## Overview
This is a light-mode, minimalist-leaning SaaS system built on a near-white canvas (`#F4F4F4`) rather than pure white, with white (`#FFFFFF`) cards floating on top to create surface separation through contrast rather than shadow alone. The display face is a rounded-geometric sans (Cal Sans, 600 weight) that gives headlines a soft, friendly authority, paired with a thin-weight UI face (Cal Sans UI Variable Light, 300) for body copy that keeps density low despite dense information. Structure is made visible: hairline borders (`#767676`/`#E5E7EB`) divide bands, and small corner-plus marks appear at section seams — a drafting-table motif that turns the whole page into a bounded, gridded canvas rather than a seamless scroll.

## Composition
The first screen is a centered, bordered rectangle (not full-bleed) holding a two-column hero: left is headline + subhead + stacked CTAs, right is a live-looking booking-widget card with a calendar grid. Below the fold, the rhythm alternates: a muted logo-proof strip, a three-card "how it works" numbered row, a mixed asymmetric feature band (two large explanatory panels stacked over a 4-up icon grid), an integrations showcase card with a 4×2 logo grid, a testimonial wall in an uneven masonry of quote cards, an FAQ accordion, and a dense multi-column footer with badges and a scattered "awards" grid fading to transparent at the top edge. Density increases in the middle sections (small cards, tight 12px gaps) and relaxes again in hero and footer. The deliberate choice is a bounded, inset content frame with visible corner ticks and hairline dividers — rejecting the more common full-bleed, borderless marketing-page canvas — which makes every section read as a discrete, drafted panel.

## Colors
Background is the pixel-dominant `#F4F4F4` (~70% declared area, matching the ~74% #F0F0F0 pixel reading) — an off-white, not pure white, used as the page substrate. Card surfaces sit on `#FFFFFF` (~28.7% declared area, matching the ~22% pixel reading), providing the elevation contrast. Text ink is near-black `#141414` for headings and primary labels, `#898989` for secondary/body copy, and `#242424` for a mid-tone secondary tier. Borders use `#767676` (stronger dividers) and `#E5E7EB`/`#E1E2E3` (subtle card edges). The one true accent is a blue (`#3C81F5`, from the ring-color token) rationed almost invisibly — it appears only as a focus-ring color, never as a fill; the entire visible interface is otherwise achromatic plus the black CTA fill. Logo marks and icons (Slack purple, Zoom blue, HubSpot orange, star ratings in gold/red) are the only saturated color on the page, confined to small badge and integration-icon real estate. Nothing else is colored by design — this is a monochrome-structural system that lets black-on-white contrast, not hue, carry hierarchy.

## Typography
Display headlines run Cal Sans at 64px/600/1.1 for the hero line and 48px/600/1.1 for section headlines — a rounded-terminal geometric sans that reads warm rather than corporate. Body and label text drop to Cal Sans UI Variable Light at 300 weight: 18px/1.3 with -0.2px tracking for labels (card titles, step names), 16px/1.4 in `#898989` for paragraph copy, and 14px/1.4 for tighter UI microcopy (calendar cells, form fields). Inter appears as the workhorse font for smaller interface chrome (nav, buttons, calendar numerals); Matter Regular/Medium surface in secondary marketing copy blocks. Times New Roman appears as an italic serif accent exclusively inside quoted testimonial copy — a single-family interruption used only in the wall-of-love band, never in headlines. Hierarchy is built by weight-and-size contrast (heavy 600 display vs. light 300 body) rather than color.

## Layout
Content is bounded to a centered frame (hero measures ~640px effective column width for text) rather than a full-width bleed; corner-tick marks at 24px inset mark the frame's edges. Card grids are explicit and measured: a 2-column, 4-item grid at 12px gap for compact icon-feature pairs (rows of [2][2]); a 4-column, 4-item integrations/icon grid at 24px gap, one row of four equal 23%-width tiles; and a 3-column, 3-item numbered-step grid at 12px gap, one row of three equal 33%-width cards. This reads as a uniform card grid discipline throughout — no bento-style span variation — every card in a given row is equal width. Radii scale by role: 100px pill for buttons and chip badges, 12px for cards, 8px for controls and inputs, 4px for small chips, 2px for the tightest micro-elements. Spacing steps in small, tight increments (2, 4, 8, 12, 24px) rather than large multiples, producing a compact, form-dense feel appropriate to a scheduling product.

## Components
- **Navbar**: edge-to-edge width at the very top but rendered as a bounded rectangle with visible left/right/bottom borders matching the content frame below it (not a floating capsule) — square corners, no radius, sitting flush with the hero card beneath it. Contains: wordmark logo at far left, "Sign in" text link, one primary nav CTA button (`#141414` fill, white text, ~8px radius, chevron icon, right-aligned before), and a hamburger/menu icon glyph at the far right. Item count: 4 (logo, sign-in link, CTA button, menu icon). Height approximately 64-72px.
- **Hero primary CTA — "Sign up with Google" social button**: the single most emphasized action on the first screen — an observed near-black solid fill (`#141414`) full-width rectangle, ~8px corner radius (slightly-rounded), white text, Google "G" icon at left, sitting directly under the subheadline. This is the true hero primary, distinct from any glass or outline control.
- **Hero secondary button — "Sign up with email"**: stacked directly below the primary, white/near-white fill, ~8px radius, thin border (`#E1E2E3`), black text, trailing chevron — a lower-emphasis twin beneath the solid primary.
- **Nav/section CTA pill pairs** ("Get started" + a lighter companion button): appear repeatedly mid-page (how-it-works band, integrations band, FAQ band) as a two-button cluster — solid black pill (`#141414` fill, white text, 100px/8px radius depending on section, chevron suffix) beside a white-fill outline companion button, always horizontally paired, centered under a headline.
- **Booking-widget card (hero right column)**: white surface, ~12px radius, subtle border, `padding: 24px`, shadow `rgba(19, 19, 22, 0.7) 0px 1px 5px -4px, rgba(34, 42, 53, 0.08) 0px 0px 0px 1px, rgba(34, 42, 53, 0.05) 0px 4px 8px 0px`. Top to bottom: circular avatar + name label, bold event-title heading, a body paragraph in `#898989`, a duration-chip row (four pill toggle options, one active in white with border, rest in flat gray), a video-platform label row with icon, a timezone selector row with chevron, and a full calendar month grid below with selectable date cells (some marked with a small dot indicator) and a highlighted "today" cell in solid black fill.
- **Numbered step cards (how-it-works band)**: ×3 in a row, equal-width 33%-each grid at 12px gap. White surface, 12px radius, `1px solid #E5E7EB` border, 24px padding, shadow `rgba(36, 36, 36, 0.7) 0px 1px 5px -4px, rgba(36, 36, 36, 0.05) 0px 4px 8px 0px`. Inside, top to bottom: a small numeral chip badge ("01"/"02"/"03", gray fill, 4px radius), a bold subheading, a short gray body line, and a bottom illustration/media area (concentric-circle diagram, form-field mockup, or device-frame screenshot) occupying roughly the bottom half of the card.
- **Feature/benefit panels**: 2 large stacked bordered panels, each holding a heading, short body copy, and an embedded UI screenshot fragment (calendar overlay, notification toast) bleeding past the card's right edge — asymmetric internal composition, text left/media right.
- **Icon-feature grid ("...and so much more!")**: 4-column, 4-item grid at 24px gap, one row of four, repeated for a second row of four (8 total cards, uniform width). Each card: white fill, 12px radius, bordered, centered square icon glyph on a rounded gray tile, bold label beneath — no body copy, icon+label only.
- **Integrations showcase card**: one large bounded white panel containing eyebrow chip, headline, body copy, a CTA pill pair, then a 4-column × 2-row logo grid (8 icons total) at 24px gap with thin dividing rules between cells — each cell a single colored app-logo glyph, no text.
- **Testimonial wall**: an uneven masonry/mosaic of quote cards of varying heights, each a bordered white rectangle containing an avatar circle, name label (bold), handle/role in gray, and an italic-serif-tinged quote body; one elevated card in the stack overlaps/floats above the grid with a heavier shadow, implying a chat-bubble/DM aesthetic. A "Show more" text-link control terminates the wall.
- **FAQ accordion**: single-column list of bordered rows, each a heading + plus-icon toggle at the right edge, divided by hairline `#E5E7EB` rules; preceded by the same CTA pill pair pattern (solid black "Talk to sales" + white outline "Get started").
- **Footer**: dense multi-column list layout on the page background (`#F4F4F4`, no card fill), left column holding wordmark, legal line, a row of small certification badges (ISO, SOC2, CCPA, GDPR, HIPAA), a mission statement line, a language selector chip, a status-indicator chip (dot + label), a 2×4 grid of download-platform buttons (bordered pill/rect, 8px radius, icon+label), and two review-badge tiles (colored fill, star rating). Right side holds plain-text link columns under bold category labels. Above the footer, a fading, semi-transparent grid of small award-badge squares forms a decorative frieze — a masonry of blank/faded tiles interspersed with a handful of visible laurel-badge and star-rating tiles, using the scrim gradient `radial-gradient(50% 50%, rgba(255, 255, 255, 0) 87.1499%, rgb(255, 255, 255) 100%)` to dissolve the top edge into the section above.

## Graphics & Effects
The only gradient in evidence, `radial-gradient(50% 50%, rgba(255, 255, 255, 0) 87.1499%, rgb(255, 255, 255) 100%)`, is a small circular scrim applied over the footer's award-badge frieze (roughly 0.4% of total page area) — it fades that one decorative grid's top edge to white, not a page-wide wash; the rest of the page carries zero gradient fills. Card elevation is carried entirely by two soft, low-spread shadow recipes (`rgba(19,19,22,0.7) 0px 1px 5px -4px, rgba(34,42,53,0.08) 0px 0px 0px 1px, rgba(34,42,53,0.05) 0px 4px 8px 0px` and the near-identical `rgba(36,36,36,...)` variant) plus a hairline `rgba(0,0,0,0.16) 0px 1px 1.9px 0px inset` used on toggle/pill controls for a subtle pressed-inset feel. There is no glassmorphism, no blur, no noise texture, and no photographic imagery — all "media" inside cards is flat UI-mockup illustration (calendar cells, form rows, device chrome) rendered as static screenshots, not live canvas.

## Motion
Motion is functional and restrained, driven by framer-motion plus small CSS keyframes: a loading spinner (`__framer-loading-spin`) for async states, `pulse` keyframes for skeleton/loading placeholders and status dots, and `sp-k-eyOShd`/`sp-k-iOHdLQ` for scoped micro-transitions (likely toggle or accordion state changes). No large-scale scroll-linked or parallax choreography is evident; motion exists to signal load/pending states and small state toggles rather than to entertain.

## Guardrails
- Never fill the hero or any section background with color or gradient — background stays `#F4F4F4`/`#FFFFFF` throughout; color is confined to logo glyphs, star ratings, and the single blue focus-ring token.
- Do not round the navbar into a floating pill or full-bleed borderless bar — it is a square-cornered, bordered rectangle matching the content frame's width.
- Keep card grids uniform-width per row (2, 3, or 4 equal columns) — do not introduce bento-style asymmetric spans not present in the evidence.
- Preserve the light/thin body weight (300) against heavy display weight (600) contrast — do not default body copy to regular/400.
- Do not reuse the footer scrim gradient as a full-page or hero background; it belongs only to the small award-badge frieze.
- Keep the primary hero CTA a solid near-black fill with ~8px radius — do not substitute a glass or outline treatment for it.
