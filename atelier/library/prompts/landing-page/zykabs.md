# ZyKabs — Blockchain Engineering Landing · Fivefold Prompt

```yaml
asset_id: zykabs-blockchain-landing-01
category: landing-page
aesthetic: enterprise-blockchain · minimal-tech · light-mode
industry: blockchain-engineering / web3-infra
tone: credible · enterprise · "audited and serious"
preview_video: https://cdn.5sdesign.art/projects/zykabs.mp4
license: standard
version: 1.0
last_updated: 2026-05-23
notes: Light landing with a single dark stats section. Hero has a 4-tab UI panel
 overlaid on a background video. All 3 feature icons are PNGs (not lucide).
 Built React 18 + Vite 6 + Tailwind 3 + lucide-react. No animation library —
 only CSS keyframes + animationDelay stagger.
```

---

## LAYER 1 — OPENING DECLARATION

Build a **7-section landing page** for **ZyKabs** — a Blockchain Engineering Team that provides infrastructure + smart contract solutions for Web3 projects. Tagline visual: `Build Faster. / Scale Decentralized.` with the second line wrapped in a black → blue gradient.

Use the following **pinned** tech stack (do not substitute):

- **React 18** + **Vite 6** (no React Router, no state library)
- **Tailwind CSS 3** (default config; no extension)
- **lucide-react** — only: `ShieldCheck`, `Layers`, `Database`, `MessageCircle`, plus arrows/social
- **Inter** font (weights 400/500/600/700) via Google Fonts in `index.html`
- **No animation library** — only CSS keyframes + `animationDelay` stagger via Tailwind utility classes

The aesthetic is **light-mode enterprise blockchain** — pure white background, near-black ink text, a single black → blue gradient on the headline's second line (`from-black via-blue-600 to-indigo-400`), and one dark inverted section ("Tech Stats") for visual rhythm. Hero has a glass UI overlay panel showing 4 alternating tabs (Node / Bridge / Audit / Launch) that swap every 4 seconds — this is the signature interactive element.

**Do not use:** dark mode toggle, multiple gradient sections (only the headline + dark stats section have color), purple, neon, framer-motion, emoji, social proof logos (the brand has none yet).

---

## LAYER 2 — FONTS

In `index.html` head:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

Body default: `body { font-family: 'Inter', system-ui, sans-serif; }` (Tailwind sans by default uses system-ui — override with `body` selector in `src/index.css`).

---

## LAYER 3 — DESIGN TOKENS

Default Tailwind palette only — **do not extend `tailwind.config.js`**. The single brand accent is built from Tailwind's `blue-600` (`#2563eb`) and `indigo-400` (`#818cf8`).

| Token | Tailwind class | Usage |
|---|---|---|
| Page bg | `bg-white` | Body, all sections except stats |
| Stats bg | `bg-zinc-900` | Tech Stats section, inverted |
| Primary text | `text-zinc-900` | Headlines, body |
| Subtle text | `text-zinc-600` | Subheadings, paragraphs |
| Faint text | `text-zinc-400` | Captions, metadata |
| Border | `border-zinc-200` | Hairlines, card borders |
| Accent gradient | `from-black via-blue-600 to-indigo-400` | Only on `Scale Decentralized.` headline line |

Custom CSS keyframes in `src/index.css` (additions only):

```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeInOverlay {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes pulseDot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%      { opacity: 0.5; transform: scale(1.2); }
}

.animate-fade-in-up { animation: fadeInUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) backwards; }
.animate-pulse-dot  { animation: pulseDot 1.6s ease-in-out infinite; }
```

Each section's children apply `animation-delay` via inline `style={{animationDelay: '0.2s'}}` (stagger in 0.1s steps).

---

## LAYER 4 — ANIMATION

- **Section entry:** every section's direct children apply `.animate-fade-in-up` + inline `animationDelay` (0.1s, 0.2s, 0.3s, ...). No IntersectionObserver — runs on mount.
- **Hero tab auto-advance:** `useState<'node' | 'bridge' | 'audit' | 'launch'>('node')` + `useEffect` with `setInterval` 4000ms cycling through the 4 keys. Switching tabs swaps the overlay panel content via conditional render — no transition library, the browser handles the snap.
- **Pulse dots:** the active validator node region indicators use `.animate-pulse-dot`.

CSS transitions only on:
- Tab button background: `bg-zinc-100 → bg-zinc-900 text-white` with `transition-colors duration-200`.
- Button hovers: `bg-zinc-900 → bg-zinc-800` with `transition-colors duration-200`.

---

## LAYER 5 — BACKGROUND ASSETS

**Hero video served from Fivefold CDN:**

```ts
const HERO_VIDEO = "https://cdn.5sdesign.art/projects/ZyKabs/zykabs-hero.mp4";
```

**Feature icons — buyer supplies (or generate via Midjourney / DALL·E / Recraft / Pencil).** Save under `public/icons/` with these exact filenames:

```
public/icons/
├── high-throughput.png      ← Card 1 icon
├── formal-verification.png  ← Card 2 icon
└── interoperability.png     ← Card 3 icon
```

| File | Suggested gen prompt | Specs |
|---|---|---|
| `high-throughput.png` | `3D isometric icon, lightning bolt + parallel data streams, monochrome navy blue + cyan accent, transparent background, abstract tech illustration, soft shadows` | 512×512 PNG, transparent bg, single icon centered, ~80% of canvas |
| `formal-verification.png` | `3D isometric icon, shield with checkmark and mathematical proof symbols (∀ ∃ →), monochrome navy + green accent, transparent background, abstract tech illustration` | 512×512 PNG, transparent bg, same visual weight as throughput icon |
| `interoperability.png` | `3D isometric icon, interlocking chains / two cubes connected by glowing nodes, monochrome navy + purple accent, transparent background, abstract tech illustration` | 512×512 PNG, transparent bg, same visual weight |

Constants in code reference local paths:

```ts
const ICON_THROUGHPUT  = "/icons/high-throughput.png";
const ICON_VERIFY      = "/icons/formal-verification.png";
const ICON_INTEROP     = "/icons/interoperability.png";
```

All 3 icons should share visual language: same isometric perspective, same lighting direction, same accent intensity. The 3-icon grid only works if they read as a set.

**Hero video usage:**

```jsx
<video
  src={HERO_VIDEO}
  autoPlay loop muted playsInline
  className="absolute inset-0 w-full h-full object-cover opacity-90"
/>
<div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] pointer-events-none" />
```

The video is subtle — the white overlay at 40% opacity + 2px blur softens it so it reads as ambient texture, not a foreground hero. The interactive 4-tab panel is the focal point.

**3 Feature icons** are rendered as `<img>` at `w-12 h-12 object-contain` inside the feature card headers.

---

## LAYER 6 — SHARED COMPONENTS

### `TabButton` (used in Hero)

```jsx
function TabButton({ active, onClick, label }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 ${
        active ? 'bg-zinc-900 text-white' : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
      }`}
    >
      {label}
    </button>
  );
}
```

### Section eyebrow (used across)

```jsx
<span className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-500">
  THE ZYKABS PIPELINE
</span>
```

### Pulse dot

```jsx
<span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot" />
```

---

## LAYER 7 — SECTION-BY-SECTION SPEC

Render order in `App.jsx`:

```
Navigation → Hero → Features → How It Works → Tech Stats → Bottom CTA → Footer
```

### 7.1 Navigation

`sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-zinc-200`. Container `max-w-7xl mx-auto px-6 py-4 flex items-center justify-between`.

- **Left:** logo block — `<div className="flex items-center gap-2"><Layers className="w-6 h-6 text-zinc-900" /><span className="text-lg font-semibold tracking-tight">ZyKabs</span></div>`
- **Right:** single CTA — `<a href="mailto:nqhuy30600@gmail.com" className="rounded-full bg-zinc-900 text-white text-sm font-medium px-5 py-2.5 hover:bg-zinc-800 transition-colors">Get Started</a>`

Note: no menu items. The original spec had 5 (Ecosystem/Developers/Solutions/Governance/Launch App) but they were intentionally removed — keep the nav clean.

### 7.2 Hero

Wrapper: `relative pt-16 md:pt-20 pb-20 md:pb-28 overflow-hidden`.

**Background:** the hero video + 40% white overlay (Layer 5).

**Content** (`relative z-10 max-w-7xl mx-auto px-6`):

1. **Badge** — `inline-flex items-center gap-2 rounded-full bg-zinc-100 border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-700 mb-8 animate-fade-in-up`:
   - `<ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />`
   - `Audited by Top Tier Security Firms`

2. **Heading** (`text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[1.05] animate-fade-in-up`, delay 0.1s):
   - Line 1: `Build Faster.`
   - Line 2: `<span className="bg-gradient-to-r from-black via-blue-600 to-indigo-400 bg-clip-text text-transparent">Scale Decentralized.</span>`

3. **Subheading** (`mt-6 max-w-2xl text-base md:text-lg text-zinc-600 leading-[1.6] animate-fade-in-up`, delay 0.2s):
   > `ZyKabs provides the infrastructure and smart contract solutions modern Web3 protocols need to launch with confidence — formally verified, cross-chain ready, and audited end-to-end.`

4. **CTA** (`mt-10 animate-fade-in-up`, delay 0.3s):
   - `<a href="#" className="inline-flex items-center gap-2 rounded-full bg-zinc-900 text-white text-sm font-medium px-6 py-3 hover:bg-zinc-800 transition-colors">Explore Documentation <ArrowRight className="w-4 h-4" /></a>`

5. **Tab bar** (`mt-16 flex flex-wrap gap-2 animate-fade-in-up`, delay 0.4s):
   - 4 `<TabButton>` for `Node`, `Bridge`, `Audit`, `Launch`. State `useState<TabKey>('node')`. Auto-advance via `useEffect` `setInterval(4000)` cycling through the 4 keys.

6. **Tab overlay panel** (the signature element — `mt-8 relative animate-fade-in-up`, delay 0.5s):
   - Container: `rounded-2xl border border-zinc-200 bg-white/95 backdrop-blur-md shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] p-6 md:p-8`.
   - Conditional content per tab (see below).

#### Tab content variants

**Tab: `node`** — *Validator Node Status*

```jsx
<div className="grid md:grid-cols-2 gap-8">
  {/* Left: status header */}
  <div>
    <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-zinc-500">VALIDATOR NODE STATUS</div>
    <div className="mt-3 flex items-baseline gap-3">
      <span className="text-5xl font-semibold tracking-[-0.02em]">99.9%</span>
      <span className="text-sm text-zinc-600">uptime</span>
    </div>
    <div className="mt-1 text-sm text-zinc-600">12 regions · 150+ nodes globally</div>
  </div>
  {/* Right: 3 region latency bars */}
  <div className="space-y-3">
    {[
      { region: 'us-east', latency: '24ms', pct: 92 },
      { region: 'eu-west', latency: '38ms', pct: 84 },
      { region: 'ap-south', latency: '52ms', pct: 76 },
    ].map((r) => (
      <div key={r.region}>
        <div className="flex items-center justify-between text-xs mb-1.5">
          <span className="flex items-center gap-2 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot" />
            {r.region}
          </span>
          <span className="text-zinc-500">{r.latency}</span>
        </div>
        <div className="h-1.5 bg-zinc-100 rounded-full overflow-hidden">
          <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${r.pct}%` }} />
        </div>
      </div>
    ))}
  </div>
</div>
```

**Tab: `bridge`** — *Cross-chain Liquidity*

Visualization: ETH `12.45` → Cosmos `12.38 ATOM*` with arrow icon in between. Route stamps: `IBC` + `Axelar` as small pills (`text-xs px-2 py-1 rounded bg-zinc-100`).

```jsx
<div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
  <div className="text-center">
    <div className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-2">ETHEREUM</div>
    <div className="text-3xl font-semibold">12.45 ETH</div>
    <div className="text-xs text-zinc-500 mt-1">Source</div>
  </div>
  <div className="flex items-center justify-center"><ArrowRight className="w-6 h-6 text-zinc-400" /></div>
  <div className="text-center">
    <div className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-2">COSMOS</div>
    <div className="text-3xl font-semibold">12.38 ATOM*</div>
    <div className="text-xs text-zinc-500 mt-1">Destination</div>
  </div>
  <div className="md:col-span-3 mt-4 flex justify-center gap-2">
    <span className="text-xs px-2 py-1 rounded bg-zinc-100 text-zinc-700">via IBC</span>
    <span className="text-xs px-2 py-1 rounded bg-zinc-100 text-zinc-700">via Axelar</span>
  </div>
</div>
```

**Tab: `audit`** — *Smart Contract Security Report*

Big circular score `100/100`, 4 stat rows (Critical 0 / High 0 / Medium 0 / Informational 3), bottom: `Audited by CertiK · OpenZeppelin · Trail of Bits`.

```jsx
<div className="grid md:grid-cols-2 gap-8 items-center">
  {/* Circular score (SVG ring) */}
  <div className="flex flex-col items-center">
    <div className="relative w-32 h-32">
      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
        <circle cx="50" cy="50" r="42" stroke="#e4e4e7" strokeWidth="8" fill="none" />
        <circle cx="50" cy="50" r="42" stroke="#10b981" strokeWidth="8" fill="none"
          strokeDasharray={`${2 * Math.PI * 42}`} strokeDashoffset="0" strokeLinecap="round" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-3xl font-semibold">100</div>
        <div className="text-xs text-zinc-500">/100</div>
      </div>
    </div>
    <div className="mt-3 text-xs uppercase tracking-[0.2em] text-zinc-500">SECURITY SCORE</div>
  </div>
  {/* Findings */}
  <div className="space-y-2 text-sm">
    {[['Critical', 0, 'text-zinc-500'], ['High', 0, 'text-zinc-500'], ['Medium', 0, 'text-zinc-500'], ['Informational', 3, 'text-zinc-700']].map(([level, count, color]) => (
      <div key={level} className="flex items-center justify-between border-b border-zinc-100 pb-2">
        <span className={color}>{level}</span>
        <span className="font-semibold">{count}</span>
      </div>
    ))}
    <div className="pt-3 text-xs text-zinc-500">Audited by <span className="text-zinc-700 font-medium">CertiK · OpenZeppelin · Trail of Bits</span></div>
  </div>
</div>
```

**Tab: `launch`** — *Mainnet Deployment*

Contract address preview (truncated hex), gas estimate `0.024 ETH`, priority `Fast`, Deploy button.

```jsx
<div className="space-y-5">
  <div>
    <div className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-2">CONTRACT ADDRESS</div>
    <div className="font-mono text-sm bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2 break-all">0x742d35Cc6634C0532925a3b8442B4dC8C4F8c8E1</div>
  </div>
  <div className="grid grid-cols-2 gap-4">
    <div>
      <div className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-2">GAS ESTIMATE</div>
      <div className="text-2xl font-semibold">0.024 ETH</div>
    </div>
    <div>
      <div className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-2">PRIORITY</div>
      <div className="text-2xl font-semibold">Fast</div>
    </div>
  </div>
  <button className="w-full rounded-full bg-zinc-900 text-white font-medium py-3 hover:bg-zinc-800 transition-colors">
    Deploy to Mainnet
  </button>
</div>
```

### 7.3 Features

Wrapper: `py-24 md:py-32 max-w-7xl mx-auto px-6`.

**Header:** centered, `max-w-3xl mx-auto text-center mb-16`.
- Eyebrow `text-xs font-semibold tracking-[0.2em] uppercase text-zinc-500 animate-fade-in-up`: `INFRASTRUCTURE`
- Heading `mt-3 text-3xl md:text-5xl font-semibold tracking-[-0.025em] leading-[1.1] animate-fade-in-up`, delay 0.1s: `Infrastructure for the Decentralized Frontier`
- Subhead `mt-5 text-base text-zinc-600 leading-[1.6] animate-fade-in-up`, delay 0.2s: `Three pillars engineered for protocols that need to ship without compromise.`

**Grid:** `grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8`.

Each card (`group p-8 rounded-2xl border border-zinc-200 hover:border-zinc-300 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.08)] transition-all animate-fade-in-up`, delay i*0.1 + 0.3s):

| # | Icon | Title | Body |
|---|---|---|---|
| 1 | `ICON_THROUGHPUT` | `High Throughput` | `Optimized execution layer capable of processing 100k+ transactions per second with sub-second finality.` |
| 2 | `ICON_VERIFY` | `Formal Verification` | `Our smart contracts undergo rigorous formal verification to ensure mathematical correctness and security.` |
| 3 | `ICON_INTEROP` | `Interoperability` | `Native support for IBC and cross-chain protocols to connect your dApp with the entire crypto ecosystem.` |

Inside each card:
```jsx
<img src={icon} alt="" className="w-12 h-12 object-contain mb-5 group-hover:scale-105 transition-transform" />
<h3 className="text-xl font-semibold tracking-[-0.01em] mb-3">{title}</h3>
<p className="text-sm text-zinc-600 leading-[1.65]">{body}</p>
```

### 7.4 How It Works

Wrapper: `py-24 md:py-32 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`.

**Left column:**
- Eyebrow: `THE ZYKABS PIPELINE`
- Heading: `mt-3 text-3xl md:text-5xl font-semibold tracking-[-0.025em] leading-[1.1]`: `From Concept to Mainnet`
- 3 numbered steps (`mt-12 space-y-10`), each:
  ```jsx
  <div className="flex gap-6">
    <span className="text-3xl font-light text-zinc-300">01</span>
    <div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-sm text-zinc-600 leading-[1.65] max-w-md">{body}</p>
    </div>
  </div>
  ```
- Step content:
  1. `Protocol Design` — `Tailored tokenomics and architecture.`
  2. `Security Audit` — `Deep-dive code review and bug bounty.`
  3. `Ecosystem Growth` — `Liquidity provisioning and community launch.`

**Right column:** infrastructure visualization on a grid-dots background.

```jsx
<div
  className="relative aspect-square rounded-2xl border border-zinc-200 p-8"
  style={{
    backgroundImage: 'radial-gradient(circle, #e4e4e7 1px, transparent 1px)',
    backgroundSize: '20px 20px',
  }}
>
  {/* 4 database blocks linked */}
  <div className="grid grid-cols-2 gap-4 mb-6">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="aspect-square rounded-lg bg-white border border-zinc-200 flex items-center justify-center">
        <Database className="w-6 h-6 text-zinc-700" />
      </div>
    ))}
  </div>
  {/* Bridge Relay panel — streaming pill */}
  <div className="rounded-xl bg-white border border-zinc-200 p-3 mb-3 flex items-center gap-3">
    <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot" />
    <span className="text-xs font-medium">Bridge Relay</span>
    <span className="text-xs text-zinc-500 ml-auto font-mono">streaming…</span>
  </div>
  {/* Vault with shield */}
  <div className="rounded-xl bg-white border border-zinc-200 p-3 flex items-center gap-3">
    <ShieldCheck className="w-5 h-5 text-emerald-600" />
    <span className="text-xs font-medium">Vault — Protected</span>
  </div>
</div>
```

### 7.5 Tech Stats (dark inverted)

Wrapper: `max-w-7xl mx-auto px-6 py-16`.

Inner: `rounded-3xl bg-zinc-900 text-white p-12 md:p-20`.

Grid: `grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center md:text-left`.

| # | Value | Label |
|---|---|---|
| 1 | `$2.5B+` | `TVL Secured` |
| 2 | `<0.8s` | `Block Time` |
| 3 | `150+` | `Nodes Globally` |
| 4 | `Zero` | `Security Breaches` |

Each cell:
```jsx
<div>
  <div className="text-4xl md:text-5xl font-semibold tracking-[-0.02em]">{value}</div>
  <div className="mt-3 text-xs uppercase tracking-[0.2em] text-zinc-400">{label}</div>
</div>
```

### 7.6 Bottom CTA

Wrapper: `py-24 md:py-32 max-w-3xl mx-auto px-6 text-center`.

- Heading `text-3xl md:text-5xl font-semibold tracking-[-0.025em] leading-[1.1]`: `Ready to launch your protocol?`
- Subhead `mt-5 text-zinc-600`: `Get a free architecture review and security audit estimate within 48 hours.`
- 2 CTAs (`mt-10 flex flex-col sm:flex-row gap-3 justify-center`):
  - Primary (dark): `<a href="mailto:nqhuy30600@gmail.com" className="rounded-full bg-zinc-900 text-white font-medium px-6 py-3 hover:bg-zinc-800 transition-colors">Start Building</a>`
  - Secondary (outline): `<a href="mailto:nqhuy30600@gmail.com" className="rounded-full border border-zinc-300 text-zinc-900 font-medium px-6 py-3 hover:bg-zinc-50 transition-colors">Contact Engineering</a>`

### 7.7 Footer

Wrapper: `border-t border-zinc-200 py-12 px-6 max-w-7xl mx-auto`.

Top grid: `grid grid-cols-2 md:grid-cols-5 gap-10`.

- **Left** (col-span-2): logo + `<p className="mt-3 text-sm text-zinc-600 max-w-xs">Engineering the decentralized future.</p>`
- **3 link columns:**
  - **Ecosystem**: `Explorer`, `Bridge`, `Staking`
  - **Developers**: `Docs`, `Github`, `Grants`
  - **Company**: `About`, `Careers`, `Contact`
- Column title: `text-xs font-semibold uppercase tracking-[0.15em] text-zinc-900 mb-3`. Links: `block mt-2 text-sm text-zinc-600 hover:text-zinc-900`.

Bottom row: `mt-12 pt-6 border-t border-zinc-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-500`:
- Left: `© 2026 ZyKabs. All rights reserved.`
- Right (social icons, `flex gap-4`):
  - X/Twitter SVG inline
  - Discord — `<MessageCircle className="w-4 h-4" />`
  - GitHub SVG inline

---

## LAYER 8 — RESPONSIVE BREAKPOINTS

| BP | Hero | Features | How It Works | Tech Stats |
|---|---|---|---|---|
| **<768** | Heading `text-4xl`, tabs wrap, panel stacks single col | 1 col | stacked, viz hidden or below text | 2×2 grid |
| **768–1023** | Heading `text-6xl`, 2-col panel grids | 3 col | 2-col layout | 4 col single row |
| **≥1024** | Heading `text-7xl`, full panel layouts | 3 col | full visualization | same |

---

## LAYER 9 — CONTENT STRINGS (verbatim)

| Location | String |
|---|---|
| Nav logo | `ZyKabs` |
| Nav CTA | `Get Started` (href: `mailto:nqhuy30600@gmail.com`) |
| Hero badge | `Audited by Top Tier Security Firms` |
| Hero h1 line 1 | `Build Faster.` |
| Hero h1 line 2 (gradient) | `Scale Decentralized.` |
| Hero subhead | `ZyKabs provides the infrastructure and smart contract solutions modern Web3 protocols need to launch with confidence — formally verified, cross-chain ready, and audited end-to-end.` |
| Hero CTA | `Explore Documentation` |
| Hero tab labels | `Node`, `Bridge`, `Audit`, `Launch` |
| Features eyebrow | `INFRASTRUCTURE` |
| Features h2 | `Infrastructure for the Decentralized Frontier` |
| How It Works eyebrow | `THE ZYKABS PIPELINE` |
| How It Works h2 | `From Concept to Mainnet` |
| Tech Stats values | `$2.5B+`, `<0.8s`, `150+`, `Zero` |
| Tech Stats labels | `TVL Secured`, `Block Time`, `Nodes Globally`, `Security Breaches` |
| Bottom CTA h2 | `Ready to launch your protocol?` |
| Bottom CTA buttons | `Start Building`, `Contact Engineering` (both mailto) |
| Footer tagline | `Engineering the decentralized future.` |
| Footer columns | Ecosystem · Developers · Company (see Section 7.7) |
| Footer copyright | `© 2026 ZyKabs. All rights reserved.` |

---

## LAYER 10 — FILE TREE

```
src/
├── main.jsx
├── App.jsx           (entire landing — 7 sections in one file)
└── index.css         (Tailwind + 3 keyframes + 2 animation utilities)

public/
└── (empty — all assets served from CDN URLs)

index.html            (Inter font + title + meta)
package.json
vite.config.js
tailwind.config.js    (default — no extend)
postcss.config.js
```

`package.json` dependencies:

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "lucide-react": "^0.460.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.0",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.15",
    "vite": "^6.0.0"
  }
}
```

---

## LAYER 11 — DELIVERY CHECKLIST

- [ ] `npm create vite@latest .` (React JS template).
- [ ] `npm i lucide-react@0.460 && npm i -D tailwindcss@3 postcss autoprefixer`.
- [ ] `tailwind.config.js` content paths only — **no** theme extend.
- [ ] `index.html` loads Inter 400/500/600/700 via Google Fonts.
- [ ] `src/index.css` has `@tailwind` directives + 3 custom keyframes + 2 animation utility classes.
- [ ] `App.jsx` renders 7 sections in order: Navigation → Hero → Features → How It Works → Tech Stats → Bottom CTA → Footer.
- [ ] Hero overlay panel: 4 tabs with `useState<'node'|'bridge'|'audit'|'launch'>('node')` + `setInterval(4000)` auto-advance.
- [ ] Node tab: 99.9% uptime header + 3 region latency bars with `.animate-pulse-dot` green dots.
- [ ] Bridge tab: ETH 12.45 → ATOM 12.38 with arrow icon, IBC/Axelar pills below.
- [ ] Audit tab: SVG circular score 100/100 with green stroke + 4 findings rows.
- [ ] Launch tab: contract address mono font, gas estimate, priority, Deploy button.
- [ ] Headline line 2 uses `bg-gradient-to-r from-black via-blue-600 to-indigo-400 bg-clip-text text-transparent`.
- [ ] All 3 feature icons saved to `public/icons/` (buyer-supplied per Layer 5 specs), referenced as `/icons/high-throughput.png` etc, rendered `w-12 h-12 object-contain`.
- [ ] Hero video URL = `https://cdn.5sdesign.art/projects/ZyKabs/zykabs-hero.mp4`, white/40 + 2px blur overlay above.
- [ ] All CTAs (`Get Started`, `Start Building`, `Contact Engineering`) link to `mailto:nqhuy30600@gmail.com`.
- [ ] Tech Stats section uses `rounded-3xl bg-zinc-900 text-white` — the ONLY dark section.
- [ ] Animation: every section's children apply `.animate-fade-in-up` with inline `style={{ animationDelay: ...'s' }}` stagger (0.1s steps).
- [ ] No purple, no neon, no nav menu items, no partner logo strip.
