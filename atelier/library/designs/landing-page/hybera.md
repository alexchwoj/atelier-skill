---
version: "1"
name: "Hybera — Editorial Fintech (Light)"
description: "A light-mode, editorial landing page for an institutional Layer-2 settlement layer. Warm off-white canvas, near-black type, a single deep-navy reserved for hover, and italic-Urbanist emphasis as the signature. Modern Web3 — minimal, but premium."
colors:
  background: "#FAFAF7"
  foreground: "#0A0A0A"
  muted: "#6B6B6B"
  accent: "#1E2A4A"
  surface: "#F2F0EA"
typography:
  display:
    fontFamily: "Urbanist"
    weights: "300–700 + italics"
    role: "headings, hero, section heads, metric values"
  body:
    fontFamily: "Inter"
    weights: "300–600"
    role: "body, labels, captions, footer links"
spacing:
  base: "4px"
  hero-top: "13rem"
  section-y: "8rem"
  card-padding: "5rem"
rounded:
  pill: "9999px"
  card: "16px"
  card-lg: "24px"
components:
  launch-cta: "Pill, bg-foreground white text; the ONLY place bg-accent (navy) appears — on hover"
  italic-emphasis: "<em class=text-muted> inside headings — the signature treatment"
  service-row: "Editorial list row, hairline divider, surface/50 hover bg, circular arrow button"
  dark-card: "rounded-3xl bg-foreground with decorative image overlay"
---

# Hybera — Editorial Fintech (Light)

> Fivefold showcase. Pairs with the Hybera prompt. Use this file to keep pages you build *after* the landing — docs, dashboard, pricing — speaking Hybera's restrained institutional voice.

## Overview

Hybera is a modular Layer-2 settlement layer for institutional-grade on-chain finance, presented as a light-mode editorial landing page. The atmosphere is a warm off-white canvas (`{colors.background}` — #FAFAF7), near-black type, and a fixed SVG grain-noise overlay at 2.5% opacity that gives the page a printed-paper quality. There is exactly one saturated color in the entire system — a deep navy — and the user only ever encounters it mid-interaction.

The governing decision: **restraint signals seriousness.** This is capital infrastructure for institutions; loudness would read as a meme coin. So the page stays quiet — one accent color, used only on hover; a grain-noise overlay for tactile warmth; and italic emphasis as the single expressive flourish. Hybera deliberately rejects every crypto-generic cue (no purple gradients, no neon, no glassmorphism). The brand promise is *trust through composure*: premium feel comes from texture and typography, not decoration.

The system extends across surfaces by inheritance, not addition. When new pages arrive — docs, dashboard, pricing — they start from the same warm canvas, the same near-black foreground, the same one-italic-phrase-per-heading rule, and the same hover-only navy. Hairlines (`border-foreground/10`) carry structure on light bands; opacity ramps (`text-white/60`, `/50`, `/20`) carry structure on dark bands. Two dark sections (Case Studies, CTA card) puncture the light rhythm at fixed intervals to keep the page from flattening into a corporate template.

**Key Characteristics:**
- Warm off-white canvas (`{colors.background}` — #FAFAF7), **never pure white** — pure white reads as a generic SaaS template; warm tint reads as paper.
- Near-black foreground (`{colors.foreground}` — #0A0A0A), softer than #000 — easier on a light editorial page.
- Exactly **one accent** (`{colors.accent}` — deep navy), reserved for hover states only. It never appears on a default state.
- **Italic-Urbanist emphasis** (`<em class="text-muted">`) inside headings — the signature. One italic phrase per heading, never zero, never two.
- A fixed grain-noise overlay (SVG `fractalNoise`, baseFrequency 0.9) at 2.5% opacity — the texture replaces what gradients/glass would do elsewhere.
- Editorial list rows over cards. Hairline dividers and `hover:bg-surface/50` carry the structure.
- Two dark bands at fixed positions (Case Studies, CTA) to give the light page tonal rhythm.
- rAF-driven manual hero video loop with 0.5s fade in/out — no HTML `loop` attribute.

## Colors

> **Source pages analyzed:** landing page (7 sections + footer) — Hero, Services, Case Studies (dark), Metrics, Testimonials, CTA (dark), Footer. A 5-token palette plus opacity ramps for dark sections.

### Canvas
- **Background** (`{colors.background}` — #FAFAF7): Warm off-white page floor and the body of every light section. **Never #FFFFFF** — pure white is the tell of a generic template; the warm tint reads as paper.
- **Surface** (`{colors.surface}` — #F2F0EA): Subtle warm gray used at 50% (`bg-surface/50`) for service-row hover backgrounds. A whisper of elevation, never a hard card fill.

### Text
- **Foreground** (`{colors.foreground}` — #0A0A0A): Primary type and dark-section background. Near-black, not pure black, so the editorial page feels printed rather than screen-harsh.
- **Muted** (`{colors.muted}` — #6B6B6B): Secondary text, captions, subheadings, **and the italic emphasis color** — the warm human note inside headings.

### Accent
- **Accent** (`{colors.accent}` — #1E2A4A, deep navy): Hover state only — exclusively the "Launch App" pill on hover. The only saturated color in the system; users only meet it mid-interaction. Never on a default state, never as a fill at rest, never duplicated by a second accent.

### Dark-Section Opacity Ramp
On `bg-foreground` sections (Case Studies, CTA card), color is expressed as opacity over white, not as new tokens:
- `text-white` — primary heading on dark
- `text-white/60` — body copy, partner-logo label
- `text-white/50` — italic emphasis on dark headings, "View Ecosystem" link, pill label
- `text-white/20` — hairlines and pill borders on dark

### Hairlines & Borders
- `border-foreground/10` — primary hairline on light bg (row dividers, footer top-line)
- `border-foreground/15` — secondary outline pill border (Capabilities, Network badges)
- `border-foreground/20` — testimonial dot navigation, inactive state
- `border-white/20` — hairlines on dark bg

## Typography

### Font Family
- **Display:** `Urbanist`, sans-serif — weights 300, 400, 500, 600, 700 + matching italics. Carries headings, hero, section heads, metric values, and project-card stats.
- **Body:** `Inter`, sans-serif — weights 300, 400, 500, 600. Carries body, labels, captions, partner names, footer links.
- Loaded together via Google Fonts in `src/styles/fonts.css`. Body default `font-family: 'Inter', sans-serif;` applied through Tailwind base.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| display-hero | `text-5xl → sm:text-7xl → md:text-8xl` | 400 (Urbanist) | 0.95 | -2.46px | H1 only — hero headline |
| display-section | `text-4xl → sm:text-5xl → md:text-6xl` | 400 (Urbanist) | 1.05 | normal | Section H2 (Services, Metrics, Case Studies) |
| display-cta | `text-4xl → sm:text-6xl → md:text-7xl` | 400 (Urbanist) | 1.02 | -1.4px | CTA dark-card headline |
| display-testimonial | `text-4xl → sm:text-5xl` | 400 (Urbanist) | 1.1 | normal | Testimonials heading |
| service-title | `text-3xl → md:text-4xl` | 400 (Urbanist) | 1.1 | normal | Service-row title |
| metric-value | `text-5xl → md:text-6xl` | 400 (Urbanist) | 1.0 | normal | Metric numerals (with `animate-subtle-float`) |
| project-stat | `text-5xl → md:text-6xl` | 400 (Urbanist) | 1.0 | normal | Case-study project stat |
| body-lg | `text-base → sm:text-lg` | 400 (Inter) | relaxed | normal | Hero subheading, CTA body |
| body | `text-base` | 400 (Inter) | relaxed | normal | Service descriptions, metric label |
| body-sm | `text-sm` | 400 (Inter) | relaxed | normal | Nav links, footer links, captions |
| pill-label | `text-xs` | 400 (Inter) | normal | widest (uppercase) | Capabilities / Network / Ecosystem / Get Started pills |
| mono-numeral | `text-sm` | 400 (mono) | normal | normal | Service-row index numbers (01, 02, 03, 04) |

### Principles
- **Italic is the soul, not a style.** Italic-Urbanist emphasis (`<em class="text-muted">` inside headings) is the signature — the one warm, human note in a cold institutional system. Every heading carries **exactly one** italic-muted phrase. More than one and the emphasis stops meaning anything.
- **Negative letter-spacing at display sizes.** Hero uses -2.46px, CTA uses -1.4px. The optical tightness lets giant Urbanist feel set, not stretched.
- **Italic color follows mode.** On light bg the italic phrase is `text-muted` (#6B6B6B). On dark bg it shifts to `text-white/50`. Never mix.
- **Line-height under 1.05 for display.** Hero at 0.95, section heads at 1.05, CTA at 1.02 — large type breathes only by its own weight, not by leading.
- **Body stays at base/lg — 16/18px.** No body copy below `text-sm`. Institutional readers must not squint.
- **Uppercase pills track widest.** Every category badge uses `uppercase tracking-widest text-xs`. The wide tracking is the only ornament these labels get.
- **Weight 500 is deliberately absent.** Urbanist runs 300/400/600/700 in practice — the mid-weight 500 would muddy the contrast between display non-italic and italic-muted emphasis.

### Note on Font Substitutes
If Urbanist is unavailable, fall back to a humanist geometric sans with a fully drawn italic (Mona Sans, Sora) — never use an oblique. The italic emphasis pattern depends on a true italic glyph shape; an oblique reads as "rendered slanted" and breaks the editorial voice. If Inter is unavailable, fall back to system-ui only as a last resort; nudge body to weight 500 to compensate for system-ui's lighter optical color.

## Layout

### Spacing System
- **Base unit:** 4px (Tailwind default).
- **Section vertical rhythm:** `py-32` (8rem) consistently across Services, Case Studies, Metrics, Testimonials, CTA.
- **Section horizontal padding:** `px-6` consistently. Inner wrapper: `max-w-7xl mx-auto`.
- **Hero top padding:** `pt-[13rem]` (`{spacing.hero-top}`) — flat across all breakpoints. Cramped hero spacing reads as cheap; the air is part of the premium.
- **CTA card padding:** `px-8 sm:px-14 py-20 sm:py-28` — generous inside the rounded dark card.
- **Service row vertical:** `py-10` per row with `-mx-4 px-4` so the hover background extends past the editorial gutter.
- **Footer padding:** `pb-12 pt-8` outer, `pt-16` inner above the link grid.

### Grid & Container
- **Editorial container:** `max-w-7xl` (1280px) centered on every section. The same width on every band — consistency is part of the institutional voice.
- **Service rows:** `md:grid-cols-12` with col-spans 1 / 4 / 5 / 2 (index, title, description, tags+arrow).
- **Case Studies:** `grid md:grid-cols-2 gap-6`, each card `aspect-[4/3]`.
- **Metrics:** `grid grid-cols-2 md:grid-cols-4 divide-x divide-foreground/10 border-y border-foreground/10`.
- **Testimonial card:** `grid md:grid-cols-5 gap-8` — video col-span-2, content col-span-3.
- **Footer:** `grid md:grid-cols-12 gap-12` — brand col-span-4, link columns col-span-8 split into 4.

### Whitespace Philosophy
Whitespace at Hybera is structural, not residual. The 13rem hero ceiling, the 8rem section rhythm, and the `max-w-7xl` cap are not "breathing room" added at the end — they are the page's first decision. Institutions trust pages that look unhurried; cramped layouts read as startup. So density is rejected on principle: a single column of editorial rows beats a 3-up card grid, four metric cells beat six, and the page deliberately stops at seven sections rather than a comprehensive ten.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat (default) | No shadow, no border | All section backgrounds, all primary content |
| Hairline | `border-foreground/10` or `border-foreground/15` | Service-row dividers, footer top-line, outline pills, circular arrow buttons |
| Surface tint | `bg-surface/50` | Service-row hover background only |
| Decorative texture | `body::before` SVG fractalNoise, opacity 0.025 | Page-wide grain — the premium tactile feel |

**Shadow philosophy.** Hybera has no box-shadows. Depth is communicated through opacity (white/60, white/20), through one-pixel hairlines, and through the fixed grain overlay — never through drop shadow or backdrop-blur. A shadow would create a "card" feeling that the editorial row layout deliberately rejects.

**Decorative Depth:**
- Fixed grain overlay (SVG `fractalNoise`, baseFrequency 0.9, numOctaves 2, opacity 0.025) on `body::before` over the entire viewport.
- Hero video gradient: `bg-gradient-to-b from-background via-transparent to-background` for the only on-page gradient — it bleeds the video into the warm canvas above and below.
- Case-study card gradient: `bg-gradient-to-t from-black/85 via-black/20 to-transparent` over the project video to anchor the bottom content.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| none | `0` | Section bands, grid dividers, video edges in hero |
| sm | `rounded-xl` (12px) | Service row hover hit-area |
| md | `rounded-2xl` (16px) | Case-study video cards, testimonial video tile |
| lg | `rounded-3xl` (24px) | CTA dark card — the largest radius on the page |
| pill | `rounded-full` | All buttons, all pill badges, circular icon buttons, testimonial dot nav |

### Photography Geometry
- **Hero video:** Full-bleed under navbar, `absolute top: 300px` with `object-cover`, framed by `from-background via-transparent to-background` gradient.
- **Case-study videos:** Fixed `aspect-[4/3]`, `rounded-2xl overflow-hidden`, native HTML loop, `group-hover:scale-105` over 700ms.
- **Testimonial video:** Fixed at `h-72 md:h-full`, `rounded-2xl`, same video file plays for all three slides — the consistency reinforces "one truth, three voices."
- **CTA decorative image:** `/img/cta-bg.png` as absolute `object-cover` background at opacity 0.9, behind the dark card content.
- **Partner logos:** `h-10 md:h-12 w-auto`, default opacity 0.6, hover opacity 1.0 over 200ms. Logos must be black-on-transparent PNG.
- **Brand mark:** `/hybera-logo.png` at `h-8` (navbar) and `h-9` (footer). Logo is image-only — wordmark + symbol are baked into the PNG. Never render Hybera as text.

## Components

### Top Navigation

**`navbar`** (`{component.navbar}`) — Absolute, transparent overlay on the hero video. Container `absolute top-0 inset-x-0 z-30`, inner `max-w-7xl mx-auto flex items-center justify-between px-6 py-6`.
- **Default:** Logo image left (`h-8 w-auto`); 5 center nav links (`hidden md:flex items-center gap-9`) — "Protocol" active in `text-foreground`, "Network / Builders / Insights / Contact" in `text-muted`; Launch App pill at right.
- **Active link:** `text-sm text-foreground` — no underline, weight unchanged.
- **Focus:** Browser default ring on links; pill receives `scale-[1.03]` + `bg-accent` (navy) on focus to match interactive state.

### Buttons

**`launch-cta`** (`{component.button-primary}`) — The principal CTA, used in navbar and hero.
- **Default:** `rounded-full bg-foreground text-white px-6 py-2.5 text-sm` (nav) / `px-14 py-5 text-base` (hero).
- **Active:** `scale-[1.03]` + `bg-accent` (#1E2A4A navy) over 200ms. **This is the only place navy appears in the entire system.**
- **Focus:** Inherits active treatment (scale + accent fill) for keyboard parity.

**`whitepaper-cta`** (`{component.button-secondary}`) — Outline pill paired with `launch-cta`.
- **Default:** `rounded-full border border-foreground/15 bg-background/60 backdrop-blur-sm text-foreground px-10 py-5 text-base`.
- **Active:** `bg-foreground/5` background fill over 200ms — never navy, never filled solid.
- **Focus:** Border darkens to `border-foreground` for visible keyboard outline.

**`arrow-button`** (`{component.button-utility}`) — Circular icon button used in service rows, case-study cards, testimonial prev/next.
- **Default:** `h-10 w-10 rounded-full border border-foreground/10 grid place-items-center` (light bg) / `h-12 w-12 bg-white text-foreground` (case-study top-right).
- **Active:** On `group-hover` of parent row, fills `bg-foreground` + `text-white` and rotates `ArrowUpRight` icon `rotate-45` over 200ms.
- **Focus:** Inherits active treatment so keyboard users see the same icon rotation.

### Cards & Containers

**`service-row`** (`{component.card-utility}`) — Editorial list row, not a card.
- **Default:** Hairline divider `border-t border-foreground/10`, padding `py-10 -mx-4 px-4`, `rounded-xl` hit area, `md:grid-cols-12` with index / title / description / tags+arrow.
- **Active (group-hover):** `bg-surface/50` background fades in over 500ms; circular arrow button inverts color; `ArrowUpRight` rotates 45deg.
- **Focus:** Surface tint applies on focus-within so keyboard navigation reveals the same state.

**`case-card`** (`{component.card-dark}`) — Project showcase tile.
- **Default:** `rounded-2xl overflow-hidden relative aspect-[4/3]`, video background, gradient overlay `from-black/85 via-black/20 to-transparent`, top-right `bg-white` circular button, bottom-left category + stat + label, bottom-right project name.
- **Active (group-hover):** Video `scale-105` over 700ms; circular button `scale-110` over 200ms.
- **Focus:** Card receives outline ring `ring-2 ring-white/40` to remain visible against the dark gradient.

**`cta-card`** (`{component.card-feature}`) — The closing dark card.
- **Default:** `rounded-3xl bg-foreground text-white px-8 sm:px-14 py-20 sm:py-28 relative overflow-hidden isolate`, with `/img/cta-bg.png` as a decorative `-z-10 opacity-90` background.
- **Active:** Primary button inside receives `scale-[1.03]`; secondary receives `bg-white/5`.
- **Focus:** Each button inside the card carries its own focus ring; the card itself is non-interactive.

### Inputs & Forms

**`testimonial-dot`** (`{component.input-pagination}`) — The only "input" on the marketing page (slider control).
- **Default:** `h-2.5 w-2.5 rounded-full border transition-colors duration-200`, inactive `border-foreground/20 bg-transparent`.
- **Active (selected):** `border-foreground bg-foreground`.
- **Focus:** Browser ring on the button wrapper; the dot itself stays unchanged so the focus signal sits outside the visual control.

### Footer

**`footer-grid`** (`{component.footer}`) — `bg-background px-6 pb-12 pt-8`, inner `max-w-7xl mx-auto border-t border-foreground/10 pt-16`. Four link columns (Protocol / Builders / Network / Company), each with an uppercase tracking-widest title (`text-xs text-foreground font-medium`) and `text-sm text-muted` link list. Bottom row: copyright left, legal links right, separated by `mt-20 border-t border-foreground/10 pt-8`.

## Do's and Don'ts

### Do
- **Use** `{colors.background}` (#FAFAF7) as the canvas on every light section — the warm tint is the premium.
- **Set** exactly one italic-muted phrase per heading. Never zero (loses voice), never two (loses meaning).
- **Reserve** `{colors.accent}` (navy) for the Launch App hover state only. The user should only meet color mid-interaction.
- **Alternate** light and dark bands for rhythm — Hero / Services light, Case Studies dark, Metrics / Testimonials light, CTA dark, Footer light.
- **Apply** the fixed `body::before` grain noise overlay at 0.025 opacity. The texture is what replaces gradients and glass.
- **Keep** copy composed and institutional — the tagline stays *"the settlement layer for trustless capital."*
- **Use** hairlines (`border-foreground/10`) and opacity ramps (`white/60`, `/50`, `/20`) for structure; never box-shadows.
- **Pin** `pt-[13rem]` on the hero across all breakpoints. The air balances the absolute navbar.
- **Restrict** lucide icons to `ArrowUpRight`, `ChevronLeft`, `ChevronRight` only — three icons in total.
- **Use** the rAF-driven `VideoBackground` pattern with 0.5s fade in/out; never the HTML `loop` attribute on the hero video.

### Don't
- **Don't** use pure white (`#FFFFFF`) anywhere. It instantly reads as a generic SaaS template.
- **Don't** add a second accent or any green/purple/teal — that's crypto-generic, the exact thing Hybera rejects.
- **Don't** put navy on a default state. Default-state color breaks the "color only on interaction" discipline.
- **Don't** add `.liquid-glass`, glassmorphism, or backdrop-blur as a surface treatment. Hybera is fintech, not crypto.
- **Don't** add framer-motion or any animation library — `useReveal` + CSS keyframes are sufficient.
- **Don't** hype the copy. Institutional buyers distrust loud language — keep it composed.
- **Don't** stack two same-mode bands; the light/dark rhythm is the structure.
- **Don't** introduce icons beyond `ArrowUpRight`, `ChevronLeft`, `ChevronRight`. Text + italic carries meaning, not iconography.
- **Don't** render Hybera as text. The brand is always `<img src="/hybera-logo.png">`.
- **Don't** drop the grain noise overlay or substitute it with a gradient. The tactile texture is non-negotiable.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤419px | Hero h1 at `text-5xl` with 0.95 line-height; center nav hidden; service rows stack; metrics 2-up |
| Phone | 420-640px | Same as small phone; CTA buttons wrap; testimonial video full-width above content |
| Large phone | 641-735px | Hero scales to `sm:text-7xl`; subhead to `sm:text-lg`; CTA buttons inline if width permits |
| Tablet portrait | 736-833px | Service rows still stacked; testimonial moves toward `grid md:grid-cols-5` |
| Tablet landscape | 834-1023px | Center nav appears (`md:flex`); service rows become 12-col grid; case studies 2-up |
| Small desktop | 1024-1068px | Full `max-w-7xl` enforced; metrics divide into 4 cells; footer 4-col link grid |
| Desktop | 1069-1440px | Hero hits `md:text-8xl`; CTA hits `md:text-7xl`; all editorial rhythm in full effect |
| Wide desktop | ≥1441px | Container caps at `max-w-7xl` (1280px) and centers; whitespace on either side grows |

### Touch Targets
- **Minimum size rule:** 44×44px on phones (Launch App pill at `px-6 py-2.5` clears this; circular arrow buttons at `h-10 w-10` (40px) bump to `h-12 w-12` on the case-study card top-right).
- **Pill buttons:** Minimum vertical padding `py-2.5` (nav) / `py-5` (hero, CTA) keeps tap surface comfortable.
- **Testimonial dots:** Visual size 10px but tappable area extended via parent button padding to meet 44px.

### Collapsing Strategy
- **Navbar:** Center link group `hidden md:flex` — collapses to logo + Launch App only on phones (no hamburger; mobile-first restraint).
- **Service rows:** Stack into single column on mobile (no `md:grid-cols-12` until tablet landscape).
- **Case studies:** `grid md:grid-cols-2` collapses to single column; aspect ratio `aspect-[4/3]` preserved.
- **Metrics:** `grid-cols-2 md:grid-cols-4` — 2-up on mobile, 4-up at `md`.
- **Testimonial card:** `md:grid-cols-5` collapses to stacked video-then-content on mobile.
- **Footer link grid:** `grid-cols-2 md:grid-cols-4` — 2-up on mobile, 4-up at `md`.
- **Hero typography:** `text-5xl sm:text-7xl md:text-8xl` ladder; line-height (0.95) and tracking (-2.46px) hold steady at every breakpoint.

### Image Behavior
- **Hero video:** Single source MP4, hosted on CDN (Cloudflare R2 / Bunny / Cloudinary). No `srcset`; the rAF fade loop handles transitions. Falls back gracefully to the gradient overlay if the URL is empty during dev.
- **Case-study videos:** Native HTML `loop`, `muted playsInline autoPlay`. Single MP4 each, no `srcset`.
- **Partner logos:** PNG, transparent, fixed `h-10 md:h-12`. Loaded eagerly above-the-fold once testimonial section enters viewport via `useReveal`.
- **CTA bg image:** Single PNG, `object-cover`, no lazy loading (above-the-fold once user reaches CTA section). Falls back to flat `bg-foreground` if missing.
- **Logo:** Single transparent PNG. No lazy loading on the navbar instance; footer instance can `loading="lazy"`.

## Iteration Guide

1. **New page (docs, dashboard, pricing)?** Start from `{colors.background}` + `{colors.foreground}` + one italic-muted phrase per heading. Color only on hover. The system extends by inheritance, never by addition.
2. **Variants live in components, not in new tokens.** If a new card type appears, derive it from `{component.card-utility}` or `{component.card-dark}` — don't introduce a third surface color.
3. **Use token refs (`{colors.x}`, `{component.y}`) in every new doc.** Never hard-code hex outside this file.
4. **When in doubt, remove.** Hybera's premium is subtraction. Add air before adding elements; remove an element before introducing a new icon.
5. **Never document hover.** Spec default, active, and focus states. Hover is a side effect of active on pointer devices.
6. **Display vs body discipline.** Urbanist for any size ≥`text-2xl`; Inter for everything else. Mid-weight 500 stays out of the system.
7. **Shadow restriction is absolute.** No `box-shadow` enters the system. Depth comes from opacity, hairlines, and the grain overlay — those three tools only.

## Known Gaps

- **Validation, error, empty, and loading states** are not specified — only the marketing surface is documented. A real app shell needs these designed in the same restrained, hairline-driven language.
- **Dark mode toggle** is intentionally absent. The two dark sections are tonal bands, not a system-wide dark theme; a true dark mode would need its own palette pass.
- **Dashboard / data-dense surfaces** aren't surfaced in analyzed pages. The dark-section opacity ramp (white/60, /50, /20) is documented from marketing only; a data-heavy table view may need a firmer dark palette.
- **Form components** (input, textarea, select, checkbox) aren't present on the landing. When added, they should inherit hairline borders, `text-foreground` type, and the hover-only navy on the submit pill.
- **Dynamic content states** (skeleton loaders, optimistic UI, toast notifications) are not surfaced in analyzed pages.
- **Specific blur radii** for the secondary CTA's `backdrop-blur-sm` are Tailwind default (4px); no custom blur is documented elsewhere in the system.
