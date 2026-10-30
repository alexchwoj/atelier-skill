---
version: "1"
name: "Backlit browser-frame noir"
description: "Near-black portfolio system built on a single recurring browser-chrome card, with light-cast display type, a rationed capsule nav, and slow glass-blur transitions."
colors:
  background: "#101010"
  surface: "#181818"
  surface-alt: "#303030"
  text-primary: "#F2F2F2"
  text-secondary: "#AAADB0"
  link: "#0000EE"
  border: "#3D3D3D"
typography:
  display-hero:
    fontFamily: "Neue Montreal"
    fontSize: "64px"
    fontWeight: 500
    lineHeight: "1.05"
  accent-serif:
    fontFamily: "Gloock"
    fontSize: "64px"
    fontWeight: 400
    lineHeight: "1.05"
  body-md:
    fontFamily: "Arial"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.5"
spacing:
  base: "12px"
  gap-tight: "44px"
  gap-grid: "88px"
  section-padding: "96px"
  panel-inset: "200px"
rounded:
  control: "2px"
  input: "2px"
  card: "36px"
  browser-frame: "18px"
  pill: "100px"
  circle-dot: "100px"
components:
  button-nav-capsule:
    background: "rgba(48, 48, 48, 0.6)"
    text-color: "#F2F2F2"
    radius: "9999px"
    height: "44px"
    border: "none"
  button-primary-observed:
    background: "#F2F2F2 (observed near-white solid)"
    text-color: "#101010"
    radius: "6px"
    height: "~44px"
  button-utility-outline:
    background: "transparent"
    text-color: "#F2F2F2"
    radius: "6px"
    border: "1px solid #3D3D3D"
    height: "40px"
  card-project:
    background: "transparent"
    radius: "36px"
    padding: "12px"
    shadow: "rgba(0, 0, 0, 0.5) 0px 40px 80px 0px"
  card-browser-frame:
    background: "#181818"
    radius: "18px"
    border: "1px solid #3D3D3D"
    shadow: "rgba(0, 0, 0, 0.25) 0px 40px 50px 10px"
---
# Backlit browser-frame noir
Source: https://perryw-2023.webflow.io/

## Overview
This is a dark-mode-default portfolio system in the minimalist/editorial register: a near-black canvas (`#101010`) carries all visual weight through typographic light rather than color. The signature device is a faux-browser window chrome (traffic-light dots, address bar) that frames every project screenshot, repeated identically down the page — giving the whole system a "screens inside a screen" curatorial logic. Type does double duty as both hierarchy and texture: a grotesque sans (Neue Montreal) for structure, interrupted by an italic serif (Gloock) for a single emphasized word per headline, both rendered with a soft outer glow that reads as embossed light against the black field.

## Composition
The first screen opens with a small top-left wordmark/title stack, a centered pill-shaped segmented nav, and top-right utility links — a classic three-zone header. Below it, a single oversized browser-frame card fills nearly the entire remaining viewport, its top chrome bar a light-gray horizontal band that is the brightest object on the page; the headline glows in reversed contrast against the near-black pane beneath it. A short two-line caption sits lower right, and a lone downward chevron anchors the bottom center as a scroll affordance. Below the fold, the rhythm becomes strictly repetitive: a small eyebrow-style label + one-line description pairs with a right-aligned arrow glyph, followed by one full-width browser-frame card containing a project screenshot — this pattern repeats four times, unbroken by any other section type until the footer. The deliberate choice is monotony as credibility: no feature grid, no testimonials, no pricing — every "section" is the same card shape, rejecting a varied marketing-page anatomy in favor of a portfolio-as-showcase-reel.

## Colors
`#101010` (the author's own `--background` token, ~70–75% of pixels combining the `#181818` and `#000000` field readings) is the page and card base — a true near-black, not navy or warm charcoal. `#F2F2F2` (`--on-background`, ~82.7% declared area including type and glow) is the sole text-and-light color, doing the job of primary text, headline glow, and the chrome bar's near-white cast. `#303030` (~10% pixel share) is a secondary elevated surface, used behind the nav capsule and darker UI chrome. `#0000EE` is a rationed link-blue, reserved only for inline hyperlinked text such as the footer's underlined action link — it is the only saturated hue in the entire system outside embedded screenshots. `#3D3D3D` is the hairline border on frame edges and dividers. Colors like `#F46B5D`, `#F9BD4E`, and `#57C353` belong to embedded product-screenshot content (buttons and status pills inside the framed screenshots), not the site's own palette — they must stay confined to card media, never bleed into the shell's UI chrome.

## Typography
Body copy runs on Arial 14px/400 at `#F2F2F2`, used for captions and footer labels — a plain system-sans choice that keeps supporting text quiet. The display hierarchy is carried by Neue Montreal at large hero scale (observed ~64px, medium weight, tight ~1.05 line-height) for the two-line headline, with one trailing word in each hero swapped to Gloock italic serif at matching size — the single most expressive move in the system, applied to exactly one word per major heading and nowhere else. Both display faces render with a soft white glow/blur halo rather than a flat fill, giving headline type a backlit, embossed quality against the black card interior.

## Layout
Content is bound to a centered, contained max-width column (roughly matching the 1160–1360px browser-frame width seen in screenshots), with generous 96px section padding between project blocks and a tight 12px inner padding on every card. The one explicit grid measured is a 2-column layout with 88px gap and two items at 46/46 width split — a near-even two-up composition used for a supporting content pairing, not the main card stream. The dominant "grid" is actually a single-column list layout: each project entry is one full-width row (rows of [100] repeated four times), stacking vertically rather than tiling — a list layout, not a card grid, despite the card-like styling of each frame. Corner radii scale by container size: 36px on the outer project cards, 18px on the nested browser-frame chrome, 6–10px on interior controls, and full pill (9999px) on the nav capsule and status dots.

## Components
- **Navbar**: centered, bounded capsule (not edge-to-edge), pill radius 9999px, height ~44px, fill `rgba(48,48,48,0.6)`-toned glass over the black background; holds two text items in a segmented-tab arrangement with one active state. Wordmark/title sits separately at far top-left (two-line stack, name + role label); a LinkedIn link and a Resume link with arrow glyphs sit far top-right — three independent clusters, not one bar.
- **Hero primary CTA**: none rendered as a filled button on the first screen — the hero's only interactive affordance is the bottom-center scroll chevron; treat the nav capsule and outbound links as the sole rest-state controls, not a primary action button.
- **Project card (×4, stacked one per section)**: appears once per content band down the page. Surface: transparent background, 36px radius, 12px padding, drop shadow `rgba(0, 0, 0, 0.5) 0px 40px 80px 0px`. Anatomy top-to-bottom: an eyebrow-weight title line, a one-line secondary description beneath it in muted gray, a right-aligned arrow-glyph affordance at the same height as the title, then a full-width media panel below occupying the majority of the card.
- **Browser-frame chrome (nested inside every project card)**: fixed anatomy — three traffic-light dots top-left, an address/tab bar, sometimes a secondary toolbar row (back/forward/refresh); radius ~18px, 1px `#3D3D3D` border, shadow `rgba(0, 0, 0, 0.25) 0px 40px 50px 10px`. Encloses a full product screenshot as its sole content, cropped tight to the frame edges.
- **Utility/status chips (inside screenshots only)**: pill-radius colored labels (pending/approved/declined states) appear inside embedded screenshot media, not as native site components — reproduce only within media panels.
- **Footer**: two-column link list ("MAIN" and "CONTACT" style label groups, all-caps small eyebrow headers) each holding two stacked text links, one link styled with underline in link-blue; a copyright line and a small aside note sit below, left-aligned; a "made in Webflow" badge sits fixed bottom-right as a small pill chip.

## Graphics & Effects
The dominant field stays black — no full-bleed saturated gradient appears; color is rationed into small radial washes anchored at the top-center of specific panels. A soft white vignette `radial-gradient(circle closest-corner at 50% 0px, rgba(242, 242, 242, 0.15), rgba(0, 0, 0, 0))` covers roughly a fifth of the page as an ambient top-glow behind hero type. A narrow diagonal panel gradient `linear-gradient(190deg, rgb(37, 37, 37), rgb(16, 16, 16))` shades select card or chrome surfaces top-to-bottom. Three additional top-center radial washes — a pale cyan `rgba(127, 207, 255, 0.2)`, a deep navy `rgb(0, 51, 85)`, and a bright white `rgba(255, 255, 255, 0.3)` — each cover roughly a tenth of the page and function as scrims sitting over specific media panels (product screenshots), lighting their top edge rather than tinting the whole frame. Shadows are heavy and diffuse (`0px 40px 80px`, `0px 40px 50px 10px`) rather than tight, giving cards a floating, backlit elevation; one bright white glow shadow (`rgb(255, 255, 255) 0px 2px 25px 2px`) marks a focused/active state. Backdrop blurs (`5px`, `15px`, `20px`, `40px`) apply to glass surfaces like the nav capsule and any translucent overlays.

## Motion
Interactions are deliberate and slow: borders transition on `0.4s cubic-bezier(0.165, 0.84, 0.44, 1)`, general property changes on `0.2s` of the same curve, background-color shifts on `0.3s`, and combined box-shadow/border states use a longer `1s`/`0.6s cubic-bezier(0.23, 1, 0.32, 1)` pairing for slow, settling emphasis — consistent with a calm, confident portfolio rather than a snappy app. No fast snaps or springs appear; everything decelerates gently, reinforcing the backlit, gallery-like pacing.

## Guardrails
- Never fill the hero background with a full-screen gradient — color stays rationed to small top-anchored radial washes over specific panels; the hero frame itself stays near-black.
- Do not turn the centered pill nav into an edge-to-edge bar — it is a bounded, capsule-radius component floating independently of the logo and link clusters.
- Keep the browser-frame chrome (dots, address bar) as the fixed container for every project screenshot; never present a screenshot without it.
- Don't invent a filled hero CTA button — the first screen's only affordance is the scroll chevron plus the nav capsule.
- Preserve the single-column stacked project list as list layout, not a multi-column card grid.
- Reserve `#0000EE` exclusively for inline text links; it must never appear as a fill or accent elsewhere.
