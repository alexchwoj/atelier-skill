---
version: "1"
name: "Void-teal ledger glass"
description: "Near-black financial console with a near-imperceptible teal cast, small-scale display type, and rationed indigo/violet/emerald glass controls surfacing on modular data cards."
colors:
  background: "#090D16"
  surface: "#0B0F19"
  surface-elevated: "#111827"
  surface-hairline: "#1A2333"
  text-primary: "#F3F4F6"
  text-inverse: "#FFFFFF"
  accent-violet: "#615EFF"
  accent-danger: "#FF6467"
  accent-amber: "#FFD230"
typography:
  display-lg:
    fontFamily: "Anek Bangla"
    fontSize: "16px"
    fontWeight: 800
    lineHeight: "1.25"
  body-md:
    fontFamily: "Anek Bangla"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: "1.5"
  numeral-emphasis:
    fontFamily: "Anek Bangla"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: "1.5"
spacing:
  base: "4px"
  gap: "8px"
  card-padding: "12px"
  section-gap: "10px"
rounded:
  control: "8px"
  card: "12px"
  card-lg: "16px"
  chip: "6px"
  pill: "9999px"
components:
  button-nav-cta:
    background: "linear-gradient(to right, oklab(0.558 0.153983 -0.243379 / 0.3) 0%, oklab(0.592 0.248987 0.00253794 / 0.3) 100%)"
    text-color: "#DAB2FF"
    radius: "12px"
    height: "30px"
    border: "1px solid oklab(0.627 0.147802 -0.219953 / 0.4)"
    shadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px"
  button-hero-glass:
    background: "rgba(95, 95, 255, 0.2)"
    text-color: "#A3B3FF"
    radius: "12px"
    height: "27px"
    border: "1px solid oklab(0.585 0.0288678 -0.231205 / 0.3)"
    hover-background: "rgba(97, 94, 255, 0.3)"
  button-primary-emerald:
    background: "#009966"
    text-color: "#FFFFFF"
    radius: "8px"
    height: "28px"
    hover-background: "#00BC7D"
  button-primary-indigo:
    background: "#4F39F6"
    text-color: "#FFFFFF"
    radius: "8px"
    height: "28px"
  card-stat:
    background: "#0B0F19"
    radius: "12px"
    padding: "12px"
    border: "1px solid #1A2333"
  card-panel:
    background: "#111827"
    radius: "16px"
    padding: "12px"
    border: "1px solid #1F293D"
---
# Void-teal ledger glass
Source: https://monthly-expense-tracker-6072.ai.studio/

## Overview
This is a dark-mode-default utility console rendered in a dense, single-column card stack — closer to a financial ledger app than a marketing surface. The system sits on a near-black base with an almost invisible teal undertone (the pixel field reads ~84% `#001818`-family), giving the whole page a cool, submerged quality rather than pure neutral black. Structure is carried entirely by flat panel surfaces (`#0B0F19`, `#111827`) separated by 1px hairline borders (`#1A2333`, `#1F293D`), not by shadow or blur — this is a bordered-panel system, not a glassmorphic one, except where small gradient-fill buttons introduce a glass accent. Color is rationed hard: violet/indigo/emerald glass and solid buttons mark the only saturated, interactive moments against an otherwise monochrome dark field.

## Composition
The first screen opens with an icon-plus-title header band, followed immediately by a user/profile identity row, then a primary editable-amount module (a large numeral input with an inline "add" affordance), two half-width stat tiles, a highlighted daily-budget callout, a green-bordered remaining-amount callout, and a daily-expense-entry row with a submit control — six stacked modules before any scrolling ends. Scrolling continues into a savings/emergency-fund panel, then a repeating list of expense-category rows (label + numeral input + delete icon). The rhythm is uniform full-width panels stacked vertically, each with consistent 12px internal padding and 8–10px gaps between blocks — a deliberate single-column, form-dense layout that favors scannability and data entry over the wide multi-column, whitespace-generous layout a marketing page would use. This rejects a card-grid dashboard in favor of a vertical ledger a user thumbs through top to bottom.

## Colors
Background is near-black with a teal cast (`#090D16` declared base, ~84% pixel share of a `#001818`-adjacent tone) — the dominant surface, never a gradient field. Panel surfaces step up in value slightly (`#0B0F19`, `#111827`, `#1A2333`) to imply shallow elevation without shadow. Text ink is a soft off-white (`#F3F4F6`) for primary content and pure white (`#FFFFFF`) for numerals inside colored chips. Accent is rationed across three hues with distinct jobs: violet/indigo (`#615EFF`, `#4F39F6`, glass fill text `#DAB2FF`/`#A3B3FF`) marks interactive buttons and CTAs; emerald (`#009966`→`#00BC7D` hover) marks the constructive "add" action and positive remaining-balance numerals; a red family (`#FF6467`, `#FB2C36`, `#E7000B`, `#460809`) is reserved for destructive delete icons and expenditure emphasis; amber (`#FFD230`) marks a savings-section label. Borders and dividers are desaturated slate (`#1F293D`), left deliberately uncolored so the panel grid reads as structural, not decorative.

## Typography
The entire system runs on a single family, Anek Bangla, at small, dense sizes — there is no serif or mono accent family; the "signature" typographic move is instead scale contrast within one face. A display token sits at 16px/800 (extra-bold, tight 1.25 line-height) for headings and key numerals; body text runs at 11px/500 for labels and helper copy — notably smaller than typical UI body type, reinforcing the dense-ledger character. A third, char-weighted numeral-emphasis role appears at 16px/700 in emerald (`#5EE9B5`-adjacent) for hero figures like the remaining-balance amount, with secondary numerals in plain white. Hierarchy is built almost entirely through weight (500→700→800) and color, not size range.

## Layout
The page is a fixed-width, centered single column of panels (no visible multi-column grid at page level). Internal grids are compact and functional: a 2-column, 8px-gap stat grid holds paired tiles at roughly 49/49% width, while surrounding full-bleed panels run at 100% width — a row composition of [2 half-width tiles] then [full-width] then [full-width], repeated down the page. Spacing follows a tight 4/6/8/10/12px scale rather than an 8pt-only rhythm, with 12px as the dominant card padding and 8px as the dominant internal gap. Corner radii scale by component role: 8px for compact buttons, 12px for standard cards/CTAs, 16px for larger panels, 6px for small chips — no full-bleed imagery or asymmetric spans; this is a uniform, form-first stacking layout, not a bento or masonry system.

## Components
- **Header/title band**: top of page; one instance; icon badge + two-line title/subtitle at left, a small violet-glass "assistant" pill button at right (`linear-gradient(to right, oklab(0.558 0.153983 -0.243379 / 0.3) 0%, oklab(0.592 0.248987 0.00253794 / 0.3) 100%)`, text `#DAB2FF`, radius 12px, height 30px, padding 6px 12px, border 1px solid oklab(0.627 0.147802 -0.219953 / 0.4), shadow `rgba(0,0,0,0.1) 0px 1px 3px 0px, rgba(0,0,0,0.1) 0px 1px 2px -1px`); no photographic media, icon-only decoration.
- **Identity row**: directly below header; one instance; circular avatar glyph on a violet-to-pink gradient badge at left, two-line name/role text center, a dark pill badge at right showing a day label and a countdown fragment on two lines.
- **Primary amount panel**: full-width card, `#0B0F19`-toned, radius 12px, border 1px `#1A2333`; top row is icon+label with a small violet "reset" glass button at right (button-hero-glass token: `rgba(95, 95, 255, 0.2)`, text `#A3B3FF`, radius 12px, height 27px, padding 4px 10px, border 1px solid oklab(0.585 0.0288678 -0.231205 / 0.3), hover → `rgba(97, 94, 255, 0.3)`); large numeral input field beneath spanning full width; a secondary bordered input plus an emerald "add" button (button-primary-emerald token) on the next row; then a small metadata line and a numeral chip.
- **Stat tile pair**: 2-column, 8px-gap grid, each tile ~49% width, `#0B0F19` surface, radius 12px; each carries a small icon+label row followed by one large colored numeral (red-toned expense figure, amber/orange-toned savings figure).
- **Daily-budget callout**: full-width panel, indigo-tinted border/background distinct from neutral panels, icon+label row with a small dark day-count pill at right, one oversized numeral line below.
- **Remaining-amount callout**: full-width panel with an emerald/green border treatment, checkmark icon + label row, one large emerald numeral beneath — the visual high point of the first screen.
- **Daily-expense entry row**: full-width panel; icon+label with an inline budget-value chip at right; a bordered text input plus an indigo "submit" button (button-primary-indigo token) side by side.
- **Savings/emergency-fund panel**: full-width card, radius 16px (card-panel token), amber section label above; internal row shows a bold numeral at left with an edit-pencil icon, a sub-label beneath, an input field, and a full-width amber/gold "add to savings" button.
- **Expense-category list rows**: repeating full-width rows below a section header (header includes a small dark "previous month" pill button); each row = checkbox + label text at left, a bordered numeral input at center-right, and a small red delete-icon button at far right — a vertical list layout, not a table with visible gridlines.
- **Delete icon button**: appears once per list row; small square glass/dark chip with a red trash glyph (`#FF6467` family), radius ~6-8px, minimal footprint, no visible label — icon-only affordance.

## Graphics & Effects
No large-scale gradient backgrounds are present anywhere on this page — the base remains flat near-black across the full viewport. The only gradient fills are small and componentized: the header's assistant button uses `linear-gradient(to right, oklab(0.558 0.153983 -0.243379 / 0.3) 0%, oklab(0.592 0.248987 0.00253794 / 0.3) 100%)` confined to a ~30px-tall pill, and the identity-row avatar badge carries a violet-to-pink gradient confined to a small circular glyph. Shadows are used sparingly and only on interactive glass buttons (`rgba(0,0,0,0.1) 0px 1px 3px 0px, rgba(0,0,0,0.1) 0px 1px 2px -1px`) — panels themselves rely on border contrast, not elevation shadow, to separate from the background. There is no visible noise/grain, star-field, or photographic texture; the surface is clean and flat, with all depth cues coming from hairline borders and small color shifts between panel tones.

## Motion
Interactive elements transition on short, snappy timings: color/background/border changes run on `color, background-color, border-color, outline-color, text-decoration-color, fill, stroke 0.15s cubic-bezier(0.4, 0, 0.2, 1)`, matched by a general `all 0.15s cubic-bezier(0.4, 0, 0.2, 1)` for hover states (e.g., the emerald button's `#009966`→`#00BC7D` shift, the indigo glass button's opacity lift). A slower spring-flavored `transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)` is reserved for any scale/position change that needs a bouncier, overshooting feel, alongside a fast `transform, translate, scale, rotate 0.15s cubic-bezier(0.4, 0, 0.2, 1)` for micro taps. No scroll-linked or ambient background animation is implied — motion here is purely functional feedback on buttons and inputs, not decorative.

## Guardrails
- Never let the base background drift warm or pure neutral — it must retain the near-black teal cast, not flat `#000000` or blue-black.
- Do not introduce full-viewport gradients; all gradient fills stay confined to small buttons/badges under ~5% of page area.
- Keep panel separation to hairline borders and subtle surface-value steps — do not add heavy drop shadows or glass blur to bulk panels.
- Preserve the three-way accent split (violet/indigo = interactive, emerald = positive/add, red = destructive/expense) — do not mix these roles.
- Do not enlarge body text beyond its dense, small-scale character (11px body / 16px display) — the compact ledger density is the point.
- Keep the layout single-column and stacked; do not convert the panel sequence into a wide multi-column dashboard grid.
