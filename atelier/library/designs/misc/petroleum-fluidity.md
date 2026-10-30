---
version: "1"
name: "Petrol Ledger"
description: "Dark-mode-default brand-governance system in deep navy-petrol tones, geometric grotesk display type with an italic serif footnote accent, hairline glass utility controls, and a single emerald pill reserved for primary conversion."
colors:
  background: "#0A1F3D"
  surface: "#102F56"
  surface-elevated: "rgba(16, 47, 86, 0.45)"
  text-primary: "#EAF1F8"
  text-secondary: "#DCE3F0"
  text-muted: "#9CA3AF"
  accent-teal: "#0E4C5A"
  accent-emerald: "#00BC7D"
  border-hairline: "rgba(235, 245, 245, 0.1)"
  border-teal: "#0D4C59"
  footer-bg: "#061120"
typography:
  display-lg:
    fontFamily: "Sora"
    fontSize: "60px"
    fontWeight: 700
    lineHeight: "1"
    letterSpacing: "-1.5px"
  headline-md:
    fontFamily: "Sora"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: "1.11"
    letterSpacing: "-0.9px"
  body-md:
    fontFamily: "-apple-system"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "1.63"
  label-md:
    fontFamily: "Sora"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: "1.43"
    letterSpacing: "-0.3px"
  body-sm:
    fontFamily: "-apple-system"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.5"
  accent-serif:
    fontFamily: "Cormorant Garamond"
    fontSize: "16px"
    fontWeight: 400
    fontStyle: "italic"
  label-mono:
    fontFamily: "JetBrains Mono"
    fontSize: "12px"
    fontWeight: 400
spacing:
  base: "8px"
  gap: "24px"
  section-padding: "32px"
  tight: "4px"
  control-gap: "6px"
rounded:
  control: "6px"
  card: "16px"
  card-lg: "24px"
  pill: "9999px"
components:
  button-hero-primary:
    background: "#EAF1F8"
    text-color: "#0A1F3D"
    radius: "9999px"
    height: "48px"
    note: "observed near-white/cream solid fill, full pill radius"
  button-nav-cta:
    background: "#0E4C5A"
    text-color: "#EAF1F8"
    radius: "3.35544e+07px"
    height: "24px"
    padding: "4px 12px"
    shadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px"
  button-nav-outline:
    background: "#102F56"
    text-color: "#EAF1F8"
    radius: "3.35544e+07px"
    height: "30px"
    padding: "6px 12px"
    border: "1px solid rgb(14, 76, 90)"
  button-glass-utility:
    background: "rgba(16, 47, 86, 0.8)"
    text-color: "#EAF1F8"
    radius: "6px"
    height: "27px"
    padding: "4px 10px"
    border: "1px solid oklab(0.954883 -0.00451785 -0.0111556 / 0.1)"
    hover-background: "#102F56"
  button-ghost:
    background: "rgba(17, 47, 87, 0.6)"
    text-color: "#9CA3AF"
    radius: "3.35544e+07px"
    height: "24px"
    padding: "4px 12px"
    hover-text-color: "#EAF1F8"
  card-panel-section:
    background: "transparent"
    radius: "0px"
    padding: "32px 32px 64px"
  card-media-bleed:
    background: "rgba(16, 47, 86, 0.45)"
    radius: "24px"
    padding: "0px"
  card-feature:
    background: "rgba(16, 47, 86, 0.45)"
    radius: "24px"
    padding: "32px"
  card-compact-icon:
    background: "rgba(16, 47, 86, 0.45)"
    radius: "16px"
    padding: "16px"
  card-rule:
    background: "rgba(16, 47, 86, 0.45)"
    radius: "16px"
    padding: "24px"
  navbar:
    background: "rgba(11, 31, 61, 0.85)"
    backdrop-filter: "blur(24px)"
    height: "59px"
    radius: "0px"
---
# Petrol Ledger
Source: https://brand-kit-rivm.ai.studio/

## Overview
This is a dark-mode-default governance-document aesthetic: a deep navy-petrol canvas carrying a strict brand-standards manual, rendered with the crispness of a technical spec sheet rather than a marketing page. The identity is carried by geometric grotesk display type (Sora, tight negative tracking), a restrained five-swatch color ledger, and a system of translucent navy cards edged in near-invisible hairline borders. Glassmorphism is used sparingly and functionally — blurred pill controls and a blurred sticky navbar — never as a decorative hero treatment. An italic serif (Cormorant Garamond) appears exactly once as a "complementary typography" specimen, marking editorial voice rather than brand voice. The overall feel: an internal design-ops console crossed with a printed identity manual, calm, legible, and procedural.

## Composition
The first screen opens with a centered eyebrow pill, a large centered display headline, a two-line centered subhead, two stacked CTAs, and a 4-up row of compact metadata cards — a classic centered-hero stack with no imagery, letting typography and color chips carry the moment. Below the fold the page shifts to a strict two-column editorial rhythm: a left-aligned numbered section label + heading, paired with a right-aligned short description, repeated for each of five content bands (symbol architecture, color ledger, typography lab, usage principles, visual-atmosphere gallery). Density increases steadily down the page — the hero is airy and centered, the color-ledger band introduces a 5-up card row, the principles band tightens into a 4-up card row, and the closing kit-download band returns to a spacious single full-width panel. The deliberate choice is documentation-grade transparency (exposing hex/RGB/Pantone values as literal on-card text, exposing contrast ratios as UI) over a typical marketing abstraction — this rejects mystery/emotion-led hero copy in favor of auditable, numbered specification.

## Colors
The pixel field is overwhelmingly a single deep navy register (~63% at `#001848`-adjacent, another ~23% at a slightly lighter `#183048` navy) confirming the page reads as a near-monochrome dark navy field, not black. `#0A1F3D` (declared 58.3% of markup) is the page background; `#102F56` (declared 24.3%) is the elevated card/surface fill, used both flat and at `rgba(16, 47, 86, 0.45)` for translucent card glass. `#0E4C5A` (petrol teal, declared 0.3%) is rationed as the interactive/accent color — it fills the navbar CTA pill and appears in outline borders, functioning as the sole warm-toned interactive signal against the cool navy field. `#EAF1F8` (ice, 1.5%) and `#DCE3F0` are the two text-ink tones carrying near-white primary text and softened secondary text; `#9CA3AF` is muted/tertiary text and disabled-state labels. The emerald tokens (`--color-emerald-400/500/600`) surface only as small status dots and WCAG-badge accents — a second, more tightly rationed accent used exclusively for validation/approval signaling, never for CTAs. Blue and amber token families exist in the palette but are essentially unseen in the pixel field, reserved for edge-case status states. Nothing is left fully uncolored — even body copy sits at reduced-opacity ink rather than pure gray-on-black, keeping the whole system inside the navy hue family.

## Typography
Sora is the structural display and label face: 60px/700 with -1.5px tracking for the hero headline, 36px/700 with -0.9px tracking for section headlines, and 14px/700 with -0.3px tracking for eyebrow/label chips — all with a tightened, technical negative letter-spacing that reads as engineered rather than editorial. Body copy switches families entirely to -apple-system at 18px/400 (lh 1.63) for hero subheads and drops to 14px/400 for in-card description text, with secondary/tertiary text carried at `#9CA3AF` and `#EAF1F8` respectively. Cormorant Garamond appears as a single accent-serif specimen block, italic, used only inside the typography-lab section to demonstrate an "editorial" alternate voice — it never appears in navigation, buttons, or headlines elsewhere. JetBrains Mono is present as a small label/mono face for coordinate or token-style captions (e.g., pixel/hex readouts). The hierarchy is strict: Sora display > Sora headline > body sans > Sora label-caps eyebrow > mono footnote.

## Layout
Content is capped at a 1440px max-width and organized as a numbered vertical stack of full-bleed sections, each internally following a two-column grid: a narrow left label/heading column against a wider right description column. Card grids beneath each section header follow measured row compositions rather than uniform auto-fit: the metadata-chip row under the hero is 4 equal cards in one row; the color-ledger row is 5 equal cards in one row; the usage-principles row is 4 equal cards in one row; a two-up comparison (principal vs. inverse logo) sits at 49/49 split; a icon-plus-copy row sits at a wide 92/92 two-up split; and a three-atmosphere gallery runs 32/32/32. Spacing is disciplined at 24px gutters with 16px/12px/8px/6px/4px used for internal card padding tightening as component size decreases. Card radii step by role: 24px for feature/media cards, 16px for compact/icon cards, 6px for small glass buttons, and full 9999px pills for all CTA and status-chip shapes — a clear radius-by-elevation logic rather than one blanket corner value.

## Components
- **Navbar** — edge-to-edge square bar spanning the full 1920px viewport width (0px left/right inset), 59px tall, all four corners 0px radius (a true full-width flat bar, not an inset capsule), sticky, fill `rgba(11, 31, 61, 0.85)` with `backdrop-filter: blur(24px)`. Carries a wordmark, a small pill badge, three glass utility toggles, 5 in-page section links, and a filled CTA pill (`#0E4C5A` fill, `#EAF1F8` text, 24px height, fully rounded) at the far right — 11 total interactive items across the bar.
- **Hero primary CTA** — the solid pill beneath the hero subhead, an observed near-white/cream (`#EAF1F8`-family) solid fill with dark ink text, full pill radius, ~48px height; this is the single highest-contrast control on the first screen and must not be confused with the navbar's teal CTA or the glass utility buttons.
- **Hero secondary CTA** — a bordered/outline pill sitting beside the primary, mono-tagged label, lower visual weight, same pill radius family.
- **Glass utility button** (measured mid-page, ×6) — `rgba(16, 47, 86, 0.8)` fill, `#EAF1F8` text, 6px radius (slightly-rounded, not pill), 27px height, hairline border `1px solid oklab(0.954883 -0.00451785 -0.0111556 / 0.1)`, hover deepens to `#102F56`.
- **Ghost text-button** (×3, first screen) — near-transparent `rgba(17, 47, 87, 0.6)` fill, muted `#9CA3AF` text brightening to `#EAF1F8` on hover, full pill radius, 24px height — used for tertiary in-panel toggles.
- **Metadata chip card** (×4, hero) — `rgba(16, 47, 86, 0.45)` translucent fill, 16px radius, 16px padding, icon + small label + large bold value, arranged in one row of 4.
- **Color-ledger card** (×5) — flat `#102F56`-family solid swatch block on top, 16px radius, name + role caption + hex/RGB/Pantone rows beneath, one row of 5.
- **Logo-version comparison card** (×2) — translucent `rgba(16, 47, 86, 0.45)` panel, 24px radius, full-bleed media area showing the mark on a guide grid, header label + status chip above; arranged 49/49 side by side.
- **Principle/rule card** (×4) — `rgba(16, 47, 86, 0.45)` fill, 16px radius, 24px padding, numbered eyebrow + icon, bold rule-name heading, body paragraph, small footnote link — one row of 4.
- **Atmosphere gallery card** (×3) — media-forward translucent panel, 24px radius, full-bleed generative/abstract art fill with a small corner label chip; one row of 3 at 32/32/32.
- **Typography specimen panel** — two-up comparison block (49/49) showing the Sora sample against the Cormorant Garamond italic sample, each in its own bordered sub-card with a small caps mono label above.
- **Kit-download closing band** — single full-width panel, translucent elevated fill, 24px radius, eyebrow + large heading + supporting paragraph on the left, a filled pill primary button plus an outline secondary button stacked on the right.
- **Footer** — flat `#061120` bar, no visible link list beyond wordmark and small legal/version caption row.

## Graphics & Effects
No large-scale saturated hero gradient exists; color is rationed into small elements only. A soft directional gradient (`linear-gradient(to right top, oklab(0.305267 -0.0195525 -0.0769054 / 0.4) 0%, rgba(0,0,0,0) 50%, oklab(0.386112 -0.0504671 -0.0381942 / 0.2) 100%)`) covers roughly 2% of the page as a corner wash inside a panel, not the hero backdrop. Three radial scrims — teal-tinted `radial-gradient(circle at 50% 100%, rgba(14, 76, 90, 0.4), rgba(0,0,0,0) 70%)`, ice-tinted `rgba(154, 207, 223, 0.35)`, and near-white `rgba(234, 241, 248, 0.3)` — each sit at the base of individual media cards (roughly 1% of page area each) as bottom-anchored glow, giving the logo-comparison and atmosphere cards a soft under-light rather than lighting the whole page. Live `canvas` elements render the three atmosphere-gallery visuals as generative/abstract line-and-glow art; when rebuilding, substitute a static dark-navy gradient or fine linework illustration in their place. Shadow language is minimal and functional: navbar CTA and rule cards carry soft dual-layer drops (`rgba(0,0,0,0.1) 0px 1px 3px 0px, rgba(0,0,0,0.1) 0px 1px 2px -1px`), while one card family uses a subtle inset shadow (`rgba(0,0,0,0.05) 0px 2px 4px 0px inset`) to read as recessed rather than raised. Backdrop blur appears at two strengths — `blur(24px)` for the sticky navbar, `blur(12px)` for smaller floating chips.

## Motion
Transitions are fast and utilitarian: a universal `all 0.15s cubic-bezier(0.4, 0, 0.2, 1)` covers most hover/state changes, with a dedicated color/background/border transition at the same 150ms curve for text and fill shifts, and a matching 150ms transform transition for scale/translate micro-interactions. A slower `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)` governs larger state changes such as panel reveals. A `pulse` keyframe animates the small status dot in eyebrow chips, giving a slow breathing indicator of "live/current" state. Overall motion reads as instant and mechanical rather than springy — consistent with the document's procedural, spec-sheet character.

## Guardrails
- Never fill the hero background with a full-screen saturated gradient — color stays confined to small corner washes and card-level scrims on a dominant flat navy field.
- Do not render the hero primary CTA as the teal navbar-CTA color; the hero primary is a separate near-white/cream solid pill.
- Keep card translucency and radius stepped by family — 24px for feature/media panels, 16px for compact/icon cards — never flatten all cards to one radius.
- Preserve the navbar as a true edge-to-edge, zero-radius flat bar with backdrop blur; do not convert it into an inset rounded capsule.
- Limit the italic serif to a single small specimen use; it is a footnote accent, not a running body or headline face.
- Keep emerald tokens reserved for status/validation dots only — do not repurpose emerald as a general CTA or link color.
