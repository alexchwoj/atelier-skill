---
version: "1"
name: "Pofolio — 3D Badge Portfolio Hero"
description: "A single-section portfolio hero on pure white, built like a designer's leave-behind name card. Black ink, one bold red accent, Playfair serif headline, hairline rules — and a draggable 3D event-badge on a lanyard (R3F + Rapier physics) that sways and auto-sleeps, as a live proof of skill."
colors:
  white: "#FFFFFF"
  ink: "#0A0A0A"
  red: "#E11D2A"
  hairline: "#ECECEC"
  muted: "#6B6B6B"
typography:
  display:
    fontFamily: "Playfair Display"
    role: "the headline (serif, editorial)"
  body:
    fontFamily: "Inter"
    role: "everything else"
spacing:
  base: "4px"
  hero: "single full-screen section"
rounded:
  none: "0px"
  pill: "9999px"
components:
  badge-3d: "Draggable event-badge on a lanyard — R3F + Rapier physics, sways, auto-sleeps when at rest"
  red-accent: "The single chromatic accent: italic emphasis word + CTA + accent dot"
  headline: "Playfair Display, large, with final phrase in red italic"
---

# Pofolio — 3D Badge Portfolio Hero

> Fivefold showcase. Pairs with the Pofolio prompt. Use this to keep any pages you add (work, about) feeling like the same calm, craft-forward name card — never a busy portfolio template.

## Overview

Pofolio is **a designer's leave-behind name card, made interactive** — a single quiet white hero whose one piece of magic is a draggable 3D event-badge hanging on a lanyard. It's a personal portfolio in the Linear-clean register, but with a workshop's craft detail: a real, physical, grabbable badge that sways when you toss it and goes still when left alone. The page says "I make things, and I make them well — here, hold my card."

The governing decision: **prove craft through one perfect interaction, on an otherwise silent page.** Pure white, black ink, one red accent, and nothing else competing — so the badge (and the skill it represents) is unmistakably the point. Restraint everywhere makes the single interactive flourish land. Every other portfolio template loads with case study grids, animated logos, and parallax stripes; Pofolio loads with a name and an invitation to play.

The system extends by subtraction, not addition. If a work page or an about page is added later, it inherits the same pure white canvas, the same Playfair-for-headlines-only rule, the same hairline structure, and the same one-red discipline. The badge does not need to reappear — it is the calling card of the hero only. Consistency here means refusing patterns, refusing second accents, and refusing decorative motion on every surface that follows.

**Key Characteristics:**
- Pure white canvas with zero background pattern (no grids, dots, gradients, noise).
- One bold red (`{colors.red}`) used three times only: italic emphasis word, CTA, accent dot.
- Playfair Display serif headline against an Inter body — editorial gravity over modern quiet.
- A real-physics 3D badge on a lanyard (R3F + Rapier WASM) that **auto-sleeps** at rest.
- Hairline rules at `{colors.hairline}` — structure as whisper, never weight.
- Hero-only by design — no second section, no footer, no nav chrome.
- Clean editorial 3D lighting — studio light only, no neon, no HDR, no ambient occlusion.
- Negative space is the loudest element on the page.

## Colors

> **Source pages analyzed:** Hero (single-screen portfolio name-card) — the only surface specified. All tokens below are surfaced directly from the prompt and front-matter; no values invented.

### Surface
- **White** (`{colors.white}` — #FFFFFF): The entire page background. A pure white gallery wall — clean, confident, unpatterned. Never gradient-shifted, never warmed, never tinted.

### Text
- **Ink** (`{colors.ink}` — #0A0A0A): All primary type — headline, body, CTA label, micro-copy. A near-black rather than absolute black, which keeps the page feeling printed rather than rendered.
- **Muted** (`{colors.muted}` — #6B6B6B): Small secondary copy only — captions, footnote-scale meta. Used sparingly; the page leans on ink almost everywhere.

### Brand & Accent
- **Red** (`{colors.red}` — #E11D2A): The single bold accent — a confident-taste statement. On pure black-and-white, one red point reads as "this person has a point of view." Used only on the italic emphasis phrase in the headline, the CTA, and one accent dot. Never a fill, never a second usage pattern. Its scarcity is its boldness.

### Hairlines & Borders
- **Hairline** (`{colors.hairline}` — #ECECEC): 1px structural rules. Barely visible at typical viewing distance — structure without weight. Used to separate the badge column from the type column on desktop and to underline the CTA group when needed.

## Typography

### Font Family
- **Display:** `'Playfair Display', 'Times New Roman', Georgia, serif` — used only for the headline. OpenType features: italic + lining numerals.
- **Body:** `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` — everything else. OpenType features: `ss01`, `cv11`, `tnum` for tabular numerals on micro-stats.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| display-hero | clamp(48px, 7vw, 96px) | 400 (regular) / 400 italic | 1.04 | -0.02em | Headline ("Designing websites at the speed of thought.") |
| display-emphasis | inherits hero | 400 italic | inherits | inherits | Final red-italic phrase only |
| body-lead | 18px | 400 | 1.55 | -0.005em | Sub-copy beneath headline |
| body | 16px | 400 | 1.6 | 0 | Default Inter paragraph |
| cta-label | 15px | 500 | 1 | 0.01em | The single red CTA |
| nav-label | 14px | 500 | 1 | 0.04em | Wordmark / micro-nav if added |
| caption | 13px | 400 | 1.5 | 0 | `{colors.muted}` secondary lines |
| micro | 12px | 500 | 1.4 | 0.06em | Footer-style legal / year mark |

### Principles
- Serif lives **only** in the headline — Inter handles every other role without exception.
- Negative letter-spacing at display sizes (-0.02em) tightens the editorial feel; body uses 0.
- The red-italic phrase is a Playfair *italic* — not Inter italic, not Playfair regular colored red.
- Weights stop at 500. There is no 600, 700, or 800 anywhere — Pofolio refuses the "bold-everything" portfolio reflex.
- Body is 16px, not 17px — Inter at 16px reads as web-native quiet; bumping to 17 would warm the page.
- Line-height widens as size shrinks (1.04 hero → 1.6 body) — long lines breathe, short lines tighten.

### Note on Font Substitutes
If Playfair Display cannot be loaded, fall back to Georgia (already in the stack) and add +0.005em letter-spacing to the headline to recover the italic's optical width. If Inter is blocked, system-ui will do — but reduce body to 15px to neutralize the heavier x-height of San Francisco / Segoe UI. Never substitute the headline with a sans-serif; the editorial register depends on the serif.

## Layout

### Spacing System
- **Base unit:** 4px. All padding and margin tokens are multiples (4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96).
- **Section padding:** Hero is full-viewport (`min-height: 100svh`) with 64px top padding on desktop, 32px on mobile.
- **Block padding (text column):** 48px horizontal on desktop, 24px on mobile.
- **CTA group spacing:** 24px between sub-copy and CTA; 12px between CTA and red dot.
- **Universal rhythm:** vertical gaps follow the 8-multiple ladder; never 6, 10, 14.

### Grid & Container
- **Max content width:** 1280px center-aligned. Beyond that the page anchors and the white margins widen.
- **Hero columns:** Two-zone composition — text column flush-left (left 60%), badge anchored top-right (right 40%). No formal grid lines; alignment is by optical balance.
- **Gutters:** 48px column gap on desktop, collapses to a stack on tablet portrait and below.

### Whitespace Philosophy
Whitespace is not background — it is the design's largest single element. The page is roughly 80% empty by area, and that emptiness is what frames the badge as "the one thing to look at." Filling that space with case-study tiles, decorative arcs, or a "scroll for more" cue would dismantle the entire argument. Every later page should inherit the same ratio: when in doubt, remove, never add.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Page background, body type, all structural surfaces |
| Soft hairline | 1px solid `{colors.hairline}` | Optional column divider, CTA underline |
| Backdrop blur | Not used | — |
| Product shadow | Soft 24px blur, 12px y-offset, rgba(10,10,10,0.10) | Only on the 3D badge's contact shadow against the white floor |

**Shadow philosophy.** The page has no UI shadows. The only real shadow is the soft contact shadow cast by the 3D badge — it is what sells the physicality of the object. Adding shadows to text, CTAs, or cards would import "SaaS-template" energy and collapse the editorial register.

**Decorative Depth.**
- The badge's lanyard catches a faint specular highlight from the studio light — that is the page's only specular.
- Hairlines render *under* the badge's shadow when they intersect — depth order is hand-controlled, not z-index sloppy.
- No drop shadows on type, ever.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| none | 0px | Hairline rules, headline column, all type containers |
| xs | 2px | Not used (reserved) |
| sm | 4px | Not used (reserved) |
| md | 8px | The badge card's rounded corners (3D mesh) |
| lg | 16px | Not used (reserved) |
| pill | 9999px | The CTA button and the red accent dot |
| full | 50% | The metal lanyard clip's roller |

### Photography Geometry
- No photographic imagery on the hero — the 3D badge is the only image-class element.
- **Badge mesh:** ~9 × 13 aspect ratio (standard event-badge proportions), 8px corner radius on the card geometry.
- **Buyer-supplied texture:** square or 9:13 PNG, 1024–2048px on the long edge, transparent background allowed. Texture is mapped to the badge front; back face is plain white with a subtle paper grain.
- **Loading strategy:** R3F scene mounts after the headline paints (priority text-first); Rapier WASM is fetched in parallel. No layout shift — the badge slot reserves space immediately.

## Components

### Buttons

**`{component.button-primary}` — Red CTA**
The single CTA on the page (e.g. "See work"). Background `{colors.red}`, label `{colors.white}`, typography `cta-label` token, padding 14px 28px, radius `pill`. Default state: solid red, white label, no shadow. Active state: scales to 0.98 with 80ms ease-out. Focus state: 2px outline offset 3px in `{colors.ink}`, no background change. Never used with an icon — label-only keeps it editorial.

**`{component.button-secondary}` — Inline text link**
Inline link in body copy. Color `{colors.ink}`, underline 1px solid `{colors.ink}` with 4px offset. Default state: ink underline. Active state: underline thickens to 2px. Focus state: 2px outline offset 3px in `{colors.red}` to recall the accent without using red as the link color.

**`{component.button-utility}` — Wordmark / brand return**
The top-left wordmark behaves as a button back to root. Inter 14px, weight 500, `{colors.ink}`. Default state: ink label, no underline. Active state: red accent dot appears 4px right of the wordmark for 200ms. Focus state: 2px outline offset 3px in `{colors.ink}`.

### Cards & Containers

**`{component.card-name}` — The badge card (3D)**
The physical event-badge mesh. White front face, 8px radius, 0.5mm depth (in scene units), buyer logo texture on front, plain white back. Default state: hanging vertical, gentle 0.3° sway loop. Active state: cursor grab → cursor grabbing; physics drag with momentum. Focus state (keyboard): a 2px `{colors.ink}` outline renders on the DOM proxy element (the badge is screen-reader announced as "Interactive 3D name badge, draggable").

**`{component.card-text}` — Headline block**
The text column container. No background, no border, no radius. Padding 0; alignment governs spacing. Default state: static. Active state: not applicable. Focus state: not applicable (children carry focus).

**`{component.card-utility}` — Optional footnote strip**
A single-line meta strip at the bottom of the viewport for legal / year. `{colors.muted}`, `micro` typography token, 1px top border in `{colors.hairline}`. Default state: visible at viewport bottom. Active state: not applicable. Focus state: not applicable.

### Inputs & Forms

**`{component.input-text}` — Reserved**
Not used on the hero. If introduced on a later page (contact form), use Inter 16px, 1px bottom border in `{colors.hairline}`, no background, 12px vertical padding, no radius (bottom-rule input only). Default state: hairline rule. Active state: bottom rule shifts to `{colors.ink}`. Focus state: bottom rule shifts to `{colors.red}` (the only place red touches an input).

### Footer

**`{component.footer}` — None by design**
The hero is intentionally footer-less. If later pages require one, it is a single-row strip using the `card-utility` pattern above — never a multi-column site footer.

## Do's and Don'ts

### Do
- Keep the canvas exactly `{colors.white}`; never gradient, never warm-tint.
- Reserve `{colors.red}` for three placements only: italic phrase, CTA, accent dot.
- Use Playfair Display only at the `display-hero` token; everywhere else is Inter.
- Set body to 16px and stop weight ladder at 500 — refuse 600/700/800.
- Apply hairlines at `{colors.hairline}` for any structural division — never a heavier border.
- Anchor the badge top-right on desktop and rely on its contact shadow as the only shadow on the page.
- Ensure Rapier physics auto-sleep on motion decay — verify with a stillness threshold.
- Keep the 3D lighting clean editorial: studio key + soft fill, no neon, no HDR environment, no AO pass.

### Don't
- Don't add any background pattern (grids, dots, gradients, noise) — pure white is the stage.
- Don't add more sections or a footer — Pofolio is single-hero by design.
- Don't let the badge jitter forever — without auto-sleep it reads as a broken demo.
- Don't make it look like a "Three.js demo" (neon, ambient occlusion, HDR ambient) — keep it editorial.
- Don't add a second accent color — the lone red is the confident-taste signal.
- Don't apply Playfair to body, sub-copy, or CTA — serif belongs only to the headline.
- Don't use box-shadows on UI surfaces — the only real shadow is the badge's contact shadow.
- Don't document or implement hover states — Apple convention here: default / active / focus only.
- Don't introduce icons inside the CTA — label-only keeps it editorial.
- Don't tighten the page by removing whitespace — whitespace is the design.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤419px | Headline clamps to 48px; badge moves above headline at reduced quality; physics on, lower step rate |
| Phone | 420–640px | Headline ~56px; badge top-center; CTA full-width on its line |
| Large phone | 641–735px | Headline ~64px; badge top-right of stacked layout |
| Tablet portrait | 736–833px | Two-zone layout begins; badge top-right, text column 70% |
| Tablet landscape | 834–1023px | Full desktop composition starts; padding scales to 48px |
| Small desktop | 1024–1068px | Headline ~80px; badge full physics quality |
| Desktop | 1069–1440px | Canonical layout — text left, badge anchored top-right |
| Wide desktop | ≥1441px | Container caps at 1280px; white margins widen — never stretch |

### Touch Targets
- Minimum 44 × 44px for any tappable region (CTA, wordmark, badge drag handle).
- The 3D badge's drag handle has an invisible 60px-radius hit zone around the mesh on touch devices, since touch can't precision-grab a thin lanyard clip.

### Collapsing Strategy
- **Hero typography:** clamp() drives headline; sub-copy never drops below 16px.
- **Badge column:** desktop top-right → tablet top-right of stacked layout → mobile top-center, above the headline.
- **CTA:** stays inline on desktop; becomes its own line at phone widths but never full-width-bleed.
- **Wordmark:** stays top-left across all widths; padding tightens, font size holds.
- **Footnote strip (if used):** wraps to two lines on small phone instead of shrinking type.

### Image Behavior
- Badge texture is delivered as a 2× PNG (1024 / 2048px long edge) and decoded off the main thread.
- No `srcset` (texture is a single asset); aspect ratio reserved by the R3F canvas slot.
- Texture lazy-loads via `IntersectionObserver` only after the headline paints — text-first FCP.

## Iteration Guide

1. New page (work, about)? Inherit the canvas: `{colors.white}`, `{colors.ink}`, `{colors.red}` only — never introduce a second accent to differentiate pages.
2. If you add an interaction anywhere, hold the badge's bar — physical, polished, self-settling, never gimmicky.
3. Keep variants of buttons / cards inside the **Components** section above; do not invent ad-hoc component styles on new pages.
4. Always reference tokens (`{colors.tokenName}`, `{component.name}`) rather than raw hex or pixel values when documenting additions.
5. Display vs body family rule is non-negotiable: Playfair = headline only, Inter = everything else.
6. Shadow restriction stands across the system — the badge's contact shadow remains the only real shadow.
7. When in doubt, subtract — Pofolio gets stronger as elements are removed, not added.

## Known Gaps

- Additional portfolio surfaces (project list, case studies, contact) aren't specified — only the hero. Build them in the same white / ink / one-red editorial language; resist patterns or a second accent.
- 3D performance fallback on low-end mobile isn't fully specified — a quality switch (reduced step rate, simplified shadow) is hinted but exact thresholds (FPS budget, device-class detection) are not surfaced in analyzed pages.
- Buyer-supplied badge texture/logo means the 3D material setup must be documented so a swapped texture still looks clean under the editorial lighting — material params (roughness, normal intensity) not surfaced.
- Reduced-motion / accessibility for the physics badge — a static fallback for users who opt out of motion — isn't addressed and should be added before ship.
- Dark mode is not surfaced in analyzed pages; the system as documented is light-only by design intent.
- Validation / error states for the reserved `input-text` component are not surfaced in analyzed pages.
