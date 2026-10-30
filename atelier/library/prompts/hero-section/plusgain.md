# Plusgain — Standard Prompt (v1)

> Reproduce the **Plusgain** hero page exactly. Anything inside `{{ DOUBLE_BRACES }}` is a customization slot.

---

## LAYER 0 — META

```yaml
asset_id: plusgain-hero-color-bends-01
category: hero
aesthetic: liquid-glass + live-shader
industry: ai / design-tools
tone: cinematic, premium, dark, vibrant
preview_video: —
license: standard
version: 1.0
last_updated: 2026-06-01
```

---

## LAYER 1 — OPENING DECLARATION

Build a **single-page hero section** for **Plusgain** — **the AI design plugin that connects with every tool your team already uses**.

Use the following **pinned** tech stack (do not substitute):

- **React 18 + TypeScript + Vite**
- **Tailwind CSS 3** (default config + extensions in Layer 3)
- **lucide-react** for icons (restricted to the kit in Layer 10)
- **three** (WebGL shader background — Layer 5)
- **class-variance-authority + clsx + tailwind-merge** for the button variant system
- **@fontsource/geist-sans** for body font + **Fontshare CDN** for the display font

The aesthetic is **dark deep-violet base with a live WebGL "color-bend" background that drifts and reacts to the cursor, liquid-glass UI accents, an oversized General Sans headline with a brand-gradient "AI" word, and an infinite-scrolling integration logo marquee at the bottom.** `hsl(260 87% 3%)` is the global background. Default text color is `hsl(40 6% 95%)`. **Do not use** any color outside the declared palette (no neon green, no warm reds, no teal). Brand accent gradient is strictly `#6366f1 → #a855f7 → #fcd34d` (indigo → violet → amber).

---

## LAYER 2 — FONTS

Two families. Body via `@fontsource` (bundled), display via Fontshare CDN.

**`index.html` — add in `<head>` (with preconnect):**

```html
<link rel="preconnect" href="https://api.fontshare.com" crossorigin />
<link
  href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap"
  rel="stylesheet"
/>
```

**`src/main.tsx` — import Geist Sans weights:**

```ts
import "@fontsource/geist-sans/400.css";
import "@fontsource/geist-sans/500.css";
import "@fontsource/geist-sans/600.css";
import "@fontsource/geist-sans/700.css";
```

**Tailwind config — `fontFamily` extension:**

```js
fontFamily: {
  sans:    ['"Geist Sans"', 'system-ui', 'sans-serif'],
  display: ['"General Sans"', '"Geist Sans"', 'sans-serif'],
}
```

**`body` baseline (in `@layer base`):**

```css
body {
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
  font-family: "Geist Sans", system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
```

The display family is applied via `font-display` only on the hero `<h1>`. Body uses Geist Sans everywhere else.

---

## LAYER 3 — COLOR SYSTEM

Defined as CSS custom properties on `:root` in `src/index.css`. Use HSL channels (no `hsl(...)` wrapping) so Tailwind's `<alpha-value>` modifier works (`text-foreground/90`, `via-foreground/20`, etc.).

```css
:root {
  --background: 260 87% 3%;   /* deep blue-violet base */
  --foreground: 40 6% 95%;    /* off-white text */
  --hero-sub:   40 6% 82%;    /* hero subtitle text, slightly dimmer */
}

* {
  border-color: hsl(var(--foreground) / 0.12);
}
```

**Tailwind `colors` extension (in `tailwind.config.ts`):**

```ts
colors: {
  background:  "hsl(var(--background) / <alpha-value>)",
  foreground:  "hsl(var(--foreground) / <alpha-value>)",
  "hero-sub":  "hsl(var(--hero-sub) / <alpha-value>)",
}
```

**Brand accent (used only on the gradient "AI" word and the logo glyph):**
- Stops in order, applied with `linear-gradient(to left, …)`:
  - `#6366f1` (indigo-500)
  - `#a855f7` (purple-500)
  - `#fcd34d` (amber-300)

No other color is allowed. The shader background uses these same three stops as its color palette.

---

## LAYER 4 — CUSTOM CSS UTILITIES (invariant)

Paste verbatim into `src/index.css`. These give Plusgain its signature finish.

### 4a · Liquid-glass (button + tiny logo tiles)

```css
@layer components {
  .liquid-glass {
    background: rgba(255, 255, 255, 0.01);
    background-blend-mode: luminosity;
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
    border: none;
    box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
  }

  .liquid-glass::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1.4px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.45) 0%,
      rgba(255, 255, 255, 0.15) 20%,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0) 60%,
      rgba(255, 255, 255, 0.15) 80%,
      rgba(255, 255, 255, 0.45) 100%
    );
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
}
```

### 4b · Marquee keyframes (in Tailwind config, not CSS)

```ts
keyframes: {
  marquee: {
    "0%":   { transform: "translateX(0%)" },
    "100%": { transform: "translateX(-50%)" },
  },
},
animation: {
  marquee: "marquee 20s linear infinite",
},
```

Use as `animate-marquee` on a `flex w-max gap-16` track that contains the logo set duplicated once for seamless looping.

---

## LAYER 5 — BACKGROUND ASSET (live WebGL "ColorBends" shader)

The full-screen background is a **GLSL fragment shader rendered with three.js**, mounted as an absolutely-positioned `z-0` layer behind the content. It drifts continuously over time and bends toward the cursor.

### 5a · Files

- `src/components/ColorBends.jsx` — full source (below, paste verbatim)
- `src/components/ColorBends.css` — three lines, container styling
- `src/components/ColorBends.d.ts` — TypeScript prop declaration (so a `.tsx` consumer gets correct types without altering the `.jsx`)

### 5b · `ColorBends.css`

```css
.color-bends-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
```

### 5c · `ColorBends.jsx` (paste verbatim)

```jsx
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './ColorBends.css';

const MAX_COLORS = 8;

const frag = `
#define MAX_COLORS ${MAX_COLORS}
uniform vec2 uCanvas;
uniform float uTime;
uniform float uSpeed;
uniform vec2 uRot;
uniform int uColorCount;
uniform vec3 uColors[MAX_COLORS];
uniform int uTransparent;
uniform float uScale;
uniform float uFrequency;
uniform float uWarpStrength;
uniform vec2 uPointer; // in NDC [-1,1]
uniform float uMouseInfluence;
uniform float uParallax;
uniform float uNoise;
uniform int uIterations;
uniform float uIntensity;
uniform float uBandWidth;
varying vec2 vUv;

void main() {
  float t = uTime * uSpeed;
  vec2 p = vUv * 2.0 - 1.0;
  p += uPointer * uParallax * 0.1;
  vec2 rp = vec2(p.x * uRot.x - p.y * uRot.y, p.x * uRot.y + p.y * uRot.x);
  vec2 q = vec2(rp.x * (uCanvas.x / uCanvas.y), rp.y);
  q /= max(uScale, 0.0001);
  q /= 0.5 + 0.2 * dot(q, q);
  q += 0.2 * cos(t) - 7.56;
  vec2 toward = (uPointer - rp);
  q += toward * uMouseInfluence * 0.2;

    for (int j = 0; j < 5; j++) {
      if (j >= uIterations - 1) break;
      vec2 rr = sin(1.5 * (q.yx * uFrequency) + 2.0 * cos(q * uFrequency));
      q += (rr - q) * 0.15;
    }

    vec3 col = vec3(0.0);
    float a = 1.0;

    if (uColorCount > 0) {
      vec2 s = q;
      vec3 sumCol = vec3(0.0);
      float cover = 0.0;
      for (int i = 0; i < MAX_COLORS; ++i) {
            if (i >= uColorCount) break;
            s -= 0.01;
            vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
            float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(i)) / 4.0);
            float kBelow = clamp(uWarpStrength, 0.0, 1.0);
            float kMix = pow(kBelow, 0.3);
            float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
            vec2 disp = (r - s) * kBelow;
            vec2 warped = s + disp * gain;
            float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(i)) / 4.0);
            float m = mix(m0, m1, kMix);
            float w = 1.0 - exp(-uBandWidth / exp(uBandWidth * m));
            sumCol += uColors[i] * w;
            cover = max(cover, w);
      }
      col = clamp(sumCol, 0.0, 1.0);
      a = uTransparent > 0 ? cover : 1.0;
    } else {
        vec2 s = q;
        for (int k = 0; k < 3; ++k) {
            s -= 0.01;
            vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
            float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(k)) / 4.0);
            float kBelow = clamp(uWarpStrength, 0.0, 1.0);
            float kMix = pow(kBelow, 0.3);
            float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
            vec2 disp = (r - s) * kBelow;
            vec2 warped = s + disp * gain;
            float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(k)) / 4.0);
            float m = mix(m0, m1, kMix);
            col[k] = 1.0 - exp(-uBandWidth / exp(uBandWidth * m));
        }
        a = uTransparent > 0 ? max(max(col.r, col.g), col.b) : 1.0;
    }

    col *= uIntensity;

    if (uNoise > 0.0001) {
      float n = fract(sin(dot(gl_FragCoord.xy + vec2(uTime), vec2(12.9898, 78.233))) * 43758.5453123);
      col += (n - 0.5) * uNoise;
      col = clamp(col, 0.0, 1.0);
    }

    vec3 rgb = (uTransparent > 0) ? col * a : col;
    gl_FragColor = vec4(rgb, a);
}
`;

const vert = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

export default function ColorBends({
  className,
  style,
  rotation = 90,
  speed = 0.2,
  colors = [],
  transparent = true,
  autoRotate = 0,
  scale = 1,
  frequency = 1,
  warpStrength = 1,
  mouseInfluence = 1,
  parallax = 0.5,
  noise = 0.15,
  iterations = 1,
  intensity = 1.5,
  bandWidth = 6
}) {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const rafRef = useRef(null);
  const materialRef = useRef(null);
  const resizeObserverRef = useRef(null);
  const rotationRef = useRef(rotation);
  const autoRotateRef = useRef(autoRotate);
  const pointerTargetRef = useRef(new THREE.Vector2(0, 0));
  const pointerCurrentRef = useRef(new THREE.Vector2(0, 0));
  const pointerSmoothRef = useRef(8);

  useEffect(() => {
    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const geometry = new THREE.PlaneGeometry(2, 2);
    const uColorsArray = Array.from({ length: MAX_COLORS }, () => new THREE.Vector3(0, 0, 0));
    const material = new THREE.ShaderMaterial({
      vertexShader: vert,
      fragmentShader: frag,
      uniforms: {
        uCanvas: { value: new THREE.Vector2(1, 1) },
        uTime: { value: 0 },
        uSpeed: { value: speed },
        uRot: { value: new THREE.Vector2(1, 0) },
        uColorCount: { value: 0 },
        uColors: { value: uColorsArray },
        uTransparent: { value: transparent ? 1 : 0 },
        uScale: { value: scale },
        uFrequency: { value: frequency },
        uWarpStrength: { value: warpStrength },
        uPointer: { value: new THREE.Vector2(0, 0) },
        uMouseInfluence: { value: mouseInfluence },
        uParallax: { value: parallax },
        uNoise: { value: noise },
        uIterations: { value: iterations },
        uIntensity: { value: intensity },
        uBandWidth: { value: bandWidth }
      },
      premultipliedAlpha: true,
      transparent: true
    });
    materialRef.current = material;

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      powerPreference: 'high-performance',
      alpha: true
    });
    rendererRef.current = renderer;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, transparent ? 0 : 1);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    container.appendChild(renderer.domElement);

    const clock = new THREE.Clock();

    const handleResize = () => {
      const w = container.clientWidth || 1;
      const h = container.clientHeight || 1;
      renderer.setSize(w, h, false);
      material.uniforms.uCanvas.value.set(w, h);
    };

    handleResize();

    if ('ResizeObserver' in window) {
      const ro = new ResizeObserver(handleResize);
      ro.observe(container);
      resizeObserverRef.current = ro;
    } else {
      window.addEventListener('resize', handleResize);
    }

    const loop = () => {
      const dt = clock.getDelta();
      const elapsed = clock.elapsedTime;
      material.uniforms.uTime.value = elapsed;

      const deg = (rotationRef.current % 360) + autoRotateRef.current * elapsed;
      const rad = (deg * Math.PI) / 180;
      const c = Math.cos(rad);
      const s = Math.sin(rad);
      material.uniforms.uRot.value.set(c, s);

      const cur = pointerCurrentRef.current;
      const tgt = pointerTargetRef.current;
      const amt = Math.min(1, dt * pointerSmoothRef.current);
      cur.lerp(tgt, amt);
      material.uniforms.uPointer.value.copy(cur);
      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      if (resizeObserverRef.current) resizeObserverRef.current.disconnect();
      else window.removeEventListener('resize', handleResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      if (renderer.domElement && renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [bandWidth, frequency, intensity, iterations, mouseInfluence, noise, parallax, scale, speed, transparent, warpStrength]);

  useEffect(() => {
    const material = materialRef.current;
    const renderer = rendererRef.current;
    if (!material) return;

    rotationRef.current = rotation;
    autoRotateRef.current = autoRotate;
    material.uniforms.uSpeed.value = speed;
    material.uniforms.uScale.value = scale;
    material.uniforms.uFrequency.value = frequency;
    material.uniforms.uWarpStrength.value = warpStrength;
    material.uniforms.uMouseInfluence.value = mouseInfluence;
    material.uniforms.uParallax.value = parallax;
    material.uniforms.uNoise.value = noise;
    material.uniforms.uIterations.value = iterations;
    material.uniforms.uIntensity.value = intensity;
    material.uniforms.uBandWidth.value = bandWidth;

    const toVec3 = hex => {
      const h = hex.replace('#', '').trim();
      const v =
        h.length === 3
          ? [parseInt(h[0] + h[0], 16), parseInt(h[1] + h[1], 16), parseInt(h[2] + h[2], 16)]
          : [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
      return new THREE.Vector3(v[0] / 255, v[1] / 255, v[2] / 255);
    };

    const arr = (colors || []).filter(Boolean).slice(0, MAX_COLORS).map(toVec3);
    for (let i = 0; i < MAX_COLORS; i++) {
      const vec = material.uniforms.uColors.value[i];
      if (i < arr.length) vec.copy(arr[i]);
      else vec.set(0, 0, 0);
    }
    material.uniforms.uColorCount.value = arr.length;

    material.uniforms.uTransparent.value = transparent ? 1 : 0;
    if (renderer) renderer.setClearColor(0x000000, transparent ? 0 : 1);
  }, [
    rotation,
    autoRotate,
    speed,
    scale,
    frequency,
    warpStrength,
    mouseInfluence,
    parallax,
    noise,
    iterations,
    intensity,
    bandWidth,
    colors,
    transparent
  ]);

  useEffect(() => {
    const material = materialRef.current;
    const container = containerRef.current;
    if (!material || !container) return;

    const handlePointerMove = e => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / (rect.width || 1)) * 2 - 1;
      const y = -(((e.clientY - rect.top) / (rect.height || 1)) * 2 - 1);
      pointerTargetRef.current.set(x, y);
    };

    // Listen on window so the effect still reacts when content overlays the canvas.
    window.addEventListener('pointermove', handlePointerMove);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return <div ref={containerRef} className={`color-bends-container ${className}`} style={style} />;
}
```

### 5d · `ColorBends.d.ts` (TypeScript declaration, sibling to the `.jsx`)

```ts
import * as React from "react";

export interface ColorBendsProps {
  className?: string;
  style?: React.CSSProperties;
  rotation?: number;
  autoRotate?: number;
  speed?: number;
  colors?: string[];
  transparent?: boolean;
  scale?: number;
  frequency?: number;
  warpStrength?: number;
  mouseInfluence?: number;
  parallax?: number;
  noise?: number;
  iterations?: number;
  intensity?: number;
  bandWidth?: number;
}

declare const ColorBends: React.FC<ColorBendsProps>;
export default ColorBends;
```

### 5e · ColorBends invocation in the hero (exact props)

```tsx
<ColorBends
  className=""
  colors={["#6366f1", "#a855f7", "#fcd34d"]}
  rotation={90}
  speed={0.2}
  scale={1.1}
  frequency={1}
  warpStrength={1}
  mouseInfluence={1}
  parallax={0.5}
  noise={0.12}
  iterations={2}
  intensity={1.2}
  bandWidth={6}
  transparent
/>
```

### 5f · Pointer-event note

The shader listens on `window` (not its own container) so it reacts to the cursor across the entire viewport, even where the content layer overlays the canvas. Buttons and links remain fully clickable — there is **no** `pointer-events-none` juggling required on the content layer.

---

## LAYER 6 — SHARED COMPONENTS

### 6a · `cn` utility — `src/lib/utils.ts`

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### 6b · Button with `heroSecondary` variant — `src/components/ui/button.tsx`

```tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/25 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "rounded-md bg-foreground px-4 py-2 text-background hover:bg-foreground/90",
        heroSecondary:
          "liquid-glass rounded-full text-foreground hover:bg-white/[0.06] active:scale-[0.98]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant }), className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
```

### 6c · Logo SVG — `src/assets/logo.svg`

```xml
<svg width="178" height="32" viewBox="0 0 178 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="pgGrad" x1="32" y1="0" x2="0" y2="32" gradientUnits="userSpaceOnUse">
      <stop stop-color="#6366f1" />
      <stop offset="0.5" stop-color="#a855f7" />
      <stop offset="1" stop-color="#fcd34d" />
    </linearGradient>
  </defs>
  <rect width="32" height="32" rx="9" fill="url(#pgGrad)" />
  <path d="M16 8.5V23.5M8.5 16H23.5" stroke="#0a0118" stroke-width="3.2" stroke-linecap="round" />
  <text x="42" y="22" font-family="Helvetica, Arial, sans-serif" font-size="20" font-weight="600" letter-spacing="-0.6" fill="#F5F3F0">Plusgain</text>
</svg>
```

### 6d · Favicon — `public/favicon.svg`

```xml
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fav" x1="32" y1="0" x2="0" y2="32" gradientUnits="userSpaceOnUse">
      <stop stop-color="#6366f1" />
      <stop offset="0.5" stop-color="#a855f7" />
      <stop offset="1" stop-color="#fcd34d" />
    </linearGradient>
  </defs>
  <rect width="32" height="32" rx="9" fill="url(#fav)" />
  <path d="M16 8.5V23.5M8.5 16H23.5" stroke="#0a0118" stroke-width="3.2" stroke-linecap="round" />
</svg>
```

### 6e · Navbar — `src/components/Navbar.tsx`

```tsx
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";

const navItems: { label: string; chevron?: boolean }[] = [
  { label: "Features", chevron: true },
  { label: "Integrations" },
  { label: "Pricing" },
  { label: "Resources", chevron: true },
];

export default function Navbar() {
  return (
    <>
      <nav className="flex w-full items-center justify-between px-8 py-5">
        <a href="#" className="flex items-center" aria-label="Plusgain home">
          <img src={logo} alt="Plusgain" className="h-8 w-auto" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              className="flex items-center gap-1 text-sm text-foreground/90 transition-colors hover:text-foreground"
            >
              {item.label}
              {item.chevron && <ChevronDown className="h-4 w-4 opacity-70" />}
            </button>
          ))}
        </div>

        <Button variant="heroSecondary" className="rounded-full px-4 py-2 text-sm">
          Sign Up
        </Button>
      </nav>

      <div className="mt-[3px] h-px w-full bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
    </>
  );
}
```

### 6f · Logo Marquee — `src/components/LogoMarquee.tsx`

```tsx
const logos = ["Vortex", "Nimbus", "Prysma", "Cirrus", "Kynder", "Halcyn"];

function LogoItem({ name }: { name: string }) {
  return (
    <div className="flex shrink-0 items-center gap-3">
      <div className="liquid-glass flex h-6 w-6 items-center justify-center rounded-lg text-xs font-semibold text-foreground">
        {name.charAt(0)}
      </div>
      <span className="whitespace-nowrap text-base font-semibold text-foreground">
        {name}
      </span>
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <div className="mx-auto w-full max-w-5xl px-8">
      <div className="flex items-center gap-12">
        <p className="shrink-0 text-sm leading-snug text-foreground/50">
          Connects with the tools
          <br />
          your team already uses
        </p>

        <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
          <div className="flex w-max animate-marquee gap-16">
            {[...logos, ...logos].map((name, i) => (
              <LogoItem key={`${name}-${i}`} name={name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

## LAYER 7 — SECTIONS

There is **one section**: the Hero. Build it exactly as specified.

### SECTION 1 — Hero (full viewport)

**Block 1 · Container**
- Outer wrapper: `<div className="relative min-h-screen overflow-hidden bg-background">`
- Inner section: `<section className="relative flex min-h-screen flex-col overflow-visible">` (note `overflow-visible` so the centered blur shape is not clipped by the section box)
- Page padding: `px-8` on nav and marquee; hero content uses `px-8` on its inner column

**Block 2 · Background**
- Layer 0 — `ColorBends` shader in a wrapper: `<div className="absolute inset-0 z-0"> <ColorBends … /> </div>` (props in Layer 5e)
- Layer ~ — Centered blur shape, positioned absolute inside the section: `<div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[527px] w-[984px] -translate-x-1/2 -translate-y-1/2 bg-gray-950 opacity-90 blur-[82px]" />` — this darkens the center for headline contrast over the colorful shader
- Layer top — All UI in `<div className="relative z-10 flex min-h-screen flex-col">`

**Block 3 · Layout primitive**
- Section is `flex flex-col` filling `min-h-screen`
- Children: Navbar → divider (`mt-[3px]` 1px gradient line) → Hero content (`flex-1 flex items-center justify-center`) → Marquee (`pb-10`)

**Block 4 · Elements**

> **Navbar**
> - See Layer 6e — `py-5 px-8 flex items-center justify-between`
> - Left: logo SVG `h-8 w-auto`
> - Center: 4 nav buttons (hidden on `<md`, visible on `md:`): `Features` ↓, `Integrations`, `Pricing`, `Resources` ↓
> - Right: Sign-Up button — `<Button variant="heroSecondary" className="rounded-full px-4 py-2 text-sm">Sign Up</Button>`
> - Below: gradient hairline divider `mt-[3px] h-px w-full bg-gradient-to-r from-transparent via-foreground/20 to-transparent`

> **Hero Heading (`<h1>`)**
> - Classes: `font-display text-[220px] font-normal leading-[1.02] tracking-[-0.024em]`
> - First span: `<span className="text-foreground">Design </span>` (note trailing space)
> - Second span: `<span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(to left, #6366f1, #a855f7, #fcd34d)" }}>AI</span>`
> - Text content: **"Design AI"** (Design plain, AI gradient)
> - Headline overflowing the viewport on narrow screens is intentional — do NOT add responsive scaling

> **Subtitle (`<p>`)**
> - Classes: `mt-8 max-w-md text-lg leading-8 text-hero-sub opacity-80`
> - Text (exact, with literal `<br>`):
>   ```
>   The most powerful AI design plugin,<br />connected to every tool you use
>   ```

> **CTA Button**
> - `<Button variant="heroSecondary" className="mt-[25px] px-[29px] py-[24px] text-base">Install Plusgain</Button>`
> - Text: **"Install Plusgain"**

> **Logo Marquee** (bottom, see Layer 6f)
> - Left static text: "Connects with the tools / your team already uses" (literal `<br />`), `text-sm leading-snug text-foreground/50`
> - Right marquee track: `flex w-max animate-marquee gap-16`, content duplicated: `[...logos, ...logos]`
> - Edge mask: `[mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]`
> - Container: `max-w-5xl mx-auto px-8`, inner `flex items-center gap-12`
> - Each LogoItem: `liquid-glass h-6 w-6 rounded-lg` glass tile with first letter + `text-base font-semibold` name

**Block 5 · Animation**
- No motion library on this build. Animation is delivered exclusively by:
  - The WebGL shader (continuous `uTime` flow, cursor-driven warp + parallax)
  - The marquee CSS keyframe (20s linear infinite)
- All entry animation is omitted by design — the shader IS the animation.

**Block 6 · Responsive notes**
- **Mobile (`<md`)**: nav center group is hidden via `hidden md:flex`. Logo + Sign Up remain. Headline at 220px will horizontal-overflow the viewport — this is intentional; the wrapper `overflow-hidden` clips it cleanly.
- **md+**: full layout as designed.
- The marquee + blur shape adapt fluidly via flex/percent positioning.

**Block 7 · Copy** (verbatim, in DOM order)

```
Plusgain                                 ← logo wordmark (SVG)
Features  ↓                              ← nav item 1
Integrations                             ← nav item 2
Pricing                                  ← nav item 3
Resources  ↓                             ← nav item 4
Sign Up                                  ← top-right button
Design AI                                ← hero headline (AI = gradient)
The most powerful AI design plugin,
connected to every tool you use          ← subtitle
Install Plusgain                         ← CTA
Connects with the tools
your team already uses                   ← marquee left text
Vortex · Nimbus · Prysma · Cirrus · Kynder · Halcyn   ← marquee logo names
```

---

## LAYER 8 — ANIMATION STANDARDS

```ts
// Marquee
const marqueeDuration = "20s";
const marqueeEase     = "linear";
const marqueeLoop     = "infinite";

// Shader (default base, not overridden by component consumer)
const shaderSpeed       = 0.2;   // uTime multiplier
const shaderPointerLerp = 8;     // smoothness factor on pointer follow
```

There are no `framer-motion` / `motion/react` entries on this page. Anything that moves moves because of either CSS keyframes (`@keyframes marquee`) or `requestAnimationFrame` inside `ColorBends`. Keep it that way.

---

## LAYER 9 — RESPONSIVE STANDARDS

- **Mobile-first.** Base classes are mobile; `md:` and `lg:` scale up only where listed.
- **Headline size:** **fixed `text-[220px]`** — do not use `clamp()`. The oversized headline is part of the brand statement; mobile overflow is intentional and clipped by the wrapper.
- **Section padding:** `px-8` on nav, marquee, and hero column. No `py-` because the section uses `min-h-screen flex flex-col` and the centered hero takes the flex-1 slack.
- **Container max-width:** `max-w-5xl` on the marquee row; hero content centers via flex + `text-center` and is not width-capped.
- **Nav collapse:** the center nav group is hidden under `md`. (No hamburger menu in v1 — fewer items, fewer dependencies.)

---

## LAYER 10 — ICON SET

**Only one icon is used** on this page, imported from `lucide-react`:

```ts
import { ChevronDown } from "lucide-react";
```

- `ChevronDown` — appears on the `Features` and `Resources` nav buttons, `h-4 w-4 opacity-70`.

Do not import any other icon. If a feature later needs an icon, add it explicitly to this list before importing.

---

## LAYER 11 — REPRODUCE-EXACTLY CLAUSE

Reproduce exactly. Do not:

- Swap the body font for "something close to Geist" — it must be **Geist Sans** via `@fontsource/geist-sans` weights 400/500/600/700.
- Swap the display font for "something close to General Sans" — it must be **General Sans** loaded from the Fontshare CDN link in Layer 2.
- Round the background HSL to a hex approximation. It is **`260 87% 3%`** in HSL channel form.
- Change the brand gradient stops. The three stops are **`#6366f1`, `#a855f7`, `#fcd34d`** in that order, applied **`to left`**.
- Resize the headline. It is **`text-[220px]`**, fixed.
- Replace the WebGL shader with a CSS-only gradient, a video, or a static image. The background **must** be `ColorBends` rendered via three.js, with the exact uniform values in Layer 5e.
- Add motion/react / Framer Motion entry animations. The shader and the marquee are the only motion sources.
- Substitute the marquee names (Vortex / Nimbus / Prysma / Cirrus / Kynder / Halcyn).
- Use any icon outside `ChevronDown`.

If a constraint conflicts with framework limitations, clamp to the nearest valid value and leave a short code comment noting the substitution — do not silently change.

---

## APPENDIX A — File structure

```
Plusgain/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── public/
│   └── favicon.svg
└── src/
    ├── App.tsx
    ├── index.css
    ├── main.tsx
    ├── vite-env.d.ts
    ├── assets/
    │   └── logo.svg
    ├── components/
    │   ├── ColorBends.css
    │   ├── ColorBends.d.ts
    │   ├── ColorBends.jsx
    │   ├── LogoMarquee.tsx
    │   ├── Navbar.tsx
    │   └── ui/
    │       └── button.tsx
    ├── lib/
    │   └── utils.ts
    └── pages/
        └── Index.tsx
```

---

## APPENDIX B — `package.json` (exact deps + scripts)

```json
{
  "name": "plusgain",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@fontsource/geist-sans": "^5.1.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.456.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "tailwind-merge": "^2.5.5",
    "three": "^0.184.0"
  },
  "devDependencies": {
    "@types/node": "^22.10.0",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.6.3",
    "vite": "^5.4.11"
  }
}
```

---

## APPENDIX C — `vite.config.ts` (with `@/` → `src/` alias)

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
```

---

## APPENDIX D — `tsconfig.json` (needs `allowJs` for the `.jsx` shader)

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowJs": true,
    "checkJs": false,
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

**`tsconfig.node.json`:**

```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "strict": true
  },
  "include": ["vite.config.ts"]
}
```

---

## APPENDIX E — `tailwind.config.ts`

```ts
import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        "hero-sub": "hsl(var(--hero-sub) / <alpha-value>)",
      },
      fontFamily: {
        sans: ['"Geist Sans"', "system-ui", "sans-serif"],
        display: ['"General Sans"', '"Geist Sans"', "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
```

**`postcss.config.js`:**

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

---

## APPENDIX F — `index.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Plusgain — The AI Design Plugin That Connects Everything</title>
    <meta
      name="description"
      content="Plusgain is the most powerful AI design plugin, built to connect with every tool your team already uses."
    />
    <link rel="preconnect" href="https://api.fontshare.com" crossorigin />
    <link
      href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

## APPENDIX G — `src/index.css` (full)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 260 87% 3%;
    --foreground: 40 6% 95%;
    --hero-sub: 40 6% 82%;
  }

  * {
    border-color: hsl(var(--foreground) / 0.12);
  }

  html,
  body,
  #root {
    min-height: 100%;
  }

  body {
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
    font-family: "Geist Sans", system-ui, -apple-system, sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
}

@layer components {
  .liquid-glass {
    background: rgba(255, 255, 255, 0.01);
    background-blend-mode: luminosity;
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
    border: none;
    box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
  }

  .liquid-glass::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1.4px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.45) 0%,
      rgba(255, 255, 255, 0.15) 20%,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0) 60%,
      rgba(255, 255, 255, 0.15) 80%,
      rgba(255, 255, 255, 0.45) 100%
    );
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
}
```

---

## APPENDIX H — Entry files

**`src/main.tsx`:**

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/geist-sans/400.css";
import "@fontsource/geist-sans/500.css";
import "@fontsource/geist-sans/600.css";
import "@fontsource/geist-sans/700.css";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

**`src/App.tsx`:**

```tsx
import Index from "@/pages/Index";

export default function App() {
  return <Index />;
}
```

**`src/vite-env.d.ts`:**

```ts
/// <reference types="vite/client" />
```

---

## APPENDIX I — `src/pages/Index.tsx` (the page itself)

```tsx
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import LogoMarquee from "@/components/LogoMarquee";
import ColorBends from "@/components/ColorBends";

export default function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Animated WebGL background */}
      <div className="absolute inset-0 z-0">
        <ColorBends
          className=""
          colors={["#6366f1", "#a855f7", "#fcd34d"]}
          rotation={90}
          speed={0.2}
          scale={1.1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          parallax={0.5}
          noise={0.12}
          iterations={2}
          intensity={1.2}
          bandWidth={6}
          transparent
        />
      </div>

      <div className="relative z-10">
        <section className="relative flex min-h-screen flex-col overflow-visible">
          {/* Blurred overlay shape, centered behind the content */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[527px] w-[984px] -translate-x-1/2 -translate-y-1/2 bg-gray-950 opacity-90 blur-[82px]" />

          <div className="relative z-10 flex min-h-screen flex-col">
            <Navbar />

            {/* Hero content */}
            <div className="flex flex-1 items-center justify-center">
              <div className="flex flex-col items-center px-8 text-center">
                <h1 className="font-display text-[220px] font-normal leading-[1.02] tracking-[-0.024em]">
                  <span className="text-foreground">Design </span>
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(to left, #6366f1, #a855f7, #fcd34d)",
                    }}
                  >
                    AI
                  </span>
                </h1>

                <p className="mt-8 max-w-md text-lg leading-8 text-hero-sub opacity-80">
                  The most powerful AI design plugin,
                  <br />
                  connected to every tool you use
                </p>

                <Button
                  variant="heroSecondary"
                  className="mt-[25px] px-[29px] py-[24px] text-base"
                >
                  Install Plusgain
                </Button>
              </div>
            </div>

            {/* Logo marquee pinned to the bottom */}
            <div className="pb-10">
              <LogoMarquee />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
```

---

## APPENDIX J — Build & run

```bash
npm install
npm run dev        # vite dev server
npm run build      # tsc + vite build
npm run preview    # serve the built dist/
```

Type-check is folded into `build` (`tsc && vite build`). The `.jsx` shader is allowed via `allowJs: true` + `checkJs: false`, and its TypeScript surface comes from the sibling `.d.ts`.
