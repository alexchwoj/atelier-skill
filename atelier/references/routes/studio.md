# Studio route

The free-thinking route. The user gives an idea ("a booking app for climbing gyms", "my ceramics studio", "a newsletter about city trees") and you act as the whole studio: strategy, concept, name if needed, logo, palette, type, voice, imagery, motion and the site itself. Every decision is yours, made for this one client, and every decision is stated so the user can redirect it.

Take this route when the user asks for it in any words ("decide everything", "surprise me", "make the whole brand", "design it as you think best", "from zero") or when there is no brand, no design system and no library prompt that fits.

## 0. Intake (one message at most)

From the request and the project, collect:

- **What it is**, in one sentence with the product's own nouns. **Who** uses it and the **physical scene** (where, when, under what light).
- **The one action** the first surface drives (`foundations/anatomy.md`) and the **mode** of that surface (`foundations/modes.md`).
- **Material on hand:** name, logo, photos, screenshots, real numbers, quotes, links. What is absent stays absent: never invented.
- **Constraints:** stack, deadline, languages, accessibility, anything the user pinned (a colour, a font, a feeling, a reference).

If more than two of these are unknowable and they change the work, ask once (two or three short questions). Otherwise infer, and open your next reply with the inferences in one line.

## 1. Strategy (write it, 6 lines)

```
PRODUCT   what it is and what makes it different, in one sentence
AUDIENCE  who, and the scene they meet it in
JOB       the one action, and where it lives on the page
PROOF     the real things the page can show (and what it must not claim)
VOICE     three words it is, three words it is not
MODE      Sell / Show / Work / Read
```

No name? Propose three (one descriptive, one evocative, one invented), say which you would pick and why, and continue with it unless the user objects. Check each name by searching if the harness allows it; say so if you could not.

## 2. Library pass (always, before any concept)

The prompt library is a catalogue of builds that already looked good. Studio work starts there, not from a blank page.

1. **Search by the product's characteristics**, three or four ways: its industry, its mood words, its audience's world, and the effect the first screen could use.
   ```bash
   node scripts/find.mjs "flowers subscription organic warm editorial" --type prompt --limit 10
   node scripts/find.mjs "<mood words>" --type prompt --mood editorial --limit 10
   node scripts/find.mjs "<industry>" --type design --limit 5
   ```
2. **Open the three to five closest prompts** and read them whole, with their linked design system when the search shows one. Pick the one whose first screen is strongest as the base. Industry matters less than look: a fashion hero can carry a flower farm.
3. **Pull parts** only for the sections the base does not have (at most two donor prompts):
   ```bash
   node scripts/parts.mjs hero "<mood or effect>" --limit 8
   node scripts/parts.mjs nav --mood <mood> --print 2
   node scripts/parts.mjs footer --print 2
   node scripts/fonts.mjs --pairings --mood <mood>
   ```
4. **Write a steal sheet** (in your notes, not the page):
   ```
   BASE        the prompt whose hero composition and system the page builds on, plus the other prompts that are the base for whole parts (or "none" with the reason)
   HERO        composition, scale and effect, and where it comes from
   SECTIONS    the base's own sections, plus a donor part for each section it lacks, with its source id
   TYPE        the pairing and its source, or a choice made with studio/type.md
   PALETTE     the approach borrowed (dark video + glass, warm paper + one ink…)
   MOTION      the entrance and the one signature effect, with source
   MOVES       three to five specific decisions lifted as values (sizes, tracking, crops, surfaces, labels, timings), each with its source
   ```

A strong base prompt is the default: rebuild it with this product's content, logo, palette and concept, and add the sections it lacks from other parts in the same system. Invent a composition only where the library has nothing that fits, and say so.

## 3. Concept: find the world

Load `studio/concept.md` and follow it, with the steal sheet in hand: the concept decides how the borrowed structure is dressed (palette, material, imagery, the logo, one signature detail) and what makes it this product's. List worlds from the audience's own culture, turn the best into three directions (at least one of them close to the strongest library prompt), choose one, and strengthen it with the discipline of the runner-up. Judge the directions on how good they will look and how clearly they sell, never on how unusual they are.

**Sketch them, do not describe them.** Render each direction as a real first screen and lay them on one board (`studio/explore.md` § 1). **When the user is present,** show the board with one line per direction and your recommendation; build after they pick, merge or say "go ahead". **When unattended** (headless, "just do it"), sketch anyway, choose by looking at the board, and list the board and the other two as alternates in the handoff.

## 3b. Structure: the page's own form

Left alone, every page comes out as the same stack: a hero, then sections that each open with a big head on the left and a small paragraph on the right, three pricing cards, a FAQ with a sticky head, founders as photo-plus-text, the wordmark huge in the footer. Structure is a design decision, as much as colour or type.

1. **Let the concept propose a form.** Ask what shape the concept's world has: a fire log is a timeline read minute by minute; a seed catalogue is an index of rows; a race programme is a schedule; a lab report is a long document with figures; a terminal session is a single scrolling transcript. The page can borrow that shape.
2. **Deal a structure** with the page's sections:
   ```bash
   node scripts/compose.mjs --sections "hero, how it works, product, pricing, team, faq, cta" --mood <mood> --theme <dark|light>
   ```
   It deals a page shape, hero, nav, footer, and a composition and opening for every section, never repeating neighbours, rationing the overused moves, and steering away from the structures dealt in recent builds. It also points at library parts that can build each section.
3. **Reconcile the two.** Where the concept's form and the deal agree, take it. Where they disagree, the concept wins, but keep at least half of the deal's picks: the deal exists to break your habits. Swap a pick only for a reason the content gives, and never back to the split head block, three equal cards, or a giant-wordmark footer.
4. Write the result as the STRUCTURE block of the brief.

## 4. Brand kit

Build the system before the page. Each step has a reference and most have a script.

| Piece | How | Output |
| --- | --- | --- |
| Palette | `studio/color.md`, then `node scripts/palette.mjs --hue <h> --dosage <d> --mode <light/both> --out tokens.css --html palette.html` | `tokens.css` (colour block), `palette.html` |
| Type | the steal sheet's pairing first (`node scripts/fonts.mjs --pairings`); otherwise `studio/type.md` and `fonts.mjs` for two or three candidates; set the real headline in each and choose | font links, `--font-*` tokens |
| Logo | `studio/logo.md`: concept, mark, wordmark (`node scripts/wordmark.mjs`), lockups, favicon | `brand/logo.svg`, `brand/mark.svg`, `brand/favicon.svg` |
| Voice | `foundations/craft.md` § Copy: headline, subhead and three section heads written first, in the voice | copy deck in the handoff |
| Imagery | `studio/imagery.md`: what the page shows and where it comes from; `node scripts/media.mjs` for real stand-ins | image plan, credits |
| Motion | `studio/motion.md`: the one signature moment and the grammar for everything else | motion tokens and the moment |

Then write the **design brief** (§ 5) and a `DESIGN.md` (`commands/document.md`) once the page is built, so later pages inherit the system.

Optional, when the user wants to see the brand before the site: a `brand.html` board (logo on light and dark, the mark at 16, 32 and 128px, palette swatches with contrast, type specimen with the real headline, voice examples, one sample component). Keep it one screen tall on desktop.

## 5. The design brief

Before page code, write these blocks (about 150 words in all) in the handoff or a `DESIGN-BRIEF.md`; never inside shipped source:

```
IDEA          the one thought this surface owns, and the category default it refuses
WORLD         palette, type and material, specific enough to recognise with the content removed
STORY         what the visitor understands, believes and does, in order
FIRST SCREEN  exactly what is where and at what scale; where the primary action sits
STRUCTURE     the page shape, nav and footer, and for each section its composition and how it opens
SIGNATURE     the one moment a visitor would describe an hour later
```

If a block reads like a mood ("modern and clean"), the direction is not decided yet. The final review checks the build against this brief.

## 6. Build

Build the chosen world at full commitment, not a safer reading of it.

- **The first screen is a thesis, not a header.** It demonstrates the product's mechanism at the scale it has in life. The memory test: if someone left after one screen, what would they describe an hour later? If the answer is a mood, the concept has not landed.
- **Prove, don't claim.** Show the subject doing its job: the interface at work, the object in use, specifics no competitor could paste. Demonstration content is design material: author it at full fidelity and mark it as sample. Claims (prices, customers, benchmarks, capabilities) stay uninventable.
- **Every atom in the world's vocabulary.** Nav, buttons, inputs, links, focus rings, selection colour, scrollbars: a stock component inside a committed world is a lapse.
- **Build the technique the world names** (a shader, a scroll scene, view transitions, a canvas), not a static imitation of it; bounded and with a fallback (`commands/overdrive.md`).
- **Pace the scroll:** dense and quiet sections alternate inside one grammar, and the page ends on a real close.
- **Build on the steal sheet.** Follow the base prompt's measurements, type treatment and effects as closely as on the Prompt route (`routes/library-prompt.md`), changing what the concept changes (content, logo, palette, imagery, one signature detail). Lifted parts are rebuilt in the page's tokens (`routes/library-prompt.md` § Combining). A library design can lend a discipline (a grid's density, a palette's total commitment), never its clothes.

## 7. Push, then finish

1. Lint, render and look (`SKILL.md` § Check).
2. **Push** (`studio/explore.md` § 4): find where the page plays safe and raise the two weakest points completely.
3. Self-critique against the brief with `commands/critique.md` (the specificity verdict first). Fix in one batch, look once more.
4. **Wire the tweaks panel** (`studio/explore.md` § 2) for the four to seven decisions still open, when the user will review the page in a browser.

The handoff for a studio run adds: the strategy block, the directions board with the chosen direction and the two alternates, the brand kit files, the copy deck, the image plan with credits, every placeholder, what real material would most improve the result, and the next moves on offer: `vary <section>` for three takes on any part, the tweaks panel for hands-on steering, another `push`.
