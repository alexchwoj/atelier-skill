# PixelWorld

> Everything inside `{{ DOUBLE_BRACES }}` is a customization slot; everything else is the **invariant** spec — reproduce it exactly. 

---

## LAYER 0 — META

```yaml
asset_id: pixelworld-voxel-solar-system-01
category: landing-page
aesthetic: dark-cinematic / voxel-3d
industry: creative / showcase
tone: premium, minimal, technical
preview: live WebGPU canvas (no video file — the hero IS the render)
license: pro
version: 1.0
last_updated: 2026-06-02
```

---

## LAYER 1 — OPENING DECLARATION

Build a **single-page landing / hero section** for **PixelWorld** — a project that *re-sees the world through a 3D-pixel (voxel) lens*. The opening chapter is the solar system: all eight planets, modelled entirely from cubic voxels and rendered live.

Use the following **pinned** tech stack (do not substitute):

- **Vanilla HTML5 + CSS3 + ES modules** (no framework — a single `index.html` + `scene.js`)
- **three.js (WebGPU build)** — `import * as THREE from 'three/webgpu'` with the TSL node system (`three/tsl`)
- **Vite 6** as dev server / bundler (`build.target: 'esnext'` — the scene uses top-level `await`)
- Add-ons (dynamic-imported, fail-safe): `OrbitControls`, `RGBELoader`, and the TSL display nodes `GTAONode`, `DenoiseNode`, `SSRNode`, `BloomNode`

The aesthetic is **dark cinematic space with an interactive voxel globe as the entire hero background, real-time post-processing (ambient occlusion + screen-space reflections + bloom), drifting stardust, and a single violet accent.** `#06060a` is the global background. Default text color is `#ffffff` with muted whites for body. **Do not use yellow/gold, teal, or neon accents anywhere — the only accent is `#6E5BE7`.**

---

## LAYER 2 — FONTS

Load via Google Fonts in `index.html` `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

**Pairing (invariant):**
- **Manrope** (400/500/600/700/800) — headings, logo, stat numbers, planet buttons (display face)
- **Inter** (300/400/500/600/700) — body, nav links, descriptions, CTAs

Rules:
- `html, body` default to the dark background; element font-families are set explicitly per selector (see Layer 4).
- Headlines use Manrope **800** with tight tracking (`letter-spacing: -2px`). The emphasis word inside the H1 is **not italic** — it's the same 800 weight, recolored to the accent.

---

## LAYER 3 — COLOR SYSTEM

Single shipped theme (hex, no theming layer needed):

```
--background        #06060a   /* page + canvas clear */
--foreground        #ffffff   /* headlines, active text */
--body-text         rgba(255,255,255,0.50)   /* hero description */
--muted-text        rgba(255,255,255,0.35)   /* stat labels, idle buttons */
--nav-text          rgba(255,255,255,0.55)   /* nav links */
--hairline          rgba(255,255,255,0.06)   /* stat divider */
--border-soft       rgba(255,255,255,0.15)   /* secondary button border */
--primary           #6E5BE7   /* accent — logo dot, em word, CTAs, eyebrow rule */
--primary-hover     #8170ec   /* accent hover */
--active-pill       rgba(255,255,255,0.08)   /* selected planet button bg */
```

**Accent usage:** `#6E5BE7` appears on the logo's `World` span, the H1 emphasis word, the primary/CTA buttons (filled, white text), and the eyebrow rule. Hover state of every filled accent button is `#8170ec` plus a small `translateY(-1px..-2px)` lift.

---

## LAYER 4 — CUSTOM CSS (the "design DNA")

**Invariant block — paste verbatim.** This is the complete stylesheet that ships inside `<style>` in `index.html`.

```css
* { margin: 0; padding: 0; outline: none !important; box-sizing: border-box; }
html, body { width: 100%; height: 100%; overflow: hidden; background: #06060a; }
canvas { display: block; outline: none !important; }
.error { color: #ef4444; padding: 20px; font-family: monospace; white-space: pre-wrap; }

/* ── Max-width container ── */
.container { width: 100%; max-width: 1320px; margin: 0 auto; padding: 0 56px; }

/* ── Navbar ── */
.navbar {
  position: fixed; top: 0; left: 0; right: 0; z-index: 2000;
  height: 72px; background: transparent; pointer-events: none;
}
.navbar a, .navbar button { pointer-events: auto; }
.navbar .container { display: flex; align-items: center; justify-content: space-between; height: 100%; }
.nav-logo {
  font-family: 'Manrope', sans-serif; font-size: 24px; font-weight: 800;
  color: #fff; letter-spacing: -0.8px; text-decoration: none;
}
.nav-logo span { color: #6E5BE7; }
.nav-links { display: flex; align-items: center; gap: 36px; list-style: none; }
.nav-links a {
  font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 400;
  color: rgba(255,255,255,0.55); text-decoration: none; letter-spacing: 0.2px;
  transition: color 0.25s;
}
.nav-links a:hover { color: #fff; }
.nav-cta {
  font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 500;
  color: #fff; background: #6E5BE7; border: none; border-radius: 8px;
  padding: 10px 24px; cursor: pointer; letter-spacing: 0.2px;
  transition: background 0.25s, transform 0.2s;
}
.nav-cta:hover { background: #8170ec; transform: translateY(-1px); }

/* ── Hero Layout ── */
.hero-section { width: 100%; height: 100vh; position: relative; overflow: hidden; }
.hero-scene { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; }
#root { width: 100%; height: 100%; position: absolute; top: 0; left: 0; }
.hero-inner { position: relative; z-index: 10; height: 100%; pointer-events: none; }
.hero-inner .container { height: 100%; display: flex; align-items: center; }
.hero-content {
  width: 50%; max-width: 560px; display: flex; flex-direction: column;
  justify-content: center; pointer-events: none;
}
.hero-content button, .hero-content a,
.hero-content .btn-primary, .hero-content .btn-secondary { pointer-events: auto; }

/* eyebrow (optional — omitted in shipped hero, kept for reuse) */
.hero-label {
  font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 600;
  text-transform: uppercase; letter-spacing: 2.5px; color: #6E5BE7;
  margin-bottom: 24px; display: flex; align-items: center; gap: 12px;
}
.hero-label::before { content: ''; display: block; width: 32px; height: 1px; background: #6E5BE7; }

.hero-h1 {
  font-family: 'Manrope', sans-serif; font-size: clamp(40px, 4.2vw, 68px);
  font-weight: 800; color: #fff; line-height: 1.06; letter-spacing: -2px;
  margin-bottom: 24px;
}
.hero-h1 em { font-style: normal; font-weight: 800; color: #6E5BE7; }
.hero-desc {
  font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 300;
  color: rgba(255,255,255,0.5); line-height: 1.7; max-width: 420px; margin-bottom: 40px;
}
.hero-buttons { display: flex; align-items: center; gap: 16px; }
.btn-primary {
  font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 500;
  color: #fff; background: #6E5BE7; border: none; border-radius: 10px;
  padding: 14px 32px; cursor: pointer; letter-spacing: 0.2px;
  transition: background 0.25s, transform 0.2s;
}
.btn-primary:hover { background: #8170ec; transform: translateY(-2px); }
.btn-secondary {
  font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 400;
  color: rgba(255,255,255,0.7); background: transparent;
  border: 1px solid rgba(255,255,255,0.15); border-radius: 10px;
  padding: 14px 28px; cursor: pointer; letter-spacing: 0.2px;
  transition: border-color 0.25s, color 0.25s, transform 0.2s;
}
.btn-secondary:hover { border-color: rgba(255,255,255,0.4); color: #fff; transform: translateY(-2px); }

.hero-stats { display: flex; gap: 40px; margin-top: 56px; padding-top: 32px; border-top: none; position: relative; }
.hero-stats::before { content: ''; position: absolute; top: 0; left: 0; width: 120px; height: 1px; background: rgba(255,255,255,0.06); }
.hero-stat-number { font-family: 'Manrope', sans-serif; font-size: 32px; font-weight: 700; color: #fff; letter-spacing: -0.5px; }
.hero-stat-label  { font-family: 'Inter', sans-serif; font-size: 12px; color: rgba(255,255,255,0.35); margin-top: 4px; letter-spacing: 0.3px; }

/* ── Variation Bar (planet switcher) ── */
#variation-bar {
  position: absolute; bottom: 28px; left: 50%; transform: translateX(-50%);
  display: flex; flex-wrap: wrap; justify-content: center; gap: 2px;
  max-width: min(92vw, 760px); z-index: 1000; user-select: none;
  background: transparent; border: none; border-radius: 12px; padding: 0;
}
#variation-bar .morph-btn {
  padding: 8px 15px; background: transparent; border: none; border-radius: 10px;
  color: rgba(255,255,255,0.35); font-family: 'Manrope', sans-serif; font-size: 14px;
  font-weight: 600; cursor: pointer; transition: all 0.3s ease; white-space: nowrap;
  letter-spacing: 0.2px;
}
#variation-bar .morph-btn:hover:not(.active) { color: rgba(255,255,255,0.55); }
#variation-bar .morph-btn.active { background: rgba(255,255,255,0.08); border-radius: 10px; color: #ffffff; }

/* ── Entry Animations ── */
@keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
.anim-1 { animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s  both; }
.anim-2 { animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.35s both; }
.anim-3 { animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.5s  both; }
.anim-4 { animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.65s both; }
.anim-5 { animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.8s  both; }
.nav-anim { animation: fadeIn 0.8s ease 0.1s both; }

/* ── Responsive ── */
@media (max-width: 900px) {
  .container { padding: 0 24px; }
  .navbar { height: 60px; }
  .nav-links { display: none; }
  .hero-content { width: 100%; max-width: 100%; }
  .hero-h1 { font-size: 36px; }
  .hero-stats { gap: 24px; margin-top: 32px; }
}
```

---

## LAYER 5 — BACKGROUND ASSET

**There is NO background video and NO external CDN asset.** The hero background *is* a live three.js WebGPU canvas — a real-time, interactive voxel globe. This replaces the "looping CloudFront video" pattern entirely.

```html
<div class="hero-scene">
  <div id="root"></div>   <!-- WebGPU canvas is appended here -->
</div>
<script type="module" src="/scene.js"></script>
```

**Procedural environment (no HDR fetch on first paint):** generate a PMREM cube from a dark-space gradient sky-dome (`#0a1430` near the horizon → `#03040a` at the zenith) plus one bright emissive "sun" sphere for PBR highlights. Set `scene.background` to that env, `backgroundBlurriness = 0.4`, `backgroundIntensity = 0.5`. (No daytime-sky HDR load — keep it space.)

---

## LAYER 6 — SCENE COMPONENTS (the voxel engine)

> All of this lives in `scene.js`. Implement each subsystem to spec.

### 6a · Renderer + camera
- `WebGPURenderer({ antialias: true })`, ACES Filmic tone mapping, exposure `1.0`, VSM shadow map. Fall back to `forceWebGL: true` if WebGPU init throws.
- `PerspectiveCamera(40, w/h, 0.5, 500)`, position `(26, 18, 52)`, looking at the globe center `(0, 8, 0)`.
- **View offset** shifts the rendered subject ~12% to the right so the left half stays clear for hero copy: `camera.setViewOffset(w, h, -w * 0.12, 0, w, h)`.
- `OrbitControls` with damping `0.05`, `minDistance 2`, `maxDistance 500`, target `(0,8,0)`, **`autoRotate = true`, `autoRotateSpeed = 0.5`** (slow planetary spin).

### 6b · Voxel batching (performance core)
- One **`InstancedMesh` per category** with per-instance color. `BoxGeometry(1,1,1)`. `flatShading: true`, polygon-offset on.
- `createVoxel(name, x, y, z, hex, roughness, metalness, category)` queues a cube into a category batch; a global `occupiedPositions` Set de-dupes by rounded position.
- `buildInstancedMeshes()` finalizes each batch into an `InstancedMesh`, choosing `MeshPhysicalNodeMaterial` (clearcoat) or `MeshStandardNodeMaterial` per category preset.
- Categories used: **`planet`** (rough .82 / metal .08) and **`ring`** (rough .65 / metal .10).

### 6c · The canonical globe
```
GLOBE center   = (0, 8, 0)
SPHERE_R       = 8.6      (outer radius)
SHELL_INNER    = 5.6      (hollow-shell inner radius)
RING_COUNT     = 720      (voxels reserved for Saturn's ring)
```
- Build a **hollow voxel sphere shell**: iterate an integer grid `[-9..9]³`, keep cubes where `SHELL_INNER ≤ |xyz| ≤ SPHERE_R` → category `planet`.
- Reserve `RING_COUNT` extra cubes (category `ring`) on a Fibonacci-lattice direction; placeholder positions are overwritten per planet.
- `fibSphereDir(i, count)` returns an evenly distributed unit direction (golden-angle spiral) — used for ring hiding and stardust.

### 6d · The 8 planets (`generatePlanet(p)` → snapshot of positions + colors)
Per-planet relative size:
```
PLANET_SCALE = [0.70, 0.92, 0.97, 0.80, 1.30, 1.12, 1.06, 1.03]
//               Mer   Ven   Ear   Mar   Jup   Sat   Ura   Nep
VARIATION_NAMES = ['Mercury','Venus','Earth','Mars','Jupiter','Saturn','Uranus','Neptune']
VARIATION_BLOOM = [0.14, 0.18, 0.22, 0.16, 0.20, 0.26, 0.18, 0.22]
```
Surface color via a tiny built-in **value-noise fbm** + latitude/longitude, per planet:
- **Mercury** — grey, cratered (noise-driven brightness).
- **Venus** — cream/orange cloud swirls.
- **Earth** — blue oceans + green/brown land (noise landmask) + white ice caps above `|lat| 0.82`.
- **Mars** — rust palette + dark regions + small polar caps.
- **Jupiter** — horizontal latitude bands + a **Great Red Spot** (angular-distance test near `lat -0.28`, `lon 2.3`).
- **Saturn** — pale-gold bands **+ tilted ring**: ring voxels spread into an annulus `radius 11→17.2`, thin (`±0.35`), tilted `0.46 rad (~26°)`; other planets tuck ring voxels onto the sphere surface so they vanish.
- **Uranus** — pale cyan, faint banding.
- **Neptune** — deep blue + faint bands + a dark spot.

Generate all 8 snapshots up-front into `variationData[0..7]`, then `applyVariationImmediate(0)` to start on **Mercury**; recompute the interaction bounding box from the live positions.

### 6e · Morph between planets
- `startMorph(target)` snapshots the current interpolated state, then over `morphDuration = 1.8s` lerps every instance's position **and** color from current → target.
- Cubic ease-in-out; a **per-voxel stagger** (`sin(x*0.5 + z*0.7)`) makes the change ripple. Bloom strength lerps between `VARIATION_BLOOM[from]` and `[to]`. Saturn's ring fans out / collapses as part of the morph.

### 6f · Cursor repulsion (the signature interaction)
- Raycast onto a camera-facing plane through the globe center (stable, no flicker). Smooth the hit point.
- `repulsionRadius = 10`, `repulsionStrength = 18`, cubic falloff, ~60% radial + 40% per-voxel random scatter, gentle breathing pulse. Offsets lerp out fast (`8.0`) and return slowly (`returnSpeed = 2.5`). Result: blocks **explode away from the cursor and settle back**.

### 6g · Particles
- **Dust motes:** 120 additive `Points`, color `#cfe0ff`, slow sine drift, wrap-around bounds (reads as faint stars).
- **Stardust:** 40 instanced billboard quads spawned in a shell `radius 10→17` around the globe, slow random drift, tumbling rotation, per-planet tint palette (greys for Mercury, blues/white for Earth, gold for Saturn, etc.), fade in/out over a `6–14s` life.

### 6h · Lighting + post-processing
- Ambient `#2a3a55 @ 0.35`; key `DirectionalLight #ffffff @ 3.2` (shadow-casting); soft secondary shadow light; cool fill `#3a5a9c @ 0.55`; warm rim + accent point lights.
- **PostProcessing** MRT pass → **GTAO** (16 samples, radius .60, optional denoise) → **SSR** (resolutionScale .25, strength .25) → **Bloom** (strength .5, radius .2, threshold .8). Each stage is wrapped in try/catch and degrades gracefully if the add-on is unavailable. Adaptive quality lowers AO/SSR samples + pixel-ratio when the camera is close.

---

## LAYER 7 — SECTIONS

### SECTION 1 — HERO (the entire page)

**Block 1 · Container** — `<section class="hero-section">` (full `100vh`, relative, overflow hidden). Inside: `.hero-scene > #root` (canvas, z-0) and `.hero-inner > .container > .hero-content` (z-10).

**Block 2 · Background** — live voxel canvas (Layer 5/6). No overlay; the dark space + view-offset keeps the left column readable.

**Block 3 · Layout** — `.hero-inner .container` is `display:flex; align-items:center; height:100%`. `.hero-content` is a 50%-wide (`max-width:560px`) vertical flex column. The whole content layer is `pointer-events:none` except buttons (so OrbitControls/repulsion receive mouse events through the copy).

**Block 4 · Elements**

1. **Navbar** (`.navbar.nav-anim`, fixed, z-2000, transparent, 72px)
   - Logo: `Pixel` + `<span>World</span>` (span = accent). Manrope 800, 24px.
   - Links (Inter 13px, muted→white on hover): **Solar System · Planets · Gallery · About**
   - CTA (`.nav-cta`, filled accent, white): **Get Started**
2. **H1** (`.hero-h1.anim-2`, Manrope 800, clamp 40–68px, tracking -2px):
   `The World, Seen<br>in <em>3D Pixels</em>` — the `em` word is accent-colored.
3. **Description** (`.hero-desc.anim-3`, Inter 300, 15px, 50% white, max-w 420px) — copy in Block 7.
4. **Buttons** (`.hero-buttons.anim-4`, gap 16px):
   - Primary (`.btn-primary`, filled accent, white): **Explore Planets** → hover `#8170ec` + `translateY(-2px)`.
   - Secondary (`.btn-secondary`, ghost, hairline border): **Learn More**.
5. **Stats row** (`.hero-stats.anim-5`, gap 40px, 1px hairline rule above via `::before`): two items — `8 / Planets`, `60fps / Real-time` (Manrope 700 number, Inter 12px label).
6. **Planet switcher** (`#variation-bar`, absolute bottom-center, wraps, max-w `min(92vw,760px)`): 8 `.morph-btn` (Manrope 600, 14px) with `data-variation="0..7"` — **Mercury · Venus · Earth · Mars · Jupiter · Saturn · Uranus · Neptune**. Index 0 starts `.active` (subtle white pill). Clicking calls `startMorph(index)` and moves the active class.

**Block 5 · Animation** — Hero copy uses the CSS `fadeUp` stagger: H1 `.anim-2` (0.35s) → desc `.anim-3` (0.5s) → buttons `.anim-4` (0.65s) → stats `.anim-5` (0.8s). Navbar fades in via `.nav-anim` (0.1s). Easing `cubic-bezier(0.16,1,0.3,1)`, duration 0.9s, `both` fill.

**Block 6 · Responsive** (`max-width: 900px`): container padding → 24px; navbar 60px; **nav links hidden**; hero-content full width; H1 → 36px; stats gap 24px. The planet bar wraps to multiple rows automatically.

**Block 7 · Copy (verbatim)**
```
Logo:        PixelWorld
Nav:         Solar System | Planets | Gallery | About
Nav CTA:     Get Started
H1:          The World, Seen in 3D Pixels
Description: PixelWorld rebuilds reality one voxel at a time — beginning with all eight planets of the solar system, each rendered live in 3D. Pick a planet to morph between worlds, and move your cursor to scatter the blocks.
Primary CTA: Explore Planets
Secondary:   Learn More
Stats:       8 — Planets   /   60fps — Real-time
Planets:     Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune
Title tag:   PixelWorld — Voxel Solar System
```

---

## LAYER 8 — ANIMATION STANDARDS

```
CSS entry easing:    cubic-bezier(0.16, 1, 0.3, 1)
CSS entry duration:  0.9s, fill: both
Hero stagger:        H1 .35s → desc .5s → buttons .65s → stats .8s (≈0.15s steps)
Navbar:              fadeIn 0.8s ease 0.1s
Button hover:        background 0.25s, transform 0.2s, lift translateY(-1px..-2px)
Planet button:       all 0.3s ease

3D morph:            duration 1.8s, cubic ease-in-out, per-voxel sin() stagger
Globe auto-rotate:   OrbitControls.autoRotateSpeed = 0.5
Repulsion:           track-in lerp 8.0, return lerp 2.5, radius 10, strength 18
```

---

## LAYER 9 — RESPONSIVE STANDARDS

- Mobile-first via a single `@media (max-width: 900px)` block (see Layer 4).
- Hero headline always `clamp(40px, 4.2vw, 68px)` (→ fixed 36px under 900px).
- Container padding `0 56px` desktop → `0 24px` mobile. Max container width `1320px`.
- Nav links hide under 900px (CTA stays); planet bar `flex-wrap`s.
- Renderer resizes on `window.resize` and re-applies the view offset; pixel-ratio capped at `min(devicePixelRatio, 1.5)`.

---

## LAYER 10 — ICON SET

PixelWorld's hero ships **icon-free** — the visual interest is the voxel render, not iconography. If icons are later added (e.g. a play glyph on "Learn More"), restrict to a single minimal set and keep stroke weight consistent with Inter's text weight. Do not introduce decorative/emoji icons.

---

## LAYER 11 — REPRODUCE-EXACTLY CLAUSE

Reproduce exactly. Do not:
- Substitute the fonts (Manrope + Inter — not "similar to").
- Round the accent (`#6E5BE7`, hover `#8170ec`) or the background (`#06060a`).
- Shorten or paraphrase any copy in Layer 7 Block 7.
- Drop the entry-animation delays/easing in Layer 8.
- Replace the live WebGPU voxel canvas with a static image or video — the render *is* the hero.
- Change the globe constants (`SPHERE_R 8.6`, `SHELL_INNER 5.6`, `RING_COUNT 720`, center `(0,8,0)`) or the `PLANET_SCALE` / `VARIATION_BLOOM` arrays.

If a constraint conflicts with the runtime (e.g. WebGPU unavailable), **fall back gracefully** (forceWebGL, skip the missing post-pass) and note the substitution as a comment — never silently change the design.

---

## BUILD / RUN

```bash
npm install        # three.js + vite
npm run dev        # local dev server
npm run build      # production build (vite.config.js sets build.target: 'esnext')
```

`vite.config.js` must set `build.target` and `esbuild.target` to `'esnext'` (the scene uses top-level `await` for the dynamic post-processing imports).

---

## CUSTOMIZATION CHEAT SHEET

| Slot | Where | Swap |
|---|---|---|
| Accent color | Layer 3/4 | `#6E5BE7` / hover `#8170ec` |
| Background | Layer 3/4 | `#06060a` |
| Fonts | Layer 2 | `Manrope` (display) + `Inter` (body) |
| Headline / copy | Layer 7 Block 7 | all verbatim strings |
| Planet set + sizes | Layer 6d | `VARIATION_NAMES`, `PLANET_SCALE`, `VARIATION_BLOOM` |
| Globe scale | Layer 6c | `SPHERE_R`, `SHELL_INNER`, `RING_COUNT`, center |

**Invariant:** Layers 4, 6, 8, 9, 11. Keep them as-is — that is what makes the output recognizably PixelWorld.
