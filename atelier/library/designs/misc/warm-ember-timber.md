---
version: "1"
name: "Warm Ember Timber"
description: "A dark-mode-default app shell in warm espresso-brown tones, with a rationed terracotta accent on primary actions and a persistent left sidebar over a near-black content canvas."
colors:
  background: "#1A1714"
  background-elevated: "#242019"
  surface: "#2A251F"
  sidebar: "#221E19"
  border: "#3D362E"
  border-alt: "#815942"
  text-primary: "#F0E8DF"
  text-secondary: "#A89B8C"
  accent: "#D4845A"
  accent-hover: "#E0946C"
  brand-mark: "#EAD3A6"
typography:
  display-lg:
    fontFamily: "Manrope"
    fontSize: "35px"
    fontWeight: 700
    lineHeight: "1.15"
  headline-md:
    fontFamily: "Manrope"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: "1.3"
  body-md:
    fontFamily: "Manrope"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "1.55"
  body-base:
    fontFamily: "Manrope"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.55"
spacing:
  base: "8px"
  gap-sm: "12px"
  gap-md: "16px"
  gap-lg: "28px"
rounded:
  control: "6px"
  card: "12px"
  pill: "15px"
components:
  button-ghost-outline:
    background: "#242019"
    text-color: "#A89B8C"
    radius: "15px"
    height: "40px"
    padding: "10px"
    border: "1px solid rgb(61, 54, 46)"
    hover-background: "rgba(255, 255, 255, 0.12)"
    hover-text-color: "#F0E8DF"
  button-primary:
    background: "#D4845A"
    text-color: "#FFFFFF"
    radius: "15px"
    height: "43px"
    padding: "10px 12px"
    hover-background: "#E0946C"
  button-ghost-outline-alt:
    background: "#242019"
    text-color: "#A89B8C"
    radius: "15px"
    height: "43px"
    padding: "10px 14px"
    border: "1px solid rgb(61, 54, 46)"
    hover-background: "rgba(255, 255, 255, 0.12)"
    hover-text-color: "#F0E8DF"
  button-auth-dark:
    background: "#1A1714"
    text-color: "#F0E8DF"
    radius: "12px"
    height: "45px"
    padding: "10px 12px"
    border: "1px solid rgb(61, 54, 46)"
  card-surface:
    background: "#2A251F"
    radius: "12px"
    padding: "24px"
    border: "1px solid #3D362E"
  card-form-row:
    background: "transparent"
    radius: "0px"
    padding: "0px"
---
# Warm Ember Timber
Source: https://skladdoma.ru/

## Overview
This is a dark-mode-default utility shell rendered in warm espresso and cocoa tones rather than the usual cool near-black — a minimalist, form-dense application interior built for sustained data entry, not marketing spectacle. The identity is carried by a single rationed terracotta accent (#D4845A) landing only on the primary action and a brand glyph, against layered brown-black surfaces (#1A1714 base, #242019 elevated, #2A251F card) separated by hairline borders rather than shadows. Manrope, used at every size from oversized heading to muted helper label, gives the whole system one calm geometric-sans voice. The pixel field confirms the read: roughly 76% of the frame sits at near-black-brown (#181818-family), with a faint warm sidebar sliver and an even fainter terracotta wash — this is a quiet, document-like tool, not a hero-led gradient showcase.

## Composition
The first screen is a classic holy-grail app shell: a fixed, narrow left sidebar (logo + 5 nav items + theme/collapse/auth controls stacked at its base) beside a scrollable main column capped at a document-like measure. Inside that main column the rhythm is centered-title → subhead sentence → an explanatory bordered card → a two-up row of expandable disclosure bars → a hairline divider → a left-aligned content heading → a bordered form card. This is a content-first, form-first composition: no hero illustration, no full-bleed imagery, just a short centered mission statement followed immediately by functional UI. The deliberate choice is restraint — a single muted radial wash in the far corner instead of a saturated gradient hero — rejecting the aurora/mesh-gradient marketing convention in favor of a tool's plainness.

## Colors
Background (#1A1714) and its elevated step (#242019) are warm near-blacks, not neutral grays — the whole ramp is tinted brown, which is what separates this system from a generic dark theme. Surface (#2A251F) lifts cards one step lighter for the form container; sidebar (#221E19) sits a half-step darker than the page to read as its own rail. Text-primary (#F0E8DF) is a warm cream reserved for headings and emphasized labels; text-secondary (#A89B8C) is a desaturated taupe used for body copy, placeholders, and ghost-button labels — this is the dominant reading color by character weight. Terracotta (#D4845A) is the single saturated hue in the system, rationed to the primary button fill, its hover state (#E0946C), and a tiny brand-mark tint (#EAD3A6) on the logo glyph; everything else — nav items, dividers, form chrome — is deliberately left unsaturated so the one warm accent reads unmistakably as "go."

## Typography
Manrope is the only family in use, carrying both display and body duty, which keeps the voice singular and document-like rather than editorial. Display-lg (35px/700, lh 1.15) sets the centered page title; headline-md (18px/700, lh 1.3) marks card and section headings (the explanatory card title, "Add item" heading). Body-md (18px/400, lh 1.55) is used for the subhead sentence beneath the title; the smaller body-base (16px/400) in muted #A89B8C covers helper copy, input placeholders, and sidebar labels. There is no serif or mono accent anywhere in this system — hierarchy comes entirely from Manrope's weight and size steps, not family contrast.

## Layout
Content is capped at a 720px max-width column, centered under a wide sidebar-offset canvas. Spacing runs on a tight, almost 4px-rounded scale: 6px/8px/10px/12px/16px/28px gaps, giving a dense, form-like rhythm rather than generous marketing whitespace. The two explanatory disclosure bars sit in a 2-column grid, gap 16px, with an uneven split (roughly 14%/84% row heights when expanded) — a compact label row, with a single bar dominating when opened. Stacked card groups below use single-column grids (gap 24px, rows 100/38; gap 12px, rows 100/100) — vertically listed, full-width rows rather than a side-by-side card grid, confirming this page is list/form-led, not a card-grid showcase. Corner radii step from 6px (tight controls) to 12-15px (buttons, cards) — rounded, friendly, never sharp, never full-pill except where noted.

## Components
- **Navbar/Sidebar**: a wide inset vertical bar (measured 107px-equivalent chrome depth, here reading as a tall left rail rather than a top bar), transparent background, flush top-left to bottom-left with square corners — this is a persistent app-shell sidebar, not a floating or capsule nav. Carries a logo mark (boxed glyph icon + two-line wordmark + a small pill-shaped "BETA" tag), 5 nav items stacked vertically each with a leading icon, then at the base a theme toggle, a collapse chevron control, and two stacked auth buttons.
- **Primary CTA (button-primary)**: `#D4845A` fill, white text, radius 15px (rounded, not pill), height 43px, padding 10px 12px, hover → `#E0946C`. This is the single warm-filled control in the system — used for the form's save action and is the highest-contrast button on screen.
- **Ghost outline button (button-ghost-outline)**: `#242019` fill, `#A89B8C` text, radius 15px, height 40px, padding 10px, 1px solid `#3D362E` border; hover fills to `rgba(255,255,255,0.12)` with text brightening to `#F0E8DF`. Used for the two disclosure toggle bars under the intro card.
- **Ghost outline button, taller (button-ghost-outline-alt)**: same fill/border logic, radius 15px, height 43px, padding 10px 14px — a slightly larger sibling variant, same hover behavior, used where a toggle sits beside the primary CTA's row.
- **Auth button (button-auth-dark)**: `#1A1714` fill (matches page background, reads as outlined-on-void), `#F0E8DF` text, radius 12px (a visibly tighter corner than the 15px buttons above), height 45px, 1px solid `#3D362E` border — used for the sidebar's sign-in control, with the registration button beside it taking the primary terracotta fill instead.
- **Explanatory card (card-surface)**: `#2A251F` fill, 12px radius, bordered `#3D362E`, no shadow. Internal anatomy top-to-bottom: bold headline-md title, two short body paragraphs in `#A89B8C`, no media, no CTA inside the card itself — purely an explanatory text block.
- **Disclosure/toggle bars**: two side-by-side bordered rectangles beneath the explanatory card, each carrying a label plus trailing caret glyph; function as expandable accordions (2-column grid, gap 16px) rather than static cards.
- **Form card (card-surface variant)**: `#2A251F` fill, 12px radius, 1px `#3D362E` border, generous internal padding. Internal anatomy top-to-bottom: a "Category" labeled select (dropdown, dark fill, caret icon), a "Name" text input, a "Location" text input with muted placeholder, an "Image URL" text input with muted placeholder, a native date-picker input, and a terracotta primary-button footer — five stacked labeled form fields (card family rows at 100% width each) ending in the single save action.
- **Footer**: transparent background, 5 plain-text links in a flat row, no icons, no dividers beyond spacing.

## Graphics & Effects
Two gradients compose the page backdrop, both full-canvas and both subtle — neither is a bold hero wash. A radial accent sits only in the top-left corner: `radial-gradient(circle at 0% 0%, rgba(212, 132, 90, 0.12), rgba(0, 0, 0, 0) 28%)` — a soft terracotta glow occupying roughly the top-left quarter before fully fading, visible as the faint warm cast behind the sidebar/logo area. Beneath it, a vertical tonal gradient darkens the whole page top-to-bottom: `linear-gradient(rgb(31, 27, 23) 0%, rgb(26, 23, 20) 40%, rgb(21, 18, 16) 100%)` — this is the true page fill, a near-imperceptible darkening toward the bottom rather than a colorful background. Card elevation is communicated by a soft drop shadow `rgba(0, 0, 0, 0.35) 0px 8px 24px 0px` rather than borders alone on floating/expanded elements. No noise, grain, image, or photographic texture is present — the surface is flat color plus the two gradients described.

## Motion
Interaction feedback is fast and restrained: a 0.15s ease background transition drives all hover-state fills (button hovers, ghost-to-filled transitions). Keyframe-named animations in the system (`_inputErrorFlash_`, `_spin_`, `_floating-action-in_`, `_chrome-peek-in_`, `_tab-reveal-in_`, `_toast-in_`) indicate a toolkit of utilitarian micro-interactions — an input error shake/flash, a loading spinner, a floating-action entrance, a tab reveal, and a toast slide-in — all short, functional, feedback-driven motions rather than decorative scroll-linked or parallax effects. Nothing here is scroll-triggered; motion exists to confirm actions (save, error, loading), consistent with the form-first, document-like character of the page.

## Guardrails
- Never replace the warm espresso-brown dark base with a neutral/cool gray or blue-black dark theme — the brown tint is the system's identity.
- Never saturate the hero or full canvas with the terracotta accent or a mesh/aurora gradient — it is rationed to one button fill, one hover state, and a small corner radial wash.
- Never give the ghost-outline buttons a pill (9999px) radius — they are a consistent 15px rounded-rectangle, distinct from the auth button's tighter 12px.
- Never swap the sidebar's persistent vertical nav for a top horizontal navbar — this system is an app-shell with a fixed left rail, not a marketing header.
- Never introduce a second typeface — Manrope carries display, heading, body, and label roles alone.
- Never render cards with heavy shadows or glass blur as the default surface — elevation here comes from a one-step-lighter fill plus a 1px border, with shadow reserved for floating/overlay elements only.
