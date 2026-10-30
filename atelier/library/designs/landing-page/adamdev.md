---
version: "1"
name: "Adam.dev — Liquid-Glass Vibe-Coding Landing"
description: "A single-page marketing site for an async video-course brand teaching vibe coding (shipping software with AI agents like Cursor and Claude Code). White canvas (#ffffff), near-black ink (#0a0a0a), single emerald accent ramp (#ecfdf5 → #047857). Liquid-glass cards, drifting aurora blobs, SVG film-grain, pixel-bitmap display type. No Framer Motion, no GSAP — pure CSS transitions driven by a custom IntersectionObserver hook."
colors:
  canvas: "#ffffff"
  ink: "#0a0a0a"
  brand-default: "#10b981"
  brand-50: "#ecfdf5"
  brand-100: "#d1fae5"
  brand-200: "#a7f3d0"
  brand-300: "#6ee7b7"
  brand-400: "#34d399"
  brand-500: "#10b981"
  brand-600: "#059669"
  brand-700: "#047857"
typography:
  display:
    fontFamily: "PP Neue Bit Bold"
    weights: "700"
    role: "All section h1/h2 + numeric/price/stat displays, ALL CAPS"
    fallback: "IBM Plex Mono 700, monospace"
  body:
    fontFamily: "Inter"
    weights: "300 / 400 / 500 / 600 / 700 / 800"
    role: "Paragraphs, lists, buttons, navigation (default sans)"
  mono:
    fontFamily: "JetBrains Mono"
    weights: "400 / 500"
    role: "Hero terminal mockup, inline code chips"
  editorial:
    fontFamily: "PP Mondwest"
    weights: "400"
    role: "Loaded for future editorial use, not currently applied"
spacing:
  base: "Tailwind 3 default (4px)"
  section-rhythm: "py-20 md:py-28 (Schedule) · py-24 md:py-32 (Curriculum, About, Courses, Register, FAQ) · Hero pt-32 pb-20 md:pt-40 md:pb-28"
  container: "mx-auto max-w-7xl px-6"
rounded:
  default: "14px"
  lg: "20px"
  xl: "28px"
  pill: "9999px (CTA pills, glass-pill chips, social circles)"
components:
  glass: "Liquid-glass card — linear-gradient(135deg, rgba(255,255,255,0.72), rgba(255,255,255,0.40)) + backdrop-blur(20px) saturate(1.6) + emerald-tinted inset highlights and shadows"
  glass-pill: "Small chip variant — softer blur(12px), used for status pills, stat tiles, social pills, payment rows"
  noise-fixed: "Fixed SVG fractalNoise grain layer at opacity 0.025 / mix-blend-mode multiply, mounted once in App.jsx"
  noise-card: "Per-card SVG grain at opacity 0.18 / mix-blend-mode overlay, applied to terminal, schedule, courses, register, FAQ, avatar"
  aurora: "Blurred green radial halo (80px blur), 18s aurora-drift loop with staggered animation-delays per section"
  scroll-progress: "2px fixed top progress bar, linear-gradient(90deg, #34d399, #10b981)"
  blink-cursor: "1s steps(2) infinite — hero headline and terminal caret"
---

# Adam.dev — Liquid-Glass Vibe-Coding Landing

> Fivefold showcase. Pairs with the Adam.dev prompt. Use this file to keep Adam.dev's optimism-meets-restraint when you add new pages — it should always read like a developer-education brand that ships, never a hype reel.

## Overview

Adam.dev is **a single-page marketing site for an async video-course brand teaching vibe coding — shipping software with AI agents like Cursor and Claude Code as a pair-programmer.** White canvas, near-black ink, a single emerald ramp from `#ecfdf5` to `#047857`, and a layered depth system built from liquid glass, drifting aurora halos, and a fine SVG film grain. No purple, no neon, no orange — the entire developer-marketing visual playbook of "dark dashboard + violet gradient" has been refused.

The governing decision: **optimism without hype — premium developer-education aesthetics powered by pure CSS, not animation libraries.** Most edtech sites either go dark-mode-default (techno seriousness) or rainbow-gradient (forced excitement). Adam.dev does neither. The page is fundamentally white with three permanent radial green halos baked into `body` — a soft daylight, like reading documentation on a clean desk. Glass cards float over that daylight with `backdrop-filter: blur(20px) saturate(1.6)`. Headlines render in **PP Neue Bit Bold**, a pixel-bitmap display face that signals "developer-native, not enterprise-edtech." The whole motion system is **one IntersectionObserver hook + seven CSS reveal classes** — no Framer Motion, no GSAP, no Lottie. The bet: developer trust is earned by craft and restraint; an emerald accent and a pixel headline say more than any animated hero ever could.

The system extends across nine sections — Nav, Hero, Schedule, Curriculum, About, Courses, Register, FAQ, Footer — and a Footer that reuses the same glass-pill, aurora, and reveal primitives as everything above. Consistency is enforced by Tailwind tokens (`brand` ramp, `font-bit`, `font-sans`, `font-mono`), four custom utility classes (`.glass`, `.glass-pill`, `.noise-fixed`, `.noise-card`), and a single 80ms-stagger ladder (`.delay-1` through `.delay-8`). Any new surface inherits the white canvas, the emerald-only constraint, and the IntersectionObserver one-shot reveal — no exceptions.

**Key Characteristics:**
- **Pure white canvas** (`{colors.canvas}` — #ffffff) with near-black ink (`{colors.ink}` — #0a0a0a). Default text color is `#0a0a0a` everywhere.
- **Single emerald ramp** (`{colors.brand-50}` through `{colors.brand-700}`) as the only accent family. No orange, purple, blue, pink, or neon anywhere — the prompt names this as an invariant.
- **Three permanent radial gradients** painted on `body` (top-right, mid-left, bottom-center emerald halos) — the page glows green before any content lands.
- **PP Neue Bit Bold** for every h1/h2 and numeric/price/stat display, `uppercase` always; **Inter** (300–800) for prose; **JetBrains Mono** inside the hero terminal only.
- **Liquid-glass card system** — `.glass`, `.glass-pill`, `.glass-dark` (reserved) — backdrop-blur with emerald-tinted inset highlights and soft shadows. SVG film grain on two scales (`.noise-fixed` opacity 0.025; `.noise-card` opacity 0.18 overlay blend).
- **Per-section aurora blobs** drifting on an 18s `ease-in-out` loop with staggered `animation-delay` (-3s, -4s, -6s, -9s, -12s).
- **One animation system** — `useInView` + seven `.reveal*` classes + eight `.delay-N` rules at 80ms apart. Zero animation libraries.
- **No mobile menu sheet** — only brand + a black `Enroll` pill below the `sm` breakpoint.

## Colors

> **Source pages analyzed:** Nav, Hero, Schedule, Curriculum, About, Courses, Register, FAQ, Footer — every accent is a member of a single emerald ramp; white + near-black do the rest.

### Canvas & Ink
- **Canvas** (`{colors.canvas}` — `#ffffff`): Global background. Pure white, not off-white — Adam.dev wants the optical brightness, the "fresh editor" feel.
- **Ink** (`{colors.ink}` — `#0a0a0a`): Default text color, applied as `text-neutral-900` in production. Slightly softer than absolute black so glass cards float visibly on white.
- **Neutral-700** (`#404040` Tailwind default): Body prose inside glass cards, list items, link rest state.
- **Neutral-500/600** (`#737373` / `#525252` Tailwind default): Eyebrow microcopy, captions, footer secondary text.

### Brand Tints (50–200)
- **Brand 50** (`{colors.brand-50}` — `#ecfdf5`): Tag-pill backgrounds, course-card image bed, payment-icon rings, footer sheen gradient stop.
- **Brand 100** (`{colors.brand-100}` — `#d1fae5`): Check-icon circle bg, bundle pill perks, avatar gradient terminus.
- **Brand 200** (`{colors.brand-200}` — `#a7f3d0`): Hairline ring accents on glass cards (`ring-1 ring-brand-200/60`), connector line gradient stop in Register.

### Brand Mids (300–400)
- **Brand 300** (`{colors.brand-300}` — `#6ee7b7`): Aurora-2 core, scroll-progress left stop (`#34d399` → `#10b981`), decorative glow blobs on Hero terminal, terminal accent text.
- **Brand 400** (`{colors.brand-400}` — `#34d399`): Aurora-3 core, hero-status ping animation, terminal traffic-light "live" dot, scroll-progress left stop.

### Brand Signature (500–700)
- **Brand 500** (`{colors.brand-500}` — `#10b981`): The headline accent — gradient endpoint, status dots, focus-ring color (`focus-visible:ring-brand-500`), ping animations.
- **Brand 600** (`{colors.brand-600}` — `#059669`): Active CTA fill (the pill becomes brand-600 on press), eyebrow text, link active state, "Save 52%" pill, footer brand wordmark.
- **Brand 700** (`{colors.brand-700}` — `#047857`): Gradient terminus on headline word-fills (`from-brand-500 to-brand-700`), deepest accent text, glass-dark surface (reserved).

### Forbidden Colors (verbatim from prompt Layer 3 + Layer 11)
- "Do not use orange, purple, blue, pink, neon or any color outside the emerald palette anywhere." The only accent family is `brand` (emerald-50 → emerald-700).
- `text-orange-*`, `bg-orange-*` and any other non-emerald accent utilities from earlier drafts were removed — never reintroduce them.

## Typography

### Font Family
- **Display** — PP Neue Bit Bold (700), stack `["PP Neue Bit", "IBM Plex Mono", monospace]`. Self-hosted from `/public/fonts/ppneuebit-bold.otf`. Always `uppercase`.
- **Body** — Inter 300/400/500/600/700/800, stack `["Inter", "-apple-system", "BlinkMacSystemFont", sans-serif]`. Loaded from Google Fonts via `<link>` preconnect.
- **Mono** — JetBrains Mono 400/500, stack `["JetBrains Mono", ui-monospace, monospace]`. Hero terminal only.
- **Editorial (reserved)** — PP Mondwest 400, stack `["PP Mondwest", "Times New Roman", serif]`. Declared via `@font-face`, not currently applied anywhere on the production page.
- **OpenType features** — `font-feature-settings: 'ss01', 'cv11'` set on `body` for Inter's developer-flavored alternates.

### Hierarchy
| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| Hero h1 | `text-6xl md:text-8xl lg:text-9xl` | 700 (bit) | `leading-[0.9]` | `tracking-tight` | "Vibe / Coding" pixel headline |
| Section h2 | `text-5xl md:text-6xl lg:text-7xl` | 700 (bit) | `leading-[1.05]` | `tracking-tight` | Schedule, Curriculum, About, Register, FAQ |
| Bundle h3 | `text-2xl md:text-3xl` | 600 (Inter) | `leading-tight` | `tracking-tight` | Register bundle title |
| Week / Step h3 | `text-2xl md:text-[28px]` | 600 (Inter) | `leading-tight` | `tracking-tight` | Curriculum week titles, About h2 |
| Payment header h3 | `text-lg` | 600 (Inter) | default | default | Register "Payment options" |
| Price display | `font-bit text-2xl` → `text-6xl` | 700 (bit) | default | default | `$199 USD` CTA → bundle hero |
| Body lead | `text-base md:text-lg` | 400 (Inter) | `leading-relaxed` | default | All section subtitle paragraphs |
| Body prose | `text-sm md:text-base` | 400 (Inter) | `leading-relaxed` | default | Lists, FAQ answers, refund note |
| Eyebrow / label | `text-xs` | 500 (Inter) | default | `uppercase tracking-wider` | "Now enrolling", "Schedule", "Explore" |
| Mono caption | `text-[11px]` | 400 (JetBrains) | default | default | Terminal caption, `vibe-coding.session.001` |

### Principles
- Display type is **always uppercase** — `font-bit` without `uppercase` is a bug.
- Numeric values (prices, stats, course counts) render in `font-bit` even when surrounded by Inter prose — pixel digits are part of the brand voice.
- Body never uses `font-bit`; the pixel face is reserved for headline / numeric scale.
- `tracking-tight` on every display headline; never letter-space pixel type wider.
- Inter weight 500 is allowed for nav links and pills but **600+** is preferred for any button label.
- Headline word-fills use the same gradient (`bg-gradient-to-br from-brand-500 to-brand-700 bg-clip-text text-transparent`) on every section — consistency is the point.
- Mono is only allowed inside the Hero terminal mockup, inline `<code>` chips in Register step 2, and footer-style mono captions.

### Note on Font Substitutes
If PP Neue Bit Bold is unavailable, clamp to IBM Plex Mono 700 (already declared in the stack) and document the substitution in a code comment. Inter must never be silently swapped — fall back to the system stack only (`-apple-system, BlinkMacSystemFont, sans-serif`). Never substitute PP Neue Bit with a generic pixel font like "Press Start 2P" — the brand reads less developer-native at that weight.

## Layout

### Spacing System
- **Base unit** — Tailwind 3 default 4px scale. All spacing tokens are multiples (4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48).
- **Section padding** — `py-20 md:py-28` (Schedule), `py-24 md:py-32` (Curriculum, About, Courses, Register, FAQ), Hero `pt-32 pb-20 md:pt-40 md:pb-28`, Footer `py-16 md:py-20`.
- **Card padding** — Glass panels use `p-7 md:p-8` (Schedule right) or `p-8 md:p-10` (Schedule left, Register bundle); course cards `p-5`; payment rows `p-4`.
- **Anchor offset** — Every section sets `scroll-mt-24` so smooth-scroll lands below the fixed nav.

### Grid & Container
- **Container** — `mx-auto max-w-7xl px-6` everywhere; never override the max-width.
- **Two-column ratios** — Hero `md:grid-cols-[1.05fr_0.95fr]`; Schedule `md:grid-cols-[1.8fr_1fr]`; About `md:grid-cols-[0.75fr_1.25fr]`; FAQ `md:grid-cols-[0.9fr_1.1fr]`; Footer `md:grid-cols-[1.5fr_1fr_1fr]`.
- **Course grid** — `sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4` with `gap-6`. Cards stagger 1-2-3-4-1-2-3-4 via `reveal-scale delay-{i%4+1}`.
- **Curriculum grid** — `md:grid-cols-3` with `md:divide-x md:divide-white/60` so weeks share a single hairline.
- **Page wrapper** — `overflow-x-hidden` on the outermost wrapper contains aurora-blob bleed.

### Whitespace Philosophy
Adam.dev treats whitespace as documentation: the page should read like a clean editor, not a poster. Section verticals are deliberately generous (`py-32` at the widest) so each surface earns its own breath. Glass cards float on white because the white is doing work — it's the optical "reset" between liquid panels. The page never fills edge to edge; the `max-w-7xl` container caps content at ~1280px even on 4K monitors. Negative space frames the emerald accent, making one or two green pixels feel like the whole brand.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, hairline-only (`ring-1 ring-brand-200/60`) | Course tag pills, payment row icons, footer hairlines |
| Soft hairline | 1px `border-white/40` to `/70` | Nav scrolled state, glass-card edges, divider strokes |
| Backdrop blur | `backdrop-blur(20px) saturate(1.6)` (`.glass`) or `blur(12px) saturate(1.4)` (`.glass-pill`) | Every floating panel, every chip |
| Product shadow | `0 12px 32px -12px rgba(16,185,129,0.18)` (glass card) → `0 16px 36px -12px rgba(16,185,129,0.30)` (course card active) | Glass card resting state and pressed/active emphasis |

**Shadow philosophy.** Every shadow is **tinted emerald**, not neutral. The signature shadow color is `rgba(16,185,129,0.18)` for resting cards and `rgba(16,185,129,0.30)` for active states. A pure black shadow would feel heavy on the white canvas; the green tint reads as ambient brand light. Glass cards combine a `box-shadow` with two `inset` highlights (`inset 0 1px 0 rgba(255,255,255,0.85)` + `inset 0 -1px 0 rgba(16,185,129,0.06)`) so the panel has a top-bright / bottom-warm rim.

**Decorative Depth:**
- **Aurora blobs** — `position: absolute; border-radius: 9999px; filter: blur(80px)` at three sizes (520px / 420px / 320px). Each section gets 1–2 blobs with staggered `animationDelay` (-3s, -4s, -6s, -9s, -12s) so the page never pulses in sync.
- **SVG film grain** — `.noise-fixed` mounted once in `App.jsx` (opacity 0.025, multiply); `.noise-card` per-card (opacity 0.18, overlay). Both layers use `feTurbulence` base-frequency 0.85–0.9.
- **Pixel glow** — Hero terminal has two soft brand blobs (`bg-brand-300/40 blur-2xl`, `bg-brand-400/30 blur-2xl`) leaking from corners.
- **Scroll progress** — 2px fixed bar at `top-0`, gradient `linear-gradient(90deg, #34d399, #10b981)`, `transform-origin: left`.

## Shapes

### Border Radius Scale
| Token | Value | Use |
|---|---|---|
| `rounded` (default) | 14px | Code chips, square icon tiles, mini accents |
| `rounded-lg` | 20px | Payment icon squares, inline cards (reserved) |
| `rounded-xl` | 28px | Reserved — currently unused on production page |
| `rounded-2xl` | 16px (Tailwind default) | Course cards, payment rows, schedule stat pills, terminal inner |
| `rounded-3xl` | 24px (Tailwind default) | Hero terminal frame, Schedule cards, Register panel, FAQ list, bundle card |
| `rounded-[2rem]` / `[1.6rem]` | 32px / 25.6px | About avatar frame (outer / inner) — bespoke radii for the portrait |
| `rounded-full` | 9999px | CTA pills, glass-pill chips, social circles, status dots, check-icon circles |

### Photography Geometry
- **Adam portrait** — `aspect-[4/5]` `object-cover`, rendered inside a `.glass.noise-card` frame with a soft white gradient overlay top→transparent and `transition-transform duration-[1.4s]` slow-scale on hover (no hover-state documented per Apple convention; the spec lists it for completeness).
- **Course banners** — `aspect-[16/10]` `object-cover`, 8 images at `https://cdn.5sdesign.art/projects/Adamdev/code-01.jpg` through `code-08.jpg`. `loading="lazy"` on all course images.
- **Logo** — `/logo.png`, 1:1 transparent PNG, `size-8` in Nav, `size-9` in Footer.
- **No external stock photography.** No lifestyle imagery. No third-party CDNs other than the project's own `cdn.5sdesign.art/projects/Adamdev/` path.
- **Image radius** — Inherits from card frame; banners get `rounded-2xl` via overflow-hidden parent.

## Components

### Top Navigation
**Nav bar** (`{component.nav}`) — Fixed `top-0`, `z-50`, full width. Default state: `border-b border-transparent bg-white/30 backdrop-blur-md`, padding `py-5`. Active state (`scrolled` when `window.scrollY > 12`): `border-b border-white/40 bg-white/55 shadow-[0_4px_24px_-12px_rgba(16,185,129,0.18)] backdrop-blur-xl`, padding `py-3`. Inner row uses `transition-[padding] duration-300`. Nav links inherit `text-sm text-neutral-600` and shift to `text-brand-600` on active.

### Buttons
**Primary CTA pill** (`{component.button-primary}`) — `inline-flex h-12 items-center gap-2 rounded-full bg-neutral-900 pl-6 pr-5 text-sm font-semibold text-white`. Active state: `bg-brand-600 -translate-y-0.5 shadow-lg`. Focus: `focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2`. Includes a circular arrow sub-pill `grid size-7 place-items-center rounded-full bg-white/15` that translates `translate-x-0.5` on active.

**Secondary text link** (`{component.button-secondary}`) — `inline-flex h-12 items-center rounded-full px-5 text-sm font-medium text-neutral-700`. Active state: `text-brand-600`. No background, no border — pure typographic affordance.

**Utility chip CTA** (`{component.button-utility}`) — `inline-flex h-9 items-center justify-center rounded-full bg-neutral-900 px-4 text-sm font-medium text-white`. Used for the Nav `Enroll` pill and the Courses header bundle CTA (variant `h-11 px-5 gap-1.5`).

**Outline button** (`{component.button-outline}`) — `rounded-full border border-neutral-900 bg-white/60 px-5 py-2.5 text-sm font-semibold text-neutral-900 backdrop-blur`. Used for the FAQ email CTA. Active state: `bg-neutral-900 text-white`.

### Cards & Containers
**Liquid-glass card** (`{component.glass}`) — Signature treatment. `background: linear-gradient(135deg, rgba(255,255,255,0.72), rgba(255,255,255,0.40))`, `backdrop-filter: blur(20px) saturate(1.6)`, `border: 1px solid rgba(255,255,255,0.7)`, three-layer box-shadow with emerald-tinted insets. Applied to Hero terminal, Schedule cards, course cards, About avatar frame, Register panel + bundle, FAQ list, Footer cards.

**Glass-pill chip** (`{component.glass-pill}`) — Smaller variant. `background: rgba(255,255,255,0.6)`, `backdrop-filter: blur(12px) saturate(1.4)`, two-layer shadow. Used for Hero status pill, About 10+years badge, social link pills, course tag pills, payment rows, Schedule stat tiles, Footer social circles.

**Dark glass (reserved)** (`{component.glass-dark}`) — Declared for future use. `background: linear-gradient(135deg, rgba(6,78,59,0.85), rgba(4,47,36,0.92))`, `color: #ecfdf5`. Not applied on current production page.

**Course card** (`{component.card-course}`) — `glass noise-card` wrapper, `rounded-2xl` overflow-hidden. Top section: `aspect-[16/10]` image bed on `bg-brand-50` with absolute `glass-pill` tag badge. Bottom section: `p-5`, course meta row (`Course N / 8` + price pill), title (`text-base font-semibold`), description (`text-sm text-neutral-600`), two-button footer grid (Preview outline + Enroll filled).

### Inputs & Forms
**FAQ accordion item** (`{component.input-accordion}`) — Trigger button: `flex w-full items-center justify-between gap-6 py-5 text-left`. Plus-icon circle default: `border-neutral-300 bg-white/60 text-neutral-700`. Active state (open): `border-brand-600 bg-brand-600 text-white rotate-45` (becomes ×). Body uses `grid-rows-[0fr]` → `grid-rows-[1fr]` height trick with `transition-all duration-300 ease-out` — no JS measurement.

**Inline code chip** (`{component.input-code}`) — `rounded bg-white/60 px-1.5 py-0.5 font-mono text-[13px] text-neutral-900 ring-1 ring-white/70`. Used inline in Register step 2 (`VIBE10`).

### Footer
**Footer shell** (`{component.footer}`) — `relative mt-20 overflow-hidden border-t border-white/40` + a top-to-bottom sheen `bg-gradient-to-b from-brand-50/40 via-white/60 to-white` and a single bottom-center `aurora-3` blob. Three-column grid `md:grid-cols-[1.5fr_1fr_1fr]` with Brand / Explore / Contact. Bottom row: `border-t border-white/60 pt-8 text-xs text-neutral-500` with copyright on the left and a brand-500 dot + tagline on the right.

## Do's and Don'ts

### Do
- Use the `font-bit uppercase` combo on every section h1/h2 and every numeric display.
- Set body background to `#ffffff` and let the three radial body gradients carry the green tint.
- Apply `.glass` to any floating content panel; apply `.glass-pill` to any chip-sized accent.
- Keep all accent color references inside the `brand` ramp (`{colors.brand-50}` through `{colors.brand-700}`).
- Use `cubic-bezier(0.16, 1, 0.3, 1)` and `900ms` for all entry reveals; `200ms` for press / focus.
- Reserve `font-mono` for the Hero terminal mockup and inline `<code>` chips only.
- Honor `prefers-reduced-motion: reduce` — disable reveals, aurora-drift, blink-cursor, float-slow, scroll-progress.
- Reuse `ArrowRightIcon` on every CTA (never chevrons, never external icon libraries).
- Mount `.noise-fixed` once in `App.jsx` as `<div className="noise-fixed" aria-hidden />`.
- Stagger reveals with `.delay-1` through `.delay-8` (80ms apart, linear).

### Don't
- Don't introduce orange, purple, blue, pink, or any non-emerald accent — Layer 11 names this as invariant.
- Don't substitute PP Neue Bit Bold with a generic pixel font (no "Press Start 2P"); clamp to IBM Plex Mono 700.
- Don't add Framer Motion, GSAP, anime.js, AutoAnimate, motion-one, or Lottie — the entire motion system is CSS + one IntersectionObserver hook.
- Don't add a CDN background video. Background depth is gradients + aurora blobs + SVG noise only.
- Don't use `text-orange-*`, `bg-orange-*`, or any color utility from earlier drafts — they were intentionally removed.
- Don't ship `font-bit` without `uppercase` — pixel type at mixed case reads broken.
- Don't import any icon from `lucide-react`, `@heroicons`, or any external library — all icons are inline SVG from `src/Icons.jsx`.
- Don't add a mobile menu sheet — only brand + black `Enroll` pill below `sm`.
- Don't widen `max-w-7xl` or replace `px-6` — the container is universal.
- Don't paraphrase headline / FAQ / payment-row strings — Layer 11 marks every copy string as a literal.

## Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤419px | Hero h1 at `text-6xl`, single-column grids, hide nav links |
| Phone | 420–640px | Same single-column treatment; show black `Enroll` pill only |
| Large phone | 641–735px | Course grid 1col; Schedule stat tiles wrap |
| Tablet portrait | 736–833px (≥`sm` 640) | Nav links visible (`sm:flex`); two-column grids still collapsed |
| Tablet landscape | 834–1023px | At `md:` 768 — Hero/About/Schedule/Register/FAQ switch to 2-col |
| Small desktop | 1024–1068px | At `lg:` 1024 — Courses grid expands to `lg:grid-cols-3`; headline scales `lg:text-9xl`/`lg:text-7xl` |
| Desktop | 1069–1440px | Container caps at `max-w-7xl` (1280px); all grids at full ratio |
| Wide desktop | ≥1441px | At `xl:` 1280 — Courses grid expands to `xl:grid-cols-4`; container holds at 1280px with extra side whitespace |

### Touch Targets
- Minimum target height **44px**; primary CTA pill at `h-12` (48px), utility CTA at `h-9` (36px) — paired with `px-4` so the hit-rect is comfortable.
- Social pills sized at `size-10` (40px) circle — keep ≥40px to satisfy mobile hit-area.
- FAQ trigger row at `py-5 md:py-6` so the chevron tap-zone is at least 56px tall.

### Collapsing Strategy
- **Nav** — At `<sm` hide the four text links; only brand and `Enroll` remain. No hamburger, no slide-out.
- **Hero** — Two-column becomes single; terminal stacks beneath the copy column. h1 scales `text-6xl → text-8xl → text-9xl`.
- **Schedule** — `[1.8fr_1fr]` → 1col; the info card slides below the headline card.
- **Curriculum** — Three weeks become a single column; `md:divide-x` becomes `border-b border-white/60` per article.
- **About** — `[0.75fr_1.25fr]` → 1col; avatar leads, copy follows.
- **Courses** — `xl:4 → lg:3 → sm:2 → 1col`. The header `bundle CTA` drops below the title block.
- **Register** — `[1fr_1fr]` → 1col; bundle card always full-width below the payment grid.
- **FAQ** — `[0.9fr_1.1fr]` → 1col; the sticky left column releases sticky on mobile.
- **Footer** — `[1.5fr_1fr_1fr]` → 1col; brand block leads.

### Image Behavior
- All course images use `loading="lazy"` and `draggable={false}`.
- Aspect ratios are locked by `aspect-[16/10]` (courses) / `aspect-[4/5]` (avatar) — no width/height attributes required.
- `object-cover` on every image; no `srcset` is currently authored (single-DPR source).
- Course banner active state: `transition-transform duration-500 group-hover:scale-105` on the `<img>`.
- Avatar active state: `transition-transform duration-[1.4s] ease-out hover:scale-105` — deliberately slower for a more cinematic motion.

## Iteration Guide

1. **Extend one component at a time.** When adding a new section, reuse existing `.glass`, `.glass-pill`, `.noise-card`, `.aurora` classes — don't invent a new card style.
2. **Variants live in components, not utilities.** If you need a darker glass for a future surface, use `.glass-dark` (already declared) — don't compose new opacity layers inline.
3. **Reference tokens, never literals.** When documenting a new color in this file, write `{colors.brand-600}`, not `#059669`. The token is the contract.
4. **Never document hover.** Per Apple convention, only `default`, `active`, and `focus` states are surfaced in this file. Hover behavior lives in code.
5. **Display vs body family is non-negotiable.** Headlines and numerics are `font-bit`; everything else is `font-sans`. Don't shift display copy into Inter "for legibility" — the pixel face is a signature.
6. **Shadows are emerald-tinted, not neutral.** A new card shadow must use `rgba(16,185,129, ...)` — a `rgba(0,0,0, ...)` shadow breaks the brand light.
7. **Chrome vs surface alternative.** Fixed chrome (nav, scroll-progress) uses `bg-white/55` + `backdrop-blur-xl`; floating surfaces use `.glass` with the 135deg gradient. Don't blur the chrome at 20px or thicken the surface at 12px — the two scales mean different things.

## Known Gaps

- **Validation states for forms** — The page has no real form (Register is content-only), so no error / success / disabled tokens are surfaced.
- **Dark mode** — Not in scope. Adam.dev is single-theme; `.glass-dark` is declared but unused. A dark-mode treatment would need a parallel token set.
- **PP Mondwest application** — The face is loaded via `@font-face` but **not applied** on any production element. Reserved for future editorial sections (long-form essays / about-the-author bios).
- **Reserved icon slots** — `PlayIcon`, `ChevronDownIcon`, `VideoCameraIcon`, `LockOpenIcon`, `ChatBubbleIcon` are exported from `src/Icons.jsx` but not currently rendered on any production surface — their final placement is not surfaced in analyzed pages.
- **`srcset` / responsive images** — No `srcset` is authored for course banners or the avatar; high-DPR delivery is not yet documented.
- **Form input tokens (text input, select, textarea)** — There is no traditional input field on the production page; tokens for filled / focused / errored inputs are not surfaced in analyzed pages.
