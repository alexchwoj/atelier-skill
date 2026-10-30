# adapt

Make a design work on other sizes, inputs and media: phone, tablet, desktop, wide screens, touch, print, email.

## Assess

Where does it break today (`node scripts/shot.mjs <target> --full` at every size)? What is the primary context of use on each device: a quick check on the phone, deep work on the desktop? Which content and actions matter most on the smallest screen?

## Strategy by direction

**Desktop to phone**
- Stack in reading order; the head block, then the content; a split's visual after its text.
- Navigation: what fits stays visible, the rest behind a menu; a bottom bar for apps with three to five destinations; tabs that scroll sideways rather than wrap.
- Thumb zone: primary actions low and reachable; 44 to 48px targets with space between them.
- Content: same information, reorganised (tables restack into labelled rows or pin the first column; side filters into a sheet). Never hide meaningful content on phones.
- Type: body at least 16px (inputs too, or iOS zooms); display sizes fluid with `clamp()`.

**Phone to desktop**
- Use the width: multi-column layouts, side-by-side detail views, persistent navigation, hover affordances as a bonus, keyboard shortcuts.
- Cap the container (1280 to 1440) and the measure; at 1920 the gutters grow, the grid does not.

**Tablet:** a hybrid; two panes in landscape, one in portrait; touch-first targets.

**Print:** `@media print` with hidden nav and decoration, black on white, link URLs after links, sensible page breaks (`break-inside: avoid` on figures and table rows).

**Email:** tables for layout, inline styles, 600px wide, web-safe font fallbacks, images with dimensions and `alt`, no JavaScript, dark-mode tested.

## Techniques

- Breakpoints from the content, not devices: add one where the layout breaks. Mobile-first `min-width` queries.
- Container queries (`@container`) for components whose layout depends on their box, not the viewport.
- Detect input, not just width: `@media (hover: hover) and (pointer: fine)` for hover effects; `(pointer: coarse)` for bigger targets.
- Safe areas: `padding: env(safe-area-inset-top) …` with `viewport-fit=cover`.
- Responsive images: `srcset` with width descriptors and an honest `sizes`; `<picture>` when the crop changes (art direction).
- Viewport units: `svh`/`dvh` for full-height sections, never bare `vh` on mobile.

## Check

Real devices or at least 320, 375, 390, 768, 1024, 1280, 1440 and 1920 widths, both orientations, touch and keyboard, zoom 200%, and the reduced-motion path. DevTools emulation alone misses touch, safe areas and real performance.
