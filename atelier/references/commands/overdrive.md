# overdrive

Push an interface past what people expect from a website, using the full power of the browser. Not only visual effects: a table that scrolls a million rows smoothly, a dialog that grows out of the button that opened it, a form that validates as you type without a flicker, a page transition that feels like film.

Context decides what extraordinary means. A particle field on a creative portfolio impresses; the same thing on a settings page embarrasses. A settings page with instant optimistic saves and seamless state transitions is extraordinary too.

## Propose before building

This has the highest potential to misfire. Before writing code:

1. Think through two or three directions (different techniques, different levels of ambition). For each: what it looks and feels like, browser support, performance cost, complexity.
2. Put them to the user with those trade-offs inside each option, and build only the one they confirm. Unattended, build the most conservative option that is still extraordinary and list the others.

## What extraordinary means here

- **Marketing and portfolio surfaces:** sensory: a scroll-driven scene, a shader background, a cinematic transition, generative art that responds to the pointer.
- **Functional UI:** how it feels: a dialog morphing from its trigger, drag and drop with spring physics, streaming validation, instant search.
- **Data-heavy screens:** fluidity: Canvas or WebGL rendering for large sets, animated transitions between chart states, graphs that settle naturally.
- **Performance-critical UI:** invisible but felt: filtering 50,000 items with no jank, heavy work off the main thread.

## Start from the library

Hundreds of prompts already specify shaders, particle fields, scroll scenes, video glass and WebGL heroes with working parameters. Before proposing, search them: `node scripts/parts.mjs background "<effect words>" --print 3`, `parts.mjs motion "<effect words>" --print 3`, `find.mjs "<effect> <mood>" --type prompt --kind animation`. Propose a direction built on a proven recipe (cite it), tuned to this product, rather than an effect described from scratch.

## The toolkit

- **Cinematic transitions:** View Transitions API (same-document everywhere; cross-document where supported), `@starting-style`, spring physics (Motion, GSAP, or a small spring solver).
- **Scroll-linked:** `animation-timeline: scroll()` / `view()` with a static fallback.
- **Beyond CSS:** WebGL (Three.js, OGL, regl) for shaders, post-processing, particles; WebGPU with a WebGL2 fallback; Canvas 2D or OffscreenCanvas in a worker; SVG filter chains (turbulence, displacement) for organic distortion.
- **Living data:** virtual scrolling (TanStack Virtual), GPU charts (deck.gl), animated transitions between data states.
- **Complex properties:** `@property` to animate gradients and custom values; the Web Animations API for composable, reversible choreography.
- **Performance:** Web Workers, OffscreenCanvas, WASM for heavy computation.
- **Device:** Web Audio (after a user gesture), orientation and other device APIs, only with permission and purpose.

This command changes how an interface feels, not what the product does; real-time collaboration or offline sync are product decisions.

## Discipline

- **Progressive enhancement is non-negotiable:** `@supports`, feature detection, and a fallback that still looks good.
  ```js
  if ('gpu' in navigator) { /* WebGPU */ } else if (canvas.getContext('webgl2')) { /* WebGL2 */ } /* else the CSS version */
  ```
- 60fps target; simplify below 50. Lazy-initialise heavy contexts near the viewport; pause anything off-screen; test on a mid-range phone.
- Reduced motion gets a calm version; sound only on opt-in.
- One extraordinary moment per page. Competing moments are noise. Never use technical ambition to cover weak fundamentals.

## Verify in the browser

Effects rarely work on the first try: check timing, easing and smoothness rendered, batch fixes between looks. Then the tests: show it to someone (do they react?), remove it (does anyone notice?), run it on a phone (still smooth?), and ask whether it fits this brand.
