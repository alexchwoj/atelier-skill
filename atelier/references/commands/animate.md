# animate

Add, audit or fix motion in an existing interface, or author a piece of brand motion. Four modes; pick from the request ("add motion" is find + build, "the animations feel off" is review, "it stutters" is performance, "animate the logo", "an intro", "a Lottie" is brand).

## Mode 1: find (what should move)

1. **Recon:** the stack, motion libraries already installed, existing easing and duration tokens (extend them, never add a second system), and the product's personality.
2. **Sweep** for candidates:
   - controls with no `:active` state (press feedback);
   - conditional renders that pop in and out (`{open && …}`, `display: none` toggles);
   - accordions and details that snap open;
   - menus, popovers and tooltips that appear from nowhere;
   - toasts and sheets that leave differently than they arrive;
   - lists that add and remove items without a bridge;
   - drag and swipe handlers with no physics;
   - first-run, empty and success states (the only place for delight);
   - the marketing page's first screen and section reveals.
3. **Gate every candidate** with `motion/principles.md` § 1 (frequency, purpose, speed, function).
4. **Report** before changing code:

| # | Location (file:line) | Today | Purpose | Frequency | Motion (exact values) |
| --- | --- | --- | --- | --- | --- |

Ordered by value; five to seven suggestions per app at most, fewer per screen. Then a **rejected** list, each with the gate question that killed it ("command palette open: keyboard, 100+/day"). Every suggestion includes its reduced-motion behaviour and, for hover, the `(hover: hover) and (pointer: fine)` gate.

## Mode 2: build

1. Write the motion plan (`studio/motion.md`): character, signature, feedback, transitions, scroll, choreography, budget. Source each entry from the library first: `node scripts/parts.mjs motion "<what moves and the page's mood>" --print 3` (and `background` for loops and scenes). The prompts carry tested timings, easings, staggers and sequences; take those values, mapped onto the project's tokens.
2. Add the tokens from `motion/principles.md` § 3 if the project has none, scaled by the character; generate any CSS spring with `scripts/spring.mjs`.
3. Write a beat sheet for every sequence of three or more parts (`motion/choreography.md` § 1).
4. Implement from `motion/recipes.md`, `motion/gestures.md` and `motion/scroll.md`, using the runtime the project already has (`motion/runtimes.md`).
5. Add the reduced-motion layer (`motion/accessibility.md` § 2 and § 3).
6. Run the motion lint (`motion/lint.md` § 2), `node scripts/lint.mjs` and `node scripts/motion.mjs`; fix every FAIL, open the filmstrip, and name the three riskiest moments.

## Mode 4: brand (logo, wordmark, hero, intro, Lottie)

1. Read `motion/brand.md`. Find the move in the mark (§ 1) and write it as one sentence.
2. **Write the beat sheet and get it approved before code** (acts, tempo, holds, carrier of each handoff). On a headless run, state it in the handoff instead.
3. Build the last frame first: it is the poster, the reduced-motion state and the thumbnail.
4. Build the piece as a paused, seekable timeline (`motion/brand.md` § 5), in the format the user needs: inline SVG and CSS, a standalone SVG, a Lottie (`motion/lottie.md`, checked with `scripts/lottie.mjs`), or frames for a video.
5. Check the filmstrip at every beat (`node scripts/motion.mjs <page> --strip 8`), the mark at 64px and 16px, and the reduced-motion still.

## Mode 3: review and fix

Read every animation in the target and flag, with `file:line`:

| Severity | Examples |
| --- | --- |
| **High** (breaks interaction or access) | no reduced-motion path; content hidden without JS; keyframes on a toggle that cannot reverse; motion as the only signal of state; focus ring that fades in; auto-playing motion past 5s with no pause; layout properties animated in a loop |
| **Medium** (feels wrong) | `transition: all`; `scale(0)` entrances; `ease-in` on UI entrances; durations over 300ms on frequent UI; popovers scaling from the centre instead of the trigger; exits that leave a different way than they came; ungated hover on touch; stagger on high-frequency lists; springs wobbling on system messages; the same entrance on every element (`motion/lint.md`); two labels visible during a swap; keyframes on something that can be retriggered |
| **Low** (polish) | curves not from the tokens; inconsistent durations for the same role; durations that ignore distance; blur above 20px; `will-change` left on permanently |

Run `node scripts/motion.mjs` on the target first: its inventory, sameness figures and reduced-motion leaks are the evidence for the table.

For performance problems, follow the diagnosis order in `motion/performance.md` § 5 and report the cause before the fix. Close with **block** (any high) or **ship**.

## Never

Animate information people read or act on for style; animate keyboard-driven or 100+/day actions; add a motion library for what CSS can do; leave an animation without a reduced-motion version.
