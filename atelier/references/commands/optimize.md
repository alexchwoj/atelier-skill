# optimize

Find and fix what makes an interface slow to load or slow to respond. Measure before and after; never optimise blind.

## Measure

Lighthouse or the browser's performance panel on a throttled mobile profile; Core Web Vitals targets: **LCP < 2.5s, INP < 200ms, CLS < 0.1**. Identify the LCP element, the longest tasks and the heaviest requests.

## Loading

- **Images:** AVIF or WebP, right-sized with `srcset`/`sizes`, `loading="lazy"` below the fold, `fetchpriority="high"` and no lazy on the LCP image, explicit dimensions.
- **Fonts:** only the weights used, `font-display: swap`, preconnect to the host or self-host, preload the one face the hero headline uses, metric-matched fallbacks (`size-adjust`) to avoid shift.
- **JavaScript:** code-split by route, defer non-critical scripts, remove unused dependencies, prefer CSS for what CSS can do, load third-party widgets on interaction.
- **CSS:** remove unused rules, inline the critical CSS for the first screen when it matters.
- **Video:** poster image, `preload="metadata"`, compressed and short for backgrounds, or a streamed source.

## Rendering

- Avoid layout thrashing: batch DOM reads before writes; no forced reflow in loops.
- `content-visibility: auto` with `contain-intrinsic-size` on long off-screen sections.
- Virtualise long lists (TanStack Virtual or a simple windowing).
- Passive scroll listeners; IntersectionObserver instead of scroll math.

## Animation

Animate `transform` and `opacity`; bound blur and filters to small regions; pause canvas, WebGL and video off-screen; `will-change` only during the animation; test on a mid-range phone.

## Frameworks

- React: memoise expensive children, stable keys, avoid re-rendering the whole tree on input, move heavy work to a worker or the server, use the framework's image and font components (Next.js `next/image`, `next/font`).
- Ship less: server components or static rendering where interactivity is not needed.

## Network

HTTP caching headers, compression, a CDN, fewer requests on the critical path, `preconnect` and `dns-prefetch` for required origins.

## Check

Re-measure with the same profile and report before and after for LCP, INP, CLS and transfer size. Make sure nothing visual regressed (`scripts/shot.mjs`).
