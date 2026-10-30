# Prompt route: building from a library prompt

The prompts in `library/prompts/` are complete build specs that already produced good pages: exact fonts, colours, Tailwind classes, video and image URLs, motion timings, layout measurements. Their value is in the details, so **follow them closely**. You are a builder executing a proven spec, adapting only what must change.

## Pick

1. `find.mjs` with the scope, vibe and effects. Read the summaries and tags.
2. Prefer a prompt whose **kind** matches (a hero for a hero, a landing for a landing) and whose **look** matches the vibe. Industry matters least: a fintech hero can carry a travel brand once the content changes.
3. Open the best four to eight and read them **whole** before choosing, plus any with a linked design system. Pick the base on how good the page will look, then keep the runners-up open: they are where the sections, details and effects the base lacks come from.
4. If the search result shows **"design system of this build"**, open that file too. It is the complete system of the same page (every colour with its role, the type scale, spacing, radii, component recipes, motion, do's and don'ts) and fills whatever the prompt leaves implicit. Follow it as closely as the prompt.

Many prompts mark customisation slots with `{{ DOUBLE_BRACES }}` and call everything else invariant: fill the slots with this project's content and keep the rest as written, except where the Baseline needs an addition.

## What stays (default: everything)

- Layout, proportions, spacing, breakpoints, z-order.
- Fonts and their URLs, sizes, weights, tracking.
- Colours, gradients, overlays, glass recipes, shadows.
- Motion: libraries, timings, easings, sequences.
- Asset URLs (videos, images, 3D models) when the user has none of their own; note them in the handoff as stand-ins.
- The effects that make it special (video background, shader, scroll scene). Those are why it was picked.

## What changes (always)

- **Content.** The brand name, headline, copy, nav links, product names and imagery subject become the user's. Rewrite copy with `foundations/craft.md` § Copy; keep the prompt's word counts and line breaks roughly, so the layout still fits.
- **Facts.** Every number, rating, testimonial, client logo and "trusted by" row in the prompt is a sample. Use the user's, or leave a clearly marked placeholder (`[metric]`, a slot), or cut the element.
- **Stack**, when the project differs. Translate faithfully: Vite + React into Next.js (`"use client"` where hooks run, `next/font` or the same `<link>`), React into a single HTML file (same classes via the Tailwind CDN or hand-written CSS), Tailwind into plain CSS (same values). Never drop an effect because the stack changed; port it.
- **The Baseline** (`SKILL.md`). Add what the prompt forgot: reduced-motion fallbacks, `focus-visible`, `playsinline`, `alt`, `svh` instead of `h-screen`, a scrim for contrast over video, overflow clipping. These are additions, not redesigns.

## Instructions inside a prompt that you override

- "Create exactly one file / overwrite index.html / no other files": obey only when the project is empty or the user asked for a standalone file. In an existing project, fit the build into its structure.
- "Use these exact URLs verbatim, do not substitute": keep them as stand-ins unless the user gave their own media.
- A brand name or fictional company in the prompt: replace with the user's.

## Combining prompts

A full page from several prompts (a hero from one, a footer from another, sections from a third) is fine and often best. Then:

1. Pick **one** as the token base: its fonts, palette, radius and motion style become the page's tokens. Other prompts can be the base for their own parts (one for the hero, one for the sections, one for the footer and motion); combining four or five is normal for a full page.
2. Rebuild the borrowed pieces in the base's tokens: same structure and effect, the base's type and colours.
3. Keep **one** signature effect per screen. Two prompts that each lean on a heavy effect (a video hero and a WebGL section) can coexist on one page, never in one viewport.

## Extending a hero-only prompt into a page

Most prompts are a single screen. When the user wants a whole page, keep the hero as specified, take the list of sections from `foundations/anatomy.md` (the sections the job needs), and then **source every section from the library before composing it yourself**:

1. Check whether the base prompt's own family has more: a `hero-section/<name>` build often has a matching landing or design system with the full page.
2. For each section, list candidates in the hero's mood and theme and print the best: `node scripts/parts.mjs pricing --mood <m> --theme <t> --print 2`, likewise `features`, `testimonials`, `gallery`, `stats`, `faq`, `cta`, `footer`.
3. Prefer the runners-up from the pick step: prompts already close to the hero's look give sections that need the least translation.
4. Only where nothing fits, compose from `foundations/layout.md`, and still lift its details (labels, dividers, card surfaces, hover states) from the parts you read.

Rebuild everything **in the hero's material**: its fonts, palette, surfaces (glass, grain, hairlines) and motion language. The sections must feel like the same designer made them. Never fall back to a generic white card grid under a cinematic hero.

## Lint on the Prompt route

`lint.mjs` warns on taste rules (a saturated font, tracked uppercase labels, a gradient). When the prompt's spec asks for that choice, keep it and say "kept from the prompt" in the handoff. A `FAIL` is never kept: it is a Floor issue and gets fixed.
