# Brand motion: logos, wordmarks, heroes and intros

Authored motion that is watched rather than used: a logo that animates, a wordmark reveal, a choreographed hero, a 3 to 10 second product intro, an end card. It follows `motion/principles.md` and `motion/choreography.md`, with more time, more character and one difference: here motion *is* the content, so it gets a timing plan the user can approve before code.

## 1. Find the move in the mark

The animation comes from what the mark is, never from a catalogue of effects. Look at its geometry and its meaning and ask what it *does*:

- **Drawn** marks (monoline, signature, route, circuit) draw themselves: the stroke travels the path once, then the fill arrives.
- **Built** marks (blocks, letters from shapes, grids) assemble: parts arrive from one origin and lock into place.
- **Cut** marks (stencils, negative space, a letter with a notch) are revealed through a mask that wipes or opens.
- **Transforming** marks (a dot that is also an *i*, a square that becomes a speech bubble) morph from the simpler shape into the final one.
- **Type-led** wordmarks move like type: a weight change from thin to heavy on a variable face, letters rising through a line, a full stop that detaches and travels.
- **Product-led** brands let the product demonstrate itself: the interface performing its one job, at real speed, with a cursor that arrives a beat before it clicks.

Write the idea as one sentence before anything else: *the route line draws up the wall and the dot at its top becomes the logo's dot.* A fade, a scale-in or a glow is not an idea.

**For a product intro, the idea is what the product does for the person, not a picture of its name.** A notes app called Tidepool is not water and ripples; it is scattered thoughts settling into one calm note. A booking app called Harbor is not boats; it is a messy week becoming one confirmed slot. Write two candidate sentences, one from the name and one from the product's job, and build the second unless the brand truly is its name. The product's own interface (a real note, a real slot, real data) should be on screen early, because it is the proof.

## 2. Timing: acts, tempo and holds

**Acts.** Every authored piece, from a 1.2s logo sting to a 10s intro, has four acts. Share the total roughly as:

| Act | Share | What happens |
| --- | --- | --- |
| Set-up | 10 to 20% | the stage and the first element; a small anticipation if the mark is physical |
| Action | 30 to 35% | the main move: the draw, the assembly, the morph |
| Reaction | 15 to 20% | everything that responds to it: the name arrives, the tagline lands, a secondary detail settles |
| Resolution | 25 to 30% | stillness: the finished mark held long enough to be read and remembered |

The resolution is not optional. A piece that ends the instant its last element lands feels cut off; the hold is what makes it a logo rather than a transition.

**Tempo.** Pick a tempo and snap every key time to it, so the rhythm reads as intended rather than arbitrary. At 120 BPM a beat is 500ms, a half 250ms, a quarter 125ms. Big changes land on beats, type and small details on halves and quarters, holds are whole beats. Slower and calmer brands sit near 90 to 100 BPM (600 to 670ms beats), energetic ones near 128 to 140. With music, use its tempo; without, the grid still works.

**Fill the frame.** Size every act against the stage, not against the element: in each beat the change must be readable at a glance from across a room. A small dot moving inside a large empty frame, rings at 10% contrast, a line drawing in a corner, is dead air even while it technically moves. Make the opening element large or close (it can shrink into place later), give secondary effects real contrast, and let something with presence be on screen within 300ms. Glow and blur at full-frame size are costly and muddy; carry the change with scale, position, clip and opacity.

**Copy after an intro arrives as one group.** When the piece hands over to a page, the headline, line and action land together on the carrier (or the headline first and the rest as one group 100 to 200ms later), not as a 100ms-per-element fade-up chain, and they are readable and clickable the moment they land. Skipping, focusing the form or pressing any key ends the piece at its last frame.

**Holds and read time.** A line of text needs about 1.5 to 2s on screen to be read; a short result 0.5s; the end card 2 to 3s. Between beats leave 100 to 200ms of stillness. Dead air longer than a beat in the middle of a sequence reads as a mistake.

**Example, a 5 second intro at 120 BPM:**

```
beat  time   act         what moves                                   carrier
1     0.00   set-up      a single accent dot appears, 0.96 → 1        —
2     0.50   action      the dot stretches into a line across the frame the dot
3     1.00   action      the line draws the mark's outline (stroke)    the line
4     1.50   action      the fill floods in behind the stroke          the outline
5     2.00   reaction    the wordmark rises through a mask, by letter  the mark's baseline
6     2.50   reaction    tagline fades in under it                     —
7–10  3.00   resolution  hold: nothing moves                           —
```

## 3. Handoffs and carriers

Every change of scene passes through something the eye can follow: a dot that grows into the next background, a bar that wipes across, a word that scales up until it becomes the frame, the logo's own shape opening to reveal what is behind it. Name the carrier in the beat sheet (`choreography.md` § 1). A cut between unrelated compositions is allowed on a strong beat, once or twice in a piece, never as the default.

## 4. Techniques

**Path drawing** (no measuring with `pathLength="1"`):

```html
<svg viewBox="0 0 120 120" role="img" aria-label="Northline">
  <path class="draw" pathLength="1" d="M20 100 L60 20 L100 100" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="butt"/>
</svg>
```

```css
.draw { stroke-dasharray: 1 1; stroke-dashoffset: 1; }
@media (prefers-reduced-motion: no-preference) {
  .draw { animation: draw 900ms var(--ease-in-out) 120ms both; }
}
@media (prefers-reduced-motion: reduce) { .draw { stroke-dashoffset: 0; } }
@keyframes draw { to { stroke-dashoffset: 0; } }
```

- Several strokes at a constant speed: the duration of each is proportional to its length (`path.getTotalLength()`), with overlapping starts.
- Fill after stroke: draw with `fill: none`, then fade the fill in under the finished stroke (or a duplicate filled path) in 200 to 300ms.
- Stroke drawing repaints every frame; fine for a logo, not for full-screen illustrations.

**Transforms on SVG parts:** `transform-box: fill-box; transform-origin: center;` on each part, CSS transforms only, and any existing `transform="…"` attribute moved to a wrapping `<g>`, or the part orbits the SVG's corner.

**Assembly:** parts come from one origin (all from below, or all from the centre), 50 to 100ms apart, at 75% overlap (`choreography.md` § 3), each from 8 to 24px away and 0.9 to 0.96 scale, on one curve. The last part may carry the only overshoot, as punctuation.

**Mask reveal:** wrap each letter or part in a clip (`overflow: clip` on an inline-block, or `clip-path: inset(0 0 100% 0)` → `inset(0)`) and translate the content up through it. One letter every quarter or eighth beat.

**Morph:** two paths with the same command structure interpolate with SMIL `<animate attributeName="d">` or, in Chrome and Firefox only, CSS `d: path()`. Different structures need a morphing library (GSAP MorphSVG, flubber) or a redraw so both shapes share points. A morph from a primitive (dot, square, line) into the mark is the most legible.

**Variable weight:** with a variable font, `font-variation-settings: "wght" 100` → `"wght" 800` over one beat on `--ease-in-out`. Load the face with its weight axis (`wght@100..900` on Google Fonts) or the tween snaps between instances.

**The wordmark as parts:** `node scripts/wordmark.mjs` exports the name as outlined SVG; give each glyph its own `<path>` (and the dot or accent its own element) so they can move separately.

**Physical marks** may squash and stretch: on impact about 1.2 × 0.8 for 40 to 60ms, back to 1 × 1 on a spring, volume preserved (one axis grows as the other shrinks), stretched along the direction of travel in flight up to 1.15 × 0.9. Skip it entirely for luxury, finance and anything calm.

**Text in heroes:**

- Split by line or word, never by letter for anything longer than a wordmark, and only for one headline per page. The element keeps `aria-label` with the full text; the fragments are `aria-hidden`.
- A highlight behind one key phrase: a pseudo-element in the accent at low opacity, `scaleX(0)` → `1` from the left over 400 to 600ms, after the text has landed.
- A rotating word in a sentence animates its width with it (measure the next word; `choreography.md` § 7) and pauses on hover, focus and after a few cycles.
- Typing animations only when typing is the product (a terminal, an editor), never in the `h1`: the headline must be complete at first paint.

**Ambient loops** (a breathing mark, drifting light behind the hero): amplitude under ±3% scale or a few pixels, periods that never line up (for example 4.0s, 5.5s and 3.5s on three layers), paused off-screen, stopped under reduced motion, and a pause control once it runs past 5 seconds. Never on text.

## 5. Make it seekable

An authored piece is written as a timeline that can be paused and set to any time, so it can be scrubbed, tested frame by frame and rendered:

```js
// GSAP: build paused, expose seek
const tl = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } });
// … tweens placed on the tempo grid with labels: tl.addLabel('mark', 0.5) …
window.__timeline = { duration: tl.duration(), seek: (t) => tl.seek(t, false), play: () => tl.play(0) };

// No dependency: Web Animations, all created paused, driven together
const anims = [/* el.animate(keyframes, { duration, delay, easing, fill: 'both' }) */];
anims.forEach((a) => a.pause());
window.__timeline = {
  duration: Math.max(...anims.map((a) => a.effect.getComputedTiming().endTime)) / 1000,
  seek: (t) => anims.forEach((a) => (a.currentTime = t * 1000)),
  play: () => anims.forEach((a) => { a.currentTime = 0; a.play(); }),
};
```

`scripts/motion.mjs` uses `window.__timeline` when it exists: the filmstrip shows the frames at each beat, and `--frames <fps>` writes the whole piece as numbered PNGs, which `ffmpeg -framerate 60 -i frame-%04d.png -pix_fmt yuv420p intro.mp4` turns into a video.

## 6. Where it plays

- **On a page load,** brand motion is short: a logo or hero entrance finishes within about 1.2s and never gates the content or the first click. It plays once per session (`sessionStorage`), not on every navigation.
- **A 3 to 10s intro** is its own piece: a product video, a launch section the visitor scrolls to, a splash inside an app the first time only. It has a visible skip or pause control and never sits between a visitor and the page.
- **As a file:** inline SVG with CSS (the default on the web); a standalone `.svg` with its own `<style>` and a reduced-motion media query inside (works in `<img>`); Lottie when the motion must ship to native apps or a designer will keep editing it (`motion/lottie.md`); a video rendered from the seekable timeline for social and decks.

## 7. Reduced motion and the still

- The **last frame is a designed composition**: it is the poster, the reduced-motion state, the no-JS state and the thumbnail. Build it first.
- Under reduced motion the piece shows that frame, or one 200ms crossfade into it. Drawing, morphing, zooms and camera moves are removed, not slowed.
- Without sound the piece still makes sense; sound, if any, is opt-in.

## 8. Check

- The filmstrip (`node scripts/motion.mjs <page> --strip 8`) at every beat: each frame is a composition, not a half-state; the hero element leads in every frame; no two texts overlap.
- The mark at 64px and at 16px in its final state is still the mark.
- The first frame is not empty for long: something is visible within 100ms.
- Every handoff names its carrier, every act has its share, and the resolution holds.
