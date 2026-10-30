# Hybera — L2 Settlement Layer · Fivefold Prompt

```yaml
asset_id: hybera-fintech-light-01
category: landing-page
aesthetic: editorial-fintech-light
industry: blockchain-l2 / institutional-defi
tone: trustworthy · premium · "fintech-meets-web3"
preview_video: https://cdn.5sdesign.art/projects/hybera.mp4
license: pro
version: 1.0
last_updated: 2026-05-20
notes: Light-mode only. 7 sections. No framer-motion (custom useReveal hook + CSS keyframes).
 No liquid-glass utility. Italic-emphasis is the signature treatment.
```

---

## LAYER 1 — OPENING DECLARATION

Build a **multi-section landing page** (cinematic video hero + 7 sections + footer) for **Hybera** — a modular Layer-2 settlement layer for institutional-grade on-chain finance with the tagline *"the settlement layer for trustless capital."*

Use the following **pinned** tech stack (do not substitute):

- **React 19 + TypeScript + Vite 6.x**
- **Tailwind CSS v3** (default config + extensions in Layer 3)
- **lucide-react** for icons — only: `ArrowUpRight`, `ChevronLeft`, `ChevronRight`
- **No animation library.** All motion via CSS keyframes (Layer 4) + custom `useReveal` hook (Layer 6) + rAF-driven video fade.
- **No router, no state management library** — single-page landing.

The aesthetic is **light-mode editorial fintech**, with a warm off-white background, near-black foreground, a single deep-navy accent reserved for hover states only, and italic-Urbanist emphasis on key phrases throughout. Global background is `#FAFAF7` (NOT pure white). A subtle SVG grain noise overlay at 2.5% opacity sits fixed over the entire page for premium tactile feel.

**Do not use:** dark mode toggle, pure white (#FFFFFF) anywhere, gradients on backgrounds, framer-motion, liquid-glass utility, the navy accent on default states (only on `hover:`), green/purple/teal colors, emoji.

---

## LAYER 2 — FONTS

Load via Google Fonts in `src/styles/fonts.css`:

```css
@import url("https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:wght@300;400;500;600&display=swap");
```

**Pairing:** `Urbanist` (300-700 + matching italics) for display/headings + `Inter` (300/400/500/600) for body and labels.

Tailwind config extension:

```js
fontFamily: {
  display: ['Urbanist', 'sans-serif'],
  body:    ['Inter', 'sans-serif'],
}
```

Body default: `font-family: 'Inter', sans-serif;` applied via Tailwind base.

**Italic emphasis is the signature treatment.** Throughout the page, key phrases inside headings are wrapped in `<em className="text-muted">` to create italic + muted-color emphasis against the surrounding `font-display` non-italic foreground text. Always use Urbanist italics — never substitute another italic.

---

## LAYER 3 — COLOR SYSTEM

**This project uses Tailwind hex color tokens directly** (not CSS variables / HSL theming).

```js
// tailwind.config.js — theme.extend
colors: {
  background: '#FAFAF7',  // warm off-white, NOT pure white
  foreground: '#0A0A0A',  // near-black, softer than pure black
  muted:      '#6B6B6B',  // secondary text, italic emphasis
  accent:     '#1E2A4A',  // deep navy — reserved for hover states only
  surface:    '#F2F0EA',  // subtle warm gray for service-row hover bg
},
```

**Hex usage map:**
- `bg-background` — page body
- `bg-foreground` — dark sections (Case Studies, CTA card)
- `text-foreground` — primary text on light bg
- `text-muted` — italic emphasis, subheadings, captions
- `text-white/60`, `text-white/50`, `text-white/20` — on dark sections (Case Studies, CTA)
- `border-foreground/10`, `border-foreground/15` — hairlines on light bg
- `border-white/20` — hairlines on dark bg
- `bg-surface/50` — service row hover background
- `hover:bg-accent` — Launch App button hover only (sparingly used)

---

## LAYER 4 — CUSTOM CSS UTILITIES

Paste verbatim into `src/styles/theme.css` (imported by `src/index.css` along with `fonts.css` and Tailwind directives).

### 4a. Keyframes

```css
@keyframes fade-rise {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes slide-up {
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes count-up {
  from { opacity: 0; transform: scale(0.8); }
  to   { opacity: 1; transform: scale(1); }
}
@keyframes subtle-float {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-4px); }
}
```

### 4b. Animation utility classes

```css
.animate-fade-rise {
  animation: fade-rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
.animate-fade-rise-delay {
  opacity: 0;
  animation: fade-rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.25s forwards;
}
.animate-fade-rise-delay-2 {
  opacity: 0;
  animation: fade-rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.5s forwards;
}
.animate-subtle-float {
  animation: subtle-float 4s ease-in-out infinite;
}
```

### 4c. Scroll-reveal class system (paired with `useReveal` hook in Layer 6)

```css
.reveal {
  opacity: 0;
  transform: translateY(36px);
  transition: opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.85s cubic-bezier(0.22, 1, 0.36, 1);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
.reveal-stagger-1 { transition-delay: 0.1s; }
.reveal-stagger-2 { transition-delay: 0.2s; }
.reveal-stagger-3 { transition-delay: 0.3s; }
.reveal-stagger-4 { transition-delay: 0.4s; }
.reveal-stagger-5 { transition-delay: 0.5s; }
.reveal-stagger-6 { transition-delay: 0.6s; }
```

### 4d. Fixed grain noise overlay (the "premium tactile" texture)

Paste verbatim into `src/index.css`:

```css
body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  opacity: 0.025;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
  background-size: 200px 200px;
}
body { overflow-x: hidden; }
```

**Do NOT add the Fivefold default `.liquid-glass` utility.** Hybera's premium feel comes from the grain noise overlay + italic Urbanist + warm off-white — NOT from glass morphism. Adding liquid-glass would make it look like a crypto site, not a fintech site.

---

## LAYER 5 — BACKGROUND ASSETS

Four videos referenced via constants in their respective components — easy to swap to hosted CDN URLs.

```ts
// All defined as string constants in their owning components:
const VIDEO_HERO     = "https://cdn.5sdesign.art/projects/Hybera/hybera-hero.mp4";       // VideoBackground.tsx
const VIDEO_AURORA   = "https://cdn.5sdesign.art/projects/Hybera/hybera-aurora.mp4";     // CaseStudiesSection.tsx (project 1)
const VIDEO_TESSERA  = "https://cdn.5sdesign.art/projects/Hybera/hybera-tessera.mp4";    // CaseStudiesSection.tsx (project 2)
const VIDEO_BUILDERS = "https://cdn.5sdesign.art/projects/Hybera/hybera-builders.mp4";   // TestimonialsSection.tsx (all 3 slides)
```

**Recommended hosts:** Cloudflare R2 (free egress) · Bunny CDN · Cloudinary · S3+CloudFront.

**Static images** under `public/`:
- `/hybera-logo.png` — brand mark + wordmark, black on transparent (~9000×3000)
- `/img/cta-bg.png` — abstract dark composition with concentric circles, used as CTA card background
- `/partners/P-01.png` through `/partners/P-05.png` — partner logos (zkSync, Arbitrum, Optimism, Base, Mantle)

**Hero video behavior is special** — see Layer 6 `VideoBackground` component (rAF-driven manual fade, not native HTML `loop`).

---

## LAYER 6 — SHARED COMPONENTS

### 6a. `useReveal` hook — `src/hooks/useReveal.ts`

```tsx
import { useEffect, useRef } from 'react';

export function useReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const elements = container.querySelectorAll<HTMLElement>('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}
```

**Usage:** Each section component calls `const ref = useReveal<HTMLElement>();` and applies `ref={ref}` to its outer `<section>`. Any child element inside that section with `className="reveal reveal-stagger-N"` will animate in when scrolled into view.

### 6b. `VideoBackground` component — `src/components/VideoBackground.tsx`

rAF-driven manual fade-loop (do NOT use HTML `loop` attribute).

**Spec:**
- Outer container: `absolute`, `top: 300px`, fills `right/bottom/left`, `overflow-hidden`.
- `<video>` attrs: `muted`, `playsInline`, `autoPlay` — **NO `loop` attribute** (manual loop below).
- Class: `w-full h-full object-cover`.
- `src = VIDEO_HERO` (hosted on Fivefold CDN — see Layer 5 constant).
- Below video, gradient overlay: `<div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />`

**Fade logic** (`FADE_DURATION = 0.5` seconds):
- On `timeupdate`: read `currentTime` and `duration`.
  - If `currentTime < 0.5`: opacity = `currentTime / 0.5` (fade in)
  - Else if `duration - currentTime < 0.5`: opacity = `(duration - currentTime) / 0.5` (fade out)
  - Else: opacity = 1
- On `ended`: set opacity to 0, `setTimeout(100ms)` → reset `currentTime = 0`, call `play()`, opacity continues fade-in via next `timeupdate`.
- Cancel any pending `rAF` on unmount.

This is the same pattern as the classic `FadingVideo` component but with explicit start/end thresholds (0.5s each) — gives a clean cinematic loop with no flash at restart.

### 6c. No other shared components

Hybera does NOT use `BlurText`, `WordsPullUp`, `AnimatedLetter`, `Magnet`, or `ClipReveal`. All non-video animations come from the keyframe utilities in Layer 4 + the `useReveal` hook above.

---

## LAYER 7 — SECTIONS

7 sections in order. Outer wrapper:

```tsx
<div className="bg-background text-foreground">
  <div className="relative min-h-screen overflow-hidden">
    <VideoBackground />
    <Navbar />
    <HeroSection />
  </div>
  <ServicesSection />
  <CaseStudiesSection />
  <MetricsSection />
  <TestimonialsSection />
  <CtaSection />
  <Footer />
</div>
```

---

### SECTION 1 — Navbar

**File:** `src/components/Navbar.tsx`

**Block 1 · Container**
- Position: `absolute top-0 inset-x-0 z-30`
- Inner: `max-w-7xl mx-auto flex items-center justify-between px-6 py-6`

**Block 4 · Elements**
- **Left — Logo image (NOT text):**
  ```tsx
  <img src="/hybera-logo.png" alt="Hybera" className="h-8 w-auto" />
  ```
  Logo already contains brand mark + wordmark. **No extra text, no accent dot.**
- **Center (`hidden md:flex items-center gap-9`):** 5 nav links
  - "Protocol" (active) → `text-sm text-foreground`
  - "Network" / "Builders" / "Insights" / "Contact" → `text-sm text-muted hover:text-foreground transition-colors duration-200`
- **Right — Launch App CTA:**
  - Classes: `rounded-full bg-foreground text-white px-6 py-2.5 text-sm hover:scale-[1.03] hover:bg-accent transition-all duration-200`
  - **This is the only place `bg-accent` is used.** Hover-only.

**Block 5 · Animation:** None (navbar visible immediately on load).

---

### SECTION 2 — Hero

**File:** `src/components/HeroSection.tsx`

**Block 1 · Container**
- Outer: `relative z-10`
- Padding: `pt-[13rem] pb-40 px-6` (**13rem top is critical** — do NOT use `calc(8rem - 75px)`; that is too tight under navbar)

**Block 3 · Layout primitive:** Centered text content, single column.

**Block 4 · Elements**

- **Heading (h1):**
  - Classes: `font-display text-5xl sm:text-7xl md:text-8xl max-w-7xl animate-fade-rise`
  - Inline styles: `lineHeight: 0.95, letterSpacing: '-2.46px'`
  - JSX (italic emphasis on "settlement layer" and "trustless"):
    ```jsx
    The <em className="text-muted">settlement layer</em> for <em className="text-muted">trustless</em> capital.
    ```

- **Subheading (p):**
  - Classes: `text-base sm:text-lg text-muted max-w-2xl mt-8 animate-fade-rise-delay`
  - Text: **"Hybera is a modular Layer-2 designed for builders shipping serious finance — sub-second finality, EVM equivalence, and institutional-grade security baked into every block."**

- **CTA group** (`flex gap-3 mt-10 animate-fade-rise-delay-2`):
  - Primary: "Launch App"
    - `rounded-full bg-foreground text-white px-14 py-5 text-base hover:scale-[1.03] transition-all duration-200`
  - Secondary: "Read Whitepaper"
    - `rounded-full border border-foreground/15 bg-background/60 backdrop-blur-sm text-foreground px-10 py-5 text-base hover:bg-foreground/5 transition-colors duration-200`

**Block 5 · Animation:**
- Heading: `animate-fade-rise` (fires on mount, 0.9s ease)
- Subheading: `animate-fade-rise-delay` (0.25s delay)
- CTA group: `animate-fade-rise-delay-2` (0.5s delay)

---

### SECTION 3 — Services

**File:** `src/components/ServicesSection.tsx`

**Block 1 · Container**
- `<section id="protocol" ref={useReveal()}>`
- Classes: `bg-background py-32 px-6`
- Inner: `max-w-7xl mx-auto`

**Block 4 · Elements**

- **"Capabilities" pill badge** (top, `reveal reveal-stagger-1`):
  - `rounded-full border border-foreground/15 uppercase tracking-widest text-xs text-muted px-4 py-1.5 inline-block`

- **Two-column header** (`mt-8 md:flex md:items-end md:justify-between gap-12`):
  - Left heading (`reveal reveal-stagger-2`):
    - Classes: `font-display text-4xl sm:text-5xl md:text-6xl max-w-2xl`
    - Inline: `lineHeight: 1.05`
    - JSX: `Infrastructure built for <em className="text-muted">real on-chain economies</em>`
  - Right subhead (`reveal reveal-stagger-3`):
    - Classes: `text-muted max-w-md text-base leading-relaxed`
    - Text: **"Four pillars engineered together. No bolt-ons, no compromises — every layer of the stack is purpose-built for capital that needs to move with conviction."**

- **Service rows** (`mt-20 divide-y divide-foreground/10`), 4 items. Each row:
  ```
  <div className="reveal reveal-stagger-{i+1} md:grid md:grid-cols-12 gap-8 group
                  hover:bg-surface/50 transition-colors duration-500
                  py-10 -mx-4 px-4 rounded-xl items-center">
  ```
  - Col 1 (`col-span-1`): number — `text-sm text-muted font-mono` ("01", "02", "03", "04")
  - Col 2 (`col-span-4`): title — `font-display text-3xl md:text-4xl text-foreground`
  - Col 3 (`col-span-5`): description — `text-base text-muted leading-relaxed`
  - Col 4 (`col-span-2 flex items-center justify-end gap-3 flex-wrap`):
    - Tag pills: `bg-foreground/5 rounded-full px-3 py-1 text-xs text-muted` (each tag)
    - Circular arrow button:
      ```
      h-10 w-10 rounded-full border border-foreground/10
      group-hover:bg-foreground group-hover:text-white
      grid place-items-center transition-all duration-200
      ```
      Icon inside: `<ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-200" />`

**Services data (verbatim):**

1. **Modular Execution** — "A high-throughput EVM environment with parallelized execution and sub-second confirmations. Deploy familiar Solidity contracts; ship at 10,000+ TPS without rewriting a line." — Tags: `EVM`, `Throughput`, `Finality`
2. **Settlement & Bridges** — "Native bridges to Ethereum, Bitcoin, and Solana with shared-security guarantees. Capital flows where it's needed, secured by economic finality, not custodians." — Tags: `Bridging`, `Liquidity`, `Security`
3. **Restaked Security** — "Validators secure the network through restaked ETH and slashing-backed cryptoeconomic guarantees. Trust is engineered, audited, and continuously verified on-chain." — Tags: `Restaking`, `Slashing`, `Audits`
4. **Builder Toolkit** — "SDKs, indexers, and observability primitives for teams who want to ship instead of plumb. From local devnet to mainnet in a single command." — Tags: `SDK`, `Indexers`, `DevTools`

---

### SECTION 4 — Case Studies (DARK section)

**File:** `src/components/CaseStudiesSection.tsx`

**Block 1 · Container**
- `<section id="ecosystem" ref={useReveal()}>`
- Classes: `bg-foreground py-32 px-6` (note: `bg-foreground` = the dark color used as bg here, text becomes white)
- Inner: `max-w-7xl mx-auto`

**Block 4 · Elements**

- **Header row** (`md:flex md:items-end md:justify-between gap-12`):
  - Left (`reveal reveal-stagger-1`):
    - Pill: `rounded-full border border-white/20 uppercase tracking-widest text-xs text-white/50 px-4 py-1.5 inline-block` → "Ecosystem"
    - Heading: `font-display text-4xl sm:text-5xl md:text-6xl text-white max-w-xl mt-6`
      - JSX: `Protocols already <em className="text-white/50">settling</em> on Hybera`
  - Right (`reveal reveal-stagger-2`):
    - Link: `text-white/50 uppercase tracking-widest text-sm hover:text-white inline-flex items-center gap-2 transition-colors`
    - "View Ecosystem" + `<ArrowUpRight size={14} />`

- **Two project cards** (`mt-16 grid md:grid-cols-2 gap-6`). Each card:
  ```tsx
  <div className="reveal reveal-stagger-{i+1} rounded-2xl overflow-hidden group relative aspect-[4/3]">
    <video
      src={VIDEO_AURORA /* or VIDEO_TESSERA */}
      muted loop playsInline autoPlay
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

    {/* Top-right white circular button */}
    <button className="absolute top-6 right-6 h-12 w-12 rounded-full bg-white text-foreground
                       grid place-items-center group-hover:scale-110 transition-transform duration-200">
      <ArrowUpRight size={18} />
    </button>

    {/* Bottom content */}
    <div className="absolute inset-x-0 bottom-0 p-8 flex items-end justify-between">
      <div>
        <div className="text-xs uppercase tracking-widest text-white/60">{category}</div>
        <div className="font-display text-5xl md:text-6xl text-white mt-3" style={{ lineHeight: 1 }}>{stat}</div>
        <div className="text-sm text-white/60 max-w-xs mt-2">{label}</div>
      </div>
      <div className="font-display text-2xl text-white self-end">{projectName}</div>
    </div>
  </div>
  ```

**Project data:**

1. **Aurora DEX**
   - Category: `Perpetuals & Spot Exchange`
   - Stat: `$2.4B`
   - Label: "Cumulative trading volume in first 90 days post-launch"
   - Video: `https://cdn.5sdesign.art/projects/Hybera/hybera-aurora.mp4`

2. **Tessera Vaults**
   - Category: `Real-World Asset Protocol`
   - Stat: `31.7%`
   - Label: "Average yield delivered to tokenized treasury holders annually"
   - Video: `https://cdn.5sdesign.art/projects/Hybera/hybera-tessera.mp4`

---

### SECTION 5 — Metrics

**File:** `src/components/MetricsSection.tsx`

**Block 1 · Container**
- `<section id="network" ref={useReveal()}>`
- Classes: `bg-background py-32 px-6`
- Inner: `max-w-7xl mx-auto`

**Block 4 · Elements**

- **Two-column header** (mirrors Services structure):
  - Left (`reveal reveal-stagger-1`):
    - Pill: "Network" — same style as Services capabilities pill
    - Heading: `font-display text-4xl sm:text-5xl md:text-6xl mt-6 max-w-2xl`
      - JSX: `<em className="text-muted">Performance</em> measured against public chains, in production.`
      - *(Note: here the italic emphasis is on the first word "Performance" — different from Services where italic is at the end. Both patterns appear throughout the design.)*
  - Right (`reveal reveal-stagger-2`):
    - `text-muted max-w-md text-base leading-relaxed`
    - Text: **"Every metric is reported on-chain by a public oracle and audited quarterly. We publish the raw data; you draw the conclusions."**

- **Metric grid** (`mt-20 grid grid-cols-2 md:grid-cols-4 divide-x divide-foreground/10 border-y border-foreground/10`). Each cell:
  ```tsx
  <div className="reveal reveal-stagger-{i+1} px-6 py-12">
    <div className="font-display text-5xl md:text-6xl text-foreground animate-subtle-float"
         style={{ lineHeight: 1 }}>
      {value}
    </div>
    <div className="mt-4 text-sm text-muted leading-relaxed">{label}</div>
  </div>
  ```

**Metric data:**

| Value | Label |
|---|---|
| `0.4s` | Block finality, end-to-end |
| `12.8M` | Transactions settled to date |
| `$8.1B` | Total value secured on network |
| `99.99%` | Validator uptime since genesis |

---

### SECTION 6 — Testimonials

**File:** `src/components/TestimonialsSection.tsx`

**Block 1 · Container**
- `<section id="builders" ref={useReveal()}>`
- Classes: `bg-background py-32 px-6`
- Inner: `max-w-7xl mx-auto text-center`

**State:**
```ts
const [index, setIndex] = useState(0);
const VIDEO_SRC = "https://cdn.5sdesign.art/projects/Hybera/hybera-builders.mp4";
const testimonials = [/* 3 entries below */];
```

**Block 4 · Elements**

- **"Builders" pill badge** (centered, `reveal reveal-stagger-1`).

- **Heading** (`reveal reveal-stagger-2`):
  - Classes: `font-display text-4xl sm:text-5xl max-w-lg mx-auto mt-6`
  - JSX: `Trusted by teams shipping the <em className="text-muted">next financial primitives</em>`

- **Dot navigation** (`mt-12 flex justify-center gap-3`):
  - 3 dots, each: `h-2.5 w-2.5 rounded-full border transition-colors duration-200`
  - Active (`index === i`): `border-foreground bg-foreground`
  - Inactive: `border-foreground/20 bg-transparent hover:border-foreground/40`
  - Click → `setIndex(i)`

- **Testimonial card** (`mt-12 max-w-4xl mx-auto text-left grid md:grid-cols-5 gap-8`):
  - Left (`col-span-2 rounded-2xl overflow-hidden`):
    ```tsx
    <video src={VIDEO_SRC} muted loop playsInline autoPlay
           className="h-72 md:h-full w-full object-cover" />
    ```
    Same video for all 3 slides.
  - Right (`col-span-3 flex flex-col`):
    - Blockquote: `text-lg md:text-xl leading-relaxed text-foreground`
      - Prepend with small italic Urbanist quote-mark glyph in `text-muted` (e.g. `<em className="text-muted mr-1">"</em>`)
      - Body: `{testimonials[index].quote}`
    - Bottom bar: `mt-auto border-t border-foreground/10 pt-6 flex items-center justify-between`
      - Left:
        - Name: `text-sm font-medium text-foreground`
        - Role + Company: `text-sm text-muted`
      - Right (`flex gap-2`):
        - Prev button: `h-10 w-10 rounded-full border border-foreground/10 grid place-items-center hover:bg-foreground hover:text-white transition-colors` → `<ChevronLeft size={16} />` → onClick: `setIndex((index - 1 + 3) % 3)`
        - Next button: same styling → `<ChevronRight size={16} />` → onClick: `setIndex((index + 1) % 3)`

**Testimonial data (3 entries):**

1. **Carolyn Chapman** — *Head of Engineering, Aurora Labs* — "We migrated our perp engine to Hybera in under three weeks. Latency dropped 4x, gas became a rounding error, and we finally stopped explaining bridge risk to institutional desks."
2. **Marcus Reid** — *Co-Founder, Tessera Vaults* — "Tokenizing treasuries demands settlement that regulators can defend in writing. Hybera's restaked security model gave our compliance team something they'd never had before — a clean answer."
3. **Lena Okafor** — *CTO, Solaris Stablecoin* — "The SDK feels like the team actually built things on-chain before. Indexers, fee abstraction, account models — every primitive we wished existed elsewhere is just there."

- **Partner logo strip** (`mt-20 pt-12 border-t border-foreground/10`):
  - `flex flex-wrap items-center justify-center gap-x-12 gap-y-6`
  - 5 logos: `<img src="/partners/P-0{i}.png" alt={name} className="h-10 md:h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-200" />`
  - Order: **zkSync** (P-01) · **Arbitrum** (P-02) · **Optimism** (P-03) · **Base** (P-04) · **Mantle** (P-05)

---

### SECTION 7 — CTA (DARK card)

**File:** `src/components/CtaSection.tsx`

**Block 1 · Container**
- `<section id="contact" ref={useReveal()}>`
- Classes: `bg-background py-32 px-6`
- Inner: `max-w-7xl mx-auto`

**Block 4 · Elements**

Single rounded dark card with decorative background image:

```tsx
<div className="reveal reveal-stagger-1 rounded-3xl bg-foreground text-white
                px-8 sm:px-14 py-20 sm:py-28 relative overflow-hidden isolate">
  {/* Decorative bg image — abstract dark composition with circles on the right */}
  <img src="/img/cta-bg.png" alt="" aria-hidden
       className="absolute inset-0 h-full w-full object-cover -z-10 opacity-90" />

  {/* Content sits on the left over the darker portion */}
  <div className="relative z-10 max-w-4xl">
    {/* "Get started" pill */}
    <div className="border border-white/20 uppercase tracking-widest text-xs text-white/50
                    px-4 py-1.5 inline-block rounded-full">
      Get started
    </div>

    {/* Heading */}
    <h2 className="font-display text-4xl sm:text-6xl md:text-7xl mt-6"
        style={{ lineHeight: 1.02, letterSpacing: '-1.4px' }}>
      Build on the layer that <em className="text-white/50">capital trusts</em>.
    </h2>

    {/* Paragraph */}
    <p className="text-base sm:text-lg text-white/60 max-w-xl mt-8">
      Spin up a devnet in sixty seconds, or talk to our solutions team about institutional
      integrations, RWA frameworks, and bespoke settlement guarantees.
    </p>

    {/* CTA buttons */}
    <div className="flex gap-3 mt-10 flex-wrap">
      <button className="rounded-full bg-white text-foreground px-10 py-5 text-base
                         hover:scale-[1.03] inline-flex items-center gap-2 transition-all">
        Start Building <ArrowUpRight size={18} />
      </button>
      <button className="rounded-full border border-white/20 text-white px-10 py-5 text-base
                         hover:bg-white/5 transition-colors">
        Talk to the Team
      </button>
    </div>
  </div>
</div>
```

---

### SECTION 8 — Footer

**File:** `src/components/Footer.tsx`

**Block 1 · Container**
- `<footer className="bg-background px-6 pb-12 pt-8">`
- Inner: `max-w-7xl mx-auto border-t border-foreground/10 pt-16`

**Block 4 · Elements**

- **Top grid** (`grid md:grid-cols-12 gap-12`):
  - Left (`md:col-span-4`):
    - `<img src="/hybera-logo.png" alt="Hybera" className="h-9 w-auto" />`
    - Tagline (`mt-6 text-sm text-muted max-w-xs leading-relaxed`):
      > "The settlement layer for trustless capital. Built for institutions, open for everyone."
  - Right (`md:col-span-8`): 4 link columns
    - Container: `grid grid-cols-2 md:grid-cols-4 gap-8`
    - Each column structure:
      ```tsx
      <div>
        <div className="uppercase tracking-widest text-xs text-foreground font-medium">
          {columnTitle}
        </div>
        <ul className="space-y-3 mt-6">
          {links.map(link => (
            <li><a className="text-sm text-muted hover:text-foreground transition-colors">{link}</a></li>
          ))}
        </ul>
      </div>
      ```
    - **Protocol:** Architecture · Validators · Security · Audits
    - **Builders:** Documentation · SDK · Indexers · GitHub
    - **Network:** Explorer · Status · Bridges · Roadmap
    - **Company:** About · Insights · Press · Careers

- **Bottom row** (`mt-20 flex flex-col sm:flex-row justify-between gap-4 border-t border-foreground/10 pt-8 text-sm text-muted`):
  - Left: `© {currentYear} Hybera Labs. All rights reserved.`
  - Right (`flex gap-6`): "Privacy" · "Terms" · "Disclosures"

---

## LAYER 8 — ANIMATION STANDARDS (project-specific)

```js
// All transitions use the cinematic Apple-grade easing
const ease = 'cubic-bezier(0.22, 1, 0.36, 1)';

// Standard durations
const fadeRise  = '0.9s';
const reveal    = '0.85s';
const hoverFast = '200ms';   // for button color/scale/icon
const hoverSlow = '500ms';   // for service row hover-bg
const cardZoom  = '700ms';   // for case-study video group-hover:scale-105

// Stagger system (reveal-stagger-N classes, 0.1s increments)
const staggerStep = 0.1;     // 1 → 0.1s, 6 → 0.6s
```

**Per-section entry pattern (default):**
- Hero: load-time animations (`animate-fade-rise` chain, no reveal hook needed)
- Sections 3-7: each section calls `useReveal()`, children use `.reveal reveal-stagger-N`
- Section 5 Metrics values: ALSO get `animate-subtle-float` for ambient ±4px Y motion (4s loop)

**Video animations:**
- Hero `VideoBackground`: rAF-driven fade-in (first 0.5s) + fade-out (last 0.5s), manual loop via `ended` event
- Case Study videos: native `loop`, hover scales the video to 1.05× over 700ms

---

## LAYER 9 — RESPONSIVE STANDARDS

- **Mobile-first.** Default classes target mobile; scale up with `sm:` `md:` `lg:`.
- **Heading scale (hero):** `text-5xl sm:text-7xl md:text-8xl` with `lineHeight: 0.95, letterSpacing: '-2.46px'`
- **Heading scale (sections):** `text-4xl sm:text-5xl md:text-6xl`
- **Section vertical rhythm:** `py-32` consistently across sections.
- **Section horizontal padding:** `px-6` consistently. Inner: `max-w-7xl mx-auto`.
- **Service rows:** stack on mobile (no `md:grid-cols-12` until `md:`)
- **Case study cards:** single column on mobile, 2-col `md:`
- **Footer link columns:** 2-col mobile, 4-col `md:`
- **CTA card padding:** `px-8 sm:px-14 py-20 sm:py-28`
- **Hero top-padding:** `pt-[13rem]` — flat across all breakpoints (gives consistent breathing room under navbar)
- **No horizontal scrollbar from 360px to 1920px viewport** — verify by zooming during build.

---

## LAYER 10 — ICON SET

This asset uses **3 icons from lucide-react only**. Do not import any icon outside this list:

```
- ArrowUpRight   → Navbar Launch App (none, only on hover scale), Services row arrow button, Case Study card top-right button, CTA primary button, Case Studies "View Ecosystem" link
                   Sizes used: 14 (link), 16 (services), 18 (cards, CTA)
- ChevronLeft    → Testimonials prev button (size=16)
- ChevronRight   → Testimonials next button (size=16)
```

If your AI agent tries to add icons like Sparkles, Zap, ShieldCheck, Lock, Building, Cpu, etc., reject them. Hybera's restraint is intentional — text + italic emphasis carries the meaning, not iconography.

---

## LAYER 11 — REPRODUCE-EXACTLY CLAUSE

Reproduce exactly. Do not:

- Substitute Urbanist for Inter Display or another sans. Italic Urbanist is the visual signature.
- Substitute Inter for system-ui or "similar".
- Change `#FAFAF7` to pure white (`#FFFFFF`). The warm off-white differentiates from generic crypto/SaaS sites.
- Change `#0A0A0A` to pure black (`#000000`). The near-black is intentionally softer.
- Use the navy accent (`#1E2A4A`) anywhere except the Launch App button hover state. Default state is `bg-foreground` (dark near-black).
- Use plain CSS `ease-out`. All transitions MUST use `cubic-bezier(0.22, 1, 0.36, 1)` for Apple-grade motion.
- Add framer-motion or any animation library. The `useReveal` hook + CSS keyframes are sufficient.
- Add `.liquid-glass`, `.noise-overlay` (in the Fivefold sense), or any other Fivefold default utility. The grain noise overlay is project-specific (see Layer 4d).
- Add green pulse dots, "Live" badges, or status indicators.
- Render Hybera as text. The logo is `<img src="/hybera-logo.png">` — a real PNG with brand mark + wordmark.
- Use the HTML `loop` attribute on the hero video. The loop is manual (rAF + `ended` event handler) for clean cinematic fade.
- Skip the italic emphasis treatment. Every heading has at least one `<em className="text-muted">` (or `text-white/50` on dark sections). Heading meaning depends on the contrast between non-italic foreground and italic muted.
- Skip the grain noise overlay. The body `::before` pseudo-element at 0.025 opacity is the premium tactile feel.
- Make the hero top padding less than `13rem`. Visually balances under the navbar — `calc(8rem - 75px)` is too tight.
- Reduce the divider system on Services rows (`divide-y divide-foreground/10`) or Metrics grid (`divide-x divide-foreground/10 border-y border-foreground/10`). These dividers carry the editorial feel.
- Change italic emphasis colors. On light bg: `text-muted` (#6B6B6B). On dark bg: `text-white/50`.

If a video URL placeholder is empty during dev, the component should render gracefully with the gradient overlay only (no broken `<video>`).

---

## QUICK BUILD CHECKLIST

```
□ Vite 6.x + React 19 + TS + Tailwind 3 + lucide-react installed
□ tailwind.config.js extended with background/foreground/muted/accent/surface + display/body fonts
□ src/styles/fonts.css imports Urbanist (300-700 + italics) + Inter (300-600)
□ src/styles/theme.css contains all 5 keyframes + 3 fade-rise utilities + reveal/visible system + 6 stagger classes
□ src/index.css imports fonts.css + theme.css, applies grain noise overlay on body::before
□ src/hooks/useReveal.ts hook created (IntersectionObserver, threshold 0.15)
□ src/components/VideoBackground.tsx: rAF-fade pattern, manual loop, NOT native loop attr
□ Navbar with logo image (not text), 5 links, Launch App CTA
□ HeroSection with pt-[13rem], 2 italic-em phrases, 3 staggered fade-rise animations
□ ServicesSection: useReveal, 4 rows divide-y, hover:bg-surface/50, ArrowUpRight rotate-45 on hover
□ CaseStudiesSection (DARK bg-foreground): 2 video cards, gradient overlay, top-right white circle button
□ MetricsSection: 4 cells divide-x with animate-subtle-float values
□ TestimonialsSection: useState slider, 3 testimonials, dot nav, prev/next chevrons, 5 partner logos
□ CtaSection: rounded-3xl dark card with /img/cta-bg.png decorative bg image
□ Footer: 4-column grid + bottom row
□ No horizontal scroll from 360px to 1920px
□ Hero video plays, fades in 0.5s, fades out 0.5s, loops cleanly with no flash
□ Service rows show subtle warm-gray hover bg
□ All circular buttons invert color + rotate icon on group-hover (200ms)
□ Index.html title: "Hybera — The settlement layer for trustless capital"
□ Index.html meta description: "Hybera — the modular Layer-2 settlement layer for trustless capital. Sub-second finality, EVM equivalence, and institutional-grade security."
```

---

## SUGGESTED COMMIT MESSAGE WHEN GENERATED

```
feat(hybera): initial L2 fintech landing — 7 sections + cinematic hero

- React 19 + TS + Vite 6 + Tailwind 3 + lucide-react
- Urbanist (italic-forward) + Inter
- Custom useReveal hook (IntersectionObserver) + CSS keyframe utilities
- rAF-driven manual video loop with 0.5s fade in/out
- Brand: #FAFAF7 / #0A0A0A / #6B6B6B / #1E2A4A / #F2F0EA
- Grain noise overlay (SVG fractalNoise, 0.025 opacity)
- 7 sections: Hero · Services · Case Studies (dark) · Metrics · Testimonials · CTA (dark) · Footer
- Italic-em phrases as signature heading treatment
```
