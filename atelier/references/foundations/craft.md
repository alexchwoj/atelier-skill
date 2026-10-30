# Craft

Type, colour, surfaces, motion and copy, as numbers wherever a number exists. On the Prompt route the prompt's own values win where it states them; these fill everything it leaves open.

## 1. Type

- **Families:** two at most, a display face and a body face (one family may do both). A third only as an **outlier** with exactly one role (the wordmark, code, a headline figure).
- **Weights:** three at most across the page, picked as extremes (300 beside 700, 400 beside 800), not 400/500/600.
- **Scale:** a 1.25 ratio from a 16px body. Hero head about 1.5 times the section head; section head about twice the item title. Hierarchy past that comes from weight and colour.
- **Display:** tracking -0.02 to -0.04em on regular-width faces, 0 to -0.015em on condensed or heavy ones; line-height 1.0 to 1.15, tighter as it grows (1.2 on a big head reads as inherited). An uppercase head that can wrap never goes under 1.0. A head is one weight, one style, one colour: no single italic or coloured word; stress comes from a line break or a second line at a second size.
- **Display size:** about 84px at 1440 for a 21 to 50 character head; poster heads `clamp(4rem, 10vw, 9rem)` held at 1920; 51 to 90 characters step down to about 60px; over 90, rewrite.
- **Measure:** heads in `ch` (`h1` ≈ 20ch, `h2` ≈ 30ch); `text-wrap: balance` on heads, `pretty` on body. Body 16px minimum, line-height 1.5 to 1.65, 45 to 75ch, never justified without hyphens, never all caps. Wider lines want more leading; light text on a dark ground wants a touch more leading, tracking and weight than the same text on paper.
- **Line breaks:** break a head by hand only between phrases, and check the break at every width; a hard break that lands mid-line on a phone is worse than the default wrap. Paragraph rhythm is spacing *or* a first-line indent, never both.
- **Labels, captions, table heads, tags, nav links:** the body face a step smaller, sentence case, untracked. Mono only for code, figures and measurements, or when mono is the whole look.
- **Required:** `font-display: swap`; a fallback of the same build (grotesk to `system-ui`, serif to Georgia); `font-synthesis: none`; load only the weights used; `tabular-nums` on figures that compare; curly quotes, a true ellipsis `…`, non-breaking spaces inside unit pairs (`10 MB`).

## 2. Colour

- **OKLCH everywhere** for new palettes.
- **Four layers.** *Paper* (light: L 92 to 98, chroma 0.005 to 0.015 toward the anchor hue; dark: L 12 to 18). *Ink* (on light L 16 to 24, on dark L 88 to 96, slightly tinted). *Five to nine neutrals* between them, all tinted toward the anchor hue. *One accent* at chroma 0.12 to 0.22 with a paired `--color-accent-ink` for text on it. A focus colour on the accent's hue.
- **Never pure `#000` or `#fff`** as a surface on a page with a hue; tint them.
- **Dosage,** decided before any colour is picked (`scripts/palette.mjs --dosage`): **Accent** (the accent stays under ~5% of any screen: the primary button, active nav, focus ring, a link hover, the one chart series), **Field** (one colour owns 30 to 60% of the page in whole regions; the accent stays a signal), **Ensemble** (three or four named colours, each with a job and a footprint), **Flood** (the surface is the colour; ink and rules derive from it). Selling and showing pages may take the bolder dosages; working and reading screens usually stay at Accent. Colour commits at page scale: whole regions, not accents sprinkled over a neutral ground.
- **Light or dark** is never a default and never picked by category. Write one sentence of the physical scene (who uses this, where, under what light) and let it decide: a recipe app read at a counter in daylight is light; a set-list tool used backstage is dark.
- **Contrast:** body 4.5:1 (aim for 7:1), large text, icons, focus rings and field edges 3:1. A dark band swaps its text colour in the same rule. Never grey text on a coloured surface.
- **Bans:** gradients past three stops; purple-blue, purple-pink or cyan-on-dark gradients; glow shadows, chromatic halos, floating blurred orbs behind text; alpha as a colour's definition (alpha is for overlays and shadows); Tailwind's default indigo/violet/slate as the brand palette; red and green as the only signal.
- **Dark mode** is derived (lightness steps, re-checked contrast), never inverted.

## 3. Surfaces

- **A primary axis:** left-biased, right-biased, top-heavy or bottom-weighted. Everything centred is a default, not a choice.
- **Spacing scale:** 2 · 4 · 8 · 12 · 16 · 24 · 40 · 64 · 96 · 144 px as tokens (`--space-3xs` to `--space-4xl`). Raw lengths only as rare optical nudges. `gap` for siblings, `margin` only to break flow.
- **Grids:** CSS Grid for the page, Flexbox inside components; flex children that shrink take `min-width: 0`, icons `flex-shrink: 0`. No orphan on a grid's last row: change the count.
- **Containment steps,** lightest first: whitespace, then a hairline (1px rule colour), then a tinted well (no border), then a card (border *or* shadow, never both) kept for things that are independently interactive. Never a card inside a card, never white cards on a tinted page by reflex. Use different steps at different seams.
- **Depth is weight and scale.** One shadow recipe at most, soft and low (`0 1px 2px oklch(20% 0.01 <hue> / 0.06)`). Elevated surfaces are never darker than their canvas in light mode.
- **Radii:** one per nesting level, concentric (`inner = outer - padding`). One pill radius for controls and tags, not for every box.
- **z-index scale:** base 1, raised 10, dropdown 100, sticky 200, nav 300, modal 400, toast 500, tooltip 600.

## 4. Motion

The summary; the full system (gate, tokens, springs, recipes, gestures, scroll, performance, accessibility) is in `references/motion/`.

- **What moves:** only `transform` and `opacity` (filter, clip-path, mask when smooth). Never `transition: all`.
- **Easings:** `--ease-out` `cubic-bezier(0.23, 1, 0.32, 1)` for entrances and UI exits, `--ease-in-out` `cubic-bezier(0.77, 0, 0.175, 1)` for movement on screen, `--ease-drawer` `cubic-bezier(0.32, 0.72, 0, 1)` for sheets; never the browser's `ease` for movement, `linear` only for progress and scrubbing, no bounce on UI state. Springs for anything the user drags (`motion/principles.md` § 2).
- **Durations:** press 150ms, tooltip 150ms, menu 200ms, modal 250ms, drawer 450ms, marketing reveal 700ms; exits at 60 to 75% of the entrance; stagger 30 to 80ms; UI under 300ms. Actions used 100+ times a day do not animate at all.
- **The hero entrance:** one settle of 0.4 to 0.8s including stagger, from an already-visible state; a fade with an 8 to 16px rise is one motion. Never fade + sweep + scale on one element.
- **One reveal language per page,** visible without JS, collapsed under reduced motion (`foundations/patterns.md` § Reveal).
- **Hover** is one signal that raises contrast: a colour step, or a 1 to 2px lift on a control. On a card, the container reacts, not the image. Non-interactive things never react.
- **Loops:** anything moving past 5 seconds (marquee, ambient loop, looping video) pauses on hover and focus, stops off-screen, stops under reduced motion and has a visible pause control.
- **Never by default:** parallax on everything, custom cursors, cursor followers, scroll-jacking, pulsing dots, auto-rotating carousels without pause. A library prompt that specifies one of these is followed, with the Baseline's fallbacks.

## 5. Copy

Write as the owner would say it across a counter: the prompt's own nouns, a real place, a number the user gave, the verb a customer would use.

- **The swap test:** a head that would work on a competitor's page is rewritten. *Software that works for you* fits anyone; *Invoices that chase themselves* fits one product.
- **Three tests a line:** can the reader picture it, could it be proven false, could only this business say it.
- **Budget:** hero head seven words or fewer; one subhead of twelve words or fewer saying what it is, for whom and the one difference; section heads six words or fewer saying what the visitor will see (*Three loaves a morning*), never a category label (*Features*, *Why us*); paragraphs two short sentences; lists of four; about 80 words per screen; 450 visible words for a landing page.
- **Refuse the generated voice:** seamless, robust, empower, supercharge, elevate, effortless, unlock, unleash, revolutionize, next-generation, world-class, cutting-edge, game-changer, journey, "Reimagine", "Whether you're X or Y", "It's not just X, it's Y", "Say goodbye to", "Built for the modern team", "In today's fast-paced world", triads of adjectives (*fast, simple, powerful*), the rebuttal cadence ("Not a tool. A platform."), placeholder names (Jane Doe, Acme), em dashes as punctuation.
- **Buttons:** the verb of the action (*Book a fitting*, *Start your first invoice*); never a stock second action (*Learn more*, *Get started* beside the primary). **Errors:** what happened and what to do; no *Oops*. **Empty states:** what is empty, why it matters, one action.
- **Punctuation:** curly quotes, `…`, a full stop on standalone sentences, none on list items; no arrows glued to link text, no middle-dot meta strings.

## 6. Opening a section

The reflex is a small tracked-caps label above the heading (the "eyebrow"), and it is the most common tell. Ask what the reader does not yet know. If nothing, open with nothing. Better ways in:

1. Nothing: air above, the heading flush.
2. A heading that names its subject in its first two words (usually best).
3. A lead-in inside the paragraph in a heavier weight.
4. A rule that does more than divide: a hairline, a double rule, a colour edge, a change of paper.
5. A numeral at graphic scale, only when the number is real and is the point.
6. A real `<ol>` when the sequence is genuine.
7. A caption below the content instead of a label above.
8. Persistence: the heading stays sticky while its content scrolls.

Small type above a heading survives only when it carries a fact (a date, a byline, a real filename, a live status), never a name for what comes next.

## 7. Missing facts

- A missing fact (price, date, address) is a visible placeholder, never an invented value: `<span class="fill" data-fill="price">Price to confirm</span>` in a muted colour with a dashed outline. Two per page at most; the rest go in the handoff.
- A missing image is a slot with a stand-in (the prompt's asset URL, or a free photo from Unsplash/Pexels/Wikimedia with credit), never an empty gradient box.
- A link without a URL points at the page section that does most of it (`#pricing`).
- A form without an endpoint validates, posts nowhere, and says plainly that nothing was sent.

## 8. Finish

- **Controls:** one filled primary style per page; secondaries outlined or typographic. Marketing controls 44 to 52px tall, app UI 32 to 40px with 44px hit targets; two button sizes at most; an input matches the height of the button beside it. All states: default, hover, focus-visible, active, disabled, loading.
- **Inputs:** constant border width across states; focus ring as `outline`; disabled by opacity + `cursor: not-allowed` + the native attribute; 16px text on mobile; `name`, `autocomplete`, `type`, a `<label>`; a reserved line for helper and error text.
- **Pricing:** emphasise a tier with its button and a word, not a different card colour; buttons aligned at the bottom across tiers.
- **Tables:** sentence-case heads that never wrap, horizontal rules only, tabular numerals; on phones, restack rows or pin the first column.
- **Nav:** one line, 56 to 80px; text links in one weight; under ~960px, links that no longer fit go behind a menu; the logo links home with an `aria-label`.
- **Browser surfaces** on a committed palette: `::selection`, `caret-color`, `scrollbar-color`, `accent-color`.
- **Document:** `lang`, a `<title>` in the page's own words, a meta description, heading levels in order, `width`/`height` on every image.
