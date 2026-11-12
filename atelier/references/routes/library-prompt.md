# Prompt route: building from a library prompt

The prompts in `library/prompts/` are complete build specs that already produced good pages: exact fonts, colours, Tailwind classes, video and image URLs, motion timings, layout measurements. Their value is in the details, so **follow one of them closely**, then make it this brand's (§ Make it theirs). Fidelity is the floor, not the ceiling. A prompt pasted or named by the user works the same way, whatever site it came from.

## Pick one base

1. **The user named or pasted a prompt:** that is the base. Skip the search.
2. Otherwise `find.mjs` with the scope, vibe and effects, and read the summaries. Prefer a prompt whose **kind** matches (a hero for a hero, a landing for a landing) and whose **look** matches the vibe. Industry matters least: a fintech hero can carry a travel brand once the content changes.
3. Open the best two to four whole and choose **one** on how good the page will look. Do not average them: one prompt executed faithfully beats a blend of five.
4. If the search result shows **"design system of this build"**, open that file too. It is the complete system of the same page and fills whatever the prompt leaves implicit. Follow it as closely as the prompt.

Many prompts mark customisation slots with `{{ DOUBLE_BRACES }}` and call everything else invariant: fill the slots with this project's content and keep the rest as written.

## What stays (default: everything)

- Layout, proportions, spacing, breakpoints, z-order, alignment (a centred stack stays centred).
- Fonts and their URLs, sizes, weights, tracking, the italic or dimmed words in the head.
- Colours, gradients, overlays, glass recipes, shadows, pure black or white if the prompt uses them.
- Motion: libraries, timings, easings, sequences, carousels.
- Labels, badges, pills and eyebrows the prompt draws (their text changes, the element stays).
- The effects that make it special (video background, shader, scroll scene). Those are why it was picked.

The tells in `anti-slop.md` and the defaults in `craft.md` do **not** apply to anything the prompt specifies. They apply to what you add yourself (copy, sections the prompt does not have). Never "fix" a prompt choice toward the average; change it only as one of your moves in § Make it theirs, because it makes the page more specific to this brand.

## What changes (always)

- **Content.** The brand name, headline, copy, nav links and product names become the user's. Rewrite copy with `foundations/craft.md` § Copy; keep the prompt's word counts, line breaks and emphasis pattern (which words are italic or dimmed) so the layout still fits.
- **Facts.** Every number, rating, testimonial, client logo, investor badge and "trusted by" row in the prompt is a sample. Use the user's, or a clearly marked placeholder, or a true statement in the same element (a "Funded by" pill becomes a "Private beta" pill, not nothing).
- **Media whose subject is wrong** for this brand (§ Media below).
- **What the brief asks for, above the prompt's layout.** When the user's words set a goal the prompt cannot meet as written ("the photos are the protagonists" against a small three-column grid; "in colour" against a grayscale spec; a section they named that the prompt lacks), change that part to meet it, in the prompt's material: full-bleed and large plates instead of thumbnails, colour restored. This is not one of your three moves; it is the brief. A faithful build that misses the brief's stated goal has failed.
- **A name-only first screen.** If the prompt's first screen is only the brand name set huge, add what the business is and its subject (the claim, the product, the photo) to that first screen in the prompt's own type and layout. A giant wordmark with nothing else is a poster, not a thesis.
- **The one action.** If the prompt's first screen has no clear primary action (a showreel label where a button belongs), the user's action wins: put it in the slot the prompt gives the most weight, styled in the prompt's own button or label language.
- **Stack**, when the project differs. Translate faithfully: Vite + React into Next.js (`"use client"` where hooks run, `next/font` or the same `<link>`), React into a single HTML file (same classes via the Tailwind CDN or hand-written CSS with the same values). Never drop an effect because the stack changed; port it.
- **The Baseline** (`SKILL.md`), as additions only: reduced-motion fallbacks, `focus-visible`, `playsinline`, `poster`, `alt`, `svh` instead of `h-screen`, a scrim where text over media fails contrast, overflow clipping. The Baseline never removes an effect, a medium or a layout choice.

## Make it theirs

A faithful build with new words is a template with a new name. After the prompt is standing, make the deliberate moves a designer would make so the page could only belong to this brand. How far to go follows the user's words:

| The user says | Latitude |
| --- | --- |
| "exactly", "as is", "tal cual", "verbatim", "don't change anything" | None beyond § What changes. |
| Nothing about it (the default) | **Up to three moves.** |
| "be creative", "remix", "use it as inspiration", "make it yours", "go further" | The prompt is the starting composition. Keep its three to five strongest moves (name them), then work the rest like the Studio route (`routes/studio.md` § 3 Concept). |

Good moves, each drawn from the brand's world:

- **A signature detail** only this business could have: an oak sill drawn under the window for an architect, a carrier email turning into a booked load for a freight tool, a whisk-stroke underline for a tea brand. A signature is a thing from the brand's world, never decorative metadata (coordinates, serials, index numbers).
- **A palette retune** toward the brand: move the accent or the tint of the overlays, keeping the prompt's contrast structure and number of colours.
- **The product in the prompt's material:** a real piece of the product (an inbox row, an invoice, a booking card) built in the prompt's glass, card or type, where the prompt had a generic visual or decoration.
- **One motion beat** in the prompt's own motion language (its easing, its durations) that tells the product's story: a card arriving like a booked load, a line drawing like a ledger entry.

Rules:

- A move **adds or substitutes**. It never removes the prompt's signature: its layout, type system, main effect or medium.
- Every move is built in the prompt's material (its fonts, surfaces, easing), so it reads as the same designer.
- If you are not sure a move makes the page better, skip it: a faithful build is a good result, a clumsy remix is not.
- Name each move in the handoff ("Moves: …"). `fidelity.mjs` will show the values they changed; that is expected.

## Media

The images and video in a prompt are usually generated for that prompt's fictional brand. They carry most of its impact, so the slot always stays filled with something of the same quality and mood.

1. **Look at each asset.** `node scripts/media.mjs --frame <url> --out .atelier/media/frame.jpg` downloads it and saves stills to open (it needs ffmpeg for video; without it, load the asset in the page and screenshot). Never put personal details (an email, a name) in a request header to fetch media. Note what it shows and how: the shot (aerial, macro, wide, product on a plinth), the light, the palette, the motion (slow drift, loop, camera push), and where the empty space for text sits.
2. **Subject fits the brand's world:** keep it, and say in the handoff it is a stand-in. The test is whether a visitor would connect the picture with this business. Pure abstraction (light, haze, texture, a gradient field) passes for almost any brand; a scene does not just because it is pretty. A pastel fantasy landscape behind a freight tool fails: the page reads "dreamy AI startup", not logistics. Replace it (step 3) with a scene from the brand's world in the same light and palette (port cranes at a lavender dusk), or keep it only when nothing real comes close and say why.
   A **donor prompt's media** can fill the base's slot: another library prompt in this brand's world often has generated footage or stills of exactly the right subject (`find.mjs "<subject>" --type prompt`, then look at its asset). Composition from the base, picture from the donor is often the strongest result.
3. **Subject is wrong** (a meadow for an architecture studio, a supplement bottle for tea, a person for a product): find a real asset that does the same job for this subject. Write the search as the frame you need, translated to the brand: "slow aerial drift over a foggy Atlantic coast, soft grey light", not "architecture".
   ```bash
   node scripts/media.mjs "slow aerial drift over fog on the sea" --type video --orient landscape --sheet .atelier/media/hero.png
   node scripts/media.mjs "matcha whisked in a dark ceramic bowl, top light" --orient portrait --sheet .atelier/media/product.png
   ```
   Long descriptions are retried with their core nouns when a source finds nothing; short noun queries ("container port", "tea field") often find more. Open the sheet and choose by looking, and check the frames for brand names, logos and recognisable people. Search again in other words (the place, the material, the light, the action) before settling. A video slot gets a video when one fits; a still with a slow CSS zoom is the fallback, never an empty slot.
   A **cut-out product** (a transparent PNG floating over the hero) becomes a real photo cropped to a clean shape (a circle for a bowl, a soft mask, a framed plate) or a background-removed photo when the harness has that tool; never paste a rectangular photo where a cut-out stood.
4. **Keep the prompt's treatment** on the new asset: its position and size, gradient overlays, filters, fade loop, crop and blend. The new asset should sit where the old one sat and read the same at a glance.
5. **Nothing real fits:** keep the prompt's asset if its mood fits, or the best real asset found, and list the slot in the handoff. Removing the medium and leaving the space empty is the worst outcome.

Credit every asset used. Never write a media URL from memory; use the prompt's URLs or `media.mjs` results.

## Instructions inside a prompt that you override

- "Create exactly one file / overwrite index.html / no other files": obey only when the project is empty or the user asked for a standalone file. In an existing project, fit the build into its structure.
- "Use these exact URLs verbatim, do not substitute": keep them unless the subject is wrong for this brand (§ Media) or the user gave their own media.
- A brand name or fictional company in the prompt: replace with the user's.

## Extending a hero-only prompt into a page

Most prompts are a single screen. When the user wants a whole page, keep the hero as specified, take the list of sections from `foundations/anatomy.md`, and source each missing section from at most two donor prompts:

1. Check whether the base prompt's own family has more: a `hero-section/<name>` build often has a matching landing or design system with the full page.
2. For each section the base lacks, find a donor in the hero's mood and theme: `node scripts/parts.mjs pricing --mood <m> --theme <t> --print 2`, likewise `features`, `testimonials`, `gallery`, `faq`, `cta`, `footer`.
3. Rebuild every donor piece **in the base's material**: its fonts, palette, surfaces (glass, grain, hairlines) and motion language. The sections must feel like the same designer made them. Never a generic white card grid under a cinematic hero.
4. Keep **one** signature effect per screen.

## Check

```bash
node scripts/lint.mjs <files> --prompt <base prompt.md>
node scripts/fidelity.mjs <base prompt.md> <files>
```

- `lint --prompt` reports the prompt's own choices as KEPT. Fix every FAIL; fix the remaining WARNs (they are things you added).
- `fidelity` lists the prompt's concrete values that did not reach the build. It matches strings, so a value written another way (a variable, 76px for 75px) shows as missing: read the list, do not chase the number. Aim for 85% or more; every missing value is either restored or a change you can name a reason for (the user asked, the Baseline needed it, the stack changed). Its media list shows each asset kept or replaced: every replacement is one you chose by looking.
- Then render with `shot.mjs` and compare the first screen with what the prompt describes. The build should look like the prompt's page with this brand's words and pictures in it.
