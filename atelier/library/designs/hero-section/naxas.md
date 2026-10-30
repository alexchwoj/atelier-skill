---
version: "1"
name: "NAXAS — Orbital Intelligence Hero"
description: "A pure-white, light-mode hero for an earth-observation startup. A drag-interactive cobe WebGL globe drifts low-center behind black Inter typography, edge-faded into the page so the planet appears to float. A single shiny-blue (#2563EB → #64CEFB) gradient sweep travels across the headline; everything else is black on white. No purple, no neon, no dark page."
colors:
  page: "#FFFFFF"
  ink: "#000000"
  body-text: "rgba(0,0,0,0.7)"
  muted-text: "rgba(0,0,0,0.6)"
  hairline-desktop: "#D1D5DB (Tailwind gray-300)"
  hairline-mobile: "#E5E7EB (Tailwind gray-200)"
  cta-fill: "#000000"
  cta-fill-active: "#111827 (Tailwind gray-900)"
  cta-text: "#FFFFFF"
  shine-base: "#2563EB"
  shine-highlight: "#64CEFB"
  globe-marker: "[0.145, 0.388, 0.922] (= #2563EB)"
  globe-base: "[0.95, 0.95, 0.97]"
  globe-glow: "[0.82, 0.82, 0.86]"
typography:
  display:
    fontFamily: "Inter"
    weights: "300 / 400 / 500 / 600 / 700"
    role: "the only typeface — headline, nav, body, eyebrow, CTA. Antialiased."
spacing:
  base: "Tailwind 3 default (4px)"
  container: "max-w-7xl, px-6 sm:px-8"
  headline-leading: "0.85 with tracking-tighter"
  globe-offset: "translate-y-[8%] from viewport center"
rounded:
  pill: "9999px (nav pill, CTA, mobile hamburger, logo ring)"
  panel-sm: "0.75rem / rounded-xl (mobile menu link rows)"
  panel-md: "1rem / rounded-2xl (mobile menu dropdown)"
components:
  ShinyText: "framer-motion span — linear-gradient(100deg, base 0/35%, shine 50%, base 65/100%) on backgroundSize 250% 100%, animating backgroundPosition 150% → -50% on a 3s infinite linear loop. background-clip:text + transparent fill carves the highlight into the glyphs."
  Globe: "cobe (^0.6.5) WebGL canvas. dark:0, diffuse:0.8, mapBrightness:1.8, mapBaseBrightness:0.01, baseColor:[0.95,0.95,0.97], markerColor:[0.145,0.388,0.922], glowColor:[0.82,0.82,0.86]. Auto-rotates phi += 0.005/frame; horizontal drag feeds useMotionValue → useSpring({mass:1, stiffness:280, damping:40}). Retina canvas buffer = offsetWidth × 2."
  edge-fade-mask: "radial-gradient(circle at center, transparent 0%, rgba(255,255,255,0.6) 55%, #ffffff 75%) — melts the globe edge into the page."
  legibility-wash: "bg-gradient-to-b from-white/70 via-transparent to-white/90 — vertical wash that keeps nav + headline crisp over the glowing globe."
  CTA: "Black pill, 6/3 (md:8/4) padding, white text, shadow-lg shadow-black/20. ArrowRight slides +translate-x-1 on group hover."
---

# NAXAS — Orbital Intelligence Hero

> Fivefold showcase. Pairs with the NAXAS prompt. Use this file to keep NAXAS's light-orbital restraint when you add new pages — it should always read as a calm earth-observation product, never a generic space landing.

## Overview

NAXAS is **a single-screen hero for an orbital intelligence platform that gives organizations a real-time, three-dimensional view of the entire planet.** Pure-white page, black Inter typography, a softly glowing cobe globe drifting low-center behind the headline. The only color on the page is the blue shine that travels across the words "Whole World in 3D." — everything else is black on white.

The governing decision: **the planet is the asset, not the chrome.** Most space and satellite landings reach for the obvious vocabulary — dark indigo, neon orbits, terminal greens, starfield backgrounds, gradient meshes. NAXAS refuses every one of those. It puts a literal globe on the page — interactive, draggable, springy — and edge-fades it into the white background so the planet appears to float rather than sit inside a window. The only motion is two things at once: the auto-rotation of the globe and a single 3-second linear highlight sweep across two words of the headline. There is no scroll, no parallax, no second section. The hero is the entire page (`h-screen`, `overflow-hidden`). The bet: an earth-observation product earns trust by looking calm, precise, and honest about what it does — not by performing space-ness.

The system extends across surfaces by repetition, not by addition. Any new NAXAS page — pricing, missions, coverage, contact — must keep the same primitives: pure white background, black Inter at varying opacities, one accent moment per page (and only one), pill-shape geometry for chrome, sharp typographic edges everywhere else. The cobe globe stays reserved for the hero; secondary surfaces inherit the white-on-white restraint without inheriting the planet. The discipline is: if a new page can't be built with these tokens alone, it isn't NAXAS.

**Key Characteristics:**
- **Pure-white page** (`{colors.page}` — #FFFFFF) with **black text** (`{colors.ink}` — #000000) at varying opacities. No dark mode, no theming layer, no purple, no neon.
- **One typeface** — **Inter** (300–700). The hero contains zero serif, zero mono, zero secondary family.
- **One color accent, deployed once** — the **#2563EB → #64CEFB** shine across "Whole World in 3D.". Everything else (nav, eyebrow, body, CTA) is black/white/grey.
- **The globe is the background asset.** No video, no static image. A cobe WebGL canvas, auto-rotating at `phi += 0.005` per frame, drag-interactive with a framer-motion spring (mass 1, stiffness 280, damping 40), faded in over 1000ms 100ms after mount.
- **Edge-fade radial mask** dissolves the globe into the page — `radial-gradient(circle at center, transparent 0%, rgba(255,255,255,0.6) 55%, #ffffff 75%)`. The planet has no visible frame.
- **Pointer-events trick** — the foreground content is `pointer-events-none` so drags pass through to the globe canvas underneath; only the header and the CTA `<a>` opt back in with `pointer-events-auto`.
- **Pill geometry for chrome** — every interactive piece (nav pill, nav links, mobile hamburger, primary CTA, logo ring) is `rounded-full`. Sharp typographic edges live only in the headline.
- **One viewport tall.** `h-screen`, `overflow-hidden`. No second section, no scroll-down arrow, no footer.

## Colors

> **Source pages analyzed:** Hero (the entire NAXAS page). Scope: a single-screen, single-theme system shipped as literal hex values — no token layer, no theme switch, no dark mode.

### Surface

- **Page background** (`{colors.page}` — `#FFFFFF`): The whole `<section>` and `body`. Pure white because the globe's edge-fade mask resolves to pure #FFFFFF — anything off-white would leave a visible seam where the planet meets the page.
- **Legibility wash**: `bg-gradient-to-b from-white/70 via-transparent to-white/90` — vertical gradient placed between the globe and the foreground so top and bottom of the viewport stay readable while the middle stays transparent.

### Text

- **Primary text** (`{colors.ink}` — `#000000`): Headline line 1 ("See the"), logo wordmark, full-strength state for nav and links.
- **Body text** (`{colors.body-text}` — `rgba(0,0,0,0.7)`): The two intro-row paragraphs and the mobile menu link rows. Soft enough to recede behind the headline, dark enough to stay readable over the legibility wash.
- **Muted text** (`{colors.muted-text}` — `rgba(0,0,0,0.6)`): Desktop nav links (resting) and the "Next Launch Window Opening Soon" eyebrow. Upgrades to full `{colors.ink}` on hover via `transition-colors duration-200`.

### Hairlines & Borders

- **Desktop hairline** (`{colors.hairline-desktop}` — `#D1D5DB` / Tailwind `gray-300`): Desktop nav pill border + the 36×36 mobile hamburger ring.
- **Mobile hairline** (`{colors.hairline-mobile}` — `#E5E7EB` / Tailwind `gray-200`): Mobile dropdown panel border. Softer than the desktop hairline because the panel sits on `bg-white/80 backdrop-blur-md`, which needs a quieter edge.
- **Logo ring** — `#000000` at `2px` (`border-2 border-black`). The only black hairline in the system; everything else is grey.

### Chrome & CTA

- **CTA fill** (`{colors.cta-fill}` — `#000000`), active `{colors.cta-fill-active}` — `#111827` / Tailwind `gray-900`. Drop shadow: `shadow-lg shadow-black/20`.
- **CTA text** (`{colors.cta-text}` — `#FFFFFF`): label + `ArrowRight` icon glyph.

### Brand Accent (the only color on the page)

- **Shine base** (`{colors.shine-base}` — `#2563EB`): Outer stops of the headline gradient (0%, 35%, 65%, 100%). Also the literal RGB of the globe marker color `[0.145, 0.388, 0.922]`.
- **Shine highlight** (`{colors.shine-highlight}` — `#64CEFB`): The single middle stop at 50% — the travelling band of light across "Whole World in 3D.". Appears exactly once in the page, inside one gradient.

### Globe Colors (cobe array literals)

- **Globe base** (`{colors.globe-base}` — `[0.95, 0.95, 0.97]`): Landmass tone. Locked below pure white so the planet reads on a #FFFFFF page; anything higher washes the globe to invisibility.
- **Globe marker** (`{colors.globe-marker}` — `[0.145, 0.388, 0.922]` = `#2563EB`): City dots — Manila, Mumbai, Dhaka, Cairo, Beijing, São Paulo, Mexico City, New York, Osaka, Istanbul, London, Paris.
- **Globe glow** (`{colors.globe-glow}` — `[0.82, 0.82, 0.86]`): Atmosphere halo.

**Constraint (verbatim from the prompt):** do not use purple, indigo, neon green, or any dark page background anywhere. The blue tones live inside the headline and the globe markers — never on a button, never on a border, never on a background.

## Typography

### Font Family

- **Inter** (weights 300 / 400 / 500 / 600 / 700) — loaded from Google Fonts in `index.html`, mapped to `font-family: 'Inter', system-ui, -apple-system, sans-serif` and `tailwind.config.js → theme.extend.fontFamily.sans`. `-webkit-font-smoothing: antialiased`, `-moz-osx-font-smoothing: grayscale`.
- **OpenType features:** none enabled explicitly. Inter ships tabular figures and contextual alternates by default; the design uses the defaults — no `font-variant-numeric` overrides, no stylistic sets.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `headline` | `text-5xl → 6xl → 7xl → 8xl → 9xl` | 500 (`font-medium`) | `0.85` | `tracking-tighter` | "See the / Whole World in 3D." `<h1>` |
| `eyebrow` | `text-xs md:text-sm` | 400 | default | `tracking-tight`, uppercase | "Next Launch Window Opening Soon" |
| `intro-left` | `text-sm md:text-base` | 400 | default | normal | Left intro paragraph |
| `intro-right` | `text-sm md:text-base` | 500 (`font-medium`) | default | normal | Right intro paragraph (counter) |
| `logo-wordmark` | `text-base` | 600 (`font-semibold`) | default | `tracking-tight` | "NAXAS" beside the logo mark |
| `nav-link` | `text-sm` | 400 | default | normal | Desktop nav pill links |
| `mobile-link` | `text-sm` | 400 | default | normal | Mobile dropdown rows |
| `cta-label` | `text-sm md:text-base` | 500 (`font-medium`) | default | normal | "Request Satellite Access" |

### Principles

- **One family only.** Inter carries every role — headline, eyebrow, body, nav, CTA. There is no serif partner, no mono accent, no display alternate.
- **Negative tracking at display sizes.** The headline locks `tracking-tighter` with `leading-[0.85]` — the two lines stack so tightly they nearly touch, making the type read as a single typographic block.
- **Weight 500 is the workhorse.** The headline is `font-medium`, the right intro line is `font-medium`, the CTA is `font-medium`. Weight 700 is loaded but unused — reserved for future surfaces.
- **Weights 300 and 400 are loaded but reserved.** They are available for editorial copy on secondary pages; the hero itself does not use 300 anywhere.
- **Body steps up at `md:`.** Every body / eyebrow / nav size doubles its breakpoint behavior at `md:` — `text-xs → text-sm`, `text-sm → text-base`. Nothing scales linearly between.
- **No italic, no underline.** Hover affordances are color-only (`text-black/60 → text-black`); links never gain a baseline rule.
- **Uppercase is reserved for the eyebrow.** The "Next Launch Window Opening Soon" line is the only uppercase string on the page.

### Note on Font Substitutes

If Inter cannot load, fall back to `system-ui, -apple-system, sans-serif` (already in the stack). System fonts run slightly wider at display sizes — when substituting, tighten `tracking-tighter` to a manually authored `letter-spacing: -0.03em` and verify the two headline lines still stack without collision at `lg:text-8xl`. **Never** swap to a similar-but-different sans (Manrope, Geist, Plus Jakarta). If a requested Inter weight is unavailable in the loaded subset, clamp to the nearest valid weight and note the substitution as a code comment — never synthesize.

## Layout

### Spacing System

- **Base unit:** Tailwind 3 default (`4px` step). Every spacing value resolves to a multiple of 4.
- **Container horizontal padding:** `px-6 sm:px-8` (24px → 32px at `sm:`).
- **Container max width:** `max-w-7xl` (1280px).
- **Intro row top padding:** `pt-10 md:pt-14` (40px → 56px).
- **Eyebrow → headline:** `mb-5` (20px) below the eyebrow.
- **Headline → CTA:** `mt-10` (40px) above the CTA.
- **Bottom spacer:** `h-10 md:h-16` (40px → 64px).
- **Logo gap:** `gap-2.5` (10px) between mark and wordmark.
- **CTA padding:** `px-6 py-3 md:px-8 md:py-4` (24×12px → 32×16px).
- **Nav pill internal padding:** `px-2 py-1.5` (8×6px); link rows `px-4 py-1.5` (16×6px).
- **Mobile dropdown:** panel `p-3` (12px); rows `px-4 py-2.5` (16×10px); offset from hamburger `mt-3` (12px).

### Grid & Container

- **Hero section:** `<section className="relative h-screen w-full overflow-hidden bg-white text-black">` — exactly one viewport tall.
- **Content container:** `mx-auto w-full max-w-7xl px-6 sm:px-8`.
- **Intro grid:** `grid grid-cols-1 gap-6 lg:grid-cols-2`. Below `lg`, intro stacks; at `lg` and above, it splits 50/50 with the right cell right-aligned (`lg:text-right`).
- **Foreground column:** a vertical flex column — header → intro grid → centered hero block (`flex-1`) → bottom spacer.
- **Globe wrapper width:** `min(820px, 96vw)` mobile → `980px` at `md:` → `1150px` at `lg:`. Aspect ratio always 1. Offset `translate-y-[8%]` from viewport center.

### Whitespace Philosophy

Whitespace on NAXAS is not negative space — it is the planet. The pure-white page extends through the globe via the edge-fade radial mask, so the air around the headline and the air inside the globe's atmosphere read as the same surface. The 8% downward globe offset, the `flex-1` centered hero block, and the `h-10 md:h-16` bottom spacer all serve one job: leave enough quiet around the words so the only motion on the page — a 3-second sweep of light — registers as the loudest thing in the room. Nothing crowds the headline. Nothing competes with the planet. The page breathes because it refuses to fill its own corners.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body text, eyebrow, intro paragraphs |
| Soft hairline | `border border-gray-300` / `border-gray-200` | Desktop nav pill, mobile hamburger, mobile dropdown |
| Backdrop blur | `bg-white/40 backdrop-blur-sm` (nav pill) · `bg-white/80 backdrop-blur-md` (mobile menu) | Translucent chrome floating over the globe |
| Product shadow | `shadow-lg shadow-black/20` | Primary CTA only — the single drop-shadow on the page |

**Shadow philosophy.** NAXAS uses exactly one drop shadow, and it lives on the CTA. The CTA is the only element the user is meant to act on, so the only z-axis lift on the page belongs to it. The nav pill and mobile menu earn their depth from `backdrop-blur` over the moving globe, not from shadows — translucency reads as floating in the same way a HUD reads as floating. The globe itself has no shadow; its sense of dimension comes entirely from the cobe `glowColor` array `[0.82, 0.82, 0.86]` and the edge-fade mask.

**Decorative Depth:**
- **Edge-fade radial mask** — the single decorative depth effect. `radial-gradient(circle at center, transparent 0%, rgba(255,255,255,0.6) 55%, #ffffff 75%)` over the globe canvas, `pointer-events-none`, melting the planet edge into the page.
- **Legibility wash** — `bg-gradient-to-b from-white/70 via-transparent to-white/90` keeps the top (nav) and bottom (CTA) readable while the middle stays transparent for the globe.
- **Backdrop blur** — `backdrop-blur-sm` (nav pill) and `backdrop-blur-md` (mobile menu) only. Never on the hero block, never on the CTA, never on the headline.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `none` | `0` | Headline text (no rounded clipping) |
| `panel-sm` | `0.75rem` / `rounded-xl` | Mobile menu link rows |
| `panel-md` | `1rem` / `rounded-2xl` | Mobile menu dropdown panel |
| `pill` | `9999px` / `rounded-full` | Nav pill, nav links, CTA, mobile hamburger, logo ring, logo dot |

The system uses **pill-or-panel** geometry only — there is no `rounded-sm`, no `rounded-md`, no slightly-rounded card. Every chrome element either commits to a perfect pill or to a soft 12–16px panel; nothing sits between.

### Photography Geometry

- **There is no photography.** The page contains zero raster images, zero stock photos, zero hero video.
- **The hero "asset" is the cobe globe** — a procedurally rendered WebGL canvas built from the dot-map texture cobe ships with, plus 12 city markers at sizes 0.03 → 0.07.
- **Aspect ratio:** the globe wrapper is `aspect-square` (`1:1`) at all breakpoints. The canvas inherits the same square.
- **Retina behavior:** `devicePixelRatio: 2`; canvas buffer = `offsetWidth × 2`, re-synced on `resize`. `contain: layout paint size` on both wrapper and canvas to isolate paint.
- **Favicon** (`public/satellite.svg`) — a small blue-ringed dot that mirrors the logo mark; the only static raster/vector asset on disk.
- **Loading:** the globe canvas starts at `opacity: 0`; a 100ms timeout flips it to `opacity: 1`, transitioning over 1000ms ease. No lazy-load library is used — there are no other images to lazy-load.

## Components

### Top Navigation

**Logo** `{component.logo}` — `<a>` with `gap-2.5`. Mark: `h-7 w-7 rounded-full border-2 border-black` (28×28 black-ringed circle) with a centered `h-2.5 w-2.5 rounded-full bg-black` dot. Wordmark: `text-base font-semibold tracking-tight text-black` reading "NAXAS". No focus ring override — default browser focus retained.

**Desktop nav pill** `{component.nav-pill}` — `<div className="hidden items-center rounded-full border border-gray-300 bg-white/40 px-2 py-1.5 backdrop-blur-sm lg:flex">`. Hidden below `lg`.
- **Default state:** translucent white pill (`bg-white/40 backdrop-blur-sm`) hairlined with `{colors.hairline-desktop}`.
- **Link default:** `rounded-full px-4 py-1.5 text-sm text-black/60` (`{colors.muted-text}`).
- **Link active:** `text-black` (`{colors.ink}`) via `transition-colors duration-200`.
- **Link focus:** default browser focus ring — never strip `outline`.
- **Contact us:** the final link adds `<ArrowUpRight className="h-3.5 w-3.5" />` and `ml-1 gap-1`.

**Mobile hamburger** `{component.hamburger}` — `<button className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-black/60 lg:hidden">`. Toggles `<Menu className="h-5 w-5" />` / `<X className="h-5 w-5" />`. Default `text-black/60`; active `text-black`.

**Mobile dropdown** `{component.mobile-menu}` — `<div className="mt-3 flex flex-col rounded-2xl border border-gray-200 bg-white/80 p-3 backdrop-blur-md lg:hidden">`. Link rows: `rounded-xl px-4 py-2.5 text-sm text-black/70`; active `bg-black/5 text-black`.

### Buttons

**Primary CTA** `{component.button-primary}` — `<a className="group pointer-events-auto mt-10 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white shadow-lg shadow-black/20 transition-colors duration-300 md:px-8 md:py-4 md:text-base">`. Label: "Request Satellite Access". Trailing `<ArrowRight className="h-4 w-4">` slides `translate-x-1` on `group-hover`.
- **Default state:** `bg-black` with `shadow-lg shadow-black/20`.
- **Active state:** `bg-gray-900` (`{colors.cta-fill-active}`).
- **Focus state:** default browser focus ring retained.

**Secondary "Contact us" link** `{component.button-secondary}` — the last nav-pill item with `<ArrowUpRight className="h-3.5 w-3.5" />`. Inherits the nav-link tokens; treated as a button-of-record because of the trailing icon.

**Utility hamburger toggle** `{component.button-utility}` — see `{component.hamburger}` above; a 36×36 pill that swaps `Menu` / `X`. The system's only icon-only button.

### Cards & Containers

**Light translucent tile** `{component.card-light-tile}` — the desktop nav pill: `rounded-full border border-gray-300 bg-white/40 backdrop-blur-sm`. The reference pattern for any future floating chrome over the globe.

**Soft dropdown panel** `{component.card-dropdown}` — the mobile menu: `rounded-2xl border border-gray-200 bg-white/80 p-3 backdrop-blur-md`. Reference pattern for any future stacked menu / popover.

**Utility row** `{component.card-utility-row}` — the mobile dropdown link row: `rounded-xl px-4 py-2.5 text-sm text-black/70`. Active `bg-black/5 text-black`. Reference pattern for any future list-of-actions inside a panel.

### Inputs & Forms

**Input (placeholder spec)** `{component.input-default}` — **not surfaced in analyzed pages.** The hero contains no `<input>` element. If a future surface needs an input, it must inherit the system's pill-or-panel rule: pill geometry (`rounded-full`) for inline inputs, panel geometry (`rounded-xl`, `border-gray-200`, `bg-white/80`) for stacked form fields. Body text inside any input is `text-sm md:text-base text-black/70`; placeholder `text-black/40`. Focus state: keep the default browser focus ring or replace with a 2px `#2563EB` outline-offset 2.

### Footer

**Footer (placeholder spec)** `{component.footer}` — **not surfaced in analyzed pages.** The hero is `h-screen overflow-hidden` with no footer, no scroll-down arrow, and no second section. If a future NAXAS surface requires a footer, it must remain text-only (no decorative depth, no shadow), use the same `max-w-7xl px-6 sm:px-8` container, and lean on the body / muted text tokens — never introduce a new color, never break the pill-or-panel shape rule.

## Do's and Don'ts

### Do

- **Use Inter and only Inter.** Headline, body, nav, eyebrow, CTA — all one family.
- **Reserve the blue shine for one moment per page.** On the hero, that moment is "Whole World in 3D." Nothing else gets `{colors.shine-base}` → `{colors.shine-highlight}`.
- **Set the page background to literal `#FFFFFF`.** The edge-fade mask resolves to pure white; any off-white leaks a visible seam.
- **Keep chrome translucent over the globe.** Use `bg-white/40 backdrop-blur-sm` (pill) or `bg-white/80 backdrop-blur-md` (panel) — never solid white.
- **Apply `pointer-events-auto` only on the header and CTA.** The foreground wrapper stays `pointer-events-none` so the globe stays draggable through empty space.
- **Reserve `shadow-lg shadow-black/20` for the CTA.** It is the only z-axis lift in the system.
- **Keep the headline at `leading-[0.85] tracking-tighter`.** The two lines must stack tightly enough to read as one block.
- **Respect `prefers-reduced-motion`.** Shine sweep resolves to a static gradient, globe fade-in is skipped, auto-rotation may pause. Drag remains.
- **Use the locked lucide-react set only** — `ArrowUpRight`, `ArrowRight`, `Menu`, `X`. Reject any other icon name.
- **Clamp unavailable Inter weights to the nearest valid weight** and note the substitution as a code comment — never synthesize.

### Don't

- **Don't introduce a dark mode, a theme switch, or a token layer.** NAXAS ships literal hex values.
- **Don't use purple, indigo, neon green, or any dark page background anywhere** (verbatim prompt constraint).
- **Don't put the shine color on a button, a border, or a background.** It lives in one headline gradient and one cobe marker array.
- **Don't add a second section, a scroll-down arrow, or a footer to the hero.** The page is `h-screen overflow-hidden`.
- **Don't add a video, a static image, or a starfield background.** The globe is the asset.
- **Don't substitute Inter** with a "similar" sans (Manrope, Geist, Plus Jakarta).
- **Don't round the exact values** — `#2563EB`, `#64CEFB`, `[0.95,0.95,0.97]`, `[0.145,0.388,0.922]`, `[0.82,0.82,0.86]` are exact.
- **Don't change the globe physics** — `phi += 0.005`, spring `{mass:1, stiffness:280, damping:40}`, mouse divisor 200, touch divisor 100, fade-in 1000ms after 100ms.
- **Don't shorten or reword the copy** — every string in the prompt is verbatim, including the space before `!` in "…Real Time !" and the em-dash in the intro.
- **Don't strip the default focus outline** without replacement; nav, hamburger, CTA, and globe canvas must all remain keyboard-reachable.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤419 | Headline `text-5xl`, globe `min(820px,96vw)`, intro stacked, mobile hamburger visible, dropdown panel for nav |
| Phone | 420–639 | Same as small phone; container padding `px-6` |
| Large phone | 640–735 (`sm:`) | Headline `text-6xl`, container padding `px-8`, body still stacked |
| Tablet portrait | 736–767 | Same as large phone; intro grid still 1 column |
| Tablet landscape | 768–1023 (`md:`) | Headline `text-7xl`, globe wrapper `980px`, intro padding `pt-14`, body `text-base`, CTA `px-8 py-4` |
| Small desktop | 1024–1067 (`lg:`) | Headline `text-8xl`, globe wrapper `1150px`, desktop nav pill replaces hamburger, intro grid becomes 2 columns (right cell `lg:text-right`) |
| Desktop | 1068–1279 | Same as small desktop; nav pill in full |
| Wide desktop | ≥1280 (`xl:`) | Headline `text-9xl`; everything else identical to desktop |

### Touch Targets

- **Minimum size:** 36×36px for the mobile hamburger (`h-9 w-9`), 40+px for the CTA at `py-3 px-6` (≈48px tall).
- **Nav pill link rows:** `py-1.5 px-4` — comfortable for pointer, marginal for thumb; on mobile the pill is hidden and replaced with the 40px+ dropdown rows (`py-2.5 px-4`).
- **CTA at `md:`:** `px-8 py-4` (≈56px tall) — comfortably above the 44px iOS minimum.
- **Globe canvas:** the entire square is a touch target for horizontal drag. The CTA sits above it with `pointer-events-auto` and is reachable from the same surface.

### Collapsing Strategy

- **Nav:** desktop pill (`lg:flex`) → mobile hamburger (`lg:hidden`) + dropdown. Same link list, different geometry.
- **Intro grid:** 2 columns at `lg:` → 1 column below `lg:`. The right cell loses `lg:text-right` and stacks left-aligned.
- **Headline:** scales `text-5xl → 6xl → 7xl → 8xl → 9xl` across `sm md lg xl`. Line-height and tracking stay constant; only the size step changes.
- **Body / eyebrow:** `text-sm text-xs` mobile → `text-base text-sm` at `md:`. No `lg:` step.
- **CTA:** `px-6 py-3 text-sm` mobile → `px-8 py-4 text-base` at `md:`. Same shape, same color, larger touch target.
- **Globe wrapper:** `min(820px,96vw) → 980px (md:) → 1150px (lg:)`. The 8% downward offset is constant across breakpoints.

### Image Behavior

- **No `srcset` is shipped** — the page has no `<img>` elements. The cobe canvas re-syncs its buffer to `offsetWidth × 2` on `resize`, so the canvas itself is the responsive "image."
- **Aspect ratio:** the globe wrapper is `aspect-square` at every breakpoint; the canvas inherits.
- **Lazy-loading:** the globe canvas mounts immediately but holds `opacity: 0` for 100ms, then transitions to `opacity: 1` over 1000ms ease. This is the system's only deferred-paint behavior.
- **Favicon:** `public/satellite.svg` is a static vector; no responsive variants.

## Iteration Guide

1. **One accent per page.** When extending the system, allow exactly one moment of `{colors.shine-base}` → `{colors.shine-highlight}` per surface — and only in type, never in chrome.
2. **Pill or panel, never in between.** New chrome must commit to `rounded-full` or `rounded-xl`/`rounded-2xl`. No `rounded-md`. No `rounded-lg` on a button.
3. **Use token refs, never raw hex twice.** Reference `{colors.ink}`, `{colors.body-text}`, `{colors.muted-text}` etc. — if you find yourself typing `rgba(0,0,0,0.7)` in two places, promote it to a token in this file first.
4. **Never document hover.** State documentation covers default / active / focus only — hover micro-states live in code (`transition-colors duration-200`) and never in the design system narrative.
5. **Display vs body family rule.** Inter handles both — but the headline always uses `font-medium leading-[0.85] tracking-tighter`. Body never inherits those values.
6. **One shadow only.** `shadow-lg shadow-black/20` is reserved for the primary CTA. New components earn depth from translucency + backdrop blur, not from shadows.
7. **Chrome vs surface.** Translucent white (`bg-white/40` / `bg-white/80`) belongs to chrome that floats over the globe. Solid `#FFFFFF` belongs to the page itself. Never mix.

## Known Gaps

- **No form input spec.** The hero contains no `<input>`; the input section above is a placeholder. When a real input is needed, the system must be extended with validation states (default / focus / error / success) — **not surfaced in analyzed pages**.
- **No footer spec.** The hero is `h-screen overflow-hidden`; no footer was designed. Future surfaces requiring a footer need explicit tokens.
- **No dark mode.** The system explicitly forbids dark backgrounds. If a future need arises (OS-level dark mode parity), it is undefined — **not surfaced in analyzed pages**.
- **No data-visualization tokens.** The page has no charts, no tables, no metrics — only typography over a globe. A future dashboard or coverage page would need new tokens for series color, axis hairlines, and grid spacing.
- **No multi-page navigation behavior.** The nav links exist but route nowhere; transition behavior between NAXAS pages (route change, view transition, page mount fade) is **not surfaced in analyzed pages**.
- **No error / empty / loading states for the globe.** WebGL unavailable, canvas mount failure, slow connection — fallback behavior is undefined beyond the 1000ms opacity transition.
