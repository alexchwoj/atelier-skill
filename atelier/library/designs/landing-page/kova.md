---
version: "1"
name: "Design System Inspired by Aiden Kova"
description: "Kova is quiet Japanese-minimal: a warm bone canvas, near-black ink, 1px hairlines doing all delineation, tiny uppercase meta labels instead of display headings, and exactly one serif-italic flourish per moment. Headline scale is deliberately modest — nothing on the page is larger than the footer email (3.25rem). Motion is transform-only and never hides content: a hide-on-scroll header, a 1px reading-progress hairline, video cards with parallax inside bordered frames, and settle-in rises that work with JavaScript disabled. The portfolio of nine projects is the loudest thing here, exactly as intended."
colors:
  paper: "#f7f6f3"   # warm bone canvas — every surface
  ink: "#141414"     # near-black text
  faint: "#77746e"   # secondary text — notes, metas, CV years
  line: "#e3e1dc"    # 1px hairlines — the only delineation on the page
  clay: "#b0a696"    # reserved muted tone, rarely used
typography:
  sans:  { fontFamily: "'Instrument Sans Variable', 'Helvetica Neue', sans-serif", weights: "400/500", role: "body và heading — hero 1.75→2.125rem leading 1.35; project titles 15px medium; services 2xl" }
  serif: { fontFamily: "'Instrument Serif', Georgia, serif", weights: "400 italic", role: "flourish ONLY — 'a very long time' trong hero + địa chỉ email footer. Một lần nghiêng cho mỗi khoảnh khắc" }
  helv:  { fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", weights: "400", role: "numerals only — service numbers 01–04 và cột năm CV (0.8125rem)" }
  meta:  { fontFamily: "sans", weights: "500", role: ".meta — 0.6875rem, tracking 0.14em, uppercase; mọi section heading là meta label, không bao giờ display type" }
spacing:
  container: "max-w-6xl, px-6 md:px-10"
  rhythm: "py-24 md:py-32, sections chia bằng border-t line"
  hero: "pt-44 pb-28 md:pt-60 md:pb-40"
  work-grid: "gap-x-8 gap-y-16 md:gap-y-20"
rounded:
  none: "0 — không radius ở bất cứ đâu; khung project là border vuông"
motion:
  ease: "cubic-bezier(0.23, 1, 0.32, 1) cho CSS; power3.out cho GSAP"
  load: ".rise 900ms, stagger 90ms qua --rise-index — hero only (eyebrow → headline → CTA)"
  header: "hide-on-scroll — yPercent -100 paused tween, play khi cuộn lên, reverse khi cuộn xuống, start top -120"
  progress: "#scroll-progress — 1px ink hairline scaleX 0→1, scrub 0.4"
  parallax: "visual: scale 1.08 + yPercent -4→4 scrub; hero drift yPercent -10"
  settle: "[data-rise] y:32→0, 1s power3.out, once, top 92% — TRANSFORM ONLY, không bao giờ opacity"
  hover: "link-draw underline 320ms trái→phải (thoát cùng phía); video scale 1.03 700ms; services translate-x-2 500ms"
components:
  header: "fixed h-14, bg-paper/90 backdrop-blur, border-b line, hide-on-scroll; progress hairline z-60 phía trên"
  hero: "eyebrow meta → headline 2.125rem max-w-2xl (serif-italic flourish) → CTA link-draw"
  work: "9 project video cards — khung border line, .visual-inner parallax, video hover scale ở tầng SÂU HƠN parallax; meta 'client · discipline · year' + note 1 dòng"
  about: "grid [200px_1fr] — label trái, 2 đoạn văn + 2 dl (Experience/Recognition) hàng border-b, năm bằng Helvetica"
  services: "ol 4 hàng — số Helvetica, tên 2xl translate-x on hover, mô tả faint"
  footer: "eyebrow + mailto 3.25rem (email serif-italic + link-draw) + bottom bar links"
---

# Design System Inspired by Aiden Kova

## Overview

Kova is a portfolio that behaves like its own design philosophy: *mostly restraint*. The whole site lives on one warm bone surface (`{colors.paper}`) with near-black ink (`{colors.ink}`), and **1px hairlines** (`{colors.line}`) do every ounce of structural work — section seams, project frames, CV rows, the reading-progress indicator. There are no cards, no shadows, no accent color, no radius. Where a typical portfolio shouts its section names in display type, Kova whispers them in **11px uppercase meta labels** and lets the work carry the volume.

The typographic gesture that defines the site is the **single italic flourish**: one phrase in the hero ("a very long time") and the footer email address are set in Instrument Serif italic — everything else is Instrument Sans at 400/500. Even the numerals get their own quiet system: service numbers and CV years render in **Helvetica Neue**, a third voice reserved exclusively for digits. Display scale is capped by rule: *nothing may be larger than the footer email at 3.25rem* — so the biggest statement on the page is, fittingly, the invitation to talk.

Motion is engineered around one inviolable principle: **content is never hidden**. Every scroll effect is transform-only — the settle-in rises translate elements up 32px but never touch opacity, the header hides and returns on scroll direction, a 1px progress hairline fills along the top, and each project video breathes with a scale-1.08 parallax inside its bordered frame. Disable JavaScript and the page is simply… complete. The structural trick worth stealing: the **parallax transform and the hover scale live on different elements** (`.visual-inner` wrapper vs. the `<video>` itself), so GSAP and CSS never fight over one transform.

The content model is nine projects with looping video previews, alternating full-width (21:9) and half (4:3) frames, each captioned like a catalogue entry: title, `client · discipline · year`, and a one-line note written with the same care as the design ("Named for rain. A mark that appears only when the bottle is held to light.").

**Key Characteristics:**
- **One surface, hairline architecture** — bone everywhere; 1px `{colors.line}` is the entire structural vocabulary.
- **Meta labels as headings** — sections are named in 11px caps; display type is banned above 3.25rem.
- **One italic per moment** — Instrument Serif italic appears exactly twice, as punctuation for the two most human sentences.
- **Three-voice type** — Sans for language, Serif italic for flourish, Helvetica for digits.
- **Transform-only motion** — no element ever starts invisible; rises, parallax, and header hide are pure translate/scale.
- **Split-transform architecture** — parallax on the wrapper, hover scale on the media; the pattern that keeps both smooth.
- **Catalogue voice** — every project note is one considered sentence; no case-study bloat.
- **Underline-draw grammar** — links draw left→right and exit the same side; the only hover flourish besides video scale.

## Colors

> Source: five tokens; three do all the work.

### Surface
- **Paper** ({colors.paper}): warm bone, every surface — header (at /90 + blur), page, frames. There are no bands, no alternates; the single surface is the point.

### Ink
- **Ink** ({colors.ink}): text and the progress hairline. `::selection` inverts (ink behind paper text).
- **Faint** ({colors.faint}): the second voice — notes, metas, CV years, service descriptions. Warm gray, never blue-gray.
- **Clay** ({colors.clay}): declared, almost never used — a reserve tone for future needs; using it liberally would be a misread of the system.

### Line
- **Line** ({colors.line}): all hairlines. One value; on a single surface there is no need for a second.

### Accent
- None. The videos supply all color. Introducing an accent would demote the work.

## Typography

### Font Families

- **Instrument Sans Variable** (400/500, Fontsource) — body, headings, meta labels.
- **Instrument Serif** (400 italic, Fontsource) — the flourish. Two appearances, sitewide.
- **Helvetica Neue** (system stack) — numerals only: `01–04`, CV years.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| footer email | 3xl → 3.25rem, leading 1.15 | 400 (serif-italic address) | The largest type on the page |
| hero headline | 1.75 → 2.125rem, leading 1.35 | 400 | With the italic phrase |
| services name | xl → 2xl | 400 | Row hover slides it |
| project title | 15px | 500 | With link-draw |
| body | 17px, leading 1.7 | 400 | About paragraphs |
| note / description | 14px | 400 | faint |
| `.meta` | 0.6875rem, 0.14em, caps | 500 | All labels + nav |
| numerals | 0.8125rem Helvetica | 400 | Services, CV years |

### Principles

- **Modesty as hierarchy**: the hero headline is body-adjacent scale (2.125rem); attention flows to the videos because type refuses to compete.
- **The italic is rationed** like Vault rations lime: one phrase, one email. A third use dilutes both.
- **Digits get Helvetica** — a nearly invisible decision that makes the CV and service numbers feel typeset rather than defaulted.

### Note on Font Substitutes

Instrument Sans/Serif are self-hosted via Fontsource (variable + 400-italic import). Helvetica Neue is the assumed system face for numerals — do not webfont it. If Instrument is unavailable, the system fails visibly; substitute nothing silently.

## Layout

### Spacing System

- Container `max-w-6xl px-6 md:px-10`; sections `py-24 md:py-32` separated by `border-t` hairlines.
- Hero gets the long inhale: `pt-44 md:pt-60`.
- Work grid: `gap-x-8 gap-y-16 md:gap-y-20`; About uses a `[200px_1fr]` label/content grid with gap-x-16.

### Grid & Container

- Work: 1 col → `md:grid-cols-2`; `size: full` projects span both columns at `aspect-[16/9] md:aspect-[21/9]`, `half` cards at 4:3. The full/half rhythm (full, half, half, full…) paces the scroll like a photo book.
- Services: `[3rem_1fr]` mobile → `[6rem_240px_1fr]` md — number, name, description columns.

### Whitespace Philosophy

The site's Japanese-minimal read comes from *ratio*, not emptiness: modest type + wide margins + one-sentence captions. The hero's top padding (15rem on desktop) is the boldest single spacing decision — hold it.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat paper | Everything |
| line | 1px `{colors.line}` | All structure |
| blur | `bg-paper/90 backdrop-blur-sm` | The fixed header only |

No shadows, no gradients. Depth exists only inside the project frames, where parallax makes footage drift behind a hairline border like prints under glass.

## Shapes

### Border Radius Scale

None — `{rounded.none}`. Frames, buttons, and rows are all square-cornered. The header pill temptation must be resisted; this system is rectilinear.

### Iconography

None. The site is typography-only — even the reading progress is a hairline, not a widget.

## Components

### Header ({components.header})

`fixed`, 56px tall, paper/90 + blur, bottom hairline. It hides by sliding `yPercent: -100` when scrolling down past 120px and returns on any upward scroll — a paused GSAP tween driven by ScrollTrigger direction. Above it, the `#scroll-progress` hairline fills `scaleX 0→1` with `scrub: 0.4`. All nav items are `.meta .link-draw` buttons smooth-scrolling with a −72px offset.

### Hero ({components.hero})

Three `.rise` lines at 90ms stagger: eyebrow (`Art Director & Designer`), the headline with its serif-italic "a very long time," and the CTA (`Start a conversation`). The whole block drifts `yPercent: -10` as it scrolls away.

### Work card ({components.work})

The load-bearing pattern: `.project-card group` → bordered `.project-visual` → `.visual-inner[data-parallax]` (GSAP: scale 1.08, yPercent −4→4 scrub) → `<video>` (CSS hover: scale 1.03, 700ms). Two transforms, two owners, zero conflict. Caption row: 15px medium title with link-draw, `client · discipline · year` meta right, note under.

### About ({components.about})

Label-left grid ("Profile"), two paragraphs (second faint), then two definition lists — Experience and Recognition — hairline rows with Helvetica year columns. It reads like the colophon of a well-made book.

### Services ({components.services})

Ordered list, four rows: Helvetica number (faint → ink on hover), name sliding `translate-x-2` at 500ms, description capped at `max-w-md`. No links — services are stated, not sold.

### Footer ({components.footer})

The crescendo: eyebrow ("New projects, collaborations, quiet ideas"), then `Say hello → hello@kova.studio` at 3.25rem with the address in serif italic + link-draw — the page's biggest type and its only imperative. Bottom bar: Are.na / Instagram / LinkedIn / Top + the rights line.

## Do's and Don'ts

### Do

- Keep every scroll effect transform-only; `[data-rise]` animates `y`, never opacity.
- Keep the parallax wrapper and hover-scale element separate (`.visual-inner` vs `video`).
- Keep section headings as `.meta` labels; resist display-type section titles.
- Keep the italic to two appearances and Helvetica to digits.
- Keep hairlines at exactly 1px `{colors.line}` — no 2px, no opacity variants beyond the specified /60.
- Keep the smooth-scroll offset (−72px) in sync with the 56px header + progress line.
- Write project notes as single sentences with a point of view.

### Don't

- Don't add accent colors, shadows, gradients, icons, or border-radius — any one of them breaks the register.
- Don't exceed 3.25rem type anywhere; the footer email must remain the loudest element.
- Don't hide content behind scroll reveals — no opacity:0 anywhere, ever.
- Don't put the hover scale on `.visual-inner` (it fights GSAP) or the parallax on the video (it fights CSS).
- Don't make the header permanently sticky — the hide/show behavior *is* the design's politeness.
- Don't replace the underline-draw with a default underline or color swap.
- Don't crop `full` projects to 4:3 on desktop; the 21:9 stretch is the grid's rhythm.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <768px | Work 1-col (full cards at 16:9); About stacks label above; Services `[3rem_1fr]` with description below; px-6 |
| md | ≥768px | 2-col work grid, 21:9 fulls, three-column services, px-10, hero pt-60 |

### Fluid Strategy

- Type steps at breakpoints rather than clamping — consistent with the site's set-in-metal temperament. The one fluid element is the footer email scaling 3xl → 3.25rem.
- Video frames hold aspect ratios at all widths; parallax amplitude stays constant.

### Touch Targets

- Nav metas are small type but padded by the 56px bar; project cards are full-card links in spirit (title is the anchor); footer links spaced generously. Hover effects degrade to nothing on touch with no loss of content.

### Media Behavior

- Work videos: `autoPlay muted loop playsInline preload="metadata"` — nine videos, metadata-only until visible.
- Reduced motion: `gsap.matchMedia` wraps everything; the page renders fully static, rises never register, videos still play (ambient footage, not UI motion).

## Iteration Guide

1. New projects extend the Layer 7 table; keep the full/half cadence and write the note *last*, once the work can be described in one sentence.
2. Case-study pages should read as "the row, expanded": same meta grammar, hairline sections, video-first — never a hero image with display type.
3. New CV rows follow the `dl` pattern; years stay in Helvetica.
4. If a client logo wall is ever demanded, set the names in `.meta` text — no logos; the system has no image chrome.
5. A dark mode would invert paper/ink and warm the line color — but the bone warmth is the identity; treat dark as an experiment, not a toggle.
6. Any new hover takes either link-draw (text) or scale-1.03-at-700ms (media) — no third hover language.

## Known Gaps

- All social links and the header nav are stubs (`href="#"` / scroll anchors); projects have no detail pages.
- `--color-clay` is declared but effectively unused — reserved, or removable.
- Videos lack poster images; first paint of each frame depends on metadata load.
- No focus-visible treatment beyond browser defaults; keyboard users get default rings on link-draw items.
- The mailto CTA is the only conversion path — intentional for the fiction, but a real deployment would want a form fallback.
