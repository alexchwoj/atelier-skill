# Which runtime for which job

Use the lightest tool that can do the job, and the one the project already has: CSS, then the Web Animations API, then a library. Support as of late 2026.

## 1. Decision table

| Job | First choice | Otherwise |
| --- | --- | --- |
| Hover, press, focus, popover, dialog, toast in and out | CSS transitions + `@starting-style` | a JS spring only when a gesture drives it |
| Spring feel on a transition nobody drags | CSS `linear()` from `scripts/spring.mjs`, curve and duration together | Motion when it must carry velocity |
| Drag, flick, swipe to dismiss, anything grabbed mid-flight | Motion springs, or the vanilla integrator in `motion/gestures.md` | |
| Reorder, grid to list, card to detail on one page | View Transitions (`view-transition-name: match-element` + `view-transition-class`) | Motion `layout` / `layoutId` in React; GSAP Flip in vanilla |
| Page to page on a multi-page site | cross-document `@view-transition` | Firefox navigates normally; fine |
| Stagger | `sibling-index()` with an inline `--i` fallback | |
| Scrubbed by scroll (progress, pinned steps, a parallax layer) | CSS scroll-driven animations inside `@supports` | GSAP ScrollTrigger for long pinned stories |
| Reveal once when scrolled into view | IntersectionObserver + a class | CSS scroll-triggered animations as a Chrome enhancement |
| Animated gradient, ring, angle, counter | `@property` (small elements: it paints on the main thread) | |
| Logo draw, simple mark motion on the page | inline SVG + CSS (`pathLength="1"`, `transform-box: fill-box`) | WAAPI to sequence; GSAP DrawSVG for many paths |
| Shape morph | same-structure paths: SMIL `<animate>`; otherwise GSAP MorphSVG or flubber | |
| Headline split into lines or words | GSAP SplitText (`mask: 'lines'`, `autoSplit`) | manual spans with `aria-label` on the parent |
| A 3 to 10s timeline with beats and holds | GSAP timeline with labels (paused, seekable: `motion/brand.md` § 5) | WAAPI offsets; Motion `animate(sequence)` in a Motion codebase |
| A portable or designer-owned motion file | Lottie as `.lottie`, played by dotlottie-web (`motion/lottie.md`) | |
| An interactive, stateful illustration | Rive, with a `.riv` the user supplies | |
| Game HUD feedback | the engine's tweens, or WAAPI / CSS in web games (`game/feedback.md`) | |

## 2. Support (late 2026)

| Feature | Status | Use |
| --- | --- | --- |
| `linear()` easing, `@property`, `@starting-style`, `allow-discrete` | all engines | freely |
| Same-document View Transitions, `view-transition-class`, types, `match-element` | all engines | freely; content still works without them |
| `sibling-index()`, `sibling-count()` | all engines, recently | keep an inline `--i` fallback for older Safari and Firefox |
| Anchor positioning | all engines | with a fallback position |
| Scroll-driven animations (`animation-timeline`, `view()`, `scroll()`) | Chrome, Safari 26; Firefox arriving | always inside `@supports (animation-timeline: view())` |
| Cross-document `@view-transition` | Chrome, Safari | not Firefox; harmless there |
| `interpolate-size`, `calc-size()` | Chromium only | enhancement only; `grid-template-rows: 0fr → 1fr` animates everywhere |
| Scroll-triggered animations (`timeline-trigger`, `animation-trigger`) | Chrome only | with an IntersectionObserver fallback |
| Nested view-transition groups, `element.startViewTransition()` | Chrome only | enhancement only |
| CSS `d: path()` animation | not Safari | JS or SMIL morphing instead |
| SMIL | all engines | standalone SVG files; it ignores reduced motion, so prefer CSS inside the SVG |

## 3. Library notes

**Motion** (`motion`, `motion/react`):

- Size: `animate` from `motion/mini` about 3 kB; the full `animate` about 22 kB; `<motion.div>` about 43 kB; `<m.div>` with `LazyMotion` about 5 kB plus 24 kB of features (38 kB with drag and layout).
- Springs: `{ type: 'spring', visualDuration: 0.4, bounce: 0.15 }`; bounce defaults to 0.25 when not given, so set it.
- Sequences: `animate([[el, kf, { at: 'label' }], …])`, `stagger(0.04, { from: 'center' })`.
- `AnimatePresence`: `initial={false}` for state swaps, `mode="popLayout"` for swaps inside a button or a list, `mode="wait"` only when exit must finish first; keys are stable ids, never the index.
- Layout: set `borderRadius` and `boxShadow` through `style` so they stay correct while scaling; `layout="position"` for text; `scrollbar-gutter: stable` on the page.
- Reduced motion: `<MotionConfig reducedMotion="user">` at the root keeps opacity and colour and drops transforms.

**GSAP** (`gsap`, all plugins free including SplitText, DrawSVG, MorphSVG, Flip, CustomEase, ScrollTrigger):

- Timelines: position parameter `'<'` (with the previous start), `'>'` (after the previous end), `'label+=0.3'`, `'-=0.2'`.
- `gsap.matchMedia()` for reduced motion and breakpoints, reverting automatically; in React, `useGSAP` with a scope.
- Every tween runs on the main thread: during heavy JavaScript it stutters where CSS and WAAPI would not.

**WAAPI:**

- `el.animate(keyframes, { duration, easing, delay, fill })` runs on the compositor for transform and opacity.
- `await anim.finished` (catch the rejection on cancel).
- `anim.reverse()` to undo from where it is.
- `commitStyles()` then `cancel()` instead of leaving `fill: 'forwards'` alive.
- `document.getAnimations()` lists every CSS and WAAPI animation; it is what the checks use.

## 4. Gotchas worth knowing by heart

- `animation-timeline` must come after the `animation` shorthand, which resets it.
- A scroll timeline's duration is ignored. If the page is not scrollable, the timeline is inactive, so never let visibility depend on it.
- A CSS spring's duration is its settle time; replaying the curve at another duration is a different curve.
- `@starting-style` must come after the open-state rule (or nest it inside), or it loses the cascade.
- `view-transition-name` must be unique on the page at the moment of the transition, or the transition aborts.
- A View Transition makes the page non-interactive while it runs: keep page transitions under about 400ms.
- Text reflowing inside a resizing view-transition group warps; crossfade it instead.
- Animating a registered custom property never runs on the compositor, even when it only feeds `transform`.
