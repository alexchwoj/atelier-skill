# Motion plan

Every build that moves gets a short motion plan before any animation code. The rules, values and recipes live in `references/motion/`:

| File | For |
| --- | --- |
| `motion/principles.md` | the gate (should it move?), spring vs easing, tokens, durations, springs, feel-check |
| `motion/recipes.md` | press, popover, tooltip, modal, sheet, toast, accordion, swaps, tabs, hold-to-confirm, counters, page transitions, theme switch, marquee, hero entrance |
| `motion/gestures.md` | drag, swipe, flick, sheets: interruptibility, velocity, momentum, rubber-band, springs without a library |
| `motion/scroll.md` | reveals, masked word reveal, CSS scroll-driven, GSAP ScrollTrigger stories, Lenis |
| `motion/performance.md` | frame budget, property costs, threads, diagnosis |
| `motion/accessibility.md` | reduced motion tiers, CSS and JS layers, WCAG rules |

## Write the plan (five lines)

```
SIGNATURE    the one authored moment, born from the concept, and where it lives
FEEDBACK     which controls and outcomes get press / hover / success motion (from the gate)
TRANSITIONS  overlays, menus, sheets, view changes, and their tokens
SCROLL       the one scroll pattern family (or none) and the reveal language
BUDGET       expensive effects, when they start and stop, and the reduced-motion version of each
```

Then build only that.

## The signature moment

It comes from the concept, not from a catalogue: the route tape drawing itself up the wall, the order ticket printing out, the cold start counted in milliseconds, the alert travelling from a sensor to a phone. A fade-and-rise, a hover lift, a parallax layer or a scroll reveal is not a signature.

Find one in the library before inventing: `node scripts/parts.mjs motion "<concept words>" --limit 8` and `node scripts/parts.mjs background "<effect>" --limit 8` (shaders, particles, light rays, video, glass). Rebuild it in the page's tokens.

Choose its material by meaning:

- **Continuity and relationship:** shared-element motion, FLIP, View Transitions.
- **Focus and depth:** bounded blur, backdrop, light, shadow on one element.
- **Reveal and composition:** `clip-path`, masks, cropping, controlled occlusion.
- **Material and energy:** colour, gradient position (animatable with `@property`), texture, distortion, shaders.
- **Data and time:** counters, timelines and charts that move because the values change.

One strong material idea, carried through the signature and kept quiet everywhere else, is enough. Never stack techniques for spectacle.

## Choosing the runtime

CSS transitions and keyframes first (`@starting-style` for entries, scroll-driven animations for simple scroll links), then the Web Animations API for sequencing and interruption without a dependency, then the project's library (Motion in React, GSAP for timelines and ScrollTrigger). Add a library only when the plan needs what CSS cannot do: springs with velocity, shared layout, complex timelines, pinned scroll stories.

## Check

The feel-check in `motion/principles.md` § 8, the reduced-motion walk in `motion/accessibility.md` § 6, and `node scripts/shot.mjs` (it captures the final state of every animation and flags content hidden under reduced motion).
