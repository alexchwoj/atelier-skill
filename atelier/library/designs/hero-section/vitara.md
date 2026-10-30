---
version: "1"
name: "Vitara — Calm Healthcare AI Hero"
description: "A single-screen hero for a preventive healthcare AI, designed to feel like a calm caregiver rather than a clinic. Full-screen ambient video, a floating glass nav pill, a centered serif-italic headline, and a ChatGPT-style composer as the hero action — because the product IS a conversation."
colors:
  ink: "#2B3534"
  cream: "#F5EFE0"
  on-video: "rgba(255,255,255,0.92)"
  on-video-muted: "rgba(255,255,255,0.60)"
  on-video-faint: "rgba(255,255,255,0.40)"
  glass: "rgba(255,255,255,0.10)"
  glass-border: "rgba(255,255,255,0.18)"
  composer-surface: "rgba(255,255,255,0.12)"
typography:
  display:
    fontFamily: "serif"
    style: "italic"
    role: "the centered hero headline — soft, human"
  body:
    fontFamily: "sans"
    role: "composer, nav, sub-copy"
spacing:
  base: "4px"
  hero: "single full-screen section"
rounded:
  composer: "20px"
  pill: "9999px"
  nav: "9999px"
components:
  composer: "ChatGPT-style input card — the hero's primary action (no traditional CTA buttons)"
  glass-nav-pill: "Floating nav pill over the video"
  serif-italic-headline: "Centered, soft — the calm human voice"
  ambient-video: "Full-bleed looping background; ink fallback"
---

# Vitara — Calm Healthcare AI Hero

> Fivefold showcase. Pairs with the Vitara prompt. Use this to keep pages you build *after* the hero — onboarding, results, dashboard — feeling like the same calm caregiver, never a cold clinic.

## Overview

Vitara is a preventive healthcare AI whose single-screen hero is built to lower anxiety, not raise it. A full-bleed ambient video plays slowly behind a centered serif-italic headline; a floating glass nav pill sits at the top edge; and the only action is a ChatGPT-style composer card whispering "ask me anything." The tagline — *intelligence that listens before you ask* — is enacted by the form itself: nothing rushes, nothing flashes, nothing demands a click.

The governing decision: **in healthcare, trust requires gentleness.** Health is anxiety-laden; most medical UIs are clinical blue-and-white and cold. Vitara deliberately goes editorial, ambient, and warm so the AI feels like someone who *listens* — the form of the page enacts the promise of the words. Density is intentionally minimal. The whole composition is one quiet screen — headline, composer, pill, video — and the restraint *is* the design.

The system extends by carrying that calm into every future surface. Onboarding, results, and dashboards must inherit the warm cream/teal palette, the soft serif for human moments, the ambient (never urgent) motion, and — wherever possible — the conversation-first interaction model. The composer is the template: dialog beats forms; listening beats prompting; warmth beats sterile chrome.

**Key Characteristics:**
- A single full-screen **hero only** — no second section, no footer, no scroll.
- **Ambient looping video** background with ink fallback `{colors.ink}` — slow, perpetual, the calm pulse of the page.
- **Cream brand color** `{colors.cream}` — the warm opposite of sterile clinical white.
- **Centered serif-italic headline** — the human, listening voice (never a clinical sans).
- **ChatGPT-style composer** as the only primary action — typing replaces clicking a CTA.
- **Floating glass nav pill** — light chrome over footage, never the heavy liquid-glass treatment.
- **No traditional CTA buttons, no pulse dots, no urgent micro-animations** — urgency contradicts the promise.
- **White-at-opacity** text on video (`{colors.on-video}` / `{colors.on-video-muted}`) for legible-but-soft layering.

## Colors

> **Source pages analyzed:** the Vitara hero (single-screen). Off-hero surfaces are not yet documented — extend the palette with restraint.

Warm and ambient, never clinical. The palette is small on purpose: two warm anchors (ink + cream) plus disciplined white-at-opacity for type and chrome over the video.

### Brand Anchors
- **Ink** (`{colors.ink}` — #2B3534): The warm dark teal that sits behind the video (and replaces it if the loop fails). It reads soft and human — not black, never a clinical navy. Use it as the page floor and as the fallback for any surface where the video isn't present.
- **Cream** (`{colors.cream}` — #F5EFE0): The brand text color off-video and the default warm light surface. The opposite of sterile #FFFFFF. Reserve cream for off-hero pages where text doesn't sit on footage.

### Text on Video
- **On-video** (`{colors.on-video}` — rgba(255,255,255,0.92)): The headline and primary copy when layered over the ambient video. White at 92% gives presence without the hardness of pure white.
- **On-video-muted** (`{colors.on-video-muted}` — rgba(255,255,255,0.60)): Sub-copy, secondary lines under the headline, the composer placeholder. Soft, recessive, calming.
- **On-video-faint** (`{colors.on-video-faint}` — rgba(255,255,255,0.40)): Nav links and supporting micro-text inside the glass pill. Stays out of the way of the headline.

### Glass Chrome
- **Glass** (`{colors.glass}` — rgba(255,255,255,0.10)): The base fill for the nav pill and the composer card — light ambient glass, not the heavy liquid-glass utility.
- **Glass-border** (`{colors.glass-border}` — rgba(255,255,255,0.18)): A 1px hairline on glass surfaces for definition without weight.
- **Composer-surface** (`{colors.composer-surface}` — rgba(255,255,255,0.12)): A hair brighter than the nav glass so the composer reads as the focal action.

### Reserved (Off-Palette)
- **No purple, indigo, or neon-green.** They read either clinical-generic or hype — both wrong for a calm caregiver.
- **No gradient backgrounds.** The ambient video *is* the backdrop; gradients would compete.
- **No pure #000 or pure #FFF.** Both are too hard for the tone; always lean to warm ink or warm cream.

## Typography

### Font Family
- **Display:** a soft humanist serif used in italic for the hero headline (CSS stack: `'EB Garamond', 'Cormorant Garamond', Georgia, 'Times New Roman', serif`). Italic forms preferred — the slant carries the human, conversational warmth.
- **Body:** a clean modern sans for the composer, nav, and sub-copy (CSS stack: `Inter, 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif`).
- **OpenType:** enable `liga`, `kern`, and (where supported) `ss01`/`ss02` on the serif italic; enable `cv11` and `tnum` on the sans for the composer input.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| display/hero | 72px (clamp 44 → 88) | 400 italic | 1.05 | -0.01em | Centered serif-italic headline — the emotional core |
| display/hero-mobile | 44px | 400 italic | 1.10 | -0.005em | Same headline at small phone widths |
| eyebrow/optional | 13px | 500 | 1.30 | 0.08em | Optional small line above the headline (rare) |
| sub-copy | 18px | 400 | 1.45 | 0 | The line beneath the headline; `{colors.on-video-muted}` |
| composer/input | 16px | 400 | 1.50 | 0 | The composer textarea; `{colors.on-video}` |
| composer/placeholder | 16px | 400 | 1.50 | 0 | "Ask me anything…"; `{colors.on-video-muted}` |
| nav/link | 14px | 500 | 1.40 | 0.01em | Links inside the glass nav pill |
| nav/brand | 15px | 500 | 1.40 | 0.02em | The Vitara wordmark at the pill's left edge |
| micro/legal | 12px | 400 | 1.45 | 0.02em | Footer-style micro-text, if ever needed |

### Principles
- The **serif italic is the calm voice** — never swap it for a clinical sans, or the entire tone hardens.
- The headline is **always centered**; left-aligned breaks the "listening, present" composition.
- Apply **slightly negative letter-spacing at display sizes** (-0.005 to -0.01em); positive tracking would feel editorial-cold.
- **Sub-copy at 18px not 16px** — the page is unhurried, so body text should breathe slightly larger.
- **Weight 500 is reserved for navigation** — the headline never bolds, and the composer never bolds.
- **No uppercase** anywhere on the hero (except the optional eyebrow). Calm voice doesn't shout.

### Note on Font Substitutes
If the named serif isn't available, fall back to `Cormorant Garamond` or `Georgia` italic — both are humanist enough to keep the caregiver warmth. Avoid hard editorial serifs (Didot, Bodoni, Playfair) — their high stroke contrast reads couture, not calm. When substituting, nudge line-height up 0.05 to preserve airiness and keep letter-spacing neutral.

## Layout

### Spacing System
- **Base unit:** 4px. All spacing tokens are multiples.
- **Tokens:** `space/1` 4 · `space/2` 8 · `space/3` 12 · `space/4` 16 · `space/5` 24 · `space/6` 32 · `space/8` 48 · `space/10` 64 · `space/12` 96 · `space/16` 128.
- **Hero vertical rhythm:** nav pill `space/5` from top edge · headline anchored slightly above center · `space/6` between headline and sub-copy · `space/10` between sub-copy and composer.
- **Composer internal padding:** `space/4` horizontal · `space/4` vertical · `space/3` between input and send affordance.
- **Universal rhythm:** when an off-hero page is built, default section padding is `space/16` top/bottom on desktop, `space/10` on mobile.

### Grid & Container
- **Hero container:** 100vw × 100vh, full-bleed video, no max-width.
- **Headline + sub-copy column:** max-width 720px, centered horizontally.
- **Composer column:** max-width 640px, centered horizontally, sits below the text column.
- **Nav pill width:** content-driven; max ~560px desktop, contracts to icon + brand on small phones.
- **No multi-column grid on the hero** — restraint is the layout.

### Whitespace Philosophy
Whitespace here is *time*, not gap. The hero deliberately leaves the screen mostly to the video so the eye can rest before it reads — and so the headline lands as a single quiet sentence, not a marketing block. Generous space above the headline tells the user "no rush"; generous space around the composer tells them "begin when you're ready." Filling that space would break the central promise of the product.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | The ambient video plane and ink fallback |
| Hairline | 1px `{colors.glass-border}` inner stroke | Glass nav pill outline; composer outline at rest |
| Backdrop blur | `backdrop-filter: blur(14px) saturate(120%)` over `{colors.glass}` | The nav pill and composer card — light glass over footage |
| Product shadow | `0 24px 60px -20px rgba(0,0,0,0.35)` | Only on the composer when focused, to lift it gently above the video |

**Shadow philosophy.** Shadows are used sparingly and only to *lift* the action, never to decorate. The hero has at most one elevated element at a time — the composer, when focused. Drop-shadows are warm-black at low opacity; never colored, never harsh, never stacked.

**Decorative Depth.**
- The ambient video itself is the deepest layer — everything else floats above it.
- Apply a 1px inner highlight (`inset 0 1px 0 rgba(255,255,255,0.06)`) on glass surfaces for a subtle top-edge gleam.
- A faint vignette (radial, ~12% opacity ink) at the page edges can be used to focus the eye toward center — never strong enough to feel dramatic.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| radius/none | 0 | Reserved — not used on hero |
| radius/sm | 8px | Small composer affordances (icon buttons inside the input) |
| radius/md | 14px | Internal composer chrome (attached menu chips, if added) |
| radius/lg | 20px | The composer card itself (`{rounded.composer}`) |
| radius/pill | 9999px | The floating nav (`{rounded.pill}`) and any pill-shape inside it |
| radius/full | 9999px | Circular icon buttons (send arrow, attachment) |

### Photography Geometry
- **Hero video aspect:** full-bleed, `object-fit: cover`, no crop guarantee — always design assuming the safe content area is the centered ~720px × 60vh region.
- **Loop length:** 8–14s, seamlessly looped, slow camera motion only — never cuts, never fast pans.
- **Color grade:** warm, low-saturation, muted greens / soft amber light. Never high-contrast medical imagery.
- **Loading strategy:** `poster` attribute set to a static frame at `{colors.ink}` warmth; video preloads `metadata` only; ink fallback shows instantly if the loop fails.
- **Image radius:** any photographic surface added later uses `radius/lg` (20px) to echo the composer.

## Components

### Top Navigation

**Glass Nav Pill** (`{component.glass-nav-pill}`)
- A floating pill anchored `space/5` from the top edge, horizontally centered.
- Surface: `{colors.glass}` with `{colors.glass-border}` hairline; `radius/pill`; backdrop-blur 14px.
- Padding: `space/3` vertical, `space/5` horizontal. Brand wordmark left, ≤4 links + a menu toggle right.
- Link color: `{colors.on-video-faint}` default; `{colors.on-video}` active; focus uses a 2px `{colors.on-video}` outline offset 2px outside the pill.
- Never adopts the heavy liquid-glass utility — light ambient glass only.

### Buttons

> Note: the hero deliberately avoids traditional CTAs. The buttons below are for future surfaces and the in-composer affordance only.

**Send affordance** (`{component.button-send}`)
- The circular send arrow inside the composer.
- Default: 36×36, `radius/full`, fill `{colors.on-video}` at 14%, icon `{colors.on-video}`.
- Active: fill `{colors.on-video}` at 22%; icon stays `{colors.on-video}`.
- Focus: 2px outline `{colors.on-video}` offset 2px; no fill change.

**Secondary (off-hero)** (`{component.button-secondary}`)
- Used only on pages built after the hero. Surface `{colors.cream}`, text `{colors.ink}`, 1px border `{colors.ink}` at 12%, `radius/pill`, height 44px, padding `space/5` horizontal, body sans 14px / weight 500.
- Active: text + border step to `{colors.ink}` 100%; fill unchanged.
- Focus: 2px outline `{colors.ink}` offset 2px.

**Utility / text link** (`{component.button-utility}`)
- Inline text affordance for footer-style links on off-hero pages. Color `{colors.ink}` 72%, body sans 14px, underline on focus only.
- Active: color steps to `{colors.ink}` 100%.
- Focus: 2px outline `{colors.ink}` offset 2px; underline appears.

### Cards & Containers

**Composer card** (`{component.composer}`)
- The hero's primary action and signature element. **The product is a conversation, so the first action is to type, not to click a CTA.**
- Surface `{colors.composer-surface}` with `{colors.glass-border}` hairline; `radius/lg` (20px); backdrop-blur 14px.
- Padding `space/4` all sides; min-height 64px; max-width 640px.
- Contains: a textarea (`composer/input` token) with placeholder `composer/placeholder`; a circular send affordance pinned bottom-right.
- Active (typing): hairline brightens to `{colors.on-video}` at 24%; product shadow appears.
- Focus (input focused): 2px outline `{colors.on-video}` offset 2px outside the card; product shadow at full value.

**Glass utility card (off-hero)** (`{component.card-glass}`)
- Used on results/dashboard surfaces if they need to sit on imagery. Same surface + hairline as the composer, `radius/lg`, padding `space/6`.
- Active / focus identical to composer card.

**Cream tile (off-hero)** (`{component.card-cream}`)
- Used on off-video pages. Surface `{colors.cream}`, text `{colors.ink}`, no border, `radius/lg`, padding `space/6`, optional 1px inner hairline at `{colors.ink}` 8% for definition.
- Focus (if interactive): 2px outline `{colors.ink}` offset 2px.

### Inputs & Forms

**Composer input** (`{component.input-composer}`)
- A bare `textarea` inside the composer card. No own border, no own background — the card *is* the input.
- Type: `composer/input`; placeholder color `{colors.on-video-muted}`.
- Active: caret `{colors.on-video}`; selection background `{colors.on-video}` at 18%.
- Focus: card outline handles the focus ring; the textarea itself shows no extra border.
- Multiline auto-grow up to 6 lines, then internal scroll.

### Footer
Intentionally **omitted** on the hero. The single-screen restraint is the design; any required legal links live inside the glass nav pill menu toggle.

## Do's and Don'ts

### Do
- **Use** `{colors.ink}` and `{colors.cream}` as the only off-video brand anchors — warm, never clinical.
- **Set** all text over the video in white-at-opacity (`{colors.on-video}` / `{colors.on-video-muted}` / `{colors.on-video-faint}`) so it stays soft.
- **Apply** the serif italic only to the centered headline — it's the human voice; sans handles everything functional.
- **Reserve** `radius/lg` (20px) for the composer and its off-hero descendants; reserve `radius/pill` for the nav.
- **Keep** the hero a single unhurried screen — no scroll, no second section, no footer.
- **Make** the composer the hero action; let typing replace any "Begin assessment" CTA.
- **Use** the ambient video as slow, calming motion — it's the page's only perpetual animation.
- **Maintain** generous whitespace above the headline and around the composer — space is time, time is calm.
- **Pair** every glass surface with a `{colors.glass-border}` hairline and backdrop-blur 14px — never a solid fill.

### Don't
- **Don't** add traditional CTA buttons on the hero ("Begin assessment", "Watch demo") — the composer IS the action.
- **Don't** use purple, indigo, or neon-green; **don't** use gradient backgrounds — both break the calm-caregiver feel.
- **Don't** add a green pulse dot or urgent micro-animations — urgency contradicts *listens before you ask*.
- **Don't** swap the serif-italic headline for a clinical sans — the tone hardens immediately.
- **Don't** use the heavy liquid-glass utility — standard light glass keeps it ambient, not flashy.
- **Don't** cram more sections in — the single calm screen is the design.
- **Don't** left-align the headline — centered is the listening posture.
- **Don't** use pure #000 or pure #FFF anywhere — always warm ink or warm cream / white-at-opacity.
- **Don't** stack drop-shadows or apply them to anything other than the focused composer.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤ 419px | Nav collapses to brand + menu toggle; headline at `display/hero-mobile` (44px); composer full-width minus `space/4` gutters |
| Phone | 420–640px | Nav still collapsed; headline ~48px; composer max-width = viewport - `space/8` |
| Large phone | 641–735px | Nav shows brand + 2 links + toggle; headline ~56px; composer up to 480px |
| Tablet portrait | 736–833px | Nav shows brand + 3 links + toggle; headline ~64px; composer up to 560px |
| Tablet landscape | 834–1023px | Nav full (4 links + toggle); headline ~72px; composer up to 600px |
| Small desktop | 1024–1068px | Hero locks to its target composition; headline ~76px; composer 640px |
| Desktop | 1069–1440px | Reference composition; headline `display/hero` at 80–88px; composer 640px |
| Wide desktop | ≥ 1441px | Composition unchanged; headline caps at 88px; video continues to cover full bleed |

### Touch Targets
- Minimum interactive target: **44×44** (composer send, nav menu toggle, every link inside the pill).
- Composer textarea hit area extends to the full card so a tap anywhere inside focuses the input.
- Nav pill links keep `space/3` vertical padding to guarantee target height even at 14px type.

### Collapsing Strategy
- **Nav pill:** desktop = brand + 4 links + toggle; tablet portrait = brand + 3 links + toggle; phone = brand + toggle only (links move into a sheet behind the toggle).
- **Headline:** scales by clamp(); stays centered, stays serif-italic, never wraps to more than 2 lines.
- **Sub-copy:** drops from 18px to 16px below tablet portrait; remains centered.
- **Composer:** shrinks max-width with viewport but never below 288px; padding never below `space/3`.
- **Glass treatments:** backdrop-blur stays 14px; if device lacks support, fall back to `{colors.ink}` 70% opacity fill.

### Image Behavior
- **Video sources:** provide MP4 (H.264) + WebM (VP9) via `<source>`; `playsinline`, `muted`, `loop`, `autoplay`.
- **Poster:** a single warm ink-toned frame; serves until the video has buffered.
- **No srcset on the hero video** — one ~1920×1080 master, scaled by `object-fit: cover`.
- **Loading:** `preload="metadata"`; the poster + `{colors.ink}` fallback handle first paint.
- **Off-hero photography (future):** standard `<img srcset>` at 1x / 2x; `loading="lazy"`; `radius/lg` to echo the composer.

## Iteration Guide

1. **Carry the calm into every new surface.** Onboarding, results, dashboard — warm cream/teal, soft serif for human moments, no urgency cues, no clinical blue.
2. **Favor conversation over forms.** Wherever a form would normally appear, ask if a composer-style dialog can do the work — the product is dialog.
3. **Keep motion slow and ambient.** Never add urgency, pulse dots, bouncy easings, or attention-grabbing micro-interactions. The video is the only perpetual motion.
4. **Restrict the headline serif italic to one moment per surface.** It's the human voice — overuse dilutes it. Sans handles all functional copy.
5. **Use tokens by name** (`{colors.ink}`, `{rounded.composer}`, `{component.composer}`). Inventing a new shade or radius is almost always wrong — extend the existing tokens before adding new ones.
6. **One elevated element per view.** The composer is lifted; nothing else should compete with a shadow. Glass surfaces stay flat-with-hairline.
7. **Never document hover.** Per Apple convention, design and ship for default / active / focus only — the system must work on touch surfaces and behave consistently across input modes.

## Known Gaps

- Only the hero is specified — onboarding, results, and dashboard surfaces are not documented. When you build them, the hardest task is keeping clinical data *calm*: warm palette, generous space, conversational framing.
- **Error and edge states for the composer** (empty submit, sending, AI thinking, rate-limited, offline) aren't surfaced in analyzed pages. Design them gentle, never alarming — a soft pulse on the composer hairline, not a red toast.
- **Validation styles, success states, and destructive confirms** are not surfaced in analyzed pages.
- **Accessibility of cream-on-video / white-opacity text** needs contrast checking per footage frame; the calm palette must not cost a health product its legibility. Consider a min-contrast scrim if footage gets bright.
- **Dark vs light mode parity** is not surfaced in analyzed pages — the hero is effectively dark by virtue of the video, but off-hero pages on cream need a documented dark counterpart.
- The serif face is specific; **a substitute must stay soft and humanist**, not a hard editorial serif, or the caregiver warmth is lost.
