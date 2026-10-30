---
version: "1"
name: "Design System Inspired by MoveStudio"
description: "MoveStudio's canvas is pure black (#000) with no gradient — a dark theater, not a tinted surface. The entire palette is white stepped only by opacity (white/64 → white/25), with exactly one saturated pixel allowed: the bg-red-500 REC dot blinking in the viewfinder. The signature is a single fixed, scroll-scrubbed background video — scroll is the camera's playhead, the timecode counts up at 24 fps, and a GSAP word-by-word paragraph un-blurs as the second motion. The page rhythm is full-height cinematic takes spaced by 120-160px black, the footage carrying the depth and frosted blur(80px) glass carrying every floating surface."
colors:
  canvas: "#000000"          # bg-black — page root + fixed video container; pure black, no tint
  ink: "#ffffff"             # text-white — headlines, wordmark, emphasized fragment, loading bar
  ink-secondary: "rgba(255,255,255,0.64)"  # white/64 — body copy, nav rest state (the signature secondary step)
  ink-muted: "rgba(255,255,255,0.60)"      # white/60 — footer link rows, hero kicker
  ink-faint: "rgba(255,255,255,0.40)"      # white/40 — corner ticks, service numbers, works meta, rest arrow
  ink-ghost: "rgba(255,255,255,0.30)"      # white/30 — footer column titles, lightest readable label tier
  ink-trace: "rgba(255,255,255,0.25)"      # white/25 — copyright, PRIVACY / TERMS — nearly dissolved
  ink-hud: "rgba(255,255,255,0.70)"        # white/70 — REC + timecode HUD text; service-row desc
  hairline: "rgba(255,255,255,0.1)"        # border-white/10 — every divider and panel edge
  nav-glass: "rgba(26,26,26,0.4)"          # bg-[#1A1A1A]/40 — centered nav pill, under blur(80px)
  footer-glass: "rgba(26,26,26,0.6)"       # footer card surface, under blur(80px)
  button-glass: "rgba(255,255,255,0.08)"   # white/8 — hero capsule fill at rest; flips to ink on hover
  rec: "#ef4444"             # bg-red-500 — the ONLY saturated color on the page; the REC dot, one pixel
typography:
  display: { fontFamily: "Outfit, ui-sans-serif, system-ui, sans-serif", weights: "500", role: "headlines, scroll-reveal, works titles, footer CTA, service titles — weight 500 medium" }
  body:    { fontFamily: "Outfit, ui-sans-serif, system-ui, sans-serif", weights: "400, 600", role: "hero description (400, 600 on emphasis), service copy, footer body" }
  mono:    { fontFamily: "Outfit, ui-sans-serif, system-ui, sans-serif", weights: "400, 700", role: "kickers, nav, timecode/HUD, button labels, footer micro-text — Outfit again; the 'mono' name is legacy, there is NO real monospace" }
spacing:
  base: "4px"
  content-width: "90% (w-[90%] mx-auto — every band shares this rail)"
  reveal-max: "1100px"        # scroll-reveal block cap inside the 90% band
  spacer: "120px / 160px"     # explicit between-screen spacer divs (cinematic pacing)
  header-pad-y: "16px / 24px / 32px (py-4 / md:py-6 / lg:py-8)"
  capsule-pad: "px-8 py-5 (label) · px-6 (arrow) — hero; 20px 32px / 20px 24px — footer"
rounded:
  lg: "8px"                   # rounded-lg — the squared inner half of every split capsule
  xl: "12px"                  # rounded-xl — viewfinder corner brackets
  2xl: "16px"                 # rounded-2xl — service-row hover plate
  capsule-l: "rounded-l-full rounded-r-lg"   # label segment of the split capsule
  capsule-r: "rounded-r-full rounded-l-lg"   # arrow segment of the split capsule
  pill: "9999px"              # rounded-full — nav pill, BOOK A STAGE, loading bar track
  footer: "clamp(20px, 2.5vw, 32px)"         # glass footer card
components:
  scroll-scrub-video: "Fixed full-bleed background video — muted playsInline preload=auto, NO autoplay NO loop; scroll position drives video.currentTime (video.seeking guard), timecode at 24 fps via ref"
  viewfinder-hero: "Camera-HUD overlay — four rounded corner brackets + blinking bg-red-500 REC dot + live TC HH:MM:SS:FF + 35MM·2.39:1 / LOS ANGELES, CA ticks; pointer-events-none"
  scroll-reveal: "GSAP word-by-word reveal — opacity 0.1→1 + blur(4px)→0 per word, block un-rotates 3°→0, all scrub:true ease:none; the only GSAP usage"
  split-capsule: "Two-segment button — label half (rounded-l-full rounded-r-lg) + arrow half (rounded-r-full rounded-l-lg), fly-out/fly-in arrow swap on hover; glass (hero) or solid white (footer)"
  service-row: "Numbered 12-col row — /num (col 2) · title (col 4) · desc (col 5) · arrow (col 1); hover plate bg-white/5 rounded-2xl + 2px arrow nudge"
  works-row: "Typographic list line — large title white/75 → white that slides translate-x-4 on hover, mono meta on the right"
  glass-footer: "Frosted card — rgba(26,26,26,0.6) + blur(80px) + hairline, rounded clamp(20px,2.5vw,32px); CTA row + auto-fit link grid + copyright bar"
---

# Design System Inspired by MoveStudio

## Overview

MoveStudio's canvas is the most absolute surface in this collection — `{colors.canvas}` is `#000000`, pure black with no tint, no gradient, no atmosphere. It is a dark theater, not a dark UI. There is no surface ladder: every panel sits flat on black, and the only thing layered above the canvas is a single **fixed, full-bleed background video** (`{components.scroll-scrub-video}`) running behind all content. White type sits over the footage at graded opacities, and the only "elevation" is frosted glass.

The single non-monochrome element on the entire page is the REC dot — `{colors.rec}` `#ef4444` (`bg-red-500`), one 8px blinking pixel in the viewfinder's top-left. Everything else is white stepped purely by opacity: `{colors.ink}` `#fff` for headlines, `{colors.ink-secondary}` `white/64` for body, down through `white/60 / 50 / 40 / 30 / 25` to copyright text that is nearly dissolved into the black. Most of these are not named tokens at all — they are Tailwind opacity modifiers written inline (`text-white/64`, `border-white/10`), because the palette is monochrome enough that named colors would be ceremony.

The type is **Outfit** and only Outfit — a clean geometric sans loaded once from Google Fonts. Both `--font-sans` and `--font-mono` in the `@theme` block resolve to it, so every `font-mono` utility (kickers, nav, the timecode, button labels, footer micro-text) still renders Outfit; there is no monospaced face. Display copy lives at weight `500` with `tracking-tight`; the "mono" register is the same family turned uppercase with wide tracking — the voice of a camera instrument.

The page rhythm is **cinematic takes over a scrubbed reel.** Full-height screens (a viewfinder hero, a word-by-word reveal band, numbered service rows, a typographic works list, a glass footer) are spaced by explicit 120–160px black spacers, so each lands as its own shot. The footage carries the page's real depth; the chrome is a minimal dark overlay so the reel and the type do the work.

**The governing decision:** Most film-studio and agency sites lean on color, lush imagery, decorative parallax, and looping autoplay video to feel "cinematic" — **MoveStudio refuses all of it.** It refuses every color but one REC pixel, refuses a second font, refuses drop shadows and card grids, refuses to autoplay or loop, and instead makes **scroll itself the camera's playhead**: page position drives `video.currentTime` directly (gated by a `video.seeking` guard), the timecode HUD counts up at 24 fps off the same scroll, and the header parallaxes away — so the act of scrolling reads as operating a camera through a take, not paging through sections. The restraint is the brand: a studio confident enough to use no color at all, and to make the navigation itself feel like footage.

**Key Characteristics:**
- **Pure-black theater** — `{colors.canvas}` `#000`, gradient-free; the fixed footage is the only background texture, never a tint or a spotlight.
- **One fixed, scroll-scrubbed video** (`{components.scroll-scrub-video}`) — `muted playsInline preload="auto"`, **no autoplay, no loop**; scroll position is the playhead, gated by `video.seeking`.
- **Camera-viewfinder hero** (`{components.viewfinder-hero}`) — four `{rounded.xl}` corner brackets, a blinking `{colors.rec}` **● REC** dot, a live `TC HH:MM:SS:FF` at 24 fps, and `35MM · 2.39:1` / `LOS ANGELES, CA` corner ticks.
- **Palette is white at graded opacity** over black (`/64 /60 /50 /40 /30 /25`) plus `{colors.hairline}` dividers — the opacity steps *are* the hierarchy; most values are inline modifiers, not named tokens.
- **One typeface — Outfit** — mapped to both `font-sans` and `font-mono`; there is no real monospace, the "mono" naming is legacy so utility classes still resolve.
- **Frosted-glass depth** (`{shadow.glass-blur}` `blur(80px)`) on the nav pill, the hero capsule, and the footer card — the only elevation; **no drop shadows anywhere.**
- **Split-capsule buttons** (`{components.split-capsule}`) with asymmetric radii (`{rounded.capsule-l}` + `{rounded.capsule-r}`) and a fly-out/fly-in arrow swap on hover.
- **Two motion signatures only** — the scroll-scrub + GSAP word-by-word reveal; `motion/react` handles restrained entrance reveals + header parallax.
- It does **not** use a second accent color, a page-background gradient, a light mode, a second font, a second icon, stock photography, card borders/shadows, or autoplay/looping video.

## Colors

> Source pages analyzed: the single MoveStudio landing — the fixed scroll-scrubbed video, the viewfinder hero (kicker · headline · description · capsule CTA), the centered glass nav pill + BOOK A STAGE, the scroll-reveal band + numbered service rows, the typographic works list, and the glass footer. The full single-page surface palette.

### Brand & Accent
- **REC Red** (`{colors.rec}` — `bg-red-500` / `#ef4444`): The **only** saturated color on the entire page. It appears exactly once — the 8px blinking REC dot in the viewfinder's top-left (`animate-pulse`). Never on type, never on a fill, never on a second element. This single-pixel rationing IS the brand's color discipline; treat any second hue as a system break.

### Surface
- **Canvas** (`{colors.canvas}` — `#000`): The page root (`bg-black`) and the fixed video container, both pure black. The footage reads as set into a dark theater rather than floated on a tint. There is no surface ladder — every section sits flat on this one canvas.
- **Nav glass** (`{colors.nav-glass}` — `#1A1A1A` @ 40%, `bg-[#1A1A1A]/40`): The centered nav pill, under `{shadow.glass-blur}`.
- **Footer glass** (`{colors.footer-glass}` — `rgba(26,26,26,0.6)`): The footer card surface, under `{shadow.glass-blur}`.
- **Button glass** (`{colors.button-glass}` — `white/8`): The hero capsule fill at rest; flips to solid `{colors.ink}` (with black text) on hover.
- **Hairline** (`{colors.hairline}` — `rgba(255,255,255,0.1)`): Every divider and panel edge — service-row borders, works-list borders, the footer card border + its internal rules. The one structural line in the system; never louder than 10% white.

### Text (white at graded opacity)
The text system is a single hue — white — stepped only by opacity. The steps are the hierarchy.
- **Ink** (`{colors.ink}` — `#fff`): Headlines, wordmark, the emphasized fragment of the hero description, the loading bar.
- **Ink Secondary** (`{colors.ink-secondary}` — `white/64`): Body copy and the nav rest state. The signature secondary step — quiet but fully legible over footage.
- **Ink Muted** (`{colors.ink-muted}` — `white/60`): Footer link rows, the hero kicker.
- **Ink HUD** (`{colors.ink-hud}` — `white/70`): REC + timecode HUD text; service-row descriptions.
- **Ink Faint** (`{colors.ink-faint}` — `white/40`): Viewfinder corner ticks, service-row numbers, works meta, the service-row arrow at rest.
- **Ink Ghost** (`{colors.ink-ghost}` — `white/30`): Footer column titles; the lightest still-readable label tier.
- **Ink Trace** (`{colors.ink-trace}` — `white/25`): Copyright + PRIVACY / TERMS — present, nearly dissolved into the black.

### Semantic
None on the marketing surface. There are no success / error / warning colors — the page has no forms, no status, no states beyond hover. The `{colors.rec}` red is **not** semantic (it does not mean "error"); it is the camera's recording indicator. The only overlay is the Screen-0 loading scrim, which is `{colors.canvas}` black, not a tinted overlay.

## Typography

### Font Family
- **Outfit** (`{typography.display.fontFamily}`) — a clean geometric sans, loaded once from Google Fonts (`wght@300;400;500;600;700`), fallback `ui-sans-serif, system-ui, sans-serif`. It is the **only** typeface and carries every role: display, body, and the "mono" register.
- **The "mono" role is also Outfit.** Both `--font-sans` and `--font-mono` in the `@theme` block map to Outfit, so every `font-mono` utility (kickers, nav, timecode, button labels, footer micro-text) renders Outfit — **there is no monospaced face.** The "mono" naming is kept only so existing utility classes resolve; treat `font-mono` as "Outfit in the tracked, uppercase, label register," not as a second family.
- Weights used: `300–700`, with **`500` (`font-medium`)** the headline weight and **`700` (`font-bold`)** for the wordmark and dark-on-white button labels. Body sits at `400`; the hero's emphasized fragment lifts to `600` (`font-semibold`).

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display}` hero | clamp(2.5rem, 5.5vw, 5.5rem) | 500 | 1.02 | tracking-tight (≈-0.025em) | Masthead headline (`whitespace-nowrap`, breaks on `<br/>`) |
| `{typography.display}` reveal | clamp(2rem, 4.5vw, 4rem) | 500 | 1.10 | tracking-tight | Word-by-word `{components.scroll-reveal}` paragraph |
| `{typography.display}` footer-cta | clamp(2rem, 4.5vw, 3.5rem) | 500 | 1.05 | -0.02em | Footer headline ("Ready To Roll…") |
| `{typography.display}` works | clamp(1.75rem, 3.5vw, 3rem) | 500 | 1.0 | tracking-tight | `{components.works-row}` titles |
| `{typography.display}` h3 | 24px (text-2xl) | 500 | 1.2 | 0 | Service-row titles |
| `{typography.body}` body-lg | clamp(1rem, 1.4vw, 1.25rem) | 400 (600 on emphasis) | 1.40 | 0 | Hero description |
| `{typography.body}` body | 15px (text-[15px]) | 400 | relaxed (≈1.6) | 0 | Service-row descriptions |
| `{typography.body}` footer-body | 13–14px | 400 | 1.5 | 0 | Footer brand blurb + link rows |
| `{typography.mono}` kicker | 11px | 400 | 1.2 | 0.30em (uppercase) | Section eyebrows ("( SELECTED WORKS )", hero kicker) |
| `{typography.mono}` label | 12px | 400 / 700 | 1.0 | -0.01em | Capsule labels; nav items |
| `{typography.mono}` hud | 10px | 400 | 1.0 | 0.25em (uppercase) | REC / timecode / corner ticks |
| `{typography.mono}` footer-title | 10px | 400 | 1.0 | 0.10em (uppercase) | Footer column headings |
| `{typography.mono}` micro | 11px | 400 | 1.0 | 0.10em (uppercase) | Copyright + PRIVACY / TERMS |

### Principles
- **The headline is the page.** Keep it to two lines via `<br/>`; it uses `whitespace-nowrap`, so size is governed by the `clamp()` ceiling, not by wrapping.
- **Weight 500 is the display default** — headlines, the reveal paragraph, works titles, and service titles all live there. Reserve `700` for the wordmark and dark-on-white button caps; `400` for paragraph copy; `600` only for the one emphasized hero fragment.
- **Two tracking registers only.** Display copy is tight (`tracking-tight`, negative); the "mono" label register is open and uppercase (`0.10em`–`0.30em`). Nothing sits between, and body copy never tightens.
- **HUD and label text is always uppercase Outfit with wide tracking** — the camera-instrument voice.
- **Always size display type with `clamp()`** — never a fixed display px. No italics; Outfit carries every role straight.

### Note on Font Substitutes
Outfit is open-licensed (Google Fonts) — load it directly; **no substitution is needed.** If Outfit is ever unavailable, fall back to **Inter** or system `ui-sans-serif` and accept a slightly less geometric headline; keep the same weight map (500 display / 400 body / 700 caps). 🔶 **There is no real monospace and one must not be introduced** — because both font roles deliberately resolve to one family, never "restore" a true mono (JetBrains Mono, Geist Mono, etc.) for the `font-mono` slots; that would break the single-typeface signature.

## Layout

### Spacing System
- **Base unit**: `{spacing.base}` 4px. Common steps observed: 4 / 8 / 16 / 24 / 32 / 40 / 64 / 120 / 160.
- **Content width**: every band is `{spacing.content-width}` (`w-[90%] mx-auto`) — header, hero, all sections, and footer share the same 90%-centered measure. There is **no fixed max-width container**; the rail is a percentage.
- Scroll-reveal block caps at `{spacing.reveal-max}` (1100px) inside the 90% band for a readable measure.
- **Between-screen rhythm**: explicit `{spacing.spacer}` spacer `<div>`s — 160px after the hero, 120px after services, 160px after works — set the cinematic pacing between full-height screens.
- Header vertical padding scales `{spacing.header-pad-y}` (16 / 24 / 32px at base / md / lg).
- Capsule padding: `{spacing.capsule-pad}`.

### Grid & Container
- A single full-bleed **fixed** video sits behind a `relative z-10 pointer-events-none` scroll column; only interactive elements re-enable the pointer (`pointer-events-auto`), so clicks/scroll otherwise pass through — the video has no pointer interaction.
- **Hero**: a `100vh` flex column; content is a 12-col grid (`md:grid-cols-12`) split **7 / 5** (headline left, description + CTA right), `items-end`, anchored to the bottom (`justify-end pb-24 md:pb-28`). Not centered.
- **Service rows**: 12-col grid — `/num` (2) · title (4) · desc (5) · arrow (1).
- **Works list** rows are flex `justify-between` lines; the **footer link grid** is `repeat(auto-fit, minmax(160px, 1fr))`.
- **Header** is `fixed`, 90% wide, centered (`left-1/2 -translate-x-1/2`), with the nav pill absolutely centered inside it.

### Whitespace Philosophy
Whitespace is the dark between frames. The hero anchors to the bottom so the upper viewport is pure footage inside the viewfinder; the 120–160px spacers let each screen land as its own take; the scroll-reveal band sits in a centered `min-h-screen` so the un-blurring paragraph owns the moment. Negative space — large fields of untouched footage and black — is exactly what lets the single REC dot, the live timecode, and the word-by-word reveal register. Crowd the page and the camera metaphor collapses into a normal scroll.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow, no border | Default for all type and rows over `{colors.canvas}` / the video |
| 1 (hairline) | 1px `{colors.hairline}` | Section dividers, service/works borders, footer card edge + internal rules |
| 2 (glass blur) | `{shadow.glass-blur}` (`blur(80px)`) | The nav pill, the hero capsule, the footer card |
| 3 (hover plate) | `hover:bg-white/5` + `{rounded.2xl}` | The service-row hover background only |

Depth comes from two devices only: (1) the heavy `blur(80px)` frosted glass on the three surfaces that float over the footage (nav pill, hero capsule, footer card), and (2) the footage's own optical depth plus the 10% hairlines that separate rows. **Drop shadows are banned across the entire system** — a `box-shadow` under any element would immediately drag the page from cinematic-sheet toward generic-SaaS. The video itself supplies the page's real depth; trust it.

### Decorative Depth
- **The scroll-scrubbed footage** is the decorative depth — there are no spotlight cards, no atmospheric gradients, no glow.
- **The viewfinder HUD** (brackets + timecode + REC + corner ticks) frames the footage at the hero only; treat it as a camera operator's overlay, not ornament.
- **Frosted glass** is the only synthetic depth — and only on the three named surfaces.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.lg}` | 8px | The squared inner half of every split capsule (`rounded-r-lg` / `rounded-l-lg`) |
| `{rounded.xl}` | 12px | Viewfinder corner brackets (`rounded-tl/tr/bl/br-xl`) |
| `{rounded.2xl}` | 16px | Service-row hover plate |
| `{rounded.capsule-l}` / `{rounded.capsule-r}` | full + lg (asymmetric) | The two halves of the split-capsule button |
| `{rounded.pill}` | 9999px | Nav pill, BOOK A STAGE, loading bar track |
| `{rounded.footer}` | clamp(20px, 2.5vw, 32px) | The glass footer card |

### Photography & Illustration Geometry
- The **video is the only imagery** — no stock photos, no external image URLs, no logos beyond the inline-SVG mark. Color enters the page only as the single REC dot.
- The reel is **fixed, full-bleed, cover-cropped** (`objectFit: cover`, `translate(-50%,-50%)` centered, `minWidth/minHeight 100%`) behind all content; it never scrolls with the page — scroll moves its playhead, not its position.
- The viewfinder frames the footage at the hero only: brackets at `top-28 bottom-10`, 24×24px corner marks at `{rounded.xl}`, HUD ticks in the four corners.
- The **Logo** mark and the decorative **GlobeIcon** are inline white-stroke SVG; avatars do not exist (no testimonial surface).
- 🔶 On later pages, any media stays in this language: dark, framed by hairlines or a viewfinder overlay, never a bright full-color card grid. A still image (if ever needed) must be desaturated/dark enough to live on `#000` without lifting the page off-theme.

## Components

### Buttons

> Measured from the live build (`App.tsx`): the hero CTA is a frosted split capsule, the footer CTA is the same capsule turned solid, and BOOK A STAGE is the one always-solid header pill. There is exactly one icon — `ArrowRight` — and the accent red never touches a button.

**`split-capsule` (hero — glass)** — The hero's **`EXPLORE OUR STUDIOS`** CTA. Two stretched segments with `gap-1`: a **label half** (`px-8 py-5`, `{colors.button-glass}` fill, `{shadow.glass-blur}`, `{rounded.capsule-l}`) holding the label in the `label` token at `white/90`; and an **arrow half** (`px-6`, same glass, `{rounded.capsule-r}`) holding `ArrowRight`. Default: frosted glass over the footage. Hover: both halves flip fill to solid `{colors.ink}` and all text/icon to black over `300ms`; the arrow runs the **fly-out/fly-in swap** (one `ArrowRight` `animate-fly-out`, a second `animate-fly-in absolute`, driven by a `cycle` counter on enter/leave). The asymmetric radii — outer edges fully round, inner edges 8px — are the signature; never round both halves to a uniform pill.

**`split-capsule` (footer — solid)** — Same two-segment structure and same fly-out/fly-in arrow swap, but **solid `{colors.ink}` from rest** with black label (700) and black arrow — used in the glass footer where the glass variant would disappear against the frosted card. Label **`START YOUR PRODUCTION`**; padding `20px 32px` (label) / `20px 24px` (arrow).

**`button-stage` (header — BOOK A STAGE)** — A solid pill: `bg-white text-black`, `px-6 py-4`, `{rounded.pill}`, label in the `label` token at weight **700**, `hover:bg-gray-200`. `hidden md:block` (drops below md). The one always-solid header action.

### Navigation

**`top-nav`** — A `fixed`, 90%-wide, centered `motion.header` (parallaxing away on scroll). **Left**: the `Logo` (`height={22}`). **Center**: the nav pill (below). **Right**: `button-stage`.

**`nav-pill`** — Centered glass: `hidden lg:flex`, absolutely centered in the header, `{colors.nav-glass}` + `{shadow.glass-blur}`, `px-10 py-4`, `{rounded.pill}`, `gap-10`, label register. Five `NavItem`s: **FILMS · SERIES · STUDIOS · PRODUCTION · ABOUT**.

**`nav-item`** — Vertical text swap. Rest color `{colors.ink-secondary}` (`white/64`), hover `{colors.ink}`. On enter **and** leave a `cycle` counter bumps; the first cycle is a plain span, later cycles render two spans — one `animate-fly-out-up`, one `animate-fly-in-up absolute` — so the label vertically rolls over on every hover transition (`translateY 150%`, `0.4s`, `cubic-bezier(0.4,0,0.2,1)`).

**`logo`** — Inline SVG + wordmark: a white play-triangle inside a 2.5px rounded-square stroke, plus **MOVESTUDIO** in Outfit **bold**, `tracking-[0.18em]`, `whitespace-nowrap`. Fully size-driven by a `height` prop (gap `= height × 0.5`, wordmark font-size `= round(height × 0.8)`). Used at `height={22}` in the header and `height={14}` in the footer.

### Viewfinder HUD (signature)

**`viewfinder-hero`** (`{components.viewfinder-hero}`) — A camera-operator overlay framing the footage at the hero: four 24×24px corner brackets (`border-white/40`, `{rounded.xl}` on the matching corner); a **● REC** cluster top-left (`hud` token, `white/70`) with the blinking `{colors.rec}` dot (`animate-pulse`); a **TC `HH:MM:SS:FF`** timecode top-right written through `timecodeRef` (never React state) counting up at 24 fps with scroll; and `35MM · 2.39:1` / `LOS ANGELES, CA` corner ticks (`hidden md:block`, `white/40`). It is `pointer-events-none` — it overlays, never intercepts. The brackets, live timecode, and REC dot together sell "you are looking through the lens."

### Cards & Containers

**`glass-footer`** (`{components.glass-footer}`) — The frosted card (`ref={screen3Ref}` — also the scroll-scrub stop-point): `{colors.footer-glass}` + `{shadow.glass-blur}` + 1px `{colors.hairline}` border, `{rounded.footer}`, `padding: clamp(32px, 4vw, 64px)`. Three stacked zones split by hairlines: (1) a **CTA row** — `footer-cta` headline ("Ready To Roll / Your Next Feature?") + the solid `split-capsule` **`START YOUR PRODUCTION`**; (2) a **link grid** — `repeat(auto-fit, minmax(160px, 1fr))`, a brand cell (`Logo height={14}` + a `white/40` blurb) plus three `FooterCol`s (COMPANY / SERVICES / CONNECT); (3) a **copyright bar** — `2026 MOVESTUDIO. ALL RIGHTS RESERVED.` in `trace` mono, PRIVACY / TERMS on the right. This is the only "card" in the system — there are no feature/pricing/testimonial cards.

### Rows

**`service-row`** (`{components.service-row}`) — A 12-col row inside a hairline-bordered list: `/{num}` in `faint` mono (col 2), title in `h3` (col 4), description in `body` `white/70` (col 5), and an `ArrowRight` (col 1, right-aligned). Hover lifts a `bg-white/5` plate at `{rounded.2xl}` (with `md:-mx-4 md:px-4` bleed) and nudges the arrow `translate-x-2` + brightens it to white over `500ms`. Three rows: `/01 /02 /03`.

**`works-row`** (`{components.works-row}`) — A typographic list line, `flex` `justify-between` `items-baseline`, hairline-bordered: a large `works`-token title at `white/75` that brightens to white and **slides `translate-x-4` (16px)** on hover over `500ms`, with `meta` (`2026 · FEATURE`) in `faint` mono on the right brightening to `white/70`. Five rows. The slide-on-hover is the works list's whole interaction; keep it.

### Inputs & Forms
None on the marketing surface — the page has no form, no input, no validation. The closest interactive elements are links and the two CTAs. 🔶 A contact/booking form (implied by "BOOK A STAGE" / "START YOUR PRODUCTION") would need its own dark, hairline-bordered input style invented in this language; nothing in the build defines it.

### Footer
Covered above as `glass-footer` — the page's single card and the only multi-zone surface.

### Signature Motion

**`scroll-scrub-video`** (`{components.scroll-scrub-video}`) — The reel is `muted playsInline preload="auto"`, **no autoplay, no loop**. A `canplaythrough` gate flips `isLoaded`; then a passive scroll listener maps progress to the playhead: `stop = footerAbsoluteTop − innerHeight × 0.2` (clamped `≥1`), `fraction = scrollY / stop` clamped `[0,1]`, `targetTime = fraction × duration`. The mandatory `if (video.seeking) return` guard skips assignments queued before the previous frame decoded — without it, fast scroll tears frames. The timecode is computed at **24 fps** and written through `timecodeRef.current.textContent`, never through state. The header runs a parallel `motion/react` parallax: `useTransform(scrollY, [0, 500, 800], [0, 0, -150])`.

**`scroll-reveal`** (`{components.scroll-reveal}`) — GSAP `ScrollTrigger`, three `scrub: true` tweens, all `ease: 'none'`: (1) container un-rotates `3° → 0` (`transformOrigin: 0% 50%`, `start top bottom`, `end bottom bottom`); (2) words fade `opacity 0.1 → 1`, `stagger 0.05` (`start top bottom-=20%`); (3) words un-blur `blur(4px) → 0`, same stagger/triggers. The paragraph is split on whitespace into `.word` spans (whitespace preserved verbatim). Cleanup kills **all** ScrollTriggers on unmount. This is the page's only GSAP usage and its second signature — keep the constants exact (`baseOpacity 0.1`, `baseRotation 3`, `blurStrength 4`).

## Do's and Don'ts

### Do
- Keep the canvas `{colors.canvas}` (`#000`), gradient-free — let the fixed footage be the only background texture.
- Drive the video by scroll (`{components.scroll-scrub-video}`) with the `video.seeking` guard; the timecode counts at **24 fps** through `timecodeRef`, never state.
- Ration color to a single pixel — the `{colors.rec}` (`#ef4444`) REC dot — and express everything else as white at graded opacity over black.
- Set headlines in Outfit **500** with `tracking-tight`; keep the two-line `<br/>` + `whitespace-nowrap` headline; size all display type with `clamp()`.
- Use `{shadow.glass-blur}` (`blur(80px)`) frosted glass for the nav pill, hero capsule, and footer card — the only depth.
- Keep the split-capsule asymmetric radii (`{rounded.capsule-l}` + `{rounded.capsule-r}`) and the fly-out/fly-in arrow + nav-item swaps intact.
- Pace screens with the 120–160px black spacers; share the `{spacing.content-width}` (`w-[90%] mx-auto`) rail on every band.

### Don't
- **Don't add a second accent color** — the `{colors.rec}` REC dot is the only saturated pixel; nothing else gets a hue (no `bg-blue-500`-style AI-default accents).
- Don't autoplay or loop the video, and don't round the scrub math — scroll is the playhead, gated by `video.seeking`; `stop = footerTop − innerHeight × 0.2`.
- Don't add a page-background gradient, a spotlight card, or a light mode — it is a black theater.
- Don't add a second font or a second icon (Outfit + `ArrowRight` only), and **don't "restore" a real monospace** for the `font-mono` slots.
- Don't add `box-shadow` anywhere — depth is `blur(80px)` glass + `{colors.hairline}` hairlines only.
- Don't round both halves of the split capsule to a uniform pill — the asymmetry is the signature.
- Don't push type brighter than its opacity tier "to fix contrast" — the graded-opacity steps `{colors.ink-secondary}` → `{colors.ink-trace}` *are* the hierarchy.
- Don't add card borders or elevation beyond the specified glass panels, use emoji, or introduce stock photography / external image URLs — the video is the only imagery.
- Don't add a third moving element competing with the scrub and the word reveal — the motion budget is two signatures plus restrained entrance reveals.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤419px | Headline at the `clamp` floor (2.5rem); hero 1-col; no nav pill, no BOOK A STAGE; corner ticks hidden |
| Phone | 420–639px | Hero stacks 1-col (headline over description/CTA, left-aligned); service rows stack 1-col |
| md (tablet+) | ≥768px | Hero 12-col **7/5** split, right column right-aligns; service rows go 12-col; `35MM · 2.39:1` / `LOS ANGELES, CA` ticks appear; BOOK A STAGE appears |
| lg (desktop) | ≥1024px | Centered nav pill appears (`hidden lg:flex`); header padding opens to 32px |
| Wide | ≥1440px | Content holds at the 90% rail; headline approaches the 5.5rem cap; footage fills the viewport |

### Touch Targets
- Minimum 44×44 hit area; the split-capsule padding (`px-8 py-5` / `20px 32px`) and BOOK A STAGE (`px-6 py-4`) clear it comfortably.
- The works rows and service rows are full-width tap targets; no nested competing interactive children.
- 🔶 The scroll-scrub is fed by native scroll, so it works on touch without extra wiring; the hover-only fly swaps simply don't fire on touch (acceptable — they are enhancement, not content).

### Collapsing Strategy
- There is **no mobile menu drawer.** The logo stays; the centered nav pill (`hidden lg:flex`) and BOOK A STAGE (`hidden md:block`) simply collapse out below their breakpoints. 🔶 A later multi-page build that needs mobile nav should add a sheet in the same dark/glass language rather than introduce a new pattern.
- Hero: 12-col 7/5 → single column at `<md`; the right column drops its right-alignment (`items-start text-left`) when stacked.
- Service rows: 12-col → single column at `<md`; the row arrow (`hidden md:flex`) drops on phone.
- Footer link grid is `auto-fit minmax(160px, 1fr)` — it reflows from four columns to fewer as width shrinks, no breakpoint needed.

### Image Behavior
- The video uses `preload="auto"` and a `canplaythrough` gate behind the Screen-0 loading overlay (LOADING + a pulsing 1/3-width bar) so the first scroll has no pop-in.
- Footage is `objectFit: cover`, centered with `translate(-50%,-50%)` and `minWidth/minHeight 100%`, so it fills every aspect ratio without letterboxing — it never crops to a fixed frame.

## Iteration Guide

1. New page (films index, project page, stages, about)? Start from `bg-black` + Outfit + the `{spacing.content-width}` rail + (optionally) the fixed scrub video. The shell is the brand.
2. Keep the color rule absolute — a new accent need is answered by another white-opacity tier or by nothing, **never** by a new hue. The `{colors.rec}` REC dot stays the only saturated pixel.
3. Reference everything by token — `{colors.X}`, `{rounded.X}`, `{components.X}`. Most colors are inline opacity modifiers, so document new tiers against this list rather than inventing names.
4. Decide a component's hover before shipping it — the system has real hovers (fly swaps, row slides, capsule fill flip); keep them on the components, not on the page.
5. Hold the three type registers: Outfit 500 + `tracking-tight` for display; Outfit 400 + 0 tracking for paragraphs; the uppercase tracked "mono" register for labels/HUD. Don't blur them.
6. Depth is `blur(80px)` glass on floating surfaces + hairlines. A new surface that "needs depth" gets a glass treatment or a hairline — **never** a `box-shadow`.
7. The motion budget is two signatures (scroll-scrub + word reveal) plus restrained `motion/react` entrance reveals and the header parallax. A new motion idea replaces or restrains to match — it does not add a third competing system.

## Known Gaps

- Beyond this single landing, later-page layouts (a real films/works index with detail pages, a stages/services page, an about, a contact form) are not specified — design them in the same sheet (`#000` canvas, Outfit, white-at-graded-opacity, glass-not-shadow), documenting the scrub-or-static-video choice per page. 🔶
- **Form / input and validation states do not exist** in the analyzed page — a booking/contact form (implied by both CTAs) needs its own dark, hairline-bordered input style invented in this language. 🔶
- **`prefers-reduced-motion` is not handled in the build** — a faithful extension should add it: soften the `Reveal` entrances toward instant, ease the header parallax, and consider holding the video at a poster frame (the scrub itself is user-driven, so it can stay). 🔶
- A light counterpart is intentionally absent; if ever needed it requires its own governing decision, not a recolor of black → white.
- The video is a single fixed reel keyed to total page scroll via the footer ref; multi-section scrubbing (per-screen reels, or chapter markers on the timecode) would need a new scroll-mapping model, not a tweak to this one. 🔶
