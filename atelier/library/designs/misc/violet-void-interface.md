---
version: "1"
name: "Violet Void Interface"
description: "Dark-mode-default system on near-black charcoal with a single rationed violet-to-blue accent, tight bold Inter display type, and pill-everywhere control geometry."
colors:
  background: "#181818"
  surface: "#15131F"
  surface-alt: "#0C0D17"
  text-primary: "#FFFFFF"
  text-secondary: "#9382FF"
  accent: "#8B5CF6"
  accent-bright: "#9382FF"
  border: "#272A3E"
typography:
  display-lg:
    fontFamily: "Inter"
    fontSize: "52px"
    fontWeight: 800
    lineHeight: "1.12"
    letterSpacing: "-1px"
  headline-md:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: 400
  body-md:
    fontFamily: "Inter"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.65"
  label-md:
    fontFamily: "Inter"
    fontSize: "14px"
    fontWeight: 600
    letterSpacing: "0.7px"
  accent-fallback:
    fontFamily: "Arial"
    role: "system fallback stack, non-visible in rendered UI"
spacing:
  base: "16px"
  gap: "20px"
  section-padding: "96px"
rounded:
  control: "6px"
  card: "14px"
  card-lg: "16px"
  avatar: "50px"
  pill: "9999px"
components:
  navbar:
    background: "#08080D"
    backdrop-filter: "blur(18px)"
    height: "71px"
    radius: "0px"
    width: "100% (edge-to-edge)"
  button-hero-primary:
    background: "radial-gradient(circle, rgb(143, 98, 249) 10%, rgba(17, 75, 232, 0.7))"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "58px"
    padding: "16px 40px"
    border: "3px solid rgba(143, 98, 249, 0.8)"
    shadow: "rgba(27, 32, 100, 0.28) 0px 24px 24px 0px"
  button-secondary-cta:
    background: "linear-gradient(135deg, rgb(147, 130, 255), rgb(82, 0, 255))"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "43px"
    padding: "13px 38px"
  button-nav-utility:
    background: "rgba(139, 92, 246, 0.12)"
    text-color: "#FFFFFF"
    radius: "999px"
    height: "36px"
    padding: "0px 18px"
    border: "1px solid rgba(147, 130, 255, 0.5)"
  button-icon-round:
    background: "linear-gradient(135deg, rgb(147, 130, 255), rgb(82, 0, 255))"
    text-color: "#FFFFFF"
    radius: "50%"
    height: "44px"
    padding: "1px 6px"
    border: "2px solid rgb(255, 255, 255)"
    shadow: "rgba(82, 0, 255, 0.45) 0px 4px 16px 0px"
  card-testimonial:
    background: "transparent"
    radius: "16px"
    padding: "28px 26px"
  card-media-template:
    background: "#15131F"
    radius: "14px"
    padding: "0px"
  card-faq:
    background: "transparent"
    radius: "14px"
    padding: "0px"
  card-feature:
    background: "transparent"
    radius: "16px"
    padding: "30px 28px"
  card-split-media:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  footer:
    background: "#000000"
---
# Violet Void Interface
Source: https://easyfaceswap.com/

## Overview
A dark-mode-default aesthetic built on a near-black charcoal field (#181818 dominant, dropping to true black #000000 at section seams) with a single violet-to-indigo accent family rationed across CTAs, labels, and glow washes. The visual language sits between SaaS-minimalism and aurora-gradient-UI: flat charcoal cards carry the structure while radial and linear violet gradients supply all the warmth, concentrated almost exclusively inside buttons, a hero-corner wash, and gradient-filled headline words. Corners are uniformly soft-to-full (14–16px cards, 9999px pills), giving the whole system a rounded, capsule-forward control language against otherwise square, undecorated card bodies.

## Composition
The first screen reads left-text/right-media: a tight left-aligned headline block over a bold pill CTA, paired with a bordered before/after comparison panel carrying a circular drag-handle control at its seam. Below the fold the page settles into a strict single-column rhythm of full-bleed sections alternating #181818 charcoal and near-black #000000/#0C0D17 bands — a logo strip, a tabbed template grid, an alternating two-column feature narrative (image-left/text-right, then flipped), a 3×2 benefit card grid, a 3-up testimonial row, an accordion FAQ, and a closing centered CTA band before the footer. The deliberate choice is restraint: color is withheld from 90%+ of the canvas and spent only on buttons, numerals-adjacent icon chips, and gradient headline text — rejecting a full-bleed saturated hero gradient in favor of a mostly-black page punctuated by violet accents.

## Colors
`#181818` is the dominant page background (~77% of pixels), with true black `#000000` (~5%) and near-black tinted variants `#001818`/`#000018`/`#181830` (~4% each) marking section-to-section seams and the footer. `#15131F` (8.6% area) is the card surface for template-media tiles. Text ink is `#FFFFFF` for all primary headings and body copy; `#9382FF` serves double duty as secondary/muted text tone AND as the accent hue for section headlines and link-colored inline phrases. `#8B5CF6`/`#9382FF` form the accent ramp used only in button fills, icon-chip backgrounds, focus borders, and glow washes — never as a surface fill. A warm `#FFC212` amber appears narrowly as star-rating glyphs in testimonials, the only non-violet accent in the system. Borders use `#272A3E`, a desaturated violet-gray hairline, on card and panel edges.

## Typography
Inter carries the entire system; Arial exists only as an invisible fallback. Headlines use `display-lg`: 52px/800, line-height 1.12, letter-spacing -1px, set in white or filled with a violet gradient for emphasis words. Section intros use a lighter `headline-md` at 16px/400 for subheads beneath big titles. Body copy sits at `body-md`: 15px/400, line-height 1.65, in white at full opacity dropping to a muted gray-violet for secondary description lines. `label-md` (14px/600, letter-spacing 0.7px) drives small caps-like UI labels — badges, tab pills, and overline tags. Hierarchy is purely weight- and color-driven: 800-weight white or gradient headlines, 400-weight white-to-violet body, 600-weight small tracked labels for interactive chips.

## Layout
Content is capped at a 1200px max-width container, centered, with 96px section padding establishing vertical rhythm between bands. The template showcase runs a 4-column grid (gap 16px, 12 items) in three even rows of four — a uniform card-grid, not bento. The benefit section runs a 3-column grid (gap 20px, 6 items) in two even rows of three. The alternating feature narrative uses a 2-column grid (gap 64px, 2 items, each ~47% width) with image and text swapping sides row to row. Testimonials run 3-up in a single row. The FAQ is a single-column stack of 8 full-width accordion rows. Nothing varies card span within a grid — density is even and the system favors uniform multi-column card grids over mixed-span bento composition.

## Components
- **Navbar** — edge-to-edge square bar (0px radius all corners), 71px tall, full viewport width, sticky, fill `#08080D` with `backdrop-filter: blur(18px)`; 16 total nav items including logo mark, two dropdown menu triggers, and a utility cluster; its CTA is the glass nav-utility button — `rgba(139, 92, 246, 0.12)` fill, white text, 999px radius, 36px height, `1px solid rgba(147, 130, 255, 0.5)` border, hovering to `rgba(139, 92, 246, 0.22)` with a -1px vertical lift; a second plain-outline "Log in" style control sits beside it.
- **Hero primary CTA** — the single most emphasized control on the first screen: a solid pill button under the headline, filled with the radial gradient `radial-gradient(circle, rgb(143, 98, 249) 10%, rgba(17, 75, 232, 0.7))`, white text, 9999px radius, 58px height, 16px/40px padding, a 3px `rgba(143, 98, 249, 0.8)` border ring, and resting shadow `rgba(27, 32, 100, 0.28) 0px 24px 24px 0px`; hovers to a 0.97 scale with 0.95 opacity. This is distinct from and more prominent than the glass navbar button.
- **Secondary gradient CTA** — repeated mid-page beside feature copy blocks (×2+), `linear-gradient(135deg, rgb(147, 130, 255), rgb(82, 0, 255))` fill, white text, 9999px radius, 43px height, 13px/38px padding, hover opacity 0.9.
- **Circular drag-handle control** — on the hero before/after comparison panel, same `linear-gradient(135deg, rgb(147, 130, 255), rgb(82, 0, 255))` fill, 50% radius, 44px size, white 2px border, shadow `rgba(82, 0, 255, 0.45) 0px 4px 16px 0px`; sits centered on the image seam.
- **Logo strip** — one row beneath the hero, full-bleed charcoal band, grayscale/white third-party wordmarks evenly spaced, no card chrome, preceded by a small violet-linked trust line.
- **Template media grid** — the trending-template showcase: 12 cards in 3 rows of 4, `#15131F` fill, 14px radius, 0px padding, each card is a full-bleed photographic tile with a small dark pill label chip in the top-left corner over the image; a row of pill-shaped filter tabs (active tab filled solid violet-gradient, inactive tabs transparent-outline) sits above the grid.
- **Alternating feature rows** — 2 image+text pairs flipped left/right; each image sits in a bordered, rounded (14px) dark panel with a small circular inset avatar-thumbnail and a yellow squiggle-arrow annotation; text column carries an eyebrow-free bold white heading, a body paragraph, and a gradient pill CTA beneath.
- **Benefit card grid** — 6 cards in 2 rows of 3, transparent fill over the charcoal page, 16px radius, 30px/28px padding; each card: a small rounded-square icon chip (violet-tinted fill, violet glyph) at top, bold white heading below, muted body paragraph beneath — no CTA, no footer row.
- **Testimonial row** — 3 cards in one row, transparent fill, 16px radius, 28px/26px padding; anatomy top-to-bottom: a 5-star amber (`#FFC212`) rating row, a circular avatar photo beside a bold name and a violet-tinted role/title line, then a muted-white body quote paragraph.
- **FAQ accordion** — 8 full-width stacked rows, transparent fill, 14px radius, 0px padding; each row: bold white question text with a chevron toggle at the right, expanding to reveal a muted body-text answer paragraph; one row shown expanded with a visible hairline `#272A3E` border outline.
- **Closing CTA band** — centered single-column block on a near-black violet-tinted background, bold white headline, muted subhead, one large pill button matching the secondary-gradient-CTA spec but sized larger, centered.
- **Footer** — solid `#000000` background, four-column link layout (19 links total) beside a logo + one-line description block and a contact email line; hairline divider above a closing copyright row.

## Graphics & Effects
Color is almost entirely rationed into glow washes: a `radial-gradient(circle, rgba(143, 98, 249, 0.2) 0px, rgba(0, 0, 0, 0) 70%)` renders as a soft corner bloom behind the hero copy block, covering roughly 4% of total page area — not a full-hero gradient, just a localized wash fading to transparent within the left/upper hero region. A second, near-identical wash `radial-gradient(circle, rgba(143, 98, 249, 0.22) 0px, rgba(0, 0, 0, 0) 65%)` sits behind the closing CTA band at the page bottom, covering ~3% of the page. A small `linear-gradient(135deg, rgb(196, 181, 253), rgb(147, 130, 255))` renders only on isolated gradient-text or chip accents (0.5% coverage). Card and button shadows are soft and colored rather than neutral black: `rgba(27, 32, 100, 0.28) 0px 24px 24px 0px` on the hero CTA, `rgba(0, 0, 0, 0.4) 0px 24px 60px 0px` and `rgba(0, 0, 0, 0.42) 0px 18px 46px 0px` on elevated panels and modals. Backdrop blur appears at three strengths — `blur(4px)` for light hover scrims, `blur(18px)` on the sticky navbar, `blur(24px)` on modal/overlay surfaces — all glassmorphic, frosted-on-dark treatments rather than frosted-on-vivid.

## Motion
Interactions are fast and utilitarian: `transform 0.3s ease` for button press/scale states, `color 0.2s ease` for text hover shifts, `all 0.18s ease` as a general-purpose control transition, and a staggered triple-property easing (`background, color, padding-left 0.15s, 0.15s, 0.15s ease, ease, ease`) on interactive list/menu items. Named keyframe animations drive a continuously scrolling logo marquee (`scroll-logos-6ee0d6d8`, `tm-scroll-08048e26`), a modal entrance (`login-modal-in-19ef3e42`) with an accompanying shimmer sweep on an embedded control (`login-modal-google-shimmer-19ef3e42`), and an account-menu slide/fade entrance (`account-menu-in-881435ff`). Motion is short (150–300ms), eased-out, and functional — confirming state changes rather than performing decorative flourish.

## Guardrails
- Never fill more than a small corner/band region with the violet radial glow — the page must stay charcoal/black-dominant, not a saturated gradient hero.
- Do not substitute the glass navbar button's rgba fill for the hero primary CTA — the hero CTA is always the dense radial-gradient pill with its 3px border and colored shadow.
- Keep all card bodies flat and transparent/`#15131F`; do not introduce drop-shadows or gradients on card surfaces — shadows belong to buttons and modals only.
- Preserve uniform-span grids (4-up, 3-up) as even rows; do not convert them into bento/mixed-span layouts.
- Keep corner radii distinct by component: 0px navbar, 14–16px cards, 9999px/999px/50% for pills, circular icon, and round media controls — never default everything to one radius.
- Reserve amber (`#FFC212`) exclusively for star-rating glyphs; it is not a secondary brand or button color.
