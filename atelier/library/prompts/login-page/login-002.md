# Login 002 — Cinematic Sign-in Flow · Fivefold Prompt

```yaml
asset_id: login-002-cinematic-flow-01
category: login-page
aesthetic: cinematic-dark · full-bleed-video · 3-step-flow
industry: studio / atelier / premium-saas
tone: warm · cinematic · "step inside"
preview_video: https://cdn.5sdesign.art/projects/login-002.mp4
license: standard
version: 1.0
last_updated: 2026-05-23
notes: Next.js 14 App Router + Tailwind + framer-motion. Single component file.
 3-step state machine: email → 6-digit code → success.
 Background video + 4-layer atmospheric overlay (dim + vignette + top-fade).
 Floating glass mini-navbar that morphs rounded-full ↔ rounded-xl on mobile menu.
```

---

## LAYER 1 — OPENING DECLARATION

Build a **full-screen sign-in flow** for a brand called **Fivefold**, framed as *"Step Inside — where ideas become craft."* This is a 3-step state machine: enter email → receive a 6-digit code → success.

Use the following **pinned** tech stack (do not substitute):

- **Next.js 14.2.18 (App Router)** + **React 18** + **TypeScript**
- **Tailwind CSS 3.4** (extend `colors` for HSL theme vars + dark default)
- **framer-motion 11** for `<AnimatePresence>` step transitions + glass nav state morph
- **clsx + tailwind-merge** combined via `cn()` helper in `lib/utils.ts`
- **NO Three.js**, **NO React Three Fiber** — even though similar templates ship with a WebGL shader background, this version uses an **HTML5 `<video>`** for stability + light bundle size.
- **NO UI kit** — no shadcn primitives, no Radix. Build the form inputs from scratch with Tailwind.

The aesthetic is **cinematic dark warmth** — a looping muted background video covered by a 4-layer overlay stack (dim + radial vignette + top-fade) that protects the floating glass navbar. A centered form sits in the left half of a 2-column flex layout (right column intentionally empty — text alone holds the composition). Glass surfaces use `bg-[#1f1f1f57]` + `backdrop-blur-sm` with a 1px `#333` border.

**Do not use:** light mode, purple/blue gradients, framer-motion `<motion>` for everything (only for step transitions + nav morph), shadcn primitives, Radix Dialog, or any background animation (the video carries it).

---

## LAYER 2 — FONTS

Use Next.js' built-in Google Font loader. In `app/layout.tsx`:

```tsx
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
```

In Tailwind config:

```ts
fontFamily: {
  sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
},
```

No display serif. No editorial italic. Single sans family, weighted from 400–700.

---

## LAYER 3 — DESIGN TOKENS

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 0%;        /* HSL black */
    --foreground: 0 0% 100%;      /* HSL white */
  }
  body {
    background: hsl(var(--background));
    color: hsl(var(--foreground));
  }

  /* Autofill fix — kill Chrome's yellow autofill background */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    -webkit-text-fill-color: white;
    -webkit-box-shadow: 0 0 0px 1000px rgba(31, 31, 31, 0.34) inset;
    transition: background-color 5000s ease-in-out 0s;
  }
}
```

Tailwind config color extension:

```ts
// tailwind.config.ts
colors: {
  background: 'hsl(var(--background))',
  foreground: 'hsl(var(--foreground))',
},
```

Glass surface constants (used inline in JSX):

| Surface | Tailwind |
|---|---|
| Mini nav | `bg-[#1f1f1f57] backdrop-blur-sm border border-[#333]` |
| Code input box | `bg-[#1f1f1f80] border border-[#444] focus:border-[#666]` |
| Glass divider | `border-[#333]` |
| Subtle text | `text-gray-300` |
| Faint text | `text-gray-500` |

---

## LAYER 4 — ANIMATION

framer-motion only — and only for two things:

### 1. Step transitions

```tsx
<AnimatePresence mode="wait">
  {step === 'email' && (
    <motion.div
      key="email"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* email step */}
    </motion.div>
  )}
  {step === 'code' && ( ... key="code" exit x: -40 ... )}
  {step === 'success' && ( ... key="success" ... )}
</AnimatePresence>
```

### 2. Mobile nav menu morph

When the mobile menu opens, the nav pill morphs from `rounded-full` to `rounded-xl` (instant on open, 300ms delay before returning to `rounded-full` on close — so the close animation completes inside the still-rounded shell):

```tsx
const [navOpen, setNavOpen] = useState(false);
const [isRound, setIsRound] = useState(true);

useEffect(() => {
  if (navOpen) {
    setIsRound(false);
  } else {
    const t = setTimeout(() => setIsRound(true), 300);
    return () => clearTimeout(t);
  }
}, [navOpen]);
```

Apply `isRound ? 'rounded-full' : 'rounded-xl'` to the nav container.

CSS transitions only on:
- Input border (`border-color 0.2s`).
- Continue chevron (`transform 0.2s` — translateX +2px on hover).
- Code input box border (`border-color 0.15s`).
- Mobile menu height: `max-h-0` ↔ `max-h-[1000px]` with `transition-[max-height] duration-500 ease-in-out overflow-hidden`.

No reveal-on-scroll animations. No parallax. The page sits still — only the video moves.

---

## LAYER 5 — BACKGROUND ASSETS

**Video** (the only motion asset):

```tsx
<video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  src="https://cdn.5sdesign.art/projects/Login-002/login-002.mp4"
  className="absolute inset-0 w-full h-full object-cover"
/>
```

**4-layer atmospheric overlay** stack (each `absolute inset-0 pointer-events-none`):

```tsx
{/* Layer 1: video — see above */}

{/* Layer 2: 40% black dim */}
<div className="absolute inset-0 bg-black/40 pointer-events-none" />

{/* Layer 3: radial vignette — 40% center → 85% edge */}
<div
  className="absolute inset-0 pointer-events-none"
  style={{
    background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.85) 100%)',
  }}
/>

{/* Layer 4: top-fade — protects navbar legibility */}
<div
  className="absolute inset-x-0 top-0 h-1/3 pointer-events-none"
  style={{
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 100%)',
  }}
/>
```

**Logo** (white-on-transparent SVG):

```tsx
<img
  src="/logo/logo.svg"
  alt="Fivefold"
  className="h-7 w-auto"
/>
```

Buyer ships their own logo at `public/logo/logo.svg`. Component references the path as a string — no `next/image` wrapper, because the SVG is a tiny wordmark and doesn't benefit from Next's optimizer.

---

## LAYER 6 — SHARED HELPERS

### `lib/utils.ts`

```ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### `AnimatedNavLink` (inline subcomponent — same file)

A nav link with a "push up" hover effect — the text translates up and a white copy emerges from below:

```tsx
function AnimatedNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="relative inline-block overflow-hidden h-5 group">
      <span className="block text-sm text-gray-300 transition-transform duration-300 ease-out group-hover:-translate-y-full">
        {children}
      </span>
      <span className="absolute inset-0 block text-sm text-white translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
        {children}
      </span>
    </a>
  );
}
```

---

## LAYER 7 — COMPONENT: `SignInPage`

**Single file:** `components/ui/sign-in-flow-1.tsx`. Exports `SignInPage` as default. Composes 3 things:

1. `MiniNavbar` — floating glass pill, top-center.
2. Full-screen background video + 4-layer overlay.
3. A 3-step form (`email` → `code` → `success`) inside an `<AnimatePresence>`.

### State shape

```tsx
type Step = 'email' | 'code' | 'success';

const [step, setStep] = useState<Step>('email');
const [email, setEmail] = useState('');
const [code, setCode] = useState(['', '', '', '', '', '']);
const codeRefs = useRef<(HTMLInputElement | null)[]>([]);
const [navOpen, setNavOpen] = useState(false);
const [isRound, setIsRound] = useState(true);
```

### Layout

```tsx
<main className="relative min-h-screen flex flex-col items-center overflow-hidden">
  {/* Layer 5: video + 4 overlays */}
  <video ... />
  <div className="absolute inset-0 bg-black/40 pointer-events-none" />
  <div className="absolute inset-0" style={{ background: 'radial-gradient(...)' }} />
  <div className="absolute inset-x-0 top-0 h-1/3" style={{ background: 'linear-gradient(...)' }} />

  <MiniNavbar />

  {/* Content row — 2 columns, right empty */}
  <section className="relative z-10 w-full max-w-6xl px-6 lg:px-12 flex flex-col lg:flex-row items-start gap-12 mt-[150px]">
    <div className="w-full lg:w-1/2">
      <AnimatePresence mode="wait">
        {step === 'email' && <EmailStep ... />}
        {step === 'code' && <CodeStep ... />}
        {step === 'success' && <SuccessStep ... />}
      </AnimatePresence>
    </div>
    {/* Right column intentionally empty — text alone holds the composition */}
  </section>
</main>
```

### `MiniNavbar`

```tsx
<nav
  className={cn(
    'fixed top-6 left-1/2 -translate-x-1/2 z-50',
    'flex items-center gap-6 px-5 py-2.5',
    'bg-[#1f1f1f57] backdrop-blur-sm border border-[#333]',
    'transition-[border-radius] duration-300',
    isRound ? 'rounded-full' : 'rounded-xl',
  )}
>
  {/* Left: logo */}
  <img src="/logo/logo.svg" alt="Fivefold" className="h-7 w-auto" />

  {/* Center: links — desktop only */}
  <div className="hidden md:flex items-center gap-6 px-2">
    <AnimatedNavLink href="#">Studio</AnimatedNavLink>
    <AnimatedNavLink href="#">Stories</AnimatedNavLink>
    <AnimatedNavLink href="#">Journal</AnimatedNavLink>
  </div>

  {/* Right: Join Now CTA — desktop */}
  <button
    className={cn(
      'hidden md:inline-flex relative items-center justify-center',
      'px-4 py-1.5 rounded-full text-sm font-medium text-black',
      'bg-gradient-to-b from-gray-100 to-gray-300',
      'transition-all',
      'before:absolute before:inset-0 before:rounded-full',
      'before:bg-gradient-to-b before:from-gray-200 before:to-white',
      'before:blur-lg before:opacity-0 hover:before:opacity-80',
      'before:-z-10 before:transition-opacity',
    )}
  >
    Join Now
  </button>

  {/* Mobile hamburger */}
  <button
    className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full hover:bg-white/5"
    onClick={() => setNavOpen((v) => !v)}
    aria-label="Toggle menu"
  >
    {/* hamburger SVG (3 lines) */}
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 4h14M2 9h14M2 14h14" strokeLinecap="round" />
    </svg>
  </button>

  {/* Mobile dropdown (only when navOpen) */}
  <div className={cn(
    'md:hidden absolute top-full left-0 right-0 mt-2',
    'bg-[#1f1f1f] border border-[#333] rounded-xl overflow-hidden',
    'transition-[max-height] duration-500 ease-in-out',
    navOpen ? 'max-h-[1000px]' : 'max-h-0 border-0',
  )}>
    <div className="flex flex-col p-4 gap-3">
      <AnimatedNavLink href="#">Studio</AnimatedNavLink>
      <AnimatedNavLink href="#">Stories</AnimatedNavLink>
      <AnimatedNavLink href="#">Journal</AnimatedNavLink>
      <button className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium text-black bg-gradient-to-b from-gray-100 to-gray-300">
        Join Now
      </button>
    </div>
  </div>
</nav>
```

### Step 1 — `email`

```tsx
<motion.div key="email" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 40 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
  <h1 className="text-5xl md:text-6xl font-medium tracking-[-0.03em] leading-[0.95]">Step Inside</h1>
  <p className="mt-3 text-base text-gray-300 italic">Where ideas become craft</p>

  {/* Google button — glass + shine sweep on hover */}
  <button className="mt-10 w-full max-w-md relative overflow-hidden inline-flex items-center justify-center gap-3 px-5 py-3 rounded-full text-sm font-medium text-white bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group">
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      {/* Google G logo — colored paths */}
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
    <span>Continue with Google</span>
    {/* Shine sweep */}
    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000" />
  </button>

  {/* Divider */}
  <div className="mt-6 flex items-center gap-4 max-w-md">
    <span className="flex-1 h-px bg-white/10" />
    <span className="text-xs text-gray-500 uppercase tracking-wider">or</span>
    <span className="flex-1 h-px bg-white/10" />
  </div>

  {/* Email pill input */}
  <form onSubmit={(e) => { e.preventDefault(); if (email) setStep('code'); }}
    className="mt-6 max-w-md flex items-center bg-[#1f1f1f80] border border-[#333] focus-within:border-[#666] rounded-full pl-5 pr-1.5 py-1.5 transition-colors">
    <input
      type="email"
      required
      placeholder="you@studio.com"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="flex-1 bg-transparent text-sm text-white placeholder-gray-500 outline-none py-2"
    />
    <button
      type="submit"
      aria-label="Continue"
      className="w-9 h-9 rounded-full bg-white text-black inline-flex items-center justify-center group hover:bg-gray-200 transition-colors"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-200 group-hover:translate-x-0.5">
        <path d="M3 7h8M8 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  </form>

  <p className="mt-10 text-xs text-gray-500 leading-[1.6] max-w-sm">
    By continuing, you accept the Agreement,<br />
    Privacy, and Cookie Notice.
  </p>
</motion.div>
```

### Step 2 — `code`

```tsx
<motion.div key="code" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 40 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
  <h1 className="text-5xl md:text-6xl font-medium tracking-[-0.03em] leading-[0.95]">Check your inbox</h1>
  <p className="mt-3 text-base text-gray-300 italic">A six-digit key just arrived</p>

  {/* 6-box OTP — placeholders "0" + separator "|" between 3rd and 4th */}
  <div className="mt-10 flex items-center gap-2 max-w-md">
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <Fragment key={i}>
        <input
          ref={(el) => (codeRefs.current[i] = el)}
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          value={code[i]}
          placeholder="0"
          onChange={(e) => {
            const v = e.target.value.replace(/[^0-9]/g, '').slice(0, 1);
            const next = [...code]; next[i] = v; setCode(next);
            if (v && i < 5) codeRefs.current[i + 1]?.focus();
            // Auto-advance to success when all 6 filled
            if (next.every((d) => d !== '')) {
              setTimeout(() => setStep('success'), 1200);
            }
          }}
          onKeyDown={(e) => {
            if (e.key === 'Backspace' && !code[i] && i > 0) codeRefs.current[i - 1]?.focus();
          }}
          className="w-12 h-14 text-center text-2xl font-medium rounded-xl bg-[#1f1f1f80] border border-[#333] focus:border-[#666] outline-none transition-colors placeholder-gray-600"
        />
        {i === 2 && <span className="text-gray-600 text-2xl select-none">|</span>}
      </Fragment>
    ))}
  </div>

  {/* Back + Unlock buttons (30/70 split) */}
  <div className="mt-8 flex items-center gap-3 max-w-md">
    <button
      onClick={() => setStep('email')}
      className="w-[30%] py-3 rounded-full text-sm font-medium text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
    >
      Back
    </button>
    <button
      disabled={!code.every((d) => d !== '')}
      onClick={() => setStep('success')}
      className="w-[70%] py-3 rounded-full text-sm font-medium text-black bg-white hover:bg-gray-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
    >
      Unlock
    </button>
  </div>

  <p className="mt-10 text-xs text-gray-500 leading-[1.6] max-w-sm">
    By continuing, you accept the Agreement,<br />
    Privacy, and Cookie Notice.
  </p>
</motion.div>
```

### Step 3 — `success`

```tsx
<motion.div key="success" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 40 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
  {/* Round check icon — gradient white */}
  <div className="w-16 h-16 rounded-full inline-flex items-center justify-center bg-gradient-to-b from-white to-gray-200 text-black">
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M6 14l5 5L22 9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>

  <h1 className="mt-8 text-5xl md:text-6xl font-medium tracking-[-0.03em] leading-[0.95]">Door's open</h1>
  <p className="mt-3 text-base text-gray-300 italic">Welcome home</p>

  <button className="mt-10 inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium text-black bg-white hover:bg-gray-200 transition-colors">
    Enter the Studio
  </button>
</motion.div>
```

---

## LAYER 8 — RESPONSIVE BREAKPOINTS

| BP | Range | Behavior |
|---|---|---|
| **Mobile** | < 768px | Mini-nav center links **hidden**; hamburger replaces them. Heading `text-5xl`. Email form stacks vertically (input pill remains full-width). OTP boxes shrink: `w-10 h-12 text-xl`. |
| **Desktop** | ≥ 768px | Center nav links visible. Heading `text-6xl`. 2-column flex layout activates (`flex-row`), form takes left half, right half intentionally empty. |
| **Wide** | ≥ 1024px | `px-12` container padding. No further changes — the empty right half is intentional. |

---

## LAYER 9 — CONTENT STRINGS (verbatim)

| Step / Location | String |
|---|---|
| Step `email` h1 | `Step Inside` |
| Step `email` italic sub | `Where ideas become craft` |
| Google button | `Continue with Google` |
| Divider | `or` |
| Email placeholder | `you@studio.com` |
| Step `code` h1 | `Check your inbox` |
| Step `code` italic sub | `A six-digit key just arrived` |
| Step `code` Back | `Back` |
| Step `code` Submit | `Unlock` |
| Step `success` h1 | `Door's open` |
| Step `success` italic sub | `Welcome home` |
| Step `success` CTA | `Enter the Studio` |
| Footer legal (shown on `email` and `code` steps, exactly this break) | `By continuing, you accept the Agreement,\nPrivacy, and Cookie Notice.` |
| Mini-nav links | `Studio` · `Stories` · `Journal` |
| Mini-nav CTA | `Join Now` |
| Page title (layout.tsx) | `Login 002 — Enter the Atelier` |

The line break between `Agreement,` and `Privacy,` in the legal footer is **intentional** (rendered with `<br />`). Don't paraphrase or collapse onto one line.

---

## LAYER 10 — FILE TREE

```
project-root/
├── app/
│   ├── layout.tsx              (Inter font setup, body bg-black text-white antialiased)
│   ├── page.tsx                (just renders <SignInPage />)
│   └── globals.css             (Tailwind base + autofill fix from Layer 3)
├── components/
│   └── ui/
│       └── sign-in-flow-1.tsx  (the whole experience — MiniNavbar + AnimatedNavLink + SignInPage)
├── lib/
│   └── utils.ts                (cn() helper)
├── public/
│   └── logo/
│       └── logo.svg            (buyer supplies — white-on-transparent wordmark)
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

`app/page.tsx`:

```tsx
import SignInPage from '@/components/ui/sign-in-flow-1';

export default function Page() {
  return <SignInPage />;
}
```

`package.json` essentials (versions pinned):

```json
{
  "name": "login-002",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "14.2.18",
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "framer-motion": "11.11.17",
    "clsx": "2.1.1",
    "tailwind-merge": "2.5.4"
  },
  "devDependencies": {
    "@types/node": "20",
    "@types/react": "18",
    "@types/react-dom": "18",
    "autoprefixer": "10.4.20",
    "postcss": "8.4.49",
    "tailwindcss": "3.4.15",
    "typescript": "5"
  }
}
```

---

## LAYER 11 — DELIVERY CHECKLIST

- [ ] `npx create-next-app@14 .` (App Router, TypeScript, Tailwind, no src/, no ESLint? — your call).
- [ ] `npm i framer-motion@11 clsx tailwind-merge`. **No three.js, no @react-three/fiber.**
- [ ] `app/layout.tsx` loads Inter via `next/font/google`, sets `<html className={inter.variable}>`, body `bg-black text-white antialiased`.
- [ ] `app/globals.css` has Tailwind directives + HSL CSS vars + the autofill `-webkit-text-fill-color` fix.
- [ ] `tailwind.config.ts` extends colors `background` + `foreground` from HSL vars, fontFamily.sans uses `var(--font-inter)`.
- [ ] `lib/utils.ts` exports `cn()` (clsx + twMerge).
- [ ] `components/ui/sign-in-flow-1.tsx` is the single-file component — exports `SignInPage` as default, contains `MiniNavbar` + `AnimatedNavLink` as inline subcomponents.
- [ ] `public/logo/logo.svg` exists (buyer supplies white-on-transparent wordmark).
- [ ] Background `<video>` references `https://cdn.5sdesign.art/projects/Login-002/login-002.mp4`, has `autoPlay muted loop playsInline preload="auto"`, `absolute inset-0 w-full h-full object-cover`.
- [ ] 4-layer overlay stack: dim `bg-black/40` → radial vignette inline `style={{background:'radial-gradient(...)'}}` → top-fade `linear-gradient`.
- [ ] State machine with 3 steps: `email` → `code` → `success`. `<AnimatePresence mode="wait">` wraps the 3 motion divs with `key=` props and x-axis slide transitions (300ms, ease `[0.22, 1, 0.36, 1]`).
- [ ] Email step: Google CTA glass + shine sweep on hover, divider "or", email pill input with chevron submit button.
- [ ] Code step: 6 single-character inputs, separator `|` between 3rd and 4th, auto-advance focus on input, Backspace to previous, auto-trigger `setStep('success')` 1200ms after all 6 filled, Back (30%) + Unlock (70%) buttons.
- [ ] Success step: round white-gradient check icon + "Door's open" / "Welcome home" / "Enter the Studio" button.
- [ ] MiniNavbar: floating glass pill, `rounded-full` default, morphs to `rounded-xl` while mobile menu open (with 300ms delay back to `rounded-full` on close), logo + 3 AnimatedNavLinks + "Join Now" gradient CTA + mobile hamburger toggle.
- [ ] AnimatedNavLink uses overflow-hidden + two stacked `<span>` (default `text-gray-300`, hover white from below) — `group-hover:-translate-y-full` / `group-hover:translate-y-0`.
- [ ] Footer legal `By continuing, you accept the Agreement,<br/>Privacy, and Cookie Notice.` — **the `<br/>` is required**.
- [ ] Right column intentionally empty — DO NOT add a second visual block. The composition relies on negative space.
- [ ] Three.js NOT in `package.json`. Confirm via `npm ls three` showing nothing.
- [ ] `npm run build` succeeds. `npm run dev` shows the working flow at `http://localhost:3000`.
