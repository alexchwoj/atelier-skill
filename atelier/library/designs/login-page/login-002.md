---
version: "1"
name: "Login 002 — Cinematic Sign-in"
description: "A full-screen, video-backed sign-in flow with confident, mission-driven copy ('Step in. Make the internet prettier.'). Cinematic dark warmth, glass surfaces, a single centered column, and a 3-step state machine (email → code → success)."
colors:
  canvas: "#000000"
  glass-nav: "#1f1f1f57"
  glass-input: "#1f1f1f80"
  hairline: "#333333"
  hairline-soft: "#444444"
  hairline-focus: "#666666"
  on-dark: "#ffffff"
  body: "#d1d5db"
  muted: "#6b7280"
  placeholder: "#6b7280"
  overlay-dim: "rgba(0,0,0,0.40)"
  overlay-vignette-edge: "rgba(0,0,0,0.85)"
  overlay-top-fade: "rgba(0,0,0,0.70)"
typography:
  display:
    fontFamily: "Inter"
    fontSize: "60px"
    fontWeight: 500
    lineHeight: "0.95"
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.6"
  italic-sub:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: 400
    fontStyle: "italic"
  button:
    fontFamily: "Inter"
    fontSize: "14px"
    fontWeight: 500
  otp:
    fontFamily: "Inter"
    fontSize: "24px"
    fontWeight: 500
  legal:
    fontFamily: "Inter"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "1.6"
spacing:
  base: "4px"
  field-gap: "24px"
  block-gap: "40px"
  top-offset: "150px"
  nav-inset: "24px"
rounded:
  none: "0px"
  box: "12px"
  pill: "9999px"
components:
  glass-pill: "Floating nav + email field: bg glass-nav, backdrop-blur-sm, 1px hairline border"
  button-primary: "White fill, black text, pill radius — the only bright element on screen"
  button-glass: "Glass variant (bg white/5, border white/10) for Google + Back actions"
  otp-box: "12px-radius square, glass-input bg, hairline border thickening to white on focus"
  email-pill: "Pill input with chevron button nested on the right edge"
  success-mark: "64px white-gradient circle with a check glyph — the only filled circle"
---

# Login 002 — Cinematic Sign-in

> Fivefold showcase. Pairs with the Login 002 prompt. Use this file to keep every page you build *after* the login flow speaking the same visual language.

## Overview

Login 002 is a **sign-in screen built like the opening shot of a film** — but the copy doesn't whisper, it *declares*. The headline **"Step in. Make the internet prettier."** (sub: *"Sign in to Fivefold."*) turns a routine login into a small manifesto: you're not authenticating, you're joining a mission. A muted background video carries all the warmth and motion, which is the whole reason the UI stays almost silent around that one confident line: thin white type, one bright button, glass you can see the night through.

The governing decision: **the video does the emotional work, the headline does the marketing work, and everything else does almost nothing.** The copy is intentionally bigger than the moment requires — a login rarely gets a mission statement, and that surprise is the hook. Every other choice exists to keep the chrome quiet enough that the footage and that one headline stay the subject. If a new element competes for attention with either, it's wrong.

**Copy is a feature here, not a label.** The headline should always read like a confident brand statement, never a generic "Sign in" / "Welcome back". When adapting this template for another brand, rewrite the headline to *their* mission — keep the structure (bold declarative line + quiet functional sub), not the words. The system extends across the 3-step state machine (email → code → success) without ever breaking the rule: one bright element, one centered column, one moving video, one confident line of type.

**Key Characteristics:**
- True-black canvas (`{colors.canvas}`) with a full-bleed looping video and a 4-layer overlay that protects legibility without flattening the footage.
- A single **dead-center column** — content is centered on both axes, never offset into a side panel. The emptiness around it is the composition.
- Glass surfaces (`{colors.glass-nav}` / `{colors.glass-input}`) are reserved for **floating UI over the video** — nav pill, input fields. Never used on static content.
- Exactly **one bright element**: the white primary button. Everything else is white-on-dark at reduced opacity. There is no second accent color.
- A 3-step state machine (email → code → success) that slides horizontally — the page never reloads, it *transitions*, like scenes.
- A floating glass mini-navbar that morphs `{rounded.pill}` ↔ `{rounded.box}` when the mobile menu opens, so the close animation finishes inside the rounded shell.
- A single italic line per step — the only italic in the system — as the human whisper after the monumental headline.
- One typeface, Inter, weighted 400–700. No display serif. Drama comes from scale and spacing, never from font variety.

## Colors

> **Source pages analyzed:** Login flow (email step, code step, success step), floating mini-nav (desktop + mobile dropdown). The palette is deliberately tiny — black, white, two glass tints, and three steps of gray. There is **no brand hue**; warmth comes from the video, not from a swatch.

### Surface
- **Canvas** (`{colors.canvas}` — #000000): True-black page floor. Sits behind the video as the fallback and fills everything the footage doesn't.
- **Glass Nav** (`{colors.glass-nav}` — #1f1f1f57): Semi-transparent dark for the floating nav pill, applied with `backdrop-blur-sm`. The alpha is intentional — you should faintly see the video moving behind it.
- **Glass Input** (`{colors.glass-input}` — #1f1f1f80): One step more opaque than the nav. Inputs need a firmer edge than nav chrome because the user's eye has to lock onto them.

### Hairlines & Borders
- **Hairline** (`{colors.hairline}` — #333333): 1px borders on glass surfaces. Barely-there — a suggestion of an edge, not a frame.
- **Hairline Soft** (`{colors.hairline-soft}` — #444444): One step brighter, used on the OTP code boxes at rest so the grid reads as a row before any digit lands.
- **Hairline Focus** (`{colors.hairline-focus}` — #666666): The border brightens to this on focus. The only "state color" in the system — focus is signaled by edge brightness, never by a colored ring.

### Text
- **On Dark** (`{colors.on-dark}` — #ffffff): Headlines, primary button text, the active OTP digit.
- **Body** (`{colors.body}` — #d1d5db / gray-300): The italic sub-headlines and secondary copy. Slightly dimmed so headlines stay dominant.
- **Muted** (`{colors.muted}` — #6b7280 / gray-500): Legal footer, the "or" divider label, placeholders. Reads only when looked for.

### Overlays (atmospheric stack)
- **Dim** (`{colors.overlay-dim}` — rgba(0,0,0,0.40)): A flat 40% black laid directly over the video to ground the type.
- **Vignette edge** (`{colors.overlay-vignette-edge}` — rgba(0,0,0,0.85)): The outer stop of a radial gradient from 40% center to 85% edge — pulls focus to the centered column.
- **Top fade** (`{colors.overlay-top-fade}` — rgba(0,0,0,0.70)): A linear top-to-bottom fade across the top third, the only thing keeping the floating nav legible against bright video frames.

## Typography

### Font Family
- **Inter** (`var(--font-inter), system-ui, -apple-system, sans-serif`), weights 400 / 500 / 600 / 700.
- Loaded via `next/font/google` as a CSS variable — no FOIT, no external request after first paint.
- OpenType features: tabular numerals enabled for the OTP row so digits don't shift width as the user types.

The choice is functional before it's aesthetic: **a login is a utility moment — the user is reading an email field, a 6-digit code, a legal line — so legibility wins over personality.** Inter is engineered for exactly this (tall x-height, open apertures, unambiguous numerals — critical for the OTP). A more "cinematic" display face would look richer but cost reading speed at the one moment the user can't afford a misread.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display}` | 60px (mobile 48px) | 500 | 0.95 | −0.03em | Step headlines: "Step Inside" / "Check your inbox" / "Door's open" |
| `{typography.italic-sub}` | 16px | 400 italic | 1.6 | 0 | The one-line sub under each headline — the only italic in the system |
| `{typography.body}` | 16px | 400 | 1.6 | 0 | Input text, nav labels, paragraph copy |
| `{typography.button}` | 14px | 500 | 1.0 | 0 | All button labels (primary, glass, nav CTA) |
| `{typography.otp}` | 24px | 500 | 1.0 | 0 | Single digits inside the 6 OTP boxes |
| nav-link | 14px | 400 | 1.0 | 0 | Mini-nav links (Studio / Stories / Journal) |
| divider-eyebrow | 12px | 400 uppercase | 1.0 | 0.05em | The "or" between Google CTA and email pill |
| `{typography.legal}` | 12px | 400 | 1.6 | 0 | Footer legal, fine print |

### Principles
- Headlines run **medium weight (500), not bold** — at 60px on black, 500 already feels monumental; 700 would shout and break the calm.
- Tight tracking (`-0.03em`) on the display gives the headline a crafted, condensed feel without resorting to a condensed cut.
- Tight leading (0.95) on the display so the headline reads as a single graphic object, not two stacked lines.
- The lone italic sub-headline per step is a deliberate tonal softener — it's the human whisper after the big type and the only italic anywhere.
- Body type stays at 16px, never smaller for "elegance" — the moment the user reads their email address, legibility outranks style.
- Legal copy uses an explicit `<br/>` line break between "Agreement," and "Privacy, and Cookie Notice." — the break is structural, not accidental.

### Note on Font Substitutes
If Inter is unavailable, fall back through `system-ui, -apple-system, sans-serif` in that order — both San Francisco and Segoe UI carry the same tall x-height and open numerals. When substituting, tighten letter-spacing on the display from −0.03em to −0.025em (system fonts already track slightly tighter) and bump line-height from 0.95 to 1.0 so the headline doesn't collide with itself.

## Layout

### Spacing System
- **Base unit:** `{spacing.base}` (4px). All vertical and horizontal rhythm is a multiple of this.
- **Field gap:** `{spacing.field-gap}` (24px) between stacked controls inside the form.
- **Block gap:** `{spacing.block-gap}` (40px) between the headline cluster and the first control.
- **Top offset:** `{spacing.top-offset}` (150px) from viewport top to the start of the form — keeps the headline in the upper-middle of the frame, below the floating nav.
- **Nav inset:** `{spacing.nav-inset}` (24px / `top-6`) from viewport top to the floating nav pill.
- Internal control padding: nav pill `px-5 py-2.5`, primary button `px-6 py-3`, glass button `py-3`, email pill `pl-5 pr-1.5 py-1.5`.

### Grid & Container
- **Outer section:** `max-w-6xl` (1152px), padded `px-6` on mobile and `lg:px-12` on wide desktop.
- **Form column:** `max-w-md` (448px), centered with `mx-auto`. Inner controls (Google CTA, email pill, OTP row, Back/Unlock split) inherit this width.
- **Two-column intent:** the layout reserves a right half on desktop that stays intentionally empty — the negative space is the composition. Do not fill it.
- **Single column, every breakpoint:** even though desktop uses a 2-column flex shell, the form content is one centered column. The right column is empty by design.

### Whitespace Philosophy
The empty space on either side of the centered column is not "leftover" — it is *the design*. The video plays, the headline declares, and everything else gets out of the way. Adding a side panel, a marketing tile, or a testimonial card here would treat negative space as a vacuum to fill, which is precisely the instinct this system rejects. Whitespace is the frame; the form is the painting; the video is the wall behind both.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | No shadow, no border | Static body copy directly on black (headlines, sub-headlines, legal) |
| 1 — Hairline | 1px `{colors.hairline}` border, no shadow | Glass nav pill, email pill, OTP boxes at rest |
| 2 — Backdrop blur | `backdrop-blur-sm` + glass fill + hairline | Floating chrome over the video (nav, inputs, Google CTA) |
| 3 — Soft halo | A blurred white duplicate behind a primary CTA at 0% opacity by default | Reserved for the "Join Now" gradient button — the only place a glow is permitted |

**Shadow philosophy:** there are effectively no traditional drop shadows in the system. Depth is communicated by *transparency over moving footage*, not by light direction. A glass surface reads as "in front" because you can see the video through it, not because it casts a shadow. This is intentional — drop shadows on a true-black canvas read as smudges, not elevation.

**Decorative Depth:**
- The 4-layer overlay stack (dim → vignette → top-fade) is itself a depth system — it pushes the video back and pulls the form forward without any single element having a shadow.
- The radial vignette is the only "spotlight" — it darkens the corners so the centered column reads as the lit subject.
- The success step's white-gradient check circle is the lone exception: a subtle `from-white to-gray-200` vertical gradient that makes the disc read as a real lit object rather than a flat sticker.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Reserved — currently unused in the showcase. Sharp corners would break the soft-cornered language. |
| `{rounded.box}` | 12px | OTP code boxes, the mobile nav dropdown panel, the morphed nav state when the mobile menu is open. |
| `{rounded.pill}` | 9999px | All buttons, the floating nav at rest, the email input pill, the success check circle. The default for any interactive surface. |

### Photography Geometry
- **Background video:** full-bleed, `object-cover`, `absolute inset-0 w-full h-full`. Never margined, never cropped to a box.
- **Aspect ratio:** the video must letterbox gracefully across 9:16 (mobile portrait) through 21:9 (ultrawide). Source footage is shot wide and centered so any crop is safe.
- **Color requirement:** the source must be dark and slow-moving — the overlay math (40% dim + 85% vignette edge + 70% top fade) assumes a low-key, low-motion source. Bright or fast footage will fight the type.
- **Loading strategy:** `autoPlay muted loop playsInline preload="auto"` — start the loop immediately, never block on user interaction. The `muted` is mandatory for autoplay; the `playsInline` is mandatory for iOS.
- **Logo image:** white-on-transparent SVG, `h-7 w-auto`, referenced as a plain `<img>` (not `next/image`) because the wordmark is tiny and doesn't benefit from the optimizer.

## Components

### Top Navigation

**Mini Navbar** (`{component.glass-pill}`) — Floating glass pill, top-center, `fixed top-6 left-1/2 -translate-x-1/2 z-50`. Background `{colors.glass-nav}`, `backdrop-blur-sm`, 1px `{colors.hairline}` border, `{rounded.pill}` at rest. Holds logo (left) + 3 nav links (center, desktop) + "Join Now" CTA (right, desktop) + hamburger (right, mobile). On mobile-menu open, the radius morphs to `{rounded.box}` instantly; on close, a 300ms delay holds the box shape until the dropdown finishes collapsing, then returns to `{rounded.pill}`. **Default:** pill, semi-transparent. **Active (menu open):** box, dropdown extended below. **Focus (any interactive child):** child's own focus ring, not the pill.

**Animated Nav Link** — Two stacked spans inside `overflow-hidden h-5`. Default span renders in `{colors.body}`; on group-hover the default translates `-translate-y-full` while a `{colors.on-dark}` copy rises from below (`translate-y-full → translate-y-0`), both at 300ms `ease-out`. Signals interactivity through motion, never through color change.

### Buttons

**Button Primary** (`{component.button-primary}`) — White fill, black text, `{rounded.pill}`, `{typography.button}`. Used for the email-submit chevron (36×36), "Unlock", and "Enter the Studio". **There is only ever one of these on screen at a time.** Default: `bg-white text-black`. Active: `bg-gray-200`. Focus: `bg-white` with default browser focus ring (no custom ring). Disabled (Unlock before all 6 digits filled): `opacity-40 cursor-not-allowed`.

**Button Glass** (`{component.button-glass}`) — Glass variant used for Google CTA and the "Back" button in the code step. Background `bg-white/5`, 1px `border-white/10`, `backdrop-blur-sm`, `{rounded.pill}`, `{typography.button}`. The Google variant carries a slow shine sweep (a `from-transparent via-white/10 to-transparent` gradient translating `-translate-x-full → translate-x-full` over 1000ms) that crosses the button on hover. Default: glass at rest. Active: `bg-white/10`. Focus: default browser ring.

**Button Gradient (Join Now)** — The single "Join Now" CTA in the nav. White-to-gray vertical gradient (`from-gray-100 to-gray-300`) over black text, `{rounded.pill}`, with a blurred lighter-gradient pseudo-layer behind it (`before:blur-lg before:opacity-0`) that fades in to `opacity-80` on hover — the only "glow" in the system. Default: gradient at rest. Active: glow visible. Focus: default browser ring.

### Inputs & Forms

**Email Pill** (`{component.email-pill}`) — A `{rounded.pill}` glass-input field with the submit chevron button nested inside on the right (`{component.button-primary}` at 36×36). Container: `bg-[#1f1f1f80] border border-[#333] focus-within:border-[#666] rounded-full pl-5 pr-1.5 py-1.5 transition-colors`. Inner input: `bg-transparent text-sm text-white placeholder-gray-500 outline-none py-2`. **Default:** `{colors.hairline}` border. **Focus-within:** border brightens to `{colors.hairline-focus}` over 200ms. The chevron button nudges +2px to the right on hover (a `translateX` micro-move, not a color change).

**OTP Box** (`{component.otp-box}`) — Six single-character inputs, `w-12 h-14` (mobile `w-10 h-12`), `{rounded.box}`, `{colors.glass-input}` background, 1px `{colors.hairline-soft}` border, `text-center {typography.otp}`. Auto-advance focus on input, backspace-to-previous, and a literal `|` separator in `{colors.muted}` between the 3rd and 4th box. Auto-fires `setStep('success')` 1200ms after the 6th digit lands. **Default:** soft hairline. **Focus:** border `{colors.hairline-focus}`, 150ms transition. **Filled:** the digit renders in `{colors.on-dark}`; placeholder "0" renders in `{colors.muted}` slightly darker (`placeholder-gray-600`).

### Cards & Containers

**Glass Form Container** — There is no traditional card. The form is a vertical stack of controls sitting directly on the overlay-darkened video, centered within `max-w-md`. The absence of a card surface is the point — a glass card here would compete with the inputs.

**Mobile Nav Dropdown** — A `{rounded.box}` glass panel that drops from below the nav pill when the hamburger is tapped. Background `bg-[#1f1f1f]` (more opaque than the pill itself — the dropdown needs to be readable against any frame), 1px `{colors.hairline}` border, `transition-[max-height] duration-500 ease-in-out overflow-hidden`. Default: `max-h-0` (collapsed, border hidden). Active (open): `max-h-[1000px]` (expanded). Focus: each link inside carries its own focus.

**Success Mark** (`{component.success-mark}`) — A 64×64 `{rounded.pill}` disc with a white-to-gray vertical gradient (`from-white to-gray-200`), centered check glyph in `{colors.canvas}`. The only filled circle in the system — its roundness is what makes it read as "done / resolved" against an interface otherwise built from pills and 12px boxes.

### Footer

**Legal Footnote** — `{typography.legal}` in `{colors.muted}`, `max-w-sm`, mounted at the bottom of the email and code steps (not the success step). Carries an explicit `<br/>` between "Agreement," and "Privacy, and Cookie Notice." — the break is part of the design, not a wrap accident.

## Do's and Don'ts

### Do
- **Center all content (nav exempt).** Single column, `text-center`, `mx-auto` — the symmetry against the video is the design.
- Write the headline like a confident brand statement ("Step in. Make the internet prettier."), not a generic "Sign in". The oversized ambition of the copy is the hook.
- Let the video carry the mood. Keep added UI quiet enough that the footage + headline stay the subject.
- Keep exactly one `{component.button-primary}` on screen. Add anything brighter and the hierarchy collapses.
- Reserve glass surfaces (`{colors.glass-nav}` / `{colors.glass-input}`) for floating UI over the video. Static content sits directly on `{colors.canvas}`.
- Signal focus with border brightness (`{colors.hairline}` → `{colors.hairline-focus}`), never a colored ring.
- Keep headlines at weight 500. At 60px on `{colors.canvas}` it's already monumental.
- Enable tabular numerals on the OTP row so digits don't shift width as the user types.
- Use the 4-layer overlay stack (dim + vignette + top-fade) on every screen — it is the legibility floor, not an effect.
- Inherit `{rounded.pill}` for actions and `{rounded.box}` for fields when adding new components.

### Don't
- **Don't left-align or offset any content.** Everything but the nav is dead-center — a flush-left block is the cardinal sin.
- Don't water the headline down to "Welcome back" / "Sign in to continue". Generic login copy throws away the one marketing moment this screen has.
- Don't introduce a brand or accent color. The system is `{colors.canvas}` + `{colors.on-dark}` + grays; warmth comes from the video.
- Don't bold the headlines to 700 — it shouts and breaks the cinematic calm.
- Don't put glass on static content. Glass means "floating over footage"; using it elsewhere dilutes the signal.
- Don't add scroll reveals or parallax. The video is the only perpetual motion; layering more reads busy.
- Don't replace the video with a static gradient. The motion *is* the atmosphere — a still background kills the whole concept.
- Don't fill the empty right column on desktop. The negative space is the composition.
- Don't collapse the `<br/>` in the legal footnote onto one line — the break is intentional.
- Don't add a second italic anywhere. The lone italic sub-headline per step is the entire italic budget.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤419px | Headline 48px. OTP boxes shrink to `w-10 h-12 text-xl`. Nav hamburger only. Form `px-6`. |
| Phone | 420–640px | Same as small phone. Email pill stays full-width within `max-w-md`. |
| Large phone | 641–735px | Same layout. Sub-headline still single line; no wrapping. |
| Tablet portrait | 736–833px | Crossover into desktop nav: center links visible (`md:` breakpoint at 768px). Headline 60px engages above 768px. |
| Tablet landscape | 834–1023px | 2-column flex shell activates (`lg:flex-row`); form holds left half, right half empty. Top offset 150px. |
| Small desktop | 1024–1068px | `px-12` outer padding engages. No further structural change. |
| Desktop | 1069–1440px | Full layout. Right column remains intentionally empty. |
| Wide desktop | ≥1441px | Container caps at `max-w-6xl` (1152px). Side margins grow; layout stops widening. |

### Touch Targets
- Minimum 36×36px (chevron submit button is the floor; meets WCAG 2.5.5 with the input pill's surrounding padding counted).
- Primary buttons: 44–48px tall (`py-3` at 14px font ≈ 44px). Comfortable for thumbs.
- OTP boxes: `w-12 h-14` desktop / `w-10 h-12` mobile — wide enough for finger-targeting individual digits.
- Nav hamburger: 36×36 `w-9 h-9` with `rounded-full hover:bg-white/5` background on touch.

### Collapsing Strategy
- **Nav links:** desktop links + "Join Now" hide below 768px; replaced by a single hamburger that opens a glass dropdown carrying the same items.
- **Headline:** scales from `text-6xl` (60px) to `text-5xl` (48px) below 768px. Letter-spacing and line-height are preserved.
- **Form column:** the desktop 2-column shell collapses to single-column on mobile; the empty right half is removed rather than wrapped underneath.
- **OTP row:** boxes shrink in both width and font-size, but the row stays horizontal with `justify-center`. Never wraps to two rows.
- **Back/Unlock split:** holds the 30/70 ratio at every breakpoint; doesn't restack to vertical.

### Image Behavior
- The background video carries `preload="auto"` so the loop starts on first paint; no `srcset` because there's only one source. A poster frame is optional but recommended for slow connections.
- The video stays full-bleed at every width and never collapses to a margined container.
- The logo SVG is a static asset; no lazy-loading (it's in the initial paint).
- If the buyer supplies a heavier source, downscale to 1920×1080 H.264 with a target bitrate of ~2 Mbps — anything larger fights the page-load budget the rest of the system depends on.

## Iteration Guide

1. **New page in this system?** Lead with the dark video atmosphere, then a glass surface, then minimal white text. Never start from a bright color.
2. **When in doubt about emphasis,** add whitespace before adding type size. The system earns drama from negative space, not from scale alone.
3. **Any new control defaults** to `{rounded.pill}` (actions) or `{rounded.box}` (fields). Reserve sharp `{rounded.none}` for nothing here — this system is soft-cornered, unlike a brutalist sibling.
4. **Keep the "one bright element" rule** across every new screen — if a page needs two primary actions, rethink the page.
5. **Never document hover states as canonical** — default + focus/active only. Hover is a desktop affordance, not a design contract.
6. **One italic per step** is the entire italic budget. A new screen gets one italic sub-headline or none — never two.
7. **Inherit the 4-layer overlay** on every new video-backed surface. Dim + vignette + top-fade is the legibility floor; removing any layer breaks the type contrast math.

## Known Gaps

- **Error / invalid states** (wrong code, expired link, network failure) are not specified — only the happy path. A real auth flow needs a glass error toast in `{colors.body}` text; treat that as the next thing to design.
- **Loading / pending button states** beyond `opacity-40 cursor-not-allowed` are not documented. A spinner inside the white pill is implied but not specified.
- **The video source** is showcase-specific; a buyer supplying their own footage must keep it dark and slow-moving or the overlay math (`{colors.overlay-dim}` + `{colors.overlay-vignette-edge}`) won't protect legibility.
- **Light mode** is not surfaced in analyzed pages — the system is dark-only by design, and inverting it would break the "floating over video" metaphor.
- **Reduced-motion** behavior is implied (pause the video, disable step slide) but not enforced in the prompt's CSS.
- **Cards, modals, and data tables** are *not* present in the showcase — when you add them, inherit the glass-over-video rule and the one-bright-element rule rather than inventing a new surface language.
