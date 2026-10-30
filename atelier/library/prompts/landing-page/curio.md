# Curio — Landing Prompt (Fivefold)

## LAYER 0 — META

```yaml
asset_id:        curio-saas-landing-01
category:        landing-page
aesthetic:       minimal
industry:        saas
tone:            premium
preview_video:   https://cdn.5sdesign.art/projects/curio.mp4
license:         standard
version:         1.0
last_updated:    2026-07-09
```

---

## LAYER 1 — OPENING DECLARATION

Build a **single-page landing** for **Curio** — a **design-inspiration saving app: one place for every reference — sites, shots, type, palettes**.

Use the following **pinned** tech stack (do not substitute):

- **React 19 + Vite 6** (JavaScript, `.jsx`)
- **Tailwind CSS v4** via `@tailwindcss/vite` — CSS-first `@theme` config in `index.css`, **no tailwind.config file**
- **GSAP + ScrollTrigger** for the hero timeline and feature parallax
- **Lenis** for smooth scroll
- Dev server port **6003**
- No icon library — five solid SVG marks saved as raw files (Layer 10) plus two tiny inline check/glyph SVGs

The aesthetic is **a clean, content-forward product landing: warm-white paper canvas, near-black ink type, one cobalt accent, rounded-xl cards, soft shadows only on interactive elements, and generative CSS "saved item" cards doing the visual storytelling**. `#fdfdfc` is the global background. Default text color is `#101014`. **Do not use purple, green, or any second accent — cobalt `#2547ff` is the only brand color. All copy is verbatim from Layer 7 — every visual placeholder is built in pure CSS/SVG, no stock images.**

---

## LAYER 2 — FONTS

Self-hosted via Fontsource (`npm i @fontsource-variable/dm-sans`), imported at the top of `index.css`:

```css
@import '@fontsource-variable/dm-sans';
```

Declared in `@theme` — note the mono token maps to DM Sans too:

```css
--font-sans: 'DM Sans Variable', ui-sans-serif, system-ui, sans-serif;
--font-mono: 'DM Sans Variable', ui-sans-serif, system-ui, sans-serif;
```

- **DM Sans** is the ONLY typeface — 100% of text, including the small technical chips that would normally be mono (map any `font-mono` utility to DM Sans as well).
- Headlines: extrabold, tracking −0.02em to −0.03em, `text-balance`.
- Micro-labels: 11px, semibold, uppercase, tracking 0.14–0.2em.

`html, body { font-family: 'DM Sans', ui-sans-serif, system-ui, sans-serif; -webkit-font-smoothing: antialiased; }`

---

## LAYER 3 — COLOR SYSTEM

Define in the Tailwind v4 `@theme` block:

```css
@theme {
  --color-paper: #fdfdfc;       /* page canvas */
  --color-mist: #f4f4f2;        /* tinted section bands (logos, pricing) */
  --color-ink: #101014;         /* primary text */
  --color-ink-soft: #52525e;    /* secondary text */
  --color-ink-faint: #8b8b96;   /* tertiary / labels */
  --color-line: #e8e8e4;        /* hairline borders */
  --color-cobalt: #2547ff;      /* THE accent */
  --color-cobalt-soft: #eaeeff; /* accent tint surfaces */
  --color-cobalt-deep: #1a35cc; /* accent hover */
}
```

`::selection { background: #2547ff; color: #fff; }`

Shadows (interactive elements only):
```css
--shadow-lift: 0 1px 2px rgba(16,16,20,0.04), 0 8px 24px -8px rgba(16,16,20,0.1);
--shadow-lift-lg: 0 2px 4px rgba(16,16,20,0.05), 0 24px 48px -16px rgba(16,16,20,0.16);
--shadow-card: 0 1px 1px rgba(16,16,20,0.03), 0 12px 32px -12px rgba(16,16,20,0.12);
```

---

## LAYER 4 — CUSTOM CSS UTILITIES (the "design DNA")

Paste verbatim:

```css
/* Hover-lift for interactive cards */
.lift {
  transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1),
              box-shadow 500ms cubic-bezier(0.22, 1, 0.36, 1);
}
.lift:hover { transform: translateY(-4px); box-shadow: var(--shadow-lift-lg); }

/* Collage card — rotation via CSS var so hover can flatten it */
.collage-card {
  transform: rotate(var(--tilt, 0deg));
  transition: transform 600ms cubic-bezier(0.22, 1, 0.36, 1),
              box-shadow 600ms cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform;
}
.collage-card:hover {
  transform: rotate(0deg) translateY(-6px) scale(1.03);
  box-shadow: var(--shadow-lift-lg);
  z-index: 10;
}

/* Logo marquee */
@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.marquee-track { animation: marquee 32s linear infinite; }
.marquee:hover .marquee-track { animation-play-state: paused; }

/* Marquee marks — 18px, tinted to the text color */
.logo-mark svg { width: 18px; height: 18px; display: block; }

@media (prefers-reduced-motion: reduce) {
  .marquee-track { animation: none; }
  .lift, .collage-card { transition: none; }
  .collage-card:hover { transform: rotate(var(--tilt, 0deg)); }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## LAYER 5 — BACKGROUND ASSET

**Option D — solids only.** Page is `#fdfdfc`; the logos and pricing sections sit on `mist/40` bands; the final CTA panel is dark ink with a faint cobalt radial glow (`radial-gradient(closest-side, #2547ff, transparent 70%)` at low opacity). Behind the hero headline: the same radial glow at `opacity-[0.07]`, 900×480px, centered top. No videos, no images.

---

## LAYER 6 — SHARED COMPONENTS

```js
// Lenis smooth scroll at App root (reduced-motion gated)

// Hero intro: gsap.timeline({ defaults: { ease: 'expo.out' } })
// — [data-hero-stagger] elements: from { y, autoAlpha near-visible } stagger 0.09
// — collage cards pop in: stagger { each: 0.05, from: 'random' }
// Content must remain readable with JS disabled — animate FROM visible-adjacent states.

// Feature visual parallax: per visual, gsap.fromTo(y drift,
//   scrollTrigger { trigger: el, start: 'top 95%', end: 'bottom 20%', scrub: 1.2 })
```

**Generative card kinds** (pure CSS/SVG, used in the hero collage — each card is a small white rounded-xl card with `--tilt`, a thin `border-line` border, `shadow-card`, and a tiny "Saved ✓" chip in the corner):
- `site` — mock mini-browser: dot row header + bars/blocks in the card's accent color
- `palette` — title + 5 horizontal swatch strips
- `type` — big glyph (e.g. "Aa") + small sample label
- `gradient` — a rounded gradient tile from → to
- `shot` — fake-UI fragment on a soft tone background

---

## LAYER 7 — SECTIONS

Container: `max-w-6xl mx-auto`, sections `px-4 py-24 sm:py-36`.

### SECTION 1 — NAV (floating glass pill)

- Fixed top, centered `max-w-5xl`: pill with `bg-paper/80 backdrop-blur border border-line rounded-full px-5 py-2.5`, flex between
- Left wordmark: `Curio` + cobalt asterisk `*` (font 600, 18px)
- Center links: `Features` (`#features`) · `Pricing` (`#pricing`) · `Changelog` (`#`) — 14px `text-ink-soft hover:text-ink`
- Right CTA: black pill `bg-ink text-white rounded-full px-4 py-2 text-sm font-semibold .lift` → `Get Curio — free`

### SECTION 2 — HERO (centered)

- `relative max-w-3xl mx-auto text-center`, cobalt radial glow behind (Layer 5)
- H1 (`data-hero-stagger`): `text-5xl sm:text-7xl font-extrabold leading-[1.02] tracking-[-0.03em] text-balance`:
```
Save anything you see.
```
- Sub (`data-hero-stagger`, `mt-6 max-w-xl mx-auto text-lg text-ink-soft`):
```
One place for every reference — sites, shots, type, palettes. Curio keeps your eye organized so your next idea starts warm.
```
- CTA row (`data-hero-stagger`, `mt-9`, centered, gap-3): primary black pill `Get Curio — free` (`.lift`) + ghost `See how it works` (border-line, rounded-full)
- Footnote (`data-hero-stagger`, `mt-5 text-xs text-ink-faint`):
```
Free forever for your first 500 saves. No card required.
```

### SECTION 3 — COLLAGE (hero visual)

Masonry `columns-2 sm:columns-3 lg:columns-4`, gap 4, `mt-16` — 12 `.collage-card`s (kind / title / tilt / extras), each with a "Saved ✓" chip:

| kind | title | tilt | extras |
|---|---|---|---|
| site | studio-verse.com | −3° | accent #2547ff |
| palette | Dusk tones | 2° | #101014 #3d3d8f #7b6cff #e8e4ff #fdfdfc |
| type | Editorial No. 4 | −1.5° | glyph "Aa", sample "Grotesk / 640" |
| gradient | Meadow blur | 2.5° | #c8f5d4 → #2547ff |
| shot | Checkout flow | −2° | tone #eaeeff |
| site | foundry.design | 1.5° | accent #101014 |
| palette | Terracotta set | −2.5° | #b4552d #e08d5f #f4cbaa #faf1e6 #2d2420 |
| type | Mono Spec | 3° | glyph "Rg", sample "Mono / 450" |
| shot | Onboarding cards | 1° | tone #f0f4e8 |
| gradient | Signal fade | −1° | #2547ff → #ff8db1 |
| site | atlas-journal.co | 2° | accent #0f766e |
| palette | Paper & ink | −3° | #fdfdfc #e8e8e4 #8b8b96 #52525e #101014 |

### SECTION 4 — FEATURES (`#features`)

Centered heading `text-3xl sm:text-5xl font-extrabold tracking-[-0.02em] text-balance`:
```
From “ooh, nice” to organized in one keystroke.
```
Then 4 alternating text/visual rows (visual = hand-built fake-UI card, scrub-parallax per Layer 6). Each row: title (2xl–3xl, extrabold), body (`text-ink-soft`), 3 bullets with thin inline check marks (20×20 viewBox, stroke currentColor 1.5, `text-ink-faint`).

1. **Clip from anywhere** (visual: browser-extension popover mock)
```
One shortcut grabs the whole page, a region, or just the palette. The extension lives quietly in your browser until the moment you see something worth keeping.
• Full page, region, or element capture
• Works on any site, behind any login
• Keyboard-first: ⌘⇧S and it’s saved
```
2. **Auto-organized, zero folders** (visual: tag-chips UI mock)
```
Curio reads what you save and tags it for you — layout, color, typography, motion. Your library sorts itself while you keep browsing.
• Smart tags on every save
• Boards assemble themselves
• Merge, split, and retag in bulk
```
3. **Search what you remember** (visual: visual-search bar mock)
```
“That dark pricing page with the serif headline” is a valid query. Curio searches the look of things, not just their titles.
• Describe it in plain words
• Filter by color, type, or layout
• Results ranked by visual match
```
4. **Share boards that sell the idea** (visual: shared-board mock)
```
Turn any collection into a clean, client-ready page in one click. No exports, no decks — just a link that looks as good as the work.
• One-link handoff
• Live boards update as you save
• Private by default, public when you say
```

### SECTION 5 — LOGOS (social proof marquee)

- Band: `border-y border-line/70 bg-mist/40 py-10 sm:py-12`
- Label (centered, 11px semibold uppercase tracking 0.2em `text-ink-faint`): `Trusted by teams with taste`
- Marquee (`mt-7`, duplicated aria-hidden track, gradient fade masks both ends, pauses on hover): 5 items, each = an 18px icon mark (Layer 10) + name in 14px, tracking 0.18em, `text-ink-soft/80`:
```
FIELDNOTE STUDIO · HELSINKI & CO · PAPER ROCKET · NORTH OF NOON · OBJET LAB
```

### SECTION 6 — PRICING (`#pricing`)

- Band: `border-t border-line/70 bg-mist/40`
- Heading: `Start free. Stay curious.` + sub `Upgrade when your library outgrows you — not before.`
- Two cards (`max-w-4xl`, grid 1 → 2 cols), rounded-2xl, `border-line`, white; Pro card featured (cobalt border/badge, `.lift`, accent CTA):

**Free — $0 forever** · "Everything you need to start a serious reference library." · CTA `Get started`
```
500 saves · Browser extension · Smart tags · Visual search · 3 shared boards
```
**Pro — $8 per month** · "For people whose bookmarks folder gave up years ago." · CTA `Go Pro` (cobalt)
```
Unlimited saves · Everything in Free · Full-library visual search · Unlimited shared boards · Team libraries & roles · Version history on boards · Priority support
```

### SECTION 7 — FINAL CTA

Dark ink panel (rounded-3xl inside the container), faint cobalt glow, centered white text:
```
Your eye deserves a better memory.
Join thousands of designers who never lose a reference again.
[ Get Curio — free ]
Mac, Windows, and every modern browser.
```

### SECTION 8 — FOOTER

- Blurb under the wordmark: `One place for every reference.`
- 4 link columns (all `href="#"`):
```
Product:   Features · Pricing · Changelog · Extension · Mobile
Company:   About · Journal · Careers · Press kit
Resources: Help center · Community · API docs · Status
Legal:     Privacy · Terms · Cookies
```
- Legal line: `© 2026 Curio Labs, Inc. A fictional product, lovingly imagined.`

---

## LAYER 8 — ANIMATION STANDARDS (project-wide)

```js
const ease = [0.22, 1, 0.36, 1];        // CSS transitions
// GSAP hero: expo.out, [data-hero-stagger] stagger 0.09
// Collage pop-in: stagger { each: 0.05, from: 'random' }
// Feature parallax: scrub 1.2, start 'top 95%'
// Hover: .lift 500ms; .collage-card flatten 600ms; marquee 32s, pause on hover
// Full prefers-reduced-motion guard (Layer 4 block)
```

---

## LAYER 9 — RESPONSIVE STANDARDS

- Mobile-first. Hero `text-5xl → sm:text-7xl`. Container padding `px-4`.
- Collage: `columns-2 sm:columns-3 lg:columns-4`.
- Feature rows stack (visual below text) under `md:`; pricing 1 col → 2 cols md.
- Nav pill: hide center links under `sm:`, keep wordmark + CTA.

---

## LAYER 10 — ICON SET

No icon library. Vector art, exactly as follows:

- **5 marquee marks** — solid 24×24 SVGs stored as files in `src/assets/logos/` and imported with `?raw`: `pencil.svg`, `globe-alt.svg`, `rocket-launch.svg`, `sun.svg`, `beaker.svg` (Heroicons solid set, MIT). They render at 18px inside `.logo-mark`; hardcoded fills are overridden by CSS: `.logo-mark svg path { fill: currentColor; }` so the marks inherit `text-ink-soft/80`.
- **Feature bullet check** — inline SVG, 20×20 viewBox, stroke `currentColor` 1.5, `h-4 w-4 text-ink-faint`.
- **Pricing checklist check** — inline `Check` component; cobalt on the featured Pro card, ink on Free.
- **CTA buttons are text-only pills** — no arrow glyphs anywhere.

---

## LAYER 11 — REPRODUCE-EXACTLY CLAUSE

Reproduce exactly. Do not:
- Substitute fonts — DM Sans is the only family, including the technical chips.
- Round color values — the accent is exactly `#2547ff` on exactly `#fdfdfc`.
- Shorten copy — every headline, bullet, plan feature, and the legal line are verbatim strings.
- Replace generative CSS cards with stock images or screenshots.
- Add icon libraries or arrow glyphs on CTAs; the only vector art is the Layer 10 set.
- Skip animation values (hero stagger 0.09; collage random 0.05; parallax scrub 1.2; marquee 32s).

If a constraint conflicts with framework limitations, clamp to the nearest valid value and note the substitution as a comment — do not silently change.

---

*Curio · curio-saas-landing-01 · Fivefold prompt library · 2026-07-09*
