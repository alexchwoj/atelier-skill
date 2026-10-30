---
version: "1"
name: "Chirp Ledger"
description: "Light-mode, white-dominant social-feed system with hairline-gray structure, a single rationed sky-blue interactive accent, and a black capsule as the only high-contrast fill."
colors:
  background: "#FFFFFF"
  surface: "#F6F8F8"
  surface-inverse: "#000000"
  text-primary: "#0F141A"
  text-secondary: "#52636F"
  border: "#E4EAEC"
  border-strong: "#BACBD4"
  accent: "#1D9BF0"
  accent-warning: "#FFD400"
  accent-pink: "#F6339A"
typography:
  display-lg:
    fontFamily: "TwitterChirp"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.33"
  headline-md:
    fontFamily: "TwitterChirp"
    fontSize: "20px"
    fontWeight: 800
    lineHeight: "1.2"
  body-md:
    fontFamily: "TwitterChirp"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.33"
  label-google:
    fontFamily: "Google Sans"
    fontWeight: 500
    fontSize: "14px"
spacing:
  base: "4px"
  gap: "12px"
  section-padding: "18px"
rounded:
  control: "20px"
  pill: "9999px"
  card: "29px"
components:
  button-primary:
    background: "rgba(0, 0, 0, 0.8)"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "56px"
    padding: "0px"
    border: "1px solid rgba(0, 0, 0, 0)"
  button-ghost-utility:
    background: "transparent"
    text-color: "#52636F"
    radius: "9999px"
    height: "36px"
    padding: "0px"
    border: "1px solid rgba(0, 0, 0, 0)"
    hover-color: "#1D9BF0"
  button-oauth:
    background: "#FFFFFF"
    text-color: "#3C4043"
    radius: "20px"
    height: "38px"
    padding: "0px 12px"
    border: "1px solid rgb(218, 220, 224)"
  card-media-feed:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  card-panel:
    background: "#FFFFFF"
    radius: "28.8px"
    padding: "0px"
  card-row-item:
    background: "transparent"
    radius: "0px"
    padding: "12px 16px"
---
# Chirp Ledger
Source: https://x.com/codewithimanshu/status/2083862353452638487

## Overview
This is a light-mode-default editorial feed system — a Swiss-adjacent, text-forward structure where near-white (~88% of the pixel field) carries the whole page and color is used almost exclusively as an interaction signal, not decoration. The visual language is closer to Minimalism than any expressive style: a single hairline-gray rule system separates timeline units, one condensed sans (TwitterChirp) carries all reading text at a nearly-uniform 15px, and the one saturated hue in the entire system — sky blue — is reserved for links and hover states. A soft-elevation card system (white panels, ~29px radius, diffuse shadow) floats above the feed for structured data modules, and a solid black capsule button is the singular high-contrast object on the page.

## Composition
The first screen is a two-column reading layout: a wide center column of stacked paragraph blocks (numbered strategy points, inline figures, arrow-prefixed bullet lists) against a narrow right rail of account/onboarding modules. There is no hero image, no gradient wash, no display headline — the "hero" is dense body copy, itself the content. Scrolling down, the rhythm alternates plain text blocks with occasional embedded rich media (a multi-panel dashboard screenshot card with an inline play control) and a second author-card repeating the same avatar-plus-name-plus-text unit. Density is high and uninterrupted: no section bands, no full-bleed color blocks, no card grids of marketing tiles — this is a feed, not a landing page, so the deliberate choice is continuous vertical stacking over any bento/grid segmentation, rejecting visual chunking in favor of linear scroll-read rhythm.

## Colors
White (#FFFFFF, ~31% declared / ~88% rendered) is the page and card surface. Near-black (#000000, ~34% declared area, mostly as text-ink weight across dense paragraphs) and #0F141A form primary ink. #52636F is secondary/muted text (metadata, ghost-button label rest state). #E4EAEC and #BACBD4 are hairline borders separating feed units and framing the OAuth button. #1D9BF0 is the single accent — reserved for hover states on utility text-buttons and inline links — appearing on no more than a few words/pixels at a time, never as a fill. #FFD400, #F6339A, #FFC692 exist as tokened brand accents (warning/pink/orange scale) but are not visible in dominant use on this page — left uncolored/unused in the observed composition. Black is elevated to a functional fill only once: the solid capsule button, making it the page's single deliberate high-contrast object.

## Typography
Everything reading-facing runs on TwitterChirp: body-md and display-lg share the identical spec (15px/400, line-height 1.33), meaning hierarchy here is built by weight and spacing, not size — a headline-md exists at 20px/800 for higher-emphasis names/titles but is used sparingly. Google Sans appears as a secondary label face at 500 weight/14px, functioning as a system/UI label font distinct from the reading face — treat it as the interface-chrome accent family versus TwitterChirp's editorial-body role. There is no serif and no monospace; numerals inside data callouts inherit the same body face rather than a tabular variant.

## Layout
Content is capped at a 600px max-width reading column — a single-column, contained layout, not a multi-column grid. Spacing runs on a tight 4px-rooted scale (4, 8, 12, 16, 18px), producing a dense, low-whitespace rhythm appropriate to a feed rather than generous marketing air. Card families use large radii (29px, 28.8px, and pill/9999px controls at 100px-equivalent capsule shapes) contrasted against zero-radius full-width media/feed rows. The measured grids are single-column stacks throughout: the media-expandable-body card family runs rows of [100 | 100 | 100] (full-width, one per row); the white panel-card family runs [89 | 89] (near-full-width, one per row); the row-item family runs [100 | 100]. No multi-per-row card arrangement is present anywhere in the evidence — this is a stacked list layout, not a bento or masonry grid, at every level.

## Components
- **Navbar / left rail**: an icon-only vertical bar, edge-to-edge against the viewport's left edge, unbounded (no visible container radius or inset) — a simple X-mark glyph anchors the top; no visible nav-item row, no measured CTA button in this rail on the captured screens.
- **Button — hero/primary action** (the solid black capsule near page end): `rgba(0, 0, 0, 0.8)` fill, `#FFFFFF` text, radius `9999px` (full pill), height `56px`, `0px` padding, `1px solid rgba(0,0,0,0)` border — the single highest-contrast control on the page, functioning as the primary continue/engage action.
- **Button — ghost utility ×6** (feed action row: reply/repost/like/bookmark/share icons under each post): transparent fill, `#52636F` icon/text at rest, radius `9999px`, height `36px`, hover shifts text/icon color to `#1D9BF0` — a low-emphasis, icon-first control repeated per post.
- **Button — OAuth/login row** (right-rail login module): `#FFFFFF` fill, `#3C4043` text, radius `20px` (slightly-rounded, not full pill), height `38px`, padding `0px 12px`, `1px solid rgb(218,220,224)` border — three stacked instances (phone/Apple/Google), each full-width within the narrow rail.
- **Card — media/feed unit** (embedded dashboard screenshot with center play control, appears once inline mid-feed): transparent background, `0px` radius, full-bleed within the column, stacked rows at 100% width each — media covers the entire card, no padding framing it.
- **Card — panel** (right-rail "relevant people" / suggestion module): `#FFFFFF` fill, `28.8px` radius, heading + circular avatar + body-text anatomy, two stacked instances at ~89% container width — soft-elevated above the white page via the measured diffuse shadow.
- **Card — row item** (compact list rows, e.g. footer legal links or repeated account rows): transparent fill, `0px` radius, `12px 16px` padding, two stacked full-width rows.
- **QR/app-download tile** (bottom-right floating utility box): white card, hairline border, contains a monochrome QR pattern plus small label text — a fixed-position utility module, not part of the scroll flow.

## Graphics & Effects
A single gradient is measured, at only ~2.4% of total page area: `linear-gradient(to top, rgb(255, 255, 255) 52%, oklab(0.999994 0.0000455678 0.0000200868 / 0.45) 84%, rgba(255, 255, 255, 0) 100%)` — this is a soft white fade-scrim, almost certainly masking the bottom edge of a card or media element to blend it into the white page background, not a page-wide wash. One embedded video surface exists (the dashboard-screenshot card, distinguishable by its centered circular play glyph); when rebuilding, substitute a static multi-panel chart/screenshot image as its stand-in. The sole shadow in evidence, `rgba(0,0,0,0.08) 0px 4px 20px 0px`, is a soft, wide, low-opacity elevation cue applied to floating cards/QR tile — diffuse and barely-there, consistent with the system's overall restraint. A `blur(12px)` backdrop-filter exists for glass-style floating overlays (e.g. modal or tooltip surfaces) — frosted-glass treatment reserved for transient UI, not persistent page chrome.

## Motion
All interactive color/background/border transitions run at `0.15s cubic-bezier(0.4, 0, 0.2, 1)` — a short, snappy ease-out covering hover recoloring (ghost buttons turning accent-blue) and background swaps. Transform-based motion (scale, translate, rotate) runs slightly slower at `0.2s` with the same curve, used for press/active feedback. Dismissal patterns use directional swipe-out keyframes (left/right/up/down) for transient elements like toasts, paired with `sonner-fade-in`/`sonner-fade-out` opacity keyframes for their entrance/exit. The overall motion character is utilitarian and fast — sub-200ms, single-curve, no springs or overshoot — motion here signals state change, not delight.

## Guardrails
- Never fill the hero or page background with the measured gradient string — it is a small ~2.4%-area scrim, not a backdrop.
- Keep the accent blue rationed to hover/link states only; do not apply it as a card fill or button background.
- Do not convert the stacked single-column card rows into a multi-column bento/grid — every measured row map is 100%-width, one-per-row.
- Preserve the black capsule button's low fill opacity (`rgba(0,0,0,0.8)`, not solid `#000`) and its `9999px` pill radius exactly.
- Do not upscale the 15px body/display type into a marketing display size — hierarchy here comes from weight and spacing, not scale jumps.
- Keep unused brand tokens (pink, orange, warning yellow) absent from the rebuild unless a role is explicitly assigned to them.
