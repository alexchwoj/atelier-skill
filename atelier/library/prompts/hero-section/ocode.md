# OCODE — Standard Prompt (v1)

> The exact, copy-pasteable prompt to reproduce the **OCODE LABS** hero landing page bit-for-bit. Follows the Fivefold 11-layer anatomy. Every block below is **invariant** — paste verbatim, do not paraphrase, do not "improve".

---

## LAYER 0 — META

```yaml
asset_id: ocode-hero-saas-shapegrid-01
category: landing-page
aesthetic: dark-grid-cinematic
industry: saas
tone: premium
license: standard
version: 1.0
last_updated: 2026-06-01
```

---

## LAYER 1 — OPENING DECLARATION

Build a **single-page hero landing** for **OCODE** — a **production-grade SaaS software studio that ships AI-powered platforms, dashboards and APIs in weeks**.

Use the following **pinned** tech stack (do not substitute):

- **React 18 + TypeScript + Vite 5**
- **Tailwind CSS 3** (default config + the extensions in Layers 2–4)
- **shadcn/ui Button** primitive only (`class-variance-authority` + `@radix-ui/react-slot`)
- **tailwindcss-animate** plugin
- **OCODE InteractiveShapeGrid** — in-house animated canvas grid (full source in Layer 4b). Do **not** swap for any external/third-party grid library.

The aesthetic is **dark charcoal hero with a vivid neon-green accent, an animated interactive square grid as the background, and bottom-left anchored content that fades up in a tight stagger**. `hsl(0 0% 8%)` (`--hero-bg`) is the global background. Default text color is `hsl(0 0% 96%)` (`--foreground`). **Do not use purple, indigo, blue, orange, or warm reds anywhere — the only accent is the brand neon green `hsl(119 99% 46%)`.**

---

## LAYER 2 — FONTS

Load via Google Fonts inside `<head>` of `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

**Tailwind config extension:**

```js
fontFamily: {
  sora: ["Sora", "sans-serif"],
}
```

**Body root rule (in `@layer base` of `src/index.css`):**

```css
body { @apply bg-hero-bg text-foreground font-sora antialiased; }
```

**Available weights:** 300 / 400 / 500 / 600 / 700. The hero heading uses 700, the body uses 300 (light) and 400 (default). If a weight outside this list is requested, **clamp down** to the nearest available weight — never synthesize.

---

## LAYER 3 — COLOR SYSTEM

Define as CSS custom properties on `:root` in `src/index.css`. **HSL, dark theme only — there is no light variant.**

```css
@layer base {
  :root {
    --background:          0 0% 10%;
    --foreground:          0 0% 96%;

    --primary:             119 99% 46%;
    --primary-foreground:  0 0% 4%;

    --secondary:           0 0% 18%;
    --secondary-foreground:0 0% 96%;

    --muted:               0 0% 16%;
    --muted-foreground:    0 0% 60%;

    --accent:              119 99% 46%;
    --accent-foreground:   0 0% 4%;

    --destructive:         0 84% 60%;

    --border:              0 0% 20%;
    --input:               0 0% 20%;
    --ring:                119 99% 46%;

    --radius:              0.5rem;

    --nav-button:          0 0% 18%;
    --hero-bg:             0 0% 8%;
  }

  * { @apply border-border; }
  body { @apply bg-hero-bg text-foreground font-sora antialiased; }
}
```

**Tailwind config color extension (exact mapping):**

```js
colors: {
  border:      "hsl(var(--border))",
  input:       "hsl(var(--input))",
  ring:        "hsl(var(--ring))",
  background:  "hsl(var(--background))",
  foreground:  "hsl(var(--foreground))",
  primary:     { DEFAULT: "hsl(var(--primary))",   foreground: "hsl(var(--primary-foreground))" },
  secondary:   { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
  muted:       { DEFAULT: "hsl(var(--muted))",     foreground: "hsl(var(--muted-foreground))" },
  accent:      { DEFAULT: "hsl(var(--accent))",    foreground: "hsl(var(--accent-foreground))" },
  destructive: { DEFAULT: "hsl(var(--destructive))" },
  "nav-button":"hsl(var(--nav-button))",
  "hero-bg":   "hsl(var(--hero-bg))",
},
borderRadius: {
  lg: "var(--radius)",
  md: "calc(var(--radius) - 2px)",
  sm: "calc(var(--radius) - 4px)",
}
```

**Reference hex values (for design-tool parity, do not bake into code — always use the CSS vars):**

- Hero background: `#141414` (`--background`) / `#141414` darker shell: `#141414` (`--hero-bg ≈ #141414`)
- Brand neon green: `#04E605` (`--primary` / `--accent`)
- Foreground white: `#F5F5F5`
- Muted grey text: `#999999`
- Border hairline: `#333333`
- Nav-button surface: `#2E2E2E`
- Hover-fill green (grid): `#2BD64A`

---

## LAYER 4 — CUSTOM CSS / KEYFRAMES / DESIGN-DNA COMPONENTS

**Invariant block. Paste verbatim.**

### 4a. Keyframes + animation utilities

Inside `tailwind.config.js → theme.extend`:

```js
keyframes: {
  "fade-up": {
    "0%":   { opacity: "0", transform: "translateY(20px)", filter: "blur(4px)" },
    "100%": { opacity: "1", transform: "translateY(0)",    filter: "blur(0)"   },
  },
  "fade-in": {
    "0%":   { opacity: "0" },
    "100%": { opacity: "1" },
  },
},
animation: {
  "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
  "fade-in": "fade-in 0.5s ease-out forwards",
},
```

Combine with `opacity-0 animate-fade-up` and a `style={{ animationDelay: "Xs" }}` for the per-element stagger. Default ease across the project: `cubic-bezier(0.16, 1, 0.3, 1)`.

### 4b. OCODE `InteractiveShapeGrid` — the signature background

This is OCODE's in-house animated grid component. It is a `<canvas>` that draws a tessellated grid (squares / circles / hexagons / triangles), scrolls it slowly in any direction, and lights up the cell under the cursor plus a fading "trail" of previously-hovered cells. Zero dependencies beyond React.

**File: `src/components/ShapeGrid.jsx`** (verbatim — do not refactor):

```jsx
import { useRef, useEffect } from 'react';
import './ShapeGrid.css';

const ShapeGrid = ({
  direction = 'right',
  speed = 1,
  borderColor = '#999',
  squareSize = 40,
  hoverFillColor = '#222',
  shape = 'square',
  hoverTrailAmount = 0,
  className = ''
}) => {
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  const numSquaresX = useRef();
  const numSquaresY = useRef();
  const gridOffset = useRef({ x: 0, y: 0 });
  const hoveredSquare = useRef(null);
  const trailCells = useRef([]);
  const cellOpacities = useRef(new Map());

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const isHex = shape === 'hexagon';
    const isTri = shape === 'triangle';
    const hexHoriz = squareSize * 1.5;
    const hexVert = squareSize * Math.sqrt(3);

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
      numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const drawHex = (cx, cy, size) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const vx = cx + size * Math.cos(angle);
        const vy = cy + size * Math.sin(angle);
        if (i === 0) ctx.moveTo(vx, vy);
        else ctx.lineTo(vx, vy);
      }
      ctx.closePath();
    };

    const drawCircle = (cx, cy, size) => {
      ctx.beginPath();
      ctx.arc(cx, cy, size / 2, 0, Math.PI * 2);
      ctx.closePath();
    };

    const drawTriangle = (cx, cy, size, flip) => {
      ctx.beginPath();
      if (flip) {
        ctx.moveTo(cx, cy + size / 2);
        ctx.lineTo(cx + size / 2, cy - size / 2);
        ctx.lineTo(cx - size / 2, cy - size / 2);
      } else {
        ctx.moveTo(cx, cy - size / 2);
        ctx.lineTo(cx + size / 2, cy + size / 2);
        ctx.lineTo(cx - size / 2, cy + size / 2);
      }
      ctx.closePath();
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isHex) {
        const colShift = Math.floor(gridOffset.current.x / hexHoriz);
        const offsetX = ((gridOffset.current.x % hexHoriz) + hexHoriz) % hexHoriz;
        const offsetY = ((gridOffset.current.y % hexVert) + hexVert) % hexVert;
        const cols = Math.ceil(canvas.width / hexHoriz) + 3;
        const rows = Math.ceil(canvas.height / hexVert) + 3;

        for (let col = -2; col < cols; col++) {
          for (let row = -2; row < rows; row++) {
            const cx = col * hexHoriz + offsetX;
            const cy = row * hexVert + ((col + colShift) % 2 !== 0 ? hexVert / 2 : 0) + offsetY;
            const cellKey = `${col},${row}`;
            const alpha = cellOpacities.current.get(cellKey);
            if (alpha) {
              ctx.globalAlpha = alpha;
              drawHex(cx, cy, squareSize);
              ctx.fillStyle = hoverFillColor;
              ctx.fill();
              ctx.globalAlpha = 1;
            }
            drawHex(cx, cy, squareSize);
            ctx.strokeStyle = borderColor;
            ctx.stroke();
          }
        }
      } else if (isTri) {
        const halfW = squareSize / 2;
        const colShift = Math.floor(gridOffset.current.x / halfW);
        const rowShift = Math.floor(gridOffset.current.y / squareSize);
        const offsetX = ((gridOffset.current.x % halfW) + halfW) % halfW;
        const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize;
        const cols = Math.ceil(canvas.width / halfW) + 4;
        const rows = Math.ceil(canvas.height / squareSize) + 4;

        for (let col = -2; col < cols; col++) {
          for (let row = -2; row < rows; row++) {
            const cx = col * halfW + offsetX;
            const cy = row * squareSize + squareSize / 2 + offsetY;
            const flip = ((col + colShift + row + rowShift) % 2 + 2) % 2 !== 0;
            const cellKey = `${col},${row}`;
            const alpha = cellOpacities.current.get(cellKey);
            if (alpha) {
              ctx.globalAlpha = alpha;
              drawTriangle(cx, cy, squareSize, flip);
              ctx.fillStyle = hoverFillColor;
              ctx.fill();
              ctx.globalAlpha = 1;
            }
            drawTriangle(cx, cy, squareSize, flip);
            ctx.strokeStyle = borderColor;
            ctx.stroke();
          }
        }
      } else if (shape === 'circle') {
        const offsetX = ((gridOffset.current.x % squareSize) + squareSize) % squareSize;
        const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize;
        const cols = Math.ceil(canvas.width / squareSize) + 3;
        const rows = Math.ceil(canvas.height / squareSize) + 3;

        for (let col = -2; col < cols; col++) {
          for (let row = -2; row < rows; row++) {
            const cx = col * squareSize + squareSize / 2 + offsetX;
            const cy = row * squareSize + squareSize / 2 + offsetY;
            const cellKey = `${col},${row}`;
            const alpha = cellOpacities.current.get(cellKey);
            if (alpha) {
              ctx.globalAlpha = alpha;
              drawCircle(cx, cy, squareSize);
              ctx.fillStyle = hoverFillColor;
              ctx.fill();
              ctx.globalAlpha = 1;
            }
            drawCircle(cx, cy, squareSize);
            ctx.strokeStyle = borderColor;
            ctx.stroke();
          }
        }
      } else {
        const offsetX = ((gridOffset.current.x % squareSize) + squareSize) % squareSize;
        const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize;
        const cols = Math.ceil(canvas.width / squareSize) + 3;
        const rows = Math.ceil(canvas.height / squareSize) + 3;

        for (let col = -2; col < cols; col++) {
          for (let row = -2; row < rows; row++) {
            const sx = col * squareSize + offsetX;
            const sy = row * squareSize + offsetY;
            const cellKey = `${col},${row}`;
            const alpha = cellOpacities.current.get(cellKey);
            if (alpha) {
              ctx.globalAlpha = alpha;
              ctx.fillStyle = hoverFillColor;
              ctx.fillRect(sx, sy, squareSize, squareSize);
              ctx.globalAlpha = 1;
            }
            ctx.strokeStyle = borderColor;
            ctx.strokeRect(sx, sy, squareSize, squareSize);
          }
        }
      }

      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2,
        Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const updateAnimation = () => {
      const effectiveSpeed = Math.max(speed, 0.1);
      const wrapX = isHex ? hexHoriz * 2 : squareSize;
      const wrapY = isHex ? hexVert : isTri ? squareSize * 2 : squareSize;

      switch (direction) {
        case 'right':    gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + wrapX) % wrapX; break;
        case 'left':     gridOffset.current.x = (gridOffset.current.x + effectiveSpeed + wrapX) % wrapX; break;
        case 'up':       gridOffset.current.y = (gridOffset.current.y + effectiveSpeed + wrapY) % wrapY; break;
        case 'down':     gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + wrapY) % wrapY; break;
        case 'diagonal':
          gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + wrapX) % wrapX;
          gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + wrapY) % wrapY;
          break;
        default: break;
      }

      updateCellOpacities();
      drawGrid();
      requestRef.current = requestAnimationFrame(updateAnimation);
    };

    const updateCellOpacities = () => {
      const targets = new Map();
      if (hoveredSquare.current) {
        targets.set(`${hoveredSquare.current.x},${hoveredSquare.current.y}`, 1);
      }
      if (hoverTrailAmount > 0) {
        for (let i = 0; i < trailCells.current.length; i++) {
          const t = trailCells.current[i];
          const key = `${t.x},${t.y}`;
          if (!targets.has(key)) {
            targets.set(key, (trailCells.current.length - i) / (trailCells.current.length + 1));
          }
        }
      }
      for (const [key] of targets) {
        if (!cellOpacities.current.has(key)) cellOpacities.current.set(key, 0);
      }
      for (const [key, opacity] of cellOpacities.current) {
        const target = targets.get(key) || 0;
        const next = opacity + (target - opacity) * 0.15;
        if (next < 0.005) cellOpacities.current.delete(key);
        else cellOpacities.current.set(key, next);
      }
    };

    const handleMouseMove = event => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      if (isHex) {
        const colShift = Math.floor(gridOffset.current.x / hexHoriz);
        const offsetX = ((gridOffset.current.x % hexHoriz) + hexHoriz) % hexHoriz;
        const offsetY = ((gridOffset.current.y % hexVert) + hexVert) % hexVert;
        const adjustedX = mouseX - offsetX;
        const adjustedY = mouseY - offsetY;
        const col = Math.round(adjustedX / hexHoriz);
        const rowOffset = (col + colShift) % 2 !== 0 ? hexVert / 2 : 0;
        const row = Math.round((adjustedY - rowOffset) / hexVert);
        if (!hoveredSquare.current || hoveredSquare.current.x !== col || hoveredSquare.current.y !== row) {
          if (hoveredSquare.current && hoverTrailAmount > 0) {
            trailCells.current.unshift({ ...hoveredSquare.current });
            if (trailCells.current.length > hoverTrailAmount) trailCells.current.length = hoverTrailAmount;
          }
          hoveredSquare.current = { x: col, y: row };
        }
      } else if (isTri) {
        const halfW = squareSize / 2;
        const offsetX = ((gridOffset.current.x % halfW) + halfW) % halfW;
        const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize;
        const adjustedX = mouseX - offsetX;
        const adjustedY = mouseY - offsetY;
        const col = Math.round(adjustedX / halfW);
        const row = Math.floor(adjustedY / squareSize);
        if (!hoveredSquare.current || hoveredSquare.current.x !== col || hoveredSquare.current.y !== row) {
          if (hoveredSquare.current && hoverTrailAmount > 0) {
            trailCells.current.unshift({ ...hoveredSquare.current });
            if (trailCells.current.length > hoverTrailAmount) trailCells.current.length = hoverTrailAmount;
          }
          hoveredSquare.current = { x: col, y: row };
        }
      } else if (shape === 'circle') {
        const offsetX = ((gridOffset.current.x % squareSize) + squareSize) % squareSize;
        const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize;
        const adjustedX = mouseX - offsetX;
        const adjustedY = mouseY - offsetY;
        const col = Math.round(adjustedX / squareSize);
        const row = Math.round(adjustedY / squareSize);
        if (!hoveredSquare.current || hoveredSquare.current.x !== col || hoveredSquare.current.y !== row) {
          if (hoveredSquare.current && hoverTrailAmount > 0) {
            trailCells.current.unshift({ ...hoveredSquare.current });
            if (trailCells.current.length > hoverTrailAmount) trailCells.current.length = hoverTrailAmount;
          }
          hoveredSquare.current = { x: col, y: row };
        }
      } else {
        const offsetX = ((gridOffset.current.x % squareSize) + squareSize) % squareSize;
        const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize;
        const adjustedX = mouseX - offsetX;
        const adjustedY = mouseY - offsetY;
        const col = Math.floor(adjustedX / squareSize);
        const row = Math.floor(adjustedY / squareSize);
        if (!hoveredSquare.current || hoveredSquare.current.x !== col || hoveredSquare.current.y !== row) {
          if (hoveredSquare.current && hoverTrailAmount > 0) {
            trailCells.current.unshift({ ...hoveredSquare.current });
            if (trailCells.current.length > hoverTrailAmount) trailCells.current.length = hoverTrailAmount;
          }
          hoveredSquare.current = { x: col, y: row };
        }
      }
    };

    const handleMouseLeave = () => {
      if (hoveredSquare.current && hoverTrailAmount > 0) {
        trailCells.current.unshift({ ...hoveredSquare.current });
        if (trailCells.current.length > hoverTrailAmount) trailCells.current.length = hoverTrailAmount;
      }
      hoveredSquare.current = null;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    requestRef.current = requestAnimationFrame(updateAnimation);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(requestRef.current);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [direction, speed, borderColor, hoverFillColor, squareSize, shape, hoverTrailAmount]);

  return <canvas ref={canvasRef} className={`shapegrid-canvas ${className}`}></canvas>;
};

export default ShapeGrid;
```

**File: `src/components/ShapeGrid.css`** (verbatim):

```css
.shapegrid-canvas {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}
```

**Props contract** (do not change defaults beyond what Layer 5 specifies):

| Prop | Type | Description |
|---|---|---|
| `direction` | `'up' \| 'down' \| 'left' \| 'right' \| 'diagonal'` | Scroll direction of the grid. |
| `speed` | `number` | Animation speed multiplier (clamped to min 0.1). |
| `borderColor` | `string` (canvas color) | Stroke color of every cell. |
| `squareSize` | `number` (px) | Edge length of a square (or radius reference for other shapes). |
| `hoverFillColor` | `string` (canvas color) | Fill color of the hovered cell and its trail. |
| `shape` | `'square' \| 'circle' \| 'hexagon' \| 'triangle'` | Tessellation shape. |
| `hoverTrailAmount` | `number` | How many previously-hovered cells stay visible as a fading trail. `0` disables. |
| `className` | `string` | Extra classes on the `<canvas>`. |

---

## LAYER 5 — BACKGROUND ASSET

**Option chosen:** the in-house `InteractiveShapeGrid` (Layer 4b).

No video, no shader, no external scene. The grid IS the background.

**Exact props used in the hero:**

```jsx
<ShapeGrid
  speed={0.1}
  squareSize={80}
  direction="diagonal"
  borderColor="rgba(255, 255, 255, 0.08)"
  hoverFillColor="#2bd64a"
  shape="square"
  hoverTrailAmount={6}
/>
```

**Stacking inside the hero `<section>`:**

```
absolute z-0  → <ShapeGrid />              (canvas, fills inset-0)
absolute z-[1] → bg-black/30                (flat dark veil)
absolute z-[1] → bg-gradient-to-t from-hero-bg via-hero-bg/30 to-transparent
absolute z-[1] → bg-gradient-to-r from-hero-bg/70 via-transparent to-transparent
relative z-10  → content block               (pointer-events-none, buttons re-enable)
```

All overlay layers carry `pointer-events-none` so mouse events fall through to the canvas, driving the hover trail underneath the copy.

---

## LAYER 6 — SHARED COMPONENTS

### 6a. `cn` utility

**File: `src/lib/utils.ts`**

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### 6b. shadcn `Button` with three custom variants

**File: `src/components/ui/button.tsx`** (verbatim):

```tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:     "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-foreground hover:bg-destructive/90",
        outline:     "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:   "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:       "hover:bg-accent hover:text-accent-foreground",
        link:        "text-primary underline-offset-4 hover:underline",
        navCta:      "text-foreground bg-nav-button hover:bg-nav-button/80 active:scale-[0.97] transition-all",
        hero:        "bg-primary text-primary-foreground hover:brightness-110 active:scale-[0.97] transition-all",
        heroOutline: "bg-white text-background hover:brightness-90 active:scale-[0.97] transition-all",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm:      "h-9 rounded-md px-3",
        lg:      "h-11 rounded-md px-8",
        icon:    "h-10 w-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
```

---

## LAYER 7 — SECTIONS

The v1 page has exactly **two sections**: a fixed transparent **Navbar** and a single full-screen **Hero**. Wrap them in a thin page shell.

### Page shell

**File: `src/pages/Index.tsx`**

```tsx
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

export default function Index() {
  return (
    <div className="bg-hero-bg min-h-screen">
      <Navbar />
      <HeroSection />
    </div>
  );
}
```

**File: `src/App.tsx`**

```tsx
import Index from "@/pages/Index";
export default function App() { return <Index />; }
```

---

### SECTION 1 — NAVBAR

**Block 1 · Container**
- Wrapper: `<header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16 py-5">`
- Background: fully transparent (the grid shows through).
- Stays visually above the hero (`z-50`).

**Block 2 · Background**
- None. No overlay, no blur.

**Block 3 · Layout primitive**
- Horizontal flex, `justify-between`, `items-center`.

**Block 4 · Elements**

1. **Logo (left)**
   - Tag: `<a href="#" />`
   - Classes: `text-foreground text-xl font-semibold tracking-tight`
   - Text: **`OCODE`** (uppercase visual, but written as-is — the brand is already uppercase)

2. **Nav links (center, desktop only)**
   - Wrapper: `<nav className="hidden md:flex items-center gap-8">`
   - Each link: `<a href={`#${slug}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest">{label}</a>`
   - Items (exact order, exact strings):
     - `Services`     → `#services`
     - `About Us`     → `#about-us`
     - `Projects`     → `#projects`
     - `Team`         → `#team`
     - `Contacts`     → `#contacts`
   - Slug formula: `label.toLowerCase().replace(/\s+/g, "-")`.

3. **Get Quote CTA (right, desktop only)**
   - shadcn `Button` with `variant="navCta"`, `size="lg"`.
   - Extra classes: `hidden md:inline-flex rounded-lg uppercase text-xs tracking-widest px-6`
   - Text: **`Get Quote`**

**Block 5 · Animation** — none on the navbar (it appears with the page).

**Block 6 · Responsive notes**
- Below `md` (768px): nav links and CTA disappear (`hidden md:flex` / `hidden md:inline-flex`). **No hamburger menu in v1.** Only the logo stays.

**Block 7 · Copy** (verbatim, in order)
```
OCODE
SERVICES
ABOUT US
PROJECTS
TEAM
CONTACTS
GET QUOTE
```

**Full file — `src/components/Navbar.tsx`**:

```tsx
import { Button } from "@/components/ui/button";

const navLinks = ["Services", "About Us", "Projects", "Team", "Contacts"];

const toHref = (label: string) =>
  `#${label.toLowerCase().replace(/\s+/g, "-")}`;

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16 py-5">
      <a href="#" className="text-foreground text-xl font-semibold tracking-tight">
        OCODE
      </a>

      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link}
            href={toHref(link)}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest"
          >
            {link}
          </a>
        ))}
      </nav>

      <Button
        variant="navCta"
        size="lg"
        className="hidden md:inline-flex rounded-lg uppercase text-xs tracking-widest px-6"
      >
        Get Quote
      </Button>
    </header>
  );
}
```

---

### SECTION 2 — HERO

**Block 1 · Container**
- Wrapper: `<section className="relative min-h-screen flex items-end bg-hero-bg overflow-hidden">`
- Full viewport height. Content is **anchored to the bottom-left** via `flex items-end` + bottom padding on the inner block.

**Block 2 · Background**
- The `InteractiveShapeGrid` from Layer 5, in its own `<div className="absolute inset-0">` wrapper.
- Plus three pointer-events-none overlays at `z-[1]`:
  1. `bg-black/30` — flat veil for global contrast.
  2. `bg-gradient-to-t from-hero-bg via-hero-bg/30 to-transparent` — darkens the bottom where the copy sits.
  3. `bg-gradient-to-r from-hero-bg/70 via-transparent to-transparent` — darkens the left edge under the heading.
- Stacking: canvas z-0 → 3 overlays z-[1] → content z-10.

**Block 3 · Layout primitive**
- Outer: `section` is a flex column anchored to `items-end`.
- Inner content block: a single `<div>` constrained by max-width with bottom padding for the bottom-left placement.

**Block 4 · Elements**

> All animated elements share the class chain `opacity-0 animate-fade-up` and stagger via inline `style={{ animationDelay: "Xs" }}`.

1. **Content container**
   - `<div className="relative z-10 pointer-events-none w-full max-w-[92%] sm:max-w-lg lg:max-w-4xl px-6 md:px-10 pb-10 md:pb-10 pt-32">`
   - `pointer-events-none` lets the mouse drive the canvas underneath. Buttons later re-enable with `pointer-events-auto`.

2. **Heading** — delay `0.2s`
   - `<h1 className="opacity-0 animate-fade-up text-[clamp(3.5rem,10vw,8rem)] font-bold leading-[1.02] tracking-[-0.05em] text-foreground mb-3 md:mb-5 uppercase" style={{ animationDelay: "0.2s" }}>`
   - Inner: `OCODE<span className="text-primary"> LABS</span>`
   - The leading space inside the span is intentional — keeps `LABS` separated by a single space in green.

3. **Subheading** — delay `0.4s`
   - `<p className="opacity-0 animate-fade-up text-foreground/80 text-[clamp(1.375rem,3vw,2.5rem)] font-light mb-4 md:mb-7" style={{ animationDelay: "0.4s" }}>`
   - Text: **`We build software correctly.`**

4. **Description** — delay `0.55s`
   - `<p className="opacity-0 animate-fade-up text-muted-foreground text-[clamp(1.0625rem,1.8vw,1.5rem)] font-light mb-5 md:mb-9" style={{ animationDelay: "0.55s" }}>`
   - Text (verbatim, single paragraph): **`Production-grade SaaS platforms shipped in weeks. AI-powered features integrated with clean, scalable architecture. Custom dashboards and APIs built for your entire business. All of it done right, not just fast.`**

5. **CTA row** — delay `0.7s`
   - Wrapper: `<div className="opacity-0 animate-fade-up flex flex-wrap gap-3 font-bold" style={{ animationDelay: "0.7s" }}>`
   - Two **plain `<button>` elements** (NOT the shadcn Button — the variants exist but the hero uses native buttons so `pointer-events-auto` can be applied directly without wrappers):

     **Primary — `Book a Call`**
     ```
     className="pointer-events-auto bg-primary text-primary-foreground px-8 py-4 md:px-10 md:py-5 text-base md:text-lg rounded-sm cursor-pointer hover:brightness-110 transition-all active:scale-[0.97]"
     ```

     **Secondary — `Our Work`**
     ```
     className="pointer-events-auto bg-white text-background px-8 py-4 md:px-10 md:py-5 text-base md:text-lg rounded-sm cursor-pointer hover:brightness-90 transition-all active:scale-[0.97]"
     ```

6. **Trust line** — delay `0.85s`
   - `<p className="opacity-0 animate-fade-up text-muted-foreground/60 text-sm md:text-base font-light mt-5 md:mt-7" style={{ animationDelay: "0.85s" }}>`
   - Text: **`Trusted software partner. Columbus, OH. 40+ products shipped.`**

**Block 5 · Animation**
- Each element uses `opacity-0 animate-fade-up` (defined in Layer 4a).
- Exact stagger schedule:
  - Heading: `0.2s`
  - Subheading: `0.4s`
  - Description: `0.55s`
  - CTA row: `0.7s`
  - Trust line: `0.85s`
- The keyframe blurs from `blur(4px) → blur(0)` and slides up `20px → 0` over `0.7s` with ease `cubic-bezier(0.16, 1, 0.3, 1)`.

**Block 6 · Responsive notes**
- Content max-width:
  - mobile: `max-w-[92%]`
  - `sm:` `max-w-lg`
  - `lg:` `max-w-4xl`
- Padding scales: `px-6 → md:px-10`, `pb-10` static, `pt-32` static (clears the fixed navbar).
- Type sizes are fully fluid via `clamp()` — never use fixed `text-Nxl` for the hero heading / sub / description.
- Buttons grow: `text-base → md:text-lg`, `px-8 py-4 → md:px-10 md:py-5`.
- Trust line: `text-sm → md:text-base`.

**Block 7 · Copy** (verbatim, in order)
```
OCODE LABS
We build software correctly.
Production-grade SaaS platforms shipped in weeks. AI-powered features integrated with clean, scalable architecture. Custom dashboards and APIs built for your entire business. All of it done right, not just fast.
Book a Call
Our Work
Trusted software partner. Columbus, OH. 40+ products shipped.
```

**Full file — `src/components/HeroSection.tsx`**:

```tsx
import ShapeGrid from "@/components/ShapeGrid";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end bg-hero-bg overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0">
        <ShapeGrid
          speed={0.1}
          squareSize={80}
          direction="diagonal"
          borderColor="rgba(255, 255, 255, 0.08)"
          hoverFillColor="#2bd64a"
          shape="square"
          hoverTrailAmount={6}
        />
      </div>

      {/* Dark + directional overlays for legibility */}
      <div className="absolute inset-0 bg-black/30 z-[1] pointer-events-none" />
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-t from-hero-bg via-hero-bg/30 to-transparent" />
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-r from-hero-bg/70 via-transparent to-transparent" />

      {/* Content (bottom-left) */}
      <div className="relative z-10 pointer-events-none w-full max-w-[92%] sm:max-w-lg lg:max-w-4xl px-6 md:px-10 pb-10 md:pb-10 pt-32">
        <h1
          className="opacity-0 animate-fade-up text-[clamp(3.5rem,10vw,8rem)] font-bold leading-[1.02] tracking-[-0.05em] text-foreground mb-3 md:mb-5 uppercase"
          style={{ animationDelay: "0.2s" }}
        >
          OCODE<span className="text-primary"> LABS</span>
        </h1>

        <p
          className="opacity-0 animate-fade-up text-foreground/80 text-[clamp(1.375rem,3vw,2.5rem)] font-light mb-4 md:mb-7"
          style={{ animationDelay: "0.4s" }}
        >
          We build software correctly.
        </p>

        <p
          className="opacity-0 animate-fade-up text-muted-foreground text-[clamp(1.0625rem,1.8vw,1.5rem)] font-light mb-5 md:mb-9"
          style={{ animationDelay: "0.55s" }}
        >
          Production-grade SaaS platforms shipped in weeks. AI-powered features
          integrated with clean, scalable architecture. Custom dashboards and APIs
          built for your entire business. All of it done right, not just fast.
        </p>

        <div
          className="opacity-0 animate-fade-up flex flex-wrap gap-3 font-bold"
          style={{ animationDelay: "0.7s" }}
        >
          <button className="pointer-events-auto bg-primary text-primary-foreground px-8 py-4 md:px-10 md:py-5 text-base md:text-lg rounded-sm cursor-pointer hover:brightness-110 transition-all active:scale-[0.97]">
            Book a Call
          </button>
          <button className="pointer-events-auto bg-white text-background px-8 py-4 md:px-10 md:py-5 text-base md:text-lg rounded-sm cursor-pointer hover:brightness-90 transition-all active:scale-[0.97]">
            Our Work
          </button>
        </div>

        <p
          className="opacity-0 animate-fade-up text-muted-foreground/60 text-sm md:text-base font-light mt-5 md:mt-7"
          style={{ animationDelay: "0.85s" }}
        >
          Trusted software partner. Columbus, OH. 40+ products shipped.
        </p>
      </div>
    </section>
  );
}
```

---

## LAYER 8 — ANIMATION STANDARDS (project-wide)

```ts
// Standard easing — use everywhere unless noted
const ease = "cubic-bezier(0.16, 1, 0.3, 1)";

// Standard durations
const fadeUp    = "0.7s";   // entry of hero elements
const fadeIn    = "0.5s";   // generic fade

// Standard stagger schedule (Hero, in order)
const delays = {
  heading:     "0.2s",
  subheading:  "0.4s",
  description: "0.55s",
  ctas:        "0.7s",
  trustLine:   "0.85s",
};
```

**Initial state for every animated element:** `opacity-0` (Tailwind), then `animate-fade-up` applies the keyframe with the inline delay. No `whileInView`, no IntersectionObserver — the hero is above the fold, animations run on mount.

---

## LAYER 9 — RESPONSIVE STANDARDS

- **Mobile-first.** All base classes target mobile; `sm: md: lg:` scale up.
- **Hero heading:** `clamp(3.5rem, 10vw, 8rem)` — never fixed.
- **Hero subheading:** `clamp(1.375rem, 3vw, 2.5rem)`.
- **Hero description:** `clamp(1.0625rem, 1.8vw, 1.5rem)`.
- **Container max-width:** `max-w-[92%] → sm:max-w-lg → lg:max-w-4xl` for the hero copy block.
- **Section padding (hero):** `px-6 md:px-10`, `pb-10 md:pb-10`, `pt-32`.
- **Navbar padding:** `px-8 lg:px-16 py-5`.
- **Mobile nav:** none in v1. Below `md`, nav links and CTA hide via `hidden md:flex` / `hidden md:inline-flex`.

---

## LAYER 10 — ICON SET

**v1 ships with zero icons.** No `lucide-react`, no `phosphor-react`, no inline SVG glyphs in the hero or navbar.

If a future iteration needs icons, restrict to the OCODE icon kit (TBD). Do not import arbitrary icons.

---

## LAYER 11 — REPRODUCE-EXACTLY CLAUSE

Reproduce exactly. Do not:
- Substitute the **Sora** font for "a similar geometric sans".
- Round the brand green — it is `hsl(119 99% 46%)`, not `#00ff00`, not `#22c55e`.
- Round any CSS variable — every HSL triplet in Layer 3 is authoritative.
- Shorten the description — paste it word-for-word.
- Reorder the CTA buttons — primary `Book a Call` always before secondary `Our Work`.
- Replace native `<button>` with shadcn `<Button>` in the hero (the native element is intentional for the pointer-events handoff).
- Change the InteractiveShapeGrid props beyond the values in Layer 5.
- Add a hamburger menu in v1 — mobile simply hides the nav.
- Drop the `pointer-events-none / pointer-events-auto` chain — without it the grid hover is dead under the copy.
- Skip the stagger delays — `0.2 / 0.4 / 0.55 / 0.7 / 0.85` is the timing.

If a constraint conflicts with framework limitations, **clamp to the nearest valid value and leave an inline comment noting the substitution** — never silently change.

---

## APPENDIX A — PROJECT FILE TREE (target structure)

```
OCODE/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
├── public/
│   └── favicon.svg
└── src/
    ├── App.tsx
    ├── index.css
    ├── main.tsx
    ├── vite-env.d.ts
    ├── lib/
    │   └── utils.ts
    ├── pages/
    │   └── Index.tsx
    └── components/
        ├── HeroSection.tsx
        ├── Navbar.tsx
        ├── ShapeGrid.css
        ├── ShapeGrid.jsx
        └── ui/
            └── button.tsx
```

---

## APPENDIX B — `package.json` (exact)

```json
{
  "name": "ocode",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@radix-ui/react-slot": "^1.1.1",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "tailwind-merge": "^2.6.0"
  },
  "devDependencies": {
    "@types/node": "^25.9.1",
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.5.1",
    "tailwindcss": "^3.4.17",
    "tailwindcss-animate": "^1.0.7",
    "typescript": "^5.7.3",
    "vite": "^5.4.11"
  }
}
```

---

## APPENDIX C — `vite.config.ts`

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

---

## APPENDIX D — `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "allowJs": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "types": ["node"],
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["src", "vite.config.ts"]
}
```

---

## APPENDIX E — `tailwind.config.js` (exact)

```js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
      colors: {
        border:      "hsl(var(--border))",
        input:       "hsl(var(--input))",
        ring:        "hsl(var(--ring))",
        background:  "hsl(var(--background))",
        foreground:  "hsl(var(--foreground))",
        primary:     { DEFAULT: "hsl(var(--primary))",   foreground: "hsl(var(--primary-foreground))" },
        secondary:   { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        muted:       { DEFAULT: "hsl(var(--muted))",     foreground: "hsl(var(--muted-foreground))" },
        accent:      { DEFAULT: "hsl(var(--accent))",    foreground: "hsl(var(--accent-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))" },
        "nav-button":"hsl(var(--nav-button))",
        "hero-bg":   "hsl(var(--hero-bg))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(20px)", filter: "blur(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)",    filter: "blur(0)"   },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
```

---

## APPENDIX F — `postcss.config.js`

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

---

## APPENDIX G — `index.html` (exact)

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>OCODE — We build software correctly.</title>
    <meta
      name="description"
      content="OCODE builds production-grade SaaS platforms — shipped fast, architected right."
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body class="font-sora antialiased">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

## APPENDIX H — `src/main.tsx` & `src/index.css`

**`src/main.tsx`:**

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

**`src/index.css`** (full file, already shown in Layer 3 — repeated here for completeness):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background:          0 0% 10%;
    --foreground:          0 0% 96%;

    --primary:             119 99% 46%;
    --primary-foreground:  0 0% 4%;

    --secondary:           0 0% 18%;
    --secondary-foreground:0 0% 96%;

    --muted:               0 0% 16%;
    --muted-foreground:    0 0% 60%;

    --accent:              119 99% 46%;
    --accent-foreground:   0 0% 4%;

    --destructive:         0 84% 60%;

    --border:              0 0% 20%;
    --input:               0 0% 20%;
    --ring:                119 99% 46%;

    --radius:              0.5rem;

    --nav-button:          0 0% 18%;
    --hero-bg:             0 0% 8%;
  }

  * { @apply border-border; }

  body { @apply bg-hero-bg text-foreground font-sora antialiased; }
}
```

---

## APPENDIX I — `public/favicon.svg`

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="7" fill="#141414"/>
  <path d="M16 7a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" fill="#04e605"/>
</svg>
```

---

## APPENDIX J — RUN COMMANDS

```bash
npm install
npm run dev      # local dev server on http://localhost:5173 (auto-bumps if taken)
npm run build    # type-check + production bundle to /dist
npm run preview  # serve the production build
```
