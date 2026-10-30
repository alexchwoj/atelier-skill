# critique

A design director's review of an existing page or screen: does it feel authored for this product, does it work for the people using it, and what are the few changes that matter most. Report only; change nothing unless asked.

## Gather evidence

1. Read the target's code and any `DESIGN.md`, `DESIGN-BRIEF.md` or brand files.
2. Render it (`node scripts/shot.mjs <target> --full`) and look at every screenshot. Without a renderer, say the review is code-only.
3. Run `node scripts/lint.mjs <target>` and keep its findings separate from your own judgement.
4. Find the quality bar: `find.mjs "<the target's kind, mood and theme>" --type prompt`, and open the three to five strongest. Judge the target against them, and let fixes cite them ("the hero head is 48px where library peers set this look at 7 to 9vw: `prompts/…`").
5. If the harness has subagents, run the design review and the mechanical scan in two separate contexts so the scan does not anchor the judgement; otherwise do your own review first, then read the scan.

## The report

Start with one line saying how it was run (rendered or code-only; one context or two).

### 1. Specificity verdict (first, always)

Does it feel made for this product, or could it belong to any company in the category? Cover overall coherence, structural sameness (the hero-features-CTA template, a row of icon cards), category-default choices (palette, type, imagery), and the missed chances for product character. Name the one look in `studio/concept.md` § 2 it drifts toward, if any.

### 2. Heuristic scores

Score each 0 to 4 (4 is genuinely excellent; most real interfaces land between 20 and 32 of 40). On Sell and Show pages, 7 and 10 may be `n/a`; then total over the applicable maximum and rate by percentage (90% excellent, 70% good, 50% acceptable, 30% poor, below that critical).

| # | Heuristic | Score | Key issue |
| --- | --- | --- | --- |
| 1 | Visibility of system status | | |
| 2 | Match with the real world (language, order, metaphors) | | |
| 3 | User control and freedom (undo, back, exit) | | |
| 4 | Consistency and standards | | |
| 5 | Error prevention | | |
| 6 | Recognition rather than recall | | |
| 7 | Flexibility and efficiency (shortcuts, bulk actions) | | |
| 8 | Aesthetic and minimalist design | | |
| 9 | Error recognition and recovery | | |
| 10 | Help and documentation | | |

### 3. What works

Two or three specific things, and why they work.

### 4. Priority issues (three to five)

Each with a severity:

| Severity | Meaning |
| --- | --- |
| **P0** blocking | prevents the task entirely |
| **P1** major | significant difficulty or confusion; fix before release |
| **P2** minor | annoying, with a workaround |
| **P3** polish | no real user impact |

For each: **what** (the exact element), **why it matters** to users or the business, **the fix** (concrete), and **the command** that addresses it (`polish`, `bolder`, `quieter`, `distill`, `harden`, `adapt`, `animate`, `clarify`, `onboard`, `optimize`, `delight`, `overdrive`, `audit`). Unsure between P1 and P2? Would a user contact support about it? Then it is P1.

### 5. Persona walk-throughs

Pick the two or three that fit the surface and walk the primary action as each. Report what broke for them, by element, not a description of the persona.

- **The power user:** knows the category, skips onboarding, wants keyboard shortcuts, bulk actions and speed. Red flags: forced tours, mouse-only actions, slow animations, needless confirmations.
- **The first-timer:** never used this kind of product, reads literally. Red flags: icon-only navigation, jargon, unclear next step, no confirmation that something worked.
- **The keyboard and screen-reader user:** tabs linearly, relies on headings and labels, may zoom to 200%. Red flags: missing focus, unlabeled controls, colour-only meaning, custom widgets that trap focus.
- **The stress tester:** long names, empty data, slow network, double clicks, back button. Red flags: overflow, blank states, lost input, duplicate submissions.
- **The distracted phone user:** one thumb, bright sunlight, interrupted. Red flags: small targets, low contrast, actions out of thumb reach, state lost on return.

Add one or two personas from the project's own audience when it is known.

### 6. Minor notes and questions

Small issues in a list. Then two or three questions that could unlock a better design ("What if the booking were the hero?", "Does this need four plans?").

## Tone

Direct and specific: "the submit button", never "some elements". Say what is wrong, why it matters and what to do. No "consider exploring". Prioritise ruthlessly. Do not soften criticism; do not invent problems to fill a section either.
