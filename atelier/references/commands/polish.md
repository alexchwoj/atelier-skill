# polish

The final pass before shipping. Refinement, never a hidden redesign: keep the visual world, the content, the behaviour and everything outside the scope. If the concept itself is wrong, say so and recommend `bolder` or a redesign instead of smuggling one in.

## 1. Know the system

Read `DESIGN.md`, tokens, shared components and neighbouring screens. Classify every inconsistency before fixing it:

- **missing token:** a value the system needs and does not have;
- **one-off:** a custom implementation where a shared component exists;
- **conceptual drift:** a flow or hierarchy that differs from comparable screens;
- **local defect:** simply unfinished.

Fix each at the narrowest correct level.

## 2. Use it

Walk the real path at desktop and phone sizes (`scripts/shot.mjs`), with mouse, keyboard and touch. Note the states, content lengths and inputs real users will hit. If an earlier `critique` exists, take its P0 and P1 items as input, then do your own pass anyway.

Then set it beside its best peers: `find.mjs "<the page's kind and mood>" --type prompt`, open three to five whole, and list the finishing details they have that the target lacks (hairlines, label and numeral treatment, hover and press states, image framing, entrance timing). Those that fit the existing system go on the fix list.

## 3. Fix in this order

1. Broken or blocked tasks, lost data, misleading state, inaccessible paths.
2. Missing states: loading, empty, error, success, disabled, permission.
3. Flow, hierarchy, responsive and system drift.
4. Visual and motion inconsistencies.
5. Code and asset cleanup.

Do not perfect one corner while the rest stays below the same bar.

## 4. The checklist

- **Layout:** aligned to the grid and spacing scale, optically as well as mathematically; related things grouped tight, distinct groups apart; more space above a heading than below it.
- **Type:** same role, same style everywhere; measure, wrapping (`balance`/`pretty`), stubs and widows at 375 and 1280; font loading without a visible jump.
- **Colour:** tokens only; contrast in every state; one accent doing one job.
- **Icons and images:** one icon family at one stroke weight, optically centred; images sized, cropped and never shifting the layout; useful `alt`.
- **Interaction:** every control has default, hover, focus-visible, active, disabled, loading, error and success where they apply; focus order logical; targets 44px on touch.
- **Motion:** coherent easing and durations, interruptible, reduced-motion path.
- **Browser surfaces:** `::selection`, caret, scrollbars, focus rings, underline offset and tabular figures themed from the palette. This is the cheapest signal that a page was built rather than assembled.
- **Copy:** consistent terms, capitalisation and punctuation (curly quotes, `…`); controls name their action; errors name the problem and the fix. Ask before changing factual claims.
- **Code:** no debug output, dead code, unused imports, duplicate styles or temporary files.

## 5. Verify

Walk the path again: phone, tablet, desktop, wide; loading, empty, error, long and missing content; zoom to 200%; keyboard only; console clean; no layout shift. Run `lint.mjs` and `shot.mjs` once more. Ship only when the path is complete and consistent end to end.
