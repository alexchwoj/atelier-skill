---
version: "1"
name: "Claymorphic Comic Ledger"
description: "A neobrutalist, claymorphic system built on a chunky rounded display face, hard black outlines with offset drop-shadows, and a lavender-to-charcoal section rhythm that rations coral and mint accents inside thick-bordered cards."
colors:
  background: "#181818"
  background-dark: "#151617"
  surface-lavender: "#B09CFB"
  surface-coral: "#FFBE98"
  surface-panel: "#0D0E0F"
  text-primary: "#151617"
  text-inverse: "#FAFAF9"
  accent-mint: "#4ECB71"
  border-ink: "#151617"
typography:
  display-lg:
    fontFamily: "gasoekOne"
    fontSize: "125px"
    fontWeight: 400
    lineHeight: "0.9"
    letterSpacing: "-2.5px"
  headline-md:
    fontFamily: "gasoekOne"
    fontSize: "48px"
    fontWeight: 400
    lineHeight: "1"
  body-md:
    fontFamily: "GeistSans"
    fontSize: "20px"
    fontWeight: 500
    lineHeight: "1.38"
  label-md:
    fontFamily: "GeistSans"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: "1.43"
  body-base:
    fontFamily: "GeistSans"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
  code-mono:
    fontFamily: "ui-sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.5"
spacing:
  base: "8px"
  gap: "40px"
  section-padding: "64px"
  section-gap: "50px"
rounded:
  control: "12px"
  card: "16px"
  pill: "9999px"
  tile: "10px"
  chip: "4px"
components:
  navbar:
    background: "transparent"
    radius: "0px 0px 0px 0px"
    height: "64px"
    width: "1280px"
    border: "2px solid #151617"
  button-hero-primary:
    background: "#FFBE98 (observed)"
    text-color: "#151617"
    radius: "12px (observed)"
    height: "44px (observed)"
    border: "2px solid #151617 (observed)"
  button-nav-cta:
    background: "#FFBE98"
    text-color: "#151617"
    radius: "12px"
    height: "40px"
  button-lavender:
    background: "#B09CFB"
    text-color: "#151617"
    radius: "12px"
    height: "32px"
    padding: "6px 16px"
  button-dark:
    background: "#0D0E0F"
    text-color: "#FAFAF9"
    radius: "12px"
    height: "52px"
    padding: "10px 12px"
    border: "2px solid rgb(21, 22, 23)"
  button-lavender-bordered:
    background: "#B09CFB"
    text-color: "#151617"
    radius: "12px"
    height: "32px"
    padding: "6px 12px"
    border: "2px solid rgb(21, 22, 23)"
    shadow: "rgb(21, 22, 23) 2px 2px 0px 0px"
  button-mint:
    background: "#4ECB71"
    text-color: "#151617"
    radius: "12px"
    height: "33px"
    padding: "6px 12px"
    border: "2px solid rgb(21, 22, 23)"
    shadow: "rgb(21, 22, 23) 2px 2px 0px 0px"
  card-lavender-stat:
    background: "#B09CFB"
    radius: "16px"
    padding: "24px"
    border: "2px solid #151617"
    shadow: "rgb(21, 22, 23) 3px 3px 0px 0px"
  card-dark-code:
    background: "#0D0E0F"
    radius: "12px"
    padding: "16px"
    border: "2px solid #B09CFB or #FFBE98"
  card-coral-panel:
    background: "#FFBE98"
    radius: "16px"
    padding: "24px"
    border: "2px solid #151617"
---
# Claymorphic Comic Ledger
Source: https://www.creem.io/

## Overview
This is a neobrutalist system wearing claymorphic softness: thick black (`#151617`) strokes and offset hard-edge drop-shadows (`rgb(21, 22, 23) 2px 2px 0px 0px` / `3px 3px 0px 0px`) sit under fully rounded 12–16px shapes and a squat, jumbo display face (gasoekOne, 125px, tracking -2.5px). It reads as illustrated software: a cartoon-eyed mascot line, sticker-like buttons, and comic-panel cards. Color is deployed in confident flat blocks — lavender (`#B09CFB`), coral (`#FFBE98`), off-white (`#F5F2F0`) — rather than gradients, with near-black (`#151617`/`#0D0E0F`) reserved for a later "developer" register.

## Composition
The page opens on a solid lavender hero band with black jumbo type stacked three lines deep, then a wavy full-bleed transition curve drops into an off-white (`#F5F2F0`) body section holding a logo strip and two asymmetric two-column feature bands (12-col grid, 40px gap, rows 57/40; then 2-col, 80px gap, rows 47/47). The page then swings back into a second full-bleed lavender section for an AI-assistant feature pairing, before a hard cut into a near-black developer-tools zone (SDK cards, terminal panels) that runs to the footer. This alternation — light-lavender-dark — is the deliberate rhythm; the alternative (one continuous dark or one continuous light page) is rejected in favor of high-contrast section breaks marked by the recurring wavy divider and by hard shifts in ink color (black-on-lavender vs white-on-black).

## Colors
`#F5F2F0` is the dominant light background (~58% declared area, confirmed by the ~27% near-white pixel field), used for the mid-page feature body. `#181818`/`#151617` near-black covers the developer-tools band and footer (~45% of rendered pixels), making this a two-register system, not a single dark-mode or light-mode page. Lavender `#B09CFB`/`#9078F0` covers the hero and a repeated growth-features band (~9-13% combined), acting as the secondary "mood" background rather than an accent. Coral `#FFBE98`/`#FFC090` (~3-5%) is the rationed accent — always the nav CTA, the hero-adjacent CTA, and one card family per section — never a background at scale. Mint `#4ECB71` appears only as a single button fill (~0.2%), a scarce tertiary accent. Ink `#151617` and paper `#FAFAF9`/`#FFFFFF` do all border and text duty; no gray ramp is used — contrast comes from black strokes on saturated fields, not from tonal grays.

## Typography
Display headlines use gasoekOne, a rounded slab-like display face, set at 125px/0.9 line-height with tight -2.5px tracking for the hero and dropping to 48px/1 for section headlines — both weight 400, since the face's chunkiness supplies the weight. Body copy switches entirely to GeistSans: 20px/500 for lede paragraphs under headlines, 16px/400 for general copy, and a bold 14px/700 all-purpose label/eyebrow style (used uppercase in badges and code labels). Monospace terminal content uses a plain ui-sans-serif system stack rather than a true code font, keeping the "developer" panels visually consistent with the rest of the UI instead of introducing a third family.

## Layout
Content is capped at a 1280px max-width, with section padding of 64px and inter-section gaps around 50px. Feature grids run as 2-column splits (80px gap, ~47/47 rows) and 2-column tighter splits (24px gap, ~49/49 rows) for text+media pairings, plus one 12-column asymmetric grid (40px gap, 57/40 split) for the hero-adjacent stat/support cluster. Card grids are consistently loose (2-up rows) rather than dense multi-column bento — density stays low, one story per row: a stat card paired with an illustrative panel, a heading paired with a screenshot. Radii of 12–16px and 2px black borders repeat at every card scale, giving the grid a uniform "panel" language regardless of column span.

## Components
- **Navbar**: centered bounded rectangle, 1280px wide (67% of viewport), 64px tall, transparent fill, sharp corners (TL/TR/BR/BL all 0px — a squared inset bar, not a pill or edge-to-edge bar), sticky, 2px black border visible against the lavender hero. Holds 8 items: logo mark + wordmark, "Product" and "Resources" dropdown triggers, a plain "Pricing" link, an outlined "Log in" button, and a filled coral CTA (`#FFBE98`, text `#151617`, radius 12px, height 40px).
- **Hero primary CTA**: an observed near-solid coral pill/rectangle beneath the headline, ~12px corners, black outline — the single highest-contrast control on the first screen; a secondary bordered "Copy prompt for AI" button sits beside it as a lighter utility variant, and a plain underlined text link ("book a demo") sits below both as the tertiary path.
- **Button — lavender solid**: `#B09CFB` fill, `#151617` text, radius 12px, height 32px, padding 6px 16px; used mid-page as a secondary action chip.
- **Button — dark solid**: `#0D0E0F` fill, `#FAFAF9` text, radius 12px, height 52px, 2px black border; the largest button in the system, used for a prominent mid-page action.
- **Button — lavender bordered w/ offset shadow**: `#B09CFB` fill, 2px black border, hard offset shadow `rgb(21, 22, 23) 2px 2px 0px 0px`; comic-sticker press affordance.
- **Button — mint bordered**: `#4ECB71` fill, same border/shadow treatment as the lavender bordered variant; the system's only mint appearance, marking a single distinct action.
- **Stat/support card family** (hero-adjacent, ×3 media-left-bleed cards stacked full-width rows): dark-panel cards (chat/email/discord mockups) carrying a colored eyebrow dot, a bold product-style title, and a one-line caption — media occupies roughly the top two-thirds, text sits below.
- **Merchant-of-record stat card** (mid-page, single wide card): `#B09CFB` fill, 16px radius, 2px border, 3px offset shadow; icon badge top-left, eyebrow label, a huge struck-through-adjacent numeral pairing (large bold figure beside a smaller muted comparison figure), and a 3-item checklist with circular check icons beneath.
- **Logo strip**: a single row of 5 grayscale wordmark logos, evenly spaced, plain text/mark treatment, no borders or cards — sits directly under the hero curve.
- **AI-assistant chat card** (mid-page, lavender section): white panel, black border, rounded corners; header row with avatar + name + a small dark "model" pill, a two-bubble exchange (user bubble right-aligned filled, assistant bubble left-aligned light), and a bottom row of 4 pill-shaped suggestion chips.
- **Developer SDK card cluster** (dark section, ×3 nested tiles inside one coral-bordered wrapper card): wrapper carries an eyebrow badge and an icon-in-square button top-right; each inner tile is a dark code-block card with a colored badge (OFFICIAL/PLUGIN/STARTER), monospace snippet, and a title + caption line below.
- **Terminal/webhook panels** (dark section, ×2 side-by-side cards): macOS-style traffic-light dots, a live/version status pill top-right, and scrolling monospace log or command lines filling the body.
- **"Open in LLM" / "Vibe code" card pair** (dark section, 2-col, 24px gap): each card has a colored left/top border accent (lavender vs coral), an icon-in-square badge, eyebrow + heading + caption, and an embedded browser-chrome or terminal mockup with a dropdown menu or step checklist inside.
- **Footer**: `#121314` background, logo mark, a short descriptive line, 3 circular social icons, then a 4-column link list (32 links total) under column headers, a bottom row of small grayscale badge logos, a theme/utility icon row, and a final legal line with a status pill.

## Graphics & Effects
A faint two-layer grid texture washes select panels: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, rgba(0, 0, 0, 0) 1px)` and its 90°-rotated counterpart, each covering ~5.6% of the page — a subtle graph-paper overlay inside dark cards, not the full background. A soft top-fade `linear-gradient(rgba(255, 255, 255, 0.03) 0%, rgba(0, 0, 0, 0) 80%)` glazes ~2% of the page as a light vignette on panel tops. One diagonal lavender gradient, `linear-gradient(to right bottom in oklab, rgb(176, 156, 251) 0px, rgb(165, 147, 245) 50%, rgb(144, 132, 232) 100%)`, fills a single small badge or icon element (~1.8% of page) — not a hero backdrop. Two radial scrims — `radial-gradient(40% 40% at 10% 20%, rgba(176, 156, 251, 0.15) 0%, ...)` and the coral equivalent at 90%/80% — sit behind media inside cards, tinting corners of screenshots rather than whole sections. A repeating 24px-step horizontal-line texture (`repeating-linear-gradient(0deg, ...)`) adds faint ledger-paper ruling to isolated card backgrounds. Shadows are uniformly hard-edged and offset (2–3px, zero blur, solid `#151617`), the neobrutalist signature, aside from one soft conventional shadow (`0 4px 6px -1px rgba(0,0,0,0.1)`) reserved for a floating/elevated element. Backdrop blur appears at two strengths, `blur(4px)` and `blur(24px)`, for light glass effects on overlays like the cookie toast.

## Motion
Interactions run fast and mechanical: base transitions at `0.15s cubic-bezier(0.4, 0, 0.2, 1)` cover color/background/border swaps, transforms (translate/scale/rotate) share the same 150ms curve, and a slightly slower `0.2s` variant handles broader "all" property changes — consistent with the snap-like, sticker-press feel of the offset-shadow buttons. Named keyframes include `scroll` and `marquee` for the logo strip, `fade-in` for section reveals, `spotlight` and `aurora` for ambient background motion in dark sections, and `accordion-down` for disclosure/dropdown panels.

## Guardrails
- Never replace the hard offset-shadow buttons with soft blurred drop shadows — the flat `Npx Npx 0px 0px` shadow is the signature, not a stylistic accessory.
- Keep coral and mint confined to single CTAs/accents per section; do not expand either into a background fill.
- Do not merge the lavender hero and the near-black developer section into one continuous background — the hard light/dark section swap is structural.
- Preserve the navbar as a squared, inset, bounded rectangle at ~1280px with sharp 0px corners — never stretch it edge-to-edge or pill it.
- Keep gasoekOne exclusive to display/headline roles; never apply it to body copy or labels.
- Do not soften card corners into pill shapes at scale — 12–16px rounding plus a visible black border is the card identity, not radius alone.
