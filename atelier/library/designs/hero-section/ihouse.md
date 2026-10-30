---
version: "1"
name: "Design System Inspired by ihouse"
description: "ihouse is a bright sky-blue smart-home hero built on one full-screen looping video of an isometric 3D apartment floor plan. The whole UI is three frosted-glass clusters floating over that scene — a top bar (extrabold IHOUSE wordmark + four nav links + three circular glass controls) and a right-edge floor selector (2F / 1F / B1) — with no headline, no CTA, no footer. The scene is the content. Manrope carries everything at 400–800, white text sits on a navy-glow shadow for legibility over the video, and glass is done purely with bg-white/30 + backdrop-blur-md. One GSAP entrance on mount drops the top bar in from above and slides the floor list in from the right; nothing scrolls. The forbidden zone is dark: no purple, indigo, neon, or black backgrounds anywhere."
colors:
  bg-gradient: "linear-gradient(160deg, #4a86dd 0%, #7ba8e6 45%, #c3d7f0 100%) — html/body, visible before the video loads"
  sky-deep: "#3f7dd6 — theme token --color-sky-deep"
  sky-soft: "#b9d2ef — theme token --color-sky-soft"
  fg: "#ffffff — all UI text; dimmed states white/65 (inactive nav) and white/40 (inactive floor)"
  glass: "bg-white/30 → hover bg-white/45, always with backdrop-blur-md — the circular controls"
  text-shadow: "rgba(30,64,130,0.25) on the wordmark, rgba(30,64,130,0.35) on the active floor — a navy glow for legibility over the video"
  forbidden: "no purple, indigo, neon green, or any dark/black background anywhere"
typography:
  sans: { fontFamily: "'Manrope', ui-sans-serif, system-ui, sans-serif", weights: "400 / 500 / 600 / 700 / 800", role: "everything — wordmark extrabold 800 tracking-[0.08em], nav links semibold 600, floor buttons bold 700; tops out at 800, never synthesize heavier" }
spacing:
  header: "px-7 pt-7 → sm:px-10 pt-8; items-start justify-between"
  floor: "right-7 → sm:right-10, top-1/2 -translate-y-1/2; list gap-7, items-end"
  viewport: "h-dvh overflow-hidden — fixed full-viewport composition, never scrolls (h-dvh not h-screen so mobile chrome never clips)"
rounded:
  glass: "rounded-full — the three size-11 (44px) circular controls, thumb-sized at every breakpoint"
motion:
  entrance: "useLayoutEffect + gsap.context scoped to the root ref, reverted on unmount; two tweens, mount only, no scroll triggers"
  fade: "[data-fade] (top bar: nav + three glass buttons) → gsap.from y:-14, autoAlpha:0, duration 0.9, ease power3.out, stagger 0.08"
  fade-right: "[data-fade-right] (floor items) → gsap.from x:18, autoAlpha:0, duration 0.9, delay 0.35, ease power3.out, stagger 0.06"
  clearprops: "clearProps:'all' on both — content must never stay stuck hidden if JS pauses"
components:
  video-bg: "absolute inset-0 object-cover, autoPlay muted loop playsInline; 1920×1080 ~5s seamless isometric-apartment loop; NO overlay — UI reads directly on the video"
  glass-button: "GlassButton — size-11 rounded-full bg-white/30 backdrop-blur-md text-white hover:bg-white/45; children are inline 18×18 SVGs (dot / plus / kebab), currentColor"
  nav: "extrabold IHOUSE wordmark + four links (Home active white, rest white/65 → hover white); links hidden below md"
  floor-selector: "right-edge vertical list 2F/1F/B1 in React state (default 1F); active 19px white + navy glow, inactive 15px white/40 → hover white/70"
---

# Design System Inspired by ihouse

## Overview

ihouse inverts the usual hero: there is no headline, no CTA, no footer, no copy block at all. The **content is a looping video** — a sunlit isometric 3D cutaway of an apartment floor plan (living room, bedroom, kitchen) on a soft blue sky gradient — and the interface is just **three frosted-glass clusters floating over it**. A top bar carries the extrabold **IHOUSE** wordmark, four nav links, and three circular glass controls (record dot, add-device plus, kebab). A right-edge vertical selector switches floors: **2F / 1F / B1**. That is the entire page.

The world is deliberately **bright and sky-blue** — a `160deg` gradient from `#4a86dd` to `#c3d7f0` behind the video, white UI text throughout, and glass done purely with `bg-white/30 backdrop-blur-md`. Legibility over the moving video comes not from a scrim (there is none) but from a **navy-glow text-shadow** (`rgba(30,64,130,0.25–0.35)`) under the wordmark and the active floor. **The entire dark palette is forbidden** — no purple, indigo, neon, or black anywhere; this is the anti-dark-SaaS hero.

Type is **Manrope only**, 400 through 800: the wordmark is extrabold `800` with `0.08em` tracking, nav links semibold, floor buttons bold. Motion is a single **GSAP entrance on mount** — the top bar drops in from above (`y:-14`, stagger `0.08`), the floor list slides in from the right `0.35s` later (`x:18`, stagger `0.06`), both `power3.out` with `clearProps:'all'` so nothing can stay stuck hidden. There are **no scroll triggers**; the composition is a fixed `h-dvh` viewport that never scrolls.

**Key Characteristics:**
- **The scene is the content** — a full-bleed looping isometric-apartment video; UI floats directly on it with no overlay.
- **Three glass clusters, nothing else** — top-bar nav + three circular controls, right-edge floor selector. No headline, CTA, or footer.
- **Bright sky-blue, dark forbidden** — `#4a86dd → #c3d7f0` gradient, white text, glass; never purple/indigo/neon/black.
- **Glow, not scrim** — legibility from a navy `rgba(30,64,130,·)` text-shadow, not a darkening layer over the video.
- **Manrope 400–800** — one family; extrabold wordmark, semibold nav, bold floors; clamp to 800, never synthesize heavier.
- **Glass = bg-white/30 + backdrop-blur-md** — no `.liquid-glass` utility, no noise, no gradient-text; the treatment is inline Tailwind.
- **Mount-only GSAP** — top bar drops from above, floors slide from the right; `clearProps:'all'`; no scroll, `h-dvh` fixed viewport.

## Colors

- **Sky gradient** ({colors.bg-gradient}): the html/body background, visible before the video buffers; tokens {colors.sky-deep} / {colors.sky-soft} exist for accents but the UI reads white on video.
- **White ladder**: {colors.fg} — full white for the wordmark and active states, `white/65` for inactive nav links, `white/40` for inactive floors (→ `white/70` on hover).
- **Glass** ({colors.glass}) and **navy glow** ({colors.text-shadow}) are the only two "surface" treatments.
- **Forbidden** ({colors.forbidden}): if you re-skin, keep it bright — a dark background breaks the entire concept.

## Typography

- **Sans** ({typography.sans}): Manrope does everything. The wordmark's `800 / 0.08em` and the size jump on the active floor (19px vs 15px) carry all the hierarchy — there is no second family and no headline.

## Layout

- **Fixed viewport** ({spacing.viewport}): `h-dvh overflow-hidden`, never scrolls; `h-dvh` (not `h-screen`) so mobile browser chrome never clips.
- **Three anchors**: header top ({spacing.header}), floor selector right-edge vertically centered ({spacing.floor}). The video fills everything behind.

## Elevation & Depth

Depth is the isometric scene itself plus the frosted glass (`backdrop-blur-md`) and the navy text-glow. No drop shadows, no cards, no `.liquid-glass` utility — the glass is inline `bg-white/30 backdrop-blur-md rounded-full`.

## Components

### Background video
{components.video-bg}.

### GlassButton
{components.glass-button}. Exactly three exist (record / add / more); the SVGs are inline `18×18`, `currentColor`, stroke width `1.8` — no icon library.

### Nav + floor selector
{components.nav}. {components.floor-selector}.

## Motion

{motion.entrance}. {motion.fade}. {motion.fade-right}. {motion.clearprops}. There is nothing else — no hover-parallax, no scroll, no continuous loops besides the video itself.

## Do's and Don'ts

### Do
- Keep it bright — sky gradient, white UI, glass; the navy shadow is only a text-glow for legibility.
- Keep Manrope-only, extrabold `800 / 0.08em` wordmark, and the 44px `size-11` glass buttons.
- Keep the mount-only GSAP with `clearProps:'all'` so content never stays hidden.
- Keep the three inline SVGs (dot / plus / kebab) exactly — 18×18, currentColor, stroke 1.8.

### Don't
- Don't add a dark/black background, purple, indigo, or neon — the whole palette is forbidden.
- Don't add a headline, CTA, footer, or bottom-corner button — the scene is the content.
- Don't put a scrim over the video or add scroll triggers — legibility is the text-glow, motion is the entrance only.
- Don't add `.liquid-glass`, noise overlays, gradient-text utilities, or an icon library.

## Responsive

- Mobile-first; nav links hidden below `md` (`hidden md:flex`), wordmark drops from 30px to 26px, paddings from `px-10 pt-8` to `px-7 pt-7` / `right-10` to `right-7`.
- Glass buttons stay `size-11` (44px) at every breakpoint — thumb-sized tap targets.
- `h-dvh overflow-hidden` keeps the composition full-viewport on mobile without chrome clipping.

## Iteration Guide

To re-skin for another spatial/dashboard product: swap the isometric loop (keep a bright, sunlit, non-dark scene), keep the three-cluster layout, and rename the wordmark, nav links, and floor labels in the `NAV_LINKS` / `FLOORS` arrays. Leave the sky gradient, Manrope-only rule, glass treatment, navy text-glow, and mount-only GSAP untouched — they are the system.

## Known Gaps

- All links (`href="#"`) go nowhere; the floor selector updates React state but drives no real data — the scene doesn't actually change floors.
- The video downloads from the asset CDN; the navy text-glow values are tuned to the shipped sky-blue apartment loop — a different scene may need different shadow alphas.
- There is no reduced-motion guard on the entrance (it is mount-only and short); the looping video always autoplays.
- It is a hero front only — no second section, no backend, nothing to verify beyond the single viewport.
