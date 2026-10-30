---
version: "1"
name: "OCODE — Dark-Grid Cinematic SaaS Hero"
description: "A single-screen hero landing for OCODE LABS, a production-grade SaaS studio. Charcoal canvas (#141414), one neon-green accent (#04E605), Sora across all weights, and an in-house interactive square canvas grid that lights up under the cursor with a 6-cell fading trail. Content anchors bottom-left and fades up in a tight 0.2 → 0.85s blur-stagger. No purple, no indigo, no warm reds — the grid IS the background, the green IS the accent, that's the whole identity."
colors:
  hero-bg: "#141414"
  background: "hsl(0 0% 10%)"
  foreground: "#F5F5F5"
  primary: "#04E605"
  hover-fill: "#2BD64A"
  muted-foreground: "#999999"
  border: "#333333"
  nav-button: "#2E2E2E"
typography:
  display:
    fontFamily: "Sora"
    weights: "300 / 400 / 500 / 600 / 700"
    role: "everything — headline 700, body 300/400, nav 500/600. One family, full ramp."
spacing:
  base: "Tailwind v3 default (4px)"
  hero-headline: "clamp(3.5rem, 10vw, 8rem) with leading 1.02 and tracking -0.05em"
  navbar: "px-8 lg:px-16 py-5"
  content-block: "px-6 md:px-10 pb-10 pt-32, max-w-[92%] sm:max-w-lg lg:max-w-4xl"
rounded:
  base: "0.5rem (--radius)"
  buttons: "rounded-sm (the hero CTAs use the smaller calc(--radius - 4px))"
  nav-cta: "rounded-lg (--radius)"
components:
  interactive-shape-grid: "In-house canvas grid (Layer 4b) — tessellates squares/circles/hexagons/triangles, scrolls diagonally at speed 0.1, lights cell under cursor in #2BD64A, trails 6 fading cells behind. Zero deps beyond React."
  hero-cta-pair: "Native <button> elements (not shadcn) with pointer-events-auto so the canvas hover survives underneath the copy. Primary green fill + secondary white fill, both rounded-sm."
  shadcn-button: "shadcn/ui Button with 9 variants including custom navCta / hero / heroOutline — used in the navbar only."
  pointer-events-handoff: "Content block carries pointer-events-none; only the CTAs re-enable, so mousemove falls through to the canvas everywhere else."
  navbar: "Fixed transparent header. Logo left, uppercase tracking-widest links center, navCta right. Hides links + CTA below md, no hamburger in v1."
---

# OCODE — Dark-Grid Cinematic SaaS Hero

> Fivefold showcase. Pairs with the OCODE prompt. Use this file to keep OCODE LABS' cinematic discipline when extending the page — it should always feel like a control room at 2am, never a generic SaaS deck.

## Overview

OCODE is **a single-screen hero landing for a production-grade SaaS studio that ships AI platforms, dashboards and APIs in weeks.** Charcoal canvas, one neon-green accent, Sora across the full weight ramp, content anchored bottom-left, and a custom interactive canvas grid that scrolls diagonally and lights up under the cursor. There is no purple, no indigo, no warm reds — the entire generic-SaaS palette has been refused. What replaces it: one ink-on-ink stage with a single radioactive green and a grid that responds to you.

The governing decision: **the grid IS the brand.** Most SaaS heroes lean on a stock screenshot, a 3D blob, or a video loop. OCODE refuses every one of them. The background is an in-house `InteractiveShapeGrid` — a canvas that tessellates 80px squares, scrolls them diagonally at speed 0.1, and paints the cell under your cursor in `#2BD64A` with a six-cell fading trail. The grid is hairline (`rgba(255,255,255,0.08)`) so it reads as architecture, not pattern. Three pointer-events-none overlays (flat black veil, vertical hero-bg gradient, left-edge directional gradient) press the copy into legibility without erasing the grid underneath. The content stays bottom-left, the headline goes uppercase at `clamp(3.5rem, 10vw, 8rem)` with `LABS` highlighted in green, and the whole stack fades up on mount with a `cubic-bezier(0.16, 1, 0.3, 1)` blur-stagger. The bet: a single radioactive accent + a live grid says "we ship software correctly" louder than any feature list.

The system extends by subtraction. New sections inherit the same 8–20% lightness band, the same Sora family, the same fade-up keyframe, and the same one-accent rule. The `InteractiveShapeGrid` can be re-purposed as a section divider at smaller `squareSize` values, or stilled (with `speed={0}`) behind data panels — but the rule "one canvas per page" holds. Cards and panels added later use `--background` (`hsl(0 0% 10%)`) so they sit a two-percent step above the hero stage, hairlined by `--border` (`#333333`), never shadowed.

**Key Characteristics:**
- **Charcoal canvas** (`{colors.hero-bg}` — `#141414`) as the global background. Slightly cooler `--background` at `hsl(0 0% 10%)` sits under panels. Nothing on the page leaves this 8–10% lightness band except the type and the green.
- **One accent, one value** — brand green `{colors.primary}` (`hsl(119 99% 46%)` ≈ `#04E605`). Lives on the `LABS` glyph, the primary CTA, the focus ring, and the canvas hover (slightly darker `{colors.hover-fill}` so it reads green-on-green-on-black). No second accent, no gradient text, no glow.
- **Sora across every weight** — 300 / 400 / 500 / 600 / 700. Headline 700 uppercase, subhead + description 300, nav labels 500. One family carries the entire page.
- **Interactive canvas grid** is the only background asset — diagonal scroll, 80px squares, hairline borders, 6-cell fading trail. Hand-built React + `requestAnimationFrame`, no GSAP, no Lottie.
- **Bottom-left anchored content** — `flex items-end` with `pt-32` and `pb-10`. The page reads like a film title plate, not a centered marketing card.
- **Tight blur-stagger entry** — every element fades in on a fixed schedule (`0.2 / 0.4 / 0.55 / 0.7 / 0.85s`) with `opacity 0→1`, `translateY 20→0`, `blur 4px→0`.
- **Pointer-events handoff** — the content block carries `pointer-events-none` so mousemove drops through to the canvas; only the two CTAs re-enable.
- **Zero icons in v1** — no lucide, no phosphor, no inline SVG glyphs. Type, color and motion carry the entire identity.

## Colors

> **Source pages analyzed:** OCODE hero landing (`Index.tsx` → `Navbar.tsx` + `HeroSection.tsx`) — single-screen viewport, no second section in v1. Tokens transcribed verbatim from `src/index.css :root`.

Eight tokens plus one accent (counted twice as `primary` and `accent` because they intentionally share a value). The smallness is the point — the page lives in an 8–20% lightness band and breaks out only for the green.

### Stage & Surface
- **Hero background** `{colors.hero-bg}` — `#141414`, `hsl(0 0% 8%)`. Global canvas, applied on `body` via `@apply bg-hero-bg`. Slightly warmer than `--background` so the page reads as one continuous stage.
- **Background** `{colors.background}` — `hsl(0 0% 10%)` ≈ `#1A1A1A`. The two-percent-lighter surface tone for cards and panels if added later. The hero itself uses `--hero-bg`.
- **Nav-button surface** `{colors.nav-button}` — `#2E2E2E`, `hsl(0 0% 18%)`. The `Get Quote` CTA background — a step above the page so it reads as an interactive surface without resorting to brand green.

### Brand & Accent
- **Primary** `{colors.primary}` — `#04E605`, `hsl(119 99% 46%)`. The brand neon green. Lives on the `LABS` glyph, the `Book a Call` CTA fill, the focus ring (`--ring`), and the canvas hover. **Do not round** — it is `hsl(119 99% 46%)`, not `#00ff00`, not `#22c55e`.
- **Hover-fill** `{colors.hover-fill}` — `#2BD64A`, slightly desaturated green used inside the canvas cell fill so it sits one step behind the brand glyph in the visual hierarchy.

### Text
- **Foreground** `{colors.foreground}` — `#F5F5F5`, `hsl(0 0% 96%)`. All primary type. Slightly off-white so the page never feels printer-bright.
- **Muted foreground** `{colors.muted-foreground}` — `#999999`, `hsl(0 0% 60%)`. Description, nav links, trust line. Long-form copy without competing with the headline.
- **Primary foreground** — `hsl(0 0% 4%)` ≈ `#0A0A0A`. The near-black sitting on top of brand green for AAA contrast on the primary CTA.

### Hairlines & Borders
- **Border / Input** `{colors.border}` — `#333333`, `hsl(0 0% 20%)`. Universal hairline applied via `* { @apply border-border; }` so every added panel inherits the divider tone for free.
- **Canvas grid stroke** — `rgba(255, 255, 255, 0.08)`. Hand-set on the `ShapeGrid` `borderColor` prop; the grid reads as architecture, not pattern.

### Constraint
Verbatim from prompt: **no purple, indigo, blue, orange, or warm reds anywhere — the only accent is the brand neon green.** Contrast comes from the 8–20% black ramp, the off-white foreground, and one saturated hit of `#04E605`. `--destructive` (`0 84% 60%`) exists in the token set for completeness but is **not** used in v1.

## Typography

### Font Family
- **Sora** — full CSS stack `"Sora", sans-serif`. Loaded via Google Fonts with `display=swap` and double `preconnect` in `index.html`. Mapped to Tailwind as `fontFamily.sora` and applied globally on `body` (`@apply font-sora antialiased`).
- **OpenType features:** none enabled explicitly — Sora's default ligatures and proportional figures carry. Tabular figures are deliberately not requested in v1.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| Hero heading | `clamp(3.5rem, 10vw, 8rem)` | 700 | 1.02 | -0.05em | `OCODE LABS` headline, uppercase. `LABS` flips to `text-primary`. |
| Hero subheading | `clamp(1.375rem, 3vw, 2.5rem)` | 300 (light) | 1.4 default | 0 | "We build software correctly." |
| Hero description | `clamp(1.0625rem, 1.8vw, 1.5rem)` | 300 (light) | 1.4 default | 0 | The single-paragraph SaaS pitch in `text-muted-foreground`. |
| CTA label (hero) | `text-base md:text-lg` (1rem → 1.125rem) | 700 (`font-bold` on wrapper) | 1.0 | 0 | `Book a Call` / `Our Work` native buttons. |
| Trust line | `text-sm md:text-base` (0.875rem → 1rem) | 300 | 1.4 | 0 | "Trusted software partner. Columbus, OH. 40+ products shipped." |
| Nav logo | `text-xl` (1.25rem) | 600 | 1.0 | tracking-tight (-0.025em) | `OCODE` wordmark, left of navbar. |
| Nav link | `text-sm` (0.875rem) | 500 (via Tailwind default) | 1.0 | tracking-widest (0.1em), uppercase | `SERVICES / ABOUT US / PROJECTS / TEAM / CONTACTS`. |
| Nav CTA | `text-xs` (0.75rem) | 500 (`font-medium` from shadcn base) | 1.0 | tracking-widest (0.1em), uppercase | `GET QUOTE` button label. |

### Principles
- **Use `clamp()` for every hero size — never fixed `text-Nxl`.** The headline, sub, and description are all fluid by viewport. Fixed sizes ship only below the hero.
- **Negative letter-spacing only at display size** (`-0.05em` on the headline). Sub / description / body all sit at 0 tracking — no sweeping in.
- **Uppercase is reserved for the headline, nav links and nav CTA.** Body copy stays sentence case to keep long-form readable.
- **Weight 300 is the body weight, not 400.** Long-form description and trust line both use light. 400 is reserved for future utility copy.
- **Weight 600 is the wordmark weight, 700 is the headline weight.** Never use 700 inline in body — keep it for display moments.
- **The `LABS` span is purely visual color.** It is the same `<h1>` node — screen readers read "OCODE LABS" as one phrase, not two.
- **Tracking-widest (`0.1em`) appears only with uppercase nav labels.** Anywhere else it reads as logo, not nav.

### Note on Font Substitutes
If Sora is unavailable, clamp to the nearest geometric sans with a similar `o`-counter — **Inter** at 500/600/700 is the safest fallback. When substituting, tighten the headline tracking from `-0.05em` to `-0.04em` (Inter's natural width compensates) and bump leading from 1.02 to 1.04 so the descenders breathe. **Never synthesize weights** — if a weight isn't shipped, drop to the nearest available value.

## Layout

### Spacing System
- **Base unit:** Tailwind v3 default — 4px. Every token is a multiple (`1 = 4px`, `2 = 8px`, `3 = 12px`, `4 = 16px`, `5 = 20px`, `6 = 24px`, `8 = 32px`, `10 = 40px`, `16 = 64px`, `32 = 128px`).
- **Navbar padding:** `px-8 lg:px-16 py-5` → 32px → 64px horizontal, 20px vertical.
- **Hero content-block padding:** `px-6 md:px-10 pb-10 md:pb-10 pt-32` → 24px → 40px horizontal, 40px bottom, 128px top (clears the fixed navbar).
- **Inter-element rhythm (hero):** heading → sub `mb-3 md:mb-5` (12 → 20px); sub → description `mb-4 md:mb-7` (16 → 28px); description → CTA row `mb-5 md:mb-9` (20 → 36px); CTA row → trust line `mt-5 md:mt-7` (20 → 28px).
- **CTA padding:** `px-8 py-4 md:px-10 md:py-5` (32×16 → 40×20px). `gap-3` (12px) between the two CTAs.
- **Navbar nav-link gap:** `gap-8` (32px). Nav CTA padding: `px-6` (24px), inheriting `size="lg"` (h-11) from shadcn.

### Grid & Container
- **No multi-column grid in v1.** The hero is a single anchored block, not a grid.
- **Hero content max-width:** `max-w-[92%] sm:max-w-lg lg:max-w-4xl` (92vw on mobile → 32rem at ≥640px → 56rem at ≥1024px). This is the only width constraint on the page.
- **Section height:** `min-h-screen` on the hero `<section>`. No second section in v1.
- **Z stack inside hero:** canvas `z-0` → 3 overlays `z-[1]` → content `z-10` → navbar `z-50`. No other z values exist.

### Whitespace Philosophy
Whitespace on OCODE is **negative grid** — the empty top-right two-thirds of the viewport is not blank, it is the canvas grid breathing. The decision to anchor copy bottom-left treats the upper canvas as the page's primary subject. This is why the content block carries `pointer-events-none`: the visitor's mouse is invited up into the empty space where the grid lives, and the trail blooms there. The whitespace is interactive, not passive.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | No shadow, no border | The hero stage itself; the canvas; the headline + body type. |
| 1 — Hairline | 1px `--border` (`#333333`) | Any panel added below the hero; applied universally via `* { @apply border-border; }`. |
| 2 — Surface lift | `--nav-button` (`#2E2E2E`) fill | The `Get Quote` CTA — sits two steps above the page without shadow. |
| 3 — Directional veil | 3 stacked `pointer-events-none` gradients at `z-[1]` | Pressing the copy into legibility above the canvas (flat `bg-black/30`, vertical `from-hero-bg`, horizontal `from-hero-bg/70`). |

**Shadow philosophy:** OCODE ships **zero box-shadows**. Depth is expressed through (a) the 8–20% lightness ramp on flat fills, (b) hairline borders, and (c) the directional gradients darkening the corners of the canvas. A drop-shadow would read as glass UI and contradict the "control room" tone. If a future component needs separation, reach for hairline before shadow, surface step before hairline, and stop there.

**Decorative Depth:**
- The canvas grid scrolling diagonally at `speed 0.1` is the page's only continuous motion. It creates parallax-without-parallax.
- The 6-cell hover trail reads as a vector through the grid — depth via direction, not distance.
- The triple-overlay vignette darkens the bottom-left corner where the copy sits. The headline appears to rise out of black, not float on top of it.
- The blur-on-entry (`blur(4px) → blur(0)` over 0.7s) is the only filter used anywhere on the page.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `--radius` (base) | `0.5rem` (8px) | Root scale anchor. |
| `rounded-lg` | `var(--radius)` → 8px | `Get Quote` nav CTA. |
| `rounded-md` | `calc(--radius - 2px)` → 6px | shadcn `Button` default (not used in hero, reserved for future). |
| `rounded-sm` | `calc(--radius - 4px)` → 4px | Both hero CTAs (`Book a Call`, `Our Work`). |
| `rounded-none` | 0 | The canvas itself; every overlay div; the `<section>`. |
| `rounded-[7px]` | 7px | Favicon rounded square (`<rect rx="7">` in `favicon.svg`). |

### Photography Geometry
- **No photography in v1.** No hero photo, no product screenshot, no 3D blob, no video loop. The interactive canvas plus the type stack is the entire visual stage.
- The page deliberately refuses the standard SaaS hero playbook (dashboard mockup, gradient mesh, abstract render). The grid is the proof of capability — hand-built React, hand-tuned animation, responding to the visitor in real time.
- If photography is added later, restrict it to a single full-bleed image as a section background with a `from-hero-bg/70` overlay to match the canvas treatment. **Never overlap photography with the canvas.**
- Image radius behavior: any future imagery sits flush — `rounded-none` — unless framed inside a panel (then `rounded-lg`).
- Loading strategy: `loading="lazy"` + `decoding="async"` on every `<img>` below the fold. The hero itself ships zero `<img>` tags.

## Components

### Top Navigation

**Navbar** `{component.navbar}` — fixed transparent header at `top-0 left-0 right-0`, `z-50`, `flex items-center justify-between`, `px-8 lg:px-16 py-5`. **Background:** fully transparent — the grid shows through. **Logo (left):** `<a>` with `text-foreground text-xl font-semibold tracking-tight` containing `OCODE`. **Nav links (center, desktop only):** `<nav className="hidden md:flex items-center gap-8">` — five anchors (`Services / About Us / Projects / Team / Contacts`), each `text-sm text-muted-foreground transition-colors uppercase tracking-widest`. **Default state:** `text-muted-foreground`. **Focus state:** `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2` (inherited from base reset). **CTA (right):** the `navCta` button variant. Below `md` (768px), nav links and CTA hide via `hidden md:flex` / `hidden md:inline-flex`. **No hamburger menu in v1** — only the logo stays.

### Buttons

**Hero Primary CTA** `{component.button-primary}` — native `<button>` (not shadcn). Classes: `pointer-events-auto bg-primary text-primary-foreground px-8 py-4 md:px-10 md:py-5 text-base md:text-lg rounded-sm cursor-pointer transition-all`. **Default state:** brand green `#04E605` fill with near-black `#0A0A0A` label, 4px radius. **Active state:** `active:scale-[0.97]`. **Focus state:** inherits browser default ring on native button — for parity, add `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background` if surfaced beyond hero.

**Hero Secondary CTA** `{component.button-secondary}` — native `<button>`. Classes: `pointer-events-auto bg-white text-background px-8 py-4 md:px-10 md:py-5 text-base md:text-lg rounded-sm cursor-pointer transition-all`. **Default state:** pure white `#FFFFFF` fill with `--background` (`#1A1A1A`) label. **Active state:** `active:scale-[0.97]`. **Focus state:** browser default; same upgrade path as primary if reused.

**Nav CTA** `{component.button-navCta}` — shadcn `Button variant="navCta" size="lg"` + extras `hidden md:inline-flex rounded-lg uppercase text-xs tracking-widest px-6`. **Default state:** `bg-nav-button` (`#2E2E2E`) with `text-foreground` (`#F5F5F5`), 8px radius, label `GET QUOTE`. **Active state:** `active:scale-[0.97]`. **Focus state:** `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2` from the shadcn base — the ring is `--ring` (brand green).

**shadcn Button (default variant)** `{component.button-default}` — reserved escape hatch. `class-variance-authority` + `@radix-ui/react-slot`. Nine variants total: `default / destructive / outline / secondary / ghost / link / navCta / hero / heroOutline`. Only `navCta` is consumed in v1; `hero` and `heroOutline` exist for parity but the hero deliberately uses native `<button>` for the pointer-events handoff.

### Cards & Containers

**Hero content block** `{component.card-hero-content}` — the bottom-left anchored copy stack. `<div className="relative z-10 pointer-events-none w-full max-w-[92%] sm:max-w-lg lg:max-w-4xl px-6 md:px-10 pb-10 md:pb-10 pt-32">`. **Default state:** transparent fill, no border, no radius, `pointer-events-none` so the canvas hover survives underneath. **Focus state:** not focusable — children handle focus individually.

**Interactive Shape Grid** `{component.shape-grid}` — the signature background canvas. `<ShapeGrid speed={0.1} squareSize={80} direction="diagonal" borderColor="rgba(255,255,255,0.08)" hoverFillColor="#2bd64a" shape="square" hoverTrailAmount={6} />`. **Default state:** continuous diagonal scroll at speed 0.1 via `requestAnimationFrame`. **Active state:** the cell under the cursor + 6-cell trail fill in `#2BD64A` with alpha interpolated per frame (`opacity + (target - opacity) * 0.15`). **Focus state:** the canvas is non-interactive for keyboard — focus passes through to the content block. Supports `square / circle / hexagon / triangle` variants; v1 ships `square`.

**Overlay legibility stack** `{component.overlay-veil}` — three pointer-events-none `<div>`s at `z-[1]`: (1) `bg-black/30` flat veil, (2) `bg-gradient-to-t from-hero-bg via-hero-bg/30 to-transparent`, (3) `bg-gradient-to-r from-hero-bg/70 via-transparent to-transparent`. **Default state:** continuous compositing against the canvas. Stateless — no active or focus states.

### Inputs & Forms

**Input (token only, not consumed in v1)** `{component.input}` — `--input` is bound to `--border` (`hsl(0 0% 20%)`). Future inputs should ship: 1px solid `--input` border, `bg-transparent` fill, `text-foreground` value, `placeholder:text-muted-foreground`, `rounded-md` (6px), `h-10 px-3` (40×12px), Sora 400. **Default state:** transparent fill, hairline border. **Focus state:** `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background` — the ring is the brand green. **Active state:** N/A for inputs.

### Footer

**Trust line (page-foot stand-in)** `{component.trust-line}` — single `<p>` at the bottom of the hero content block. Classes: `opacity-0 animate-fade-up text-muted-foreground/60 text-sm md:text-base font-light mt-5 md:mt-7` with `style={{ animationDelay: "0.85s" }}`. **Default state:** `--muted-foreground` at 60% opacity, light weight, 28px top margin at `md`. There is no full footer component in v1 — the trust line is the page-foot stand-in.

## Do's and Don'ts

### Do
- **Keep the page inside the 8–20% lightness band** — `{colors.hero-bg}`, `{colors.background}`, `{colors.nav-button}`, `{colors.border}` and `{colors.foreground}` carry every fill.
- **Use `{colors.primary}` exactly once per visual moment.** The `LABS` glyph, the primary CTA, the focus ring, and the canvas hover — that's the budget.
- **Set the canvas hover fill to `{colors.hover-fill}` (`#2BD64A`)**, not `--primary`. The slight desat keeps the brand glyph one step louder.
- **Apply `pointer-events-none` to any decorative overlay** so mouse drives the canvas underneath; re-enable only on interactive elements.
- **Reserve `clamp()` for hero type only.** Fixed `text-Nxl` is fine below the fold.
- **Keep the stagger schedule exact:** `0.2 / 0.4 / 0.55 / 0.7 / 0.85s`. The rhythm is part of the brand.
- **Use the `animate-fade-up` keyframe everywhere on first paint** — blur + translate + opacity in one move.
- **Hairline-only on dividers** — never use box-shadow, never use a 2px border.
- **Use uppercase + `tracking-widest` only for nav labels and the headline.** Body stays sentence case.
- **Lazy-load any future imagery below the fold** with `loading="lazy"` and `decoding="async"`.

### Don't
- **Don't round the brand green** — it is `hsl(119 99% 46%)`, not `#00ff00`, not `#22c55e`.
- **Don't add a second accent color.** No purple, no indigo, no blue, no orange, no warm reds.
- **Don't replace the native hero `<button>` with the shadcn `<Button>`** — the native element is intentional for the `pointer-events-auto` handoff.
- **Don't ship a box-shadow.** Depth comes from lightness ramps and hairlines.
- **Don't swap the `InteractiveShapeGrid` for an external grid library.** It is in-house, hand-tuned, and the source must stay verbatim.
- **Don't add a hamburger menu in v1.** Below `md`, nav links and CTA hide; only the logo stays.
- **Don't skip the stagger delays or drop the blur from the keyframe** — the entry is the brand signature.
- **Don't import lucide / phosphor / heroicons.** v1 ships zero icons.
- **Don't center the headline.** It belongs bottom-left, always.
- **Don't run more than one canvas instance per page.** Stilling it (`speed={0}`) is allowed; duplicating it isn't.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤419px | Headline clamps at `3.5rem` floor. Content `max-w-[92%]`, `px-6`. Nav links + CTA hidden. CTAs wrap (`flex-wrap`). |
| Phone | 420-640px | Same as small phone. Headline grows toward `10vw`. Trust line at `text-sm`. |
| Large phone | 641-735px | Still below `sm:` (640px) only for the lower end; ≥640 hits `sm:max-w-lg` — content block snaps to 32rem. |
| Tablet portrait | 736-833px | Below `md:` (768px) — nav links + CTA still hidden. Padding still `px-6`. |
| Tablet landscape | 834-1023px | Crosses `md:` (768px): nav links and `Get Quote` appear; hero padding becomes `px-10`, button `px-10 py-5 text-lg`, description spacing `mb-9`. |
| Small desktop | 1024-1068px | Crosses `lg:` (1024px): content `max-w-4xl`, navbar `px-16`. Headline near max. |
| Desktop | 1069-1440px | Full layout. Headline approaches `8rem` cap. Canvas square count grows with viewport. |
| Wide desktop | ≥1441px | Headline pins at `8rem`. Canvas adds columns/rows automatically (`numSquaresX / numSquaresY` recalc on resize). |

### Touch Targets
- **Minimum touch target:** 44×44px (Apple HIG). Hero CTAs at base resolve to `px-8 py-4 text-base` → ~56×56px label box (44px text + 16px vertical padding doubled) — well above floor.
- **Nav CTA at `size="lg"`:** `h-11` (44px) tall — exactly at floor; that's intentional, the navbar reads as compact.
- **Nav links:** `text-sm` with `py-5` from the parent — the parent padding gives each link a ~52px tap height even without per-link padding.

### Collapsing Strategy
- **Nav links + CTA:** hide below `md` (`hidden md:flex`, `hidden md:inline-flex`). No hamburger replacement in v1.
- **Hero headline:** stays `flex items-end`; the `clamp()` floor at `3.5rem` keeps it legible. Never wraps to multiple lines on mobile due to its short text.
- **CTA row:** `flex flex-wrap gap-3` — if both buttons can't fit one row, the second drops underneath without rebalancing widths.
- **Description:** stays a single `<p>`; the `clamp()` minimum (1.0625rem ≈ 17px) and `max-w-[92%]` give it a natural 4–5 line wrap on phones.
- **Trust line:** stays inline at the foot of the content block. Padding `mt-5 md:mt-7` is the only adjustment.
- **Canvas:** `squareSize={80}` is fixed across breakpoints — the grid count adapts, not the cell size. Small viewports show fewer columns but the same cell scale.

### Image Behavior
- **No `<img>` in v1.** The canvas + type carry everything.
- If imagery is added later: `srcset` with 1x / 2x / 3x density variants, fixed aspect ratio set via CSS (`aspect-ratio: 16/9` for hero, `aspect-ratio: 4/5` for cards), `loading="lazy" decoding="async"` on everything below the fold, `fetchpriority="high"` only on a single above-the-fold hero asset (never more than one).
- The favicon (`/public/favicon.svg`) is a 32×32 SVG — charcoal `#141414` square with `rx="7"`, brand-green `#04E605` ring glyph. Inlined as `type="image/svg+xml"`.

## Iteration Guide
1. **One canvas per page.** Stilling the grid (`speed={0}`) or shrinking `squareSize` is allowed; running a second `<ShapeGrid />` is not.
2. **Variants belong inside the component, not the call site.** New CTA tones add a shadcn `Button` variant (see existing `navCta / hero / heroOutline`); never inline a one-off `bg-*` on a `<button>` at the page level.
3. **Reference tokens, never raw hex.** Use `{colors.tokenName}` in this file and `bg-primary / text-foreground / border-border` in code. The hex appendix in Layer 3 of the prompt is reference, not source.
4. **Never document hover.** Default + active + focus are the three documented states. Hover is a hint, not a contract.
5. **Display stays Sora 700 uppercase.** Body stays Sora 300. New weights (400 / 500 / 600) are reserved for the navbar and future utility surfaces only.
6. **Shadow restriction is permanent.** Even when adding cards or modals, separation comes from `--border` (hairline) or `--nav-button` (surface lift). No `shadow-md`, no `shadow-lg`, no `drop-shadow`.
7. **Chrome (navbar) is transparent; surface (panels) is `--background`.** Don't flip them — the navbar should always let the grid show through, panels should always sit a step above the stage.

## Known Gaps
- **Validation / form states are not documented.** v1 ships no inputs in the rendered page, so error / success / disabled token mappings are not surfaced in analyzed pages.
- **Light mode does not exist.** The token system is dark-only by declaration (`darkMode: "class"` is set but no light palette is provided).
- **Hamburger / mobile-nav pattern is intentionally omitted.** Below `md`, nav links vanish — no replacement menu. A v2 mobile pattern is not surfaced in analyzed pages.
- **Below-the-fold sections, footer, and modal patterns are not surfaced.** v1 is a single hero viewport. Card, table, modal, and footer specs are extrapolated from token availability, not from rendered components.
- **Icon system is deferred.** The "OCODE icon kit (TBD)" referenced in the prompt is not documented because v1 ships zero icons.
- **Reduced-motion handling is specified in narrative but not yet wired.** The intent (suppress canvas scroll + trail, keep brief entry stagger) is recorded; the `prefers-reduced-motion` `useEffect` guard is not present in the verbatim `ShapeGrid.jsx` source.
