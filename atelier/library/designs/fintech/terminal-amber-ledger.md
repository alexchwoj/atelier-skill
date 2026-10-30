---
version: "1"
name: "Terminal Amber Ledger"
description: "Near-black developer-console aesthetic with a rationed amber accent, monospace code surfaces, and a ledger-like rhythm of full-bleed dividing rows."
colors:
  background: "#0F0F0E"
  surface: "#131311"
  surface-alt: "#161614"
  text-primary: "#F2EFE8"
  text-secondary: "#A8A39A"
  text-muted: "#716D64"
  accent: "#C8A96B"
  accent-blue: "#4D6BFE"
  border: "#F4F4E9"
  success: "#00D492"
typography:
  display-lg:
    fontFamily: "Space Grotesk"
    fontSize: "58px"
    fontWeight: 600
    lineHeight: "1.04"
    letterSpacing: "-1.7px"
  headline-md:
    fontFamily: "Space Grotesk"
    fontSize: "40px"
    fontWeight: 600
    lineHeight: "1.08"
    letterSpacing: "-1px"
  body-md:
    fontFamily: "Inter"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: "1.94"
  label-md:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: "1.5"
  accent-mono:
    fontFamily: "JetBrains Mono"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.6"
spacing:
  base: "16px"
  gap: "56px"
  card-padding: "28px"
  section-padding: "112px"
  section-gap: "134px"
rounded:
  control: "4px"
  pill: "9999px"
  hairline: "2px"
  card: "2px"
  badge: "3px"
components:
  button-primary:
    background: "#F2EFE8"
    text-color: "#141412"
    radius: "4px"
    height: "36px"
    border: "none"
  button-secondary-outline:
    background: "transparent"
    text-color: "#F2EFE8"
    radius: "0px"
    height: "44px"
    border: "1px solid #716D64"
  button-ghost:
    background: "transparent"
    text-color: "#F2EFE8"
    radius: "0px"
    height: "44px"
    padding: "12px 20px"
  card-fullwidth-band:
    background: "transparent"
    radius: "0px"
    padding: "112px 0px"
    border-top: "1px solid #2C2C29"
  card-stat:
    background: "transparent"
    radius: "0px"
    border: "1px solid #2C2C29"
  card-list-icon:
    background: "#131311"
    radius: "0px"
    padding: "28px"
  card-code-panel:
    background: "#161614"
    radius: "0px"
    border: "1px solid #2C2C29"
  card-pricing:
    background: "transparent"
    radius: "0px"
    padding: "0px"
    border: "1px solid #2C2C29"
    border-top-featured: "2px solid #C8A96B"
  badge-featured:
    background: "#2C2C29"
    text-color: "#C8A96B"
    radius: "3px"
---
# Terminal Amber Ledger
Source: https://www.aicutad.id/

## Overview
This is a dark-mode-default developer-tool aesthetic — a terminal/console visual language, not a marketing-gradient one. The system reads as Swiss/International in its discipline (strict left alignment, ruled hairline dividers, numbered list items) filtered through a code-editor skin: monospace snippets, syntax-tinted tokens, terminal window chrome (three dots). The palette is almost monochrome near-black with warm off-white text and a single desaturated gold/amber accent used only as a signal color — never a background. Corners are kept nearly square throughout (0–4px), reinforcing a technical, unornamented, no-nonsense feel more akin to a CLI tool than a consumer product.

## Composition
The first screen is classic split-hero: an eyebrow label, a three-line display headline, a body paragraph, a button pair, three checkmarked assurances, and a stat row of three figures on the left; a code-editor panel with terminal chrome and a live-looking response line on the right. Below the fold, the page settles into a rigid ledger rhythm: full-bleed horizontal bands separated by hairline rules, each holding a numbered feature row (numeral + heading + body, right-aligned description column), then a two-column integration section (step list left, tabbed code panel right), then a data-table-style model catalog, then a four-up pricing row, then an accordion FAQ, then a centered closing CTA band, then a three-column footer. The deliberate choice is density-through-rule-lines rather than density-through-cards-with-shadow — dividers and whitespace do the separating work instead of elevation, rejecting the boxed/shadowed-card alternative common to SaaS pages.

## Colors
Background is near-black `#0F0F0E`, covering the vast majority of the pixel field (~87% declared, ~95% measured), making this an unambiguously dark-mode-default system. Two barely-lighter surfaces sit above it for panels: `#131311` (used for the code editor "quickstart.ts" panel and the icon+list feature cards) and `#161614` (used for the tabbed integration code panel), both essentially tonal steps rather than distinct colors — elevation is signaled by a hairline border, not a lighter fill jump. Primary text is warm off-white `#F2EFE8`; secondary/label text is `#A8A39A`; the most muted captions and numerals use `#716D64`. The accent `#C8A96B` (a muted antique gold) is heavily rationed: it colors the eyebrow labels, the terminal-panel inset ring shadow (`rgb(200, 169, 107) 0px 2px 0px 0px inset`), one active-tab underline, and small dot markers in a step list — never a fill, never more than a few pixels of any one element. A cool blue `#4D6BFE` and green tokens (`#00D492`/`#5EE9B5`) appear only as tiny provider/status dots inside the model table and a footer status pill — deliberately small, deliberately not competing with the gold. Borders use a near-white hairline `#F4F4E9` at very low opacity for rule lines. Nothing else is colored: buttons, cards, and body copy are left in the neutral gray/off-white/black system so the gold reads as a genuine signal, not decoration.

## Typography
Space Grotesk carries all display and headline roles at tight tracking (display-lg 58px/600, ls -1.7px; headline-md 40px/600, ls -1px) — a geometric, slightly technical sans that gives headlines a stamped, engineered character. Inter carries all running text: body-md at 17px/400 with generous 1.94 line-height for readability in long paragraphs, and label-md at 16px/600 for eyebrows, table headers, and step labels (typically tracked wide and uppercase). JetBrains Mono is the signature accent family, reserved exclusively for code blocks, model-ID strings, and the terminal filename — its presence is what visually declares "developer tool" before any copy is read.

## Layout
Content is capped at a 1180px max-width, centered, with 112px section padding and unusually large 134px gaps between major sections — this generous vertical rhythm is what keeps a text-and-rule-heavy page from feeling cramped. The full-width feature band uses a single-column stack of five 100%-width rows (numeral/label pattern), not a card grid — each "row" spans edge-to-edge within the container, separated by hairline dividers, so the composition is literally rows-of-one, stacked five deep, twice over (once as the numbered platform list, once as the FAQ accordion). Where true grids appear they are narrow: a 2-column split (44–49% each) pairs a text column with a code or step panel twice in the page; a 4-column stat/pricing row (25% each) appears once for the pricing tier. The four-up pricing row is the only place true multi-column card grid logic appears, and even there gaps are structural (hairline-bordered blocks) rather than shadow-elevated cards. Overall density is comfortable-to-airy vertically but tight horizontally, consistent with a documentation-adjacent product rather than a marketing-dense one.

## Components
- **Navbar**: edge-to-edge square bar, 72px tall, full viewport width (0px inset both sides), all four corners 0px radius, transparent background, sticky. Contains a mark (bordered square logo glyph) + wordmark on the left, 3 nav links centered-left, and on the right a text-only secondary link plus the primary CTA button (`#F2EFE8` fill, `#141412` text, 4px radius, 36px height) with a trailing arrow glyph — 7 total interactive items.
- **Hero primary button**: an observed near-white solid pill/rectangle sitting directly under the body paragraph, left of a secondary outline button — fill approximately `#F2EFE8`, text near-black, corners ~4–6px (observed, matching the navbar CTA's 4px radius family). This is the true primary; do not substitute the transparent 44px-height mid-page buttons for it.
- **Hero secondary button**: outline variant beside the primary, transparent fill, `#F2EFE8` text, thin muted border, same height band as primary but visually lighter weight — a documentation-link action, not a conversion action.
- **Ghost text buttons** (×3 measured mid-page): transparent background, `#F2EFE8` text, 0px radius, 44px height, 12px/20px padding — used for in-body links like "view docs" or tab-adjacent actions; square corners distinguish them clearly from the pill-feeling primary.
- **Stat row** (2 cards, first screen): transparent fill, 0px radius, anatomy heading+icon+body — three large numerals with a caption label beneath, arranged in a bordered horizontal triptych under the hero code panel.
- **Code/terminal panel** (hero + integration section, one each): `#131311` / `#161614` fill, 0px radius, thin `#2C2C29` border, terminal chrome (three dot indicators + filename label) at top, syntax-tinted monospace body, a status line at bottom (green "200 OK" style success text + latency/token metadata). The signature inset-top shadow `rgb(200, 169, 107) 0px 2px 0px 0px inset` sits on this panel, giving it a thin gold cap-line.
- **Numbered feature band** (5 full-width rows, the platform section): transparent fill, 0px radius, 112px vertical padding per row, each row anatomy = small numeral + bold label on the left third, descriptive paragraph on the right two-thirds, one row carries an inline small pill-badge callout. Rows stack 100/100/100/100/100 — full ledger rows, not a card grid.
- **Icon+list cards** (4, mid-page): `#131311` fill, 0px radius, 28px padding, each holding an icon, a short list, and body text — used for compact capability groupings.
- **Icon+expandable rows** (5, near page end / FAQ): transparent, 0px radius, 0px padding, each row = chevron-icon + question heading that expands to reveal body text; stacked 100% width, full-bleed hairline dividers between.
- **Two-column integration panel**: left = 3-step list with small gold dot markers and step labels/headings/body; right = tabbed code panel (TypeScript/Python/cURL tabs) with the same terminal chrome as hero; columns roughly 46/44 and 40/49 across the two instances measured, gap 56px.
- **Model catalog table**: full-width row list, header row in muted uppercase label type, each data row = monospace model-ID, small colored provider dot + name, plain-text use-case description, right-aligned latency figure in muted tone — rows separated by hairline rule, no card chrome.
- **Pricing card family** (4 in a row): transparent fill, 0px radius, bordered, 25% width each, one center card distinguished by a 2px gold top border and a small badge (`#2C2C29` bg, gold text, 3px radius) reading a "most used" style flag. Anatomy per card top-to-bottom: plan label, large price figure + cadence caption, one-line description, hairline rule, bullet checklist (small square bullets), CTA button at bottom — the featured card's CTA is solid off-white/dark-text, the other three are outline/ghost.
- **Closing CTA band**: centered text block (headline + body) over plain background, two buttons side by side — primary solid off-white pill/rect and a secondary outline button — no card chrome, full-bleed section with extra vertical padding.
- **Footer**: `#131311` background, edge-to-edge, logo+description+status-pill on the left, three link columns (Platform/Developer/Perusahaan-style groupings) totaling 12 links, bottom-most legal row with copyright and locale/timezone text split left/right.

## Graphics & Effects
No gradients or hero background art are present — the hero stays flat near-black across its full frame, consistent with the ~95% `#181818`/`#0F0F0E`-dominant pixel field; color exists only in small type accents and the code panel, never as a full-bleed wash. The one notable effect is the inset top-edge highlight on code/terminal panels: `rgb(200, 169, 107) 0px 2px 0px 0px inset`, a 2px gold cap-line at the top inner edge, functioning like a lit terminal bezel rather than a shadow. All other declared shadow layers are fully transparent (`rgba(0,0,0,0) 0px 0px 0px 0px`), confirming the system avoids drop-shadow elevation entirely — depth is conveyed by border and fill-step only. There is no visible noise, grain, or star-field texture; surfaces are flat and clean, in keeping with the terminal-UI register.

## Motion
Interactive state changes run on short, snappy Tailwind-style transitions: color/background/border/shadow/transform properties animate at `0.15s cubic-bezier(0.4, 0, 0.2, 1)` for micro state changes (tab switches, hover) and `0.2s cubic-bezier(0.4, 0, 0.2, 1)` for slightly larger interactions (accordion open/close, button press), with a broader `0.3s cubic-bezier(0.4, 0, 0.2, 1)` catch-all "all" transition used on a few compound components. A `pulse` keyframe animation is present, most likely driving the small live-status dot (footer "system normal" indicator or the code panel's "200 OK" line) with a soft breathing opacity loop. Motion throughout is utilitarian and fast — no springs, no overshoot — reinforcing the terminal/console character rather than a playful or cinematic one.

## Guardrails
- Never fill the hero or any section background with a gradient or color wash — the field stays flat near-black; color is confined to text, thin rules, and the single inset gold cap-line.
- Never round corners past ~4px on buttons/cards/panels — this system is built on square, ledger-like geometry; pill shapes only belong to small status badges, not primary UI.
- Never promote the transparent 44px ghost buttons to "primary" — the true hero primary is the solid off-white/near-black-text button; keep ghost/outline variants secondary throughout.
- Never replace hairline-rule section dividers with card shadows or elevated boxes — separation is achieved by borders and whitespace, not drop shadow.
- Keep the gold accent rationed to eyebrows, dots, one inset highlight, and one featured-tier border — it must never become a large fill or dominate a full component.
- Preserve monospace typography strictly for code/model-ID content — body and headline text must stay in Inter/Space Grotesk.
