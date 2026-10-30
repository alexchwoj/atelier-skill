---
version: "1"
name: "Design System Inspired by MIHOME"
description: "MIHOME is dark cinematic minimalism built on one idea: the film IS the page. A full-viewport background video is scrubbed frame-by-frame by scroll position (all-intra mp4, lerped seeks), and everything else — an oversized display headline that disintegrates character-by-character, serif editorial statements, a contact panel that slides up — floats directly on the footage with no cards, no boxes, no panels. The palette is strictly #000000, #ffffff, and white-alpha tints; type is Manrope for UI micro-labels and Instrument Serif italic for editorial voice."
colors:
  black: "#000000"          # global background + loading overlay
  white: "#ffffff"          # all primary type + the single solid CTA
  muted-70: "white/70"      # serif eyebrows (About Us, Contact)
  muted-60: "white/60"      # loading label
  muted-50: "white/50"      # stat labels, email link at rest
  muted-40: "white/40"      # legal/footer micro-labels
  hairline: "white/10 · /15 · /20"   # nav pill border, footer rule, stat rules
  glass-nav: "black/20 + backdrop-blur-md"     # nav pill + hamburger
  glass-menu: "black/70 + backdrop-blur-xl"    # mobile popover
typography:
  display: { fontFamily: "'Dirtyline36Daysoftype2022', 'Manrope', ui-sans-serif, system-ui, sans-serif", weights: "normal (falls back to Manrope 400-700)", role: "hero headline — clamp(3.5rem, 13vw, 280px), leading 0.85, owner-supplied display slot" }
  serif:   { fontFamily: "'Instrument Serif', ui-serif, Georgia, serif", weights: "400 + italic", role: "editorial headings 4xl→80px at 1.08, italic accent words, italic eyebrows" }
  ui:      { fontFamily: "'Manrope', ui-sans-serif, system-ui, sans-serif", weights: "600-700", role: "nav, CTA, stats labels, footer — 11-12px uppercase, tracking 0.2-0.3em" }
spacing:
  rail: "24px → 56px (md) · About adds 96px (lg)"   # px-6 md:px-14 lg:px-24
  nav-rail: "16px → 32px (md), top 24px"
  hero-inset: "16px → 32px (md)"                     # ScrollFloat p-4 md:p-8
  scroll-runway: "200vh × 2"                          # hero spacer + contact container
  stats-gap: "32px, grid max-w 720px"
rounded:
  pill: "9999px"            # nav pill, hamburger, CTA
  menu: "16px shell / 12px items"   # mobile popover
motion:
  scrub: "1.5 — every ScrollTrigger on the page"
  video-lerp: "0.08 per rAF frame + back-pressure guard (skip while seeking / <0.01 delta)"
  lenis: "lerp 0.09, smoothWheel; programmatic scroll duration 2.5 easeInOutCubic"
  char-out: "opacity→0, yPercent→250, scaleY 1.2, scaleX 0.9, origin 50% 0%, stagger 0.05, power2.inOut, over body top→+=600"
  label-swap: "0.35s power2.out — label up, duplicate in from below"
  nav-entry: "0.6s power3.out, −8px drop, pill delayed 0.15s"
  parallax: "video wrapper ±30px (1.5s power2.out) · contact content ±12px (1s power3.out) — never on the same element as a scroll tween"
components:
  scroll-video: "Fixed z-0 full-viewport <video> (scale 1.35 in a 1.05 wrapper), paused forever, currentTime driven by scroll progress; hls.js only for .m3u8; black loading overlay with buffer %"
  pill-nav: "Fixed top-24px row — bare MIHOME wordmark left (tracking 0.3em), glass pill right with 4 uppercase links and the two-layer label-swap hover"
  scroll-float: "Fixed z-10 bottom-anchored H1, two lines aligned left/right, every char an inline-block span for the disintegration tween"
  about: "Open editorial — italic serif eyebrow, 80px serif statement with 3 italic accent words, 3-col stat grid on white/20 hairlines"
  glass-panel: "Contact section sliding up over 200vh — top meta row, serif headline vs CTA column, hairline footer; deliberately NO background/border/blur"
  cta: "The one solid element — white pill, black 12px/600 uppercase 0.2em label, hover scale 1.05"
  hamburger: "44px glass circle, two 1px lines rotating to X (±3.5px ±45°, 300ms); black/70 blur-xl popover w-44"
---

# Design System Inspired by MIHOME

## Overview

MIHOME inverts the usual landing-page recipe: instead of sections with media inside them, **the media is the page** and the sections are captions floating on it. One ~8-second film fills the viewport at `fixed z-0` and never plays — its `currentTime` is a pure function of scroll position, lerped at 0.08 per frame with a back-pressure guard so seeks never stack. Scrolling the page is scrubbing the film; the building rises as you read. This only works because the mp4 is **encoded all-intra** (every frame a keyframe — `-g 1`): with normal encoding, seeks land on distant keyframes and the effect dies. That encoding requirement is as much a part of the design system as any color.

Everything above the film obeys one law: **no cards, no boxes, no panels**. The About section is bare type on the footage; the contact section that slides up over the final 200vh has — deliberately — no background, no border, no blur, keeping the center of the viewport open so the film reads through at all times. The only enclosed shapes on the whole page are the slim glass nav pill and the single white CTA capsule. `{colors.black}` and `{colors.white}` are the entire palette; hierarchy is white-alpha (`/70 /50 /40`) and hairlines (`/10–/20`), never a hue. **Where most real-estate sites stack photo cards, amenity grids, and floor-plan carousels, MIHOME shows one continuous shot and fewer than sixty words — the restraint is the luxury.**

Type plays three registers. The hero is the **display slot** — `--font-dirtyline`, an owner-suppliable display face that gracefully falls back to Manrope (the reference preview renders the fallback) — at `clamp(3.5rem, 13vw, 280px)` with 0.85 leading, two lines staggered left/right like a film title. On scroll it doesn't fade — it **disintegrates**: every character is its own span tweening to `yPercent: 250, scaleY: 1.2, scaleX: 0.9` with a 0.05 stagger, scrubbed over the first 600px of scroll. Editorial voice is **Instrument Serif** with italic accent words (*landmarks*, *elegance*, *extraordinary*, *above the skyline*); UI voice is **Manrope** at 11–12px, 600–700, uppercase, tracked to 0.2–0.3em.

Motion is choreographed through exactly **one rAF pipeline**: Lenis (lerp 0.09) runs inside `gsap.ticker` with `lagSmoothing(0)`, every ScrollTrigger scrubs at 1.5, and programmatic scrolls glide 2.5s on `easeInOutCubic`. Mouse parallax layers the film (±30px) against the contact content (±12px) — and the system's iron rule is that a scroll tween and a mouse tween never write to the same element.

**Key Characteristics:**
- **Scroll-scrubbed film background** — fixed, paused, all-intra mp4; `currentTime = f(scrollY)` with lerp 0.08 + back-pressure guard.
- **No enclosure** — zero cards/boxes; content floats raw on the footage; the contact "panel" is intentionally panel-less.
- **Char-disintegration hero** — per-character spans, `clamp(3.5rem,13vw,280px)`, leading 0.85, lines aligned left then right.
- **Three type registers** — display slot (fallback Manrope) / Instrument Serif italic editorial / Manrope uppercase micro-UI.
- **Strict no-hue palette** — black, white, white-alpha rungs (/70 /60 /50 /40), hairlines (/10 /15 /20).
- **One rAF pipeline** — Lenis inside gsap.ticker; scrub 1.5 everywhere; programmatic scroll 2.5s easeInOutCubic.
- **Dual-layer parallax** — ±30px film vs ±12px content, separate elements always.
- **No scroll-reveal** — nothing enters from `opacity: 0`; content is always visible, only the hero animates *out*.

## Colors

> Source: the four-beat page — scrubbed film, hero title, About editorial, sliding contact — plus the fixed pill nav.

### Surface
- **Black** ({colors.black}): the html/body background, the loading overlay, and the letterbox behind the film. Sections have no surface of their own — the "surface" is whatever frame the visitor has scrubbed to.
- **Glass**: exactly two recipes — `{colors.glass-nav}` (`black/20 + blur-md`) on the nav pill and hamburger, and `{colors.glass-menu}` (`black/70 + blur-xl`) on the mobile popover. No white-glass surfaces exist; glass is always smoked.

### Text
- **White** ({colors.white}): hero chars, nav labels, editorial headings, stat values.
- The **alpha ladder** does all de-emphasis: `/70` italic serif eyebrows · `/60` the loading label · `/50` stat labels and the email link · `/40` the meta row and footer micro-labels. Muted text is never a grey hex.

### Hairline
- `white/10` nav pill border · `white/15` contact footer rule and hamburger border · `white/20` stat top-rules. Three opacities, all 1px, the only "lines" in the system.

### Accent
- None. The single solid element — the white CTA — is the loudest thing on the page precisely because everything else is transparent. Adding any hue (or a second solid) collapses that hierarchy.

## Typography

### Font Families

- **Manrope** (Google Fonts, 400–700) — body default, all UI micro-labels, and the hero fallback.
- **Instrument Serif** (Google Fonts, regular + italic) — every editorial heading and eyebrow; italics mark the emotional accent words.
- **Display slot** — `'Dirtyline36Daysoftype2022'` declared via `@font-face` from `/Dirtyline-36daysoftype-2022.woff2`, an *optional owner-supplied file*; absent it, the stack resolves to Manrope, which is how the shipped preview renders. Never substitute a random third face into this slot.

### Hierarchy

| Token | Size | Family/Weight | Case/Tracking | Use |
|---|---|---|---|---|
| `{typography.display}` | `clamp(3.5rem, 13vw, 280px)`, leading 0.85 | display slot → Manrope | none | "Elevate The / Art of Home" |
| `{typography.serif}` About | 4xl → 6xl → 80px, leading 1.08 | Instrument Serif 400 | tracking-tight | The three-sentence manifesto |
| serif Contact | 4xl → 5xl → 64px, leading 1.08 | Instrument Serif 400 | tracking-tight | "Begin your next chapter…" |
| serif stat value | 3xl → 5xl | Instrument Serif 400 | none | 120+ · 08 · 15 |
| serif eyebrow | 16 → 18px | Instrument Serif italic | none | "About Us", "Contact" |
| `{typography.ui}` nav/CTA | 12px | Manrope 600 | uppercase 0.2em (wordmark 0.3em) | Nav links, buttons |
| micro-label | 11px → 12px | Manrope 600 | uppercase 0.2–0.25em | Stats labels, meta row, footer |
| email link | 14px | Manrope 400 | none | The one lowercase utility link |

### Principles

- **Serif carries emotion, sans carries function** — no serif ever appears at UI scale, no Manrope ever speaks editorially (hero fallback excepted).
- **Italic = accent.** Within serif headings, italic marks exactly the promise words; it is the system's only emphasis device (no bold, no color).
- **Uppercase lives only at micro scale** (11–12px, wide-tracked) — big type is always sentence case.
- **The hero is a title card, not a heading** — art-directed line breaks (`\n`), alternating alignment, chars wrapped individually; words wrapped `whitespace-nowrap` so they never rewrap mid-disintegration.

### Note on Font Substitutes

Manrope and Instrument Serif load from Google Fonts with the exact query string — no substitution. The display slot is owner-supplied by design: ship the fallback rather than hotlink a font from an unofficial rehost.

## Layout

### Spacing System

- Rails: `px-6 md:px-14` globally, About widens to `lg:px-24`; nav sits at `top: 24px` with `px-4 md:px-8`.
- **Scroll runway is the real spacing system**: a `200vh` spacer under the fixed hero and a `200vh` relative container for the contact slide. Those four viewport-heights of runway are what give the film time to scrub — shortening them compresses the entire cinematic pacing.
- About is a `min-h-screen` flex-centered column; stats grid caps at 720px with 32px gaps; the manifesto caps at 1050px, the contact headline at 520px.

### Grid & Container

- There is no container system — each block sets its own `max-w-*` and floats on the film.
- Z-ladder: film `z-0` → hero title `z-10` → About/contact `z-20` → nav `z-100`.
- The contact section is the page's only positioning trick: a `relative` 200vh shell with the panel `absolute bottom-0`, its outer wrapper tweened `y: 100% → 0%` so the whole final viewport rises into place, scrubbed.

### Whitespace Philosophy

The film is the whitespace. Copy is rationed (a three-sentence manifesto, three stats, one CTA) so the footage always dominates; the contact layout pushes content to the edges — meta top, headline left, CTA right, legal bottom — explicitly to keep the center open. If a new element can't live at an edge, it probably doesn't belong.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | The scrubbed film (`scale(1.35)` inside a `scale(1.05)` wrapper) | The world |
| parallax | wrapper ±30px on mouse | The film breathes |
| content | Bare type, `z-10/20` | Everything readable |
| glass | smoked `black/20–/70` + blur | Nav pill, hamburger, popover |
| solid | White CTA capsule | The single action |

No shadows exist anywhere. Depth is film-vs-type plus the two parallax rates (±30 back, ±12 front) creating real perceptual layers. The double scale on the video (1.35 × 1.05) is overscan headroom — the parallax never exposes an edge.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.pill}` | 9999px | Nav pill, hamburger circle, CTA |
| `{rounded.menu}` | 16px / 12px | Mobile popover shell / items |

### Iconography

- **Zero icons.** The only non-text graphics are the hamburger's two 1px lines (plain spans rotating into an X). No icon package may be imported.

## Components

### ScrollVideo ({components.scroll-video})

Fixed full-viewport stage: `<video muted playsInline preload="auto">` that loads (hls.js only for `.m3u8`), shows a black overlay with `Loading... X%` from buffer progress, then **pauses forever** on `canplay`. A dedicated rAF loop maps scroll progress to `targetTime` across `duration − 0.05`, lerps at 0.08, and writes `currentTime` only when not seeking and the delta exceeds 0.01s — the back-pressure guard that keeps Safari from choking. Mouse parallax tweens the wrapper ±30px.

### PillNav ({components.pill-nav})

Bare `MIHOME` wordmark left (12px/600, 0.3em tracking, no background) and one glass pill right holding four uppercase links. Each link is the **two-layer label swap**: the visible label tweens `yPercent: −100` while an absolute duplicate rises from below, 0.35s `power2.out`, on a paused timeline played/reversed by hover. Entry: both elements drop in from −8px, pill 0.15s behind. HOME/ABOUT drive Lenis to top/bottom over 2.5s; SERVICES/CONTACT are inert placeholders. Below `md`: the 44px glass hamburger and smoked popover take over.

### ScrollFloat ({components.scroll-float})

The fixed, bottom-anchored, pointer-transparent title card. Two lines — `Elevate The` left, `Art of Home` right — every character an `inline-block .char` span (spaces are their own `&nbsp;` chars, words wrapped `whitespace-nowrap`). One `fromTo` tween on all chars, scrubbed 1.5 over `body top → +=600`, sends them down-and-stretched (`yPercent 250, scaleY 1.2, scaleX 0.9` from a top-center origin) — the title sinks into the building as you scroll.

### AboutSection ({components.about})

The open editorial beat: italic serif eyebrow, the 80px manifesto with three italic accents, then three stats on `white/20` top-rules — serif values, micro-label captions. Fully static; it scrolls over the film with zero triggers.

### GlassPanel ({components.glass-panel})

The finale. Outer wrapper scrubs `y: 100% → 0%` across its 200vh shell; inner panel (separate element, `willChange: transform`) carries the ±12px mouse drift. Content is a `h-screen` flex column: meta row (`Contact` / `MIHOME — 2026`), the serif invitation against the CTA column, and the hairline footer (`© 2026 MIHOME` / `Saigon — Singapore — Dubai` / `Luxury Residences`). **No background, border, blur, or radius** — despite the component's name, the glass is the absence of it.

### CTA ({components.cta})

`Schedule a Private Tour` — white capsule, `px-9 py-4`, black 12px/600 uppercase 0.2em, `hover:scale-105` over 300ms, `mailto:` action, with the quiet `hello@mihome.estate` text link beneath. The only solid object in the system.

### Inputs & Forms

None exist. A future form should stay edge-anchored, use smoked glass (`black/20–/70` + blur) with white/15 hairlines, and keep the white capsule as its submit.

## Do's and Don'ts

### Do

- Keep the film all-intra (`-g 1`) — and keep the lerp + back-pressure guard; both are load-bearing, not polish.
- Keep one rAF pipeline: Lenis inside `gsap.ticker`, `lagSmoothing(0)`, `scrub: 1.5` on every trigger, 2.5s `easeInOutCubic` for programmatic scrolls.
- Keep scroll tweens and mouse tweens on **separate elements**, always.
- Let content float bare on the footage; push new elements to viewport edges and keep the center open.
- Ration copy — serif for meaning with italic accent words, Manrope micro-caps for function.
- Preserve the 200vh runways; pacing is part of the design.
- Keep the hero's per-character span structure (words `whitespace-nowrap`, spaces as own chars) — the disintegration depends on it.

### Don't

- Don't add cards, boxes, panels, gradients, or any hue — the two glass recipes and one white capsule are the complete surface inventory.
- Don't let the video autoplay, loop, or respond to anything but scroll.
- Don't write `currentTime` directly per scroll event — that's the jank the lerp exists to prevent.
- Don't introduce scroll-reveal anywhere; only the hero animates, and only *out*.
- Don't substitute the display slot with a third font or hotlink fonts from rehost sites — fall back to Manrope.
- Don't round the numbers: scrub 1.5, lerp 0.08/0.09, ±30/±12, 0.05 stagger, +=600 are exact.
- Don't put a second solid element on the page — the CTA's monopoly on solidity is the conversion design.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <768px | Nav pill → glass hamburger + smoked popover; contact middle row stacks (headline above CTA column); rails 24px; hero still fluid via 13vw |
| md | ≥768px | Pill nav appears; contact splits left/right; rails 56px; serif steps to 6xl/5xl |
| lg | ≥1024px | About rail 96px; serif caps at 80px/64px; hero caps at 280px |

### Fluid Strategy

- The hero never uses breakpoint sizes — `clamp(3.5rem, 13vw, 280px)` scales it continuously; the film covers every ratio via `object-cover` + the 1.35 overscan.
- Scroll math is resolution-independent (progress = scrollY / maxScroll), so the scrub pacing is identical on every device.

### Touch Targets

- Nav links pad to ≈36px, the hamburger is 44px, the CTA ≈47px, popover items ≈41px full-width.
- Mouse parallax and label-swap hovers are pointer-only garnish; scroll scrubbing is the core interaction and works identically via touch.

### Media Behavior

- `muted playsInline preload="auto"` keeps iOS from hijacking the video; the loading overlay covers the buffer window; `video.pause()` on `canplay` guarantees the film never free-runs.
- No `prefers-reduced-motion` handling ships in the build — scroll-driven scrubbing is user-initiated motion, but a guard for the parallax/entry tweens is a worthwhile extension (see Known Gaps).

## Iteration Guide

1. New section? It must earn its place on the film: bare type, edge-anchored, inside the existing scroll runway (extend the spacer heights if the film has frames to spare).
2. New footage: re-encode all-intra (`-crf 22 -g 1 -keyint_min 1 -pix_fmt yuv420p -an`), keep it short (6–10s at 24fps) — scrub feel degrades as duration grows against the same runway.
3. Reference tokens — `{colors.x}`, `{motion.x}`, `{components.x}` — so a scrub or alpha change cascades.
4. New interactive text gets the label-swap hover; new solid surfaces are forbidden without demoting the CTA.
5. Keep serif/sans register discipline: if new copy is emotional, it's Instrument Serif with one italic accent; if functional, Manrope micro-caps.
6. Real SERVICES/CONTACT destinations should reuse `lenis.scrollTo` with the 2.5s ease — never `window.scrollTo`.
7. If adding `prefers-reduced-motion`: disable the char tween, parallax, and entry drops; keep the scrub (it's user-driven) or snap it 1:1 by raising the lerp to 1.

## Known Gaps

- `SERVICES` and `CONTACT` nav items are inert placeholders; only HOME/ABOUT scroll. Real routes/sections need building.
- The display font file (`/Dirtyline-36daysoftype-2022.woff2`) is not shipped — the hero intentionally renders the Manrope fallback (as in the preview). Owners with a licensed display face can drop it in `public/` under that exact filename.
- Unused dependencies ship in package.json (`lucide-react`, `motion`, `react-router-dom`) and an unused `--animate-marquee` keyframe lives in `@theme` — remove or adopt deliberately.
- No `prefers-reduced-motion` guard exists yet (see Iteration Guide #7).
- The film is a single owner-supplied shot; its grade defines the page's entire mood — test any replacement against the white type at every scroll position.
- No form, no semantic states, no footer beyond the contact panel's legal row.
