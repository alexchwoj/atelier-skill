---
version: "1"
name: "Dashboard 002 — Project Management"
description: "A pinned Next.js 16 + Tailwind v4 + shadcn project-management dashboard. Neutral oklch palette, status-only color (emerald / violet / sky / amber / rose), Sora display + Plus Jakarta Sans body + Geist Mono numerics, flat shadowless cards in a 1px gap-px bg-border grid. Sidebar pushes content — no overlay, no inset, no float."
colors:
  background: "oklch(1 0 0)"
  foreground: "oklch(0.145 0 0)"
  card: "oklch(1 0 0)"
  primary: "oklch(0.205 0 0)"
  muted: "oklch(0.97 0 0)"
  muted-foreground: "oklch(0.556 0 0)"
  border: "oklch(0.922 0 0)"
  ring: "oklch(0.708 0 0)"
  destructive: "oklch(0.577 0.245 27.325)"
  chart-1: "oklch(0.87 0 0)"
  chart-2: "oklch(0.556 0 0)"
  chart-3: "oklch(0.439 0 0)"
  chart-4: "oklch(0.371 0 0)"
  chart-5: "oklch(0.269 0 0)"
  status-emerald: "Tailwind emerald-500 — Planning / positive delta"
  status-violet: "Tailwind violet-500 — Review"
  status-sky: "Tailwind sky-500 — Sync"
  status-amber: "Tailwind amber-500 — Workshop"
  status-rose: "Tailwind rose-500 — overdue / negative delta"
typography:
  heading:
    fontFamily: "Sora"
    variable: "--font-heading"
    role: "card titles, KPI numerals, chart axis labels, month headers"
    tracking: "-0.015em (via .font-heading)"
  body:
    fontFamily: "Plus Jakarta Sans"
    variable: "--font-sans"
    weights: "300 / 400 / 500 / 600"
    role: "body, nav, descriptions, table cells"
    features: "ss01, cv01, cv03 OpenType set"
  mono:
    fontFamily: "Geist Mono"
    variable: "--font-geist-mono"
    role: "tabular-nums fallback, kbd hints, raw IDs"
spacing:
  base: "Tailwind v4 default (4px)"
  radius: "0.625rem token, but cards override to rounded-none (square, museum)"
  card-grid-gap: "1px (gap-px) on bg-border — the border IS the gap"
  sidebar-width: "16rem expanded, icon-collapsed via collapsible=\"icon\""
  header-height: "h-14 (56px) sticky, bg-background/95 backdrop-blur-sm"
rounded:
  none: "0px — every dashboard card, every chart frame, every table cell"
  full: "9999px — avatar, status dots, hover +new-task button"
  sm: "calc(var(--radius) * 0.6) — kbd hints, badges"
components:
  app-shell: "SidebarProvider + AppSidebar (variant=\"sidebar\", collapsible=\"icon\") + SidebarInset wrapping AppHeader + content"
  dashboard-card: "Card override → rounded-none, bg-background, shadow-none, ring-0 — the canonical surface"
  kpi-stats: "4-up KPI row with label / value (Sora 2xl tabular-nums) / Delta badge (emerald or rose tinted at 10% opacity)"
  tasks-completed-chart: "Recharts bar chart with MonoBar custom shape, active bar highlighted via font-heading label"
  throughput-chart: "Recharts line chart, Completed (chart-1) vs Created (chart-2)"
  upcoming-meetings-timeline: "21-day interactive timeline with minmax(0,1fr) columns, % / calc() positioned bars, +new-cell hover affordance"
  projects-table: "Active projects table, status pills (emerald/violet/sky/amber), inline progress"
  health-empty: "Project health empty-state card with ShieldCheckIcon"
  activity-feed: "Right-rail Activity component, avatar + verb + timestamp"
  delta: "Compound Delta / DeltaIcon / DeltaValue context — variant=\"badge\" emerald/rose tinted, default inline gray→colored"
---

# Dashboard 002 — Project Management

> Fivefold showcase. Pairs with the Dashboard 002 prompt — a verbatim Next.js 16 source bundle. Use this file to keep Dashboard 002's operator-tool restraint when you extend it: it should always read as a cockpit you work in, never a marketing comp.

## Overview

Dashboard 002 is a flat, neutral, oklch-token project-management dashboard built on Next.js 16 + Tailwind v4 + shadcn primitives. The palette is a near-monochrome neutral ramp, color appears only as status (emerald / violet / sky / amber / rose), cards are shadowless and square, and the sidebar pushes the main content instead of overlaying it. The atmosphere is library quiet: paper-white background, hairline borders at `{colors.border}`, no gradients, no glass, no decorative glow. Every visual decision is sized to a working operator who keeps the app open for eight hours a day.

The governing decision: **the chrome is the canvas — the data is the design.** Most "premium" PM dashboards still chase consumer aesthetics — gradient KPI cards, drop-shadow stacks, accent-tinted backgrounds, hero-sized hello messages. Dashboard 002 refuses all of that. It strips the surface to oklch-neutral, kills shadows, kills radii on cards, and bleeds every cell flush to the next via a 1px `gap-px bg-border` grid — the border IS the gap. Color is rationed: status-only, never decorative. The result is a frame so quiet that the only thing your eye can hold is the work: the 12 active projects, the 184 completed tasks, the 7 overdue items, the 21-day timeline. It's a cockpit, not a brochure.

The system extends across surfaces by repetition, not invention. The same `DashboardCard` override carries KPI tiles, both charts, the timeline, the projects table, the health empty-state, and the activity feed. The same five status hues recur in the timeline bars, the project pills, and the Delta chips. The same Sora numeral discipline lands on KPI values, axis labels, and month headers. New screens (sprints, calendar, reports) inherit shell + tokens without inventing chrome, so the operator memorises the system once and then forgets it.

**Key Characteristics:**

- **Neutral oklch palette** — `{colors.background}` over `{colors.foreground}`, hairlines at `{colors.border}`. Dark mode is a single token flip, not a re-paint. No hue, no gradient.
- **Status-only color** — emerald (Planning / +delta), violet (Review), sky (Sync), amber (Workshop), rose (overdue / -delta). Tints sit at 10% opacity. Hue communicates state, never rank or brand.
- **Three families, three roles** — Sora numerals + Plus Jakarta prose + Geist Mono fallback, wired through Tailwind v4 `@theme inline` tokens.
- **Square, shadowless, ring-less cards** — `DashboardCard` overrides shadcn's default to `rounded-none bg-background shadow-none ring-0`. No soft-card aesthetic anywhere.
- **1px bg-border grid** — the dashboard grid is `gap-px bg-border p-px` so dividers between cards are the page background bleeding through a hairline. No card-to-card margin, no inner shadow seam.
- **Sidebar pushes content** — `variant="sidebar"` + `collapsible="icon"`, never floating, never inset. `SidebarInset` owns the right pane; `min-w-0` is wired at every nesting level so titles never clip at ≥1024px.
- **Pinned stack** — Next.js 16.2.7, React 19.2.4, Tailwind v4, shadcn 4.10, Recharts 3.8, Radix UI, lucide-react, tw-animate-css. No substitutions.
- **Operator typography scale** — KPI labels are *quieter* (`text-xs tracking-wide font-normal`) than KPI values (`font-heading font-semibold text-2xl tabular-nums`); the number leads, the label follows.

## Colors

> **Source pages analyzed:** `globals.css` (light + dark blocks), `delta.tsx`, `upcoming-meetings.tsx` TYPE_META — every token quoted verbatim. Status hues come from Tailwind 500 stops, used only at 10% tint.

### Surface

- `{colors.background}` `oklch(1 0 0)` — pure paper white. The page, every card surface, every chart frame. Cards inherit background — no card tint, no zebra.
- `{colors.card}` `oklch(1 0 0)` — same as background in light mode. Dark mode lifts to `oklch(0.205 0 0)` so cards float one stop above the page.
- `{colors.muted}` `oklch(0.97 0 0)` — secondary surface for progress-bar troughs, weekend cells (`bg-muted/40`), kbd backplate.

### Text

- `{colors.foreground}` `oklch(0.145 0 0)` — near-black for body, KPI values, project names. 19.5:1 contrast on white, AAA at every size.
- `{colors.muted-foreground}` `oklch(0.556 0 0)` — secondary copy, axis labels, KPI delta context ("vs last week"), table headers, footer micro-copy.
- `{colors.primary-foreground}` `oklch(0.985 0 0)` — the white that sits on `{colors.primary}` buttons and the today-pill in the timeline.

### Hairlines & Borders

- `{colors.border}` `oklch(0.922 0 0)` — the single most-used token on the page. Defines every cell boundary, header underline, separator, table row divider, sidebar edge, and the 1px gap that reads as the grid itself.
- `{colors.input}` `oklch(0.922 0 0)` — matches border. Inputs and cards share the same hairline so form fields blend into the surface.
- `{colors.ring}` `oklch(0.708 0 0)` — focus-visible ring at 50% opacity (`ring-ring/50`). The only "interaction-coloured" non-status token.

### Status (Tailwind 500 at 10% tint)

- `status-emerald` — Planning meetings, positive Delta chips, "On track". Bar: `bg-emerald-500/10 text-emerald-700 dark:text-emerald-300`.
- `status-violet` — Review meetings. Same 10% tint pattern.
- `status-sky` — Sync meetings. Same 10% tint pattern.
- `status-amber` — Workshop meetings, "At risk". Same 10% tint pattern.
- `status-rose` — Overdue tasks, negative Delta chips, "Blocked". Inline variant uses `text-rose-600 dark:text-rose-400`; badge variant uses `bg-red-500/10 text-red-500` (Delta wires through `red-500` shorthand — rose is the conceptual cue).

### Chart Ramp

- `{colors.chart-1}` `oklch(0.87 0 0)` → `{colors.chart-5}` `oklch(0.269 0 0)` — five-stop neutral ramp. Tasks-Completed bars + Throughput lines stay tonal, not chromatic. Throughput "Completed" line uses chart-1, "Created" uses chart-2.

### Destructive

- `{colors.destructive}` `oklch(0.577 0.245 27.325)` — the only saturated color in the system. Reserved for `variant="destructive"` (Log out menu item, delete confirmations). Dark mode lifts to `oklch(0.704 0.191 22.216)`.

**Constraint** (verbatim from prompt): "Color is **status-only**. Cards are **flat, square, shadowless**." Hue never communicates rank or brand — it only communicates state.

## Typography

### Font Family

- **Sora** — display + numerals. CSS stack: `var(--font-heading), system-ui, sans-serif`. Activated via the `.font-heading` utility which also applies `letter-spacing: -0.015em`.
- **Plus Jakarta Sans** — body. CSS stack: `var(--font-sans), system-ui, sans-serif`. Weights 300 / 400 / 500 / 600. OpenType features `ss01`, `cv01`, `cv03` enabled on `html` so digit shapes and alternates stay consistent across the page.
- **Geist Mono** — system / fallback. CSS stack: `var(--font-geist-mono), ui-monospace, monospace`. Used where `tabular-nums` isn't enough (IDs, raw timestamps, kbd content).

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `kpi.value` | 24px (`text-2xl`) | 600 (`font-semibold`) | 1.2 | `-0.015em` | KPI numerals, e.g. "184" |
| `kpi.label` | 12px (`text-xs`) | 400 (`font-normal`) | 1.4 | `tracking-wide` | "Active projects", "Overdue tasks" |
| `card.title` | 16px (`text-base`) | 500 | 1.4 | default | "Active projects", "Upcoming meetings", "Throughput" |
| `card.description` | 14px (`text-sm`) | 400 | 1.5 | default | "Tasks closed per day, last 7 days." |
| `month.header` | 14px (`text-sm`) | 500 | 1.3 | `tracking-tight` | "May 2026" above the 21-day timeline |
| `chart.axis` | 12px | 400 (or 600 when active) | 1.2 | default | Recharts axis tick, active day swaps to Sora 600 |
| `body.default` | 14–16px | 400 | 1.5 | default | Nav labels, descriptions, table cells (Plus Jakarta) |
| `nav.label` | 14px | 400 | 1.4 | default | Sidebar menu buttons at `text-foreground/75` |
| `kbd` | 12px (`text-xs`) | 500 | 1 | default | "⌘ B" shortcut hints in tooltips |
| `meeting.title` | 12px (`text-xs`) | 500 | 1 | default | Timeline bar label |
| `meeting.time` | 10px (`text-[10px]`) | 400 | 1 | default | Timeline bar time row |
| `footer.copyright` | 9px (`text-[9px]`) | 400 | 1.3 | default | "© 2026 Fivefold · Project Management" |

### Principles

- **The number leads, the label follows.** KPI values are larger and heavier than their labels. Reverse this and the page reads as marketing.
- **Negative tracking only at display sizes.** The `-0.015em` on `.font-heading` applies to KPI values and month headers — never to 12px labels, which need positive room to breathe.
- **`tabular-nums` is mandatory on every numeric.** KPI values, Delta chips, progress percent, timeline day numbers, ID columns. No proportional digits anywhere a number changes.
- **Active state swaps family, not size.** The active bar's day tick swaps from Plus Jakarta to Sora `font-heading` (and weight 400 → 600), but stays at the same px size. The size scale stays calm; emphasis comes from family + weight.
- **Footer micro-copy at 9px is intentional.** The sidebar copyright is sized so it never competes with nav. If it reads as type, the system has failed.
- **Weight 500 is allowed but never decorative.** Used for card titles, month headers, kbd, meeting bar labels. Not for body, not for nav, not for descriptions — those stay at 400.
- **No paragraph copy above 16px.** This is an operator surface, not editorial. Long-form text doesn't belong here; if a description grows past two lines, it's wrong.

### Note on Font Substitutes

If Sora is unavailable, fall back to Inter Display or Manrope at the same `-0.015em` tracking; do not let the system synthesize bold from a missing weight. If Plus Jakarta Sans is unavailable, Inter at weight 400/500 is the closest match but tighten body line-height by 0.05 because Inter's x-height runs taller. If Geist Mono is unavailable, JetBrains Mono works — but verify tabular-num alignment on the throughput chart's tooltip column, which is the most digit-dense surface.

## Layout

### Spacing System

- **Base unit:** Tailwind v4 default 4px scale, no custom multipliers. Every gap, padding, and offset resolves to a multiple of 4px.
- **Card padding:** `px-4 md:px-6` on header / footer rows; `px-0` on content rows that contain tables (so cells own their own padding via `ps-6` / `pe-6`).
- **Header height:** `h-14` (56px), sticky, sized to a single line of breadcrumb + a row of `size-icon-sm` buttons.
- **Sidebar width:** `16rem` (256px) expanded; icon-rail when collapsed. The trigger surfaces the `⌘B` shortcut in its tooltip.
- **Card-grid gap:** `gap-px` (1px) on `bg-border` — the page's most-repeated rhythm.
- **Chart heights:** `h-60` (240px) on small screens, `md:h-80` (320px) at md and up. Aspect is free-running (`aspect-auto`).
- **Timeline row height:** `48px` constant per `ROW_H`; minimum day-column width `52px` per `MIN_DAY_PX` before horizontal scroll kicks in.

### Grid & Container

- **Outer page:** no `max-width`. The dashboard bleeds flush to the edges of `SidebarInset`. Marketing-style containers are forbidden.
- **Dashboard grid:** `grid grid-cols-1 gap-px bg-border p-px md:grid-cols-2 lg:grid-cols-4 min-w-0 overflow-hidden`. Cards span via `md:col-span-2` / `lg:col-span-4` rather than custom widths.
- **Timeline columns:** `grid-template-columns: repeat(21, minmax(0, 1fr))` — fluid columns that scale with the inset; bars positioned by `%` / `calc()`, never by fixed pixel days.
- **App-wrapper variable:** `--app-wrapper-max-width: 80rem` is declared on `SidebarProvider` but intentionally not applied to the dashboard grid (kept for future marketing-page reuse only).

### Whitespace Philosophy

Negative space in Dashboard 002 is **the hairline, not the margin.** Every card sits flush against its neighbor with one pixel of `{colors.border}` between them; the white space you "see" is actually the page bleeding through the gap. This inverts the SaaS default of soft cards floating in a padded canvas — here the canvas is the chrome, the cards are the canvas, and the space between them is structural, not decorative. Inside cards, padding is tight (`px-4 md:px-6`), descriptions are short, and the only place the design lets the page breathe is the 80px of vertical air above an active bar so the Sora label can land. Everywhere else, space is rationed.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | `shadow-none ring-0` | Every `DashboardCard` — KPI, charts, timeline, table, health, activity feed. |
| Hairline | `border` at `{colors.border}` (1px) | Card frames, table rows, header / footer underlines, the 1px grid gap. |
| Backdrop blur | `bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50` | `AppHeader` only — sticky, blurs content scrolling underneath. |
| Soft pop | `shadow-sm` | Timeline meeting bars (the only intra-card elevation in the system); `shadow-lg` on the draft popover. |

**Shadow philosophy.** Shadow is reserved for *elements that float over the timeline plane* — meeting bars resting above their day columns, the draft-meeting popover that overlays the grid. Cards themselves never cast a shadow because they don't float; they are inset into the chrome. Removing shadow from cards is the single most important refusal in the system: it's what stops Dashboard 002 from reading as another SaaS comp.

**Decorative depth.**

- `DecorIcon` "+" glyphs sit at card corners in `{colors.muted-foreground}` at 1px stroke. Pointer-events disabled — they are pure typographic chrome.
- The throughput line chart uses a feGaussianBlur filter (`stdDeviation="10"`) to give the line a faint halo without lifting it off the surface — depth applied to ink, not to surface.
- The today-marker on the timeline is a 1px vertical line at `bg-primary/40`, z-10, pointer-events-none — depth as positional hint, not as glow.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `none` | 0px | Every `DashboardCard`, every chart frame, every table cell, every section divider. |
| `sm` | `calc(var(--radius) * 0.6)` ≈ 6px | `Kbd` hints, status pills (Badge), small chips. |
| `md` | `calc(var(--radius) * 0.8)` ≈ 8px | Inputs inside the draft-meeting popover, meeting timeline bars (`rounded-md`). |
| `lg` | `var(--radius)` = 10px | Draft-meeting popover (`rounded-lg`). |
| `full` | 9999px | Avatar, status dots, today-pill in timeline header, progress-bar trough + fill, hover-only `+new-task` affordance. |

### Photography Geometry

- **No photography.** Dashboard 002 ships no images, illustrations, or marketing visuals. The only image-class assets are `public/logo.svg` (rendered via CSS-mask + `bg-current` so the wordmark inherits theme color) and `https://avatar.vercel.sh/...` for the demo user avatar (replaceable with any URL).
- **Avatar crop.** Always circular (`rounded-full`). Sizes: `size-8` in the header trigger, `size-10` in the dropdown label.
- **Logo behavior.** The full wordmark `Logo` renders at `h-4` in the expanded sidebar; the `LogoMark` glyph renders at `size-5` in the icon-rail collapsed state. Both use `aspect-[1980/423]` for the wordmark and inherit color via `bg-current`. No raster fallback.
- **Loading strategy.** No `loading="lazy"` is necessary because no `<img>` tags ship outside the avatar URL, which is decorative and fetched eagerly to avoid a layout shift in the header.

## Components

### Buttons

- **Primary action** `{component.button-primary}` — shadcn `Button` default. Solid `{colors.primary}` fill, `{colors.primary-foreground}` text, `rounded-md`. Used for "Add meeting" in the draft popover. Active: `{colors.primary}` darkens 8% via Tailwind's default `active` state. Focus-visible: `ring-2 ring-ring/50`.
- **Secondary / outline** `{component.button-outline}` — `border` at `{colors.border}` over `{colors.background}`. Used by the header's "+ new task" and "notifications" buttons (`size="icon-sm"`, `size-7`). Active: background swaps to `{colors.accent}`. Focus-visible: same `ring-ring/50`.
- **Ghost / utility** `{component.button-ghost}` — transparent, `{colors.foreground}` text. Used inside the timeline header (Month dropdown, Today, prev/next), the "View all projects" link, the project-health "Review at-risk projects" link. Active: `bg-accent`. Focus-visible: `ring-ring/50`.
- **Destructive** `{component.button-destructive}` — `{colors.destructive}` fill, white text. Used only by the "Log out" item in the user dropdown via `variant="destructive"` on `DropdownMenuItem` (shares button token system).

### Cards & Containers

- **`DashboardCard`** `{component.dashboard-card}` — the canonical surface. `rounded-none bg-background shadow-none ring-0`. Every dashboard tile uses it. Card title row may set `gap-0` to collapse internal vertical rhythm when the card owns its own dividers (charts, timeline, table).
- **KPI tile** `{component.kpi-tile}` — `DashboardCard` + `CardHeader` (`flex-row items-center justify-between`, `font-normal text-xs tracking-wide` label) + `CardContent` (`font-heading font-semibold text-2xl tabular-nums` value) + `CardFooter` (`gap-1 text-xs`, a `Delta` chip + "vs last week"). Span: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`.
- **Chart card** `{component.chart-card}` — `DashboardCard className="gap-0 md:col-span-2"`. Header carries title + Delta badge in a `flex-wrap min-w-0` row (`truncate` on title), description below. Content owns the Recharts `ChartContainer` at `aspect-auto h-60 md:h-80`.
- **Empty-state card** `{component.empty-card}` — `DashboardCard className="gap-0"` wrapping shadcn's `Empty` primitive with `EmptyMedia variant="icon"` (CircleCheck), `EmptyTitle`, `EmptyDescription`, `EmptyContent` (ghost button with arrow). Used by "Project health" when no blockers exist.
- **Timeline card** `{component.timeline-card}` — `DashboardCard className="gap-0 md:col-span-2 lg:col-span-4"`. Header (title + filter / sort / search icon buttons) → month sub-header (Month dropdown + Today + prev/next) → scrollable 21-column grid → legend footer.

### Inputs & Forms

- **Draft-meeting input** `{component.input-text}` — `h-8 w-full rounded-md border bg-background px-2 text-sm`. Default: `border` at `{colors.border}`. Focus-visible: `outline-none focus-visible:ring-2 focus-visible:ring-ring/50`. Used twice in the draft popover (title, time). No active state — text inputs only show default + focus.
- **Type chips** `{component.type-chip}` — `rounded-full border px-2 py-0.5 text-[11px]`. Default: `border-transparent text-muted-foreground`. Active (selected): `border-foreground/30 bg-accent`. Each chip carries a `size-1.5 rounded-full` colored dot keyed to the status hue.

### Navigation Chrome

- **`AppSidebar`** — `Sidebar variant="sidebar" collapsible="icon"`. Background `bg-background` in light, radial-gradient fade in dark. Menu buttons render at `text-foreground/75` (nav at 75% opacity is deliberate — it sits behind the active item). Active item: `bg-accent text-accent-foreground`. Focus-visible: `ring-ring/50` on the button.
- **`AppHeader`** — `sticky top-0 z-50 h-14 border-b bg-background/95 backdrop-blur-sm`. Left: sidebar trigger + breadcrumb. Right: `+ new task` (outline icon button), `bell` (outline icon button), vertical separator, `NavUser` avatar dropdown.

### Footer

- **Sidebar footer** — `border-t p-2` row of `Help & support` + `Documentation` ghost links at `size="sm"` and `text-muted-foreground`. Below it: a `text-[9px] text-muted-foreground` copyright line that fades to 0 opacity when the sidebar collapses to icon rail (`group-data-[collapsible=icon]:opacity-0`).

## Do's and Don'ts

### Do

- Use `DashboardCard` for every tile so the shadowless + square + ring-0 contract holds.
- Set status color only via the five sanctioned hues (emerald / violet / sky / amber / rose) at 10% tint.
- Apply `tabular-nums` to every numeric — KPI values, Delta chips, percentages, day numbers, timestamps.
- Reserve `font-heading` (Sora) for numerals, card titles, month headers, and the active-day axis tick — never for body.
- Keep cards flush via `gap-px bg-border p-px` on the grid container — let the border be the gap.
- Wire `min-w-0` at every nesting level that holds a flex-wrap title + delta row, plus `truncate` on the title itself.
- Use the 1px today-line at `bg-primary/40` to mark the current day in the timeline; never tint the whole column.
- Surface keyboard shortcuts via `<Kbd>` inside `<Tooltip>` so screen readers announce them.
- Render the wordmark via CSS-mask + `bg-current` so dark mode flips automatically without shipping two SVGs.
- Keep meeting bars at `rounded-md` with `shadow-sm` — the only intra-card elevation allowed.

### Don't

- Don't add `shadow`, `ring`, or `rounded-{anything}` to `DashboardCard` — that collapses the whole museum-card refusal.
- Don't introduce a sixth status hue or recolor the existing five. Status hue is a closed set.
- Don't use color as decoration on KPI tiles — Delta chip is the only place tint enters a KPI.
- Don't synthesize bold from missing Sora weights — clamp to the nearest valid weight and leave a comment.
- Don't put a max-width container around the dashboard grid; it bleeds to the inset edges.
- Don't switch the sidebar to `variant="floating"` or `variant="inset"` — push, never overlay.
- Don't lower `{colors.border}` below `oklch(0.922 0 0)` in light mode; cells stop being distinguishable for low-vision users.
- Don't add hover states to typography; only buttons, links, and timeline cells respond to hover.
- Don't ship photography, illustration, or marketing imagery. The only assets are `logo.svg` and the avatar URL.
- Don't add Framer Motion or GSAP — motion is CSS-token via `tw-animate-css` and Radix data attributes only.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤419px | Single-column KPI stack; timeline scrolls horizontally (`min-width: 21 × 52px`). Sidebar opens as a sheet via `useIsMobile`. |
| Phone | 420–640px | Same as small phone; KPI labels stay at `text-xs`, no font scaling. |
| Large phone | 641–735px | Still single column; meeting bars become tappable (44px tap target via `ROW_H - 12 = 36px` content + 4px padding × 2). |
| Tablet portrait | 736–833px | Grid stays single column up to `md` breakpoint (768px); above 768px charts span `md:col-span-2`. |
| Tablet landscape | 834–1023px | `md:grid-cols-2`: KPI tiles render 2-up, charts span full row each. Sidebar still sheet on `<768px`, otherwise rail. |
| Small desktop | 1024–1068px | `lg:grid-cols-4` engages: KPI tiles 4-up, charts span 2, timeline spans 4. Sidebar expanded to `16rem`. |
| Desktop | 1069–1440px | Layout is identical to small desktop; `min-w-0` + `truncate` invariants hold. |
| Wide desktop | ≥1441px | Grid still `lg:grid-cols-4`. Cards grow with the viewport because there's no max-width — the dashboard expands, the typography does not. |

### Touch Targets

- Minimum touch target is 44×44 logical pixels via Radix primitives' default sizing.
- Header icon buttons use `size="icon-sm"` (28×28) but sit inside a 56px header row so the implicit hit area satisfies the rule.
- Timeline day cells satisfy 44px tap area via their column width (≥52px) × row height (48px).
- Sidebar menu buttons use shadcn's default `SidebarMenuButton` height (32px) but space generously vertically.

### Collapsing Strategy

- **Sidebar:** above 768px, rail with `⌘B` collapse to icon strip. Below 768px, becomes a `Sheet` overlay (still pushing the content semantically; it just renders as drawer for mobile).
- **Dashboard grid:** 1 column → 2 columns (`md:grid-cols-2`) → 4 columns (`lg:grid-cols-4`).
- **Chart cards:** `md:col-span-2` so they always span the full row at md+.
- **Timeline:** `md:col-span-2 lg:col-span-4`, with internal `overflow-x-auto` so the 21-column grid can scroll horizontally on narrow viewports without breaking the dashboard frame.
- **Projects table:** `md:col-span-2`. Below md, table inherits a horizontal scroll container from shadcn `Table` defaults.
- **Header right cluster:** icon buttons + separator + avatar always visible; nothing collapses into an overflow menu because the cluster is sized to fit at 320px.

### Image Behavior

- No `srcset` is needed because no raster images ship. The wordmark is an SVG mask; the avatar is a single 1×1 PNG fetched from the avatar service.
- Avatar uses `<AvatarImage>` (Radix) which preloads the URL and falls back to `<AvatarFallback>` (first initial) on failure. No `loading="lazy"` because the avatar is above the fold.
- Logo SVG is fetched once via CSS-mask and reused across every theme — no second request when toggling light/dark.

## Iteration Guide

1. **Extend by repetition, not invention.** Every new card must be a `DashboardCard`; every new color must be one of the five status hues or a neutral oklch ramp stop. Anything else breaks the contract.
2. **Variants live in components, not in tokens.** If a chart needs a different active-bar treatment, add a `MonoBar`-style shape inside the chart file — don't introduce a `--chart-active` token.
3. **Reference tokens, never values.** New code uses `{colors.foreground}` / `bg-background` / `border-border` — never the raw `oklch(...)` literal except in `globals.css`.
4. **Never document hover.** Default / active / focus are the only states a designer should reason about. Hover is a browser affordance, not a design token.
5. **Display vs body family discipline.** Sora is for numerals, card titles, month headers, and the active-day axis tick. Plus Jakarta is for everything else. Geist Mono only when `tabular-nums` isn't enough (raw IDs).
6. **Shadow restriction.** Shadows are allowed only on elements that *float over* a card surface (timeline meeting bars, draft popover, dropdown menu). Cards themselves stay flat.
7. **Chrome vs surface alternative.** When adding a screen, decide first whether it lives inside `SidebarInset` (chrome surface — inherit this whole system) or outside it (marketing / auth — different system). Don't mix the two on one route.

## Known Gaps

- **Validation states** (input error, success, warning) are not surfaced — the draft-meeting form only models empty-title focus rejection. Document these before shipping a real form.
- **Dark-mode chart contrast** isn't verified against AAA. The chart ramp is the same oklch stops in both modes; verify that the lightest stop (`oklch(0.87 0 0)`) on dark background (`oklch(0.145 0 0)`) clears 4.5:1.
- **Loading / skeleton states** for the charts and table aren't documented. shadcn's `Skeleton` primitive is imported but unused in the source — patterns need to be defined.
- **Notification panel** (the bell icon in the header) opens nothing. The empty / full / error states of the panel are not in the system yet.
- **Mobile sidebar sheet styling** inherits shadcn defaults; the radial-gradient header background defined for `dark` is not surfaced as a documented token.
- **Specific blur radii** for `backdrop-blur-sm` aren't quoted — it resolves to whatever Tailwind v4 ships as the default `--blur-sm` (commonly 4px) but the value is not pinned in `globals.css`.
