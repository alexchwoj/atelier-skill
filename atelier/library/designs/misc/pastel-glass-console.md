---
version: "1"
name: "Pastel Glass Console"
description: "A macOS-chrome operator console — light, white-panel cards floating over a pastel radial-gradient canvas, with one dark identity-card panel as its sole high-contrast accent."
colors:
  background: "#E5E9F0"
  surface: "#FFFFFF"
  surface-subtle: "#F8FAFC"
  surface-inverse: "#0F172A"
  text-primary: "#0F172A"
  text-secondary: "#475569"
  text-muted: "#94A3B8"
  accent-blue: "#0071E3"
  accent-green: "#10B981"
  border-hairline: "#000000"
typography:
  headline-md:
    fontFamily: "Inter"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: "1.5"
    letterSpacing: "-0.1px"
  body-md:
    fontFamily: "Inter"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "1.5"
  label-md:
    fontFamily: "Inter"
    fontSize: "17px"
    fontWeight: 800
    lineHeight: "1.2"
    letterSpacing: "0.3px"
  label-mono:
    fontFamily: "JetBrains Mono"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: "1.4"
    letterSpacing: "0.3px"
spacing:
  base: "4px"
  gap: "22px"
  section-padding: "22px"
rounded:
  control: "6px"
  card: "12px"
  card-lg: "18px"
  pill: "9999px"
components:
  button-primary:
    background: "#0071E3"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "26px"
    padding: "6px 14px"
    shadow: "rgba(0, 122, 255, 0.25) 0px 2px 8px 0px"
    hover-background: "#0066D6"
    hover-shadow: "rgba(0, 122, 255, 0.35) 0px 3.99877px 11.9975px 0px"
  button-secondary-tinted:
    background: "#0071E3"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "23px"
    padding: "4px 10px"
    border: "1px solid rgba(0, 0, 0, 0)"
    shadow: "rgba(17, 24, 39, 0.2) 0px 4px 14px 0px"
  button-ghost-pill:
    background: "rgba(0, 0, 0, 0.05)"
    text-color: "#0F172A"
    radius: "9999px"
    height: "23px"
    padding: "4px 10px"
    border: "1px solid rgba(0, 0, 0, 0.08)"
  button-tab-ghost:
    background: "transparent"
    text-color: "#0F172A"
    radius: "0px"
    height: "28px"
    padding: "0px"
  card-panel:
    background: "#FFFFFF"
    radius: "0px"
    padding: "0px"
    border: "1px solid #000000"
  card-identity-inverse:
    background: "#0F172A"
    text-color: "#FFFFFF"
    radius: "0px"
    padding: "0px"
---
# Pastel Glass Console
Source: https://sakaju.space/

## Overview
This is a light-mode operator-dashboard system staged inside a simulated macOS browser chrome — traffic-light dots, back/forward arrows, an address pill. The aesthetic is clean SaaS-console minimalism: white rectangular panels with hairline black borders sit on a soft pastel canvas, evoking a control-room readout rather than a marketing page. The one deliberate departure from the all-white palette is a single near-black identity card rendered like a physical membership card, which becomes the visual anchor of the whole first screen.

## Composition
Top-to-bottom: a macOS title bar with environment toggle, then a primary tab row (view switcher + a status pill + a filled login CTA), then a wide horizizontal auth/status banner panel, then a two-up row (a metrics panel paired with the dark identity card), then a full-width live-data panel with a filter bar and a table header, then a thin footer strip. Density is high and rectilinear — every block is a bordered rectangle of consistent radius-0 construction, giving the page a ledger/terminal rhythm rather than airy marketing whitespace. The deliberate choice is edge-square, bordered panels throughout instead of soft elevated shadow-cards; this reads as an instrumentation console, not a friendly product page.

## Colors
`#FFFFFF` panels (~20–26% of pixels combined with near-white washes) are the dominant surface, sitting on a pastel canvas built from soft teal (`#A8D8D8` ~17%), lavender (`#C0C0F0` ~13%), and blush (`#D8C0D8` ~6%) radial washes plus off-white fields (`#F0F0F0`, `#F0F0FF`). `#0071E3` is the rationed accent — used only on the primary login button and one status/CTA pill, confined to under 5% of area. `#10B981`/`#34C759` greens mark live/verified state text and numerals only. Text ink is near-black `#0F172A` for primary content, `#475569` and `#94A3B8` for secondary/muted labels. The near-black `#0F172A`-toned identity card is the only inverse-surface block on the page, deliberately left uncolored by the pastel system to isolate it as a focal object.

## Typography
Inter carries the entire interface. A bold 14px/700 headline token (`ls -0.1px`) drives card titles; a heavier 17px/800 label token (`ls 0.3px`) is reserved for standout numerals and the identity-card wordmark-style heading. Body copy sits at 12px/400, tight and dense, typical of console microcopy. JetBrains Mono appears as the accent label face on metadata strings (timestamps, token/session codes, barcode captions) — a monospace signature against the otherwise humanist Inter system, signaling machine-generated data versus authored UI text.

## Layout
Content is bounded at a 1420px max-width, framed inside the simulated browser window. Grids are compact and functional: a single-column full-width banner (gap 21.75px), a 2-column row splitting roughly 61/37 for the metrics-vs-identity pairing, and a 3-column metric arrangement (11/38/13) elsewhere in the flow. Panel padding is tight (near-zero internal padding tokens, spacing driven by 4–9px increments), radii are mostly 0px on primary cards, with pill (9999px) reserved strictly for buttons and status badges. The layout does not reflow into cards-with-shadow; it stays a rectilinear grid of hairline-bordered rectangles throughout.

## Components
- **Navbar/title bar**: edge-to-edge macOS chrome bar, full viewport width, ~48px tall, containing traffic-light dots, nav arrows, a centered address pill (`#F8FAFC`-toned, radius ~6px) with a keyboard-shortcut chip, and a right-aligned light/dark toggle pair. A second sub-bar beneath holds two tab buttons (radius 6-8px, one active/filled-white-pill state) plus a status pill and the filled blue login CTA — this second bar is a wide inset bar, not full-bleed, sitting with margin inside the window.
- **Button — primary CTA (login)**: `#0071E3` fill, white text, radius 9999px (full pill), height 26px, padding 6px 14px, shadow `rgba(0, 122, 255, 0.25) 0px 2px 8px 0px`; hover darkens to `#0066D6` with shadow `rgba(0, 122, 255, 0.35) 0px 3.99877px 11.9975px 0px` and a -1px lift transform. Appears in the top tab row as the single highest-contrast control on the first screen — this is the hero primary.
- **Button — tinted-blue secondary**: same blue fill, smaller height 23px, padding 4px 10px, border 1px solid transparent, shadow `rgba(17, 24, 39, 0.2) 0px 4px 14px 0px`; used for the banner's secondary blue action.
- **Button — ghost ink pill**: `rgba(0,0,0,0.05)` fill, `#0F172A` text, radius 9999px, height 23px, padding 4px 10px, border 1px solid `rgba(0,0,0,0.08)`; used for neutral utility actions (e.g., pause, bot-link) beside the primary.
- **Button — tab ghost**: transparent fill, radius 0px, height 28px, no padding; used for the unselected top-nav tab.
- **Banner/auth panel**: full-width single-column card, white fill, hairline black border, radius 0px; anatomy top-to-bottom-in-row: left icon chip, bold heading + a small ghost status chip, one line of secondary body copy with an inline link, right-aligned two buttons (ghost + primary pill).
- **Metrics panel**: white bordered card, radius 0px; icon chip + heading + secondary label line at top, a green "verified" pill top-right, then two internal stat tiles (transparent sub-panels) each with an uppercase mono/Inter label and a large green numeral — this is the measured 2-column [61/37] row's left member.
- **Identity card (inverse)**: the [61/37] row's right member; near-black fill, no border-radius, full-bleed dark panel containing a top-left chip glyph, top-right "lifetime access"-style yellow pill, an uppercase small label line, a bold large heading in the 17px/800 label token, a colored tier/status line, and a barcode graphic with a small caption at the bottom — an inverse-surface "membership card" motif unique on the page.
- **Live-data table panel**: full-width white bordered card; icon chip + heading + green "live" status pill top row, secondary description line, then a search/filter input bar with inline stat readouts (throughput/cost/latency numerals in accent colors) to its right, then a column-header row (5 columns) for the streaming table body beneath.
- **Footer**: `#F8FAFC` background, thin full-width strip, no visible link list — left status dot + text, center credit pill, right plain text; flat and unbordered, the only panel without a hairline edge.

## Graphics & Effects
The canvas background is built from five stacked full-page radial gradients, each covering 100% of the page and blending into transparency: `radial-gradient(at 15% 15%, rgb(219, 234, 254) 0px, rgba(0,0,0,0) 50%)`, `radial-gradient(at 85% 15%, rgb(252, 231, 243) 0px, rgba(0,0,0,0) 50%)`, `radial-gradient(at 50% 85%, rgb(237, 233, 254) 0px, rgba(0,0,0,0) 50%)`, `radial-gradient(at 10% 20%, rgba(244, 114, 182, 0.45) 0px, rgba(0,0,0,0) 50%)`, `radial-gradient(at 90% 15%, rgba(251, 191, 36, 0.5) 0px, rgba(0,0,0,0) 50%)` — together these produce the pastel teal/lavender/blush wash filling the whole viewport behind the window chrome. Panel shadows are subtle and rare given the hairline-border language: `rgba(0,0,0,0.05) 0px 4px 20px -2px, rgba(0,0,0,0.02) 0px 1px 3px 0px` for card lift, and a heavier `rgba(0,0,0,0.3) 0px 25px 60px 0px` for the floating window itself against the desktop backdrop. Backdrop blurs (`blur(10px)`, `blur(20px)`, `blur(28px)`, `blur(12px)`) soften edges on the address pill and floating chips. The identity card's barcode is a static graphic stand-in rather than a live-rendered element.

## Motion
Interaction transitions are quick and consistent: `background, opacity, transform 0.25s/0.3s/0.3s ease` for button state changes, `all 0.25s cubic-bezier(0.16, 1, 0.3, 1)` and its 0.2s sibling for panel/hover easing, and a fast `transform, filter 0.15s ease` for micro-press feedback. Named keyframe animations (appleShimmer, siriPulse, appleSpin, appleToastIn, siriOrbRotate) indicate looping shimmer/pulse/spin treatments on live-status indicators and toast entrances — motion is subtle, ambient, and confined to status/loading affordances rather than large page transitions.

## Guardrails
- Never round the primary panel corners — this system's panels are hairline-bordered rectangles at radius 0px, not soft elevated cards.
- Keep the pastel wash as a full-canvas radial-gradient backdrop only; never apply it as a fill inside any white panel.
- Reserve `#0071E3` strictly for the primary login CTA and one secondary tinted button — do not tint multiple panels blue.
- The dark identity card is the sole inverse-surface element; do not introduce a second dark panel elsewhere.
- Pills (9999px) are for buttons/badges only; card and table containers stay square-cornered.
