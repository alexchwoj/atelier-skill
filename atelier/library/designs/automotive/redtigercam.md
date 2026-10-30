---
version: alpha
name: Redtigercam
description: |
  REDTIGER's design system embodies bold confidence and technological trust,
  anchored by a striking red accent against a sophisticated dark–to–light
  palette. The visual identity projects premium protection and
  innovation—befitting a dash cam brand—through high-contrast typography, sharp
  geometric components, and deliberate use of negative space. The system
  balances aggressive energy (via #FF0000) with approachable clarity, using a
  pure black (#000000) as the structural backbone and white (#FFFFFF) for
  breathing room. Color-blocking rather than layered shadows creates depth,
  reinforcing a modern, no-nonsense aesthetic suited to automotive safety and
  reliability.
source:
  url: "https://redtigercam.com/?srsltid=AfmBOop3hW-FPzlv9sEDI26VSjYcSB7fKBwj3smx7UuTgzsuy6zhwvH5"
  pagesAnalyzed: 1
  extractedAt: 2026-09-02
  tokensMeasured: true
colors:
  primary: "#000000"
  accent: "#FF0000"
  canvas: "#FFFFFF"
  surface-alt: "#1A1A1A"
  on-primary: "#FFFFFF"
  ink: "#000000"
  body: "#0F172A"
  muted: "#333333"
  hairline: "#F0F0F0"
  accent-1: "#1A2744"
  accent-2: "#334155"
  neutral-1: "#444444"
  neutral-2: "#222222"
typography:
  display:
    fontFamily: Inter
    fontSize: 44px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.88px
  heading-md:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0px
  heading-md-strong:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: 0px
  heading-sm:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0px
  heading-sm-strong:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0px
  heading-sm-2:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0px
  heading-xs:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.56px
  body-xl:
    fontFamily: Inter
    fontSize: 16.8px
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: 0px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: 0px
  body-lg-loose:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.65
    letterSpacing: 0px
  body-md:
    fontFamily: Inter
    fontSize: 15.2px
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: 0px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: 2px
  body-xs:
    fontFamily: Inter
    fontSize: 13.6px
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: 0px
  button:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0px
rounded:
  none: 0px
  xs: 6px
  sm: 8px
  md: 16px
  lg: 20px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  xxxl: 40px
  section: 48px
  band: 64px
borderWidths:
  thin: 1px
shadows:
  sm: "rgba(0, 0, 0, 0.4) 0px 9999px 0px 9999px"
elevationStrategy: single-tier
themes:
  derived: dark   # the other theme is the site's measured palette
  light:
    bg: "#FFFFFF"
    surface: "#1A1A1A"
    surfaceRaised: "#191919"
    text: "#000000"
    textMuted: "#0F172A"
    border: "#F0F0F0"
    accent: "#FF0000"
    accentFg: "#000000"
    focusRing: "#FF0000"
    elevation: shadow
  dark:
    bg: "#160909"
    surface: "#241818"
    surfaceRaised: "#302424"
    text: "#FFF5F5"
    textMuted: "#A69B9B"
    border: "#3B3030"
    accent: "#FF0000"
    accentFg: "#0B0B0C"
    focusRing: "#FF0000"
    elevation: "border+surface"
  contrastFailures:
    - "light: text on surface = 1.21:1 (needs 4.5:1)"
components:
  button-filled:
    textColor: "{colors.on-primary}"
    height: 51.5938px
    padding: "12px 32px 12px 32px"
    fontSize: 16px
    fontFamily: Inter
    fontWeight: 600
    lineHeight: 1.6
    rounded: 999px
    backgroundColor: "{colors.accent}"
  button-filled-sm:
    textColor: "{colors.on-primary}"
    height: 46.3906px
    padding: "12px 24px 12px 24px"
    fontSize: 14px
    fontFamily: Inter
    fontWeight: 700
    lineHeight: 1.6
    rounded: 60px
    backgroundColor: "{colors.accent}"
  card:
    typography: "{typography.body-lg}"
    textColor: "{colors.ink}"
    border: "1px solid {colors.hairline}"
    padding: "20px 20px 20px 20px"
    boxShadow: "rgba(0, 0, 0, 0.06) 0px 4px 15px 0px"
    rounded: 12px
    backgroundColor: "{colors.canvas}"
  card-sm:
    typography: "{typography.body-lg}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.lg}"
  badge-text:
    textColor: "{colors.on-primary}"
    height: 38px
    padding: "0px 20px 0px 20px"
    fontSize: 14px
    boxShadow: "rgba(255, 255, 255, 0.2) 0px -1px 0px 0px inset"
    fontFamily: Inter
    fontWeight: 700
    lineHeight: 1.6
    rounded: 999px
  badge-icon:
    typography: "{typography.body-lg}"
    textColor: "{colors.neutral-2}"
    border: "1px solid rgb(224, 224, 224)"
    height: 30px
    rounded: "50%"
    backgroundColor: "{colors.canvas}"
  navigation:
    typography: "{typography.body-lg}"
    textColor: "{colors.ink}"
    height: 25.5938px
  link:
    typography: "{typography.body-lg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xs}"
  link-sm:
    textColor: "{colors.on-primary}"
    border: "1px solid {colors.canvas}"
    padding: "12px 32px 12px 32px"
    fontSize: 16px
    fontFamily: Inter
    fontWeight: 600
    lineHeight: 1.6
    rounded: 999px
states:
  other-hover:
    target: other
    state: hover
    backgroundColor: "rgb(19, 111, 153)"
  other-focus-visible:
    target: other
    state: focus-visible
    outline: none
  other-disabled:
    target: other
    state: disabled
    opacity: 0.3
  button-hover:
    target: button
    state: hover
    opacity: 1
  input-focus-visible:
    target: input
    state: focus-visible
    outline: none
    boxShadow: "0px 0px 0px 1px inset"
    borderColor: currentcolor
  input-focus:
    target: input
    state: focus
    outline: none
  card-hover:
    target: card
    state: hover
    opacity: 0
  other-focus:
    target: other
    state: focus
    outline: none
  link-hover:
    target: link
    state: hover
    opacity: 1
  input-hover:
    target: input
    state: hover
    textColor: "{colors.on-primary}"
    borderColor: "{colors.ink}"
    borderWidth: 1px
    backgroundColor: "{colors.primary}"
  other-active:
    target: other
    state: active
    backgroundColor: "rgb(245, 245, 245)"
breakpoints:
  - width: 375
    containerWidth: 345
    gridColumns: 4
    navLinksVisible: 0
    menuToggleVisible: true
    headingPx: 32
    bodyPx: 14
    sectionPaddingX: 0
  - width: 768
    containerWidth: 728
    gridColumns: 4
    navLinksVisible: 0
    menuToggleVisible: true
    headingPx: 32
    bodyPx: 16
    sectionPaddingX: 0
  - width: 1024
    containerWidth: 976
    gridColumns: 4
    navLinksVisible: 0
    menuToggleVisible: true
    headingPx: 36
    bodyPx: 16
    sectionPaddingX: 0
  - width: 1280
    containerWidth: 1200
    gridColumns: 5
    navLinksVisible: 62
    menuToggleVisible: true
    headingPx: 36
    bodyPx: 16
    sectionPaddingX: 0
  - width: 1440
    containerWidth: 1320
    gridColumns: 5
    navLinksVisible: 62
    menuToggleVisible: true
    headingPx: 44
    bodyPx: 16
    sectionPaddingX: 0
coverage:
  statesFound: 61
  gradientsFound: 0
  rolesUnassigned: 4
  archetypesUnnamed: 0
  archetypesDetected: 0
  responsiveMeasured: true
  stylesheetsBlocked: true
  semanticRampDeclared: false
---

# Design System Inspired by REDTIGER

## 1. Visual Theme & Atmosphere

REDTIGER's design system embodies bold confidence and technological trust, anchored by a striking red accent against a sophisticated dark–to–light palette. The visual identity projects premium protection and innovation—befitting a dash cam brand—through high-contrast typography, sharp geometric components, and deliberate use of negative space. The system balances aggressive energy (via `{colors.accent}` — `#FF0000`) with approachable clarity, using a pure black (`{colors.primary}` — `#000000`) as the structural backbone and white (`{colors.canvas}` — `#FFFFFF`) for breathing room. Color-blocking rather than layered shadows creates depth, reinforcing a modern, no-nonsense aesthetic suited to automotive safety and reliability.

**Key Characteristics:**
- Bold red accent (`#FF0000`) paired with pure black for maximum contrast and brand recognition
- Pill-shaped interactive elements (`{rounded.full}` — 9999px buttons) conveying smooth, forward momentum
- Flat, color-blocked surfaces with minimal shadow (single-tier depth model)
- High-contrast text hierarchy using black body copy on white and white text on black or red
- Spacious, grid-based layout with generous section padding (`{spacing.band}` — 64px between major sections)
- Dark alternating bands (`{colors.surface-alt}` — `#1A1A1A`) for visual rhythm and section demarcation

## 2. Color Palette & Roles

### Primary
- **Primary / Brand** (`{colors.primary}` — `#000000`): Primary CTA backgrounds, brand accent in secondary contexts, primary heading text, active interactive states, and foundational ink color for body copy and navigation

### Accent Colors
- **Brand Accent** (`{colors.accent}` — `#FF0000`): Primary call-to-action fills, hero section highlights, standout badges, and brand-forward accents paired with white text
- **Decorative Accent 1** (`{colors.accent-1}` — `#1A2744`): Decorative section backgrounds; no measured semantic role
- **Decorative Accent 2** (`{colors.accent-2}` — `#334155`): Decorative section backgrounds; no measured semantic role

### Interactive
- **On Primary** (`{colors.canvas}` — `#FFFFFF`): Label and text color on brand (`#000000`) or accent (`#FF0000`) backgrounds; default page canvas; button text on filled primary CTAs

### Neutral Scale
- **Body** (`{colors.body}` — `#0F172A`): Primary body copy and secondary headings; darkest neutral for maximum contrast on light surfaces
- **Muted** (`{colors.muted}` — `#333333`): Caption text, secondary UI copy, and subtle metadata
- **Neutral Mid** (`{colors.neutral-1}` — `#444444`): Decorative and tertiary UI element coloring
- **Neutral Dark** (`{colors.neutral-2}` — `#222222`): Alternative dark surface or deep accent use

### Surface & Borders
- **Canvas** (`{colors.canvas}` — `#FFFFFF`): Default page background and card surfaces
- **Surface Alt** (`{colors.surface-alt}` — `#1A1A1A`): Alternating dark section bands and background blocks
- **Hairline** (`{colors.hairline}` — `#F0F0F0`): 1px divider borders, subtle card borders, and light stroke separators

## 3. Typography Rules

### Font Family
- **Primary:** Inter, system-ui, sans-serif (fallback stack)
- **Secondary:** system-ui, sans-serif
- **Code / Monospace:** Not measured; see Known Gaps

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|---|---|---|---|---|---|---|
| Display Large | Inter | 44px | 700 | 1.3 (57.2px) | 0px | Hero-scale headings at 1440px viewport |
| Display Medium | Inter | 36px | 700 | 1.3 (46.8px) | 0px | Large section headings at 1024px+ |
| Display Small | Inter | 32px | 700 | 1.3 (41.6px) | 0px | Mobile and tablet primary headings |
| Heading Medium | Inter | 16px | 600 | 1.6 (25.6px) | 0px | Button text, smaller headings, badge text |
| Body Medium | Inter | 16px | 500 | 1.6 (25.6px) | 0px | Standard body copy and navigation links |
| Body Small | Inter | 14px | 500 | 1.6 (22.4px) | 0px | Secondary text, captions, form labels |

### Principles
- **Weight hierarchy:** 700 for display headings, 600 for button labels and emphasis, 500 for body and secondary navigation
- **Line height:** Consistent 1.6 multiplier (160%) for body text, 1.3 (130%) for display sizes, ensuring readability and breathing room
- **Size stepping:** 4–6px jumps between body sizes; 8–12px jumps between heading levels
- **Contrast-first:** Black (`{colors.body}` — `#0F172A`) body on white (`{colors.canvas}`) for WCAG AA compliance; white body on red or black backgrounds for high visibility

## 4. Component Stylings

### Buttons

**Primary Filled (Large)**
- Background: `{colors.accent}` (`#FF0000`)
- Text Color: `{colors.canvas}` (`#FFFFFF`)
- Font: Inter, 16px, 600 weight, 25.6px line height
- Padding: `{spacing.sm}` 12px vertical, `{spacing.xl}` 32px horizontal (12px 32px)
- Border Radius: `{rounded.full}` (9999px)
- Border: 1px solid transparent
- Box Shadow: None
- Width: 187px
- Height: 51.59px
- Hover State: Opacity 1.0 (no opacity change on hover; may include transform scale 1.1 per interaction data)

**Primary Filled (Small)**
- Background: `{colors.accent}` (`#FF0000`)
- Text Color: `{colors.canvas}` (`#FFFFFF`)
- Font: Inter, 14px, 700 weight, 22.4px line height
- Padding: `{spacing.sm}` 12px vertical, `{spacing.lg}` 24px horizontal (12px 24px)
- Border Radius: 60px
- Border: None
- Box Shadow: None
- Width: 161px
- Height: 46.39px

**Secondary / Ghost (Link-style)**
- Background: Transparent
- Text Color: `{colors.canvas}` (`#FFFFFF`)
- Font: Inter, 16px, 600 weight, 25.6px line height
- Padding: `{spacing.sm}` 12px vertical, `{spacing.xl}` 32px horizontal (12px 32px)
- Border: 1px solid `{colors.canvas}` (`#FFFFFF`)
- Border Radius: `{rounded.full}` (9999px)
- Box Shadow: None
- Hover State: Transform scale 1.1, opacity adjustments per context

### Cards & Containers

**Default Card**
- Background: `{colors.canvas}` (`#FFFFFF`)
- Text Color: `{colors.primary}` (`#000000`)
- Border: 1px solid `{colors.hairline}` (`#F0F0F0`)
- Border Radius: `{rounded.sm}` (12px)
- Padding: `{spacing.lg}` 20px on all sides (20px 20px 20px 20px)
- Font: Inter, 16px, 500 weight, 25.6px line height
- Box Shadow: `rgba(0, 0, 0, 0.06) 0px 4px 15px 0px`
- Width: 300px
- Height: 495.33px
- Hover State: Transform translateY(-8px), opacity transitions

**Large Card (Dark Background)**
- Background: Transparent to `rgba(0, 0, 0, 0)` (image overlay or dark section)
- Text Color: `{colors.canvas}` (`#FFFFFF`)
- Border: None
- Border Radius: `{rounded.lg}` (20px)
- Padding: None (0px)
- Font: Inter, 16px, 500 weight, 25.6px line height
- Box Shadow: None
- Width: 386.66px
- Height: 241.66px
- Hover State: Opacity transitions, text reveal

### Badges

**Text Badge (Filled)**
- Background: Transparent
- Text Color: `{colors.canvas}` (`#FFFFFF`)
- Border: None
- Border Radius: `{rounded.full}` (9999px)
- Padding: `{spacing.md}` 20px horizontal (0px 20px 0px 20px)
- Font: Inter, 14px, 700 weight, 22.4px line height
- Height: 38px
- Width: 166px
- Box Shadow: `rgba(255, 255, 255, 0.2) 0px -1px 0px 0px inset` (subtle top highlight)

**Icon Badge**
- Background: `{colors.canvas}` (`#FFFFFF`)
- Text Color: `{colors.neutral-2}` (`#222222`)
- Border: 1px solid `#E0E0E0`
- Border Radius: 50%
- Padding: None (0px)
- Font: Inter, 16px, 500 weight, 25.6px line height
- Width: 30px
- Height: 30px
- Box Shadow: None

### Inputs & Forms
*No explicit form input data extracted; see Known Gaps*

### Navigation

**Primary Navigation Bar**
- Background: Transparent
- Text Color: `{colors.primary}` (`#000000`)
- Font: Inter, 16px, 500 weight, 25.6px line height
- Border: None
- Border Radius: `{rounded.none}` (0px)
- Box Shadow: None
- Width: 845px
- Height: 25.59px
- Padding: None (0px)
- Hover State: Color and opacity changes per link style (e.g., `#666666` or opacity 0.7)

### Links

**Default Link**
- Background: Transparent
- Text Color: `{colors.primary}` (`#000000`)
- Font: Inter, 16px, 500 weight, 25.6px line height
- Border: None
- Border Radius: `{rounded.xs}` (6px)
- Box Shadow: None
- Hover State: Opacity 0.7, possible underline, color shift to `#666666` depending on context

**Button-style Link (Ghost/Secondary)**
- Background: Transparent
- Text Color: `{colors.canvas}` (`#FFFFFF`)
- Font: Inter, 16px, 600 weight, 25.6px line height
- Border: 1px solid `{colors.canvas}` (`#FFFFFF`)
- Border Radius: `{rounded.full}` (9999px)
- Padding: `{spacing.sm}` 12px vertical, `{spacing.xl}` 32px horizontal (12px 32px)
- Box Shadow: None
- Hover State: Background fill with `#000000`, transform translate(0px), opacity 1.0

## 5. Layout Principles

### Spacing System
Base unit: `{spacing.xs}` = 8px

**Full Scale:**
- `{spacing.xxs}` = 4px — micro-spacing between inline elements
- `{spacing.xs}` = 8px — small gaps, button padding refinements
- `{spacing.sm}` = 12px — button vertical padding, input gaps
- `{spacing.md}` = 16px — component-level padding, general margins
- `{spacing.lg}` = 20px — card padding, section spacing
- `{spacing.xl}` = 24px — button horizontal padding, heading margins
- `{spacing.xxl}` = 32px — large button padding, section dividers
- `{spacing.xxxl}` = 40px — major layout spacing
- `{spacing.section}` = 48px — internal section padding
- `{spacing.band}` = 64px — gap between major hero sections and content bands

**Usage Context:**
- Card padding: `{spacing.lg}` (20px)
- Button padding (horizontal): `{spacing.xl}` (32px) large, `{spacing.lg}` (24px) small
- Section margins: `{spacing.section}` (48px) to `{spacing.band}` (64px)
- Hero section top/bottom: `{spacing.band}` (64px) or greater
- Text-to-element spacing: `{spacing.md}` (16px) to `{spacing.lg}` (20px)

### Grid & Container
- **Desktop (1440px+):** Content column 1320px; 5–6 column grid implied
- **Tablet (1024px):** Content column 976px; 4–5 column grid
- **Tablet Small (768px):** Content column 728px; 4-column grid
- **Mobile (375px):** Content column 345px; 4-column grid (responsive single-column stacking)
- **Section Padding (all sizes):** 0px left/right (full bleed possible); internal content uses max-width constraints

### Whitespace Philosophy
The system prioritizes **breathing room** and **clear visual separation** through generous vertical spacing between sections (`{spacing.band}` — 64px). Horizontal margins use full-bleed design until content hits a max-width breakpoint. Within cards and containers, padding follows `{spacing.lg}` (20px) to ensure text does not crowd borders. Hero sections and dark bands use asymmetric negative space to emphasize hero imagery and copy, with text layered on image or color blocks rather than centered in whitespace alone.

### Border Radius Scale
- `{rounded.none}` = 0px — image containers, overlays, badges in badge context
- `{rounded.xs}` = 6px — link hover targets, subtle refinement
- `{rounded.sm}` = 8px — input fields (not directly measured; inferred from common practice)
- `{rounded.md}` = 16px — general purpose, mid-scale accent surfaces
- `{rounded.lg}` = 20px — large dark cards, feature sections
- `{rounded.full}` = 9999px — pill-shaped buttons and primary CTAs (defines the brand's soft, forward-moving gesture)

**Component-specific Radii (as measured):**
- Buttons: `{rounded.full}` (9999px pill shape)
- Cards: `{rounded.sm}` (12px) for default white cards; `{rounded.lg}` (20px) for dark hero overlays
- Links: `{rounded.xs}` (6px) for hover targets
- Images: `{rounded.none}` (0px sharp corners)

### Border Widths
- **Thin:** 1px — button borders (ghost/secondary), card borders (`{colors.hairline}` stroke), input focus states, badge icon borders

## 6. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow; color-blocking only | Text, overlays, decorative bands |
| Raised | `rgba(0, 0, 0, 0.06) 0px 4px 15px 0px` | Default white cards; primary container depth |
| Dropdown | `rgba(0, 0, 0, 0.4) 0px 9999px 0px 9999px` | Menu dropdowns, popovers (extreme blur radius suggests large offset or pseudo-shadow effect) |

**Shadow Philosophy:**
The system uses a **single-tier, color-blocking depth model**. Rather than a progressive ladder of shadows, depth is achieved through surface color changes (dark bands on light backgrounds, light text on dark) and a single, subtle shadow (`rgba(0, 0, 0, 0.06)` 4px vertical blur) for card elevation. This keeps the interface flat and modern while maintaining clear visual hierarchy. The extreme blur radius on the dropdown shadow (9999px) suggests a fallback or decorative effect; practical dropdown shadows typically use moderate blur and offset.

### Opacity Levels
- **Full:** 1.0 — default state for all interactive elements
- **High:** 0.95 — hover/active states on certain elements
- **Strong:** 0.92 — subtle hover state opacity shift
- **Medium–High:** 0.90 — disabled or de-emphasized hover
- **Medium:** 0.70 — secondary hover state, link opacity shift
- **Disabled:** 0.50 — disabled button or control (0.50 baseline); 0.30 for more aggressive disabled appearance
- **Subtle:** 0.25 — barely-there overlay or decorative element
- **Minimal:** 0.07 — micro-opacity for very faint decorative effect
- **Accent (Inset highlight):** 0.65 — inset shadow opacity on badges and buttons
- **Label on brand:** 0.20 — subtle text overlay opacity

**Usage:**
- Button hover: opacity 0.9–1.0 (state indicator via transform or color)
- Disabled state: opacity 0.3–0.5
- Link hover: opacity 0.7
- Overlay text on images: opacity 0.70–0.90 depending on contrast need
- Decorative element: opacity 0.07–0.25

### Z-index / Layering
- **Base:** z-index 1–5 — default card and section layering
- **Sticky:** z-index 100 — fixed navigation, sticky headers
- **Dropdown:** z-index 10–99 — menu flyouts, tooltips, modal backdrops
- **Above All:** z-index 100+ — modals, top-level alerts

Explicit z-index values measured:
- z-index 1, 2, 3, 5 (base layers)
- z-index 10, 99 (dropdown and overlay)
- z-index 100 (sticky/modal top)

## 7. Do's and Don'ts

### Do
- **Use `{colors.accent}` (`#FF0000`) for primary CTAs.** Red is the brand signal; it draws attention and conveys urgency (trust, protection, action).
- **Employ pill-shaped buttons (`{rounded.full}` — 9999px).** This is the system's defining interactive gesture—soft, modern, forward-moving.
- **Stack dark and light sections alternately** (white `{colors.canvas}`, dark `{colors.surface-alt}`) to create visual rhythm and guide the eye down the page.
- **Use color-blocking for depth** instead of layered shadows. One subtle shadow (`rgba(0, 0, 0, 0.06)` 4px) on white cards; bold color shifts on dark sections.
- **Set button text to `{colors.canvas}` (`#FFFFFF`) on red (`#FF0000`) or black (`#000000`) backgrounds** for maximum contrast and readability.
- **Maintain `{spacing.band}` (64px) gaps** between major hero sections and content blocks to breathe.
- **Bold sans-serif headings (Inter 700 weight)** for authority; match body copy weight to 500 for clarity and approachability.
- **Use `{colors.hairline}` (`#F0F0F0`) for 1px dividers and card borders** on light backgrounds.
- **Apply opacity shifts (0.7–0.9) on link and button hover** to signal interactivity without color drift.
- **Keep icon badges at 30px diameter with 50% border radius** and light borders for subtle secondary UI.

### Don't
- **Do NOT layer multiple shadows.** The system is flat; multiple drop shadows cloud the single-tier depth model.
- **Do NOT use semantic colors (error red, success green, warning yellow).** The site defines only brand red; use it sparingly for warnings, and leave error/success messaging to text or context.
- **Do NOT round interactive elements below `{rounded.full}` (9999px).** Buttons are pill-shaped; cards may use `{rounded.sm}` (12px), but primary CTAs must be full-pill.
- **Do NOT exceed 64px (`{spacing.band}`) gap between sections without purpose.** Excessive whitespace breaks rhythm and loses reader momentum.
- **Do NOT use `{colors.body}` (`#0F172A`) or `{colors.muted}` (`#333333`) for CTAs.** These are neutral copy colors; reserve red and black for actionable elements.
- **Do NOT apply strong shadows to cards on dark backgrounds.** Color-blocking is enough; shadows compete with dark surfaces.
- **Do NOT override typography weights arbitrarily.** Stick to 700 (display), 600 (emphasis/button), 500 (body/nav); deviations muddy hierarchy.
- **Do NOT forget the hairline border on white cards.** The subtle `{colors.hairline}` stroke (`#F0F0F0`) frames content and lifts cards off the canvas.
- **Do NOT mix font families.** The system is Inter + system-ui fallback only; no serif or secondary typeface.
- **Do NOT disable buttons with opacity alone.** Combine opacity (0.3–0.5) with a cursor pointer change or disabled attribute for clarity.

## 8. Responsive Behavior

### Breakpoints

| Breakpoint Name | Viewport Width | Content Column | Grid | Max Heading Size | Nav Links Visible | Key Behavior |
|---|---|---|---|---|---|---|
| Mobile | 375px | 345px | 4 col | 32px | 0 (hamburger only) | Single-column stack; full-bleed sections; touch-friendly padding |
| Tablet Small | 768px | 728px | 4 col | 32px | 0 (hamburger only) | Wider content; grid expands; nav remains hidden |
| Tablet | 1024px | 976px | 4–5 col | 36px | 0 (hamburger only) | Content grows; heading size increases slightly; menu toggle still active |
| Desktop Small | 1280px | 1200px | 5 col | 36px | 62px (62 links visible) | Horizontal nav appears; full menu no longer toggle |
| Desktop Large | 1440px | 1320px | 5 col | 44px | 62px (full nav) | Max content width; largest heading scale; optimal readability |

**Key Responsive Changes:**
- **Typography:** Heading size jumps 2–8px at desktop breakpoints (32px → 36px → 44px); body stays 14–16px across all sizes
- **Spacing:** Section padding remains 0px horizontal (full-bleed); internal gaps scale minimally; `{spacing.band}` (64px) consistent at all breakpoints
- **Navigation:** Collapses to hamburger toggle below 1280px; full horizontal menu appears at 1280px+
- **Grid:** 4-column on mobile/tablet; expands to 5 on desktop (no measured 6-column layout)
- **Container:** Content column grows from 345px (mobile) to 1320px (desktop large); uses max-width constraints

### Touch Targets
*Minimum touch target sizes not explicitly extracted; inferred from button measurements:*
- Button height minimum: 46px (small button) to 51.6px (large button)—exceeds WCAG 44px recommendation
- Badge icon: 30px (safe, within spec)
- Navigation link click target: Assume 44px minimum (not directly measured)

### Collapsing Strategy
- **Mobile (< 1024px):** Hamburger menu icon replaces nav links; content single-column; hero imagery remains full-width; cards stack vertically; button text wraps or shrinks font size
- **Tablet (1024px–1280px):** Grid tightens to 4–5 columns; hero section text remains left-aligned; nav still hidden; padding tightens slightly
- **Desktop (1280px+):** Full horizontal nav reveals; content grid reaches max-width; heading sizes peak at 44px; footer columns expand to multi-column layout
- **Font scaling:** Largest heading 32px mobile/tablet → 36px at 1024px → 44px at 1440px (proportional step-up, not linear)
- **Section padding:** 0px left/right maintained (full bleed); internal content uses max-width; hero sections stretch edge-to-edge for impact

## 9. Agent Prompt Guide

### Quick Color Reference
- **Primary CTA Background:** Brand Accent (`{colors.accent}` — `#FF0000`)
- **Primary CTA Text:** Canvas (`{colors.canvas}` — `#FFFFFF`)
- **Body Text:** Body (`{colors.body}` — `#0F172A`)
- **Secondary Text:** Muted (`{colors.muted}` — `#333333`)
- **Page Background:** Canvas (`{colors.canvas}` — `#FFFFFF`)
- **Dark Section Background:** Surface Alt (`{colors.surface-alt}` — `#1A1A1A`)
- **Card Border / Divider:** Hairline (`{colors.hairline}` — `#F0F0F0`)
- **Heading Text:** Primary (`{colors.primary}` — `#000000`)
- **Ghost Button Border:** Canvas (`{colors.canvas}` — `#FFFFFF`)
- **Decorative Accent (non-semantic):** Accent 1 (`{colors.accent-1}` — `#1A2744`) or Accent 2 (`{colors.accent-2}` — `#334155`)

### Iteration Guide

1. **Start with red (`#FF0000`) for any primary button or CTA.** No exceptions; red is trust and urgency. Pair with white text (`#FFFFFF`).

2. **Make all interactive buttons pill-shaped (`{rounded.full}` — 9999px).** This is the brand's signature gesture. Secondary buttons use the same radius with transparent background and border.

3. **Use black text (`#0F172A`) on white (`#FFFFFF`) and white text on black (`#000000`) or red (`#FF0000`).** No color permutations; contrast must be absolute.

4. **Space sections vertically with `{spacing.band}` (64px) gaps.** Do not compress. Breathing room is core to the aesthetic.

5. **Add the subtle card shadow (`rgba(0, 0, 0, 0.06) 0px 4px 15px 0px`) to white cards only.** No shadows on dark sections; rely on color contrast.

6. **Set card border to `{colors.hairline}` (`#F0F0F0`), 1px, on white cards.** Invisible at small scale, but frames content at high DPI.

7. **Bold headings with Inter 700 weight; body at 500.** Mid-tone weights (600) for emphasis and buttons. Weights: 700, 600, 500 only.

8. **Responsive text sizes:** 32px headings mobile, 36px tablet, 44px desktop. Body stays 14–16px. Use `{typography.display-*}`, `{typography.heading-*}`, `{typography.body-*}` tokens.

9. **Opacity shifts (`0.7–0.9`) on hover; transform scale (1.1) for emphasis.** Never disable via color; always pair opacity with a visual change.

10. **Respect the 0px section padding (left/right) for full-bleed hero and dark bands; internal content uses max-width (`{spacing.band}` driven by breakpoint table).** Keep sections edge-to-edge for impact.

## 10. Known Gaps

- **Semantic status colors:** The site does not declare error, success, warning, or info colors. Only brand red (`#FF0000`) and neutrals are measured. Do not invent an error ramp.
- **Form input states:** No explicit focus, hover, disabled, or error styling was captured for text inputs, select fields, or textareas. The interaction data includes focus and hover effects, but their CSS properties are fragmented across many stylesheets; a complete input design system was not extracted.
- **Dark mode / theme variants:** The extraction identifies only the light theme present in the captured page. No dark mode CSS, prefers-color-scheme media queries, or derived theme data were measured. The system may support dark mode; its absence here reflects incomplete capture.
- **Gradient or mesh backgrounds:** No linear, radial, or mesh gradients were detected. The system is color-blocking only.
- **Decorator or icon system:** Icons appear in badges and navigation, but no SVG sprite, icon library, or sizing scale was extracted. Icon dimensions vary case-by-case.
- **Animation / transition timings:** No `transition-duration`, `animation-timing-function`, or keyframe data were captured. The interaction states reference transform and opacity changes, but no timing is explicit.
- **Monospace / code typography:** No monospace font or code block styling was measured. The hierarchy covers display, heading, body, button, link, and caption roles only.
- **Multi-level dropdown or submenu structures:** Navigation collapse data is measured, but no nested menu or submenu CSS was captured.
- **Border color variables for states:** Button borders are transparent or solid `#FFFFFF`; input or form borders are not explicitly defined across all states.
- **Four decorative accent colors (`#1A2744`, `#334155`, and others):** These measure as present but have no measured semantic role. Treat them as decorative or context-dependent; do not assume they represent a complete status or categorical palette.
- **Surfaces behind authentication / paywalls:** Only the public homepage and visible landing section were analyzed. Account pages, checkout, or protected content areas are not represented.
- **Coverage:** 1 page captured (redtigercam.com homepage). Multi-page user journeys and interaction patterns across the full site are not included.

---

# Token Reference Block

```yaml
colors:
  primary: "#000000"
  accent: "#FF0000"
  accent-1: "#1A2744"
  accent-2: "#334155"
  canvas: "#FFFFFF"
  surface-alt: "#1A1A1A"
  body: "#0F172A"
  muted: "#333333"
  hairline: "#F0F0F0"
  neutral-1: "#444444"
  neutral-2: "#222222"

typography:
  display-lg:
    font-family: "Inter, system-ui, sans-serif"
    font-size: "44px"
    font-weight: 700
    line-height: "57.2px"
    letter-spacing: "0px"
  display-md:
    font-family: "Inter, system-ui, sans-serif"
    font-size: "36px"
    font-weight: 700
    line-height: "46.8px"
    letter-spacing: "0px"
  display-sm:
    font-family: "Inter, system-ui, sans-serif"
    font-size: "32px"
    font-weight: 700
    line-height: "41.6px"
    letter-spacing: "0px"
  heading-md:
    font-family: "Inter, system-ui, sans-serif"
    font-size: "16px"
    font-weight: 600
    line-height: "25.6px"
    letter-spacing: "0px"
  body-md:
    font-family: "Inter, system-ui, sans-serif"
    font-size: "16px"
    font-weight: 500
    line-height: "25.6px"
    letter-spacing: "0px"
  body-sm:
    font-family: "Inter, system-ui, sans-serif"
    font-size: "14px"
    font-weight: 500
    line-height: "22.4px"
    letter-spacing: "0px"

spacing:
  xxs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "20px"
  xl: "24px"
  xxl: "32px"
  xxxl: "40px"
  section: "48px"
  band: "64px"

rounded:
  none: "0px"
  xs: "6px"
  sm: "8px"
  md: "16px"
  lg: "20px"
  full: "9999px"

shadows:
  sm: "rgba(0, 0, 0, 0.06) 0px 4px 15px 0px"
  dropdown: "rgba(0, 0, 0, 0.4) 0px 9999px 0px 9999px"

border-widths:
  thin: "1px"

opacity:
  full: 1.0
  high: 0.95
  strong: 0.92
  med-high: 0.90
  medium: 0.70
  disabled: 0.50
  subtle: 0.25
  minimal: 0.07
  accent-inset: 0.65
  label-brand: 0.20

z-index:
  base: 1
  base-alt: 2
  base-raised: 3
  base-high: 5
  base-top: 9
  dropdown: 10
  dropdown-alt: 99
  sticky: 100
```
