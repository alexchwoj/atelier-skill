---
version: "1"
name: "Quiet plum auth"
description: "A single-card, paper-white authentication screen in a soft off-white field, carried by one deep plum brand mark and a muted mauve primary action, with restrained General Sans/F37 Moon type pairing."
colors:
  background: "#F8F8F6"
  surface: "#FAFAF9"
  text-primary: "#101010"
  text-secondary: "#565551"
  border: "#EFEEEB"
  accent: "#791A49"
  accent-deep: "#640D37"
typography:
  display-lg:
    fontFamily: "F37 Moon"
    fontSize: "36px"
    fontWeight: 600
    lineHeight: "1"
    letterSpacing: "-0.4px"
  body-md:
    fontFamily: "F37 Moon"
    fontSize: "20px"
    fontWeight: 475
    lineHeight: "1.3"
  body-ui:
    fontFamily: "General Sans"
    fontSize: "16px"
    fontWeight: 525
    lineHeight: "1.4"
spacing:
  base: "8px"
  gap: "16px"
  card-padding: "10px 25px"
rounded:
  control: "12px"
  card: "20px"
  pill: "9999px"
components:
  button-primary:
    background: "#791A49"
    text-color: "#FFF9FB"
    radius: "20px"
    height: "56px"
    padding: "10px 25px"
  button-secondary-outline:
    background: "transparent"
    text-color: "#101010"
    radius: "20px"
    height: "56px"
    padding: "10px 25px 10px 23px"
    hover-background: "rgba(0, 0, 0, 0.02)"
  button-nav-ghost:
    background: "transparent"
    text-color: "#101010"
    radius: "12px"
    height: "40px"
    padding: "4px 12px"
    border: "1px solid rgba(0, 0, 0, 0)"
    hover-background: "rgba(0, 0, 0, 0.02)"
  card-auth:
    background: "#FAFAF9"
    radius: "20px"
    border: "1px solid #EFEEEB"
    padding: "24px"
---
# Quiet plum auth
Source: https://app.lola.ai/dashboard?chat=chat_803a17fa503f204f7bc2dcff4fc82794

## Overview
This is a minimalist, single-purpose authentication screen built on a warm off-white page field, not a pure white one — the pixel field is near-totally one soft gray-white (#F0F0F0/#F8F8F6 territory), with a tiny, deliberate concentration of saturated deep plum/wine reserved for the wordmark and primary action. The aesthetic sits closest to a restrained Swiss-adjacent minimalism: one centered bounded card, generous surrounding negative space, a two-weight type system (a tight display serif-adjacent face for the headline, a workhorse grotesk for everything functional), and zero decorative imagery. Nothing competes with the single task at hand.

## Composition
The page opens on an edge-to-edge transparent navbar holding only a wordmark at left and a locale switcher at right — no nav links, no hamburger. Below it, vertically and horizontally centered in the viewport, sits one bounded card: a short headline, a one-line subheading, a Google OAuth control, a text divider, an email input, and a primary submit button, in that strict top-to-bottom stack. Beneath the card, small-type legal links sit centered. The page closes with a quiet logo strip pinned near the bottom of the viewport — three partner/trust marks in muted gray, the only element that breaks the card's vertical monopoly. The deliberate choice here is radical restraction: one column, one card, one decision point, rejecting any multi-column marketing dressing (no side illustration, no background art) to keep total focus on the auth task.

## Colors
The dominant field is a warm near-white (#F8F8F6, ~92% of declared area; pixel-sampled as ~97% a light gray-white), functioning as the page background — confirmed by the pixel field, not a darker surface. The card sits on an even paler, almost imperceptibly distinct off-white (#FAFAF9), delineated only by a 1px hairline border (#EFEEEB). Text ink is near-black (#101010) for primary content and a warm charcoal-gray (#565551) for secondary/muted labels (placeholder text, divider "or"). The entire saturated-color budget of the page is rationed to two wine/plum values — #791A49 as the primary button fill and wordmark color, and #640D37 as a deeper companion tone — together covering roughly 1% of rendered pixels. No blue, no green, no amber appears on this screen despite those tokens existing in the broader system; this page is strictly monochrome-plus-one-accent. Borders and dividers stay in the same #EFEEEB/#E8E7E3 neutral family as the background, never darkening into true gray.

## Typography
Two families carry the hierarchy. F37 Moon, a rounded/humanist display face, sets the headline at 36px/600 weight, line-height 1, tight -0.4px tracking — compact and confident for a four-word heading — and also sets the subheading at 20px/475 weight, lh 1.3, reading noticeably lighter and looser than the headline despite the shared family. General Sans, a General-grotesk workhorse, carries all interface text — button labels, input placeholder, legal copy — at 16px/525 weight, color #101010, with secondary/muted instances dropping to #565551. The pairing logic: F37 Moon for voice (headline, subhead), General Sans for function (every control and label), with no serif or mono accent present on this screen.

## Layout
This is a single-column, centered-card layout, not a grid system — one bounded rectangle, roughly 375–400px wide, horizontally and vertically centered with no visible max-width container competing against it. Internal card spacing runs on an 8px-based rhythm (8/10/12/16px gaps between the OAuth button, divider, input, and submit button). The navbar is full edge-to-edge (0px left/right inset, 1920px measured width, 64px tall, 0px corner radii on all four corners — a hard rectangular bar, not inset or capsule) holding exactly 2 items. The bottom logo strip is a simple horizontal cluster (not a grid), loosely gapped, centered under generous whitespace. There are no card grids, feature grids, or multi-item rows anywhere on this page — density is intentionally minimal throughout.

## Components
- **Navbar**: edge-to-edge square bar, 64px tall, spans full 1920px viewport width with 0px left/right inset, all four corner radii 0px (a flat rectangular strip, not inset or rounded), background transparent over the page field, static (no scroll-shadow observed). Holds exactly 2 items: a wordmark logotype at far left in the deep plum accent, and a locale/language selector with a chevron at far right in dark ink text.
- **Button — primary (hero/card primary action)**: filled #791A49, text #FFF9FB, radius 20px (rounded, not full pill), height 56px, padding 10px 25px. This is the single most emphasized control on the screen — the filled email-submit action beneath the input — rendered here in a visibly muted/dusty mauve tone in its resting disabled-style state pending input, with the saturated #791A49 as its full-strength fill.
- **Button — secondary outline**: transparent fill, text #101010, radius 20px, height 56px, padding 10px 25px 10px 23px, hover background rgba(0,0,0,0.02). This is the Google OAuth control — full-width, bordered-card-adjacent, carrying a small multicolor "G" mark plus label, sitting above the divider as the first-offered sign-in path.
- **Button — nav ghost**: transparent fill, text #101010, radius 12px, height 40px, padding 4px 12px, border 1px solid rgba(0,0,0,0), resting shadow fully transparent (`rgba(0,0,0,0) 0px 0px 0px 0px` ×5), hover → background rgba(0,0,0,0.02). This is the navbar's locale-switcher control, the only interactive element beside the wordmark.
- **Card — auth container**: background #FAFAF9, radius 20px, border 1px solid #EFEEEB, soft ambient shadow `rgba(18,18,18,0.06) 0px 1px 2px 0px` (barely-there elevation, level-1 surface). Internal anatomy top-to-bottom: centered headline (F37 Moon 36px), centered one-line subhead (F37 Moon 20px), full-width Google button, a horizontal-rule-flanked "or" divider in muted secondary text, a labeled email text input with placeholder copy, and the full-width primary submit button at the base. No media, no chips, no numerals — purely a credential-entry form.
- **Trust/logo strip**: positioned at the very bottom of the viewport, a simple horizontal row of 3 grayscale partner marks, evenly spaced, no card surface or border around them — sits directly on the page background, functioning as a social-proof footer band rather than a true footer with links.

## Graphics & Effects
The only background graphic on the page is a near-invisible vertical gradient spanning the full page — `linear-gradient(rgb(248, 248, 246) 27%, rgb(248, 248, 246))` — effectively a flat fill rather than a visible color transition, confirming the page reads as solid off-white, not gradient-driven. The card's elevation is carried by a single soft shadow, `rgba(18, 18, 18, 0.06) 0px 1px 2px 0px`, a near-flat level-1 lift with no blur spread to speak of — this is a flat-design system with the faintest whisper of material elevation, not a glassmorphic or neumorphic one. No noise, no mesh gradient, no imagery, no video surface appears anywhere on this screen.

## Motion
State changes are fast and purely utilitarian: background-color, border-color, and box-shadow transitions run at 0.15s on a `cubic-bezier(0.4, 0, 0.2, 1)` ease-out-style curve — this governs button hover fades (e.g., the 0.02-opacity black wash on outline and ghost buttons). A broader transition set additionally animates color, transform, and opacity on the same 0.15s curve for pressed/focus states. A slower, springier `0.38s cubic-bezier(0.16, 1, 0.3, 1)` curve exists in the system for transform/border-radius changes — reserved for larger structural transitions (e.g., stage/panel replacements) rather than this screen's micro-interactions. No looping or decorative animation is present; motion here is entirely feedback-driven and near-instant.

## Guardrails
- Keep the page field a warm off-white (#F8F8F6/#FAFAF9) — never shift it to pure white or any gray-900/dark-mode surface.
- Keep the plum/wine accent rationed to the wordmark and primary CTA only; do not spread it into backgrounds, borders, or secondary buttons.
- Preserve the navbar as a flat, edge-to-edge, 0-radius, transparent bar — do not inset it, round its corners, or add a background fill.
- Never substitute the navbar's ghost-button values for the card's primary or secondary button radii — they are distinct (12px vs 20px).
- Keep card elevation to the single near-flat 1px/2px soft shadow — do not add glassmorphic blur or heavy drop shadows.
- Preserve the single-column, one-card composition — do not introduce multi-column marketing layout, imagery, or additional grids.
