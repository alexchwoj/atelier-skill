---
version: "1"
name: "Banana Mood — Photography Studio Portfolio (Light / Dark)"
description: "A warm editorial-minimal portfolio for a photography studio. A warm near-white Paper canvas (#fdfdfc) and its near-black Ink dark twin (#12110d) hold a rotating, zooming sphere of circular project thumbnails as the home signature, one grotesque type family, hairline borders, and NO accent color — the only color on the page comes from the photographs. Case-study pages run an inset rounded-24px hero, a two-column intro, and an alternating photo gallery. Motion is the signature spring easing; the page rhythm is one image at a time on a bare gallery wall."
colors:
  paper: "#fdfdfc"            # canvas (light theme) — warm near-white "gallery wall"
  ink: "#12110d"              # primary type (light) / canvas (dark) — warm near-black
  dark-foreground: "#edecec"  # primary type on Ink (dark theme) — warm off-white
  border-light: "#0000001a"   # hairline — black @ ~10%, light theme dividers/rows/ring
  border-dark: "#ffffff1a"    # hairline — white @ ~10%, dark theme dividers/rows/ring
  halo-light: "#ffffff4d"     # inner glow inside the always-dark chat pill (on a light page)
  halo-dark: "#ffffff1a"      # inner glow inside the chat pill (on a dark page)
  scrim: "rgba(0,0,0,0.60)"   # from-black/60 — the ONLY gradient, over hero/teaser photos
  # NO accent color exists by design — color is reserved entirely for the photographs.
typography:
  sans:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    weights: "400 / 500 / 600 / 700"
    role: "the single family — body, nav, labels, project titles, wordmark, display"
spacing:
  base: "4px"                              # Tailwind 4px scale throughout
  section-padding-x: "px-6 / md:px-12 / lg:px-20 (case-study sections)"
  intro-gap: "gap-16 (two-column intro)"
  content-max: "max-w-5xl (64rem) intro statement · max-w-7xl (80rem) page cap"
rounded:
  xl: "0.75rem (12px)"        # small inline elements
  2xl: "1rem (16px)"          # medium cards/panels
  3xl: "1.5rem (24px)"        # hero + teaser photo frame
  4xl: "2rem (32px)"          # closing CTA card, chat pill
  pill: "9999px"              # circular thumbnails, theme toggle, CTA button, dots
shadow:
  pill-halo: "0 0 0 1px inset var(--color-border), 0 0 12px 0 inset var(--color-halo) — the dark chat pill only"
  ring-hairline: "inset 0 0 0 1px var(--color-border) — the closing CTA card frame only"
ease:
  spring: "linear(0,.002 .48%,…1.163 26.89%,…1) over 900ms — the signature spring (chat pill + theme surfaces)"
  standard: "cubic-bezier(0.4, 0, 0.2, 1) — non-spring transitions"
  reveal: "power3.out ~0.8s — entrance word/line rises (tagline, hero title)"
components:
  sphere: "Eight circular project thumbnails stacked in one grid cell, scroll-scrubbed into a rotating/zooming sphere — the home signature"
  theme-toggle: "Moon/sun mask SVG — a masked circle that slides to morph moon↔sun; toggles .dark on <html>, persists to localStorage"
  chat-pill: "Always-dark rounded-4xl pill, banana mark + 'Book a shoot'"
  inset-hero: "Rounded-24px full-bleed cover frame (inset-x-4 bottom-4 top-20) with a from-black/60 top-scrim and overlaid white title"
  wordmark: "Plain text 'Banana Mood' — font-semibold (600), text-[1.6rem], tracking-tight"
  cta-card: "Centered closing card, bg-background, rounded-4xl, ring-hairline frame, Ink-fill 'Get in touch' button"
---

# Banana Mood — Photography Studio Portfolio (Light / Dark)

> Fivefold showcase. Pairs with the Banana Mood prompt. Use this to keep pages you build *after* the two shipped routes — an about page, a services page, a contact form, more case studies — feeling like one quiet, gallery-grade photography portfolio in either theme.

## Overview

Banana Mood is a warm editorial-minimal portfolio for a photography studio — a gallery, not a brochure. The canvas is a warm near-white **Paper** (`{colors.paper}` — #fdfdfc), warmer and more alive than `#fff`, and the type is a warm near-black **Ink** (`{colors.ink}` — #12110d). Around the imagery there is nothing but Paper, Ink, and a 1px hairline: no surface ladder, no cards-on-cards, no decorative chrome. The page exists to hold photographs and then get out of the way.

**Most photography and portfolio sites add a brand accent and a layer of chrome — a signature hue on the CTA, gradient panels, drop-shadowed cards, a second display face for "personality." Banana Mood refuses every one of them: there is no accent color anywhere, the only color on the page is the photographs themselves, and every chrome surface is Paper, Ink, or a hairline.** That is the governing decision, and it cascades into everything below — emphasis is Ink↔Paper inversion, opacity, or scale, never a hue; depth is a hairline or the photograph's own light, never a `box-shadow`; voice is one grotesque family at 400–700, never a second typeface.

The system is fully dual-theme, and both themes are first-class — neither is an afterthought. A single moon/sun toggle in the header flips a `.dark` class on `<html>`, and **dark simply swaps Paper↔Ink**: background `{colors.paper}` → `{colors.ink}`, text `{colors.ink}` → `{colors.dark-foreground}` (#edecec), hairlines `{colors.border-light}` → `{colors.border-dark}`. The photographs do **not** swap — there is no separate dark cover; the theme flips the surfaces around the image, never the image.

The page rhythm is **one image at a time on a bare wall**, and the protagonist is the photograph. The home page is a single sticky stage where eight project covers rotate and zoom on a virtual sphere as you scroll (`{components.sphere}`), the active project's name cross-fading at the bottom. The case-study pages are restrained, image-led spreads: an inset rounded-24px hero, a two-column intro, an alternating gallery that lets each frame breathe. Motion is the signature **spring** easing (`{ease.spring}`) — slow, continuous, reversible on the home stage; restrained and image-led on case studies. The result reads as a studio confident enough to put its work on a blank wall and let it speak.

**Key Characteristics:**
- Warm near-white **Paper** canvas (`{colors.paper}` — #fdfdfc) with a full near-black **Ink** dark twin (`{colors.ink}` — #12110d); dark text is `{colors.dark-foreground}` (#edecec). Dark simply swaps Paper↔Ink.
- **No accent color.** The only color on the page is the photographs; every chrome surface is Paper/Ink/hairline, and emphasis is inversion/opacity/scale.
- One warm grotesque sans — **Hanken Grotesk** — carries the entire site; weights stay **400–700**, with 700 a rare ceiling, never above.
- The home signature: eight circular thumbnails on a **scroll-scrubbed rotating/zooming sphere** (`{components.sphere}`) over a 1000vh track, the active project's name + a dot-cluster crossfading off scroll progress.
- Case-study layout: an **inset rounded-24px full-bleed hero** (`{components.inset-hero}`) + a **two-column intro** + an **alternating photo gallery** + a next-project teaser + a closing CTA card.
- Hairline borders only (`{colors.border-light}` / `{colors.border-dark}`); soft corners — rounded `24px` heroes, `32px` cards/chat pill, fully-round pills and circles.
- A single **moon/sun theme toggle** (`{components.theme-toggle}`) and an always-dark **chat pill** (`{components.chat-pill}`) are the only persistent chrome; the **spring** easing (`{ease.spring}`) is the motion signature.
- **What it does NOT do:** no accent color, no second typeface, no font weight above 700, no gradient on a flat background (the only gradient is the hero scrim), no drop shadow, no card border heavier than a 1px hairline, no static grid or carousel in place of the sphere, no stock or third-party imagery, and no prior-template SaaS artifacts.

## Colors

> **Source pages analyzed:** the home sphere stage (sticky `#work` over a 1000vh track — sphere, centered tagline, crossfading project name, progress dots), the fixed header (wordmark + theme toggle), the chat pill, and the case-study spread (inset hero + scrim, two-column intro, alternating gallery, next-project teaser, CTA card, footer). Both light and dark renderings of each.

### Brand & Accent
- **None — by design.** There is deliberately no accent color. Where another system reaches for a hue (a CTA fill, a hover, an active state), Banana Mood reaches for Ink/Paper inversion, opacity, or scale instead. Color is reserved entirely for the photographs. Introducing any blue/purple/green/AI-default breaks the brand.

### Surface
- **Paper** (`{colors.paper}` — #fdfdfc): The gallery wall. A warm near-white — warmer and more alive than `#fff`, which keeps the page from feeling clinical. In light theme the whole canvas, header, sphere stage, intro, and CTA card are all Paper. In dark theme this slot becomes `{colors.ink}`.
- **Ink** (`{colors.ink}` — #12110d): The dark surface. In dark theme it *is* the canvas; in light theme it is the primary type color and the fill of the closing CTA button (Ink fill, Paper label). The chat pill always renders on Ink regardless of theme.

### Text
- **Ink** (`{colors.ink}` — #12110d): Primary type on Paper — wordmark, tagline, project names, intro statement, labels. A warm near-black, not pure black, so it sits in the same warm family as Paper.
- **Dark foreground** (`{colors.dark-foreground}` — #edecec): Primary type on Ink (dark theme) — the off-white that replaces Ink when the canvas inverts. Never pure white; it stays warm against #12110d.
- **Muted (token-driven):** secondary type — the Details list labels — is `text-foreground/40` (the current foreground at 40% opacity). It flexes per theme automatically; it is not a separate hex.

### Hairline
- **Border (light)** (`{colors.border-light}` — #0000001a): Black at ~10% — dividers, the Details list row borders (`border-foreground/10`), and the inset ring on the CTA card, in light theme.
- **Border (dark)** (`{colors.border-dark}` — #ffffff1a): White at ~10% — the same structural lines in dark theme. The border token flips with the theme; one value per mode, never a heavier line.

### Halo (chat-pill depth)
- **Halo (light)** (`{colors.halo-light}` — #ffffff4d): A soft inner glow used inside the always-dark chat pill on a light page.
- **Halo (dark)** (`{colors.halo-dark}` — #ffffff1a): The same inner glow tuned for the dark page. The halo is the only "glow" in the system and lives only inside `{components.chat-pill}`.

### Semantic
- **Scrim** (`{colors.scrim}` — rgba(0,0,0,0.60), used as `from-black/60`): A bottom-anchored gradient over the case-study hero and teaser photos so the overlaid white title stays legible. **This is the only gradient on the site** — it lives on photos, never on a flat background.
- **Success / error / overlay:** none on the marketing surface. The site has no forms with validation states yet (see Known Gaps), so it ships no semantic status colors — which is consistent with the no-accent rule.

## Typography

### Font Family
- **Hanken Grotesk** — `Hanken Grotesk, ui-sans-serif, system-ui, sans-serif`. A tight, low-contrast grotesque with humanist warmth, loaded from Google Fonts (open-licensed) at weights **400 / 500 / 600 / 700**, registered as Tailwind `font-sans`. It carries *everything*: body, nav, labels, project titles, the wordmark, and display headings. **There is no serif and no second family.**

The marketing surface has no display/body split by *typeface* — only by size, weight, and tracking. The family is silent and continuous.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| wordmark | text-[1.6rem] (~25.6px) | 600 | 1.0 (leading-none) | -0.02em | Header wordmark "Banana Mood" |
| project-name | text-4xl (~36px) | 500 | tight | -0.025em | Crossfading project name on the sphere stage |
| cta-heading | text-3xl → md:text-4xl → lg:text-5xl | 500 | tight | -0.025em | "Let's build something." |
| hero-title | text-3xl → md:text-4xl | 500 | tight | -0.025em | Case-study hero title (white, over scrim) |
| teaser-heading | text-2xl → md:text-4xl | 500 | tight | -0.025em | "Want to see more?" |
| intro-statement | text-2xl → md:text-3xl | 500 | leading-tight | -0.025em | The large intro paragraph (left column) |
| tagline | text-xs → sm:text-sm → md:text-base | 500 | leading-tight | normal | Home tagline behind the sphere (max-w-[30ch]) |
| body / button | text-sm → text-lg | 400–500 | ~1.45 | normal | Intro body, footer links, CTA button label |
| label | text-sm | 500 | ~1.2 | normal | "Introduction", "Details", Details-row labels |

### Principles
- **One family does all the work.** No display/body split by typeface — only by size, weight, and tracking. Keep that discipline.
- **Medium (500) is the workhorse** — project titles, labels, nav. The wordmark and emphasis step up to **600**; body sits at **400**.
- **Never exceed weight 700.** Most of the site lives at 400–600; 700 is a rare emphasis, never a headline default.
- **Tight tracking at display sizes** (`-0.025em`); the wordmark a slightly looser `-0.02em`. Never tighten body.
- **Display steps responsively** (`text-3xl md:text-4xl lg:text-5xl`); never hard-fix a hero/CTA size. Headlines stay short — tagline caps at `max-w-[30ch]`, the intro statement at `max-w-5xl`. No italics as a system device.

### Note on Font Substitutes
**Hanken Grotesk is open-licensed (Google Fonts) — load it directly; no substitution is needed, and none is licensed.** This system intentionally uses a *free* grotesque; do not "upgrade" it to a licensed face (e.g. PP Neue Montreal, GT America, or any foundry cut) — that would break the open-font intent and add a paid dependency. If Hanken Grotesk is ever unavailable, fall back through the declared stack (`ui-sans-serif, system-ui, sans-serif`) and accept a slightly less warm grotesque; never reach for a serif or a second branded family.

## Layout

### Spacing System
- **Base unit**: `{spacing.base}` (4px). The site uses Tailwind's 4px scale throughout (`p-4`, `p-8`, `gap-4`, `gap-16`, `py-12`, `py-24`).
- Case-study section padding: `{spacing.section-padding-x}` — `px-6` mobile / `md:px-12` / `lg:px-20`.
- Intro two-column gap: `{spacing.intro-gap}` (`gap-16`).
- Card / CTA interior: closing CTA card at `py-24 px-12`; intro sections at `pt-32 pb-20`; gallery figures at `py-4`/`py-12`.
- Chrome anchors: header at `p-4`; chat pill at `bottom-4 left-4`; progress dots at `bottom-6 right-6`.

### Grid & Container
- **Home stage:** a single sticky `#work` section (`sticky top-0 h-screen`) pinned over a **1000vh** scroll track. The sphere lives in `absolute inset-0` layers; all eight thumbnails share **one grid cell** (`grid-template-areas:'layer'`, each tile `grid-area:layer`) so they stack and the scroll transforms fan them into a sphere. The sphere wrapper is `min(400vw, 100vh)` square so it fills both tall and wide viewports.
- **Case-study intro:** a two-column grid, `grid-cols-1 lg:grid-cols-2 gap-16` — large statement left, hairline-divided Details list right (`lg:justify-self-end w-full lg:max-w-md`).
- **Case-study gallery:** alternating primitives — full-width `<figure>` blocks and two-up grids (`grid-cols-1 md:grid-cols-2 gap-4`), ~6–9 photos across 5–7 sections.
- **Hero / teaser frame:** an inset full-bleed photo, `absolute inset-x-4 bottom-4 top-20 rounded-[24px] overflow-hidden` — fixed insets at every width.
- Content measure: intro statement caps at `{spacing.content-max}` (`max-w-5xl` = 64rem); the page cap token is `max-w-7xl` (80rem).

### Whitespace Philosophy
Whitespace is the gallery wall around each frame. On the home stage the sphere floats in an otherwise empty viewport; the tagline sits centered and small, never crowding the photos. On case-study pages every figure gets generous padding (`py-12`, `py-24`) so no two images touch and the eye rests between them. Negative space is what lets the photographs read as *art on a wall* rather than a CMS grid — crowd them and the gallery becomes a contact sheet. Density is a deliberate refusal.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow, no border | Default for all type, the header, the sphere stage, any surface on Paper/Ink |
| 1 (hairline) | 1px `{colors.border-light}` / `{colors.border-dark}` | Details-list row borders, dividers (theme-flipped) |
| 2 (inset ring) | `{shadow.ring-hairline}` (`.ring-hairline`) | The closing CTA card frame only |
| 3 (inset halo) | `{shadow.pill-halo}` | The always-dark chat pill only |
| 4 (image depth) | The photographs' own light + the `from-black/60` scrim | Hero / teaser photos |

### Decorative Depth
- **Drop shadows are banned.** Depth comes from four devices only — (1) the hairline border, (2) the inset ring on the CTA card, (3) the inset halo inside the dark chat pill, and (4) the optical depth of the photographs themselves (plus the scrim over hero images).
- The **sphere's** sense of depth comes from **scale and z-stacking driven by scroll**, not from shadow — the front tile is largest/centered/full-opacity while the rest recede toward the rim.
- A `box-shadow` under a card would immediately drag the page from gallery-minimal toward generic-SaaS — the system does not use one.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xl}` | 0.75rem (12px) | Small inline elements |
| `{rounded.2xl}` | 1rem (16px) | Medium cards/panels |
| `{rounded.3xl}` | 1.5rem (24px) | The case-study hero + teaser photo frame |
| `{rounded.4xl}` | 2rem (32px) | The closing CTA card and the chat pill |
| `{rounded.pill}` | 9999px | The circular sphere thumbnails, the theme toggle, the CTA button, progress dots |

### Photography & Illustration Geometry
- **The photographs are the only color** — no duotone, no filter; the studio's frames render at full natural color. The theme never recolors a photo; it flips the surrounding surfaces.
- **Home sphere thumbnails:** perfectly **circular** (`rounded-full`), `1/1` aspect, sized `clamp(120px, 25vw, 300px) × --sphere-size-scale`. The cover image inside is over-scaled (`w-[110%] h-[110%] object-cover`) and centered so the circle is always full-bleed.
- **Case-study hero / teaser:** an inset rounded-24px full-bleed frame, the project's cover as `object-cover`, with the `from-black/60` bottom scrim.
- **Gallery figures:** varied aspect ratios — `aspect-video`, `aspect-square`, `aspect-[2/3]`, or natural `h-auto` — alternating to keep the spread from feeling templated. All `loading="lazy"`, `alt=""` (decorative gallery).
- **Covers are the fixed assets:** the eight collection covers load from the studio's own CDN (`https://cdn.5sdesign.art/projects/banana-mood/<slug>.jpg`); each cover serves as both the home-sphere thumbnail and the case-study hero. Gallery photos beyond the covers are the studio's own builder-supplied frames from the same collection — reuse the cover if a layout runs short; never stock, never a third-party photo service, never photographer credits. There is no logo image — the wordmark is text.

## Components

### Buttons

**`button-cta`** — The primary (and only) button: the closing-section action.
- `px-8 py-4`, `text-lg font-medium`, `bg-foreground text-background` (Ink fill / Paper label in light; inverted in dark), `rounded-full`. Label **`Get in touch`**, linking to a `mailto:` for the studio. Hover: `opacity-80` over a standard opacity transition. There is no second button style and no accent fill — inversion *is* the emphasis.

**`sphere-arrow`** — Round prev/next chevrons (`ArrowLeft` / `ArrowRight`), the *only* two lucide icons on the site.
- Two round icon buttons at the vertical middle of the sphere stage, in the `z-50 mix-blend-exclusion` layer so they read on any photo behind them. They step the visible/front project. Icon only — no label, no fill.

### Cards & Containers

**`cta-card`** (`{components.cta-card}`) — The closing block.
- `flex flex-col items-center justify-center gap-8 py-24 px-12`, `bg-background text-foreground`, `rounded-4xl`, framed by `{shadow.ring-hairline}` (`.ring-hairline`). Holds the `cta-heading` **`Let's build something.`** and the `button-cta`. Theme-aware; no drop shadow, only the inset ring.

**`inset-hero`** (`{components.inset-hero}`) — The case-study hero and teaser photo frame.
- A rounded-24px full-bleed photo, `absolute inset-x-4 bottom-4 top-20 overflow-hidden`, holding the project cover as `object-cover`, a `from-black/60` top-scrim, and an overlaid `text-white` title bottom-left that rises in on load.

**`details-list`** — The intro right column.
- A hairline-divided `<ul>`; each `<li>` is a `flex` between a muted label (`text-foreground/40`) and a value, separated by a top border (`border-foreground/10`), `py-3`. Rows: `Project Name`, `Timeframe` (a year), `Type` (a **photography** descriptor — `Portrait series`, `Editorial`, `Brand campaign`, `Lookbook`; never "Internal tool"), `Studio` → `Banana Mood`.

### Inputs & Forms
- No standalone form components ship yet. The only form-adjacent affordance is the chat pill's optional expand toward an input (resting state shows a label). There are no documented focus, error, or validation styles — see Known Gaps. When a form is added, it inherits Paper/Ink + hairline + no-accent: a focused field gets a hairline emphasis or Ink/Paper inversion, never a colored ring.

### Navigation

**`top-nav`** (header) — Fixed, both routes.
- `<header class="fixed top-0 left-0 right-0 z-50 p-4">`, inner `flex items-center justify-between`. **Left:** the text `{components.wordmark}` linking to `/`. **Right:** the `{components.theme-toggle}`. The header is **wordmark + toggle only** — no hamburger, no dropdown, single row at every width.

**`wordmark`** (`{components.wordmark}`) — Plain text **`Banana Mood`**: `font-semibold` (600), `text-[1.6rem]`, `tracking-tight` (-0.02em), `leading-none`, `whitespace-nowrap`. **There is no SVG logo** — the wordmark is text.

**`theme-toggle`** (`{components.theme-toggle}`) — A single `w-10 h-10` button holding a **moon/sun mask SVG**: a circle with a masked-out circle that slides on hover to morph moon↔sun (the mask circle translates `-13px` x / `+9px` y over `300ms ease-in-out`). Clicking toggles the `.dark` class on `<html>` and persists the choice to `localStorage`.

### Footer

**`footer`** — A simple column of text links, `text-sm font-medium`: `Work` (`/`), `Services`, `Approach`, `Writing`, `Get in touch`. The studio's own nav — no link points to an external company; unbuilt routes anchor to `#` or `/`. `w-full px-4 md:px-8 py-4`, theme-aware, flat (no border or a single hairline).

### Chrome & Signature

**`chat-pill`** (`{components.chat-pill}`) — The soft CTA.
- A small **always-dark** rounded pill, `fixed bottom-4 left-4 z-20`, carrying the `.theme-dark` class so it renders on Ink regardless of page theme. `rounded-4xl` (32px) with the inset halo `{shadow.pill-halo}`. **Left:** a single **banana mark 🍌** at 22px in a `size-10` round slot, slow-zooming `bm-zoom 3.5s ease-in-out infinite` (`scale(1)` → `scale(1.3)` → back), guarded by `prefers-reduced-motion`. **Right:** the label **`Book a shoot`** (`text-sm`). On hover/focus the pill may expand toward an input affordance using the **spring** timing; the resting state shows the label. The banana is the *only* emoji-as-decoration permitted anywhere.

**`progress-dots`** — A `45×45` fixed cluster (`bottom-6 right-6`) of eight `data-dot-index` dots; the active dot grows/brightens off scroll `progress`. `text-foreground`, theme-aware, `pointer-events-none`.

**`custom-cursor`** — The app root carries `cursor-none`; a tiny filled circle (`text-foreground`, `mix-blend`) follows the pointer with a short lerp. A quiet detail — minimal, hidden on touch devices.

**`sphere`** (`{components.sphere}`) — The home page's centerpiece and the brand's signature motion.
- One sticky viewport (`#work`) is pinned over a **1000vh** scroll track; eight circular project thumbnails are stacked in a single grid cell and, driven by a single scrubbed `ScrollTrigger`, transformed into a slowly **rotating, zooming sphere of photos**. From `progress` (0→1) the build drives CSS variables on the sphere wrapper: `--container-scale` (~0.85 → 1.0 → back, so the field breathes), `--zoom-offset` (in `cqmin`) and `--tilt-offset-x/y` (in `%`, the rotation/parallax drift), and per-tile `--sphere-size-scale` (the front tile scales up). The eight tiles are distributed around a virtual circle and offset by progress, so one rotates to the front (largest, centered, full opacity) while the others recede. The **active project name** crossfades at the bottom — the matching `<h2>` translates from `translateY(110%)` to `0` while the others slide out — and the progress dots track in step. All scroll-scrubbed, spring-feeling, reversible; **no autoplay, no carousel, no static grid.** On reduced-motion, freeze the sphere at `progress: 0` and let the prev/next arrows + dots switch the visible project.

## Do's and Don'ts

### Do
- Keep the canvas warm — `{colors.paper}` in light, `{colors.ink}` in dark; flip surfaces, never the photos.
- Let the photographs be the only color on the page; answer every emphasis need with Ink↔Paper inversion, opacity, or scale.
- Carry everything in **Hanken Grotesk** at weights 400–600 (700 as a rare ceiling).
- Make the `{components.sphere}` the single piece of continuous motion on the home stage; keep it scroll-scrubbed and reversible.
- Use the inset rounded-24px `{components.inset-hero}` with a `from-black/60` scrim and a white title for case-study heroes and the teaser.
- Reserve the inset halo for the `{components.chat-pill}` and the inset ring for the `{components.cta-card}`; everything else is flat or hairline.
- Keep both themes first-class — design and check every surface in light *and* dark.
- Honor `prefers-reduced-motion`: freeze the sphere at `progress: 0`, drop the banana zoom, near-instant theme crossfade.

### Don't
- **Don't add an accent color** — no blue/purple/green/AI-default; color is the photographs' job alone. (This is the governing decision — not a one-off.)
- Don't add a second font family or a serif; Hanken Grotesk carries everything.
- Don't "upgrade" the type to a licensed face (PP Neue Montreal, GT America, etc.) — the open grotesque is the system of record.
- Don't exceed font weight **700** anywhere.
- Don't add gradients on flat backgrounds — the *only* gradient is the `from-black/60` (`{colors.scrim}`) scrim over hero/teaser photos.
- Don't add borders heavier than a 1px hairline, or any `box-shadow` beyond the spec'd inset hairline (`{shadow.ring-hairline}`) / halo (`{shadow.pill-halo}`).
- Don't replace the sphere with a static grid or a carousel — the scrubbed 1000vh sphere is the signature.
- Don't recolor, duotone, or filter the photographs, and don't swap a separate dark cover — the theme flips surfaces, not images.
- Don't use stock or third-party imagery, and don't add photographer credits — only Banana Mood's own collections (Velvet, Golden Hour, Daydream, Saigon Nights, Halo, Solace, Atelier, Bloom).
- Don't reintroduce any prior-template artifact — no SaaS "internal tool / AI-native" copy in the intro or Details (`Type` is a photography descriptor), no mascot chat video, no analytics host, no outside author/social links.
- Don't add emoji-as-decoration beyond the single banana mark in the chat pill.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Phone | ≤640px | Tagline at `text-xs`; sphere fills via `min(400vw,100vh)` with `clamp(120px,…)` floor tiles; intro/gallery single-column; section padding `px-6`; CTA/teaser headings at their small step |
| Tablet | 641–1023px | Section padding `md:px-12`; gallery two-up (`md:grid-cols-2`); headings step to `md:` sizes; intro still single-column (collapses at `lg`) |
| Desktop | 1024–1440px | Section padding `lg:px-20`; intro becomes two-column (`lg:grid-cols-2 gap-16`); CTA heading reaches `lg:text-5xl`; sphere at full scale |
| Wide | ≥1441px | Content caps at `max-w-7xl` (80rem); sphere stage and 1000vh track hold; type sits at its display caps |

### Touch Targets
- Minimum 44×44 hit area; the theme toggle (`w-10 h-10` = 40px) extends its target with padding; the CTA button (`px-8 py-4`) clears it comfortably.
- The sphere is fed by **touch scroll** the same way it is fed by wheel/scroll on desktop — the 1000vh track scrubs at every width.
- The custom cursor is hidden on touch devices.

### Collapsing Strategy
- The **header** stays a single row at all widths — it is wordmark + theme toggle only, so no mobile menu is ever needed.
- The **chat pill** stays fixed bottom-left and single-row at every width.
- The **intro** collapses from two columns to one below `lg`; the **gallery** collapses two-up to one-up below `md`.
- **Type** uses the `md:`/`lg:` step pattern (e.g. `text-3xl md:text-4xl lg:text-5xl`); never a fixed display size.

### Image Behavior
- The home page **preloads each cover** via `<link rel="preload" as="image">` so the first sphere paint has no pop-in.
- Gallery photos use `loading="lazy"` and empty `alt=""`; thumbnails/heroes fade `opacity 600ms ease-in-out` on load; the hero scrim fades `0.5s ease-out`.
- Sphere thumbnails over-scale their cover (`w-[110%] h-[110%] object-cover`) and center it so the circle is always full-bleed; set `aspect-ratio` on figure containers to prevent layout shift.
- The single cover per collection serves both light and dark themes — there is no separate dark image.

## Iteration Guide

1. New page (about, services, contact, another case study)? Start from the shell: Paper/Ink canvas + Hanken Grotesk + hairline borders + no accent. The shell is the brand, and it must work in both themes.
2. Keep the **no-accent rule absolute** — a new emphasis need is answered by Ink↔Paper inversion, opacity, or scale, never by a new color.
3. Use token references everywhere — `{colors.X}`, `{rounded.X}`, `{ease.X}`, `{components.X}` — so a value change cascades across both themes.
4. Design and verify every new surface in **light and dark**; the border, foreground, and halo tokens flip automatically — check that contrast and the hairline still read.
5. One family does all type: vary by **size / weight (400–600, 700 max) / tracking**, never by adding a typeface or a licensed face.
6. Motion discipline: the sphere is the home's only continuous motion; elsewhere keep it restrained and image-led. New interactive motion uses the **spring** timing (`{ease.spring}`) for surfaces or `power3.out` for entrance rises; everything is reduced-motion-guarded.
7. Shadow restriction holds: depth is the hairline + inset ring + inset halo + the photographs' own light. A surface that "needs depth" gets one of those or none — never a `box-shadow`.
8. Imagery is always the studio's own collections at full natural color; reuse a collection's covers/frames if a layout runs short, never stock or an outside service.

## Known Gaps

- Only two routes are specified — the **home sphere** (`/`) and the **case study** (`/work/:slug`). An about page, a services/approach page, a "Writing" index, and a contact form are all linked in the footer but **unbuilt**; design them in the same Paper/Ink + Hanken Grotesk + no-accent language, dual-theme.
- **Form / input and validation states** (error, success, disabled, focus) are not surfaced — the only form-like affordance is the chat pill's optional expand, which is unspecified beyond "expands toward an input." The chat pill's expanded state (what the input looks like, how it submits, where "Book a shoot" leads) is not detailed beyond the resting label.
- **Exact sphere math is inferred:** tile distribution around the virtual circle, the precise `--container-scale` / `--zoom-offset` / `--tilt` curves, and the front-index computation are described by behavior, not by exact numbers — tune them to feel spring-like and reversible.
- The **gallery photos beyond the eight covers are builder-supplied** — there is no fixed asset list for them; the studio provides ~6–9 frames per collection, reused if a layout needs more. The case-study **intro copy and Details values** (Timeframe year, Type descriptor) are per-project and partly authored — only the eight titles and the fixed UI copy are verbatim.
- A second/accent color is **intentionally absent**; if a future surface seems to need one, that is a governing decision, not a one-off recolor — the answer is almost always inversion or opacity instead.
