---
version: "1"
name: "Confetti minimal"
description: "A light, near-white editorial base punctured by one saturated rainbow-gradient hero panel and a scatter of matching gradient tiles, carried by an oversized serif-italic display headline and a jet-black footer bookend."
colors:
  background: "#F0F0F0"
  surface: "#FFFFFF"
  surface-dark: "#000000"
  text-primary: "#000000"
  text-secondary: "#99948F"
  border: "#DDCED3"
  accent-blue: "#0000EE"
  accent-gold: "#FDD900"
  accent-orange: "#EA552B"
  accent-red: "#F7414E"
  accent-lime: "#61F15C"
  accent-midnight: "#130933"
typography:
  display-lg:
    fontFamily: "Figtree"
    fontSize: "82px"
    fontWeight: 500
    lineHeight: "0.95"
    letterSpacing: "-3px"
  headline-md:
    fontFamily: "Figtree"
    fontSize: "56px"
    fontWeight: 500
    lineHeight: "1"
    letterSpacing: "-2px"
  body-md:
    fontFamily: "Figtree"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: "1.2"
  body-sm:
    fontFamily: "Figtree"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.4"
  accent-serif:
    fontFamily: "Seriouslynostalgicfnit Reg"
    fontStyle: "italic"
  label-mono:
    fontFamily: "Ocrastd"
    letterSpacing: "0.08em"
spacing:
  base: "8px"
  gap-sm: "12px"
  gap-md: "24px"
  gap-lg: "32px"
  section-padding: "60px"
  container-inset: "60px"
rounded:
  control: "8px"
  chip: "9999px"
  card: "12px"
  card-lg: "19px"
  hero-panel: "20px"
  pill-large: "100px"
components:
  button-nav-primary:
    background: "linear-gradient(rgb(68, 68, 68), rgb(0, 0, 0))"
    text-color: "#FFFFFF"
    radius: "8px"
    height: "38px"
    border: "1px solid rgb(0, 0, 0)"
    shadow: "rgba(0, 0, 0, 0.3) 0px 1px 2px 0px, rgb(0, 0, 0) 0px 0px 0px 0px, rgba(255, 255, 255, 0.3) 1px 1px 0.25px 0px inset, rgba(255, 255, 255, 0.5) 0px 2px 1px 0px inset"
  button-nav-secondary:
    background: "transparent"
    text-color: "#000000"
    radius: "8px"
    height: "38px"
    border: "1px solid rgb(221, 206, 211)"
    hover-background: "#FFFFFF"
  button-hero-primary:
    background: "#FFFFFF"
    text-color: "#000000"
    radius: "8px"
    height: "60px"
    padding: "20px 15px"
    hover-background: "#000000"
    hover-text-color: "#FFFFFF"
  button-pill-secondary:
    background: "#FFFFFF"
    text-color: "#232A37"
    radius: "100px"
    height: "52px"
  card-gradient-tile:
    background: "linear-gradient(rgb(40, 39, 39), rgb(27, 27, 27))"
    radius: "0px"
    padding: "0px"
  card-glass-badge:
    background: "rgba(255,255,255,0.11)"
    radius: "12px"
    padding: "12px"
    shadow: "rgba(255, 255, 255, 0.16) 0px 1px 0.25px 0px inset, rgba(255, 255, 255, 0.11) 0px 2px 1px 0px inset"
---
# Confetti minimal
Source: https://www.designjoy.co/

## Overview
This is a flat, minimalist editorial system on a warm off-white page (#F0F0F0 at ~71% of pixels) that reserves nearly all its saturation for a small number of rainbow mesh-gradient panels and tiles — a restrained-canvas-with-rationed-confetti approach. The display voice is a tight, dark-weight grotesque (Figtree) at 82px with negative tracking, repeatedly punctuated by a cursive italic serif accent (Seriouslynostalgicfnit Reg) on single words or short clauses within otherwise-sans headlines. The footer flips the whole page to true black, bookending the light body with a dark-mode-default close. Nothing is glassmorphic in the body; the only translucent surface is a small navbar/CTA glass badge treatment low in the stack.

## Composition
The first screen is a classic asymmetric split: left column carries the eyebrow-free display headline plus a muted support line, right column holds a single tall gradient hero card (a self-contained "join" panel) roughly matching the headline block's height — this is the one deliberate compositional choice (product-card-as-hero-visual instead of a photographic or abstract full-bleed hero image). Below the fold, the page settles into a steady vertical rhythm of centered, serif-accented section headlines followed by content bands: a 3-up process-step row, a horizontal logo strip, a bordered pull-quote panel, a 5-up feature-tile grid with prev/next carousel arrows, a 2-up testimonial row, a 2-up asymmetric media/utility panel pair, a centered pricing headline with a 2-up pricing/visual split, a 2-up benefit-card row, a second logo strip, and finally a 2-column FAQ accordion beside a gradient contact card, before the black footer. Density is generous — wide 60-96px gutters and large card gaps — never packed, keeping the flat-color body feeling airy against its punchy tile accents.

## Colors
Background is the off-white #F0F0F0 (~71% of the field); pure white #FFFFFF (~6%, declared 35.7%) forms card and button surfaces sitting on top of it. Pure black #000000 is a major structural color (declared 51.4%) used for primary-CTA text/fills and the full-bleed footer, not just accents — this is the near-black-dominant register the hero and footer both key off. Text ink is #000000 for primary copy, #99948F for secondary/muted lines. Borders are a soft rose-gray #DDCED3 (~0.2%). The rainbow — #FDD900 gold, #EA552B orange-red, #F7414E indian-red, #FB421F orange, #61F15C lime, #130933 midnight-blue, plus #0000EE pure blue — is entirely rationed to gradient hero cards, feature tiles, and the closing footer illustration; it never touches body backgrounds, buttons, or running text. A single gold #FCC212 note (~3.5% declared) appears as a highlighted pricing/badge accent. The vast tan-to-white surface is deliberately left uncolored so every gradient tile reads as a jolt.

## Typography
Figtree carries the entire system: display-lg (82px/500, lh 0.95, ls -3px) for hero and section headlines, headline-md (56px/500, lh 1, ls -2px) for secondary section titles, body-md (20px/400, lh 1.2) for support lines, and a small body-sm (14px/400) for card copy and footnotes, with #99948F for secondary/caption tone. The signature move is the italic serif interruption — Seriouslynostalgicfnit Reg — landing on one short clause per major headline (roughly 2–4 words, matched in size to its sans neighbors, sometimes swelling larger for a standalone pull-quote line); it recurs at least four times down the page as the system's expressive voice against otherwise-geometric sans. An all-caps micro-label (Ocrastd-styled, wide tracking) marks eyebrow tags above section headlines.

## Layout
Content sits in a max-width of 1200px with generous outer margins. The primary grid vocabulary is a 3-column row (gap 32px, three 31%-wide items) for process/feature steps, and 2-column asymmetric rows (gap 60px, two 47%-wide items; also a 32px-gap 45%/45% variant) for feature-vs-media and pricing-vs-visual pairs. The 5-tile feature grid runs at roughly 18%/18% per pair across two rows plus a fifth tile — an auto-fit card-grid with carousel arrows for overflow, not a strict 5-up. A full-width panel splits 50/50 into a bleed-media half and a 6-chip tag cluster half. Cards themselves carry zero radius and zero padding at the grid level (media-top-plus-caption anatomy), while small utility cards (badges, FAQ triggers) use 12px radius; the hero panel and pricing panel round to ~19–20px; pill buttons run full 100px/9999px. Vertical rhythm advances in comfortable 60–96px section steps, never a dense stack.

## Components
- **Navbar**: fixed-width inset bar (not edge-to-edge), centered content, logo mark + wordmark left, three-item right cluster — a plain-text link, a bordered secondary button, and a dark-gradient primary button. Primary CTA: `linear-gradient(rgb(68,68,68), rgb(0,0,0))` fill, #FFFFFF text, 8px radius, 38px height, 8px/16px padding, 1px solid black border, resting shadow `rgba(0,0,0,0.3) 0px 1px 2px 0px, rgba(255,255,255,0.3) 1px 1px 0.25px 0px inset, rgba(255,255,255,0.5) 0px 2px 1px 0px inset`, hover adds `rgba(0,0,0,0.2) 0px 9px 8px 0px`. Secondary buttons: transparent fill, #000000 text, 8px radius, 38px height, 1px solid #DDCED3 border, hover fills #FFFFFF.
- **Hero primary CTA** (first screen, under headline — an observed near-white solid, ~8px corners): #FFFFFF fill, #000000 text, 8px radius, 60px height, 20px/15px padding; hover inverts to #000000 fill with #FFFFFF text. This — not the navbar's gradient button — is the single most emphasized control on the page.
- **Hero gradient panel** (right of first screen): one tall rounded card (~20px radius) with a multi-hue mesh-gradient fill (pink/purple/blue/orange blend), carrying a small dark pill badge top-left, a bold white two-line heading, a muted white support line, a solid white pill CTA, and a bottom glass-badge micro-CTA row with avatar + arrow-button.
- **Process row** (×3, mid-page): equal-width cards in gradient tiles (`linear-gradient(rgb(40,39,39), rgb(27,27,27))` dark variant for one, saturated rainbow tiles for others), each holding a heading and one line of support copy; no borders, 0px radius.
- **Logo strip** (×2 instances): a horizontal row of 5 monochrome partner marks, ungridded, evenly spaced, no card chrome.
- **Pull-quote panel** (mid-page, one instance): full-width bordered card with dashed 1px border, generous padding, centered serif-italic-accented body copy — a standalone editorial callout, not part of a grid.
- **Feature tile grid** (mid-page): five gradient-media tiles arranged in two rows (roughly 18/18 paired, plus one), each tile is media-top (colorful icon-on-gradient) plus a heading and one-line description below; flanked by round prev/next arrow buttons for horizontal carousel behavior.
- **Testimonial row** (×2, side by side): each pairs a large serif-italic pull-quote line with a small logo mark or avatar+name+role caption beneath — no card background, just typographic contrast against the page.
- **Media/utility panel pair** (2-up, 47%/47%): left card bleeds an angled product-mockup photo collage; right card is a plain white panel with a heading, muted support line, and a chip cluster of a dozen rounded pill tags describing service categories.
- **Recent-work panel pair** (2-up): left white card with small award badges, a heading, support line and a dark gradient pill CTA (#000000-ish fill); right white card with heading and support line only, no CTA.
- **Pricing panel** (2-up, mid-page): left a tilted rainbow-card illustration on a white ground; right a black card (0px-ish outer radius but rounded ~19-20px) containing a plan-name heading, a small bordered "pause/cancel" pill badge top-right, a strikethrough-and-live price pair, a discount ribbon chip, and a two-column checklist of plan inclusions in muted white text.
- **Benefit card pair** (2-up, gap 32px): two bordered rounded (~12-19px) cards each with a circular icon glyph, a bold short heading, and a muted description line — "pause anytime" / "trial" style utility callouts.
- **FAQ accordion** (single column, left of final content section): stacked rows, each a label plus right-aligned chevron, separated by hairline dividers; no card backgrounds.
- **Contact gradient card** (right of FAQ): tall rounded (~20px) orange-to-magenta mesh-gradient card with a circular avatar/emoji glyph, bold white heading, solid white pill CTA, and a bottom email micro-row with arrow-button, mirroring the hero panel's anatomy.
- **Footer**: full-bleed true-black band, logo mark in white, a large white headline with an italic-serif closing parenthetical line, a support line, a cluster of overlapping colored circle-face glyphs as closing illustration, and a bottom-left legal/link row in muted gray text.

## Graphics & Effects
The dominant "gradient" surfaces are the rainbow mesh panels seen on the hero card, feature tiles, pricing illustration, and footer glyphs — these are illustrated/asset-based blends, not single measured CSS strings, and each is confined to its own card, never spanning the page. Two verbatim gradients are measured on small elements only: `linear-gradient(rgb(40, 39, 39), rgb(27, 27, 27))` on one process/feature tile (a dark-tile variant, covering roughly one-fifth of that row), and three matching-structure hue ramps — `linear-gradient(rgba(255,219,1,0) -3%, ... rgb(255,219,1) 100%)` (gold), the blue equivalent at `rgb(0,0,254)`, and the orange equivalent at `rgb(255,90,0)` — each a vertical wash used behind a single chip-cluster illustration, not a page background. The navbar and pricing-panel buttons carry an inset-highlight shadow language (`rgba(255,255,255,0.3) 1px 1px 0.25px 0px inset, rgba(255,255,255,0.5) 0px 2px 1px 0px inset`) giving a subtle embossed-glass edge on otherwise flat-dark buttons — this is the system's only skeuomorphic touch. Product mockups are flat photographic collage cutouts, angled and overlapping, with no scrim needed since they sit on white cards.

## Motion
Interactive elements transition on `all 0.2s ease` (buttons, cards) and a faster `background-color, color 0.1s ease` pairing for link/text hovers. Hover states are simple property swaps — fill inversion, added drop shadow — with no spring or overshoot; this is a snap-to-state system, not a bouncy one. Keyframe animations (`spin`, ellipsis-dot loaders) are reserved for loading/utility indicators, not decorative page motion — the page itself is largely static aside from a carousel's arrow-triggered slide.

## Guardrails
- Never spread the rainbow gradients across full-width backgrounds — they belong only inside discrete cards/tiles on the off-white or black ground.
- Do not round the pricing panel's black card or hero gradient panel to a sharp 0px — both use a soft ~19–20px radius, distinct from the 0px flat tiles beneath them.
- Keep the italic serif accent to short clauses (2–4 words) within headlines; don't set entire headlines in it.
- Don't substitute the navbar's dark-gradient button for the hero's white solid button as "primary" — they are different variants in different roles.
- Preserve the true-black footer as a hard color break from the off-white body, not a gradual fade.
- Keep card grid padding and radius at 0px for tile/media cards; reserve 12–20px radii for badges, panels, and pill controls only.
