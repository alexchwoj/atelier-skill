---
version: "1"
name: "Awesome — Digital-Underground Motion Studio"
description: "A cinematic, motion-heavy portfolio for a web-dev studio with a digital-underground/club energy. Pitch-black canvas, three RGB-evoking neon accents, all-uppercase condensed type, a cursor-reactive voxel spotlight hero, hover text-glitch, a cursor-following fullscreen video preview, and a liquid-glass header on scroll. Built Vue 3 + Three.js."
colors:
  bg: "#000000"
  fg: "#FFFFFF"
  muted: "rgba(255,255,255,0.55)"
  line: "rgba(255,255,255,0.12)"
  accent-cyan: "#00F8E2"
  accent-yellow: "#FFBE1D"
  accent-pink: "#FE838F"
typography:
  hero:
    fontFamily: "Anton"
    transform: "UPPERCASE"
    role: "huge condensed display (48→132px)"
  body:
    fontFamily: "Oswald"
    role: "body, nav, labels (condensed)"
spacing:
  pad-x: "clamp(20px, 4vw, 56px)"
  pad-y: "clamp(20px, 3vh, 40px)"
rounded:
  none: "0px (sharp, mechanical)"
components:
  voxel-spotlight: "Cursor-reactive WebGL voxel scene as hero background"
  text-glitch: "Hover-triggered glitch on headings/links"
  cursor-video-preview: "Fullscreen video preview that follows the cursor over a project name"
  glass-header: "Liquid-glass header that activates on scroll"
---

# Awesome — Digital-Underground Motion Studio

> Fivefold showcase. Pairs with the Awesome prompt. This is the loudest showcase in the library — use this file to keep its energy coherent rather than chaotic when you extend it.

## Overview

Awesome is a cinematic, motion-saturated portfolio for a web-development studio styled as a digital underground — pitch-black canvas, three RGB-evoking neons, condensed uppercase type, and a cursor-reactive voxel spotlight as the hero's primary inhabitant. The visual atmosphere is "club / arcade / late-night dev room": every interaction is engineered to reward movement, and the page only fully exists when the visitor plays with it.

Awesome is **a digital-underground / club for a web-dev studio** — pitch-black, neon-lit, motion-saturated. Where most of the library is restraint, Awesome is the opposite by design: a cursor-reactive voxel spotlight, glitching text, a video that chases your cursor. It's a maximalist showreel whose whole argument is "we can build anything, and we'll keep you playing while we prove it." The governing decision: **loud is the point — but loud with intent, to drive engagement.** Every interaction is both a technical flex and an engagement hook: the more the visitor moves the cursor, the more the page comes alive, the longer they stay. The three neon accents and condensed uppercase type create a club/arcade energy that's deliberately the antithesis of the restrained showcases.

The system extends across surfaces by treating the voxel hero, glitch text, and cursor-video preview as the three signature instruments — they belong to the studio's identity the way a logo would belong to a brand. Inner case-study pages, contact, and process surfaces inherit the same pitch-black canvas, the same condensed uppercase voice, and the same engagement-with-intent motion rule; the neons follow the visitor as accent punctuation, never as flat fills. Consistency here is not about reusing the same component — it is about reusing the same energy.

**Key Characteristics:**
- Pitch-black canvas (`{colors.bg}`) — a dark room engineered for neon to glow in.
- Three RGB-evoking neon accents — cyan, yellow, pink — used as punctuation, never as fills.
- All-uppercase condensed type — Anton (display, 48→132px) over Oswald (body / nav / labels).
- Mechanical sharp corners (`{rounded.none}`) — no softness, no warmth, no rounded calm.
- Cursor-reactive WebGL voxel hero — the page's primary engagement hook.
- Hover-triggered RGB text-glitch on headings and links.
- Cursor-following fullscreen video preview on project hover.
- Liquid-glass header that activates (frosts) on scroll — the single calm element.

## Colors

> **Source pages analyzed:** hero with voxel spotlight, work list with sliding triangle, project hover with cursor-video preview, glass header on scroll — describing the full portfolio landing surface.

Black plus white plus three RGB neons. The multi-accent palette is intentional — this is the loud showcase, and the deliberate exception to the library's usual single-accent restraint. A web-dev studio's identity is "digital," so the palette is literally screen-light: red-evoking pink, green-evoking cyan, and an amber yellow that completes the screen-light triad.

### Surface
- `{colors.bg}` (#000000) — True black. The page canvas. Pitch black exists because the neons only scream against it; any lighter background would dilute the entire system.

### Text
- `{colors.fg}` (#FFFFFF) — Primary text and headlines. Pure white on pitch black for maximum contrast at hero scales.
- `{colors.muted}` (rgba(255,255,255,0.55)) — Secondary text, metadata, captions. White at 55% opacity for hierarchy without introducing a second hue.

### Hairlines & Borders
- `{colors.line}` (rgba(255,255,255,0.12)) — Hairline dividers, work-list row separators, header underline on scroll. White at 12% — just enough to organize the page without softening the black.

### Brand & Accent (the RGB triad)
- `{colors.accent-cyan}` (#00F8E2) — Cyan neon. Voxel light, glitch channel, link active state. The "screen blue-green" axis of the triad.
- `{colors.accent-yellow}` (#FFBE1D) — Amber neon. Sliding triangle marker, focus rings, attention punctuation. The warm axis of the triad.
- `{colors.accent-pink}` (#FE838F) — Pink neon. Glitch channel, hover punctuation, secondary accent moments. The "red-evoking" axis of the triad. Used as energetic punctuation — glitch channels, hover states, voxel light, accent marks — never as flat fills.

## Typography

### Font Family
- **Display:** `Anton, "Oswald Condensed", "Arial Narrow", sans-serif` — single-weight condensed display face.
- **Body / Nav / Labels:** `Oswald, "Arial Narrow", "Helvetica Condensed", sans-serif` — variable condensed sans (200–700).
- OpenType: no special features required; the typographic voice is achieved through case (UPPERCASE), tracking, and scale, not contextual alternates.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| display-hero | clamp(48px, 12vw, 132px) | 400 (Anton single) | 0.92 | -0.01em | Hero kill-line over the voxel scene |
| display-section | clamp(40px, 7vw, 88px) | 400 (Anton) | 0.95 | 0 | Section openers |
| h1 | 56px | 400 (Anton) | 1.0 | 0 | Inner page titles |
| h2 | 36px | 500 (Oswald) | 1.1 | 0.02em | Sub-section titles, UPPERCASE |
| work-list | clamp(40px, 6vw, 80px) | 500 (Oswald) | 1.05 | 0.01em | Project list rows, UPPERCASE |
| nav | 14px | 500 (Oswald) | 1.0 | 0.08em | Top nav links, UPPERCASE |
| body | 16px | 400 (Oswald) | 1.45 | 0.01em | Paragraphs, descriptions |
| label | 12px | 600 (Oswald) | 1.2 | 0.12em | Eyebrows, metadata, UPPERCASE |
| micro | 11px | 500 (Oswald) | 1.3 | 0.1em | Footer legal, captions, UPPERCASE |

### Principles
- Everything trends UPPERCASE — the club-poster voice; mixed case is reserved only for long-form body paragraphs.
- Hero type stays enormous (48→132px via clamp) — scale is a load-bearing part of the loudness argument.
- Tracking widens as size shrinks (display 0 → micro 0.1em) — condensed faces need air at small sizes to stay legible.
- Anton runs single-weight at all display sizes; weight contrast is never used as hierarchy at display scale.
- Oswald handles every weight contrast (400 body / 500 nav / 600 labels) — keep Anton out of body roles.
- Line-height tightens as type grows (1.45 body → 0.92 hero) — tall condensed caps need to overlap rhythmically.

### Note on Font Substitutes
When Anton or Oswald are unavailable (e.g., system font fallback, locked corporate env), substitute `Arial Narrow` or `Helvetica Condensed` at the same sizes. Expect the system fonts to render ~3–5% wider than Anton — compensate by reducing display tracking by 0.01em and tightening line-height by 0.02. Avoid swapping to a non-condensed sans (Helvetica, Inter, etc.) — the entire visual argument depends on condensed proportions; a normal-width fallback would collapse the design's identity.

## Layout

### Spacing System
- Base unit: 4px. All spacing is a multiple of 4.
- `pad-x` (`{spacing.pad-x}`) — clamp(20px, 4vw, 56px). Horizontal page gutter; fluid so condensed display type breathes at any width.
- `pad-y` (`{spacing.pad-y}`) — clamp(20px, 3vh, 40px). Vertical page gutter; calmer than horizontal to keep the hero from feeling cramped.
- Work-list row rhythm: 24px vertical between rows on desktop, 16px on mobile.
- Section gap: 96px desktop / 64px tablet / 48px mobile — generous, so loudness reads as confident not crowded.

### Grid & Container
- Surface is full-bleed by default — the voxel hero, glass header, and cursor-video preview all run edge-to-edge.
- Content max-width inside text-heavy sections: 1280px, centered.
- Work list is a single-column stack on all breakpoints — the rhythm IS the design; columns would dilute it.
- Gutters between hero overlay text and viewport edge follow `{spacing.pad-x}`.

### Whitespace Philosophy
Whitespace in Awesome is black — pitch-black negative space functions as the dark room the neon glows in. The page uses generous vertical rhythm (96px section gaps) not because the design is minimal, but because each loud element needs room to breathe before the next one fires. Crowded loud reads as noise; spaced loud reads as confident. Negative space is the silence between drum hits, not the absence of music.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border, sits directly on `{colors.bg}` | Work-list rows, body text, hero overlay |
| Hairline | 1px `{colors.line}` divider | Row separators, header underline on scroll, footer divider |
| Backdrop blur | `backdrop-filter: blur(20px) saturate(140%)` over rgba(0,0,0,0.6) | Glass header on scroll |
| Neon glow | `box-shadow: 0 0 24px {colors.accent-*}` at 40% opacity | Focus rings, active triangle marker, voxel light source |

Shadow philosophy: Awesome rejects soft drop-shadows entirely — there is no warm bedroom-lamp light in this design. Depth comes from luminance (neon glow, backdrop blur) and from the voxel scene's own 3D parallax, never from gray fades. A traditional gray shadow on pitch black would read as muddy; neon glow reads as digital.

**Decorative Depth:**
- The voxel spotlight provides the page's primary 3D depth — cursor-reactive parallax replaces the role traditional shadows would play.
- The glass header's backdrop blur creates the only true z-axis layering in the chrome.
- Text-glitch creates pseudo-depth via RGB channel offset — flat type with the illusion of 3D registration error.
- The cursor-video preview floats above the page with no shadow — its scale and motion alone signal layer.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Everything: buttons, cards, work-list rows, header, video preview |
| `{rounded.xs}` | not surfaced | — |
| `{rounded.sm}` | not surfaced | — |
| `{rounded.md}` | not surfaced | — |
| `{rounded.lg}` | not surfaced | — |
| `{rounded.pill}` | not surfaced | — |
| `{rounded.full}` | 50% | Cursor dot / custom cursor only |

Sharp corners are doctrinal here. The mechanical/industrial/club identity collapses the moment anything gets rounded — soft corners read as friendly app UI, which is the opposite of the studio's positioning.

### Photography Geometry
- Hero aspect: full-viewport — the voxel scene fills 100vw × 100vh.
- Cursor-video preview aspect: 16:9, sized at ~40vw on desktop, ~70vw on tablet, hidden on touch.
- Project thumbnails (inner pages, not surfaced on landing): 16:9, sharp corners, no overlay treatment.
- Image radius: always `{rounded.none}` — even portrait crops keep sharp corners.
- Loading: hero voxel scene is rendered on canvas (no image asset); video previews are mp4 with poster frame at the first frame to avoid black flashes.

## Components

### Top Navigation

**Glass Header** — `{component.glass-header}` — Fixed top nav. Default state is fully transparent, sitting directly over the voxel scene. Active state (after scrollY > 80px) applies `backdrop-filter: blur(20px) saturate(140%)` over rgba(0,0,0,0.6) and reveals a 1px `{colors.line}` underline. Nav links use the `nav` type token (14px Oswald 500 UPPERCASE, 0.08em tracking). Focus state: `outline: 2px solid {colors.accent-yellow}` with 4px offset.

### Buttons

**Primary Button** — `{component.button-primary}` — Used for "Start a project" and other primary CTAs. Default: `{colors.fg}` background, `{colors.bg}` text, 16px Oswald 600 UPPERCASE, 0.08em tracking, padding 16px 32px, radius `{rounded.none}`. Active (pressed): inverts to `{colors.bg}` background, `{colors.fg}` text, with a 1px `{colors.line}` border. Focus: 2px solid `{colors.accent-yellow}` outline at 4px offset.

**Secondary Button** — `{component.button-secondary}` — Used for "View work" and ghost CTAs. Default: transparent background, 1px solid `{colors.fg}` border, `{colors.fg}` text, same typography as primary, same padding, radius `{rounded.none}`. Active: background fills with `{colors.fg}` at 8% opacity. Focus: 2px solid `{colors.accent-cyan}` outline at 4px offset.

**Utility Button** — `{component.button-utility}` — Used for icon-only controls (mute, fullscreen). Default: 40×40px square, transparent background, `{colors.fg}` icon at 24px, radius `{rounded.none}`. Active: background flashes `{colors.accent-pink}` at 20% opacity for 120ms. Focus: 2px solid `{colors.accent-yellow}` outline at 2px offset.

### Cards & Containers

**Work-List Row** — `{component.work-row}` — A single project row in the work list. Default: full-bleed, 24px vertical padding, `{colors.line}` bottom border, `work-list` type token in `{colors.fg}`, UPPERCASE. Active state (hovered/keyboard-focused): the `{colors.accent-yellow}` sliding triangle marker translates to the row's left edge, and the row's text triggers `{component.text-glitch}`. Focus state (keyboard): a 2px `{colors.accent-cyan}` outline wraps the row's text bounds.

**Cursor-Video Preview** — `{component.cursor-video-preview}` — Fullscreen-feeling video preview that follows the cursor over a hovered work row. Default: hidden. Active (project row hovered or focused): a 16:9 video at ~40vw renders at the cursor position with 60ms lerp, no shadow, no border, radius `{rounded.none}`. On touch: disabled entirely; replaced by a tap-to-expand inline poster (see Responsive).

**Voxel Hero Container** — `{component.voxel-spotlight}` — The full-viewport WebGL canvas behind the hero text. Default: idle voxel field, ambient cyan/pink/yellow at low intensity. Active (cursor present): a spotlight tracks the cursor, raising local voxel brightness toward `{colors.accent-cyan}`. No focus state — it is decorative chrome, not focusable. Reduced-motion fallback not surfaced in analyzed pages.

### Inputs & Forms

**Text Input** — `{component.input-text}` — Used in contact form (inner page). Default: transparent background, 1px solid `{colors.line}` bottom border only (no top/sides), 16px Oswald 400 in `{colors.fg}`, placeholder in `{colors.muted}`, padding 12px 0, radius `{rounded.none}`. Active (focused): bottom border thickens to 2px and switches to `{colors.accent-cyan}`. Validation states not surfaced in analyzed pages.

### Footer

**Footer** — `{component.footer}` — Full-bleed, `{colors.bg}` background, 1px `{colors.line}` top border. Contains studio name in `display-section` Anton UPPERCASE, contact links in `nav` token, and `micro` legal in `{colors.muted}`. No decorative depth — flat, mechanical, the page's calm exit.

## Do's and Don'ts

### Do
- Use the three neons (`{colors.accent-cyan}`, `{colors.accent-yellow}`, `{colors.accent-pink}`) as RGB-evoking punctuation — glitch channels, hover states, voxel light, sliding-triangle marker.
- Keep hero type enormous via the `display-hero` clamp — scale is part of the loudness argument.
- Set every corner to `{rounded.none}` — the mechanical/club identity depends on it.
- Apply `backdrop-filter: blur(20px) saturate(140%)` only to the glass header — it's the lone calm element.
- Reserve Anton for display roles and let Oswald handle every body and nav weight.
- Keep section rhythm generous (96px desktop section gap) — spaced loud reads as confident, crowded loud reads as noise.
- Tie every motion effect to engagement — cursor movement must reward the visitor (voxel light follows, video tracks, triangle slides).
- Ship a touch-optimized fallback for every cursor-driven effect — broken on mobile is worse than absent on mobile.

### Don't
- Don't go quiet or minimal — restraint is off-brand for this showcase by design.
- Don't flatten the neons into solid background fills — they're punctuation, not surface color.
- Don't soften corners — no `{rounded.sm/md/lg}` anywhere; pill or rounded shapes collapse the identity.
- Don't apply soft gray drop-shadows — depth comes from neon glow and backdrop blur, never from warm-room shadows.
- Don't let WebGL or video stutter — a janky "we build websites" page is self-defeating.
- Don't use Anton for body or nav — display face only.
- Don't add a fourth accent color — the three RGB neons are the system; a fourth dilutes the screen-light metaphor.
- Don't pile on effects without engagement payoff — every loud move must earn its noise by rewarding interaction.
- Don't mix-case headlines — UPPERCASE is the voice; sentence case in headlines breaks the club-poster rhythm.
- Don't render the glass header with a solid black background — it must keep the backdrop blur to remain the "calm but alive" anchor.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤419px | Voxel scene drops to lowest quality preset or static gradient fallback; cursor-video disabled; hero clamp lands at 48px; section gap collapses to 48px. |
| Phone | 420–640px | Voxel at low quality; tap-to-play inline poster replaces cursor-video; glitch effect simplified to single-channel offset; section gap 48px. |
| Large phone | 641–735px | Same as Phone with hero type sized via clamp (~60px); work-list rows tighten to 16px vertical padding. |
| Tablet portrait | 736–833px | Voxel at medium quality; cursor-video falls back to tap-expand modal; sliding triangle remains on touch via focus state; section gap 64px. |
| Tablet landscape | 834–1023px | Voxel medium-high; touch hover fallback for work list; glass header retained; section gap 64px. |
| Small desktop | 1024–1068px | Full voxel spotlight, cursor-video preview, glitch, sliding triangle — the complete maximalist experience begins here. |
| Desktop | 1069–1440px | Full system at target framerate; hero clamp approaches max 132px. |
| Wide desktop | ≥1441px | Hero clamp caps at 132px; `{spacing.pad-x}` lands at 56px max — page doesn't keep growing past the design's intended scale. |

### Touch Targets
- Minimum interactive size: 44×44px (work-list rows naturally exceed this via row padding).
- Utility buttons fixed at 40×40px on desktop expand to 44×44px on touch breakpoints.
- Work-list rows expose the full row as the tap target — not just the text.

### Collapsing Strategy
- **Top nav:** desktop horizontal nav collapses to a single hamburger drawer below 736px; drawer items use `display-section` Anton UPPERCASE.
- **Voxel hero:** desktop fullscreen voxel scene drops a quality tier per breakpoint down to a static black-with-neon-gradient fallback on small phone.
- **Work list:** stays single-column at every breakpoint — the rhythm is the design.
- **Cursor-video preview:** disabled on touch; replaced by a tap-to-expand inline poster card.
- **Glass header:** retained at every breakpoint, with backdrop-blur preserved.
- **Hero typography:** scales fluidly via clamp(48px, 12vw, 132px) — no breakpoint-specific overrides.

### Image Behavior
- Project posters (cursor-video poster frames): srcset at 1x/2x, lazy-loaded except for the first project (eager).
- Aspect ratio locked at 16:9 — sharp `{rounded.none}` corners at every size.
- Video previews preloaded `metadata` only; full preload triggers on focus/hover intent.
- Reduced-data preference disables video preview entirely and shows poster only.

## Iteration Guide

1. New page or section? Keep it loud and motion-led, but every effect must earn engagement (reward interaction) — decoration without payoff is not on-brand.
2. Add new color tokens only as variants of the existing three neons (e.g., a dimmer cyan). Never introduce a fourth hue — it breaks the RGB metaphor.
3. New components live as `### sub-headings` under the Components section with default / active / focus states only — never document hover.
4. Reference design tokens via `{colors.tokenName}` and `{component.name}` inside backticks — never hard-code hex inside component docs.
5. Display faces remain Anton; body / nav / labels remain Oswald. If a new role needs a third typographic voice, find weight or tracking variation inside Oswald instead.
6. Shadow restriction holds — depth comes from neon glow and backdrop blur, never from gray drop-shadows. The glass header is the only blurred surface.
7. Performance is non-negotiable — a dev studio's site janking is the worst possible signal. New WebGL or video work must ship with a quality-tier ladder and a reduced-motion fallback before merging.

## Known Gaps

- Touch / no-cursor fallbacks for the voxel spotlight, cursor-video, and glitch are under-specified — they need real designs, not just "disabled," or mobile feels broken.
- Reduced-motion accessibility (a calm fallback for users who opt out of motion) isn't addressed and is important given how motion-heavy this is.
- WebGL performance budgets and low-end GPU degradation tiers aren't specified — the quality ladder needs concrete FPS targets per device class.
- Form validation states (error, success, disabled) for the contact input are not surfaced in analyzed pages.
- Inner case-study page system is not surfaced — only the portfolio landing is documented; case-study layouts will need their own iteration pass that preserves the engagement-with-intent rule.
- Exact blur radii, glow spreads, and lerp constants are documented narratively but not as quantified motion tokens — a future pass should formalize them.
