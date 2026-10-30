# Laura — Wellness Hero Landing · Fivefold Prompt

## LAYER 0 — META

```yaml
asset_id: wellness-hero-laura-01
category: hero
aesthetic: cinematic pastoral calm · sans-over-serif-italic headline · soft halo CTA
industry: wellness / movement / retreats
tone: slow · warm · unhurried
preview_video: https://cdn.5sdesign.art/projects/laura.mp4
license: free
version: 1.0
last_updated: 2026-07-15
notes: One-viewport hero — a golden-hour meadow film behind warm off-white
 type: a light DM Sans line stacked over an Instrument Serif italic line,
 one soft-halo white CTA, a three-column nav with hairline rules, and a
 bracketed whisper note bottom-left. Completely static: no entrance
 animation, no scroll; the film and two hovers are the only motion.
 Vanilla HTML, one file, no build step.
```

---

## LAYER 1 — OPENING DECLARATION

Build a **single-screen hero landing page** for **Laura** — a **slow-living movement & rest practice studio**.

Use the following **pinned** tech stack (do not substitute):

- **One self-contained `index.html`** — vanilla HTML + CSS. No build step, no framework, no Tailwind, no JavaScript beyond the markup.
- If your platform forces React, mount this exact markup and CSS unchanged inside a single component — visual output must be identical.
- **No animation library and no entrance animation.** All content renders visible on first paint; the only motion is the background video and two CSS hover transitions.
- No icons anywhere on the page.

The aesthetic is **cinematic pastoral calm: a full-screen looping meadow-at-dusk video, warm off-white typography, one light sans headline stacked over an elegant serif italic, a single soft white CTA, and nothing else — one viewport, no scroll**. `#3d4a49` is the global fallback background (shown while the video loads). Default text color is `#f4f1ea`. **Do not use purple, indigo, neon green, or pure white `#ffffff` text anywhere** (the CTA surface is `#fdfcfa`, its text `#1f1f1f`).

The page is exactly one viewport: `html, body { height: 100%; overflow: hidden; }`, content column at `height: 100dvh`. Page `<title>`: `Laura — Start where you are`. Favicon: inline SVG data URI of a `✦` glyph. Open `index.html` directly or serve the folder with any static server.

---

## LAYER 2 — FONTS

Load via Google Fonts in `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
```

- **DM Sans** (300/400/500) — everything except one line: body, nav, headline line 1, subheading, CTA, footer note.
- **Instrument Serif italic** (400 only — it ships in no other weight; never synthesize bold) — headline line 2 exclusively.

`body { font-family: "DM Sans", sans-serif; -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; }`

---

## LAYER 3 — COLOR SYSTEM

Define on `:root`:

```css
:root {
  --ink: #f4f1ea;                            /* warm off-white — headline line 2 */
  --ink-soft: rgba(244, 241, 234, 0.82);     /* headline line 1, subheading, wordmark */
  --ink-dim: rgba(244, 241, 234, 0.7);       /* nav links, ® mark, footer note */
}
```

Literal values used directly (do not round): page fallback `#3d4a49` · hairline rules `rgba(244,241,234,0.55)` · top tint `rgba(20,30,32,0.14) → transparent at 22%` · CTA surface `#fdfcfa` · CTA text `#1f1f1f` · CTA halo `0 0 0 4px rgba(253,252,250,0.28), 0 2px 10px rgba(20,30,32,0.18)`.

---

## LAYER 4 — CUSTOM CSS UTILITIES

None beyond Layer 3 — the page is bare CSS classes, no utility framework. The signature values live inline in the section specs (Layer 7); the CTA halo shadow is the one effect that must be copied digit-for-digit.

---

## LAYER 5 — BACKGROUND ASSET

Looping meadow film. Download it and serve locally next to `index.html` — do not hotlink:

- `https://cdn.5sdesign.art/projects/laura/laura.mp4` → save to `laura.mp4` (golden-hour meadow on rolling hills, soft haze, a lone upright piano and player in the grass — slow, ambient, seamless loop)

```html
<video class="bg-video" autoplay muted loop playsinline>
  <source src="laura.mp4" type="video/mp4">
</video>
<div class="bg-tint"></div>
```

```css
.bg-video { position: fixed; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; }
.bg-tint {
  position: fixed; inset: 0; z-index: 1; pointer-events: none;
  background: linear-gradient(180deg, rgba(20, 30, 32, 0.14) 0%, rgba(20, 30, 32, 0) 22%);
}
```

All page content sits in `<div class="page">` — `position: relative; z-index: 2; height: 100dvh; display: flex; flex-direction: column;`

---

## LAYER 6 — SHARED COMPONENTS

None. No FadeIn, no reveals, no timeline — the page is deliberately still. (If your platform insists on an entrance effect, refuse: stillness is the spec.)

---

## LAYER 7 — SECTIONS

### SECTION 1 — NAVBAR

- `<nav class="nav">` — `display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; padding: 30px 42px 0;`

> **Brand lockup (left, `justify-self: start`)** — flex, gap 13px:
> - Vertical rule: `width: 1px; height: 22px; background: rgba(244,241,234,0.55);`
> - Wordmark: **laura** — `font-size: 21px; font-weight: 400; letter-spacing: 0.01em; line-height: 1;` color `var(--ink-soft)`
> - Registered mark: `<sup>` **®** — `font-size: 8px; margin-left: 2px;` color `var(--ink-dim)`

> **Nav links (center, `justify-self: center`)** — flex, gap 38px. Each: `font-size: 15px; font-weight: 400; letter-spacing: 0.01em;` color `var(--ink-dim)`, `transition: color 0.25s ease`, hover `var(--ink)`. In order: **About · Journal · Retreats · Community**

> **Contact (right, `justify-self: end`)** — flex, gap 13px: link **Contact** (`font-size: 16px`, same colors/hover as links) followed by a second vertical rule (same spec as the brand rule).

### SECTION 2 — HERO

- `<main class="hero">` — `flex: 1; display: flex; flex-direction: column; align-items: center; text-align: center; padding: 0 24px; margin-top: 11vh;`

> **Heading line 1 (sans)** — first `<span>` of the `<h1>`, `display: block`:
> `font-weight: 300; font-size: clamp(42px, 4.9vw, 74px); line-height: 1.08; letter-spacing: -0.01em;` color `var(--ink-soft)`
> Text: **Start where you are**

> **Heading line 2 (serif italic)** — second `<span>`, `display: block; margin-top: 2px;`:
> `font-family: "Instrument Serif", serif; font-style: italic; font-weight: 400; font-size: clamp(48px, 5.6vw, 86px); line-height: 1.08; letter-spacing: 0;` color `var(--ink)`
> Text: **Move, rest, and repeat**

> **Subheading** — `margin-top: 26px; max-width: 420px; font-size: 16px; font-weight: 300; line-height: 1.45;` color `var(--ink-soft)`
> Text: **Not another routine. Just time to slow down, release tension, and return to balance** (no trailing period)

> **CTA (the only button on the page)** — `<a class="cta">`:
> `margin-top: 34px; display: inline-block; font-size: 15px; font-weight: 500; color: #1f1f1f; background: #fdfcfa; padding: 15px 26px; border-radius: 12px;`
> Halo: `box-shadow: 0 0 0 4px rgba(253,252,250,0.28), 0 2px 10px rgba(20,30,32,0.18);`
> Hover: `transform: translateY(-1px)` and shadow `0 0 0 5px rgba(253,252,250,0.34), 0 4px 14px rgba(20,30,32,0.22)` — `transition: transform 0.25s ease, box-shadow 0.25s ease`
> Text: **Start Your Practice**

### SECTION 3 — FOOTER NOTE

- `<footer class="foot">` — `position: absolute; left/right: 0; bottom: 0; display: flex; align-items: flex-end; justify-content: space-between; padding: 0 42px 26px; pointer-events: none;`
- One child only (left note). The right side is intentionally **empty** — do not add badges, sparkles, social icons, or floating buttons.

> **Caption (bottom-left)** — `font-size: 13.5px; font-weight: 300; letter-spacing: 0.01em;` color `var(--ink-dim)`
> Text (verbatim, including square brackets and curly quotes): **[Begin where you are, not where you “should” be]**

**Copy** (verbatim, in order of appearance)
```
laura®
About
Journal
Retreats
Community
Contact
Start where you are
Move, rest, and repeat
Not another routine. Just time to slow down, release tension, and return to balance
Start Your Practice
[Begin where you are, not where you “should” be]
```

---

## LAYER 8 — ANIMATION STANDARDS

None. No entrance animation, no scroll animation, no element may ever start at `opacity: 0`. The complete motion budget:

- Nav/Contact links: `color 0.25s ease` on hover.
- CTA: `translateY(-1px)` + halo widens, `0.25s ease` — the only transform on the page.
- The meadow film loops behind everything.

---

## LAYER 9 — RESPONSIVE STANDARDS

- **Mobile (`≤720px`)**: nav becomes `grid-template-columns: auto 1fr` with center links hidden (`display: none`); nav padding `22px 20px 0`; hero `margin-top: 14vh`; footer padding `0 20px 20px`.
- Headline sizes always track their `clamp()` values — never fixed px.
- Video stays `object-fit: cover` at every width. No mobile menu — links simply hide.

---

## LAYER 10 — ICON SET

Zero icons. The favicon is an inline `✦` SVG data URI in `<head>`; nothing else. Reject any icon-library request.

---

## LAYER 11 — REPRODUCE-EXACTLY CLAUSE

Reproduce exactly. Do not:
- Substitute fonts ("similar to DM Sans" is not DM Sans; "a serif italic" is not Instrument Serif italic).
- Round color values ("close to #f4f1ea" is not #f4f1ea; every alpha is part of the spec).
- Shorten or re-punctuate copy — the subheading has no trailing period; the footer caption keeps its square brackets and curly quotes; the wordmark is lowercase "laura" with a superscript ®.
- Add entrance animations, scroll reveals, icons, sparkles, badges, extra sections, or a scrollbar — the page is one viewport with exactly: navbar, two-line heading, subheading, one CTA, one footer caption.
- Alter the CTA halo shadows — both states are copied digit-for-digit.
- Hotlink the film — download the CDN file to `laura.mp4` and serve it locally.

If a constraint conflicts with framework limitations, clamp to the nearest valid value and note the substitution as a comment — do not silently change.

---

*Laura · wellness-hero-laura-01 · Fivefold prompt library · 2026-07-15*
