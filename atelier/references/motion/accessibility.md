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
    scroll-behavior: auto !important;
  }
  .card { transition: opacity 150ms ease !important; }          /* soften */
  .spinner { animation-duration: 900ms !important; animation-iteration-count: infinite !important; }   /* keep */
  .parallax, .hero-zoom { transform: none !important; animation: none !important; }   /* remove */
}
```

Prefer opting in for elaborate effects: write them inside `@media (prefers-reduced-motion: no-preference)` (Tailwind `motion-safe:`), so the default is calm.

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
- **Avoid vestibular triggers by default:** full-viewport moving backgrounds, very slow large loops (around one cycle per 5 seconds), sudden large brightness changes. Large surfaces travelling far fade partly during the move.

## 6. Verify

Turn on reduced motion in the OS (or DevTools Rendering → Emulate CSS prefers-reduced-motion) and walk the page: everything visible, nothing large moving, feedback still there. `node scripts/shot.mjs` checks for content hidden under reduced motion; Playwright: `npx playwright screenshot --reduced-motion=reduce <url> out.png`.
