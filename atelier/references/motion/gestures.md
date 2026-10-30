# Gestures and springs

Motion the user drives with a finger or a pointer: drags, swipes, flicks, sheets, carousels, sliders, draggable cards. The standard is iOS: it starts from where the thing is, follows the finger exactly, keeps the finger's speed when released, and can be grabbed again at any instant.

## 1. Interruptibility first

- **Never lock input during a transition.** A sheet that is closing can be grabbed and pulled back up.
- **Animate from the live value, never the target.** On interrupt, read the current transform (Motion's motion value, GSAP's `gsap.getProperty`, or the computed style) and start the next animation from there.
- **Gesture-driven motion uses springs**, not CSS transitions or keyframes, which cannot be grabbed and reversed.
- **Blend velocity on reversal** so the motion does not hit a wall when the direction flips.

## 2. Tracking

- Use Pointer Events and `element.setPointerCapture(e.pointerId)` once the drag starts; respect the grab offset (the point you grabbed stays under the finger).
- Wait for about **10px of movement** before committing to a direction (horizontal swipe or vertical scroll), then track 1:1.
- Recognise gestures from the first move, in parallel; never wait for the gesture to end to decide what it was.
- Ignore a second touch while one drag is active.
- Write the position straight to the element (`el.style.transform = \`translate3d(${x}px, ${y}px, 0)\``) or to a motion value. Never `setState` per frame, and never through a CSS variable on a parent (every child recalculates its style).
- Tap: highlight on pointer-down, commit on pointer-up, cancel when the pointer leaves the target; about 10px of hit slop on small targets.

## 3. Release: velocity and momentum

Measure release velocity from the last few pointer events (px per ms or px per second).

**Dismiss decision** (sheets, toasts, cards):

```js
const velocity = Math.abs(dragDistance) / (Date.now() - dragStart);   // px per ms
if (Math.abs(dragDistance) > THRESHOLD || velocity > 0.11) dismiss(); else snapBack();
```

**Momentum projection** (where would it stop if it kept sliding?), then snap to the nearest resting point:

```js
function project(velocityPxPerSec, decelerationRate = 0.998) {
  return (velocityPxPerSec / 1000) * decelerationRate / (1 - decelerationRate);
}
const target = nearestSnapPoint(position + project(releaseVelocity));
animate(el, { y: target }, { type: 'spring', bounce: 0.15, duration: 0.4, velocity: releaseVelocity });
```

Use 0.99 for a snappier feel. Always pass the release velocity into the spring so the motion continues at the finger's speed.

## 4. Edges: rubber-band, never a wall

Past a boundary, the content moves less and less, then springs back:

```js
function rubberband(overshoot, dimension, c = 0.55) {
  return (overshoot * dimension * c) / (dimension + c * Math.abs(overshoot));
}
```

## 5. Spring values

| Use | Motion | Apple terms |
| --- | --- | --- |
| Repositioning, snapping, default | `{ type: 'spring', bounce: 0, duration: 0.4 }` | damping 1.0, response 0.4 |
| Sheet or drawer | `{ type: 'spring', bounce: 0.15, duration: 0.35 }` | damping 0.85, response 0.3 |
| After a flick | `{ type: 'spring', bounce: 0.2, duration: 0.45 }` | damping 0.8, response 0.4 |
| Drag release | `{ type: 'spring', stiffness: 500, damping: 30 }` | |
| Rotation | `{ type: 'spring', bounce: 0.2, duration: 0.4 }` | damping 0.8, response 0.4 |

Two-dimensional motion: animate x and y as separate springs.

## 6. Without a library

A small, stable spring integrator for vanilla pages:

```js
function spring({ from, to, velocity = 0, stiffness = 400, damping = 34, mass = 1, onUpdate, onDone }) {
  let x = from, v = velocity, last = performance.now(), raf;
  const step = (now) => {
    const dt = Math.min(0.032, (now - last) / 1000); last = now;
    const force = -stiffness * (x - to) - damping * v;
    v += (force / mass) * dt; x += v * dt;
    onUpdate(x);
    if (Math.abs(v) < 0.01 && Math.abs(x - to) < 0.01) { onUpdate(to); onDone?.(); return; }
    raf = requestAnimationFrame(step);
  };
  raf = requestAnimationFrame(step);
  return () => cancelAnimationFrame(raf);   // call to interrupt, then start a new spring from the live x
}
```

## 7. Feel-check

Drag slowly, fast, and change direction mid-drag; flick and catch it before it settles; drag past every edge; try it on a real phone with one thumb. It should never jump, stick, or ignore the finger.
