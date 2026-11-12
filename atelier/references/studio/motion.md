# Motion plan

Every build that moves gets a short motion plan before any animation code. The rules, values and recipes live in `references/motion/`:

| File | For |
| --- | --- |
| `motion/principles.md` | the gate (should it move?), spring vs easing, tokens, motion character, durations by distance, springs, feel-check |
| `motion/choreography.md` | beat sheet, order, overlap, hierarchy, direction, swaps inside a moving container, continuity |
| `motion/recipes.md` | press, popover, tooltip, modal, sheet, toast and toast stack, accordion, swaps, loading button, success check, height to auto, morphing container, stepper, list reorder, skeletons, tabs, hold-to-confirm, counters, page transitions, theme switch, marquee, hero entrance |
| `motion/gestures.md` | drag, swipe, flick, sheets: interruptibility, velocity, thresholds, momentum, rubber-band, springs without a library |
| `motion/scroll.md` | reveals, masked word reveal, CSS scroll-driven, GSAP ScrollTrigger stories, Lenis |
| `motion/brand.md` | animated logos and wordmarks, heroes, 3 to 10s intros: acts, tempo, holds, carriers, techniques, seekable timelines |
| `motion/lottie.md` | Lottie, dotLottie and Rive: when, how to build and check one, players |
| `motion/runtimes.md` | which runtime for which job, browser support, library notes |
| `motion/performance.md` | frame budget, property costs, threads, diagnosis |
| `motion/accessibility.md` | reduced motion tiers, CSS and JS layers, WCAG rules, motion toggle |
| `motion/lint.md` | motion tells and the self-check before handing back |

## Write the plan (seven lines)

```
CHARACTER    precise / confident / expressive / playful / cinematic, and where it came from (brief, design file, mood)
SIGNATURE    the one authored moment, born from the concept, and where it lives
FEEDBACK     which controls and outcomes get press / hover / success motion (from the gate)
TRANSITIONS  overlays, menus, sheets, view changes, and their tokens
SCROLL       the one scroll pattern family (or none) and the reveal language
CHOREOGRAPHY the order and overlap of the first screen and of the signature (a beat sheet when it has 3+ parts)
BUDGET       expensive effects, when they start and stop, and the reduced-motion version of each
```

Then build only that. A plan where every line says "fade up" is not a plan.

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

CSS transitions and keyframes first (`@starting-style` for entries, scroll-driven animations for simple scroll links), then the Web Animations API for sequencing and interruption without a dependency, then the project's library (Motion in React, GSAP for timelines and ScrollTrigger). Add a library only when the plan needs what CSS cannot do: springs with velocity, shared layout, complex timelines, pinned scroll stories. The full table, with browser support: `motion/runtimes.md`.

## Tokens from the brand

On the Design route, read the design file's `## Motion` section first: its curves, durations and character ("snappy micro-feedback, nothing springy") become the tokens, mapped onto the house names (`--ease-out`, `--dur-*`) so the recipes still work. Without one, choose the character in `motion/principles.md` § 3 from the brief and mood. On the Prompt route the prompt's own timings and easings win.

## Check

The motion lint in `motion/lint.md` § 2, the feel-check in `motion/principles.md` § 8, the reduced-motion walk in `motion/accessibility.md` § 6, then `node scripts/motion.mjs` (proves the animations run, filmstrip, jank, reduced-motion leaks) and `node scripts/shot.mjs` (final states, content hidden under reduced motion).
