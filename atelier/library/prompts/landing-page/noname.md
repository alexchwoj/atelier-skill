Build a minimal fashion storefront landing page for **NONAME®** — a fictional small Porto studio that makes considered, made-to-last clothing and accessories — using **React 18 + TypeScript + Vite + Tailwind CSS + framer-motion + lucide-react + shadcn/ui (new-york style)**. The aesthetic is monochromatic burgundy editorial: warm grey `#F0F0F0` background, deep burgundy `#560310` ink for text, hairline rules, generous gutters, no chromatic accents beyond the burgundy palette. The signature interaction is a **hover image-flip** on product cards (front layer reveals back layer via L→R clip-path expansion with a blown-out brightness/contrast easing back to normal) and a **curtain reveal** on initial viewport entry. Reference mold: hellohello's OUTFIT page.

## Stack / setup

- `package.json` dependencies: `react`, `react-dom`, `motion` (v11+, import from `motion/react`), `lucide-react`, `clsx`, `tailwind-merge`. Dev: `vite`, `@vitejs/plugin-react-swc`, `typescript@^5.8`, `tailwindcss@^3.4`, `tailwindcss-animate`, `autoprefixer`, `postcss`.
- `"type": "module"`. Scripts: `dev` → `vite`, `build` → `vite build`, `preview` → `vite preview`, `typecheck` → `tsc -b --noEmit`.
- `vite.config.ts`: `@vitejs/plugin-react-swc` plugin, dev server port **5180** with `strictPort: true` (do NOT auto-fallback), `@` alias → `./src`.
- `tsconfig.json` + `tsconfig.app.json` + `tsconfig.node.json`: strict TypeScript, `@/*` path mapping.
- `components.json` (shadcn config): `"style": "new-york"`, `"rsc": false`, `"tsx": true`, `"tailwind.baseColor": "stone"`, `"aliases": { "components": "@/components", "utils": "@/lib/utils", "ui": "@/components/ui" }`.
- Font: Google Fonts **Outfit** weights 100–900 (no italic — `<i>`/`.italic` is intentionally synthesized by the browser; user accepted this behavior).
- Import font in `index.html` via a single `<link>`:
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
  ```
- `html, body { font-family: 'Outfit', system-ui, sans-serif; -webkit-font-smoothing: antialiased; }`.
- Background base `hsl(var(--bone))` (#F0F0F0), text `hsl(var(--ink))` (#560310).

## Design tokens — HSL variables on `:root`

Declare in `src/index.css` inside `@layer base`:

```css
:root {
  /* Palette — monochromatic burgundy */
  --bone:     0 0% 94%;      /* #F0F0F0 — page background */
  --cream:    0 0% 88%;      /* #E0E0E0 — subtle surface */
  --stone:    0 0% 80%;      /* #CCCCCC — curtain reveal panel */
  --mist:     351 18% 60%;   /* #A88A92 — burgundy-tinted border */
  --graphite: 351 50% 30%;   /* #73263A — secondary muted text (wine) */
  --ink:      351 93% 17%;   /* #560310 — primary text */
  --oxblood:  351 93% 17%;   /* alias of --ink for legacy refs */

  /* shadcn semantic mapping */
  --background:        var(--bone);
  --foreground:        var(--ink);
  --primary:           var(--ink);
  --primary-foreground: var(--bone);
  --secondary:         var(--cream);
  --secondary-foreground: var(--ink);
  --muted:             var(--cream);
  --muted-foreground:  var(--graphite);
  --accent:            var(--cream);
  --accent-foreground: var(--ink);
  --border:            351 8% 78%;
  --input:             351 8% 78%;
  --ring:              var(--ink);
  --radius:            0.125rem;
}
```

All Tailwind text/border/bg references go through these tokens via `tailwind.config.ts` — see Tailwind config block below.

## Tailwind config (`tailwind.config.ts`)

```ts
import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bone:      'hsl(var(--bone))',
        cream:     'hsl(var(--cream))',
        stone:     'hsl(var(--stone))',
        mist:      'hsl(var(--mist))',
        graphite:  'hsl(var(--graphite))',
        ink:       'hsl(var(--ink))',
        oxblood:   'hsl(var(--oxblood))',
        // shadcn semantic
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary:    { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
        secondary:  { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
        muted:      { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        accent:     { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
        border:     'hsl(var(--border))',
        input:      'hsl(var(--input))',
        ring:       'hsl(var(--ring))',
      },
      fontFamily: {
        // All 4 families map to Outfit — single-font discipline
        sans:    ['Outfit', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
        serif:   ['Outfit', 'system-ui', 'sans-serif'],
        mono:    ['Outfit', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xs': ['clamp(2rem, 4vw, 3rem)',     { lineHeight: '1' }],
        'display-sm': ['clamp(2.5rem, 5vw, 4rem)',   { lineHeight: '1' }],
        'display-md': ['clamp(3.5rem, 7vw, 6rem)',   { lineHeight: '1' }],
        'display-lg': ['clamp(5rem, 10vw, 9rem)',    { lineHeight: '0.95' }],
        'display-xl': ['clamp(7rem, 14vw, 14rem)',   { lineHeight: '0.9' }],
      },
      aspectRatio: {
        large: '9 / 12',     // portrait product card
        small: '242 / 240',  // near-square card
      },
      spacing: {
        26: '6.5rem',
        34: '8.5rem',
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
      },
      keyframes: {
        marquee:   { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        'fade-up': { from: { opacity: '0', transform: 'translateY(8px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        shimmer:   { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
      },
      animation: {
        marquee:   'marquee 40s linear infinite',
        'fade-up': 'fade-up 700ms cubic-bezier(.22,1,.36,1) both',
        shimmer:   'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [animate],
} satisfies Config;
```

## `src/index.css` utility layer

After Tailwind base/components/utilities directives, declare custom utilities:

```css
@layer base {
  body { background: hsl(var(--bone)); color: hsl(var(--ink)); }
  /* Outfit has no italic face — synthesized italic is intentional, do not override */
}

@layer components {
  .eyebrow      { @apply font-mono uppercase text-[10px] tracking-[0.18em] text-foreground/60; }
  .ital         { @apply italic font-light text-graphite; }   /* synthesized italic accent in headings */
  .hairline     { @apply h-px w-full bg-foreground/15; }
  .gutter       { @apply mx-auto w-full max-w-[1440px] px-6 md:px-10; }
  .underline-grow {
    @apply relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full
           after:origin-left after:scale-x-0 after:bg-current
           after:transition-transform after:duration-300 hover:after:scale-x-100;
  }
  .link-underline {
    @apply relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full
           after:origin-left after:scale-x-0 after:bg-current
           after:transition-transform after:duration-300 hover:after:scale-x-100;
  }
  .link-selected { @apply after:scale-x-100; }
  .no-scrollbar::-webkit-scrollbar { display: none; }
  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
}
```

## Shared primitives

**SmallMark** (Nav logo) — inline SVG single letter "n" + period dot. `viewBox="0 0 24 12"`, fill `currentColor`. Render:

```tsx
<svg viewBox="0 0 24 12" className="h-3 w-auto" aria-hidden="true">
  <text x="0" y="11" fontFamily="Outfit" fontWeight={700} fontSize="14" fill="currentColor">n.</text>
</svg>
```

**`cn()` helper** in `src/lib/utils.ts`:

```ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
```

**shadcn primitives** (manual scaffold under `src/components/ui/`): `button.tsx`, `input.tsx`, `badge.tsx`. Use the standard shadcn new-york variants — no overrides. The Button variants used in this site are `default` (bg-primary text-primary-foreground) and `ghost`. Sizes used: `default`, `sm`, `icon`.

## Product registry (`src/components/products/products.ts`)

Type + 10-product registry. **Reproduce these objects verbatim** (slug, name, price, category, size, image flags, blank flag). The page renders products by `findProducts([...slugs])` from `App.tsx`.

```ts
export type ProductFace = 'glyph' | 'stamp' | 'ruled' | 'grid' | 'medallion' | 'marquee';

export interface Product {
  slug: string;
  name: string;
  price: string;
  category: 'Apparel' | 'Knitwear' | 'Outerwear' | 'Accessories' | 'Print';
  size?: 'small' | 'large';
  image?: string;       // /products/<slug>.png — when set, ProductCard renders <img>
  imageBack?: string;   // /products/<slug>-2.png — revealed by hover image-flip
  blank?: boolean;      // true → render empty bg-bone tile only (no hover, no caption)
  front: ProductFace;   // fallback SVG variant when no image
  back:  ProductFace;
}

export const PRODUCTS: Product[] = [
  { slug: 'boxy-tee-01',     name: 'Boxy Tee No. 01',  price: '$85',  category: 'Apparel',     image: '/products/boxy-tee.png',      imageBack: '/products/boxy-tee-2.png',      front: 'glyph',    back: 'ruled'    },
  { slug: 'heavy-knit',      name: 'Heavy Knit',       price: '$240', category: 'Knitwear',    image: '/products/heavy-knit.png',    imageBack: '/products/heavy-knit-2.png',    front: 'stamp',    back: 'grid'     },
  { slug: 'studio-cap',      name: 'Studio Cap',       price: '$70',  category: 'Accessories', image: '/products/studio-cap.png',    imageBack: '/products/studio-cap-2.png',    front: 'medallion',back: 'ruled'    },
  { slug: 'wool-coat',       name: 'The Coat',         price: '$580', category: 'Outerwear',   image: '/products/the-coat.jpg',      imageBack: '/products/the-coat-2.png',      front: 'glyph',    back: 'stamp'    },
  { slug: 'cotton-tote',     name: 'Cotton Tote',      price: '$55',  category: 'Accessories', image: '/products/cotton-tote.png',   imageBack: '/products/cotton-tote-2.png',   front: 'marquee',  back: 'medallion'},
  { slug: 'ribbed-beanie',   name: 'Ribbed Beanie',    price: '$55',  category: 'Accessories', image: '/products/ribbed-beanie.png', imageBack: '/products/ribbed-beanie-2.png', front: 'ruled',    back: 'grid'     },
  { slug: 'cotton-scarf',    name: 'Cotton Scarf',     price: '$95',  category: 'Accessories', blank: true,                                                                       front: 'glyph',    back: 'ruled'    },
  { slug: 'wool-cap',        name: 'Wool Cap',         price: '$65',  category: 'Accessories', blank: true,                                                                       front: 'stamp',    back: 'medallion'},
  { slug: 'enamel-pin',      name: 'Enamel Pin',       price: '$18',  category: 'Accessories', image: '/products/enamel-pin.png',    imageBack: '/products/enamel-pin-2.png',    front: 'medallion',back: 'grid'     },
  { slug: 'lookbook-mmxxvi', name: 'Lookbook MMXXVI',  price: '$25',  category: 'Print',       image: '/products/lookbook.png',      imageBack: '/products/lookbook-2.png',      front: 'glyph',    back: 'stamp'    },
];

export function findProducts(slugs: string[]): Product[] {
  return slugs.map((s) => PRODUCTS.find((p) => p.slug === s)!).filter(Boolean);
}
```

**Critical**: `cotton-scarf` and `wool-cap` are intentionally **blank** (no `image` set, `blank: true`). These render as empty `bg-bone` tiles with no hover animation and no caption. Do not invent fallback content — the empty tiles are part of the layout rhythm.

## Buyer-supplied product images

Save under `public/products/` (Vite serves at root). All file names are **kebab-case**, no spaces:

```
public/products/
├── boxy-tee.png       boxy-tee-2.png       ← Plain heavyweight tee, ivory, on hanger / flat lay back
├── heavy-knit.png     heavy-knit-2.png     ← Chunky cable-knit pullover, oat color, front / back
├── studio-cap.png     studio-cap-2.png     ← 5-panel cap, ecru canvas, front 3/4 / profile
├── the-coat.jpg       the-coat-2.png       ← Long wool overcoat, charcoal / camel, full length both views
├── cotton-tote.png    cotton-tote-2.png    ← Natural cotton tote with discreet logo, hanging / flat
├── ribbed-beanie.png  ribbed-beanie-2.png  ← Ribbed cuffed beanie, oat / charcoal, front / side
├── enamel-pin.png     enamel-pin-2.png     ← Small enamel pin "n." mark, macro shot, front / back
└── lookbook.png       lookbook-2.png       ← Spring MMXXVI lookbook (printed booklet), cover / spread
```

**Suggested gen prompts** (Midjourney / DALL·E / Recraft):
- `boxy-tee.png` — `studio product photo, oversized boxy-fit heavyweight cotton tee in undyed ivory, neutral grey backdrop, soft north light, no model, no logo, A.P.C. minimal aesthetic, 4:5 portrait`
- `heavy-knit.png` — `chunky cable-knit wool sweater in oat, laid on a warm grey paper, top-down, no model, hand-loomed texture visible, Lemaire studio aesthetic, 9:12 portrait`
- `studio-cap.png` — `unstructured 5-panel cap in ecru cotton canvas, no logo, 3/4 angle on warm grey backdrop, soft side light, 9:12 portrait`
- `the-coat.jpg` — `long single-breasted wool overcoat in charcoal, full-length flat lay on warm grey, no model, The Row aesthetic, 9:12 portrait`
- `cotton-tote.png` — `natural canvas tote bag hanging from a single hook, soft north light, warm grey wall, no logo, 9:12 portrait`
- `ribbed-beanie.png` — `cuffed ribbed wool beanie in oat, top-down on warm grey paper, no model, 9:12 portrait`
- `enamel-pin.png` — `macro shot of small round enamel pin with letter "n" in burgundy, on warm grey paper, 9:12 portrait`
- `lookbook.png` — `printed lookbook cover in burgundy with "MMXXVI" embossed, sitting on warm grey paper, 9:12 portrait`
- `-2.png` variants — same garment, alternate angle (back / inside / detail). Consistent lighting + backdrop.

The image-flip animation is what makes these images feel premium — both front and back must share the same lighting, background, and crop, so the hover transition reads as a single garment turning rather than two unrelated shots.

## Hover image-flip (the OUTFIT signature)

Implemented in `src/components/products/ProductCard.tsx`. **Two stacked `<img>` layers** inside a `group relative overflow-hidden bg-bone aspect-large rounded-[var(--radius)]`:

1. **Front layer** — always rendered:
   ```tsx
   <img src={product.image} alt={product.name} className="absolute inset-0 h-full w-full object-cover" />
   ```

2. **Back layer** — clipped + scaled + blown-out, animates in on group hover:
   ```tsx
   <div
     className="absolute inset-0 overflow-hidden
                [clip-path:polygon(0%_0%,0%_0%,0%_100%,0%_100%)]
                group-hover:[clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)]
                transition-[clip-path] duration-700"
     style={{ transitionTimingFunction: 'cubic-bezier(0.87, 0, 0.13, 1)' }}
   >
     <img
       src={product.imageBack ?? product.image}
       alt=""
       className="absolute inset-0 h-full w-full object-cover
                  scale-[1.2] group-hover:scale-100
                  [filter:brightness(380%)_contrast(150%)] group-hover:[filter:brightness(100%)_contrast(100%)]
                  transition-[transform,filter] duration-700"
       style={{ transitionTimingFunction: 'cubic-bezier(0.87, 0, 0.13, 1)' }}
     />
   </div>
   ```

3. **Curtain reveal** — `motion.div` overlay on viewport enter, slides L→R then disappears:
   ```tsx
   <motion.div
     className="absolute inset-0 origin-left bg-stone z-10 pointer-events-none"
     initial={{ scaleX: 1 }}
     whileInView={{ scaleX: 0 }}
     viewport={{ once: true, margin: '-10%' }}
     transition={{ duration: 0.9, ease: [0.87, 0, 0.13, 1], delay: 0.05 }}
   />
   ```

4. **Caption** below image (skipped when `blank: true`): 2-row `flex items-baseline justify-between text-[13px] mt-3`:
   - Left: product `name` (color `text-foreground`)
   - Right: product `price` (color `text-foreground/70`)
   - Sub-row: `eyebrow` class with `category` (left), nothing right.

5. **Blank cards** (`product.blank === true`) — render only `<div className="aspect-large rounded-[var(--radius)] bg-bone" />`. No images, no curtain, no caption, no hover. The empty slot is the design.

6. **Fallback `ProductCanvas`** — when neither `image` nor `blank` is set, render an SVG/CSS placeholder using the `product.front` variant. The 6 variants are simple typography-driven tiles (declared in `src/components/products/ProductCanvas.tsx`):
   - `glyph`: oversized letter "N" centered, ink on bone.
   - `stamp`: small circular wax-stamp mark center, bordered.
   - `ruled`: horizontal hairlines + a single italic word.
   - `grid`: 4×4 dot grid with one dot replaced by a small mark.
   - `medallion`: round outlined badge with "MMXXVI" inside.
   - `marquee`: rotating-style strip of "NONAME · NONAME · NONAME".
   - All variants use `bg-bone` + `text-ink` + the `Outfit` font. Simple, no animation, no chrome.

## Section 1 — Nav (`src/components/sections/Nav.tsx`)

Full-bleed, no top border. Layout: `flex items-center justify-between px-4 py-8 lg:px-6`.

- **Left** — `SmallMark` SVG only (no word "NONAME" here).
- **Right** (`flex items-center gap-8 text-[13px]`) — two anchor links:
  - `Shop` — current page state, gets `.link-underline.link-selected` (underline always visible).
  - `Bag (0)` — `.link-underline` (underline grows on hover). The `(0)` is a hardcoded literal — the cart state is unimplemented; `bagCount` is always `0`.
- **Mobile drawer**: a `Menu` icon button (`hidden lg:hidden ... lg:hidden`-style) opens a `fixed inset-0 bg-bone z-50` drawer that slides in from the right with `motion`. Drawer body lists `Shop`, `Bag (0)` vertically + a close `X` top-right. Animation: `initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}` over 400 ms.

## Section 2 — Hero (`src/components/sections/Hero.tsx`)

Wrapper: `.gutter pt-8 md:pt-16 pb-12 md:pb-20`.

### 2A · Giant wordmark "NONAME"

Inline SVG, full container width, fills horizontally via `textLength` + `lengthAdjust`. No `®`, no trademark mark, no italic — just the 6 letters in Outfit 700.

```tsx
<svg
  viewBox="0 0 1391 296"
  className="block w-full h-auto text-foreground"
  aria-label="NONAME"
>
  <text
    x="0"
    y="262"
    fontFamily="Outfit"
    fontWeight={700}
    fontSize="296"
    fill="currentColor"
    textLength="1391"
    lengthAdjust="spacingAndGlyphs"
  >NONAME</text>
</svg>
```

### 2B · Hairline rule

Below the wordmark, a single `.hairline` element, animated:

```tsx
<motion.div
  className="hairline mt-6 origin-left"
  initial={{ scaleX: 0 }}
  whileInView={{ scaleX: 1 }}
  viewport={{ once: true, margin: '-10%' }}
  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
/>
```

### 2C · Intro 4-column grid

`grid grid-cols-4 gap-6 md:gap-10 mt-8 md:mt-10` — 4 equal-width cells on all breakpoints (do NOT stack vertically on mobile; the cells deliberately squeeze):

| Cell | Content |
|---|---|
| 1 | `<h1 className="text-[13px]">NONAME</h1>` |
| 2 | `<h2 className="eyebrow mb-2">Why</h2>` + paragraph `text-[13px] leading-[1.55] text-foreground/80`: `A small Porto studio printing in small drops. Considered clothing, made to last — shipped from the workshop where it's cut.` |
| 3 | `flex flex-col gap-5` containing two anchors stacked vertically: `<a href="#lookbook" className="link-underline text-[13px]">The Lookbook</a>` and `<a href="#shipping" className="link-underline text-[13px]">Shipping &amp; Returns</a>` |
| 4 | `flex justify-end items-start text-[13px] text-foreground/70`: `© 2026` |

## Section 3 — ProductGrid (`src/components/sections/ProductGrid.tsx`)

Wrapper: `.gutter mt-16 md:mt-26`.

Grid: `grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6`.

Renders `findProducts(['boxy-tee-01', 'heavy-knit', 'studio-cap', 'wool-coat'])`. Each `<ProductCard>` uses `aspect-large` (9:12 portrait).

## Section 4 — Journal (`src/components/sections/Journal.tsx`)

Wrapper: `.gutter mt-20 md:mt-34 mb-12 md:mb-16` + `id="lookbook"` anchor.

Layout: 16-column grid (`grid grid-cols-16 gap-4`). Two rows:

**Row A** (kicker + heading):
- Cell `col-span-3`: `<span className="eyebrow">/// The lookbook</span>`
- Cell `col-span-13`: `<h2 className="text-display-md font-normal tracking-[-0.02em] leading-[1]">Every garment is cut to <span className="ital">outlast</span> its season.</h2>`

**Row B** (paragraph + CTA), `mt-10 flex items-end justify-between gap-10`:
- Left: paragraph `max-w-[52ch] text-[13.5px] leading-[1.7] text-foreground/80`:
  > Each piece is woven, cut, and finished in our Porto workshop. We publish a small drop twice a year — when the fabric is right, when the cut sits how it should, and not before. The lookbook documents what stays.
- Right: anchor `text-[13px] link-underline` → `View Spring MMXXVI →` (note the right-arrow character `→`, not `->`).

## Section 5 — ProductGridAsymmetric (`src/components/sections/ProductGridAsymmetric.tsx`)

Wrapper: `.gutter mt-12 md:mt-20`.

**Row A** (portrait, 3-up): `grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 mb-4 lg:mb-6`. `findProducts(['cotton-tote', 'ribbed-beanie', 'cotton-scarf'])` — each `aspect-large`. The third tile (`cotton-scarf`) is the blank slot.

**Row B** (near-square, 3-up): same grid layout. `findProducts(['wool-cap', 'enamel-pin', 'lookbook-mmxxvi'])` — each `aspect-small` (242/240, slightly taller than square). The first tile (`wool-cap`) is the blank slot.

## Section 6 — Footer (`src/components/sections/Footer.tsx`)

Wrapper: `.gutter mt-24 md:mt-34 pb-10`.

**Top divider**: `.hairline mb-10` (same animated `scaleX: 0 → 1`).

**Main row**: `flex flex-wrap items-start justify-between gap-6`.

### 6A · Studio block (left)

`<div className="max-w-xs">` containing:

- `<span className="eyebrow">/// Studio</span>`
- 3 address lines `mt-4 text-[13px] leading-[1.55] text-foreground/85`:
  - `Rua das Flores, 84`
  - `4050-262 Porto`
  - `Portugal`
- 1 email line `mt-3 text-[13px]`:
  - `<a href="mailto:hello@noname.studio" className="link-underline">hello@noname.studio</a>`

### 6B · Link columns (right, `flex gap-8 md:gap-14`)

Three columns. Each column starts with `<span className="eyebrow mb-3 block">{title}</span>` and then a `<ul className="space-y-2 text-[13px]">` of anchors with `.link-underline`:

**Shop**
- All
- Apparel
- Knitwear
- Outerwear
- Accessories

**Help**
- Shipping
- Returns
- Size guide
- Care
- Contact

**Elsewhere**
- Lookbook
- Stockists
- Instagram
- Newsletter

### 6C · Colophon

`mt-14 pt-6 hairline-top` row (`flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-foreground/55`):

- Left: `© NONAME® S.A. · MMXXVI`
- Center: `Set in Outfit`
- Right: `Spring MMXXVI`

(For the top border above this row, reuse the hairline pattern: `<div className="hairline mt-14" />` then the row below it.)

## Misc tokens / constraints

- Ease curve used throughout: `cubic-bezier(0.22, 1, 0.36, 1)` for entries; `cubic-bezier(0.87, 0, 0.13, 1)` for the image-flip and curtain reveal (snappier in/out feel).
- Border color idiom: `border-foreground/15` (matches `.hairline`).
- **Single chromatic accent** — only the burgundy palette. No teal, no blue, no green, no neon.
- **No italic font face** — `.italic` and `<em>` are synthesized by the browser. The user explicitly chose this; do NOT swap in Outfit Italic or another font.
- **No `®` glyph** in the giant wordmark SVG (it appears only in the footer colophon "NONAME®").
- Spacer `<div />` elements in Nav have been removed — no empty divs as padding.
- Motion `viewport={{ once: true, margin: '-10%' }}` is the default for in-view triggers.
- All anchors that route somewhere later (`/shop`, `/lookbook`, `/stockists`) use `href="#"` placeholders. Cart state is hardcoded (`bagCount = 0`).
- Outfit weights actually used in the page: `400` (body), `500` (links and section titles), `700` (wordmark + small mark). Other weights are loaded but not referenced.
- `index.html` favicon: tiny inline SVG `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'><circle cx='4' cy='4' r='2.5' fill='%23560310'/></svg>` (a single burgundy dot).

## App root order (`src/App.tsx`)

```tsx
import Nav from '@/components/sections/Nav';
import Hero from '@/components/sections/Hero';
import ProductGrid from '@/components/sections/ProductGrid';
import Journal from '@/components/sections/Journal';
import ProductGridAsymmetric from '@/components/sections/ProductGridAsymmetric';
import Footer from '@/components/sections/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-bone text-ink antialiased">
      <Nav />
      <Hero />
      <ProductGrid />
      <Journal />
      <ProductGridAsymmetric />
      <Footer />
    </main>
  );
}
```

## File structure

```
src/
├── main.tsx
├── App.tsx
├── index.css                  (Tailwind layers + tokens + utility classes from above)
├── lib/
│   └── utils.ts               (cn() helper)
└── components/
    ├── ui/
    │   ├── button.tsx         (shadcn new-york)
    │   ├── input.tsx
    │   └── badge.tsx
    ├── products/
    │   ├── products.ts        (PRODUCTS registry + findProducts)
    │   ├── ProductCard.tsx    (hover image-flip + curtain reveal + blank variant)
    │   └── ProductCanvas.tsx  (6 SVG fallback variants)
    └── sections/
        ├── Nav.tsx
        ├── Hero.tsx
        ├── ProductGrid.tsx
        ├── Journal.tsx
        ├── ProductGridAsymmetric.tsx
        └── Footer.tsx

public/
└── products/                  (buyer supplies — see asset table above)

index.html                     (Outfit Google Fonts link + dot favicon SVG + title)
package.json
vite.config.ts                 (port 5180, strictPort, @ alias)
tailwind.config.ts             (config from above)
tsconfig.json + .app.json + .node.json
postcss.config.js
components.json                (shadcn new-york + stone base)
```

`index.html` `<title>`: `NONAME® — Spring MMXXVI`.
`<meta name="description">`: `A small Porto studio. Considered clothing, printed in small drops. Spring MMXXVI.`

Reproduce exactly — palette HSL values, Outfit font (single family across all 4 Tailwind aliases), the giant SVG wordmark with `textLength="1391" lengthAdjust="spacingAndGlyphs"`, the hover image-flip animation (700ms cubic-bezier(0.87,0,0.13,1) with blown-out brightness/contrast easing), the curtain reveal on viewport enter, the 10-product registry (including `blank: true` on `cotton-scarf` + `wool-cap`), the 6 sections in this order with no extras, the 4-column squeeze-on-mobile Hero intro grid, the `///` kicker prefix (NOT `++`), and the Spring MMXXVI / Porto framing in the copy. Single-font discipline — every text element resolves to Outfit at one of the loaded weights. Background `#F0F0F0`, foreground `#560310`. The buyer is expected to drop 14 product images into `public/products/` per the kebab-case naming table; the 2 blank cards remain empty by design.
