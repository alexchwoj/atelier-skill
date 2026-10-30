# Kova — Portfolio Prompt (Fivefold)

## LAYER 0 — META

```yaml
asset_id:        kova-portfolio-minimal-01
category:        landing-page
aesthetic:       editorial
industry:        portfolio
tone:            minimal
preview_video:   https://cdn.5sdesign.art/projects/kova.mp4
license:         standard
version:         1.0
last_updated:    2026-07-09
```

---

## LAYER 1 — OPENING DECLARATION

Build a **single-page portfolio** for **Aiden Kova** — an **art director & designer working across identity, web, and print**.

Use the following **pinned** tech stack (do not substitute):

- **React 19 + Vite 6** (JavaScript, `.jsx`)
- **Tailwind CSS v4** via `@tailwindcss/vite` — CSS-first `@theme` config in `index.css`, **no tailwind.config file**
- **GSAP + ScrollTrigger** for scroll motion
- **Lenis** for smooth scroll
- Dev server port **6002**
- No icon library — the site is typography-only

The aesthetic is **quiet Japanese-minimal: a warm bone canvas, near-black ink text, 1px hairline borders doing all the delineation, small uppercase meta labels, modest headline scale, and one serif-italic flourish per moment**. `#f7f6f3` is the global background. Default text color is `#141414`. **Do not use any accent color, do not use shadows or gradients anywhere, do not use display type larger than the footer email (3.25rem), and never hide content behind scroll reveals.**

---

## LAYER 2 — FONTS

Self-hosted via Fontsource (`npm i @fontsource-variable/instrument-sans @fontsource/instrument-serif`), imported at the top of `index.css`:

```css
@import '@fontsource-variable/instrument-sans';
@import '@fontsource/instrument-serif';
@import '@fontsource/instrument-serif/400-italic.css';
```

- **Instrument Sans** (400/500) — body and headings.
- **Instrument Serif italic** — flourish only: one emphasized phrase in the hero headline and the footer email address.
- **Helvetica Neue** (system stack `'Helvetica Neue', Helvetica, Arial, sans-serif`, token `--font-helv`) — numerals only: service numbers `01–04` and CV year columns.

`html, body { font-family: 'Instrument Sans', 'Helvetica Neue', sans-serif; -webkit-font-smoothing: antialiased; font-feature-settings: 'ss01' on; }`

---

## LAYER 3 — COLOR SYSTEM

Define in the Tailwind v4 `@theme` block:

```css
@theme {
  --color-paper: #f7f6f3; /* warm bone canvas */
  --color-ink: #141414;   /* near-black text */
  --color-faint: #77746e; /* secondary text */
  --color-line: #e3e1dc;  /* 1px hairlines */
  --color-clay: #b0a696;  /* reserved muted tone (rarely used) */
}
```

`::selection { background: #141414; color: #f7f6f3; }`

---

## LAYER 4 — CUSTOM CSS UTILITIES (the "design DNA")

Paste verbatim:

```css
/* Small-caps meta label */
.meta {
  font-size: 0.6875rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 500;
}

/* Underline draw — left→right in, exits the same side */
.link-draw { position: relative; display: inline-block; }
.link-draw::after {
  content: ''; position: absolute; left: 0; bottom: -2px;
  width: 100%; height: 1px; background: currentColor;
  transform: scaleX(0); transform-origin: right center;
  transition: transform 320ms cubic-bezier(0.23, 1, 0.32, 1);
}
@media (hover: hover) and (pointer: fine) {
  .link-draw:hover::after { transform: scaleX(1); transform-origin: left center; }
}

/* Project frame: GSAP owns the transform on .visual-inner (parallax),
   so the hover scale lives one level deeper, on the media element. */
.project-visual { overflow: hidden; }
.visual-inner video { transition: transform 700ms cubic-bezier(0.23, 1, 0.32, 1); }
@media (hover: hover) and (pointer: fine) {
  .project-card:hover .visual-inner video { transform: scale(1.03); }
}

/* Load-time rise (hero lines only) */
@keyframes rise-in {
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
}
.rise {
  animation: rise-in 900ms cubic-bezier(0.23, 1, 0.32, 1) both;
  animation-delay: calc(var(--rise-index, 0) * 90ms);
}
@media (prefers-reduced-motion: reduce) {
  .rise { animation: none; }
  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

---

## LAYER 5 — BACKGROUND ASSET

**Option D — solid `#f7f6f3` everywhere.** No video/gradient backgrounds.

**Project media:** each Work card plays a looping preview video from `public/work/<project-id>.mp4` (`autoPlay muted loop playsInline preload="metadata"`, `object-cover`). Download the 9 reels from the Fivefold CDN into `public/work/` — `https://cdn.5sdesign.art/projects/kova/work/<project-id>.mp4` for every project id in Layer 7. To use your own footage, swap the files and keep the names.

---

## LAYER 6 — SHARED COMPONENTS

All scroll motion lives in ONE `useEffect` in `App.jsx`, inside `gsap.matchMedia('(prefers-reduced-motion: no-preference)')` — reduced-motion users get a fully static, fully visible page.

```js
// Lenis: duration 1.1, easing t => Math.min(1, 1.001 - Math.pow(2, -10 * t))
// wired via lenis.on('scroll', ScrollTrigger.update) + gsap.ticker

// Header hide/show: gsap.from('#site-header', { yPercent: -100, paused: true, duration: 0.4, ease: 'power3.out' }).progress(1)
// ScrollTrigger { start: 'top -120', end: 'max' } — play on scroll-up, reverse on scroll-down

// Reading progress: #scroll-progress (fixed 1px ink hairline, origin-left, scale-x-0, z-[60])
// gsap.to → scaleX: 1, scrollTrigger { start: 0, end: 'max', scrub: 0.4 }

// Hero drift: gsap.to('[data-hero-drift]', { yPercent: -10, scrollTrigger: hero, start 'top top', end 'bottom top', scrub: true })

// Visual parallax: for each [data-parallax] → gsap.set(scale: 1.08), then fromTo yPercent -4 → 4,
// scrollTrigger { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true }

// Settle-in: for each [data-rise] → gsap.from({ y: 32, duration: 1, ease: 'power3.out',
// scrollTrigger { trigger: el, start: 'top 92%', once: true } }) — TRANSFORM ONLY, never opacity
```

---

## LAYER 7 — SECTIONS

Container: `max-w-6xl mx-auto px-6 md:px-10`. Sections separated by `border-t border-line`, `py-24 md:py-32`. Section headings are tiny `.meta` labels — never display type.

### SECTION 1 — HEADER (fixed, hide-on-scroll)

- Wrapper: `#site-header`, `fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-sm`, inner `h-14 flex items-center justify-between`
- Left: button `Aiden Kova` (`.meta .link-draw`) → scrolls to `#top`
- Right nav: `Work` `About` `Services` `Contact` (`.meta .link-draw`), gap-5 md:gap-7 — smooth-scroll to section ids with −72px offset
- Above it: the `#scroll-progress` hairline (Layer 6)

### SECTION 2 — HERO

- Wrapper: `#top`, `data-hero-drift`, `pt-44 pb-28 md:pt-60 md:pb-40`
- Eyebrow `.rise` (`--rise-index: 0`), `.meta text-faint`: `Art Director & Designer`
- Headline `.rise` (index 1), `mt-10 max-w-2xl`, `text-[1.75rem] md:text-[2.125rem] leading-[1.35] tracking-[-0.01em]` — the phrase "a very long time" set in Instrument Serif italic:
```
Aiden Kova designs identities, websites, and printed matter for people who intend to keep them a very long time.
```
- CTA `.rise` (index 2), `mt-12`: button `Start a conversation` (`.meta .link-draw`) → `#contact`

### SECTION 3 — WORK

- Heading row: `.meta` `Selected Work` left, `.meta text-faint` `2024 — 2026` right
- Grid `mt-12`, 1 col → `md:grid-cols-2`, `gap-x-8 gap-y-16 md:gap-y-20`. Projects with `size: full` span both columns (`aspect-[16/9] md:aspect-[21/9]`); `half` cards are `aspect-[4/3]`
- Each card (`.project-card group`, `data-rise`): bordered frame (`.project-visual border border-line`) containing `.visual-inner` (`data-parallax`) with the looping `<video src="/work/<id>.mp4">`; below (`mt-4`): title 15px medium with `.link-draw`, right meta `.meta text-faint` `client · discipline · year`; then a one-line note (`text-sm text-faint`, max-w-xl)
- **Project data (verbatim, in order):**

| id | title | client | year | discipline | size | note |
|---|---|---|---|---|---|---|
| meridian-coffee | Meridian Coffee | Meridian Coffee Roasters | 2026 | Identity, Packaging | full | A wordmark set on the meridian line — labels that read like shipping manifests. |
| studio-halde | Studio Halde | Studio Halde, Zürich | 2026 | Identity, Web | half | A type-only system for an architecture practice that builds in concrete. |
| norm-hotel | Norm Hotel | Norm Hotel, Kyoto | 2025 | Identity, Print, Signage | half | Wayfinding reduced to a single rule: one line, one weight, one distance. |
| paper-planes | Paper Planes Records | Paper Planes Records | 2025 | Art Direction, Print | full | Sleeve system for a label that presses forty records a year, no two alike. |
| ame-skincare | Amé | Amé Skincare, Tokyo | 2025 | Identity, Packaging | half | Named for rain. A mark that appears only when the bottle is held to light. |
| field-notes-press | Field & Notes | Field & Notes Press | 2024 | Editorial, Print | half | A quarterly on walking. Margins wide enough to write in, as intended. |
| tbd-archive | Tanabe Archive | Tanabe Family Archive | 2024 | Web, Digital Archive | full | Four thousand photographs, one index. The interface stays out of the way. |
| oda-gallery | Oda Gallery | Oda Gallery, Ginza | 2024 | Identity, Web | half | The logotype rotates with each exhibition; the grid beneath it never moves. |
| kiln-studio | Kiln | Kiln Ceramic Studio, Mashiko | 2024 | Identity, Packaging | half | A mark drawn from the kiln's heat curve — fired onto every box lid by hand. |

### SECTION 4 — ABOUT ("Profile")

- Grid: `md:grid-cols-[200px_1fr] gap-x-16 gap-y-10`; left label `.meta` `Profile`
- Two paragraphs (`data-rise`, 17px, `leading-[1.7]`, max-w-xl; second `text-faint`, `mt-5`):
```
Aiden Kova is an art director and designer based in Tokyo. His practice sits between identity, web, and print — usually all three at once, because the work rarely respects the boundary. He believes a good identity is mostly restraint: one typeface chosen carefully, one rule applied everywhere, and the discipline to leave the rest alone.

He works with a small number of clients each year — studios, hotels, labels, and family archives — and stays with most of them long after launch.
```
- Two `dl` blocks (`data-rise`): label `.meta text-faint`, rows `border-b border-line py-3.5 text-sm`, year column `w-20 font-helv text-[0.8125rem] text-faint`:
```
Experience
2021 —      Independent practice, Tokyo
2017 – 21   Art Director, Kigumi Inc., Tokyo
2014 – 17   Designer, Bureau Linden, Berlin
2010 – 14   BA Visual Communication, UdK Berlin

Recognition
2026   Tokyo TDC, excellence — Norm Hotel
2025   JAGDA annual selection — Amé
2024   D&AD Wood Pencil — Field & Notes
```

### SECTION 5 — SERVICES

- Heading `.meta` `Services`; numbered `ol` `mt-10`, rows `group grid grid-cols-[3rem_1fr] md:grid-cols-[6rem_240px_1fr] py-7 border-b border-line first:border-t`, each `data-rise`
- Number: `font-helv text-[0.8125rem] text-faint group-hover:text-ink` (500ms). Name: `text-xl md:text-2xl group-hover:translate-x-2` (500ms ease-out). Description: `text-sm text-faint max-w-md`
```
01  Identity   — Wordmarks, symbols, and the systems that carry them — built to survive their tenth year, not just their first.
02  Web        — Sites designed and art-directed end to end. Fast, quiet, typographically exact.
03  Print      — Books, catalogues, packaging, and editorial systems. Paper stock chosen in person.
04  Direction  — Ongoing art direction for studios and brands that need a consistent eye, not a one-off deliverable.
```

### SECTION 6 — FOOTER (`#contact`)

- `pt-24 pb-10 md:pt-36 md:pb-12`
- Eyebrow `.meta text-faint`: `New projects, collaborations, quiet ideas`
- Mailto (`data-rise`, `mt-6`, `text-3xl sm:text-4xl md:text-[3.25rem] leading-[1.15] tracking-[-0.015em]`): `Say hello — hello@kova.studio` with the address in Instrument Serif italic + `.link-draw`
- Bottom bar (`mt-20 md:mt-28 border-t border-line pt-8`, flex between): links `Are.na` `Instagram` `LinkedIn` `Top` (`.meta .link-draw text-faint`) + `© 2026 Aiden Kova, Tokyo · Designed and built by the studio`

---

## LAYER 8 — ANIMATION STANDARDS (project-wide)

```js
// Ease: cubic-bezier(0.23, 1, 0.32, 1) for CSS; power3.out for GSAP rises
// Load: .rise 900ms, stagger 90ms via --rise-index (hero only)
// Scroll: header hide/show 0.4s; progress scrub 0.4; hero drift yPercent -10;
//         parallax scale 1.08 + yPercent -4→4 scrub; data-rise y:32 1s once at 'top 92%'
// Hovers: link-draw 320ms; video scale 1.03 700ms; services 500ms
// Scroll-triggered motion is TRANSFORM ONLY — content never hidden, full reduced-motion guard
```

---

## LAYER 9 — RESPONSIVE STANDARDS

- Mobile-first. Container `max-w-6xl px-6 md:px-10`; rhythm `py-24 md:py-32`.
- Work grid 1 col → 2 cols md; full-size cards flatten to 16:9 on mobile.
- About stacks label above content below md. Services grid collapses to `[3rem_1fr]` with the description spanning below.
- Footer email scales `text-3xl → 3.25rem`.

---

## LAYER 10 — ICON SET

None. This site is typography-only — no icons anywhere.

---

## LAYER 11 — REPRODUCE-EXACTLY CLAUSE

Reproduce exactly. Do not:
- Substitute fonts — Instrument Sans / Instrument Serif italic / Helvetica Neue numerals, exactly as assigned.
- Round color values — the canvas is exactly `#f7f6f3`, hairlines exactly `#e3e1dc`.
- Shorten or paraphrase any copy string, project row, CV row, or service description.
- Add accent colors, shadows, gradients, or icons.
- Replace the underline-draw hover with a default underline, or the parallax structure (`.visual-inner` wrapper) with a transform on the same element as the hover scale.
- Skip animation values (rise 900ms/90ms stagger; parallax scale 1.08, yPercent −4→4; data-rise y 32px once at top 92%).

If a constraint conflicts with framework limitations, clamp to the nearest valid value and note the substitution as a comment — do not silently change.

---

*Aiden Kova · kova-portfolio-minimal-01 · Fivefold prompt library · 2026-07-09*
