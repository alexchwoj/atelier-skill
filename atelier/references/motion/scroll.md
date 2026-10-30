# Scroll motion

Motion tied to scrolling: reveals, pinned scenes, scrubbed timelines, progress. The rule: **scroll motion tells a story beat or it does not exist.** Unrelated movement on every scroll tick is noise.

## 1. Choose the tool

| Need | Tool |
| --- | --- |
| Elements appear once as they enter | IntersectionObserver + a CSS transition (`patterns.md` § Reveal), or Motion `useInView({ once: true, margin: '-100px' })` |
| An animation mapped 1:1 to scroll, simple | CSS scroll-driven animations: `animation-timeline: view()` / `scroll()`, inside `@supports` |
| A pinned, multi-step story with labels, or anything complex | GSAP + ScrollTrigger (timeline with `scrub` and `pin`) |
| Smooth, inertial page scrolling | Lenis, only when the concept needs it, never under reduced motion, never on Work or Read surfaces |

## 2. The budget

- **One scroll pattern family per page** (a pinned story, or scrubbed heads, or a progress spine), plus at most one reveal language for the rest.
- **Never on body text.** Targets are structural: a pinned section, one display element, figures, images, a thin progress line. Prose never moves under the reader.
- **Static end state in the base CSS.** Without JS, without support, or with reduced motion, the page is complete and readable.
- **Never trap the reader.** A pinned section lasts as long as its content needs (about 100vh of scroll per state change) and never hides the next action.
- **Never hijack the wheel** (no snapping the whole page, no custom scroll speed) except inside a clearly bounded horizontal gallery.
- **Contrast and CTAs win.** Effects never lower text contrast, cover an action or obscure the product.

## 3. Reveals

**Default reveal** (fade and rise, once): `foundations/patterns.md` § Reveal.

**Clip reveal** (images and panels, marketing):

```css
.js .reveal-clip { clip-path: inset(0 0 100% 0); transition: clip-path 700ms var(--ease-in-out); }
.js .reveal-clip.is-in { clip-path: inset(0 0 0 0); }
```

**Masked word reveal** (headlines rising through an invisible line; short heads only, never paragraphs or text containing links):

```html
<h2 data-mask-reveal>Live in one point nine seconds</h2>
```

```css
[data-mask-reveal] .mw { display: inline-block; overflow: hidden; vertical-align: top; padding-bottom: 0.08em; margin-bottom: -0.08em; }
[data-mask-reveal] .mw > span { display: inline-block; transform: translateY(110%); transition: transform 800ms var(--ease-out); transition-delay: calc(var(--i) * 35ms); }
[data-mask-reveal].is-in .mw > span { transform: none; }
@media (prefers-reduced-motion: reduce) { [data-mask-reveal] .mw > span { transform: none; transition: none; } }
```

```js
document.documentElement.classList.add('js');
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('[data-mask-reveal]').forEach((el) => {
  if (reduce) return;                                   // reduced motion keeps the plain text
  const text = el.textContent.trim();
  el.setAttribute('aria-label', text);
  el.innerHTML = text.split(/(\s+)/).map((w, i) => /\s+/.test(w) ? w
    : `<span class="mw" aria-hidden="true"><span style="--i:${i / 2}">${w}</span></span>`).join('');
  new IntersectionObserver(([e], o) => { if (e.isIntersecting) { el.classList.add('is-in'); o.disconnect(); } },
    { rootMargin: '0px 0px -18% 0px' }).observe(el);
});
```

Split by word, not letter (calmer). Run after fonts load if line breaks matter. GSAP equivalent: `gsap.fromTo(words, { yPercent: 110 }, { yPercent: 0, duration: 0.8, ease: 'power3.out', stagger: 0.035, scrollTrigger: { trigger: el, start: 'top 82%', once: true } })`.

## 4. CSS scroll-driven patterns

All inside `@supports (animation-timeline: view())` and `@media (prefers-reduced-motion: no-preference) and (min-width: 40rem)`. Use `linear` (scroll distance maps 1:1 to progress). Declare `animation-timeline` and `animation-range` after the `animation` shorthand, which resets them.

**Pinned steps** (a sticky panel whose steps light up in turn):

```css
.steps-track { min-height: 260vh; }
.steps-pin { position: sticky; top: calc(var(--nav-h, 0px) + var(--space-xl)); }
@supports (animation-timeline: view()) {
  @media (prefers-reduced-motion: no-preference) and (min-width: 40rem) {
    .steps-track { view-timeline: --steps block; }
    .steps-pin li { animation: step linear both; animation-timeline: --steps; }
    .steps-pin li:nth-child(1) { animation-range: contain 5% contain 30%; }
    .steps-pin li:nth-child(2) { animation-range: contain 30% contain 55%; }
    .steps-pin li:nth-child(3) { animation-range: contain 55% contain 80%; }
    @keyframes step { from { opacity: 0.25; transform: translateY(8px); } to { opacity: 1; transform: none; } }
  }
}
```

**Scrubbed statement** (one display head wiped in): `animation: wipe linear both; animation-timeline: view(); animation-range: entry 20% cover 45%;` with `@keyframes wipe { from { clip-path: inset(0 100% 0 0); } }`.

**Progress line:** a fixed 2px bar with `transform-origin: left; animation: grow linear both; animation-timeline: scroll(root);` and `@keyframes grow { from { transform: scaleX(0); } }`.

**Parallax, done responsibly:** one layer, a small range (`translateY` of 10 to 15% of its height), images only, never text, removed under reduced motion.

## 5. GSAP ScrollTrigger storytelling

For a pinned narrative (a product frame that changes state as you scroll, a scene handed off to the next):

```js
gsap.registerPlugin(ScrollTrigger);
const mm = gsap.matchMedia();
mm.add({ motion: '(prefers-reduced-motion: no-preference) and (min-width: 768px)' }, () => {
  const tl = gsap.timeline({
    scrollTrigger: { trigger: '.story', start: 'top top', end: '+=300%', pin: true, scrub: 0.6 },
  });
  tl.addLabel('one').to('.screen-a', { opacity: 0, scale: 0.96 })
    .addLabel('two').from('.screen-b', { opacity: 0, yPercent: 8 }, '<')
    .addLabel('three').to('.caption-2', { opacity: 1 });
});
```

- Scrub a number (0.4 to 1) for a cinematic, eased follow; `scrub: true` for precise technical walkthroughs.
- Map each scene to a label; one state change per label.
- Section handoffs (the current scene scales, masks or blurs into the next) are where the high-impact transitions go; the rest stays calm.
- `ScrollTrigger.refresh()` after images, fonts or async content change heights. In React, create everything inside `gsap.context()` (or `useGSAP`) and revert it on unmount so no trigger outlives its page.
- `gsap.matchMedia()` gives smaller screens and reduced motion a simpler, unpinned version.

## 6. Lenis (smooth scroll)

Only on Sell or Show pages whose concept is cinematic, never under reduced motion:

```js
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const lenis = new Lenis({ lerp: 0.1 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}
```

Anchor links, keyboard scrolling and the browser's find must still work.

## 7. Check

Scroll fast and slow, up and down, with the keyboard (Space, Page Down) and on a phone; resize mid-page; reload halfway down (pins and reveals must be correct, not stuck hidden); turn on reduced motion and confirm a complete static page.
