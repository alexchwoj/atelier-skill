# Motion accessibility

Reduced motion is graceful degradation, not a kill switch: fewer and gentler animations, never a broken or blank page. Users who ask for it often get dizzy or nauseous from large movement; they still benefit from feedback that confirms what happened.

## 1. Three tiers

| Tier | Under `prefers-reduced-motion: reduce` | Examples |
| --- | --- | --- |
| **Remove** | gone entirely, the end state shown at once | parallax, large slides, zooms and scale-ins, 3D rotation, spins, auto-playing carousels and marquees, smooth-scroll libraries, scroll-jacked or pinned scrubbing, motion paths, full-viewport moving backgrounds |
| **Soften** | becomes a short opacity crossfade (150 to 200ms) | modal and sheet entrances, page transitions, reveals, slide-ins |
| **Keep** | unchanged | opacity and colour changes, focus rings, loading indicators, progress bars, essential motion that explains state |

Example: a card that slides in over 400ms becomes a 150ms fade; a hero zoom disappears; a spinner keeps spinning.

## 2. The CSS layer

A global backstop, then intentional overrides on top (the backstop alone would also kill the "keep" tier):

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;      /* 0.01ms, not 0: transitionend and animationend still fire */
    animation-iteration-count: 1 !important;    /* stops infinite spins and marquees */
    transition-duration: 0.01ms !important;
    animation-timeline: auto !important;        /* scroll-driven animations ignore durations: without this they still scrub */
    scroll-behavior: auto !important;
  }
  .scroll-progress { animation-timeline: scroll(root) !important; }   /* keep: a progress bar reports position, it does not move content */
  .card { transition: opacity 150ms ease !important; }          /* soften */
  .spinner { animation-duration: 900ms !important; animation-iteration-count: infinite !important; }   /* keep */
  .parallax, .hero-zoom { transform: none !important; animation: none !important; }   /* remove */
}
```

Prefer opting in for elaborate effects: write them inside `@media (prefers-reduced-motion: no-preference)` (Tailwind `motion-safe:`), so the default is calm. Everything in the **remove** tier (parallax, scrubbing, zooms, 3D) is written that way, with the finished state as the plain style; the backstop is only a safety net.

**View Transitions.** Under reduced motion, drop the movement and keep the crossfade, which is not motion:

```css
@media (prefers-reduced-motion: reduce) { ::view-transition-group(*) { animation: none; } }
@media (prefers-reduced-motion: no-preference) { @view-transition { navigation: auto; } }   /* cross-document: opt in */
```

Custom slides and wipes on `::view-transition-old/new` go inside `no-preference`.

**Video, Lottie, canvas.** Never put `autoplay` in the HTML of a video that reduced motion must stop (it starts before any script): start it from JS when allowed, and show the `poster` otherwise. A Lottie or Rive animation does not autoplay under reduced motion and shows its meaningful frame (usually the last). A GIF swaps to a still through `<picture><source media="(prefers-reduced-motion: reduce)" srcset="still.png">`.

## 3. The JavaScript layer

CSS cannot reach JS-driven motion (GSAP, Motion, canvas, WebGL, Lenis). Gate it, and listen for changes so toggling the OS setting applies without a reload:

```js
const rm = matchMedia('(prefers-reduced-motion: reduce)');
let reduce = rm.matches;
rm.addEventListener('change', (e) => { reduce = e.matches; applyMotionMode(); });
```

- **GSAP:** `gsap.matchMedia().add({ ok: '(prefers-reduced-motion: no-preference)', reduce: '(prefers-reduced-motion: reduce)' }, (ctx) => { const { ok } = ctx.conditions; gsap.from('.hero', ok ? { y: 80, opacity: 0, duration: 1 } : { opacity: 0, duration: 0.15 }); });`
- **Motion (React):** `useReducedMotion()` or `<MotionConfig reducedMotion="user">`; give reduced users `initial={{ opacity: 0 }}` with `duration: 0.15` instead of a slide.
- **Lenis, Locomotive, smooth scroll:** do not create the instance at all.
- **Canvas and WebGL:** render one still frame, or a gentle, slow version without camera movement.
- **SSR:** start from `false` and re-read `matchMedia` in an effect, so server and client markup match.

## 4. Companion preferences

```css
@media (prefers-reduced-transparency: reduce) { .glass { background: var(--color-paper); backdrop-filter: none; } }
@media (prefers-contrast: more) { .glass { background: var(--color-paper); border: 1px solid var(--color-ink); } }
@media (forced-colors: active) { .btn { border: 1px solid transparent; } }   /* keeps an outline where shadows vanish */
```

## 5. Rules that hold for everyone

- **Content is visible without JavaScript.** Never ship `opacity: 0` that only a script removes; hide under a `.js` class the script adds.
- **WCAG 2.2.2:** anything that moves, blinks or scrolls automatically for more than 5 seconds has a visible pause control, even when reduced motion is off. Marquees and carousels also pause on hover and focus.
- **WCAG 2.3.1:** nothing flashes more than three times per second.
- **Motion never carries meaning alone.** State shown by an animation is also shown in text, colour plus icon, or position.
- **Focus never animates in.** Focus rings appear instantly.
- **WCAG 2.3.3:** motion the user triggers (scrolling, hovering, clicking) can be turned off unless it is essential. Scroll-linked slides, zooms and parallax count; opacity and colour changes do not. The OS setting or the page's own toggle (below) satisfies it.
- **WCAG 2.2.2 starts more than page load:** a loop that starts when it scrolls into view or on hover is also "automatic". Content that updates by itself (an auto-advancing carousel, a ticker) needs a pause control from the first second, not after five. One page-level control that pauses everything beats one per widget.
- **Avoid vestibular triggers by default.** Five kinds make people sick: scaling and zooming (including large animated blur), spinning, layers moving at different speeds or directions (parallax), planes tilting in 3D, and motion in the periphery of reading text (a marquee beside a paragraph). Risk grows with the share of the screen that moves and how far. Also full-viewport moving backgrounds, very slow large loops (around one cycle per 5 seconds) and sudden large brightness changes. Large surfaces travelling far fade partly during the move. Remove only these triggers under reduced motion; harmless motion (a fade, a colour change, a press) can stay.

## 5b. A motion toggle on the page

On motion-heavy pages (scroll stories, 3D heroes, long intros), give people a switch that does not depend on finding an OS setting. It also serves as the single "pause everything" control:

```html
<button id="motion-toggle" type="button" aria-pressed="false">Reduce motion</button>
<script>  /* in <head>, before first paint */
  try { const s = localStorage.getItem('motion'); document.documentElement.dataset.motion = s || (matchMedia('(prefers-reduced-motion: reduce)').matches ? 'reduce' : 'full'); } catch { }
</script>
```

```css
:root[data-motion="reduce"] *, :root[data-motion="reduce"] *::before, :root[data-motion="reduce"] *::after {
  animation-duration: 0.01ms !important; animation-iteration-count: 1 !important;
  animation-timeline: auto !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important;
}
```

```js
const btn = document.getElementById('motion-toggle');
const apply = (reduce) => {
  document.documentElement.dataset.motion = reduce ? 'reduce' : 'full';
  btn.setAttribute('aria-pressed', String(reduce));
  dispatchEvent(new CustomEvent('motionchange', { detail: { reduce } }));   // video, GSAP, Lottie and canvas listen
};
apply(document.documentElement.dataset.motion === 'reduce');
btn.addEventListener('click', () => { const r = btn.getAttribute('aria-pressed') !== 'true'; try { localStorage.setItem('motion', r ? 'reduce' : 'full'); } catch { } apply(r); });
```

Put it in the footer or settings, and near the top on pages where motion is the main event.

## 6. Verify

Turn on reduced motion in the OS (or DevTools Rendering → Emulate CSS prefers-reduced-motion) and walk the page: everything visible, nothing large moving, feedback still there. `node scripts/shot.mjs` checks for content hidden under reduced motion; `node scripts/motion.mjs` lists everything that still moves under reduced motion (transforms, scroll timelines that still scrub, infinite loops, playing video).
