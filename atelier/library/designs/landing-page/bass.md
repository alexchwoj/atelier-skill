---
version: "1"
name: "Design System Inspired by Bass"
description: "Bass is a scroll-film product page: an 8-second all-intra studio orbit of headphones is scrubbed frame-by-frame by scroll across a 450–600vh pinned stage, while four copy chapters fade into the footage's negative space. Near-black night canvas, cream ink, one red accent over burgundy studio tones, Urbanist everywhere. Below the film: an accessible accordion of specs and a cinematic closing CTA on the film's final frame."
colors:
  night: "#080808 — global background, header scrim base"
  soft: "#101010 — alternating section surface (Specifications, Footer)"
  charcoal: "#181818 — hover surfaces"
  burgundy: "#260b11 — the studio glow inside the footage"
  accent: "#ff304f — the ONLY accent: progress hairline, accordion open state, focus rings, favicon dot, wordmark dot"
  cream: "#f5f2ed — primary text"
  mist: "#a5a5a5 — muted text, eyebrows, footer links"
  hairline: "rgba(245, 242, 237, 0.08) — section and footer borders"
typography:
  display: { fontFamily: "'Urbanist' variable via next/font/google", weights: "700-800", role: "headlines, prices — extrabold + tracking-tight; h1 clamp(2.6rem,3.2vw,3.4rem), section h2 clamp(2rem,4.2vw,3.5rem), CTA h2 clamp(2.4rem,5vw,4rem)" }
  body: { fontFamily: "'Urbanist' (same family)", weights: "400-500", role: "body 16-18px relaxed · eyebrows 12px uppercase tracking 0.28-0.3em · buttons 14px medium tracking-wide" }
spacing:
  section: "py-24 lg:py-36 · container mx-auto max-w-7xl px-4 sm:px-6 lg:px-10"
  film: "stage h-svh sticky; section 450vh mobile / 600vh at lg (motion-safe only); chapters bottom-[14svh] mobile, film: side positions at 6vw insets"
  hero: "left column at film:left-[6vw] film:top-1/2, max-w min(19vw, 21rem) — anchored to the viewport edge, never a centered container"
rounded:
  pill: "rounded-full — all buttons"
  sm: "rounded-sm 2px — focus outlines, skip link"
motion:
  scrub: "ScrollTrigger scrub 0.5 over the pinned section; video.currentTime driven by a self-suspending rAF lerp — LERP 0.22, snap epsilon 0.02, write threshold 0.005; rendition switch at 767px; src assigned only in the no-preference matchMedia branch"
  chapters: "opacity-only fromTo windows on the timeline (ease none): ch1 [0.07,0.10,0.15,0.185] · ch2 [0.28,0.33,0.41,0.46] · ch3 [0.48,0.51,0.53,0.56] · ch4 [0.68,0.73,0.94,0.98]; hero exits via autoAlpha at 0.03"
  entrance: "CSS .hero-rise — translateY(28px) + fade, 0.9s cubic-bezier(0.22,1,0.36,1), --rise-delay ladder 0.1/0.25/0.45/0.65/0.8/1.2"
  micro: "header gains border-b border-cream/10 bg-night/70 backdrop-blur-md past 24px scroll; accordion animates grid-template-rows 0fr→1fr, 0.35s"
components:
  film: "muted playsInline video, no autoplay/loop — currentTime is the only playback control; side vignette on wide screens, bottom scrim elsewhere; accent progress hairline scales x 0→1"
  film-variant: "@custom-variant film — (min-width: 64rem) and (min-aspect-ratio: 3/2); gates ALL side-column chapter placement"
  accordion: "h3>button aria-expanded/controls, panel role=region; grid-rows animation; ChevronDown rotates 180° and turns accent when open; 2-col spec list with accent/70 dot bullets"
  buttons: "primary bg-cream text-night · outline border-cream/25 → /60 + cream/5 wash · ghost underline; all rounded-full with accent focus-visible outline"
---

# Design System Inspired by Bass

## Overview

Bass inverts the product-page formula: instead of sections with embedded media, **the media is the page** and copy visits it. One 8-second studio orbit — black headphones on a black-and-burgundy set — is encoded all-intra (every frame a keyframe) and mounted in a sticky full-viewport stage inside a section 450–600vh tall. Scroll position maps to `video.currentTime` through a lerped rAF loop, so the camera move belongs to the reader's thumb. Four chapters of copy fade in and out at calibrated progress windows, each positioned in that moment's empty footage — left when the product is right, upper-left during the headband close-up, lower-right as the product exits frame. Copy never overlaps the product; the windows are tuned to the footage like subtitles to dialogue.

Most dark product pages spend their accent everywhere — buttons, links, gradients. Bass refuses: buttons are cream, links are cream alphas, and red `#ff304f` is rationed to signals a few pixels wide — the film's progress hairline, an open accordion chevron, focus rings, two logo dots. The restraint keeps the burgundy studio light inside the footage as the page's emotional temperature.

Everything degrades deliberately. JS absent? A `.js` class gate keeps chapters visible as static content. Reduced motion? The video never even downloads — the hero renders on the poster and chapters stack as a list. The scrub engine itself is defensive: renditions per viewport, seeks gated behind readiness checks, a snap epsilon so the loop suspends instead of burning frames.

**Key Characteristics:**
- **Scroll-as-playhead** — ScrollTrigger scrub 0.5 + rAF lerp (0.22) writing `currentTime`; all-intra H.264 is non-negotiable for stutter-free seeking.
- **Negative-space chapter choreography** — opacity-only windows on a `ease: none` timeline, positions gated by a `film` variant (≥64rem AND ≥3:2 aspect).
- **Rationed accent** — `#ff304f` on hairlines, dots, and states only; surfaces stay night/soft/charcoal.
- **Cream-on-night type** — Urbanist extrabold tracking-tight for display, mist for support text, 0.28em uppercase eyebrows.
- **Accessible mechanics** — grid-rows accordion, aria-expanded/controls, skip link, chapters kept in the accessibility tree (opacity, never visibility).
- **Layered fallbacks** — no-JS static chapters, reduced-motion poster page, `<video poster>` markup that survives missing files.
- What Bass does **not** do: no purple/indigo/blue/green, no nav link list, no mobile menu, no scroll-jacking library, no autoplay.

## Colors

- **Surface ladder**: {colors.night} → {colors.soft} → {colors.charcoal}; sections alternate night/soft so the film stage reads darkest.
- **Accent** ({colors.accent}): progress bar, open accordion, focus-visible, selection background, two brand dots. If everything is red, nothing is.
- **Text**: {colors.cream} primary, {colors.mist} support, cream alphas (75/70) for footer and body-on-image.
- **Hairline** ({colors.hairline}): all structural borders.

## Typography

- **Display** ({typography.display}): extrabold + tracking-tight is the voice; price strings use the same display treatment as headlines.
- **Body** ({typography.body}): eyebrows carry the luxury cue — tiny, uppercase, 0.28–0.3em tracked, mist.
- One variable family (Urbanist) for everything, loaded through `next/font/google`.

## Layout

- **Rhythm** ({spacing.section}): max-w-7xl container; specs narrow to max-w-4xl.
- **The stage** ({spacing.film}): sticky `h-svh` inside the tall section — all viewport math in `svh`.
- **Hero discipline** ({spacing.hero}): hero and chapters anchor to viewport edges (6vw insets) so they sit in footage negative space at any width; below the `film` variant they drop to a bottom-scrim layout.

## Elevation

Flat by policy. Depth comes from the footage, the vignette/scrim gradients, and the header's backdrop-blur. No shadows, no glass cards.

## Components

### The film
{components.film}. Renditions: 1600×902 desktop, 960×542 mobile, both all-intra (`-g 1`), 8.04s, silent. {components.film-variant}.

### Accordion
{components.accordion}. First group open by default; single-open behavior.

### Buttons
{components.buttons}.

### Header
Fixed, transparent at top; past 24px scroll it gains hairline + `bg-night/70 backdrop-blur-md`. Wordmark + one CTA — the absence of nav is the design.

### PurchaseCTA
The film's closing frame as a full-bleed image, copy right-aligned on desktop against the product-left composition, with a `role="status"` notice that reveals on the buy click.

## Motion

{motion.scrub}. {motion.chapters}. {motion.entrance}. {motion.micro}. Reduced motion: no scrub, no video download, static hero, stacked chapter list, transition-free accordion.

## Do's and Don'ts

### Do
- Keep scrub tweens on `ease: "none"` — scroll is the easing.
- Keep chapters opacity-only; `visibility` would remove them from screen readers.
- Re-tune the four chapter windows whenever footage changes — they are subtitles to this specific clip.
- Keep the accent scarce: hairlines, dots, states.

### Don't
- Don't re-encode or replace the renditions with normal-GOP video — seeking will stutter on every frame.
- Don't autoplay, loop, or `playbackRate`-drive the film; `currentTime` is the only control.
- Don't add purple, indigo, blue, or green anywhere.
- Don't give the header a nav list or hamburger.
- Don't let chapter copy overlap the product at any viewport — if it does, the `film` variant gate or the windows are wrong.
- Don't skip the reduced-motion branch; downloading the video for users who asked for stillness is a defect.

## Responsive

- `film` variant (≥64rem + ≥3:2) gates side-column chapters; everything else uses the bottom scrim + `bottom-[14svh]` stack.
- Stage height 450vh → 600vh at `lg` (motion-safe only).
- All full-viewport units are `svh`; body is `overflow-x: clip`.
- Rendition switch at 767px picks the 960px file once on mount.

## Iteration Guide

To re-skin for another product: reshoot an 8s orbit against a near-black set with one colored practical light, re-encode both all-intra renditions, re-map the four chapter windows to the new footage's empty regions, then swap copy in the central data module. Keep the scrub constants, the `film` variant, the accent budget, and the fallback ladder — they are the system.

## Known Gaps

- Footer links, socials, Shipping/Returns, Privacy/Terms are placeholder anchors; the buy button intentionally reveals a demo notice instead of a checkout.
- `metadataBase` uses a placeholder domain — swap it before deploying to a real host.
- Chapter windows are calibrated to the shipped 8.04s clip; any footage change requires re-tuning.
- The demo ships concept-product legal copy ("Bass is a conceptual headphone product…") that a real store must replace.
