# Motion recipes

Exact, production-ready motion for the parts every interface has. Tokens (`--ease-out`, `--dur-*`) are defined in `motion/principles.md` § 3. Each recipe works with CSS alone; Motion (Framer Motion) and GSAP equivalents follow where they differ. All of them need the reduced-motion layer in `motion/accessibility.md`.

## Press

```css
.btn { transition: transform var(--dur-press) var(--ease-out), background-color 150ms ease; }
.btn:active:not(:disabled) { transform: scale(0.97); }
@media (hover: hover) and (pointer: fine) { .btn:hover { background: var(--color-ink-2); } }
.btn { -webkit-tap-highlight-color: transparent; }   /* when the pressed state is drawn by you */
```

Disabled controls never scale. Hover only on devices that hover, or touch screens get stuck hovers.

## Popover, dropdown, menu, select

```css
.popover {
  transform-origin: var(--transform-origin, top center);   /* set from the trigger's side */
  transition: opacity 200ms var(--ease-out), transform 200ms var(--ease-out);
}
.popover:not([data-open]) { opacity: 0; transform: scale(0.95); pointer-events: none; }
/* native popover / dialog with @starting-style */
[popover] { transition: opacity 200ms var(--ease-out), transform 200ms var(--ease-out), overlay 200ms allow-discrete, display 200ms allow-discrete; }
[popover]:popover-open { opacity: 1; transform: none; }
@starting-style { [popover]:popover-open { opacity: 0; transform: scale(0.95); } }
```

Context menus: no entrance animation, a short fade on exit only.

## Tooltip

```css
.tooltip { transform-origin: var(--transform-origin); transition: opacity 125ms var(--ease-out), transform 125ms var(--ease-out); }
.tooltip:not([data-open]) { opacity: 0; transform: scale(0.97); }
.tooltip[data-instant] { transition-duration: 0ms; }   /* once one tooltip is open, neighbours open instantly */
```

Hover delay 600 to 900ms before the first one; 0 on keyboard focus.

## Modal

```css
.modal { transition: opacity var(--dur-modal) var(--ease-out), transform var(--dur-modal) var(--ease-out); }
.modal:not([open]), .modal[data-closing] { opacity: 0; transform: scale(0.96); }
.backdrop { transition: opacity var(--dur-modal) var(--ease-out); }
dialog { overscroll-behavior: contain; }
```

Dim to focus: the backdrop darkens and the page behind may scale to 0.98. Non-blocking panels get no scrim.

## Drawer, sheet

```css
.sheet { transform: translateY(0); transition: transform var(--dur-drawer) var(--ease-drawer); overscroll-behavior: contain; }
.sheet[data-closed] { transform: translateY(100%); }
```

Percent translate is relative to the sheet, so it works at any height. Draggable sheets: `motion/gestures.md` § Drag to dismiss.

## Toast

```css
.toast {
  transition: opacity 400ms ease, transform 400ms var(--ease-out);
  @starting-style { opacity: 0; transform: translateY(100%); }
}
.toast[data-leaving] { opacity: 0; transform: translateY(100%); transition-duration: 250ms; }
```

Easing, not a spring: springs wobble on system messages. Toasts are for failures and invisible effects; a visible effect needs no toast.

## Accordion, collapse

```css
details::details-content { block-size: 0; overflow: hidden; transition: block-size 250ms var(--ease-out), content-visibility 250ms allow-discrete; }
details[open]::details-content { block-size: auto; }
:root { interpolate-size: allow-keywords; }   /* lets block-size animate to auto where supported */
```

Fallback: measure the content height in JS and animate `height` to that number. Height is a layout property: keep it short (200 to 250ms) and only for accordions.

## Content swap (crossfade with blur glue)

```css
.swap { transition: opacity 200ms ease, filter 200ms ease; }
.swap[data-changing] { opacity: 0.6; filter: blur(2px); }
```

The 2px blur merges two states into one perceived transformation. Keep blur under 20px.

## Icon swap (copy → check, play → pause)

```css
.icon-swap { display: grid; }
.icon-swap > * { grid-area: 1 / 1; transition: opacity 300ms cubic-bezier(0.2, 0, 0, 1), transform 300ms cubic-bezier(0.2, 0, 0, 1), filter 300ms cubic-bezier(0.2, 0, 0, 1); }
.icon-swap > [data-hidden] { opacity: 0; transform: scale(0.25); filter: blur(4px); }
```

Motion: `{ type: "spring", duration: 0.3, bounce: 0 }`. Both icons stay in the DOM.

## Enter and exit of a block (cards, list items, panels)

```css
.enter { animation: enter 300ms var(--ease-out) both; animation-delay: calc(var(--i, 0) * 80ms); }
@keyframes enter { from { opacity: 0; transform: translateY(12px); filter: blur(4px); } }
.exit { animation: exit 150ms var(--ease-out) both; }
@keyframes exit { to { opacity: 0; transform: translateY(-12px); filter: blur(4px); } }
```

Stagger only semantic chunks (title, line, actions) on infrequent entrances. In Motion, wrap state swaps in `<AnimatePresence initial={false}>` so the first render does not animate; leave `initial` on for the hero's deliberate entrance.

## Tab indicator

Animate one element, not two colours. Either a sliding pill:

```css
.tabs { position: relative; }
.tabs .pill { position: absolute; inset-block: 4px; left: 0; width: var(--w); transform: translateX(var(--x)); transition: transform 250ms var(--ease-in-out), width 250ms var(--ease-in-out); }
```

(set `--x` and `--w` on the pill itself from the active tab's box), or a duplicate of the tab list styled as active and revealed with `clip-path: inset(0 var(--r) 0 var(--l))`, so text colour and background change in perfect sync. Keyboard tab switches are instant.

## Hold to confirm (destructive actions)

```css
.hold { position: relative; overflow: hidden; }
.hold .fill { position: absolute; inset: 0; background: var(--color-error); clip-path: inset(0 100% 0 0); transition: clip-path 200ms var(--ease-out); }
.hold:active .fill { clip-path: inset(0 0 0 0); transition: clip-path 2s linear; }
```

Linear while filling (it is progress), a quick ease-out snap back on release. Confirm on `transitionend` of the full fill.

## Number and counter changes

```css
.figure { font-variant-numeric: tabular-nums; }
```

Tabular figures stop the layout jumping as digits change. Roll digits with a vertical translate per digit column (`translateY(calc(var(--d) * -10%))` on a 0 to 9 strip, 400ms `--ease-out`), or count up only once, on first view, and only for a figure that is the point of the section.

## Page and view transitions

Same-document (SPA) or cross-document (MPA) with the View Transitions API:

```css
@view-transition { navigation: auto; }                       /* cross-document, same origin */
::view-transition-old(root) { animation: 200ms var(--ease-out) both vt-out; }
::view-transition-new(root) { animation: 300ms var(--ease-out) both vt-in; }
@keyframes vt-out { to { opacity: 0; transform: translateY(-8px); } }
@keyframes vt-in { from { opacity: 0; transform: translateY(8px); } }
.product-image { view-transition-name: product-hero; }       /* shared element morphs between pages */
```

```js
const go = (update) => (document.startViewTransition ? document.startViewTransition(update) : update());
```

Next.js App Router with Motion: the exit only plays if the wrapper persists. Put a keyed `AnimatePresence mode="wait" initial={false}` in `app/template.tsx` with `key={pathname}`, the `motion.div` as its direct child, and freeze the outgoing route's context so it keeps its old content while leaving. Prefer View Transitions for simple fades and shared elements; Motion for orchestrated or interruptible exits.

## Theme switch

Switching light and dark should not animate every colour on the page:

```js
function setTheme(t) {
  const css = document.createElement('style');
  css.textContent = '*,*::before,*::after{transition:none!important}';
  document.head.appendChild(css);
  document.documentElement.dataset.theme = t;
  getComputedStyle(document.body).opacity;        // flush styles
  requestAnimationFrame(() => css.remove());
}
```

For a deliberate theme reveal, use a view transition with a circular `clip-path` from the toggle instead.

## Marquee

```css
.marquee { overflow: hidden; mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent); }
.marquee__track { display: flex; gap: var(--space-2xl); width: max-content; animation: marquee 40s linear infinite; }
.marquee:hover .marquee__track, .marquee:focus-within .marquee__track { animation-play-state: paused; }
@keyframes marquee { to { transform: translateX(-50%); } }    /* the track holds the items twice */
```

Constant speed (around 40 to 80px per second whatever the width), paused on hover and focus, a visible pause control past 5 seconds, stopped under reduced motion. The duplicate set is `aria-hidden="true"`.

## Hero entrance (marketing)

One choreography, from an already-visible default, total 0.6 to 1.2s:

```css
.js .hero [data-in] { opacity: 0; transform: translateY(16px); filter: blur(6px); }
.js .hero.is-in [data-in] { opacity: 1; transform: none; filter: none;
  transition: opacity 700ms var(--ease-out), transform 900ms var(--ease-out), filter 700ms var(--ease-out);
  transition-delay: calc(var(--i) * 90ms); }
```

Order: headline (by line or by word, `motion/scroll.md` § Masked reveal), then the line, then the actions, then the visual. The primary action is clickable before the sequence ends.
