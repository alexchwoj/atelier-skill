# Estudio — Graphic Design Studio Hero · Fivefold Prompt

```yaml
asset_id: estudio-broadsheet-hero-01
category: landing-page
aesthetic: editorial-broadsheet · monochrome-green · interactive
industry: agency / graphic-design-studio
tone: literary · confident · understated
preview_video: https://cdn.5sdesign.art/projects/estudio.mp4
license: pro
version: 1.0
last_updated: 2026-06-15
notes: Light single-screen hero (no scroll). Linen canvas, one neon-green accent.
 Massive serif display + an interactive black-and-white image trail that follows
 the cursor across the masthead. Two components only — Navbar + Hero.
```

---

## LAYER 1 — OPENING DECLARATION

Build a **single-screen hero page** (one viewport, no scroll) for **Estudio** — a graphic design studio with the line *"Brands that refuse to blend in."*

Use the following **pinned** tech stack (do not substitute):

- **React 18 + Vite 5** — plain **JSX, no TypeScript**.
- **Tailwind CSS 3** with a custom `tailwind.config.js` theme (tokens in Layer 3). Not Tailwind v4, not a CSS-only `@theme` block.
- **`framer-motion`** — entrance animation only (`import { motion } from 'framer-motion'`).
- **`gsap`** — drives the interactive cursor image-trail (Layer 6).
- **`lucide-react`** — exactly one icon: `ArrowRight`.

**Critical build note:** render `<App />` **without** `React.StrictMode` in `src/main.jsx`. The image-trail attaches global listeners and runs an un-cancelled `requestAnimationFrame` loop; StrictMode's double-mount in dev spawns a second, duplicated trail. Mount once, plainly.

The aesthetic is the **Estudio broadsheet** — a light editorial newspaper feel. A near-white **Linen** (`#fafffa`) canvas, near-black **Ink** (`#121613`) type, and a **single** electric accent, **Voltage green** (`#2bee4b`), used only for the CTA fill, the logo's split, the eyebrow ticks, and the `||` mark. Everything else is monochrome with a faint green cast. The display headline is an oversized literary serif on a tight `0.9` line-height; the body voice is a light, neutral sans at weight `350`.

**Do not:** add a dark hero, a second saturated color, gradients on the page background, card borders/elevation, any font weight above `550`, drop shadows other than the one Voltage CTA glow, emoji, or AI-default accents like `bg-blue-500`. Imagery stays strictly black-and-white / duotone.

---

## LAYER 2 — FONTS

Load three families from Google Fonts in `index.html` `<head>` (preconnect first):

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..600&family=Inter:wght@200..600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap"
  rel="stylesheet"
/>
```

The rest of the `<head>`: `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />`, `<meta name="theme-color" content="#fafffa" />`, `<title>Estudio — Graphic Design Studio</title>`, and the meta description:

```html
<meta
  name="description"
  content="Estudio — a graphic design studio. An editorial broadsheet where massive serif display type and black-and-white imagery do the heavy lifting."
/>
```

Role mapping (registered as Tailwind families in Layer 3):

| Role | Family | Tailwind class |
|---|---|---|
| Body / UI / wordmark (weight **350** signature) | **Inter** (variable 200–600) | `font-lausanne` |
| Literary display masthead (light, w300–400) | **Fraunces** (optical sizing on) | `font-editorial` |
| Architectural display (used in poster art) | **Playfair Display** | `font-mondwest` |
| Small italic caption | system **Times** serif | `font-times` |

The display headline uses **Fraunces** at `font-light`, with the second line set in **italic**. The body and all UI use **Inter at weight 350** — do not render body text heavier. Editorial/architectural faces get `font-optical-sizing: auto` so they stay optically correct at billboard scale.

---

## LAYER 3 — DESIGN TOKENS (`tailwind.config.js`)

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // One neon green, the rest monochrome with a green cast
        linen:   '#fafffa', // canvas / page background
        ink:     '#121613', // primary text, dark surface
        bark:    '#232924', // secondary dark surface
        sage:    '#516254', // muted text, captions
        mist:    '#c8d2c8', // hairlines / dividers
        voltage: '#2bee4b', // ONLY: CTA fill, logo split, ticks, "||"
        moss:    '#93b799', // secondary green accent (never primary)
        pollen:  '#c4e4c9', // tertiary green accent
      },
      fontFamily: {
        lausanne:  ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        editorial: ['Fraunces', 'Georgia', 'serif'],
        mondwest:  ['"Playfair Display"', 'Georgia', 'serif'],
        times:     ['Times', '"Times New Roman"', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter2: '-0.02em',
        wide1:    '0.01em',
        caps:     '0.16em',
      },
      borderRadius: {
        card: '14px',
        img:  '14px',
        btn:  '10px',
        sm5:  '5px',
      },
      boxShadow: {
        // Dual-layer green halo — reserved for the single Voltage CTA
        voltage:
          'rgba(16, 94, 29, 0.45) 1px 8px 20px 0px, rgba(18, 146, 39, 0.25) 1px 8px 20px 0px',
      },
      maxWidth: { page: '1440px' },
    },
  },
  plugins: [],
}
```

---

## LAYER 4 — CUSTOM CSS UTILITIES (`src/index.css`)

Paste **verbatim** — these helper classes are the design DNA. (`@tailwind base/components/utilities` at the top.)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
  }

  body {
    @apply bg-linen text-ink font-lausanne antialiased;
    font-weight: 350; /* Inter 350 — the brand's signature body voice */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  /* Display faces stay optically sized at billboard scale */
  .font-editorial,
  .font-mondwest { font-optical-sizing: auto; }

  ::selection { background: #121613; color: #fafffa; }

  /* Quiet scrollbar on the Linen canvas */
  ::-webkit-scrollbar { width: 10px; }
  ::-webkit-scrollbar-track { background: #fafffa; }
  ::-webkit-scrollbar-thumb {
    background: #c8d2c8;
    border-radius: 999px;
    border: 3px solid #fafffa;
  }
  ::-webkit-scrollbar-thumb:hover { background: #93b799; }
}

@layer components {
  /* The ONLY filled button on the site */
  .btn-voltage {
    @apply inline-flex items-center gap-3 rounded-btn bg-voltage px-[50px] py-5 font-lausanne text-[14px] uppercase text-ink shadow-voltage transition-transform duration-300;
    font-weight: 550;
    letter-spacing: 0.01em;
  }
  .btn-voltage:hover { transform: translateY(-2px); }

  /* Accent tick — short Voltage rest against the monochrome field */
  .tick { @apply inline-block h-[2px] w-[50px] shrink-0 bg-voltage; }

  /* Caption — Times, sage, observational fragments */
  .caption-times {
    @apply font-times text-[16px] text-sage;
    font-style: italic;
    line-height: 1.2;
  }

  /* Small uppercase eyebrow (Inter 350) */
  .eyebrow {
    @apply font-lausanne text-[11px] uppercase tracking-caps text-sage;
    font-weight: 350;
  }

  /* Ghost link — underline sweeps in on hover */
  .link-underline { position: relative; }
  .link-underline::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 1px;
    width: 100%;
    background: currentColor;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.45s cubic-bezier(0.65, 0, 0.35, 1);
  }
  .link-underline:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
}

@layer utilities {
  .text-balance { text-wrap: balance; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## LAYER 5 — POSTER ASSETS (8 self-contained SVG tiles)

The image trail draws from **8 black-and-white / duotone broadsheet tiles**, saved as static SVGs in `public/trail/poster-1.svg … poster-8.svg`. They are self-contained — no external images. Each is a `300×330` viewBox built only from the palette in Layer 3, with a small Georgia-italic index caption. Create all eight verbatim:

```xml
<!-- poster-1.svg — Index — 01 : grid on ink -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 330">
  <rect width="300" height="330" fill="#121613"/>
  <g stroke="#fafffa" stroke-width="1" opacity="0.5">
    <line x1="0" y1="66" x2="300" y2="66"/><line x1="0" y1="132" x2="300" y2="132"/>
    <line x1="0" y1="198" x2="300" y2="198"/><line x1="0" y1="264" x2="300" y2="264"/>
    <line x1="60" y1="0" x2="60" y2="330"/><line x1="120" y1="0" x2="120" y2="330"/>
    <line x1="180" y1="0" x2="180" y2="330"/><line x1="240" y1="0" x2="240" y2="330"/>
  </g>
  <rect x="120" y="132" width="60" height="66" fill="#516254"/>
  <text x="22" y="308" font-family="Georgia, serif" font-style="italic" font-size="14" fill="#c8d2c8">Index — 01</text>
</svg>

<!-- poster-2.svg — Form — 02 : concentric rings on linen -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 330">
  <rect width="300" height="330" fill="#fafffa"/>
  <g fill="none" stroke="#121613" stroke-width="4">
    <circle cx="150" cy="150" r="24"/>
    <circle cx="150" cy="150" r="54"/>
    <circle cx="150" cy="150" r="84"/>
    <circle cx="150" cy="150" r="114"/>
  </g>
  <circle cx="150" cy="150" r="10" fill="#516254"/>
  <text x="22" y="308" font-family="Georgia, serif" font-style="italic" font-size="14" fill="#516254">Form — 02</text>
</svg>

<!-- poster-3.svg — System — 03 : 45° two-tone stripes -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 330">
  <defs>
    <pattern id="diag3" width="26" height="26" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <rect width="13" height="26" fill="#121613"/>
      <rect x="13" width="13" height="26" fill="#232924"/>
    </pattern>
  </defs>
  <rect width="300" height="330" fill="url(#diag3)"/>
  <rect x="0" y="262" width="300" height="68" fill="#121613"/>
  <text x="22" y="306" font-family="Georgia, serif" font-style="italic" font-size="14" fill="#c8d2c8">System — 03</text>
</svg>

<!-- poster-4.svg — Portrait — 04 : duotone figure -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 330">
  <defs>
    <linearGradient id="duo4" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#c8d2c8"/>
      <stop offset="1" stop-color="#121613"/>
    </linearGradient>
  </defs>
  <rect width="300" height="330" fill="url(#duo4)"/>
  <circle cx="150" cy="128" r="58" fill="#fafffa" opacity="0.92"/>
  <rect x="92" y="196" width="116" height="134" rx="58" fill="#fafffa" opacity="0.92"/>
  <text x="22" y="308" font-family="Georgia, serif" font-style="italic" font-size="14" fill="#fafffa">Portrait — 04</text>
</svg>

<!-- poster-5.svg — Letter — 05 : giant serif E -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 330">
  <rect width="300" height="330" fill="#fafffa"/>
  <text x="150" y="172" font-family="'Playfair Display', Georgia, serif" font-size="300" fill="#121613" text-anchor="middle" dominant-baseline="middle">E</text>
  <text x="22" y="308" font-family="Georgia, serif" font-style="italic" font-size="14" fill="#516254">Letter — 05</text>
</svg>

<!-- poster-6.svg — Archive — 06 : bar chart / spines -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 330">
  <rect width="300" height="330" fill="#fafffa"/>
  <g fill="#121613">
    <rect x="34" y="150" width="26" height="146"/>
    <rect x="74" y="96" width="26" height="200"/>
    <rect x="114" y="190" width="26" height="106"/>
    <rect x="154" y="60" width="26" height="236"/>
    <rect x="194" y="128" width="26" height="168"/>
    <rect x="234" y="174" width="26" height="122"/>
  </g>
  <rect x="34" y="40" width="40" height="2" fill="#516254"/>
  <text x="22" y="318" font-family="Georgia, serif" font-style="italic" font-size="14" fill="#516254">Archive — 06</text>
</svg>

<!-- poster-7.svg — Halftone — 07 : dot field on ink -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 330">
  <defs>
    <pattern id="halft7" width="34" height="34" patternUnits="userSpaceOnUse">
      <circle cx="17" cy="17" r="9" fill="#fafffa"/>
    </pattern>
  </defs>
  <rect width="300" height="330" fill="#121613"/>
  <rect x="20" y="20" width="260" height="226" fill="url(#halft7)"/>
  <text x="22" y="306" font-family="Georgia, serif" font-style="italic" font-size="14" fill="#c8d2c8">Halftone — 07</text>
</svg>

<!-- poster-8.svg — Brand — 08 : giant ampersand on bark -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 330">
  <rect width="300" height="330" fill="#232924"/>
  <text x="150" y="178" font-family="'Playfair Display', Georgia, serif" font-size="290" fill="#fafffa" text-anchor="middle" dominant-baseline="middle">&amp;</text>
  <text x="22" y="308" font-family="Georgia, serif" font-style="italic" font-size="14" fill="#93b799">Brand — 08</text>
</svg>
```

**Favicon** (`public/favicon.svg`): a Linen square, a serif `E` in Ink, and a short Voltage tick — same language as the wordmark.

---

## LAYER 6 — SIGNATURE INTERACTION: cursor image trail (`src/components/ImageTrail.jsx` + `.css`)

The hero's interactive centerpiece. As the cursor crosses the masthead, the poster tiles spawn at the pointer, drift toward it, then fade and shrink away — a fluid trail of black-and-white art behind the type. GSAP-driven, vanilla DOM (no React state in the loop).

The component ships **eight selectable trail behaviors** (`ImageTrailVariant1 … 8`) chosen by a `variant` prop through a `variantMap`. The hero mounts **variant 1** — the fade-and-drift behavior described below — and that is the only one the page renders. Keep all eight classes in the file so the `variant` prop stays swappable; do not delete the unused variants.

**Behavior of the deployed variant (`ImageTrailVariant1`):**
- Tiles are `190px` wide, `aspect-ratio: 1.1`, `border-radius: 14px`, absolutely positioned, starting at `opacity: 0`.
- Track the pointer **local** to the container. On each animation frame, lerp a cached pointer position toward the real one at `0.1`.
- When the pointer has moved more than a `threshold` of `80px` since the last spawn, show the next tile (cycling 0→7→0).
- Spawn timeline (GSAP): the tile starts at the cached pointer, `opacity 1`, `scale 1`; over `0.4s` `ease: 'power1'` it moves to the live pointer; then from `0.4s`, over `0.4s` `ease: 'power3'`, it fades to `opacity 0` and `scale 0.2`. Each spawn increments a running `zIndex` so newer tiles stack on top.

**`ImageTrail.css`** (verbatim):

```css
.content {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 100;
  border-radius: 8px;
  background: transparent;
  overflow: visible;
}

.content__img {
  width: 190px;
  aspect-ratio: 1.1;
  border-radius: 14px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  overflow: hidden;
  will-change: transform, filter;
}

.content__img-inner {
  background-position: 50% 50%;
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  background-size: cover;
  position: absolute;
  top: calc(-1 * 20px / 2);
  left: calc(-1 * 20px / 2);
}
```

**`ImageTrail.jsx`** (verbatim — helpers, the eight variant classes, the `variantMap`, and the React wrapper):

```jsx
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import './ImageTrail.css';

function lerp(a, b, n) {
  return (1 - n) * a + n * b;
}

function getLocalPointerPos(e, rect) {
  let clientX = 0,
    clientY = 0;
  if (e.touches && e.touches.length > 0) {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  } else {
    clientX = e.clientX;
    clientY = e.clientY;
  }
  return {
    x: clientX - rect.left,
    y: clientY - rect.top
  };
}
function getMouseDistance(p1, p2) {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  return Math.hypot(dx, dy);
}

class ImageItem {
  DOM = { el: null, inner: null };
  defaultStyle = { scale: 1, x: 0, y: 0, opacity: 0 };
  rect = null;

  constructor(DOM_el) {
    this.DOM.el = DOM_el;
    this.DOM.inner = this.DOM.el.querySelector('.content__img-inner');
    this.getRect();
    this.initEvents();
  }
  initEvents() {
    this.resize = () => {
      gsap.set(this.DOM.el, this.defaultStyle);
      this.getRect();
    };
    window.addEventListener('resize', this.resize);
  }
  getRect() {
    this.rect = this.DOM.el.getBoundingClientRect();
  }
}

class ImageTrailVariant1 {
  constructor(container) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...this.DOM.el.querySelectorAll('.content__img')].map(img => new ImageItem(img));
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;

    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    const handlePointerMove = ev => {
      const rect = this.container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('touchmove', handlePointerMove);

    const initRender = ev => {
      const rect = this.container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };

      requestAnimationFrame(() => this.render());

      container.removeEventListener('mousemove', initRender);
      container.removeEventListener('touchmove', initRender);
    };
    container.addEventListener('mousemove', initRender);
    container.addEventListener('touchmove', initRender);
  }

  render() {
    let distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) {
      this.zIndexVal = 1;
    }
    requestAnimationFrame(() => this.render());
  }

  showNextImage() {
    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];

    gsap.killTweensOf(img.DOM.el);
    gsap
      .timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated()
      })
      .fromTo(
        img.DOM.el,
        {
          opacity: 1,
          scale: 1,
          zIndex: this.zIndexVal,
          x: this.cacheMousePos.x - img.rect.width / 2,
          y: this.cacheMousePos.y - img.rect.height / 2
        },
        {
          duration: 0.4,
          ease: 'power1',
          x: this.mousePos.x - img.rect.width / 2,
          y: this.mousePos.y - img.rect.height / 2
        },
        0
      )
      .to(
        img.DOM.el,
        {
          duration: 0.4,
          ease: 'power3',
          opacity: 0,
          scale: 0.2
        },
        0.4
      );
  }

  onImageActivated() {
    this.activeImagesCount++;
    this.isIdle = false;
  }
  onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) {
      this.isIdle = true;
    }
  }
}

class ImageTrailVariant2 {
  constructor(container) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...container.querySelectorAll('.content__img')].map(img => new ImageItem(img));
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;

    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    const handlePointerMove = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('touchmove', handlePointerMove);

    const initRender = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };

      requestAnimationFrame(() => this.render());

      container.removeEventListener('mousemove', initRender);
      container.removeEventListener('touchmove', initRender);
    };
    container.addEventListener('mousemove', initRender);
    container.addEventListener('touchmove', initRender);
  }

  render() {
    let distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) {
      this.zIndexVal = 1;
    }
    requestAnimationFrame(() => this.render());
  }

  showNextImage() {
    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];

    gsap.killTweensOf(img.DOM.el);
    gsap
      .timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated()
      })
      .fromTo(
        img.DOM.el,
        {
          opacity: 1,
          scale: 0,
          zIndex: this.zIndexVal,
          x: this.cacheMousePos.x - img.rect.width / 2,
          y: this.cacheMousePos.y - img.rect.height / 2
        },
        {
          duration: 0.4,
          ease: 'power1',
          scale: 1,
          x: this.mousePos.x - img.rect.width / 2,
          y: this.mousePos.y - img.rect.height / 2
        },
        0
      )
      .fromTo(
        img.DOM.inner,
        {
          scale: 2.8,
          filter: 'brightness(250%)'
        },
        {
          duration: 0.4,
          ease: 'power1',
          scale: 1,
          filter: 'brightness(100%)'
        },
        0
      )
      .to(
        img.DOM.el,
        {
          duration: 0.4,
          ease: 'power2',
          opacity: 0,
          scale: 0.2
        },
        0.45
      );
  }

  onImageActivated() {
    this.activeImagesCount++;
    this.isIdle = false;
  }
  onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) this.isIdle = true;
  }
}

class ImageTrailVariant3 {
  constructor(container) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...container.querySelectorAll('.content__img')].map(img => new ImageItem(img));
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;

    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    const handlePointerMove = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('touchmove', handlePointerMove);

    const initRender = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };

      requestAnimationFrame(() => this.render());
      container.removeEventListener('mousemove', initRender);
      container.removeEventListener('touchmove', initRender);
    };
    container.addEventListener('mousemove', initRender);
    container.addEventListener('touchmove', initRender);
  }

  render() {
    let distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) {
      this.zIndexVal = 1;
    }
    requestAnimationFrame(() => this.render());
  }

  showNextImage() {
    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];
    gsap.killTweensOf(img.DOM.el);

    gsap
      .timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated()
      })
      .fromTo(
        img.DOM.el,
        {
          opacity: 1,
          scale: 0,
          zIndex: this.zIndexVal,
          xPercent: 0,
          yPercent: 0,
          x: this.cacheMousePos.x - img.rect.width / 2,
          y: this.cacheMousePos.y - img.rect.height / 2
        },
        {
          duration: 0.4,
          ease: 'power1',
          scale: 1,
          x: this.mousePos.x - img.rect.width / 2,
          y: this.mousePos.y - img.rect.height / 2
        },
        0
      )
      .fromTo(
        img.DOM.inner,
        {
          scale: 1.2
        },
        {
          duration: 0.4,
          ease: 'power1',
          scale: 1
        },
        0
      )
      .to(
        img.DOM.el,
        {
          duration: 0.6,
          ease: 'power2',
          opacity: 0,
          scale: 0.2,
          xPercent: () => gsap.utils.random(-30, 30),
          yPercent: -200
        },
        0.6
      );
  }

  onImageActivated() {
    this.activeImagesCount++;
    this.isIdle = false;
  }
  onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) this.isIdle = true;
  }
}

class ImageTrailVariant4 {
  constructor(container) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...container.querySelectorAll('.content__img')].map(img => new ImageItem(img));
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;

    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    const handlePointerMove = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('touchmove', handlePointerMove);

    const initRender = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());
      container.removeEventListener('mousemove', initRender);
      container.removeEventListener('touchmove', initRender);
    };
    container.addEventListener('mousemove', initRender);
    container.addEventListener('touchmove', initRender);
  }

  render() {
    let distance = getMouseDistance(this.mousePos, this.lastMousePos);
    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);

    if (this.isIdle && this.zIndexVal !== 1) this.zIndexVal = 1;
    requestAnimationFrame(() => this.render());
  }

  showNextImage() {
    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];
    gsap.killTweensOf(img.DOM.el);

    let dx = this.mousePos.x - this.cacheMousePos.x;
    let dy = this.mousePos.y - this.cacheMousePos.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    if (distance !== 0) {
      dx /= distance;
      dy /= distance;
    }
    dx *= distance / 100;
    dy *= distance / 100;

    gsap
      .timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated()
      })
      .fromTo(
        img.DOM.el,
        {
          opacity: 1,
          scale: 0,
          zIndex: this.zIndexVal,
          x: this.cacheMousePos.x - img.rect.width / 2,
          y: this.cacheMousePos.y - img.rect.height / 2
        },
        {
          duration: 0.4,
          ease: 'power1',
          scale: 1,
          x: this.mousePos.x - img.rect.width / 2,
          y: this.mousePos.y - img.rect.height / 2
        },
        0
      )
      .fromTo(
        img.DOM.inner,
        {
          scale: 2,
          filter: `brightness(${Math.max((400 * distance) / 100, 100)}%) contrast(${Math.max((400 * distance) / 100, 100)}%)`
        },
        {
          duration: 0.4,
          ease: 'power1',
          scale: 1,
          filter: 'brightness(100%) contrast(100%)'
        },
        0
      )
      .to(
        img.DOM.el,
        {
          duration: 0.4,
          ease: 'power3',
          opacity: 0
        },
        0.4
      )
      .to(
        img.DOM.el,
        {
          duration: 1.5,
          ease: 'power4',
          x: `+=${dx * 110}`,
          y: `+=${dy * 110}`
        },
        0.05
      );
  }

  onImageActivated() {
    this.activeImagesCount++;
    this.isIdle = false;
  }
  onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) this.isIdle = true;
  }
}

class ImageTrailVariant5 {
  constructor(container) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...container.querySelectorAll('.content__img')].map(img => new ImageItem(img));
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;

    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };
    this.lastAngle = 0;

    const handlePointerMove = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('touchmove', handlePointerMove);

    const initRender = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());
      container.removeEventListener('mousemove', initRender);
      container.removeEventListener('touchmove', initRender);
    };
    container.addEventListener('mousemove', initRender);
    container.addEventListener('touchmove', initRender);
  }

  render() {
    let distance = getMouseDistance(this.mousePos, this.lastMousePos);
    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);
    if (this.isIdle && this.zIndexVal !== 1) this.zIndexVal = 1;
    requestAnimationFrame(() => this.render());
  }

  showNextImage() {
    let dx = this.mousePos.x - this.cacheMousePos.x;
    let dy = this.mousePos.y - this.cacheMousePos.y;
    let angle = Math.atan2(dy, dx) * (180 / Math.PI);
    if (angle < 0) angle += 360;
    if (angle > 90 && angle <= 270) angle += 180;
    const isMovingClockwise = angle >= this.lastAngle;
    this.lastAngle = angle;
    let startAngle = isMovingClockwise ? angle - 10 : angle + 10;
    let distance = Math.sqrt(dx * dx + dy * dy);
    if (distance !== 0) {
      dx /= distance;
      dy /= distance;
    }
    dx *= distance / 150;
    dy *= distance / 150;

    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];
    gsap.killTweensOf(img.DOM.el);

    gsap
      .timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated()
      })
      .fromTo(
        img.DOM.el,
        {
          opacity: 1,
          filter: 'brightness(80%)',
          scale: 0.1,
          zIndex: this.zIndexVal,
          x: this.cacheMousePos.x - img.rect.width / 2,
          y: this.cacheMousePos.y - img.rect.height / 2,
          rotation: startAngle
        },
        {
          duration: 1,
          ease: 'power2',
          scale: 1,
          filter: 'brightness(100%)',
          x: this.mousePos.x - img.rect.width / 2 + dx * 70,
          y: this.mousePos.y - img.rect.height / 2 + dy * 70,
          rotation: this.lastAngle
        },
        0
      )
      .to(
        img.DOM.el,
        {
          duration: 0.4,
          ease: 'expo',
          opacity: 0
        },
        0.5
      )
      .to(
        img.DOM.el,
        {
          duration: 1.5,
          ease: 'power4',
          x: `+=${dx * 120}`,
          y: `+=${dy * 120}`
        },
        0.05
      );
  }

  onImageActivated() {
    this.activeImagesCount++;
    this.isIdle = false;
  }
  onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) this.isIdle = true;
  }
}

class ImageTrailVariant6 {
  constructor(container) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...container.querySelectorAll('.content__img')].map(img => new ImageItem(img));
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;

    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    const handlePointerMove = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('touchmove', handlePointerMove);

    const initRender = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());
      container.removeEventListener('mousemove', initRender);
      container.removeEventListener('touchmove', initRender);
    };
    container.addEventListener('mousemove', initRender);
    container.addEventListener('touchmove', initRender);
  }

  render() {
    let distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.3);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.3);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) {
      this.zIndexVal = 1;
    }
    requestAnimationFrame(() => this.render());
  }

  mapSpeedToSize(speed, minSize, maxSize) {
    const maxSpeed = 200;
    return minSize + (maxSize - minSize) * Math.min(speed / maxSpeed, 1);
  }
  mapSpeedToBrightness(speed, minB, maxB) {
    const maxSpeed = 70;
    return minB + (maxB - minB) * Math.min(speed / maxSpeed, 1);
  }
  mapSpeedToBlur(speed, minBlur, maxBlur) {
    const maxSpeed = 90;
    return minBlur + (maxBlur - minBlur) * Math.min(speed / maxSpeed, 1);
  }
  mapSpeedToGrayscale(speed, minG, maxG) {
    const maxSpeed = 90;
    return minG + (maxG - minG) * Math.min(speed / maxSpeed, 1);
  }

  showNextImage() {
    let dx = this.mousePos.x - this.cacheMousePos.x;
    let dy = this.mousePos.y - this.cacheMousePos.y;
    let speed = Math.sqrt(dx * dx + dy * dy);

    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];

    let scaleFactor = this.mapSpeedToSize(speed, 0.3, 2);
    let brightnessValue = this.mapSpeedToBrightness(speed, 0, 1.3);
    let blurValue = this.mapSpeedToBlur(speed, 20, 0);
    let grayscaleValue = this.mapSpeedToGrayscale(speed, 600, 0);

    gsap.killTweensOf(img.DOM.el);
    gsap
      .timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated()
      })
      .fromTo(
        img.DOM.el,
        {
          opacity: 1,
          scale: 0,
          zIndex: this.zIndexVal,
          x: this.cacheMousePos.x - img.rect.width / 2,
          y: this.cacheMousePos.y - img.rect.height / 2
        },
        {
          duration: 0.8,
          ease: 'power3',
          scale: scaleFactor,
          filter: `grayscale(${grayscaleValue * 100}%) brightness(${brightnessValue * 100}%) blur(${blurValue}px)`,
          x: this.mousePos.x - img.rect.width / 2,
          y: this.mousePos.y - img.rect.height / 2
        },
        0
      )
      .fromTo(
        img.DOM.inner,
        {
          scale: 2
        },
        {
          duration: 0.8,
          ease: 'power3',
          scale: 1
        },
        0
      )
      .to(
        img.DOM.el,
        {
          duration: 0.4,
          ease: 'power3.in',
          opacity: 0,
          scale: 0.2
        },
        0.45
      );
  }

  onImageActivated() {
    this.activeImagesCount++;
    this.isIdle = false;
  }
  onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) {
      this.isIdle = true;
    }
  }
}

function getNewPosition(position, offset, arr) {
  const realOffset = Math.abs(offset) % arr.length;
  if (position - realOffset >= 0) {
    return position - realOffset;
  } else {
    return arr.length - (realOffset - position);
  }
}
class ImageTrailVariant7 {
  constructor(container) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...container.querySelectorAll('.content__img')].map(img => new ImageItem(img));
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;

    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    this.visibleImagesCount = 0;
    this.visibleImagesTotal = 9;
    this.visibleImagesTotal = Math.min(this.visibleImagesTotal, this.imagesTotal - 1);

    const handlePointerMove = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('touchmove', handlePointerMove);

    const initRender = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());
      container.removeEventListener('mousemove', initRender);
      container.removeEventListener('touchmove', initRender);
    };
    container.addEventListener('mousemove', initRender);
    container.addEventListener('touchmove', initRender);
  }

  render() {
    let distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.3);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.3);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) this.zIndexVal = 1;

    requestAnimationFrame(() => this.render());
  }

  showNextImage() {
    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];
    ++this.visibleImagesCount;

    gsap.killTweensOf(img.DOM.el);
    const scaleValue = gsap.utils.random(0.5, 1.6);

    gsap
      .timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated()
      })
      .fromTo(
        img.DOM.el,
        {
          scale: scaleValue - Math.max(gsap.utils.random(0.2, 0.6), 0),
          rotationZ: 0,
          opacity: 1,
          zIndex: this.zIndexVal,
          x: this.cacheMousePos.x - img.rect.width / 2,
          y: this.cacheMousePos.y - img.rect.height / 2
        },
        {
          duration: 0.4,
          ease: 'power3',
          scale: scaleValue,
          rotationZ: gsap.utils.random(-3, 3),
          x: this.mousePos.x - img.rect.width / 2,
          y: this.mousePos.y - img.rect.height / 2
        },
        0
      );

    if (this.visibleImagesCount >= this.visibleImagesTotal) {
      const lastInQueue = getNewPosition(this.imgPosition, this.visibleImagesTotal, this.images);
      const oldImg = this.images[lastInQueue];
      gsap.to(oldImg.DOM.el, {
        duration: 0.4,
        ease: 'power4',
        opacity: 0,
        scale: 1.3,
        onComplete: () => {
          if (this.activeImagesCount === 0) {
            this.isIdle = true;
          }
        }
      });
    }
  }

  onImageActivated() {
    this.activeImagesCount++;
    this.isIdle = false;
  }
  onImageDeactivated() {
    this.activeImagesCount--;
  }
}

class ImageTrailVariant8 {
  constructor(container) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...container.querySelectorAll('.content__img')].map(img => new ImageItem(img));
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;

    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    this.rotation = { x: 0, y: 0 };
    this.cachedRotation = { x: 0, y: 0 };
    this.zValue = 0;
    this.cachedZValue = 0;

    const handlePointerMove = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('touchmove', handlePointerMove);

    const initRender = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());
      container.removeEventListener('mousemove', initRender);
      container.removeEventListener('touchmove', initRender);
    };
    container.addEventListener('mousemove', initRender);
    container.addEventListener('touchmove', initRender);
  }

  render() {
    let distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) {
      this.zIndexVal = 1;
    }
    requestAnimationFrame(() => this.render());
  }

  showNextImage() {
    const rect = this.container.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const relX = this.mousePos.x - centerX;
    const relY = this.mousePos.y - centerY;

    this.rotation.x = -(relY / centerY) * 30;
    this.rotation.y = (relX / centerX) * 30;
    this.cachedRotation = { ...this.rotation };

    const distanceFromCenter = Math.sqrt(relX * relX + relY * relY);
    const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
    const proportion = distanceFromCenter / maxDistance;
    this.zValue = proportion * 1200 - 600;
    this.cachedZValue = this.zValue;
    const normalizedZ = (this.zValue + 600) / 1200;
    const brightness = 0.2 + normalizedZ * 2.3;

    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];
    gsap.killTweensOf(img.DOM.el);

    gsap
      .timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated()
      })
      .set(this.DOM.el, { perspective: 1000 }, 0)
      .fromTo(
        img.DOM.el,
        {
          opacity: 1,
          z: 0,
          scale: 1 + this.cachedZValue / 1000,
          zIndex: this.zIndexVal,
          x: this.cacheMousePos.x - img.rect.width / 2,
          y: this.cacheMousePos.y - img.rect.height / 2,
          rotationX: this.cachedRotation.x,
          rotationY: this.cachedRotation.y,
          filter: `brightness(${brightness})`
        },
        {
          duration: 1,
          ease: 'expo',
          scale: 1 + this.zValue / 1000,
          x: this.mousePos.x - img.rect.width / 2,
          y: this.mousePos.y - img.rect.height / 2,
          rotationX: this.rotation.x,
          rotationY: this.rotation.y
        },
        0
      )
      .to(
        img.DOM.el,
        {
          duration: 0.4,
          ease: 'power2',
          opacity: 0,
          z: -800
        },
        0.3
      );
  }

  onImageActivated() {
    this.activeImagesCount++;
    this.isIdle = false;
  }
  onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) this.isIdle = true;
  }
}

const variantMap = {
  1: ImageTrailVariant1,
  2: ImageTrailVariant2,
  3: ImageTrailVariant3,
  4: ImageTrailVariant4,
  5: ImageTrailVariant5,
  6: ImageTrailVariant6,
  7: ImageTrailVariant7,
  8: ImageTrailVariant8
};

export default function ImageTrail({ items = [], variant = 1 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const Cls = variantMap[variant] || variantMap[1];
    new Cls(containerRef.current);
  }, [variant, items]);

  return (
    <div className="content" ref={containerRef}>
      {items.map((url, i) => (
        <div className="content__img" key={i}>
          <div className="content__img-inner" style={{ backgroundImage: `url(${url})` }} />
        </div>
      ))}
    </div>
  );
}
```

> All eight variants stay in the file; the hero mounts variant 1 via the `variantMap` lookup (`new Cls(...)`). Do not add scroll listeners, React state, or a cleanup that cancels the rAF loop — the no-StrictMode mount (Layer 1) is what keeps a single trail alive.

---

## LAYER 7 — SECTION-BY-SECTION SPEC

`src/App.jsx` — a flex column that fills the viewport; the hero takes the remaining height below the nav:

```jsx
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-linen text-ink">
      <Navbar />
      <Hero />
    </div>
  )
}
```

### SECTION 1 — Navbar (`src/components/Navbar.jsx`)

A full-bleed Linen bar, **not sticky**, fading in on load.

- Wrapper: `motion.header` with `initial={{ opacity: 0 }}`, `animate={{ opacity: 1 }}`, `transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}`, classes `relative z-40 w-full bg-linen`.
- Inner nav: `mx-auto flex max-w-page items-center justify-between px-[50px] py-6`.
- **Left — wordmark** (`<a href="#top">`, `font-lausanne text-[14px] tracking-wide1`, inline `style={{ fontWeight: 550 }}`): the green split **is** the logo —
  - `<span className="text-ink">Estu</span>`
  - `<span className="text-voltage">dio</span>`
- **Right — group** (`flex items-center gap-5`):
  - `<a href="#menu">` ghost link: `link-underline font-lausanne text-[14px] text-ink`, `style={{ fontWeight: 350 }}`, text **`Menu`**.
  - `<span aria-hidden="true">` mark: `select-none font-lausanne text-[14px] leading-none text-voltage`, `style={{ fontWeight: 550 }}`, text **`||`**.

### SECTION 2 — Hero (`src/components/Hero.jsx`)

The full masthead: the image trail fills it, centered type floats above.

**Wrapper:** `<section id="top" className="relative flex w-full flex-1 items-center justify-center overflow-hidden bg-linen">`.

**Layered children (DOM order):**

1. **Trail layer** — `<div className="absolute inset-0 z-0">` wrapping `<ImageTrail items={trailItems} variant={1} />`. `trailItems` = the 8 poster paths `/trail/poster-1.svg … /trail/poster-8.svg`. The trail owns pointer events (the content above is `pointer-events-none`), so the cursor always feeds it.

2. **Content stack** — `<div className="pointer-events-none relative z-10 mx-auto flex max-w-[760px] flex-col items-center px-6 text-center">`. Children animate in with the shared `rise` variant (Layer 8), each with an increasing `custom` index:

   - **Eyebrow row** (`custom={0}`, `flex items-center justify-center gap-4`):
     `<span className="tick !w-8" />` · `<span className="eyebrow">Graphic Design Studio</span>` · `<span className="tick !w-8" />`
   - **Headline** `<h1 className="mt-7 font-editorial font-light leading-[0.9] tracking-tighter2 text-ink text-[clamp(40px,8vw,104px)]">` — two `motion.span` blocks:
     - `custom={1}`, `className="block"` → `Brands that refuse`
     - `custom={2}`, `className="block italic"` → `to blend in.`
   - **Standfirst** `<motion.p custom={3} className="mt-8 max-w-md font-lausanne text-[16px] leading-[1.4] tracking-[-0.32px] text-ink">` →
     `Estudio is a graphic design studio crafting bold identities, packaging, and digital experiences for brands with something to say.`
   - **Actions** `<motion.div custom={4} className="pointer-events-auto mt-10 flex flex-wrap items-center justify-center gap-7">` (re-enables pointer events for the buttons):
     - Primary CTA: `<a href="mailto:hello@estudio.studio" className="btn-voltage">Start a project <ArrowRight className="h-4 w-4" /></a>`
     - Ghost link: `<a href="mailto:hello@estudio.studio" className="link-underline font-lausanne text-[14px] text-ink" style={{ fontWeight: 350 }}>hello@estudio.studio</a>`

---

## LAYER 8 — ANIMATION STANDARDS

Single shared entrance variant in `Hero.jsx`, staggered by index:

```js
const ease = [0.22, 1, 0.36, 1]
const rise = {
  hidden: { y: 22, opacity: 0 },
  show: (i = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease, delay: 0.15 + i * 0.1 },
  }),
}
```

- Each hero element: `variants={rise} initial="hidden" animate="show" custom={i}` — so eyebrow (i=0) leads, then headline line 1 (i=1), line 2 (i=2), standfirst (i=3), actions (i=4). Delay per item = `0.15 + i * 0.1`.
- Navbar fades opacity `0 → 1` over `0.8s` with the same ease.
- CTA hover: `translateY(-2px)` over `0.3s` (from `.btn-voltage`). Ghost links: underline sweep left-to-right over `0.45s` (from `.link-underline`).
- **No** scroll-triggered animation, parallax, typewriter, or counters. The only continuous motion is the cursor image trail.

---

## LAYER 9 — RESPONSIVE STANDARDS

- The page is exactly **one viewport tall** — `min-h-screen` column, hero `flex-1`. No scrolling content.
- Headline scales fluidly with `text-[clamp(40px,8vw,104px)]` — never a fixed display size.
- Content column caps at `max-w-[760px]`, standfirst at `max-w-md`, with `px-6` side padding so it never touches the edge on mobile.
- Nav padding stays `px-[50px]` within the `max-w-page` (1440px) rail; the wordmark + `Menu ||` group hold on a single row at every width.
- The image trail fills the masthead at all sizes; on touch, `touchmove` feeds it the same way `mousemove` does.

---

## LAYER 10 — ICON SET

Exactly **one** lucide icon is used:

- `ArrowRight` — inside the primary CTA only, at `h-4 w-4`, inheriting `text-ink`.

Do not import any other icon. The `||` mark and the eyebrow `tick`s are plain spans, not icons.

---

## LAYER 11 — REPRODUCE-EXACTLY CLAUSE

Reproduce exactly. Do not:
- Substitute fonts ("a serif like Fraunces" is not Fraunces; body must be **Inter at weight 350**, not 400).
- Round colors ("near-black" is not `#121613`; the accent is exactly `#2bee4b`).
- Spread Voltage green beyond the CTA fill, the `dio` split, the eyebrow ticks, and the `||` mark.
- Add a second accent color, dark hero, card borders, or any weight above `550`.
- Shorten or reword copy — the headline is `Brands that refuse` / `to blend in.` (line 2 italic), verbatim.
- Skip the no-`StrictMode` mount — it is required, not optional.
- Change the trail constants (`190px` tiles, `0.1` lerp, `80px` threshold, `0.4s` power1 → `0.4s` power3 fade to `scale 0.2`).
- Swap the 8 inline poster SVGs for stock images or external URLs.

If a constraint conflicts with a framework limit, clamp to the nearest valid value and leave a comment — do not silently change.

---

## FILE TREE (exact output expected)

```
Estudio/
├── index.html              # 3 Google Fonts (Fraunces + Inter + Playfair Display), theme-color #fafffa
├── tailwind.config.js      # tokens from Layer 3
├── postcss.config.js       # tailwindcss + autoprefixer
├── vite.config.js          # @vitejs/plugin-react
├── public/
│   ├── favicon.svg         # linen square, serif "E", voltage tick
│   └── trail/
│       └── poster-1..8.svg # 8 B&W/duotone tiles from Layer 5
└── src/
    ├── main.jsx            # render <App/> — NO React.StrictMode
    ├── index.css           # Layer 4 verbatim
    ├── App.jsx             # flex column: <Navbar/> + <Hero/>
    └── components/
        ├── Navbar.jsx      # Linen bar, "Estu|dio" wordmark, Menu + ||
        ├── Hero.jsx        # ImageTrail bg + centered type
        ├── ImageTrail.jsx  # Layer 6 verbatim
        └── ImageTrail.css  # Layer 6 verbatim
```

`src/main.jsx`:

```jsx
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// NOTE: StrictMode is intentionally omitted. ImageTrail attaches GSAP
// listeners + a requestAnimationFrame loop on mount without internal
// cleanup; StrictMode's double-invoke (dev only) would spawn a second
// trail. Rendering once keeps a single, clean animation loop.
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
```

---

## DELIVERY CHECKLIST

- [ ] `npm create vite@latest . --template react` (React 18 + Vite 5).
- [ ] `npm i framer-motion gsap lucide-react` and `npm i -D tailwindcss@3 postcss autoprefixer`.
- [ ] `tailwind.config.js` carries the full token block (colors, fonts, letterSpacing, radii, `shadow-voltage`, `max-w-page`).
- [ ] `index.css` pasted verbatim from Layer 4.
- [ ] `index.html` loads Fraunces + Inter + Playfair Display, title `Estudio — Graphic Design Studio`.
- [ ] 8 poster SVGs created in `public/trail/` exactly as Layer 5.
- [ ] `ImageTrail.jsx` + `ImageTrail.css` pasted verbatim; trail uses variant 1 fade-and-drift.
- [ ] `main.jsx` mounts `<App/>` **without** `StrictMode`.
- [ ] Navbar wordmark splits `Estu` (ink) / `dio` (voltage); `Menu` ghost link + `||` voltage mark.
- [ ] Hero: eyebrow with two `!w-8` ticks → Fraunces headline (line 2 italic, `clamp(40px,8vw,104px)`) → Inter standfirst → `.btn-voltage` + ghost mailto, all `rise`-staggered.
- [ ] Voltage green appears ONLY on: CTA fill, `dio`, eyebrow ticks, `||`.
- [ ] One screen, no scroll; body weight 350; no second accent color; B&W imagery only.
```

