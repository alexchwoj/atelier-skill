---
version: "1"
name: "ARK Software"
description: "Dark-default near-monochrome product system for ARK tools, HQ and client portals: the IBM Plex superfamily in three widths, monospace chrome that labels rather than speaks, achromatic neutrals and a near-invisible derived hairline, zero elevation, cuts instead of transitions, and exactly two colours — ARK sage on the primary control and clay on failure. Values below are the dark edition; a light edition toggles via data-edition and is documented in full in the body."
colors:
  paper: "#0A0A0A"
  surface: "#141414"
  field: "#1F1F1F"
  select: "#2E2E2E"
  line: "#262626"
  muted: "#8A8A8A"
  ink: "#F0F0F0"
  accent: "#6B8354"
  accent-on: "#0A0A0A"
  accent-hover: "#7C9860"
  clay: "#E06B4F"
  clay-fill: "#2A0F08"
  backdrop: "rgba(0, 0, 0, 0.7)"
typography:
  hero-metric:
    fontFamily: "IBM Plex Serif"
    fontSize: "64px"
    fontWeight: 700
    lineHeight: "1"
    letterSpacing: "-0.02em"
  hero-stamp:
    fontFamily: "IBM Plex Serif"
    fontSize: "48px"
    fontWeight: 600
    lineHeight: "1"
    letterSpacing: "-0.02em"
  hero-empty:
    fontFamily: "IBM Plex Serif"
    fontSize: "40px"
    fontWeight: 600
    lineHeight: "1.1"
    letterSpacing: "-0.01em"
  prose:
    fontFamily: "IBM Plex Serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.6"
  page-title:
    fontFamily: "IBM Plex Sans"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: "1.2"
  card-title:
    fontFamily: "IBM Plex Sans"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: "1.4"
  body:
    fontFamily: "IBM Plex Sans"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.5"
  button:
    fontFamily: "IBM Plex Sans"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: "1"
  small:
    fontFamily: "IBM Plex Sans"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "1.4"
  wordmark:
    fontFamily: "IBM Plex Mono"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: "1"
    letterSpacing: "0.08em"
  nav:
    fontFamily: "IBM Plex Mono"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: "1"
  label:
    fontFamily: "IBM Plex Mono"
    fontSize: "10px"
    fontWeight: 600
    lineHeight: "1"
    letterSpacing: "0.05em"
  meta:
    fontFamily: "IBM Plex Mono"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: "1.4"
  figure:
    fontFamily: "IBM Plex Mono"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: "1"
  kbd:
    fontFamily: "IBM Plex Mono"
    fontSize: "10px"
    fontWeight: 500
    lineHeight: "1"
spacing:
  base: "8px"
  gap-tight: "4px"
  gap-sm: "8px"
  gap-md: "16px"
  control-padding: "8px 12px"
  input-padding: "12px 16px"
  card-padding: "16px"
  card-gap: "16px"
  sidebar-padding: "16px"
  main-padding: "32px"
  section-padding: "32px"
  section-gap: "32px"
  label-gap: "8px"
  content-max-width: "960px"
  main-max-width: "1120px"
  sidebar-width: "240px"
  reading-measure: "560px"
  auth-card-width: "400px"
  record-label-gutter: "160px"
  topbar-height: "56px"
  control-height: "32px"
  input-height: "36px"
  row-height: "44px"
rounded:
  control: "4px"
  card: "8px"
  chip: "16px"
  kbd: "2px"
  checkbox: "2px"
  heatmap-cell: "2px"
  image: "0px"
components:
  button-primary: "ARK sage #6B8354 fill with near-black text, 4px radius, 32px tall. One per screen. Identical in both editions — the only token that does not change."
  button-secondary: "Field fill, ink text, no border. Cancel and most toolbar actions."
  button-text: "No fill, muted text, field background on hover."
  button-destructive: "Field fill with clay text. Never a clay fill."
  input: "Field fill, no border, label sits inside above the value. 1px sage focus ring, 1px clay error ring, instant."
  card: "Surface fill, 1px line border, 8px radius, 16px padding. Mono label top-left, optional mono footer links. No shadow."
  metric: "Plex Serif number over a Plex Sans label and a mono delta. Max three visible per screen."
  table: "Mono uppercase headers, 44px rows with a 1px line divider, tabular mono figures, field hover, select highlight. No zebra, no column borders."
  list-row: "44px with checkbox left, Plex Sans text, mono ID right-aligned, 1px line beneath. Grouped under mono uppercase labels."
  sidebar: "240px surface panel inset on paper with a 1px line and 8px radius — mono section labels, 14px glyph plus text plus right-aligned count, 36px rows."
  topbar: "56px on paper — no fill, no line. Wordmark left; the process · space pair centred (the full lowercase mono nav with middle dots on work pages, active in ink); two 16px icons right."
  rail: "40px surface strip inset 16px, 1px line, 8px radius, five 16px glyphs. Expands to a 320px panel: search, SPACES, WEEKS with chats as 36px rows."
  thread: "Your words right-aligned Plex Sans 14 muted; the model in Plex Serif 15 at the 560 measure; a 576px field card with explore ▾ and a 32px field send square."
  drawer: "360px bottom sheet, surface, 1px line on top, over the backdrop. Mono header with a close glyph; up to three hero numbers; 120ms enter, cut exit."
  tabs: "Mono text separated by middle dots, active in ink. No underline, box, or pill."
  chip: "Plex Sans 12px in a field pill, 16px radius, select fill when active."
  badge: "A mono uppercase word with no background — colour carries the state."
  kbd: "Mono 10px in a 1px select-bordered chip, 2px radius, field fill."
  banner: "Full-width fill with 1px border — clay-fill for errors, field for info. No icon, no success variant."
  modal: "480px surface card, 1px line, 24px padding, backdrop token. Title, content, two right-aligned buttons. No close icon."
  toast: "Bottom-right surface card, auto-dismiss 4s, one at a time."
  command-palette: "560px modal — one unlabelled field over mono-grouped result rows. The product's search and navigation."
  empty-state: "Nothing here in Plex Serif italic inside a card or group; a Plex Serif headline on a full empty page. No illustration."
  heatmap: "28px square cells on a four-step grey density scale, 2px gaps, no borders, with a mono streak column."
  brief: "Per-pillar Change and Source fields, one highlighted decision, a mandatory DATA GAPS field in italic."
  decision-record: "160px label gutter. HANDOFF reads clay until a receiving system acknowledges it, then ink."
  auth: "Two-panel split — paper left with the product line in Plex Serif, field right with a 400px surface card."
---

# ARK SOFTWARE — Design System

**The default system for every ARK product: HQ, client portals, dashboards, tools.**

> **The 18 September edition.** The tokens below stand; how the studio uses them changed on
> 18 September 2026 — the noir palette (paper `#050505`), the editorial register (a serif voice,
> hairlines instead of boxes, head verbs as glyphs, the accent once), six layouts, and the four
> modes THINK · PLAN · ACT · SCALE. `design/REGISTER.md` is that edition written down and
> `design/modes/` its boards; where this file and the register disagree, the register and the
> studio at `2b99a86` win (FINAL §4.14; its decision row is SPEC 1.4's D-85 / ADR-S38, drafted by 17-B for Gate 17).

This is the fifth system and the first one for software rather than a website. It shares `Typography.md` and `Colours.md` with the four sites but departs from them where a tool has to depart from a publication. Those departures are few, listed, and each has a reason. Everything not listed as a departure is inherited.

The four site systems are read. This one is *used* — for hours, daily, by you in HQ and by a dealership GM in a portal. A publication can be severe. A tool has to be calm.

---

## What was stolen, and from whom

| Reference | What it does best | What ARK takes |
|-----------|------------------|----------------|
| **Nenspace** | Monospace chrome. Lowercase nav separated by middle dots — `today · notes · logbook · habits · memory`. Tiny uppercase section labels. Counts in the margin. Keyboard shortcuts as small bordered chips. A date stamp that says more than the date — `September 11 / Friday / WK37 / D254 / EVENING`. Small quiet cards with a label top-left. Empty states that say *Nothing here* in italic and nothing else. Narrow centred content on a huge canvas. Two shells: a centred home with no sidebar, and a panel-plus-main for work. | **The chrome language and both shells.** Mono for everything that is *about* the content — nav, labels, meta, IDs, shortcuts — and Plex Sans for the content itself. The date stamp. The count-in-margin. The two shells. The italic empty state. |
| **Wealthsimple** | Two greys, black, white, one error colour. Inputs are filled grey with no visible border; the label sits inside the field. A white card on a grey panel. One black button, one grey button. An error banner that is a soft fill with dark text. Underlined links. Nothing else. | **Colour discipline for product surfaces, filled inputs, and the auth layout.** The product adds exactly two surface tokens over the site palette — a field grey and an error fill — and no more. Inputs are Wealthsimple's. The sign-in screen is Wealthsimple's split. |
| **Clay** | 8px base. One accent rationed to the primary action and the active state, never as a wash. Flat cards with hairline inset borders and zero drop shadow. Eyebrow labels above headlines. Tight negative tracking on display type. One idea per screen. | **Spacing base, accent rationing, flat elevation, and eyebrows.** The 8px grid replaces the sites' 4px-derived scale for product. Accent appears on the primary button and the checked control and nowhere else; select carries the highlighted row. No shadows anywhere. Plex Serif is tracked tight. |

What was deliberately *not* taken: Nenspace's dark canvas (structure and restraint transfer; the palette stays paper), Wealthsimple's pill buttons (too soft for ARK), Clay's illustration and pastel bands (a product has no bands).

---

## Loading and Sizing

Everything in this section used to live in the frontmatter. It was moved into the body so the frontmatter matches the `design.md` schema exactly: eight keys, flat colours, no nested editions.

**This system inherits `Typography.md` and `Colours.md` and applies to ARK HQ, client portals, dashboards and internal tools.** The frontmatter colours are the **dark edition**, which is the default. The light edition is a toggle and is specified in full under *Colour* below.

### Fonts

```
https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Serif:wght@400;600;700&display=swap
```

One request, one provider. All three widths are SIL OFL 1.1 — free for commercial use. Trim the weight list to exactly what the typography tables call.

### Case and numerals

The schema's typography block carries family, size, weight, line-height and tracking only, so two rules that belong to specific roles are stated here instead:

| Role | Rule |
|------|------|
| `nav` | lowercase |
| `label` | UPPERCASE |
| `figure` | `font-variant-numeric: tabular-nums` |
| all mono uppercase | `letter-spacing: 0.05em` |

### Fixed sizes

| Element | Height |
|---------|--------|
| Top bar | 56px |
| Button, all levels | 32px |
| Input, placeholder only | 36px |
| Input, with inside label | 52px |
| Table row, list row | 44px |
| Sidebar row | 36px |
| Heatmap cell | 28px |
| Icon, general | 16px |
| Icon, sidebar row | 14px |

### Elevation

```
shadow: none
border: 1px solid var(--line)
```

Dark separates cards from panels with a quiet mid-grey hairline. Light is effectively borderless — separation is fill and padding. Never a shadow, never a second line colour, never a glow.

### Motion, in one table

| Event | Treatment |
|-------|-----------|
| Everything | Cut — no transition |
| Overlay enter (modal, drawer, palette, toast) | `opacity 120ms linear` |
| Overlay exit | Cut |
| Edition swap | Cut |
| `prefers-reduced-motion` | The 120ms becomes 0 |

---

## The Seven Departures

Where this system breaks from the four site systems, and why. Nothing else breaks.

| Departure | Sites | Software | Why |
|-----------|-------|----------|-----|
| **Radius** | 0 | 4px controls, 8px cards | Zero-radius inputs and buttons read as hostile over eight hours of use. 4px is the minimum that reads as a tool without reading as soft. |
| **Icons** | Banned | Lucide, 16px, 1.5px stroke, `--muted`, controls only | A sidebar and a toolbar need glyphs. Scoped: never decorative, never coloured, never larger than 16px, never in content. |
| **Palette** | Sage accent on tinted paper | Achromatic neutrals, sage retained on the primary control only | The tint was what made the chrome opinionated. The accent was never the problem. |
| **Error fill** | None | `--clay-fill` | An error banner in a form needs a background. One token. |
| **Motion** | Cuts only | Cuts, plus 120ms opacity on overlay *enter* | A modal that exists at frame zero is disorienting in a tool. Enter only; exit is a cut. |
| **Typography** | Panchang · Switzer · Erode · Sometype Mono | **IBM Plex Serif · Sans · Mono** — one superfamily | Four families from two foundries had no shared skeleton. Plex's three widths were drawn together, so metrics align by construction rather than by tuning. |
| **Editions** | Light only | **Dark default**, light on a toggle | The four sites are read once, in daylight, by a stranger. A tool is lived in for eight hours by people who work in dark. |

Everything else — the four voices, zero shadows, no gradients, the word bans, the vocabulary, the structure of every component — holds.

**The palette departure separates tint from accent, which are two different things.** The four sites run sage *and* a sage-tinted paper. Product drops the tint entirely — every neutral here is achromatic — and keeps sage on exactly one element. A dealership GM moving from arksales.ltd into their portal still meets the same green; they just meet it once instead of everywhere.

The editions departure is the one that reverses a rule I wrote for the sites, so it is scoped explicitly: **arkoperations.ltd, arkmarketing.ltd, arksales.ltd and ark.business stay single-edition light.** Only software has two editions. A marketing site with a theme toggle is a site that does not know what it is for.

---

## Typography — The Plex Trio

Software drops the four-voice editorial stack entirely and runs **one superfamily in three widths**: IBM Plex Serif, IBM Plex Sans, IBM Plex Mono. All three were drawn together at IBM by Mike Abbink and Bold Monday, share a skeleton, and align on x-height and metrics. All three are SIL OFL 1.1 — free for commercial use.

| Voice | Font | Territory | Never |
|-------|------|-----------|-------|
| **Hero** | IBM Plex Serif | Hero metrics, the date stamp, empty-state headlines | Anything between 16px and 39px |
| **Prose** | IBM Plex Serif | Briefs, AI narrative, note bodies, help text over two sentences | Labels, data, chrome |
| **Interface** | IBM Plex Sans | Page titles, card titles, cells, buttons, form values, captions | Above 32px |
| **Chrome** | IBM Plex Mono | Wordmark, nav, labels, meta, IDs, timestamps, counts, figures | Editorial prose |

Three families, four registers — the serif works at both ends of the scale and nowhere in the middle.

### The Dead Zone is gone

The site systems ban type between 32px and 40px, because Panchang and Switzer are both sans-serifs and at mid sizes a reader cannot tell whether the difference is intentional. That problem does not exist here: Plex Serif and Plex Sans are different classifications and are never confusable at any size.

**Delete the rule.** A page title can sit at 36px if the layout wants it. This is the one place the Plex trio is less constrained than what it replaces, and it is a real simplification rather than a loosening — the constraint was solving a problem that no longer exists.

What replaces it is narrower and stricter: **the serif has two registers and nothing between them.** Hero at 40–96px, prose at 15px. A serif at 24px is neither, and it is wrong.

### Loading

```
https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Serif:wght@400;600;700&display=swap
```

One request, one provider, one foundry. The previous stack pulled four families from two providers. Keep the weight list trimmed to exactly what the tables below call; Plex families are large and it is easy to ship weights nothing uses.

### IBM Plex Serif — hero and prose

| Role | Weight | Size | Tracking | Where |
|------|--------|------|----------|-------|
| Hero metric | 700 | 56–96px | -0.02em | One number on a dashboard. `$284,000`. |
| Date stamp | 600 | 48px | -0.02em | `September 11` on the HQ home |
| Empty headline | 600 | 40px | -0.01em | *No leads yet.* — the hero floor |
| Prose | 400 | 15px | 0 | Briefs, AI narrative, notes. Line-height 1.6, 560px measure. |
| Prose emphasis | 400 italic | 15px | 0 | *Nothing here*, DATA GAPS, LEARNED |

Plex Serif takes less negative tracking than Excon or Panchang did — it is a text serif, not a display face, so -0.02em is the floor rather than -0.03em. Past that it closes up.

Hero is rare: one or two instances per screen. A dashboard with serif on every card title is a dashboard shouting.

If it's under two sentences, it's Plex Sans 14px. Serif on a form label or a table cell is a failure.

### IBM Plex Sans — the interface

| Role | Weight | Size | Where |
|------|--------|------|-------|
| Page title | 700 | 24px | Top of the main panel |
| Card title | 600 | 15px | Top-left of a card, above the label if both exist |
| Body / cell | 400 | 14px | Table cells, list rows, form values, descriptions |
| Button | 600 | 13px | All three button levels |
| Small | 400 | 12px | Helper text, secondary cell content |

14px is the product body size, not 17. Tools are denser than publications. Line-height 1.5.

Plex Sans has a lower x-height than Switzer at the same nominal size, so 14px reads slightly smaller. Check it on a real table before deciding it is too small — the fix is line-height 1.55, not 15px, or the density gain of the whole system is spent.

### IBM Plex Mono — chrome and data

| Role | Weight | Size | Case | Where |
|------|--------|------|------|-------|
| Wordmark | 700 | 16px | UPPERCASE | `ARK` top-left — 0.08em |
| Nav item | 500 | 12px | lowercase | `today · leads · calls · reports` |
| Section label | 600 | 10px | UPPERCASE | `CAPTURE` `FOCUS` `THIS WEEK` — 0.05em |
| Meta | 400 | 11px | as needed | `WK37 / D254`, `updated 14:32`, `1d` |
| Count | 400 | 11px | — | Right-aligned in the margin: `12` |
| Shortcut | 500 | 10px | as needed | `⌘K` in a 1px `--select` chip, 2px radius |
| ID | 400 | 11px | UPPERCASE | `LD-0412`, `APT-093` |
| Table figure | 500 | 13px | — | Every numeric cell, tabular |

Nav is lowercase. Section labels are uppercase. Both are mono. That contrast — lowercase for where you can go, uppercase for what you're looking at — is Nenspace's and it works.

**The wordmark is mono now, and that removes an exception.** The old stack needed a special case letting the display face appear at 20px; with `ARK` set in Plex Mono 700 at 16px with 0.08em tracking, the display floor has no exception at all. It also sits correctly next to the mono nav beside it, which a serif wordmark would not.

**Plex Mono is wide.** Wider than Sometype Mono at the same size — measure your numeric columns before locking table widths. A seven-character timestamp column that fit before may not now.

### The mono ratio — decided for HQ

The engineering trio this came from ran mono at 70–80% of the interface, with entity names set in mono so the whole board reads as records rather than people. Pure Plex can be run either way, and the choice is not cosmetic:

| | HQ | Client portals |
|---|---|---|
| Entity names in tables | **Plex Mono 500 13px** | **Plex Sans 400 14px** |
| Everything else | identical | identical |

In HQ the instrument reading is correct — you are looking at a system, and a name is a record in it. In a portal a dealership GM is looking at their own customers, and setting those names in mono makes the product feel like it is about data rather than about their business.

One toggle, one line of CSS, everything else shared. **Decided 11 September 2026: HQ runs the mono
version** — entity names (people, companies, tools) are Plex Mono 500 13px wherever they appear
inside Sans copy, in rows and in cards alike (`design/Main.dc.html`, `Today.dc.html`). Portals
default to Sans.

---

## Colour — Thirteen Tokens, Two Editions, Two Colours

The neutrals are monochrome: pure black, shades of grey, pure white, no tint on any surface and no hue in any neutral. Two colours sit on top of that field — **sage on the primary control, clay on failure** — and nothing else in the product is coloured at all.

Dark is the default. Light is a toggle. **The token names never change — only their values.** Every component spec in this document (`--surface` fill, 1px `--line`, `--muted` label) is written once and is correct in both editions. There is no dark-mode variant of any component, because no component names a colour.

```css
:root,
[data-edition="dark"] {
  --paper:      #0A0A0A;   /* canvas */
  --surface:    #141414;   /* panels, cards, sidebar */
  --field:      #1F1F1F;   /* input fill, row hover, secondary button */
  --select:     #2E2E2E;   /* selected row, active chip, highlight */
  --line:       #262626;   /* every line — midpoint of --field and --select */
  --muted:      #8A8A8A;   /* secondary text, chrome */
  --ink:        #F0F0F0;   /* primary text */
  --accent:     #6B8354;   /* ARK sage — primary button, checked control, focus ring */
  --accent-on:  #0A0A0A;   /* text and glyphs sitting on --accent */
  --accent-hover: #7C9860; /* the only hover value that is a token */
  --clay:       #E06B4F;   /* error, destructive — the only hue */
  --clay-fill:  #2A0F08;   /* error banner background */
  --backdrop:   rgba(0, 0, 0, 0.7);
}

[data-edition="light"] {
  --paper:      #FAFAFA;
  --surface:    #FFFFFF;
  --field:      #F0F0F0;
  --select:     #E4E4E4;
  --line:       #F7F7F7;   /* every line — midpoint of --field and --surface */
  --muted:      #6E6E6E;
  --ink:        #0A0A0A;
  --accent:     #6B8354;   /* unchanged — sage is the constant between editions */
  --accent-on:  #0A0A0A;
  --accent-hover: #7C9860;
  --clay:       #C0341A;
  --clay-fill:  #FBE9E5;
  --backdrop:   rgba(0, 0, 0, 0.4);
}
```

Every neutral is achromatic — equal red, green and blue. Nothing is warmed, nothing is cooled, nothing is tinted. If a hex in this system has unequal channels and is not `--accent`, `--accent-hover` or `--clay`, it is wrong.

`--accent`, `--accent-on` and `--accent-hover` are the only tokens whose values are **identical in both editions**. Everything else flips; the green does not. That is deliberate — it is the one thing a user sees in the same form whichever edition they are in, and it is the thing that ties a portal back to the site it came from.

### Lines are derived, not picked

`--line` is not a chosen colour. It is a midpoint, computed from tokens that already exist:

| Edition | Derivation | Value |
|---------|-----------|-------|
| Dark | halfway between `--field` `#1F1F1F` and `--select` `#2E2E2E` | `#262626` |
| Light | halfway between `--field` `#F0F0F0` and `--surface` `#FFFFFF` | `#F7F7F7` |

The two editions are deliberately not symmetrical.

**Dark sits inside the surface ramp, not on top of it.** The neutrals climb `--paper` → `--surface` → `--field` → `--line` → `--select`. The line is a step in that ramp, wedged between the input fill and the selection fill. It is a surface, not a mark, and by construction it can never be the brightest thing on the screen.

It lands at **1.22:1 against `--surface`** and 1.31:1 against `--paper`. That is barely there — an edge you perceive rather than a rule you read. It is the intended weight.

Two earlier drafts overshot: `#5C5C5C` at 2.8:1 read as a drawn rule, and `#3A3A3A` at 1.6:1 still pulled the eye across a long table. `#262626` does not.

**What this costs, and why it is fine.** `--line` now sits *below* `--select`, so a divider on or beside a selected row disappears into the highlight. That is not a defect: `--select` separates from `--surface` at 1.36:1 on its own, so the fill already does the job the divider was doing. The old rule that the line must clear `--select` is deleted; the reverse is now true by derivation and needs no policing.

**Small controls are the exception.** At 1.22:1 a 1px border is enough to imply the edge of a large area and not enough to define a 16px checkbox or a keyboard chip — both sit on `--field`, where `--line` measures 1.09:1 and effectively vanishes. Those two components take a **`--select` border** instead. This is not a second line colour for structure; it is the recognition that a small interactive target needs more edge than a panel does. Everything larger than a control uses `--line`.

**Light is a whisper.** `#F7F7F7` runs about **1.06:1 on `--surface` and 1.02:1 on `--paper`.** It is close to invisible, and that is the intent: light mode is a borderless edition where structure is carried by fill and spacing, and the line is a suggestion of an edge rather than a drawn one.

Record the derivation, not just the hex. If `--select` moves in dark, or `--field` moves in light, `--line` is recomputed from it rather than eyeballed.

The two editions now match closely — 1.22:1 in dark, 1.07:1 in light. Both are below the threshold where a border can be load-bearing, which means **the whole system is effectively borderless in both editions** and the note below about what light gives up applies to dark as well, just less severely.

### What the light edition gives up

This is the one asymmetry in the system with a real consequence, and it must be designed for rather than discovered later.

At 1.06:1, **a light-mode line is not load-bearing.** Anything that relies on a border to exist will not read. Specifically:

- **A `--surface` card on `--paper`** separates by a 1.04:1 fill difference plus a 1.02:1 border. That is effectively nothing. In light mode, cards separate by **padding and position**, not by an edge — which means light mode needs more whitespace than dark mode to stay legible, not the same amount.
- **Per-row table dividers work in dark and are decorative in light.** Keep them — the markup is identical and the dark edition needs them — but do not let a light-mode layout depend on them for grouping. Row height and hover carry grouping in light.
- **Inputs** already read without a border, because `--field` on `--surface` is a 1.07:1 fill change plus padding. That is the Wealthsimple pattern and it is unaffected.

If light mode ever feels structureless on a real monitor, the fix is **not** to darken `--line`. It is to darken `--paper` — dropping it from `#FAFAFA` toward `#F2F2F2` raises the card-on-canvas fill difference to about 1.16:1 and restores the lift without putting a visible border back. One token, and the borderless character survives.

Every line in the product is `--line` — card and panel borders, table dividers, group separators, the drawer's top edge. There is no second line colour and no ink-weight rule anywhere. The two small-control exceptions are checkboxes and keyboard chips (`--select`, above); the top bar has no line at all. The one coloured exception is the focus ring, which is `--accent`, so a focused control is instantly distinguishable from a merely bordered one — and in light mode that is the *only* visible border on the screen, which makes focus unusually clear.

### The toggle

```html
<html data-edition="dark">
```

`dark` is in the served HTML. A user who never touches the toggle never runs a line of JavaScript to get the right edition, and never sees a flash.

- **No `prefers-color-scheme`.** The OS does not decide. Dark is the product's default regardless of what the machine says, because the team works in dark and because an edition that flips itself at sunset mid-session is a bug, not a feature.
- **Persisted in `localStorage` under `ark-edition`**, read by a small inline script in `<head>` that sets the attribute *before first paint*. A toggle that flashes the wrong edition on every navigation is the most common failure of this pattern and is not acceptable here.
- **The swap is a cut.** No transition on the change. The 120ms overlay-enter is still the only transition in the system.
- **The control** is the `◐` glyph in the top bar — Lucide `contrast`, 16px, `--muted`. No label, no dropdown, no third "system" option.

### Surface stack

Four levels of neutral — the canvas and three surfaces above it. Not seven.

| Level | Dark | Light | What sits on it |
|-------|------|-------|----------------|
| 0 — Canvas | `#0A0A0A` | `#FAFAFA` | The viewport. Nothing else. |
| 1 — Panel | `#141414` | `#FFFFFF` | Sidebar, main content area, cards, modals |
| 2 — Field | `#1F1F1F` | `#F0F0F0` | Inputs, secondary buttons, hovered rows, kbd chips |
| 3 — Select | `#2E2E2E` | `#E4E4E4` | Selected row, active chip, highlighted value |

**`--surface` is lighter than `--paper` in both editions.** Cards lift toward the light in dark mode exactly as they do in light mode, so the mental model of elevation never inverts.

`--field` sits *below* paper in light and *above* surface in dark. That is not an inconsistency; it is how an input area reads as distinct in each context — inset on a white page, raised on a dark one.

`--select` is the one step further, and it is what replaced the old accent highlight. In a monochrome system the selected row cannot be a colour, so it is a value: one clear step brighter than field in dark, one clear step darker in light. It is unmistakable and it never competes with `--accent`.

A card on a panel is `--surface` on `--surface`, separated by a 1px `--line` — never by a fill difference. The border does the work.

### Accent — the inversion

`--accent` is **ARK sage, `#6B8354`** — the same green that runs across ark.business, arkmarketing.ltd, arksales.ltd and arkoperations.ltd. It is the single point of contact between the product and the sites.

It is the same hex in both editions, with the same `#0A0A0A` text on top, and it clears AA in both (5.1:1 for the label, and 4.8:1 / 3.9:1 for the fill against its panel — above the 3:1 non-text floor). A sage button looks identical whether you are in dark or light, which is the correct behaviour for a brand mark.

**Why this does not re-create the problem it replaced.** The earlier version failed because sage was a *tint* — on the canvas, on every surface, on the selected row, on links, on the nav, on the heatmap. The whole field was green, which is exactly what Nenspace looks like. Here the field is achromatic and the green appears on one control. One green button on a pure-neutral page is a signature; green everywhere is a theme.

`--accent` appears on exactly three things:
- **The primary button.** One per screen. `Save`, `Send`, `Confirm`.
- **The checked control.** A checked checkbox or toggle is `--accent` fill with an `--accent-on` glyph.
- **The focus ring.** 1px, instant.

All three are the same idea: *this control is live.* Nowhere else. Not on badges, not on card headers, not on "new" indicators, not on nav, not on links, not on the heatmap, and never as a background wash. If green appears anywhere that is not an affirmative control, the discipline has already broken.

A screen shows **at most one sage element at rest** — the primary button — and a second only while something is focused.

`--select` handles emphasis-by-surface: the selected row, the active tab or chip, a highlighted value in a brief. A screen should show at most one `--accent` element and at most three `--select` elements. If it shows more, something that is not the primary action is pretending to be.

Links and the active nav item are `--ink` against `--muted` siblings, plus a 1px underline. They are deliberately *not* green: if links were sage, the accent would stop meaning "the live control" within one screen.

### Clay — the only hue

`--clay` is the single chromatic value in the product. It exists because a failure state has to be distinguishable from a neutral one at a glance, and in an otherwise colourless interface a single warm red is unmissable without being loud.

It appears on: error text, the error banner border, destructive action text, failure badges, and an unacknowledged handoff. Nothing else. The moment clay shows up somewhere that is not a failure, the palette is open and the system is gone.

Destructive buttons are `--clay` text on `--field` — never a clay fill. The only clay fill in the system is `--clay-fill` behind the error banner.

### Heatmap — a density scale in grey

Four steps, no more:

```
empty     --field       nothing happened
low       #3D3D3D dark / #C4C4C4 light
mid       #7A7A7A both
high      --ink         4+
```

The scale runs from "reads as background" to "maximum contrast with background," which means it lightens as it climbs in dark mode and darkens as it climbs in light mode. Same structure, same code, correct in both. The mid step is identical in both editions — the exact midpoint, where the scale pivots.

The thresholds are per-metric. The four cells are the same size, 2px gap, 2px radius. **No `--line` between heatmap cells** — a pure line around a 28px square would swallow the square. Gaps separate them.

### Error and destructive — Wealthsimple's banner

```
[--clay-fill background, 1px --clay border, 4px radius, 12px 16px padding]
Your email or password was incorrect.        ← Plex Sans 400 14px --clay
```

That's the whole error component. No icon, no title, no dismiss. It sits above the form, inside the card, full card width.

The error banner is the one place a border is not `--line`. It is `--clay`, because the border is carrying the error state, not the structure.

### Contrast

Approximate ratios. Verify on real hardware before shipping.

| Pair | Dark | Light |
|------|------|-------|
| `--ink` on `--paper` | ~17:1 | ~19:1 |
| `--muted` on `--paper` | ~5.4:1 | ~4.8:1 |
| `--clay` on `--paper` | ~5.3:1 | ~5.6:1 |
| `--clay` on `--clay-fill` | ~5.0:1 | ~5.2:1 |
| `--accent-on` on `--accent` (primary button) | ~5.1:1 | ~5.1:1 |
| `--accent` fill against its panel | ~4.8:1 | ~3.9:1 |
| `--ink` on `--select` | ~11:1 | ~14:1 |
| `--line` on `--surface` (hairline) | ~1.22:1 | ~1.06:1 |
| `--line` on `--paper` (hairline) | ~1.31:1 | ~1.02:1 |
| `--select` on `--surface` (selected row) | ~1.36:1 | ~1.2:1 |
| `--select` as a control border | ~1.36:1 | ~1.2:1 |
| `--surface` on `--paper` (card lift) | ~1.4:1 | ~1.04:1 |

`--muted` is the token most likely to drift in either edition. It sits just above the AA floor by design — that is what makes chrome quiet. Lock it with a lint rule, not a comment.

`--line` sits at the bottom of the table by design. It is the only value in the system that is deliberately low-contrast — it is structure, not information, and nothing needs to read it. In light it is barely there at all; see the note above on what that costs and how to compensate.

---

## Spacing — Clay's 8px Grid

```
4   8   12   16   24   32   48   64
```

Eight steps. The sites' 96/128/192 don't exist in software — a tool never needs that much air between two things.

| Use | Value |
|-----|-------|
| Inside a control (button, input, chip) | 8px 12px |
| Inside a card | 16 |
| Between fields in a form | 16 |
| Between cards in a grid | 16 |
| Between sections on a page | 32 |
| Sidebar padding | 16 |
| Main panel padding | 32 |
| Between a section label and its content | 8 |
| Between list rows | 0 — rows touch, `--line` between |

### Content width — Nenspace's narrowness

| Shell | Max content width |
|-------|------------------|
| Home (centred, no sidebar) | 960px |
| Work (sidebar + main) | Sidebar 240px fixed; main fluid, content inside main max 1120px |
| Reading (a brief, a note) | 560px measure |
| Auth | 400px card |

On a 2560px display the Home shell uses 960px and leaves 800px of paper on each side. That's correct. Nenspace does it and the emptiness is the calm. Don't fill it.

---

## The Shells

The reference for every shell is the canvas in `design/` (`process-shell.html`, artboards
`Main` · `Process` · `Sidebar` · `Chat` · `Spaces` · `Space` · `Practice` · `Today` · `Ambient`).
Where this text and the canvas disagree, the canvas is right and this text is behind. Surfaces
with no artboard yet are specified in `design/SURFACES.md` — one block each: purpose · density ·
what the model says first · layout · components · keyboard — and a Frontend prompt for such a
surface reads that block before it draws.

**Density** is a per-surface attribute, not a token: `DENSE` (44px rows, scanning — today,
decisions, the console), `BALANCED` (cards and briefs — space, pillars, review) or `EDITORIAL`
(the 560 measure, reading and writing — logbook, chat, a brief's body). It changes spacing
and which type role carries the content; it never changes a colour or adds a component.

### Top — paper, no fill, no line

Every screen. 56px tall, on `--paper`. **No `--surface` fill and no line beneath** — the bar is
the top of the page, not a component on it. That is the single largest source of calm in the
product: the chrome is not drawn, it is placed.

```
PROCESS                              ⌘K  process · space                              ◐  ⚙
```

Left: wordmark, Plex Mono 700 16px, 0.08em. Centre: the **pair** — `process` (the thinking
partner) and `space` (the surfaces) in Plex Mono 500 12px lowercase, a middle dot between, the
active one `--ink`, the other `--muted`, no underline. The `⌘K` chip sits before the pair on
`space` pages and after `process` on work pages. Right: two Lucide icons at 16px `--muted` — the
edition toggle (`contrast`) and settings.

**Work pages carry the full nav in the centre** instead of the pair: `process ⌘K · today ·
memory · logbook · habits · projects · agents`, active in `--ink`. The surfaces are PROCESS.md's;
`confluence · media · review · decisions · rooms · mail · finance · console` are reached through
`⌘K`, not listed. For client portals the nav is the client's modules.

### Home shell — `space`

No sidebar. Content centred at 960px, everything at the top, **the lower two-thirds of the screen
empty.** Used for the HQ home, a portal's landing, any screen that is a *situation* rather than a
*list*. Two 16px icons stack in the right margin below the top bar: `+` and the arrange grid.

```
                        September 11                     ← Plex Serif 600 48px
                          Friday                         ← Plex Sans 400 15px --muted
                    WK37  /  D254  /  EVENING            ← Plex Mono 600 10px, --muted,
                                                            EVENING in --accent
                                                         ← 28px
        today · memory · logbook · habits · projects · agents   ← Plex Mono 500 12px --muted
                                                         ← 48px
     ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
     │ TODAY    0/3 │ │ CALENDAR     │ │ WORKING MEM 3│  ← three columns, 16px gap,
     │              │ │              │ │ [free up…]   │     cards stacked top-down
     └──────────────┘ └──────────────┘ │              │
     ┌──────────────┐ └──────────────┘ └──────────────┘
     │ LOGBOOK WK37 │ ┌──────────────┐ ┌──────────────┐
     │ Start writing│ │ HABITS       │ │ AGENTS     2 │
     └──────────────┘ └──────────────┘ └──────────────┘
```

The date stamp is the one Plex Serif moment on the home. `WK37 / D254 / EVENING` is week-of-year,
day-of-year, and time-of-day — the time-of-day word in `--accent` because it's the one that
changes during a session. **The surface nav sits under the stamp**, not in the top bar, in
`--muted` mono with no active state — it is almost invisible, which is the point.

The six cards are `today · calendar · working memory · logbook · habits · agents` (PROCESS.md).
Each is 1px `--line`, 8px radius, 16px padding, **compact** — three lines at most — laid out as
three columns of stacked cards so heights vary and nothing is padded to match. Label top-left in
Plex Mono 600 10px uppercase with the count in the margin on the same line; a footer of mono
verbs (`open · sift`). Capture lives inside `working memory` as a 36px `--field` row. The grid is
3 across on desktop, 1 on mobile, never 2 or 4.

### Work shell — `today` and every list

Two panels **inset on paper**: 16px margin all round, 16px between them, each `--surface` with a
1px `--line` border and 8px radius. Sidebar 240px; main fluid, 32px padding, content inside main
max 1120px.

```
  ┌─ SIDEBAR ─────────┐  ┌─ MAIN ───────────────────────────────────────────┐
  │ ⌘K  ⊕             │  │ Today  today · tomorrow      Reschedule  Clarify  [Capture] │
  │                   │  │ ──────────────────────────────────────────────── │
  │ CAPTURE           │  │ EVENING · REFLECT — the week · 40 min left       │
  │ ○ Inbox        12 │  │                                                  │
  │                   │  │ MORNING                                          │
  │ FOCUS             │  │ ☑ HEALTH   Run, 5 km, the canal   PHYSICAL · LIVE│
  │ ● Today         3 │  │                                                  │
  │ ○ Upcoming     15 │  │ DAY                                              │
  │                   │  │ ☐ WEALTH   Call Dan at MyRide     SOCIAL · MYRIDE│
  │ LISTS             │  │                                                  │
  │ ○ Anytime       8 │  │ CARRIED                                          │
  │ ○ Someday      21 │  │                  Nothing here                    │
  │ ○ Waiting on    2 │  │                                                  │
  │ ARCHIVE         ▾ │  │                          TODAY 1/3 · THIS WEEK 6/15│
  └───────────────────┘  └──────────────────────────────────────────────────┘
```

**Sidebar anatomy:**
- Top row: `⌘K` chip and a `+` icon, 16px, `--muted`
- Section labels: Plex Mono 600 10px uppercase `--muted`, 24px above, 8px below
- Items: a 14px Lucide glyph, then Plex Sans 400 14px, then a right-aligned count in Plex Mono 400 11px `--muted`. 36px row height. 4px radius on hover (`--field`) and selected (`--select`, text `--ink`).
- Collapsible sections have a `▾` at the far right of the label

**Main header:** page title Plex Sans 700 24px left with the `today · tomorrow` tab pair beside
it when the page has a time dimension; actions right — a text button, a secondary, and the one
primary. 1px `--line` beneath. Under it, one mono line names **the block you are in** and its
remaining time, with the day's WORK focus and ART discipline at the right.

**Rows:** 44px, checkbox left (`--select` border; `--accent` fill when done, text `--muted`),
then the area as mono chrome in a fixed 80px column, then the task in Plex Sans 14, then two
mono tags right-aligned — the energy shape (`DEEP · SHALLOW · SOCIAL · PHYSICAL`) and the project.
Entity names inside the task text are Plex Mono 500 13px (the HQ mono ratio, below).

**Main footer:** a status line, Plex Mono 400 11px `--muted`, right-aligned. `TODAY 1/3 · THIS
WEEK 6/15`. Every list page has one.

### The process view — the thinking partner

`process` is the other half of the pair: the dialogue surface, nenspace's `nen`. Six states, all
on the canvas.

**Landing.** A 40px `--surface` rail inset at the left (1px `--line`, 8px radius, five 16px
glyphs: threads, search, capture · a divider · vault, the practice). Centred, at 296px from the
top: the hero question *What happened?* in Plex Serif 600 40px — the model's opening line, not a
greeting — and beneath it a 576px `--surface` card: `First thought…` in mono `--muted`, a row of
four 16px glyphs (capture, note, web, refresh), and at the right `explore ▾` in mono and a 32px
`--field` send square. Nothing else on the screen.

**Sidebar expanded.** The rail becomes a 320px panel, same border and radius. Top: `Search
entries…` with the five glyphs inline; a focus ring in `--accent` when opened from the search
glyph. Then `▾ SPACES 3` with `+` in the margin and one row per pillar (`HEALTH · WEALTH ·
JOY`, the link glyph, count in the margin); a line; `WEEKS` with `▾ WK37 2` open and its
chats as 36px rows (title in Plex Sans 14, the chat id in mono `--muted`), `WK36 0`… collapsed.

**Chat.** The selected chat row takes `--select`. The thread sits right of the panel: the chat
title top-right in mono `--muted`; your messages right-aligned in Plex Sans 14 `--muted`; the
model's replies left-aligned in Plex Serif 15 at the 560px measure; the field card at the bottom
reads `Reply…`.

**Spaces.** Centred 832px column: the link glyph and `spaces` as a page title, `+ new space` as a
secondary button, a 36px `--field` search row, then 2-across cards (the one place the card grid
is 2, not 3): pillar name as an uppercase mono label, `3 chats · lost a client · 2h` as meta.

**Space.** `‹ spaces` in mono, the pillar as page title with `pin · edit` right, its AIM in Plex
Serif 15 prose, `3 chats · last 2h`, then 44px rows: the pinned pillar dialogue first (`PINNED`
badge), then chats with meta and id. `+ add an existing chat` as a mono link.

**The practice.** A bottom drawer over `--backdrop`: 360px, `--surface`, 1px `--line` on top,
a 44px header with `the practice` in mono and a close glyph. A 560px column: up to three Plex
Serif 700 40px numbers over Plex Sans 14 `--muted` labels (days · messages · decisions), a mono
tab pair, a collapsible `MESSAGES · WK37` week-row heatmap and a collapsed `CONVERSATIONS`.
Enter 120ms, exit cut.

### Ambient — after 60 seconds untouched

Everything fades to: the date in Plex Serif 600 64px, the `FRIDAY / WK37 / D254 / EVENING` line,
the current block and its remaining time in mono, `NEXT` and the one next action in Plex Sans 14,
a 32px `+`, and the one-true-sentence assist strip at the bottom in mono `--muted`. No bar, no
nav, no cards. A monitor you can glance at without being pulled in.

---

## Components

### Button — three levels

| Level | Fill | Text | Border | Use |
|-------|------|------|--------|-----|
| Primary | `--accent` | `--accent-on` | none | One per screen. `Save`, `Send`, `Confirm`. |
| Secondary | `--field` | `--ink` | none | `Cancel`, `Reschedule`, most actions |
| Text | none | `--muted` | none | Toolbar actions, `+ New`, `Edit` |
| Destructive | `--field` | `--clay` | none | `Delete`, `Archive` — never a red fill |

All: Plex Sans 600 13px, 8px 12px padding, 32px height, 4px radius. Instant hover, no transition.

Primary hover is `--accent-hover` — one step lighter, the same value in both editions, and the only hover in the system that earns a token. Secondary hover is `--select`. Text-button hover is a `--field` background.

There is one primary button per screen. If a screen needs two primary actions, it's two screens.

### Input — Wealthsimple's field

```
┌────────────────────────────────┐
│ Email                          │   ← label: Plex Sans 400 12px --muted, top-left inside
│ priya@                         │   ← value: Plex Sans 400 14px --ink
└────────────────────────────────┘
```

`--field` fill, no border, 4px radius, 12px 16px padding, 52px tall when labelled (36px when placeholder-only). The label lives inside the field above the value — Wealthsimple's pattern. Focus: 1px `--accent` ring, instant. Error: 1px `--clay` ring, error text in `--clay` Plex Sans 400 12px beneath, 4px gap.

Textareas: same, min-height 96px, resize vertical only.

Selects: same field, a 16px Lucide chevron right-aligned. Native `<select>` styled, not a custom dropdown.

Checkboxes: 16px, 1px `--select` border — not `--line`, which vanishes at this size — 2px radius, `--accent` fill when checked with an `--accent-on` glyph. Same affirmative pairing as the primary button.

### Card

`--surface`, 1px `--line`, 8px radius, 16px padding. No shadow. Ever.

```
WORKING MEMORY                          3 ← label: Plex Mono 600 10px uppercase --muted;
                                          ← 12px   the count in the margin, Plex Mono 400 11px
[content — three lines at most]
                                          ← 12px
open · sift                               ← optional footer: Plex Mono 400 11px --muted, links
```

A card has a label with its count in the margin, at most three lines of content, and optionally a footer line of mono links. Nenspace's `open · sift`. That's the whole card. No header bar, no icon, no "..." menu unless the card is a list item with actions.

### Metric

One number, one label. On a card or standalone.

```
$284,000                                  ← Plex Serif 700 64px, tabular
revenue this month                        ← Plex Sans 400 14px --muted
+8% vs 30d                                ← Plex Mono 400 11px --accent (or --clay if negative)
```

The one place Plex Serif appears inside a card. A dashboard has at most three of these visible. More than three and none of them are the headline.

### Table

```
LEAD              VEHICLE           SOURCE     RESPONSE    STATUS         ← header: Plex Mono 600 10px uppercase --muted
──────────────────────────────────────────────────────────────────────    ← 1px --line
Priya Sandhu      2021 RAV4         Meta       0:02:14     CONTACTED      ← Plex Sans 400 14px; figures Plex Mono 500 13px tabular
Marcus Lee        2023 F-150        Website    4:37:00     UNWORKED       ← status in Plex Mono 600 10px; UNWORKED in --clay
```

Row height 44px, 1px `--line` beneath each row. Hover `--field`. Selected `--select`. The header row gets the same `--line` beneath it. No zebra striping, no column borders. Numeric columns right-aligned, mono, tabular. Status columns mono uppercase, `--clay` for failures, `--accent` for completions, `--muted` for neutral.

Sortable headers: click toggles, a 12px Lucide arrow appears beside the active sort. Instant.

Empty table: the header row stays, then *Nothing here* — Plex Serif 400 italic 14px `--muted`, centred, 48px above and below. No illustration.

### List row — Nenspace's task line

```
☐  WEALTH - Talk to MyRide and try to save campaign                    LD-0412
```

44px tall, 12px 16px padding, 1px `--line` beneath. Checkbox left, text Plex Sans 400 14px, ID or meta right-aligned in Plex Mono 400 11px `--muted`. Hover `--field`. Click anywhere on the row opens it.

Grouped lists — `YESTERDAY` / `MORNING` / `DAY` / `EVENING` — use Plex Mono 600 10px uppercase `--muted` as the group label, 24px above, 8px below. An empty group still shows its label and *Nothing here*.

### Tabs and view switcher

Nenspace's `list · pile · shelves` — mono text, middle dots, active in `--ink`, inactive `--muted`. No underline, no box, no pill. Plex Mono 500 12px. Sits right-aligned above the content it switches.

For filter chips (Clay's rail): Plex Sans 600 12px, `--field` fill, 16px radius (the one place radius goes above 8 — chips are pills or they read as buttons), active `--select`. Horizontal row, 8px gap, wraps.

### Badge and count

Counts: Plex Mono 400 11px `--muted`, right-aligned in the margin, no background. Nenspace's `12`.

Badges — a status word on a row or card: Plex Mono 600 10px uppercase, no background, colour carries the meaning. `CONTACTED` `--accent`. `UNWORKED` `--clay`. `PENDING` `--muted`. A badge is a word, not a lozenge.

### Keyboard chip

```
⌘K
```

Plex Mono 500 10px, 1px `--select` border, 2px radius, 2px 6px padding, `--field` fill. The border is `--select` rather than `--line` because `--line` on `--field` measures 1.09:1 and disappears. Appears in the top bar and beside actions in the command palette. Nowhere else.

### Section label

Plex Mono 600 10px uppercase `--muted`, 0.05em. Above any group of things. Clay's eyebrow, Nenspace's `CAPTURE`. The most-used chrome element in the product.

### Empty state — Nenspace's

```
                    No leads yet.                     ← Plex Serif 600 40px — the floor — only on a full-page empty
                    Nothing here                      ← Plex Serif 400 italic 14px --muted — inside a card, group, or table
```

Two forms. A full page with nothing gets the Plex Serif headline and one Plex Sans 14px sentence beneath. A card, group, or table with nothing gets *Nothing here* in italic. No illustration, no icon, no "get started" button unless the empty thing genuinely has a first action — and then it's one text button, `+ New lead`.

### Banner

Error (above): `--clay-fill`, 1px `--clay`, `--clay` text.

Info: `--field`, 1px `--line`, `--ink` text. Same shape. Used for *Fallback active* or *Updated 14:32 — 2 records changed*. No icon. No dismiss unless the banner is about a completed action, in which case it dismisses itself after 4s — a cut.

There is no success banner. A successful action shows its result. If the save worked, the saved thing is on screen.

### Modal

`--surface`, 1px `--line`, 8px radius, 24px padding, 480px wide (640 for forms), centred. Backdrop: `--backdrop` — the one permitted opacity, because a backdrop has no other way to exist. Black in both editions; a dark product does not get a light wash. Enter: 120ms opacity. Exit: cut.

```
Reschedule appointment                    ← Plex Sans 700 18px
                                          ← 16px
[content]
                                          ← 24px
                       Cancel   Confirm   ← secondary + primary, right-aligned, 8px gap
```

Title, content, two buttons. No close icon — `Esc` and `Cancel` close it. No header bar.

### Toast

Bottom-right, `--surface`, 1px `--line`, 4px radius, 12px 16px, Plex Sans 400 14px. Enter 120ms opacity, auto-dismiss 4s, exit cut. One at a time — a second toast replaces the first.

### Command palette — `⌘K`

A modal at 560px wide, no title. One input at the top (`--field`, 44px, no label, placeholder *Go to…*), then results as list rows grouped by section label. Arrow keys move, Enter selects, Esc closes. The palette is the product's search and its navigation — Nenspace's `⌘K nen` and Wealthsimple's absence of a nav bar both point here.

### Heatmap — Nenspace's habits

A table where cells are squares. 28px cells, 2px gap, 2px radius, four-step grey density scale, no borders on the cells. Row label left in Plex Sans 400 14px, column headers in Plex Mono 600 10px (`SAT 29` on two lines), a streak or total column right in Plex Mono 700 13px `--ink`. Today's column is marked by a 1px `--line` on its left edge only.

### The Brief — HQ's core record

From the Nenspace HQ plan and the Operations Morning Brief. A card in the Home grid and a full page at `/brief`.

```
BRIEF — 11 SEP 2026 · 18:40 CDT           ← Plex Mono 600 10px uppercase

HEALTH                                    ← Plex Mono 600 10px --muted
Change: seven days of the sleep window     ← Plex Serif 400 15px, 560px measure
held; Tuesday broke it.
Source: Health app · 4–11 Sep              ← Plex Mono 400 11px --muted

WEALTH
Change: MyRide proposal sent. No reply.
Source: Gmail · 9 Sep

JOY
Change: unknown.
Source: —

DECISION NEEDED                           ← Plex Mono 600 10px
Confirm the dealership follow-up offer     ← Plex Sans 600 14px, --select highlight
or park it.

DATA GAPS
Linear not connected. Lightfield stale     ← Plex Serif 400 italic 14px --muted
since 2 Sep.
```

Every pillar has exactly two fields: `Change` and `Source`. An unknown change says *unknown*, not nothing. A missing source says `—`. The one decision, if there is one, gets the `--select` highlight — it's the one highlighted element on the page. `DATA GAPS` is always present and always in italic; it's the field that keeps the brief honest.

### The Decision — HQ's other record

```
DEC-0031                                  ← ID, Plex Mono 400 11px --muted
APPROVED 11 SEP 2026 · 18:52 CDT

PILLAR        WEALTH                      ← label gutter (160px, from Operations), Plex Mono 600 10px
PLANE         ARK                            values Plex Sans 400 14px
DECISION      Send the follow-up offer to MyRide at $1,500/mo, 30-day pilot.
EVIDENCE      Proposal draft 9 Sep · Keston's reply 10 Sep
NEXT ACTION   Send by Friday 12 Sep, 12:00
OWNER         Bichar → Reminders
LIMIT         30 days · $0 spend
REVIEW        26 SEP 2026
HANDOFF       not transferred             ← Plex Mono 600 10px; --clay until "transferred"
```

`HANDOFF` is `--clay` until a receiving system has acknowledged it, then `--accent`. The colour is the only thing on the record that changes, and it changes once. The label gutter is Operations' 160px, because a Decision is a record and records share the gutter.

### Auth — Wealthsimple's split

Two panels. Left: `--paper`, 50% width, the ARK line and one sentence. Right: `--field`, 50% width, a `--surface` card at 400px centred vertically.

```
┌─ LEFT (paper) ───────────────┐ ┌─ RIGHT (field) ──────────────────┐
│                              │ │                                  │
│  ARK                         │ │        ┌──────────────────┐      │
│                              │ │        │ Welcome back     │      │  ← Plex Sans 700 20px
│  MAKE THE BUSINESS           │ │        │                  │      │
│  WORK BETTER.                │ │        │ [error banner]   │      │
│                              │ │        │ [Email]          │      │
│  ← Plex Serif 600 48px            │ │        │ [Password]     ◉ │      │
│                              │ │        │ Forgot password? │      │  ← underlined, Plex Sans 400 12px
│  One sentence in Plex Serif 400   │ │        │                  │      │
│  17px on what this portal    │ │        │ [  Log in      ] │      │  ← secondary
│  is for.                     │ │        │ [  Passkey  ⚿  ] │      │  ← primary
│                              │ │        │                  │      │
│                              │ │        │ No account? Sign up      │
│                              │ │        └──────────────────┘      │
│  Help · hello@ark.business   │ │                  iPhone · Android│
└──────────────────────────────┘ └──────────────────────────────────┘
```

The left panel carries the product's line — for a client portal, the client's own positioning, not ARK's. For HQ it's blank paper. Wealthsimple's layout, ARK's type and tokens, no image.

---

## Motion

Cuts, with one exception.

| Event | Treatment |
|-------|-----------|
| Hover on anything | Instant |
| Focus ring | Instant |
| Selected row, active tab, checked box | Instant |
| Filter, sort, search results | Instant — the list is the new list |
| Metric updates | Instant — no count-up |
| Modal, drawer, palette, toast **enter** | 120ms opacity, linear |
| Modal, drawer, palette, toast **exit** | Instant |
| Page navigation | Instant — no route transitions |
| Skeleton loaders | None — content is there or the space is empty |

The 120ms is the only transition in the system. It exists because an overlay appearing at frame zero, fully opaque, over the thing you were looking at, is a jolt. 120ms is below the threshold where it reads as "animation" and above the threshold where it reads as "glitch."

`prefers-reduced-motion`: the 120ms becomes 0.

---

## Rules — No Exceptions

**Inheritance**
- The four voices, zero shadows, no gradients, the word bans, and the vocabulary discipline all hold.
- Only the Seven Departures break. Nothing else.
- The four site systems stay single-edition light. Two editions are a software-only departure.

**Type**
- Plex Serif has two registers only: hero at 40–96px and prose at 15px. Nothing between 16px and 39px.
- One or two hero-serif instances per screen, maximum.
- The wordmark is Plex Mono 700 16px. There is no display-size exception anywhere in the system.
- Plex Sans 14px is body. Not 16, not 15.
- Mono is chrome: nav, labels, meta, IDs, shortcuts, counts, table figures. Never content.
- Nav lowercase. Section labels uppercase. Both mono.
- Plex Serif for prose over two sentences only. Never on a label or cell.

**Colour**
- Thirteen tokens. No fourteenth. Same names in both editions; only the neutrals and clay change value.
- No component names a colour. If a component spec needs an `if dark`, the token set is wrong.
- Every neutral is achromatic — equal R, G and B. A tinted hex that is not `--accent`, `--accent-hover` or `--clay` is a bug.
- Every line is `--line`. No second line colour, no ink-weight rule, no alpha border. The top bar draws none.
- `--line` is derived: midpoint of `--field` and `--select` in dark, of `--field` and `--surface` in light. If an input moves, recompute it.
- The line is subtle by mandate. It must never be the first thing the eye finds on a screen. If it reads as a drawn rule rather than an edge, it is too strong.
- `--line` sits below `--select` in the ramp. Dividers vanish inside a selected row and that is correct — the fill separates it.
- Checkboxes and keyboard chips border in `--select`. Every larger element borders in `--line`.
- Light mode is borderless by design. No layout may depend on a light-mode line to be legible.
- If light mode reads as structureless, darken `--paper` — never darken `--line`.
- `--accent`, `--accent-on` and `--accent-hover` are identical in both editions. If one edition's green differs, it is wrong.
- Table rows and list rows carry a 1px `--line` divider — load-bearing in dark, decorative in light.
- Three surface levels. `--surface` is lighter than `--paper` in both editions. Cards on panels are separated by `--line`, not by fill.
- Dark is the default and ships in the served HTML. No `prefers-color-scheme`, no third "system" option.
- The edition is applied before first paint. A flash of the wrong edition is a defect.
- `--select` on the selected item, the active chip, and one highlight per brief. Maximum three visible per screen.
- `--accent` on the primary button, the checked control and the focus ring — nothing else, ever. At most one sage element at rest per screen.
- `--clay` on errors and destructive states only. Sage and clay are the only two colours in the product.
- Links and active nav are `--ink` plus an underline — never green.
- `--clay` on error text, error borders, destructive text, failure badges, unacknowledged handoffs. Never a red fill.
- `--backdrop` is the only opacity in the system.

**Layout**
- 8px grid. Eight steps.
- Home shell 960px centred. Work shell 240px sidebar. Reading 560px.
- Home card grid 3 across, stacked columns; the spaces grid is 2 across at 408px. Never 4.
- Every list page has a status line in the footer.
- Every card has a section label top-left.

**Controls**
- 4px radius on controls, 8px on cards, 16px on filter chips, 2px on kbd and heatmap cells. Nothing else is rounded. Images are never rounded.
- One primary button per screen.
- Inputs are filled, borderless, label-inside. Focus is a 1px ring.
- Icons are Lucide, 16px, 1.5px, `--muted`, controls only. 14px in sidebar rows. Never in content, never coloured, never decorative.

**Empty and error**
- *Nothing here* in italic. No illustration, no icon.
- Errors are a banner or a ring. No toast for errors.
- No success banner. Success is the result being visible.

**Words**
- Nav items are one lowercase word.
- Section labels are one or two uppercase words.
- *Nothing here*, not *No data* or *Empty*.
- *Brief*, not *Dashboard*. *Decision*, not *Task*. *Pillar*, not *Category*.
- No "Welcome!", no "Hi Bichar 👋", no "You're all caught up!" — ever.

**Banned**
- Drop shadows, glows, elevation of any kind
- Pill buttons
- Skeleton screens, spinners, progress bars
- Charts — a metric is a number; a trend is a heatmap or a table
- Avatars, profile pictures in the chrome
- Notification dots, red badges with counts
- Toasts for errors
- Onboarding tours, tooltips on first visit
- Illustrations, especially in empty states
- `prefers-color-scheme` auto-switching, or a third "system" edition option
- A second line colour, an ink-weight rule, or a border drawn with alpha
- Any hue other than `--accent` and `--clay` — including a tint on a neutral
- Green on a link, a badge, a nav item, a heatmap cell, or any background wash
- Any transition other than the 120ms overlay enter — including on the edition swap

---

## Checklist

- [ ] All three Plex widths loaded from one request; no other family anywhere
- [ ] Plex Serif appears only at 40–96px (hero) and 15px (prose) — never between
- [ ] Wordmark is Plex Mono, not serif; no display-size exception exists
- [ ] Plex Sans body at 14px; mono for all chrome; Plex Serif only for prose
- [ ] Thirteen tokens per edition, identical names; every neutral achromatic (R=G=B)
- [ ] `data-edition="dark"` is in the served HTML; light is opt-in via the toggle
- [ ] Edition applied from `localStorage` before first paint — no flash on load or navigation
- [ ] No `prefers-color-scheme` query anywhere in the codebase
- [ ] Every line uses `--line` (`#262626` dark / `#F7F7F7` light), derived as above
- [ ] Checkboxes and keyboard chips use a `--select` border, not `--line`
- [ ] No layout in either edition depends on a border being visible to read
- [ ] Tables and lists carry a 1px `--line` divider per row
- [ ] No light-mode layout depends on a border to read — cards separate by padding and fill
- [ ] `--accent` is `#6B8354` in both editions; sage appears only on the primary button, checked controls and focus rings
- [ ] `--accent` and `--clay` are the only non-grey values anywhere in the codebase
- [ ] No component stylesheet contains a literal hex except the two primary-button hover values
- [ ] Three surface levels; cards bordered, never filled differently
- [ ] Max three `--select` elements visible per screen; one primary button
- [ ] Top bar on paper with no fill and no line: wordmark, `⌘K`, the `process · space` pair (full nav on work pages), two icons
- [ ] Home shell centred at 960px with the date stamp in Plex Serif, `WK / D / TIME-OF-DAY`, the surface nav under it in muted mono, six compact cards in three stacked columns, the lower two-thirds empty
- [ ] Work shell: two panels inset 16px on paper, 1px `--line`, 8px radius; 240px sidebar with section labels, glyph + text + count rows; main with header, the block line, and a status footer
- [ ] Inputs filled and borderless with label inside; focus ring instant
- [ ] Tables: mono headers, tabular figures, `--line` rows, no zebra
- [ ] Empty states are *Nothing here* in italic or a Plex Serif headline; no illustration
- [ ] Error banner is `--clay-fill` with `--clay` text; no error toasts
