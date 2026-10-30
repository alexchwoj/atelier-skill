---
version: "1"
name: "Ration-blue gate card"
description: "A single centered white authentication card floating on a soft aurora-tinted light field, with one saturated blue action and near-navy institutional type."
colors:
  background: "#F3F6FA"
  surface: "#FFFFFF"
  text-primary: "#17324F"
  text-secondary: "#6B7D90"
  accent: "#2474E5"
  border: "#DCE6EF"
typography:
  display-lg:
    fontFamily: "Inter"
    fontSize: "38px"
    fontWeight: 700
    letterSpacing: "-1.7px"
  body-md:
    fontFamily: "Inter"
    fontSize: "11px"
    fontWeight: 850
  label-eyebrow:
    fontFamily: "Inter"
    fontSize: "11px"
    fontWeight: 850
    letterSpacing: "0.08em"
  accent-serif:
    fontFamily: "Times New Roman"
    fontStyle: "italic"
spacing:
  base: "6px"
  gap: "13px"
  section-padding: "28px"
rounded:
  control: "10px"
  card: "16px"
  avatar: "13px"
components:
  button-primary:
    background: "#2474E5"
    text-color: "#FFFFFF"
    radius: "10px"
    height: "46px"
    padding: "13px 15px"
    hover-background: "#1E65C9"
  input-field:
    background: "#FFFFFF"
    radius: "10px"
    border: "1px solid #DCE6EF"
    height: "46px"
  card-auth:
    background: "#FFFFFF"
    radius: "16px"
    padding: "28px"
    shadow: "rgba(18, 50, 83, 0.08) 0px 14px 36px 0px"
  avatar-badge:
    background: "linear-gradient(135deg, rgb(36, 116, 229), rgb(43, 193, 210))"
    radius: "13px"
    text-color: "#FFFFFF"
---
# Ration-blue gate card
Source: https://aj-portfolio-dashboard.vercel.app/

## Overview
This is a minimalist, form-first authentication pattern: a single elevated white card centered on a pale gradient field. The language is corporate-clean fintech — Inter for all structural and body type, near-navy ink for headings, muted slate for supporting copy, and exactly one saturated blue reserved for the single primary action and one small eyebrow label. There is no illustration, no imagery, no decorative iconography beyond a two-letter gradient monogram badge. The aesthetic reads as restrained institutional trust rather than marketing exuberance — closer to Swiss-influenced restraint than to bento or glass excess, since the card itself is a flat opaque white rectangle, not a translucent panel.

## Composition
The entire visible page is a single centered card on an empty field — there is no navbar, no footer, no secondary section, because this is a gated entry screen, not a scrolling marketing page. Inside the card the rhythm runs top to bottom in five clear bands: a small header row (monogram badge + two-line identity block) separated by a hairline divider; an eyebrow + heading + one-line supporting sentence; two stacked labeled input fields; one full-width primary button; and a final hairline-divided footnote line in small muted text. The deliberate choice is verticality and singularity — one column, one action, generous whitespace around a narrow ~350px measure — rejecting any split-panel or illustrated-side-panel login pattern that would introduce a second focal point.

## Colors
The page background is a soft, cool near-white gradient wash — dominant pixel values sit in the `#F0F0FF`/`#F0F0F0` family (~80% combined) with a light cyan bloom (`#D8F0F0`, ~10%) concentrated toward the upper-right, consistent with the measured radial gradient `radial-gradient(circle at 85% 15%, rgba(43, 193, 210, 0.2), rgba(0, 0, 0, 0) 26%)` — a cyan-tinted glow occupying roughly the top-right quadrant, faded to nothing by 26% of its radius, not a full-bleed saturated field. Beneath it sits a broader diagonal wash, `linear-gradient(135deg, rgb(238, 245, 251), rgb(247, 250, 252) 60%, rgb(233, 244, 248))`, covering the full page. The white card (`#FFFFFF`, ~9% of pixels) floats above this on a soft shadow. Ink is `#17324F` for headings and body, `#6B7D90` for secondary/muted copy, borders are hairline `#DCE6EF`/`#C8D7E4`. The one accent, `#2474E5`, is rationed to the primary button fill, the eyebrow label text, and the diagonal gradient stops of the small monogram badge (`linear-gradient(135deg, rgb(36, 116, 229), rgb(43, 193, 210))`) — everything else on the page is neutral white, navy ink, or slate gray.

## Typography
A single family, Inter, carries the entire hierarchy. The heading is set large and heavy — 38px/700 with tight -1.7px tracking — sitting directly under a tiny 11px/850 all-caps eyebrow label in the accent blue, itself letter-spaced wide (~0.08em) for label distinction. Body and helper text run at 16px/400 in ink or muted slate. Field labels are small and bold (semibold weight, dark ink) sitting tight above each input. Footnote copy at the card's base drops to the smallest size, centered, in muted gray. No serif or mono face appears in the rendered UI — Times New Roman is present only as a system fallback, not a visible design choice.

## Layout
There is no multi-column grid on this screen: the card itself uses a single-column stack (1 column, internal padding ~28px), with two content rows inside — the header row and the two-field form row, each spanning the full card width (rows [100 | 100]). Field-to-field vertical gap is tight (~13–16px), label-to-input gap is minimal (~6px), and section separations use hairline dividers rather than added whitespace. The card has a fixed narrow measure (roughly 350–370px) and sits centered with large uniform margins on all sides — the layout does not respond via column count since there is only ever one column; on narrower viewports the card would simply inset further.

## Components
- **Auth card**: the sole container, centered on the page. ×1. Surface: `#FFFFFF` fill, 16px radius, ~28px padding, shadow `rgba(18, 50, 83, 0.08) 0px 14px 36px 0px`, no border. Inside, top to bottom: a monogram badge + two-line title/subtitle header, a hairline divider, an eyebrow label, a bold display heading, a one-line muted description, two labeled text inputs, a full-width primary button, a second hairline divider, and a centered muted footnote line.
- **Identity header row**: appears at the top of the card. ×1. Composed of a 13px-radius square gradient badge (`linear-gradient(135deg, rgb(36, 116, 229), rgb(43, 193, 210))`, white bold initials) beside a two-line text block — bold navy primary line over a smaller muted secondary line.
- **Eyebrow label**: sits above the heading. ×1. All-caps, 11px/850, accent blue `#2474E5`, wide letter-spacing — the only non-neutral text on the page besides the button.
- **Text input field**: ×2, stacked vertically with a bold label above each. Surface: `#FFFFFF` fill, 10px radius, 1px `#DCE6EF` border, ~46px height, left-inset padding. Default state only shown; no visible content.
- **Primary button ("Sign in securely" role — solid, high-contrast)**: the single most emphasized control on the screen, full card width beneath the fields. Surface: solid `#2474E5` fill, white bold text, 10px radius (slightly-rounded, not pill), 46px height, 13px 15px padding. Hover darkens fill to `#1E65C9`. No secondary or ghost button exists on this screen — there is no alternate CTA.
- **Footnote text**: centered, small, muted `#6B7D90`, sits below a hairline divider at the card's base — the smallest text on the page, purely explanatory in tone.

## Graphics & Effects
Two gradients compose the backdrop, each full-page in extent: a broad, low-contrast diagonal wash (`linear-gradient(135deg, rgb(238, 245, 251), rgb(247, 250, 252) 60%, rgb(233, 244, 248))`) covering 100% of the viewport as the base tone, and layered above it a soft cyan radial bloom (`radial-gradient(circle at 85% 15%, rgba(43, 193, 210, 0.2), rgba(0, 0, 0, 0) 26%)`) anchored to the upper-right corner, fading to transparent well before reaching center — this reads as a gentle aurora tint in one corner, not a saturated hero gradient. The only other gradient is the tiny badge fill (`linear-gradient(135deg, rgb(36, 116, 229), rgb(43, 193, 210))`), confined to a ~40px square. The card's elevation is communicated by a single soft, wide-spread shadow (`rgba(18, 50, 83, 0.08) 0px 14px 36px 0px`) — no borders reinforce it. No noise, grain, or pattern texture is visible; the surfaces are perfectly flat and clean.

## Motion
No animation is visible in the captured states; the system implies only standard micro-interaction transitions consistent with the button's hover-darken behavior (fill shifting from `#2474E5` to `#1E65C9`) — treat this as a fast, simple color transition (~150–200ms ease-out) with no scroll-triggered or entrance choreography, appropriate to a static, single-purpose gate screen.

## Guardrails
- Do not introduce a second accent color — blue `#2474E5` is the only saturated hue; everything else stays navy ink, slate, or white.
- Do not turn the corner cyan bloom into a full-bleed saturated gradient background; keep it a rationed, fading corner glow behind a light neutral wash.
- Do not give the primary button a pill radius — its corners are a slightly-rounded 10px, not full capsule.
- Do not add a second card, panel, or illustration beside the auth card; the composition is intentionally single-column and singular.
- Do not substitute a serif or mono display face; all visible type is Inter.
