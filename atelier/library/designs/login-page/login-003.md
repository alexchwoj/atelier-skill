---
version: "1"
name: "Login 003 — Dual-Card Sign Up (Stars + Form)"
description: "A two-card sign-up screen for Fivefold — an AI studio that turns ideas into production-ready interfaces. A dark stars card on the left (52% width, radial #000→#262626 with three drifting parallax star layers) sits beside a clean white form card on the right. Pure monochrome: #000, #FFF, #1A1A1A brand-gray, #262626 gradient stop, neutral-100 input fill. Inter is the only typeface. No blue, no purple, no neon, no gradient text, no shaders, no looping video — only a original StarsBackground component."
colors:
  outer-frame: "#FFFFFF"
  ink: "#000000"
  brand-gray: "#1A1A1A"
  stars-stop: "#262626"
  input-fill: "neutral-100"
  hairline-light: "rgba(0,0,0,0.10)"
  muted-light: "rgba(0,0,0,0.40)"
  muted-light-strong: "rgba(0,0,0,0.50)"
  placeholder-light: "rgba(0,0,0,0.30)"
  focus-ring: "rgba(0,0,0,0.15)"
  hairline-dark: "rgba(255,255,255,0.10)"
  border-dark: "rgba(255,255,255,0.20)"
  digit-dark: "rgba(255,255,255,0.40)"
  muted-dark: "rgba(255,255,255,0.60)"
  selection: "rgba(0,0,0,0.20)"
typography:
  sans:
    fontFamily: "Inter"
    weights: "300 / 400 / 500 / 600 / 700"
    role: "every text node — headings, body, labels, buttons, helpers"
    stack: '"Inter", ui-sans-serif, system-ui, sans-serif'
spacing:
  base: "Tailwind v4 default (4px)"
  outer-padding: "p-2 → lg:p-4 with gap-2 → lg:gap-4 between cards"
  form-rhythm: "space-y-8 → sm:space-y-10 → lg:space-y-6"
  hero-rhythm: "space-y-8 on the content wrapper; space-y-3 inside steps"
  form-horizontal: "px-4 → sm:px-12 → lg:px-16 → xl:px-24"
rounded:
  card: "rounded-3xl (24px) — both cards"
  control: "rounded-xl (12px) — inputs, social buttons, submit"
  step: "rounded-2xl (16px) — StepItem"
  badge: "rounded-full — step number circle"
components:
  StarsBackground: "original three-layer parallax star field. Each layer is a single div whose box-shadow holds 200–1000 star positions; a duplicate offset +2000px gives seamless infinite scroll. Mouse-tracked spring offset (stiffness 50, damping 20, factor 0.05) provides parallax."
  StarLayer: "Single drifting layer — animate y: [0, -2000] linear, durations 50s / 100s / 150s across the three sizes (1px / 2px / 3px)."
  StepItem: "Two-state row (active = white fill / black ink with a Check icon; inactive = brand-gray fill / white ink with the digit). Rounded-2xl, transition-colors only."
  SocialButton: "h-12 white pill with a black/10 hairline border, hover bg-black/5. Used for Google + GitHub only."
  InputGroup: "Label + neutral-100 input, rounded-xl, h-11, focus:ring-2 ring-black/15. No borders, no shadows."
  PasswordInput: "Custom group with an Eye / EyeOff toggle button absolutely positioned at right-4 top-1/2."
---

# Login 003 — Dual-Card Sign Up (Stars + Form)

> Fivefold showcase. Pairs with the Login 003 prompt. Use this file to keep Login 003's dual-card discipline when you add new auth screens — it should always read as a marketing-grade studio onboarding, never a generic SaaS form.

## Overview

Login 003 is **a single-screen sign-up page for Fivefold — an AI studio that turns ideas into production-ready interfaces.** The composition is a dual-card split on a pure white outer frame: a dark stars card on the left (~52% width), a clean white form card on the right, with white padding as the gap. No third-party background libraries, no shaders, no looping video — the animated stars are a original component built from `box-shadow` star fields.

The governing decision: **two cards, one ink-set, zero noise.** Most onboarding pages either dump everything onto one busy surface or hide the marketing pitch behind a modal. Login 003 splits the work cleanly — the left card is the brand promise (wordmark, three numbered steps, ambient stars drifting through a radial #000→#262626 room), the right card is the transaction (social buttons, divider, form, primary CTA). The palette is locked to five values: `#000`, `#FFF`, `#1A1A1A` brand-gray, `#262626` stars stop, and `neutral-100` for inputs. There is no blue, no purple, no neon, no gradient text. The only "shine" is a `shadow-2xl` under the left aside; everything else relies on hairlines and weight. The bet: when the brand surface stays disciplined, the form below it inherits the same authority.

The same system extends to any sibling screen — sign-in, password reset, magic-link, team invitation. Whenever a new auth surface lands, the left card holds the studio promise (logomark + heading + progression) and the right card carries the transaction. Tokens, radii, motion timings, and Inter weights are reused verbatim; only copy and step states change. This keeps every onboarding artefact reading as one continuous voice rather than a portfolio of unrelated forms.

**Key Characteristics:**
- **White outer frame** (`bg-white`) with `p-2 gap-2` → `lg:p-4 lg:gap-4` so each card floats with consistent margin on every breakpoint.
- **Locked palette** — `#000`, `#FFF`, `#1A1A1A` (brand-gray), `#262626` (stars gradient stop), `neutral-100` (input fill). No other color is allowed in this asset.
- **Inter only** — weights 300 / 400 / 500 / 600 / 700. No second font family. Clamp `font-extrabold` / `font-black` down to `font-semibold` (600) — the loaded weights stop at 700.
- **Two cards, sharp roles** — left card sells the studio (brand + 3-step progression), right card converts (Google / GitHub / email + password).
- **Fivefold StarsBackground** — three independent `box-shadow` star layers (sizes 1px / 2px / 3px, counts 1000 / 400 / 200) drift upward at speeds 50s / 100s / 150s. A `motion` spring tracks the cursor with `stiffness: 50, damping: 20, factor: 0.05` for soft parallax.
- **Step progression as the brand pitch** — three rows (`Register your identity` · `Configure your studio` · `Finalize your profile`) replace the usual hero copy block. Only step 1 is active by default, swapping its digit for a `Check` icon.
- **Cards over walls** — `rounded-3xl` (24px) on both cards, `rounded-xl` (12px) on every control, `rounded-2xl` (16px) on the StepItem rows. The geometry is uniformly soft but never spongy.
- **Single-fire motion** — the left card uses a staggered reveal (`staggerChildren: 0.15`, `delayChildren: 0.2`, child `duration 0.5`); the right card does one fade-up (`duration 0.8, ease "easeOut"`). No scroll-linked motion, no `whileInView`.

## Colors

> **Source pages analyzed:** the single sign-up route (`/`) rendered by `App.tsx` — `<main>` outer frame, left stars aside, right form section, all sub-components defined inline.

Five tones, plus controlled translucent overlays. The smallness is the point.

### Outer Frame & Surface
- **Outer frame** `{colors.outer-frame}` — `#FFFFFF`. The `<main>` background and the right form card. The gap between cards is the same white, so the cards read as cut-outs on a single sheet.
- **Form surface** `{colors.outer-frame}` — `bg-white` again on the right `<section>`. Solid; no overlay, no gradient.
- **Input fill** `{colors.input-fill}` — `bg-neutral-100`. Every form input on the right card. No borders, no shadows; focus is signalled by a 2px ring at `black/15`.

### Ink & Brand
- **Ink** `{colors.ink}` — `#000000`. All right-card text, submit button fill, active StepItem digit background, focus ring tint (at 15% alpha).
- **Brand-gray** `{colors.brand-gray}` — `#1A1A1A`. The inactive StepItem fill on the left card. Registered as a Tailwind v4 token via `--color-brand-gray: #1a1a1a;` so utilities like `bg-brand-gray`, `text-brand-gray`, `border-brand-gray` exist without a `tailwind.config.js`.

### Brand Gradient (Stars Card)
- **Stars stop** `{colors.stars-stop}` — `#262626`. The inner stop of the left card's radial gradient `radial-gradient(ellipse at bottom, #262626 0%, #000 100%)`. It exists only inside the stars card — never as a standalone surface elsewhere.
- **Star colour** — pure `#FFFFFF`. Used as the `box-shadow` paint on every star across all three layers.

### Hairlines & Borders
- **Hairline (light)** `{colors.hairline-light}` — `rgba(0,0,0,0.10)`. Social button border, divider rule.
- **Hairline (dark)** `{colors.hairline-dark}` — `rgba(255,255,255,0.10)`. Inactive step digit chip background on the stars card.
- **Border (dark)** `{colors.border-dark}` — `rgba(255,255,255,0.20)`. Inactive StepItem outline.

### Text Tints
- **Muted (light)** `{colors.muted-light}` — `rgba(0,0,0,0.40)`. Password helper, divider chip, eye-toggle default.
- **Muted (light, strong)** `{colors.muted-light-strong}` — `rgba(0,0,0,0.50)`. Sub-heading copy under the form H2; footer link sentence.
- **Placeholder** `{colors.placeholder-light}` — `rgba(0,0,0,0.30)`. Every input placeholder.
- **Digit (dark)** `{colors.digit-dark}` — `rgba(255,255,255,0.40)`. Inactive step digit numeral.
- **Muted (dark)** `{colors.muted-dark}` — `rgba(255,255,255,0.60)`. Stars card sub-heading copy.

### Selection & Focus
- **Selection** `{colors.selection}` — `selection:bg-black/20` on the `<main>` so highlights stay visible on the white outer frame.
- **Focus ring** `{colors.focus-ring}` — `ring-black/15` (2px) on every input plus the natural outline; replaces border-only focus.

**Constraint** (verbatim from prompt): no blue, no purple, no neon accents, no gradient text, no drop shadows beyond the existing `shadow-2xl` on the left card, and no color outside `#000`, `#FFF`, `#1A1A1A`, `#262626`, and `neutral-100`.

## Typography

### Font Family
- **Inter** — full stack `"Inter", ui-sans-serif, system-ui, sans-serif`. Loaded from Google Fonts at the top of `src/index.css`, registered as `--font-sans` inside the Tailwind v4 `@theme` block. Body inherits via `@apply font-sans`.
- **OpenType features** — Inter's defaults are kept (contextual alternates, ligatures on). No tabular numerals, no stylistic sets enabled — the form has no number-heavy data table that needs them.

There is no display face, no serif, no mono. The two cards lean on weight and size for hierarchy, not font swaps.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `hero-h1` | `text-4xl` (36px) | 500 | default | `tracking-tight` | Left card hero — `Join Fivefold` |
| `form-h2` | `text-3xl` (30px) | 500 | default | `tracking-tight` | Right card header — `Create your account` |
| `brand-wordmark` | `text-xl` (20px) | 600 | default | `tracking-tight` | Left card wordmark — `Fivefold` |
| `body-default` | `text-sm` (14px) | 400 | `leading-relaxed` on hero copy | default | Form sub-heading, footer link sentence |
| `label` | `text-sm` (14px) | 500 | default | default | Input labels above each field |
| `step-text` | `text-sm` (14px) | 500 | default | default | StepItem row copy |
| `button-primary` | `text-base` (16px inherited) | 600 | default | default | Submit CTA — `Start designing for free` |
| `button-social` | `text-sm` (14px) | 500 | default | default | Google / GitHub social buttons |
| `helper` | `text-xs` (12px) | 400 | default | default | Password helper line under the input |
| `divider-chip` | `text-xs` (12px) | 500 | default | `uppercase tracking-widest` | `Or` between social and form |
| `digit` | `text-xs` (12px) | 600 | default | default | StepItem number badge (inactive) |

### Principles
- **One family, one job.** Inter renders every node — headings, body, labels, buttons, helpers. Reject any request to add a serif or mono.
- **Weight clamp at 700.** Any class requesting `font-extrabold` (800) or `font-black` (900) is downgraded to `font-semibold` (600). Inter loaded weights stop at 700; nothing heavier ships.
- **No `clamp()` typography.** The asset lives inside two cards, never spans the viewport. Sizes are fixed at `text-3xl` / `text-4xl` for headings — fluid scaling would only fight the cards.
- **Tight headings, default body.** Headings carry `tracking-tight`; body and labels stay at the default tracking. Only the divider chip uses `tracking-widest` and `uppercase`.
- **Weight 500 is the workhorse.** Headings (`hero-h1`, `form-h2`), labels, step text, and social button copy all sit at 500 — 600 is reserved for the brand wordmark and the submit CTA.
- **Helper copy at 400.** The 12px password helper drops to 400 so it visually recedes against the 500-weight label above it.

### Note on Font Substitutes
If Inter can't load (firewalled environment, offline build), fall back to `ui-sans-serif` via the registered stack — the closest system match is Apple's San Francisco and Segoe UI on Windows. Both render slightly tighter than Inter at 36px; nudge `tracking-tight` to `tracking-tighter` on `hero-h1` only to compensate. Do not introduce a webfont replacement (e.g. "Inter Tight", "Geist", "Manrope") — the visual contract is Inter exactly.

## Layout

### Spacing System
- **Base unit** — Tailwind v4 default (4px). Every gap, padding, and rhythm value snaps to a multiple.
- **Outer frame** — `p-2 gap-2` (8px) on mobile, `lg:p-4 lg:gap-4` (16px) at desktop. The gap between cards is white and reads as part of the frame.
- **Hero card padding** — `px-12` (48px) horizontal on the left aside; vertical centering is by `justify-center`, not padding.
- **Form card padding** — `py-12 px-4` at mobile → `sm:px-12` → `lg:px-16 lg:py-6` → `xl:px-24`. The mobile pad is generous; desktop tightens to keep the form above the fold.
- **Hero rhythm** — content wrapper at `space-y-8`; step group nested at `space-y-3`; heading block nested at `space-y-3`.
- **Form rhythm** — wrapper at `space-y-8 sm:space-y-10 lg:space-y-6`; form element at `space-y-6`; header block at `space-y-2`.

### Grid & Container
- **Hero content width** — `max-w-xs` (20rem / 320px). The width cap forces the stars to dominate the card and pins the steps into a single-column stack.
- **Form content width** — `max-w-xl` (36rem / 576px). Wide enough for a two-column name grid, narrow enough to keep line length comfortable.
- **Name field grid** — `grid grid-cols-2 gap-4` for First Name + Last Name.
- **Social grid** — `grid grid-cols-2 gap-4` for Google + GitHub.
- **Card split** — left aside fixed at `w-[52%]`; right section fills with `flex-1`. No 12-column grid; the layout is a two-element flex row.

### Whitespace Philosophy
Whitespace is the only ornament permitted. The right card is intentionally over-padded at mobile (`py-12 px-4`) so the form floats away from the viewport edges; at desktop it tightens (`lg:py-6 lg:px-16`) so the eye can take the full form in one fixation. The left card refuses to fill its width — the `max-w-xs` content cap leaves wide vertical bands of stars on either side, turning negative space into atmosphere rather than emptiness. The white gap between cards (8–16px) is the only divider — no rule, no shadow seam, just a sliver of frame that lets each card read as an independent object.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Right form card surface, body, every input |
| Soft hairline | `border border-black/10` or `border border-white/20` | Social buttons, inactive StepItem, divider rules |
| Backdrop blur | — | Not used. The page intentionally rejects blur. |
| Product shadow | `shadow-2xl` | Left aside card only — anchors the stars surface to the frame |

**Shadow philosophy.** One shadow, one job. `shadow-2xl` exists exclusively on the left aside so the stars card reads as physically lifted off the white sheet. The right card, every button, every input — flat. Adding a second shadow anywhere collapses the contrast and makes the lift on the left feel decorative rather than structural.

**Decorative depth.**
- The `radial-gradient(ellipse at bottom, #262626 0%, #000 100%)` on the stars card creates a soft horizon glow without using a shadow.
- The three parallax layers (1px / 2px / 3px stars at 50s / 100s / 150s durations) imply z-depth by speed differential.
- The cursor spring (`stiffness 50, damping 20, factor 0.05`) shifts all three layers together, reinforcing the "room" reading.
- No noise overlay, no grain, no inner shadow. The composition is deliberately clean.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `none` | 0 | Never used on a surface — only the hairline rules in the divider |
| `rounded-full` | 9999px | Step number badge (h-7 w-7) |
| `rounded-xl` | 12px | Inputs (`h-11`), social buttons (`h-12`), submit button (`h-14`) |
| `rounded-2xl` | 16px | StepItem rows (`px-4 py-3`) |
| `rounded-3xl` | 24px | Both cards (left aside and right section) — the largest radius in the system |

### Photography Geometry
- **No photography.** No stock, no people, no product shots. The left card's only "imagery" is the StarsBackground itself — a procedurally generated `box-shadow` star field over a radial `#262626 → #000` room.
- **No looping video, no shaders, no `liquid-glass`, no noise overlay.** The asset is intentionally restrained: the stars carry every pixel of atmosphere.
- **No image radius behavior** required — there are no `<img>` tags in the screen.
- **Icon geometry** — lucide-react strokes at default weight. `Circle` ships with `fill-white text-white`; the rest inherit from their parent.
- **Loading strategy** — N/A; all visuals are SVG icons or `box-shadow` paint. No `loading="lazy"`, no `srcset`.

## Components

### Top Navigation
None on this surface. The sign-up screen is chrome-less by design — the only navigation cue is the footer "Sign in" link.

### Buttons

- **Primary submit** `{component.button-primary}` — `w-full h-14 bg-black text-white font-semibold rounded-xl mt-4`. Copy: `Start designing for free`. **Default:** flat ink fill on white. **Active:** `active:scale-[0.98]` micro-press. **Focus:** browser default outline preserved; do not strip.
- **Social button** `{component.button-social}` — `h-12 bg-white border border-black/10 rounded-xl text-sm font-medium text-black flex items-center justify-center gap-2`. Used for Google (`Chrome` icon) and GitHub (`Github` icon, label `GitHub`). **Default:** white pill with hairline border. **Active:** `active:bg-black/5` if needed. **Focus:** outline visible; ring not customised.
- **Password toggle** `{component.button-utility}` — `absolute right-4 top-1/2 -translate-y-1/2` icon-only `<button type="button">`. Switches `Eye` / `EyeOff` from `lucide-react`. **Default:** `text-black/40`. **Active:** swaps icon on click. **Focus:** outline preserved; `aria-label` toggles between `Show password` / `Hide password`.

### Cards & Containers

- **Stars hero card** `{component.card-dark}` — `<aside>` at `w-[52%]` desktop / hidden mobile. `rounded-3xl overflow-hidden shadow-2xl px-12`. Holds the radial gradient, the three StarLayers, and the content stack. **Default:** dark, drifting, parallax-tracked. No active or focus state — it's an aside, not an interactive surface.
- **Form light card** `{component.card-light}` — `<section>` at `flex-1` with `bg-white text-black rounded-3xl py-12 lg:py-6 px-4 sm:px-12 lg:px-16 xl:px-24`. Solid white, no shadow. Scrolls on mobile (`overflow-y-auto`), locks on desktop (`lg:overflow-hidden`).
- **Step item active** `{component.card-step-active}` — `bg-white text-black border border-white rounded-2xl px-4 py-3` with a `bg-black text-white` digit chip holding a `Check` icon. Only step 1 is active by default. **Default:** white fill, ink text. **Active:** identical — the "active" state is the default visual for step 1.
- **Step item inactive** `{component.card-step-inactive}` — `bg-brand-gray text-white border border-white/20 rounded-2xl px-4 py-3` with a `bg-white/10 text-white/40` digit chip showing the numeral. **Default:** brand-gray fill, white ink. **Active:** would swap to `card-step-active` (state lift not animated in this asset).

### Inputs & Forms

- **Input group** `{component.input}` — label (`text-sm font-medium text-black`) over `bg-neutral-100 border-none rounded-xl h-11 px-4 text-black placeholder:text-black/30`. **Default:** flat grey fill, no border. **Active:** placeholder visible at `black/30`. **Focus:** `ring-2 ring-black/15 outline-none` — 2px tinted ring, never just an outline strip.
- **Password input** `{component.input-password}` — `InputGroup` variant with `pr-12` to clear the toggle button. State stored in `useState(false)` named `showPassword`. Helper line beneath: `text-xs text-black/40` — `Use 8+ characters with a mix of letters and numbers.`
- **Form element** — `<form className="space-y-6" onSubmit={(e) => e.preventDefault()}>` so keyboard submit doesn't navigate.
- **Divider** `{component.divider}` — flex row with two `flex-1 border-t border-black/10` rules and a `bg-white px-4 text-xs font-medium text-black/40 uppercase tracking-widest` chip reading `Or`.

### Footer
- **Footer link sentence** `{component.footer-link}` — `<p className="text-center text-sm text-black/50">Already have an account? <a href="#" className="text-black font-medium hover:underline">Sign in</a></p>`. The only navigation off-ramp. **Default:** muted sentence, ink anchor. **Focus:** anchor inherits browser focus ring; underline is the active affordance.

## Do's and Don'ts

### Do
- **Use** `{colors.ink}` on `{colors.outer-frame}` for every right-card text node — anything muted lives at `{colors.muted-light}` or `{colors.muted-light-strong}`.
- **Apply** `rounded-3xl` to any new card-class surface and `rounded-xl` to any new control.
- **Reserve** `shadow-2xl` for the stars card alone — every other surface stays flat.
- **Set** focus on inputs via `ring-2 ring-black/15` plus the natural outline; never `outline-none` by itself.
- **Keep** Inter at weights 300 / 400 / 500 / 600 / 700 and clamp anything heavier down to `font-semibold`.
- **Use** the StepItem two-state pattern (white/black active, brand-gray/white inactive) for any new progression UI.
- **Lock** the StarsBackground defaults — `factor 0.05`, `speed 50`, `stiffness 50`, `damping 20`, `starColor #FFF` — when reusing the component on adjacent screens.
- **Compose** the page as two children of a single `<main>` flex row. No third column, no overlay.

### Don't
- **Don't** introduce blue, purple, green, or any accent color — the palette is locked at `{colors.ink}`, `{colors.outer-frame}`, `{colors.brand-gray}`, `{colors.stars-stop}`, `{colors.input-fill}`.
- **Don't** add gradients to text. Headings are flat `{colors.ink}` or inherited white.
- **Don't** load a second font family ("Inter Tight" and "Geist" are not acceptable substitutes).
- **Don't** swap `motion/react` for the legacy `framer-motion` import path.
- **Don't** add `whileInView` or scroll-linked motion — both reveals fire on mount.
- **Don't** show the stars card below `lg` (1024px). The aside is `display: none` on mobile and tablet.
- **Don't** use icons outside the six in the lucide-react allowlist (`Circle`, `Check`, `Chrome`, `Github`, `Eye`, `EyeOff`).
- **Don't** add a noise overlay, grain texture, or blur backdrop to the stars card.
- **Don't** move shared components (`StepItem`, `SocialButton`, `InputGroup`, `StarsBackground`) into separate files — everything ships in `App.tsx` + `index.css`.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤419px | Single-column form, `p-2 gap-2`, `py-12 px-4`, `space-y-8`. Stars card hidden. |
| Phone | 420–640px | Same as small phone — form fills the viewport, no card split. |
| Large phone | 641–735px | Still mobile layout; form still single-card. |
| Tablet portrait | 736–833px | `sm:` triggers at 640px → `space-y-10`, `px-12`. Stars card still hidden. |
| Tablet landscape | 834–1023px | `sm:` pads still active. Stars card not yet rendered. |
| Small desktop | 1024–1068px | `lg:` flips on. Aside appears at `w-[52%]`. `<main>` becomes `h-screen overflow-hidden p-4 gap-4`. Form pads to `px-16 py-6 space-y-6`. |
| Desktop | 1069–1440px | Two-card layout stable. No additional shifts. |
| Wide desktop | ≥1441px | `xl:` triggers → form pads to `px-24`. Aside still pinned at `w-[52%]`. |

### Touch Targets
- **Minimum** — every interactive element clears 44×44 CSS px. Inputs at `h-11` (44px), social buttons at `h-12` (48px), submit at `h-14` (56px).
- **Password toggle** — `h-5 w-5` icon inside a `right-4 top-1/2` button; the effective hit area is the parent input row (44px tall) plus the 16px right padding.
- **Footer link** — `text-sm font-medium` anchor inside a centered `<p>`; on touch, the underline + ink contrast keep the tap target legible at 44px line-height.

### Collapsing Strategy
- **Stars aside** — `hidden lg:flex`. Below 1024px it does not render; mobile users see the form full-bleed.
- **Form card** — always rendered. Stretches via `flex-1` on mobile; pairs with the aside at desktop.
- **Outer frame** — `p-2 gap-2` mobile → `lg:p-4 lg:gap-4` desktop. The frame thickens with the layout.
- **Form rhythm** — `space-y-8` mobile → `sm:space-y-10` → `lg:space-y-6`. Mobile breathes, desktop tightens to fit the viewport.
- **Form pad** — `px-4 → sm:px-12 → lg:px-16 → xl:px-24`. Vertical pad inverts: `py-12 → lg:py-6`.
- **Hero typography** — never collapses. `text-4xl` only appears at `lg+` because the aside is hidden below.

### Image Behavior
- **No `<img>` tags.** Lucide icons are inline SVG; the stars are `box-shadow` paint. No `srcset`, no `loading="lazy"`, no aspect-ratio container.
- **Decorative motion** — the StarsBackground uses transform-only animation (GPU-accelerated). It can run on mobile too if the aside is ever unlocked, but the asset keeps it hidden below `lg` for performance and focus.

## Iteration Guide

1. **Focus on one card at a time.** If you change the left aside, leave the right section's tokens untouched, and vice versa. The split is the system; don't blur it.
2. **Variants live inside the component.** New StepItem states (e.g. `error`, `pending`) are added as a third branch in the existing ternary — not as a parallel component.
3. **Reference tokens, never hex literals.** Any new surface that uses ink should say `{colors.ink}`; any new card radius should say `{rounded.card}`. Never hard-code `#000` or `24px` in copy or code review notes.
4. **Never document hover.** Apple convention: default / active / focus only. Hover is implementation detail, not design contract.
5. **No second font family.** Display vs body is solved by weight (`500` vs `400`) and size (`text-4xl` vs `text-sm`), not by swapping families.
6. **Shadow restriction holds.** `shadow-2xl` stays exclusive to the stars aside. Adding a shadow to the form card, a button, or an input breaks the depth hierarchy.
7. **Chrome alternative.** If a new screen needs a top bar (e.g. account settings), render it as a thin `<header>` inside the right section — not as a third outer surface. The two-card frame is the brand.

## Known Gaps

- **Error & validation states** — not surfaced in analyzed pages. Inputs have no `aria-invalid` styling, no inline error copy, no failed-submit treatment. Define when the first server-side validation contract lands.
- **Loading state on submit** — the CTA has `active:scale-[0.98]` but no spinner or pending text. Pick a token (`text-white/60` mid-submit, swap copy to `Starting…`?) before shipping a real backend.
- **Dark mode** — not specified. The system is already monochrome but no inverted variant is documented. If dark mode is added, define which surface becomes the `bg-white` swap (likely the right card becomes `#0a0a0a` with `text-white`).
- **Reduced motion contract** — narrated in the prompt (stars can keep running; staggered reveal collapses; spring parallax disabled with `factor: 0`) but not implemented as a `prefers-reduced-motion` media query in `index.css`.
- **Localised copy** — every string is English. No translation tokens, no plural rules, no RTL mirroring strategy for the two-card split.
- **Empty/social-only sign-up branch** — the form assumes a full email + password flow. A "Google-only" or "magic-link" variant would need a documented collapse of the divider and password block; that branch isn't surfaced.
