# Motion performance

Smooth means every frame fits the budget: **16.7ms at 60Hz, 8.3ms at 120Hz**. Design for the smaller number and test on a mid-range phone, not a development machine.

## 1. What each property costs

| Tier | Properties | Cost per frame |
| --- | --- | --- |
| Composite only | `transform`, `opacity` (and usually `filter`, `clip-path`) | cheap; can run off the main thread |
| Paint + composite | `box-shadow`, `border-radius`, `color`, `background-color`, `background-position` | moderate; fine on small elements |
| Layout + paint + composite | `width`, `height`, `top`, `left`, `margin`, `padding`, `border-width`, `font-size`, `inset` | expensive; can re-lay out the whole page every frame |

**Swaps:** width or height → `scale()`; top, left or margin → `translate()`; animated `box-shadow` → `filter: drop-shadow()` or a pseudo-element's opacity; a sidebar sliding with `margin-left` → `translateX` (the first re-lays out the page each frame, the second does not). Height is acceptable only for short accordions.

## 2. Which thread

- CSS transitions, CSS animations and the Web Animations API (`el.animate()`) on transform and opacity can run on the compositor, so they stay smooth while JavaScript is busy (route changes, hydration, data loading).
- Anything driven by JavaScript per frame (requestAnimationFrame, GSAP, Motion's `x`/`y`/`scale` shorthands) runs on the main thread and stutters when it is busy. For motion that must survive a busy page (a tab indicator during navigation, a loader), use CSS or WAAPI, or Motion's full `transform` string.

## 3. Frameworks

- Never `setState` per frame (scroll, pointermove, drag, rAF). Write to `ref.current.style.transform` or a motion value (`y.set(v)`).
- Never animate a CSS variable on a parent that many children read: every child recalculates its style each frame and the drag gets laggier as the list grows. Set the transform on the element that moves.
- `quickTo` / `quickSetter` in GSAP for pointer-following values.
- Kill what you start: ScrollTriggers, observers, rAF loops and listeners are cleaned up on unmount.

## 4. Specific costs

- **Blur:** keep animated `blur()` at 20px or less (Safari suffers above); 2 to 5px is enough for a crossfade. Large `backdrop-filter` areas are expensive; limit their size and count.
- **will-change:** only after you see a 1px jump at the start or end of an animation, or measure dropped frames; only on the element that animates; only `transform`, `opacity` or `filter`; never on `*` or large containers, and remove it when the animation ends.
- **Canvas, WebGL, video:** start them lazily when near the viewport, pause them off-screen and when the tab is hidden (`visibilitychange`), cap the device pixel ratio at 2, fall back to a poster.
- **Many elements:** animate a container instead of 200 children; stagger with CSS delays rather than 200 JS tweens; `content-visibility: auto` for long off-screen sections.
- **Scroll listeners:** passive, throttled to animation frames, or replaced with IntersectionObserver and scroll-driven animations.

## 5. Diagnosis order

When something stutters, find the cause before changing code:

1. Which properties animate? (anything from the layout tier, or `transition: all`)
2. Does the jank coincide with a busy main thread (navigation, hydration, fetching)?
3. Does React re-render every frame?
4. Does it get worse as content grows (inherited CSS variables, too many animated nodes)?
5. Is a CSS variable animated on a parent?
6. Is blur above 20px, or a big backdrop-filter moving?
7. Only then consider `will-change`.

| Symptom | Fix |
| --- | --- |
| Stutter on any animation | animate transform and opacity only |
| Choppy shadow on hover | `filter: drop-shadow()` or fade a pseudo-element's shadow |
| Jank during route changes | move the motion to CSS or WAAPI |
| Motion `x`/`y` drops frames | use the full `transform` string |
| Drag laggy as the list grows | stop driving children through a parent CSS variable |
| Safari blur lag | under 20px, smaller area |
| Things animating that should not | replace `transition: all` with named properties |

## 6. Verify

The DevTools Performance panel (look for long tasks and layout or paint inside animation frames), the Animations panel (slow down to 10%), the Rendering panel's "Paint flashing" and "Frame rendering stats", and a real phone through remote debugging. CPU throttling simulates a slow CPU, not a weak GPU or low memory.
