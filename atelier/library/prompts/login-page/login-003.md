# Fivefold — Sign Up · Login003 Prompt (v1)

> Standalone build prompt for the **Fivefold Sign Up** screen (asset id: `auth-signup-stars-01`).
> Reproduce the login screen below byte-for-byte.
> Authored by Fivefold — all components, helpers and visuals below are Fivefold originals.

---

## LAYER 0 — META

```yaml
asset_id: auth-signup-stars-01
category: landing-page / auth
aesthetic: dual-card (dark stars + clean white form)
industry: ai-studio / saas
tone: premium, minimal, marketing-grade
preview_video: — (no looping video — uses Fivefold StarsBackground)
license: pro
version: 1.0
last_updated: 2026-06-01
```

---

## LAYER 1 — OPENING DECLARATION

Build a **single-screen sign-up page** for **Fivefold** — an AI studio that turns ideas into production-ready interfaces.

Use the following **pinned** tech stack (do not substitute):

- **React 18 + TypeScript + Vite 6**
- **Tailwind CSS v4** (CSS-first config via `@theme` in `index.css`; loaded with the `@tailwindcss/vite` plugin)
- **motion** (v11+) — all React imports come from `motion/react`
- **lucide-react** for icons (icons restricted to the Fivefold icon kit in Layer 10)

The aesthetic is a **dual-card composition on a white outer frame**: a dark **stars card** (left, ~52% width) sits next to a **clean white form card** (right, fills remaining space). The outer background is pure white; the gap between cards is white padding. **No third-party background libraries, no shaders, no looping video.** The animated stars are a original component implemented inline (see Layer 5).

The entire app lives in **two files**: `src/App.tsx` and `src/index.css`. Entry point is `export default function App()` mounted by `src/main.tsx`. The page title in `index.html` is **`Fivefold — Sign Up`**.

**Do not use**: blue, purple, neon accents, gradients on text, drop shadows beyond the existing `shadow-2xl` on the left card, or any color outside `#000`, `#FFF`, `#1A1A1A` (brand-gray), `#262626` (stars gradient stop), and `neutral-100` (form input fill).

---

## LAYER 2 — FONTS

Load **Inter** via Google Fonts at the top of `src/index.css`:

```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");
```

Tailwind v4 token (registered in the `@theme` block — see Layer 3):

```css
@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
}
```

Body inherits the sans family via `@apply font-sans` (see Layer 4). **Do not load a second font family.** All headings, body, labels, buttons and helper text use Inter at weights 300/400/500/600/700.

**Weight clamping rule**: if a class asks for `font-extrabold` (800) or `font-black` (900), clamp down to `font-semibold` (600) — Inter loaded weights stop at 700.

---

## LAYER 3 — COLOR SYSTEM

Tailwind v4 uses a CSS-first config. Register every token inside `@theme` in `src/index.css`:

```css
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --color-brand-gray: #1a1a1a;
}
```

This generates the `font-sans` and `bg-brand-gray` / `text-brand-gray` / `border-brand-gray` utilities automatically — no `tailwind.config.js` needed.

**Palette used in this asset (do not introduce new colors):**

| Token | Hex / Util | Where it's used |
|---|---|---|
| Outer frame | `bg-white` (#FFF) | `<main>` background, body |
| Stars card base | `#000` → `#262626` radial | Left card gradient |
| Stars + white card text | `#FFF` | Left card content, body text default |
| Form card base | `bg-white` | Right card |
| Form text | `text-black` (#000) | Right card content |
| Brand-gray | `#1A1A1A` | Inactive Step background (left card) |
| Input fill (right card) | `bg-neutral-100` | All form inputs |
| Subtle line / muted | `black/10`, `black/40`, `black/50` | Dividers, helpers, footer |
| Hairline on stars card | `white/10`, `white/20`, `white/40`, `white/60` | Step number bg, inactive border, muted copy |

**Selection color**: `selection:bg-black/20` on `<main>` so highlights are visible on the white outer.

---

## LAYER 4 — CUSTOM CSS UTILITIES

Minimal. The full `src/index.css` after the imports and `@theme` block is:

```css
body {
  @apply font-sans bg-white text-white antialiased;
}
```

> **Note on `text-white` on a white body:** intentional. The dark stars card relies on **inherited** white text for its brand wordmark and heading (no explicit `text-white` on those nodes). The right white card overrides locally with `text-black`. There is no direct text rendered on the body itself, so the invisible default never appears.

No `liquid-glass`, no noise overlay, no hero gradient text, no shiny animation — this screen is intentionally restrained.

---

## LAYER 5 — BACKGROUND ASSET (Fivefold StarsBackground)

The left card uses the **Fivefold StarsBackground** — a self-contained, three-layer parallax star field with mouse-driven spring offset. Implement it inline at the bottom of `App.tsx`. **No external package; this is a original component.**

### Visual contract
- Three independent layers of pure-white stars (sizes 1px / 2px / 3px) drifting upward.
- Each layer is rendered as a single `div` whose `box-shadow` holds hundreds-to-thousands of star positions (cheap GPU paint — no canvas, no per-star DOM nodes).
- A duplicate `div` offset by `+2000px` provides seamless infinite scroll.
- A radial gradient (`ellipse at bottom, #262626 0% → #000 100%`) sits behind the layers, rounded to match the card.
- A spring-tracked mouse offset gives a soft parallax — the field follows the cursor with ~stiffness 50, damping 20.

### Implementation spec (paste verbatim into `App.tsx`)

Required imports (add to existing import block):

```ts
import {
  useState, useEffect, useCallback,
  type ComponentProps, type MouseEvent,
} from "react";
import {
  motion, useMotionValue, useSpring,
  type HTMLMotionProps, type SpringOptions, type Transition,
} from "motion/react";
```

`cn` helper + star generator:

```ts
function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function generateStars(count: number, starColor: string) {
  const shadows: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 4000) - 2000;
    const y = Math.floor(Math.random() * 4000) - 2000;
    shadows.push(`${x}px ${y}px ${starColor}`);
  }
  return shadows.join(", ");
}
```

`StarLayer` (one drifting layer):

```ts
type StarLayerProps = HTMLMotionProps<"div"> & {
  count?: number; size?: number; transition?: Transition; starColor?: string;
};

function StarLayer({
  count = 1000, size = 1,
  transition = { repeat: Infinity, duration: 50, ease: "linear" },
  starColor = "#fff", className, ...props
}: StarLayerProps) {
  const [boxShadow, setBoxShadow] = useState("");
  useEffect(() => { setBoxShadow(generateStars(count, starColor)); }, [count, starColor]);
  return (
    <motion.div
      animate={{ y: [0, -2000] }}
      transition={transition}
      className={cn("absolute top-0 left-0 w-full h-[2000px]", className)}
      {...props}
    >
      <div className="absolute rounded-full bg-transparent"
        style={{ width: `${size}px`, height: `${size}px`, boxShadow }} />
      <div className="absolute top-[2000px] rounded-full bg-transparent"
        style={{ width: `${size}px`, height: `${size}px`, boxShadow }} />
    </motion.div>
  );
}
```

`StarsBackground` (composes three layers + mouse spring):

```ts
type StarsBackgroundProps = ComponentProps<"div"> & {
  factor?: number; speed?: number; transition?: SpringOptions;
  starColor?: string; pointerEvents?: boolean;
};

function StarsBackground({
  children, className,
  factor = 0.05, speed = 50,
  transition = { stiffness: 50, damping: 20 },
  starColor = "#fff", pointerEvents = true, ...props
}: StarsBackgroundProps) {
  const offsetX = useMotionValue(1);
  const offsetY = useMotionValue(1);
  const springX = useSpring(offsetX, transition);
  const springY = useSpring(offsetY, transition);

  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const cx = window.innerWidth / 2, cy = window.innerHeight / 2;
    offsetX.set(-(e.clientX - cx) * factor);
    offsetY.set(-(e.clientY - cy) * factor);
  }, [offsetX, offsetY, factor]);

  return (
    <div className={cn("size-full overflow-hidden", className)}
         onMouseMove={handleMouseMove} {...props}>
      <motion.div style={{ x: springX, y: springY }}
                  className={cn(!pointerEvents && "pointer-events-none")}>
        <StarLayer count={1000} size={1}
          transition={{ repeat: Infinity, duration: speed,      ease: "linear" }} starColor={starColor} />
        <StarLayer count={400}  size={2}
          transition={{ repeat: Infinity, duration: speed * 2,  ease: "linear" }} starColor={starColor} />
        <StarLayer count={200}  size={3}
          transition={{ repeat: Infinity, duration: speed * 3,  ease: "linear" }} starColor={starColor} />
      </motion.div>
      {children}
    </div>
  );
}
```

### Mount instance (inside the left `<aside>`, as the first child)

```tsx
<StarsBackground
  starColor="#FFF"
  className="absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_bottom,_#262626_0%,_#000_100%)]"
/>
```

`starColor`, `factor`, `speed`, and `transition` keep their **default** values for this asset.

---

## LAYER 6 — SHARED COMPONENTS

Define all four at the bottom of `App.tsx`. None of them are exported.

### `StepItem({ number, text, active = false })`

Two visual states. Both share base classes; only the colored modifiers differ.

```ts
function StepItem({ number, text, active = false }: {
  number: number; text: string; active?: boolean;
}) {
  return (
    <div className={`flex items-center justify-center gap-3 rounded-2xl px-4 py-3 transition-colors ${
      active
        ? "bg-white text-black border border-white"
        : "bg-brand-gray text-white border border-white/20"
    }`}>
      <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
        active ? "bg-black text-white" : "bg-white/10 text-white/40"
      }`}>
        {active ? <Check className="h-4 w-4" /> : number}
      </span>
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}
```

### `SocialButton({ icon, label })`

```ts
function SocialButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button type="button"
      className="flex h-12 items-center justify-center gap-2 bg-white border border-black/10 rounded-xl text-sm font-medium text-black hover:bg-black/5 transition-colors">
      {icon}
      {label}
    </button>
  );
}
```

### `InputGroup({ label, placeholder, type })`

```ts
function InputGroup({ label, placeholder, type }: {
  label: string; placeholder: string; type: string;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-black">{label}</label>
      <input type={type} placeholder={placeholder}
        className="w-full bg-neutral-100 border-none rounded-xl h-11 px-4 text-black placeholder:text-black/30 focus:ring-2 focus:ring-black/15 focus:outline-none" />
    </div>
  );
}
```

### `cn(...classes)`

Already defined in Layer 5 — reused by `StarsBackground`/`StarLayer`. Plain `.filter(Boolean).join(" ")`; no `clsx` / no `tailwind-merge`.

### Motion variants (defined at module top, above `App`)

```ts
const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
```

---

## LAYER 7 — SECTIONS

The page is **one `<main>` with two children**: a left `<aside>` (the stars card) and a right `<section>` (the form card).

### Root `<main>` — outer frame

- Wrapper: `<main>`
- Classes (exact):
  `flex min-h-screen w-full bg-white selection:bg-black/20 p-2 gap-2 transition-all duration-500 lg:h-screen lg:overflow-hidden lg:p-4 lg:gap-4`

### SECTION 1 — Left Hero card (stars)

**Block 1 · Container**
- Element: `<aside>`
- Classes (exact):
  `relative hidden w-[52%] flex-col items-center justify-center px-12 rounded-3xl overflow-hidden shadow-2xl h-full lg:flex`
- Hidden below `lg`; only renders on `lg:` and up.

**Block 2 · Background**
- First child: `<StarsBackground>` as specified in Layer 5.
- z-index: stars are absolutely positioned (`absolute inset-0`); content sits above via `relative z-10` on the content wrapper.

**Block 3 · Layout primitive**
- Vertical, centered: `flex-col items-center justify-center` on the aside; the content wrapper uses `space-y-8` for rhythm.

**Block 4 · Elements**

Content wrapper:
- Tag: `motion.div`
- Classes: `relative z-10 w-full max-w-xs space-y-8 text-center`
- Motion: `variants={containerVariants} initial="hidden" animate="show"`

Inside, in this exact order — each direct child is a `motion.div variants={itemVariants}`:

**1. Brand / logomark**
- Wrapper classes: `flex items-center justify-center gap-2`
- `<Circle className="h-5 w-5 fill-white text-white" />`
- `<span className="text-xl font-semibold tracking-tight">Fivefold</span>`

**2. Heading block**
- Wrapper classes: `space-y-3`
- `<h1 className="text-4xl font-medium tracking-tight whitespace-nowrap">Join Fivefold</h1>`
- `<p className="text-white/60 text-sm leading-relaxed px-4">Follow these 3 quick phases to activate your AI studio.</p>`

**3. Steps**
- Wrapper classes: `space-y-3`
- Three `<StepItem>` instances, in order:
  1. `number={1} text="Register your identity" active`
  2. `number={2} text="Configure your studio"`
  3. `number={3} text="Finalize your profile"`

**Block 5 · Animation**
- Container: `staggerChildren: 0.15`, `delayChildren: 0.2`.
- Each child (`motion.div variants={itemVariants}`): `opacity 0 → 1`, `y: 10 → 0`, `duration: 0.5`. Easing is motion's default (no override).

**Block 6 · Responsive**
- Below `lg` (1024px): aside is `display: none`. The stars card never appears on mobile/tablet.
- At `lg+`: aside occupies a fixed `w-[52%]` of the viewport, full-height, with `rounded-3xl` corners.

**Block 7 · Copy (verbatim)**
```
Fivefold
Join Fivefold
Follow these 3 quick phases to activate your AI studio.
1  Register your identity      (active state — shows a Check icon instead of the digit)
2  Configure your studio
3  Finalize your profile
```

---

### SECTION 2 — Right Form card (sign up)

**Block 1 · Container**
- Element: `<section>`
- Classes (exact):
  `flex-1 flex flex-col items-center justify-center bg-white text-black rounded-3xl py-12 lg:py-6 px-4 sm:px-12 lg:px-16 xl:px-24 overflow-y-auto lg:overflow-hidden`

**Block 2 · Background**
- Solid `bg-white`. No video, no gradient, no overlay.

**Block 3 · Layout primitive**
- Vertical centered: `flex-col items-center justify-center` on the section; content wrapper is `space-y-8 sm:space-y-10 lg:space-y-6` (mobile relaxed → desktop tight).

**Block 4 · Elements**

Content wrapper:
- Tag: `motion.div`
- Classes: `w-full max-w-xl space-y-8 sm:space-y-10 lg:space-y-6`
- Motion: `initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}`

In this exact order:

**1. Header**
- `<div className="space-y-2">`
- `<h2 className="text-3xl font-medium tracking-tight">Create your account</h2>`
- `<p className="text-black/50 text-sm">Join Fivefold and turn ideas into production-ready interfaces — powered by AI.</p>`

**2. Social buttons**
- Wrapper: `<div className="grid grid-cols-2 gap-4">`
- `<SocialButton icon={<Chrome className="h-5 w-5" />} label="Google" />`
- `<SocialButton icon={<Github className="h-5 w-5" />} label="GitHub" />`

**3. Divider**
- Wrapper: `<div className="relative flex items-center">`
- `<div className="flex-1 border-t border-black/10" />`
- `<span className="bg-white px-4 text-xs font-medium text-black/40 uppercase tracking-widest">Or</span>`
- `<div className="flex-1 border-t border-black/10" />`

**4. Form**
- Tag: `<form className="space-y-6" onSubmit={(e) => e.preventDefault()}>`
- Children in order:

  **a.** Name grid:
  ```tsx
  <div className="grid grid-cols-2 gap-4">
    <InputGroup label="First Name" placeholder="Jane" type="text" />
    <InputGroup label="Last Name"  placeholder="Doe"  type="text" />
  </div>
  ```

  **b.** Work email:
  ```tsx
  <InputGroup label="Work email" placeholder="jane@studio.com" type="email" />
  ```

  **c.** Password block (custom, not via `InputGroup`):
  ```tsx
  <div className="space-y-2">
    <label className="text-sm font-medium text-black">Password</label>
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="••••••••"
        className="w-full bg-neutral-100 border-none rounded-xl h-11 px-4 pr-12 text-black placeholder:text-black/30 focus:ring-2 focus:ring-black/15 focus:outline-none"
      />
      <button
        type="button"
        onClick={() => setShowPassword(v => !v)}
        aria-label={showPassword ? "Hide password" : "Show password"}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-black/40 hover:text-black transition-colors"
      >
        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
      </button>
    </div>
    <p className="text-xs text-black/40">Use 8+ characters with a mix of letters and numbers.</p>
  </div>
  ```
  `showPassword` is a local `useState(false)` at the top of `App`.

  **d.** Submit button:
  ```tsx
  <button type="submit"
    className="w-full h-14 bg-black text-white font-semibold rounded-xl hover:bg-black/90 active:scale-[0.98] transition-all mt-4">
    Start designing for free
  </button>
  ```

**5. Footer link**
```tsx
<p className="text-center text-sm text-black/50">
  Already have an account?{" "}
  <a href="#" className="text-black font-medium hover:underline">Sign in</a>
</p>
```

**Block 5 · Animation**
- The whole content wrapper fades in once: `opacity: 0 → 1`, `duration: 0.8`, `ease: "easeOut"`. No internal stagger.

**Block 6 · Responsive**
- Mobile (`<sm`): single column, `space-y-8`, `px-4`, `py-12`.
- `sm:` → `px-12`, `space-y-10`.
- `lg:` → `px-16`, `py-6`, `space-y-6`, switches to `overflow-hidden` (no scroll).
- `xl:` → `px-24`.

**Block 7 · Copy (verbatim)**
```
Create your account
Join Fivefold and turn ideas into production-ready interfaces — powered by AI.
Google
GitHub
Or
First Name   ·  placeholder: Jane
Last Name    ·  placeholder: Doe
Work email   ·  placeholder: jane@studio.com
Password     ·  placeholder: ••••••••
Use 8+ characters with a mix of letters and numbers.
Start designing for free
Already have an account? Sign in
```

---

## LAYER 8 — ANIMATION STANDARDS (project-wide)

```ts
// Hero (left card) — staggered reveal
container: { staggerChildren: 0.15, delayChildren: 0.2 }
child:     { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } }

// Form (right card) — single fade
form:      { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.8, ease: "easeOut" } }

// Stars (StarsBackground)
layer.y:           [0, -2000]  // linear repeat
layer.duration:    speed * N    // N = 1, 2, 3 across the three layers (default speed = 50s)
parallax.spring:   { stiffness: 50, damping: 20 }
parallax.factor:   0.05

// Submit button micro-interactions
hover: bg-black/90
active: scale-[0.98]
transition: transition-all (Tailwind default)
```

There is **no scroll-linked motion**, no `whileInView`, no IntersectionObserver. Both reveals fire on mount.

---

## LAYER 9 — RESPONSIVE STANDARDS

- **`<lg` (1024px)**: only the right form card renders. Outer `<main>` keeps `p-2 gap-2`; the form card stretches full-width thanks to `flex-1`.
- **`lg+`**: two-card layout. Left card pinned to `w-[52%]`, right card fills with `flex-1`. `<main>` becomes `h-screen overflow-hidden` and gains `p-4 gap-4`.
- **Internal form breakpoints**: `px-4 → sm:px-12 → lg:px-16 → xl:px-24`; spacing tightens at `lg:` (`space-y-6`, `py-6`).
- **No fluid `clamp()`** typography — type sizes are fixed (`text-3xl` form heading, `text-4xl` hero heading) because the asset is constrained to its card and never spans the full viewport.

---

## LAYER 10 — ICON SET

Use **only** these six lucide-react icons in this asset. Reject any other icon import.

| Icon | Where | Size |
|---|---|---|
| `Circle` | Left card brand logomark (`fill-white text-white`) | `h-5 w-5` |
| `Check` | Active StepItem (replaces the digit) | `h-4 w-4` |
| `Chrome` | Google social button | `h-5 w-5` |
| `Github` | GitHub social button (label is written "GitHub") | `h-5 w-5` |
| `Eye` | Password reveal — `showPassword === false` | `h-5 w-5` |
| `EyeOff` | Password hide — `showPassword === true` | `h-5 w-5` |

Single import line at the top of `App.tsx`:

```ts
import { Circle, Chrome, Github, Eye, EyeOff, Check } from "lucide-react";
```

---

## LAYER 11 — REPRODUCE-EXACTLY CLAUSE

Reproduce verbatim. **Do not:**

- Substitute the font ("close to Inter" is not Inter — load Inter from Google Fonts at the listed weights).
- Round color values (`#1A1A1A`, `#262626`, `neutral-100`, pure `#000` / `#FFF` only).
- Shorten or rephrase copy. The brand is **Fivefold**, lowercase, one word. The headline is **Join Fivefold**. The form CTA is **Start designing for free**. The footer is **Already have an account? Sign in**.
- Swap `motion/react` for `framer-motion` (use the new package path).
- Skip animation parameters — `staggerChildren: 0.15`, `delayChildren: 0.2`, child `duration: 0.5`, form fade `duration: 0.8 ease: "easeOut"`, stars spring `stiffness: 50, damping: 20`.
- Use icons outside the six in Layer 10.
- Add overlays, gradients, or shadows beyond `shadow-2xl` on the left aside.
- Move components into separate files. Everything ships in `App.tsx` + `index.css`.

If a constraint conflicts with framework limitations, clamp to the nearest valid value and leave a one-line comment noting the substitution — do not silently change.

---

## PROJECT FILES — SUMMARY

```
Login 003/
├── index.html              ← <title>Fivefold — Sign Up</title>, mounts /src/main.tsx
├── package.json            ← react 18, motion ^11, lucide-react, tailwindcss ^4, @tailwindcss/vite ^4, vite ^6, typescript ^5
├── tsconfig.json           ← strict TS, jsx: react-jsx, moduleResolution: bundler
├── vite.config.ts          ← plugins: react(), tailwindcss()
└── src/
    ├── main.tsx            ← createRoot(...).render(<StrictMode><App/></StrictMode>) + import "./index.css"
    ├── index.css           ← Inter @import + @import "tailwindcss" + @theme tokens + body @apply
    └── App.tsx             ← export default function App() — contains:
                              · containerVariants, itemVariants
                              · App (root layout + both columns)
                              · StepItem, SocialButton, InputGroup
                              · cn, generateStars, StarLayer, StarsBackground
```

**Run**: `npm install && npm run dev` → open the printed `http://localhost:5173` (or the next free port).
