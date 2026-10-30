# Fivefold — Dashboard 002

> Full source bundle: a short spec, the scaffold steps, then the verbatim source of every file. Reproduce the **Fivefold Dashboard 002 — Project Management app** byte-for-byte by writing each file at its exact path. Unlike a descriptive prompt, this carries the real code — copy the files exactly, don't "improve" them.

---

## HOW TO USE

1. **Scaffold the app** (pinned stack — do not substitute):
   ```bash
   npx create-next-app@latest dashboard-002 --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
   cd dashboard-002
   npm i recharts lucide-react class-variance-authority clsx tailwind-merge tw-animate-css \
     @radix-ui/react-avatar @radix-ui/react-collapsible @radix-ui/react-dropdown-menu \
     @radix-ui/react-separator @radix-ui/react-slot @radix-ui/react-tooltip @radix-ui/react-dialog
   ```
2. **Create every file below at its exact path, with its exact contents.** Overwrite scaffolded defaults (`globals.css`, `layout.tsx`, `page.tsx`, `next.config.ts`).
3. Add **`public/logo.svg`** (the Fivefold wordmark).
4. Run `npm run dev` → open `http://localhost:3000`.


## LAYOUT INVARIANT — sidebar pushes, content never gets clipped

The sidebar **PUSHES** the main content; it must never overlay it. Use shadcn's `Sidebar` with `variant="sidebar"` + `collapsible="icon"`. Do **not** use `variant="floating"` or `variant="inset"` for this dashboard. The `SidebarInset` primitive owns the right-hand pane and resizes when the sidebar collapses.

```
viewport: ───────────────────────────────────────────────
          │ AppSidebar (16rem) │ SidebarInset (flex-1)   │
          │ ─────────────────  │ ─────────────────────── │
          │  • Overview*       │ ┌─── AppHeader ───────┐ │
          │  • My Tasks        │ │ trigger / +new / N  │ │
          │  • Inbox           │ └─────────────────────┘ │
          │                    │ ┌─ Dashboard grid ────┐ │
          │  Delivery          │ │ KPI · KPI · KPI · K │ │
          │  …                 │ │ Tasks ▮ │ Throughput│ │
          │                    │ │ Upcoming meetings   │ │
          │                    │ │ Projects · Health…  │ │
          │                    │ └─────────────────────┘ │
          ─────────────────────┴──────────────────────────
```

- Card titles, deltas, and descriptions must stay **fully visible** at every viewport width ≥ 1024px with the sidebar expanded. If a title would clip, add `min-w-0` + `truncate` rather than letting the card overflow.
- Required `min-w-0` placements (already wired in the source below — keep them):
  - The `<div>` inside `SidebarInset` that wraps `{children}` in `app-shell.tsx`.
  - The Dashboard grid container in `dashboard.tsx` (also `overflow-hidden`).
  - Every chart card's `CardHeader > flex-wrap` row that holds the title + delta badge.
  - The Upcoming meetings `CardTitle` (icon = `shrink-0`, label = `truncate`).

## REPRODUCE-EXACTLY RULES

- Copy files **verbatim** (same imports, classes, tokens, data). Do not rename, reorder, or "clean up".
- Fonts: **Sora** (heading), **Plus Jakarta Sans** (body), **Geist Mono** (mono) — exactly as wired in `layout.tsx` + `globals.css`.
- Colors: the exact `oklch()` tokens in `globals.css`. Color is **status-only** (emerald/violet/sky/amber/rose).
- Cards are **flat, square (`rounded-none`), shadowless**, separated by a 1px `gap-px bg-border` grid. Content is **flush to edges** (no outer padding / max-width).
- The `Upcoming meetings` timeline uses **fluid `minmax(0,1fr)` columns** with `%`/`calc()` positioning — keep it.
- The `logo.tsx` uses a **CSS-mask + `bg-current`** so the wordmark adapts to the theme — keep it.
- The page tab `<title>` and every user-facing string ship as **Fivefold**. Do not introduce any other product name in copy, comments, or metadata.
- If a constraint conflicts with a framework limit (e.g. font weight unavailable), clamp to the nearest valid value and note it as a comment — never silently change.

---

## FILE MANIFEST

Files follow in this order — configs, then `src/app`, `src/lib`, `src/hooks`, `src/components/ui`, `src/components`, then `public/logo.svg`.

---

### `package.json`

```json
{
  "name": "dashboard-002-scaffold",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^1.17.0",
    "next": "16.2.7",
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
    "eslint-config-next": "16.2.7",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

### `next.config.ts`

```tsx
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  devIndicators: false,
};

export default nextConfig;
```

### `postcss.config.mjs`

```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
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
    "css": "src/app/globals.css",
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
  "menuAccent": "subtle"
}
```

### `src/app/globals.css`

```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-sans);
  --font-mono: var(--font-geist-mono);
  --font-heading: var(--font-heading);
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
  --radius-sm: calc(var(--radius) * 0.6);
  --radius-md: calc(var(--radius) * 0.8);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) * 1.4);
  --radius-2xl: calc(var(--radius) * 1.8);
  --radius-3xl: calc(var(--radius) * 2.2);
  --radius-4xl: calc(var(--radius) * 2.6);
}

:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.87 0 0);
  --chart-2: oklch(0.556 0 0);
  --chart-3: oklch(0.439 0 0);
  --chart-4: oklch(0.371 0 0);
  --chart-5: oklch(0.269 0 0);
  --radius: 0.625rem;
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.205 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
  --chart-1: oklch(0.87 0 0);
  --chart-2: oklch(0.556 0 0);
  --chart-3: oklch(0.439 0 0);
  --chart-4: oklch(0.371 0 0);
  --chart-5: oklch(0.269 0 0);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.556 0 0);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
  html {
    @apply font-sans;
    font-feature-settings: "ss01", "cv01", "cv03";
  }
  .font-heading {
    font-family: var(--font-heading);
    letter-spacing: -0.015em;
  }
}
```

### `src/app/layout.tsx`

```tsx
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fivefold — Dashboard 002",
  description: "Fivefold Dashboard 002 — plan, track, and ship your projects on time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${sora.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
```

### `src/app/page.tsx`

```tsx
import { AppShell } from "@/components/app-shell";
import { Dashboard } from "@/components/dashboard";

export default function Page() {
  return (
    <AppShell>
      <Dashboard />
    </AppShell>
  );
}
```

### `src/lib/utils.ts`

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### `src/hooks/use-mobile.ts`

```ts
import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
```

### `src/components/ui/*.tsx` (shadcn primitives)

Run **`npx shadcn@latest add button card badge separator input avatar tooltip dropdown-menu collapsible breadcrumb skeleton empty table sheet sidebar`** to scaffold every primitive in `src/components/ui/`. They are the standard shadcn radix-based variants — no project-specific tweaks. The two non-default helpers (`kbd.tsx`, `chart.tsx`) ship inside the same folder:

```tsx
// src/components/ui/kbd.tsx
import { cn } from "@/lib/utils";

function Kbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm bg-muted px-1 font-sans text-xs font-medium text-muted-foreground select-none [&_svg:not([class*='size-'])]:size-3",
        className,
      )}
      {...props}
    />
  );
}

function KbdGroup({ className, ...props }: React.ComponentProps<"div">) {
  return <kbd data-slot="kbd-group" className={cn("inline-flex items-center gap-1", className)} {...props} />;
}

export { Kbd, KbdGroup };
```

```tsx
// src/components/ui/chart.tsx — shadcn `chart` recipe (verbatim from `npx shadcn add chart`)
// Provides: ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartConfig.
// Internally wires Recharts ResponsiveContainer + theme tokens (light/dark) via `<style>` injection.
// Use the canonical implementation; do not customize.
```

### `src/components/formater.ts`

```ts
export const DASHBOARD_LOCALE = "en-US";

export function parseIsoCalendarDate(isoDate: string): Date {
  return new Date(`${isoDate}T12:00:00`);
}

export type DashboardDateStyle = "month" | "day-month" | "full";

export function formatDate(isoDate: string, style: DashboardDateStyle): string {
  const date = parseIsoCalendarDate(isoDate);
  if (style === "month") return date.toLocaleDateString(DASHBOARD_LOCALE, { month: "short" });
  if (style === "day-month") return date.toLocaleDateString(DASHBOARD_LOCALE, { day: "numeric", month: "short" });
  return date.toLocaleDateString(DASHBOARD_LOCALE, { day: "numeric", month: "short", year: "numeric" });
}

export function formatInteger(value: number) {
  return new Intl.NumberFormat(DASHBOARD_LOCALE, { maximumFractionDigits: 0 }).format(value);
}

export function formatPercent(value: number, fractionDigits = 2) {
  return `${value.toFixed(fractionDigits)}%`;
}
```

### `src/components/decor-icon.tsx`

```tsx
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const DecorIconVariants = cva(
  "pointer-events-none absolute z-1 size-5 shrink-0 stroke-1 stroke-muted-foreground",
  {
    variants: {
      position: {
        "top-left":    "top-0 left-0 -translate-x-[calc(50%+0.5px)] -translate-y-[calc(50%+0.5px)]",
        "top-right":   "top-0 right-0 translate-x-[calc(50%+0.5px)] -translate-y-[calc(50%+0.5px)]",
        "bottom-right":"right-0 bottom-0 translate-x-[calc(50%+0.5px)] translate-y-[calc(50%+0.5px)]",
        "bottom-left": "bottom-0 left-0 -translate-x-[calc(50%+0.5px)] translate-y-[calc(50%+0.5px)]",
      },
    },
    defaultVariants: { position: "top-left" },
  },
);

type DecorIconProps = React.ComponentProps<"svg"> & VariantProps<typeof DecorIconVariants>;

export function DecorIcon({ position, className, ...props }: DecorIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn(DecorIconVariants({ position, className }))}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
```

### `src/components/icons.tsx` (Fivefold icon kit — Heroicons style, currentColor)

```tsx
import type * as React from "react";

/**
 * Icons from the "Icon Fivefold v1" set (Heroicons-style, 24×24, currentColor).
 * Width/height intentionally omitted so size is controlled via `className`
 * (e.g. `size-4`).
 */
type IconProps = React.ComponentProps<"svg">;

export function CalendarDaysIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M6.75 2.25C7.16 2.25 7.5 2.59 7.5 3v1.5h9V3c0-.41.34-.75.75-.75s.75.34.75.75v1.5h.75A3 3 0 0 1 21.75 7.5v11.25A3 3 0 0 1 18.75 21.75H5.25A3 3 0 0 1 2.25 18.75V7.5A3 3 0 0 1 5.25 4.5H6V3c0-.41.34-.75.75-.75ZM20.25 11.25A1.5 1.5 0 0 0 18.75 9.75H5.25A1.5 1.5 0 0 0 3.75 11.25v7.5A1.5 1.5 0 0 0 5.25 20.25h13.5A1.5 1.5 0 0 0 20.25 18.75v-7.5Z" fill="currentColor" />
    </svg>
  );
}
export function ClockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2.25a9.75 9.75 0 1 0 0 19.5 9.75 9.75 0 0 0 0-19.5Zm.75 3.75a.75.75 0 0 0-1.5 0V12c0 .41.34.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" fill="currentColor" />
    </svg>
  );
}
export function VideoCameraIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4.5 4.5A3 3 0 0 0 1.5 7.5v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5Z" fill="currentColor" />
      <path d="M19.94 18.75 17.25 16.06V7.94l2.69-2.69c.95-.94 2.56-.28 2.56 1.06v11.38c0 1.34-1.61 2-2.56 1.06Z" fill="currentColor" />
    </svg>
  );
}
export function MapPinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M11.54 22.35a1.5 1.5 0 0 0 .92.06l.03-.01.1-.05a17.7 17.7 0 0 0 1.42-.75 22.4 22.4 0 0 0 3.28-2.32C18.83 17.34 20.25 14.35 20.25 10.5a8.25 8.25 0 1 0-16.5 0c0 3.85 2.02 6.84 3.96 8.83a22.4 22.4 0 0 0 4.68 3.07ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="currentColor" />
    </svg>
  );
}
export function UsersIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4.5 6.375A4.125 4.125 0 1 1 12.75 6.375 4.125 4.125 0 0 1 4.5 6.375Z" fill="currentColor" />
      <path d="M14.25 8.625A3.375 3.375 0 1 1 21 8.625 3.375 3.375 0 0 1 14.25 8.625Z" fill="currentColor" />
      <path d="M1.5 19.125A7.125 7.125 0 0 1 15.75 19.125v.13c-1.97 1.19-4.28 1.87-6.75 1.87-2.47 0-4.78-.68-6.76-1.87a.75.75 0 0 1-.39-.66 .8.8 0 0 1 0-.07Z" fill="currentColor" />
      <path d="M17.25 19.128c0 .05 0 .1-.001.144A2.6 2.6 0 0 1 17.02 20.232c.2.012.4.018.604.018a8.96 8.96 0 0 0 4.45-1.029.75.75 0 0 0 .42-.62 4.875 4.875 0 0 0-7.32-4.083 8.6 8.6 0 0 1 1.71 5.61V19.128Z" fill="currentColor" />
    </svg>
  );
}
export function BellAlertIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75c0 2.12-.8 4.06-2.12 5.52a.75.75 0 0 0 .47.95c1.54.57 3.16.99 4.83 1.25-.01.1-.01.19-.01.28a3.75 3.75 0 1 0 7.5 0c0-.09 0-.18-.01-.28 1.67-.26 3.29-.68 4.83-1.25a.75.75 0 0 0 .47-.95A8.25 8.25 0 0 1 18.75 9.75V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18a2.25 2.25 0 1 0 4.5 0c0-.03 0-.07-.001-.1A30.8 30.8 0 0 1 12 18a30.8 30.8 0 0 1-2.249-.1 2.4 2.4 0 0 0-.001.1Z" fill="currentColor" />
    </svg>
  );
}
export function ArrowRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" fill="currentColor" />
    </svg>
  );
}
export function ChevronLeftIcon(props: IconProps) {
  return (<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M15.28 4.22a.75.75 0 0 1 0 1.06L8.56 12l6.72 6.72a.75.75 0 1 1-1.06 1.06l-7.25-7.25a.75.75 0 0 1 0-1.06l7.25-7.25a.75.75 0 0 1 1.06 0Z" fill="currentColor"/></svg>);
}
export function ChevronRightIcon(props: IconProps) {
  return (<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M8.72 4.22a.75.75 0 0 1 1.06 0l7.25 7.25a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 1 1-1.06-1.06L15.44 12 8.72 5.28a.75.75 0 0 1 0-1.06Z" fill="currentColor"/></svg>);
}
export function ChevronDownIcon(props: IconProps) {
  return (<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M4.22 8.72a.75.75 0 0 1 1.06 0L12 15.44l6.72-6.72a.75.75 0 1 1 1.06 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L4.22 9.78a.75.75 0 0 1 0-1.06Z" fill="currentColor"/></svg>);
}
export function MagnifyingGlassIcon(props: IconProps) {
  return (<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 4.27 11.96l4.69 4.7a.75.75 0 1 0 1.06-1.07l-4.7-4.69A6.75 6.75 0 0 0 10.5 3.75Z" fill="currentColor"/></svg>);
}
export function FunnelIcon(props: IconProps) {
  return (<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M3.79 2.94A66.9 66.9 0 0 1 12 2.25a66.9 66.9 0 0 1 8.21.69c.9.15 1.54.94 1.54 1.83v1.05c0 .8-.32 1.56-.88 2.12L14.69 14.12c-.28.28-.44.66-.44 1.06v2.93c0 1.14-.64 2.18-1.66 2.69l-1.76.88a.75.75 0 0 1-1.08-.66V15.18c0-.4-.16-.78-.44-1.06L3.13 7.94A3 3 0 0 1 2.25 5.82V4.77c0-.89.64-1.68 1.54-1.83Z" fill="currentColor"/></svg>);
}
export function ArrowsUpDownIcon(props: IconProps) {
  return (<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M6.97 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.25 4.81V16.5a.75.75 0 0 1-1.5 0V4.81L3.53 8.03A.75.75 0 0 1 2.47 6.97l4.5-4.5ZM16.5 6.75a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V7.5a.75.75 0 0 1 .75-.75Z" fill="currentColor"/></svg>);
}
export function PlusIcon(props: IconProps) {
  return (<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 3.75c.41 0 .75.34.75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5c0-.41.34-.75.75-.75Z" fill="currentColor"/></svg>);
}
export function XMarkIcon(props: IconProps) {
  return (<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" fill="currentColor"/></svg>);
}
```

### `src/components/logo.tsx`

```tsx
import type React from "react";
import { cn } from "@/lib/utils";

const maskStyle: React.CSSProperties = {
  maskImage: "url(/logo.svg)",
  WebkitMaskImage: "url(/logo.svg)",
  maskRepeat: "no-repeat",
  WebkitMaskRepeat: "no-repeat",
};

export function Logo({ className }: { className?: string }) {
  return (
    <span
      aria-label="Fivefold"
      className={cn("inline-block aspect-[1980/423] bg-current", className)}
      role="img"
      style={{ ...maskStyle, maskSize: "contain", WebkitMaskSize: "contain", maskPosition: "left center", WebkitMaskPosition: "left center" }}
    />
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("inline-block shrink-0 bg-current", className)}
      style={{ ...maskStyle, maskSize: "auto 100%", WebkitMaskSize: "auto 100%", maskPosition: "left center", WebkitMaskPosition: "left center" }}
    />
  );
}
```

### `src/components/dashboard-card.tsx`

```tsx
import { cn } from "@/lib/utils";
import type * as React from "react";
import { Card } from "@/components/ui/card";

export function DashboardCard({ className, ...props }: React.ComponentProps<typeof Card>) {
  return (
    <Card
      className={cn("rounded-none bg-background shadow-none ring-0", className)}
      {...props}
    />
  );
}
```

### `src/components/delta.tsx`

```tsx
"use client";
import { cn } from "@/lib/utils";
import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { MinusIcon, TrendingUpIcon, ArrowUpIcon, ChevronUpIcon, TrendingDownIcon, ArrowDownIcon, ChevronDownIcon } from "lucide-react";

type DeltaIconVariant = "default" | "trend" | "arrow";
type DeltaVariant = "default" | "badge";

const DeltaContext = React.createContext<{ value: number } | null>(null);

function useDeltaValue() {
  const c = React.useContext(DeltaContext);
  if (!c) throw new Error("DeltaIcon and DeltaValue must be used inside a `Delta` component.");
  return c.value;
}

function Delta({ className, value, variant = "default", ...props }: React.ComponentProps<"div"> & { value: number; variant?: DeltaVariant }) {
  return (
    <DeltaContext.Provider value={{ value }}>
      {variant === "badge" ? (
        <Badge
          className={cn(
            "gap-1 border-none tabular-nums [&_svg]:size-4 [&_svg]:shrink-0",
            value > 0 ? "bg-emerald-500/10 text-emerald-500" : "bg-red-500/10 text-red-500",
            className,
          )}
          variant="secondary"
          {...(props as React.ComponentProps<typeof Badge>)}
        />
      ) : (
        <div
          className={cn(
            "inline-flex items-center gap-1 text-muted-foreground tabular-nums [&_svg]:size-3 [&_svg]:shrink-0",
            value > 0 && "text-emerald-600 dark:text-emerald-400",
            value < 0 && "text-rose-600 dark:text-rose-400",
            className,
          )}
          {...props}
        />
      )}
    </DeltaContext.Provider>
  );
}

function DeltaIcon({ variant = "default", className, ...props }: Omit<React.ComponentProps<"svg">, "fill"> & { variant?: DeltaIconVariant }) {
  const v = useDeltaValue();
  if (!v || v === 0) return <MinusIcon className={className} {...props} />;
  if (v > 0) {
    if (variant === "trend") return <TrendingUpIcon className={className} {...props} />;
    if (variant === "arrow") return <ArrowUpIcon className={className} {...props} />;
    return <ChevronUpIcon className={className} {...props} />;
  }
  if (variant === "trend") return <TrendingDownIcon className={className} {...props} />;
  if (variant === "arrow") return <ArrowDownIcon className={className} {...props} />;
  return <ChevronDownIcon className={className} {...props} />;
}

function DeltaValue({ className, precision = 1, suffix = "%", absolute = true, ...props }: React.ComponentProps<"span"> & { precision?: number; suffix?: string; absolute?: boolean }) {
  const v = useDeltaValue();
  return (
    <span className={cn("tabular-nums", className)} {...props}>
      {(absolute ? Math.abs(v) : v).toFixed(precision)}
      {suffix}
    </span>
  );
}

export { Delta, DeltaIcon, DeltaValue };
```

### `src/components/app-shared.tsx`

```tsx
import type { ReactNode } from "react";
import { LayoutGridIcon, ListChecksIcon, InboxIcon, FolderKanbanIcon, CalendarDaysIcon, ClockIcon, TargetIcon, BarChart3Icon, UsersIcon, SettingsIcon, ShieldCheckIcon, LifeBuoyIcon, BookOpenIcon } from "lucide-react";

export type SidebarNavItem = {
  title: string;
  path?: string;
  icon?: ReactNode;
  isActive?: boolean;
  subItems?: SidebarNavItem[];
};

export type SidebarNavGroup = { label?: string; items: SidebarNavItem[] };

export const navGroups: SidebarNavGroup[] = [
  {
    label: "Workspace",
    items: [
      { title: "Overview", path: "#/overview", icon: <LayoutGridIcon />, isActive: true },
      { title: "My Tasks", path: "#/tasks", icon: <ListChecksIcon /> },
      { title: "Inbox", path: "#/inbox", icon: <InboxIcon /> },
    ],
  },
  {
    label: "Delivery",
    items: [
      {
        title: "Projects",
        path: "#/projects",
        icon: <FolderKanbanIcon />,
        subItems: [
          { title: "All projects", path: "#/projects/all" },
          { title: "Sprints", path: "#/projects/sprints" },
          { title: "Milestones", path: "#/projects/milestones" },
        ],
      },
      { title: "Timeline", path: "#/timeline", icon: <ClockIcon /> },
      { title: "Calendar", path: "#/calendar", icon: <CalendarDaysIcon /> },
      { title: "Goals", path: "#/goals", icon: <TargetIcon /> },
    ],
  },
  {
    label: "Insights",
    items: [
      { title: "Reports", path: "#/reports", icon: <BarChart3Icon /> },
      { title: "Team", path: "#/team", icon: <UsersIcon /> },
    ],
  },
  {
    label: "Administration",
    items: [
      { title: "Settings", path: "#/settings", icon: <SettingsIcon /> },
      { title: "Members & roles", path: "#/members", icon: <ShieldCheckIcon /> },
    ],
  },
];

export const footerNavLinks: SidebarNavItem[] = [
  { title: "Help & support", path: "#/help", icon: <LifeBuoyIcon /> },
  { title: "Documentation", path: "#/documentation", icon: <BookOpenIcon /> },
];

export const navLinks: SidebarNavItem[] = [
  ...navGroups.flatMap((group) => group.items.flatMap((item) => (item.subItems?.length ? [item, ...item.subItems] : [item]))),
  ...footerNavLinks,
];
```

### `src/components/app-breadcrumbs.tsx`

```tsx
import type { ReactNode } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";

export type AppBreadcrumbPage = { title: string; icon?: ReactNode };

export function AppBreadcrumbs({ page }: { page?: AppBreadcrumbPage | null }) {
  if (!page?.title) return null;
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

### `src/components/nav-group.tsx`

```tsx
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
  SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import type { SidebarNavGroup } from "@/components/app-shared";
import { ChevronRightIcon } from "lucide-react";

export function NavGroup({ label, items }: SidebarNavGroup) {
  return (
    <SidebarGroup>
      {label && <SidebarGroupLabel>{label}</SidebarGroupLabel>}
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            asChild
            className="group/collapsible"
            defaultOpen={!!item.isActive || item.subItems?.some((i) => !!i.isActive)}
            key={item.title}
          >
            <SidebarMenuItem>
              {item.subItems?.length ? (
                <>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton isActive={item.isActive}>
                      {item.icon}
                      <span>{item.title}</span>
                      <ChevronRightIcon className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.subItems?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild isActive={subItem.isActive}>
                            <a href={subItem.path}>
                              {subItem.icon}
                              <span>{subItem.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </>
              ) : (
                <SidebarMenuButton asChild isActive={item.isActive}>
                  <a href={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              )}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
```

### `src/components/nav-user.tsx`

```tsx
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserIcon, SettingsIcon, CreditCardIcon, LogOutIcon } from "lucide-react";

const user = {
  name: "Huy Nguyen",
  email: "hello@example.com",
  avatar: "https://avatar.vercel.sh/huy-nguyen",
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
              <span className="font-medium text-foreground">{user.name}</span>
              <br />
              <div className="max-w-full overflow-hidden overflow-ellipsis whitespace-nowrap text-muted-foreground text-xs">
                {user.email}
              </div>
            </div>
          </DropdownMenuLabel>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem><UserIcon />Account</DropdownMenuItem>
          <DropdownMenuItem><SettingsIcon />Settings</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem><CreditCardIcon />Plan & Billing</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="w-full cursor-pointer" variant="destructive">
          <LogOutIcon />Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

### `src/components/custom-sidebar-trigger.tsx`

```tsx
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

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

### `src/components/app-sidebar.tsx`

```tsx
"use client";

import { cn } from "@/lib/utils";
import { Logo, LogoMark } from "@/components/logo";
import {
  Sidebar, SidebarContent, SidebarFooter, SidebarHeader,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem,
} from "@/components/ui/sidebar";
import { footerNavLinks, navGroups } from "@/components/app-shared";
import { NavGroup } from "@/components/nav-group";

export function AppSidebar() {
  return (
    <Sidebar
      className={cn(
        "*:data-[slot=sidebar-inner]:bg-background",
        "*:data-[slot=sidebar-inner]:dark:bg-[radial-gradient(60%_18%_at_10%_0%,--theme(--color-foreground/.08),transparent)]",
        "**:data-[slot=sidebar-menu-button]:[&>span]:text-foreground/75",
      )}
      collapsible="icon"
      variant="sidebar"
    >
      <SidebarHeader className="h-14 justify-center border-b px-2">
        <SidebarMenuButton asChild>
          <a href="#link">
            <LogoMark className="hidden size-5 text-foreground group-data-[collapsible=icon]:block" />
            <span className="flex items-center text-foreground! group-data-[collapsible=icon]:hidden">
              <Logo className="h-4" />
            </span>
          </a>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        {navGroups.map((group, index) => (
          <NavGroup key={`sidebar-group-${index}`} {...group} />
        ))}
      </SidebarContent>
      <SidebarFooter className="gap-0 p-0">
        <SidebarMenu className="border-t p-2">
          {footerNavLinks.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                className="text-muted-foreground"
                isActive={item.isActive}
                size="sm"
              >
                <a href={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        <div className="px-4 pt-4 pb-2 transition-opacity group-data-[collapsible=icon]:pointer-events-none group-data-[collapsible=icon]:opacity-0">
          <p className="text-nowrap text-[9px] text-muted-foreground">
            © {new Date().getFullYear()} Fivefold · Project Management
          </p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
```

### `src/components/app-header.tsx`

```tsx
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DecorIcon } from "@/components/decor-icon";
import { AppBreadcrumbs } from "@/components/app-breadcrumbs";
import { navLinks } from "@/components/app-shared";
import { CustomSidebarTrigger } from "@/components/custom-sidebar-trigger";
import { NavUser } from "@/components/nav-user";
import { PlusIcon, BellIcon } from "lucide-react";

const activeItem = navLinks.find((item) => item.isActive);

export function AppHeader() {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex h-14 shrink-0 items-center justify-between gap-2 border-b px-4 md:px-6",
        "bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50",
      )}
    >
      <DecorIcon className="hidden md:block" position="bottom-left" />
      <div className="flex items-center gap-3">
        <CustomSidebarTrigger />
        <AppBreadcrumbs page={activeItem} />
      </div>
      <div className="flex items-center gap-3">
        <Button aria-label="New task" size="icon-sm" variant="outline"><PlusIcon /></Button>
        <Button aria-label="Notifications" size="icon-sm" variant="outline"><BellIcon /></Button>
        <Separator className="h-4 data-[orientation=vertical]:self-center" orientation="vertical" />
        <NavUser />
      </div>
    </header>
  );
}
```

### `src/components/app-shell.tsx`

```tsx
import { cn } from "@/lib/utils";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppHeader } from "@/components/app-header";
import { AppSidebar } from "@/components/app-sidebar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className={cn("[--app-wrapper-max-width:80rem]")}>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <div className="flex w-full min-w-0 flex-1 flex-col">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
```

### `src/components/stats.tsx`

```tsx
import { CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Delta, DeltaIcon, DeltaValue } from "@/components/delta";
import { DashboardCard } from "@/components/dashboard-card";

type Stat = { label: string; value: string; delta: number };

const stats: Stat[] = [
  { label: "Active projects",  value: "12",  delta:  9.1 },
  { label: "Tasks completed",  value: "184", delta: 14.6 },
  { label: "On-time delivery", value: "92%", delta:  3.4 },
  { label: "Overdue tasks",    value: "7",   delta: -18.2 },
] as const;

export function DashboardStats() {
  return (
    <>
      {stats.map((s) => (
        <DashboardCard key={s.label}>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="font-normal text-xs tracking-wide">{s.label}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-row items-center gap-2">
            <p className="font-heading font-semibold text-2xl tabular-nums">{s.value}</p>
          </CardContent>
          <CardFooter className="gap-1 rounded-none bg-background text-xs">
            <Delta value={s.delta}>
              <DeltaIcon />
              <DeltaValue />
            </Delta>
            <span className="text-muted-foreground">vs last week</span>
          </CardFooter>
        </DashboardCard>
      ))}
    </>
  );
}
```

### `src/components/net-revenue-chart.tsx` — "Tasks completed" bar chart

```tsx
"use client";

import type * as React from "react";
import { Bar, BarChart, XAxis } from "recharts";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Delta, DeltaIcon, DeltaValue } from "@/components/delta";
import { DashboardCard } from "@/components/dashboard-card";

const salesDaily7 = [
  { day: "Mon", sales: 24 },
  { day: "Tue", sales: 31 },
  { day: "Wed", sales: 18 },
  { day: "Thu", sales: 27 },
  { day: "Fri", sales: 34 },
  { day: "Sat", sales: 9  },
  { day: "Sun", sales: 14 },
] as const;

const chartRows = salesDaily7.map((row) => ({ ...row }));
const activeIndex = chartRows.reduce((best, row, i) => (row.sales > chartRows[best].sales ? i : best), 0);
const activeDay = chartRows[activeIndex].day;

const firstDay = salesDaily7[0].sales;
const lastDay = salesDaily7.at(-1)?.sales ?? firstDay;
const growthPct = (((lastDay - firstDay) / firstDay) * 100).toFixed(1);

const chartConfig = {
  sales: { label: "Tasks", color: "var(--foreground)" },
} satisfies ChartConfig;

type BarShapeProps = React.SVGProps<SVGRectElement> & { index?: number; value?: number; payload?: { sales?: number } };

function MonoBar(props: BarShapeProps) {
  const index = props.index ?? 0;
  const x = Number(props.x ?? 0);
  const y = Number(props.y ?? 0);
  const width = Number(props.width ?? 0);
  const height = Number(props.height ?? 0);
  const value = props.payload?.sales ?? Number(props.value ?? 0);
  const isActive = index === activeIndex;

  const r = Math.max(0, Math.min(8, width / 2, height));
  const roundedTop = `M${x},${y + height} L${x},${y + r} Q${x},${y} ${x + r},${y} L${x + width - r},${y} Q${x + width},${y} ${x + width},${y + r} L${x + width},${y + height} Z`;
  const gid = `mono-bar-${index}`;

  if (!isActive) {
    return <path d={roundedTop} fill="var(--foreground)" fillOpacity={0.08} stroke="none" />;
  }
  return (
    <>
      <defs>
        <linearGradient id={gid} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%"   stopColor="var(--foreground)" stopOpacity={0.95} />
          <stop offset="100%" stopColor="var(--foreground)" stopOpacity={0.35} />
        </linearGradient>
      </defs>
      <path d={roundedTop} fill={`url(#${gid})`} stroke="none" />
      <text className="font-heading" fill="var(--foreground)" fontSize={13} fontWeight={600} textAnchor="middle" x={x + width / 2} y={y - 10}>
        {value.toLocaleString()}
      </text>
    </>
  );
}

function DayTick(props: { x?: number; y?: number; payload?: { value?: string } }) {
  const value = props.payload?.value ?? "";
  const active = value === activeDay;
  return (
    <text
      className={active ? "font-heading" : ""}
      dy="0.71em"
      fill={active ? "var(--foreground)" : "var(--muted-foreground)"}
      fontWeight={active ? 600 : 400}
      textAnchor="middle"
      x={props.x}
      y={props.y}
    >
      {value}
    </text>
  );
}

export function NetRevenueChart() {
  return (
    <DashboardCard className="gap-0 md:col-span-2">
      <CardHeader className="gap-2 min-w-0">
        <div className="flex flex-wrap items-center gap-2 min-w-0">
          <CardTitle className="truncate">Tasks completed</CardTitle>
          <Delta value={Number(growthPct)} variant="badge">
            <DeltaIcon variant="trend" />
            <DeltaValue />
          </Delta>
        </div>
        <CardDescription>Tasks closed per day, last 7 days.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="aspect-auto h-60 w-full md:h-80" config={chartConfig}>
          <BarChart accessibilityLayer data={chartRows} margin={{ top: 36, bottom: 8 }}>
            <XAxis axisLine={false} dataKey="day" interval={0} tick={<DayTick />} tickLine={false} tickMargin={10} />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} cursor={false} />
            <Bar dataKey="sales" radius={8} shape={<MonoBar />} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </DashboardCard>
  );
}
```

### `src/components/channel-sales-chart.tsx` — "Throughput" line chart

```tsx
"use client";

import { useId } from "react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import { formatDate } from "@/components/formater";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Delta, DeltaIcon, DeltaValue } from "@/components/delta";
import { DashboardCard } from "@/components/dashboard-card";

const VISIBLE_DAYS = 7;

type ThroughputChartRow = { date: string; created: number; completed: number };

const chartData: ThroughputChartRow[] = [
  { date: "2026-03-15", created: 22, completed: 18 },
  { date: "2026-03-16", created: 19, completed: 21 },
  { date: "2026-03-17", created: 27, completed: 20 },
  { date: "2026-03-18", created: 15, completed: 24 },
  { date: "2026-03-19", created: 31, completed: 22 },
  { date: "2026-03-20", created: 18, completed: 26 },
  { date: "2026-03-21", created: 9,  completed: 12 },
  { date: "2026-03-22", created: 7,  completed: 10 },
  { date: "2026-03-23", created: 24, completed: 19 },
  { date: "2026-03-24", created: 28, completed: 23 },
  { date: "2026-03-25", created: 20, completed: 27 },
  { date: "2026-03-26", created: 16, completed: 25 },
  { date: "2026-03-27", created: 12, completed: 14 },
  { date: "2026-03-28", created: 8,  completed: 11 },
  { date: "2026-03-29", created: 26, completed: 20 },
  { date: "2026-03-30", created: 30, completed: 24 },
  { date: "2026-03-31", created: 23, completed: 29 },
  { date: "2026-04-01", created: 17, completed: 26 },
  { date: "2026-04-02", created: 14, completed: 16 },
  { date: "2026-04-03", created: 10, completed: 13 },
  { date: "2026-04-04", created: 25, completed: 21 },
  { date: "2026-04-05", created: 29, completed: 23 },
  { date: "2026-04-06", created: 21, completed: 28 },
  { date: "2026-04-07", created: 18, completed: 30 },
  { date: "2026-04-08", created: 16, completed: 22 },
  { date: "2026-04-09", created: 27, completed: 24 },
  { date: "2026-04-10", created: 23, completed: 31 },
  { date: "2026-04-11", created: 20, completed: 33 },
  { date: "2026-04-12", created: 17, completed: 28 },
  { date: "2026-04-13", created: 22, completed: 35 },
];

const chartRows = chartData.slice(-VISIBLE_DAYS);

function rowTotal(row: ThroughputChartRow) { return row.created + row.completed; }
function growthPctForWindow(rows: readonly ThroughputChartRow[]) {
  const first = rows[0]; if (!first) return 0;
  const last = rows.at(-1); if (!last) return 0;
  const a = rowTotal(first), b = rowTotal(last);
  if (!a) return 0;
  return ((b - a) / a) * 100;
}
const growthPctNum = growthPctForWindow(chartRows);

const chartConfig = {
  completed: { label: "Completed", color: "var(--chart-1)" },
  created:   { label: "Created",   color: "var(--chart-2)" },
} satisfies ChartConfig;

export function ChannelSalesChart() {
  const chartUid = useId().replace(/:/g, "");
  const idLineGlow = `throughput-line-glow-${chartUid}`;
  return (
    <DashboardCard className="gap-0 md:col-span-2">
      <CardHeader>
        <div className="min-w-0 space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <CardTitle className="truncate">Throughput</CardTitle>
            <Delta value={growthPctNum} variant="badge">
              <DeltaIcon variant="trend" />
              <DeltaValue />
            </Delta>
          </div>
          <CardDescription>Tasks created vs completed, last {VISIBLE_DAYS} days.</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer className="aspect-auto h-60 w-full p-0 md:h-80" config={chartConfig}>
          <LineChart accessibilityLayer data={chartRows} margin={{ left: 12, right: 12, top: 8 }}>
            <CartesianGrid className="stroke-border" vertical={false} />
            <XAxis axisLine={false} dataKey="date" interval={0} tickFormatter={(v) => formatDate(String(v), "day-month")} tickLine={false} tickMargin={8} />
            <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
            <defs>
              <filter height="140%" id={idLineGlow} width="140%" x="-20%" y="-20%">
                <feGaussianBlur result="blur" stdDeviation="10" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            <Line dataKey="completed" dot={false} filter={`url(#${idLineGlow})`} stroke="var(--color-completed)" strokeWidth={2} type="monotone" />
            <Line dataKey="created"   dot={false} filter={`url(#${idLineGlow})`} stroke="var(--color-created)"   strokeWidth={2} type="monotone" />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </DashboardCard>
  );
}
```

### `src/components/upcoming-meetings.tsx` — interactive 21-day timeline

```tsx
"use client";

import { useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardCard } from "@/components/dashboard-card";
import {
  ArrowsUpDownIcon, BellAlertIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon,
  ClockIcon, FunnelIcon, MagnifyingGlassIcon, MapPinIcon, PlusIcon, UsersIcon,
  VideoCameraIcon, XMarkIcon,
} from "@/components/icons";

const VISIBLE_DAYS = 21;
const MIN_DAY_PX = 52;
const ROW_H = 48;
const BAR_SPAN = 3;
const COL = `(100% / ${VISIBLE_DAYS})`;

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"] as const;

const ANCHOR = { y: 2026, m: 4, d: 19 };
const TODAY = new Date(2026, 5, 2);

type MeetingType = "planning" | "review" | "sync" | "workshop";

const TYPE_META: Record<MeetingType, { label: string; dot: string; bar: string }> = {
  planning: { label: "Planning", dot: "bg-emerald-500", bar: "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300" },
  review:   { label: "Review",   dot: "bg-violet-500",  bar: "border-violet-500/30  bg-violet-500/10  text-violet-700  dark:text-violet-300" },
  sync:     { label: "Sync",     dot: "bg-sky-500",     bar: "border-sky-500/30     bg-sky-500/10     text-sky-700     dark:text-sky-300" },
  workshop: { label: "Workshop", dot: "bg-amber-500",   bar: "border-amber-500/30   bg-amber-500/10   text-amber-700   dark:text-amber-300" },
};

type Meeting = { id: string; title: string; date: Date; time: string; type: MeetingType; mode: "video" | "in-person" };

const SEED: Meeting[] = [
  { id: "m1", title: "Client Kickoff",       date: new Date(2026, 4, 27), time: "11:00 AM", type: "sync",     mode: "video" },
  { id: "m2", title: "1:1 with Mara",        date: new Date(2026, 4, 29), time: "3:30 PM",  type: "review",   mode: "video" },
  { id: "m3", title: "Sprint 15 Planning",   date: new Date(2026, 5, 2),  time: "2:00 PM",  type: "planning", mode: "video" },
  { id: "m4", title: "Design Review",        date: new Date(2026, 5, 3),  time: "10:30 AM", type: "review",   mode: "in-person" },
  { id: "m5", title: "Stakeholder Sync",     date: new Date(2026, 5, 4),  time: "9:00 AM",  type: "sync",     mode: "video" },
  { id: "m6", title: "Q3 Roadmap Workshop",  date: new Date(2026, 5, 5),  time: "1:00 PM",  type: "workshop", mode: "in-person" },
];

const DAY_MS = 86_400_000;
const startOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const diffDays = (a: Date, b: Date) => Math.round((startOfDay(a).getTime() - startOfDay(b).getTime()) / DAY_MS);

export function UpcomingMeetings() {
  const [offset, setOffset] = useState(0);
  const [meetings, setMeetings] = useState<Meeting[]>(SEED);
  const [draftCol, setDraftCol] = useState<number | null>(null);
  const [draftTitle, setDraftTitle] = useState("");
  const [draftTime, setDraftTime] = useState("12:00 PM");
  const [draftType, setDraftType] = useState<MeetingType>("sync");
  const inputRef = useRef<HTMLInputElement>(null);

  const windowStart = useMemo(() => new Date(ANCHOR.y, ANCHOR.m, ANCHOR.d + offset), [offset]);

  const days = useMemo(
    () =>
      Array.from({ length: VISIBLE_DAYS }, (_, i) => {
        const date = new Date(windowStart.getFullYear(), windowStart.getMonth(), windowStart.getDate() + i);
        const weekday = date.getDay();
        return { date, num: date.getDate(), weekend: weekday === 0 || weekday === 6, isToday: diffDays(date, TODAY) === 0 };
      }),
    [windowStart],
  );

  const headerMonth = `${MONTHS[windowStart.getMonth()]} ${windowStart.getFullYear()}`;

  const visible = useMemo(
    () =>
      meetings
        .map((m) => ({ ...m, col: diffDays(m.date, windowStart) }))
        .filter((m) => m.col >= 0 && m.col < VISIBLE_DAYS)
        .sort((a, b) => a.col - b.col || a.time.localeCompare(b.time)),
    [meetings, windowStart],
  );

  const rowCount = Math.max(visible.length, 1);
  const draftRow = visible.length;
  const bodyHeight = (rowCount + (draftCol !== null ? 1 : 0) + 1) * ROW_H;

  function openDraft(col: number) {
    setDraftCol(col);
    setDraftTitle("");
    setDraftTime("12:00 PM");
    setDraftType("sync");
    requestAnimationFrame(() => inputRef.current?.focus());
  }

  function saveDraft() {
    if (draftCol === null) return;
    const title = draftTitle.trim();
    if (!title) { inputRef.current?.focus(); return; }
    const date = new Date(windowStart.getFullYear(), windowStart.getMonth(), windowStart.getDate() + draftCol);
    setMeetings((prev) => [
      ...prev,
      {
        id: `m${prev.length + 1}-${draftCol}`,
        title, date, time: draftTime, type: draftType,
        mode: draftType === "workshop" || draftType === "review" ? "in-person" : "video",
      },
    ]);
    setDraftCol(null);
  }

  function removeMeeting(id: string) {
    setMeetings((prev) => prev.filter((m) => m.id !== id));
  }

  return (
    <DashboardCard className="gap-0 md:col-span-2 lg:col-span-4">
      <CardHeader className="flex flex-row items-start justify-between gap-2 border-b min-w-0">
        <div className="space-y-1 min-w-0">
          <CardTitle className="flex items-center gap-2 text-base [&>svg]:size-4 [&>svg]:text-muted-foreground min-w-0">
            <BellAlertIcon className="shrink-0" />
            <span className="truncate">Upcoming meetings</span>
          </CardTitle>
          <CardDescription className="truncate">Click any day on the timeline to schedule a meeting.</CardDescription>
        </div>
        <div className="flex items-center gap-1">
          <Button aria-label="Filter" size="icon-sm" variant="ghost"><FunnelIcon className="size-4" /></Button>
          <Button aria-label="Sort"   size="icon-sm" variant="ghost"><ArrowsUpDownIcon className="size-4" /></Button>
          <Button aria-label="Search" size="icon-sm" variant="ghost"><MagnifyingGlassIcon className="size-4" /></Button>
        </div>
      </CardHeader>

      <div className="flex items-center justify-between gap-2 px-4 py-3 md:px-6">
        <span className="font-heading font-medium text-sm tracking-tight">{headerMonth}</span>
        <div className="flex items-center gap-1">
          <Button className="gap-1 text-muted-foreground" disabled size="sm" variant="ghost">
            Month <ChevronDownIcon className="size-3.5" />
          </Button>
          <div className="flex items-center">
            <Button aria-label="Previous week" onClick={() => setOffset((o) => o - 7)} size="icon-sm" variant="ghost"><ChevronLeftIcon className="size-4" /></Button>
            <Button onClick={() => setOffset(0)} size="sm" variant="ghost">Today</Button>
            <Button aria-label="Next week" onClick={() => setOffset((o) => o + 7)} size="icon-sm" variant="ghost"><ChevronRightIcon className="size-4" /></Button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto pb-4">
        <div style={{ minWidth: VISIBLE_DAYS * MIN_DAY_PX }}>
          <div className="grid border-y bg-background" style={{ gridTemplateColumns: `repeat(${VISIBLE_DAYS}, minmax(0, 1fr))` }}>
            {days.map((d, i) => (
              <div className={cn("flex h-9 flex-col items-center justify-center border-l text-xs", i === 0 && "border-l-0", d.weekend && "bg-muted/40")} key={i}>
                <span className={cn("flex size-6 items-center justify-center rounded-full tabular-nums", d.isToday ? "bg-primary font-medium text-primary-foreground" : "text-muted-foreground")}>
                  {d.num}
                </span>
              </div>
            ))}
          </div>

          <div className="relative" style={{ height: bodyHeight }}>
            <div className="absolute inset-0 grid" style={{ gridTemplateColumns: `repeat(${VISIBLE_DAYS}, minmax(0, 1fr))` }}>
              {days.map((d, i) => (
                <button
                  aria-label={`Add meeting on ${MONTHS[d.date.getMonth()]} ${d.num}`}
                  className={cn("group/cell relative border-l outline-none", i === 0 && "border-l-0", d.weekend && "bg-muted/40", "hover:bg-accent/60 focus-visible:bg-accent/60")}
                  key={i}
                  onClick={() => openDraft(i)}
                  type="button"
                >
                  <PlusIcon className="-translate-x-1/2 pointer-events-none absolute top-2 left-1/2 size-4 text-muted-foreground opacity-0 transition-opacity group-hover/cell:opacity-100" />
                </button>
              ))}
            </div>

            {days.some((d) => d.isToday) && (
              <div
                className="pointer-events-none absolute top-0 bottom-0 z-10 w-px bg-primary/40"
                style={{ left: `calc((${days.findIndex((d) => d.isToday)} + 0.5) * ${COL})` }}
              />
            )}

            {visible.map((m, row) => {
              const meta = TYPE_META[m.type];
              return (
                <div
                  className={cn("group/bar absolute z-20 flex flex-col justify-center gap-0.5 rounded-md border px-2 py-1 shadow-sm", meta.bar)}
                  key={m.id}
                  style={{
                    left: `calc(${m.col} * ${COL} + 4px)`,
                    top: row * ROW_H + 6,
                    width: `calc(${BAR_SPAN} * ${COL} - 8px)`,
                    height: ROW_H - 12,
                  }}
                >
                  <div className="flex items-center gap-1">
                    <span className={cn("size-1.5 shrink-0 rounded-full", meta.dot)} />
                    <span className="truncate font-medium text-xs leading-none">{m.title}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] opacity-80">
                    {m.mode === "video" ? <VideoCameraIcon className="size-3 shrink-0" /> : <MapPinIcon className="size-3 shrink-0" />}
                    <ClockIcon className="size-3 shrink-0" />
                    <span className="tabular-nums">{m.time}</span>
                  </div>
                  <button
                    aria-label="Remove meeting"
                    className="-top-1.5 -right-1.5 absolute flex size-4 items-center justify-center rounded-full bg-foreground text-background opacity-0 transition-opacity group-hover/bar:opacity-100"
                    onClick={() => removeMeeting(m.id)}
                    type="button"
                  >
                    <XMarkIcon className="size-3" />
                  </button>
                </div>
              );
            })}

            {draftCol !== null && (
              <div
                className="absolute z-30 w-60 rounded-lg border bg-popover p-3 shadow-lg"
                style={draftCol <= VISIBLE_DAYS - 6
                  ? { left: `calc(${draftCol} * ${COL})`, top: draftRow * ROW_H + 6 }
                  : { right: `calc(${VISIBLE_DAYS - 1 - draftCol} * ${COL})`, top: draftRow * ROW_H + 6 }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-xs">
                    New meeting · {MONTHS[days[draftCol].date.getMonth()].slice(0, 3)} {days[draftCol].num}
                  </span>
                  <button aria-label="Cancel" className="text-muted-foreground hover:text-foreground" onClick={() => setDraftCol(null)} type="button">
                    <XMarkIcon className="size-4" />
                  </button>
                </div>
                <input
                  className="mt-2 h-8 w-full rounded-md border bg-background px-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                  onChange={(e) => setDraftTitle(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") saveDraft(); if (e.key === "Escape") setDraftCol(null); }}
                  placeholder="Meeting title"
                  ref={inputRef}
                  value={draftTitle}
                />
                <input
                  className="mt-2 h-8 w-full rounded-md border bg-background px-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                  onChange={(e) => setDraftTime(e.target.value)}
                  placeholder="Time (e.g. 2:00 PM)"
                  value={draftTime}
                />
                <div className="mt-2 flex flex-wrap gap-1">
                  {(Object.keys(TYPE_META) as MeetingType[]).map((t) => (
                    <button
                      className={cn("flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] transition-colors",
                        draftType === t ? "border-foreground/30 bg-accent" : "border-transparent text-muted-foreground hover:bg-accent/60")}
                      key={t}
                      onClick={() => setDraftType(t)}
                      type="button"
                    >
                      <span className={cn("size-1.5 rounded-full", TYPE_META[t].dot)} />
                      {TYPE_META[t].label}
                    </button>
                  ))}
                </div>
                <div className="mt-3 flex justify-end gap-2">
                  <Button onClick={() => setDraftCol(null)} size="sm" variant="ghost">Cancel</Button>
                  <Button onClick={saveDraft} size="sm">Add meeting</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 border-t px-4 py-3 md:px-6">
        <span className="inline-flex items-center gap-1.5 text-muted-foreground text-xs">
          <UsersIcon className="size-3.5" />
          {meetings.length} meetings scheduled
        </span>
        <div className="flex flex-wrap items-center gap-3">
          {(Object.keys(TYPE_META) as MeetingType[]).map((t) => (
            <span className="inline-flex items-center gap-1.5 text-muted-foreground text-xs" key={t}>
              <span className={cn("size-2 rounded-full", TYPE_META[t].dot)} />
              {TYPE_META[t].label}
            </span>
          ))}
        </div>
      </div>
    </DashboardCard>
  );
}
```

### `src/components/dashboard-invoices.tsx` — Active projects table

```tsx
"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DashboardCard } from "@/components/dashboard-card";
import { ArrowRightIcon } from "lucide-react";

type ProjectStatus = "On track" | "At risk" | "In review" | "Blocked";

type Project = { id: string; name: string; lead: string; progress: number; status: ProjectStatus };

const projects: Project[] = [
  { id: "PRJ-204", name: "Mobile App Revamp", lead: "Alex Chen",  progress: 78, status: "On track" },
  { id: "PRJ-198", name: "Q3 Marketing Site", lead: "Mara Liu",   progress: 64, status: "In review" },
  { id: "PRJ-211", name: "Data Pipeline v2",  lead: "Sam Okafor", progress: 41, status: "At risk" },
  { id: "PRJ-187", name: "Onboarding Flow",   lead: "Priya Nair", progress: 23, status: "Blocked" },
];

const statusVariant: Record<ProjectStatus, React.ComponentProps<typeof Badge>["variant"]> = {
  "On track":  "secondary",
  "In review": "outline",
  "At risk":   "secondary",
  Blocked:     "destructive",
};

export function DashboardInvoices() {
  return (
    <DashboardCard className="relative gap-0 md:col-span-2">
      <CardHeader className="border-b">
        <CardTitle className="text-base">Active projects</CardTitle>
        <CardDescription>Progress and status across your live work.</CardDescription>
      </CardHeader>
      <CardContent className="mask-b-from-50% mask-b-to-100% px-0">
        <Table>
          <TableCaption className="sr-only">Active projects with lead, progress, and status.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="ps-6">Project</TableHead>
              <TableHead>Lead</TableHead>
              <TableHead className="w-32">Progress</TableHead>
              <TableHead className="pe-6 text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((p) => (
              <TableRow className="h-12" key={p.id}>
                <TableCell className="max-w-40 truncate ps-6 font-medium">
                  {p.name}
                  <span className="ms-2 text-muted-foreground text-xs tabular-nums">{p.id}</span>
                </TableCell>
                <TableCell className="text-muted-foreground">{p.lead}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-16 overflow-hidden rounded-full bg-muted">
                      <div className="h-full rounded-full bg-foreground/70" style={{ width: `${p.progress}%` }} />
                    </div>
                    <span className="text-muted-foreground text-xs tabular-nums">{p.progress}%</span>
                  </div>
                </TableCell>
                <TableCell className="pe-6 text-right">
                  <Badge variant={statusVariant[p.status]}>{p.status}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <div className="mask-t-from-30% absolute inset-x-0 bottom-0 flex h-1/5 items-center justify-center bg-background">
        <Button asChild className="relative" variant="ghost">
          <a href="/#">
            View all projects
            <ArrowRightIcon aria-hidden="true" />
          </a>
        </Button>
      </div>
    </DashboardCard>
  );
}
```

### `src/components/billing-health.tsx` — Project health empty state

```tsx
import { Button } from "@/components/ui/button";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";
import { DashboardCard } from "@/components/dashboard-card";
import { CircleCheckIcon, ArrowRightIcon } from "lucide-react";

export function BillingHealth() {
  return (
    <DashboardCard className="gap-0">
      <CardHeader className="border-b">
        <CardTitle className="text-balance text-base">Project health</CardTitle>
        <CardDescription className="text-pretty">
          No blockers need your attention right now.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex h-full items-center px-0">
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <CircleCheckIcon aria-hidden="true" />
            </EmptyMedia>
            <EmptyTitle>All projects on track.</EmptyTitle>
            <EmptyDescription className="text-xs">
              No overdue milestones or blocked tasks in this snapshot.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button asChild variant="ghost">
              <a href="/#">
                Review at-risk projects
                <ArrowRightIcon aria-hidden="true" />
              </a>
            </Button>
          </EmptyContent>
        </Empty>
      </CardContent>
    </DashboardCard>
  );
}
```

### `src/components/dashboard-activity.tsx` — Activity feed

```tsx
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardCard } from "@/components/dashboard-card";
import { CircleCheckBigIcon, UserPlusIcon, FileTextIcon, RocketIcon } from "lucide-react";

const items = [
  { title: 'Mara completed "Hero redesign"',        time: "About 2 hours ago", icon: <CircleCheckBigIcon /> },
  { title: "Alex joined Mobile App Revamp",          time: "This morning",      icon: <UserPlusIcon /> },
  { title: "Sprint 14 summary exported",             time: "Yesterday",         icon: <FileTextIcon /> },
  { title: "Data Pipeline v2 shipped to staging",    time: "2 days ago",        icon: <RocketIcon /> },
] as const;

export function DashboardActivity() {
  return (
    <DashboardCard className="gap-0">
      <CardHeader className="border-b">
        <CardTitle>Activity</CardTitle>
        <CardDescription>Latest updates across your projects.</CardDescription>
      </CardHeader>
      <CardContent className="px-0">
        <ul className="flex flex-col divide-y divide-border">
          {items.map((item) => (
            <li className="flex h-16 items-center gap-3 px-6" key={item.title}>
              <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center [&_svg]:size-4">
                {item.icon}
              </span>
              <div className="min-w-0 flex-1 space-y-1">
                <p className="line-clamp-1 text-pretty text-foreground text-sm leading-snug">{item.title}</p>
                <p className="text-muted-foreground text-xs">{item.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </DashboardCard>
  );
}
```

### `src/components/dashboard.tsx` — page composition

```tsx
import { BillingHealth } from "@/components/billing-health";
import { ChannelSalesChart } from "@/components/channel-sales-chart";
import { DashboardActivity } from "@/components/dashboard-activity";
import { DashboardInvoices } from "@/components/dashboard-invoices";
import { NetRevenueChart } from "@/components/net-revenue-chart";
import { DashboardStats } from "@/components/stats";
import { UpcomingMeetings } from "@/components/upcoming-meetings";

export function Dashboard() {
  return (
    <div className="grid grid-cols-1 gap-px bg-border p-px md:grid-cols-2 lg:grid-cols-4 min-w-0 overflow-hidden">
      <DashboardStats />
      <NetRevenueChart />
      <ChannelSalesChart />
      <UpcomingMeetings />
      <DashboardInvoices />
      <BillingHealth />
      <DashboardActivity />
    </div>
  );
}
```

### `public/logo.svg`

A Fivefold wordmark SVG, `viewBox="0 0 1980.3 422.9"`. Drop your brand wordmark there — `logo.tsx` masks it via CSS so the source color does not matter. Aspect ratio should be close to `1980:423` to match the `aspect-[1980/423]` set on `<Logo />`.
