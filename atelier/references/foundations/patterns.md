# Patterns

Code for the parts every page repeats, written to pass the Baseline. Take the shape; the names, values and copy are yours. Tailwind equivalents follow each block where they differ.

## Tokens

The skeleton for the Design and Studio routes. Fill every value for this page; keep the names.

```css
:root {
  /* colour: OKLCH, tinted toward one anchor hue (here 250) */
  --color-paper: oklch(98% 0.006 250);
  --color-paper-2: oklch(95.5% 0.008 250);
  --color-ink: oklch(21% 0.015 250);
  --color-ink-2: oklch(40% 0.012 250);
  --color-muted: oklch(55% 0.01 250);
  --color-rule: oklch(89% 0.008 250);
  --color-accent: oklch(62% 0.17 35);
  --color-accent-ink: oklch(99% 0.01 35);
  --color-focus: oklch(60% 0.2 35);

  /* type */
  --font-display: "Gloock", Georgia, serif;
  --font-body: "Hanken Grotesk", ui-sans-serif, system-ui, sans-serif;
  --text-sm: 0.875rem;
  --text-md: 1rem;
  --text-lead: clamp(1.125rem, 1rem + 0.4vw, 1.3125rem);
  --text-title: clamp(1.25rem, 1.1rem + 0.5vw, 1.5625rem);
  --text-section: clamp(2.25rem, 1.6rem + 2.2vw, 3.25rem);
  --text-display: clamp(3rem, 1.8rem + 4.4vw, 5.25rem);

  /* space */
  --space-2xs: 4px; --space-xs: 8px; --space-sm: 12px; --space-md: 16px;
  --space-lg: 24px; --space-xl: 40px; --space-2xl: 64px; --space-3xl: 96px; --space-4xl: 144px;
  --container: 1312px;
  --gutter: clamp(1rem, 4vw, 4rem);

  /* shape and motion */
  --radius-sm: 6px; --radius-card: 14px; --radius-pill: 999px;
  --shadow-1: 0 1px 2px oklch(20% 0.01 250 / 0.06);
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
  --ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);
  --ease-in: cubic-bezier(0.55, 0, 1, 0.45);
  --dur-micro: 150ms; --dur-short: 200ms; --dur-long: 400ms;   /* full scale: motion/principles.md § 3 */
}

html, body { overflow-x: clip; }
html { scroll-padding-top: 88px; -webkit-text-size-adjust: 100%; }
body { margin: 0; background: var(--color-paper); color: var(--color-ink); font: 400 var(--text-md)/1.6 var(--font-body); font-synthesis: none; -webkit-font-smoothing: antialiased; }
h1, h2, h3 { font-family: var(--font-display); font-weight: 400; line-height: 1.05; letter-spacing: -0.025em; text-wrap: balance; overflow-wrap: break-word; min-width: 0; margin: 0; }
h1 { font-size: var(--text-display); max-width: 20ch; }
h2 { font-size: var(--text-section); max-width: 30ch; }
p { text-wrap: pretty; max-width: 65ch; }
img, video { display: block; max-width: 100%; height: auto; }
::selection { background: var(--color-accent); color: var(--color-accent-ink); }
:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; }
.container { width: 100%; max-width: calc(var(--container) + 2 * var(--gutter)); margin-inline: auto; padding-inline: var(--gutter); box-sizing: border-box; }
@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important; } }
```

**Tailwind v4:** the same values in `@theme { --color-paper: …; --font-display: …; }`, used as `bg-paper text-ink font-display`. **Tailwind v3:** under `theme.extend` in the config, pointing at the CSS variables.

## Button, all states

```css
.btn { display: inline-flex; align-items: center; gap: var(--space-xs); min-height: 48px; padding: 0 var(--space-lg); border: 1px solid var(--color-ink); border-radius: var(--radius-pill); background: var(--color-ink); color: var(--color-paper); font: 500 var(--text-md)/1 var(--font-body); white-space: nowrap; text-decoration: none; cursor: pointer; transition: background-color var(--dur-short) var(--ease-out), transform var(--dur-micro) var(--ease-out); }
@media (hover: hover) and (pointer: fine) { .btn:hover { background: var(--color-ink-2); } }
.btn:active:not(:disabled) { transform: scale(0.97); }
.btn:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; }
.btn:disabled, .btn[aria-disabled="true"] { opacity: 0.55; cursor: not-allowed; transform: none; }
.btn[aria-busy="true"] { cursor: progress; }
.btn--quiet { background: transparent; color: var(--color-ink); border-color: var(--color-rule); }
.btn--quiet:hover { background: var(--color-paper-2); }
```

Tailwind: `inline-flex items-center gap-2 min-h-12 px-6 rounded-full bg-ink text-paper transition-[background-color,transform] duration-200 hover:bg-ink-2 active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:opacity-55 disabled:cursor-not-allowed motion-reduce:transition-none`.

## Reveal that survives no script

```html
<script>document.documentElement.classList.add('js');</script>
```

```css
.js [data-reveal] { opacity: 0; transform: translateY(12px); transition: opacity var(--dur-long) var(--ease-out), transform var(--dur-long) var(--ease-out); transition-delay: calc(var(--i, 0) * 50ms); }
.js [data-reveal].is-in { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) { .js [data-reveal] { opacity: 1; transform: none; transition: none; } }
```

```js
const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -10% 0px' });
document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
```

Framer Motion: `initial={false}` on the server render, or `useReducedMotion()` to skip; never leave content at `opacity: 0` if hydration fails.

## Hero with background video

```html
<section class="hero">
  <video class="hero__media" autoplay muted loop playsinline preload="metadata" poster="poster.jpg" aria-hidden="true">
    <source src="hero.mp4" type="video/mp4">
  </video>
  <div class="hero__scrim" aria-hidden="true"></div>
  <div class="container hero__content">…</div>
</section>
```

```css
.hero { position: relative; min-height: 100svh; display: grid; align-items: end; isolation: isolate; }
.hero__media, .hero__scrim { position: absolute; inset: 0; width: 100%; height: 100%; z-index: -1; }
.hero__media { object-fit: cover; }
.hero__scrim { background: linear-gradient(to top, oklch(12% 0.01 250 / 0.7), oklch(12% 0.01 250 / 0.1) 60%); }
@media (prefers-reduced-motion: reduce) { .hero__media { display: none; } .hero { background: url(poster.jpg) center / cover; } }
```

## A loop that can pause

Anything moving past 5 seconds (marquee, ambient loop, looping video).

```html
<figure data-loop>
  <!-- the marquee, the loop or the video -->
  <button class="btn btn--quiet" type="button" data-loop-toggle>Pause</button>
</figure>
```

```css
[data-loop]:not(.is-running) *, [data-loop]:not(.is-running) *::before, [data-loop]:not(.is-running) *::after { animation-play-state: paused !important; }
html:not(.js) [data-loop-toggle] { display: none; }
```

```js
document.querySelectorAll('[data-loop]').forEach((el) => {
  const btn = el.querySelector('[data-loop-toggle]');
  const s = { seen: false, hover: false, focus: false, held: matchMedia('(prefers-reduced-motion: reduce)').matches };
  const sync = () => {
    const run = s.seen && !s.hover && !s.focus && !s.held;
    el.classList.toggle('is-running', run);
    el.querySelectorAll('video').forEach((v) => (run ? v.play().catch(() => {}) : v.pause()));
    btn.textContent = s.held ? 'Play' : 'Pause';
  };
  btn.addEventListener('click', () => { s.held = !s.held; sync(); });
  [['pointerenter', 'hover', true], ['pointerleave', 'hover', false], ['focusin', 'focus', true], ['focusout', 'focus', false]]
    .forEach(([t, k, v]) => el.addEventListener(t, () => { s[k] = v; sync(); }));
  new IntersectionObserver(([e]) => { s.seen = e.isIntersecting; sync(); }).observe(el);
});
```

## A form that posts nowhere yet

```html
<form class="signup" data-endpoint="" novalidate>
  <label for="email">Email</label>
  <div class="signup__row">
    <input id="email" name="email" type="email" autocomplete="email" inputmode="email" required>
    <button class="btn" type="submit">Join the list</button>
  </div>
  <p class="signup__help" role="status" aria-live="polite"></p>
</form>
```

```css
.signup__row { display: flex; gap: var(--space-xs); }
.signup input { flex: 1; min-width: 0; min-height: 48px; padding: 0 var(--space-md); border: 1px solid var(--color-muted); border-radius: var(--radius-pill); background: var(--color-paper); color: var(--color-ink); font: inherit; outline: 2px solid transparent; outline-offset: -3px; }
.signup input:focus-visible { outline-color: var(--color-focus); }
.signup input[aria-invalid="true"] { border-color: oklch(55% 0.2 25); }
.signup__help { min-height: 1lh; margin-top: var(--space-2xs); font-size: var(--text-sm); color: var(--color-muted); }
```

```js
document.querySelectorAll('form[data-endpoint]').forEach((f) => f.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = f.querySelector('input'); const help = f.querySelector('.signup__help');
  if (!input.checkValidity()) { input.setAttribute('aria-invalid', 'true'); help.textContent = 'Enter an email like name@example.com.'; input.focus(); return; }
  input.removeAttribute('aria-invalid');
  if (!f.dataset.endpoint) { help.textContent = 'Nothing was sent: this form is not connected yet.'; return; }
  // fetch(f.dataset.endpoint, { method: 'POST', body: new FormData(f) }) …
}));
```

## Segmented choice

```html
<fieldset class="seg"><legend class="sr-only">Billing</legend>
  <input type="radio" name="billing" id="b-m" value="monthly" checked><label for="b-m">Monthly</label>
  <input type="radio" name="billing" id="b-y" value="yearly"><label for="b-y">Yearly</label>
</fieldset>
```

```css
.seg { display: inline-flex; border: 1px solid var(--color-rule); border-radius: var(--radius-pill); padding: 4px; }
.seg input { position: absolute; opacity: 0; width: 1px; height: 1px; }
.seg label { display: inline-flex; align-items: center; min-height: 40px; padding: 0 var(--space-md); border-radius: var(--radius-pill); cursor: pointer; }
.seg input:checked + label { background: var(--color-ink); color: var(--color-paper); }
.seg input:focus-visible + label { outline: 2px solid var(--color-focus); outline-offset: 2px; }
```

## Figures that compare

```css
.stats { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); }
.stats > * { padding-inline: var(--space-lg); border-left: 1px solid var(--color-rule); }
.stats > :first-child { padding-left: 0; border-left: 0; }
.stats b { display: block; font: 400 var(--text-section)/1 var(--font-display); font-variant-numeric: tabular-nums; }
@media (max-width: 60rem) { .stats { grid-template-columns: minmax(0, 1fr); } .stats > * { padding: var(--space-md) 0; border-left: 0; border-top: 1px solid var(--color-rule); } .stats > :first-child { border-top: 0; } }
```

Only figures the user gave, each with its unit and what it counts.

## Missing fact

```html
<span class="fill" data-fill="opening-hours">Hours to confirm</span>
```

```css
.fill { color: var(--color-muted); outline: 1px dashed var(--color-rule); outline-offset: 2px; border-radius: 2px; }
```

## Skip link

```html
<a class="skip" href="#main">Skip to content</a>
```

```css
.skip { position: absolute; left: var(--space-md); top: -100px; z-index: 600; padding: var(--space-xs) var(--space-md); background: var(--color-ink); color: var(--color-paper); }
.skip:focus { top: var(--space-md); }
```
