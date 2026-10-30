---
version: "1"
name: "Electra — Cinematic EV Showcase (Light)"
description: "A light-mode, cinematic landing for a premium electric-vehicle brand. Warm-neutral canvas, full-bleed rounded video sections, a bento grid of image cards, glassmorphism CTAs, and a signature inverse-corner cutout that bites into the hero video like a precision panel gap."
colors:
  background: "#F0F0F0"
  ink: "#0A0A0A"
  muted: "#5C5C5C"
  glass: "rgba(255,255,255,0.10)"
  glass-border: "rgba(255,255,255,0.20)"
  overlay-ink: "rgba(10,10,10,0.55)"
  overlay-white-strong: "rgba(255,255,255,0.95)"
  overlay-white-soft: "rgba(255,255,255,0.70)"
typography:
  display:
    fontFamily: "Helvetica, 'Helvetica Neue', Arial, sans-serif"
    role: "headlines (neutral, engineered)"
  body:
    fontFamily: "Helvetica, 'Helvetica Neue', Arial, sans-serif"
    role: "body, labels, micro-copy"
spacing:
  base: "4px"
  section-padding-y: "96px desktop / 64px tablet / 40px mobile"
  card-padding: "24px"
  gutter: "16px"
rounded:
  none: "0px"
  sm: "8px"
  md: "16px"
  card: "24px"
  video: "32px"
  pill: "9999px"
components:
  inverse-corner-cutout: "A #f0f0f0 block biting into the hero video's bottom-right via two flipped quarter-circle SVGs — a flush concave edge"
  glass-cta: "bg-white/10 backdrop-blur-md border-white/20 — floating over video"
  bento-grid: "4 image cards with overlay text"
  video-band: "Full-bleed rounded video container, 32px radius"
---

# Electra — Cinematic EV Showcase (Light)

> Fivefold showcase. Pairs with the Electra prompt. Use this to keep pages you build *after* the landing — model detail, configurator, story — feeling like one cinematic EV brand film.

## Overview

Electra is a light-mode, cinematic landing for a premium electric-vehicle brand. The atmosphere is bright showroom, not dark configurator — a warm-neutral canvas (`{colors.background}`) supporting two full-bleed rounded video bands, a bento grid of image-led storytelling cards, and glass surfaces that read like a vehicle's HUD. The vehicle and its motion are the emotional core; everything else gets out of the way.

The governing decision: **cinematic motion + engineered precision = premium.** Every choice serves either the "future driving experience" feeling (full-bleed video, glass HUD-like CTAs) or the "this is precision-engineered" signal (the inverse-corner cutout, flush edges). It's automotive, so craftsmanship in the details is the brand. Density is low and deliberately editorial; decoration is reserved for one signature geometric move (the cutout) and for the tactility of glass.

The system extends as one cohesive brand film across surfaces. A model-detail page, a configurator, or a story chapter all inherit the same light warm-neutral canvas, the same rounded video grammar, the same glass-not-shadow rule, and the same precision tolerance for any custom geometry. No surface is allowed to introduce a gradient background, a neon accent, or a dark theme without a documented narrative reason.

**Key characteristics:**
- Warm-neutral light canvas (`{colors.background}` — #F0F0F0); no gradients on the background.
- Two full-bleed rounded video sections (top + middle) — the cinematic spine.
- A bento grid of 4 image cards with overlay text — image-led storytelling modules.
- Glassmorphism CTAs (`{colors.glass}` + `{colors.glass-border}` + `backdrop-blur-md`) as premium tactile depth, replacing drop shadows.
- Signature inverse-corner cutout — a #F0F0F0 block biting into the hero video's bottom-right via two flipped quarter-circle SVGs.
- Helvetica throughout — Swiss-automotive, neutral, engineered.
- Pill-shaped (`{rounded.pill}`) glass controls; 32px-radius video bands; 24px-radius bento cards.
- Cinematic motion via `motion/react` v11 — restrained reveals, no flashy transitions.

## Colors

> **Source pages analyzed:** Hero with cutout, mid video band, bento storytelling grid, glass CTA cluster, footer wordmark — describes the full landing's surface palette.

### Surface
- **Background** (`{colors.background}` — #F0F0F0): Warm-neutral showroom floor. Light, clean, gradient-free. The brightness reads premium-modern (Apple-store, not dark-configurator), and provides the cool contrast that makes video bands feel set into the page.

### Text
- **Ink** (`{colors.ink}` — #0A0A0A): Primary type on the light canvas — headlines, body, labels. Near-black, not pure black, to stay soft against #F0F0F0.
- **Muted** (`{colors.muted}` — #5C5C5C): Secondary copy, specs, captions, label rows in the bento grid. The 2.7× contrast step is deliberate — quiet, not invisible.

### Overlay (on video)
- **Overlay white strong** (`{colors.overlay-white-strong}` — rgba(255,255,255,0.95)): Primary type set over video frames where legibility must hold across motion.
- **Overlay white soft** (`{colors.overlay-white-soft}` — rgba(255,255,255,0.70)): Secondary lines and labels over video; pairs with the strong tier above.
- **Overlay ink** (`{colors.overlay-ink}` — rgba(10,10,10,0.55)): Optional darkening scrim under text overlays on bright video footage.

### Glass
- **Glass fill** (`{colors.glass}` — rgba(255,255,255,0.10)): Semi-transparent white at 10% — the surface of any CTA or floating control over video.
- **Glass border** (`{colors.glass-border}` — rgba(255,255,255,0.20)): 1px hairline at 20% white — the edge that makes the glass read as a real surface and not a wash.
- **Used as premium tactile depth — it gives layering and richness without a single drop shadow**, and evokes a vehicle's glass HUD. This is the one place glass is *right* (unlike the fintech showcases that ban it) — because for an EV, glass reads as high-tech surface, not crypto-casino.

## Typography

### Font Family
- **Display + Body:** `Helvetica, 'Helvetica Neue', Arial, sans-serif` — neutral, engineered, Swiss-automotive. No display serif, no flourish. The typeface stays out of the way so the video and the product lead.
- OpenType features: enable `ss01` for the slightly more humanist `1` if the platform supports it; keep `tnum` on for spec rows so digits align in cards.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| hero | 96px | 500 | 1.00 | -0.03em | Hero headline over video band |
| display | 72px | 500 | 1.04 | -0.02em | Section openers, model name |
| h1 | 48px | 500 | 1.10 | -0.02em | Bento cell headlines |
| h2 | 32px | 500 | 1.15 | -0.01em | Sub-sections, modal headers |
| h3 | 24px | 500 | 1.25 | 0 | Card titles, footer headings |
| body | 17px | 400 | 1.45 | 0 | Long-form copy, descriptions |
| label | 13px | 500 | 1.20 | 0.08em (uppercase) | Eyebrows, spec labels, CTA caps |
| micro | 11px | 500 | 1.30 | 0.12em (uppercase) | Legal, captions, footer fine print |

### Principles
- Headlines stay short and declarative ("Drive the Electric Future."). Never wrap to more than two lines at hero size.
- Use negative letter-spacing at display sizes (≥48px) to tighten Helvetica's natural width; never on body.
- Body lives at 17px, not 16px — a small lift that reads as premium against #F0F0F0.
- Weight 500 is the default for type-set type; reserve 400 for paragraphs only.
- Tracking on labels (`label`, `micro`) is uppercase + positive letter-spacing — Swiss-engineering signal.
- Numerals use tabular figures (`tnum`) inside cards and spec rows so columns align.
- Avoid italics anywhere; Helvetica's italic is not part of the engineered voice.

### Note on Font Substitutes
When Helvetica is unavailable, fall back to **Inter** at -0.005em letter-spacing across display sizes (Inter runs slightly wider than Helvetica). Avoid **Arial** as a substitute on web — it differs subtly enough that the engineered precision starts to feel generic. If only system-ui is allowed, use it with `font-feature-settings: 'ss01' off` and accept slightly looser display setting.

## Layout

### Spacing System
- Base unit: `{spacing.base}` (4px). Steps: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128.
- Section padding: `{spacing.section-padding-y}` — 96px desktop / 64px tablet / 40px mobile, vertical.
- Card padding: `{spacing.card-padding}` (24px) on all bento cells.
- Gutter: `{spacing.gutter}` (16px) between non-bento elements; bento grid itself is gapless or at most 4px to read as a single editorial tile.

### Grid & Container
- Max content width: 1440px on wide desktop; the video bands break out to 100vw and rely on `{rounded.video}` to read as set into the page.
- Bento grid: 4 image cards on desktop (varied 2-3-2-1 cell sizing), 2-up on tablet, 1-up on mobile.
- Outer page gutter: 24px mobile / 40px tablet / 64px desktop.
- Glass CTAs float over video bands and align to either left padding or center-axis of the band — never both in the same band.

### Whitespace Philosophy
Whitespace here is the showroom floor. The eye should rest between video bands; the bento grid should breathe; type should never butt against the edge of a card. Negative space is the device that lets the cinematic moments land — without it, the videos become wallpaper and the cutout becomes just a shape. Density is a deliberate refusal; nothing is added unless it serves the brand-film feeling.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Default for type and bento cells over `{colors.background}` |
| Soft hairline | 1px `{colors.glass-border}` on glass | Glass CTAs and floating overlays on video |
| Backdrop blur | `backdrop-blur-md` (12px) on glass surfaces | Glass CTAs, floating chip controls, overlay panels |
| Product depth | Video-native parallax + cutout precision | Hero band only; never a CSS drop shadow on the vehicle render |

Shadow philosophy: drop shadows are banned across the entire system. Depth is achieved with two devices and two only — (1) backdrop-blurred glass surfaces and (2) the inverse-corner cutout's panel-gap precision. A box-shadow under a card would immediately drag the page from premium-EV toward generic-SaaS.

**Decorative Depth**
- Glass tactility: `{colors.glass}` + `{colors.glass-border}` + `backdrop-blur-md` — the only premium "lift" the system permits.
- Cutout as panel-gap: the inverse-corner cutout reads as a physical seam between two materials. That seam is the design's only sculptural depth.
- Video footage carries its own optical depth (DoF, motion parallax). Trust it; don't reinforce it with CSS.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed video edge before radius is applied; raw image |
| `{rounded.sm}` | 8px | Inline pills inside copy, small badges |
| `{rounded.md}` | 16px | Inputs, secondary buttons, footer chips |
| `{rounded.card}` | 24px | Bento image cards, modal sheets |
| `{rounded.video}` | 32px | Full-bleed rounded video containers (hero + mid) |
| `{rounded.pill}` | 9999px | Glass CTAs, primary action buttons |

### Photography Geometry
- Hero video band: 16:9 minimum on desktop, 4:5 crop on mobile; never letterboxed.
- Bento image cells: mixed 1:1, 4:5, and 3:4 — the cinematic varietal that keeps a 4-card grid from feeling like a CMS template.
- Product render specs: the vehicle is centered or rule-of-thirds, never bottom-stuck; reserve at least 12% of the frame as breathing room above the roofline.
- Image radius behavior: cells inherit `{rounded.card}`; video bands inherit `{rounded.video}`.
- Loading strategy: hero video uses `preload="metadata"` + poster frame; bento images use `loading="lazy"` with explicit aspect-ratio CSS to prevent layout shift.

## Components

### Buttons

**Primary CTA — Glass** (`{component.button-primary}`)
Pill-radius (`{rounded.pill}`), `{colors.glass}` fill, 1px `{colors.glass-border}` border, `backdrop-blur-md`. Padding 14px × 28px. Type: `label` token, white at `{colors.overlay-white-strong}`. Default: floats over video; reads as HUD. Active: fill rises to rgba(255,255,255,0.18); border holds. Focus: 2px outline at `{colors.overlay-white-strong}` offset 4px, no shadow.

**Secondary — Outline** (`{component.button-secondary}`)
`{rounded.pill}` radius, transparent fill, 1px `{colors.ink}` border, padding 12px × 24px. Type: `label` token, `{colors.ink}`. Used on the light canvas where glass would disappear. Active: fill goes to `{colors.ink}`, type inverts to `{colors.background}`. Focus: 2px outline at `{colors.ink}` offset 3px.

**Utility — Icon** (`{component.button-utility}`)
40×40 square at `{rounded.md}`, transparent on canvas / `{colors.glass}` on video, 1px hairline. Used for prev/next on bento, play/pause on video bands. Active: scale 0.96. Focus: 2px outline matching surrounding ink/white context.

### Cards & Containers

**Bento image card** (`{component.card-bento}`)
`{rounded.card}` radius, full-bleed image fill, type overlay bottom-left at `{spacing.card-padding}` (24px). Title in `h1` or `h3` token depending on cell size; label eyebrow above in `label` token at `{colors.overlay-white-soft}`. Default: image at full saturation. Active: optional 1.02 scale within the card frame (image only, not the frame). Focus: 2px outline at `{colors.overlay-white-strong}` offset 4px, inside the card edge.

**Video band container** (`{component.card-video-band}`)
`{rounded.video}` radius, full-bleed minus outer page gutter, looping video with `poster`. Houses overlay headline (`hero` token, white) + glass CTA. The hero band additionally hosts the inverse-corner cutout in its bottom-right.

**Utility card** (`{component.card-utility}`)
`{rounded.card}` radius, `{colors.background}` surface (so it disappears into the page), 1px hairline at rgba(10,10,10,0.06), padding `{spacing.card-padding}`. Used for spec strips and footer column groups.

### Inputs & Forms

**Text input** (`{component.input-text}`)
`{rounded.md}` radius, `{colors.background}` fill (or white on bento where contrast is needed), 1px hairline at rgba(10,10,10,0.12), 48px height, padding 0 16px. Type: `body` token, `{colors.ink}`. Default: hairline visible. Active: hairline darkens to `{colors.ink}`. Focus: 2px outline at `{colors.ink}` offset 2px; hairline becomes 1.5px. Label sits above in `label` token, `{colors.muted}`.

### Signature

**Inverse-corner cutout** (`{component.cutout}`)
A `{colors.background}` block bites into the hero video's bottom-right corner, built from two flipped quarter-circle SVGs that produce a flush concave edge. **Treat it as precision engineering made visible — like a perfectly-tight panel gap on a luxury car.** The detail's exactness is the point; a sloppy or approximate concave edge undermines the whole "engineered" signal. Inner radius equals `{rounded.video}` (32px) so the seam reads as a single curve continuing into the page.

### Footer

**Footer block** (`{component.footer}`)
`{colors.background}` surface, no border, 96px top padding, 48px bottom padding. Wordmark in `display` token. Link columns in `h3` headings + `body` rows, all `{colors.ink}`. Bottom legal row in `micro` token, `{colors.muted}`.

## Do's and Don'ts

### Do
- Lead with cinematic video; let motion carry the "future driving" feeling.
- Make the `{component.cutout}` pixel-precise — its exactness signals engineering.
- Use `{colors.glass}` + `{colors.glass-border}` for CTAs/overlays as tactile depth.
- Keep the canvas `{colors.background}`, warm-neutral, gradient-free.
- Set headlines in Helvetica at weight 500 with negative letter-spacing at display sizes.
- Reserve `{rounded.pill}` for primary action; never round cards to pill.
- Apply `{rounded.video}` (32px) to every full-bleed video band; no exceptions.
- Keep type quiet; let product + video lead.

### Don't
- **Don't make the cutout approximate** — a non-flush concave edge breaks the precision-engineering signal that justifies it.
- Don't add gradients to the page background or use neon — it's a premium showroom, not a gaming rig.
- Don't go dark-mode — Electra is deliberately a bright, clean showroom.
- Don't use `bg-blue-500`-style AI-default accents — branded neutrals only.
- Don't treat this like a SaaS (feature lists, pricing tables up top) — it's car-brand storytelling.
- Don't pile on motion — cinematic restraint; the videos are the show.
- Don't add `box-shadow` anywhere; depth is glass + cutout only.
- Don't set body type below 17px on desktop; the lift is intentional.
- Don't introduce italics or a display serif; Helvetica carries everything.
- Don't gap the bento grid past 4px; it must read as a single editorial tile.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤419px | Hero scales to 4:5 crop; cutout shrinks but stays flush; glass CTA full-width pill |
| Phone | 420-640px | Bento collapses to 1-up; headline drops from `hero` to `display` token |
| Large phone | 641-735px | Bento 1-up still; outer gutter increases to 32px |
| Tablet portrait | 736-833px | Bento 2-up; video bands retain `{rounded.video}` |
| Tablet landscape | 834-1023px | Bento 2-up with varied cell heights; glass CTAs return to inline width |
| Small desktop | 1024-1068px | Bento 4-up at compressed widths; hero `hero` token at 80px |
| Desktop | 1069-1440px | Full bento (4 cards, varied cells), full-scale cutout, hero at 96px |
| Wide desktop | ≥1441px | Content caps at 1440px; video bands continue full-viewport-width |

### Touch Targets
- Minimum 44×44 hit area on all interactive elements; visual button can be smaller, padding extends the target.
- Glass CTA padding is non-negotiable at 14px × 28px minimum on touch surfaces.
- Bento card tap target = full card; no nested interactive children that compete.

### Collapsing Strategy
- Nav: full inline links → hamburger sheet at ≤833px; brand wordmark stays.
- Sub-nav (if present on later pages): becomes a horizontal scroll strip at ≤735px with momentum scroll.
- Bento grid: 4-up → 2-up at 736px → 1-up at 640px; cell aspect ratios shift to 4:5 vertical on phone.
- Glass CTAs: inline pill → full-width pill below 640px; padding holds.
- Hero typography: `hero` (96) → `display` (72) → `h1` (48) across desktop → phone, with letter-spacing relaxing toward 0 below 48px.

### Image Behavior
- `srcset` at 1x / 2x / 3x on bento cells; explicit `sizes` per breakpoint.
- `aspect-ratio` CSS set on every image and video container to prevent CLS.
- Lazy-loading on every bento image; hero video uses `preload="metadata"` and `playsinline`; second band uses IntersectionObserver to start playback only when in view.
- Poster frames must match the first video frame within 2% to avoid visible swap.

## Iteration Guide

1. New page (model detail, configurator, story)? Start from `{colors.background}` + a video band + quiet Helvetica. The shell is the brand.
2. Introduce one component at a time; variants live in components, not pages. A new CTA shape requires updating `{component.button-primary}`, not forking it.
3. Use token references everywhere — `{colors.X}`, `{rounded.X}`, `{component.X}` — so swapping a value cascades cleanly.
4. Never document hover; the system is touch-first and Apple-convention. Default / active / focus only.
5. Display family vs body family: both are Helvetica, but display uses negative tracking and weight 500; body uses 0 tracking and weight 400. Don't blur the rule.
6. Shadow restriction holds: depth is glass + cutout. If a new surface needs depth, it gets a glass treatment or it doesn't get depth.
7. Chrome vs surface alternative: where glass would disappear (on `{colors.background}`), fall back to `{component.button-secondary}` (outline) — not to a new color.

## Known Gaps

- A real configurator (color/wheel/interior pickers, price summary) isn't specified — design it in the same light glass language with precise controls.
- Spec tables / range-and-charging data layouts aren't documented — they'd need a clean, engineered table style consistent with Helvetica `tnum`.
- Validation states (input error, success, disabled) are not surfaced in analyzed pages.
- Dark-mode counterpart is intentionally absent; if ever needed (e.g., night configurator), it requires its own governing decision, not a recolor.
- Exact `backdrop-blur` radius beyond `md` (12px) is not surfaced in analyzed pages.
- The cutout is a bespoke SVG construction; on unusual aspect ratios it needs re-checking to stay flush.
