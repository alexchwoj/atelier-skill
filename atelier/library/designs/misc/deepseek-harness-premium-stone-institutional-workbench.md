---
version: "1"
name: "Warm Stone Console"
description: "A light, warm-neutral productivity console: three-pane app shell on a paper-toned canvas, near-black solid CTAs, hairline stone borders, and a single reserved blue ring for focus states."
colors:
  background: "#FAFAF8"
  surface: "#F3F2EF"
  surface-alt: "#FFFFFF"
  border: "#E8E6E1"
  text-primary: "#1C1917"
  text-secondary: "#78716C"
  text-inverse: "#FFFFFF"
  accent-warm: "#8B7355"
  accent-amber: "#F59E0B"
  focus-ring: "#3C81F5"
  neutral-cool: "#9CA3AF"
  ink-strong: "#292524"
typography:
  headline-md:
    fontFamily: "Inter"
    fontSize: "20px"
    fontWeight: 500
    lineHeight: "1.4"
    letterSpacing: "-0.5px"
  body-md:
    fontFamily: "Inter"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: "1.5"
  label-md:
    fontFamily: "Inter"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: "1.56"
  body-md-regular:
    fontFamily: "Inter"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: "1.5"
spacing:
  base: "4px"
  xs: "6px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "32px"
  content-max-width: "32px"
rounded:
  control-sm: "4px"
  control: "6px"
  control-lg: "8px"
  card: "12px"
  panel: "16px"
  pill: "9999px"
components:
  button-primary:
    background: "#292524"
    text-color: "#FFFFFF"
    radius: "8px"
    height: "36px"
    padding: "8px 0px"
    hover-background: "#000000"
  button-pill-secondary:
    background: "#F3F2EF"
    text-color: "#1C1917"
    radius: "9999px"
    height: "32px"
    padding: "6px 16px"
    border: "1px solid rgba(232, 230, 225, 0.5)"
  button-ghost:
    background: "transparent"
    text-color: "#78716C"
    radius: "8px"
    height: "32px"
    padding: "6px 10px"
    border: "1px solid rgba(0, 0, 0, 0)"
    hover-background: "#EDEBE6"
  button-tag:
    background: "#F3F2EF"
    text-color: "#78716C"
    radius: "8px"
    height: "28px"
    padding: "4px 10px"
    border: "1px solid rgba(232, 230, 225, 0.5)"
  card-nav-panel:
    background: "#FAFAF8"
    radius: "12px"
    padding: "0px"
    shadow: "rgba(0, 0, 0, 0.05) 0px 4px 20px 0px"
  card-input-row:
    background: "transparent"
    radius: "12px"
    padding: "12px"
  card-file-row:
    background: "#FFFFFF"
    radius: "8px"
    border: "1px solid #E7E5E1"
    shadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
---
# Warm Stone Console
Source: https://p.superdesign.dev/draft/e9c90800-e8e5-481b-9391-d446c530df70

## Overview
This is a light, warm-neutral enterprise-console aesthetic: a three-pane application shell (sidebar → workspace → detail panel) rendered on an off-white, slightly warm paper canvas rather than pure white. It reads as restrained productivity software in the Notion/Linear lineage — flat surfaces, hairline stone-toned borders, no gradients or imagery, and a near-black solid button as the only strong-contrast mark on the page. Typography is a single Inter family doing all the work through weight and size steps rather than font-pairing. Color is almost entirely withheld: the system runs on warm grays and off-whites, with one blue token reserved exclusively for focus rings and never used decoratively.

## Composition
Each screen is a fixed-height, multi-column app shell rather than a scrolling marketing page: a narrow icon/nav rail, a slightly wider list column, a dominant central workspace, and (on the third screen) a right-hand detail/metadata panel. Density is high and consistent — compact row heights (~28-36px controls), tight 8-16px gaps, small 13px body text — appropriate to a data/tool context, not editorial pacing. The first screen centers an empty-state prompt in the workspace with a capsule input bar pinned to the bottom; the middle screen replaces that empty state with a structured form card floating in a chat-style thread; the right screen swaps the form for a file-list table with a metadata sidebar. The deliberate choice is a persistent chrome (sidebar + panel widths hold constant across states) with only the center pane's content type changing — rejecting a pattern where each task would get its own full-page layout; this keeps navigational context fixed while task content is swapped in place.

## Colors
The pixel field is dominated by a near-white warm neutral (~92% of rendered pixels sit at #F0F0F0-family tones, consistent with the declared #FAFAF8 canvas at 84.9% and #F3F2EF panel fill at 12.6%), so background and surface roles are both warm off-whites, not pure white. #FAFAF8 is the page/workspace background; #F3F2EF is the raised panel/pill fill (secondary buttons, tag chips); #FFFFFF appears only in small card accents (0.6%). Text ink is #1C1917 for primary content and #78716C for secondary/muted labels and placeholder copy; #292524 and #000000 (hover) carry the one high-contrast solid button. Borders are hairline #E8E6E1 / #E7E5E1, nearly invisible against the canvas — structure comes from these thin seams, not shadows. #8B7355 (a warm taupe) and #F59E0B (amber) exist as small accent marks at trace area (~0.1%) — status or category indicators, not surfaces. The blue #3C81F5 is a pure interaction token (`--tw-ring-color`), reserved solely for keyboard-focus rings against a #FFFFFF ring-offset — it never appears as a fill or text color. This is a system that deliberately leaves color out: no brand hue saturates any large area: warmth comes from the off-white base itself, not from a palette.

## Typography
Inter carries every role. headline-md (20px/500, lh 1.4, tracking -0.5px) sets card and panel titles. label-md (18px/600, lh 1.56) marks section headers such as a panel's top label. Body copy runs at 13px: body-md at 500 weight is the char-weighted true default (form values, primary row text), body-md-regular at 400 weight serves longer descriptive or placeholder text. Secondary/meta text drops to the #78716C ink at the same 13px size — hierarchy here is carried by color and weight shifts at a nearly constant size, not by scale jumps, which fits the console's dense, data-forward character. No serif or mono accent is present; this is a single-family system through and through.

## Layout
Three-column app-shell grid: fixed-width icon rail, a ~280-320px list/nav column, and a fluid main workspace, with a fourth right-hand panel appearing contextually. Inside the workspace, content is capped by a 672px content max-width for prose/form blocks, keeping form cards and chat bubbles from stretching edge-to-edge even in a wide pane. Two measured grids define the card-level composition: a 2-column, 16px-gap, 6-item grid arranged in rows [92 | 44/44 | 44/44 | 92] — i.e., a full-width row, two half-width pairs, then another full-width row (the project-intake form: client-name field spans full width, then payment-method/amount as a pair, then sponsor/handler as a pair, then the submit button spans full width again). A simpler 1-column, 8px-gap, 2-item grid stacks rows at [100 | 100] for the file-list rows in the detail panel. Card padding is consistently 12px for compact rows, radii step from 4px (tags) to 12px (panels/cards) to 9999px (pill buttons/tags in the nav rail).

## Components
- **Sidebar/nav rail** — leftmost column, full height; edge-to-edge (flush to viewport edge, not inset), sharp-to-flat vertical bar with no independent radius; contains a logo mark, a "new conversation" ghost row, a search row, and a scrollable list of workspace/project entries with folder icons; selected item shown with a subtle filled row.
- **List/thread column** — second column, edge-to-edge between rail and workspace; holds a breadcrumb-like header and a vertical list of conversation/thread entries with small file-type icon chips.
- **Workspace panel (center)** — the dominant pane; on screen 1 it shows a centered empty-state heading with three pill capability buttons below it, and a bottom-pinned capsule composer bar; on screen 2 the same pane hosts a chat thread with an inline **form card** (card-nav-panel token: `#FAFAF8`, radius 12px, shadow `rgba(0,0,0,0.05) 0px 4px 20px 0px`, 0px outer padding, inner fields padded ~16px) whose anatomy top-to-bottom is: heading label, then the 2-col/6-item field grid described above (single full-width text field, a select+numeric pair, a text-pair row), then a full-width dark button closing the card.
- **Detail/metadata panel (right)** — appears only on the file-list screen; fixed width, contains a small tab switcher (two ghost-style tags), a file-permission summary line, and a highlighted report-name pill row at the bottom in the tag-chip style.
- **File-list rows** — inside the workspace on screen 3, arranged in the 1-col/2-item [100|100] grid; each row is a white card-file-row (background `#FFFFFF`, radius 8px, border `1px solid #E7E5E1`, shadow `rgba(0,0,0,0) 0px 0px 0px 0px, rgba(0,0,0,0) 0px 0px 0px 0px, rgba(0,0,0,0.05) 0px 1px 2px 0px`) containing a file-type icon, a filename line in primary ink, and a muted metadata line (size + status) beneath it.
- **Composer/input bar** — bottom-pinned capsule across screens 1 and 2; a light `#F3F2EF`-toned bar containing a small removable tag chip, a placeholder text row, a left-side add icon, a small model/mode selector label ("Auto"-style dropdown), and the primary circular send button.
- **Button — primary (prominent)** — the single dark solid action: fill `#292524`, white text, radius 8px, height 36px, padding `8px 0px`; hover darkens to `#000000`. This is the hero-equivalent, highest-emphasis control on the page (submit/confirm actions and the composer's send button).
- **Button — pill secondary** — fill `#F3F2EF`, text `#1C1917`, full pill radius 9999px, height 32px, padding `6px 16px`, hairline border `1px solid rgba(232,230,225,0.5)`; used for the three capability options on the empty state and similar option rows — rounded-full, low-contrast, multiple-per-row.
- **Button — ghost** — transparent fill, muted `#78716C` text, radius 8px, height 32px, padding `6px 10px`, transparent border that reveals `#EDEBE6` on hover; used for utility actions (new conversation, panel icon actions).
- **Button — tag/chip** — fill `#F3F2EF`, muted text, radius 8px, height 28px, padding `4px 10px`, hairline border; used for small status/category tags and the removable file-type chip in the composer.

## Graphics & Effects
No gradients, photography, or illustration anywhere in this system — it is flat color and line work throughout. Two shadow tokens carry all elevation: a barely-there card shadow `rgba(0, 0, 0, 0.05) 0px 4px 20px 0px` used on the floating form/nav panels to lift them softly off the canvas, and a layered near-zero shadow `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px` used on the tighter file-list rows, giving them only a hairline lift rather than a lift-off-the-page card feel. There is no scrim, blur, glass, or texture layer visible anywhere — surfaces are opaque flat fills separated purely by 1px stone borders and these two shadow weights.

## Motion
Two transition speeds govern the system: a fast, near-universal `all 0.15s cubic-bezier(0.4, 0, 0.2, 1)` for hover/press state changes (button fills, borders), with an explicit color-only variant `color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color 0.15s cubic-bezier(0.4, 0, 0.2, 1)` for text/icon tint shifts; and a quicker `opacity 0.1s ease-in` for fade-style appearances (e.g., hover reveals, tag removal). All motion is short, snappy, and utilitarian — no springs, no scale/translate choreography — consistent with a dense tool interface where feedback should register instantly rather than perform.

## Guardrails
- Keep the canvas warm off-white (`#FAFAF8`/`#F3F2EF`); never shift it to pure white or cool gray — the warmth is the system's identity.
- Reserve `#292524`→`#000000` solid fill exclusively for the single highest-emphasis action per view; all other buttons stay pill-secondary, ghost, or tag-chip.
- Never fill a surface with the `#3C81F5` blue — it is a focus-ring-only token, not a decorative or brand color.
- Do not introduce gradients, photography, or blur/glass effects — every surface is a flat, bordered rectangle.
- Preserve the three-pane fixed-shell structure; do not collapse it into a single scrolling page.
- Keep shadows at the two measured near-invisible weights — never escalate to a heavy drop shadow, which would break the flat, hairline-bordered feel.
