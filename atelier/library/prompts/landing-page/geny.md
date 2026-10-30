# Geny — AI Video Generation Studio · Fivefold Prompt

## LAYER 0 — META

```yaml
asset_id: geny-ai-video-studio-01
category: landing-page
aesthetic: pitch-black-cinematic · full-bleed-media · marquee
industry: ai / video-generation-studio
tone: cinematic · confident · minimal
preview_video: https://cdn.5sdesign.art/projects/geny.mp4
license:         free
version: 1.0
last_updated: 2026-07-02
notes: Dark single-page studio landing. Oversized uppercase grotesque headlines,
 10px media gutters, a white marquee band with red dots as the only light break,
 masked-line reveals throughout, and a giant 21vw footer wordmark on scrub.
```

---

## LAYER 1 — OPENING DECLARATION

Build a **single-page landing** for **Geny** — an **AI video generation studio** with the line *"We generate videos."*

Use the following **pinned** tech stack (do not substitute):

- **React 19 + TypeScript + Vite 6** (`react ^19.1.0`, `vite ^6.3.5`, `typescript ~5.8.3`, `@vitejs/plugin-react ^4.5.0`).
- **Tailwind CSS 4** via `@tailwindcss/vite` (`^4.1.8`) — all tokens live in a CSS `@theme` block. No `tailwind.config`, no PostCSS setup.
- **GSAP 3.13** (`gsap ^3.13.0` — core + `ScrollTrigger` + `SplitText`) with **`@gsap/react ^2.1.2`** (`useGSAP`).
- **Lenis** smooth scroll (`lenis ^1.3.4`).
- **`@fontsource-variable/archivo ^5.2.5`** — the font is self-hosted. No Google Fonts link, no CDN font.

The aesthetic is a **pitch-black cinematic studio site**: oversized uppercase grotesque headlines, full-bleed media inside thin 10px gutters with slightly rounded corners, and one white marquee band with red dots as the only break in the dark. `#0a0a0a` is the global background. Default text color is `#ffffff`. The red `#ea3323` appears **only** as the ticker dots; the green `#16a34a` appears **only** as the media-slot fallback and text selection.

**Do not:** use purple, indigo, blue, gradient backgrounds, box shadows, glassmorphism, icon libraries, extra sections, or a second font family anywhere.

Dev server port: `5910`. Build script: `tsc --noEmit && vite build`. Mount with `StrictMode` in `src/main.tsx` — all GSAP work runs through `useGSAP`, so the double-invoke is safe.

### Project structure (create exactly)

```text
index.html                  → head per Layer 2
vite.config.ts              → plugins: [react(), tailwindcss()]; server.port 5910
public/
  favicon.svg               → 64×64 rounded #0a0a0a square, extrabold "G" in #16a34a
src/
  main.tsx                  → StrictMode root
  index.css                 → Layer 3 + Layer 4 verbatim
  App.tsx                   → Nav + <main> sections + Footer, smooth-scroll/reveal init
  data/content.ts           → ALL copy + media URLs (Layer 7 Block 7)
  lib/gsapSetup.ts          → registerPlugin(ScrollTrigger, SplitText, useGSAP), re-export
  lib/scroll.ts             → Lenis singleton + scrollToTarget()
  lib/reveal.ts             → data-reveal / data-mask-lines / data-lines systems
  components/
    Nav.tsx  Hero.tsx  Intro.tsx  ShowcaseGrid.tsx  Ticker.tsx
    Studio.tsx  Work.tsx  Journal.tsx  Footer.tsx  Media.tsx
```

---

## LAYER 2 — FONTS

One family sitewide: **Archivo Variable** (variable weight 100–900; the page uses 500–800). Loaded from the npm package at the top of `index.css`:

```css
@import "tailwindcss";
@import "@fontsource-variable/archivo";
```

Registered as the sans stack in `@theme` (Layer 3):

```css
--font-sans: "Archivo Variable", ui-sans-serif, system-ui, sans-serif;
```

Body renders `font-sans antialiased`. Every display headline is `font-extrabold uppercase` with negative tracking — exact clamp sizes and tracking per section in Layer 7. Do not load a second family, and do not swap in a static Archivo cut.

`index.html` head:

```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Geny® — AI Video Generation Studio</title>
<meta
  name="description"
  content="Geny is an AI video generation studio. We generate everything from films to product videos — quality you can trust, delivered around the clock."
/>
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```

---

## LAYER 3 — DESIGN TOKENS (Tailwind v4 `@theme` in `src/index.css`)

```css
@theme {
  --font-sans: "Archivo Variable", ui-sans-serif, system-ui, sans-serif;

  --color-ink: #0a0a0a;       /* page background */
  --color-ink-soft: #0d0d0d;  /* showcase card background */
  --color-paper: #ffffff;     /* ticker band */
  --color-accent: #ea3323;    /* red ticker dots — the ONLY accent */
  --color-slot: #16a34a;      /* green media-slot fallback */
  --color-line: #262626;      /* hairline borders */
}
```

White-opacity steps used throughout: `text-white/95` (intro statement), `/80` (carousel counter), `/70` (Back to top), `/45` (work meta), `/40` (captions, dates, legal).

---

## LAYER 4 — CUSTOM CSS UTILITIES (the design DNA — paste verbatim)

Everything below sits under the `@theme` block in `src/index.css`:

```css
/* Semantic motion tokens */
:root {
  --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --dur-fast: 250ms;
  --dur-med: 600ms;
}

html {
  background: var(--color-ink);
}

body {
  @apply bg-ink font-sans text-white antialiased;
  overflow-x: clip;
}

/* Lenis smooth scroll */
html.lenis,
html.lenis body {
  height: auto;
}
.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}
.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}
.lenis.lenis-stopped {
  overflow: hidden;
}

::selection {
  background: var(--color-slot);
  color: #ffffff;
}

:focus-visible {
  outline: 2px solid #ffffff;
  outline-offset: 3px;
}

/* Green media placeholder — swap for a real <img>/<video> later */
.media-slot {
  background: var(--color-slot);
  transition: filter var(--dur-med) var(--ease-out-quart);
}
.group:hover .media-slot {
  filter: brightness(0.82);
}

/* Animated underline for nav + inline links */
.nav-link,
.link-underline {
  position: relative;
}
.nav-link::after,
.link-underline::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -3px;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: right center;
  transition: transform var(--dur-fast) var(--ease-out-quart);
}
.link-underline::after {
  height: 2px;
  bottom: -5px;
}
.nav-link:hover::after,
.nav-link:focus-visible::after,
.link-underline:hover::after,
.link-underline:focus-visible::after {
  transform: scaleX(1);
  transform-origin: left center;
}

/* Carousel arrow controls */
.ctrl {
  @apply flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white;
  transition:
    background-color var(--dur-fast) var(--ease-out-quart),
    border-color var(--dur-fast) var(--ease-out-quart),
    color var(--dur-fast) var(--ease-out-quart),
    transform var(--dur-fast) var(--ease-out-quart);
}
.ctrl:hover {
  @apply border-white bg-white text-ink;
}
.ctrl:active {
  transform: scale(0.92);
}

.split-line {
  will-change: transform;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## LAYER 5 — MEDIA ASSETS

All media is served from the Fivefold CDN — reference these URLs directly in `src/data/content.ts`. Do not swap them for stock images or placeholder services.

**Hero — looping background video:**

```html
<video
  class="h-full w-full object-cover"
  src="https://cdn.5sdesign.art/projects/geny/video-hero.mp4"
  autoplay muted loop playsinline preload="auto" aria-hidden="true"
></video>
```

The video sits inside a `div[data-hero-media]` with classes `media-slot absolute -inset-[12%]` — a 12% overscan bleed on all sides so the GSAP scale-in and scroll parallax never expose an edge. The green `.media-slot` background shows through while the video buffers.

**Every other slot** renders through the shared `<Media />` component (Layer 6). Asset map:

| Slot | URL |
| --- | --- |
| Hero video | `https://cdn.5sdesign.art/projects/geny/video-hero.mp4` |
| Showcase left | `https://cdn.5sdesign.art/projects/geny/geny-01.png` |
| Showcase right | `https://cdn.5sdesign.art/projects/geny/geny-02.png` |
| Carousel slide 01 — Orbital | `https://cdn.5sdesign.art/projects/geny/geny-03.png` |
| Carousel slide 02 — Neon Drift | `https://cdn.5sdesign.art/projects/geny/geny-04.png` |
| Carousel slide 03 — Bloom | `https://cdn.5sdesign.art/projects/geny/geny-05.png` |
| Carousel slide 04 — Pulse | `https://cdn.5sdesign.art/projects/geny/geny-06.png` |
| Work 1 — Neon Drift | `https://cdn.5sdesign.art/projects/geny/geny-07.png` |
| Work 2 — Orbital | `https://cdn.5sdesign.art/projects/geny/geny-08.png` |
| Work 3 — Bloom | `https://cdn.5sdesign.art/projects/geny/geny-09.png` |
| Work 4 — Pulse | `https://cdn.5sdesign.art/projects/geny/geny-10.png` |
| Journal thumbs ×3 | reuse `geny-04.png`, `geny-05.png`, `geny-06.png` (post order Jun → May → Apr) |

If any asset is missing or fails to load, the slot must render as a solid `#16a34a` green block — never a broken-image glyph.

---

## LAYER 6 — SHARED COMPONENTS & SYSTEMS (define once, use everywhere)

### `components/Media.tsx` — media slot with green fallback

```text
Props: { className?: string; src?: string; alt?: string }
No src   → <div aria-hidden="true" class="media-slot {className}" />
With src → <img src alt loading="lazy" class="media-slot object-cover {className}" />
```

### `lib/gsapSetup.ts`

```ts
gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);
export { gsap, ScrollTrigger, SplitText, useGSAP };
```

Every other file imports GSAP from this module only — never straight from `gsap`.

### `lib/scroll.ts` — Lenis singleton

```text
lenis = new Lenis({ autoRaf: false, duration: 1.15 })
lenis.on("scroll", ScrollTrigger.update)
gsap.ticker.add((time) => lenis.raf(time * 1000))
gsap.ticker.lagSmoothing(0)
destroySmoothScroll(): remove the ticker callback, lenis.destroy(), null the singleton
scrollToTarget(selector): lenis.scrollTo(el, { duration: 1.4, easing: t => 1 - Math.pow(1 - t, 4) })
  fallback when lenis is absent: el.scrollIntoView({ behavior: reduced-motion ? "auto" : "smooth" })
```

Lenis is never created when `(prefers-reduced-motion: reduce)` matches — `App` checks the media query before calling `initSmoothScroll()`.

### `lib/reveal.ts` — three reveal systems

All three are registered inside `gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", …)`.

**CRITICAL: content is rendered visible by default. Elements are hidden only inside `onEnter` at the exact moment they animate in — always `gsap.fromTo`, never CSS pre-hiding, never `gsap.from` with `immediateRender`. If a trigger fails, nothing may stay invisible.**

1. `[data-reveal]` — `ScrollTrigger.batch`, start `"top 88%"`, `once: true`, onEnter:
   `gsap.fromTo(els, { y: 56, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1.1, ease: "power3.out", stagger: 0.09, clearProps: "transform,opacity,visibility" })`
2. `[data-mask-lines]` — headings with pre-wrapped lines in markup
   (`span.block.overflow-hidden > span.line.block`), per-element `ScrollTrigger.create`, start `"top 85%"`, `once: true`, onEnter:
   `gsap.fromTo(lines, { yPercent: 115 }, { yPercent: 0, duration: 1.15, ease: "power4.out", stagger: 0.09 })`
3. `[data-lines]` — running paragraphs, per-element trigger, start `"top 85%"`, `once: true`, onEnter:
   `new SplitText(el, { type: "lines", linesClass: "split-line" })` then
   `gsap.fromTo(split.lines, { yPercent: 55, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 1.05, ease: "power3.out", stagger: 0.08 })`

### `App.tsx` init

- `useEffect`: if `(prefers-reduced-motion: reduce)` matches, return early; otherwise `initSmoothScroll()`, cleanup `destroySmoothScroll()`.
- `useGSAP`: wait for `document.fonts.ready`, then `ScrollTrigger.refresh()` followed by `initReveals()` — so SplitText line breaks and trigger positions are measured against the loaded font. Guard the promise with a `cancelled` flag flipped in cleanup (StrictMode-safe).
- Shell: `<Nav />` → `<main>` wrapping Hero, Intro, ShowcaseGrid, Ticker, Studio, Work, Journal → `<Footer />`.

---

## LAYER 7 — SECTIONS

Page order: `Nav (fixed) → Hero → Intro → ShowcaseGrid → Ticker → Studio → Work → Journal → Footer`.
Global gutters: media sections use `px-2.5` + `gap-2.5` + `rounded-md` (the 10px frame); text sections use `px-5 md:px-10`.

### SECTION 0 — NAV (fixed header, `components/Nav.tsx`)

- Container: `header.fixed.inset-x-0.top-0.z-50.text-white.mix-blend-difference` → `nav` with `aria-label="Primary"`, classes `flex h-12 items-center justify-between px-4 md:px-5`
- Logo (left, `a[href="#home"]`): `text-[13px] font-extrabold uppercase tracking-tight` — text **Geny** + `<sup class="align-super text-[8px]">®</sup>`
- Links (right): `ul.flex.items-center.gap-4.md:gap-6`; each link `a.nav-link` with `text-[10px] font-semibold uppercase tracking-[0.14em]`
- Behavior: every click prevents default and calls `scrollToTarget(href)` for the Lenis anchor glide. `mix-blend-difference` auto-inverts the nav to black as it passes over the white ticker band — no scroll listener needed.

### SECTION 1 — HERO (`id="home"`, `components/Hero.tsx`)

- Container: `section.relative.px-2.5.pb-2.5.pt-14` → media frame `div.relative` with `h-[calc(100svh-66px)] min-h-[520px] overflow-hidden rounded-md`
- Background: the `div[data-hero-media].media-slot.absolute.-inset-[12%]` overscan wrapper from Layer 5, containing the hero video
- Title overlay: `div[data-hero-title].absolute.inset-0.flex.items-center.justify-center.px-4.text-center`
  - `h1` `font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[clamp(2.6rem,8.4vw,8.6rem)]`
  - Two masked lines, each `span.block.overflow-hidden > span.hero-line.block`:
    - Line 1: **Geny** + `<sup class="align-super text-[0.34em] font-bold">®</sup>`
    - Line 2: **We generate videos**
    - (CSS uppercases both — the data strings stay sentence-case, rendering as GENY® / WE GENERATE VIDEOS)
- Corner dots: two `span[data-hero-dot]` at `absolute bottom-4 h-1.5 w-1.5 rounded-full bg-white`, one `left-4`, one `right-4`
- **Load timeline** (inside `useGSAP` scoped to the section, wrapped in the reduced-motion matchMedia; timeline defaults ease `power4.out`):
  1. `[data-hero-media]` `scale 1.14 → 1`, duration `1.9`, ease `power3.out`
  2. `.hero-line` `yPercent 115 → 0`, duration `1.25`, stagger `0.14`, position `"-=1.45"`
  3. `[data-hero-dot]` `autoAlpha 0 → 1`, duration `0.7`, stagger `0.12`, position `"<0.5"`
- **Scroll parallax** (two tweens, trigger = section, start `"top top"`, end `"bottom top"`, `scrub: true`, ease `"none"`):
  - media → `yPercent: 12` · title → `yPercent: 18, autoAlpha: 0.35`

### SECTION 2 — INTRO / ABOUT (`id="about"`, `components/Intro.tsx`)

- Container: `section.px-5.py-28.md:px-10.md:py-40`
- Statement: `p[data-lines]` `max-w-[68rem] text-[clamp(1.7rem,3.6vw,3.4rem)] leading-[1.16] tracking-[-0.015em] text-white/95`
- Captions: `div.mt-16.space-y-1` → two `p` `text-[10px] uppercase tracking-[0.14em] text-white/40`

### SECTION 3 — SHOWCASE GRID (`components/ShowcaseGrid.tsx`)

- Container: `section.grid.grid-cols-1.gap-2.5.px-2.5.md:grid-cols-3`
- Cells 1 & 3 (`data-reveal`): `group overflow-hidden rounded-md` → `<Media class="aspect-[4/3] h-full w-full" />` (geny-01 left, geny-02 right; alts in Block 7)
- Cell 2 (`data-reveal`): `flex aspect-[4/3] flex-col items-center justify-center gap-5 rounded-md border border-line bg-ink-soft px-6 text-center`
  - `h3` `font-extrabold uppercase leading-[1.02] tracking-[-0.01em] text-[clamp(1.4rem,2vw,2rem)]` — three stacked `span.block` lines
  - caption `span` `text-[9px] uppercase tracking-[0.32em] text-white/40`

### SECTION 4 — TICKER (white marquee band, `components/Ticker.tsx`)

- Container: `section.mt-24.overflow-hidden.bg-paper.py-3.5.text-ink.md:mt-32`
- Track: `div.flex.w-max.items-center.whitespace-nowrap` — render the 8 items **twice** (second half `aria-hidden="true"`) for a seamless -50% loop
- Item: `span.flex.items-center` wrapping a text `span.px-6.text-[13px].font-extrabold.uppercase.tracking-[0.02em]` followed by a dot `span[aria-hidden].h-1.5.w-1.5.rounded-full.bg-accent`
- Loop: `gsap.to(track, { xPercent: -50, ease: "none", duration: 30, repeat: -1 })`
- Velocity boost: a global `ScrollTrigger.create({ onUpdate })` computes `boost = clamp(1, 4, 1 + |self.getVelocity()| / 1200)` and raises `loop.timeScale(boost)` **only when boost exceeds the current timeScale**; a `gsap.ticker` callback eases it back each frame: `loop.timeScale(interpolate(loop.timeScale(), 1, 0.035))`. Clean up both (remove the ticker callback, kill the trigger) in the matchMedia teardown.

### SECTION 5 — STUDIO CAROUSEL (`id="studio"`, `components/Studio.tsx`)

- Container: `section.pt-28.md:pt-36`; header row `flex items-end justify-between gap-6 px-5 md:px-10`
- Heading: `h2[data-mask-lines]` `font-extrabold uppercase leading-[0.98] tracking-[-0.02em] text-[clamp(2.3rem,5.8vw,5.9rem)]`, two masked lines
- Controls (`data-reveal`): `div.mb-2.flex.shrink-0.items-center.gap-2.5` — two `button.ctrl` (type button, `aria-label` "Previous slide" / "Next slide") holding the Layer 10 inline SVG arrow; Previous renders it with `rotate-180`
- Carousel: `div.mt-10.px-2.5.md:mt-14` → `div.relative.overflow-hidden.rounded-md` → track `div.flex`
  - Slide: `figure.relative.w-full.shrink-0` → `<Media class="aspect-video max-h-[82vh] w-full" />` + `figcaption.absolute.bottom-4.left-4` `text-[10px] font-semibold uppercase tracking-[0.14em]`
  - Counter: `span.absolute.bottom-4.right-4` `text-[10px] font-semibold tracking-[0.14em] text-white/80 tabular-nums` — zero-padded `01 / 04`, current slide mirrored into React state
- Behavior: index lives in a ref and wraps around (`(i + dir + count) % count`); slide with `gsap.to(track, { xPercent: -100 * index, duration: 1.05, ease: "power4.inOut", overwrite: true })`; click handlers wrapped in `contextSafe` from `useGSAP({ scope })`

### SECTION 6 — WORK (`id="work"`, `components/Work.tsx`)

- Container: `section.pt-28.md:pt-36`; heading `h2[data-mask-lines]` in `px-5 md:px-10` with `font-extrabold uppercase leading-none tracking-[-0.02em] text-[clamp(2rem,4.4vw,4.2rem)]`, single masked line
- Grid: `div.mt-10.grid.grid-cols-1.gap-x-2.5.gap-y-12.px-2.5.md:grid-cols-2`
- Item: `article[data-reveal].group` → `div.overflow-hidden.rounded-md` + `<Media class="aspect-[4/3] w-full" />` (alt = `"{title} — {category}"`), then meta row `mt-3 flex items-baseline justify-between gap-4 px-1 text-[11px] uppercase tracking-[0.12em]`: `h3.font-bold` title · `p.text-white/45` category · `p.text-white/45` year

### SECTION 7 — JOURNAL (`id="journal"`, `components/Journal.tsx`)

- Same shell as Work (`pt-28 md:pt-36`, same heading classes) but the grid is `md:grid-cols-3`
- Card: `article[data-reveal].group` → thumb `<Media class="aspect-[16/10] w-full" />` inside `overflow-hidden rounded-md`, date `p.mt-4` `text-[10px] uppercase tracking-[0.14em] text-white/40`, title `h3.mt-2.max-w-[26rem].text-lg.font-semibold.leading-snug`

### SECTION 8 — FOOTER (`id="contact"`, `components/Footer.tsx`)

- Container: `footer.pt-32.md:pt-44`
- CTA: `h2[data-mask-lines]` in `px-5 md:px-10`, `font-extrabold uppercase leading-[0.98] tracking-[-0.02em] text-[clamp(2.2rem,5.5vw,5.5rem)]`, two masked lines
- Email: `a[data-reveal].link-underline.mt-10.inline-block.text-xl.font-medium.md:text-3xl` → `mailto:hello@geny.studio`
- Giant wordmark: `div.mt-24.overflow-hidden.px-2.5` → `div[data-wordmark].select-none.text-center.font-extrabold.uppercase.leading-[0.8].tracking-[-0.04em].text-[21vw]` — **Geny** + `<sup class="align-super text-[0.3em]">®</sup>`
  - Scrub: `gsap.fromTo` `yPercent 26 → 0`, ease `"none"`, `scrub: true`, trigger = footer, start `"center bottom"`, end `"bottom bottom"`
- Bottom bar: `div.mx-2.5.mt-6.flex.flex-wrap.items-center.justify-between.gap-3.border-t.border-line.py-4` `text-[10px] uppercase tracking-[0.14em] text-white/40` — legal string left, `button.nav-link.font-semibold.text-white/70` "Back to top" right (`scrollToTarget("#home")`)

### Block 7 · COPY (verbatim — every string lives in `src/data/content.ts`)

```text
NAV:       Home #home · About #about · Work #work · Blog #journal · Contact #contact
HERO:      Geny(®) / We generate videos      (renders GENY® / WE GENERATE VIDEOS)
INTRO:     We generate and produce everything from films to product videos, with a
           quality you can trust. We work with businesses and creatives to create the
           best content possible — our AI works around the clock to deliver results
           in an efficient manner.
CAPTIONS:  Geny® — AI video generation studio
           Generating worldwide, around the clock
SHOWCASE:  We make / videos that / turn heads   ·   caption: Geny Studio
           alts: "Geny generated film still" (left) · "Geny generated studio scene" (right)
TICKER:    Text to Video · Image to Video · Motion Design · Animated Reels ·
           Creative Direction · Brand Films · Product Videos · Music Videos
STUDIO:    A creative video / generation studio
SLIDES:    01 Orbital — Product launch film · 02 Neon Drift — Brand film ·
           03 Bloom — Fashion reel · 04 Pulse — Music video
WORK:      Selected work
           Neon Drift — Brand Film — 2026 · Orbital — Product Launch — 2026 ·
           Bloom — Fashion Reel — 2025 · Pulse — Music Video — 2025
JOURNAL:   Journal
           Jun 2026 — From prompt to premiere: inside the Geny pipeline
           May 2026 — How AI is rewriting the economics of video production
           Apr 2026 — Directing machines: creative control in the AI era
FOOTER:    Let's make videos / that turn heads
           hello@geny.studio
           © 2026 Geny — All rights reserved · Back to top
META:      <title>Geny® — AI Video Generation Studio</title>
```

Media URLs pair with these strings per the Layer 5 asset map. Slide and journal images use the slide title / post title as alt text.

---

## LAYER 8 — ANIMATION STANDARDS (project-wide)

```js
// Eases
entry:        "power3.out"      // fades, media scale-in
maskedLines:  "power4.out"      // headline line slides (hero + data-mask-lines)
carousel:     "power4.inOut"
scrub:        "none"            // ALL scroll-linked tweens

// Durations
reveal 1.1 · maskLines 1.15 · splitLines 1.05 · heroLines 1.25 · heroMedia 1.9 · carousel 1.05

// Staggers
reveal 0.09 · maskLines 0.09 · splitLines 0.08 · heroLines 0.14 · heroDots 0.12

// Triggers
data-reveal start "top 88%" · line systems start "top 85%" · all once: true

// Marquee
xPercent -50, duration 30, repeat -1 · boost clamp(1, 4, 1 + |velocity|/1200), raise-only · decay lerp 0.035/frame

// Lenis
duration 1.15 · anchor glide 1.4s, easing 1 - (1 - t)^4
```

Rules: every animation lives inside `gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", …)` — reduced-motion users get a fully static, fully visible page with no Lenis. Use `useGSAP({ scope })` in every animated component; event handlers go through `contextSafe`. No `markers` in final code.

---

## LAYER 9 — RESPONSIVE STANDARDS

- Mobile-first; the single `md:` breakpoint does nearly all the work.
- All display type uses `clamp()` — exact values in Layer 7 (hero `clamp(2.6rem,8.4vw,8.6rem)`, studio `clamp(2.3rem,5.8vw,5.9rem)`, work/journal `clamp(2rem,4.4vw,4.2rem)`, footer `clamp(2.2rem,5.5vw,5.5rem)`).
- Media gutters stay `px-2.5` / `gap-2.5` at every size; text gutters go `px-5 md:px-10`.
- Grids collapse: showcase and journal `1 → 3` columns, work `1 → 2` columns at `md:`.
- Hero height is `calc(100svh - 66px)` with `min-h-[520px]` — `svh`, never `vh`.
- Section rhythm: `pt-28 md:pt-36` (intro `py-28 md:py-40`, footer `pt-32 md:pt-44`, ticker `mt-24 md:mt-32`).
- Nav holds a single row at all sizes — five short 10px links, no hamburger.

---

## LAYER 10 — ICON SET

**No icon library.** The entire site contains exactly one inline SVG — the carousel arrow:

```html
<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
  <path d="M1 7h11M8 2.5 12.5 7 8 11.5" stroke="currentColor" stroke-width="1.5" />
</svg>
```

The Previous button renders the same SVG with `rotate-180`. Do not import lucide, phosphor, tabler, or any other icon package — the hero dots, ticker dots, and `®` marks are plain markup, not icons.

---

## LAYER 11 — REPRODUCE-EXACTLY CLAUSE

Reproduce exactly. Do not:

- Substitute fonts ("similar to Archivo" is not Archivo Variable; a Google Fonts link is not `@fontsource-variable/archivo`).
- Round color values — `#0a0a0a`, `#0d0d0d`, `#ea3323`, `#16a34a`, `#262626` are exact.
- Shorten or paraphrase copy — every string in Layer 7 Block 7 is verbatim, dashes and `®` included.
- Skip animation numbers ("smooth entrance" is not `yPercent 115 → 0, 1.25s, power4.out, stagger 0.14`).
- Pre-hide content waiting for scroll triggers — hide only inside `onEnter` (Layer 6 critical rule).
- Swap the `cdn.5sdesign.art` media URLs for stock images or placeholders; a missing asset falls back to a solid `#16a34a` block.
- Spread the red beyond the ticker dots or the green beyond the media-slot fallback and selection.
- Add icons, shadows, gradients, glassmorphism, or extra sections.

If a constraint conflicts with a framework limitation, clamp to the nearest valid value and note the substitution in a code comment — do not silently change.

---

## DELIVERY CHECKLIST

- [ ] Vite 6 + React 19 + TypeScript scaffold; `npm i gsap @gsap/react lenis @fontsource-variable/archivo` and `npm i -D tailwindcss @tailwindcss/vite`; dev server on `5910`.
- [ ] `index.css` opens with the two `@import`s, then the Layer 3 `@theme`, then Layer 4 verbatim.
- [ ] `index.html` head matches Layer 2 — title `Geny® — AI Video Generation Studio`.
- [ ] `gsapSetup.ts` is the single GSAP entry point; `scroll.ts` Lenis singleton; `reveal.ts` three systems with the never-pre-hide rule.
- [ ] `App` inits reveals only after `document.fonts.ready` + `ScrollTrigger.refresh()`, with a StrictMode-safe cancelled flag.
- [ ] Hero: overscan video, two masked GENY® / WE GENERATE VIDEOS lines, corner dots, load timeline + scrub parallax with the exact Layer 7 numbers.
- [ ] Ticker: white band, red dots, -50% loop in 30s, raise-only velocity boost with 0.035 decay.
- [ ] Studio carousel: xPercent slide at 1.05s power4.inOut, wrap-around index, `01 / 04` counter, `.ctrl` arrows.
- [ ] Footer: 21vw wordmark scrubbing `yPercent 26 → 0`, `hello@geny.studio` underline link, legal bar + Back to top.
- [ ] All 11 media files load from `https://cdn.5sdesign.art/projects/geny/`; empty slots render solid `#16a34a`.
- [ ] Red only on ticker dots; green only on media fallback + selection; no shadows, gradients, or second font anywhere.
