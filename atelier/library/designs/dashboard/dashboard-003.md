---
version: "1"
name: "Dashboard 003 — Editorial Blueprint Ad-Performance Analytics"
description: "A flat editorial-blueprint analytics dashboard tracking CPC / CPM / CPA / ROAS across Google, Meta, and TikTok. Vanilla cream canvas (#fcfbf8), midnight ink (#001011), parchment cards (#ededea), accent blue (#007aff) for interaction, and goldenrod orange (#fd5321) reserved for decorative accents only. Geist + Geist Mono, pill buttons, 20px card radius, 1px hairlines, no drop shadows."
colors:
  canvas: "#fcfbf8"
  ink: "#001011"
  card: "#ededea"
  muted: "#5a6664"
  border: "#c1c4c2"
  accent-blue: "#007aff"
  accent-orange: "#fd5321"
  neutral-accent: "#e4e3df"
  destructive: "#d23b1f"
  chart-palette: "ink #001011 / blue #007aff / orange #fd5321 / slate #5a6664 / mist #a8aca9"
typography:
  sans:
    fontFamily: "Geist"
    weights: "300 / 400 / 500 / 600"
    role: "headings + body, antialiased, letter-spacing -0.02em on h1–h4"
  mono:
    fontFamily: "Geist Mono"
    weights: "400 / 500"
    role: "small labels, numeric chips, tabular-nums on figures"
  features: "ss01, cv01, cv03 (Geist stylistic + character variants), tabular-nums on numbers"
spacing:
  base: "Tailwind v4 default (4px)"
  card-padding: "24px"
  grid-gap: "16px"
  section-gap: "24px"
  sidebar-width: "16rem (64) on md+"
rounded:
  card: "20px (radius var 0.875rem ~ rounded-xl)"
  button: "9999px (full pill)"
  badge: "8px (rounded-4xl scaled)"
  input: "8px (rounded-lg)"
components:
  app-shell: "Radix-style sidebar + header layout, client-only mounted via ClientOnly wrapper to dodge browser-extension hydration mismatches"
  sidebar: "Fivefold wordmark + glyph, button-only navigation (never <a>), grouped nav with collapsible sections"
  stats: "Four hairline KPI cards — CPC, CPM, CPA, ROAS — ink figures in tabular-nums, delta chip in blue or orange"
  charts: "Recharts area + bar + line + donut, each constrained to the ink/blue/orange/slate/mist palette, no gradient fills"
  buttons: "Filled = ink bg + cream text + pill; outline-accent = transparent + 1px #007aff border + #007aff text + pill"
  badges: "Pill chips, rounded-4xl, used for channel + status labels"
  tables: "Hairline rows, no zebra, tabular-nums in numeric cells"
---

# Dashboard 003 — Editorial Blueprint Ad-Performance Analytics

> Fivefold showcase. Pairs with the Dashboard 003 prompt. Use this file to keep Dashboard 003's blueprint restraint when you add new screens — it should always read as a working analyst's worksheet, never a SaaS marketing site.

## Overview

Dashboard 003 is an ad-performance analytics app tracking CPC, CPM, CPA, and ROAS across Google, Meta, and TikTok — drawn in the language of an editorial print blueprint, not a SaaS dashboard. Vanilla cream canvas, midnight ink type, parchment cards, ash-mist hairlines. Color is rationed: accent blue carries every interactive state, goldenrod orange is reserved strictly for decoration and selection, and ink does all the lifting for primary actions and headings.

The governing decision: **flat editorial blueprint, not glossy dashboard.** Most marketing analytics tools fight for attention — saturated KPIs, gradient cards, glowing tooltips, "look how much data we have" theatre. Dashboard 003 does the opposite. Every card is a 20px-radius rectangle on parchment, ringed by a single hairline. There are no drop shadows anywhere in the system. Numbers use `tabular-nums` so columns of CPC, CPM, CPA, ROAS line up like a printed spec sheet. The orange is a calibration mark, never a CTA. The whole interface reads as if a Swiss-trained art director designed it for an in-house performance team that already knows what to look at — the dashboard's job is to stay out of the way and let the figures do the work.

The system extends to every adjacent surface the same way. New screens inherit the cream canvas, the parchment cards, the single accent-blue interaction colour, and the contractual ban on shadows. KPI rows, charts, tables, dropdowns, sheets, tooltips — each one is hairline-ringed, never elevated. The result is one coherent worksheet across the product: open any page and the eye immediately knows where the data is, where the controls are, and that the orange means "decoration, not action."

**Key characteristics:**
- Vanilla cream canvas (`{colors.canvas}` — #fcfbf8) and midnight ink (`{colors.ink}` — #001011). Off-white that reads as paper; ink slightly softer than pure black so the page never feels printer-heavy.
- Parchment cards (`{colors.card}` — #ededea) ringed with `1px solid {colors.border}` (#c1c4c2). No drop shadows, no inner glow, no gradient fills — depth comes from the hairline alone.
- Accent blue (`{colors.accent-blue}` — #007aff) is the single interactive colour. Focus rings, outline buttons, active links, chart series 2 — all blue.
- Goldenrod orange (`{colors.accent-orange}` — #fd5321) is decorative only. Selection backgrounds, the rare delta chip, chart series 3. Contractually forbidden from text colour or filled CTAs.
- Geist (300–600) for everything plus Geist Mono for small numeric labels. Two families, two roles, never more.
- Pill buttons at full `9999px` radius against `20px` cards — the silhouette contrast is the only "shape" the system permits.
- Light theme only. A `.dark` ramp exists in CSS for emergencies, but `next-themes` is intentionally uninstalled — the blueprint is a single-key composition.
- Client-only render via `<ClientOnly>` — server returns a `ShellSkeleton`; the real shell mounts on the client to dodge hydration mismatches from browser extensions that mutate the server DOM.

## Colors

> **Source pages analyzed:** App shell (sidebar + header), KPI stats row (CPC / CPM / CPA / ROAS), four Recharts panels, table view, dropdowns + tooltips + sheets — full surface inventory inside `app/globals.css` `:root`.

A nine-token palette, every value bound to a CSS variable in `app/globals.css`. The smallness is the point.

### Surface
- `{colors.canvas}` — `#fcfbf8` — page background. Off-white that reads as paper, not screen.
- `{colors.card}` — `#ededea` — every card, panel, popover surface inside the cream canvas. Parchment.
- `{colors.neutral-accent}` — `#e4e3df` — hover surface for ghost buttons and dropdown items. One half-tick warmer than the card.

### Text
- `{colors.ink}` — `#001011` — all headings, body text, filled-button labels, primary chart series, sidebar wordmark. Midnight Ink.
- `{colors.muted}` — `#5a6664` — supporting copy, axis labels, breadcrumb intermediates, table secondary cells.

### Hairlines & Borders
- `{colors.border}` — `#c1c4c2` — the 1px hairline ringing every card, every input, every separator. Ash mist. This is the system's only depth cue.

### Brand & Accent
- `{colors.accent-blue}` — `#007aff` — the single interactive token. Focus ring (`--ring`), outline-button border + text, link colour, chart series 2.
- `{colors.accent-orange}` — `#fd5321` — decorative only. Selection background (`::selection`), the occasional delta highlight, chart series 3. Never used for text colour, never used to fill a primary button.
- `{colors.destructive}` — `#d23b1f` — error states only. Visually adjacent to the orange but never mixed with it.

### Chart Palette
Recharts series cycle through five fixed slots — never any other hue:
- `--chart-1` — `{colors.ink}` (ink #001011)
- `--chart-2` — `{colors.accent-blue}` (blue #007aff)
- `--chart-3` — `{colors.accent-orange}` (orange #fd5321)
- `--chart-4` — `{colors.muted}` (slate #5a6664)
- `--chart-5` — mist `#a8aca9`

## Typography

### Font Family
- **Geist** — `Geist, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`. Weights 300 / 400 / 500 / 600. Mapped via `next/font/google` to `--font-sans`.
- **Geist Mono** — `Geist Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace`. Weights 400 / 500. Mapped to `--font-mono`.
- **OpenType features** — `font-feature-settings: "ss01", "cv01", "cv03"` set globally on `body` so Geist's stylistic and character variants are always on. Numeric cells additionally enable `tabular-nums`.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `h1` | 30px | 500 | 1.15 | -0.02em | Page title (rare; most screens skip H1 in favour of the breadcrumb) |
| `h2` | 22px | 500 | 1.2 | -0.02em | Section headers above a chart cluster |
| `h3` | 18px | 500 | 1.25 | -0.02em | Card group headings |
| `h4 / card-title` | 16px (`text-base`) | 500 | 1.35 (`leading-snug`) | -0.02em | Card titles inside KPI + chart cards |
| Body / `text-sm` | 14px | 400 | 1.5 | normal | Body copy, table cells, dropdown items |
| KPI figure | 28–32px | 500/600 | 1.1 | -0.01em, `tabular-nums` | The CPC / CPM / CPA / ROAS number |
| Mono label | 12px (`text-xs`) | 400 | 1.4 | normal, `tabular-nums` | Numeric chips, axis ticks, sub-units |
| Muted label | 12px (`text-xs`) | 400 | 1.4 | normal | Axis labels, breadcrumb intermediates |
| Button label | 14px (`text-sm`) | 500 | 1 | normal | All button variants |
| Badge label | 12px (`text-xs`) | 500 | 1 | normal | Channel + status pill chips |

### Principles
- Negative letter-spacing (`-0.02em`) applied globally to `h1`–`h4` via `@layer base`. Headings sit tighter than body so they read as a different voice, not just a bigger one.
- Body never goes below 14px on desktop. Inputs render at 16px on mobile (`md:text-sm`) so iOS does not auto-zoom on focus.
- Geist Mono is reserved for numbers and code. Prose never picks it up.
- Weight 500 is the workhorse — used for titles, KPI figures, button labels. Weight 600 only appears on the largest KPI numbers when extra optical density is wanted.
- All numeric output uses `tabular-nums` so columns of figures line up like a printed spec sheet.
- The page has no display face. Hierarchy is carried entirely by Geist's own weight range plus letter-spacing — no second family is ever introduced.

### Note on Font Substitutes
When Geist is unavailable, fall back to Inter or system-ui at the same weights. Inter renders ~2% wider, so reduce paragraph `max-width` from `65ch` to `60ch` to preserve line economy. For Geist Mono, fall back to JetBrains Mono or SF Mono; both render at slightly tighter advance widths, so add `letter-spacing: 0.01em` on numeric chips to recover the original column rhythm.

## Layout

### Spacing System
- **Base unit** — Tailwind v4 default 4px. All padding, gap, and margin tokens are multiples of 4.
- **Card padding** — `24px` (`p-6`) on card header / content / footer.
- **Grid gap** — `16px` (`gap-4`) for the KPI row and the chart grid.
- **Section gap** — `24px` (`gap-6`) between dashboard regions (KPI row → chart cluster → table).
- **Sidebar width** — `16rem` (256px) on `md+`, sheet drawer on mobile.
- **Page horizontal padding** — `clamp(16px, 4vw, 32px)` inside `max-w-screen-2xl`.
- **Universal rhythm constants** — every vertical step in the dashboard is 16 or 24. No 12, no 20, no 28.

### Grid & Container
- Page container: `max-w-screen-2xl` (1536px) with horizontal padding `clamp(16px, 4vw, 32px)`.
- KPI row: 4-column grid on `lg+`, 2-column on `md`, single-column stack below 768px.
- Chart grid: 2-column on `lg+`, single-column stack below.
- Sidebar + main: flex row, sidebar `w-64` fixed, main `flex-1`.

### Whitespace Philosophy
Whitespace is the system's primary decorative element. With shadows banned and gradients banned, the only way the eye knows where one region ends and the next begins is the 16/24px gap and the 1px hairline. Cards are deliberately spaced apart far enough that the page reads as a worksheet of discrete tiles, never a continuous wall of UI. Inside cards, the 24px padding is generous enough that KPI figures have a clear "stage" — never crowded against the edge.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | `bg-card` only, no border | Internal regions of a card (chart canvas, table body) |
| 1 — Soft hairline | `bg-card` + `ring-1 ring-foreground/10` | Every card, every panel, every popover surface |
| 2 — Tooltip | `bg-foreground` ink fill + 8px radius, no shadow | Radix tooltips on hover/focus |
| 3 — Backdrop | Sheet/dialog overlay `bg-black/40` + sheet card on parchment | Mobile sidebar sheet, dialog modals |

Shadow philosophy: **there are no drop shadows in the system.** Cards, popovers, dropdowns, sheets — all depth is communicated by the single `foreground/10` ring or the hairline border. Even the dropdown menu's `shadow-md` Tailwind class is overridden in practice by the ring; the shadow is left in the class string for the rare downstream surface that needs it, but the dashboard surface itself never paints one.

Decorative depth:
- The `::selection` paint (`{colors.accent-orange}` background, `{colors.ink}` text) is the only "highlight" effect.
- Active button press: `active:translate-y-px` — 1px downward shift, no shadow change.
- Focus ring: `focus-visible:ring-3 focus-visible:ring-ring/50` — accent blue at 50% opacity, 3px ring, keyboard-only.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `none` | 0px | Hairline separators, table rows |
| `--radius-sm` (calc 0.6×) | ~8px | Inputs (`rounded-lg`), badges (`rounded-md` fallback) |
| `--radius-md` (calc 0.8×) | ~11px | Dropdown items, tooltips |
| `--radius-lg` (= `--radius`) | 14px (0.875rem) | Internal containers |
| `--radius-xl` | ~20px | **Cards** — the canonical card radius |
| `--radius-4xl` | ~36px | Badge pills (`rounded-4xl`) |
| pill | 9999px (`rounded-full`) | All button variants |

### Photography Geometry
- The dashboard ships zero photography by default — no hero images, no illustrations, no mascots.
- Avatars (in `nav-user.tsx` and `team-on-duty.tsx`) are square inputs cropped to a circle by Radix `<Avatar>`, ringed with a 2px background ring when stacked in an avatar group.
- The Fivefold wordmark + glyph (`components/logo.tsx`) is the only graphic — inline SVG in ink, no raster fallback.
- If a future surface adds imagery, it must adopt the same 20px card radius and live inside a parchment card; standalone full-bleed photography is out of scope for the system.
- Loading strategy: avatars use Radix's built-in image swap (placeholder initial → image on load). No skeleton shimmer.

## Components

### Buttons

- **Filled / `default`** (`{component.button-primary}`) — `bg-primary` (ink `{colors.ink}`) + `text-primary-foreground` (cream `{colors.canvas}`), `rounded-full` pill, `h-8 px-2.5`, weight 500. Active: `active:translate-y-px`. Focus: `focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50` (accent blue 50% opacity).
- **Outline accent** (`{component.button-outline}`) — transparent background + `border border-{colors.accent-blue}` + `text-{colors.accent-blue}` + pill. Used for secondary CTAs that need to read as interactive. Active: `translate-y-px`. Focus: same blue 3px ring.
- **Ghost** (`{component.button-ghost}`) — transparent default, paints `{colors.neutral-accent}` (#e4e3df) on hover, `text-foreground`. Used for sidebar nav items and toolbar utilities. Focus: keyboard ring.
- **Secondary** — `bg-secondary` (parchment) + ink text + pill. Used when a button must sit inside an already-cream region and still read as elevated.
- **Destructive** — `bg-destructive/10` + `text-destructive` + pill. Soft fill (10% opacity), never solid red. Focus: destructive-tinted ring.
- **Sizes** — `default h-8`, `sm h-7`, `xs h-6` (rounded-full at all sizes), `lg h-9`, `icon-{xs|sm|default|lg}` square variants for icon-only buttons.

### Cards & Containers

- **KPI card** (`{component.card-kpi}`) — parchment `{colors.card}` surface, `ring-1 ring-foreground/10`, `rounded-xl` (20px), `p-6` (24px). Layout: label in muted Geist `text-xs`, figure in ink Geist 500/600 `tabular-nums`, delta chip below (blue for positive ROAS, orange for negative cost deltas).
- **Chart card** — same parchment surface + hairline ring, header with title + optional action slot, content padded `px-4` so the chart canvas reaches closer to the card edge than the title does.
- **Utility card** (`size="sm"`) — `gap-3 py-3 px-3` compact variant for sidebar widgets and dense dashboards. Same 20px radius.
- **Card footer** — `bg-muted/50` (parchment at 50% opacity) + top border, used for "view all" / "see details" affordances at the bottom of a chart card.

### Inputs & Forms

- **Text input** (`{component.input}`) — `h-8`, `rounded-lg` (8px), `border border-input` (`{colors.border}`), transparent background, `text-base md:text-sm` (16px mobile / 14px desktop to dodge iOS zoom). Focus: `focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50`. Invalid: `aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20` — the 3px ring is the secondary signal, not colour alone.
- **Badge** — `rounded-4xl` (~36px → reads as pill), `h-5 px-2 py-0.5`, weight 500, 12px. Variants: `default` (ink/cream), `secondary` (parchment/ink), `outline` (hairline + ink text), `destructive` (destructive 10% fill).

### Top Navigation / Sidebar

- **Sidebar** (`{component.sidebar}`) — Radix-based `components/ui/sidebar.tsx`. Fivefold wordmark + glyph at top, grouped `NavGroup`s with collapsible sections. **All nav items render as `<button>` elements, never `<a>`** — browser extensions inject anchor attributes server-side and break hydration. Width `16rem` (256px) on `md+`, sheet drawer below. Active item: parchment background + ink text. Focus: keyboard ring.
- **Header** — sticky top bar, `h-14`, cream background, bottom 1px hairline. Holds breadcrumb on the left and a small utility cluster (search, theme placeholder, user avatar dropdown) on the right.

### Footer
- Dashboard has no marketing footer. Each card may carry a `CardFooter` with a "view all" link or secondary action. The application shell ends at the last content card on the page — no spacer, no legal strip.

### Tooltip / Dropdown
- **Tooltip** — Radix tooltip, ink fill (`bg-foreground`) on cream foreground text, 8px radius, no shadow, tiny 45° arrow. Animation: `data-open:fade-in-0 data-open:zoom-in-95` over ~100ms.
- **Dropdown menu** — parchment popover surface, `ring-1 ring-foreground/10`, items at `rounded-md` (~11px), focus state paints `{colors.neutral-accent}`.

## Do's and Don'ts

### Do
- Use `{colors.accent-blue}` for every interactive state — focus rings, outline buttons, links, chart series 2.
- Reserve `{colors.accent-orange}` for decoration: `::selection`, chart series 3, the occasional delta chip.
- Apply `tabular-nums` to every numeric cell in tables and KPI cards.
- Keep card radius locked at `--radius-xl` (~20px). Buttons stay at `rounded-full` pill.
- Set focus rings as `focus-visible:ring-3 focus-visible:ring-ring/50` — visible only on keyboard, 50% opacity.
- Use Geist Mono only for numbers and code, never for prose.
- Render nav items as `<button>` end-to-end — never `<a>` — to dodge extension-injected hydration mismatches.
- Wrap the real app shell in `<ClientOnly>` with a `ShellSkeleton` server fallback that matches layout dimensions.
- Keep `1px solid {colors.border}` (`ring-1 ring-foreground/10`) as the only depth cue on cards and popovers.
- Apply `letter-spacing: -0.02em` globally to `h1`–`h4`; never let headings ship at default tracking.

### Don't
- Don't use `{colors.accent-orange}` for text colour or to fill a primary CTA — it is decorative only.
- Don't add drop shadows to cards, popovers, dropdowns, sheets, or tooltips. The hairline is the depth.
- Don't introduce a third font family — Geist + Geist Mono carry the whole system.
- Don't mix `{colors.destructive}` and `{colors.accent-orange}` in the same view — they read as siblings and confuse error vs decoration.
- Don't apply gradient fills to charts, KPIs, or buttons. Solid fills only, five-colour palette only.
- Don't render anchor (`<a>`) elements inside the sidebar or header — use `<button>` (or `Slot` + a routed onClick).
- Don't add `next-themes` or a `ThemeProvider` — the system is light-theme-only by contract.
- Don't override `--radius-xl` per-card to "tighten" the look — the 20px card radius is a system invariant.
- Don't replace the in-house icon kit with Lucide imports; the kit re-exports lucide-compatible names so swaps stay invisible to callers.
- Don't ship a card without `ring-1 ring-foreground/10` — an un-ringed card disappears into the canvas.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤419px | Single-column KPI stack, sidebar sheet only, header utilities collapse into overflow menu |
| Phone | 420–640px | KPI 1-column, charts 1-column, table scrolls horizontally |
| Large phone | 641–735px | KPI 2-column, charts still 1-column, sidebar still sheet |
| Tablet portrait | 736–833px | KPI 2-column, charts 2-column, sidebar reveals as persistent rail above 768px (`md`) |
| Tablet landscape | 834–1023px | KPI 4-column, charts 2-column, sidebar persistent at full 16rem |
| Small desktop | 1024–1068px | Full grid, sidebar 16rem, page padding clamps near 24px |
| Desktop | 1069–1440px | Full grid, page padding clamps near 32px, max-width still active |
| Wide desktop | ≥1441px | Page caps at `max-w-screen-2xl` (1536px); side margins grow with viewport |

### Touch Targets
- Minimum interactive height: 32px (`h-8` default button). On phones, sidebar items get a 40px tap zone via `py-2.5` padding inside the `h-8` visual.
- Icon-only buttons: minimum `size-8` (32px) — `icon-sm` (28px) reserved for dense toolbars on desktop only.
- Dropdown items: `py-1` visual + 32px hit region via parent click target.

### Collapsing Strategy
- **Sidebar** — persistent rail at `md+` (768px), collapses to a Radix Sheet drawer below. Toggle button lives in the header left.
- **KPI row** — 4 → 2 → 1 columns at `lg / md / sm`.
- **Chart grid** — 2 → 1 columns at `lg / below`.
- **Tables** — wrap in `overflow-x-auto` below `md`; numeric columns keep `tabular-nums` so column widths stay stable while scrolling.
- **Header utilities** — search input collapses to an icon-button trigger that opens a sheet on small phone; user avatar dropdown stays.
- **Breadcrumb** — truncates intermediate segments to `…` below `md`, keeping only first + last.

### Image Behavior
- No `srcset` / no lazy-loading rules in scope — the dashboard ships no raster imagery.
- Avatars: Radix `<Avatar>` renders a `<AvatarFallback>` (initials) immediately, swaps to `<AvatarImage>` once loaded. No skeleton shimmer.
- Logo SVG: inline in the bundle; no network fetch.

## Iteration Guide

1. Add new components as `### sub-headings` inside one of the existing groups — never invent a new top-level section.
2. Variants live inside one component, not as new components. A "compact KPI card" is `Card size="sm"`, not a `KpiCardCompact`.
3. Always reference colours and tokens with the `{colors.tokenName}` / `{component.name}` style — never paste hex values into component prose.
4. Document only default / active / focus states. **Never document hover.** Hover is for pointer devices and is conventionally derivable from active; treating it as a documented state encourages designers to over-specify.
5. Geist + Geist Mono are the only families. If a new surface demands display weight, scale Geist up — do not introduce a serif.
6. Never document a drop shadow. If a new surface "feels flat," reach for `ring-1 ring-foreground/10` first, then a thicker hairline (`ring-2`), then a different background tint — shadows are the last resort and almost never the right one in this system.
7. When extending into a new chrome region (header, footer strip, modal frame), prefer the cream canvas + parchment card pattern. Only introduce an ink-on-cream chrome alternative if the surface is non-data (e.g. an authentication splash); never invert chrome on a data screen.

## Known Gaps

- **Dark mode** — a `.dark` ramp exists in `globals.css` but is not wired through `next-themes` and is not officially supported. Treat it as a placeholder.
- **Validation copy** — only the `aria-invalid` ring/border treatment is specified. Error message typography, helper text placement, and inline form feedback are not surfaced in analyzed pages.
- **Loading skeletons** — `DashboardSkeleton` and `ShellSkeleton` exist but their internal shimmer/animation timings are not formally documented.
- **Empty states** — no specification for what a KPI card or table renders when data is missing or zero. Not surfaced in analyzed pages.
- **Print stylesheet** — given the editorial-blueprint posture, a `@media print` ruleset would be in character but is not implemented.
- **Internationalisation** — number formatting (locale-aware `tabular-nums`, currency symbols on CPC/CPM/CPA) and longer-word break behaviour in sidebar nav are not surfaced.
