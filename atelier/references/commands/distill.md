# distill

Strip a design to its essence: remove what does not earn its place (redundant elements, repeated information, decorative noise, needless options). Simplicity is removing obstacles between people and their goal, not removing features.

## Find the essence

- What is the **one** thing this screen must accomplish?
- What is necessary, what is nice to have, what can be removed, hidden or merged?
- Where do the complexity sources sit: too many elements, too much variation (colours, fonts, sizes), everything visible at once, visual noise, unclear hierarchy, too many paths forward?

If the primary goal is unclear from the code and the brief, ask.

## Remove, by layer

- **Information:** one primary action, few secondary ones, the rest tertiary or hidden; progressive disclosure (details, accordions, step-through) for what is needed later; merge similar actions; say each thing once.
- **Visual:** one or two colours plus neutrals; one family, three or four sizes, two or three weights; drop borders, shadows and backgrounds that do not express hierarchy; no cards for basic layout (spacing and alignment do it); never a card inside a card.
- **Layout:** linear flow where a complex grid adds nothing; secondary sidebars moved inline or behind a toggle; one alignment logic.
- **Interaction:** fewer choices, smart defaults, inline editing instead of modals, fewer steps, one obvious next action.
- **Copy:** cut filler, keep meaning; active voice ("Save changes", not "Changes will be saved"); plain words; no heading that restates its intro.
- **Code:** unused CSS and components, flattened trees, merged styles, fewer variants (three that cover 90% beat twelve).

## Do not

Remove functionality people need, sacrifice accessibility (labels and ARIA stay), make things so minimal they become mysterious, remove information needed for a decision, or flatten a complex domain that genuinely needs its complexity.

## Check and document

Faster to complete the task, lower cognitive load, nothing necessary missing, clearer hierarchy, lighter page. List what you removed and why, and where anything hidden can still be reached.
