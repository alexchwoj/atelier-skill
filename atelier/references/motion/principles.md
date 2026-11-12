# Motion principles

How to decide whether something moves, what kind of motion it gets, and the exact values. Read this before writing any animation. Sequencing is in `motion/choreography.md`, recipes in `motion/recipes.md`, gestures in `motion/gestures.md`, scroll in `motion/scroll.md`, brand and intro motion in `motion/brand.md`, Lottie and Rive in `motion/lottie.md`, which runtime to use in `motion/runtimes.md`, performance in `motion/performance.md`, accessibility in `motion/accessibility.md`, and the self-check in `motion/lint.md`.

## 1. The gate: should it move at all?

Answer four questions in order. A candidate that fails one does not move.

1. **Frequency.** How often does one person trigger it?
   - **100+ times a day** (keystrokes, keyboard shortcuts, command palette, list navigation with arrows): **no animation**. Ever.
   - **Tens of times a day** (hover on rows, tab switches, toggles): instant, or under 150ms on opacity and colour only.
   - **Occasionally** (modals, drawers, menus, toasts, accordions): standard motion.
   - **Rarely or once** (first run, onboarding, success, empty states, the marketing page): the delight budget; longer beats, choreography, a little bounce.
   - Anything triggered from the keyboard is treated as high frequency.
2. **Purpose.** Name it, or do not build it: *feedback* (the press registered), *spatial consistency* (where it came from, where it went), *state indication* (it is open, loading, selected), *preventing a jarring change* (content swapping in place), *explanation* (how the product works; marketing and onboarding only), *delight* (rare moments only). "It looks cool" is not a purpose.
3. **Speed.** Does it still work at UI speed (below)? If it only works as a slow, showy animation, it belongs on a marketing page or nowhere.
4. **Function.** Does it move information people read or act on (data, prices, form values, tables)? Then it stays still. Motion on dense information hinders.

Write the rejects down too ("command palette open: keyboard, 100+/day, no motion"). A page with five well-chosen animations beats a page where everything moves.

## 2. Spring or easing?

The question: **is this motion reacting to the user, or is the system speaking?**

| Situation | Motion |
| --- | --- |
| The user is moving it (drag, swipe, flick, pinch, scrub) | **spring**, which carries the gesture's velocity and can be interrupted |
| Something the user can interrupt mid-way (a sheet they may grab, a toggle clicked twice fast) | **spring** or a CSS **transition** (transitions retarget; keyframes do not) |
| The system announces a change (toast, modal, menu, validation, route change) | **easing curve** |
| Progress, loading, a timer, a scrubbed timeline | **linear** |
| High-frequency interaction | **none** |

Two more splits decide the tool:

- **Space and effect move differently.** Position, scale and size get the spatial curve or spring (it may overshoot where § 5 allows). Opacity and colour get a separate, shorter curve that never overshoots, and finish early: on an entrance, opacity is done by 25 to 35% of the move while the geometry keeps settling.
- **Anything whose target can change mid-flight** (a stack that grows, an indicator, a list, a toggle clicked twice) uses transitions or springs, which retarget from where they are. `@keyframes` restart from frame one and jump; keep them for one-shot entrances and loops.

## 3. Tokens

Use exact values, never ranges in code. These are the house tokens; their names are stable, so existing pages keep working:

```css
:root {
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);      /* entrances, exits, most UI */
  --ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);  /* movement on screen, view and mode changes */
  --ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);   /* sheets and drawers, iOS-like */
  --ease-in: cubic-bezier(0.55, 0, 1, 0.45);       /* only for things leaving for good */
  --ease-emphasized: cubic-bezier(0.05, 0.7, 0.1, 1);  /* large and brand entrances: fast launch, long settle (refined below) */

  --dur-press: 150ms;
  --dur-tooltip: 150ms;
  --dur-menu: 200ms;
  --dur-modal: 250ms;
  --dur-drawer: 450ms;
  --dur-reveal: 700ms;     /* marketing only */
  --stagger: 40ms;

  /* Springs in pure CSS: a curve and its duration always travel together (scripts/spring.mjs). */
  --spring: var(--ease-out);         --dur-spring: 440ms;
  --spring-soft: var(--ease-out);    --dur-spring-soft: 560ms;
}
@supports (transition-timing-function: linear(0, 1)) {
  :root {
    /* two-stage launch-and-settle, sampled: 40% of the travel in the first sixth of the time */
    --ease-emphasized: linear(0, 0.013 4%, 0.056 8%, 0.146 12%, 0.4 16.7%, 0.586 19%, 0.705 22%, 0.79 26%, 0.84 30%, 0.89 36%, 0.93 44%, 0.961 54%, 0.982 66%, 0.995 80%, 1);
    /* bounce 0, perceived 0.3s / bounce 0.15, perceived 0.4s: regenerate with spring.mjs, never retime by hand */
    --spring: linear(0, 0.0048 1.1%, 0.0196 2.3%, 0.0444 3.6%, 0.0816 5.1%, 0.1597 7.7%, 0.3642 13.8%, 0.4624 16.9%, 0.5564 20.2%, 0.6359 23.4%, 0.7057 26.7%, 0.7655 30.1%, 0.8171 33.7%, 0.8602 37.5%, 0.8992 42%, 0.9299 46.9%, 0.9538 52.4%, 0.9716 58.7%, 0.9838 65.8%, 0.9918 74.3%, 1);
    --spring-soft: linear(0, 0.0061 1.3%, 0.0228 2.6%, 0.0526 4.1%, 0.0939 5.7%, 0.1358 7.1%, 0.1884 8.7%, 0.4108 15%, 0.5146 18.1%, 0.6114 21.3%, 0.6956 24.5%, 0.7647 27.6%, 0.8238 30.8%, 0.8727 34.1%, 0.913 37.6%, 0.9462 41.5%, 0.9709 45.7%, 0.9885 50.4%, 0.9996 55.8%, 1.0063 67.5%, 1);
  }
}
```

Never the browser's `ease` for UI movement (fine for colour changes), never `linear` except for progress and scrubbing, never bounce or elastic curves by reflex. A CSS spring cannot carry the velocity of an interrupted gesture: drags and flicks stay on JS springs (`motion/gestures.md`).

**Exits.** Exits use `--ease-out` and are shorter than the entrance, by size: a small element dismissed in place (tooltip, menu, chip) leaves in about 40 to 50% of its entrance; a large surface (modal, sheet, page) in 75 to 80%, so it does not snap away. `--ease-in` (slow start) only for something leaving for good while nothing waits on it (a dismissed card flying off). A reversible transition (open and close the same panel) leaves along the same path it arrived on; back and cancel run faster than forward.

### Motion character

A brand has a motion character the way it has a typeface. Pick one from the brief, the mood or the design file's `## Motion` section, write it into the tokens, and keep it for the whole product. Values the design file states outright win over the preset.

| Character | Reads as | Durations | Curve for most motion | Overshoot | Stagger step |
| --- | --- | --- | --- | --- | --- |
| **Precise** | dev tools, finance, dashboards, "fast", "utilitarian" | tokens × 0.85 | `--ease-out` | none | 20 to 30ms |
| **Confident** | most products; the default | tokens × 1 | `--ease-out`, `--ease-in-out` on screen | none in UI, 0.1 on gesture release | 40ms |
| **Expressive** | consumer, editorial, launch pages | tokens × 1.2 | `--ease-emphasized` for entrances | 0.1 to 0.15 on surfaces that land | 50 to 60ms |
| **Playful** | kids, games, creative tools, "fun" | tokens × 1 | `--spring-soft` | up to 0.25, only on success, celebration and gesture | 50ms |
| **Cinematic** | luxury, fashion, film, "calm", "premium" | marketing tokens × 1.4, UI unchanged | `--ease-in-out` and long settles | none | 80 to 120ms |

One curve carries 80% of the product's motion; three durations (quick, standard, slow) carry most of the rest; one entrance pattern is used everywhere it applies. A character borrows from another only for a named moment (a precise dashboard may celebrate one milestone playfully). Write it as `--motion-scale` and multiply: `--dur-modal: calc(250ms * var(--motion-scale, 1))`.

## 4. Durations

| What | Duration |
| --- | --- |
| Button press, toggle, checkbox | 100 to 160ms |
| Tooltip, small popover | 125 to 200ms |
| Dropdown, select, menu | 150 to 250ms |
| Modal, dialog | 200 to 300ms |
| Drawer, sheet | 300 to 500ms (spring or `--ease-drawer`) |
| Route or view change | 200 to 350ms |
| Marketing entrance, reveal | 500 to 900ms |
| Stagger between items | 30 to 80ms; whole sequence under 500ms in UI, under 1.2s on marketing pages |

UI motion stays under 300ms unless it covers real distance (a drawer crossing the screen). When something feels slow, **shorten it before sharpening the curve**.

**Distance sets the duration, not the component.** For anything that travels, start from the distance in pixels: about `80 + 0.08 × d` ms for product UI and `120 + 0.11 × d` ms for expressive and marketing motion (an 8px dropdown ≈ 90ms, a 400px drawer ≈ 110 to 160ms of travel before its settle, a 1400px page ≈ 190 to 270ms). Size barely matters; distance does. Phones run about 20% shorter than desktop for the same element, because the distances are shorter. Fades that do not travel use the short tokens.

**Stagger caps.** Step = `min(40ms, 500ms ÷ n)`; past about 12 items, stagger the first rows and let the rest arrive together. A grid staggers by row (+20ms per row), not by cell. When the same list reloads, the stagger does not replay.

**Holds.** A sequence breathes: leave 100 to 200ms of stillness after a beat resolves before the next one starts, and give anything the viewer must read time to be read (a headline about 1.5 to 2s, a result 0.5s, an end card 2 to 3s). Dead air longer than a beat inside a sequence reads as broken.

## 5. Springs

Two ways to describe the same spring. Prefer the first; it is how Apple and Motion think:

- **Bounce and duration** (Motion): `{ type: "spring", bounce: 0, duration: 0.4 }`. Bounce 0 is critically damped (no overshoot).
- **Damping ratio and response** (Apple): damping 1.0 = no bounce, below 1.0 overshoots; response = roughly the seconds to arrive.

| Use | Spring |
| --- | --- |
| Default UI movement, repositioning | bounce 0, duration 0.4 (damping 1.0, response 0.4) |
| A sheet or drawer settling | bounce 0.15, duration 0.35 (damping 0.85, response 0.3) |
| After a flick or throw (momentum) | bounce 0.2, duration 0.45 (damping 0.8) |
| Drag release snapping into place | stiffness 500, damping 30 (Motion stiffness form) |
| Interruptible toggles and layout swaps | stiffness 400, damping 25 |
| Icon swaps | bounce 0, duration 0.3 |

Bounce 0.1 to 0.3 at most, and only when a gesture carried momentum or on a rare celebratory moment. Never extreme pairs (stiffness 1000 with damping 5). Animate 2D drags as two independent springs (x and y).

**Footprint picks the speed.** A small component (chip, toggle, icon) gets a fast spring (about 0.25s), a partial surface (card, popover, panel) the default (0.4s), a full-screen surface a slow one (0.6s), all at the same damping so the product feels like one material.

**Overshoot budget**, as the share of the travel the spring passes its target: opacity, colour and errors 0%; large surfaces 0 to 2%; ordinary landings 2 to 5%; a success 5 to 10%; a celebration in a playful brand up to 20%. A short, bouncy animation (under 150ms with overshoot) reads as a glitch, not as play. `node scripts/spring.mjs <bounce> <duration>` prints the overshoot of any spring before you ship it.

## 6. Physics of the motion

- **Start where the eye is.** Popovers, menus and tooltips scale from their trigger (`transform-origin` at the trigger). Modals are the exception: they come from the centre.
- **Never from nothing.** Enter from `scale(0.95)` to `scale(0.97)` with opacity 0, never `scale(0)`. Small things scale less (tooltips 0.97), big things more (modals 0.96, cards 0.95).
- **Short distances.** Slides of 8 to 16px for content, 100% of its own size for sheets (use percentages, which are relative to the element).
- **Exit the way it came.** A toast that slid up from the bottom leaves downward; a drawer from the right returns right.
- **Hint toward the outcome.** Intermediate frames point at where the thing is going (a module growing up and out toward the finger).
- **One thing at a time.** Never fade, slide, scale and blur one element all at once; pick the two that tell the story (usually opacity plus one transform).
- **Blur as glue.** 2 to 4px of blur on a crossfade or exit hides the seam between two states; never animate more than 20px of blur.
- **Interruptible by default.** Rapidly triggered states use transitions or springs that retarget from the current value, never keyframes that restart.

## 7. Motion as a system

Each project gets a small motion system, written as tokens and kept consistent:

- **Feedback layer:** press (scale 0.97, 150ms), hover (colour or 1 to 2px lift, gated to hover-capable pointers), focus (instant, never animated).
- **Transition layer:** overlays, menus, sheets, route changes, all from the tokens above.
- **Narrative layer** (marketing): one entrance choreography for the first screen, one reveal language for sections, one signature moment. How to sequence it: `motion/choreography.md`.

The signature moment comes from the concept (the route tape drawing itself, the order ticket printing, the cold start counted in milliseconds). A generic fade-and-rise is not a signature. The library has many: `node scripts/parts.mjs motion "<mood or effect>" --limit 8`.

## 8. Feel-check before shipping

- Play every animation at **2× to 5× its duration** (DevTools Animations panel, or temporarily multiply the tokens) to see the curve, the origin and the end state.
- Step through frames; look for a jump on the first or last frame.
- Trigger it fast, twice, and interrupt it halfway: it must retarget, not restart or stack.
- Try it on a real phone, with reduced motion on, and with JavaScript off (content must still be there).
- Remove it in your head: if nothing is lost but movement, it was decoration.
- Run `node scripts/motion.mjs <page>`: it proves the animations run, shows them frame by frame on a filmstrip, and flags jank, non-composited properties, uniform timing and motion that survives reduced motion. Then name the three riskiest moments (the longest move, the biggest overshoot, the densest overlap) with their times, so the user can scrub them; never just say it feels good.
