# Apos — Omnichain Swap Bridge

> The official prompt structure for the Apos hero. Anything inside `{{ DOUBLE_BRACES }}` is a customization slot. Everything else is invariant — reproduce verbatim.
---

## LAYER 0 — META

```yaml
asset_id: apos-hero-omnichain-01
category: landing-page
aesthetic: liquid-glass · cinematic · web3
industry: web3 (cross-chain bridge / swap)
tone: premium · technical · trustworthy
preview_url: (local) http://localhost:5177
license: private
version: 1.0
last_updated: 2026-06-01
```

---

## LAYER 1 — OPENING DECLARATION

Build a **single-screen hero landing page** for **Apos** — an **omnichain swap bridge that moves any asset across 40+ blockchains in seconds with deep aggregated liquidity, near-zero slippage, and trustless audited infrastructure**.

Use the following **pinned** tech stack (do not substitute):

- **React 18 + JavaScript + Vite 5**
- **Tailwind CSS 3** (default config + extensions in Layer 3)
- **lucide-react** for icons (restricted to the set in Layer 10)
- **three** + **postprocessing** for the WebGL background component (Layer 5)

The aesthetic is **dark cinematic with a liquid-glass design system, a WebGL Bayer-dithered pixel field background, a floating glass card above the headline, and a single mint accent color**. `#070b0a` is the global background. Default text color is `#ffffff`. **Do not use purple, indigo, blue, neon green, orange, or any color outside the ink/mint/white palette anywhere.**

The page has **two components only**: a floating glass-pill `Navbar` and a full-viewport `Hero` section. No other sections, no footer, no CTA buttons in the hero.

---

## LAYER 2 — FONTS

Load via Google Fonts in `index.html` (preconnect + single stylesheet):

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&display=swap"
  rel="stylesheet"
/>
```

**Three families, three roles:**
- `Inter` (400/500/600/700/800) — body, headline, nav links, logo wordmark, stats
- `Plus Jakarta Sans` (400/500/600/700/800) — eyebrow tag, card date tag (small uppercase tracking-heavy labels only)
- `Instrument Serif` (italic only) — the single italic accent word inside the glass card (`Industry`) and any other italic serif accent

Tailwind config extension (`tailwind.config.js`):

```js
fontFamily: {
  inter:   ['Inter', 'system-ui', 'sans-serif'],
  jakarta: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
  serif:   ['"Instrument Serif"', 'Georgia', 'serif'],
}
```

Body defaults (in `src/index.css` under `@layer base`):

```css
body {
  margin: 0;
  background-color: #070b0a;
  color: #ffffff;
  font-family: 'Inter', system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}
```

**Weight-clamping rule:** if a requested weight isn't loaded, clamp to the nearest loaded weight rather than synthesizing.

---

## LAYER 3 — COLOR SYSTEM

This project ships a single dark theme — no CSS variables, the two brand colors live directly in `tailwind.config.js`.

```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      ink:  '#070b0a',   // global background, button text-on-mint
      mint: '#5ed29c',   // accent: eyebrow, headline period, hover state, PixelBlast pixels
    },
    fontFamily: { /* see Layer 2 */ },
    maxWidth: { prose: '512px' },   // hero description max width
  },
},
```

**Palette rules:**
- White (`#ffffff`) and `white/{10|20|40|50|55|70|80}` opacity utilities for text, hairlines, gradient stops.
- `ink` is the **only** dark background color used anywhere.
- `mint` is the **only** colored accent — used for: eyebrow text, the trailing period of the headline, the card date tag, the italic serif word inside the card, link hover state, the WebGL pixel color, the radial glow stops, and the favicon glyph.
- Forbidden everywhere: purple, indigo, blue, cyan-as-primary, neon green, orange, red, yellow.

---

## LAYER 4 — CUSTOM CSS UTILITIES (the "design DNA")

**Invariant block.** Paste verbatim into `src/index.css`. These three utilities give Apos its signature feel.

### 4a. Liquid-glass (signature card + navbar treatment)

```css
@layer components {
  .liquid-glass {
    position: relative;
    background: rgba(7, 11, 10, 0.5);
    background-blend-mode: luminosity;
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
    box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  }

  /* Sharp high-end gradient border via masked pseudo-element */
  .liquid-glass::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1.4px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.05)
    );
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
}
```

**Opacity override convention:** when the same `.liquid-glass` needs a lighter scrim on a different surface (e.g. the navbar), apply a Tailwind utility like `bg-ink/25` AFTER the class. Utilities layer wins over components layer, so background-color is overridden while blur + border remain.

### 4b. Fade-up entry animation (the only motion primitive)

```css
@layer utilities {
  .animate-fade-up {
    animation: fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  @keyframes fade-up {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
}
```

This is the **only** animation primitive in the build. There is no framer-motion / motion-react. Apply `.animate-fade-up` to entering elements as the single entry treatment.

### 4c. Base layer

```css
@layer base {
  :root { color-scheme: dark; }
  html, body, #root { height: 100%; }
  /* body rules — see Layer 2 */
}
```

---

## LAYER 5 — BACKGROUND ASSET (the `PixelBlast` WebGL component)

The hero background is a **full-bleed WebGL canvas** rendering a Bayer-dithered animated pixel field that paints click ripples. There is **no video background** in this build — the canvas is the entire visual.

### 5a. Dependencies

```bash
npm install three postprocessing
```

### 5b. Component CSS — `src/components/PixelBlast.css`

```css
.pixel-blast-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
```

### 5c. Component source — `src/components/PixelBlast.jsx` (reproduce verbatim)

```jsx
import { Effect, EffectComposer, EffectPass, RenderPass } from 'postprocessing';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './PixelBlast.css';

const createTouchTexture = () => {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('2D context not available');
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const texture = new THREE.Texture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  const trail = [];
  let last = null;
  const maxAge = 64;
  let radius = 0.1 * size;
  const speed = 1 / maxAge;
  const clear = () => { ctx.fillStyle = 'black'; ctx.fillRect(0, 0, canvas.width, canvas.height); };
  const drawPoint = p => {
    const pos = { x: p.x * size, y: (1 - p.y) * size };
    let intensity = 1;
    const easeOutSine = t => Math.sin((t * Math.PI) / 2);
    const easeOutQuad = t => -t * (t - 2);
    if (p.age < maxAge * 0.3) intensity = easeOutSine(p.age / (maxAge * 0.3));
    else intensity = easeOutQuad(1 - (p.age - maxAge * 0.3) / (maxAge * 0.7)) || 0;
    intensity *= p.force;
    const color = `${((p.vx + 1) / 2) * 255}, ${((p.vy + 1) / 2) * 255}, ${intensity * 255}`;
    const offset = size * 5;
    ctx.shadowOffsetX = offset; ctx.shadowOffsetY = offset; ctx.shadowBlur = radius;
    ctx.shadowColor = `rgba(${color},${0.22 * intensity})`;
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255,0,0,1)';
    ctx.arc(pos.x - offset, pos.y - offset, radius, 0, Math.PI * 2);
    ctx.fill();
  };
  const addTouch = norm => {
    let force = 0, vx = 0, vy = 0;
    if (last) {
      const dx = norm.x - last.x; const dy = norm.y - last.y;
      if (dx === 0 && dy === 0) return;
      const dd = dx * dx + dy * dy; const d = Math.sqrt(dd);
      vx = dx / (d || 1); vy = dy / (d || 1);
      force = Math.min(dd * 10000, 1);
    }
    last = { x: norm.x, y: norm.y };
    trail.push({ x: norm.x, y: norm.y, age: 0, force, vx, vy });
  };
  const update = () => {
    clear();
    for (let i = trail.length - 1; i >= 0; i--) {
      const point = trail[i];
      const f = point.force * speed * (1 - point.age / maxAge);
      point.x += point.vx * f; point.y += point.vy * f;
      point.age++;
      if (point.age > maxAge) trail.splice(i, 1);
    }
    for (let i = 0; i < trail.length; i++) drawPoint(trail[i]);
    texture.needsUpdate = true;
  };
  return {
    canvas, texture, addTouch, update,
    set radiusScale(v) { radius = 0.1 * size * v; },
    get radiusScale() { return radius / (0.1 * size); },
    size,
  };
};

const createLiquidEffect = (texture, opts) => {
  const fragment = `
    uniform sampler2D uTexture;
    uniform float uStrength;
    uniform float uTime;
    uniform float uFreq;
    void mainUv(inout vec2 uv) {
      vec4 tex = texture2D(uTexture, uv);
      float vx = tex.r * 2.0 - 1.0;
      float vy = tex.g * 2.0 - 1.0;
      float intensity = tex.b;
      float wave = 0.5 + 0.5 * sin(uTime * uFreq + intensity * 6.2831853);
      float amt = uStrength * intensity * wave;
      uv += vec2(vx, vy) * amt;
    }
  `;
  return new Effect('LiquidEffect', fragment, {
    uniforms: new Map([
      ['uTexture',  new THREE.Uniform(texture)],
      ['uStrength', new THREE.Uniform(opts?.strength ?? 0.025)],
      ['uTime',     new THREE.Uniform(0)],
      ['uFreq',     new THREE.Uniform(opts?.freq ?? 4.5)],
    ]),
  });
};

const SHAPE_MAP = { square: 0, circle: 1, triangle: 2, diamond: 3 };

const VERTEX_SRC = `
void main() {
  gl_Position = vec4(position, 1.0);
}
`;

const FRAGMENT_SRC = `
precision highp float;

uniform vec3  uColor;
uniform vec2  uResolution;
uniform float uTime;
uniform float uPixelSize;
uniform float uScale;
uniform float uDensity;
uniform float uPixelJitter;
uniform int   uEnableRipples;
uniform float uRippleSpeed;
uniform float uRippleThickness;
uniform float uRippleIntensity;
uniform float uEdgeFade;

uniform int   uShapeType;
const int SHAPE_SQUARE   = 0;
const int SHAPE_CIRCLE   = 1;
const int SHAPE_TRIANGLE = 2;
const int SHAPE_DIAMOND  = 3;

const int   MAX_CLICKS = 10;

uniform vec2  uClickPos  [MAX_CLICKS];
uniform float uClickTimes[MAX_CLICKS];

out vec4 fragColor;

float Bayer2(vec2 a) { a = floor(a); return fract(a.x / 2. + a.y * a.y * .75); }
#define Bayer4(a) (Bayer2(.5*(a))*0.25 + Bayer2(a))
#define Bayer8(a) (Bayer4(.5*(a))*0.25 + Bayer2(a))

#define FBM_OCTAVES     5
#define FBM_LACUNARITY  1.25
#define FBM_GAIN        1.0

float hash11(float n){ return fract(sin(n)*43758.5453); }

float vnoise(vec3 p){
  vec3 ip = floor(p); vec3 fp = fract(p);
  float n000 = hash11(dot(ip + vec3(0.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n100 = hash11(dot(ip + vec3(1.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n010 = hash11(dot(ip + vec3(0.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n110 = hash11(dot(ip + vec3(1.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n001 = hash11(dot(ip + vec3(0.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n101 = hash11(dot(ip + vec3(1.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n011 = hash11(dot(ip + vec3(0.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  float n111 = hash11(dot(ip + vec3(1.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  vec3 w = fp*fp*fp*(fp*(fp*6.0-15.0)+10.0);
  float x00 = mix(n000, n100, w.x);
  float x10 = mix(n010, n110, w.x);
  float x01 = mix(n001, n101, w.x);
  float x11 = mix(n011, n111, w.x);
  float y0  = mix(x00, x10, w.y);
  float y1  = mix(x01, x11, w.y);
  return mix(y0, y1, w.z) * 2.0 - 1.0;
}

float fbm2(vec2 uv, float t){
  vec3 p = vec3(uv * uScale, t);
  float amp = 1.0; float freq = 1.0; float sum = 1.0;
  for (int i = 0; i < FBM_OCTAVES; ++i){
    sum  += amp * vnoise(p * freq);
    freq *= FBM_LACUNARITY;
    amp  *= FBM_GAIN;
  }
  return sum * 0.5 + 0.5;
}

float maskCircle(vec2 p, float cov){
  float r = sqrt(cov) * .25;
  float d = length(p - 0.5) - r;
  float aa = 0.5 * fwidth(d);
  return cov * (1.0 - smoothstep(-aa, aa, d * 2.0));
}

float maskTriangle(vec2 p, vec2 id, float cov){
  bool flip = mod(id.x + id.y, 2.0) > 0.5;
  if (flip) p.x = 1.0 - p.x;
  float r = sqrt(cov);
  float d  = p.y - r*(1.0 - p.x);
  float aa = fwidth(d);
  return cov * clamp(0.5 - d/aa, 0.0, 1.0);
}

float maskDiamond(vec2 p, float cov){
  float r = sqrt(cov) * 0.564;
  return step(abs(p.x - 0.49) + abs(p.y - 0.49), r);
}

void main(){
  float pixelSize = uPixelSize;
  vec2 fragCoord = gl_FragCoord.xy - uResolution * .5;
  float aspectRatio = uResolution.x / uResolution.y;

  vec2 pixelId = floor(fragCoord / pixelSize);
  vec2 pixelUV = fract(fragCoord / pixelSize);

  float cellPixelSize = 8.0 * pixelSize;
  vec2 cellId = floor(fragCoord / cellPixelSize);
  vec2 cellCoord = cellId * cellPixelSize;
  vec2 uv = cellCoord / uResolution * vec2(aspectRatio, 1.0);

  float base = fbm2(uv, uTime * 0.05);
  base = base * 0.5 - 0.65;

  float feed = base + (uDensity - 0.5) * 0.3;

  float speed     = uRippleSpeed;
  float thickness = uRippleThickness;
  const float dampT     = 1.0;
  const float dampR     = 10.0;

  if (uEnableRipples == 1) {
    for (int i = 0; i < MAX_CLICKS; ++i){
      vec2 pos = uClickPos[i];
      if (pos.x < 0.0) continue;
      float cellPixelSize = 8.0 * pixelSize;
      vec2 cuv = (((pos - uResolution * .5 - cellPixelSize * .5) / (uResolution))) * vec2(aspectRatio, 1.0);
      float t = max(uTime - uClickTimes[i], 0.0);
      float r = distance(uv, cuv);
      float waveR = speed * t;
      float ring  = exp(-pow((r - waveR) / thickness, 2.0));
      float atten = exp(-dampT * t) * exp(-dampR * r);
      feed = max(feed, ring * atten * uRippleIntensity);
    }
  }

  float bayer = Bayer8(fragCoord / uPixelSize) - 0.5;
  float bw = step(0.5, feed + bayer);

  float h = fract(sin(dot(floor(fragCoord / uPixelSize), vec2(127.1, 311.7))) * 43758.5453);
  float jitterScale = 1.0 + (h - 0.5) * uPixelJitter;
  float coverage = bw * jitterScale;
  float M;
  if      (uShapeType == SHAPE_CIRCLE)   M = maskCircle (pixelUV, coverage);
  else if (uShapeType == SHAPE_TRIANGLE) M = maskTriangle(pixelUV, pixelId, coverage);
  else if (uShapeType == SHAPE_DIAMOND)  M = maskDiamond(pixelUV, coverage);
  else                                   M = coverage;

  if (uEdgeFade > 0.0) {
    vec2 norm = gl_FragCoord.xy / uResolution;
    float edge = min(min(norm.x, norm.y), min(1.0 - norm.x, 1.0 - norm.y));
    float fade = smoothstep(0.0, uEdgeFade, edge);
    M *= fade;
  }

  vec3 color = uColor;
  vec3 srgbColor = mix(
    color * 12.92,
    1.055 * pow(color, vec3(1.0 / 2.4)) - 0.055,
    step(0.0031308, color)
  );

  fragColor = vec4(srgbColor, M);
}
`;

const MAX_CLICKS = 10;

const PixelBlast = ({
  variant = 'square',
  pixelSize = 3,
  color = '#B497CF',
  className,
  style,
  antialias = true,
  patternScale = 2,
  patternDensity = 1,
  liquid = false,
  liquidStrength = 0.1,
  liquidRadius = 1,
  pixelSizeJitter = 0,
  enableRipples = true,
  rippleIntensityScale = 1,
  rippleThickness = 0.1,
  rippleSpeed = 0.3,
  liquidWobbleSpeed = 4.5,
  autoPauseOffscreen = true,
  speed = 0.5,
  transparent = true,
  edgeFade = 0.5,
  noiseAmount = 0,
}) => {
  const containerRef = useRef(null);
  const visibilityRef = useRef({ visible: true });
  const speedRef = useRef(speed);
  const threeRef = useRef(null);
  const prevConfigRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    speedRef.current = speed;
    const needsReinitKeys = ['antialias', 'liquid', 'noiseAmount'];
    const cfg = { antialias, liquid, noiseAmount };
    let mustReinit = false;
    if (!threeRef.current) mustReinit = true;
    else if (prevConfigRef.current) {
      for (const k of needsReinitKeys)
        if (prevConfigRef.current[k] !== cfg[k]) { mustReinit = true; break; }
    }

    if (mustReinit) {
      if (threeRef.current) {
        const t = threeRef.current;
        t.resizeObserver?.disconnect();
        cancelAnimationFrame(t.raf);
        t.quad?.geometry.dispose();
        t.material.dispose();
        t.composer?.dispose();
        t.renderer.dispose();
        t.renderer.forceContextLoss();
        if (t.renderer.domElement.parentElement === container) container.removeChild(t.renderer.domElement);
        threeRef.current = null;
      }
      const canvas = document.createElement('canvas');
      const renderer = new THREE.WebGLRenderer({ canvas, antialias, alpha: true, powerPreference: 'high-performance' });
      renderer.domElement.style.width = '100%';
      renderer.domElement.style.height = '100%';
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      container.appendChild(renderer.domElement);
      if (transparent) renderer.setClearAlpha(0); else renderer.setClearColor(0x000000, 1);

      const uniforms = {
        uResolution:      { value: new THREE.Vector2(0, 0) },
        uTime:            { value: 0 },
        uColor:           { value: new THREE.Color(color) },
        uClickPos:        { value: Array.from({ length: MAX_CLICKS }, () => new THREE.Vector2(-1, -1)) },
        uClickTimes:      { value: new Float32Array(MAX_CLICKS) },
        uShapeType:       { value: SHAPE_MAP[variant] ?? 0 },
        uPixelSize:       { value: pixelSize * renderer.getPixelRatio() },
        uScale:           { value: patternScale },
        uDensity:         { value: patternDensity },
        uPixelJitter:     { value: pixelSizeJitter },
        uEnableRipples:   { value: enableRipples ? 1 : 0 },
        uRippleSpeed:     { value: rippleSpeed },
        uRippleThickness: { value: rippleThickness },
        uRippleIntensity: { value: rippleIntensityScale },
        uEdgeFade:        { value: edgeFade },
      };
      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      const material = new THREE.ShaderMaterial({
        vertexShader: VERTEX_SRC, fragmentShader: FRAGMENT_SRC,
        uniforms, transparent: true, depthTest: false, depthWrite: false,
        glslVersion: THREE.GLSL3,
      });
      const quadGeom = new THREE.PlaneGeometry(2, 2);
      const quad = new THREE.Mesh(quadGeom, material);
      scene.add(quad);
      const clock = new THREE.Clock();

      const setSize = () => {
        const w = container.clientWidth || 1;
        const h = container.clientHeight || 1;
        renderer.setSize(w, h, false);
        uniforms.uResolution.value.set(renderer.domElement.width, renderer.domElement.height);
        if (threeRef.current?.composer) threeRef.current.composer.setSize(renderer.domElement.width, renderer.domElement.height);
        uniforms.uPixelSize.value = pixelSize * renderer.getPixelRatio();
      };
      setSize();
      const ro = new ResizeObserver(setSize);
      ro.observe(container);

      const randomFloat = () => {
        if (typeof window !== 'undefined' && window.crypto?.getRandomValues) {
          const u32 = new Uint32Array(1); window.crypto.getRandomValues(u32);
          return u32[0] / 0xffffffff;
        }
        return Math.random();
      };
      const timeOffset = randomFloat() * 1000;

      let composer; let touch; let liquidEffect;
      if (liquid) {
        touch = createTouchTexture();
        touch.radiusScale = liquidRadius;
        composer = new EffectComposer(renderer);
        const renderPass = new RenderPass(scene, camera);
        liquidEffect = createLiquidEffect(touch.texture, { strength: liquidStrength, freq: liquidWobbleSpeed });
        const effectPass = new EffectPass(camera, liquidEffect);
        effectPass.renderToScreen = true;
        composer.addPass(renderPass); composer.addPass(effectPass);
      }
      if (noiseAmount > 0) {
        if (!composer) { composer = new EffectComposer(renderer); composer.addPass(new RenderPass(scene, camera)); }
        const noiseEffect = new Effect(
          'NoiseEffect',
          `uniform float uTime; uniform float uAmount; float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453);} void mainUv(inout vec2 uv){} void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){ float n=hash(floor(uv*vec2(1920.0,1080.0))+floor(uTime*60.0)); float g=(n-0.5)*uAmount; outputColor=inputColor+vec4(vec3(g),0.0);} `,
          { uniforms: new Map([['uTime', new THREE.Uniform(0)], ['uAmount', new THREE.Uniform(noiseAmount)]]) }
        );
        const noisePass = new EffectPass(camera, noiseEffect);
        noisePass.renderToScreen = true;
        if (composer && composer.passes.length > 0) composer.passes.forEach(p => (p.renderToScreen = false));
        composer.addPass(noisePass);
      }
      if (composer) composer.setSize(renderer.domElement.width, renderer.domElement.height);

      const mapToPixels = e => {
        const rect = renderer.domElement.getBoundingClientRect();
        const scaleX = renderer.domElement.width / rect.width;
        const scaleY = renderer.domElement.height / rect.height;
        const fx = (e.clientX - rect.left) * scaleX;
        const fy = (rect.height - (e.clientY - rect.top)) * scaleY;
        return { fx, fy, w: renderer.domElement.width, h: renderer.domElement.height };
      };
      const onPointerDown = e => {
        const { fx, fy } = mapToPixels(e);
        const ix = threeRef.current?.clickIx ?? 0;
        uniforms.uClickPos.value[ix].set(fx, fy);
        uniforms.uClickTimes.value[ix] = uniforms.uTime.value;
        if (threeRef.current) threeRef.current.clickIx = (ix + 1) % MAX_CLICKS;
      };
      const onPointerMove = e => {
        if (!touch) return;
        const { fx, fy, w, h } = mapToPixels(e);
        touch.addTouch({ x: fx / w, y: fy / h });
      };
      renderer.domElement.addEventListener('pointerdown', onPointerDown, { passive: true });
      renderer.domElement.addEventListener('pointermove', onPointerMove, { passive: true });

      let raf = 0;
      const animate = () => {
        if (autoPauseOffscreen && !visibilityRef.current.visible) { raf = requestAnimationFrame(animate); return; }
        uniforms.uTime.value = timeOffset + clock.getElapsedTime() * speedRef.current;
        if (liquidEffect) liquidEffect.uniforms.get('uTime').value = uniforms.uTime.value;
        if (composer) {
          if (touch) touch.update();
          composer.passes.forEach(p => {
            const effs = p.effects;
            if (effs) effs.forEach(eff => { const u = eff.uniforms?.get('uTime'); if (u) u.value = uniforms.uTime.value; });
          });
          composer.render();
        } else renderer.render(scene, camera);
        raf = requestAnimationFrame(animate);
      };
      raf = requestAnimationFrame(animate);

      threeRef.current = { renderer, scene, camera, material, clock, clickIx: 0, uniforms, resizeObserver: ro, raf, quad, timeOffset, composer, touch, liquidEffect };
    } else {
      const t = threeRef.current;
      t.uniforms.uShapeType.value = SHAPE_MAP[variant] ?? 0;
      t.uniforms.uPixelSize.value = pixelSize * t.renderer.getPixelRatio();
      t.uniforms.uColor.value.set(color);
      t.uniforms.uScale.value = patternScale;
      t.uniforms.uDensity.value = patternDensity;
      t.uniforms.uPixelJitter.value = pixelSizeJitter;
      t.uniforms.uEnableRipples.value = enableRipples ? 1 : 0;
      t.uniforms.uRippleIntensity.value = rippleIntensityScale;
      t.uniforms.uRippleThickness.value = rippleThickness;
      t.uniforms.uRippleSpeed.value = rippleSpeed;
      t.uniforms.uEdgeFade.value = edgeFade;
      if (transparent) t.renderer.setClearAlpha(0); else t.renderer.setClearColor(0x000000, 1);
      if (t.liquidEffect) {
        const uStrength = t.liquidEffect;
        if (uStrength) uStrength.value = liquidStrength;
        const uFreq = t.liquidEffect.uniforms.get('uFreq');
        if (uFreq) uFreq.value = liquidWobbleSpeed;
      }
      if (t.touch) t.touch.radiusScale = liquidRadius;
    }
    prevConfigRef.current = cfg;
    return () => {
      if (threeRef.current && mustReinit) return;
      if (!threeRef.current) return;
      const t = threeRef.current;
      t.resizeObserver?.disconnect();
      cancelAnimationFrame(t.raf);
      t.quad?.geometry.dispose();
      t.material.dispose();
      t.composer?.dispose();
      t.renderer.dispose();
      t.renderer.forceContextLoss();
      if (t.renderer.domElement.parentElement === container) container.removeChild(t.renderer.domElement);
      threeRef.current = null;
    };
  }, [
    antialias, liquid, noiseAmount, pixelSize, patternScale, patternDensity,
    enableRipples, rippleIntensityScale, rippleThickness, rippleSpeed,
    pixelSizeJitter, edgeFade, transparent, liquidStrength, liquidRadius,
    liquidWobbleSpeed, autoPauseOffscreen, variant, color, speed,
  ]);

  return (
    <div
      ref={containerRef}
      className={`pixel-blast-container ${className ?? ''}`}
      style={style}
      aria-label="Apos interactive background"
    />
  );
};

export default PixelBlast;
```

### 5d. Background wrapper — `src/components/Background.jsx`

Wraps `PixelBlast` and adds the three overlay layers: central radial glow, two readability gradients, and three vertical grid lines.

```jsx
import PixelBlast from './PixelBlast'

export default function Background() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-ink">
      {/* Interactive WebGL pixel-dithering background */}
      <div className="absolute inset-0">
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="#5ed29c"
          patternScale={3}
          patternDensity={1.7}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          speed={0.6}
          edgeFade={0.25}
          transparent
        />
      </div>

      {/* Central mint ellipse glow with 25px gaussian blur */}
      <svg
        className="pointer-events-none absolute left-1/2 top-[-12%] h-[55%] w-[120%] -translate-x-1/2 sm:w-[80%]"
        viewBox="0 0 800 400"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <filter id="apos-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="25" />
          </filter>
          <radialGradient id="apos-glow-fill" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#5ed29c" stopOpacity="0.35" />
            <stop offset="55%"  stopColor="#0f6e5a" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#070b0a" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="400" cy="180" rx="360" ry="120" fill="url(#apos-glow-fill)" filter="url(#apos-glow)" />
      </svg>

      {/* Left-to-right dark gradient for headline readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/40 to-transparent" />
      {/* Bottom-up gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />

      {/* Three thin vertical grid lines at 25% / 50% / 75% (desktop only) */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="absolute inset-y-0 left-1/4 w-px bg-white/10" />
        <div className="absolute inset-y-0 left-1/2 w-px bg-white/10" />
        <div className="absolute inset-y-0 left-3/4 w-px bg-white/10" />
      </div>
    </div>
  )
}
```

**Stacking note (critical):** `Background` is `absolute inset-0 z-0`. Hero content sits above it as `relative z-10`. Do **not** use `-z-10` on the background — the root App `bg-ink` would paint over the WebGL canvas and the field would be invisible.

---

## LAYER 6 — SHARED COMPONENTS

This build has **no animation framework** and **no shared wrapper components** beyond the four files in `src/components/`. The only motion primitive is the CSS `.animate-fade-up` utility from Layer 4b — applied directly via Tailwind className.

File tree:

```
src/
  main.jsx
  App.jsx
  index.css
  components/
    Background.jsx        ← from Layer 5d
    PixelBlast.jsx        ← from Layer 5c
    PixelBlast.css        ← from Layer 5b
    Navbar.jsx            ← from Layer 7 §1
    Hero.jsx              ← from Layer 7 §2
    LiquidGlassCard.jsx   ← from Layer 7 §3
```

`src/main.jsx`:

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

`src/App.jsx`:

```jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink text-white">
      <Navbar />
      <Hero />
    </div>
  )
}
```

---

## LAYER 7 — SECTIONS

### SECTION 1 — NAVBAR (floating glass pill)

**Block 1 · Container**
- Wrapper: `<header className="absolute inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6">`
- Inner nav (the glass pill): `<nav className="liquid-glass mx-auto flex max-w-7xl items-center justify-between rounded-full bg-ink/25 px-5 py-3.5 sm:px-7 lg:px-8">`

**Block 2 · Background**
- The `liquid-glass` class supplies the glass effect (blur(4px) + gradient border).
- `bg-ink/25` overrides the components-layer background-color to **25% ink** (lighter than the card's 50%, so the pill reads as a subtle hairline-bordered scrim against the PixelBlast).
- No other overlay.

**Block 3 · Layout primitive**
- Flex row, `justify-between`, `items-center`. Three slot columns: logo (left) · desktop menu (center, hidden on mobile) · CTA + hamburger (right).

**Block 4 · Elements**

> **Logo** (left slot)
> - Component: `<a href="#" className="flex items-center gap-2" aria-label="Apos home">`
> - SVG (24×24, viewBox 0 0 32 32): single white path `<path d="M16 5 L27 27 H21.6 L16 14 L10.4 27 H5 Z" fill="#ffffff" />` — a minimalist white "A" mark.
> - Wordmark: `<span className="font-inter text-lg font-extrabold tracking-tight text-white">Apos</span>`

> **Desktop menu** (center slot, `hidden md:flex`)
> - `<ul className="hidden items-center gap-10 md:flex">` — gap-10 between links.
> - Four links in order: `SWAP` (`#swap`), `BRIDGE` (`#bridge`), `DOCS` (`#docs`), `DAO` (`#dao`).
> - Each link: `className="font-inter text-base font-medium text-white/80 transition-colors duration-200 hover:text-mint"`.
> - Labels are exact UPPERCASE strings (already uppercase in source — do not apply `uppercase` Tailwind utility).

> **Connect Wallet** (right slot, `hidden md:inline-block`)
> - `<a href="#launch" className="hidden rounded-full border border-white/15 px-5 py-2 font-inter text-sm font-semibold text-white transition-colors duration-200 hover:border-mint hover:text-mint md:inline-block">Connect Wallet</a>`

> **Mobile hamburger** (right slot, `md:hidden`)
> - `<button type="button" onClick={() => setOpen(true)} className="text-white md:hidden" aria-label="Open menu"><Menu size={26} /></button>`
> - Icon: `Menu` from `lucide-react`, size 26.

> **Mobile overlay** (sibling of `<nav>`, full-screen)
> - Container: `<div className={`fixed inset-0 z-50 bg-ink/98 backdrop-blur-md transition-opacity duration-300 md:hidden ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}>`
> - Header row: same `<Logo />` left, `<X size={26} />` button right, both inside `flex items-center justify-between px-6 py-6`.
> - Link list: `<ul className="flex flex-col gap-2 px-6 pt-10">` — each link `block border-b border-white/10 py-5 font-inter text-2xl font-semibold text-white transition-colors hover:text-mint`, `onClick` closes the menu.
> - Bottom CTA inside the overlay: same four links + `<a href="#launch" className="block rounded-full bg-mint px-6 py-4 text-center font-inter font-bold uppercase tracking-wide text-ink">Connect Wallet</a>` wrapped in `<div className="px-6 pt-10">`.

**Block 5 · Animation**
- None on the navbar. State change (`open`) uses CSS `transition-opacity duration-300` on the overlay only.

**Block 6 · Responsive notes**
- `<md` (mobile): hamburger visible, desktop menu + Connect Wallet hidden. Overlay handles nav.
- `≥md`: desktop menu + Connect Wallet visible, hamburger hidden.
- `≥sm`: header padding bumps from `px-4 pt-4` to `px-6 pt-6` (gives the pill more breathing room on tablet+).
- `≥lg`: nav inner horizontal padding `lg:px-8`.

**Block 7 · Copy (verbatim)**
```
Apos
SWAP
BRIDGE
DOCS
DAO
Connect Wallet
```

---

### SECTION 2 — HERO

**Block 1 · Container**
- `<section className="relative flex min-h-screen flex-col overflow-hidden">`
- Immediately renders `<Background />` as the first child (z-0, see Layer 5d).
- Content wrapper: `<div className="pointer-events-none relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pb-20 pt-40 lg:px-10">`
  - `pointer-events-none` is **intentional** — it lets clicks fall through the empty content area to the `PixelBlast` canvas below so the ripple effect fires on every click in the hero. There are no interactive elements in the hero in this build; if you add buttons later, give them `pointer-events-auto`.
- Inner column: `<div className="max-w-2xl">` — confines text to the left two-thirds, leaving the right side as visible pixel field.

**Block 2 · Background**
- Provided by `Background.jsx` (Layer 5d). No section-local overlays.
- Stacking: Background z-0, content z-10.

**Block 3 · Layout primitive**
- Vertical stack inside `max-w-2xl`, top-to-bottom:
  1. `LiquidGlassCard` (200×200 pill, translated up 50px so it visually overlaps where the eyebrow would otherwise be)
  2. Eyebrow
  3. Headline
  4. Description
  5. Trust stats row

**Block 4 · Elements**

> **Liquid Glass Card** — see Section 3 below (component lives in its own file).

> **Eyebrow**
> - `<p className="animate-fade-up font-jakarta text-[11px] font-bold uppercase tracking-[0.25em] text-mint">Omnichain Liquidity Protocol</p>`
> - 11px Plus Jakarta Sans, bold, uppercase, tracking 0.25em, mint color.

> **Main Headline**
> - `<h1 className="animate-fade-up mt-4 font-inter text-[40px] font-extrabold uppercase leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[72px]">Swap across every chain<span className="text-mint">.</span></h1>`
> - Inter ExtraBold 800, uppercase, tracking-tight, leading 1.02.
> - Sizes: 40px mobile → 60px (`sm:text-6xl`) → 72px desktop (`lg:`).
> - **The trailing period is its own `<span className="text-mint">.</span>` — this is the only mint character in the headline.**

> **Description**
> - `<p className="animate-fade-up mt-6 max-w-prose font-inter text-sm leading-relaxed text-white/70">Move any asset across 40+ blockchains in seconds. Apos routes through deep aggregated liquidity for near-zero slippage — fully trustless, audited, and built for the multichain era.</p>`
> - Inter 14px (`text-sm`), 70% white, leading-relaxed, max-width 512px (the `prose` token from Layer 3).

> **Trust stats** (row of three)
> - Wrapper: `<div className="animate-fade-up mt-14 flex flex-wrap gap-x-10 gap-y-4">`
> - Three items, mapped from:
>   ```js
>   [{ value: '40+', label: 'Chains connected' },
>    { value: '$2.4B', label: 'Volume bridged' },
>    { value: '<8s', label: 'Avg. settlement' }]
>   ```
> - Each item:
>   - Value: `<div className="font-inter text-2xl font-extrabold text-white">{stat.value}</div>`
>   - Label: `<div className="font-inter text-xs uppercase tracking-wide text-white/50">{stat.label}</div>`

**Block 5 · Animation**
- Every direct child of `max-w-2xl` (card wrapper, eyebrow, headline, description, stats) gets `animate-fade-up`. The single CSS keyframe (0.9s `cubic-bezier(0.16, 1, 0.3, 1)`, `opacity 0 → 1`, `translateY(24px → 0)`) plays once on mount. No staggering — they all start together. This is intentional: the build favors a single confident reveal over orchestrated motion.

**Block 6 · Responsive notes**
- Mobile: headline 40px, content full width inside `px-6`, hamburger nav, grid lines hidden, glow svg slightly wider (`w-[120%]`).
- `≥sm`: headline 60px, glow `w-[80%]`.
- `≥lg`: headline 72px, three vertical grid lines visible, inner section padding `lg:px-10`.

**Block 7 · Copy (verbatim)**
```
[ 2026 ]
Audited by Industry security firms
Battle-tested smart contracts secured across every supported chain.

Omnichain Liquidity Protocol
Swap across every chain.
Move any asset across 40+ blockchains in seconds. Apos routes through deep aggregated liquidity for near-zero slippage — fully trustless, audited, and built for the multichain era.

40+     Chains connected
$2.4B   Volume bridged
<8s     Avg. settlement
```

---

### SECTION 3 — LIQUID GLASS CARD (component)

A 200×200 floating glass tile that sits above the headline, shifted up by 50px so it visually anchors the hero's top-left area.

**Block 1 · Container**
- Outer wrapper: `<div className="-translate-y-[50px]">` — the negative translate is the only thing pulling the card up out of normal flow.
- Card: `<div className="liquid-glass flex h-[200px] w-[200px] flex-col justify-between rounded-2xl p-5">`
- Fixed 200×200, rounded-2xl (16px), inner padding 20px, flex column with `justify-between` so the three children push to top / center / bottom of the tile.

**Block 2 · Background**
- The card uses the unmodified `.liquid-glass` class: 50% ink scrim, blur(4px), inset top-highlight, gradient border via `::before`. No additional Tailwind background overrides — the card stays darker than the navbar.

**Block 3 · Elements** (three children, top to bottom)

> **Date tag**
> - `<span className="font-jakarta text-[14px] font-medium tracking-widest text-mint">[ 2026 ]</span>`
> - Plus Jakarta Sans 14px, medium, very wide tracking, mint. Brackets and spaces are part of the literal string: `[ 2026 ]` (one space inside each bracket).

> **Card headline (with italic serif accent)**
> - `<h3 className="font-inter text-[18px] font-semibold leading-snug text-white">Audited by <span className="font-serif text-[22px] italic text-mint">Industry</span> security firms</h3>`
> - Inter 18px semibold for the white text; the single word `Industry` is wrapped in `<span className="font-serif text-[22px] italic text-mint">` — Instrument Serif italic, 22px, mint. This bump in size + style + color is the only "fancy" typographic moment in the design.

> **Description**
> - `<p className="font-inter text-[11px] leading-relaxed text-white/55">Battle-tested smart contracts secured across every supported chain.</p>`
> - 11px, leading-relaxed, white at 55% opacity.

**Block 4 · Animation**
- The card is wrapped by the parent's `animate-fade-up` in the Hero, so it inherits the same single reveal. No internal animation.

---

## LAYER 8 — ANIMATION STANDARDS

Apos ships with **one** animation primitive (no framer-motion, no GSAP, no scroll-triggered effects).

```css
.animate-fade-up {
  animation: fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
}
@keyframes fade-up {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

**Apply to:** hero glass card wrapper, eyebrow, headline, description, stats row. All five start simultaneously on mount — no stagger. The 0.9s duration and the high-ease cubic-bezier produce a long, slow settle that reads as confident rather than choppy.

**Apply nowhere else:** Navbar, navbar overlay, glow svg, grid lines, PixelBlast canvas all remain static at mount. The only other motion is:
- The mobile overlay's `transition-opacity duration-300` when `open` toggles.
- The link/button color transitions: `transition-colors duration-200`.
- The PixelBlast canvas itself, which animates continuously via WebGL (FBM noise drift + click-triggered ripples).

---

## LAYER 9 — RESPONSIVE STANDARDS

- **Mobile-first.** Base classes target mobile (`<640px`); scale up with `sm:` (640) / `md:` (768) / `lg:` (1024) / `xl:` (1280) breakpoints.
- **Hero headline:** discrete steps `text-[40px]` → `sm:text-6xl` (60px) → `lg:text-[72px]`. No `clamp()` used in this build — discrete breakpoints only.
- **Container padding:** Hero uses `px-6 lg:px-10`. Navbar header uses `px-4 pt-4 sm:px-6 sm:pt-6`. Navbar inner pill uses `px-5 py-3.5 sm:px-7 lg:px-8`.
- **Vertical rhythm in hero:** `pt-40 pb-20` — generous top to clear the floating navbar, smaller bottom because the section is single-screen.
- **Grid lines (Background):** `hidden lg:block` — desktop only. On tablet/mobile the PixelBlast pattern carries the layout.
- **Glow svg:** `w-[120%]` on mobile, narrows to `sm:w-[80%]` on tablet+ so it doesn't dominate large screens.
- **Mobile menu:** required (`>3` nav links). Slide-in is implemented as a full-screen `fixed inset-0` overlay with opacity transition. No slide transform — opacity only.

---

## LAYER 10 — ICON SET

This build uses **only** two icons from `lucide-react`. Do not import anything else:

```
- Menu         → mobile hamburger trigger (size 26)
- X            → mobile overlay close button (size 26)
```

No icons appear in the desktop UI. No `ArrowRight`, no `Sparkles`, no `Check` — if a future section adds a CTA, the icon must be approved before import.

---

## LAYER 11 — REPRODUCE-EXACTLY CLAUSE

Reproduce exactly. Do not:
- Substitute fonts ("similar to Inter" is not Inter; "Cormorant Garamond" is not Instrument Serif).
- Round color values (`#5ed29c` is the exact mint; not `#5ad`, not `#5fdc9d`).
- Shorten copy (the description is the exact 38-word string in Section 2 Block 7; the card headline is the exact phrase with `Industry` italicized).
- Skip the WebGL background and replace with a static gradient — the `PixelBlast` canvas is the centerpiece.
- Use `-z-10` on Background — content uses `relative z-10`, Background uses `z-0`, otherwise the App root `bg-ink` paints over the canvas and the field disappears.
- Apply `pointer-events-auto` to the Hero content wrapper — clicks must fall through to the canvas so ripples fire. Only interactive elements (currently none in hero) get `pointer-events-auto`.
- Add framer-motion, GSAP, or scroll-triggered animation. The single CSS `.animate-fade-up` is the entire animation language.
- Render the trailing period of the headline in white. It is **always** mint, in its own `<span>`.
- Use any color outside `ink` (`#070b0a`), `mint` (`#5ed29c`), and white-with-opacity. No purple, indigo, blue, neon green, orange.
- Wrap `Industry` in anything other than `font-serif italic text-mint text-[22px]`. That single word is the design's hero moment.

If a constraint conflicts with framework limitations, **clamp to the nearest valid value and note the substitution as a comment** — do not silently change.

---

# CUSTOMIZATION CHEAT SHEET

| Slot | Where | What to swap |
|---|---|---|
| `BRAND_NAME` | Layer 1, Logo path, Navbar wordmark, hero copy | `Apos` → your brand |
| `mint` color | `tailwind.config.js`, PixelBlast `color`, glow `stopColor` | `#5ed29c` → your accent hex |
| `ink` color | `tailwind.config.js`, body bg, `.liquid-glass` bg, `bg-ink/25` on nav | `#070b0a` → your dark hex |
| Headline | Hero Section 2, Block 4 | `Swap across every chain.` — period must stay mint |
| Eyebrow | Hero Section 2, Block 4 | `Omnichain Liquidity Protocol` |
| Description | Hero Section 2, Block 4 | the 38-word paragraph |
| Stats | Hero Section 2, Block 4 | `40+ / $2.4B / <8s` and labels |
| Card line | Liquid Glass Card Section 3, Block 3 | `Audited by Industry security firms` — keep `Industry` italic serif mint |
| Card date | Liquid Glass Card | `[ 2026 ]` |
| Nav links | Navbar Block 4 | `SWAP / BRIDGE / DOCS / DAO` |
| PixelBlast `color` prop | `Background.jsx` | match accent |

**Everything else (Layers 4, 5b, 5c, 6, 8, 9, 10, 11) is INVARIANT.** Keep it verbatim — that is what makes the output recognizably Apos quality.

---

# RECREATE IN 60 SECONDS

```bash
mkdir apos && cd apos
npm init -y
npm install react react-dom three postprocessing lucide-react
npm install -D vite @vitejs/plugin-react tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
# create files per Layers 2–7
npm run dev
```

Open `http://localhost:5173`. The dithered mint pixel field should drift in the background, the navbar pill should float at the top, and a single floating glass tile should sit above the "SWAP ACROSS EVERY CHAIN." headline with a mint period at the end. Click anywhere — a ripple wave should propagate through the pixel field.
