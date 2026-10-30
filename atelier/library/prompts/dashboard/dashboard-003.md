# Fivefold — Dashboard 003

> Full source bundle for the **Fivefold Dashboard 003** — an ad-performance analytics app (CPC / CPM / CPA / ROAS tracking across Google, Meta, and TikTok). Write each file at its exact path. The dashboard renders byte-for-byte: no build step beyond `npm install && npm run dev`.

---

## STACK (pinned — do not substitute)

- **Next.js 16** (App Router) + **TypeScript** + **Turbopack**
- **Tailwind CSS v4** (CSS-first config in `app/globals.css`, no `tailwind.config.js`)
- **Radix UI primitives** (button, card, dropdown, tooltip, sheet, sidebar, etc.) wired through a shadcn-style `components/ui/*` layer
- **Recharts** for the four analytical charts
- **In-house icon kit** (`components/icons.tsx`) — solid 24×24 SVGs, `currentColor`, exported under lucide-compatible names so the rest of the codebase imports them transparently

## BRAND & DESIGN INVARIANT

- **Brand:** Fivefold. Sidebar shows the Fivefold wordmark + glyph. Page title `<title>` ships as **`Fivefold — Dashboard 003`**. Do not introduce a separate product name in any header, breadcrumb, or copy.
- **Aesthetic:** flat editorial blueprint — light theme only, no drop shadows, generous whitespace, 1px hairline borders.
- **Color tokens** (light theme, hex):
  - Background page: `#fcfbf8` (vanilla cream)
  - Foreground text: `#001011` (midnight ink)
  - Card / secondary surface: `#ededea` (parchment)
  - Muted text: `#5a6664`
  - Border / divider: `#c1c4c2` (ash mist)
  - **Primary** (filled buttons): ink `#001011` on cream `#fcfbf8`
  - **Accent blue** (focus ring, outline buttons, interactive): `#007aff`
  - **Goldenrod orange** (decorative accent ONLY — never used for text or filled CTAs): `#fd5321`
- **Chart palette:** ink, blue, orange, slate, mist.
- **Type:** Geist (sans) for everything, Geist Mono for small labels and code. Headings letter-spacing `-0.02em`. Numbers use `tabular-nums`.
- **Radius:** cards `20px`, buttons **full pill**, badges `8px`. Card padding `24px`. Grid gap `16px`. Section gap `24px`.
- **Buttons:** filled = ink bg + cream text + pill; outline-accent = transparent + 1px `#007aff` border + `#007aff` text + pill.

## REPRODUCE-EXACTLY RULES

- Every file below is reproduced verbatim — same imports, classes, demo data, numbers. Copy them exactly.
- The app is **client-only-rendered** via the `ClientOnly` wrapper. Server returns a `ShellSkeleton`; the real shell mounts on the client. This dodges hydration mismatches caused by browser extensions (Grammarly, crypto wallets, etc.) that inject `<a>`-tag attributes server-side.
- Navigation uses `<button>` elements end-to-end — **never** `<a>` — for the same reason.
- Light theme only. `next-themes` is intentionally not installed; do not add a `ThemeProvider`.
- The icon kit (`components/icons.tsx`) exports JSX paths, **not** `dangerouslySetInnerHTML`. React 19 emits a "script tag" / hydration error if you switch to dangerouslySetInnerHTML.

---

---

## FILE MANIFEST

Files appear in this order — configs, then `app/`, `lib/`, `hooks/`, `components/ui/`, `components/`, finishing with the page composition.


### `package.json`

```json
{
  "name": "dashboard-003",
  "version": "0.0.1",
  "type": "module",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint",
    "format": "prettier --write \"**/*.{ts,tsx}\"",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^1.17.0",
    "next": "16.2.6",
    "next-themes": "^0.4.6",
    "radix-ui": "^1.4.3",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "recharts": "^3.8.0",
    "shadcn": "^4.10.0",
    "tailwind-merge": "^3.6.0",
    "tw-animate-css": "^1.4.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.2.6",
    "prettier": "^3.8.3",
    "prettier-plugin-tailwindcss": "^0.8.0",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

### `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "next.config.ts",
    "**/*.ts",
    "**/*.tsx",
    "**/*.mts",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts"
  ],
  "exclude": ["node_modules"]
}
```

### `next.config.ts`

```tsx
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Hide the floating Next.js dev-tools badge.
  devIndicators: false,
  // Pin the workspace root to this project (a package-lock.json also exists in a
  // parent directory, which would otherwise be inferred as the Turbopack root).
  turbopack: {
    root: __dirname,
  },
}

export default nextConfig
```

### `postcss.config.mjs`

```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
}

export default config
```

### `components.json`

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "radix-nova",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "rtl": false,
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "menuColor": "default",
  "menuAccent": "subtle"/{name}.json"
  }
}
```

### `app/globals.css`

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";

@custom-variant dark (&:is(.dark *));

@theme inline {
    --font-heading: var(--font-sans);
    --font-sans: var(--font-sans);
    --color-sidebar-ring: var(--sidebar-ring);
    --color-sidebar-border: var(--sidebar-border);
    --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
    --color-sidebar-accent: var(--sidebar-accent);
    --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
    --color-sidebar-primary: var(--sidebar-primary);
    --color-sidebar-foreground: var(--sidebar-foreground);
    --color-sidebar: var(--sidebar);
    --color-chart-5: var(--chart-5);
    --color-chart-4: var(--chart-4);
    --color-chart-3: var(--chart-3);
    --color-chart-2: var(--chart-2);
    --color-chart-1: var(--chart-1);
    --color-ring: var(--ring);
    --color-input: var(--input);
    --color-border: var(--border);
    --color-destructive: var(--destructive);
    --color-accent-foreground: var(--accent-foreground);
    --color-accent: var(--accent);
    --color-muted-foreground: var(--muted-foreground);
    --color-muted: var(--muted);
    --color-secondary-foreground: var(--secondary-foreground);
    --color-secondary: var(--secondary);
    --color-primary-foreground: var(--primary-foreground);
    --color-primary: var(--primary);
    --color-popover-foreground: var(--popover-foreground);
    --color-popover: var(--popover);
    --color-card-foreground: var(--card-foreground);
    --color-card: var(--card);
    --color-foreground: var(--foreground);
    --color-background: var(--background);
    --color-brand-orange: var(--brand-orange);
    --color-brand-blue: var(--brand-blue);
    --color-brand-ink: var(--brand-ink);
    --radius-sm: calc(var(--radius) * 0.6);
    --radius-md: calc(var(--radius) * 0.8);
    --radius-lg: var(--radius);
    --radius-xl: calc(var(--radius) * 1.4);
    --radius-2xl: calc(var(--radius) * 1.8);
    --radius-3xl: calc(var(--radius) * 2.2);
    --radius-4xl: calc(var(--radius) * 2.6);
}

:root {
    /* (dot)connect — high-contrast digital blueprint, light theme.
       Vanilla Cream canvas, Midnight Ink text/actions, Parchment cards,
       Accent Blue interactions, Goldenrod Orange decorative accent. */
    --brand-ink: #001011;        /* Midnight Ink */
    --brand-orange: #fd5321;     /* Goldenrod Orange — decorative only */
    --brand-blue: #007aff;       /* Accent Blue — interactive */

    --background: #fcfbf8;       /* Vanilla Cream */
    --foreground: #001011;       /* Midnight Ink */
    --card: #ededea;             /* Parchment */
    --card-foreground: #001011;
    --popover: #fcfbf8;
    --popover-foreground: #001011;
    --primary: #001011;          /* Filled action */
    --primary-foreground: #fcfbf8;
    --secondary: #ededea;        /* Parchment surface */
    --secondary-foreground: #001011;
    --muted: #ededea;
    --muted-foreground: #5a6664; /* supporting text */
    --accent: #e4e3df;           /* neutral hover surface */
    --accent-foreground: #001011;
    --destructive: #d23b1f;
    --border: #c1c4c2;           /* Ash Mist */
    --input: #c1c4c2;
    --ring: #007aff;             /* Accent Blue focus ring */
    --chart-1: #001011;          /* ink */
    --chart-2: #007aff;          /* blue */
    --chart-3: #fd5321;          /* orange */
    --chart-4: #5a6664;          /* slate */
    --chart-5: #a8aca9;          /* mist */
    --radius: 0.875rem;          /* cards land at ~20px (rounded-xl) */
    --sidebar: #fcfbf8;
    --sidebar-foreground: #001011;
    --sidebar-primary: #001011;
    --sidebar-primary-foreground: #fcfbf8;
    --sidebar-accent: #ededea;
    --sidebar-accent-foreground: #001011;
    --sidebar-border: #c1c4c2;
    --sidebar-ring: #007aff;
}

.dark {
    /* Inverted blueprint: Midnight Ink canvas with the same accents. */
    --brand-ink: #fcfbf8;
    --brand-orange: #fd5321;
    --brand-blue: #2f95ff;

    --background: #001011;
    --foreground: #fcfbf8;
    --card: #0f1e1f;
    --card-foreground: #fcfbf8;
    --popover: #0f1e1f;
    --popover-foreground: #fcfbf8;
    --primary: #fcfbf8;
    --primary-foreground: #001011;
    --secondary: #15282a;
    --secondary-foreground: #fcfbf8;
    --muted: #15282a;
    --muted-foreground: #9aa6a4;
    --accent: #1c3133;
    --accent-foreground: #fcfbf8;
    --destructive: #ff6048;
    --border: rgba(252, 251, 248, 0.12);
    --input: rgba(252, 251, 248, 0.16);
    --ring: #2f95ff;
    --chart-1: #fcfbf8;
    --chart-2: #2f95ff;
    --chart-3: #fd5321;
    --chart-4: #9aa6a4;
    --chart-5: #4a5d5e;
    --sidebar: #001011;
    --sidebar-foreground: #fcfbf8;
    --sidebar-primary: #fcfbf8;
    --sidebar-primary-foreground: #001011;
    --sidebar-accent: #15282a;
    --sidebar-accent-foreground: #fcfbf8;
    --sidebar-border: rgba(252, 251, 248, 0.12);
    --sidebar-ring: #2f95ff;
}

@layer base {
  * {
    @apply border-border outline-ring/50;
    }
  body {
    @apply bg-background text-foreground;
    font-feature-settings: "ss01", "cv01", "cv03";
    }
  html {
    @apply font-sans;
    }
  /* Tight, technical headings — the (dot)connect blueprint voice. */
  h1, h2, h3, h4 {
    letter-spacing: -0.02em;
    }
  ::selection {
    background: var(--brand-orange);
    color: var(--brand-ink);
    }
}
```

### `app/layout.tsx`

```tsx
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Fivefold — Dashboard 003",
  description: "Fivefold Dashboard 003 — ad-performance analytics across CPC, CPM, CPA, and ROAS.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn("antialiased", fontMono.variable, "font-sans", geist.variable)}
    >
      <body suppressHydrationWarning>
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  )
}
```

### `app/page.tsx`

```tsx
import { AppShell } from "@/components/app-shell";
import { ClientOnly } from "@/components/client-only";
import { Dashboard } from "@/components/dashboard";
import { DashboardSkeleton } from "@/components/dashboard-skeleton";

function ShellSkeleton() {
  return (
    <div className="flex min-h-svh">
      <div className="hidden w-64 shrink-0 border-r bg-sidebar md:block" />
      <div className="flex flex-1 flex-col">
        <div className="h-14 border-b" />
        <div className="p-6">
          <DashboardSkeleton />
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <ClientOnly fallback={<ShellSkeleton />}>
      <AppShell>
        <Dashboard />
      </AppShell>
    </ClientOnly>
  );
}
```

### `lib/utils.ts`

```ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### `hooks/use-mobile.ts`

```ts
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
```

### `components/ui/button.tsx`

```tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-full px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-full px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-full in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-full in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
```

### `components/ui/card.tsx`

```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

function Card({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & { size?: "default" | "sm" }) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        "group/card flex flex-col gap-4 overflow-hidden rounded-xl bg-card py-4 text-sm text-card-foreground ring-1 ring-foreground/10 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-4 group-data-[size=sm]/card:px-3 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "font-heading text-base leading-snug font-medium group-data-[size=sm]/card:text-sm",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-4 group-data-[size=sm]/card:px-3", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center rounded-b-xl border-t bg-muted/50 p-4 group-data-[size=sm]/card:p-3",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
```

### `components/ui/badge.tsx`

```tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        secondary:
          "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
        destructive:
          "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
        outline:
          "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
        ghost:
          "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
```

### `components/ui/separator.tsx`

```tsx
"use client"

import * as React from "react"
import { Separator as SeparatorPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
```

### `components/ui/input.tsx`

```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

export { Input }
```

### `components/ui/avatar.tsx`

```tsx
"use client"

import * as React from "react"
import { Avatar as AvatarPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Avatar({
  className,
  size = "default",
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root> & {
  size?: "default" | "sm" | "lg"
}) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      className={cn(
        "group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-10 data-[size=sm]:size-6 dark:after:mix-blend-lighten",
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn(
        "aspect-square size-full rounded-full object-cover",
        className
      )}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs",
        className
      )}
      {...props}
    />
  )
}

function AvatarBadge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="avatar-badge"
      className={cn(
        "absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground bg-blend-color ring-2 ring-background select-none",
        "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden",
        "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2",
        "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2",
        className
      )}
      {...props}
    />
  )
}

function AvatarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        "group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background",
        className
      )}
      {...props}
    />
  )
}

function AvatarGroupCount({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        "relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3",
        className
      )}
      {...props}
    />
  )
}

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarBadge,
}
```

### `components/ui/tooltip.tsx`

```tsx
"use client"

import * as React from "react"
import { Tooltip as TooltipPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "z-50 inline-flex w-fit max-w-xs origin-(--radix-tooltip-content-transform-origin) items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-xs text-background has-data-[slot=kbd]:pr-1.5 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger }
```

### `components/ui/dropdown-menu.tsx`

```tsx
"use client"

import * as React from "react"
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { CheckIcon, ChevronRightIcon } from "@/components/icons"

function DropdownMenu({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  )
}

function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  )
}

function DropdownMenuContent({
  className,
  align = "start",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        align={align}
        className={cn("z-50 max-h-(--radix-dropdown-menu-content-available-height) w-(--radix-dropdown-menu-trigger-width) min-w-32 origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:overflow-hidden data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
}

function DropdownMenuGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  )
}

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "group/dropdown-menu-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      data-inset={inset}
      className={cn(
        "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span
        className="pointer-events-none absolute right-2 flex items-center justify-center"
        data-slot="dropdown-menu-checkbox-item-indicator"
      >
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon
          />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
}

function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  )
}

function DropdownMenuRadioItem({
  className,
  children,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      data-inset={inset}
      className={cn(
        "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <span
        className="pointer-events-none absolute right-2 flex items-center justify-center"
        data-slot="dropdown-menu-radio-item-indicator"
      >
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon
          />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        "px-1.5 py-1 text-xs font-medium text-muted-foreground data-inset:pl-7",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("-mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  )
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-open:bg-accent data-open:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto" />
    </DropdownMenuPrimitive.SubTrigger>
  )
}

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn("z-50 min-w-[96px] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-lg bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className )}
      {...props}
    />
  )
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}
```

### `components/ui/collapsible.tsx`

```tsx
"use client"

import { Collapsible as CollapsiblePrimitive } from "radix-ui"

function Collapsible({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
}

function CollapsibleTrigger({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      {...props}
    />
  )
}

function CollapsibleContent({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      {...props}
    />
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
```

### `components/ui/breadcrumb.tsx`

```tsx
import * as React from "react"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"
import { ChevronRightIcon, MoreHorizontalIcon } from "@/components/icons"

function Breadcrumb({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      aria-label="breadcrumb"
      data-slot="breadcrumb"
      className={cn(className)}
      {...props}
    />
  )
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "flex flex-wrap items-center gap-1.5 text-sm wrap-break-word text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1", className)}
      {...props}
    />
  )
}

function BreadcrumbLink({
  asChild,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot.Root : "a"

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn("transition-colors hover:text-foreground", className)}
      {...props}
    />
  )
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("font-normal text-foreground", className)}
      {...props}
    />
  )
}

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? (
        <ChevronRightIcon />
      )}
    </li>
  )
}

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn(
        "flex size-5 items-center justify-center [&>svg]:size-4",
        className
      )}
      {...props}
    >
      <MoreHorizontalIcon
      />
      <span className="sr-only">More</span>
    </span>
  )
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
```

### `components/ui/kbd.tsx`

```tsx
import { cn } from "@/lib/utils"

function Kbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm bg-muted px-1 font-sans text-xs font-medium text-muted-foreground select-none in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background dark:in-data-[slot=tooltip-content]:bg-background/10 [&_svg:not([class*='size-'])]:size-3",
        className
      )}
      {...props}
    />
  )
}

function KbdGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn("inline-flex items-center gap-1", className)}
      {...props}
    />
  )
}

export { Kbd, KbdGroup }
```

### `components/ui/skeleton.tsx`

```tsx
import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
```

### `components/ui/select.tsx`

```tsx
"use client"

import * as React from "react"
import { Select as SelectPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { ChevronDownIcon, CheckIcon, ChevronUpIcon } from "@/components/icons"

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return (
    <SelectPrimitive.Group
      data-slot="select-group"
      className={cn("scroll-my-1 p-1", className)}
      {...props}
    />
  )
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default"
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "flex w-fit items-center justify-between gap-1.5 rounded-lg border border-input bg-transparent py-2 pr-2 pl-2.5 text-sm whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="pointer-events-none size-4 text-muted-foreground" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  position = "item-aligned",
  align = "center",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        data-align-trigger={position === "item-aligned"}
        className={cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-36 origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[align-trigger=true]:animate-none data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", position ==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className )}
        position={position}
        align={align}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          data-position={position}
          className={cn(
            "data-[position=popper]:h-(--radix-select-trigger-height) data-[position=popper]:w-full data-[position=popper]:min-w-(--radix-select-trigger-width)",
            position === "popper" && ""
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("px-1.5 py-1 text-xs text-muted-foreground", className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "relative flex w-full cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute right-2 flex size-4 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="pointer-events-none" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("pointer-events-none -mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "z-10 flex cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <ChevronUpIcon
      />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "z-10 flex cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <ChevronDownIcon
      />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
```

### `components/ui/sheet.tsx`

```tsx
"use client"

import * as React from "react"
import { Dialog as SheetPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { XIcon } from "@/components/icons"

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left"
  showCloseButton?: boolean
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        data-side={side}
        className={cn(
          "fixed z-50 flex flex-col gap-4 bg-popover bg-clip-padding text-sm text-popover-foreground shadow-lg transition duration-200 ease-in-out data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-[side=bottom]:data-open:slide-in-from-bottom-10 data-[side=left]:data-open:slide-in-from-left-10 data-[side=right]:data-open:slide-in-from-right-10 data-[side=top]:data-open:slide-in-from-top-10 data-closed:animate-out data-closed:fade-out-0 data-[side=bottom]:data-closed:slide-out-to-bottom-10 data-[side=left]:data-closed:slide-out-to-left-10 data-[side=right]:data-closed:slide-out-to-right-10 data-[side=top]:data-closed:slide-out-to-top-10",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <SheetPrimitive.Close data-slot="sheet-close" asChild>
            <Button
              variant="ghost"
              className="absolute top-3 right-3"
              size="icon-sm"
            >
              <XIcon
              />
              <span className="sr-only">Close</span>
            </Button>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-0.5 p-4", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  )
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn(
        "font-heading text-base font-medium text-foreground",
        className
      )}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
```

### `components/ui/sidebar.tsx`

```tsx
"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { PanelLeftIcon } from "@/components/icons"

const SIDEBAR_COOKIE_NAME = "sidebar_state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

type SidebarContextProps = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContextProps | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return context
}

function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}) {
  const isMobile = useIsMobile()
  const [openMobile, setOpenMobile] = React.useState(false)

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = React.useState(defaultOpen)
  const open = openProp ?? _open
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value
      if (setOpenProp) {
        setOpenProp(openState)
      } else {
        _setOpen(openState)
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
    },
    [setOpenProp, open]
  )

  // Helper to toggle the sidebar.
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open)
  }, [isMobile, setOpen, setOpenMobile])

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault()
        toggleSidebar()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [toggleSidebar])

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? "expanded" : "collapsed"

  const contextValue = React.useMemo<SidebarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  )

  return (
    <SidebarContext.Provider value={contextValue}>
      <div
        data-slot="sidebar-wrapper"
        style={
          {
            "--sidebar-width": SIDEBAR_WIDTH,
            "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
            ...style,
          } as React.CSSProperties
        }
        className={cn(
          "group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  )
}

function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  dir,
  ...props
}: React.ComponentProps<"div"> & {
  side?: "left" | "right"
  variant?: "sidebar" | "floating" | "inset"
  collapsible?: "offcanvas" | "icon" | "none"
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

  if (collapsible === "none") {
    return (
      <div
        data-slot="sidebar"
        className={cn(
          "flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          dir={dir}
          data-sidebar="sidebar"
          data-slot="sidebar"
          data-mobile="true"
          className="w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div className="flex h-full w-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <div
      className="group peer hidden text-sidebar-foreground md:block"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
      data-slot="sidebar"
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        data-slot="sidebar-gap"
        className={cn(
          "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
        )}
      />
      <div
        data-slot="sidebar-container"
        data-side={side}
        className={cn(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear data-[side=left]:left-0 data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] md:flex",
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset"
            ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          className
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          className="flex size-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow-sm group-data-[variant=floating]:ring-1 group-data-[variant=floating]:ring-sidebar-border"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

function SidebarTrigger({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon-sm"
      className={cn(className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}

function SidebarRail({ className, ...props }: React.ComponentProps<"button">) {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      data-sidebar="rail"
      data-slot="sidebar-rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "absolute inset-y-0 z-20 hidden w-4 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:start-1/2 after:w-[2px] hover:after:bg-sidebar-border sm:flex ltr:-translate-x-1/2 rtl:-translate-x-1/2",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full hover:group-data-[collapsible=offcanvas]:bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      )}
      {...props}
    />
  )
}

function SidebarInset({ className, ...props }: React.ComponentProps<"main">) {
  return (
    <main
      data-slot="sidebar-inset"
      className={cn(
        "relative flex w-full flex-1 flex-col bg-background md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        className
      )}
      {...props}
    />
  )
}

function SidebarInput({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn("h-8 w-full bg-background shadow-none", className)}
      {...props}
    />
  )
}

function SidebarHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
}

function SidebarFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
}

function SidebarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn("mx-2 w-auto bg-sidebar-border", className)}
      {...props}
    />
  )
}

function SidebarContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={cn(
        "no-scrollbar flex min-h-0 flex-1 flex-col gap-0 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group"
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  )
}

function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "div"

  return (
    <Comp
      data-slot="sidebar-group-label"
      data-sidebar="group-label"
      className={cn(
        "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 ring-sidebar-ring outline-hidden transition-[margin,opacity] duration-200 ease-linear group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        className
      )}
      {...props}
    />
  )
}

function SidebarGroupAction({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="sidebar-group-action"
      data-sidebar="group-action"
      className={cn(
        "absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform group-data-[collapsible=icon]:hidden after:absolute after:-inset-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 md:after:hidden [&>svg]:size-4 [&>svg]:shrink-0",
        className
      )}
      {...props}
    />
  )
}

function SidebarGroupContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      className={cn("w-full text-sm", className)}
      {...props}
    />
  )
}

function SidebarMenu({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={cn("flex w-full min-w-0 flex-col gap-0", className)}
      {...props}
    />
  )
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn("group/menu-item relative", className)}
      {...props}
    />
  )
}

const sidebarMenuButtonVariants = cva(
  "peer/menu-button group/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm ring-sidebar-ring outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground [&_svg]:size-4 [&_svg]:shrink-0 [&>span:last-child]:truncate",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_var(--sidebar-border)] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_var(--sidebar-accent)]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean
  isActive?: boolean
  tooltip?: string | React.ComponentProps<typeof TooltipContent>
} & VariantProps<typeof sidebarMenuButtonVariants>) {
  const Comp = asChild ? Slot.Root : "button"
  const { isMobile, state } = useSidebar()

  const button = (
    <Comp
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      {...(isActive ? { "data-active": "true" } : {})}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  )

  if (!tooltip) {
    return button
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    }
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== "collapsed" || isMobile}
        {...tooltip}
      />
    </Tooltip>
  )
}

function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean
  showOnHover?: boolean
}) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="sidebar-menu-action"
      data-sidebar="menu-action"
      className={cn(
        "absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform group-data-[collapsible=icon]:hidden peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 after:absolute after:-inset-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 md:after:hidden [&>svg]:size-4 [&>svg]:shrink-0",
        showOnHover &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 peer-data-active/menu-button:text-sidebar-accent-foreground aria-expanded:opacity-100 md:opacity-0",
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuBadge({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-menu-badge"
      data-sidebar="menu-badge"
      className={cn(
        "pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium text-sidebar-foreground tabular-nums select-none group-data-[collapsible=icon]:hidden peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground",
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}: React.ComponentProps<"div"> & {
  showIcon?: boolean
}) {
  // Random width between 50 to 90%.
  const [width] = React.useState(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`
  })

  return (
    <div
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="size-4 rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="h-4 max-w-(--skeleton-width) flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  )
}

function SidebarMenuSub({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={cn(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5 group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuSubItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cn("group/menu-sub-item relative", className)}
      {...props}
    />
  )
}

function SidebarMenuSubButton({
  asChild = false,
  size = "md",
  isActive = false,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean
  size?: "sm" | "md"
  isActive?: boolean
}) {
  const Comp = asChild ? Slot.Root : "a"

  return (
    <Comp
      data-slot="sidebar-menu-sub-button"
      data-sidebar="menu-sub-button"
      data-size={size}
      {...(isActive ? { "data-active": "true" } : {})}
      className={cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground ring-sidebar-ring outline-hidden group-data-[collapsible=icon]:hidden hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[size=md]:text-sm data-[size=sm]:text-xs data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}
```

### `components/ui/table.tsx`

```tsx
"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted",
        className
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0",
        className
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0",
        className
      )}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("mt-4 text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
```

### `components/ui/chart.tsx`

```tsx
"use client"

import * as React from "react"
import * as RechartsPrimitive from "recharts"
import type { TooltipValueType } from "recharts"

import { cn } from "@/lib/utils"

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const

const INITIAL_DIMENSION = { width: 320, height: 200 } as const
type TooltipNameType = number | string

export type ChartConfig = Record<
  string,
  {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
>

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }

  return context
}

function ChartContainer({
  id,
  className,
  children,
  config,
  initialDimension = INITIAL_DIMENSION,
  ...props
}: React.ComponentProps<"div"> & {
  config: ChartConfig
  children: React.ComponentProps<
    typeof RechartsPrimitive.ResponsiveContainer
  >["children"]
  initialDimension?: {
    width: number
    height: number
  }
}) {
  const uniqueId = React.useId()
  const chartId = `chart-${id ?? uniqueId.replace(/:/g, "")}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-slot="chart"
        data-chart={chartId}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer
          initialDimension={initialDimension}
        >
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
}

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([, config]) => config.theme ?? config.color
  )

  if (!colorConfig.length) {
    return null
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ??
      itemConfig.color
    return color ? `  --color-${key}: ${color};` : null
  })
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  )
}

const ChartTooltip = RechartsPrimitive.Tooltip

function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey,
}: React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
  React.ComponentProps<"div"> & {
    hideLabel?: boolean
    hideIndicator?: boolean
    indicator?: "line" | "dot" | "dashed"
    nameKey?: string
    labelKey?: string
  } & Omit<
    RechartsPrimitive.DefaultTooltipContentProps<
      TooltipValueType,
      TooltipNameType
    >,
    "accessibilityLayer"
  >) {
  const { config } = useChart()

  const tooltipLabel = React.useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null
    }

    const [item] = payload
    const key = `${labelKey ?? item?.dataKey ?? item?.name ?? "value"}`
    const itemConfig = getPayloadConfigFromPayload(config, item, key)
    const value =
      !labelKey && typeof label === "string"
        ? (config[label]?.label ?? label)
        : itemConfig?.label

    if (labelFormatter) {
      return (
        <div className={cn("font-medium", labelClassName)}>
          {labelFormatter(value, payload)}
        </div>
      )
    }

    if (!value) {
      return null
    }

    return <div className={cn("font-medium", labelClassName)}>{value}</div>
  }, [
    label,
    labelFormatter,
    payload,
    hideLabel,
    labelClassName,
    config,
    labelKey,
  ])

  if (!active || !payload?.length) {
    return null
  }

  const nestLabel = payload.length === 1 && indicator !== "dot"

  return (
    <div
      className={cn(
        "grid min-w-32 items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
        className
      )}
    >
      {!nestLabel ? tooltipLabel : null}
      <div className="grid gap-1.5">
        {payload
          .filter((item) => item.type !== "none")
          .map((item, index) => {
            const key = `${nameKey ?? item.name ?? item.dataKey ?? "value"}`
            const itemConfig = getPayloadConfigFromPayload(config, item, key)
            const indicatorColor = color ?? item.payload?.fill ?? item.color

            return (
              <div
                key={index}
                className={cn(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  indicator === "dot" && "items-center"
                )}
              >
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={cn(
                            "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                            {
                              "h-2.5 w-2.5": indicator === "dot",
                              "w-1": indicator === "line",
                              "w-0 border-[1.5px] border-dashed bg-transparent":
                                indicator === "dashed",
                              "my-0.5": nestLabel && indicator === "dashed",
                            }
                          )}
                          style={
                            {
                              "--color-bg": indicatorColor,
                              "--color-border": indicatorColor,
                            } as React.CSSProperties
                          }
                        />
                      )
                    )}
                    <div
                      className={cn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center"
                      )}
                    >
                      <div className="grid gap-1.5">
                        {nestLabel ? tooltipLabel : null}
                        <span className="text-muted-foreground">
                          {itemConfig?.label ?? item.name}
                        </span>
                      </div>
                      {item.value != null && (
                        <span className="font-mono font-medium text-foreground tabular-nums">
                          {typeof item.value === "number"
                            ? item.value.toLocaleString()
                            : String(item.value)}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            )
          })}
      </div>
    </div>
  )
}

const ChartLegend = RechartsPrimitive.Legend

function ChartLegendContent({
  className,
  hideIcon = false,
  payload,
  verticalAlign = "bottom",
  nameKey,
}: React.ComponentProps<"div"> & {
  hideIcon?: boolean
  nameKey?: string
} & RechartsPrimitive.DefaultLegendContentProps) {
  const { config } = useChart()

  if (!payload?.length) {
    return null
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className
      )}
    >
      {payload
        .filter((item) => item.type !== "none")
        .map((item, index) => {
          const key = `${nameKey ?? item.dataKey ?? "value"}`
          const itemConfig = getPayloadConfigFromPayload(config, item, key)

          return (
            <div
              key={index}
              className={cn(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              )}
            >
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className="h-2 w-2 shrink-0 rounded-[2px]"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
              )}
              {itemConfig?.label}
            </div>
          )
        })}
    </div>
  )
}

function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string
) {
  if (typeof payload !== "object" || payload === null) {
    return undefined
  }

  const payloadPayload =
    "payload" in payload &&
    typeof payload.payload === "object" &&
    payload.payload !== null
      ? payload.payload
      : undefined

  let configLabelKey: string = key

  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === "string"
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[
      key as keyof typeof payloadPayload
    ] as string
  }

  return configLabelKey in config ? config[configLabelKey] : config[key]
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
}
```

### `components/formater.ts`

```ts
export const DASHBOARD_LOCALE = "en-US";

/** UTC noon anchor: deterministic across server/client timezones (prevents hydration mismatch). */
export function parseIsoCalendarDate(isoDate: string): Date {
	return new Date(`${isoDate}T12:00:00Z`);
}

export type DashboardDateStyle = "month" | "day-month" | "full";

export function formatDate(isoDate: string, style: DashboardDateStyle): string {
	const date = parseIsoCalendarDate(isoDate);
	if (style === "month") {
		return date.toLocaleDateString(DASHBOARD_LOCALE, {
			month: "short",
			timeZone: "UTC",
		});
	}
	if (style === "day-month") {
		return date.toLocaleDateString(DASHBOARD_LOCALE, {
			day: "numeric",
			month: "short",
			timeZone: "UTC",
		});
	}
	return date.toLocaleDateString(DASHBOARD_LOCALE, {
		day: "numeric",
		month: "short",
		year: "numeric",
		timeZone: "UTC",
	});
}

/** X-axis for range charts: weekday when showing ~a week, otherwise month + day. */
export function formatChartAxisTick(
	isoDate: string,
	periodDays: number
): string {
	const date = parseIsoCalendarDate(isoDate);
	if (periodDays <= 7) {
		return date.toLocaleDateString(DASHBOARD_LOCALE, {
			weekday: "short",
			timeZone: "UTC",
		});
	}
	return formatDate(isoDate, "day-month");
}

export type ChartTooltipWeekdayStyle = "short" | "long";

/** Tooltip label for a chart point (weekday + month + day). */
export function formatChartTooltipDate(
	isoDate: string,
	weekdayStyle: ChartTooltipWeekdayStyle = "short"
): string {
	const date = parseIsoCalendarDate(isoDate);
	return date.toLocaleDateString(DASHBOARD_LOCALE, {
		weekday: weekdayStyle,
		day: "numeric",
		month: "short",
		timeZone: "UTC",
	});
}

export function formatCompactCurrency(
	value: number,
	options?: { maximumFractionDigits?: number }
) {
	const { maximumFractionDigits = 0 } = options ?? {};
	return new Intl.NumberFormat(DASHBOARD_LOCALE, {
		currency: "USD",
		maximumFractionDigits,
		notation: "compact",
		style: "currency",
	}).format(value);
}

/** Full-precision USD (e.g. average order value). */
export function formatFullCurrency(value: number) {
	return new Intl.NumberFormat(DASHBOARD_LOCALE, {
		currency: "USD",
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
		style: "currency",
	}).format(value);
}

export function formatCompactNumber(value: number) {
	return new Intl.NumberFormat(DASHBOARD_LOCALE, {
		maximumFractionDigits: 1,
		notation: "compact",
	}).format(value);
}

/** Whole numbers with grouping (visits, sessions, counts). */
export function formatInteger(value: number) {
	return new Intl.NumberFormat(DASHBOARD_LOCALE, {
		maximumFractionDigits: 0,
	}).format(value);
}

/** Percentage with fixed decimal places (e.g. conversion rate). */
export function formatPercent(value: number, fractionDigits = 2) {
	return `${value.toFixed(fractionDigits)}%`;
}
```

### `components/icons.tsx`

```tsx
import * as React from "react";

// Fivefold icon set (solid, 24px grid, currentColor), authored as real JSX paths
// so they hydrate cleanly under SSR (no dangerouslySetInnerHTML). Exported under
// lucide-compatible names; sizing is handled by parent CSS (e.g. shadcn’s
// `[&_svg]:size-4`) with width/height defaulting to 24 and overridable via props.

export type IconProps = React.SVGProps<SVGSVGElement>;

export const ArrowDownIcon = (props: IconProps) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		{...props}
	>
		<path fillRule="evenodd" clipRule="evenodd" d="M12 2.25C12.4142 2.25 12.75 2.58579 12.75 3L12.75 19.1893L18.9697 12.9697C19.2626 12.6768 19.7374 12.6768 20.0303 12.9697C20.3232 13.2626 20.3232 13.7374 20.0303 14.0303L12.5303 21.5303C12.2374 21.8232 11.7626 21.8232 11.4697 21.5303L3.96967 14.0303C3.67678 13.7374 3.67678 13.2626 3.96967 12.9697C4.26256 12.6768 4.73744 12.6768 5.03033 12.9697L11.25 19.1893L11.25 3C11.25 2.58579 11.5858 2.25 12 2.25Z" fill="currentColor"/>
	</svg>
);

export const ArrowUpIcon = (props: IconProps) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		{...props}
	>
		<path fillRule="evenodd" clipRule="evenodd" d="M11.4697 2.46967C11.7626 2.17678 12.2374 2.17678 12.5303 2.46967L20.0303 9.96967C20.3232 10.2626 20.3232 10.7374 20.0303 11.0303C19.7374 11.3232 19.2626 11.3232 18.9697 11.0303L12.75 4.81066V21C12.75 21.4142 12.4142 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21V4.81066L5.03033 11.0303C4.73744 11.3232 4.26256 11.3232 3.96967 11.0303C3.67678 10.7374 3.67678 10.2626 3.96967 9.96967L11.4697 2.46967Z" fill="currentColor"/>
	</svg>
);

export const ArrowRightIcon = (props: IconProps) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		{...props}
	>
		<path fillRule="evenodd" clipRule="evenodd" d="M12.9697 3.96967C13.2626 3.67678 13.7374 3.67678 14.0303 3.96967L21.5303 11.4697C21.671 11.6103 21.75 11.8011 21.75 12C21.75 12.1989 21.671 12.3897 21.5303 12.5303L14.0303 20.0303C13.7374 20.3232 13.2626 20.3232 12.9697 20.0303C12.6768 19.7374 12.6768 19.2626 12.9697 18.9697L19.1893 12.75H3C2.58579 12.75 2.25 12.4142 2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H19.1893L12.9697 5.03033C12.6768 4.73744 12.6768 4.26256 12.9697 3.96967Z" fill="currentColor"/>
	</svg>
);

export const TrendingDownIcon = (props: IconProps) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		{...props}
	>
		<path fillRule="evenodd" clipRule="evenodd" d="M1.71967 5.46967C2.01256 5.17678 2.48744 5.17678 2.78033 5.46967L9 11.6893L12.7558 7.9335C13.0214 7.66793 13.4425 7.63974 13.7411 7.86752C15.9037 9.51731 17.5581 11.8701 18.3164 14.7L18.6242 15.8488L20.9009 11.9056C21.108 11.5468 21.5667 11.4239 21.9254 11.631C22.2841 11.8381 22.407 12.2968 22.1999 12.6556L19.0179 18.1669C18.9185 18.3392 18.7546 18.4649 18.5625 18.5164C18.3704 18.5678 18.1657 18.5409 17.9934 18.4414L12.482 15.2595C12.1233 15.0523 12.0004 14.5937 12.2075 14.2349C12.4146 13.8762 12.8733 13.7533 13.232 13.9604L17.1753 16.2371L16.8675 15.0882C16.2588 12.8165 14.9977 10.8956 13.3392 9.47141L9.53033 13.2803C9.23744 13.5732 8.76256 13.5732 8.46967 13.2803L1.71967 6.53033C1.42678 6.23744 1.42678 5.76256 1.71967 5.46967Z" fill="currentColor"/>
	</svg>
);

export const TrendingUpIcon = (props: IconProps) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		{...props}
	>
		<path fillRule="evenodd" clipRule="evenodd" d="M15.2194 6.26793C15.3679 5.88122 15.8017 5.68808 16.1884 5.83652L22.1297 8.11716C22.3154 8.18844 22.4651 8.33057 22.546 8.51229C22.627 8.694 22.6324 8.90042 22.5611 9.08612L20.2804 15.0274C20.132 15.4141 19.6982 15.6072 19.3115 15.4588C18.9248 15.3104 18.7316 14.8765 18.8801 14.4898L20.5118 10.239L19.4253 10.7227C16.9721 11.815 15.1036 13.6758 13.975 15.8962C13.8662 16.1104 13.6614 16.2594 13.4241 16.2971C13.1869 16.3348 12.946 16.2566 12.7761 16.0868L9 12.3107L2.78033 18.5303C2.48744 18.8232 2.01256 18.8232 1.71967 18.5303C1.42678 18.2374 1.42678 17.7626 1.71967 17.4697L8.46967 10.7197C8.61032 10.579 8.80109 10.5 9 10.5C9.19891 10.5 9.38968 10.579 9.53033 10.7197L13.1363 14.3257C14.4369 12.2046 16.3711 10.4406 18.8152 9.35239L19.9017 8.86864L15.6508 7.23689C15.2641 7.08845 15.071 6.65463 15.2194 6.26793Z" fill="currentColor"/>
	</svg>
);

export const LogOutIcon = (props: IconProps) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		{...props}
	>
		<path fillRule="evenodd" clipRule="evenodd" d="M7.5 3.75C6.67157 3.75 6 4.42157 6 5.25L6 18.75C6 19.5784 6.67157 20.25 7.5 20.25H13.5C14.3284 20.25 15 19.5784 15 18.75V15C15 14.5858 15.3358 14.25 15.75 14.25C16.1642 14.25 16.5 14.5858 16.5 15V18.75C16.5 20.4069 15.1569 21.75 13.5 21.75H7.5C5.84315 21.75 4.5 20.4069 4.5 18.75L4.5 5.25C4.5 3.59315 5.84315 2.25 7.5 2.25L13.5 2.25C15.1569 2.25 16.5 3.59315 16.5 5.25V9C16.5 9.41421 16.1642 9.75 15.75 9.75C15.3358 9.75 15 9.41421 15 9V5.25C15 4.42157 14.3284 3.75 13.5 3.75L7.5 3.75ZM18.2197 8.46967C18.5126 8.17678 18.9874 8.17678 19.2803 8.46967L22.2803 11.4697C22.5732 11.7626 22.5732 12.2374 22.2803 12.5303L19.2803 15.5303C18.9874 15.8232 18.5126 15.8232 18.2197 15.5303C17.9268 15.2374 17.9268 14.7626 18.2197 14.4697L19.9393 12.75L9 12.75C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25L19.9393 11.25L18.2197 9.53033C17.9268 9.23744 17.9268 8.76256 18.2197 8.46967Z" fill="currentColor"/>
	</svg>
);

export const GraduationCapIcon = (props: IconProps) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		{...props}
	>
		<path d="M11.6998 2.80529C11.8912 2.72164 12.1089 2.72164 12.3003 2.80529C16.0192 4.43011 19.5437 6.41637 22.8295 8.71956C23.0673 8.88623 23.1875 9.1752 23.1381 9.46135C23.0887 9.7475 22.8785 9.97941 22.5986 10.0567C21.9137 10.2457 21.2347 10.4494 20.5618 10.6663C17.8307 11.5471 15.2018 12.6554 12.6972 13.9688L12.6939 13.9705C12.5803 14.0301 12.467 14.09 12.354 14.1504C12.1331 14.2684 11.8679 14.2684 11.6471 14.1504C11.533 14.0895 11.4186 14.0289 11.3039 13.9688C10.0655 13.3193 8.79658 12.7201 7.5 12.1736V11.95C7.5 11.8186 7.56742 11.702 7.67173 11.6389C9.17685 10.727 10.7294 9.88565 12.3247 9.11936C12.6981 8.94002 12.8554 8.49195 12.6761 8.11858C12.4967 7.7452 12.0486 7.58791 11.6753 7.76725C10.036 8.55463 8.44086 9.41909 6.89449 10.3559C6.44111 10.6306 6.13632 11.0801 6.03607 11.5838C5.18115 11.2549 4.31499 10.9486 3.43829 10.6659C2.76546 10.4489 2.08644 10.2457 1.40154 10.0567C1.12162 9.9794 0.911461 9.74749 0.86204 9.46134C0.812619 9.17519 0.932824 8.88622 1.17061 8.71955C4.45645 6.41636 7.98097 4.43011 11.6998 2.80529Z" fill="currentColor"/><path d="M13.0609 15.4734C15.4997 14.1703 18.0621 13.0687 20.7258 12.1906C20.8601 13.6054 20.9458 15.0343 20.9813 16.4755C20.9889 16.7847 20.8059 17.0669 20.5205 17.1861C17.6693 18.3764 14.9574 19.834 12.4159 21.5277C12.1641 21.6955 11.836 21.6955 11.5841 21.5277C9.04267 19.834 6.33073 18.3764 3.4796 17.1861C3.19416 17.0669 3.01116 16.7847 3.01878 16.4755C3.05429 15.0342 3.14001 13.6052 3.27427 12.1903C4.19527 12.4938 5.10415 12.8242 6 13.1803V14.4507C5.55165 14.71 5.25 15.1948 5.25 15.75C5.25 16.2453 5.49008 16.6846 5.86022 16.9577C5.7707 17.3383 5.63822 17.7108 5.46277 18.0675C5.91546 18.2811 6.36428 18.5017 6.8091 18.7289C7.06243 18.2137 7.24612 17.6729 7.36014 17.1207C7.88449 16.887 8.25 16.3612 8.25 15.75C8.25 15.1948 7.94835 14.71 7.5 14.4507V13.8059C8.6714 14.3177 9.81885 14.8743 10.9402 15.4734C11.6028 15.8274 12.3983 15.8274 13.0609 15.4734Z" fill="currentColor"/><path d="M4.46222 19.4623C4.88136 19.0432 5.21502 18.5711 5.46277 18.0675C5.91546 18.2811 6.36428 18.5017 6.8091 18.7289C6.49055 19.3768 6.06164 19.9842 5.52288 20.523C5.22999 20.8158 4.75512 20.8158 4.46222 20.523C4.16933 20.2301 4.16933 19.7552 4.46222 19.4623Z" fill="currentColor"/>
	</svg>
);

export const BellIcon = (props: IconProps) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		{...props}
	>
		<path fillRule="evenodd" clipRule="evenodd" d="M5.25001 8.9998C5.25012 5.27197 8.27215 2.25 12 2.25C15.7279 2.25 18.75 5.27208 18.75 9L18.7498 9.04919V9.75C18.7498 11.8731 19.5508 13.8074 20.8684 15.2699C21.0349 15.4547 21.0989 15.71 21.0393 15.9516C20.9797 16.1931 20.8042 16.3893 20.5709 16.4755C19.0269 17.0455 17.4105 17.4659 15.7396 17.7192C15.7465 17.812 15.75 17.9056 15.75 18C15.75 20.0711 14.0711 21.75 12 21.75C9.92894 21.75 8.25001 20.0711 8.25001 18C8.25001 17.9056 8.25351 17.812 8.2604 17.7192C6.58934 17.4659 4.97287 17.0455 3.42875 16.4755C3.19539 16.3893 3.01992 16.1931 2.96033 15.9516C2.90073 15.71 2.96476 15.4547 3.13126 15.2699C4.44879 13.8074 5.24981 11.8731 5.24981 9.75L5.25001 8.9998ZM9.75221 17.8993C9.75075 17.9326 9.75001 17.9662 9.75001 18C9.75001 19.2426 10.7574 20.25 12 20.25C13.2427 20.25 14.25 19.2426 14.25 18C14.25 17.9662 14.2493 17.9326 14.2478 17.8992C13.5072 17.9659 12.7574 18 11.9998 18C11.2424 18 10.4927 17.966 9.75221 17.8993Z" fill="currentColor"/>
	</svg>
);

export const BarChart3Icon = (props: IconProps) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		{...props}
	>
		<path d="M18.375 2.25C17.3395 2.25 16.5 3.08947 16.5 4.125V19.875C16.5 20.9105 17.3395 21.75 18.375 21.75H19.125C20.1605 21.75 21 20.9105 21 19.875V4.125C21 3.08947 20.1605 2.25 19.125 2.25H18.375Z" fill="currentColor"/><path d="M9.75 8.625C9.75 7.58947 10.5895 6.75 11.625 6.75H12.375C13.4105 6.75 14.25 7.58947 14.25 8.625V19.875C14.25 20.9105 13.4105 21.75 12.375 21.75H11.625C10.5895 21.75 9.75 20.9105 9.75 19.875V8.625Z" fill="currentColor"/><path d="M3 13.125C3 12.0895 3.83947 11.25 4.875 11.25H5.625C6.66053 11.25 7.5 12.0895 7.5 13.125V19.875C7.5 20.9105 6.66053 21.75 5.625 21.75H4.875C3.83947 21.75 3 20.9105 3 19.875V13.125Z" fill="currentColor"/>
	</svg>
);

export const CheckIcon = (props: IconProps) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		{...props}
	>
		<path fillRule="evenodd" clipRule="evenodd" d="M19.916 4.62592C20.2607 4.85568 20.3538 5.32134 20.124 5.66598L11.124 19.166C10.9994 19.3529 10.7975 19.4742 10.5739 19.4963C10.3503 19.5184 10.1286 19.4392 9.96967 19.2803L3.96967 13.2803C3.67678 12.9874 3.67678 12.5125 3.96967 12.2196C4.26256 11.9267 4.73744 11.9267 5.03033 12.2196L10.3834 17.5727L18.876 4.83393C19.1057 4.48929 19.5714 4.39616 19.916 4.62592Z" fill="currentColor"/>
	</svg>
);

export const ChevronDownIcon = (props: IconProps) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		{...props}
	>
		<path fillRule="evenodd" clipRule="evenodd" d="M12.5303 16.2803C12.2374 16.5732 11.7626 16.5732 11.4697 16.2803L3.96967 8.78033C3.67678 8.48744 3.67678 8.01256 3.96967 7.71967C4.26256 7.42678 4.73744 7.42678 5.03033 7.71967L12 14.6893L18.9697 7.71967C19.2626 7.42678 19.7374 7.42678 20.0303 7.71967C20.3232 8.01256 20.3232 8.48744 20.0303 8.78033L12.5303 16.2803Z" fill="currentColor"/>
	</svg>
);

export const ChevronRightIcon = (props: IconProps) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		{...props}
	>
		<path fillRule="evenodd" clipRule="evenodd" d="M16.2803 11.4697C16.5732 11.7626 16.5732 12.2374 16.2803 12.5303L8.78033 20.0303C8.48744 20.3232 8.01256 20.3232 7.71967 20.0303C7.42678 19.7374 7.42678 19.2626 7.71967 18.9697L14.6893 12L7.71967 5.03033C7.42678 4.73744 7.42678 4.26256 7.71967 3.96967C8.01256 3.67678 8.48744 3.67678 8.78033 3.96967L16.2803 11.4697Z" fill="currentColor"/>
	</svg>
);

export const ChevronUpIcon = (props: IconProps) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		{...props}
	>
		<path fillRule="evenodd" clipRule="evenodd" d="M11.4697 7.71967C11.7626 7.42678 12.2374 7.42678 12.5303 7.71967L20.0303 15.2197C20.3232 15.5126 20.3232 15.9874 20.0303 16.2803C19.7374 16.5732 19.2626 16.5732 18.9697 16.2803L12 9.31066L5.03033 16.2803C4.73744 16.5732 4.26256 16.5732 3.96967 16.2803C3.67678 15.9874 3.67678 15.5126 3.96967 15.2197L11.4697 7.71967Z" fill="currentColor"/>
	</svg>
);

export const CommandIcon = (props: IconProps) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		{...props}
	>
		<path fillRule="evenodd" clipRule="evenodd" d="M2.25 6C2.25 4.34315 3.59315 3 5.25 3H18.75C20.4069 3 21.75 4.34315 21.75 6V18C21.75 19.6569 20.4069 21 18.75 21H5.25C3.59315 21 2.25 19.6569 2.25 18V6ZM6.21967 6.96967C6.51256 6.67678 6.98744 6.67678 7.28033 6.96967L9.53033 9.21967C9.82322 9.51256 9.82322 9.98744 9.53033 10.2803L7.28033 12.5303C6.98744 12.8232 6.51256 12.8232 6.21967 12.5303C5.92678 12.2374 5.92678 11.7626 6.21967 11.4697L7.93934 9.75L6.21967 8.03033C5.92678 7.73744 5.92678 7.26256 6.21967 6.96967ZM10.5 11.25C10.0858 11.25 9.75 11.5858 9.75 12C9.75 12.4142 10.0858 12.75 10.5 12.75H13.5C13.9142 12.75 14.25 12.4142 14.25 12C14.25 11.5858 13.9142 11.25 13.5 11.25H10.5Z" fill="currentColor"/>
	</svg>
);

export const CreditCardIcon = (props: IconProps) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		{...props}
	>
		<path d="M4.5 3.75C2.84315 3.75 1.5 5.09315 1.5 6.75V7.5H22.5V6.75C22.5 5.09315 21.1569 3.75 19.5 3.75H4.5Z" fill="currentColor"/><path fillRule="evenodd" clipRule="evenodd" d="M22.5 9.75H1.5V17.25C1.5 18.9069 2.84315 20.25 4.5 20.25H19.5C21.1569 20.25 22.5 18.9069 22.5 17.25V9.75ZM4.5 13.5C4.5 13.0858 4.83579 12.75 5.25 12.75H11.25C11.6642 12.75 12 13.0858 12 13.5C12 13.9142 11.6642 14.25 11.25 14.25H5.25C4.83579 14.25 4.5 13.9142 4.5 13.5ZM5.25 15.75C4.83579 15.75 4.5 16.0858 4.5 16.5C4.5 16.9142 4.83579 17.25 5.25 17.25H8.25C8.66421 17.25 9 16.9142 9 16.5C9 16.0858 8.66421 15.75 8.25 15.75H5.25Z" fill="currentColor"/>
	</svg>
);

export const EllipsisIcon = (props: IconProps) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		{...props}
	>
		<path fillRule="evenodd" clipRule="evenodd" d="M4.5 12C4.5 11.1716 5.17157 10.5 6 10.5C6.82843 10.5 7.5 11.1716 7.5 12C7.5 12.8284 6.82843 13.5 6 13.5C5.17157 13.5 4.5 12.8284 4.5 12ZM10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12ZM16.5 12C16.5 11.1716 17.1716 10.5 18 10.5C18.8284 10.5 19.5 11.1716 19.5 12C19.5 12.8284 18.8284 13.5 18 13.5C17.1716 13.5 16.5 12.8284 16.5 12Z" fill="currentColor"/>
	</svg>
);

export const MoreHorizontalIcon = (props: IconProps) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		{...props}
	>
		<path fillRule="evenodd" clipRule="evenodd" d="M4.5 12C4.5 11.1716 5.17157 10.5 6 10.5C6.82843 10.5 7.5 11.1716 7.5 12C7.5 12.8284 6.82843 13.5 6 13.5C5.17157 13.5 4.5 12.8284 4.5 12ZM10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12ZM16.5 12C16.5 11.1716 17.1716 10.5 18 10.5C18.8284 10.5 19.5 11.1716 19.5 12C19.5 12.8284 18.8284 13.5 18 13.5C17.1716 13.5 16.5 12.8284 16.5 12Z" fill="currentColor"/>
	</svg>
);

export const HelpCircleIcon = (props: IconProps) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		{...props}
	>
		<path fillRule="evenodd" clipRule="evenodd" d="M2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12ZM13.6277 8.08328C12.7389 7.30557 11.2616 7.30557 10.3728 8.08328C10.0611 8.35604 9.58723 8.32445 9.31447 8.01272C9.04171 7.701 9.0733 7.22717 9.38503 6.95441C10.8394 5.68186 13.1611 5.68186 14.6154 6.95441C16.1285 8.27835 16.1285 10.4717 14.6154 11.7956C14.3588 12.0202 14.0761 12.2041 13.778 12.3484C13.1018 12.6756 12.7502 13.1222 12.7502 13.5V14.25C12.7502 14.6642 12.4144 15 12.0002 15C11.586 15 11.2502 14.6642 11.2502 14.25V13.5C11.2502 12.221 12.3095 11.3926 13.1246 10.9982C13.3073 10.9098 13.4765 10.799 13.6277 10.6667C14.4577 9.9404 14.4577 8.80959 13.6277 8.08328ZM12 18C12.4142 18 12.75 17.6642 12.75 17.25C12.75 16.8358 12.4142 16.5 12 16.5C11.5858 16.5 11.25 16.8358 11.25 17.25C11.25 17.6642 11.5858 18 12 18Z" fill="currentColor"/>
	</svg>
);

export const LayersIcon = (props: IconProps) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		{...props}
	>
		<path d="M11.6444 1.58965C11.8664 1.47012 12.1336 1.47012 12.3556 1.58965L22.1056 6.83965C22.3485 6.97046 22.5 7.22409 22.5 7.5C22.5 7.77591 22.3485 8.02954 22.1056 8.16035L12.3556 13.4104C12.1336 13.5299 11.8664 13.5299 11.6444 13.4104L1.89443 8.16035C1.65149 8.02954 1.5 7.77591 1.5 7.5C1.5 7.22409 1.65149 6.97046 1.89443 6.83965L11.6444 1.58965Z" fill="currentColor"/><path d="M3.26468 10.6018L10.9333 14.731C11.5992 15.0896 12.4008 15.0896 13.0667 14.7311L20.7353 10.6018L22.1056 11.3396C22.3485 11.4704 22.5 11.7241 22.5 12C22.5 12.2759 22.3485 12.5295 22.1056 12.6603L12.3556 17.9103C12.1336 18.0299 11.8664 18.0299 11.6444 17.9103L1.89443 12.6603C1.65149 12.5295 1.5 12.2759 1.5 12C1.5 11.7241 1.65149 11.4704 1.89443 11.3396L3.26468 10.6018Z" fill="currentColor"/><path d="M10.9333 19.231L3.26468 15.1018L1.89443 15.8396C1.65149 15.9704 1.5 16.2241 1.5 16.5C1.5 16.7759 1.65149 17.0295 1.89443 17.1603L11.6444 22.4103C11.8664 22.5299 12.1336 22.5299 12.3556 22.4103L22.1056 17.1603C22.3485 17.0295 22.5 16.7759 22.5 16.5C22.5 16.2241 22.3485 15.9704 22.1056 15.8396L20.7353 15.1018L13.0667 19.2311C12.4008 19.5896 11.5992 19.5896 10.9333 19.231Z" fill="currentColor"/>
	</svg>
);

export const LayoutGridIcon = (props: IconProps) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		{...props}
	>
		<path fillRule="evenodd" clipRule="evenodd" d="M3 6C3 4.34315 4.34315 3 6 3H8.25C9.90685 3 11.25 4.34315 11.25 6V8.25C11.25 9.90685 9.90685 11.25 8.25 11.25H6C4.34315 11.25 3 9.90685 3 8.25V6ZM12.75 6C12.75 4.34315 14.0931 3 15.75 3H18C19.6569 3 21 4.34315 21 6V8.25C21 9.90685 19.6569 11.25 18 11.25H15.75C14.0931 11.25 12.75 9.90685 12.75 8.25V6ZM3 15.75C3 14.0931 4.34315 12.75 6 12.75H8.25C9.90685 12.75 11.25 14.0931 11.25 15.75V18C11.25 19.6569 9.90685 21 8.25 21H6C4.34315 21 3 19.6569 3 18V15.75ZM12.75 15.75C12.75 14.0931 14.0931 12.75 15.75 12.75H18C19.6569 12.75 21 14.0931 21 15.75V18C21 19.6569 19.6569 21 18 21H15.75C14.0931 21 12.75 19.6569 12.75 18V15.75Z" fill="currentColor"/>
	</svg>
);

export const LifeBuoyIcon = (props: IconProps) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		{...props}
	>
		<path fillRule="evenodd" clipRule="evenodd" d="M19.449 8.44818L16.3878 10.9992C16.5374 11.6574 16.5374 12.3426 16.3878 13.0008L19.449 15.5518C20.517 13.3118 20.517 10.6882 19.449 8.44818ZM15.5518 19.449L13.0008 16.3878C12.3426 16.5374 11.6574 16.5374 10.9992 16.3878L8.44818 19.449C10.6882 20.517 13.3118 20.517 15.5518 19.449ZM4.55102 15.5518L7.6122 13.0008C7.4626 12.3426 7.4626 11.6574 7.6122 10.9992L4.55102 8.44818C3.48299 10.6882 3.48299 13.3118 4.55102 15.5518ZM8.44818 4.55102L10.9992 7.6122C11.6574 7.4626 12.3426 7.4626 13.0008 7.6122L15.5518 4.55102C13.3118 3.48299 10.6882 3.48299 8.44818 4.55102ZM17.1055 3.6912C17.7424 4.08325 18.3435 4.55493 18.8943 5.10571C19.4451 5.65649 19.9167 6.25755 20.3088 6.89448C22.2304 10.0163 22.2304 13.9837 20.3088 17.1055C19.9167 17.7424 19.4451 18.3435 18.8943 18.8943C18.3435 19.4451 17.7424 19.9167 17.1055 20.3088C13.9837 22.2304 10.0163 22.2304 6.89448 20.3088C6.25755 19.9167 5.65649 19.4451 5.10571 18.8943C4.55493 18.3435 4.08325 17.7424 3.6912 17.1055C1.7696 13.9837 1.7696 10.0163 3.6912 6.89448C4.08325 6.25755 4.55493 5.65649 5.10571 5.10571C5.65649 4.55493 6.25755 4.08325 6.89448 3.6912C10.0163 1.7696 13.9837 1.7696 17.1055 3.6912ZM14.1213 9.87868C13.7958 9.55313 13.4158 9.31907 13.0115 9.17471C12.359 8.94176 11.641 8.94176 10.9886 9.17471C10.5842 9.31907 10.2042 9.55313 9.87868 9.87868C9.55313 10.2042 9.31907 10.5842 9.17471 10.9885C8.94176 11.641 8.94176 12.359 9.17471 13.0114C9.31907 13.4158 9.55313 13.7958 9.87868 14.1213C10.2042 14.4469 10.5842 14.6809 10.9886 14.8253C11.641 15.0582 12.359 15.0582 13.0115 14.8253C13.4158 14.6809 13.7958 14.4469 14.1213 14.1213C14.4469 13.7958 14.6809 13.4158 14.8253 13.0115C15.0582 12.359 15.0582 11.641 14.8253 10.9885C14.6809 10.5842 14.4469 10.2042 14.1213 9.87868Z" fill="currentColor"/>
	</svg>
);

export const ListChecksIcon = (props: IconProps) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		{...props}
	>
		<path fillRule="evenodd" clipRule="evenodd" d="M7.50183 6H11.2477L11.25 6H14.6299C16.4915 6.00268 17.9999 7.51269 17.9999 9.375V18.75C19.6567 18.75 20.9999 17.4068 20.9999 15.75V6.10821C20.9999 4.60282 19.8751 3.2966 18.3358 3.16884C18.1121 3.15027 17.8879 3.13321 17.6632 3.11767C17.1633 2.15647 16.1583 1.5 15 1.5H13.5C12.3417 1.5 11.3367 2.15647 10.8368 3.11765C10.6121 3.13319 10.3878 3.15026 10.1639 3.16884C8.66165 3.29353 7.55421 4.54069 7.50183 6ZM13.5 3C12.6716 3 12 3.67157 12 4.5H16.5C16.5 3.67157 15.8284 3 15 3H13.5Z" fill="currentColor"/><path fillRule="evenodd" clipRule="evenodd" d="M3 9.375C3 8.33947 3.83947 7.5 4.875 7.5H14.625C15.6605 7.5 16.5 8.33947 16.5 9.375V20.625C16.5 21.6605 15.6605 22.5 14.625 22.5H4.875C3.83947 22.5 3 21.6605 3 20.625V9.375ZM12.5857 13.9685C12.8444 13.6451 12.792 13.1731 12.4685 12.9143C12.1451 12.6556 11.6731 12.708 11.4143 13.0315L8.93781 16.1272L8.03033 15.2197C7.73744 14.9268 7.26256 14.9268 6.96967 15.2197C6.67678 15.5126 6.67678 15.9874 6.96967 16.2803L8.46967 17.7803C8.62052 17.9312 8.82847 18.0107 9.04148 17.9989C9.25448 17.9871 9.45238 17.8851 9.58565 17.7185L12.5857 13.9685Z" fill="currentColor"/>
	</svg>
);

export const MailIcon = (props: IconProps) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		{...props}
	>
		<path d="M1.5 8.6691V17.25C1.5 18.9069 2.84315 20.25 4.5 20.25H19.5C21.1569 20.25 22.5 18.9069 22.5 17.25V8.6691L13.5723 14.1631C12.6081 14.7564 11.3919 14.7564 10.4277 14.1631L1.5 8.6691Z" fill="currentColor"/><path d="M22.5 6.90783V6.75C22.5 5.09315 21.1569 3.75 19.5 3.75H4.5C2.84315 3.75 1.5 5.09315 1.5 6.75V6.90783L11.2139 12.8856C11.696 13.1823 12.304 13.1823 12.7861 12.8856L22.5 6.90783Z" fill="currentColor"/>
	</svg>
);

export const MessageCircleIcon = (props: IconProps) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		{...props}
	>
		<path fillRule="evenodd" clipRule="evenodd" d="M5.33691 21.7178C5.15732 21.7003 4.9793 21.6757 4.80365 21.6442C4.5396 21.597 4.3209 21.4123 4.23008 21.1599C4.13927 20.9075 4.19016 20.6258 4.36357 20.4211C4.76687 19.9451 5.05254 19.3685 5.17822 18.7349C5.20107 18.6196 5.15571 18.4182 4.92371 18.1923C3.2746 16.5871 2.25 14.4086 2.25 12C2.25 6.96934 6.67799 3 12 3C17.322 3 21.75 6.96934 21.75 12C21.75 17.0307 17.322 21 12 21C11.1668 21 10.3569 20.9034 9.58317 20.7213C8.54447 21.3731 7.3153 21.75 6 21.75C5.77647 21.75 5.55516 21.7391 5.33691 21.7178Z" fill="currentColor"/>
	</svg>
);

export const MessageSquareTextIcon = (props: IconProps) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		{...props}
	>
		<path fillRule="evenodd" clipRule="evenodd" d="M4.84836 2.771C7.18302 2.42773 9.57113 2.25 12.0003 2.25C14.4292 2.25 16.8171 2.4277 19.1516 2.77091C21.1299 3.06177 22.5 4.79445 22.5 6.74056V12.7595C22.5 14.7056 21.1299 16.4382 19.1516 16.7291C18.0054 16.8976 16.8464 17.0262 15.6759 17.1135C15.5514 17.1228 15.4431 17.1875 15.379 17.2835L12.624 21.416C12.4849 21.6247 12.2508 21.75 12 21.75C11.7492 21.75 11.5151 21.6247 11.376 21.416L8.62092 17.2835C8.5569 17.1874 8.44853 17.1227 8.32408 17.1134C7.15358 17.0261 5.99452 16.8975 4.84836 16.729C2.87004 16.4381 1.5 14.7054 1.5 12.7593V6.74064C1.5 4.79455 2.87004 3.06188 4.84836 2.771ZM6.75 8.25C6.75 7.83579 7.08579 7.5 7.5 7.5H16.5C16.9142 7.5 17.25 7.83579 17.25 8.25C17.25 8.66421 16.9142 9 16.5 9H7.5C7.08579 9 6.75 8.66421 6.75 8.25ZM7.5 10.5C7.08579 10.5 6.75 10.8358 6.75 11.25C6.75 11.6642 7.08579 12 7.5 12H12C12.4142 12 12.75 11.6642 12.75 11.25C12.75 10.8358 12.4142 10.5 12 10.5H7.5Z" fill="currentColor"/>
	</svg>
);

export const MinusIcon = (props: IconProps) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		{...props}
	>
		<path fillRule="evenodd" clipRule="evenodd" d="M4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H19C19.4142 11.25 19.75 11.5858 19.75 12C19.75 12.4142 19.4142 12.75 19 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12Z" fill="currentColor"/>
	</svg>
);

export const PanelLeftIcon = (props: IconProps) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		{...props}
	>
		<path d="M15 3.75H9V20.25H15V3.75Z" fill="currentColor"/><path d="M16.5 20.25H19.875C20.9105 20.25 21.75 19.4105 21.75 18.375V5.625C21.75 4.58947 20.9105 3.75 19.875 3.75H16.5V20.25Z" fill="currentColor"/><path d="M4.125 3.75H7.5V20.25H4.125C3.08947 20.25 2.25 19.4105 2.25 18.375V5.625C2.25 4.58947 3.08947 3.75 4.125 3.75Z" fill="currentColor"/>
	</svg>
);

export const PlugIcon = (props: IconProps) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		{...props}
	>
		<path fillRule="evenodd" clipRule="evenodd" d="M1.5 9.83233V11.625C1.5 12.6605 2.33947 13.5 3.375 13.5H20.625C21.6605 13.5 22.5 12.6605 22.5 11.625V9.83233C22.5 9.11619 22.2438 8.42368 21.7778 7.87995L18.4929 4.04763C17.923 3.38269 17.0909 3 16.2151 3H7.78485C6.90908 3 6.07703 3.38269 5.50708 4.04763L2.22223 7.87995C1.75618 8.42368 1.5 9.1162 1.5 9.83233ZM7.78485 4.5C7.34697 4.5 6.93094 4.69134 6.64597 5.02381L3.88067 8.25H7.04584C8.0489 8.25 8.98559 8.7513 9.54199 9.5859L9.70609 9.83205C9.98429 10.2493 10.4526 10.5 10.9542 10.5H13.0458C13.5474 10.5 14.0157 10.2493 14.2939 9.83205L14.458 9.5859C15.0144 8.7513 15.9511 8.25 16.9542 8.25H20.1193L17.354 5.02381C17.0691 4.69134 16.653 4.5 16.2151 4.5H7.78485Z" fill="currentColor"/><path d="M2.8125 15C2.08763 15 1.5 15.5876 1.5 16.3125V18C1.5 19.6569 2.84315 21 4.5 21H19.5C21.1569 21 22.5 19.6569 22.5 18V16.3125C22.5 15.5876 21.9124 15 21.1875 15H16.9542C15.9511 15 15.0144 15.5013 14.458 16.3359L14.2939 16.5821C14.0157 16.9993 13.5474 17.25 13.0458 17.25H10.9542C10.4526 17.25 9.98429 16.9993 9.70609 16.5821L9.54199 16.3359C8.98559 15.5013 8.0489 15 7.04584 15H2.8125Z" fill="currentColor"/>
	</svg>
);

export const PlusIcon = (props: IconProps) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		{...props}
	>
		<path fillRule="evenodd" clipRule="evenodd" d="M12 3.75C12.4142 3.75 12.75 4.08579 12.75 4.5V11.25H19.5C19.9142 11.25 20.25 11.5858 20.25 12C20.25 12.4142 19.9142 12.75 19.5 12.75H12.75V19.5C12.75 19.9142 12.4142 20.25 12 20.25C11.5858 20.25 11.25 19.9142 11.25 19.5V12.75H4.5C4.08579 12.75 3.75 12.4142 3.75 12C3.75 11.5858 4.08579 11.25 4.5 11.25H11.25V4.5C11.25 4.08579 11.5858 3.75 12 3.75Z" fill="currentColor"/>
	</svg>
);

export const SearchIcon = (props: IconProps) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		{...props}
	>
		<path fillRule="evenodd" clipRule="evenodd" d="M10.5 3.75C6.77208 3.75 3.75 6.77208 3.75 10.5C3.75 14.2279 6.77208 17.25 10.5 17.25C12.3642 17.25 14.0506 16.4953 15.273 15.273C16.4953 14.0506 17.25 12.3642 17.25 10.5C17.25 6.77208 14.2279 3.75 10.5 3.75ZM2.25 10.5C2.25 5.94365 5.94365 2.25 10.5 2.25C15.0563 2.25 18.75 5.94365 18.75 10.5C18.75 12.5078 18.032 14.3491 16.8399 15.7793L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.7793 16.8399C14.3491 18.032 12.5078 18.75 10.5 18.75C5.94365 18.75 2.25 15.0563 2.25 10.5Z" fill="currentColor"/>
	</svg>
);

export const SendIcon = (props: IconProps) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		{...props}
	>
		<path d="M3.47804 2.4043C3.2133 2.3274 2.92771 2.40193 2.73432 2.5984C2.54093 2.79487 2.47091 3.0816 2.55198 3.3451L4.98426 11.25H13.5C13.9142 11.25 14.25 11.5858 14.25 12C14.25 12.4142 13.9142 12.75 13.5 12.75H4.98427L2.55207 20.6546C2.471 20.9181 2.54102 21.2049 2.73441 21.4013C2.92781 21.5978 3.2134 21.6723 3.47814 21.5954C10.1767 19.6494 16.3974 16.5814 21.9233 12.6087C22.1193 12.4678 22.2355 12.2412 22.2355 11.9998C22.2355 11.7583 22.1193 11.5317 21.9233 11.3908C16.3974 7.41817 10.1767 4.35021 3.47804 2.4043Z" fill="currentColor"/>
	</svg>
);

export const SettingsIcon = (props: IconProps) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		{...props}
	>
		<path fillRule="evenodd" clipRule="evenodd" d="M11.0779 2.25C10.1613 2.25 9.37909 2.91265 9.22841 3.81675L9.04974 4.88873C9.02959 5.00964 8.93542 5.1498 8.75311 5.23747C8.40905 5.40292 8.07967 5.5938 7.7674 5.8076C7.60091 5.92159 7.43259 5.9332 7.31769 5.89015L6.29851 5.50833C5.44019 5.18678 4.4752 5.53289 4.01692 6.32666L3.09493 7.92358C2.63665 8.71736 2.8194 9.72611 3.52704 10.3087L4.36756 11.0006C4.46219 11.0785 4.53629 11.2298 4.52119 11.4307C4.50706 11.6188 4.49988 11.8086 4.49988 12C4.49988 12.1915 4.50707 12.3814 4.52121 12.5695C4.53632 12.7704 4.46221 12.9217 4.36758 12.9996L3.52704 13.6916C2.8194 14.2741 2.63665 15.2829 3.09493 16.0767L4.01692 17.6736C4.4752 18.4674 5.44019 18.8135 6.29851 18.4919L7.31791 18.11C7.43281 18.067 7.60113 18.0786 7.76761 18.1925C8.07982 18.4063 8.40913 18.5971 8.75311 18.7625C8.93542 18.8502 9.02959 18.9904 9.04974 19.1113L9.22841 20.1832C9.37909 21.0874 10.1613 21.75 11.0779 21.75H12.9219C13.8384 21.75 14.6207 21.0874 14.7713 20.1832L14.95 19.1113C14.9702 18.9904 15.0643 18.8502 15.2466 18.7625C15.5907 18.5971 15.9201 18.4062 16.2324 18.1924C16.3988 18.0784 16.5672 18.0668 16.6821 18.1098L17.7012 18.4917C18.5596 18.8132 19.5246 18.4671 19.9828 17.6733L20.9048 16.0764C21.3631 15.2826 21.1804 14.2739 20.4727 13.6913L19.6322 12.9994C19.5376 12.9215 19.4635 12.7702 19.4786 12.5693C19.4927 12.3812 19.4999 12.1914 19.4999 12C19.4999 11.8085 19.4927 11.6186 19.4785 11.4305C19.4634 11.2296 19.5375 11.0783 19.6322 11.0004L20.4727 10.3084C21.1804 9.72587 21.3631 8.71711 20.9048 7.92334L19.9828 6.32642C19.5246 5.53264 18.5596 5.18654 17.7012 5.50809L16.6818 5.89C16.5669 5.93304 16.3986 5.92144 16.2321 5.80746C15.9199 5.59371 15.5906 5.40289 15.2466 5.23747C15.0643 5.1498 14.9702 5.00964 14.95 4.88873L14.7713 3.81675C14.6207 2.91265 13.8384 2.25 12.9219 2.25H11.0779ZM12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z" fill="currentColor"/>
	</svg>
);

export const ShieldCheckIcon = (props: IconProps) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		{...props}
	>
		<path fillRule="evenodd" clipRule="evenodd" d="M12.5157 2.1698C12.2265 1.89587 11.7735 1.89587 11.4843 2.1698C9.46752 4.07977 6.74624 5.25011 3.75 5.25011C3.70233 5.25011 3.65473 5.24981 3.60721 5.24922C3.27984 5.24515 2.98767 5.4539 2.88541 5.76491C2.47287 7.01968 2.25 8.35963 2.25 9.75015C2.25 15.6922 6.31406 20.6831 11.8131 22.0984C11.9357 22.13 12.0643 22.13 12.1869 22.0984C17.6859 20.6831 21.75 15.6922 21.75 9.75015C21.75 8.35963 21.5271 7.01968 21.1146 5.76491C21.0123 5.4539 20.7202 5.24515 20.3928 5.24922C20.3453 5.24981 20.2977 5.25011 20.25 5.25011C17.2538 5.25011 14.5325 4.07977 12.5157 2.1698ZM15.6103 10.1859C15.8511 9.84887 15.773 9.38046 15.4359 9.1397C15.0989 8.89894 14.6305 8.97701 14.3897 9.31407L11.1543 13.8436L9.53033 12.2197C9.23744 11.9268 8.76256 11.9268 8.46967 12.2197C8.17678 12.5126 8.17678 12.9874 8.46967 13.2803L10.7197 15.5303C10.8756 15.6862 11.0921 15.7656 11.3119 15.7474C11.5316 15.7293 11.7322 15.6153 11.8603 15.4359L15.6103 10.1859Z" fill="currentColor"/>
	</svg>
);

export const UserIcon = (props: IconProps) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		{...props}
	>
		<path fillRule="evenodd" clipRule="evenodd" d="M7.50009 6C7.50009 3.51472 9.51481 1.5 12.0001 1.5C14.4854 1.5 16.5001 3.51472 16.5001 6C16.5001 8.48528 14.4854 10.5 12.0001 10.5C9.51481 10.5 7.50009 8.48528 7.50009 6Z" fill="currentColor"/><path fillRule="evenodd" clipRule="evenodd" d="M3.75133 20.1053C3.82867 15.6156 7.49207 12 12.0001 12C16.5082 12 20.1717 15.6157 20.2488 20.1056C20.254 20.4034 20.0824 20.676 19.8117 20.8002C17.4328 21.8918 14.7866 22.5 12.0004 22.5C9.21395 22.5 6.56752 21.8917 4.18841 20.7999C3.91774 20.6757 3.7462 20.4031 3.75133 20.1053Z" fill="currentColor"/>
	</svg>
);

export const UsersIcon = (props: IconProps) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		{...props}
	>
		<path d="M4.5 6.375C4.5 4.09683 6.34683 2.25 8.625 2.25C10.9032 2.25 12.75 4.09683 12.75 6.375C12.75 8.65317 10.9032 10.5 8.625 10.5C6.34683 10.5 4.5 8.65317 4.5 6.375Z" fill="currentColor"/><path d="M14.25 8.625C14.25 6.76104 15.761 5.25 17.625 5.25C19.489 5.25 21 6.76104 21 8.625C21 10.489 19.489 12 17.625 12C15.761 12 14.25 10.489 14.25 8.625Z" fill="currentColor"/><path d="M1.5 19.125C1.5 15.19 4.68997 12 8.625 12C12.56 12 15.75 15.19 15.75 19.125V19.1276C15.75 19.1674 15.7496 19.2074 15.749 19.2469C15.7446 19.5054 15.6074 19.7435 15.3859 19.8768C13.4107 21.0661 11.0966 21.75 8.625 21.75C6.15343 21.75 3.8393 21.0661 1.86406 19.8768C1.64256 19.7435 1.50537 19.5054 1.50103 19.2469C1.50034 19.2064 1.5 19.1657 1.5 19.125Z" fill="currentColor"/><path d="M17.2498 19.1281C17.2498 19.1762 17.2494 19.2244 17.2486 19.2722C17.2429 19.6108 17.1612 19.9378 17.0157 20.232C17.2172 20.2439 17.4203 20.25 17.6248 20.25C19.2206 20.25 20.732 19.8803 22.0764 19.2213C22.3234 19.1002 22.4843 18.8536 22.4957 18.5787C22.4984 18.5111 22.4998 18.4432 22.4998 18.375C22.4998 15.6826 20.3172 13.5 17.6248 13.5C16.8784 13.5 16.1711 13.6678 15.5387 13.9676C16.6135 15.4061 17.2498 17.1912 17.2498 19.125V19.1281Z" fill="currentColor"/>
	</svg>
);

export const UsersRoundIcon = (props: IconProps) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		{...props}
	>
		<path fillRule="evenodd" clipRule="evenodd" d="M8.25 6.75C8.25 4.67893 9.92893 3 12 3C14.0711 3 15.75 4.67893 15.75 6.75C15.75 8.82107 14.0711 10.5 12 10.5C9.92893 10.5 8.25 8.82107 8.25 6.75Z" fill="currentColor"/><path fillRule="evenodd" clipRule="evenodd" d="M15.75 9.75C15.75 8.09315 17.0931 6.75 18.75 6.75C20.4069 6.75 21.75 8.09315 21.75 9.75C21.75 11.4069 20.4069 12.75 18.75 12.75C17.0931 12.75 15.75 11.4069 15.75 9.75Z" fill="currentColor"/><path fillRule="evenodd" clipRule="evenodd" d="M2.25 9.75C2.25 8.09315 3.59315 6.75 5.25 6.75C6.90685 6.75 8.25 8.09315 8.25 9.75C8.25 11.4069 6.90685 12.75 5.25 12.75C3.59315 12.75 2.25 11.4069 2.25 9.75Z" fill="currentColor"/><path fillRule="evenodd" clipRule="evenodd" d="M6.30986 15.1175C7.50783 13.2444 9.60835 12 12 12C14.3919 12 16.4927 13.2447 17.6906 15.1182C18.5187 16.4134 18.877 17.9752 18.709 19.4979C18.6827 19.7359 18.5444 19.947 18.3368 20.0662C16.4694 21.1376 14.3051 21.75 12 21.75C9.69492 21.75 7.53059 21.1376 5.66325 20.0662C5.45559 19.947 5.3173 19.7359 5.29103 19.4979C5.12293 17.9749 5.48141 16.4129 6.30986 15.1175Z" fill="currentColor"/><path d="M5.08228 14.2537C5.07024 14.2722 5.05827 14.2907 5.04638 14.3093C4.08091 15.8189 3.63908 17.6167 3.77471 19.389C3.16667 19.2967 2.5767 19.1481 2.01043 18.9487L1.89547 18.9082C1.68576 18.8343 1.53923 18.6439 1.52159 18.4222L1.51192 18.3007C1.50402 18.2014 1.5 18.1011 1.5 18C1.5 15.9851 3.08905 14.3414 5.08228 14.2537Z" fill="currentColor"/><path d="M20.2256 19.389C20.3612 17.617 19.9196 15.8196 18.9545 14.3102C18.9424 14.2913 18.9303 14.2725 18.9181 14.2537C20.9111 14.3416 22.5 15.9853 22.5 18C22.5 18.1011 22.496 18.2014 22.4881 18.3007L22.4784 18.4222C22.4608 18.6439 22.3142 18.8343 22.1045 18.9082L21.9896 18.9487C21.4234 19.1481 20.8336 19.2966 20.2256 19.389Z" fill="currentColor"/>
	</svg>
);

export const WandIcon = (props: IconProps) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		{...props}
	>
		<path fillRule="evenodd" clipRule="evenodd" d="M9 4.5C9.33486 4.5 9.62915 4.72198 9.72114 5.04396L10.5343 7.89015C10.8903 9.13593 11.8641 10.1097 13.1099 10.4657L15.956 11.2789C16.278 11.3709 16.5 11.6651 16.5 12C16.5 12.3349 16.278 12.6291 15.956 12.7211L13.1098 13.5343C11.8641 13.8903 10.8903 14.8641 10.5343 16.1099L9.72114 18.956C9.62915 19.278 9.33486 19.5 9 19.5C8.66514 19.5 8.37085 19.278 8.27886 18.956L7.46566 16.1099C7.10972 14.8641 6.13593 13.8903 4.89015 13.5343L2.04396 12.7211C1.72198 12.6291 1.5 12.3349 1.5 12C1.5 11.6651 1.72198 11.3709 2.04396 11.2789L4.89015 10.4657C6.13593 10.1097 7.10972 9.13593 7.46566 7.89015L8.27886 5.04396C8.37085 4.72198 8.66514 4.5 9 4.5Z" fill="currentColor"/><path fillRule="evenodd" clipRule="evenodd" d="M18 1.5C18.3442 1.5 18.6441 1.73422 18.7276 2.0681L18.9865 3.10356C19.2216 4.04406 19.9559 4.7784 20.8964 5.01353L21.9319 5.27239C22.2658 5.35586 22.5 5.65585 22.5 6C22.5 6.34415 22.2658 6.64414 21.9319 6.72761L20.8964 6.98647C19.9559 7.2216 19.2216 7.95594 18.9865 8.89644L18.7276 9.9319C18.6441 10.2658 18.3442 10.5 18 10.5C17.6558 10.5 17.3559 10.2658 17.2724 9.9319L17.0135 8.89644C16.7784 7.95594 16.0441 7.2216 15.1036 6.98647L14.0681 6.72761C13.7342 6.64414 13.5 6.34415 13.5 6C13.5 5.65585 13.7342 5.35586 14.0681 5.27239L15.1036 5.01353C16.0441 4.7784 16.7784 4.04406 17.0135 3.10356L17.2724 2.0681C17.3559 1.73422 17.6558 1.5 18 1.5Z" fill="currentColor"/><path fillRule="evenodd" clipRule="evenodd" d="M16.5 15C16.8228 15 17.1094 15.2066 17.2115 15.5128L17.6058 16.6956C17.7551 17.1435 18.1065 17.4949 18.5544 17.6442L19.7372 18.0385C20.0434 18.1406 20.25 18.4272 20.25 18.75C20.25 19.0728 20.0434 19.3594 19.7372 19.4615L18.5544 19.8558C18.1065 20.0051 17.7551 20.3565 17.6058 20.8044L17.2115 21.9872C17.1094 22.2934 16.8228 22.5 16.5 22.5C16.1772 22.5 15.8906 22.2934 15.7885 21.9872L15.3942 20.8044C15.2449 20.3565 14.8935 20.0051 14.4456 19.8558L13.2628 19.4615C12.9566 19.3594 12.75 19.0728 12.75 18.75C12.75 18.4272 12.9566 18.1406 13.2628 18.0385L14.4456 17.6442C14.8935 17.4949 15.2449 17.1435 15.3942 16.6956L15.7885 15.5128C15.8906 15.2066 16.1772 15 16.5 15Z" fill="currentColor"/>
	</svg>
);

export const XIcon = (props: IconProps) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		{...props}
	>
		<path fillRule="evenodd" clipRule="evenodd" d="M5.46967 5.46967C5.76256 5.17678 6.23744 5.17678 6.53033 5.46967L12 10.9393L17.4697 5.46967C17.7626 5.17678 18.2374 5.17678 18.5303 5.46967C18.8232 5.76256 18.8232 6.23744 18.5303 6.53033L13.0607 12L18.5303 17.4697C18.8232 17.7626 18.8232 18.2374 18.5303 18.5303C18.2374 18.8232 17.7626 18.8232 17.4697 18.5303L12 13.0607L6.53033 18.5303C6.23744 18.8232 5.76256 18.8232 5.46967 18.5303C5.17678 18.2374 5.17678 17.7626 5.46967 17.4697L10.9393 12L5.46967 6.53033C5.17678 6.23744 5.17678 5.76256 5.46967 5.46967Z" fill="currentColor"/>
	</svg>
);

export const ActivityIcon = (props: IconProps) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		{...props}
	>
		<path fillRule="evenodd" clipRule="evenodd" d="M5.63604 4.57538C5.92893 4.86828 5.92893 5.34315 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C5.92893 18.6569 5.92893 19.1317 5.63604 19.4246C5.34315 19.7175 4.86827 19.7175 4.57538 19.4246C0.474874 15.3241 0.474873 8.67589 4.57538 4.57538C4.86827 4.28249 5.34315 4.28249 5.63604 4.57538ZM18.364 4.57538C18.6569 4.28249 19.1317 4.28249 19.4246 4.57538C23.5251 8.67589 23.5251 15.3241 19.4246 19.4246C19.1317 19.7175 18.6569 19.7175 18.364 19.4246C18.0711 19.1317 18.0711 18.6569 18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C18.0711 5.34315 18.0711 4.86828 18.364 4.57538ZM7.75736 6.6967C8.05025 6.9896 8.05025 7.46447 7.75736 7.75736C5.41421 10.1005 5.41421 13.8995 7.75736 16.2426C8.05025 16.5355 8.05025 17.0104 7.75736 17.3033C7.46447 17.5962 6.98959 17.5962 6.6967 17.3033C3.76777 14.3744 3.76777 9.62564 6.6967 6.6967C6.98959 6.40381 7.46447 6.40381 7.75736 6.6967ZM16.2426 6.6967C16.5355 6.40381 17.0104 6.40381 17.3033 6.6967C20.2322 9.62564 20.2322 14.3744 17.3033 17.3033C17.0104 17.5962 16.5355 17.5962 16.2426 17.3033C15.9497 17.0104 15.9497 16.5355 16.2426 16.2426C18.5858 13.8995 18.5858 10.1005 16.2426 7.75736C15.9497 7.46447 15.9497 6.9896 16.2426 6.6967ZM9.87868 8.81802C10.1716 9.11092 10.1716 9.58579 9.87868 9.87868C8.70711 11.0503 8.70711 12.9498 9.87868 14.1213C10.1716 14.4142 10.1716 14.8891 9.87868 15.182C9.58579 15.4749 9.11091 15.4749 8.81802 15.182C7.06066 13.4246 7.06066 10.5754 8.81802 8.81802C9.11091 8.52513 9.58579 8.52513 9.87868 8.81802ZM14.1213 8.81802C14.4142 8.52513 14.8891 8.52513 15.182 8.81802C16.9393 10.5754 16.9393 13.4246 15.182 15.182C14.8891 15.4749 14.4142 15.4749 14.1213 15.182C13.8284 14.8891 13.8284 14.4142 14.1213 14.1213C15.2929 12.9498 15.2929 11.0503 14.1213 9.87868C13.8284 9.58579 13.8284 9.11092 14.1213 8.81802ZM10.875 12C10.875 11.3787 11.3787 10.875 12 10.875C12.6213 10.875 13.125 11.3787 13.125 12C13.125 12.6213 12.6213 13.125 12 13.125C11.3787 13.125 10.875 12.6213 10.875 12Z" fill="currentColor"/>
	</svg>
);
```

### `components/logo.tsx`

```tsx
import type React from "react";

// Fivefold brand artwork. Original viewBox 0 0 1980.3 422.9 — icon mark sits at x:0–290, wordmark letters at x:600+.
// fill="currentColor" so the logo follows the active theme (works in light and dark).

const LogoPaths = () => (
	<>
		<path d="M682.7,327.9c-10.2,0-20.4-2.2-30.8-6.5c-10.4-4.3-19.6-11-27.6-19.9c-8.1-8.9-13.7-20.1-16.8-33.7l30.5-12.1 c2.8,11.7,7.9,21.2,15.6,28.8c7.6,7.5,17.2,11.3,28.6,11.3c12.3,0,22.5-4.1,30.5-12.2c8-8.2,12.1-18.4,12.1-30.7 c0-8.3-1.7-15.7-5.2-22.2c-3.5-6.6-8.4-11.8-14.8-15.7c-6.4-3.9-13.8-5.9-22.2-5.9c-7.2,0-13.9,1.6-20,4.9s-11.1,7.5-14.9,12.6 L614,212.3l13.7-117h117.9v31.1h-89.9l-8.6,65.1l2.2,0.3c4.7-3.8,10.3-7,17-9.7c6.7-2.6,14.5-4,23.4-4c12.3,0,23.7,3.2,34.3,9.5 c10.6,6.4,19.1,15.2,25.6,26.4c6.5,11.2,9.7,24,9.7,38.5c0,14.2-3.3,27-9.9,38.3c-6.6,11.3-15.6,20.3-27,27 C710.7,324.6,697.5,327.9,682.7,327.9z" />
		<path d="M860.7,327.9c-12.9,0-24.2-2-33.7-5.9s-17.4-9.2-23.5-15.9c-6.1-6.7-10.7-13.9-13.7-21.8l30.8-13.3 c3.8,8.7,9.3,15.3,16.4,19.9c7.1,4.6,15.3,6.8,24.6,6.8c8.5,0,15.8-1.5,21.9-4.6s9.2-8.1,9.2-15.1c0-4.4-1.4-8.1-4.3-11 c-2.9-2.9-6.7-5.2-11.4-7.2s-10.2-3.6-16.4-5.1l-19.4-4.4c-7.6-1.9-14.9-4.9-21.8-9.1c-6.9-4.1-12.4-9.4-16.7-15.7 c-4.2-6.4-6.4-13.9-6.4-22.6c0-9.7,2.8-18.2,8.4-25.3c5.6-7.1,13.2-12.6,22.7-16.4s19.8-5.7,30.8-5.7c10.2,0,19.4,1.3,27.8,4 c8.4,2.7,15.7,6.6,21.9,11.8c6.2,5.2,11.2,11.6,14.8,19.2l-29.6,13.3c-3.6-7.2-8.5-12.2-14.6-15.1s-12.8-4.3-20-4.3 c-8.1,0-14.8,1.6-20.2,4.9s-8.1,7.6-8.1,12.9c0,5.5,2.4,9.9,7.2,13c4.8,3.2,10.6,5.7,17.6,7.6l23.5,5.7 c16.1,4,28.2,10.1,36.2,18.3c8,8.2,12.1,18.1,12.1,29.7c0,10.4-3,19.4-8.9,27.2c-5.9,7.7-13.9,13.7-24,17.8 C884.1,325.9,872.9,327.9,860.7,327.9z" />
		<path d="M1035.1,327.9c-14.6,0-27.9-3.7-39.7-11.1c-11.9-7.4-21.2-17.6-28-30.5s-10.2-27.8-10.2-44.5 s3.4-31.6,10.2-44.5s16.1-23.1,28-30.5c11.9-7.4,25.1-11.1,39.7-11.1c8.5,0,16.1,1.3,22.9,3.8c6.8,2.5,12.7,5.9,17.6,10 c5,4.1,8.8,8.5,11.6,13.2h1.9l-1.9-22.6V95.3h34v227.5h-32.1v-21.6h-1.9c-2.8,4.4-6.6,8.7-11.6,12.9c-5,4.1-10.9,7.5-17.6,10 C1051.2,326.7,1043.6,327.9,1035.1,327.9z M1040.2,296.5c8.5,0,16.5-2.2,24-6.7c7.5-4.4,13.6-10.8,18.1-18.9 c4.6-8.2,6.8-17.8,6.8-29.1c0-11.2-2.3-20.9-6.8-29.1c-4.6-8.2-10.6-14.5-18.1-18.9s-15.5-6.7-24-6.7s-16.4,2.2-23.8,6.7 c-7.4,4.4-13.5,10.8-18.1,18.9c-4.7,8.2-7,17.9-7,29.1c0,11,2.3,20.7,7,28.9c4.7,8.3,10.7,14.6,18.1,19.1 C1023.8,294.3,1031.7,296.5,1040.2,296.5z" />
		<path d="M1244.6,327.9c-15.9,0-30.1-3.7-42.6-11.1s-22.3-17.6-29.4-30.5c-7.1-12.9-10.6-27.6-10.6-44.2 c0-15.5,3.4-29.8,10.2-42.9c6.8-13.1,16.3-23.7,28.4-31.6c12.2-7.9,26.2-11.9,42.1-11.9c16.7,0,31,3.6,42.7,10.8 c11.8,7.2,20.7,17.1,26.9,29.6c6.1,12.5,9.2,26.6,9.2,42.3c0,2.3-0.1,4.4-0.2,6.4c-0.1,1.9-0.3,3.4-0.5,4.4h-139.5v-25.7h106.1 c-0.2-4-1.3-8.3-3.2-12.9c-1.9-4.6-4.7-8.7-8.3-12.6c-3.6-3.8-8.2-6.9-13.7-9.4c-5.5-2.4-12-3.7-19.4-3.7 c-9.3,0-17.6,2.4-24.8,7.2c-7.2,4.8-12.8,11.4-16.8,19.9s-6,18.3-6,29.6c0,12.3,2.3,22.6,7,30.8c4.7,8.3,10.8,14.5,18.4,18.8 c7.6,4.2,15.9,6.4,24.8,6.4c10.8,0,19.9-2.5,27.2-7.5c7.3-5,13.1-11.2,17.3-18.6l28.3,13.7c-7,12.7-16.5,23-28.6,31 C1277.6,324,1262.6,327.9,1244.6,327.9z" />
		<path d="M1420.9,327.9c-12.9,0-24.2-2-33.7-5.9s-17.4-9.2-23.5-15.9c-6.1-6.7-10.7-13.9-13.7-21.8l30.8-13.3 c3.8,8.7,9.3,15.3,16.4,19.9s15.3,6.8,24.6,6.8c8.5,0,15.8-1.5,21.9-4.6s9.2-8.1,9.2-15.1c0-4.4-1.4-8.1-4.3-11 c-2.9-2.9-6.7-5.2-11.4-7.2c-4.7-2-10.2-3.6-16.4-5.1l-19.4-4.4c-7.6-1.9-14.9-4.9-21.8-9.1c-6.9-4.1-12.4-9.4-16.7-15.7 c-4.2-6.4-6.4-13.9-6.4-22.6c0-9.7,2.8-18.2,8.4-25.3c5.6-7.1,13.2-12.6,22.7-16.4s19.8-5.7,30.8-5.7c10.2,0,19.4,1.3,27.8,4 c8.4,2.7,15.7,6.6,21.9,11.8c6.2,5.2,11.2,11.6,14.8,19.2l-29.6,13.3c-3.6-7.2-8.5-12.2-14.6-15.1s-12.8-4.3-20-4.3 c-8.1,0-14.8,1.6-20.2,4.9c-5.4,3.3-8.1,7.6-8.1,12.9c0,5.5,2.4,9.9,7.2,13c4.8,3.2,10.6,5.7,17.6,7.6l23.5,5.7 c16.1,4,28.2,10.1,36.2,18.3c8,8.2,12.1,18.1,12.1,29.7c0,10.4-3,19.4-8.9,27.2c-5.9,7.7-13.9,13.7-24,17.8 C1444.4,325.9,1433.2,327.9,1420.9,327.9z" />
		<path d="M1543.3,136.9c-6.4,0-11.8-2.3-16.4-6.8c-4.6-4.6-6.8-10-6.8-16.4c0-6.6,2.3-12,6.8-16.4 c4.6-4.3,10-6.5,16.4-6.5c6.6,0,12.1,2.2,16.5,6.5s6.7,9.8,6.7,16.4c0,6.4-2.2,11.8-6.7,16.4 C1555.4,134.7,1549.9,136.9,1543.3,136.9z M1526.1,322.9V160.8h34.3v162.1H1526.1z" />
		<path d="M1682.8,396.6c-14.2,0-26.4-2.3-36.7-6.8c-10.3-4.6-18.6-10.4-24.9-17.5c-6.4-7.1-10.9-14.4-13.7-21.8 l31.8-13.3c3.4,8.5,8.8,15.4,16.4,20.8c7.5,5.4,16.6,8.1,27.2,8.1c15,0,26.8-4.4,35.3-13.3s12.7-21.5,12.7-37.8v-15.6h-2 c-5.1,7.4-12.1,13.5-21,18.1c-8.9,4.7-19.2,7-30.8,7c-13.8,0-26.4-3.5-38-10.5c-11.5-7-20.8-16.8-27.6-29.4 c-6.9-12.6-10.3-27.4-10.3-44.3c0-17.2,3.4-32,10.3-44.7c6.9-12.6,16.1-22.4,27.6-29.4s24.2-10.5,38-10.5 c11.6,0,21.9,2.3,30.8,6.8c8.9,4.6,15.9,10.8,21,18.6h1.9v-20.3h32.7v153.5c0,17.6-3.4,32.5-10.3,44.8s-16.4,21.6-28.4,28 C1712.7,393.4,1698.7,396.6,1682.8,396.6z M1683.1,293.3c8.5,0,16.4-2.1,23.7-6.2s13.1-10.2,17.5-18.1c4.3-7.9,6.5-17.5,6.5-28.8 c0-11.9-2.2-21.7-6.5-29.6c-4.3-7.8-10.2-13.8-17.5-17.8c-7.3-4-15.2-6-23.7-6s-16.4,2-23.7,6c-7.3,4-13.2,10-17.6,18 c-4.4,7.9-6.7,17.7-6.7,29.4c0,11.4,2.2,21.1,6.7,29.1c4.4,7.9,10.3,13.9,17.6,18C1666.7,291.3,1674.6,293.3,1683.1,293.3z" />
		<path d="M1812.5,322.9V160.8h32.4V183h1.9c4.7-7.8,11.6-14.4,20.8-19.5c9.2-5.2,19.3-7.8,30.3-7.8 c19.9,0,34.8,5.9,44.8,17.6c10,11.8,14.9,27.5,14.9,47.2v102.3h-34v-97.9c0-13.1-3.3-22.7-9.9-28.8c-6.6-6-15.2-9.1-25.7-9.1 c-8.3,0-15.5,2.3-21.6,6.8c-6.1,4.6-11,10.5-14.5,18c-3.5,7.4-5.2,15.4-5.2,23.8v87.1h-34.2V322.9z" />
		<path d="M22.8,193.8c33.9,20.9,110.3,22.8,147.4,2.8c1.9-1,3.8-1.9,5.7-2.8c1.8-0.8,3.5-1.6,5.3-2.5 c0.3,0.8,0.5,1.6,0.8,2.5c0.3,0.8,0.6,1.7,0.8,2.5C143,260.6,85.1,256,22.6,234.9c0,52.1,0,103.1,0,156.2 c41.9,3.9,81.9,1.8,120.3-14.5c40.9-17.5,66.6-48,76.8-91.7c6.4-27.3,6.8-54.9,1.9-82.3c-2.9-16.3-8-32.3-12.6-49.9 c-0.1,0.1-0.3,0.2-0.4,0.3c-7.8,5.8-12.9,10.4-18.7,13.7c-13.5,7.7-32,5.6-42.5-4.2c-9.8-9.1-13.3-24.9-8.3-37.6 c5.4-13.8,18.9-22.2,35.4-21.7c14.4,0.4,26.5,6.7,34.1,18c0.4,0.5,0.7,1.1,1.1,1.6c11,18.1,21.2,37.1,29,56.9 c12.7,32.2,22.6,65.4,34.6,97.9c11.3,30.7,25.8,59.7,47.9,84.3c46,51.3,121.5,41.9,156.8,13.9c44.9-35.7,56.5-104.8,25.4-155.6 c-3.3-5.4-7.1-10.4-11.3-15c-33.6-36.9-92.8-47.3-139.8-21.8c-3.5,1.9-7,3.6-10.5,5.4c-1.7-1.9-1.5-1.7-3.2-3.5 c39.6-65.6,98-61.1,160.5-40.2c0,0,0,0,0.1-0.1c-8.3-54.2-55.2-95.8-111.8-95.8c-9.5,0-18.6,1.2-27.4,3.4 c-36,9-61.5,41.4-62.7,78.5c-0.4,13.1,0.5,26.4,2.3,39.7c2.6,18.8,8.4,37.1,12.9,56.2c10.4-6.5,17.5-12.6,25.6-15.6 c14-5.3,27.8-3,38.3,8.6c9.6,10.7,11.7,23.5,5.8,36.8c-3.6,8.2-9.1,13.5-15.9,16.6c-4.9,2.2-10.5,3.3-16.6,3.5 c-15.1,0.4-27.5-5.9-36.1-17.7c-7.8-10.7-15.6-22.1-20.4-34.4c-0.1-0.2-0.1-0.3-0.2-0.5c-6.2-16-12.1-32.1-17.8-48.3 c-6.4-18-12.6-36-19-54c-11.5-32.3-24.2-64-45.1-91.6l-4.9-6.1H22.9v169.5H22.8z" />
	</>
);

// Full wordmark: icon + "sdesign" lettering.
// Intrinsic width/height give the SVG an aspect ratio so `w-auto` doesn't
// collapse to zero width inside flex containers (e.g. the sidebar header).
export const Logo = (props: React.ComponentProps<"svg">) => (
	<svg
		fill="currentColor"
		height="24"
		viewBox="0 0 1980.3 422.9"
		width="113"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<LogoPaths />
	</svg>
);

// Icon-only mark (cropped to the swirl), for the collapsed sidebar and favicons.
export const LogoIcon = (props: React.ComponentProps<"svg">) => (
	<svg
		fill="currentColor"
		height="24"
		viewBox="0 0 290 422.9"
		width="16"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<LogoPaths />
	</svg>
);
```

### `components/indicator.tsx`

```tsx
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

const statusIndicatorVariants = cva(
	[
		"relative flex size-2 shrink-0 items-center justify-center rounded-full",
		"*:rounded-full *:bg-current",
		"[&_[data-slot=indicator-dot]]:size-[75%]",
		"[&_[data-slot=indicator-ping]]:absolute [&_[data-slot=indicator-ping]]:size-full",
	],
	{
		variants: {
			color: {
				emerald: "text-emerald-500",
				rose: "text-rose-500",
				amber: "text-amber-500",
				sky: "text-sky-500",
			},
			pulse: {
				true: "[&_[data-slot=indicator-ping]]:animate-ping",
				false: "[&_[data-slot=indicator-ping]]:hidden",
			},
		},
		defaultVariants: {
			color: "emerald",
			pulse: true,
		},
	}
);

export type StatusIndicatorProps = ComponentProps<"span"> &
	VariantProps<typeof statusIndicatorVariants>;

export function StatusIndicator({
	className,
	color,
	pulse,
	...props
}: StatusIndicatorProps) {
	return (
		<span
			className={cn(statusIndicatorVariants({ color, pulse }), className)}
			{...props}
		>
			<span aria-hidden data-slot="indicator-ping" />
			<span aria-hidden data-slot="indicator-dot" />
		</span>
	);
}
```

### `components/delta.tsx`

```tsx
"use client";
import { cn } from "@/lib/utils";
import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { MinusIcon, TrendingUpIcon, ArrowUpIcon, ChevronUpIcon, TrendingDownIcon, ArrowDownIcon, ChevronDownIcon } from "@/components/icons";

type DeltaIconVariant = "default" | "trend" | "arrow";
type DeltaVariant = "default" | "badge";

type DeltaContextValue = {
	value: number;
};

const DeltaContext = React.createContext<DeltaContextValue | null>(null);

function useDeltaValue() {
	const context = React.useContext(DeltaContext);

	if (!context) {
		throw new Error(
			"DeltaIcon and DeltaValue must be used inside a `Delta` component."
		);
	}

	return context.value;
}

function Delta({
	className,
	value,
	variant = "default",
	...props
}: React.ComponentProps<"div"> & {
	value: number;
	variant?: DeltaVariant;
}) {
	return (
		<DeltaContext.Provider value={{ value }}>
			{variant === "badge" ? (
				<Badge
					className={cn(
						"gap-1 border-none tabular-nums [&_svg]:size-4 [&_svg]:shrink-0",
						value > 0
							? "bg-emerald-500/10 text-emerald-500"
							: "bg-red-500/10 text-red-500",
						className
					)}
					data-slot="delta"
					variant="secondary"
					{...(props as React.ComponentProps<typeof Badge>)}
				/>
			) : (
				<div
					className={cn(
						"inline-flex items-center gap-1 text-muted-foreground tabular-nums",
						"[&_svg]:size-3 [&_svg]:shrink-0",
						value > 0 ? "text-emerald-600 dark:text-emerald-400" : "",
						value < 0 ? "text-rose-600 dark:text-rose-400" : "",
						className
					)}
					data-slot="delta"
					{...props}
				/>
			)}
		</DeltaContext.Provider>
	);
}

function FilledShell({
	value,
	children,
}: {
	value: number;
	children: React.ReactNode;
}) {
	return (
		<span
			className={cn(
				"inline-flex size-3 shrink-0 items-center justify-center rounded-full",
				"[&_svg]:size-2! [&_svg]:shrink-0 [&_svg]:stroke-3! [&_svg]:text-background",
				value > 0 && "bg-emerald-500",
				value < 0 && "bg-red-500",
				(!value || value === 0) && "bg-muted-foreground"
			)}
			data-slot="delta-icon"
		>
			{children}
		</span>
	);
}

function DeltaIcon({
	variant = "default",
	filled = false,
	className,
	...props
}: Omit<React.ComponentProps<"svg">, "fill"> & {
	variant?: DeltaIconVariant;
	filled?: boolean;
}) {
	const resolvedValue = useDeltaValue();

	const mergedClassName = cn(className);

	const shell = (node: React.ReactElement) =>
		filled ? <FilledShell value={resolvedValue}>{node}</FilledShell> : node;

	const slotProps = filled ? {} : { "data-slot": "delta-icon" as const };

	if (!resolvedValue || resolvedValue === 0) {
		return shell(
			<MinusIcon {...slotProps} className={mergedClassName} {...props} />
		);
	}

	if (resolvedValue > 0) {
		if (variant === "trend") {
			return shell(
				<TrendingUpIcon {...slotProps} className={mergedClassName} {...props} />
			);
		}

		if (variant === "arrow") {
			return shell(
				<ArrowUpIcon {...slotProps} className={mergedClassName} {...props} />
			);
		}

		return shell(
			<ChevronUpIcon {...slotProps} className={mergedClassName} {...props} />
		);
	}

	if (variant === "trend") {
		return shell(
			<TrendingDownIcon {...slotProps} className={mergedClassName} {...props} />
		);
	}

	if (variant === "arrow") {
		return shell(
			<ArrowDownIcon {...slotProps} className={mergedClassName} {...props} />
		);
	}

	return shell(
		<ChevronDownIcon {...slotProps} className={mergedClassName} {...props} />
	);
}

function DeltaValue({
	className,
	precision = 1,
	suffix = "%",
	absolute = true,
	...props
}: React.ComponentProps<"span"> & {
	precision?: number;
	suffix?: string;
	absolute?: boolean;
}) {
	const resolvedValue = useDeltaValue();

	const formattedValue = (
		absolute ? Math.abs(resolvedValue) : resolvedValue
	).toFixed(precision);

	return (
		<span
			className={cn("tabular-nums", className)}
			data-slot="delta-value"
			{...props}
		>
			{formattedValue}
			{suffix}
		</span>
	);
}
export { Delta, DeltaIcon, DeltaValue };
```

### `components/dashboard-skeleton.tsx`

```tsx
import { cn } from "@/lib/utils";

export function DashboardSkeleton() {
	return (
		<div className="flex flex-1 flex-col gap-4">
			<div
				className={cn(
					"grid grid-cols-2 gap-4 lg:grid-cols-4",
					"*:min-h-48 *:w-full *:bg-muted *:dark:bg-muted/50"
				)}
			>
				<div className="rounded-lg" />
				<div className="rounded-lg" />
				<div className="rounded-lg" />
				<div className="rounded-lg" />
				<div className="rounded-lg col-span-2 min-h-114! lg:col-span-4" />
				<div className="rounded-lg col-span-2 min-h-92! lg:col-span-2" />
				<div className="rounded-lg col-span-2 min-h-92! lg:col-span-2" />
			</div>
		</div>
	);
}
```

### `components/client-only.tsx`

```tsx
"use client";

import * as React from "react";

/**
 * Renders children only after the component has mounted on the client.
 * The app tree is therefore never server-rendered/hydrated, which avoids
 * hydration mismatches caused by browser extensions that mutate the DOM
 * before React hydrates. The (anchor-free) fallback is what gets SSR'd.
 */
export function ClientOnly({
  children,
  fallback = null,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return <>{mounted ? children : fallback}</>;
}
```

### `components/app-shared.tsx`

```tsx
import type { ReactNode } from "react";
import {
	ActivityIcon,
	BarChart3Icon,
	CommandIcon,
	CreditCardIcon,
	GraduationCapIcon,
	HelpCircleIcon,
	LayersIcon,
	LayoutGridIcon,
	LifeBuoyIcon,
	ListChecksIcon,
	MessageSquareTextIcon,
	PlugIcon,
	SettingsIcon,
	ShieldCheckIcon,
	UsersIcon,
	UsersRoundIcon,
	WandIcon,
} from "@/components/icons";

export type SidebarNavItem = {
	title: string;
	path?: string;
	icon?: ReactNode;
	isActive?: boolean;
	subItems?: SidebarNavItem[];
};

export type SidebarNavGroup = {
	label?: string;
	items: SidebarNavItem[];
};

export const navGroups: SidebarNavGroup[] = [
	{
		items: [
			{ title: "Overview", path: "#/overview", icon: <LayoutGridIcon />, isActive: true },
		],
	},
	{
		label: "Today",
		items: [
			{ title: "Campaigns", path: "#/campaigns", icon: <ListChecksIcon /> },
			{ title: "Analytics", path: "#/analytics", icon: <BarChart3Icon /> },
			{ title: "Reports", path: "#/reports", icon: <LayersIcon /> },
		],
	},
	{
		label: "Ads",
		items: [
			{
				title: "Ad sets",
				icon: <MessageSquareTextIcon />,
				subItems: [
					{ title: "Running", path: "#/adsets/running" },
					{ title: "Paused", path: "#/adsets/paused" },
					{ title: "In review", path: "#/adsets/review" },
					{ title: "Completed", path: "#/adsets/completed" },
				],
			},
			{ title: "Audiences", path: "#/audiences", icon: <UsersIcon /> },
			{ title: "Creatives", path: "#/creatives", icon: <WandIcon /> },
			{ title: "Platforms", path: "#/platforms", icon: <PlugIcon /> },
		],
	},
	{
		label: "Insights",
		items: [
			{ title: "Conversions", path: "#/conversions", icon: <ActivityIcon /> },
			{ title: "Attribution", path: "#/attribution", icon: <ShieldCheckIcon /> },
			{ title: "Budget pacing", path: "#/budget", icon: <CreditCardIcon /> },
		],
	},
	{
		label: "Organization",
		items: [
			{
				title: "Workspace",
				icon: <SettingsIcon />,
				subItems: [
					{ title: "Branding", path: "#/workspace/branding" },
					{ title: "Team & roles", path: "#/workspace/team" },
					{ title: "API keys", path: "#/workspace/api-keys" },
					{ title: "Webhooks", path: "#/workspace/webhooks" },
					{ title: "Billing", path: "#/workspace/billing" },
				],
			},
			{ title: "Members", path: "#/members", icon: <UsersRoundIcon /> },
			{ title: "Integrations", path: "#/integrations", icon: <CommandIcon /> },
		],
	},
];

export const footerNavLinks: SidebarNavItem[] = [
	{ title: "Help Center", path: "#/help", icon: <LifeBuoyIcon /> },
	{ title: "Learn", path: "#/learn", icon: <GraduationCapIcon /> },
	{ title: "System status", path: "#/status", icon: <ActivityIcon /> },
];

export const navLinks: SidebarNavItem[] = [
	...navGroups.flatMap((group) =>
		group.items.flatMap((item) =>
			item.subItems?.length ? [item, ...item.subItems] : [item]
		)
	),
	...footerNavLinks,
];
```

### `components/app-breadcrumbs.tsx`

```tsx
import type { ReactNode } from "react";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbPage,
} from "@/components/ui/breadcrumb";

/** Current page segment shown in the header — pass a nav item or `{ title, icon? }`. */
export type AppBreadcrumbPage = {
	title: string;
	icon?: ReactNode;
};

export function AppBreadcrumbs({ page }: { page?: AppBreadcrumbPage | null }) {
	if (!page?.title) {
		return null;
	}

	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbPage className="flex items-center gap-2 [&>svg]:size-3.5">
						{page.icon}
						{page.title}
					</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
}
```

### `components/nav-group.tsx`

```tsx
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import type { SidebarNavGroup } from "@/components/app-shared";
import { ChevronRightIcon } from "@/components/icons";

/**
 * Nav items render as <button> (not <a>) on purpose: the links are placeholder
 * hashes, and rendering them as anchors made them targets for a DOM-mutating
 * browser extension (which stripped them, leaving empty rows). Buttons are safe
 * and keep all hover/active styling.
 */
export function NavGroup({ label, items }: SidebarNavGroup) {
	return (
		<SidebarGroup>
			{label && <SidebarGroupLabel>{label}</SidebarGroupLabel>}
			<SidebarMenu>
				{items.map((item) =>
					item.subItems?.length ? (
						<Collapsible
							asChild
							className="group/collapsible"
							defaultOpen={
								!!item.isActive || item.subItems.some((i) => !!i.isActive)
							}
							key={item.title}
						>
							<SidebarMenuItem>
								<CollapsibleTrigger asChild>
									<SidebarMenuButton isActive={item.isActive} tooltip={item.title}>
										{item.icon}
										<span>{item.title}</span>
										<ChevronRightIcon className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
									</SidebarMenuButton>
								</CollapsibleTrigger>
								<CollapsibleContent>
									<SidebarMenuSub>
										{item.subItems.map((subItem) => (
											<SidebarMenuSubItem key={subItem.title}>
												<SidebarMenuSubButton asChild isActive={subItem.isActive}>
													<button className="w-full text-left" type="button">
														{subItem.icon}
														<span>{subItem.title}</span>
													</button>
												</SidebarMenuSubButton>
											</SidebarMenuSubItem>
										))}
									</SidebarMenuSub>
								</CollapsibleContent>
							</SidebarMenuItem>
						</Collapsible>
					) : (
						<SidebarMenuItem key={item.title}>
							<SidebarMenuButton isActive={item.isActive} tooltip={item.title}>
								{item.icon}
								<span>{item.title}</span>
							</SidebarMenuButton>
						</SidebarMenuItem>
					)
				)}
			</SidebarMenu>
		</SidebarGroup>
	);
}
```

### `components/nav-user.tsx`

```tsx
"use client";

import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserIcon, BellIcon, CommandIcon, LifeBuoyIcon, GraduationCapIcon, CreditCardIcon, LogOutIcon } from "@/components/icons";

const user = {
	name: "Huy Nguyen",
	email: "hello@example.com",
	avatar: "https://i.pravatar.cc/160?img=12",
};

export function NavUser() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Avatar className="size-8">
					<AvatarImage src={user.avatar} />
					<AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-60">
				<DropdownMenuItem className="flex items-center justify-start gap-2">
					<DropdownMenuLabel className="flex items-center gap-3">
						<Avatar className="size-10">
							<AvatarImage src={user.avatar} />
							<AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
						</Avatar>
						<div>
							<span className="font-medium text-foreground">{user.name}</span>{" "}
							<br />
							<div className="max-w-full overflow-hidden overflow-ellipsis whitespace-nowrap text-muted-foreground text-xs">
								{user.email}
							</div>
						</div>
					</DropdownMenuLabel>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<UserIcon
						/>
						Profile
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<BellIcon
						/>
						Notifications
					</DropdownMenuItem>
					<DropdownMenuItem>
						<CommandIcon
						/>
						Keyboard shortcuts
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<LifeBuoyIcon
						/>
						Help center
					</DropdownMenuItem>
					<DropdownMenuItem>
						<GraduationCapIcon
						/>
						Agent training
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<CreditCardIcon
						/>
						Subscription
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem
						className="w-full cursor-pointer"
						variant="destructive"
					>
						<LogOutIcon
						/>
						Log out
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
```

### `components/custom-sidebar-trigger.tsx`

```tsx
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";

export function CustomSidebarTrigger() {
	return (
		<Tooltip delayDuration={1000}>
			<TooltipTrigger asChild>
				<SidebarTrigger />
			</TooltipTrigger>
			<TooltipContent className="px-2 py-1" side="right">
				Toggle Sidebar{" "}
				<KbdGroup>
					<Kbd>⌘</Kbd>
					<Kbd>b</Kbd>
				</KbdGroup>
			</TooltipContent>
		</Tooltip>
	);
}
```

### `components/app-sidebar.tsx`

```tsx
import { Logo, LogoIcon } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavGroup } from "@/components/nav-group";
import { footerNavLinks, navGroups } from "@/components/app-shared";
import { PlusIcon, SearchIcon } from "@/components/icons";

export function AppSidebar() {
	return (
		<Sidebar collapsible="icon" variant="inset">
			<SidebarHeader className="h-14 justify-center">
				<div
					aria-label="Dashboard 003"
					className="flex items-center gap-2 rounded-md px-2 py-1.5 text-foreground group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0"
				>
					<LogoIcon className="hidden size-6 shrink-0 group-data-[collapsible=icon]:block" />
					<Logo className="h-5 w-auto shrink-0 group-data-[collapsible=icon]:hidden" />
					<span className="sr-only">Dashboard 003</span>
				</div>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarMenuItem className="flex items-center gap-2">
						<SidebarMenuButton
							className="min-w-8 bg-primary text-primary-foreground duration-200 ease-linear hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground"
							tooltip="Quick Create"
						>
							<PlusIcon
							/>
							<span>New campaign</span>
						</SidebarMenuButton>
						<Button
							aria-label="Search campaigns"
							className="size-8 group-data-[collapsible=icon]:opacity-0"
							size="icon"
							variant="outline"
						>
							<SearchIcon
							/>
							<span className="sr-only">Search campaigns</span>
						</Button>
					</SidebarMenuItem>
				</SidebarGroup>
				{navGroups.map((group, index) => (
					<NavGroup key={`sidebar-group-${index}`} {...group} />
				))}
			</SidebarContent>
			<SidebarFooter>
				<SidebarMenu className="mt-2">
					{footerNavLinks.map((item) => (
						<SidebarMenuItem key={item.title}>
							<SidebarMenuButton
								className="text-muted-foreground"
								isActive={item.isActive}
								size="sm"
								tooltip={item.title}
							>
								{item.icon}
								<span>{item.title}</span>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	);
}
```

### `components/app-header.tsx`

```tsx
"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { AppBreadcrumbs } from "@/components/app-breadcrumbs";
import { CustomSidebarTrigger } from "@/components/custom-sidebar-trigger";
import { navLinks } from "@/components/app-shared";
import { NavUser } from "@/components/nav-user";
import { SendIcon, BellIcon } from "@/components/icons";

const activeItem = navLinks.find((item) => item.isActive);

export function AppHeader() {
	return (
		<header
			className={cn(
				"sticky top-0 z-50 flex h-14 shrink-0 items-center justify-between gap-2 border-b px-4 md:px-6"
			)}
		>
			<div className="flex items-center gap-3">
				<CustomSidebarTrigger />
				<Separator
					className="mr-2 h-4 data-[orientation=vertical]:self-center"
					orientation="vertical"
				/>
				<AppBreadcrumbs page={activeItem} />
			</div>
			<div className="flex items-center gap-3">
				<Button size="icon-sm" variant="outline">
					<SendIcon
					/>
				</Button>
				<Button aria-label="Notifications" size="icon-sm" variant="outline">
					<BellIcon
					/>
				</Button>
				<Separator
					className="h-4 data-[orientation=vertical]:self-center"
					orientation="vertical"
				/>
				<NavUser />
			</div>
		</header>
	);
}
```

### `components/app-shell.tsx`

```tsx
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppHeader } from "@/components/app-header";
import { AppSidebar } from "@/components/app-sidebar";

export function AppShell({ children }: { children: React.ReactNode }) {
	return (
		<div className="overflow-hidden">
			<SidebarProvider className="relative h-svh">
				<AppSidebar />
				<SidebarInset className="md:peer-data-[variant=inset]:ml-0">
					<AppHeader />
					<div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4 md:p-6">
						{children}
					</div>
				</SidebarInset>
			</SidebarProvider>
		</div>
	);
}
```

### `components/stats.tsx`

```tsx
import { cn } from "@/lib/utils";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Delta, DeltaIcon, DeltaValue } from "@/components/delta";

type Stat = {
	label: string;
	value: string;
	delta: number;
	footnote: string;
	/** When true, a negative delta is treated as favorable (e.g. queue depth, reply time). */
	lowerIsBetter: boolean;
};

const stats: readonly Stat[] = [
	{
		label: "CPC",
		value: "$0.42",
		delta: -6.3,
		footnote: "vs last week",
		lowerIsBetter: true,
	},
	{
		label: "CPM",
		value: "$8.10",
		delta: -3.2,
		footnote: "vs last week",
		lowerIsBetter: true,
	},
	{
		label: "CPA",
		value: "$24.80",
		delta: -11.5,
		footnote: "vs last week",
		lowerIsBetter: true,
	},
	{
		label: "ROAS",
		value: "4.7×",
		delta: 9.4,
		footnote: "vs last week",
		lowerIsBetter: false,
	},
];

export function DashboardStats() {
	return (
		<>
			{stats.map((s) => (
				<Card className={cn("shadow-none dark:ring-0")} key={s.label}>
					<CardHeader>
						<CardTitle className="font-mono font-normal text-[11px] text-muted-foreground uppercase tracking-wider">
							{s.label}
						</CardTitle>
					</CardHeader>
					<CardContent className="flex flex-col gap-2">
						<p className="font-semibold text-3xl tabular-nums tracking-tight">
							{s.value}
						</p>
						<div className="flex items-center gap-1 text-xs">
							<Delta value={s.delta}>
								<DeltaIcon variant="arrow" />
								<DeltaValue />
							</Delta>
							<span className="text-muted-foreground">{s.footnote}</span>
						</div>
					</CardContent>
				</Card>
			))}
		</>
	);
}
```

### `components/conversation-volume-chart.tsx`

```tsx
"use client";

import { cn } from "@/lib/utils";
import { type ComponentProps, useId, useMemo, useState } from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
	formatChartAxisTick,
	formatChartTooltipDate,
	parseIsoCalendarDate,
} from "@/components/formater";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Delta, DeltaIcon, DeltaValue } from "@/components/delta";

type PeriodDays = 7 | 30 | 60;

type VolumeRow = {
	date: string;
	conversations: number;
};

/**
 * Demo data.
 */
const chartData: VolumeRow[] = [
	{ date: "2026-02-18", conversations: 162 },
	{ date: "2026-02-19", conversations: 162 },
	{ date: "2026-02-20", conversations: 162 },
	{ date: "2026-02-21", conversations: 162 },
	{ date: "2026-02-22", conversations: 162 },
	{ date: "2026-02-23", conversations: 162 },
	{ date: "2026-02-24", conversations: 161 },
	{ date: "2026-02-25", conversations: 161 },
	{ date: "2026-02-26", conversations: 160 },
	{ date: "2026-02-27", conversations: 160 },
	{ date: "2026-02-28", conversations: 159 },
	{ date: "2026-03-01", conversations: 158 },
	{ date: "2026-03-02", conversations: 158 },
	{ date: "2026-03-03", conversations: 157 },
	{ date: "2026-03-04", conversations: 157 },
	{ date: "2026-03-05", conversations: 157 },
	{ date: "2026-03-06", conversations: 157 },
	{ date: "2026-03-07", conversations: 157 },
	{ date: "2026-03-08", conversations: 157 },
	{ date: "2026-03-09", conversations: 157 },
	{ date: "2026-03-10", conversations: 157 },
	{ date: "2026-03-11", conversations: 157 },
	{ date: "2026-03-12", conversations: 157 },
	{ date: "2026-03-13", conversations: 157 },
	{ date: "2026-03-14", conversations: 156 },
	{ date: "2026-03-15", conversations: 156 },
	{ date: "2026-03-16", conversations: 155 },
	{ date: "2026-03-17", conversations: 155 },
	{ date: "2026-03-18", conversations: 154 },
	{ date: "2026-03-19", conversations: 153 },
	{ date: "2026-03-20", conversations: 152 },
	{ date: "2026-03-21", conversations: 151 },
	{ date: "2026-03-22", conversations: 150 },
	{ date: "2026-03-23", conversations: 149 },
	{ date: "2026-03-24", conversations: 149 },
	{ date: "2026-03-25", conversations: 150 },
	{ date: "2026-03-26", conversations: 147 },
	{ date: "2026-03-27", conversations: 151 },
	{ date: "2026-03-28", conversations: 147 },
	{ date: "2026-03-29", conversations: 145 },
	{ date: "2026-03-30", conversations: 143 },
	{ date: "2026-03-31", conversations: 141 },
	{ date: "2026-04-01", conversations: 139 },
	{ date: "2026-04-02", conversations: 137 },
	{ date: "2026-04-03", conversations: 137 },
	{ date: "2026-04-04", conversations: 137 },
	{ date: "2026-04-05", conversations: 137 },
	{ date: "2026-04-06", conversations: 137 },
	{ date: "2026-04-07", conversations: 137 },
	{ date: "2026-04-08", conversations: 136 },
	{ date: "2026-04-09", conversations: 134 },
	{ date: "2026-04-10", conversations: 132 },
	{ date: "2026-04-11", conversations: 129 },
	{ date: "2026-04-12", conversations: 127 },
	{ date: "2026-04-13", conversations: 125 },
	{ date: "2026-04-14", conversations: 124 },
	{ date: "2026-04-15", conversations: 124 },
	{ date: "2026-04-16", conversations: 124 },
	{ date: "2026-04-17", conversations: 124 },
	{ date: "2026-04-18", conversations: 124 },
	{ date: "2026-04-19", conversations: 124 },
	{ date: "2026-04-20", conversations: 122 },
	{ date: "2026-04-21", conversations: 120 },
	{ date: "2026-04-22", conversations: 118 },
	{ date: "2026-04-23", conversations: 115 },
	{ date: "2026-04-24", conversations: 113 },
	{ date: "2026-04-25", conversations: 112 },
	{ date: "2026-04-26", conversations: 111 },
	{ date: "2026-04-27", conversations: 114 },
	{ date: "2026-04-28", conversations: 110 },
	{ date: "2026-04-29", conversations: 113 },
	{ date: "2026-04-30", conversations: 111 },
	{ date: "2026-05-01", conversations: 111 },
	{ date: "2026-05-02", conversations: 107 },
	{ date: "2026-05-03", conversations: 109 },
	{ date: "2026-05-04", conversations: 105 },
	{ date: "2026-05-05", conversations: 103 },
	{ date: "2026-05-06", conversations: 101 },
	{ date: "2026-05-07", conversations: 98 },
	{ date: "2026-05-08", conversations: 100 },
	{ date: "2026-05-09", conversations: 97 },
	{ date: "2026-05-10", conversations: 101 },
	{ date: "2026-05-11", conversations: 99 },
	{ date: "2026-05-12", conversations: 100 },
	{ date: "2026-05-13", conversations: 94 },
	{ date: "2026-05-14", conversations: 102 },
	{ date: "2026-05-15", conversations: 99 },
	{ date: "2026-05-16", conversations: 107 },
	{ date: "2026-05-17", conversations: 104 },
	{ date: "2026-05-18", conversations: 118 },
	{ date: "2026-05-19", conversations: 127 },
];

const lastChartRow = chartData.at(-1);
if (lastChartRow === undefined) {
	throw new Error(
		"ConversationVolumeChart: chartData must include at least one row"
	);
}
const volumeChartReferenceDate = parseIsoCalendarDate(lastChartRow.date);

const chartConfig = {
	conversations: {
		label: "Spend ($)",
		color: "var(--chart-2)",
	},
} satisfies ChartConfig;

export function ConversationVolumeChart({
	className,
	...props
}: ComponentProps<typeof Card>) {
	const chartUid = useId().replace(/:/g, "");
	const idAreaGradient = `conversation-volume-area-grad-${chartUid}`;

	const [periodDays, setPeriodDays] = useState<PeriodDays>(30);

	const chartRows = useMemo(() => {
		const startDate = new Date(volumeChartReferenceDate);
		startDate.setDate(startDate.getDate() - periodDays);
		return chartData.filter(
			(item) => parseIsoCalendarDate(item.date) >= startDate
		);
	}, [periodDays]);

	const growthPctNum = useMemo(() => {
		const first = chartRows[0];
		if (!first) {
			return 0;
		}
		const last = chartRows.at(-1);
		if (!last) {
			return 0;
		}
		const a = first.conversations;
		const b = last.conversations;
		if (!a) {
			return 0;
		}
		return ((b - a) / a) * 100;
	}, [chartRows]);

	let xAxisMinTickGap: number | undefined;
	if (periodDays <= 7) {
		xAxisMinTickGap = undefined;
	} else if (periodDays >= 60) {
		xAxisMinTickGap = 20;
	} else {
		xAxisMinTickGap = 28;
	}

	return (
		<Card
			className={cn(
				"shadow-none md:col-span-2 lg:col-span-3 dark:ring-0",
				className
			)}
			{...props}
		>
			<CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
				<div className="min-w-0 space-y-2">
					<div className="flex flex-wrap items-center gap-2">
						<CardTitle>Ad spend</CardTitle>
						<Delta value={growthPctNum} variant="badge">
							<DeltaIcon variant="trend" />
							<DeltaValue />
						</Delta>
					</div>
					<CardDescription>
						Daily ad spend for the selected window ($).
					</CardDescription>
				</div>
				<Select
					onValueChange={(v) => {
						const n = Number(v);
						setPeriodDays(n as PeriodDays);
					}}
					value={String(periodDays)}
				>
					<SelectTrigger
						aria-label="Ad spend time range"
						className="w-full min-w-36 sm:w-fit"
						size="sm"
					>
						<SelectValue placeholder="Range" />
					</SelectTrigger>
					<SelectContent align="end">
						<SelectItem value="7">Last 7 days</SelectItem>
						<SelectItem value="30">Last 30 days</SelectItem>
						<SelectItem value="60">Last 60 days</SelectItem>
					</SelectContent>
				</Select>
			</CardHeader>
			<CardContent>
				<ChartContainer className="aspect-22/8 w-full" config={chartConfig}>
					<AreaChart
						accessibilityLayer
						data={chartRows}
						margin={{ left: 4, right: 8, top: 8, bottom: 0 }}
					>
						<defs>
							<linearGradient id={idAreaGradient} x1="0" x2="0" y1="0" y2="1">
								<stop
									offset="0%"
									stopColor="var(--color-conversations)"
									stopOpacity={0.45}
								/>
								<stop
									offset="55%"
									stopColor="var(--color-conversations)"
									stopOpacity={0.12}
								/>
								<stop
									offset="100%"
									stopColor="var(--color-conversations)"
									stopOpacity={0}
								/>
							</linearGradient>
						</defs>
						<CartesianGrid className="stroke-border" vertical={false} />
						<XAxis
							axisLine={false}
							dataKey="date"
							interval={periodDays <= 7 ? 0 : "preserveStartEnd"}
							minTickGap={xAxisMinTickGap}
							tickFormatter={(value) =>
								formatChartAxisTick(String(value), periodDays)
							}
							tickLine={false}
							tickMargin={8}
						/>
						<YAxis
							axisLine={false}
							tick={{ className: "tabular-nums" }}
							tickFormatter={(value) => `$${value}`}
							tickLine={false}
							tickMargin={8}
							width={44}
						/>
						<ChartTooltip
							content={
								<ChartTooltipContent
									className="min-w-34"
									indicator="line"
									labelFormatter={(_, payload) => {
										const row = payload?.[0]?.payload as VolumeRow | undefined;
										if (!row?.date) {
											return "";
										}
										return formatChartTooltipDate(row.date, "long");
									}}
								/>
							}
							cursor={false}
						/>
						<Area
							dataKey="conversations"
							dot={false}
							fill={`url(#${idAreaGradient})`}
							stroke="var(--color-conversations)"
							strokeWidth={2}
							type="natural"
						/>
					</AreaChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
```

### `components/channel-breakdown-chart.tsx`

```tsx
"use client";

import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";
import { LabelList, Pie, PieChart } from "recharts";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	type ChartConfig,
	ChartContainer,
	ChartLegend,
	ChartLegendContent,
} from "@/components/ui/chart";
import { Delta, DeltaIcon, DeltaValue } from "@/components/delta";

type ChannelKey = "direct" | "email" | "social";

type ChannelDatum = {
	channel: ChannelKey;
	share: number;
	fill: string;
};

const chartData: ChannelDatum[] = [
	{ channel: "direct", share: 44, fill: "var(--color-direct)" },
	{ channel: "email", share: 36, fill: "var(--color-email)" },
	{ channel: "social", share: 20, fill: "var(--color-social)" },
];

const chartConfig = {
	share: {
		label: "Share",
	},
	direct: {
		label: "Google",
		color: "var(--chart-1)",
	},
	email: {
		label: "Meta",
		color: "var(--chart-3)",
	},
	social: {
		label: "TikTok",
		color: "var(--chart-5)",
	},
} satisfies ChartConfig;

export function ChannelBreakdownChart({
	className,
	...props
}: ComponentProps<typeof Card>) {
	return (
		<Card
			className={cn("flex flex-col shadow-none dark:ring-0", className)}
			{...props}
		>
			<CardHeader className="items-center space-y-1 pb-0 sm:items-start">
				<div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
					<CardTitle>Spend by platform</CardTitle>
					<Delta value={2.4} variant="badge">
						<DeltaIcon variant="trend" />
						<DeltaValue suffix="pp" />
					</Delta>
				</div>
				<CardDescription>
					Share of spend in last 7 days
				</CardDescription>
			</CardHeader>
			<CardContent className="my-auto">
				<ChartContainer
					className="mx-auto aspect-square max-h-72 w-full"
					config={chartConfig}
				>
					<PieChart accessibilityLayer>
						<Pie
							cornerRadius={8}
							data={chartData}
							dataKey="share"
							innerRadius={36}
							nameKey="channel"
							outerRadius="88%"
							stroke="var(--card)"
							strokeWidth={4}
						>
							<LabelList
								className="fill-background font-medium"
								dataKey="share"
								fill="currentColor"
								fontWeight={500}
								formatter={(label) => {
									const n = Number(label);
									return Number.isFinite(n) ? `${n}%` : String(label ?? "");
								}}
								position="inside"
								stroke="none"
							/>
						</Pie>
						<ChartLegend content={<ChartLegendContent nameKey="channel" />} />
					</PieChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
```

### `components/csat-responses-chart.tsx`

```tsx
"use client";

import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";
import { Bar, BarChart, Rectangle, XAxis } from "recharts";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
	{ day: "Apr 8", direct: 11, email: 9, social: 4 },
	{ day: "Apr 9", direct: 15, email: 11, social: 5 },
	{ day: "Apr 10", direct: 13, email: 10, social: 5 },
	{ day: "Apr 11", direct: 16, email: 12, social: 5 },
	{ day: "Apr 12", direct: 12, email: 10, social: 5 },
	{ day: "Apr 13", direct: 14, email: 10, social: 6 },
	{ day: "Apr 14", direct: 11, email: 9, social: 5 },
	{ day: "Apr 15", direct: 16, email: 7, social: 4 },
	{ day: "Apr 16", direct: 13, email: 11, social: 5 },
	{ day: "Apr 17", direct: 15, email: 11, social: 6 },
] as const;

const chartConfig = {
	direct: {
		label: "Google",
		color: "var(--chart-1)",
	},
	email: {
		label: "Meta",
		color: "var(--chart-3)",
	},
	social: {
		label: "TikTok",
		color: "var(--chart-5)",
	},
} satisfies ChartConfig;

/** Half of bar width (8) so ends read as fully rounded “caps”. */
const BAR_RADIUS = 5;

/**
 *  column hover background.
 */
function ColumnHoverCursor(props: React.ComponentProps<typeof Rectangle>) {
	return (
		<Rectangle
			fill="var(--muted)"
			fillOpacity={0.5}
			radius={BAR_RADIUS * 2}
			stroke="none"
			{...props}
		/>
	);
}

export function CsatResponsesChart({
	className,
	...props
}: ComponentProps<typeof Card>) {
	return (
		<Card
			className={cn("shadow-none md:col-span-2 dark:ring-0", className)}
			{...props}
		>
			<CardHeader>
				<CardTitle>Conversions by platform</CardTitle>
				<CardDescription>
					Conversions per day by platform, last 10 days.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer className="aspect-video w-full" config={chartConfig}>
					<BarChart accessibilityLayer data={[...chartData]}>
						<XAxis
							axisLine={false}
							dataKey="day"
							interval={0}
							minTickGap={8}
							tickFormatter={(value) => String(value)}
							tickLine={false}
							tickMargin={10}
						/>
						<ChartTooltip
							content={<ChartTooltipContent hideLabel />}
							cursor={<ColumnHoverCursor />}
						/>
						<Bar
							background={{
								fill: "var(--muted)",
								radius: BAR_RADIUS,
							}}
							barSize={8}
							dataKey="social"
							fill="var(--color-social)"
							overflow="visible"
							radius={[0, 0, BAR_RADIUS, BAR_RADIUS]}
							stackId="csat"
						/>
						<Bar
							barSize={8}
							dataKey="email"
							fill="var(--color-email)"
							overflow="visible"
							radius={0}
							stackId="csat"
						/>
						<Bar
							barSize={8}
							dataKey="direct"
							fill="var(--color-direct)"
							overflow="visible"
							radius={[BAR_RADIUS, BAR_RADIUS, 0, 0]}
							stackId="csat"
						/>
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
```

### `components/first-reply-time-chart.tsx`

```tsx
"use client";

import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import { Delta, DeltaIcon, DeltaValue } from "@/components/delta";

type ReplyRow = {
	day: string;
	minutes: number;
};

const chartRows: ReplyRow[] = [
	{ day: "Mon", minutes: 26.4 },
	{ day: "Tue", minutes: 25.9 },
	{ day: "Wed", minutes: 25.2 },
	{ day: "Thu", minutes: 24.7 },
	{ day: "Fri", minutes: 24.5 },
	{ day: "Sat", minutes: 25.0 },
	{ day: "Sun", minutes: 23.8 },
];

const firstMinutes = chartRows[0]?.minutes ?? 0;
const lastMinutes = chartRows.at(-1)?.minutes ?? firstMinutes;

/** Positive when median first reply faster Mon → Sun. */
const replyImprovementPct =
	firstMinutes > 0 ? ((firstMinutes - lastMinutes) / firstMinutes) * 100 : 0;

const chartConfig = {
	minutes: {
		label: "CPA ($)",
		color: "var(--chart-2)",
	},
} satisfies ChartConfig;

export function FirstReplyTimeChart({
	className,
	...props
}: ComponentProps<typeof Card>) {
	return (
		<Card
			className={cn("shadow-none md:col-span-2 dark:ring-0", className)}
			{...props}
		>
			<CardHeader className="space-y-1">
				<div className="flex flex-wrap items-center gap-2">
					<CardTitle>CPA by day</CardTitle>
					<Delta value={replyImprovementPct} variant="badge">
						<DeltaIcon variant="trend" />
						<DeltaValue />
					</Delta>
				</div>
				<CardDescription>
					Cost per acquisition per day, last 7 days ($).
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer className="aspect-video w-full" config={chartConfig}>
					<LineChart
						accessibilityLayer
						data={chartRows}
						margin={{ top: 24, left: 20, right: 12, bottom: 8 }}
					>
						<CartesianGrid className="stroke-border" vertical={false} />
						<XAxis
							axisLine={false}
							dataKey="day"
							interval={0}
							tickFormatter={(value) => String(value).slice(0, 3)}
							tickLine={false}
							tickMargin={8}
						/>
						<ChartTooltip
							content={<ChartTooltipContent indicator="line" />}
							cursor={false}
						/>
						<Line
							activeDot={{ r: 6 }}
							dataKey="minutes"
							dot={{ fill: "var(--color-minutes)" }}
							stroke="var(--color-minutes)"
							strokeWidth={2}
							type="natural"
						>
							<LabelList
								className="fill-foreground"
								dataKey="minutes"
								fontSize={12}
								formatter={(label) => {
									const n = Number(label);
									return Number.isFinite(n)
										? `$${n.toFixed(1)}`
										: String(label ?? "");
								}}
								offset={12}
								position="top"
							/>
						</Line>
					</LineChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
```

### `components/team-on-duty.tsx`

```tsx
"use client";

import { cn } from "@/lib/utils";
import { type ComponentProps, useState } from "react";
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { StatusIndicator } from "@/components/indicator";
import { EllipsisIcon, SendIcon, ListChecksIcon } from "@/components/icons";

type Campaign = {
	id: string;
	name: string;
	platform: string;
	status: "Running" | "Paused";
	/** Cost per acquisition in USD */
	cpa: number;
	image?: string;
};

const INITIAL_CAMPAIGNS: readonly Campaign[] = [
	{
		id: "brand-search",
		name: "Brand Search",
		platform: "Google",
		status: "Running",
		cpa: 18,
		image: "https://avatar.vercel.sh/brandsearch",
	},
	{
		id: "retargeting",
		name: "Retargeting 7D",
		platform: "Meta",
		status: "Running",
		cpa: 22,
		image: "https://avatar.vercel.sh/retargeting",
	},
	{
		id: "lookalike",
		name: "Lookalike 1% US",
		platform: "Meta",
		status: "Paused",
		cpa: 31,
		image: "https://avatar.vercel.sh/lookalike",
	},
	{
		id: "tiktok-promo",
		name: "TikTok Promo",
		platform: "TikTok",
		status: "Running",
		cpa: 27,
		image: "https://avatar.vercel.sh/tiktokpromo",
	},
	{
		id: "display-remarket",
		name: "Display Remarket",
		platform: "Google",
		status: "Paused",
		cpa: 35,
		image: "https://avatar.vercel.sh/displayremarket",
	},
];

function getInitials(name: string) {
	return name
		.split(" ")
		.map((word) => word.charAt(0).toUpperCase())
		.join("")
		.slice(0, 2);
}

export function TeamOnDuty({
	className,
	...props
}: ComponentProps<typeof Card>) {
	const [campaigns, setCampaigns] = useState<Campaign[]>(() => [
		...INITIAL_CAMPAIGNS,
	]);

	function pauseCampaign(id: string) {
		setCampaigns((prev) =>
			prev.map((c) => (c.id === id ? { ...c, status: "Paused" } : c))
		);
	}

	return (
		<Card className={cn("shadow-none dark:ring-0", className)} {...props}>
			<CardHeader className="border-b">
				<CardTitle>Active campaigns</CardTitle>
				<CardDescription>Cost performance by campaign</CardDescription>
			</CardHeader>
			<CardContent className="p-0">
				<ul className="flex flex-col divide-y divide-border">
					{campaigns.map((c) => (
						<li
							className="flex items-center gap-2 p-3 first:pt-0 last:pb-0 sm:gap-3"
							key={c.id}
						>
							<Avatar className="size-8 rounded-md">
								<AvatarImage alt={c.name} src={c.image} />
								<AvatarFallback className="rounded-md">
									{getInitials(c.name)}
								</AvatarFallback>
							</Avatar>
							<div className="min-w-0 flex-1 pr-1">
								<p className="truncate font-medium text-foreground text-sm leading-snug">
									{c.name}
								</p>
								<p className="flex items-center gap-2 text-[10px] leading-snug">
									<span className="flex shrink-0 items-center gap-1">
										<StatusIndicator
											color={c.status === "Running" ? "emerald" : "amber"}
											pulse={c.status === "Running"}
										/>
										{c.status}
									</span>
									<span className="inline-flex size-1 rounded-full bg-foreground/80" />
									<span className="text-muted-foreground">{c.platform}</span>
									<span className="inline-flex size-1 rounded-full bg-foreground/80" />
									<span className="tabular-nums">CPA ${c.cpa}</span>
								</p>
							</div>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button
										aria-label={`Actions for ${c.name}`}
										size="icon-xs"
										variant="ghost"
									>
										<EllipsisIcon
										/>
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="end" className="min-w-52">
									<DropdownMenuLabel className="font-normal text-muted-foreground text-xs">
										{c.name}
									</DropdownMenuLabel>
									<DropdownMenuSeparator />
									<DropdownMenuItem className="gap-2">
										<SendIcon className="size-4 opacity-70" />
										View details
									</DropdownMenuItem>
									<DropdownMenuItem
										className="gap-2"
										disabled={c.status === "Paused"}
										onSelect={() => {
											pauseCampaign(c.id);
										}}
									>
										<ListChecksIcon className="size-4 opacity-70" />
										Pause campaign
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</li>
					))}
				</ul>
			</CardContent>
		</Card>
	);
}
```

### `components/recent-conversations.tsx`

```tsx
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { SearchIcon, MessageCircleIcon, ArrowRightIcon } from "@/components/icons";

type Campaign = {
	name: string;
	objective: string;
	platform: string;
	/** "search" = search network, "social" = social network */
	kind: "search" | "social";
	spend: number;
	cpa: number;
	state: "active" | "paused" | "review";
};

const rows: Campaign[] = [
	{
		name: "Black Friday Push",
		objective: "Conversions",
		platform: "Meta",
		kind: "social",
		spend: 1240,
		cpa: 19,
		state: "active",
	},
	{
		name: "Search · Brand",
		objective: "Search",
		platform: "Google",
		kind: "search",
		spend: 860,
		cpa: 14,
		state: "active",
	},
	{
		name: "Lookalike 1%",
		objective: "Awareness",
		platform: "TikTok",
		kind: "social",
		spend: 420,
		cpa: 33,
		state: "paused",
	},
	{
		name: "Remarketing 7D",
		objective: "Conversions",
		platform: "Meta",
		kind: "social",
		spend: 610,
		cpa: 21,
		state: "review",
	},
];

function usd(n: number): string {
	return `$${n.toLocaleString("en-US")}`;
}

function statusVariant(
	state: Campaign["state"]
): ComponentProps<typeof Badge>["variant"] {
	if (state === "review") {
		return "destructive";
	}
	if (state === "paused") {
		return "outline";
	}
	return "secondary";
}

function statusLabel(state: Campaign["state"]): string {
	if (state === "review") {
		return "In review";
	}
	if (state === "paused") {
		return "Paused";
	}
	return "Active";
}

function platformIcon(kind: Campaign["kind"]) {
	if (kind === "search") {
		return <SearchIcon className="size-3.5 shrink-0" />;
	}
	return <MessageCircleIcon className="size-3.5 shrink-0" />;
}

export function RecentConversations({
	className,
	...props
}: ComponentProps<typeof Card>) {
	return (
		<Card
			className={cn("gap-0 shadow-none md:col-span-2 dark:ring-0", className)}
			{...props}
		>
			<CardHeader className="border-b">
				<CardTitle>Recent campaigns</CardTitle>
				<CardDescription>Latest 4 updated campaigns</CardDescription>
			</CardHeader>
			<CardContent className="p-0">
				<Table>
					<TableHeader>
						<TableRow className="hover:bg-transparent">
							<TableHead className="pl-6">Campaign</TableHead>
							<TableHead className="hidden sm:table-cell">Objective</TableHead>
							<TableHead>Platform</TableHead>
							<TableHead className="text-right">Spend</TableHead>
							<TableHead className="text-right">CPA</TableHead>
							<TableHead className="pr-6 text-right">Status</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{rows.map((r) => {
							return (
								<TableRow
									className="h-14 hover:bg-transparent"
									key={r.name}
								>
									<TableCell className="max-w-36 truncate pl-6 font-medium">
										{r.name}
									</TableCell>
									<TableCell className="hidden max-w-32 sm:table-cell">
										<span className="line-clamp-1 text-muted-foreground text-sm">
											{r.objective}
										</span>
									</TableCell>
									<TableCell>
										<span className="inline-flex items-center gap-2 font-medium text-sm">
											{platformIcon(r.kind)}
											{r.platform}
										</span>
									</TableCell>
									<TableCell className="text-right text-muted-foreground text-sm tabular-nums">
										{usd(r.spend)}
									</TableCell>
									<TableCell className="text-right font-medium text-sm tabular-nums">
										{usd(r.cpa)}
									</TableCell>
									<TableCell className="pr-6 text-right">
										<Badge variant={statusVariant(r.state)}>
											{statusLabel(r.state)}
										</Badge>
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
				<div className="flex justify-center border-t py-3">
					<Button asChild size="sm" variant="ghost">
						<a href="#/campaigns">
							View all campaigns
							<ArrowRightIcon aria-hidden="true" data-icon="inline-end" />
						</a>
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}
```

### `components/support-activity.tsx`

```tsx
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ShieldCheckIcon, LayersIcon, WandIcon, UsersRoundIcon, ArrowRightIcon } from "@/components/icons";

const items = [
	{
		title: "Retargeting CPA dropped to $21",
		time: "12 min ago",
		icon: (
			<ShieldCheckIcon
			/>
		),
	},
	{
		title: "Brand Search budget raised 20%",
		time: "28 min ago",
		icon: (
			<LayersIcon
			/>
		),
	},
	{
		title: "New ad creative approved",
		time: "1 hr ago",
		icon: (
			<WandIcon
			/>
		),
	},
	{
		title: "Lookalike audience synced from CRM",
		time: "3 hr ago",
		icon: (
			<UsersRoundIcon
			/>
		),
	},
] as const;

export function SupportActivity({
	className,
	...props
}: ComponentProps<typeof Card>) {
	return (
		<Card className={cn("gap-0 shadow-none dark:ring-0", className)} {...props}>
			<CardHeader className="border-b">
				<CardTitle>Campaign activity</CardTitle>
				<CardDescription>Operational signals.</CardDescription>
			</CardHeader>
			<CardContent className="px-0">
				<ul className="flex flex-col divide-y divide-border">
					{items.map((item) => (
						<li className="flex h-18 items-center gap-3 px-3" key={item.title}>
							<span
								aria-hidden="true"
								className="flex size-10 shrink-0 items-center justify-center [&_svg]:size-4"
							>
								{item.icon}
							</span>
							<div className="min-w-0 flex-1 space-y-1">
								<p className="line-clamp-2 text-pretty text-foreground text-xs leading-snug">
									{item.title}
								</p>
								<p className="text-muted-foreground text-xs tabular-nums">
									{item.time}
								</p>
							</div>
						</li>
					))}
				</ul>
			</CardContent>
			<div className="flex items-center justify-center">
				<Button asChild size="sm" variant="ghost">
					<a href="/#">
						View all
						<ArrowRightIcon aria-hidden="true" data-icon="inline-end" />
					</a>
				</Button>
			</div>
		</Card>
	);
}
```

### `components/dashboard.tsx`

```tsx
import { ChannelBreakdownChart } from "@/components/channel-breakdown-chart";
import { ConversationVolumeChart } from "@/components/conversation-volume-chart";
import { CsatResponsesChart } from "@/components/csat-responses-chart";
import { FirstReplyTimeChart } from "@/components/first-reply-time-chart";
import { RecentConversations } from "@/components/recent-conversations";
import { DashboardStats } from "@/components/stats";
import { SupportActivity } from "@/components/support-activity";
import { TeamOnDuty } from "@/components/team-on-duty";
import { Button } from "@/components/ui/button";
import { StatusIndicator } from "@/components/indicator";
import { ArrowRightIcon, PlusIcon } from "@/components/icons";

function DashboardHeader() {
	return (
		<div className="flex flex-col gap-5">
			{/* Singular decorative accent — Goldenrod Orange blueprint band */}
			<div className="h-1 w-16 rounded-full bg-brand-orange" />
			<div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
				<div className="flex flex-col gap-3">
					<span className="inline-flex w-fit items-center gap-2 rounded-md bg-card px-3 py-1 font-mono text-muted-foreground text-xs">
						<StatusIndicator color="emerald" />
						LIVE · synced 2m ago
					</span>
					<h1 className="font-semibold text-3xl tracking-tight">
						Ad performance
					</h1>
					<p className="max-w-xl text-muted-foreground text-sm">
						Track CPC, CPM, and CPA in real time across every campaign and
						platform.
					</p>
				</div>
				<div className="flex items-center gap-2">
					<Button
						className="border-brand-blue text-brand-blue hover:bg-brand-blue/10 hover:text-brand-blue"
						variant="outline"
					>
						View report
						<ArrowRightIcon data-icon="inline-end" />
					</Button>
					<Button>
						<PlusIcon data-icon="inline-start" />
						New campaign
					</Button>
				</div>
			</div>
		</div>
	);
}

export function Dashboard() {
	return (
		<div className="flex flex-col gap-6">
			<DashboardHeader />
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
				<DashboardStats />
				<ConversationVolumeChart />
				<ChannelBreakdownChart />
				<CsatResponsesChart />
				<FirstReplyTimeChart />
				<TeamOnDuty />
				<RecentConversations />
				<SupportActivity />
			</div>
		</div>
	);
}
```
