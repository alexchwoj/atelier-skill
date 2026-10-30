# 3DVIEW — Real-Time 3D & Virtual Reality

> **3DVIEW** hero. Anything inside `{{ DOUBLE_BRACES }}` is a customization slot; everything outside is **invariant** — change only if you know why.
>
> It reproduces the live hero exactly: interactive WebGL grid-scan backdrop, liquid-glass nav, gradient headline, and the full file tree.

---

## LAYER 0 — META

```yaml
asset_id: 3dview-hero-spatial-01
category: hero
aesthetic: liquid-glass / cinematic-tech
industry: spatial-computing / vr
tone: premium / cinematic
license: standard
version: 1.0
last_updated: 2026-06-01
```

---

## LAYER 1 — OPENING DECLARATION

Build a **hero section** for **3DVIEW** — a **real-time spatial-computing platform that turns physical spaces into navigable 3D virtual reality**.

Use the following **pinned** tech stack (do not substitute):

- **React 18 + Vite** (plain JSX — no TypeScript)
- **Vanilla CSS** (CSS custom properties + per-component stylesheets — no Tailwind, no CSS-in-JS)
- **three** (WebGL renderer + shader material for the live backdrop)
- **postprocessing** (bloom + chromatic aberration passes)
- **face-api.js** (optional, opt-in face-tracking — disabled by default)

The aesthetic is **dark cinematic with a violet liquid-glass design system: a full-screen interactive grid-scan field rendered in WebGL, a floating frosted-glass navbar, and a soft gradient headline.** `#07060b` is the global background. Default text color is `#f4f1fb`. The single accent is violet (`#a89fff` → `#ff9ffc`). **Do not use orange, lime/neon green, or any warm/earth tones anywhere.**

> **Stack note:** This asset ships vanilla CSS + JSX + WebGL on purpose — the backdrop is a custom fragment shader, not a video or image. There is **no external background asset and no third-party CDN media**; everything renders in-browser. Do not introduce a video file or swap in a hosted clip.

---

## LAYER 2 — FONTS

Load via Google Fonts in `index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Open+Sans:wght@400;500;600;700&display=swap');
```

**Pairing (fixed for 3DVIEW):**
- **Montserrat** (700 / 800) — brand wordmark + headline (display)
- **Open Sans** (400 / 500 / 600 / 700) — body copy, nav links, buttons

Usage map:
- Brand wordmark → `Montserrat`, weight **700**, 18px, letter-spacing `-0.01em`
- Hero headline → `Montserrat`, weight **800**, letter-spacing `-0.025em`
- Everything else (body / nav / CTA) → `Open Sans`

Global base:
```css
html, body { font-family: 'Open Sans', system-ui, -apple-system, sans-serif; -webkit-font-smoothing: antialiased; }
```

**Builder note:** if a requested weight is unavailable, clamp **down** to the nearest available weight rather than synthesizing.

---

## LAYER 3 — COLOR SYSTEM

Single shipped theme. Define as CSS custom properties on `:root` in `index.css` (hex):

```css
:root {
  --bg:        #07060b;   /* global background */
  --bg-2:      #0b0912;   /* deeper panel */
  --ink:       #f4f1fb;   /* primary text */
  --ink-dim:   #a39db8;   /* secondary text, nav links, lede */
  --ink-faint: #6f6985;   /* tertiary text */
  --accent:    #a89fff;   /* primary violet — scan beam, CTA gradient start */
  --accent-2:  #ff9ffc;   /* magenta — gradient end */
  --line:      #2f293a;   /* grid line color */
  --radius:    16px;      /* default border radius */
}
```

Color roles:
- **Grid lines** → `--line` (`#2F293A`)
- **Scan beam / glow** → `--accent` (`#a89fff`)
- **Headline accent + primary CTA gradient** → `--accent` → `--accent-2` (`linear-gradient(100deg, …)`)
- **Glass tints / hairlines** → `rgba(255,255,255, …)` and `rgba(168,159,255, …)`

---

## LAYER 4 — CUSTOM CSS UTILITIES (the "design DNA")

**Invariant block.** Paste verbatim — this is what gives 3DVIEW its signature feel.

### 4a. Liquid-glass navbar (signature surface)

```css
.hero__nav {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.03) 48%,
    rgba(168, 159, 255, 0.06) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 999px;
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  backdrop-filter: blur(20px) saturate(180%);
  box-shadow:
    0 8px 32px -8px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.22),
    inset 0 -1px 0 rgba(255, 255, 255, 0.04);
}
/* glossy top sheen */
.hero__nav::before {
  content: '';
  position: absolute;
  inset: 1px 1px auto 1px;
  height: 45%;
  border-radius: 999px 999px 40% 40% / 999px 999px 100% 100%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0));
  pointer-events: none;
}
```

### 4b. Legibility veil (stacked over the WebGL backdrop)

```css
.hero__veil {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background:
    radial-gradient(70% 55% at 22% 42%, rgba(7, 6, 11, 0.82) 0%, rgba(7, 6, 11, 0) 60%),
    linear-gradient(180deg, rgba(7, 6, 11, 0.55) 0%, rgba(7, 6, 11, 0) 22%),
    linear-gradient(0deg, var(--bg) 2%, rgba(7, 6, 11, 0) 38%);
}
```

### 4c. Gradient headline accent

```css
.hero__title-accent {
  background: linear-gradient(100deg, var(--accent) 0%, var(--accent-2) 100%);
  -webkit-background-clip: text;
          background-clip: text;
  color: transparent;
}
```

### 4d. Entry animation (pure CSS — no motion library)

```css
@keyframes rise {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

### 4e. Pointer pass-through (makes the backdrop interactive under the content)

```css
/* content layer ignores the mouse so the WebGL field receives it… */
.hero__inner { pointer-events: none; }
/* …except actual clickable elements */
.hero__actions, .hero__cta { pointer-events: auto; }
```

---

## LAYER 5 — BACKGROUND ASSET

**Option C — WebGL shader field (our own component, hero only).** No video, no image, no external URL. The backdrop is a custom orthographic full-screen quad running a raymarched grid + animated scan beam, with optional bloom/chromatic-aberration post.

Component: `SpatialGrid` (source in Layer 6). Mount it absolutely filling the hero, behind the veil:

```jsx
<div className="hero__canvas" aria-hidden="true">
  <SpatialGrid
    sensitivity={0.6}
    lineThickness={1}
    linesColor="#2F293A"
    gridScale={0.1}
    scanColor="#a89fff"
    scanOpacity={0.45}
    enablePost
    bloomIntensity={0.7}
    chromaticAberration={0.0022}
    noiseIntensity={0.012}
    scanDirection="pingpong"
    scanDuration={2.4}
    scanDelay={1.6}
    scanGlow={0.6}
  />
</div>
```

Stacking order inside the hero: `.hero__canvas` z-0 → `.hero__veil` z-1 → nav/content z-3.

**Interaction:** the field reacts to mouse position (parallax skew + tilt + yaw) over the *entire* hero, because the content layer passes pointer events through (Layer 4e). Optional face-tracking (`enableWebcam`) and device-orientation (`enableGyro`) are **off by default**.

---

## LAYER 6 — SHARED COMPONENTS

### `SpatialGrid` — interactive WebGL grid-scan backdrop

Self-contained component. Create `src/components/SpatialGrid.jsx` and `src/components/SpatialGrid.css`. Optional webcam weights are self-hosted at `/models` (drop the tiny-face-detector + 68-tiny-landmark weights into `public/models/` only if you enable `enableWebcam`; otherwise nothing is fetched).

**`src/components/SpatialGrid.jsx`**
```jsx
import * as faceapi from 'face-api.js';
import { BloomEffect, ChromaticAberrationEffect, EffectComposer, EffectPass, RenderPass } from 'postprocessing';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import './SpatialGrid.css';

const vert = `
varying vec2 vUv;
void main(){
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

const frag = `
precision highp float;
uniform vec3 iResolution;
uniform float iTime;
uniform vec2 uSkew;
uniform float uTilt;
uniform float uYaw;
uniform float uLineThickness;
uniform vec3 uLinesColor;
uniform vec3 uScanColor;
uniform float uGridScale;
uniform float uLineStyle;
uniform float uLineJitter;
uniform float uScanOpacity;
uniform float uScanDirection;
uniform float uNoise;
uniform float uBloomOpacity;
uniform float uScanGlow;
uniform float uScanSoftness;
uniform float uPhaseTaper;
uniform float uScanDuration;
uniform float uScanDelay;
varying vec2 vUv;

uniform float uScanStarts[8];
uniform float uScanCount;

const int MAX_SCANS = 8;

float smoother01(float a, float b, float x){
  float t = clamp((x - a) / max(1e-5, (b - a)), 0.0, 1.0);
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 p = (2.0 * fragCoord - iResolution.xy) / iResolution.y;

    vec3 ro = vec3(0.0);
    vec3 rd = normalize(vec3(p, 2.0));

    float cR = cos(uTilt), sR = sin(uTilt);
    rd.xy = mat2(cR, -sR, sR, cR) * rd.xy;

    float cY = cos(uYaw), sY = sin(uYaw);
    rd.xz = mat2(cY, -sY, sY, cY) * rd.xz;

    vec2 skew = clamp(uSkew, vec2(-0.7), vec2(0.7));
    rd.xy += skew * rd.z;

    vec3 color = vec3(0.0);
  float minT = 1e20;
  float gridScale = max(1e-5, uGridScale);
    float fadeStrength = 2.0;
    vec2 gridUV = vec2(0.0);

  float hitIsY = 1.0;
    for (int i = 0; i < 4; i++)
    {
        float isY = float(i < 2);
        float pos = mix(-0.2, 0.2, float(i)) * isY + mix(-0.5, 0.5, float(i - 2)) * (1.0 - isY);
        float num = pos - (isY * ro.y + (1.0 - isY) * ro.x);
        float den = isY * rd.y + (1.0 - isY) * rd.x;
        float t = num / den;
        vec3 h = ro + rd * t;

        float depthBoost = smoothstep(0.0, 3.0, h.z);
        h.xy += skew * 0.15 * depthBoost;

    bool use = t > 0.0 && t < minT;
    gridUV = use ? mix(h.zy, h.xz, isY) / gridScale : gridUV;
    minT = use ? t : minT;
    hitIsY = use ? isY : hitIsY;
    }

    vec3 hit = ro + rd * minT;
    float dist = length(hit - ro);

  float jitterAmt = clamp(uLineJitter, 0.0, 1.0);
  if (jitterAmt > 0.0) {
    vec2 j = vec2(
      sin(gridUV.y * 2.7 + iTime * 1.8),
      cos(gridUV.x * 2.3 - iTime * 1.6)
    ) * (0.15 * jitterAmt);
    gridUV += j;
  }
  float fx = fract(gridUV.x);
  float fy = fract(gridUV.y);
  float ax = min(fx, 1.0 - fx);
  float ay = min(fy, 1.0 - fy);
  float wx = fwidth(gridUV.x);
  float wy = fwidth(gridUV.y);
  float halfPx = max(0.0, uLineThickness) * 0.5;

  float tx = halfPx * wx;
  float ty = halfPx * wy;

  float aax = wx;
  float aay = wy;

  float lineX = 1.0 - smoothstep(tx, tx + aax, ax);
  float lineY = 1.0 - smoothstep(ty, ty + aay, ay);
  if (uLineStyle > 0.5) {
    float dashRepeat = 4.0;
    float dashDuty = 0.5;
    float vy = fract(gridUV.y * dashRepeat);
    float vx = fract(gridUV.x * dashRepeat);
    float dashMaskY = step(vy, dashDuty);
    float dashMaskX = step(vx, dashDuty);
    if (uLineStyle < 1.5) {
      lineX *= dashMaskY;
      lineY *= dashMaskX;
    } else {
      float dotRepeat = 6.0;
      float dotWidth = 0.18;
      float cy = abs(fract(gridUV.y * dotRepeat) - 0.5);
      float cx = abs(fract(gridUV.x * dotRepeat) - 0.5);
      float dotMaskY = 1.0 - smoothstep(dotWidth, dotWidth + fwidth(gridUV.y * dotRepeat), cy);
      float dotMaskX = 1.0 - smoothstep(dotWidth, dotWidth + fwidth(gridUV.x * dotRepeat), cx);
      lineX *= dotMaskY;
      lineY *= dotMaskX;
    }
  }
  float primaryMask = max(lineX, lineY);

  vec2 gridUV2 = (hitIsY > 0.5 ? hit.xz : hit.zy) / gridScale;
  if (jitterAmt > 0.0) {
    vec2 j2 = vec2(
      cos(gridUV2.y * 2.1 - iTime * 1.4),
      sin(gridUV2.x * 2.5 + iTime * 1.7)
    ) * (0.15 * jitterAmt);
    gridUV2 += j2;
  }
  float fx2 = fract(gridUV2.x);
  float fy2 = fract(gridUV2.y);
  float ax2 = min(fx2, 1.0 - fx2);
  float ay2 = min(fy2, 1.0 - fy2);
  float wx2 = fwidth(gridUV2.x);
  float wy2 = fwidth(gridUV2.y);
  float tx2 = halfPx * wx2;
  float ty2 = halfPx * wy2;
  float aax2 = wx2;
  float aay2 = wy2;
  float lineX2 = 1.0 - smoothstep(tx2, tx2 + aax2, ax2);
  float lineY2 = 1.0 - smoothstep(ty2, ty2 + aay2, ay2);
  if (uLineStyle > 0.5) {
    float dashRepeat2 = 4.0;
    float dashDuty2 = 0.5;
    float vy2m = fract(gridUV2.y * dashRepeat2);
    float vx2m = fract(gridUV2.x * dashRepeat2);
    float dashMaskY2 = step(vy2m, dashDuty2);
    float dashMaskX2 = step(vx2m, dashDuty2);
    if (uLineStyle < 1.5) {
      lineX2 *= dashMaskY2;
      lineY2 *= dashMaskX2;
    } else {
      float dotRepeat2 = 6.0;
      float dotWidth2 = 0.18;
      float cy2 = abs(fract(gridUV2.y * dotRepeat2) - 0.5);
      float cx2 = abs(fract(gridUV2.x * dotRepeat2) - 0.5);
      float dotMaskY2 = 1.0 - smoothstep(dotWidth2, dotWidth2 + fwidth(gridUV2.y * dotRepeat2), cy2);
      float dotMaskX2 = 1.0 - smoothstep(dotWidth2, dotWidth2 + fwidth(gridUV2.x * dotRepeat2), cx2);
      lineX2 *= dotMaskY2;
      lineY2 *= dotMaskX2;
    }
  }
    float altMask = max(lineX2, lineY2);

    float edgeDistX = min(abs(hit.x - (-0.5)), abs(hit.x - 0.5));
    float edgeDistY = min(abs(hit.y - (-0.2)), abs(hit.y - 0.2));
    float edgeDist = mix(edgeDistY, edgeDistX, hitIsY);
    float edgeGate = 1.0 - smoothstep(gridScale * 0.5, gridScale * 2.0, edgeDist);
    altMask *= edgeGate;

  float lineMask = max(primaryMask, altMask);

    float fade = exp(-dist * fadeStrength);

    float dur = max(0.05, uScanDuration);
    float del = max(0.0, uScanDelay);
    float scanZMax = 2.0;
    float widthScale = max(0.1, uScanGlow);
    float sigma = max(0.001, 0.18 * widthScale * uScanSoftness);
    float sigmaA = sigma * 2.0;

    float combinedPulse = 0.0;
    float combinedAura = 0.0;

    float cycle = dur + del;
    float tCycle = mod(iTime, cycle);
    float scanPhase = clamp((tCycle - del) / dur, 0.0, 1.0);
    float phase = scanPhase;
    if (uScanDirection > 0.5 && uScanDirection < 1.5) {
      phase = 1.0 - phase;
    } else if (uScanDirection > 1.5) {
      float t2 = mod(max(0.0, iTime - del), 2.0 * dur);
      phase = (t2 < dur) ? (t2 / dur) : (1.0 - (t2 - dur) / dur);
    }
    float scanZ = phase * scanZMax;
    float dz = abs(hit.z - scanZ);
    float lineBand = exp(-0.5 * (dz * dz) / (sigma * sigma));
    float taper = clamp(uPhaseTaper, 0.0, 0.49);
    float headW = taper;
    float tailW = taper;
    float headFade = smoother01(0.0, headW, phase);
    float tailFade = 1.0 - smoother01(1.0 - tailW, 1.0, phase);
    float phaseWindow = headFade * tailFade;
    float pulseBase = lineBand * phaseWindow;
    combinedPulse += pulseBase * clamp(uScanOpacity, 0.0, 1.0);
    float auraBand = exp(-0.5 * (dz * dz) / (sigmaA * sigmaA));
    combinedAura += (auraBand * 0.25) * phaseWindow * clamp(uScanOpacity, 0.0, 1.0);

    for (int i = 0; i < MAX_SCANS; i++) {
      if (float(i) >= uScanCount) break;
      float tActiveI = iTime - uScanStarts[i];
      float phaseI = clamp(tActiveI / dur, 0.0, 1.0);
      if (uScanDirection > 0.5 && uScanDirection < 1.5) {
        phaseI = 1.0 - phaseI;
      } else if (uScanDirection > 1.5) {
        phaseI = (phaseI < 0.5) ? (phaseI * 2.0) : (1.0 - (phaseI - 0.5) * 2.0);
      }
      float scanZI = phaseI * scanZMax;
      float dzI = abs(hit.z - scanZI);
      float lineBandI = exp(-0.5 * (dzI * dzI) / (sigma * sigma));
      float headFadeI = smoother01(0.0, headW, phaseI);
      float tailFadeI = 1.0 - smoother01(1.0 - tailW, 1.0, phaseI);
      float phaseWindowI = headFadeI * tailFadeI;
      combinedPulse += lineBandI * phaseWindowI * clamp(uScanOpacity, 0.0, 1.0);
      float auraBandI = exp(-0.5 * (dzI * dzI) / (sigmaA * sigmaA));
      combinedAura += (auraBandI * 0.25) * phaseWindowI * clamp(uScanOpacity, 0.0, 1.0);
    }

  float lineVis = lineMask;
  vec3 gridCol = uLinesColor * lineVis * fade;
  vec3 scanCol = uScanColor * combinedPulse;
  vec3 scanAura = uScanColor * combinedAura;

    color = gridCol + scanCol + scanAura;

  float n = fract(sin(dot(gl_FragCoord.xy + vec2(iTime * 123.4), vec2(12.9898,78.233))) * 43758.5453123);
  color += (n - 0.5) * uNoise;
  color = clamp(color, 0.0, 1.0);
  float alpha = clamp(max(lineVis, combinedPulse), 0.0, 1.0);
  float gx = 1.0 - smoothstep(tx * 2.0, tx * 2.0 + aax * 2.0, ax);
  float gy = 1.0 - smoothstep(ty * 2.0, ty * 2.0 + aay * 2.0, ay);
  float halo = max(gx, gy) * fade;
  alpha = max(alpha, halo * clamp(uBloomOpacity, 0.0, 1.0));
  fragColor = vec4(color, alpha);
}

void main(){
  vec4 c;
  mainImage(c, vUv * iResolution.xy);
  gl_FragColor = c;
}
`;

export const SpatialGrid = ({
  enableWebcam = false,
  showPreview = false,
  modelsPath = '/models',
  sensitivity = 0.55,
  lineThickness = 1,
  linesColor = '#2F293A',
  scanColor = '#FF9FFC',
  scanOpacity = 0.4,
  gridScale = 0.1,
  lineStyle = 'solid',
  lineJitter = 0.1,
  scanDirection = 'pingpong',
  enablePost = true,
  bloomIntensity = 0,
  bloomThreshold = 0,
  bloomSmoothing = 0,
  chromaticAberration = 0.002,
  noiseIntensity = 0.01,
  scanGlow = 0.5,
  scanSoftness = 2,
  scanPhaseTaper = 0.9,
  scanDuration = 2.0,
  scanDelay = 2.0,
  enableGyro = false,
  scanOnClick = false,
  snapBackDelay = 250,
  className,
  style
}) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  const rendererRef = useRef(null);
  const materialRef = useRef(null);
  const composerRef = useRef(null);
  const bloomRef = useRef(null);
  const chromaRef = useRef(null);
  const rafRef = useRef(null);

  const [modelsReady, setModelsReady] = useState(false);
  const [uiFaceActive, setUiFaceActive] = useState(false);

  const lookTarget = useRef(new THREE.Vector2(0, 0));
  const tiltTarget = useRef(0);
  const yawTarget = useRef(0);

  const lookCurrent = useRef(new THREE.Vector2(0, 0));
  const lookVel = useRef(new THREE.Vector2(0, 0));
  const tiltCurrent = useRef(0);
  const tiltVel = useRef(0);
  const yawCurrent = useRef(0);
  const yawVel = useRef(0);

  const MAX_SCANS = 8;
  const scanStartsRef = useRef([]);

  const pushScan = t => {
    const arr = scanStartsRef.current.slice();
    if (arr.length >= MAX_SCANS) arr.shift();
    arr.push(t);
    scanStartsRef.current = arr;
    if (materialRef.current) {
      const u = materialRef.current.uniforms;
      const buf = new Array(MAX_SCANS).fill(0);
      for (let i = 0; i < arr.length && i < MAX_SCANS; i++) buf[i] = arr[i];
      u.uScanStarts.value = buf;
      u.uScanCount.value = arr.length;
    }
  };

  const bufX = useRef([]);
  const bufY = useRef([]);
  const bufT = useRef([]);
  const bufYaw = useRef([]);

  const s = THREE.MathUtils.clamp(sensitivity, 0, 1);
  const skewScale = THREE.MathUtils.lerp(0.06, 0.2, s);
  const tiltScale = THREE.MathUtils.lerp(0.12, 0.3, s);
  const yawScale = THREE.MathUtils.lerp(0.1, 0.28, s);
  const depthResponse = THREE.MathUtils.lerp(0.25, 0.45, s);
  const smoothTime = THREE.MathUtils.lerp(0.45, 0.12, s);
  const maxSpeed = Infinity;

  const yBoost = THREE.MathUtils.lerp(1.2, 1.6, s);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let leaveTimer = null;
    const onMove = e => {
      if (uiFaceActive) return;
      if (leaveTimer) {
        clearTimeout(leaveTimer);
        leaveTimer = null;
      }
      const rect = el.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      lookTarget.current.set(nx, ny);
    };
    const onClick = async () => {
      const nowSec = performance.now() / 1000;
      if (scanOnClick) pushScan(nowSec);
      if (
        enableGyro &&
        typeof window !== 'undefined' &&
        window.DeviceOrientationEvent &&
        DeviceOrientationEvent.requestPermission
      ) {
        try {
          await DeviceOrientationEvent.requestPermission();
        } catch {
          // noop
        }
      }
    };
    const onEnter = () => {
      if (leaveTimer) {
        clearTimeout(leaveTimer);
        leaveTimer = null;
      }
    };
    const onLeave = () => {
      if (uiFaceActive) return;
      if (leaveTimer) clearTimeout(leaveTimer);
      leaveTimer = window.setTimeout(
        () => {
          lookTarget.current.set(0, 0);
          tiltTarget.current = 0;
          yawTarget.current = 0;
        },
        Math.max(0, snapBackDelay || 0)
      );
    };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseenter', onEnter);
    if (scanOnClick) el.addEventListener('click', onClick);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
      if (scanOnClick) el.removeEventListener('click', onClick);
      if (leaveTimer) clearTimeout(leaveTimer);
    };
  }, [uiFaceActive, snapBackDelay, scanOnClick, enableGyro]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    rendererRef.current = renderer;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.NoToneMapping;
    renderer.autoClear = false;
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const uniforms = {
      iResolution: {
        value: new THREE.Vector3(container.clientWidth, container.clientHeight, renderer.getPixelRatio())
      },
      iTime: { value: 0 },
      uSkew: { value: new THREE.Vector2(0, 0) },
      uTilt: { value: 0 },
      uYaw: { value: 0 },
      uLineThickness: { value: lineThickness },
      uLinesColor: { value: srgbColor(linesColor) },
      uScanColor: { value: srgbColor(scanColor) },
      uGridScale: { value: gridScale },
      uLineStyle: { value: lineStyle === 'dashed' ? 1 : lineStyle === 'dotted' ? 2 : 0 },
      uLineJitter: { value: Math.max(0, Math.min(1, lineJitter || 0)) },
      uScanOpacity: { value: scanOpacity },
      uNoise: { value: noiseIntensity },
      uBloomOpacity: { value: bloomIntensity },
      uScanGlow: { value: scanGlow },
      uScanSoftness: { value: scanSoftness },
      uPhaseTaper: { value: scanPhaseTaper },
      uScanDuration: { value: scanDuration },
      uScanDelay: { value: scanDelay },
      uScanDirection: { value: scanDirection === 'backward' ? 1 : scanDirection === 'pingpong' ? 2 : 0 },
      uScanStarts: { value: new Array(MAX_SCANS).fill(0) },
      uScanCount: { value: 0 }
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: vert,
      fragmentShader: frag,
      transparent: true,
      depthWrite: false,
      depthTest: false
    });
    materialRef.current = material;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(quad);

    let composer = null;
    if (enablePost) {
      composer = new EffectComposer(renderer);
      composerRef.current = composer;
      const renderPass = new RenderPass(scene, camera);
      composer.addPass(renderPass);

      const bloom = new BloomEffect({
        intensity: 1.0,
        luminanceThreshold: bloomThreshold,
        luminanceSmoothing: bloomSmoothing
      });
      bloom.blendMode.opacity.value = Math.max(0, bloomIntensity);
      bloomRef.current = bloom;

      const chroma = new ChromaticAberrationEffect({
        offset: new THREE.Vector2(chromaticAberration, chromaticAberration),
        radialModulation: true,
        modulationOffset: 0.0
      });
      chromaRef.current = chroma;

      const effectPass = new EffectPass(camera, bloom, chroma);
      effectPass.renderToScreen = true;
      composer.addPass(effectPass);
    }

    const onResize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight);
      material.uniforms.iResolution.value.set(container.clientWidth, container.clientHeight, renderer.getPixelRatio());
      if (composerRef.current) composerRef.current.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', onResize);

    let last = performance.now();
    const tick = () => {
      const now = performance.now();
      const dt = Math.max(0, Math.min(0.1, (now - last) / 1000));
      last = now;

      lookCurrent.current.copy(
        smoothDampVec2(lookCurrent.current, lookTarget.current, lookVel.current, smoothTime, maxSpeed, dt)
      );

      const tiltSm = smoothDampFloat(
        tiltCurrent.current,
        tiltTarget.current,
        { v: tiltVel.current },
        smoothTime,
        maxSpeed,
        dt
      );
      tiltCurrent.current = tiltSm.value;
      tiltVel.current = tiltSm.v;

      const yawSm = smoothDampFloat(
        yawCurrent.current,
        yawTarget.current,
        { v: yawVel.current },
        smoothTime,
        maxSpeed,
        dt
      );
      yawCurrent.current = yawSm.value;
      yawVel.current = yawSm.v;

      const skew = new THREE.Vector2(lookCurrent.current.x * skewScale, -lookCurrent.current.y * yBoost * skewScale);
      material.uniforms.uSkew.value.set(skew.x, skew.y);
      material.uniforms.uTilt.value = tiltCurrent.current * tiltScale;
      material.uniforms.uYaw.value = THREE.MathUtils.clamp(yawCurrent.current * yawScale, -0.6, 0.6);

      material.uniforms.iTime.value = now / 1000;
      renderer.clear(true, true, true);
      if (composerRef.current) {
        composerRef.current.render(dt);
      } else {
        renderer.render(scene, camera);
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
      material.dispose();
      quad.geometry.dispose();

      if (composerRef.current) {
        composerRef.current.dispose();
        composerRef.current = null;
      }
      renderer.dispose();
      renderer.forceContextLoss();
      container.removeChild(renderer.domElement);
    };
  }, [
    sensitivity,
    lineThickness,
    linesColor,
    scanColor,
    scanOpacity,
    gridScale,
    lineStyle,
    lineJitter,
    scanDirection,
    enablePost,
    noiseIntensity,
    bloomIntensity,
    scanGlow,
    scanSoftness,
    scanPhaseTaper,
    scanDuration,
    scanDelay,
    bloomThreshold,
    bloomSmoothing,
    chromaticAberration,
    smoothTime,
    maxSpeed,
    skewScale,
    yBoost,
    tiltScale,
    yawScale
  ]);

  useEffect(() => {
    const m = materialRef.current;
    if (m) {
      const u = m.uniforms;
      u.uLineThickness.value = lineThickness;
      u.uLinesColor.value.copy(srgbColor(linesColor));
      u.uScanColor.value.copy(srgbColor(scanColor));
      u.uGridScale.value = gridScale;
      u.uLineStyle.value = lineStyle === 'dashed' ? 1 : lineStyle === 'dotted' ? 2 : 0;
      u.uLineJitter.value = Math.max(0, Math.min(1, lineJitter || 0));
      u.uBloomOpacity.value = Math.max(0, bloomIntensity);
      u.uNoise.value = Math.max(0, noiseIntensity);
      u.uScanGlow.value = scanGlow;
      u.uScanOpacity.value = Math.max(0, Math.min(1, scanOpacity));
      u.uScanDirection.value = scanDirection === 'backward' ? 1 : scanDirection === 'pingpong' ? 2 : 0;
      u.uScanSoftness.value = scanSoftness;
      u.uPhaseTaper.value = scanPhaseTaper;
      u.uScanDuration.value = Math.max(0.05, scanDuration);
      u.uScanDelay.value = Math.max(0.0, scanDelay);
    }
    if (bloomRef.current) {
      bloomRef.current.blendMode.opacity.value = Math.max(0, bloomIntensity);
      bloomRef.current.luminanceMaterial.threshold = bloomThreshold;
      bloomRef.current.luminanceMaterial.smoothing = bloomSmoothing;
    }
    if (chromaRef.current) {
      chromaRef.current.offset.set(chromaticAberration, chromaticAberration);
    }
  }, [
    lineThickness,
    linesColor,
    scanColor,
    gridScale,
    lineStyle,
    lineJitter,
    bloomIntensity,
    bloomThreshold,
    bloomSmoothing,
    chromaticAberration,
    noiseIntensity,
    scanGlow,
    scanOpacity,
    scanDirection,
    scanSoftness,
    scanPhaseTaper,
    scanDuration,
    scanDelay
  ]);

  useEffect(() => {
    if (!enableGyro) return;
    const handler = e => {
      if (uiFaceActive) return;
      const gamma = e.gamma ?? 0;
      const beta = e.beta ?? 0;
      const nx = THREE.MathUtils.clamp(gamma / 45, -1, 1);
      const ny = THREE.MathUtils.clamp(-beta / 30, -1, 1);
      lookTarget.current.set(nx, ny);
      tiltTarget.current = THREE.MathUtils.degToRad(gamma) * 0.4;
    };
    window.addEventListener('deviceorientation', handler);
    return () => {
      window.removeEventListener('deviceorientation', handler);
    };
  }, [enableGyro, uiFaceActive]);

  useEffect(() => {
    let canceled = false;
    const load = async () => {
      if (!enableWebcam) return;
      try {
        await Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri(modelsPath),
          faceapi.nets.faceLandmark68TinyNet.loadFromUri(modelsPath)
        ]);
        if (!canceled) setModelsReady(true);
      } catch {
        if (!canceled) setModelsReady(false);
      }
    };
    load();
    return () => {
      canceled = true;
    };
  }, [modelsPath, enableWebcam]);

  useEffect(() => {
    let stop = false;
    let lastDetect = 0;
    const video = videoRef.current;

    const start = async () => {
      if (!enableWebcam || !modelsReady) return;
      if (!video) return;

      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } },
          audio: false
        });
        video.srcObject = stream;
        await video.play();
      } catch {
        return;
      }

      const opts = new faceapi.TinyFaceDetectorOptions({ inputSize: 320, scoreThreshold: 0.5 });

      const detect = async ts => {
        if (stop) return;

        if (ts - lastDetect >= 33) {
          lastDetect = ts;
          try {
            const res = await faceapi.detectSingleFace(video, opts).withFaceLandmarks(true);
            if (res && res.detection) {
              const det = res.detection;
              const box = det.box;
              const vw = video.videoWidth || 1;
              const vh = video.videoHeight || 1;

              const cx = box.x + box.width * 0.5;
              const cy = box.y + box.height * 0.5;
              const nx = (cx / vw) * 2 - 1;
              const ny = (cy / vh) * 2 - 1;
              medianPush(bufX.current, nx, 5);
              medianPush(bufY.current, ny, 5);
              const nxm = median(bufX.current);
              const nym = median(bufY.current);

              const look = new THREE.Vector2(Math.tanh(nxm), Math.tanh(nym));

              const faceSize = Math.min(1, Math.hypot(box.width / vw, box.height / vh));
              const depthScale = 1 + depthResponse * (faceSize - 0.25);
              lookTarget.current.copy(look.multiplyScalar(depthScale));

              const leftEye = res.landmarks.getLeftEye();
              const rightEye = res.landmarks.getRightEye();
              const lc = centroid(leftEye);
              const rc = centroid(rightEye);
              const tilt = Math.atan2(rc.y - lc.y, rc.x - lc.x);
              medianPush(bufT.current, tilt, 5);
              tiltTarget.current = median(bufT.current);

              const nose = res.landmarks.getNose();
              const tip = nose[nose.length - 1] || nose[Math.floor(nose.length / 2)];
              const jaw = res.landmarks.getJawOutline();
              const leftCheek = jaw[3] || jaw[2];
              const rightCheek = jaw[13] || jaw[14];
              const dL = dist2(tip, leftCheek);
              const dR = dist2(tip, rightCheek);
              const eyeDist = Math.hypot(rc.x - lc.x, rc.y - lc.y) + 1e-6;
              let yawSignal = THREE.MathUtils.clamp((dR - dL) / (eyeDist * 1.6), -1, 1);
              yawSignal = Math.tanh(yawSignal);
              medianPush(bufYaw.current, yawSignal, 5);
              yawTarget.current = median(bufYaw.current);

              setUiFaceActive(true);
            } else {
              setUiFaceActive(false);
            }
          } catch {
            setUiFaceActive(false);
          }
        }

        if ('requestVideoFrameCallback' in HTMLVideoElement.prototype) {
          video.requestVideoFrameCallback(() => detect(performance.now()));
        } else {
          requestAnimationFrame(detect);
        }
      };

      requestAnimationFrame(detect);
    };

    start();

    return () => {
      stop = true;
      if (video) {
        const stream = video.srcObject;
        if (stream) stream.getTracks().forEach(t => t.stop());
        video.pause();
        video.srcObject = null;
      }
    };
  }, [enableWebcam, modelsReady, depthResponse]);

  return (
    <div ref={containerRef} className={`spatial-grid${className ? ` ${className}` : ''}`} style={style}>
      {showPreview && (
        <div className="spatial-grid__preview">
          <video ref={videoRef} muted playsInline autoPlay className="spatial-grid__video" />
          <div className="spatial-grid__badge">
            {enableWebcam
              ? modelsReady
                ? uiFaceActive
                  ? 'Face: tracking'
                  : 'Face: searching'
                : 'Loading models'
              : 'Webcam disabled'}
          </div>
        </div>
      )}
    </div>
  );
};

function srgbColor(hex) {
  const c = new THREE.Color(hex);
  return c.convertSRGBToLinear();
}

function smoothDampVec2(current, target, currentVelocity, smoothTime, maxSpeed, deltaTime) {
  const out = current.clone();
  smoothTime = Math.max(0.0001, smoothTime);
  const omega = 2 / smoothTime;
  const x = omega * deltaTime;
  const exp = 1 / (1 + x + 0.48 * x * x + 0.235 * x * x * x);

  let change = current.clone().sub(target);
  const originalTo = target.clone();

  const maxChange = maxSpeed * smoothTime;
  if (change.length() > maxChange) change.setLength(maxChange);

  target = current.clone().sub(change);
  const temp = currentVelocity.clone().addScaledVector(change, omega).multiplyScalar(deltaTime);
  currentVelocity.sub(temp.clone().multiplyScalar(omega));
  currentVelocity.multiplyScalar(exp);

  out.copy(target.clone().add(change.add(temp).multiplyScalar(exp)));

  const origMinusCurrent = originalTo.clone().sub(current);
  const outMinusOrig = out.clone().sub(originalTo);
  if (origMinusCurrent.dot(outMinusOrig) > 0) {
    out.copy(originalTo);
    currentVelocity.set(0, 0);
  }
  return out;
}

function smoothDampFloat(current, target, velRef, smoothTime, maxSpeed, deltaTime) {
  smoothTime = Math.max(0.0001, smoothTime);
  const omega = 2 / smoothTime;
  const x = omega * deltaTime;
  const exp = 1 / (1 + x + 0.48 * x * x + 0.235 * x * x * x);

  let change = current - target;
  const originalTo = target;

  const maxChange = maxSpeed * smoothTime;
  change = Math.sign(change) * Math.min(Math.abs(change), maxChange);

  target = current - change;
  const temp = (velRef.v + omega * change) * deltaTime;
  velRef.v = (velRef.v - omega * temp) * exp;

  let out = target + (change + temp) * exp;

  const origMinusCurrent = originalTo - current;
  const outMinusOrig = out - originalTo;
  if (origMinusCurrent * outMinusOrig > 0) {
    out = originalTo;
    velRef.v = 0;
  }
  return { value: out, v: velRef.v };
}

function medianPush(buf, v, maxLen) {
  buf.push(v);
  if (buf.length > maxLen) buf.shift();
}

function median(buf) {
  if (buf.length === 0) return 0;
  const a = [...buf].sort((x, y) => x - y);
  const mid = Math.floor(a.length / 2);
  return a.length % 2 ? a[mid] : (a[mid - 1] + a[mid]) * 0.5;
}

function centroid(points) {
  let x = 0,
    y = 0;
  const n = points.length || 1;
  for (const p of points) {
    x += p.x;
    y += p.y;
  }
  return { x: x / n, y: y / n };
}

function dist2(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

export default SpatialGrid;
```

**`src/components/SpatialGrid.css`**
```css
.spatial-grid {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.spatial-grid__preview {
  position: absolute;
  right: 12px;
  bottom: 12px;
  width: 220px;
  height: 132px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
  background: #000;
  color: #fff;
  font:
    12px/1.2 system-ui,
    -apple-system,
    Segoe UI,
    Roboto,
    sans-serif;
  pointer-events: none;
}

.spatial-grid__video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scaleX(-1);
}

.spatial-grid__badge {
  position: absolute;
  left: 8px;
  top: 8px;
  padding: 2px 6px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  backdrop-filter: blur(4px);
}
```

**`SpatialGrid` props (reference):**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| enableWebcam | boolean | false | Enable face tracking via webcam. |
| showPreview | boolean | false | Show webcam preview/debug HUD. |
| modelsPath | string | `/models` | Self-hosted path to the face-tracking weights. |
| sensitivity | number | 0.55 | Overall responsiveness to input. |
| lineThickness | number | 1 | Grid line thickness. |
| linesColor | string | `#2F293A` | Color of the grid lines. |
| gridScale | number | 0.1 | Grid spacing (smaller = denser). |
| lineStyle | 'solid' \| 'dashed' \| 'dotted' | 'solid' | Grid line style. |
| lineJitter | number | 0.1 | Animated jitter along the grid lines. |
| enablePost | boolean | true | Enable post-processing effects. |
| bloomIntensity | number | 0 | Bloom strength. |
| bloomThreshold | number | 0 | Bloom luminance threshold. |
| bloomSmoothing | number | 0 | Bloom threshold smoothing. |
| chromaticAberration | number | 0.002 | Chromatic aberration offset. |
| noiseIntensity | number | 0.01 | Additive film grain intensity. |
| scanColor | string | `#FF9FFC` | Color of the scan beam/aura. |
| scanOpacity | number | 0.4 | Opacity of the scan effect. |
| scanDirection | 'forward' \| 'backward' \| 'pingpong' | 'pingpong' | Scan motion. |
| scanSoftness | number | 2 | Softness of scan band edges. |
| scanGlow | number | 0.5 | Relative width/intensity of glow. |
| scanPhaseTaper | number | 0.9 | Fade-in/out window for the phase. |
| scanDuration | number | 2.0 | Duration of a scan cycle (seconds). |
| scanDelay | number | 2.0 | Delay between scan cycles (seconds). |
| enableGyro | boolean | false | Use device orientation for input. |
| scanOnClick | boolean | false | Trigger a scan on click. |
| snapBackDelay | number | 250 | Delay (ms) before input recenters. |
| className | string | '' | Additional CSS classes. |
| style | object | {} | Inline style overrides. |

> No `motion/react` components are used in this asset — all entrance motion is the CSS `rise` keyframe (Layer 4d) with staggered `animation-delay`.

---

## LAYER 7 — SECTIONS

### SECTION 1 — HERO

**Block 1 · Container**
- Wrapper: `<section className="hero">`
- `position: relative; min-height: 100vh; min-height: 100svh; width: 100%; overflow: hidden; display: flex; flex-direction: column;`
- Base background: `radial-gradient(120% 90% at 50% -10%, #15102200 0%, var(--bg) 70%), var(--bg);`

**Block 2 · Background**
- Asset: `SpatialGrid` WebGL field (Layer 5), wrapped in `.hero__canvas` (`position:absolute; inset:0; z-index:0`).
- Overlay: `.hero__veil` (Layer 4b), `z-index: 1`, `pointer-events: none`.
- Stacking: canvas z-0 → veil z-1 → nav & content z-3.
- `.hero__canvas > .spatial-grid { width: 100%; height: 100%; }`

**Block 3 · Layout primitive**
- `.hero` is `flex` column. Top: floating glass `.hero__nav`. Below: `.hero__inner` (`flex:1`, centered column).
- `.hero__inner`: `display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; max-width:820px; margin:0 auto; padding:40px clamp(20px,5vw,64px) 80px; pointer-events:none;`

**Block 4 · Elements**

**1) Navbar** (`<header className="hero__nav">`)
- Position: relative, z-3, floating glass pill.
- Box: `display:flex; align-items:center; justify-content:space-between; gap:24px; width:100%; max-width:720px; margin:18px auto 0; padding:11px 14px 11px 20px; border-radius:999px;` + liquid-glass treatment (Layer 4a) + `::before` sheen.
- Children (left → right):
  - **Brand** `<a className="hero__brand" href="#">`: `Montserrat 700, 18px, letter-spacing -0.01em; display:inline-flex; align-items:center; gap:10px;`
    - **Logo** `<span className="hero__logo">`: `color:var(--accent); display:inline-flex; filter:drop-shadow(0 0 10px rgba(168,159,255,0.5));` containing the cube SVG (Layer 10, icon `logo-cube`).
    - **Wordmark** `<span>`: text **`3DVIEW`**
  - **Links** `<nav className="hero__links">`: `flex:1; display:flex; justify-content:center; gap:26px; font-size:13.5px; color:var(--ink-dim);` — links transition color to `--ink` on hover.
    - `Platform` · `Capture` · `Developers` · `Pricing`
  - **Nav CTA** `<a className="hero__nav-cta" href="#">`: `font-size:14px; font-weight:500; padding:9px 18px; border:1px solid rgba(168,159,255,0.28); border-radius:999px; color:var(--ink); background:rgba(168,159,255,0.06);` — hover: border `rgba(168,159,255,0.6)`, bg `rgba(168,159,255,0.12)`.
    - Text: **`Request access`**

**2) Headline** `<h1 className="hero__title">`
- `Montserrat 800; font-size:clamp(30px,4.4vw,54px); line-height:1.05; letter-spacing:-0.025em; color:var(--ink); animation:rise 0.7s ease both;`
- Content (with a `<br>` and the accent span):
  > Step inside the<br><span class="hero__title-accent">3D reality</span> of any space.
- The `3D reality` span uses the gradient text treatment (Layer 4c).

**3) Lede** `<p className="hero__lede">`
- `margin-top:18px; max-width:480px; font-size:clamp(13.5px,1.2vw,15px); line-height:1.6; color:var(--ink-dim); animation:rise 0.7s ease 0.16s both;`
- Text (verbatim, in Block 7).

**4) Actions** `<div className="hero__actions">`
- `margin-top:28px; display:flex; flex-wrap:wrap; justify-content:center; gap:11px; animation:rise 0.7s ease 0.24s both; pointer-events:auto;`
- Shared CTA base `.hero__cta`: `display:inline-flex; align-items:center; gap:8px; font-size:13.5px; font-weight:600; padding:11px 19px; border-radius:999px; transition:transform .18s ease, box-shadow .25s ease, background .2s ease;`
  - **Primary** `.hero__cta--primary`: `color:#0a0810; background:linear-gradient(100deg,var(--accent) 0%,var(--accent-2) 100%); box-shadow:0 8px 30px -8px rgba(168,159,255,0.7);` — hover: `translateY(-2px)` + stronger shadow. Text **`Launch the demo`** + trailing **arrow** SVG (Layer 10, `arrow-right`, 15×15).
  - **Ghost** `.hero__cta--ghost`: `color:var(--ink); border:1px solid rgba(255,255,255,0.14); background:rgba(255,255,255,0.02);` — hover: border `rgba(255,255,255,0.32)`, bg `rgba(255,255,255,0.06)`. Leading **play** SVG (Layer 10, `play`, 13×13) + text **`Watch the capture`**.

**Block 5 · Animation**
- Headline: `rise`, delay `0s`.
- Lede: `rise`, delay `0.16s`.
- Actions: `rise`, delay `0.24s`.
- Ease: CSS `ease`; duration `0.7s`; fill `both`.

**Block 6 · Responsive notes**
- `< 860px`: hide `.hero__links` (`display:none`).
- `< 560px`: hide `.hero__nav-cta`.
- Headline & lede & CTA all scale via `clamp()`; container padding via `clamp(20px,5vw,64px)`.

**Block 7 · Copy (verbatim, in order)**
```
3DVIEW
Platform
Capture
Developers
Pricing
Request access
Step inside the
3D reality
of any space.
3DVIEW reconstructs the physical world into a navigable virtual-reality scene in real time. Scan a room, a building, or an entire site — then walk through it from anywhere, on any headset or browser, at full fidelity.
Launch the demo
Watch the capture
```

---

## LAYER 8 — ANIMATION STANDARDS

```css
/* Single shared keyframe — entrance only */
@keyframes rise {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}
```
- **Duration:** `0.7s` · **Easing:** CSS `ease` · **Fill:** `both`
- **Stagger (hero):** headline `0s` → lede `0.16s` → actions `0.24s`
- **Hover micro-motion:** primary CTA `translateY(-2px)` (0.18s); nav links color fade (0.2s); nav CTA border/bg fade (0.2s).
- **Backdrop motion** is continuous and driven by the WebGL render loop (`requestAnimationFrame`), smoothed with a critically-damped `smoothDamp` toward the pointer target — not CSS.

---

## LAYER 9 — RESPONSIVE STANDARDS

- **Mobile-first.** Everything is fluid; only two breakpoints toggle visibility (860px links, 560px nav CTA).
- **Hero headline:** `clamp(30px, 4.4vw, 54px)` — always `clamp()`, never fixed.
- **Lede:** `clamp(13.5px, 1.2vw, 15px)`, capped at `max-width:480px`.
- **Container padding:** `clamp(20px, 5vw, 64px)`.
- **Nav:** `max-width:720px`, centered; **content column:** `max-width:820px`, centered.
- **Viewport units:** use `100svh` alongside `100vh` for mobile browser chrome.

---

## LAYER 10 — ICON SET (inline SVG, no icon library)

3DVIEW ships **inline SVGs only** — no icon dependency. Use exactly these three; reject any other icon.

**`logo-cube`** — brand mark (26×26, `stroke="currentColor"`, `stroke-width="1.3"`, `fill="none"`):
```html
<svg viewBox="0 0 28 28" width="26" height="26" fill="none">
  <path d="M5 11 L14 6 L23 11 L14 16 Z" stroke="currentColor" stroke-width="1.3" />
  <path d="M5 11 L5 18 L14 23 L14 16" stroke="currentColor" stroke-width="1.3" />
  <path d="M23 11 L23 18 L14 23" stroke="currentColor" stroke-width="1.3" />
</svg>
```

**`arrow-right`** — primary CTA trailing arrow (15×15):
```html
<svg viewBox="0 0 16 16" width="15" height="15" fill="none" aria-hidden="true">
  <path d="M3 8h9M8.5 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>
```

**`play`** — ghost CTA leading triangle (13×13, filled):
```html
<svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor" aria-hidden="true">
  <path d="M5 3.5v9l7-4.5z" />
</svg>
```

Favicon (`public/favicon.svg`) reuses the `logo-cube` geometry on a `#0b0710` rounded tile with `#a89fff` strokes.

---

## LAYER 11 — SUPPORTING FILES (paste verbatim)

**`package.json`**
```json
{
  "name": "3dview",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "three": "^0.169.0",
    "postprocessing": "^6.36.0",
    "face-api.js": "^0.22.2"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "vite": "^5.4.11"
  }
}
```

**`vite.config.js`**
```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()]
});
```

**`index.html`**
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>3DVIEW — Real-Time 3D & Virtual Reality</title>
    <meta
      name="description"
      content="3DVIEW is a real-time spatial computing platform that turns physical spaces into navigable 3D virtual reality."
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

**`src/main.jsx`**
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

**`src/index.css`**
```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Open+Sans:wght@400;500;600;700&display=swap');

:root {
  --bg: #07060b;
  --bg-2: #0b0912;
  --ink: #f4f1fb;
  --ink-dim: #a39db8;
  --ink-faint: #6f6985;
  --accent: #a89fff;
  --accent-2: #ff9ffc;
  --line: #2f293a;
  --radius: 16px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#root {
  height: 100%;
}

body {
  background: var(--bg);
  color: var(--ink);
  font-family: 'Open Sans', system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  overflow-x: hidden;
}

::selection {
  background: var(--accent);
  color: #0a0810;
}

a {
  color: inherit;
  text-decoration: none;
}
```

**`src/App.jsx`**
```jsx
import Hero from './sections/Hero.jsx';

export default function App() {
  return (
    <main>
      <Hero />
    </main>
  );
}
```

**`src/sections/Hero.jsx`**
```jsx
import SpatialGrid from '../components/SpatialGrid.jsx';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      {/* Animated 3D grid-scan backdrop */}
      <div className="hero__canvas" aria-hidden="true">
        <SpatialGrid
          sensitivity={0.6}
          lineThickness={1}
          linesColor="#2F293A"
          gridScale={0.1}
          scanColor="#a89fff"
          scanOpacity={0.45}
          enablePost
          bloomIntensity={0.7}
          chromaticAberration={0.0022}
          noiseIntensity={0.012}
          scanDirection="pingpong"
          scanDuration={2.4}
          scanDelay={1.6}
          scanGlow={0.6}
        />
      </div>

      {/* Gradient veils for legibility */}
      <div className="hero__veil" aria-hidden="true" />

      <header className="hero__nav">
        <a className="hero__brand" href="#">
          <span className="hero__logo" aria-hidden="true">
            <svg viewBox="0 0 28 28" width="26" height="26" fill="none">
              <path d="M5 11 L14 6 L23 11 L14 16 Z" stroke="currentColor" strokeWidth="1.3" />
              <path d="M5 11 L5 18 L14 23 L14 16" stroke="currentColor" strokeWidth="1.3" />
              <path d="M23 11 L23 18 L14 23" stroke="currentColor" strokeWidth="1.3" />
            </svg>
          </span>
          <span>3DVIEW</span>
        </a>

        <nav className="hero__links">
          <a href="#">Platform</a>
          <a href="#">Capture</a>
          <a href="#">Developers</a>
          <a href="#">Pricing</a>
        </nav>

        <a className="hero__nav-cta" href="#">
          Request access
        </a>
      </header>

      <div className="hero__inner">
        <h1 className="hero__title">
          Step inside the
          <br />
          <span className="hero__title-accent">3D reality</span> of any space.
        </h1>

        <p className="hero__lede">
          3DVIEW reconstructs the physical world into a navigable virtual-reality scene in real
          time. Scan a room, a building, or an entire site — then walk through it from anywhere, on
          any headset or browser, at full fidelity.
        </p>

        <div className="hero__actions">
          <a className="hero__cta hero__cta--primary" href="#">
            Launch the demo
            <svg viewBox="0 0 16 16" width="15" height="15" fill="none" aria-hidden="true">
              <path d="M3 8h9M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a className="hero__cta hero__cta--ghost" href="#">
            <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor" aria-hidden="true">
              <path d="M5 3.5v9l7-4.5z" />
            </svg>
            Watch the capture
          </a>
        </div>
      </div>
    </section>
  );
}
```

**`src/sections/Hero.css`**
```css
.hero {
  position: relative;
  min-height: 100vh;
  min-height: 100svh;
  width: 100%;
  overflow: hidden;
  background:
    radial-gradient(120% 90% at 50% -10%, #15102200 0%, var(--bg) 70%),
    var(--bg);
  display: flex;
  flex-direction: column;
}

/* ---- 3D backdrop ---- */
.hero__canvas {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero__canvas > .spatial-grid {
  width: 100%;
  height: 100%;
}

.hero__veil {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background:
    radial-gradient(70% 55% at 22% 42%, rgba(7, 6, 11, 0.82) 0%, rgba(7, 6, 11, 0) 60%),
    linear-gradient(180deg, rgba(7, 6, 11, 0.55) 0%, rgba(7, 6, 11, 0) 22%),
    linear-gradient(0deg, var(--bg) 2%, rgba(7, 6, 11, 0) 38%);
}

/* ---- Nav (liquid glass) ---- */
.hero__nav {
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
  max-width: 720px;
  margin: 18px auto 0;
  padding: 11px 14px 11px 20px;
  border-radius: 999px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.03) 48%,
    rgba(168, 159, 255, 0.06) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.14);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  backdrop-filter: blur(20px) saturate(180%);
  box-shadow:
    0 8px 32px -8px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.22),
    inset 0 -1px 0 rgba(255, 255, 255, 0.04);
}

/* glossy top sheen */
.hero__nav::before {
  content: '';
  position: absolute;
  inset: 1px 1px auto 1px;
  height: 45%;
  border-radius: 999px 999px 40% 40% / 999px 999px 100% 100%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0));
  pointer-events: none;
}

.hero__brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: -0.01em;
}

.hero__logo {
  color: var(--accent);
  display: inline-flex;
  filter: drop-shadow(0 0 10px rgba(168, 159, 255, 0.5));
}

.hero__links {
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 26px;
  font-size: 13.5px;
  color: var(--ink-dim);
}

.hero__links a {
  transition: color 0.2s ease;
}

.hero__links a:hover {
  color: var(--ink);
}

.hero__nav-cta {
  font-size: 14px;
  font-weight: 500;
  padding: 9px 18px;
  border: 1px solid rgba(168, 159, 255, 0.28);
  border-radius: 999px;
  color: var(--ink);
  background: rgba(168, 159, 255, 0.06);
  transition: border-color 0.2s ease, background 0.2s ease;
}

.hero__nav-cta:hover {
  border-color: rgba(168, 159, 255, 0.6);
  background: rgba(168, 159, 255, 0.12);
}

/* ---- Hero content ---- */
.hero__inner {
  position: relative;
  z-index: 3;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 820px;
  margin: 0 auto;
  padding: 40px clamp(20px, 5vw, 64px) 80px;
  /* let pointer events fall through to the interactive 3D backdrop */
  pointer-events: none;
}

/* re-enable interaction only on clickable elements */
.hero__actions,
.hero__cta {
  pointer-events: auto;
}

.hero__title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: clamp(30px, 4.4vw, 54px);
  line-height: 1.05;
  letter-spacing: -0.025em;
  color: var(--ink);
  animation: rise 0.7s ease both;
}

.hero__title-accent {
  background: linear-gradient(100deg, var(--accent) 0%, var(--accent-2) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero__lede {
  margin-top: 18px;
  max-width: 480px;
  font-size: clamp(13.5px, 1.2vw, 15px);
  line-height: 1.6;
  color: var(--ink-dim);
  animation: rise 0.7s ease 0.16s both;
}

.hero__actions {
  margin-top: 28px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 11px;
  animation: rise 0.7s ease 0.24s both;
}

.hero__cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13.5px;
  font-weight: 600;
  padding: 11px 19px;
  border-radius: 999px;
  transition: transform 0.18s ease, box-shadow 0.25s ease, background 0.2s ease;
}

.hero__cta--primary {
  color: #0a0810;
  background: linear-gradient(100deg, var(--accent) 0%, var(--accent-2) 100%);
  box-shadow: 0 8px 30px -8px rgba(168, 159, 255, 0.7);
}

.hero__cta--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 40px -10px rgba(168, 159, 255, 0.85);
}

.hero__cta--ghost {
  color: var(--ink);
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.02);
}

.hero__cta--ghost:hover {
  border-color: rgba(255, 255, 255, 0.32);
  background: rgba(255, 255, 255, 0.06);
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 860px) {
  .hero__links {
    display: none;
  }
}

@media (max-width: 560px) {
  .hero__nav-cta {
    display: none;
  }
}
```

**`public/favicon.svg`**
```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="7" fill="#0b0710"/>
  <g fill="none" stroke="#a89fff" stroke-width="1.4">
    <path d="M6 12 L16 7 L26 12 L16 17 Z"/>
    <path d="M6 12 L6 20 L16 25 L16 17"/>
    <path d="M26 12 L26 20 L16 25"/>
  </g>
</svg>
```

---

## LAYER 12 — REPRODUCE-EXACTLY CLAUSE

Reproduce exactly. Do not:
- Substitute fonts ("similar to Montserrat" is not Montserrat; body must be Open Sans).
- Round color values (`#07060b`, `#a89fff`, `#ff9ffc`, `#2F293A` are exact).
- Shorten or paraphrase any copy in Layer 7 Block 7.
- Change animation delays (headline 0s, lede 0.16s, actions 0.24s; duration 0.7s; `rise` keyframe).
- Replace the WebGL backdrop with a video, image, or external media — it is a generated shader, rendered in-browser, no external asset.
- Swap the `SpatialGrid` shader/props — keep the exact uniforms and the Hero prop values.
- Add icons beyond the three inline SVGs in Layer 10.

If a constraint conflicts with a framework limitation (e.g. an unavailable font weight), clamp to the nearest valid value and note the substitution as a comment — do not silently change.

---

## FILE TREE

```
3dview/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── favicon.svg
│   └── models/                # only if enableWebcam = true (self-hosted weights)
└── src/
    ├── main.jsx
    ├── index.css
    ├── App.jsx
    ├── components/
    │   ├── SpatialGrid.jsx
    │   └── SpatialGrid.css
    └── sections/
        ├── Hero.jsx
        └── Hero.css
```

## BUILD

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production → dist/
```
