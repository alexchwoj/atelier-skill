# AI Studio — Cinematic Hero

> Build the **AI Studio** hero exactly. Anything inside `{{ DOUBLE_BRACES }}` is a customization slot; everything else is invariant — reproduce as-is.

---

## LAYER 0 — META

```yaml
asset_id: ai-studio-hero-cinematic-01
category: hero
aesthetic: liquid-glass / dark cinematic
industry: ai / film
tone: cinematic premium
background: looping CDN video + animated WebGL light rays
license: house
version: 1.0
last_updated: 2026-06-01
```

---

## LAYER 1 — OPENING DECLARATION

Build a **fullscreen hero section** for **AI Studio** — an **AI movie / film-generation studio**.

Use this **pinned** tech stack (do not substitute):

- **React 18 + TypeScript + Vite**
- **Tailwind CSS 3** (default config + the extensions in Layer 3)
- **`motion`** (motion/react) — for the word-by-word blur-in heading
- **`gsap`** — available for micro-motion (parallax helpers)
- **`ogl`** — lightweight WebGL renderer for the animated light-rays background

```bash
npm create vite@latest ai-studio -- --template react-ts
npm i motion gsap ogl
npm i -D tailwindcss@3 postcss autoprefixer
```

The aesthetic is **dark cinematic with a liquid-glass design system, a looping background video, and animated volumetric light rays beaming from the top of the screen**. `#000000` is the global background. Default text color is `#ffffff`. **Do not use purple, indigo, or neon green anywhere** — the only accent is a cool cyan-white light (`#cdebff`).

---

## LAYER 2 — FONTS

Import at the **top** of `src/index.css`, before the `@tailwind` directives:

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Source+Sans+3:wght@300;400;500;600&display=swap');
```

- **Heading font:** `Playfair Display` (serif, weight 900 for the hero title)
- **Body font:** `Source Sans 3` (also exposed under the alias `Source Sans Pro`)

`body { font-family: 'Source Sans 3', 'Source Sans Pro', sans-serif; background: #000; }`

**Tailwind config extension (`tailwind.config.js`):**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Source Sans 3', 'Source Sans Pro', 'sans-serif'],
      },
      // Every `rounded` utility becomes a full pill — this is intentional.
      borderRadius: { DEFAULT: '9999px' },
    },
  },
  plugins: [],
}
```

> **Critical:** the `borderRadius.DEFAULT = '9999px'` override means **every** `rounded` class in the markup renders as a full pill. Do not remove it.

---

## LAYER 3 — COLOR SYSTEM

Single dark theme, hex values:

```
--background : #000000   /* global background */
--foreground : #ffffff   /* default text */
--accent     : #cdebff   /* light-ray color (cool cyan-white) */
--muted      : rgba(255,255,255,0.70–0.75)  /* secondary copy */
--hairline   : rgba(255,255,255,0.10–0.15)  /* glass edge highlights */
```

No CTA brand color beyond white-on-black. The primary button is **white background / black text**; the secondary button is **liquid-glass**.

---

## LAYER 4 — CUSTOM CSS UTILITIES (the design DNA — paste verbatim)

Append to `src/index.css` after the `@tailwind` directives. **Do not paraphrase or "improve".**

```css
.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
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
  background: linear-gradient(180deg,
    rgba(255, 255, 255, 0.45) 0%,
    rgba(255, 255, 255, 0.15) 20%,
    rgba(255, 255, 255, 0) 40%,
    rgba(255, 255, 255, 0) 60%,
    rgba(255, 255, 255, 0.15) 80%,
    rgba(255, 255, 255, 0.45) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.liquid-glass-strong {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  border: none;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.05), inset 0 1px 1px rgba(255, 255, 255, 0.15);
  position: relative;
  overflow: hidden;
}
.liquid-glass-strong::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(180deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0.2) 20%,
    rgba(255, 255, 255, 0) 40%,
    rgba(255, 255, 255, 0) 60%,
    rgba(255, 255, 255, 0.2) 80%,
    rgba(255, 255, 255, 0.5) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.hero-title {
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: clamp(96px, 18vw, 280px);
  line-height: 0.92;
  letter-spacing: -0.02em;
  color: white;
  text-align: center;
  justify-content: center; /* centers the flex words rendered by the BlurText heading */
}
```

---

## LAYER 5 — BACKGROUND ASSET

Two stacked background layers, in this z-order:

**Layer A — looping CDN video (z-0)**

```html
<video autoPlay loop muted playsInline preload="auto"
  className="w-full h-full object-cover"
  src="https://cdn.5sdesign.art/projects/aistudio/hero-video.mp4" />
```

> If you self-host, drop the file in `publichttps://cdn.5sdesign.art/projects/aistudio/hero-video.mp4` and use `src="https://cdn.5sdesign.art/projects/aistudio/hero-video.mp4"`. The CDN URL above is the canonical source.

A dark scrim sits over the video for text legibility: `<div className="absolute inset-0 bg-black/35" />`.

**Layer B — animated WebGL light rays (z-10, `mix-blend-screen`, `pointer-events-none`)**

A full-screen `ogl` shader that beams volumetric rays from the top-center, pulsating, faintly noisy, and gently distorted, biased toward the cool cyan-white accent. Full component in Layer 6. Mounted props:

```jsx
<LightRays
  raysOrigin="top-center"
  raysColor="#cdebff"
  raysSpeed={2.2}
  lightSpread={0.7}
  rayLength={3.2}
  pulsating={true}
  followMouse={true}
  mouseInfluence={0.5}
  noiseAmount={0.05}
  distortion={0.08}
  fadeDistance={1.6}
  saturation={1.0}
/>
```

---

## LAYER 6 — SHARED COMPONENTS (implement exactly)

### `BlurText` — word-by-word blur-in heading (`src/BlurText.tsx`)

Splits text by spaces; each word is a `motion.span`. An `IntersectionObserver` (threshold 0.1) flips `inView` once visible. Each word animates from a blurred/offset state into focus, staggered by `delay`.

```tsx
import { motion, type Transition } from 'motion/react'
import { useEffect, useRef, useState, useMemo } from 'react'

type Snapshot = Record<string, string | number>

const buildKeyframes = (
  from: Snapshot,
  steps: Snapshot[]
): Record<string, Array<string | number>> => {
  const keys = new Set<string>([
    ...Object.keys(from),
    ...steps.flatMap((s) => Object.keys(s)),
  ])
  const keyframes: Record<string, Array<string | number>> = {}
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])]
  })
  return keyframes
}

interface BlurTextProps {
  text?: string
  delay?: number
  className?: string
  animateBy?: 'words' | 'letters'
  direction?: 'top' | 'bottom'
  threshold?: number
  rootMargin?: string
  animationFrom?: Snapshot
  animationTo?: Snapshot[]
  easing?: (t: number) => number
  onAnimationComplete?: () => void
  stepDuration?: number
}

const BlurText = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = (t) => t,
  onAnimationComplete,
  stepDuration = 0.35,
}: BlurTextProps) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('')
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(el)
        }
      },
      { threshold, rootMargin }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  const defaultFrom = useMemo<Snapshot>(
    () =>
      direction === 'top'
        ? { filter: 'blur(10px)', opacity: 0, y: -50 }
        : { filter: 'blur(10px)', opacity: 0, y: 50 },
    [direction]
  )

  const defaultTo = useMemo<Snapshot[]>(
    () => [
      { filter: 'blur(5px)', opacity: 0.5, y: direction === 'top' ? 5 : -5 },
      { filter: 'blur(0px)', opacity: 1, y: 0 },
    ],
    [direction]
  )

  const fromSnapshot = animationFrom ?? defaultFrom
  const toSnapshots = animationTo ?? defaultTo

  const stepCount = toSnapshots.length + 1
  const totalDuration = stepDuration * (stepCount - 1)
  const times = Array.from({ length: stepCount }, (_, i) =>
    stepCount === 1 ? 0 : i / (stepCount - 1)
  )

  return (
    <p ref={ref} className={className} style={{ display: 'flex', flexWrap: 'wrap' }}>
      {elements.map((segment, index) => {
        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots)
        const spanTransition: Transition = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000,
          ease: easing,
        }
        return (
          <motion.span
            className="inline-block will-change-[transform,filter,opacity]"
            key={index}
            initial={fromSnapshot}
            animate={inView ? animateKeyframes : fromSnapshot}
            transition={spanTransition}
            onAnimationComplete={
              index === elements.length - 1 ? onAnimationComplete : undefined
            }
          >
            {segment === ' ' ? ' ' : segment}
            {animateBy === 'words' && index < elements.length - 1 && ' '}
          </motion.span>
        )
      })}
    </p>
  )
}

export default BlurText
```

### `LightRays` — animated volumetric light rays (`src/LightRays.tsx` + `src/LightRays.css`)

A full-screen `ogl` fragment shader. An `IntersectionObserver` (threshold 0.1) gates WebGL init to when the container is on-screen; a `resize` listener re-derives the ray anchor/direction from `raysOrigin`; an optional `mousemove` listener feeds a smoothed mouse position into the shader.

**`src/LightRays.css`:**

```css
.light-rays-container {
  width: 100%;
  height: 100%;
  position: relative;
  pointer-events: none;
  z-index: 3;
  overflow: hidden;
}
```

**`src/LightRays.tsx`:**

```tsx
import { useRef, useEffect, useState } from 'react'
import { Renderer, Program, Triangle, Mesh } from 'ogl'
import './LightRays.css'

const DEFAULT_COLOR = '#ffffff'

type RaysOrigin =
  | 'top-center' | 'top-left' | 'top-right' | 'right'
  | 'left' | 'bottom-center' | 'bottom-right' | 'bottom-left'

interface LightRaysProps {
  raysOrigin?: RaysOrigin
  raysColor?: string
  raysSpeed?: number
  lightSpread?: number
  rayLength?: number
  pulsating?: boolean
  fadeDistance?: number
  saturation?: number
  followMouse?: boolean
  mouseInfluence?: number
  noiseAmount?: number
  distortion?: number
  className?: string
}

const hexToRgb = (hex: string): [number, number, number] => {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return m
    ? [parseInt(m[1], 16) / 255, parseInt(m[2], 16) / 255, parseInt(m[3], 16) / 255]
    : [1, 1, 1]
}

const getAnchorAndDir = (
  origin: RaysOrigin,
  w: number,
  h: number
): { anchor: [number, number]; dir: [number, number] } => {
  const outside = 0.2
  switch (origin) {
    case 'top-left':      return { anchor: [0, -outside * h], dir: [0, 1] }
    case 'top-right':     return { anchor: [w, -outside * h], dir: [0, 1] }
    case 'left':          return { anchor: [-outside * w, 0.5 * h], dir: [1, 0] }
    case 'right':         return { anchor: [(1 + outside) * w, 0.5 * h], dir: [-1, 0] }
    case 'bottom-left':   return { anchor: [0, (1 + outside) * h], dir: [0, -1] }
    case 'bottom-center': return { anchor: [0.5 * w, (1 + outside) * h], dir: [0, -1] }
    case 'bottom-right':  return { anchor: [w, (1 + outside) * h], dir: [0, -1] }
    default:              return { anchor: [0.5 * w, -outside * h], dir: [0, 1] } // top-center
  }
}

const LightRays = ({
  raysOrigin = 'top-center',
  raysColor = DEFAULT_COLOR,
  raysSpeed = 1,
  lightSpread = 1,
  rayLength = 2,
  pulsating = false,
  fadeDistance = 1.0,
  saturation = 1.0,
  followMouse = true,
  mouseInfluence = 0.1,
  noiseAmount = 0.0,
  distortion = 0.0,
  className = '',
}: LightRaysProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const uniformsRef = useRef<Record<string, { value: unknown }> | null>(null)
  const rendererRef = useRef<Renderer | null>(null)
  const mouseRef = useRef({ x: 0.5, y: 0.5 })
  const smoothMouseRef = useRef({ x: 0.5, y: 0.5 })
  const animationIdRef = useRef<number | null>(null)
  const meshRef = useRef<Mesh | null>(null)
  const cleanupFunctionRef = useRef<(() => void) | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (!containerRef.current) return
    observerRef.current = new IntersectionObserver(
      (entries) => setIsVisible(entries[0].isIntersecting),
      { threshold: 0.1 }
    )
    observerRef.current.observe(containerRef.current)
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
        observerRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible || !containerRef.current) return
    if (cleanupFunctionRef.current) {
      cleanupFunctionRef.current()
      cleanupFunctionRef.current = null
    }

    const initializeWebGL = async () => {
      if (!containerRef.current) return
      await new Promise((resolve) => setTimeout(resolve, 10))
      if (!containerRef.current) return

      const renderer = new Renderer({ dpr: Math.min(window.devicePixelRatio, 2), alpha: true })
      rendererRef.current = renderer

      const gl = renderer.gl
      gl.canvas.style.width = '100%'
      gl.canvas.style.height = '100%'

      while (containerRef.current.firstChild) {
        containerRef.current.removeChild(containerRef.current.firstChild)
      }
      containerRef.current.appendChild(gl.canvas)

      const vert = `
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}`

      const frag = `precision highp float;

uniform float iTime;
uniform vec2  iResolution;

uniform vec2  rayPos;
uniform vec2  rayDir;
uniform vec3  raysColor;
uniform float raysSpeed;
uniform float lightSpread;
uniform float rayLength;
uniform float pulsating;
uniform float fadeDistance;
uniform float saturation;
uniform vec2  mousePos;
uniform float mouseInfluence;
uniform float noiseAmount;
uniform float distortion;

varying vec2 vUv;

float noise(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

float rayStrength(vec2 raySource, vec2 rayRefDirection, vec2 coord,
                  float seedA, float seedB, float speed) {
  vec2 sourceToCoord = coord - raySource;
  vec2 dirNorm = normalize(sourceToCoord);
  float cosAngle = dot(dirNorm, rayRefDirection);

  float distortedAngle = cosAngle + distortion * sin(iTime * 2.0 + length(sourceToCoord) * 0.01) * 0.2;

  float spreadFactor = pow(max(distortedAngle, 0.0), 1.0 / max(lightSpread, 0.001));

  float distance = length(sourceToCoord);
  float maxDistance = iResolution.x * rayLength;
  float lengthFalloff = clamp((maxDistance - distance) / maxDistance, 0.0, 1.0);

  float fadeFalloff = clamp((iResolution.x * fadeDistance - distance) / (iResolution.x * fadeDistance), 0.5, 1.0);
  float pulse = pulsating > 0.5 ? (0.8 + 0.2 * sin(iTime * speed * 3.0)) : 1.0;

  float baseStrength = clamp(
    (0.45 + 0.15 * sin(distortedAngle * seedA + iTime * speed)) +
    (0.3 + 0.2 * cos(-distortedAngle * seedB + iTime * speed)),
    0.0, 1.0
  );

  return baseStrength * lengthFalloff * fadeFalloff * spreadFactor * pulse;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 coord = vec2(fragCoord.x, iResolution.y - fragCoord.y);

  vec2 finalRayDir = rayDir;
  if (mouseInfluence > 0.0) {
    vec2 mouseScreenPos = mousePos * iResolution.xy;
    vec2 mouseDirection = normalize(mouseScreenPos - rayPos);
    finalRayDir = normalize(mix(rayDir, mouseDirection, mouseInfluence));
  }

  vec4 rays1 = vec4(1.0) * rayStrength(rayPos, finalRayDir, coord, 36.2214, 21.11349, 1.5 * raysSpeed);
  vec4 rays2 = vec4(1.0) * rayStrength(rayPos, finalRayDir, coord, 22.3991, 18.0234, 1.1 * raysSpeed);

  fragColor = rays1 * 0.5 + rays2 * 0.4;

  if (noiseAmount > 0.0) {
    float n = noise(coord * 0.01 + iTime * 0.1);
    fragColor.rgb *= (1.0 - noiseAmount + noiseAmount * n);
  }

  float brightness = 1.0 - (coord.y / iResolution.y);
  fragColor.x *= 0.1 + brightness * 0.8;
  fragColor.y *= 0.3 + brightness * 0.6;
  fragColor.z *= 0.5 + brightness * 0.5;

  if (saturation != 1.0) {
    float gray = dot(fragColor.rgb, vec3(0.299, 0.587, 0.114));
    fragColor.rgb = mix(vec3(gray), fragColor.rgb, saturation);
  }

  fragColor.rgb *= raysColor;
}

void main() {
  vec4 color;
  mainImage(color, gl_FragCoord.xy);
  gl_FragColor = color;
}`

      const uniforms = {
        iTime: { value: 0 },
        iResolution: { value: [1, 1] },
        rayPos: { value: [0, 0] },
        rayDir: { value: [0, 1] },
        raysColor: { value: hexToRgb(raysColor) },
        raysSpeed: { value: raysSpeed },
        lightSpread: { value: lightSpread },
        rayLength: { value: rayLength },
        pulsating: { value: pulsating ? 1.0 : 0.0 },
        fadeDistance: { value: fadeDistance },
        saturation: { value: saturation },
        mousePos: { value: [0.5, 0.5] },
        mouseInfluence: { value: mouseInfluence },
        noiseAmount: { value: noiseAmount },
        distortion: { value: distortion },
      }
      uniformsRef.current = uniforms

      const geometry = new Triangle(gl)
      const program = new Program(gl, { vertex: vert, fragment: frag, uniforms })
      const mesh = new Mesh(gl, { geometry, program })
      meshRef.current = mesh

      const updatePlacement = () => {
        if (!containerRef.current || !renderer) return
        renderer.dpr = Math.min(window.devicePixelRatio, 2)
        const { clientWidth: wCSS, clientHeight: hCSS } = containerRef.current
        renderer.setSize(wCSS, hCSS)
        const dpr = renderer.dpr
        const w = wCSS * dpr
        const h = hCSS * dpr
        uniforms.iResolution.value = [w, h]
        const { anchor, dir } = getAnchorAndDir(raysOrigin, w, h)
        uniforms.rayPos.value = anchor
        uniforms.rayDir.value = dir
      }

      const loop = (t: number) => {
        if (!rendererRef.current || !uniformsRef.current || !meshRef.current) return
        uniforms.iTime.value = t * 0.001
        if (followMouse && mouseInfluence > 0.0) {
          const smoothing = 0.92
          smoothMouseRef.current.x = smoothMouseRef.current.x * smoothing + mouseRef.current.x * (1 - smoothing)
          smoothMouseRef.current.y = smoothMouseRef.current.y * smoothing + mouseRef.current.y * (1 - smoothing)
          uniforms.mousePos.value = [smoothMouseRef.current.x, smoothMouseRef.current.y]
        }
        try {
          renderer.render({ scene: mesh })
          animationIdRef.current = requestAnimationFrame(loop)
        } catch (error) {
          console.warn('WebGL rendering error:', error)
          return
        }
      }

      window.addEventListener('resize', updatePlacement)
      updatePlacement()
      animationIdRef.current = requestAnimationFrame(loop)

      cleanupFunctionRef.current = () => {
        if (animationIdRef.current) {
          cancelAnimationFrame(animationIdRef.current)
          animationIdRef.current = null
        }
        window.removeEventListener('resize', updatePlacement)
        if (renderer) {
          try {
            const canvas = renderer.gl.canvas
            const loseContextExt = renderer.gl.getExtension('WEBGL_lose_context')
            if (loseContextExt) loseContextExt.loseContext()
            if (canvas && canvas.parentNode) canvas.parentNode.removeChild(canvas)
          } catch (error) {
            console.warn('Error during WebGL cleanup:', error)
          }
        }
        rendererRef.current = null
        uniformsRef.current = null
        meshRef.current = null
      }
    }

    initializeWebGL()

    return () => {
      if (cleanupFunctionRef.current) {
        cleanupFunctionRef.current()
        cleanupFunctionRef.current = null
      }
    }
  }, [
    isVisible, raysOrigin, raysColor, raysSpeed, lightSpread, rayLength,
    pulsating, fadeDistance, saturation, followMouse, mouseInfluence,
    noiseAmount, distortion,
  ])

  useEffect(() => {
    if (!uniformsRef.current || !containerRef.current || !rendererRef.current) return
    const u = uniformsRef.current
    const renderer = rendererRef.current
    u.raysColor.value = hexToRgb(raysColor)
    u.raysSpeed.value = raysSpeed
    u.lightSpread.value = lightSpread
    u.rayLength.value = rayLength
    u.pulsating.value = pulsating ? 1.0 : 0.0
    u.fadeDistance.value = fadeDistance
    u.saturation.value = saturation
    u.mouseInfluence.value = mouseInfluence
    u.noiseAmount.value = noiseAmount
    u.distortion.value = distortion
    const { clientWidth: wCSS, clientHeight: hCSS } = containerRef.current
    const dpr = renderer.dpr
    const { anchor, dir } = getAnchorAndDir(raysOrigin, wCSS * dpr, hCSS * dpr)
    u.rayPos.value = anchor
    u.rayDir.value = dir
  }, [
    raysColor, raysSpeed, lightSpread, raysOrigin, rayLength, pulsating,
    fadeDistance, saturation, mouseInfluence, noiseAmount, distortion,
  ])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !rendererRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      }
    }
    if (followMouse) {
      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [followMouse])

  return <div ref={containerRef} className={`light-rays-container ${className}`.trim()} />
}

export default LightRays
```

---

## LAYER 7 — THE HERO SECTION

Root: `<div className="min-h-screen bg-black text-white font-body overflow-x-hidden">`. All children are `fixed` and layered by z-index.

**Z-order:** video `z-0` → light rays `z-10` → hero title `z-20` → bottom row `z-20` → nav `z-50`.

### Block A · LogoMark (inline SVG — a minimal "play" mark)

```tsx
function LogoMark() {
  return (
    <svg width="34" height="26" viewBox="0 0 34 26" fill="none"
         xmlns="http://www.w3.org/2000/svg" aria-label="AI Studio">
      <rect x="4" y="0" width="26" height="26" rx="7" fill="white" />
      <path d="M14 8 L14 18 L22 13 Z" fill="black" />
    </svg>
  )
}
```

### Block B · Constants

```ts
const NAV_LINKS = ['Showcase', 'Styles', 'API', 'Pricing', 'Blog']
```

### Block C · State

- `mounted` (boolean) — set `true` in a mount `useEffect` to drive the fade-in of the title and bottom row.

### Block D · Video background (z-0)

```jsx
<div className="fixed inset-0 z-0">
  <video src="https://cdn.5sdesign.art/projects/aistudio/hero-video.mp4" autoPlay muted loop playsInline preload="auto"
         className="w-full h-full object-cover" />
  <div className="absolute inset-0 bg-black/35" />
</div>
```

(Canonical CDN source for `src`: the CloudFront URL in Layer 5.)

### Block E · Light rays overlay (z-10)

```jsx
<div className="fixed inset-0 z-10 pointer-events-none mix-blend-screen">
  <LightRays raysOrigin="top-center" raysColor="#cdebff" raysSpeed={2.2}
    lightSpread={0.7} rayLength={3.2} pulsating={true} followMouse={true}
    mouseInfluence={0.5} noiseAmount={0.05} distortion={0.08}
    fadeDistance={1.6} saturation={1.0} />
</div>
```

### Block F · Hero title (z-20)

Fixed, `left-0 right-0 w-full px-4`, inline `style={{ top: '126px' }}`. Fades in via `transition-all duration-1000`, toggling `opacity-100 translate-y-0` vs `opacity-0 translate-y-6` on `mounted`.

```jsx
<BlurText text="AI Studio" animateBy="words" direction="top"
  delay={220} stepDuration={0.5} className="hero-title select-none" />
```

### Block G · Nav (z-50)

`<nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 whitespace-nowrap">` wrapping a `liquid-glass flex items-center gap-6 rounded px-4 py-2.5` pill:

1. `<LogoMark />`
2. `<div className="flex items-center gap-5">` of `NAV_LINKS` as `<a href="#" className="text-sm font-body font-light text-white/70 hover:text-white transition-colors duration-200">`.
3. Right cluster `flex items-center gap-3 ml-4`:
   - "Sign in" — same link style.
   - "Try it free" — `liquid-glass-strong text-sm font-body font-medium text-white rounded px-4 py-1.5 transition-all duration-200 hover:scale-[1.04] hover:shadow-[0_0_16px_2px_rgba(255,255,255,0.12)] active:scale-[0.97]`.

### Block H · Bottom row (z-20)

`fixed bottom-12 left-0 right-0 px-10 flex items-end justify-between z-20`, fade-in `transition-all duration-1000 delay-300` on `mounted`.

- **Left `<p>`** — `text-sm font-body font-light text-white/75 max-w-[220px] leading-relaxed`:
  > Our AI understands story, pacing, and cinematography the way a film director would.
- **Center** — `absolute left-1/2 -translate-x-1/2 bottom-0 flex items-center gap-3`, two buttons:
  - **Primary** — `group relative bg-white text-black text-sm font-body font-medium rounded px-6 py-3 overflow-hidden active:scale-[0.97] transition-all duration-200 shadow-[0_0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_24px_4px_rgba(255,255,255,0.25)] hover:scale-[1.03]`. Inner: `<span className="relative z-10">Start your film</span>` + overlay `<span className="absolute inset-0 bg-gradient-to-b from-white to-white/85 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />`.
  - **Secondary** — `liquid-glass group text-white text-sm font-body font-medium rounded px-6 py-3 active:scale-[0.97] transition-all duration-200 hover:scale-[1.03] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_20px_2px_rgba(255,255,255,0.07)]`, label **"See showcase"**.
- **Right `<p>`** — same as left plus `text-right`:
  > Describe the scene you see in your head — get shots that actually match.

---

## LAYER 8 — ANIMATION STANDARDS

- **Mount fade-in:** title + bottom row use `transition-all duration-1000`; bottom row adds `delay-300`. Hidden state `opacity-0 translate-y-6`, shown state `opacity-100 translate-y-0`, flipped by `mounted`.
- **Heading reveal:** `BlurText`, `animateBy="words"`, `direction="top"`, `delay={220}` (ms between words), `stepDuration={0.5}` (s per word). Per-word keyframes: `blur(10px)/opacity 0/y -50` → `blur(5px)/opacity 0.5/y 5` → `blur(0)/opacity 1/y 0`.
- **Light rays:** continuous `requestAnimationFrame` loop; `pulsating` adds a `0.8 + 0.2·sin` brightness pulse; mouse position smoothed at `0.92`.
- **Button hovers:** `hover:scale-[1.03]` / `active:scale-[0.97]` with glow shadows as specified above.

---

## LAYER 9 — RESPONSIVE STANDARDS

- **Hero typography:** `clamp(96px, 18vw, 280px)` (already in `.hero-title`). Always `clamp()`, never fixed.
- All backgrounds are `fixed inset-0` and `object-cover` — fills any viewport.
- Nav uses `whitespace-nowrap` and centers via `left-1/2 -translate-x-1/2`.
- Bottom row side paragraphs are capped at `max-w-[220px]`; center CTA cluster is absolutely centered independent of them.

---

## LAYER 10 — ICON / MARK SET

This hero uses **one** inline SVG mark only (the play `LogoMark` in Layer 7 Block A). No icon library is required for the hero. If you extend the page, keep marks minimal and white-on-dark to match.

---

## LAYER 11 — REPRODUCE-EXACTLY CLAUSE

Reproduce exactly. Do not:
- Substitute fonts — it is **Playfair Display** (900) + **Source Sans 3**, nothing "similar".
- Round color values — the accent is `#cdebff`, the scrim is `bg-black/35`.
- Shorten or reword the copy strings in Layer 7 Block H.
- Drop the `borderRadius.DEFAULT = '9999px'` Tailwind override (every `rounded` is a pill).
- Change the z-order: video 0 → rays 10 → title 20 → bottom 20 → nav 50.
- Alter the light-rays props or the shader source.
- Swap the background video URL for a placeholder.

If a constraint conflicts with a framework limit (e.g. a missing font weight), clamp to the nearest valid value and leave a code comment — do not silently change.

---

## FILE MAP

```
ai-studio/
├─ index.html
├─ tailwind.config.js      # fontFamily + borderRadius override (Layer 2)
├─ postcss.config.js       # tailwindcss + autoprefixer
├─ public/
│  └─ hero-video.mp4        # or stream the CloudFront URL in Layer 5
└─ src/
   ├─ main.tsx              # ReactDOM.createRoot → <App />, imports ./index.css
   ├─ index.css             # fonts + @tailwind + liquid-glass + hero-title (Layers 2,4)
   ├─ App.tsx               # the hero (Layer 7)
   ├─ BlurText.tsx          # word-by-word blur-in heading (Layer 6)
   ├─ LightRays.tsx         # WebGL light rays (Layer 6)
   └─ LightRays.css         # .light-rays-container (Layer 6)
```
