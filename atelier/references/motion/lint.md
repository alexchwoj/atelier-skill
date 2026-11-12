# Motion lint

The motion a model adds by reflex, how to recognise it, and the check every build that moves passes before it is handed back. Like every tell, these judge only the motion *you* decided: a brief or a library prompt that asks for a marquee, a bounce or a typewriter keeps it (`lint.mjs --prompt` reports it as KEPT).

The thesis: generated motion is **uniform** (one preset on every element, one duration, one curve, one direction, all of it on scroll), and designed motion is **uneven on purpose** (a few moments, timed by distance and role, one leading, most things still). So the strongest checks measure coverage and sameness, not single properties.

## 1. The tells

`lint.mjs` rule ids in brackets; ◆ means `scripts/motion.mjs` measures it in the running page.

**Entrances and scroll**

| Tell | Instead |
| --- | --- |
| Every section, heading and card fades up on scroll [`reveal-everywhere`] ◆ | Two to four reveals that carry the story; headings, body copy and navigation never reveal |
| The same `{ opacity: 0, y: 20 }` on everything, whatever its size [`fade-up-preset`] ◆ | Distance by role: small items 4 to 8px or none, media through a clip or mask, sheets from their edge |
| Delay chains of 0.1, 0.2, 0.3s… or `i * 0.1` [`delay-chain`] ◆ | `min(40ms, 500ms ÷ n)` per step, one group arriving together past 12 items |
| One duration and curve on every animation (`duration-300`, `.3s ease`) [`uniform-duration`] ◆ | Tokens by role and distance; a motion character (`principles.md` § 3) |
| `cubic-bezier(0.4, 0, 0.2, 1)` or plain `ease` as the only curve in the file [`default-curve`] | The house curves, or the design file's own |
| Reveals of 600ms to 1s on ordinary content [`slow-ui`] ◆ | Under 300ms in UI; 500 to 700ms only for the few marketing moments |
| Content that hides again and replays when scrolled past [`replay-on-scroll`] | Once, or not at all |
| Headlines split into letters, each blurring in | One headline per page by line or word, under 600ms, `aria-label` kept |
| Typewriter or rotating word in the `h1` [`typewriter`] | A complete headline at first paint |
| Every stat counting up from zero [`count-up`] | The number, set; a roll only when the value really changes |

**Loops and ambient motion**

| Tell | Instead |
| --- | --- |
| `animate-pulse`, `animate-ping`, glow loops on buttons, badges and "New" pills [`infinite-loop`] ◆ | Static emphasis (weight, contrast, position); a pulse only for a live state (recording, unread), and it stops |
| Floating, bobbing hero mockups and icons [`float-loop`] | Still; depth from composition |
| Drifting blobs, aurora and panning gradients behind the hero [`animated-bg`] | A still surface, or one slow loop (20s or more) that stops off-screen and under reduced motion |
| Shimmering gradient text, border beams, rotating conic borders, meteors, sparkles [`shimmer-fx`] | A hairline and a lightness step; one effect only when the brief names it |
| A bouncing chevron at the bottom of the hero [`bounce-arrow`] | Delete it; let the next section show above the fold |
| Decorative spinning (stars, badges, the logo) [`decorative-spin`] | Spin is for loading only |
| A marquee or carousel that never pauses [`marquee-no-pause`] ◆ | Pause on hover and focus, a pause control past 5 seconds, still under reduced motion |
| Fake loading: a spinner or skeleton for something already in memory [`fake-latency`] | Render at once; a spinner only after 150 to 300ms of real waiting, then shown for at least 300ms |

**Hover and press**

| Tell | Instead |
| --- | --- |
| `hover:scale-105` on every card and button [`hover-scale`] ◆ | One signal on the container (a colour, shadow or border step, or a 2px nudge of its arrow); scale is for press (0.97) |
| Images zooming inside cards on hover [`hover-img-zoom`] | Still image; the caption or link changes |
| 3D tilt following the mouse on cards [`tilt`] | None, unless 3D is the product |
| Content that exists only on hover [`hover-only`] (FAIL) | Always visible, or also on `:focus-within`; touch has no hover |
| Hover states with no press state | `:active` at scale 0.97 in 100 to 150ms |

**Curves, physics, properties**

| Tell | Instead |
| --- | --- |
| Bounce, elastic or back curves on dialogs, toggles, toasts [`overshoot-ease`] | `--ease-out`; overshoot only within the budget (`principles.md` § 5) |
| `ease-in` or `linear` on entrances [`entrance-ease-in`] | Ease-out in; linear only for progress and scrubbing |
| Short and bouncy (overshoot under 150ms) | Either longer or not bouncy: it reads as a glitch |
| Layout properties animated, `max-height: 1000px` accordions [`animate-layout`, `max-height-anim`] | transform, opacity, `grid-template-rows: 0fr → 1fr`, measured height |
| `@keyframes` on toasts, stacks and indicators that can be retriggered | Transitions or springs, which retarget |
| Parallax on text, or on every section [`text-parallax`] ◆ | No parallax on text; at most one image layer at 10 to 15% |
| Smooth-scroll libraries and wheel hijacking on ordinary pages [`scroll-hijack`] | Native scroll |
| Keyboard-driven changes that animate (list highlight, command palette) | Instant |

**Access**

| Tell | Instead |
| --- | --- |
| No reduced-motion path for a library (Motion without `MotionConfig`/`useReducedMotion`, GSAP without `matchMedia`) [`motion-lib-no-reduced`] (FAIL) | The gate for every technology used (`motion/accessibility.md` § 3) |
| Scroll-driven animations still scrubbing under reduced motion ◆ | Authored inside `prefers-reduced-motion: no-preference`; `animation-timeline: auto` in the backstop |
| Glitch and flicker loops faster than 3 per second [`flash-loop`] (FAIL) | Remove |

## 2. The motion lint (self-applied before handing back)

1. **Every animation has a sentence.** For each one, what it explains: where something came from, what changed, that the press registered. No sentence, no animation.
2. **Count the reveals.** No more than two to four on a page; no heading, paragraph or nav reveals; content visible without JS.
3. **Durations differ by role and distance**, from the tokens; no single duration-and-curve pair covers most of the page.
4. **Stagger is capped** (`min(40ms, 500ms ÷ n)`), totals under 500ms in UI and 1.2s on marketing pages, and one curve per group.
5. **One hero motion per moment**; a third of the elements at most in motion at once; one spatial origin per moment.
6. **Exits are shorter than entrances** and leave the way they came.
7. **Overshoot only within the budget**: never on opacity, colour, errors or large surfaces; never short and bouncy.
8. **Every loop is a loader, a live state or the declared concept**, stops off-screen and under reduced motion, and has a pause control past 5 seconds.
9. **Only transform and opacity animate** (clip-path where smooth); animated blur stays at 8px or less and small in area.
10. **Reduced motion is designed**: removed, softened or kept per element, for CSS, JS, scroll timelines, video and Lottie alike.
11. **Text stays still**: no parallax, no typewriter in the headline, at most one split-text moment.
12. **Hover is never the only way** to see or reach anything.
13. **There is one signature moment**, born from the concept, and it is visible on the first screen or at the moment it serves.
14. **State changes are shown, not swapped**: an item whose state moves it somewhere travels there; a card that changes state changes text, icon and colour on one clock; demo triggers play the whole sequence; frequent actions are optimistic and never wait on a spinner.

Then run both checks and fix every FAIL:

```bash
node scripts/lint.mjs <files>             # static: rule ids above
node scripts/motion.mjs <page>            # runtime: proves it runs, filmstrip, jank, reduced-motion leaks, sameness
```
