# Motion principles

How to decide whether something moves, what kind of motion it gets, and the exact values. Read this before writing any animation. Recipes are in `motion/recipes.md`, gestures in `motion/gestures.md`, scroll in `motion/scroll.md`, performance in `motion/performance.md`, accessibility in `motion/accessibility.md`.

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

## 3. Tokens

Use exact values, never ranges in code. These are the house curves:

```css
:root {
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);      /* entrances, exits, most UI */
  --ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);  /* movement on screen, view and mode changes */
  --ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);   /* sheets and drawers, iOS-like */
  --ease-in: cubic-bezier(0.55, 0, 1, 0.45);       /* only for things leaving for good */

  --dur-press: 150ms;
  --dur-tooltip: 150ms;
  --dur-menu: 200ms;
  --dur-modal: 250ms;
  --dur-drawer: 450ms;
  --dur-reveal: 700ms;     /* marketing only */
  --stagger: 40ms;
}
```

Never the browser's `ease` for UI movement (fine for colour changes), never `linear` except for progress and scrubbing, never bounce or elastic curves by reflex.

**Exits.** In UI, exits use `--ease-out` at 60 to 75% of the entrance duration: they start immediately and get out of the way. `--ease-in` (slow start) only for something leaving for good while nothing waits on it (a dismissed card flying off). A reversible transition (open and close the same panel) leaves along the same path it arrived on.

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
- **Narrative layer** (marketing): one entrance choreography for the first screen, one reveal language for sections, one signature moment.

The signature moment comes from the concept (the route tape drawing itself, the order ticket printing, the cold start counted in milliseconds). A generic fade-and-rise is not a signature. The library has many: `node scripts/parts.mjs motion "<mood or effect>" --limit 8`.

## 8. Feel-check before shipping

- Play every animation at **2× to 5× its duration** (DevTools Animations panel, or temporarily multiply the tokens) to see the curve, the origin and the end state.
- Step through frames; look for a jump on the first or last frame.
- Trigger it fast, twice, and interrupt it halfway: it must retarget, not restart or stack.
- Try it on a real phone, with reduced motion on, and with JavaScript off (content must still be there).
- Remove it in your head: if nothing is lost but movement, it was decoration.
