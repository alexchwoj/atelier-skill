# Taste — "Taste The Notes" Cinematic Poster Hero · Fivefold Prompt

## LAYER 0 — META

```yaml
asset_id: taste-notes-hero-cinematic-01
category: hero
aesthetic: cinematic classical poster · engraved Roman serif · golden glow
industry: events / luxury / classical music
tone: gilded · still · ceremonial
preview_video: https://cdn.5sdesign.art/projects/taste.mp4
license: free
version: 1.0
last_updated: 2026-07-15
notes: Single full-viewport poster — a looping golden-hour film of marble
 statues flanking a gilded harp, engraved Cinzel caps floating in warm
 cream with a soft golden text-shadow glow, a letter-spaced nav with one
 Reserve pill, and a sponsor row anchored near the foot. Zero animation:
 the film and two hover color-shifts are the only motion. Vanilla HTML,
 one file, no build step.
```

---

## LAYER 1 — OPENING DECLARATION

Build a **hero section** for **Taste** — a luxury classical-music and fine-wine tasting evening. It is a single full-viewport poster: a looping golden-hour video of marble statues flanking a gilded harp, with engraved Roman serif typography floating over it in warm cream with a soft golden glow.

Use the following **pinned** tech stack (do not substitute):

- **One self-contained `index.html`** — vanilla HTML + CSS + a 4-line autoplay-fallback script. No build step, no framework, no Tailwind, no dependencies.
- If your platform forces React, mount this exact markup and CSS unchanged inside a single component — visual output must be identical.
- **No animation.** This hero is a static poster — all content renders immediately and stays visible. The only motion is the background video and two CSS hover transitions.
- **No icon library.** The only graphic is one inline SVG mark (Layer 10).

The aesthetic is **"cinematic classical poster — golden-hour marble and gilded harp on a looping background video, engraved Roman serif caps in warm cream, soft golden glow on every letter"**. `#120c05` is the global background (visible only before the video paints). Default text color is `#f3e9d2`. **Do not use purple, indigo, neon colors, or pure `#ffffff` anywhere except the nav-link hover.** Never hide content behind scroll or entry animations — everything is visible on first paint.

Page `<title>`: `Taste — Taste The Notes`. Meta description: `Taste The Notes — an evening of music and fine champagne.` The page never scrolls (`body { overflow: hidden }`). Serve the folder with any static server (video needs Range support — a tiny `python3 -m http.server` works) or open `index.html` directly.

---

## LAYER 2 — FONTS

Load via Google Fonts in `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
```

```css
--serif: "Cinzel", serif;
--sans: "Jost", sans-serif;
body { font-family: var(--sans); }
```

**Cinzel** (weight 500 in practice) — title, nav brand word, sponsor names, monogram. **Jost** (300) — nav links, sponsor eyebrow line. If a requested weight is unavailable, clamp down to the nearest available weight — do not synthesize.

---

## LAYER 3 — COLOR SYSTEM

Define on `:root` (single theme):

```css
:root {
  --cream: #f3e9d2;                                /* all display text */
  --cream-soft: rgba(243, 233, 210, 0.82);         /* nav links, eyebrow */
  --gold: #e9b969;                                  /* the SVG mark only */
  --glow: 0 0 26px rgba(255, 219, 160, 0.38), 0 1px 3px rgba(58, 38, 10, 0.45);
  --glow-soft: 0 0 14px rgba(255, 219, 160, 0.28), 0 1px 2px rgba(58, 38, 10, 0.4);
}
```

Literal values used directly (do not round): page bg `#120c05` · Reserve pill border `rgba(243,233,210,0.55)` · sponsor divider `rgba(243,233,210,0.4)` · monogram circle border `rgba(243,233,210,0.75)` · Reserve hover text `#3a2a12` · nav-link hover `#fff`.

---

## LAYER 4 — CUSTOM CSS (the design DNA — paste verbatim, do not paraphrase)

The two glows are `text-shadow` variables applied per element (never `drop-shadow`, never a box-shadow):

- Title: `text-shadow: var(--glow);`
- Nav + sponsors: `text-shadow: var(--glow-soft);`
- Brand SVG halo: `filter: drop-shadow(0 0 8px rgba(255, 200, 120, 0.55));`

Cinematic veil — darkens top & bottom edges so type reads like a printed poster:

```css
.stage::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background:
    linear-gradient(to bottom, rgba(24, 15, 4, 0.34), rgba(24, 15, 4, 0) 22%),
    linear-gradient(to top, rgba(24, 15, 4, 0.42), rgba(24, 15, 4, 0) 24%);
}
```

Letter-spacing discipline: every tracked element pairs `letter-spacing` with an equal `text-indent` so centered text stays optically centered (0.42em brand · 0.34em links · 0.18em title · 0.38em eyebrow · 0.3em / 0.24em sponsor names).

---

## LAYER 5 — BACKGROUND ASSETS

Two files. Download each and serve locally next to `index.html` — do not hotlink:

- `https://cdn.5sdesign.art/projects/taste/taste.mp4` → save to `taste.mp4` (golden-hour marble statues + gilded harp, slow loop)
- `https://cdn.5sdesign.art/projects/taste/poster.jpg` → save to `poster.jpg` (first-frame poster)

```html
<video autoplay muted loop playsinline preload="auto" poster="poster.jpg" id="bg">
  <source src="taste.mp4" type="video/mp4" />
</video>
```

Autoplay fallback (required — paste at end of `<body>`):

```html
<script>
  const v = document.getElementById("bg");
  const tryPlay = () => v.play().catch(() => {});
  tryPlay();
  document.addEventListener("pointerdown", tryPlay, { once: true });
</script>
```

Do not add extra color overlays on the video beyond the `.stage::before` veil.

---

## LAYER 6 — SHARED COMPONENTS

None. This asset intentionally ships zero animation components — no FadeIn, no reveals, no scroll triggers. All content is statically rendered and visible on first paint.

---

## LAYER 7 — SECTIONS

### SECTION 1 — POSTER HERO (the entire page)

**Block 1 · Container**
- `<main class="stage">` — `position: relative; width: 100%; height: 100vh; height: 100svh; min-height: 620px; overflow: hidden;`
- Video fills it: `position: absolute; inset: 0; object-fit: cover; object-position: center;`
- Veil: `.stage::before` (Layer 4), `z-index: 1`
- Content wrapper: `<div class="ui">` — `position: absolute; inset: 0; z-index: 2;`

**Block 2 · Elements** (all absolutely positioned inside `.ui`)

> **Navbar** — `position: absolute; top/left/right: 0; display: flex; align-items: center; justify-content: space-between; padding: clamp(18px, 2.4vh, 28px) clamp(22px, 4vw, 56px);`
>
> **Brand (left)** — `<a class="brand">`: flex, gap 12px, color `var(--cream)`.
> - Mark: the inline SVG from Layer 10 with the drop-shadow halo.
> - Word `TASTE`: Cinzel 500, `1.05rem`, `letter-spacing: 0.42em; text-indent: 0.42em;`, `text-shadow: var(--glow-soft)`.
>
> **Nav links (right)** — flex, `gap: clamp(20px, 3vw, 42px)`. Each link: Jost 300, `0.72rem`, uppercase, `letter-spacing: 0.34em; text-indent: 0.34em;`, color `var(--cream-soft)`, `text-shadow: var(--glow-soft)`, `transition: color 0.25s ease`, hover `#fff`. Links in order: **Overture · Line-up · Tasting**.
>
> **Reserve pill (last nav item)** — same typography plus: `border: 1px solid rgba(243,233,210,0.55); border-radius: 999px; padding: 10px 22px 9px; color: var(--cream);` `transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease`. Hover: background `var(--cream)`, text `#3a2a12`, border `var(--cream)`. Text: **Reserve**.

> **Title** — `<h1 class="title">`: `position: absolute; top: 11.5%; left: 0; right: 0; text-align: center;` Cinzel 500, `font-size: clamp(2.2rem, 6.4vw, 6.6rem); line-height: 1; letter-spacing: 0.18em; text-indent: 0.18em; white-space: nowrap; text-shadow: var(--glow);`
> Text: **`TASTE&nbsp;THE&nbsp;NOTES`** (non-breaking spaces between words).

> **Sponsors row** — `position: absolute; left/right: 0; bottom: 9.5%; display: flex; align-items: center; justify-content: center; gap: clamp(28px, 4vw, 64px); text-shadow: var(--glow-soft);`
>
> **Sponsor 1 · Maison block** (centered text)
> - Eyebrow: text `Maison fondée en 1874`, styled `text-transform: uppercase;` Jost 300, `font-size: clamp(0.42rem, 0.55vw, 0.55rem); letter-spacing: 0.38em; text-indent: 0.38em;` color `var(--cream-soft)`, `margin-bottom: 5px`.
> - Name: **TAVIGNAC** — Cinzel 500, `font-size: clamp(0.95rem, 1.5vw, 1.45rem); letter-spacing: 0.3em; text-indent: 0.3em;`
>
> **Divider** — `width: 1px; height: clamp(30px, 4vh, 44px); background: rgba(243,233,210,0.4);`
>
> **Sponsor 2 · Cellars block** (flex, gap 16px)
> - Monogram circle: `width/height: clamp(30px, 3.4vw, 42px); border: 1px solid rgba(243,233,210,0.75); border-radius: 50%;` centered Cinzel 500 `clamp(0.7rem, 0.95vw, 0.95rem)`, `letter-spacing: 0.06em`, text **CD**.
> - Name: **`CELLIERS D&rsquo;AUBE`** — Cinzel 500, `font-size: clamp(0.85rem, 1.3vw, 1.25rem); letter-spacing: 0.24em; white-space: nowrap;`

**Block 3 · Copy** (verbatim, in order of appearance — the eyebrow is uppercased by CSS, not in the HTML)
```
TASTE
Overture
Line-up
Tasting
Reserve
TASTE THE NOTES
Maison fondée en 1874
TAVIGNAC
CD
CELLIERS D'AUBE
```

---

## LAYER 8 — ANIMATION STANDARDS

This asset is a static poster. Project-wide rules:

- Hover transitions only, `0.25s ease`, color / background / border-color — **no transforms**.
- No entry animations, no scroll-linked animations, no parallax.
- The background video is the only moving element besides hover color shifts.

---

## LAYER 9 — RESPONSIVE STANDARDS

- `≤900px`: hide all nav links except the Reserve pill (`​.nav-links a:not(.reserve) { display: none; }`); title becomes `white-space: normal` with `letter-spacing: 0.14em`.
- `≤620px`: sponsors stack vertically (`flex-direction: column; gap: 18px; bottom: 11%`); divider hidden.
- Everything else scales through the `clamp()` values already specified — do not add extra breakpoints. No mobile menu.

---

## LAYER 10 — MARKS (inline SVG — the only graphic in this asset)

No icon library. Reject any request to import lucide/phosphor/tabler. The circle-with-vertical-line mark echoes the glowing emblem on the harp pedestal in the video.

```html
<svg width="22" height="22" viewBox="0 0 22 22" fill="none">
  <circle cx="11" cy="11" r="9.5" stroke="#e9b969" stroke-width="1.4" />
  <line x1="11" y1="0.5" x2="11" y2="21.5" stroke="#e9b969" stroke-width="1.4" />
</svg>
```

---

## LAYER 11 — REPRODUCE-EXACTLY CLAUSE

Reproduce exactly. Do not:
- Substitute fonts ("a serif like Cinzel" is not Cinzel).
- Round color values ("close to #f3e9d2" is not #f3e9d2; the glow alphas are part of the spec).
- Shorten or rewrite copy — every string in Block 3 is verbatim, including "Maison fondée en 1874" and the `&rsquo;` in CELLIERS D'AUBE.
- Add entry animations, scroll reveals, parallax, or hover transforms — this poster is intentionally still.
- Replace the two glow variables with `drop-shadow` or box-shadows — paste the `text-shadow` values as written.
- Drop a `letter-spacing` without its paired `text-indent` — centered tracked text drifts off-center without it.
- Hotlink the video or poster — download both CDN files and serve them next to `index.html`.
- Change the absolute anchors: title `top: 11.5%`, sponsors `bottom: 9.5%`, nav padding `clamp(18px, 2.4vh, 28px) clamp(22px, 4vw, 56px)`.

If a constraint conflicts with framework limitations, clamp to the nearest valid value and note the substitution as a comment — do not silently change.

---

*Taste · taste-notes-hero-cinematic-01 · Fivefold prompt library · 2026-07-15*
