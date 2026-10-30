---
version: "1"
name: "Design System Inspired by VAULT®"
description: "VAULT® is a midnight laboratory: a near-black canvas with a cool green undertone, one typeface at one weight (Inter Tight 400) carving hierarchy purely through size and negative tracking, Roboto Mono technical labels, hairline dividers, and a single bioluminescent lime accent rationed to 6px dots, one 40×40 arrow square, and pill hovers. The page is a numbered archive index — 15 selected of 48 private experiments — with a cursor-following video preview panel, a light About band, a category marquee, and a pure-black footer. No bold, no italic, no shadows, no gradients, anywhere."
colors:
  ink: "#222f30"        # dark canvas — near-black with a green undertone, never pure black
  lime: "#cef79e"       # THE accent — micro-surfaces only (dots, arrow square, pill hover, ®)
  bone: "#f7f7f5"       # light About band canvas
  paper: "#ffffff"      # text on dark; cards on light
  graphite: "#4d5757"   # muted text + hairlines on dark
  lichen: "#c9cbbe"     # hairlines/labels on light; quiet emphasis on dark
  tissue: "#e7e8e1"     # warm alternate card surface (third stat card)
  void: "#000000"       # footer only — the one true black
typography:
  display: { fontFamily: "'Inter Tight Variable', ui-sans-serif, system-ui, sans-serif", weights: "400 ONLY — b/strong forced to 400", role: "everything from 13px labels to the clamp(76px,13vw,158px) lockup; hierarchy = size + negative tracking (−0.03em hero, −0.012em at 58px, −0.006em at 36px)" }
  mono:    { fontFamily: "'Roboto Mono', ui-monospace, monospace", weights: "400", role: ".meta labels 13px, tracking −0.02em, uppercase — nav pills, counters, entry ids/years, tags, footer links. Never headlines, never paragraphs" }
spacing:
  container: "max-w-[1200px], px-4 md:px-8"
  rhythm: "py-24 md:py-40 per section; hero là min-h-[100dvh] với flex-1 spacer"
  index-row: "grid [5.5rem_1fr_11rem_5rem_2.5rem] gap-4 py-6"
rounded:
  pill: "9999px — counter pills, nav ghost pills"
  arrow-square: "8px (rounded-lg) — the 40×40 lime square"
  panel: "16px (rounded-2xl) card / 12px (rounded-xl) video inside"
motion:
  hero: "power4.out timeline — lockup masked yPercent 110→0 (1.1s) → meta rows y18 (0.7s, stagger 0.06, −0.6 overlap) → hairline scaleX 0→1 (0.9s expo.out, −0.7)"
  cursor-panel: "gsap.quickTo x/y, 0.45s power3.out; show autoAlpha+scale 0.94→1 (0.35s), hide reverse (0.3s); clamp 12px to viewport edges"
  row-hover: "CSS 300ms — title translate-x-2 + brighten, tag-dot fade-in, arrow square opacity 0→100"
  marquee: "44s linear infinite, duplicated track, reduced-motion gated"
  rule: "nothing starts at opacity:0 in CSS — fully readable with JS off; all GSAP inside matchMedia(no-preference)"
components:
  nav: "absolute (NOT sticky) — VAULT® wordmark (® lime) + 2 ghost .meta pills that fill lime on hover"
  hero: "100dvh — 4-col mono metadata row, a deliberate flex-1 void, the giant lockup, full hairline, support line + role label"
  index: "counter pill 01/Index → heading row → hairline list; each row: mono id · title · category+dot · year · lime arrow square"
  preview-panel: "fixed 320px cursor-follow card (border graphite, bg ink, p-2) with looping entry video (4/3, rounded-xl), caption row below; hidden on mobile, aria-hidden"
  about: "bone band — counter pill 02/About, 75px heading, 58ch paragraph, 3 stat cards (paper ×2 + tissue, border lichen, NO shadow)"
  marquee: "8 category words in graphite separated by lime dots"
  footer: "pure black — wordmark, 3 .meta links (hover lime), rights line"
---

# Design System Inspired by VAULT®

## Overview

VAULT® is what happens when an archive refuses to perform. The site is a **numbered index of one designer's private experiments** — 15 selected of 48, from 2019 to 2026 — presented like specimens in a midnight laboratory: a near-black canvas with a **cool green undertone** (`{colors.ink}`, deliberately not `#000`), white single-weight type, hairline dividers, and one **bioluminescent lime** (`{colors.lime}`) that glows only at micro scale. The discipline reads instantly: no bold, no italic, no shadows, no gradients, no second accent. What's left carries everything.

The typographic system is the site's thesis: **one family, one weight**. Inter Tight 400 spans from 13px labels to a `clamp(76px, 13vw, 158px)` lockup, and hierarchy is carved *exclusively* by size and negative letter-spacing (−0.03em at hero scale, easing to −0.001em at body). Even `<b>` and `<strong>` are flattened to 400 in base CSS. Roboto Mono handles the technical register — ids, years, counters, tags — and never touches a headline. The result feels like lab equipment labeling, not marketing.

The interactive heart is the **index**: hairline-divided rows (id · title · category · year · arrow) where hover reveals the system's entire personality — the title slides 8px, a 6px lime dot ignites next to the category, and the page's *only accent-filled surface* appears: a 40×40 lime square holding a thin arrow. Meanwhile a **cursor-following preview panel** — a 320px card that chases the mouse via `gsap.quickTo` at 0.45s — plays a looping video of the hovered entry, swapping per row via React key. It is an enhancement, not a dependency: mobile gets inline thumbnails, reduced-motion gets a static page, and nothing anywhere starts at `opacity: 0`.

The page breathes in surface flips — dark hero, dark index, **bone About band**, dark marquee, **pure-black footer** — with *no divider lines between mode changes*; the surface change is the divider. Even emptiness is specified: the hero holds a `flex-1` spacer of pure negative space, annotated in the spec as deliberate.

**Key Characteristics:**
- **One weight, whole site** — Inter Tight 400 everywhere; size and negative tracking are the only hierarchy tools.
- **Rationed accent** — lime exists at 6px-dot and 40×40-square scale only; it never fills a large surface, never sits behind text.
- **Green-black canvas** — `#222f30` for content; pure black reserved for the footer as a final full-stop.
- **Cursor-follow preview** — quickTo panel with per-row looping video; clamped to viewport, hover-only, aria-hidden.
- **Archive as content model** — 15 verbatim entries with id/category/year; the data table *is* the design.
- **Surface-flip rhythm** — dark → dark → light → dark → black, no border lines at the seams.
- **Progressive enhancement absolutism** — content never hidden by CSS; every GSAP effect inside `matchMedia('(prefers-reduced-motion: no-preference)')`.
- **Mono as instrument voice** — Roboto Mono 13px uppercase for every piece of metadata.

## Colors

> Source: the `@theme` block — eight values, five of them neutrals.

### Canvas
- **Ink** ({colors.ink}): the dark canvas. Its green undertone is the brand's temperature — swap in a neutral `#1a1a1a` and the laboratory mood dies. Never used for the footer.
- **Bone** ({colors.bone}): the About band. The flip to light happens with no border — the two surfaces simply meet.
- **Void** ({colors.void}): footer only. The page ends on true black like a lid closing.

### Ink-side neutrals
- **Paper** ({colors.paper}): text on dark, cards on light.
- **Graphite** ({colors.graphite}): muted text and every hairline on dark surfaces.
- **Lichen** ({colors.lichen}): the light-band counterpart — hairlines and labels on bone; also quiet emphasis on dark (hover states of mono metadata).
- **Tissue** ({colors.tissue}): one warm card surface, used exactly once (the third stat card) to keep the About grid from reading as a repeat.

### Accent
- **Lime** ({colors.lime}): the single accent, governed by a hard rule — 6px tag-dots, the 40×40 arrow square, nav-pill hover fill, the ® mark, marquee separator dots. Nothing else. `::selection` inverts it (lime behind ink text).

## Typography

### Font Families

- **Inter Tight Variable** — self-hosted via Fontsource, one weight in play (400). The variable file is a convenience, not an invitation: the spec forbids other weights outright.
- **Roboto Mono** (400) — the `.meta` utility: 13px, −0.02em, uppercase.

### Hierarchy

| Token | Size | Tracking | Use |
|---|---|---|---|
| lockup | clamp(76px, 13vw, 158px), leading-none | −0.03em | VAULT® hero |
| section heading | clamp(40px, 5vw, 58px) — About up to 75px | −0.012em / −0.02em | "The index." / "About the archive." |
| index title | clamp(24px, 2.6vw, 36px) | −0.006em | Entry titles, paper/85 |
| marquee word | clamp(34px, 4vw, 58px) | −0.012em | Category words, graphite |
| body | 18px → 22px md, leading 1.3 | −0.001em | Hero support line, About paragraph |
| `.meta` | 13px mono | −0.02em, uppercase | All metadata |

### Principles

- **Weight is banned as a tool.** If something must speak louder, it gets bigger or tighter, not bolder. This single rule produces the site's calm.
- **Mono = data, sans = voice.** The two faces never trade jobs; an id set in Inter Tight would be a system error.
- **Negative tracking scales with size** — the bigger the type, the tighter it pulls, keeping giant settings dense instead of airy.

### Note on Font Substitutes

Both faces load from Fontsource packages (`@fontsource-variable/inter-tight`, `@fontsource/roboto-mono`) — keep the self-hosted imports; a Google Fonts link changes loading behavior. "A tight grotesque" is not Inter Tight, and any second weight anywhere breaks the system's one law.

## Layout

### Spacing System

- One container: `max-w-[1200px] px-4 md:px-8`. Section rhythm `py-24 md:py-40`.
- The hero is a `min-h-[100dvh]` flex column whose middle is an empty `flex-1` spacer — the void is a specified element; do not fill it.
- Index rows: `py-6` inside a `border-t`/`border-b border-graphite/60` hairline list.
- About stat cards: `p-8 md:p-10`, gap-4/5.

### Grid & Container

- Index desktop row: `grid [5.5rem_1fr_11rem_5rem_2.5rem] items-center gap-4` — fixed columns for id, category, year, arrow; the title takes the rest.
- Hero metadata: 2-col grid mobile → 4-col md. About stats: 1 → 3 cols. Mobile index rows swap to stacked layout with a 96px thumbnail — no hover dependency.

### Whitespace Philosophy

The archive's authority comes from restraint: a full-viewport hero that says seven strings of text, list rows that leave an 11rem column for a two-word tag, and a light band with one paragraph in 58ch. When in doubt, VAULT removes.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat solids | Every surface |
| line | 1px graphite (dark) / lichen (light) | All structure |
| panel | 1px graphite border on ink | The cursor preview card |

No shadows exist — not on cards, not on the floating panel. Depth is communicated by border + surface change + motion. The preview panel floats because it *moves*, not because it casts.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.pill}` | 9999px | Counter pills, nav pills |
| `{rounded.panel}` | 16px / 12px | Preview card / video inside |
| `{rounded.arrow-square}` | 8px | The 40×40 lime square |

### Iconography

One icon on the whole site: a 14×14 up-right arrow (`M2 12L12 2M12 2H4M12 2V10`, stroke 1.5), living exclusively inside the lime square. No icon library may be installed.

## Components

### Nav ({components.nav})

Absolute, not sticky — the archive does not chase you. Wordmark left (® in lime, linking `#top`), two ghost pills right (`Index`, `About`): mono 13px, graphite border, and the full hover transformation `border-lime bg-lime text-ink` — the accent's largest permitted appearance.

### Hero ({components.hero})

Four mono labels across the top (`Archive · 2019-2026 · 48 entries · Jonas Vael`), the void, then the lockup in a masked `overflow-hidden` span (yPercent 110 → 0, 1.1s power4.out), a hairline drawing itself from the left (scaleX, expo.out), and the support line: *"A personal archive of selected design experiments. Kept, numbered, and left mostly unexplained."*

### Index ({components.index})

The product. Fifteen rows of verbatim entry data (001 Blunt Instrument / TYPE / 2019 → 048 Terminal Garden / TOOL / 2026). Row hover choreography, all CSS at 300ms: id brightens graphite→lichen, title slides 2 units and lifts to full paper, the lime tag-dot fades in, the arrow square appears. Every effect reverses cleanly — the list must feel mechanical, not springy.

### Cursor preview panel ({components.preview-panel})

A fixed 320px card following the cursor at `quickTo` 0.45s power3.out, offset +28px x / centered y, clamped 12px inside the viewport. Content: `/preview/<id>.mp4` looping muted, `aspect-[4/3] object-cover rounded-xl`, React `key={id}` forcing a clean swap per row; caption row beneath (category + lime dot left, mono id right). Desktop pointer devices only; the index works completely without it.

### About ({components.about})

The light exhale. Counter pill `02 / About`, the heading, one paragraph of manifesto ("…the dead ends taught me more than the deliverables ever did."), then three stat cards — `48 Entries kept`, `8 Disciplines`, `2019-2026 Years covered` — bordered lichen, radius 20px, shadowless, the third on tissue.

### Marquee + Footer ({components.marquee} / {components.footer})

Eight discipline words drift for 44s separated by lime dots — the only ambient motion. The footer drops to pure black: wordmark, `Email · X · Are.na` mono links hovering to lime, and the closing line "All experiments original. Reproduction by permission."

## Do's and Don'ts

### Do

- Keep Inter Tight at 400 sitewide — enforce `b, strong { font-weight: 400 }`.
- Keep lime at micro scale; the 40×40 arrow square is its ceiling.
- Keep the hero's `flex-1` void empty and the nav non-sticky.
- Flip surfaces with no border between sections — the color change is the divider.
- Wrap every GSAP call in `matchMedia('(prefers-reduced-motion: no-preference)')` and keep all content visible without JS.
- Swap preview videos via React `key` so playback restarts cleanly per row.
- Use graphite hairlines on dark, lichen on light — never mix registers.

### Don't

- Don't introduce bold, italic, a second accent, shadows, gradients, or textures — each one unravels the system.
- Don't use pure black for any content section; `#000` belongs to the footer alone.
- Don't make the preview panel a dependency — no critical info may live only in it.
- Don't round `#222f30` to a neutral dark or `#cef79e` to a generic lime.
- Don't animate the index rows with JS — row hovers are CSS-only by design.
- Don't fill the hero's negative space with badges, scroll hints, or social proof.
- Don't let the marquee dots or ® mark grow — accent scale discipline is the brand.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <768px | Index rows stack with 96px thumbnails; hero metadata 2-col; cursor panel disabled; container px-4 |
| md | ≥768px | Grid rows + cursor panel; metadata 4-col; px-8; rhythm py-40 |

### Fluid Strategy

- Every display size is a clamp — the lockup tracks 13vw between 76 and 158px; headings and titles likewise. No fixed display sizes exist.
- The preview panel is gated by `(hover: hover)`, not width — touch laptops get the mobile behavior correctly.

### Touch Targets

- Index rows are full-width tap targets on mobile; nav pills ≥32px tall; footer links spaced by gap-8.

### Media Behavior

- Preview videos: `autoPlay muted loop playsInline preload="metadata"` — metadata-only preload keeps 15 videos cheap; they stream on first hover.
- Reduced motion: marquee stops, GSAP never registers, hovers become instant — and the page loses nothing structural.

## Iteration Guide

1. New entries extend the Layer 7 table — keep ids sparse (001, 004, 007…) so the archive feels curated from a larger whole; update the "15 selected of 48" counter.
2. New sections take the next counter pill (`03 / …`) and choose a surface: ink or bone. Respect the no-border seam rule.
3. A "detail page" should keep the index's grammar — mono metadata, hairlines, one lime moment — and never introduce photography as decoration.
4. If the archive gains categories, extend the marquee list; separators stay lime dots.
5. Preview reels: short loops (3–8s), muted, 4:3-croppable; abstract motion reads better than literal screen recordings at 320px.
6. Any new interactive element inherits the pill/hairline language and the 300ms CSS hover register.

## Known Gaps

- All footer/nav links are `href="#"` stubs; entry rows link nowhere — the archive is an index without detail pages yet.
- Preview videos exist for all 15 entries but mobile thumbnails use the video poster frame — supplying dedicated poster images would improve LCP on mobile.
- No keyboard affordance reveals the preview panel (by design, it's decorative); keyboard users get the full data from the rows themselves.
- The About band's stat cards are static; no counters animate (consistent with the no-reveal philosophy).
- No focus-visible styling beyond browser defaults.
