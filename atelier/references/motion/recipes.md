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

Easing, not a spring: springs wobble on system messages. Toasts are for failures and invisible effects; a visible effect needs no toast. Several at once: § Toast stack.

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

**Respond at once.** The transition starts within 100ms of the click, whatever is still loading: a shared image morphs using the thumbnail the visitor just clicked (already decoded), and the full-size image replaces it inside the plate when it is ready (a 150ms crossfade, no layout change). Never wait on decoding or data before moving. The lead image of every view a transition can open is never `loading="lazy"`; warm it when its link is hovered or focused (`new Image().src = …` then `img.decode()`). A link with no thumbnail of its own (a text link, a "next" button) still lands on a composed frame: the incoming view's plate arrives as its colour or a blurred low-resolution version, never as an empty grey box. The old and new views overlap (the new one fades in while the old fades out, or the new view simply appears under the morphing element), so no frame between them is blank.

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

## Toast stack

Several toasts stack as a deck at one edge; hovering or focusing the deck fans it out.

```css
.toaster { position: fixed; bottom: 24px; right: 24px; width: 356px; --gap: 14px; }
.toast {
  position: absolute; bottom: 0; right: 0; width: 100%;
  /* --i = 0 is the newest, in front */
  transform: translateY(calc(var(--i) * var(--gap) * -1)) scale(calc(1 - var(--i) * 0.05));
  transform-origin: bottom center;
  height: var(--front-h);                        /* collapsed: every card takes the front card's height */
  transition: transform 400ms var(--ease-out), opacity 400ms var(--ease-out), height 400ms var(--ease-out);
}
.toast > * { transition: opacity 200ms var(--ease-out); }
.toast:not([data-i="0"]) > * { opacity: 0; }     /* only the front card shows content when collapsed */
.toast[data-i="3"], .toast[data-i="4"] { opacity: 0; pointer-events: none; }   /* three visible */
@starting-style { .toast { transform: translateY(100%); opacity: 0; } }

.toaster:is(:hover, :focus-within) .toast {
  height: var(--h);                               /* each card's own measured height */
  transform: translateY(calc(var(--offset) * -1)); /* offset = i × gap + heights of the newer cards */
}
.toaster:is(:hover, :focus-within) .toast > * { opacity: 1; }
.toaster:hover .toast::after { content: ""; position: absolute; inset-inline: 0; bottom: 100%; height: calc(var(--gap) + 1px); } /* no hover gaps */
.toast[data-leaving] { opacity: 0; transform: translateY(100%); transition-duration: 200ms; }
```

Collapsed is the default: the newest toast reads in full and the ones behind show only as edges of a deck, so a burst never becomes a wall; the deck fans out on hover, focus or tap. A toast that changes state (uploading → done, uploading → failed, failed → retrying) changes in place on one clock: the icon swaps, title and detail crossfade together (`choreography.md` § 7), the progress line finishes or stops where it failed, and a failure moves to the front of the deck. Demo triggers play the real sequence (an upload that runs and then fails), never a toast that arrives already in its end state.

Script: measure each toast's height on mount (`--h`), set `--front-h` from the newest, `--i` and `--offset` from its position, and update them as toasts come and go; transitions, not keyframes, so a burst of toasts retargets smoothly. Timers (about 4s) pause while the deck is hovered or focused or the tab is hidden, and keep the time left. Swipe to dismiss at 45px or a flick above 0.11 px/ms (`motion/gestures.md` § 3); a drag the wrong way moves less and less. `Esc` collapses the deck. The region is `role="status"` with `aria-live="polite"`.

## Loading button (idle → loading → done)

The button keeps its size and label until a request is really in flight; states swap inside it on their own clock (`motion/choreography.md` § 7).

```html
<button class="act" type="submit" data-state="idle">
  <span data-s="idle">Save changes</span>
  <span data-s="loading" aria-hidden="true"><i class="spin"></i>Saving…</span>
  <span data-s="done" aria-hidden="true">Saved</span>
</button>
```

```css
.act { display: inline-grid; overflow: clip; }
.act > span { grid-area: 1 / 1; display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  transition: opacity 200ms var(--ease-out), transform 260ms var(--ease-out), filter 200ms var(--ease-out); }
.act > span:not([data-s="idle"]) { opacity: 0; transform: translateY(-60%); filter: blur(2px); }
.act:is([data-state="loading"], [data-state="done"]) > [data-s="idle"],
.act[data-state="done"] > [data-s="loading"] { opacity: 0; transform: translateY(60%); filter: blur(2px); transition-duration: 120ms; }
.act[data-state="loading"] > [data-s="loading"], .act[data-state="done"] > [data-s="done"] { opacity: 1; transform: none; filter: none; transition-delay: 70ms; }
```

Frequent, likely-to-succeed actions (adding a task, liking, renaming, reordering) are optimistic: the result appears at once and the save runs quietly behind it, with a small status ("Saving…", "Saved") and a rollback plus message if it fails; only rare, consequential actions (pay, delete, connect a bank) wait visibly on the button. Show the loading state only after 150 to 300ms of waiting and keep it at least 300ms once shown, so fast responses never flash. Labels in progress end with "…". Disable only while the request is in flight; announce the result in a live region. In React: `AnimatePresence mode="popLayout" initial={false}` with `key={state}`, children entering from `y: -25` and leaving to `y: 25` on `{ type: 'spring', duration: 0.3, bounce: 0 }`. When labels differ in width, animate the button's width from a measured inner box (§ Height and width to auto).

## Success check

```html
<svg class="ok" viewBox="0 0 52 52" aria-hidden="true">
  <circle pathLength="1" cx="26" cy="26" r="24"/><path pathLength="1" d="M15 27l7 7 15-16"/>
</svg>
```

```css
.ok { fill: none; stroke: currentColor; stroke-width: 3; stroke-linecap: round; }
.ok > * { stroke-dasharray: 1 1; stroke-dashoffset: 1; }
.ok.is-on circle { animation: ok-draw 280ms var(--ease-out) both; }
.ok.is-on path { animation: ok-draw 220ms var(--ease-out) 170ms both; }    /* starts at 60% of the ring */
.ok.is-on { animation: ok-pop var(--dur-spring-soft) var(--spring-soft) 330ms both; }
@keyframes ok-draw { to { stroke-dashoffset: 0; } }
@keyframes ok-pop { from { transform: scale(0.94); } }
@media (prefers-reduced-motion: reduce) { .ok > * { stroke-dashoffset: 0; animation: none; } .ok.is-on { animation: none; } }
```

Total under 900ms. The words ("Payment sent") arrive with or before the check, never only through it.

## Error

The field and message change state at once (colour, icon, text); a shake is optional and small: `translateX` 0 → −6px → 5px → −3px → 0 over 300ms, no overshoot, never under reduced motion. Focus moves to the first error; scrolling to it is instant under reduced motion.

## Height and width to auto

Measure an inner element, animate the outer one, never the same node:

```js
const outer = document.querySelector('.grow'), inner = outer.firstElementChild;
new ResizeObserver(([e]) => { const h = e.borderBoxSize[0].blockSize; if (h > 0) outer.style.setProperty('--h', h + 'px'); }).observe(inner);
```

```css
.grow { overflow: clip; height: var(--h, auto); transition: height 300ms var(--ease-out); }
```

Height is a layout property: allowed here because nothing else can do it, kept short, and never on a frequently repeated surface (where 100ms or none is right). Where it only needs to open and close, `grid-template-rows: 0fr → 1fr` animates in every engine without measuring.

## Morphing container

A pill that becomes a panel, a search field that opens into results, a tray that changes height per step. One container, its states written as token sets, contents swapped inside:

```css
.morph { border-radius: var(--r); width: var(--w); height: var(--h); background: var(--bg); overflow: clip;
  transition: width var(--dur-spring) var(--spring), height var(--dur-spring) var(--spring),
              border-radius var(--dur-spring) var(--spring), background-color 200ms ease; }
```

For long journeys or large sizes, animate with View Transitions or Motion `layout` (transform-based) instead of width and height. Content follows `motion/choreography.md` § 7: old out in 120ms, new in after 70ms. Elements present in both states (a title, an icon) keep their place and do not re-enter. Each step of a flow has a different height on purpose, so the change is legible.

## Stepper and onboarding

Steps move in the direction of travel: forward slides the old step out to the left and the new one in from the right by 24 to 48px (not the full width); back reverses and runs faster.

```js
function go(to) {
  const dir = to > current ? 'forward' : 'back';
  const swap = () => { render(to); current = to; };
  if (!document.startViewTransition || matchMedia('(prefers-reduced-motion: reduce)').matches) return swap();
  document.startViewTransition({ update: swap, types: [dir] });
}
```

```css
.step-body { view-transition-name: step; }
html:active-view-transition-type(forward)::view-transition-old(step) { animation: 160ms var(--ease-out) both step-out-l; }
html:active-view-transition-type(forward)::view-transition-new(step) { animation: 260ms var(--ease-out) 60ms both step-in-r; }
html:active-view-transition-type(back)::view-transition-old(step) { animation: 120ms var(--ease-out) both step-out-r; }
html:active-view-transition-type(back)::view-transition-new(step) { animation: 200ms var(--ease-out) 40ms both step-in-l; }
@keyframes step-out-l { to { opacity: 0; transform: translateX(-32px); } }
@keyframes step-in-r { from { opacity: 0; transform: translateX(32px); } }
@keyframes step-out-r { to { opacity: 0; transform: translateX(32px); } }
@keyframes step-in-l { from { opacity: 0; transform: translateX(-32px); } }
```

The progress indicator and the step title sit outside the transition and update in place. In React: `AnimatePresence custom={dir} mode="popLayout" initial={false}` with `variants` that read `dir`. Focus moves to the new step's heading.

## List: add, remove, reorder

The items that stay slide to their new places; only the ones that come or go fade.

```js
// View Transitions: name items by identity, then change the DOM inside a transition
list.querySelectorAll('li').forEach((li) => { li.style.viewTransitionName = 'match-element'; li.style.viewTransitionClass = 'row'; });
document.startViewTransition(() => reorder());
```

```css
::view-transition-group(*.row) { animation-duration: 300ms; animation-timing-function: var(--ease-out); }
```

Without View Transitions, FLIP: read every item's box, change the DOM, read again, and play each item from its old offset (`el.animate([{ transform: 'translate(dx,dy)' }, { transform: 'none' }], { duration: 300, easing: 'cubic-bezier(0, 0, 0.32, 1)' })`). Read all boxes before writing any style. In React, `layout` on each item plus `AnimatePresence mode="popLayout"`, keyed by id. Moving between groups (to do → done): mark the state first (the check draws, a strike runs, 200 to 250ms), then FLIP the item into its new group while it is raised above the rows it crosses (`z-index` and a shadow for the trip, 350 to 450ms on `--ease-in-out`, longer for longer trips), and let the rows it leaves and joins make room at the same time. A deleted row collapses its space while it fades, overlapping, not one after the other. Drag to reorder: the lifted item scales to 1.03 and gains a shadow in 150ms, neighbours make room over 200ms, the drop settles in 200ms on a spring. A keyboard reorder (Alt+arrow) moves without animation and announces the new position.

## Skeletons and loaders

A ladder by expected wait: under 300ms show nothing; 300ms to 1s a spinner or the button's loading state; over 500ms for a region whose shape is known, a skeleton of the real layout; a known length, a progress bar.

```css
.sk { position: relative; overflow: clip; background: var(--color-skeleton); border-radius: var(--radius-sm); }
.sk::after { content: ""; position: absolute; inset: 0; transform: translateX(-100%);
  background: linear-gradient(90deg, transparent, var(--color-skeleton-hi), transparent);
  animation: sk-sweep 1.5s var(--ease-in-out) infinite; }
@keyframes sk-sweep { 55%, 100% { transform: translateX(100%); } }   /* sweep ~0.8s, rest ~0.7s */
@media (prefers-reduced-motion: reduce) { .sk::after { animation: none; display: none; } }
```

The sweep moves a pseudo-element with `transform`, never `background-position` (which repaints). Skeleton blocks match the final shapes (round avatars, pill buttons); the region carries `aria-busy="true"`; real content replaces them with a 150 to 200ms fade, in reading order. Spinners turn once every 0.8 to 1.2s, linear, and keep turning under reduced motion (they report state).

## Tab indicator that stretches

For a lighter, more physical indicator, move its two edges on two springs, the leading edge fast and the trailing edge slower, so it stretches toward the target and catches up:

```js
// lead: { bounce: 0, duration: 0.22 }   trail: { bounce: 0, duration: 0.45 }   (Motion, or the integrator in gestures.md)
// moving right: right edge = lead, left edge = trail; moving left: the reverse
// draw it with transform: translateX(left) scaleX((right - left) / baseWidth), transform-origin: left
```

Keyboard tab changes stay instant.

## Counting numbers, revisited

Two different jobs. **A value that changes while you watch** (a balance, a live count, a calculator): digits roll in the direction of the change (up when it grows), each column a 0 to 9 strip moved by `translateY`, about 600 to 900ms on a spring, masked top and bottom, `tabular-nums`. **A figure that is the point of a marketing section:** it may count up once, on first view, over about 1 to 1.5s with `--ease-out`, ending on the exact value, never repeating on scroll back and never on every figure of the page. Invented figures are never animated; they are placeholders.
