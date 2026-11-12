# Choreography

How several things move together so the result reads as one decision: who goes first, how much they overlap, which way they travel, and when everything is still. Single-element values (curves, durations, springs) are in `motion/principles.md`; this file is about the relationships between them.

Motion made by reflex is **uniform**: every element gets the same fade-and-rise at the same duration, one after another. Designed motion is **uneven on purpose**: one element leads and travels furthest, the rest follow shorter and quieter, and most of the screen stays still.

## 1. The beat sheet

Any sequence of three or more elements, or longer than a second, is written down before code. One row per beat, times in ms from the trigger:

```
t      element          property            from → to          curve / spring       why
0      card             translateY, opacity 12px, 0 → 0, 1      --ease-out 280ms     the result arrives
80     card title       opacity             0 → 1              --ease-out 160ms     content follows its container
200    primary action   opacity, scale      0, .96 → 1, 1      --spring             the next step, last and clearest
480    (hold)                                                                       read time before anything else moves
```

The sheet makes the problems visible before they exist: two rows with the same start and the same curve on unrelated elements, a total over budget, a gap with nothing moving, a row with no *why*. On a brand intro the sheet also names the **carrier** of every handoff (`motion/brand.md` § 3).

## 2. Order

- **Product screens load** shell first, then static content, then data, then the primary action, then charts and media. People orient on the frame, then read.
- **A marketing first screen** reads in the order of its sentence: headline, supporting line, action, then the visual. The action is clickable before the sequence ends.
- **One trigger, many responders** (a click that opens a panel and dims the page and moves a badge): all of them start within 50ms of the input, nearest to the trigger first, and may land at different times. Motion starts from where the input happened.
- **Exits run in reverse order** and faster: the last thing in is the first thing out.

## 3. Overlap

Write a sequence's density as how much each element overlaps the one before, as a share of that element's duration:

| Overlap | Reads as | Use |
| --- | --- | --- |
| 0% (one after another) | methodical, slow | almost never; a step-by-step explanation |
| 25% | brisk, clear | product UI, the default |
| 50% | fluid | marketing entrances, onboarding |
| 75% | rapid, one gesture | dense lists, small icons, a logo assembling |

Staggered elements share one curve and one duration; only the start time varies. A sequence that changes curves between siblings looks accidental. The step and total caps are in `principles.md` § 4.

## 4. Hierarchy

- **One hero motion per moment.** With three or more elements, no more than a third of them are in full motion at the same instant; the rest have landed or have not started.
- **The hero travels furthest.** Supporting elements move less in every dimension: shorter distance (4 to 8px against the hero's 16 to 24), shorter duration, no overshoot, lower opacity change.
- **Secondary action is subordinate.** The icon that turns, the check that draws, the badge that updates come after the container lands, at 30 to 50% of its amplitude, and are the first thing removed under reduced motion.

## 5. Direction

- **One spatial origin per moment.** Everything in a sequence comes from the same side, or from the trigger. Mixed directions read as chaos.
- **Enter and leave on the same axis.** A sheet from the bottom leaves downward; a step that slid in from the right leaves left when going forward and right when going back.
- **Forward continues, back reverses.** Going forward keeps the entrance direction; going back reverses it and runs about half as long.
- **Straight lines on the grid** for product UI. Arcs only for a flight between two distant points (an item thrown into a cart, a shared element crossing the page): animate x and y with different curves (x on `--ease-in-out`, y on `--ease-out`) and the path bends on its own.

## 6. Follow-through and overlapping parts

- **Containers lead, contents follow.** Children trail their parent by 50 to 150ms, so the box arrives and then fills, instead of everything landing as one slab.
- **Opacity leads, geometry follows.** On an entrance, opacity finishes in the first third of the move; on a dismissal it runs the whole way.
- **Expand: room, then content.** Collapse: content out, then the room closes. Reversing that order makes text jump across a box still resizing.
- **Spring settle is follow-through.** A 2 to 5% overshoot on a landing surface does what a separate "settle" keyframe would, for free.

## 7. Swaps inside a moving container

The commonest broken moment in generated UI: a button that turns into a spinner and then into "Saved", a pill that grows into a panel, a step that changes height. The container and its content need separate clocks:

1. The **container** morphs (size, radius, colour) as one move, about 300 to 400ms, on one spring.
2. The **old content** leaves fast, in about 100 to 120ms, with opacity and a 2 to 4px blur, scaling to 0.97.
3. The **new content** waits until the old is mostly gone (about 60 to 80ms after the swap), then enters over 200 to 260ms from 0.94 scale and opacity 0.
4. Two labels are never readable at the same time. Elements that persist between the states (an icon, a shared word) stay put and never re-enter.

Recipes: `motion/recipes.md` § Loading button, § Morphing container.

## 8. Continuity

- **Nothing teleports.** An element that exists in both states moves between them (FLIP, `layoutId`, View Transitions); it is never removed and re-added.
- **Persistent things never re-enter.** A header, a total, a selected item that is on both steps of a flow stays where it is while the rest changes.
- **A change of state that changes where something belongs is a journey.** A task ticked off travels to Done, an archived mail to the archive, a failed upload to the front of the stack: first the state shows where the item is (the check draws, the strike runs), then the item moves to its new place while the others make room. It travels above its neighbours (raised, with a shadow) so no frame shows two rows overlapping. Changing it in place and letting it vanish from one list and appear in the other loses the story.
- **The content of a card that changes state changes on its own clock** (§ 7): the icon, the title and the detail swap together with a short crossfade; an instant text swap next to an animated icon reads as a glitch.
- **Handoffs go through an object.** On marketing and brand pages, a scene changes through a shape the eye can follow (a panel wiping across, a dot that grows into the next background, an image that becomes the next section's frame), not a crossfade of two unrelated layouts.

## 9. Anticipation

Never before a response the user asked for: a wind-up delays feedback. It belongs to brand motion, intros and illustration: a small move opposite the main action, 10 to 20% of its size, for 100 to 200ms, then the action. Under 150ms of total action, skip it.

## 10. A worked example: a dashboard loading

```
0      skeletons visible (only if the data takes ≥ 500ms; principles.md § 4)
100    hero metric value, opacity 0 → 1, 250ms --ease-out (no count-up: it is data)
200    widget cards, translateY 8px → 0 + opacity, 200ms each, 30ms step, by row
350    chart line draws (stroke-dashoffset), 300ms --ease-in-out
520    still. Nothing loops.
```

Under reduced motion the same sheet becomes one 150ms opacity crossfade of the whole content area.

## 11. Check

- Read the beat sheet aloud: can every row say why it moves?
- Slow the page to 10% (DevTools Animations panel) or open the filmstrip from `scripts/motion.mjs`: one thing leads in every frame; no frame shows two labels or a half-resized box with text reflowing inside.
- Count how many things are moving in the busiest frame; more than a third of the visible elements is too many.
- Trigger it twice quickly and once backwards: the order still holds, and nothing restarts from zero.
