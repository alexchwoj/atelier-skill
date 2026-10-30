# Ous — Hero Section Prompt (final, paste-ready)

> Paste everything below LAYER 0 into your AI website builder (Claude Code · Cursor · v0 · Lovable · Bolt · Windsurf). It reproduces the final Ous hero exactly. Reproduce verbatim — do not substitute fonts, round colors, shorten copy, or skip animation values.

---

## LAYER 0 — META

```yaml
asset_id: ous-cinematic-hero-01
category: hero-section
aesthetic: dark-cinematic
industry: creative-collective
tone: premium
preview_video: https://cdn.5sdesign.art/projects/ous.mp4
license: free
version: 1.0
last_updated: 2026-07-18
```

---

## LAYER 1 — OPENING DECLARATION

Build a **single-screen hero section** for **Ous** — a global collective of digital nomads, creatives, and independent makers.

Use the following **pinned** tech stack (do not substitute):

- **React 19 + Vite 6** (plain JSX, no TypeScript)
- **Tailwind CSS 4** via the `@tailwindcss/vite` plugin (import with `@import "tailwindcss";` in `index.css` — no `tailwind.config.js` needed)
- **GSAP 3** for the entrance timeline
- Icons are **inline SVG only** — do not add any icon library

The aesthetic is **dark cinematic: a full-bleed looping background video framed in near-black with rounded corners, film-grain + vignette grade, one colossal cream grotesque wordmark, and a browser-tab style top nav**. `#08080a` is the outer frame background. Default text color is warm cream `#f0e8d6`. **Do not use any blue, purple, teal, or neon accents anywhere — the only "color" comes from the footage itself.**

Deliver a single `src/App.jsx` component plus `src/index.css`. Serve on port **6180**.

Page `<title>`: `Ous — a different rhythm of life`. Favicon: inline SVG data-URI, a cream letter "O" on transparent.

---

## LAYER 2 — FONTS

Load via Google Fonts in `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
```

**Archivo** is the only family. Roles:
- Giant wordmark → weight **800**, `letter-spacing: -0.03em`, `line-height: 0.82`
- Nav links + body paragraph → weight **400–500**

Base rule:
```css
body { font-family: "Archivo", -apple-system, "Helvetica Neue", Arial, sans-serif; -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; }
```

---

## LAYER 3 — COLOR SYSTEM

Define as CSS custom properties on `:root` in `index.css` (single theme, hex):

```css
:root {
  --frame:     #08080a;  /* outer page background + nav tab */
  --cream:     #f0e8d6;  /* wordmark, nav, button text-on-dark */
  --cream-dim: #d6cdb9;  /* paragraph body text */
  --ink:       #100f0d;  /* button background + arrow circle */
}
```

- Nav tab fill: `#0a0a0c` at 92% opacity
- Primary button: background `--cream`, text `--ink`; arrow circle background `--ink`, arrow stroke `--cream`

---

## LAYER 4 — CUSTOM CSS UTILITIES (invariant — paste verbatim)

```css
@import "tailwindcss";

:root {
  --frame: #08080a;
  --cream: #f0e8d6;
  --cream-dim: #d6cdb9;
  --ink: #100f0d;
}

* { box-sizing: border-box; }

html, body, #root {
  margin: 0;
  height: 100%;
  background: var(--frame);
}

body {
  font-family: "Archivo", -apple-system, "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  overflow-x: hidden;
}

/* Giant brand wordmark — heavy grotesque, tight tracking */
.wordmark {
  font-family: "Archivo", "Helvetica Neue", Arial, sans-serif;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 0.82;
  color: var(--cream);
}

/* Film-grain overlay */
.grain {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.16;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 200px 200px;
  animation: grain 0.6s steps(2) infinite;
}
@keyframes grain {
  0%   { transform: translate(0, 0); }
  50%  { transform: translate(-6px, 4px); }
  100% { transform: translate(4px, -3px); }
}

/* Soft warm/vignette grade over the footage to seat the type */
.grade {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(120% 90% at 78% 30%, rgba(0,0,0,0) 35%, rgba(6,5,4,0.35) 100%),
    linear-gradient(180deg, rgba(6,5,4,0.30) 0%, rgba(6,5,4,0) 22%, rgba(6,5,4,0) 55%, rgba(6,5,4,0.62) 100%);
}

/* Browser-tab style concave connectors on the top nav */
.tab-notch { --tab: #0a0a0c; }
.tab-notch::before,
.tab-notch::after {
  content: "";
  position: absolute;
  top: 0;
  width: 22px;
  height: 22px;
  background: transparent;
}
.tab-notch::before {
  left: -22px;
  border-top-right-radius: 22px;
  box-shadow: 11px 0 0 0 var(--tab);
}
.tab-notch::after {
  right: -22px;
  border-top-left-radius: 22px;
  box-shadow: -11px 0 0 0 var(--tab);
}

@media (prefers-reduced-motion: reduce) {
  .grain { animation: none; }
}
```

---

## LAYER 5 — BACKGROUND ASSET

**Looping background video.** Download it from the Fivefold CDN and save it locally to `public/ous.mp4` — serve it from there, do not hotlink the CDN URL at runtime:

```
https://cdn.5sdesign.art/projects/ous/ous.mp4
```

(Source footage: a ~5s cinematic clip of a person on a grassy clifftop above golden sunset clouds, 1916×1080, H.264, silent.) Render full-bleed inside the framed container:

```jsx
<video
  className="absolute inset-0 h-full w-full object-cover"
  src="/ous.mp4"
  autoPlay muted loop playsInline
/>
```

Do not swap this for a remote/placeholder URL. Stack order inside the frame: `video` (base) → `.grade` → `.grain` → nav (`z-20`) → hero content (`z-10`).

---

## LAYER 6 — SHARED BEHAVIOR

Single GSAP entrance timeline, run once on mount inside `gsap.context` (with cleanup via `ctx.revert()`), default ease `expo.out`:

```
timeline.defaults = { ease: 'expo.out' }
  .from('[data-anim="nav"]',      { y: -22,       opacity: 0, duration: 0.9 })
  .from('[data-anim="word"]',     { yPercent: 14, opacity: 0, duration: 1.4 }, 0.1)
  .from('[data-anim="copy"] > *', { y: 18,        opacity: 0, duration: 1, stagger: 0.12 }, 0.5)
```

Final resting state must be fully visible (use `gsap.from`, never leave elements at opacity 0).

---

## LAYER 7 — SECTION: HERO (the only section)

**Block 1 · Container**
- Outer: `<div className="fixed inset-0 bg-[var(--frame)] p-[7px]">`
- Framed footage: `<section className="relative h-full w-full overflow-hidden rounded-[20px] bg-black">`

**Block 2 · Background**
- `<video>` from Layer 5, then `<div className="grade" />`, then `<div className="grain" />`.

**Block 3 · Elements** (exact order, classes, and text)

1. **Top nav tab** — a dark browser-tab hanging from the top center.
   - `<nav data-anim="nav" className="tab-notch absolute left-1/2 top-0 z-20 -translate-x-1/2 rounded-b-[22px] bg-[#0a0a0c]/92 px-9 backdrop-blur-sm">`
   - Inside: `<ul className="flex h-[54px] items-center gap-9 text-[15px] text-[var(--cream)]/85">`
   - Five links, each `<a>` with `className="transition-colors duration-300 hover:text-[var(--cream)]"`, text verbatim in order:
     `About us` · `Community` · `Residencies` · `Courses` · `Questions`

2. **Giant wordmark** — bottom-left.
   - `<h1 data-anim="word" className="wordmark absolute bottom-[3.2vh] left-[2.4vw] flex select-none items-start text-[clamp(7rem,29vw,25rem)]">`
   - Child 1: `<span>Ous</span>`
   - Child 2 (asterisk): `<span className="ml-[0.03em] mt-[0.12em] text-[0.22em] font-semibold leading-none">*</span>`

3. **Copy block** — bottom-right, column, right-aligned items.
   - `<div data-anim="copy" className="absolute bottom-[6.5vh] right-[3vw] flex w-[min(30rem,84vw)] flex-col items-end gap-7">`
   - **Paragraph**: `<p className="max-w-[23rem] text-left text-[15px] leading-[1.5] text-[var(--cream-dim)]">` — text verbatim:
     > Ous is a global collective of digital nomads, creatives, and independent makers who choose a different rhythm of life — one driven not by cities, deadlines, and noise, but by curiosity.
   - **CTA button**: `<a href="#" className="group inline-flex items-center gap-4 rounded-full bg-[var(--cream)] py-[7px] pl-7 pr-[7px] text-[17px] font-medium text-[var(--ink)]">`
     - Text: `Get started`
     - Then the arrow circle: `<span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--ink)] text-[var(--cream)] transition-transform duration-500 ease-out group-hover:rotate-45">` containing an inline arrow SVG:
       ```jsx
       <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
         <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
       </svg>
       ```
     - Hover: the arrow circle rotates 45° (`group-hover:rotate-45`).

Wrap the wordmark + copy block in `<div className="absolute inset-0 z-10">`.

---

## LAYER 8 — ANIMATION STANDARDS

- Ease everywhere: `expo.out` (GSAP).
- Nav enters first (0.9s), then wordmark rises (1.4s @ 0.1), then copy children stagger up (1s each, stagger 0.12 @ 0.5).
- CTA arrow rotation: `transition-transform duration-500 ease-out` on hover only.
- Respect `prefers-reduced-motion`: grain animation off (already in CSS).

---

## LAYER 9 — RESPONSIVE STANDARDS

- The hero is a fixed full-viewport frame (`fixed inset-0`) — no scroll.
- Wordmark size is fluid: `clamp(7rem, 29vw, 25rem)` — never a fixed px value.
- Positions use viewport units (`bottom-[3.2vh]`, `left-[2.4vw]`, `right-[3vw]`) so the composition holds across widths.
- Copy block width clamps: `w-[min(30rem,84vw)]` so it never overflows on small screens.

---

## LAYER 10 — ICONS

Inline SVG only. The single icon used is the right-arrow in the CTA (path `M5 12h14M13 6l6 6-6 6`, `currentColor`, stroke width 2, round caps/joins). Do not import any icon package.

---

## LAYER 11 — REPRODUCE-EXACTLY CLAUSE

Reproduce exactly. Do not:
- Substitute the font (must be **Archivo**, weight 800 for the wordmark).
- Round any color value (`#08080a`, `#f0e8d6`, `#d6cdb9`, `#100f0d`, `#0a0a0c`).
- Shorten or reword the paragraph or nav labels.
- Skip GSAP delays/durations (nav 0.9 / word 1.4 @0.1 / copy 1.0 stagger 0.12 @0.5, ease `expo.out`).
- Add any icon library, extra section, floating widget, or background besides the local `public/ous.mp4`.
- Change the concave-corner nav, the grain, or the vignette grade.

If a constraint conflicts with a framework limitation, clamp to the nearest valid value and note the substitution as a code comment — do not silently change.
