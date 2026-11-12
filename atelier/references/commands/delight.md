# delight

Make an experience memorable at the moments that earn it. Delight is product character revealed through a useful interaction, a humane response or an unexpectedly considered detail, never a layer of generic whimsy.

**By mode:** on Sell and Show pages, personality may run through voice, composition, motion and discovery, as long as the product stays the focus. On Work and Read screens, concentrate it at first use, completion, recovery and mastery; reliability carries everything else.

## Find the moment

Effort worth acknowledging; waiting that could be informative; an empty or first-use state that could orient; an error that needs empathy; an action whose response could express the brand; a capability people would enjoy discovering. Do not stage a celebration for an ordinary click.

## One thesis

One sentence: what the person should feel, and why that feeling belongs to this product. Then the smallest thing that delivers it:

- a distinctive response to a meaningful action (the order ticket that prints, the route tape that sticks to the wall);
- product-specific language that clarifies while carrying the voice;
- a transition with a recognisable material behaviour;
- a detail from the product's world: an illustration, a sound (opt-in), a haptic;
- a hidden shortcut or easter egg that is genuinely useful.

Look in the library for how proven builds staged a similar moment before inventing one: `node scripts/parts.mjs motion "<the moment and the product's mood>" --limit 8` and `parts.mjs components` for small interactive details. Take the mechanism and its timing, dressed in this product's world.

## By moment

- **Success:** match the response to effort and consequence; a milestone may expand, a routine save just feels certain.
- **Waiting:** truthful progress or useful context; never fake work or delay completion for a flourish.
- **Empty and first use:** the next action first, personality second.
- **Error and recovery:** the problem and the fix first; warmth may lower stress, jokes must not trivialise lost money, data, privacy or blocked work.
- **Repetition:** still satisfying the hundredth time; variation only when predictable enough to trust.

## The motion of delight

Delight's intensity runs opposite to frequency: the rarer the moment, the more it may do. A save that happens fifty times a day gets a crisp check; finishing onboarding once may get a small celebration.

| Moment | Motion that earns it | Limits |
| --- | --- | --- |
| Routine success | the control's own state changes in place: label swap, a check that draws in 200 to 300ms (`motion/recipes.md` § Loading button, § Success check) | no toast for a visible result, no overshoot above 5% |
| Milestone | the result lands with one spring (overshoot 5 to 10%), its secondary details following 80 to 120ms later; one brand-specific flourish (the stamp, the ticket, the route line) | once; under 1.2s; never blocks the next action |
| Celebration (rare) | a short burst in the brand's own material (shapes from the logo, the product's objects), 600 to 900ms, then gone | only in playful or expressive characters; never confetti by default; nothing under reduced motion but the result itself |
| Waiting | the real progress, or the work visibly happening (rows filling in order); a skeleton of the real layout | no fake steps, no looping mascot past 5s without a pause |
| Empty state | the illustration or object still, the action clear; at most one gentle entrance on first view | no ambient loop |
| Hover on a hero object | a small, quick reaction of a *part* (an icon turns 10 to 20°, a caret nudges 2 to 4px) for 150 to 200ms, then back | mouse-capable pointers only; never on body content |
| Error | calm: the state changes at once; at most a small shake | no bounce, no playful copy for serious failures |

Physical marks may squash on impact (about 1.2 × 0.8 for 40 to 60ms, volume preserved), and a thrown object keeps its release angle. Both belong to playful brands, never to finance, health or luxury.

## Never

Delay or obscure the task, override platform conventions or accessibility, add unrequested claims, play sound without consent, become mandatory or exhausting, or cost more weight than the moment is worth. Respect reduced motion, screen readers, keyboard, touch and localisation.

## Check

A neighbouring product could not use it unchanged; it improves confidence, comprehension or recovery; the interface is just as fast and obvious without it.
