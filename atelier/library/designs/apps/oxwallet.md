---
version: "1"
name: "Design System Inspired by OX Wallet"
description: "OX Wallet is a dark violet fintech app system rendered as three iPhone mockups (Login · Dashboard · Send) in one self-contained HTML file. Pure-black 393×820 phone shells sit on a purple gradient stage; inside, near-black surfaces (#101014, #16141d, #131218) are separated by #1c1a24 hairlines, every control is a pill, and #7f52ef is the single brand accent — glowing behind the lock, filling the primary button, blinking in the amount caret. The motion system is fully tokenized on :root: reusable t-* transition components (digit pop-in, panel reveal, success check, avatar-group hover) plus per-screen keyframe choreography, all Poppins, all disabled under prefers-reduced-motion."
colors:
  brand: "#7f52ef"          # THE accent — primary button, lock icon, glow, caret, passcode fill
  brand-soft: "#a483f5"     # accent links (Paste, Import, Max chip) → #c4adf9 hover
  brand-border: "#504081"   # active/hover borders on dark surfaces
  phone: "#000000"          # phone shell — true black
  surface: "#101014"        # cards + fields, border #1c1a24, hover border #3a2f5e
  surface-pill: "#16141d"   # pills/chips, hover #1e1b28
  surface-sheet: "#131218"  # the assets bottom-sheet (radius 24 top)
  surface-deep: "#0c0a16"   # lock circle · #060606 bottom nav · #1b1922 icon boxes
  text: "#ffffff"
  text-soft: "#d9d5e8"      # secondary labels, ghost buttons, icons
  text-muted: "#8b86a3"     # subtitles, field labels, section headers
  text-faint: "#6f6a85"     # tertiary — usd values, nav labels, approx line
  positive: "#4ade80"       # % change (glow pulse) + network fee; success state #22c55e
  stage: "#6c4fc4 + Background.jpg"   # purple gradient page behind the phones
  tokens: "#26a17b USDT · #1d4ed8 AXS · #e7c9a1 PACOCA · #2775ca USDC"
typography:
  display: { fontFamily: "Poppins, sans-serif", weights: "700", role: "balance 44px (−1px), send amount 52px (−1.5px), login title 28px (−0.5px)" }
  body:    { fontFamily: "Poppins, sans-serif", weights: "400-500", role: "subtitles 13-13.5px, fee rows 13px" }
  ui:      { fontFamily: "Poppins, sans-serif", weights: "600-700", role: "buttons 15px, pills 13.5px, card values 19px, labels 12px caps, micro 9.5-11.5px" }
  mono:    { fontFamily: "'SF Mono', ui-monospace, monospace", weights: "400", role: "wallet addresses only — 10-12.5px" }
spacing:
  stage: "gap 56px between phones · page padding 48px 40px · zoom 0.78"
  screen-pad: "20-28px side rails per screen"
  rhythm: "field gaps 22px label → 8px input; sections 22-26px apart; margin-top:auto pins CTAs/footers"
rounded:
  phone: "28px"
  sheet: "24px (top corners only)"
  card: "16-18px (stat cards 18, fields/fee 16, wallet cards 16, asset rows 14, icon boxes 10)"
  pill: "999px — every button, chip, tag, badge, dot"
motion:
  ease-standard: "cubic-bezier(0.22, 1, 0.36, 1)"     # every t-* component + hovers
  ease-bouncy: "cubic-bezier(0.34, 1.45, 0.64, 1)"    # digit pop, avatar wobble, badge pulse
  ease-spring-out: "cubic-bezier(0.34, 3.85, 0.64, 1)" # avatar-group release
  entrance: "phone-in 900ms (36px rise + blur 6) delays 80/240/400ms · .rise 700ms, delay --d×90ms+500ms"
  t-digit: "500ms pop from 8px below + blur 2, stagger 70ms on last two digits"
  t-panel: "open 400ms / close 350ms, 100px translate + blur 2"
  t-check: "4 parallel anims 450-550ms (fade/rotate 80°/blur 10/bob 40px) + path draw 550ms"
  t-avatar: "lift −4px · scale 1.05 · falloff 0.45^d · 320ms"
  ambient: "glow-breathe 5.5s · ring-pulse 2.8s · lock-tilt 4.5s · dot-cycle 4.2s · card-float 5s · card-shimmer 3.6s · pct-glow 2.4s · badge-pulse 1.8s · blink 1.1s"
components:
  phone: "393×820 black shell, radius 28, white/7 hairline, violet-tinted double shadow, hover lifts −6px"
  btn-primary: "#7f52ef pill 52px, violet glow shadow, hover −2px + brightness 1.1, active scale 0.97"
  btn-ghost: "1.5px #2a2344 border pill (Face ID) — hover #504081 + violet 8% wash"
  field: "#101014 + #1c1a24 border, radius 16 — hover #3a2f5e + 3px violet 7% ring"
  stat-card: "148px, #101014, icon box #1b1922 → violet 22% on hover, lifts −5px"
  wallet-3d: "240×130 cards at rotateX(38°) rotateZ(−7°) in a 900px-perspective stage — main floats + shimmer sweep, side card peeks clipped"
  assets-sheet: "t-panel-slide bottom sheet #131218, auto-opens 550ms after load"
  bottom-nav: "78px #060606 bar, 5 t-avatar items, active white, gradient NEW badge pulsing"
  passcode: "6 dots cycling fill #7f52ef with staggered 300ms delays — a fake typing loop"
  send-success: "btn morphs #22c55e, label blurs out, t-success-check draws the check for 2.4s"
  icons: "icon-set-v1 pack — inline 24×24 currentColor SVGs, sized per placement (11-22px)"
---

# Design System Inspired by OX Wallet

## Overview

OX Wallet is an **app-screens system**: not a landing page but three product-real iPhone mockups — Login, Dashboard, Send — living in one self-contained HTML file on a purple gradient stage. The composition trick is scale honesty: phones are true 393×820px with real 15px UI type, and the whole page runs at `zoom: 0.78` (with `min-height: 100vh/0.78` compensating) so three full devices fit a laptop viewport without faking any internal metric.

Inside the black shells, the palette is **violet-tinted near-blacks layered by hairlines**: `{colors.surface}` cards and fields with `#1c1a24` borders, `{colors.surface-pill}` chips, the `{colors.surface-sheet}` bottom sheet, `#060606` nav bar. **`{colors.brand}` #7f52ef is the only brand color** and it behaves like a laser: the primary button, the lock glyph and its breathing glow, the passcode fill, the blinking caret — everything else de-emphasizes through a violet-grey text ladder (`#d9d5e8 → #8b86a3 → #6f6a85`). Green exists only as *meaning* (`{colors.positive}` for gains and fees, `#22c55e` for success), never as decoration. **Most crypto-app shots are static screenshots; OX Wallet's screens are alive — the passcode types itself, the balance digits pop in, the wallet card floats and shimmers in 3D, the assets sheet slides up on load, the send button draws a checkmark — and every one of those behaviors is a reusable, tokenized component.**

That motion system is the real product. Every duration, distance, blur, and easing lives on `:root` as a token (`--digit-*`, `--panel-*`, `--check-*`, `--avatar-*`), consumed by four **`t-*` transition components** — number pop-in, panel reveal, success check, avatar-group hover — plus a `.rise` stagger utility (`--d × 90ms + 500ms`) that choreographs every screen top-to-bottom after the phones themselves blur in at 80/240/400ms. Three easings do everything: the standard `cubic-bezier(0.22,1,0.36,1)`, a bouncy `(0.34,1.45,0.64,1)`, and the springy release `(0.34,3.85,0.64,1)`.

Type is **Poppins alone** (300–800), with `SF Mono` reserved for wallet addresses — the one "technical" voice. Geometry is pill-first: every button, chip, tag, and badge is `radius 999px`, with rectangles (16–18px) reserved for content cards and the 24px-topped bottom sheet.

**Key Characteristics:**
- **App-screens format** — one HTML file, three 393×820 phones, `zoom 0.78` stage trick, no captions outside the phones.
- **One accent, used like a laser** — `{colors.brand}` #7f52ef on actions and focus moments only; links get `{colors.brand-soft}`; green is semantic only.
- **Hairline-layered near-blacks** — five violet-tinted surfaces separated by `#1c1a24`/`#24212e` borders that step to `#3a2f5e`/`#504081` on hover.
- **Tokenized motion** — all timing on `:root`; four reusable `t-*` components + `.rise` stagger; three easings total.
- **Ambient life** — nine looping keyframes (glow, ring, lock tilt, passcode cycle, card float, shimmer, pct glow, badge pulse, caret blink) keep the screens breathing without JS.
- **Product-real micro-interactions** — every hoverable element has a state; buttons press to 0.97; the send flow actually succeeds.
- **One icon language** — the icon-set-v1 set, inline 24×24 `currentColor` SVGs only.
- **Full reduced-motion fallback** — every animation and transition disabled, entrance utilities forced visible.

## Colors

> Source: all three screens — login glow/lock/dots/buttons, dashboard pills/balance/3D cards/stats/assets/nav, send fields/amount/chips/fee/CTA.

### Brand & Accent
- **Brand** ({colors.brand}): #7f52ef — primary buttons (with `rgba(127,82,239,0.35)` glow shadows), the lock icon, the login radial glow, passcode fill, amount caret, and at low alphas the hover washes (`0.08`) and focus rings (`0.07`).
- **Brand soft** ({colors.brand-soft}): #a483f5 — text links (`Paste`, `Import an existing wallet`, active `Max` chip), hover `#c4adf9`. Never a surface.
- **Brand border** ({colors.brand-border}): #504081 — the "engaged" border on hovered circles/buttons and the active chip.

### Surfaces (dark ladder)
- **Phone** ({colors.phone}): true black shell on the purple stage.
- **Surface** ({colors.surface}): #101014 — stat cards, input fields, fee card; resting border `#1c1a24`, hover `#3a2f5e`.
- **Pill** ({colors.surface-pill}): #16141d — networks pill, percent chips; hover `#1e1b28`.
- **Sheet** ({colors.surface-sheet}): #131218 — the assets panel; asset-row hover `#1a1822`.
- **Deep** ({colors.surface-deep}): #0c0a16 lock circle · `#1b1922` icon boxes · `#060606` bottom nav (border `#17151d`).

### Text
- **White** for values and titles → **`{colors.text-soft}`** #d9d5e8 (secondary labels, ghost buttons, most icons) → **`{colors.text-muted}`** #8b86a3 (subtitles, field labels, muted icons) → **`{colors.text-faint}`** #6f6a85 (usd lines, nav labels). A violet-grey ladder — never neutral grey hexes.

### Semantic
- **Positive** ({colors.positive}): #4ade80 — the +% change (with its glow pulse) and the network fee. **Success**: #22c55e floods the send button; the NEW badge runs a `#22c55e → #a855f7` gradient. Red/error is intentionally absent (see Known Gaps).

### Token identity colors
- {colors.tokens} — one flat circle per asset (USDT/AXS/PACOCA/USDC), glyphs as text. Identity color stays inside the 40px circle, never leaks into UI chrome.

## Typography

### Font Families
- **Poppins** (Google Fonts, 300–800) — every string in the UI.
- **SF Mono stack** — wallet addresses only (`0x323r...3g31f`, `0x8f3C...b21A`), 10–12.5px, always inside black pill or field containers.

### Hierarchy

| Token | Size | Weight | Tracking | Use |
|---|---|---|---|---|
| `{typography.display}` amount | 52px | 700 | −1.5px | Send amount |
| balance | 44px | 700 | −1px | Dashboard balance (t-digit-group) |
| login title | 28px | 700 | −0.5px | "Welcome back" |
| screen title / logo | 17 / 20px | 700 / 600+300 | 0 | "Send" · ox+wallet lockup |
| card value | 19px | 700 | −0.3px | Stat cards |
| `{typography.ui}` | 13.5–15px | 600–700 | 0 | Buttons, pills, asset rows |
| body | 13–13.5px | 400–500 | 0 | Subtitles, fee rows |
| label | 12px | 600 | +0.6px UPPERCASE | "TO", "ASSET" |
| micro | 9.5–11.5px | 400–700 | 0 | Nav labels, usd lines, tags, badge |

### Principles
- **Weight before size**: values are 700 at modest sizes; de-emphasis drops down the violet-grey ladder rather than shrinking below the micro floor.
- **Uppercase is rare** — only the 12px field labels (and the tiny NEW badge); everything else sentence case.
- **Numbers are the heroes** — the two display moments are both numerals, both tracked tight, one animated per-digit.
- Addresses never render in Poppins; the mono switch is the "this is cryptographic" cue.

### Note on Font Substitutes
Poppins is on Google Fonts — load 300–800. SF Mono falls through `ui-monospace` to any system mono; do not substitute a display mono.

## Layout

### The Stage
- Body: purple gradient (`{colors.stage}`) fixed cover, flex-centered, `gap: 56px`, `padding: 48px 40px`, **`zoom: 0.78`** with `min-height: calc(100vh / 0.78)` — the pair is inseparable; change one, change both.
- Phones enter via `.phone-wrap` at 80/240/400ms. Nothing else exists on the stage — no captions, no watermark.

### Inside a Screen
- Screens are flex columns; side rails 20–28px; label→field 8px, field→label 22px; `margin-top: auto` pins footers and CTAs to the bottom — the phone height is the layout constraint, exactly like a real app.
- Dashboard is the density showcase: top row → balance → 3D card stage (150px) → stat row (deliberately clipped at the phone edge — a scroll affordance) → assets sheet (flex-1) → 78px nav.
- The `.rise` counter `--d` increments strictly top-to-bottom per screen; new elements join the sequence, never jump it.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| stage | Gradient photo behind everything | The presentation room |
| shell | Black + white/7 hairline + `0 30px 80px` black / `0 0 90px` violet | The phones |
| surface | Hairline borders, no shadow | Cards, fields, pills |
| hover | Border brightens + lift (−1 to −6px) + violet glow | Interactive feedback |
| 3D | `perspective: 900px`, `rotateX(38°) rotateZ(−7°)`, float + shimmer | The wallet cards only |
| action | `rgba(127,82,239,0.35)` glow under the primary button | CTAs |

Depth inside screens is border-and-glow, not shadow-stacking; the only dramatic shadows belong to the phone shells and the 3D cards. The shimmer (`::after` gradient sweep, 240% background-size) is the system's one "luxury" specular.

## Shapes

| Token | Value | Use |
|---|---|---|
| `{rounded.phone}` | 28px | Phone shells |
| `{rounded.sheet}` | 24px top | Assets bottom sheet |
| `{rounded.card}` | 16–18px | Cards, fields, fee card (icon boxes 10, asset-row hover 14) |
| `{rounded.pill}` | 999px | Every button, chip, tag, badge, dot |

### Iconography
- **icon-set-v1 only** : inline 24×24 viewBox, `fill="currentColor"`, sized 11–22px per placement, colored via inline `style`. 21 icons used across the three screens. Token glyphs (₮ ⟠ 🥞 $) and the avatar 🤤 are *text characters*, not icons — a deliberate cheap-and-cheerful identity layer.

## Components

### Chrome
- **`phone`** ({components.phone}) — the frame every screen inherits; hover lift −6px sells "this is an object".
- **Status bar** — 48px, time + signal/wifi/battery icons, pure white; identical across screens.
- **`bottom-nav`** ({components.bottom-nav}) — five t-avatar items with distance-falloff hover; active item white/600; the Earn item wears the pulsing gradient NEW badge.

### Actions
- **`btn-primary`** ({components.btn-primary}) — the violet pill; on Send it becomes the **success morph**: `#22c55e` flood, label blurs up and out, the check draws itself, auto-reverting after 2.4s.
- **`btn-ghost`** — the Face ID pattern: hairline pill that warms to violet on hover. Text links use brand-soft with a lighter hover.

### Data display
- **`stat-card`** ({components.stat-card}) — icon box + label + 19px value; hover lifts and the icon box floods violet 22%.
- **`wallet-3d`** ({components.wallet-3d}) — the identity moment: two tilted cards in a perspective stage, main one floating (5s alternate) with a shimmer sweep (3.6s), side one clipped at the edge with a 1.2s offset float.
- **`assets-sheet`** ({components.assets-sheet}) — t-panel-slide bottom sheet auto-opening at 550ms; rows with bouncy icon scale on hover; refresh icon rotates 180° on hover.
- **Balance** — a t-digit-group; the eye toggle swaps real/`$••,•••.••` values, replaying the pop-in each time.

### Inputs
- **`field`** ({components.field}) — the address field and asset select share one recipe: #101014, hairline, radius 16, hover violet ring. Labels 12px caps above.
- **`passcode`** ({components.passcode}) — six dots running a staggered self-typing loop; the demo *is* the empty state.
- **Percent chips** — a t-avatar-group; active chip = violet 22% fill + #504081 border.

## Do's and Don'ts

### Do
- Keep every duration/distance/easing as a `:root` token and reuse the three easings — new motion joins the token sheet, not inline values.
- Give every interactive element a hover *and* an active (`scale 0.97`) state; lifts stay in the −1 to −6px family.
- Route all "alive" effects through CSS keyframes (they must run without JS); reserve JS for state changes (panel open, digits, success).
- Keep `{colors.brand}` for actions/focus and the ladder for hierarchy; introduce meaning-colors (green) only with meaning.
- Force reflow (`void el.offsetHeight`) before re-adding an animation class; measure check paths with `getTotalLength()` + 1px.
- Set `transitionTimingFunction` inline *before* writing `--shift`/`--scale-active` in avatar groups (ease-in on enter, spring-out on leave).
- Ship the reduced-motion block covering every component and forcing `.rise`/`.phone-wrap` visible.

### Don't
- Don't add captions, labels, or any text outside the phones — the stage stays clean.
- Don't break the `zoom: 0.78` ↔ `min-height: 100vh/0.78` pair, and don't shrink the phones' internal metrics instead.
- Don't use icons outside icon-set-v1, and don't convert the text glyphs (₮, 🤤) into icons.
- Don't put the brand violet on passive surfaces — if it isn't clickable or focal, it doesn't get #7f52ef.
- Don't stack drop shadows inside screens; depth is border + glow + lift.
- Don't retime the ambient loops casually — the 5.5/4.5/4.2/3.6/2.8s offsets are deliberately co-prime so the screens never visibly sync.
- Don't split the deliverable into multiple files or add a build step.

## Responsive Behavior

This is a **fixed-composition mockup**, not a responsive page:
- Phones are hard 393×820; the stage flexes and the `zoom` trick handles typical laptop widths; on narrower windows the row overflows horizontally by design.
- Inside the phones, "responsive" is the app-layout discipline itself: flex columns, `margin-top:auto` pinning, and the intentionally clipped third stat card as a scroll cue.
- If a true responsive variant is ever needed, wrap the stage in a horizontal scroll container rather than shrinking phones below 393px.

## Iteration Guide

1. **New screen** = new `.phone-wrap` (or swap one): status bar → screen body → (nav if in-app). Restart `.rise` at `--d:0`, extend the phone-in delay ladder by +160ms.
2. **New motion** = add tokens to `:root` first, then a `t-*` class if reusable — never inline one-off values.
3. New surfaces pick a rung on the dark ladder; new borders pick `#1c1a24 → #3a2f5e → #504081`. Inventing a sixth surface is a system change.
4. New icons come from icon-set-v1 (or a sibling Fivefold pack — swap the whole set, never mix).
5. Keep amounts/addresses plausible and consistent across screens (the USDT balance on Send matches the Dashboard row).
6. A light theme, error states, or a fourth screen (Swap/Earn) are natural extensions — green already has a slot; red needs a deliberate decision.
7. For a different app vertical, the reusable spine is: stage + phone frame + rise system + t-* components + pill grammar; swap palette, icons, and screen content.

## Known Gaps

- This is a **mockup, not an app**: no routing, no real input, no state beyond the four JS behaviors; the passcode "types itself" as a display loop.
- No error/negative states exist (no red token); failed-send and validation styling would need a deliberate extension.
- The avatar emoji and token glyphs are platform-dependent text — acceptable for mockups, replaceable with imagery for production.
- The stage `zoom` property is non-standard (though universally supported in Chromium/WebKit); Firefox pre-2024 ignores it — the mockup remains usable, just larger.
- `Background.jpg` sets the presentation mood only; screens never reference it — swapping the stage doesn't touch the system.
- One build folder may contain older iterations (e.g. a marketing `index.html`) — only `app.html` is the asset.
