# Anti-slop

The tells that make a page read as generated, and the fix for each. **Baseline** items are never acceptable (they are also in `SKILL.md`). Everything else is a **tell**: a reflex worth questioning, not a ban. Use one when it is the best choice for this page (the brief or a library prompt asks for it, or it simply looks better here) and do it well; avoid it when it is there by habit. Never replace a tell with something that looks worse: the goal is a better page, not a page that avoids a list. `scripts/lint.mjs` catches the ones marked *(lint)*.

## Colour and surface

| Tell | Fix |
| --- | --- |
| Purple-to-blue, purple-to-pink or cyan-on-dark gradient, gradient text included *(lint)* | one anchor hue, solid ink |
| Pure `#000`/`#fff` surfaces and zero-chroma greys on a page with a hue | tint toward the anchor hue |
| Tailwind's stock indigo/violet/slate as the brand palette *(lint)* | a colour mixed for the page in OKLCH |
| Accent everywhere (buttons, icons, borders, heads) | a signal under ~5% of the screen, or a declared Field dosage |
| Floating blurred orbs, aurora blobs, chromatic glow shadows behind text | a solid or grained surface; depth from lightness steps |
| Glass and backdrop blur as decoration rather than a specific effect | a solid surface; glass only where something real sits behind it |
| A coloured `border-left` thicker than 1px on cards, list items, alerts | a hairline, a tinted well, or an icon with a word |
| Hard offset block shadows (`4px 4px 0`) on a page that is not actually neobrutalist | depth from lightness and soft offset shadows, or none |
| Light or dark picked by category (dark for dev tools, light for health) | pick it from the physical scene of use |
| Cream paper + high-contrast serif + terracotta accent applied by reflex, with nothing specific to the product | keep it if it is right, and make it specific: a real photo, a detail from the product's world, a precise accent |
| Card inside a card; white cards on a tinted page; border and big shadow on one box | one containment layer; use the containment steps (`foundations/craft.md` § 3) |

## Type

| Tell | Fix |
| --- | --- |
| Inter, Roboto, Poppins, Open Sans, Montserrat, system-ui as the display face *(lint)* | a face from `studio/type.md` |
| The eyebrow: small uppercase tracked label above a heading (`FEATURES`, `HOW IT WORKS`, `TRUSTED BY`) *(lint)* | open the section another way (`foundations/craft.md` § 6) |
| Tracked caps on labels, tags, nav links, table heads *(lint)* | body face, a step smaller, sentence case, untracked |
| One word in a heading set in italic, colour, gradient or a highlight | the whole head one way; a line break; a second line at a second size |
| Mono as costume on labels and meta | the body face; mono only for code and figures |
| A system display face (Impact, Arial Black, the platform sans) as the voice of an own-brand page | a sourced face whose character matches the concept (`studio/type.md`) |
| More than three families, or four+ weights | display, body, one outlier; weights as extremes |
| Section heads at 28 to 36px under an 84px hero | 44 to 56px |

## Structure

| Tell | Fix |
| --- | --- |
| The AI template: hero, three feature cards, CTA band, footer | build from `foundations/anatomy.md` for the job |
| Three equal columns of icon-in-rounded-tile + heading + line | vary widths and heights; inline icons; a real visual per item; rows or a bento |
| The hero-metric template: a big number, a small label, supporting stats, an accent | a real figure only when the page is built around it, with its unit and source |
| Section numbers (01 / 02 / 03) as decoration | only when the sequence is information the reader needs, as a real `<ol>` |
| A modal for a task that needs neither interruption nor protected focus | inline editing, a disclosure, or a new page |
| Sparklines, progress rings and soft rounded rectangles standing in for content | the real content, or nothing |
| Every section separated the same way with the same gap | different seams: whitespace, hairline, change of paper |
| Everything centred | a primary axis; at most two centred elements in the hero |
| Hero sized with `h-screen`/`100vh` *(lint)* | `min-h-[100svh]` / `100svh` |
| A narrow text column with the right half empty; sections that are just a head and a paragraph | wider body, a visual, a statement, or merge sections |
| A zigzag of five image/text splits | three to six different compositions |
| The stock close: an email sign-up band before the footer on a page that is not a newsletter | end on the job's own action |
| Four link columns + social icons + copyright as the footer by reflex | a statement, colophon, letter close or contact-card footer |
| The same section skeleton all the way down: big head on the left, small paragraph on the right, content below | vary how each section opens (`layout.md` § 4); deal it with `scripts/compose.mjs` |
| FAQ as a sticky head on the left with an accordion on the right | rows, a conversational Q&A, a two-column index, a search-first list |
| Three equal pricing cards in a row by reflex | a table, a switcher, an offer, rows, a calculator, uneven tiers |
| Founders as a photo on one side and text on the other | a letter, a statement with names, an index of people, a caption under a work photo |
| The wordmark set edge to edge as the footer | it was distinctive once; now it is the template's close. Another footer from `layout.md` § 7 |
| Every page this skill builds sharing one structure | `compose.mjs` keeps a history and deals away from recent structures |

## Copy and chrome

| Tell | Fix |
| --- | --- |
| Buzzwords: seamless, robust, empower, supercharge, elevate, effortless, unlock, unleash, revolutionize, next-gen, world-class, cutting-edge *(lint)* | say what it does, in its own nouns |
| "Built for the modern team", "Whether you're X or Y", "Not just X, it's Y", "Say goodbye to" *(lint)* | a specific line only this product could say |
| Triads of adjectives; "Fast. Simple. Powerful." | one concrete claim |
| Em dashes as punctuation *(lint)* | comma, colon, full stop or parentheses |
| Placeholder names: Jane Doe, John Smith, Acme, Lorem ipsum *(lint)* | the user's names or a marked placeholder |
| `Learn more →`, arrows glued to link text; `A · B · C` meta strings; decorative status dots *(lint)* | a verb as the label; line breaks, columns, hairlines |
| Stock second action beside the primary (*Learn more*, *Get started*, *Book a demo*) | one primary; a second action that goes somewhere specific |
| Invented stats, testimonials, star ratings, logo walls (`10k+ users`, `99.9% uptime`, `Trusted by 500+ teams`) *(lint)* | the user's facts, a marked placeholder, or nothing (Baseline) |
| Decoration text: scroll cues, rotated vertical labels, `v2.0`/`BETA` pills, mono strips under the hero, `01 / 04` counters on tiles | delete; a real fact becomes a caption |
| A form that prints "Thanks, you're on the list!" with no backend | no success state until wired; say nothing was sent (Baseline) |

## Imagery

| Tell | Fix |
| --- | --- |
| Emoji as icons *(lint)* | lucide or real SVG (Baseline) |
| Hand-drawn browser chrome (traffic lights, URL pill) or fake OS window | a real screenshot in a `<figure>`, or no chrome |
| A fake dashboard of styled divs with invented numbers as the hero "product shot" | a real capture; or a built sample clearly showing sample data |
| Inline SVG illustrations of objects, people, plants as filler | a photograph, the product, or type at scale |
| Empty gradient boxes where images should be | a real image or a credited free photo |
| A row of 24+ identical dots/ticks standing for a quantity | set the number in type |
| A circle, polygon or many-point `clip-path` faking a photo subject's outline | a real cut-out asset, or the uncropped photo |
| A wall of stock photos | keep the strongest few, large; build the rest from type and the product |

## Motion and interaction

| Tell | Fix |
| --- | --- |
| `transition: all` / `transition-all` *(lint)* | list the properties (Baseline) |
| The same hover lift and scale on every card; images zooming on hover | one signal per element, on the container |
| Bounce/overshoot on UI state | exponential ease-out |
| Everything fades up on scroll, element by element | one reveal language, once, visible without JS |
| Custom cursor, cursor follower, mouse parallax, starfield | remove unless the brief is about exactly that |
| Marquee or carousel that never pauses *(lint: no reduced-motion)* | pause on hover/focus, a pause control, reduced-motion fallback |
| Focus ring that fades in or is missing *(lint)* | instant `:focus-visible` (Baseline) |

## Before handing back

Answer each with a look, not a guess:

1. Does the first screen at 1280 x 800 show the headline, one sentence and the primary action?
2. Read only the headings: do they tell this product's story, and would they fail on a competitor's page?
3. Is there one idea per screen, and is something on every screen big enough to be its reason?
4. Is any number, quote, logo or rating on the page one the user did not give? (If so, mark or remove it.)
5. Do any two neighbouring sections share a skeleton?
6. At 375 wide: horizontal scroll, overlaps, text under 16px, tap targets under 44px?
7. Tab through it: is focus always visible?
8. With reduced motion on and JS off, is all content visible?
9. Count the eyebrows, gradients, glows, emoji and buzzwords: is the answer zero, or each one deliberate?
10. Would a designer believe a person made this?
