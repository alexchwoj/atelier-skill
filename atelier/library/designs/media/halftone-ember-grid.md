---
version: "1"
name: "Halftone Ember Grid"
description: "White-dominant editorial-technical system rationing a saturated orange fill to a full-bleed halftone hero and mid-page CTA bands, carried by a display grotesk and dense line-item card grids."
colors:
  background: "#FFFFFF"
  surface: "#FDFDFC"
  surface-accent: "#FF5E1F"
  text-primary: "#262626"
  text-secondary: "#707070"
  text-on-accent: "#FFFFFF"
  border-subtle: "#F0F0F0"
  ink-alt: "#171717"
typography:
  display-lg:
    fontFamily: "FT Kunst Grotesk"
    fontSize: "56px"
    fontWeight: 500
    lineHeight: "0.99"
    letterSpacing: "-1.4px"
  headline-md:
    fontFamily: "FT Kunst Grotesk"
    fontSize: "48px"
    fontWeight: 500
    lineHeight: "1"
    letterSpacing: "-1.2px"
  body-md:
    fontFamily: "FT Kunst Grotesk"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: "1.2"
  label-md:
    fontFamily: "FT Kunst Grotesk"
    fontSize: "32px"
    fontWeight: 500
    lineHeight: "1"
    letterSpacing: "-0.8px"
  body-sm:
    fontFamily: "FT Kunst Grotesk"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.2"
  accent-mono:
    fontFamily: "Apercu Mono Pro"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: "1.4"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "72px"
  section-gap: "80px"
rounded:
  control: "6px"
  card: "3px"
  pill: "9999px"
components:
  navbar:
    background: "transparent"
    height: "72px"
    radius: "0px"
    width: "edge-to-edge"
  button-hero-primary:
    background: "#FFFFFF (observed near-white solid)"
    text-color: "#262626 (observed)"
    radius: "9999px (observed, full pill)"
    height: "44px (observed)"
  button-nav-cta:
    background: "#FF5E1F"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "35px"
    backdrop-filter: "blur(12px)"
  button-solid-accent:
    background: "#FF5E1F"
    text-color: "#FFFFFF"
    radius: "8px"
    height: "34px"
    padding: "6px 6px 6px 12px"
    border: "1px solid oklab(0.999994 0.0000455678 0.0000200868 / 0.1)"
    hover-background: "#FF7038"
  button-ghost-tab:
    background: "transparent"
    text-color: "#262626"
    radius: "0px"
    height: "76px"
    padding: "16px 12px"
  button-pill-toggle:
    background: "transparent"
    text-color: "#262626"
    radius: "9999px"
    height: "40px"
    padding: "10px 14px"
    hover-background: "rgba(39, 39, 39, 0.05)"
  card-feature-triptych:
    background: "transparent"
    radius: "0px"
    padding: "0px 32px"
  card-white-feature:
    background: "#FFFFFF"
    radius: "0px"
    padding: "32px"
  card-tile-grid:
    background: "transparent"
    radius: "0px"
    padding: "0px"
---
# Halftone Ember Grid
Source: https://www.cloudflare.com/

## Overview
This is a white-dominant, editorial-technical design language: a Swiss-leaning grid of thin hairline dividers and left-aligned line-item rows, punctuated by one saturated orange fill that appears only in banded, rationed doses. The white ground (~74% of pixels) reads as the base surface; the orange (~15% combined) is reserved for the full-bleed hero, mid-page CTA bands, and small accent controls — never diffused as an ambient tint. Carrying it all is a single display grotesk (FT Kunst Grotesk) at very tight negative tracking, giving oversized headlines a compressed, technical-poster feel rather than a soft marketing one. A fine halftone dot-grain overlay textures every orange band, and dotted-globe/network illustrations recur as the system's signature graphic motif.

## Composition
The first screen is a single full-bleed orange hero panel (not the page background) holding a pill-shaped announcement chip, a two-line display headline, a short two-line subhead, and one solid pill CTA — all centered, with a warm radial glow bleeding from the bottom edge. Below the fold the page reverts to plain white and adopts a strict alternating rhythm: a centered headline+subhead pair, then a wide illustrative panel (globe, dashboard mockup, terminal), then a hairline-divided feature row of 2-3 items, repeating. Density increases mid-page where pricing and workflow sections pack tight line-item lists and multi-column data tables against generous 72-80px section padding. The deliberate choice is to keep 90%+ of the page pure white/graphite and let color arrive only in horizontal orange "event bands" (hero, mid-page CTA, footer band) — rejecting the alternative of a persistently tinted or dark-mode canvas; this makes every orange band read as a punctuation mark rather than a wash.

## Colors
`#FFFFFF` is the page/surface background, carrying the vast majority of pixels seen in every screenshot after the hero. `#FDFDFC` is a near-white alias used for slightly recessed panels. `#FF5E1F` is the single accent/brand fill — it is rationed to: the hero panel, one mid-page "shipping" card, the pricing-table active tab, the highlighted price-tier box, and the closing CTA band and footer strip — roughly 15% of total pixel area concentrated in three or four horizontal bands, never scattered as small dots of color across a mostly-neutral page. `#262626` is primary text ink on white; `#707070`/`#727272` serve as secondary/muted text; `#F0F0F0` is the hairline border/divider color used throughout the grid dividers and card seams. White text (`#FFFFFF`) sits on all orange fills as the on-accent role. Large tracts of the page — body copy blocks, illustration panels, table backgrounds — are left entirely uncolored (pure white or near-white), keeping the orange legible as a signal rather than decoration.

## Typography
FT Kunst Grotesk is the sole display and body face, used at every size from 16px body copy up to 56px hero display — the system has no separate serif or humanist body font, so hierarchy is built entirely from size, weight, and negative tracking rather than family change. Display-lg (56px/500, ls -1.4px) drives the hero headline; headline-md (48px/500, ls -1.2px) drives section headers ("Region: Earth"-style, numeral-led statements); label-md (32px/500) marks large standalone statistics and card titles. Body-md (19px/400) is used for hero subheads and section intros; body-sm (16px/400) is the working copy size inside cards and lists. Apercu Mono Pro appears as a small accent face for the mono-styled dashboard/terminal chrome (version tags, log timestamps, code-style labels) — the system's one deliberate typographic accent, confined to simulated UI/data surfaces. Times New Roman appears not as a display choice but as a system-default fallback inside embedded mockup screenshots.

## Layout
Content is capped at a 1200px max-width, centered, with 72px section padding and section-to-section gaps ranging 80-287px depending on content weight. The dominant grid pattern is a 3-up feature row with equal hairline-bordered cells (card-family ×3, 0px radius, 0px padding, heading+icon+body composition) — seen directly under the hero globe illustration and again in the "run everywhere/anywhere/at scale" triptych. A second recurring pattern is a 2-up asymmetric row (rows [63 | 100] as container-width percentages), pairing a narrower text column against a wider illustrative or data panel — used in the pricing intro ("pay for active employees" + usage bar) and the workflow/agent panels. The pricing tier grid is a strict 3-across uniform card row (Free / Pay-as-you-go / Contract), each identical in structure. A 12-column, 8px-gap micro-grid with rows [66/33 | 33/66] underlies the small icon-tile clusters. Card density is low-ornament: 0px or 3px radii, hairline dividers instead of shadows for separation, so structure reads through rules-and-grid rather than elevation.

## Components
- **Navbar**: edge-to-edge square bar, 72px tall, spans full 1920px viewport width with 0px left/right inset and 0/0/0/0 corner radii (sharp, not inset or capsule), background transparent over white, sticky on scroll, holding a logo mark + 16 total nav/utility items (nav links, alert link, Login, Contact sales, search icon) plus one pill CTA (`#FF5E1F`, `blur(12px)`, white text, radius ~3.35544e+07px i.e. full pill, height 35px) anchored right.
- **Hero primary button**: the single solid pill beneath the hero headline — an observed near-white/cream fill with dark text, full pill radius (~9999px observed), roughly 44px tall; this is the emphasis button of the page, distinct from the glass nav CTA and from the smaller solid-orange utility buttons measured elsewhere.
- **Solid-accent button** (mid-page "shipping" card, checklist chip): `#FF5E1F` fill, white text, 8px radius (slightly-rounded), 34px height, padding `6px 6px 6px 12px`, 1px near-transparent white inset border; hover shifts fill to `#FF7038`.
- **Ghost tab button** (pricing category switcher, full row of 16 across a horizontal scrolling rail elsewhere): transparent fill, graphite text, 0px radius (sharp), 76px tall, padding `16px 12px` — functions as a wide clickable label rather than a bounded button.
- **Pill toggle button** (×3, "Network & CDN / SASE-Zero Trust / Compute & Storage" segmented control): transparent default, full pill radius, 40px height, padding `10px 14px`, hover background `rgba(39,39,39,0.05)`; the active state (seen on "SASE / Zero Trust") fills solid `#FF5E1F` with white text and an icon.
- **Feature triptych card** (×3, under hero globe and again mid-page): transparent background, 0px radius, 0px padding, hairline-divided cells; anatomy top-to-bottom is a small line icon, a short bold label line, then 2-3 lines of muted body copy — no imagery, no CTA.
- **White feature card** (×3, appears in a secondary feature band): solid `#FFFFFF` fill, 0px radius, 32px padding; anatomy is icon + heading + body text, no border needed since siblings are separated by hairline column rules.
- **Asymmetric text+visual card pair** (×2, pricing intro and agent-workflow sections): transparent, 0px radius, padding `0px 32px`; narrower cell (heading + short paragraph) beside a wider cell containing a simulated UI panel — a usage-bar graphic in pricing, a terminal/log mockup in the workflow section — each framed by dashed corner-tick marks (small L-shaped corner brackets visible at cell corners, a decorative "measured region" motif).
- **Pricing table** (one row of 3 uniform tier cards: Free / Pay-as-you-go / Contract): hairline-bordered cells, each holding an eyebrow label, a large numeral price (e.g. large `$0`/`$7`/`Custom` in label-md scale), 2-3 small pill-shaped feature chips (0px-radius bordered tags), and one bordered rectangular CTA button per card.
- **Highlighted price-tier callout** (single card sitting above the 3-tier row, right-aligned): white/pink-tinted panel bordered in orange, containing a dot-pattern usage bar, a bold orange price line, and a small muted caption beneath.
- **Data/version list card** (mid-page, left column of a 2-up pair): stacked rows of version tags + timestamp + status badge (e.g. "Deployed" with check icon, "Queued" with spinner icon), each row separated by a hairline rule and tinted alternately.
- **Terminal/agent-log mockup card** (mid-page, right column, dark-panel-in-white-page): simulated CLI output with monospace agent labels, an input prompt row, and a small solid-orange "Enter" button (rounded ~6px) at bottom right.
- **Full-bleed CTA/shipping band** (single instance): solid `#FF5E1F` fill over the halftone texture, radius 0px on section edges but rounded ~12px card corners at its own bounds, containing a large white headline and one white-outlined checklist chip stat.
- **Closing CTA band** (page bottom, before footer): solid `#FF5E1F` full-bleed panel with halftone texture, centered headline + subhead, one white solid-pill primary button ("observed" near-white fill, dark text) beside one outline/ghost secondary button (transparent fill, white border, white text), followed by a horizontally scrolling marquee rail of small feature callouts.
- **Footer**: transparent background, wordmark top-left, 4-5 column groups of plain text links (46 total), hairline top rule separating it from the CTA band above, small legal row at the very bottom with inline-separated links.

## Graphics & Effects
Four soft radial gradients render as small localized washes rather than full backgrounds: `radial-gradient(55% 70% at 0% 28%, rgba(255,150,80,0.2), rgba(0,0,0,0) 70%)` and its mirrored twin at `100% 28%` sit in the hero's left/right corners as faint warm corner glows (each covering roughly a quarter of the hero panel); `radial-gradient(55% 65% at 50% 72%, rgba(200,40,0,0.15), rgba(200,40,0,0.01) 70%)` is the bottom-center glow visible bleeding beneath the hero headline in the first screenshot; `radial-gradient(40% 60% at 50% 45%, rgba(255,90,20,0.05), rgba(200,40,0,0.01) 75%)` is a subtler mid-panel wash layered beneath it. A `linear-gradient(to left in oklab, rgb(253,253,252) 0%, rgba(0,0,0,0) 100%)` is a small edge-fade mask, likely on a scrolling logo/marquee rail. Every orange band carries a dense halftone dot-grain texture — small white dots in a fine regular grid over the orange fill, giving a printed/newsprint quality rather than a flat gradient. The globe illustration is a dotted-halftone choropleth (orange dots of varying density over a cream sphere with thin latitude/longitude rules) — a static stand-in is appropriate since the source uses a video/canvas surface here. Card and panel shadows are nearly all zero-elevation (`rgba(0,0,0,0) ... 0px 0px 0px`) except one soft ambient trio — `rgba(255,255,255,0.2) 1px 6px 6px inset`, `rgba(0,0,0,0.02) 0px 4px 12px`, `rgba(0,0,0,0.03) 0px 2px 12px` — used on the glass nav CTA, and a faint `rgba(0,0,0,0.1) 0px 1px 3px / 0px 1px 2px` on small utility buttons. Backdrop blurs of `blur(12px)`, `blur(2px)`, and `blur(1px)` appear on the nav CTA and small floating chips, giving a light glassmorphic edge to isolated controls against the otherwise flat white system.

## Motion
Color and border transitions run at `0.2s cubic-bezier(0.19, 1, 0.22, 1)` on hover states (buttons, links, ghost tabs), giving a fast, slightly decelerated snap rather than a linear fade. A slower `opacity 2s cubic-bezier(0.19, 1, 0.22, 1)` governs large section fade-ins. Transform/color combined transitions use `0.2s cubic-bezier(0, 0, 0.2, 1)` for pressed/active button feedback. Named keyframes — `float`, `shimmer`, `bounce-in`, `refresh`, `kumo-chart-wave` — drive small looping details: floating icon tiles in the closing CTA band, a shimmer sweep across skeleton/loading rows in the version-list card, a bounce-in entrance for chips, and a wave animation on any chart/graph element. Scroll-driven CSS animations tie the marquee feature rail and reveal timing to scroll position rather than time alone.

## Guardrails
- Never let the orange fill spread across the full page background — it belongs only to the hero, the two mid-page CTA bands, and the footer strip; everywhere else stays white/graphite.
- Do not substitute the glass nav CTA's blur-and-orange treatment for the hero's primary button — the hero button is a solid near-white pill, observed separately.
- Keep all card corners sharp-to-barely-rounded (0-8px); do not round feature-triptych or pricing cards into soft 16px+ cards — hairline dividers, not shadows, carry the separation.
- Preserve the halftone dot-grain texture on every orange band; a flat gradient alone loses the system's printed-poster character.
- Do not introduce a second display typeface — all hierarchy comes from FT Kunst Grotesk size/weight/tracking, with Apercu Mono Pro reserved strictly for simulated terminal/data chrome.
- Keep negative letter-spacing on all large display/headline text; positive or neutral tracking at these sizes breaks the compressed, technical headline feel.
