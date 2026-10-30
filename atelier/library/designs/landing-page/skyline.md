---
version: "1"
name: "Design System Inspired by Skyline"
description: "Skyline is a scroll-scrubbed airline landing: one fixed full-screen flight film whose timeline is driven by the scrollbar, with every section transparent so the footage plays through the whole page. The interface is liquid glass — cards with light edges and a specular sheen, minimal frosted pills for buttons — in pure black and white with a single #2563eb accent spent on icons and the CTA arrow circle. DM Sans carries the UI; Instrument Serif italic appears in exactly three places. Beyond the scrub there is no motion at all."
colors:
  black: "#000000 — page base, visible only while the film buffers"
  white: "#ffffff — every text string; dim via rgba(255,255,255,.55) on one statement span only"
  accent: "#2563eb — feature icons + the 28px arrow circle inside primary CTAs; nowhere else"
  glass: "fill rgba(255,255,255,0.07) · border rgba(255,255,255,0.22) + blur(20px) saturate(180%) + edge/sheen insets"
  pill: "rgba(255,255,255,0.1) + blur(14px) — buttons and tags, no border, no sheen"
typography:
  body:   { fontFamily: "'DM Sans', sans-serif", weights: "400/500/600", role: "everything — hero 54px/500, statement 42px/500, section H2 44-52px, UI 13-14px" }
  serif:  { fontFamily: "'Instrument Serif', serif", weights: "400 italic only", role: "exactly three uses: trusted-brands H2 (52px), testimonial quote (27px), Northwind wordmark (19px)" }
spacing:
  sections: "120px 40px rhythm (trusted closes at 90px, final CTA stretches to 160px) · banner fixed 900px"
  grids: "max-width 1100px (cards) / 940px (testimonial) / 680-820px (headlines)"
  stagger: "studio card offsets 0 / 90 / 36 / 120px — a skyline of cards"
rounded:
  card: "22px — every glass card"
  pill: "999px — nav capsule, buttons, tags"
  tile: "9px — the white 34px icon tiles"
motion:
  scrub: "scroll position → video time: blob-buffered all-intra H.264, target eased by lerp 0.14, seeks issued only after the previous seek completes and only when the delta ≥ 1/60s"
  hover: "nav links background/color 0.25s — the page's only transition"
  none: "no entrance animations, no reveal-on-scroll, no parallax; all content is visible from first paint"
components:
  nav: "SKYLINE wordmark left · frosted capsule dead-center with white active pill · 'Open menu' frosted button right"
  hero: "centered copy 240px down a 900px banner; primary CTA = white pill with a blue arrow circle; ghost CTA = frosted pill"
  brands: "five fictional partners — inline-SVG marks + tracked wordmarks at 85% opacity, one serif two-liner in the middle"
  studio-cards: "4 glass cards at staggered heights/offsets; two carry photos under the glass border with a bottom scrim; frosted tag pill top-left, message bottom"
  testimonial: "one 940px glass card split 320/1fr: photo pane + serif quote, 36px stats row (4.9/5 · 120+ · 35M), uppercase attribution"
  split: "300/1fr/300 grid — four glass feature cards with white icon tiles flanking one pure photo panel"
  cta-final: "H2 + paragraph + the same white/blue pill over naked footage"
---

# Design System Inspired by Skyline

## Overview

Skyline's whole trick is that **the page doesn't scroll — the film does**. One `<video>` sits fixed behind everything, and the scrollbar drives its timeline: pull down and the aircraft banks, clouds stream past, light shifts. Every section is transparent, so the six "pages" of content are really captions floating over one continuous ten-second flight. The engine that makes this feel expensive is specified, not vibed: the video is **all-intra H.264** (every frame a keyframe) fetched into a **blob** so seeks never touch the network, and the scroll target is chased with a **0.14 lerp** where a new seek is only issued after the previous one lands. Silky scrubbing is an engineering contract, and the contract is in the CSS-adjacent script, verbatim.

Over the film sits a **liquid-glass interface**. Cards use a four-shadow recipe — light top edge, soft under-edge, a diagonal specular streak, a black drop — plus a radial sheen pseudo-element, all over `blur(20px) saturate(180%)`. Buttons and tags deliberately get a *lesser* material: plain frost (`white/10 + blur(14px)`), no border, no sheen. Two materials, strictly cast: **glass for cards, frost for pills** — the hierarchy between surface and control is tactile before it is visual.

Color is airline-clean: black, white, and exactly one blue — `#2563eb` — spent on tiny 16px icons and the 28px arrow circle inside the primary CTA. Type is the same duet as the rest of the black-and-white school: **DM Sans** for everything, **Instrument Serif italic** rationed to three appearances (the partners headline, the testimonial quote, one partner wordmark) so each serif moment reads as a handwritten signature on a boarding pass.

And beyond the scrub: nothing moves. No reveals, no parallax, no entrance choreography — the only transition on the page is a nav-link hover. When the background is a flight, the interface holds still.

**Key Characteristics:**
- **Scroll-as-timeline** — the scrollbar is a video jog wheel; sections are subtitles over one continuous shot.
- **Contracted smoothness** — all-intra encode + blob buffer + eased, gated seeks; the scrub engine is part of the design spec.
- **Two-material system** — `.glass` (edged, sheened) for cards; `.blur` (plain frost) for controls. Never mixed.
- **One blue** — #2563eb on icons and arrow circles only; the film supplies every other color.
- **Staggered skyline grid** — about-cards drop at 0/90/36/120px offsets with 380/300/340/250px heights, echoing a city silhouette.
- **Serif as signature** — three italic serif moments in an otherwise sans page.
- **Photo-under-glass** — image cards keep the glass border and sheen above their photograph, so even imagery obeys the material system.
- **Stillness elsewhere** — zero entrance/scroll animation; content is always visible.

## Colors

> Source: the `<style>` block of the single `index.html`.

- **Black** ({colors.black}) exists only as the buffer state and the scrims inside image cards — the real background is footage.
- **White** ({colors.white}): every text string is full white; the single sanctioned dim is the statement's second half at `rgba(255,255,255,0.55)`. Text over footage is protected by one soft text-shadow rule on headings, not by overlays.
- **Accent** ({colors.accent}): 16×16 stroked icons and the CTA arrow circle. It never colors text, borders, or backgrounds.
- **Glass / pill** ({colors.glass} · {colors.pill}): the two materials — memorize which elements get which.

## Typography

- **DM Sans** ({typography.body}): optical-sizing variable, three weights. Hero 54/500, statement 42/500, final CTA 44/500, section serif-H2 52, UI 13–14px. Weight never exceeds 600.
- **Instrument Serif italic** ({typography.serif}): three appearances, always 400, never bolded. If a fourth serif moment appears in an iteration, cut one — the ration is the brand.

## Layout

- **Rhythm** ({spacing.sections}): 120px section padding on a fixed 900px hero banner; the finale breathes at 160px.
- **Widths** ({spacing.grids}): 1100px working grid, narrower for reading measures (680/560/480/440px maxes are all specified per element).
- **The stagger** ({spacing.stagger}): four cards, four heights, four offsets — `align-items: start` makes the tops carry the rhythm. On mobile the stagger flattens to a uniform 2×2 at 280px.
- **Split section**: `300px 1fr 300px` with the photo panel center — features flank imagery, never sit on it.

## Elevation

Glass does everything. The `.glass` recipe's four shadows + sheen make cards read as physical panes catching cabin light; pills stay flat frost so controls feel pressable rather than precious. There are no hover lifts, no transforms — elevation is static material, not interaction.

## Shapes

- **22px cards** · **999px pills** · **9px icon tiles** ({rounded.card} / {rounded.pill} / {rounded.tile}). Three radii, no exceptions.

## Components

### Nav
{components.nav}. The active link is a solid white pill with black text — the highest-contrast object in the chrome; hovers tint siblings `white/14`.

### Hero
{components.hero}. The primary button's anatomy (white pill, `8px 8px 8px 20px`, blue 28px circle, 12×12 arrow) repeats identically in the final CTA — one button, learned once.

### Brand row
{components.brands} — five invented marks so the strip reads "trusted" without borrowing real logos.

### Studio cards
{components.studio-cards}. The photo cards layer `linear-gradient(180deg, black/5 45%, black/62 100%)` under the glass so bottom text stays legible over any frame.

### Testimonial
{components.testimonial}. The stats row (`margin-top: auto`) pins to the card's floor; the photo pane keeps a 1px hairline seam.

### Split & final CTA
{components.split} · {components.cta-final}.

## Motion

- **The scrub** ({motion.scrub}) — the page's entire animation budget. Key numbers: lerp `0.14`, seek gate `1/60s`, end-guard `duration − 0.05s`, blob-first loading with a `file://` fallback.
- **Hover** ({motion.hover}).
- **Nothing else** ({motion.none}) — adding reveal-on-scroll here would fight the film for the same input.

## Do's and Don'ts

### Do
- Keep the video all-intra; re-encode any replacement with `-g 1 -keyint_min 1` before it ships.
- Keep glass for cards and frost for pills — the material caste system is the design.
- Keep #2563eb inside icons and arrow circles only.
- Keep all copy verbatim, including the statement's en dash and the attribution's em dash.

### Don't
- Don't swap the scrub engine for CSS scroll-timeline or a plain `currentTime = progress` assignment — the easing and seek-gating are the smoothness.
- Don't add section backgrounds; opacity belongs to cards, not sections.
- Don't introduce a second accent, gray text, or gradients beyond the two image scrims.
- Don't animate entrances or add parallax.
- Don't touch the stagger numbers (0/90/36/120) or card heights (380/300/340/250).

## Responsive

One breakpoint (`max-width: 900px`): hero H1 40px, capsule hidden, statement 30px, studio grid 2-up flattened to 280px, testimonial stacks (hairline moves to the photo's bottom edge), split drops its center photo and goes 2-up. The scrub engine is resolution-independent and ships unchanged.

## Iteration Guide

To re-skin for another travel brand, change only:
1. The film (re-encoded all-intra) and four photographs.
2. The five partner marks/wordmarks.
3. Copy strings per section and the three stats.
4. The accent hex — one variable-worth of change, still icons-and-arrows only.

Leave the scrub engine, the two materials, the stagger, and the serif ration untouched — they are the system.

## Known Gaps

- **Video weight**: the all-intra encode is ~23MB — the blob buffer masks it after load, but first paint on slow connections leans on the black fallback. A poster frame is deliberately absent (it would flash-mismatch the scrub start).
- **`sky5.jpg` ships in the folder but is unused** — kept out of the published prompt.
- **Primary CTAs and "Visit site" link to anchors/`#`** — no booking flow behind the buttons.
- **The generic `section` padding (110px) is a fallback** — every real section overrides it; keep the overrides when adding sections.
