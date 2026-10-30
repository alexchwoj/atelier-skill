---
version: "1"
name: "Violet Ledger Interface"
description: "White-dominant enterprise SaaS system built on dense data tables and flow diagrams, with a single rationed indigo gradient carrying every primary action and a corner-washed hero."
colors:
  background: "#FFFFFF"
  surface-tint: "#F8FAFC"
  surface-panel: "#F3F3F4"
  text-primary: "#000000"
  text-secondary: "#0D162F"
  text-muted: "#868A97"
  border: "#E6E7EA"
  accent-primary: "#6056FF"
  accent-primary-deep: "#4B40D6"
  accent-teal: "#0E9384"
  ink-dark: "#1A192B"
typography:
  display-lg:
    fontFamily: "Sora"
    fontSize: "48px"
    fontWeight: 400
    lineHeight: "1.2"
    letterSpacing: "-2.4px"
  headline-md:
    fontFamily: "Sora"
    fontSize: "36px"
    fontWeight: 400
    lineHeight: "1.35"
    letterSpacing: "-0.9px"
  body-md:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.6"
  label-md:
    fontFamily: "Inter"
    fontSize: "20px"
    fontWeight: 500
    lineHeight: "1.4"
    letterSpacing: "-0.5px"
  label-mono-data:
    fontFamily: "Inter"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: "1.4"
spacing:
  base: "8px"
  gap-tight: "6px"
  gap-control: "10px"
  gap-standard: "12px"
  gap-loose: "20px"
  section-padding: "64px"
  container-max: "80px"
rounded:
  pill: "9999px"
  control: "6px"
  nav-cta: "5px"
  card-tight: "8px"
  card: "12px"
  card-loose: "16px"
components:
  button-primary:
    background: "radial-gradient(circle, rgb(96, 86, 255), rgb(59, 50, 249))"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "42px"
    padding: "10px 20px"
    shadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(59, 50, 249, 0.25) 0px 1.6px 6.4px 0px"
    hover-shadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(59, 50, 249, 0.35) 0px 3.2px 9.6px 0px"
  button-nav-cta:
    background: "radial-gradient(circle, rgb(96, 86, 255), rgb(59, 50, 249))"
    text-color: "#FFFFFF"
    radius: "4.8px"
    height: "42px"
    padding: "10px 20px"
    shadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(59, 50, 249, 0.25) 0px 1.6px 6.4px 0px"
  button-ghost-secondary:
    background: "transparent"
    text-color: "#374151"
    radius: "6px"
    height: "38px"
    padding: "8px 16px"
    border: "1px solid rgba(0, 0, 0, 0)"
    hover-background: "#F9FAFB"
  button-nav-outline:
    background: "transparent"
    text-color: "#0D162F"
    radius: "4.8px"
    height: "42px"
    padding: "10px 20px"
    border: "1px solid rgb(230, 231, 234)"
  card-media-bleed:
    background: "transparent"
    radius: "16px"
    padding: "0px"
  card-icon-heading:
    background: "#F3F3F4"
    radius: "12px"
    padding: "24px"
  card-gradient-panel:
    background: "linear-gradient(160deg, rgb(230, 230, 251) 0%, rgb(226, 227, 250) 50%, rgb(223, 226, 250) 100%)"
    radius: "16px"
    padding: "24px"
---
# Violet Ledger Interface
Source: https://relevanceai.com/

## Overview
This is a light-mode, data-forward enterprise SaaS aesthetic: near-white canvas, Swiss-adjacent grid discipline, and a single indigo gradient rationed to primary actions and thin corner washes. It reads as operational software dressed for a boardroom — dashboards, flow diagrams, and tables sit in plain white cards, while Sora display type at moderate scale (never oversized/hero-huge) sets headlines with tight negative tracking. The system trusts whitespace and hairline borders over shadow-heavy depth; elevation is signaled with faint composite shadows, not skeuomorphic weight. The single indigo/violet gradient is the system's signature and its only saturated color — everything else is grayscale ink and near-white surface.

## Composition
The first screen is a two-column hero: a Sora headline-lg at left with two-line wrap, a supporting body paragraph and CTA pair at right, sitting above a dense operational preview — a metrics strip of four numeral cards, a data table of eight-plus task rows, and a chat-log panel showing a stepped agent build sequence. This immediately establishes density as the governing value over spaciousness. Below the fold, a logo strip (monochrome grayscale marks) breaks rhythm, followed by a three-stage numbered process band (gradient-tinted first card, plain white cards for stages two and three), a flow-diagram card on violet gradient ground, a video testimonial band with a strip of client logos above it, a compliance/badge row, and a four-level maturity-framework table with a tabbed switcher. The deliberate choice: lead with product screenshot density instead of a spacious brand statement — this rejects the airy marketing-hero convention in favor of proving operational depth on screen one, at the cost of typographic drama.

## Colors
Background is white (#FFFFFF, ~84–92% of pixels) with an off-white/lavender-tinted surface (#F8FAFC, #F3F3F4) used for panel and card fills — never a true gray. Text ink is true black (#000000) for primary copy and a near-black navy (#0D162F) for secondary/UI labels, with muted gray (#868A97) for tertiary captions — a three-step ink scale rather than a single gray ramp. Borders are hairline #E6E7EA throughout tables, cards, and nav pills. The one saturated hue is indigo/violet (#6056FF → #3B32F9 gradient), rationed exclusively to CTAs, active-state icons, the flow-diagram accent lines, and four corner-positioned radial gradient washes at low opacity (each ~3% of page area) — never a full-bleed hero fill. A secondary teal (#0E9384) appears as a rare status/checkmark accent. Deep ink (#1A192B) anchors the wordmark and darkest headings. Nothing else is colored: icons, illustrations, and secondary buttons stay grayscale, keeping violet legible as "action" everywhere it appears.

## Typography
Sora carries all display and headline roles at unusually tight tracking (-2.4px at 48px, -0.9px at 36px) with a relaxed 400 weight rather than bold — this gives headlines a light, engineered character instead of marketing punch. Inter carries every UI, label, and body role: body copy at 16px/1.6 in black, labels at 20px/500 with -0.5px tracking for card titles and metric captions. The hierarchy is: Sora headline → Inter label-md (bold small headers inside cards/steps) → Inter body-md (paragraph copy, muted) → Inter small caption (metadata, percentages, model names in tables). No serif or mono accent appears; the system is a strict two-family pairing, with Inter doing double duty as both label and data face (tabular percentages and dollar figures throughout the metrics strip and task table).

## Layout
Content is capped at a 1300px max-width, centered, with 64px section padding stacking bands vertically — a clean single-column rhythm at the macro level. Within sections, grids vary by purpose: a 4-column stat strip (gap 40px/24px, each item ~23% width — four equal cards in one row), a 2-column 50/50-ish split for headline+diagram bands (gap 80px, ~40/46% split — asymmetric but near-even), and a 7-column asymmetric split for the process/case-study rows. Card families are edge-to-edge with zero radius and zero padding on media-bleed types (screenshots and diagrams fill the full card, cropped flush), while icon+heading cards use generous internal padding against light-tinted panel backgrounds. Density is high throughout — tables, flow-node diagrams, and multi-column footers (43 links across five columns) all favor information count over breathing room. The navbar is sticky and transparent, implying it inherits page-white on scroll rather than a distinct filled state.

## Components
- **Navbar**: 65px tall, sticky, transparent background, 10 items (logo + dropdown menus + utility links). Contains one outline button (transparent, text #0D162F, radius 4.8px, height 42px, padding 10px 20px, border `1px solid rgb(230, 231, 234)`) and one gradient CTA pill (`radial-gradient(circle, rgb(96, 86, 255), rgb(59, 50, 249))`, text #FFFFFF, radius 4.8px — square-ish, not full pill — height 42px). Logo is a small circular gradient mark beside a wordmark in dark ink.
- **Hero primary CTA**: an observed near-white/indigo-filled solid pill positioned directly under the two-line headline — visually the darkest, highest-contrast control on screen one. Rebuild with the measured gradient-fill pill token (radius 9999px, height 42px, padding 10px 20px, `radial-gradient(circle, rgb(96, 86, 255), rgb(59, 50, 249))`, shadow `rgba(59, 50, 249, 0.25) 0px 1.6px 6.4px 0px`) — this is the true primary, paired beside a secondary outline-ghost button (transparent, text #374151, radius 6px, border 1px transparent, hover bg #F9FAFB).
- **Metric/numeral row**: appears directly beneath the hero headline, ×4 cards in one row (23% width each, 40/24px gap). Surface transparent, radius 0, no padding. Anatomy: small muted label top, oversized black numeral (Sora or Inter bold), a small delta caption below in muted or teal tone, and a thin gradient sparkline at the card foot.
- **Task/data table**: one instance beneath the metric row, full-width, rows [100|100|100…] stacked — transparent surface, zero radius. Anatomy per row: small colored tool-icon cluster, task label, avatar + role name, model-name chip with icon, percentage in teal/black, dollar cost right-aligned.
- **Agent chat/build panel**: one instance beside the metric+table block on the hero screen. Contains a file-attachment chip, a user message bubble, and a stepped checklist (numbered build steps with icons), terminating in an input bar with a circular gradient send button.
- **Logo strip**: two occurrences (upper and lower page), each a single row of 6–7 grayscale brand marks, some paired with a small "Case study" text link beneath in accent-teal or link-blue.
- **Three-stage process cards**: ×3 in a row, uneven widths (first card widest — gradient-filled `linear-gradient(160deg, rgb(230,230,251) 0%, rgb(226,227,250) 50%, rgb(223,226,250) 100%)`; second and third plain white). Anatomy: small checklist pills stacked top (rounded-pill with checkmark icon), a "Weeks N" eyebrow label, a bold label-md heading, and a muted body sentence — composition rows [1 wide, 2 narrower].
- **Flow-diagram card**: one instance, full-width, violet-gradient ground, containing a node-and-edge diagram (trigger chips, agent-icon nodes, dotted routing lines, percentage badges per node) with a two-tab toggle pill (`Relevance` / competitor) floating bottom-right in a white rounded control.
- **Video testimonial band**: one instance, 2-column split (quote + attribution + "Read more" pill button on left; embedded video with centered circular play control on right), bordered top by a thin 3-logo strip.
- **Compliance badge row**: one instance, ×2+ circular/rounded-square badge marks (SOC 2, GDPR) each with a checkmark, centered under a heading + body pair.
- **Maturity framework table**: one instance, tabbed switcher (pill-group, active tab shaded #F3F3F4) above a 4-column comparison table; each column has a small flow-diagram illustration, a level label (colored indigo for advanced levels), and a muted description row beneath — column header row is bordered, body rows separated by hairline dividers.
- **Press/rating strip**: ×2 rows of 4 grayscale wordmarks (Fortune, Forbes, etc.), the second row pairing marks with small quote captions and a G2 star-rating readout.
- **Footer**: transparent background, 5-column link layout (43 links total), wordmark + tagline + social icons at far left, compliance seal row beneath.

## Graphics & Effects
Four radial gradients wash the page corners at low opacity, each covering roughly 3% of total page area — `radial-gradient(90% 80% at 12% 0%, rgba(138,105,255,0.55) 0%, rgba(138,105,255,0) 62%)` top-left, `radial-gradient(85% 75% at 92% 10%, rgba(109,74,255,0.55) 0%, rgba(109,74,255,0) 62%)` top-right, `radial-gradient(85% 85% at 82% 100%, rgba(138,105,255,0.5) 0%, rgba(138,105,255,0) 60%)` and `radial-gradient(80% 70% at 22% 100%, rgba(199,207,255,0.6) 0%, rgba(199,207,255,0) 65%)` at lower corners — these sit behind the hero only, never spanning the full canvas; the page reads white with violet haze pooling at its four extreme corners. A linear scrim `linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(96,86,255,0.07) 14%, rgba(96,86,255,0.07) 86%, rgba(0,0,0,0) 100%)` sits over media strips (logo rows, screenshot bands) to fade their edges into white. Card shadows are composite: `rgba(13,22,47,0.06) 0px 1px 2px 0px, rgba(13,22,47,0.14) 0px 6px 18px -4px, rgba(255,255,255,0.9) 0px 1px 0px 0px inset` gives a soft lifted-card effect with a bright inner top-edge highlight; a lighter variant `rgba(255,255,255,0.8) 0px 1px 0px 0px inset, rgba(13,22,47,0.07) 0px 2px 8px 0px` appears on flatter controls. Backdrop blur (`blur(8–12px)`) is used on floating tab toggles and possibly the sticky nav on scroll. No noise/grain or star-field texture is present — the surface is clean and flat aside from the gradient corner washes.

## Motion
Transitions are fast and utilitarian: color/background/border/fill changes run on `0.15s cubic-bezier(0.4, 0, 0.2, 1)` for hover-state swaps (button backgrounds, link colors), while broader property changes (`all`) use `0.2s` to `0.3s` on the same curve for card and panel transforms. Button hover intensifies the gradient shadow rather than shifting color, from a tight 1.6px spread to a softer 3.2px spread — a subtle lift, not a bounce. Keyframe utilities present (tw-pulse, tw-shimmer, tw-spin, dashdraw) point to a shimmering loading state on skeleton/data elements, a spinning loader for async states, and an animated dash-draw effect likely tracing the flow-diagram connector lines on scroll into view.

## Guardrails
- Never fill the hero background edge-to-edge with the violet gradient — it is corner-rationed at ~3% coverage per wash; the hero stays white-dominant.
- Never give the nav CTA a full 9999px pill radius — it is 4.8px, distinctly squarer than the hero/mid-page gradient buttons which are true pills.
- Never render secondary/ghost buttons in violet — they stay grayscale (#374151 or #0D162F text) with transparent fill; violet is reserved for the gradient CTA family only.
- Never add heavy drop shadows or dark surfaces — elevation comes from hairline borders and soft multi-layer shadows on white, not from darkened panels.
- Never substitute a serif or mono face — the type system is strictly Sora (display) plus Inter (everything else).
- Never round media-bleed cards — screenshots and diagram panels sit flush at 0px radius even when neighboring cards use 12–16px.
