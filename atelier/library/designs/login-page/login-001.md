---
version: "1"
name: "Login 001 — Two-Column Warm Dark Sign-in"
description: "A returning-user 'welcome back' sign-in: a dark editorial form panel on the left, a looping video panel on the right. Warm dark canvas, a single warm-orange accent, a handwritten eyebrow, and an Instrument Serif italic word. Built to feel like coming home, not authenticating."
colors:
  canvas: "#0F0F11"
  panel: "#131316"
  inputBg: "#1B1B1F"
  inputBorder: "#2A2A2F"
  hairline: "#26262B"
  accent: "#F37029"
  accentHover: "#FF7E36"
  accentSoft: "#FF9A58"
  text: "#FFFFFF"
  textSoft: "#C9C9CE"
  textMuted: "#9A9AA1"
typography:
  display:
    fontFamily: "DM Sans"
    weights: [400, 500, 600, 700, 800]
    role: "the 'Sign in to your account, again' heading"
  handwritten:
    fontFamily: "Caveat"
    weights: [500, 600, 700]
    role: "eyebrow only — 'Welcome back !'"
  italic-accent:
    fontFamily: "Instrument Serif"
    style: "italic"
    weights: [400]
    role: "the single gradient-orange italic word ('again')"
  body:
    fontFamily: "DM Sans"
    weights: [400, 500]
    role: "labels, inputs, fine print"
spacing:
  base: "4px"
  formGap: "18px"
  columns: "5fr form / 7fr video (≥1200px)"
rounded:
  input: "10px"
  button: "10px"
  checkbox: "4px"
  eyeBtn: "8px"
  card: "28px"
  pill: "9999px"
components:
  video-panel: "Right column, looping silent video — the brand anchor, no text overlay"
  handwritten-eyebrow: "Script 'Welcome back !' above the display heading — the human touch"
  cta: "Warm-orange fill button, the only saturated element"
  input: "Dark fill, hairline border, orange focus ring (border-color only)"
  checkbox: "Custom 18px box, hidden native input, accent fill when checked"
  eye-toggle: "Inline password reveal button overlapping the password input"
---

# Login 001 — Two-Column Warm Dark Sign-in

> Fivefold showcase. Pairs with the Login 001 prompt. Sibling to Login 002 but the opposite mood — read both before building a third login so they stay distinct.

## Overview

Login 001 is a **"welcome home" sign-in** — the screen a *returning* user meets, and it's designed to feel like opening the door to a familiar place, not filling out a form. Where Login 002 is a cinematic stranger's threshold ("Step in"), Login 001 is warm and personal: a handwritten *Welcome back !*, a glowing orange accent, and a video panel beside the form like a window into a lit room.

The governing decision: **warmth is the whole point — fight the inherent coldness of a login.** Auth screens are utilitarian by nature; every choice here (handwritten script, warm orange, the personal "again") exists to make a routine return feel like a small homecoming. The page is full-bleed two-column; the form panel never floats, the video panel never carries text — the mood lives in the footage.

The system extends to siblings (sign-up, reset, error) by holding three constants: the two-column warm-dark frame, the single orange accent, and the once-each rule for the handwritten eyebrow + serif-italic word. Any screen that loses one of those three has drifted closer to Login 002.

**Key characteristics:**
- **Two-column layout** (NOT centered): dark form panel `5fr` left + looping video panel `7fr` right at ≥1200px. *(Note: this is the opposite of Login 002's single centered column.)*
- Warm dark canvas (`{colors.canvas}` — #0F0F11) with a near-black form panel (`{colors.panel}` — #131316). Full-bleed; no floating rounded outer card.
- A single warm-orange accent (`{colors.accent}` — #F37029) — used on CTA, link, checkbox-checked, focus border, eyebrow text, and a gradient on one italic word.
- **Three font voices** (DM Sans body, Caveat handwritten, Instrument Serif italic) loaded in one Google Fonts request.
- The right video panel is the brand's visual anchor — silent loop, no text overlay, no captions.
- Static HTML + CSS + 3 vanilla JS interactions (auto-year, password toggle, submit feedback). No framework, no build tool.
- All corners soft (`{rounded.input}` = 10px / `{rounded.checkbox}` = 4px) — the friendliness lives in the radius too.
- Exactly one product shadow (`0 8px 24px rgba(0,0,0,0.4)`) reserved for the CTA — the page's only lift.

## Colors

> **Source pages analyzed:** the single sign-in screen (`index.html`) — all tokens declared in `:root` of `style.css`. No additional surfaces (sign-up, reset, error) are specified.

### Brand & Accent
- **Accent** (`{colors.accent}` — #F37029, warm orange): The single saturated color, and the reason is emotional — it's human warmth against the dark, an ember, a lamp glow. Marks the CTA fill, the link, the checkbox-checked state, the input focus border, the eyebrow text, and the gradient on one italic word. One warm point makes the whole cold screen feel inviting. Never introduce a second accent.
- **Accent Hover** (`{colors.accentHover}` — #FF7E36): One step brighter than the base accent; used only on CTA hover and link hover. Read as "the ember catching breath," not as a new color.
- **Accent Soft** (`{colors.accentSoft}` — #FF9A58): Reserved for one place — the right stop of the gradient on the italic word "again". A peach-leaning warmth so the gradient finishes glowing, not muddying.

### Surface
- **Canvas** (`{colors.canvas}` — #0F0F11): Warm-leaning dark page floor (NOT pure black) so the orange reads as glow, not alarm.
- **Panel** (`{colors.panel}` — #131316): The form column, one step off the canvas — a soft surface, not a hard outlined card.
- **Input Background** (`{colors.inputBg}` — #1B1B1F): Two steps off the canvas; gives inputs a subtle inset feel without a border-heavy treatment.
- **Media Panel Fallback** (`#000`): The right panel's pre-video color so the page never flashes white during buffer. Not a token — declared inline on `.panel--media`.

### Text
- **Text** (`{colors.text}` — #FFFFFF): The heading and the CTA label. Pure white only where the eye must land first.
- **Text Soft** (`{colors.textSoft}` — #C9C9CE): Field labels, "Remember me", sign-up line. Bright enough to read as primary copy, soft enough not to compete with the heading.
- **Text Muted** (`{colors.textMuted}` — #9A9AA1): Subtitle, placeholder text, copyright. The quiet voice — never used for anything actionable.

### Hairlines & Borders
- **Input Border** (`{colors.inputBorder}` — #2A2A2F): The 1px idle border on inputs and the 1.5px idle border on the custom checkbox. Just enough definition to separate the input from the panel.
- **Hairline** (`{colors.hairline}` — #26262B): Reserved for optional dividers on the dark panel (footer separators, sibling-screen rule lines). Barely visible by design.

### Brand Gradient
- **Accent → Accent Soft** (`linear-gradient(90deg, #F37029 0%, #FF9A58 100%)`): Used exactly once per screen — as the `-webkit-background-clip: text` fill on the italic word "again". Direction is horizontal, stops are 0%/100% — no mid-stop, no diagonal angle, no radial variant.

## Typography

### Font Family

- **DM Sans** — `'DM Sans', system-ui, -apple-system, sans-serif`. Weights 400 / 500 / 600 / 700 / 800 + italic 400. Carries body, label, heading, button, link, input.
- **Caveat** — `'Caveat', cursive`. Weights 500 / 600 / 700. Used exactly once per screen, in `{colors.accent}` warm orange — the eyebrow only.
- **Instrument Serif** — `'Instrument Serif', serif`. Italic 400 only. Used on exactly one word (`again`) with the orange→accentSoft gradient.

All three load in **one Google Fonts stylesheet request** via `<link>` in `<head>` — performance discipline matters even on a single-screen showcase. OpenType ligatures left at browser default; no custom `font-feature-settings`.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| eyebrow | 28px (22px ≤420px) | Caveat 600 | default | default | Handwritten "Welcome back !" |
| title | `clamp(30px, 3.2vw, 48px)` | DM Sans 800 | 1.1 | -0.02em | H1 "Sign in to your account, again" |
| title-accent | inherits title size | Instrument Serif italic 400 | inherit | inherit | The word "again" with gradient |
| subtitle | 15px | DM Sans 400 | 1.55 | default | Copy under H1 ("Pick up where you left off…") |
| field-label | 13px | DM Sans 500 | default | 0.01em | "Email", "Password" |
| input | inherit (16px) | DM Sans 400 | default | default | Input value + placeholder |
| btn-label | inherit (16px) | DM Sans 600 | default | default | CTA "Sign in" / "Signing in…" |
| row-meta | 13px | DM Sans 400 / link 500 | default | default | "Remember me" + "Forgot Password ?" |
| signup | 14px | DM Sans 400 | default | default | "Don't have an account ? Sign Up" |
| copyright | 12px | DM Sans 400 | default | default | "Copyright © {YEAR} Fivefold" |

### Principles

- **Display weight is 800, body is 400.** DM Sans 500 / 600 / 700 are reserved (500 for labels and link, 600 for the CTA and eyebrow, 700 unused on this screen) — the contrast is deliberately wide.
- **Negative tracking at display sizes only** — `-0.02em` on the H1; everything ≤15px tracks at default or `+0.01em` for labels.
- **Subtitle line-height 1.55** — looser than UI default so the support copy reads conversational, not technical.
- **Handwritten + serif-italic are once-each gestures.** Caveat appears only on the eyebrow; Instrument Serif italic appears only on "again". The warmth depends on these being rare.
- **The H1 uses `clamp()`, every other size is fixed.** Only the headline scales fluidly — everything else holds its proportion so the form never feels stretched.
- **Placeholders share color with the muted text** (`{colors.textMuted}` — #9A9AA1) — they fade in line with copyright and subtitle, never compete with the label above.
- **Typographic micro-spaces are intentional.** The spaces before `!` (Welcome back) and `?` (Forgot Password / Don't have an account) match French editorial typesetting — they reinforce the warm-personal tone and should be preserved verbatim.

### Note on Font Substitutes

If **DM Sans** isn't available, fall back to Inter or system-ui — but tighten the H1 tracking another -0.005em because both are looser than DM Sans at 800 weight. If **Caveat** isn't available, the eyebrow collapses; a non-script substitute breaks the entire "personal hand" gesture. If forced, use a genuine handwriting font (Kalam, Patrick Hand) rather than an italic sans. If **Instrument Serif** italic isn't available, use EB Garamond italic or Cormorant italic — never a sans italic, because the serif's contrast against DM Sans is half of why the accent word works.

## Layout

### Spacing System

- **Base unit:** 4px.
- **Form vertical rhythm:** 18px gap between fields (the `.form` gap), 6px gap between label and input (the `.field` internal gap).
- **Panel padding (left/form column):** `clamp(28px, 4vw, 64px)` top, `clamp(24px, 5vw, 88px)` horizontal, `clamp(24px, 3vw, 48px)` bottom. The horizontal padding scales harder than the vertical so the form column doesn't crowd the viewport at desktop widths.
- **Brand-to-form gap:** `clamp(40px, 5vw, 80px)` — the largest gap on the screen, by intent. Logo sits high, form sits in the visual center.
- **CTA top margin:** 24px above the button, 24px above the "Sign Up" line.
- **Subtitle bottom margin:** 32px — separating the narrative from the form proper.
- **Row-between top margin:** 4px — `Remember me ↔ Forgot Password ?` sits tight under the password field.
- **Copyright top padding:** 32px — sits at the panel floor via `margin-top: auto`.

### Grid & Container

- **Form-wrap max-width:** 460px — the form never stretches past comfortable reading width even when the panel does.
- **Subtitle measure:** `max-width: 38ch` — keeps the support copy on ~2 lines at desktop.
- **Page grid:** CSS Grid on `.shell`, full viewport (`min-height: 100dvh`). No outer container, no max-width on the page — the layout is intentionally full-bleed.
- **Column ratios:** `5fr 7fr` (≥1200px) → `1fr 1fr` (860–1199px) → stacked rows `38vh auto` (≤859px, video on top via `order: -1`).
- **No central content container.** The seam between the two panels lives at the column boundary.

### Whitespace Philosophy

The dark panel breathes the form. Padding scales fluidly so on a 13-inch laptop the form sits ~64px from the left edge and on a 27-inch monitor it sits ~88px in — never glued to the seam, never floating in the middle. The video panel is the opposite: zero padding, edge-to-edge footage. The contrast between *generously padded text-side* and *zero-padding image-side* is itself the layout idea — it says "the words are precious, the picture is the room."

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Page canvas, form panel, subtitle, eyebrow, headings, wordmark |
| Soft hairline | 1px / 1.5px solid `{colors.inputBorder}` | Inputs idle, checkbox idle |
| Focus ring | 1px solid `{colors.accent}` (border-color swap, no outline) | Input focus, checkbox-checked border |
| Product shadow | `0 8px 24px rgba(0, 0, 0, 0.4)` | The CTA only — the single lifted element on the page |

**Shadow philosophy:** the page has exactly one shadow, and it's on the CTA. Everything else is flat. This is deliberate — in a warm dark scheme, gratuitous shadows turn into smudges. The CTA earns its shadow because it carries the warmest color and the most important action; the lift reads as "this is the thing to press." Capping at `0 8px 24px rgba(0,0,0,0.4)` is non-negotiable — softer disappears, harder turns into a button stuck on a different page.

**Decorative depth:**
- The looping video provides ambient depth without any CSS — it's the only "motion shadow" the page needs.
- The accent gradient on "again" (`linear-gradient(90deg, accent 0%, accentSoft 100%)`) provides a tiny optical depth without any glow filter.
- Hover lift on CTA is `translateY(-1px)` only — physical, not flashy.
- No `backdrop-filter`, no `box-shadow` on inputs, no inner-shadow inset. The depth budget is spent on one button.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| none | 0 | Page panels, video panel, full-bleed surfaces |
| xs | 4px | Custom checkbox box (`{rounded.checkbox}`) |
| sm | 8px | Eye-toggle button hit area (`{rounded.eyeBtn}`) |
| md | 10px | Inputs, CTA (`{rounded.input}` / `{rounded.button}`) — the friendly default |
| lg | 28px | Reserved (`{rounded.card}` — `--radius-card` in tokens) — declared but not bound on this screen |
| pill | 9999px | Reserved for future status chips / badges |

### Photography Geometry

- **Right panel video** fills its column at `object-fit: cover; position: absolute; inset: 0;` — aspect ratio adapts to the column at every breakpoint.
- **No image radius** — the video is full-bleed and respects the page edge, never the panel's radius (the panel has none).
- **Fallback during load:** the panel background is pure black (`#000`), so the page never flashes white while the video buffers.
- **Mobile video band:** at ≤859px the video moves to a top band sized `38vh` (or `30vh` ≤420px) via `grid-template-rows` + `order: -1`. The form takes the remaining height.
- **No `<picture>` srcset** — the asset is a single MP4 from CDN (`https://cdn.5sdesign.art/projects/Login-001/login-001.mp4`). Sized in CSS, not markup.
- **Required `<video>` attributes:** `autoplay muted loop playsinline preload="auto"` — all four together are required for silent autoplay across iOS Safari, Chrome, and Firefox.

## Components

### Top Navigation

There is no top nav on this screen — a single auth screen by intent. The only chrome is the white wordmark in the top-left of the form panel.

**Brand wordmark** `{component.brand-logo}` — `<img class="brand__logo">` at `height: 32px` (desktop) / `28px` (≤859px), white-on-transparent SVG, `width: auto`. Sits at the top-left of the form panel with `clamp(40px, 5vw, 80px)` margin-bottom before the form begins. Buyer supplies the SVG inside a `logo/` folder beside `index.html`.

### Buttons

**Primary CTA** `{component.button-primary}` — Warm-orange fill button, the only saturated element on the page.
- *Default:* background `{colors.accent}`, color `{colors.text}`, padding `14px 22px`, radius `{rounded.button}` (10px), font DM Sans 600 16px, inline arrow SVG (18px), gap 10px, shadow `0 8px 24px rgba(0,0,0,0.4)`.
- *Active:* `transform: translateY(0)` — resets the hover lift to read as a press.
- *Focus:* relies on browser default outline on the button itself — the CTA does not get the orange focus ring (it already IS orange).
- *Disabled:* `opacity: 0.7; cursor: progress` — used by the JS submit handler for 1400ms while label shows "Signing in…".
- Full-width on ≤859px.

**Text link** `{component.link}` — Inline anchor in `{colors.accent}`, DM Sans 500, no underline.
- *Default:* color `{colors.accent}`, `text-decoration: none`, transition `color 0.15s ease`.
- *Active/focus:* color shifts to `{colors.accentHover}`. No underline added on focus — color shift carries the state.

**Eye toggle** `{component.button-utility-eye}` — Inline icon-only button absolutely positioned over the right edge of the password input.
- *Default:* 36×36px, transparent background, `{colors.textMuted}` icon, radius `{rounded.eyeBtn}` (8px), positioned `right: 8px; bottom: 8px`.
- *Active:* `.is-visible` class swaps eye → eye-off SVG and updates `aria-label` between "Show password" and "Hide password".
- *Focus:* keyboard focus reveals the same `rgba(255,255,255,0.04)` background tint as the resting hover treatment.

### Cards & Containers

**Dark form panel** `{component.panel-dark}` — Left column, background `{colors.panel}`, no radius, no border, no shadow. Padding scales via `clamp()`. Flex column, max-width on inner `.form-wrap` of 460px.

**Media panel** `{component.panel-media}` — Right column, background `#000` (fallback), `position: relative; overflow: hidden`. Holds the `<video class="panel__video">` element absolute-positioned to fill.

**Field row** `{component.row-between}` — Flex row with `justify-content: space-between`, used once on the screen for `Remember me ↔ Forgot Password ?`. Font 13px, top margin 4px to sit tight under the password field.

### Inputs & Forms

**Text input** `{component.input}` — Dark fill on the panel.
- *Default:* background `{colors.inputBg}`, border 1px solid `{colors.inputBorder}`, radius `{rounded.input}` (10px), padding `14px 16px`, color `{colors.text}`, placeholder `{colors.textMuted}`, `transition: border-color 0.2s ease`.
- *Focus:* `outline: none; border-color: {colors.accent}` — the only state change. No glow, no shadow, no scale.
- *Password variant:* `padding-right: 46px` to clear the eye-toggle button.

**Custom checkbox** `{component.checkbox}` — 18px box, native input hidden but focusable.
- *Default:* `.checkbox__box` 18×18px, border 1.5px solid `{colors.inputBorder}`, radius `{rounded.checkbox}` (4px), background `{colors.inputBg}`, internal SVG check at `opacity: 0`. Transition `background-color 0.15s ease, border-color 0.15s ease`.
- *Active (checked):* `background: {colors.accent}; border-color: {colors.accent}`, SVG check at `opacity: 1; color: white`.
- *Focus:* native input retains keyboard focus (visually-hidden but reachable); rely on browser ring on the input itself.

### Footer

**Copyright** `{component.copyright}` — Bottom of the form panel, pushed via `margin-top: auto`. Font 12px DM Sans 400, color `{colors.textMuted}`. Content: `Copyright © {YEAR} Fivefold` with `{YEAR}` filled by JS on load via `[data-year]`.

**Sign-up line** `{component.signup}` — Sits below the form, font 14px, color `{colors.textSoft}`, with the `Sign Up` portion using `{component.link}`. Content verbatim: `Don't have an account ? Sign Up`.

## Do's and Don'ts

### Do
- Keep the two-column split: form `5fr` left, video `7fr` right at ≥1200px.
- Use `{colors.accent}` as the single warm note — CTA, link, checkbox-checked, focus border, eyebrow, and one italic word.
- Apply `{rounded.input}` (10px) to inputs and the CTA — friendly, not sharp.
- Use the Caveat eyebrow and Instrument Serif italic word **exactly once each** per screen.
- Reserve the `0 8px 24px rgba(0,0,0,0.4)` shadow for the CTA only.
- Keep the page full-bleed — the two panels meet at a seam, no outer container.
- Let the video carry the mood — silent loop, no overlay text, no captions.
- Cap form-wrap at 460px and subtitle at 38ch so the column never reads as a wall.
- Preserve the editorial spaces before `!` and `?` in body copy (Welcome back ! / Forgot Password ?).
- Load all three fonts in a single Google Fonts stylesheet request — performance discipline.

### Don't
- Don't center the content — that's Login 002's system. Login 001 is two-column and left-aligned within the form panel.
- Don't add a second accent color — the warmth lives in the orange's scarcity.
- Don't use SaaS purple/blue gradients, neon, or any cool-spectrum accent.
- Don't float a rounded card on a colored background — the page is full-bleed.
- Don't overuse the handwritten/italic voices — once each, or the personal touch becomes a font circus.
- Don't put text or captions over the video — it's a wordless anchor.
- Don't add shadows to inputs, the panel, or the wordmark — only the CTA carries a shadow.
- Don't introduce keyframe animations or reveal libraries — three vanilla JS interactions only.
- Don't change input focus to a glow or outline-style ring — focus is a border-color swap to `{colors.accent}`, nothing more.
- Don't replace the video with a static image unless mobile load budget forces it.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤419px | `.shell` rows = `30vh auto`; eyebrow drops to 22px; CTA full-width |
| Phone | 420–640px | `.shell` rows = `38vh auto`; video on top via `order: -1`; logo at 28px |
| Large phone | 641–735px | Same stacked layout as 420–640; padding still on the `clamp()` low end |
| Tablet portrait | 736–833px | Same stacked layout; form padding scales up via `clamp()` |
| Tablet landscape | 834–1023px | Two-column 1fr/1fr; video gains its own column; CTA reverts to inline width |
| Small desktop | 1024–1068px | 1fr/1fr persists through to 1199px; form readable at 460px max-width |
| Desktop | 1069–1440px | At ≥1200px switches to 5fr/7fr; the video gets its intended dominance |
| Wide desktop | ≥1441px | Padding hits the `clamp()` ceiling (88px horizontal / 64px top); form-wrap still capped at 460px |

### Touch Targets

- Minimum 44×44px effective for all interactive elements.
- Inputs are 48px tall with the 14px/16px padding — exceeds the minimum.
- Eye-toggle is 36×36px visual, sits inside the 48px input field so the effective hit area is the full input row.
- Checkbox visual is 18px but the surrounding `<label>` is the actual click target — keep the label wide enough.
- CTA is 48px tall by padding + line-height — exceeds the minimum.

### Collapsing Strategy

- **Two columns → stacked** at ≤859px. Video moves above the form via `grid-template-rows: 38vh auto` + `.panel--media { order: -1 }`.
- **CTA goes full-width** at ≤859px via `.btn-primary { width: 100% }`.
- **Eyebrow shrinks** from 28px → 22px at ≤420px (the only typography that breakpoint-shifts beyond the H1 clamp).
- **Logo shrinks** from 32px → 28px at ≤859px.
- **Form-wrap stays capped at 460px** at every breakpoint — never stretches edge-to-edge even on wide phones.

### Image Behavior

- The video uses `object-fit: cover` and `position: absolute; inset: 0` — it fills the panel at every aspect ratio without distortion.
- Required attributes: `autoplay muted loop playsinline preload="auto"` — all four are needed for silent autoplay across iOS Safari, Chrome, and Firefox.
- No `srcset` / no `<picture>` — single MP4 from CDN. If swapping to a heavier hero or 4K master, gate it behind a `prefers-reduced-data` query (not currently in the prompt).
- Fallback during buffer is solid `#000` — the page never flashes white.

## Iteration Guide

1. **Building a sibling screen (sign-up, reset)?** Keep the two-column warm-dark frame, the single-orange rule, and the once-each typography gestures. Reuse the handwritten eyebrow as the greeting; rewrite the H1 copy only.
2. **One warm accent only.** If a new state (error, info) needs attention, brighten the orange to `{colors.accentHover}` or use copy weight — don't add a second hue.
3. **Handwritten + serif-italic are once-each gestures per screen.** A second Caveat run or a second Instrument Serif word breaks the "rare warmth" premise.
4. **The video panel is non-negotiable on wide screens** — it is the mood. Don't replace it with a static image unless mobile load forces it.
5. **Token refs over hard-coded values.** Reach for `{colors.accent}`, `{rounded.input}`, `{component.button-primary}` rather than `#F37029` or `10px` when extending — the system needs to be ctrl-F-able.
6. **Display family is DM Sans 800, body is DM Sans 400** — don't reach into 500/600/700 unless you're styling a label (500) or the CTA/eyebrow (600). Reserve 700 for nothing on this screen.
7. **Never document hover in new components.** Per Apple convention, specify default / active / focus only — hover is a desktop affordance, not a spec.

## Known Gaps

- Sign-up / reset-password / error / success states aren't specified — only the "welcome back" sign-in. Build them in the same two-column warm-dark language using the iteration rules above.
- Validation states (email format error, password too short, inline messages) are not surfaced in the analyzed prompt. The current focus treatment (border swap to accent) carries success-shaped semantics by default; an error color is not defined.
- Mobile video treatment beyond the 38vh / 30vh bands (whether to drop video on ultra-small viewports, `prefers-reduced-data` behavior, autoplay-blocked fallback) is under-specified.
- The handwritten font (Caveat) is the prompt's specific choice; a non-script substitute will collapse the gesture, but the prompt doesn't enumerate fallbacks.
- A full multi-step auth flow (2FA, magic-link, email-verify) is not specified — it would borrow Login 002's transition model rather than inventing one here.
- The `{rounded.card}` 28px token (`--radius-card`) is declared in the prompt but never bound on this screen. It's reserved for future card variants and has no current usage.
